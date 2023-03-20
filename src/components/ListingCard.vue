<template>
    <!-- entire card div -->
    <div class="
            border-4
            border-red-400
    
            container
            flex
            justify-between
            p-2
            
            mx-auto
            max-w-sm
            md:max-w-lg
            lg:max-w-2xl
        ">

        <!-- div for text -->
        <div>
            <h2>{{ listing.restaurant }}</h2>
            <h1 class="
                border-4
                border-blue-500
                w-max
                mx-auto
            ">{{ listing.food_name }}</h1>
            <h2>servings left</h2>
            <h1>{{ listing.num_servings }}</h1>
            <h2>pickup by</h2>
            <h1>{{ pickupTime }}</h1>
        </div>

        <!-- div for arrow icon and image -->
        <div class="
            w-1/2
        ">
            <h1>Arrow Icon</h1>

            <div class="
                border-4
                border-green-400
                
            ">
                <img :src="listing.img" :alt="listing.food_name" class="
                    object-cover
                "/>
            </div>
        </div>

    </div>
</template>

<script setup>
import { toRefs } from "vue";
import moment from "moment"

// define props and their type
const props = defineProps({
    'listing': Object
})

// retrieve listing prop so we can use it here
// and so reactivity cascades
const { listing } = toRefs(props)

// format date string using moment
const pickupTime = moment(listing.value.pickup_by_time).format("L");


</script>

<style lang="scss" scoped></style>