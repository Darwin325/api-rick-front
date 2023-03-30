<script setup
    lang="ts">
import { defineProps } from "vue"

const props = defineProps<{
  nextPage: () => void,
  prevPage: () => void,
  page: number,
  cantPages: number
}>()

</script>

<template>
  <div class="paginator">
    <i class="bi bi-caret-left"
        @click="prevPage"></i>
    <span>Página {{ page }} de {{ cantPages }}</span>
    <i class="bi bi-caret-right"
        @click="nextPage"></i>
  </div>
</template>

<style scoped>

.paginator {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.paginator i {
  font-size: 3rem;
  color: var(--orange);
  margin: 0 10px;
}

.paginator span {
  color: var(--green);
  font-size: 1.5rem;
  margin: 0 10px;
}

</style>