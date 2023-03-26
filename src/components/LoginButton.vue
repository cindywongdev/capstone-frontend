<template>
    <div>
        <h2>User Profile</h2>
        <button @click="login">Log In</button>
        <pre v-if="isAuthenticated">{{ user.name }}</pre>
    </div>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue'

export default {
    setup(){
        const { loginWithRedirect, user, isAuthenticated } = useAuth0()

        return {
            login: () => {
                loginWithRedirect()
                console.log(window.location.origin)
            },
            user,
            isAuthenticated
        }
    }
}
</script>