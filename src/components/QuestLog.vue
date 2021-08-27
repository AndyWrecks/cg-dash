<template>
  <v-container>
    <v-card>
      <v-expansion-panels>
        <v-expansion-panel v-for="quest in quests" :key="quest.name" inset>
          <v-expansion-panel-header>
            {{quest.name}}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            {{quest.body}}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>

  </v-container>
</template>

<script lang="ts">

import getQuestData from "@/helpers/questData/getQuestData";
import {questLogCompData} from "@/types/types";

const questData = getQuestData();

export default {
  name: "QuestLog",
  data() : questLogCompData {
    return {
      quests: questData
    }
  }
}
</script>

<style scoped>

</style>