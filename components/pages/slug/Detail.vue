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
            <p class="text-left pb-2" v-if="!readMoreActivated" itemprop="description">
                <span class="block font-bold mb-2">
                    {{ $t('pages.movieDetail.hidDescription1') }} {{ type }} {{ itemLangAttr.title }} {{ $t('pages.movieDetail.hidDescription2') }} {{ bookAttr.title }}?
                </span>
            </p>
            <HelpersReadMore :content="itemLangAttr.plot" :type="itemAttr.type" :truncateLimit="70" itemProp="description" />
            <!--<button class="btn block mx-auto py-1 px-3 text-white font-bold rounded-b border-none" :class="movie.type != 'series' ? 'bg-blue-300' : 'bg-yellow-300'" @click.prevent="changeReadMoreState()" v-if="showReadMore()"><span v-if="!readMoreActivated">{{ $t('pages.movieDetail.more') }}</span><span v-else>{{ $t('pages.movieDetail.less') }}</span></button>
            <ul class="py-8">
                <li v-for="rating of movie.ratings" :key="rating.key">
                    <span class="italic pb-2">{{ rating.Source }}:</span> <span :class="movie.type != 'series' ? 'text-blue-400' : 'text-yellow-400'">{{ rating.Value }}</span>
                </li>
            </ul>-->
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