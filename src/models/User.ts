export interface UserLogin {
   email: string,
   password: string
}

export interface UserData {
   id?: number,
   name: string,
   email: string,
   address: string,
   birthdate: string,
   city: string,
}

export interface Passwords {
   password: string,
   password_confirmation: string
}

export interface UserRegister extends Passwords {
   name: string,
   email: string,
}

export interface Favorites {
   id: number,
   ref_api: string,
   user_id: number,
}