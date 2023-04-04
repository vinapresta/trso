<template>
    <NuxtLink :to="to"
              class="inline-block relative 
               after:content-['']
               after:absolute
               after:w-full
               after:scale-x-0
               after:h-[2px]
               after:bottom-0
               after:left-0
               after:bg-white
               after:origin-bottom-right
               after:transition
               after:ease-out 
               after:duration-300
               hover:after:scale-x-100
               hover:after:origin-bottom-left
               mb-2 lg:mb-0"
               activeClass="after:scale-x-100 after:origin-bottom-left">
      {{ name }}
        
</NuxtLink>
</template>

<script setup>

defineProps({
  to: String,
  name: String
})

</script>
