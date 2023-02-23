<template>
    <button class="flex items-center justify-center gap-x-2 w-full px-4 py-2 text-white text-center uppercase transition-colors duration-500" 
            :class="`bg-trso-${color} hover:bg-trso-${color}2`">
        <slot />
    </button>
</template>

<script setup lang="ts">

defineProps({
    color:String
})

</script>



