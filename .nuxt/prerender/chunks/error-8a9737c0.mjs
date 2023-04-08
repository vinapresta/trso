import { ssrRenderAttrs } from 'file://D:/dev/trso/app/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file://D:/dev/trso/app/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const error = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { error as default };
//# sourceMappingURL=error-8a9737c0.mjs.map
