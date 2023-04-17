<template>
    <div class="relative w-full bg-trso-blue transition-all duration-500 px-2 md:px-4">
        <IconsHamburger @click="menuMobileState = !menuMobileState"
                        class="block lg:hidden group absolute top-6 right-4 text-white h-8 w-8" />
        <nav>
            <NuxtLink :to="localePath({ name: 'index'})" :title="$t('pages.home.title')">
                <h1 class="text-center m-0">           
                    <img class="mx-auto lg:mx-0 w-[150px] h-[54px] mb-4 lg:mb-0" 
                        width="200" 
                        height="72" 
                        src="/img/logo_white_resize.png" 
                        alt="Tarseroo logo">
                </h1>        
            </Nuxtlink>
            <transition name="toggle-fade" mode="out-in">
                <ul v-if="menuMobileState || isLargeScreen"
                    class="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2
                        lg:flex items-center gap-x-4
                        max-h-[200px]  
                        text-center font-semibold text-sm lg:text-base uppercase text-white">
                    <li v-for="menuItem in menu" :key="menuItem.id">
                            <LayoutMenuButton :to="menuItem.to" 
                                            :name="menuItem.name" />
                    </li>
                </ul>
            </Transition>
        </nav>
        <button class="flex items-center gap-x-4 absolute top-6 lg:top-1/2 lg:-translate-y-1/2 left-4 lg:right-4 lg:left-auto"
                @click="$emit('changeSearchState')">
            <IconsSearch class="text-white h-5 w-5" />
            <span v-if="!searchButtonState" class="text-white">
                {{ $t('header.search') }}
            </span>
            <span v-else class="text-white">
                {{ $t('header.closeSearch') }}
            </span>
        </button> 
        <!--
        <nav class="lg:flex items-center 
                    max-w-7xl mx-auto
                    transition-[padding] ease-in-out delay-200" 
             id="mainMenu">
            <NuxtLink :to="localePath({ name: 'index'})" :title="$t('pages.home.title')"
                    class="lg:pr-8">
                <h1 class="text-center">           
                    <img class="mx-auto lg:mx-0 w-[150px] h-[54px] mb-4 lg:mb-0" 
                        width="200" 
                        height="72" 
                        src="/img/logo_white_resize.png" 
                        alt="Tarseroo logo">
                </h1>        
            </Nuxtlink>
            <transition name="toggle-fade" mode="out-in">
                <ul v-if="x-h-menuMobileState || isLargeScreen" class="max-h-[200px] lg:maauto lg:flex items-center gap-x-4 text-center font-semibold text-sm lg:text-base uppercase text-white">
                    <li v-for="menuItem in menu" :key="menuItem.id">
                        <LayoutMenuButton :to="menuItem.to" 
                                          :name="menuItem.name" />
                    </li>
                </ul>
            </transition>
            <button v-if="searchButtonVisible"
                    class="absolute lg:relative top-5 lg:top-0 left-4 lg:left-0 lg:flex items-center gap-x-2 lg:ml-auto"
                    @click="$emit('changeSearchState')">
                <IconsSearch class="text-white h-5 w-5 mx-auto lg:mx-0" />
                <span v-if="!searchButtonState" class="text-white">
                    {{ $t('header.search') }}
                </span>
                <span v-else class="text-white">
                    {{ $t('header.closeSearch') }}
                </span>
            </button> 
        </nav>-->
    </div>
</template>

<script setup>

    const { t } = useI18n()

    const localePath = useLocalePath()

    defineProps({
        searchButtonVisible: Boolean,
        searchButtonState: Boolean,
        isLargeScreen: Boolean
    })

    const menuMobileState = ref(false)

    const menu = [{ 
            to: localePath({ name: 'type-pages-page', params: { type: 'movies', page: 1 } }),
            name: t('header.movies') 
        },
        { 
            to: localePath({ name: 'type-pages-page', params: { type: 'tv-series', page: 1 } }),
            name: t('header.series')   
        }
    ]

</script>

<style scoped>
.toggle-fade-enter-active {
    transition: all 0.3s ease-in;
}

.toggle-fade-leave-active {
    transition: all 0.5s ease-out;
}

.toggle-fade-enter-from,
.toggle-fade-leave-to {
    max-height: 0;
    opacity: 0;
}

</style>

