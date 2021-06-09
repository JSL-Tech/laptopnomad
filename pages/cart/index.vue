<template>
  <div class="cart">
    <CartItems class="cart__item"/>
    <CartSummary class="cart__summary"/>
  </div>
</template>

<script>
import { defineComponent, useStore, useRoute, computed} from '@nuxtjs/composition-api'
import CartItems from '@/components/cart/CartItems.vue'
import CartSummary from '@/components/cart/CartSummary.vue'

export default defineComponent({
  components: {CartItems},
  setup() {
    const store = useStore(); 
    // const cart = computed(() => store.getters[car])
  },
})
</script>


<style lang="scss" scoped>
.cart {
  display: flex;
  &__item {
    width: 60%;
  }
  &__summary {
    width: 40%;
  }
}
</style>