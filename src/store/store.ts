import { defineStore } from 'pinia'
import { computed, ref } from "vue"
import { Favorites } from "../components"
import { AllDataRickAndMorty, RickAndMorty } from "../models"
import { getCharacters, getFavoritesByUser, getSingeCharacter } from "../services"

export const useStore = defineStore( 'main', () => {

   const isLogged = ref<boolean>( false )

   const dataRickAndMorty = ref<RickAndMorty[]>()
   const infoRickAndMorty = ref<AllDataRickAndMorty>()
   const favoritesByUser = ref<Favorites[]>()
   const page = ref<number>( 1 )
   const cantPages = ref<number>( 0 )

   const onlyFavorites = computed( () => {
      return dataRickAndMorty.value?.filter( ( item: RickAndMorty ) => {
         return item.favorite
      } )
   } )

   const getDataRick = async () => {
      try {
         const response = await getCharacters( page.value )
         cantPages.value = response.data.info.pages
         dataRickAndMorty.value = response.data.results
      } catch (error) {
         console.log( error )
      }
   }

   const getSingleDataRick = async ( id: number ) => {
      try {
         const response = await getSingeCharacter( id )
         infoRickAndMorty.value = response.data
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

   return {
      isLogged,
      getFavorites,
      getDataRick,
      dataRickAndMorty,
      favoritesByUser,
      onlyFavorites,
      cantPages,
      page,
      getSingleDataRick, infoRickAndMorty
   }
} )