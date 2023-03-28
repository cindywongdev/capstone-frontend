<template>
    <div class="container mx-auto max-w-3xl p-4 md:p-8">
        <h1 class="text-2xl mx-2">Create Listing</h1>
        <Form :listings="listings" :url="url" :getListings="getListings"/>
    </div>
</template>

<script setup>
import Form from '../components/Form.vue';

const props = defineProps({
    'listings': Array,
    'url': String,
    'getListings': Function
})
</script>

<style lang="scss" scoped>

</style>