<script setup
    lang="ts">

import { ref } from "vue"
import { router } from "../routes"
import { login } from "../services"
import { useStore, useStoreUser } from "../store"

const store = useStore()
const storeUser = useStoreUser()
const form = ref<HTMLFormElement>()

const loggedUser = async () => {
  try {
    const data = new FormData( form.value )
    const response = await login( {
      email: data.get( 'email' ) as string,
      password: data.get( 'password' ) as string
    } )
    storeUser.userName = response.user.name
    store.isLogged = true
    await router.push( { name: 'Home' } )
  } catch (error) {
    console.log( error.response.status, "este es el error" )
    if (error?.response?.status === 403 && error?.request?.statusText === "Forbidden") {
      alert( "Debe verificar su correo primero" )
      return
    }
    alert( 'Usuario o contraseña incorrectos' )
  }
}

</script>

<template>
  <div>
    <form @submit.prevent="loggedUser"
        ref="form">
      <h2>Login</h2>
      <label for="email">Username:</label>
      <input type="email"
          id="email"
          name="email"
          required>
      <label for="password">Password:</label>
      <input type="password"
          id="password"
          name="password"
          required>
      <input type="submit"
          value="Iniciar sesión">

      <label class="mt-4">No tienes cuenta, crea un aquí.
        <router-link to="/register">Registrarme</router-link>
      </label>
    </form>

  </div>
</template>

<!--Crea estilos-->
<style scoped>

a {
  color: var(--green);
  text-decoration: none;
}

div {
  background-color: #24282f;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

form {
  background-color: #24282f;
  border-radius: 10px;
  border: 2px solid var(--green);
  padding: 20px;
  width: 400px;
  margin: auto;
  box-shadow: 0 0 15px 0 var(--green);
}

h2 {
  color: var(--green);
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  text-align: center;
}

label {
  color: #fff;
  display: block;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  margin-top: 10px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  background-color: var(--green);
  border: none;
  border-radius: 5px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
}

input[type="submit"] {
  background-color: var(--orange);
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  padding: 10px;
  width: 100%;
}

input[type="submit"]:hover {
  background-color: #8be9fd;
  transition: background-color 0.3s ease-in-out;
}

</style>