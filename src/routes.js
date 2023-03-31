/////////////////////////
// Components Imports
/////////////////////////
// no need, dynamically import them below
import { authGuard } from "@auth0/auth0-vue"

/////////////////////////
// Array of Routes
/////////////////////////
export default [
    // ORDER MATTERS -- name attrib must go BEFORE component attrib
    // {
    //     path: "/callback",
    //     name: "callback",
    //     component: () => import('./pages/CallbackPage.vue')
    // },
    { 
        path: "/", 
        component: () => import('./pages/LandingPage.vue')
    },
    {
        path: "/signup",
        name: "signup",
        component: () => import('./pages/SignupPage.vue')
    },
    { 
        path: "/listings", 
        component: () => import('./pages/AllListings.vue'), 
        props: true,
        // beforeEnter: authGuard,
    },
    { 
        path: "/listing/:id", 
        name:'listing', 
        component: () => import('./pages/SingleListing.vue'), 
        props: true,
        // beforeEnter(to, from){
        //     console.log("all listings", listings)
            
        //     const exists = listings.then(find(
        //         listing => listing.id == to.params.id
        //     ))

        //     console.log("found listing", exists)

        //     console.log("beforeEnter is running")

        //     if (!exists) return {
        //         name: 'NotFound',
        //         // preserve current path and remove the first char to avoid the target URL starting with `//`
        //         params: { pathMatch: to.path.split('/').slice(1) },
        //         // preserve existing query and hash if any
        //         query: to.query,
        //         hash: to.hash,
        //     }
        // }
    },
    {
        path: "/account",
        name: "account",
        component: () => import('./pages/Account.vue')
    },
    { 
        path: "/create", 
        component: () => import('./pages/NewPage.vue'), 
        props: true 
    },
    { 
        path: "/update/:id", 
        name: "edit", 
        component: () => import('./pages/EditPage.vue'), 
        props: true 
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component:  () => import('./pages/NotFound.vue')
    }
]