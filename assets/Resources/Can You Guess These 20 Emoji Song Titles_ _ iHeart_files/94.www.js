(this.__LOADABLE_LOADED_CHUNKS__=this.__LOADABLE_LOADED_CHUNKS__||[]).push([[94],{17078:(t,e,a)=>{"use strict";a.d(e,{Z:()=>v});const n="iHeart",i="@iHeartRadio",r=290638154,o="com.clearchannel.iheartradio.controller";var s=a(96719),l=a.n(s),p=a(62440),c=a(93660),m=a(51121);const d=(t,e)=>{const a=e||p.mT,n=(0,m.parse)(a);return n.host?n.protocol?a:`https:${a}`:(0,c.zt)(t,a)},u=({deeplink:t,image:e,noAltLink:a,pagePath:i,siteUrl:r})=>{const o=d(r,e),s=(0,c.zt)(r,l()),p=(0,c.zt)(r,i);return[...a||!t?[]:[{href:`android-app://com.clearchannel.iheartradio.controller/ihr/${t}`,rel:"alternate"},{href:`ios-app://290638154/ihr/${t}`,rel:"alternate"}],{href:s,rel:"search",title:n,type:"application/opensearchdescription+xml"},{href:"https://plus.google.com/+iHeartRadio",rel:"author"},{href:"https://plus.google.com/+iHeartRadio",rel:"publisher"},{href:p,rel:"canonical"},{href:o,rel:"image_src"}]};var g=a(94263);const h=t=>{var e;const{image:a=p.mT,description:s,metaDescription:l,legacyDeeplink:m,siteUrl:u,fbAppId:h,fbPages:y,pagePath:f,socialTitle:_,twitterCard:w="summary",title:b,ogType:S,translate:k,omitTitleEnding:v}=t,T=d(u,a),Z=(0,c.zt)(u,f),A=m?`ihr://${m}`:"",$=(0,g.c)(k),D=v?"":`| ${(0,c.YY)(k,"iHeart")}`,L=null===s?null:null!=(e=null==s?void 0:s.replace(/"/g,"'"))?e:"";return[{content:null===L?null:l||L||$,name:"description"},{content:h,property:"fb:app_id"},{content:y,property:"fb:pages"},...S?[{content:S,property:"og:type"}]:[],{content:T,name:"thumbnail"},{content:T,name:"twitter:image"},{content:T,property:"og:image"},...L?[{content:L,itemprop:"description"},{content:L,property:"og:description"},{content:L,name:"twitter:description"}]:[],{content:Z,property:"og:url"},{content:Z,name:"twitter:url"},{content:n,property:"og:site_name"},{content:n,name:"twitter:app:name:iphone"},{content:n,name:"twitter:app:name:ipad"},{content:n,name:"twitter:app:name:googleplay"},{content:n,name:"al:android:app_name"},{content:n,name:"al:ios:app_name"},{content:i,name:"twitter:creator"},{content:i,name:"twitter:site"},{content:w,name:"twitter:card"},{content:"iheart.com",name:"twitter:domain"},{content:r,name:"twitter:app:id:iphone"},{content:r,name:"twitter:app:id:ipad"},{content:r,name:"al:ios:app_store_id"},{content:o,name:"twitter:app:id:googleplay"},{content:o,name:"al:android:package"},{content:`${b} ${D}`,itemprop:"name"},{content:`${_||b} ${D}`,property:"og:title"},{content:`${_||b} ${D}`,name:"twitter:title"},...A?[{content:A,name:"twitter:app:url:iphone"},{content:A,name:"twitter:app:url:ipad"},{content:A,name:"twitter:app:url:googleplay"},{content:A,property:"al:android:url"},{content:A,property:"al:ios:url"}]:[]]};var y=a(8743),f=a(31343),_=a(50521),w=a(9133),b=a(12771),S=a(65506),k=a(1268);const v=({deeplink:t="",description:e,image:a,legacyDeeplink:n,noAltLink:i,ogType:r,omitTitleEnding:o,metaDescription:s,socialTitle:l,title:p,twitterCard:c="summary"})=>{const m=(0,S.useSelector)(_.iJ),d=(0,S.useSelector)(_.hK),g=(0,S.useSelector)(f.Jz),v=(0,S.useSelector)(w.$2),T=(0,y.Z)();return(0,k.tZ)(b.q,{link:u({deeplink:t,image:a,noAltLink:i,pagePath:g,siteUrl:v}),meta:h({description:e,fbAppId:m,fbPages:d,image:a,legacyDeeplink:n,metaDescription:s,ogType:r,omitTitleEnding:o,pagePath:g,siteUrl:v,socialTitle:l,title:p,translate:T,twitterCard:c}),title:p})}},94263:(t,e,a)=>{"use strict";function n(t,e=!0,a=!0){return t(e&&a?"All your favorite music, podcasts, and radio stations available for free. Listen to thousands of live radio stations or create your own artist stations and playlists. Get the latest music and trending news, from your favorite artists and bands.":e?"Stream thousands of the best live radio stations and custom artist stations for FREE - all in one app.":a?"Stream thousands of the best live radio stations for FREE, plus unlimited music on demand - all in one app.":"Stream thousands of the best live radio stations for FREE - all in one app.")}a.d(e,{c:()=>n})},17296:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>k});var n=a(67230),i=a(17078),r=a(8743),o=a(26985),s=a(12771),l=a(93660),p=a(1268),c=a(65506),m=a(32034),d=a(14343),u=a(9133);const g=(0,m.zB)({artistId:d.Am,artistName:d.I4,pagePath:d.at,siteUrl:u.$2}),h=(0,c.connect)(g)((function({siteUrl:t,pagePath:e,imageUrl:a,artistId:n,artistName:c,name:m}){const d=(0,r.Z)(),u=d("Listen to music you'll love! Create a custom radio station from your favorite songs by {artistName} on iHeart.",{artistName:c}),g=`${m}, ${c}, ${(0,l.YY)(d,"Music, Songs, Top, Best, Popular, Lyrics, Download, iHeartRadio, iHeart, Radio")}`,h=(0,o.Yy)(n,c),y=d("Stream Free Songs by {artistName} & Similar Artists",{artistName:c}),f=(0,l.zt)(t,e);return(0,p.BX)(p.HY,{children:[(0,p.tZ)(i.Z,{deeplink:`play/custom/artist/${n}`,description:u,image:a,legacyDeeplink:`play/custom/artist/${n}`,metaDescription:u,ogType:"profile",title:y,twitterCard:"summary_large_image"}),(0,p.tZ)(s.q,{meta:[{content:g,name:"keywords"},{content:"audio/vnd.facebook.bridge",property:"og:audio:type"},{content:f,property:"og:audio"},{content:(0,o.v_)(t,h),property:"music:musician"}]})]})}));var y=a(49942),f=a(45975),_=a(96126),w=a(56206),b=a(24725),S=a(67657);const k=function({artistId:t,artistName:e,tracks:a}){const i=(0,p.tZ)(b.Z,{playedFrom:_.Z.PROF_SONG_SIMILAR},"similar");return t?(0,p.BX)(p.HY,{children:[(0,p.tZ)(h,{}),(0,p.tZ)(y.Z,{seedId:t,seedType:"artist"}),(0,p.BX)(f.ZP,{backLink:(0,o.Yy)(t,e),dataTest:f.n3.ArtistSongs,more:i,title:e,children:[(0,p.tZ)(w.Z,{title:"Songs"}),(0,p.tZ)(n.Z,{artistId:t,artistName:e,playedFrom:_.Z.PROF_ARTIST_SONGS,stationType:S.bV.TRACK,tracks:a})]})]}):null}},96719:t=>{t.exports="/v8.41.1/15fc332/bundles/opensearch.xml"}}]);
//# sourceMappingURL=ArtistSongs.www.js.map