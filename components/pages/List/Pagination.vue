<template>
    <nav class="py-4">
        <ul class="flex flex-wrap items-center justify-center text-sm lg:text-base">
            <li v-if="page > 2" class="mx-1 my-2 text-white" :class="`bg-trso-${color} hover:bg-trso-${color}2`">
                <NuxtLink class="block font-bold h-8 w-8 flex items-center justify-center rounded" :to="localePath({ name: routeName, params: { page: 1 } })" v-bind:class="isFirst">1</NuxtLink>
            </li>
            <li v-if="page > 1" class="mx-1 my-2 text-white" :class="`bg-trso-${color} hover:bg-trso-${color}2`">
                <NuxtLink class="font-bold h-8 w-8 flex items-center justify-center rounded" :to="localePath({ name: routeName, params: { page: page - 1 } })">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </NuxtLink>
            </li>
            <li v-if="page > 2" class="mx-1 my-2" :class="`text-trso-${color}`">
                <span class="block font-bold px-3 py-2 align-middle">...</span>
            </li>
            <li class="mx-1 my-2 text-white" v-for="visiblePage in visiblePages" :key="visiblePage.key" v-bind:class="isCurrent(visiblePage)">
                <NuxtLink class="block font-bold h-8 w-8 flex items-center justify-center" :to="localePath({ name: routeName, params: { page: visiblePage } })">{{ visiblePage }}</NuxtLink>
            </li>
            <li v-if="page < pagesCount - 1" class="mx-1 my-2" :class="`text-trso-${color}`">
                <span class="block font-bold h-8 w-auto flex items-center justify-center">...</span>
            </li>
            <li v-if="page < pagesCount" class="mx-1 my-2 text-white" :class="`bg-trso-${color} hover:bg-trso-${color}2`">
                <nuxt-link class="block font-bold h-8 w-8 flex items-center justify-center" :to="localePath({ name: routeName, params: { page: page + 1 } })">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                </nuxt-link>
            </li>
            <li v-if="page < pagesCount - 1" class="mx-1 my-2 text-white" :class="`bg-trso-${color} hover:bg-trso-${color}2`">
                <NuxtLink class="block font-bold h-8 w-8 flex items-center justify-center" :to="localePath({ name: routeName, params: { page: pagesCount } })" v-bind:class="isLast">{{ pagesCount }}</NuxtLink>
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

    const localePath = useLocalePath()

    const isFirst = ref()

    const isLast = ref()

    const visiblePages = ref()

    const isCurrent = (n) => {

        return (parseInt(n) === parseInt(props.page)) ? `bg-trso-${props.color}2` : `bg-trso-${props.color}`

    }

    const visiblePagesArray = () => {

        const pages  = Array.from({length: props.pagesCount}, (v, i) => i + 1)

        if (pages.length < 3) 
            return pages

        const first = pages[0];

        const last = pages[pages.length - 1];

        let pagesArray = [] 

        switch (props.page) {

            case first:
            pagesArray = [ first , pages[1], pages[2] ]
            break

            case last:
            pagesArray = [ pages[pages.length - 3], pages[pages.length - 2], last ]
            break

            default:
            pagesArray = [ pages[props.page - 2], pages[props.page -1], pages[props.page] ]
        }

        return pagesArray

    }

    onMounted(() => {

        isFirst.value = parseInt(props.page) === 1 ? `bg-trso-${props.color}2` : `bg-trso-${props.color}`

        isLast.value = parseInt(props.page) === parseInt(props.pagesCount) ? `bg-trso-${props.color}2` : `bg-trso-${props.color}`

        visiblePages.value = visiblePagesArray()
  
    })

</script>
