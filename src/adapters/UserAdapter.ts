import { UserData } from "../models"

export const createUserAdapter = (user: any): UserData => ({
   id: user.id,
   name: user.name,
   email: user.email,
   address: user.address,
   birthdate: user.birthdate,
   city: user.city,
})