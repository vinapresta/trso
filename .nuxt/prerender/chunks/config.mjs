import destr from 'file://D:/dev/trso/app/node_modules/destr/dist/index.mjs';
import { snakeCase } from 'file://D:/dev/trso/app/node_modules/scule/dist/index.mjs';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"envPrefix":"NUXT_","routeRules":{"/__nuxt_error":{"cache":false},"/_nuxt/**":{"headers":{"cache-control":"public, max-age=2592000, immutable"}}}},"public":{"websiteName":"Tarseroo","BASE_URL":"https://tarseroo.com","API_BASE_URL":"http://127.0.0.1:1337/api/","limitByPage":24,"featuredItemsCount":12,"google_analytics_id":"G-2VVTWY9547","algolia":{"apiKey":"c3f0378c8bb37aebc40b0affeb477cd6","applicationId":"3HUPT4Q25O","lite":true,"cache":false,"instantSearch":false,"docSearch":{},"recommend":"","globalIndex":""}},"FB_API_KEY":"AIzaSyCrpi511yIUCPKM07Bsk092sezOWMXcwjc","FB_AUTH_DOMAIN":"movies-books.firebaseapp.com","FB_DATABASE_URL":"https://movies-books.firebaseio.com","FB_PROJECT_ID":"movies-books","FB_STORAGE_BUCKET":"movies-books.appspot.com","FB_MESSAGING_SENDER_ID":"469402336814","FB_APP_ID":"1:469402336814:web:c80511a26fa194d056e9bf","FB_MEASUREMENT_ID":"G-LCCVY585SQ","ipx":{"dir":"","maxAge":"","domains":[],"sharp":{},"alias":{}}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

export { useRuntimeConfig as u };
//# sourceMappingURL=config.mjs.map
