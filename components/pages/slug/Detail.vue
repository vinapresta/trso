<template>
    <div class="flex flex-wrap py-12">
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
            <span class="block font-bold mb-2">
                {{ $t('pages.movieDetail.hidDescription1') }} {{ itemAttr.type }} {{ itemLangAttr.title }} {{ $t('pages.movieDetail.hidDescription2') }} {{ bookAttr.title }}?
            </span>
            <HelpersReadMore :content="itemLangAttr.plot" :type="itemAttr.type" :truncateLimit="70" itemProp="description" />
            <ul class="py-8">
                <li v-for="rating of itemAttr.ratings" :key="rating.key">
                    <span class="italic pb-2">{{ rating.Source }}:</span>&nbsp;
                    <span :class="itemAttr.type != 'series' ? 'text-blue-400' : 'text-yellow-400'">
                        {{ rating.Value }}
                    </span>
                </li>
            </ul>
        </div>
    </div>  
</template>

<script setup>

defineProps({
    itemAttr: Object,
    itemLangAttr: Object,
    bookAttr: Object
})

</script>