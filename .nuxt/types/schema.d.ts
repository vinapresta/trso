import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["algolia"]?: typeof import("@nuxtjs/algolia").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["image"]?: typeof import("@nuxt/image-edge").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["nuxt-config-schema"]?: typeof import("nuxt-config-schema").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/algolia", NuxtConfig["algolia"]] | ["@nuxt/image-edge", NuxtConfig["image"]] | ["@nuxtjs/i18n", NuxtConfig["i18n"]] | ["@nuxtjs/tailwindcss", NuxtConfig["tailwindcss"]] | ["nuxt-config-schema", NuxtConfig["nuxt-config-schema"]] | ["@nuxt/telemetry", NuxtConfig["telemetry"]])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   FB_API_KEY: string,

   FB_AUTH_DOMAIN: string,

   FB_DATABASE_URL: string,

   FB_PROJECT_ID: string,

   FB_STORAGE_BUCKET: string,

   FB_MESSAGING_SENDER_ID: string,

   FB_APP_ID: string,

   FB_MEASUREMENT_ID: string,

   ipx: {
      dir: string,

      maxAge: any,

      domains: Array<any>,

      sharp: any,

      alias: any,
   },
  }
  interface PublicRuntimeConfig {
   websiteName: string,

   BASE_URL: string,

   API_BASE_URL: string,

   limitByPage: number,

   featuredItemsCount: number,

   google_analytics_id: string,

   algolia: {
      apiKey: string,

      applicationId: string,

      lite: boolean,

      cache: boolean,

      instantSearch: boolean,

      docSearch: any,

      recommend: any,

      globalIndex: string,
   },
  }
}