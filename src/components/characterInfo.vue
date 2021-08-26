<template>
  <div>
    <div v-for="character in characters" :key="character.name">
      {{character.name}}
      <span v-for="(value, name) in character.data.abilities" :key="name">
        {{name}}: {{value.value}}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import getPlayerData from "@/helpers/getPlayerData.ts";
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