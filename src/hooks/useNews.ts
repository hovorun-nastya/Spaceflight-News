import {useEffect} from "react";
import {getNews} from "../data/api";
import News from "../data/News.interface";
import {useDispatch, useSelector} from "react-redux";
import {setIsLoading, setIsFailed, setNews, NewsSelector} from "../app/NewsSlice";
import {AppDispatch} from "../app/store";

export interface NewsOption {
  limit?: number | null
  search?: string | null
}

export interface Cache {
  [id: string]: News[]
}

const cache: Cache = {};

export const useNews = ({
                          limit,
                          search
                        }: NewsOption) => {

  const dispatch = useDispatch<AppDispatch>();
  const {isLoading, error, data, ordered} = useSelector(NewsSelector)

  useEffect(() => {
    (
      async () => {
        if (cache[`${limit}-${search}`]) {
          const news = cache[`${limit}-${search}`];
          dispatch(setNews(news))
        } else {
          try {
            dispatch(setIsLoading(true))
            const {data: news} = await getNews({limit, search})
            cache[`${limit}-${search}`] = news
            dispatch(setNews(news))
          } catch (err) {
            const error = (err as Error).message;
            dispatch(setIsFailed(error))
          }
          dispatch(setIsLoading(false))
        }
      }
    )()
  }, [limit, search])

  return {
    isLoading,
    error,
    data,
    ordered
  }
}
