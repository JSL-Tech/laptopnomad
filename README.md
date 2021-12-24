<!-- ## base

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org). -->


<!-- ## Contributors -->
<!-- <a href="https://github.com/Lebarnon">
  <img src="https://avatars.githubusercontent.com/u/53988015?size=50">
</a>

<a href="https://github.com/JosephJL">
  <img src="https://avatars.githubusercontent.com/u/77097099?size=50">
</a>

<a href="https://github.com/songtian17">
  <img src="https://avatars.githubusercontent.com/u/44151290?size=50">
</a> -->

# LaptopNomadCo Ecommerce Website

Eccommerce website developed on Nuxt.js Framework

## Links

- 💻Live Website (DO NOT ACTUALLY BUY IT!): https://laptopnomad.co/
- 📘 Nuxt Documentation: [https://nuxtjs.org](https://nuxtjs.org)


## Features

- Static Ecommerce Site
- Cloud hosted by Firebase
- Built using Nuxt Framework
- Full Cart Functionality
- Integrated with Stripe Checkout
<br>

# Getting started

Install the code from the repo and download dependencies

```sh
$ npm install 
```

## Environment Setup 
Add .env file to project root

```sh
API_KEY = <FIREBASE_API_KEY>
AUTH_DOMAIN = <FIREBASE_AUTH_DOMAIN>
PROJECT_ID = <FIREBASE_PROJECT_ID>
STORAGE_BUCKET = <FIREBASE_STORAGE_BUCKET>
MESSAGING_SENDER_ID = <FIREBASE_MESSAGING_SENDER_ID>
APP_ID:1 = <FIREBASE_APP_ID:1>
MEASUREMENT_ID = <FIREBASE_MEASUREMENT_ID>
STRIPE_PK = <STRIPE_PK>
```

## Firebase Setup

[Firebase | Documentation](https://firebase.google.com/docs)

## Firebase Functions Setup

https://github.com/JSL-Tech/laptopnomad-server

## Stripe Setup

[Stripe | Documentation](https://stripe.com/docs)

##  Run development server
```sh
$ npm run dev
```

## Production deployment

To deploy, instead of running nuxt, you probably want to build ahead of time. Therefore, building and starting are separate commands:

```bash
nuxt build
nuxt start
```

Learn more at https://nuxtjs.org/guide/commands#production-deployment
