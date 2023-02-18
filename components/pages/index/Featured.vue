<template>
    <div class="mb-8">
        <h2 class="text-4xl text-center font-serif mb-2" :class="`text-trso-${color}`">
            <span v-if="type === 'tv-series'">{{ $t('components.featured.topSeries') }}</span>
            <span v-else>{{ $t('components.featured.topMovies') }}</span>
        </h2>
        <p class="mb-4">
            <NuxtLink :to="localePath({ name: 'type-pages-page', params: { type: type, page: 1 }})"
                      :class="`text-trso-${color}`"
                      class="flex justify-center items-center gap-x-2 text-xl">
                <span><IconsArrowRight class="h-5 w-5"/></span>
                <span v-if="type === 'tv-series'">{{ $t('components.featured.topSeries2') }}</span>
                <span v-else>{{ $t('components.featured.topMovies2') }}</span>
            </NuxtLink>
        </p>
        <div class="grid grid-cols-2 gap-x-4 gap-y-4">
            <PagesItem v-for="item in items.data"
                    :key="item.id" 
                    :itemData="item" 
                    :type="type" 
                    :lang="locale" 
                    :color="color"/>
        </div>
        <NuxtLink :to="localePath({ name: 'type-pages-page', params: { type: type, page: 1 }})"
        :title="type === 'tv-series' ? $t('components.featured.topSeries2') : $t('components.featured.topMovies2')"
                  class="flex w-full py-2 justify-center">
            <i><IconsPlus class="h-14 w-14" :class="`text-trso-${color}`"/></i>
        </NuxtLink>
    </div>
</template>

<script setup>

    const { locale } = useI18n()

    const localePath = useLocalePath()

    const props = defineProps({
        type: String
    })

    const color = ref('blue')

    onMounted( () => {

        if (props.type === 'tv-series')
            color.value = 'yellow'

    })

    const runtimeConfig = useRuntimeConfig()

    const limit = runtimeConfig.public.featuredItemsCount

    const fields = `fields[0]=director&fields[1]=year&fields[2]=poster`
    const filters = `filters[type][$eq]=${props.type === 'tv-series' ? 'series' : 'movie'}&filters[item_lang][locale][$eq]=${locale.value}&filters[item_lang][home][$eq]=true&filters[books][firstBook][$eq]=true`
    const populate = `populate[item_lang][fields][0]=title&populate[item_lang][fields][1]=slug&populate[books][fields][0]=title&populate[books][fields][1]=authors&populate[books][fields][2]=thumbnail`
    const pagination = `pagination[start]=0&pagination[limit]=${limit}`
    const sort = `sort[0]=id%3Adesc`
    const params = `${sort}&${fields}&${filters}&${populate}&${pagination}`

    const url = `${runtimeConfig.public.API_BASE_URL}items?${params}`

    const { data: items } = await useFetch(url)

</script>