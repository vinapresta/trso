<template>
    <div>
        <PagesListPagination :page="parseInt(page)" 
                             :pagesCount="pagesCount" 
                             :routeName="routeName" 
                             :color="type === 'tv-series' ? 'yellow' : 'blue'"/>
        <div class="container flex flex-wrap">
            <PagesItem v-for="item in items.data" 
                       :key="item.id" 
                       :itemData="item" 
                       :type="type" 
                       :lang="locale" 
                       :color="type === 'tv-series' ? 'yellow' : 'blue'" />
        </div>
        <PagesListPagination :page="parseInt(page)" 
                             :pagesCount="pagesCount" 
                             :routeName="routeName" 
                             :color="type === 'tv-series' ? 'yellow' : 'blue'"/>
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

const fields = `fields[0]=internalId&fields[1]=director&fields[2]=year&fields[3]=poster`
const filters = `filters[type][$eq]=${props.type === 'tv-series' ? 'series' : 'movie'}&filters[books][firstBook][$eq]=true`
const populate = `populate[movie_${locale.value}][fields][0]=title&populate[movie_${locale.value}][fields][1]=slug&populate[books][fields][0]=title&populate[books][fields][1]=authors&populate[books][fields][2]=thumbnail`
const pagination = `pagination[start]=${start}&pagination[limit]=${limitByPage}`
const sort = `sort[0]=id%3Adesc`
const params = `${sort}&${fields}&${filters}&${populate}&${pagination}`

const { data: items } = await useFetch(`${runtimeConfig.public.apiBase}movies?${params}`)

const pagesCount = computed(() => {

   const total =  items.value.meta.pagination.total

   return Math.ceil( parseInt(total) / parseInt(limitByPage))

})

</script>