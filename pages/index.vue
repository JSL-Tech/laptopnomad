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

</style>
