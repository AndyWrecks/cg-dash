<template>
  <v-navigation-drawer>
    <v-list>
      <v-list-item v-for="navItem in navItems" :key="navItem.navID" link v-on:click="navSetActivePlayer(navItem.navID)">
        <v-list-item-avatar>
          <v-img :src="navItem.imgURL" :alt="navItem.navID+'-nav-image'"/>
        </v-list-item-avatar>
        {{navItem.navTitle}}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import Vue from "vue";
import {mapActions} from "vuex";

export default Vue.extend({
  name: 'sectionNav',
  props: {
    navItems: {
      type: Array
    }
  },
  methods: {
    ...mapActions([
        'playerCharacters/setActivePlayer'
    ]),
    navSetActivePlayer: function (playerId: string) {
      this['playerCharacters/setActivePlayer'](playerId);
    }
  }
});
</script>
