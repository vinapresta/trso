<template>
    <div class="mb-2 p-4 border" :class="type === 'series' ? 'border-trso-yellow' : 'border-trso-blue'">
        <div class="flex flex-wrap items-center" :class="contentClass" @click.prevent="collapseContent">
            <img v-if="book.thumbnail" 
                 :src="book.thumbnail" 
                 :alt="`${$t('pages.movieDetail.bookImgAlt')} ${book.title}`" 
                 class="book-thumbnail w-1/4 md:w-auto w-auto md:h-24" />
            <div class="pl-2 sm:pl-4 md:pl-8 pr-0 sm:pr-4 md:pr-8 w-3/4 md:w-auto">
                <h3 class="text-white text-base md:text-lg"><span>{{ book.title }}</span></h3>
                <p v-if="book.authors" class="text-sm md:text-base">
                    <span>{{ $t('pages.movieDetail.written') }}</span>
                    <span v-for="(author, index) of book.authors" :key="author.id"><span v-if="index === Object.keys(book.authors).length - 1 && book.authors.length > 1"> {{ $t('pages.movieDetail.and') }}  </span>{{ author }}<span v-if="index < Object.keys(book.authors).length - 2">, </span></span>
                </p>
                <p v-if="book.publisher || book.published" class="text-xs md:sm">
                    <span v-if="book.publisher">{{ $t('pages.movieDetail.published') }} {{ book.publisher }}</span><span v-if="book.published && book.published !='1000-01-01'"><span v-if="book.publisher"> - </span>{{ $formatDate(book.published, lang) }}</span>
                </p>
            </div>
        </div>
        <div v-if="book.description" class="collapsible-content overflow-hidden" :class="active ? 'max-h-screen' : 'max-h-0'">
            <p class="py-4">{{ book.description }}</p>
        </div>
        <button class="btn block mx-auto py-1 px-3 text-white font-bold rounded-b border-none" 
                :class="type === 'series' ? 'bg-trso-yellow' : 'bg-trso-blue'" 
                v-if="book.description" 
                @click.prevent="collapseContent">
            <span v-if="!active">{{ $t('pages.movieDetail.more') }}</span>
            <span v-else>{{ $t('pages.movieDetail.less') }}</span>
        </button>
    </div>
</template>

<script setup>

defineProps({
    book: Object,
    type: String
})

const { $formatDate } = useNuxtApp()

const contentClass = ref('disabled')

const active = ref(false)

function collapseContent() {

    active.value ? contentClass.value = 'disabled' : contentClass.value = 'active'

    active.value = !active.value

}


</script>