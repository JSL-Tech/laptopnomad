<template>
  <div>
    <b-navbar fixed="top" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        NavBar
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-item><button @click="scrollToAbout">About Us</button></b-nav-item> -->
          <nuxt-link :to="{path: '/', hash:'#header'}" @click.native="scroll('header')">
            Header
          </nuxt-link>
          <nuxt-link :to="{path: '/', hash:'#about'}" @click.native="scroll('about')">
            About Us
          </nuxt-link>
          <nuxt-link :to="'/products/1rBHJM0XvnEFeYDxso9t'">
            first product
          </nuxt-link>
          <nuxt-link :to="'/products/rXvql9MfAnrW8OPu1fEn'">
            second product
          </nuxt-link>
          <nuxt-link :to="'/cart'">
            Cart
          </nuxt-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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

<style scoped>
  a,
  a:link,
  a:visited{
    text-decoration: none;
    color: white;
    margin-right: 5px;
  }
</style>
