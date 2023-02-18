<template>
    <transition name="totop" mode="out-in">
        <a :href="`${route.path}#mainMenu`" v-show="toTopVisible" class="block fixed z-40 right-0 bottom-0 mb-24 mr-[24px] cursor-pointer">
            <IconsArrowTop class="w-14 h-14 text-trso-blue"/>
        </a>
    </transition>
</template>

<script setup>

    const route = useRoute()

    const toTopVisible = ref(false)

    function scrollListener () {
            
            toTopVisible.value = window.scrollY > 150;

            console.log(toTopVisible.value)
            
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
