(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1026:function(e,t,r){"use strict";r.r(t);var o=r(164),a=r.n(o),n=r(650),i=r.n(n),c=r(117),s=r.n(c),l=r(0),p=r.n(l),u=r(16),d=r.n(u),f=r(97),m=r(21),b=r(642),h=r(686),y=r.n(h),O=r(334),g=r(63),P=r(345),v=r(335),k=r(628),j=r(839),E=r(640),C=r(622),w=r(809),R=r(20),I=r(44),_=r(9);function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=function(e){var t=e.editPortfolioRoute,r=e.workflowPortfolioRoute,o=e.removePortfolioRoute,a=e.copyInProgress,n=e.copyPortfolio,i=e.userCapabilities,c=i.copy,u=i.destroy,d=i.update,f=i.set_approval,m=e.canLinkOrderProcesses,b=Object(l.useState)(!1),h=s()(b,2),y=h[0],k=h[1],j=Object(R.a)(),E=[];if(d&&E.push(p.a.createElement(v.DropdownItem,{"aria-label":"Edit Portfolio",key:"edit-portfolio",id:"edit-portfolio",component:p.a.createElement(C.a,{id:"edit-portfolio",preserveSearch:!0,pathname:t},"Edit"),role:"link"})),c&&E.push(p.a.createElement(v.DropdownItem,{component:"button","aria-label":"Copy Portfolio",key:"copy-portfolio",id:"copy-portfolio",onClick:n},"Copy")),f&&E.push(p.a.createElement(v.DropdownItem,{"aria-label":"Set approval workflow",key:"set-approval-portfolio-action",id:"set-approval-portfolio-action",component:p.a.createElement(C.a,{preserveSearch:!0,pathname:r},"Set approval"),role:"link"})),window.insights.chrome.isBeta()&&d&&m){var w=j(I.a.setOrderProcess);E.push(p.a.createElement(v.DropdownItem,{"aria-label":w,key:"attach-order-processes",id:"attach-order-processes",component:p.a.createElement(C.a,{preserveSearch:!0,pathname:_.h},w),role:"link"}))}return u&&E.push(p.a.createElement(v.DropdownItem,{"aria-label":"Remove Portfolio",key:"delete-portfolio",id:"delete-portfolio",component:p.a.createElement(C.a,{preserveSearch:!0,pathname:o},"Delete"),role:"link",className:"pf-c-dropdown__menu-item"})),0===E.length?null:p.a.createElement(O.Dropdown,{className:"pf-u-ml-md",onSelect:function(){return k(!1)},position:g.DropdownPosition.right,toggle:p.a.createElement(P.KebabToggle,{id:"toggle-portfolio-actions",onToggle:k,isDisabled:a}),isOpen:y,isPlain:!0,dropdownItems:E})};N.propTypes={removePortfolioRoute:d.a.string.isRequired,editPortfolioRoute:d.a.string.isRequired,workflowPortfolioRoute:d.a.string.isRequired,copyPortfolio:d.a.func.isRequired,copyInProgress:d.a.bool,userCapabilities:d.a.shape({copy:d.a.bool,update:d.a.bool,destroy:d.a.bool,set_approval:d.a.bool}).isRequired,canLinkOrderProcesses:d.a.bool};var T=function(e){var t=e.title,r=e.addProductsRoute,o=e.copyPortfolio,a=e.sharePortfolioRoute,n=e.editPortfolioRoute,i=e.workflowPortfolioRoute,c=e.removePortfolioRoute,s=e.copyInProgress,l=e.isLoading,p=e.removeProducts,u=e.itemsSelected,d=e.meta,f=e.fetchPortfolioItemsWithPortfolio,m=e.portfolioId,b=e.description,h=e.fromProducts,O=e.filterProps,g=O.searchValue,P=O.onFilterChange,v=O.placeholder,C=e.userCapabilities,R=C.share,I=C.unshare,_=y()(C,["share","unshare"]),D=e.canLinkOrderProcesses;return{fields:[{component:k.b.TOP_TOOLBAR,breadcrumbs:!h,key:"portfolio-top-toolbar",fields:[{key:"back-to-products",hidden:!h,component:w.a},{component:k.b.TOP_TOOLBAR_TITLE,key:"portfolio-toolbar-title",noData:d.noData,title:t,description:b,fields:[{component:k.b.TOOLBAR,key:"portfolio-actions",noWrap:!0,fields:[Object(j.a)({pathname:a,preserveSearch:!0,variant:"secondary",title:"Share",isDisabled:s,key:"portfolio-share-button",id:"portfolio-share-button",hidden:!R&&!I}),{component:k.b.TOOLBAR_ITEM,key:"portfolio-actions-dropdown-item",fields:[{component:N,editPortfolioRoute:n,workflowPortfolioRoute:i,removePortfolioRoute:c,copyPortfolio:o,copyInProgress:s,userCapabilities:_,canLinkOrderProcesses:D,key:"portfolio-actions-dropdown"}]}]}]},{component:k.b.LEVEL,key:"portfolio-items-actions",fields:d.noData?[]:[{component:k.b.TOOLBAR,key:"portfolio-items-actions",fields:[{groupName:"filter-portfolio-items",component:k.b.FILTER_TOOLBAR_ITEM,isClearable:!0,key:"portfolio-items-filter",searchValue:g,onFilterChange:P,placeholder:v},S({hidden:0===d.count||!_.update,groupName:"add-portfolio-items",key:"portfolio-items-add-group"},Object(j.a)({preserveSearch:!0,pathname:r,isDisabled:l||s,variant:"primary",title:"Add",id:"add-products-button",key:"add-products-button"})),{component:k.b.TOOLBAR_ITEM,key:"remove-products-item",hidden:0===d.count||!_.update,fields:[{component:k.b.BUTTON,groupName:"remove-portfolio-items",variant:"link",title:"Remove",key:"remove-products-button",id:"remove-products-button",isDisabled:!u,onClick:p}]}]},{component:k.b.LEVEL_ITEM,key:"pagination-item",fields:d.count>0?[{component:E.a,key:"portfolio-items-pagination",meta:d,apiRequest:f,apiProps:m,isCompact:!0}]:[]}]}]}]}},L=r(625),F=r.n(L),q=r(734),x=r.n(q),B=r(674),A=r(162),M=r(629),V=r(54),W=function(e){var t=e.url,r=e.handleFilterChange,o=e.meta,a=e.userCapabilities.update,n=Object(R.a)(),i={PrimaryAction:o.noData?function(){return p.a.createElement(B.a,{url:t,label:n(V.a.addProducts),id:"add-products-to-portfolio",hasPermission:a})}:function(){return p.a.createElement(A.Button,{id:"clear-portfolio-filter",variant:"link",onClick:function(){return r("")}},n(M.a.clearFilters))},title:o.noData?n(M.a.noProducts):n(M.a.noResults),description:o.noData?n(V.a.emptyNoProducts):n(M.a.noResultsDescription),Icon:o.noData?x.a:F.a};return p.a.createElement(B.b,i)};W.propTypes={url:d.a.string.isRequired,handleFilterChange:d.a.func.isRequired,meta:d.a.shape({noData:d.a.bool}).isRequired,userCapabilities:d.a.shape({update:d.a.bool}).isRequired};var H=W,U=r(717),z=r(815),J=r(165),K=r(645),G=r(98),Q=r(135),X=r(119);function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $=function(e){var t=e.routes,r=e.handleFilterChange,o=e.removeProducts,a=e.copyPortfolio,n=e.stateDispatch,c=e.fromProducts,u=e.state,d=u.removeInProgress,h=u.isFetching,y=u.isFiltering,O=u.copyInProgress,g=u.selectedItems,P=u.filterValue,v=Object(R.a)(),k=Object(m.useSelector)((function(e){var t=e.portfolioReducer,r=t.portfolioItems,o=r.data,a=r.meta,n=t.selectedPortfolio;return{data:o,meta:a,name:n.name,description:n.description,userCapabilities:n.metadata.user_capabilities}})),j=k.data,C=k.meta,w=k.name,I=k.description,D=k.userCapabilities,S=Object(f.i)(_.y).url,N=Object(G.a)(["portfolio"]),L=s()(N,1)[0].portfolio,F=Object(m.useDispatch)(),q=Object(l.useContext)(Q.a).permissions,x=Object(X.b)(q,["catalog:order_processes:link"]),B=j.map((function(e){return p.a.createElement(z.a,i()({key:e.id},e,{pathname:"".concat(S,"/portfolio-item"),searchParams:{source:e.service_offering_source_ref,"portfolio-item":e.id},preserveSearch:!0,isSelectable:D.update,onSelect:function(t){return n({type:"selectItem",payload:{selectedItem:t,product:e}})},isSelected:g.includes(e.id),removeInProgress:d}))}));return p.a.createElement(l.Fragment,null,p.a.createElement(b.a,{schema:T(Z(Z({fromProducts:c,filterProps:{searchValue:P,onFilterChange:r,placeholder:v(M.a.filterByProduct)},title:w,description:I},t),{},{copyPortfolio:a,isLoading:h||y,copyInProgress:O,removeProducts:function(){return o(g)},itemsSelected:g.length>0,meta:C,fetchPortfolioItemsWithPortfolio:function(){return F(J.f.apply(void 0,arguments))},portfolioId:L,userCapabilities:D,canLinkOrderProcesses:x}))}),p.a.createElement(U.a,{items:B,isLoading:h||y,renderEmptyState:function(){return p.a.createElement(H,{handleFilterChange:r,meta:C,userCapabilities:D,url:t.addProductsRoute})}}),C.count>0&&p.a.createElement(K.a,null,p.a.createElement(E.a,{dropDirection:"up",meta:C,apiProps:L,apiRequest:function(){return F(J.f.apply(void 0,arguments))}})))};$.propTypes={routes:d.a.shape({addProductsRoute:d.a.string.isRequired,portfolioRoute:d.a.string.isRequired}).isRequired,handleFilterChange:d.a.func.isRequired,removeProducts:d.a.func.isRequired,copyPortfolio:d.a.func.isRequired,stateDispatch:d.a.func.isRequired,state:d.a.shape({removeInProgress:d.a.bool,isFetching:d.a.bool,isFiltering:d.a.bool,copyInProgress:d.a.bool,selectedItems:d.a.arrayOf(d.a.string),filterValue:d.a.string}).isRequired,fromProducts:d.a.bool};t.default=$},645:function(e,t,r){"use strict";var o=r(0),a=r.n(o),n=r(689),i=function(){return(i=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(r[o[a]]=e[o[a]])}return r};t.a=function(e){var t=e.children,r=e.className,o=c(e,["children","className"]);return a.a.createElement("div",i({className:Object(n.a)("pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto",r)},o),t)}},686:function(e,t,r){var o=r(798);e.exports=function(e,t){if(null==e)return{};var r,a,n=o(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}},688:function(e,t,r){"use strict";var o=r(0),a=r.n(o),n=r(333),i=r(160),c=r(729),s=r(731),l=r(713),p=r(714),u=function(){return(u=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},d=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(r[o[a]]=e[o[a]])}return r};t.a=function(e){var t=e.name,r=e.distributor,f=e.pathname,m=e.searchParams,b=e.preserveSearch,h=e.portfolioName,y=d(e,["name","distributor","pathname","searchParams","preserveSearch","portfolioName"]);return a.a.createElement(p.a,null,a.a.createElement(n.a,null,a.a.createElement(s.a,{pathname:f,searchParams:m,preserveSearch:b},a.a.createElement(i.a,{component:i.b.h3,title:t},a.a.createElement(l.a,null,t))),r&&a.a.createElement(i.a,{component:i.b.small},r),h&&a.a.createElement(o.Fragment,null,a.a.createElement(i.a,{className:"pf-u-mb-0",component:"small"},"Portfolio"),a.a.createElement(i.a,null,h))),a.a.createElement(c.a,u({toDisplay:[y.description?"description":"long_description"]},y)))}},711:function(e,t,r){"use strict";var o=r(0),a=r.n(o),n=r(1),i=r(343),c=r.n(i),s=r(2);const l=()=>{};class p extends o.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e.currentTarget.checked,e)}}render(){const e=this.props,{"aria-label":t,className:r,onChange:a,isValid:i,isDisabled:p,isChecked:u,label:d,checked:f,defaultChecked:m,description:b}=e,h=Object(n.__rest)(e,["aria-label","className","onChange","isValid","isDisabled","isChecked","label","checked","defaultChecked","description"]),y={};return([!0,!1].includes(f)||!0===u)&&(y.checked=f||u),a!==l&&(y.checked=u),[!1,!0].includes(m)&&(y.defaultChecked=m),y.checked=null!==y.checked&&y.checked,o.createElement("div",{className:Object(s.css)(c.a.check,r)},o.createElement("input",Object.assign({},h,{className:Object(s.css)(c.a.checkInput),type:"checkbox",onChange:this.handleChange,"aria-invalid":!i,"aria-label":t,disabled:p,ref:e=>e&&(e.indeterminate=null===u)},y)),d&&o.createElement("label",{className:Object(s.css)(c.a.checkLabel,p&&c.a.modifiers.disabled),htmlFor:h.id},d),b&&o.createElement("div",{className:Object(s.css)(c.a.checkDescription)},b))}}p.displayName="Checkbox",p.defaultProps={className:"",isValid:!0,isDisabled:!1,isChecked:!1,onChange:l};t.a=function(e){var t=e.handleCheck,r=e.isChecked,o=e.id;return a.a.createElement(p,{onClick:function(e){return e.stopPropagation()},isChecked:r,onChange:t,"aria-label":"card checkbox",id:o})}},732:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardHeader=void 0;const o=r(1),a=o.__importStar(r(0)),n=r(2),i=o.__importDefault(r(53));t.CardHeader=e=>{var{children:t=null,className:r=""}=e,c=o.__rest(e,["children","className"]);return a.createElement("div",Object.assign({className:n.css(i.default.cardHeader,r)},c),t)},t.CardHeader.displayName="CardHeader"},734:function(e,t,r){"use strict";t.__esModule=!0,t.WrenchIconConfig={name:"WrenchIcon",height:512,width:512,svgPath:"M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z",yOffset:0,xOffset:0},t.WrenchIcon=r(26).createIcon(t.WrenchIconConfig),t.default=t.WrenchIcon},798:function(e,t){e.exports=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}},815:function(e,t,r){"use strict";var o=r(233),a=r.n(o),n=r(0),i=r.n(n),c=r(16),s=r.n(c),l=r(732),p=r(816),u=r(349),d=r(5),f=r(656),m=r(711),b=r(688),h=r(715),y=r(23);function O(){var e=a()(["\n  flex: 1;\n"]);return O=function(){return e},e}var g=Object(y.b)(u.Level)(O()),P=function(e){return i.a.createElement(h.b,{isDisabled:e.removeInProgress&&e.isSelected},i.a.createElement(h.a,null,i.a.createElement(l.CardHeader,null,i.a.createElement(g,null,i.a.createElement(f.a,{src:"".concat(d.e,"/portfolio_items/").concat(e.id,"/icon"),sourceId:e.service_offering_source_ref}),e.isSelectable&&i.a.createElement(m.a,{handleCheck:function(){return e.onSelect(e.id)},isChecked:e.isSelected,id:e.id}))),i.a.createElement(b.a,e),i.a.createElement(p.CardFooter,null)))};P.propTypes={id:s.a.string,platformId:s.a.string,service_offering_source_ref:s.a.string,isSelectable:s.a.bool,isSelected:s.a.bool,onSelect:s.a.func,orderUrl:s.a.string,removeInProgress:s.a.bool,portfolio_id:s.a.string,metadata:s.a.shape({user_capabilities:s.a.shape({destroy:s.a.bool}).isRequired}).isRequired},t.a=P},816:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardFooter=void 0;const o=r(1),a=o.__importStar(r(0)),n=o.__importDefault(r(53)),i=r(2);t.CardFooter=e=>{var{children:t=null,className:r="",component:c="div"}=e,s=o.__rest(e,["children","className","component"]);const l=c;return a.createElement(l,Object.assign({className:i.css(n.default.cardFooter,r)},s),t)},t.CardFooter.displayName="CardFooter"},839:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var o=r(164),a=r.n(o),n=r(686),i=r.n(n),c=r(628);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){var t=e.pathname,r=e.preserveSearch,o=e.id,a=i()(e,["pathname","preserveSearch","id"]);return{component:c.b.TOOLBAR_ITEM,key:"".concat(a.key,"/button-link"),fields:[{component:c.b.LINK,pathname:t,preserveSearch:r,key:"".concat(a.key,"/button-link"),isDisabled:a.isDisabled,id:o,fields:[l({component:c.b.BUTTON},a)]}]}}}}]);
//# sourceMappingURL=../sourcemaps/69.js.map