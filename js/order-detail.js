(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{377:function(e,t,r){"use strict";var n=r(1),a=r.n(n),c=r(16);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(c.h)(),r=t.search,n=new URLSearchParams(r);return[e.reduce((function(e,t){return i({},e,a()({},t,n.get(t)))}),{}),r,n]}},386:function(e,t,r){"use strict";var n=r(92),a=r.n(n),c=r(26),o=r.n(c),i=r(0),l=r.n(i),u=r(2),s=r.n(u),m=r(93),d=function(e){var t=e.children,r=e.pathname,n=o()(e,["children","pathname"]);return r?l.a.createElement(m.a,a()({pathname:r},n),t):t};d.propTypes={pathname:s.a.string,children:s.a.oneOfType([s.a.node,s.a.arrayOf(s.a.node)]).isRequired},t.a=d},388:function(e,t,r){"use strict";var n={};r.r(n),r.d(n,"getPlatforms",(function(){return v})),r.d(n,"getPlatform",(function(){return h})),r.d(n,"getPlatformItems",(function(){return b})),r.d(n,"getPlatformInventories",(function(){return g})),r.d(n,"getServiceOffering",(function(){return O}));var a=r(1),c=r.n(a),o=r(3),i=r(36),l=r.n(i),u=r(65),s=r(12),m=r(49);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var p=Object(u.a)(),f=Object(u.b)(),v=function(){return f.post("".concat(s.h,"/graphql"),{query:'\nquery {\n  application_types (filter: { name: "/insights/platform/catalog" }) {\n    id\n    name\n    sources {\n      id\n      name\n      source_type_id\n    }\n  }\n}'}).then((function(e){return e.data.application_types})).then((function(e){return l()(e,1)[0].sources}))},h=function(e){return p.get("".concat(s.h,"/sources/").concat(e))},b=function(e,t,r){var n=t?"&filter[name][contains_i]=".concat(t):"";return e?p.get("".concat(s.i,"/sources/").concat(e,"/service_offerings?filter[archived_at][nil]").concat(n).concat(r?"&limit=".concat(r.limit,"&offset=").concat(r.offset):"")):p.get("".concat(s.i,"/service_offerings"))},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m.a;return e?p.get("".concat(s.i,"/sources/").concat(e,"/service_inventories?filter[name][contains_i]=").concat(t).concat(r?"&limit=".concat(r.limit,"&offset=").concat(r.offset):"")):p.get("".concat(s.i,"/service_inventories?limit=").concat(r.limit,"&offset=").concat(r.offset))},O=function(e,t){return Promise.all([p.get("".concat(s.i,"/service_offerings/").concat(e)),p.get("".concat(s.h,"/sources/").concat(t)).then((function(e){return p.get("".concat(s.h,"/source_types/").concat(e.source_type_id)).then((function(t){var r=t.icon_url;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{icon_url:r})}))}))]).then((function(e){var t=l()(e,2);return{service:t[0],source:t[1]}}))};function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"c",(function(){return j})),r.d(t,"b",(function(){return I})),r.d(t,"d",(function(){return x})),r.d(t,"a",(function(){return P})),r.d(t,"e",(function(){return T}));var j=function(){return function(e){return e({type:"".concat(o.k,"_PENDING")}),v().then((function(t){return e({type:"".concat(o.k,"_FULFILLED"),payload:t})})).catch((function(t){return e({type:"".concat(o.k,"_REJECTED"),payload:t})}))}},I=function(e,t,r){return{type:o.n,payload:b(e,t,r),meta:y({platformId:e,filter:t},r)}},x=function(e){return{type:o.j,payload:h(e)}},P=function(e,t,r){return{type:o.l,payload:g(e,t,r)}},T=function(){return{type:o.v,payload:O.apply(n,arguments)}}},389:function(e,t,r){"use strict";var n=r(0),a=r.n(n),c=r(422),o=r(423),i=r(37),l=r(386);t.a=function(){var e=Object(i.useSelector)((function(e){return e.breadcrumbsReducer.fragments}));return e.length<=1?null:a.a.createElement(c.Breadcrumb,null,e.map((function(t,r){var n=t.title,c=t.pathname,i=t.searchParams;return(a.a.createElement(l.a,{pathname:e.length!==r+1?c:void 0,searchParams:i,nav:!0,exact:!0,key:c,className:"pf-c-breadcrumb__item"},a.a.createElement(o.BreadcrumbItem,{isActive:e.length===r+1},n)))})))}},397:function(e,t,r){"use strict";var n=r(36),a=r.n(n),c=r(18),o=r.n(c),i=r(0),l=r.n(i),u=r(2),s=r.n(u),m=r(19),d=r(37),p=r(51),f=r(409),v=r.n(f),h=r(419);function b(){var e=o()(["\n  height: ",";\n  display: ",";\n  float: ",";\n  width: ",";\n"]);return b=function(){return e},e}var g=Object(m.b)(h.LazyLoadImage)(b(),(function(e){var t=e.height;return e.hidden?"0px":"".concat(t,"px")||!1}),(function(e){return e.hidden?"none":"inherit"}),(function(e){return e.hidden?"left":"inherit"}),(function(e){return e.hidden?0:"inherit"}));function O(){var e=o()(["\n  display: inline-block;\n  height: ",";\n"]);return O=function(){return e},e}var E=m.b.div(O(),(function(e){var t=e.height;return"".concat(t,"px")})),y=function(e){var t=e.src,r=e.height,n=e.sourceId,c=Object(i.useState)(!1),o=a()(c,2),u=o[0],s=o[1],m=Object(i.useState)(!1),f=a()(m,2),h=f[0],b=f[1],O=Object(d.useSelector)((function(e){return e.platformReducer.platformIconMapping})),y=n?O[n]:v.a;return l.a.createElement(E,{height:r},!u&&l.a.createElement(p.c,{height:r}),l.a.createElement(g,{threshold:2e3,delayTime:0,hidden:!u,height:u?r:0,onError:function(){return b(!0)},onLoad:function(){return s(!0)},src:!t||h?y:t}))};y.propTypes={src:s.a.string,platformId:s.a.string,style:s.a.object,height:s.a.number,sourceId:s.a.string},y.defaultProps={style:{},height:40};t.a=y},409:function(e,t,r){e.exports=r.p+"fonts/card-icon-default.svg"},440:function(e,t,r){"use strict";var n=r(26),a=r.n(n),c=r(36),o=r.n(c),i=r(1),l=r.n(i),u=r(0),s=r.n(u),m=r(41),d=r(3),p=r(42),f=r.n(p),v=r(66),h=r.n(v),b=r(65),g=r(12),O=r(49);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=Object(b.c)(),I=(Object(b.d)(),Object(b.f)()),x=Object(b.a)();function P(e){return I.listServicePlans(e)}function T(e){return L.apply(this,arguments)}function L(){return(L=h()(f.a.mark((function e(t){var r,n,c,o,i,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.service_parameters,n=r.providerControlParameters,c=a()(r,["providerControlParameters"]),o=a()(t,["service_parameters"]),e.next=3,j.createOrder();case 3:return i=e.sent,(l={}).count=1,l=y({},l,{},o,{service_parameters:c,provider_control_parameters:n||{}}),e.next=9,j.addToOrder(i.id,l);case 9:return e.abrupt("return",j.submitOrder(i.id));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=function(e){return x.get("".concat(g.c,"/order_items?").concat(e.map((function(e){return"filter[order_id][]=".concat(e)})).join("&")))},w=function(e){return x.get("".concat(g.c,"/portfolio_items?").concat(e.map((function(e){return"filter[id][]=".concat(e)})).join("&")))},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O.a;return x.get("".concat(g.c,"/orders?").concat(e,"&limit=").concat(t.limit,"&offset=").concat(t.offset)).then((function(e){return _(e.data.map((function(e){return e.id}))).then((function(t){return w(t.data.map((function(e){return e.portfolio_item_id}))).then((function(r){return y({portfolioItems:r},e,{data:e.data.map((function(e){return y({},e,{orderItems:t.data.filter((function(t){return t.order_id===e.id}))})}))})}))}))}))};var k=r(2),R=r.n(k),N=r(24),S=r(52),q=function(e){var t=e.id,r=e.dispatch;return(s.a.createElement(u.Fragment,null,"You can track the progress of Order # ",t," in your"," ",s.a.createElement(N.a,{onClick:function(){return r(Object(m.clearNotifications)())},to:S.k},"Orders")," ","page."))};q.propTypes={id:R.a.string.isRequired,dispatch:R.a.func.isRequired};var F=q;function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"e",(function(){return A})),r.d(t,"f",(function(){return B})),r.d(t,"a",(function(){return U})),r.d(t,"d",(function(){return z})),r.d(t,"c",(function(){return J})),r.d(t,"b",(function(){return M}));var A=function(e){return{type:d.w,payload:P(e)}},B=function(e){return function(t){return t({type:d.T,payload:T(e).then((function(e){var r=e.id;return t(Object(m.addNotification)({variant:"success",title:"Your order has been accepted successfully",description:s.a.createElement(F,{id:r,dispatch:t}),dismissable:!0}))}))})}},U=function(e){return function(t,r){t({type:"".concat(d.d,"_PENDING")});var n=r().orderReducer.orderDetail;return function(e){return j.cancelOrder(e)}(e).then((function(){return n.order.state="Canceled",n.approvalRequest&&n.approvalRequest.length>0&&(n.approvalRequest[0].state="canceled"),t({type:d.O,payload:V({},n)}),n})).then((function(e){return t(Object(m.addNotification)({variant:"success",title:"Your order has been canceled successfully",description:"Order ".concat("Order #".concat(e.order.id)," was canceled."),dismissable:!0}))})).then((function(){return t({type:"".concat(d.d,"_FULFILLED")})})).catch((function(e){t({type:"".concat(d.d,"_REJECTED"),payload:e})}))}},z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O.a;return function(r){var n=Object.entries(e).filter((function(e){var t=o()(e,2)[1];return t&&t.length>0})).map((function(e){var t=o()(e,2),r=t[0],n=t[1];return Array.isArray(n)?n.map((function(e){return"filter[".concat(r,"][]=").concat(e)})).join("&"):"filter[".concat(r,"][contains_i]=").concat(n)})).join("&");return r({type:"".concat(d.h,"_PENDING")}),D(n,t).then((function(c){var o=c.portfolioItems,i=a()(c,["portfolioItems"]);return r({type:d.P,payload:o}),r({type:"".concat(d.h,"_FULFILLED"),meta:V({},t,{filter:n,filters:e,storeState:!0,stateKey:"orders"}),payload:i})})).catch((function(e){return r({type:"".concat(d.h,"_REJECTED"),payload:e})}))}},J=function(e){return function(t){return t({type:"".concat(d.O,"_PENDING")}),function(e){return Promise.all([x.get("".concat(g.c,"/orders/").concat(e.order)),x.get("".concat(g.c,"/order_items/").concat(e["order-item"])),x.get("".concat(g.c,"/portfolio_items/").concat(e["portfolio-item"])).catch((function(e){if(404===e.status)return{object:"Portfolio item",notFound:!0};throw e})),x.get("".concat(g.h,"/sources/").concat(e.platform)).catch((function(e){if(404===e.status||400===e.status)return{object:"Platform",notFound:!0};throw e})),x.get("".concat(g.c,"/order_items/").concat(e["order-item"],"/progress_messages")),x.get("".concat(g.c,"/portfolios/").concat(e.portfolio)).catch((function(e){if(404===e.status||400===e.status)return{object:"Portfolio",notFound:!0};throw e})),x.get("".concat(g.c,"/order_items/").concat(e["order-item"],"/approval_requests"))])}(e).then((function(e){var r=o()(e,7),n=r[0],a=r[1],c=r[2],i=r[3],l=r[4],u=r[5],s=r[6];return t({type:"".concat(d.O,"_FULFILLED"),payload:{order:n,orderItem:a,portfolioItem:c,platform:i,progressMessages:l,portfolio:u,approvalRequest:s}})})).catch((function(e){return t({type:"".concat(d.O,"_REJECTED"),payload:e})}))}},M=function(e){return function(t){return t({type:"".concat(d.f,"_PENDING")}),function(e){return x.get("".concat(g.c,"/order_items/").concat(e,"/approval_requests"))}(e).then((function(e){return t({type:"".concat(d.f,"_FULFILLED"),payload:e}),e})).catch((function(e){return t({type:"".concat(d.f,"_REJECTED"),payload:e})}))}}},481:function(e,t,r){"use strict";var n,a,c=r(13),o=r.n(c),i=r(0),l=r(16),u=r(37),s=r(1),m=r.n(s),d=r(3),p=r(52),f=(p.t,{"portfolio-item":["source"]}),v=(n={},m()(n,p.v,(function(e){return e().portfolioReducer.selectedPortfolio.name})),m()(n,p.u,(function(e){return e().portfolioReducer.portfolioItem.portfolioItem.name})),m()(n,p.e,(function(){return"Edit survey"})),m()(n,p.b,(function(){return"Add products"})),m()(n,p.q,(function(e){return e().platformReducer.selectedPlatform.name})),m()(n,p.r,(function(e){return e().platformReducer.serviceOffering.service.name})),m()(n,p.n,(function(e){var t=e().orderReducer.orderDetail,r=t.portfolioItem,n=t.order;return"".concat(r.name," # ").concat(n.id)})),n),h=(a={},m()(a,p.v,{pathname:p.t,title:"Portfolios",searchParams:{}}),m()(a,p.q,{pathname:p.o,title:"Platforms",searchParams:{}}),m()(a,p.n,{pathname:p.k,title:"Orders",searchParams:{}}),a);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){m()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(r,n){if(0===e.length)return r({type:d.A,payload:[]});var a=e.replace(/^\//,"").split("/").reduce((function(e,r,a){var c="".concat(a>0&&e[a-1]?e[a-1].pathname:"","/").concat(r),i=v[c];if(!i)return e;var l=g({},a>0&&e[a-1].searchParams,{},t[r]?m()({},r,t[r]):{});return f[r]&&f[r].forEach((function(e){l[e]=t[e]})),[].concat(o()(e),[{pathname:c,searchParams:l,title:i(n)}])}),[]);return a.length>0&&h[a[0].pathname]&&(a=[h[a[0].pathname]].concat(o()(a))),r({type:d.A,payload:a})}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(u.useDispatch)(),r=Object(l.h)(),n=r.pathname,a=r.search;if(0===e.length)return t(O("",{}));var c=new URLSearchParams(a),s={};return c.forEach((function(e,t){s[t]=e})),Object(i.useEffect)((function(){t(O(n,s))}),[n].concat(o()(e))),function(){return t(O("",{}))}}},674:function(e,t,r){"use strict";r.r(t);var n=r(36),a=r.n(n),c=r(0),o=r.n(c),i=r(16),l=r(450),u=r(168),s=r(169),m=r(426),d=r(428),p=r(56),f=r(182),v=r(95),h=r(37),b=r(440),g=r(2),O=r.n(g),E=r(96),y=function(e){var t=e.portfolioItemName,r=e.orderId;return(o.a.createElement(E.Title,{size:"3xl"},t," - Order # ",r))};y.propTypes={portfolioItemName:O.a.string.isRequired,orderId:O.a.string.isRequired};var j=y,I=r(108),x=r(50),P=r(399),T=r(185),L=r.n(T),_=function(e){var t=e.name,r=e.cancelOrder,n=e.onClose,a=e.isOpen;return(o.a.createElement(P.Modal,{isOpen:a,onClose:n,title:" ",header:o.a.createElement(E.Title,{size:"2xl",headingLevel:"h2"},o.a.createElement(L.a,{fill:"#F0AB00"})," Cancel order"),isSmall:!0,actions:[o.a.createElement(x.Button,{onClick:r,key:"cancel-order",id:"cancel-order",variant:"danger"},"Cancel order"),o.a.createElement(x.Button,{onClick:n,key:"keep-order",id:"keep-order",variant:"link"},"Keep order")],isFooterLeftAligned:!0},"Are you sure you want to cancel ",t,"?"))};_.propTypes={name:O.a.string.isRequired,cancelOrder:O.a.func.isRequired,onClose:O.a.func.isRequired,isOpen:O.a.bool};var w=_,D=["Approval Pending"],k=function(e){return D.includes(e)},R=function(e){var t=e.state,r=e.orderId,n=e.portfolioItemName,i=Object(h.useDispatch)(),l=Object(c.useState)(!1),u=a()(l,2),s=u[0],m=u[1];return o.a.createElement(c.Fragment,null,o.a.createElement(w,{onClose:function(){return m(!1)},isOpen:s,cancelOrder:function(){m(!1),i(Object(b.a)(r))},name:n}),o.a.createElement(I.ActionGroup,null,o.a.createElement(x.Button,{onClick:function(){return m(!0)},isDisabled:!k(t),type:"button",className:"pf-u-mr-md",id:"cancel-order-action"},"Cancel order"),o.a.createElement(x.Button,{isDisabled:!0,type:"button"},"Reorder")))};R.propTypes={state:O.a.string,orderId:O.a.string.isRequired,portfolioItemName:O.a.string.isRequired};var N=R,S=r(48),q=r(31),F=r(183),C=r.n(F),V=r(98),A=r(397),B=r(12),U=function(e){var t=e.jobName,r=e.state,n=e.orderRequestDate,a=e.orderUpdateDate,c=e.owner,i=e.portfolioItemId,l=e.sourceId;return(o.a.createElement(m.Split,{className:"pf-u-mt-sm"},o.a.createElement(d.SplitItem,{className:"pf-u-mr-md"},o.a.createElement(A.a,{sourceId:l,height:60,src:"".concat(B.c,"/portfolio_items/").concat(i,"/icon")})),o.a.createElement(d.SplitItem,null,o.a.createElement(u.Level,null,o.a.createElement(s.LevelItem,{className:"pf-u-mr-lg"},o.a.createElement(E.Title,{headingLevel:"h5",size:"md"},t)),o.a.createElement(s.LevelItem,null,o.a.createElement(E.Title,{headingLevel:"h5",size:"md"},"Status:"," ","Failed"===r&&o.a.createElement(C.a,{className:"pf-u-mr-sm icon-danger-fill"})," ",r))),o.a.createElement(u.Level,null,o.a.createElement(s.LevelItem,{className:"pf-u-mr-lg"},o.a.createElement(S.TextContent,null,o.a.createElement(q.Text,{component:q.TextVariants.small},"Ordered ",o.a.createElement(V.DateFormat,{date:n,type:"relative"})))),o.a.createElement(s.LevelItem,{className:"pf-u-mr-lg"},o.a.createElement(S.TextContent,null,o.a.createElement(q.Text,{component:q.TextVariants.small},"Ordered by ",c))),o.a.createElement(s.LevelItem,null,o.a.createElement(S.TextContent,null,o.a.createElement(q.Text,{component:q.TextVariants.small},"Last updated ",o.a.createElement(V.DateFormat,{date:a,type:"relative"}))))))))};U.propTypes={portfolioItemId:O.a.string.isRequired,sourceId:O.a.string.isRequired,state:O.a.string.isRequired,jobName:O.a.string.isRequired,orderRequestDate:O.a.string.isRequired,orderUpdateDate:O.a.string.isRequired,owner:O.a.string.isRequired};var z=U,J=r(92),M=r.n(J),G=r(666),Y=r(560),K=r(93),W=function(e){var t=e.baseUrl,r=e.isFetching,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.state;return[{link:"",title:"Order details"},{link:"/approval",title:"Approval"},{link:"/lifecycle",title:"Lifecycle",isDisabled:"Completed"!==t&&"Ordered"!==t}]}(Object(h.useSelector)((function(e){return e.orderReducer.orderDetail||{}})).order);return o.a.createElement(Y.Nav,null,o.a.createElement(G.NavList,{className:"orders-side-nav-list"},o.a.createElement("li",{className:"pf-c-nav__item orders-nav-section-group"},o.a.createElement(S.TextContent,null,o.a.createElement(q.Text,{component:q.TextVariants.small},"Order steps"))),n.map((function(e){var n=e.link,a=e.title,c=e.isDisabled;return(o.a.createElement("li",M()({key:n||a,className:"pf-c-nav__item orders-side-nav-item orders-side-nav-category".concat(c||r?" disabled":"")},c?{tabIndex:-1}:{}),o.a.createElement(K.a,M()({exact:!0,nav:!0,isDisabled:c,pathname:"".concat(t).concat(n),preserveSearch:!0,className:"pf-c-nav__link orders-side-nav-link",activeClassName:"pf-m-active"},c?{tabIndex:-1}:{}),a)))}))))};W.propTypes={baseUrl:O.a.string.isRequired,isFetching:O.a.bool};var H=W,Q=r(491),X=r(492),Z=r(537),$=r.n(Z),ee=function(){var e=Object(h.useSelector)((function(e){return e.orderReducer.orderDetail})),t=e.order,r=e.platform,n=e.progressMessages,a=e.portfolio,c=e.orderItem;return(o.a.createElement(S.TextContent,null,o.a.createElement(q.Text,{component:q.TextVariants.h2},"Order details"),o.a.createElement(Q.TextList,{component:Q.TextListVariants.dl},o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dt},"Order ID"),o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dd},t.id),o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dt},"Ordered"),o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dd},o.a.createElement(V.DateFormat,{date:t.created_at,variant:"relative"})),o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dt},"Portfolio"),o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dd},a.name),o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dt},"Platform"),o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dd},r.name)),o.a.createElement("hr",{className:"pf-c-divider"}),o.a.createElement(q.Text,{component:q.TextVariants.h2},"Order parameters"),o.a.createElement($.a,{src:c.service_parameters}),o.a.createElement(q.Text,{component:q.TextVariants.h2},"Progress messages"),o.a.createElement($.a,{src:n.data})))},te=r(42),re=r.n(te),ne=r(66),ae=r.n(ne),ce=r(489),oe=r(668),ie=r.n(oe),le=function(e){return new Promise((function(t){return setTimeout(t,e)}))},ue=function(){var e=ae()(re.a.mark((function e(t){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,t();case 3:if(!(e.sent.data.length>0)){e.next=6;break}return e.abrupt("return","Finished");case 6:return e.next=8,le(3e3);case 8:e.next=0;break;case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(h.useDispatch)(),t=Object(h.useSelector)((function(e){return e.orderReducer.orderDetail})),r=t.order,n=t.approvalRequest,a=t.orderItem;return Object(c.useEffect)((function(){"Failed"!==r.state&&0===n.data.length&&ue((function(){return e(Object(b.b)(a.id))}))}),[]),"Failed"===r.state&&0===n.data.length?o.a.createElement(p.Bullseye,null,o.a.createElement(ce.Flex,{breakpointMods:[{modifier:"column"},{modifier:"grow"}]},o.a.createElement(p.Bullseye,null,o.a.createElement(ie.a,{size:"xl"})),o.a.createElement(p.Bullseye,null,o.a.createElement(E.Title,null,"We were unable to find any approval requests for this order.")))):o.a.createElement(S.TextContent,null,0===n.data.length?o.a.createElement(p.Bullseye,null,o.a.createElement(ce.Flex,{breakpointMods:[{modifier:"column"},{modifier:"grow"}]},o.a.createElement(p.Bullseye,null,o.a.createElement(E.Title,null,"Creating approval request")),o.a.createElement(p.Bullseye,null,o.a.createElement(v.Spinner,{size:"xl"})))):o.a.createElement(c.Fragment,null,o.a.createElement(q.Text,{component:q.TextVariants.h2},"Approval request"),n.data.map((function(e){return o.a.createElement(Q.TextList,{key:e.id,component:Q.TextListVariants.dl},o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dt},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat(document.baseURI,"ansible/catalog/approval/requests/detail/").concat(e.approval_request_ref)},"View this order's approval request details")),o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dt},"Request created"),o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dd},o.a.createElement(V.DateFormat,{date:r.created_at,variant:"relative"})),o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dt},"State"),o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dd},e.state),e.reason&&o.a.createElement(c.Fragment,null,o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dt},"Approval reason"),o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dd},e.reason)),e.request_completed_at&&o.a.createElement(c.Fragment,null,o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dt},"Completed at"),o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dd},o.a.createElement(V.DateFormat,{date:e.request_completed_at,variant:"relative"}))))}))))},me=r(51),de=r(377),pe=r(669),fe=r.n(pe),ve=r(52),he=function(){var e=Object(de.a)([]),t=a()(e,2)[1],r=Object(i.i)(ve.n).url,n=Object(h.useSelector)((function(e){return e.orderReducer.orderDetail||{}})),c=n.order,l=n.orderItem;return"Completed"!==c.state&&"Ordered"!==c.state?o.a.createElement(i.a,{to:{pathname:r,search:t}}):o.a.createElement("div",null,o.a.createElement("a",{href:l.external_url,target:"_blank",rel:"noopener noreferrer"},"Manage product ",o.a.createElement(fe.a,null)))},be=r(389),ge=r(481),Oe=r(388),Ee=r(18),ye=r.n(Ee),je=r(449),Ie=r(19);function xe(){var e=ye()(["\n  border-bottom: 2px solid var(--pf-global--Color--light-200);\n"]);return xe=function(){return e},e}function Pe(){var e=ye()(["\n  background-color: var(--pf-global--Color--light-100);\n"]);return Pe=function(){return e},e}var Te=Object(Ie.b)(je.Stack)(Pe()),Le=Object(Ie.b)(l.StackItem)(xe());function _e(){var e=ye()(["\n  width: 100%;\n  > *:not(:last-child) {\n    margin-bottom: 4px;\n    width: 100%;\n  }\n"]);return _e=function(){return e},e}var we=Ie.b.div(_e()),De=["order-item","portfolio-item","platform","portfolio","order"];t.default=function(){var e=Object(c.useState)(!0),t=a()(e,2),r=t[0],n=t[1],g=Object(de.a)(De),O=a()(g,1)[0],E=Object(h.useSelector)((function(e){return e.orderReducer.orderDetail||{}})),y=Object(i.i)(ve.n),I=Object(h.useDispatch)(),x=Object(ge.a)([E]);if(Object(c.useEffect)((function(){return insights.chrome.appNavClick({id:"orders",secondaryNav:!0}),n(!0),Promise.all([I(Object(Oe.c)()),I(Object(b.c)(O))]).then((function(){return n(!1)})),function(){return x()}}),[]),!r&&0===Object.keys(E).length)return o.a.createElement(i.a,{to:ve.k});var P=E.order,T=E.portfolioItem,L=E.platform,_=E.orderItem,w=[T,L,E.portfolio].filter((function(e){return e.notFound})).map((function(e){var t=e.object;return(o.a.createElement(f.Alert,{key:t,variant:"warning",isInline:!0,title:"The ".concat(t," for this order is not available")}))}));return o.a.createElement(Te,{className:"bg-fill"},o.a.createElement(Le,{className:"pf-u-p-lg"},r?o.a.createElement(me.e,null):o.a.createElement(c.Fragment,null,o.a.createElement(u.Level,{className:"pf-u-mb-md"},o.a.createElement(be.a,null)),o.a.createElement(u.Level,null,w.length>0?o.a.createElement(we,null,w):o.a.createElement(c.Fragment,null,o.a.createElement(s.LevelItem,null,o.a.createElement(j,{portfolioItemName:T.name,orderId:P.id})),o.a.createElement(s.LevelItem,null,o.a.createElement(N,{portfolioItemName:T.name,orderId:P.id,state:P.state})))),0===w.length&&o.a.createElement(u.Level,null,o.a.createElement(z,{portfolioItemId:T.id,sourceId:L.id,state:P.state,jobName:T.name,orderRequestDate:P.created_at,orderUpdateDate:_.updated_at,owner:P.owner})))),o.a.createElement(l.StackItem,{className:"pf-u-pt-xl pf-u-ml-lg pf-u-ml-0-on-md"},o.a.createElement(m.Split,{gutter:"md",className:"orders-nav-layout"},o.a.createElement(d.SplitItem,{className:"order-detail-nav-cotainer"},o.a.createElement(H,{isFetching:r,baseUrl:y.url})),o.a.createElement(d.SplitItem,{className:"order-detail-content-cotainer"},r?o.a.createElement(p.Bullseye,null,o.a.createElement(v.Spinner,null)):o.a.createElement(i.d,null,o.a.createElement(i.b,{path:"".concat(y.url,"/approval"),component:se}),o.a.createElement(i.b,{path:"".concat(y.url,"/lifecycle")},o.a.createElement(he,null)),o.a.createElement(i.b,{path:y.url,component:ee}))))))}}}]);
//# sourceMappingURL=../sourcemaps/order-detail.js.map