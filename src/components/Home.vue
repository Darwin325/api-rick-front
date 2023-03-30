<script setup
    lang="ts">
import { onMounted, ref } from "vue"
import { FetchAndLoad } from "../mixins"
import { RickAndMorty } from "../models"
import { useStore } from "../store"
import CardRickAndMorty from "./CardRickAndMorty.vue"
import { Favorites } from "./index"

const store = useStore()

const markAsFavorites = ref<RickAndMorty[]>()

const { loading, callEndpoint } = FetchAndLoad()

const compareData = () => {
  store.dataRickAndMorty?.forEach( ( item: RickAndMorty ) => {
    item.favorite = store.favoritesByUser?.some( ( favorite: Favorites ) => {
      return item.url == favorite.ref_api
    } )
  } )
}

const nextPage = async () => {
  if (store.cantPages == store.page) return
  store.page++
  await store.getDataRick()
  await store.getFavorites()
  compareData()
}

const prevPage = async () => {
  if (store.page == 1) return
  store.page--
  await store.getDataRick()
  await store.getFavorites()
  compareData()
}

onMounted( async () => {
  await store.getDataRick()
  await store.getFavorites()
  compareData()
} )


</script>


<template>
  <div>
    <div class="paginator">
      <i class="bi bi-caret-left"
          @click="prevPage"></i>
      <span>Página {{ store.page }} de {{ store.cantPages }}</span>
      <i class="bi bi-caret-right"
          @click="nextPage"></i>
    </div>

    <div class="card-container">
      <CardRickAndMorty v-for="item in store.dataRickAndMorty"
          :item="item" />
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.paginator {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.paginator i {
  font-size: 3rem;
  color: #41b883;
  margin: 0 10px;
}

.paginator span {
  color: #ff9800;
  font-size: 1.5rem;
  margin: 0 10px;
}

</style>