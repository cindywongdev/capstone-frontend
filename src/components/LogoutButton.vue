<template>
    <div>
        <button @click="logout">Log Out</button>
    </div>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue'

export default {
    setup(){
        const { logout } = useAuth0()

        return {
            logout: () => {
                logout({ logoutParams: { returnTo: import.meta.env.VITE_AUTH0_CALLBACK_URL } })
            }
        }
    }
}
</script>