export const state = () => ({
  isLoading: false
})

export const getters = {
  isLoading (state) {
    return state.isLoading
  }
}

export const mutations = {
  toggleIsLoading: (state, payload) => {
    console.log('Payload', payload)
    if (payload) {
      state.isLoading = payload
    } else {
      state.isLoading = !state.isLoading
    }
  }
}

export const actions = {
}
