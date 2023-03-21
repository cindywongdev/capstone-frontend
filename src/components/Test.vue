<template>
    <div>
        <h1 @click="toggle" :class="{ 'bg-red-500': isActive }">Hello World</h1>
    </div>
</template>

<script>
export default {
    name: "Test",
    data: function(){
        return {
            isActive: false
        }
    },
    methods: {
        toggle: function(){
            this.isActive = !this.isActive
        }
    }
}

</script>

<style lang="scss" scoped>

</style>