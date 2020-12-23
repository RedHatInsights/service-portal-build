(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{691:function(e,t,a){"use strict";var r=a(23),n=Object(r.b)({workflowColumn:{id:"platform.inventories.columns.workflow",defaultMessage:"Workflow"},noInventoriesDescription:{id:"platform.inventories.empty.no-inventories",defaultMessage:"No inventories found."},noInventoriesFilterDescription:{id:"platform.inventories.empty.no-results",defaultMessage:"No inventories match your filter criteria."},inventoriesFilter:{id:"platform.inventories.filter.placeholder",defaultMessage:"Filter by inventory"},templatesFilter:{id:"platform.templates.filter.placeholder",defaultMessage:"Filter by template"},noTemplatesTitle:{id:"platform.templates.no-templates",defaultMessage:"No templates"},noTemplatesDescription:{id:"platform.templates.empty.no-templates",defaultMessage:"This platform has no templates."},configureSourceTitle:{id:"platforms.list.configure-source",defaultMessage:"Configure a source in order to add products to portfolios."},connectSource:{id:"platforms.list.connect-source",defaultMessage:"To connect to a source, go to <a>Sources</a> under Settings."},contactAdmin:{id:"platforms.list.contact-admin",defaultMessage:"Contact your organization administrator to setup sources for Catalog."},title:{id:"platforms.title",defaultMessage:"Platforms"},noPlatforms:{id:"platforms.list.empty.title",defaultMessage:"No platforms yet"},offeringTitle:{id:"platforms.offerings.detail.title",defaultMessage:"Service offering"},offeringParameters:{id:"platforms.offerings.detail.extra-params",defaultMessage:"Extra parameters"}});t.a=n},822:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var r=a(1),n=a(0),o=a(2),i=a(47),l=a.n(i),c=a(371),s=a(145),u=a(654);const f=e=>{var{children:t=null,className:a="",id:i,onExpand:f,toggleButtonProps:p}=e,d=Object(r.__rest)(e,["children","className","id","onExpand","toggleButtonProps"]);return n.createElement(c.b.Consumer,null,({cardId:e})=>n.createElement("div",Object.assign({className:Object(o.css)(l.a.cardHeader,a),id:i},d),f&&n.createElement("div",{className:Object(o.css)(l.a.cardHeaderToggle)},n.createElement(s.a,Object.assign({variant:"plain",type:"button",onClick:t=>{f(t,e)}},p),n.createElement("span",{className:Object(o.css)(l.a.cardHeaderToggleIcon)},n.createElement(u.a,{"aria-hidden":"true"})))),t))};f.displayName="CardHeader"},823:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(1),n=a(0),o=a(47),i=a.n(o),l=a(2);const c=e=>{var{children:t=null,className:a="",component:o="div"}=e,c=Object(r.__rest)(e,["children","className","component"]);const s=o;return n.createElement(s,Object.assign({className:Object(l.css)(i.a.cardFooter,a)},c),t)};c.displayName="CardFooter"},867:function(e,t,a){"use strict";var r,n=a(0),o=a.n(n),i=a(597),l=a(822),c=a(823),s=a(680),u=a(802),f=a(759),p=a(681),d=a(21),m=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},g=function(){return(g=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},b=Object(d.b)(i.a)(r||(r=m(["\n  flex: 1;\n"],["\n  flex: 1;\n"])));t.a=function(e){return o.a.createElement(p.a,{key:e.id,ouiaId:"platform-item"+e.id},o.a.createElement(l.a,null,o.a.createElement(b,null,o.a.createElement(s.a,{height:40,sourceId:e.source_id}),e.editMode&&o.a.createElement(u.a,{id:e.id,isChecked:e.checked,handleCheck:e.onToggleItemSelect}))),o.a.createElement(f.a,g({},e)),o.a.createElement(c.a,null))}},905:function(e,t,a){"use strict";a.r(t);var r=a(644),n=a.n(r),o=a(120),i=a.n(o),l=a(167),c=a.n(l),s=a(0),u=a.n(s),f=a(22),p=a(630),d=a.n(p),m=a(121),g=a(645),b=a(32),O=a(651),y=a(867),h=a(764),j=a(657),v=a(132),E=a(689),F=a(164),w=a(649),P=a(690),M=a(101),k=a(10),N=a(629),I=a(691),T=a(20);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var D={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},R=function(e,t){switch(t.type){case"setFetching":return S(S({},e),{},{isFetching:t.payload});case"setFilterValue":return S(S({},e),{},{filterValue:t.payload});case"setFilteringFlag":return S(S({},e),{},{isFiltering:t.payload});default:return e}},x=Object(v.a)((function(e,t,a,r){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:b.a;r(!0),a(Object(O.b)(e,t,n)).then((function(){return r(!1)}))}),1e3);t.default=function(){var e=Object(T.a)(),t=Object(M.a)(["platform"]),a=i()(t,1)[0].platform,r=Object(s.useReducer)(R,D),o=i()(r,2),l=o[0],c=l.filterValue,p=l.isFetching,v=l.isFiltering,C=o[1],V=Object(f.useSelector)((function(e){var t=e.platformReducer.platformItems;return t[a]?t[a]:{data:[],meta:b.a}})),_=V.data,H=V.meta,B=Object(f.useSelector)((function(e){var t=e.platformReducer;return{platform:t.selectedPlatform,platformIconMapping:t.platformIconMapping}})),q=B.platform,A=B.platformIconMapping,J=Object(f.useDispatch)();Object(s.useEffect)((function(){J(Object(O.b)(a,c,b.a)).then((function(){return C({type:"setFetching",payload:!1})})),Object(m.d)()}),[a]);var z=function(e){C({type:"setFilterValue",payload:e}),x(a,e,J,(function(e){return C({type:"setFilteringFlag",payload:e})}),S(S({},H),{},{offset:0}))},L={items:_?_.map((function(e){return u.a.createElement(y.a,n()({key:e.id,pathname:k.s,searchParams:{service:e.id},preserveSearch:!0,src:A[a]},e))})):[]},W=q?q.name:"";return u.a.createElement(s.Fragment,null,u.a.createElement(g.a,{schema:Object(h.a)({onFilterChange:z,searchValue:c,filterPlaceholder:e(I.a.templatesFilter),meta:H,apiRequest:function(e,t){return J(Object(O.b)(a,c,t))}})}),u.a.createElement(E.a,n()({title:W,isLoading:p||v,renderEmptyState:function(){return u.a.createElement(j.b,{title:e(""===c?I.a.noTemplatesTitle:N.a.noResults),Icon:d.a,PrimaryAction:function(){return""!==c?u.a.createElement(F.Button,{ouiaId:"clear-filters",onClick:function(){return z("")},variant:"link"},e(N.a.clearFilters)):null},description:e(""===c?I.a.noTemplatesDescription:N.a.noResultsDescription)})}},L)),H.count>0&&u.a.createElement(P.a,null,u.a.createElement(w.a,{dropDirection:"up",meta:H,apiRequest:function(e,t){return J(Object(O.b)(a,c,t))}})))}}}]);
//# sourceMappingURL=../sourcemaps/platform-templates~31ecd969.js.map