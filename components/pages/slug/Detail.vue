<template>
    <div class="flex flex-wrap">
        <div class="sm:w-1/6 py-2 mx-auto pr-4">
            <img v-if="itemAttr.poster != 'N/A'" :src="itemAttr.poster" :alt="`Poster ${itemLangAttr.title}`" class="inline-block" />
            <img v-else src="~/assets/img/image-not-available.jpg" alt="image not available" class="inline-block" />
        </div>
        <div class="sm:w-5/6 py-2">
            <!--<Social :movieTitle="movie[`movies_${$i18n.locale}`]['title']"
                    :bookTitle="movie[`movies_${$i18n.locale}`]['bookTitle']" 
                    :bookAuthor="movie.authorName"
                    :url="url"
                    :movieType="movie.type" />-->
            <span class="block font-bold mb-2 text-center lg:text-justify">
                {{ $t('pages.slug.hidDescription1') }} {{ itemAttr.type }} {{ itemLangAttr.title }} {{ $t('pages.slug.hidDescription2') }} {{ bookAttr.title }}?
            </span>
            <HelpersReadMore :content="itemLangAttr.plot" :truncateLimit="70" itemProp="description" :color="color" />
            <ul class="py-8 text-sm lg:text-base">
                <li v-for="rating of itemAttr.ratings" :key="rating.key">
                    <span class="italic pb-2">{{ rating.Source }}:</span>&nbsp;
                    <span class="font-semibold" :class="`text-trso-${color}`">
                        {{ rating.Value }}
                    </span>
                </li>
            </ul>
        </div>
    </div>  
</template>

<script setup>

const props = defineProps({
    itemAttr: Object,
    itemLangAttr: Object,
    bookAttr: Object
})

const color = props.itemAttr.type === 'series' ? 'yellow' : 'blue'

</script>