<template>
  <div id="app">
    <img alt="Vue logo" height="100" src="./assets/cg-header.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <calendar></calendar>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Calendar from "@/components/calendar";

export default {
  name: 'App',
  components: {
    Calendar,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
