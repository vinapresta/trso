globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'file://D:/dev/trso/app/node_modules/node-fetch-native/dist/polyfill.mjs';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, getRequestHeaders, setResponseHeader, lazyEventHandler, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent } from 'file://D:/dev/trso/app/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers } from 'file://D:/dev/trso/app/node_modules/ofetch/dist/node.mjs';
import destr from 'file://D:/dev/trso/app/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file://D:/dev/trso/app/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://D:/dev/trso/app/node_modules/hookable/dist/index.mjs';
import { u as useRuntimeConfig } from './config.mjs';
import { hash } from 'file://D:/dev/trso/app/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, withQuery, withLeadingSlash } from 'file://D:/dev/trso/app/node_modules/ufo/dist/index.mjs';
import { createStorage } from 'file://D:/dev/trso/app/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://D:/dev/trso/app/node_modules/unstorage/drivers/fs.mjs';
import defu from 'file://D:/dev/trso/app/node_modules/defu/dist/defu.mjs';
import { toRouteMatcher, createRouter } from 'file://D:/dev/trso/app/node_modules/radix3/dist/index.mjs';
import { fileURLToPath } from 'node:url';
import { createIPX, createIPXMiddleware } from 'file://D:/dev/trso/app/node_modules/ipx/dist/index.mjs';
import { createRequire } from 'module';
import { promisify } from 'util';
import AsyncCache from 'file://D:/dev/trso/app/node_modules/async-cache/ac.js';
import unionBy from 'file://D:/dev/trso/app/node_modules/lodash.unionby/index.js';
import generateETag from 'file://D:/dev/trso/app/node_modules/etag/index.js';
import fresh from 'file://D:/dev/trso/app/node_modules/fresh/index.js';
import { hostname } from 'os';
import { join } from 'path';
import { URL as URL$1 } from 'url';
import isHTTPS from 'file://D:/dev/trso/app/node_modules/is-https/dist/index.js';
import * as sm from 'file://D:/dev/trso/app/node_modules/sitemap/dist/index.js';
import consola from 'file://D:/dev/trso/app/node_modules/unenv/runtime/npm/consola.mjs';
import Minimatch from 'file://D:/dev/trso/app/node_modules/minimatch/minimatch.js';

const serverAssets = [{"baseName":"server","dir":"D:/dev/trso/app/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:\\dev\\trso\\app","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:\\dev\\trso\\app\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:\\dev\\trso\\app\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:\\dev\\trso\\app\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.node.req.url?.endsWith(".json") || event.node.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('./error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const _rxtNgg = lazyEventHandler(() => {
  const ipxOptions = {
    ...useRuntimeConfig().ipx || {},
    dir: fileURLToPath(new URL("../../.output/public" , globalThis._importMeta_.url))
  };
  const ipx = createIPX(ipxOptions);
  const middleware = createIPXMiddleware(ipx);
  return eventHandler(async (event) => {
    event.req.url = withLeadingSlash(event.context.params._);
    await middleware(event.req, event.res);
  });
});

function createRoutesCache(globalCache, options) {
  const cache = new AsyncCache({
    maxAge: options.cacheTime,
    async load(_, callback) {
      try {
        let routes = await Promise.all(await promisifyRoute(options.routes));
        routes = joinRoutes(globalCache.staticRoutes ? globalCache.staticRoutes() : [], routes);
        callback(null, routes);
      } catch (err) {
        callback(err);
      }
    }
  });
  cache.get = promisify(cache.get);
  return cache;
}
function promisifyRoute(fn) {
  if (Array.isArray(fn)) {
    return Promise.resolve(
      fn.map(async (r) => {
        if (typeof r === "function") {
          return await promisifyRoute(r);
        }
        return r;
      })
    );
  }
  if (fn.length === 1) {
    return new Promise((resolve, reject) => {
      fn(function(err, routeParams) {
        if (err) {
          reject(err);
        }
        resolve(routeParams);
      });
    });
  }
  let promise = fn();
  if (!promise || !(promise instanceof Promise) && typeof promise.then !== "function") {
    promise = Promise.resolve(promise);
  }
  return promise;
}
function joinRoutes(staticRoutes, dynamicRoutes) {
  staticRoutes = staticRoutes.map(ensureIsValidRoute);
  dynamicRoutes = dynamicRoutes.map(ensureIsValidRoute);
  return unionBy(dynamicRoutes, staticRoutes, "url");
}
function ensureIsValidRoute(route) {
  let _route = typeof route === "object" ? { ...route } : route;
  _route = typeof _route === "object" ? _route.route ? { url: _route.route } : _route : { url: _route };
  _route.url = String(_route.url);
  return _route;
}
function validHttpCache(entity, options, req, res) {
  if (!options) {
    return false;
  }
  const { hash } = options;
  const etag = hash ? hash(entity, options) : generateETag(entity, options);
  if (fresh(req.headers, { etag })) {
    res.statusCode = 304;
    res.end();
    return true;
  }
  res.setHeader("ETag", etag);
  return false;
}

function warn(message, options = null) {
  consola.warn({
    message: `[sitemap-module] ${message}`,
    additional: options ? JSON.stringify(options, null, 2) : null
  });
}
function fatal(message, options = null) {
  consola.fatal({
    message: `[sitemap-module] ${message}`,
    additional: options ? JSON.stringify(options, null, 2) : null
  });
}
const logger = { success: consola.success, info: consola.info, fatal, warn };

function createSitemap(options, routes, base = null, req = null) {
  const sitemapConfig = { cacheTime: null, hostname: null, xmlNs: null, xslUrl: null, urls: null };
  sitemapConfig.cacheTime = options.cacheTime || 0;
  sitemapConfig.hostname = getHostname(options, req, base);
  sitemapConfig.xmlNs = options.xmlNs;
  sitemapConfig.xslUrl = options.xslUrl;
  routes = routes.map((route) => ({ ...options.defaults, ...route }));
  if (options.trailingSlash) {
    routes = routes.map((route) => {
      if (!route.url.endsWith("/")) {
        route.url = `${route.url}/`;
      }
      return route;
    });
  }
  if (options.i18n) {
    const { locales, routesNameSeparator } = options.i18n;
    routes.reduce((i18nRoutes, route) => {
      if (!route.name) {
        return i18nRoutes;
      }
      const [page, lang, isDefault = false] = route.name.split(routesNameSeparator);
      if (!lang) {
        return i18nRoutes;
      }
      const link = {
        lang,
        url: join(".", route.url)
      };
      if (isDefault) {
        link.lang = "x-default";
      } else {
        const locale = locales.find(({ code }) => code === lang);
        if (locale && locale.iso) {
          link.lang = locale.iso;
        }
      }
      if (!i18nRoutes[page]) {
        i18nRoutes[page] = [];
      }
      const langs = i18nRoutes[page].map(({ lang: lang2 }) => lang2);
      langs.push(link.lang);
      const index = langs.sort().indexOf(link.lang);
      i18nRoutes[page].splice(index, 0, link);
      route.links = i18nRoutes[page];
      return i18nRoutes;
    }, {});
  }
  if (typeof options.filter === "function") {
    routes = options.filter({
      options: { ...sitemapConfig },
      routes
    });
  }
  routes = routes.map((route) => {
    const { chunkName, component, name, path, ...sitemapOptions } = route;
    return {
      ...sitemapOptions,
      url: join(".", String(sitemapOptions.url))
    };
  });
  sitemapConfig.urls = routes;
  return sm.createSitemap(sitemapConfig);
}
function getHostname(options, req, base) {
  if (!options.hostname && !req) {
    logger.fatal("The `hostname` option is mandatory in your config on `spa` or `generate` build mode", options);
  }
  const href = new URL$1(
    base || "",
    options.hostname || req && `${isHTTPS(req) ? "https" : "http"}://${req.headers.host}` || `http://${hostname()}`
  ).href;
  return href.slice(-1) === "/" ? href : href + "/";
}

function excludeRoutes(patterns, routes) {
  patterns.forEach((pattern) => {
    const minimatch = new Minimatch.Minimatch(pattern);
    minimatch.negate = true;
    routes = routes.filter(({ url }) => minimatch.match(url));
  });
  return routes;
}

const globalCache = { cache: {  }, staticRoutes: null };

const _Xrc8gN = eventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const res = event.res;
  const req = event.req;

  const require = createRequire(globalThis._importMeta_.url);
  if (!require) {
    console.log('cant use require in middleware');
  }
  // eslint-disable-next-line no-new-func,no-eval
  const options = eval('(' + runtimeConfig.sitemap.options + ')')[event.req.url];
  const staticRoutes = runtimeConfig.sitemap.staticRoutes;

  // Init cache
  if (!globalCache.staticRoutes) {
    globalCache.staticRoutes = () => excludeRoutes(options.exclude, staticRoutes);
  }

  if(!globalCache.cache[event.req.url]) {
    globalCache.cache[event.req.url] = createRoutesCache(globalCache, options);
  }

  try {
    // Init sitemap
    const routes = await globalCache.cache[event.req.url].get('routes');
    const xml = createSitemap(options, routes, options.base, req).toXML();
    // Check cache headers
    if (validHttpCache(xml, options.etag, req, res)) {
      return
    }
    // Send http response
    res.setHeader('Content-Type', 'application/xml');
    res.end(xml);
  } catch (err) {
    /* istanbul ignore next */
    return err
  }
});

const _lazy_ZPgSMJ = () => import('./renderer.mjs');

const handlers = [
  { route: '/_ipx/**', handler: _rxtNgg, lazy: false, middleware: false, method: undefined },
  { route: '/sitemap.xml', handler: _Xrc8gN, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_ZPgSMJ, lazy: true, middleware: false, method: undefined },
  { route: '/', handler: _lazy_ZPgSMJ, lazy: true, middleware: false, method: undefined },
  { route: '/privacy-policy', handler: _lazy_ZPgSMJ, lazy: true, middleware: false, method: undefined },
  { route: '/pages/**', handler: _lazy_ZPgSMJ, lazy: true, middleware: false, method: undefined },
  { route: '/_nuxt/**', handler: _lazy_ZPgSMJ, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_ZPgSMJ, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}

export { getRouteRules as g, localFetch as l, useNitroApp as u };
//# sourceMappingURL=nitro-prerenderer.mjs.map
