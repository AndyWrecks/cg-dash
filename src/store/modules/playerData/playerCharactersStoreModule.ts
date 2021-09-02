import getDataFromS3 from "@/api/getDataFromS3";
import { PlayerCharactersT, StateT } from "@/types/types";
import groomPlayerData from "@/store/modules/playerData/groomPlayerData";

const state = (): PlayerCharactersT => ({
  characters: []
});

const getters = {};

const actions = {
  getPlayerCharacters({
    commit,
    rootState
  }: {
    commit: Function;
    rootState: StateT;
  }): void {
    console.log(rootState);
    getDataFromS3(`${rootState.gameMetadata.urlSubstring}-actors`).then(
      data => {
        console.log(data);
        commit("setPlayerCharacters", data);
      }
    );
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
