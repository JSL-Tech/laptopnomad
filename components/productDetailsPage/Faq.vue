<template>
  <div class="sect">
    <div class="title u-mb-2">
      <h4 class="title__text">
        FAQ
      </h4>
    </div>
    <h5 class="faq__header">
      Buyer Questions & Answers ({{ faqObjs.length }})
    </h5>
    <section class="faq hideScrollbar">
      <div v-for="(faq, index) in faqObjs" :key="index" class="faq__box">
        <p class="faq__text faq__text--dark">
          <svg class="faq__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
          </svg>
          {{ faq.question }}
        </p>
        <p class="faq__text">
          <svg class="faq__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
          </svg>
          {{ faq.reply }}
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    const faqObjs = [
      {
        question: 'Is this waterproof?',
        reply: 'It is water resistant but not completely waterproof'
      },
      {
        question: 'Is this made out of leather?',
        reply: 'It is made from PU leather'
      },
      {
        question: 'What laptop can fit this sleeve',
        reply: 'Any 14 inch laptops should be able to fit'
      },
      {
        question: 'Does it come with free gifts',
        reply: 'It comes with a pouch and a cable management. Both are free!'
      },
      {
        question: 'Does it come with free gifts',
        reply: 'It comes with a pouch and a cable management. Both are free!'
      },
      {
        question: 'Does it come with free gifts',
        reply: 'It comes with a pouch and a cable management. Both are free!'
      },
      {
        question: 'Does it come with free gifts',
        reply: 'It comes with a pouch and a cable management. Both are free!'
      },
      {
        question: 'Does it come with free gifts',
        reply: 'It comes with a pouch and a cable management. Both are free!'
      },
      {
        question: 'Does it come with free gifts',
        reply: 'It comes with a pouch and a cable management. Both are free!'
      },
      {
        question: 'Does it come with free gifts',
        reply: 'It comes with a pouch and a cable management. Both are free!'
      }
    ]
    return { faqObjs }
  }
})
</script>

<style lang="scss" scoped>
.sect {
  margin: 2rem 0;
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

    @include respond(tab-port) {
      width: 30%;
    }
    @include respond(phone) {
      width: 60%;
    }
  }
}
.faq{
  width: 70%;
  margin: 0 auto;
  max-height: 40vh;
  overflow-y: scroll;
  @include respond(phone) {
    width: 90%;
  }

  &__header {
    width: 70%;
    margin: 1.5rem auto;
    font-size: 1.7rem;
    font-weight: 700;
  }

  &__box {
    padding: 1rem 0;
    border-bottom: 1px solid $color-grey-light;
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 4rem;
    }
  }

  &__icon {
    width: 2rem;
    height: 2rem;
    vertical-align: middle;
    margin-right: 0.5rem;
  }
  &__text {
    font-size: 1.5rem;

    &--dark {
      font-weight: 500;
    }
  }

}
</style>
