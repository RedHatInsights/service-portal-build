(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{333:function(e,t,r){"use strict";var n=r(1),a=r.n(n),o=r(25),c=r.n(o),i=r(37),l=r.n(i),u=r(81),s=r.n(u),p=r(0),f=r.n(p),m=r(3),d=r.n(m),b=r(24),y=r(46),v=function(e,t,r){var n=Object.entries(t).map((function(e){var t=s()(e,2),r=t[0],n=t[1];return"".concat(r,"=").concat(n)})).join("&");return r?"".concat(e).concat(n.length>0?"&".concat(n):""):n.length>0?"?".concat(n):""},g=function(e){var t=e.pathname,r=e.searchParams,n=e.nav,a=e.preserveSearch,o=l()(e,["pathname","searchParams","nav","preserveSearch"]),i=Object(b.h)().search,u=n?y.c:y.b,s={pathname:t,search:v(i,r,a)};return f.a.createElement(u,c()({to:s},o))};g.propTypes={pathname:d.a.string.isRequired,searchParams:d.a.shape(a()({},d.a.string,d.a.string)),nav:d.a.bool,preserveSearch:d.a.bool},g.defaultProps={nav:!1,preserveSearch:!1,searchParams:{}},t.a=g},335:function(e,t,r){"use strict";var n=r(364);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(n.a)(e,t,r)}},336:function(e,t,r){"use strict";var n=r(25),a=r.n(n),o=r(37),c=r.n(o),i=r(0),l=r.n(i),u=r(3),s=r.n(u),p=r(82),f=r(144),m=r(146),d=r(381),b=r(357),y=r(400),v=r(344),g=r.n(v),h=r(149),O=r.n(h),E=r(376),j=function(e){var t=e.searchValue,r=e.onFilterChange,n=e.placeholder,a=e.isClearable;return l.a.createElement(b.ToolbarItem,null,l.a.createElement("div",{className:"toolbar-filter-input-group"},l.a.createElement(E.TextInput,{placeholder:n,value:t,type:"text",onChange:r,"aria-label":n}),l.a.createElement("span",{className:"filter-icons-container"},a&&t&&l.a.createElement(O.a,{className:"clear-filter",width:"16",height:"16",onClick:function(){return r("")}})||l.a.createElement(g.a,null))))};j.propTypes={onFilterChange:s.a.func.isRequired,placeholder:s.a.string,searchValue:s.a.string,isClearable:s.a.bool},j.defaultProps={searchValue:"",isClearable:!1};var P=j,T=r(355),_=r(356),I=r(333);r.d(t,"b",(function(){return D}));var N=function(e){var t=e.title,r=c()(e,["title"]);return l.a.createElement(p.Button,r,t)};N.propTypes={title:s.a.string.isRequired};var w={TopToolbar:T.b,TopToolbarTitle:T.a,Toolbar:function(e){var t=a()({},e);return l.a.createElement(d.Toolbar,a()({className:"pf-u-pr-lg toolbar"},t))},ToolbarGroup:y.ToolbarGroup,ToolbarItem:b.ToolbarItem,FilterToolbarItem:P,Link:I.a,Level:f.Level,LevelItem:m.LevelItem,Button:N,AppTabs:_.a},D={TOP_TOOLBAR:"TopToolbar",TOP_TOOLBAR_TITLE:"TopToolbarTitle",TOOLBAR:"Toolbar",TOOLBAR_ITEM:"ToolbarItem",TOOLBAR_GROUP:"ToolbarGroup",FILTER_TOOLBAR_ITEM:"FilterToolbarItem",LINK:"Link",BUTTON:"Button",LEVEL:"Level",LEVEL_ITEM:"LevelItem",TABS:"AppTabs"};t.a=w},337:function(e,t,r){"use strict";var n=r(1),a=r.n(n),o=r(401),c=r.n(o),i=r(24);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=Object(i.g)();return u({},t,{push:function(r){return e?t.push(function(e){return"string"==typeof e?e.split("?")[0]:"object"===c()(e)?u({},e,{search:void 0}):e}(r)):t.push(r)}})}},338:function(e,t,r){"use strict";var n=r(25),a=r.n(n),o=r(37),c=r.n(o),i=r(0),l=r.n(i),u=r(3),s=r.n(u),p=r(364),f=r(148),m=r(47),d=function(e){var t=e.meta,r=t.limit,n=t.count,o=t.offset,i=e.apiProps,u=e.apiRequest,s=e.className,d=e.isCompact,b=c()(e,["meta","apiProps","apiRequest","className","isCompact"]);return l.a.createElement("div",{className:s},l.a.createElement(f.Pagination,a()({perPage:r||50,itemCount:n||0,onPerPageSelect:function(e,t){return u(i,{offset:o,limit:t})},page:Object(m.b)(r,o),onSetPage:function(e,t,n){var a={offset:Object(m.c)(t,r),limit:r},o=function(){return u(i,a)};return n?Object(p.a)(o,250)():o()},direction:"down",isCompact:d},b)))};d.propTypes={meta:s.a.shape({count:s.a.number,limit:s.a.number.isRequired,offset:s.a.number.isRequired}),apiRequest:s.a.func.isRequired,apiProps:s.a.any,className:s.a.string,isCompact:s.a.bool},d.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1},t.a=d},342:function(e,t,r){"use strict";var n={};r.r(n),r.d(n,"getPlatforms",(function(){return b})),r.d(n,"getPlatform",(function(){return y})),r.d(n,"getPlatformItems",(function(){return v})),r.d(n,"getPlatformInventories",(function(){return g})),r.d(n,"getServiceOffering",(function(){return h}));var a=r(1),o=r.n(a),c=r(2),i=r(81),l=r.n(i),u=r(54),s=r(11),p=r(47);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var m=Object(u.a)(),d=Object(u.b)(),b=function(){return d.post("".concat(s.h,"/graphql"),{query:'\nquery {\n  application_types (filter: { name: "/insights/platform/catalog" }) {\n    id\n    name\n    sources {\n      id\n      name\n      source_type_id\n    }\n  }\n}'}).then((function(e){return e.data.application_types})).then((function(e){return l()(e,1)[0].sources}))},y=function(e){return m.get("".concat(s.h,"/sources/").concat(e))},v=function(e,t,r){var n=t?"&filter[name][contains_i]=".concat(t):"";return e?m.get("".concat(s.i,"/sources/").concat(e,"/service_offerings?filter[archived_at][nil]").concat(n).concat(r?"&limit=".concat(r.limit,"&offset=").concat(r.offset):"")):m.get("".concat(s.i,"/service_offerings"))},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p.a;return e?m.get("".concat(s.i,"/sources/").concat(e,"/service_inventories?filter[name][contains_i]=").concat(t).concat(r?"&limit=".concat(r.limit,"&offset=").concat(r.offset):"")):m.get("".concat(s.i,"/service_inventories?limit=").concat(r.limit,"&offset=").concat(r.offset))},h=function(e,t){return Promise.all([m.get("".concat(s.i,"/service_offerings/").concat(e)),m.get("".concat(s.h,"/sources/").concat(t)).then((function(e){return m.get("".concat(s.h,"/source_types/").concat(e.source_type_id)).then((function(t){var r=t.icon_url;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{icon_url:r})}))}))]).then((function(e){var t=l()(e,2);return{service:t[0],source:t[1]}}))};function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"c",(function(){return j})),r.d(t,"b",(function(){return P})),r.d(t,"d",(function(){return T})),r.d(t,"a",(function(){return _})),r.d(t,"e",(function(){return I}));var j=function(){return function(e){return e((function(e){return e({type:"".concat(c.j,"_PENDING")}),b().then((function(t){return e({type:"".concat(c.j,"_FULFILLED"),payload:t})})).catch((function(t){return e({type:"".concat(c.j,"_REJECTED"),payload:t})}))}))}},P=function(e,t,r){return{type:c.m,payload:v(e,t,r),meta:E({platformId:e,filter:t},r)}},T=function(e){return{type:c.i,payload:y(e)}},_=function(e,t,r){return{type:c.k,payload:g(e,t,r)}},I=function(){return{type:c.u,payload:h.apply(n,arguments)}}},343:function(e,t,r){"use strict";var n=r(25),a=r.n(n),o=r(37),c=r.n(o),i=r(0),l=r.n(i),u=r(3),s=r.n(u),p=r(333),f=function(e){var t=e.children,r=e.pathname,n=c()(e,["children","pathname"]);return r?l.a.createElement(p.a,a()({pathname:r},n),t):t};f.propTypes={pathname:s.a.string,children:s.a.oneOfType([s.a.node,s.a.arrayOf(s.a.node)]).isRequired},t.a=f},348:function(e,t,r){"use strict";var n=r(81),a=r.n(n),o=r(0),c=r.n(o),i=r(3),l=r.n(i),u=r(32),s=r(367),p=r(48),f=r(359),m=r.n(f),d=function(e){var t=e.src,r=e.height,n=e.sourceId,i=Object(o.useState)(!1),l=a()(i,2),f=l[0],d=l[1],b=Object(o.useState)(!1),y=a()(b,2),v=y[0],g=y[1],h=Object(u.useSelector)((function(e){return e.platformReducer.platformIconMapping})),O=n?h[n]:m.a;return c.a.createElement("div",{className:"display-inline-block"},!f&&c.a.createElement(p.c,{height:r}),c.a.createElement(s.LazyLoadImage,{threshold:2e3,delayTime:0,height:f?r:0,style:{height:f?r:0},className:"card-image ".concat(f?"":"hide"),onError:function(){return g(!0)},onLoad:function(){return d(!0)},src:!t||v?O:t}))};d.propTypes={src:l.a.string,platformId:l.a.string,style:l.a.object,height:l.a.number,sourceId:l.a.string},d.defaultProps={style:{},height:40},t.a=d},350:function(e,t,r){"use strict";var n=r(25),a=r.n(n),o=r(37),c=r.n(o),i=r(0),l=r.n(i),u=r(3),s=r.n(u),p=r(336),f=Object(i.createContext)(),m=function(e){var t=e.component,r=c()(e,["component"]);return l.a.createElement(f.Consumer,null,(function(e){var n=e.componentMapper,a="string"==typeof t?n[t]:t;return l.a.createElement(a,r)}))};m.propTypes={component:s.a.oneOfType([s.a.string,s.a.node,s.a.func,s.a.element]).isRequired};var d=function e(t){return t.hidden?null:t.map((function(t){var r=t.fields,n=t.key,o=c()(t,["fields","key"]);return r?l.a.createElement(m,a()({key:n},o),e(r)):l.a.createElement(m,a()({key:n},o))}))},b=function(e){var t=e.schema,r=e.componentMapper;return l.a.createElement(f.Provider,{value:{render:d,componentMapper:r}},d(t.fields))};b.propTypes={schema:s.a.shape({fields:s.a.array.isRequired}).isRequired,componentMapper:s.a.object},b.defaultProps={componentMapper:p.a},t.a=b},351:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(374),c=r(375),i=r(32),l=r(343);t.a=function(){var e=Object(i.useSelector)((function(e){return e.breadcrumbsReducer.fragments}));return e.length<=1?null:a.a.createElement(o.Breadcrumb,null,e.map((function(t,r){var n=t.title,o=t.pathname,i=t.searchParams;return a.a.createElement(l.a,{pathname:e.length!==r+1?o:void 0,searchParams:i,nav:!0,exact:!0,key:o,className:"pf-c-breadcrumb__item"},a.a.createElement(c.BreadcrumbItem,{isActive:e.length===r+1},n))})))}},355:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r(25),a=r.n(n),o=r(37),c=r.n(o),i=r(0),l=r.n(i),u=r(3),s=r.n(u),p=r(144),f=r(146),m=r(20),d=r(38),b=r(382),y=r(48),v=r(351),g=function(e){var t=e.children,r=e.paddingBottom,n=e.breadcrumbs,o=(e.breadcrumbsSpacing,c()(e,["children","paddingBottom","breadcrumbs","breadcrumbsSpacing"]));return l.a.createElement("div",a()({className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg ".concat(r?"pf-u-pb-lg":""," top-toolbar")},o),n&&l.a.createElement("div",{className:"pf-u-mb-md"}," ",l.a.createElement(v.a,null)),t)};g.propTypes={children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]).isRequired,paddingBottom:s.a.bool,breadcrumbs:s.a.bool,breadcrumbsSpacing:s.a.bool},g.defaultProps={paddingBottom:!0,breadcrumbs:!0},t.b=g;var h=function(e){var t=e.title,r=e.description,n=e.children,o=e.noData,u=c()(e,["title","description","children","noData"]);return l.a.createElement(i.Fragment,null,l.a.createElement(p.Level,a()({className:Object(b.a)("top-toolbar-title-container",{"pf-u-mb-lg":!o})},u),l.a.createElement(f.LevelItem,null,l.a.createElement(d.TextContent,{className:"top-toolbar-title"},l.a.createElement(m.Text,{component:m.TextVariants.h2,className:"pf-u-m-0 pf-u-mr-md"},t),r&&l.a.createElement(m.Text,{className:"top-toolbar-title-description",component:m.TextVariants.p},r))),n))};h.propTypes={title:s.a.node,description:s.a.node,children:s.a.oneOfType([s.a.node,s.a.arrayOf(s.a.node)]),noData:s.a.bool},h.defaultProps={title:l.a.createElement(y.h,null)}},356:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(3),c=r.n(o),i=r(383),l=r(384),u=r(24),s=r(337),p=function(e){var t=e.tabItems,r=Object(s.a)().push,n=Object(u.h)(),o=n.pathname,c=n.search,p=t.find((function(e){var t=e.name;return o.includes(t)}));return a.a.createElement(i.Tabs,{activeKey:p?p.eventKey:0,onSelect:function(e,n){return r({pathname:t[n].name,search:c})}},t.map((function(e){return a.a.createElement(l.Tab,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name})})))};p.propTypes={tabItems:c.a.array.isRequired},t.a=p},359:function(e,t,r){e.exports=r.p+"fonts/card-icon-default.svg"},389:function(e,t,r){"use strict";var n=r(81),a=r.n(n),o=r(37),c=r.n(o),i=r(1),l=r.n(i),u=r(0),s=r.n(u),p=r(39),f=r(2),m=r(41),d=r.n(m),b=r(54),y=r(11),v=r(47);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=Object(b.c)(),E=(Object(b.d)(),Object(b.f)()),j=(Object(b.h)(),Object(b.a)());function P(e){return E.listServicePlans(e)}var T=function(e){return j.get("".concat(y.c,"/order_items?").concat(e.map((function(e){return"filter[order_id][]=".concat(e)})).join("&")))},_=function(e){return j.get("".concat(y.c,"/portfolio_items?").concat(e.map((function(e){return"filter[id][]=".concat(e)})).join("&")))};var I=r(3),N=r.n(I),w=r(46),D=r(49),L=function(e){var t=e.id,r=e.dispatch;return s.a.createElement(u.Fragment,null,"You can track the progress of Order # ",t," in your"," ",s.a.createElement(w.b,{onClick:function(){return r(Object(p.clearNotifications)())},to:D.k},"Orders")," ","page.")};L.propTypes={id:N.a.string.isRequired,dispatch:N.a.func.isRequired};var R=L;function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"d",(function(){return C})),r.d(t,"e",(function(){return k})),r.d(t,"a",(function(){return x})),r.d(t,"c",(function(){return q})),r.d(t,"b",(function(){return B}));var C=function(e){return{type:f.v,payload:P(e)}},k=function(e){return function(t){return t({type:f.S,payload:(r=e,d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.service_parameters,a=n.providerControlParameters,o=c()(n,["providerControlParameters"]),i=c()(r,["service_parameters"]),e.next=3,d.a.awrap(O.createOrder());case 3:return l=e.sent,(u={}).count=1,u=h({},u,{},i,{service_parameters:o,provider_control_parameters:a||{}}),e.next=9,d.a.awrap(O.addToOrder(l.id,u));case 9:return e.abrupt("return",O.submitOrder(l.id));case 10:case"end":return e.stop()}}))).then((function(e){var r=e.id;return t(Object(p.addNotification)({variant:"success",title:"Your order has been accepted successfully",description:s.a.createElement(R,{id:r,dispatch:t}),dismissable:!0}))}))});var r,n,a,o,i,l,u}},x=function(e){return function(t,r){t({type:"".concat(f.d,"_PENDING")});var n=r().orderReducer.orderDetail;return function(e){return O.cancelOrder(e)}(e).then((function(){return n.order.state="Canceled",n.approvalRequest&&n.approvalRequest.length>0&&(n.approvalRequest[0].state="canceled"),t({type:f.N,payload:S({},n)}),n})).then((function(e){return t(Object(p.addNotification)({variant:"success",title:"Your order has been canceled successfully",description:"Order ".concat("Order #".concat(e.order.id)," was canceled."),dismissable:!0}))})).then((function(){return t({type:"".concat(f.d,"_FULFILLED")})})).catch((function(e){t({type:"".concat(f.d,"_REJECTED"),payload:e})}))}},q=function(e,t,r){return function(n){return n({type:"".concat(f.g,"_PENDING")}),function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v.a;return j.get("".concat(y.c,"/orders?filter[").concat(e,"][contains_i]=").concat(t,"&limit=").concat(r.limit,"&offset=").concat(r.offset)).then((function(e){return T(e.data.map((function(e){return e.id}))).then((function(t){return _(t.data.map((function(e){return e.portfolio_item_id}))).then((function(r){return h({portfolioItems:r},e,{data:e.data.map((function(e){return h({},e,{orderItems:t.data.filter((function(t){return t.order_id===e.id}))})}))})}))}))}))}(e,t,r).then((function(e){var r=e.portfolioItems,a=c()(e,["portfolioItems"]);return n({type:f.O,payload:r}),n({type:"".concat(f.g,"_FULFILLED"),meta:{filter:t},payload:a})})).catch((function(e){return n({type:"".concat(f.g,"_REJECTED"),payload:e})}))}},B=function(e){return function(t){return t({type:"".concat(f.N,"_PENDING")}),function(e){return Promise.all([j.get("".concat(y.c,"/orders/").concat(e.order)),j.get("".concat(y.c,"/order_items/").concat(e["order-item"])),j.get("".concat(y.c,"/portfolio_items/").concat(e["portfolio-item"])),j.get("".concat(y.h,"/sources/").concat(e.platform)),j.get("".concat(y.c,"/order_items/").concat(e["order-item"],"/progress_messages")),j.get("".concat(y.c,"/portfolios/").concat(e.portfolio)),j.get("".concat(y.c,"/order_items/").concat(e["order-item"],"/approval_requests"))])}(e).then((function(e){var r=a()(e,7),n=r[0],o=r[1],c=r[2],i=r[3],l=r[4],u=r[5],s=r[6];return t({type:"".concat(f.N,"_FULFILLED"),payload:{order:n,orderItem:o,portfolioItem:c,platform:i,progressMessages:l,portfolio:u,approvalRequest:s}})})).catch((function(e){return t({type:"".concat(f.N,"_REJECTED"),payload:e})}))}}},571:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(444),c=r(350),i=r(336),l=function(){return{fields:[{component:i.b.TOP_TOOLBAR,className:"orders bg-fill pf-u-p-lg",key:"orders-toolbar",fields:[{component:i.b.TOP_TOOLBAR_TITLE,key:"orders-toolbar-title",title:"Orders",className:""}]}]}},u=r(25),s=r.n(u),p=r(81),f=r.n(p),m=r(1),d=r.n(m),b=r(32),y=r(70),v=r(40),g=r(33),h=r(370),O=r(84),E=r(403),j=r(404),P=r(405),T=r(467),_=r(406),I=r(82),N=r(361),w=r(535),D=r(559),L=r(560),R=r(344),F=r.n(R),S=r(389),C=r(342),k=r(48),x=r(3),q=r.n(x),B=r(132),V=r(126),A=r(131),G=r(130),M=r(144),J=r(146),K=r(362),U=r(363),Y=r(20),z=r(38),H=r(349),Q=r(450),W=r.n(Q),X=r(348),Z=r(11),$=function(e){var t=e.orderItems;return t[0]&&"".concat(Z.c,"/portfolio_items/").concat(t[0].portfolio_item_id,"/icon")},ee=function(e,t){var r=e.orderItems,n=e.id,a=r[0]&&t.find((function(e){var t=e.id;return r[0].portfolio_item_id===t}));return a?a.name:"Order ".concat(n)},te=r(333),re=r(49),ne=function(e){var t=e.item,r=Object(b.useSelector)((function(e){var r,n,a,o=e.portfolioReducer.portfolioItems.data,c=(r=o,n=t.orderItems,(a=n[0]&&r.find((function(e){var t=e.id;return n[0].portfolio_item_id===t})))?{orderPlatform:a.service_offering_source_ref,orderPortfolio:a.portfolio_id}:{});return{orderPlatform:c.orderPlatform,orderPortfolio:c.orderPortfolio,orderName:ee(t,o)}})),n=r.orderPlatform,o=r.orderPortfolio,c=r.orderName,i=t.orderItems[0]&&t.orderItems[0]||{},l={order:t.id,"order-item":i.id,"portfolio-item":i.portfolio_item_id,platform:n,portfolio:o};return a.a.createElement(a.a.Fragment,null,a.a.createElement(V.DataListItem,{"aria-labelledby":"".concat(t.id,"-expand"),className:"data-list-expand-fix"},a.a.createElement(G.DataListItemRow,null,a.a.createElement(A.DataListItemCells,{dataListCells:[a.a.createElement(B.DataListCell,{key:"1",className:"cell-grow"},a.a.createElement(K.Split,{gutter:"sm"},a.a.createElement(U.SplitItem,null,a.a.createElement(X.a,{height:60,src:$(t),sourceId:n})),a.a.createElement(U.SplitItem,null,a.a.createElement(z.TextContent,null,a.a.createElement(v.Grid,{gutter:"sm",className:"pf-u-gg-md"},a.a.createElement(g.GridItem,null,a.a.createElement(M.Level,null,a.a.createElement(J.LevelItem,null,a.a.createElement(Y.Text,{className:"pf-u-mb-0",component:Y.TextVariants.h5},a.a.createElement(te.a,{pathname:re.m,searchParams:l},c," # ",t.id))),a.a.createElement(J.LevelItem,null,a.a.createElement(te.a,{pathname:re.l,searchParams:l},"Failed"===t.state&&a.a.createElement(W.a,{className:"pf-u-mr-sm icon-danger-fill"}),t.state)))),a.a.createElement(g.GridItem,null,a.a.createElement(M.Level,null,a.a.createElement(J.LevelItem,null,a.a.createElement(Y.Text,{className:"pf-u-mb-0",component:Y.TextVariants.small},a.a.createElement(H.DateFormat,{date:t.created_at,variant:"relative"}))),a.a.createElement(J.LevelItem,null,a.a.createElement(Y.Text,{className:"pf-u-mb-0",component:Y.TextVariants.small},"Ordered by ",t.owner)),a.a.createElement(J.LevelItem,null,a.a.createElement(Y.Text,{className:"pf-u-mb-0",component:Y.TextVariants.small},a.a.createElement(H.DateFormat,{date:t.orderItems[0]&&t.orderItems[0].updated_at,variant:"relative"}))))))))))]}))))};ne.propTypes={item:q.a.object.isRequired};var ae=ne,oe=r(338),ce=r(335),ie=r(47);function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?le(Object(r),!0).forEach((function(t){d()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var se=Object(ce.a)((function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ie.a,n=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0;a(!0),n(Object(S.c)(e,t,r)).then((function(){return a(!1)}))}),1e3),pe={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1,filterType:"state"},fe=function(e,t){switch(t.type){case"setFetching":return ue({},e,{isFetching:t.payload});case"setFilterValue":return ue({},e,{filterValue:t.payload});case"setFilteringFlag":return ue({},e,{isFiltering:t.payload});case"setFilterType":return ue({},e,{filterType:t.payload,filterValue:""})}return e},me=function(){var e=Object(n.useReducer)(fe,pe),t=f()(e,2),r=t[0],o=r.isFetching,c=r.filterValue,i=r.isFiltering,l=r.filterType,u=t[1],p=Object(b.useSelector)((function(e){return e.orderReducer.orders})),m=p.data,d=p.meta,R=Object(b.useDispatch)();Object(n.useEffect)((function(){u({type:"setFetching",payload:!0}),Promise.all([R(Object(S.c)(l,c,d)),R(Object(C.c)())]).then((function(){return u({type:"setFetching",payload:!1})}))}),[]);var x=function(e,t){return u({type:"setFetching",payload:!0}),R(Object(S.c)(l,c,t)).then((function(){return u({type:"setFetching",payload:!1})})).catch((function(){return u({type:"setFetching",payload:!1})}))},q=function(e){u({type:"setFilterValue",payload:e}),se(l,e,d,R,(function(e){return u({type:"setFilteringFlag",payload:e})}))};return a.a.createElement(v.Grid,{gutter:"md"},a.a.createElement(g.GridItem,null,a.a.createElement(N.Section,{type:"content"},!d.noData&&a.a.createElement(w.PrimaryToolbar,s()({},c&&{activeFiltersConfig:{filters:[{name:c}],onDelete:function(){u({type:"setFilterValue",payload:""}),q("")}}},{filterConfig:{onChange:function(e,t){u({type:"setFilterType",payload:t}),c.length>0&&q("")},value:l,items:[{filterValues:{value:c,onChange:function(e,t){return q(t)}},label:"State",value:"state"},{filterValues:{value:c,onChange:function(e,t){return q(t)}},label:"Owner",value:"owner"}]},pagination:a.a.createElement(oe.a,{isDisabled:o||i,apiRequest:x,meta:d,isCompact:!0})})),a.a.createElement(y.DataList,{"aria-label":"order-list"},i||o?a.a.createElement(k.d,null):m.length>0?m.map((function(e,t){return a.a.createElement(ae,{key:e.id,index:t,item:e})})):a.a.createElement(D.EmptyTable,null,a.a.createElement(O.Bullseye,null,a.a.createElement(E.EmptyState,null,a.a.createElement(O.Bullseye,null,a.a.createElement(j.EmptyStateIcon,{icon:F.a})),a.a.createElement(h.Title,{size:"lg"},d.noData?"No orders":"No results found"),a.a.createElement(P.EmptyStateBody,null,d.noData?"No orders have been created.":"No results match the filter criteria. Remove all filters or clear all filters to show results."),a.a.createElement(_.EmptyStateSecondaryActions,null,!d.noData&&a.a.createElement(I.Button,{variant:"link",onClick:function(){u({type:"setFilteringFlag",payload:!0}),q("")}},"Clear all filters")))))),a.a.createElement(L.TableToolbar,null,a.a.createElement("div",{className:"bottom-pagination-container"},a.a.createElement(T.Flex,{className:"example-border",breakpointMods:[{modifier:"justify-content-flex-end"}]},d.count>0&&a.a.createElement(oe.a,{className:"pf-u-mt-0",isDisabled:o||i,apiRequest:x,meta:d})))))))};t.default=function(){return Object(n.useEffect)((function(){insights.chrome.appNavClick({id:"orders",secondaryNav:!0})}),[]),a.a.createElement(o.Stack,null,a.a.createElement(c.a,{schema:l()}),a.a.createElement(me,null))}}}]);
//# sourceMappingURL=../sourcemaps/orders.js.map