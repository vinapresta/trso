import { _ as _export_sfc, a as __nuxt_component_2$1 } from "../server.mjs";
import { useSSRContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { a as useLocalePath } from "./composables-10605620.js";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, _attrs))}><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/ChevronRight.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Breadcrumbs",
  __ssrInlineRender: true,
  props: {
    levels: Object
  },
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_2$1;
      const _component_IconsChevronRight = __nuxt_component_2;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "lg:py-4 hidden lg:block" }, _attrs))}><ol class="text-trso-blue flex items-center"><li class="flex items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)({ name: "index" })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<i>`);
      _push(ssrRenderComponent(_component_IconsChevronRight, { class: "w-[14px] h-[14px] pt-[4px] font-semibold" }, null, _parent));
      _push(`</i></li><!--[-->`);
      ssrRenderList(__props.levels, (level, index) => {
        _push(`<li class="flex items-center">`);
        if (level.route) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(level.route)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(level.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(level.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<span>${ssrInterpolate(level.name)}</span>`);
        }
        if (index < __props.levels.length - 1) {
          _push(`<i>`);
          _push(ssrRenderComponent(_component_IconsChevronRight, { class: "w-[14px] h-[14px] pt-[4px] font-semibold" }, null, _parent));
          _push(`</i>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ol></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Breadcrumbs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  __nuxt_component_2 as a
};
//# sourceMappingURL=Breadcrumbs-8a756e76.js.map
