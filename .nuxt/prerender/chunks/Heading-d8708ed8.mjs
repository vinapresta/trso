import { computed, createVNode, resolveDynamicComponent, mergeProps, unref, withCtx, renderSlot, useSSRContext } from 'file://D:/dev/trso/app/node_modules/vue/index.mjs';
import { ssrRenderVNode, ssrRenderSlot } from 'file://D:/dev/trso/app/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "Heading",
  __ssrInlineRender: true,
  props: {
    tag: String,
    tagStyle: {
      type: String,
      required: false,
      default: "h1",
      validator: (value) => ["h1", "h2", "h3", "h4", "featured", "item", "pageTitle"].includes(value)
    },
    color: String
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      const styleClasses = {
        h1: `uppercase pb-4 md:pb-8 text-center lg:text-left text-2xl font-medium font-[title] text-trso-${props.color} tracking-tighter leading-none`,
        h2: `mb-2 md:mb-4 text-xl lg:text-2xl text-center lg:text-left text-trso-${props.color} font-medium tracking-tighter leading-none`,
        h3: `text-xl leading-none text-trso-${props.color} font-normal`,
        h4: "pb-2 text-3xl font-bold tracking-tighter leading-none",
        featured: `mb-2 md:mb-4 text-xl lg:text-2xl text-center text-trso-${props.color} font-medium tracking-tighter leading-none`,
        item: "w-full py-2 font-bold",
        pageTitle: "pb-2 text-lg font-bold tracking-tighter leading-none"
      };
      return ` ${styleClasses[props.tagStyle]}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.tag), mergeProps(_ctx.$attrs, { class: unref(classes) }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/helpers/Heading.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Heading-d8708ed8.mjs.map
