export const state = () => ({
  cart: []
})

export const getters = {
  cart (state) {
    return state.cart
  },
  cartCount (_, getters) {
    return getters.cart.length
  },
  cartItem: state => (id) => {
    return state.cart.find(cartItem => cartItem.id === id)
  }
}

export const mutations = {
  // Reset the Cart
  resetCart: (state) => {
    state.cart = []
  },
  // Add a product to products in state
  addItem: (state, payload) => {
    state.cart.push(payload)
  },
  // Replaces an item with a new item
  updateItem: (state, payload) => {
    const itemIndex = state.cart.findIndex(cartItem => cartItem.id === payload.id)
    if (itemIndex !== -1) {
      state.cart[itemIndex] = payload
    }
  },
  // Adds to the count of an item
  varyItemCount: (state, payload) => {
    const itemIndex = state.cart.findIndex(cartItem => cartItem.id === payload.id)
    if (itemIndex !== -1) {
      state.cart[itemIndex].count += payload.count
    }
  },
  updateItemCount: (state, payload) => {
    const itemIndex = state.cart.findIndex(cartItem => cartItem.id === payload.id)
    if (itemIndex !== -1) {
      state.cart[itemIndex].count = payload.count
    }
  },
  // Removes an item from the Cart
  deleteItem: (state, payload) => {
    state.cart = state.cart.filter(cartItem => cartItem.id !== payload.id)
  }
}

export const actions = {
  // Add an item to the cart
  // Must be the whole product including the count
  addToCart ({ commit, getters }, payload) {
    if (!Object.prototype.hasOwnProperty.call(payload, 'count')) {
      return "addToCart payload does not contain 'count' property "
    }
    const item = getters.cartItem(payload.id)
    // If item is already in cart
    if (item) {
      commit('updateItemCount', payload)
    } else {
      // Item not in cart
      commit('addItem', payload)
    }
  }

}
