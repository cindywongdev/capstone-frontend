<template>
  <body>
    <!-- <Test></Test> -->
    <header>
      <Nav></Nav>
    </header>
    <!-- pass props to routes -->
    <main class="relative mx-auto mt-24 lg:mt-28">
      <router-view :listings="listings" :url="url" :getListings="getListings"/>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
  </body>
</template>

<script setup>
import Test from "./components/Test.vue";
import { ref, onBeforeMount, onMounted } from "vue"
import Nav from './components/Nav.vue'
import Footer from "./components/Footer.vue";

// import base url using import.meta.env obj
const { VITE_API_LISTING_BASE_URL } = import.meta.env
const url = VITE_API_LISTING_BASE_URL

// create state for listings
const listings = ref([])

// create method to get listings
const getListings = async function(){
  const response = await fetch(url)
  const data = await response.json()
  listings.value = await data
}

// call the method before the component mounts
onBeforeMount(() => {getListings()})

</script>

<style scoped>
* {
    font-family: 'Quicksand';
    font-weight: 500;
}
</style>
