<template>
    <header>
        <nav class="bg-trso-blue">
            <NuxtLink :to="localePath({ name: 'index'})" :title="$t('pages.home.title')">
                <h1>           
                    <img class="block" style="width: 200px; height: 72px;" src="/img/logo_white_resize.png" alt="Tarseroo logo">
                </h1>        
            </Nuxtlink>
           <ul>
                <li><NuxtLink :to="localePath({ name: 'type-pages-page', params: { type: 'movies', page: 1 } })">{{ $t('header.movies') }}</NuxtLink></li>
                <li><NuxtLink :to="localePath({ name: 'type-pages-page', params: { type: 'tv-series', page: 1 } })">{{ $t('header.series') }}</NuxtLink></li>
            </ul>
        </nav>
    </header>
</template>

<script setup>

const localePath = useLocalePath()

</script>