<template>
    <ul class="flex flex-wrap justify-center items-center gap-4 isolate ">
        <li v-for="tag in tags.data" 
            :key="tag.id"
            class="grow-1
                   relative px-2 lg:px-4 py-1 lg:py-2 text-white
                   before:content-[''] 
                   before:absolute after:top-4 before:left-0 before:-z-10
                   before:inset-0 hover:before:scale-x-110 hover:before:scale-y-125 hover:before:opacity-0
                   before:origin-center before:transition-all before:duration-500"
            :class="tag.attributes.type === 'series' ? 'bg-trso-yellow before:bg-trso-yellow' : 'bg-trso-blue before:bg-trso-blue'">
            <NuxtLink :to="localePath({ name: 'type-id-slug', params: { type: tag.attributes.type === 'series' ? 'tv-series' : 'movies', id: tag.id, slug: tag.attributes.item_lang.data.attributes.slug } })" 
                      :title="tag.attributes.item_lang.data.attributes.title"
                      class="font-medium text-sm lg:text-base">
                {{ tag.attributes.item_lang.data.attributes.title }}
            </NuxtLink>
        </li>
    </ul>
</template>


<script setup>

const runtimeConfig = useRuntimeConfig()

const { locale, t } = useI18n()

const localePath = useLocalePath()

const fields = `fields[0]=type`
const filters = `filters[item_lang][locale][$eq]=${locale.value}&filters[item_lang][isTag][$eq]=true`
const populate = `populate[item_lang][fields][0]=title&populate[item_lang][fields][1]=slug`
const params = `${fields}&${filters}&${populate}`
const url = `${runtimeConfig.public.API_BASE_URL}items?${params}`

const { data: tags } = await useFetch(url)

</script>
