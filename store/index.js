//vuex (store)
import axios from 'axios';
export const state = () => ({
  data: undefined,
});
export const mutations = {
  setData(state, data) {
    state.data = data
  },
};
export const getters = {
  //public
  data(state) {
    return state.data;
  },
};
export const actions = {
  //public (非同期処理)
  async fetch({ commit, state }) {
    // boardsの情報（データ）を取得する
    if(!state.data)
    {
      const res = await this.$axios.$get(`https://prog-ac-job-seeker.s3-ap-northeast-1.amazonaws.com/dev-master.json`);
      commit('setData', res);
    }
  },
};
