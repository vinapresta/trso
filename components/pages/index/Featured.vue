<template>
    <div>
        <div v-for="item in items.data" :key="item.id">{{ item.id }}</div>
    </div>
</template>

<script setup>

    const runtimeConfig = useRuntimeConfig()

    const { data: items } = await useFetch('http://localhost:1337/api/movies')

</script>