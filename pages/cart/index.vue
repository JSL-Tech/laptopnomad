<template>
  <div class="cart">
    <CartItems class="cart__item" :cart="cart" @handle-count-change="handleCountChange" @handle-remove="handleRemove" />
    <CartSummary class="cart__summary" :cart="cart" />
  </div>
</template>

<script>
import { defineComponent, useStore, computed } from '@nuxtjs/composition-api'
import CartItems from '@/components/cart/CartItems.vue'
import CartSummary from '@/components/cart/CartSummary.vue'

export default defineComponent({
  components: { CartItems, CartSummary },
  setup () {
    const store = useStore()
    const cart = computed(() => store.getters['cart/cart'])

    const handleCountChange = (id, payload) => {
      store.commit('cart/updateItemCount', { id, count: payload })
    }

    const handleRemove = (id) => {
      store.commit('cart/deleteItem', { id })
    }

    return { cart, handleCountChange, handleRemove }
  }
})
</script>

<style lang="scss" scoped>
.cart {
  min-height: 75vh;
  display: flex;
  padding-top: 7rem;
  margin-bottom: 2.5rem;
  @include respond(tab-port) {
    padding-top: $navbar-height;
    flex-wrap: wrap;
  }
  &__item {
    width: 60%;

    @include respond(tab-port) {
      width: 100%;
    }
  }
  &__summary {
    width: 40%;

     @include respond(tab-port) {
      width: 100%;
      margin-top: 5rem;
    }
  }
}
</style>
