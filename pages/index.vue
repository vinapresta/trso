<template>
    <div>
        <ul>
            <li  v-for="item in items.data" :key="item.id">
                {{ item.id }} {{ item.attributes.item_lang.data.attributes.title }}
            </li>
        </ul>
        <!--<PagesIndexDisclaimer />
        <PagesIndexFeatured type="tv-series"/>
        <PagesIndexFeatured type="movies"/>-->
    </div>
</template>

<script setup>

const runtimeConfig = useRuntimeConfig()

const { locale } = useI18n()

const limit = runtimeConfig.public.featuredItemsCount

const fields = `fields[0]=director&fields[1]=year&fields[2]=poster`
const filters = `filters[type][$eq]=movie&filters[item_lang][locale][$eq]=${locale.value}&filters[item_lang][home][$eq]=true&filters[books][firstBook][$eq]=true`
const populate = `populate[item_lang][fields][0]=title&populate[item_lang][fields][1]=slug&populate[books][fields][0]=title&populate[books][fields][1]=authors&populate[books][fields][2]=thumbnail`
const pagination = `pagination[start]=0&pagination[limit]=${limit}`
const sort = `sort[0]=id%3Adesc`
const params = `${sort}&${fields}&${filters}&${populate}&${pagination}`

const url = `${runtimeConfig.public.API_BASE_URL}items?${params}`

const { data: items } = await useFetch(url)

    /*const { t } = useI18n()

    const runtimeConfig = useRuntimeConfig()

    useHead({
        title: `${runtimeConfig.public.websiteName} - ${t('pages.home.title')}`,
        meta: [
            { hid: 'description', name: 'description', content: t('pages.home.hidDescription') },
            { hid: 'keywords', name: 'keywords', content: t('pages.home.hidKeywords') },
            { hid: 'og:site_name', property: 'og:site_name', content: runtimeConfig.public.websiteName},
            { hid: 'og:description', property: 'og:description', content: t('pages.home.hidOgDescription') },
            { hid: 'twitter:title', property: 'twitter:title', content: `${runtimeConfig.public.websiteName} - ${t('pages.home.hidTwitterTitle')}` },
            { hid: 'twitter:description', property: 'twitter:description', content: t('pages.home.hidTwitterDescription') },
        ]
    })*/

</script>