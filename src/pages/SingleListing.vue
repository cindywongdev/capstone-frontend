<template>
    <div class="
        container 
        flex
        flex-col
        items-center
        justify-center
        mx-auto">

        <router-link to="/"><button class="bg-green-500 p-2 rounded-md">Back to Listings</button></router-link>

        <h1>{{ listing.food_name }}</h1>
        <h2>{{ listing.listing_date }}</h2>
        <img :src="listing.img" :alt="listing.food_name"/>
        <h2>{{ listing.ingredients }}</h2>
        <h2>{{ listing.allergens }}</h2>
        <h2>{{ listing.good_for_x_days }}</h2>
        <h2>{{ listing.num_servings }}</h2>
        <h2>{{ listing.pickup_by_time }}</h2>
        <h2>{{ listing.restaurant }}</h2>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router' // get useroute hook to access route params
import { toRefs } from 'vue'; // get toRefs hook to maintain props reactivity

// define props
const props = defineProps({
    'listings': Array,
    'url': String,
    'getListings': Function
})

// get router to use router.push
const router = useRouter()
// get route obj to access params
const route = useRoute()
// retrieve needed props
const { listings, url, getListings } = toRefs(props)
// grab target listing
const listing = listings.value.find((listing) => listing.id == route.params.id)
console.log(listings.value)

</script>

<style lang="scss" scoped>

</style>