<template>
    <footer>
        <nav>
            <ul>
                <li>{{ $t('footer.privacy') }}</li>
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