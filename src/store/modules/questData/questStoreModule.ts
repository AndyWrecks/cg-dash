import getDataFromS3 from "@/api/getDataFromS3";
import { QuestStoreT } from "@/types/types";
import groomQuestData from "@/store/modules/questData/groomQuestData";

const state = () => ({
  data: []
});

const getters = {};

const actions = {
  getQuestData({ commit }: { commit: Function }) {
    getDataFromS3(
      "https://commonwealthgiant.s3.us-east-2.amazonaws.com/character-json/hello-world-quests.json"
    ).then(data => commit("setQuestData", data));
  }
};

const mutations = {
  setQuestData(state: QuestStoreT, playerCharacters: any) {
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
