import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    leftStatusFather: false,
  },
  mutations: {
    // s点亮, 修改 M 的状态
    updateLeftStatus(state, payload) {
      state.leftStatusFather = val
    },
  },
  actions: {
    updateLeftStatusAction({ commit }, payload) {
      commit('updateLeftStatus', payload)
    }
  },
  modules: {},
});
