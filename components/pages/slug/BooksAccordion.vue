<template>
    <div class="mb-2 p-4 border" :class="`border-trso-${color}`">
        <!--<HelpersReadMore :color="color">
            <p>{{ book.description }}</p>
        </HelpersReadMore>-->
        <pagesSlugBookIntro :book="book" 
                            :popup="false"
                            :color="color" />
        <button v-if="book.description?.length"
                class="btn block mx-auto mt-2 py-1 px-3 text-white text-sm lg:text-base font-semibold border-none" 
                :class="`bg-trso-${color}`"
                @click="$emit('openBookDesc')">
            <span>{{ $t('pages.slug.more') }}</span>
        </button>
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