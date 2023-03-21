<template>
    <div>
        <div class="
            flex
            justify-between
            items-center
            px-3
            ">
            <h1 id="listings" class="text-dark-green text-xl uppercase">All Listings</h1>

            <router-link to="/create" class="
                bg-light-green
                rounded-full
                p-1
            ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </router-link>
        </div>

        <section class="
            container
            flex
            flex-wrap
            justify-center
            gap-6
            mx-auto
            mt-4
            max-w-3xl
            "
            aria-labelledby="listings">
            <ListingCard v-for="listing of listings" :key="listing.id" :listing="listing" />
        </section>
    </div>
</template>

<script setup>
import ListingCard from '../components/ListingCard.vue'

const props = defineProps({
    listings: Array
})
</script>

<style lang="scss" scoped></style>