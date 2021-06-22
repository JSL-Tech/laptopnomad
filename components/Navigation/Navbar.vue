<template>
  <div class="nav">
    <ul>
      <li style="float:left">
        <nuxt-link :to="{path: '/', hash:'#header'}" @click.native="scroll('header')">
          LAPTOPNOMADCO
        </nuxt-link>
      </li>
      <li style="float:right">
        <nuxt-link :to="'/cart'">
          Cart
        </nuxt-link>
      </li>
      <li style="float:right">
        <nuxt-link :to="{path: '/', hash:'#about'}" @click.native="scroll('about')">
          Whats Inside
        </nuxt-link>
      </li>
      <li style="float:right">
        <nuxt-link :to="{path: '/', hash:'#why'}" @click.native="scroll('why')">
          Why Nomad Case
        </nuxt-link>
      </li>
      <li style="float:right">
        <nuxt-link :to="{path: '/', hash:'#feature'}" @click.native="scroll('why')">
          Our Product
        </nuxt-link>
      </li>
    </ul>

    <!-- <b-navbar fixed="top" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <nuxt-link :to="{path: '/', hash:'#header'}" @click.native="scroll('header')">
          LAPTOPNOMADCO
        </nuxt-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav> -->
    <!-- Right aligned nav items -->
    <!-- <b-navbar-nav class="ml-auto"> -->
    <!-- <b-nav-item><button @click="scrollToAbout">About Us</button></b-nav-item> -->
    <!-- <nuxt-link :to="{path: '/', hash:'#about'}" @click.native="scroll('about')">
            About Us
          </nuxt-link>
          <nuxt-link :to="{path: '/', hash:'#why'}" @click.native="scroll('why')">
            Why Us
          </nuxt-link>
          <nuxt-link :to="{path: '/', hash:'#feature'}" @click.native="scroll('why')">
            Featured Products
          </nuxt-link>
          <nuxt-link :to="'/products/1rBHJM0XvnEFeYDxso9t'">
            Classic Leather
          </nuxt-link>
          <nuxt-link :to="'/products/rXvql9MfAnrW8OPu1fEn'">
            Novel Pink
          </nuxt-link>
          <nuxt-link :to="'/cart'">
            Cart
          </nuxt-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar> -->
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {

  },
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

<style scoped>

 ul {
   position: fixed;
   top: 0;
   width: 100%;
   z-index: 1;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
 }

  li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
</style>
