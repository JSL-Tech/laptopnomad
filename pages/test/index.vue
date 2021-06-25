<template>
  <div>
    <ContactUs />
    <!-- <Select /> -->
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import ContactUs from '~/components/form/ContactUs.vue'
export default defineComponent({
  components: { ContactUs },
  setup () {

  }
})
</script>
