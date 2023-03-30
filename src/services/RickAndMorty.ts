import { axiosInstance as axios } from "./axios"

const baseUrl = 'https://rickandmortyapi.com/api'

export const getCharacters = ( page: number ) => {
   return axios.get( `${ baseUrl }/character/?page=${ page }` )
}