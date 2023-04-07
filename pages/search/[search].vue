<template>
    <div>
        <HelpersHeading tag="h1" tagStyle="h1" color="blue">
            <span v-if="results.total">{{ $t('pages.search.title') }}</span>
            <span v-else>{{ $t('pages.search.noResults') }}</span>
            &nbsp;
            <span class="italic font-semibold">{{ customSearch }}</span>
        </HelpersHeading>
        <Transition name="fade">
            <div v-if="!resultsLoaded"
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-trso-blue">
                <IconsLoader class="w-16 h-16"/>
            </div>
        </Transition>
        <Transition name="fade">
        <div v-if="resultsLoaded">
            <div v-if="results.total"><!--class="min-h-[1500px]"-->
                <ul class="mb-4 lg:mb-8">
                    <li v-for="result in results.hits" :key="result.id">
                        <NuxtLink :to="localePath({ name: 'type-id-slug', params: { type: result.type === 'series' ? 'tv-series' : 'movies', id: result.objectID, slug: `${result['slug_' + locale]}`} })"
                                :title="result['title_' + locale]"
                                class="flex items-center gap-x-4 lg:gap-x-8
                                        transition-colors duration-500 bg-white hover:bg-trso-blue2
                                        text-trso-blue hover:text-white text-base lg:text-lg text-left
                                        p-2 lg:p-4">
                            <img :src="result.poster" :alt="`poster ${result['title_' + locale]}`"
                                 class="w-12 h-auto">
                            <span>{{ result['title_' + locale] }} <span v-if="result.director.length" class="text-base">({{ result.director }})</span></span>
                        </NuxtLink>
                    </li>
                </ul>
                <HelpersButton v-if="results.count < results.max" 
                            color="blue" 
                            @click="loadMore()" 
                            :disabled="loadMoreState"
                            class="text-white">
                    <span v-if="!loadMoreState">{{ $t('loadMore') }}</span>
                    <i v-else><IconsLoader class="w-4 h-4" /></i>
                </HelpersButton>
                <span v-else class="block px-4 py-2 text-trso-blue text-center border border-trso-blue">
                    {{ $t('pages.search.noMore') }}
                </span>
            </div>
            <div v-else>
                <p class="text-lg text-center font-sans text-trso-yellow mb-8">
                    <NuxtLink :to="localePath({ name: 'type-pages-page', params: { type: 'tv-series', page: 1 } })" 
                                :title="$t('header.series')"
                                class="flex items-center gap-x-2">
                        <i><IconsArrowRight class="h-5 w-5"/></i>
                        <span>{{ $t('pages.search.seriesList') }}</span>
                    </NuxtLink>
                </p>  
                <p class="text-lg text-center font-sans text-trso-blue mb-8">
                    <NuxtLink :to="localePath({ name: 'type-pages-page', params: { type: 'movies', page: 1 } })" 
                                :title="$t('header.series')"
                                class="flex items-center gap-x-2">
                        <i><IconsArrowRight class="h-5 w-5"/></i>
                        <span>{{ $t('pages.search.moviesList') }}</span>
                    </NuxtLink>
                </p>
            </div>
        </div>
        </Transition>
    </div>
</template>

<script setup>

const { locale } = useI18n()

const localePath = useLocalePath()

const route = useRoute()

const customSearch = route.params.search

const { result, search } = useAlgoliaSearch('movies')

const page = ref(0)

const loadMoreState = ref(false)

const hitsPerPage = 4

const max = 50

const resultsLoaded = ref(false)

const results = reactive({
    hits: [],
    count: 0,
    total: 0,
    max: 0
})

onMounted(() => {

    loadResult()

})

async function loadMore () {

    loadMoreState.value = true

    try {

        await loadResult()

        page.value++

        
    } catch (error) {
        
    }
    
    loadMoreState.value = false

}

async function loadResult () {

    resultsLoaded.value = true

    const res = await search({ query: `${String(customSearch)}`, requestOptions: { hitsPerPage: hitsPerPage, page: page.value } })

    results.hits = [...results.hits, ...res.hits]

    results.count = results.hits.length

    results.total = res.nbHits

    results.max = res.nbHits < max ? res.nbHits : max

    resultsLoaded.value = true

}

</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>