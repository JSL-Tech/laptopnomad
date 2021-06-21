<template>
  <div id="feature" ref="feature" class="feature">
    <div class="card__header">
      <h1 class="card__heading">
        Featured Cases
      </h1>
    </div>
    <div class="card card--1">
      <div>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="10000"
          controls
          indicators
          img-width="480"
          img-height="480"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="480"
                height="480"
                src="~/assets/images/BacklessDetail_Leather.png"
                alt="image slot"
              >
            </template>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="480"
                height="480"
                src="~/assets/images/Backless_Leather.png"
                alt="image slot"
              >
            </template>
          </b-carousel-slide>
        </b-carousel>
        <h1 class="card__subheading">
          Classic Leather
        </h1>
        <div class="details__price">
          <span class="details__price--normal">S$35.00</span>
          <span class="details__price--strike">S$45.00</span>
        </div>
        <nuxt-link class="card__button" :to="'/products/1rBHJM0XvnEFeYDxso9t'">
          Shop Now
        </nuxt-link>
      </div>
    </div>
    <div class="card card--2">
      <div>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="10000"
          controls
          indicators
          img-width="480"
          img-height="480"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="480"
                height="480"
                src="~/assets/images/BacklessPink_Detail.png"
                alt="image slot"
              >
            </template>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="480"
                height="480"
                src="~/assets/images/Backless_pink.png"
                alt="image slot"
              >
            </template>
          </b-carousel-slide>
        </b-carousel>
        <h1 class="card__subheading">
          Novel Pink
        </h1>
        <div class="details__price">
          <span class="details__price--normal">S$35.00</span>
          <span class="details__price--strike">S$45.00</span>
        </div>
        <nuxt-link class="card__button" :to="'/products/rXvql9MfAnrW8OPu1fEn'">
          Shop Now
        </nuxt-link>
      </div>
    </div>

    <!-- <div class="card card--main">
                <h1 class="card__heading"> Nomad Sleeve </h1>
                <h2 class="card__subheading"> Laptop cases </h2>
                <span class="card__text">Ergonomic structure designed to improve posture and alleviate wrist pain. Empowering the way you work. </span>
                <button class="card__button">Shop Sleeves</button>
            </div> -->
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {

  }
})
</script>

<style lang="scss" scoped>

.details{
    &__price{
    font-size: 1.6rem;
    margin-bottom: 0rem;

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
}
.feature {
    display: grid;
    padding: 5rem 15rem 0 15rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr ;
    gap: 1rem;
    grid-template-areas:
        "card--1 card--2";
    place-items: center;
    background-color: none;
    background-position: right;
    background-size: cover;
    background-color: rgba(172, 167, 163, 1);
    position: relative;
    margin-bottom: 5rem;

    @include respond(phone) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
        gap: 1;
        grid-template-areas:
            "card--1"
            "card--2";
        place-items: stretch;
        padding: 5rem 3rem 0rem 3rem;

    }
}

.card {
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    background-color: transparent;

    @include respond(phone) {
        justify-content: flex-end;

        &:hover &__image {
        transform: scale(.7);
        filter: blur(.3rem) brightness(80%);
        opacity: .4;
        }

        &:hover &__caption {
        opacity: 1;
        transform: translate(-50%,-50%);
        }
    }

    &--1 {
        grid-area: card--1;
    }

    &--2 {
        grid-area: card--2;
    }

    &--3 {
        grid-area: card--3;
    }

    // &--4 {
    //     grid-area: card--4;
    // }

    // &--5 {
    //     grid-area: card--5;

    //     @include respond(phone) {
    //         img {
    //             padding-bottom: 3rem;
    //         }
    //     }
    // }

    // &--main {
    //     grid-area: card--main;
    //     justify-content: flex-end;
    // }
    &__header{
        position: absolute;
        top: 5%;
        left: 50%;
        transform: translate(-50%,-50%);

        @include respond(phone) {
            top: 3%;
        }
        }

    &__bottom{
        position: absolute;
        top: 95%;
        left: 50%;
        transform: translate(-50%,-50%);

        @include respond(phone) {
            top: 85%;
        }
    }

    &__caption{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 20%);
        color: black;
        font-weight: 600;
        opacity: 0;
        transition: all .5s;

    }

    &__image {
        margin: 2rem 0;
        transition: transform .5s;

        &--small {
            width: 30%;
        }

        &--large {
            width: 80%;

        }

        &--circle {
            width: 50%;
            border-radius: 50%;
        }
    }

    &__heading {
        font-size: 3.6rem;
        font-weight: 600;

        @include respond(tab-land) {
            font-size: 3rem;
        }

        @include respond(tab-port) {
            font-size: 2.4rem;
        }

        @include respond(phone) {
            font-size: 2rem;
        }

    }

    &__subheading {
        font-size: 2.4rem;

        @include respond(tab-land) {
            font-size: 2rem;
        }

    }

    &__text {
        font-size: 1.6rem;

        @include respond(tab-land) {
            font-size: 1.4rem;
        }

        @include respond(phone) {
            font-size: 1.2rem;
            padding: 0 6rem;
        }
        @include respond(phone) {
            display: none;
        }
    }

    &__button {
        background-color: transparent;
        color: red;
        display: inline-block;
        font-size: 2rem;
        font-weight: 500;
        border: none;
        transition: all .1s;
        text-decoration: none;

        &:hover, &:active {
            transform: translateY(-.2rem);
            filter: drop-shadow(0 .2rem 0.4rem rgba(0, 0, 0, 0.7))
        }

        @include respond(tab-land) {
            font-size: 2.4rem;
            padding: 1.3rem 3.6rem;
        }

        @include respond(tab-port) {
            font-size: 2rem;
        }
    }
}

</style>
