(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{337:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(27),c=n.n(o),i=n(47),l=n.n(i),u=n(83),s=n.n(u),p=n(84),f=n.n(p),m=n(0),d=n.n(m),b=n(3),v=n.n(b),y=n(48),h=n(25),g=n(85);function O(){var e=f()(["\n  pointer-events: ",";\n"]);return O=function(){return e},e}function E(){var e=f()(["\n  pointer-events: ",";\n"]);return E=function(){return e},e}var j=Object(g.b)(y.b)(E(),(function(e){return e.isDisabled?"none":"initial"})),P=Object(g.b)(y.c)(O(),(function(e){return e.isDisabled?"none":"initial"})),T=function(e,t,n){var r=Object.entries(t).map((function(e){var t=s()(e,2),n=t[0],r=t[1];return"".concat(n,"=").concat(r)})).join("&");return n?"".concat(e).concat(r.length>0?"&".concat(r):""):r.length>0?"?".concat(r):""},_=function(e){var t=e.pathname,n=e.searchParams,r=e.nav,a=e.preserveSearch,o=l()(e,["pathname","searchParams","nav","preserveSearch"]),i=Object(h.h)().search,u=r?P:j,s={pathname:t,search:T(i,n,a)};return d.a.createElement(u,c()({to:s},o))};_.propTypes={pathname:v.a.string.isRequired,searchParams:v.a.shape(a()({},v.a.string,v.a.string)),nav:v.a.bool,preserveSearch:v.a.bool},_.defaultProps={nav:!1,preserveSearch:!1,searchParams:{}},t.a=_},339:function(e,t,n){"use strict";var r=n(367);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(r.a)(e,t,n)}},341:function(e,t,n){"use strict";var r=n(27),a=n.n(r),o=n(47),c=n.n(o),i=n(0),l=n.n(i),u=n(3),s=n.n(u),p=n(86),f=n(152),m=n(153),d=n(373),b=n(414),v=n(84),y=n.n(v),h=n(85),g=n(349),O=n.n(g),E=n(157),j=n.n(E),P=n(386);function T(){var e=y()(["\n  z-index: 1000;\n  fill: #72767b;\n"]);return T=function(){return e},e}function _(){var e=y()(["\n  z-index: 1000;\n  fill: #72767b;\n  :hover {\n    fill: var(--pf-global--Color--100);\n    cursor: pointer;\n  }\n"]);return _=function(){return e},e}function I(){var e=y()(["\n  position: absolute;\n  right: 8px;\n  top: 8px;\n"]);return I=function(){return e},e}function w(){var e=y()(["\n  position: absolute;\n  width: 300px;\n  background: transparent;\n"]);return w=function(){return e},e}function D(){var e=y()(["\n  position: relative;\n  width: 300px;\n  height: 36px;\n"]);return D=function(){return e},e}var L=h.b.div(D()),F=Object(h.b)(P.TextInput)(w()),N=h.b.span(I()),R=Object(h.b)(j.a)(_()),x=Object(h.b)(O.a)(T()),C=function(e){var t=e.searchValue,n=e.onFilterChange,r=e.placeholder,a=e.isClearable;return l.a.createElement(d.ToolbarItem,null,l.a.createElement(L,null,l.a.createElement(F,{placeholder:r,value:t,type:"text",onChange:n,"aria-label":r}),l.a.createElement(N,null,a&&t&&l.a.createElement(R,{width:"16",height:"16",onClick:function(){return n("")}})||l.a.createElement(x,null))))};C.propTypes={onFilterChange:s.a.func.isRequired,placeholder:s.a.string,searchValue:s.a.string,isClearable:s.a.bool},C.defaultProps={searchValue:"",isClearable:!1};var S=C,k=n(361),q=n(362),B=n(337),A=n(357);n.d(t,"b",(function(){return M}));var V=function(e){var t=e.title,n=c()(e,["title"]);return l.a.createElement(p.Button,n,t)};V.propTypes={title:s.a.string.isRequired};var G={TopToolbar:k.b,TopToolbarTitle:k.a,Toolbar:function(e){var t=a()({},e);return l.a.createElement(A.a,a()({className:"pf-u-pr-lg"},t))},ToolbarGroup:b.ToolbarGroup,ToolbarItem:d.ToolbarItem,FilterToolbarItem:S,Link:B.a,Level:f.Level,LevelItem:m.LevelItem,Button:V,AppTabs:q.a},M={TOP_TOOLBAR:"TopToolbar",TOP_TOOLBAR_TITLE:"TopToolbarTitle",TOOLBAR:"Toolbar",TOOLBAR_ITEM:"ToolbarItem",TOOLBAR_GROUP:"ToolbarGroup",FILTER_TOOLBAR_ITEM:"FilterToolbarItem",LINK:"Link",BUTTON:"Button",LEVEL:"Level",LEVEL_ITEM:"LevelItem",TABS:"AppTabs"};t.a=G},343:function(e,t,n){"use strict";var r=n(27),a=n.n(r),o=n(47),c=n.n(o),i=n(0),l=n.n(i),u=n(3),s=n.n(u),p=n(367),f=n(155),m=n(49),d=function(e){var t=e.meta,n=t.limit,r=t.count,o=t.offset,i=e.apiProps,u=e.apiRequest,s=e.className,d=e.isCompact,b=c()(e,["meta","apiProps","apiRequest","className","isCompact"]);return l.a.createElement("div",{className:s},l.a.createElement(f.Pagination,a()({perPage:n||50,itemCount:r||0,onPerPageSelect:function(e,t){return u(i,{offset:o,limit:t})},page:Object(m.b)(n,o),onSetPage:function(e,t,r){var a={offset:Object(m.c)(t,n),limit:n},o=function(){return u(i,a)};return r?Object(p.a)(o,250)():o()},direction:"down",isCompact:d},b)))};d.propTypes={meta:s.a.shape({count:s.a.number,limit:s.a.number.isRequired,offset:s.a.number.isRequired}),apiRequest:s.a.func.isRequired,apiProps:s.a.any,className:s.a.string,isCompact:s.a.bool},d.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1},t.a=d},344:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(415),c=n.n(o),i=n(25);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=Object(i.g)();return u({},t,{push:function(n){return e?t.push(function(e){return"string"==typeof e?e.split("?")[0]:"object"===c()(e)?u({},e,{search:void 0}):e}(n)):t.push(n)}})}},345:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"getPlatforms",(function(){return b})),n.d(r,"getPlatform",(function(){return v})),n.d(r,"getPlatformItems",(function(){return y})),n.d(r,"getPlatformInventories",(function(){return h})),n.d(r,"getServiceOffering",(function(){return g}));var a=n(1),o=n.n(a),c=n(2),i=n(83),l=n.n(i),u=n(57),s=n(12),p=n(49);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var m=Object(u.a)(),d=Object(u.b)(),b=function(){return d.post("".concat(s.h,"/graphql"),{query:'\nquery {\n  application_types (filter: { name: "/insights/platform/catalog" }) {\n    id\n    name\n    sources {\n      id\n      name\n      source_type_id\n    }\n  }\n}'}).then((function(e){return e.data.application_types})).then((function(e){return l()(e,1)[0].sources}))},v=function(e){return m.get("".concat(s.h,"/sources/").concat(e))},y=function(e,t,n){var r=t?"&filter[name][contains_i]=".concat(t):"";return e?m.get("".concat(s.i,"/sources/").concat(e,"/service_offerings?filter[archived_at][nil]").concat(r).concat(n?"&limit=".concat(n.limit,"&offset=").concat(n.offset):"")):m.get("".concat(s.i,"/service_offerings"))},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p.a;return e?m.get("".concat(s.i,"/sources/").concat(e,"/service_inventories?filter[name][contains_i]=").concat(t).concat(n?"&limit=".concat(n.limit,"&offset=").concat(n.offset):"")):m.get("".concat(s.i,"/service_inventories?limit=").concat(n.limit,"&offset=").concat(n.offset))},g=function(e,t){return Promise.all([m.get("".concat(s.i,"/service_offerings/").concat(e)),m.get("".concat(s.h,"/sources/").concat(t)).then((function(e){return m.get("".concat(s.h,"/source_types/").concat(e.source_type_id)).then((function(t){var n=t.icon_url;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{icon_url:n})}))}))]).then((function(e){var t=l()(e,2);return{service:t[0],source:t[1]}}))};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"c",(function(){return j})),n.d(t,"b",(function(){return P})),n.d(t,"d",(function(){return T})),n.d(t,"a",(function(){return _})),n.d(t,"e",(function(){return I}));var j=function(){return function(e){return e((function(e){return e({type:"".concat(c.j,"_PENDING")}),b().then((function(t){return e({type:"".concat(c.j,"_FULFILLED"),payload:t})})).catch((function(t){return e({type:"".concat(c.j,"_REJECTED"),payload:t})}))}))}},P=function(e,t,n){return{type:c.m,payload:y(e,t,n),meta:E({platformId:e,filter:t},n)}},T=function(e){return{type:c.i,payload:v(e)}},_=function(e,t,n){return{type:c.k,payload:h(e,t,n)}},I=function(){return{type:c.u,payload:g.apply(r,arguments)}}},350:function(e,t,n){"use strict";var r=n(83),a=n.n(r),o=n(84),c=n.n(o),i=n(0),l=n.n(i),u=n(3),s=n.n(u),p=n(85),f=n(34),m=n(50),d=n(359),b=n.n(d),v=n(371);function y(){var e=c()(["\n  height: ",";\n  display: ",";\n  float: ",";\n  width: ",";\n"]);return y=function(){return e},e}var h=Object(p.b)(v.LazyLoadImage)(y(),(function(e){var t=e.height;return e.hidden?"0px":"".concat(t,"px")||!1}),(function(e){return e.hidden?"none":"inherit"}),(function(e){return e.hidden?"left":"inherit"}),(function(e){return e.hidden?0:"inherit"}));function g(){var e=c()(["\n  display: inline-block;\n  height: ",";\n"]);return g=function(){return e},e}var O=p.b.div(g(),(function(e){var t=e.height;return"".concat(t,"px")})),E=function(e){var t=e.src,n=e.height,r=e.sourceId,o=Object(i.useState)(!1),c=a()(o,2),u=c[0],s=c[1],p=Object(i.useState)(!1),d=a()(p,2),v=d[0],y=d[1],g=Object(f.useSelector)((function(e){return e.platformReducer.platformIconMapping})),E=r?g[r]:b.a;return l.a.createElement(O,{height:n},!u&&l.a.createElement(m.c,{height:n}),l.a.createElement(h,{threshold:2e3,delayTime:0,hidden:!u,height:u?n:0,onError:function(){return y(!0)},onLoad:function(){return s(!0)},src:!t||v?E:t}))};E.propTypes={src:s.a.string,platformId:s.a.string,style:s.a.object,height:s.a.number,sourceId:s.a.string},E.defaultProps={style:{},height:40};t.a=E},351:function(e,t,n){"use strict";var r=n(27),a=n.n(r),o=n(47),c=n.n(o),i=n(0),l=n.n(i),u=n(3),s=n.n(u),p=n(337),f=function(e){var t=e.children,n=e.pathname,r=c()(e,["children","pathname"]);return n?l.a.createElement(p.a,a()({pathname:n},r),t):t};f.propTypes={pathname:s.a.string,children:s.a.oneOfType([s.a.node,s.a.arrayOf(s.a.node)]).isRequired},t.a=f},356:function(e,t,n){"use strict";var r=n(27),a=n.n(r),o=n(47),c=n.n(o),i=n(0),l=n.n(i),u=n(3),s=n.n(u),p=n(341),f=Object(i.createContext)(),m=function(e){var t=e.component,n=c()(e,["component"]);return l.a.createElement(f.Consumer,null,(function(e){var r=e.componentMapper,a="string"==typeof t?r[t]:t;return l.a.createElement(a,n)}))};m.propTypes={component:s.a.oneOfType([s.a.string,s.a.node,s.a.func,s.a.element]).isRequired};var d=function e(t){return t.hidden?null:t.map((function(t){var n=t.fields,r=t.key,o=c()(t,["fields","key"]);return n?l.a.createElement(m,a()({key:r},o),e(n)):l.a.createElement(m,a()({key:r},o))}))},b=function(e){var t=e.schema,n=e.componentMapper;return l.a.createElement(f.Provider,{value:{render:d,componentMapper:n}},d(t.fields))};b.propTypes={schema:s.a.shape({fields:s.a.array.isRequired}).isRequired,componentMapper:s.a.object},b.defaultProps={componentMapper:p.a},t.a=b},357:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n(84),a=n.n(r),o=n(85),c=n(404),i=n(152);function l(){var e=a()(["\n  @media screen and (min-width: 768px) {\n    flex-wrap: nowrap;\n  }\n"]);return l=function(){return e},e}function u(){var e=a()(["\n  background-color: #ffffff;\n  .pf-c-breadcrumb__item {\n    .active {\n      color: var(--pf-c-breadcrumb__item--Color);\n      text-decoration: none;\n      pointer-events: none;\n    }\n  }\n  h2 {\n    margin-bottom: 0 !important;\n  }\n  .top-toolbar-title {\n    min-width: 200px;\n  }\n  .top-toolbar-title-description {\n    word-break: break-word;\n  }\n"]);return u=function(){return e},e}function s(){var e=a()(["\n  background-color: #ffffff;\n  h2 {\n    margin-bottom: 0 !important;\n  }\n  position: relative;\n  top: 1px;\n"]);return s=function(){return e},e}var p=Object(o.b)(c.Toolbar)(s()),f=o.b.div(u()),m=Object(o.b)(i.Level)(l())},358:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(384),c=n(385),i=n(34),l=n(351);t.a=function(){var e=Object(i.useSelector)((function(e){return e.breadcrumbsReducer.fragments}));return e.length<=1?null:a.a.createElement(o.Breadcrumb,null,e.map((function(t,n){var r=t.title,o=t.pathname,i=t.searchParams;return a.a.createElement(l.a,{pathname:e.length!==n+1?o:void 0,searchParams:i,nav:!0,exact:!0,key:o,className:"pf-c-breadcrumb__item"},a.a.createElement(c.BreadcrumbItem,{isActive:e.length===n+1},r))})))}},359:function(e,t,n){e.exports=n.p+"fonts/card-icon-default.svg"},361:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n(27),a=n.n(r),o=n(47),c=n.n(o),i=n(0),l=n.n(i),u=n(3),s=n.n(u),p=n(153),f=n(21),m=n(39),d=n(413),b=n(50),v=n(358),y=n(357),h=function(e){var t=e.children,n=e.paddingBottom,r=e.breadcrumbs,o=(e.breadcrumbsSpacing,c()(e,["children","paddingBottom","breadcrumbs","breadcrumbsSpacing"]));return l.a.createElement(y.c,a()({className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg ".concat(n?"pf-u-pb-lg":"")},o),r&&l.a.createElement("div",{className:"pf-u-mb-md"}," ",l.a.createElement(v.a,null)),t)};h.propTypes={children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]).isRequired,paddingBottom:s.a.bool,breadcrumbs:s.a.bool,breadcrumbsSpacing:s.a.bool},h.defaultProps={paddingBottom:!0,breadcrumbs:!0},t.b=h;var g=function(e){var t=e.title,n=e.description,r=e.children,o=e.noData,u=c()(e,["title","description","children","noData"]);return l.a.createElement(i.Fragment,null,l.a.createElement(y.b,a()({className:Object(d.a)({"pf-u-mb-lg":!o})},u),l.a.createElement(p.LevelItem,null,l.a.createElement(m.TextContent,{className:"top-toolbar-title"},l.a.createElement(f.Text,{component:f.TextVariants.h2,className:"pf-u-m-0 pf-u-mr-md"},t),n&&l.a.createElement(f.Text,{className:"top-toolbar-title-description",component:f.TextVariants.p},n))),r))};g.propTypes={title:s.a.node,description:s.a.node,children:s.a.oneOfType([s.a.node,s.a.arrayOf(s.a.node)]),noData:s.a.bool},g.defaultProps={title:l.a.createElement(b.h,null)}},362:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(3),c=n.n(o),i=n(406),l=n(407),u=n(25),s=n(344),p=function(e){var t=e.tabItems,n=Object(s.a)().push,r=Object(u.h)(),o=r.pathname,c=r.search,p=t.find((function(e){var t=e.name;return o.includes(t)}));return a.a.createElement(i.Tabs,{activeKey:p?p.eventKey:0,onSelect:function(e,r){return n({pathname:t[r].name,search:c})}},t.map((function(e){return a.a.createElement(l.Tab,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name})})))};p.propTypes={tabItems:c.a.array.isRequired},t.a=p},393:function(e,t,n){"use strict";var r=n(47),a=n.n(r),o=n(83),c=n.n(o),i=n(1),l=n.n(i),u=n(0),s=n.n(u),p=n(40),f=n(2),m=n(42),d=n.n(m),b=n(57),v=n(12),y=n(49);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=Object(b.c)(),E=(Object(b.d)(),Object(b.f)()),j=(Object(b.h)(),Object(b.a)());function P(e){return E.listServicePlans(e)}var T=function(e){return j.get("".concat(v.c,"/order_items?").concat(e.map((function(e){return"filter[order_id][]=".concat(e)})).join("&")))},_=function(e){return j.get("".concat(v.c,"/portfolio_items?").concat(e.map((function(e){return"filter[id][]=".concat(e)})).join("&")))};var I=n(3),w=n.n(I),D=n(48),L=n(51),F=function(e){var t=e.id,n=e.dispatch;return s.a.createElement(u.Fragment,null,"You can track the progress of Order # ",t," in your"," ",s.a.createElement(D.b,{onClick:function(){return n(Object(p.clearNotifications)())},to:L.k},"Orders")," ","page.")};F.propTypes={id:w.a.string.isRequired,dispatch:w.a.func.isRequired};var N=F;function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"d",(function(){return C})),n.d(t,"e",(function(){return S})),n.d(t,"a",(function(){return k})),n.d(t,"c",(function(){return q})),n.d(t,"b",(function(){return B}));var C=function(e){return{type:f.v,payload:P(e)}},S=function(e){return function(t){return t({type:f.S,payload:(n=e,d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.service_parameters,o=r.providerControlParameters,c=a()(r,["providerControlParameters"]),i=a()(n,["service_parameters"]),e.next=3,d.a.awrap(O.createOrder());case 3:return l=e.sent,(u={}).count=1,u=g({},u,{},i,{service_parameters:c,provider_control_parameters:o||{}}),e.next=9,d.a.awrap(O.addToOrder(l.id,u));case 9:return e.abrupt("return",O.submitOrder(l.id));case 10:case"end":return e.stop()}}))).then((function(e){var n=e.id;return t(Object(p.addNotification)({variant:"success",title:"Your order has been accepted successfully",description:s.a.createElement(N,{id:n,dispatch:t}),dismissable:!0}))}))});var n,r,o,c,i,l,u}},k=function(e){return function(t,n){t({type:"".concat(f.d,"_PENDING")});var r=n().orderReducer.orderDetail;return function(e){return O.cancelOrder(e)}(e).then((function(){return r.order.state="Canceled",r.approvalRequest&&r.approvalRequest.length>0&&(r.approvalRequest[0].state="canceled"),t({type:f.N,payload:x({},r)}),r})).then((function(e){return t(Object(p.addNotification)({variant:"success",title:"Your order has been canceled successfully",description:"Order ".concat("Order #".concat(e.order.id)," was canceled."),dismissable:!0}))})).then((function(){return t({type:"".concat(f.d,"_FULFILLED")})})).catch((function(e){t({type:"".concat(f.d,"_REJECTED"),payload:e})}))}},q=function(e,t){return function(n){var r=Object.entries(e).filter((function(e){var t=c()(e,2)[1];return t&&t.length>0})).map((function(e){var t=c()(e,2),n=t[0],r=t[1];return Array.isArray(r)?r.map((function(e){return"filter[".concat(n,"][]=").concat(e)})).join("&"):"filter[".concat(n,"][contains_i]=").concat(r)})).join("&");return n({type:"".concat(f.g,"_PENDING")}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y.a;return j.get("".concat(v.c,"/orders?").concat(e,"&limit=").concat(t.limit,"&offset=").concat(t.offset)).then((function(e){return T(e.data.map((function(e){return e.id}))).then((function(t){return _(t.data.map((function(e){return e.portfolio_item_id}))).then((function(n){return g({portfolioItems:n},e,{data:e.data.map((function(e){return g({},e,{orderItems:t.data.filter((function(t){return t.order_id===e.id}))})}))})}))}))}))}(r,t).then((function(e){var t=e.portfolioItems,o=a()(e,["portfolioItems"]);return n({type:f.O,payload:t}),n({type:"".concat(f.g,"_FULFILLED"),meta:{filter:r},payload:o})})).catch((function(e){return n({type:"".concat(f.g,"_REJECTED"),payload:e})}))}},B=function(e){return function(t){return t({type:"".concat(f.N,"_PENDING")}),function(e){return Promise.all([j.get("".concat(v.c,"/orders/").concat(e.order)),j.get("".concat(v.c,"/order_items/").concat(e["order-item"])),j.get("".concat(v.c,"/portfolio_items/").concat(e["portfolio-item"])),j.get("".concat(v.h,"/sources/").concat(e.platform)),j.get("".concat(v.c,"/order_items/").concat(e["order-item"],"/progress_messages")),j.get("".concat(v.c,"/portfolios/").concat(e.portfolio)),j.get("".concat(v.c,"/order_items/").concat(e["order-item"],"/approval_requests"))])}(e).then((function(e){var n=c()(e,7),r=n[0],a=n[1],o=n[2],i=n[3],l=n[4],u=n[5],s=n[6];return t({type:"".concat(f.N,"_FULFILLED"),payload:{order:r,orderItem:a,portfolioItem:o,platform:i,progressMessages:l,portfolio:u,approvalRequest:s}})})).catch((function(e){return t({type:"".concat(f.N,"_REJECTED"),payload:e})}))}}},624:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(459),c=n(356),i=n(341),l=function(){return{fields:[{component:i.b.TOP_TOOLBAR,className:"orders bg-fill pf-u-p-lg",key:"orders-toolbar",fields:[{component:i.b.TOP_TOOLBAR_TITLE,key:"orders-toolbar-title",title:"Orders",className:""}]}]}},u=n(83),s=n.n(u),p=n(1),f=n.n(p),m=n(34),d=n(72),b=n(41),v=n(35),y=n(376),h=n(89),g=n(416),O=n(418),E=n(419),j=n(485),P=n(420),T=n(86),_=n(375),I=n(570),w=n(611),D=n(612),L=n(349),F=n.n(L),N=n(393),R=n(345),x=n(50),C=n(3),S=n.n(C),k=n(136),q=n(131),B=n(135),A=n(134),V=n(152),G=n(153),M=n(365),J=n(366),K=n(21),U=n(39),z=n(355),Y=n(163),H=n.n(Y),Q=n(350),W=n(12),X=function(e){var t=e.orderItems;return t[0]&&"".concat(W.c,"/portfolio_items/").concat(t[0].portfolio_item_id,"/icon")},Z=function(e,t){var n=e.orderItems,r=e.id,a=n[0]&&t.find((function(e){var t=e.id;return n[0].portfolio_item_id===t}));return a?a.name:"Order ".concat(r)},$=n(337),ee=n(51),te=Object(r.memo)((function(e){var t=e.item,n=Object(m.useSelector)((function(e){var n,r,a,o=e.portfolioReducer.portfolioItems.data,c=(n=o,r=t.orderItems,(a=r[0]&&n.find((function(e){var t=e.id;return r[0].portfolio_item_id===t})))?{orderPlatform:a.service_offering_source_ref,orderPortfolio:a.portfolio_id}:{});return{orderPlatform:c.orderPlatform,orderPortfolio:c.orderPortfolio,orderName:Z(t,o)}})),r=n.orderPlatform,o=n.orderPortfolio,c=n.orderName,i=t.orderItems[0]&&t.orderItems[0]||{},l={order:t.id,"order-item":i.id,"portfolio-item":i.portfolio_item_id,platform:r,portfolio:o};return a.a.createElement(a.a.Fragment,null,a.a.createElement(q.DataListItem,{"aria-labelledby":"".concat(t.id,"-expand"),className:"data-list-expand-fix"},a.a.createElement(A.DataListItemRow,null,a.a.createElement(B.DataListItemCells,{dataListCells:[a.a.createElement(k.DataListCell,{key:"1"},a.a.createElement(M.Split,{gutter:"sm"},a.a.createElement(J.SplitItem,null,a.a.createElement(Q.a,{height:60,src:X(t),sourceId:r})),a.a.createElement(J.SplitItem,{isFilled:!0},a.a.createElement(U.TextContent,null,a.a.createElement(b.Grid,{gutter:"sm",className:"pf-u-gg-md"},a.a.createElement(v.GridItem,null,a.a.createElement(V.Level,null,a.a.createElement(G.LevelItem,null,a.a.createElement(K.Text,{className:"pf-u-mb-0",component:K.TextVariants.h5},a.a.createElement($.a,{pathname:ee.m,searchParams:l},c," # ",t.id))),a.a.createElement(G.LevelItem,null,a.a.createElement($.a,{pathname:ee.l,searchParams:l},"Failed"===t.state&&a.a.createElement(H.a,{className:"pf-u-mr-sm icon-danger-fill"}),t.state)))),a.a.createElement(v.GridItem,null,a.a.createElement(V.Level,null,a.a.createElement(G.LevelItem,null,a.a.createElement(K.Text,{className:"pf-u-mb-0",component:K.TextVariants.small},a.a.createElement(z.DateFormat,{date:t.created_at,variant:"relative"}))),a.a.createElement(G.LevelItem,null,a.a.createElement(K.Text,{className:"pf-u-mb-0",component:K.TextVariants.small},"Ordered by ",t.owner)),a.a.createElement(G.LevelItem,null,a.a.createElement(K.Text,{className:"pf-u-mb-0",component:K.TextVariants.small},a.a.createElement(z.DateFormat,{date:t.orderItems[0]&&t.orderItems[0].updated_at,variant:"relative"}))))))))))]}))))}),(function(e,t){return e.id===t.id}));te.propTypes={item:S.a.object.isRequired};var ne=te,re=n(343),ae=n(339),oe=n(49);function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var le=Object(ae.a)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:oe.a,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;r(!0),n(Object(N.c)(e,t)).then((function(){return r(!1)}))}),1e3),ue={isOpen:!1,isFetching:!0,isFiltering:!1,filterType:"state",filters:{state:[],owner:""}},se=function(e,t){switch(t.type){case"setFetching":return ie({},e,{isFetching:t.payload});case"setFilterValue":return ie({},e,{filters:(n=t.payload,r=e.filterType,a=e.filters,ie({},a,f()({},r,n)))});case"replaceFilterChip":return ie({},e,{filters:t.payload});case"setFilteringFlag":return ie({},e,{isFiltering:t.payload});case"setFilterType":return ie({},e,{filterType:t.payload})}var n,r,a;return e},pe=function(){var e=Object(r.useReducer)(se,ue),t=s()(e,2),n=t[0],o=n.isFetching,c=n.isFiltering,i=n.filterType,l=n.filters,u=t[1],p=Object(m.useSelector)((function(e){return e.orderReducer.orders})),L=p.data,C=p.meta,S=Object(m.useDispatch)();Object(r.useEffect)((function(){u({type:"setFetching",payload:!0}),Promise.all([S(Object(N.c)(l,C)),S(Object(R.c)())]).then((function(){return u({type:"setFetching",payload:!1})}))}),[]);var k=function(e,t){return u({type:"setFetching",payload:!0}),S(Object(N.c)(l,t)).then((function(){return u({type:"setFetching",payload:!1})})).catch((function(){return u({type:"setFetching",payload:!1})}))},q=function(e){u({type:"setFilterValue",payload:e}),le(ie({},l,f()({},i,e)),C,S,(function(e){return u({type:"setFilteringFlag",payload:e})}))};return a.a.createElement(b.Grid,{gutter:"md"},a.a.createElement(v.GridItem,null,a.a.createElement(_.Section,{type:"content"},!C.noData&&a.a.createElement(I.PrimaryToolbar,{activeFiltersConfig:{filters:Object.entries(l).filter((function(e){var t=s()(e,2)[1];return t&&t.length>0})).map((function(e){var t=s()(e,2),n=t[0],r=t[1];return{category:n,type:n,chips:Array.isArray(r)?r.map((function(e){return{name:e}})):[{name:r}]}})),onDelete:function(e,t,n){var r=s()(t,1)[0];if(n)return u({type:"replaceFilterChip",payload:ue.filters}),le(ue.filters,C,S,(function(e){return u({type:"setFilteringFlag",payload:e})}));var a=ie({},l);"state"===r.type?a[r.type]=a[r.type].filter((function(e){return e!==r.chips[0].name})):a[r.type]="",u({type:"replaceFilterChip",payload:a}),le(a,C,S,(function(e){return u({type:"setFilteringFlag",payload:e})}))}},filterConfig:{onChange:function(e,t){return u({type:"setFilterType",payload:t})},value:i,items:[{filterValues:{items:[{value:"Failed",label:"Failed"},{value:"Completed",label:"Completed"},{value:"Approval Pending",label:"Approval Pending"}],value:l.state,onChange:function(e,t){return q(t)}},label:"State",value:"state",type:"checkbox"},{filterValues:{value:l.owner,onChange:function(e,t){return q(t)}},label:"Owner",value:"owner"}]},pagination:a.a.createElement(re.a,{isDisabled:o||c,apiRequest:k,meta:C,isCompact:!0})}),a.a.createElement(d.DataList,{"aria-label":"order-list"},c||o?a.a.createElement(x.d,null):L.length>0?L.map((function(e,t){return a.a.createElement(ne,{key:e.id,index:t,item:e})})):a.a.createElement(w.EmptyTable,null,a.a.createElement(h.Bullseye,null,a.a.createElement(g.EmptyState,null,a.a.createElement(h.Bullseye,null,a.a.createElement(O.EmptyStateIcon,{icon:F.a})),a.a.createElement(y.Title,{size:"lg"},C.noData?"No orders":"No results found"),a.a.createElement(E.EmptyStateBody,null,C.noData?"No orders have been created.":"No results match the filter criteria. Remove all filters or clear all filters to show results."),a.a.createElement(P.EmptyStateSecondaryActions,null,!C.noData&&a.a.createElement(T.Button,{variant:"link",onClick:function(){u({type:"setFilteringFlag",payload:!0}),q("")}},"Clear all filters")))))),a.a.createElement(D.TableToolbar,null,a.a.createElement("div",{className:"bottom-pagination-container"},a.a.createElement(j.Flex,{className:"example-border",breakpointMods:[{modifier:"justify-content-flex-end"}]},C.count>0&&a.a.createElement(re.a,{className:"pf-u-mt-0",isDisabled:o||c,apiRequest:k,meta:C})))))))};t.default=function(){return Object(r.useEffect)((function(){insights.chrome.appNavClick({id:"orders",secondaryNav:!0})}),[]),a.a.createElement(o.Stack,null,a.a.createElement(c.a,{schema:l()}),a.a.createElement(pe,null))}}}]);
//# sourceMappingURL=../sourcemaps/orders.js.map