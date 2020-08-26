import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import * as vantComponents from "./utils/vantComponents";
Vue.config.productionTip = false;
// 全局定义过滤器
import Filters from "./utils/filters";
for (let i in Filters) {
  // @ts-ignore
  Vue.filter(i, Filters[i]);
}
// 导出公共方法
import tool from "./utils/tool";
Vue.prototype.Tool = tool;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
