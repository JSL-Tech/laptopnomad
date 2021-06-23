<template>
  <div>
    <section class="items">
      <div v-if="cart.length == 0" class="items__empty">
        Your shopping cart is empty
      </div>
      <div v-for="item in cart" :key="item.id" class="item">
        <img class="item__img" :src="item.imageUrls[0]" alt="product image">
        <div class="item__info">
          <p class="item__name">
            {{ item.name }}
          </p>
          <p class="item__option">
            Color: {{ item.colorName }}
          </p>
          <p class="item__option">
            Size: Macbook Pro 13'
          </p>
          <!-- Product Price -->
          <!-- <p v-if="item.salePrice" class="details__price"> -->
          <p v-if="item.salePrice" class="item__price">
            <span class="item__price--normal">${{ item.salePrice }}</span>
            <span class="item__price--strike">${{ item.price }}</span>
          </p>
          <p v-else>
            <span class="item__price--normal">${{ item.price }}</span>
          </p>
          <!-- Product count box -->
        </div>
        <div class="item__actions">
          <div class="item__button-box">
            <button class="button button--circle" @click.prevent="varyCountChange(item, -1)">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
            </button>
            <input type="number" :value="item.count" class="item__count-box button--square" @change="(e) => handleCountChange(item, e.target.value)">
            <button class="button button--circle" @click.prevent="varyCountChange(item, 1)">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          <button class="item__remove button button--text" @click="handleRemove(item)">
            remove
          </button>
        </div>
      </div>
      <!-- Call to action button -->
      <div class="cart__cta u-mb-1">
        <nuxt-link to="/">
          <button class="button button--rectangle cart__cta-button">
            SHOP MORE
          </button>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    cart: {
      type: Array,
      required: true
    }
  },
  setup (props, { emit }) {
    const varyCountChange = (item, payload) => {
      let count = item.count + payload
      if (count < 1) {
        if (count === 0) {
          return
        } else {
          count = 1
        }
      } else if (count > 100) {
        if (count === 101) {
          return
        } else {
          count = 100
        }
      }
      emit('handle-count-change', item.id, count)
    }

    const handleCountChange = (item, payload) => {
      let count = parseInt(payload)
      if (count > 100) {
        count = 100
      } else if (count < 1) {
        count = 1
      }

      emit('handle-count-change', item.id, count)
    }

    const handleRemove = (item) => {
      // TODO: Some form of confirmation
      emit('handle-remove', item.id)
    }

    return { handleCountChange, varyCountChange, handleRemove }
  }
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
  text-align: center;
  @include respond(phone) {
    min-width: 0;
    width: 100%;
  }

  &__empty{
    font-size: 3rem;
  }
}
.item{
  width: 80%;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  text-align: center;
  padding: 3rem ;
  border-bottom: 1px solid $color-primary;
  white-space: nowrap;
  min-width: fit-content;
  @include respond(phone) {
    min-width: 0;
    text-align: center;
  }

  &__img {
    display: inline-block;
    width: 12rem;
    vertical-align: middle;
  }

  &__info {
    display: inline-block;
    vertical-align: middle;
    margin: 0 2rem;
    text-align: left;
    @include respond(phone) {
      display: block;
      text-align: center;
      margin: 1rem 0;
    }
  }

  &__name {
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0px;
  }

  &__option {
    font-size: 1.3rem;
    line-height: 1.4rem;
  }
  &__price {
    font-size: 1.6rem;

    @include respond(phone) {
      margin-top: 0.5rem;
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
    vertical-align: middle;
    margin-left: 4rem;
    @include respond(phone) {
      display: block;
      margin-left: 0;
    }
  }
  &__button-box {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-bottom: 0.2rem;
  }

  &__count-box {
    font-size: 1.4rem;
    margin: 0 1rem;
    text-align: center;
  }

  &__remove {
    width: 100%;
    font-size: 1.2rem;
    font-weight: 400;
    color: red;

    &:hover {
      color: darkred;
    }
    &:active {
      color: red;
    }
  }
}

.cart {
  &__cta{
    width: 40%;
    text-align: center;
    margin: 0 auto;
    margin-top: 2rem;

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
    font-size: 1.2rem;

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
      transform: translateY(-0.4rem);
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

.icon {
  fill: $color-black;
}
</style>
