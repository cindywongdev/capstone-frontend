<template>
  <div>
    <!-- pass props to routes -->
    <router-view :listings="listings" :url="url" :getListings="getListings"/>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue"

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
