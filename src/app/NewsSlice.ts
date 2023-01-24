import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from './store'
import News from "../data/News.interface";

export interface NewsState {
  ordered: News[] | null;
  data: { [id: string]: News } ;
  isLoading: boolean;
  error: string | null;
}

export const initialState: NewsState = {
  ordered: null,
  data: {},
  isLoading: false,
  error: null,
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setNews: (state, {payload}: PayloadAction<News[]>) => {
      state.ordered = payload;
      const objNews = payload.reduce((o,post)=>({...o,[post.id]: post}),{})
      state.data = objNews;
    },
    setIsFailed: (state, {payload}: PayloadAction<string | null>) => {
      state.error = payload
    },
    setArticle: (state, {payload}: PayloadAction<News>)=>{
      state.ordered?.push(payload);
     return{
       ...state,
       data: {...state.data, [payload.id]: payload}
     }
    },
  },
})

export const {setNews, setIsLoading, setIsFailed, setArticle} = newsSlice.actions

export const NewsSelector = (state: RootState) => state.news

export default newsSlice.reducer
