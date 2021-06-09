<template>
  <div class="container">
    <div class="title">
      <h4 class="title__text">
      Reviews
      </h4>
    </div>
    <div class="average">
      <span class="average__num">{{testReview.avgReview}}</span>  
      <StarsRating class="average__stars" :value="testReview.avgReview" size="large"/>      
    </div>
    <section class="stats">
      <div class="stats__box">
        <h3 class="stats__total">Customer Reviews ({{testReview.totalReviews}})</h3>  
        <div class="stats__row">
          <span class="stats__row-leading">5 Stars</span>
          <div class="stats__row-bar" :style="{'--width' : percentage(testReview.reviewCount.five, testReview.totalReviews)}"></div>
          <div class="stats__row-percent">{{percentage(testReview.reviewCount.five, testReview.totalReviews )}}</div>
        </div>
        <div class="stats__row">
          <span class="stats__row-leading">4 Stars</span>
          <div class="stats__row-bar" :style="{'--width' : percentage(testReview.reviewCount.four, testReview.totalReviews)}"></div>
          <div class="stats__row-percent">{{percentage(testReview.reviewCount.four, testReview.totalReviews )}}</div>
        </div>
        <div class="stats__row">
          <span class="stats__row-leading">3 Stars</span>
          <div class="stats__row-bar" :style="{'--width' : percentage(testReview.reviewCount.three, testReview.totalReviews)}"></div>
          <div class="stats__row-percent">{{percentage(testReview.reviewCount.three, testReview.totalReviews )}}</div>
        </div>
        <div class="stats__row">
          <span class="stats__row-leading">2 Stars</span>
          <div class="stats__row-bar" :style="{'--width' : percentage(testReview.reviewCount.two, testReview.totalReviews)}"></div>
          <div class="stats__row-percent">{{percentage(testReview.reviewCount.two, testReview.totalReviews )}}</div>
        </div>
        <div class="stats__row">
          <span class="stats__row-leading">1 Stars</span>
          <div class="stats__row-bar" :style="{'--width' : percentage(testReview.reviewCount.one, testReview.totalReviews)}"></div>
          <div class="stats__row-percent">{{percentage(testReview.reviewCount.one, testReview.totalReviews )}}</div>
        </div>
      </div>
    </section> 
    <section class="reviews">
      <div class="review" v-for="review in testReview.reviews" :key="review.name">
        <div class="review__name">{{review.name}}</div>
        <div class="review__info">
          <StarsRating class="review__rating" :value="review.stars" size="small"></StarsRating>
          <div class="review__date" >{{review.dateCreated}}</div>
          <div class="review__review">{{review.review}}</div>
          <!-- <div class="reviews__single-media" :style="'background-image: url(' + review.media[0] + ')'"></div> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
import StarsRating from '../StarsRating.vue'

export default defineComponent({
  props: ['product'],
  components: {StarsRating},
  setup() {
    const testReview = {
      totalReviews: 100,
      avgReview: 4.75,
      reviewCount: {
        five: 75,
        four: 25,
        three: 0,
        two: 0,
        one: 0,
      },
      reviews: [
        {
          name: 'L****L',
          review: 'I love this sleeve! Does the job well',
          media: ['~assets/images/reviewPic.jpg'],
          stars: 5,
          dateCreated: new Date().toLocaleDateString('en-SG'),
        },
        {
          name: 'L****e',
          review: 'I love this sleeve! Does the job well',
          media: [],
          stars: 4,
          dateCreated: new Date().toLocaleDateString('en-SG'),
        },
      ]
    }

    const percentage = (current, total) => Math.round(current / total * 100) + '%'

    return {testReview, percentage}
  },
})
</script>


<style lang="scss" scooped>
.container {
  margin: 2rem 0;
  background: $color-white;
  padding: 2rem 4rem;
  min-width: fit-content;

}
.title{
  width: 100%;
  text-align: center;
  margin-bottom: 1.5rem;

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
.average {
  text-align: center;
  margin-bottom: 4rem;
  
  &__num {
    font-size: 1.5rem;
  }

  &__stars {
    vertical-align: top;
  }
}

.stats {
  display: inline-block;
  width: 50%;

  @include respond(phone) {
    display: block;
    width: 100%;
  }

  &__box {
    width: 80%;
    margin: 0 0 0 auto;
    @include respond(phone) {
    margin: 0 auto;
    }
  }  
  &__total {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  &__row {
    display: inline-block;
    width: 100% ;
    white-space: nowrap;

    &:not(:last-child){
      margin-bottom: 0.7rem;
    }
  }

  &__row-leading {
    display: inline-block;
    font-size: 1.2rem;
    width: 4.2rem;
    width: 7%;
    min-width: fit-content;
  }

  &__row-bar {
    display: inline-block;
    background-color: $color-grey-light;
    height: 0.3rem;
    width: 70%;
    margin: 0 1rem;
    position: relative;

    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      height: 0.3rem;
      top: 0;
      left: 0;
      z-index: 2;
      background-color: orangered;
      width: var(--width);
    }
  }

  &__row-percent {
    display: inline-block;
    font-size: 1.2rem;
  }
}

.reviews {
  display: inline-block;
  width: 49%;
  text-align: center;
  border-left: 1px solid $color-grey-light;
  padding: 1rem 0;
  margin-bottom: 2rem;

  @include respond(phone){
    display: block;
    width: 100%;
    border-left: none;
    border-top: 1px solid $color-grey-light;
    margin-top: 2rem;
    padding-top: 2rem;
  }
  
}

.review {
  margin: 0 auto;
  width: 80%;
  &:not(:last-child){
    margin-bottom: 1.5rem;
    border-bottom: 1px solid $color-grey-light;
  }

  &__name {
    display: inline-block;
    width: 15%;
    font-size: 1.3rem;
    font-weight: 700;
    vertical-align: top;
    text-align: left;
  }

  &__info {
    display: inline-block;
    width: 80%;
    text-align: left;
  }

  &__rating {
    display: block;
    width: 100%;
  }

  &__date {
    font-size: 1.2rem;
    font-weight: 300;
    margin: 0.3rem 0 1rem;
  }

  &__review {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
}
</style>