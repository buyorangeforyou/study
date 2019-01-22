import Vue from "vue";
import App from "./App.vue";
// 引入状态管理
import Store from "./store/index";
// 引入element ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 使用 element ui
Vue.use(ElementUI);

Vue.config.productionTip = false;
console.log(Store);
new Vue({
  store: Store,
  render: h => h(App)
}).$mount("#app");
