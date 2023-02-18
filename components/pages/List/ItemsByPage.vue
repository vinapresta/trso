<template>
    <div>
        <PagesListPagination :page="parseInt(page)" 
                             :pagesCount="pagesCount" 
                             :routeName="routeName" 
                             :color="type === 'tv-series' ? 'yellow' : 'blue'"/>
        <div class="container grid grid-cols-2 gap-x-4 gap-y-4">
            <PagesItem v-for="item in items.data" 
                       :key="item.id" 
                       :itemData="item" 
                       :type="type" 
                       :lang="locale" 
                       :color="type === 'tv-series' ? 'yellow' : 'blue'" />
        </div>
    </div>
    
</template>

<script setup>

const props = defineProps ({
    type: String,
    page: String,
    routeName: String
})

const { locale } = useI18n()

const runtimeConfig = useRuntimeConfig()

const limitByPage = runtimeConfig.public.limitByPage

const start = (parseInt(props.page) - 1) * parseInt(limitByPage)

const fields = `fields[0]=director&fields[1]=year&fields[2]=poster`
const filters = `filters[type][$eq]=${props.type === 'tv-series' ? 'series' : 'movie'}&filters[item_lang][locale][$eq]=${locale.value}&filters[books][firstBook][$eq]=true`
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

</script>