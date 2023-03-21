<template>
    <div>
        <h1>Edit Form Page</h1>
        <h1>Create a New Listing</h1>
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