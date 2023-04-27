<template>
<div class="mb-4 lg:flex">
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
            <span class="block text-xl font-title font-semibold pb-1">{{ book.title }}</span>
            <span v-if="book.subtitle" class="block text-base pb-2">{{ book.subtitle }}</span>
            <span v-if="book.publisher || book.published" class="block text-left text-sm italic block" :class="`text-trso-${color}`">
                <span v-if="book.publisher">{{ $t('pages.slug.published') }} {{ book.publisher }}</span>
                <span v-if="book.published && book.published !='1000-01-01'">
                    <span v-if="book.publisher"> - </span>
                    {{ $formatDate(book.published, locale) }}
                </span>
            </span>    
        </h2>
        <HelpersReadMore v-if="book.description" :color="color">
            <p itemProp="description">
                {{ book.description }}
            </p>
        </HelpersReadMore>
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

</script>

<style>

</style>