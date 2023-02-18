<template>
    <header class="bg-trso-blue">
        <nav class="max-w-6xl mx-auto flex items-center py-4" id="mainMenu">
            <NuxtLink :to="localePath({ name: 'index'})" :title="$t('pages.home.title')"
                      class="lg:pr-8">
                <h1>           
                    <img class="block" style="width: 200px; height: 72px;" src="/img/logo_white_resize.png" alt="Tarseroo logo">
                </h1>        
            </Nuxtlink>
           <ul class="flex items-center gap-x-4 font-semibold uppercase text-white">
                <LayoutMenuButton><NuxtLink :to="localePath({ name: 'type-pages-page', params: { type: 'movies', page: 1 } })">{{ $t('header.movies') }}</NuxtLink></LayoutMenuButton>
                <LayoutMenuButton><NuxtLink :to="localePath({ name: 'type-pages-page', params: { type: 'tv-series', page: 1 } })">{{ $t('header.series') }}</NuxtLink></LayoutMenuButton>
            </ul>
        </nav>
    </header>
</template>

<script setup>

const localePath = useLocalePath()

</script>

