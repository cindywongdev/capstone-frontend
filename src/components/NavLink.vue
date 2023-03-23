<template>
    <router-link :to="path" class="
        focus:outline-none
        focus-visible:ring-2
        ring-neutral-900
        rounded-sm
        ring-offset-4
        ring-offset-white
        hover:opacity-70
        transition-opacity
    ">{{ text }}</router-link>
</template>

<script setup>
const props = defineProps({
    path: String,
    text: String
})

</script>

<style lang="scss" scoped>

</style>