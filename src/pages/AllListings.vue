<template>
    <div>
        <h1 id="listings" class="text-amber-400 text-3xl font-bold">All Listings</h1>
        <section class="
            container
            grid
            gap-4
            mx-auto
            mt-4
            px-4"
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