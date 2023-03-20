<template>
    <div>
        <h1 class="text-amber-400 text-3xl font-bold">All Listings</h1>
        <ul>
            <li v-for="listing of listings" :key="listing.id">
                <h2>{{ listing.food_name }}</h2>
                <img :src="listing.img" alt="">
            </li>
        </ul>
    </div>
</template>

<script setup>
    const props = defineProps({
        listings: Array
    })
</script>

<style lang="scss" scoped>
    img {
        width: 300px;
    }
</style>