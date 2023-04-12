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

onMounted(() => {

    const itemElements = Array.from(document.getElementsByClassName('fade-in'))

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            const intersecting = entry.isIntersecting

            if (intersecting) {

                entry.target.style.opacity = '1'
                entry.target.style.transform = 'scale(1)'
                
                observer.unobserve(entry.target)
            }

        })
    }, 
    { threshold: 0.5 })

    itemElements.forEach(item => {

        observer.observe(item)
    })

})

</script>