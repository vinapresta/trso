<template>
    <div>
        <LayoutBreadcrumbs :levels="[ { name: type, route: { name: 'type-pages-page', params: { type: type, page: 1 } } }, { name: `page ${String(page)}` }]"/>
        <HelpersHeading tag="h1" 
                        tagStyle="h1" 
                        :color="color">
            {{  titleInner }}
        </HelpersHeading>
       <PagesListItemsByPage :items="items.data"
                              :type="type" 
                              :page="page" 
                              routeName="type-pages-page"
                              :color="color"
                              :pagesCount="pagesCount"/>
    </div>
</template>

<script setup>

const runtimeConfig = useRuntimeConfig()

const route = useRoute()

const { locale, t } = useI18n()

const page = parseInt(route.params.page)

const type = route.params.type

const color = type === 'tv-series' ? 'yellow' : 'blue'

const titleInner = type === 'tv-series' ? t('pages.series.title') : t('pages.movies.title')

const limitByPage = runtimeConfig.public.limitByPage

const start = (page - 1) * parseInt(limitByPage)

const fields = `fields[0]=director&fields[1]=year&fields[2]=poster`
const filters = `filters[type][$eq]=${type === 'tv-series' ? 'series' : 'movie'}&filters[item_lang][locale][$eq]=${locale.value}&filters[books][firstBook][$eq]=true`
const populate = `populate[item_lang][fields][0]=title&populate[item_lang][fields][1]=slug&populate[books][fields][0]=title&populate[books][fields][1]=authors&populate[books][fields][2]=thumbnail`
const pagination = `pagination[start]=${start}&pagination[limit]=${limitByPage}`
const sort = `sort[0]=id%3Adesc`
const params = `${sort}&${fields}&${filters}&${populate}&${pagination}`
const url = `${runtimeConfig.public.API_BASE_URL}items?${params}`

const { data: items } = await useFetch(url)

const pagesCount = computed(() => {

    const total =  items.value.meta.pagination.total

    return Math.ceil( parseInt(total) / parseInt(limitByPage))

})

const headLinks = computed(() => {

    let links = [{ rel: 'canonical', href: `${runtimeConfig.public.BASE_URL}${route.fullPath}` }]

    if (pagesCount.value > 1) {

        if (page === 1) {

            links.push({ rel: 'next', href: `${runtimeConfig.public.BASE_URL}/${type}/pages/2` })

        } else if(page === pagesCount.value) {

            links.push({ rel: 'prev', href: `${runtimeConfig.public.BASE_URL}/${type}/pages/${page - 1}` })

        } else {

            links.push({ rel: 'prev', href: `${runtimeConfig.public.BASE_URL}/${type}/pages/${page - 1}` })
            links.push({ rel: 'next', href: `${runtimeConfig.public.BASE_URL}/${type}/pages/${page + 1}` })

        }
    }

    return links
})

const title = type === 'tv-series' ? t('pages.series.title') : t('pages.movies.title')
const hidDescription = type === 'tv-series' ? t('pages.series.hidDescription') : t('pages.movies.hidDescription')
const hidKeywords = type === 'tv-series' ? t('pages.series.hidKeywords') : t('pages.movies.hidKeywords')
const hidOgDescription = type === 'tv-series' ? t('pages.series.hidOgDescription') : t('pages.movies.hidOgDescription')
const hidTwitterTitle = type === 'tv-series' ? t('pages.series.hidTwitterTitle') : t('pages.movies.hidTwitterTitle')
const hidTwitterDescription = type === 'tv-series' ? t('pages.series.hidTwitterDescription') : t('pages.movies.hidTwitterDescription')

useHead({

    title: `${runtimeConfig.public.websiteName} - ${title}`,
    link: headLinks.value,
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