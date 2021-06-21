<template>
  <div id="why" ref="why" class="why">
    <div class="card__header">
      <h1 class="card__heading">
        Why Choose Us
      </h1>
    </div>

    <div class="card__area">
      <div class="card card--1">
        <b-img
          src="~/assets/images/puzzle.png"
          fluid
          alt="Responsive image"
          class="card__image card__image--medium"
        />
        <figcaption class="card__caption">
          From the sleeve to the stand to the wrist support our design aims to
          meet all your needs
        </figcaption>
        <h1 class="card__subheading">
          DESIGN
        </h1>
        <h2 class="card__text">
          From the sleeve to the stand to the wrist support our comprehensive
          design aims to meet all your needs
        </h2>
      </div>
      <div class="card card--2">
        <b-img
          src="~/assets/images/Speed.png"
          fluid
          alt="Responsive image"
          class="card__image card__image--medium"
        />
        <figcaption class="card__caption">
          Get your product within 2 - 4 days anywhere worldwide
        </figcaption>
        <h1 class="card__subheading">
          SPEED
        </h1>
        <h2 class="card__text">
          Get your product within 2 - 4 days anywhere worldwide
        </h2>
      </div>
      <div class="card card--3">
        <b-img
          src="~/assets/images/posturebackless.png"
          fluid
          alt="Responsive image"
          class="card__image card__image--mediumLarge"
        />
        <figcaption class="card__caption">
          Better posture means less pain
        </figcaption>
        <h1 class="card__subheading">
          HEALTH
        </h1>
        <h2 class="card__text">
          Better posture means less pain
        </h2>
      </div>
    </div>

    <div class="card__bottom">
      <button class="card__button">
        Shop Now
      </button>
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
  setup () {}
})
</script>

<style lang="scss" scoped>
.why {
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
      to right bottom,
      rgba(200, 194, 188, 0.8),
      rgba(200, 194, 188, 0.8)
    ),
    url(assets/images/whyUsBackground.jpg);

    @include respond(phone) {
      background-position: center;
    }

  .card__area {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1rem;
    grid-template-areas: "card--3 card--1 card--2";
    place-items: center;
    background-color: none;
    background-position: right;
    background-size: cover;
    background-image: none;
    position: relative;

    @include respond(tab-land) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      gap: 1;
      grid-template-areas:
        "card--1 card--1"
        "card--2 card--3";
      place-items: stretch;
    }
    @include respond(phone) {
      grid-template-columns: 1fr ;
      grid-template-rows: auto auto auto;
      gap: 1;
      grid-template-areas:
        "card--1"
        "card--2"
        "card--3";
      place-items: stretch;
    }
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

    // &:hover &__image {
    //   transform: scale(0.7);
    //   filter: blur(0.3rem) brightness(80%);
    //   opacity: 0.4;
    // }

    // &:hover &__caption {
    //   opacity: 1;
    //   transform: translate(-50%, -50%);
    // }
  }

  &--1 {
    grid-area: card--1;

  }

  &--1 img{

      @include respond(tab-land) {
      width: 30%;
    }
    @include respond(phone) {
      width: 40%;
      }
  }

  &--2 {
    grid-area: card--2;
  }

  &--2 img{

    @include respond(phone) {
      width: 40%;
      }
  }

  &--3 {
    grid-area: card--3;
  }

  &--3 img{

      @include respond(big-desktop) {
      width: 90%;
    }
      @include respond(tab-land) {
      width: 50%;
    }
    @include respond(phone) {
      width: 40%;
      }
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
  &__header {
    // position: absolute;
    // top: 8%;
    // left: 50%;
    // transform: translate(-50%,-50%);
    padding-top: 2%;
    text-align: center;
  }

  &__bottom {
    // position: absolute;
    // top: 95%;
    // left: 50%;
    // transform: translate(-50%,-50%);

    // @include respond(phone) {
    //     top: 85%;
    // }
    text-align: center;
    padding-bottom: 2%;
  }

  &__caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 20%);
    color: black;
    font-weight: 600;
    opacity: 0;
    transition: all 0.5s;
  }

  &__image {
    margin: 2rem 0;
    transition: transform 0.5s;

    &--small {
      width: 30%;
    }

    &--medium {
      width: 50%;
    }

    &--mediumLarge {
      width: 60%;
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
      font-size: 4rem;
    }
  }

  &__subheading {
    font-size: 2.4rem;
    font-weight: 600;

    @include respond(tab-land) {
      font-size: 2.5rem;
    }

    @include respond(phone) {
      font-size: 3rem;
      padding: 0 30%;
    }
  }

  &__text {
    font-size: 1.6rem;
    padding: 0 5% 0 5%;

    @include respond(tab-land) {
      font-size: 2rem;
      padding: 0 20% 0 20%;
    }

    @include respond(phone) {
      font-size: 2rem;
      padding: 0 30%;
    }
  }

  &__button {
    background-color: $color-dark;
    color: white;
    text-transform: uppercase;
    padding: 1rem 3rem;
    border-radius: 10rem;
    display: inline-block;
    font-size: 2rem;
    font-weight: 600;
    border: none;
    transition: all 0.1s;

    &:hover,
    &:active {
      transform: translateY(-0.2rem);
      filter: drop-shadow(0 0.2rem 0.4rem rgba(0, 0, 0, 0.5));
    }

    @include respond(tab-land) {
      font-size: 2rem;
      padding: 1rem 3rem;
    }

    @include respond(tab-port) {
      font-size: 2rem;
    }

    @include respond(phone) {
      font-size: 1.6rem;
    }
  }
}
</style>
