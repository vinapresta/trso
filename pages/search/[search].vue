<template>
    <div>
        <h1>SEARCH</h1>
        <div v-if="hits">{{ hits.length }} / {{ result.nbHits }}
            <div v-for="item in hits" :key="item.id">
                <NuxtLink to="/" 
                          :title="item['title_' + locale]"
                          class="block 
                                 transition-colors duration-500 bg-white hover:bg-trso-blue-light
                                 text-trso-blue hover:text-white text-lg text-center 
                                 py-2">
                    {{ item['title_' + locale] }} <span v-if="item.director.length" class="text-base">({{ item.director }})</span>
                </NuxtLink>
            </div>
        </div>
        <!--<HelpersButton v-if="hits.length < result.nbHits" 
                       color="blue" 
                       @click="loadMore()" 
                       :disabled="!loadMoreState">
            {{ $t('pages.search.loadMore') }}
        </HelpersButton>-->
        <HelpersButton v-if="hits.length < 100" 
                       color="blue" 
                       @click="loadMore()" 
                       :disabled="!loadMoreState">
            <IconsLoader></IconsLoader>
        </HelpersButton>
    </div>
</template>

<script setup>

const { locale } = useI18n()

const route = useRoute()

const customSearch = route.params.search

const { result, search } = useAlgoliaSearch('movies')

const page = ref(0)

const loadMoreState = ref(false)

const hitsPerPage = 15

let hits = reactive([])


onMounted(async () => {

    loadMoreState.value = false

    await loadResult()

    loadMoreState.value = true

})

async function loadMore () {

    loadMoreState.value = false

    await loadResult()

    loadMoreState.value = true

    page.value++

}

async function loadResult () {

    const res = await search({ query: `${String(customSearch)}`, requestOptions: { hitsPerPage: hitsPerPage, page: page.value } })

    hits = [...hits, ...res.hits]
}

</script>