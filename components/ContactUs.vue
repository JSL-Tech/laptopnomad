<template>
  <section class="section-book">
    <div class="book">
      <div class="book__form">
        <form action="#" class="form">
          <h2 class="book__heading-secondary">
            Contact Us
          </h2>

          <div class="form__group">
            <label for="name" class="form__label">Full name</label>
            <input id="name" type="text" class="form__input" placeholder="Full name" required>
          </div>

          <div class="form__group">
            <label for="email" class="form__label">Email address</label>
            <input id="email" type="email" class="form__input" placeholder="Email address" required>
          </div>

          <div class="form__group">
            <button class="form__button">
              Submit
              <svg class="form__button-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section-book {
    background-image: linear-gradient(to right bottom, $color-primary-light, $color-primary-dark);
    width: 100%;
}

.book {
    background-image: linear-gradient(105deg,
      rgba($color-white, .9) 0%,
      rgba($color-white, .9) 50%,
      transparent 50%) ,
      url(~assets/images/image-form-cover.jpg);
    background-size: 100%;
    background-position: bottom;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba($color-black, .2);

    @include respond(tab-land) {
      background-image: linear-gradient(105deg,
      rgba($color-white, .9) 0%,
      rgba($color-white, .9) 65%,
      transparent 65%) ,
      url(~assets/images/image-form-cover.jpg);
      background-size: cover;
    }

    @include respond(tab-port) {
      background-image: linear-gradient(to right,
      rgba($color-white, .9) 0%,
      rgba($color-white, .9) 100%),
      url(~assets/images/image-form-cover.jpg);
    }

    &__heading-secondary {
      font-size: 3rem;
      margin-bottom: 2rem;
    }

    &__form {
      width: 50%;
      padding: 6rem;

      @include respond(tab-land) {
        width: 65%;
      }

      @include respond(tab-port) {
        width: 100%;
      }

    }
}
.form {
    &__group:not(:last-child) {
        margin-bottom: 2rem;
    }

    &__input {
        font-size: 1.5rem;
        font-family: inherit;
        color: inherit;
        padding: 1.5rem 2rem;
        border-radius: 2px;
        background-color: rgba($color-white, .5);
        border: none;
        border-bottom: 3px solid transparent;
        width: 90%;
        display: block;
        transition: all .3s;

        @include respond(tab-port) {
            width: 100%;
        }

        &:focus {
            outline: none;
            box-shadow: 0 1rem 2rem rgba($color-black, .1);
            border-bottom: 3px solid $color-primary;
        }

        &:focus:invalid {
            border-bottom: 3px solid red;
        }

        &::-webkit-input-placeholder {
            color: $color-secondary-dark;
        }
    }

    &__label {
        font-size: 1.2rem;
        font-weight: 700;
        margin-left: 2rem;
        margin-top: .7rem;
        display: block;
        transition: all .3s;
    }

    &__input:placeholder-shown ~ &__label {
        opacity: 0;
        visibility: hidden;
        transform: translateY(4rem);
    }
    &__button{
      padding: 0.5rem;
      font-size: 1.5rem;
      color: $color-black;
      background-color: transparent;
      border: none;
      border-bottom: 2px solid $color-secondary-dark;
      transition: all 0.2s;
        &:hover {
          background: $color-secondary-dark;
          color: $color-white;
        }
      }
    &__button-arrow {
      width: 2rem;
      color: $color-secondary-dark;
    }
    &__button:hover &__button-arrow {
      color: white;
      border-bottom: 2px solid transparent;
    }

}

</style>
