<template>
    <div class="w-full bg-trso-blue border-b-2 border-trso-yellow">
        <nav class="lg:flex items-center 
                    max-w-6xl mx-auto
                    transition-[padding] ease-in-out delay-200" 
            id="mainMenu">
            <NuxtLink :to="localePath({ name: 'index'})" :title="$t('pages.home.title')"
                    class="lg:pr-8">
                <h1 class="text-center">           
                    <img class="mx-auto lg:mx-0 w-[150px] h-[54px] mb-4 lg:mb-0" 
                        width="200" 
                        height="72" 
                        src="/img/logo_white_resize.png" 
                        alt="Tarseroo logo">
                </h1>        
            </Nuxtlink>
            <ul class="lg:flex items-center gap-x-4 text-center font-semibold text-sm lg:text-base uppercase text-white">
                <LayoutMenuButton>
                    <NuxtLink :to="localePath({ name: 'type-pages-page', params: { type: 'movies', page: 1 } })">
                        {{ $t('header.movies') }}
                    </NuxtLink>
                </LayoutMenuButton>
                <LayoutMenuButton>
                    <NuxtLink :to="localePath({ name: 'type-pages-page', params: { type: 'tv-series', page: 1 } })">
                        {{ $t('header.series') }}
                    </NuxtLink>
                </LayoutMenuButton>
            </ul>
            <button v-if="searchButtonVisible"
                    class="flex items-center gap-x-2 ml-auto" 
                    @click="$emit('changeSearchState')">
                <IconsSearch class="text-white h-5 w-5"/>
                <span v-if="!searchButtonState" class="text-white">
                    {{ $t('header.search') }}
                </span>
                <span v-else class="text-white">
                    {{ $t('header.closeSearch') }}
                </span>
            </button>
        </nav>
    </div>
</template>

<script setup>

    const localePath = useLocalePath()

    defineProps({
        searchButtonVisible: Boolean,
        searchButtonState: Boolean
    })

</script>

