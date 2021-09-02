import Vue from "vue";
import Vuex from "vuex";
import playerCharacters from "@/store/modules/playerCharacters";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    playerCharacters
  }
});
