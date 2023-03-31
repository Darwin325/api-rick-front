<script setup
    lang="ts">
import { storeToRefs } from "pinia"
import { ref } from "vue"
import { RickAndMorty } from "../models"
import { getFavoritesRickAndMortyData } from "../services"
import { useStore } from "../store"
import CardRickAndMorty from "./CardRickAndMorty.vue"

const store = useStore()
const { favoritesByUser } = storeToRefs( store )
const favoritesRickApi = ref<RickAndMorty[]>()

const getFavoritesRickData = async () => {
  const promises: any = favoritesByUser.value?.map( ( item ) => {
    return getFavoritesRickAndMortyData( item.ref_api )
  } )
  const data = await Promise.all( promises )
  favoritesRickApi.value = data.map( ( item: any ) => {
    item.data.favorite = true
    return item.data
  } )
}

const main = async () => {
  await store.getFavorites()
  await getFavoritesRickData()
}

main()

</script>

<template>
  <div>
    <!--    <Paginator :next-page="nextPage"
            :prev-page="prevPage"
            :page="page"
            :cant-pages="cantPages" />-->

    <div class="card-container">
      <CardRickAndMorty v-for="item in favoritesRickApi"
          :key=" item.id"
          :item="item"
          @update-favorites="main"
      />
    </div>
    <h2 v-if="favoritesRickApi?.length === 0"
        class="text-center">No hay favoritos</h2>
  </div>
</template>

<style scoped>
h2 {
  margin-top: 100px;
  color: var(--green);
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
