import { axiosInstance as axios } from './axios'


export const favorites = () => {
   const controller: AbortController = new AbortController()
   return {
      call: axios.get( 'favorites', { signal: controller.signal } ),
      controller
   }
}
