<template>
    <button @click="signup" class="
        rounded-lg
        py-2
        px-4
        text-white
        bg-dark-green
        hover:bg-[#213131]
        transition-colors
        text-base
        shadow-xl
    ">
        {{ buttonText }}
    </button>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue'

export default {
    props: {
        'buttonText': String
    },
    setup(){
        const { loginWithRedirect} = useAuth0()

        return {
            signup: () => {
                loginWithRedirect({ action: 'signup' })
                console.log(window.location.origin)
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>