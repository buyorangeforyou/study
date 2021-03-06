import Vue from "vue";
import VueRouter from "vue-router";

// use

Vue.use(VueRouter);

const routers = [
  // 登陆界面
  {
    path: "/login",
    meta: { title: "登陆" },
    component: resolve => require(["./views/login.vue"], resolve)
  },
  {
    path: "/shopInfo",
    component: resolve => require(["./views/shopInfo.vue"], resolve)
  },
  {
    path: "/cart",
    component: resolve => require(["./views/cart.vue"], resolve)
  },
  {
    path:"/calcBalacne",
    component: resolve => require(["./views/calcBalance.vue"], resolve)
    
  }
];

export default new VueRouter({
  mode: "history",
  routes: routers
});
