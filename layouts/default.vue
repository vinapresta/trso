<template>
    <div>
        <LayoutHeader />
        <LayoutSearch />
        <div class="container px-2 md:px-4 max-w-6xl mb-16 min-h-[90vh]">
            <slot />
        </div>
        <LayoutFooter />
        <LayoutToTop />
        <LayoutContactModal />
    </div>
</template>

<script setup>

</script>


<style>
html {
  scroll-behavior: smooth;
}
</style>



