import { defineComponent, createBlock, Teleport, h } from 'file://D:/dev/trso/app/node_modules/vue/index.mjs';
import { j as createError } from './server.mjs';
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
import 'file://D:/dev/trso/app/node_modules/vue/server-renderer/index.mjs';
import './config.mjs';
import 'file://D:/dev/trso/app/node_modules/destr/dist/index.mjs';
import 'file://D:/dev/trso/app/node_modules/scule/dist/index.mjs';

const components_islands = {};
const islandComponents = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: components_islands
});
const islandRenderer = defineComponent({
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  async setup(props) {
    var _a;
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${JSON.stringify(component)}`
      });
    }
    if (typeof component === "object") {
      await ((_a = component.__asyncLoader) == null ? void 0 : _a.call(component));
    }
    return () => [
      createBlock(Teleport, { to: "nuxt-island" }, [h(component || "span", props.context.props)])
    ];
  }
});

export { islandRenderer as default };
//# sourceMappingURL=island-renderer-49dc1d1e.mjs.map
