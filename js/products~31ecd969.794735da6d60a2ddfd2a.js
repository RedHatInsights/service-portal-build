(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{558:function(e,t,a){"use strict";var r=a(36),n=a.n(r),o=a(19),i=a.n(o),s=a(0),c=a.n(s),l=a(4),u=a.n(l),p=a(173),f=a(285),d=a(27),m=function(e){var t=e.meta,a=t.limit,r=t.count,o=t.offset,s=e.apiProps,l=e.apiRequest,u=e.className,m=e.isCompact,g=i()(e,["meta","apiProps","apiRequest","className","isCompact"]);return c.a.createElement("div",{className:u},c.a.createElement(f.Pagination,n()({perPage:a||50,itemCount:r||0,onPerPageSelect:function(e,t){return l(s,{offset:o,limit:t})},page:Object(d.b)(a,o),onSetPage:function(e,t,r){var n={offset:Object(d.c)(t,a),limit:a},o=function(){return l(s,n)};return r?Object(p.a)(o,250)():o()},direction:"down",isCompact:m},g)))};m.propTypes={meta:u.a.shape({count:u.a.number,limit:u.a.number.isRequired,offset:u.a.number.isRequired}),apiRequest:u.a.func.isRequired,apiProps:u.a.any,className:u.a.string,isCompact:u.a.bool},m.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1},t.a=m},567:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(4),i=a.n(o),s=function(e){var t=e.children;return n.a.createElement("div",{className:"pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto"},t)};s.propTypes={children:i.a.oneOfType([i.a.node,i.a.arrayOf(i.a.node)])},t.a=s},581:function(e,t,a){"use strict";var r=(0,a(32).defineMessages)({workflowColumn:{id:"platform.inventories.columns.workflow",defaultMessage:"Workflow"},noInventoriesDescription:{id:"platform.inventories.empty.no-inventories",defaultMessage:"No inventories found."},noInventoriesFilterDescription:{id:"platform.inventories.empty.no-results",defaultMessage:"No inventories match your filter criteria."},inventoriesFilter:{id:"platform.inventories.filter.placeholder",defaultMessage:"Filter by inventory"},templatesFilter:{id:"platform.templates.filter.placeholder",defaultMessage:"Filter by template"},noTemplatesTitle:{id:"platform.templates.no-templates",defaultMessage:"No templates"},noTemplatesDescription:{id:"platform.templates.empty.no-templates",defaultMessage:"This platform has no templates."},configureSourceTitle:{id:"platforms.list.configure-source",defaultMessage:"Configure a source in order to add products to portfolios."},connectSource:{id:"platforms.list.connect-source",defaultMessage:"To connect to a source, go to <a>Sources</a> under Settings."},contactAdmin:{id:"platforms.list.contact-admin",defaultMessage:"Contact your organization administrator to setup sources for Catalog."},title:{id:"platforms.title",defaultMessage:"Platforms"},noPlatforms:{id:"platforms.list.empty.title",defaultMessage:"No platforms yet"},offeringTitle:{id:"platforms.offerings.detail.title",defaultMessage:"Service offering"},offeringParameters:{id:"platforms.offerings.detail.extra-params",defaultMessage:"Extra parameters"}});t.a=r},599:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(4),i=a.n(o),s=a(284),c=function(e){var t=e.handleCheck,a=e.isChecked,r=e.id;return n.a.createElement(s.Checkbox,{onClick:function(e){return e.stopPropagation()},isChecked:a,onChange:t,"aria-label":"card checkbox",id:r})};c.propTypes={handleCheck:i.a.func,isChecked:i.a.bool,id:i.a.string},t.a=c},600:function(e,t,a){"use strict";var r=a(1),n=a.n(r),o=a(36),i=a.n(o),s=a(19),c=a.n(s),l=a(0),u=a.n(l),p=a(4),f=a.n(p),d=a(10),m=a(16),g=a(609),h=a(622),b=a(610),y=a(611),v=function(e){var t=e.name,a=(e.display_name,e.distributor),r=e.pathname,n=e.searchParams,o=e.preserveSearch,s=e.portfolioName,p=c()(e,["name","display_name","distributor","pathname","searchParams","preserveSearch","portfolioName"]);return u.a.createElement(y.a,null,u.a.createElement(m.TextContent,null,u.a.createElement(h.a,{pathname:r,searchParams:n,preserveSearch:o},u.a.createElement(d.Text,{component:d.TextVariants.h3,title:t},u.a.createElement(b.a,null,t))),a&&u.a.createElement(d.Text,{component:d.TextVariants.small},a),s&&u.a.createElement(l.Fragment,null,u.a.createElement(d.Text,{className:"pf-u-mb-0",component:"small"},"Portfolio"),u.a.createElement(d.Text,null,s))),u.a.createElement(g.a,i()({toDisplay:[p.description?"description":"long_description"]},p)))};v.propTypes={name:f.a.string,display_name:f.a.string,distributor:f.a.string,long_description:f.a.string,description:f.a.string,pathname:f.a.string,preserveSearch:f.a.bool,searchParams:f.a.shape(n()({},f.a.string,f.a.string)),portfolioName:f.a.string},t.a=v},624:function(e,t,a){"use strict";t.__esModule=!0,t.WrenchIconConfig={name:"WrenchIcon",height:512,width:512,svgPath:"M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z",yOffset:0,xOffset:0,transform:""},t.WrenchIcon=a(73).createIcon(t.WrenchIconConfig),t.default=t.WrenchIcon},661:function(e,t,a){"use strict";var r=a(28),n=a.n(r),o=a(0),i=a.n(o),s=a(4),c=a.n(s),l=a(591),u=a(613),p=a(74),f=a(6),d=a(572),m=a(599),g=a(600),h=a(612),b=a(29);function y(){var e=n()(["\n  flex: 1;\n"]);return y=function(){return e},e}var v=Object(b.b)(p.Level)(y()),E=function(e){return i.a.createElement(h.b,{isDisabled:e.removeInProgress&&e.isSelected},i.a.createElement(h.a,null,i.a.createElement(l.CardHeader,null,i.a.createElement(v,null,i.a.createElement(d.a,{src:"".concat(f.c,"/portfolio_items/").concat(e.id,"/icon"),sourceId:e.service_offering_source_ref}),e.isSelectable&&i.a.createElement(m.a,{handleCheck:function(){return e.onSelect(e.id)},isChecked:e.isSelected,id:e.id}))),i.a.createElement(g.a,e),i.a.createElement(u.CardFooter,null)))};E.propTypes={id:c.a.string,platformId:c.a.string,service_offering_source_ref:c.a.string,isSelectable:c.a.bool,isSelected:c.a.bool,onSelect:c.a.func,orderUrl:c.a.string,removeInProgress:c.a.bool,portfolio_id:c.a.string,metadata:c.a.shape({user_capabilities:c.a.shape({destroy:c.a.bool}).isRequired}).isRequired},t.a=E},894:function(e,t,a){"use strict";a.r(t);var r=a(36),n=a.n(r),o=a(14),i=a.n(o),s=a(1),c=a.n(s),l=a(0),u=a.n(l),p=a(20),f=a(624),d=a.n(f),m=a(562),g=a.n(m),h=a(123),b=a(89),y=a(661),v=a(573),E=a(558),O=function(e){var t=e.meta,a=e.fetchProducts,r=e.isLoading,n=e.filterProps,o=n.searchValue,i=n.onFilterChange,s=n.placeholder;return{fields:[{component:v.b.TOP_TOOLBAR,key:"products-top-toolbar",fields:[{component:v.b.TOP_TOOLBAR_TITLE,key:"products-toolbar-title",title:"Products",description:"All products collected from your portfolios",noData:t.noData},{component:v.b.LEVEL,key:"Products-actions",fields:t.noData?[]:[{component:v.b.TOOLBAR,key:"main-portfolio-toolbar",fields:[{groupName:"filter-group",component:v.b.FILTER_TOOLBAR_ITEM,key:"filter-input",searchValue:o,onFilterChange:i,placeholder:s,isClearable:!0}]},{component:v.b.LEVEL_ITEM,key:"pagination-item",fields:t.count>0?[{component:E.a,key:"products-pagination",meta:t,apiProps:o,apiRequest:a,isDisabled:r,isCompact:!0}]:[]}]}]}]}},P=a(580),T=a(27),C=a(614),j=a(570),F=a(100),_=a(592),k=a(57),S=a(16),M=a(10),D=a(247),w=a(11),x=a(567),I=a(181),R=a(105),N=a(561),L=(0,a(32).defineMessages)({addSource:{id:"products.empty.add-source",defaultMessage:"Add source"},configureSource:{id:"products.empty.configure-source",defaultMessage:"Configure a source and add products into portfolios."},title:{id:"products.toolbar.title",defaultMessage:"Products"}}),V=a(581),q=a(23);function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var W=Object(F.a)((function(e,t,a){a(!0),t(Object(h.e)(e,T.a)).then((function(){return a(!1)}))}),1e3),z={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},J=function(e,t){switch(t.type){case"setFetching":return B(B({},e),{},{isFetching:t.payload});case"setFilterValue":return B(B({},e),{},{filterValue:t.payload});case"setFilteringFlag":return B(B({},e),{},{isFiltering:t.payload})}return e};t.default=function(){var e,t=Object(q.a)(),a=Object(I.a)(),r=Object(l.useContext)(D.a).release,o=Object(l.useReducer)(J,B(B({},z),{},{filterValue:(null==a||null===(e=a.products)||void 0===e?void 0:e.filter)||""})),s=i()(o,2),c=s[0],f=c.isFetching,m=c.filterValue,v=c.isFiltering,T=s[1],F=Object(l.useContext)(R.a).userIdentity.identity.user.is_org_admin,A=Object(p.useDispatch)(),U=Object(p.useSelector)((function(e){return e.portfolioReducer.portfolioItems})),H=U.data,G=U.meta;Object(l.useEffect)((function(){var e;Promise.all([A(Object(h.e)(null==a||null===(e=a.products)||void 0===e?void 0:e.filter,null==a?void 0:a.products)),A(Object(j.c)())]).then((function(){return T({type:"setFetching",payload:!1})})),Object(b.c)(),insights.chrome.appNavClick({id:"products",secondaryNav:!0})}),[]);var K=function(e){T({type:"setFilterValue",payload:e}),W(e,A,(function(e){return T({type:"setFilteringFlag",payload:e})}))},Q=H.map((function(e){return u.a.createElement(y.a,n()({key:e.id,pathname:e.portfolio_id&&w.y},(a=(t=e).portfolio_id,r=t.id,o=t.service_offering_source_ref,a&&r&&o?{pathname:a&&w.y,searchParams:{portfolio:a,"portfolio-item":r,source:o,"from-products":"true"}}:{}),e,{toDisplay:[]}));var t,a,r,o})),X={PrimaryAction:G.noData?function(){return F&&u.a.createElement("a",{href:"".concat(r,"settings/sources/new")},u.a.createElement(k.Button,{variant:"primary"},t(L.addSource)))}:function(){return u.a.createElement(k.Button,{variant:"link",onClick:function(){return K("")}},t(N.a.clearFilters))},title:G.noData?t(N.a.noProducts):t(N.a.noResults),renderDescription:function(){return u.a.createElement(l.Fragment,null,u.a.createElement(S.TextContent,null,u.a.createElement(M.Text,{component:M.TextVariants.p},G.noData?t(L.configureSource):t(N.a.noResultsDescription)),F?u.a.createElement(M.Text,{component:M.TextVariants.p},t(V.a.connectSource,{a:function(e){return u.a.createElement(l.Fragment,null,u.a.createElement("a",{href:"".concat(document.baseURI,"settings/sources")},e))}})):u.a.createElement(M.Text,null,t(V.a.contactAdmin))))},Icon:G.noData?d.a:g.a};return u.a.createElement(l.Fragment,null,u.a.createElement(P.a,{schema:O({filterProps:{searchValue:m,onFilterChange:K,placeholder:t(N.a.filterByProduct)},title:t(L.title),isLoading:v||f,meta:G,fetchProducts:function(){return A(h.e.apply(void 0,arguments))}})}),u.a.createElement(C.a,{isLoading:v||f,items:Q,renderEmptyState:function(){return u.a.createElement(_.b,X)}}),G.count>0&&u.a.createElement(x.a,null,u.a.createElement(E.a,{dropDirection:"up",meta:G,apiRequest:function(e,t){var r;return A(Object(h.e)(null==a||null===(r=a.products)||void 0===r?void 0:r.filter,t))}})))}}}]);
//# sourceMappingURL=../sourcemaps/products~31ecd969.js.map