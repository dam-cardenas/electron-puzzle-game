import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";

const routes = [
  { path: '/', component: Home },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
