export const state = () => ({
  user: null
})

export const getters = {
  user (state) {
    return state.user
  }
}

export const mutations = {
  onAuthStateChangedMutation: (state, { authUser, claims }) => {
    if (!authUser) {
      state.user = null
    } else {
      // Do something with the authUser and the claims object...
      const { uid, email, emailVerified, displayName, photoURL } = authUser
      state.user = { uid, email, emailVerified, displayName, photoURL }
    }
  }
}

export const actions = {
  // signOut() {
  //   this.$fire.auth.sign
  // }
}
