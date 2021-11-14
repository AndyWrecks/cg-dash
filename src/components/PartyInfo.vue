<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import CharacterInfo from "@/components/CharacterInfo.vue";
import QuestLog from "@/components/QuestLog.vue";

export default {
  name: "PartyInfo",
  components: { CharacterInfo, QuestLog }
};
</script>
