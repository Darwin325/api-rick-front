import { defineStore } from 'pinia'
import { ref } from "vue"

export const useStore = defineStore( 'main', () => {
   const isLogged = ref<boolean>( false )

   return { isLogged }
} )