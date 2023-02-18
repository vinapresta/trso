<template>
    <div>      
        <LayoutBreadcrumbs :levels="[ { name: type, route: { name: 'type-pages-page', params: { type: type, page: 1 } } }, { name: `page ${String(page)}` }]"/>
        <PagesListItemsByPage :type="type" :page="page" routeName="type-pages-page" />
    </div>
</template>

<script setup>

const route = useRoute()

const page = route.params.page

const type = route.params.type

</script>