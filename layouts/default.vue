<template>
    <div>
        <header class="mb-16"
                :class="miniHeader || !isLargeScreen ? 'fixed z-50 w-full' : 'relative'">
            <LayoutHeaderNav ref="headerNav"
                             :class="miniHeader || !isLargeScreen ? 'py-1' : 'py-1 lg:py-4'"
                             :searchButtonState="searchButtonState"
                             :searchButtonVisible="miniHeader || !isLargeScreen"
                             :isLargeScreen="isLargeScreen"
                             @change-search-state="changeSearchSate()" />
            <Transition name="search" mode="out-in">
                <LayoutSearch ref="search" v-show="searchVisible" />
            </Transition>
        </header>
        <div class="h-[0px] w-full"
             id="menuObserver"></div>
        <div class="container px-2 md:px-4 min-h-[90vh] max-w-7xl mb-16"
             :style="miniHeader || !isLargeScreen ? `padding-top: calc(${height}px + 4rem)` : ''">
            <slot />
        </div>
        <LayoutFooter />
        <transition name="totop" mode="out-in">
            <LayoutToTop v-show="toTopState" />
        </transition>
        <LayoutContactModal />
        <!--<div class="fixed top-0 left-0 w-full z-90 text-red-500">{{ miniHeader }}</div>-->
    </div>
</template>

<script setup>
    import { useMediaQuery } from '@vueuse/core'
    import { useElementSize } from '@vueuse/core'

    const isLargeScreen = useMediaQuery('(min-width: 1024px)')

    const headerNav = ref(null)

    const { height } = useElementSize(headerNav)

    const search = ref(null)

    const toTopState = ref(false)

    const miniHeader = ref(false)

    const searchButtonState = ref(false)

    onMounted( () => {

        const menuObserver = document.getElementById('menuObserver')

        const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            const intersecting = entry.isIntersecting

            if (intersecting) {

                miniHeader.value = false

                searchButtonState.value = false
 
            } else {

                miniHeader.value = true

            }

        })
        }/*, 
        { threshold: 0.5 }*/)

        observer.observe(menuObserver)

    })

    const searchVisible = computed(() => {

        if (isLargeScreen.value) { 

            return miniHeader.value ? searchButtonState.value : true

        } else {

            return searchButtonState.value

        }

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
    transform: translateY(-500px);
    /*opacity: 0;*/
}
</style>



