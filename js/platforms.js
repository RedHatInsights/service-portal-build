(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{369:function(e,t,n){"use strict";var r=n(23),a=n.n(r),o=n(27),c=n.n(o),i=n(0),u=n.n(i),l=n(2),s=n.n(l),p=n(89),f=n(165),m=n(166),d=n(387),b=n(426),v=n(41),y=n.n(v),O=n(42),g=n(377),h=n.n(g),E=n(170),T=n.n(E),j=n(401);function P(){var e=y()(["\n  z-index: 1000;\n  fill: #72767b;\n"]);return P=function(){return e},e}function w(){var e=y()(["\n  z-index: 1000;\n  fill: #72767b;\n  :hover {\n    fill: var(--pf-global--Color--100);\n    cursor: pointer;\n  }\n"]);return w=function(){return e},e}function _(){var e=y()(["\n  position: absolute;\n  right: 8px;\n  top: 8px;\n"]);return _=function(){return e},e}function L(){var e=y()(["\n  position: absolute;\n  width: 300px;\n  background: transparent;\n"]);return L=function(){return e},e}function k(){var e=y()(["\n  position: relative;\n  width: 300px;\n  height: 36px;\n"]);return k=function(){return e},e}var x=O.b.div(k()),I=Object(O.b)(j.TextInput)(L()),R=O.b.span(_()),C=Object(O.b)(T.a)(w()),D=Object(O.b)(h.a)(P()),N=function(e){var t=e.searchValue,n=e.onFilterChange,r=e.placeholder,a=e.isClearable;return u.a.createElement(d.ToolbarItem,null,u.a.createElement(x,null,u.a.createElement(I,{placeholder:r,value:t,type:"text",onChange:n,"aria-label":r}),u.a.createElement(R,null,a&&t&&u.a.createElement(C,{width:"16",height:"16",onClick:function(){return n("")}})||u.a.createElement(D,null))))};N.propTypes={onFilterChange:s.a.func.isRequired,placeholder:s.a.string,searchValue:s.a.string,isClearable:s.a.bool},N.defaultProps={searchValue:"",isClearable:!1};var S=N,B=n(383),q=n(384),M=n(90),V=n(374);n.d(t,"b",(function(){return G}));var F=function(e){var t=e.title,n=c()(e,["title"]);return u.a.createElement(p.Button,n,t)};F.propTypes={title:s.a.string.isRequired};var A={TopToolbar:B.b,TopToolbarTitle:B.a,Toolbar:function(e){var t=a()({},e);return u.a.createElement(V.a,a()({className:"pf-u-pr-lg"},t))},ToolbarGroup:b.ToolbarGroup,ToolbarItem:d.ToolbarItem,FilterToolbarItem:S,Link:M.a,Level:f.Level,LevelItem:m.LevelItem,Button:F,AppTabs:q.a},G={TOP_TOOLBAR:"TopToolbar",TOP_TOOLBAR_TITLE:"TopToolbarTitle",TOOLBAR:"Toolbar",TOOLBAR_ITEM:"ToolbarItem",TOOLBAR_GROUP:"ToolbarGroup",FILTER_TOOLBAR_ITEM:"FilterToolbarItem",LINK:"Link",BUTTON:"Button",LEVEL:"Level",LEVEL_ITEM:"LevelItem",TABS:"AppTabs"};t.a=A},370:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(425),c=n.n(o),i=n(26);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=Object(i.g)();return l({},t,{push:function(n){return e?t.push(function(e){return"string"==typeof e?e.split("?")[0]:"object"===c()(e)?l({},e,{search:void 0}):e}(n)):t.push(n)}})}},373:function(e,t,n){"use strict";var r=n(23),a=n.n(r),o=n(27),c=n.n(o),i=n(0),u=n.n(i),l=n(2),s=n.n(l),p=n(394),f=n(169),m=n(52),d=function(e){var t=e.meta,n=t.limit,r=t.count,o=t.offset,i=e.apiProps,l=e.apiRequest,s=e.className,d=e.isCompact,b=c()(e,["meta","apiProps","apiRequest","className","isCompact"]);return u.a.createElement("div",{className:s},u.a.createElement(f.Pagination,a()({perPage:n||50,itemCount:r||0,onPerPageSelect:function(e,t){return l(i,{offset:o,limit:t})},page:Object(m.b)(n,o),onSetPage:function(e,t,r){var a={offset:Object(m.c)(t,n),limit:n},o=function(){return l(i,a)};return r?Object(p.a)(o,250)():o()},direction:"down",isCompact:d},b)))};d.propTypes={meta:s.a.shape({count:s.a.number,limit:s.a.number.isRequired,offset:s.a.number.isRequired}),apiRequest:s.a.func.isRequired,apiProps:s.a.any,className:s.a.string,isCompact:s.a.bool},d.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1},t.a=d},374:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n(41),a=n.n(r),o=n(42),c=n(413),i=n(165);function u(){var e=a()(["\n  @media screen and (min-width: 768px) {\n    flex-wrap: nowrap;\n  }\n"]);return u=function(){return e},e}function l(){var e=a()(["\n  background-color: #ffffff;\n  .pf-c-breadcrumb__item {\n    .active {\n      color: var(--pf-c-breadcrumb__item--Color);\n      text-decoration: none;\n      pointer-events: none;\n    }\n  }\n  h2 {\n    margin-bottom: 0 !important;\n  }\n  .top-toolbar-title {\n    min-width: 200px;\n  }\n  .top-toolbar-title-description {\n    word-break: break-word;\n  }\n"]);return l=function(){return e},e}function s(){var e=a()(["\n  background-color: #ffffff;\n  h2 {\n    margin-bottom: 0 !important;\n  }\n  position: relative;\n  top: 1px;\n"]);return s=function(){return e},e}var p=Object(o.b)(c.Toolbar)(s()),f=o.b.div(l()),m=Object(o.b)(i.Level)(u())},376:function(e,t,n){"use strict";var r=n(23),a=n.n(r),o=n(27),c=n.n(o),i=n(0),u=n.n(i),l=n(2),s=n.n(l),p=n(90),f=function(e){var t=e.children,n=e.pathname,r=c()(e,["children","pathname"]);return n?u.a.createElement(p.a,a()({pathname:n},r),t):t};f.propTypes={pathname:s.a.string,children:s.a.oneOfType([s.a.node,s.a.arrayOf(s.a.node)]).isRequired},t.a=f},378:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"getPlatforms",(function(){return b})),n.d(r,"getPlatform",(function(){return v})),n.d(r,"getPlatformItems",(function(){return y})),n.d(r,"getPlatformInventories",(function(){return O})),n.d(r,"getServiceOffering",(function(){return g}));var a=n(1),o=n.n(a),c=n(3),i=n(43),u=n.n(i),l=n(63),s=n(12),p=n(52);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var m=Object(l.a)(),d=Object(l.b)(),b=function(){return d.post("".concat(s.h,"/graphql"),{query:'\nquery {\n  application_types (filter: { name: "/insights/platform/catalog" }) {\n    id\n    name\n    sources {\n      id\n      name\n      source_type_id\n    }\n  }\n}'}).then((function(e){return e.data.application_types})).then((function(e){return u()(e,1)[0].sources}))},v=function(e){return m.get("".concat(s.h,"/sources/").concat(e))},y=function(e,t,n){var r=t?"&filter[name][contains_i]=".concat(t):"";return e?m.get("".concat(s.i,"/sources/").concat(e,"/service_offerings?filter[archived_at][nil]").concat(r).concat(n?"&limit=".concat(n.limit,"&offset=").concat(n.offset):"")):m.get("".concat(s.i,"/service_offerings"))},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p.a;return e?m.get("".concat(s.i,"/sources/").concat(e,"/service_inventories?filter[name][contains_i]=").concat(t).concat(n?"&limit=".concat(n.limit,"&offset=").concat(n.offset):"")):m.get("".concat(s.i,"/service_inventories?limit=").concat(n.limit,"&offset=").concat(n.offset))},g=function(e,t){return Promise.all([m.get("".concat(s.i,"/service_offerings/").concat(e)),m.get("".concat(s.h,"/sources/").concat(t)).then((function(e){return m.get("".concat(s.h,"/source_types/").concat(e.source_type_id)).then((function(t){var n=t.icon_url;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{icon_url:n})}))}))]).then((function(e){var t=u()(e,2);return{service:t[0],source:t[1]}}))};function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"c",(function(){return T})),n.d(t,"b",(function(){return j})),n.d(t,"d",(function(){return P})),n.d(t,"a",(function(){return w})),n.d(t,"e",(function(){return _}));var T=function(){return function(e){return e((function(e){return e({type:"".concat(c.k,"_PENDING")}),b().then((function(t){return e({type:"".concat(c.k,"_FULFILLED"),payload:t})})).catch((function(t){return e({type:"".concat(c.k,"_REJECTED"),payload:t})}))}))}},j=function(e,t,n){return{type:c.n,payload:y(e,t,n),meta:E({platformId:e,filter:t},n)}},P=function(e){return{type:c.j,payload:v(e)}},w=function(e,t,n){return{type:c.l,payload:O(e,t,n)}},_=function(){return{type:c.v,payload:g.apply(r,arguments)}}},379:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(409),c=n(410),i=n(36),u=n(376);t.a=function(){var e=Object(i.useSelector)((function(e){return e.breadcrumbsReducer.fragments}));return e.length<=1?null:a.a.createElement(o.Breadcrumb,null,e.map((function(t,n){var r=t.title,o=t.pathname,i=t.searchParams;return a.a.createElement(u.a,{pathname:e.length!==n+1?o:void 0,searchParams:i,nav:!0,exact:!0,key:o,className:"pf-c-breadcrumb__item"},a.a.createElement(c.BreadcrumbItem,{isActive:e.length===n+1},r))})))}},383:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n(23),a=n.n(r),o=n(27),c=n.n(o),i=n(0),u=n.n(i),l=n(2),s=n.n(l),p=n(166),f=n(22),m=n(44),d=n(424),b=n(53),v=n(379),y=n(374),O=function(e){var t=e.children,n=e.paddingBottom,r=e.breadcrumbs,o=(e.breadcrumbsSpacing,c()(e,["children","paddingBottom","breadcrumbs","breadcrumbsSpacing"]));return u.a.createElement(y.c,a()({className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg ".concat(n?"pf-u-pb-lg":"")},o),r&&u.a.createElement("div",{className:"pf-u-mb-md"}," ",u.a.createElement(v.a,null)),t)};O.propTypes={children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]).isRequired,paddingBottom:s.a.bool,breadcrumbs:s.a.bool,breadcrumbsSpacing:s.a.bool},O.defaultProps={paddingBottom:!0,breadcrumbs:!0},t.b=O;var g=function(e){var t=e.title,n=e.description,r=e.children,o=e.noData,l=c()(e,["title","description","children","noData"]);return u.a.createElement(i.Fragment,null,u.a.createElement(y.b,a()({className:Object(d.a)({"pf-u-mb-lg":!o})},l),u.a.createElement(p.LevelItem,null,u.a.createElement(m.TextContent,{className:"top-toolbar-title"},u.a.createElement(f.Text,{component:f.TextVariants.h2,className:"pf-u-m-0 pf-u-mr-md"},t),n&&u.a.createElement(f.Text,{className:"top-toolbar-title-description",component:f.TextVariants.p},n))),r))};g.propTypes={title:s.a.node,description:s.a.node,children:s.a.oneOfType([s.a.node,s.a.arrayOf(s.a.node)]),noData:s.a.bool},g.defaultProps={title:u.a.createElement(b.h,null)}},384:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(2),c=n.n(o),i=n(414),u=n(415),l=n(26),s=n(370),p=function(e){var t=e.tabItems,n=Object(s.a)().push,r=Object(l.h)(),o=r.pathname,c=r.search,p=t.find((function(e){var t=e.name;return o.includes(t)}));return a.a.createElement(i.Tabs,{activeKey:p?p.eventKey:0,onSelect:function(e,r){return n({pathname:t[r].name,search:c})}},t.map((function(e){return a.a.createElement(u.Tab,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name})})))};p.propTypes={tabItems:c.a.array.isRequired},t.a=p},385:function(e,t,n){"use strict";var r=n(23),a=n.n(r),o=n(27),c=n.n(o),i=n(0),u=n.n(i),l=n(2),s=n.n(l),p=n(369),f=Object(i.createContext)(),m=function(e){var t=e.component,n=c()(e,["component"]);return u.a.createElement(f.Consumer,null,(function(e){var r=e.componentMapper,a="string"==typeof t?r[t]:t;return u.a.createElement(a,n)}))};m.propTypes={component:s.a.oneOfType([s.a.string,s.a.node,s.a.func,s.a.element]).isRequired};var d=function e(t){return t.hidden?null:t.map((function(t){var n=t.fields,r=t.key,o=c()(t,["fields","key"]);return n?u.a.createElement(m,a()({key:r},o),e(n)):u.a.createElement(m,a()({key:r},o))}))},b=function(e){var t=e.schema,n=e.componentMapper;return u.a.createElement(f.Provider,{value:{render:d,componentMapper:n}},d(t.fields))};b.propTypes={schema:s.a.shape({fields:s.a.array.isRequired}).isRequired,componentMapper:s.a.object},b.defaultProps={componentMapper:p.a},t.a=b},390:function(e,t,n){"use strict";var r=n(41),a=n.n(r);function o(){var e=a()(["\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"]);return o=function(){return e},e}var c=n(42).b.div(o());t.a=c},391:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(0),a=n.n(r),o=n(2),c=n.n(o),i=n(89),u=n(97),l=n(98),s=n(99),p=n(428),f=n(22),m=n(44),d=n(90),b=function(e){var t=e.title,n=e.Icon,r=e.description,o=e.PrimaryAction,c=e.renderDescription;return a.a.createElement("div",{className:"pf-u-mt-xl"},a.a.createElement(u.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},a.a.createElement(l.EmptyStateIcon,{icon:n}),a.a.createElement(m.TextContent,null,a.a.createElement(f.Text,{component:f.TextVariants.h1},t)),a.a.createElement(s.EmptyStateBody,null,r,c()),a.a.createElement(p.EmptyStateSecondaryActions,null,o&&a.a.createElement(o,null))))};b.defaultProps={renderDescription:function(){return null}},b.propTypes={title:c.a.string.isRequired,Icon:c.a.any.isRequired,description:c.a.string.isRequired,PrimaryAction:c.a.any,renderDescription:c.a.func},t.b=b;var v=function(e){var t=e.url,n=e.label,r=e.hasPermission;return void 0!==r&&r&&a.a.createElement(d.a,{pathname:t,preserveSearch:!0},a.a.createElement(i.Button,{variant:"primary"},n))};v.propTypes={url:c.a.string.isRequired,label:c.a.string.isRequired}},395:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return p}));var r=n(41),a=n.n(r),o=n(42),c=n(66),i=n(96);function u(){var e=a()(["\n  position: relative;\n  ::after {\n    display: ",";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    content: '';\n    background-color: rgba(210, 210, 210, 0.5);\n    z-index: 1;\n    cursor: progress;\n  }\n"]);return u=function(){return e},e}function l(){var e=a()(["\n  height: 330px;\n  position: relative;\n"]);return l=function(){return e},e}var s=Object(o.b)(c.Card)(l()),p=Object(o.b)(i.GalleryItem)(u(),(function(e){return e.isDisabled?"block":"none"}))},396:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(2),c=n.n(o),i=n(397),u=n(22),l=n(101),s=n(53),p=function(){return a.a.createElement("div",null,a.a.createElement(u.Text,{component:u.TextVariants.h1},"No items found"))},f=function(e){var t=e.isLoading,n=e.items,r=e.renderEmptyState;return t?a.a.createElement(s.b,null):0===n.length?r?r():a.a.createElement(p,null):a.a.createElement(i.Section,{type:"content"},a.a.createElement(l.Gallery,{gutter:"md",className:"content-gallery"},n))};f.propTypes={isLoading:c.a.bool,items:c.a.array,renderEmptyState:c.a.func},t.a=f},399:function(e,t,n){"use strict";var r=n(27),a=n.n(r),o=n(41),c=n.n(o),i=n(0),u=n.n(i),l=n(42),s=n(2),p=n.n(s);function f(){var e=c()(["\n  overflow: hidden;\n"]);return f=function(){return e},e}var m=l.b.div(f()),d=function(e){var t=e.toDisplay,n=void 0===t?[]:t,r=a()(e,["toDisplay"]);return n.map((function(e){return u.a.createElement(m,{key:"card-prop-".concat(e)},r[e])}))};d.propTypes={toDisplay:p.a.arrayOf(p.a.oneOfType([p.a.string,p.a.node,p.a.arrayOf(p.a.node)]))},d.defaultProps={toDisplay:[]},t.a=d},400:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(41),a=n.n(r),o=n(42),c=n(67);function i(){var e=a()(["\n  height: 230px;\n  overflow: hidden;\n  padding: 0;\n  margin: 0 24px 24px;\n"]);return i=function(){return e},e}var u=Object(o.b)(c.CardBody)(i())},407:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardHeader=void 0;var r=l(n(2)),a=function(e){if(e&&e.__esModule)return e;var t=u();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}}n.default=e,t&&t.set(e,n);return n}(n(0)),o=n(4),c=l(n(94)),i=l(n(177));function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=function(e){var t=e.children,n=void 0===t?null:t,r=e.className,u=void 0===r?"":r,l=p(e,["children","className"]);return a.createElement("div",s({className:(0,o.css)(c.default.cardHeader,i.default.title,i.default.modifiers.md,u)},l),n)};t.CardHeader=f,f.propTypes={children:r.default.node,className:r.default.string}},408:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardFooter=void 0;var r=u(n(2)),a=function(e){if(e&&e.__esModule)return e;var t=i();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}}n.default=e,t&&t.set(e,n);return n}(n(0)),o=u(n(94)),c=n(4);function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=function(e){var t=e.children,n=void 0===t?null:t,r=e.className,i=void 0===r?"":r,u=e.component,p=void 0===u?"div":u,f=s(e,["children","className","component"]),m=p;return a.createElement(m,l({className:(0,c.css)(o.default.cardFooter,i)},f),n)};t.CardFooter=p,p.propTypes={children:r.default.node,className:r.default.string,component:r.default.any}},461:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return u}));var r=n(384),a=n(369),o=n(373),c=function(e){var t=e.searchValue,n=e.onFilterChange,r=e.title;return{fields:[{component:a.b.TOP_TOOLBAR,key:"platforms-toolbar",fields:[{component:a.b.TOP_TOOLBAR_TITLE,key:"platforms-toolbar-title",title:r},{component:a.b.LEVEL,key:"platforms-toolbar-actions",fields:[{component:a.b.LEVEL_ITEM,key:"input-level-item",fields:[{component:a.b.FILTER_TOOLBAR_ITEM,key:"platforms-toolbar-filter-input",searchValue:t,onFilterChange:n,placeholder:"Filter by platform..."}]},{component:a.b.LEVEL_ITEM,key:"pagination-level-item",fields:[]}]}]}]}},i=function(e){var t=e.title,n=e.paddingBottom,o=e.tabItems;return{fields:[{component:a.b.TOP_TOOLBAR,key:"platforms-toolbar",paddingBottom:n,fields:[{component:a.b.TOP_TOOLBAR_TITLE,key:"platforms-toolbar-title",title:t},{component:a.b.LEVEL_ITEM,key:"tabs-level-item",fields:o?[{component:r.a,key:"platform-tabs",tabItems:o}]:[]}]}]}},u=function(e){var t=e.searchValue,n=e.onFilterChange,r=e.meta,c=e.apiRequest,i=e.filterPlaceholder;return{fields:[{component:a.b.TOOLBAR,key:"platforms-filter-toolbar",className:"pf-u-pt-md pf-u-pb-md pf-u-pr-lg pf-u-pl-lg",fields:[{component:a.b.LEVEL,key:"platforms-toolbar-actions",className:"pf-m-grow",fields:[{component:a.b.LEVEL_ITEM,key:"input-level-item",fields:[{component:a.b.FILTER_TOOLBAR_ITEM,key:"platforms-toolbar-filter-input",searchValue:t,onFilterChange:n,placeholder:i}]},{component:a.b.LEVEL_ITEM,key:"pagination-level-item",fields:r.count>0?[{component:o.a,key:"platform-pagination",apiRequest:c,meta:r,isCompact:!0}]:[]}]}]}]}}},545:function(e,t,n){e.exports=n.p+"fonts/platform-default.svg"},546:function(e,t,n){e.exports=n.p+"fonts/platform-openshift.svg"},547:function(e,t,n){e.exports=n.p+"fonts/platform-amazon.png"},548:function(e,t,n){e.exports=n.p+"fonts/platform-tower.png"},645:function(e,t,n){"use strict";n.r(t);var r=n(23),a=n.n(r),o=n(43),c=n.n(o),i=n(0),u=n.n(i),l=n(36),s=n(22),p=n(44),f=n(377),m=n.n(f),d=n(91),b=n(385),v=n(396),y=n(378),O=n(1),g=n.n(O),h=n(27),E=n.n(h),T=n(2),j=n.n(T),P=n(407),w=n(408),_=n(96),L=n(545),k=n.n(L),x=n(546),I=n.n(x),R=n(547),C=n.n(R),D=n(548),N=n.n(D),S=function(e){var t=e.src,n=E()(e,["src"]);return u.a.createElement("img",a()({src:t},n))};S.propTypes={src:j.a.string.isRequired};var B=S,q=n(399),M=n(54),V=n(390),F=n(90),A=n(395),G=n(400);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var U=["description","modified"],z={1:I.a,2:C.a,3:N.a},H=function(e){var t=e.name,n=e.id,r=E()(e,["name","id"]);return u.a.createElement(_.GalleryItem,null,u.a.createElement(A.a,{key:n},u.a.createElement(P.CardHeader,null,u.a.createElement(B,{src:z[r.source_type_id]||k.a,width:"80",height:"40"})),u.a.createElement(G.a,null,u.a.createElement(p.TextContent,null,u.a.createElement(F.a,{pathname:M.r,searchParams:{platform:n}},u.a.createElement(s.Text,{title:t,className:"pf-u-mb-0",component:s.TextVariants.h3},u.a.createElement(V.a,null,t)))),u.a.createElement(q.a,a()({},function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({name:t},r),{toDisplay:U}))),u.a.createElement(w.CardFooter,null)))};H.propTypes={history:j.a.object,imageUrl:j.a.string,name:j.a.string,source_type_id:j.a.string,id:j.a.string};var W=H,J=n(461),Q=n(391);t.default=function(){var e=Object(i.useState)(""),t=c()(e,2),n=t[0],r=t[1],o=Object(l.useSelector)((function(e){var t=e.platformReducer;return{platforms:t.platforms,isLoading:t.isPlatformDataLoading}})),f=o.platforms,O=o.isLoading,g=Object(l.useDispatch)();Object(i.useEffect)((function(){g(Object(y.c)()),Object(d.d)(),insights.chrome.appNavClick({id:"platforms",secondaryNav:!0})}),[]);var h=function(){return u.a.createElement(i.Fragment,null,u.a.createElement(p.TextContent,null,u.a.createElement(s.Text,{component:s.TextVariants.p},"Configure a source in order to add products to portfolios."),u.a.createElement(s.Text,{component:s.TextVariants.p},"To connect to a source, go to"," ",u.a.createElement("a",{href:"".concat(document.baseURI,"settings/sources")},"Catalog sources")," under Settings."),u.a.createElement(s.Text,{component:s.TextVariants.p},u.a.createElement("a",{href:"javascript:void(0)"},"Learn more in the documentation"))))},E={items:f.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){return u.a.createElement(W,a()({key:e.id},e))})),isLoading:O&&0===f.length};return u.a.createElement(i.Fragment,null,u.a.createElement(b.a,{schema:Object(J.b)({onFilterChange:function(e){return r(e)},searchValue:n,title:"Platforms"})}),u.a.createElement(v.a,a()({},E,{renderEmptyState:function(){return u.a.createElement(Q.b,{title:"No platforms yet",renderDescription:h,Icon:m.a})}})))}}}]);
//# sourceMappingURL=../sourcemaps/platforms.js.map