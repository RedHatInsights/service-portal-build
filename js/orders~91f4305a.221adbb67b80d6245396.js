(window.webpackJsonp=window.webpackJsonp||[]).push([[48,10],{628:function(e,t,r){"use strict";var n=r(99),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};t.a=function(e){var t=void 0===e?{}:e,r=t.removeSearch,o=t.keepHash,i=Object(n.g)();return a(a({},i),{push:function(e){var t=e;return o&&i.location.hash.length>0&&(t="object"==typeof t?a(a({},t),{hash:i.location.hash}):""+t+i.location.hash),r?i.push(function(e){return"string"==typeof e?e.split("?")[0]:"object"==typeof e?a(a({},e),{search:void 0}):e}(t)):i.push(t)}})}},629:function(e,t,r){"use strict";var n=r(23),a=Object(n.b)({noItems:{id:"common.filtering.noItems",defaultMessage:"No items found"},filterByProduct:{id:"common.filtering.filterByProduct",defaultMessage:"Filter by product"},noResults:{id:"common.filtering.noResults",defaultMessage:"No results found"},noResultsDescription:{id:"common.filtering.noResultsDescription",defaultMessage:"No results match the filter criteria. Remove all filters or clear all filters to show results."},clearFilters:{id:"common.filtering.clear-filters",defaultMessage:"Clear all filters"},noProducts:{id:"common.filtering.no-products",defaultMessage:"No products yet"},noRecords:{id:"commonMessages.noRecords",defaultMessage:"No records"},filterByTitle:{id:"tableToolbar.filterByTitle",defaultMessage:"Filter by {title}"},noResultsFound:{id:"tableToolbar.noResultsFound",defaultMessage:"No results found"},noResult:{id:"tableToolbar.noResult",defaultMessage:"No {results}"},unknown:{id:"commonMessages.unknown",defaultMessage:"Unknown"}});t.a=a},633:function(e,t,r){"use strict";r.d(t,"b",(function(){return S}));var n,a,o,i,s,l=r(0),c=r.n(l),u=r(18),d=r.n(u),p=r(145),f=r(814),m=r(171),y=r(597),v=r(609),g=r(21),h=r(805),b=r(806),O=r(927),_=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},E=function(){return(E=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},j=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},w=g.b.div(n||(n=_(["\n  position: relative;\n  width: 300px;\n  height: 36px;\n"],["\n  position: relative;\n  width: 300px;\n  height: 36px;\n"]))),I=Object(g.b)(O.a)(a||(a=_(["\n  position: absolute;\n  width: 300px;\n  padding-right: 34px;\n  background: transparent;\n"],["\n  position: absolute;\n  width: 300px;\n  padding-right: 34px;\n  background: transparent;\n"]))),P=g.b.span(o||(o=_(["\n  position: absolute;\n  right: 8px;\n  top: 8px;\n"],["\n  position: absolute;\n  right: 8px;\n  top: 8px;\n"]))),M=Object(g.b)(h.a)(i||(i=_(["\n  z-index: 1000;\n  fill: #72767b;\n  :hover {\n    fill: var(--pf-global--Color--100);\n    cursor: pointer;\n  }\n"],["\n  z-index: 1000;\n  fill: #72767b;\n  :hover {\n    fill: var(--pf-global--Color--100);\n    cursor: pointer;\n  }\n"]))),T=Object(g.b)(b.a)(s||(s=_(["\n  z-index: 1000;\n  fill: #72767b;\n"],["\n  z-index: 1000;\n  fill: #72767b;\n"]))),F=function(e){var t=e.searchValue,r=void 0===t?"":t,n=e.onFilterChange,a=e.placeholder,o=e.isClearable,i=void 0!==o&&o,s=j(e,["searchValue","onFilterChange","placeholder","isClearable"]);return c.a.createElement(m.a,null,c.a.createElement(w,null,c.a.createElement(I,E({id:"toolbar-filter",placeholder:a,value:r,type:"text",onChange:n,"aria-label":a},s)),c.a.createElement(P,null,i&&r&&c.a.createElement(M,{width:"16",height:"16",onClick:function(){return n("")}})||c.a.createElement(T,null))))},k=r(685),x=r(655),D=r(626),L=r(217),C=function(){return(C=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},R=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},N=function(e){var t=e.title,r=R(e,["title"]);return c.a.createElement(p.a,C({},r),t)};N.propTypes={title:d.a.string.isRequired};var B={TopToolbar:k.b,TopToolbarTitle:k.a,Toolbar:function(e){var t=e.children,r=R(e,["children"]);return c.a.createElement(L.a,C({className:"pf-u-p-0"},r),c.a.createElement(f.a,{className:"pf-u-pl-0"},t))},ToolbarGroup:L.b,ToolbarItem:m.a,FilterToolbarItem:F,Link:D.a,Level:y.a,LevelItem:v.a,Button:N,AppTabs:x.a},S={TOP_TOOLBAR:"TopToolbar",TOP_TOOLBAR_TITLE:"TopToolbarTitle",TOOLBAR:"Toolbar",TOOLBAR_ITEM:"ToolbarItem",TOOLBAR_GROUP:"ToolbarGroup",FILTER_TOOLBAR_ITEM:"FilterToolbarItem",LINK:"Link",BUTTON:"Button",LEVEL:"Level",LEVEL_ITEM:"LevelItem",TABS:"AppTabs"};t.a=B},643:function(e,t,r){"use strict";var n=r(23),a=Object(n.b)({orderedBy:{id:"orders.common.orderedBy",defaultMessage:"Ordered by {owner}"},orderedByLabel:{id:"orders.approval.orderedBy",defaultMessage:"Ordered by"},lastUpdated:{id:"orders.common.lastUpdated",defaultMessage:"Last updated"},compositeTitle:{id:"orders.common.compositeTitle",defaultMessage:"{name} - Order # {id}"},detailTitle:{id:"orders.detail.title",defaultMessage:"Order ID {id}"},orderSuccess:{id:"orders.notification.success",defaultMessage:"You can track the progress of Order # {id} in your <link>Orders</link> page."},noOrdersTitle:{id:"orders.list.empty.title",defaultMessage:"No orders"},noOrdersDescription:{id:"orders.list.empty.description",defaultMessage:"No orders have been created."},noApprovalRequests:{id:"orders.approval.no-requests",defaultMessage:"We were unable to find any approval requests for this order."},creatingApprovalRequest:{id:"orders.approval.creating",defaultMessage:"Creating approval request"},approvalTitle:{id:"orders.approval.title",defaultMessage:"Summary"},approvalDetail:{id:"orders.approval.view-detail",defaultMessage:"View this order's approval request details"},approvalCreated:{id:"orders.approval.details.created",defaultMessage:"Request created"},approvalReason:{id:"orders.approval.details.reason",defaultMessage:"Approval reason"},approvalCompleted:{id:"orders.approval.details.completed",defaultMessage:"Completed at"},orderDetails:{id:"orders.common.details",defaultMessage:"Order details"},menuApproval:{id:"orders.menu.approval",defaultMessage:"Approval"},menuProvision:{id:"orders.menu.provision",defaultMessage:"Provision"},menuLifecycle:{id:"orders.menu.lifecycle",defaultMessage:"Lifecycle"},menuSteps:{id:"orders.menu.steps",defaultMessage:"Order steps"},objectsNotFound:{id:"order.detail.not-found",defaultMessage:"The {objects} for this order {count, plural, one {is} other {are}} not available"},orderID:{id:"orders.order.detail.ID",defaultMessage:"Order ID"},orderParameters:{id:"orders.order.detail.parameters",defaultMessage:"Order parameters"},orderItemParameters:{id:"orders.order.provision.parameters",defaultMessage:"Parameters"},defaultOrderItemType:{id:"orders.order.default_type",defaultMessage:"Product"},orderProgressMessages:{id:"orders.order.detail.messages",defaultMessage:"Progress messages"},lifecycleLink:{id:"orders.order.lifecycle.link",defaultMessage:"Manage product"},cancelOrder:{id:"orders.actions.cancel",defaultMessage:"Cancel order"},keepOrder:{id:"orders.actions.keep",defaultMessage:"Keep order"},cancelDescription:{id:"orders.cancel.description",defaultMessage:"Are you sure you want to cancel {name}?"},backToOrders:{id:"orders.toolbar.backLink",defaultMessage:"Back to orders"},orderDate:{id:"orders.approval.order-date",defaultMessage:"Order date"},approvalParameters:{id:"orders.approval.parameters",defaultMessage:"Parameters"},activity:{id:"orders.approval.activity",defaultMessage:"Activity"},artifacts:{id:"orders.artifacts",defaultMessage:"Order artifacts"},noOrderProvision:{id:"orders.provision.no-items",defaultMessage:"We were unable to find provisioning data for this order."},fetchingOrderProvision:{id:"orders.provision.fetching-provision",defaultMessage:"Retrieving order provisioning data"}});t.a=a},645:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(633),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},l=Object(n.createContext)({}),c=function(e){var t=e.component,r=s(e,["component"]);return a.a.createElement(l.Consumer,null,(function(e){var n=e.componentMapper,o="string"==typeof t?n&&n[t]:t;return o?a.a.createElement(o,i({},r)):null}))},u=function(e){return e.map((function(e){var t=e.hidden,r=e.fields,n=e.key,o=s(e,["hidden","fields","key"]);return t?null:r?a.a.createElement(c,i({key:n},o),u(r)):a.a.createElement(c,i({key:n},o))}))};t.a=function(e){var t=e.schema,r=e.componentMapper,n=void 0===r?o.a:r;return a.a.createElement(l.Provider,{value:{render:u,componentMapper:n}},u(t.fields))}},651:function(e,t,r){"use strict";r.d(t,"c",(function(){return m})),r.d(t,"b",(function(){return y})),r.d(t,"d",(function(){return v})),r.d(t,"a",(function(){return g})),r.d(t,"e",(function(){return h}));var n=r(3),a=r(29),o=r(5),i=r(32),s=function(){return(s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=Object(a.a)(),c=Object(a.b)(),u=function(e,t,r){var n=t?"&filter[name][contains_i]="+t:"";return e?l.get(o.l+"/sources/"+e+"/service_offerings?filter[archived_at][nil]"+n+(r?"&limit="+r.limit+"&offset="+r.offset:"")):l.get(o.l+"/service_offerings")},d=function(e,t,r){return void 0===t&&(t=""),void 0===r&&(r=i.a),e?l.get(o.l+"/sources/"+e+"/service_inventories?filter[name][contains_i]="+t+(r?"&limit="+r.limit+"&offset="+r.offset:"")):l.get(o.l+"/service_inventories?limit="+r.limit+"&offset="+r.offset)},p=function(e,t){return Promise.all([l.get(o.l+"/service_offerings/"+e),l.get(o.k+"/sources/"+t).then((function(e){return l.get(o.k+"/source_types/"+e.source_type_id).then((function(t){var r=t.icon_url;return s(s({},e),{icon_url:r})}))}))]).then((function(e){return{service:e[0],source:e[1]}}))},f=function(){return(f=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},m=function(){return function(e){return e({type:n.n+"_PENDING"}),c.post(o.k+"/graphql",{query:'\nquery {\n  application_types (filter: { name: "/insights/platform/catalog" }) {\n    id\n    name\n    sources {\n      id\n      name\n      source_type_id\n    }\n  }\n}'}).then((function(e){return e.data.application_types})).then((function(e){return e[0].sources})).then((function(t){return e({type:n.n+"_FULFILLED",payload:t})})).catch((function(t){return e({type:n.n+"_REJECTED",payload:t})}))}},y=function(e,t,r){return{type:n.q,payload:u(e,t,r),meta:f({platformId:e,filter:t},r)}},v=function(e){return{type:n.m,payload:(t=e,l.get(o.k+"/sources/"+t))};var t},g=function(e,t,r){return{type:n.o,payload:d(e,t,r)}},h=function(e,t){return{type:n.y,payload:p(e,t)}}},655:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(813),i=r(807),s=r(99),l=r(628);t.a=function(e){var t=e.tabItems,r=Object(l.a)().push,n=Object(s.h)(),c=n.pathname,u=n.search,d=t.find((function(e){var t=e.name;return c.includes(t)}));return a.a.createElement(o.a,{activeKey:d?d.eventKey:0,onSelect:function(e,n){return r({pathname:t[n].name,search:u})}},t.map((function(e){return a.a.createElement(i.a,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name,disabled:e.disabled})})))}},749:function(e,t,r){"use strict";r.d(t,"b",(function(){return s}));var n=r(119),a=r(23),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=Object(a.b)({title:{id:"common.states.title",defaultMessage:"State"},ordered:{id:"common.states.ordered",defaultMessage:"Ordered"},approvalPending:{id:"common.states.approval-pending",defaultMessage:"Approval Pending"},canceled:{id:"common.states.canceled",defaultMessage:"Canceled"},completed:{id:"common.states.completed",defaultMessage:"Completed"},failed:{id:"common.states.failed",defaultMessage:"Failed"},undecided:{id:"common.states.undecided",defaultMessage:"Undecided"},approved:{id:"common.states.approved",defaultMessage:"Approved"},denied:{id:"common.states.denied",defaultMessage:"Denied"},error:{id:"common.states.error",defaultMessage:"Error"},pending:{id:"common.states.pending",defaultMessage:"Pending"},skipped:{id:"common.states.skipped",defaultMessage:"Skipped"},started:{id:"common.states.started",defaultMessage:"Started"},notified:{id:"common.states.notified",defaultMessage:"Notified"},unknown:{id:"common.states.unknown",defaultMessage:"Unknown"}}),s=function(e){return e?e.replace(/\s/g,"").replace(/^./,(function(e){return e.toLowerCase()})):"unknown"};t.a=o(o({},i),{created:n.a.created})},751:function(e,t,r){"use strict";r.d(t,"f",(function(){return R})),r.d(t,"g",(function(){return N})),r.d(t,"a",(function(){return B})),r.d(t,"e",(function(){return S})),r.d(t,"c",(function(){return q})),r.d(t,"b",(function(){return A})),r.d(t,"d",(function(){return U}));var n=r(0),a=r.n(n),o=r(135),i=r(3),s=r(29),l=r(5),c=r(32),u=r(50),d=function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function i(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,s)}l((n=n.apply(e,t||[])).next())}))},p=function(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},f=Object(s.a)(),m=function(e){return d(void 0,void 0,void 0,(function(){var t,r,n,a,o;return p(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,f.get(l.e+"/order_items/?order_id="+e)];case 1:return r=i.sent(),t=r.data,[3,3];case 2:if(n=i.sent(),t=[],404!==n.status&&400!==n.status)throw n;return u.a.replace({pathname:"/404",state:{from:u.a.location}}),[3,3];case 3:return a=[],o=t.map((function(e){return f.get(l.e+"/order_items/"+e.id+"/progress_messages").then((function(t){return a.push({orderItemId:e.id||"",progressMessages:t.data}),a}))})),[4,Promise.all(o)];case 4:return i.sent(),[2,{orderItems:t,progressMessageItems:a}]}}))}))},y=function(){return(y=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},v=function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function i(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,s)}l((n=n.apply(e,t||[])).next())}))},g=function(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},h=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},b=Object(s.c)(),O=(Object(s.d)(),Object(s.g)()),_=Object(s.a)(),E=Object(s.b)(),j=function(e){return O.listServicePlans(e)},w=function(e,t){return void 0===e&&(e=""),void 0===t&&(t=c.a),_.get(l.e+"/orders?"+e+"&limit="+t.limit+"&offset="+t.offset).then((function(e){return(t=e.data.map((function(e){return e.id})),_.get(l.e+"/order_items?"+t.map((function(e){return"filter[order_id][]="+e})).join("&"))).then((function(t){return(r=t.data.map((function(e){return e.portfolio_item_id})),_.get(l.e+"/portfolio_items?"+r.map((function(e){return"filter[id][]="+e})).join("&"))).then((function(r){return y(y({portfolioItems:r},e),{data:e.data.map((function(e){return y(y({},e),{orderItems:t.data.filter((function(t){return t.order_id===e.id}))})}))})}));var r}));var t}))},I=function(e){if(Object.values(e).some((function(e){return!e})))return t=e.order,d(void 0,void 0,void 0,(function(){var e,r,n,a,o,i;return p(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,f.get(l.e+"/orders/"+t)];case 1:return e=s.sent(),[3,3];case 2:if(r=s.sent(),e={},404!==r.status&&400!==r.status)throw r;return u.a.replace({pathname:"/404",state:{from:u.a.location}}),[3,3];case 3:n={object:"Order item",notFound:!0},s.label=4;case 4:return s.trys.push([4,6,,7]),[4,f.get(l.e+"/order_items?order_id="+e.id)];case 5:return a=s.sent(),n=a.data[0],[3,7];case 6:return s.sent(),[3,7];case 7:o={object:"Product",notFound:!0},s.label=8;case 8:return s.trys.push([8,10,,11]),[4,f.get(l.e+"/portfolio_items/"+n.portfolio_item_id)];case 9:return o=s.sent(),[3,11];case 10:return s.sent(),[3,11];case 11:return i=[f.get(l.k+"/sources/"+o.service_offering_source_ref).catch((function(){return{object:"Platform",notFound:!0}})),f.get(l.e+"/order_items/"+n.id+"/progress_messages").catch((function(){return{object:"Messages",notFound:!0}})),f.get(l.e+"/portfolios/"+o.portfolio_id).catch((function(){return{object:"Portfolio",notFound:!0}}))],[2,Promise.all(i).then((function(t){var r=t[0],a=t[1],i=t[2];return[e,n,o,r,a,i]}))]}}))}));var t,r=[_.get(l.e+"/orders/"+e.order).catch((function(e){if(404===e.status||400===e.status)return u.a.replace({pathname:"/404",state:{from:u.a.location}});throw e})),_.get(l.e+"/order_items/"+e["order-item"]).catch((function(e){if(404===e.status||400===e.status)return{object:"Order item",notFound:!0};throw e})),_.get(l.e+"/portfolio_items/"+e["portfolio-item"]).catch((function(e){if(404===e.status||400===e.status)return{object:"Product",notFound:!0};throw e})),_.get(l.k+"/sources/"+e.platform).catch((function(e){if(404===e.status||400===e.status)return{object:"Platform",notFound:!0};throw e})),_.get(l.e+"/orders/"+e.order+"/progress_messages").catch((function(e){if(404===e.status||400===e.status)return{};throw e})),_.get(l.e+"/portfolios/"+e.portfolio).catch((function(e){if(404===e.status||400===e.status)return{object:"Portfolio",notFound:!0};throw e}))];return Promise.all(r)},P=function(e){return _.get(l.e+"/order_items/"+e+"/approval_requests").then((function(e){var t=e.data.map((function(e){var t,r,n=e.approval_request_ref;return t=n,E.post(l.b+"/graphql",{query:(r=t,'query {\n  requests(id: "'+r+'") {\n    id\n    number_of_children\n    decision\n    group_name\n    created_at\n    state\n    actions {\n      id\n      created_at\n    }\n    requests {\n      id\n      number_of_children\n      decision\n      group_name\n      state\n      parent_id\n      created_at\n      actions {\n        id\n        created_at\n      }\n    }\n  }\n}')},{"x-rh-persona":"approval/requester"}).then((function(e){var t=e.data.requests;return t&&t.length>0&&t[0].number_of_children>0?t[0].requests:t}))}));return Promise.all(t).then((function(e){var t;return{data:(null===(t=null==e?void 0:e[0])||void 0===t?void 0:t.map((function(e){var t,r=e.actions,n=h(e,["actions"]);return y(y({},n),{updated:(null==r?void 0:r.length)>0?null===(t=r.pop())||void 0===t?void 0:t.created_at:n.created_at})})))||[]}}))}))},M=r(78),T=r(10),F=r(643),k=r(20),x=function(e){var t=e.id,r=e.dispatch,n=e.portfolioItemId,i=e.portfolioId,s=e.platformId,l=e.orderItemId;return Object(k.a)()(F.a.orderSuccess,{id:t,link:function(e){return a.a.createElement(M.a,{onClick:function(){return r(Object(o.clearNotifications)())},to:{pathname:T.o,search:"?order="+t+"&order-item="+l+"&portfolio-item="+n+"&platform="+s+"&portfolio="+i}},e)}})},D=r(91),L=function(){return(L=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},C=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},R=function(e){return{type:i.z,payload:j(e)}},N=function(e,t){return function(r){return r({type:i.db,payload:(n=e,v(void 0,void 0,void 0,(function(){var e,t,r;return g(this,(function(a){switch(a.label){case 0:return s=n.service_parameters,l=s.providerControlParameters,c=h(s,["providerControlParameters"]),u=h(n,["service_parameters"]),[4,b.createOrder()];case 1:return e=a.sent(),(t={}).count=1,t=y(y(y({},t),u),{service_parameters:c,provider_control_parameters:l||{}}),[4,b.addToOrder(e.id,t)];case 2:return r=a.sent(),[2,b.submitOrder(e.id).then((function(e){return y(y({},e),{orderItem:r})}))]}}))}))).then((function(e){var n=e.id,i=e.orderItem;return r(Object(o.addNotification)({variant:"success",title:"Your order has been accepted successfully",description:a.a.createElement(x,{id:n,dispatch:r,portfolioItemId:t.id,portfolioId:t.portfolio_id,platformId:t.service_offering_source_ref,orderItemId:i.id}),dismissable:!0}))}))});var n,s,l,c,u}},B=function(e){return function(t,r){t({type:i.e+"_PENDING"});var n=r().orderReducer.orderDetail;return function(e){return b.cancelOrder(e)}(e).then((function(){return n.order.state=D.OrderStateEnum.Canceled,n.approvalRequest&&n.approvalRequest.data.length>0&&(n.approvalRequest.data[0].state="canceled"),t({type:i.V,payload:L({},n)}),n})).then((function(e){return t(Object(o.addNotification)({variant:"success",title:"Your order has been canceled successfully",description:"Order Order #"+e.order.id+" was canceled.",dismissable:!0}))})).then((function(){return t({type:i.e+"_FULFILLED"})})).catch((function(e){t({type:i.e+"_REJECTED",payload:e})}))}},S=function(e,t){return void 0===t&&(t=c.a),function(r){var n=Object.entries(e).filter((function(e){var t=e[1];return t&&t.length>0})).map((function(e){var t=e[0],r=e[1];return Array.isArray(r)?r.map((function(e){return"filter["+t+"][]="+e})).join("&"):"filter["+t+"][contains_i]="+r})).join("&");return t.sortBy&&(n=n+"&sort_by="+t.sortBy+":"+(t.sortDirection||"desc")),r({type:i.i+"_PENDING"}),w(n,t).then((function(a){var o=a.portfolioItems,s=C(a,["portfolioItems"]);return r({type:i.Y,payload:o}),r({type:i.i+"_FULFILLED",meta:L(L({},t),{filter:n,filters:e,storeState:!0,stateKey:"orders"}),payload:s})})).catch((function(e){return r({type:i.i+"_REJECTED",payload:e})}))}},q=function(e){return function(t){return t({type:i.V+"_PENDING"}),I(e).then((function(e){var r=e[0],n=e[1],a=e[2],o=e[3],s=e[4],l=e[5];return t({type:i.V+"_FULFILLED",payload:{order:r,orderItem:n,portfolioItem:a,platform:o,progressMessages:s,portfolio:l}})})).catch((function(e){return t({type:i.V+"_REJECTED",payload:e})}))}},A=function(e){return function(t){return t({type:i.g+"_PENDING"}),P(e).then((function(e){return t({type:i.g+"_FULFILLED",payload:e}),e})).catch((function(e){return t({type:i.g+"_REJECTED",payload:e})}))}},U=function(e){return function(t){return t({type:i.X+"_PENDING"}),function(e){return v(void 0,void 0,void 0,(function(){return g(this,(function(t){switch(t.label){case 0:return[4,m(e)];case 1:return[2,t.sent()]}}))}))}(e).then((function(e){var r=e.orderItems,n=e.progressMessageItems;return t({type:i.X+"_FULFILLED",payload:{orderItems:r,progressMessageItems:n}})})).catch((function(e){return t({type:i.X+"_REJECTED",payload:e})}))}}},810:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(281),i=r(891),s=r(892),l=r(282),c=r(283),u={Completed:{icon:a.a.createElement(o.a,null),color:"green"},"Approval Pending":{icon:a.a.createElement(i.a,null),color:"blue"},Ordered:{icon:a.a.createElement(s.a,null),color:"grey"},Failed:{icon:a.a.createElement(l.a,null),color:"red"},Canceled:{icon:a.a.createElement(c.a,null),color:"orange"},Created:{icon:a.a.createElement(s.a,null),color:"grey"},Approved:{icon:a.a.createElement(o.a,null),color:"green"},Denied:{icon:a.a.createElement(l.a,null),color:"red"}};t.a=u},940:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(619),i=r(645),s=r(633),l=function(){return{fields:[{component:s.b.TOP_TOOLBAR,className:"orders pf-u-p-lg",key:"orders-toolbar",fields:[{component:s.b.TOP_TOOLBAR_TITLE,key:"orders-toolbar-title",title:"Orders",className:""}]}]}},c=r(22),u=r(599),d=r(600),p=r(604),f=r(721),m=r(722),y=r(758),v=r(723),g=r(754),h=r(145),b=r(876),O=r(214),_=r(767),E=r(864),j=r(893),w=r(806),I=r(694),P=r(693),M=r(731),T=r(752),F=r(750),k=r(751),x=r(651),D=r(102),L=r(162),C=r(875),R=r(218),N=r(680),B=r(5),S=r(626),q=r(10),A=r(749),U=r(646),V=r(810),G=function(){return(G=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},J=function(e,t,r,o){var i,s,l=e.orderItems[0]&&e.orderItems[0]||{},c=G(G(G(G({order:e.id},l.id?{"order-item":l.id}:{}),l.portfolio_item_id?{"portfolio-item":l.portfolio_item_id}:{}),t?{platform:t}:{}),r?{portfolio:r}:{}),u=Object(A.b)(e.state);return[{title:a.a.createElement(U.a,null,a.a.createElement(S.a,{pathname:q.o,searchParams:c},e.id))},{title:a.a.createElement(n.Fragment,null,a.a.createElement(N.a,{height:60,src:(i=e,s=i.orderItems,s[0]&&B.e+"/portfolio_items/"+s[0].portfolio_item_id+"/icon"),sourceId:t}))},e.orderName,e.owner,{title:a.a.createElement(L.a,{className:"pf-u-mb-0",component:L.b.small},a.a.createElement(R.DateFormat,{date:e.created_at,variant:"relative"}))},{title:a.a.createElement(L.a,{className:"pf-u-mb-0",component:L.b.small},a.a.createElement(R.DateFormat,{date:e.orderItems[0]&&e.orderItems[0].updated_at,variant:"relative"}))},{title:a.a.createElement(U.a,null,a.a.createElement(C.a,G({},V.a[e.state],{variant:"outline"}),o(A.a[u])))}]},K=r(649),z=r(132),Y=r(32),X=r(223),W=r(629),H=r(643),Q=r(119),Z=r(20),$=function(){return($=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},ee=Object(z.a)((function(e,t,r,n){void 0===t&&(t=Y.a),n(!0),r(Object(k.e)(e,t)).then((function(){return n(!1)}))}),1e3),te={isOpen:!1,isFetching:!0,isFiltering:!1,filterType:"state",filters:{state:[],owner:""},sortBy:{index:0,direction:I.a.desc}},re=function(e,t){switch(t.type){case"setFetching":return $($({},e),{isFetching:t.payload});case"setFilterValue":return $($({},e),{filters:(r=t.payload,n=e.filterType,a=e.filters,$($({},a),((o={})[n]=r,o)))});case"replaceFilterChip":return $($({},e),{filters:t.payload});case"setFilteringFlag":return $($({},e),{isFiltering:t.payload});case"setFilterType":return $($({},e),{filterType:t.payload});case"setSortBy":return $($({},e),{sortBy:t.payload,isFetching:!0})}var r,n,a,o;return e},ne={0:"id",3:"owner",4:"created_at",6:"state"},ae=function(){var e,t,r,o=Object(Z.a)(),i=Object(c.useDispatch)(),s=Object(X.a)(),l=Object(n.useReducer)(re,$($({},te),{filters:(null===(e=null==s?void 0:s.orders)||void 0===e?void 0:e.filters)||{state:[],owner:""},sortBy:{direction:(null===(t=null==s?void 0:s.orders)||void 0===t?void 0:t.sortDirection)||I.a.desc,index:(null===(r=null==s?void 0:s.orders)||void 0===r?void 0:r.sortIndex)||0}})),L=l[0],C=L.isFetching,R=L.isFiltering,N=L.filterType,B=L.filters,S=L.sortBy,q=l[1],U=Object(c.useSelector)((function(e){return e.orderReducer.orders})),V=U.data,G=U.meta,z=[{title:o(H.a.orderID)},o(Q.a.product),"",{title:o(H.a.orderedByLabel)},{title:o(H.a.orderDate)},o(Q.a.updated),{title:o(Q.a.status)}].map((function(e){return"object"!=typeof e||C||R||0===V.length?e:$($({},e),{transforms:[P.a]})})),Y=Object(c.useSelector)((function(e){return e.portfolioReducer.portfolioItems.data})),ae=V.map((function(e){var t=function(e,t){var r=e.orderItems,n=r[0]&&t.find((function(e){var t=e.id;return r[0].portfolio_item_id===t}));return n?{orderPlatform:n.service_offering_source_ref,orderPortfolio:n.portfolio_id}:{}}(e,Y),r=t.orderPlatform,n=t.orderPortfolio,a=function(e,t){var r=e.orderItems,n=e.id,a=r[0]&&t.find((function(e){var t=e.id;return r[0].portfolio_item_id===t}));return a?a.name:"Order "+n}(e,Y);return J($($({},e),{orderName:a}),r,n,o)}));Object(n.useEffect)((function(){q({type:"setFetching",payload:!0}),Promise.all([i(Object(k.e)(B,null==s?void 0:s.orders)),i(Object(x.c)())]).then((function(){return q({type:"setFetching",payload:!1})}))}),[]);var oe=function(e,t){return q({type:"setFetching",payload:!0}),i(Object(k.e)(B,$($({},t),{sortBy:ne[S.index],sortDirection:S.direction,sortIndex:S.index}))).then((function(){return q({type:"setFetching",payload:!1})})).catch((function(){return q({type:"setFetching",payload:!1})}))},ie=function(e){var t;void 0===e&&(e=""),q({type:"setFilterValue",payload:e}),ee($($({},B),((t={})[N]=e,t)),$($({},G),{sortBy:ne[S.index],sortDirection:S.direction,sortIndex:S.index,offset:0}),i,(function(e){return q({type:"setFilteringFlag",payload:e})}))},se=function(){return q({type:"replaceFilterChip",payload:te.filters}),ee(te.filters,$($({},G),{sortBy:ne[S.index],sortDirection:S.direction,sortIndex:S.index}),i,(function(e){return q({type:"setFilteringFlag",payload:e})}))};return a.a.createElement(u.a,{hasGutter:!0},a.a.createElement(d.a,null,a.a.createElement(O.Section,{type:"content"},!G.noData&&a.a.createElement(_.PrimaryToolbar,{activeFiltersConfig:{filters:Object.entries(B).filter((function(e){var t=e[1];return t&&t.length>0})).map((function(e){var t=e[0],r=e[1];return{category:t,type:t,chips:Array.isArray(r)?r.map((function(e){return{name:e}})):[{name:r}]}})),onDelete:function(e,t,r){var n=t[0];if(r)return se();var a=$({},B);"state"===n.type?a[n.type]=a[n.type].filter((function(e){var t;return e!==(null===(t=null==n?void 0:n.chips)||void 0===t?void 0:t[0].name)})):a[n.type]="",q({type:"replaceFilterChip",payload:a}),ee(a,G,i,(function(e){return q({type:"setFilteringFlag",payload:e})}))}},filterConfig:{onChange:function(e,t){return q({type:"setFilterType",payload:t})},value:N,items:[{filterValues:{items:[{value:"Approval Pending",label:o(A.a.approvalPending)},{value:"Canceled",label:o(A.a.canceled)},{value:"Completed",label:o(A.a.completed)},{value:"Created",label:o(Q.a.created)},{value:"Failed",label:o(A.a.failed)},{value:"Ordered",label:o(A.a.ordered)}],value:B.state,onChange:function(e,t){return ie(t)}},label:"State",value:"state",type:"checkbox"},{filterValues:{value:B.owner,onChange:function(e,t){return ie(t)}},label:"Owner",value:"owner"}]},pagination:a.a.createElement(K.a,{isDisabled:C||R,apiRequest:oe,meta:G,isCompact:!0})}),a.a.createElement(M.a,$({"aria-label":"orders"},C||R||0!==V.length?{sortBy:S,onSort:function(e,t,r){return q({type:"setSortBy",payload:{index:t,direction:r}}),i(Object(k.e)(B,$($({},G),{sortBy:ne[t],sortDirection:r,sortIndex:t}))).then((function(){return q({type:"setFetching",payload:!1})}))}}:{},{cells:z,rows:C||R?[]:ae,className:"orders-table"}),a.a.createElement(T.a,null),a.a.createElement(F.a,null)),!(C||R)&&0===V.length&&a.a.createElement(E.EmptyTable,null,a.a.createElement(p.a,null,a.a.createElement(f.a,null,a.a.createElement(p.a,null,a.a.createElement(m.a,{icon:w.a})),a.a.createElement(y.a,{headingLevel:"h1",size:"lg"},G.noData?o(H.a.noOrdersTitle):o(W.a.noResults)),a.a.createElement(v.a,null,G.noData?o(H.a.noOrdersDescription):o(W.a.noResultsDescription)),!G.noData&&a.a.createElement(g.a,null,a.a.createElement(h.a,{ouiaId:"clear-filter",variant:"link",onClick:se},o(W.a.clearFilters)))))),(C||R)&&a.a.createElement(D.e,null),a.a.createElement(j.TableToolbar,{className:"pf-u-mr-0"},a.a.createElement("div",{className:"bottom-pagination-container"},a.a.createElement(b.a,{justifyContent:{default:"justifyContentFlexEnd"}},G&&G.count>0&&a.a.createElement(K.a,{className:"pf-u-mt-0",isDisabled:C||R,apiRequest:oe,meta:G})))))))};t.default=function(){return Object(n.useEffect)((function(){window.insights.chrome.appNavClick({id:"orders",secondaryNav:!0})}),[]),a.a.createElement(o.a,null,a.a.createElement(i.a,{schema:l()}),a.a.createElement(ae,null))}}}]);
//# sourceMappingURL=../sourcemaps/orders~91f4305a.js.map