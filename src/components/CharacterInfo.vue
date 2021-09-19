<template>
  <v-card>
    <v-row>
      <v-col cols="5">
        <sectionNav :navItems="navItems"/>
      </v-col>

      <v-col cols="7">
        <v-list-item>
          {{activePanel.name}}
        </v-list-item>
      </v-col>
    </v-row>


  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import SectionNav from "@/components/common/SectionNav.vue";

export default Vue.extend({
  name: "characterInfo",
  components: {SectionNav},
  data() {
    return {
      navItems: []
    }
  },
  updated() {
    this.$data.navItems = this.$store.state.playerCharacters.navData;
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

