export const product = {
  state: {
    detailedProductShown: false,
    detailedProduct: {}
  },
  mutations: {
    showProductDetails (state, product) {
      state.detailedProduct = product
      this.commit('closeCart')
      state.detailedProductShown = true
    },

    closeProductDetails (state) {
      state.detailedProductShown = false
    }
  },
  actions: { },
  getters: { }
}
