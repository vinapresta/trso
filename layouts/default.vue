<template>
    <div>
        <LayoutHeader />
        <LayoutSearch />
        <div class="container max-w-6xl mb-16">
            <slot />
        </div>
        <LayoutFooter />
        <LayoutToTop />
    </div>
</template>