import getDataFromS3 from "@/api/getDataFromS3";
import { PlayerCharactersT } from "@/types/types";
import groomPlayerData from "@/store/modules/playerData/groomPlayerData";

const state = (): PlayerCharactersT => ({
  characters: []
});

const getters = {};

const actions = {
  getPlayerCharacters({ commit }: { commit: Function }): void {
    getDataFromS3(
      "https://commonwealthgiant.s3.us-east-2.amazonaws.com/character-json/hello-world-actors.json"
    ).then(data => commit("setPlayerCharacters", data));
  }
};

const mutations = {
  setPlayerCharacters(state: PlayerCharactersT, playerCharacters: any): void {
    state.characters = groomPlayerData(playerCharacters);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
