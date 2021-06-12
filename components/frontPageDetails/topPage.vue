<template>
    <div class="header" id="header">
        <div class="header__box col-lg-8 col-8">
            <h1 class="header__box-main"> LAPTOPNOMADCO </h1>
            <button class="header__box-button">Shop Now</button>
            <span class="header__box-button--sub">The case you have been looking for </span>
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

.header {
    height: 95vh;
    background-image: url(assets/images/Header_CafeWork.jpg);
    background-size: cover;
    background-position: bottom;

    @include respond(tab-port) {
            height: 80vh;
        }

    @include respond(tab-land) {
            height: 90vh;
        }

    &__box{
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;

        @include respond(tab-port) {
            top: 60%;
            left: 50%;
        }
    

    &-main {
        color: white;
        font-size: 80px;
        font-weight: 400;
        letter-spacing: 1px;     
        margin-bottom: 100px;
        
        
        @include respond(tab-port) {
            font-size: 40px;
            margin-left: -20px;
        }

        @include respond(tab-land) {
            font-size: 70px;
        }
    }    

    &-button{
        display: inline-block;
        text-transform: uppercase;
        text-decoration: none;
        padding: 1.5rem 4rem;
        border-radius: 100px;
        border: none;
        font-size: 40px;
        font-weight:700;

        @include respond(tab-port) {
            font-size: 20px;
            font-weight:700;
        }

        @include respond(tab-land) {
            font-size: 20px;
        }

        &--sub{
            display: block;
            color: white;
            font-size: 30px;

            @include respond(tab-port) {
            font-size: 15px;
        }

            @include respond(tab-land) {
            font-size: 20px;
        }

        }
    }

    }
    
}
  
</style>