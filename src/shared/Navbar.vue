<script setup
    lang="ts">
import { Profile } from "../components"</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
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
                class="nav-link">Inicio
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/favorites"
                class="nav-link">Favorites
            </router-link>
          </li>
        </ul>

        <Profile />

      </div>
    </div>
  </nav>
</template>

<style scoped>
nav, .dropdown-menu {
  background-color: var(--dark-light) !important;
}

a {
  color: var(--green) !important;
}

a:hover {
  background-color: var(--dark) !important;
}
</style>
