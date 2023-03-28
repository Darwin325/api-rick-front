export const setToken = (token: string) => {
   if (localStorage.getItem('token') == null) {
      localStorage.setItem('token', token)
   }
}

export const getToken = () => {
   return localStorage.getItem('token')
}

export const removeToken = () => {
   localStorage.removeItem('token')
}