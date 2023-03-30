<template>
    <div>
        <button @click="logout">Log Out</button>
    </div>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue'

// import.meta.env.VITE_AUTH0_CALLBACK_LOGOUT_URL

export default {
    setup(){
        const { logout } = useAuth0()

        return {
            logout: () => {
                logout({ logoutParams: { returnTo:  window.location.origin } })
            }
        }
    }
}
</script>

