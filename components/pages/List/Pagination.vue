<template>
    <nav class="py-4">
        <ul class="flex flex-wrap items-center justify-center text-sm lg:text-base">
            <li v-if="page > 1" 
                class="mx-1 my-2  ">
                <NuxtLink class="text-white font-bold h-8 w-8 flex items-center justify-center"
                          :class="color === 'blue' ? 'bg-trso-blue hover:bg-trso-blue2' : 'bg-trso-yellow hover:bg-trso-yellow2'"
                          :to="localePath({ name: routeName, params: { page: page - 1 } })">
                    <IconsChevronLeft class="h-4 w-4" />
                </NuxtLink>
            </li>
            <li class="pagination-first mx-1 my-2">
                <NuxtLink class="block text-white font-bold h-8 w-8 flex items-center justify-center"
                          :class="page != 1 ? colorClasses : colorClassesActive"
                          :to="localePath({ name: routeName, params: { page: 1 } })" >
                    1
                </NuxtLink>
            </li>
            <li v-if="page > MAX_PAGES" 
                class="mx-1 my-2">
                <span class="block font-bold h-8 w-auto flex items-center justify-center"
                      :class="color === 'blue' ? 'text-trso-blue' : 'text-trso-yellow'">
                    ...
                </span>
            </li>
            <li class="mx-1 my-2"
                v-for="displayedPage in pagination" 
                :key="displayedPage.id">
                <NuxtLink class="block text-white font-bold h-8 w-8 flex items-center justify-center"
                          :class="displayedPage != page ? colorClasses : colorClassesActive"
                          :to="localePath({ name: routeName, params: { page: displayedPage } })">
                    {{ displayedPage }}
                </NuxtLink>
            </li>
            <li v-if="page < pagesCount - MAX_PAGES" 
                class="mx-1 my-2">
                <span class="block font-bold h-8 w-auto flex items-center justify-center"
                      :class="color === 'blue' ? 'text-trso-blue' : 'text-trso-yellow'">
                    ...
                </span>
            </li>
            <li class="pagination-last mx-1 my-2">
                <NuxtLink class="block text-white font-bold h-8 w-8 flex items-center justify-center"
                          :class="page != pagesCount ? colorClasses : colorClassesActive" 
                          :to="localePath({ name: routeName, params: { page: pagesCount } })">
                    {{ pagesCount }}
                </NuxtLink>
            </li>
            <li v-if="page < pagesCount" 
                class="mx-1 my-2">
                <nuxt-link class="block text-white font-bold h-8 w-8 flex items-center justify-center"
                           :class="color === 'blue' ? 'bg-trso-blue hover:bg-trso-blue2' : 'bg-trso-yellow hover:bg-trso-yellow2'"
                           :to="localePath({ name: routeName, params: { page: page + 1 } })">
                    <IconsChevronRight class="h-4 w-4" />
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script setup>

    const props = defineProps({
        pagesCount: Number,
        page: Number,
        routeName: String,
        color: String
    })

    const MAX_PAGES = 3

    const localePath = useLocalePath()

    const isFirst = ref()

    const isLast = ref()

    const isCurrent = (n) => {

        return (parseInt(n) === parseInt(props.page))

    }

    const colorClasses = computed(() => {

       return props.color === 'blue' ? 'bg-trso-blue hover:bg-trso-blue2' : 'bg-trso-yellow hover:bg-trso-yellow2'

    })

    const colorClassesActive = computed(() => {

        return props.color === 'blue' ? 'bg-trso-blue2' : 'bg-trso-yellow2'

    })

    const pagination = computed(() => {

        const page = props.page
        const pagesCount = props.pagesCount

        if(pagesCount > MAX_PAGES) {

            if (page <= MAX_PAGES)
                return Array.from({length: MAX_PAGES}, (v, i) => i + 2)

            if (page > pagesCount - MAX_PAGES)
                return Array.from({length: MAX_PAGES}, (v, i) => (pagesCount -1) - i).reverse()

            return [page - 1, page, page + 1]

        } else {

            const pagesArray = Array.from({length: MAX_PAGES}, (v, i) => i + 1)

            return pagesArray.slice(1,-1).splice(0, pagesArray.length - 1)

        }

    })


</script>
