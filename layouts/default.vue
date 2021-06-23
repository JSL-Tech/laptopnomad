<template>
  <div>
    <Navbar />
    <Nuxt />
    <Loader :is-loading="isLoading" />
  </div>
</template>

<script>
import Navbar from '@/components/Navigation/Navbar'
import { computed, defineComponent, useStore } from '@nuxtjs/composition-api'
import Loader from '~/components/Loader.vue'

export default defineComponent({
  components: { Navbar, Loader },
  setup () {
    const store = useStore()
    const isLoading = computed(() => store.getters.isLoading)

    return { isLoading }
  }
})
</script>

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
}

body {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  line-height: 1.7;
  color: $color-black;
  background-color: $color-primary;
  min-height: 100vh;
}

/* -------------------------------------------------------------------------- */
/*                                Global Class                                */
/* -------------------------------------------------------------------------- */
.loader {
    display: inline-block;
    border: 4px solid #f3f3f3; /* Light grey */
    border-top: 4px solid $color-secondary-dark; /* Blue */
    border-radius: 50%;
    width: 2.2rem;
    height: 2.2rem;
    animation: spin 2s linear infinite;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.hideScrollbar::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.hideScrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/* -------------------------------------------------------------------------- */
/*                                Global Class                                */
/* -------------------------------------------------------------------------- */
.loader {
    display: inline-block;
    border: 4px solid #f3f3f3; /* Light grey */
    border-top: 4px solid $color-secondary-dark; /* Blue */
    border-radius: 50%;
    width: 2.2rem;
    height: 2.2rem;
    animation: spin 2s linear infinite;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.hideScrollbar::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.hideScrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
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
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* -------------------------------------------------------------------------- */
/*                                   Utility                                  */
/* -------------------------------------------------------------------------- */
.u-mb-1{
    margin-bottom: 1rem !important;
}
.u-mb-2{
    margin-bottom: 2rem !important;
}
.u-mb-4{
    margin-bottom: 4rem !important;
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
