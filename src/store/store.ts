import Vue from "vue";
import Vuex from "vuex";
import playerCharacters from "@/store/modules/playerData/playerCharactersStoreModule";
import quests from "@/store/modules/questData/questStoreModule";
import gameMetadata from "@/store/modules/gameMetadata/gameMetadata";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    gameMetadata,
    playerCharacters,
    quests
  }
});
