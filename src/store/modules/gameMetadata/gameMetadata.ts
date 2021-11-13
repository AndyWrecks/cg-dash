import getDashboardFoundryMapping from "@/data/sessionData";
import { dashboardFoundryMappingT, gameMetadataT } from "@/types/types";
import { Commit } from "vuex";

const state = (): gameMetadataT => ({
  name: "Curse of Stahd - Mondays",
  urlSubstring: "hello-world"
});

const getters = {};

const actions = {
  getSessionData({ commit }: { commit: Commit }): void {
    commit("setSessionData", getDashboardFoundryMapping("sunday-rotfm"));
  }
};

const mutations = {
  setSessionData(state: gameMetadataT, sessionData: dashboardFoundryMappingT) {
    state.name = sessionData.name;
    state.urlSubstring = sessionData.worldId;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
