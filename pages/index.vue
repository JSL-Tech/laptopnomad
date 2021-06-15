<template>
  <div>
    <topPage />
    <aboutPage />
    <whyUsPage />
  </div>
</template>


<script>
import topPage from "@/components/frontPageDetails/topPage"
import aboutPage from "@/components/frontPageDetails/aboutPage"
import whyUsPage from "@/components/frontPageDetails/whyUsPage"
import { defineComponent} from "@nuxtjs/composition-api"
export default defineComponent({
  components: {topPage, aboutPage, whyUsPage},
  setup() {

  }

})
</script>

<style lang="scss">

</style>
