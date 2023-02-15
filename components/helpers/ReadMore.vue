<template>
    <div>
        <div>
            <p class="text-left pb-2 text-base" v-if="readMoreState" :itemprop="itemProp">{{ content }}</p>
            <p class="text-left pb-2 text-base" v-else :itemprop="itemProp">{{ content.split(' ').slice(0, truncateLimit).join(' ') }}</p>
        </div>
        <button class="btn block mx-auto mt-4 py-1 px-3 text-white font-bold rounded-b border-none" 
                :class="type === 'series' ? 'bg-trso-yellow' : 'bg-trso-blue'" 
                @click.prevent="readMoreState = !readMoreState" 
                v-if="content.split(' ').length > truncateLimit">
            <span v-if="!readMoreState">{{ $t('pages.movieDetail.more') }}</span>
            <span v-else>{{ $t('pages.movieDetail.less') }}</span>
        </button>
    </div>
</template>

<script setup>

defineProps({
    content: String,
    type: String,
    truncateLimit: Number,
    itemProp: String
})

const readMoreState = ref(false)

</script>