<template>
    <div>
        <div class="text-justify pb-2 text-sm lg:text-base relative transition-all duration-500 ease before:transition-all before:duration-500 before:ease"
             :class="style"
             :ref="(e) => { contentRef = e }">
            <slot></slot>
        </div>
        <button v-if="buttonVisible"
                class="btn block mx-auto mt-2 py-1 px-3 text-white text-sm lg:text-base font-semibold border-none" 
                :class="`bg-trso-${color}`"
                @click="changeState()">
            <span v-if="readMoreState">{{ $t('pages.slug.more') }}</span>
            <span v-else>{{ $t('pages.slug.less') }}</span>
        </button>
    </div>
</template>

<script setup>

const props = defineProps({
    color: String
})

const cssRules = `max-h-12 overflow-hidden text-ellipsis before:opacity-1 before:bg-gradient-to-b before:from-transparent before:to-white before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0`

const contentRef = ref(null)

const readMoreState = ref(true)

const buttonVisible = ref(false)

const style = ref('')

onMounted(() => {

    const maxHeight = 48

    const delta = contentRef.value.clientHeight > maxHeight

    buttonVisible.value = delta

    readMoreState.value = delta

    style.value = delta ? cssRules : ``

})

function changeState() {

    readMoreState.value = !readMoreState.value

    style.value = readMoreState.value ? cssRules : `max-h-[2000px] before:opacity-0`

}

</script>