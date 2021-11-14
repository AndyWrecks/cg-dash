<template>
  <v-app>
    <v-navigation-drawer height="100vh" fixed>
      <img alt="Vue logo" height="100" src="./assets/cg-header.png" />
      <v-divider></v-divider>
      <v-list>
        <v-list-item>
          <v-icon>mdi-calendar</v-icon>
          <v-list-item-content>
            <router-link to="/">Session Info</router-link>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-icon>mdi-account-group</v-icon>
          <v-list-item-content>
            <router-link to="/party-info">Party</router-link>
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

      <router-view />

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

export default Vue.extend({
  name: "App",
  components: {
    Calendar,
    Header
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
