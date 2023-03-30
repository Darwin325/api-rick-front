<script setup
    lang="ts">
import { storeToRefs } from "pinia"
import { onMounted, ref } from "vue"
import { UserData } from "../models"
import { useStoreUser } from "../store"


const form = ref<HTMLFormElement>()
const userStore = useStoreUser()

const { myData } = storeToRefs( userStore )
console.log( myData.value )

const { name, email, city, address, birthdate }: UserData = myData.value as UserData

const updateData = async () => {
  try {
    const formData = new FormData( form.value )
    const data: UserData = {
      name: formData.get( 'name' ) as string,
      email: formData.get( 'email' ) as string,
      address: formData.get( 'address' ) as string,
      birthdate: formData.get( 'birthdate' ) as string,
      city: formData.get( 'city' ) as string
    }
    console.log( data )
    await userStore.updateMeData( data )
    alert( 'Se actualizó correctamente' )
  } catch (error: any) {
    console.log( error )
  }
}

onMounted( async () => {
  await userStore.getMeData()
} )

</script>

<template>
  <div>
    <form @submit.prevent="updateData"
        ref="form">

      <h2>Actualizar datos</h2>
      <label for="name">Nombre:</label>
      <input type="text"
          :value="name"
          id="name"
          name="name"
          required>

      <label for="email">Correo:</label>
      <input type="text"
          :value="email"
          id="email"
          name="email"
          required>

      <label for="address">Dirección:</label>
      <input type="text"
          :value="address"
          id="address"
          name="address"
          required>

      <label for="birthdate">Fecha de cumpleaños</label>
      <input type="date"
          :value="birthdate"
          id="birthdate"
          name="birthdate"
          required>

      <label for="city">Ciudad</label>
      <input type="text"
          :value="city"
          id="city"
          name="city"
          required>

      <input type="submit"
          value="Actualizar">
    </form>
  </div>
</template>

<style scoped>
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
  box-shadow: 0 0 5px 0 var(--green);
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
input[type="date"],
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