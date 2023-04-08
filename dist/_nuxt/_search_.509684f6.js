import{_ as V}from"./Heading.47fc52e1.js";import{_ as L,o as t,c as s,a as o,U as A,E as j,n as D,k as E,D as T,I as q,u as F,m as Z,r as b,s as z,G,f as r,w as d,T as H,g as e,t as i,d as B,i as y,F as O,h as U,b as J,e as K}from"./entry.78bed9e6.js";import{u as Q,_ as W}from"./useAlgoliaInitIndex.f84cd8f1.js";import{a as X}from"./composables.1f0500cc.js";const Y={},ee={id:"loading-spinner",xmlns:"http://www.w3.org/2000/svg",class:"animate-spin",viewBox:"0 0 24 24",fill:"none"},te=o("path",{d:"M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z",fill:"currentColor"},null,-1),se=o("path",{d:"M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z",fill:"currentColor"},null,-1),ae=[te,se];function oe(p,c){return t(),s("svg",ee,ae)}const ne=L(Y,[["render",oe]]),le=A({__name:"Button",props:{color:String},setup(p){return(c,u)=>(t(),s("button",{class:D(["flex items-center justify-center gap-x-2 w-full px-4 py-2 text-white text-center uppercase transition-colors duration-500",`bg-trso-${p.color} hover:bg-trso-${p.color}2`])},[j(c.$slots,"default")],2))}});function re(p){const c=E(),u=p||c.algolia.globalIndex;if(!u)throw new Error("`[@nuxtjs/algolia]` Cannot search in Algolia without `globalIndex` or `indexName` passed as a parameter");const v=Q(u),h=T(`${u}-search-result`,()=>null),w=async({query:f,requestOptions:m})=>{const _=await v.search(f,m);return h.value=_,_};return{result:q(()=>h.value),search:w}}const ce={key:0},ie={key:1},ue={class:"italic font-semibold"},_e={key:0,class:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-trso-blue"},de={key:0},pe={key:0},he={class:"mb-4 lg:mb-8"},me=["src","alt"],ge={key:0,class:"text-base"},fe={key:0},xe={key:1},be={key:1,class:"block px-4 py-2 text-trso-blue text-center border border-trso-blue"},ye={key:1},ve={class:"text-lg text-center font-sans text-trso-yellow mb-8"},we={class:"text-lg text-center font-sans text-trso-blue mb-8"},$e={__name:"[search]",setup(p){const{locale:c}=F(),u=X(),h=Z().params.search,{result:w,search:f}=re("movies"),m=b(0),_=b(!1),M=4,$=50,g=b(!1),n=z({hits:[],count:0,total:0,max:0});G(()=>{k()});async function N(){_.value=!0;try{await k(),m.value++}catch{}_.value=!1}async function k(){g.value=!0;const a=await f({query:`${String(h)}`,requestOptions:{hitsPerPage:M,page:m.value}});n.hits=[...n.hits,...a.hits],n.count=n.hits.length,n.total=a.nbHits,n.max=a.nbHits<$?a.nbHits:$,g.value=!0}return(a,C)=>{const P=V,I=ne,x=K,R=le,S=W;return t(),s("div",null,[r(P,{tag:"h1",tagStyle:"h1",color:"blue"},{default:d(()=>[e(n).total?(t(),s("span",ce,i(a.$t("pages.search.title")),1)):(t(),s("span",ie,i(a.$t("pages.search.noResults")),1)),B("   "),o("span",ue,i(e(h)),1)]),_:1}),r(H,{name:"fade"},{default:d(()=>[e(g)?y("",!0):(t(),s("div",_e,[r(I,{class:"w-16 h-16"})]))]),_:1}),r(H,{name:"fade"},{default:d(()=>[e(g)?(t(),s("div",de,[e(n).total?(t(),s("div",pe,[o("ul",he,[(t(!0),s(O,null,U(e(n).hits,l=>(t(),s("li",{key:l.id},[r(x,{to:e(u)({name:"type-id-slug",params:{type:l.type==="series"?"tv-series":"movies",id:l.objectID,slug:`${l["slug_"+e(c)]}`}}),title:l["title_"+e(c)],class:"flex items-center gap-x-4 lg:gap-x-8 transition-colors duration-500 bg-white hover:bg-trso-blue2 text-trso-blue hover:text-white text-base lg:text-lg text-left p-2 lg:p-4"},{default:d(()=>[o("img",{src:l.poster,alt:`poster ${l["title_"+e(c)]}`,class:"w-12 h-auto"},null,8,me),o("span",null,[B(i(l["title_"+e(c)])+" ",1),l.director.length?(t(),s("span",ge,"("+i(l.director)+")",1)):y("",!0)])]),_:2},1032,["to","title"])]))),128))]),e(n).count<e(n).max?(t(),J(R,{key:0,color:"blue",onClick:C[0]||(C[0]=l=>N()),disabled:e(_),class:"text-white"},{default:d(()=>[e(_)?(t(),s("i",xe,[r(I,{class:"w-4 h-4"})])):(t(),s("span",fe,i(a.$t("loadMore")),1))]),_:1},8,["disabled"])):(t(),s("span",be,i(a.$t("pages.search.noMore")),1))])):(t(),s("div",ye,[o("p",ve,[r(x,{to:e(u)({name:"type-pages-page",params:{type:"tv-series",page:1}}),title:a.$t("header.series"),class:"flex items-center gap-x-2"},{default:d(()=>[o("i",null,[r(S,{class:"h-5 w-5"})]),o("span",null,i(a.$t("pages.search.seriesList")),1)]),_:1},8,["to","title"])]),o("p",we,[r(x,{to:e(u)({name:"type-pages-page",params:{type:"movies",page:1}}),title:a.$t("header.series"),class:"flex items-center gap-x-2"},{default:d(()=>[o("i",null,[r(S,{class:"h-5 w-5"})]),o("span",null,i(a.$t("pages.search.moviesList")),1)]),_:1},8,["to","title"])])]))])):y("",!0)]),_:1})])}}},He=L($e,[["__scopeId","data-v-462d5cd0"]]);export{He as default};
