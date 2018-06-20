import Vue from 'vue'
import Vuex from 'vuex'
import { cart } from './modules/cart'
import { product } from './modules/product'
import actions from './actions'
import mutations from './mutations'
import { createModule } from 'vuex-toast'
var SocialSharing = require('vue-social-sharing')

Vue.use(SocialSharing)
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    products: []
  },
  actions,
  mutations,
  getters: {
    getTotalProducts: state => {
      return state.products.length
    }
  },
  modules: {
    cart,
    product,
    toast: createModule({
      dismissInterval: 8000
    })
  }
})
