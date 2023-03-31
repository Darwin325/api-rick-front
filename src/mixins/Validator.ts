import { Favorites, RickAndMorty } from "../models"
import { useStore } from "../store"

export const Validator = () => {

   const store = useStore()

   const compareData = () => {
      store.dataRickAndMorty?.forEach( ( item: RickAndMorty ) => {
         item.favorite = store.favoritesByUser?.some( ( favorite: Favorites ) => {
            return item.url == favorite.ref_api
         } )
         item.user_ref_api_id = item.url
      } )
   }

   return { compareData }
}