import axios from 'axios'
import { headers, urlApi } from '../config'
import { getToken } from "../utils"

export const axiosInstance = axios.create( {
   baseURL: urlApi
} )

axiosInstance.interceptors.request.use( ( config ) => {
   // @ts-ignore
   config.headers = headers
   config.headers.Authorization = `Bearer ${ getToken() }`
   return config
} )