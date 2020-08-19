(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{564:function(e,r,t){"use strict";var o=(0,t(32).defineMessages)({orderedBy:{id:"orders.common.orderedBy",defaultMessage:"Ordered by {owner}"},orderedByLabel:{id:"orders.approval.orderedBy",defaultMessage:"Ordered by"},lastUpdated:{id:"orders.common.lastUpdated",defaultMessage:"Last updated"},compositeTitle:{id:"orders.common.compositeTitle",defaultMessage:"{name} - Order # {id}"},detailTitle:{id:"orders.detail.title",defaultMessage:"Order ID {id}"},orderSuccess:{id:"orders.notification.success",defaultMessage:"You can track the progress of Order # {id} in your <link>Orders</link> page."},noOrdersTitle:{id:"orders.list.empty.title",defaultMessage:"No orders"},noOrdersDescription:{id:"orders.list.empty.description",defaultMessage:"No orders have been created."},noApprovalRequests:{id:"orders.approval.no-requests",defaultMessage:"We were unable to find any approval requests for this order."},creatingApprovalRequest:{id:"orders.approval.creating",defaultMessage:"Creating approval request"},approvalTitle:{id:"orders.approval.title",defaultMessage:"Summary"},approvalDetail:{id:"orders.approval.view-detail",defaultMessage:"View this order's approval request details"},approvalCreated:{id:"orders.approval.details.created",defaultMessage:"Request created"},approvalReason:{id:"orders.approval.details.reason",defaultMessage:"Approval reason"},approvalCompleted:{id:"orders.approval.details.completed",defaultMessage:"Completed at"},orderDetails:{id:"orders.common.details",defaultMessage:"Order details"},menuApproval:{id:"orders.menu.approval",defaultMessage:"Approval"},menuLifecycle:{id:"orders.menu.lifecycle",defaultMessage:"Lifecycle"},menuSteps:{id:"orders.menu.steps",defaultMessage:"Order steps"},objectsNotFound:{id:"order.detail.not-found",defaultMessage:"The {objects} for this order {count, plural, one {is} other {are}} not available"},orderID:{id:"orders.order.detail.ID",defaultMessage:"Order ID"},orderParameters:{id:"orders.order.detail.parameters",defaultMessage:"Order parameters"},orderProgressMessages:{id:"orders.order.detail.messages",defaultMessage:"Progress messages"},lifecycleLink:{id:"orders.order.lifecicle.link",defaultMessage:"Manage product"},cancelOrder:{id:"orders.actions.cancel",defaultMessage:"Cancel order"},keepOrder:{id:"orders.actions.keep",defaultMessage:"Keep order"},cancelDescription:{id:"orders.cancel.description",defaultMessage:"Are you sure you want to cancel {name}?"},backToOrders:{id:"orders.toolbar.backLink",defaultMessage:"Back to orders"},approvalProduct:{id:"orders.approval.product",defaultMessage:"Product"},orderDate:{id:"orders.approval.order-date",defaultMessage:"Order date"},approvalParameters:{id:"orders.approval.parameters",defaultMessage:"Parameters"},activity:{id:"orders.approval.activity",defaultMessage:"Activity"}});r.a=o},621:function(e,r,t){"use strict";t.d(r,"e",(function(){return G})),t.d(r,"f",(function(){return Y})),t.d(r,"a",(function(){return K})),t.d(r,"d",(function(){return V})),t.d(r,"c",(function(){return W})),t.d(r,"b",(function(){return Z}));var o=t(19),a=t.n(o),n=t(14),c=t.n(n),i=t(1),s=t.n(i),d=t(0),u=t.n(d),p=t(101),l=t(2),f=t(18),m=t.n(f),g=t(43),v=t.n(g),y=t(45),O=t(6),b=t(27);function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function j(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(Object(t),!0).forEach((function(r){s()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var _=Object(y.c)(),I=(Object(y.d)(),Object(y.g)()),P=Object(y.a)(),M=Object(y.b)();function w(e){return I.listServicePlans(e)}function D(e){return q.apply(this,arguments)}function q(){return(q=v()(m.a.mark((function e(r){var t,o,n,c,i,s,d;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.service_parameters,o=t.providerControlParameters,n=a()(t,["providerControlParameters"]),c=a()(r,["service_parameters"]),e.next=3,_.createOrder();case 3:return i=e.sent,(s={}).count=1,s=j(j(j({},s),c),{},{service_parameters:n,provider_control_parameters:o||{}}),e.next=9,_.addToOrder(i.id,s);case 9:return d=e.sent,e.abrupt("return",_.submitOrder(i.id).then((function(e){return j(j({},e),{},{orderItem:d})})));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=function(e){return P.get("".concat(O.c,"/order_items?").concat(e.map((function(e){return"filter[order_id][]=".concat(e)})).join("&")))},R=function(e){return P.get("".concat(O.c,"/portfolio_items?").concat(e.map((function(e){return"filter[id][]=".concat(e)})).join("&")))},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b.a;return P.get("".concat(O.c,"/orders?").concat(e,"&limit=").concat(r.limit,"&offset=").concat(r.offset)).then((function(e){return E(e.data.map((function(e){return e.id}))).then((function(r){return R(r.data.map((function(e){return e.portfolio_item_id}))).then((function(t){return j(j({portfolioItems:t},e),{},{data:e.data.map((function(e){return j(j({},e),{},{orderItems:r.data.filter((function(r){return r.order_id===e.id}))})}))})}))}))}))};var L=function(e){return P.get("".concat(O.c,"/order_items/").concat(e,"/approval_requests")).then((function(e){var r=e.data.map((function(e){var r,t,o=e.approval_request_ref;return r=o,M.post("".concat(O.a,"/graphql"),{query:(t=r,'query {\n  requests(id: "'.concat(t,'") {\n    group_name\n    state\n    actions {\n      created_at\n    }\n  }\n}'))},{"x-rh-persona":"approval/requester"}).then((function(e){return e.data.requests}))}));return Promise.all(r).then((function(e){var r;return{data:(null==e||null===(r=e[0])||void 0===r?void 0:r.map((function(e){var r=e.actions;return j(j({},a()(e,["actions"])),{},{updated:(null==r?void 0:r.length)>0?r.pop().created_at:void 0})})))||[]}}))}))},F=t(4),N=t.n(F),S=t(64),C=t(11),T=t(564),A=t(23),U=function(e){var r=e.id,t=e.dispatch,o=e.portfolioItemId,a=e.portfolioId,n=e.platformId,c=e.orderItemId;return Object(A.a)()(T.a.orderSuccess,{id:r,link:function(e){return u.a.createElement(S.a,{onClick:function(){return t(Object(p.clearNotifications)())},to:{pathname:C.q,search:"?order=".concat(r,"&order-item=").concat(c,"&portfolio-item=").concat(o,"&platform=").concat(n,"&portfolio=").concat(a)}},e)}})};U.propTypes={id:N.a.string.isRequired,dispatch:N.a.func.isRequired,portfolioItemId:N.a.string.isRequired,portfolioId:N.a.string.isRequired,platformId:N.a.string.isRequired,orderItemId:N.a.string.isRequired};var J=U;function B(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function x(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?B(Object(t),!0).forEach((function(r){s()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var G=function(e){return{type:l.y,payload:w(e)}},Y=function(e,r){return function(t){return t({type:l.Z,payload:D(e).then((function(e){var o=e.id,a=e.orderItem;return t(Object(p.addNotification)({variant:"success",title:"Your order has been accepted successfully",description:u.a.createElement(J,{id:o,dispatch:t,portfolioItemId:r.id,portfolioId:r.portfolio_id,platformId:r.service_offering_source_ref,orderItemId:a.id}),dismissable:!0}))}))})}},K=function(e){return function(r,t){r({type:"".concat(l.e,"_PENDING")});var o=t().orderReducer.orderDetail;return function(e){return _.cancelOrder(e)}(e).then((function(){return o.order.state="Canceled",o.approvalRequest&&o.approvalRequest.length>0&&(o.approvalRequest[0].state="canceled"),r({type:l.S,payload:x({},o)}),o})).then((function(e){return r(Object(p.addNotification)({variant:"success",title:"Your order has been canceled successfully",description:"Order ".concat("Order #".concat(e.order.id)," was canceled."),dismissable:!0}))})).then((function(){return r({type:"".concat(l.e,"_FULFILLED")})})).catch((function(e){r({type:"".concat(l.e,"_REJECTED"),payload:e})}))}},V=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b.a;return function(t){var o=Object.entries(e).filter((function(e){var r=c()(e,2)[1];return r&&r.length>0})).map((function(e){var r=c()(e,2),t=r[0],o=r[1];return Array.isArray(o)?o.map((function(e){return"filter[".concat(t,"][]=").concat(e)})).join("&"):"filter[".concat(t,"][contains_i]=").concat(o)})).join("&");return t({type:"".concat(l.i,"_PENDING")}),k(o,r).then((function(n){var c=n.portfolioItems,i=a()(n,["portfolioItems"]);return t({type:l.U,payload:c}),t({type:"".concat(l.i,"_FULFILLED"),meta:x(x({},r),{},{filter:o,filters:e,storeState:!0,stateKey:"orders"}),payload:i})})).catch((function(e){return t({type:"".concat(l.i,"_REJECTED"),payload:e})}))}},W=function(e){return function(r){return r({type:"".concat(l.S,"_PENDING")}),function(e){var r=[P.get("".concat(O.c,"/orders/").concat(e.order)),P.get("".concat(O.c,"/order_items/").concat(e["order-item"])).catch((function(e){if(404===e.status||400===e.status)return{object:"Order item",notFound:!0};throw e})),P.get("".concat(O.c,"/portfolio_items/").concat(e["portfolio-item"])).catch((function(e){if(404===e.status||400===e.status)return{object:"Product",notFound:!0};throw e}))];return r.push(e.platform&&"undefined"!==e.platform?P.get("".concat(O.i,"/sources/").concat(e.platform)).catch((function(e){if(404===e.status||400===e.status)return{object:"Platform",notFound:!0};throw e})):{object:"Platform",notFound:!0}),r.push(P.get("".concat(O.c,"/order_items/").concat(e["order-item"],"/progress_messages")).catch((function(e){if(404===e.status||400===e.status)return{};throw e}))),r.push(e.portfolio&&"undefined"!==e.portfolio?P.get("".concat(O.c,"/portfolios/").concat(e.portfolio)).catch((function(e){if(404===e.status||400===e.status)return{object:"Portfolio",notFound:!0};throw e})):{object:"Portfolio",notFound:!0}),Promise.all(r)}(e).then((function(e){var t=c()(e,7),o=t[0],a=t[1],n=t[2],i=t[3],s=t[4],d=t[5],u=t[6];return r({type:"".concat(l.S,"_FULFILLED"),payload:{order:o,orderItem:a,portfolioItem:n,platform:i,progressMessages:s,portfolio:d,approvalRequest:u}})})).catch((function(e){return r({type:"".concat(l.S,"_REJECTED"),payload:e})}))}},Z=function(e){return function(r){return r({type:"".concat(l.g,"_PENDING")}),L(e).then((function(e){return r({type:"".concat(l.g,"_FULFILLED"),payload:e}),e})).catch((function(e){return r({type:"".concat(l.g,"_REJECTED"),payload:e})}))}}}}]);
//# sourceMappingURL=../sourcemaps/lib~order-detail~order-modal~91f4305a.js.map