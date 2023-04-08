import { _ as _sfc_main$9 } from "./Breadcrumbs-8a756e76.js";
import { useSSRContext, mergeProps, ref, resolveComponent, unref, withCtx, createVNode, resolveDynamicComponent, openBlock, createBlock, toDisplayString, withAsyncContext, computed } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderVNode, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc, b as useRuntimeConfig, c as useRoute, u as useI18n, f as useNuxtApp } from "../server.mjs";
import "destr";
import { _ as __nuxt_component_1$1, u as useHead } from "./nuxt-img-e4923e79.js";
import { u as useFetch } from "./fetch-81eb1216.js";
import "./composables-10605620.js";
import "js-cookie";
import "is-https";
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
import "defu";
import "@algolia/cache-in-memory";
import "vue-social-sharing";
import "ohash";
const _sfc_main$8 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#ffffff",
    viewBox: "0 0 50 50"
  }, _attrs))}><path d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z"></path></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Facebook.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$7 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#ffffff",
    viewBox: "0 0 50 50"
  }, _attrs))}><path d="M50.061,10.438c-1.846,0.818-3.826,1.369-5.908,1.62c2.125-1.273,3.757-3.29,4.523-5.688c-1.986,1.177-4.19,2.033-6.531,2.493c-1.874-2-4.547-3.247-7.504-3.247c-5.68,0-10.284,4.604-10.284,10.282c0,0.805,0.092,1.589,0.269,2.343C16.08,17.812,8.502,13.718,3.429,7.497c-0.885,1.522-1.391,3.289-1.391,5.172c0,3.567,1.812,6.713,4.574,8.56c-1.688-0.054-3.271-0.517-4.657-1.288c0,0.044,0,0.086,0,0.131c0,4.984,3.544,9.134,8.245,10.084c-0.86,0.236-1.769,0.36-2.707,0.36c-0.664,0-1.309-0.064-1.938-0.186c1.313,4.081,5.108,7.06,9.607,7.143c-3.517,2.757-7.951,4.399-12.77,4.399c-0.833,0-1.649-0.048-2.452-0.144c4.548,2.919,9.956,4.619,15.762,4.619c18.915,0,29.26-15.668,29.26-29.252c0-0.448-0.011-0.894-0.03-1.332C46.94,14.313,48.684,12.5,50.061,10.438z"></path></svg>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Twitter.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$6 = {
  __name: "Social",
  __ssrInlineRender: true,
  props: {
    title: String,
    description: String,
    quote: String,
    hashtags: String
  },
  setup(__props) {
    const runtimeConfig = useRuntimeConfig();
    const route = useRoute();
    const networks = [
      { network: "facebook", name: "Facebook", icon: __nuxt_component_0 },
      { network: "twitter", name: "Twitter", icon: __nuxt_component_1 }
    ];
    const tags = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShareNetwork = resolveComponent("ShareNetwork");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "share-network-list flex justify-end items-center gap-x-2 px-2 py-2" }, _attrs))}><!--[-->`);
      ssrRenderList(networks, (network) => {
        _push(ssrRenderComponent(_component_ShareNetwork, {
          network: network.network,
          key: network.network,
          url: `${unref(runtimeConfig).public.BASE_URL}${unref(route).fullPath}`,
          title: __props.title,
          description: __props.description,
          quote: "whesh la zone",
          hashtags: unref(tags),
          class: "p-1 bg-trso-blue"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(network.icon), { class: "h-6 w-6" }, null), _parent2, _scopeId);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(network.icon), { class: "h-6 w-6" }))
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/slug/Social.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "ReadMore",
  __ssrInlineRender: true,
  props: {
    color: String
  },
  setup(__props) {
    ref(null);
    const readMoreState = ref(true);
    const buttonVisible = ref(false);
    const style = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="${ssrRenderClass([unref(style), "text-justify pb-2 text-sm lg:text-base relative transition-all duration-500 ease before:transition-all before:duration-500 before:ease"])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (unref(buttonVisible)) {
        _push(`<button class="${ssrRenderClass([`bg-trso-${__props.color}`, "btn block mx-auto mt-2 py-1 px-3 text-white text-sm lg:text-base font-semibold border-none"])}">`);
        if (unref(readMoreState)) {
          _push(`<span>${ssrInterpolate(_ctx.$t("pages.slug.more"))}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(_ctx.$t("pages.slug.less"))}</span>`);
        }
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/helpers/ReadMore.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "BookDetail",
  __ssrInlineRender: true,
  props: {
    book: Object,
    type: String,
    color: String
  },
  setup(__props) {
    const { locale } = useI18n();
    const { $formatDate } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_1$1;
      const _component_HelpersReadMore = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-4 lg:flex items-center" }, _attrs))}><span class="block pb-4 lg:pb-0 pr-4 w-full lg:w-1/6">`);
      if (__props.book.thumbnail) {
        _push(ssrRenderComponent(_component_nuxt_img, {
          class: "mx-auto lg:mx-0 lg:w-full h-auto",
          loading: "lazy",
          format: "webp",
          src: __props.book.thumbnail,
          alt: `${_ctx.$t("pages.slug.bookImgAlt")} ${__props.book.title}`
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</span><div class="w-full lg:w-5/6"><h2 class="mb-4"><span class="block text-xl font-bold pb-1">${ssrInterpolate(__props.book.title)}</span>`);
      if (__props.book.subtitle) {
        _push(`<span class="block text-sm pb-2">(${ssrInterpolate(__props.book.subtitle)})</span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.book.publisher || __props.book.published) {
        _push(`<span class="${ssrRenderClass([`text-trso-${__props.color}`, "block text-left text-xs italic block"])}">`);
        if (__props.book.publisher) {
          _push(`<span>${ssrInterpolate(_ctx.$t("pages.slug.published"))} ${ssrInterpolate(__props.book.publisher)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.book.published && __props.book.published != "1000-01-01") {
          _push(`<span>`);
          if (__props.book.publisher) {
            _push(`<span> - </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(` ${ssrInterpolate(unref($formatDate)(__props.book.published, unref(locale)))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</h2>`);
      if (__props.book.description) {
        _push(ssrRenderComponent(_component_HelpersReadMore, { color: __props.color }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p itemProp="description"${_scopeId}>${ssrInterpolate(__props.book.description)}</p>`);
            } else {
              return [
                createVNode("p", { itemProp: "description" }, toDisplayString(__props.book.description), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/slug/BookDetail.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "BooksAccordion",
  __ssrInlineRender: true,
  props: {
    book: Object,
    color: String
  },
  setup(__props) {
    const { locale } = useI18n();
    const { $formatDate } = useNuxtApp();
    const contentClass = ref("disabled");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HelpersReadMore = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["mb-2 p-4 border", `border-trso-${__props.color}`]
      }, _attrs))}><div class="${ssrRenderClass([unref(contentClass), "flex flex-wrap items-center"])}">`);
      if (__props.book.thumbnail) {
        _push(`<img${ssrRenderAttr("src", __props.book.thumbnail)}${ssrRenderAttr("alt", `${_ctx.$t("pages.slug.bookImgAlt")} ${__props.book.title}`)} class="w-1/4 w-auto w-auto h-24">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="pl-2 sm:pl-4 md:pl-8 pr-0 sm:pr-4 md:pr-8 w-3/4 md:w-auto"><h3 class="text-white text-base md:text-lg"><span>${ssrInterpolate(__props.book.title)}</span></h3>`);
      if (__props.book.authors) {
        _push(`<p class="text-sm md:text-base"><span>${ssrInterpolate(_ctx.$t("pages.slug.written"))}</span><!--[-->`);
        ssrRenderList(__props.book.authors, (author, index) => {
          _push(`<span>`);
          if (index === Object.keys(__props.book.authors).length - 1 && __props.book.authors.length > 1) {
            _push(`<span>${ssrInterpolate(_ctx.$t("pages.slug.and"))}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`${ssrInterpolate(author)}`);
          if (index < Object.keys(__props.book.authors).length - 2) {
            _push(`<span>, </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</span>`);
        });
        _push(`<!--]--></p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.book.publisher || __props.book.published) {
        _push(`<p class="text-xs md:sm">`);
        if (__props.book.publisher) {
          _push(`<span>${ssrInterpolate(_ctx.$t("pages.slug.published"))} ${ssrInterpolate(__props.book.publisher)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.book.published && __props.book.published != "1000-01-01") {
          _push(`<span>`);
          if (__props.book.publisher) {
            _push(`<span> - </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`${ssrInterpolate(unref($formatDate)(__props.book.published, unref(locale)))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_HelpersReadMore, { color: __props.color }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>${ssrInterpolate(__props.book.description)}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(__props.book.description), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/slug/BooksAccordion.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0 = "" + __buildAssetsURL("image-not-available.7d3a20b6.jpg");
const _sfc_main$2 = {
  __name: "Detail",
  __ssrInlineRender: true,
  props: {
    itemAttr: Object,
    itemLangAttr: Object,
    bookAttr: Object
  },
  setup(__props) {
    const props = __props;
    const color = props.itemAttr.type === "series" ? "yellow" : "blue";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HelpersReadMore = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap" }, _attrs))}><div class="sm:w-1/6 py-2 mx-auto lg:pr-4">`);
      if (__props.itemAttr.poster != "N/A") {
        _push(`<img${ssrRenderAttr("src", __props.itemAttr.poster)}${ssrRenderAttr("alt", `Poster ${__props.itemLangAttr.title}`)} class="inline-block">`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_0)} alt="image not available" class="inline-block">`);
      }
      _push(`</div><div class="sm:w-5/6 py-2"><span class="block font-bold mb-2 text-center lg:text-justify">${ssrInterpolate(_ctx.$t("pages.slug.hidDescription1"))} ${ssrInterpolate(__props.itemAttr.type)} ${ssrInterpolate(__props.itemLangAttr.title)} ${ssrInterpolate(_ctx.$t("pages.slug.hidDescription2"))} ${ssrInterpolate(__props.bookAttr.title)}? </span>`);
      _push(ssrRenderComponent(_component_HelpersReadMore, { color: unref(color) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p itemProp="description"${_scopeId}>${ssrInterpolate(__props.itemLangAttr.plot)}</p>`);
          } else {
            return [
              createVNode("p", { itemProp: "description" }, toDisplayString(__props.itemLangAttr.plot), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="py-8 text-sm lg:text-base"><!--[-->`);
      ssrRenderList(__props.itemAttr.ratings, (rating) => {
        _push(`<li><span class="italic pb-2">${ssrInterpolate(rating.Source)}:</span>  <span class="${ssrRenderClass([`text-trso-${unref(color)}`, "font-semibold"])}">${ssrInterpolate(rating.Value)}</span></li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/slug/Detail.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Comments",
  __ssrInlineRender: true,
  props: {
    bookTitle: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="mb-4 font-bold text-base lg:text-lg text-center lg:text-justify"><span>${ssrInterpolate(_ctx.$t("pages.slug.comments"))} ${ssrInterpolate(__props.bookTitle)}, ${ssrInterpolate(_ctx.$t("pages.slug.comments2"))}</span></h2><div id="disqus_thread"></div><noscript>Please enable JavaScript to view the &lt;a href=&quot;https://disqus.com/?ref_noscript&quot;&gt;comments powered by Disqus.&lt;/a&gt;</noscript></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/slug/Comments.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "[id]-[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale, t } = useI18n();
    const runtimeConfig = useRuntimeConfig();
    const route = useRoute();
    const id = route.params.id;
    const fields = `fields[0]=imdbId&fields[1]=poster&fields[2]=type&fields[3]=ratings`;
    const filters = `filters[item_lang][locale][$eq]=${locale.value}`;
    const populateItemLang = `populate[item_lang][fields][0]=title&populate[item_lang][fields][1]=plot&populate[item_lang][fields][2]=slug`;
    const populateBooks = `populate[books][fields][0]=title&populate[books][fields][1]=description&populate[books][fields][2]=thumbnail&populate[books][fields][3]=authors&populate[books][fields][4]=firstBook&populate[books][fields][5]=published&populate[books][fields][6]=publisher&populate[books][fields][7]=subtitle`;
    const params = `${fields}&${filters}&${populateItemLang}&${populateBooks}`;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${runtimeConfig.public.API_BASE_URL}items/${id}?${params}`, "$XQ2zETsRE3")), __temp = await __temp, __restore(), __temp);
    const item = computed(() => {
      if (!data.value.data)
        return null;
      const attr = data.value.data.attributes;
      const langAttr = attr.item_lang.data.attributes;
      const books = attr.books.data;
      const firstBook = books.find((book) => book.attributes.firstBook === true);
      const plotSplit = langAttr.plot.split(".");
      const plotForMeta = `${plotSplit[0]}.`;
      const color = attr.type === "series" ? "yellow" : "blue";
      return { attr, langAttr, books, firstBook, plotForMeta, color };
    });
    useHead({
      title: `${runtimeConfig.public.websiteName} - ${t("pages.slug.what")} ${t("pages.slug.the")} ${item.value.attr.type} ${item.value.langAttr.title} ${t("pages.slug.on")}`,
      meta: [
        { name: "description", content: `${t("pages.slug.hidDescription1")} ${item.value.attr.type} ${t("pages.slug.hidDescription2")} ${item.value.firstBook.attributes.title}` },
        { name: "keywords", content: `${t("pages.slug.hidKeywords")}` },
        { property: "og:site_name", content: runtimeConfig.public.websiteName },
        { property: "og:description", content: `${t("pages.slug.the")} ${item.value.attr.type} ${item.value.langAttr.title} ${t("pages.slug.hidOgDescription")} ${item.value.firstBook.attributes.title}. ${item.plotForMeta}` },
        { property: "og:image", content: item.value.attr.poster },
        { property: "twitter:title", content: runtimeConfig.public.websiteName },
        { property: "twitter:description", content: `${t("pages.slug.the")} ${item.value.attr.type} ${item.value.langAttr.title} ${t("pages.slug.hidOgDescription")} ${item.value.firstBook.attributes.title}. ${item.plotForMeta}` },
        { property: "twitter:image:src", content: item.value.attr.poster }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutBreadcrumbs = _sfc_main$9;
      const _component_PagesSlugSocial = _sfc_main$6;
      const _component_PagesSlugBookDetail = _sfc_main$4;
      const _component_PagesSlugBooksAccordion = _sfc_main$3;
      const _component_PagesSlugDetail = _sfc_main$2;
      const _component_PagesSlugComments = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LayoutBreadcrumbs, {
        levels: [{ name: unref(item).attr.type === "series" ? "tv-series" : "movies", route: { name: "type-pages-page", params: { type: unref(item).attr.type === "series" ? "tv-series" : "movies", page: 1 } } }, { name: unref(item).langAttr.title }]
      }, null, _parent));
      _push(`<div itemscope itemtype="http://schema.org/Movie"><h1 class="${ssrRenderClass([`bg-trso-${unref(item).color}`, "block py-2 px-2 text-white text-center font-semibold"])}">${ssrInterpolate(_ctx.$t("pages.slug.what"))} <span itemprop="name">${ssrInterpolate(unref(item).attr.type === "series" ? _ctx.$t("pages.slug.theSeries") : _ctx.$t("pages.slug.theMovie"))} ${ssrInterpolate(unref(item).langAttr.title)}</span> ${ssrInterpolate(_ctx.$t("pages.slug.on"))}</h1><section class="${ssrRenderClass([`border-trso-${unref(item).color}`, "border"])}"><p class="text-lg lg:text-xl text-center font-serif px-4 pt-4"><span class="block pb-1 lg:pb-2 text-center"><i class="fas fa-film"></i>`);
      if (unref(item).attr.type === "series") {
        _push(`<span>${ssrInterpolate(_ctx.$t("pages.slug.theSeries"))}</span>`);
      } else {
        _push(`<span>${ssrInterpolate(_ctx.$t("pages.slug.theMovie"))}</span>`);
      }
      _push(`</span><span class="${ssrRenderClass([`text-trso-${unref(item).color}`, "block pb-0 lg:pb-1"])}"><span class="text-xl sm:text-2xl md:text-3xl lg:text-4xl">${ssrInterpolate(unref(item).langAttr.title)}</span></span>`);
      if (unref(item).attr.director || unref(item).attr.year) {
        _push(`<span class="block text-center italic text-base lg:text-lg">`);
        if (unref(item).attr.director != "N/A") {
          _push(`<span itemprop="director">${ssrInterpolate(_ctx.$t("movie.director"))} ${ssrInterpolate(unref(item).attr.director)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(item).attr.director && unref(item).attr.year) {
          _push(`<span>${ssrInterpolate(_ctx.$t("pages.slug.and"))}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(item).attr.year != "") {
          _push(`<span>${ssrInterpolate(_ctx.$t("pages.slug.released"))} ${ssrInterpolate(unref(item).attr.year)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="block pt-2 pb-1 lg:pb-2 font-bold"><i class="fas fa-book"></i> ${ssrInterpolate(_ctx.$t("pages.slug.from"))}</span><span class="${ssrRenderClass([`text-trso-${unref(item).color}`, "block pb-1 lg:pb-2"])}" itemprop="name"><span class="text-xl sm:text-2xl md:text-3xl lg:text-4xl">${ssrInterpolate(unref(item).firstBook.attributes.title)}</span></span>`);
      if (unref(item).firstBook.attributes.authors) {
        _push(`<span class="block pb-2 md:pb-4 italic text-base lg:text-lg" itemprop="author"><span>${ssrInterpolate(_ctx.$t("pages.slug.by"))} </span><!--[-->`);
        ssrRenderList(unref(item).firstBook.attributes.authors, (author, index) => {
          _push(`<span>`);
          if (index === Object.keys(unref(item).firstBook.attributes.authors).length - 1 && unref(item).firstBook.attributes.authors.length > 1) {
            _push(`<span>${ssrInterpolate(_ctx.$t("pages.slug.and"))}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(` ${ssrInterpolate(author)} `);
          if (index < Object.keys(unref(item).firstBook.attributes.authors).length - 2) {
            _push(`<span>, </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</span>`);
        });
        _push(`<!--]--></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p>`);
      _push(ssrRenderComponent(_component_PagesSlugSocial, {
        title: unref(item).langAttr.title,
        description: unref(item).langAttr.plot,
        quote: "",
        hashtags: _ctx.$t("pages.slug.hidKeywords")
      }, null, _parent));
      _push(`</section><section class="py-8 lg:py-12">`);
      _push(ssrRenderComponent(_component_PagesSlugBookDetail, {
        book: unref(item).firstBook.attributes,
        type: unref(item).attr.type,
        color: unref(item).color
      }, null, _parent));
      _push(`</section>`);
      if (unref(item).books != false && unref(item).books.length) {
        _push(`<section><h2 class="${ssrRenderClass([`bg-trso-${unref(item).color}`, "text-white font-bold py-2 px-4 text-base sm:text-lg md:text-xl text-center font-serif px-4 mb-2"])}">${ssrInterpolate(_ctx.$t("pages.slug.relatedBooks"))}</h2><div class="flex flex-wrap"><!--[-->`);
        ssrRenderList(unref(item).books, (book) => {
          _push(`<div class="my-2 w-full"${ssrRenderAttr("id", `bookThumb${book.id}`)}>`);
          if (book) {
            _push(ssrRenderComponent(_component_PagesSlugBooksAccordion, {
              book: book.attributes,
              color: unref(item).color
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_PagesSlugDetail, {
        itemAttr: unref(item).attr,
        itemLangAttr: unref(item).langAttr,
        bookAttr: unref(item).firstBook.attributes
      }, null, _parent));
      _push(ssrRenderComponent(_component_PagesSlugComments, {
        bookTitle: unref(item).firstBook.attributes.title
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[type]/[id]-[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-_slug_-860b26f1.js.map
