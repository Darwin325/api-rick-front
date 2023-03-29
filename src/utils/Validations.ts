import { Passwords } from "../models"

export const validatePassword = ( data: Passwords ) => {
   if (data.password !== data.password_confirmation) {
      alert( 'Las contraseñas no coinciden' )
      return false
   }
   return true
}