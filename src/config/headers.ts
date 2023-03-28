import { getToken } from "../utils"

export const urlBase = 'http://localhost:8000'
export const urlApi = `${urlBase}/api`

const headers = {
   'Content-Type': 'application/json',
   'Accept': 'application/json',
   'Access-Control-Allow-Origin': '*',
   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
   'Authorization': ''
}

export const config = (token: boolean = false ) => {
   if (token && getToken() != null) {
      headers.Authorization = `Bearer ${getToken()}`
   }
   return headers
}