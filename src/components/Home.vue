<script setup>
import { ref, onMounted } from 'vue'

const selectedOption = ref(0)

const menuOptions = [
  { text: 'Start', route: '', icon:'' },
  { text: 'Controls', route: '/controls', icon:'' },
  { text: 'Credits', route: '', icon:'' },
  { text: 'Exit', route: '', icon:'' },
]


</script>

<template>
  <section class="controls">
    <!-- controls goes here -->
  </section>
  <section class="hero">
    PZZL
  </section>
  <section class="content">
    <ul class="menu">
      <li class="menu-item"  v-for="(option, index) in menuOptions">
        <span></span>
        <router-link :to="option.route"> {{ option.text }} </router-link>
      </li>
    </ul>
  </section>
</template>