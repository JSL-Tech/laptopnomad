<template>
    <div class="about" ref="about" id="about" >
        <div class="bg-img"></div>

        <div class="row">
            <div class="about__box col-md-4 col-lg-4 d-sm-none d-md-block">
                 <div class="card__front">
                    <b-img src="~/assets/images/AddOn2.png" fluid alt="Responsive image" class=" card__image--2"></b-img>
                    <b-img src="~/assets/images/5.jpg" fluid alt="Responsive image" class=" card__image--3"></b-img>
                    </div>
                <div class="image__heading-left">
                    <h1 class="image__heading--1"> BONUS </h1>
                    <h1 class="image__heading--2"> Cable Organiser </h1>
                    </div>
            </div>
            <div class="about__box col-sm-12 col-md-4 col-lg-4">
                    <div class="card__front">
                    <b-img src="~/assets/images/Advert.png" fluid alt="Responsive image" class="card__image card__image--1"></b-img>
                    </div>
                    <div class="card__heading">
                    <h1 class="card__heading--1"> Nomad Sleeve </h1>
                    <h1 class="card__heading--2"> Laptop cases </h1>
                    </div>
                     <div class="card__details">
                        <span class="card__subheading">Ergonomic structure designed to improve posture and alleviate wrist pain. Empowering the way you work. </span>
                        <button class="card__button">Shop Sleeves</button>
                    </div>
            </div>
            <div class="about__box col-md-4 col-lg-4 d-sm-none d-md-block">
                    <div class="card__front">
                    <b-img src="~/assets/images/Main_edited.jpg" fluid alt="Responsive image" class=" card__image--4"></b-img>
                    <b-img src="~/assets/images/pouch.png" fluid alt="Responsive image" class=" card__image--5"></b-img>
                    </div>
                    <div class="image__heading-right">
                    <h1 class="image__heading--1"> BONUS </h1>
                    <h1 class="image__heading--2"> Accesory Pouch </h1>
                    </div>
            </div>
         </div>
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

.about {
    height: 95vh;
    position: relative;

    &__box{
        background-color: none;
        background-size: cover;
    }
}

.row{
    margin: 0;
    height: inherit;
    width: 100%;
}

.card {

    &__front{
        height: inherit;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        
        
        overflow: hidden;
    }

    &__image{
        margin-top:90px;
        padding-left: 20px;
        background-size: cover;
        display: block;
        z-index: 0;

        @include respond(tab-port) {
            margin-top:30px;
        }

        &--1{
            z-index: -1;
        }

        &--2{
            margin-left: 100px;
            width: 60%;
            @include respond(tab-land) {
            margin-left: 100px;
        }
        }
        &--3{
            border-radius: 50%;
            width: 60%;
            vertical-align: middle;
            margin-left: 150px;
            margin-top: 120px;

            @include respond(tab-land) {
            margin-left: 100px;
        }
        }
        &--4{
            border-radius: 50%;
            width: 60%;
            vertical-align: middle;
            margin-left: 150px;
            margin-top: 90px;

            @include respond(tab-land) {
            margin-left: 100px;
        }
        }
        &--5{
            margin-top: 90px;
            margin-left: 150px;
            width: 60%;
            @include respond(tab-land) {
            margin-left: 100px;
        }
        }
    }

    &__heading{
        position: absolute;
        top: 700px;
        right: 10px;
        width: 100%;
        text-align: center;
        display: block;

        @include respond(tab-port) {
            top: 450px;
            right: 10px;
        }

        @include respond(tab-land) {
             top: 360px;
            right: 10px;
        }

        &--1{
            font-size: 50px;
            font-weight: 600;

            @include respond(tab-port) {
            font-size: 30px;
        }

            @include respond(tab-land) {
            font-size: 40px;
        }
            
        }
        &--2{
            font-size: 30px;

            @include respond(tab-port) {
            font-size: 15px;
        }

            @include respond(tab-land) {
            font-size: 20px;
        }
        }
    }

    &__subheading{
        margin-bottom: 0px;
        display: block;

    }

    &__details{
        margin-top: 900px;
        padding: 0 20px;
        display: block;
        z-index: 100;
        font-size: 25px;
        text-align: center;

        @include respond(tab-port) {
            margin-top: 540px;
            font-size: 13px;
        }

        @include respond(tab-land) {
             margin-top: 450px;
             font-size: 15px;
        }

    }

    &__button{
        margin-top: 20px;
        background-color: white;
        text-transform: uppercase;
        text-decoration: none;
        padding: 1.5rem 4rem;
        border-radius: 10rem;
        display: inline-block;
        transition: all .2s;
        font-size: var(--default-font-size);
        font-size: 30px;
        font-weight:700;

        @include respond(tab-port) {
            font-size: 13px;
        }

        @include respond(tab-land) {
             font-size: 15px;
        }

    /* change for <button> element */
    border:none;
    }
}

.image{
    &__heading{

        &-left{
            position: absolute;
            top: 400px;
            right: 60px;
            width: 100%;
            text-align: center;
            display: block;

            @include respond(tab-land) {
            top: 200px;
            right: 0px;
        }
        }

        &-right{
            position: absolute;
            top: 1000px;
            right: 60px;
            width: 100%;
            text-align: center;
            display: block;

            @include respond(tab-land) {
            top: 560px;
            right: 0px;
        }
        }

        &--1{
            font-size: 50px;
            font-weight: 600;

            @include respond(tab-land) {
            
            font-size: 30px;
            font-weight: 600;
        }
            
        }
        &--2{
            font-size: 30px;

            @include respond(tab-land) {
            font-size: 20px;
        }
        }
    }
}

.bg-img{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: .8;
    overflow: hidden;
    background-position: right;
    background-size: cover;
    background-image: linear-gradient( to right bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, .8)) , url(assets/images/Suitcase.jpg);
    
}


  
</style>