<template>
  <body>
    <!-- <Test></Test> -->
    <header>
      <Nav></Nav>
    </header>
    <!-- pass props to routes -->
    <main class="relative md:p-8 mx-auto mt-24 lg:mt-28">
      <router-view :listings="listings" :url="url" :getListings="getListings"/>
    </main>
    <footer>
      <Footer/>
    </footer>
  </body>
</template>

<script setup>
import Test from "./components/Test.vue";
import { ref, onBeforeMount, onMounted } from "vue"
import Nav from './components/Nav.vue'
import Footer from "./components/Footer.vue";

// import base url using import.meta.env obj
const { VITE_API_BASE_URL } = import.meta.env
const url = VITE_API_BASE_URL

// create state for listings
const listings = ref([])

// create method to get listings
const getListings = async function(){
  const response = await fetch(url)
  const data = await response.json()
  listings.value = await data
}

// call the method before the component mounts
onBeforeMount(() => {
  getListings()

  // window.scroll({
  //   top: 0, 
  //   left: 0, 
  //   behavior: 'smooth' 
  //   });
})

// how to scroll back to top of page automatically?

// onMounted(() => {
  
// })

</script>

<style scoped>
* {
    font-family: 'Quicksand';
    font-weight: 500;
}
</style>
