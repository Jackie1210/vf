<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useVF } from 'vf'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
const sleep = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1)
    }, 2000)
  })
}

const { isLoading, excute } = useVF(async () => {
  const res = await sleep()
  console.log(res)
}, {
  catchErr: false
})
onMounted(() => {
  excute()
})
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
