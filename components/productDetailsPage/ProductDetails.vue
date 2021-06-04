<template>
  <div v-if="product != null" class="details">
    <!-- Images Section -->
    <section class="details__images ">
      <!-- Large Preview Image -->
      <div class="details__previewImages" :style="'background-image: url(' + previewImage + ')'" >
          <!-- <img :src="previewImage" alt="product preview image" > -->
      </div>
      <!-- Small Images -->
      <div class="details__smallImages" >
        <div v-for="(imageUrl, index) in product.imageUrls" :key="imageUrl" class="details__smallImage" @click="handlePreviewImage(index)">
          <img :src="imageUrl" alt="product image" >
        </div>
      </div>
    </section>
    <!-- Information Section -->
    <section class="details__info">
      <!-- Product Name -->
      <h2 class="details__title">{{product.name}}</h2>
      <!-- Product Price -->
      <div v-if="product.salePrice" class="details__price">
        <span class="details__price--normal">${{product.salePrice}}</span>
        <span class="details__price--strike">${{product.price}}</span>
      </div>
      <div v-else>
        <span class="details__price--normal">${{product.price}}</span>
      </div>
      <!-- Product Color -->
      <div class="details__color">
        <div >
          <span>Color:</span><span class="details__color--name"> {{product.colorName}}</span>
        </div>
        <div class="details__color-circle" :style="'background-color:' + product.colorVal">&nbsp;</div>        
      </div>
      <!-- Product Description -->
      <div class="details__description">{{product.description}}</div>
      <!-- Product count box -->
      <div class="details__button-box">
        <button class="button button--circle" @click.prevent="handleCountChange(count - 1)">
          <svg xmlns="http://www.w3.org/2000/svg" class="minus" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
        </button>
        <input type="number" v-model="count" class="button--square details__count-box" @change="(e) => handleCountChange(e.target.value)"/>
        <button class="button button--circle" @click.prevent="handleCountChange(count + 1)">
          <svg xmlns="http://www.w3.org/2000/svg" class="plus" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <!-- Call to action button -->
      <div class="details__cta">
        <button class="button button--rectangle details__cta-button">Add to Card</button>
      </div>
    </section>
    
  </div>
</template>
<script>
import { defineComponent, ref, computed, watch } from '@nuxtjs/composition-api'


export default defineComponent({
  props: ['product'],
  setup(props) {
    const previewImageIndex = ref(0)
    // const previewImage = ref(null)
    const count = ref(1);
    const selected = ref({})
    

    // onMounted(() => {
    //   if(product.value == null){
    //     store.dispatch('products/loadProduct', props.id)
    //   }
    // })


    const previewImage = computed(() => 
     props.product.imageUrls[previewImageIndex.value])
    // watch([props.product, previewImageIndex], (index, prevIndex) => {
    //   if(props.product && index != prevIndex){
    //     previewImage.value = props.product.imageUrls[index]
    //   }
    // })

    const handlePreviewImage = (index) => {
      console.log(index)
      previewImageIndex.value = index
    }

    const handleCountChange = (val) => {
      if(val < 1) {
        val = 1
      }
      if(val > 100) {
        val = 100
      }
      count.value = val
    }

    // const handleAddToCart = () = {

    // }

    return {previewImage, count, selected, handlePreviewImage, handleCountChange}
  },
})
</script>




<style lang="scss" scoped>
.details {
  display: flex;
  min-height: 80vh;
  padding: 2rem 1rem;
  max-width: 100%;
  margin: 0 auto;
  background-color: $color-white;
  min-width: fit-content;

  &__images {
    width: 60%
  }

  &__previewImages{
    width: 100%;
    margin: 2rem auto;
    transition: all 0.3s;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 60%;
    & img{
      display: block;
      max-width: 100%
    }
  }

  &__smallImages {
    text-align: center;
  }

  &__smallImage {
    margin: 0 1rem;
    display: inline-block;
    transition: all .2s;

    & img{
      max-width: 12.5rem;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  &__info{
    width: 25%;
  }

  &__title{
    text-transform: capitalize;
    font-size: 4rem;
    margin: 5.5rem 0 1rem;
    line-height: 5rem;
  }

  &__price{
    font-size: 1.6rem;
    margin-bottom: 4rem;

    &--normal{
      color: $color-black;
    }
    &--strike{
      color: red;
      text-decoration: line-through;
    }
  }

  &__color{
    font-size: 1.6rem;

    &--name{
      text-transform: capitalize;
    }
  }

  &__color-circle{
    margin-top: 0.6rem;
    display: inline-block;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 100px;
    border: 1.5px $color-grey-dark solid
  }

  &__description{
    margin: 2.5rem 0 5rem ;
    font-size: 1.5rem;
    font-weight: 300;
    width: 100%;
  }


  &__button-box {
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-bottom: 2rem;
  }

  &__count-box {
    margin: 0 1rem;
    text-align: center;
  }

  &__cta{
    width: 70%;
    text-align: center;
    margin: 0 auto;
  }

  &__cta-button{
    width: 100%;
    color: $color-white;
    font-weight: 700;
    letter-spacing: 0.15rem;
  }

}

.plus{
  width: 1.6rem;
  height: 100%;
}
.minus{
  width: 1.6rem;
  height: 100%;
}
.button{
  position: relative;
  transition: all 0.15s;
  display: inline-block;


  &--circle {
    border-radius: 100px;
    width: 2.4rem;
    height: 2.4rem;
    border: 1px solid $color-black;
    background-color: $color-white;
    text-align: center;
    
    &:hover {
      box-shadow: 0 0.7rem 1.5rem rgba($color-black, 0.2);
      transform: translateY(-0.1rem);
      background-color: $color-white;
    }

    &:active{
      box-shadow: 0 0.5rem 1rem rgba($color-black, 0.15);
      transform: translateY(0);
      background-color: $color-white;
    }
  }

  &--square {
    border-radius: 0.5rem;
    width: 4rem;
    height: 4rem;
    border: 1px solid $color-black;
    background-color: $color-white;
  }

  &--rectangle {
    height: 4.5rem;
    border-radius: .5rem;
    background-color: $color-secondary-dark;
    border: none;
    box-shadow: 0 1rem 2rem rgba($color-black, .15);

    &:hover {
      box-shadow: 0 1.5rem 3rem rgba($color-black, .2);
      transform: translateY(-0.5rem);
    }

    &:active{
      box-shadow: 0 1rem 1.5rem rgba($color-black, .15);
      transform: translateY(-0.2rem);
    }
  }

  
  &--animated {
    animation: moveInBottom 1s ease-out .3s backwards;
  }
}
  


</style>
