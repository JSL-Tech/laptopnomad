<template>
  <div>
    <topPage />
    <aboutPage />
    <whyUsPage />
    <featurePage />
  </div>
</template>


<script>
import topPage from "@/components/frontPageDetails/topPage"
import aboutPage from "@/components/frontPageDetails/aboutPage"
import whyUsPage from "@/components/frontPageDetails/whyUsPage"
import featurePage from "@/components/frontPageDetails/featurePage"
import { defineComponent} from "@nuxtjs/composition-api"
export default defineComponent({
  components: {topPage, aboutPage, whyUsPage, featurePage},
  setup() {

  }

})
</script>

<style lang="scss">

</style>
