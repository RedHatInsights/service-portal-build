!function(e){function t(t){for(var r,i,c=t[0],l=t[1],s=t[2],d=0,f=[];d<c.length;d++)i=c[d],a[i]&&f.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);f.length;)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={3:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+"js/"+({}[e]||e)+".js"}(e),o=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/insights/platform/service-portal/",i.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;o.push([511,4]),n()}({507:function(e,t,n){var r=n(508);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(158)(r,a);r.locals&&(e.exports=r.locals)},508:function(e,t,n){(t=e.exports=n(108)(!1)).i(n(260),""),t.push([e.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.toolbar-padding {\n  padding: 24px 24px 0 24px; }\n\n.card-link, .card-link:hover, .card-link:active {\n  text-decoration: none !important;\n  cursor: pointer !important;\n  color: #282d33 !important;\n  font-weight: 400 !important; }\n\n.text-align-right {\n  text-align: right; }\n\n.w-100 {\n  width: 100%; }\n\n.align-items-base {\n  align-items: baseline; }\n\n.modal-form-right-align .pf-m-action:last-child .data-driven-forms__pf4-button-group:first-child {\n  margin-left: auto; }\n\n.line-clamp {\n  display: -webkit-box;\n  -webkit-line-clamp: 6;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  word-wrap: break-word; }\n\n.content-gallery {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start; }\n  .content-gallery .content-gallery-card {\n    width: 240px;\n    height: 330px;\n    margin: 16px; }\n    .content-gallery .content-gallery-card .card-link {\n      height: 100%; }\n",""])},511:function(e,t,n){"use strict";n.r(t);var r,a,o,i=n(1),c=n.n(i),l=n(5),s=n.n(l),u=n(233),d=n(46),f=n(258),p=n(32),m=n(70),h=n(255),g=n.n(h),E=n(256),y=n(7),v=n.n(y),L=n(12),F=n.n(L),_=n(8),I=function(e){return F()({},e,{isLoading:!0})},P=(r={},v()(r,"".concat(_.m,"_PENDING"),I),v()(r,"".concat(_.m,"_FULFILLED"),function(e,t){var n=t.payload;return F()({},e,{servicePlans:n,isLoading:!1})}),v()(r,"".concat(_.q,"_PENDING"),I),v()(r,"".concat(_.q,"_FULFILLED"),function(e,t){var n=t.payload;return F()({},e,{orders:n,isLoading:!1})}),v()(r,"".concat(_.n,"_PENDING"),I),v()(r,"".concat(_.n,"_FULFILLED"),function(e,t){var n=t.payload;return F()({},e,{planParameters:n,isLoading:!1})}),v()(r,"".concat(_.t,"_FULFILLED"),function(e,t){var n=t.payload;return F()({},e,n,{isLoading:!1})}),v()(r,_.v,function(e,t){var n=t.payload;return F()({},e,{serviceData:n,isLoading:!1})}),v()(r,_.s,function(e,t){var n=t.payload;return F()({},e,{selectedPlan:n,isLoading:!1})}),r),b=function(e){return F()({},e,{isPlatformDataLoading:!0})},O=(a={},v()(a,"".concat(_.e,"_PENDING"),b),v()(a,"".concat(_.e,"_FULFILLED"),function(e,t){var n=t.payload;return F()({},e,{platforms:n,isPlatformDataLoading:!1})}),v()(a,"".concat(_.g,"_PENDING"),b),v()(a,"".concat(_.g,"_FULFILLED"),function(e,t){var n=t.payload,r=t.meta.platformId;return F()({},e,{platformItems:F()({},e.platformItems,v()({},r,n)),isPlatformDataLoading:!1})}),v()(a,"".concat(_.f,"_PENDING"),b),v()(a,"".concat(_.f,"_FULFILLED"),function(e,t){var n=t.payload;return F()({},e,{portfolioItem:n,isPlatformDataLoading:!1})}),v()(a,"".concat(_.d,"_PENDING"),b),v()(a,"".concat(_.d,"_FULFILLED"),function(e,t){var n=t.payload;return F()({},e,{selectedPlatform:n,isLoading:!1})}),v()(a,"".concat(_.o,"_FULFILLED"),function(e,t){var n=t.payload;return F()({},e,{filterValue:n})}),v()(a,"".concat(_.c,"_FULFILLED"),function(e,t){var n=t.payload;return F()({},e,{platformItems:F()({},e.platformItems,n),isPlatformDataLoading:!1})}),a),T=function(e){return F()({},e,{isLoading:!0})},w=function(e,t){var n=t.payload;return F()({},e,{portfolioItems:n,isLoading:!1})},D=(o={},v()(o,"".concat(_.i,"_PENDING"),T),v()(o,"".concat(_.i,"_FULFILLED"),function(e,t){var n=t.payload;return F()({},e,{portfolios:n,isLoading:!1})}),v()(o,"".concat(_.k,"_PENDING"),T),v()(o,"".concat(_.k,"_FULFILLED"),w),v()(o,"".concat(_.l,"_PENDING"),T),v()(o,"".concat(_.l,"_FULFILLED"),w),v()(o,"".concat(_.j,"_PENDING"),T),v()(o,"".concat(_.j,"_FULFILLED"),function(e,t){var n=t.payload;return F()({},e,{portfolioItem:n,isLoading:!1})}),v()(o,"".concat(_.h,"_PENDING"),T),v()(o,"".concat(_.h,"_FULFILLED"),function(e,t){var n=t.payload;return F()({},e,{selectedPortfolio:n,isLoading:!1})}),v()(o,_.p,function(e,t){var n=t.payload;return F()({},e,{filterValue:n})}),o),x=new p.ReducerRegistry({},[E.a,Object(f.a)(),Object(m.notificationsMiddleware)({errorTitleKey:["errors","message"],errorDescriptionKey:["response.body.errors","errors","stack"]}),g.a]);x.register({orderReducer:Object(p.applyReducerHash)(P,{servicePlans:[],selectedPlan:{},serviceData:{},isLoading:!0}),platformReducer:Object(p.applyReducerHash)(O,{isPlatformDataLoading:!1,platforms:[],platformItems:{},platformItem:{},platform:{},filterValue:""}),portfolioReducer:Object(p.applyReducerHash)(D,{portfolioItems:[],portfolioItem:{},portfolios:[],portfolio:{},filterValue:"",isLoading:!1}),notifications:m.notifications});var R=x.getStore(),C=n(159),N=n.n(C),A=n(160),S=n.n(A),j=n(161),M=n.n(j),k=n(162),U=n.n(k),H=n(163),G=n.n(H),V=n(47),q=n.n(V),z=n(0),B=n.n(z),J=n(238),K=n(48),W=n.n(K),Q=n(98),X=n(240),Y=n(239),Z=n(150),$=n.n(Z),ee=n(99),te=Object(i.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,646))}),ne=Object(i.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5)]).then(n.bind(null,645))}),re=Object(i.lazy)(function(){return Promise.all([n.e(0),n.e(2),n.e(7)]).then(n.bind(null,647))}),ae={platforms:"/platforms",portfolios:"/portfolios",portfolioItem:"/portfolios/:id",orders:"/orders"},oe=function(e){var t=e.rootClass,n=W()(e,["rootClass"]),r=document.getElementById("root");return r.removeAttribute("class"),r.classList.add("page__".concat(t),"pf-l-page__main","pf-c-page__main"),r.setAttribute("role","main"),c.a.createElement(Q.a,n)};oe.propTypes={rootClass:B.a.string};var ie=function(e){var t=e.childProps.location.pathname;return c.a.createElement(i.Suspense,{fallback:c.a.createElement(ee.a,null)},c.a.createElement(X.a,null,c.a.createElement(oe,{path:ae.portfolios,component:ne,rootClass:"portfolios"}),c.a.createElement(oe,{path:ae.platforms,component:te,rootClass:"platforms"}),c.a.createElement(oe,{path:ae.orders,component:re,rootClass:"service_portal"}),c.a.createElement(Q.a,{render:function(){return $()(ae,function(e){return e===t})?null:c.a.createElement(Y.a,{to:ae.portfolios})}})))};ie.propTypes={childProps:B.a.object};var ce=n(152),le=n(105),se=(n(503),n(504),n(507),function(e){function t(){var e,n;N()(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=M()(this,(e=U()(t)).call.apply(e,[this].concat(a))),v()(q()(q()(n)),"state",{chromeNavAvailable:!0,auth:!1,ignoreRedirect:!0}),n}return G()(t,e),S()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.auth.getUser().then(function(){return e.setState({auth:!0})});try{insights.chrome.identifyApp("service-portal"),insights.chrome.navigation([{id:"portfolios",title:"Portfolios"},{id:"platforms",title:"Platforms"},{id:"orders",title:"Orders"}]),this.unregister=insights.chrome.on("APP_NAVIGATION",function(t){e.state.ignoreRedirect||e.props.history.push("/".concat(t.navId)),e.setState({ignoreRedirect:!1})})}catch(e){this.setState({chromeNavAvailable:!1})}}},{key:"componentWillUnmount",value:function(){this.unregister()}},{key:"render",value:function(){return this.state.auth?c.a.createElement(c.a.Fragment,null,c.a.createElement(m.NotificationsPortal,null),c.a.createElement(p.Main,{style:{marginLeft:0,padding:0}},c.a.createElement(ce.a,{style:{minHeight:"calc(100vh - 76px)"}},c.a.createElement(le.a,{sm:12},c.a.createElement(ie,{childProps:this.props}))))):c.a.createElement(ee.a,null)}}]),t}(i.Component));se.propTypes={history:B.a.object};var ue=Object(J.a)(Object(d.connect)()(se));s.a.render(c.a.createElement(d.Provider,{store:R},c.a.createElement(u.a,{basename:"/insights/platform/service-portal"},c.a.createElement(ue,null))),document.getElementById("root"))},8:function(e,t,n){"use strict";n.d(t,"m",function(){return r}),n.d(t,"n",function(){return a}),n.d(t,"v",function(){return o}),n.d(t,"t",function(){return i}),n.d(t,"s",function(){return c}),n.d(t,"q",function(){return l}),n.d(t,"d",function(){return s}),n.d(t,"e",function(){return u}),n.d(t,"g",function(){return d}),n.d(t,"f",function(){return f}),n.d(t,"c",function(){return p}),n.d(t,"o",function(){return m}),n.d(t,"i",function(){return h}),n.d(t,"j",function(){return g}),n.d(t,"k",function(){return E}),n.d(t,"l",function(){return y}),n.d(t,"h",function(){return v}),n.d(t,"p",function(){return L}),n.d(t,"a",function(){return F}),n.d(t,"b",function(){return _}),n.d(t,"u",function(){return I}),n.d(t,"r",function(){return P});var r="FETCH_SERVICE_PLANS",a="FETCH_SERVICE_PLAN_PARAMETERS",o="UPDATE_SERVICE_DATA",i="SUBMIT_SERVICE_ORDER",c="SET_SELECTED_PLAN",l="LIST_ORDERS",s="FETCH_PLATFORM",u="FETCH_PLATFORMS",d="FETCH_PLATFORM_ITEMS",f="FETCH_PLATFORM_ITEM;",p="FETCH_MULTIPLE_PLATFORM_ITEMS",m="FILTER_PLATFORM_ITEMS",h="FETCH_PORTFOLIOS",g="FETCH_PORTFOLIO_ITEM",E="FETCH_PORTFOLIO_ITEMS",y="FETCH_PORTFOLIO_ITEMS_WITH_PORTFOLIO",v="FETCH_PORTFOLIO",L="FILTER_PORTFOLIO_ITEMS",F="ADD_PORTFOLIO",_="ADD_TO_PORTFOLIO",I="UPDATE_PORTFOLIO",P="REMOVE_PORTFOLIO"},99:function(e,t,n){"use strict";n.d(t,"b",function(){return L}),n.d(t,"a",function(){return I});var r=n(34),a=n.n(r),o=n(110),i=n.n(o),c=n(48),l=n.n(c),s=n(1),u=n.n(s),d=n(73),f=n(0),p=n.n(f),m=n(32),h=n(152),g=n(105),E=n(265),y=n(266),v=n(267),L=function(e){var t=e.items,n=l()(e,["items"]);return u.a.createElement(h.a,{gutter:"md"},u.a.createElement(g.a,{sm:12,style:{padding:24}},u.a.createElement(h.a,{gutter:"md"},i()(Array(t)).map(function(e,t){return u.a.createElement(g.a,{sm:12,md:6,lg:3,key:t},u.a.createElement(E.a,null,u.a.createElement(y.a,null,u.a.createElement(d.a,a()({height:160,width:300,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},n),u.a.createElement("rect",{x:"2",y:"99",rx:"3",ry:"3",width:"300",height:"6.4"}),u.a.createElement("rect",{x:"2",y:"119.72",rx:"3",ry:"3",width:"290",height:"5.76"}),u.a.createElement("rect",{x:"2",y:"139",rx:"3",ry:"3",width:"201",height:"6.4"}),u.a.createElement("rect",{x:"-2.16",y:"0.67",rx:"0",ry:"0",width:"271.6",height:"82.74"}),u.a.createElement("rect",{x:"136.84",y:"37.67",rx:"0",ry:"0",width:"6",height:"3"})))))}))))};L.propTypes={items:p.a.number},L.defaultProps={items:5};var F=function(e){var t=e.items,n=l()(e,["items"]);return u.a.createElement(h.a,{gutter:"md"},u.a.createElement(g.a,{sm:12},u.a.createElement(d.a,a()({height:16,width:300,speed:2,primaryColor:"#FFFFFF",secondaryColor:"#FFFFFF"},n),u.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"420",height:"16"}))),u.a.createElement(g.a,{sm:12,style:{paddingLeft:16,paddingRight:16}},u.a.createElement(L,{items:t})))};F.propTypes={items:p.a.number},F.defaultProps={items:5};var _=function(e){var t=e.items,n=l()(e,["items"]);return i()(Array(t)).map(function(e,t){return u.a.createElement(v.a,{key:"loader-placeholder-".concat(t),style:{cursor:"pointer"}},u.a.createElement("div",{style:{overflow:"hidden"}},u.a.createElement(d.a,a()({height:16,width:300,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},n),u.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"420",height:"20"}))))})};_.propTypes={items:p.a.number},_.defaultProps={items:5};var I=function(e){return u.a.createElement(m.Main,{style:{marginLeft:0,padding:0}},u.a.createElement(d.a,a()({height:16,width:300,speed:2,primaryColor:"#FFFFFF",secondaryColor:"#FFFFFF"},e),u.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"420",height:"10"})),u.a.createElement(L,null))}}});
//# sourceMappingURL=../sourcemaps/App.js.map