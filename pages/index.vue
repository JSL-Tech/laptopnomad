<template>
  <div>
    <nuxt-link :to="'/products/1rBHJM0XvnEFeYDxso9t'">first product</nuxt-link>
    <nuxt-link :to="'/products/rXvql9MfAnrW8OPu1fEn'">second product</nuxt-link>
  </div>
</template>


<script>
import topPage from "@/components/frontPageDetails/topPage"
import aboutPage from "@/components/frontPageDetails/aboutPage"
import { defineComponent} from "@nuxtjs/composition-api"
export default defineComponent({
  components: {topPage, aboutPage},
  setup() {

  }

})
</script>

<style lang="scss">

.home {
  font-size: 50px;
  color: black;


  & a,
  & a:visited,
  & a:link{
    text-decoration: none;
    color: $color-black;
  }
}

</style>
