<template>
    <div class="relative mt-3">
            <input :type="input_type" :id="attr_name" :name="attr_name" :placeholder="placeholder" :v-model="attr_name" class="
                peer
                w-full
                border-2
                border-dark-green
                rounded-md
                placeholder-transparent
                h-11
            "/>
            <label :for="attr_name" class="
                text-neutral-700
                text-lg
                absolute
                -top-4
                left-0
                -translate-y-1/2
                transition-all
                peer-placeholder-shown:left-4
                peer-placeholder-shown:top-1/2
                peer-placeholder-shown:text-neutral-900
                peer-focus:-top-4
                peer-focus:left-0
            ">{{ placeholder }}</label>
        </div>
</template>

<script setup>
import { toRefs } from 'vue';

const props = defineProps({
    'input_type': String,
    'attr_name': String,
    'placeholder': String,
    'value': String
})

const { placeholder, value } = toRefs(props)

console.log(placeholder.value, value.value)

// if value is an empty string (aka theres nothing to prefill form with) return placeholder
// otherwise return the prefill value
async function fillForm(){
    if (value.value === undefined) {
        console.log("Placeholder route")
        const text = placeholder.value
        return text
    } else {
        console.log("Value route")
        text = await value.value
        return text
    }
}
</script>