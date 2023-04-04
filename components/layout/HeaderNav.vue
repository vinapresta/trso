<template>
    <div class="relative w-full bg-trso-blue border-b-2 border-trso-yellow">
        <IconsHamburger @click="menuMobileState = !menuMobileState"/>
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
                <ul v-if="menuMobileState || isLargeScreen" class="max-h-[200px] lg:max-h-auto lg:flex items-center gap-x-4 text-center font-semibold text-sm lg:text-base uppercase text-white">
                    <li v-for="menuItem in menu" :key="menuItem.id">
                        <LayoutMenuButton :to="menuItem.to" 
                                          :name="menuItem.name" />
                    </li>
                    <!--<LayoutMenuButton>
                        <NuxtLink :to="localePath({ name: 'type-pages-page', params: { type: 'movies', page: 1 } })">
                            {{ $t('header.movies') }}
                        </NuxtLink>
                    </LayoutMenuButton>
                    <LayoutMenuButton>
                        <NuxtLink :to="localePath({ name: 'type-pages-page', params: { type: 'tv-series', page: 1 } })">
                            {{ $t('header.series') }}
                        </NuxtLink>
                    </LayoutMenuButton>-->
                </ul>
            </transition>
            <button v-if="searchButtonVisible"
                    class="flex items-center gap-x-2 ml-auto" 
                    @click="$emit('changeSearchState')">
                <IconsSearch class="text-white h-5 w-5"/>
                <span v-if="!searchButtonState" class="text-white">
                    {{ $t('header.search') }}
                </span>
                <span v-else class="text-white">
                    {{ $t('header.closeSearch') }}
                </span>
            </button>
        </nav>
    </div>
</template>

<script setup>
    import { useMediaQuery } from '@vueuse/core'

    const route = useRouteBaseName()

    const { t } = useI18n()

    const isLargeScreen = useMediaQuery('(min-width: 1024px)')

    const localePath = useLocalePath()

    defineProps({
        searchButtonVisible: Boolean,
        searchButtonState: Boolean
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
    transition: all 0.3s ease-out;
}

.toggle-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.toggle-fade-enter-from,
.toggle-fade-leave-to {
    max-height: 0;
    opacity: 0;
}

</style>

