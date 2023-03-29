<template>
    <div class="relative">
        <LandingNav/>
        <section aria-label="image header" class="relative">
            <img src="../assets/beef-noodle-soup.jpg" alt="a bowl of beef noodle soup" class="
                w-full
                max-h-screen
                object-cover
            "/>

            <div class="container flex-col gap-12">
                <h1 class="
                    absolute
                    top-12
                    left-1/2
                    -translate-x-1/2
                    text-white 
                    text-5xl 
                    text-center 
                    w-fit
                    whitespace-nowrap
                    sm:text-6xl
                    sm:top-20
                    lg:top-24
                    lg:left-72
                    lg:text-left
                    xl:top-32
                    ">From Excess<br/>to Access</h1>

                <h2 class="
                    absolute
                    top-40
                    left-1/2
                    -translate-x-1/2
                    text-white 
                    text-2xl 
                    text-center 
                    w-fit
                    whitespace-nowrap
                    sm:top-56
                    sm:text-3xl
                    lg:left-76
                    xl:top-68
                    ">Helping feed those in need.</h2>

                <a  href="/listings" class="
                    absolute
                    top-52
                    left-1/2
                    -translate-x-1/2
                    py-3
                    px-6
                    uppercase
                    rounded-lg
                    text-white
                    bg-dark-green
                    hover:bg-[#213131]
                    transition-colors
                    text-base
                    shadow-xl
                    sm:top-72
                    sm:text-lg
                    lg:top-76
                    lg:left-49
                    xl:top-[20.5rem]
                "><button>Get Started</button></a>

                <!-- <SignupButton buttonText="Get Started" class="
                    absolute
                    top-52
                    left-1/2
                    -translate-x-1/2
                    py-3
                    px-6
                    uppercase
                    sm:top-72
                    sm:text-lg
                    lg:top-76
                    lg:left-49
                    xl:top-[20.5rem]
                "/> -->

            </div>

            <h3 class="
                absolute
                bottom-0
                right-0
                text-xs
                text-neutral-800
            ">Photo by <a href="https://unsplash.com/de/@plhnk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Paul Hanaoka</a> on <a href="https://unsplash.com/photos/_q4AQcGX28A?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </h3>
        </section>

        <section aria-label="our qualities" class="
            grid
            gap-12
            lg:gap-16
            place-items-center
            text-center 
            bg-light-green 
            p-8
            pb-12
            md:p-12
            lg:pb-20
            text-dark-green
        ">
            <h1 class="
                font-semibold 
                text-lg
                md:text-2xl
                ">Why Leftover?</h1>

            <div class="
                grid 
                gap-2
                place-items-center
                max-w-xs
                lg:max-w-lg
                ">
                <div>
                    <img src="../assets/hand-heart-green.png" alt="icon of hand holding a heart" class="
                        w-20
                        lg:w-24
                        "/>
                </div>
                <h1 class="
                    font-semibold
                    text-3xl
                    lg:text-4xl
                ">Find Local Donations</h1>
                <p class="
                    text-lg
                    ">Locate nearby food donations and arrange pickup for yourself or <br class="lg:hidden"/>your organization.</p>
            </div>

            <div class="
                grid 
                gap-2
                place-items-center
                max-w-xs
                lg:max-w-md
                ">
                <div>
                    <img src="../assets/hand-heart-green.png" alt="icon of hand holding a heart" class="
                        w-20
                        lg:w-24
                        "/>
                </div>
                <h1 class="
                    font-semibold
                    text-3xl
                    lg:text-4xl
                ">Donate Surplus Food</h1>
                <p class="
                    text-lg
                    ">List excess available food on the app, and nearby groups or individuals <br class="lg:hidden"/>can arrange pickup.</p>
            </div>

            <div class="
                grid 
                gap-2
                place-items-center
                max-w-xs
                lg:max-w-md
                ">
                <div>
                    <img src="../assets/hand-heart-green.png" alt="icon of hand holding a heart" class="
                        w-20
                        lg:w-24
                        "/>
                </div>
                <h1 class="
                    font-semibold
                    text-3xl
                    lg:text-4xl
                ">Reduce Food Waste</h1>
                <p class="
                    text-lg
                    ">Help reduce food waste and minimize the environmental impact <br class="lg:hidden"/>of discarded food.</p>
            </div>
            
            <SignupButton buttonText="Sign Up" class="
            py-3
            px-9
            uppercase
            sm:text-lg
            "/>
        </section>
    </div>
</template>

<script setup>
import LandingNav from '../components/LandingNav.vue';
import SignupButton from '../components/SignupButton.vue';
</script>

<style lang="scss" scoped>

</style>