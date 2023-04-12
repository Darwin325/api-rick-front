import { Router } from "vue-router"
import { getToken, getUser } from "../utils"

export const routerGuard = ( router: Router ) => {
   router.beforeEach( ( to, from ) => {
      if (to.name === 'VerifyEmail') {
         return true
      }
      if (to.name === 'Register' && from.name === 'Login') {
         return true
      }
      console.log( (!getToken() || !getUser()) )
      if ((!getToken() || !getUser()) && to.name !== 'Login') {
         return { name: 'Login' }
      }
      if ((!!getToken() && !!getUser()) && to.name === 'Login') {
         return true
      }
   } )
}