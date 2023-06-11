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
    updateLeftStatus(state, payload) {
      const { key, val } = payload;

      // 判断 sm 对象中除了当前 key 值以外的所有以 S 开头的属性是否存在 true 值
      const hasTrueValue = Object.keys(state.sm).some((prop) => {
        if (prop.startsWith('S') && prop !== key) {
          return state.sm[prop] === true;
        }
        return false;
      });

      // 如果存在 true 值，则不修改 leftStatusFather 的状态
      if (hasTrueValue) {
        return;
      }
      state.leftStatusFather = val
    },
    updateSmValue(state, payload) {
      const { key, value } = payload;
      state.sm[key] = value;
    },
    rightBtnCheckStatus(state, payload) {
      const { key } = payload;
      switch (key) {
        case 1:
          state.leftStatusFather = true
          state.sm = Object.assign({}, state.sm, {
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
          });
          break;
        case 2:
          state.leftStatusFather = true
          state.sm = Object.assign({}, state.sm, {
            S1: false,
            S2: false,
            S3: true,
            S4: true,
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
          });
          break;
        case 3:
          state.leftStatusFather = true
          state.sm = Object.assign({}, state.sm, {
            S1: false,
            S2: true,
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
          });
          break;
        case 4:
          state.leftStatusFather = true
          state.sm = Object.assign({}, state.sm, {
            S1: false,
            S2: false,
            S3: false,
            S4: false,
            S5: false,
            S6: false,
            S7: false,
            S8: false,
            S9: true,
            S10: true,
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
          });
          break;
        case 5:
          state.leftStatusFather = true
          state.sm = Object.assign({}, state.sm, {
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
            S11: true,
            S12: true,
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
          });
          break;
        case 6:
          state.leftStatusFather = true
          state.sm = Object.assign({}, state.sm, {
            S1: false,
            S2: false,
            S3: false,
            S4: false,
            S5: true,
            S6: true,
            S7: true,
            S8: true,
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
          });
          break;
      }
    }
  },
  actions: {
    updateLeftStatusAction({ commit }, payload) {
      commit('updateLeftStatus', payload)
    }
  },
  modules: {},
});
