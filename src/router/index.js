import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/Home/mixer'
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    children: [
      {
        path: '/Home/mixer',
        component: resolve => require(['../components/middle-container'], resolve),
      },
      {
        path: '/Home/mixer1',
        component: resolve => require(['../components/middle-container1'], resolve),
      },
    ]
  },
];

const router = new VueRouter({
  routes,
});

export default router;
