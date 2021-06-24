<template>
  <div id="about" ref="about" class="about">
    <div class="card card--1">
      <b-img
        src="~/assets/images/main.png"
        fluid
        alt="Responsive image"
        class="card__image card__image--large"
      />
    </div>
    <div class="card card--2">
      <b-img
        src="~/assets/images/Main_edited.jpg"
        fluid
        alt="Responsive image"
        class="card__image card__image--circle"
      />
    </div>
    <div class="card card--3">
      <b-img
        src="~/assets/images/5.jpg"
        fluid
        alt="Responsive image"
        class="card__image card__image--circle"
      />
    </div>
    <div class="card card--4">
      <b-img
        src="~/assets/images/pouch.png"
        fluid
        alt="Responsive image"
        class="card__image card__image--medium"
      />
      <h1 class="card__heading">
        BONUS
      </h1>
      <h2 class="card__subheading">
        Accesory Pouch
      </h2>
    </div>
    <div class="card card--5">
      <b-img
        src="~/assets/images/addon_cable.png"
        fluid
        alt="Responsive image"
        class="card__image card__image--small"
      />
      <h1 class="card__heading">
        BONUS
      </h1>
      <h2 class="card__subheading">
        Cable Organiser
      </h2>
    </div>
    <div class="card card--main">
      <h1 class="card__heading">
        Nomad Sleeve
      </h1>
      <h2 class="card__subheading">
        Laptop cases
      </h2>
      <span
        class="card__text"
      >Ergonomic structure designed to improve posture and alleviate wrist
        pain. Empowering the way you work.
      </span>
      <button class="card__button">
        Shop Sleeves
      </button>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {}
})
</script>

<style lang="scss" scoped>
.about {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  grid-template-areas:
    "card--5 card--1 card--2"
    "card--3 card--main card--4";
  place-items: center;
  background-color: none;
  background-position: right;
  background-size: cover;
  background-image: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.8)
    ),
    url(assets/images/Suitcase.jpg);
  padding: 3rem;

  @include respond(phone) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    gap: 1;
    grid-template-areas:
      "card--1 card--1"
      "card--main card--main"
      "card--4 card--5";
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
  }

  &--1 {
    grid-area: card--1;

    @include respond(phone) {
      img {
        width: 60%;
      }
    }
  }

  &--2 {
    grid-area: card--2;

    @include respond(phone) {
      display: none;
    }
  }

  &--3 {
    grid-area: card--3;

    @include respond(phone) {
      display: none;
    }
  }

  &--4 {
    grid-area: card--4;
  }

  &--5 {
    grid-area: card--5;
  }

  &--main {
    grid-area: card--main;
    align-self: start;
    margin-top: 1.5rem;
  }

  &__image {
    margin: 2rem 0;

    &--small {
      width: 30%;
    }

    &--medium {
      width: 55%
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
  }

  &__subheading {
    font-size: 2.4rem;

    @include respond(tab-land) {
      font-size: 2rem;
    }
    @include respond(phone) {
      font-size: 2rem;
      padding: 0 20%;
    }
  }

  &__text {
    font-size: 1.6rem;
    margin: 1.5rem 0;

    @include respond(phone) {
      padding: 0 20%;
    }
  }

  &__button {
    display: inline-block;
    margin-top: 2rem;
    background-color: $color-dark;
    color: white;
    text-transform: uppercase;
    padding: 1rem 3rem;
    border-radius: 10rem;
    font-size: 2rem;
    font-weight: 700;
    border: none;
    transition: all 0.1s;

    @include respond(tab-land){
      margin-top: 1rem;
    }
    @include respond(phone) {
      font-size: 1.6rem;
    }
    &:hover,
    &:active {
      transform: translateY(-0.2rem);
      filter: drop-shadow(0 0.2rem 0.4rem rgba(0, 0, 0, 0.5));
    }

  }
}
</style>
