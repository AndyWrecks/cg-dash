<template>
  <div id="app">
    <img alt="Vue logo" height="100" src="./assets/cg-header.png">
    <characterInfo />
    <quest-log />
    <Header :sectionTitle="sessionName" msg="Welcome to Your Vue.js App"/>
    <calendar></calendar>
  </div>
</template>

<script lang="ts">
// Components
import Header from '@/components/Header.vue'
import Calendar from "@/components/calendar.vue";
import characterInfo from "@/components/characterInfo.vue";
import QuestLog from "@/components/QuestLog.vue";

// Data
import sessionData from "./mock-data/sessionData";
import {appCompData} from "@/types/types";

export default {
  name: 'App',
  components: {
    Calendar,
    Header,
    characterInfo,
    QuestLog
  },
  data() : appCompData {
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
