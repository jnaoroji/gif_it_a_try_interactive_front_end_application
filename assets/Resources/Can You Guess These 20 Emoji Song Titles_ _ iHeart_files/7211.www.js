"use strict";(this.__LOADABLE_LOADED_CHUNKS__=this.__LOADABLE_LOADED_CHUNKS__||[]).push([[7211],{92340:(e,t,r)=>{r.d(t,{Z:()=>v});var i=r(17),n=r(79134),o=r(73665),a=r(30738),s=r(26985),l=r(5988),d=r(61578),c=r(96832),p=r(1268);class h extends c.PureComponent{constructor(...e){super(...e),this.asyncData=null,this.state={links:void 0},this.getInitialStateAsync=()=>{const{variety:e}=this.props,{artistId:t,ampUrl:r}=this.props;return(0,o.Z)((0,d.SF)({ampUrl:r,id:t})).then((t=>{const r=(0,l.r7)((0,i.Z)(t,["data","similarArtists"]));return r&&r[e]&&r[e].length?{links:r[e].slice(0,3).map((e=>({title:e.artistName,url:(0,s.Yy)(e.artistId,e.artistName)})))}:{}}))},this.getTruncatedLinks=e=>{const{truncate:t}=this.props,r=[];let i=15;return e.forEach((e=>{const n=e.title.length;i+n+2<=t&&(i+=n+2,r.push(e))})),r}}componentDidMount(){this.asyncData=(0,a.Z)(this.getInitialStateAsync()),this.asyncData.then((e=>this.setState(e)))}componentWillUnmount(){this.asyncData&&this.asyncData.cancel()}render(){const{links:e,translate:t,numberOfFeatures:r}=this.props,i=this.state.links||e;if(!i)return(0,p.tZ)("p",{});const o=this.getTruncatedLinks(i);return(0,p.tZ)("p",{children:t("Feat. {artistNames} and more",{artistNames:o.slice(0,r).map(((e,t)=>(0,p.BX)("span",{children:[(0,p.tZ)(n.Z,{title:e.title,to:e.url,children:e.title}),t<o.length-1?", ":""]},e.title+e.url)))})})}}h.defaultProps={truncate:1e3,variety:"TOP_HITS"};var u=r(1441),m=r(65506),y=r(32034),g=r(9133),Z=r(47976);const v=(0,u.qC)((0,Z.NC)("translate"),(0,m.connect)((0,y.zB)({ampUrl:g.h_})))(h)},41337:(e,t,r)=>{r.d(t,{Z:()=>i});const i=(0,r(92787).Z)("div",{target:"e1yb1beu0"})((({theme:e})=>({"&:hover":{"+ .image::after":{background:e.colors.transparent.dark},"+ span .image::after":{background:e.colors.transparent.dark}},".play":{borderColor:e.colors.white.primary,bottom:"30%",height:"40%",left:"30%",position:"absolute",width:"40%",zIndex:1,svg:{fill:e.colors.white.primary}}})),"")},77892:(e,t,r)=>{r.d(t,{Z:()=>w});var i=r(35887),n=r(79134),o=r(90871),a=r(18212),s=r(8743),l=r(24377),d=r(72502),c=r(651),p=r(9423),h=r(67657),u=r(96832),m=r(65506),y=r(1268);var g=r(32034),Z=r(62570),v=r(21637),b=r(85834);const w=(0,i.Z)((0,m.connect)((0,g.zB)({isAnonymous:b.Ld}),{deleteFromListenHistory:Z.Vm,toggleStationSaved:Z.nS,deleteRecByTypeAndId:v.P1}))((function({artist:e,deleteRecByTypeAndId:t,deleteFromListenHistory:r,followed:i,isAnonymous:g,recentlyPlayed:Z,tileType:v,toggleStationSaved:b}){const{seedId:w,seedType:k,stationId:f,name:I}=e,T=(0,m.useDispatch)(),O=(0,s.Z)(),S=(0,u.useCallback)((()=>{b(k,w),g||T((0,p.j_)({title:O("Saved {name} to Your Library",{name:I}),icon:l.G.HeartFilled}))}),[k,w,I]),R=(0,u.useCallback)((()=>{b(k,w),g||T((0,p.j_)({title:O("Removed {name} from Your Library",{name:I}),icon:l.G.Deleted}))}),[k,w,I]);return(0,y.tZ)(a.Z,{"data-test":"artist-tile-dropdown",children:(0,y.tZ)(d.v,{children:(0,y.BX)(d.v.List,{children:[(0,y.tZ)(o.Z,{shouldShow:!i,children:(0,y.tZ)(d.v.Item,{children:(0,y.tZ)(n.Z,{onClick:S,title:O("Follow Artist"),children:O("Follow Artist")},`save|${w}`)})}),(0,y.tZ)(o.Z,{shouldShow:i,children:(0,y.tZ)(d.v.Item,{children:(0,y.tZ)(n.Z,{dataTest:"remove-artist",onClick:R,title:O("Remove Artist"),children:O("Remove Artist")},`remove|${w}`)})}),(0,y.tZ)(o.Z,{shouldShow:v===c.q2.RECOMMENDATION,children:(0,y.tZ)(d.v.Item,{children:(0,y.tZ)(n.Z,{onClick:()=>{t(k,w)},title:O("Not for Me"),children:O("Not for Me")},`notForMe|${w}`)})}),(0,y.tZ)(o.Z,{shouldShow:Z,children:(0,y.tZ)(d.v.Item,{children:(0,y.tZ)(n.Z,{onClick:()=>r({seedId:w,stationId:f,stationType:h.bV.ARTIST}),title:O("Delete"),children:O("Delete")},`delete|${w}`)})})]})})})}))},80181:(e,t,r)=>{r.d(t,{H:()=>T,Z:()=>b});var i=r(21677),n=r(79134),o=r(69666),a=r(41337),s=r(2329),l=r(61312),d=r(30410),c=r(47936),p=r(48481),h=r(22370),u=r(67657),m=r(54554),y=r(65506),g=r(1268);function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Z.apply(this,arguments)}const v=(0,s.Z)(o.Z),b=({dropdown:e,hasBottomMargin:t,header:r="",isAbTest:o=!1,itemSelectedLocation:s,noHeader:b=!1,onHeaderClick:w=(()=>{}),playedFrom:k,similars:f=[],singleRow:I,subTitle:T,suppressFirstOfType:O,tilesInRow:S,url:R=""})=>{const $=(0,y.useSelector)(h.ih),A=I?S:200,L=(0,g.tZ)(c.Z,{tilesInRow:S,children:f.slice(0,A).map((r=>{const{callLetters:o,name:l,rawLogo:c,seedType:h,logo:y,seedId:b,url:w}=r,f=(0,g.tZ)(T,Z({},r),`artist-${b}`),O=(0,g.tZ)(e,Z({},r)),R=$&&(0,g.tZ)(a.Z,{children:(0,g.tZ)(v,{artistName:l,className:"play",deferPlay:!!w,playedFrom:k,seedId:b,stationId:b,stationType:h})}),A={id:b,location:s||"",name:o||l,type:h};return(0,g.tZ)(d.Z,{dropdown:O,hasBottomMargin:t,isRoundImage:h===u.bV.ARTIST,itemSelected:A,singleRow:I,subTitle:f,tilesInRow:S,title:l,url:w,children:(0,g.BX)(n.Z,{itemSelected:A,to:w,children:[R,(0,g.tZ)(p.Z,{liveTile:"live"===h,children:(0,g.tZ)(i.Z,{alt:l,aspectRatio:1,height:m.ul,id:b,src:y||c,type:h,width:m.ul})})]})},`similar|${b}`)}))});return b?(0,g.tZ)("span",{children:L}):(0,g.tZ)(l.Z,{dataTest:"similar-section",hasBorder:!1,hasExtraPadding:!o,hasMobileBottomLink:o,header:r,isHidden:!f.length,onHeaderClick:w,suppressFirstOfType:O,url:R,children:L})};var w=r(13885),k=r(41120);function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},f.apply(this,arguments)}const I=(0,s.Z)(o.Z),T=({canPlaylist:e=!1,dropdown:t,hasBottomMargin:r,header:o="",isAbTest:s=!1,itemSelectedLocation:d,noHeader:c=!1,onHeaderClick:Z=(()=>{}),playedFrom:v,similars:b=[],singleRow:T,subTitle:O,suppressFirstOfType:S,tilesInRow:R=4,url:$=""})=>{const A=(0,y.useSelector)(k.BB),L=(0,y.useSelector)(h.ih),P=b.map((o=>{const{callLetters:s,name:l,rawLogo:c,seedType:h,logo:y,seedId:Z,url:b}=o,w=(0,g.tZ)(O,f({},o),`artist-${Z}`),k=(0,g.tZ)(t,f({},o)),S=L&&e&&A?(0,g.tZ)(a.Z,{children:(0,g.tZ)(I,{artistName:l,className:"play",deferPlay:!!b,playedFrom:v,seedId:Z,stationId:Z,stationType:h})}):null,$={id:Z,location:d||"",name:s||l,type:h};return{children:(0,g.BX)(n.Z,{itemSelected:$,to:b,children:[S,(0,g.tZ)(p.Z,{liveTile:"live"===h,children:(0,g.tZ)(i.Z,{alt:l,aspectRatio:1,height:m.ul,id:Z,src:y||c,type:h,width:m.ul})})]}),dropdown:k,hasBottomMargin:r,itemSelected:$,isRoundImage:h===u.bV.ARTIST,key:`similar|${Z}`,singleRow:T,subTitle:w,tilesInRow:R,title:l,url:b}}));return c?(0,g.tZ)("span",{children:P}):(0,g.tZ)(l.Z,{dataTest:"similar-section",hasBorder:!1,hasExtraPadding:!s,hasMobileBottomLink:s,header:o,isHidden:!b.length,onHeaderClick:Z,suppressFirstOfType:S,url:$,children:(0,g.tZ)(w.Z,{subtitleLines:2,tilesData:P,tilesInRow:R,titleLines:2})})}},48481:(e,t,r)=>{r.d(t,{Z:()=>i});const i=(0,r(92787).Z)("div",{target:"e12wd8eb0"})((({liveTile:e=!1,theme:t})=>({backgroundColor:e?t.colors.white.primary:"none",".image img":{border:e?`0.1rem solid ${t.colors.gray.light}`:"none",padding:e?"1.5rem":0},".image .background":{backgroundPosition:"center",backgroundSize:"cover"}})),"")},72502:(e,t,r)=>{r.d(t,{v:()=>i.Z});var i=r(22005);r(81558)},39617:(e,t,r)=>{r.d(t,{p:()=>o,$:()=>c});const i=(e,t,r)=>[{key:"application/json+oembed",href:`${e}/oembed?url=${encodeURIComponent(t)}&format=json`,rel:"alternate",title:r,type:"application/json+oembed"},{key:"text/xml+oembed",href:`${e}/oembed?url=${encodeURIComponent(t)}&format=xml`,rel:"alternate",title:r,type:"text/xml+oembed"}];var n=r(93660);const o=({pagePath:e,siteUrl:t,title:r})=>[...i(t,(0,n.zt)(t,e),r)];var a=r(32787),s=r.n(a);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},l.apply(this,arguments)}const d=({embed:e})=>{const t={};return e&&(t.embed=!0),Object.keys(t).length?`?${r=t,s().stringify((i=r,Object.keys(i).sort().reduce(((e,t)=>l({},e,{[t]:i[t]})),{})))}`:"";var r,i},c=({height:e,addEmbedToLink:t=!1,pagePath:r,siteUrl:i,width:o})=>{const a=(0,n.zt)(i,r),s=a+d({embed:t}),l=a+d({embed:!0}),c=a+d({embed:t});return[{content:"audio",key:"twitter:card",property:"twitter:card"},{content:c,key:"twitter:url",name:"twitter:url"},{content:c,key:"twitter:player",name:"twitter:player"},{content:`${o}`,key:"twitter:player:width",name:"twitter:player:width"},{content:`${e}`,key:"twitter:player:height",name:"twitter:player:height"},{content:"text/html",key:"og:video:type",property:"og:video:type"},{content:"audio/vnd.facebook.bridge",key:"og:audio:type",property:"og:audio:type"},{content:s,key:"og:url",property:"og:url"},{content:s,key:"og:audio",property:"og:audio"},{content:l,key:"og:video:url",property:"og:video:url"},{content:l,key:"og:video:secure_url",property:"og:video:secure_url"},{content:`${o}`,key:"og:video:width",property:"og:video:width"},{content:`${e}`,key:"og:video:height",property:"og:video:height"}]}},30738:(e,t,r)=>{function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},i.apply(this,arguments)}r.d(t,{Z:()=>n});const n=function(e){let t=!1;const r=new Promise(((r,n)=>{Promise.resolve(e).then((e=>t?n({canceled:t}):r(e))).catch((e=>n(i({},e,{canceled:t}))))}));return r.cancel=()=>{t=!0},r}},7869:(e,t,r)=>{r.d(t,{Z:()=>Z});var i=r(17078),n=r(9234),o=r(8743),a=r(26985),s=r(12771),l=r(39617),d=r(93660),c=r(45975),p=r(96342),h=r(1268);var u=r(65506),m=r(32034),y=r(14343),g=r(9133);const Z=(0,u.connect)((0,m.zB)({artistName:y.I4,siteUrl:g.$2,topTracks:y.rH}))((function({artistId:e,artistName:t,seedType:r,siteUrl:u,pagePath:m,topTracks:y,metaTitle:g}){var Z;const v=(0,o.Z)(),b=(0,d.YY)(v,"Music, Albums, Songs, Station, Lyrics, Download, Now Playing, iHeartRadio, iHeart, Radio"),w=v("{artistName}",{artistName:t}),k=y.slice(0,3).map((e=>{var t;return null!=(t=null==e?void 0:e.name)?t:""})).join(", "),f=g||t,I=(0,d.zt)(u,m),{height:T,fixedWidth:O}=null!=(Z=p.I.ARTIST)?Z:{};return(0,h.BX)("div",{children:[(0,h.tZ)(i.Z,{deeplink:`goto/artist/${e}`,description:k,image:(0,a.Jo)(e,r),legacyDeeplink:`play/custom/artist/${e}`,metaDescription:k,ogType:"music.radio_station",title:f}),(0,h.tZ)(s.q,{link:(0,l.p)({pagePath:m,siteUrl:u,title:f}),meta:[{content:f,itemProp:"name"},{content:`${w}, ${b}`,name:"keywords"},...(0,l.$)({height:T,pagePath:m,siteUrl:u,width:O})]}),(0,h.tZ)(n.Z,{meta:{description:k,id:e,keywords:`${w}, ${b}`,name:t,seedType:r,url:I},type:c.n3.ArtistProfile})]})}))},27730:(e,t,r)=>{r.d(t,{Z:()=>u});var i=r(77892),n=r(92340),o=r(80181),a=r(96832),s=r(26985),l=r(1268);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},d.apply(this,arguments)}var c=r(65506),p=r(32034),h=r(14343);const u=(0,c.connect)((0,p.zB)({artists:h.fC,relatedArtists:h.Jy}))((({artists:e,header:t="",playedFrom:r,relatedArtists:c,singleRow:p,tilesHaveFixedHeight:h=!1,tilesInRow:u,url:m})=>{const y=(0,a.useMemo)((()=>Object.keys(e).filter((t=>e[t].favorite))),[e]),g=(0,a.useCallback)((e=>(0,l.tZ)(i.Z,{artist:e,followed:y.includes(String(e.seedId))},`artist-${e.seedId}`)),[y]),Z=(0,a.useCallback)((({seedId:e})=>(0,l.tZ)(n.Z,{artistId:e},`featuring|${e}`)),[]);return(0,l.tZ)(o.Z,{dropdown:g,header:t,playedFrom:r,similars:(v=c,v.map((e=>d({},e,{logo:e.image,seedId:e.artistId,seedType:"artist",url:(0,s.Yy)(e.artistId,e.name)})))),singleRow:p,subTitle:Z,tilesHaveFixedHeight:h,tilesInRow:u,url:m});var v}))}}]);
//# sourceMappingURL=7211.www.js.map