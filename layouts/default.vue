<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="scss" >
html {

    @include respond(tab-land) {
        font-size: 56.25%;
    }
    @include respond(tab-port) {
        font-size: 50%;
    }
    @include respond(big-desktop) {
        font-size: 75%;
    }
    // @include respond(phone) {
    //     font-size: 50%;
    // }

}

body {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  /* font-size: 16px; */
  line-height: 1.7;
  color: $color-black;
  background-color: $color-primary;
  padding: 2rem 6rem;
  min-height: 100vh;

  @include respond(tab-port) {
      padding: 2rem 0;
  }
}

/* -------------------------------------------------------------------------- */
/*                                  Animation                                 */
/* -------------------------------------------------------------------------- */
@keyframes moveInLeft {
    0% {
        opacity: 0;
        transform: translateX(-10rem);
    }

    80% {
        transform: translateX(1rem);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
}

@keyframes moveInRight {
    0% {
        opacity: 0;
        transform: translateX(10rem);
    }

    80% {
        transform: translateX(-1rem);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
}

@keyframes moveInBottom {
    0% {
        opacity: 0;
        transform: translateY(3rem);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
}

/* -------------------------------------------------------------------------- */
/*                                   Layout                                   */
/* -------------------------------------------------------------------------- */
.u-mb-2{
    margin-bottom: 2rem;
}

/* -------------------------------------------------------------------------- */
/*                          Change Default Appearance                         */
/* -------------------------------------------------------------------------- */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

</style>
