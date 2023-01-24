import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../app/store";
import {NewsSelector, setArticle, setIsFailed, setIsLoading} from "../app/NewsSlice";
import {useEffect} from "react";
import {getArticle} from "../data/api";


export const useArticle = (id: string) => {

  const dispatch = useDispatch<AppDispatch>();
  const {isLoading, error, data} = useSelector(NewsSelector)
  console.log(data)

  useEffect(() => {
    (
      async () => {
        if (data?.[id]) {
          return
        } else {
          try {
            dispatch(setIsLoading(true))
            const {data: article} = await getArticle(id)
            dispatch(setArticle(article))
          } catch (err) {
            const error = (err as Error).message;
            dispatch(setIsFailed(error))
          }
          dispatch(setIsLoading(false))
        }
      }
    )()
  }, [id])

  return {
    isLoading,
    error,
    article: data?.[id]
  }

};
