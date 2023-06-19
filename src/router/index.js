import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/Login',
  },
  {
    path: "/Login",
    name: "Login",
    component: resolve => require(['../views/Login.vue'], resolve),
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    children: [
      {
        path: '/Home/HomeUser',
        component: resolve => require(['../components/HomeUser'], resolve),
      },
      {
        path: '/Home/Center',
        component: resolve => require(['../components/UserCenter'], resolve),
      },
      {
        path: '/Home/qingjia',
        component: resolve => require(['../components/qingjia'], resolve),
      }
    ]
  },
];

const router = new VueRouter({
  routes,
});

export default router;
