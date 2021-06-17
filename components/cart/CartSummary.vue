<template>
  <div>
    <section class="summary">
      <h3 class="summary__title">
        ORDER SUMMARY:
      </h3>
      <div class="summary__info">
        <p class="summary__count">
          {{ totalCount }} product{{ totalCount > 1 ? 's' : '' }}
        </p>
        <p class="summary__cost">
          <span>Product Total</span>
          <span>${{ totalPrice }}</span>
        </p>
        <p class="summary__cost">
          <span>Delivery</span>
          <span class="summary__delivery--right">{{ deliveryCost > 0 ? `$${deliveryCost}` : 'FREE' }}</span>
        </p>
        <p class="summary__cost summary__cost--total">
          <span>Total</span>
          <span>${{ totalPrice + deliveryCost }}</span>
        </p>
      </div>
      <PaymentButton :cart="cart"></PaymentButton>
      <button class="summary__checkout summary__checkout--light">
        <span>PROMO CODE
          <svg class="summary__icon summary__icon--quesiton" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </span>
        <svg class="summary__icon summary__icon--chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
      </button>
    </section>
    <div class="payment-type">
      <PaymentIcons />
    </div>
    <div class="help">
      <h4 class="help__title">
        Need Help?
      </h4>
      <a class="help__links" href="#">Shipping</a>
      <a class="help__links" href="#">Returns & Exchange</a>
      <a class="help__links" href="#">Contact Us</a>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
import PaymentIcons from './PaymentIcons.vue'
import PaymentButton from '@/components/cart/CheckoutButton.vue'

export default defineComponent({
  components: { PaymentIcons },
  props: {
    cart: {
      type: Array,
      default: () => []
    }
  },
  setup (props) {
    const deliveryCost = 0
    const countReducer = (accumulator, currentVal) => accumulator + currentVal.count
    // Total number of products in cart
    const totalCount = computed(() => props.cart.reduce(countReducer, 0))

    const priceReducer = (accumulator, currentVal) => {
      if (Object.prototype.hasOwnProperty.call(currentVal, 'salePrice') && currentVal.salePrice > 0) {
        return currentVal.salePrice * currentVal.count + accumulator
      } else {
        return currentVal.price * currentVal.count + accumulator
      }
    }
    // Total price of all product in cart
    const totalPrice = computed(() => props.cart.reduce(priceReducer, 0))

    return { totalCount, totalPrice, deliveryCost }
  }
})
</script>

<style lang="scss" scoped>
.summary {
  width: 75%;
  margin: 0 auto;
  background-color: $color-primary-light;
  padding: 1rem 2rem;
  @include respond(phone) {
    width: 100%;
  }

  &__title {
    font-size: 1.8rem;
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }

  &__info {
    background-color: $color-white;
    padding: 1rem 2rem;
  }

  &__count {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: 0;
    border-bottom: 1px solid $color-secondary-dark;
    width: 100%;
    padding-bottom: .5rem;
  }

  &__cost {
    display: flex;
    padding: 0 1rem;
    margin: 1.8rem 0;
    font-size: 1.3rem;
    font-weight: 400;
    justify-content: space-between;

    &:not(:last-child){
      border-bottom: 1px solid $color-primary;
    }

    &--total{
      margin: 2rem 0 1rem;
      font-size: 1.6rem;
      font-weight: 500;
    }
  }

  &__checkout {
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
    &--light {
      background-color: $color-white;
      margin-bottom: 1.5rem;
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

  &__icon {
    width: 1.8rem;
    height: 1.8rem;
    vertical-align: top;
  }
}

.payment-type {
  width: 75%;
  margin: 4rem auto;
}

.help {
  width: 75%;
  margin: 0 auto;

  &__title {
    font-size: 1.8rem;
    margin-bottom: 0.7rem;

  }

  &__links,
  &__links:link,
  &__links:visited {
    display: block;
    text-decoration: underline;
    color: $color-black;
    font-size: 1.4rem;
  }
}
</style>
