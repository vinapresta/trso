import{k as g,u as $,l as b,c as s,a as k,F as h,h as y,g as A,o as a,t as l}from"./entry.78bed9e6.js";import{u as B}from"./fetch.035762f5.js";const w={__name:"index",async setup(q){let t,i;const o=g(),{locale:n}=$(),r=o.public.featuredItemsCount,u="fields[0]=director&fields[1]=year&fields[2]=poster",c=`filters[type][$eq]=movie&filters[item_lang][locale][$eq]=${n.value}&filters[item_lang][home][$eq]=true&filters[books][firstBook][$eq]=true`,p="populate[item_lang][fields][0]=title&populate[item_lang][fields][1]=slug&populate[books][fields][0]=title&populate[books][fields][1]=authors&populate[books][fields][2]=thumbnail",f=`pagination[start]=0&pagination[limit]=${r}`,d=`sort[0]=id%3Adesc&${u}&${c}&${p}&${f}`,m=`${o.public.API_BASE_URL}items?${d}`,{data:_}=([t,i]=b(()=>B(m,"$PslAyef5YX")),t=await t,i(),t);return(C,v)=>(a(),s("div",null,[k("ul",null,[(a(!0),s(h,null,y(A(_).data,e=>(a(),s("li",{key:e.id},l(e.id)+" "+l(e.attributes.item_lang.data.attributes.title),1))),128))])]))}};export{w as default};
