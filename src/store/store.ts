import Vue from "vue";
import Vuex from "vuex";
import playerCharacters from "@/store/modules/playerData/playerCharactersStoreModule";
import quests from "@/store/modules/questData/questStoreModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    playerCharacters,
    quests
  }
});
