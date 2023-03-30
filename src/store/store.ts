import { defineStore } from 'pinia'
import { computed, ref } from "vue"
import { Favorites } from "../components"
import { RickAndMorty } from "../models"
import { getCharacters, getFavoritesByUser } from "../services"

export const useStore = defineStore( 'main', () => {

   const isLogged = ref<boolean>( false )

   const dataRickAndMorty = ref<RickAndMorty[]>()
   const favoritesByUser = ref<Favorites[]>()

   const onlyFavorites = computed( () => {
      return dataRickAndMorty.value?.filter( ( item: RickAndMorty ) => {
         return item.favorite
      } )
   } )

   const getDataRick = async () => {
      try {
         const response = await getCharacters( 1 )
         dataRickAndMorty.value = response.data.results
      } catch (error) {
         console.log( error )
      }
   }

   const getFavorites = async () => {
      try {
         const response = await getFavoritesByUser()
         favoritesByUser.value = response.data.data
      } catch (error) {
         console.log( error )
      }
   }

   return { isLogged, getFavorites, getDataRick, dataRickAndMorty, favoritesByUser, onlyFavorites }
} )