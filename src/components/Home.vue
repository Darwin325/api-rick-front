<script setup
    lang="ts">
import { storeToRefs } from "pinia"
import { onMounted } from "vue"
import { Validator } from "../mixins/Validator"
import Paginator from "../shared/Paginator.vue"
import { useStore } from "../store"
import CardRickAndMorty from "./CardRickAndMorty.vue"

const store = useStore()
const { page, cantPages } = storeToRefs( store )
const { compareData } = Validator()

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
    <Paginator :next-page="nextPage"
        :prev-page="prevPage"
        :page="page"
        :cant-pages="cantPages" />

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