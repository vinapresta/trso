<template>
    <div>      
        <PagesListItemsByPage :type="type" :page="page" routeName="type-pages-page" />
    </div>
</template>

<script setup>

const route = useRoute()

const page = route.params.page

const type = route.params.type

</script>