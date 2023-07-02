import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import Controls from "../components/Controls.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/controls', component: Controls },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
