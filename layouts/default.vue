<template>
    <div class="relative">
        <header class="fixed z-10 w-full"
                ref="header">
            <div class="relative">
                <LayoutHeaderNav class="py-1 lg:py-4 z-20"
                                :searchButtonState="searchButtonState"
                                :searchButtonVisible="searchButtonVisible"
                                :isLargeScreen="isLargeScreen"
                                @change-search-state="changeSearchSate()" />  
                
                <!--<div class="overflow-hidden">-->
                    <Transition name="search" mode="out-in">
                    <LayoutSearch v-if="searchButtonState"
                                ref="search" />
                    </Transition>
                <!--</div>-->
            </div>
        </header>
        <!--<header :class="miniHeader || !isLargeScreen ? 'fixed z-50 w-full' : 'relative'">
            <LayoutHeaderNav ref="headerNav"
                             :class="miniHeader || !isLargeScreen ? 'py-1' : 'py-1 lg:py-4'"
                             :searchButtonState="searchButtonState"
                             :searchButtonVisible="searchButtonVisible"
                             :isLargeScreen="isLargeScreen"
                             @change-search-state="changeSearchSate()" />
            <Transition name="search" mode="out-in">
                <LayoutSearch ref="search" v-show="searchVisible" />
            </Transition>
        </header>
        <div class="w-full h-16 bg-red-400"
             id="menuObserver"></div>
        <div id="main"
             class="container px-2 md:px-4 min-h-[90vh] max-w-7xl mb-16"
             :style="miniHeader || !isLargeScreen ? `padding-top: calc(${height}px + 4rem)` : ''">
            <slot></slot>
        </div>-->
        <div id="main"
             class="container px-2 md:px-4 min-h-[90vh] max-w-7xl mb-16 transition-all duration-500"
             :style="`padding-top: ${height/16 + 4}rem`">
            <slot></slot>
        </div>
        <LayoutFooter />
        <transition name="totop" mode="out-in">
            <LayoutToTop v-show="toTopState" />
        </transition>
        <LayoutContactModal />
    </div>
</template>

<script setup>
    import { useMediaQuery } from '@vueuse/core'
    import { useElementSize } from '@vueuse/core'

    const isLargeScreen = useMediaQuery('(min-width: 1024px)')

    const header = ref()

    const { height } = useElementSize(header)

    const search = ref(null)

    const toTopState = ref(false)

    const miniHeader = ref(false)

    const searchButtonState = ref(true)

    function changeSearchSate() {

        searchButtonState.value = !searchButtonState.value
        
    }

    const searchButtonVisible = computed(() => {

        return !isLargeScreen.value || ( isLargeScreen.value && miniHeader.value )

    })

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
    transition: all 0.5s ease-in-out;
}

.search-enter-from,
.search-leave-to {
    /*opacity: 0;*/
    transform: translateY(-500px);
}
</style>



