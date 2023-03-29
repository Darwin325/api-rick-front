<script setup
    lang="ts">
import { router } from "../routes"
import { login } from "../services"

const logSession = async () => {
  await login( { email: 'da44w@mail.com', password: '123456' } )
  await router.push( { name: 'Home' } )
}

</script>

<template>
  <div>
    <h1>Login</h1>
    <button @click="logSession">Login</button>
  </div>
</template>