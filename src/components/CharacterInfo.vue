<template>
  <v-card>
    <v-row>
      <v-col cols="5" md="4">
        <sectionNav v-if="navItems" :active-id="activeId" :navItems="navItems" @clicked="listItemAction"/>
      </v-col>

      <v-col cols="7" md="8" v-if="activePanel">
        <v-list-item>
          {{activePanel.name}}
        </v-list-item>

        <v-list-item>
          <span v-for="pcClass in activePanel.class" :key="`${activePanel.name}-${pcClass.name}`">
            {{pcClass.name}} - {{pcClass.data.subclass}} {{pcClass.data.levels}}
          </span>
        </v-list-item>

        <v-row>
          <v-col class="ability-score" v-for="(ability, name) in activePanel.data.abilities" :key="`${activePanel.name}-${name}`">
            <v-card>
            {{name}}<br>{{ability.value}}<br>{{ability.mod}}
            </v-card>
          </v-col>
        </v-row>
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
      navItems: [],
      activeId: ''
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
    this.$data.activeId = this.$store.state.playerCharacters.activePlayerPanel.playerId;
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


<style>
.ability-score {
    text-align: center;
  padding: 10px
}
</style>