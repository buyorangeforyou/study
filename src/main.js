import Vue from "vue";
import App from "./App.vue";
// 引入状态管理
import Store from "./store/index";
// 引入路由
import Router from "./router";
// 引入自定义库
import Util from "./assets/js/utils";
// 引入element ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 引入全局自定义css文件
import "./assets/css/main.css";
// 使用 element ui
Vue.use(ElementUI);
// 使用axios作为请求
Vue.prototype.$http = Util.ajax;

Vue.config.productionTip = false;
new Vue({
  store: Store,
  router: Router,
  render: h => h(App)
}).$mount("#app");
