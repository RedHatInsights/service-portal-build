(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{337:function(e,t,r){"use strict";var n=r(1),a=r.n(n),c=r(27),o=r.n(c),i=r(47),l=r.n(i),s=r(83),u=r.n(s),m=r(84),p=r.n(m),d=r(0),f=r.n(d),v=r(3),b=r.n(v),h=r(48),g=r(25),O=r(85);function y(){var e=p()(["\n  pointer-events: ",";\n"]);return y=function(){return e},e}function E(){var e=p()(["\n  pointer-events: ",";\n"]);return E=function(){return e},e}var j=Object(O.b)(h.b)(E(),(function(e){return e.isDisabled?"none":"initial"})),I=Object(O.b)(h.c)(y(),(function(e){return e.isDisabled?"none":"initial"})),P=function(e,t,r){var n=Object.entries(t).map((function(e){var t=u()(e,2),r=t[0],n=t[1];return"".concat(r,"=").concat(n)})).join("&");return r?"".concat(e).concat(n.length>0?"&".concat(n):""):n.length>0?"?".concat(n):""},T=function(e){var t=e.pathname,r=e.searchParams,n=e.nav,a=e.preserveSearch,c=l()(e,["pathname","searchParams","nav","preserveSearch"]),i=Object(g.h)().search,s=n?I:j,u={pathname:t,search:P(i,r,a)};return f.a.createElement(s,o()({to:u},c))};T.propTypes={pathname:b.a.string.isRequired,searchParams:b.a.shape(a()({},b.a.string,b.a.string)),nav:b.a.bool,preserveSearch:b.a.bool},T.defaultProps={nav:!1,preserveSearch:!1,searchParams:{}},t.a=T},338:function(e,t,r){"use strict";var n=r(1),a=r.n(n),c=r(25);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(c.h)(),r=t.search,n=new URLSearchParams(r);return[e.reduce((function(e,t){return i({},e,a()({},t,n.get(t)))}),{}),r,n]}},345:function(e,t,r){"use strict";var n={};r.r(n),r.d(n,"getPlatforms",(function(){return v})),r.d(n,"getPlatform",(function(){return b})),r.d(n,"getPlatformItems",(function(){return h})),r.d(n,"getPlatformInventories",(function(){return g})),r.d(n,"getServiceOffering",(function(){return O}));var a=r(1),c=r.n(a),o=r(2),i=r(83),l=r.n(i),s=r(57),u=r(12),m=r(49);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var d=Object(s.a)(),f=Object(s.b)(),v=function(){return f.post("".concat(u.h,"/graphql"),{query:'\nquery {\n  application_types (filter: { name: "/insights/platform/catalog" }) {\n    id\n    name\n    sources {\n      id\n      name\n      source_type_id\n    }\n  }\n}'}).then((function(e){return e.data.application_types})).then((function(e){return l()(e,1)[0].sources}))},b=function(e){return d.get("".concat(u.h,"/sources/").concat(e))},h=function(e,t,r){var n=t?"&filter[name][contains_i]=".concat(t):"";return e?d.get("".concat(u.i,"/sources/").concat(e,"/service_offerings?filter[archived_at][nil]").concat(n).concat(r?"&limit=".concat(r.limit,"&offset=").concat(r.offset):"")):d.get("".concat(u.i,"/service_offerings"))},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m.a;return e?d.get("".concat(u.i,"/sources/").concat(e,"/service_inventories?filter[name][contains_i]=").concat(t).concat(r?"&limit=".concat(r.limit,"&offset=").concat(r.offset):"")):d.get("".concat(u.i,"/service_inventories?limit=").concat(r.limit,"&offset=").concat(r.offset))},O=function(e,t){return Promise.all([d.get("".concat(u.i,"/service_offerings/").concat(e)),d.get("".concat(u.h,"/sources/").concat(t)).then((function(e){return d.get("".concat(u.h,"/source_types/").concat(e.source_type_id)).then((function(t){var r=t.icon_url;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{icon_url:r})}))}))]).then((function(e){var t=l()(e,2);return{service:t[0],source:t[1]}}))};function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"c",(function(){return j})),r.d(t,"b",(function(){return I})),r.d(t,"d",(function(){return P})),r.d(t,"a",(function(){return T})),r.d(t,"e",(function(){return x}));var j=function(){return function(e){return e((function(e){return e({type:"".concat(o.j,"_PENDING")}),v().then((function(t){return e({type:"".concat(o.j,"_FULFILLED"),payload:t})})).catch((function(t){return e({type:"".concat(o.j,"_REJECTED"),payload:t})}))}))}},I=function(e,t,r){return{type:o.m,payload:h(e,t,r),meta:E({platformId:e,filter:t},r)}},P=function(e){return{type:o.i,payload:b(e)}},T=function(e,t,r){return{type:o.k,payload:g(e,t,r)}},x=function(){return{type:o.u,payload:O.apply(n,arguments)}}},351:function(e,t,r){"use strict";var n=r(83),a=r.n(n),c=r(84),o=r.n(c),i=r(0),l=r.n(i),s=r(3),u=r.n(s),m=r(85),p=r(34),d=r(50),f=r(359),v=r.n(f),b=r(371);function h(){var e=o()(["\n  height: ",";\n  display: ",";\n  float: ",";\n  width: ",";\n"]);return h=function(){return e},e}var g=Object(m.b)(b.LazyLoadImage)(h(),(function(e){var t=e.height;return e.hidden?"0px":"".concat(t,"px")||!1}),(function(e){return e.hidden?"none":"inherit"}),(function(e){return e.hidden?"left":"inherit"}),(function(e){return e.hidden?0:"inherit"}));function O(){var e=o()(["\n  display: inline-block;\n  height: ",";\n"]);return O=function(){return e},e}var y=m.b.div(O(),(function(e){var t=e.height;return"".concat(t,"px")})),E=function(e){var t=e.src,r=e.height,n=e.sourceId,c=Object(i.useState)(!1),o=a()(c,2),s=o[0],u=o[1],m=Object(i.useState)(!1),f=a()(m,2),b=f[0],h=f[1],O=Object(p.useSelector)((function(e){return e.platformReducer.platformIconMapping})),E=n?O[n]:v.a;return l.a.createElement(y,{height:r},!s&&l.a.createElement(d.c,{height:r}),l.a.createElement(g,{threshold:2e3,delayTime:0,hidden:!s,height:s?r:0,onError:function(){return h(!0)},onLoad:function(){return u(!0)},src:!t||b?E:t}))};E.propTypes={src:u.a.string,platformId:u.a.string,style:u.a.object,height:u.a.number,sourceId:u.a.string},E.defaultProps={style:{},height:40};t.a=E},352:function(e,t,r){"use strict";var n=r(27),a=r.n(n),c=r(47),o=r.n(c),i=r(0),l=r.n(i),s=r(3),u=r.n(s),m=r(337),p=function(e){var t=e.children,r=e.pathname,n=o()(e,["children","pathname"]);return r?l.a.createElement(m.a,a()({pathname:r},n),t):t};p.propTypes={pathname:u.a.string,children:u.a.oneOfType([u.a.node,u.a.arrayOf(u.a.node)]).isRequired},t.a=p},358:function(e,t,r){"use strict";var n=r(0),a=r.n(n),c=r(384),o=r(385),i=r(34),l=r(352);t.a=function(){var e=Object(i.useSelector)((function(e){return e.breadcrumbsReducer.fragments}));return e.length<=1?null:a.a.createElement(c.Breadcrumb,null,e.map((function(t,r){var n=t.title,c=t.pathname,i=t.searchParams;return a.a.createElement(l.a,{pathname:e.length!==r+1?c:void 0,searchParams:i,nav:!0,exact:!0,key:c,className:"pf-c-breadcrumb__item"},a.a.createElement(o.BreadcrumbItem,{isActive:e.length===r+1},n))})))}},359:function(e,t,r){e.exports=r.p+"fonts/card-icon-default.svg"},393:function(e,t,r){"use strict";var n=r(83),a=r.n(n),c=r(47),o=r.n(c),i=r(1),l=r.n(i),s=r(0),u=r.n(s),m=r(40),p=r(2),d=r(42),f=r.n(d),v=r(57),b=r(12),h=r(49);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=Object(v.c)(),E=(Object(v.d)(),Object(v.f)()),j=(Object(v.h)(),Object(v.a)());function I(e){return E.listServicePlans(e)}var P=function(e){return j.get("".concat(b.c,"/order_items?").concat(e.map((function(e){return"filter[order_id][]=".concat(e)})).join("&")))},T=function(e){return j.get("".concat(b.c,"/portfolio_items?").concat(e.map((function(e){return"filter[id][]=".concat(e)})).join("&")))};var x=r(3),L=r.n(x),_=r(48),D=r(51),w=function(e){var t=e.id,r=e.dispatch;return u.a.createElement(s.Fragment,null,"You can track the progress of Order # ",t," in your"," ",u.a.createElement(_.b,{onClick:function(){return r(Object(m.clearNotifications)())},to:D.k},"Orders")," ","page.")};w.propTypes={id:L.a.string.isRequired,dispatch:L.a.func.isRequired};var R=w;function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"d",(function(){return k})),r.d(t,"e",(function(){return q})),r.d(t,"a",(function(){return C})),r.d(t,"c",(function(){return V})),r.d(t,"b",(function(){return F}));var k=function(e){return{type:p.v,payload:I(e)}},q=function(e){return function(t){return t({type:p.S,payload:(r=e,f.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.service_parameters,a=n.providerControlParameters,c=o()(n,["providerControlParameters"]),i=o()(r,["service_parameters"]),e.next=3,f.a.awrap(y.createOrder());case 3:return l=e.sent,(s={}).count=1,s=O({},s,{},i,{service_parameters:c,provider_control_parameters:a||{}}),e.next=9,f.a.awrap(y.addToOrder(l.id,s));case 9:return e.abrupt("return",y.submitOrder(l.id));case 10:case"end":return e.stop()}}))).then((function(e){var r=e.id;return t(Object(m.addNotification)({variant:"success",title:"Your order has been accepted successfully",description:u.a.createElement(R,{id:r,dispatch:t}),dismissable:!0}))}))});var r,n,a,c,i,l,s}},C=function(e){return function(t,r){t({type:"".concat(p.d,"_PENDING")});var n=r().orderReducer.orderDetail;return function(e){return y.cancelOrder(e)}(e).then((function(){return n.order.state="Canceled",n.approvalRequest&&n.approvalRequest.length>0&&(n.approvalRequest[0].state="canceled"),t({type:p.N,payload:S({},n)}),n})).then((function(e){return t(Object(m.addNotification)({variant:"success",title:"Your order has been canceled successfully",description:"Order ".concat("Order #".concat(e.order.id)," was canceled."),dismissable:!0}))})).then((function(){return t({type:"".concat(p.d,"_FULFILLED")})})).catch((function(e){t({type:"".concat(p.d,"_REJECTED"),payload:e})}))}},V=function(e,t,r){return function(n){return n({type:"".concat(p.g,"_PENDING")}),function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:h.a;return j.get("".concat(b.c,"/orders?filter[").concat(e,"][contains_i]=").concat(t,"&limit=").concat(r.limit,"&offset=").concat(r.offset)).then((function(e){return P(e.data.map((function(e){return e.id}))).then((function(t){return T(t.data.map((function(e){return e.portfolio_item_id}))).then((function(r){return O({portfolioItems:r},e,{data:e.data.map((function(e){return O({},e,{orderItems:t.data.filter((function(t){return t.order_id===e.id}))})}))})}))}))}))}(e,t,r).then((function(e){var r=e.portfolioItems,a=o()(e,["portfolioItems"]);return n({type:p.O,payload:r}),n({type:"".concat(p.g,"_FULFILLED"),meta:{filter:t},payload:a})})).catch((function(e){return n({type:"".concat(p.g,"_REJECTED"),payload:e})}))}},F=function(e){return function(t){return t({type:"".concat(p.N,"_PENDING")}),function(e){return Promise.all([j.get("".concat(b.c,"/orders/").concat(e.order)),j.get("".concat(b.c,"/order_items/").concat(e["order-item"])),j.get("".concat(b.c,"/portfolio_items/").concat(e["portfolio-item"])),j.get("".concat(b.h,"/sources/").concat(e.platform)),j.get("".concat(b.c,"/order_items/").concat(e["order-item"],"/progress_messages")),j.get("".concat(b.c,"/portfolios/").concat(e.portfolio)),j.get("".concat(b.c,"/order_items/").concat(e["order-item"],"/approval_requests"))])}(e).then((function(e){var r=a()(e,7),n=r[0],c=r[1],o=r[2],i=r[3],l=r[4],s=r[5],u=r[6];return t({type:"".concat(p.N,"_FULFILLED"),payload:{order:n,orderItem:c,portfolioItem:o,platform:i,progressMessages:l,portfolio:s,approvalRequest:u}})})).catch((function(e){return t({type:"".concat(p.N,"_REJECTED"),payload:e})}))}}},412:function(e,t,r){"use strict";var n,a,c=r(28),o=r.n(c),i=r(0),l=r(25),s=r(34),u=r(1),m=r.n(u),p=r(2),d=r(51),f=(d.s,{"portfolio-item":["source"]}),v=(n={},m()(n,d.u,(function(e){return e().portfolioReducer.selectedPortfolio.name})),m()(n,d.t,(function(e){return e().portfolioReducer.portfolioItem.portfolioItem.name})),m()(n,d.e,(function(){return"Edit survey"})),m()(n,d.b,(function(){return"Add products"})),m()(n,d.p,(function(e){return e().platformReducer.selectedPlatform.name})),m()(n,d.q,(function(e){return e().platformReducer.serviceOffering.service.name})),m()(n,d.m,(function(e){var t=e().orderReducer.orderDetail,r=t.portfolioItem,n=t.order;return"".concat(r.name," # ").concat(n.id)})),n),b=(a={},m()(a,d.u,{pathname:d.s,title:"Portfolios",searchParams:{}}),m()(a,d.p,{pathname:d.n,title:"Platforms",searchParams:{}}),m()(a,d.m,{pathname:d.k,title:"Orders",searchParams:{}}),a);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){m()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(r,n){if(0===e.length)return r({type:p.z,payload:[]});var a=e.replace(/^\//,"").split("/").reduce((function(e,r,a){var c="".concat(a>0&&e[a-1]?e[a-1].pathname:"","/").concat(r),i=v[c];if(!i)return e;var l=g({},a>0&&e[a-1].searchParams,{},t[r]?m()({},r,t[r]):{});return f[r]&&f[r].forEach((function(e){l[e]=t[e]})),[].concat(o()(e),[{pathname:c,searchParams:l,title:i(n)}])}),[]);return a.length>0&&b[a[0].pathname]&&(a=[b[a[0].pathname]].concat(o()(a))),r({type:p.z,payload:a})}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(s.useDispatch)(),r=Object(l.h)(),n=r.pathname,a=r.search;if(0===e.length)return t(O("",{}));var c=new URLSearchParams(a),u={};return c.forEach((function(e,t){u[t]=e})),Object(i.useEffect)((function(){t(O(n,u))}),[n].concat(o()(e))),function(){return t(O("",{}))}}},621:function(e,t,r){"use strict";r.r(t);var n=r(83),a=r.n(n),c=r(0),o=r.n(c),i=r(25),l=r(487),s=r(152),u=r(153),m=r(365),p=r(366),d=r(89),f=r(90),v=r(34),b=r(393),h=r(3),g=r.n(h),O=r(376),y=function(e){var t=e.portfolioItemName,r=e.orderId;return o.a.createElement(O.Title,{size:"3xl"},t," # ",r)};y.propTypes={portfolioItemName:g.a.string.isRequired,orderId:g.a.string.isRequired};var E=y,j=r(473),I=r(86),P=r(353),T=r(166),x=r.n(T),L=function(e){var t=e.name,r=e.cancelOrder,n=e.onClose,a=e.isOpen;return o.a.createElement(P.Modal,{isOpen:a,onClose:n,title:" ",header:o.a.createElement(O.Title,{size:"2xl",headingLevel:"h2"},o.a.createElement(x.a,{fill:"#F0AB00"})," Cancel order"),isSmall:!0,actions:[o.a.createElement(I.Button,{onClick:r,key:"cancel-order",id:"cancel-order",variant:"danger"},"Cancel order"),o.a.createElement(I.Button,{onClick:n,key:"keep-order",id:"keep-order",variant:"link"},"Keep order")],isFooterLeftAligned:!0},"Are you sure you want to cancel ",t,"?")};L.propTypes={name:g.a.string.isRequired,cancelOrder:g.a.func.isRequired,onClose:g.a.func.isRequired,isOpen:g.a.bool};var _=L,D=["Approval Pending"],w=function(e){return D.includes(e)},R=function(e){var t=e.state,r=e.orderId,n=e.portfolioItemName,i=Object(v.useDispatch)(),l=Object(c.useState)(!1),s=a()(l,2),u=s[0],m=s[1];return o.a.createElement(c.Fragment,null,o.a.createElement(_,{onClose:function(){return m(!1)},isOpen:u,cancelOrder:function(){return i(Object(b.a)(r))},name:n}),o.a.createElement(j.ActionGroup,null,o.a.createElement(I.Button,{onClick:function(){return m(!0)},isDisabled:!w(t),type:"button",className:"pf-u-mr-md",id:"cancel-order-action"},"Cancel order"),o.a.createElement(I.Button,{isDisabled:!0,type:"button"},"Reorder")))};R.propTypes={state:g.a.string,orderId:g.a.string.isRequired,portfolioItemName:g.a.string.isRequired};var N=R,S=r(39),k=r(21),q=r(163),C=r.n(q),V=r(355),F=r(351),U=r(12),A=function(e){var t=e.jobName,r=e.state,n=e.orderRequestDate,a=e.orderUpdateDate,c=e.owner,i=e.portfolioItemId,l=e.sourceId;return o.a.createElement(m.Split,{className:"pf-u-mt-sm"},o.a.createElement(p.SplitItem,{className:"pf-u-mr-md"},o.a.createElement(F.a,{sourceId:l,height:60,src:"".concat(U.c,"/portfolio_items/").concat(i,"/icon")})),o.a.createElement(p.SplitItem,null,o.a.createElement(s.Level,null,o.a.createElement(u.LevelItem,{className:"pf-u-mr-lg"},o.a.createElement(O.Title,{headingLevel:"h5",size:"md"},t)),o.a.createElement(u.LevelItem,null,o.a.createElement(O.Title,{headingLevel:"h5",size:"md"},"Status:"," ","Failed"===r&&o.a.createElement(C.a,{className:"pf-u-mr-sm icon-danger-fill"})," ",r))),o.a.createElement(s.Level,null,o.a.createElement(u.LevelItem,{className:"pf-u-mr-lg"},o.a.createElement(S.TextContent,null,o.a.createElement(k.Text,{component:k.TextVariants.small},"Ordered ",o.a.createElement(V.DateFormat,{date:n,type:"relative"})))),o.a.createElement(u.LevelItem,{className:"pf-u-mr-lg"},o.a.createElement(S.TextContent,null,o.a.createElement(k.Text,{component:k.TextVariants.small},"Ordered by ",c))),o.a.createElement(u.LevelItem,null,o.a.createElement(S.TextContent,null,o.a.createElement(k.Text,{component:k.TextVariants.small},"Last updated ",o.a.createElement(V.DateFormat,{date:a,type:"relative"})))))))};A.propTypes={portfolioItemId:g.a.string.isRequired,sourceId:g.a.string.isRequired,state:g.a.string.isRequired,jobName:g.a.string.isRequired,orderRequestDate:g.a.string.isRequired,orderUpdateDate:g.a.string.isRequired,owner:g.a.string.isRequired};var B=A,z=r(27),J=r.n(z),G=r(614),M=r(488),Y=r(337),K=function(e){var t=e.baseUrl,r=e.isFetching,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.state;return[{link:"",title:"Order details"},{link:"/approval",title:"Approval"},{link:"/lifecycle",title:"Lifecycle",isDisabled:"Completed"!==t}]}(Object(v.useSelector)((function(e){return e.orderReducer.orderDetail||{}})).order);return o.a.createElement(M.Nav,null,o.a.createElement(G.NavList,{className:"orders-side-nav-list"},o.a.createElement("li",{className:"pf-c-nav__item orders-nav-section-group"},o.a.createElement(S.TextContent,null,o.a.createElement(k.Text,{component:k.TextVariants.small},"Order steps"))),n.map((function(e){var n=e.link,a=e.title,c=e.isDisabled;return o.a.createElement("li",J()({key:n||a,className:"pf-c-nav__item orders-side-nav-item orders-side-nav-category".concat(c||r?" disabled":"")},c?{tabIndex:-1}:{}),o.a.createElement(Y.a,J()({exact:!0,nav:!0,isDisabled:c,pathname:"".concat(t).concat(n),preserveSearch:!0,className:"pf-c-nav__link orders-side-nav-link",activeClassName:"pf-m-active"},c?{tabIndex:-1}:{}),a))}))))};K.propTypes={baseUrl:g.a.string.isRequired,isFetching:g.a.bool};var H=K,Q=r(429),W=r(430),X=r(437),Z=r.n(X),$=function(){var e=Object(v.useSelector)((function(e){return e.orderReducer.orderDetail})),t=e.order,r=e.platform,n=e.progressMessages,a=e.portfolio,c=e.orderItem;return o.a.createElement(S.TextContent,null,o.a.createElement(k.Text,{component:k.TextVariants.h2},"Order details"),o.a.createElement(Q.TextList,{component:Q.TextListVariants.dl},o.a.createElement(W.TextListItem,{component:W.TextListItemVariants.dt},"Order ID"),o.a.createElement(W.TextListItem,{component:W.TextListItemVariants.dd},t.id),o.a.createElement(W.TextListItem,{component:W.TextListItemVariants.dt},"Ordered"),o.a.createElement(W.TextListItem,{component:W.TextListItemVariants.dd},o.a.createElement(V.DateFormat,{date:t.created_at,variant:"relative"})),o.a.createElement(W.TextListItem,{component:W.TextListItemVariants.dt},"Portfolio"),o.a.createElement(W.TextListItem,{component:W.TextListItemVariants.dd},a.name),o.a.createElement(W.TextListItem,{component:W.TextListItemVariants.dt},"Platform"),o.a.createElement(W.TextListItem,{component:W.TextListItemVariants.dd},r.name)),o.a.createElement("hr",{className:"pf-c-divider"}),o.a.createElement(k.Text,{component:k.TextVariants.h2},"Order parameters"),o.a.createElement(Z.a,{src:c.service_parameters}),o.a.createElement(k.Text,{component:k.TextVariants.h2},"Progress messages"),o.a.createElement(Z.a,{src:n.data}))},ee=function(){var e=Object(v.useSelector)((function(e){return e.orderReducer.orderDetail})),t=e.order,r=e.approvalRequest;return o.a.createElement(S.TextContent,null,o.a.createElement(k.Text,{component:k.TextVariants.h2},"Approval requests"),r.data.map((function(e){return o.a.createElement(Q.TextList,{key:e.id,component:Q.TextListVariants.dl},o.a.createElement(W.TextListItem,{component:W.TextListItemVariants.dt},"Request ID"),o.a.createElement(W.TextListItem,{component:W.TextListItemVariants.dd},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat(document.baseURI,"ansible/catalog/approval/requests/detail/").concat(e.approval_request_ref)},e.approval_request_ref)),o.a.createElement(W.TextListItem,{component:W.TextListItemVariants.dt},"Request created"),o.a.createElement(W.TextListItem,{component:W.TextListItemVariants.dd},o.a.createElement(V.DateFormat,{date:t.created_at,variant:"relative"})),o.a.createElement(W.TextListItem,{component:W.TextListItemVariants.dt},"State"),o.a.createElement(W.TextListItem,{component:W.TextListItemVariants.dd},e.state),e.reason&&o.a.createElement(c.Fragment,null,o.a.createElement(W.TextListItem,{component:W.TextListItemVariants.dt},"Approval reason"),o.a.createElement(W.TextListItem,{component:W.TextListItemVariants.dd},e.reason)),e.request_completed_at&&o.a.createElement(c.Fragment,null,o.a.createElement(W.TextListItem,{component:W.TextListItemVariants.dt},"Completed at"),o.a.createElement(W.TextListItem,{component:W.TextListItemVariants.dd},o.a.createElement(V.DateFormat,{date:e.request_completed_at,variant:"relative"}))))})))},te=r(50),re=r(338),ne=r(616),ae=r.n(ne),ce=r(51),oe=function(){var e=Object(re.a)([]),t=a()(e,2)[1],r=Object(i.i)(ce.m).url,n=Object(v.useSelector)((function(e){return e.orderReducer.orderDetail||{}})),c=n.order,l=n.orderItem;return"Completed"!==c.state?o.a.createElement(i.a,{to:{pathname:r,search:t}}):o.a.createElement("div",null,o.a.createElement("a",{href:l.external_url,target:"_blank",rel:"noopener noreferrer"},"Manage product ",o.a.createElement(ae.a,null)))},ie=r(358),le=r(412),se=r(345),ue=r(84),me=r.n(ue),pe=r(459),de=r(85);function fe(){var e=me()(["\n  border-bottom: 2px solid var(--pf-global--Color--light-200);\n"]);return fe=function(){return e},e}function ve(){var e=me()(["\n  background-color: var(--pf-global--Color--light-100);\n"]);return ve=function(){return e},e}var be=Object(de.b)(pe.Stack)(ve()),he=Object(de.b)(l.StackItem)(fe()),ge=["order-item","portfolio-item","platform","portfolio","order"];t.default=function(){var e=Object(c.useState)(!0),t=a()(e,2),r=t[0],n=t[1],h=Object(re.a)(ge),g=a()(h,1)[0],O=Object(v.useSelector)((function(e){return e.orderReducer.orderDetail||{}})),y=Object(i.i)(ce.m),j=Object(v.useDispatch)(),I=Object(le.a)([O]);if(Object(c.useEffect)((function(){return insights.chrome.appNavClick({id:"orders",secondaryNav:!0}),n(!0),Promise.all([j(Object(se.c)()),j(Object(b.b)(g))]).then((function(){return n(!1)})),function(){return I()}}),[]),!r&&0===Object.keys(O).length)return o.a.createElement(i.a,{to:ce.k});var P=O.order,T=O.portfolioItem,x=O.platform,L=O.orderItem;return o.a.createElement(be,{className:"bg-fill"},o.a.createElement(he,{className:"pf-u-p-lg"},r?o.a.createElement(te.e,null):o.a.createElement(c.Fragment,null,o.a.createElement(s.Level,{className:"pf-u-mb-md"},o.a.createElement(ie.a,null)),o.a.createElement(s.Level,null,o.a.createElement(u.LevelItem,null,o.a.createElement(E,{portfolioItemName:T.name,orderId:P.id})),o.a.createElement(u.LevelItem,null,o.a.createElement(N,{portfolioItemName:T.name,orderId:P.id,state:P.state}))),o.a.createElement(s.Level,null,o.a.createElement(B,{portfolioItemId:T.id,sourceId:x.id,state:P.state,jobName:T.name,orderRequestDate:P.created_at,orderUpdateDate:L.updated_at,owner:P.owner})))),o.a.createElement(l.StackItem,{className:"pf-u-pt-xl"},o.a.createElement(m.Split,{gutter:"md",className:"orders-nav-layout"},o.a.createElement(p.SplitItem,{className:"order-detail-nav-cotainer"},o.a.createElement(H,{isFetching:r,baseUrl:y.url})),o.a.createElement(p.SplitItem,{className:"order-detail-content-cotainer"},r?o.a.createElement(d.Bullseye,null,o.a.createElement(f.Spinner,null)):o.a.createElement(i.d,null,o.a.createElement(i.b,{path:"".concat(y.url,"/approval"),component:ee}),o.a.createElement(i.b,{path:"".concat(y.url,"/lifecycle")},o.a.createElement(oe,null)),o.a.createElement(i.b,{path:y.url,component:$}))))))}}}]);
//# sourceMappingURL=../sourcemaps/order-detail.js.map