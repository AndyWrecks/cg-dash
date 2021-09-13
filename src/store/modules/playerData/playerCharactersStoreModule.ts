import getDataFromS3 from "@/api/getDataFromS3";
import { PlayerCharactersT, StateT } from "@/types/types";
import groomPlayerData from "@/store/modules/playerData/groomPlayerData";
import { Commit } from "vuex";

const state = (): PlayerCharactersT => ({
  characters: []
});

export const getters = {
  characters(state: PlayerCharactersT) {
    return state.characters;
  }
};

const actions = {
  getPlayerCharacters({
    commit,
    rootState
  }: {
    commit: Commit;
    rootState: StateT;
  }): void {
    getDataFromS3(`${rootState.gameMetadata.urlSubstring}-actors`).then(
      data => {
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
