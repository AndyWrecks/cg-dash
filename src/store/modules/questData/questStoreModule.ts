import getDataFromS3 from "@/api/getDataFromS3";
import { QuestStoreT } from "@/types/types";
import groomQuestData from "@/store/modules/questData/groomQuestData";

const state = (): QuestStoreT => ({
  data: []
});

const getters = {};

const actions = {
  getQuestData({ commit }: { commit: Function }): void {
    getDataFromS3(
      "https://commonwealthgiant.s3.us-east-2.amazonaws.com/character-json/hello-world-quests.json"
    ).then(data => commit("setQuestData", data));
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
