<script setup
    lang="ts">
import { storeToRefs } from "pinia"
import { onMounted, ref } from "vue"
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

onMounted( async () => {
  await store.getFavorites()
  await getFavoritesRickData()
} )

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
          :item="item" />
    </div>
    />
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
