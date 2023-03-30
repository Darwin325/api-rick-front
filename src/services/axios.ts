import axios from 'axios'
import { headers, urlApi } from '../config'
import { router } from "../routes"
import { getToken, removeToken, removeUser } from "../utils"

//manejar errores


export const axiosInstance = axios.create( {
   baseURL: urlApi
} )

// @ts-ignore
axiosInstance.interceptors.response.use( ( response ) => {
   return response
}, async ( error ) => {
   if (error.response.status === 401) {
      await router.push( { name: 'Login' } )
      removeToken()
      removeUser()
   }
   return Promise.reject( error )
} )

axiosInstance.interceptors.request.use( ( config ) => {
   // @ts-ignore
   config.headers = headers
   config.headers.Authorization = `Bearer ${ getToken() }`
   return config
} )