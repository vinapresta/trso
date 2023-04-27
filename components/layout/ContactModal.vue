<template>
    <div>
    <Transition name="fade">
        <HelpersModal v-show="contactModalState"
                      @close-modal="contactModalState = false">
            <FormsContactForm />
        </HelpersModal>
        </Transition>
    </div>
</template>

<script setup>

const contactModalState = useState('contactModalState')

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