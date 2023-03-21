<template>
    <form v-on:submit.prevent="handleSubmit">
        <div class="relative">
            <input type="text" id="food_name" name="food_name" placeholder="name of food" v-model="food_name"/>
            <label for="food_name">name of food</label>
        </div>
        <div class="relative">
            <input type="url" id="img" name="img" placeholder="image url" v-model="img"/>
            <label for="img">image url</label>
        </div>
        <!-- ingredients input -->
        <!-- can only do none or 1 ingredient for now, not sure how to format into array yet -->
        <div class="relative">
            <input type="text" id="ingredients" name="ingredients" placeholder="ingredients" v-model="ingredients"/>
            <label for="ingredients">ingredients</label>
        </div>
        <!-- same applies to allergens -->
        <div class="relative">
            <input type="text" id="allergens" name="allergens" placeholder="allergens" v-model="allergens"/>
            <label for="allergens">allergens</label>
        </div>

        <div class="relative">
            <input type="number" id="good_for_x_days" name="good_for_x_days" v-model="good_for_x_days" min="1" max="30"/>
            <label for="good_for_x_days">how many days is this good for?</label>
        </div>
        <div class="relative">
            <input type="number" id="num_servings" name="num_servings" v-model="num_servings" min="1" max="999"/>
            <label for="num_servings">how many servings are you giving away?</label>
        </div>

        <div class="relative">
            <input type="datetime-local" id="pickup_by_time" name="pickup_by_time" v-model="pickup_by_time" min="1" max="999"/>
            <label for="pickup_by_time">when should food be picked up by?</label>
        </div>

        <!-- this input should be removed later once auth is added -->
        <!-- this will autofill based on the provider profile -->
        <div class="relative">
            <input type="text" id="restaurant" name="restaurant" placeholder="name of restaurant" v-model="restaurant"/>
            <label for="restaurant">name of restaurant</label>
        </div>

        <input type="submit" :value="buttonLabel" class="
            bg-green-500
            p-2
            m-2
            rounded-md"/>
    </form>

    <router-link to="/"><button class="
        bg-green-500
        p-2
        m-2
        mt-0
        rounded-md">Cancel</button></router-link>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>