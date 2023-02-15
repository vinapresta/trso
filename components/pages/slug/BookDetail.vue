<template>
<div class="mb-4 flex">
    <span class="block pr-4 w-1/6">
        <img class="w-full h-auto" v-if="book.thumbnail" :src="book.thumbnail" :alt="`${$t('pages.movieDetail.bookImgAlt')} ${book.title}`" />
    </span>
    <div class="w-5/6">
        <h2 class="mb-4">
            <span class="text-xl font-bold">{{ book.title }}</span>
            <span v-if="book.subtitle" class="text-sm">({{ book.subtitle }})</span>
            <span v-if="book.publisher || book.published" class="text-left text-xs italic block" :class="type === 'series' ? 'text-trso-yellow' : 'text-trso-blue'">
                <span v-if="book.publisher">{{ $t('pages.movieDetail.published') }} {{ book.publisher }}</span>
                <span v-if="book.published && book.published !='1000-01-01'">
                    <span v-if="book.publisher"> - </span>
                    {{ $formatDate(book.published, locale) }}
                </span>
            </span>    
        </h2> 
        <p class="text-left pb-2 text-base" v-if="readMoreState" itemprop="description">{{ book.description }}</p>
        <p class="text-left pb-2 text-base" v-else itemprop="description">{{ book.description.split(' ').slice(0, truncateLimit).join(' ') }}</p>
        <button class="btn block mx-auto mt-4 py-1 px-3 text-white font-bold rounded-b border-none" 
                :class="type === 'series' ? 'bg-trso-yellow' : 'bg-trso-blue'" 
                @click.prevent="readMoreState = !readMoreState" 
                v-if="book.description.split(' ').length > truncateLimit">
            <span v-if="!readMoreState">{{ $t('pages.movieDetail.more') }}</span>
            <span v-else>{{ $t('pages.movieDetail.less') }}</span>
        </button>
    </div>
</div>
</template>

<script setup>

const props = defineProps({
    book: Object,
    type: String
})

const { locale } = useI18n()

const { $formatDate } = useNuxtApp()

const readMoreState = ref(false)

const truncateLimit = 90

</script>

<style>

</style>