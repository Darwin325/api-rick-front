<script setup
    lang="ts">
import { storeToRefs } from "pinia"
import { useRoute } from "vue-router"
import { useStore } from "../store"

const store = useStore()
const { infoRickAndMorty: data } = storeToRefs( store )
const id: number = parseInt( useRoute().params.id as string )

const main = async () => {
  await store.getSingleDataRick( id )
}

main()

</script>

<template>
  <div class="card-rick container">
    <img :src="data.image"
        :alt="data.name"
    >
    <div class="card-content">
      <h2>{{ data.name }}</h2>
      <ul>
        <li><strong>Status:</strong> {{ data.status }}</li>
        <li><strong>Species:</strong> {{ data.species }}</li>
        <li><strong>Gender:</strong> {{ data.gender }}</li>
        <li><strong>Origin:</strong> {{ data.origin.name }}</li>
        <li><strong>Location:</strong> {{ data.location.name }}</li>
        <li><h3>Episodes:</h3>
          <ul>
            <li v-for="episode in data.episode"
                :key="episode">{{ episode }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.card-rick {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--green);
}

.card-rick img {
  max-width: 550px;
  max-height: 60vh;
  object-fit: cover;
}

.card-content {
  padding: 2rem;
  text-align: center;
}

.card-content h2 {
  margin: 0;
  font-size: 3rem;
}

.card-content ul {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
}

.card-content li {
  margin: 1rem 0;
}

.card-content li strong {
  font-weight: bold;
}

.card-content li ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.card-content li ul li {
  margin: 0.5rem 0;
  padding: 1rem;
  width: 350px;
  border: var(--orange) solid 1px;
}
</style>