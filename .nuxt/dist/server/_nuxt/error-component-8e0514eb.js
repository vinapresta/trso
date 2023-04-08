import { useSSRContext, mergeProps, withCtx, createTextVNode, toDisplayString, ref, unref, createVNode, withAsyncContext, reactive, watch, openBlock, createBlock, createCommentVNode, onBeforeUnmount, computed } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderSlot, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _export_sfc, a as __nuxt_component_2, u as useI18n, b as useRuntimeConfig, c as useRoute, d as useRouter, e as useState, f as useNuxtApp } from "../server.mjs";
import { u as useRouteBaseName, a as useLocalePath } from "./composables-10605620.js";
import { _ as __nuxt_component_2$1 } from "./Plus-5962bd90.js";
import { u as useFetch } from "./fetch-81eb1216.js";
import "destr";
import { _ as __nuxt_component_3$1 } from "./ArrowRight-ca1db586.js";
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
const _sfc_main$e = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "visible lg:hidden group absolute top-1/2 -translate-y-1/2 right-4 text-white" }, _attrs))}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"></path></svg></button>`);
}
const _sfc_setup$d = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Hamburger.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$d = {
  __name: "MenuButton",
  __ssrInlineRender: true,
  props: {
    to: String,
    name: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_2;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: __props.to,
        class: "inline-block relative py-1 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition after:ease-out after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left mb-2 lg:mb-0",
        activeClass: "after:scale-x-100 after:origin-bottom-left"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$c = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/MenuButton.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$c = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, _attrs))}><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd"></path></svg>`);
}
const _sfc_setup$b = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Search.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0 = "" + __publicAssetsURL("img/logo_white_resize.png");
const HeaderNav_vue_vue_type_style_index_0_scoped_07a59208_lang = "";
const _sfc_main$b = {
  __name: "HeaderNav",
  __ssrInlineRender: true,
  props: {
    searchButtonVisible: Boolean,
    searchButtonState: Boolean,
    isLargeScreen: Boolean
  },
  setup(__props) {
    useRouteBaseName();
    const { t } = useI18n();
    const localePath = useLocalePath();
    const menuMobileState = ref(false);
    const menu = [
      {
        to: localePath({ name: "type-pages-page", params: { type: "movies", page: 1 } }),
        name: t("header.movies")
      },
      {
        to: localePath({ name: "type-pages-page", params: { type: "tv-series", page: 1 } }),
        name: t("header.series")
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsHamburger = __nuxt_component_0$3;
      const _component_NuxtLink = __nuxt_component_2;
      const _component_LayoutMenuButton = _sfc_main$d;
      const _component_IconsSearch = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full bg-trso-blue" }, _attrs))} data-v-07a59208>`);
      _push(ssrRenderComponent(_component_IconsHamburger, {
        onClick: ($event) => menuMobileState.value = !unref(menuMobileState)
      }, null, _parent));
      _push(`<nav class="lg:flex items-center max-w-7xl mx-auto transition-[padding] ease-in-out delay-200" id="mainMenu" data-v-07a59208>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)({ name: "index" }),
        title: _ctx.$t("pages.home.title"),
        class: "lg:pr-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-center" data-v-07a59208${_scopeId}><img class="mx-auto lg:mx-0 w-[150px] h-[54px] mb-4 lg:mb-0" width="200" height="72"${ssrRenderAttr("src", _imports_0)} alt="Tarseroo logo" data-v-07a59208${_scopeId}></h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-center" }, [
                createVNode("img", {
                  class: "mx-auto lg:mx-0 w-[150px] h-[54px] mb-4 lg:mb-0",
                  width: "200",
                  height: "72",
                  src: _imports_0,
                  alt: "Tarseroo logo"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(menuMobileState) || __props.isLargeScreen) {
        _push(`<ul class="max-h-[200px] lg:max-h-auto lg:flex items-center gap-x-4 text-center font-semibold text-sm lg:text-base uppercase text-white" data-v-07a59208><!--[-->`);
        ssrRenderList(menu, (menuItem) => {
          _push(`<li data-v-07a59208>`);
          _push(ssrRenderComponent(_component_LayoutMenuButton, {
            to: menuItem.to,
            name: menuItem.name
          }, null, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.searchButtonVisible) {
        _push(`<button class="absolute lg:relative top-1/2 lg:top-0 -translate-y-1/2 lg:translate-y-0 left-4 lg:left-0 lg:flex items-center gap-x-2 lg:ml-auto" data-v-07a59208>`);
        _push(ssrRenderComponent(_component_IconsSearch, { class: "text-white h-5 w-5 mx-auto lg:mx-0" }, null, _parent));
        if (!__props.searchButtonState) {
          _push(`<span class="text-white" data-v-07a59208>${ssrInterpolate(_ctx.$t("header.search"))}</span>`);
        } else {
          _push(`<span class="text-white" data-v-07a59208>${ssrInterpolate(_ctx.$t("header.closeSearch"))}</span>`);
        }
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav></div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/HeaderNav.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-07a59208"]]);
const _sfc_main$a = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "77",
    height: "19",
    "aria-label": "Algolia",
    role: "img"
  }, _attrs))}><path d="M2.5067 0h14.0245c1.384.001 2.5058 1.1205 2.5068 2.5017V16.5c-.0014 1.3808-1.1232 2.4995-2.5068 2.5H2.5067C1.1232 18.9995.0014 17.8808 0 16.5V2.4958A2.495 2.495 0 01.735.7294 2.505 2.505 0 012.5068 0zM37.95 15.0695c-3.7068.0168-3.7068-2.986-3.7068-3.4634L34.2372.3576 36.498 0v11.1794c0 .2715 0 1.9889 1.452 1.994v1.8961zm-9.1666-1.8388c.694 0 1.2086-.0397 1.5678-.1088v-2.2934a5.3639 5.3639 0 00-1.3303-.1679 4.8283 4.8283 0 00-.758.0582 2.2845 2.2845 0 00-.688.2024c-.2029.0979-.371.2362-.4919.4142-.1268.1788-.185.2826-.185.5533 0 .5297.185.8359.5205 1.0375.3355.2016.7928.3053 1.365.3053v-.0008zm-.1969-8.1817c.7463 0 1.3768.092 1.8856.2767.5088.1838.9195.4428 1.2204.7717.3068.334.5147.7777.6423 1.251.1327.4723.196.991.196 1.5603v5.798c-.5235.1036-1.05.192-1.5787.2649-.7048.1037-1.4976.156-2.3774.156-.5832 0-1.1215-.0582-1.6016-.167a3.385 3.385 0 01-1.2432-.5364 2.6034 2.6034 0 01-.8037-.9565c-.191-.3922-.29-.9447-.29-1.5208 0-.5533.11-.905.3246-1.2863a2.7351 2.7351 0 01.8849-.9329c.376-.242.8029-.415 1.2948-.5187a7.4517 7.4517 0 011.5381-.156 7.1162 7.1162 0 011.6667.2024V8.886c0-.259-.0296-.5061-.093-.7372a1.5847 1.5847 0 00-.3245-.6158 1.5079 1.5079 0 00-.6119-.4158 2.6788 2.6788 0 00-.966-.173c-.5206 0-.9948.0634-1.4283.1384a6.5481 6.5481 0 00-1.065.259l-.2712-1.849c.2831-.0986.7048-.1964 1.2491-.2943a9.2979 9.2979 0 011.752-.1501v.0008zm44.6597 8.1193c.6947 0 1.2086-.0405 1.567-.1097v-2.2942a5.3743 5.3743 0 00-1.3303-.1679c-.2485 0-.503.0177-.7573.0582a2.2853 2.2853 0 00-.688.2024 1.2333 1.2333 0 00-.4918.4142c-.1268.1788-.1843.2826-.1843.5533 0 .5297.1843.8359.5198 1.0375.3414.2066.7927.3053 1.365.3053v.0009zm-.191-8.1767c.7463 0 1.3768.0912 1.8856.2759.5087.1847.9195.4436 1.2204.7717.3.329.5147.7786.6414 1.251a5.7248 5.7248 0 01.197 1.562v5.7972c-.3466.0742-.874.1602-1.5788.2648-.7049.1038-1.4976.1552-2.3774.1552-.5832 0-1.1215-.0573-1.6016-.167a3.385 3.385 0 01-1.2432-.5356 2.6034 2.6034 0 01-.8038-.9565c-.191-.3922-.2898-.9447-.2898-1.5216 0-.5533.1098-.905.3245-1.2854a2.7373 2.7373 0 01.8849-.9338c.376-.2412.8029-.4141 1.2947-.5178a7.4545 7.4545 0 012.325-.1097c.2781.0287.5672.081.879.156v-.3686a2.7781 2.7781 0 00-.092-.738 1.5788 1.5788 0 00-.3246-.6166 1.5079 1.5079 0 00-.612-.415 2.6797 2.6797 0 00-.966-.1729c-.5205 0-.9947.0633-1.4282.1384a6.5608 6.5608 0 00-1.065.259l-.2712-1.8498c.283-.0979.7048-.1957 1.2491-.2935a9.8597 9.8597 0 011.752-.1494zm-6.79-1.072c-.7576.001-1.373-.6103-1.3759-1.3664 0-.755.6128-1.3664 1.376-1.3664.764 0 1.3775.6115 1.3775 1.3664s-.6195 1.3664-1.3776 1.3664zm1.1393 11.1507h-2.2726V5.3409l2.2734-.3568v10.0845l-.0008.0017zm-3.984 0c-3.707.0168-3.707-2.986-3.707-3.4642L59.7069.3576 61.9685 0v11.1794c0 .2715 0 1.9889 1.452 1.994V15.0703zm-7.3512-4.979c0-.975-.2138-1.7873-.6305-2.3516-.4167-.571-.9998-.852-1.747-.852-.7454 0-1.3302.281-1.7452.852-.4166.5702-.6195 1.3765-.6195 2.3516 0 .9851.208 1.6473.6254 2.2183.4158.576.9998.8587 1.7461.8587.7454 0 1.3303-.2885 1.747-.8595.4158-.5761.6237-1.2315.6237-2.2184v.0009zm2.3132-.006c0 .7609-.1099 1.3361-.3356 1.9654a4.654 4.654 0 01-.9533 1.6076A4.214 4.214 0 0155.613 14.69c-.579.2412-1.4697.3795-1.9143.3795-.4462-.005-1.3303-.1324-1.9033-.3795a4.307 4.307 0 01-1.474-1.0316c-.4115-.4445-.7293-.9801-.9609-1.6076a5.3423 5.3423 0 01-.3465-1.9653c0-.7608.104-1.493.3356-2.1155a4.683 4.683 0 01.9719-1.5958 4.3383 4.3383 0 011.479-1.0257c.5739-.242 1.2043-.3567 1.8864-.3567.6829 0 1.3125.1197 1.8906.3567a4.1245 4.1245 0 011.4816 1.0257 4.7587 4.7587 0 01.9592 1.5958c.2426.6225.3643 1.3547.3643 2.1155zm-17.0198 0c0 .9448.208 1.9932.6238 2.431.4166.4386.955.6579 1.6142.6579.3584 0 .6998-.0523 1.0176-.1502.3186-.0978.5721-.2134.775-.3517V7.0784a8.8706 8.8706 0 00-1.4926-.1906c-.8206-.0236-1.4452.312-1.8847.8468-.4335.5365-.6533 1.476-.6533 2.3516v-.0008zm6.2863 4.4485c0 1.5385-.3938 2.662-1.1866 3.3773-.791.7136-2.0005 1.0712-3.6308 1.0712-.5958 0-1.834-.1156-2.8228-.334l.3643-1.7865c.8282.173 1.9202.2193 2.4932.2193.9077 0 1.555-.1847 1.943-.5533.388-.3686.578-.916.578-1.643v-.3687a6.8289 6.8289 0 01-.8848.3349c-.3634.1096-.786.167-1.261.167-.6246 0-1.1917-.0979-1.7055-.2944a3.5554 3.5554 0 01-1.3244-.8645c-.3642-.3796-.6541-.8579-.8561-1.4289-.2028-.571-.3068-1.59-.3068-2.339 0-.7034.1099-1.5856.3245-2.1735.2198-.5871.5316-1.0949.9542-1.515.4167-.42.9255-.743 1.5213-.98a5.5923 5.5923 0 012.052-.3855c.7353 0 1.4114.092 2.0707.2024.6592.1088 1.2204.2236 1.6776.35v8.945-.0008zM11.5026 4.2418v-.6511c-.0005-.4553-.3704-.8241-.8266-.8241H8.749c-.4561 0-.826.3688-.8265.824v.669c0 .0742.0693.1264.1445.1096a6.0346 6.0346 0 011.6768-.2362 6.125 6.125 0 011.6202.2185.1116.1116 0 00.1386-.1097zm-5.2806.852l-.3296-.3282a.8266.8266 0 00-1.168 0l-.393.3922a.8199.8199 0 000 1.164l.3237.323c.0524.0515.1268.0397.1733-.0117.191-.259.3989-.507.6305-.7372.2374-.2362.48-.4437.7462-.6335.0575-.0354.0634-.1155.017-.1687zm3.5159 2.069v2.818c0 .081.0879.1392.1622.0987l2.5102-1.2964c.0574-.0287.0752-.0987.0464-.1552a3.1237 3.1237 0 00-2.603-1.574c-.0575 0-.115.0456-.115.1097l-.0008-.0009zm.0008 6.789c-2.0933.0005-3.7915-1.6912-3.7947-3.7804C5.9468 8.0821 7.6452 6.39 9.7387 6.391c2.0932-.0005 3.7911 1.6914 3.794 3.7804a3.7783 3.7783 0 01-1.1124 2.675 3.7936 3.7936 0 01-2.6824 1.1054h.0008zM9.738 4.8002c-1.9218 0-3.6975 1.0232-4.6584 2.6841a5.359 5.359 0 000 5.3683c.9609 1.661 2.7366 2.6841 4.6584 2.6841a5.3891 5.3891 0 003.8073-1.5725 5.3675 5.3675 0 001.578-3.7987 5.3574 5.3574 0 00-1.5771-3.797A5.379 5.379 0 009.7387 4.801l-.0008-.0008z" fill="currentColor" fill-rule="evenodd"></path></svg>`);
}
const _sfc_setup$9 = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Algolia.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$9 = {
  __name: "Tags",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const runtimeConfig = useRuntimeConfig();
    const { locale, t } = useI18n();
    const localePath = useLocalePath();
    const fields = `fields[0]=type`;
    const filters = `filters[item_lang][locale][$eq]=${locale.value}&filters[item_lang][isTag][$eq]=true`;
    const populate = `populate[item_lang][fields][0]=title&populate[item_lang][fields][1]=slug`;
    const params = `${fields}&${filters}&${populate}`;
    const url = `${runtimeConfig.public.API_BASE_URL}items?${params}`;
    const { data: tags } = ([__temp, __restore] = withAsyncContext(() => useFetch(url, "$4hSNFEsF9b")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_2;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap justify-center items-center gap-4" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(tags).data, (tag) => {
        _push(`<li class="${ssrRenderClass([tag.attributes.type === "series" ? "bg-trso-yellow after:bg-trso-yellow" : "bg-trso-blue after:bg-trso-blue", "grow-1 relative px-2 lg:px-4 py-1 lg:py-2 text-white after:content-[''] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:rounded after:origin-center after:transition-all after:duration-500 hover:after:scale-110 hover:after:opacity-0"])}">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)({ name: "type-id-slug", params: { type: tag.attributes.type === "series" ? "tv-series" : "movies", id: tag.id, slug: tag.attributes.item_lang.data.attributes.slug } }),
          title: tag.attributes.item_lang.data.attributes.title,
          class: "font-medium text-sm lg:text-base"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(tag.attributes.item_lang.data.attributes.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(tag.attributes.item_lang.data.attributes.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Tags.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Search_vue_vue_type_style_index_0_scoped_05e0247e_lang = "";
const _sfc_main$8 = {
  __name: "Search",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const route = useRoute();
    useRouter();
    const localePath = useLocalePath();
    const customSearch = ref("");
    const isOnResults = ref(false);
    const searchResults = reactive({
      hits: []
    });
    watch(route, () => {
      closeSearch();
    });
    function closeSearch() {
      customSearch.value = "";
      searchResults.hits = [];
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsSearch = __nuxt_component_0$2;
      const _component_NuxtLink = __nuxt_component_2;
      const _component_IconsPlus = __nuxt_component_2$1;
      const _component_IconsAlgolia = __nuxt_component_3;
      const _component_LayoutTags = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "search",
        class: "bg-trso-blue border-b-2 border-trso-blue px-4 lg:px-0 relative py-8 shadow-sub lg:z-10"
      }, _attrs))} data-v-05e0247e><div class="container" data-v-05e0247e><div class="flex flex-row items-center relative max-w-lg mx-auto gap-x-2 mb-4" data-v-05e0247e><span class="absolute inset-y-0 left-0 pl-3 flex items-center" data-v-05e0247e>`);
      _push(ssrRenderComponent(_component_IconsSearch, { class: "text-trso-blue h-4 w-4" }, null, _parent));
      _push(`</span><input${ssrRenderAttr("value", unref(customSearch))} class="pl-8 py-2 block w-full border shadow-sm focus:border-trso-blue outline-0 ring-0 placeholder:text-trso-blue placeholder:italic" type="text"${ssrRenderAttr("placeholder", `${_ctx.$t("components.search.placeholder")}`)} data-v-05e0247e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)({ name: "search-search", params: { search: unref(customSearch) } }),
        disabled: unref(customSearch).length < 3,
        onMouseover: ($event) => isOnResults.value = true,
        onMouseleave: ($event) => isOnResults.value = false,
        class: "transition-colors duration-500 bg-trso-yellow hover:bg-trso-yellow2 disabled:bg-trso-yellow2 hover:disabled:bg-trso-yellow-trso2 border border-trso-yellow py-2 px-2 cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconsSearch, { class: "text-white h-5 w-5" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconsSearch, { class: "text-white h-5 w-5" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="block absolute cursor-pointer top-[10px] right-[60px] rounded bg-trso-blue text-white" data-v-05e0247e><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-05e0247e><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" data-v-05e0247e></path></svg></button></div><div style="${ssrRenderStyle(unref(searchResults).hits.length ? null : { display: "none" })}" data-v-05e0247e>`);
      if (unref(searchResults).hits.length) {
        _push(`<ul id="searchResults" class="absolute left-1/2 -translate-x-1/2 z-50 w-full lg:max-w-4xl max-h-[70vh] overflow-y-auto bg-white drop-shadow-lg scrollbar scrollbar-thumb-trso-blue scrollbar-track-trso-blue2" data-v-05e0247e><!--[-->`);
        ssrRenderList(unref(searchResults).hits, (result) => {
          _push(`<li data-v-05e0247e>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)({ name: "type-id-slug", params: { type: result.type === "series" ? "tv-series" : "movies", id: result.objectID, slug: `${result["slug_" + unref(locale)]}` } }),
            class: "block w-full px-4 lg:px-8 py-2 lg:py-4 text-center lg:text-left text-trso-blue hover:text-white text-sm lg:text-base transition-colors duration-500 bg-white hover:bg-trso-blue"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(result["title_" + unref(locale)])} `);
                if (result.director.length) {
                  _push2(`<span data-v-05e0247e${_scopeId}>(${ssrInterpolate(result.director)})</span>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  createTextVNode(toDisplayString(result["title_" + unref(locale)]) + " ", 1),
                  result.director.length ? (openBlock(), createBlock("span", { key: 0 }, "(" + toDisplayString(result.director) + ")", 1)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--><li data-v-05e0247e>`);
        if (unref(customSearch).length >= 3) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)({ name: "search-search", params: { search: unref(customSearch) } }),
            class: "flex items-center justify-center lg:justify-start gap-x-2 w-full px-4 lg:px-8 py-2 lg:py-4 bg-trso-blue text-white uppercase"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="text-white h-4 w-4" data-v-05e0247e${_scopeId}>`);
                _push2(ssrRenderComponent(_component_IconsPlus, null, null, _parent2, _scopeId));
                _push2(`</i><span data-v-05e0247e${_scopeId}>${ssrInterpolate(_ctx.$t("components.search.more"))}</span>`);
              } else {
                return [
                  createVNode("i", { class: "text-white h-4 w-4" }, [
                    createVNode(_component_IconsPlus)
                  ]),
                  createVNode("span", null, toDisplayString(_ctx.$t("components.search.more")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li><li class="algolia-logo px-2 py-4 flex flex-row justify-center items-center gap-x-2" data-v-05e0247e>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "https://www.algolia.com/",
          class: "flex items-center gap-x-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-05e0247e${_scopeId}>${ssrInterpolate(_ctx.$t("components.search.madeWith"))}</span>`);
              _push2(ssrRenderComponent(_component_IconsAlgolia, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", null, toDisplayString(_ctx.$t("components.search.madeWith")), 1),
                createVNode(_component_IconsAlgolia)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul>`);
      } else {
        _push(`<div class="absolute z-20 bg-white w-full left-0 mt-8" data-v-05e0247e><span class="block px-4 lg:px-8 py-2" data-v-05e0247e>${ssrInterpolate(_ctx.$t("components.search.empty"))}</span></div>`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_LayoutTags, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Search.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-05e0247e"]]);
const _sfc_main$7 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    useState("contactModalState", () => false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_2;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "fixed left-0 bottom-0 w-full z-50 bg-trso-yellow bg-opacity-80" }, _attrs))}><nav class="py-4 text-white text-center max-w-7xl mx-auto"><ul class="flex justify-center items-center gap-x-4 font-semibold"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)({ name: "index" })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tarseroo.com ©2023`);
          } else {
            return [
              createTextVNode("Tarseroo.com ©2023")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)({ name: "privacy-policy" }),
        title: _ctx.$t("footer.privacy")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("footer.privacy"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("footer.privacy")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><button>${ssrInterpolate(_ctx.$t("components.formsContact.title"))}</button></li></ul></nav></footer>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Footer.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$6 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, _attrs))}><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" clip-rule="evenodd"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/ArrowTop.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$5 = {
  __name: "ToTop",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsArrowTop = __nuxt_component_0;
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "block fixed z-70 right-0 bottom-0 mb-14 mr-[12px] lg:mr-[24px] cursor-pointer" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_IconsArrowTop, { class: "w-10 h-10 lg:w-14 lg:h-14 text-trso-blue" }, null, _parent));
      _push(`</button>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/ToTop.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Modal",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useState("contactModalState");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed flex justify-center items-center z-50 inset-0 bg-black/75 cursor-pointer" }, _attrs))}><div class="modal-content overflow-y-auto bg-white w-11/12 md:w-4/5 lg:w-3/5 px-4 lg:px-8 py-4 lg:py-8 max-h-[80vh] scrollbar scrollbar-thumb-trso-blue scrollbar-track-trso-blue-light"><div class="overflow-y-auto"><div class="flex justify-end mr-6"><button class="cursor-pointer text-trso-blue"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></div><div><span class="block pb-4 text-2xl font-semibold tracking-tighter leading-none"></span></div><div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/helpers/Modal.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "ContactForm",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp();
    ref(null);
    const fields = reactive({
      email: "",
      message: ""
    });
    const errors = reactive({
      email: false,
      message: false
    });
    const states = reactive({
      success: false,
      error: false,
      button: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><span class="block px-6 mb-4 text-center text-trso-blue font-serif text-2xl uppercase">${ssrInterpolate(_ctx.$t("components.formsContact.title"))}</span><span class="${ssrRenderClass([unref(states).success ? "block px-6" : "hidden", "text-green-400"])}">${ssrInterpolate(_ctx.$t("components.formsContact.success"))}</span><span class="${ssrRenderClass([unref(states).error ? "block px-6" : "hidden", "text-red-400"])}">${ssrInterpolate(_ctx.$t("components.formsContact.error"))}</span><form name="contact" method="POST" data-netlify="true"><div class="p-6"><label class="block mb-6"><span class="block text-trso-blue">${ssrInterpolate(_ctx.$t("components.formsContact.email"))}<span>*</span></span><span class="${ssrRenderClass([unref(errors).email ? "block" : "hidden", "text-red-700 text-sm"])}">${ssrInterpolate(_ctx.$t("components.formsContact.emailError"))}</span><input name="email" type="email"${ssrRenderAttr("value", unref(fields).email)} class="block w-full mt-1 p-2 border border-trso-blue2 focus:border-trso-blue shadow-sm focus:outline-none focus:ring focus:ring-trso-blue focus:ring-opacity-50 placeholder:text-trso-blue placeholder:italic placeholder:text-sm"${ssrRenderAttr("placeholder", _ctx.$t("components.formsContact.emailPlaceholder"))} required></label><label class="block mb-6"><span class="block text-trso-blue">${ssrInterpolate(_ctx.$t("components.formsContact.message"))}<span>*</span></span><span class="${ssrRenderClass([unref(errors).message ? "block" : "hidden", "text-red-700 text-sm"])}">${ssrInterpolate(_ctx.$t("components.formsContact.messageError"))}</span><textarea name="message" class="block w-full mt-1 p-2 border border-trso-blue2 focus:border-trso-blue shadow-sm focus:outline-none focus:ring focus:ring-trso-blue focus:ring-opacity-50 placeholder:text-trso-blue placeholder:italic" rows="4"${ssrRenderAttr("placeholder", _ctx.$t("components.formsContact.messagePlaceholder"))}>${ssrInterpolate(unref(fields).message)}</textarea></label><div class="mb-6"><input type="submit"${ssrIncludeBooleanAttr(unref(states).button) ? " disabled" : ""}${ssrRenderAttr("value", _ctx.$t("components.formsContact.send"))} class="w-full flex flex-wrap items-center justify-center px-4 py-2 text-xl uppercase text-white shadow cursor-pointer transition-colors duration-500 bg-trso-blue hover:bg-trso-blue2"></div><p class="text-trso-blue"><span class="text-sm">*</span>${ssrInterpolate(_ctx.$t("components.formsContact.required"))}</p></div></form></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/ContactForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ContactModal_vue_vue_type_style_index_0_scoped_caabc3fe_lang = "";
const _sfc_main$2 = {
  __name: "ContactModal",
  __ssrInlineRender: true,
  setup(__props) {
    const contactModalState = useState("contactModalState");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HelpersModal = _sfc_main$4;
      const _component_FormsContactForm = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-caabc3fe>`);
      _push(ssrRenderComponent(_component_HelpersModal, {
        style: unref(contactModalState) ? null : { display: "none" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormsContactForm, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormsContactForm)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/ContactModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-caabc3fe"]]);
const error_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "error",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const header = ref(null);
    const search = ref(null);
    const toTopState = ref(false);
    const miniHeader = ref(false);
    const searchButtonState = ref(false);
    const searchButtonVisible = ref(false);
    onBeforeUnmount(() => {
      window.removeEventListener("scroll", scrollListener);
    });
    function scrollListener() {
      toTopState.value = window.scrollY > 150;
      if (window.scrollY > header.value.clientHeight) {
        miniHeader.value = true;
        searchButtonVisible.value = true;
      } else {
        miniHeader.value = false;
        searchButtonState.value = false;
        searchButtonVisible.value = false;
      }
    }
    const headerTopRules = computed(() => {
      return `lg:-top-[${header.value.clientHeight}px] lg:translate-y-[${header.value.clientHeight}px]`;
    });
    function changeSearchSate() {
      searchButtonState.value = !searchButtonState.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutHeaderNav = __nuxt_component_0$1;
      const _component_LayoutSearch = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_2;
      const _component_IconsArrowRight = __nuxt_component_3$1;
      const _component_LayoutFooter = _sfc_main$7;
      const _component_LayoutToTop = _sfc_main$5;
      const _component_LayoutContactModal = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(_attrs)}><header class="${ssrRenderClass([unref(miniHeader) === true ? `${unref(headerTopRules)} lg:fixed lg:z-50 lg:w-full transform transition duration-500 ease-in-out delay-200` : "top-0", "mb-4 md:mb-8 lg:mb-14"])}">`);
      _push(ssrRenderComponent(_component_LayoutHeaderNav, {
        class: unref(miniHeader) === true ? "py-1" : "py-1 lg:py-4",
        searchButtonState: unref(searchButtonState),
        searchButtonVisible: unref(searchButtonVisible),
        onChangeSearchState: ($event) => changeSearchSate()
      }, null, _parent));
      _push(ssrRenderComponent(_component_LayoutSearch, {
        ref_key: "search",
        ref: search,
        style: (unref(miniHeader) === true ? unref(searchButtonState) : true) ? null : { display: "none" }
      }, null, _parent));
      _push(`</header><div class="container px-2 md:px-4 max-w-6xl mb-16"><p class="text-3xl mb-16">${ssrInterpolate(_ctx.$t("error.message"))}</p><p class="text-lg text-center font-sans text-trso-yellow mb-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)({ name: "type-pages-page", params: { type: "tv-series", page: 1 } }),
        title: _ctx.$t("header.series"),
        class: "flex items-center gap-x-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconsArrowRight, { class: "h-5 w-5" }, null, _parent2, _scopeId));
            _push2(`</i><span${_scopeId}>${ssrInterpolate(_ctx.$t("error.series"))}</span>`);
          } else {
            return [
              createVNode("i", null, [
                createVNode(_component_IconsArrowRight, { class: "h-5 w-5" })
              ]),
              createVNode("span", null, toDisplayString(_ctx.$t("error.series")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><p class="text-lg text-center font-sans text-trso-blue mb-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)({ name: "type-pages-page", params: { type: "movies", page: 1 } }),
        title: _ctx.$t("header.series"),
        class: "flex items-center gap-x-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconsArrowRight, { class: "h-5 w-5" }, null, _parent2, _scopeId));
            _push2(`</i><span${_scopeId}>${ssrInterpolate(_ctx.$t("error.movies"))}</span>`);
          } else {
            return [
              createVNode("i", null, [
                createVNode(_component_IconsArrowRight, { class: "h-5 w-5" })
              ]),
              createVNode("span", null, toDisplayString(_ctx.$t("error.movies")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div>`);
      _push(ssrRenderComponent(_component_LayoutFooter, null, null, _parent));
      _push(ssrRenderComponent(_component_LayoutToTop, {
        style: unref(toTopState) ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_LayoutContactModal, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _sfc_main$1 = _sfc_main;
export {
  _sfc_main$1 as default
};
//# sourceMappingURL=error-component-8e0514eb.js.map
