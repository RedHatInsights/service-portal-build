(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1023:function(e,t,a){"use strict";a.r(t);var r=a(148),n=a.n(r),c=a(129),l=a.n(c),o=a(46),i=a.n(o),s=a(0),u=a.n(s),p=a(25),d=a(629),m=a.n(d),f=a(130),b=a(650),h=a(36),g=a(669),O=a(885),y=a(763),v=a(686),j=a(146),E=a(741),k=a(360),P=a(626),C=a(652),w=a(107),N=a(12),F=a(635),M=a(673),S=a(26);function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},T=function(e,t){switch(t.type){case"setFetching":return D(D({},e),{},{isFetching:t.payload});case"setFilterValue":return D(D({},e),{},{filterValue:t.payload});case"setFilteringFlag":return D(D({},e),{},{isFiltering:t.payload});default:return e}},V=Object(j.a)((function(e,t,a,r){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:h.a;r(!0),a(Object(g.b)(e,t,n)).then((function(){return r(!1)}))}),1e3);t.default=function(){var e=Object(S.a)(),t=Object(w.a)(["platform"]),a=l()(t,1)[0].platform,r=Object(s.useReducer)(T,x),c=l()(r,2),o=c[0],i=o.filterValue,d=o.isFetching,j=o.isFiltering,I=c[1],_=Object(p.e)((function(e){var t=e.platformReducer.platformItems;return t[a]?t[a]:{data:[],meta:h.a}})),R=_.data,H=_.meta,B=Object(p.e)((function(e){var t=e.platformReducer;return{platform:t.selectedPlatform,platformIconMapping:t.platformIconMapping}})),q=B.platform,A=B.platformIconMapping,J=Object(p.d)();Object(s.useEffect)((function(){J(Object(g.b)(a,i,h.a)).then((function(){return I({type:"setFetching",payload:!1})})),Object(f.d)()}),[a]);var L=function(e){I({type:"setFilterValue",payload:e}),V(a,e,J,(function(e){return I({type:"setFilteringFlag",payload:e})}),D(D({},H),{},{offset:0}))},z={items:R?R.map((function(e){return u.a.createElement(O.a,n()({key:e.id,pathname:N.s,searchParams:{service:e.id},preserveSearch:!0,src:A[a]},e))})):[]},W=q?q.name:"";return u.a.createElement(s.Fragment,null,u.a.createElement(b.a,{schema:Object(y.a)({onFilterChange:L,searchValue:i,filterPlaceholder:e(M.a.templatesFilter),meta:H,apiRequest:function(e,t){return J(Object(g.b)(a,i,t))}})}),u.a.createElement(E.a,n()({title:W,isLoading:d||j,renderEmptyState:function(){return u.a.createElement(v.b,{title:e(""===i?M.a.noTemplatesTitle:F.a.noResults),Icon:m.a,PrimaryAction:function(){return""!==i?u.a.createElement(k.Button,{ouiaId:"clear-filters",onClick:function(){return L("")},variant:"link"},e(F.a.clearFilters)):null},description:e(""===i?M.a.noTemplatesDescription:F.a.noResultsDescription)})}},z)),H.count>0&&u.a.createElement(C.a,null,u.a.createElement(P.a,{dropDirection:"up",meta:H,apiRequest:function(e,t){return J(Object(g.b)(a,i,t))}})))}},652:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(710),l=function(){return(l=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},o=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t=e.children,a=e.className,r=o(e,["children","className"]);return n.a.createElement("div",l({className:Object(c.a)("pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto",a)},r),t)}},673:function(e,t,a){"use strict";var r=a(27),n=Object(r.b)({workflowColumn:{id:"platform.inventories.columns.workflow",defaultMessage:"Workflow"},noInventoriesDescription:{id:"platform.inventories.empty.no-inventories",defaultMessage:"No inventories found."},noInventoriesFilterDescription:{id:"platform.inventories.empty.no-results",defaultMessage:"No inventories match your filter criteria."},inventoriesFilter:{id:"platform.inventories.filter.placeholder",defaultMessage:"Filter by inventory"},templatesFilter:{id:"platform.templates.filter.placeholder",defaultMessage:"Filter by template"},noTemplatesTitle:{id:"platform.templates.no-templates",defaultMessage:"No templates"},noTemplatesDescription:{id:"platform.templates.empty.no-templates",defaultMessage:"This platform has no templates."},configureSourceTitle:{id:"platforms.list.configure-source",defaultMessage:"Configure a source in order to add products to portfolios."},connectSource:{id:"platforms.list.connect-source",defaultMessage:"To connect to a source, go to <a>Sources</a> under Settings."},contactAdmin:{id:"platforms.list.contact-admin",defaultMessage:"Contact your organization administrator to setup sources for Catalog."},title:{id:"platforms.title",defaultMessage:"Platforms"},noPlatforms:{id:"platforms.list.empty.title",defaultMessage:"No platforms yet"},offeringTitle:{id:"platforms.offerings.detail.title",defaultMessage:"Service offering"},offeringParameters:{id:"platforms.offerings.detail.extra-params",defaultMessage:"Extra parameters"}});t.a=n},706:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(144),l=a(77),o=a(758),i=a(759),s=a(737),u=a(738),p=function(){return(p=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},d=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t=e.name,a=e.distributor,m=e.pathname,f=e.searchParams,b=e.preserveSearch,h=e.portfolioName,g=d(e,["name","distributor","pathname","searchParams","preserveSearch","portfolioName"]);return n.a.createElement(u.a,null,n.a.createElement(c.a,null,n.a.createElement(i.a,{pathname:m,searchParams:f,preserveSearch:b},n.a.createElement(l.a,{component:l.b.h3,title:t},n.a.createElement(s.a,null,t))),a&&n.a.createElement(l.a,{component:l.b.small},a),h&&n.a.createElement(r.Fragment,null,n.a.createElement(l.a,{className:"pf-u-mb-0",component:"small"},"Portfolio"),n.a.createElement(l.a,null,h))),n.a.createElement(o.a,p({toDisplay:[g.description?"description":"long_description"]},g)))}},735:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(2),l=a(367),o=a.n(l),i=a(1);const s=()=>{};class u extends r.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e.currentTarget.checked,e)}}render(){const e=this.props,{"aria-label":t,className:a,onChange:n,isValid:l,isDisabled:u,isChecked:p,label:d,checked:m,defaultChecked:f,description:b}=e,h=Object(c.__rest)(e,["aria-label","className","onChange","isValid","isDisabled","isChecked","label","checked","defaultChecked","description"]),g={};return([!0,!1].includes(m)||!0===p)&&(g.checked=m||p),n!==s&&(g.checked=p),[!1,!0].includes(f)&&(g.defaultChecked=f),g.checked=null!==g.checked&&g.checked,r.createElement("div",{className:Object(i.css)(o.a.check,a)},r.createElement("input",Object.assign({},h,{className:Object(i.css)(o.a.checkInput),type:"checkbox",onChange:this.handleChange,"aria-invalid":!l,"aria-label":t,disabled:u,ref:e=>e&&(e.indeterminate=null===p)},g)),d&&r.createElement("label",{className:Object(i.css)(o.a.checkLabel,u&&o.a.modifiers.disabled),htmlFor:h.id},d),b&&r.createElement("div",{className:Object(i.css)(o.a.checkDescription)},b))}}u.displayName="Checkbox",u.defaultProps={className:"",isValid:!0,isDisabled:!1,isChecked:!1,onChange:s};t.a=function(e){var t=e.handleCheck,a=e.isChecked,r=e.id;return n.a.createElement(u,{onClick:function(e){return e.stopPropagation()},isChecked:a,onChange:t,"aria-label":"card checkbox",id:r})}},863:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a(2),n=a(0),c=a(1),l=a(62),o=a.n(l),i=a(193),s=a(76),u=a(235);const p=e=>{var{children:t=null,className:a="",id:l,onExpand:p,toggleButtonProps:d}=e,m=Object(r.__rest)(e,["children","className","id","onExpand","toggleButtonProps"]);return n.createElement(i.b.Consumer,null,({cardId:e})=>n.createElement("div",Object.assign({className:Object(c.css)(o.a.cardHeader,a),id:l},m),p&&n.createElement("div",{className:Object(c.css)(o.a.cardHeaderToggle)},n.createElement(s.a,Object.assign({variant:"plain",type:"button",onClick:t=>{p(t,e)}},d),n.createElement("span",{className:Object(c.css)(o.a.cardHeaderToggleIcon)},n.createElement(u.a,{"aria-hidden":"true"})))),t))};p.displayName="CardHeader"},864:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(2),n=a(0),c=a(62),l=a.n(c),o=a(1);const i=e=>{var{children:t=null,className:a="",component:c="div"}=e,i=Object(r.__rest)(e,["children","className","component"]);const s=c;return n.createElement(s,Object.assign({className:Object(o.css)(l.a.cardFooter,a)},i),t)};i.displayName="CardFooter"},885:function(e,t,a){"use strict";var r,n=a(0),c=a.n(n),l=a(222),o=a(863),i=a(864),s=a(668),u=a(735),p=a(706),d=a(739),m=a(29),f=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},b=function(){return(b=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},h=Object(m.b)(l.a)(r||(r=f(["\n  flex: 1;\n"],["\n  flex: 1;\n"])));t.a=function(e){return c.a.createElement(d.a,{key:e.id,ouiaId:"platform-item"+e.id},c.a.createElement(o.a,null,c.a.createElement(h,null,c.a.createElement(s.a,{height:40,sourceId:e.source_id}),e.editMode&&c.a.createElement(u.a,{id:e.id,isChecked:e.checked,handleCheck:e.onToggleItemSelect}))),c.a.createElement(p.a,b({},e)),c.a.createElement(i.a,null))}}}]);
//# sourceMappingURL=../sourcemaps/platform-templates~31ecd969.js.map