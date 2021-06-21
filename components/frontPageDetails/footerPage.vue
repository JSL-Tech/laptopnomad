<template>
  <div id="footer" ref="footer" class="footer">
    <div class="footer__content-link">
      <div class="link">
        <div class="link-header heading">
          <h1>Information</h1>
        </div>
      </div>
      <div class="social">
        <div class="social-button">
          Facebook
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {}
})
</script>

<style lang="scss" scoped>
.footer {
    height: 30vh;
    background-color: white;

    &__content{
        display: flex;
        place-items: center;
    }
}
</style>
