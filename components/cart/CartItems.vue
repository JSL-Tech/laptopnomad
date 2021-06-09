<template>
  <div>
    <section class="items">
      <div class="item">
        <img class="item__img" src="~/assets/images/pouch.png" alt="product image">
        <div class="item__info">
          <p class="item__name">
            nomad sleeve
          </p>
          <p class="item__option">Color: Natural Oak</p>
          <p class="item__option">Size: Macbook Pro 13'</p>
          <!-- Product Price -->
          <!-- <p v-if="item.salePrice" class="details__price"> -->
          <p class="item__price">
            <span class="item__price--normal">$35.00</span>
            <span class="item__price--strike">$45.00</span>
          </p>
          <!-- <p v-else>
            <span class="details__price--normal">${{product.price}}</span>
          </p> -->
          <!-- Product count box -->
        </div>
        <div class="item__actions">
          <div class="item__button-box">
            <button class="button button--circle" @click.prevent="{}">
              <svg xmlns="http://www.w3.org/2000/svg" class="minus" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
            </button>
            <input type="number" class="item__count-box button--square " @change="(e) => {}"/>
            <button class="button button--circle" @click.prevent="{}">
              <svg xmlns="http://www.w3.org/2000/svg" class="plus" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          <button class="item__remove button button--text">remove</button> 
        </div>
      </div>
      <!-- Call to action button -->
      <div class="cart__cta u-mb-2">
        <button class="button button--rectangle cart__cta-button">Continue Shopping</button>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
  },
})
</script>


<style lang="scss" scoped>
.items{
  width: 90%;
  margin: 0 auto;
  background-color: $color-white;
  height: auto;
  padding: 1rem 0;
  min-width: fit-content;
}
.item{
  width: 80%;
  margin: 0 auto;
  margin-bottom: 4rem;
  text-align: center;
  padding: 3rem 0;
  border-bottom: 1px solid $color-primary;
  white-space: nowrap;
  min-width: fit-content;

  &__img {
    display: inline-block;
    width: 14rem;
    vertical-align: top;
  }

  &__info {
    display: inline-block;
    margin: 0 2rem;
    text-align: left;
    height: auto;
  }

  &__name {
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0px;
  }

  &__option {
    font-size: 1.1rem;
    line-height: 1.4rem;
  }
  &__price {
    font-size: 1.4rem;

    @include respond(tab-port){
      font-size: 2rem;
    }

    &--normal{
      color: $color-black;
    }
    &--strike{
      color: red;
      text-decoration: line-through;
    }
  }

  &__actions {
    display: inline-block;
    margin-left: 4rem;
  }
  &__button-box {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-bottom: 0.5rem;
  }

  &__count-box {
    margin: 0 1rem;
    text-align: center;
  }

  &__remove {
    width: 100%;
    color: red;
  }
}

.cart {
  &__cta{
    width: 40%;
    text-align: center;
    margin: 0 auto;
    
    @include respond(phone){
      width: 40%;
      margin-bottom: 4rem;
    }
  }
  
  &__cta-button{
    width: 100%;
    color: $color-white;
    font-weight: 700;
    letter-spacing: 0.15rem;
  
    @include respond(phone){
      padding: 2rem 0;
    }
  }
}

.button{
  position: relative;
  transition: all 0.15s;
  display: inline-block;


  &--circle {
    border-radius: 100px;
    width: 2rem;
    height: 2rem;
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
    height: 3rem;
    border: 1px solid $color-black;
    background-color: $color-white;
  }

  &--rectangle {
    min-height: 4.5rem;
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

  &--text {
    background: none;
    border: none;
  }

  
  &--animated {
    animation: moveInBottom 1s ease-out .3s backwards;
  }
}
</style>