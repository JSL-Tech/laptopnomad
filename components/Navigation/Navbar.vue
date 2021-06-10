<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to='/frontPage/1rBHJM0XvnEFeYDxso9t'>first product</b-nav-item>
        <b-nav-item to='/frontPage/rXvql9MfAnrW8OPu1fEn'>second product</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>

<script>
  
export default {
  components:{
  },
}
</script>

<style>

</style>