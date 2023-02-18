<template>
    <nav class="lg:py-4">
        <ol class="text-trso-blue flex items-center">
            <li class="flex items-center">
                <NuxtLink :to="localePath({ name: 'index' })">Home</NuxtLink>
                <i><IconsChevronRight class="w-[14px] h-[14px] pt-[4px] font-semibold" /></i>
            </li>
            <li v-for="(level, index) in levels" :key="level.id" class="flex items-center">
                <NuxtLink v-if="level.route" :to="localePath(level.route)">{{ level.name }}</NuxtLink>
                <span v-else>{{ level.name }}</span>
                <i v-if="index < levels.length - 1"><IconsChevronRight class="w-[14px] h-[14px] pt-[4px] font-semibold" /></i>
            </li>
        </ol> 
    </nav>
</template>

<script setup>

defineProps({
    levels: Object
})

const localePath = useLocalePath()

</script>