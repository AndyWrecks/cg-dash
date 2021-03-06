<template>
  <v-card elevation="1" max-width="60%" class="mx-auto" style="margin: auto">
    <v-row>
      <v-col cols="5" md="3">
        <sectionNav
          v-if="navItems"
          :active-id="activeId"
          :navItems="navItems"
          @clicked="listItemAction"
        />
      </v-col>

      <v-col cols="7" md="8" v-if="activePanel">
        <v-row>
          <v-col cols="3">
            <v-img
              :src="activePanel.img"
              :alt="`${activePanel.name}-portrait`"
              max-width="400px"
            />
          </v-col>
          <v-col cols="9">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>
                  {{ activePanel.name }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ activePanel.data.details.race }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <span
                    v-for="pcClass in activePanel.class"
                    :key="`${activePanel.name}-${pcClass.name}`"
                  >
                    {{ pcClass.data.levels }} {{ pcClass.name }}
                    <span v-if="pcClass.data.subclass"
                      >({{ pcClass.data.subclass }})</span
                    >
                  </span>
                </v-list-item-subtitle>

                <v-list-item-subtitle>
                  <!--Ability Scores-->
                  <v-row>
                    <v-col
                      class="ability-score"
                      v-for="(ability, name) in activePanel.data.abilities"
                      :key="`${activePanel.name}-${name}`"
                    >
                      <v-list-item two-line>
                        <v-list-item-content>
                          <v-list-item-title>
                            {{ name }}
                          </v-list-item-title>
                          <v-list-item-subtitle>
                            {{ ability.mod }}
                          </v-list-item-subtitle>
                          <v-list-item-subtitle>
                            {{ ability.value }}
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import SectionNav from "@/components/common/SectionNav.vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "characterInfo",
  components: { SectionNav },
  data() {
    return {
      navItems: [],
      activeId: ""
    };
  },
  methods: {
    ...mapActions(["playerCharacters/setActivePlayer"]),
    listItemAction: function(playerId: string) {
      this["playerCharacters/setActivePlayer"](playerId);
    }
  },
  updated() {
    // Have to set navItems and activeId on update() because data is passed to common components
    this.$data.navItems = this.$store.state.playerCharacters.navData;
    this.$data.activeId = this.$store.state.playerCharacters.activePlayerPanel.playerId;
  },
  computed: {
    activePanel() {
      return this.$store.state.playerCharacters.activePlayerPanel;
    }
  },
  beforeMount() {
    this.$store.dispatch("playerCharacters/getPlayerCharacters");
  }
});
</script>

<style lang="scss">
.v-card {
  text-align: left;

  .ability-score {
    text-align: center;
  }
}
</style>
