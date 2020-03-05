(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{348:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"getPlatforms",(function(){return y})),n.d(r,"getPlatform",(function(){return b})),n.d(r,"getPlatformItems",(function(){return O})),n.d(r,"getPlatformInventories",(function(){return v})),n.d(r,"getServiceOffering",(function(){return g}));var o=n(1),a=n.n(o),c=n(2),i=n(83),u=n.n(i),l=n(57),s=n(12),f=n(49);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var m=Object(l.a)(),d=Object(l.b)(),y=function(){return d.post("".concat(s.h,"/graphql"),{query:'\nquery {\n  application_types (filter: { name: "/insights/platform/catalog" }) {\n    id\n    name\n    sources {\n      id\n      name\n      source_type_id\n    }\n  }\n}'}).then((function(e){return e.data.application_types})).then((function(e){return u()(e,1)[0].sources}))},b=function(e){return m.get("".concat(s.h,"/sources/").concat(e))},O=function(e,t,n){var r=t?"&filter[name][contains_i]=".concat(t):"";return e?m.get("".concat(s.i,"/sources/").concat(e,"/service_offerings?filter[archived_at][nil]").concat(r).concat(n?"&limit=".concat(n.limit,"&offset=").concat(n.offset):"")):m.get("".concat(s.i,"/service_offerings"))},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f.a;return e?m.get("".concat(s.i,"/sources/").concat(e,"/service_inventories?filter[name][contains_i]=").concat(t).concat(n?"&limit=".concat(n.limit,"&offset=").concat(n.offset):"")):m.get("".concat(s.i,"/service_inventories?limit=").concat(n.limit,"&offset=").concat(n.offset))},g=function(e,t){return Promise.all([m.get("".concat(s.i,"/service_offerings/").concat(e)),m.get("".concat(s.h,"/sources/").concat(t)).then((function(e){return m.get("".concat(s.h,"/source_types/").concat(e.source_type_id)).then((function(t){var n=t.icon_url;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{icon_url:n})}))}))]).then((function(e){var t=u()(e,2);return{service:t[0],source:t[1]}}))};function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"c",(function(){return E})),n.d(t,"b",(function(){return P})),n.d(t,"d",(function(){return _})),n.d(t,"a",(function(){return w})),n.d(t,"e",(function(){return T}));var E=function(){return function(e){return e((function(e){return e({type:"".concat(c.j,"_PENDING")}),y().then((function(t){return e({type:"".concat(c.j,"_FULFILLED"),payload:t})})).catch((function(t){return e({type:"".concat(c.j,"_REJECTED"),payload:t})}))}))}},P=function(e,t,n){return{type:c.m,payload:O(e,t,n),meta:j({platformId:e,filter:t},n)}},_=function(e){return{type:c.i,payload:b(e)}},w=function(e,t,n){return{type:c.k,payload:v(e,t,n)}},T=function(){return{type:c.u,payload:g.apply(r,arguments)}}},371:function(e,t){var n=Array.isArray;e.exports=n},373:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardHeader=void 0;var r=l(n(3)),o=function(e){if(e&&e.__esModule)return e;var t=u();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}}n.default=e,t&&t.set(e,n);return n}(n(0)),a=n(4),c=l(n(88)),i=l(n(381));function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=function(e){var t=e.children,n=void 0===t?null:t,r=e.className,u=void 0===r?"":r,l=f(e,["children","className"]);return o.createElement("div",s({className:(0,a.css)(c.default.cardHeader,i.default.title,i.default.modifiers.md,u)},l),n)};t.CardHeader=p,p.propTypes={children:r.default.node,className:r.default.string}},375:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardFooter=void 0;var r=u(n(3)),o=function(e){if(e&&e.__esModule)return e;var t=i();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}}n.default=e,t&&t.set(e,n);return n}(n(0)),a=u(n(88)),c=n(4);function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=function(e){var t=e.children,n=void 0===t?null:t,r=e.className,i=void 0===r?"":r,u=e.component,f=void 0===u?"div":u,p=s(e,["children","className","component"]),m=f;return o.createElement(m,l({className:(0,c.css)(a.default.cardFooter,i)},p),n)};t.CardFooter=f,f.propTypes={children:r.default.node,className:r.default.string,component:r.default.any}},397:function(e,t,n){var r=n(398);e.exports=function(e,t,n){var o=null==e?void 0:r(e,t);return void 0===o?n:o}},398:function(e,t,n){var r=n(399),o=n(405);e.exports=function(e,t){for(var n=0,a=(t=r(t,e)).length;null!=e&&n<a;)e=e[o(t[n++])];return n&&n==a?e:void 0}},399:function(e,t,n){var r=n(371),o=n(400),a=n(402),c=n(404);e.exports=function(e,t){return r(e)?e:o(e,t)?[e]:a(c(e))}},400:function(e,t,n){var r=n(371),o=n(401),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c=/^\w*$/;e.exports=function(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!o(e))||(c.test(e)||!a.test(e)||null!=t&&e in Object(t))}},401:function(e,t){e.exports=function(){return!1}},402:function(e,t,n){var r=n(403),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,c=r((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(o,(function(e,n,r,o){t.push(r?o.replace(a,"$1"):n||e)})),t}));e.exports=c},403:function(e,t){e.exports=function(e){return e}},404:function(e,t){e.exports=function(e){return e}},405:function(e,t){e.exports=function(e){return e}},424:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return u}));var r=n(365),o=n(344),a=n(346),c=function(e){var t=e.searchValue,n=e.onFilterChange,r=e.title;return{fields:[{component:o.b.TOP_TOOLBAR,key:"platforms-toolbar",fields:[{component:o.b.TOP_TOOLBAR_TITLE,key:"platforms-toolbar-title",title:r},{component:o.b.LEVEL,key:"platforms-toolbar-actions",fields:[{component:o.b.LEVEL_ITEM,key:"input-level-item",fields:[{component:o.b.FILTER_TOOLBAR_ITEM,key:"platforms-toolbar-filter-input",searchValue:t,onFilterChange:n,placeholder:"Filter by platform..."}]},{component:o.b.LEVEL_ITEM,key:"pagination-level-item",fields:[]}]}]}]}},i=function(e){var t=e.title,n=e.paddingBottom,a=e.tabItems;return{fields:[{component:o.b.TOP_TOOLBAR,key:"platforms-toolbar",paddingBottom:n,fields:[{component:o.b.TOP_TOOLBAR_TITLE,key:"platforms-toolbar-title",title:t},{component:o.b.LEVEL_ITEM,key:"tabs-level-item",fields:a?[{component:r.a,key:"platform-tabs",tabItems:a}]:[]}]}]}},u=function(e){var t=e.searchValue,n=e.onFilterChange,r=e.meta,c=e.apiRequest,i=e.filterPlaceholder;return{fields:[{component:o.b.TOOLBAR,key:"platforms-filter-toolbar",className:"pf-u-pt-md pf-u-pb-md pf-u-pr-lg pf-u-pl-lg",fields:[{component:o.b.LEVEL,key:"platforms-toolbar-actions",className:"pf-m-grow",fields:[{component:o.b.LEVEL_ITEM,key:"input-level-item",fields:[{component:o.b.FILTER_TOOLBAR_ITEM,key:"platforms-toolbar-filter-input",searchValue:t,onFilterChange:n,placeholder:i}]},{component:o.b.LEVEL_ITEM,key:"pagination-level-item",fields:r.count>0?[{component:a.a,key:"platform-pagination",apiRequest:c,meta:r,isCompact:!0}]:[]}]}]}]}}},513:function(e,t,n){e.exports=n.p+"fonts/platform-openshift.svg"},514:function(e,t,n){e.exports=n.p+"fonts/platform-amazon.png"},515:function(e,t,n){e.exports=n.p+"fonts/platform-tower.png"},516:function(e,t,n){e.exports=n.p+"fonts/platform-default.svg"},629:function(e,t,n){"use strict";n.r(t);var r=n(27),o=n.n(r),a=n(83),c=n.n(a),i=n(0),u=n.n(i),l=n(34),s=n(21),f=n(39),p=n(352),m=n.n(p),d=n(350),y=n(359),b=n(377),O=n(348),v=n(1),g=n.n(v),h=n(47),j=n.n(h),E=n(3),P=n.n(E),_=n(373),w=n(60),T=n(375),L=n(90),k=n(516),x=n.n(k),D=n(513),I=n.n(D),C=n(514),M=n.n(C),F=n(515),N=n.n(F),V=function(e){var t=e.src,n=j()(e,["src"]);return u.a.createElement("img",o()({src:t},n))};V.propTypes={src:P.a.string.isRequired};var R=V,S=n(383),A=n(51),B=n(363),q=n(340),H=n(372);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var J=["description","modified"],U={1:I.a,2:M.a,3:N.a},$=function(e){var t=e.name,n=e.id,r=j()(e,["name","id"]);return u.a.createElement(L.GalleryItem,null,u.a.createElement(H.a,{key:n},u.a.createElement(_.CardHeader,null,u.a.createElement(R,{src:U[r.source_type_id]||x.a,width:"80",height:"40"})),u.a.createElement(w.CardBody,null,u.a.createElement(f.TextContent,null,u.a.createElement(q.a,{pathname:A.r,searchParams:{platform:n}},u.a.createElement(s.Text,{title:t,className:"pf-u-mb-0",component:s.TextVariants.h3},u.a.createElement(B.a,null,t)))),u.a.createElement(S.a,o()({},function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({name:t},r),{toDisplay:J}))),u.a.createElement(T.CardFooter,null)))};$.propTypes={history:P.a.object,imageUrl:P.a.string,name:P.a.string,source_type_id:P.a.string,id:P.a.string};var G=$,z=n(424),K=n(366);t.default=function(){var e=Object(i.useState)(""),t=c()(e,2),n=t[0],r=t[1],a=Object(l.useSelector)((function(e){var t=e.platformReducer;return{platforms:t.platforms,isLoading:t.isPlatformDataLoading}})),p=a.platforms,v=a.isLoading,g=Object(l.useDispatch)();Object(i.useEffect)((function(){g(Object(O.c)()),Object(d.c)(),insights.chrome.appNavClick({id:"platforms",secondaryNav:!0})}),[]);var h=function(){return u.a.createElement(i.Fragment,null,u.a.createElement(f.TextContent,null,u.a.createElement(s.Text,{component:s.TextVariants.p},"Configure a source in order to add products to portfolios."),u.a.createElement(s.Text,{component:s.TextVariants.p},"To connect to a source, go to"," ",u.a.createElement("a",{href:"".concat(document.baseURI,"settings/sources")},"Catalog sources")," under Settings."),u.a.createElement(s.Text,{component:s.TextVariants.p},u.a.createElement("a",{href:"javascript:void(0)"},"Learn more in the documentation"))))},j={items:p.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){return u.a.createElement(G,o()({key:e.id},e))})),isLoading:v&&0===p.length};return u.a.createElement(i.Fragment,null,u.a.createElement(y.a,{schema:Object(z.b)({onFilterChange:function(e){return r(e)},searchValue:n,title:"Platforms"})}),u.a.createElement(b.a,o()({},j,{renderEmptyState:function(){return u.a.createElement(K.b,{title:"No platforms yet",renderDescription:h,Icon:m.a})}})))}}}]);
//# sourceMappingURL=../sourcemaps/platforms.js.map