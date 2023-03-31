import { defineStore } from "pinia"
import { ref } from "vue"
import { createUserAdapter } from "../adapters"
import { UserData } from "../models"
import { getMe, updateMe } from "../services"
import { getUser, setUser } from "../utils"

export const useStoreUser = defineStore( 'user', () => {

   const myData = ref<UserData>()
   const userName = ref<string>( getUser()?.name )

   const getMeData = async () => {
      const response = await getMe()
      myData.value = createUserAdapter( response.data )
   }

   const updateMeData = async ( data: UserData ) => {
      const response = await updateMe( data )
      myData.value = createUserAdapter( response.data )
      userName.value = myData.value.name
      setUser( myData.value )
   }

   return {
      myData,
      getMeData,
      userName,
      updateMeData
   }
} )