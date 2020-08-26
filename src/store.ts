import Vue from "vue";
import Vuex from "vuex";
import request from "./http/http";
import api from "./http/request";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    getList({ commit }, params) {
      return request("GET", api.getList, "", "");
    },
    getComingList({ commit }, params) {
      return request("GET", api.getComingList, "", params);
    }
  }
});
