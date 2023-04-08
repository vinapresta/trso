// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../components.plugin").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/pages/runtime/plugins/router").default> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client").default> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/plugins/composition").default> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/plugins/i18n").default> &
  InjectionType<typeof import("../../node_modules/@nuxt/image-edge/dist/runtime/plugin").default> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/algolia/dist/runtime/plugin").default> &
  InjectionType<typeof import("../../plugins/firestore").default> &
  InjectionType<typeof import("../../plugins/format-date").default> &
  InjectionType<typeof import("../../plugins/i18n").default> &
  InjectionType<typeof import("../../plugins/social-share").default> &
  InjectionType<typeof import("../../plugins/validate-email").default> &
  InjectionType<typeof import("../../plugins/vue-gtag.client").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
