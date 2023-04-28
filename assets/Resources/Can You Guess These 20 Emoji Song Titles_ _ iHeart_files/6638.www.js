"use strict";(this.__LOADABLE_LOADED_CHUNKS__=this.__LOADABLE_LOADED_CHUNKS__||[]).push([[6638],{73946:(t,e,i)=>{i.r(e),i.d(e,{default:()=>tt});var o=i(23417),r=i(16364),n=i(92787);const s=(0,n.Z)("div",{target:"eosxif00"})({name:"es6tr3",styles:'align-self:center;margin:0;a:last-of-type{margin-right:0;}button:first-of-type{&:after{content:" | ";}}'});var a=i(69972);const l=(0,n.Z)("div",{target:"e1o9ibgz0"})((({theme:t})=>({borderTop:`0.1rem solid ${t.colors.gray.medium}`,maxWidth:"32.26rem",padding:"0 1.5rem",width:"100%",[(0,a.Z)(t.mediaQueries.max.width[370])]:{maxWidth:"27.5rem"}})),"");var d=i(79134);const c=(0,n.Z)(d.Z,{target:"e16hl33k0"})((({theme:t})=>({backgroundColor:t.colors.transparent.primary,border:"2px solid rgba(255, 255, 255, 0.5)",borderRadius:"0.5rem",color:t.colors.white.primary,cursor:"pointer",display:"inline-block",fontSize:"1.6rem",height:"4.5rem",lineHeight:"4.5rem",marginBottom:"1.5rem",padding:"0 1.5rem",textAlign:"center",verticalAlign:"middle",width:"100%","&:hover":{textDecoration:"none"}})),""),h=(0,n.Z)(d.Z,{target:"e1xiud1v0"})((({theme:t})=>({background:t.colors.transparent.primary,color:t.colors.white.primary,cursor:"pointer",marginRight:"0.5rem","&:hover":{textDecoration:"none"}})),""),m=(0,n.Z)("button",{target:"e1wfo2us0"})((({theme:t})=>({alignItems:"center",background:t.colors.transparent.primary,border:0,display:"flex",height:"2.85rem",justifyContent:"center",marginRight:"1.3rem",padding:0,verticalAlign:"middle",width:"2.85rem"})),""),p=(0,n.Z)("div",{target:"e10q7btv0"})((({justified:t=!1})=>({alignItems:"center",display:"flex",fontSize:"1.6rem",justifyContent:t?"end":void 0,marginTop:0,paddingBottom:"1.5rem",paddingTop:"1.5rem","button:nth-of-type(2)":{"&:after":{content:'" | "'}}})),"");var g=i(21481);const u=(0,n.Z)(g.Z,{target:"e11y3fdd0"})({name:"5qj2xt",styles:"margin-bottom:0.8rem;margin-left:1.5rem;margin-top:0.8rem"}),v=(0,n.Z)("nav",{target:"empxr300"})((({show:t,theme:e})=>({background:e.colors.gray.dark,display:"flex",flexDirection:"column",height:"100%",left:0,margin:"0 0 0 "+(t?"0":"-32.26rem"),maxWidth:"32.26rem",position:"fixed",top:0,transition:"margin 0.5s",width:"100%",zIndex:114,[(0,a.Z)(e.mediaQueries.max.width[370])]:{maxWidth:"26.26rem"}})),"");var y=i(35887),b=i(65367),k=i(71291);const Z=(0,n.Z)("li",{target:"e128hxc80"})((({theme:t})=>({color:t.colors.gray.medium,display:"inline-block",fontSize:"1.6rem",lineHeight:"2.8",width:"100%"})),""),w=(0,n.Z)("ul",{target:"e1o9wktl0"})({name:"m2jua5",styles:"display:inline-block;list-style:none;margin:0;padding:0;vertical-align:middle;width:100%"}),f=(0,n.Z)(d.Z,{target:"e8j5jma0"})((({theme:t})=>({color:t.colors.gray.light,display:"inline-block",margin:0,paddingLeft:`calc(${t.dimensions.gutter} * 2 + 0.6rem)`,width:"100%","&.active":{background:t.colors.black.primary,borderLeft:`0.6rem solid ${t.colors.red.primary}`,color:t.colors.white.primary,paddingLeft:"3rem"},"&:hover":{textDecoration:"none"}})),""),S=(0,n.Z)(d.Z,{target:"e4z9wkf0"})((({theme:t})=>({backgroundColor:t.colors.red.primary,borderRadius:"0.5rem",color:t.colors.white.primary,display:"inline-block",fontSize:"1.6rem",height:"4.5rem",lineHeight:"4.5rem",margin:t.dimensions.gutter,padding:"0 1.5rem",textAlign:"center",width:"calc(100% - 3rem)","&:hover":{textDecoration:"none"}})),"");var x=i(25976),C=i(51121),N=i(26985),A=i(48221),L=i(96832),B=i(1268);function R(){return R=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},R.apply(this,arguments)}class O extends L.PureComponent{constructor(...t){super(...t),this.upsellFromAnalytics=()=>(k.Z.trackUpsellOpen({destination:b.PB,promotionSubscriptionTier:b.vh,upsellFrom:b.tm,upsellType:b.Mk,vendor:b.B5}),this.props.closeNav())}getNavItems(){const{internationalPlaylistRadioEnabled:t,navLinks:e,showPlaylists:i,customRadioEnabled:o,closeNav:r,initialRender:n,translate:s}=this.props;return(0,A.i)({customRadioEnabled:o,internationalPlaylistRadioEnabled:t,navLinks:e,pageNamePrefix:"sidenav",showPlaylists:!n&&i,translate:s}).map((t=>{var e;const i=C.parse(null!=(e=t.to)?e:"");return R({},t,{onClick:r,target:i.protocol?"_blank":null})}))}render(){const{hasUpgradeBtn:t,upgrade:e,closeNav:i,initialRender:o,translate:r}=this.props,n=t?(0,N.F1)(e,{upsellFrom:x.Z.SIDE_NAV_UPGRADE_BUTTON.id}):"";return(0,B.BX)(w,{children:[t&&!o?(0,B.tZ)(S,{"data-test":"upgrade-button",onClick:this.upsellFromAnalytics,to:n,children:r("Upgrade Now")}):null,this.getNavItems().map((t=>{const{to:e,title:o,text:r}=t;return(0,B.tZ)(Z,{children:(0,B.tZ)(f,R({},t,{activeClassName:"active",onClick:i,title:o,to:e,children:r}))},e)}))]})}}O.defaultProps={upgrade:"/upgrade"};const P=O;var z=i(65506),_=i(32034),E=i(13226),D=i(41120),I=i(47976),T=i(629),j=i(40995);const U=(0,y.Z)(j.EN,(0,I.NC)("translate"),(0,z.connect)((0,_.zB)({customRadioEnabled:D.BB,hasUpgradeBtn:T.Eh,internationalPlaylistRadioEnabled:D.II,navLinks:(0,_.zB)({contest:E.kP,custom:E.ly,events:E.rT,features:E.p_,forYou:E.HC,genre:E.mz,home:E.Jp,live:E.ol,myMusic:E.pb,myStations:E.wB,news:E.RV,photo:E.Br,playlist:E.aO,podcast:E.UR,yourLibrary:E.ER}),showPlaylists:T.A_,upgrade:E.Sq})))(P),W=(0,n.Z)("div",{target:"e51kcov0"})((({open:t,theme:e})=>({backgroundColor:e.colors.black.primary,height:"100vh",left:0,opacity:t?.6:0,position:"fixed",top:0,transition:"opacity 300ms ease, visibility 300ms ease",visibility:t?"visible":"hidden",width:"100vw",zIndex:e.zIndex.header+1})),"");var H=i(45202);const M=(0,n.Z)("div",{target:"e1hylm100"})((({direction:t,show:e,theme:i})=>({backgroundImage:"up"===t?"linear-gradient(to top, rgba(42, 42, 42, 1), rgba(51, 51, 51, 0) 25%)":"linear-gradient(180deg, #2a2a2a, rgba(51, 51, 51, 0) 25%)",bottom:"11.8rem",borderTop:"down"===t?`1px solid ${i.colors.gray[300]}`:void 0,display:"block",maxWidth:"32.26rem",opacity:e?1:0,pointerEvents:"none",position:"fixed",top:"5.5rem",transition:"opacity 0.5s",width:"100%",[(0,a.Z)(i.mediaQueries.max.width[370])]:{maxWidth:"27.5rem"}})),""),X=(0,n.Z)("div",{target:"e11u7pdu0"})({name:"ocyhkc",styles:"height:100%;overflow-y:scroll;width:100%;&::-webkit-scrollbar{display:none;}"});class F extends L.Component{constructor(...t){super(...t),this.container=void 0,this.state={isAtBottom:!1,isAtTop:!1},this.throttledSetOverlayState=()=>null,this.setOverlayState=()=>{if(!this.container)return;const{scrollTop:t,clientHeight:e,scrollHeight:i}=this.container,o=e+t;this.setState({isAtBottom:i-o<1,isAtTop:t<1})}}componentDidMount(){const{throttleTime:t}=this.props;this.throttledSetOverlayState=(0,o.Z)(this.setOverlayState,t),this.throttledSetOverlayState()}render(){const{isAtTop:t,isAtBottom:e}=this.state;return(0,B.BX)(X,{onScroll:this.throttledSetOverlayState,ref:t=>{this.container=t},children:[this.props.children,(0,B.tZ)(M,{direction:"down",show:!t}),(0,B.tZ)(M,{direction:"up",show:!e})]})}}F.defaultProps={throttleTime:100};const Q=F,$=(0,n.Z)(d.Z,{target:"egfts3w0"})((({theme:t})=>({color:t.colors.white.primary,cursor:"pointer","&:hover":{textDecoration:"none"}})),"");var q=i(26180);const G=(0,n.Z)(d.Z,{target:"eiez97h0"})({name:"11ub3ht",styles:"display:inline-block;margin-right:0.75rem;.image{width:2.7rem;img{border-radius:50%;}}"});function K(){return K=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},K.apply(this,arguments)}const V=(0,n.Z)(d.Z,{target:"e1ntd0be0"})((({theme:t})=>K({},t.mixins.ellipsis,{color:t.colors.white.primary,display:"inline-block",marginRight:0,verticalAlign:"middle",maxWidth:"11.5rem",[(0,a.Z)(t.mediaQueries.max.width[370])]:{marginRight:"1rem",maxWidth:"5.3rem"},[(0,a.Z)(t.mediaQueries.min.width[375])]:{marginRight:"1rem"}})),"");var Y=i(55598);class J extends L.PureComponent{constructor(...t){super(...t),this.state={initialRender:!0},this.handleResize=(0,o.Z)((()=>{const{hideSideNav:t,showingSideNav:e}=this.props;e&&window.innerWidth>=768&&t()}),300),this.onLoginClick=()=>{const{openAuthModal:t}=this.props;this.closeNav(),t(Y.LS.Login)},this.onSignupClick=()=>{this.closeNav(),this.props.openAuthModal(Y.LS.Signup)},this.onLogoutClick=()=>(this.closeNav(),this.props.logoutAndStartAnonymousSession({forced:!1,noRedirect:!1}),!0),this.onAppsMobileClick=()=>!0,this.onSettingsClick=()=>(this.closeNav(),!0),this.onProfileNameClick=()=>(this.closeNav(),!0),this.onProfileIconClick=()=>(this.closeNav(),!0),this.closeNav=()=>(this.props.hideSideNav(),!0),this.updateScrollOnBody=t=>{document.body.style.overflow=t?"hidden":"visible"}}componentDidMount(){window.addEventListener("resize",this.handleResize)}componentDidUpdate(t){const{showingSideNav:e}=this.props;e!==t.showingSideNav&&this.updateScrollOnBody(e),this.state.initialRender&&this.setState({initialRender:!1})}componentWillUnmount(){window.removeEventListener("resize",this.handleResize)}render(){const{displayName:t,isLoggedOut:e,showingSideNav:i,showLoginInNav:o,appsMobileLink:n,translate:a}=this.props,{initialRender:d}=this.state;let g;return g=e||d?(0,B.BX)(p,{children:[(0,B.tZ)(m,{onClick:this.onLoginClick,title:"Account",type:"button",children:(0,B.tZ)(r.Z,{color:q.ZP.colors.white.primary})}),(0,B.tZ)(h,{onClick:this.onLoginClick,title:"Log In",children:a("Log In")}),(0,B.tZ)($,{onClick:this.onSignupClick,title:"Sign Up",children:a("Sign Up")})]}):(0,B.BX)(p,{justified:!0,children:[(0,B.tZ)(G,{to:"/my/settings/",children:(0,B.tZ)("span",{onClick:this.onProfileIconClick,children:(0,B.tZ)(H.Z,{size:25})})}),(0,B.tZ)(V,{to:"/my/settings/",children:(0,B.tZ)("span",{onClick:this.onProfileNameClick,children:t})}),(0,B.BX)(s,{children:[(0,B.tZ)(h,{onClick:this.onLogoutClick,children:a("Log Out")}),(0,B.tZ)(h,{onClick:this.onSettingsClick,to:"/my/settings/",children:a("Settings")})]})]}),(0,B.BX)(B.HY,{children:[(0,B.tZ)(W,{"data-test":"side-nav-overlay",onClick:this.closeNav,open:i}),(0,B.BX)(v,{"data-test":"side-nav",show:i,children:[(0,B.tZ)(u,{onClick:this.closeNav}),(0,B.tZ)(Q,{children:(0,B.tZ)(U,{closeNav:this.closeNav,initialRender:d})}),o&&(0,B.BX)(l,{children:[g,(0,B.tZ)(c,{onClick:this.onAppsMobileClick,target:"_blank",to:n,children:(0,B.tZ)("span",{children:a("Get The App")})})]})]})]})}}const tt=J}}]);
//# sourceMappingURL=SideNav.www.js.map