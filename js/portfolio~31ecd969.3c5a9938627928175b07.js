(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{592:function(e,t,r){var o=r(608),n=r(609),c=r(297),a=r(610);e.exports=function(e){return o(e)||n(e)||c(e)||a()}},608:function(e,t,r){var o=r(298);e.exports=function(e){if(Array.isArray(e))return o(e)}},609:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},610:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},726:function(e,t,r){"use strict";var o,n,c=r(592),a=r.n(c),i=r(0),u=r(83),l=r(18),s=r(3),f=r(8),p=(f.u,{"portfolio-item":["source"]}),d=((o={})[f.y]=function(e){return e().portfolioReducer.selectedPortfolio.name},o[f.w]=function(e){return e().portfolioReducer.portfolioItem.portfolioItem.name},o[f.g]=function(){return"Edit survey"},o[f.c]=function(){return"Add products"},o[f.r]=function(e){return e().platformReducer.selectedPlatform.name},o[f.s]=function(e){return e().platformReducer.serviceOffering.service.name},o[f.o]=function(e){var t=e().orderReducer.orderDetail,r=t.portfolioItem,o=t.order;return r.name+" # "+o.id},o[f.x]=function(){return"Edit product"},o),m=((n={})[f.y]={pathname:f.u,title:"Portfolios",searchParams:{}},n[f.r]={pathname:f.p,title:"Platforms",searchParams:{}},n[f.o]={pathname:f.m,title:"Orders",searchParams:{}},n),h=function(){return(h=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},b=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var o=Array(e),n=0;for(t=0;t<r;t++)for(var c=arguments[t],a=0,i=c.length;a<i;a++,n++)o[n]=c[a];return o},y=function(e,t){return void 0===e&&(e=""),void 0===t&&(t={}),function(r,o){if(0===e.length)return r({type:s.D,payload:[]});var n=e.replace(/^\//,"").split("/").reduce((function(e,r,n){var c,a=(n>0&&e[n-1]?e[n-1].pathname:"")+"/"+r,i=d[a];if(!i)return e;var u=h(h({},n>0&&e[n-1].searchParams),t[r]?((c={})[r]=t[r],c):{});return p[r]&&p[r].forEach((function(e){u[e]=t[e]})),b(e,[{pathname:a,searchParams:u,title:i(o)}])}),[]);return n.length>0&&m[n[0].pathname]&&(n=b([m[n[0].pathname]],n)),r({type:s.D,payload:n})}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(l.useDispatch)(),r=Object(u.h)(),o=r.pathname,n=r.search;if(0===e.length)return t(y("",{}));var c=new URLSearchParams(n),s={};return c.forEach((function(e,t){s[t]=e})),Object(i.useEffect)((function(){t(y(o,s))}),[o].concat(a()(e))),function(){return t(y("",{}))}}},743:function(e,t,r){"use strict";var o=r(0),n=r.n(o),c=r(127),a=r(762),i=r.n(a),u=r(43),l=r(564),s=r(17);t.a=function(){var e=Object(s.a)();return n.a.createElement("div",{className:"pf-u-mb-md"},n.a.createElement(i.a,{className:"pf-u-mr-sm"}),n.a.createElement(c.a,{variant:"link",component:function(){return n.a.createElement(l.a,{pathname:"/products"},e(u.a.backToProducts))}}))}},755:function(e,t,r){"use strict";var o=r(0);t.a=function(){var e=Object(o.useRef)(!1);return Object(o.useEffect)((function(){return e.current=!0,function(){return e.current=!1}}),[]),e}},762:function(e,t,r){"use strict";t.__esModule=!0,t.AngleLeftIconConfig={name:"AngleLeftIcon",height:512,width:256,svgPath:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",yOffset:0,xOffset:0,transform:""},t.AngleLeftIcon=r(76).createIcon(t.AngleLeftIconConfig),t.default=t.AngleLeftIcon},970:function(e,t,r){"use strict";r.r(t);var o=r(47),n=r.n(o),c=r(132),a=r.n(c),i=r(0),u=r.n(i),l=r(18),s=r(83),f=r(10),p=r.n(f),d=r(97),m=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var o=Array(e),n=0;for(t=0;t<r;t++)for(var c=arguments[t],a=0,i=c.length;a<i;a++,n++)o[n]=c[a];return o},h=r(590),b=r(134),y=r(107),O=r(84),v=r(726),g=r(8),P=r(189),j=r(41),I=r(755),E=r(184),R=r(597),w=r(589),F=r(743);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A=function(e){var t=e.fromProducts,r=e.title,o=e.description;return u.a.createElement(R.a,{schema:{fields:[{component:w.b.TOP_TOOLBAR,breadcrumbs:!t,key:"portfolio-top-toolbar",fields:[{component:F.a,key:"back-to-products",hidden:!t},{component:w.b.TOP_TOOLBAR_TITLE,key:"portfolio-toolbar-title",title:r,description:o}]}]}})};A.propTypes={title:p.a.node,description:p.a.node,fromProducts:p.a.bool};var L=Object(i.lazy)((function(){return Promise.all([r.e(0),r.e(2),r.e(68)]).then(r.bind(null,967))})),C=Object(i.lazy)((function(){return Promise.all([r.e(0),r.e(10),r.e(56)]).then(r.bind(null,962))})),D=Object(i.lazy)((function(){return Promise.all([r.e(0),r.e(2),r.e(7),r.e(15)]).then(r.bind(null,966))})),T={selectedItems:[],firstSelectedProduct:void 0,removeInProgress:!1,filterValue:"",copyInProgress:!1,isFetching:!0,isFiltering:!1},x=Object(y.a)((function(e,t,r,o){r(!0),t(Object(b.f)(e,o)).then((function(){return r(!1)}))}),1e3),_=function(e,t){var r,o,n=t.type,c=t.payload,a=void 0===c?{}:c;return{selectItem:k(k({},e),{},{selectedItems:(r=e.selectedItems,o=a.selectedItem,r.includes(o)?m(r.slice(0,r.indexOf(o)),r.slice(r.indexOf(o)+1)):m(r,[o])),firstSelectedProduct:a.product||e.firstSelectedProduct}),setRemoveInProgress:k(k({},e),{},{removeInProgress:a}),removeSucessfull:k(k({},e),{},{selectedItems:[],removeInProgress:!1}),setFilterValue:k(k({},e),{},{filterValue:a,isFiltering:!0}),setCopyInProgress:k(k({},e),{},{copyInProgress:a}),setIsFetching:k(k({},e),{},{isFetching:a}),setFilteringFlag:k(k({},e),{},{isFiltering:a})}[n]};t.default=function(){var e,t=Object(E.a)(),r=Object(i.useReducer)(_,k(k({},T),{},{filterValue:(null==t||null===(e=t.portfolioItems)||void 0===e?void 0:e.filter)||""})),o=n()(r,2),c=o[0],a=o[1],f=Object(O.a)(["portfolio","from-products"]),p=n()(f,1)[0],m=p.portfolio,y=p["from-products"],R=Object(s.i)(g.y).url,w=Object(s.g)(),F=Object(l.useDispatch)(),S=Object(I.a)(),V=Object(l.useSelector)((function(e){var t=e.portfolioReducer;return{portfolio:t.selectedPortfolio,portfolioItem:t.portfolioItem,meta:t.portfolioItems.meta}})),z=V.portfolio,N=V.portfolioItem,B=V.meta,J=Object(v.a)([z,N]),M=function(e){return a({type:"setIsFetching",payload:!0}),Promise.all([F(Object(h.c)()),F(Object(b.i)(e)),F(Object(b.f)(e,null==t?void 0:t.portfolioItems))]).then((function(e){return S.current&&a({type:"setIsFetching",payload:!1}),e})).catch((function(){return a({type:"setIsFetching",payload:!1})}))};Object(i.useEffect)((function(){return insights.chrome.appNavClick({id:"true"===y?"products":"portfolios",secondaryNav:!0}),M(m),Object(d.d)(),function(){J(),F(Object(b.m)())}}),[]),Object(i.useEffect)((function(){!0!==S.current||c.isFetching||w.location.pathname!==g.y||(M(m),Object(d.d)())}),[m,w.location.pathname]);var q={portfolioRoute:R,addProductsRoute:"".concat(R,"/add-products"),editPortfolioRoute:"".concat(R,"/edit-portfolio"),removePortfolioRoute:"".concat(R,"/remove-portfolio"),sharePortfolioRoute:"".concat(R,"/share-portfolio"),workflowPortfolioRoute:"".concat(R,"/edit-workflow"),portfolioItemRoute:"".concat(R,"/portfolio-item")};return!1===z.metadata.user_capabilities.show?u.a.createElement(P.a,null):u.a.createElement(i.Suspense,{fallback:u.a.createElement(A,{fromProducts:"true"===y,title:z.name,description:z.description})},u.a.createElement(s.d,null,u.a.createElement(j.a,{path:q.addProductsRoute,userCapabilities:z.metadata.user_capabilities,requiredCapabilities:"update"},u.a.createElement(D,{portfolioRoute:q.portfolioRoute})),u.a.createElement(s.b,{path:q.portfolioItemRoute},u.a.createElement(C,{portfolioLoaded:!c.isFetching})),u.a.createElement(s.b,{path:q.portfolioRoute},u.a.createElement(L,{routes:q,fromProducts:"true"===y,handleFilterChange:function(e){a({type:"setFilterValue",payload:e}),x(m,F,(function(e){return a({type:"setFilteringFlag",payload:e})}),k(k({},B),{},{offset:0,filter:e}))},removeProducts:function(e){a({type:"setRemoveInProgress",payload:!0}),F(Object(b.l)(e,z.name,c.firstSelectedProduct)).then((function(){return a({type:"removeSucessfull"})})).catch((function(){return a({type:"setRemoveInProgress",payload:!1})}))},copyPortfolio:function(){return a({type:"setCopyInProgress",payload:!0}),F(Object(b.c)(m)).then((function(e){var t=e.id;return w.push({pathname:g.y,search:"?portfolio=".concat(t)})})).then((function(){return a({type:"setCopyInProgress",payload:!1})})).then((function(){return F(Object(b.g)())})).catch((function(){return a({type:"setCopyInProgress",payload:!1})}))},state:c,stateDispatch:a}))))}}}]);
//# sourceMappingURL=../sourcemaps/portfolio~31ecd969.js.map