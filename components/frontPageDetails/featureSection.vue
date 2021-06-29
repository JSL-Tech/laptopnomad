<template>
  <div id="feature" ref="feature" class="feature">
    <div class="feature__header">
      <h1 class="feature__heading">
        Featured Cases
      </h1>
    </div>
    <div class="carousels">
      <div class="card card--1">
        <div>
          <b-carousel
            id="carousel-1"
            :interval="10000"
            controls
            indicators
            img-width="300"
            img-height="300"
            class="carousel"
          >
            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <template #img>
                <img
                  class="d-block img-fluid w-90"
                  src="~/assets/images/BacklessDetail_Leather2.png"
                  alt="image slot"
                >
              </template>
            </b-carousel-slide>
            <b-carousel-slide>
              <template #img>
                <img
                  class="d-block img-fluid w-90"
                  src="~/assets/images/Backless_Leather2.png"
                  alt="image slot"
                >
              </template>
            </b-carousel-slide>
          </b-carousel>
          <nuxt-link class="card__subheading" :to="'/products/FgnteTY6KnvbgbRkH2oY'">
            Classic Leather
          </nuxt-link>
          <div class="details__price">
            <span class="details__price--normal">S$35.00</span>
            <span class="details__price--strike">S$45.00</span>
          </div>
          <nuxt-link class="card__button" :to="'/products/FgnteTY6KnvbgbRkH2oY'">
            Shop Now
          </nuxt-link>
        </div>
      </div>
      <div class="card card--2">
        <div>
          <b-carousel
            id="carousel-1"
            :interval="10000"
            controls
            indicators
            img-width="300"
            img-height="300"
          >
            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <template #img>
                <img
                  class="d-block img-fluid w-90"
                  src="~/assets/images/BacklessPink_Detail2.png"
                  alt="image slot"
                >
              </template>
            </b-carousel-slide>
            <b-carousel-slide>
              <template #img>
                <img
                  class="d-block img-fluid w-90"
                  src="~/assets/images/Backless_pink2.png"
                  alt="image slot"
                >
              </template>
            </b-carousel-slide>
          </b-carousel>
          <nuxt-link class="card__subheading" :to="'/products/xwVXCqDywPkx6hi0wkIT'">
            Novel Pink
          </nuxt-link>
          <div class="details__price">
            <span class="details__price--normal">S$35.00</span>
            <span class="details__price--strike">S$45.00</span>
          </div>
          <nuxt-link class="card__button" :to="'/products/xwVXCqDywPkx6hi0wkIT'">
            Shop Now
          </nuxt-link>
        </div>
      </div>
    </div>
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
.feature {
  background: $color-white;
  padding: 5rem 8rem;
  &__header{
    text-align: center;
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
}

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
.carousels {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr ;
    gap: 1rem;
    grid-template-areas:
        "card--1 card--2";
    place-items: center;
    background-color: none;
    background-position: right;
    background-size: cover;
    position: relative;

    @include respond(phone) {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto;
      gap: 1;
      grid-template-areas:
        "card--1"
        "card--2";
      place-items: stretch;
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

    &__image {
        transition: transform .5s;

        &--small {
            width: 30%;
        }

        &--large {
            width: 80%;

        }

    }

    &__subheading {
      font-size: 2.4rem;
      color: black;

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
        color: $color-black;
        display: inline-block;
        font-size: 1.8rem;
        font-weight: 500;
        transition: all .1s;
        text-decoration: none;
        border: 1px solid $color-black;
        padding: .5rem 1.5rem;
        margin-top: 1rem;

        @include respond(tab-land) {
          padding: 1rem 2rem;
        }

        &:hover, &:active {
          transform: translateY(-.3rem);
          background: $color-secondary-dark;
          color: white;
          border: 1px solid transparent;
        }
    }
}

</style>

<style lang="scss">
.carousel-control-prev-icon {
 background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
}

.carousel-indicators{
  filter:invert(100%);
}
</style>
