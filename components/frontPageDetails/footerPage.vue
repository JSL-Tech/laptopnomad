<template>
  <div id="footer" ref="footer" class="footer">
    <div id="shippingReturns" class="popup shippingReturns">
      <div class="popup__content">
        <a href="#footer" class="popup__close">&times;</a>
        <div class="popup__text">
          <div class="popup__text-heading">
            RETURN POLICY
          </div>
          <div class="popup__text-subheading">
            Last updated June 23, 2021
          </div>
          <p>
            Thank you for your purchase. We hope you are satisfied with your purchase. However, if you are not completely satisfied with your purchase for any reason, you may return it to us for a full refund or an exchange. Please see below for more information on our return policy.
          </p>
          <div class="popup__text-subheading">
            RETURNS
          </div>
          <p>
            All returns must be postmarked within five (5) days of the purchase date. All returned items must be in new and unused condition.
          </p>
          <div class="popup__text-subheading">
            RETURN PROCESS
          </div>
          <p>
            To return an item, please email customer service at laptopnomadco@gmail.com to obtain a Return Merchandise Authorization number. After receiving a RMA number, place the item securely in its original packaging and include your proof of purchase, and mail your return to the following address:
          </p>
          <p>
            LaptopNomadco<br>
            Attn: Returns<br>
            *RMA number here*<br>
            My Mail Box 887040<br>
            Singapore 919191<br>
          </p>
          <p>Please note, you will be responsible for all return shipping charges. We strongly reccomend that you use a trackable method to mail your return.</p>
          <div class="popup__text-subheading">
            REFUNDS
          </div>
          <p>After receiving your return and inspecting the condition of your item, we will process your return or exchange. Please allow at least five(5) days from the receipt of your item to process your return or exchange. We will notify you by email when your return has been processed.</p>
          <div class="popup__text-subheading">
            EXCEPTIONS
          </div>
          <p>For defective or damaged products, please contact us at the contact details below to arrange a refund or exchange.</p>
          <div class="popup__text-subheading">
            QUESTIONS
          </div>
          <p>If you have any question concerning our return policy, please contact us at: <br> laptopnomadco@gmail.com</p>
        </div>
      </div>
    </div>
    <div class="footer__section">
      <div class="footer__content">
        <div class="footer__content-card">
          <h1 class="card-heading">
            Information
          </h1>
          <a href="#shippingReturns" class="card-link">
            Shipping & Returns
          </a>
          <nuxt-link :to="{path: '', hash:'#popup'}" class="card-link" @click.native="scroll('about')">
            FAQ
          </nuxt-link>
          <nuxt-link :to="{path: '', hash:'#popup'}" class="card-link" @click.native="scroll('about')">
            Contact Us
          </nuxt-link>
        </div>
        <div class="footer__content-card">
          <h1 class="card-heading">
            Shop
          </h1>
          <nuxt-link :to="{path: '/', hash:'#popup'}" class="card-link" @click.native="scroll('about')">
            Laptop Covers
          </nuxt-link>
          <nuxt-link :to="{path: '/', hash:'#popup'}" class="card-link" @click.native="scroll('about')">
            Shop All
          </nuxt-link>
        </div>
        <div class="footer__content-card">
          <h1 class="card-heading">
            Contact Us
          </h1>
          <nuxt-link :to="{path: '/', hash:'#popup'}" class="card-link" @click.native="scroll('about')">
            laptopnomadco@gmail.com
          </nuxt-link>
        </div>
      </div>
      <div class="footer__content-copyright">
        <span class="text">
          Copyright © 2021, LaptopNomadco
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {},
  methods: {
    scroll (anchorId) {
      if (this.$route.hash) {
        const anchor = document.querySelector(`#${anchorId}`)

        // Check if the anchor has been found
        if (anchor) {
          window.scrollTo({
          // Scroll so that the anchor is at the top of the view
            top: anchor.getBoundingClientRect().top + window.pageYOffset
          })
        }
      }
    }
  }
})
</script>

<style lang="scss" scoped>

.text{
  margin: 0 auto;
}

.popup{
    height: 100vh;
    width: 100%;
    background-color: rgba(0,0,0,.8);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3000;
    opacity: 0;
    visibility: hidden;
    transition: opacity .3s;

    &:target{
      opacity: 1;
      left: 0;
      visibility: visible;
    }

    &__close:link, &__close:visited{
    color: #777;
    position: absolute;
    top: 2.5rem;
    right: 2.5rem;
    font-size: 3rem;
    text-decoration: none;
    display: inline-block;
    transition: all .2s;
    line-height: 1;
    }

    &__close:hover{
      color: var(--mediumGreen);

    }

    &__content{
    background-color: white;
    width: 80%;
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, .2);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% ,-50%) scale(.5);
    border-radius: .3rem;
    display: table;
    opacity: 0;
    transition: all .4s;
}

    &:target .popup__content{
    opacity: 1;
    transform: translate(-50%,-50%) scale(1);
}
    &__img{
    display: block;
    width: 100%;
    overflow: hidden;
}

    &__text{
    font-size: 1.4rem;
    padding: 3rem;

    column-count: 2;
    column-gap: 4rem;
    column-rule: 1px solid #333;

    -moz-column-count: 2;
    -moz-column-gap: 4rem;
    -moz-column-rule: 1px solid #333;

    -moz-hyphens: auto;
    -ms-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;

    @include respond(phone) {
        column-count: 1;
        font-size: .8rem;
    }

    &-heading{
      font-weight: 600;
    }
    &-subheading{
      font-weight: 500;
    }
}
}

.card{

  &-heading{
    font-size: 1.5rem;
    font-weight: 600;
    padding-bottom: 2rem;

    @include respond(phone) {
        margin: 0 auto 2rem auto;
    }
  }

  &-link {
  text-decoration: none;
  color: black;
  margin-left: 0;
  margin-bottom: 1rem;

  @include respond(phone) {
        margin: 0 auto 2rem auto;
    }

  @include respond(tab-land) {
        font-size: 1.2rem;
    }
}
}

.footer {

    &__section{
        background-color: white;
        padding: 5rem 0 5rem 0;
    }
    &__content{
        display: flex;
        flex-direction: row;
        place-items: center;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: flex-start;

        @include respond(phone) {
        flex-direction: column;
        align-items: center;
    }

    &-copyright{
      text-align: center;
    }

    &-card{
      display: inherit;
      flex-direction: column;
      padding: 2%;
    }
    }
}
</style>
