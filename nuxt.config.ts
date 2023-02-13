// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiBase: 'http://localhost:1337/api/',
            limitByPage: 24,
            featuredItemsCount: 12
        }
    },
})
