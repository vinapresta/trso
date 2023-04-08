import { useSSRContext, mergeProps, computed, withAsyncContext, withCtx, openBlock, createBlock, toDisplayString, unref, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc, u as useI18n, b as useRuntimeConfig, a as __nuxt_component_2 } from "../server.mjs";
import { _ as _sfc_main$3 } from "./Heading-d8708ed8.js";
import { _ as __nuxt_component_3 } from "./ArrowRight-ca1db586.js";
import { _ as __nuxt_component_3$1 } from "./Item-c2a41c2b.js";
import { _ as __nuxt_component_2$1 } from "./Plus-5962bd90.js";
import { a as useLocalePath } from "./composables-10605620.js";
import { u as useFetch } from "./fetch-81eb1216.js";
import "destr";
import { u as useHead } from "./nuxt-img-e4923e79.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "h3";
import "ufo";
import "@intlify/core-base";
import "@vue/devtools-api";
import "@intlify/vue-devtools";
import "cookie-es";
import "js-cookie";
import "is-https";
import "defu";
import "@algolia/cache-in-memory";
import "vue-social-sharing";
import "ohash";
const _imports_0 = "" + __publicAssetsURL("img/tarsier.png");
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-4 md:mb-8 lg:mb-12 relative w-10/12 md:w-4/5 lg:w-3/5 md:px-4 lg:px-8 py-2 lg:px-20 mx-auto" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} class="block absolute w-[56px] h-[75px] lg:w-[110px] lg:h-[150px] top-20 lg:top-8 -right-[36px] lg:-right-[48px]" alt="tarsier" id="imgTarsier"><div class="text-base px-8 py-4 rounded-lg bg-trso-blue text-white z-20"><p class="mb-2">${ssrInterpolate(_ctx.$t("pages.home.disclaimer1"))}</p><p class="mb-2">${ssrInterpolate(_ctx.$t("pages.home.disclaimer2"))}</p><p class="mb-2">${ssrInterpolate(_ctx.$t("pages.home.disclaimer3"))}</p><p>${ssrInterpolate(_ctx.$t("pages.home.disclaimer4"))}</p></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/index/Disclaimer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "Featured",
  __ssrInlineRender: true,
  props: {
    type: String
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { locale } = useI18n();
    const localePath = useLocalePath();
    const textColorClass = computed(() => {
      return props.type === "tv-series" ? "text-trso-yellow" : "text-trso-blue";
    });
    const textHoverColorClass = computed(() => {
      return props.type === "tv-series" ? "text-trso-yellow hover:text-trso-yellow2" : "text-trso-blue hover:text-trso-blue2";
    });
    const runtimeConfig = useRuntimeConfig();
    const limit = runtimeConfig.public.featuredItemsCount;
    const fields = `fields[0]=director&fields[1]=year&fields[2]=poster`;
    const filters = `filters[type][$eq]=${props.type === "tv-series" ? "series" : "movie"}&filters[item_lang][locale][$eq]=${locale.value}&filters[item_lang][home][$eq]=true&filters[books][firstBook][$eq]=true`;
    const populate = `populate[item_lang][fields][0]=title&populate[item_lang][fields][1]=slug&populate[books][fields][0]=title&populate[books][fields][1]=authors&populate[books][fields][2]=thumbnail`;
    const pagination = `pagination[start]=0&pagination[limit]=${limit}`;
    const sort = `sort[0]=id%3Adesc`;
    const params = `${sort}&${fields}&${filters}&${populate}&${pagination}`;
    const url = `${runtimeConfig.public.API_BASE_URL}items?${params}`;
    const { data: items } = ([__temp, __restore] = withAsyncContext(() => useFetch(url, "$h1dSB1ra09")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HelpersHeading = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_2;
      const _component_IconsArrowRight = __nuxt_component_3;
      const _component_PagesItem = __nuxt_component_3$1;
      const _component_IconsPlus = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-8" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_HelpersHeading, {
        tag: "h2",
        tagStyle: "featured",
        color: __props.type === "tv-series" ? "yellow" : "blue"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.type === "tv-series") {
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("components.featured.topSeries"))}</span>`);
            } else {
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("components.featured.topMovies"))}</span>`);
            }
          } else {
            return [
              __props.type === "tv-series" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.$t("components.featured.topSeries")), 1)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(_ctx.$t("components.featured.topMovies")), 1))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="mb-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)({ name: "type-pages-page", params: { type: __props.type, page: 1 } }),
        class: [unref(textColorClass), "flex justify-center items-center gap-x-2 text-sm lg:text-lg"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconsArrowRight, { class: "h-5 w-5" }, null, _parent2, _scopeId));
            _push2(`</span>`);
            if (__props.type === "tv-series") {
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("components.featured.topSeries2"))}</span>`);
            } else {
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("components.featured.topMovies2"))}</span>`);
            }
          } else {
            return [
              createVNode("span", null, [
                createVNode(_component_IconsArrowRight, { class: "h-5 w-5" })
              ]),
              __props.type === "tv-series" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.$t("components.featured.topSeries2")), 1)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(_ctx.$t("components.featured.topMovies2")), 1))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><div class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4"><!--[-->`);
      ssrRenderList(unref(items).data, (item) => {
        _push(ssrRenderComponent(_component_PagesItem, {
          key: item.id,
          itemData: item,
          type: __props.type,
          lang: unref(locale),
          color: __props.type === "tv-series" ? "yellow" : "blue"
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)({ name: "type-pages-page", params: { type: __props.type, page: 1 } }),
        title: __props.type === "tv-series" ? _ctx.$t("components.featured.topSeries2") : _ctx.$t("components.featured.topMovies2"),
        class: "flex w-full py-2 justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconsPlus, {
              class: ["h-14 w-14 transition-transform hover:rotate-180", unref(textHoverColorClass)]
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconsPlus, {
                class: ["h-14 w-14 transition-transform hover:rotate-180", unref(textHoverColorClass)]
              }, null, 8, ["class"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/index/Featured.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const runtimeConfig = useRuntimeConfig();
    useHead({
      title: `${runtimeConfig.public.websiteName} - ${t("pages.home.title")}`,
      meta: [
        { hid: "description", name: "description", content: t("pages.home.hidDescription") },
        { hid: "keywords", name: "keywords", content: t("pages.home.hidKeywords") },
        { hid: "og:site_name", property: "og:site_name", content: runtimeConfig.public.websiteName },
        { hid: "og:description", property: "og:description", content: t("pages.home.hidOgDescription") },
        { hid: "twitter:title", property: "twitter:title", content: `${runtimeConfig.public.websiteName} - ${t("pages.home.hidTwitterTitle")}` },
        { hid: "twitter:description", property: "twitter:description", content: t("pages.home.hidTwitterDescription") }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PagesIndexDisclaimer = __nuxt_component_0;
      const _component_PagesIndexFeatured = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PagesIndexDisclaimer, null, null, _parent));
      _push(ssrRenderComponent(_component_PagesIndexFeatured, { type: "tv-series" }, null, _parent));
      _push(ssrRenderComponent(_component_PagesIndexFeatured, { type: "movies" }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-f5950f37.js.map
