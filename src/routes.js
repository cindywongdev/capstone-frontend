/////////////////////////
// Components Imports
/////////////////////////
// no need, dynamically import them below
import isAuthenticated from '../src/components/LoginButton.vue'
console.log("imported auth", isAuthenticated)

// import base url using import.meta.env obj
const { VITE_API_BASE_URL } = import.meta.env
const url = VITE_API_BASE_URL


// create method to get listings
const getListings = async function(){
    const response = await fetch(url)
    const data = await response.json()
    const listings = await data
    console.log("listings from routes.js", listings)
    return listings
}

const listings = getListings()

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
        path: "/listings", 
        component: () => import('./pages/AllListings.vue'), 
        props: true,
        beforeEnter: (to, from) => {
            
        }
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