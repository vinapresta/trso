import{g as p,P as R,G as S,Y as L,Z as $,$ as N,I as O,r as l,a0 as T,v as P,c as z,a as B,E as j,a1 as M,o as k}from"./entry.81b5caec.js";var g;const v=typeof window<"u";v&&((g=window==null?void 0:window.navigator)!=null&&g.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function A(e){return typeof e=="function"?e():p(e)}function F(e){return e}function C(e){return $()?(N(e),!0):!1}function G(e){return typeof e=="function"?O(e):l(e)}function U(e,t=!0){R()?S(e):t?e():L(e)}function h(e){var t;const n=A(e);return(t=n==null?void 0:n.$el)!=null?t:n}const b=v?window:void 0;v&&window.document;v&&window.navigator;v&&window.location;function Q(e,t=!1){const n=l(),o=()=>n.value=Boolean(e());return o(),U(o,t),n}function V(e,t={}){const{window:n=b}=t,o=Q(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let s;const c=l(!1),r=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",a):s.removeListener(a))},a=()=>{o.value&&(r(),s=n.matchMedia(G(e).value),c.value=s.matches,"addEventListener"in s?s.addEventListener("change",a):s.addListener(a))};return T(a),C(()=>r()),c}const w=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m="__vueuse_ssr_handlers__";w[m]=w[m]||{};w[m];var y=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,D=(e,t)=>{var n={};for(var o in e)W.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&y)for(var o of y(e))t.indexOf(o)<0&&H.call(e,o)&&(n[o]=e[o]);return n};function K(e,t,n={}){const o=n,{window:s=b}=o,c=D(o,["window"]);let r;const a=Q(()=>s&&"ResizeObserver"in s),i=()=>{r&&(r.disconnect(),r=void 0)},u=P(()=>h(e),f=>{i(),a.value&&s&&f&&(r=new ResizeObserver(t),r.observe(f,c))},{immediate:!0,flush:"post"}),d=()=>{i(),u()};return C(d),{isSupported:a,stop:d}}function Y(e,t={width:0,height:0},n={}){const{window:o=b,box:s="content-box"}=n,c=O(()=>{var i,u;return(u=(i=h(e))==null?void 0:i.namespaceURI)==null?void 0:u.includes("svg")}),r=l(t.width),a=l(t.height);return K(e,([i])=>{const u=s==="border-box"?i.borderBoxSize:s==="content-box"?i.contentBoxSize:i.devicePixelContentBoxSize;if(o&&c.value){const d=h(e);if(d){const f=o.getComputedStyle(d);r.value=parseFloat(f.width),a.value=parseFloat(f.height)}}else if(u){const d=Array.isArray(u)?u:[u];r.value=d.reduce((f,{inlineSize:_})=>f+_,0),a.value=d.reduce((f,{blockSize:_})=>f+_,0)}else r.value=i.contentRect.width,a.value=i.contentRect.height},n),P(()=>h(e),i=>{r.value=i?t.width:0,a.value=i?t.height:0}),{width:r,height:a}}var I;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(I||(I={}));var Z=Object.defineProperty,x=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,E=(e,t,n)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,X=(e,t)=>{for(var n in t||(t={}))q.call(t,n)&&E(e,n,t[n]);if(x)for(var n of x(t))J.call(t,n)&&E(e,n,t[n]);return e};const ee={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};X({linear:F},ee);const te=B("div",{class:"h-[0px] w-full",id:"menuObserver"},null,-1),oe={__name:"default",setup(e){const t=V("(min-width: 1024px)"),n=l(null),{height:o}=Y(n);l(null),l(!1);const s=l(!1),c=l(!1),r=l(!1);return S(()=>{const a=document.getElementById("menuObserver");new IntersectionObserver(u=>{u.forEach(d=>{d.isIntersecting?(s.value=!1,c.value=!1,r.value=!1):(s.value=!0,r.value=!0)})},{threshold:.5}).observe(a)}),O(()=>t.value?s.value?c.value:!0:c.value),(a,i)=>(k(),z("div",null,[te,B("div",{class:"container px-2 md:px-4 min-h-[90vh] max-w-7xl mb-16",style:M(p(s)||!p(t)?`padding-top: calc(${p(o)}px + 2rem)`:"")},[j(a.$slots,"default")],4)]))}};export{oe as default};
