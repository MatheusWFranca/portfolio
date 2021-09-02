import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentSlide: null,
  },
  mutations: {
    currentSlide(state, payload) {
      state.currentSlide = payload
      console.log(this.currentSlide)
    }
  },
  actions: {
    mudarSlide(context, payload) {
      context.commit('currentSlide', payload)
      console.log(payload)
    }
  },
  modules: {}
})