<template>
    <div>
        <span class="block px-6 mb-4 text-center text-trso-blue font-serif text-2xl uppercase">{{  $t('components.formsContact.title') }}</span>  
        <span class="text-green-400" :class="states.success ? 'block px-6' : 'hidden'">{{ $t('components.formsContact.success') }}</span>
        <span class="text-red-400" :class="states.error ? 'block px-6' : 'hidden'">{{ $t('components.formsContact.error') }}</span>
        <form name="contact" method="post" netlify data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <div class="p-6">
                <label class="block mb-6">
                    <span class="block text-trso-blue">{{ $t('components.formsContact.email') }}<span>*</span></span>
                    <span class="text-red-700 text-sm" :class="errors.email ? 'block' : 'hidden'">{{ $t('components.formsContact.emailError') }}</span>
                    <input name="customerEmail"
                        type="email"
                        v-model="fields.email"
                        class="block
                                w-full
                                mt-1 p-2
                                border border-trso-blue2 focus:border-trso-blue
                                shadow-sm
                                focus:outline-none focus:ring focus:ring-trso-blue focus:ring-opacity-50
                                placeholder:text-trso-blue placeholder:italic placeholder:text-sm"
                        :placeholder="$t('components.formsContact.emailPlaceholder')"
                        required />
                </label>
                <label class="block mb-6">
                    <span class="block text-trso-blue">{{ $t('components.formsContact.message') }}<span>*</span></span>
                    <span class="text-red-700 text-sm" :class="errors.message ? 'block' : 'hidden'">{{ $t('components.formsContact.messageError') }}</span>
                    <textarea name="message"
                            v-model="fields.message"
                            class="block
                                    w-full
                                    mt-1 p-2
                                    border border-trso-blue2 focus:border-trso-blue
                                    shadow-sm
                                    focus:outline-none focus:ring focus:ring-trso-blue focus:ring-opacity-50
                                    placeholder:text-trso-blue placeholder:italic"
                            rows="4"
                            :placeholder="$t('components.formsContact.messagePlaceholder')"></textarea>
                </label>
                <div class="mb-6">
                    <button @click.prevent="sendEmail" :disabled="states.button"
                            class="w-full flex flex-wrap items-center justify-center px-4 py-2 text-xl uppercase text-white shadow transition-colors bg-trso-blue hover:bg-trso-blue2">
                            {{ $t('components.formsContact.send') }}
                    </button>
                </div>
                <p class="text-trso-blue"><span class="text-sm">*</span>{{ $t('components.formsContact.required') }}</p>
            </div>
        </form>
    </div>
</template>


<script setup>

const { $validateEmail } = useNuxtApp()

const fields = reactive({
    email: '',
    message: ''
})

const errors = reactive({
    email: false,
    message: false
})

const states = reactive({
    success: false,
    error: false,
    button: false
})

const checkData = () => {

    let dataValidation = true

    errors.message = false

    errors.email = false

    if (fields.message.length < 5 ) {

        errors.message = true;

        dataValidation = false;

    }

    if (!$validateEmail(fields.email)) {

        errors.email = true;

        dataValidation = false;

    }
        
    return dataValidation

}


function encode(data) {

    return Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join("&");

}

async function sendEmail () {

    states.success = false
    states.error = false

    const dataValid = checkData()

    if (dataValid) {

        states.button = false

        const formData = encode({ 
            "form-name": "contact", 
            "email": fields.email,
            "message": fields.message })

        fetch('/', {
            method: 'POST', 
            headers: {
                    'Content-Type': 'application/json',
            },

            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                states.success = true
                states.button = true
        })
            .catch((error) => {
                states.error = true
                states.button = true
        })
    }
}

</script>