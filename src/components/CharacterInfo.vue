<template>
  <v-card>
    <v-row>
      <v-col cols="5">
        <sectionNav v-if="navItems" :navItems="navItems" @clicked="listItemAction"/>
      </v-col>

      <v-col cols="7">
        <v-list-item v-if="activePanel">
          {{activePanel.name}}
        </v-list-item>
      </v-col>
    </v-row>


  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import SectionNav from "@/components/common/SectionNav.vue";
import {mapActions} from "vuex";

export default Vue.extend({
  name: "characterInfo",
  components: {SectionNav},
  data() {
    return {
      navItems: []
    }
  },
  methods: {
    ...mapActions([
      'playerCharacters/setActivePlayer'
    ]),
    listItemAction: function (playerId: string) {
      this['playerCharacters/setActivePlayer'](playerId);
    }
  },
  updated() {
    this.$data.navItems = this.$store.state.playerCharacters.navData;
    console.log('hello')
  },
  computed: {
    activePanel() {
      return this.$store.state.playerCharacters.activePlayerPanel;
    }
  },
  beforeMount() {
    this.$store.dispatch('playerCharacters/getPlayerCharacters');
  }
})
</script>

