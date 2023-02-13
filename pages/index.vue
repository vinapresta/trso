<template>
    <div>
        <ul>
            <li v-for="item in items.data" :key="item.id">{{ item.id }}</li>
        </ul>
    </div>
</template>

<script setup>

const { data: items, pending, refresh, error } = await useFetch(() => 'http://localhost:1337/api/movies')

</script>