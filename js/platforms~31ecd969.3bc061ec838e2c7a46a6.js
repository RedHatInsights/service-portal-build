(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{633:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(245),l=a(184),s=a(36),i=function(){return(i=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},c=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t=e.meta,a=t.limit,r=void 0===a?50:a,f=t.count,m=void 0===f?0:f,p=t.offset,d=void 0===p?0:p,u=e.apiProps,b=e.apiRequest,g=e.className,O=void 0===g?"":g,y=e.isCompact,v=void 0!==y&&y,h=c(e,["meta","apiProps","apiRequest","className","isCompact"]);return n.a.createElement("div",{className:O},n.a.createElement(l.a,i({perPage:r||50,itemCount:m||0,onPerPageSelect:function(e,t){return b(u,{offset:d,limit:t})},page:Object(s.b)(r,d),onSetPage:function(e,t,a){var n={offset:Object(s.c)(t,r),limit:r},l=function(){return b(u,n)};return a?Object(o.a)(l,250)():l()},dropDirection:"down",isCompact:v},h)))}},655:function(e,t,a){"use strict";var r=a(28),n=Object(r.b)({workflowColumn:{id:"platform.inventories.columns.workflow",defaultMessage:"Workflow"},noInventoriesDescription:{id:"platform.inventories.empty.no-inventories",defaultMessage:"No inventories found."},noInventoriesFilterDescription:{id:"platform.inventories.empty.no-results",defaultMessage:"No inventories match your filter criteria."},inventoriesFilter:{id:"platform.inventories.filter.placeholder",defaultMessage:"Filter by inventory"},templatesFilter:{id:"platform.templates.filter.placeholder",defaultMessage:"Filter by template"},noTemplatesTitle:{id:"platform.templates.no-templates",defaultMessage:"No templates"},noTemplatesDescription:{id:"platform.templates.empty.no-templates",defaultMessage:"This platform has no templates."},platformsNoDataDescription:{id:"platforms.list.configure-source",defaultMessage:"To get started, add an Ansible Tower cluster as a source."},connectSource:{id:"platforms.list.connect-source",defaultMessage:"Go to Sources"},contactAdmin:{id:"platforms.list.contact-admin",defaultMessage:"Contact your organization administrator to setup sources for Catalog."},title:{id:"platforms.title",defaultMessage:"Platforms"},noPlatforms:{id:"platforms.list.empty.title",defaultMessage:"No platforms yet"},offeringTitle:{id:"platforms.offerings.detail.title",defaultMessage:"Service offering"},offeringParameters:{id:"platforms.offerings.detail.extra-params",defaultMessage:"Extra parameters"},platformVersion:{id:"platforms.version",defaultMessage:"Platform version"},ansibleVersion:{id:"platforms.ansible.version",defaultMessage:"Ansible version"},platformSummary:{id:"platforms.summary",defaultMessage:"Summmary"},mqttClientId:{id:"platform.mqttClientId",defaultMessage:"MQTT Client Id"},refreshState:{id:"platforms.refreshState",defaultMessage:"Refresh state"},refreshStarted:{id:"platforms.refreshStarted",defaultMessage:"Refresh started"},refreshFinished:{id:"platforms.refreshFinished",defaultMessage:"Refresh finished"},lastSuccessfulRefresh:{id:"platforms.lastSuccessfulRefresh",defaultMessage:"Last successful refresh"},lastChecked:{id:"platforms.lastChecked",defaultMessage:"Last checked"},lastAvailable:{id:"platforms.lastAvailable",defaultMessage:"Last available"},enabled:{id:"platforms.enabled",defaultMessage:"Enabled"},availabilityStatus:{id:"platforms.availabilityStatus",defaultMessage:"Availability status"},dateAdded:{id:"platforms.dateAdded",defaultMessage:"Date added"}});t.a=n},743:function(e,t,a){"use strict";a.d(t,"b",(function(){return f})),a.d(t,"c",(function(){return m})),a.d(t,"a",(function(){return p}));var r=a(40),n=a.n(r),o=a(839),l=a(667),s=a(633);function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f=function(e){var t=e.searchValue,a=e.onFilterChange,r=e.title;return{fields:[{component:l.b.TOP_TOOLBAR,key:"platforms-toolbar",fields:[{component:l.b.TOP_TOOLBAR_TITLE,key:"platforms-toolbar-title",title:r},{component:l.b.LEVEL,key:"platforms-toolbar-actions",fields:[{component:l.b.LEVEL_ITEM,key:"input-level-item",fields:[{component:l.b.FILTER_TOOLBAR_ITEM,key:"platforms-toolbar-filter-input",searchValue:t,onFilterChange:a,placeholder:"Filter by platform"}]},{component:l.b.LEVEL_ITEM,key:"pagination-level-item",fields:[]}]}]}]}},m=function(e){var t=e.title,a=e.paddingBottom,r=e.tabItems,n=e.platformEnabled,s=e.platformAvailable;return{fields:[{component:l.b.TOP_TOOLBAR,key:"platforms-toolbar",paddingBottom:a,fields:[{component:l.b.LEVEL,fields:[{component:l.b.TOOLBAR_GROUP,key:"platform-toolbar",fields:[{component:l.b.TOOLBAR_ITEM,key:"platform-toolbar-group",fields:[{component:l.b.TOP_TOOLBAR_TITLE,key:"platforms-toolbar-title",title:t}]}]},{component:l.b.TOOLBAR_GROUP,key:"platform-toolbar",alignment:"alignRight",fields:[{component:l.b.TOOLBAR_ITEM,key:"platform-label",alignment:"alignRight",fields:[c({component:l.b.LABEL,key:"platform-enabled-label"},n()),c({component:l.b.LABEL,key:"platform-available-label"},s())]}]}]},{component:l.b.LEVEL_ITEM,key:"tabs-level-item",fields:r?[{component:o.a,key:"platform-tabs",tabItems:r}]:[]}]}]}},p=function(e){var t=e.searchValue,a=e.onFilterChange,r=e.meta,n=e.apiRequest,o=e.filterPlaceholder;return{fields:[{component:l.b.TOOLBAR,key:"platforms-filter-toolbar",className:"pf-u-pt-md pf-u-pb-md pf-u-pr-lg pf-u-pl-lg",fields:[{component:l.b.LEVEL,key:"platforms-toolbar-actions",className:"pf-m-grow",fields:[{component:l.b.LEVEL_ITEM,key:"input-level-item",fields:[{component:l.b.FILTER_TOOLBAR_ITEM,key:"platforms-toolbar-filter-input",searchValue:t,onFilterChange:a,placeholder:o}]},{component:l.b.LEVEL_ITEM,key:"pagination-level-item",fields:r.count>0?[{component:s.a,key:"platform-pagination",apiRequest:n,meta:r,isCompact:!0}]:[]}]}]}]}}},820:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(2),n=a(0),o=a(1),l=a(62),s=a.n(l),i=a(193),c=a(75),f=a(240);const m=e=>{var{children:t=null,className:a="",id:l,onExpand:m,toggleButtonProps:p}=e,d=Object(r.__rest)(e,["children","className","id","onExpand","toggleButtonProps"]);return n.createElement(i.b.Consumer,null,({cardId:e})=>n.createElement("div",Object.assign({className:Object(o.css)(s.a.cardHeader,a),id:l},d),m&&n.createElement("div",{className:Object(o.css)(s.a.cardHeaderToggle)},n.createElement(c.a,Object.assign({variant:"plain",type:"button",onClick:t=>{m(t,e)}},p),n.createElement("span",{className:Object(o.css)(s.a.cardHeaderToggleIcon)},n.createElement(f.a,{"aria-hidden":"true"})))),t))};m.displayName="CardHeader"},821:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(2),n=a(0),o=a(62),l=a.n(o),s=a(1);const i=e=>{var{children:t=null,className:a="",component:o="div"}=e,i=Object(r.__rest)(e,["children","className","component"]);const c=o;return n.createElement(c,Object.assign({className:Object(s.css)(l.a.cardFooter,a)},i),t)};i.displayName="CardFooter"},874:function(e,t,a){"use strict";t.__esModule=!0,t.CogIconConfig={name:"CogIcon",height:512,width:512,svgPath:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z",yOffset:0,xOffset:0},t.CogIcon=a(97).createIcon(t.CogIconConfig),t.default=t.CogIcon},975:function(e,t,a){"use strict";a.r(t);var r=a(151),n=a.n(r),o=a(107),l=a.n(o),s=a(0),i=a.n(s),c=a(25),f=a(364),m=a(67),p=a(635),d=a.n(p),u=a(874),b=a.n(u),g=a(130),O=a(672),y=a(723),v=a(663),h=a(602),E=a(820),L=a(147),j=a(77),T=a(821),M=a(954),P=a(737),k=a(12),I=a(719),_=a(632),C=a(721),w=a(720),R=a(668),N=a(239),A=a(129),S=a(27),F=function(){return(F=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},B=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a},D=["description","modified"],V=function(e){var t=e.name,a=e.id,r=B(e,["name","id"]),n=Object(S.a)();return i.a.createElement(h.a,null,i.a.createElement(C.a,{key:a,ouiaId:"platform-"+a},i.a.createElement(E.a,null,i.a.createElement(R.a,{height:40,sourceId:a})),i.a.createElement(w.a,null,i.a.createElement(L.a,null,i.a.createElement(_.a,{pathname:k.u,searchParams:{platform:a}},i.a.createElement(j.a,{title:t,className:"pf-u-mb-0",component:j.b.h3},i.a.createElement(I.a,null,t)),r.last_successful_refresh_at&&i.a.createElement(L.a,{className:"pf-u-mb-md"},i.a.createElement(j.a,{component:j.b.small,className:"pf-u-mb-0"},"Last refreshed  ",i.a.createElement(N.DateFormat,{date:r.last_successful_refresh_at,type:"relative"}))))),i.a.createElement(P.a,F({},F({name:t},r),{toDisplay:D}))),i.a.createElement(T.a,null,i.a.createElement(M.a,{variant:"filled",color:r.enabled?"green":"red"},r.enabled?n(A.a.enabled):n(A.a.disabled))," ",i.a.createElement(M.a,{variant:"filled",color:"available"===r.availability_status?"green":"red"},"available"===r.availability_status?n(A.a.available):n(A.a.notAvailable)))))},x=a(743),q=a(679),H=a(153),z=a(655),G=a(638);t.default=function(){var e=Object(S.a)(),t=Object(s.useState)(""),a=l()(t,2),r=a[0],o=a[1],p=Object(c.e)((function(e){var t=e.platformReducer;return{platforms:t.platforms,isLoading:t.isPlatformDataLoading}})),u=p.platforms,h=p.isLoading,E=Object(c.d)(),L=Object(s.useContext)(H.a).userIdentity.identity.user.is_org_admin;Object(s.useEffect)((function(){E(Object(v.c)()),Object(g.d)(),insights.chrome.appNavClick({id:"platforms",secondaryNav:!0})}),[]);var j={items:u.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())})).map((function(e){return i.a.createElement(V,n()({ouiaId:"platform-".concat(e.id),key:e.id},e))})),isLoading:h&&0===u.length},T={PrimaryAction:r&&""!==r?function(){return i.a.createElement(f.Button,{ouiaId:"clear-filter",variant:"link",onClick:function(){return o("")}},e(G.a.clearFilters))}:function(){return L?i.a.createElement(f.Button,{component:"a",href:"".concat(document.baseURI,"settings/sources"),id:"add-source"},e(z.a.connectSource)):i.a.createElement(m.Text,null,e(z.a.contactAdmin))},title:e(r&&""!==r?G.a.noResults:z.a.noPlatforms),description:e(r&&""!==r?G.a.noResultsDescription:z.a.platformsNoDataDescription),Icon:r&&""!==r?d.a:b.a};return i.a.createElement(s.Fragment,null,i.a.createElement(O.a,{schema:Object(x.b)({onFilterChange:function(e){return o(e)},searchValue:r,title:e(z.a.title)})}),i.a.createElement(y.a,n()({},j,{renderEmptyState:function(){return i.a.createElement(q.b,T)}})))}}}]);
//# sourceMappingURL=../sourcemaps/platforms~31ecd969.js.map