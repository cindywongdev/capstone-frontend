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

                <SignupButton buttonText="Get Started" class="
                    absolute
                    top-52
                    left-1/2
                    -translate-x-1/2
                    py-3
                    px-6
                    rounded-lg
                    uppercase
                    text-white
                    bg-dark-green
                    hover:bg-light-green
                    hover:text-neutral-900
                    transition-colors
                    text-sm
                    shadow-xl
                    sm:top-72
                    sm:text-lg
                    lg:top-76
                    lg:left-49
                    xl:top-[20.5rem]
                "/>
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
    </div>
</template>

<script setup>
import LandingNav from '../components/LandingNav.vue';
import SignupButton from '../components/SignupButton.vue';
</script>

<style lang="scss" scoped>

</style>