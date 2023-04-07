<template>
    <footer class="fixed left-0 bottom-0 w-full z-50 bg-trso-yellow bg-opacity-80">
        <nav class="py-4 text-white text-center max-w-7xl mx-auto">
            <ul class="flex justify-center items-center gap-x-4 font-semibold">
                <li><NuxtLink :to="localePath({ name: 'index' })">Tarseroo.com ©2023</NuxtLink></li>
                <li><NuxtLink :to="localePath({ name: 'privacy-policy' })" :title="$t('footer.privacy')">{{ $t('footer.privacy') }}</NuxtLink></li>
                <li><button @click="contactModalState = true">{{ $t('components.formsContact.title') }}</button></li>
            </ul>
        </nav>
    </footer>
</template>

<script setup>

    const localePath = useLocalePath()

    const contactModalState = useState('contactModalState', () => false)

</script>