import { onUnmounted, ref } from 'vue'
import { AxiosCall } from "../models"

export function FetchAndLoad() {
   const loading = ref<boolean>( false )
   let controller: AbortController

   const callEndpoint = async ( axiosCall: AxiosCall<any> ) => {
      if (axiosCall.controller) controller = axiosCall.controller
      loading.value = true
      let result
      try {
         result = await axiosCall.call
      } catch (error) {
         loading.value = false
         throw error
      }
      loading.value = false
      return result
   }

   const cancelEndpoint = () => {
      loading.value = false
      controller && controller.abort()
   }

   onUnmounted( () => {
      cancelEndpoint()
   } )

   return { loading, callEndpoint }
}