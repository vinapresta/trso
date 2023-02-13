export default defineNuxtConfig({
    alias: {
        "@": "/<rootDir>",
        "assets": "/<rootDir>/assets",
        "public": "/<rootDir>/public"
    },
    app: {
        head: {
            link: [
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Playfair+Display|Source+Sans+Pro:400,600&display=swap' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fredoka+One&display=swap' },
            ],
            meta: [
                {  name: 'robots', content: 'noindex, nofollow' },
                {  name: 'robots', content: 'noimageindex' }
            ]
        }
    },
    modules: ['@nuxtjs/tailwindcss'],
    runtimeConfig: {
        public: {
            API_BASE_URL: 'http://localhost:1337/api/',
            limitByPage: 24,
            featuredItemsCount: 12
        }
    }
})
