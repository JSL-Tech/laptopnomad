export default function ({ store, route, redirect }) {
  // If the user is not authenticated
  const id = route.params.id;
  var product = store.getters['products/product'](id)
  if (!product) {
    store.dispatch('products/loadProduct', id).then(() => {
      product = store.getters['products/product'](id)
      if(!product){
        return redirect('/')
      }
    })
  }
}