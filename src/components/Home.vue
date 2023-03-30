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

onMounted( async () => {
  await store.getDataRick()
  await store.getFavorites()
  compareData()
} )


</script>


<template>
  <div>
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
</style>