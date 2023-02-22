<template>
    <div id="search" class="px-4 lg:px-0 relative py-8 shadow-sub lg:z-10 bg-trso-blue-ligth mb-4 md:mb-8 lg:mb-14">
        <div class="flex flex-row items-center relative max-w-lg mx-auto gap-x-2">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                <IconsSearch class="text-trso-blue h-4 w-4"/>
            </span>
            <input v-model="customSearch" 
                class="pl-8 py-2 block w-full border shadow-sm focus:border-trso-blue focus:ring focus:ring-trso-blue2 focus:ring-opacity-50" 
                type="text" 
                :placeholder="`${$t('components.search.placeholder')}`"
                @blur="blur()" 
                @focus="focus()"
                @input="autoCompleteSearch()"
                @keyup.enter="keyEnter()"
                @keydown.tab="keyEnter()">
            <button @click.prevent = "gotToSearchPage()" :disabled="customSearch.length < 3"
                    class="transition-colors duration-500 bg-trso-blue hover:bg-trso-blue2 disabled:opacity-75 hover:disabled:bg-trso-blue py-2 px-2">
                <IconsSearch class="text-white h-5 w-5"/>
            </button>
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
                        class="absolute left-1/2 -translate-x-1/2 z-20 
                               w-full lg:max-w-4xl max-h-[70vh] 
                               overflow-y-auto 
                               bg-white lg:shadow-lg
                               scrollbar scrollbar-thumb-trso-blue scrollbar-track-trso-blue-light">
                        <li v-for="result in searchResults.hits" :key="result.id">
                            <NuxtLink :to="localePath({ name: 'type-id-slug', params: { type: 'movies', id: 2756, slug: `${result['slug_' + locale]}`} })"
                                      class="block px-8 py-4 w-full text-trso-blue hover:text-white transition-colors duration-500 bg-white hover:bg-trso-blue2">
                                {{ result['title_' + locale] }} <span v-if="result.director.length">({{ result.director }})</span>
                            </NuxtLink>
                        </li>

                        <li class="p-2 italic bg-trso-blue-light">
                            <button @click.prevent = "gotToSearchPage" v-if="customSearch.length >= 3">
                                {{ $t('components.search.more') }}
                            </button>
                        </li>
                        <li class="algolia-logo px-2 py-4 flex flex-row justify-center items-center gap-x-2">
                            <NuxtLink to="https://www.algolia.com/">
                                <IconsAlgolia />
                            </NuxtLink> 
                        </li>
                    </ul>
                    <div v-else class="absolute z-20 bg-white w-full left-0 mt-8">
                        <span class="block p-2">Il n'y a pas de résultat pour votre recherche.</span>
                    </div>
                </div>
                </Transition>
            </div>
        <!---->
    </div>
</template>

<script setup>

    const route = useRoute()

    const router = useRouter()

    const localePath = useLocalePath()

    const { locale, t } = useI18n()

    const { result, search } = useAlgoliaSearch('movies')

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

            const { data } = await useAsyncAlgoliaSearch({ indexName: 'movies', query: String(customSearch.value) })

            searchResults.hits = data.value.hits

        }

    }

    function keyEnter () {

    }

    function closeSearch () {

        searchResults.hits = []

    }

    function gotToSearchPage () {

        router.push(localePath({ name: 'search-search', params: { search: customSearch.value }}));

    }
 
</script>

<style scoped>
#search {
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%233b82f6' fill-opacity='0.39' fill-rule='evenodd'/%3E%3C/svg%3E");
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