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
import Vue from 'vue';

// Components
import Header from '@/components/Header.vue'
import Calendar from "@/components/Calendar.vue";
import CharacterInfo from "@/components/CharacterInfo.vue";
import QuestLog from "@/components/QuestLog.vue";

export default Vue.extend({
  name: 'App',
  components: {
    Calendar,
    Header,
    CharacterInfo,
    QuestLog
  },
  computed: {
      sessionName() {
        return this.$store.state.gameMetadata.name
      }
  },
  // Need to figure out how to optimize so both created and updated are not needed to render correct data. There seems to be a race condition in the store
  created() {
    this.$store.dispatch('gameMetadata/getSessionData');
  },
  updated() {
    this.$store.dispatch('gameMetadata/getSessionData');
  }
})
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
