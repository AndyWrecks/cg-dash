<template>
  <v-app>
    <v-navigation-drawer height="100vh" fixed>
      <img alt="Vue logo" height="100" src="./assets/cg-header.png" />
      <v-divider></v-divider>
      <v-list>
        <v-list-item>
          <v-icon>mdi-calendar</v-icon>
          <v-list-item-content>
            Session Info
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-icon>mdi-account-group</v-icon>
          <v-list-item-content>
            Party
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-icon>mdi-information</v-icon>
          <v-list-item-content>
            Game Information
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-container id="app">
      <v-row>
        <v-col>
          <Header
            :sectionTitle="sessionName"
            msg="Welcome to Your Vue.js App"
          />
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col>
          <CharacterInfo />
        </v-col>
      </v-row>

      <v-row>
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
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

// Components
import Header from "@/components/Header.vue";
import Calendar from "@/components/Calendar.vue";
import CharacterInfo from "@/components/CharacterInfo.vue";
import QuestLog from "@/components/QuestLog.vue";

export default Vue.extend({
  name: "App",
  components: {
    Calendar,
    Header,
    CharacterInfo,
    QuestLog
  },
  computed: {
    sessionName() {
      return this.$store.state.gameMetadata.name;
    }
  },
  beforeMount() {
    this.$store.dispatch("gameMetadata/getSessionData");
  }
});
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
