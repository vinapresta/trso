// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    /*routeRules: {
        '/': { static: true },
    },*/
    runtimeConfig: {
        public: {
            API_BASE_URL: 'http://localhost:1337/api/',
            limitByPage: 24,
            featuredItemsCount: 12
        }
    },
})
