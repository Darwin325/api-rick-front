<script setup
    lang="ts">
import { ref } from "vue"
import { FetchAndLoad } from "../mixins"
import { RickAndMorty } from "../models"
import { getCharacters } from "../services"
import CardRickAndMorty from "./CardRickAndMorty.vue"

const dataRickAndMorty = ref<RickAndMorty[]>()


const { loading, callEndpoint } = FetchAndLoad()
const getData = async () => {
  const response = await callEndpoint( getCharacters( 1 ) )
  dataRickAndMorty.value = response.data.results
  console.log( response.data )
}

getData()

</script>


<template>
  <div>
    <h1>Home</h1>

    <div class="card-container">
      <CardRickAndMorty v-for="item in dataRickAndMorty"
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