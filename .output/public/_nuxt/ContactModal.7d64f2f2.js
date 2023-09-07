import{h as $,b as r,d as u,e,i as R,w as b,j as v,t as m,_ as S,k as V,r as L,f as d,u as a,F as N,l as P,m as A,T as j,p as E,q,s as D,x as G,n as k,y as W,z as J,A as M,B as K,g as C,C as T,D as Q,v as H,E as U,G as X,H as Y}from"./entry.75de67d1.js";import{u as B}from"./composables.66bb790d.js";import{_ as Z}from"./Plus.b5c9cc3f.js";import{u as ee,a as te}from"./fetch.4c86dd2b.js";import{u as oe}from"./useAlgoliaInitIndex.1d0faed5.js";import{_ as se}from"./Modal.fdca032a.js";const ae={},le=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"})],-1),ne=[le];function re(n,l){return r(),u("button",null,ne)}const ce=$(ae,[["render",re]]),ie={__name:"MenuButton",props:{to:String,name:String},setup(n){return(l,_)=>{const t=S;return r(),R(t,{to:n.to,class:"inline-block relative py-1 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition after:ease-out after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left mb-2 lg:mb-0",activeClass:"after:scale-x-100 after:origin-bottom-left"},{default:b(()=>[v(m(n.name),1)]),_:1},8,["to"])}}},ue={},de={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},pe=e("path",{"fill-rule":"evenodd",d:"M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z","clip-rule":"evenodd"},null,-1),me=[pe];function _e(n,l){return r(),u("svg",de,me)}const O=$(ue,[["render",_e]]),fe=""+globalThis.__publicAssetsURL("img/logo_white_resize.png");const he=n=>(E("data-v-17114e33"),n=n(),q(),n),ge={class:"relative w-full bg-trso-blue transition-all duration-500 px-2 md:px-4"},be=he(()=>e("h1",{class:"text-center m-0"},[e("img",{class:"mx-auto lg:mx-0 w-[150px] h-[54px] my-4 lg:my-0",width:"200",height:"72",src:fe,alt:"Tarseroo logo"})],-1)),xe={key:0,class:"lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:flex items-center gap-x-4 max-h-[200px] text-center font-semibold text-sm lg:text-base uppercase text-white"},ve={key:0,class:"text-white"},we={key:1,class:"text-white"},$e={__name:"HeaderNav",props:{searchButtonVisible:Boolean,searchButtonState:Boolean,isLargeScreen:Boolean},setup(n){const{t:l}=V(),_=B(),t=L(!1),o=[{to:_({name:"type-pages-page",params:{type:"movies",page:1}}),name:l("header.movies")},{to:_({name:"type-pages-page",params:{type:"tv-series",page:1}}),name:l("header.series")}];return(s,f)=>{const w=ce,c=S,h=ie,p=O;return r(),u("div",ge,[d(w,{onClick:f[0]||(f[0]=i=>t.value=!a(t)),class:"block lg:hidden group absolute top-8 right-4 text-white h-8 w-8"}),e("nav",null,[d(c,{to:a(_)({name:"index"}),title:s.$t("pages.home.title")},{default:b(()=>[be]),_:1},8,["to","title"]),d(j,{name:"toggle-fade",mode:"out-in"},{default:b(()=>[a(t)||n.isLargeScreen?(r(),u("ul",xe,[(r(),u(N,null,P(o,i=>e("li",{key:i.id},[d(h,{to:i.to,name:i.name},null,8,["to","name"])])),64))])):A("",!0)]),_:1})]),e("button",{class:"block sm:flex items-center gap-x-4 absolute top-6 sm:top-9 lg:top-1/2 lg:-translate-y-1/2 left-4 lg:right-4 lg:left-auto",onClick:f[1]||(f[1]=i=>s.$emit("changeSearchState"))},[d(p,{class:"text-white h-5 w-5"}),n.searchButtonState?(r(),u("span",we,m(s.$t("header.closeSearch")),1)):(r(),u("span",ve,m(s.$t("header.search")),1))])])}}},yt=$($e,[["__scopeId","data-v-17114e33"]]),ye={},ke={width:"77",height:"19","aria-label":"Algolia",role:"img"},Ce=e("path",{d:"M2.5067 0h14.0245c1.384.001 2.5058 1.1205 2.5068 2.5017V16.5c-.0014 1.3808-1.1232 2.4995-2.5068 2.5H2.5067C1.1232 18.9995.0014 17.8808 0 16.5V2.4958A2.495 2.495 0 01.735.7294 2.505 2.505 0 012.5068 0zM37.95 15.0695c-3.7068.0168-3.7068-2.986-3.7068-3.4634L34.2372.3576 36.498 0v11.1794c0 .2715 0 1.9889 1.452 1.994v1.8961zm-9.1666-1.8388c.694 0 1.2086-.0397 1.5678-.1088v-2.2934a5.3639 5.3639 0 00-1.3303-.1679 4.8283 4.8283 0 00-.758.0582 2.2845 2.2845 0 00-.688.2024c-.2029.0979-.371.2362-.4919.4142-.1268.1788-.185.2826-.185.5533 0 .5297.185.8359.5205 1.0375.3355.2016.7928.3053 1.365.3053v-.0008zm-.1969-8.1817c.7463 0 1.3768.092 1.8856.2767.5088.1838.9195.4428 1.2204.7717.3068.334.5147.7777.6423 1.251.1327.4723.196.991.196 1.5603v5.798c-.5235.1036-1.05.192-1.5787.2649-.7048.1037-1.4976.156-2.3774.156-.5832 0-1.1215-.0582-1.6016-.167a3.385 3.385 0 01-1.2432-.5364 2.6034 2.6034 0 01-.8037-.9565c-.191-.3922-.29-.9447-.29-1.5208 0-.5533.11-.905.3246-1.2863a2.7351 2.7351 0 01.8849-.9329c.376-.242.8029-.415 1.2948-.5187a7.4517 7.4517 0 011.5381-.156 7.1162 7.1162 0 011.6667.2024V8.886c0-.259-.0296-.5061-.093-.7372a1.5847 1.5847 0 00-.3245-.6158 1.5079 1.5079 0 00-.6119-.4158 2.6788 2.6788 0 00-.966-.173c-.5206 0-.9948.0634-1.4283.1384a6.5481 6.5481 0 00-1.065.259l-.2712-1.849c.2831-.0986.7048-.1964 1.2491-.2943a9.2979 9.2979 0 011.752-.1501v.0008zm44.6597 8.1193c.6947 0 1.2086-.0405 1.567-.1097v-2.2942a5.3743 5.3743 0 00-1.3303-.1679c-.2485 0-.503.0177-.7573.0582a2.2853 2.2853 0 00-.688.2024 1.2333 1.2333 0 00-.4918.4142c-.1268.1788-.1843.2826-.1843.5533 0 .5297.1843.8359.5198 1.0375.3414.2066.7927.3053 1.365.3053v.0009zm-.191-8.1767c.7463 0 1.3768.0912 1.8856.2759.5087.1847.9195.4436 1.2204.7717.3.329.5147.7786.6414 1.251a5.7248 5.7248 0 01.197 1.562v5.7972c-.3466.0742-.874.1602-1.5788.2648-.7049.1038-1.4976.1552-2.3774.1552-.5832 0-1.1215-.0573-1.6016-.167a3.385 3.385 0 01-1.2432-.5356 2.6034 2.6034 0 01-.8038-.9565c-.191-.3922-.2898-.9447-.2898-1.5216 0-.5533.1098-.905.3245-1.2854a2.7373 2.7373 0 01.8849-.9338c.376-.2412.8029-.4141 1.2947-.5178a7.4545 7.4545 0 012.325-.1097c.2781.0287.5672.081.879.156v-.3686a2.7781 2.7781 0 00-.092-.738 1.5788 1.5788 0 00-.3246-.6166 1.5079 1.5079 0 00-.612-.415 2.6797 2.6797 0 00-.966-.1729c-.5205 0-.9947.0633-1.4282.1384a6.5608 6.5608 0 00-1.065.259l-.2712-1.8498c.283-.0979.7048-.1957 1.2491-.2935a9.8597 9.8597 0 011.752-.1494zm-6.79-1.072c-.7576.001-1.373-.6103-1.3759-1.3664 0-.755.6128-1.3664 1.376-1.3664.764 0 1.3775.6115 1.3775 1.3664s-.6195 1.3664-1.3776 1.3664zm1.1393 11.1507h-2.2726V5.3409l2.2734-.3568v10.0845l-.0008.0017zm-3.984 0c-3.707.0168-3.707-2.986-3.707-3.4642L59.7069.3576 61.9685 0v11.1794c0 .2715 0 1.9889 1.452 1.994V15.0703zm-7.3512-4.979c0-.975-.2138-1.7873-.6305-2.3516-.4167-.571-.9998-.852-1.747-.852-.7454 0-1.3302.281-1.7452.852-.4166.5702-.6195 1.3765-.6195 2.3516 0 .9851.208 1.6473.6254 2.2183.4158.576.9998.8587 1.7461.8587.7454 0 1.3303-.2885 1.747-.8595.4158-.5761.6237-1.2315.6237-2.2184v.0009zm2.3132-.006c0 .7609-.1099 1.3361-.3356 1.9654a4.654 4.654 0 01-.9533 1.6076A4.214 4.214 0 0155.613 14.69c-.579.2412-1.4697.3795-1.9143.3795-.4462-.005-1.3303-.1324-1.9033-.3795a4.307 4.307 0 01-1.474-1.0316c-.4115-.4445-.7293-.9801-.9609-1.6076a5.3423 5.3423 0 01-.3465-1.9653c0-.7608.104-1.493.3356-2.1155a4.683 4.683 0 01.9719-1.5958 4.3383 4.3383 0 011.479-1.0257c.5739-.242 1.2043-.3567 1.8864-.3567.6829 0 1.3125.1197 1.8906.3567a4.1245 4.1245 0 011.4816 1.0257 4.7587 4.7587 0 01.9592 1.5958c.2426.6225.3643 1.3547.3643 2.1155zm-17.0198 0c0 .9448.208 1.9932.6238 2.431.4166.4386.955.6579 1.6142.6579.3584 0 .6998-.0523 1.0176-.1502.3186-.0978.5721-.2134.775-.3517V7.0784a8.8706 8.8706 0 00-1.4926-.1906c-.8206-.0236-1.4452.312-1.8847.8468-.4335.5365-.6533 1.476-.6533 2.3516v-.0008zm6.2863 4.4485c0 1.5385-.3938 2.662-1.1866 3.3773-.791.7136-2.0005 1.0712-3.6308 1.0712-.5958 0-1.834-.1156-2.8228-.334l.3643-1.7865c.8282.173 1.9202.2193 2.4932.2193.9077 0 1.555-.1847 1.943-.5533.388-.3686.578-.916.578-1.643v-.3687a6.8289 6.8289 0 01-.8848.3349c-.3634.1096-.786.167-1.261.167-.6246 0-1.1917-.0979-1.7055-.2944a3.5554 3.5554 0 01-1.3244-.8645c-.3642-.3796-.6541-.8579-.8561-1.4289-.2028-.571-.3068-1.59-.3068-2.339 0-.7034.1099-1.5856.3245-2.1735.2198-.5871.5316-1.0949.9542-1.515.4167-.42.9255-.743 1.5213-.98a5.5923 5.5923 0 012.052-.3855c.7353 0 1.4114.092 2.0707.2024.6592.1088 1.2204.2236 1.6776.35v8.945-.0008zM11.5026 4.2418v-.6511c-.0005-.4553-.3704-.8241-.8266-.8241H8.749c-.4561 0-.826.3688-.8265.824v.669c0 .0742.0693.1264.1445.1096a6.0346 6.0346 0 011.6768-.2362 6.125 6.125 0 011.6202.2185.1116.1116 0 00.1386-.1097zm-5.2806.852l-.3296-.3282a.8266.8266 0 00-1.168 0l-.393.3922a.8199.8199 0 000 1.164l.3237.323c.0524.0515.1268.0397.1733-.0117.191-.259.3989-.507.6305-.7372.2374-.2362.48-.4437.7462-.6335.0575-.0354.0634-.1155.017-.1687zm3.5159 2.069v2.818c0 .081.0879.1392.1622.0987l2.5102-1.2964c.0574-.0287.0752-.0987.0464-.1552a3.1237 3.1237 0 00-2.603-1.574c-.0575 0-.115.0456-.115.1097l-.0008-.0009zm.0008 6.789c-2.0933.0005-3.7915-1.6912-3.7947-3.7804C5.9468 8.0821 7.6452 6.39 9.7387 6.391c2.0932-.0005 3.7911 1.6914 3.794 3.7804a3.7783 3.7783 0 01-1.1124 2.675 3.7936 3.7936 0 01-2.6824 1.1054h.0008zM9.738 4.8002c-1.9218 0-3.6975 1.0232-4.6584 2.6841a5.359 5.359 0 000 5.3683c.9609 1.661 2.7366 2.6841 4.6584 2.6841a5.3891 5.3891 0 003.8073-1.5725 5.3675 5.3675 0 001.578-3.7987 5.3574 5.3574 0 00-1.5771-3.797A5.379 5.379 0 009.7387 4.801l-.0008-.0008z",fill:"currentColor","fill-rule":"evenodd"},null,-1),Se=[Ce];function ze(n,l){return r(),u("svg",ke,Se)}const Me=$(ye,[["render",ze]]),Le={class:"flex flex-wrap justify-center items-center gap-4 isolate"},Be={__name:"Tags",async setup(n){let l,_;const t=D(),{locale:o,t:s}=V(),f=B(),w="fields[0]=type",c=`filters[item_lang][locale][$eq]=${o.value}&filters[item_lang][isTag][$eq]=true`,p=`${w}&${c}&populate[item_lang][fields][0]=title&populate[item_lang][fields][1]=slug`,i=`${t.public.API_BASE_URL}items?${p}`,{data:z}=([l,_]=G(()=>ee(i,"$4hSNFEsF9b")),l=await l,_(),l);return(y,F)=>{const I=S;return r(),u("ul",Le,[(r(!0),u(N,null,P(a(z).data,x=>(r(),u("li",{key:x.id,class:k(["grow-1 relative px-2 lg:px-4 py-1 lg:py-2 text-white before:content-[''] before:absolute after:top-4 before:left-0 before:-z-10 before:inset-0 hover:before:scale-x-110 hover:before:scale-y-125 hover:before:opacity-0 before:origin-center before:transition-all before:duration-500",x.attributes.type==="series"?"bg-trso-yellow before:bg-trso-yellow":"bg-trso-blue before:bg-trso-blue"])},[d(I,{to:a(f)({name:"type-id-slug",params:{type:x.attributes.type==="series"?"tv-series":"movies",id:x.id,slug:x.attributes.item_lang.data.attributes.slug}}),title:x.attributes.item_lang.data.attributes.title,class:"font-medium text-sm lg:text-base"},{default:b(()=>[v(m(x.attributes.item_lang.data.attributes.title),1)]),_:2},1032,["to","title"])],2))),128))])}}};async function Ie({query:n,requestOptions:l,indexName:_}){const t=D(),o=_||t.algolia.globalIndex;if(!o)throw new Error("`[@nuxtjs/algolia]` Cannot search in Algolia without `indexName`");const s=oe(o);return await te(`${o}-async-search-result`,async()=>await s.search(n,l))}const Ae=n=>(E("data-v-f07dfa2a"),n=n(),q(),n),Te={id:"search",class:"bg-trso-blue border-b-2 border-trso-blue z-10 max-h-[700px] px-4 lg:px-0 relative py-8 shadow-sub"},Ve={class:"container"},Ne={class:"flex flex-row items-center relative max-w-lg mx-auto gap-x-2 mb-4"},Pe={class:"absolute inset-y-0 left-0 pl-3 flex items-center"},je=["placeholder"],Fe=Ae(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1)),Re=[Fe],Ee={key:0},qe={class:"text-white h-4 w-4"},De={class:"algolia-logo px-2 py-4 flex flex-row justify-center items-center gap-x-2"},He={key:1,class:"absolute z-20 bg-white w-full left-0 mt-8"},Ue={class:"block px-4 lg:px-8 py-2"},Oe={__name:"Search",setup(n){const{locale:l}=V(),_=W();J();const t=B(),o=L(""),s=L(!1),f=M({hits:[]});K(_,()=>{h()});function w(){s.value||h()}async function c(){if(o.value.length>=3){const{data:p}=await Ie({indexName:"movies",query:String(o.value),requestOptions:{hitsPerPage:8,page:0}});f.hits=p.value.hits}}function h(){o.value="",f.hits=[]}return(p,i)=>{const z=O,y=S,F=Z,I=Me,x=Be;return r(),u("div",Te,[e("div",Ve,[e("div",Ne,[e("span",Pe,[d(z,{class:"text-trso-blue h-4 w-4"})]),C(e("input",{"onUpdate:modelValue":i[0]||(i[0]=g=>Q(o)?o.value=g:null),class:"pl-8 py-2 block w-full border shadow-sm focus:border-trso-blue outline-0 ring-0 placeholder:text-trso-blue placeholder:italic",type:"text",placeholder:`${p.$t("components.search.placeholder")}`,onBlur:i[1]||(i[1]=g=>w()),onInput:i[2]||(i[2]=g=>c())},null,40,je),[[T,a(o)]]),d(y,{to:a(t)({name:"search-search",params:{search:a(o)}}),disabled:a(o).length<3,onMouseover:i[3]||(i[3]=g=>s.value=!0),onMouseleave:i[4]||(i[4]=g=>s.value=!1),class:"transition-colors duration-500 bg-trso-yellow hover:bg-trso-yellow2 disabled:bg-trso-yellow2 hover:disabled:bg-trso-yellow-trso2 border border-trso-yellow py-2 px-2 cursor-pointer"},{default:b(()=>[d(z,{class:"text-white h-5 w-5"})]),_:1},8,["to","disabled"]),e("button",{onClick:h,class:"block absolute cursor-pointer top-[10px] right-[60px] rounded bg-trso-blue text-white"},Re)]),d(j,null,{default:b(()=>[C(e("div",null,[a(f).hits.length?(r(),u("ul",{key:0,id:"searchResults",onMouseover:i[5]||(i[5]=g=>s.value=!0),onMouseleave:i[6]||(i[6]=g=>s.value=!1),class:"absolute left-1/2 -translate-x-1/2 z-50 w-full lg:max-w-4xl max-h-[70vh] overflow-y-auto bg-white drop-shadow-lg scrollbar scrollbar-thumb-trso-blue scrollbar-track-trso-blue2"},[(r(!0),u(N,null,P(a(f).hits,g=>(r(),u("li",{key:g.id},[d(y,{to:a(t)({name:"type-id-slug",params:{type:g.type==="series"?"tv-series":"movies",id:g.objectID,slug:`${g["slug_"+a(l)]}`}}),class:"block w-full px-4 lg:px-8 py-2 lg:py-4 text-center lg:text-left text-trso-blue hover:text-white text-sm lg:text-base transition-colors duration-500 bg-white hover:bg-trso-blue"},{default:b(()=>[v(m(g["title_"+a(l)])+" ",1),g.director.length?(r(),u("span",Ee,"("+m(g.director)+")",1)):A("",!0)]),_:2},1032,["to"])]))),128)),e("li",null,[a(o).length>=3?(r(),R(y,{key:0,to:a(t)({name:"search-search",params:{search:a(o)}}),class:"flex items-center justify-center lg:justify-start gap-x-2 w-full px-4 lg:px-8 py-2 lg:py-4 bg-trso-blue text-white uppercase"},{default:b(()=>[e("i",qe,[d(F)]),e("span",null,m(p.$t("components.search.more")),1)]),_:1},8,["to"])):A("",!0)]),e("li",De,[d(y,{to:"https://www.algolia.com/",class:"flex items-center gap-x-2"},{default:b(()=>[e("span",null,m(p.$t("components.search.madeWith")),1),d(I)]),_:1})])],32)):(r(),u("div",He,[e("span",Ue,m(p.$t("components.search.empty")),1)]))],512),[[H,a(f).hits.length]])]),_:1}),d(x)])])}}},kt=$(Oe,[["__scopeId","data-v-f07dfa2a"]]),Ge={class:"fixed left-0 bottom-0 w-full z-50 bg-trso-yellow bg-opacity-80"},We={class:"py-4 text-white text-center max-w-7xl mx-auto"},Je={class:"flex justify-center items-center gap-x-4 font-semibold"},Ct={__name:"Footer",setup(n){const l=B(),_=U("contactModalState",()=>!1);return(t,o)=>{const s=S;return r(),u("footer",Ge,[e("nav",We,[e("ul",Je,[e("li",null,[d(s,{to:a(l)({name:"index"})},{default:b(()=>[v("Tarseroo.com ©2023")]),_:1},8,["to"])]),e("li",null,[d(s,{to:a(l)({name:"privacy-policy"}),title:t.$t("footer.privacy")},{default:b(()=>[v(m(t.$t("footer.privacy")),1)]),_:1},8,["to","title"])]),e("li",null,[e("button",{onClick:o[0]||(o[0]=f=>_.value=!0)},m(t.$t("components.formsContact.title")),1)])])])])}}},Ke={},Qe={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},Xe=e("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z","clip-rule":"evenodd"},null,-1),Ye=[Xe];function Ze(n,l){return r(),u("svg",Qe,Ye)}const et=$(Ke,[["render",Ze]]),St={__name:"ToTop",setup(n){function l(){window.scroll({top:20,behavior:"smooth"})}return(_,t)=>{const o=et;return r(),u("button",{class:"block fixed z-70 right-0 bottom-0 mb-14 mr-[12px] lg:mr-[24px] cursor-pointer",onClick:t[0]||(t[0]=s=>l())},[d(o,{class:"w-10 h-10 lg:w-14 lg:h-14 text-trso-blue"})])}}},tt={class:"block px-6 mb-4 text-center text-trso-blue font-title font-semibold text-2xl uppercase"},ot={class:"p-6"},st={class:"block mb-6"},at={class:"block text-trso-blue"},lt=e("span",null,"*",-1),nt=["placeholder"],rt={class:"block mb-6"},ct={class:"block text-trso-blue"},it=e("span",null,"*",-1),ut=["placeholder"],dt={class:"mb-6"},pt=["disabled","value"],mt={class:"text-trso-blue"},_t=e("span",{class:"text-sm"},"*",-1),ft={__name:"ContactForm",setup(n){const{$validateEmail:l}=X(),_=L(null),t=M({email:"",message:""}),o=M({email:!1,message:!1}),s=M({success:!1,error:!1,button:!1}),f=()=>{let c=!0;return o.message=!1,o.email=!1,t.message.length<5&&(o.message=!0,c=!1),l(t.email)||(o.email=!0,c=!1),c};async function w(){if(s.success=!1,s.error=!1,f()){s.button=!1;const h={"form-name":"contact",email:t.email,message:t.message};fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(h).toString()}).then(p=>p.json()).then(p=>{s.success=!0,s.button=!0}).catch(p=>{console.log(p),s.error=!0,s.button=!0})}}return(c,h)=>(r(),u("div",null,[e("span",tt,m(c.$t("components.formsContact.title")),1),e("span",{class:k(["text-green-400",a(s).success?"block px-6":"hidden"])},m(c.$t("components.formsContact.success")),3),e("span",{class:k(["text-red-400",a(s).error?"block px-6":"hidden"])},m(c.$t("components.formsContact.error")),3),e("form",{name:"contact",method:"POST","data-netlify":"true",ref_key:"contactForm",ref:_},[e("div",ot,[e("label",st,[e("span",at,[v(m(c.$t("components.formsContact.email")),1),lt]),e("span",{class:k(["text-red-700 text-sm",a(o).email?"block":"hidden"])},m(c.$t("components.formsContact.emailError")),3),C(e("input",{name:"email",type:"email","onUpdate:modelValue":h[0]||(h[0]=p=>a(t).email=p),class:"block w-full mt-1 p-2 border border-trso-blue2 focus:border-trso-blue shadow-sm focus:outline-none focus:ring focus:ring-trso-blue focus:ring-opacity-50 placeholder:text-trso-blue placeholder:italic placeholder:text-sm",placeholder:c.$t("components.formsContact.emailPlaceholder"),required:""},null,8,nt),[[T,a(t).email]])]),e("label",rt,[e("span",ct,[v(m(c.$t("components.formsContact.message")),1),it]),e("span",{class:k(["text-red-700 text-sm",a(o).message?"block":"hidden"])},m(c.$t("components.formsContact.messageError")),3),C(e("textarea",{name:"message","onUpdate:modelValue":h[1]||(h[1]=p=>a(t).message=p),class:"block w-full mt-1 p-2 border border-trso-blue2 focus:border-trso-blue shadow-sm focus:outline-none focus:ring focus:ring-trso-blue focus:ring-opacity-50 placeholder:text-trso-blue placeholder:italic",rows:"4",placeholder:c.$t("components.formsContact.messagePlaceholder")},null,8,ut),[[T,a(t).message]])]),e("div",dt,[e("input",{onClick:h[2]||(h[2]=Y(p=>w(),["prevent"])),type:"submit",disabled:a(s).button,value:c.$t("components.formsContact.send"),class:"w-full flex flex-wrap items-center justify-center px-4 py-2 text-xl uppercase text-white shadow cursor-pointer transition-colors duration-500 bg-trso-blue hover:bg-trso-blue2"},null,8,pt)]),e("p",mt,[_t,v(m(c.$t("components.formsContact.required")),1)])])],512)]))}};const ht={__name:"ContactModal",setup(n){const l=U("contactModalState");return(_,t)=>{const o=ft,s=se;return r(),u("div",null,[d(j,{name:"fade"},{default:b(()=>[C(d(s,{onCloseModal:t[0]||(t[0]=f=>l.value=!1)},{default:b(()=>[d(o)]),_:1},512),[[H,a(l)]])]),_:1})])}}},zt=$(ht,[["__scopeId","data-v-e2f98f4d"]]);export{yt as _,kt as a,Ct as b,St as c,zt as d};
