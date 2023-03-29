<template>
    <div>
        <button @click="login">Log In</button>
        <pre v-if="isAuthenticated">{{ user.name }}</pre>
    </div>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue'

export default {
    setup(){
        const { loginWithRedirect, user, isAuthenticated } = useAuth0()
        console.log("Login Auth:", isAuthenticated)

        return {
            login: () => {
                loginWithRedirect({
                    appState: {
                        target: "/listings"
                    }
                })
                console.log(window.location.origin)
            },
            user,
            isAuthenticated
        }
    }
}
</script>