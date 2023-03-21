<template>
    <nav class="bg-light-green">
        <div class="
            container
            mx-auto
            flex
            justify-between
            items-center
            px-3
        ">

        <Logo></Logo>

        <!-- hamburger menu button -->
        <button id="menu" @click="toggleMenu" class="
            lg:hidden
            m-4
            hover:text-neutral-600
            transition-colors
        ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-12 h-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>

        <div role="menubar" class="
            flex
            flex-col
            gap-4
            absolute
            z-40
            right-0
            left-0
            top-20
            bg-light-green
            rounded-md
            shadow-xl
            text-center
            text-lg
            p-6
            items-center
            lg:flex
            lg:flex-row
            lg:static
            lg:shadow-none
            lg:justify-between
            lg:w-7/12
        " v-bind:class="{ 'hidden': isActive }">
            <NavLink path="/" text="Home"></NavLink>
            <NavLink path="/create" text="Create New Listing"></NavLink>
            <NavLink path="/" text="View My Listings"></NavLink>
            <NavLink path="/" text="My Account"></NavLink>
        </div>

        </div>
    </nav>
</template>

<script>
import NavLink from './NavLink.vue'
import Logo from './Logo.vue'

export default {
    name: "Nav",
    components: {
        NavLink,
        Logo
    },
    data: function(){
        return {
            isActive: true,
        }
    },
    methods: {
        toggleMenu: function(){
            this.isActive = !this.isActive
        }
    }
}

</script>

<style lang="scss" scoped>

</style>