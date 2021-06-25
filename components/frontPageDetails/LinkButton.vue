<template>
  <nuxt-link :to="{path: '/', hash:`'#${location}'`}" :class="isDark ? 'dark-link-btn' : 'link-btn' " @click.native="scroll('feature')">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    location: {
      type: String,
      required: false,
      default: ''
    },
    isDark: {
      type: Boolean,
      default: false
    }
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
}
</script>

<style lang="scss" scoped>
.link-btn, .link-btn:visited, .link-btn:link {
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  background-color: $color-white;
  color: $color-black;
  padding: 1rem 3rem;
  border-radius: 10rem;
  border: none;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  transition: all 0.1s;

  @include respond(phone) {
      font-size: 1.6rem;
  }

  &:hover,
  &:active {
      transform: translateY(-0.2rem);
      filter: drop-shadow(0 0.2rem 0.4rem rgba(0, 0, 0, 0.5));
  }
}
.dark-link-btn, .dark-link-btn:visited, .dark-link-btn:link {
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  background-color: $color-secondary-dark;
  color: $color-white;
  padding: 1rem 3rem;
  border-radius: 10rem;
  border: none;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  transition: all 0.1s;

  @include respond(phone) {
      font-size: 1.6rem;
  }

  &:hover,
  &:active {
      transform: translateY(-0.2rem);
      filter: drop-shadow(0 0.2rem 0.4rem rgba(0, 0, 0, 0.5));
  }
}
</style>
