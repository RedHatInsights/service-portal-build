(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1077:function(e,t,r){"use strict";r.r(t);var n=r(134),a=r.n(n),o=r(107),c=r.n(o),i=r(40),l=r.n(i),s=r(151),u=r.n(s),p=r(0),f=r.n(p),d=r(5),m=r.n(d),b=r(243),h=r.n(b),O=r(631),y=r.n(O),v=r(667),g=r.n(v),j=r(749),P=r(690),k=r(636),E=r(57),w=r(27),C=function(e){var t=e.platform,r=Object(w.a)();return f.a.createElement(P.b,{Icon:t?y.a:g.a,title:r(t?E.a.addProducstFilterTitle:E.a.addProducstPlatformTitle),description:r(t?k.a.noResultsDescription:E.a.addProducstPlatformDescription)})};C.propTypes={platform:m.a.any};var _=function(e){var t=e.platform,r=h()(e,["platform"]);return f.a.createElement(j.a,u()({editMode:!0},r,{renderEmptyState:function(){return f.a.createElement(C,{platform:t})}}))};_.propTypes={checkedItems:m.a.arrayOf(m.a.string),platform:m.a.any},_.defaultProps={checkedItems:[]};var S=_,x=r(679),I=r(36),F=r(882),N=r(674),T=r(883),D=r(82),R=r(760),L=r.n(R),A=function(){return(A=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},V=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},B=function(e){var t=e.onChange,r=V(e,["onChange"]),n=Object(p.useState)(void 0),a=n[0],o=n[1];return f.a.createElement("div",{key:"filter-select",id:"filter-select",className:"filter-select"},f.a.createElement(D.InternalSelect,A({isDisabled:!r.options||0===r.options.length,name:"filter-select",simpleValue:!1,onChange:function(e){t&&t(e||a),o(e||a)},value:a},r)))};B.propTypes={options:m.a.array,onChange:m.a.func.isRequired};var M=Object(p.memo)(B,(function(e,t){return L()(e.options,t.options)})),q=r(855),z=r(629);function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var U=function(e){var t=e.options,r=e.isFetching,n=e.searchValue,a=e.portfolioName,o=e.itemsSelected,c=e.onOptionSelect,i=e.onFilterChange,l=e.portfolioRoute,s=e.onClickAddToPortfolio,u=e.meta,p=e.platformId,f=e.fetchPlatformItems;return{fields:[{component:N.b.TOP_TOOLBAR,key:"add-products-toolbar",fields:[{component:N.b.TOP_TOOLBAR_TITLE,title:"Add products: ".concat(a),key:"add-products-title"},{component:N.b.LEVEL,key:"add-products-actions",fields:[{component:N.b.TOOLBAR,key:"add-products-actions-toolbar",fields:[{component:N.b.TOOLBAR_GROUP,key:"products-filter-group",fields:[{component:M,key:"select-platforms",id:"products-platform-select",isMulti:!1,isSearchable:!0,placeholder:"Filter by Platform",options:t,onChange:c},{component:N.b.FILTER_TOOLBAR_ITEM,key:"filter-products-input",onFilterChange:i,searchValue:n,isDisabled:!p,placeholder:"Filter products"}]},J({groupName:"cancel-group-item"},Object(T.a)({key:"add-products-cancel-button",pathname:l,variant:"link","aria-label":"Cancel Add products to Portfolio",preserveSearch:!0,title:"Cancel"})),{component:N.b.TOOLBAR_ITEM,key:"add-group-item",fields:[{key:"portfolio-items-add-group",component:q.a,variant:"primary","aria-label":"Add products to Portfolio",title:"Add",type:"button",onClick:s,isDisabled:!o||r,showSpinner:r,children:"Add",id:"add-products-to-portfolio"}]}]},{component:N.b.LEVEL_ITEM,key:"pagination-item",fields:u?[{component:z.a,key:"add-products-pagination",meta:u,apiProps:p,apiRequest:f,isCompact:!0}]:[]}]}]}]}},G=r(654),K=r(150),W=r(635),Q=r(25),X=r(656),Y=r(149);function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return e.map((function(e){return f.a.createElement(F.a,u()({key:e.id},e,{editMode:!0,onToggleItemSelect:function(){return t(e.id)},checked:r.includes(e.id)}))}))},te={filterValue:"",isFetching:!1,isFiltering:!1},re=function(e,t){switch(t.type){case"setFetching":return $($({},e),{},{isFetching:t.payload});case"setFilterValue":return $($({},e),{},{filterValue:t.payload});case"setFilteringFlag":return $($({},e),{},{isFiltering:t.payload})}return e},ne=Object(Y.a)((function(e,t,r,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:I.a;n(!0),r(Object(G.b)(e,t,$($({},a),{},{filter:t}))).then((function(){return n(!1)}))}),1e3),ae=function(e){var t=e.portfolioRoute,r=Object(p.useState)(void 0),n=c()(r,2),o=n[0],i=n[1],l=Object(p.useState)([]),s=c()(l,2),u=s[0],d=s[1],m=Object(p.useReducer)(re,te),b=c()(m,2),h=b[0],O=h.filterValue,y=h.isFetching,v=b[1],g=Object(W.a)().push,j=Object(Q.d)(),P=Object(Q.e)((function(e){var t=e.portfolioReducer.selectedPortfolio,r=e.platformReducer;return{platforms:r.platforms,platformItems:r.platformItems,isLoading:r.isPlatformDataLoading,portfolio:t}})),k=P.portfolio,E=P.platforms,w=P.platformItems,C=P.isLoading;Object(p.useEffect)((function(){j(Object(G.c)())}),[]);var _=o&&w[o.id]?w[o.id].data:[],F=o&&w[o.id]&&w[o.id].meta;return f.a.createElement(p.Fragment,null,f.a.createElement(x.a,{schema:U({options:E.map((function(e){return{value:e.id,label:e.name,id:e.id}})),isFetching:y,portfolioName:k&&k.name||"",itemsSelected:u.length>0,onOptionSelect:function(e){i(e),j(Object(G.b)(e.id,O,I.a))},onFilterChange:function(e){return function(e){v({type:"setFilterValue",payload:e}),ne(o.id,e,j,(function(e){return v({type:"setFilteringFlag",payload:e})}),$($({},F),{},{offset:0}))}(e)},portfolioRoute:t,onClickAddToPortfolio:function(){return j({type:"setFetching",payload:!0}),j(Object(K.b)(k.id,u)).then((function(){return j({type:"setFetching",payload:!1})})).then((function(){return g({pathname:t,search:"?portfolio=".concat(k.id)})})).then((function(){return j(Object(K.f)(k.id))})).catch((function(){return j({type:"setFetching",payload:!1})}))},meta:F,platformId:o&&o.id,searchValue:O,fetchPlatformItems:function(e,t){return j(Object(G.b)(e,O,t))}})}),f.a.createElement(S,{platform:!!o,checkedItems:u,isLoading:C,items:ee(_,(function(e){return d(function(e){var t=u.indexOf(e);return t>-1?[].concat(a()(u.slice(0,t)),a()(u.slice(t+1))):[].concat(a()(u),[e])}(e))}),u)}),F&&F.count>0&&f.a.createElement(X.a,null,f.a.createElement(z.a,{meta:F,apiProps:o&&o.id,apiRequest:function(e,t){return Object(G.b)(e,O,t)},dropDirection:"up"})))};ae.propTypes={portfolioRoute:m.a.string.isRequired};t.default=ae},629:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(242),c=r(184),i=r(36),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};t.a=function(e){var t=e.meta,r=t.limit,n=void 0===r?50:r,u=t.count,p=void 0===u?0:u,f=t.offset,d=void 0===f?0:f,m=e.apiProps,b=e.apiRequest,h=e.className,O=void 0===h?"":h,y=e.isCompact,v=void 0!==y&&y,g=s(e,["meta","apiProps","apiRequest","className","isCompact"]);return a.a.createElement("div",{className:O},a.a.createElement(c.a,l({perPage:n||50,itemCount:p||0,onPerPageSelect:function(e,t){return b(m,{offset:d,limit:t})},page:Object(i.b)(n,d),onSetPage:function(e,t,r){var a={offset:Object(i.c)(t,n),limit:n},c=function(){return b(m,a)};return r?Object(o.a)(c,250)():c()},dropDirection:"down",isCompact:v},g)))}},644:function(e,t,r){var n=r(732);e.exports=function(e,t){for(var r=e.length;r--;)if(n(e[r][0],t))return r;return-1}},656:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(655),c=function(){return(c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};t.a=function(e){var t=e.children,r=e.className,n=i(e,["children","className"]);return a.a.createElement("div",c({className:Object(o.a)("pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto",r)},n),t)}},667:function(e,t,r){"use strict";t.__esModule=!0,t.FilterIconConfig={name:"FilterIcon",height:512,width:512,svgPath:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z",yOffset:0,xOffset:0},t.FilterIcon=r(97).createIcon(t.FilterIconConfig),t.default=t.FilterIcon},712:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(147),c=r(77),i=r(742),l=r(678),s=r(745),u=r(746),p=function(){return(p=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},f=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};t.a=function(e){var t=e.name,r=e.distributor,d=e.pathname,m=e.searchParams,b=e.preserveSearch,h=e.portfolioName,O=f(e,["name","distributor","pathname","searchParams","preserveSearch","portfolioName"]);return a.a.createElement(u.a,null,a.a.createElement(o.a,null,a.a.createElement(l.a,{pathname:d,searchParams:m,preserveSearch:b},a.a.createElement(c.a,{component:c.b.h3,title:t},a.a.createElement(s.a,null,t))),r&&a.a.createElement(c.a,{component:c.b.small},r),h&&a.a.createElement(n.Fragment,null,a.a.createElement(c.a,{className:"pf-u-mb-0",component:"small"},"Portfolio"),a.a.createElement(c.a,null,h))),a.a.createElement(i.c,p({toDisplay:[O.description?"description":"long_description"]},O)))}},732:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},741:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(2),c=r(368),i=r.n(c),l=r(1);const s=()=>{};class u extends n.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e.currentTarget.checked,e)}}render(){const e=this.props,{"aria-label":t,className:r,onChange:a,isValid:c,isDisabled:u,isChecked:p,label:f,checked:d,defaultChecked:m,description:b}=e,h=Object(o.__rest)(e,["aria-label","className","onChange","isValid","isDisabled","isChecked","label","checked","defaultChecked","description"]);h.id||console.error("Checkbox:","id is required to make input accessible");const O={};return([!0,!1].includes(d)||!0===p)&&(O.checked=d||p),a!==s&&(O.checked=p),[!1,!0].includes(m)&&(O.defaultChecked=m),O.checked=null!==O.checked&&O.checked,n.createElement("div",{className:Object(l.css)(i.a.check,r)},n.createElement("input",Object.assign({},h,{className:Object(l.css)(i.a.checkInput),type:"checkbox",onChange:this.handleChange,"aria-invalid":!c,"aria-label":t,disabled:u,ref:e=>e&&(e.indeterminate=null===p)},O)),f&&n.createElement("label",{className:Object(l.css)(i.a.checkLabel,u&&i.a.modifiers.disabled),htmlFor:h.id},f),b&&n.createElement("div",{className:Object(l.css)(i.a.checkDescription)},b))}}u.displayName="Checkbox",u.defaultProps={className:"",isValid:!0,isDisabled:!1,isChecked:!1,onChange:s};t.a=function(e){var t=e.handleCheck,r=e.isChecked,n=e.id;return a.a.createElement(u,{onClick:function(e){return e.stopPropagation()},isChecked:r,onChange:t,"aria-label":"card checkbox",id:n})}},756:function(e,t,r){var n=r(792),a=r(793),o=r(794),c=r(795),i=r(796);function l(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}l.prototype.clear=n,l.prototype.delete=a,l.prototype.get=o,l.prototype.has=c,l.prototype.set=i,e.exports=l},757:function(e,t){e.exports=function(e,t){return function(r){return e(t(r))}}},758:function(e,t){e.exports=function(){return!1}},759:function(e,t){e.exports=function(){return!1}},760:function(e,t,r){var n=r(761);e.exports=function(e,t){return n(e,t)}},761:function(e,t,r){var n=r(797),a=r(371);e.exports=function e(t,r,o,c,i){return t===r||(null==t||null==r||!a(t)&&!a(r)?t!=t&&r!=r:n(t,r,o,c,e,i))}},792:function(e,t){e.exports=function(){this.__data__=[],this.size=0}},793:function(e,t,r){var n=r(644),a=Array.prototype.splice;e.exports=function(e){var t=this.__data__,r=n(t,e);return!(r<0)&&(r==t.length-1?t.pop():a.call(t,r,1),--this.size,!0)}},794:function(e,t,r){var n=r(644);e.exports=function(e){var t=this.__data__,r=n(t,e);return r<0?void 0:t[r][1]}},795:function(e,t,r){var n=r(644);e.exports=function(e){return n(this.__data__,e)>-1}},796:function(e,t,r){var n=r(644);e.exports=function(e,t){var r=this.__data__,a=n(r,e);return a<0?(++this.size,r.push([e,t])):r[a][1]=t,this}},797:function(e,t,r){var n=r(756),a=r(798),o=r(800),c=r(801),i=r(803),l=r(133),s=r(758),u=r(759),p="[object Object]",f=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,d,m,b){var h=l(e),O=l(t),y=h?"[object Array]":i(e),v=O?"[object Array]":i(t),g=(y="[object Arguments]"==y?p:y)==p,j=(v="[object Arguments]"==v?p:v)==p,P=y==v;if(P&&s(e)){if(!s(t))return!1;h=!0,g=!1}if(P&&!g)return b||(b=new n),h||u(e)?a(e,t,r,d,m,b):o(e,t,y,r,d,m,b);if(!(1&r)){var k=g&&f.call(e,"__wrapped__"),E=j&&f.call(t,"__wrapped__");if(k||E){var w=k?e.value():e,C=E?t.value():t;return b||(b=new n),m(w,C,r,d,b)}}return!!P&&(b||(b=new n),c(e,t,r,d,m,b))}},798:function(e,t,r){var n=r(372),a=r(799),o=r(373);e.exports=function(e,t,r,c,i,l){var s=1&r,u=e.length,p=t.length;if(u!=p&&!(s&&p>u))return!1;var f=l.get(e);if(f&&l.get(t))return f==t;var d=-1,m=!0,b=2&r?new n:void 0;for(l.set(e,t),l.set(t,e);++d<u;){var h=e[d],O=t[d];if(c)var y=s?c(O,h,d,t,e,l):c(h,O,d,e,t,l);if(void 0!==y){if(y)continue;m=!1;break}if(b){if(!a(t,(function(e,t){if(!o(b,t)&&(h===e||i(h,e,r,c,l)))return b.push(t)}))){m=!1;break}}else if(h!==O&&!i(h,O,r,c,l)){m=!1;break}}return l.delete(e),l.delete(t),m}},799:function(e,t){e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}},800:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},801:function(e,t,r){var n=r(802),a=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,o,c,i){var l=1&r,s=n(e),u=s.length;if(u!=n(t).length&&!l)return!1;for(var p=u;p--;){var f=s[p];if(!(l?f in t:a.call(t,f)))return!1}var d=i.get(e);if(d&&i.get(t))return d==t;var m=!0;i.set(e,t),i.set(t,e);for(var b=l;++p<u;){var h=e[f=s[p]],O=t[f];if(o)var y=l?o(O,h,f,t,e,i):o(h,O,f,e,t,i);if(!(void 0===y?h===O||c(h,O,r,o,i):y)){m=!1;break}b||(b="constructor"==f)}if(m&&!b){var v=e.constructor,g=t.constructor;v==g||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof g&&g instanceof g||(m=!1)}return i.delete(e),i.delete(t),m}},802:function(e,t,r){var n=r(757)(Object.keys,Object);e.exports=n},803:function(e,t){var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},855:function(e,t,r){"use strict";var n,a,o=r(0),c=r.n(o),i=r(29),l=r(76),s=r(191),u=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},p=function(){return(p=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},f=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},d=Object(i.b)(l.a)(n||(n=u(["\n  display: flex !important;\n  align-items: center;\n"],["\n  display: flex !important;\n  align-items: center;\n"]))),m=i.b.span(a||(a=u(["\n  margin-right: ",";\n"],["\n  margin-right: ",";\n"])),(function(e){return e.showSpinner?"8px":"0"})),b=Object(o.forwardRef)((function(e,t){var r=e.children,n=e.showSpinner,a=void 0!==n&&n,o=e.isDisabled,i=void 0!==o&&o,l=f(e,["children","showSpinner","isDisabled"]);return c.a.createElement(d,p({ref:t},l,{isDisabled:i}),c.a.createElement(m,{showSpinner:a},r),a&&c.a.createElement(s.Spinner,{size:"md"}))}));b.displayName="ButtonWithSpinner",t.a=b},863:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r(2),a=r(0),o=r(1),c=r(62),i=r.n(c),l=r(193),s=r(76),u=r(237);const p=e=>{var{children:t=null,className:r="",id:c,onExpand:p,toggleButtonProps:f}=e,d=Object(n.__rest)(e,["children","className","id","onExpand","toggleButtonProps"]);return a.createElement(l.b.Consumer,null,({cardId:e})=>a.createElement("div",Object.assign({className:Object(o.css)(i.a.cardHeader,r),id:c},d),p&&a.createElement("div",{className:Object(o.css)(i.a.cardHeaderToggle)},a.createElement(s.a,Object.assign({variant:"plain",type:"button",onClick:t=>{p(t,e)}},f),a.createElement("span",{className:Object(o.css)(i.a.cardHeaderToggleIcon)},a.createElement(u.a,{"aria-hidden":"true"})))),t))};p.displayName="CardHeader"},864:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(2),a=r(0),o=r(62),c=r.n(o),i=r(1);const l=e=>{var{children:t=null,className:r="",component:o="div"}=e,l=Object(n.__rest)(e,["children","className","component"]);const s=o;return a.createElement(s,Object.assign({className:Object(i.css)(c.a.cardFooter,r)},l),t)};l.displayName="CardFooter"},882:function(e,t,r){"use strict";var n,a=r(0),o=r.n(a),c=r(222),i=r(863),l=r(864),s=r(675),u=r(741),p=r(712),f=r(747),d=r(29),m=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},b=function(){return(b=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},h=Object(d.b)(c.a)(n||(n=m(["\n  flex: 1;\n"],["\n  flex: 1;\n"])));t.a=function(e){return o.a.createElement(f.a,{key:e.id,ouiaId:"platform-item"+e.id},o.a.createElement(i.a,null,o.a.createElement(h,null,o.a.createElement(s.a,{height:40,sourceId:e.source_id}),e.editMode&&o.a.createElement(u.a,{id:e.id,isChecked:e.checked,handleCheck:e.onToggleItemSelect}))),o.a.createElement(p.a,b({},e)),o.a.createElement(l.a,null))}},883:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(40),a=r.n(n),o=r(243),c=r.n(o),i=r(674);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e){var t=e.pathname,r=e.preserveSearch,n=e.id,a=c()(e,["pathname","preserveSearch","id"]);return{component:i.b.TOOLBAR_ITEM,key:"".concat(a.key,"/button-link"),fields:[{component:i.b.LINK,pathname:t,preserveSearch:r,key:"".concat(a.key,"/button-link"),isDisabled:a.isDisabled,id:n,fields:[s({component:i.b.BUTTON},a)]}]}}}}]);
//# sourceMappingURL=../sourcemaps/add-products-to-portfolio~31ecd969.js.map