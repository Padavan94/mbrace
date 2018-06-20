import { ADD_TOAST_MESSAGE } from 'vuex-toast'

const state = {
  addedToCart: JSON.parse(window.sessionStorage.getItem('cart')) || [],
  isOpened: false,
  animationDelete: false,
  animationAdd: false
}

const mutations = {
  addToCart (state, product) {
    let curProd = state.addedToCart.find((prod) => product._id === prod._id)
    if (curProd) {
      curProd.quantity += 1
    } else {
      state.addedToCart.push({...product, quantity: 1})
    }
    this.dispatch(ADD_TOAST_MESSAGE, {
      text: product.name + ' добавлен в корзину',
      type: 'success'
    })
    this.commit('saveCartInSession')
    this.commit('addCartAnimation', 'add')
  },

  closeCart (state) {
    state.isOpened = false
  },

  increseQuantity (state, product) {
    product.quantity += 1
    this.commit('saveCartInSession')
    this.commit('addCartAnimation', 'add')
  },

  decreaseQuantity (state, product) {
    if (product.quantity > 1) {
      product.quantity -= 1
      this.commit('addCartAnimation', 'delete')
    }
    this.commit('saveCartInSession')
  },

  openCart (state) {
    state.isOpened = true
  },

  deleteFromCart (state, id) {
    state.addedToCart = state.addedToCart.filter((prod) => prod._id !== id)
    this.commit('saveCartInSession')
    this.commit('addCartAnimation', 'delete')
  },

  saveCartInSession (state) {
    window.sessionStorage.setItem('cart', JSON.stringify(state.addedToCart))
  },

  addCartAnimation (state, action) {
    console.log(action)
    let timeout
    switch (action) {
      case 'delete':
        state.animationDelete = true
        timeout = setTimeout(function () {
          state.animationDelete = false
          clearTimeout(timeout)
        }, 400)
        break
      case 'add':
        state.animationAdd = true
        timeout = setTimeout(function () {
          state.animationAdd = false
          clearTimeout(timeout)
        }, 400)
        break
      default:
        return ''
    }
  }
}

const actions = {
}

const getters = {
  getAddedToCart: state => {
    return state.addedToCart.reduce((sum, product) => {
      return sum + product.quantity
    }, 0)
  },
  getTotalSum: state => {
    return state.addedToCart.reduce((sum, product) => {
      return sum + product.price * product.quantity
    }, 0)
  }
}

export const cart = {
  state,
  mutations,
  actions,
  getters
}
