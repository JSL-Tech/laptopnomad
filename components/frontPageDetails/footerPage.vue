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
    <div id="FAQ" class="popup FAQ">
      <div class="popup__content">
        <a href="#footer" class="popup__close">&times;</a>
        <div class="popup__text">
          <div class="popup__text-heading">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <div class="popup__text-subheading">
            When will I receive my product?
          </div>
          <p>
            Within 2-3 days
          </p>

          <div class="popup__text-subheading">
            Is there refund?
          </div>
          <p>Yes! You only need to pay for shipping to return the product and we will refund the item cost in full. For more information you can refer to our return policy.</p>
          <div class="popup__text-subheading">
            Will there be more colours released?
          </div>
          <p>
            Feel free to email us at laptopnomadco@gmail.com your suggestions, no promises!
          </p>
          <div class="popup__text-subheading">
            I would like to order a large quantity of your product, will there be a discount?
          </div>
          <p>
            For bulk order do email us at laptopnomadco@gmail.com, we will reply you promptly with an appropriate quotation.
          </p>
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
          <a href="#FAQ" class="card-link">
            FAQ
          </a>
        </div>
        <div class="footer__content-card">
          <h1 class="card-heading">
            Shop
          </h1>
          <nuxt-link :to="{path: '/', hash:'#feature'}" class="card-link" @click.native="scroll('feature')">
            Featured Items
          </nuxt-link>
          <nuxt-link :to="{path: '/', hash:'#why'}" class="card-link" @click.native="scroll('why')">
            Why Choose Us
          </nuxt-link>
        </div>
        <div class="footer__content-card">
          <h1 class="card-heading">
            Contact Us
          </h1>
          <button class="card-link card-link--btn" @click.prevent="copyToClipboard('laptopnomadco@gmail.com')">
            laptopnomadco@gmail.com
          </button>
        </div>
      </div>
      <div class="footer__content-copyright">
        <span class="text">
          Copyright © 2021, LaptopNomadco
        </span>
      </div>
    </div>
    <Snackbar :show="show">
      Copied Email!
    </Snackbar>
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import Snackbar from '@/components/Snackbar.vue'
export default defineComponent({
  components: { Snackbar },
  setup () {
    const show = ref(false)
    const handleShowSnackbar = () => {
      if (show.value === false) {
        show.value = true
        setTimeout(() => {
          show.value = false
        }, 3000)
      }
    }
    const copyToClipboard = (str) => {
      handleShowSnackbar()
      const el = document.createElement('textarea')
      el.value = str
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }

    return { show, handleShowSnackbar, copyToClipboard }
  },
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
      color: $color-dark;

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
      font-size: 1.7;
      font-weight: 600;
      padding-bottom: 1rem;
    }
    &-subheading{
      font-weight: 600;
    }
}
}

.card{
  &-heading{
    font-size: 1.8rem;
    font-weight: 600;
    padding-bottom: 2rem;

    @include respond(phone) {
        padding: 1rem;
        margin: 0 auto 0 auto;
    }
  }

  &-link , &-link:visited, &-link:link{
    font-size: 1.3rem;
    text-decoration: none;
    color: black;
    margin-left: -1rem;
    margin-bottom: 1rem;
    padding: 0 1rem;
    transition: all .2s;
    @include respond(phone) {
        margin: 0 auto 1rem auto;
    }

  }
  &-link{
    &--btn{
      background-color: $color-white;
      border: none;
    }
  }
  &-link:hover {
    color: $color-white;
    background-color: $color-grey-dark;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, .8);
    transform:  scale(1.3);
  }
  @include respond(tab-land) {
    font-size: 1.2rem;
  }

  @include respond(phone) {
    margin: 0 auto 2rem auto;
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

        &:not(:last-child) {
          margin-bottom: 3rem;
        }
      }
    }
}
</style>
