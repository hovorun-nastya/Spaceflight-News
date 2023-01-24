import axios from 'axios';
import News from './News.interface'
import {NewsOption} from "../hooks/useNews";


export const api = axios.create({
  baseURL: 'https://api.spaceflightnewsapi.net/v3',
});

export const getNews = async ({limit, search}: NewsOption) => {
  let url = '/articles?'
  if (limit) url += `_limit=${limit}`
  if (search) url += `&title_contains=${search}&summary_contains=${search}`
  return await api.get<News[]>(url)
}

export const getArticle = async (id: string) => {
  let url = `/articles/${Number(id)}`
  console.log(url)
  return await api.get<News>(url)
}
