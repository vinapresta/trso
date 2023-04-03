<template>
    <div>
        <header class="mb-4 md:mb-8 lg:mb-14" 
                :class="miniHeader === true ? `${headerTopRules} lg:fixed lg:z-50 lg:w-full transform transition duration-500 ease-in-out delay-200` : 'top-0'"
                ref="header">
            <LayoutHeaderNav :class="miniHeader === true ? 'py-1' : 'py-1 lg:py-4'"
                             :searchButtonState="searchButtonState"
                             :searchButtonVisible="searchButtonVisible"
                             @change-search-state="changeSearchSate()" />
            <transition name="search" mode="out-in">
                <LayoutSearch ref="search" v-show="miniHeader === true ? searchButtonState : true" />
            </transition>
        </header>
        <div class="container px-2 md:px-4 max-w-6xl mb-16">
            <p class="text-3xl mb-16">{{ $t('error.message')}}</p>
            <p class="text-lg text-center font-sans text-trso-yellow mb-8">
                <NuxtLink :to="localePath({ name: 'type-pages-page', params: { type: 'tv-series', page: 1 } })" 
                            :title="$t('header.series')"
                            class="flex items-center gap-x-2">
                    <i><IconsArrowRight class="h-5 w-5"/></i>
                    <span>{{ $t('error.series') }}</span>
                </NuxtLink>
            </p>  
            <p class="text-lg text-center font-sans text-trso-blue mb-8">
                <NuxtLink :to="localePath({ name: 'type-pages-page', params: { type: 'movies', page: 1 } })" 
                            :title="$t('header.series')"
                            class="flex items-center gap-x-2">
                    <i><IconsArrowRight class="h-5 w-5"/></i>
                    <span>{{ $t('error.movies') }}</span>
                </NuxtLink>
            </p> 
        </div>
        <LayoutFooter />
        <transition name="totop" mode="out-in">
            <LayoutToTop v-show="toTopState" />
        </transition>
        <LayoutContactModal />
    </div>
</template>

<script setup>

    const localePath = useLocalePath()

    const header = ref(null)

    const search = ref(null)

    const toTopState = ref(false)

    const miniHeader = ref(false)

    const searchButtonState = ref(false)

    const searchButtonVisible = ref(false)

    onMounted( () => {

        window.addEventListener('scroll', scrollListener, {passive: true})

    })

    onBeforeUnmount ( () => {

        window.removeEventListener('scroll', scrollListener)

    })

    function scrollListener() {

        toTopState.value = window.scrollY > 150

        if (window.scrollY > header.value.clientHeight) { 

            miniHeader.value = true

            searchButtonVisible.value = true

        } else {

            miniHeader.value = false

            searchButtonState.value = false

            searchButtonVisible.value = false

        }

    }

    const headerTopRules = computed(() => {

        return `lg:-top-[${header.value.clientHeight}px] lg:translate-y-[${header.value.clientHeight}px]`

    })

    function changeSearchSate() {

        searchButtonState.value = !searchButtonState.value

    }

</script>


<style>
html {
  scroll-behavior: smooth;
}

.totop-enter-active,
.totop-leave-active {
    transition: opacity 0.5s ease;
}

.totop-enter-from,
.totop-leave-to {
    opacity: 0;
}

.search-enter-active {
    transition: all 0.3s ease-out;
}

.search-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.search-enter-from,
.search-leave-to {
    transform: translateY(30px);
    opacity: 0;
}
</style>
