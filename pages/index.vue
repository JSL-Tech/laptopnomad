<template>
  <div>
    <topSection />
    <aboutSection />
    <whyUsSection />
    <featureSection />
    <ContactUs />
  </div>
</template>

<script>
import topSection from '@/components/frontPageDetails/topSection'
import aboutSection from '@/components/frontPageDetails/aboutSection'
import whyUsSection from '@/components/frontPageDetails/whyUsSection'
import featureSection from '@/components/frontPageDetails/featureSection'
import ContactUs from '@/components/ContactUs'

import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  components: { topSection, aboutSection, whyUsSection, featureSection, ContactUs },
  setup () {

  }

})
</script>

<style lang="scss">

</style>
