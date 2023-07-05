<template>
    <div>
        <LayoutBreadcrumbs :levels="[ { name: item.attr.type === 'series' ? 'tv-series' : 'movies', route: { name: 'type-pages-page', params: { type: item.attr.type === 'series' ? 'tv-series' : 'movies', page: 1 } } }, { name: item.langAttr.title }]"/>
        <div itemscope itemtype="http://schema.org/Movie">
            <h1 class="block py-2 px-2 text-white text-center font-semibold" :class="`bg-trso-${item.color}`">{{ $t('pages.slug.what') }} <span itemprop="name">{{ item.attr.type === 'series' ? $t('pages.slug.theSeries') : $t('pages.slug.theMovie') }} {{ item.langAttr.title }}</span> {{ $t('pages.slug.on') }}</h1>
            <section class="border" :class="`border-trso-${item.color}`">
                <p class="text-lg lg:text-xl text-center font-serif px-4 pt-4">
                    <span class="block pb-1 lg:pb-2 text-center">
                        <i class="fas fa-film"></i>
                        <span v-if="item.attr.type === 'series'">{{ $t('pages.slug.theSeries') }}</span>
                        <span v-else>{{ $t('pages.slug.theMovie') }}</span>
                    </span>   
                    <span class="block pb-0 lg:pb-1" :class="`text-trso-${item.color}`">
                        <span class="text-xl sm:text-2xl md:text-3xl lg:text-4xl">{{ item.langAttr.title }}</span>
                    </span>
                    <span class="block text-center italic text-base lg:text-lg" v-if="item.attr.director || item.attr.year">
                        <span v-if="item.attr.director != 'N/A'" itemprop="director">{{ $t('movie.director') }} {{ item.attr.director }}</span>
                        <span v-if="item.attr.director && item.attr.year">{{ $t('pages.slug.and') }}</span>
                        <span v-if="item.attr.year != ''">{{ $t('pages.slug.released') }} {{ item.attr.year }}</span>
                    </span>
                    <span class="block pt-2 pb-1 lg:pb-2 font-bold">
                        <i class="fas fa-book"></i>
                        {{ $t('pages.slug.from') }}
                    </span>
                    <span class="block pb-1 lg:pb-2" :class="`text-trso-${item.color}`" itemprop="name">
                        <span class="text-xl sm:text-2xl md:text-3xl lg:text-4xl">{{ item.firstBook.attributes.title }}</span>
                    </span>
                    <span class="block pb-2 md:pb-4 italic text-base lg:text-lg" itemprop="author" v-if="item.firstBook.attributes.authors">
                        <span>{{ $t('pages.slug.by') }}&nbsp;</span>
                        <span v-for="(author, index) of item.firstBook.attributes.authors" :key="author.id">
                            <span v-if="index === Object.keys(item.firstBook.attributes.authors).length - 1 && item.firstBook.attributes.authors.length > 1">
                                {{ $t('pages.slug.and') }} 
                            </span>
                            {{ author }}
                            <span v-if="index < Object.keys(item.firstBook.attributes.authors).length - 2">, </span>
                        </span>
                    </span>
                </p>
                <!--<PagesSlugVote :imdbId="item.attr.imdbId"/>-->
                <PagesSlugSocial :title="item.langAttr.title" 
                             :description="item.langAttr.plot"
                             quote=""
                             :hashtags="$t('pages.slug.hidKeywords')" />
            </section>
            <section class="py-8 lg:py-12">
                <PagesSlugBookDetail :book="item.firstBook.attributes" :type="item.attr.type" :color="item.color" />
            </section>
            <section v-if="item.books != false && item.books.length">
                <h2 class="text-white font-bold py-2 px-4 text-base sm:text-lg md:text-xl text-center font-serif px-4 mb-2" 
                    :class="`bg-trso-${item.color}`">
                    {{ $t('pages.slug.relatedBooks') }}
                </h2>
                <div class="flex flex-wrap">
                    <div v-for="book in item.books" :key="book.id" class="my-2 w-full" :id="`bookThumb${book.id}`">
                        <PagesSlugBooksAccordion v-if="book" 
                                                 :book="book.attributes" 
                                                 :color="item.color"
                                                 @open-book-desc="changeBookContent(book.id)" />
                    </div>
                </div>
                <Transition name="fade">
                <helpersModal v-show="bookDescModalState"
                              @close-modal="bookDescModalState = false">
                    <div class="px-2 sm:px-4">
                        <pagesSlugBookIntro :book="selectedBookData" 
                                            :popup="true" 
                                            :color="item.color" />
                        <p v-if="selectedBookData.description?.length"
                        class="text-justify text-sm lg:text-base">
                            {{ selectedBookData.description }}
                        </p>
                    </div>
                </helpersModal>
                </Transition>
            </section>
            <PagesSlugDetail :itemAttr="item.attr" :itemLangAttr="item.langAttr" :bookAttr="item.firstBook.attributes"/>
            <PagesSlugComments :bookTitle="item.firstBook.attributes.title" />
        </div>
    </div>
</template>
    
<script setup>
    
    const { locale, t } = useI18n()

    const runtimeConfig = useRuntimeConfig()

    const route = useRoute()
    
    const id = route.params.id

    /****** books description when click 'read more' button *******/

    const bookDescModalState = ref(false)

    /***************/
   
    const fields = `fields[0]=imdbId&fields[1]=poster&fields[2]=type&fields[3]=ratings`
    const filters = `filters[item_lang][locale][$eq]=${locale.value}`
    const populateItemLang = `populate[item_lang][fields][0]=title&populate[item_lang][fields][1]=plot&populate[item_lang][fields][2]=slug`
    const populateBooks = `populate[books][fields][0]=title&populate[books][fields][1]=description&populate[books][fields][2]=thumbnail&populate[books][fields][3]=authors&populate[books][fields][4]=firstBook&populate[books][fields][5]=published&populate[books][fields][6]=publisher&populate[books][fields][7]=subtitle`
    const params = `${fields}&${filters}&${populateItemLang}&${populateBooks}`
    
    const { data } = await useFetch(`${runtimeConfig.public.API_BASE_URL}items/${id}?${params}`)
    
    const item = computed( () => {

        if (!data.value.data) 
            return null

        const attr = data.value.data.attributes

        const langAttr = attr.item_lang.data.attributes

        const books = attr.books.data

        const firstBook = books.find((book) => book.attributes.firstBook === true)

        const plotSplit = langAttr.plot.split('.')

        const plotForMeta = `${plotSplit[0]}.`;
            
        const color = attr.type === 'series' ? 'yellow' : 'blue'

        return { attr, langAttr, books, firstBook, plotForMeta, color}
        
    })

    const selectedBookData = reactive({
        thumbnail: '',
        title: '',
        authors: '',
        publisher: '',
        description: ''

    })

    function changeBookContent(id) {

        bookDescModalState.value = true

        const book = item.value.books.find((book) => book.id === id)

        const bookAttr = book.attributes

        selectedBookData.thumbnail = bookAttr.thumbnail,
        selectedBookData.title = bookAttr.title,
        selectedBookData.authors = bookAttr.authors,
        selectedBookData.publisher = bookAttr.publisher
        selectedBookData.description = bookAttr.description

    }

    

    useHead({
        title: `${runtimeConfig.public.websiteName} - ${t('pages.slug.what')} ${t('pages.slug.the')} ${item.value.attr.type} ${item.value.langAttr.title} ${t('pages.slug.on')}`,
        meta: [
            { name: 'description', content: `${t('pages.slug.hidDescription1')} ${item.value.attr.type } ${t('pages.slug.hidDescription2')} ${item.value.firstBook.attributes.title}`},
            { name: 'keywords', content: `${t('pages.slug.hidKeywords')}`},
            { property: 'og:site_name', content: runtimeConfig.public.websiteName },
            { property: 'og:description', content: `${t('pages.slug.the')} ${item.value.attr.type} ${item.value.langAttr.title} ${t('pages.slug.hidOgDescription')} ${item.value.firstBook.attributes.title}. ${item.plotForMeta}` },
            { property: "og:image", content: item.value.attr.poster },
            { property: 'twitter:title', content: runtimeConfig.public.websiteName },
            { property: 'twitter:description', content: `${t('pages.slug.the')} ${item.value.attr.type} ${item.value.langAttr.title} ${t('pages.slug.hidOgDescription')} ${item.value.firstBook.attributes.title}. ${item.plotForMeta}` },
            { property: "twitter:image:src", content: item.value.attr.poster },
        ]
    })
    
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>