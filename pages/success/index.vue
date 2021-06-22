<template>
  <div class="success">
    <div class="success__content">
      <AnimatedTick class="success__tick" />
      <h1 class="success__header">
        Thank You For Shopping with Us!
      </h1>
      <p class="success__body">
        You will receive an invoice for your purchase with the email you have used during checkout.
      </p>
      <nuxt-link class="success__link" to="/">
        <svg class="success__arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
        Go to Home
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import AnimatedTick from '@/components/AnimatedTickV2.vue'
export default defineComponent({
  components: { AnimatedTick },
  middleware: 'afterCheckOut',
  setup () {

  }
})
</script>

<style lang="scss" scoped>
.success {
  position: relative;
  text-align: center;
  height: 100vh;

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__tick {
    margin-bottom: 2rem;
  }

  &__header {
    font-size: 4rem;
  }

  &__body {
    margin-top: 1rem;
    font-size: 2rem;
  }

  &__link,
  &__link:visited,
  &__link:link {
    padding: 0.5rem;
    font-size: 1.5rem;
    color: $color-black;
    border-bottom: 2px solid $color-secondary-dark;
    transition: all 0.2s;

    &:hover {
      text-decoration: none;
      background: $color-secondary-dark;
      color: $color-white;
    }
  }

  &__arrow {
    width: 2rem;
    color: $color-secondary-dark;
  }

  &__link:hover &__arrow {
    color: white;
  }
}
</style>
