<template>
  <body>
    <!-- <Test></Test> -->
    <Nav></Nav>
    <!-- pass props to routes -->
    <main class="p-4 md:p-8 max-w-3xl mx-auto">
      <router-view :listings="listings" :url="url" :getListings="getListings"/>
    </main>
  </body>
</template>

<script setup>
import Test from "./components/Test.vue";
import { ref, onBeforeMount } from "vue"
import Nav from './components/Nav.vue'

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
onBeforeMount(() => getListings())

</script>

<style scoped>
</style>
