<template>
    <form v-on:submit.prevent="handleSubmit" class="
        grid
        gap-6
        p-4
        md:p-8
        m-2
        pt-10
        my-4
        bg-light-green
        rounded-xl
    ">
        <TextInput input_type="text" attr_name="food_name" :value="listing_food_name" placeholder="name of food"/>
        
        <TextInput input_type="url" attr_name="img" placeholder="image url"/>

        <!-- ingredients input -->
        <!-- can only do none or 1 ingredient for now, not sure how to format into array yet -->
        <TextInput input_type="text" attr_name="ingredients" placeholder="ingredients"/>

        <!-- same applies to allergens -->
        <TextInput input_type="text" attr_name="allergens" placeholder="allergens"/>

        <div class="relative">
            <label for="good_for_x_days" class="text-lg">how many days is this good for?</label>
            <input type="number" id="good_for_x_days" name="good_for_x_days" v-model="good_for_x_days" min="1" max="30" class="
                w-full
                border-2
                border-dark-green
                rounded-md
                placeholder-transparent
                h-11
            "/>
        </div>

        <div class="relative">
            <label for="num_servings" class="text-lg">how many servings are you giving?</label>
            <input type="number" id="num_servings" name="num_servings" v-model="num_servings" min="1" max="999" class="
                w-full
                border-2
                border-dark-green
                rounded-md
                placeholder-transparent
                h-11
            "/>
        </div>

        <div class="relative">
            <label for="pickup_by_time" class="text-lg">when should food be picked up by?</label>
            <input type="datetime-local" id="pickup_by_time" name="pickup_by_time" v-model="pickup_by_time" min="1" max="999" class="
                w-full
                border-2
                border-dark-green
                rounded-md
                placeholder-transparent
                h-11
            "/>
        </div>

        <!-- this input should be removed later once auth is added -->
        <!-- this will autofill based on the provider profile -->
        <TextInput input_type="text" attr_name="restaurant" placeholder="name of restaurant"/>

        <input type="submit" :value="buttonLabel" class="
            bg-green-500
            mt-2
            md:mt-4
            p-2
            rounded-md"/>
    </form>

    <router-link to="/"><button class="
        bg-green-500
        p-2
        m-2
        rounded-md">Cancel</button></router-link>
</template>

<script setup>
// imports
import { useRoute, useRouter } from 'vue-router'
import { ref, toRefs } from 'vue'
import TextInput from './TextInput.vue';

// define props
const props = defineProps({
    'listings': Array,
    'url': String,
    'getListings': Function
})

// get route so we can access route.name
const route = useRoute()
// get router so we can use router.push()
const router = useRouter()
// get necessary props, pull down reactivity
const { listings, url, getListings } = toRefs(props)
// make state variables for each form field so that they can be autofilled if user is editing
const food_name = ref("")
const img = ref("")
const ingredients = ref([])
const allergens = ref([])
const good_for_x_days = ref(0)
const num_servings = ref(0)
// uhhh does ref for a datetime input need an initial value? does null work?
const pickup_by_time = ref(null)
const restaurant = ref("")
// label for submit button & submit function
let buttonLabel
let handleSubmit

// if its the edit route, setup form for editing, else setup for creating

if (route.name === "edit") {
    console.log("THIS IS THE EDIT ROUTE")
    // get listing
    const listing = listings.value.find((listing) => {return listing.id == route.params.id})

    // fill form with that listing's values
    // food_name.value = listing.food_name
    const listing_food_name = listing.food_name
    console.log(listing_food_name)
    console.log(typeof(listing_food_name))

    // img.value = listing.img
    // ingredients.value = listing.ingredients
    // allergens.value = listing.allergens
    // good_for_x_days.value = listing.good_for_x_days
    // num_servings.value = listing.num_servings
    // pickup_by_time.value = listing.pickup_by_time
    // restaurant.value = listing.restaurant

    // set label for submit button
    buttonLabel = "Update Listing"

    // define function to update
    handleSubmit = async () => {
        await fetch(url.value + route.params.id + "/", {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                food_name: food_name.value,
                img: img.value,
                ingredients: ingredients.value,
                allergens: allergens.value,
                good_for_x_days: good_for_x_days.value,
                num_servings: num_servings.value,
                pickup_by_time: pickup_by_time.value,
                restaurant: restaurant.value
            })
        })

        // run getListings function to update data on all listings page
        await getListings.value()

        // redirect to listing
        router.push({ name: "listing", params: { id: listing.id } })
    }
} else {
    console.log("CREATE ROUTE REACHED")

    // label for submit button
    buttonLabel = "Create Listing"

    // food_name.value = listing.food_name
    const listing_food_name = ""
        
        // img.value = listing.img
        // ingredients.value = listing.ingredients
        // allergens.value = listing.allergens
        // good_for_x_days.value = listing.good_for_x_days
        // num_servings.value = listing.num_servings
        // pickup_by_time.value = listing.pickup_by_time
        // restaurant.value = listing.restaurant


    // define function to create
    handleSubmit = async () => {
        // wrap ingredients and allergens in an array to fit data model
        ingredients.value = [].concat(ingredients.value)
        console.log(ingredients.value)
        allergens.value = [].concat(allergens.value)
        console.log(allergens.value)

        await fetch(url.value, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                food_name: food_name.value,
                img: img.value,
                ingredients: ingredients.value,
                allergens: allergens.value,
                good_for_x_days: good_for_x_days.value,
                num_servings: num_servings.value,
                pickup_by_time: pickup_by_time.value,
                restaurant: restaurant.value
            }) 
        })

        // update all listings
        await getListings.value()
        // redirect to listings
        router.push("/")
    }
}

</script>

<style lang="scss" scoped>

</style>