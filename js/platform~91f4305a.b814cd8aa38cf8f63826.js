(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{632:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(243),l=n(184),i=n(36),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t=e.meta,n=t.limit,r=void 0===n?50:n,u=t.count,p=void 0===u?0:u,m=t.offset,s=void 0===m?0:m,d=e.apiProps,b=e.apiRequest,h=e.className,v=void 0===h?"":h,O=e.isCompact,y=void 0!==O&&O,E=f(e,["meta","apiProps","apiRequest","className","isCompact"]);return a.a.createElement("div",{className:v},a.a.createElement(l.a,c({perPage:r||50,itemCount:p||0,onPerPageSelect:function(e,t){return b(d,{offset:s,limit:t})},page:Object(i.b)(r,s),onSetPage:function(e,t,n){var a={offset:Object(i.c)(t,r),limit:r},l=function(){return b(d,a)};return n?Object(o.a)(l,250)():l()},dropDirection:"down",isCompact:y},E)))}},742:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(835),a=n(665),o=n(632),l=function(e){var t=e.searchValue,n=e.onFilterChange,r=e.title;return{fields:[{component:a.b.TOP_TOOLBAR,key:"platforms-toolbar",fields:[{component:a.b.TOP_TOOLBAR_TITLE,key:"platforms-toolbar-title",title:r},{component:a.b.LEVEL,key:"platforms-toolbar-actions",fields:[{component:a.b.LEVEL_ITEM,key:"input-level-item",fields:[{component:a.b.FILTER_TOOLBAR_ITEM,key:"platforms-toolbar-filter-input",searchValue:t,onFilterChange:n,placeholder:"Filter by platform"}]},{component:a.b.LEVEL_ITEM,key:"pagination-level-item",fields:[]}]}]}]}},i=function(e){var t=e.title,n=e.paddingBottom,o=e.tabItems;return{fields:[{component:a.b.TOP_TOOLBAR,key:"platforms-toolbar",paddingBottom:n,fields:[{component:a.b.TOP_TOOLBAR_TITLE,key:"platforms-toolbar-title",title:t},{component:a.b.LEVEL_ITEM,key:"tabs-level-item",fields:o?[{component:r.a,key:"platform-tabs",tabItems:o}]:[]}]}]}},c=function(e){var t=e.searchValue,n=e.onFilterChange,r=e.meta,l=e.apiRequest,i=e.filterPlaceholder;return{fields:[{component:a.b.TOOLBAR,key:"platforms-filter-toolbar",className:"pf-u-pt-md pf-u-pb-md pf-u-pr-lg pf-u-pl-lg",fields:[{component:a.b.LEVEL,key:"platforms-toolbar-actions",className:"pf-m-grow",fields:[{component:a.b.LEVEL_ITEM,key:"input-level-item",fields:[{component:a.b.FILTER_TOOLBAR_ITEM,key:"platforms-toolbar-filter-input",searchValue:t,onFilterChange:n,placeholder:i}]},{component:a.b.LEVEL_ITEM,key:"pagination-level-item",fields:r.count>0?[{component:o.a,key:"platform-pagination",apiRequest:l,meta:r,isCompact:!0}]:[]}]}]}]}}},799:function(e,t,n){"use strict";var r,a,o=n(0),l=n(106),i=n(25),c=n(3),f=n(12),u=(f.u,{"portfolio-item":["source"]}),p=((r={})[f.z]=function(e){return e().portfolioReducer.selectedPortfolio.name},r[f.x]=function(e){return e().portfolioReducer.portfolioItem.portfolioItem.name},r[f.g]=function(){return"Edit survey"},r[f.c]=function(){return"Add products"},r[f.r]=function(e){return e().platformReducer.selectedPlatform.name},r[f.s]=function(e){return e().platformReducer.serviceOffering.service.name},r[f.o]=function(e){var t=e().orderReducer.orderDetail,n=t.portfolioItem,r=t.order;return n.name+" # "+r.id},r[f.y]=function(){return"Edit product"},r),m=((a={})[f.z]={pathname:f.u,title:"Portfolios",searchParams:{}},a[f.r]={pathname:f.p,title:"Platforms",searchParams:{}},a[f.o]={pathname:f.m,title:"Orders",searchParams:{}},a),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},d=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var o=arguments[t],l=0,i=o.length;l<i;l++,a++)r[a]=o[l];return r},b=function(e,t){return void 0===e&&(e=""),void 0===t&&(t={}),function(n,r){if(0===e.length)return n({type:c.D,payload:[]});var a=e.replace(/^\//,"").split("/").reduce((function(e,n,a){var o,l=(a>0&&e[a-1]?e[a-1].pathname:"")+"/"+n,i=p[l];if(!i)return e;var c=s(s({},a>0&&e[a-1].searchParams),t[n]?((o={})[n]=t[n],o):{});return u[n]&&u[n].forEach((function(e){c[e]=t[e]})),d(e,[{pathname:l,searchParams:c,title:i(r)}])}),[]);return a.length>0&&m[a[0].pathname]&&(a=d([m[a[0].pathname]],a)),n({type:c.D,payload:a})}},h=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var o=arguments[t],l=0,i=o.length;l<i;l++,a++)r[a]=o[l];return r};t.a=function(e){void 0===e&&(e=[]);var t=Object(i.d)(),n=Object(l.h)(),r=n.pathname,a=n.search;if(0===e.length)return t(b("",{}));var c=new URLSearchParams(a),f={};return c.forEach((function(e,t){f[t]=e})),Object(o.useEffect)((function(){t(b(r,f))}),h([r],e)),function(){return t(b("",{}))}}},950:function(e,t,n){"use strict";n.r(t);var r=n(129),a=n.n(r),o=n(0),l=n.n(o),i=n(106),c=n(130),f=n(661),u=n(107),p=n(25),m=n(799),s=n(12),d=n(669),b=n(742),h=n(108),v=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(51)]).then(n.bind(null,920))})),O=Object(o.lazy)((function(){return Promise.all([n.e(3),n.e(2),n.e(50)]).then(n.bind(null,945))})),y=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(6),n.e(63)]).then(n.bind(null,921))})),E=[{eventKey:0,title:"Templates",name:"/platform/platform-templates"},{eventKey:1,title:"Inventories",name:"/platform/platform-inventories"}];t.default=function(){var e=Object(p.d)(),t=Object(u.a)(["platform"]),n=a()(t,1)[0].platform,r=Object(p.e)((function(e){var t=e.platformReducer;return{selectedPlatform:t.selectedPlatform,serviceOffering:t.serviceOffering}})),g=r.selectedPlatform,P=r.serviceOffering,j=Object(m.a)([g,P]);return Object(o.useEffect)((function(){return insights.chrome.appNavClick({id:"platforms",secondaryNav:!0}),Promise.all([e(Object(f.d)(n)),e(Object(f.c)())]),Object(c.d)(),function(){j()}}),[n]),l.a.createElement(o.Fragment,null,l.a.createElement(i.b,{exact:!0,path:[s.q,s.r,s.t,"".concat(s.q,"/*")]},l.a.createElement(d.a,{schema:Object(b.c)({title:g.name,paddingBottom:!1,tabItems:E})})),l.a.createElement(o.Suspense,{fallback:l.a.createElement(h.g,null)},l.a.createElement(i.d,null,l.a.createElement(i.b,{path:s.s},l.a.createElement(y,null)),l.a.createElement(i.b,{path:s.q},l.a.createElement(O,null)),l.a.createElement(i.b,{path:[s.t,s.r]},l.a.createElement(v,null)))))}}}]);
//# sourceMappingURL=../sourcemaps/platform~91f4305a.js.map