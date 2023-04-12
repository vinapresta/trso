import{_ as E}from"./Breadcrumbs.a6d2b6a9.js";import{_ as T,b as o,d as l,e as n,h as z,r as x,o as N,i as U,F as v,j as w,f as $,w as S,k as B,l as K,u as s,m as F,p as J,n as k,t as a,q as i,s as R,x as H,y as _,z as Q,A as X,c as G,B as W}from"./entry.01f0ab13.js";import{_ as Y}from"./nuxt-img.0867ce0e.js";import{u as Z}from"./fetch.0ecd4207.js";import"./composables.6e8c309c.js";const tt={},et={xmlns:"http://www.w3.org/2000/svg",fill:"#ffffff",viewBox:"0 0 50 50"},st=n("path",{d:"M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z"},null,-1),ot=[st];function lt(t,c){return o(),l("svg",et,ot)}const at=T(tt,[["render",lt]]),nt={},it={xmlns:"http://www.w3.org/2000/svg",fill:"#ffffff",viewBox:"0 0 50 50"},rt=n("path",{d:"M50.061,10.438c-1.846,0.818-3.826,1.369-5.908,1.62c2.125-1.273,3.757-3.29,4.523-5.688c-1.986,1.177-4.19,2.033-6.531,2.493c-1.874-2-4.547-3.247-7.504-3.247c-5.68,0-10.284,4.604-10.284,10.282c0,0.805,0.092,1.589,0.269,2.343C16.08,17.812,8.502,13.718,3.429,7.497c-0.885,1.522-1.391,3.289-1.391,5.172c0,3.567,1.812,6.713,4.574,8.56c-1.688-0.054-3.271-0.517-4.657-1.288c0,0.044,0,0.086,0,0.131c0,4.984,3.544,9.134,8.245,10.084c-0.86,0.236-1.769,0.36-2.707,0.36c-0.664,0-1.309-0.064-1.938-0.186c1.313,4.081,5.108,7.06,9.607,7.143c-3.517,2.757-7.951,4.399-12.77,4.399c-0.833,0-1.649-0.048-2.452-0.144c4.548,2.919,9.956,4.619,15.762,4.619c18.915,0,29.26-15.668,29.26-29.252c0-0.448-0.011-0.894-0.03-1.332C46.94,14.313,48.684,12.5,50.061,10.438z"},null,-1),ct=[rt];function ut(t,c){return o(),l("svg",it,ct)}const pt=T(nt,[["render",ut]]),dt={class:"share-network-list flex justify-end items-center gap-x-2 px-2 py-2"},bt={__name:"Social",props:{title:String,description:String,quote:String,hashtags:String},setup(t){const c=t,u=F(),b=z(),r=[{network:"facebook",name:"Facebook",icon:at},{network:"twitter",name:"Twitter",icon:pt}],d=x("");return N(()=>{var g;d.value=(g=c.hashtags)==null?void 0:g.replace(", ",",")}),(g,h)=>{const m=U("ShareNetwork");return o(),l("div",dt,[(o(),l(v,null,w(r,f=>$(m,{network:f.network,key:f.network,url:`${s(u).public.BASE_URL}${s(b).fullPath}`,title:t.title,description:t.description,quote:"whesh la zone",hashtags:s(d),class:"p-1 bg-trso-blue"},{default:S(()=>[(o(),B(K(f.icon),{class:"h-6 w-6"}))]),_:2},1032,["network","url","title","description","hashtags"])),64))])}}},gt={key:0},mt={key:1},O={__name:"ReadMore",props:{color:String},setup(t){const c="max-h-12 overflow-hidden text-ellipsis before:opacity-1 before:bg-gradient-to-b before:from-transparent before:to-white before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0",u=x(null),b=x(!0),r=x(!1),d=x("");N(()=>{const m=u.value.clientHeight>48;r.value=m,b.value=m,d.value=m?c:""});function g(){b.value=!b.value,d.value=b.value?c:"max-h-[2000px] before:opacity-0"}return(h,m)=>(o(),l("div",null,[n("div",{class:k(["text-justify pb-2 text-sm lg:text-base relative transition-all duration-500 ease before:transition-all before:duration-500 before:ease",s(d)]),ref:f=>{u.value=f}},[J(h.$slots,"default")],2),s(r)?(o(),l("button",{key:0,class:k(["btn block mx-auto mt-2 py-1 px-3 text-white text-sm lg:text-base font-semibold border-none",`bg-trso-${t.color}`]),onClick:m[0]||(m[0]=f=>g())},[s(b)?(o(),l("span",gt,a(h.$t("pages.slug.more")),1)):(o(),l("span",mt,a(h.$t("pages.slug.less")),1))],2)):i("",!0)]))}},ht={class:"mb-4 lg:flex items-center"},kt={class:"block pb-4 lg:pb-0 pr-4 w-full lg:w-1/6"},ft={class:"w-full lg:w-5/6"},$t={class:"mb-4"},_t={class:"block text-xl font-bold pb-1"},yt={key:0,class:"block text-sm pb-2"},xt={key:0},vt={key:1},wt={key:0},At={itemProp:"description"},Bt={__name:"BookDetail",props:{book:Object,type:String,color:String},setup(t){const{locale:c}=R(),{$formatDate:u}=H();return(b,r)=>{const d=Y,g=O;return o(),l("div",ht,[n("span",kt,[t.book.thumbnail?(o(),B(d,{key:0,class:"mx-auto lg:mx-0 lg:w-full h-auto",loading:"lazy",format:"webp",src:t.book.thumbnail,alt:`${b.$t("pages.slug.bookImgAlt")} ${t.book.title}`},null,8,["src","alt"])):i("",!0)]),n("div",ft,[n("h2",$t,[n("span",_t,a(t.book.title),1),t.book.subtitle?(o(),l("span",yt,"("+a(t.book.subtitle)+")",1)):i("",!0),t.book.publisher||t.book.published?(o(),l("span",{key:1,class:k(["block text-left text-xs italic block",`text-trso-${t.color}`])},[t.book.publisher?(o(),l("span",xt,a(b.$t("pages.slug.published"))+" "+a(t.book.publisher),1)):i("",!0),t.book.published&&t.book.published!="1000-01-01"?(o(),l("span",vt,[t.book.publisher?(o(),l("span",wt," - ")):i("",!0),_(" "+a(s(u)(t.book.published,s(c))),1)])):i("",!0)],2)):i("",!0)]),t.book.description?(o(),B(g,{key:0,color:t.color},{default:S(()=>[n("p",At,a(t.book.description),1)]),_:1},8,["color"])):i("",!0)])])}}},St=["src","alt"],Ct={class:"pl-2 sm:pl-4 md:pl-8 pr-0 sm:pr-4 md:pr-8 w-3/4 md:w-auto"},jt={class:"text-white text-base md:text-lg"},Dt={key:0,class:"text-sm md:text-base"},Mt={key:0},Lt={key:1},Nt={key:1,class:"text-xs md:sm"},Rt={key:0},Ot={key:1},Pt={key:0},qt={__name:"BooksAccordion",props:{book:Object,color:String},setup(t){const{locale:c}=R(),{$formatDate:u}=H(),b=x("disabled");return(r,d)=>{const g=O;return o(),l("div",{class:k(["mb-2 p-4 border",`border-trso-${t.color}`])},[n("div",{class:k(["flex flex-wrap items-center",s(b)]),onClick:d[0]||(d[0]=Q((...h)=>r.collapseContent&&r.collapseContent(...h),["prevent"]))},[t.book.thumbnail?(o(),l("img",{key:0,src:t.book.thumbnail,alt:`${r.$t("pages.slug.bookImgAlt")} ${t.book.title}`,class:"w-1/4 w-auto w-auto h-24"},null,8,St)):i("",!0),n("div",Ct,[n("h3",jt,[n("span",null,a(t.book.title),1)]),t.book.authors?(o(),l("p",Dt,[n("span",null,a(r.$t("pages.slug.written")),1),(o(!0),l(v,null,w(t.book.authors,(h,m)=>(o(),l("span",{key:h.id},[m===Object.keys(t.book.authors).length-1&&t.book.authors.length>1?(o(),l("span",Mt,a(r.$t("pages.slug.and")),1)):i("",!0),_(a(h),1),m<Object.keys(t.book.authors).length-2?(o(),l("span",Lt,", ")):i("",!0)]))),128))])):i("",!0),t.book.publisher||t.book.published?(o(),l("p",Nt,[t.book.publisher?(o(),l("span",Rt,a(r.$t("pages.slug.published"))+" "+a(t.book.publisher),1)):i("",!0),t.book.published&&t.book.published!="1000-01-01"?(o(),l("span",Ot,[t.book.publisher?(o(),l("span",Pt," - ")):i("",!0),_(a(s(u)(t.book.published,s(c))),1)])):i("",!0)])):i("",!0)])],2),$(g,{color:t.color},{default:S(()=>[n("p",null,a(t.book.description),1)]),_:1},8,["color"])],2)}}},Vt=""+new URL("image-not-available.7d3a20b6.jpg",import.meta.url).href,Tt={class:"flex flex-wrap"},zt={class:"sm:w-1/6 py-2 mx-auto lg:pr-4"},Ft=["src","alt"],Ht={key:1,src:Vt,alt:"image not available",class:"inline-block"},It={class:"sm:w-5/6 py-2"},Et={class:"block font-bold mb-2 text-center lg:text-justify"},Ut={itemProp:"description"},Kt={class:"py-8 text-sm lg:text-base"},Jt={class:"italic pb-2"},Qt={__name:"Detail",props:{itemAttr:Object,itemLangAttr:Object,bookAttr:Object},setup(t){const u=t.itemAttr.type==="series"?"yellow":"blue";return(b,r)=>{const d=O;return o(),l("div",Tt,[n("div",zt,[t.itemAttr.poster!="N/A"?(o(),l("img",{key:0,src:t.itemAttr.poster,alt:`Poster ${t.itemLangAttr.title}`,class:"inline-block"},null,8,Ft)):(o(),l("img",Ht))]),n("div",It,[n("span",Et,a(b.$t("pages.slug.hidDescription1"))+" "+a(t.itemAttr.type)+" "+a(t.itemLangAttr.title)+" "+a(b.$t("pages.slug.hidDescription2"))+" "+a(t.bookAttr.title)+"? ",1),$(d,{color:s(u)},{default:S(()=>[n("p",Ut,a(t.itemLangAttr.plot),1)]),_:1},8,["color"]),n("ul",Kt,[(o(!0),l(v,null,w(t.itemAttr.ratings,g=>(o(),l("li",{key:g.key},[n("span",Jt,a(g.Source)+":",1),_("  "),n("span",{class:k(["font-semibold",`text-trso-${s(u)}`])},a(g.Value),3)]))),128))])])])}}},Xt={class:"mb-4 font-bold text-base lg:text-lg text-center lg:text-justify"},Gt=n("div",{id:"disqus_thread"},null,-1),Wt=n("noscript",null,'Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>',-1),Yt={__name:"Comments",props:{bookTitle:String},setup(t){return N(()=>{(function(){var c=document,u=c.createElement("script");u.src="https://moviesfrombooks.disqus.com/embed.js",u.setAttribute("data-timestamp",+new Date),(c.head||c.body).appendChild(u)})()}),(c,u)=>(o(),l("div",null,[n("h2",Xt,[n("span",null,a(c.$t("pages.slug.comments"))+" "+a(t.bookTitle)+", "+a(c.$t("pages.slug.comments2")),1)]),Gt,Wt]))}},Zt={itemscope:"",itemtype:"http://schema.org/Movie"},te={itemprop:"name"},ee={class:"text-lg lg:text-xl text-center font-serif px-4 pt-4"},se={class:"block pb-1 lg:pb-2 text-center"},oe=n("i",{class:"fas fa-film"},null,-1),le={key:0},ae={key:1},ne={class:"text-xl sm:text-2xl md:text-3xl lg:text-4xl"},ie={key:0,class:"block text-center italic text-base lg:text-lg"},re={key:0,itemprop:"director"},ce={key:1},ue={key:2},pe={class:"block pt-2 pb-1 lg:pb-2 font-bold"},de=n("i",{class:"fas fa-book"},null,-1),be={class:"text-xl sm:text-2xl md:text-3xl lg:text-4xl"},ge={key:1,class:"block pb-2 md:pb-4 italic text-base lg:text-lg",itemprop:"author"},me={key:0},he={key:1},ke={class:"py-8 lg:py-12"},fe={key:0},$e={class:"flex flex-wrap"},_e=["id"],Ce={__name:"[id]-[slug]",async setup(t){let c,u;const{locale:b,t:r}=R(),d=F(),h=z().params.id,m="fields[0]=imdbId&fields[1]=poster&fields[2]=type&fields[3]=ratings",f=`filters[item_lang][locale][$eq]=${b.value}`,I=`${m}&${f}&populate[item_lang][fields][0]=title&populate[item_lang][fields][1]=plot&populate[item_lang][fields][2]=slug&populate[books][fields][0]=title&populate[books][fields][1]=description&populate[books][fields][2]=thumbnail&populate[books][fields][3]=authors&populate[books][fields][4]=firstBook&populate[books][fields][5]=published&populate[books][fields][6]=publisher&populate[books][fields][7]=subtitle`,{data:P}=([c,u]=X(()=>Z(`${d.public.API_BASE_URL}items/${h}?${I}`,"$XQ2zETsRE3")),c=await c,u(),c),e=G(()=>{if(!P.value.data)return null;const p=P.value.data.attributes,C=p.item_lang.data.attributes,A=p.books.data,j=A.find(L=>L.attributes.firstBook===!0),D=`${C.plot.split(".")[0]}.`,M=p.type==="series"?"yellow":"blue";return{attr:p,langAttr:C,books:A,firstBook:j,plotForMeta:D,color:M}});return W({title:`${d.public.websiteName} - ${r("pages.slug.what")} ${r("pages.slug.the")} ${e.value.attr.type} ${e.value.langAttr.title} ${r("pages.slug.on")}`,meta:[{name:"description",content:`${r("pages.slug.hidDescription1")} ${e.value.attr.type} ${r("pages.slug.hidDescription2")} ${e.value.firstBook.attributes.title}`},{name:"keywords",content:`${r("pages.slug.hidKeywords")}`},{property:"og:site_name",content:d.public.websiteName},{property:"og:description",content:`${r("pages.slug.the")} ${e.value.attr.type} ${e.value.langAttr.title} ${r("pages.slug.hidOgDescription")} ${e.value.firstBook.attributes.title}. ${e.plotForMeta}`},{property:"og:image",content:e.value.attr.poster},{property:"twitter:title",content:d.public.websiteName},{property:"twitter:description",content:`${r("pages.slug.the")} ${e.value.attr.type} ${e.value.langAttr.title} ${r("pages.slug.hidOgDescription")} ${e.value.firstBook.attributes.title}. ${e.plotForMeta}`},{property:"twitter:image:src",content:e.value.attr.poster}]}),(p,C)=>{const A=E,j=bt,q=Bt,D=qt,M=Qt,L=Yt;return o(),l("div",null,[$(A,{levels:[{name:s(e).attr.type==="series"?"tv-series":"movies",route:{name:"type-pages-page",params:{type:s(e).attr.type==="series"?"tv-series":"movies",page:1}}},{name:s(e).langAttr.title}]},null,8,["levels"]),n("div",Zt,[n("h1",{class:k(["block py-2 px-2 text-white text-center font-semibold",`bg-trso-${s(e).color}`])},[_(a(p.$t("pages.slug.what"))+" ",1),n("span",te,a(s(e).attr.type==="series"?p.$t("pages.slug.theSeries"):p.$t("pages.slug.theMovie"))+" "+a(s(e).langAttr.title),1),_(" "+a(p.$t("pages.slug.on")),1)],2),n("section",{class:k(["border",`border-trso-${s(e).color}`])},[n("p",ee,[n("span",se,[oe,s(e).attr.type==="series"?(o(),l("span",le,a(p.$t("pages.slug.theSeries")),1)):(o(),l("span",ae,a(p.$t("pages.slug.theMovie")),1))]),n("span",{class:k(["block pb-0 lg:pb-1",`text-trso-${s(e).color}`])},[n("span",ne,a(s(e).langAttr.title),1)],2),s(e).attr.director||s(e).attr.year?(o(),l("span",ie,[s(e).attr.director!="N/A"?(o(),l("span",re,a(p.$t("movie.director"))+" "+a(s(e).attr.director),1)):i("",!0),s(e).attr.director&&s(e).attr.year?(o(),l("span",ce,a(p.$t("pages.slug.and")),1)):i("",!0),s(e).attr.year!=""?(o(),l("span",ue,a(p.$t("pages.slug.released"))+" "+a(s(e).attr.year),1)):i("",!0)])):i("",!0),n("span",pe,[de,_(" "+a(p.$t("pages.slug.from")),1)]),n("span",{class:k(["block pb-1 lg:pb-2",`text-trso-${s(e).color}`]),itemprop:"name"},[n("span",be,a(s(e).firstBook.attributes.title),1)],2),s(e).firstBook.attributes.authors?(o(),l("span",ge,[n("span",null,a(p.$t("pages.slug.by"))+" ",1),(o(!0),l(v,null,w(s(e).firstBook.attributes.authors,(y,V)=>(o(),l("span",{key:y.id},[V===Object.keys(s(e).firstBook.attributes.authors).length-1&&s(e).firstBook.attributes.authors.length>1?(o(),l("span",me,a(p.$t("pages.slug.and")),1)):i("",!0),_(" "+a(y)+" ",1),V<Object.keys(s(e).firstBook.attributes.authors).length-2?(o(),l("span",he,", ")):i("",!0)]))),128))])):i("",!0)]),$(j,{title:s(e).langAttr.title,description:s(e).langAttr.plot,quote:"",hashtags:p.$t("pages.slug.hidKeywords")},null,8,["title","description","hashtags"])],2),n("section",ke,[$(q,{book:s(e).firstBook.attributes,type:s(e).attr.type,color:s(e).color},null,8,["book","type","color"])]),s(e).books!=!1&&s(e).books.length?(o(),l("section",fe,[n("h2",{class:k(["text-white font-bold py-2 px-4 text-base sm:text-lg md:text-xl text-center font-serif px-4 mb-2",`bg-trso-${s(e).color}`])},a(p.$t("pages.slug.relatedBooks")),3),n("div",$e,[(o(!0),l(v,null,w(s(e).books,y=>(o(),l("div",{key:y.id,class:"my-2 w-full",id:`bookThumb${y.id}`},[y?(o(),B(D,{key:0,book:y.attributes,color:s(e).color},null,8,["book","color"])):i("",!0)],8,_e))),128))])])):i("",!0),$(M,{itemAttr:s(e).attr,itemLangAttr:s(e).langAttr,bookAttr:s(e).firstBook.attributes},null,8,["itemAttr","itemLangAttr","bookAttr"]),$(L,{bookTitle:s(e).firstBook.attributes.title},null,8,["bookTitle"])])])}}};export{Ce as default};
