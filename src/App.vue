<template>
  <v-container id="app">
    <v-row>
      <v-col>
        <img alt="Vue logo" height="100" src="./assets/cg-header.png">
        <Header :sectionTitle="sessionName" msg="Welcome to Your Vue.js App"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <CharacterInfo />
      </v-col>
      <v-col>
        <quest-log />
      </v-col>
    </v-row>

    <v-row>
      <v-divider />
    </v-row>

    <v-row>
      <v-col>

        <Calendar></Calendar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
// Components
import Header from '@/components/Header.vue'
import Calendar from "@/components/Calendar.vue";
import CharacterInfo from "@/components/CharacterInfo.vue";
import QuestLog from "@/components/QuestLog.vue";

// Data
import sessionData from "./mock-data/sessionData";
import {appCompData} from "@/types/types";

export default {
  name: 'App',
  components: {
    Calendar,
    Header,
    CharacterInfo,
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
