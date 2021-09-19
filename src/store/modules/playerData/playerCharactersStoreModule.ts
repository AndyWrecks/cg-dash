import getDataFromS3 from "@/api/getDataFromS3";
import { PlayerCharactersT, StateT } from "@/types/types";
import groomPlayerData from "@/store/modules/playerData/groomPlayerData";
import { Commit } from "vuex";

const state = (): PlayerCharactersT => ({
  characters: [],
  navData: [],
  activePlayerPanel: undefined
});

export const getters = {};

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
        commit("initPlayerCharacters", data);
      }
    );
  },
  setActivePlayer({ commit }: { commit: Commit }, playerId: string): void {
    console.log("settingPlayer");
    commit("updateActivePlayer", playerId);
  }
};

const mutations = {
  initPlayerCharacters(state: PlayerCharactersT, playerCharacters: any): void {
    const groomedPlayerData = groomPlayerData(playerCharacters);

    state.characters = groomedPlayerData.playerData;
    state.navData = groomedPlayerData.navData;
    state.activePlayerPanel = state.characters[0];
  },
  updateActivePlayer(state: PlayerCharactersT, playerId: string): void {
    console.log(
      state.characters.find(player => player.playerId === playerId),
      "updating"
    );
    state.activePlayerPanel = state.characters.find(
      player => player.playerId === playerId
    );
    console.log(state.activePlayerPanel);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
