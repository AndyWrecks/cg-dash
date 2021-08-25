<template>
  <div id="app">
    <img alt="Vue logo" height="100" src="./assets/cg-header.png">
    <Header :sectionTitle="sessionName" msg="Welcome to Your Vue.js App"/>
    <calendar></calendar>
  </div>
</template>

<script>
// Components
import Header from './components/Header.vue'
import Calendar from "@/components/calendar";

// Data
import sessionData from "./mock-data/sessionData";

// Helpers
import getPlayerData from "@/helpers/getPlayerData.ts";

export default {
  name: 'App',
  components: {
    Calendar,
    Header
  },
  data() {
    console.log(getPlayerData());

    return {
      sessionName: sessionData.sessionName
    }
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
