<template>
  <v-container>
    <v-row v-for="character in characters" :key="character.name">
      <v-col>
        <img :src="character.img" width="50" :alt="character.name+'-portrait'">
      </v-col>
      <v-col>
        {{character.name}}
        <span v-for="(value, name) in character.data.abilities" :key="name">
        {{name}}: {{value.value}}
      </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import getPlayerData from "@/helpers/getPlayerData";
import {characterInfoCompData} from "@/types/types";

const playerData = getPlayerData();

export default {
  name: "characterInfo",
  data() : characterInfoCompData {
    return {
      characters: playerData
    }
  }
}
</script>

<style scoped>

</style>