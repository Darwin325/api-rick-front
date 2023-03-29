<script setup
    lang="ts">
import { router } from "../routes"
import { logout } from "../services"
import { getToken } from "../utils"

const sessionClose = async () => {
  await logout()
  await router.push( { name: 'Login' } )
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand"
          href="#">Inicio</a>
      <button class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse"
          id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/"
                class="nav-link">Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/favorites"
                class="nav-link">Favorites
            </router-link>
          </li>
        </ul>

        <ul class="navbar-nav ms-auto">
          <li class="nav-item"
              v-if="getToken()">
            <a class="nav-link"
                @click="sessionClose"
                href="#">Cerrar sesión</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
