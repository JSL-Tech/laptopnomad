<template>
  <div :class="'snackbar ' +( show ? 'show' : '')" :style="'width: ' + width">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent} from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    show: {
      type: Boolean, 
      required: true,
    },
    width: {
      type: String,
      default: '',
    }
  },
  setup() {
    /* -------------------------------------------------------------------------- */
    /*                                 How to use                                 */
    /* -------------------------------------------------------------------------- */
    // Import snackbar into target component
    // Create a ref boolean in your target component and pass it to Snackbar component
    // Create a function with a Timeout to set boolean = true
    // Timeout duration determines how often snackbar will show recommended is 3000
    // Width can be passed from parent to manually set the width. Any css values is accepted

    // Example:
    // In parent component template
    // <Snackbar :show="show">Success!</Snackbar>

    // In parent component setup 
    // const show = ref(false)
    // const handleShowSnackbar = () => {
    //   if(show.value == false) { 
    //     show.value = true
    //     setTimeout(() => {
    //         show.value = false
    //     }, 3000);
    //   }
    // }
  },
})
</script>

<style lang="scss" scoped>
.snackbar{
  visibility: hidden;
  min-width: 25rem;
  background: $color-secondary-dark;
  color: $color-white;
  font-size: 1.8rem;
  text-align: center;
  border-radius: .4rem;
  padding: 1.6rem;
  position: fixed;
  z-index: 100;
  bottom: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
}
.show {
  visibility: visible;
  animation: fadeInBottom 0.5s, fadeOutBottom 0.5s 2.5s;
  transform: translate(-50%, 0);
}

@keyframes fadeInBottom {
    0% {
        transform: translate(-50%, 110%);
        opacity: 0;
    }
    100% {
        transform: translate(-50%, 0);  
        opacity: 1;
    }
}

@keyframes fadeOutBottom {
   0% {
        transform: translate(-50%, 0); 
        opacity: 1;
    }
    100% {
        transform: translate(-50%, 110%);
        opacity: 0;
    }
}
</style>