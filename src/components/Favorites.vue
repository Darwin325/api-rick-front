<script setup
    lang="ts">
import { FetchAndLoad } from "../mixins"
import { favorites } from "../services"

const { loading, callEndpoint } = FetchAndLoad()

callEndpoint( favorites() )

</script>

<template>
  <h1>Favorites</h1>
</template>
