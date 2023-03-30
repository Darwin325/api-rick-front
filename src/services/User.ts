import { UserData } from "../models"
import { axiosInstance as axios } from "./axios"

export const updateMe = async ( data: UserData ) => {
   return axios.put( `/update/me`, data )
}

export const getMe = async () => {
   return axios.get( `/me` )
}