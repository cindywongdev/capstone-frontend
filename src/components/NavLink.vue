<template>
    <a :href="path" class="
        focus:outline-none
        focus-visible:ring-2
        ring-neutral-900
        rounded-sm
        ring-offset-4
        ring-offset-white
    ">{{ text }}</a>
</template>

<script setup>
const props = defineProps({
    path: String,
    text: String
})

</script>

<style lang="scss" scoped>

</style>