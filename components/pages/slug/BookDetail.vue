<template>
<div class="mb-4 lg:flex items-center">
    <span class="block pb-4 lg:pb-0 pr-4 w-full lg:w-1/6">
        <nuxt-img v-if="book.thumbnail"
                  class="mx-auto lg:mx-0 lg:w-full h-auto"
                  loading="lazy"
                  format="webp"
                  :src="book.thumbnail" 
                  :alt="`${$t('pages.slug.bookImgAlt')} ${book.title}`" />
    </span>
    <div class="w-full lg:w-5/6">
        <h2 class="mb-4">
            <span class="block text-xl font-bold pb-1">{{ book.title }}</span>
            <span v-if="book.subtitle" class="block text-sm pb-2">({{ book.subtitle }})</span>
            <span v-if="book.publisher || book.published" class="block text-left text-xs italic block" :class="`text-trso-${color}`">
                <span v-if="book.publisher">{{ $t('pages.slug.published') }} {{ book.publisher }}</span>
                <span v-if="book.published && book.published !='1000-01-01'">
                    <span v-if="book.publisher"> - </span>
                    {{ $formatDate(book.published, locale) }}
                </span>
            </span>    
        </h2> 
        <p class="text-left pb-2 text-sm lg:text-base" v-if="readMoreState" itemprop="description">{{ book.description }}</p>
        <p class="text-left pb-2 text-sm lg:text-base" v-else itemprop="description">{{ book.description.split(' ').slice(0, truncateLimit).join(' ') }}</p>
        <button class="btn block mx-auto mt-4 py-1 px-3 text-white text-sm lg:text-base font-bold border-none" 
                :class="`text-trso-${color}`" 
                @click.prevent="readMoreState = !readMoreState" 
                v-if="book.description.split(' ').length > truncateLimit">
            <span v-if="!readMoreState">{{ $t('pages.slug.more') }}</span>
            <span v-else>{{ $t('pages.slug.less') }}</span>
        </button>
    </div>
</div>
</template>

<script setup>

const props = defineProps({
    book: Object,
    type: String,
    color: String
})

const { locale } = useI18n()

const { $formatDate } = useNuxtApp()

const readMoreState = ref(false)

const truncateLimit = 90

</script>

<style>

</style>