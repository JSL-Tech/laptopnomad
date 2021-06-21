<template>
  <div>
    <StripeCheckout
      ref="checkoutRef"
      mode="payment"
      :pk="pk"
      :session-id="session.id"
    />
    <button v-if="isCartEmpty" class="checkout checkout--dark checkout--disabled" disabled>
      <span>CHECKOUT</span>
      <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
    </button>
    <button v-else class="checkout checkout--dark" @click="handleCheckout()">
      <span>CHECKOUT</span>
      <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
    </button>
  </div>
</template>

<script>
import { computed, defineComponent, ref, useStore } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    cart: {
      type: Array,
      required: true
    }
  },
  setup (props) {
    const store = useStore()
    const pk = process.env.STRIPE_PK
    const checkoutRef = ref(null)
    const session = ref('')
    const isCartEmpty = computed(() => !(props.cart.length > 0))
    const createCheckoutSessionEndpoint = 'https://asia-east2-learning-38322.cloudfunctions.net/stripe/create-checkout-session'

    const handleCheckout = async () => {
      if (isCartEmpty.value) {
        // Alert cart is empty
        return
      }
      store.commit('toggleIsLoading')
      const bodyData = formatCartData(props.cart)
      const response = await fetch(
        createCheckoutSessionEndpoint,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: bodyData
        })
      session.value = await response.json()
      const result = await checkoutRef.value.redirectToCheckout()
      setTimeout(() => {
        store.commit('toggleIsLoading')
      }, 1000)
      if (result && result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
      }
    }

    // Simplifies and Stringify cart to be sent to servers
    const formatCartData = (cart) => {
      const simplifiedCart = cart.map((item) => {
        return {
          productId: item.id,
          quantity: item.count
        }
      })
      return JSON.stringify(simplifiedCart)
    }

    return { pk, checkoutRef, session, isCartEmpty, handleCheckout }
  }
})
</script>

<style lang="scss" scoped>
.checkout {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1.4rem;
  font-weight: 300;
  letter-spacing: 0.4rem;
  text-transform: uppercase;
  box-shadow: 0 1rem 2rem rgba($color-primary-dark, 0.2);
  padding: 1.5rem 2rem;
  margin-top: 1.4rem;
  border: none;
  transition: transform 0.2s;

    &--dark {
      background-color: $color-secondary-dark;
      color: $color-white
    }

    &--disabled {
      opacity: 0.5;
      pointer-events: none;
    }

    &:hover {
      box-shadow: 0 1rem 2rem rgba($color-primary-dark, 0.2);
      transform: translateY(-.4rem);
    }

    &:active {
      box-shadow: 0 1rem 2rem rgba($color-primary-dark, 0.4);
      transform: translateY(0);
    }
    &:focus {
      outline: none;
    }
}

.icon {
  width: 1.8rem;
  height: 1.8rem;
  vertical-align: top;
}

</style>
