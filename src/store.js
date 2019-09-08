import Vue from 'vue'
import Vuex from 'vuex'

import jsonData from './assets/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    json: jsonData,
    fullscreen: false
  },
  mutations: {
    swap_fullscreen: state => state.fullscreen = !state.fullscreen
  },
  actions: {

  }
})
