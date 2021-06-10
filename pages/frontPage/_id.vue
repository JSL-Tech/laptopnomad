<template>
  <div>
    
  </div>
</template>

<script>
import { defineComponent, useStore, useRoute, computed} from '@nuxtjs/composition-api'

export default defineComponent({
  middleware: [],
  components: {},
  setup() {
    const route = useRoute()
    const store = useStore()
    const product = computed(() => store.getters['products/product'](route.value.params.id))

    return {product}
  },
})
</script>


<style>

</style>