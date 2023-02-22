<template>
    <div>
        <LayoutHeader />
        <LayoutSearch />
        <div class="container px-2 md:px-4 max-w-6xl mb-16">
            <slot />
        </div>
        <LayoutFooter />
        <LayoutToTop />
    </div>
</template>