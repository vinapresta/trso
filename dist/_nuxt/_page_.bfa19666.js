import{a as Z,_ as tt}from"./Breadcrumbs.08bd1a78.js";import{_ as j}from"./Heading.d1ffbd72.js";import{_ as E,o as l,c as r,a as m,r as T,I as N,f as g,w as y,n as _,g as e,i as k,d as C,F as B,h as I,t as d,e as D,m as R,u as L,s as et,G as st,b as ot,k as at,l as nt}from"./entry.039e1522.js";import{a as M}from"./composables.2f83a090.js";import{_ as lt,u as it}from"./nuxt-img.b21af360.js";import{u as rt}from"./fetch.39c36499.js";const ct={},ut={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},mt=m("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5L8.25 12l7.5-7.5"},null,-1),gt=[mt];function pt(t,c){return l(),r("svg",ut,gt)}const dt=E(ct,[["render",pt]]),ht={class:"py-4"},bt={class:"flex flex-wrap items-center justify-center text-sm lg:text-base"},ft={key:0,class:"mx-1 my-2"},yt={class:"pagination-first mx-1 my-2"},$t={key:1,class:"mx-1 my-2"},_t={key:2,class:"mx-1 my-2"},kt={class:"pagination-last mx-1 my-2"},vt={key:3,class:"mx-1 my-2"},wt={__name:"Pagination",props:{pagesCount:Number,page:Number,routeName:String,color:String},setup(t){const c=t,p=3,n=M();T(),T();const u=N(()=>c.color==="blue"?"bg-trso-blue hover:bg-trso-blue2":"bg-trso-yellow hover:bg-trso-yellow2"),o=N(()=>c.color==="blue"?"bg-trso-blue2":"bg-trso-yellow2"),i=N(()=>{const s=c.page,a=c.pagesCount;if(a>p)return s<=p?Array.from({length:p},(f,h)=>h+2):s>a-p?Array.from({length:p},(f,h)=>a-1-h).reverse():[s-1,s,s+1];{const f=Array.from({length:p},(h,b)=>b+1);return f.slice(1,-1).splice(0,f.length-1)}});return(s,a)=>{const f=dt,h=D,b=Z,x=D;return l(),r("nav",ht,[m("ul",bt,[t.page>1?(l(),r("li",ft,[g(h,{class:_(["text-white font-bold h-8 w-8 flex items-center justify-center",t.color==="blue"?"bg-trso-blue hover:bg-trso-blue2":"bg-trso-yellow hover:bg-trso-yellow2"]),to:e(n)({name:t.routeName,params:{page:t.page-1}})},{default:y(()=>[g(f,{class:"h-4 w-4"})]),_:1},8,["class","to"])])):k("",!0),m("li",yt,[g(h,{class:_(["block text-white font-bold h-8 w-8 flex items-center justify-center",t.page!=1?e(u):e(o)]),to:e(n)({name:t.routeName,params:{page:1}})},{default:y(()=>[C(" 1 ")]),_:1},8,["class","to"])]),t.page>p?(l(),r("li",$t,[m("span",{class:_(["block font-bold h-8 w-auto flex items-center justify-center",t.color==="blue"?"text-trso-blue":"text-trso-yellow"])}," ... ",2)])):k("",!0),(l(!0),r(B,null,I(e(i),$=>(l(),r("li",{class:"mx-1 my-2",key:$.id},[g(h,{class:_(["block text-white font-bold h-8 w-8 flex items-center justify-center",$!=t.page?e(u):e(o)]),to:e(n)({name:t.routeName,params:{page:$}})},{default:y(()=>[C(d($),1)]),_:2},1032,["class","to"])]))),128)),t.page<t.pagesCount-p?(l(),r("li",_t,[m("span",{class:_(["block font-bold h-8 w-auto flex items-center justify-center",t.color==="blue"?"text-trso-blue":"text-trso-yellow"])}," ... ",2)])):k("",!0),m("li",kt,[g(h,{class:_(["block text-white font-bold h-8 w-8 flex items-center justify-center",t.page!=t.pagesCount?e(u):e(o)]),to:e(n)({name:t.routeName,params:{page:t.pagesCount}})},{default:y(()=>[C(d(t.pagesCount),1)]),_:1},8,["class","to"])]),t.page<t.pagesCount?(l(),r("li",vt,[g(x,{class:_(["block text-white font-bold h-8 w-8 flex items-center justify-center",t.color==="blue"?"bg-trso-blue hover:bg-trso-blue2":"bg-trso-yellow hover:bg-trso-yellow2"]),to:e(n)({name:t.routeName,params:{page:t.page+1}})},{default:y(()=>[g(b,{class:"h-4 w-4"})]),_:1},8,["class","to"])])):k("",!0)])])}}};const xt={class:"fade-in opacity-0 scale-90 transition-all origin-center duration-500"},Nt={class:"pl-2"},Ct={class:"text-sm"},St={key:0,class:"text-sm font-semibold"},At={key:0},Dt={key:1},Bt={class:"text-sm"},It={key:0},Lt={key:1},Pt={key:2},Tt={key:0,class:"block py-2 text-xs italic"},jt={key:0},Et={key:1},Rt={class:"font-bold"},Mt={__name:"Item",props:{itemData:Object,type:String,lang:String,color:String},setup(t){const c=t,p=R(),n=M(),{t:u}=L(),o=c.itemData.attributes.books.data[0],i=c.itemData.attributes.item_lang.data.attributes,s=et({src:"",alt:""});return o&&o.attributes.thumbnail?(s.src=o.attributes.thumbnail,s.alt=`${u("list.cover")} ${o.attributes.title}`):c.itemData.attributes.poster.length?(s.src=c.itemData.attributes.poster,s.alt=`Poster ${i.title}`):(s.src="/img/tarsier.png",s.alt=u("image.na")),(a,f)=>{const h=lt,b=D,x=j;return l(),r("div",xt,[m("div",{class:_(["relative h-full flex border px-2 pt-2 pb-10",`border-trso-${t.color}`])},[g(b,{to:e(n)({name:"type-id-slug",params:{type:t.type,id:`${t.itemData.id}`,slug:`${e(i).slug}`}}),title:`${a.$t("components.item.linkTitle",{type:t.type,name:e(i).title,book:e(o).attributes.title})}`,class:"relative block self-center w-1/4 md:w-1/5 lg:w-1/6"},{default:y(()=>[g(h,{loading:"lazy",placeholder:"/img/tarsier.png",class:"list-item__img self-center placeholder:animate-bounce",src:e(s).src,alt:e(s).alt},null,8,["src","alt"])]),_:1},8,["to","title"]),m("div",Nt,[g(x,{tag:e(p).path!="/"?"h2":"h3",tagStyle:"item"},{default:y(()=>[g(b,{to:e(n)({name:"type-id-slug",params:{type:t.type,id:`${t.itemData.id}`,slug:`${e(i).slug}`}}),title:`${a.$t("components.item.linkTitle",{type:t.type,name:e(i).title,book:e(o).attributes.title})}`,class:"block"},{default:y(()=>[m("span",null,d(e(i).title)+" ",1),m("span",Ct,"("+d(t.itemData.attributes.year)+")",1)]),_:1},8,["to","title"]),t.itemData.attributes.director!="N/A"?(l(),r("span",St,[t.type==="series"?(l(),r("span",At,d(a.$t("pages.slug.directedSeries")),1)):(l(),r("span",Dt,d(a.$t("pages.slug.directedMovie"))+" ",1)),m("span",null,d(t.itemData.attributes.director),1)])):k("",!0)]),_:1},8,["tag"]),m("p",Bt,[t.type==="tv-series"?(l(),r("span",It,d(a.$t("pages.slug.theSeries"))+" ",1)):(l(),r("span",Lt,d(a.$t("pages.slug.theMovie"))+" ",1)),m("span",null,d(a.$t("pages.slug.from"))+" ",1),e(o)?(l(),r("span",Pt,[m("span",null,d(e(o).attributes.title),1),e(o).attributes.authors.length?(l(),r("span",Tt,[m("span",null,d(a.$t("list.written"))+" ",1),(l(!0),r(B,null,I(e(o).attributes.authors,($,S)=>(l(),r("span",{key:$.id,class:"font-bold"},[S===Object.keys(e(o).attributes.authors).length-1&&e(o).attributes.authors.length>1?(l(),r("span",jt," and ")):k("",!0),C(d($),1),S<Object.keys(e(o).attributes.authors).length-2?(l(),r("span",Et,", ")):k("",!0)]))),128))])):k("",!0)])):k("",!0)])]),g(b,{class:_(["text-center px-4 py-1 transition-colors duration-500 text-white rounded-sm block w-full absolute left-0 bottom-0",`bg-trso-${t.color} hover:bg-trso-${t.color}2`]),to:e(n)({name:"type-id-slug",params:{type:t.type,id:`${t.itemData.id}`,slug:`${e(i).slug}`}}),title:`${a.$t("components.item.linkTitle",{type:t.type,name:e(i).title,book:e(o).attributes.title})}`},{default:y(()=>[m("span",Rt,d(a.$t("pages.slug.more")),1)]),_:1},8,["class","to","title"])],2)])}}},Ot=E(Mt,[["__scopeId","data-v-f6f8bc49"]]),Ut={class:"container grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4"},Ht={__name:"ItemsByPage",props:{items:Array,type:String,page:Number,routeName:String,color:String,pagesCount:Number},setup(t){const{locale:c}=L();return st(()=>{const p=Array.from(document.getElementsByClassName("fade-in")),n=new IntersectionObserver(u=>{u.forEach(o=>{o.isIntersecting&&(o.target.style.opacity="1",o.target.style.transform="scale(1)",n.unobserve(o.target))})},{threshold:.5});p.forEach(u=>{n.observe(u)})}),(p,n)=>{const u=wt,o=Ot;return l(),r("div",null,[g(u,{page:t.page,pagesCount:t.pagesCount,routeName:t.routeName,color:t.color},null,8,["page","pagesCount","routeName","color"]),m("div",Ut,[(l(!0),r(B,null,I(t.items,i=>(l(),ot(o,{key:i.id,itemData:i,type:t.type,lang:e(c),color:t.color},null,8,["itemData","type","lang","color"]))),128))]),g(u,{page:t.page,pagesCount:t.pagesCount,routeName:t.routeName,color:t.color},null,8,["page","pagesCount","routeName","color"])])}}},Wt={__name:"[page]",async setup(t){let c,p;const n=at(),u=R(),{locale:o,t:i}=L(),s=parseInt(u.params.page),a=u.params.type,f=a==="tv-series"?"yellow":"blue",h=i(a==="tv-series"?"pages.series.title":"pages.movies.title"),b=n.public.limitByPage,x=(s-1)*parseInt(b),$="fields[0]=director&fields[1]=year&fields[2]=poster",S=`filters[type][$eq]=${a==="tv-series"?"series":"movie"}&filters[item_lang][locale][$eq]=${o.value}&filters[books][firstBook][$eq]=true`,O="populate[item_lang][fields][0]=title&populate[item_lang][fields][1]=slug&populate[books][fields][0]=title&populate[books][fields][1]=authors&populate[books][fields][2]=thumbnail",U=`pagination[start]=${x}&pagination[limit]=${b}`,H=`sort[0]=id%3Adesc&${$}&${S}&${O}&${U}`,V=`${n.public.API_BASE_URL}items?${H}`,{data:P}=([c,p]=nt(()=>rt(V,"$SMNti1NK9G")),c=await c,p(),c),A=N(()=>{const v=P.value.meta.pagination.total;return Math.ceil(parseInt(v)/parseInt(b))}),q=N(()=>{let v=[{rel:"canonical",href:`${n.public.BASE_URL}${u.fullPath}`}];return A.value>1&&(s===1?v.push({rel:"next",href:`${n.public.BASE_URL}/${a}/pages/2`}):s===A.value?v.push({rel:"prev",href:`${n.public.BASE_URL}/${a}/pages/${s-1}`}):(v.push({rel:"prev",href:`${n.public.BASE_URL}/${a}/pages/${s-1}`}),v.push({rel:"next",href:`${n.public.BASE_URL}/${a}/pages/${s+1}`}))),v});let w=a==="tv-series"?"series":"movies";const F=`${i(`pages['${w}']['title']`)} - page ${s}`,G=i(`pages['${w}']['hidDescription']`),K=i(`pages['${w}']['hidKeywords']`),z=i(`pages['${w}']['hidOgDescription']`),X=i(`pages['${w}']['hidTwitterTitle']`),J=i(`pages['${w}']['hidTwitterDescription']`);return it({title:`${n.public.websiteName} - ${F}`,link:q.value,meta:[{name:"description",content:`${G} ${s}`},{name:"keywords",content:K},{property:"og:site_name",content:n.public.websiteName},{property:"og:description",content:`${z} ${s}`},{property:"twitter:title",content:`${n.public.websiteName} - ${X}`},{property:"twitter:description",content:`${J} ${s}`}]}),(v,Ft)=>{const Q=tt,W=j,Y=Ht;return l(),r("div",null,[g(Q,{levels:[{name:e(a),route:{name:"type-pages-page",params:{type:e(a),page:1}}},{name:`page ${String(e(s))}`}]},null,8,["levels"]),g(W,{tag:"h1",tagStyle:"h1",color:e(f)},{default:y(()=>[C(d(e(h)),1)]),_:1},8,["color"]),g(Y,{items:e(P).data,type:e(a),page:e(s),routeName:"type-pages-page",color:e(f),pagesCount:e(A)},null,8,["items","type","page","color","pagesCount"])])}}};export{Wt as default};