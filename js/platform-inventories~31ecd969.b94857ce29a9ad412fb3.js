(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{575:function(t,e,a){"use strict";e.__esModule=!0,a(587),e.default={button:"pf-c-button",emptyState:"pf-c-empty-state",emptyStateBody:"pf-c-empty-state__body",emptyStateContent:"pf-c-empty-state__content",emptyStateIcon:"pf-c-empty-state__icon",emptyStatePrimary:"pf-c-empty-state__primary",emptyStateSecondary:"pf-c-empty-state__secondary",modifiers:{sm:"pf-m-sm",lg:"pf-m-lg",xl:"pf-m-xl",fullHeight:"pf-m-full-height",primary:"pf-m-primary",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"}},578:function(t,e,a){"use strict";var n=a(21),r=Object(n.b)({noItems:{id:"common.filtering.noItems",defaultMessage:"No items found"},filterByProduct:{id:"common.filtering.filterByProduct",defaultMessage:"Filter by product"},noResults:{id:"common.filtering.noResults",defaultMessage:"No results found"},noResultsDescription:{id:"common.filtering.noResultsDescription",defaultMessage:"No results match the filter criteria. Remove all filters or clear all filters to show results."},clearFilters:{id:"common.filtering.clear-filters",defaultMessage:"Clear all filters"},noProducts:{id:"common.filtering.no-products",defaultMessage:"No products yet"},noRecords:{id:"commonMessages.noRecords",defaultMessage:"No records"},filterByTitle:{id:"tableToolbar.filterByTitle",defaultMessage:"Filter by {title}"},noResultsFound:{id:"tableToolbar.noResultsFound",defaultMessage:"No results found"},noResult:{id:"tableToolbar.noResult",defaultMessage:"No {results}"},unknown:{id:"commonMessages.unknown",defaultMessage:"Unknown"}});e.a=r},580:function(t,e,a){"use strict";e.__esModule=!0,e.SearchIconConfig={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0,transform:""},e.SearchIcon=a(78).createIcon(e.SearchIconConfig),e.default=e.SearchIcon},587:function(t,e,a){var n=a(6),r=a(588);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);t.exports=r.locals||{}},588:function(t,e,a){(e=a(7)(!1)).push([t.i,".pf-c-empty-state {\n  --pf-c-empty-state--PaddingTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingRight: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingBottom: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingLeft: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__content--MaxWidth: none;\n  --pf-c-empty-state__icon--MarginBottom: var(--pf-global--spacer--lg);\n  --pf-c-empty-state__icon--FontSize: var(--pf-global--icon--FontSize--xl);\n  --pf-c-empty-state__icon--Color: var(--pf-global--icon--Color--light);\n  --pf-c-empty-state__content--c-title--m-lg--FontSize: var(--pf-global--FontSize--xl);\n  --pf-c-empty-state__body--MarginTop: var(--pf-global--spacer--md);\n  --pf-c-empty-state__body--Color: var(--pf-global--Color--200);\n  --pf-c-empty-state__primary--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__primary--secondary--MarginTop: var(--pf-global--spacer--sm);\n  --pf-c-empty-state__secondary--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__secondary--MarginBottom: calc(var(--pf-global--spacer--xs) * -1);\n  --pf-c-empty-state__secondary--child--MarginRight: calc(var(--pf-global--spacer--xs) / 2);\n  --pf-c-empty-state__secondary--child--MarginBottom: var(--pf-global--spacer--xs);\n  --pf-c-empty-state__secondary--child--MarginLeft: calc(var(--pf-global--spacer--xs) / 2);\n  --pf-c-empty-state--m-sm__content--MaxWidth: 25rem;\n  --pf-c-empty-state--m-lg__content--MaxWidth: 37.5rem;\n  --pf-c-empty-state--m-xl__body--FontSize: var(--pf-global--FontSize--xl);\n  --pf-c-empty-state--m-xl__body--MarginTop: var(--pf-global--spacer--lg);\n  --pf-c-empty-state--m-xl__icon--MarginBottom: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--m-xl__icon--FontSize: 6.25rem;\n  --pf-c-empty-state--m-xl--c-button__secondary--MarginTop: var(--pf-global--spacer--md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--pf-c-empty-state--PaddingTop) var(--pf-c-empty-state--PaddingRight) var(--pf-c-empty-state--PaddingBottom) var(--pf-c-empty-state--PaddingLeft);\n  text-align: center; }\n  .pf-c-empty-state.pf-m-sm {\n    --pf-c-empty-state__content--MaxWidth: var(--pf-c-empty-state--m-sm__content--MaxWidth); }\n  .pf-c-empty-state.pf-m-lg {\n    --pf-c-empty-state__content--MaxWidth: var(--pf-c-empty-state--m-lg__content--MaxWidth); }\n  .pf-c-empty-state.pf-m-xl {\n    --pf-c-empty-state__body--MarginTop: var(--pf-c-empty-state--m-xl__body--MarginTop);\n    --pf-c-empty-state__icon--MarginBottom: var(--pf-c-empty-state--m-xl__icon--MarginBottom);\n    --pf-c-empty-state__icon--FontSize: var(--pf-c-empty-state--m-xl__icon--FontSize);\n    --pf-c-empty-state--c-button__secondary--MarginTop: var(--pf-c-empty-state--m-xl--c-button__secondary--MarginTop); }\n    .pf-c-empty-state.pf-m-xl .pf-c-empty-state__body {\n      font-size: var(--pf-c-empty-state--m-xl__body--FontSize); }\n  .pf-c-empty-state.pf-m-full-height {\n    height: 100%; }\n\n.pf-c-empty-state__content {\n  max-width: var(--pf-c-empty-state__content--MaxWidth); }\n  .pf-c-empty-state__content > .pf-c-title.pf-m-lg {\n    font-size: var(--pf-c-empty-state__content--c-title--m-lg--FontSize); }\n\n.pf-c-empty-state__icon {\n  margin-bottom: var(--pf-c-empty-state__icon--MarginBottom);\n  font-size: var(--pf-c-empty-state__icon--FontSize);\n  color: var(--pf-c-empty-state__icon--Color); }\n\n.pf-c-empty-state__body {\n  margin-top: var(--pf-c-empty-state__body--MarginTop);\n  color: var(--pf-c-empty-state__body--Color); }\n\n.pf-c-empty-state__content > .pf-c-button.pf-m-primary,\n.pf-c-empty-state__primary {\n  margin-top: var(--pf-c-empty-state__primary--MarginTop); }\n  .pf-c-empty-state__content > .pf-c-button.pf-m-primary + .pf-c-empty-state__secondary,\n  .pf-c-empty-state__primary + .pf-c-empty-state__secondary {\n    margin-top: var(--pf-c-empty-state__primary--secondary--MarginTop); }\n\n.pf-c-empty-state__secondary {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: var(--pf-c-empty-state__secondary--MarginTop);\n  margin-bottom: var(--pf-c-empty-state__secondary--MarginBottom); }\n  .pf-c-empty-state__secondary > * {\n    margin-right: var(--pf-c-empty-state__secondary--child--MarginRight);\n    margin-bottom: var(--pf-c-empty-state__secondary--child--MarginBottom);\n    margin-left: var(--pf-c-empty-state__secondary--child--MarginLeft); }\n\n.pf-m-overpass-font .pf-c-empty-state .pf-c-empty-state__content > .pf-c-title.pf-m-lg {\n  font-size: var(--pf-global--FontSize--lg); }\n",""]),t.exports=e},596:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a(0),r=a.n(n),o=a(677),c=a(678),s=a(279),i=a(130),l=a(679),p=a(680),m=a(128),f=a(576);e.b=function(t){var e=t.title,a=t.Icon,n=t.description,m=t.PrimaryAction,f=t.renderDescription,u=void 0===f?function(){return null}:f;return r.a.createElement("div",{className:"pf-u-mt-xl"},r.a.createElement(o.a,{className:"pf-u-ml-auto pf-u-mr-auto"},r.a.createElement(c.a,{icon:a}),r.a.createElement(s.a,null,r.a.createElement(i.a,{component:i.b.h1},e)),r.a.createElement(l.a,null,n,u()),r.a.createElement(p.a,null,m&&r.a.createElement(m,null))))};var u=function(t){var e=t.url,a=t.label,n=t.hasPermission,o=void 0!==n&&n,c=t.id;return o?r.a.createElement(f.a,{id:c,pathname:e,preserveSearch:!0},r.a.createElement(m.a,{variant:"primary"},a)):null}},602:function(t,e,a){"use strict";var n=a(21),r=Object(n.b)({workflowColumn:{id:"platform.inventories.columns.workflow",defaultMessage:"Workflow"},noInventoriesDescription:{id:"platform.inventories.empty.no-inventories",defaultMessage:"No inventories found."},noInventoriesFilterDescription:{id:"platform.inventories.empty.no-results",defaultMessage:"No inventories match your filter criteria."},inventoriesFilter:{id:"platform.inventories.filter.placeholder",defaultMessage:"Filter by inventory"},templatesFilter:{id:"platform.templates.filter.placeholder",defaultMessage:"Filter by template"},noTemplatesTitle:{id:"platform.templates.no-templates",defaultMessage:"No templates"},noTemplatesDescription:{id:"platform.templates.empty.no-templates",defaultMessage:"This platform has no templates."},configureSourceTitle:{id:"platforms.list.configure-source",defaultMessage:"Configure a source in order to add products to portfolios."},connectSource:{id:"platforms.list.connect-source",defaultMessage:"To connect to a source, go to <a>Sources</a> under Settings."},contactAdmin:{id:"platforms.list.contact-admin",defaultMessage:"Contact your organization administrator to setup sources for Catalog."},title:{id:"platforms.title",defaultMessage:"Platforms"},noPlatforms:{id:"platforms.list.empty.title",defaultMessage:"No platforms yet"},offeringTitle:{id:"platforms.offerings.detail.title",defaultMessage:"Service offering"},offeringParameters:{id:"platforms.offerings.detail.extra-params",defaultMessage:"Extra parameters"}});e.a=r},615:function(t,e,a){"use strict";var n=a(0),r=a.n(n),o=a(676),c=function(){return(c=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++)for(var r in e=arguments[a])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},s=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(a[n[r]]=t[n[r]])}return a};e.a=function(t){var e=t.children,a=t.className,n=s(t,["children","className"]);return r.a.createElement("div",c({className:Object(o.a)("pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto",a)},n),e)}},677:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var n,r=a(1),o=a(0),c=a(2),s=a(575),i=a.n(s);!function(t){t.small="small",t.large="large",t.xl="xl",t.full="full"}(n||(n={}));const l=t=>{var{children:e,className:a="",variant:s=n.full,isFullHeight:l}=t,p=Object(r.__rest)(t,["children","className","variant","isFullHeight"]);return o.createElement("div",Object.assign({className:Object(c.css)(i.a.emptyState,"small"===s&&i.a.modifiers.sm,"large"===s&&i.a.modifiers.lg,"xl"===s&&i.a.modifiers.xl,l&&i.a.modifiers.fullHeight,a)},p),o.createElement("div",{className:Object(c.css)(i.a.emptyStateContent)},e))};l.displayName="EmptyState"},678:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a(1),r=a(0),o=a(2),c=a(575),s=a.n(c);const i=t=>{var{className:e="",icon:a,component:c,variant:i="icon"}=t,l=Object(n.__rest)(t,["className","icon","component","variant"]);const p=Object(o.css)(s.a.emptyStateIcon,e);return"icon"===i?r.createElement(a,Object.assign({className:p},l,{"aria-hidden":"true"})):r.createElement("div",{className:p},r.createElement(c,null))};i.displayName="EmptyStateIcon"},679:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a(1),r=a(0),o=a(2),c=a(575),s=a.n(c);const i=t=>{var{children:e,className:a=""}=t,c=Object(n.__rest)(t,["children","className"]);return r.createElement("div",Object.assign({className:Object(o.css)(s.a.emptyStateBody,a)},c),e)};i.displayName="EmptyStateBody"},680:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a(1),r=a(0),o=a(2),c=a(575),s=a.n(c);const i=t=>{var{children:e=null,className:a=""}=t,c=Object(n.__rest)(t,["children","className"]);return r.createElement("div",Object.assign({className:Object(o.css)(s.a.emptyStateSecondary,a)},c),e)};i.displayName="EmptyStateSecondaryActions"},932:function(t,e,a){"use strict";a.r(e);var n=a(26),r=a.n(n),o=a(13),c=a.n(o),s=a(0),i=a.n(s),l=a(19),p=a(85),m=a(580),f=a.n(m),u=a(175),d=a(97),y=a(601),g=a(23),_=a(595),v=a(649),b=a(596),h=a(106),O=a(130),M=a(617),j=a(694),S=a(693),x=a(87),E=a(578),F=a(18),w=function(){var t=Object(F.a)();return i.a.createElement(O.a,{component:O.b.h1},t(E.a.noItems))},N=function(t){var e=t.data,a=t.columns,n=t.isCompact,r=void 0!==n&&n,o=t.isLoading,c=void 0!==o&&o,l=t.actionResolver,p=t.areActionsDisabled,m=t.borders,f=void 0===m||m,u=t.routes,d=void 0===u?function(){return null}:u,y=t.titlePlural,g=t.renderEmptyState,_=Object(s.useState)([]),v=_[0],b=_[1];return Object(s.useEffect)((function(){b(e)}),[e]),c?i.a.createElement(x.e,null):i.a.createElement(s.Fragment,null,0===v.length?g?g():i.a.createElement(w,null):i.a.createElement(s.Fragment,null,d(),i.a.createElement(M.b,{"aria-label":y+" table",variant:r?M.e.compact:void 0,borders:f,rows:v,cells:a,actionResolver:l,areActionsDisabled:p},i.a.createElement(j.a,null),i.a.createElement(S.a,null))))},P=a(581),T=a.n(P),R=a(577),z=a(615),C=a(86),I=a(96),B=a(602);function k(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function D(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?k(Object(a),!0).forEach((function(e){c()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var W={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},L=Object(h.a)((function(t,e,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:g.a;n(!0),a(Object(_.a)(t,e,r)).then((function(){return n(!1)}))}),1e3),V=function(t,e){switch(e.type){case"setFetching":return D(D({},t),{},{isFetching:e.payload});case"setFilterValue":return D(D({},t),{},{filterValue:e.payload});case"setFilteringFlag":return D(D({},t),{},{isFiltering:e.payload});default:return t}};e.default=function(){var t=Object(F.a)(),e=Object(s.useRef)([t(I.a.name),t(I.a.description),t(I.a.created),t(B.a.workflowColumn)]).current,a=Object(s.useReducer)(V,W),n=r()(a,2),o=n[0],c=o.filterValue,m=o.isFetching,h=o.isFiltering,O=n[1],M=Object(l.useSelector)((function(t){return t.platformReducer.platformInventories})),j=M.data,S=M.meta,x=Object(l.useSelector)((function(t){return t.platformReducer.selectedPlatform})),E=Object(l.useDispatch)(),w=Object(C.a)(["platform"]),P=r()(w,1)[0].platform,k=Object(p.g)();Object(s.useEffect)((function(){E(Object(_.a)(P,c,g.a)).then((function(){return O({type:"setFetching",payload:!1})})),Object(d.d)()}),[]);var A=j?function(t){return t.reduce((function(t,e,a){var n=e.id,r=e.name,o=e.description,c=e.created_at,l=e.workflow;return[].concat(T()(t),[{id:n,key:a,isOpen:!1,cells:[r,o,i.a.createElement(s.Fragment,{key:"date"},i.a.createElement(d.a,{date:c})),l]}])}),[])}(j):[],H=x?x.name:"";return i.a.createElement(s.Fragment,null,i.a.createElement(y.a,{schema:Object(v.a)({onFilterChange:function(t){O({type:"setFilterValue",payload:t}),L(P,t,E,(function(t){return O({type:"setFilteringFlag",payload:t})}),D(D({},S),{},{offset:0}))},searchValue:c,filterPlaceholder:t(B.a.inventoriesFilter),meta:S,apiRequest:function(t,e){return E(Object(_.a)(P,c,e))}})}),i.a.createElement(u.Section,{type:"content"},i.a.createElement(N,{title:H,data:A,columns:e,isLoading:m||h,actionResolver:function(t){return[{title:"Set approval",onClick:function(){return k.push({pathname:"/platform/platform-inventories/edit-workflow",search:"?platform=".concat(P,"&inventory=").concat(t.id)})}}]},renderEmptyState:function(){return i.a.createElement(b.b,{title:"No inventories",Icon:f.a,description:t(""===c?B.a.noInventoriesDescription:B.a.noInventoriesFilterDescription)})}})),S.count>0&&i.a.createElement(z.a,null,i.a.createElement(R.a,{dropDirection:"up",meta:S,apiRequest:function(t,e){return E(Object(_.a)(P,c,e))}})))}}}]);
//# sourceMappingURL=../sourcemaps/platform-inventories~31ecd969.js.map