<template>
  <div v-if="product != null">
    <ProductDetails :product="product" />
    <WhatsInside :product="product" /> 
    <Reviews :product="product" /> 
    <FAQ :product="product" /> 
  </div>
</template>

<script>
import { defineComponent, useStore, useRoute, computed} from '@nuxtjs/composition-api'
import ProductDetails from '@/components/productDetailsPage/ProductDetails.vue'
import WhatsInside from '@/components/productDetailsPage/WhatsInside.vue'
import Reviews from '@/components/productDetailsPage/Reviews.vue'
import FAQ from '@/components/productDetailsPage/Faq.vue'

export default defineComponent({
  middleware: ['productExists'],
  components: {ProductDetails, WhatsInside, Reviews, FAQ},
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