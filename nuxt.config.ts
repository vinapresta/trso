export default defineNuxtConfig({
    /*alias: {
        "@": "/<rootDir>",
        "assets": "/<rootDir>/assets",
        "public": "/<rootDir>/public"
    },*/
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
    modules: [
        ['@nuxtjs/algolia', { 
            apiKey: 'c3f0378c8bb37aebc40b0affeb477cd6',
            applicationId: '3HUPT4Q25O' 
        }],
        '@nuxtjs/i18n',
        '@nuxtjs/tailwindcss'
    ],
    i18n: {
        locales: [
            { code: 'en', iso: 'en-US', file: 'en.js' },
        ],
        defaultLocale: 'en',
        pages: {
            'index': {
                en: '/'
            },
            '[type]/[id]-[slug]': {
                en: '/[type]/[id]-[slug]'
            },
            '[type]/pages/[page]': {
                en: '/[type]/pages/[page]'
            },
            'search/[search]': {
                en: '/search-results/[search]'
            },
            'privacy-policy': {
                en: '/privacy-policy'
            }
        },
        vueI18n: {
            fallbackLocale: 'en',
        }
    },
    runtimeConfig: {
        public: {
            websiteName: 'Tarseroo',
            BASE_URL: 'https://tarseroo.com',
            API_BASE_URL: 'http://127.0.0.1:1337/api/',
            limitByPage: 24,
            featuredItemsCount: 12
        }
    }
})
