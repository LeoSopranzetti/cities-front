<template>
  <div class="container">
    <Nav/>
    <div class="mb-3 mt-3">
      <router-view/>
    </div>
    <Footer/>
  </div>
  
</template>

<script>
import Footer from '@/components/Footer'
import Nav from '@/components/Nav.vue'

    export default {
        components: {
          Footer, Nav
        }
    }
</script>
<style>

</style>
