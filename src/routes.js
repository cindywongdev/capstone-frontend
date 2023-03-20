/////////////////////////
// Components Imports
/////////////////////////
import AllListings from './pages/AllListings.vue'
import SingleListing from './pages/SingleListing.vue'
import Form from './pages/Form.vue'

/////////////////////////
// Array of Routes
/////////////////////////
export default [
    // ORDER MATTERS -- name attrib must go BEFORE component attrib
    { path: "/", component: AllListings, props: true },
    { path: "/listing/:id", component: SingleListing },
    { path: "/create", component: Form },
    { path: "/update/:id", component: Form }
]