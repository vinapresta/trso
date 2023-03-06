<template>
    <div class="mb-2 p-4 border" :class="`border-trso-${color}`">
        <div class="flex flex-wrap items-center" :class="contentClass" @click.prevent="collapseContent">
            <img v-if="book.thumbnail" 
                 :src="book.thumbnail" 
                 :alt="`${$t('pages.slug.bookImgAlt')} ${book.title}`" 
                 class="w-1/4 w-auto w-auto h-24" />
            <div class="pl-2 sm:pl-4 md:pl-8 pr-0 sm:pr-4 md:pr-8 w-3/4 md:w-auto">
                <h3 class="text-white text-base md:text-lg"><span>{{ book.title }}</span></h3>
                <p v-if="book.authors" class="text-sm md:text-base">
                    <span>{{ $t('pages.slug.written') }}</span>
                    <span v-for="(author, index) of book.authors" :key="author.id"><span v-if="index === Object.keys(book.authors).length - 1 && book.authors.length > 1"> {{ $t('pages.slug.and') }}  </span>{{ author }}<span v-if="index < Object.keys(book.authors).length - 2">, </span></span>
                </p>
                <p v-if="book.publisher || book.published" class="text-xs md:sm">
                    <span v-if="book.publisher">{{ $t('pages.slug.published') }} {{ book.publisher }}</span><span v-if="book.published && book.published !='1000-01-01'"><span v-if="book.publisher"> - </span>{{ $formatDate(book.published, locale) }}</span>
                </p>
            </div>
        </div>
        <HelpersReadMore :color="color">
            <p>{{ book.description }}</p>
        </HelpersReadMore>
    </div>
</template>

<script setup>

defineProps({
    book: Object,
    color: String
})

const { locale } = useI18n()

const { $formatDate } = useNuxtApp()

const contentClass = ref('disabled')

</script>