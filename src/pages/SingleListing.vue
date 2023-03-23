<template>
    <div class="
                container 
                relative
                flex
                flex-col
                items-center
                justify-center
                gap-4
                ">

        <!-- top div for text and options button-->
        <div class="relative flex justify-between w-full pl-2 pt-1">
            <div>
                <ShowPgSubheading :text="listing.restaurant"/>
                <h1 class="text-3xl mb-2">{{ listing.food_name }}</h1>
                <h2>{{ listing.listing_date }}</h2>
            </div>

            <div>
                <button class="absolute right-2 top-2" @click="toggleOptions">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                    </svg>
                </button>

                <div role="menubar" class="
                    absolute
                    flex
                    flex-col
                    gap-2
                    right-0
                    top-14
                    bg-white
                    p-2
                    border-2
                    border-neutral-400
                    rounded-lg
                " v-bind:class="{ 'hidden': isActive }">
                    <router-link :to="{ name: 'edit', params: { id: listing.id } }" class="
                        flex
                        justify-between
                        items-center
                        p-2
                        gap-2
                        rounded-md
                        hover:bg-neutral-200
                        ">
                        <button class="text-neutral-600 font-medium rounded-md">Edit Listing</button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="rgb(82 82 82)" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                    </router-link>

                    <button v-on:click="deletePost" class="
                        text-red-400
                        font-medium
                        p-2
                        rounded-md
                        flex
                        gap-2
                        hover:bg-neutral-200
                        ">Delete Listing
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>

                    </button>
                </div>
            </div>
        </div>

        <!-- image -->
        <img :src="listing.img" :alt="listing.food_name" class="w-full px-2 h-80 object-cover"/>

        <!-- second div for rest of text -->
        <div class="w-full pl-2 grid gap-3">
            <div>
                <ShowPgSubheading text="ingredients"/>
                <h2>{{ listing.ingredients }}</h2>
            </div>
            <div>
                <ShowPgSubheading text="allergens"/>
                <h2>{{ listing.allergens }}</h2>
            </div>
            <div>
                <ShowPgSubheading text="still good for"/>
                <h2>{{ listing.good_for_x_days }} more days</h2>
            </div>
            <div>
                <ShowPgSubheading text="servings left"/>
                <h2>{{ listing.num_servings }}</h2>
            </div>
            <div>
                <ShowPgSubheading text="pickup by"/>
                <h2>{{ listing.pickup_by_time }}</h2>
            </div>
        </div>
    </div>

    <footer>
        <router-link to="/"><button class="bg-green-500 p-2 rounded-md">Back to Listings</button></router-link>
    </footer>

</template>

<script>
import { useRoute, useRouter } from 'vue-router' // get useroute hook to access route params
import { toRefs } from 'vue'; // get toRefs hook to maintain props reactivity
import ShowPgSubheading from '../components/ShowPgSubheading.vue';

export default {
    name: "SingleListing",
    // define props,
    components: {
        ShowPgSubheading
    },
    props: {
        'listings': Array,
        'url': String,
        'getListings': Function
    },
    setup(props) {
        // get router to use router.push
        const router = useRouter()
        // get route obj to access params
        const route = useRoute()
        // retrieve needed props
        const { listings, url, getListings } = toRefs(props)
        // grab target listing
        const listing = listings.value.find((listing) => listing.id == route.params.id)
        console.log(listings.value)
        return {
            router,
            route,
            listing,
            url,
            getListings
        }
    },
    // define data (isActive variable)
    data: function(){
        return {
            isActive: true
        }
    },
    // function to toggle options
    methods: {
        toggleOptions: function(){
            this.isActive = !this.isActive
        },
        deletePost: async function () {
            await fetch(url.value + listing.id + "/", {
                method: "delete",
            })

            // update all listings page
            await getListings.value()
            // redirect
            router.push("/")
        }
    }
}

</script>

<style lang="scss" scoped></style>