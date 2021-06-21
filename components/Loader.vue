<template>
  <div v-if="isLoading" class="backdrop">
    <div class="backdrop__loader loader">
      &nbsp;
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    isLoading: {
      type: Boolean,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.backdrop {
  height: 100%;
  width:  100%;
  z-index: 2000;
  top: 0;
  left: 0;
  background-color: rgba($color-black, 0.6);
  position: fixed;

  &__loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

}
</style>
