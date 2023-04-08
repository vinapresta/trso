import { a as __nuxt_component_2$1, _ as _sfc_main$4 } from "./Breadcrumbs-8a756e76.js";
import { _ as _sfc_main$5 } from "./Heading-d8708ed8.js";
import { _ as _export_sfc, a as __nuxt_component_2, u as useI18n, b as useRuntimeConfig, c as useRoute } from "../server.mjs";
import { useSSRContext, mergeProps, ref, computed, unref, withCtx, createVNode, createTextVNode, toDisplayString, withAsyncContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { a as useLocalePath } from "./composables-10605620.js";
import { _ as __nuxt_component_3 } from "./Item-c2a41c2b.js";
import { u as useHead } from "./nuxt-img-e4923e79.js";
import { u as useFetch } from "./fetch-81eb1216.js";
import "destr";
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
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/ChevronLeft.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    pagesCount: Number,
    page: Number,
    routeName: String,
    color: String
  },
  setup(__props) {
    const props = __props;
    const MAX_PAGES = 3;
    const localePath = useLocalePath();
    ref();
    ref();
    const colorClasses = computed(() => {
      return props.color === "blue" ? "bg-trso-blue hover:bg-trso-blue2" : "bg-trso-yellow hover:bg-trso-yellow2";
    });
    const colorClassesActive = computed(() => {
      return props.color === "blue" ? "bg-trso-blue2" : "bg-trso-yellow2";
    });
    const pagination = computed(() => {
      const page = props.page;
      const pagesCount = props.pagesCount;
      if (pagesCount > MAX_PAGES) {
        if (page <= MAX_PAGES)
          return Array.from({ length: MAX_PAGES }, (v, i) => i + 2);
        if (page > pagesCount - MAX_PAGES)
          return Array.from({ length: MAX_PAGES }, (v, i) => pagesCount - 1 - i).reverse();
        return [page - 1, page, page + 1];
      } else {
        const pagesArray = Array.from({ length: MAX_PAGES }, (v, i) => i + 1);
        return pagesArray.slice(1, -1).splice(0, pagesArray.length - 1);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_2;
      const _component_IconsChevronLeft = __nuxt_component_1;
      const _component_nuxt_link = __nuxt_component_2;
      const _component_IconsChevronRight = __nuxt_component_2$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "py-4" }, _attrs))}><ul class="flex flex-wrap items-center justify-center text-sm lg:text-base">`);
      if (__props.page > 1) {
        _push(`<li class="mx-1 my-2">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: ["text-white font-bold h-8 w-8 flex items-center justify-center", __props.color === "blue" ? "bg-trso-blue hover:bg-trso-blue2" : "bg-trso-yellow hover:bg-trso-yellow2"],
          to: unref(localePath)({ name: __props.routeName, params: { page: __props.page - 1 } })
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_IconsChevronLeft, { class: "h-4 w-4" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_IconsChevronLeft, { class: "h-4 w-4" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li class="pagination-first mx-1 my-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: ["block text-white font-bold h-8 w-8 flex items-center justify-center", __props.page != 1 ? unref(colorClasses) : unref(colorClassesActive)],
        to: unref(localePath)({ name: __props.routeName, params: { page: 1 } })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 1 `);
          } else {
            return [
              createTextVNode(" 1 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
      if (__props.page > MAX_PAGES) {
        _push(`<li class="mx-1 my-2"><span class="${ssrRenderClass([__props.color === "blue" ? "text-trso-blue" : "text-trso-yellow", "block font-bold h-8 w-auto flex items-center justify-center"])}"> ... </span></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(pagination), (displayedPage) => {
        _push(`<li class="mx-1 my-2">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: ["block text-white font-bold h-8 w-8 flex items-center justify-center", displayedPage != __props.page ? unref(colorClasses) : unref(colorClassesActive)],
          to: unref(localePath)({ name: __props.routeName, params: { page: displayedPage } })
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(displayedPage)}`);
            } else {
              return [
                createTextVNode(toDisplayString(displayedPage), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]-->`);
      if (__props.page < __props.pagesCount - MAX_PAGES) {
        _push(`<li class="mx-1 my-2"><span class="${ssrRenderClass([__props.color === "blue" ? "text-trso-blue" : "text-trso-yellow", "block font-bold h-8 w-auto flex items-center justify-center"])}"> ... </span></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li class="pagination-last mx-1 my-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: ["block text-white font-bold h-8 w-8 flex items-center justify-center", __props.page != __props.pagesCount ? unref(colorClasses) : unref(colorClassesActive)],
        to: unref(localePath)({ name: __props.routeName, params: { page: __props.pagesCount } })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.pagesCount)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.pagesCount), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
      if (__props.page < __props.pagesCount) {
        _push(`<li class="mx-1 my-2">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: ["block text-white font-bold h-8 w-8 flex items-center justify-center", __props.color === "blue" ? "bg-trso-blue hover:bg-trso-blue2" : "bg-trso-yellow hover:bg-trso-yellow2"],
          to: unref(localePath)({ name: __props.routeName, params: { page: __props.page + 1 } })
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_IconsChevronRight, { class: "h-4 w-4" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_IconsChevronRight, { class: "h-4 w-4" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></nav>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/List/Pagination.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ItemsByPage",
  __ssrInlineRender: true,
  props: {
    items: Array,
    type: String,
    page: Number,
    routeName: String,
    color: String,
    pagesCount: Number
  },
  setup(__props) {
    const { locale } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PagesListPagination = _sfc_main$2;
      const _component_PagesItem = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PagesListPagination, {
        page: __props.page,
        pagesCount: __props.pagesCount,
        routeName: __props.routeName,
        color: __props.color
      }, null, _parent));
      _push(`<div class="container grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4"><!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(ssrRenderComponent(_component_PagesItem, {
          key: item.id,
          itemData: item,
          type: __props.type,
          lang: unref(locale),
          color: __props.color
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_PagesListPagination, {
        page: __props.page,
        pagesCount: __props.pagesCount,
        routeName: __props.routeName,
        color: __props.color
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/List/ItemsByPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "[page]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const runtimeConfig = useRuntimeConfig();
    const route = useRoute();
    const { locale, t } = useI18n();
    const page = parseInt(route.params.page);
    const type = route.params.type;
    const color = type === "tv-series" ? "yellow" : "blue";
    const titleInner = type === "tv-series" ? t("pages.series.title") : t("pages.movies.title");
    const limitByPage = runtimeConfig.public.limitByPage;
    const start = (page - 1) * parseInt(limitByPage);
    const fields = `fields[0]=director&fields[1]=year&fields[2]=poster`;
    const filters = `filters[type][$eq]=${type === "tv-series" ? "series" : "movie"}&filters[item_lang][locale][$eq]=${locale.value}&filters[books][firstBook][$eq]=true`;
    const populate = `populate[item_lang][fields][0]=title&populate[item_lang][fields][1]=slug&populate[books][fields][0]=title&populate[books][fields][1]=authors&populate[books][fields][2]=thumbnail`;
    const pagination = `pagination[start]=${start}&pagination[limit]=${limitByPage}`;
    const sort = `sort[0]=id%3Adesc`;
    const params = `${sort}&${fields}&${filters}&${populate}&${pagination}`;
    const url = `${runtimeConfig.public.API_BASE_URL}items?${params}`;
    const { data: items } = ([__temp, __restore] = withAsyncContext(() => useFetch(url, "$SMNti1NK9G")), __temp = await __temp, __restore(), __temp);
    const pagesCount = computed(() => {
      const total = items.value.meta.pagination.total;
      return Math.ceil(parseInt(total) / parseInt(limitByPage));
    });
    const headLinks = computed(() => {
      let links = [{ rel: "canonical", href: `${runtimeConfig.public.BASE_URL}${route.fullPath}` }];
      if (pagesCount.value > 1) {
        if (page === 1) {
          links.push({ rel: "next", href: `${runtimeConfig.public.BASE_URL}/${type}/pages/2` });
        } else if (page === pagesCount.value) {
          links.push({ rel: "prev", href: `${runtimeConfig.public.BASE_URL}/${type}/pages/${page - 1}` });
        } else {
          links.push({ rel: "prev", href: `${runtimeConfig.public.BASE_URL}/${type}/pages/${page - 1}` });
          links.push({ rel: "next", href: `${runtimeConfig.public.BASE_URL}/${type}/pages/${page + 1}` });
        }
      }
      return links;
    });
    let metaType = type === "tv-series" ? "series" : "movies";
    const titleType = t(`pages['${metaType}']['title']`);
    const title = `${titleType} - page ${page}`;
    const hidDescription = t(`pages['${metaType}']['hidDescription']`);
    const hidKeywords = t(`pages['${metaType}']['hidKeywords']`);
    const hidOgDescription = t(`pages['${metaType}']['hidOgDescription']`);
    const hidTwitterTitle = t(`pages['${metaType}']['hidTwitterTitle']`);
    const hidTwitterDescription = t(`pages['${metaType}']['hidTwitterDescription']`);
    useHead({
      title: `${runtimeConfig.public.websiteName} - ${title}`,
      link: headLinks.value,
      meta: [
        { name: "description", content: `${hidDescription} ${page}` },
        { name: "keywords", content: hidKeywords },
        { property: "og:site_name", content: runtimeConfig.public.websiteName },
        { property: "og:description", content: `${hidOgDescription} ${page}` },
        { property: "twitter:title", content: `${runtimeConfig.public.websiteName} - ${hidTwitterTitle}` },
        { property: "twitter:description", content: `${hidTwitterDescription} ${page}` }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutBreadcrumbs = _sfc_main$4;
      const _component_HelpersHeading = _sfc_main$5;
      const _component_PagesListItemsByPage = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LayoutBreadcrumbs, {
        levels: [{ name: unref(type), route: { name: "type-pages-page", params: { type: unref(type), page: 1 } } }, { name: `page ${String(unref(page))}` }]
      }, null, _parent));
      _push(ssrRenderComponent(_component_HelpersHeading, {
        tag: "h1",
        tagStyle: "h1",
        color: unref(color)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(titleInner))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(titleInner)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_PagesListItemsByPage, {
        items: unref(items).data,
        type: unref(type),
        page: unref(page),
        routeName: "type-pages-page",
        color: unref(color),
        pagesCount: unref(pagesCount)
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[type]/pages/[page].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_page_-03e21a3b.js.map
