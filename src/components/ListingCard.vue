<template>
    <div class="
        border-4
        border-red-400
        container
        mx-auto
    ">
        <h1 class="
            border-4
            border-blue-500
            w-max
            mx-auto
        ">{{ listing.food_name }}</h1>


    </div>
</template>

<script setup>
const props = defineProps({
    listing: Object
})
</script>

<style lang="scss" scoped>

</style>