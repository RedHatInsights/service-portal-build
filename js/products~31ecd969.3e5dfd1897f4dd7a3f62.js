(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{43:function(e,t,n){
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var a=arguments[r];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=n.apply(null,a);i&&e.push(i)}else if("object"===o)for(var c in a)t.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("classnames",[],(function(){return n})):window.classNames=n}()},548:function(e,t,n){"use strict";var r=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a};var a=function(e,t){if(null==e)return{};var n,a,o=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o};t._objectWithoutProperties=a},550:function(e,t,n){"use strict";var r=n(549);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(r.a)(e,t,n)}},552:function(e,t,n){"use strict";var r=n(547),a=n.n(r),o=n(68),i=n.n(o),c=n(0),s=n.n(c),u=n(1),l=n.n(u),p=n(549),f=n(237),d=n(70),m=function(e){var t=e.meta,n=t.limit,r=t.count,o=t.offset,c=e.apiProps,u=e.apiRequest,l=e.className,m=e.isCompact,b=i()(e,["meta","apiProps","apiRequest","className","isCompact"]);return s.a.createElement("div",{className:l},s.a.createElement(f.Pagination,a()({perPage:n||50,itemCount:r||0,onPerPageSelect:function(e,t){return u(c,{offset:o,limit:t})},page:Object(d.b)(n,o),onSetPage:function(e,t,r){var a={offset:Object(d.c)(t,n),limit:n},o=function(){return u(c,a)};return r?Object(p.a)(o,250)():o()},direction:"down",isCompact:m},b)))};m.propTypes={meta:l.a.shape({count:l.a.number,limit:l.a.number.isRequired,offset:l.a.number.isRequired}),apiRequest:l.a.func.isRequired,apiProps:l.a.any,className:l.a.string,isCompact:l.a.bool},m.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1},t.a=m},554:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0}),n(140);var a=n(233),o=n(232),i=n(548),c=r(n(0)),s=r(n(1)),u=r(n(43)),l=function(e){var t=e.type,n=e.children,r=e.className,s=i._objectWithoutProperties(e,["type","children","className"]),l=u(r,o._defineProperty({},"ins-l-".concat(t),void 0!==t));return c.createElement("section",a._extends({},s,{className:l})," ",n," ")};l.propTypes={type:s.string,className:s.string,children:s.any.isRequired},t.Section=l},556:function(e,t,n){"use strict";n.d(t,"c",(function(){return P})),n.d(t,"b",(function(){return _})),n.d(t,"d",(function(){return T})),n.d(t,"a",(function(){return w})),n.d(t,"e",(function(){return D}));var r={};n.r(r),n.d(r,"getPlatforms",(function(){return y})),n.d(r,"getPlatform",(function(){return g})),n.d(r,"getPlatformItems",(function(){return v})),n.d(r,"getPlatformInventories",(function(){return h})),n.d(r,"getServiceOffering",(function(){return O}));var a=n(2),o=n.n(a),i=n(4),c=n(36),s=n.n(c),u=n(99),l=n(12),p=n(70);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=Object(u.a)(),b=Object(u.b)(),y=function(){return b.post("".concat(l.i,"/graphql"),{query:'\nquery {\n  application_types (filter: { name: "/insights/platform/catalog" }) {\n    id\n    name\n    sources {\n      id\n      name\n      source_type_id\n    }\n  }\n}'}).then((function(e){return e.data.application_types})).then((function(e){return s()(e,1)[0].sources}))},g=function(e){return m.get("".concat(l.i,"/sources/").concat(e))},v=function(e,t,n){var r=t?"&filter[name][contains_i]=".concat(t):"";return e?m.get("".concat(l.j,"/sources/").concat(e,"/service_offerings?filter[archived_at][nil]").concat(r).concat(n?"&limit=".concat(n.limit,"&offset=").concat(n.offset):"")):m.get("".concat(l.j,"/service_offerings"))},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p.a;return e?m.get("".concat(l.j,"/sources/").concat(e,"/service_inventories?filter[name][contains_i]=").concat(t).concat(n?"&limit=".concat(n.limit,"&offset=").concat(n.offset):"")):m.get("".concat(l.j,"/service_inventories?limit=").concat(n.limit,"&offset=").concat(n.offset))},O=function(e,t){return Promise.all([m.get("".concat(l.j,"/service_offerings/").concat(e)),m.get("".concat(l.i,"/sources/").concat(t)).then((function(e){return m.get("".concat(l.i,"/source_types/").concat(e.source_type_id)).then((function(t){var n=t.icon_url;return d(d({},e),{},{icon_url:n})}))}))]).then((function(e){var t=s()(e,2);return{service:t[0],source:t[1]}}))};function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(){return function(e){return e({type:"".concat(i.k,"_PENDING")}),y().then((function(t){return e({type:"".concat(i.k,"_FULFILLED"),payload:t})})).catch((function(t){return e({type:"".concat(i.k,"_REJECTED"),payload:t})}))}},_=function(e,t,n){return{type:i.n,payload:v(e,t,n),meta:j({platformId:e,filter:t},n)}},T=function(e){return{type:i.j,payload:g(e)}},w=function(e,t,n){return{type:i.l,payload:h(e,t,n)}},D=function(){return{type:i.v,payload:O.apply(r,arguments)}}},557:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n(0),a=n.n(r),o=n(1),i=n.n(o),c=n(42),s=n(484),u=n(485),l=n(486),p=n(487),f=n(46),d=n(69),m=n(551),b=function(e){var t=e.title,n=e.Icon,r=e.description,o=e.PrimaryAction,i=e.renderDescription;return a.a.createElement("div",{className:"pf-u-mt-xl"},a.a.createElement(s.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},a.a.createElement(u.EmptyStateIcon,{icon:n}),a.a.createElement(d.TextContent,null,a.a.createElement(f.Text,{component:f.TextVariants.h1},t)),a.a.createElement(l.EmptyStateBody,null,r,i()),a.a.createElement(p.EmptyStateSecondaryActions,null,o&&a.a.createElement(o,null))))};b.defaultProps={renderDescription:function(){return null}},b.propTypes={title:i.a.string.isRequired,Icon:i.a.any.isRequired,description:i.a.string,PrimaryAction:i.a.any,renderDescription:i.a.func},t.b=b;var y=function(e){var t=e.url,n=e.label,r=e.hasPermission,o=void 0!==r&&r,i=e.id;return o&&a.a.createElement(m.a,{id:i,pathname:t,preserveSearch:!0},a.a.createElement(c.Button,{variant:"primary"},n))};y.propTypes={url:i.a.string.isRequired,label:i.a.string.isRequired,id:i.a.string,hasPermission:i.a.bool}},562:function(e,t,n){"use strict";var r=n(68),a=n.n(r),o=n(28),i=n.n(o),c=n(0),s=n.n(c),u=n(29),l=n(1),p=n.n(l);function f(){var e=i()(["\n  overflow: hidden;\n"]);return f=function(){return e},e}var d=u.b.div(f()),m=function(e){var t=e.toDisplay,n=void 0===t?[]:t,r=a()(e,["toDisplay"]);return n.map((function(e){return s.a.createElement(d,{key:"card-prop-".concat(e)},r[e])}))};m.propTypes={toDisplay:p.a.arrayOf(p.a.oneOfType([p.a.string,p.a.node,p.a.arrayOf(p.a.node)]))},m.defaultProps={toDisplay:[]},t.a=m},563:function(e,t,n){"use strict";var r=n(28),a=n.n(r);function o(){var e=a()(["\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"]);return o=function(){return e},e}var i=n(29).b.div(o());t.a=i},564:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(28),a=n.n(r),o=n(29),i=n(105);function c(){var e=a()(["\n  height: 230px;\n  overflow: hidden;\n  padding: 0 !important;\n  margin: 0 24px 24px;\n"]);return c=function(){return e},e}var s=Object(o.b)(i.CardBody)(c())},565:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(68),a=n.n(r),o=n(28),i=n.n(o),c=n(0),s=n.n(c),u=n(29),l=n(104),p=n(145);function f(){var e=i()(["\n  position: relative;\n  ::after {\n    display: ",";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    content: '';\n    background-color: rgba(210, 210, 210, 0.5);\n    z-index: 1;\n    cursor: progress;\n  }\n"]);return f=function(){return e},e}function d(){var e=i()(["\n  height: 330px;\n  position: relative;\n"]);return d=function(){return e},e}var m=Object(u.b)(l.Card)(d()),b=Object(u.b)((function(e){e.isDisabled;var t=a()(e,["isDisabled"]);return s.a.createElement(p.GalleryItem,t)}))(f(),(function(e){return e.isDisabled?"block":"none"}))},567:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),i=n.n(o),c=n(554),s=n(46),u=n(147),l=n(71),p=function(){return a.a.createElement("div",null,a.a.createElement(s.Text,{component:s.TextVariants.h1},"No items found"))},f=function(e){var t=e.isLoading,n=e.items,r=e.renderEmptyState;return t?a.a.createElement(l.b,null):0===n.length?r?r():a.a.createElement(p,null):a.a.createElement(c.Section,{type:"content"},a.a.createElement(u.Gallery,{gutter:"md",className:"content-gallery"},n))};f.propTypes={isLoading:i.a.bool,items:i.a.array,renderEmptyState:i.a.func},t.a=f},568:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),i=n.n(o),c=function(e){var t=e.children;return a.a.createElement("div",{className:"pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto"},t)};c.propTypes={children:i.a.oneOfType([i.a.node,i.a.arrayOf(i.a.node)])},t.a=c},577:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),i=n.n(o),c=n(483),s=function(e){var t=e.handleCheck,n=e.isChecked,r=e.id;return a.a.createElement(c.Checkbox,{onClick:function(e){return e.stopPropagation()},isChecked:n,onChange:t,"aria-label":"card checkbox",id:r})};s.propTypes={handleCheck:i.a.func,isChecked:i.a.bool,id:i.a.string},t.a=s},578:function(e,t,n){"use strict";var r=n(2),a=n.n(r),o=n(547),i=n.n(o),c=n(68),s=n.n(c),u=n(0),l=n.n(u),p=n(1),f=n.n(p),d=n(46),m=n(69),b=n(562),y=n(579),g=n(563),v=n(564),h=function(e){var t=e.name,n=(e.display_name,e.distributor),r=e.pathname,a=e.searchParams,o=e.preserveSearch,c=e.portfolioName,p=s()(e,["name","display_name","distributor","pathname","searchParams","preserveSearch","portfolioName"]);return l.a.createElement(v.a,null,l.a.createElement(m.TextContent,null,l.a.createElement(y.a,{pathname:r,searchParams:a,preserveSearch:o},l.a.createElement(d.Text,{component:d.TextVariants.h3,title:t},l.a.createElement(g.a,null,t))),n&&l.a.createElement(d.Text,{component:d.TextVariants.small},n),c&&l.a.createElement(u.Fragment,null,l.a.createElement(d.Text,{className:"pf-u-mb-0",component:"small"},"Portfolio"),l.a.createElement(d.Text,null,c))),l.a.createElement(b.a,i()({toDisplay:[p.description?"description":"long_description"]},p)))};h.propTypes={name:f.a.string,display_name:f.a.string,distributor:f.a.string,long_description:f.a.string,description:f.a.string,pathname:f.a.string,preserveSearch:f.a.bool,searchParams:f.a.shape(a()({},f.a.string,f.a.string)),portfolioName:f.a.string},t.a=h},580:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return p}));var r=n(2),a=n.n(r),o=n(68),i=n.n(o),c=n(558);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function(e){var t=e.groupName,n=e.hidden,r=void 0!==n&&n,a=i()(e,["groupName","hidden"]);return{component:c.b.TOOLBAR_GROUP,key:"".concat(t,"/single-toolbar-item-group"),fields:r?[]:[{component:c.b.TOOLBAR_ITEM,key:"".concat(t,"/single-toolbar-item"),fields:[a]}]}},p=function(e){var t=e.pathname,n=e.preserveSearch,r=i()(e,["pathname","preserveSearch"]);return{component:c.b.LINK,pathname:t,preserveSearch:n,key:"".concat(r.key,"/button-link"),isDisabled:r.isDisabled,fields:[u({component:c.b.BUTTON},r)]}}},603:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),i=n.n(o),c=n(489),s=n(490),u=n(100),l=n(12),p=n(574),f=n(577),d=n(578),m=n(565),b=function(e){return a.a.createElement(m.b,{isDisabled:e.removeInProgress&&e.isSelected},a.a.createElement(m.a,null,a.a.createElement(c.CardHeader,{className:"card_header"},a.a.createElement(u.Level,null,a.a.createElement(p.a,{src:"".concat(l.c,"/portfolio_items/").concat(e.id,"/icon"),sourceId:e.service_offering_source_ref}),e.isSelectable&&a.a.createElement(f.a,{handleCheck:function(){return e.onSelect(e.id)},isChecked:e.isSelected,id:e.id}))),a.a.createElement(d.a,e),a.a.createElement(s.CardFooter,null)))};b.propTypes={id:i.a.string,platformId:i.a.string,service_offering_source_ref:i.a.string,isSelectable:i.a.bool,isSelected:i.a.bool,onSelect:i.a.func,orderUrl:i.a.string,removeInProgress:i.a.bool,portfolio_id:i.a.string,metadata:i.a.shape({user_capabilities:i.a.shape({destroy:i.a.bool}).isRequired}).isRequired},t.a=b},682:function(e,t,n){"use strict";n.r(t);var r=n(547),a=n.n(r),o=n(36),i=n.n(o),c=n(2),s=n.n(c),u=n(0),l=n.n(u),p=n(30),f=n(503),d=n.n(f),m=n(482),b=n.n(m),y=n(561),g=n(143),v=n(603),h=n(558),O=n(580),E=n(552),j=function(e){var t=e.meta,n=e.fetchProducts,r=e.isLoading,a=e.filterProps,o=a.searchValue,i=a.onFilterChange,c=a.placeholder;return{fields:[{component:h.b.TOP_TOOLBAR,key:"products-top-toolbar",fields:[{component:h.b.TOP_TOOLBAR_TITLE,key:"products-toolbar-title",title:"Products",description:"All products collected from your portfolios",noData:t.noData},{component:h.b.LEVEL,key:"Products-actions",fields:t.noData?[]:[{component:h.b.TOOLBAR,key:"main-portfolio-toolbar",fields:[Object(O.b)({groupName:"filter-group",component:h.b.FILTER_TOOLBAR_ITEM,key:"filter-input",searchValue:o,onFilterChange:i,placeholder:c,isClearable:!0})]},{component:h.b.LEVEL_ITEM,key:"pagination-item",fields:t.count>0?[{component:E.a,key:"products-pagination",meta:t,apiProps:o,apiRequest:n,isDisabled:r,isCompact:!0}]:[]}]}]}]}},P=n(570),_=n(70),T=n(567),w=n(556),D=n(550),S=n(557),k=n(42),C=n(69),x=n(46),N=n(191),R=n(10),F=n(568),I=n(152),L=n(76);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=Object(D.a)((function(e,t,n){n(!0),t(Object(y.e)(e,_.a)).then((function(){return n(!1)}))}),1e3),B={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},U=function(e,t){switch(t.type){case"setFetching":return V(V({},e),{},{isFetching:t.payload});case"setFilterValue":return V(V({},e),{},{filterValue:t.payload});case"setFilteringFlag":return V(V({},e),{},{isFiltering:t.payload})}return e};t.default=function(){var e,t=Object(I.a)(),n=Object(u.useContext)(N.a).release,r=Object(u.useReducer)(U,V(V({},B),{},{filterValue:(null==t||null===(e=t.products)||void 0===e?void 0:e.filter)||""})),o=i()(r,2),c=o[0],s=c.isFetching,f=c.filterValue,m=c.isFiltering,h=o[1],O=Object(u.useContext)(L.a).userIdentity.identity.user.is_org_admin,_=Object(p.useDispatch)(),D=Object(p.useSelector)((function(e){return e.portfolioReducer.portfolioItems})),q=D.data,G=D.meta;Object(u.useEffect)((function(){var e;Promise.all([_(Object(y.e)(null==t||null===(e=t.products)||void 0===e?void 0:e.filter,null==t?void 0:t.products)),_(Object(w.c)())]).then((function(){return h({type:"setFetching",payload:!1})})),Object(g.c)(),insights.chrome.appNavClick({id:"products",secondaryNav:!0})}),[]);var M=function(e){h({type:"setFilterValue",payload:e}),A(e,_,(function(e){return h({type:"setFilteringFlag",payload:e})}))},J=q.map((function(e){return l.a.createElement(v.a,a()({key:e.id,pathname:e.portfolio_id&&R.t},(n=(t=e).portfolio_id,r=t.id,o=t.service_offering_source_ref,n&&r&&o?{pathname:n&&R.t,searchParams:{portfolio:n,"portfolio-item":r,source:o}}:{}),e,{toDisplay:[]}));var t,n,r,o})),z={PrimaryAction:G.noData?function(){return O&&l.a.createElement("a",{href:"".concat(n,"settings/sources/new")},l.a.createElement(k.Button,{variant:"primary"},"Add source"))}:function(){return l.a.createElement(k.Button,{variant:"link",onClick:function(){return M("")}},"Clear all filters")},title:G.noData?"No products yet":"No results found",renderDescription:function(){return l.a.createElement(u.Fragment,null,l.a.createElement(C.TextContent,null,l.a.createElement(x.Text,{component:x.TextVariants.p},G.noData?"Configure a source and add products into portfolios.":"No results match the filter criteria. Remove all filters or clear all filters to show results."),O?l.a.createElement(x.Text,{component:x.TextVariants.p},"To connect to a source, go to"," ",l.a.createElement("a",{href:"".concat(document.baseURI,"settings/sources")},"Sources")," under Settings."):l.a.createElement(x.Text,null,"Contact your organization administrator to setup sources for Catalog.")))},Icon:G.noData?d.a:b.a};return l.a.createElement(u.Fragment,null,l.a.createElement(P.a,{schema:j({filterProps:{searchValue:f,onFilterChange:M,placeholder:"Filter by product"},title:"Products",isLoading:m||s,meta:G,fetchProducts:function(){return _(y.e.apply(void 0,arguments))}})}),l.a.createElement(T.a,{isLoading:m||s,items:J,renderEmptyState:function(){return l.a.createElement(S.b,z)}}),G.count>0&&l.a.createElement(F.a,null,l.a.createElement(E.a,{dropDirection:"up",meta:G,apiRequest:function(e,n){var r;return _(Object(y.e)(null==t||null===(r=t.products)||void 0===r?void 0:r.filter,n))}})))}}}]);
//# sourceMappingURL=../sourcemaps/products~31ecd969.js.map