import { axiosInstance as axios } from './axios'


export const favorites = () => {
   const controller: AbortController = new AbortController()
   return {
      call: axios.get( 'favorites', { signal: controller.signal } ),
      controller
   }
}

export const addFavorite = ( ref_api: string ) => {
   return axios.post( 'favorites', { ref_api } )
}

export const getFavoritesByUser = () => {
   return axios.get( 'favorites/user' )
}

export const deleteFavorite = ( data: { ref_api: string } ) => {
   return axios.put( `delete/favorite`, data )
}