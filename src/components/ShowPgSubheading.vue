<template>
    <h2 class="text-dark-green uppercase font-semibold text-md">{{ text }}</h2>
</template>

<script setup>
const props = defineProps({
    'text': String
})
</script>