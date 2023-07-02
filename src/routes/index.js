import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import Controls from "../components/Controls.vue";
import Game from "../components/Game.vue"

const routes = [
  { path: '/', component: Home },
  { path: '/controls', component: Controls },
  { path: '/game', component: Game },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
