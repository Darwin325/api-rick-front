import { UserLogin } from "../models"
import { setToken } from "../utils"
import { get } from './axios'

export const login = async (credentials: UserLogin) => {
  try{
    const response = await get('login', false, credentials)
    if (response.status === 200) {
      setToken(response.data.token)

      return response.data
    }
  }catch (error) {
      console.log(error)
  }
}