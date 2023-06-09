import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sm: { // 每个SM状态
      S1: false,
      S2: false,
      S3: false,
      S4: false,
      S5: false,
      S6: false,
      S7: false,
      S8: false,
      S9: false,
      S10: false,
      S11: false,
      S12: false,
      M1: false,
      M2: false,
      M3: false,
      M4: false,
      M5: false,
      M6: false,
      M7: false,
      M8: false,
      M9: false,
      M10: false,
      M11: false,
      M12: false,
    },
    leftStatusFather: false,
  },
  mutations: {
    // s点亮, 修改 M 的状态
    updateLeftStatus(state, value) {
      state.leftStatusFather = value
    },
    updateSmValue(state, payload) {
      const { key, value } = payload;
      state.sm[key] = value;
    },
    rightBtnCheckStatus(state, payload) {
      const { key } = payload;
      console.log("🚀  vuex:rightBtnCheckStatus", key)
      switch (key) {
        case 1:
          state.sm = { // 每个SM状态
            S1: true,
            S2: true,
            S3: true,
            S4: true,
            S5: true,
            S6: true,
            S7: true,
            S8: true,
            S9: true,
            S10: true,
            S11: true,
            S12: true,
            M1: true,
            M2: true,
            M3: true,
            M4: true,
            M5: true,
            M6: true,
            M7: true,
            M8: true,
            M9: true,
            M10: true,
            M11: true,
            M12: true,
          }
        case 2:
          state.sm = { // 每个SM状态
            S1: false,
            S2: true,
            S3: true,
            S4: false,
            S5: false,
            S6: false,
            S7: false,
            S8: false,
            S9: false,
            S10: false,
            S11: false,
            S12: false,
            M1: false,
            M2: false,
            M3: false,
            M4: false,
            M5: false,
            M6: false,
            M7: false,
            M8: false,
            M9: false,
            M10: false,
            M11: false,
            M12: false,
          }
      }
    }
  },
  actions: {
    updateLeftStatusAction({ commit }, value) {
      commit('updateLeftStatus', value)
    }
  },
  modules: {},
});
