<template>
    <div>
        <h1>Hi there, {{ user.name }}.</h1>
        <p>This is your account.</p>
    </div>
</template>

<script setup>
import { useAuth0 } from "@auth0/auth0-vue"

const { user } = useAuth0()
</script>

<style lang="scss" scoped>

</style>