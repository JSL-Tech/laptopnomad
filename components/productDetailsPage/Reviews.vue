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
        <div class="stats__row" @click="handleFilterChange(5)">
          <span class="stats__row-leading">5 Stars</span>
          <div class="stats__row-bar" :style="{'--width' : percentage(testReview.reviewCount.five, testReview.totalReviews)}"></div>
          <div class="stats__row-percent">{{percentage(testReview.reviewCount.five, testReview.totalReviews )}}</div>
        </div>
        <div class="stats__row" @click="handleFilterChange(4)">
          <span class="stats__row-leading">4 Stars</span>
          <div class="stats__row-bar" :style="{'--width' : percentage(testReview.reviewCount.four, testReview.totalReviews)}"></div>
          <div class="stats__row-percent">{{percentage(testReview.reviewCount.four, testReview.totalReviews )}}</div>
        </div>
        <div class="stats__row" @click="handleFilterChange(3)">
          <span class="stats__row-leading">3 Stars</span>
          <div class="stats__row-bar" :style="{'--width' : percentage(testReview.reviewCount.three, testReview.totalReviews)}"></div>
          <div class="stats__row-percent">{{percentage(testReview.reviewCount.three, testReview.totalReviews )}}</div>
        </div>
        <div class="stats__row" @click="handleFilterChange(2)">
          <span class="stats__row-leading">2 Stars</span>
          <div class="stats__row-bar" :style="{'--width' : percentage(testReview.reviewCount.two, testReview.totalReviews)}"></div>
          <div class="stats__row-percent">{{percentage(testReview.reviewCount.two, testReview.totalReviews )}}</div>
        </div>
        <div class="stats__row" @click="handleFilterChange(1)">
          <span class="stats__row-leading">1 Stars</span>
          <div class="stats__row-bar" :style="{'--width' : percentage(testReview.reviewCount.one, testReview.totalReviews)}"></div>
          <div class="stats__row-percent">{{percentage(testReview.reviewCount.one, testReview.totalReviews )}}</div>
        </div>
        <button class="stats__row-button button button--rectangle" @click="filter = 0">View All</button>
      </div>
    </section> 
    <section class="reviews hideScrollbar">
      <div v-for="(review, index) in testReview.reviews" :key="index">
        <div class="review" v-if="filter == 0 || filter == review.stars">
          <div class="review__name">{{review.name}}</div>
          <div class="review__info">
            <StarsRating class="review__rating" :value="review.stars" size="small"></StarsRating>
            <div class="review__date" >{{review.dateCreated}}</div>
            <div class="review__review">{{review.review}}</div>
            <img class="review__img" v-if="review.media.length > 0" src="~/assets/images/review_pic.jpg" alt="review image">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from '@nuxtjs/composition-api'
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
          media: ['~/assets/images/review_pic.jpg'],
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
        {
          name: 'L****e',
          review: 'I love this sleeve! Does the job well',
          media: [],
          stars: 4,
          dateCreated: new Date().toLocaleDateString('en-SG'),
        },
        {
          name: 'L****e',
          review: 'I love this sleeve! Does the job well',
          media: [],
          stars: 4,
          dateCreated: new Date().toLocaleDateString('en-SG'),
        },
        {
          name: 'L****e',
          review: 'I love this sleeve! Does the job well',
          media: [],
          stars: 4,
          dateCreated: new Date().toLocaleDateString('en-SG'),
        },
        {
          name: 'L****e',
          review: 'I love this sleeve! Does the job well',
          media: [],
          stars: 4,
          dateCreated: new Date().toLocaleDateString('en-SG'),
        },
        {
          name: 'L****e',
          review: 'I love this sleeve! Does the job well',
          media: [],
          stars: 4,
          dateCreated: new Date().toLocaleDateString('en-SG'),
        },
        {
          name: 'L****e',
          review: 'I love this sleeve! Does the job well',
          media: [],
          stars: 4,
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
    const noReviews = ref(false);
    const filter = ref(0)

    const percentage = (current, total) => Math.round(current / total * 100) + '%'

    const handleFilterChange = (filterInt) => {
      filter.value = filterInt
    }
    return {testReview, filter, percentage, handleFilterChange}
  },
})
</script>


<style lang="scss" scooped>
.container {
  margin: 2rem auto;
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
  vertical-align: top;
  width: 50%;

  @include respond(phone) {
    display: block;
    width: 100%;
  }

  &__box {
    width: 80%;
    margin: 0 auto;
    text-align: center;

    @include respond(phone) {
    margin: 0 auto;
    }
  }  
  &__total {
    text-align: left;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  &__row {
    display: inline-block;
    width: 100% ;
    white-space: nowrap;
    border-bottom: 1px solid transparent;
    user-select: none;

    &:not(:last-child){
      margin-bottom: 0.7rem;
    }

    &:hover {
      box-shadow: 0 0.5rem 1rem rgba($color-primary, 0.5);
      background-color: $color-white;
      border-bottom: 1px solid rgba($color-primary, 0.15);
      transform: scale(1.05);
    }
    &:active {
      box-shadow: 0 0.5rem 1rem rgba($color-primary, 0.7);
      background-color: $color-white;
      border-bottom: 1px solid rgba($color-primary, 0.15);
      transform: scale(1.02);
    }
  }

  &__row-leading {
    display: inline-block;
    font-size: 1.2rem;
    width: 4.2rem;
    width: 10%;
    min-width: fit-content;
  }

  &__row-bar {
    display: inline-block;
    background-color: $color-grey-light;
    height: 0.3rem;
    width: 80%;
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
    width: 10%;
    display: inline-block;
    font-size: 1.2rem;
  }

  &__row-button {
    display: inline-block;
    width: 30%;

    @include respond(phone) {
      font-size: 1.4rem;
    }
  }
}

.reviews {
  display: inline-block;
  height: 25rem;
  width: 49%;
  text-align: center;
  border-left: 1px solid $color-grey-light;
  padding: 1rem 0;
  margin-bottom: 2rem;
  overflow-y: scroll;

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
  margin-bottom: 1.5rem;
  border-bottom: 1px solid $color-grey-light;
  @include respond(phone) {
    width: 95%;
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
    // @include respond(phone) {
    // font-size: 1.3rem;
    // }
  }

  &__img {
    height: 6rem;
  }
}
.button {
  transition: all 0.15s;
  color: $color-white;

  &--rectangle {
    min-height: 3rem;
    border-radius: .5rem;
    background-color: $color-secondary-dark;
    border: none;
    box-shadow: 0 1rem 2rem rgba($color-black, .15);

    &:hover {
      box-shadow: 0 1.5rem 3rem rgba($color-black, .2);
      transform: translateY(-0.5rem);
    }

    &:active{
      box-shadow: 0 1rem 1.5rem rgba($color-black, .15);
      transform: translateY(-0.2rem);
    }
  }
}
</style>