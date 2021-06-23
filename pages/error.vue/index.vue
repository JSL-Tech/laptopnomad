<template>
  <div class="error">
    <div class="error__bg">
      <h1 class="error__header">
        Something went wrong!
      </h1>
    </div>

    <div class="error__content">
      <h2 class="error__sub-header">
        Sorry! We are working on it right now!
      </h2>

      <p class="error__test">
        Please try again later or try refreshing the page.
      </p>

      <nuxt-link to="/" class="error__link">
        <svg class="error__arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
        Go to Home
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error {
  text-align: center;
  background: $color-white;
  width: 90%;
  margin: 0 auto;
  padding: 5rem;
  height: 100vh;

  @include respond(tab-port) {
    width: 100%;
  }

  &__bg {
    width: 100%;
    background-image: url('~assets/images/error.gif');
    height: 50rem;
    background-position: center;
    background-repeat: no-repeat;
  }
  &__header {
    font-size: 5rem;
  }
  &__sub-header {
    font-size: 3.5rem;
  }
  &__test {
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
