<template>
    <div>okok
        <div v-for="item in data.data" :key="item.id">{{ item.id }}</div>
    </div>
</template>

<script setup>

    const runtimeConfig = useRuntimeConfig()

    const { data } = await useAsyncData('movies', () => $fetch('http://localhost:1337/api/movies'))

    console.log('ok')

</script>