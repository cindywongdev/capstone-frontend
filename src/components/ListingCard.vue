<template>
    <!-- entire card div -->
    <router-link :to="{ name: 'listing', params: { id: listing.id } }" class="w-max hover:bg-neutral-100 transition-colors">
        <div class="
                container
                flex
                justify-between
                border
                border-neutral-600
                rounded-lg
                bg-white
                shadow-lg
                p-3
                mx-auto
                w-88
                h-48        
            ">

            <!-- div for text -->
            <div class="grid place-content-between">
                <div>
                    <h2 class="uppercase text-sm font-semibold text-dark-green">{{ listing.restaurant }}</h2>
                    <h1 class="text-xl font-medium">{{ listing.food_name }}</h1>
                </div>

                <div>
                    <h2 class="uppercase text-sm font-semibold text-dark-green">servings left</h2>
                    <h1 class="text-lg">{{ listing.num_servings }}</h1>
                </div>

                <div>
                    <h2 class="uppercase text-sm font-semibold text-dark-green">pickup by</h2>
                    <h1 class="text-lg">{{ pickupTime }}</h1>
                </div>
            </div>

            <!-- div for arrow icon and image -->
            <div class="
                flex
                flex-col
                items-end
                justify-between
                w-1/2
            ">
                <div class="bg-light-green rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
                </div>

                <div>
                    <img :src="listing.img" :alt="listing.food_name" class="
                        object-cover
                        w-30
                        h-30
                        rounded-md
                    " />
                </div>
            </div>

        </div>
    </router-link>
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