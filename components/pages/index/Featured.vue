<template>
    <ul>
        <li v-for="item in items.data" :key="item.id">{{ item.id }}</li>
    </ul>
</template>

<script setup>

    const runtimeConfig = useRuntimeConfig()

    const { data: items, pending, refresh, error } = await useFetch('http://localhost:1337/api/movies' )

    console.log('ok')

</script>