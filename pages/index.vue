<template>
  <div>
    <topPage />
    <aboutPage />
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
