<script setup>
import { ref, onMounted } from 'vue'

const menuOptions = [
  { text: 'Start', route: '', icon:'' },
  { text: 'About', route: '', icon:'' }
]
const width = ref(3)
const height = ref(3)

</script>

<template>
  <div class="input">
    <label for="width">
      width
    </label>
    <input type="number" id="width" v-model="width">
  </div>
  <div class="input">
    <label for="height">
      height
    </label>
    <input type="number" id="height" v-model="height">
  </div>
  <ul>
    <li v-for="option in menuOptions">
      <span>{{ option.icon  }}</span>
      <router-link :to="option.route"> {{ option.text }} </router-link>
    </li>
  </ul>
</template>