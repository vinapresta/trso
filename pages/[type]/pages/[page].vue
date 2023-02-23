<template>
    <div>     
        <LayoutBreadcrumbs :levels="[ { name: type, route: { name: 'type-pages-page', params: { type: type, page: 1 } } }, { name: `page ${String(page)}` }]"/>
        <HelpersHeading tag="h1" tagStyle="h1" :color="type === 'tv-series' ? 'yellow': 'blue'"><span v-if="type === 'tv-series'">{{ $t('pages.series.title') }}</span><span v-else>{{ $t('pages.series.title') }}</span></HelpersHeading>
        <PagesListItemsByPage :type="type" :page="page" routeName="type-pages-page" />
    </div>
</template>

<script setup>

const runtimeConfig = useRuntimeConfig()

const route = useRoute()

const { t } = useI18n()

const page = route.params.page

const type = route.params.type

/*const typeLang = type === 'tv-series' ? 'series' : 'movie'*/

const title = type === 'tv-series' ? t('pages.series.title') : t('pages.movies.title')
const hidDescription = type === 'tv-series' ? t('pages.series.hidDescription') : t('pages.movies.hidDescription')
const hidKeywords = type === 'tv-series' ? t('pages.series.hidKeywords') : t('pages.movies.hidKeywords')
const hidOgDescription = type === 'tv-series' ? t('pages.series.hidOgDescription') : t('pages.movies.hidOgDescription')
const hidTwitterTitle = type === 'tv-series' ? t('pages.series.hidTwitterTitle') : t('pages.movies.hidTwitterTitle')
const hidTwitterDescription = type === 'tv-series' ? t('pages.series.hidTwitterDescription') : t('pages.movies.hidTwitterDescription')


useHead({

    title: `${runtimeConfig.public.websiteName} - ${title}`,
    meta: [
        { name: 'description', content: `${hidDescription} ${page}` },
        { name: 'keywords', content: hidKeywords },
        { property: 'og:site_name', content: runtimeConfig.public.websiteName },
        { property: 'og:description', content: `${hidOgDescription} ${page}` },
        { property: 'twitter:title', content: `${runtimeConfig.public.websiteName} - ${hidTwitterTitle}` },
        { property: 'twitter:description', content: `${hidTwitterDescription} ${page}` }
    ]

})

</script>