import { axiosInstance as axios } from "./axios"

const baseUrl = 'https://rickandmortyapi.com/api'

export const getCharacters = ( page: number ) => {
   return axios.get( `${ baseUrl }/character/?page=${ page }` )
}

export const getFavoritesRickAndMortyData = ( url: string ) => {
   return axios.get( url )
}

export const getSingeCharacter = ( id: number ) => {
   return axios.get( `${ baseUrl }/character/${ id }` )
}