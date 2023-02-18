<template>
    <button class="block w-full px-4 py-2 text-white text-center uppercase transition-colors duration-500" 
            :class="`bg-trso-${color} hover:bg-trso-${color}-light`">
        <slot />
    </button>
</template>

<script setup lang="ts">

defineProps({
    color:String
})

</script>



