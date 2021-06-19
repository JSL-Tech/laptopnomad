<template>
  <div class="sect">
    <div class="title">
      <h4 class="title__text">
        What's Inside
      </h4>
    </div>
    <div class="u-mb-2">
      <div class="card">
        <div class="card__img" :style="'background-image: url(' + product.imageUrls[0] + ')'">
&nbsp;
        </div>
        <p class="card__text card__text--large">
          1 Premium
        </p>
        <p class="card__text card__text--small">
          Nomad Sleeve
        </p>
      </div>
      <div class="card">
        <div class="card__img card__img--2">
&nbsp;
        </div>
        <p class="card__text card__text--large">
          1 FREE
        </p>
        <p class="card__text card__text--small">
          Accessory Pouch
        </p>
      </div>
      <div class="card">
        <div class="card__img card__img--3">
&nbsp;
        </div>
        <p class="card__text card__text--large">
          1 BONUS
        </p>
        <p class="card__text card__text--small">
          Cable Organiser
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },
  setup () {

  }
})
</script>

<style lang="scss" scoped>
.sect {
  margin-top: 2rem;
  background: $color-white;
  padding: 2rem 4rem;
  min-width: fit-content;
  width: 100%;

}
.title{
  width: 100%;
  text-align: center;

  &__text {
    display: inline-block;
    font-size: 1.8rem;
    font-weight: 400;
    background-color: $color-primary;
    padding: 1rem;
    width: 20%;
    min-width: fit-content;
    white-space: nowrap;
  }
}

.card {
  display: inline-block;
  width: 33%;
  text-align: center;
  border: none;

  @include respond(phone){
    display: block;
    width: 100%;
    margin-top: 4rem;
  }

  &__img {
    height: 20rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    &--2{
      background-image: url('~assets/images/pouch.png');
      max-width: 24rem;
      margin: 0 auto;
    }
    &--3{
      background-image: url('~assets/images/strap.png');
      max-width: 16rem;
      margin: 0 auto;
    }
  }
  &__text {
    white-space: nowrap;
    &--large {
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 0.15rem;
    }
    &--small {
      font-size: 1.4rem;
      font-weight: 400;
      letter-spacing: 0.15rem;
    }
  }
}

</style>
