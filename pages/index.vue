<template>
    <div>
        <PagesIndexDisclaimer />
        <PagesIndexFeatured type="tv-series"/>
        <PagesIndexFeatured type="movies"/>
    </div>
</template>

<script setup>

    const { t } = useI18n()

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
    })

</script>