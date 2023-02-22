<template>
    <div class="mb-2 p-4 border" :class="type === 'series' ? 'border-trso-yellow' : 'border-trso-blue'">
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
                    <span v-if="book.publisher">{{ $t('pages.slug.published') }} {{ book.publisher }}</span><span v-if="book.published && book.published !='1000-01-01'"><span v-if="book.publisher"> - </span>{{ $formatDate(book.published, lang) }}</span>
                </p>
            </div>
        </div>
        <div v-if="book.description" class="collapsible-content overflow-hidden" :class="active ? 'max-h-screen' : 'max-h-0'">
            <p class="py-4 text-sm lg:text-base">{{ book.description }}</p>
        </div>
        <button class="btn block mx-auto mt-2 py-1 px-3 text-white text-sm lg:text-base font-semibold border-none" 
                :class="type === 'series' ? 'bg-trso-yellow' : 'bg-trso-blue'" 
                v-if="book.description" 
                @click.prevent="collapseContent">
            <span v-if="!active">{{ $t('pages.slug.more') }}</span>
            <span v-else>{{ $t('pages.slug.less') }}</span>
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