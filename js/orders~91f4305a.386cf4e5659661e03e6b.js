(window.webpackJsonp=window.webpackJsonp||[]).push([[49,11],{1072:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(611),i=r(650),l=r(634),s=function(){return{fields:[{component:l.b.TOP_TOOLBAR,className:"orders pf-u-p-lg",key:"orders-toolbar",fields:[{component:l.b.TOP_TOOLBAR_TITLE,key:"orders-toolbar-title",title:"Orders",className:""}]}]}},c=r(25),u=r(593),d=r(594),p=r(597),f=r(837),m=r(838),y=r(895),v=r(839),g=r(862),b=r(76),h=r(916),O=r(244),E=r(766),j=r(879),w=r(1011),_=r(860),P=r(717),I=r(842),M=r(746),T=r(756),F=r(755),x=r(734),k=r(669),C=r(108),D=r(77),L=r(897),R=r(238),N=r(668),B=r(6),S=r(623),A=r(12),q=r(731),U=r(675),V=r(833),G=function(){return(G=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},K=function(e,t,r,o){var i,l,s=e.orderItems[0]&&e.orderItems[0]||{},c=G(G(G(G({order:e.id},s.id?{"order-item":s.id}:{}),s.portfolio_item_id?{"portfolio-item":s.portfolio_item_id}:{}),t?{platform:t}:{}),r?{portfolio:r}:{}),u=Object(q.b)(e.state);return[{title:a.a.createElement(U.a,null,a.a.createElement(S.a,{pathname:A.o,searchParams:c},e.id))},{title:a.a.createElement(n.Fragment,null,a.a.createElement(N.a,{height:60,src:(i=e,l=i.orderItems,l[0]&&B.e+"/portfolio_items/"+l[0].portfolio_item_id+"/icon"),sourceId:t}))},e.orderName,e.owner,{title:a.a.createElement(D.a,{className:"pf-u-mb-0",component:D.b.small},a.a.createElement(R.DateFormat,{date:e.created_at,variant:"relative"}))},{title:a.a.createElement(D.a,{className:"pf-u-mb-0",component:D.b.small},a.a.createElement(R.DateFormat,{date:e.orderItems[0]&&e.orderItems[0].updated_at,variant:"relative"}))},{title:a.a.createElement(U.a,null,a.a.createElement(L.a,G({},V.a[e.state],{variant:"outline"}),o(q.a[u])))}]},J=r(626),z=r(146),Y=r(36),X=r(246),W=r(635),H=r(645),Q=r(128),Z=r(26),$=function(){return($=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},ee=Object(z.a)((function(e,t,r,n){void 0===t&&(t=Y.a),n(!0),r(Object(x.e)(e,t)).then((function(){return n(!1)}))}),1e3),te={isOpen:!1,isFetching:!0,isFiltering:!1,filterType:"state",filters:{state:[],owner:""},sortBy:{index:0,direction:P.a.desc}},re=function(e,t){switch(t.type){case"setFetching":return $($({},e),{isFetching:t.payload});case"setFilterValue":return $($({},e),{filters:(r=t.payload,n=e.filterType,a=e.filters,$($({},a),((o={})[n]=r,o)))});case"replaceFilterChip":return $($({},e),{filters:t.payload});case"setFilteringFlag":return $($({},e),{isFiltering:t.payload});case"setFilterType":return $($({},e),{filterType:t.payload});case"setSortBy":return $($({},e),{sortBy:t.payload,isFetching:!0})}var r,n,a,o;return e},ne={0:"id",3:"owner",4:"created_at",6:"state"},ae=function(){var e,t,r,o=Object(Z.a)(),i=Object(c.d)(),l=Object(X.a)(),s=Object(n.useReducer)(re,$($({},te),{filters:(null===(e=null==l?void 0:l.orders)||void 0===e?void 0:e.filters)||{state:[],owner:""},sortBy:{direction:(null===(t=null==l?void 0:l.orders)||void 0===t?void 0:t.sortDirection)||P.a.desc,index:(null===(r=null==l?void 0:l.orders)||void 0===r?void 0:r.sortIndex)||0}})),D=s[0],L=D.isFetching,R=D.isFiltering,N=D.filterType,B=D.filters,S=D.sortBy,A=s[1],U=Object(c.e)((function(e){return e.orderReducer.orders})),V=U.data,G=U.meta,z=[{title:o(H.a.orderID)},o(Q.a.product),"",{title:o(H.a.orderedByLabel)},{title:o(H.a.orderDate)},o(Q.a.updated),{title:o(Q.a.status)}].map((function(e){return"object"!=typeof e||L||R||0===V.length?e:$($({},e),{transforms:[I.a]})})),Y=Object(c.e)((function(e){return e.portfolioReducer.portfolioItems.data})),ae=V.map((function(e){var t=function(e,t){var r=e.orderItems,n=r[0]&&t.find((function(e){var t=e.id;return r[0].portfolio_item_id===t}));return n?{orderPlatform:n.service_offering_source_ref,orderPortfolio:n.portfolio_id}:{}}(e,Y),r=t.orderPlatform,n=t.orderPortfolio,a=function(e,t){var r=e.orderItems,n=e.id,a=r[0]&&t.find((function(e){var t=e.id;return r[0].portfolio_item_id===t}));return a?a.name:"Order "+n}(e,Y);return K($($({},e),{orderName:a}),r,n,o)}));Object(n.useEffect)((function(){A({type:"setFetching",payload:!0}),Promise.all([i(Object(x.e)(B,null==l?void 0:l.orders)),i(Object(k.c)())]).then((function(){return A({type:"setFetching",payload:!1})}))}),[]);var oe=function(e,t){return A({type:"setFetching",payload:!0}),i(Object(x.e)(B,$($({},t),{sortBy:ne[S.index],sortDirection:S.direction,sortIndex:S.index}))).then((function(){return A({type:"setFetching",payload:!1})})).catch((function(){return A({type:"setFetching",payload:!1})}))},ie=function(e){var t;void 0===e&&(e=""),A({type:"setFilterValue",payload:e}),ee($($({},B),((t={})[N]=e,t)),$($({},G),{sortBy:ne[S.index],sortDirection:S.direction,sortIndex:S.index,offset:0}),i,(function(e){return A({type:"setFilteringFlag",payload:e})}))},le=function(){return A({type:"replaceFilterChip",payload:te.filters}),ee(te.filters,$($({},G),{sortBy:ne[S.index],sortDirection:S.direction,sortIndex:S.index}),i,(function(e){return A({type:"setFilteringFlag",payload:e})}))};return a.a.createElement(u.a,{hasGutter:!0},a.a.createElement(d.a,null,a.a.createElement(O.Section,{type:"content"},!G.noData&&a.a.createElement(E.PrimaryToolbar,{activeFiltersConfig:{filters:Object.entries(B).filter((function(e){var t=e[1];return t&&t.length>0})).map((function(e){var t=e[0],r=e[1];return{category:t,type:t,chips:Array.isArray(r)?r.map((function(e){return{name:e}})):[{name:r}]}})),onDelete:function(e,t,r){var n=t[0];if(r)return le();var a=$({},B);"state"===n.type?a[n.type]=a[n.type].filter((function(e){var t;return e!==(null===(t=null==n?void 0:n.chips)||void 0===t?void 0:t[0].name)})):a[n.type]="",A({type:"replaceFilterChip",payload:a}),ee(a,G,i,(function(e){return A({type:"setFilteringFlag",payload:e})}))}},filterConfig:{onChange:function(e,t){return A({type:"setFilterType",payload:t})},value:N,items:[{filterValues:{items:[{value:"Approval Pending",label:o(q.a.approvalPending)},{value:"Canceled",label:o(q.a.canceled)},{value:"Completed",label:o(q.a.completed)},{value:"Created",label:o(Q.a.created)},{value:"Failed",label:o(q.a.failed)},{value:"Ordered",label:o(q.a.ordered)}],value:B.state,onChange:function(e,t){return ie(t)}},label:"State",value:"state",type:"checkbox"},{filterValues:{value:B.owner,onChange:function(e,t){return ie(t)}},label:"Owner",value:"owner"}]},pagination:a.a.createElement(J.a,{isDisabled:L||R,apiRequest:oe,meta:G,isCompact:!0})}),a.a.createElement(M.a,$({"aria-label":"orders"},L||R||0!==V.length?{sortBy:S,onSort:function(e,t,r){return A({type:"setSortBy",payload:{index:t,direction:r}}),i(Object(x.e)(B,$($({},G),{sortBy:ne[t],sortDirection:r,sortIndex:t}))).then((function(){return A({type:"setFetching",payload:!1})}))}}:{},{cells:z,rows:L||R?[]:ae,className:"orders-table"}),a.a.createElement(T.a,null),a.a.createElement(F.a,null)),!(L||R)&&0===V.length&&a.a.createElement(j.EmptyTable,null,a.a.createElement(p.a,null,a.a.createElement(f.a,null,a.a.createElement(p.a,null,a.a.createElement(m.a,{icon:_.a})),a.a.createElement(y.a,{headingLevel:"h1",size:"lg"},G.noData?o(H.a.noOrdersTitle):o(W.a.noResults)),a.a.createElement(v.a,null,G.noData?o(H.a.noOrdersDescription):o(W.a.noResultsDescription)),!G.noData&&a.a.createElement(g.a,null,a.a.createElement(b.a,{ouiaId:"clear-filter",variant:"link",onClick:le},o(W.a.clearFilters)))))),(L||R)&&a.a.createElement(C.e,null),a.a.createElement(w.TableToolbar,{className:"pf-u-mr-0"},a.a.createElement("div",{className:"bottom-pagination-container"},a.a.createElement(h.a,{justifyContent:{default:"justifyContentFlexEnd"}},G&&G.count>0&&a.a.createElement(J.a,{className:"pf-u-mt-0",isDisabled:L||R,apiRequest:oe,meta:G})))))))};t.default=function(){return Object(n.useEffect)((function(){window.insights.chrome.appNavClick({id:"orders",secondaryNav:!0})}),[]),a.a.createElement(o.a,null,a.a.createElement(i.a,{schema:s()}),a.a.createElement(ae,null))}},626:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(241),i=r(184),l=r(36),s=function(){return(s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};t.a=function(e){var t=e.meta,r=t.limit,n=void 0===r?50:r,u=t.count,d=void 0===u?0:u,p=t.offset,f=void 0===p?0:p,m=e.apiProps,y=e.apiRequest,v=e.className,g=void 0===v?"":v,b=e.isCompact,h=void 0!==b&&b,O=c(e,["meta","apiProps","apiRequest","className","isCompact"]);return a.a.createElement("div",{className:g},a.a.createElement(i.a,s({perPage:n||50,itemCount:d||0,onPerPageSelect:function(e,t){return y(m,{offset:f,limit:t})},page:Object(l.b)(n,f),onSetPage:function(e,t,r){var a={offset:Object(l.c)(t,n),limit:n},i=function(){return y(m,a)};return r?Object(o.a)(i,250)():i()},dropDirection:"down",isCompact:h},O)))}},634:function(e,t,r){"use strict";r.d(t,"b",(function(){return S}));var n,a,o,i,l,s=r(0),c=r.n(s),u=r(5),d=r.n(u),p=r(76),f=r(890),m=r(195),y=r(222),v=r(187),g=r(29),b=r(319),h=r(860),O=r(859),E=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},j=function(){return(j=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},w=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},_=g.b.div(n||(n=E(["\n  position: relative;\n  width: 300px;\n  height: 36px;\n"],["\n  position: relative;\n  width: 300px;\n  height: 36px;\n"]))),P=Object(g.b)(O.a)(a||(a=E(["\n  position: absolute;\n  width: 300px;\n  padding-right: 34px;\n  background: transparent;\n"],["\n  position: absolute;\n  width: 300px;\n  padding-right: 34px;\n  background: transparent;\n"]))),I=g.b.span(o||(o=E(["\n  position: absolute;\n  right: 8px;\n  top: 8px;\n"],["\n  position: absolute;\n  right: 8px;\n  top: 8px;\n"]))),M=Object(g.b)(b.a)(i||(i=E(["\n  z-index: 1000;\n  fill: #72767b;\n  :hover {\n    fill: var(--pf-global--Color--100);\n    cursor: pointer;\n  }\n"],["\n  z-index: 1000;\n  fill: #72767b;\n  :hover {\n    fill: var(--pf-global--Color--100);\n    cursor: pointer;\n  }\n"]))),T=Object(g.b)(h.a)(l||(l=E(["\n  z-index: 1000;\n  fill: #72767b;\n"],["\n  z-index: 1000;\n  fill: #72767b;\n"]))),F=function(e){var t=e.searchValue,r=void 0===t?"":t,n=e.onFilterChange,a=e.placeholder,o=e.isClearable,i=void 0!==o&&o,l=w(e,["searchValue","onFilterChange","placeholder","isClearable"]);return c.a.createElement(m.a,null,c.a.createElement(_,null,c.a.createElement(P,j({id:"toolbar-filter",placeholder:a,value:r,type:"text",onChange:n,"aria-label":a},l)),c.a.createElement(I,null,i&&r&&c.a.createElement(M,{width:"16",height:"16",onClick:function(){return n("")}})||c.a.createElement(T,null))))},x=r(683),k=r(672),C=r(623),D=r(243),L=function(){return(L=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},R=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},N=function(e){var t=e.title,r=R(e,["title"]);return c.a.createElement(p.a,L({},r),t)};N.propTypes={title:d.a.string.isRequired};var B={TopToolbar:x.b,TopToolbarTitle:x.a,Toolbar:function(e){var t=e.children,r=R(e,["children"]);return c.a.createElement(D.a,L({className:"pf-u-p-0"},r),c.a.createElement(f.a,{className:"pf-u-pl-0"},t))},ToolbarGroup:D.b,ToolbarItem:m.a,FilterToolbarItem:F,Link:C.a,Level:y.a,LevelItem:v.a,Button:N,AppTabs:k.a},S={TOP_TOOLBAR:"TopToolbar",TOP_TOOLBAR_TITLE:"TopToolbarTitle",TOOLBAR:"Toolbar",TOOLBAR_ITEM:"ToolbarItem",TOOLBAR_GROUP:"ToolbarGroup",FILTER_TOOLBAR_ITEM:"FilterToolbarItem",LINK:"Link",BUTTON:"Button",LEVEL:"Level",LEVEL_ITEM:"LevelItem",TABS:"AppTabs"};t.a=B},635:function(e,t,r){"use strict";var n=r(27),a=Object(n.b)({noItems:{id:"common.filtering.noItems",defaultMessage:"No items found"},filterByProduct:{id:"common.filtering.filterByProduct",defaultMessage:"Filter by product"},noResults:{id:"common.filtering.noResults",defaultMessage:"No results found"},noResultsDescription:{id:"common.filtering.noResultsDescription",defaultMessage:"No results match the filter criteria. Remove all filters or clear all filters to show results."},clearFilters:{id:"common.filtering.clear-filters",defaultMessage:"Clear all filters"},noProducts:{id:"common.filtering.no-products",defaultMessage:"No products yet"},noRecords:{id:"commonMessages.noRecords",defaultMessage:"No records"},filterByTitle:{id:"tableToolbar.filterByTitle",defaultMessage:"Filter by {title}"},noResultsFound:{id:"tableToolbar.noResultsFound",defaultMessage:"No results found"},noResult:{id:"tableToolbar.noResult",defaultMessage:"No {results}"},unknown:{id:"commonMessages.unknown",defaultMessage:"Unknown"}});t.a=a},645:function(e,t,r){"use strict";var n=r(27),a=Object(n.b)({orderedBy:{id:"orders.common.orderedBy",defaultMessage:"Ordered by {owner}"},orderedByLabel:{id:"orders.approval.orderedBy",defaultMessage:"Ordered by"},lastUpdated:{id:"orders.common.lastUpdated",defaultMessage:"Last updated"},compositeTitle:{id:"orders.common.compositeTitle",defaultMessage:"{name} - Order # {id}"},detailTitle:{id:"orders.detail.title",defaultMessage:"Order ID {id}"},orderSuccess:{id:"orders.notification.success",defaultMessage:"You can track the progress of Order # {id} in your <link>Orders</link> page."},noOrdersTitle:{id:"orders.list.empty.title",defaultMessage:"No orders"},noOrdersDescription:{id:"orders.list.empty.description",defaultMessage:"No orders have been created."},noApprovalRequests:{id:"orders.approval.no-requests",defaultMessage:"We were unable to find any approval requests for this order."},creatingApprovalRequest:{id:"orders.approval.creating",defaultMessage:"Creating approval request"},approvalTitle:{id:"orders.approval.title",defaultMessage:"Summary"},approvalDetail:{id:"orders.approval.view-detail",defaultMessage:"View this order's approval request details"},approvalCreated:{id:"orders.approval.details.created",defaultMessage:"Request created"},approvalReason:{id:"orders.approval.details.reason",defaultMessage:"Approval reason"},approvalCompleted:{id:"orders.approval.details.completed",defaultMessage:"Completed at"},orderDetails:{id:"orders.common.details",defaultMessage:"Order details"},menuApproval:{id:"orders.menu.approval",defaultMessage:"Approval"},menuProvision:{id:"orders.menu.provision",defaultMessage:"Provision"},menuLifecycle:{id:"orders.menu.lifecycle",defaultMessage:"Lifecycle"},menuSteps:{id:"orders.menu.steps",defaultMessage:"Order steps"},objectsNotFound:{id:"order.detail.not-found",defaultMessage:"The {objects} for this order {count, plural, one {is} other {are}} not available"},orderID:{id:"orders.order.detail.ID",defaultMessage:"Order ID"},orderParameters:{id:"orders.order.detail.parameters",defaultMessage:"Order parameters"},orderItemParameters:{id:"orders.order.provision.parameters",defaultMessage:"Parameters"},defaultOrderItemType:{id:"orders.order.default_type",defaultMessage:"Product"},orderProgressMessages:{id:"orders.order.detail.messages",defaultMessage:"Progress messages"},lifecycleLink:{id:"orders.order.lifecycle.link",defaultMessage:"Manage product"},cancelOrder:{id:"orders.actions.cancel",defaultMessage:"Cancel order"},reOrder:{id:"orders.actions.reorder",defaultMessage:"Reorder"},keepOrder:{id:"orders.actions.keep",defaultMessage:"Keep order"},cancelDescription:{id:"orders.cancel.description",defaultMessage:"Are you sure you want to cancel {name}?"},backToOrders:{id:"orders.toolbar.backLink",defaultMessage:"Back to orders"},orderDate:{id:"orders.approval.order-date",defaultMessage:"Order date"},approvalParameters:{id:"orders.approval.parameters",defaultMessage:"Parameters"},activity:{id:"orders.approval.activity",defaultMessage:"Activity"},artifacts:{id:"orders.artifacts",defaultMessage:"Order artifacts"},noOrderProvision:{id:"orders.provision.no-items",defaultMessage:"We were unable to find provisioning data for this order."},fetchingOrderProvision:{id:"orders.provision.fetching-provision",defaultMessage:"Retrieving order provisioning data"}});t.a=a},650:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(634),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},s=Object(n.createContext)({}),c=function(e){var t=e.component,r=l(e,["component"]);return a.a.createElement(s.Consumer,null,(function(e){var n=e.componentMapper,o="string"==typeof t?n&&n[t]:t;return o?a.a.createElement(o,i({},r)):null}))},u=function(e){return e.map((function(e){var t=e.hidden,r=e.fields,n=e.key,o=l(e,["hidden","fields","key"]);return t?null:r?a.a.createElement(c,i({key:n},o),u(r)):a.a.createElement(c,i({key:n},o))}))};t.a=function(e){var t=e.schema,r=e.componentMapper,n=void 0===r?o.a:r;return a.a.createElement(s.Provider,{value:{render:u,componentMapper:n}},u(t.fields))}},672:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(888),i=r(861),l=r(106),s=r(628);t.a=function(e){var t=e.tabItems,r=Object(s.a)().push,n=Object(l.h)(),c=n.pathname,u=n.search,d=t.find((function(e){var t=e.name;return c.includes(t)}));return a.a.createElement(o.a,{activeKey:d?d.eventKey:0,onSelect:function(e,n){return r({pathname:t[n].name,search:u})}},t.map((function(e){return a.a.createElement(i.a,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name,disabled:e.disabled})})))}},731:function(e,t,r){"use strict";r.d(t,"b",(function(){return l}));var n=r(128),a=r(27),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=Object(a.b)({title:{id:"common.states.title",defaultMessage:"State"},ordered:{id:"common.states.ordered",defaultMessage:"Ordered"},approvalPending:{id:"common.states.approval-pending",defaultMessage:"Approval Pending"},canceled:{id:"common.states.canceled",defaultMessage:"Canceled"},completed:{id:"common.states.completed",defaultMessage:"Completed"},failed:{id:"common.states.failed",defaultMessage:"Failed"},undecided:{id:"common.states.undecided",defaultMessage:"Undecided"},approved:{id:"common.states.approved",defaultMessage:"Approved"},denied:{id:"common.states.denied",defaultMessage:"Denied"},error:{id:"common.states.error",defaultMessage:"Error"},pending:{id:"common.states.pending",defaultMessage:"Pending"},skipped:{id:"common.states.skipped",defaultMessage:"Skipped"},started:{id:"common.states.started",defaultMessage:"Started"},notified:{id:"common.states.notified",defaultMessage:"Notified"},unknown:{id:"common.states.unknown",defaultMessage:"Unknown"}}),l=function(e){return e?e.replace(/\s/g,"").replace(/^./,(function(e){return e.toLowerCase()})):"unknown"};t.a=o(o({},i),{created:n.a.created})},734:function(e,t,r){"use strict";r.d(t,"f",(function(){return R})),r.d(t,"g",(function(){return N})),r.d(t,"a",(function(){return B})),r.d(t,"e",(function(){return S})),r.d(t,"c",(function(){return A})),r.d(t,"b",(function(){return q})),r.d(t,"d",(function(){return U}));var n=r(0),a=r.n(n),o=r(40),i=r(3),l=r(32),s=r(6),c=r(36),u=r(54),d=function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function i(e){try{s(n.next(e))}catch(e){o(e)}}function l(e){try{s(n.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}s((n=n.apply(e,t||[])).next())}))},p=function(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},f=Object(l.a)(),m=function(e){return d(void 0,void 0,void 0,(function(){var t,r,n,a,o;return p(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,f.get(s.e+"/order_items/?order_id="+e)];case 1:return r=i.sent(),t=r.data,[3,3];case 2:if(n=i.sent(),t=[],404!==n.status&&400!==n.status)throw n;return u.a.replace({pathname:"/404",state:{from:u.a.location}}),[3,3];case 3:return a=[],o=t.map((function(e){return f.get(s.e+"/order_items/"+e.id+"/progress_messages").then((function(t){return a.push({orderItemId:e.id||"",progressMessages:t.data}),a}))})),[4,Promise.all(o)];case 4:return i.sent(),[2,{orderItems:t,progressMessageItems:a}]}}))}))},y=function(){return(y=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},v=function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function i(e){try{s(n.next(e))}catch(e){o(e)}}function l(e){try{s(n.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}s((n=n.apply(e,t||[])).next())}))},g=function(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},b=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},h=Object(l.c)(),O=(Object(l.d)(),Object(l.g)()),E=Object(l.a)(),j=Object(l.b)(),w=function(e){return O.listServicePlans(e)},_=function(e,t){return void 0===e&&(e=""),void 0===t&&(t=c.a),E.get(s.e+"/orders?"+e+"&limit="+t.limit+"&offset="+t.offset).then((function(e){return(t=e.data.map((function(e){return e.id})),E.get(s.e+"/order_items?limit="+(3*t.length||c.a.limit)+(t.length?"&":"")+t.map((function(e){return"filter[order_id][]="+e})).join("&"))).then((function(t){return(r=t.data.map((function(e){return e.portfolio_item_id})),E.get(s.e+"/portfolio_items?"+r.map((function(e){return"filter[id][]="+e})).join("&"))).then((function(r){return y(y({portfolioItems:r},e),{data:e.data.map((function(e){return y(y({},e),{orderItems:t.data.filter((function(t){return t.order_id===e.id}))})}))})}));var r}));var t}))},P=function(e){if(Object.values(e).some((function(e){return!e})))return t=e.order,d(void 0,void 0,void 0,(function(){var e,r,n,a,o,i;return p(this,(function(l){switch(l.label){case 0:return l.trys.push([0,2,,3]),[4,f.get(s.e+"/orders/"+t)];case 1:return e=l.sent(),[3,3];case 2:if(r=l.sent(),e={},404!==r.status&&400!==r.status)throw r;return u.a.replace({pathname:"/404",state:{from:u.a.location}}),[3,3];case 3:n={object:"Order item",notFound:!0},l.label=4;case 4:return l.trys.push([4,6,,7]),[4,f.get(s.e+"/order_items?order_id="+e.id)];case 5:return a=l.sent(),n=a.data[0],[3,7];case 6:return l.sent(),[3,7];case 7:o={object:"Product",notFound:!0},l.label=8;case 8:return l.trys.push([8,10,,11]),[4,f.get(s.e+"/portfolio_items/"+n.portfolio_item_id)];case 9:return o=l.sent(),[3,11];case 10:return l.sent(),[3,11];case 11:return i=[f.get(s.k+"/sources/"+o.service_offering_source_ref).catch((function(){return{object:"Platform",notFound:!0}})),f.get(s.e+"/order_items/"+n.id+"/progress_messages").catch((function(){return{object:"Messages",notFound:!0}})),f.get(s.e+"/portfolios/"+o.portfolio_id).catch((function(){return{object:"Portfolio",notFound:!0}}))],[2,Promise.all(i).then((function(t){var r=t[0],a=t[1],i=t[2];return[e,n,o,r,a,i]}))]}}))}));var t,r=[E.get(s.e+"/orders/"+e.order).catch((function(e){if(404===e.status||400===e.status)return u.a.replace({pathname:"/404",state:{from:u.a.location}});throw e})),E.get(s.e+"/order_items/"+e["order-item"]).catch((function(e){if(404===e.status||400===e.status)return{object:"Order item",notFound:!0};throw e})),E.get(s.e+"/portfolio_items/"+e["portfolio-item"]).catch((function(e){if(404===e.status||400===e.status)return{object:"Product",notFound:!0};throw e})),E.get(s.k+"/sources/"+e.platform).catch((function(e){if(404===e.status||400===e.status)return{object:"Platform",notFound:!0};throw e})),E.get(s.e+"/orders/"+e.order+"/progress_messages").catch((function(e){if(404===e.status||400===e.status)return{};throw e})),E.get(s.e+"/portfolios/"+e.portfolio).catch((function(e){if(404===e.status||400===e.status)return{object:"Portfolio",notFound:!0};throw e}))];return Promise.all(r)},I=function(e){return E.get(s.e+"/order_items/"+e+"/approval_requests").then((function(e){var t=e.data.map((function(e){var t,r,n=e.approval_request_ref;return t=n,j.post(s.b+"/graphql",{query:(r=t,'query {\n  requests(id: "'+r+'") {\n    id\n    number_of_children\n    decision\n    group_name\n    created_at\n    state\n    actions {\n      id\n      created_at\n    }\n    requests {\n      id\n      number_of_children\n      decision\n      group_name\n      state\n      parent_id\n      created_at\n      actions {\n        id\n        created_at\n      }\n    }\n  }\n}')},{"x-rh-persona":"approval/requester"}).then((function(e){var t=e.data.requests;return t&&t.length>0&&t[0].number_of_children>0?t[0].requests:t}))}));return Promise.all(t).then((function(e){var t;return{data:(null===(t=null==e?void 0:e[0])||void 0===t?void 0:t.map((function(e){var t,r=e.actions,n=b(e,["actions"]);return y(y({},n),{updated:(null==r?void 0:r.length)>0?null===(t=r.pop())||void 0===t?void 0:t.created_at:n.created_at})})))||[]}}))}))},M=r(86),T=r(12),F=r(645),x=r(26),k=function(e){var t=e.id,r=e.dispatch,n=e.portfolioItemId,i=e.portfolioId,l=e.platformId,s=e.orderItemId;return Object(x.a)()(F.a.orderSuccess,{id:t,link:function(e){return a.a.createElement(M.a,{onClick:function(){return r(Object(o.d)())},to:{pathname:T.o,search:"?order="+t+"&order-item="+s+"&portfolio-item="+n+"&platform="+l+"&portfolio="+i}},e)}})},C=r(95),D=function(){return(D=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},L=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},R=function(e){return{type:i.z,payload:w(e)}},N=function(e,t){return function(r){return r({type:i.db,payload:(n=e,v(void 0,void 0,void 0,(function(){var e,t,r;return g(this,(function(a){switch(a.label){case 0:return l=n.service_parameters,s=l.providerControlParameters,c=b(l,["providerControlParameters"]),u=b(n,["service_parameters"]),[4,h.createOrder()];case 1:return e=a.sent(),(t={}).count=1,t=y(y(y({},t),u),{service_parameters:c,provider_control_parameters:s||{}}),[4,h.addToOrder(e.id,t)];case 2:return r=a.sent(),[2,h.submitOrder(e.id).then((function(e){return y(y({},e),{orderItem:r})}))]}}))}))).then((function(e){var n=e.id,i=e.orderItem;return r(Object(o.c)({variant:"success",title:"Your order has been accepted successfully",description:a.a.createElement(k,{id:n,dispatch:r,portfolioItemId:t.id,portfolioId:t.portfolio_id,platformId:t.service_offering_source_ref,orderItemId:i.id}),dismissable:!0}))}))});var n,l,s,c,u}},B=function(e){return function(t,r){t({type:i.e+"_PENDING"});var n=r().orderReducer.orderDetail;return function(e){return h.cancelOrder(e)}(e).then((function(){return n.order.state=C.OrderStateEnum.Canceled,n.approvalRequest&&n.approvalRequest.data.length>0&&(n.approvalRequest.data[0].state="canceled"),t({type:i.V,payload:D({},n)}),n})).then((function(e){return t(Object(o.c)({variant:"success",title:"Your order has been canceled successfully",description:"Order Order #"+e.order.id+" was canceled.",dismissable:!0}))})).then((function(){return t({type:i.e+"_FULFILLED"})})).catch((function(e){t({type:i.e+"_REJECTED",payload:e})}))}},S=function(e,t){return void 0===t&&(t=c.a),function(r){var n=Object.entries(e).filter((function(e){var t=e[1];return t&&t.length>0})).map((function(e){var t=e[0],r=e[1];return Array.isArray(r)?r.map((function(e){return"filter["+t+"][]="+e})).join("&"):"filter["+t+"][contains_i]="+r})).join("&");return t.sortBy&&(n=n+"&sort_by="+t.sortBy+":"+(t.sortDirection||"desc")),r({type:i.i+"_PENDING"}),_(n,t).then((function(a){var o=a.portfolioItems,l=L(a,["portfolioItems"]);return r({type:i.Y,payload:o}),r({type:i.i+"_FULFILLED",meta:D(D({},t),{filter:n,filters:e,storeState:!0,stateKey:"orders"}),payload:l})})).catch((function(e){return r({type:i.i+"_REJECTED",payload:e})}))}},A=function(e){return function(t){return t({type:i.V+"_PENDING"}),P(e).then((function(e){var r=e[0],n=e[1],a=e[2],o=e[3],l=e[4],s=e[5];return t({type:i.V+"_FULFILLED",payload:{order:r,orderItem:n,portfolioItem:a,platform:o,progressMessages:l,portfolio:s}})})).catch((function(e){return t({type:i.V+"_REJECTED",payload:e})}))}},q=function(e){return function(t){return t({type:i.g+"_PENDING"}),I(e).then((function(e){return t({type:i.g+"_FULFILLED",payload:e}),e})).catch((function(e){return t({type:i.g+"_REJECTED",payload:e})}))}},U=function(e){return function(t){return t({type:i.X+"_PENDING"}),function(e){return v(void 0,void 0,void 0,(function(){return g(this,(function(t){switch(t.label){case 0:return[4,m(e)];case 1:return[2,t.sent()]}}))}))}(e).then((function(e){var r=e.orderItems,n=e.progressMessageItems;return t({type:i.X+"_FULFILLED",payload:{orderItems:r,progressMessageItems:n}})})).catch((function(e){return t({type:i.X+"_REJECTED",payload:e})}))}}},833:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(171),i=r(1009),l=r(1010),s=r(172),c=r(173),u={Completed:{icon:a.a.createElement(o.a,null),color:"green"},"Approval Pending":{icon:a.a.createElement(i.a,null),color:"blue"},Ordered:{icon:a.a.createElement(l.a,null),color:"grey"},Failed:{icon:a.a.createElement(s.a,null),color:"red"},Canceled:{icon:a.a.createElement(c.a,null),color:"orange"},Created:{icon:a.a.createElement(l.a,null),color:"grey"},Approved:{icon:a.a.createElement(o.a,null),color:"green"},Denied:{icon:a.a.createElement(s.a,null),color:"red"},Undecided:{icon:a.a.createElement(i.a,null),color:"blue"},Unknown:{icon:a.a.createElement(c.a,null),color:"grey"}};t.a=u}}]);
//# sourceMappingURL=../sourcemaps/orders~91f4305a.js.map