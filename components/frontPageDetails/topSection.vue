<template>
  <div id="header" class="header">
    <div class="header__box">
      <h1 class="header__box-main">
        LAPTOPNOMADCO
      </h1>
      <LinkButton :location="'feature'">
        Shop Now
      </LinkButton>
      <span class="header__box-button--sub">The case you have been looking for </span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import LinkButton from './LinkButton.vue'

export default defineComponent({
  components: { LinkButton },
  setup () {

  }
})
</script>

<style lang="scss" scoped>

.header {
    height: 80vh;
    background-image: linear-gradient(to right top,rgba($color-secondary-dark, 0.6), rgba($color-primary, 0.3)), url(assets/images/Header_CafeWork.jpg);
    background-size: cover;
    background-position: bottom;
    position: relative;

    @include respond(tab-land) {
        height: 80vh;
    }

    @include respond(tab-port) {
        height: 60vh;
    }

    @include respond(phone) {
        height: 60vh;
    }

    &__box{
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;

        @include respond(tab-port) {
            top: 65%;
        }

        &-main {
            color: white;
            font-size: 6rem;
            font-weight: 400;
            letter-spacing: .1rem;
            margin-bottom: 10rem;

            @include respond(tab-land) {
                font-size: 4rem;
            }

            @include respond(tab-port) {
                font-size: 3rem;
                margin-left: -.2rem;
            }

            @include respond(phone) {
                font-size: 3rem;
            }
        }

        &-button{
            &--sub{
                display: block;
                color: white;
                font-size: 2.5rem;

                @include respond(tab-land) {
                    font-size: 2rem;
                }

                @include respond(tab-port) {
                    font-size: 2rem;
                }

                @include respond(phone) {
                    font-size: 1.6rem;
                }
            }
        }
    }
}

</style>
