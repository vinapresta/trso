<template>
    <div id="search" 
         class="bg-trso-blue border-b-2 border-trso-blue
                px-4 lg:px-0 relative py-8 shadow-sub lg:z-10">
        <div class="flex flex-row items-center relative max-w-lg mx-auto gap-x-2">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                <IconsSearch class="text-trso-blue h-4 w-4"/>
            </span>
            <input v-model="customSearch" 
                class="pl-8 py-2 
                       block w-full 
                       border shadow-sm focus:border-trso-blue 
                       outline-0 ring-0
                       placeholder:text-trso-blue placeholder:italic" 
                type="text" 
                :placeholder="`${$t('components.search.placeholder')}`"
                @blur="blur()" 
                @focus="focus()"
                @input="autoCompleteSearch()"
                @keyup.enter="keyEnter()"
                @keydown.tab="keyEnter()">
            <NuxtLink :to="localePath({ name: 'search-search', params: { search: customSearch }})"
                      :disabled="customSearch.length < 3"
                      class="transition-colors duration-500 
                             bg-trso-yellow hover:bg-trso-yellow2 disabled:bg-trso-yellow2 hover:disabled:bg-trso-yellow-trso2 
                             border border-trso-yellow
                             py-2 px-2
                             cursor-pointer">
                <IconsSearch class="text-white h-5 w-5"/>
            </NuxtLink>
            <button @click="closeSearch" class="block absolute cursor-pointer top-[10px] right-[60px] rounded bg-trso-blue text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>                      
            </button>
        </div>
        <!-- SEARCH RESULTS -->
        <div v-if="searchResults.hits.length" id="searchResults" class="pb-4">
            <Transition>
                <div v-show="searchResults.hits.length">
                    <ul v-if="searchResults.hits.length" 
                        id="searchResults"
                        @mouseover="isOnResults = true" 
                        @mouseleave="isOnResults = false"
                        class="absolute left-1/2 -translate-x-1/2 z-50 
                               w-full lg:max-w-4xl max-h-[70vh] 
                               overflow-y-auto 
                               bg-white
                               drop-shadow-lg
                               scrollbar scrollbar-thumb-trso-blue scrollbar-track-trso-blue2">
                        <li v-for="result in searchResults.hits" :key="result.id">
                            <NuxtLink :to="localePath({ name: 'type-id-slug', params: { type: result.type === 'series' ? 'tv-series' : 'movies', id: result.objectID, slug: `${result['slug_' + locale]}`} })"
                                      class="block w-full
                                      px-4 lg:px-8 py-2 lg:py-4 
                                      text-center lg:text-left
                                      text-trso-blue hover:text-white
                                      text-sm lg:text-base 
                                      transition-colors duration-500 bg-white hover:bg-trso-blue">
                                {{ result['title_' + locale] }} <span v-if="result.director.length">({{ result.director }})</span>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink v-if="customSearch.length >= 3"
                                      :to="localePath({ name: 'search-search', params: { search: customSearch }})"
                                      class="flex items-center justify-center lg:justify-start gap-x-2 w-full
                                           px-4 lg:px-8 py-2 lg:py-4 
                                           bg-trso-blue text-white uppercase">
                                <i class="text-white h-4 w-4"><IconsPlus /></i>
                                <span>{{ $t('components.search.more') }}</span>
                            </NuxtLink>
                        </li>
                        <li class="algolia-logo px-2 py-4 flex flex-row justify-center items-center gap-x-2">
                            <NuxtLink to="https://www.algolia.com/" class="flex items-center gap-x-2">
                                <span>{{ $t('components.search.madeWith') }}</span><IconsAlgolia />
                            </NuxtLink> 
                        </li>
                    </ul>
                    <div v-else class="absolute z-20 bg-white w-full left-0 mt-8">
                        <span class="block px-4 lg:px-8 py-2">{{ $t('components.search.placeholder') }}</span>
                    </div>
                </div>
                </Transition>
            </div>
        <!---->
    </div>
</template>

<script setup>

    const { locale } = useI18n()

    const route = useRoute()

    const router = useRouter()

    const localePath = useLocalePath()

    const customSearch = ref('')

    const isOnResults = ref(false)

    const searchResults = reactive({
        hits: []
    })

    watch(route, () => {

        closeSearch()

    })

    function focus () {

    }

    function blur () {

        if (!isOnResults.value)
            closeSearch()

    }

    async function autoCompleteSearch () {

        if (customSearch.value.length >= 3) {

            const { data } = await useAsyncAlgoliaSearch({ indexName: 'movies', query: String(customSearch.value), requestOptions: { hitsPerPage: 2, page: 0 } })

            searchResults.hits = data.value.hits

        }

    }

    function keyEnter () {

    }

    function closeSearch () {

        customSearch.value = ''

        searchResults.hits = []

    }

 
</script>

<style scoped>
#search {
    background-color: #aad9f9;
    background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM91 60h-2V40h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM39.32 74l-1 1.732-17.32-10L22 64l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM71 80h-2V60h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM120 89v2h-20v-2h20zm-84.134 9.16l-1.732 1-10-17.32 1.732-1 10 17.32zM51 100h-2V80h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM100 109v2H80v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM31 120h-2v-20h2v20z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
}
.algolia-logo { color: rgb(84, 104, 255) }

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>