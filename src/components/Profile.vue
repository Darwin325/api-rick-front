<script setup
    lang="ts">
import { router } from "../routes"
import { logout } from "../services"
import { useStore, useStoreUser } from "../store"

const store = useStore()
const storeUser = useStoreUser()

const closeSession = async () => {
  await logout()
  store.isLogged = false
  await router.push( { name: 'Login' } )
}

</script>

<template>

  <div class="btn-group ms-auto">
    <span class="nav-item m-auto"
        href="#">{{ storeUser.userName }}
    </span>

    <i
        class="bi bi-person dropdown-toggle ml-4"
        data-bs-toggle="dropdown"
        aria-expanded="false"
    ></i>

    <ul class="dropdown-menu dropdown-menu-end">

      <li>
        <router-link :to="{ name: 'UpdateMe' }"
            class="dropdown-item">
          Configurar perfil <i class="bi bi-gear"></i>
        </router-link>
      </li>

      <li>
        <hr class="dropdown-divider">
      </li>
      <li class="nav-item">
        <a class="dropdown-item"
            @click="closeSession"
            href="#">
          Cerrar sesión
          <i class="bi bi-box-arrow-left"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown-menu {
  background-color: var(--dark-light) !important;
}

a, span {
  color: var(--green) !important;
  text-decoration: none;
}

a:hover {
  background-color: var(--dark) !important;
}

i {
  color: var(--green) !important;
}

.bi-gear, .bi-box-arrow-left {
  font-size: 1.5rem;
  margin-left: 1rem;
}

</style>