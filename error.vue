<template>
    <div>
        <LayoutHeader></LayoutHeader>
        <LayoutSearch></LayoutSearch>
        <div class="container px-2 md:px-4 max-w-6xl mb-16">
            <p class="text-3xl mb-16">{{ $t('error.message')}}</p>
            <p class="text-lg text-center font-sans text-trso-yellow mb-8">
                <NuxtLink :to="localePath({ name: 'type-pages-page', params: { type: 'tv-series', page: 1 } })" 
                            :title="$t('header.series')"
                            class="flex items-center gap-x-2">
                    <i><IconsArrowRight class="h-5 w-5"/></i>
                    <span>{{ $t('error.series') }}</span>
                </NuxtLink>
            </p>  
            <p class="text-lg text-center font-sans text-trso-blue mb-8">
                <NuxtLink :to="localePath({ name: 'type-pages-page', params: { type: 'movies', page: 1 } })" 
                            :title="$t('header.series')"
                            class="flex items-center gap-x-2">
                    <i><IconsArrowRight class="h-5 w-5"/></i>
                    <span>{{ $t('error.movies') }}</span>
                </NuxtLink>
            </p> 
        </div>
        <LayoutFooter></LayoutFooter>
    </div>
</template>

<script setup>

    const localePath = useLocalePath()

</script>

<style scoped>

</style>