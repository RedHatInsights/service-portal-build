(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{577:function(e,t,r){"use strict";var a=r(19),n=Object(a.b)({noItems:{id:"common.filtering.noItems",defaultMessage:"No items found"},filterByProduct:{id:"common.filtering.filterByProduct",defaultMessage:"Filter by product"},noResults:{id:"common.filtering.noResults",defaultMessage:"No results found"},noResultsDescription:{id:"common.filtering.noResultsDescription",defaultMessage:"No results match the filter criteria. Remove all filters or clear all filters to show results."},clearFilters:{id:"common.filtering.clear-filters",defaultMessage:"Clear all filters"},noProducts:{id:"common.filtering.no-products",defaultMessage:"No products yet"},noRecords:{id:"commonMessages.noRecords",defaultMessage:"No records"},filterByTitle:{id:"tableToolbar.filterByTitle",defaultMessage:"Filter by {title}"},noResultsFound:{id:"tableToolbar.noResultsFound",defaultMessage:"No results found"},noResult:{id:"tableToolbar.noResult",defaultMessage:"No {results}"},unknown:{id:"commonMessages.unknown",defaultMessage:"Unknown"}});t.a=n},581:function(e,t,r){"use strict";var a=r(83),n=function(){return(n=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};t.a=function(e){var t=void 0===e?{}:e,r=t.removeSearch,s=t.keepHash,o=Object(a.g)();return n(n({},o),{push:function(e){var t=e;return s&&o.location.hash.length>0&&(t="object"==typeof t?n(n({},t),{hash:o.location.hash}):""+t+o.location.hash),r?o.push(function(e){return"string"==typeof e?e.split("?")[0]:"object"==typeof e?n(n({},e),{search:void 0}):e}(t)):o.push(t)}})}},985:function(e,t,r){"use strict";r.r(t);var a=r(98),n=r.n(a),s=r(725),o=r.n(s),c=r(139),l=r.n(c),i=r(0),u=r.n(i),d=r(18),f=r(83),m=r(67),p=r(137),g=r(48),b=r(49),h=r(597),y=r(578),O=r.n(y),v=r(813),P=r(792),E=r(197),j=r(13),M=r.n(j),F=r(293),S=r(100),C=Object(i.createContext)({selectedOrderProcesses:[]}),k=function(e){var t=e.id,r=Object(i.useContext)(C),a=r.selectedOrderProcesses,n=r.setSelectedOrderProcesses;return u.a.createElement(F.Checkbox,{id:"select-".concat(t),isChecked:a.includes(t),onChange:function(){return n(t)}})};k.propTypes={id:M.a.string.isRequired};var w=function(e){return e.map((function(e){var t=e.id,r=e.name,a=e.description,n=e.created_at;return{id:t,cells:[u.a.createElement(u.a.Fragment,{key:"".concat(t,"-checkbox")},u.a.createElement(k,{id:t})),r,a,u.a.createElement(u.a.Fragment,{key:t},u.a.createElement(S.a,{date:n}))]}}))},R=r(611),D=r(673),N=r(672),T=r(24),V=r(85),x=r(166),B=r(184),A=r(686),q=r(36),I=function(){return(I=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},L=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var a=Array(e),n=0;for(t=0;t<r;t++)for(var s=arguments[t],o=0,c=s.length;o<c;o++,n++)a[n]=s[o];return a},_=function(e){var t=e.columns,r=e.fetchData,a=e.toolbarButtons,n=e.actionResolver,s=e.routes,o=void 0===s?function(){return null}:s,c=e.plural,l=e.pagination,d=void 0===l?T.a:l,f=e.filterValue,m=e.onFilterChange,p=e.isLoading,g=void 0!==p&&p,b=e.renderEmptyState,h=void 0===b?function(){return null}:b,y=e.sortBy,O=e.onSort,v=e.activeFiltersConfig,P=e.filterConfig,E=void 0===P?[]:P,j=e.rows,M=Object(x.a)(),F={itemCount:d.count,page:Object(T.b)(d.limit,d.offset),perPage:d.limit,onSetPage:function(e,t){return r(I(I({},d),{offset:Object(T.c)(t,d.limit)}))},onPerPageSelect:function(e,t){return r(I(I({},d),{limit:t}))},isDisabled:g};return u.a.createElement(B.Section,{type:"content","page-type":"tab-"+c,id:"tab-"+c},o(),u.a.createElement(A.PrimaryToolbar,I({className:"pf-u-p-lg",pagination:F},a&&{actionsConfig:{dropdownProps:{position:"right"},actions:[a()]}},{filterConfig:{items:L([{label:M.formatMessage({id:"name",defaultMessage:"Name"}),filterValues:{id:"filter-by-name",placeholder:M.formatMessage(q.a.orderProcessesFilter),"aria-label":M.formatMessage(q.a.orderProcessesFilter),onChange:function(e,t){return m(t)},value:f}}],E)},activeFiltersConfig:v})),g&&u.a.createElement(V.e,null),g||0!==j.length?u.a.createElement(i.Fragment,null,!g&&u.a.createElement(R.b,{"aria-label":c+" table",rows:j,cells:t,actionResolver:n,className:"pf-u-pt-0",sortBy:y,onSort:O},u.a.createElement(D.a,null),u.a.createElement(N.a,null)),d.count>0&&u.a.createElement(A.PrimaryToolbar,{className:"pf-u-pl-lg pf-u-pr-lg",pagination:I(I({},F),{dropDirection:"up",variant:"bottom",isCompact:!1,className:"pf-u-pr-0"})})):h())},z=r(666),H=r(111),J=r(663),U=r(664),G=r(287),K=r(135),Q=r(665),W=r(678),X=r(761),Y=function(e){var t=e.title,r=e.Icon,a=e.description,n=e.PrimaryAction,s=e.renderDescription;return u.a.createElement(X.EmptyTable,{centered:!0,"aria-label":"No records"},u.a.createElement(J.a,{className:"pf-u-ml-auto pf-u-mr-auto"},u.a.createElement(U.a,{icon:r}),u.a.createElement(G.a,null,u.a.createElement(K.a,{component:K.b.h1},t)),u.a.createElement(Q.a,null,a,s&&s()),u.a.createElement(W.a,null,n&&u.a.createElement(n,null))))};Y.propTypes={title:M.a.string.isRequired,Icon:M.a.any.isRequired,description:M.a.string.isRequired,PrimaryAction:M.a.any,renderDescription:M.a.func};var Z=Y,$=r(577),ee=r(99),te=r(195),re=r(8),ae=r(572),ne=r(957),se=r(187),oe=r(84),ce=r(581),le=function(e){var t,r=Object(d.useSelector)((function(e){return e.orderProcessReducer.orderProcesses}),d.shallowEqual);return null===(t=null==r?void 0:r.data)||void 0===t?void 0:t.find((function(t){return t.id===e}))},ie=function(){return(ie=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},ue=function(e,t){var r=t.type,a=t.initialValues,n=t.schema;switch(r){case"loaded":return ie(ie({},e),{initialValues:a,schema:n,isLoading:!1});default:return e}},de=function(e){var t=e.edit,r=void 0!==t&&t,a=Object(d.useDispatch)(),n=Object(oe.a)(["order_process"])[0].order_process,s=Object(d.useSelector)((function(e){var t=e.orderProcessReducer.orderProcesses.data;return r?t.find((function(e){return e.id===n})):{}})),o=Object(ce.a)({keepHash:!0}).push,c=Object(x.a)(),l=le(n),f=Object(i.useReducer)(ue,{isLoading:!0}),m=f[0].initialValues,p=f[1];Object(i.useEffect)((function(){l||void 0===l?void 0!==l&&p({type:"loaded",initialValues:l,schema:Object(ne.a)(c,l.id)}):Object(E.b)(n).then((function(e){return p({type:"loaded",initialValues:e,schema:Object(ne.a)(c,e.id)})}))}),[]);var g=function(){return o(re.n)};return r&&!s?null:u.a.createElement(ae.a,{isOpen:!0,onClose:g,title:c.formatMessage(r?q.a.updateOrderProcess:q.a.createOrderProcess),variant:"small"},u.a.createElement(se.c,{initialValues:m,onSubmit:function(e){var t=r?function(){return Object(E.h)(n,e,c)}:function(){return Object(E.a)(e,c)};return g(),a(t()).then((function(){return a(Object(E.c)())}))},onCancel:g,schema:Object(ne.a)(c,n),templateProps:{submitLabel:r?c.formatMessage(ee.a.save):c.formatMessage(ee.a.create),disableSubmit:["validating","pristine"]}}))},fe=r(193),me=r(924),pe=r(186),ge=r(315),be=r(934),he=r.n(be),ye=r(113),Oe=function(e){var t=e.ids,r=void 0===t?[]:t,a=e.fetchData,s=e.resetSelectedOrderProcesses,o=Object(d.useDispatch)(),c=Object(i.useState)(),l=n()(c,2),f=l[0],m=l[1],h=Object(i.useState)(!1),y=n()(h,2),O=y[0],v=y[1],P=Object(ce.a)({keepHash:!0}).push,j=Object(oe.a)(["order_process"]),M=n()(j,1)[0].order_process||1===r.length&&r[0],F=Object(x.a)(),S=le(M);if(Object(i.useEffect)((function(){M&&!S&&o(Object(E.b)(M)).then((function(e){var t=e.value;return m(t)})).catch((function(){return P(re.n)}))}),[]),!M&&0===r.length)return null;var C=function(){return P(re.n)},k=u.a.createElement("b",{key:"remove-key"},M?f&&f.name||S&&S.name:u.a.createElement(u.a.Fragment,null,r.length," ",F.formatMessage(q.a.orderProcesses))),w=M&&!S&&!f;return u.a.createElement(me.Modal,{isOpen:!0,variant:"small","aria-label":F.formatMessage(q.a.removeProcessAriaLabel,{count:M?1:r.length}),header:u.a.createElement(ge.Title,{size:"2xl",headingLevel:"h1"},u.a.createElement(he.a,{size:"sm",fill:"#f0ab00",className:"pf-u-mr-sm"}),F.formatMessage(q.a.removeProcessTitle,{count:M?1:r.length})),onClose:C,actions:[u.a.createElement(p.Button,{id:"submit-remove-order-process",key:"submit",variant:"danger",type:"button",isDisabled:O,onClick:function(){return v(!0),o(M?Object(E.d)(M,F):Object(E.e)(r,F)).catch((function(){return v(!1)})).then((function(){return P(re.n)})).then((function(){return s()})).then((function(){return a()}))}},O?u.a.createElement(u.a.Fragment,null,u.a.createElement(pe.Spinner,{size:"sm",className:"pf-u-mr-md"}),F.formatMessage(ye.a.deleting)):F.formatMessage(ye.a.delete)),u.a.createElement(p.Button,{id:"cancel-remove-order-process",key:"cancel",variant:"link",type:"button",isDisabled:O,onClick:C},F.formatMessage(ee.a.cancel))]},u.a.createElement(b.TextContent,null,u.a.createElement(g.Text,{component:g.TextVariants.p},w?u.a.createElement(V.c,null):F.formatMessage(q.a.removeProcessDescription,{name:k}))))};Oe.propTypes={fetchData:M.a.func.isRequired,ids:M.a.array,resetSelectedOrderProcesses:M.a.func.isRequired};var ve=Oe;function Pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var je=function(e,t,r){return[{title:u.a.createElement(F.Checkbox,{onChange:r,isChecked:t,id:"select-all"}),transforms:[Object(v.a)(1)]},{title:e.formatMessage(ee.a.name),transforms:[P.a]},{title:e.formatMessage(ee.a.description),transforms:[P.a]},{title:e.formatMessage(ee.a.created),transforms:[P.a]}]},Me=Object(H.a)((function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:T.a;return r(!0),t(Object(E.c)(Ee({filterValue:e},a))).then((function(){return r(!1)}))}),1e3),Fe=function(e,t){return e?[{category:t.formatMessage(ee.a.name),key:"name",chips:[{name:e,value:e}]}]:[]},Se={filter:"",isFetching:!0,isFiltering:!1,selectedOrderProcesses:[],allSelected:!1,rows:[]},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){return t.includes(e.id)}))},ke=function(e,t,r){return r.indexOf(e)===t},we=function(e,t){switch(t.type){case"setRows":return Ee(Ee({},e),{},{rows:t.payload,allSelected:Ce(t.payload,e.selectedOrderProcesses)});case"setFetching":return Ee(Ee({},e),{},{isFetching:t.payload});case"setFilterValue":return Ee(Ee({},e),{},{filterValue:t.payload});case"select":return Ee(Ee({},e),{},{allSelected:!1,selectedOrderProcesses:e.selectedOrderProcesses.includes(t.payload)?e.selectedOrderProcesses.filter((function(e){return e!==t.payload})):[].concat(o()(e.selectedOrderProcesses),[t.payload])});case"selectAll":return Ee(Ee({},e),{},{selectedOrderProcesses:[].concat(o()(e.selectedOrderProcesses),o()(t.payload)).filter(ke),allSelected:!0});case"unselectAll":return Ee(Ee({},e),{},{selectedOrderProcesses:e.selectedOrderProcesses.filter((function(e){return!t.payload.includes(e)})),allSelected:!1});case"resetSelected":return Ee(Ee({},e),{},{selectedOrderProceses:[],allSelected:!1});case"setFilteringFlag":return Ee(Ee({},e),{},{isFiltering:t.payload});default:return e}};t.default=function(){var e=Object(fe.a)(),t=Object(d.useSelector)((function(e){var t=e.orderProcessReducer;return{orderProcesses:t.orderProcesses,sortBy:t.sortBy}}),d.shallowEqual),r=t.orderProcesses,a=r.data,s=r.meta,o=t.sortBy,c=Object(i.useReducer)(we,Ee(Ee({},Se),{},{filterValue:(null==e?void 0:e.orderProcesses.filter)||Se.filterValue})),l=n()(c,2),y=l[0],v=y.filterValue,P=y.isFetching,j=y.isFiltering,M=y.selectedOrderProcesses,F=y.allSelected,k=y.rows,R=l[1],D=Object(d.useDispatch)(),N=Object(x.a)(),V=Object(ce.a)({keepHash:!0}),B=function(e){return R({type:"setFetching",payload:!0}),D(Object(E.c)(e)).then((function(){return R({type:"setFetching",payload:!1})})).catch((function(){return R({type:"setFetching",payload:!1})}))};Object(i.useEffect)((function(){insights.chrome.appNavClick({id:"order-processes",secondaryNav:!0}),B((null==e?void 0:e.orderProcesses)?Ee(Ee({},e.orderProcesses),{},{filterValue:v}):T.a),Object(S.d)()}),[]),Object(i.useEffect)((function(){R({type:"setRows",payload:w(a)})}),[a]);var A=function(e){R({type:"setFilterValue",payload:e}),Me(e,D,(function(e){return R({type:"setFilteringFlag",payload:e})}),Ee(Ee({},s),{},{offset:0}))},I=M.length>0;return u.a.createElement(i.Fragment,null,u.a.createElement(z.b,null,u.a.createElement(b.TextContent,{className:"pf-u-ml-md"},u.a.createElement(g.Text,{component:g.TextVariants.h1},N.formatMessage(q.a.title)))),u.a.createElement(C.Provider,{value:{selectedOrderProcesses:M,setSelectedOrderProcesses:function(e){return R({type:"select",payload:e})}}},u.a.createElement(_,{sortBy:o,onSort:function(e,t,r,a){var n=a.property;return D(Object(E.g)({index:t,direction:r,property:n})),B(Ee(Ee({},s),{},{filterValue:v}))},rows:k,columns:je(N,F,(function(){return R(F?{type:"unselectAll",payload:a.map((function(e){return e.id}))}:{type:"selectAll",payload:a.map((function(e){return e.id}))})})),routes:function(){return u.a.createElement(i.Fragment,null,u.a.createElement(f.b,{exact:!0,path:re.a},u.a.createElement(de,{postMethod:B})),u.a.createElement(f.b,{exact:!0,path:re.z},u.a.createElement(ve,{ids:M,fetchData:B,resetSelectedOrderProcesses:function(){return R({type:"resetSelected"})}})),u.a.createElement(f.b,{exact:!0,path:re.C},u.a.createElement(de,{edit:!0})))},fetchData:B,titlePlural:N.formatMessage(q.a.title),titleSingular:N.formatMessage(q.a.orderProcess),pagination:s,filterValue:v,onFilterChange:A,isLoading:P||j,toolbarButtons:function(){return u.a.createElement(te.b,{className:"pf-u-pl-lg top-toolbar"},u.a.createElement(h.ToolbarItem,null,u.a.createElement(m.a,{id:"add-order-process-link",to:{pathname:re.a}},u.a.createElement(p.Button,{variant:"primary","aria-label":N.formatMessage(ee.a.create)},N.formatMessage(ee.a.create)))),u.a.createElement(h.ToolbarItem,null,u.a.createElement(m.a,{id:"remove-multiple-order-processes'",className:I?"":"disabled-link",to:{pathname:re.z}},u.a.createElement(p.Button,{variant:"secondary",isDisabled:!I,"aria-label":N.formatMessage(q.a.deleteOrderProcess)},N.formatMessage(ye.a.delete)))))},actionResolver:function(){return[{title:N.formatMessage(ye.a.edit),onClick:function(e,t,r){return V.push({pathname:re.C,search:"?order_process=".concat(r.id)})}},{title:N.formatMessage(ye.a.delete),onClick:function(e,t,r){return V.push({pathname:re.z,search:"?order_process=".concat(r.id)})}}]},renderEmptyState:function(){return u.a.createElement(Z,{title:""===v?N.formatMessage(q.a.noOrderProcesses):N.formatMessage($.a.noResultsFound),Icon:O.a,PrimaryAction:function(){return""!==v?u.a.createElement(p.Button,{onClick:function(){return A("")},variant:"link"},N.formatMessage($.a.clearFilters)):null},description:""===v?N.formatMessage(q.a.noOrderProcesses):N.formatMessage($.a.noResultsDescription)})},activeFiltersConfig:{filters:Fe(v,N),onDelete:function(){return A("")}}})))}}}]);
//# sourceMappingURL=../sourcemaps/order-processes~5a11b65b.js.map