(window.webpackJsonp=window.webpackJsonp||[]).push([[47,11],{565:function(e,t,r){"use strict";var n=r(20),a=Object(n.b)({noItems:{id:"common.filtering.noItems",defaultMessage:"No items found"},filterByProduct:{id:"common.filtering.filterByProduct",defaultMessage:"Filter by product"},noResults:{id:"common.filtering.noResults",defaultMessage:"No results found"},noResultsDescription:{id:"common.filtering.noResultsDescription",defaultMessage:"No results match the filter criteria. Remove all filters or clear all filters to show results."},clearFilters:{id:"common.filtering.clear-filters",defaultMessage:"Clear all filters"},noProducts:{id:"common.filtering.no-products",defaultMessage:"No products yet"},noRecords:{id:"commonMessages.noRecords",defaultMessage:"No records"},filterByTitle:{id:"tableToolbar.filterByTitle",defaultMessage:"Filter by {title}"},noResultsFound:{id:"tableToolbar.noResultsFound",defaultMessage:"No results found"},noResult:{id:"tableToolbar.noResult",defaultMessage:"No {results}"},unknown:{id:"commonMessages.unknown",defaultMessage:"Unknown"}});t.a=a},570:function(e,t,r){"use strict";var n=r(82),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};t.a=function(e){var t=void 0===e?{}:e,r=t.removeSearch,o=t.keepHash,i=Object(n.g)();return a(a({},i),{push:function(e){var t=e;return o&&i.location.hash.length>0&&(t="object"==typeof t?a(a({},t),{hash:i.location.hash}):""+t+i.location.hash),r?i.push(function(e){return"string"==typeof e?e.split("?")[0]:"object"==typeof e?a(a({},e),{search:void 0}):e}(t)):i.push(t)}})}},578:function(e,t,r){"use strict";var n=r(20),a=Object(n.b)({orderedBy:{id:"orders.common.orderedBy",defaultMessage:"Ordered by {owner}"},orderedByLabel:{id:"orders.approval.orderedBy",defaultMessage:"Ordered by"},lastUpdated:{id:"orders.common.lastUpdated",defaultMessage:"Last updated"},compositeTitle:{id:"orders.common.compositeTitle",defaultMessage:"{name} - Order # {id}"},detailTitle:{id:"orders.detail.title",defaultMessage:"Order ID {id}"},orderSuccess:{id:"orders.notification.success",defaultMessage:"You can track the progress of Order # {id} in your <link>Orders</link> page."},noOrdersTitle:{id:"orders.list.empty.title",defaultMessage:"No orders"},noOrdersDescription:{id:"orders.list.empty.description",defaultMessage:"No orders have been created."},noApprovalRequests:{id:"orders.approval.no-requests",defaultMessage:"We were unable to find any approval requests for this order."},creatingApprovalRequest:{id:"orders.approval.creating",defaultMessage:"Creating approval request"},approvalTitle:{id:"orders.approval.title",defaultMessage:"Summary"},approvalDetail:{id:"orders.approval.view-detail",defaultMessage:"View this order's approval request details"},approvalCreated:{id:"orders.approval.details.created",defaultMessage:"Request created"},approvalReason:{id:"orders.approval.details.reason",defaultMessage:"Approval reason"},approvalCompleted:{id:"orders.approval.details.completed",defaultMessage:"Completed at"},orderDetails:{id:"orders.common.details",defaultMessage:"Order details"},menuApproval:{id:"orders.menu.approval",defaultMessage:"Approval"},menuLifecycle:{id:"orders.menu.lifecycle",defaultMessage:"Lifecycle"},menuSteps:{id:"orders.menu.steps",defaultMessage:"Order steps"},objectsNotFound:{id:"order.detail.not-found",defaultMessage:"The {objects} for this order {count, plural, one {is} other {are}} not available"},orderID:{id:"orders.order.detail.ID",defaultMessage:"Order ID"},orderParameters:{id:"orders.order.detail.parameters",defaultMessage:"Order parameters"},orderProgressMessages:{id:"orders.order.detail.messages",defaultMessage:"Progress messages"},lifecycleLink:{id:"orders.order.lifecicle.link",defaultMessage:"Manage product"},cancelOrder:{id:"orders.actions.cancel",defaultMessage:"Cancel order"},keepOrder:{id:"orders.actions.keep",defaultMessage:"Keep order"},cancelDescription:{id:"orders.cancel.description",defaultMessage:"Are you sure you want to cancel {name}?"},backToOrders:{id:"orders.toolbar.backLink",defaultMessage:"Back to orders"},orderDate:{id:"orders.approval.order-date",defaultMessage:"Order date"},approvalParameters:{id:"orders.approval.parameters",defaultMessage:"Parameters"},activity:{id:"orders.approval.activity",defaultMessage:"Activity"}});t.a=a},579:function(e,t,r){"use strict";r.d(t,"b",(function(){return G}));var n,a,o,i,l,s=r(569),c=r.n(s),u=r(576),d=r.n(u),p=r(0),f=r.n(p),m=r(13),y=r.n(m),b=r(131),v=r(288),g=r(295),h=r(603),O=r(675),E=r(19),_=r(818),j=r(819),w=r(817),T=r(171),P=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},I=function(){return(I=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},M=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},F=E.b.div(n||(n=P(["\n  position: relative;\n  width: 300px;\n  height: 36px;\n"],["\n  position: relative;\n  width: 300px;\n  height: 36px;\n"]))),x=Object(E.b)(w.a)(a||(a=P(["\n  position: absolute;\n  width: 300px;\n  padding-right: 34px;\n  background: transparent;\n"],["\n  position: absolute;\n  width: 300px;\n  padding-right: 34px;\n  background: transparent;\n"]))),D=E.b.span(o||(o=P(["\n  position: absolute;\n  right: 8px;\n  top: 8px;\n"],["\n  position: absolute;\n  right: 8px;\n  top: 8px;\n"]))),k=Object(E.b)(_.a)(i||(i=P(["\n  z-index: 1000;\n  fill: #72767b;\n  :hover {\n    fill: var(--pf-global--Color--100);\n    cursor: pointer;\n  }\n"],["\n  z-index: 1000;\n  fill: #72767b;\n  :hover {\n    fill: var(--pf-global--Color--100);\n    cursor: pointer;\n  }\n"]))),L=Object(E.b)(j.a)(l||(l=P(["\n  z-index: 1000;\n  fill: #72767b;\n"],["\n  z-index: 1000;\n  fill: #72767b;\n"]))),C=function(e){var t=e.searchValue,r=void 0===t?"":t,n=e.onFilterChange,a=e.placeholder,o=e.isClearable,i=void 0!==o&&o,l=M(e,["searchValue","onFilterChange","placeholder","isClearable"]);return f.a.createElement(T.a,null,f.a.createElement(F,null,f.a.createElement(x,I({id:"toolbar-filter",placeholder:a,value:r,type:"text",onChange:n,"aria-label":a},l)),f.a.createElement(D,null,i&&r&&f.a.createElement(k,{width:"16",height:"16",onClick:function(){return n("")}})||f.a.createElement(L,null))))},R=r(624),B=r(637),N=r(564),S=r(184),q=function(e){var t=e.title,r=d()(e,["title"]);return f.a.createElement(b.Button,r,t)};q.propTypes={title:y.a.string.isRequired};var A=function(e){var t=e.children,r=d()(e,["children"]);return f.a.createElement(S.a,c()({className:"pf-u-p-0"},r),f.a.createElement(O.ToolbarContent,{className:"pf-u-pl-0"},t))};A.propTypes={noWrap:y.a.bool,children:y.a.oneOfType([y.a.node,y.a.arrayOf(y.a.node)])};var V={TopToolbar:R.b,TopToolbarTitle:R.a,Toolbar:A,ToolbarGroup:S.b,ToolbarItem:h.ToolbarItem,FilterToolbarItem:C,Link:N.a,Level:v.Level,LevelItem:g.LevelItem,Button:q,AppTabs:B.a},G={TOP_TOOLBAR:"TopToolbar",TOP_TOOLBAR_TITLE:"TopToolbarTitle",TOOLBAR:"Toolbar",TOOLBAR_ITEM:"ToolbarItem",TOOLBAR_GROUP:"ToolbarGroup",FILTER_TOOLBAR_ITEM:"FilterToolbarItem",LINK:"Link",BUTTON:"Button",LEVEL:"Level",LEVEL_ITEM:"LevelItem",TABS:"AppTabs"};t.a=V},580:function(e,t,r){"use strict";r.d(t,"c",(function(){return m})),r.d(t,"b",(function(){return y})),r.d(t,"d",(function(){return b})),r.d(t,"a",(function(){return v})),r.d(t,"e",(function(){return g}));var n=r(3),a=r(21),o=r(4),i=r(22),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s=Object(a.a)(),c=Object(a.b)(),u=function(e,t,r){var n=t?"&filter[name][contains_i]="+t:"";return e?s.get(o.l+"/sources/"+e+"/service_offerings?filter[archived_at][nil]"+n+(r?"&limit="+r.limit+"&offset="+r.offset:"")):s.get(o.l+"/service_offerings")},d=function(e,t,r){return void 0===t&&(t=""),void 0===r&&(r=i.a),e?s.get(o.l+"/sources/"+e+"/service_inventories?filter[name][contains_i]="+t+(r?"&limit="+r.limit+"&offset="+r.offset:"")):s.get(o.l+"/service_inventories?limit="+r.limit+"&offset="+r.offset)},p=function(e,t){return Promise.all([s.get(o.l+"/service_offerings/"+e),s.get(o.k+"/sources/"+t).then((function(e){return s.get(o.k+"/source_types/"+e.source_type_id).then((function(t){var r=t.icon_url;return l(l({},e),{icon_url:r})}))}))]).then((function(e){return{service:e[0],source:e[1]}}))},f=function(){return(f=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},m=function(){return function(e){return e({type:n.n+"_PENDING"}),c.post(o.k+"/graphql",{query:'\nquery {\n  application_types (filter: { name: "/insights/platform/catalog" }) {\n    id\n    name\n    sources {\n      id\n      name\n      source_type_id\n    }\n  }\n}'}).then((function(e){return e.data.application_types})).then((function(e){return e[0].sources})).then((function(t){return e({type:n.n+"_FULFILLED",payload:t})})).catch((function(t){return e({type:n.n+"_REJECTED",payload:t})}))}},y=function(e,t,r){return{type:n.q,payload:u(e,t,r),meta:f({platformId:e,filter:t},r)}},b=function(e){return{type:n.m,payload:(t=e,s.get(o.k+"/sources/"+t))};var t},v=function(e,t,r){return{type:n.o,payload:d(e,t,r)}},g=function(e,t){return{type:n.y,payload:p(e,t)}}},585:function(e,t,r){"use strict";var n=r(569),a=r.n(n),o=r(576),i=r.n(o),l=r(0),s=r.n(l),c=r(13),u=r.n(c),d=r(579),p=Object(l.createContext)(),f=function(e){var t=e.component,r=i()(e,["component"]);return s.a.createElement(p.Consumer,null,(function(e){var n=e.componentMapper,a="string"==typeof t?n[t]:t;return s.a.createElement(a,r)}))};f.propTypes={component:u.a.oneOfType([u.a.string,u.a.node,u.a.func,u.a.element]).isRequired};var m=function e(t){return t.hidden?null:t.map((function(t){var r=t.hidden,n=t.fields,o=t.key,l=i()(t,["hidden","fields","key"]);return r?null:n?s.a.createElement(f,a()({key:o},l),e(n)):s.a.createElement(f,a()({key:o},l))}))},y=function(e){var t=e.schema,r=e.componentMapper;return s.a.createElement(p.Provider,{value:{render:m,componentMapper:r}},m(t.fields))};y.propTypes={schema:u.a.shape({fields:u.a.array.isRequired}).isRequired,componentMapper:u.a.object},y.defaultProps={componentMapper:d.a},t.a=y},632:function(e,t,r){"use strict";r.d(t,"b",(function(){return l}));var n=r(95),a=r(20),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=Object(a.b)({title:{id:"common.states.title",defaultMessage:"State"},ordered:{id:"common.states.ordered",defaultMessage:"Ordered"},approvalPending:{id:"common.states.approval-pending",defaultMessage:"Approval Pending"},canceled:{id:"common.states.canceled",defaultMessage:"Canceled"},completed:{id:"common.states.completed",defaultMessage:"Completed"},failed:{id:"common.states.failed",defaultMessage:"Failed"},undecided:{id:"common.states.undecided",defaultMessage:"Undecided"},approved:{id:"common.states.approved",defaultMessage:"Approved"},denied:{id:"common.states.denied",defaultMessage:"Denied"},error:{id:"common.states.error",defaultMessage:"Error"},pending:{id:"common.states.pending",defaultMessage:"Pending"},skipped:{id:"common.states.skipped",defaultMessage:"Skipped"},started:{id:"common.states.started",defaultMessage:"Started"},notified:{id:"common.states.notified",defaultMessage:"Notified"}}),l=function(e){return e.replace(/\s/g,"").replace(/^./,(function(e){return e.toLowerCase()}))};t.a=o(o({},i),{created:n.a.created})},633:function(e,t,r){"use strict";r.d(t,"e",(function(){return C})),r.d(t,"f",(function(){return R})),r.d(t,"a",(function(){return B})),r.d(t,"d",(function(){return N})),r.d(t,"c",(function(){return S})),r.d(t,"b",(function(){return q}));var n=r(0),a=r.n(n),o=r(108),i=r(3),l=r(21),s=r(4),c=r(22),u=r(40),d=function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function i(e){try{s(n.next(e))}catch(e){o(e)}}function l(e){try{s(n.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}s((n=n.apply(e,t||[])).next())}))},p=function(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},f=Object(l.a)(),m=function(){return(m=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},y=function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function i(e){try{s(n.next(e))}catch(e){o(e)}}function l(e){try{s(n.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}s((n=n.apply(e,t||[])).next())}))},b=function(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},v=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},g=Object(l.c)(),h=(Object(l.d)(),Object(l.g)()),O=Object(l.a)(),E=Object(l.b)(),_=function(e){return h.listServicePlans(e)},j=function(e,t){return void 0===e&&(e=""),void 0===t&&(t=c.a),O.get(s.e+"/orders?"+e+"&limit="+t.limit+"&offset="+t.offset).then((function(e){return(t=e.data.map((function(e){return e.id})),O.get(s.e+"/order_items?"+t.map((function(e){return"filter[order_id][]="+e})).join("&"))).then((function(t){return(r=t.data.map((function(e){return e.portfolio_item_id})),O.get(s.e+"/portfolio_items?"+r.map((function(e){return"filter[id][]="+e})).join("&"))).then((function(r){return m(m({portfolioItems:r},e),{data:e.data.map((function(e){return m(m({},e),{orderItems:t.data.filter((function(t){return t.order_id===e.id}))})}))})}));var r}));var t}))},w=function(e){if(Object.values(e).some((function(e){return!e})))return t=e.order,d(void 0,void 0,void 0,(function(){var e,r,n,a,o,i;return p(this,(function(l){switch(l.label){case 0:return l.trys.push([0,2,,3]),[4,f.get(s.e+"/orders/"+t)];case 1:return e=l.sent(),[3,3];case 2:if(r=l.sent(),e={},404!==r.status&&400!==r.status)throw r;return u.a.replace({pathname:"/404",state:{from:u.a.location}}),[3,3];case 3:n={object:"Order item",notFound:!0},l.label=4;case 4:return l.trys.push([4,6,,7]),[4,f.get(s.e+"/order_items?order_id="+e.id)];case 5:return a=l.sent(),n=a.data[0],[3,7];case 6:return l.sent(),[3,7];case 7:o={object:"Product",notFound:!0},l.label=8;case 8:return l.trys.push([8,10,,11]),[4,f.get(s.e+"/portfolio_items/"+n.portfolio_item_id)];case 9:return o=l.sent(),[3,11];case 10:return l.sent(),[3,11];case 11:return i=[f.get(s.k+"/sources/"+o.service_offering_source_ref).catch((function(){return{object:"Platform",notFound:!0}})),f.get(s.e+"/order_items/"+n.id+"/progress_messages").catch((function(){return{object:"Messages",notFound:!0}})),f.get(s.e+"/portfolios/"+o.portfolio_id).catch((function(){return{object:"Portfolio",notFound:!0}}))],[2,Promise.all(i).then((function(t){var r=t[0],a=t[1],i=t[2];return[e,n,o,r,a,i]}))]}}))}));var t,r=[O.get(s.e+"/orders/"+e.order).catch((function(e){if(404===e.status||400===e.status)return u.a.replace({pathname:"/404",state:{from:u.a.location}});throw e})),O.get(s.e+"/order_items/"+e["order-item"]).catch((function(e){if(404===e.status||400===e.status)return{object:"Order item",notFound:!0};throw e})),O.get(s.e+"/portfolio_items/"+e["portfolio-item"]).catch((function(e){if(404===e.status||400===e.status)return{object:"Product",notFound:!0};throw e})),O.get(s.k+"/sources/"+e.platform).catch((function(e){if(404===e.status||400===e.status)return{object:"Platform",notFound:!0};throw e})),O.get(s.e+"/order_items/"+e["order-item"]+"/progress_messages").catch((function(e){if(404===e.status||400===e.status)return{};throw e})),O.get(s.e+"/portfolios/"+e.portfolio).catch((function(e){if(404===e.status||400===e.status)return{object:"Portfolio",notFound:!0};throw e}))];return Promise.all(r)},T=function(e){return O.get(s.e+"/order_items/"+e+"/approval_requests").then((function(e){var t=e.data.map((function(e){var t,r,n=e.approval_request_ref;return t=n,E.post(s.b+"/graphql",{query:(r=t,'query {\n  requests(id: "'+r+'") {\n    id\n    number_of_children\n    decision\n    group_name\n    created_at\n    state\n    actions {\n      id\n      created_at\n    }\n    requests {\n      id\n      number_of_children\n      decision\n      group_name\n      state\n      parent_id\n      created_at\n      actions {\n        id\n        created_at\n      }\n    }\n  }\n}')},{"x-rh-persona":"approval/requester"}).then((function(e){var t=e.data.requests;return t&&t.length>0&&t[0].number_of_children>0?t[0].requests:t}))}));return Promise.all(t).then((function(e){var t;return{data:(null===(t=null==e?void 0:e[0])||void 0===t?void 0:t.map((function(e){var t,r=e.actions,n=v(e,["actions"]);return m(m({},n),{updated:(null==r?void 0:r.length)>0?null===(t=r.pop())||void 0===t?void 0:t.created_at:n.created_at})})))||[]}}))}))},P=r(66),I=r(8),M=r(578),F=r(17),x=function(e){var t=e.id,r=e.dispatch,n=e.portfolioItemId,i=e.portfolioId,l=e.platformId,s=e.orderItemId;return Object(F.a)()(M.a.orderSuccess,{id:t,link:function(e){return a.a.createElement(P.a,{onClick:function(){return r(Object(o.clearNotifications)())},to:{pathname:I.o,search:"?order="+t+"&order-item="+s+"&portfolio-item="+n+"&platform="+l+"&portfolio="+i}},e)}})},D=r(74),k=function(){return(k=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},L=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},C=function(e){return{type:i.z,payload:_(e)}},R=function(e,t){return function(r){return r({type:i.cb,payload:(n=e,y(void 0,void 0,void 0,(function(){var e,t,r;return b(this,(function(a){switch(a.label){case 0:return l=n.service_parameters,s=l.providerControlParameters,c=v(l,["providerControlParameters"]),u=v(n,["service_parameters"]),[4,g.createOrder()];case 1:return e=a.sent(),(t={}).count=1,t=m(m(m({},t),u),{service_parameters:c,provider_control_parameters:s||{}}),[4,g.addToOrder(e.id,t)];case 2:return r=a.sent(),[2,g.submitOrder(e.id).then((function(e){return m(m({},e),{orderItem:r})}))]}}))}))).then((function(e){var n=e.id,i=e.orderItem;return r(Object(o.addNotification)({variant:"success",title:"Your order has been accepted successfully",description:a.a.createElement(x,{id:n,dispatch:r,portfolioItemId:t.id,portfolioId:t.portfolio_id,platformId:t.service_offering_source_ref,orderItemId:i.id}),dismissable:!0}))}))});var n,l,s,c,u}},B=function(e){return function(t,r){t({type:i.e+"_PENDING"});var n=r().orderReducer.orderDetail;return function(e){return g.cancelOrder(e)}(e).then((function(){return n.order.state=D.OrderStateEnum.Canceled,n.approvalRequest&&n.approvalRequest.data.length>0&&(n.approvalRequest.data[0].state="canceled"),t({type:i.V,payload:k({},n)}),n})).then((function(e){return t(Object(o.addNotification)({variant:"success",title:"Your order has been canceled successfully",description:"Order Order #"+e.order.id+" was canceled.",dismissable:!0}))})).then((function(){return t({type:i.e+"_FULFILLED"})})).catch((function(e){t({type:i.e+"_REJECTED",payload:e})}))}},N=function(e,t){return void 0===t&&(t=c.a),function(r){var n=Object.entries(e).filter((function(e){var t=e[1];return t&&t.length>0})).map((function(e){var t=e[0],r=e[1];return Array.isArray(r)?r.map((function(e){return"filter["+t+"][]="+e})).join("&"):"filter["+t+"][contains_i]="+r})).join("&");return t.sortBy&&(n=n+"&sort_by="+t.sortBy+":"+(t.sortDirection||"desc")),r({type:i.i+"_PENDING"}),j(n,t).then((function(a){var o=a.portfolioItems,l=L(a,["portfolioItems"]);return r({type:i.X,payload:o}),r({type:i.i+"_FULFILLED",meta:k(k({},t),{filter:n,filters:e,storeState:!0,stateKey:"orders"}),payload:l})})).catch((function(e){return r({type:i.i+"_REJECTED",payload:e})}))}},S=function(e){return function(t){return t({type:i.V+"_PENDING"}),w(e).then((function(e){var r=e[0],n=e[1],a=e[2],o=e[3],l=e[4],s=e[5];return t({type:i.V+"_FULFILLED",payload:{order:r,orderItem:n,portfolioItem:a,platform:o,progressMessages:l,portfolio:s}})})).catch((function(e){return t({type:i.V+"_REJECTED",payload:e})}))}},q=function(e){return function(t){return t({type:i.g+"_PENDING"}),T(e).then((function(e){return t({type:i.g+"_FULFILLED",payload:e}),e})).catch((function(e){return t({type:i.g+"_REJECTED",payload:e})}))}}},637:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(943),i=r(822),l=r(82),s=r(570);t.a=function(e){var t=e.tabItems,r=Object(s.a)().push,n=Object(l.h)(),c=n.pathname,u=n.search,d=t.find((function(e){var t=e.name;return c.includes(t)}));return a.a.createElement(o.a,{activeKey:d?d.eventKey:0,onSelect:function(e,n){return r({pathname:t[n].name,search:u})}},t.map((function(e){return a.a.createElement(i.a,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name,disabled:e.disabled})})))}},744:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(899),i=r(900),l=r(901),s=r(902),c=r(800),u={Completed:{icon:a.a.createElement(o.a,null),color:"green"},"Approval Pending":{icon:a.a.createElement(i.a,null),color:"blue"},Ordered:{icon:a.a.createElement(l.a,null),color:"grey"},Failed:{icon:a.a.createElement(s.a,null),color:"red"},Canceled:{icon:a.a.createElement(c.a,null),color:"orange"},Created:{icon:a.a.createElement(l.a,null),color:"grey"}};t.a=u},957:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(749),i=r(585),l=r(579),s=function(){return{fields:[{component:l.b.TOP_TOOLBAR,className:"orders pf-u-p-lg",key:"orders-toolbar",fields:[{component:l.b.TOP_TOOLBAR_TITLE,key:"orders-toolbar-title",title:"Orders",className:""}]}]}},c=r(569),u=r.n(c),d=r(898),p=r.n(d),f=r(94),m=r.n(f),y=r(132),b=r.n(y),v=r(18),g=r(138),h=r(139),O=r(302),E=r(195),_=r(904),j=r(905),w=r(906),T=r(746),P=r(907),I=r(131),M=r(175),F=r(676),x=r(745),D=r(908),k=r(567),L=r.n(k),C=r(605),R=r(776),B=r(687),N=r(686),S=r(633),q=r(580),A=r(84),V=r(903),G=r(46),U=r(178),K=r(602),J=r(4),z=r(564),Y=r(8),W=r(632),H=r(628),X=r(744);function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){b()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $=function(e,t,r,o){var i,l,s=e.orderItems[0]&&e.orderItems[0]||{},c=Z(Z(Z(Z({order:e.id},s.id?{"order-item":s.id}:{}),s.portfolio_item_id?{"portfolio-item":s.portfolio_item_id}:{}),t?{platform:t}:{}),r?{portfolio:r}:{}),d=Object(W.b)(e.state);return[{title:a.a.createElement(H.a,null,a.a.createElement(z.a,{pathname:Y.o,searchParams:c},e.id))},{title:a.a.createElement(n.Fragment,null,a.a.createElement(K.a,{height:60,src:(i=e,l=i.orderItems,l[0]&&J.e+"/portfolio_items/"+l[0].portfolio_item_id+"/icon"),sourceId:t}))},e.orderName,e.owner,{title:a.a.createElement(G.Text,{className:"pf-u-mb-0",component:G.TextVariants.small},a.a.createElement(U.DateFormat,{date:e.created_at,variant:"relative"}))},{title:a.a.createElement(G.Text,{className:"pf-u-mb-0",component:G.TextVariants.small},a.a.createElement(U.DateFormat,{date:e.orderItems[0]&&e.orderItems[0].updated_at,variant:"relative"}))},{title:a.a.createElement(H.a,null,a.a.createElement(V.Label,u()({},X.a[e.state],{variant:"outline"}),o(W.a[d])))}]},ee=r(575),te=r(107),re=r(22),ne=r(181),ae=r(565),oe=r(578),ie=r(95),le=r(17);function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(Object(r),!0).forEach((function(t){b()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ue=Object(te.a)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:re.a,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;n(!0),r(Object(S.d)(e,t)).then((function(){return n(!1)}))}),1e3),de={isOpen:!1,isFetching:!0,isFiltering:!1,filterType:"state",filters:{state:[],owner:""},sortBy:{index:0,direction:C.a.desc}},pe=function(e,t){switch(t.type){case"setFetching":return ce(ce({},e),{},{isFetching:t.payload});case"setFilterValue":return ce(ce({},e),{},{filters:(r=t.payload,n=e.filterType,a=e.filters,ce(ce({},a),{},b()({},n,r)))});case"replaceFilterChip":return ce(ce({},e),{},{filters:t.payload});case"setFilteringFlag":return ce(ce({},e),{},{isFiltering:t.payload});case"setFilterType":return ce(ce({},e),{},{filterType:t.payload});case"setSortBy":return ce(ce({},e),{},{sortBy:t.payload,isFetching:!0})}var r,n,a;return e},fe={0:"id",3:"owner",4:"created_at",6:"state"},me=function(){var e,t,r,o=Object(le.a)(),i=Object(v.useDispatch)(),l=Object(ne.a)(),s=Object(n.useReducer)(pe,ce(ce({},de),{},{filters:(null==l||null===(e=l.orders)||void 0===e?void 0:e.filters)||{state:[],owner:""},sortBy:{direction:(null==l||null===(t=l.orders)||void 0===t?void 0:t.sortDirection)||C.a.desc,index:(null==l||null===(r=l.orders)||void 0===r?void 0:r.sortIndex)||0}})),c=m()(s,2),d=c[0],f=d.isFetching,y=d.isFiltering,k=d.filterType,V=d.filters,G=d.sortBy,U=c[1],K=Object(v.useSelector)((function(e){return e.orderReducer.orders})),J=K.data,z=K.meta,Y=[{title:o(oe.a.orderID)},o(ie.a.product),"",{title:o(oe.a.orderedByLabel)},{title:o(oe.a.orderDate)},o(ie.a.updated),{title:o(ie.a.status)}].map((function(e){return"object"!==p()(e)||f||y||0===J.length?e:ce(ce({},e),{},{transforms:[R.a]})})),H=Object(v.useSelector)((function(e){return e.portfolioReducer.portfolioItems.data})),X=J.map((function(e){var t=function(e,t){var r=e.orderItems,n=r[0]&&t.find((function(e){var t=e.id;return r[0].portfolio_item_id===t}));return n?{orderPlatform:n.service_offering_source_ref,orderPortfolio:n.portfolio_id}:{}}(e,H),r=t.orderPlatform,n=t.orderPortfolio,a=function(e,t){var r=e.orderItems,n=e.id,a=r[0]&&t.find((function(e){var t=e.id;return r[0].portfolio_item_id===t}));return a?a.name:"Order "+n}(e,H);return $(ce(ce({},e),{},{orderName:a}),r,n,o)}));Object(n.useEffect)((function(){U({type:"setFetching",payload:!0}),Promise.all([i(Object(S.d)(V,null==l?void 0:l.orders)),i(Object(q.c)())]).then((function(){return U({type:"setFetching",payload:!1})}))}),[]);var Q=function(e,t){return U({type:"setFetching",payload:!0}),i(Object(S.d)(V,ce(ce({},t),{},{sortBy:fe[G.index],sortDirection:G.direction,sortIndex:G.index}))).then((function(){return U({type:"setFetching",payload:!1})})).catch((function(){return U({type:"setFetching",payload:!1})}))},Z=function(e){U({type:"setFilterValue",payload:e}),ue(ce(ce({},V),{},b()({},k,e)),ce(ce({},z),{},{sortBy:fe[G.index],sortDirection:G.direction,sortIndex:G.index,offset:0}),i,(function(e){return U({type:"setFilteringFlag",payload:e})}))},te=function(){return U({type:"replaceFilterChip",payload:de.filters}),ue(de.filters,ce(ce({},z),{},{sortBy:fe[G.index],sortDirection:G.direction,sortIndex:G.index}),i,(function(e){return U({type:"setFilteringFlag",payload:e})}))};return a.a.createElement(g.Grid,{hasGutter:!0},a.a.createElement(h.GridItem,null,a.a.createElement(M.Section,{type:"content"},!z.noData&&a.a.createElement(F.PrimaryToolbar,{activeFiltersConfig:{filters:Object.entries(V).filter((function(e){var t=m()(e,2)[1];return t&&t.length>0})).map((function(e){var t=m()(e,2),r=t[0],n=t[1];return{category:r,type:r,chips:Array.isArray(n)?n.map((function(e){return{name:e}})):[{name:n}]}})),onDelete:function(e,t,r){var n=m()(t,1)[0];if(r)return te();var a=ce({},V);"state"===n.type?a[n.type]=a[n.type].filter((function(e){return e!==n.chips[0].name})):a[n.type]="",U({type:"replaceFilterChip",payload:a}),ue(a,z,i,(function(e){return U({type:"setFilteringFlag",payload:e})}))}},filterConfig:{onChange:function(e,t){return U({type:"setFilterType",payload:t})},value:k,items:[{filterValues:{items:[{value:"Approval Pending",label:o(W.a.approvalPending)},{value:"Canceled",label:o(W.a.canceled)},{value:"Completed",label:o(W.a.completed)},{value:"Created",label:o(ie.a.created)},{value:"Failed",label:o(W.a.failed)},{value:"Ordered",label:o(W.a.ordered)}],value:V.state,onChange:function(e,t){return Z(t)}},label:"State",value:"state",type:"checkbox"},{filterValues:{value:V.owner,onChange:function(e,t){return Z(t)}},label:"Owner",value:"owner"}]},pagination:a.a.createElement(ee.a,{isDisabled:f||y,apiRequest:Q,meta:z,isCompact:!0})}),a.a.createElement(C.b,u()({"aria-label":"orders"},f||y||0!==J.length?{sortBy:G,onSort:function(e,t,r){return U({type:"setSortBy",payload:{index:t,direction:r}}),i(Object(S.d)(V,ce(ce({},z),{},{sortBy:fe[t],sortDirection:r,sortIndex:t}))).then((function(){return U({type:"setFetching",payload:!1})}))}}:{},{cells:Y,rows:f||y?[]:X,className:"orders-table"}),a.a.createElement(B.a,null),a.a.createElement(N.a,null)),!(f||y)&&0===J.length&&a.a.createElement(x.EmptyTable,null,a.a.createElement(E.Bullseye,null,a.a.createElement(_.EmptyState,null,a.a.createElement(E.Bullseye,null,a.a.createElement(j.EmptyStateIcon,{icon:L.a})),a.a.createElement(O.Title,{headingLevel:"h1",size:"lg"},z.noData?o(oe.a.noOrdersTitle):o(ae.a.noResults)),a.a.createElement(w.EmptyStateBody,null,z.noData?o(oe.a.noOrdersDescription):o(ae.a.noResultsDescription)),!z.noData&&a.a.createElement(P.EmptyStateSecondaryActions,null,a.a.createElement(I.Button,{variant:"link",onClick:te},o(ae.a.clearFilters)))))),(f||y)&&a.a.createElement(A.e,null),a.a.createElement(D.TableToolbar,{className:"pf-u-mr-0"},a.a.createElement("div",{className:"bottom-pagination-container"},a.a.createElement(T.Flex,{justifyContent:{default:"justifyContentFlexEnd"}},z.count>0&&a.a.createElement(ee.a,{className:"pf-u-mt-0",isDisabled:f||y,apiRequest:Q,meta:z})))))))};t.default=function(){return Object(n.useEffect)((function(){insights.chrome.appNavClick({id:"orders",secondaryNav:!0})}),[]),a.a.createElement(o.Stack,null,a.a.createElement(i.a,{schema:s()}),a.a.createElement(me,null))}}}]);
//# sourceMappingURL=../sourcemaps/orders~91f4305a.js.map