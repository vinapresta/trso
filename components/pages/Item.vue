<template>
    <div><!-- class="fade-in opacity-0 scale-50 transition-all origin-center" -->
        <div class="relative h-full flex border px-2 pt-2 pb-10" :class="`border-trso-${color}`">
            <NuxtLink :to="localePath({ name: 'type-id-slug', params: { type: type, id: `${itemData.id}`, slug: `${langAttr.slug}`} })" 
                      :title="`${$t('components.item.linkTitle', {type: type, name: langAttr.title, book: firstBook.attributes.title})}`"
                      class="relative block self-center w-1/4 md:w-1/5 lg:w-1/6">
                <!--<ImagesTarsier v-if="loading" class="mx-auto"/>-->
                <!-- v-if="firstBook.attributes.thumbnail" -->
                <nuxt-img loading="lazy"
                          placeholder="/img/tarsier.png"
                          class="list-item__img self-center placeholder:animate-bounce" 
                          :src="image.src" 
                          :alt="image.alt" />
            </NuxtLink>
            <div class="pl-2">
                <HelpersHeading :tag="route.path != '/' ? 'h2' : 'h3'" tagStyle="item">
                    <NuxtLink :to="localePath({ name: 'type-id-slug', params: { type: type, id: `${itemData.id}`, slug: `${langAttr.slug}`} })" 
                              :title="`${$t('components.item.linkTitle', {type: type, name: langAttr.title, book: firstBook.attributes.title})}`"
                              class="block">
                        <span>{{ langAttr.title }}&nbsp;</span>
                        <span class="text-sm">({{ itemData.attributes.year }})</span>
                    </NuxtLink>
                    <span v-if="itemData.attributes.director != 'N/A'" class="text-sm font-semibold">
                        <span v-if="type === 'series'">{{ $t('pages.slug.directedSeries') }}</span>
                        <span v-else>{{ $t('pages.slug.directedMovie') }}&nbsp;</span>
                        <span> {{ itemData.attributes.director }}</span>
                    </span>
                </HelpersHeading>
                <p class="text-sm">
                    <span v-if="type === 'tv-series'">{{ $t('pages.slug.theSeries') }}&nbsp;</span>
                    <span v-else>{{ $t('pages.slug.theMovie') }}&nbsp;</span>
                    <span>{{ $t('pages.slug.from') }}&nbsp;</span>
                    <span v-if="firstBook">
                        <span>{{ firstBook.attributes.title }}</span>
                        <span v-if="firstBook.attributes.authors.length" class="block py-2 text-xs italic">
                            <span>{{ $t('list.written') }}&nbsp;</span>
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
                <span class="font-bold">{{ $t('pages.slug.more') }}</span>
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

const route = useRoute()

const localePath = useLocalePath()

const { t } = useI18n()

const firstBook = props.itemData.attributes.books.data[0]

const langAttr = props.itemData.attributes.item_lang.data.attributes


const image = reactive({
    src: '',
    alt: ''
})

if (firstBook && firstBook.attributes.thumbnail) {

    image.src = firstBook.attributes.thumbnail
    image.alt = `${t('list.cover')} ${firstBook.attributes.title}`

} else if (props.itemData.attributes.poster.length){

    image.src = props.itemData.attributes.poster
    image.alt = `Poster ${langAttr.title}`

} else {

    image.src = '/img/tarsier.png'
    image.alt = t('image.na')
}

</script>

<style scoped>
.list-item__img {
    width: 100px;
    height: auto;
}
</style>