import axios from 'axios'
import { config } from '../config'

const url = 'http://localhost:8000/api'

const get = async (path: string, token: boolean, data: unknown = null) => {
   return await axios.get( `${ url }/${ path }`, { headers: config( token ), params: data } )
}

const post = async (path: string, token: boolean,  data: unknown) => {
  const response = await axios.post(`${url}/${path}`, data, { headers: config(token) })
  return response.data
}

const put = async (path: string, token: boolean, data: unknown) => {
   const response = await axios.put(`${url}/${path}`, data, { headers: config(token) })
   return response.data
}

const remove = async (path: string, token: boolean ) => {
   const response = await axios.delete(`${url}/${path}`, { headers: config(token) })
   return response.data
}

export {  get, post, put, remove }