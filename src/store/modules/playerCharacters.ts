import getDataFromS3 from "@/api/getDataFromS3";

const state = () => ({
  characters: []
});

const getters = {};

const actions = {
  getPlayerCharacters({ commit }: { commit: Function }) {
    getDataFromS3(
      "https://commonwealthgiant.s3.us-east-2.amazonaws.com/character-json/hello-world-actors.json"
    ).then(data => commit("setPlayerCharacters", data));
  }
};

const mutations = {
  setPlayerCharacters(state: any, playerCharacters: any) {
    console.log(playerCharacters);
    state.characters = playerCharacters;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
