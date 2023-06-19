import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../src/assets/common.css"
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;

Vue.use(Antd)


export const eventBus = new Vue();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
