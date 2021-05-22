export const state = () => ({
  user: null,
})

export const getters = {
    user(state) {
      return state.user
    },
  }

export const mutations = {
  onAuthStateChangedMutation: (state, { authUser, claims }) => {
    console.log('auth state change fired')
    console.log('claims', claims) // TODO: find out what is this
    if (!authUser) {
      state.user = null
    } else {
      // Do something with the authUser and the claims object...
      console.log('loggedIn')
      const { uid, email, emailVerified, displayName, photoURL } = authUser
      state.user = { uid, email, emailVerified, displayName, photoURL }
    }
  },
}

export const actions = {}

