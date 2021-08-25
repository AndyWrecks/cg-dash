<template>
  <div>
    <div v-for="character in characters" :key="character.name">{{character.name}}</div>
  </div>
</template>

<script>
import getPlayerData from "@/helpers/getPlayerData.ts";

console.log(getPlayerData());
export default {
  name: "characterInfo",
  data() {
    return {
      characters: getPlayerData()
    }
  }
}
</script>

<style scoped>

</style>