<template>
    <nuxt-img :src="src" 
              format="webp" 
              loading="lazy"
              :class="`bg-trso-${color}`" 
              :alt="alt" />
</template>


<script setup>

defineProps({
    color: String,
    src: String,
    alt: String
})

</script>