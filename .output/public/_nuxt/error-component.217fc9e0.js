import{_ as z,o as i,c as d,a as e,b as E,w as b,d as $,t as f,e as M,u as j,r as w,f as n,g as t,F as R,h as F,i as A,T as B,p as q,j as D,k as U,l as K,n as S,m as O,q as Q,s as V,v as X,x as C,y as P,z as Z,A as N,B as H,C as ee,D as Y,E as te,G as se,H as oe,I as ae}from"./entry.81b5caec.js";import{u as le,a as T}from"./composables.088879c1.js";import{_ as ne}from"./Plus.4300c29b.js";import{u as re,a as ce}from"./fetch.59b14b5f.js";import{u as ie}from"./useAlgoliaInitIndex.23b0493a.js";import{_ as ue}from"./ArrowRight.56ef0595.js";const de={},pe={class:"visible lg:hidden group absolute top-1/2 -translate-y-1/2 right-4 text-white"},me=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-8 h-8"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"})],-1),_e=[me];function fe(r,l){return i(),d("button",pe,_e)}const he=z(de,[["render",fe]]),ge={__name:"MenuButton",props:{to:String,name:String},setup(r){return(l,p)=>{const s=M;return i(),E(s,{to:r.to,class:"inline-block relative py-1 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition after:ease-out after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left mb-2 lg:mb-0",activeClass:"after:scale-x-100 after:origin-bottom-left"},{default:b(()=>[$(f(r.name),1)]),_:1},8,["to"])}}},be={},xe={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},ve=e("path",{"fill-rule":"evenodd",d:"M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z","clip-rule":"evenodd"},null,-1),we=[ve];function $e(r,l){return i(),d("svg",xe,we)}const G=z(be,[["render",$e]]),ye=""+globalThis.__publicAssetsURL("img/logo_white_resize.png");const ke=r=>(q("data-v-07a59208"),r=r(),D(),r),Se={class:"relative w-full bg-trso-blue"},Ce={class:"lg:flex items-center max-w-7xl mx-auto transition-[padding] ease-in-out delay-200",id:"mainMenu"},ze=ke(()=>e("h1",{class:"text-center"},[e("img",{class:"mx-auto lg:mx-0 w-[150px] h-[54px] mb-4 lg:mb-0",width:"200",height:"72",src:ye,alt:"Tarseroo logo"})],-1)),Le={key:0,class:"max-h-[200px] lg:max-h-auto lg:flex items-center gap-x-4 text-center font-semibold text-sm lg:text-base uppercase text-white"},Me={key:0,class:"text-white"},Be={key:1,class:"text-white"},Te={__name:"HeaderNav",props:{searchButtonVisible:Boolean,searchButtonState:Boolean,isLargeScreen:Boolean},setup(r){le();const{t:l}=j(),p=T(),s=w(!1),o=[{to:p({name:"type-pages-page",params:{type:"movies",page:1}}),name:l("header.movies")},{to:p({name:"type-pages-page",params:{type:"tv-series",page:1}}),name:l("header.series")}];return(a,m)=>{const v=he,u=M,h=ge,_=G;return i(),d("div",Se,[n(v,{onClick:m[0]||(m[0]=c=>s.value=!t(s))}),e("nav",Ce,[n(u,{to:t(p)({name:"index"}),title:a.$t("pages.home.title"),class:"lg:pr-8"},{default:b(()=>[ze]),_:1},8,["to","title"]),n(B,{name:"toggle-fade",mode:"out-in"},{default:b(()=>[t(s)||r.isLargeScreen?(i(),d("ul",Le,[(i(),d(R,null,F(o,c=>e("li",{key:c.id},[n(h,{to:c.to,name:c.name},null,8,["to","name"])])),64))])):A("",!0)]),_:1}),r.searchButtonVisible?(i(),d("button",{key:0,class:"absolute lg:relative top-1/2 lg:top-0 -translate-y-1/2 lg:translate-y-0 left-4 lg:left-0 lg:flex items-center gap-x-2 lg:ml-auto",onClick:m[1]||(m[1]=c=>a.$emit("changeSearchState"))},[n(_,{class:"text-white h-5 w-5 mx-auto lg:mx-0"}),r.searchButtonState?(i(),d("span",Be,f(a.$t("header.closeSearch")),1)):(i(),d("span",Me,f(a.$t("header.search")),1))])):A("",!0)])])}}},Ie=z(Te,[["__scopeId","data-v-07a59208"]]),Ve={},Ae={width:"77",height:"19","aria-label":"Algolia",role:"img"},Ne=e("path",{d:"M2.5067 0h14.0245c1.384.001 2.5058 1.1205 2.5068 2.5017V16.5c-.0014 1.3808-1.1232 2.4995-2.5068 2.5H2.5067C1.1232 18.9995.0014 17.8808 0 16.5V2.4958A2.495 2.495 0 01.735.7294 2.505 2.505 0 012.5068 0zM37.95 15.0695c-3.7068.0168-3.7068-2.986-3.7068-3.4634L34.2372.3576 36.498 0v11.1794c0 .2715 0 1.9889 1.452 1.994v1.8961zm-9.1666-1.8388c.694 0 1.2086-.0397 1.5678-.1088v-2.2934a5.3639 5.3639 0 00-1.3303-.1679 4.8283 4.8283 0 00-.758.0582 2.2845 2.2845 0 00-.688.2024c-.2029.0979-.371.2362-.4919.4142-.1268.1788-.185.2826-.185.5533 0 .5297.185.8359.5205 1.0375.3355.2016.7928.3053 1.365.3053v-.0008zm-.1969-8.1817c.7463 0 1.3768.092 1.8856.2767.5088.1838.9195.4428 1.2204.7717.3068.334.5147.7777.6423 1.251.1327.4723.196.991.196 1.5603v5.798c-.5235.1036-1.05.192-1.5787.2649-.7048.1037-1.4976.156-2.3774.156-.5832 0-1.1215-.0582-1.6016-.167a3.385 3.385 0 01-1.2432-.5364 2.6034 2.6034 0 01-.8037-.9565c-.191-.3922-.29-.9447-.29-1.5208 0-.5533.11-.905.3246-1.2863a2.7351 2.7351 0 01.8849-.9329c.376-.242.8029-.415 1.2948-.5187a7.4517 7.4517 0 011.5381-.156 7.1162 7.1162 0 011.6667.2024V8.886c0-.259-.0296-.5061-.093-.7372a1.5847 1.5847 0 00-.3245-.6158 1.5079 1.5079 0 00-.6119-.4158 2.6788 2.6788 0 00-.966-.173c-.5206 0-.9948.0634-1.4283.1384a6.5481 6.5481 0 00-1.065.259l-.2712-1.849c.2831-.0986.7048-.1964 1.2491-.2943a9.2979 9.2979 0 011.752-.1501v.0008zm44.6597 8.1193c.6947 0 1.2086-.0405 1.567-.1097v-2.2942a5.3743 5.3743 0 00-1.3303-.1679c-.2485 0-.503.0177-.7573.0582a2.2853 2.2853 0 00-.688.2024 1.2333 1.2333 0 00-.4918.4142c-.1268.1788-.1843.2826-.1843.5533 0 .5297.1843.8359.5198 1.0375.3414.2066.7927.3053 1.365.3053v.0009zm-.191-8.1767c.7463 0 1.3768.0912 1.8856.2759.5087.1847.9195.4436 1.2204.7717.3.329.5147.7786.6414 1.251a5.7248 5.7248 0 01.197 1.562v5.7972c-.3466.0742-.874.1602-1.5788.2648-.7049.1038-1.4976.1552-2.3774.1552-.5832 0-1.1215-.0573-1.6016-.167a3.385 3.385 0 01-1.2432-.5356 2.6034 2.6034 0 01-.8038-.9565c-.191-.3922-.2898-.9447-.2898-1.5216 0-.5533.1098-.905.3245-1.2854a2.7373 2.7373 0 01.8849-.9338c.376-.2412.8029-.4141 1.2947-.5178a7.4545 7.4545 0 012.325-.1097c.2781.0287.5672.081.879.156v-.3686a2.7781 2.7781 0 00-.092-.738 1.5788 1.5788 0 00-.3246-.6166 1.5079 1.5079 0 00-.612-.415 2.6797 2.6797 0 00-.966-.1729c-.5205 0-.9947.0633-1.4282.1384a6.5608 6.5608 0 00-1.065.259l-.2712-1.8498c.283-.0979.7048-.1957 1.2491-.2935a9.8597 9.8597 0 011.752-.1494zm-6.79-1.072c-.7576.001-1.373-.6103-1.3759-1.3664 0-.755.6128-1.3664 1.376-1.3664.764 0 1.3775.6115 1.3775 1.3664s-.6195 1.3664-1.3776 1.3664zm1.1393 11.1507h-2.2726V5.3409l2.2734-.3568v10.0845l-.0008.0017zm-3.984 0c-3.707.0168-3.707-2.986-3.707-3.4642L59.7069.3576 61.9685 0v11.1794c0 .2715 0 1.9889 1.452 1.994V15.0703zm-7.3512-4.979c0-.975-.2138-1.7873-.6305-2.3516-.4167-.571-.9998-.852-1.747-.852-.7454 0-1.3302.281-1.7452.852-.4166.5702-.6195 1.3765-.6195 2.3516 0 .9851.208 1.6473.6254 2.2183.4158.576.9998.8587 1.7461.8587.7454 0 1.3303-.2885 1.747-.8595.4158-.5761.6237-1.2315.6237-2.2184v.0009zm2.3132-.006c0 .7609-.1099 1.3361-.3356 1.9654a4.654 4.654 0 01-.9533 1.6076A4.214 4.214 0 0155.613 14.69c-.579.2412-1.4697.3795-1.9143.3795-.4462-.005-1.3303-.1324-1.9033-.3795a4.307 4.307 0 01-1.474-1.0316c-.4115-.4445-.7293-.9801-.9609-1.6076a5.3423 5.3423 0 01-.3465-1.9653c0-.7608.104-1.493.3356-2.1155a4.683 4.683 0 01.9719-1.5958 4.3383 4.3383 0 011.479-1.0257c.5739-.242 1.2043-.3567 1.8864-.3567.6829 0 1.3125.1197 1.8906.3567a4.1245 4.1245 0 011.4816 1.0257 4.7587 4.7587 0 01.9592 1.5958c.2426.6225.3643 1.3547.3643 2.1155zm-17.0198 0c0 .9448.208 1.9932.6238 2.431.4166.4386.955.6579 1.6142.6579.3584 0 .6998-.0523 1.0176-.1502.3186-.0978.5721-.2134.775-.3517V7.0784a8.8706 8.8706 0 00-1.4926-.1906c-.8206-.0236-1.4452.312-1.8847.8468-.4335.5365-.6533 1.476-.6533 2.3516v-.0008zm6.2863 4.4485c0 1.5385-.3938 2.662-1.1866 3.3773-.791.7136-2.0005 1.0712-3.6308 1.0712-.5958 0-1.834-.1156-2.8228-.334l.3643-1.7865c.8282.173 1.9202.2193 2.4932.2193.9077 0 1.555-.1847 1.943-.5533.388-.3686.578-.916.578-1.643v-.3687a6.8289 6.8289 0 01-.8848.3349c-.3634.1096-.786.167-1.261.167-.6246 0-1.1917-.0979-1.7055-.2944a3.5554 3.5554 0 01-1.3244-.8645c-.3642-.3796-.6541-.8579-.8561-1.4289-.2028-.571-.3068-1.59-.3068-2.339 0-.7034.1099-1.5856.3245-2.1735.2198-.5871.5316-1.0949.9542-1.515.4167-.42.9255-.743 1.5213-.98a5.5923 5.5923 0 012.052-.3855c.7353 0 1.4114.092 2.0707.2024.6592.1088 1.2204.2236 1.6776.35v8.945-.0008zM11.5026 4.2418v-.6511c-.0005-.4553-.3704-.8241-.8266-.8241H8.749c-.4561 0-.826.3688-.8265.824v.669c0 .0742.0693.1264.1445.1096a6.0346 6.0346 0 011.6768-.2362 6.125 6.125 0 011.6202.2185.1116.1116 0 00.1386-.1097zm-5.2806.852l-.3296-.3282a.8266.8266 0 00-1.168 0l-.393.3922a.8199.8199 0 000 1.164l.3237.323c.0524.0515.1268.0397.1733-.0117.191-.259.3989-.507.6305-.7372.2374-.2362.48-.4437.7462-.6335.0575-.0354.0634-.1155.017-.1687zm3.5159 2.069v2.818c0 .081.0879.1392.1622.0987l2.5102-1.2964c.0574-.0287.0752-.0987.0464-.1552a3.1237 3.1237 0 00-2.603-1.574c-.0575 0-.115.0456-.115.1097l-.0008-.0009zm.0008 6.789c-2.0933.0005-3.7915-1.6912-3.7947-3.7804C5.9468 8.0821 7.6452 6.39 9.7387 6.391c2.0932-.0005 3.7911 1.6914 3.794 3.7804a3.7783 3.7783 0 01-1.1124 2.675 3.7936 3.7936 0 01-2.6824 1.1054h.0008zM9.738 4.8002c-1.9218 0-3.6975 1.0232-4.6584 2.6841a5.359 5.359 0 000 5.3683c.9609 1.661 2.7366 2.6841 4.6584 2.6841a5.3891 5.3891 0 003.8073-1.5725 5.3675 5.3675 0 001.578-3.7987 5.3574 5.3574 0 00-1.5771-3.797A5.379 5.379 0 009.7387 4.801l-.0008-.0008z",fill:"currentColor","fill-rule":"evenodd"},null,-1),Pe=[Ne];function je(r,l){return i(),d("svg",Ae,Pe)}const Re=z(Ve,[["render",je]]),Fe={class:"flex flex-wrap justify-center items-center gap-4"},He={__name:"Tags",async setup(r){let l,p;const s=U(),{locale:o,t:a}=j(),m=T(),v="fields[0]=type",u=`filters[item_lang][locale][$eq]=${o.value}&filters[item_lang][isTag][$eq]=true`,_=`${v}&${u}&populate[item_lang][fields][0]=title&populate[item_lang][fields][1]=slug`,c=`${s.public.API_BASE_URL}items?${_}`,{data:y}=([l,p]=K(()=>re(c,"$4hSNFEsF9b")),l=await l,p(),l);return(k,I)=>{const L=M;return i(),d("ul",Fe,[(i(!0),d(R,null,F(t(y).data,x=>(i(),d("li",{key:x.id,class:S(["grow-1 relative px-2 lg:px-4 py-1 lg:py-2 text-white after:content-[''] after:absolute after:top-0 after:left-0 after:-z-10 after:w-full after:h-full after:rounded after:origin-center after:transition-all after:duration-500 hover:after:scale-110 hover:after:opacity-0",x.attributes.type==="series"?"bg-trso-yellow after:bg-trso-yellow":"bg-trso-blue after:bg-trso-blue"])},[n(L,{to:t(m)({name:"type-id-slug",params:{type:x.attributes.type==="series"?"tv-series":"movies",id:x.id,slug:x.attributes.item_lang.data.attributes.slug}}),title:x.attributes.item_lang.data.attributes.title,class:"font-medium text-sm lg:text-base"},{default:b(()=>[$(f(x.attributes.item_lang.data.attributes.title),1)]),_:2},1032,["to","title"])],2))),128))])}}};async function Ee({query:r,requestOptions:l,indexName:p}){const s=U(),o=p||s.algolia.globalIndex;if(!o)throw new Error("`[@nuxtjs/algolia]` Cannot search in Algolia without `indexName`");const a=ie(o);return await ce(`${o}-async-search-result`,async()=>await a.search(r,l))}const qe=r=>(q("data-v-05e0247e"),r=r(),D(),r),De={id:"search",class:"bg-trso-blue border-b-2 border-trso-blue px-4 lg:px-0 relative py-8 shadow-sub lg:z-10"},Ue={class:"container"},Oe={class:"flex flex-row items-center relative max-w-lg mx-auto gap-x-2 mb-4"},Ye={class:"absolute inset-y-0 left-0 pl-3 flex items-center"},Ge=["placeholder"],We=qe(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1)),Je=[We],Ke={key:0},Qe={class:"text-white h-4 w-4"},Xe={class:"algolia-logo px-2 py-4 flex flex-row justify-center items-center gap-x-2"},Ze={key:1,class:"absolute z-20 bg-white w-full left-0 mt-8"},et={class:"block px-4 lg:px-8 py-2"},tt={__name:"Search",setup(r){const{locale:l}=j(),p=O();Q();const s=T(),o=w(""),a=w(!1),m=V({hits:[]});X(p,()=>{h()});function v(){a.value||h()}async function u(){if(o.value.length>=3){const{data:_}=await Ee({indexName:"movies",query:String(o.value),requestOptions:{hitsPerPage:8,page:0}});m.hits=_.value.hits}}function h(){o.value="",m.hits=[]}return(_,c)=>{const y=G,k=M,I=ne,L=Re,x=He;return i(),d("div",De,[e("div",Ue,[e("div",Oe,[e("span",Ye,[n(y,{class:"text-trso-blue h-4 w-4"})]),C(e("input",{"onUpdate:modelValue":c[0]||(c[0]=g=>Z(o)?o.value=g:null),class:"pl-8 py-2 block w-full border shadow-sm focus:border-trso-blue outline-0 ring-0 placeholder:text-trso-blue placeholder:italic",type:"text",placeholder:`${_.$t("components.search.placeholder")}`,onBlur:c[1]||(c[1]=g=>v()),onInput:c[2]||(c[2]=g=>u())},null,40,Ge),[[P,t(o)]]),n(k,{to:t(s)({name:"search-search",params:{search:t(o)}}),disabled:t(o).length<3,onMouseover:c[3]||(c[3]=g=>a.value=!0),onMouseleave:c[4]||(c[4]=g=>a.value=!1),class:"transition-colors duration-500 bg-trso-yellow hover:bg-trso-yellow2 disabled:bg-trso-yellow2 hover:disabled:bg-trso-yellow-trso2 border border-trso-yellow py-2 px-2 cursor-pointer"},{default:b(()=>[n(y,{class:"text-white h-5 w-5"})]),_:1},8,["to","disabled"]),e("button",{onClick:h,class:"block absolute cursor-pointer top-[10px] right-[60px] rounded bg-trso-blue text-white"},Je)]),n(B,null,{default:b(()=>[C(e("div",null,[t(m).hits.length?(i(),d("ul",{key:0,id:"searchResults",onMouseover:c[5]||(c[5]=g=>a.value=!0),onMouseleave:c[6]||(c[6]=g=>a.value=!1),class:"absolute left-1/2 -translate-x-1/2 z-50 w-full lg:max-w-4xl max-h-[70vh] overflow-y-auto bg-white drop-shadow-lg scrollbar scrollbar-thumb-trso-blue scrollbar-track-trso-blue2"},[(i(!0),d(R,null,F(t(m).hits,g=>(i(),d("li",{key:g.id},[n(k,{to:t(s)({name:"type-id-slug",params:{type:g.type==="series"?"tv-series":"movies",id:g.objectID,slug:`${g["slug_"+t(l)]}`}}),class:"block w-full px-4 lg:px-8 py-2 lg:py-4 text-center lg:text-left text-trso-blue hover:text-white text-sm lg:text-base transition-colors duration-500 bg-white hover:bg-trso-blue"},{default:b(()=>[$(f(g["title_"+t(l)])+" ",1),g.director.length?(i(),d("span",Ke,"("+f(g.director)+")",1)):A("",!0)]),_:2},1032,["to"])]))),128)),e("li",null,[t(o).length>=3?(i(),E(k,{key:0,to:t(s)({name:"search-search",params:{search:t(o)}}),class:"flex items-center justify-center lg:justify-start gap-x-2 w-full px-4 lg:px-8 py-2 lg:py-4 bg-trso-blue text-white uppercase"},{default:b(()=>[e("i",Qe,[n(I)]),e("span",null,f(_.$t("components.search.more")),1)]),_:1},8,["to"])):A("",!0)]),e("li",Xe,[n(k,{to:"https://www.algolia.com/",class:"flex items-center gap-x-2"},{default:b(()=>[e("span",null,f(_.$t("components.search.madeWith")),1),n(L)]),_:1})])],32)):(i(),d("div",Ze,[e("span",et,f(_.$t("components.search.empty")),1)]))],512),[[N,t(m).hits.length]])]),_:1}),n(x)])])}}},st=z(tt,[["__scopeId","data-v-05e0247e"]]),ot={class:"fixed left-0 bottom-0 w-full z-50 bg-trso-yellow bg-opacity-80"},at={class:"py-4 text-white text-center max-w-7xl mx-auto"},lt={class:"flex justify-center items-center gap-x-4 font-semibold"},nt={__name:"Footer",setup(r){const l=T(),p=H("contactModalState",()=>!1);return(s,o)=>{const a=M;return i(),d("footer",ot,[e("nav",at,[e("ul",lt,[e("li",null,[n(a,{to:t(l)({name:"index"})},{default:b(()=>[$("Tarseroo.com ©2023")]),_:1},8,["to"])]),e("li",null,[n(a,{to:t(l)({name:"privacy-policy"}),title:s.$t("footer.privacy")},{default:b(()=>[$(f(s.$t("footer.privacy")),1)]),_:1},8,["to","title"])]),e("li",null,[e("button",{onClick:o[0]||(o[0]=m=>p.value=!0)},f(s.$t("components.formsContact.title")),1)])])])])}}},rt={},ct={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},it=e("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z","clip-rule":"evenodd"},null,-1),ut=[it];function dt(r,l){return i(),d("svg",ct,ut)}const pt=z(rt,[["render",dt]]),mt={__name:"ToTop",setup(r){function l(){window.scroll({top:20,behavior:"smooth"})}return(p,s)=>{const o=pt;return i(),d("button",{class:"block fixed z-70 right-0 bottom-0 mb-14 mr-[12px] lg:mr-[24px] cursor-pointer",onClick:s[0]||(s[0]=a=>l())},[n(o,{class:"w-10 h-10 lg:w-14 lg:h-14 text-trso-blue"})])}}},_t={class:"block px-6 mb-4 text-center text-trso-blue font-serif text-2xl uppercase"},ft={class:"p-6"},ht={class:"block mb-6"},gt={class:"block text-trso-blue"},bt=e("span",null,"*",-1),xt=["placeholder"],vt={class:"block mb-6"},wt={class:"block text-trso-blue"},$t=e("span",null,"*",-1),yt=["placeholder"],kt={class:"mb-6"},St=["disabled","value"],Ct={class:"text-trso-blue"},zt=e("span",{class:"text-sm"},"*",-1),Lt={__name:"ContactForm",setup(r){const{$validateEmail:l}=ee(),p=w(null),s=V({email:"",message:""}),o=V({email:!1,message:!1}),a=V({success:!1,error:!1,button:!1}),m=()=>{let u=!0;return o.message=!1,o.email=!1,s.message.length<5&&(o.message=!0,u=!1),l(s.email)||(o.email=!0,u=!1),u};async function v(){if(a.success=!1,a.error=!1,m()){a.button=!1;const h={"form-name":"contact",email:s.email,message:s.message};fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(h).toString()}).then(_=>_.json()).then(_=>{a.success=!0,a.button=!0}).catch(_=>{console.log(_),a.error=!0,a.button=!0})}}return(u,h)=>(i(),d("div",null,[e("span",_t,f(u.$t("components.formsContact.title")),1),e("span",{class:S(["text-green-400",t(a).success?"block px-6":"hidden"])},f(u.$t("components.formsContact.success")),3),e("span",{class:S(["text-red-400",t(a).error?"block px-6":"hidden"])},f(u.$t("components.formsContact.error")),3),e("form",{name:"contact",method:"POST","data-netlify":"true",ref_key:"contactForm",ref:p},[e("div",ft,[e("label",ht,[e("span",gt,[$(f(u.$t("components.formsContact.email")),1),bt]),e("span",{class:S(["text-red-700 text-sm",t(o).email?"block":"hidden"])},f(u.$t("components.formsContact.emailError")),3),C(e("input",{name:"email",type:"email","onUpdate:modelValue":h[0]||(h[0]=_=>t(s).email=_),class:"block w-full mt-1 p-2 border border-trso-blue2 focus:border-trso-blue shadow-sm focus:outline-none focus:ring focus:ring-trso-blue focus:ring-opacity-50 placeholder:text-trso-blue placeholder:italic placeholder:text-sm",placeholder:u.$t("components.formsContact.emailPlaceholder"),required:""},null,8,xt),[[P,t(s).email]])]),e("label",vt,[e("span",wt,[$(f(u.$t("components.formsContact.message")),1),$t]),e("span",{class:S(["text-red-700 text-sm",t(o).message?"block":"hidden"])},f(u.$t("components.formsContact.messageError")),3),C(e("textarea",{name:"message","onUpdate:modelValue":h[1]||(h[1]=_=>t(s).message=_),class:"block w-full mt-1 p-2 border border-trso-blue2 focus:border-trso-blue shadow-sm focus:outline-none focus:ring focus:ring-trso-blue focus:ring-opacity-50 placeholder:text-trso-blue placeholder:italic",rows:"4",placeholder:u.$t("components.formsContact.messagePlaceholder")},null,8,yt),[[P,t(s).message]])]),e("div",kt,[e("input",{onClick:h[2]||(h[2]=Y(_=>v(),["prevent"])),type:"submit",disabled:t(a).button,value:u.$t("components.formsContact.send"),class:"w-full flex flex-wrap items-center justify-center px-4 py-2 text-xl uppercase text-white shadow cursor-pointer transition-colors duration-500 bg-trso-blue hover:bg-trso-blue2"},null,8,St)]),e("p",Ct,[zt,$(f(u.$t("components.formsContact.required")),1)])])],512)]))}},Mt={class:"overflow-y-auto"},Bt={class:"flex justify-end mr-6"},Tt=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),It=[Tt],Vt=e("div",null,[e("span",{class:"block pb-4 text-2xl font-semibold tracking-tighter leading-none"})],-1),At={__name:"Modal",setup(r){O();const l=H("contactModalState");return(p,s)=>(i(),d("div",{class:"fixed flex justify-center items-center z-50 inset-0 bg-black/75 cursor-pointer",onClick:s[2]||(s[2]=o=>l.value=!1)},[e("div",{class:"modal-content overflow-y-auto bg-white w-11/12 md:w-4/5 lg:w-3/5 px-4 lg:px-8 py-4 lg:py-8 max-h-[80vh] scrollbar scrollbar-thumb-trso-blue scrollbar-track-trso-blue-light",onClick:s[1]||(s[1]=Y(()=>{},["stop"]))},[e("div",Mt,[e("div",Bt,[e("button",{onClick:s[0]||(s[0]=o=>l.value=!1),class:"cursor-pointer text-trso-blue"},It)]),Vt,e("div",null,[te(p.$slots,"default")])])])]))}};const Nt={__name:"ContactModal",setup(r){const l=H("contactModalState");return(p,s)=>{const o=Lt,a=At;return i(),d("div",null,[n(B,{name:"fade"},{default:b(()=>[C(n(a,null,{default:b(()=>[n(o)]),_:1},512),[[N,t(l)]])]),_:1})])}}},Pt=z(Nt,[["__scopeId","data-v-caabc3fe"]]);const jt={class:"container px-2 md:px-4 max-w-6xl mb-16"},Rt={class:"text-3xl mb-16"},Ft={class:"text-lg text-center font-sans text-trso-yellow mb-8"},Ht={class:"text-lg text-center font-sans text-trso-blue mb-8"},Et={__name:"error",setup(r){const l=T(),p=w(null),s=w(null),o=w(!1),a=w(!1),m=w(!1),v=w(!1);se(()=>{window.addEventListener("scroll",u,{passive:!0})}),oe(()=>{window.removeEventListener("scroll",u)});function u(){o.value=window.scrollY>150,window.scrollY>p.value.clientHeight?(a.value=!0,v.value=!0):(a.value=!1,m.value=!1,v.value=!1)}const h=ae(()=>`lg:-top-[${p.value.clientHeight}px] lg:translate-y-[${p.value.clientHeight}px]`);function _(){m.value=!m.value}return(c,y)=>{const k=Ie,I=st,L=ue,x=M,g=nt,W=mt,J=Pt;return i(),d("div",null,[e("header",{class:S(["mb-4 md:mb-8 lg:mb-14",t(a)===!0?`${t(h)} lg:fixed lg:z-50 lg:w-full transform transition duration-500 ease-in-out delay-200`:"top-0"]),ref_key:"header",ref:p},[n(k,{class:S(t(a)===!0?"py-1":"py-1 lg:py-4"),searchButtonState:t(m),searchButtonVisible:t(v),onChangeSearchState:y[0]||(y[0]=qt=>_())},null,8,["class","searchButtonState","searchButtonVisible"]),n(B,{name:"search",mode:"out-in"},{default:b(()=>[C(n(I,{ref_key:"search",ref:s},null,512),[[N,t(a)===!0?t(m):!0]])]),_:1})],2),e("div",jt,[e("p",Rt,f(c.$t("error.message")),1),e("p",Ft,[n(x,{to:t(l)({name:"type-pages-page",params:{type:"tv-series",page:1}}),title:c.$t("header.series"),class:"flex items-center gap-x-2"},{default:b(()=>[e("i",null,[n(L,{class:"h-5 w-5"})]),e("span",null,f(c.$t("error.series")),1)]),_:1},8,["to","title"])]),e("p",Ht,[n(x,{to:t(l)({name:"type-pages-page",params:{type:"movies",page:1}}),title:c.$t("header.series"),class:"flex items-center gap-x-2"},{default:b(()=>[e("i",null,[n(L,{class:"h-5 w-5"})]),e("span",null,f(c.$t("error.movies")),1)]),_:1},8,["to","title"])])]),n(g),n(B,{name:"totop",mode:"out-in"},{default:b(()=>[C(n(W,null,null,512),[[N,t(o)]])]),_:1}),n(J)])}}},Jt=Et;export{Jt as default};
