<template>
    <transition name="totop" mode="out-in">
        <a :href="`${route.path}#mainMenu`" v-show="toTopVisible" class="block fixed z-70 right-0 bottom-0 mb-14 mr-[12px] lg:mr-[24px] cursor-pointer">
            <IconsArrowTop class="w-10 h-10 lg:w-14 lg:h-14 text-trso-blue"/>
        </a>
    </transition>
</template>

<script setup>

    const route = useRoute()

    const toTopVisible = ref(false)

    function scrollListener () {
            
        toTopVisible.value = window.scrollY > 150;
            
    }

    onMounted( () => {

        window.addEventListener('scroll', scrollListener, {passive: true})

    })

    onBeforeUnmount ( () => {

        window.removeEventListener('scroll', scrollListener)

    })

</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}
</style>
