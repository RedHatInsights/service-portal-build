(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{557:function(e,t,a){"use strict";t.__esModule=!0,a(584),t.default={button:"pf-c-button",emptyState:"pf-c-empty-state",emptyStateBody:"pf-c-empty-state__body",emptyStateContent:"pf-c-empty-state__content",emptyStateIcon:"pf-c-empty-state__icon",emptyStatePrimary:"pf-c-empty-state__primary",emptyStateSecondary:"pf-c-empty-state__secondary",modifiers:{sm:"pf-m-sm",lg:"pf-m-lg",xl:"pf-m-xl",fullHeight:"pf-m-full-height",primary:"pf-m-primary",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"}},567:function(e,t,a){"use strict";var r=a(1),n=a.n(r),o=a(175),s=a.n(o),c=a(77);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p=function(e){return"string"==typeof e?e.split("?")[0]:"object"===s()(e)?i(i({},e),{},{search:void 0}):e};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.removeSearch,a=e.keepHash,r=Object(c.g)();return i(i({},r),{},{push:function(e){var n=e;return a&&r.location.hash.length>0&&(n="object"===s()(n)?i(i({},n),{},{hash:r.location.hash}):"".concat(n).concat(r.location.hash)),t?r.push(p(n)):r.push(n)}})}},568:function(e,t,a){"use strict";var r=(0,a(26).defineMessages)({noItems:{id:"common.filtering.noItems",defaultMessage:"No items found"},filterByProduct:{id:"common.filtering.filterByProduct",defaultMessage:"Filter by product"},noResults:{id:"common.filtering.noResults",defaultMessage:"No results found"},noResultsDescription:{id:"common.filtering.noResultsDescription",defaultMessage:"No results match the filter criteria. Remove all filters or clear all filters to show results."},clearFilters:{id:"common.filtering.clear-filters",defaultMessage:"Clear all filters"},noProducts:{id:"common.filtering.no-products",defaultMessage:"No products yet"},noRecords:{id:"commonMessages.noRecords",defaultMessage:"No records"},filterByTitle:{id:"tableToolbar.filterByTitle",defaultMessage:"Filter by {title}"},noResultsFound:{id:"tableToolbar.noResultsFound",defaultMessage:"No results found"},noResult:{id:"tableToolbar.noResult",defaultMessage:"No {results}"},unknown:{id:"commonMessages.unknown",defaultMessage:"Unknown"}});t.a=r},583:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=a(3),n=r.__importStar(a(0)),o=a(5),s=r.__importDefault(a(557));var c;!function(e){e.small="small",e.large="large",e.xl="xl",e.full="full"}(c=t.EmptyStateVariant||(t.EmptyStateVariant={})),t.EmptyState=e=>{var{children:t,className:a="",variant:l=c.full,isFullHeight:i}=e,p=r.__rest(e,["children","className","variant","isFullHeight"]);return n.createElement("div",Object.assign({className:o.css(s.default.emptyState,"small"===l&&s.default.modifiers.sm,"large"===l&&s.default.modifiers.lg,"xl"===l&&s.default.modifiers.xl,i&&s.default.modifiers.fullHeight,a)},p),n.createElement("div",{className:o.css(s.default.emptyStateContent)},t))},t.EmptyState.displayName="EmptyState"},584:function(e,t,a){var r=a(8),n=a(585);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};r(n,o);e.exports=n.locals||{}},585:function(e,t,a){(t=a(9)(!1)).push([e.i,".pf-c-empty-state {\n  --pf-c-empty-state--PaddingTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingRight: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingBottom: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingLeft: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__content--MaxWidth: none;\n  --pf-c-empty-state__icon--MarginBottom: var(--pf-global--spacer--lg);\n  --pf-c-empty-state__icon--FontSize: var(--pf-global--icon--FontSize--xl);\n  --pf-c-empty-state__icon--Color: var(--pf-global--icon--Color--light);\n  --pf-c-empty-state__content--c-title--m-lg--FontSize: var(--pf-global--FontSize--xl);\n  --pf-c-empty-state__body--MarginTop: var(--pf-global--spacer--md);\n  --pf-c-empty-state__body--Color: var(--pf-global--Color--200);\n  --pf-c-empty-state__primary--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__primary--secondary--MarginTop: var(--pf-global--spacer--sm);\n  --pf-c-empty-state__secondary--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__secondary--MarginBottom: calc(var(--pf-global--spacer--xs) * -1);\n  --pf-c-empty-state__secondary--child--MarginRight: calc(var(--pf-global--spacer--xs) / 2);\n  --pf-c-empty-state__secondary--child--MarginBottom: var(--pf-global--spacer--xs);\n  --pf-c-empty-state__secondary--child--MarginLeft: calc(var(--pf-global--spacer--xs) / 2);\n  --pf-c-empty-state--m-sm__content--MaxWidth: 25rem;\n  --pf-c-empty-state--m-lg__content--MaxWidth: 37.5rem;\n  --pf-c-empty-state--m-xl__body--FontSize: var(--pf-global--FontSize--xl);\n  --pf-c-empty-state--m-xl__body--MarginTop: var(--pf-global--spacer--lg);\n  --pf-c-empty-state--m-xl__icon--MarginBottom: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--m-xl__icon--FontSize: 6.25rem;\n  --pf-c-empty-state--m-xl--c-button__secondary--MarginTop: var(--pf-global--spacer--md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--pf-c-empty-state--PaddingTop) var(--pf-c-empty-state--PaddingRight) var(--pf-c-empty-state--PaddingBottom) var(--pf-c-empty-state--PaddingLeft);\n  text-align: center; }\n  .pf-c-empty-state.pf-m-sm {\n    --pf-c-empty-state__content--MaxWidth: var(--pf-c-empty-state--m-sm__content--MaxWidth); }\n  .pf-c-empty-state.pf-m-lg {\n    --pf-c-empty-state__content--MaxWidth: var(--pf-c-empty-state--m-lg__content--MaxWidth); }\n  .pf-c-empty-state.pf-m-xl {\n    --pf-c-empty-state__body--MarginTop: var(--pf-c-empty-state--m-xl__body--MarginTop);\n    --pf-c-empty-state__icon--MarginBottom: var(--pf-c-empty-state--m-xl__icon--MarginBottom);\n    --pf-c-empty-state__icon--FontSize: var(--pf-c-empty-state--m-xl__icon--FontSize);\n    --pf-c-empty-state--c-button__secondary--MarginTop: var(--pf-c-empty-state--m-xl--c-button__secondary--MarginTop); }\n    .pf-c-empty-state.pf-m-xl .pf-c-empty-state__body {\n      font-size: var(--pf-c-empty-state--m-xl__body--FontSize); }\n  .pf-c-empty-state.pf-m-full-height {\n    height: 100%; }\n\n.pf-c-empty-state__content {\n  max-width: var(--pf-c-empty-state__content--MaxWidth); }\n  .pf-c-empty-state__content > .pf-c-title.pf-m-lg {\n    font-size: var(--pf-c-empty-state__content--c-title--m-lg--FontSize); }\n\n.pf-c-empty-state__icon {\n  margin-bottom: var(--pf-c-empty-state__icon--MarginBottom);\n  font-size: var(--pf-c-empty-state__icon--FontSize);\n  color: var(--pf-c-empty-state__icon--Color); }\n\n.pf-c-empty-state__body {\n  margin-top: var(--pf-c-empty-state__body--MarginTop);\n  color: var(--pf-c-empty-state__body--Color); }\n\n.pf-c-empty-state__content > .pf-c-button.pf-m-primary,\n.pf-c-empty-state__primary {\n  margin-top: var(--pf-c-empty-state__primary--MarginTop); }\n  .pf-c-empty-state__content > .pf-c-button.pf-m-primary + .pf-c-empty-state__secondary,\n  .pf-c-empty-state__primary + .pf-c-empty-state__secondary {\n    margin-top: var(--pf-c-empty-state__primary--secondary--MarginTop); }\n\n.pf-c-empty-state__secondary {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: var(--pf-c-empty-state__secondary--MarginTop);\n  margin-bottom: var(--pf-c-empty-state__secondary--MarginBottom); }\n  .pf-c-empty-state__secondary > * {\n    margin-right: var(--pf-c-empty-state__secondary--child--MarginRight);\n    margin-bottom: var(--pf-c-empty-state__secondary--child--MarginBottom);\n    margin-left: var(--pf-c-empty-state__secondary--child--MarginLeft); }\n\n.pf-m-overpass-font .pf-c-empty-state .pf-c-empty-state__content > .pf-c-title.pf-m-lg {\n  font-size: var(--pf-global--FontSize--lg); }\n",""]),e.exports=t},586:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=a(3),n=r.__importStar(a(0)),o=a(5),s=r.__importDefault(a(557));t.EmptyStateIcon=e=>{var{className:t="",icon:a,component:c,variant:l="icon"}=e,i=r.__rest(e,["className","icon","component","variant"]);const p=o.css(s.default.emptyStateIcon,t);return"icon"===l?n.createElement(a,Object.assign({className:p},i,{"aria-hidden":"true"})):n.createElement("div",{className:p},n.createElement(c,null))},t.EmptyStateIcon.displayName="EmptyStateIcon"},587:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=a(3),n=r.__importStar(a(0)),o=a(5),s=r.__importDefault(a(557));t.EmptyStateBody=e=>{var{children:t,className:a=""}=e,c=r.__rest(e,["children","className"]);return n.createElement("div",Object.assign({className:o.css(s.default.emptyStateBody,a)},c),t)},t.EmptyStateBody.displayName="EmptyStateBody"},606:function(e,t,a){"use strict";t.__esModule=!0,t.ExclamationTriangleIconConfig={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0,transform:""},t.ExclamationTriangleIcon=a(72).createIcon(t.ExclamationTriangleIconConfig),t.default=t.ExclamationTriangleIcon},610:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=a(3),n=r.__importStar(a(0)),o=a(5),s=r.__importDefault(a(557));t.EmptyStateSecondaryActions=e=>{var{children:t=null,className:a=""}=e,c=r.__rest(e,["children","className"]);return n.createElement("div",Object.assign({className:o.css(s.default.emptyStateSecondary,a)},c),t)},t.EmptyStateSecondaryActions.displayName="EmptyStateSecondaryActions"},779:function(e,t,a){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0}),a(121);var n=a(167),o=a(166),s=a(282),c=r(a(0)),l=r(a(4)),i=r(a(285)),p=function(e){var t=e.centered,a=e.className,r=e.children,l=s._objectWithoutProperties(e,["centered","className","children"]),p=i("ins-c-table__empty",o._defineProperty({},"is-centered",t),a);return c.createElement("div",n._extends({className:p},l)," ",r)};p.propTypes={centered:l.bool,children:l.any,className:l.string},t.EmptyTable=p},854:function(e,t,a){"use strict";a.r(t);var r=a(15),n=a.n(r),o=a(24),s=a.n(o),c=a(1),l=a.n(c),i=a(0),p=a.n(i),m=a(17),f=a(77),u=a(64),d=a(58),y=a(10),g=a(14),b=a(283),_=a(566),v=a.n(_),h=a(682),O=a(661),E=a(185),P=a(4),M=a.n(P),S=a(281),j=a(89),x=Object(i.createContext)({selectedOrderProcesses:[]}),F=function(e){var t=e.id,a=Object(i.useContext)(x),r=a.selectedOrderProcesses,n=a.setSelectedOrderProcesses;return p.a.createElement(S.Checkbox,{id:"select-".concat(t),isChecked:r.includes(t),onChange:function(){return n(t)}})};F.propTypes={id:M.a.string.isRequired};var T=function(e){return e.map((function(e){var t=e.id,a=e.name,r=e.description,n=e.created_at;return{id:t,cells:[p.a.createElement(p.a.Fragment,{key:"".concat(t,"-checkbox")},p.a.createElement(F,{id:t})),a,r,p.a.createElement(p.a.Fragment,{key:t},p.a.createElement(j.a,{date:n}))]}}))},C=a(37),w=a.n(C),N=a(570),D=a(694),R=a(692),B=a(27),k=a(79),z=a(215),I=a(173),V=a(698),A=a(35);function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var H=function(e){var t=e.columns,a=e.fetchData,r=e.toolbarButtons,n=e.actionResolver,o=e.routes,c=e.plural,l=e.pagination,m=e.filterValue,f=e.onFilterChange,u=e.isLoading,d=e.renderEmptyState,y=e.sortBy,g=e.onSort,b=e.activeFiltersConfig,_=e.filterConfig,v=e.rows,h=Object(z.a)(),O={itemCount:l.count,page:Object(B.b)(l.limit,l.offset),perPage:l.limit,onSetPage:function(e,t){return a(q(q({},l),{},{offset:Object(B.c)(t,l.limit)}))},onPerPageSelect:function(e,t){return a(q(q({},l),{},{limit:t}))},isDisabled:u};return p.a.createElement(I.Section,{type:"content","page-type":"tab-".concat(c),id:"tab-".concat(c)},o(),p.a.createElement(V.PrimaryToolbar,w()({className:"pf-u-p-lg",pagination:O},r&&{actionsConfig:{dropdownProps:{position:"right"},actions:[r()]}},{filterConfig:{items:[{label:h.formatMessage({id:"name",defaultMessage:"Name"}),filterValues:{id:"filter-by-name",placeholder:h.formatMessage(A.a.orderProcessesFilter),"aria-label":h.formatMessage(A.a.orderProcessesFilter),onChange:function(e,t){return f(t)},value:m}}].concat(s()(_))},activeFiltersConfig:b})),u&&p.a.createElement(k.e,null),u||0!==v.length?p.a.createElement(i.Fragment,null,!u&&p.a.createElement(N.b,{"aria-label":"".concat(c," table"),rows:v,cells:t,actionResolver:n,className:"pf-u-pt-0",sortBy:y,onSort:g},p.a.createElement(D.a,null),p.a.createElement(R.a,null)),l.count>0&&p.a.createElement(V.PrimaryToolbar,{className:"pf-u-pl-lg pf-u-pr-lg",pagination:q(q({},O),{},{dropDirection:"up",variant:"bottom",isCompact:!1,className:"pf-u-pr-0"})})):d())};H.propTypes={columns:M.a.array.isRequired,toolbarButtons:M.a.func,fetchData:M.a.func.isRequired,pagination:M.a.shape({limit:M.a.number,offset:M.a.number,count:M.a.number}),plural:M.a.string,singular:M.a.string,routes:M.a.func,actionResolver:M.a.func,filterValue:M.a.string,onFilterChange:M.a.func,isLoading:M.a.bool,renderEmptyState:M.a.func,sortBy:M.a.object,onSort:M.a.func,activeFiltersConfig:M.a.object,filterConfig:M.a.array,rows:M.a.array},H.defaultProps={requests:[],isLoading:!1,pagination:B.a,routes:function(){return null},renderEmptyState:function(){return null},filterConfig:[]};var W=a(633),J=a(99),U=a(583),X=a(586),Q=a(587),G=a(610),K=a(779),Y=function(e){var t=e.title,a=e.Icon,r=e.description,n=e.PrimaryAction,o=e.renderDescription;return p.a.createElement(K.EmptyTable,{centered:!0,"aria-label":"No records"},p.a.createElement(U.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},p.a.createElement(X.EmptyStateIcon,{icon:a}),p.a.createElement(g.TextContent,null,p.a.createElement(y.Text,{component:y.TextVariants.h1},t)),p.a.createElement(Q.EmptyStateBody,null,r,o&&o()),p.a.createElement(G.EmptyStateSecondaryActions,null,n&&p.a.createElement(n,null))))};Y.propTypes={title:M.a.string.isRequired,Icon:M.a.any.isRequired,description:M.a.string.isRequired,PrimaryAction:M.a.any,renderDescription:M.a.func};var Z=Y,$=a(568),ee=a(165),te=a(178),ae=a(11),re=a(169),ne=a(36),oe=a.n(ne),se=a(23),ce=a.n(se),le=a(45),ie=a(86),pe=Object(J.a)((function(e,t,a){return Object(le.fetchOrderProcessByName)(e).then((function(r){var n=r.data;if(t?n.find((function(a){return e===a.name&&t!==a.id})):n.find((function(t){return e===t.name})))throw a.formatMessage(ie.a.nameTaken)}))})),me=function(e,t){return{fields:[{component:oe.a.TEXT_FIELD,name:"name",isRequired:!0,id:"order-process-name",label:e.formatMessage(A.a.orderProcessName),validate:[function(a){return pe(a,t,e)},{type:ce.a.REQUIRED,message:e.formatMessage(A.a.enterOrderProcessName)}]},{component:oe.a.TEXTAREA,name:"description",id:"order-process-description",label:e.formatMessage(ee.a.description)}]}},fe=a(171),ue=a(78),de=a(567),ye=function(e){var t=e.edit,a=Object(m.useDispatch)(),r=Object(ue.a)(["order_process"]),o=n()(r,1)[0].order_process,s=Object(m.useSelector)((function(e){var a=e.orderProcessReducer.orderProcesses.data;return t?a.find((function(e){return e.id===o})):{}})),c=Object(de.a)({keepHash:!0}).push,l=Object(z.a)(),i=function(){return c(ae.n)};if(t&&!s)return null;var f={name:s.name,description:s.description};return p.a.createElement(re.Modal,{isOpen:!0,onClose:i,title:l.formatMessage(t?A.a.updateOrderProcess:A.a.createOrderProcess),variant:"small"},p.a.createElement(fe.c,{initialValues:f,onSubmit:function(e){var r=t?function(){return Object(E.h)(o,e,l)}:function(){return Object(E.a)(e,l)};return i(),a(r()).then((function(){return a(Object(E.c)())}))},onCancel:i,schema:me(l,o),templateProps:{submitLabel:t?l.formatMessage(ee.a.save):l.formatMessage(ee.a.create),disableSubmit:["validating","pristine"]}}))};ye.propTypes={edit:M.a.bool},ye.defaultProps={edit:!1};var ge=ye,be=a(180),_e=a(168),ve=a(288),he=a(606),Oe=a.n(he),Ee=function(e){var t,a=Object(m.useSelector)((function(e){return{orderProcesses:e.orderProcessReducer.orderProcesses}}),m.shallowEqual).orderProcesses;return null==a||null===(t=a.data)||void 0===t?void 0:t.find((function(t){return t.id===e}))},Pe=a(101),Me=function(e){var t=e.ids,a=void 0===t?[]:t,r=e.fetchData,o=e.resetSelectedOrderProcesses,s=Object(m.useDispatch)(),c=Object(i.useState)(),l=n()(c,2),f=l[0],u=l[1],b=Object(i.useState)(!1),_=n()(b,2),v=_[0],h=_[1],O=Object(de.a)({keepHash:!0}).push,P=Object(ue.a)(["order_process"]),M=n()(P,1)[0].order_process||1===a.length&&a[0],S=Object(z.a)(),j=Ee(M);if(Object(i.useEffect)((function(){M&&!j&&s(Object(E.b)(M)).then((function(e){var t=e.value;return u(t)})).catch((function(){return O(ae.n)}))}),[]),!M&&0===a.length)return null;var x=function(){return O(ae.n)},F=p.a.createElement("b",{key:"remove-key"},M?f&&f.name||j&&j.name:p.a.createElement(p.a.Fragment,null,a.length," ",S.formatMessage(A.a.orderProcesses))),T=M&&!j&&!f;return p.a.createElement(re.Modal,{isOpen:!0,variant:"small","aria-label":S.formatMessage(A.a.removeProcessAriaLabel,{count:M?1:a.length}),header:p.a.createElement(ve.Title,{size:"2xl",headingLevel:"h1"},p.a.createElement(Oe.a,{size:"sm",fill:"#f0ab00",className:"pf-u-mr-sm"}),S.formatMessage(A.a.removeProcessTitle,{count:M?1:a.length})),onClose:x,actions:[p.a.createElement(d.Button,{id:"submit-remove-order-process",key:"submit",variant:"danger",type:"button",isDisabled:v,onClick:function(){return h(!0),s(M?Object(E.d)(M,S):Object(E.e)(a,S)).catch((function(){return h(!1)})).then((function(){return O(ae.n)})).then((function(){return o()})).then((function(){return r()}))}},v?p.a.createElement(p.a.Fragment,null,p.a.createElement(_e.Spinner,{size:"sm",className:"pf-u-mr-md"}),S.formatMessage(Pe.a.deleting)):S.formatMessage(Pe.a.delete)),p.a.createElement(d.Button,{id:"cancel-remove-order-process",key:"cancel",variant:"link",type:"button",isDisabled:v,onClick:x},S.formatMessage(ee.a.cancel))]},p.a.createElement(g.TextContent,null,p.a.createElement(y.Text,{component:y.TextVariants.p},T?p.a.createElement(k.c,null):S.formatMessage(A.a.removeProcessDescription,{name:F}))))};Me.propTypes={fetchData:M.a.func.isRequired,ids:M.a.array,resetSelectedOrderProcesses:M.a.func.isRequired};var Se=Me;function je(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function xe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?je(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):je(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Fe=function(e,t,a){return[{title:p.a.createElement(S.Checkbox,{onChange:a,isChecked:t,id:"select-all"}),transforms:[Object(h.a)(1)]},{title:e.formatMessage(ee.a.name),transforms:[O.a]},{title:e.formatMessage(ee.a.description),transforms:[O.a]},{title:e.formatMessage(ee.a.created),transforms:[O.a]}]},Te=Object(J.a)((function(e,t,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:B.a;return a(!0),t(Object(E.c)(xe({filterValue:e},r))).then((function(){return a(!1)}))}),1e3),Ce=function(e,t){return e?[{category:t.formatMessage(ee.a.name),key:"name",chips:[{name:e,value:e}]}]:[]},we={filter:"",isFetching:!0,isFiltering:!1,selectedOrderProcesses:[],allSelected:!1,rows:[]},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){return t.includes(e.id)}))},De=function(e,t,a){return a.indexOf(e)===t},Re=function(e,t){switch(t.type){case"setRows":return xe(xe({},e),{},{rows:t.payload,allSelected:Ne(t.payload,e.selectedOrderProcesses)});case"setFetching":return xe(xe({},e),{},{isFetching:t.payload});case"setFilterValue":return xe(xe({},e),{},{filterValue:t.payload});case"select":return xe(xe({},e),{},{allSelected:!1,selectedOrderProcesses:e.selectedOrderProcesses.includes(t.payload)?e.selectedOrderProcesses.filter((function(e){return e!==t.payload})):[].concat(s()(e.selectedOrderProcesses),[t.payload])});case"selectAll":return xe(xe({},e),{},{selectedOrderProcesses:[].concat(s()(e.selectedOrderProcesses),s()(t.payload)).filter(De),allSelected:!0});case"unselectAll":return xe(xe({},e),{},{selectedOrderProcesses:e.selectedOrderProcesses.filter((function(e){return!t.payload.includes(e)})),allSelected:!1});case"resetSelected":return xe(xe({},e),{},{selectedOrderProceses:[],allSelected:!1});case"setFilteringFlag":return xe(xe({},e),{},{isFiltering:t.payload});default:return e}};t.default=function(){var e=Object(be.a)(),t=Object(m.useSelector)((function(e){var t=e.orderProcessReducer;return{orderProcesses:t.orderProcesses,sortBy:t.sortBy}}),m.shallowEqual),a=t.orderProcesses,r=a.data,o=a.meta,s=t.sortBy,c=Object(i.useReducer)(Re,xe(xe({},we),{},{filterValue:(null==e?void 0:e.orderProcesses.filter)||we.filterValue})),l=n()(c,2),_=l[0],h=_.filterValue,O=_.isFetching,P=_.isFiltering,M=_.selectedOrderProcesses,S=_.allSelected,F=_.rows,C=l[1],w=Object(m.useDispatch)(),N=Object(z.a)(),D=Object(de.a)({keepHash:!0}),R=function(e){return C({type:"setFetching",payload:!0}),w(Object(E.c)(e)).then((function(){return C({type:"setFetching",payload:!1})})).catch((function(){return C({type:"setFetching",payload:!1})}))};Object(i.useEffect)((function(){insights.chrome.appNavClick({id:"order-processes",secondaryNav:!0}),R((null==e?void 0:e.orderProcesses)?xe(xe({},e.orderProcesses),{},{filterValue:h}):B.a),Object(j.d)()}),[]),Object(i.useEffect)((function(){C({type:"setRows",payload:T(r)})}),[r]);var k=function(e){C({type:"setFilterValue",payload:e}),Te(e,w,(function(e){return C({type:"setFilteringFlag",payload:e})}),xe(xe({},o),{},{offset:0}))},I=M.length>0;return p.a.createElement(i.Fragment,null,p.a.createElement(W.b,null,p.a.createElement(g.TextContent,{className:"pf-u-ml-md"},p.a.createElement(y.Text,{component:y.TextVariants.h1},N.formatMessage(A.a.title)))),p.a.createElement(x.Provider,{value:{selectedOrderProcesses:M,setSelectedOrderProcesses:function(e){return C({type:"select",payload:e})}}},p.a.createElement(H,{sortBy:s,onSort:function(e,t,a,r){var n=r.property;return w(Object(E.g)({index:t,direction:a,property:n})),R(xe(xe({},o),{},{filterValue:h}))},rows:F,columns:Fe(N,S,(function(){return C(S?{type:"unselectAll",payload:r.map((function(e){return e.id}))}:{type:"selectAll",payload:r.map((function(e){return e.id}))})})),routes:function(){return p.a.createElement(i.Fragment,null,p.a.createElement(f.b,{exact:!0,path:ae.a},p.a.createElement(ge,{postMethod:R})),p.a.createElement(f.b,{exact:!0,path:ae.z},p.a.createElement(Se,{ids:M,fetchData:R,resetSelectedOrderProcesses:function(){return C({type:"resetSelected"})}})),p.a.createElement(f.b,{exact:!0,path:ae.C},p.a.createElement(ge,{edit:!0})))},fetchData:R,titlePlural:N.formatMessage(A.a.title),titleSingular:N.formatMessage(A.a.orderProcess),pagination:o,filterValue:h,onFilterChange:k,isLoading:O||P,toolbarButtons:function(){return p.a.createElement(te.b,{className:"pf-u-pl-lg top-toolbar"},p.a.createElement(b.ToolbarItem,null,p.a.createElement(u.a,{id:"add-order-process-link",to:{pathname:ae.a}},p.a.createElement(d.Button,{variant:"primary","aria-label":N.formatMessage(ee.a.create)},N.formatMessage(ee.a.create)))),p.a.createElement(b.ToolbarItem,null,p.a.createElement(u.a,{id:"remove-multiple-order-processes'",className:I?"":"disabled-link",to:{pathname:ae.z}},p.a.createElement(d.Button,{variant:"secondary",isDisabled:!I,"aria-label":N.formatMessage(A.a.deleteOrderProcess)},N.formatMessage(Pe.a.delete)))))},actionResolver:function(){return[{title:N.formatMessage(Pe.a.edit),onClick:function(e,t,a){return D.push({pathname:ae.C,search:"?order_process=".concat(a.id)})}},{title:N.formatMessage(Pe.a.delete),onClick:function(e,t,a){return D.push({pathname:ae.z,search:"?order_process=".concat(a.id)})}}]},renderEmptyState:function(){return p.a.createElement(Z,{title:""===h?N.formatMessage(A.a.noOrderProcesses):N.formatMessage($.a.noResultsFound),Icon:v.a,PrimaryAction:function(){return""!==h?p.a.createElement(d.Button,{onClick:function(){return k("")},variant:"link"},N.formatMessage($.a.clearFilters)):null},description:""===h?N.formatMessage(A.a.noOrderProcesses):N.formatMessage($.a.noResultsDescription)})},activeFiltersConfig:{filters:Ce(h,N),onDelete:function(){return k("")}}})))}}}]);
//# sourceMappingURL=../sourcemaps/order-processes~31ecd969.js.map