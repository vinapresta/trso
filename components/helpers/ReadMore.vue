<template>
    <div>
        <div class="text-justify">
            <p class="text-left pb-2 text-sm lg:text-base" v-if="readMoreState" :itemprop="itemProp">{{ content }}</p>
            <p class="text-left pb-2 text-sm lg:text-base" v-else :itemprop="itemProp">{{ content.split(' ').slice(0, truncateLimit).join(' ') }}</p>
        </div>
        <button class="btn block mx-auto mt-4 py-1 px-3 text-white text-sm lg:text-base font-bold border-none" 
                :class="`bg-trso-${color}`" 
                @click="readMoreState = !readMoreState" 
                v-if="content.split(' ').length > truncateLimit">
            <span v-if="!readMoreState">{{ $t('pages.slug.more') }}</span>
            <span v-else>{{ $t('pages.slug.less') }}</span>
        </button>
    </div>
</template>

<script setup>

defineProps({
    content: String,
    type: String,
    truncateLimit: Number,
    itemProp: String,
    color: String
})

const readMoreState = ref(false)

</script>