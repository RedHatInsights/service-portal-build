(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{428:function(e,t,r){"use strict";var n=r(427);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(n.a)(e,t,r)}},434:function(e,t,r){"use strict";r.d(t,"c",(function(){return I})),r.d(t,"b",(function(){return w})),r.d(t,"d",(function(){return E})),r.d(t,"a",(function(){return R})),r.d(t,"e",(function(){return _}));var n={};r.r(n),r.d(n,"getPlatforms",(function(){return O})),r.d(n,"getPlatform",(function(){return y})),r.d(n,"getPlatformItems",(function(){return g})),r.d(n,"getPlatformInventories",(function(){return h})),r.d(n,"getServiceOffering",(function(){return v}));var o=r(1),c=r.n(o),a=r(3),i=r(33),u=r.n(i),s=r(84),f=r(13),l=r(66);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=Object(s.a)(),b=Object(s.b)(),O=function(){return b.post("".concat(f.i,"/graphql"),{query:'\nquery {\n  application_types (filter: { name: "/insights/platform/catalog" }) {\n    id\n    name\n    sources {\n      id\n      name\n      source_type_id\n    }\n  }\n}'}).then((function(e){return e.data.application_types})).then((function(e){return u()(e,1)[0].sources}))},y=function(e){return m.get("".concat(f.i,"/sources/").concat(e))},g=function(e,t,r){var n=t?"&filter[name][contains_i]=".concat(t):"";return e?m.get("".concat(f.j,"/sources/").concat(e,"/service_offerings?filter[archived_at][nil]").concat(n).concat(r?"&limit=".concat(r.limit,"&offset=").concat(r.offset):"")):m.get("".concat(f.j,"/service_offerings"))},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l.a;return e?m.get("".concat(f.j,"/sources/").concat(e,"/service_inventories?filter[name][contains_i]=").concat(t).concat(r?"&limit=".concat(r.limit,"&offset=").concat(r.offset):"")):m.get("".concat(f.j,"/service_inventories?limit=").concat(r.limit,"&offset=").concat(r.offset))},v=function(e,t){return Promise.all([m.get("".concat(f.j,"/service_offerings/").concat(e)),m.get("".concat(f.i,"/sources/").concat(t)).then((function(e){return m.get("".concat(f.i,"/source_types/").concat(e.source_type_id)).then((function(t){var r=t.icon_url;return d(d({},e),{},{icon_url:r})}))}))]).then((function(e){var t=u()(e,2);return{service:t[0],source:t[1]}}))};function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=function(){return function(e){return e({type:"".concat(a.k,"_PENDING")}),O().then((function(t){return e({type:"".concat(a.k,"_FULFILLED"),payload:t})})).catch((function(t){return e({type:"".concat(a.k,"_REJECTED"),payload:t})}))}},w=function(e,t,r){return{type:a.n,payload:g(e,t,r),meta:P({platformId:e,filter:t},r)}},E=function(e){return{type:a.j,payload:y(e)}},R=function(e,t,r){return{type:a.l,payload:h(e,t,r)}},_=function(){return{type:a.v,payload:v.apply(n,arguments)}}},521:function(e,t,r){"use strict";var n,o,c=r(17),a=r.n(c),i=r(0),u=r(53),s=r(26),f=r(1),l=r.n(f),p=r(3),d=r(10),m=(d.s,{"portfolio-item":["source"]}),b=(n={},l()(n,d.u,(function(e){return e().portfolioReducer.selectedPortfolio.name})),l()(n,d.t,(function(e){return e().portfolioReducer.portfolioItem.portfolioItem.name})),l()(n,d.e,(function(){return"Edit survey"})),l()(n,d.b,(function(){return"Add products"})),l()(n,d.p,(function(e){return e().platformReducer.selectedPlatform.name})),l()(n,d.q,(function(e){return e().platformReducer.serviceOffering.service.name})),l()(n,d.m,(function(e){var t=e().orderReducer.orderDetail,r=t.portfolioItem,n=t.order;return"".concat(r.name," # ").concat(n.id)})),n),O=(o={},l()(o,d.u,{pathname:d.s,title:"Portfolios",searchParams:{}}),l()(o,d.p,{pathname:d.n,title:"Platforms",searchParams:{}}),l()(o,d.m,{pathname:d.j,title:"Orders",searchParams:{}}),o);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(r,n){if(0===e.length)return r({type:p.A,payload:[]});var o=e.replace(/^\//,"").split("/").reduce((function(e,r,o){var c="".concat(o>0&&e[o-1]?e[o-1].pathname:"","/").concat(r),i=b[c];if(!i)return e;var u=g(g({},o>0&&e[o-1].searchParams),t[r]?l()({},r,t[r]):{});return m[r]&&m[r].forEach((function(e){u[e]=t[e]})),[].concat(a()(e),[{pathname:c,searchParams:u,title:i(n)}])}),[]);return o.length>0&&O[o[0].pathname]&&(o=[O[o[0].pathname]].concat(a()(o))),r({type:p.A,payload:o})}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(s.useDispatch)(),r=Object(u.h)(),n=r.pathname,o=r.search;if(0===e.length)return t(h("",{}));var c=new URLSearchParams(o),f={};return c.forEach((function(e,t){f[t]=e})),Object(i.useEffect)((function(){t(h(n,f))}),[n].concat(a()(e))),function(){return t(h("",{}))}}},523:function(e,t,r){"use strict";var n=r(0),o=r.n(n),c=r(82),a=r(67),i=r(554),u=r.n(i),s=r(435),f=r(432);t.a=function(){var e=Object(c.a)().formatMessage;return o.a.createElement("div",{className:"pf-u-mb-md"},o.a.createElement(u.a,{className:"pf-u-mr-sm"}),o.a.createElement(a.Button,{variant:"link",component:function(){return o.a.createElement(f.a,{pathname:"/products"},e(s.a.backToProducts))}}))}},554:function(e,t,r){"use strict";t.__esModule=!0,t.AngleLeftIconConfig={name:"AngleLeftIcon",height:512,width:256,svgPath:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",yOffset:0,xOffset:0,transform:""},t.AngleLeftIcon=r(201).createIcon(t.AngleLeftIconConfig),t.default=t.AngleLeftIcon},863:function(e,t,r){"use strict";r.r(t);var n=r(33),o=r.n(n),c=r(1),a=r.n(c),i=r(0),u=r.n(i),s=r(26),f=r(53),l=r(11),p=r.n(l),d=r(119),m=r(17),b=r.n(m),O=r(434),y=r(444),g=r(428),h=r(68),v=r(521),j=r(10),P=r(129),I=r(19),w=function(){var e=Object(i.useRef)(!1);return Object(i.useEffect)((function(){return e.current=!0,function(){return e.current=!1}}),[]),e},E=r(130),R=r(453),_=r(442),D=r(523);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=function(e){var t=e.fromProducts,r=e.title,n=e.description;return u.a.createElement(R.a,{schema:{fields:[{component:_.b.TOP_TOOLBAR,breadcrumbs:!t,key:"portfolio-top-toolbar",fields:[{component:D.a,key:"back-to-products",hidden:!t},{component:_.b.TOP_TOOLBAR_TITLE,key:"portfolio-toolbar-title",title:r,description:n}]}]}})};L.propTypes={title:p.a.node,description:p.a.node,fromProducts:p.a.bool};var S=Object(i.lazy)((function(){return Promise.all([r.e(0),r.e(6),r.e(57)]).then(r.bind(null,862))})),C=Object(i.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(4),r.e(48)]).then(r.bind(null,857))})),A=Object(i.lazy)((function(){return Promise.all([r.e(0),r.e(2),r.e(6),r.e(15)]).then(r.bind(null,858))})),T={selectedItems:[],removeInProgress:!1,filterValue:"",copyInProgress:!1,isFetching:!0,isFiltering:!1},N=Object(g.a)((function(e,t,r,n){r(!0),t(Object(y.f)(e,n)).then((function(){return r(!1)}))}),1e3),q=function(e,t){var r,n,o=t.type,c=t.payload;return{selectItem:k(k({},e),{},{selectedItems:(r=e.selectedItems,n=c,r.includes(n)?[].concat(b()(r.slice(0,r.indexOf(n))),b()(r.slice(r.indexOf(n)+1))):[].concat(b()(r),[n]))}),setRemoveInProgress:k(k({},e),{},{removeInProgress:c}),removeSucessfull:k(k({},e),{},{selectedItems:[],removeInProgress:!1}),setFilterValue:k(k({},e),{},{filterValue:c,isFiltering:!0}),setCopyInProgress:k(k({},e),{},{copyInProgress:c}),setIsFetching:k(k({},e),{},{isFetching:c}),setFilteringFlag:k(k({},e),{},{isFiltering:c})}[o]};t.default=function(){var e,t=Object(E.a)(),r=Object(i.useReducer)(q,k(k({},T),{},{filterValue:(null==t||null===(e=t.portfolioItems)||void 0===e?void 0:e.filter)||""})),n=o()(r,2),c=n[0],a=n[1],l=Object(h.a)(["portfolio","from-products"]),p=o()(l,1)[0],m=p.portfolio,b=p["from-products"],g=Object(f.i)(j.u).url,R=Object(f.g)(),_=Object(s.useDispatch)(),D=w(),F=Object(s.useSelector)((function(e){var t=e.portfolioReducer;return{portfolio:t.selectedPortfolio,portfolioItem:t.portfolioItem,meta:t.portfolioItems.meta}})),V=F.portfolio,z=F.portfolioItem,x=F.meta,B=Object(v.a)([V,z]),J=function(e){return a({type:"setIsFetching",payload:!0}),Promise.all([_(Object(O.c)()),_(Object(y.i)(e)),_(Object(y.f)(e,null==t?void 0:t.portfolioItems))]).then((function(e){return D.current&&a({type:"setIsFetching",payload:!1}),e})).catch((function(){return a({type:"setIsFetching",payload:!1})}))};Object(i.useEffect)((function(){return insights.chrome.appNavClick({id:"true"===b?"products":"portfolios",secondaryNav:!0}),J(m),Object(d.c)(),function(){B(),_(Object(y.m)())}}),[]),Object(i.useEffect)((function(){!0!==D.current||c.isFetching||R.location.pathname!==j.u||(J(m),Object(d.c)())}),[m,R.location.pathname]);var M={portfolioRoute:g,addProductsRoute:"".concat(g,"/add-products"),editPortfolioRoute:"".concat(g,"/edit-portfolio"),removePortfolioRoute:"".concat(g,"/remove-portfolio"),sharePortfolioRoute:"".concat(g,"/share-portfolio"),workflowPortfolioRoute:"".concat(g,"/edit-workflow"),portfolioItemRoute:"".concat(g,"/portfolio-item")};return!1===V.metadata.user_capabilities.show?u.a.createElement(P.a,null):u.a.createElement(i.Suspense,{fallback:u.a.createElement(L,{fromProducts:"true"===b,title:V.name,description:V.description})},u.a.createElement(f.d,null,u.a.createElement(I.a,{path:M.addProductsRoute,userCapabilities:V.metadata.user_capabilities,requiredCapabilities:"update"},u.a.createElement(A,{portfolioRoute:M.portfolioRoute})),u.a.createElement(f.b,{path:M.portfolioItemRoute},u.a.createElement(C,{portfolioLoaded:!c.isFetching})),u.a.createElement(f.b,{path:M.portfolioRoute},u.a.createElement(S,{routes:M,fromProducts:"true"===b,handleFilterChange:function(e){a({type:"setFilterValue",payload:e}),N(m,_,(function(e){return a({type:"setFilteringFlag",payload:e})}),k(k({},x),{},{offset:0,filter:e}))},removeProducts:function(e){a({type:"setRemoveInProgress",payload:!0}),_(Object(y.l)(e,V.name)).then((function(){return a({type:"removeSucessfull"})})).catch((function(){return a({type:"setRemoveInProgress",payload:!1})}))},copyPortfolio:function(){return a({type:"setCopyInProgress",payload:!0}),_(Object(y.c)(m)).then((function(e){var t=e.id;return R.push({pathname:j.u,search:"?portfolio=".concat(t)})})).then((function(){return a({type:"setCopyInProgress",payload:!1})})).then((function(){return _(Object(y.g)())})).catch((function(){return a({type:"setCopyInProgress",payload:!1})}))},state:c,stateDispatch:a}))))}}}]);
//# sourceMappingURL=../sourcemaps/portfolio~31ecd969.js.map