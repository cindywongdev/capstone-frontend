<template>
    <div>
        <h1>All Listings</h1>
        <ul>
            <li v-for="listing of listings" :key="listing.id">
                <h2>{{ listing.food_name }}</h2>
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

</style>