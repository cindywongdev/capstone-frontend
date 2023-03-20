<template>
    <div>
        <h1 class="text-amber-400 text-3xl font-bold">All Listings</h1>
        <section>
                <ListingCard v-for="listing of listings" :key="listing.id" :listing="listing"/>
        </section>
    </div>
</template>

<script setup>
import ListingCard from '../components/ListingCard.vue'

const props = defineProps({
    listings: Array
})
</script>

<style lang="scss" scoped>
img {
    width: 300px;
}
</style>