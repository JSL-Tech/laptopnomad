<template>
  <div id="nav" class="nav">
    <nuxt-link class="nav__home" :to="{path: '/', hash:'#header'}" @click.native="scroll('header')">
      LAPTOPNOMADCO
    </nuxt-link>
    <!-- Nav button -->
    <input id="nav-toggle" type="checkbox" class="nav__checkbox">
    <label for="nav-toggle" class="nav__button">
      <span class="nav__icon" />
    </label>
    <!-- Link List -->
    <div id="myLinks">
      <nuxt-link :to="'/cart'">
        Cart
      </nuxt-link>
      <nuxt-link :to="{path: '/', hash:'#about'}" @click.native="scroll('about')">
        Whats Inside
      </nuxt-link>
      <nuxt-link :to="{path: '/', hash:'#why'}" @click.native="scroll('why')">
        Why Nomad Case
      </nuxt-link>
      <nuxt-link :to="{path: '/', hash:'#feature'}" @click.native="scroll('why')">
        Our Product
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
  },
  methods: {
    scroll (anchorId) {
      if (this.$route.hash) {
        const anchor = document.querySelector(`#${anchorId}`)

        // Check if the anchor has been found
        if (anchor) {
          window.scrollTo({
          // Scroll so that the anchor is at the top of the view
            top: anchor.getBoundingClientRect().top + window.pageYOffset
          })
        }
      }
    }
  }
})
</script>

<style lang="scss" scoped>
  .nav{
    overflow: hidden;
    background-color: $color-white;
    position: fixed;
    width: 100%;
    z-index: 2;
    white-space: nowrap;

    &__home{
      font-size: 1.7rem;
      font-weight: 600;
      @include respond(phone){
      font-size: 2rem;
    }
    }

    &__checkbox{
      display: none;
    }

    &__checkbox:checked ~ #myLinks {
      display: block;
      margin-right: auto;
    }

    &__checkbox:checked ~ #myLinks a{
      display: block;
      margin-right: auto;
      width: 60rem;
    }

    &__button{
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, .1);
    text-align: center;
    cursor: pointer;
    margin-left: auto;
    display: none;
    @include respond(phone){
      display: block;
    }
    }

    &__icon, &__icon::before , &__icon::after {
      position: relative;
      width: 3rem;
      height: .2rem;
      background-color: white;
      display: inline-block;
    }

    &__icon::before, &__icon::after{
      content: "";
      position: absolute;
      left: 0;
    }

    &__icon::before{transform: translateY(1rem);}
    &__icon::after{transform: translateY(-1rem);}

    &__icon{
      position: relative;
      margin-top: 3.4rem;
    }
  }

  .nav a {
    color: $color-black;
    padding: 1.4rem 1.6rem;
    text-decoration: none;
    font-size: 1.7rem;
    display: inline-block;
  }

  .nav #myLinks {
    margin-left: auto;

    @include respond(phone){
      display: none;
    }
  }
</style>
