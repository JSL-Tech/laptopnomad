<template>
  <div>
    <topPage />
    <aboutPage />
    <whyUsPage />
    <featurePage />
    <footerPage />
  </div>
</template>

<script>
import topPage from '@/components/frontPageDetails/topPage'
import aboutPage from '@/components/frontPageDetails/aboutPage'
import whyUsPage from '@/components/frontPageDetails/whyUsPage'
import featurePage from '@/components/frontPageDetails/featurePage'
import footerPage from '@/components/frontPageDetails/footerPage'

import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  components: { topPage, aboutPage, whyUsPage, featurePage, footerPage },
  setup () {

  }

})
</script>

<style lang="scss">

</style>
