(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{577:function(e,t,r){"use strict";var n=r(69),o=r.n(n),a=r(70),i=r.n(a),c=r(0),s=r.n(c),l=r(4),u=r.n(l),p=r(179),f=r(284),d=r(23),m=function(e){var t=e.meta,r=t.limit,n=t.count,a=t.offset,c=e.apiProps,l=e.apiRequest,u=e.className,m=e.isCompact,b=i()(e,["meta","apiProps","apiRequest","className","isCompact"]);return s.a.createElement("div",{className:u},s.a.createElement(f.Pagination,o()({perPage:r||50,itemCount:n||0,onPerPageSelect:function(e,t){return l(c,{offset:a,limit:t})},page:Object(d.b)(r,a),onSetPage:function(e,t,n){var o={offset:Object(d.c)(t,r),limit:r},a=function(){return l(c,o)};return n?Object(p.a)(a,250)():a()},direction:"down",isCompact:m},b)))};m.propTypes={meta:u.a.shape({count:u.a.number,limit:u.a.number.isRequired,offset:u.a.number.isRequired}),apiRequest:u.a.func.isRequired,apiProps:u.a.any,className:u.a.string,isCompact:u.a.bool},m.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1},t.a=m},611:function(e,t,r){var n=r(770);e.exports=function(e,t){for(var r=e.length;r--;)if(n(e[r][0],t))return r;return-1}},625:function(e,t,r){"use strict";t.__esModule=!0,t.FilterIconConfig={name:"FilterIcon",height:512,width:512,svgPath:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z",yOffset:0,xOffset:0,transform:""},t.FilterIcon=r(78).createIcon(t.FilterIconConfig),t.default=t.FilterIcon},692:function(e,t,r){"use strict";var n,o,a=r(0),i=r.n(a),c=r(20),s=r(128),l=r(176),u=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},p=function(){return(p=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},f=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},d=Object(c.b)(s.a)(n||(n=u(["\n  display: flex !important;\n  align-items: center;\n"],["\n  display: flex !important;\n  align-items: center;\n"]))),m=c.b.span(o||(o=u(["\n  margin-right: ",";\n"],["\n  margin-right: ",";\n"])),(function(e){return e.showSpinner?"8px":"0"})),b=Object(a.forwardRef)((function(e,t){var r=e.children,n=e.showSpinner,o=void 0!==n&&n,a=e.isDisabled,c=void 0!==a&&a,s=f(e,["children","showSpinner","isDisabled"]);return i.a.createElement(d,p({ref:t},s,{isDisabled:c}),i.a.createElement(m,{showSpinner:o},r),o&&i.a.createElement(l.Spinner,{size:"md"}))}));b.displayName="ButtonWithSpinner",t.a=b},704:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(1),o=r(0),a=r(2),i=r(47),c=r.n(i);const s=e=>{var{children:t=null,className:r=""}=e,i=Object(n.__rest)(e,["children","className"]);return o.createElement("div",Object.assign({className:Object(a.css)(c.a.cardHeader,r)},i),t)};s.displayName="CardHeader"},705:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(1),o=r(0),a=r(47),i=r.n(a),c=r(2);const s=e=>{var{children:t=null,className:r="",component:a="div"}=e,s=Object(n.__rest)(e,["children","className","component"]);const l=a;return o.createElement(l,Object.assign({className:Object(c.css)(i.a.cardFooter,r)},s),t)};s.displayName="CardFooter"},764:function(e,t,r){var n=r(765);e.exports=function(e,t){return n(e,t)}},765:function(e,t,r){var n=r(766),o=r(309);e.exports=function e(t,r,a,i,c){return t===r||(null==t||null==r||!o(t)&&!o(r)?t!=t&&r!=r:n(t,r,a,i,e,c))}},766:function(e,t,r){var n=r(767),o=r(774),a=r(776),i=r(777),c=r(780),s=r(110),l=r(781),u=r(782),p="[object Object]",f=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,d,m,b){var O=s(e),y=s(t),h=O?"[object Array]":c(e),v=y?"[object Array]":c(t),g=(h="[object Arguments]"==h?p:h)==p,j=(v="[object Arguments]"==v?p:v)==p,P=h==v;if(P&&l(e)){if(!l(t))return!1;O=!0,g=!1}if(P&&!g)return b||(b=new n),O||u(e)?o(e,t,r,d,m,b):a(e,t,h,r,d,m,b);if(!(1&r)){var w=g&&f.call(e,"__wrapped__"),E=j&&f.call(t,"__wrapped__");if(w||E){var _=w?e.value():e,k=E?t.value():t;return b||(b=new n),m(_,k,r,d,b)}}return!!P&&(b||(b=new n),i(e,t,r,d,m,b))}},767:function(e,t,r){var n=r(768),o=r(769),a=r(771),i=r(772),c=r(773);function s(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=c,e.exports=s},768:function(e,t){e.exports=function(){this.__data__=[],this.size=0}},769:function(e,t,r){var n=r(611),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,r=n(t,e);return!(r<0)&&(r==t.length-1?t.pop():o.call(t,r,1),--this.size,!0)}},770:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},771:function(e,t,r){var n=r(611);e.exports=function(e){var t=this.__data__,r=n(t,e);return r<0?void 0:t[r][1]}},772:function(e,t,r){var n=r(611);e.exports=function(e){return n(this.__data__,e)>-1}},773:function(e,t,r){var n=r(611);e.exports=function(e,t){var r=this.__data__,o=n(r,e);return o<0?(++this.size,r.push([e,t])):r[o][1]=t,this}},774:function(e,t,r){var n=r(307),o=r(775),a=r(308);e.exports=function(e,t,r,i,c,s){var l=1&r,u=e.length,p=t.length;if(u!=p&&!(l&&p>u))return!1;var f=s.get(e);if(f&&s.get(t))return f==t;var d=-1,m=!0,b=2&r?new n:void 0;for(s.set(e,t),s.set(t,e);++d<u;){var O=e[d],y=t[d];if(i)var h=l?i(y,O,d,t,e,s):i(O,y,d,e,t,s);if(void 0!==h){if(h)continue;m=!1;break}if(b){if(!o(t,(function(e,t){if(!a(b,t)&&(O===e||c(O,e,r,i,s)))return b.push(t)}))){m=!1;break}}else if(O!==y&&!c(O,y,r,i,s)){m=!1;break}}return s.delete(e),s.delete(t),m}},775:function(e,t){e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}},776:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},777:function(e,t,r){var n=r(778),o=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,a,i,c){var s=1&r,l=n(e),u=l.length;if(u!=n(t).length&&!s)return!1;for(var p=u;p--;){var f=l[p];if(!(s?f in t:o.call(t,f)))return!1}var d=c.get(e);if(d&&c.get(t))return d==t;var m=!0;c.set(e,t),c.set(t,e);for(var b=s;++p<u;){var O=e[f=l[p]],y=t[f];if(a)var h=s?a(y,O,f,t,e,c):a(O,y,f,e,t,c);if(!(void 0===h?O===y||i(O,y,r,a,c):h)){m=!1;break}b||(b="constructor"==f)}if(m&&!b){var v=e.constructor,g=t.constructor;v==g||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof g&&g instanceof g||(m=!1)}return c.delete(e),c.delete(t),m}},778:function(e,t,r){var n=r(779)(Object.keys,Object);e.exports=n},779:function(e,t){e.exports=function(e,t){return function(r){return e(t(r))}}},780:function(e,t){var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},781:function(e,t){e.exports=function(){return!1}},782:function(e,t){e.exports=function(){return!1}},783:function(e,t,r){"use strict";var n,o=r(0),a=r.n(o),i=r(545),c=r(704),s=r(705),l=r(612),u=r(695),p=r(675),f=r(613),d=r(20),m=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},b=function(){return(b=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},O=Object(d.b)(i.a)(n||(n=m(["\n  flex: 1;\n"],["\n  flex: 1;\n"])));t.a=function(e){return a.a.createElement(f.a,{key:e.id},a.a.createElement(c.a,null,a.a.createElement(O,null,a.a.createElement(l.a,{height:40,sourceId:e.source_id}),e.editMode&&a.a.createElement(u.a,{id:e.id,isChecked:e.checked,handleCheck:e.onToggleItemSelect}))),a.a.createElement(p.a,b({},e)),a.a.createElement(s.a,null))}},784:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(13),o=r.n(n),a=r(70),i=r.n(a),c=r(598);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e){var t=e.pathname,r=e.preserveSearch,n=e.id,o=i()(e,["pathname","preserveSearch","id"]);return{component:c.b.TOOLBAR_ITEM,key:"".concat(o.key,"/button-link"),fields:[{component:c.b.LINK,pathname:t,preserveSearch:r,key:"".concat(o.key,"/button-link"),isDisabled:o.isDisabled,id:n,fields:[l({component:c.b.BUTTON},o)]}]}}},949:function(e,t,r){"use strict";r.r(t);var n=r(581),o=r.n(n),a=r(26),i=r.n(a),c=r(13),s=r.n(c),l=r(69),u=r.n(l),p=r(0),f=r.n(p),d=r(4),m=r.n(d),b=r(70),O=r.n(b),y=r(580),h=r.n(y),v=r(625),g=r.n(v),j=r(614),P=r(596),w=r(578),E=r(48),_=r(18),k=function(e){var t=e.platform,r=Object(_.a)();return f.a.createElement(P.b,{Icon:t?h.a:g.a,title:r(t?E.a.addProducstFilterTitle:E.a.addProducstPlatformTitle),description:r(t?w.a.noResultsDescription:E.a.addProducstPlatformDescription)})};k.propTypes={platform:m.a.any};var S=function(e){var t=e.platform,r=O()(e,["platform"]);return f.a.createElement(j.a,u()({editMode:!0},r,{renderEmptyState:function(){return f.a.createElement(k,{platform:t})}}))};S.propTypes={checkedItems:m.a.arrayOf(m.a.string),platform:m.a.any},S.defaultProps={checkedItems:[]};var F=S,x=r(601),I=r(23),C=r(783),T=r(598),R=r(784),D=r(65),N=r(764),A=r.n(N),L=function(){return(L=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},V=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},q=function(e){var t=e.onChange,r=V(e,["onChange"]),n=Object(p.useState)(void 0),o=n[0],a=n[1];return f.a.createElement("div",{key:"filter-select",id:"filter-select",className:"filter-select"},f.a.createElement(D.InternalSelect,L({isDisabled:!r.options||0===r.options.length,name:"filter-select",simpleValue:!1,onChange:function(e){t&&t(e||o),a(e||o)},value:o},r)))};q.propTypes={options:m.a.array,onChange:m.a.func.isRequired};var M=Object(p.memo)(q,(function(e,t){return A()(e.options,t.options)})),B=r(692),z=r(577);function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var U=function(e){var t=e.options,r=e.isFetching,n=e.searchValue,o=e.portfolioName,a=e.itemsSelected,i=e.onOptionSelect,c=e.onFilterChange,s=e.portfolioRoute,l=e.onClickAddToPortfolio,u=e.meta,p=e.platformId,f=e.fetchPlatformItems;return{fields:[{component:T.b.TOP_TOOLBAR,key:"add-products-toolbar",fields:[{component:T.b.TOP_TOOLBAR_TITLE,title:"Add products: ".concat(o),key:"add-products-title"},{component:T.b.LEVEL,key:"add-products-actions",fields:[{component:T.b.TOOLBAR,key:"add-products-actions-toolbar",fields:[{component:T.b.TOOLBAR_GROUP,key:"products-filter-group",fields:[{component:M,key:"select-platforms",id:"products-platform-select",isMulti:!1,isSearchable:!0,placeholder:"Filter by Platform",options:t,onChange:i},{component:T.b.FILTER_TOOLBAR_ITEM,key:"filter-products-input",onFilterChange:c,searchValue:n,isDisabled:!p,placeholder:"Filter products"}]},J({groupName:"cancel-group-item"},Object(R.a)({key:"add-products-cancel-button",pathname:s,variant:"link","aria-label":"Cancel Add products to Portfolio",preserveSearch:!0,title:"Cancel"})),{component:T.b.TOOLBAR_ITEM,key:"add-group-item",fields:[{key:"portfolio-items-add-group",component:B.a,variant:"primary","aria-label":"Add products to Portfolio",title:"Add",type:"button",onClick:l,isDisabled:!a||r,showSpinner:r,children:"Add",id:"add-products-to-portfolio"}]}]},{component:T.b.LEVEL_ITEM,key:"pagination-item",fields:u?[{component:z.a,key:"add-products-pagination",meta:u,apiProps:p,apiRequest:f,isCompact:!0}]:[]}]}]}]}},G=r(595),K=r(135),W=r(582),Q=r(19),X=r(615),Y=r(106);function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return e.map((function(e){return f.a.createElement(C.a,u()({key:e.id},e,{editMode:!0,onToggleItemSelect:function(){return t(e.id)},checked:r.includes(e.id)}))}))},te={filterValue:"",isFetching:!1,isFiltering:!1},re=function(e,t){switch(t.type){case"setFetching":return $($({},e),{},{isFetching:t.payload});case"setFilterValue":return $($({},e),{},{filterValue:t.payload});case"setFilteringFlag":return $($({},e),{},{isFiltering:t.payload})}return e},ne=Object(Y.a)((function(e,t,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:I.a;n(!0),r(Object(G.b)(e,t,$($({},o),{},{filter:t}))).then((function(){return n(!1)}))}),1e3),oe=function(e){var t=e.portfolioRoute,r=Object(p.useState)(void 0),n=i()(r,2),a=n[0],c=n[1],s=Object(p.useState)([]),l=i()(s,2),u=l[0],d=l[1],m=Object(p.useReducer)(re,te),b=i()(m,2),O=b[0],y=O.filterValue,h=O.isFetching,v=b[1],g=Object(W.a)().push,j=Object(Q.useDispatch)(),P=Object(Q.useSelector)((function(e){var t=e.portfolioReducer.selectedPortfolio,r=e.platformReducer;return{platforms:r.platforms,platformItems:r.platformItems,isLoading:r.isPlatformDataLoading,portfolio:t}})),w=P.portfolio,E=P.platforms,_=P.platformItems,k=P.isLoading;Object(p.useEffect)((function(){j(Object(G.c)())}),[]);var S=a&&_[a.id]?_[a.id].data:[],C=a&&_[a.id]&&_[a.id].meta;return f.a.createElement(p.Fragment,null,f.a.createElement(x.a,{schema:U({options:E.map((function(e){return{value:e.id,label:e.name,id:e.id}})),isFetching:h,portfolioName:w&&w.name||"",itemsSelected:u.length>0,onOptionSelect:function(e){c(e),j(Object(G.b)(e.id,y,I.a))},onFilterChange:function(e){return function(e){v({type:"setFilterValue",payload:e}),ne(a.id,e,j,(function(e){return v({type:"setFilteringFlag",payload:e})}),$($({},C),{},{offset:0}))}(e)},portfolioRoute:t,onClickAddToPortfolio:function(){return j({type:"setFetching",payload:!0}),j(Object(K.b)(w.id,u)).then((function(){return j({type:"setFetching",payload:!1})})).then((function(){return g({pathname:t,search:"?portfolio=".concat(w.id)})})).then((function(){return j(Object(K.f)(w.id))})).catch((function(){return j({type:"setFetching",payload:!1})}))},meta:C,platformId:a&&a.id,searchValue:y,fetchPlatformItems:function(e,t){return j(Object(G.b)(e,y,t))}})}),f.a.createElement(F,{platform:!!a,checkedItems:u,isLoading:k,items:ee(S,(function(e){return d(function(e){var t=u.indexOf(e);return t>-1?[].concat(o()(u.slice(0,t)),o()(u.slice(t+1))):[].concat(o()(u),[e])}(e))}),u)}),C&&C.count>0&&f.a.createElement(X.a,null,f.a.createElement(z.a,{meta:C,apiProps:a&&a.id,apiRequest:function(e,t){return Object(G.b)(e,y,t)},dropDirection:"up"})))};oe.propTypes={portfolioRoute:m.a.string.isRequired};t.default=oe}}]);
//# sourceMappingURL=../sourcemaps/add-products-to-portfolio~31ecd969.js.map