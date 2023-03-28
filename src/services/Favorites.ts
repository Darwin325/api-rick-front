import { get } from './axios'

export const favorites = async () => {
   try {
      const response = await get('favorites', true)
      return response.data
   }catch (error) {
      console.log(error)
   }
}
