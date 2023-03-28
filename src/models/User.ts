export interface UserLogin {
   email: string,
   password: string
}

export interface UserData {
   id: number,
   name: string,
   email: string,
   address: string,
   birthdate: string,
   city: string,
}

export interface UserRegister {
   name: string,
   email: string,
   password: string,
   password_confirmation: string,
}