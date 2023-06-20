import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { getLocalStorage } from '@/utils/Obj'

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
      },
      {
        path: '/Home/qingjiaDetails',
        component: resolve => require(['../components/qingjiaDetails'], resolve),
      },
      {
        path: '/Home/UserCenterDetails',
        component: resolve => require(['../components/UserCenterDetails'], resolve),
      },
    ]
  },
];



const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const token = getLocalStorage('token')

  if (token || to.path === '/Login') {
      next();
      //已经登录的时候不能跳转到登录页面
      if (token && to.path === '/Login') {
        router.push('/Home/HomeUser');
      }
  } else {
      next("/Login");
  }
})

export default router;
