<script setup
    lang="ts">
import { ref } from "vue"
import { router } from "../routes"
import { register } from "../services"
import { validatePassword } from '../utils'

const form = ref<HTMLFormElement>()

const registerUser = async () => {
  try {
    const data = new FormData( form.value )
    const password = data.get( 'password' ) as string
    const password_confirmation = data.get( 'password_confirmation' ) as string

    if (!validatePassword( { password, password_confirmation } )) return

    await register( {
      name: data.get( 'name' ) as string,
      email: data.get( 'email' ) as string,
      password,
      password_confirmation
    } )
    alert( 'Se registró correctamente, por favor verifique su correo en el link que se le envió' )
    await router.push( { name: 'Login' } )

  } catch (error: any) {
    if (error.response.status === 422) {
      if (error.response.data.error.email) {
        alert( "Este correo ya está registrado" )
      }
    }
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="registerUser"
        ref="form">

      <router-link to="/login">
        <i class="bi bi-caret-left-fill"></i>
      </router-link>

      <h2>Registrar</h2>
      <label for="name">Nombre:</label>
      <input type="text"
          id="name"
          name="name"
          required>
      <label for="email">Correo:</label>
      <input type="email"
          id="email"
          name="email"
          required>
      <label for="password">Contraseña:</label>

      <input type="password"
          id="password"
          name="password"
          required>

      <label for="password_confirmation">Confirmar contraseña:</label>
      <input type="password"
          id="password_confirmation"
          name="password_confirmation"
          required>

      <input type="submit"
          value="Registrar">
    </form>
  </div>
</template>

<!--Crea estilos-->
<style scoped>

i {
  color: var(--green);
  font-size: 2rem;
  margin-right: 10px;
}

a {
  color: var(--green);
  text-decoration: none;
}

div {
  background-color: var(--dark);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

form {
  background-color: var(--dark);
  border-radius: 10px;
  padding: 20px;
  width: 400px;
  margin: auto;
  border: 2px solid var(--green);
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