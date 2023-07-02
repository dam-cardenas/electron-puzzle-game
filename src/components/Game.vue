<script setup>
import {
  computed,
  ref,
  onMounted,
  onBeforeUnmount,
  watch,
  reactive
} from 'vue'
import { Board, Direction } from 'puzzler';

let time = ref(0)
let timeTracker = null
let gameBoard = reactive(new Board({
  dimensions: {
    width: 3,
    height: 3,
  }
}))

const movements = ref(0)

const timerSeconds = computed(() => {
  const seconds = time.value % 60
  return seconds > 9
    ? `${seconds}`
    : `0${seconds}` 
})
const timerMinutes = computed(() => {
  const minutes = Math.floor(time.value / 60)
  return minutes > 9
    ? `${minutes}`
    : `0${minutes}` 
})
const gameStatus = computed(()=> gameBoard.solved)

const board = computed(() => gameBoard.to2dArray())

const puzzleInput = (event) => {
  const {code} = event
  let moved = false
  console.log('keyCode', code)
  switch (code) {
    case 'ArrowUp':
    case 'KeyW':
      gameBoard.move([Direction.up])
      break;
    case 'ArrowDown':
    case 'KeyS':
      gameBoard.move([Direction.down])
      break;
    case 'ArrowLeft':
    case 'KeyA':
      gameBoard.move([Direction.left])
      break;
    case 'ArrowRight':
    case 'KeyD':
      gameBoard.move([Direction.right])
      break;
  }
  console.log(board.value)
}
onMounted(() => {
  console.log(board.value)
  document.addEventListener('keyup', puzzleInput)
  timeTracker = setInterval(() => {
    time.value += 1
  },1000);
})

onBeforeUnmount(() => {
  clearInterval(timeTracker)
  document.removeEventListener('keyup', puzzleInput)
})

const gameStatusWatcher = watch(gameStatus, modification => {
  if (modification) {
    clearInterval(timeTracker)
    document.removeEventListener('keyup', puzzleInput)
    gameStatusWatcher()
  }
})
</script>

<template>
  <section class="controls">
    <router-link to="/">←</router-link>
  </section>
  <section class="hero center">
    <p v-if="gameStatus">
      You Win!
      <small>{{ timerMinutes }}:{{ timerSeconds }}</small>
    </p>
    <p v-else>
      {{ timerMinutes }}:{{ timerSeconds }}
    </p>
  </section>
  <section class="content">
    <div class="board fit-content center">
      <template v-for="row in board">
        <div v-for="item in row"
          class="inline key"
          :data-cursor="item === 'x'"
          >
          <span>{{ item }}</span>
        </div>
      </template>
    </div>
  </section>
</template>