<template>
<div>
    <div class="items-center"
         :class="popup ? '' : 'flex flex-wrap'">
            <img v-if="book.thumbnail" 
                 :src="book.thumbnail" 
                 :alt="`${$t('pages.slug.bookImgAlt')} ${book.title}`"
                 class="block" 
                 :class="popup ? 'mx-auto mb-4' : 'w-auto h-24'" />
            <div :class="popup ? 'w-full' : 'pl-2 sm:pl-4 md:pl-8 pr-0 sm:pr-4 md:pr-8 w-3/4 md:w-auto'">
                <h3 class="text-sm md:text-base font-title font-semibold mb-2"
                    :class="textColor">
                    <span>
                        {{ book.title }}
                    </span>
                </h3>
                <div :class="popup ? 'mb-2 flex flex-warp gap-x-2 items-center font-medium' : ''">
                    <p v-if="book.authors" 
                    class="text-sm italic">
                        <span class="inline-block me-1">
                            {{ $t('pages.slug.written') }}
                        </span>
                        <span v-for="(author, index) of book.authors" 
                            :key="author.id">
                            <span v-if="index === Object.keys(book.authors).length - 1 && book.authors.length > 1"> {{ $t('pages.slug.and') }}  </span>{{ author }}<span v-if="index < Object.keys(book.authors).length - 2">, </span></span>
                    </p>
                    <span v-if="popup">-</span>
                    <p v-if="book.publisher || book.published" 
                    class="text-sm">
                        <span v-if="book.publisher">{{ $t('pages.slug.published') }} {{ book.publisher }}</span><span v-if="book.published && book.published !='1000-01-01'"><span v-if="book.publisher"> - </span>{{ $formatDate(book.published, locale) }}</span>
                    </p>
                </div>
            </div>
    </div>
</div>
</template>

<script setup>

const props = defineProps({
    book: Object,
    popup: Boolean,
    color: String
})

const textColor = computed(() => {

    return `text-trso-${props.color}`

})

</script>