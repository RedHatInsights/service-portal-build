(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{42:function(e,t,n){
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var a=arguments[r];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=n.apply(null,a);o&&e.push(o)}else if("object"===i)for(var c in a)t.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("classnames",[],(function(){return n})):window.classNames=n}()},640:function(e,t,n){"use strict";var r=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a};var a=function(e,t){if(null==e)return{};var n,a,i=r(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i};t._objectWithoutProperties=a},642:function(e,t,n){"use strict";var r=n(641);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(r.a)(e,t,n)}},645:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0}),n(147);var a=n(268),i=n(267),o=n(640),c=r(n(0)),l=r(n(1)),s=r(n(42)),u=function(e){var t=e.type,n=e.children,r=e.className,l=o._objectWithoutProperties(e,["type","children","className"]),u=s(r,i._defineProperty({},"ins-l-".concat(t),void 0!==t));return c.createElement("section",a._extends({},l,{className:u})," ",n," ")};u.propTypes={type:l.string,className:l.string,children:l.any.isRequired},t.Section=u},649:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(0),a=n.n(r),i=n(1),o=n.n(i),c=n(75),l=n(574),s=n(575),u=n(576),p=n(577),f=n(44),m=n(73),d=n(643),y=function(e){var t=e.title,n=e.Icon,r=e.description,i=e.PrimaryAction,o=e.renderDescription;return a.a.createElement("div",{className:"pf-u-mt-xl"},a.a.createElement(l.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},a.a.createElement(s.EmptyStateIcon,{icon:n}),a.a.createElement(m.TextContent,null,a.a.createElement(f.Text,{component:f.TextVariants.h1},t)),a.a.createElement(u.EmptyStateBody,null,r,o()),a.a.createElement(p.EmptyStateSecondaryActions,null,i&&a.a.createElement(i,null))))};y.defaultProps={renderDescription:function(){return null}},y.propTypes={title:o.a.string.isRequired,Icon:o.a.any.isRequired,description:o.a.string,PrimaryAction:o.a.any,renderDescription:o.a.func},t.b=y;var h=function(e){var t=e.url,n=e.label,r=e.hasPermission,i=void 0!==r&&r,o=e.id;return i&&a.a.createElement(d.a,{id:o,pathname:t,preserveSearch:!0},a.a.createElement(c.Button,{variant:"primary"},n))};h.propTypes={url:o.a.string.isRequired,label:o.a.string.isRequired,od:o.a.string}},654:function(e,t,n){"use strict";var r=n(72),a=n.n(r),i=n(50),o=n.n(i),c=n(0),l=n.n(c),s=n(51),u=n(1),p=n.n(u);function f(){var e=o()(["\n  overflow: hidden;\n"]);return f=function(){return e},e}var m=s.b.div(f()),d=function(e){var t=e.toDisplay,n=void 0===t?[]:t,r=a()(e,["toDisplay"]);return n.map((function(e){return l.a.createElement(m,{key:"card-prop-".concat(e)},r[e])}))};d.propTypes={toDisplay:p.a.arrayOf(p.a.oneOfType([p.a.string,p.a.node,p.a.arrayOf(p.a.node)]))},d.defaultProps={toDisplay:[]},t.a=d},655:function(e,t,n){"use strict";var r=n(50),a=n.n(r);function i(){var e=a()(["\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"]);return i=function(){return e},e}var o=n(51).b.div(i());t.a=o},656:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(50),a=n.n(r),i=n(51),o=n(114);function c(){var e=a()(["\n  height: 230px;\n  overflow: hidden;\n  padding: 0 !important;\n  margin: 0 24px 24px;\n"]);return c=function(){return e},e}var l=Object(i.b)(o.CardBody)(c())},657:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return y}));var r=n(72),a=n.n(r),i=n(50),o=n.n(i),c=n(0),l=n.n(c),s=n(51),u=n(113),p=n(152);function f(){var e=o()(["\n  position: relative;\n  ::after {\n    display: ",";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    content: '';\n    background-color: rgba(210, 210, 210, 0.5);\n    z-index: 1;\n    cursor: progress;\n  }\n"]);return f=function(){return e},e}function m(){var e=o()(["\n  height: 330px;\n  position: relative;\n"]);return m=function(){return e},e}var d=Object(s.b)(u.Card)(m()),y=Object(s.b)((function(e){e.isDisabled;var t=a()(e,["isDisabled"]);return l.a.createElement(p.GalleryItem,t)}))(f(),(function(e){return e.isDisabled?"block":"none"}))},659:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(1),o=n.n(i),c=n(645),l=n(44),s=n(154),u=n(76),p=function(){return a.a.createElement("div",null,a.a.createElement(l.Text,{component:l.TextVariants.h1},"No items found"))},f=function(e){var t=e.isLoading,n=e.items,r=e.renderEmptyState;return t?a.a.createElement(u.b,null):0===n.length?r?r():a.a.createElement(p,null):a.a.createElement(c.Section,{type:"content"},a.a.createElement(s.Gallery,{gutter:"md",className:"content-gallery"},n))};f.propTypes={isLoading:o.a.bool,items:o.a.array,renderEmptyState:o.a.func},t.a=f},660:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(1),o=n.n(i),c=function(e){var t=e.children;return a.a.createElement("div",{className:"pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto"},t)};c.propTypes={children:o.a.oneOfType([o.a.node,o.a.arrayOf(o.a.node)])},t.a=c},669:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(1),o=n.n(i),c=n(573),l=function(e){var t=e.handleCheck,n=e.isChecked,r=e.id;return a.a.createElement(c.Checkbox,{onClick:function(e){return e.stopPropagation()},isChecked:n,onChange:t,"aria-label":"card checkbox",id:r})};l.propTypes={handleCheck:o.a.func,isChecked:o.a.bool,id:o.a.string},t.a=l},670:function(e,t,n){"use strict";var r=n(2),a=n.n(r),i=n(639),o=n.n(i),c=n(72),l=n.n(c),s=n(0),u=n.n(s),p=n(1),f=n.n(p),m=n(44),d=n(73),y=n(654),h=n(671),b=n(655),g=n(656),v=function(e){var t=e.name,n=(e.display_name,e.distributor),r=e.pathname,a=e.searchParams,i=e.preserveSearch,c=e.portfolioName,p=l()(e,["name","display_name","distributor","pathname","searchParams","preserveSearch","portfolioName"]);return u.a.createElement(g.a,null,u.a.createElement(d.TextContent,null,u.a.createElement(h.a,{pathname:r,searchParams:a,preserveSearch:i},u.a.createElement(m.Text,{component:m.TextVariants.h3,title:t},u.a.createElement(b.a,null,t))),n&&u.a.createElement(m.Text,{component:m.TextVariants.small},n),c&&u.a.createElement(s.Fragment,null,u.a.createElement(m.Text,{className:"pf-u-mb-0",component:"small"},"Portfolio"),u.a.createElement(m.Text,null,c))),u.a.createElement(y.a,o()({toDisplay:[p.description?"description":"long_description"]},p)))};v.propTypes={name:f.a.string,display_name:f.a.string,distributor:f.a.string,long_description:f.a.string,description:f.a.string,pathname:f.a.string,preserveSearch:f.a.bool,searchParams:f.a.shape(a()({},f.a.string,f.a.string)),portfolioName:f.a.string},t.a=v},701:function(e,t,n){"use strict";var r=n(72),a=n.n(r),i=n(0),o=n.n(i),c=n(1),l=n.n(c),s=n(579),u=n(580),p=n(269),f=n(666),m=n(669),d=n(670),y=n(657),h=function(e){e.src;var t=a()(e,["src"]);return o.a.createElement(y.a,{key:t.id},o.a.createElement(s.CardHeader,null,o.a.createElement(p.Level,null,o.a.createElement(f.a,{height:40,sourceId:t.source_id}),t.editMode&&o.a.createElement(m.a,{id:t.id,isChecked:t.checked,handleCheck:t.onToggleItemSelect}))),o.a.createElement(d.a,t),o.a.createElement(u.CardFooter,null))};h.propTypes={id:l.a.string.isRequired,service_offering_icon_id:l.a.string,source_id:l.a.string,platformId:l.a.string,name:l.a.string,editMode:l.a.bool,checked:l.a.bool,onToggleItemSelect:l.a.func,src:l.a.string},t.a=h},742:function(e,t,n){"use strict";n.r(t);var r=n(639),a=n.n(r),i=n(39),o=n.n(i),c=n(2),l=n.n(c),s=n(0),u=n.n(s),p=n(33),f=n(572),m=n.n(f),d=n(150),y=n(662),h=n(74),b=n(648),g=n(701),v=n(680),E=n(649),O=n(642),j=n(659),P=n(75),x=n(644),T=n(660),w=n(77),k=n(11);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},D=function(e,t){switch(t.type){case"setFetching":return C(C({},e),{},{isFetching:t.payload});case"setFilterValue":return C(C({},e),{},{filterValue:t.payload});case"setFilteringFlag":return C(C({},e),{},{isFiltering:t.payload});default:return e}},N=Object(O.a)((function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:h.a;r(!0),n(Object(b.b)(e,t,a)).then((function(){return r(!1)}))}),1e3);t.default=function(){var e=Object(w.a)(["platform"]),t=o()(e,1)[0].platform,n=Object(s.useReducer)(D,F),r=o()(n,2),i=r[0],c=i.filterValue,l=i.isFetching,f=i.isFiltering,O=r[1],S=Object(p.useSelector)((function(e){var n=e.platformReducer.platformItems;return n[t]?n[t]:{data:[],meta:h.a}})),_=S.data,I=S.meta,R=Object(p.useSelector)((function(e){var t=e.platformReducer;return{platform:t.selectedPlatform,platformIconMapping:t.platformIconMapping}})),V=R.platform,q=R.platformIconMapping,A=Object(p.useDispatch)();Object(s.useEffect)((function(){A(Object(b.b)(t,c,h.a)).then((function(){return O({type:"setFetching",payload:!1})})),Object(d.c)()}),[t]);var M=function(e){O({type:"setFilterValue",payload:e}),N(t,e,A,(function(e){return O({type:"setFilteringFlag",payload:e})}),C(C({},I),{},{offset:0}))},L={items:_?_.map((function(e){return u.a.createElement(g.a,a()({key:e.id,pathname:k.q,searchParams:{service:e.id},preserveSearch:!0,src:q[t]},e))})):[]},B=V?V.name:"";return u.a.createElement(s.Fragment,null,u.a.createElement(y.a,{schema:Object(v.a)({onFilterChange:M,searchValue:c,filterPlaceholder:"Filter by template",meta:I,apiRequest:function(e,n){return A(Object(b.b)(t,c,n))}})}),u.a.createElement(j.a,a()({title:B,isLoading:l||f,renderEmptyState:function(){return u.a.createElement(E.b,{title:""===c?"No templates":"No results found",Icon:m.a,PrimaryAction:function(){return""!==c?u.a.createElement(P.Button,{onClick:function(){return M("")},variant:"link"},"Clear all filters"):null},description:""===c?"This platform has no templates.":"No results match the filter critera. Remove all filters or clear all filters to show results."})}},L)),I.count>0&&u.a.createElement(T.a,null,u.a.createElement(x.a,{dropDirection:"up",meta:I,apiRequest:function(e,n){return A(Object(b.b)(t,c,n))}})))}}}]);
//# sourceMappingURL=../sourcemaps/platform-templates~31ecd969.js.map