<template>
  <v-card>
    <v-expansion-panels>
        <v-expansion-panel v-for="character in characters" :key="character.name">
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
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "characterInfo",
  computed: {
    characters() {
      return this.$store.state.playerCharacters.characters
    }
  },
  mounted() {
    this.$store.dispatch('playerCharacters/getPlayerCharacters')
  }
})
</script>

<style scoped>

</style>