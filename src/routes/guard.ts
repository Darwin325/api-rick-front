import { Router } from "vue-router"
import { getToken } from "../utils"

export const routerGuard = ( router: Router ) => {
   router.beforeEach( ( to, from ) => {
      if (!getToken() && to.name !== 'Login') {
         return { name: 'Login' }
      }
   } )
}