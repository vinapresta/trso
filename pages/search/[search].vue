<template>
    <div>
        <HelpersHeading tag="h1" tagStyle="h1" color="blue">
            <span v-if="results.total">{{ $t('pages.search.title') }}</span>
            <span v-else>{{ $t('pages.search.noResults') }}</span>
            &nbsp;
            <span class="italic font-semibold">{{ customSearch }}</span>
        </HelpersHeading>
        <div v-if="results.total">
            <div>
                <div v-for="item in results.hits" :key="item.id">
                    <NuxtLink :to="localePath({ name: 'type-id-slug', params: { type: 'movies', id: 2756, slug: `${item['slug_' + locale]}`} })"
                              :title="item['title_' + locale]"
                              class="block 
                                     transition-colors duration-500 bg-white hover:bg-trso-blue2
                                     text-trso-blue hover:text-white text-base lg:text-lg text-center lg:text-left
                                     py-2">
                        {{ item['title_' + locale] }} <span v-if="item.director.length" class="text-base">({{ item.director }})</span>
                    </NuxtLink>
                </div>
            </div>
            <HelpersButton v-if="results.count < results.max" 
                        color="blue" 
                        @click="loadMore()" 
                        :disabled="loadMoreState">
                <span v-if="!loadMoreState">{{ $t('loadMore') }}</span>
                <i v-else><IconsLoader /></i>
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
</template>

<script setup>

const { locale } = useI18n()

const localePath = useLocalePath()

const route = useRoute()

const customSearch = route.params.search

const { result, search } = useAlgoliaSearch('movies')

const page = ref(0)

const loadMoreState = ref(false)

const hitsPerPage = 8

const max = 50

const results = reactive({
    hits: [],
    count: 0,
    total: 0,
    max: 0
})

onMounted(async () => {

    try {

        await loadResult()

    } catch (error) {

    }

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

    const res = await search({ query: `${String(customSearch)}`, requestOptions: { hitsPerPage: hitsPerPage, page: page.value } })

    results.hits = [...results.hits, ...res.hits]

    results.count = results.hits.length

    results.total = res.nbHits

    results.max = res.nbHits < max ? res.nbHits : max

}

</script>