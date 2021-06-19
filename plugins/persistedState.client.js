// https://github.com/robinvdvleuten/vuex-persistedstate#readme
import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'testkey'
  })(store)
}
