<template>
    <div>
        <div class="relative h-full flex border px-2 pt-2 pb-10" :class="`border-trso-${color}`">
            <NuxtLink :to="localePath({ name: 'type-id-slug', params: { type: type, id: `${itemData.id}`, slug: `${langAttr.slug}`} })" 
                      :title="`${$t('components.item.linkTitle', {type: type, name: langAttr.title, book: firstBook.attributes.title})}`"
                      class="relative block self-center">
                <img v-if="firstBook.attributes.thumbnail" class="list-item__img self-center" :src="firstBook.attributes.thumbnail" :alt="`${$t('list.cover')} ${firstBook.attributes.title}`" />
                <img v-else-if="itemData.attributes.poster != 'N/A'" class="list-item__img self-center" :src="itemData.attributes.poster" :alt="`Poster ${langAttr.title}`" />
                <img v-else src="~/assets/img/image-not-available.jpg" class="list-item__img self-center" alt="image not available" />
            </NuxtLink>
            <div class="pl-2">
                <h2 class="w-full py-2 font-bold">
                    <NuxtLink :to="localePath({ name: 'type-id-slug', params: { type: type, id: `${itemData.id}`, slug: `${langAttr.slug}`} })" 
                                :title="`${$t('components.item.linkTitle', {type: type, name: langAttr.title, book: firstBook.attributes.title})}`">
                        <span>{{ langAttr.title }}</span>
                    </NuxtLink>
                    <span> ({{ itemData.attributes.year }})</span>
                    <span v-if="itemData.attributes.director != 'N/A'">
                        <span v-if="type === 'series'">{{ $t('pages.movieDetail.directedSeries') }}</span>
                        <span v-else>{{ $t('pages.movieDetail.directedMovie') }}</span>
                        <span> {{ itemData.attributes.director }}</span>
                    </span>
                </h2>
                <p>
                    <span v-if="type === 'tv-series'">{{ $t('pages.movieDetail.theSeries') }}</span>
                    <span v-else>{{ $t('pages.movieDetail.theMovie') }}</span>
                    <span>{{ $t('pages.movieDetail.from') }}</span>
                    <span v-if="firstBook">
                        <span>{{ firstBook.attributes.title }}</span>
                        <span v-if="firstBook.attributes.authors.length" class="block py-2 text-xs italic">
                            <span>{{ $t('list.written') }}</span>
                            <span v-for="(author, index) of firstBook.attributes.authors" :key="author.id" class="font-bold">
                                <span v-if="index === Object.keys(firstBook.attributes.authors).length - 1 && firstBook.attributes.authors.length > 1"> and  </span>{{ author }}<span v-if="index < Object.keys(firstBook.attributes.authors).length - 2">, </span>
                            </span>
                        </span>
                    </span>
                </p>
            </div>
            <NuxtLink class="text-center px-4 py-1 transition-colors duration-500 text-white rounded-sm block w-full absolute left-0 bottom-0" 
                        :class="`bg-trso-${color} hover:bg-trso-${color}2`" 
                        :to="localePath({ name: 'type-id-slug', params: { type: type, id: `${itemData.id}`, slug: `${langAttr.slug}`} })" 
                        :title="`${$t('components.item.linkTitle', {type: type, name: langAttr.title, book: firstBook.attributes.title})}`">
                <span class="font-bold">{{ $t('pages.movieDetail.more') }}</span>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>

const props = defineProps ({
    itemData: Object,
    type: String,
    lang: String, 
    color: String
})

const localePath = useLocalePath()

const firstBook = props.itemData.attributes.books.data[0]

const langAttr = props.itemData.attributes.item_lang.data.attributes

</script>

<style scoped>
.list-item__img {
    width: 100px;
    height: auto;
}
</style>