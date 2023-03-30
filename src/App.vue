<script setup
    lang="ts">
import Navbar from "./shared/Navbar.vue"
import { useStore } from "./store"
import { getToken } from "./utils"

const store = useStore()
store.isLogged = !!getToken()

</script>

<template>
  <div>
    <Navbar v-if="store.isLogged" />
    <RouterView />
  </div>
</template>


<style>
/*hacer estar variables globales para toda la app*/
:root {
  --green: #41b883;
  --dark: #24282f;
  --dark-light: #464d5d;
  --orange: #ff9800;
}
</style>
