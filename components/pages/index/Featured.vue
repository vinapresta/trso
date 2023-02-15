<template>
    <div class="container flex flex-wrap">
        <PagesItem v-for="item in items.data"
                   :key="item.id" 
                   :itemData="item" 
                   :type="type" 
                   :lang="locale" 
                   :color="type === 'tv-series' ? 'yellow' : 'blue'"/>
    </div>
</template>

<script setup>

    const { locale } = useI18n()

    const props = defineProps({
        type: String
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

    /*const itemsData = computed(() => {

        if (!items.value.data)
            return null

        return items.value.data
    })*/

</script>