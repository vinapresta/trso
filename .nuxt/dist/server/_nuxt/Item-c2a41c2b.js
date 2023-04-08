import { c as useRoute, u as useI18n, a as __nuxt_component_2, _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_1 } from "./nuxt-img-e4923e79.js";
import { _ as _sfc_main$1 } from "./Heading-d8708ed8.js";
import { useSSRContext, reactive, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode } from "vue";
import "destr";
import { a as useLocalePath } from "./composables-10605620.js";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
const Item_vue_vue_type_style_index_0_scoped_f6f8bc49_lang = "";
const _sfc_main = {
  __name: "Item",
  __ssrInlineRender: true,
  props: {
    itemData: Object,
    type: String,
    lang: String,
    color: String
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const localePath = useLocalePath();
    const { t } = useI18n();
    const firstBook = props.itemData.attributes.books.data[0];
    const langAttr = props.itemData.attributes.item_lang.data.attributes;
    const image = reactive({
      src: "",
      alt: ""
    });
    if (firstBook && firstBook.attributes.thumbnail) {
      image.src = firstBook.attributes.thumbnail;
      image.alt = `${t("list.cover")} ${firstBook.attributes.title}`;
    } else if (props.itemData.attributes.poster.length) {
      image.src = props.itemData.attributes.poster;
      image.alt = `Poster ${langAttr.title}`;
    } else {
      image.src = "/img/tarsier.png";
      image.alt = t("image.na");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_2;
      const _component_nuxt_img = __nuxt_component_1;
      const _component_HelpersHeading = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fade-in opacity-0 scale-90 transition-all origin-center duration-500" }, _attrs))} data-v-f6f8bc49><div class="${ssrRenderClass([`border-trso-${__props.color}`, "relative h-full flex border px-2 pt-2 pb-10"])}" data-v-f6f8bc49>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)({ name: "type-id-slug", params: { type: __props.type, id: `${__props.itemData.id}`, slug: `${unref(langAttr).slug}` } }),
        title: `${_ctx.$t("components.item.linkTitle", { type: __props.type, name: unref(langAttr).title, book: unref(firstBook).attributes.title })}`,
        class: "relative block self-center w-1/4 md:w-1/5 lg:w-1/6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              loading: "lazy",
              placeholder: "/img/tarsier.png",
              class: "list-item__img self-center placeholder:animate-bounce",
              src: unref(image).src,
              alt: unref(image).alt
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                loading: "lazy",
                placeholder: "/img/tarsier.png",
                class: "list-item__img self-center placeholder:animate-bounce",
                src: unref(image).src,
                alt: unref(image).alt
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="pl-2" data-v-f6f8bc49>`);
      _push(ssrRenderComponent(_component_HelpersHeading, {
        tag: unref(route).path != "/" ? "h2" : "h3",
        tagStyle: "item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)({ name: "type-id-slug", params: { type: __props.type, id: `${__props.itemData.id}`, slug: `${unref(langAttr).slug}` } }),
              title: `${_ctx.$t("components.item.linkTitle", { type: __props.type, name: unref(langAttr).title, book: unref(firstBook).attributes.title })}`,
              class: "block"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-f6f8bc49${_scopeId2}>${ssrInterpolate(unref(langAttr).title)} </span><span class="text-sm" data-v-f6f8bc49${_scopeId2}>(${ssrInterpolate(__props.itemData.attributes.year)})</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(unref(langAttr).title) + " ", 1),
                    createVNode("span", { class: "text-sm" }, "(" + toDisplayString(__props.itemData.attributes.year) + ")", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (__props.itemData.attributes.director != "N/A") {
              _push2(`<span class="text-sm font-semibold" data-v-f6f8bc49${_scopeId}>`);
              if (__props.type === "series") {
                _push2(`<span data-v-f6f8bc49${_scopeId}>${ssrInterpolate(_ctx.$t("pages.slug.directedSeries"))}</span>`);
              } else {
                _push2(`<span data-v-f6f8bc49${_scopeId}>${ssrInterpolate(_ctx.$t("pages.slug.directedMovie"))} </span>`);
              }
              _push2(`<span data-v-f6f8bc49${_scopeId}>${ssrInterpolate(__props.itemData.attributes.director)}</span></span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: unref(localePath)({ name: "type-id-slug", params: { type: __props.type, id: `${__props.itemData.id}`, slug: `${unref(langAttr).slug}` } }),
                title: `${_ctx.$t("components.item.linkTitle", { type: __props.type, name: unref(langAttr).title, book: unref(firstBook).attributes.title })}`,
                class: "block"
              }, {
                default: withCtx(() => [
                  createVNode("span", null, toDisplayString(unref(langAttr).title) + " ", 1),
                  createVNode("span", { class: "text-sm" }, "(" + toDisplayString(__props.itemData.attributes.year) + ")", 1)
                ]),
                _: 1
              }, 8, ["to", "title"]),
              __props.itemData.attributes.director != "N/A" ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-sm font-semibold"
              }, [
                __props.type === "series" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.$t("pages.slug.directedSeries")), 1)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(_ctx.$t("pages.slug.directedMovie")) + " ", 1)),
                createVNode("span", null, toDisplayString(__props.itemData.attributes.director), 1)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-sm" data-v-f6f8bc49>`);
      if (__props.type === "tv-series") {
        _push(`<span data-v-f6f8bc49>${ssrInterpolate(_ctx.$t("pages.slug.theSeries"))} </span>`);
      } else {
        _push(`<span data-v-f6f8bc49>${ssrInterpolate(_ctx.$t("pages.slug.theMovie"))} </span>`);
      }
      _push(`<span data-v-f6f8bc49>${ssrInterpolate(_ctx.$t("pages.slug.from"))} </span>`);
      if (unref(firstBook)) {
        _push(`<span data-v-f6f8bc49><span data-v-f6f8bc49>${ssrInterpolate(unref(firstBook).attributes.title)}</span>`);
        if (unref(firstBook).attributes.authors.length) {
          _push(`<span class="block py-2 text-xs italic" data-v-f6f8bc49><span data-v-f6f8bc49>${ssrInterpolate(_ctx.$t("list.written"))} </span><!--[-->`);
          ssrRenderList(unref(firstBook).attributes.authors, (author, index) => {
            _push(`<span class="font-bold" data-v-f6f8bc49>`);
            if (index === Object.keys(unref(firstBook).attributes.authors).length - 1 && unref(firstBook).attributes.authors.length > 1) {
              _push(`<span data-v-f6f8bc49> and </span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`${ssrInterpolate(author)}`);
            if (index < Object.keys(unref(firstBook).attributes.authors).length - 2) {
              _push(`<span data-v-f6f8bc49>, </span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</span>`);
          });
          _push(`<!--]--></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: ["text-center px-4 py-1 transition-colors duration-500 text-white rounded-sm block w-full absolute left-0 bottom-0", `bg-trso-${__props.color} hover:bg-trso-${__props.color}2`],
        to: unref(localePath)({ name: "type-id-slug", params: { type: __props.type, id: `${__props.itemData.id}`, slug: `${unref(langAttr).slug}` } }),
        title: `${_ctx.$t("components.item.linkTitle", { type: __props.type, name: unref(langAttr).title, book: unref(firstBook).attributes.title })}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-bold" data-v-f6f8bc49${_scopeId}>${ssrInterpolate(_ctx.$t("pages.slug.more"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "font-bold" }, toDisplayString(_ctx.$t("pages.slug.more")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/Item.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f6f8bc49"]]);
export {
  __nuxt_component_3 as _
};
//# sourceMappingURL=Item-c2a41c2b.js.map
