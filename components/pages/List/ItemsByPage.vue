<template>
    <div>
        <PagesListPagination :page="page" 
                             :pagesCount="pagesCount" 
                             :routeName="routeName" 
                             :color="color"/>
        <div class="container grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4">
            <PagesItem v-for="item in items" 
                       :key="item.id" 
                       :itemData="item" 
                       :type="type" 
                       :lang="locale" 
                       :color="color" />
        </div>
        <PagesListPagination :page="page" 
                             :pagesCount="pagesCount" 
                             :routeName="routeName" 
                             :color="color"/>
    </div>
    
</template>

<script setup>

const props = defineProps ({
    items: Array,
    type: String,
    page: Number,
    routeName: String,
    color: String,
    pagesCount: Number
})

const { locale } = useI18n()

</script>