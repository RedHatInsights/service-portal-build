(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{42:function(e,t,r){
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var c in a)t.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("classnames",[],(function(){return r})):window.classNames=r}()},640:function(e,t,r){"use strict";var n=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a};var a=function(e,t){if(null==e)return{};var r,a,o=n(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o};t._objectWithoutProperties=a},642:function(e,t,r){"use strict";var n=r(641);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(n.a)(e,t,r)}},644:function(e,t,r){"use strict";var n=r(639),a=r.n(n),o=r(72),i=r.n(o),c=r(0),l=r.n(c),s=r(1),p=r.n(s),u=r(641),f=r(273),m=r(74),d=function(e){var t=e.meta,r=t.limit,n=t.count,o=t.offset,c=e.apiProps,s=e.apiRequest,p=e.className,d=e.isCompact,b=i()(e,["meta","apiProps","apiRequest","className","isCompact"]);return l.a.createElement("div",{className:p},l.a.createElement(f.Pagination,a()({perPage:r||50,itemCount:n||0,onPerPageSelect:function(e,t){return s(c,{offset:o,limit:t})},page:Object(m.b)(r,o),onSetPage:function(e,t,n){var a={offset:Object(m.c)(t,r),limit:r},o=function(){return s(c,a)};return n?Object(u.a)(o,250)():o()},direction:"down",isCompact:d},b)))};d.propTypes={meta:p.a.shape({count:p.a.number,limit:p.a.number.isRequired,offset:p.a.number.isRequired}),apiRequest:p.a.func.isRequired,apiProps:p.a.any,className:p.a.string,isCompact:p.a.bool},d.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1},t.a=d},645:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0}),r(147);var a=r(268),o=r(267),i=r(640),c=n(r(0)),l=n(r(1)),s=n(r(42)),p=function(e){var t=e.type,r=e.children,n=e.className,l=i._objectWithoutProperties(e,["type","children","className"]),p=s(n,o._defineProperty({},"ins-l-".concat(t),void 0!==t));return c.createElement("section",a._extends({},l,{className:p})," ",r," ")};p.propTypes={type:l.string,className:l.string,children:l.any.isRequired},t.Section=p},649:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var n=r(0),a=r.n(n),o=r(1),i=r.n(o),c=r(75),l=r(574),s=r(575),p=r(576),u=r(577),f=r(44),m=r(73),d=r(643),b=function(e){var t=e.title,r=e.Icon,n=e.description,o=e.PrimaryAction,i=e.renderDescription;return a.a.createElement("div",{className:"pf-u-mt-xl"},a.a.createElement(l.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},a.a.createElement(s.EmptyStateIcon,{icon:r}),a.a.createElement(m.TextContent,null,a.a.createElement(f.Text,{component:f.TextVariants.h1},t)),a.a.createElement(p.EmptyStateBody,null,n,i()),a.a.createElement(u.EmptyStateSecondaryActions,null,o&&a.a.createElement(o,null))))};b.defaultProps={renderDescription:function(){return null}},b.propTypes={title:i.a.string.isRequired,Icon:i.a.any.isRequired,description:i.a.string,PrimaryAction:i.a.any,renderDescription:i.a.func},t.b=b;var y=function(e){var t=e.url,r=e.label,n=e.hasPermission,o=void 0!==n&&n,i=e.id;return o&&a.a.createElement(d.a,{id:i,pathname:t,preserveSearch:!0},a.a.createElement(c.Button,{variant:"primary"},r))};y.propTypes={url:i.a.string.isRequired,label:i.a.string.isRequired,od:i.a.string}},654:function(e,t,r){"use strict";var n=r(72),a=r.n(n),o=r(50),i=r.n(o),c=r(0),l=r.n(c),s=r(51),p=r(1),u=r.n(p);function f(){var e=i()(["\n  overflow: hidden;\n"]);return f=function(){return e},e}var m=s.b.div(f()),d=function(e){var t=e.toDisplay,r=void 0===t?[]:t,n=a()(e,["toDisplay"]);return r.map((function(e){return l.a.createElement(m,{key:"card-prop-".concat(e)},n[e])}))};d.propTypes={toDisplay:u.a.arrayOf(u.a.oneOfType([u.a.string,u.a.node,u.a.arrayOf(u.a.node)]))},d.defaultProps={toDisplay:[]},t.a=d},655:function(e,t,r){"use strict";var n=r(50),a=r.n(n);function o(){var e=a()(["\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"]);return o=function(){return e},e}var i=r(51).b.div(o());t.a=i},656:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(50),a=r.n(n),o=r(51),i=r(114);function c(){var e=a()(["\n  height: 230px;\n  overflow: hidden;\n  padding: 0 !important;\n  margin: 0 24px 24px;\n"]);return c=function(){return e},e}var l=Object(o.b)(i.CardBody)(c())},657:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(72),a=r.n(n),o=r(50),i=r.n(o),c=r(0),l=r.n(c),s=r(51),p=r(113),u=r(152);function f(){var e=i()(["\n  position: relative;\n  ::after {\n    display: ",";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    content: '';\n    background-color: rgba(210, 210, 210, 0.5);\n    z-index: 1;\n    cursor: progress;\n  }\n"]);return f=function(){return e},e}function m(){var e=i()(["\n  height: 330px;\n  position: relative;\n"]);return m=function(){return e},e}var d=Object(s.b)(p.Card)(m()),b=Object(s.b)((function(e){e.isDisabled;var t=a()(e,["isDisabled"]);return l.a.createElement(u.GalleryItem,t)}))(f(),(function(e){return e.isDisabled?"block":"none"}))},659:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(1),i=r.n(o),c=r(645),l=r(44),s=r(154),p=r(76),u=function(){return a.a.createElement("div",null,a.a.createElement(l.Text,{component:l.TextVariants.h1},"No items found"))},f=function(e){var t=e.isLoading,r=e.items,n=e.renderEmptyState;return t?a.a.createElement(p.b,null):0===r.length?n?n():a.a.createElement(u,null):a.a.createElement(c.Section,{type:"content"},a.a.createElement(s.Gallery,{gutter:"md",className:"content-gallery"},r))};f.propTypes={isLoading:i.a.bool,items:i.a.array,renderEmptyState:i.a.func},t.a=f},660:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(1),i=r.n(o),c=function(e){var t=e.children;return a.a.createElement("div",{className:"pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto"},t)};c.propTypes={children:i.a.oneOfType([i.a.node,i.a.arrayOf(i.a.node)])},t.a=c},672:function(e,t,r){"use strict";r.d(t,"b",(function(){return p})),r.d(t,"a",(function(){return u}));var n=r(2),a=r.n(n),o=r(72),i=r.n(o),c=r(650);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){var t=e.groupName,r=e.hidden,n=void 0!==r&&r,a=i()(e,["groupName","hidden"]);return{component:c.b.TOOLBAR_GROUP,key:"".concat(t,"/single-toolbar-item-group"),fields:n?[]:[{component:c.b.TOOLBAR_ITEM,key:"".concat(t,"/single-toolbar-item"),fields:[a]}]}},u=function(e){var t=e.pathname,r=e.preserveSearch,n=i()(e,["pathname","preserveSearch"]);return{component:c.b.LINK,pathname:t,preserveSearch:r,key:"".concat(n.key,"/button-link"),isDisabled:n.isDisabled,fields:[s({component:c.b.BUTTON},n)]}}},769:function(e,t,r){"use strict";r.r(t);var n=r(639),a=r.n(n),o=r(39),i=r.n(o),c=r(2),l=r.n(c),s=r(0),p=r.n(s),u=r(33),f=r(60),m=r(572),d=r.n(m),b=r(593),y=r.n(b),h=r(75),O=r(150),v=r(662),g=r(659),E=r(74),j=r(653),P=r(72),w=r.n(P),D=r(1),T=r.n(D),k=r(654),C=r(579),R=r(580),N=r(274),S=r(275),x=r(35),q=r(276),I=r(44),F=r(73),_=r(153),L=r(50),A=r.n(L),V=r(45),B=r(269),U=r(270),H=r(655),M=r(51);function G(){var e=A()(["\n  max-width: calc(100% - 44px);\n"]);return G=function(){return e},e}var J=Object(M.b)(U.LevelItem)(G()),K=function(e){var t=e.id,r=e.to,n=e.portfolioName,a=e.headerActions;return p.a.createElement(B.Level,null,p.a.createElement(J,{className:"pf-m-grow"},p.a.createElement(F.TextContent,null,p.a.createElement(V.a,{to:r,id:"portfolio-link-".concat(t)},p.a.createElement(I.Text,{title:n,className:"pf-u-mb-0",component:I.TextVariants.h3},p.a.createElement(H.a,null,n))))),p.a.createElement(U.LevelItem,{onClick:function(e){return e.preventDefault()}},a))};K.propTypes={portfolioName:T.a.string.isRequired,headerActions:T.a.node,id:T.a.string,to:T.a.shape({pathname:T.a.string.isRequired,search:T.a.string.isRequired}).isRequired},K.defaultProps={headerActions:[]};var W=K,z=r(643),Q=r(11),X=r(657),Y=r(656);function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var $=["description"],ee=function(e){var t=e.portfolioId,r=e.handleCopyPortfolio,n=e.userCapabilities,a=n.share,o=n.copy,c=n.unshare,l=n.update,u=n.destroy,f=n.set_approval,m=Object(s.useState)(!1),d=i()(m,2),b=d[0],y=d[1],h=[];return(a||c)&&h.push(p.a.createElement(S.DropdownItem,{key:"share-portfolio-action",id:"share-portfolio-action",component:p.a.createElement(z.a,{searchParams:{portfolio:t},pathname:Q.w,preserveHash:!0},"Share")})),o&&h.push(p.a.createElement(S.DropdownItem,{key:"copy-portfolio-action",id:"copy-portfolio-action",onClick:function(){return r(t)}},"Copy")),f&&h.push(p.a.createElement(S.DropdownItem,{key:"workflow-portfolio-action",id:"workflow-portfolio-action",component:p.a.createElement(z.a,{searchParams:{portfolio:t},pathname:Q.d,preserveHash:!0},"Set approval")})),l&&h.push(p.a.createElement(S.DropdownItem,{key:"edit-portfolio-action",id:"edit-portfolio-action",component:p.a.createElement(z.a,{searchParams:{portfolio:t},pathname:Q.c,preserveHash:!0},"Edit")})),u&&h.push(p.a.createElement(S.DropdownItem,{key:"remove-portfolio-action",id:"remove-portfolio-action",component:p.a.createElement(z.a,{searchParams:{portfolio:t},pathname:Q.v,preserveHash:!0},"Delete")})),0===h.length?null:p.a.createElement(N.Dropdown,{key:"portfolio-dropdown",id:"portfolio-".concat(t,"-dropdown"),isOpen:b,isPlain:!0,onSelect:function(){return y(!1)},position:x.DropdownPosition.right,toggle:p.a.createElement(q.KebabToggle,{id:"portfolio-".concat(t,"-toggle"),onToggle:function(e){return y(e)}}),dropdownItems:h})};ee.propTypes={portfolioId:T.a.string.isRequired,userCapabilities:T.a.shape({destroy:T.a.bool,update:T.a.bool,share:T.a.bool,unshare:T.a.bool,set_approval:T.a.bool,copy:T.a.bool}).isRequired,handleCopyPortfolio:T.a.func.isRequired};var te=function(e){var t=e.imageUrl,r=e.isDisabled,n=e.name,o=e.id,i=e.handleCopyPortfolio,c=e.metadata.user_capabilities,s=w()(e,["imageUrl","isDisabled","name","id","handleCopyPortfolio","metadata"]),u={pathname:Q.u,search:"?portfolio=".concat(o)};return p.a.createElement(X.b,{isDisabled:r},p.a.createElement(X.a,null,p.a.createElement(C.CardHeader,null,p.a.createElement(W,{id:o,to:u,portfolioName:n,headerActions:p.a.createElement(ee,{portfolioId:o,userCapabilities:c,handleCopyPortfolio:i})})),p.a.createElement(Y.a,null,p.a.createElement(F.TextContent,{className:"pf-u-mb-md"},p.a.createElement(I.Text,{component:I.TextVariants.small,className:"pf-i-mb-sm"},"Last updated ",p.a.createElement(_.DateFormat,{date:s.updated_at||s.created_at,type:"relative"})),p.a.createElement(I.Text,{component:I.TextVariants.small},s.owner)),p.a.createElement(k.a,a()({},function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({name:n,imageUrl:t},s),{toDisplay:$}))),p.a.createElement(R.CardFooter,null)))};te.propTypes={history:T.a.object,imageUrl:T.a.string,name:T.a.string,id:T.a.string.isRequired,updated_at:T.a.string,created_at:T.a.string.isRequired,owner:T.a.string,isDisabled:T.a.bool,metadata:T.a.shape({user_capabilities:T.a.object.isRequired}).isRequired,handleCopyPortfolio:T.a.func.isRequired};var re=te,ne=r(650),ae=r(672),oe=r(644);function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var le=function(e){var t=e.meta,r=e.fetchPortfolios,n=e.userPermissions,a=e.filterProps,o=a.searchValue,i=a.onFilterChange,c=a.placeholder;return{fields:[{component:ne.b.TOP_TOOLBAR,key:"portfolios-top-toolbar",fields:[{component:ne.b.TOP_TOOLBAR_TITLE,key:"portfolios-toolbar-title",title:"Portfolios",noData:t.noData},{component:ne.b.LEVEL,key:"portfolios-actions",fields:t.noData?[]:[{component:ne.b.TOOLBAR,key:"main-portfolio-toolbar",fields:[Object(ae.b)({groupName:"filter-group",component:ne.b.FILTER_TOOLBAR_ITEM,key:"filter-input",searchValue:o,onFilterChange:i,placeholder:c,isClearable:!0}),Object(ae.b)(ce({hidden:0===t.count||!Object(O.a)(n,["catalog:portfolios:create"]),groupName:"portfolio-button-group",key:"create-portfolio"},Object(ae.a)({pathname:"/portfolios/add-portfolio",variant:"primary",key:"create-portfolio-button","aria-label":"Create portfolio",title:"Create"})))]},{component:ne.b.LEVEL_ITEM,key:"pagination-item",fields:t.count>0?[{component:oe.a,isCompact:!0,key:"portfolios-pagination",meta:t,apiRequest:r}]:[]}]}]}]}},se=r(649),pe=r(642),ue=r(660),fe=r(81),me=r(159);function de(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function be(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?de(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):de(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ye=Object(pe.a)((function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:E.a;r(!0),t(Object(j.h)(be(be({},n),{},{filter:e}))).then((function(){return r(!1)}))}),1e3),he={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},Oe=function(e,t){switch(t.type){case"setFetching":return be(be({},e),{},{isFetching:t.payload});case"setFilterValue":return be(be({},e),{},{filterValue:t.payload});case"setFilteringFlag":return be(be({},e),{},{isFiltering:t.payload})}return e};t.default=function(){var e,t=Object(me.a)(),r=Object(s.useReducer)(Oe,be(be({},he),{},{filterValue:(null==t||null===(e=t.portfolio)||void 0===e?void 0:e.filter)||""})),n=i()(r,2),o=n[0],c=o.filterValue,l=o.isFetching,m=o.isFiltering,b=n[1],E=Object(u.useSelector)((function(e){return e.portfolioReducer.portfolios})),P=E.data,w=E.meta,D=Object(u.useDispatch)(),T=Object(s.useContext)(fe.a).permissions,k=Object(f.g)();Object(s.useEffect)((function(){D(Object(j.h)(null==t?void 0:t.portfolio)).then((function(){return b({type:"setFetching",payload:!1})})),Object(O.c)(),insights.chrome.appNavClick({id:"portfolios",secondaryNav:!0})}),[]);var C=function(e){b({type:"setFilterValue",payload:e}),ye(e,D,(function(e){return b({type:"setFilteringFlag",payload:e})}),be(be({},w),{},{offset:0}))},R=function(e){return D(Object(j.c)(e)).then((function(e){var t=e.id;return k.push({pathname:Q.u,search:"?portfolio=".concat(t)})}))},N={PrimaryAction:w.noData?function(){return p.a.createElement(se.a,{url:Q.a,id:"create-portfolio",label:"Create portfolio",hasPermission:Object(O.a)(T,["catalog:portfolios:create"])})}:function(){return p.a.createElement(h.Button,{variant:"link",onClick:function(){return C("")}},"Clear all filters")},title:w.noData?"No portfolios":"No results found",description:w.noData?"No portfolios match your filter criteria.":"No results match the filter criteria. Remove all filters or clear all filters to show results.",Icon:w.noData?y.a:d.a},S=P.map((function(e){return p.a.createElement(re,a()({key:e.id},e,{handleCopyPortfolio:R}))}));return p.a.createElement(s.Fragment,null,p.a.createElement(v.a,{schema:le({meta:w,userPermissions:T,fetchPortfolios:function(e,t){return D(Object(j.h)(be({filter:c},t)))},filterProps:{searchValue:c,onFilterChange:C,placeholder:"Filter by portfolio"}})}),p.a.createElement(g.a,{items:S,isLoading:l||m,renderEmptyState:function(){return p.a.createElement(se.b,N)}}),w.count>0&&p.a.createElement(ue.a,null,p.a.createElement(oe.a,{meta:w,apiRequest:function(e,t){return D(Object(j.h)(be({filter:c},t)))},dropDirection:"up"})))}}}]);
//# sourceMappingURL=../sourcemaps/portfolios~31ecd969.js.map