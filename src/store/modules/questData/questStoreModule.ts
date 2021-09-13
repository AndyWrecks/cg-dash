import getDataFromS3 from "@/api/getDataFromS3";
import { QuestStoreT, StateT } from "@/types/types";
import groomQuestData from "@/store/modules/questData/groomQuestData";
import { Commit } from "vuex";

const state = (): QuestStoreT => ({
  data: []
});

const getters = {};

const actions = {
  getQuestData({
    commit,
    rootState
  }: {
    commit: Commit;
    rootState: StateT;
  }): void {
    getDataFromS3(`${rootState.gameMetadata.urlSubstring}-quests`).then(data =>
      commit("setQuestData", data)
    );
  }
};

const mutations = {
  setQuestData(state: QuestStoreT, playerCharacters: any): void {
    state.data = groomQuestData(playerCharacters);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
