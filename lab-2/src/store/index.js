import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: {
      count: 0,
      price: 0,
      items: []
    }
  },
  getters: {
    getCount(state){
      return state.cart.count
    }
  },
  mutations: {
    add(state, productId) {
      state.cart.count++
      state.cart.items.push(productId)
    }

  },
  actions: {
  },
  modules: {
  }
})
