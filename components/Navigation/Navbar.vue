<template>
  <div id="nav" class="nav">
    <nuxt-link class="nav__home" :to="{path: '/', hash:'#header'}" @click.native="scroll('header')">
      LAPTOPNOMADCO
    </nuxt-link>
    <!-- Phone Cart Icon -->
    <nuxt-link class="nav__link nav__link--phone-cart" :to="'/cart'">
      <svg
        id="Capa_1"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style="enable-background:new 0 0 512 512;"
        xml:space="preserve"
        class="nav__cart"
      >
        <g>
          <path
            d="M488.468,188.384H373.643L292.925,32.747c-2.894-5.58-7.787-9.699-13.779-11.599c-5.993-1.9-12.365-1.352-17.945,1.542
            c-1.94,1.006-3.676,2.25-5.201,3.673c-1.526-1.422-3.262-2.667-5.202-3.673c-5.579-2.894-11.953-3.441-17.945-1.542
            c-5.992,1.899-10.885,6.019-13.779,11.599l-85.082,164.052c-2.894,5.58-3.442,11.953-1.542,17.945
            c0.648,2.045,1.574,3.951,2.71,5.704H23.532c-4.705,0-8.532-3.827-8.532-8.532c0-4.704,3.828-8.532,8.532-8.532h85.505
            c4.142,0,7.5-3.357,7.5-7.5c0-4.142-3.358-7.5-7.5-7.5H23.532C10.557,188.384,0,198.941,0,211.916
            c0,10.761,7.262,19.851,17.141,22.643l43.439,231.67c2.795,14.912,15.836,25.735,31.008,25.735h328.825
            c15.172,0,28.212-10.823,31.008-25.735l43.439-231.671c9.878-2.791,17.14-11.881,17.14-22.642
            C512,198.94,501.443,188.384,488.468,188.384z M268.107,36.007c2.023-1.049,4.334-1.248,6.506-0.559
            c2.172,0.688,3.947,2.182,4.996,4.205l85.082,164.053c1.049,2.023,1.248,4.334,0.559,6.506c-0.688,2.173-2.182,3.947-4.206,4.996
            c-2.022,1.05-4.333,1.248-6.506,0.56c-2.173-0.688-3.947-2.182-4.996-4.205L264.461,47.509
            C262.295,43.333,263.931,38.173,268.107,36.007z M367.979,235.449l-7.097,73.178H263.5v-73.178H367.979z M256,63.775
            l80.228,154.692c0.354,0.684,0.74,1.344,1.153,1.981H174.619c0.413-0.637,0.799-1.297,1.153-1.98l7.823-15.083H297.75
            c4.142,0,7.5-3.357,7.5-7.5c0-4.142-3.358-7.5-7.5-7.5H191.374L256,63.775z M147.308,203.705l85.083-164.053
            c1.049-2.023,2.823-3.517,4.996-4.205c0.85-0.27,1.721-0.403,2.588-0.403c1.349,0,2.687,0.324,3.918,0.962
            c4.176,2.167,5.812,7.326,3.646,11.502l-85.083,164.053c-1.049,2.023-2.823,3.517-4.996,4.205c-2.171,0.688-4.482,0.49-6.506-0.56
            c-2.023-1.049-3.517-2.823-4.205-4.996C146.06,208.039,146.259,205.729,147.308,203.705z M32.569,235.449h96.382l7.097,73.178
            H46.29L32.569,235.449z M49.103,323.626h88.4l7.097,73.177H62.823L49.103,323.626z M91.587,476.965
            c-7.958,0-14.798-5.677-16.264-13.499l-9.687-51.663h80.418l6.32,65.162H91.587z M248.5,476.965h-81.057l-6.319-65.162H248.5
            V476.965z M248.5,396.803h-88.831l-7.097-73.177H248.5V396.803z M248.5,308.627h-97.382l-7.097-73.178H248.5V308.627z
            M344.557,476.965H263.5v-65.162h87.376L344.557,476.965z M352.331,396.804H263.5v-73.177h95.928L352.331,396.804z
            M436.677,463.466c-1.466,7.822-8.307,13.499-16.265,13.499h-60.786l6.32-65.162h80.418L436.677,463.466z M449.177,396.804
            h-81.776l7.097-73.177h88.4L449.177,396.804z M465.71,308.626h-89.757l7.097-73.178h96.381L465.71,308.626z M488.468,220.449
            h-0.122c-0.005,0-0.009,0-0.014,0H376.84c1.136-1.753,2.061-3.659,2.71-5.704c1.183-3.733,1.416-7.615,0.724-11.36h108.194
            c4.705,0,8.532,3.828,8.532,8.532C497,216.621,493.172,220.449,488.468,220.449z"
          />
        </g>
      </svg>
      <p class="nav__count">
        {{ cartCount }}
      </p>
    </nuxt-link>
    <!-- Nav button -->
    <input id="nav-toggle" type="checkbox" class="nav__checkbox">
    <label for="nav-toggle" class="nav__button">
      <span class="nav__icon" />
    </label>
    <!-- Link List -->
    <div id="myLinks">
      <nuxt-link class="nav__link" :to="{path: '/', hash:'#about'}" @click.native="scroll('about')">
        Whats Inside
      </nuxt-link>
      <nuxt-link class="nav__link" :to="{path: '/', hash:'#why'}" @click.native="scroll('why')">
        Why Nomad Case
      </nuxt-link>
      <nuxt-link class="nav__link" :to="{path: '/', hash:'#feature'}" @click.native="scroll('feature')">
        Our Product
      </nuxt-link>
      <nuxt-link class="nav__link nav__link--cart" :to="'/cart'">
        <svg
          id="Capa_1"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style="enable-background:new 0 0 512 512;"
          xml:space="preserve"
          class="nav__cart"
        >
          <g>
            <path
              d="M488.468,188.384H373.643L292.925,32.747c-2.894-5.58-7.787-9.699-13.779-11.599c-5.993-1.9-12.365-1.352-17.945,1.542
            c-1.94,1.006-3.676,2.25-5.201,3.673c-1.526-1.422-3.262-2.667-5.202-3.673c-5.579-2.894-11.953-3.441-17.945-1.542
            c-5.992,1.899-10.885,6.019-13.779,11.599l-85.082,164.052c-2.894,5.58-3.442,11.953-1.542,17.945
            c0.648,2.045,1.574,3.951,2.71,5.704H23.532c-4.705,0-8.532-3.827-8.532-8.532c0-4.704,3.828-8.532,8.532-8.532h85.505
            c4.142,0,7.5-3.357,7.5-7.5c0-4.142-3.358-7.5-7.5-7.5H23.532C10.557,188.384,0,198.941,0,211.916
            c0,10.761,7.262,19.851,17.141,22.643l43.439,231.67c2.795,14.912,15.836,25.735,31.008,25.735h328.825
            c15.172,0,28.212-10.823,31.008-25.735l43.439-231.671c9.878-2.791,17.14-11.881,17.14-22.642
            C512,198.94,501.443,188.384,488.468,188.384z M268.107,36.007c2.023-1.049,4.334-1.248,6.506-0.559
            c2.172,0.688,3.947,2.182,4.996,4.205l85.082,164.053c1.049,2.023,1.248,4.334,0.559,6.506c-0.688,2.173-2.182,3.947-4.206,4.996
            c-2.022,1.05-4.333,1.248-6.506,0.56c-2.173-0.688-3.947-2.182-4.996-4.205L264.461,47.509
            C262.295,43.333,263.931,38.173,268.107,36.007z M367.979,235.449l-7.097,73.178H263.5v-73.178H367.979z M256,63.775
            l80.228,154.692c0.354,0.684,0.74,1.344,1.153,1.981H174.619c0.413-0.637,0.799-1.297,1.153-1.98l7.823-15.083H297.75
            c4.142,0,7.5-3.357,7.5-7.5c0-4.142-3.358-7.5-7.5-7.5H191.374L256,63.775z M147.308,203.705l85.083-164.053
            c1.049-2.023,2.823-3.517,4.996-4.205c0.85-0.27,1.721-0.403,2.588-0.403c1.349,0,2.687,0.324,3.918,0.962
            c4.176,2.167,5.812,7.326,3.646,11.502l-85.083,164.053c-1.049,2.023-2.823,3.517-4.996,4.205c-2.171,0.688-4.482,0.49-6.506-0.56
            c-2.023-1.049-3.517-2.823-4.205-4.996C146.06,208.039,146.259,205.729,147.308,203.705z M32.569,235.449h96.382l7.097,73.178
            H46.29L32.569,235.449z M49.103,323.626h88.4l7.097,73.177H62.823L49.103,323.626z M91.587,476.965
            c-7.958,0-14.798-5.677-16.264-13.499l-9.687-51.663h80.418l6.32,65.162H91.587z M248.5,476.965h-81.057l-6.319-65.162H248.5
            V476.965z M248.5,396.803h-88.831l-7.097-73.177H248.5V396.803z M248.5,308.627h-97.382l-7.097-73.178H248.5V308.627z
            M344.557,476.965H263.5v-65.162h87.376L344.557,476.965z M352.331,396.804H263.5v-73.177h95.928L352.331,396.804z
            M436.677,463.466c-1.466,7.822-8.307,13.499-16.265,13.499h-60.786l6.32-65.162h80.418L436.677,463.466z M449.177,396.804
            h-81.776l7.097-73.177h88.4L449.177,396.804z M465.71,308.626h-89.757l7.097-73.178h96.381L465.71,308.626z M488.468,220.449
            h-0.122c-0.005,0-0.009,0-0.014,0H376.84c1.136-1.753,2.061-3.659,2.71-5.704c1.183-3.733,1.416-7.615,0.724-11.36h108.194
            c4.705,0,8.532,3.828,8.532,8.532C497,216.621,493.172,220.449,488.468,220.449z"
            />
          </g>
        </svg>
        <p class="nav__count">
          {{ cartCount }}
        </p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    cartCount: {
      type: Number,
      required: false,
      default: null
    }
  },
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
    height: $navbar-height;
    width: 100%;
    z-index: 100;
    white-space: nowrap;
    padding: 0 2rem;
    box-shadow: 0 0.2rem 0.5rem rgba($color-black, 0.2);

    @include respond(phone){
        height: auto;
      }
    & a {
      text-decoration: none;
      color: $color-black;
      line-height: $navbar-height;

      &.nav__link.nuxt-link-exact-active{
        color: white;
        fill: white;
        &:after {
          transform: translateX(0);
        }
      }
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
        fill: $color-white;
      }

      &:hover:after {
        transform: translateX(0);
      }

      &--cart {
        padding: 0 2rem;
        @include respond(phone) {
           display: none !important;
        }
      }

      &--phone-cart {
        padding: 0 2rem;
        display: none;
        @include respond(phone) {
          margin-left: auto;
          display: inline-block;
        }
      }
    }

    &__cart{
      width: 2.5rem;
      transition: fill .5s ease-in-out .1s;

      @include respond(phone) {
        width: 3rem;
      }
    }

    &__count {
      position: absolute;
      font-size: 1.2rem;
      top: -25%;
      left: 70%;
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
    height: $navbar-height;
    width: 7rem;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
    margin-left: 0rem;
    margin-bottom: 0;
    display: none;
    line-height: $navbar-height;

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
      transition: all .2s;
    }

    &__icon::before, &__icon::after{
      content: "";
      position: absolute;
      left: 0;
    }

    &__icon::before{transform: translateY(-1rem);}
    &__icon::after{transform: translateY(1rem);}

    &__checkbox:checked + &__button &__icon{
      background-color: transparent;
    }

    &__checkbox:checked + &__button &__icon::before{
      transform: rotate(135deg);
    }

    &__checkbox:checked + &__button &__icon::after{
      transform: rotate(-135deg);
    }

    &__icon{
      position: relative;
    }
  }

  .nav #myLinks {
    margin-left: auto;
    @include respond(phone){
        display: none;
        margin-left: none;
      }
  }

</style>
