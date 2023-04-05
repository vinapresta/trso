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
        <div class="container px-2 md:px-4  min-h-[90vh] max-w-7xl mb-16">
            <slot />
        </div>
        <LayoutFooter />
        <transition name="totop" mode="out-in">
            <LayoutToTop v-show="toTopState" />
        </transition>
        <LayoutContactModal />
    </div>
</template>

<script setup>

    import { useWindowScroll } from '@vueuse/core'

    const { x, y } = useWindowScroll()

    const header = ref(null)

    const search = ref(null)

    const toTopState = ref(false)

    const miniHeader = ref(false)

    /*const searchState = ref(true)*/

    const searchButtonState = ref(false)

    const searchButtonVisible = ref(false)

    /*const fadeInElements = ref([])

    const isElemVisible = (el) => {

        const rect = el.getBoundingClientRect()

        const elemTop = rect.top + 50 // 200 = buffer

        const elemBottom = rect.bottom

        return elemTop < window.innerHeight && elemBottom >= 0

    }*/

    onMounted( () => {

         /* ANIMATION LISTING ITEMS */

        //fadeInElements.value = Array.from(document.getElementsByClassName('fade-in'))

        /****************************/

        window.addEventListener('scroll', scrollListener, {passive: true})

        scrollListener()

    })

    onBeforeUnmount ( () => {

        window.removeEventListener('scroll', scrollListener)

    })

    function scrollListener() {

        toTopState.value = y.value > 150

        if (y.value > header.value.clientHeight) { 

            miniHeader.value = true

            searchButtonVisible.value = true

        } else {

            miniHeader.value = false

            searchButtonState.value = false

            searchButtonVisible.value = false

        }

        /* ANIMATION LISTING ITEMS */

        /*fadeInElements.value.forEach((elem, index) => {

            if (isElemVisible(elem)) {

                elem.style.opacity = '1'

                elem.style.transform = 'scale(1)'

                fadeInElements.value.splice(index, 1)

            }

        })*/


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



