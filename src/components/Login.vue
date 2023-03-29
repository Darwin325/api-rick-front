<script setup
    lang="ts">

import { router } from "../routes"
import { login } from "../services"
import { useStore } from "../store"

const store = useStore()

const loggedUser = async () => {
  await login( { email: 'da44w@mail.com', password: '123456' } )
  store.isLogged = true
  await router.push( { name: 'Home' } )
}

</script>

<template>
  <div>
    <h1>Login</h1>
    <button @click="loggedUser">Login</button>
  </div>
</template>