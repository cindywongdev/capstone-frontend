<template>
    <div>
        <h1>New Form Page</h1>
        <h1>Create Listing</h1>
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