<template>
  <div id="footer" ref="footer" class="footer">
    <div class="footer__content">
      <div class="footer__content-card">
        <h1 class="card-heading">
          Information
        </h1>
        <nuxt-link :to="{path: '/', hash:'#about'}" class="card-link" @click.native="scroll('about')">
          Shipping & Returns
        </nuxt-link>
        <nuxt-link :to="{path: '/', hash:'#about'}" class="card-link" @click.native="scroll('about')">
          FAQ
        </nuxt-link>
        <nuxt-link :to="{path: '/', hash:'#about'}" class="card-link" @click.native="scroll('about')">
          Contact Us
        </nuxt-link>
      </div>
      <div class="footer__content-card">
        <h1 class="card-heading">
          Shop
        </h1>
        <nuxt-link :to="{path: '/', hash:'#about'}" class="card-link" @click.native="scroll('about')">
          Laptop Covers
        </nuxt-link>
        <nuxt-link :to="{path: '/', hash:'#about'}" class="card-link" @click.native="scroll('about')">
          Shop All
        </nuxt-link>
      </div>
      <div class="footer__content-card">
        <h1 class="card-heading">
          Contact Us
        </h1>
        <nuxt-link :to="{path: '/', hash:'#about'}" class="card-link" @click.native="scroll('about')">
          laptopnomadco@gmail.com
        </nuxt-link>
        <nuxt-link :to="{path: '/', hash:'#about'}" class="card-link" @click.native="scroll('about')">
          +65 83387825
        </nuxt-link>
      </div>
      <div class="footer__content-card">
        <img src="" alt="">
        <h1 class="card-heading">
          Facebook
        </h1>
      </div>
      <div class="footer__content-card">
        <img src="" alt="">
        <h1 class="card-heading">
          Instagram
        </h1>
      </div>
    </div>
    <div class="footer__content-copyright">
      <span class="text">
        Copyright © 2021, LaptopNomadco
      </span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {},
  methods: {
    scroll (anchorId) {
      console.log(`scrolled! ${anchorId}`)
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

.text{
  margin: 0 auto;
}

.card{

  &-heading{
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 2rem;

    @include respond(phone) {
        margin: 0 auto 2rem auto;
    }
  }

  &-link {
  text-decoration: none;
  color: black;
  margin-left: 0;
  margin-bottom: 2rem;

  @include respond(phone) {
        margin: 0 auto 2rem auto;
    }

  @include respond(tab-land) {
        font-size: 1.2rem;
    }
}
}

.footer {
    background-color: white;
    padding: 5rem 0 5rem 0;

    &__content{
        display: flex;
        flex-direction: row;
        place-items: center;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: flex-start;

        @include respond(phone) {
        flex-direction: column;
        align-items: center;
    }

    &-copyright{
      text-align: center;
    }

    &-card{
      display: inherit;
      flex-direction: column;
      padding: 2%;
    }
    }
}
</style>
