export const state = () => ({
  products: [],
})
export const getters = {
  // Get all products
  products(state) {
    return state.products
  },
  // Get a product with a specific id
  product: (state) => (id) => {
    console.log('Get product called id: ',id)
    console.log(state.products)
    return state.products.find(product => product.id === id);
  },
  productsCount: (_, getters) => {
    return getters.products.length
  }
}
export const mutations = {
  // Replace the products with a new array
  setProducts: (state, payload) => {
    state.products = payload
  },
  // Add a product to products in state 
  addProduct: (state, payload) => {
    state.products.push(payload);
  }
}
export const actions = {
  // Get whole collection of proudcts
  async loadAllProducts({commit}){
    console.log('loadAllProducts action called')
    const ref = this.$fire.firestore.collection('products')
    try{
      await ref.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          commit('addProduct', {id: doc.id, ...doc.data()})
        })
      })
    }catch(err){
      console.error(err)
    }
  },
  async loadProduct({commit}, id){
    console.log('loadProduct action called', id)
    const ref = this.$fire.firestore.collection('products').doc(id)
    try{
      await ref.get().then(doc => {
        if(doc.exists){
          commit('addProduct', {id: doc.id, ...doc.data()})
          return {id: doc.id, ...doc.data()}
        }else{
          console.log(`Document ID: ${id} does not exist`)
        }
      })
    }catch(err){
      console.error(err)
    }
  }
}