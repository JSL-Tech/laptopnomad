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
      <nuxt-link class="nav__link" :to="'/cart'">
        Cart
      </nuxt-link>
      <nuxt-link class="nav__link" :to="{path: '/', hash:'#about'}" @click.native="scroll('about')">
        Whats Inside
      </nuxt-link>
      <nuxt-link class="nav__link" :to="{path: '/', hash:'#why'}" @click.native="scroll('why')">
        Why Nomad Case
      </nuxt-link>
      <nuxt-link class="nav__link" :to="{path: '/', hash:'#feature'}" @click.native="scroll('why')">
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
    height: $navbar-height;
    padding: 0 2rem;
    box-shadow: 0 0.2rem 0.5rem rgba($color-black, 0.2);
    & a {
      text-decoration: none;
      color: $color-black;
      line-height: $navbar-height;
    }
    &__home {
      font-size: 2rem;
      font-weight: 500;
      @include respond(phone){
        font-size: 2rem;
      }
    }
    &__link{
      position: relative;
      display: inline-block;
      font-size: 1.5rem;
      height: $navbar-height;
      padding: 0 1.5rem;
      overflow: hidden;
      transition: color .5s ease-in-out .1s;
      &:not(:last-child) {
        margin-right: -0.4rem;
      }

      &::after {
        z-index: -1;
        content: '';
        position: absolute;
        height: $navbar-height;
        width: 100%;
        top: 0;
        left: 0;
        background-color: $color-secondary-dark;
        transform: translateX(-101%);
        transition: transform .4s ease-in-out;
      }

      &:hover {
        color: $color-white;
      }

      &:hover:after {
        transform: translateX(0);
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
      background-color: $color-black;
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

  .nav #myLinks {
    margin-left: auto;

    @include respond(phone){
      display: none;
    }
  }
</style>
