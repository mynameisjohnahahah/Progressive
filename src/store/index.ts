import Vue from 'vue';
import Vuex from 'vuex';

import * as selectType from './selectType';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    request: false
  },
  mutations: {
    request(state, data) {
      state.request = data;
    }
  },
  modules: {
    selectType
  }
})
