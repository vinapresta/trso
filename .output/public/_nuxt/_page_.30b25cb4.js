import{a as J,_ as Q}from"./Breadcrumbs.81e0fe77.js";import{_ as W}from"./Heading.b7ea694e.js";import{_ as Y,b as u,d as p,e as y,r as S,c as x,f as m,w,n as b,u as t,q as v,y as k,F as I,j as E,t as A,s as P,o as Z,k as ee,h as te,A as oe,B as se,m as ae}from"./entry.d278d823.js";import{u as ne,_ as L}from"./composables.bd4de447.js";import{_ as re}from"./Item.5491e527.js";import{u as le}from"./fetch.a5d2f0a2.js";import"./nuxt-img.8402f3e7.js";const ce={},ie={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},ue=y("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5L8.25 12l7.5-7.5"},null,-1),me=[ue];function ge(e,c){return u(),p("svg",ie,me)}const pe=Y(ce,[["render",ge]]),fe={class:"py-4"},he={class:"flex flex-wrap items-center justify-center text-sm lg:text-base"},de={key:0,class:"mx-1 my-2"},be={class:"pagination-first mx-1 my-2"},ye={key:1,class:"mx-1 my-2"},$e={key:2,class:"mx-1 my-2"},_e={class:"pagination-last mx-1 my-2"},we={key:3,class:"mx-1 my-2"},xe={__name:"Pagination",props:{pagesCount:Number,page:Number,routeName:String,color:String},setup(e){const c=e,n=3,o=ne();S(),S();const r=x(()=>c.color==="blue"?"bg-trso-blue hover:bg-trso-blue2":"bg-trso-yellow hover:bg-trso-yellow2"),i=x(()=>c.color==="blue"?"bg-trso-blue2":"bg-trso-yellow2"),l=x(()=>{const s=c.page,a=c.pagesCount;if(a>n)return s<=n?Array.from({length:n},(f,g)=>g+2):s>a-n?Array.from({length:n},(f,g)=>a-1-g).reverse():[s-1,s,s+1];{const f=Array.from({length:n},(g,d)=>d+1);return f.slice(1,-1).splice(0,f.length-1)}});return(s,a)=>{const f=pe,g=L,d=J,C=L;return u(),p("nav",fe,[y("ul",he,[e.page>1?(u(),p("li",de,[m(g,{class:b(["text-white font-bold h-8 w-8 flex items-center justify-center",e.color==="blue"?"bg-trso-blue hover:bg-trso-blue2":"bg-trso-yellow hover:bg-trso-yellow2"]),to:t(o)({name:e.routeName,params:{page:e.page-1}})},{default:w(()=>[m(f,{class:"h-4 w-4"})]),_:1},8,["class","to"])])):v("",!0),y("li",be,[m(g,{class:b(["block text-white font-bold h-8 w-8 flex items-center justify-center",e.page!=1?t(r):t(i)]),to:t(o)({name:e.routeName,params:{page:1}})},{default:w(()=>[k(" 1 ")]),_:1},8,["class","to"])]),e.page>n?(u(),p("li",ye,[y("span",{class:b(["block font-bold h-8 w-auto flex items-center justify-center",e.color==="blue"?"text-trso-blue":"text-trso-yellow"])}," ... ",2)])):v("",!0),(u(!0),p(I,null,E(t(l),$=>(u(),p("li",{class:"mx-1 my-2",key:$.id},[m(g,{class:b(["block text-white font-bold h-8 w-8 flex items-center justify-center",$!=e.page?t(r):t(i)]),to:t(o)({name:e.routeName,params:{page:$}})},{default:w(()=>[k(A($),1)]),_:2},1032,["class","to"])]))),128)),e.page<e.pagesCount-n?(u(),p("li",$e,[y("span",{class:b(["block font-bold h-8 w-auto flex items-center justify-center",e.color==="blue"?"text-trso-blue":"text-trso-yellow"])}," ... ",2)])):v("",!0),y("li",_e,[m(g,{class:b(["block text-white font-bold h-8 w-8 flex items-center justify-center",e.page!=e.pagesCount?t(r):t(i)]),to:t(o)({name:e.routeName,params:{page:e.pagesCount}})},{default:w(()=>[k(A(e.pagesCount),1)]),_:1},8,["class","to"])]),e.page<e.pagesCount?(u(),p("li",we,[m(C,{class:b(["block text-white font-bold h-8 w-8 flex items-center justify-center",e.color==="blue"?"bg-trso-blue hover:bg-trso-blue2":"bg-trso-yellow hover:bg-trso-yellow2"]),to:t(o)({name:e.routeName,params:{page:e.page+1}})},{default:w(()=>[m(d,{class:"h-4 w-4"})]),_:1},8,["class","to"])])):v("",!0)])])}}},ve={class:"container grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4"},ke={__name:"ItemsByPage",props:{items:Array,type:String,page:Number,routeName:String,color:String,pagesCount:Number},setup(e){const{locale:c}=P();return Z(()=>{const n=Array.from(document.getElementsByClassName("fade-in")),o=new IntersectionObserver(r=>{r.forEach(i=>{i.isIntersecting&&(i.target.style.opacity="1",i.target.style.transform="scale(1)",o.unobserve(i.target))})},{threshold:.5});n.forEach(r=>{o.observe(r)})}),(n,o)=>{const r=xe,i=re;return u(),p("div",null,[m(r,{page:e.page,pagesCount:e.pagesCount,routeName:e.routeName,color:e.color},null,8,["page","pagesCount","routeName","color"]),y("div",ve,[(u(!0),p(I,null,E(e.items,l=>(u(),ee(i,{key:l.id,itemData:l,type:e.type,lang:t(c),color:e.color},null,8,["itemData","type","lang","color"]))),128))]),m(r,{page:e.page,pagesCount:e.pagesCount,routeName:e.routeName,color:e.color},null,8,["page","pagesCount","routeName","color"])])}}},Te={__name:"[page]",async setup(e){let c,n;const o=ae(),r=te(),{locale:i,t:l}=P(),s=parseInt(r.params.page),a=r.params.type,f=a==="tv-series"?"yellow":"blue",g=l(a==="tv-series"?"pages.series.title":"pages.movies.title"),d=o.public.limitByPage,C=(s-1)*parseInt(d),$="fields[0]=director&fields[1]=year&fields[2]=poster",j=`filters[type][$eq]=${a==="tv-series"?"series":"movie"}&filters[item_lang][locale][$eq]=${i.value}&filters[books][firstBook][$eq]=true`,T="populate[item_lang][fields][0]=title&populate[item_lang][fields][1]=slug&populate[books][fields][0]=title&populate[books][fields][1]=authors&populate[books][fields][2]=thumbnail",D=`pagination[start]=${C}&pagination[limit]=${d}`,R=`sort[0]=id%3Adesc&${$}&${j}&${T}&${D}`,U=`${o.public.API_BASE_URL}items?${R}`,{data:B}=([c,n]=oe(()=>le(U,"$SMNti1NK9G")),c=await c,n(),c),N=x(()=>{const h=B.value.meta.pagination.total;return Math.ceil(parseInt(h)/parseInt(d))}),M=x(()=>{let h=[{rel:"canonical",href:`${o.public.BASE_URL}${r.fullPath}`}];return N.value>1&&(s===1?h.push({rel:"next",href:`${o.public.BASE_URL}/${a}/pages/2`}):s===N.value?h.push({rel:"prev",href:`${o.public.BASE_URL}/${a}/pages/${s-1}`}):(h.push({rel:"prev",href:`${o.public.BASE_URL}/${a}/pages/${s-1}`}),h.push({rel:"next",href:`${o.public.BASE_URL}/${a}/pages/${s+1}`}))),h});let _=a==="tv-series"?"series":"movies";const q=`${l(`pages['${_}']['title']`)} - page ${s}`,V=l(`pages['${_}']['hidDescription']`),F=l(`pages['${_}']['hidKeywords']`),H=l(`pages['${_}']['hidOgDescription']`),K=l(`pages['${_}']['hidTwitterTitle']`),O=l(`pages['${_}']['hidTwitterDescription']`);return se({title:`${o.public.websiteName} - ${q}`,link:M.value,meta:[{name:"description",content:`${V} ${s}`},{name:"keywords",content:F},{property:"og:site_name",content:o.public.websiteName},{property:"og:description",content:`${H} ${s}`},{property:"twitter:title",content:`${o.public.websiteName} - ${K}`},{property:"twitter:description",content:`${O} ${s}`}]}),(h,Ae)=>{const G=Q,z=W,X=ke;return u(),p("div",null,[m(G,{levels:[{name:t(a),route:{name:"type-pages-page",params:{type:t(a),page:1}}},{name:`page ${String(t(s))}`}]},null,8,["levels"]),m(z,{tag:"h1",tagStyle:"h1",color:t(f)},{default:w(()=>[k(A(t(g)),1)]),_:1},8,["color"]),m(X,{items:t(B).data,type:t(a),page:t(s),routeName:"type-pages-page",color:t(f),pagesCount:t(N)},null,8,["items","type","page","color","pagesCount"])])}}};export{Te as default};