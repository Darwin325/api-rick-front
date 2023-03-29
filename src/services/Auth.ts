import { createUserAdapter } from "../adapters"
import { UserLogin, UserRegister } from "../models"
import { removeToken, removeUser, setToken, setUser } from "../utils"
import { axiosInstance as axios } from './axios'

export const register = async ( data: UserRegister ) => {
   const response = await axios.post( 'register', data )
   if (response.status === 201) {
      return response.data
   }
}

export const login = async ( credentials: UserLogin ) => {

   const response = await axios.post( 'login', credentials )
   if (response.status === 200) {
      setToken( response.data.token )
      setUser( createUserAdapter( response.data.user ) )
      return response.data
   }
}

export const logout = async () => {
   try {
      const response = await axios.get( 'logout' )
      if (response.status === 200) {
         removeToken()
         removeUser()
      }
   } catch (error) {
      console.log( error )
   }
}