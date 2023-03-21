/////////////////////////
// Components Imports
/////////////////////////
import AllListings from './pages/AllListings.vue'
import SingleListing from './pages/SingleListing.vue'
import NewPage from './pages/NewPage.vue'
import EditPage from './pages/EditPage.vue'

/////////////////////////
// Array of Routes
/////////////////////////
export default [
    // ORDER MATTERS -- name attrib must go BEFORE component attrib
    { path: "/", component: AllListings, props: true },
    { path: "/listing/:id", name:'listing', component: SingleListing, props: true },
    { path: "/create", component: NewPage, props: true },
    { path: "/update/:id", name: "edit", component: EditPage, props: true }
]