(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{384:function(e,t,r){"use strict";var n=r(1),a=r.n(n),c=r(383),o=r.n(c),i=r(37),l=r.n(i),s=r(46),u=r.n(s),m=r(33),d=r.n(m),p=r(0),f=r.n(p),v=r(2),h=r.n(v),b=r(47),g=r(54),O=r(34);function E(){var e=d()(["\n  pointer-events: ",";\n"]);return E=function(){return e},e}function y(){var e=d()(["\n  pointer-events: ",";\n"]);return y=function(){return e},e}var j=Object(O.b)((function(e){e.isDisabled;var t=u()(e,["isDisabled"]);return(f.a.createElement(b.a,t))}))(y(),(function(e){return e.isDisabled?"none":"initial"})),I=Object(O.b)((function(e){e.isDisabled;var t=u()(e,["isDisabled"]);return(f.a.createElement(b.b,t))}))(E(),(function(e){return e.isDisabled?"none":"initial"})),P=function(e,t,r){var n=Object.entries(t).map((function(e){var t=l()(e,2),r=t[0],n=t[1];return"".concat(r,"=").concat(n)})).join("&");return r?"".concat(e).concat(n.length>0?"&".concat(n):""):n.length>0?"?".concat(n):""},x=function(e){var t=e.pathname,r=e.searchParams,n=e.nav,a=e.preserveSearch,c=e.preserveHash,i=u()(e,["pathname","searchParams","nav","preserveSearch","preserveHash"]),l=Object(g.h)(),s=l.search,m=l.hash,d=n?I:j,p={pathname:t,search:P(s,r,a),hash:c?m:void 0};return f.a.createElement(d,o()({to:p},i))};x.propTypes={pathname:h.a.string.isRequired,searchParams:h.a.shape(a()({},h.a.string,h.a.string)),nav:h.a.bool,preserveSearch:h.a.bool,preserveHash:h.a.bool},x.defaultProps={nav:!1,preserveSearch:!1,searchParams:{},preserveHash:!1},t.a=x},387:function(e,t,r){"use strict";var n=r(1),a=r.n(n),c=r(54);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(c.h)(),r=t.search,n=new URLSearchParams(r);return[e.reduce((function(e,t){return i({},e,a()({},t,n.get(t)))}),{}),r,n]}},392:function(e,t,r){"use strict";var n={};r.r(n),r.d(n,"getPlatforms",(function(){return v})),r.d(n,"getPlatform",(function(){return h})),r.d(n,"getPlatformItems",(function(){return b})),r.d(n,"getPlatformInventories",(function(){return g})),r.d(n,"getServiceOffering",(function(){return O}));var a=r(1),c=r.n(a),o=r(3),i=r(37),l=r.n(i),s=r(62),u=r(12),m=r(49);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var p=Object(s.a)(),f=Object(s.b)(),v=function(){return f.post("".concat(u.i,"/graphql"),{query:'\nquery {\n  application_types (filter: { name: "/insights/platform/catalog" }) {\n    id\n    name\n    sources {\n      id\n      name\n      source_type_id\n    }\n  }\n}'}).then((function(e){return e.data.application_types})).then((function(e){return l()(e,1)[0].sources}))},h=function(e){return p.get("".concat(u.i,"/sources/").concat(e))},b=function(e,t,r){var n=t?"&filter[name][contains_i]=".concat(t):"";return e?p.get("".concat(u.j,"/sources/").concat(e,"/service_offerings?filter[archived_at][nil]").concat(n).concat(r?"&limit=".concat(r.limit,"&offset=").concat(r.offset):"")):p.get("".concat(u.j,"/service_offerings"))},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m.a;return e?p.get("".concat(u.j,"/sources/").concat(e,"/service_inventories?filter[name][contains_i]=").concat(t).concat(r?"&limit=".concat(r.limit,"&offset=").concat(r.offset):"")):p.get("".concat(u.j,"/service_inventories?limit=").concat(r.limit,"&offset=").concat(r.offset))},O=function(e,t){return Promise.all([p.get("".concat(u.j,"/service_offerings/").concat(e)),p.get("".concat(u.i,"/sources/").concat(t)).then((function(e){return p.get("".concat(u.i,"/source_types/").concat(e.source_type_id)).then((function(t){var r=t.icon_url;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{icon_url:r})}))}))]).then((function(e){var t=l()(e,2);return{service:t[0],source:t[1]}}))};function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"c",(function(){return j})),r.d(t,"b",(function(){return I})),r.d(t,"d",(function(){return P})),r.d(t,"a",(function(){return x})),r.d(t,"e",(function(){return T}));var j=function(){return function(e){return e({type:"".concat(o.k,"_PENDING")}),v().then((function(t){return e({type:"".concat(o.k,"_FULFILLED"),payload:t})})).catch((function(t){return e({type:"".concat(o.k,"_REJECTED"),payload:t})}))}},I=function(e,t,r){return{type:o.n,payload:b(e,t,r),meta:y({platformId:e,filter:t},r)}},P=function(e){return{type:o.j,payload:h(e)}},x=function(e,t,r){return{type:o.l,payload:g(e,t,r)}},T=function(){return{type:o.v,payload:O.apply(n,arguments)}}},397:function(e,t,r){"use strict";var n=r(37),a=r.n(n),c=r(33),o=r.n(c),i=r(0),l=r.n(i),s=r(2),u=r.n(s),m=r(34),d=r(38),p=r(52),f=r(429),v=r.n(f),h=r(430);function b(){var e=o()(["\n  height: ",";\n  display: ",";\n  float: ",";\n  width: ",";\n"]);return b=function(){return e},e}var g=Object(m.b)(h.LazyLoadImage)(b(),(function(e){var t=e.height;return e.hidden?"0px":"".concat(t,"px")||!1}),(function(e){return e.hidden?"none":"inherit"}),(function(e){return e.hidden?"left":"inherit"}),(function(e){return e.hidden?0:"inherit"}));function O(){var e=o()(["\n  display: inline-block;\n  height: ",";\n"]);return O=function(){return e},e}var E=m.b.div(O(),(function(e){var t=e.height;return"".concat(t,"px")})),y=function(e){var t=e.src,r=e.height,n=e.sourceId,c=Object(i.useState)(!1),o=a()(c,2),s=o[0],u=o[1],m=Object(i.useState)(!1),f=a()(m,2),h=f[0],b=f[1],O=Object(d.useSelector)((function(e){return e.platformReducer.platformIconMapping})),y=n?O[n]:v.a;return l.a.createElement(E,{height:r},!s&&l.a.createElement(p.c,{height:r}),l.a.createElement(g,{threshold:2e3,delayTime:0,hidden:!s,height:s?r:0,onError:function(){return b(!0)},onLoad:function(){return u(!0)},src:!t||h?y:t}))};y.propTypes={src:u.a.string,platformId:u.a.string,style:u.a.object,height:u.a.number,sourceId:u.a.string},y.defaultProps={style:{},height:40};t.a=y},404:function(e,t,r){"use strict";var n=r(383),a=r.n(n),c=r(46),o=r.n(c),i=r(0),l=r.n(i),s=r(2),u=r.n(s),m=r(384),d=function(e){var t=e.children,r=e.pathname,n=o()(e,["children","pathname"]);return r?l.a.createElement(m.a,a()({pathname:r},n),t):t};d.propTypes={pathname:u.a.string,children:u.a.oneOfType([u.a.node,u.a.arrayOf(u.a.node)]).isRequired},t.a=d},423:function(e,t,r){"use strict";var n=r(0),a=r.n(n),c=r(435),o=r(438),i=r(38),l=r(404);t.a=function(){var e=Object(i.useSelector)((function(e){return e.breadcrumbsReducer.fragments}));return e.length<=1?null:a.a.createElement(c.Breadcrumb,null,e.map((function(t,r){var n=t.title,c=t.pathname,i=t.searchParams;return(a.a.createElement(l.a,{pathname:e.length!==r+1?c:void 0,searchParams:i,nav:!0,exact:!0,key:c,className:"pf-c-breadcrumb__item"},a.a.createElement(o.BreadcrumbItem,{isActive:e.length===r+1},n)))})))}},429:function(e,t,r){e.exports=r.p+"fonts/card-icon-default.svg"},449:function(e,t,r){"use strict";var n=r(46),a=r.n(n),c=r(37),o=r.n(c),i=r(1),l=r.n(i),s=r(0),u=r.n(s),m=r(40),d=r(3),p=r(39),f=r.n(p),v=r(63),h=r.n(v),b=r(62),g=r(12),O=r(49);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=Object(b.c)(),I=(Object(b.d)(),Object(b.f)()),P=Object(b.a)();function x(e){return I.listServicePlans(e)}function T(e){return L.apply(this,arguments)}function L(){return(L=h()(f.a.mark((function e(t){var r,n,c,o,i,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.service_parameters,n=r.providerControlParameters,c=a()(r,["providerControlParameters"]),o=a()(t,["service_parameters"]),e.next=3,j.createOrder();case 3:return i=e.sent,(l={}).count=1,l=y({},l,{},o,{service_parameters:c,provider_control_parameters:n||{}}),e.next=9,j.addToOrder(i.id,l);case 9:return e.abrupt("return",j.submitOrder(i.id));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=function(e){return P.get("".concat(g.c,"/order_items?").concat(e.map((function(e){return"filter[order_id][]=".concat(e)})).join("&")))},w=function(e){return P.get("".concat(g.c,"/portfolio_items?").concat(e.map((function(e){return"filter[id][]=".concat(e)})).join("&")))},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O.a;return P.get("".concat(g.c,"/orders?").concat(e,"&limit=").concat(t.limit,"&offset=").concat(t.offset)).then((function(e){return _(e.data.map((function(e){return e.id}))).then((function(t){return w(t.data.map((function(e){return e.portfolio_item_id}))).then((function(r){return y({portfolioItems:r},e,{data:e.data.map((function(e){return y({},e,{orderItems:t.data.filter((function(t){return t.order_id===e.id}))})}))})}))}))}))};var N=r(2),R=r.n(N),k=r(47),S=r(51),q=function(e){var t=e.id,r=e.dispatch;return(u.a.createElement(s.Fragment,null,"You can track the progress of Order # ",t," in your"," ",u.a.createElement(k.a,{onClick:function(){return r(Object(m.clearNotifications)())},to:S.k},"Orders")," ","page."))};q.propTypes={id:R.a.string.isRequired,dispatch:R.a.func.isRequired};var F=q;function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"e",(function(){return A})),r.d(t,"f",(function(){return U})),r.d(t,"a",(function(){return B})),r.d(t,"d",(function(){return z})),r.d(t,"c",(function(){return J})),r.d(t,"b",(function(){return M}));var A=function(e){return{type:d.w,payload:x(e)}},U=function(e){return function(t){return t({type:d.T,payload:T(e).then((function(e){var r=e.id;return t(Object(m.addNotification)({variant:"success",title:"Your order has been accepted successfully",description:u.a.createElement(F,{id:r,dispatch:t}),dismissable:!0}))}))})}},B=function(e){return function(t,r){t({type:"".concat(d.d,"_PENDING")});var n=r().orderReducer.orderDetail;return function(e){return j.cancelOrder(e)}(e).then((function(){return n.order.state="Canceled",n.approvalRequest&&n.approvalRequest.length>0&&(n.approvalRequest[0].state="canceled"),t({type:d.O,payload:V({},n)}),n})).then((function(e){return t(Object(m.addNotification)({variant:"success",title:"Your order has been canceled successfully",description:"Order ".concat("Order #".concat(e.order.id)," was canceled."),dismissable:!0}))})).then((function(){return t({type:"".concat(d.d,"_FULFILLED")})})).catch((function(e){t({type:"".concat(d.d,"_REJECTED"),payload:e})}))}},z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O.a;return function(r){var n=Object.entries(e).filter((function(e){var t=o()(e,2)[1];return t&&t.length>0})).map((function(e){var t=o()(e,2),r=t[0],n=t[1];return Array.isArray(n)?n.map((function(e){return"filter[".concat(r,"][]=").concat(e)})).join("&"):"filter[".concat(r,"][contains_i]=").concat(n)})).join("&");return r({type:"".concat(d.h,"_PENDING")}),D(n,t).then((function(c){var o=c.portfolioItems,i=a()(c,["portfolioItems"]);return r({type:d.P,payload:o}),r({type:"".concat(d.h,"_FULFILLED"),meta:V({},t,{filter:n,filters:e,storeState:!0,stateKey:"orders"}),payload:i})})).catch((function(e){return r({type:"".concat(d.h,"_REJECTED"),payload:e})}))}},J=function(e){return function(t){return t({type:"".concat(d.O,"_PENDING")}),function(e){var t=[P.get("".concat(g.c,"/orders/").concat(e.order)),P.get("".concat(g.c,"/order_items/").concat(e["order-item"])).catch((function(e){if(404===e.status||400===e.status)return{object:"Order item",notFound:!0};throw e})),P.get("".concat(g.c,"/portfolio_items/").concat(e["portfolio-item"])).catch((function(e){if(404===e.status||400===e.status)return{object:"Product",notFound:!0};throw e})),P.get("".concat(g.c,"/order_items/").concat(e["order-item"],"/approval_requests")).catch((function(e){if(404===e.status||400===e.status)return{};throw e})),P.get("".concat(g.c,"/order_items/").concat(e["order-item"],"/progress_messages")).catch((function(e){if(404===e.status||400===e.status)return{};throw e}))];return e&&e.platform&&"undefined"!==e.platform&&t.push(P.get("".concat(g.i,"/sources/").concat(e.platform)).catch((function(e){if(404===e.status||400===e.status)return{object:"Platform",notFound:!0};throw e}))),e&&e.portfolio&&"undefined"!==e.portfolio&&t.push(P.get("".concat(g.c,"/portfolios/").concat(e.portfolio)).catch((function(e){if(404===e.status||400===e.status)return{object:"Portfolio",notFound:!0};throw e}))),Promise.all(t)}(e).then((function(e){var r=o()(e,7),n=r[0],a=r[1],c=r[2],i=r[3],l=r[4],s=r[5],u=r[6];return t({type:"".concat(d.O,"_FULFILLED"),payload:{order:n,orderItem:a,portfolioItem:c,platform:i,progressMessages:l,portfolio:s,approvalRequest:u}})})).catch((function(e){return t({type:"".concat(d.O,"_REJECTED"),payload:e})}))}},M=function(e){return function(t){return t({type:"".concat(d.f,"_PENDING")}),function(e){return P.get("".concat(g.c,"/order_items/").concat(e,"/approval_requests"))}(e).then((function(e){return t({type:"".concat(d.f,"_FULFILLED"),payload:e}),e})).catch((function(e){return t({type:"".concat(d.f,"_REJECTED"),payload:e})}))}}},481:function(e,t,r){"use strict";var n,a,c=r(13),o=r.n(c),i=r(0),l=r(54),s=r(38),u=r(1),m=r.n(u),d=r(3),p=r(51),f=(p.t,{"portfolio-item":["source"]}),v=(n={},m()(n,p.v,(function(e){return e().portfolioReducer.selectedPortfolio.name})),m()(n,p.u,(function(e){return e().portfolioReducer.portfolioItem.portfolioItem.name})),m()(n,p.e,(function(){return"Edit survey"})),m()(n,p.b,(function(){return"Add products"})),m()(n,p.q,(function(e){return e().platformReducer.selectedPlatform.name})),m()(n,p.r,(function(e){return e().platformReducer.serviceOffering.service.name})),m()(n,p.n,(function(e){var t=e().orderReducer.orderDetail,r=t.portfolioItem,n=t.order;return"".concat(r.name," # ").concat(n.id)})),n),h=(a={},m()(a,p.v,{pathname:p.t,title:"Portfolios",searchParams:{}}),m()(a,p.q,{pathname:p.o,title:"Platforms",searchParams:{}}),m()(a,p.n,{pathname:p.k,title:"Orders",searchParams:{}}),a);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){m()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(r,n){if(0===e.length)return r({type:d.A,payload:[]});var a=e.replace(/^\//,"").split("/").reduce((function(e,r,a){var c="".concat(a>0&&e[a-1]?e[a-1].pathname:"","/").concat(r),i=v[c];if(!i)return e;var l=g({},a>0&&e[a-1].searchParams,{},t[r]?m()({},r,t[r]):{});return f[r]&&f[r].forEach((function(e){l[e]=t[e]})),[].concat(o()(e),[{pathname:c,searchParams:l,title:i(n)}])}),[]);return a.length>0&&h[a[0].pathname]&&(a=[h[a[0].pathname]].concat(o()(a))),r({type:d.A,payload:a})}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(s.useDispatch)(),r=Object(l.h)(),n=r.pathname,a=r.search;if(0===e.length)return t(O("",{}));var c=new URLSearchParams(a),u={};return c.forEach((function(e,t){u[t]=e})),Object(i.useEffect)((function(){t(O(n,u))}),[n].concat(o()(e))),function(){return t(O("",{}))}}},669:function(e,t,r){"use strict";r.r(t);var n=r(37),a=r.n(n),c=r(0),o=r.n(c),i=r(54),l=r(465),s=r(170),u=r(171),m=r(413),d=r(414),p=r(90),f=r(182),v=r(91),h=r(38),b=r(449),g=r(2),O=r.n(g),E=r(395),y=function(e){var t=e.portfolioItemName,r=e.orderId;return(o.a.createElement(E.Title,{size:"3xl"},t," - Order # ",r))};y.propTypes={portfolioItemName:O.a.string.isRequired,orderId:O.a.string.isRequired};var j=y,I=r(103),P=r(50),x=r(402),T=r(186),L=r.n(T),_=function(e){var t=e.name,r=e.cancelOrder,n=e.onClose,a=e.isOpen;return(o.a.createElement(x.Modal,{isOpen:a,onClose:n,title:" ",header:o.a.createElement(E.Title,{size:"2xl",headingLevel:"h2"},o.a.createElement(L.a,{fill:"#F0AB00"})," Cancel order"),isSmall:!0,actions:[o.a.createElement(P.Button,{onClick:r,key:"cancel-order",id:"cancel-order",variant:"danger"},"Cancel order"),o.a.createElement(P.Button,{onClick:n,key:"keep-order",id:"keep-order",variant:"link"},"Keep order")],isFooterLeftAligned:!0},"Are you sure you want to cancel ",t,"?"))};_.propTypes={name:O.a.string.isRequired,cancelOrder:O.a.func.isRequired,onClose:O.a.func.isRequired,isOpen:O.a.bool};var w=_,D=["Approval Pending"],N=function(e){return D.includes(e)},R=function(e){var t=e.state,r=e.orderId,n=e.portfolioItemName,i=Object(h.useDispatch)(),l=Object(c.useState)(!1),s=a()(l,2),u=s[0],m=s[1];return o.a.createElement(c.Fragment,null,o.a.createElement(w,{onClose:function(){return m(!1)},isOpen:u,cancelOrder:function(){m(!1),i(Object(b.a)(r))},name:n}),o.a.createElement(I.ActionGroup,null,o.a.createElement(P.Button,{onClick:function(){return m(!0)},isDisabled:!N(t),type:"button",className:"pf-u-mr-md",id:"cancel-order-action"},"Cancel order")))};R.propTypes={state:O.a.string,orderId:O.a.string.isRequired,portfolioItemName:O.a.string.isRequired};var k=R,S=r(48),q=r(27),F=r(183),C=r.n(F),V=r(93),A=r(397),U=r(12),B=function(e){var t=e.jobName,r=e.state,n=e.orderRequestDate,a=e.orderUpdateDate,c=e.owner,i=e.portfolioItemId,l=e.sourceId;return(o.a.createElement(m.Split,{className:"pf-u-mt-sm"},o.a.createElement(d.SplitItem,{className:"pf-u-mr-md"},o.a.createElement(A.a,{sourceId:l,height:60,src:"".concat(U.c,"/portfolio_items/").concat(i,"/icon")})),o.a.createElement(d.SplitItem,null,o.a.createElement(s.Level,null,o.a.createElement(u.LevelItem,{className:"pf-u-mr-lg"},o.a.createElement(E.Title,{headingLevel:"h5",size:"md"},t)),o.a.createElement(u.LevelItem,null,o.a.createElement(E.Title,{headingLevel:"h5",size:"md"},"Status:"," ","Failed"===r&&o.a.createElement(C.a,{className:"pf-u-mr-sm icon-danger-fill"})," ",r))),o.a.createElement(s.Level,null,o.a.createElement(u.LevelItem,{className:"pf-u-mr-lg"},o.a.createElement(S.TextContent,null,o.a.createElement(q.Text,{component:q.TextVariants.small},"Ordered ",o.a.createElement(V.DateFormat,{date:n,type:"relative"})))),o.a.createElement(u.LevelItem,{className:"pf-u-mr-lg"},o.a.createElement(S.TextContent,null,o.a.createElement(q.Text,{component:q.TextVariants.small},"Ordered by ",c))),o.a.createElement(u.LevelItem,null,o.a.createElement(S.TextContent,null,o.a.createElement(q.Text,{component:q.TextVariants.small},"Last updated ",o.a.createElement(V.DateFormat,{date:a,type:"relative"}))))))))};B.propTypes={portfolioItemId:O.a.string.isRequired,sourceId:O.a.string.isRequired,state:O.a.string.isRequired,jobName:O.a.string.isRequired,orderRequestDate:O.a.string.isRequired,orderUpdateDate:O.a.string.isRequired,owner:O.a.string.isRequired};var z=B,J=r(383),M=r.n(J),G=r(658),H=r(548),Y=r(384),K=function(e){var t=e.baseUrl,r=e.isFetching,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.state;return[{link:"",title:"Order details"},{link:"/approval",title:"Approval"},{link:"/lifecycle",title:"Lifecycle",isDisabled:"Completed"!==t&&"Ordered"!==t}]}(Object(h.useSelector)((function(e){return e.orderReducer.orderDetail||{}})).order);return o.a.createElement(H.Nav,null,o.a.createElement(G.NavList,{className:"orders-side-nav-list"},o.a.createElement("li",{className:"pf-c-nav__item orders-nav-section-group"},o.a.createElement(S.TextContent,null,o.a.createElement(q.Text,{component:q.TextVariants.small},"Order steps"))),n.map((function(e){var n=e.link,a=e.title,c=e.isDisabled;return(o.a.createElement("li",M()({key:n||a,className:"pf-c-nav__item orders-side-nav-item orders-side-nav-category".concat(c||r?" disabled":"")},c?{tabIndex:-1}:{}),o.a.createElement(Y.a,M()({exact:!0,nav:!0,isDisabled:c,pathname:"".concat(t).concat(n),preserveSearch:!0,className:"pf-c-nav__link orders-side-nav-link",activeClassName:"pf-m-active"},c?{tabIndex:-1}:{}),a)))}))))};K.propTypes={baseUrl:O.a.string.isRequired,isFetching:O.a.bool};var W=K,Q=r(493),X=r(494),Z=r(524),$=r.n(Z),ee=function(){var e=Object(h.useSelector)((function(e){return e.orderReducer.orderDetail})),t=e.order,r=e.platform,n=e.progressMessages,a=e.portfolio,c=e.orderItem;return(o.a.createElement(S.TextContent,null,o.a.createElement(q.Text,{component:q.TextVariants.h2},"Order details"),o.a.createElement(Q.TextList,{component:Q.TextListVariants.dl},o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dt},"Order ID"),o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dd},t.id),o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dt},"Ordered"),o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dd},o.a.createElement(V.DateFormat,{date:t.created_at,variant:"relative"})),o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dt},"Portfolio"),o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dd},null==a?void 0:a.name),o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dt},"Platform"),o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dd},(null==r?void 0:r.name)||void 0)),o.a.createElement("hr",{className:"pf-c-divider"}),o.a.createElement(q.Text,{component:q.TextVariants.h2},"Order parameters"),(null==c?void 0:c.service_parameters)&&o.a.createElement($.a,{src:c.service_parameters}),o.a.createElement(q.Text,{component:q.TextVariants.h2},"Progress messages"),(null==n?void 0:n.data)&&o.a.createElement($.a,{src:n.data})))},te=r(39),re=r.n(te),ne=r(63),ae=r.n(ne),ce=r(477),oe=r(660),ie=r.n(oe),le=function(e){return new Promise((function(t){return setTimeout(t,e)}))},se=function(){var e=ae()(re.a.mark((function e(t){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,t();case 3:if(!(e.sent.data.length>0)){e.next=6;break}return e.abrupt("return","Finished");case 6:return e.next=8,le(3e3);case 8:e.next=0;break;case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=function(e){return!e||!e.data||0===e.data.length},me=function(){var e=Object(h.useDispatch)(),t=Object(h.useSelector)((function(e){return e.orderReducer.orderDetail})),r=t.order,n=t.approvalRequest,a=t.orderItem;return Object(c.useEffect)((function(){"Failed"!==r.state&&(null==a?void 0:a.id)&&ue(n)&&se((function(){return e(Object(b.b)(a.id))}))}),[]),"Failed"===r.state&&ue(n)?o.a.createElement(p.Bullseye,{id:"no-approval-requests"},o.a.createElement(ce.Flex,{breakpointMods:[{modifier:"column"},{modifier:"grow"}]},o.a.createElement(p.Bullseye,null,o.a.createElement(ie.a,{size:"xl"})),o.a.createElement(p.Bullseye,null,o.a.createElement(E.Title,{size:"2xl"},"We were unable to find any approval requests for this order.")))):o.a.createElement(S.TextContent,null,ue(n)?o.a.createElement(p.Bullseye,null,o.a.createElement(ce.Flex,{breakpointMods:[{modifier:"column"},{modifier:"grow"}]},o.a.createElement(p.Bullseye,{id:"creating-approval-request"},o.a.createElement(E.Title,null,"Creating approval request")),o.a.createElement(p.Bullseye,null,o.a.createElement(v.Spinner,{size:"xl"})))):o.a.createElement(c.Fragment,null,o.a.createElement(q.Text,{component:q.TextVariants.h2},"Approval request"),n.data.map((function(e){return o.a.createElement(Q.TextList,{key:e.id,component:Q.TextListVariants.dl},o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dt},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat(document.baseURI,"ansible/catalog/approval/request?request=").concat(e.approval_request_ref)},"View this order's approval request details")),o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dt},"Request created"),o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dd},o.a.createElement(V.DateFormat,{date:r.created_at,variant:"relative"})),o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dt},"State"),o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dd},e.state),e.reason&&o.a.createElement(c.Fragment,null,o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dt},"Approval reason"),o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dd},e.reason)),e.request_completed_at&&o.a.createElement(c.Fragment,null,o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dt},"Completed at"),o.a.createElement(X.TextListItem,{component:X.TextListItemVariants.dd},o.a.createElement(V.DateFormat,{date:e.request_completed_at,variant:"relative"}))))}))))},de=r(52),pe=r(387),fe=r(661),ve=r.n(fe),he=r(51),be=function(){var e=Object(pe.a)([]),t=a()(e,2)[1],r=Object(i.i)(he.n).url,n=Object(h.useSelector)((function(e){return e.orderReducer.orderDetail||{}})),c=n.order,l=n.orderItem;return"Completed"!==c.state&&"Ordered"!==c.state?o.a.createElement(i.a,{to:{pathname:r,search:t}}):o.a.createElement("div",null,o.a.createElement("a",{href:l.external_url,target:"_blank",rel:"noopener noreferrer"},"Manage product ",o.a.createElement(ve.a,null)))},ge=r(423),Oe=r(481),Ee=r(392),ye=r(33),je=r.n(ye),Ie=r(444),Pe=r(34);function xe(){var e=je()(["\n  border-bottom: 2px solid var(--pf-global--Color--light-200);\n"]);return xe=function(){return e},e}function Te(){var e=je()(["\n  background-color: var(--pf-global--Color--light-100);\n"]);return Te=function(){return e},e}var Le=Object(Pe.b)(Ie.Stack)(Te()),_e=Object(Pe.b)(l.StackItem)(xe());function we(){var e=je()(["\n  width: 100%;\n  > *:not(:last-child) {\n    margin-bottom: 4px;\n    width: 100%;\n  }\n"]);return we=function(){return e},e}var De=Pe.b.div(we()),Ne=["order-item","portfolio-item","platform","portfolio","order"];t.default=function(){var e=Object(c.useState)(!0),t=a()(e,2),r=t[0],n=t[1],g=Object(pe.a)(Ne),O=a()(g,1)[0],E=Object(h.useSelector)((function(e){return e.orderReducer.orderDetail})),y=Object(i.i)(he.n),I=Object(h.useDispatch)(),P=Object(Oe.a)([E]);Object(c.useEffect)((function(){return insights.chrome.appNavClick({id:"orders",secondaryNav:!0}),n(!0),Promise.all([I(Object(Ee.c)()),I(Object(b.c)(O))]).then((function(){return n(!1)})),function(){return P()}}),[]);var x=E.order,T=E.portfolioItem,L=E.platform,_=E.orderItem,w=[T,L,E.portfolio||{}].filter((function(e){return e.notFound})).map((function(e){var t=e.object;return(o.a.createElement(f.Alert,{key:t,variant:"warning",isInline:!0,title:"The ".concat(t," for this order is not available")}))}));return o.a.createElement(Le,{className:"bg-fill"},o.a.createElement(_e,{className:"pf-u-p-lg"},r?o.a.createElement(de.e,null):o.a.createElement(c.Fragment,null,o.a.createElement(s.Level,{className:"pf-u-mb-md"},o.a.createElement(ge.a,null)),o.a.createElement(s.Level,{className:"flex-no-wrap"},w.length>0?o.a.createElement(De,null,w):o.a.createElement(c.Fragment,null,o.a.createElement(u.LevelItem,null,o.a.createElement(j,{portfolioItemName:T.name,orderId:x.id})),o.a.createElement(u.LevelItem,{className:"flex-item-no-wrap"},o.a.createElement(k,{portfolioItemName:T.name,orderId:x.id,state:x.state})))),0===w.length&&o.a.createElement(s.Level,null,o.a.createElement(z,{portfolioItemId:T.id,sourceId:L.id,state:x.state,jobName:T.name,orderRequestDate:x.created_at,orderUpdateDate:null==_?void 0:_.updated_at,owner:x.owner})))),o.a.createElement(l.StackItem,{className:"pf-u-pt-xl pf-u-ml-lg pf-u-ml-0-on-md"},o.a.createElement(m.Split,{gutter:"md",className:"orders-nav-layout"},o.a.createElement(d.SplitItem,{className:"order-detail-nav-cotainer"},o.a.createElement(W,{isFetching:r,baseUrl:y.url})),o.a.createElement(d.SplitItem,{className:"order-detail-content-cotainer"},r?o.a.createElement(p.Bullseye,null,o.a.createElement(v.Spinner,null)):o.a.createElement(i.d,null,o.a.createElement(i.b,{path:"".concat(y.url,"/approval"),component:me}),o.a.createElement(i.b,{path:"".concat(y.url,"/lifecycle")},o.a.createElement(be,null)),o.a.createElement(i.b,{path:y.url,component:ee}))))))}}}]);
//# sourceMappingURL=../sourcemaps/order-detail.js.map