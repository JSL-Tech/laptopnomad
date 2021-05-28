<template>
  <div v-if="product != null" class="details">
    <section class="details__images ">
      <div class="details__previewImages u-margin-bottom-small">
          <img :src="previewImage" alt="product preview image" >
      </div>
      <div class="details__smallImages ">
        <div v-for="imageUrl in product.imageUrls" :key="imageUrl" class="details__smallImage">
          <img :src="imageUrl" alt="product image" >
        </div>
      </div>
    </section>
    <section class="details__info u-margin-top-medium">
      <h2 class="details__title">{{product.name}}</h2>
      <div v-if="product.salePrice" class="details__price u-margin-bottom-medium">
        <span class="details__price--normal">${{product.salePrice}}</span>
        <span class="details__price--strike">${{product.price}}</span>
      </div>
      <div v-else>
        <span class="details__price--normal">${{product.price}}</span>
      </div>
      <div class="details__color">
        <div >
          <span>Color:</span><span class="details__color--name"> {{product.colorName}}</span>
        </div>
        <div class="details__color-circle" :style="'background-color:' + product.colorVal">&nbsp;</div>        
      </div>
      <div class="details__description">{{product.description}}</div>

      <div class="details__button-box u-margin-bottom-medium">
        <button class="button--circle u-margin-right-smallest">
          <svg xmlns="http://www.w3.org/2000/svg" class="minus" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
        </button>
        <button class="button--square">1</button>
        <button class="button--circle u-margin-left-smallest">
          <svg xmlns="http://www.w3.org/2000/svg" class="plus" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <div class="details__cta u-margin-bottom-small">
        <button class="button--rectangle details__cta-button">Add to Card</button>
      </div>
    </section>
    
  </div>
</template>

<script>
export default {
	// components: {},
  data() {
    return {
      preivewImageIndex: 0,
      previewImage: null,
      tab: 0,
      selected: {},
      
    }
  },
  computed: {
    product() {return this.$store.getters['products/product'](this.$route.params.id)}
  },
  mounted() {
    // console.log('Created fired')
    // if(this.product == null){
      // const product = this.$store.getters['products/product'](this.$route.params.id)
      if(this.product == null){
        this.$store.dispatch('products/loadProduct', this.$route.params.id)
      }
    // }
  },
  watch: {
    product: function() {
      if(this.product != null) {
        this.previewImage = this.product.imageUrls[0]
      }
    },
    preivewImageIndex: function() {
      if(this.product) {
        this.previewImage = this.product.imageUrls[this.preivewImageIndex]
      }
    }
  },
  methods: {
    handlePreviewImage(index) {
      this.preivewImageIndex = index;
    }
  }

}
</script>

