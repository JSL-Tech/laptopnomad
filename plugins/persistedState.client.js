// https://github.com/robinvdvleuten/vuex-persistedstate#readme
import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'testkey',
    reducer: (persistedState) => {
      const stateFilter = Object.assign({}, persistedState)
      const blackList = ['isLoading']

      blackList.forEach((item) => {
        delete stateFilter[item]
      })

      return stateFilter
    }
  })(store)
}
