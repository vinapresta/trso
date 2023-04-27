import{_ as M,b as V,c as j,d as F,a as A}from"./ContactModal.c2b18c9d.js";import{u as p,L as H,o as U,M as W,N as G,O as D,c as w,r as d,P as q,Q as C,d as K,e as h,f as _,w as y,T as b,p as J,R as X,b as g,k as Y,q as Z,g as ee,v as te}from"./entry.3285e986.js";import"./composables.f088e1ed.js";import"./Plus.c835943a.js";import"./fetch.fd3d262f.js";import"./useAlgoliaInitIndex.6edfe780.js";import"./Modal.bdd8360b.js";var S;const T=typeof window<"u";T&&((S=window==null?void 0:window.navigator)!=null&&S.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ne(e){return typeof e=="function"?e():p(e)}function oe(e){return e}function N(e){return G()?(D(e),!0):!1}function ae(e){return typeof e=="function"?w(e):d(e)}function se(e,t=!0){H()?U(e):t?e():W(e)}function m(e){var t;const n=ne(e);return(t=n==null?void 0:n.$el)!=null?t:n}const O=T?window:void 0;function Q(e,t=!1){const n=d(),o=()=>n.value=!!e();return o(),se(o,t),n}function re(e,t={}){const{window:n=O}=t,o=Q(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let s;const f=d(!1),r=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",a):s.removeListener(a))},a=()=>{o.value&&(r(),s=n.matchMedia(ae(e).value),f.value=s.matches,"addEventListener"in s?s.addEventListener("change",a):s.addListener(a))};return q(a),N(()=>r()),f}const x=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I="__vueuse_ssr_handlers__";x[I]=x[I]||{};var E=Object.getOwnPropertySymbols,ie=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable,ce=(e,t)=>{var n={};for(var o in e)ie.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&E)for(var o of E(e))t.indexOf(o)<0&&ue.call(e,o)&&(n[o]=e[o]);return n};function le(e,t,n={}){const o=n,{window:s=O}=o,f=ce(o,["window"]);let r;const a=Q(()=>s&&"ResizeObserver"in s),i=()=>{r&&(r.disconnect(),r=void 0)},c=C(()=>m(e),u=>{i(),a.value&&s&&u&&(r=new ResizeObserver(t),r.observe(u,f))},{immediate:!0,flush:"post"}),l=()=>{i(),c()};return N(l),{isSupported:a,stop:l}}function de(e,t={width:0,height:0},n={}){const{window:o=O,box:s="content-box"}=n,f=w(()=>{var i,c;return(c=(i=m(e))==null?void 0:i.namespaceURI)==null?void 0:c.includes("svg")}),r=d(t.width),a=d(t.height);return le(e,([i])=>{const c=s==="border-box"?i.borderBoxSize:s==="content-box"?i.contentBoxSize:i.devicePixelContentBoxSize;if(o&&f.value){const l=m(e);if(l){const u=o.getComputedStyle(l);r.value=parseFloat(u.width),a.value=parseFloat(u.height)}}else if(c){const l=Array.isArray(c)?c:[c];r.value=l.reduce((u,{inlineSize:v})=>u+v,0),a.value=l.reduce((u,{blockSize:v})=>u+v,0)}else r.value=i.contentRect.width,a.value=i.contentRect.height},n),C(()=>m(e),i=>{r.value=i?t.width:0,a.value=i?t.height:0}),{width:r,height:a}}var B;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(B||(B={}));var fe=Object.defineProperty,L=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,P=(e,t,n)=>t in e?fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ve=(e,t)=>{for(var n in t||(t={}))pe.call(t,n)&&P(e,n,t[n]);if(L)for(var n of L(t))_e.call(t,n)&&P(e,n,t[n]);return e};const me={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ve({linear:oe},me);const he={class:"relative"},we={class:"relative"},Be={__name:"default",setup(e){const t=re("(min-width: 1024px)"),n=d(),{height:o}=de(n),s=d(null),f=d(!1),r=d(!1),a=d(!0);function i(){a.value=!a.value}const c=w(()=>!t.value||t.value&&r.value);return(l,u)=>{const v=M,R=A,$=V,k=j,z=F;return g(),K("div",he,[h("header",{class:"fixed z-10 w-full",ref_key:"header",ref:n},[h("div",we,[_(v,{class:"py-1 lg:py-4 z-20",searchButtonState:p(a),searchButtonVisible:p(c),isLargeScreen:p(t),onChangeSearchState:u[0]||(u[0]=Oe=>i())},null,8,["searchButtonState","searchButtonVisible","isLargeScreen"]),_(b,{name:"search",mode:"out-in"},{default:y(()=>[p(a)?(g(),Y(R,{key:0,ref_key:"search",ref:s},null,512)):Z("",!0)]),_:1})])],512),h("div",{id:"main",class:"container px-2 md:px-4 min-h-[90vh] max-w-7xl mb-16 transition-all duration-500",style:X(`padding-top: ${p(o)/16+4}rem`)},[J(l.$slots,"default")],4),_($),_(b,{name:"totop",mode:"out-in"},{default:y(()=>[ee(_(k,null,null,512),[[te,p(f)]])]),_:1}),_(z)])}}};export{Be as default};
