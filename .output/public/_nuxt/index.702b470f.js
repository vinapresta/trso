import{h as T,b as s,d as i,e as o,t as r,k as v,c as x,s as k,x as q,o as H,f as a,w as y,u as p,n as w,F as M,l as R,i as j,_ as z}from"./entry.75de67d1.js";import{_ as O}from"./Heading.83ba3f2d.js";import{_ as U}from"./ArrowRight.adf51b09.js";import{_ as V}from"./Item.d550fbd8.js";import{_ as K}from"./Plus.b5c9cc3f.js";import{u as G}from"./composables.66bb790d.js";import{u as J}from"./fetch.4c86dd2b.js";import{u as Q}from"./nuxt-img.b900406b.js";const W=""+globalThis.__publicAssetsURL("img/tarsier.png"),X={},Y={class:"mb-4 md:mb-8 lg:mb-12 relative w-10/12 md:w-4/5 lg:w-3/5 md:px-4 lg:px-8 py-2 lg:px-20 mx-auto"},Z=o("img",{src:W,class:"block absolute w-[56px] h-[75px] lg:w-[110px] lg:h-[150px] top-20 lg:top-8 -right-[36px] lg:-right-[48px]",alt:"tarsier",id:"imgTarsier"},null,-1),ee={class:"text-base px-8 py-4 rounded-lg bg-trso-blue text-white z-20"},te={class:"mb-2"},se={class:"mb-2"},oe={class:"mb-2"};function ne(e,t){return s(),i("div",Y,[Z,o("div",ee,[o("p",te,r(e.$t("pages.home.disclaimer1")),1),o("p",se,r(e.$t("pages.home.disclaimer2")),1),o("p",oe,r(e.$t("pages.home.disclaimer3")),1),o("p",null,r(e.$t("pages.home.disclaimer4")),1)])])}const ie=T(X,[["render",ne]]),ae={class:"mb-8"},re={key:0},le={key:1},ce={class:"mb-4"},pe={key:0},me={key:1},de={class:"grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4"},ue={__name:"Featured",props:{type:String},async setup(e){let t,l;const d=e,{locale:g}=v(),u=G(),_=x(()=>d.type==="tv-series"?"text-trso-yellow":"text-trso-blue"),C=x(()=>d.type==="tv-series"?"text-trso-yellow hover:text-trso-yellow2":"text-trso-blue hover:text-trso-blue2"),$=k(),I=$.public.featuredItemsCount,B="fields[0]=director&fields[1]=year&fields[2]=poster",S=`filters[type][$eq]=${d.type==="tv-series"?"series":"movie"}&filters[item_lang][locale][$eq]=${g.value}&filters[item_lang][home][$eq]=true&filters[books][firstBook][$eq]=true`,A="populate[item_lang][fields][0]=title&populate[item_lang][fields][1]=slug&populate[books][fields][0]=title&populate[books][fields][1]=authors&populate[books][fields][2]=thumbnail",D=`pagination[start]=0&pagination[limit]=${I}`,N=`sort[0]=id%3Adesc&${B}&${S}&${A}&${D}`,P=`${$.public.API_BASE_URL}items?${N}`,{data:E}=([t,l]=q(()=>J(P,"$h1dSB1ra09")),t=await t,l(),t);return H(()=>{const n=Array.from(document.getElementsByClassName("fade-in")),h=new IntersectionObserver(m=>{m.forEach(c=>{c.isIntersecting&&(c.target.style.opacity="1",c.target.style.transform="scale(1)",h.unobserve(c.target))})},{threshold:.5});n.forEach(m=>{h.observe(m)})}),(n,h)=>{const m=O,c=U,f=z,F=V,L=K;return s(),i("div",ae,[a(m,{tag:"h2",tagStyle:"featured",color:e.type==="tv-series"?"yellow":"blue"},{default:y(()=>[e.type==="tv-series"?(s(),i("span",re,r(n.$t("components.featured.topSeries")),1)):(s(),i("span",le,r(n.$t("components.featured.topMovies")),1))]),_:1},8,["color"]),o("p",ce,[a(f,{to:p(u)({name:"type-pages-page",params:{type:e.type,page:1}}),class:w([p(_),"flex justify-center items-center gap-x-2 text-sm lg:text-lg"])},{default:y(()=>[o("span",null,[a(c,{class:"h-5 w-5"})]),e.type==="tv-series"?(s(),i("span",pe,r(n.$t("components.featured.topSeries2")),1)):(s(),i("span",me,r(n.$t("components.featured.topMovies2")),1))]),_:1},8,["to","class"])]),o("div",de,[(s(!0),i(M,null,R(p(E).data,b=>(s(),j(F,{key:b.id,itemData:b,type:e.type,lang:p(g),color:e.type==="tv-series"?"yellow":"blue"},null,8,["itemData","type","lang","color"]))),128))]),a(f,{to:p(u)({name:"type-pages-page",params:{type:e.type,page:1}}),title:e.type==="tv-series"?n.$t("components.featured.topSeries2"):n.$t("components.featured.topMovies2"),class:"flex w-full py-2 justify-center"},{default:y(()=>[a(L,{class:w(["h-14 w-14 transition-transform hover:rotate-180",p(C)])},null,8,["class"])]),_:1},8,["to","title"])])}}},ve={__name:"index",setup(e){const{t}=v(),l=k();return Q({title:`${l.public.websiteName} - ${t("pages.home.title")}`,meta:[{hid:"description",name:"description",content:t("pages.home.hidDescription")},{hid:"keywords",name:"keywords",content:t("pages.home.hidKeywords")},{hid:"og:site_name",property:"og:site_name",content:l.public.websiteName},{hid:"og:description",property:"og:description",content:t("pages.home.hidOgDescription")},{hid:"twitter:title",property:"twitter:title",content:`${l.public.websiteName} - ${t("pages.home.hidTwitterTitle")}`},{hid:"twitter:description",property:"twitter:description",content:t("pages.home.hidTwitterDescription")}]}),(d,g)=>{const u=ie,_=ue;return s(),i("div",null,[a(u),a(_,{type:"tv-series"}),a(_,{type:"movies"})])}}};export{ve as default};
