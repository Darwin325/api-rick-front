import { Router } from "vue-router"
import { getToken } from "../utils"

export const routerGuard = ( router: Router ) => {
   router.beforeEach( ( to, from ) => {
      if (to.name === 'Register' && from.name === 'Login') {
         return true
      }
      if (!getToken() && to.name !== 'Login') {
         return { name: 'Login' }
      }
      if (getToken() && to.name === 'Login') {
         return { name: 'Home' }
      }
   } )
}