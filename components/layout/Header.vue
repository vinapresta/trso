<template>
    <header class="bg-trso-blue">
        <nav class="max-w-6xl mx-auto lg:flex items-center py-4" id="mainMenu">
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
           <ul class="lg:flex items-center gap-x-4 text-center font-semibold text-sm lg:text-xl uppercase text-white">
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
        </nav>
    </header>
</template>

<script setup>

const localePath = useLocalePath()

</script>

