(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{377:function(e,t,n){"use strict";var r=n(92),a=n.n(r),o=n(26),c=n.n(o),i=n(0),l=n.n(i),u=n(2),s=n.n(u),p=n(50),f=n(166),d=n(167),m=n(397),b=n(439),y=n(18),v=n.n(y),h=n(19),g=n(386),O=n.n(g),E=n(170),j=n.n(E),P=n(412);function T(){var e=v()(["\n  z-index: 1000;\n  fill: #72767b;\n"]);return T=function(){return e},e}function _(){var e=v()(["\n  z-index: 1000;\n  fill: #72767b;\n  :hover {\n    fill: var(--pf-global--Color--100);\n    cursor: pointer;\n  }\n"]);return _=function(){return e},e}function w(){var e=v()(["\n  position: absolute;\n  right: 8px;\n  top: 8px;\n"]);return w=function(){return e},e}function I(){var e=v()(["\n  position: absolute;\n  width: 300px;\n  background: transparent;\n"]);return I=function(){return e},e}function L(){var e=v()(["\n  position: relative;\n  width: 300px;\n  height: 36px;\n"]);return L=function(){return e},e}var D=h.b.div(L()),F=Object(h.b)(P.TextInput)(I()),C=h.b.span(w()),N=Object(h.b)(j.a)(_()),R=Object(h.b)(O.a)(T()),x=function(e){var t=e.searchValue,n=e.onFilterChange,r=e.placeholder,a=e.isClearable;return(l.a.createElement(m.ToolbarItem,null,l.a.createElement(D,null,l.a.createElement(F,{placeholder:r,value:t,type:"text",onChange:n,"aria-label":r}),l.a.createElement(C,null,a&&t&&l.a.createElement(N,{width:"16",height:"16",onClick:function(){return n("")}})||l.a.createElement(R,null)))))};x.propTypes={onFilterChange:s.a.func.isRequired,placeholder:s.a.string,searchValue:s.a.string,isClearable:s.a.bool},x.defaultProps={searchValue:"",isClearable:!1};var k=x,S=n(392),q=n(393),B=n(93),A=n(382);n.d(t,"b",(function(){return M}));var V=function(e){var t=e.title,n=c()(e,["title"]);return(l.a.createElement(p.Button,n,t))};V.propTypes={title:s.a.string.isRequired};var G={TopToolbar:S.b,TopToolbarTitle:S.a,Toolbar:function(e){var t=a()({},e);return(l.a.createElement(A.a,a()({className:"pf-u-pr-lg"},t)))},ToolbarGroup:b.ToolbarGroup,ToolbarItem:m.ToolbarItem,FilterToolbarItem:k,Link:B.a,Level:f.Level,LevelItem:d.LevelItem,Button:V,AppTabs:q.a},M={TOP_TOOLBAR:"TopToolbar",TOP_TOOLBAR_TITLE:"TopToolbarTitle",TOOLBAR:"Toolbar",TOOLBAR_ITEM:"ToolbarItem",TOOLBAR_GROUP:"ToolbarGroup",FILTER_TOOLBAR_ITEM:"FilterToolbarItem",LINK:"Link",BUTTON:"Button",LEVEL:"Level",LEVEL_ITEM:"LevelItem",TABS:"AppTabs"};t.a=G},378:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(413),c=n.n(o),i=n(15);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=Object(i.g)();return u({},t,{push:function(n){return e?t.push(function(e){return"string"==typeof e?e.split("?")[0]:"object"===c()(e)?u({},e,{search:void 0}):e}(n)):t.push(n)}})}},379:function(e,t,n){"use strict";var r=n(404);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(r.a)(e,t,n)}},381:function(e,t,n){"use strict";var r=n(92),a=n.n(r),o=n(26),c=n.n(o),i=n(0),l=n.n(i),u=n(2),s=n.n(u),p=n(404),f=n(169),d=n(49),m=function(e){var t=e.meta,n=t.limit,r=t.count,o=t.offset,i=e.apiProps,u=e.apiRequest,s=e.className,m=e.isCompact,b=c()(e,["meta","apiProps","apiRequest","className","isCompact"]);return l.a.createElement("div",{className:s},l.a.createElement(f.Pagination,a()({perPage:n||50,itemCount:r||0,onPerPageSelect:function(e,t){return u(i,{offset:o,limit:t})},page:Object(d.b)(n,o),onSetPage:function(e,t,r){var a={offset:Object(d.c)(t,n),limit:n},o=function(){return u(i,a)};return r?Object(p.a)(o,250)():o()},direction:"down",isCompact:m},b)))};m.propTypes={meta:s.a.shape({count:s.a.number,limit:s.a.number.isRequired,offset:s.a.number.isRequired}),apiRequest:s.a.func.isRequired,apiProps:s.a.any,className:s.a.string,isCompact:s.a.bool},m.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1},t.a=m},382:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n(18),a=n.n(r),o=n(19),c=n(425),i=n(166);function l(){var e=a()(["\n  @media screen and (min-width: 768px) {\n    flex-wrap: nowrap;\n  }\n"]);return l=function(){return e},e}function u(){var e=a()(["\n  background-color: #ffffff;\n  .pf-c-breadcrumb__item {\n    .active {\n      color: var(--pf-c-breadcrumb__item--Color);\n      text-decoration: none;\n      pointer-events: none;\n    }\n  }\n  h2 {\n    margin-bottom: 0 !important;\n  }\n  .top-toolbar-title {\n    min-width: 200px;\n  }\n  .top-toolbar-title-description {\n    word-break: break-word;\n  }\n"]);return u=function(){return e},e}function s(){var e=a()(["\n  background-color: #ffffff;\n  h2 {\n    margin-bottom: 0 !important;\n  }\n  position: relative;\n  top: 1px;\n"]);return s=function(){return e},e}var p=Object(o.b)(c.Toolbar)(s()),f=o.b.div(u()),d=Object(o.b)(i.Level)(l())},385:function(e,t,n){"use strict";var r=n(92),a=n.n(r),o=n(26),c=n.n(o),i=n(0),l=n.n(i),u=n(2),s=n.n(u),p=n(93),f=function(e){var t=e.children,n=e.pathname,r=c()(e,["children","pathname"]);return n?l.a.createElement(p.a,a()({pathname:n},r),t):t};f.propTypes={pathname:s.a.string,children:s.a.oneOfType([s.a.node,s.a.arrayOf(s.a.node)]).isRequired},t.a=f},387:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"getPlatforms",(function(){return b})),n.d(r,"getPlatform",(function(){return y})),n.d(r,"getPlatformItems",(function(){return v})),n.d(r,"getPlatformInventories",(function(){return h})),n.d(r,"getServiceOffering",(function(){return g}));var a=n(1),o=n.n(a),c=n(3),i=n(36),l=n.n(i),u=n(64),s=n(11),p=n(49);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var d=Object(u.a)(),m=Object(u.b)(),b=function(){return m.post("".concat(s.h,"/graphql"),{query:'\nquery {\n  application_types (filter: { name: "/insights/platform/catalog" }) {\n    id\n    name\n    sources {\n      id\n      name\n      source_type_id\n    }\n  }\n}'}).then((function(e){return e.data.application_types})).then((function(e){return l()(e,1)[0].sources}))},y=function(e){return d.get("".concat(s.h,"/sources/").concat(e))},v=function(e,t,n){var r=t?"&filter[name][contains_i]=".concat(t):"";return e?d.get("".concat(s.i,"/sources/").concat(e,"/service_offerings?filter[archived_at][nil]").concat(r).concat(n?"&limit=".concat(n.limit,"&offset=").concat(n.offset):"")):d.get("".concat(s.i,"/service_offerings"))},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p.a;return e?d.get("".concat(s.i,"/sources/").concat(e,"/service_inventories?filter[name][contains_i]=").concat(t).concat(n?"&limit=".concat(n.limit,"&offset=").concat(n.offset):"")):d.get("".concat(s.i,"/service_inventories?limit=").concat(n.limit,"&offset=").concat(n.offset))},g=function(e,t){return Promise.all([d.get("".concat(s.i,"/service_offerings/").concat(e)),d.get("".concat(s.h,"/sources/").concat(t)).then((function(e){return d.get("".concat(s.h,"/source_types/").concat(e.source_type_id)).then((function(t){var n=t.icon_url;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{icon_url:n})}))}))]).then((function(e){var t=l()(e,2);return{service:t[0],source:t[1]}}))};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"c",(function(){return j})),n.d(t,"b",(function(){return P})),n.d(t,"d",(function(){return T})),n.d(t,"a",(function(){return _})),n.d(t,"e",(function(){return w}));var j=function(){return function(e){return e((function(e){return e({type:"".concat(c.k,"_PENDING")}),b().then((function(t){return e({type:"".concat(c.k,"_FULFILLED"),payload:t})})).catch((function(t){return e({type:"".concat(c.k,"_REJECTED"),payload:t})}))}))}},P=function(e,t,n){return{type:c.n,payload:v(e,t,n),meta:E({platformId:e,filter:t},n)}},T=function(e){return{type:c.j,payload:y(e)}},_=function(e,t,n){return{type:c.l,payload:h(e,t,n)}},w=function(){return{type:c.v,payload:g.apply(r,arguments)}}},388:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(421),c=n(422),i=n(37),l=n(385);t.a=function(){var e=Object(i.useSelector)((function(e){return e.breadcrumbsReducer.fragments}));return e.length<=1?null:a.a.createElement(o.Breadcrumb,null,e.map((function(t,n){var r=t.title,o=t.pathname,i=t.searchParams;return(a.a.createElement(l.a,{pathname:e.length!==n+1?o:void 0,searchParams:i,nav:!0,exact:!0,key:o,className:"pf-c-breadcrumb__item"},a.a.createElement(c.BreadcrumbItem,{isActive:e.length===n+1},r)))})))}},392:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n(92),a=n.n(r),o=n(26),c=n.n(o),i=n(0),l=n.n(i),u=n(2),s=n.n(u),p=n(167),f=n(31),d=n(48),m=n(438),b=n(51),y=n(388),v=n(382),h=function(e){var t=e.children,n=e.paddingBottom,r=e.breadcrumbs,o=(e.breadcrumbsSpacing,c()(e,["children","paddingBottom","breadcrumbs","breadcrumbsSpacing"]));return(l.a.createElement(v.c,a()({className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg ".concat(n?"pf-u-pb-lg":"")},o),r&&l.a.createElement("div",{className:"pf-u-mb-md"}," ",l.a.createElement(y.a,null)),t))};h.propTypes={children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]).isRequired,paddingBottom:s.a.bool,breadcrumbs:s.a.bool,breadcrumbsSpacing:s.a.bool},h.defaultProps={paddingBottom:!0,breadcrumbs:!0},t.b=h;var g=function(e){var t=e.title,n=e.description,r=e.children,o=e.noData,u=c()(e,["title","description","children","noData"]);return(l.a.createElement(i.Fragment,null,l.a.createElement(v.b,a()({className:Object(m.a)({"pf-u-mb-lg":!o})},u),l.a.createElement(p.LevelItem,null,l.a.createElement(d.TextContent,{className:"top-toolbar-title"},l.a.createElement(f.Text,{component:f.TextVariants.h2,className:"pf-u-m-0 pf-u-mr-md"},t),n&&l.a.createElement(f.Text,{className:"top-toolbar-title-description",component:f.TextVariants.p},n))),r)))};g.propTypes={title:s.a.node,description:s.a.node,children:s.a.oneOfType([s.a.node,s.a.arrayOf(s.a.node)]),noData:s.a.bool},g.defaultProps={title:l.a.createElement(b.h,null)}},393:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(2),c=n.n(o),i=n(426),l=n(427),u=n(15),s=n(378),p=function(e){var t=e.tabItems,n=Object(s.a)().push,r=Object(u.h)(),o=r.pathname,c=r.search,p=t.find((function(e){var t=e.name;return o.includes(t)}));return a.a.createElement(i.Tabs,{activeKey:p?p.eventKey:0,onSelect:function(e,r){return n({pathname:t[r].name,search:c})}},t.map((function(e){return a.a.createElement(l.Tab,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name})})))};p.propTypes={tabItems:c.a.array.isRequired},t.a=p},394:function(e,t,n){"use strict";var r=n(92),a=n.n(r),o=n(26),c=n.n(o),i=n(0),l=n.n(i),u=n(2),s=n.n(u),p=n(377),f=Object(i.createContext)(),d=function(e){var t=e.component,n=c()(e,["component"]);return(l.a.createElement(f.Consumer,null,(function(e){var r=e.componentMapper,a="string"==typeof t?r[t]:t;return l.a.createElement(a,n)})))};d.propTypes={component:s.a.oneOfType([s.a.string,s.a.node,s.a.func,s.a.element]).isRequired};var m=function e(t){return t.hidden?null:t.map((function(t){var n=t.hidden,r=t.fields,o=t.key,i=c()(t,["hidden","fields","key"]);return n?null:r?l.a.createElement(d,a()({key:o},i),e(r)):l.a.createElement(d,a()({key:o},i))}))},b=function(e){var t=e.schema,n=e.componentMapper;return(l.a.createElement(f.Provider,{value:{render:m,componentMapper:n}},m(t.fields)))};b.propTypes={schema:s.a.shape({fields:s.a.array.isRequired}).isRequired,componentMapper:s.a.object},b.defaultProps={componentMapper:p.a},t.a=b},396:function(e,t,n){"use strict";var r=n(36),a=n.n(r),o=n(18),c=n.n(o),i=n(0),l=n.n(i),u=n(2),s=n.n(u),p=n(19),f=n(37),d=n(51),m=n(409),b=n.n(m),y=n(418);function v(){var e=c()(["\n  height: ",";\n  display: ",";\n  float: ",";\n  width: ",";\n"]);return v=function(){return e},e}var h=Object(p.b)(y.LazyLoadImage)(v(),(function(e){var t=e.height;return e.hidden?"0px":"".concat(t,"px")||!1}),(function(e){return e.hidden?"none":"inherit"}),(function(e){return e.hidden?"left":"inherit"}),(function(e){return e.hidden?0:"inherit"}));function g(){var e=c()(["\n  display: inline-block;\n  height: ",";\n"]);return g=function(){return e},e}var O=p.b.div(g(),(function(e){var t=e.height;return"".concat(t,"px")})),E=function(e){var t=e.src,n=e.height,r=e.sourceId,o=Object(i.useState)(!1),c=a()(o,2),u=c[0],s=c[1],p=Object(i.useState)(!1),m=a()(p,2),y=m[0],v=m[1],g=Object(f.useSelector)((function(e){return e.platformReducer.platformIconMapping})),E=r?g[r]:b.a;return l.a.createElement(O,{height:n},!u&&l.a.createElement(d.c,{height:n}),l.a.createElement(h,{threshold:2e3,delayTime:0,hidden:!u,height:u?n:0,onError:function(){return v(!0)},onLoad:function(){return s(!0)},src:!t||y?E:t}))};E.propTypes={src:s.a.string,platformId:s.a.string,style:s.a.object,height:s.a.number,sourceId:s.a.string},E.defaultProps={style:{},height:40};t.a=E},409:function(e,t,n){e.exports=n.p+"fonts/card-icon-default.svg"},434:function(e,t,n){"use strict";var r=n(26),a=n.n(r),o=n(36),c=n.n(o),i=n(1),l=n.n(i),u=n(0),s=n.n(u),p=n(41),f=n(3),d=n(42),m=n.n(d),b=n(65),y=n.n(b),v=n(64),h=n(11),g=n(49);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=Object(v.c)(),P=(Object(v.d)(),Object(v.f)()),T=(Object(v.h)(),Object(v.a)());function _(e){return P.listServicePlans(e)}function w(e){return I.apply(this,arguments)}function I(){return(I=y()(m.a.mark((function e(t){var n,r,o,c,i,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.service_parameters,r=n.providerControlParameters,o=a()(n,["providerControlParameters"]),c=a()(t,["service_parameters"]),e.next=3,j.createOrder();case 3:return i=e.sent,(l={}).count=1,l=E({},l,{},c,{service_parameters:o,provider_control_parameters:r||{}}),e.next=9,j.addToOrder(i.id,l);case 9:return e.abrupt("return",j.submitOrder(i.id));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=function(e){return T.get("".concat(h.c,"/order_items?").concat(e.map((function(e){return"filter[order_id][]=".concat(e)})).join("&")))},D=function(e){return T.get("".concat(h.c,"/portfolio_items?").concat(e.map((function(e){return"filter[id][]=".concat(e)})).join("&")))};var F=n(2),C=n.n(F),N=n(22),R=n(52),x=function(e){var t=e.id,n=e.dispatch;return(s.a.createElement(u.Fragment,null,"You can track the progress of Order # ",t," in your"," ",s.a.createElement(N.b,{onClick:function(){return n(Object(p.clearNotifications)())},to:R.k},"Orders")," ","page."))};x.propTypes={id:C.a.string.isRequired,dispatch:C.a.func.isRequired};var k=x;function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"e",(function(){return B})),n.d(t,"f",(function(){return A})),n.d(t,"a",(function(){return V})),n.d(t,"d",(function(){return G})),n.d(t,"c",(function(){return M})),n.d(t,"b",(function(){return J}));var B=function(e){return{type:f.w,payload:_(e)}},A=function(e){return function(t){return t({type:f.T,payload:w(e).then((function(e){var n=e.id;return t(Object(p.addNotification)({variant:"success",title:"Your order has been accepted successfully",description:s.a.createElement(k,{id:n,dispatch:t}),dismissable:!0}))}))})}},V=function(e){return function(t,n){t({type:"".concat(f.d,"_PENDING")});var r=n().orderReducer.orderDetail;return function(e){return j.cancelOrder(e)}(e).then((function(){return r.order.state="Canceled",r.approvalRequest&&r.approvalRequest.length>0&&(r.approvalRequest[0].state="canceled"),t({type:f.O,payload:q({},r)}),r})).then((function(e){return t(Object(p.addNotification)({variant:"success",title:"Your order has been canceled successfully",description:"Order ".concat("Order #".concat(e.order.id)," was canceled."),dismissable:!0}))})).then((function(){return t({type:"".concat(f.d,"_FULFILLED")})})).catch((function(e){t({type:"".concat(f.d,"_REJECTED"),payload:e})}))}},G=function(e,t){return function(n){var r=Object.entries(e).filter((function(e){var t=c()(e,2)[1];return t&&t.length>0})).map((function(e){var t=c()(e,2),n=t[0],r=t[1];return Array.isArray(r)?r.map((function(e){return"filter[".concat(n,"][]=").concat(e)})).join("&"):"filter[".concat(n,"][contains_i]=").concat(r)})).join("&");return n({type:"".concat(f.h,"_PENDING")}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g.a;return T.get("".concat(h.c,"/orders?").concat(e,"&limit=").concat(t.limit,"&offset=").concat(t.offset)).then((function(e){return L(e.data.map((function(e){return e.id}))).then((function(t){return D(t.data.map((function(e){return e.portfolio_item_id}))).then((function(n){return E({portfolioItems:n},e,{data:e.data.map((function(e){return E({},e,{orderItems:t.data.filter((function(t){return t.order_id===e.id}))})}))})}))}))}))}(r,t).then((function(e){var t=e.portfolioItems,o=a()(e,["portfolioItems"]);return n({type:f.P,payload:t}),n({type:"".concat(f.h,"_FULFILLED"),meta:{filter:r},payload:o})})).catch((function(e){return n({type:"".concat(f.h,"_REJECTED"),payload:e})}))}},M=function(e){return function(t){return t({type:"".concat(f.O,"_PENDING")}),function(e){return Promise.all([T.get("".concat(h.c,"/orders/").concat(e.order)),T.get("".concat(h.c,"/order_items/").concat(e["order-item"])),T.get("".concat(h.c,"/portfolio_items/").concat(e["portfolio-item"])).catch((function(e){if(404===e.status)return{object:"Portfolio item",notFound:!0};throw e})),T.get("".concat(h.h,"/sources/").concat(e.platform)).catch((function(e){if(404===e.status||400===e.status)return{object:"Platform",notFound:!0};throw e})),T.get("".concat(h.c,"/order_items/").concat(e["order-item"],"/progress_messages")),T.get("".concat(h.c,"/portfolios/").concat(e.portfolio)).catch((function(e){if(404===e.status||400===e.status)return{object:"Portfolio",notFound:!0};throw e})),T.get("".concat(h.c,"/order_items/").concat(e["order-item"],"/approval_requests"))])}(e).then((function(e){var n=c()(e,7),r=n[0],a=n[1],o=n[2],i=n[3],l=n[4],u=n[5],s=n[6];return t({type:"".concat(f.O,"_FULFILLED"),payload:{order:r,orderItem:a,portfolioItem:o,platform:i,progressMessages:l,portfolio:u,approvalRequest:s}})})).catch((function(e){return t({type:"".concat(f.O,"_REJECTED"),payload:e})}))}},J=function(e){return function(t){return t({type:"".concat(f.f,"_PENDING")}),function(e){return T.get("".concat(h.c,"/order_items/").concat(e,"/approval_requests"))}(e).then((function(e){return t({type:"".concat(f.f,"_FULFILLED"),payload:e}),e})).catch((function(e){return t({type:"".concat(f.f,"_REJECTED"),payload:e})}))}}},672:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(550),c=n(394),i=n(377),l=function(){return{fields:[{component:i.b.TOP_TOOLBAR,className:"orders bg-fill pf-u-p-lg",key:"orders-toolbar",fields:[{component:i.b.TOP_TOOLBAR_TITLE,key:"orders-toolbar-title",title:"Orders",className:""}]}]}},u=n(36),s=n.n(u),p=n(1),f=n.n(p),d=n(37),m=n(79),b=n(54),y=n(55),v=n(96),h=n(56),g=n(101),O=n(102),E=n(103),j=n(480),P=n(441),T=n(50),_=n(407),w=n(644),I=n(655),L=n(656),D=n(386),F=n.n(D),C=n(434),N=n(387),R=n(51),x=n(2),k=n.n(x),S=n(131),q=n(126),B=n(130),A=n(129),V=n(166),G=n(167),M=n(416),J=n(417),U=n(31),K=n(48),z=n(98),Y=n(181),H=n.n(Y),Q=n(396),W=n(11),X=function(e){var t=e.orderItems;return t[0]&&"".concat(W.c,"/portfolio_items/").concat(t[0].portfolio_item_id,"/icon")},Z=function(e,t){var n=e.orderItems,r=e.id,a=n[0]&&t.find((function(e){var t=e.id;return n[0].portfolio_item_id===t}));return a?a.name:"Order ".concat(r)},$=n(93),ee=n(52),te=Object(r.memo)((function(e){var t=e.item,n=Object(d.useSelector)((function(e){var n,r,a,o=e.portfolioReducer.portfolioItems.data,c=(n=o,r=t.orderItems,(a=r[0]&&n.find((function(e){var t=e.id;return r[0].portfolio_item_id===t})))?{orderPlatform:a.service_offering_source_ref,orderPortfolio:a.portfolio_id}:{});return{orderPlatform:c.orderPlatform,orderPortfolio:c.orderPortfolio,orderName:Z(t,o)}})),r=n.orderPlatform,o=n.orderPortfolio,c=n.orderName,i=t.orderItems[0]&&t.orderItems[0]||{},l={order:t.id,"order-item":i.id,"portfolio-item":i.portfolio_item_id,platform:r,portfolio:o};return a.a.createElement(a.a.Fragment,null,a.a.createElement(q.DataListItem,{"aria-labelledby":"".concat(t.id,"-expand"),className:"data-list-expand-fix"},a.a.createElement(A.DataListItemRow,null,a.a.createElement(B.DataListItemCells,{dataListCells:[a.a.createElement(S.DataListCell,{key:"1"},a.a.createElement(M.Split,{gutter:"sm"},a.a.createElement(J.SplitItem,null,a.a.createElement(Q.a,{height:60,src:X(t),sourceId:r})),a.a.createElement(J.SplitItem,{isFilled:!0},a.a.createElement(K.TextContent,null,a.a.createElement(b.Grid,{gutter:"sm",className:"pf-u-gg-md"},a.a.createElement(y.GridItem,null,a.a.createElement(V.Level,null,a.a.createElement(G.LevelItem,null,a.a.createElement(U.Text,{className:"pf-u-mb-0",component:U.TextVariants.h5},a.a.createElement($.a,{pathname:ee.m,searchParams:l},c," # ",t.id))),a.a.createElement(G.LevelItem,null,a.a.createElement($.a,{pathname:ee.l,searchParams:l},"Failed"===t.state&&a.a.createElement(H.a,{className:"pf-u-mr-sm icon-danger-fill"}),t.state)))),a.a.createElement(y.GridItem,null,a.a.createElement(V.Level,null,a.a.createElement(G.LevelItem,null,a.a.createElement(U.Text,{className:"pf-u-mb-0",component:U.TextVariants.small},"Ordered ",a.a.createElement(z.DateFormat,{date:t.created_at,variant:"relative"}))),a.a.createElement(G.LevelItem,null,a.a.createElement(U.Text,{className:"pf-u-mb-0",component:U.TextVariants.small},"Ordered by ",t.owner)),a.a.createElement(G.LevelItem,null,a.a.createElement(U.Text,{className:"pf-u-mb-0",component:U.TextVariants.small},"Last updated ",a.a.createElement(z.DateFormat,{date:t.orderItems[0]&&t.orderItems[0].updated_at,variant:"relative"}))))))))))]}))))}),(function(e,t){return e.id===t.id}));te.propTypes={item:k.a.object.isRequired};var ne=te,re=n(381),ae=n(379),oe=n(49);function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var le=Object(ae.a)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:oe.a,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;r(!0),n(Object(C.d)(e,t)).then((function(){return r(!1)}))}),1e3),ue={isOpen:!1,isFetching:!0,isFiltering:!1,filterType:"state",filters:{state:[],owner:""}},se=function(e,t){switch(t.type){case"setFetching":return ie({},e,{isFetching:t.payload});case"setFilterValue":return ie({},e,{filters:(n=t.payload,r=e.filterType,a=e.filters,ie({},a,f()({},r,n)))});case"replaceFilterChip":return ie({},e,{filters:t.payload});case"setFilteringFlag":return ie({},e,{isFiltering:t.payload});case"setFilterType":return ie({},e,{filterType:t.payload})}var n,r,a;return e},pe=function(){var e=Object(r.useReducer)(se,ue),t=s()(e,2),n=t[0],o=n.isFetching,c=n.isFiltering,i=n.filterType,l=n.filters,u=t[1],p=Object(d.useSelector)((function(e){return e.orderReducer.orders})),D=p.data,x=p.meta,k=Object(d.useDispatch)();Object(r.useEffect)((function(){u({type:"setFetching",payload:!0}),Promise.all([k(Object(C.d)(l,x)),k(Object(N.c)())]).then((function(){return u({type:"setFetching",payload:!1})}))}),[]);var S=function(e,t){return u({type:"setFetching",payload:!0}),k(Object(C.d)(l,t)).then((function(){return u({type:"setFetching",payload:!1})})).catch((function(){return u({type:"setFetching",payload:!1})}))},q=function(e){u({type:"setFilterValue",payload:e}),le(ie({},l,f()({},i,e)),x,k,(function(e){return u({type:"setFilteringFlag",payload:e})}))};return a.a.createElement(b.Grid,{gutter:"md"},a.a.createElement(y.GridItem,null,a.a.createElement(_.Section,{type:"content"},!x.noData&&a.a.createElement(w.PrimaryToolbar,{activeFiltersConfig:{filters:Object.entries(l).filter((function(e){var t=s()(e,2)[1];return t&&t.length>0})).map((function(e){var t=s()(e,2),n=t[0],r=t[1];return{category:n,type:n,chips:Array.isArray(r)?r.map((function(e){return{name:e}})):[{name:r}]}})),onDelete:function(e,t,n){var r=s()(t,1)[0];if(n)return u({type:"replaceFilterChip",payload:ue.filters}),le(ue.filters,x,k,(function(e){return u({type:"setFilteringFlag",payload:e})}));var a=ie({},l);"state"===r.type?a[r.type]=a[r.type].filter((function(e){return e!==r.chips[0].name})):a[r.type]="",u({type:"replaceFilterChip",payload:a}),le(a,x,k,(function(e){return u({type:"setFilteringFlag",payload:e})}))}},filterConfig:{onChange:function(e,t){return u({type:"setFilterType",payload:t})},value:i,items:[{filterValues:{items:[{value:"Failed",label:"Failed"},{value:"Completed",label:"Completed"},{value:"Approval Pending",label:"Approval Pending"},{value:"Canceled",label:"Canceled"},{value:"Created",label:"Created"}],value:l.state,onChange:function(e,t){return q(t)}},label:"State",value:"state",type:"checkbox"},{filterValues:{value:l.owner,onChange:function(e,t){return q(t)}},label:"Owner",value:"owner"}]},pagination:a.a.createElement(re.a,{isDisabled:o||c,apiRequest:S,meta:x,isCompact:!0})}),a.a.createElement(m.DataList,{"aria-label":"order-list"},c||o?a.a.createElement(R.d,null):D.length>0?D.map((function(e,t){return a.a.createElement(ne,{key:e.id,index:t,item:e})})):a.a.createElement(I.EmptyTable,null,a.a.createElement(h.Bullseye,null,a.a.createElement(g.EmptyState,null,a.a.createElement(h.Bullseye,null,a.a.createElement(O.EmptyStateIcon,{icon:F.a})),a.a.createElement(v.Title,{size:"lg"},x.noData?"No orders":"No results found"),a.a.createElement(E.EmptyStateBody,null,x.noData?"No orders have been created.":"No results match the filter criteria. Remove all filters or clear all filters to show results."),a.a.createElement(P.EmptyStateSecondaryActions,null,!x.noData&&a.a.createElement(T.Button,{variant:"link",onClick:function(){u({type:"setFilteringFlag",payload:!0}),q("")}},"Clear all filters")))))),a.a.createElement(L.TableToolbar,null,a.a.createElement("div",{className:"bottom-pagination-container"},a.a.createElement(j.Flex,{className:"example-border",breakpointMods:[{modifier:"justify-content-flex-end"}]},x.count>0&&a.a.createElement(re.a,{className:"pf-u-mt-0",isDisabled:o||c,apiRequest:S,meta:x})))))))};t.default=function(){return Object(r.useEffect)((function(){insights.chrome.appNavClick({id:"orders",secondaryNav:!0})}),[]),a.a.createElement(o.Stack,null,a.a.createElement(c.a,{schema:l()}),a.a.createElement(pe,null))}}}]);
//# sourceMappingURL=../sourcemaps/orders.js.map