import Vue from "vue";
import Vuex from "vuex";
import * as Actions from "./actions";
import * as Getters from "./getters";
import * as Mutations from "./mutations";
import State from "./state";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: State,
  getters: Getters,
  actions: Actions,
  mutations: Mutations
});

export default store;
