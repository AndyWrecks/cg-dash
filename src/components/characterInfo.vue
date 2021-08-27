<template>
  <v-container max-width="450">
    <v-expansion-panels>
        <v-expansion-panel v-for="character in characters" :key="character.name" inset>
            <v-expansion-panel-header>
              <v-row>
                <v-col>
                  <v-img :src="character.img" width="50" :alt="character.name+'-portrait'" />
                </v-col>
                <v-col>
                  {{character.name}}
                  <span v-for="(value, name) in character.class" :key="name">
                  {{value.name}}
                </span>
                </v-col>
                <v-col>
                <span v-for="(value, name) in character.data.abilities" :key="name">
                {{name}}: {{value.value}}
              </span>
                </v-col>
              </v-row>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci asperiores, aspernatur consequuntur culpa esse ipsam obcaecati quae quam quia quibusdam, rem repellendus, sapiente sint suscipit veniam vero voluptatibus voluptatum?
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
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