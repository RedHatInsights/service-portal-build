(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{591:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(647),c=function(){return(c=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},l=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t=e.children,a=e.className,r=l(e,["children","className"]);return n.a.createElement("div",c({className:Object(o.a)("pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto",a)},r),t)}},607:function(e,t,a){"use strict";var r=a(19),n=Object(r.b)({workflowColumn:{id:"platform.inventories.columns.workflow",defaultMessage:"Workflow"},noInventoriesDescription:{id:"platform.inventories.empty.no-inventories",defaultMessage:"No inventories found."},noInventoriesFilterDescription:{id:"platform.inventories.empty.no-results",defaultMessage:"No inventories match your filter criteria."},inventoriesFilter:{id:"platform.inventories.filter.placeholder",defaultMessage:"Filter by inventory"},templatesFilter:{id:"platform.templates.filter.placeholder",defaultMessage:"Filter by template"},noTemplatesTitle:{id:"platform.templates.no-templates",defaultMessage:"No templates"},noTemplatesDescription:{id:"platform.templates.empty.no-templates",defaultMessage:"This platform has no templates."},configureSourceTitle:{id:"platforms.list.configure-source",defaultMessage:"Configure a source in order to add products to portfolios."},connectSource:{id:"platforms.list.connect-source",defaultMessage:"To connect to a source, go to <a>Sources</a> under Settings."},contactAdmin:{id:"platforms.list.contact-admin",defaultMessage:"Contact your organization administrator to setup sources for Catalog."},title:{id:"platforms.title",defaultMessage:"Platforms"},noPlatforms:{id:"platforms.list.empty.title",defaultMessage:"No platforms yet"},offeringTitle:{id:"platforms.offerings.detail.title",defaultMessage:"Service offering"},offeringParameters:{id:"platforms.offerings.detail.extra-params",defaultMessage:"Extra parameters"}});t.a=n},645:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(279),c=a(129),l=a(627),i=a(677),s=a(628),u=a(629),p=function(){return(p=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},f=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t=e.name,a=e.distributor,m=e.pathname,d=e.searchParams,h=e.preserveSearch,b=e.portfolioName,g=f(e,["name","distributor","pathname","searchParams","preserveSearch","portfolioName"]);return n.a.createElement(u.a,null,n.a.createElement(o.a,null,n.a.createElement(i.a,{pathname:m,searchParams:d,preserveSearch:h},n.a.createElement(c.a,{component:c.b.h3,title:t},n.a.createElement(s.a,null,t))),a&&n.a.createElement(c.a,{component:c.b.small},a),b&&n.a.createElement(r.Fragment,null,n.a.createElement(c.a,{className:"pf-u-mb-0",component:"small"},"Portfolio"),n.a.createElement(c.a,null,b))),n.a.createElement(l.a,p({toDisplay:[g.description?"description":"long_description"]},g)))}},666:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1),c=a(292),l=a.n(c),i=a(2);const s=()=>{};class u extends r.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e.currentTarget.checked,e)}}render(){const e=this.props,{"aria-label":t,className:a,onChange:n,isValid:c,isDisabled:u,isChecked:p,label:f,checked:m,defaultChecked:d,description:h}=e,b=Object(o.__rest)(e,["aria-label","className","onChange","isValid","isDisabled","isChecked","label","checked","defaultChecked","description"]),g={};return([!0,!1].includes(m)||!0===p)&&(g.checked=m||p),n!==s&&(g.checked=p),[!1,!0].includes(d)&&(g.defaultChecked=d),g.checked=null!==g.checked&&g.checked,r.createElement("div",{className:Object(i.css)(l.a.check,a)},r.createElement("input",Object.assign({},b,{className:Object(i.css)(l.a.checkInput),type:"checkbox",onChange:this.handleChange,"aria-invalid":!c,"aria-label":t,disabled:u,ref:e=>e&&(e.indeterminate=null===p)},g)),f&&r.createElement("label",{className:Object(i.css)(l.a.checkLabel,u&&l.a.modifiers.disabled),htmlFor:b.id},f),h&&r.createElement("div",{className:Object(i.css)(l.a.checkDescription)},h))}}u.displayName="Checkbox",u.defaultProps={className:"",isValid:!0,isDisabled:!1,isChecked:!1,onChange:s};t.a=function(e){var t=e.handleCheck,a=e.isChecked,r=e.id;return n.a.createElement(u,{onClick:function(e){return e.stopPropagation()},isChecked:a,onChange:t,"aria-label":"card checkbox",id:r})}},792:function(e,t,a){"use strict";var r,n=a(0),o=a.n(n),c=a(535),l=a(945),i=a(946),s=a(626),u=a(666),p=a(645),f=a(630),m=a(20),d=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},h=function(){return(h=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},b=Object(m.b)(c.a)(r||(r=d(["\n  flex: 1;\n"],["\n  flex: 1;\n"])));t.a=function(e){return o.a.createElement(f.a,{key:e.id},o.a.createElement(l.a,null,o.a.createElement(b,null,o.a.createElement(s.a,{height:40,sourceId:e.source_id}),e.editMode&&o.a.createElement(u.a,{id:e.id,isChecked:e.checked,handleCheck:e.onToggleItemSelect}))),o.a.createElement(p.a,h({},e)),o.a.createElement(i.a,null))}},925:function(e,t,a){"use strict";a.r(t);var r=a(565),n=a.n(r),o=a(47),c=a.n(o),l=a(132),i=a.n(l),s=a(0),u=a.n(s),p=a(18),f=a(566),m=a.n(f),d=a(97),h=a(597),b=a(22),g=a(590),O=a(792),y=a(684),v=a(598),j=a(107),k=a(632),E=a(131),P=a(583),w=a(591),C=a(84),F=a(8),S=a(568),M=a(607),N=a(17);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var I={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},T=function(e,t){switch(t.type){case"setFetching":return x(x({},e),{},{isFetching:t.payload});case"setFilterValue":return x(x({},e),{},{filterValue:t.payload});case"setFilteringFlag":return x(x({},e),{},{isFiltering:t.payload});default:return e}},V=Object(j.a)((function(e,t,a,r){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:b.a;r(!0),a(Object(g.b)(e,t,n)).then((function(){return r(!1)}))}),1e3);t.default=function(){var e=Object(N.a)(),t=Object(C.a)(["platform"]),a=c()(t,1)[0].platform,r=Object(s.useReducer)(T,I),o=c()(r,2),l=o[0],i=l.filterValue,f=l.isFetching,j=l.isFiltering,D=o[1],R=Object(p.useSelector)((function(e){var t=e.platformReducer.platformItems;return t[a]?t[a]:{data:[],meta:b.a}})),_=R.data,q=R.meta,A=Object(p.useSelector)((function(e){var t=e.platformReducer;return{platform:t.selectedPlatform,platformIconMapping:t.platformIconMapping}})),J=A.platform,L=A.platformIconMapping,z=Object(p.useDispatch)();Object(s.useEffect)((function(){z(Object(g.b)(a,i,b.a)).then((function(){return D({type:"setFetching",payload:!1})})),Object(d.d)()}),[a]);var B=function(e){D({type:"setFilterValue",payload:e}),V(a,e,z,(function(e){return D({type:"setFilteringFlag",payload:e})}),x(x({},q),{},{offset:0}))},W={items:_?_.map((function(e){return u.a.createElement(O.a,n()({key:e.id,pathname:F.s,searchParams:{service:e.id},preserveSearch:!0,src:L[a]},e))})):[]},G=J?J.name:"";return u.a.createElement(s.Fragment,null,u.a.createElement(h.a,{schema:Object(y.a)({onFilterChange:B,searchValue:i,filterPlaceholder:e(M.a.templatesFilter),meta:q,apiRequest:function(e,t){return z(Object(g.b)(a,i,t))}})}),u.a.createElement(k.a,n()({title:G,isLoading:f||j,renderEmptyState:function(){return u.a.createElement(v.b,{title:e(""===i?M.a.noTemplatesTitle:S.a.noResults),Icon:m.a,PrimaryAction:function(){return""!==i?u.a.createElement(E.Button,{onClick:function(){return B("")},variant:"link"},e(S.a.clearFilters)):null},description:e(""===i?M.a.noTemplatesDescription:S.a.noResultsDescription)})}},W)),q.count>0&&u.a.createElement(w.a,null,u.a.createElement(P.a,{dropDirection:"up",meta:q,apiRequest:function(e,t){return z(Object(g.b)(a,i,t))}})))}}}]);
//# sourceMappingURL=../sourcemaps/platform-templates~31ecd969.js.map