<template>
    <div class="share-network-list flex justify-end items-center gap-x-2 px-2 py-2">
        <ShareNetwork v-for="network in networks"
                     :network="network.network"
                     :key="network.network"
                     :url="`${runtimeConfig.public.BASE_URL}${route.fullPath}`"
                     :title="title"
                     :description="description"
                     quote="whesh la zone"
                     :hashtags="tags"
                     class="p-1 bg-trso-blue"
          >
            <component :is="network.icon" class="h-6 w-6" />
        </ShareNetwork>
    </div>    
</template>

<script setup>

    const props = defineProps({
        title: String,
        description: String,
        quote: String,
        hashtags: String
    })

    const runtimeConfig = useRuntimeConfig()

    const route = useRoute()

    const networks = [
        { network: 'facebook', name: 'Facebook', icon: resolveComponent('IconsFacebook') },
        { network: 'twitter', name: 'Twitter', icon: resolveComponent('IconsTwitter') },
    ]

    const tags = ref('')

    onMounted(() => {

        tags.value = props.hashtags?.replace(', ', ',')

    })

</script>