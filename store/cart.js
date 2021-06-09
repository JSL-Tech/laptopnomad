export const state = () => ({
  cart: [],
})

export const getters = {
  cart(state) {
    return state.cart
  },
  cartCount(_, getters) {
    return getters.cart.length
  },
  cartItem: (state) => (id) => {
    return state.cart.find(cartItem => cartItem.id === id)
  },
}

export const mutations = {
  // Reset the Cart
  resetCart: (state) => {
    state.products = []
  },
  // Add a product to products in state 
  addItem: (state, payload) => {
    state.cart.push(payload)
  },
  updateItem: (state, payload) => {
    const itemIndex = state.cart.findIndex(cartItem => cartItem.id === payload.id)
    state.cart[itemIndex] = payload
  },
  deleteItem: (state, payload) => {
    state.cart.filter(cartItem => cartItem.id != payload.id)
  }
}

export const actions = {
  addToCart({commit, getters}, payload){
    let item = getters.cartItem(payload.id)
    // If item is already in cart
    if(item){
      commit('updateItem', payload)
    }else{
      // Item not in cart
      commit('addItem', payload)
    }
  },
}
