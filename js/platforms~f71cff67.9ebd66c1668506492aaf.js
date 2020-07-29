(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{433:function(e,t,a){"use strict";var n=a(89),r=a.n(n),o=a(29),i=a.n(o),s=a(0),l=a.n(s),c=a(12),m=a.n(c),p=a(432),f=a(211),u=a(23),d=function(e){var t=e.meta,a=t.limit,n=t.count,o=t.offset,s=e.apiProps,c=e.apiRequest,m=e.className,d=e.isCompact,g=i()(e,["meta","apiProps","apiRequest","className","isCompact"]);return l.a.createElement("div",{className:m},l.a.createElement(f.Pagination,r()({perPage:a||50,itemCount:n||0,onPerPageSelect:function(e,t){return c(s,{offset:o,limit:t})},page:Object(u.b)(a,o),onSetPage:function(e,t,n){var r={offset:Object(u.c)(t,a),limit:a},o=function(){return c(s,r)};return n?Object(p.a)(o,250)():o()},direction:"down",isCompact:d},g)))};d.propTypes={meta:m.a.shape({count:m.a.number,limit:m.a.number.isRequired,offset:m.a.number.isRequired}),apiRequest:m.a.func.isRequired,apiProps:m.a.any,className:m.a.string,isCompact:m.a.bool},d.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1},t.a=d},469:function(e,t,a){"use strict";var n=(0,a(49).defineMessages)({workflowColumn:{id:"platform.inventories.columns.workflow",defaultMessage:"Workflow"},noInventoriesDescription:{id:"platform.inventories.empty.no-inventories",defaultMessage:"No inventories found."},noInventoriesFilterDescription:{id:"platform.inventories.empty.no-results",defaultMessage:"No inventories match your filter criteria."},inventoriesFilter:{id:"platform.inventories.filter.placeholder",defaultMessage:"Filter by inventory"},templatesFilter:{id:"platform.templates.filter.placeholder",defaultMessage:"Filter by template"},noTemplatesTitle:{id:"platform.templates.no-templates",defaultMessage:"No templates"},noTemplatesDescription:{id:"platform.templates.empty.no-templates",defaultMessage:"This platform has no templates."},configureSourceTitle:{id:"platforms.list.configure-source",defaultMessage:"Configure a source in order to add products to portfolios."},connectSource:{id:"platforms.list.connect-source",defaultMessage:"To connect to a source, go to <a>Sources</a> under Settings."},contactAdmin:{id:"platforms.list.contact-admin",defaultMessage:"Contact your organization administrator to setup sources for Catalog."},title:{id:"platforms.title",defaultMessage:"Platforms"},noPlatforms:{id:"platforms.list.empty.title",defaultMessage:"No platforms yet"},offeringTitle:{id:"platforms.offerings.detail.title",defaultMessage:"Service offering"},offeringParameters:{id:"platforms.offerings.detail.extra-params",defaultMessage:"Extra parameters"}});t.a=n},526:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return l}));var n=a(578),r=a(461),o=a(433),i=function(e){var t=e.searchValue,a=e.onFilterChange,n=e.title;return{fields:[{component:r.b.TOP_TOOLBAR,key:"platforms-toolbar",fields:[{component:r.b.TOP_TOOLBAR_TITLE,key:"platforms-toolbar-title",title:n},{component:r.b.LEVEL,key:"platforms-toolbar-actions",fields:[{component:r.b.LEVEL_ITEM,key:"input-level-item",fields:[{component:r.b.FILTER_TOOLBAR_ITEM,key:"platforms-toolbar-filter-input",searchValue:t,onFilterChange:a,placeholder:"Filter by platform"}]},{component:r.b.LEVEL_ITEM,key:"pagination-level-item",fields:[]}]}]}]}},s=function(e){var t=e.title,a=e.paddingBottom,o=e.tabItems;return{fields:[{component:r.b.TOP_TOOLBAR,key:"platforms-toolbar",paddingBottom:a,fields:[{component:r.b.TOP_TOOLBAR_TITLE,key:"platforms-toolbar-title",title:t},{component:r.b.LEVEL_ITEM,key:"tabs-level-item",fields:o?[{component:n.a,key:"platform-tabs",tabItems:o}]:[]}]}]}},l=function(e){var t=e.searchValue,a=e.onFilterChange,n=e.meta,i=e.apiRequest,s=e.filterPlaceholder;return{fields:[{component:r.b.TOOLBAR,key:"platforms-filter-toolbar",className:"pf-u-pt-md pf-u-pb-md pf-u-pr-lg pf-u-pl-lg",fields:[{component:r.b.LEVEL,key:"platforms-toolbar-actions",className:"pf-m-grow",fields:[{component:r.b.LEVEL_ITEM,key:"input-level-item",fields:[{component:r.b.FILTER_TOOLBAR_ITEM,key:"platforms-toolbar-filter-input",searchValue:t,onFilterChange:a,placeholder:s}]},{component:r.b.LEVEL_ITEM,key:"pagination-level-item",fields:n.count>0?[{component:o.a,key:"platform-pagination",apiRequest:i,meta:n,isCompact:!0}]:[]}]}]}]}}},706:function(e,t,a){e.exports=a.p+"fonts/platform-default.svg"},707:function(e,t,a){e.exports=a.p+"fonts/platform-openshift.svg"},708:function(e,t,a){e.exports=a.p+"fonts/platform-amazon.png"},709:function(e,t,a){e.exports=a.p+"fonts/platform-tower.png"},863:function(e,t,a){"use strict";a.r(t);var n=a(89),r=a.n(n),o=a(22),i=a.n(o),s=a(0),l=a.n(s),c=a(16),m=a(50),p=a(71),f=a(440),u=a.n(f),d=a(60),g=a(468),b=a(512),E=a(454),y=a(1),O=a.n(y),T=a(29),v=a.n(T),h=a(12),L=a.n(h),P=a(480),k=a(511),j=a(143),C=a(706),w=a.n(C),M=a(707),_=a.n(M),R=a(708),I=a.n(R),x=a(709),F=a.n(x),V=function(e){var t=e.src,a=v()(e,["src"]);return l.a.createElement("img",r()({src:t},a))};V.propTypes={src:L.a.string.isRequired};var N=V,S=a(507),D=a(11),q=a(508),A=a(435),B=a(510),z=a(509);function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var U=["description","modified"],G={1:_.a,2:I.a,3:F.a},H=function(e){var t=e.name,a=e.id,n=v()(e,["name","id"]);return l.a.createElement(j.GalleryItem,null,l.a.createElement(B.a,{key:a},l.a.createElement(P.CardHeader,null,l.a.createElement(N,{src:G[n.source_type_id]||w.a,width:"80",height:"40"})),l.a.createElement(z.a,null,l.a.createElement(p.TextContent,null,l.a.createElement(A.a,{pathname:D.r,searchParams:{platform:a}},l.a.createElement(m.Text,{title:t,className:"pf-u-mb-0",component:m.TextVariants.h3},l.a.createElement(q.a,null,t)))),l.a.createElement(S.a,r()({},function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(Object(a),!0).forEach((function(t){O()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({name:t},n),{toDisplay:U}))),l.a.createElement(k.CardFooter,null)))};H.propTypes={history:L.a.object,imageUrl:L.a.string,name:L.a.string,source_type_id:L.a.string,id:L.a.string};var W=H,K=a(526),Q=a(481),X=a(78),Y=a(86),Z=a(469);t.default=function(){var e=Object(Y.a)().formatMessage,t=Object(s.useState)(""),a=i()(t,2),n=a[0],o=a[1],f=Object(c.useSelector)((function(e){var t=e.platformReducer;return{platforms:t.platforms,isLoading:t.isPlatformDataLoading}})),y=f.platforms,O=f.isLoading,T=Object(c.useDispatch)(),v=Object(s.useContext)(X.a).userIdentity.identity.user.is_org_admin;Object(s.useEffect)((function(){T(Object(E.c)()),Object(d.c)(),insights.chrome.appNavClick({id:"platforms",secondaryNav:!0})}),[]);var h=function(){return l.a.createElement(s.Fragment,null,l.a.createElement(p.TextContent,null,l.a.createElement(m.Text,{component:m.TextVariants.p},e(Z.a.configureSourceTitle)),v?l.a.createElement(m.Text,{component:m.TextVariants.p},e(Z.a.connectSource,{a:function(e){return l.a.createElement("a",{href:"".concat(document.baseURI,"settings/sources")},e)}})):l.a.createElement(m.Text,null,e(Z.a.contactAdmin))))},L={items:y.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){return l.a.createElement(W,r()({key:e.id},e))})),isLoading:O&&0===y.length};return l.a.createElement(s.Fragment,null,l.a.createElement(g.a,{schema:Object(K.b)({onFilterChange:function(e){return o(e)},searchValue:n,title:e(Z.a.title)})}),l.a.createElement(b.a,r()({},L,{renderEmptyState:function(){return l.a.createElement(Q.b,{title:e(Z.a.noPlatforms),renderDescription:h,Icon:u.a})}})))}}}]);
//# sourceMappingURL=../sourcemaps/platforms~f71cff67.js.map