import { _ as _sfc_main$3 } from './Heading-d8708ed8.mjs';
import { useSSRContext, defineComponent, mergeProps, ref, reactive, withCtx, unref, openBlock, createBlock, toDisplayString, createTextVNode, createVNode, createCommentVNode, computed } from 'file://D:/dev/trso/app/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'file://D:/dev/trso/app/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, u as useI18n, c as useRoute, b as useRuntimeConfig, e as useState, a as __nuxt_component_2, f as useNuxtApp } from './server.mjs';
import { _ as __nuxt_component_3 } from './ArrowRight-ca1db586.mjs';
import { u as useLocalePath } from './composables-10605620.mjs';
import 'file://D:/dev/trso/app/node_modules/ofetch/dist/node.mjs';
import 'file://D:/dev/trso/app/node_modules/hookable/dist/index.mjs';
import 'file://D:/dev/trso/app/node_modules/unctx/dist/index.mjs';
import 'file://D:/dev/trso/app/node_modules/@unhead/vue/dist/index.mjs';
import 'file://D:/dev/trso/app/node_modules/@unhead/dom/dist/index.mjs';
import 'file://D:/dev/trso/app/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://D:/dev/trso/app/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/dev/trso/app/node_modules/h3/dist/index.mjs';
import 'file://D:/dev/trso/app/node_modules/ufo/dist/index.mjs';
import 'file://D:/dev/trso/app/node_modules/@intlify/core-base/dist/core-base.mjs';
import 'file://D:/dev/trso/app/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://D:/dev/trso/app/node_modules/@intlify/vue-devtools/dist/vue-devtools.mjs';
import 'file://D:/dev/trso/app/node_modules/cookie-es/dist/index.mjs';
import 'file://D:/dev/trso/app/node_modules/is-https/dist/index.js';
import 'file://D:/dev/trso/app/node_modules/defu/dist/defu.mjs';
import 'file://D:/dev/trso/app/node_modules/@algolia/cache-in-memory/index.js';
import 'file://D:/dev/trso/app/node_modules/vue-social-sharing/dist/vue-social-sharing.js';
import './config.mjs';
import 'file://D:/dev/trso/app/node_modules/destr/dist/index.mjs';
import 'file://D:/dev/trso/app/node_modules/scule/dist/index.mjs';

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    id: "loading-spinner",
    xmlns: "http://www.w3.org/2000/svg",
    class: "animate-spin",
    viewBox: "0 0 24 24",
    fill: "none"
  }, _attrs))}><path d="M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z" fill="currentColor"></path><path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Loader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    color: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: ["flex items-center justify-center gap-x-2 w-full px-4 py-2 text-white text-center uppercase transition-colors duration-500", `bg-trso-${__props.color} hover:bg-trso-${__props.color}2`]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/helpers/Button.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useAlgoliaRef = () => {
  const nuxtApp = useNuxtApp();
  const algolia = nuxtApp.$algolia;
  return algolia;
};
function useAlgoliaInitIndex(indexName) {
  const algolia = useAlgoliaRef();
  const algoliaIndex = algolia == null ? void 0 : algolia.initIndex(indexName);
  return algoliaIndex;
}
function useAlgoliaSearch(indexName) {
  const config = useRuntimeConfig();
  const index = indexName || config.algolia.globalIndex;
  if (!index)
    throw new Error("`[@nuxtjs/algolia]` Cannot search in Algolia without `globalIndex` or `indexName` passed as a parameter");
  const algoliaIndex = useAlgoliaInitIndex(index);
  const result = useState(`${index}-search-result`, () => null);
  const search = async ({ query, requestOptions }) => {
    {
      const nuxtApp = useNuxtApp();
      nuxtApp.$algolia.transporter.requester = (await import('file://D:/dev/trso/app/node_modules/@algolia/requester-node-http/index.js').then((lib) => lib.default || lib)).createNodeHttpRequester();
    }
    const searchResult = await algoliaIndex.search(query, requestOptions);
    result.value = searchResult;
    return searchResult;
  };
  return {
    result: computed(() => result.value),
    search
  };
}
const _sfc_main = {
  __name: "[search]",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const localePath = useLocalePath();
    const route = useRoute();
    const customSearch = route.params.search;
    const { result, search } = useAlgoliaSearch("movies");
    const page = ref(0);
    const loadMoreState = ref(false);
    const hitsPerPage = 4;
    const max = 50;
    const resultsLoaded = ref(false);
    const results = reactive({
      hits: [],
      count: 0,
      total: 0,
      max: 0
    });
    async function loadMore() {
      loadMoreState.value = true;
      try {
        await loadResult();
        page.value++;
      } catch (error) {
      }
      loadMoreState.value = false;
    }
    async function loadResult() {
      resultsLoaded.value = true;
      const res = await search({ query: `${String(customSearch)}`, requestOptions: { hitsPerPage, page: page.value } });
      results.hits = [...results.hits, ...res.hits];
      results.count = results.hits.length;
      results.total = res.nbHits;
      results.max = res.nbHits < max ? res.nbHits : max;
      resultsLoaded.value = true;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HelpersHeading = _sfc_main$3;
      const _component_IconsLoader = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_2;
      const _component_HelpersButton = _sfc_main$1;
      const _component_IconsArrowRight = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-462d5cd0>`);
      _push(ssrRenderComponent(_component_HelpersHeading, {
        tag: "h1",
        tagStyle: "h1",
        color: "blue"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(results).total) {
              _push2(`<span data-v-462d5cd0${_scopeId}>${ssrInterpolate(_ctx.$t("pages.search.title"))}</span>`);
            } else {
              _push2(`<span data-v-462d5cd0${_scopeId}>${ssrInterpolate(_ctx.$t("pages.search.noResults"))}</span>`);
            }
            _push2(` \xA0 <span class="italic font-semibold" data-v-462d5cd0${_scopeId}>${ssrInterpolate(unref(customSearch))}</span>`);
          } else {
            return [
              unref(results).total ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.$t("pages.search.title")), 1)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(_ctx.$t("pages.search.noResults")), 1)),
              createTextVNode(" \xA0 "),
              createVNode("span", { class: "italic font-semibold" }, toDisplayString(unref(customSearch)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!unref(resultsLoaded)) {
        _push(`<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-trso-blue" data-v-462d5cd0>`);
        _push(ssrRenderComponent(_component_IconsLoader, { class: "w-16 h-16" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(resultsLoaded)) {
        _push(`<div data-v-462d5cd0>`);
        if (unref(results).total) {
          _push(`<div data-v-462d5cd0><ul class="mb-4 lg:mb-8" data-v-462d5cd0><!--[-->`);
          ssrRenderList(unref(results).hits, (result2) => {
            _push(`<li data-v-462d5cd0>`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)({ name: "type-id-slug", params: { type: result2.type === "series" ? "tv-series" : "movies", id: result2.objectID, slug: `${result2["slug_" + unref(locale)]}` } }),
              title: result2["title_" + unref(locale)],
              class: "flex items-center gap-x-4 lg:gap-x-8 transition-colors duration-500 bg-white hover:bg-trso-blue2 text-trso-blue hover:text-white text-base lg:text-lg text-left p-2 lg:p-4"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<img${ssrRenderAttr("src", result2.poster)}${ssrRenderAttr("alt", `poster ${result2["title_" + unref(locale)]}`)} class="w-12 h-auto" data-v-462d5cd0${_scopeId}><span data-v-462d5cd0${_scopeId}>${ssrInterpolate(result2["title_" + unref(locale)])} `);
                  if (result2.director.length) {
                    _push2(`<span class="text-base" data-v-462d5cd0${_scopeId}>(${ssrInterpolate(result2.director)})</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</span>`);
                } else {
                  return [
                    createVNode("img", {
                      src: result2.poster,
                      alt: `poster ${result2["title_" + unref(locale)]}`,
                      class: "w-12 h-auto"
                    }, null, 8, ["src", "alt"]),
                    createVNode("span", null, [
                      createTextVNode(toDisplayString(result2["title_" + unref(locale)]) + " ", 1),
                      result2.director.length ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-base"
                      }, "(" + toDisplayString(result2.director) + ")", 1)) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</li>`);
          });
          _push(`<!--]--></ul>`);
          if (unref(results).count < unref(results).max) {
            _push(ssrRenderComponent(_component_HelpersButton, {
              color: "blue",
              onClick: ($event) => loadMore(),
              disabled: unref(loadMoreState),
              class: "text-white"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  if (!unref(loadMoreState)) {
                    _push2(`<span data-v-462d5cd0${_scopeId}>${ssrInterpolate(_ctx.$t("loadMore"))}</span>`);
                  } else {
                    _push2(`<i data-v-462d5cd0${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_IconsLoader, { class: "w-4 h-4" }, null, _parent2, _scopeId));
                    _push2(`</i>`);
                  }
                } else {
                  return [
                    !unref(loadMoreState) ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.$t("loadMore")), 1)) : (openBlock(), createBlock("i", { key: 1 }, [
                      createVNode(_component_IconsLoader, { class: "w-4 h-4" })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<span class="block px-4 py-2 text-trso-blue text-center border border-trso-blue" data-v-462d5cd0>${ssrInterpolate(_ctx.$t("pages.search.noMore"))}</span>`);
          }
          _push(`</div>`);
        } else {
          _push(`<div data-v-462d5cd0><p class="text-lg text-center font-sans text-trso-yellow mb-8" data-v-462d5cd0>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)({ name: "type-pages-page", params: { type: "tv-series", page: 1 } }),
            title: _ctx.$t("header.series"),
            class: "flex items-center gap-x-2"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i data-v-462d5cd0${_scopeId}>`);
                _push2(ssrRenderComponent(_component_IconsArrowRight, { class: "h-5 w-5" }, null, _parent2, _scopeId));
                _push2(`</i><span data-v-462d5cd0${_scopeId}>${ssrInterpolate(_ctx.$t("pages.search.seriesList"))}</span>`);
              } else {
                return [
                  createVNode("i", null, [
                    createVNode(_component_IconsArrowRight, { class: "h-5 w-5" })
                  ]),
                  createVNode("span", null, toDisplayString(_ctx.$t("pages.search.seriesList")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</p><p class="text-lg text-center font-sans text-trso-blue mb-8" data-v-462d5cd0>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)({ name: "type-pages-page", params: { type: "movies", page: 1 } }),
            title: _ctx.$t("header.series"),
            class: "flex items-center gap-x-2"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i data-v-462d5cd0${_scopeId}>`);
                _push2(ssrRenderComponent(_component_IconsArrowRight, { class: "h-5 w-5" }, null, _parent2, _scopeId));
                _push2(`</i><span data-v-462d5cd0${_scopeId}>${ssrInterpolate(_ctx.$t("pages.search.moviesList"))}</span>`);
              } else {
                return [
                  createVNode("i", null, [
                    createVNode(_component_IconsArrowRight, { class: "h-5 w-5" })
                  ]),
                  createVNode("span", null, toDisplayString(_ctx.$t("pages.search.moviesList")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</p></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/[search].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _search_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-462d5cd0"]]);

export { _search_ as default };
//# sourceMappingURL=_search_-6d478674.mjs.map
