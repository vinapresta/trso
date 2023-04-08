import { g as getComposer, f as useNuxtApp, c as useRoute, d as useRouter, h as useLocalePath$1, i as useRouteBaseName$1 } from "../server.mjs";
import "vue";
import "destr";
import "js-cookie";
import "is-https";
function useRouteBaseName(route = useRoute()) {
  const router = useRouter();
  return useRouteBaseName$1(route, { router });
}
function useLocalePath(options = {}) {
  const i18n = options.i18n || getComposer(useNuxtApp().$i18n);
  const route = useRoute();
  const router = useRouter();
  return useLocalePath$1({
    router,
    route,
    i18n
  });
}
export {
  useLocalePath as a,
  useRouteBaseName as u
};
//# sourceMappingURL=composables-10605620.js.map
