<template>
    <div class="fixed flex justify-center items-center z-50 inset-0 bg-black/75 cursor-pointer" @click="contactModalState = false">
        <div class="modal-content overflow-y-auto bg-white 
                    w-5/6 md:w-4/5 lg:w-3/5 px-8 py-8 max-h-[80vh]
                    scrollbar scrollbar-thumb-trso-blue scrollbar-track-trso-blue-light" 
             @click.stop>
            <div class="overflow-y-auto">
                <div class="flex justify-end items-center">
                    <button @click="contactModalState = false" class="cursor-pointer text-trso-blue">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div><span class="block pb-4 text-2xl font-semibold tracking-tighter leading-none"></span></div> 
                <div>
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const route = useRoute()

const contactModalState = useState('contactModalState')

/*watch(route, () => {
    

})*/

</script>