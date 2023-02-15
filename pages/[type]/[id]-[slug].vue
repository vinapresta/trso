<template>
    <div class="px-4" itemscope itemtype="http://schema.org/Movie">
        <span class="block py-2 px-2 text-white text-center" :class="item.attr.type === 'series' ? 'bg-trso-yellow' : 'bg-trso-blue'">{{ $t('pages.movieDetail.what') }} {{ item.attr.type === 'series' ? $t('pages.movieDetail.theSeries') : $t('pages.movieDetail.theMovie') }} {{ item.langAttr.title }} {{ $t('pages.movieDetail.on') }}</span>
        <h1 class="text-xl text-center font-serif border px-8 py-4" :class="item.attr.type === 'series' ? 'border-trso-yellow' : 'border-trso-blue'" itemprop="name">
            <span class="block mb-2 md:mb-4 text-center">
                <i class="fas fa-film"></i>
                <span v-if="item.attr.type === 'series'">{{ $t('pages.movieDetail.theSeries') }}</span>
                <span v-else>{{ $t('pages.movieDetail.theMovie') }}</span>
            </span>   
            <span class="block mb-1 md:mb-2" :class="item.attr.type === 'series' ? 'text-trso-yellow' : 'text-trso-blue'">
                <span class="text-2xl sm:text-3xl md:text-4xl">{{ item.langAttr.title }}</span>
            </span>
            <span class="block text-center italic text-lg" v-if="item.attr.director || item.attr.year">
                <span v-if="item.attr.director != 'N/A'" itemprop="director">{{ $t('movie.director') }} {{ item.attr.director }}</span>
                <span v-if="item.attr.director && item.attr.year">{{ $t('pages.movieDetail.and') }}</span>
                <span v-if="item.attr.year != ''">{{ $t('pages.movieDetail.released') }} {{ item.attr.year }}</span>
            </span>
            <span class="block pt-3 pb-2 md:pt-6 md:pb-4 font-bold">
                <i class="fas fa-book"></i>
                {{ $t('pages.movieDetail.from') }}
            </span>
            <span class="block mb-1 md:mb-2" :class="item.attr.type === 'series' ? 'text-trso-yellow' : 'text-trso-blue'" itemprop="name">
                <span class="text-2xl sm:text-3xl md:text-4xl">{{ item.firstBook.attributes.title }}</span>
            </span>
            <span class="block mb-2 md:mb-4 italic text-lg" itemprop="author" v-if="item.firstBook.attributes.authors">
                <span>{{ $t('pages.movieDetail.by') }}&nbsp;</span>
                <span v-for="(author, index) of item.firstBook.attributes.authors" :key="author.id">
                    <span v-if="index === Object.keys(item.firstBook.attributes.authors).length - 1 && item.firstBook.attributes.authors.length > 1">
                        {{ $t('pages.movieDetail.and') }} 
                    </span>
                    {{ author }}
                    <span v-if="index < Object.keys(item.firstBook.attributes.authors).length - 2">, </span>
                </span>
            </span>
        </h1>
        <div class="my-12">
            <PagesSlugBookDetail :book="item.firstBook.attributes" :type="item.attr.type" />
        </div>
        <div v-if="item.books != false && item.books.length">
            <h2 class="text-white font-bold py-2 px-4 text-base sm:text-lg md:text-xl text-center font-serif px-4 mb-2" 
                :class="item.attr.type === 'series' ? 'bg-trso-yellow' : 'bg-trso-blue'">
                {{ $t('pages.movieDetail.relatedBooks') }}
            </h2>
            <div class="flex flex-wrap">
                <div v-for="book in item.books" :key="book.id" class="my-2 w-full" :id="`bookThumb${book.id}`">
                    <PagesSlugBooksAccordion v-if="book" :book="book.attributes" :type="item.attr.type" />
                </div>
            </div>
        </div>
        <PagesSlugDetail :itemAttr="item.attr" :itemLangAttr="item.langAttr" :bookAttr="item.firstBook.attributes"/>
        <PagesSlugComments :bookTitle="item.firstBook.attributes.title" />
    </div>
    </template>
    
    <script setup>
    
    const { locale } = useI18n()
    
    const runtimeConfig = useRuntimeConfig()
    
    const route = useRoute()
    
    const id = route.params.id
   
    const fields = `fields[0]=imdbId&fields[1]=poster&fields[2]=type&fields[3]=ratings`
    const filters = `filters[item_lang][locale][$eq]=${locale.value}`
    const populateItemLang = `populate[item_lang][fields][0]=title&populate[item_lang][fields][1]=plot`
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

        return { attr, langAttr, books, firstBook }
    })
    
    </script>