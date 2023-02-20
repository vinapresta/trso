<template>
    <footer>
        <nav class="py-4 bg-trso-yellow text-white text-center">
            <ul class="flex justify-center items-center gap-x-4 font-semibold">
                <li><NuxtLink :to="localePath({ name: 'index' })">Tarseroo.com ©2023</NuxtLink></li>
                <li><NuxtLink :to="localePath({ name: 'privacy-policy' })" :title="$t('footer.privacy')">{{ $t('footer.privacy') }}</NuxtLink></li>
                <li><button @click="contactModalState = true">{{ $t('components.formsContact.title') }}</button></li>
            </ul>
        </nav>
        <Transition name="fade">
        <HelpersModal v-show="contactModalState" @close-modal="contactModalState = false">
            <FormsContactForm />
        </HelpersModal>
        </Transition>
    </footer>
</template>

<script setup>

    const localePath = useLocalePath()

    const contactModalState = ref(false)

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>