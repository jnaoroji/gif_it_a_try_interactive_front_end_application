(this.__LOADABLE_LOADED_CHUNKS__=this.__LOADABLE_LOADED_CHUNKS__||[]).push([[732],{17078:(e,t,n)=>{"use strict";n.d(t,{Z:()=>$});const r="iHeart",o="@iHeartRadio",i=290638154,a="com.clearchannel.iheartradio.controller";var s=n(96719),l=n.n(s),p=n(62440),c=n(93660),d=n(51121);const m=(e,t)=>{const n=t||p.mT,r=(0,d.parse)(n);return r.host?r.protocol?n:`https:${n}`:(0,c.zt)(e,n)},u=({deeplink:e,image:t,noAltLink:n,pagePath:o,siteUrl:i})=>{const a=m(i,t),s=(0,c.zt)(i,l()),p=(0,c.zt)(i,o);return[...n||!e?[]:[{href:`android-app://com.clearchannel.iheartradio.controller/ihr/${e}`,rel:"alternate"},{href:`ios-app://290638154/ihr/${e}`,rel:"alternate"}],{href:s,rel:"search",title:r,type:"application/opensearchdescription+xml"},{href:"https://plus.google.com/+iHeartRadio",rel:"author"},{href:"https://plus.google.com/+iHeartRadio",rel:"publisher"},{href:p,rel:"canonical"},{href:a,rel:"image_src"}]};var g=n(94263);const h=e=>{var t;const{image:n=p.mT,description:s,metaDescription:l,legacyDeeplink:d,siteUrl:u,fbAppId:h,fbPages:y,pagePath:w,socialTitle:f,twitterCard:v="summary",title:b,ogType:k,translate:Z,omitTitleEnding:$}=e,T=m(u,n),_=(0,c.zt)(u,w),S=d?`ihr://${d}`:"",A=(0,g.c)(Z),R=$?"":`| ${(0,c.YY)(Z,"iHeart")}`,H=null===s?null:null!=(t=null==s?void 0:s.replace(/"/g,"'"))?t:"";return[{content:null===H?null:l||H||A,name:"description"},{content:h,property:"fb:app_id"},{content:y,property:"fb:pages"},...k?[{content:k,property:"og:type"}]:[],{content:T,name:"thumbnail"},{content:T,name:"twitter:image"},{content:T,property:"og:image"},...H?[{content:H,itemprop:"description"},{content:H,property:"og:description"},{content:H,name:"twitter:description"}]:[],{content:_,property:"og:url"},{content:_,name:"twitter:url"},{content:r,property:"og:site_name"},{content:r,name:"twitter:app:name:iphone"},{content:r,name:"twitter:app:name:ipad"},{content:r,name:"twitter:app:name:googleplay"},{content:r,name:"al:android:app_name"},{content:r,name:"al:ios:app_name"},{content:o,name:"twitter:creator"},{content:o,name:"twitter:site"},{content:v,name:"twitter:card"},{content:"iheart.com",name:"twitter:domain"},{content:i,name:"twitter:app:id:iphone"},{content:i,name:"twitter:app:id:ipad"},{content:i,name:"al:ios:app_store_id"},{content:a,name:"twitter:app:id:googleplay"},{content:a,name:"al:android:package"},{content:`${b} ${R}`,itemprop:"name"},{content:`${f||b} ${R}`,property:"og:title"},{content:`${f||b} ${R}`,name:"twitter:title"},...S?[{content:S,name:"twitter:app:url:iphone"},{content:S,name:"twitter:app:url:ipad"},{content:S,name:"twitter:app:url:googleplay"},{content:S,property:"al:android:url"},{content:S,property:"al:ios:url"}]:[]]};var y=n(8743),w=n(31343),f=n(50521),v=n(9133),b=n(12771),k=n(65506),Z=n(1268);const $=({deeplink:e="",description:t,image:n,legacyDeeplink:r,noAltLink:o,ogType:i,omitTitleEnding:a,metaDescription:s,socialTitle:l,title:p,twitterCard:c="summary"})=>{const d=(0,k.useSelector)(f.iJ),m=(0,k.useSelector)(f.hK),g=(0,k.useSelector)(w.Jz),$=(0,k.useSelector)(v.$2),T=(0,y.Z)();return(0,Z.tZ)(b.q,{link:u({deeplink:e,image:n,noAltLink:o,pagePath:g,siteUrl:$}),meta:h({description:t,fbAppId:d,fbPages:m,image:n,legacyDeeplink:r,metaDescription:s,ogType:i,omitTitleEnding:a,pagePath:g,siteUrl:$,socialTitle:l,title:p,translate:T,twitterCard:c}),title:p})}},25303:(e,t,n)=>{"use strict";n.d(t,{A:()=>p,R:()=>c});var r=n(92787);const o=(0,r.Z)("ul",{target:"e1rgz1y60"})({name:"qatg1p",styles:"list-style:none;margin:0;margin-top:1.5rem;padding:0;vertical-align:middle;width:100%"});var i=n(61312);const a=(0,r.Z)(i.Z,{target:"e19glopt0"})((({theme:e})=>({".type-label":{color:e.colors.red.primary,fontSize:"1.4rem",letterSpacing:"0.1rem",lineHeight:"1.755rem",textTransform:"uppercase"}})),"");var s=n(1268),l=n(96832);const p=function({heading:e,sectionUrl:t,children:n}){return l.Children.count(n)?(0,s.tZ)(a,{dataTest:"section-news",header:e,url:t,children:(0,s.tZ)(o,{"data-test":"latest-news-list",children:n})}):null},c=n(94879).ZP},34228:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(24955),o=n(8743),i=n(96832),a=n(1268);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}const l=function({"data-test":e,children:t,className:n,lines:l=1,onToggle:p,shouldExpand:c=!1,shouldExpandColor:d="dark"}){var m,u;const[g,h]=(0,i.useState)(!1),[y,w]=(0,i.useState)(!1),f=(0,i.useRef)(null),v=(0,i.useRef)(null),b=(0,o.Z)();return(0,i.useEffect)((()=>{const{current:e}=v,{current:t}=f;e&&t&&c&&h(e.offsetHeight<t.offsetHeight)}),[l,c,t]),(0,a.BX)(a.HY,{children:[(0,a.tZ)("p",{className:n,css:(0,r.iv)(s({margin:0,wordBreak:"break-word"},y?{}:{display:"-webkit-box",WebkitBoxOrient:"vertical",boxOrient:"vertical",WebkitLineClamp:l,overflow:"hidden"}),"",""),"data-test":null!=e?e:"truncate-paragraph",ref:v,children:(0,a.tZ)("span",{"data-test":"truncate-span",ref:f,title:null!=(m=null==(u=f.current)?void 0:u.textContent)?m:"",children:t})}),g&&(0,a.tZ)("button",{css:e=>({animation:`${e.keyframes.fadeIn} 300ms ease forwards`,backgroundColor:e.colors.transparent.primary,border:0,color:"dark"===d?e.colors.black.dark:e.colors.white.primary,cursor:"pointer",fontSize:e.fonts.size[14],fontWeight:e.fonts.weight.bold,margin:0,opacity:0,padding:0}),"data-test":"truncate-button",onClick:function(){w((e=>!e)),null==p||p()},type:"button",children:b(y?"Show Less":"Show More")})]})}},94263:(e,t,n)=>{"use strict";function r(e,t=!0,n=!0){return e(t&&n?"All your favorite music, podcasts, and radio stations available for free. Listen to thousands of live radio stations or create your own artist stations and playlists. Get the latest music and trending news, from your favorite artists and bands.":t?"Stream thousands of the best live radio stations and custom artist stations for FREE - all in one app.":n?"Stream thousands of the best live radio stations for FREE, plus unlimited music on demand - all in one app.":"Stream thousands of the best live radio stations for FREE - all in one app.")}n.d(t,{c:()=>r})},5721:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var r=n(17078),o=n(49942),i=n(45975),a=n(8743),s=n(47246),l=n(26985),p=n(12771),c=n(25303),d=n(51121),m=n(67657),u=n(1268);const g=function({articles:e,contentLink:t,name:n,id:g,siteUrl:h,path:y}){const w=(0,a.Z)(),f=(0,d.resolve)(h,y),v=w("{name}, News, Music, Headlines, iHeartRadio, iHeart, Radio",{name:n}),b=w("Latest {name} news from iHeart",{name:n}),k=(0,l.Yy)(g,n),Z={seedId:g,seedType:m.bV.ARTIST,supportsConnect:!1,url:k};return(0,u.BX)(u.HY,{children:[(0,u.tZ)(o.Z,{seedId:g,seedType:"artist"}),(0,u.tZ)(r.Z,{deeplink:`goto/artist/${g}`,description:b,image:(0,l.Jo)(g,m.bV.ARTIST),legacyDeeplink:`play/artist/${g}`,ogType:"music.radio_station",title:w("Read the latest News on {name} Online",{name:n}),twitterCard:"player"}),(0,u.tZ)(p.q,{meta:[{content:v,name:"keywords"},{content:"300",key:"twitter:player:width",name:"twitter:player:width"},{content:"400",key:"twitter:player:height",name:"twitter:player:height"},{content:`${f}?${(0,s.yP)("tw")}`,key:"twitter:player",name:"twitter:player"},{content:`${f}?${(0,s.yP)("fb")}`,key:"og:video:url",property:"og:video:url"},{content:`${f}?${(0,s.yP)("fb")}`,key:"og:video:secure_url",property:"og:video:secure_url"},{content:"text/html",key:"og:video:type",property:"og:video:type"},{content:"300",key:"og:video:width",property:"og:video:width"},{content:"400",key:"og:video:height",property:"og:video:height"},{content:"audio/vnd.facebook.bridge",property:"og:audio:type"},{content:f,property:"og:audio"}]}),(0,u.tZ)(i.ZP,{backLink:k,dataTest:i.n3.ArtistNews,richResultsMarkup:{name:n,id:g,description:b,keywords:v,url:f,seedType:m.bV.ARTIST},social:Z,title:n,children:(0,u.tZ)(c.A,{heading:`${n} News`,children:e.map((e=>(0,u.tZ)(c.R,{href:`${t}${e.slug}/`,img:`${e["@img"]}?ops=${encodeURIComponent("fit(770,435)")}`,isSponsored:e.is_sponsored,title:e.title},e.title)))})})]})}},61490:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var r=n(17078),o=n(49942),i=n(45975),a=n(92787),s=n(69972);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const p=(0,a.Z)("h1",{target:"ewik6sv0"})((({theme:e})=>l({display:"inline-block",fontSize:"1.6rem",fontWeight:"bold",lineHeight:"2.97rem",paddingBottom:"1rem"},e.mixins.ellipsis,{verticalAlign:"middle",zoom:1,[(0,s.Z)(e.mediaQueries.min.width[768])]:{fontSize:"2rem"}})),"");var c=n(8743),d=n(47246),m=n(29573),u=n(26985),g=n(12771),h=n(25303),y=n(51121),w=n(67657),f=n(1268);function v({articles:e,contentLink:t,name:n,id:a,slug:s,siteUrl:l,path:v}){const b=(0,c.Z)(),k=(0,y.resolve)(l,v),Z=b("{name}, Blog, News, Music, Headlines, iHeartRadio, iHeart, Radio",{name:n}),$=b("{name} Blog, News & Videos",{name:n}),T=b("Go behind the scenes, get exclusive stories and learn more about the show!"),_=(0,m.uu)(a,s),S={seedId:a,seedType:w.bV.PODCAST,supportsConnect:!1,url:_};return(0,f.BX)(f.HY,{children:[(0,f.tZ)(o.Z,{seedId:a,seedType:w.bV.PODCAST}),(0,f.tZ)(r.Z,{description:T,image:(0,u.Jo)(a,"show"),ogType:"website",title:$,twitterCard:"player"}),(0,f.tZ)(g.q,{meta:[{content:Z,name:"keywords"},{content:"300",key:"twitter:player:width",name:"twitter:player:width"},{content:"400",key:"twitter:player:height",name:"twitter:player:height"},{content:`${k}?${(0,d.yP)("tw")}`,key:"twitter:player",name:"twitter:player"},{content:`${k}?${(0,d.yP)("fb")}`,key:"og:video:url",property:"og:video:url"},{content:`${k}?${(0,d.yP)("fb")}`,key:"og:video:secure_url",property:"og:video:secure_url"},{content:"text/html",key:"og:video:type",property:"og:video:type"},{content:"300",key:"og:video:width",property:"og:video:width"},{content:"400",key:"og:video:height",property:"og:video:height"},{content:"audio/vnd.facebook.bridge",property:"og:audio:type"},{content:k,property:"og:audio"}]}),(0,f.tZ)(i.ZP,{backLink:_,dataTest:i.n3.PodcastNews,social:S,title:n,children:(0,f.tZ)(h.A,{heading:(0,f.BX)(p,{children:[n," News"]}),children:e.map((e=>(0,f.tZ)(h.R,{href:`${t}${e.slug}/`,img:`${e.summary.image}?ops=${encodeURIComponent("fit(770,435)")}`,isSponsored:e.payload.is_sponsored,title:e.summary.title},e.slug)))})})]})}},96719:e=>{e.exports="/v8.41.1/15fc332/bundles/opensearch.xml"}}]);
//# sourceMappingURL=News.www.js.map