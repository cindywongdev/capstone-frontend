<template>
    <nav class="
            border
            flex
            bg-white
            fixed
            top-0
            left-0
            w-full
            z-50
            h-24
            lg:h-32
            ">
        <div class="
            container
            mx-auto
            flex
            justify-between
            items-center
            px-3
        ">

            <Logo class="w-10 h-10 lg:w-12"></Logo>
            <h1 class="mr-auto text-3xl text-dark-green">Leftover</h1>

            <!-- hamburger menu button -->
            <button id="menu" @click="toggleMenu" class="
                lg:hidden
                m-4
                hover:text-neutral-600
                transition-colors
            ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2b4141"
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
                bg-white
                rounded-md
                shadow-xl
                text-center
                text-lg
                p-6
                h-fit
                items-center
                lg:flex
                lg:flex-row
                lg:static
                lg:shadow-none
                lg:justify-between
                lg:w-7/12
                lg:h-32
            " v-bind:class="{ 'hidden': isActive }">
                <NavLink path="/about" text="About" @click="closeMenu"></NavLink>
                <NavLink path="/team" text="Our Team" @click="closeMenu"></NavLink>
                <NavLink path="/contact" text="Contact" @click="closeMenu"></NavLink>

                <SignupButton/>
                <LoginButton/>
            </div>
        </div>
    </nav>
</template>

<script>
import NavLink from './NavLink.vue'
import Logo from './Logo.vue'
import LoginButton from './LoginButton.vue'
import SignupButton from './SignupButton.vue'

export default {
    name: "Nav",
    components: {
        NavLink,
        Logo,
        LoginButton,
        SignupButton
    },
    data: function () {
        return {
            isActive: true,
        }
    },
    methods: {
        toggleMenu: function () {
            this.isActive = !this.isActive
        },
        closeMenu: function () {
            this.isActive = true
        }
    }
}

</script>

<style lang="scss" scoped></style>