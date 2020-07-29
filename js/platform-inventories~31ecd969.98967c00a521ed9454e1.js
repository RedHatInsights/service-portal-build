(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{430:function(e,t,a){"use strict";t.__esModule=!0,a(466),t.default={button:"pf-c-button",emptyState:"pf-c-empty-state",emptyStateBody:"pf-c-empty-state__body",emptyStateContent:"pf-c-empty-state__content",emptyStateIcon:"pf-c-empty-state__icon",emptyStatePrimary:"pf-c-empty-state__primary",emptyStateSecondary:"pf-c-empty-state__secondary",modifiers:{sm:"pf-m-sm",lg:"pf-m-lg",xl:"pf-m-xl",fullHeight:"pf-m-full-height",primary:"pf-m-primary",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"}},431:function(e,t,a){"use strict";var n=a(432);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(n.a)(e,t,a)}},437:function(e,t,a){"use strict";var n=(0,a(49).defineMessages)({noItems:{id:"common.filtering.noItems",defaultMessage:"No items found"},filterByProduct:{id:"common.filtering.filterByProduct",defaultMessage:"Filter by product"},noResults:{id:"common.filtering.noResults",defaultMessage:"No results found"},noResultsDescription:{id:"common.filtering.noResultsDescription",defaultMessage:"No results match the filter criteria. Remove all filters or clear all filters to show results."},clearFilters:{id:"common.filtering.clear-filters",defaultMessage:"Clear all filters"},noProducts:{id:"common.filtering.no-products",defaultMessage:"No products yet"},noRecords:{id:"commonMessages.noRecords",defaultMessage:"No records"},filterByTitle:{id:"tableToolbar.filterByTitle",defaultMessage:"Filter by {title}"},noResultsFound:{id:"tableToolbar.noResultsFound",defaultMessage:"No results found"},noResult:{id:"tableToolbar.noResult",defaultMessage:"No {results}"},unknown:{id:"commonMessages.unknown",defaultMessage:"Unknown"}});t.a=n},438:function(e,t,a){"use strict";var n=a(49),r=Object(n.defineMessages)({shared:{id:"common.labels.shared",defaultMessage:"Shared"},portfolio:{id:"common.labels.portfolio",defaultMessage:"Portfolio"},platform:{id:"common.labels.platform",defaultMessage:"Platform"},name:{id:"common.labels.name",defaultMessage:"Name"},description:{id:"common.labels.description",defaultMessage:"Description"},loading:{id:"common.labels.loading",defaultMessage:"Loading"},cancel:{id:"common.labels.cancel",defaultMessage:"Cancel"},save:{id:"common.labels.save",defaultMessage:"Save"},confirm:{id:"common.labels.confirm",defaultMessage:"Confirm"}});t.a=r},453:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(12),s=a.n(o),i=function(e){var t=e.children;return r.a.createElement("div",{className:"pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto"},t)};i.propTypes={children:s.a.oneOfType([s.a.node,s.a.arrayOf(s.a.node)])},t.a=i},457:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=(0,a(49).defineMessages)({title:{id:"common.states.title",defaultMessage:"State"},ordered:{id:"common.states.ordered",defaultMessage:"Ordered"},approvalPending:{id:"common.states.approval-pending",defaultMessage:"Approval Pending"},canceled:{id:"common.states.canceled",defaultMessage:"Canceled"},completed:{id:"common.states.completed",defaultMessage:"Completed"},created:{id:"common.states.created",defaultMessage:"Created"},failed:{id:"common.states.failed",defaultMessage:"Failed"},undecided:{id:"common.states.undecided",defaultMessage:"Undecided"},approved:{id:"common.states.approved",defaultMessage:"Approved"},denied:{id:"common.states.denied",defaultMessage:"Denied"},error:{id:"common.states.error",defaultMessage:"Error"},pending:{id:"common.states.pending",defaultMessage:"Pending"},skipped:{id:"common.states.skipped",defaultMessage:"Skipped"},started:{id:"common.states.started",defaultMessage:"Started"},notified:{id:"common.states.notified",defaultMessage:"Notified"}}),r=function(e){return e.replace(/\s/g,"").replace(/^./,(function(e){return e.toLowerCase()}))};t.a=n},465:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(3),r=n.__importStar(a(0)),o=a(4),s=n.__importDefault(a(430));var i;!function(e){e.small="small",e.large="large",e.xl="xl",e.full="full"}(i=t.EmptyStateVariant||(t.EmptyStateVariant={})),t.EmptyState=e=>{var{children:t,className:a="",variant:l=i.full,isFullHeight:c}=e,p=n.__rest(e,["children","className","variant","isFullHeight"]);return r.createElement("div",Object.assign({className:o.css(s.default.emptyState,"small"===l&&s.default.modifiers.sm,"large"===l&&s.default.modifiers.lg,"xl"===l&&s.default.modifiers.xl,c&&s.default.modifiers.fullHeight,a)},p),r.createElement("div",{className:o.css(s.default.emptyStateContent)},t))},t.EmptyState.displayName="EmptyState"},466:function(e,t,a){var n=a(6),r=a(467);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);e.exports=r.locals||{}},467:function(e,t,a){(t=a(7)(!1)).push([e.i,".pf-c-empty-state {\n  --pf-c-empty-state--PaddingTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingRight: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingBottom: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingLeft: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__content--MaxWidth: none;\n  --pf-c-empty-state__icon--MarginBottom: var(--pf-global--spacer--lg);\n  --pf-c-empty-state__icon--FontSize: var(--pf-global--icon--FontSize--xl);\n  --pf-c-empty-state__icon--Color: var(--pf-global--icon--Color--light);\n  --pf-c-empty-state__content--c-title--m-lg--FontSize: var(--pf-global--FontSize--xl);\n  --pf-c-empty-state__body--MarginTop: var(--pf-global--spacer--md);\n  --pf-c-empty-state__body--Color: var(--pf-global--Color--200);\n  --pf-c-empty-state__primary--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__primary--secondary--MarginTop: var(--pf-global--spacer--sm);\n  --pf-c-empty-state__secondary--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__secondary--MarginBottom: calc(var(--pf-global--spacer--xs) * -1);\n  --pf-c-empty-state__secondary--child--MarginRight: calc(var(--pf-global--spacer--xs) / 2);\n  --pf-c-empty-state__secondary--child--MarginBottom: var(--pf-global--spacer--xs);\n  --pf-c-empty-state__secondary--child--MarginLeft: calc(var(--pf-global--spacer--xs) / 2);\n  --pf-c-empty-state--m-sm__content--MaxWidth: 25rem;\n  --pf-c-empty-state--m-lg__content--MaxWidth: 37.5rem;\n  --pf-c-empty-state--m-xl__body--FontSize: var(--pf-global--FontSize--xl);\n  --pf-c-empty-state--m-xl__body--MarginTop: var(--pf-global--spacer--lg);\n  --pf-c-empty-state--m-xl__icon--MarginBottom: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--m-xl__icon--FontSize: 6.25rem;\n  --pf-c-empty-state--m-xl--c-button__secondary--MarginTop: var(--pf-global--spacer--md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--pf-c-empty-state--PaddingTop) var(--pf-c-empty-state--PaddingRight) var(--pf-c-empty-state--PaddingBottom) var(--pf-c-empty-state--PaddingLeft);\n  text-align: center; }\n  .pf-c-empty-state.pf-m-sm {\n    --pf-c-empty-state__content--MaxWidth: var(--pf-c-empty-state--m-sm__content--MaxWidth); }\n  .pf-c-empty-state.pf-m-lg {\n    --pf-c-empty-state__content--MaxWidth: var(--pf-c-empty-state--m-lg__content--MaxWidth); }\n  .pf-c-empty-state.pf-m-xl {\n    --pf-c-empty-state__body--MarginTop: var(--pf-c-empty-state--m-xl__body--MarginTop);\n    --pf-c-empty-state__icon--MarginBottom: var(--pf-c-empty-state--m-xl__icon--MarginBottom);\n    --pf-c-empty-state__icon--FontSize: var(--pf-c-empty-state--m-xl__icon--FontSize);\n    --pf-c-empty-state--c-button__secondary--MarginTop: var(--pf-c-empty-state--m-xl--c-button__secondary--MarginTop); }\n    .pf-c-empty-state.pf-m-xl .pf-c-empty-state__body {\n      font-size: var(--pf-c-empty-state--m-xl__body--FontSize); }\n  .pf-c-empty-state.pf-m-full-height {\n    height: 100%; }\n\n.pf-c-empty-state__content {\n  max-width: var(--pf-c-empty-state__content--MaxWidth); }\n  .pf-c-empty-state__content > .pf-c-title.pf-m-lg {\n    font-size: var(--pf-c-empty-state__content--c-title--m-lg--FontSize); }\n\n.pf-c-empty-state__icon {\n  margin-bottom: var(--pf-c-empty-state__icon--MarginBottom);\n  font-size: var(--pf-c-empty-state__icon--FontSize);\n  color: var(--pf-c-empty-state__icon--Color); }\n\n.pf-c-empty-state__body {\n  margin-top: var(--pf-c-empty-state__body--MarginTop);\n  color: var(--pf-c-empty-state__body--Color); }\n\n.pf-c-empty-state__content > .pf-c-button.pf-m-primary,\n.pf-c-empty-state__primary {\n  margin-top: var(--pf-c-empty-state__primary--MarginTop); }\n  .pf-c-empty-state__content > .pf-c-button.pf-m-primary + .pf-c-empty-state__secondary,\n  .pf-c-empty-state__primary + .pf-c-empty-state__secondary {\n    margin-top: var(--pf-c-empty-state__primary--secondary--MarginTop); }\n\n.pf-c-empty-state__secondary {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: var(--pf-c-empty-state__secondary--MarginTop);\n  margin-bottom: var(--pf-c-empty-state__secondary--MarginBottom); }\n  .pf-c-empty-state__secondary > * {\n    margin-right: var(--pf-c-empty-state__secondary--child--MarginRight);\n    margin-bottom: var(--pf-c-empty-state__secondary--child--MarginBottom);\n    margin-left: var(--pf-c-empty-state__secondary--child--MarginLeft); }\n\n.pf-m-overpass-font .pf-c-empty-state .pf-c-empty-state__content > .pf-c-title.pf-m-lg {\n  font-size: var(--pf-global--FontSize--lg); }\n",""]),e.exports=t},468:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(3),r=n.__importStar(a(0)),o=a(4),s=n.__importDefault(a(430));t.EmptyStateIcon=e=>{var{className:t="",icon:a,component:i,variant:l="icon"}=e,c=n.__rest(e,["className","icon","component","variant"]);const p=o.css(s.default.emptyStateIcon,t);return"icon"===l?r.createElement(a,Object.assign({className:p},c,{"aria-hidden":"true"})):r.createElement("div",{className:p},r.createElement(i,null))},t.EmptyStateIcon.displayName="EmptyStateIcon"},469:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(3),r=n.__importStar(a(0)),o=a(4),s=n.__importDefault(a(430));t.EmptyStateBody=e=>{var{children:t,className:a=""}=e,i=n.__rest(e,["children","className"]);return r.createElement("div",Object.assign({className:o.css(s.default.emptyStateBody,a)},i),t)},t.EmptyStateBody.displayName="EmptyStateBody"},470:function(e,t,a){"use strict";var n=(0,a(49).defineMessages)({workflowColumn:{id:"platform.inventories.columns.workflow",defaultMessage:"Workflow"},noInventoriesDescription:{id:"platform.inventories.empty.no-inventories",defaultMessage:"No inventories found."},noInventoriesFilterDescription:{id:"platform.inventories.empty.no-results",defaultMessage:"No inventories match your filter criteria."},inventoriesFilter:{id:"platform.inventories.filter.placeholder",defaultMessage:"Filter by inventory"},templatesFilter:{id:"platform.templates.filter.placeholder",defaultMessage:"Filter by template"},noTemplatesTitle:{id:"platform.templates.no-templates",defaultMessage:"No templates"},noTemplatesDescription:{id:"platform.templates.empty.no-templates",defaultMessage:"This platform has no templates."},configureSourceTitle:{id:"platforms.list.configure-source",defaultMessage:"Configure a source in order to add products to portfolios."},connectSource:{id:"platforms.list.connect-source",defaultMessage:"To connect to a source, go to <a>Sources</a> under Settings."},contactAdmin:{id:"platforms.list.contact-admin",defaultMessage:"Contact your organization administrator to setup sources for Catalog."},title:{id:"platforms.title",defaultMessage:"Platforms"},noPlatforms:{id:"platforms.list.empty.title",defaultMessage:"No platforms yet"},offeringTitle:{id:"platforms.offerings.detail.title",defaultMessage:"Service offering"},offeringParameters:{id:"platforms.offerings.detail.extra-params",defaultMessage:"Extra parameters"}});t.a=n},482:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(0),r=a.n(n),o=a(12),s=a.n(o),i=a(72),l=a(465),c=a(468),p=a(469),m=a(495),f=a(50),d=a(71),u=a(435),y=function(e){var t=e.title,a=e.Icon,n=e.description,o=e.PrimaryAction,s=e.renderDescription;return r.a.createElement("div",{className:"pf-u-mt-xl"},r.a.createElement(l.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},r.a.createElement(c.EmptyStateIcon,{icon:a}),r.a.createElement(d.TextContent,null,r.a.createElement(f.Text,{component:f.TextVariants.h1},t)),r.a.createElement(p.EmptyStateBody,null,n,s()),r.a.createElement(m.EmptyStateSecondaryActions,null,o&&r.a.createElement(o,null))))};y.defaultProps={renderDescription:function(){return null}},y.propTypes={title:s.a.string.isRequired,Icon:s.a.any.isRequired,description:s.a.string,PrimaryAction:s.a.any,renderDescription:s.a.func},t.b=y;var g=function(e){var t=e.url,a=e.label,n=e.hasPermission,o=void 0!==n&&n,s=e.id;return o&&r.a.createElement(u.a,{id:s,pathname:t,preserveSearch:!0},r.a.createElement(i.Button,{variant:"primary"},a))};g.propTypes={url:s.a.string.isRequired,label:s.a.string.isRequired,id:s.a.string,hasPermission:s.a.bool}},495:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(3),r=n.__importStar(a(0)),o=a(4),s=n.__importDefault(a(430));t.EmptyStateSecondaryActions=e=>{var{children:t=null,className:a=""}=e,i=n.__rest(e,["children","className"]);return r.createElement("div",Object.assign({className:o.css(s.default.emptyStateSecondary,a)},i),t)},t.EmptyStateSecondaryActions.displayName="EmptyStateSecondaryActions"},845:function(e,t,a){"use strict";a.r(t);var n=a(29),r=a.n(n),o=a(1),s=a.n(o),i=a(0),l=a.n(i),c=a(16),p=a(59),m=a(441),f=a.n(m),d=a(130),u=a(60),y=a(456),g=a(22),_=a(440),v=a(525),b=a(482),M=a(431),h=a(12),S=a.n(h),E=a(50),x=a(484),O=a(574),F=a(573),j=a(74),P=a(86),T=a(437),N=function(){var e=Object(P.a)().formatMessage;return l.a.createElement(E.Text,{component:E.TextVariants.h1},e(T.a.noItems))},w=function(e){var t=e.data,a=e.columns,n=e.isCompact,o=e.isLoading,s=e.actionResolver,c=e.areActionsDisabled,p=e.borders,m=e.routes,f=e.titlePlural,d=e.renderEmptyState,u=Object(i.useState)([]),y=r()(u,2),g=y[0],_=y[1];Object(i.useEffect)((function(){_(t)}),[t]);return o?l.a.createElement(j.d,null):0===g.length?d?d():l.a.createElement(N,null):l.a.createElement(i.Fragment,null,m(),l.a.createElement(x.b,{"aria-label":"".concat(f," table"),variant:n?x.e.compact:null,borders:p,rows:g,cells:a,actionResolver:s,areActionsDisabled:c},l.a.createElement(O.a,null),l.a.createElement(F.a,null)))};w.propTypes={borders:S.a.bool,isCompact:S.a.bool,columns:S.a.array.isRequired,renderEmptyState:S.a.func.isRequired,data:S.a.array,pagination:S.a.shape({limit:S.a.number,offset:S.a.number,count:S.a.number}),titlePlural:S.a.string,titleSingular:S.a.string,routes:S.a.func,actionResolver:S.a.func,areActionsDisabled:S.a.func,isLoading:S.a.bool},w.defaultProps={requests:[],isLoading:!1,isCompact:!1,borders:!0,routes:function(){return null},items:S.a.array,renderEmptyState:S.a.func};var R=w,C=a(17),D=a.n(C),B=a(433),k=a(453),z=a(73),I=a(457),A=a(438),L=a(470);function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(Object(a),!0).forEach((function(t){s()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var W={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},H=Object(M.a)((function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:g.a;n(!0),a(Object(_.a)(e,t,r)).then((function(){return n(!1)}))}),1e3),J=function(e,t){switch(t.type){case"setFetching":return q(q({},e),{},{isFetching:t.payload});case"setFilterValue":return q(q({},e),{},{filterValue:t.payload});case"setFilteringFlag":return q(q({},e),{},{isFiltering:t.payload});default:return e}};t.default=function(){var e=Object(P.a)().formatMessage,t=Object(i.useRef)([e(A.a.name),e(A.a.description),e(I.a.created),e(L.a.workflowColumn)]).current,a=Object(i.useReducer)(J,W),n=r()(a,2),o=n[0],s=o.filterValue,m=o.isFetching,M=o.isFiltering,h=n[1],S=Object(c.useSelector)((function(e){return e.platformReducer.platformInventories})),E=S.data,x=S.meta,O=Object(c.useSelector)((function(e){return e.platformReducer.selectedPlatform})),F=Object(c.useDispatch)(),j=Object(z.a)(["platform"]),T=r()(j,1)[0].platform,N=Object(p.g)();Object(i.useEffect)((function(){F(Object(_.a)(T,s,g.a)).then((function(){return h({type:"setFetching",payload:!1})})),Object(u.c)()}),[]);var w=E?function(e){return e.reduce((function(e,t,a){var n=t.id,r=t.name,o=t.description,s=t.created_at,i=t.workflow;return[].concat(D()(e),[{id:n,key:a,isOpen:!1,cells:[r,o,Object(u.d)(s),i]}])}),[])}(E):[],C=O?O.name:"";return l.a.createElement(i.Fragment,null,l.a.createElement(y.a,{schema:Object(v.a)({onFilterChange:function(e){h({type:"setFilterValue",payload:e}),H(T,e,F,(function(e){return h({type:"setFilteringFlag",payload:e})}),q(q({},x),{},{offset:0}))},searchValue:s,filterPlaceholder:e(L.a.inventoriesFilter),meta:x,apiRequest:function(e,t){return F(Object(_.a)(T,s,t))}})}),l.a.createElement(d.Section,{type:"content"},l.a.createElement(R,{title:C,data:w,columns:t,isLoading:m||M,actionResolver:function(e){return[{title:"Set approval",onClick:function(){return N.push({pathname:"/platform/platform-inventories/edit-workflow",search:"?platform=".concat(T,"&inventory=").concat(e.id)})}}]},renderEmptyState:function(){return l.a.createElement(b.b,{title:"No inventories",Icon:f.a,description:e(""===s?L.a.noInventoriesDescription:L.a.noInventoriesFilterDescription)})}})),x.count>0&&l.a.createElement(k.a,null,l.a.createElement(B.a,{dropDirection:"up",meta:x,apiRequest:function(e,t){return F(Object(_.a)(T,s,t))}})))}}}]);
//# sourceMappingURL=../sourcemaps/platform-inventories~31ecd969.js.map