<template>
  <v-card>
    <v-expansion-panels>
      <v-expansion-panel v-for="quest in quests" :key="quest.name">
        <v-expansion-panel-header>
          {{quest.name}}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          {{quest.body}}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script lang="ts">
import {groomedQuestDataSet} from "@/types/types";

export default {
  name: "QuestLog",
  computed: {
    quests() : groomedQuestDataSet {
      return this.$store.state.quests.data
    }
  },
  mounted() {
    this.$store.dispatch('quests/getQuestData')
  }
}
</script>

<style scoped>

</style>