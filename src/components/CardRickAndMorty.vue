<script setup
    lang="ts">
import { defineEmits, defineProps } from "vue"
import { RickAndMorty } from "../models"
import { addFavorite, deleteFavorite } from "../services"

const props = defineProps<{
  item: RickAndMorty
}>()

const emmit = defineEmits<{
  ( e: 'update-favorites' ): void
}>()

const alreadyFavorite = async () => {
  const response = confirm( 'Ya esta en favoritos, ¿Desea eliminarlo?' )
  if (response) {
    try {
      await deleteFavorite( { ref_api: props.item?.url } )
      props.item.favorite = false
      emmit( 'update-favorites' )
      alert( 'Se elimino de favoritos' )
    } catch (error) {
      console.log( error )
    }
  }
}

const addFavoriteCard = async () => {
  if (props.item.favorite) {
    await alreadyFavorite()
    return
  }

  try {
    const data = await addFavorite( props.item.url )
    props.item.favorite = true
    alert( 'Se agrego a favoritos' )
  } catch (error) {
    console.log( error )
  }
}

</script>

<template>
  <div>
    <!--Crear una card para la data de rick and Morty-->
    <div class="card">
      <img :src="item.image"
          alt="rick and morty">
      <h3>{{ item.name }}</h3>
      <div class="status">
        <p>{{ item.species }}</p>
        <p>{{ item.status }}</p>
      </div>
      <i v-if="item.favorite"
          class="bi bi-star-fill favorite"
          @click="alreadyFavorite"></i>
      <i v-else
          class="bi bi-star-fill"
          @click="addFavoriteCard"></i>

      <router-link :to="{ name: 'InfoRickAndMorty', params: { id: item.id }}"
          class="bi bi-box-arrow-up-right">
        <!--        <InfoRickAndMorty :info="item" />-->
      </router-link>

    </div>

  </div>
</template>

<style>

/*color de fondo relacionado con rick and morty*/
body {
  background-color: #24282f;
}

.favorite {
  color: #ff9800;
}

.bi-box-arrow-up-right {
  color: var(--green);
  font-size: 1.4rem;
  cursor: pointer;
  align-self: end;
}

i {
  color: #f8f7f6;
  font-size: 2rem;
  cursor: pointer;
}

/*dale estilos a las card*/
.card {
  background-color: #24282f;
  border-radius: 10px;
  margin: 10px;
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: #ff9800 solid 2px;
  padding: 5px 10px 10px;
}

.status {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

.card img {
  width: 100%;
  height: 325px;
  margin-top: 0.8rem;
  border-radius: 10px;
  object-fit: cover;
}

.card h3 {
  color: #41b883;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  text-align: center;
}

.card p {
  color: #41b883;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  text-align: center;
}


</style>