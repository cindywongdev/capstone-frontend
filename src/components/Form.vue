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
        <!-- <TextInput input_type="text" attr_name="food_name" :value="listing_food_name" placeholder="name of food"/> -->
        
        <!-- <TextInput input_type="url" attr_name="img" placeholder="image url"/> -->

        <!-- ingredients input -->
        <!-- can only do none or 1 ingredient for now, not sure how to format into array yet -->
        <!-- <TextInput input_type="text" attr_name="ingredients" placeholder="ingredients"/> -->

        <!-- same applies to allergens -->
        <!-- <TextInput input_type="text" attr_name="allergens" placeholder="allergens"/> -->
        <div class="relative mt-3">
            <input type="text" id="food_name" name="food_name" placeholder="name of food" v-model="food_name" class="textInputStyle peer"/>
            <label for="food_name" class="
                inputLabelStyle
                transition-all
                peer-placeholder-shown:left-4
                peer-placeholder-shown:top-1/2
                peer-placeholder-shown:text-neutral-900
                peer-focus:-top-4
                peer-focus:left-0
                ">name of food</label>
        </div>

        <div class="relative mt-3">
            <input type="text" id="img" name="img" placeholder="image url" v-model="img" class="textInputStyle peer"/>
            <label for="img" class="
                inputLabelStyle
                transition-all
                peer-placeholder-shown:left-4
                peer-placeholder-shown:top-1/2
                peer-placeholder-shown:text-neutral-900
                peer-focus:-top-4
                peer-focus:left-0
                ">image url</label>
        </div>

        <div class="relative mt-3">
            <input type="text" id="ingredients" name="ingredients" placeholder="ingredients" v-model="ingredients" class="textInputStyle peer"/>
            <label for="ingredients" class="
                inputLabelStyle
                transition-all
                peer-placeholder-shown:left-4
                peer-placeholder-shown:top-1/2
                peer-placeholder-shown:text-neutral-900
                peer-focus:-top-4
                peer-focus:left-0
                ">ingredients</label>
        </div>

        <div class="relative mt-3">
            <input type="text" id="allergens" name="allergens" placeholder="allergens" v-model="allergens" class="textInputStyle peer"/>
            <label for="allergens" class="
                inputLabelStyle
                transition-all
                peer-placeholder-shown:left-4
                peer-placeholder-shown:top-1/2
                peer-placeholder-shown:text-neutral-900
                peer-focus:-top-4
                peer-focus:left-0
                ">allergens</label>
        </div>

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
        <!-- <TextInput input_type="text" attr_name="restaurant" placeholder="name of restaurant"/> -->

        <div class="relative mt-3">
            <input type="text" id="restaurant" name="restaurant" placeholder="name of restaurant" v-model="restaurant" class="textInputStyle peer"/>
            <label for="restaurant" class="
                inputLabelStyle
                transition-all
                peer-placeholder-shown:left-4
                peer-placeholder-shown:top-1/2
                peer-placeholder-shown:text-neutral-900
                peer-focus:-top-4
                peer-focus:left-0
                ">name of restaurant</label>
        </div>

        <input type="submit" :value="buttonLabel" class="
            bg-green-500
            mt-2
            md:mt-4
            p-2
            rounded-md
            hover:cursor-pointer
            "/>
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
// make state variables for each form field so that they can be referenced and autofilled if user is editing
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
    console.log(listing.food_name)

    // fill form with that listing's values
    // food_name is not defined (the input value cant be accessed for some reason)
    food_name.value = listing.food_name
    img.value = listing.img
    ingredients.value = listing.ingredients
    allergens.value = listing.allergens
    good_for_x_days.value = listing.good_for_x_days
    num_servings.value = listing.num_servings
    pickup_by_time.value = listing.pickup_by_time
    restaurant.value = listing.restaurant

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

    // define function to create
    handleSubmit = async () => {
        // wrap ingredients and allergens in an array to fit data model
        // ingredients.value = [].concat(ingredients.value)
        const ingredientsWrapped = [].concat(ingredients.value)
        console.log(ingredientsWrapped)
        const allergensWrapped = [].concat(allergens.value)
        console.log(allergensWrapped)

        await fetch(url.value, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                food_name: food_name.value,
                img: img.value,
                ingredients: ingredientsWrapped,
                allergens: allergensWrapped,
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
.textInputStyle {
    width: 100%;
    border: 2px solid #2b4141;
    border-radius: 0.375rem;
    // peer
    // w-full
    // border-2
    // border-dark-green
    // rounded-md
    // placeholder-transparent
    // h-11
}

.textInputStyle::placeholder {
    color: transparent;
}

.inputLabelStyle {
    color: rgb(64 64 64);
    font-size: 1.125rem;
    position: absolute;
    top: -1rem;
    left: 0px;
    transform: translate(0, -50%);
    // text-neutral-700
    // text-lg
    // absolute
    // -top-4
    // left-0
    // -translate-y-1/2
    // transition-all
    // peer-placeholder-shown:left-4
    // peer-placeholder-shown:top-1/2
    // peer-placeholder-shown:text-neutral-900
    // peer-focus:-top-4
    // peer-focus:left-0
}
</style>