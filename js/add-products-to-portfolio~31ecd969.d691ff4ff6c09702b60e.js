(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{602:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(643),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};t.a=function(e){var t=e.children,r=e.className,n=c(e,["children","className"]);return o.a.createElement("div",i({className:Object(a.a)("pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto",r)},n),t)}},609:function(e,t,r){"use strict";t.__esModule=!0,t.FilterIconConfig={name:"FilterIcon",height:512,width:512,svgPath:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z",yOffset:0,xOffset:0},t.FilterIcon=r(77).createIcon(t.FilterIconConfig),t.default=t.FilterIcon},619:function(e,t,r){var n=r(769);e.exports=function(e,t){for(var r=e.length;r--;)if(n(e[r][0],t))return r;return-1}},620:function(e,t,r){var n=r(728);e.exports=function(e,t){if(null==e)return{};var r,o,a=n(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}},642:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(286),i=r(135),c=r(622),l=r(674),s=r(623),u=r(624),p=function(){return(p=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},f=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};t.a=function(e){var t=e.name,r=e.distributor,d=e.pathname,b=e.searchParams,m=e.preserveSearch,h=e.portfolioName,O=f(e,["name","distributor","pathname","searchParams","preserveSearch","portfolioName"]);return o.a.createElement(u.a,null,o.a.createElement(a.a,null,o.a.createElement(l.a,{pathname:d,searchParams:b,preserveSearch:m},o.a.createElement(i.a,{component:i.b.h3,title:t},o.a.createElement(s.a,null,t))),r&&o.a.createElement(i.a,{component:i.b.small},r),h&&o.a.createElement(n.Fragment,null,o.a.createElement(i.a,{className:"pf-u-mb-0",component:"small"},"Portfolio"),o.a.createElement(i.a,null,h))),o.a.createElement(c.a,p({toDisplay:[O.description?"description":"long_description"]},O)))}},659:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(1),i=r(296),c=r.n(i),l=r(2);const s=()=>{};class u extends n.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e.currentTarget.checked,e)}}render(){const e=this.props,{"aria-label":t,className:r,onChange:o,isValid:i,isDisabled:u,isChecked:p,label:f,checked:d,defaultChecked:b,description:m}=e,h=Object(a.__rest)(e,["aria-label","className","onChange","isValid","isDisabled","isChecked","label","checked","defaultChecked","description"]),O={};return([!0,!1].includes(d)||!0===p)&&(O.checked=d||p),o!==s&&(O.checked=p),[!1,!0].includes(b)&&(O.defaultChecked=b),O.checked=null!==O.checked&&O.checked,n.createElement("div",{className:Object(l.css)(c.a.check,r)},n.createElement("input",Object.assign({},h,{className:Object(l.css)(c.a.checkInput),type:"checkbox",onChange:this.handleChange,"aria-invalid":!i,"aria-label":t,disabled:u,ref:e=>e&&(e.indeterminate=null===p)},O)),f&&n.createElement("label",{className:Object(l.css)(c.a.checkLabel,u&&c.a.modifiers.disabled),htmlFor:h.id},f),m&&n.createElement("div",{className:Object(l.css)(c.a.checkDescription)},m))}}u.displayName="Checkbox",u.defaultProps={className:"",isValid:!0,isDisabled:!1,isChecked:!1,onChange:s};t.a=function(e){var t=e.handleCheck,r=e.isChecked,n=e.id;return o.a.createElement(u,{onClick:function(e){return e.stopPropagation()},isChecked:r,onChange:t,"aria-label":"card checkbox",id:n})}},724:function(e,t,r){var n=r(725),o=r(726),a=r(305),i=r(727);e.exports=function(e){return n(e)||o(e)||a(e)||i()}},725:function(e,t,r){var n=r(306);e.exports=function(e){if(Array.isArray(e))return n(e)}},726:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},727:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},728:function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}},744:function(e,t,r){"use strict";var n,o,a=r(0),i=r.n(a),c=r(20),l=r(134),s=r(186),u=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},p=function(){return(p=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},f=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},d=Object(c.b)(l.a)(n||(n=u(["\n  display: flex !important;\n  align-items: center;\n"],["\n  display: flex !important;\n  align-items: center;\n"]))),b=c.b.span(o||(o=u(["\n  margin-right: ",";\n"],["\n  margin-right: ",";\n"])),(function(e){return e.showSpinner?"8px":"0"})),m=Object(a.forwardRef)((function(e,t){var r=e.children,n=e.showSpinner,o=void 0!==n&&n,a=e.isDisabled,c=void 0!==a&&a,l=f(e,["children","showSpinner","isDisabled"]);return i.a.createElement(d,p({ref:t},l,{isDisabled:c}),i.a.createElement(b,{showSpinner:o},r),o&&i.a.createElement(s.Spinner,{size:"md"}))}));m.displayName="ButtonWithSpinner",t.a=m},763:function(e,t,r){var n=r(764);e.exports=function(e,t){return n(e,t)}},764:function(e,t,r){var n=r(765),o=r(313);e.exports=function e(t,r,a,i,c){return t===r||(null==t||null==r||!o(t)&&!o(r)?t!=t&&r!=r:n(t,r,a,i,e,c))}},765:function(e,t,r){var n=r(766),o=r(773),a=r(775),i=r(776),c=r(779),l=r(117),s=r(780),u=r(781),p="[object Object]",f=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,d,b,m){var h=l(e),O=l(t),y=h?"[object Array]":c(e),v=O?"[object Array]":c(t),g=(y="[object Arguments]"==y?p:y)==p,j=(v="[object Arguments]"==v?p:v)==p,P=y==v;if(P&&s(e)){if(!s(t))return!1;h=!0,g=!1}if(P&&!g)return m||(m=new n),h||u(e)?o(e,t,r,d,b,m):a(e,t,y,r,d,b,m);if(!(1&r)){var k=g&&f.call(e,"__wrapped__"),w=j&&f.call(t,"__wrapped__");if(k||w){var E=k?e.value():e,x=w?t.value():t;return m||(m=new n),b(E,x,r,d,m)}}return!!P&&(m||(m=new n),i(e,t,r,d,b,m))}},766:function(e,t,r){var n=r(767),o=r(768),a=r(770),i=r(771),c=r(772);function l(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}l.prototype.clear=n,l.prototype.delete=o,l.prototype.get=a,l.prototype.has=i,l.prototype.set=c,e.exports=l},767:function(e,t){e.exports=function(){this.__data__=[],this.size=0}},768:function(e,t,r){var n=r(619),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,r=n(t,e);return!(r<0)&&(r==t.length-1?t.pop():o.call(t,r,1),--this.size,!0)}},769:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},770:function(e,t,r){var n=r(619);e.exports=function(e){var t=this.__data__,r=n(t,e);return r<0?void 0:t[r][1]}},771:function(e,t,r){var n=r(619);e.exports=function(e){return n(this.__data__,e)>-1}},772:function(e,t,r){var n=r(619);e.exports=function(e,t){var r=this.__data__,o=n(r,e);return o<0?(++this.size,r.push([e,t])):r[o][1]=t,this}},773:function(e,t,r){var n=r(311),o=r(774),a=r(312);e.exports=function(e,t,r,i,c,l){var s=1&r,u=e.length,p=t.length;if(u!=p&&!(s&&p>u))return!1;var f=l.get(e);if(f&&l.get(t))return f==t;var d=-1,b=!0,m=2&r?new n:void 0;for(l.set(e,t),l.set(t,e);++d<u;){var h=e[d],O=t[d];if(i)var y=s?i(O,h,d,t,e,l):i(h,O,d,e,t,l);if(void 0!==y){if(y)continue;b=!1;break}if(m){if(!o(t,(function(e,t){if(!a(m,t)&&(h===e||c(h,e,r,i,l)))return m.push(t)}))){b=!1;break}}else if(h!==O&&!c(h,O,r,i,l)){b=!1;break}}return l.delete(e),l.delete(t),b}},774:function(e,t){e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}},775:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},776:function(e,t,r){var n=r(777),o=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,a,i,c){var l=1&r,s=n(e),u=s.length;if(u!=n(t).length&&!l)return!1;for(var p=u;p--;){var f=s[p];if(!(l?f in t:o.call(t,f)))return!1}var d=c.get(e);if(d&&c.get(t))return d==t;var b=!0;c.set(e,t),c.set(t,e);for(var m=l;++p<u;){var h=e[f=s[p]],O=t[f];if(a)var y=l?a(O,h,f,t,e,c):a(h,O,f,e,t,c);if(!(void 0===y?h===O||i(h,O,r,a,c):y)){b=!1;break}m||(m="constructor"==f)}if(b&&!m){var v=e.constructor,g=t.constructor;v==g||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof g&&g instanceof g||(b=!1)}return c.delete(e),c.delete(t),b}},777:function(e,t,r){var n=r(778)(Object.keys,Object);e.exports=n},778:function(e,t){e.exports=function(e,t){return function(r){return e(t(r))}}},779:function(e,t){var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},780:function(e,t){e.exports=function(){return!1}},781:function(e,t){e.exports=function(){return!1}},782:function(e,t,r){"use strict";var n,o=r(0),a=r.n(o),i=r(545),c=r(966),l=r(967),s=r(621),u=r(659),p=r(642),f=r(625),d=r(20),b=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},m=function(){return(m=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},h=Object(d.b)(i.a)(n||(n=b(["\n  flex: 1;\n"],["\n  flex: 1;\n"])));t.a=function(e){return a.a.createElement(f.a,{key:e.id},a.a.createElement(c.a,null,a.a.createElement(h,null,a.a.createElement(s.a,{height:40,sourceId:e.source_id}),e.editMode&&a.a.createElement(u.a,{id:e.id,isChecked:e.checked,handleCheck:e.onToggleItemSelect}))),a.a.createElement(p.a,m({},e)),a.a.createElement(l.a,null))}},783:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(139),o=r.n(n),a=r(620),i=r.n(a),c=r(601);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e){var t=e.pathname,r=e.preserveSearch,n=e.id,o=i()(e,["pathname","preserveSearch","id"]);return{component:c.b.TOOLBAR_ITEM,key:"".concat(o.key,"/button-link"),fields:[{component:c.b.LINK,pathname:t,preserveSearch:r,key:"".concat(o.key,"/button-link"),isDisabled:o.isDisabled,id:n,fields:[s({component:c.b.BUTTON},o)]}]}}},988:function(e,t,r){"use strict";r.r(t);var n=r(724),o=r.n(n),a=r(98),i=r.n(a),c=r(139),l=r.n(c),s=r(595),u=r.n(s),p=r(0),f=r.n(p),d=r(13),b=r.n(d),m=r(620),h=r.n(m),O=r(577),y=r.n(O),v=r(609),g=r.n(v),j=r(626),P=r(608),k=r(576),w=r(44),E=r(17),x=function(e){var t=e.platform,r=Object(E.a)();return f.a.createElement(P.b,{Icon:t?y.a:g.a,title:r(t?w.a.addProducstFilterTitle:w.a.addProducstPlatformTitle),description:r(t?k.a.noResultsDescription:w.a.addProducstPlatformDescription)})};x.propTypes={platform:b.a.any};var S=function(e){var t=e.platform,r=h()(e,["platform"]);return f.a.createElement(j.a,u()({editMode:!0},r,{renderEmptyState:function(){return f.a.createElement(x,{platform:t})}}))};S.propTypes={checkedItems:b.a.arrayOf(b.a.string),platform:b.a.any},S.defaultProps={checkedItems:[]};var _=S,C=r(607),I=r(24),F=r(782),D=r(601),T=r(783),A=r(65),R=r(763),N=r.n(R),L=function(){return(L=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},V=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},M=function(e){var t=e.onChange,r=V(e,["onChange"]),n=Object(p.useState)(void 0),o=n[0],a=n[1];return f.a.createElement("div",{key:"filter-select",id:"filter-select",className:"filter-select"},f.a.createElement(A.InternalSelect,L({isDisabled:!r.options||0===r.options.length,name:"filter-select",simpleValue:!1,onChange:function(e){t&&t(e||o),a(e||o)},value:o},r)))};M.propTypes={options:b.a.array,onChange:b.a.func.isRequired};var B=Object(p.memo)(M,(function(e,t){return N()(e.options,t.options)})),z=r(744),q=r(594);function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var G=function(e){var t=e.options,r=e.isFetching,n=e.searchValue,o=e.portfolioName,a=e.itemsSelected,i=e.onOptionSelect,c=e.onFilterChange,l=e.portfolioRoute,s=e.onClickAddToPortfolio,u=e.meta,p=e.platformId,f=e.fetchPlatformItems;return{fields:[{component:D.b.TOP_TOOLBAR,key:"add-products-toolbar",fields:[{component:D.b.TOP_TOOLBAR_TITLE,title:"Add products: ".concat(o),key:"add-products-title"},{component:D.b.LEVEL,key:"add-products-actions",fields:[{component:D.b.TOOLBAR,key:"add-products-actions-toolbar",fields:[{component:D.b.TOOLBAR_GROUP,key:"products-filter-group",fields:[{component:B,key:"select-platforms",id:"products-platform-select",isMulti:!1,isSearchable:!0,placeholder:"Filter by Platform",options:t,onChange:i},{component:D.b.FILTER_TOOLBAR_ITEM,key:"filter-products-input",onFilterChange:c,searchValue:n,isDisabled:!p,placeholder:"Filter products"}]},U({groupName:"cancel-group-item"},Object(T.a)({key:"add-products-cancel-button",pathname:l,variant:"link","aria-label":"Cancel Add products to Portfolio",preserveSearch:!0,title:"Cancel"})),{component:D.b.TOOLBAR_ITEM,key:"add-group-item",fields:[{key:"portfolio-items-add-group",component:z.a,variant:"primary","aria-label":"Add products to Portfolio",title:"Add",type:"button",onClick:s,isDisabled:!a||r,showSpinner:r,children:"Add",id:"add-products-to-portfolio"}]}]},{component:D.b.LEVEL_ITEM,key:"pagination-item",fields:u?[{component:q.a,key:"add-products-pagination",meta:u,apiProps:p,apiRequest:f,isCompact:!0}]:[]}]}]}]}},H=r(600),K=r(140),W=r(580),Q=r(18),X=r(602),Y=r(111);function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return e.map((function(e){return f.a.createElement(F.a,u()({key:e.id},e,{editMode:!0,onToggleItemSelect:function(){return t(e.id)},checked:r.includes(e.id)}))}))},te={filterValue:"",isFetching:!1,isFiltering:!1},re=function(e,t){switch(t.type){case"setFetching":return $($({},e),{},{isFetching:t.payload});case"setFilterValue":return $($({},e),{},{filterValue:t.payload});case"setFilteringFlag":return $($({},e),{},{isFiltering:t.payload})}return e},ne=Object(Y.a)((function(e,t,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:I.a;n(!0),r(Object(H.b)(e,t,$($({},o),{},{filter:t}))).then((function(){return n(!1)}))}),1e3),oe=function(e){var t=e.portfolioRoute,r=Object(p.useState)(void 0),n=i()(r,2),a=n[0],c=n[1],l=Object(p.useState)([]),s=i()(l,2),u=s[0],d=s[1],b=Object(p.useReducer)(re,te),m=i()(b,2),h=m[0],O=h.filterValue,y=h.isFetching,v=m[1],g=Object(W.a)().push,j=Object(Q.useDispatch)(),P=Object(Q.useSelector)((function(e){var t=e.portfolioReducer.selectedPortfolio,r=e.platformReducer;return{platforms:r.platforms,platformItems:r.platformItems,isLoading:r.isPlatformDataLoading,portfolio:t}})),k=P.portfolio,w=P.platforms,E=P.platformItems,x=P.isLoading;Object(p.useEffect)((function(){j(Object(H.c)())}),[]);var S=a&&E[a.id]?E[a.id].data:[],F=a&&E[a.id]&&E[a.id].meta;return f.a.createElement(p.Fragment,null,f.a.createElement(C.a,{schema:G({options:w.map((function(e){return{value:e.id,label:e.name,id:e.id}})),isFetching:y,portfolioName:k&&k.name||"",itemsSelected:u.length>0,onOptionSelect:function(e){c(e),j(Object(H.b)(e.id,O,I.a))},onFilterChange:function(e){return function(e){v({type:"setFilterValue",payload:e}),ne(a.id,e,j,(function(e){return v({type:"setFilteringFlag",payload:e})}),$($({},F),{},{offset:0}))}(e)},portfolioRoute:t,onClickAddToPortfolio:function(){return j({type:"setFetching",payload:!0}),j(Object(K.b)(k.id,u)).then((function(){return j({type:"setFetching",payload:!1})})).then((function(){return g({pathname:t,search:"?portfolio=".concat(k.id)})})).then((function(){return j(Object(K.f)(k.id))})).catch((function(){return j({type:"setFetching",payload:!1})}))},meta:F,platformId:a&&a.id,searchValue:O,fetchPlatformItems:function(e,t){return j(Object(H.b)(e,O,t))}})}),f.a.createElement(_,{platform:!!a,checkedItems:u,isLoading:x,items:ee(S,(function(e){return d(function(e){var t=u.indexOf(e);return t>-1?[].concat(o()(u.slice(0,t)),o()(u.slice(t+1))):[].concat(o()(u),[e])}(e))}),u)}),F&&F.count>0&&f.a.createElement(X.a,null,f.a.createElement(q.a,{meta:F,apiProps:a&&a.id,apiRequest:function(e,t){return Object(H.b)(e,O,t)},dropDirection:"up"})))};oe.propTypes={portfolioRoute:b.a.string.isRequired};t.default=oe}}]);
//# sourceMappingURL=../sourcemaps/add-products-to-portfolio~31ecd969.js.map