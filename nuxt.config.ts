export default defineNuxtConfig({
    /*alias: {
        "@": "/<rootDir>",
        "assets": "/<rootDir>/assets",
        "public": "/<rootDir>/public"
    },*/
    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            bodyAttrs: {
                class: 'bg-white text-grey-700 main leading-normal text-base tracking-normal'
            },
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Playfair+Display|Source+Sans+Pro:400,600&display=swap' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fredoka+One&display=swap' },
            ],
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'robots', content: 'noindex, nofollow' },
                { name: 'robots', content: 'noimageindex' }
            ]
        }
    },
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
                en: '/search/[search]'
            },
            'privacy-policy': {
                en: '/privacy-policy'
            }
        },
        vueI18n: {
            fallbackLocale: 'en',
        }
    },
    modules: [
        ['@nuxtjs/algolia', { 
            apiKey: 'c3f0378c8bb37aebc40b0affeb477cd6',
            applicationId: '3HUPT4Q25O' 
        }],
        '@nuxt/image-edge',
        '@nuxtjs/i18n',
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
        ['@funken-studio/sitemap-nuxt-3', {
            hostname: 'https://tarseroo.com', 
        }],
    ],
    runtimeConfig: {
        FB_API_KEY: process.env.FB_API_KEY,
        FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
        FB_DATABASE_URL: process.env.FB_DATABASE_URL,
        FB_PROJECT_ID: process.env.FB_PROJECT_ID,
        FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
        FB_MESSAGING_SENDER_ID: process.env.FB_MESSAGING_SENDER_ID,
        FB_APP_ID: process.env.FB_APP_ID,
        FB_MEASUREMENT_ID: process.env.FB_MEASUREMENT_ID,
        public: {
            websiteName: 'Tarseroo',
            BASE_URL: 'https://tarseroo.com',
            API_BASE_URL: 'http://127.0.0.1:1337/api/',
            limitByPage: 24,
            featuredItemsCount: 12,
            google_analytics_id: process.env.GOOGLE_ANALYTICS_ID,
        }
    },
    routeRules: {
        '/': { static: true }
    },
    experimental: {
        payloadExtraction: false
    }
})
