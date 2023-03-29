import { axiosInstance as axios } from "./axios"

const baseUrl = 'https://rickandmortyapi.com/api'

export const getCharacters = ( page: number ) => {
   const controller: AbortController = new AbortController()
   return {
      call: axios.get( `${ baseUrl }/character/?page=${ page }`, { signal: controller.signal } ),
      controller
   }
}