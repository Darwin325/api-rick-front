import { createUserAdapter } from "../adapters"
import { UserLogin, UserRegister } from "../models"
import { setToken, setUser } from "../utils"
import { get, post } from './axios'


export const register = async ( data: UserRegister) => {
   try{
      const response = await post('register', false, data)
      if (response.status === 201) {
         console.log(response.data, "Mensaje de registro")
         return response.data
      }
   }catch (error) {
         console.log(error)
   }
}


export const login = async (credentials: UserLogin) => {
  try{
    const response = await get('login', false, credentials)
    if (response.status === 200) {
      setToken(response.data.token)
      setUser(createUserAdapter(response.data.user))
      return response.data
    }
  }catch (error) {
      console.log(error)
  }
}