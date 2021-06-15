<template>
    <div class="why" ref="why" id="why" >
            <div class="card card--1">
                <b-img src="~/assets/images/transformbackless.png" fluid alt="Responsive image" class="card__image card__image--large"></b-img>
                <h1 class="card__heading"> DESIGN </h1>
                <h2 class="card__subheading"> From the sleeve to the stand to the wrist support our comprehensive design aims to meet all your needs </h2>
            </div>
            <div class="card card--2">
                <b-img src="~/assets/images/timebackless.png" fluid alt="Responsive image" class="card__image card__image--large"></b-img>
                <h1 class="card__heading"> SPEED </h1>
                <h2 class="card__subheading"> Get your product within 2 - 4 days anywhere worldwide</h2>
            </div>
            <div class="card card--3">
                <b-img src="~/assets/images/posturebackless.png" fluid alt="Responsive image" class="card__image card__image--large"></b-img>
                <h1 class="card__heading"> HEALTH </h1>
                <h2 class="card__subheading"> Better posture means less pain </h2>           
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
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent ({
    setup () {
        
    }, 
})
</script>

<style lang="scss" scoped>
.why {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: 1fr ;
    gap: 1rem; 
    grid-template-areas: 
        "card--3 card--1 card--2";
    place-items: center;
    background-color: none;
    background-position: right;
    background-size: cover;
    background-image: none;
    padding-bottom: 3rem;


    @include respond(phone) {
        // grid-template-columns: 1fr;
        // grid-template-rows: auto auto auto;
        // gap: 1;
        // grid-template-areas: 
        //     "card--1"
        //     "card--2"
        //     "card--3";
        // place-items: stretch;
        
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
    transition: all .5s;
    transform: scale(1);
    filter: none;

    @include respond(phone) {
        justify-content: flex-end;

        :hover &__image{
        transform: scale(.7);
        filter: blur(.3rem) brightness(80%);
    }
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

    &__image {
        margin: 2rem 0;

        &--small {
            width: 30%;
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
            display: none;
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
    }

    &__button {
        margin-top: 2rem;
        background-color: $color-dark;
        color: white;
        text-transform: uppercase;
        padding: 1.5rem 4rem;
        border-radius: 10rem;
        display: inline-block;
        font-size: 3rem;
        font-weight: 600;
        border: none;
        transition: all .1s;

        &:hover, &:active {
            transform: translateY(-.2rem);
            filter: drop-shadow(0 .2rem 0.4rem rgba(0, 0, 0, 0.5))
        }
        
        @include respond(tab-land) {
            font-size: 2.4rem;
            padding: 1.3rem 3.6rem;
        }

        @include respond(tab-port) {
            font-size: 2rem;
        }
    }
}
  
</style>