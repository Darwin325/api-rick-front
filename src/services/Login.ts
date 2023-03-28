import { createUserAdapter } from "../adapters"
import { UserLogin } from "../models"
import { setToken, setUser } from "../utils"
import { get } from './axios'

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