(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{337:function(e,n,t){"use strict";var r=t(1),a=t.n(r),o=t(27),i=t.n(o),c=t(47),u=t.n(c),l=t(83),s=t.n(l),p=t(84),m=t.n(p),f=t(0),d=t.n(f),b=t(3),v=t.n(b),h=t(48),y=t(25),O=t(85);function g(){var e=m()(["\n  pointer-events: ",";\n"]);return g=function(){return e},e}function T(){var e=m()(["\n  pointer-events: ",";\n"]);return T=function(){return e},e}var E=Object(O.b)(h.b)(T(),(function(e){return e.isDisabled?"none":"initial"})),j=Object(O.b)(h.c)(g(),(function(e){return e.isDisabled?"none":"initial"})),P=function(e,n,t){var r=Object.entries(n).map((function(e){var n=s()(e,2),t=n[0],r=n[1];return"".concat(t,"=").concat(r)})).join("&");return t?"".concat(e).concat(r.length>0?"&".concat(r):""):r.length>0?"?".concat(r):""},w=function(e){var n=e.pathname,t=e.searchParams,r=e.nav,a=e.preserveSearch,o=u()(e,["pathname","searchParams","nav","preserveSearch"]),c=Object(y.h)().search,l=r?j:E,s={pathname:n,search:P(c,t,a)};return d.a.createElement(l,i()({to:s},o))};w.propTypes={pathname:v.a.string.isRequired,searchParams:v.a.shape(a()({},v.a.string,v.a.string)),nav:v.a.bool,preserveSearch:v.a.bool},w.defaultProps={nav:!1,preserveSearch:!1,searchParams:{}},n.a=w},341:function(e,n,t){"use strict";var r=t(27),a=t.n(r),o=t(47),i=t.n(o),c=t(0),u=t.n(c),l=t(3),s=t.n(l),p=t(86),m=t(152),f=t(153),d=t(373),b=t(414),v=t(84),h=t.n(v),y=t(85),O=t(349),g=t.n(O),T=t(157),E=t.n(T),j=t(386);function P(){var e=h()(["\n  z-index: 1000;\n  fill: #72767b;\n"]);return P=function(){return e},e}function w(){var e=h()(["\n  z-index: 1000;\n  fill: #72767b;\n  :hover {\n    fill: var(--pf-global--Color--100);\n    cursor: pointer;\n  }\n"]);return w=function(){return e},e}function x(){var e=h()(["\n  position: absolute;\n  right: 8px;\n  top: 8px;\n"]);return x=function(){return e},e}function R(){var e=h()(["\n  position: absolute;\n  width: 300px;\n  background: transparent;\n"]);return R=function(){return e},e}function L(){var e=h()(["\n  position: relative;\n  width: 300px;\n  height: 36px;\n"]);return L=function(){return e},e}var I=y.b.div(L()),S=Object(y.b)(j.TextInput)(R()),k=y.b.span(x()),C=Object(y.b)(E.a)(w()),D=Object(y.b)(g.a)(P()),q=function(e){var n=e.searchValue,t=e.onFilterChange,r=e.placeholder,a=e.isClearable;return u.a.createElement(d.ToolbarItem,null,u.a.createElement(I,null,u.a.createElement(S,{placeholder:r,value:n,type:"text",onChange:t,"aria-label":r}),u.a.createElement(k,null,a&&n&&u.a.createElement(C,{width:"16",height:"16",onClick:function(){return t("")}})||u.a.createElement(D,null))))};q.propTypes={onFilterChange:s.a.func.isRequired,placeholder:s.a.string,searchValue:s.a.string,isClearable:s.a.bool},q.defaultProps={searchValue:"",isClearable:!1};var B=q,N=t(361),_=t(362),A=t(337),V=t(357);t.d(n,"b",(function(){return G}));var M=function(e){var n=e.title,t=i()(e,["title"]);return u.a.createElement(p.Button,t,n)};M.propTypes={title:s.a.string.isRequired};var F={TopToolbar:N.b,TopToolbarTitle:N.a,Toolbar:function(e){var n=a()({},e);return u.a.createElement(V.a,a()({className:"pf-u-pr-lg"},n))},ToolbarGroup:b.ToolbarGroup,ToolbarItem:d.ToolbarItem,FilterToolbarItem:B,Link:A.a,Level:m.Level,LevelItem:f.LevelItem,Button:M,AppTabs:_.a},G={TOP_TOOLBAR:"TopToolbar",TOP_TOOLBAR_TITLE:"TopToolbarTitle",TOOLBAR:"Toolbar",TOOLBAR_ITEM:"ToolbarItem",TOOLBAR_GROUP:"ToolbarGroup",FILTER_TOOLBAR_ITEM:"FilterToolbarItem",LINK:"Link",BUTTON:"Button",LEVEL:"Level",LEVEL_ITEM:"LevelItem",TABS:"AppTabs"};n.a=F},343:function(e,n,t){"use strict";var r=t(27),a=t.n(r),o=t(47),i=t.n(o),c=t(0),u=t.n(c),l=t(3),s=t.n(l),p=t(367),m=t(155),f=t(49),d=function(e){var n=e.meta,t=n.limit,r=n.count,o=n.offset,c=e.apiProps,l=e.apiRequest,s=e.className,d=e.isCompact,b=i()(e,["meta","apiProps","apiRequest","className","isCompact"]);return u.a.createElement("div",{className:s},u.a.createElement(m.Pagination,a()({perPage:t||50,itemCount:r||0,onPerPageSelect:function(e,n){return l(c,{offset:o,limit:n})},page:Object(f.b)(t,o),onSetPage:function(e,n,r){var a={offset:Object(f.c)(n,t),limit:t},o=function(){return l(c,a)};return r?Object(p.a)(o,250)():o()},direction:"down",isCompact:d},b)))};d.propTypes={meta:s.a.shape({count:s.a.number,limit:s.a.number.isRequired,offset:s.a.number.isRequired}),apiRequest:s.a.func.isRequired,apiProps:s.a.any,className:s.a.string,isCompact:s.a.bool},d.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1},n.a=d},344:function(e,n,t){"use strict";var r=t(1),a=t.n(r),o=t(415),i=t.n(o),c=t(25);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.a=function(e){var n=Object(c.g)();return l({},n,{push:function(t){return e?n.push(function(e){return"string"==typeof e?e.split("?")[0]:"object"===i()(e)?l({},e,{search:void 0}):e}(t)):n.push(t)}})}},347:function(e,n,t){"use strict";var r=t(1),a=t.n(r),o=t(28),i=t.n(o),c=t(0),u=t.n(c),l=t(394),s=t.n(l),p=t(355);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}t.d(n,"c",(function(){return d})),t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return h})),t.d(n,"d",(function(){return y}));var d=function(){return document.getElementById("root").scrollTo({behavior:"smooth",top:0,left:0})},b=function(e,n){var t=e.display_name,r=e.name;return(t||r).trim().toLowerCase().includes(n.toLowerCase())},v={PortfolioItem:["name","description","long_description","distributor","documentation_url","support_url"],Portfolio:["description"]},h=function(e,n,t){var r,o,c=t.getState().openApiReducer.schema.components.schemas,u=Object.keys(e).filter((function(e){return!s()(c,"".concat(n,".properties.").concat(e,".readOnly"))})).reduce((function(n,t){return e[t]?f({},n,a()({},t,e[t])):n}),{});return r=u,o=v[n],[].concat(i()(Object.keys(r)),i()(o)).reduce((function(e,n){return f({},e,a()({},n,void 0===r[n]?null:r[n]))}),{})},y=function(e){return u.a.createElement("span",{key:e},u.a.createElement(p.DateFormat,{date:e,type:"relative"}))}},351:function(e,n,t){"use strict";var r=t(27),a=t.n(r),o=t(47),i=t.n(o),c=t(0),u=t.n(c),l=t(3),s=t.n(l),p=t(337),m=function(e){var n=e.children,t=e.pathname,r=i()(e,["children","pathname"]);return t?u.a.createElement(p.a,a()({pathname:t},r),n):n};m.propTypes={pathname:s.a.string,children:s.a.oneOfType([s.a.node,s.a.arrayOf(s.a.node)]).isRequired},n.a=m},356:function(e,n,t){"use strict";var r=t(27),a=t.n(r),o=t(47),i=t.n(o),c=t(0),u=t.n(c),l=t(3),s=t.n(l),p=t(341),m=Object(c.createContext)(),f=function(e){var n=e.component,t=i()(e,["component"]);return u.a.createElement(m.Consumer,null,(function(e){var r=e.componentMapper,a="string"==typeof n?r[n]:n;return u.a.createElement(a,t)}))};f.propTypes={component:s.a.oneOfType([s.a.string,s.a.node,s.a.func,s.a.element]).isRequired};var d=function e(n){return n.hidden?null:n.map((function(n){var t=n.fields,r=n.key,o=i()(n,["fields","key"]);return t?u.a.createElement(f,a()({key:r},o),e(t)):u.a.createElement(f,a()({key:r},o))}))},b=function(e){var n=e.schema,t=e.componentMapper;return u.a.createElement(m.Provider,{value:{render:d,componentMapper:t}},d(n.fields))};b.propTypes={schema:s.a.shape({fields:s.a.array.isRequired}).isRequired,componentMapper:s.a.object},b.defaultProps={componentMapper:p.a},n.a=b},357:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"c",(function(){return m})),t.d(n,"b",(function(){return f}));var r=t(84),a=t.n(r),o=t(85),i=t(404),c=t(152);function u(){var e=a()(["\n  @media screen and (min-width: 768px) {\n    flex-wrap: nowrap;\n  }\n"]);return u=function(){return e},e}function l(){var e=a()(["\n  background-color: #ffffff;\n  .pf-c-breadcrumb__item {\n    .active {\n      color: var(--pf-c-breadcrumb__item--Color);\n      text-decoration: none;\n      pointer-events: none;\n    }\n  }\n  h2 {\n    margin-bottom: 0 !important;\n  }\n  .top-toolbar-title {\n    min-width: 200px;\n  }\n  .top-toolbar-title-description {\n    word-break: break-word;\n  }\n"]);return l=function(){return e},e}function s(){var e=a()(["\n  background-color: #ffffff;\n  h2 {\n    margin-bottom: 0 !important;\n  }\n  position: relative;\n  top: 1px;\n"]);return s=function(){return e},e}var p=Object(o.b)(i.Toolbar)(s()),m=o.b.div(l()),f=Object(o.b)(c.Level)(u())},358:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(384),i=t(385),c=t(34),u=t(351);n.a=function(){var e=Object(c.useSelector)((function(e){return e.breadcrumbsReducer.fragments}));return e.length<=1?null:a.a.createElement(o.Breadcrumb,null,e.map((function(n,t){var r=n.title,o=n.pathname,c=n.searchParams;return a.a.createElement(u.a,{pathname:e.length!==t+1?o:void 0,searchParams:c,nav:!0,exact:!0,key:o,className:"pf-c-breadcrumb__item"},a.a.createElement(i.BreadcrumbItem,{isActive:e.length===t+1},r))})))}},360:function(e,n,t){"use strict";var r=t(84),a=t.n(r);function o(){var e=a()(["\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"]);return o=function(){return e},e}var i=t(85).b.div(o());n.a=i},361:function(e,n,t){"use strict";t.d(n,"a",(function(){return O}));var r=t(27),a=t.n(r),o=t(47),i=t.n(o),c=t(0),u=t.n(c),l=t(3),s=t.n(l),p=t(153),m=t(21),f=t(39),d=t(413),b=t(50),v=t(358),h=t(357),y=function(e){var n=e.children,t=e.paddingBottom,r=e.breadcrumbs,o=(e.breadcrumbsSpacing,i()(e,["children","paddingBottom","breadcrumbs","breadcrumbsSpacing"]));return u.a.createElement(h.c,a()({className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg ".concat(t?"pf-u-pb-lg":"")},o),r&&u.a.createElement("div",{className:"pf-u-mb-md"}," ",u.a.createElement(v.a,null)),n)};y.propTypes={children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]).isRequired,paddingBottom:s.a.bool,breadcrumbs:s.a.bool,breadcrumbsSpacing:s.a.bool},y.defaultProps={paddingBottom:!0,breadcrumbs:!0},n.b=y;var O=function(e){var n=e.title,t=e.description,r=e.children,o=e.noData,l=i()(e,["title","description","children","noData"]);return u.a.createElement(c.Fragment,null,u.a.createElement(h.b,a()({className:Object(d.a)({"pf-u-mb-lg":!o})},l),u.a.createElement(p.LevelItem,null,u.a.createElement(f.TextContent,{className:"top-toolbar-title"},u.a.createElement(m.Text,{component:m.TextVariants.h2,className:"pf-u-m-0 pf-u-mr-md"},n),t&&u.a.createElement(m.Text,{className:"top-toolbar-title-description",component:m.TextVariants.p},t))),r))};O.propTypes={title:s.a.node,description:s.a.node,children:s.a.oneOfType([s.a.node,s.a.arrayOf(s.a.node)]),noData:s.a.bool},O.defaultProps={title:u.a.createElement(b.h,null)}},362:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(3),i=t.n(o),c=t(406),u=t(407),l=t(25),s=t(344),p=function(e){var n=e.tabItems,t=Object(s.a)().push,r=Object(l.h)(),o=r.pathname,i=r.search,p=n.find((function(e){var n=e.name;return o.includes(n)}));return a.a.createElement(c.Tabs,{activeKey:p?p.eventKey:0,onSelect:function(e,r){return t({pathname:n[r].name,search:i})}},n.map((function(e){return a.a.createElement(u.Tab,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name})})))};p.propTypes={tabItems:i.a.array.isRequired},n.a=p},363:function(e,n,t){"use strict";t.d(n,"a",(function(){return v}));var r=t(0),a=t.n(r),o=t(3),i=t.n(o),c=t(86),u=t(416),l=t(418),s=t(419),p=t(420),m=t(21),f=t(39),d=t(337),b=function(e){var n=e.title,t=e.Icon,r=e.description,o=e.PrimaryAction,i=e.renderDescription;return a.a.createElement("div",{className:"pf-u-mt-xl"},a.a.createElement(u.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},a.a.createElement(l.EmptyStateIcon,{icon:t}),a.a.createElement(f.TextContent,null,a.a.createElement(m.Text,{component:m.TextVariants.h1},n)),a.a.createElement(s.EmptyStateBody,null,r,i()),a.a.createElement(p.EmptyStateSecondaryActions,null,o&&a.a.createElement(o,null))))};b.defaultProps={renderDescription:function(){return null}},b.propTypes={title:i.a.string.isRequired,Icon:i.a.any.isRequired,description:i.a.string.isRequired,PrimaryAction:i.a.any,renderDescription:i.a.func},n.b=b;var v=function(e){var n=e.url,t=e.label;return a.a.createElement(d.a,{pathname:n,preserveSearch:!0},a.a.createElement(c.Button,{variant:"primary"},t))};v.propTypes={url:i.a.string.isRequired,label:i.a.string.isRequired}},369:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return p}));var r=t(84),a=t.n(r),o=t(85),i=t(62),c=t(91);function u(){var e=a()(["\n  position: relative;\n  ::after {\n    display: ",";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    content: '';\n    background-color: rgba(210, 210, 210, 0.5);\n    z-index: 1;\n    cursor: progress;\n  }\n"]);return u=function(){return e},e}function l(){var e=a()(["\n  height: 330px;\n  position: relative;\n"]);return l=function(){return e},e}var s=Object(o.b)(i.Card)(l()),p=Object(o.b)(c.GalleryItem)(u(),(function(e){return e.isDisabled?"block":"none"}))},374:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(3),i=t.n(o),c=t(375),u=t(21),l=t(96),s=t(50),p=function(){return a.a.createElement("div",null,a.a.createElement(u.Text,{component:u.TextVariants.h1},"No items found"))},m=function(e){var n=e.isLoading,t=e.items,r=e.renderEmptyState;return n?a.a.createElement(s.b,null):0===t.length?r?r():a.a.createElement(p,null):a.a.createElement(c.Section,{type:"content"},a.a.createElement(l.Gallery,{gutter:"md",className:"content-gallery"},t))};m.propTypes={isLoading:i.a.bool,items:i.a.array,renderEmptyState:i.a.func},n.a=m},380:function(e,n,t){"use strict";var r=t(47),a=t.n(r),o=t(84),i=t.n(o),c=t(0),u=t.n(c),l=t(85),s=t(3),p=t.n(s);function m(){var e=i()(["\n  overflow: hidden;\n"]);return m=function(){return e},e}var f=l.b.div(m()),d=function(e){var n=e.toDisplay,t=void 0===n?[]:n,r=a()(e,["toDisplay"]);return t.map((function(e){return u.a.createElement(f,{key:"card-prop-".concat(e)},r[e])}))};d.propTypes={toDisplay:p.a.arrayOf(p.a.oneOfType([p.a.string,p.a.node,p.a.arrayOf(p.a.node)]))},d.defaultProps={toDisplay:[]},n.a=d}}]);
//# sourceMappingURL=../sourcemaps/platforms~portfolios~products.js.map