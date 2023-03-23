<template>
    <h2 class="text-dark-green uppercase font-semibold text-sm">{{ text }}</h2>
</template>

<script setup>
const props = defineProps({
    'text': String
})
</script>