<template>
    <button @click="signup">
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