<template>
  <div id="why" class="why">
    <div class="card__header">
      <h1 class="card__heading">
        Why Choose Us
      </h1>
    </div>

    <div class="card__area">
      <div class="card card--1">
        <b-img-lazy
          src="~/assets/images/design.png"
          fluid
          alt="Responsive image"
          class="card__image card__image--design"
        />
        <h1 class="card__subheading">
          DESIGN
        </h1>
        <h2 class="card__text">
          From the sleeve to the stand to the wrist support our comprehensive
          design aims to meet all your needs
        </h2>
      </div>
      <div class="card card--2">
        <b-img-lazy
          src="~/assets/images/Speed.png"
          fluid
          alt="Responsive image"
          class="card__image"
        />
        <h1 class="card__subheading">
          SPEED
        </h1>
        <h2 class="card__text">
          Get your product within 2 - 4 days anywhere worldwide
        </h2>
      </div>
      <div class="card card--3">
        <b-img-lazy
          src="~/assets/images/posturebackless1.png"
          fluid
          alt="Responsive image"
          class="card__image"
        />
        <h1 class="card__subheading">
          HEALTH
        </h1>
        <h2 class="card__text">
          Better posture means less pain
        </h2>
      </div>
    </div>

    <div class="card__bottom">
      <LinkButton class="card__button" :is-dark="true">
        SHOP NOW
      </LinkButton>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import LinkButton from './LinkButton.vue'

export default defineComponent({
  components: { LinkButton },
  setup () {}
})
</script>

<style lang="scss" scoped>
.why {
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
      to right bottom,
      rgba(200, 194, 188, 0.9),
      rgba(200, 194, 188, 0.9)
    ),
    url(assets/images/whyUsBackground.jpg);
  padding: 3rem;

    @include respond(phone) {
      background-position: center;
    }

  .card__area {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1rem;
    grid-template-areas: "card--3 card--1 card--2";
    background-color: none;
    background-position: right;
    background-size: cover;
    background-image: none;
    position: relative;
    align-items: start;

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
  align-items: center;
  text-align: center;
  background-color: transparent;

  @include respond(phone) {
    justify-content: flex-end;
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

  &__header {
    padding-top: 2rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  &__bottom {
    text-align: center;
    padding-bottom: 2%;
    margin-top: 4rem;
  }

  &__caption {
    transform: translate(-50%, 20%);
    color: black;
    font-weight: 600;
    opacity: 0;
    transition: all 0.5s;
  }

  &__image {
    margin: 2rem auto;
    width: 25%;

    @include respond(phone) {
      width: 17.5%
    }

    &--design{
      @include respond(tab-land) {
        width: 12.5%
      }
      @include respond(phone) {
        width: 17.5%
      }
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
    padding: 0 1rem;
    @include respond(tab-land) {
      padding: 0 30%;
    }

  }

  &__button {

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
