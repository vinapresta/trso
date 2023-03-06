<template>
    <button class="block fixed z-70 right-0 bottom-0 mb-14 mr-[12px] lg:mr-[24px] cursor-pointer"
            @click="goToTop()">
            <IconsArrowTop class="w-10 h-10 lg:w-14 lg:h-14 text-trso-blue"/>
    </button>
</template>

<script setup>

    function goToTop() {

        window.scroll({
            top: 20,
            behavior: 'smooth'
        })

    }

</script>
