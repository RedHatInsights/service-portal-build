(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1022:function(e,r,t){"use strict";t.r(r);var n=t(0),o=t.n(n),i=t(218),u=t(21),a=t(718),s=t.n(a),l=t(617),c=t(614),p=t(615),f=t(333),d=t(160),h=function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;var n=Array(e),o=0;for(r=0;r<t;r++)for(var i=arguments[r],u=0,a=i.length;u<a;u++,o++)n[o]=i[u];return n},g=function(e,r){return[{component:"sub-form",description:"share.new.description",name:"new_share",key:"1",fields:[{name:"group-selection",component:"share-group-select",loadOptions:e,isSearchable:!0,permissions:r}]}]},v=function(e){return[{component:"sub-form",name:"current-groups-sub-form",fields:[{name:"shared-groups",permissionVerbs:e,component:"share-group-edit"}]}]},m=function(e,r,t,n){return{fields:h(t?g(e,r):[],n?v(r):[])}},b=t(165),y=t(28),_=t(5),O=Object(y.a)(),j=Object(y.f)(),w=function(e){return O.get(_.e+"/portfolios/"+e+"/share_info")},S=t(3),x=function(){return(x=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)},P=function(e){return{type:S.ab,payload:(r=x({},e),t={permissions:r.permissions.split(","),group_uuids:[r.group_uuid]},j.sharePortfolio(r.id,t))};var r,t},N=function(e){return{type:S.db,payload:(r=x({},e),t={permissions:r.permissions,group_uuids:[r.group_uuid]},j.unsharePortfolio(r.id,t))};var r,t},M=t(99),k=(Object(y.h)(),t(98)),E=t(623),R=t(226),T=t(54),D=t(39),G=t(630),A=t(20),I=t(231),C=function(e,r){switch(e.length){case 1:return e[0];case 2:return r(T.a.shareSuccessTwoGroup,{group1:e[0],group2:e[1]});default:return r(T.a.shareSuccessMultipleGroups,{count:e.length})}},F=function(e){var r,t=e.shareData,n=e.initialGroups,o=e.removedGroups,i=e.newGroups,u=e.formatMessage,a=e.portfolioName,s=u(T.a.shareSuccessTitle),l=t.filter((function(e){var r,t=e.permissions,o=e.group_uuid,i=n.find((function(e){return e.group_uuid===o}));return i&&(null==t?void 0:t.split(",").length)!==(null===(r=i.permissions)||void 0===r?void 0:r.split(",").length)})),c=o.filter((function(e){var r=e.group_uuid;return!l.find((function(e){return e.group_uuid===r}))})).length>0,p=i.filter((function(e){var r=e.group_uuid;return!n.find((function(e){return e.group_uuid===r}))})).length>0;return c&&!p&&0===l.length&&(s=u(T.a.shareSuccessTitleOnlyUnsharing),r=u(T.a.shareSuccessDescriptionOnlyUnsharing,{name:a(),group:C(o.map((function(e){return e.groupName})),u),b:I.a})),!c&&p&&0===l.length&&(s=u(T.a.shareSuccessTitleOnlySharing),r=u(T.a.shareSuccessDescriptionOnlySharing,{name:a(),group:C(i.map((function(e){return e.groupName})),u),b:I.a})),!c&&!p&&l.length>0&&(s=u(T.a.shareSuccessTitleOnlyChaningPermissions),r=u(T.a.shareSuccessDescriptionOnlyChaningPermissions,{group:C(l.map((function(e){return e.groupName})),u),b:I.a})),{title:s,description:r}},B=function(){return(B=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)},L=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t},U=function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;var n=Array(e),o=0;for(r=0;r<t;r++)for(var i=arguments[r],u=0,a=i.length;u<a;u++,o++)n[o]=i[u];return n};r.default=function(e){var r,t,a,h,g,v,O,j,x=e.closeUrl,I=e.removeSearch,C=e.viewState,z=e.portfolioName,V=void 0===z?function(){return""}:z,H=Object(A.a)(),J=Object(u.useDispatch)(),q=Object(E.a)({removeSearch:I,keepHash:!0}).push,K=Object(k.a)(["portfolio"]),Q=K[0].portfolio,W=K[1],X=Object(n.useState)(!0),Y=X[0],Z=X[1],$=Object(u.useSelector)((function(e){var r=e.portfolioReducer;return{selectedPortfolio:r.selectedPortfolio,isLoading:r.isLoading}})),ee=$.selectedPortfolio,re=$.isLoading,te=Object(u.useSelector)((function(e){return{shareInfo:e.shareReducer.shareInfo}})).shareInfo;Object(n.useEffect)((function(){var e;Z(!0),J((e=Q,{type:S.G,payload:w(e)})).then((function(){return Z(!1)})).catch((function(){return Z(!1)}))}),[]);var ne=function(){J(Object(b.m)()),q({pathname:x,search:W})};if(!1===(null===(t=null===(r=null==ee?void 0:ee.metadata)||void 0===r?void 0:r.user_capabilities)||void 0===t?void 0:t.share)&&!1===(null===(h=null===(a=null==ee?void 0:ee.metadata)||void 0===a?void 0:a.user_capabilities)||void 0===h?void 0:h.unshare))return o.a.createElement(R.a,null);var oe=Y||re;return o.a.createElement(l.a,{title:H(T.a.portfolioShareTitle),isOpen:!0,variant:"small",onClose:ne},oe&&o.a.createElement(M.i,null),!oe&&o.a.createElement(c.a,{hasGutter:!0},o.a.createElement(p.a,null,o.a.createElement(f.a,null,o.a.createElement(d.a,null,H(T.a.portfolioShareDescription,{name:V(Q),strong:function(e){return o.a.createElement("strong",{key:"strong"},e)}})))),o.a.createElement(p.a,null,o.a.createElement(i.c,{schema:m((function(e){return void 0===(r=e)&&(r=""),Object(y.a)().get(_.j+"/groups/"+(r.length>0?"?name="+r:"")).then((function(e){return e.data.map((function(e){var r=e.uuid;return{label:e.name,value:r}}))}));var r}),_.m,!1!==(null===(v=null===(g=null==ee?void 0:ee.metadata)||void 0===g?void 0:g.user_capabilities)||void 0===v?void 0:v.share),!1!==(null===(j=null===(O=null==ee?void 0:ee.metadata)||void 0===O?void 0:O.user_capabilities)||void 0===j?void 0:j.unshare)),onSubmit:function(e,r){var t=e["shared-groups"],n=[],o=r.getState().initialValues["shared-groups"],i=o.filter((function(e){return!t.find((function(r){return r.group_uuid===e.group_uuid}))})).map((function(e){var r=e.permissions,t=L(e,["permissions"]);return B(B({},t),{permissions:r.split(",")})}));t.forEach((function(e){var r=o.find((function(r){return r.group_uuid===e.group_uuid}));r&&!s()(r,e)&&(r.permissions.length>e.permissions.length?i.push({id:Q,permissions:["update"],group_uuid:e.group_uuid,groupName:e.groupName}):n.push(e)),r||n.push(e)}));var u=function(e,r){return void 0===r&&(r=!1),J((r?N:P)({id:Q,permissions:e.permissions,group_uuid:e.group_uuid}))},a=U(n.map((function(e){return u(e)})),i.map((function(e){return u(e,!0)})));ne();var l=F({shareData:t,initialGroups:o,removedGroups:i.map((function(e){var r=e.permissions,t=L(e,["permissions"]);return B(B({},t),{permissions:r.join(",")})})),newGroups:n,formatMessage:H,portfolioName:V}),c=l.title,p=l.description;return Promise.all(a).then((function(){return J({type:D.ADD_NOTIFICATION,payload:{dismissable:!0,variant:"success",title:c,description:p}}),J(Object(b.g)(C))}))},onCancel:ne,validate:function(e){var r={};return e.group_uuid&&!e.permissions&&(r.permissions=H(T.a.portfolioSharePermissions)),e.permissions&&!e.group_uuid&&(r.group_uuid=H(T.a.portfolioShareGroups)),r},initialValues:B(B({},ee),{"shared-groups":te.map((function(e){var r=e.permissions.filter((function(e){return _.n.indexOf(e)>-1})),t=e.group_name,n=_.m.find((function(e){return e.value===r.sort().join(",")}));return{groupName:t,group_uuid:e.group_uuid,permissions:n?n.value:H(G.a.unknown)}}))}),templateProps:{disableSubmit:["pristine","validating"],submitLabel:H(T.a.portfolioShareApply)}}))))}},623:function(e,r,t){"use strict";var n=t(97),o=function(){return(o=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)};r.a=function(e){var r=void 0===e?{}:e,t=r.removeSearch,i=r.keepHash,u=Object(n.g)();return o(o({},u),{push:function(e){var r=e;return i&&u.location.hash.length>0&&(r="object"==typeof r?o(o({},r),{hash:u.location.hash}):""+r+u.location.hash),t?u.push(function(e){return"string"==typeof e?e.split("?")[0]:"object"==typeof e?o(o({},e),{search:void 0}):e}(r)):u.push(r)}})}},630:function(e,r,t){"use strict";var n=t(22),o=Object(n.b)({noItems:{id:"common.filtering.noItems",defaultMessage:"No items found"},filterByProduct:{id:"common.filtering.filterByProduct",defaultMessage:"Filter by product"},noResults:{id:"common.filtering.noResults",defaultMessage:"No results found"},noResultsDescription:{id:"common.filtering.noResultsDescription",defaultMessage:"No results match the filter criteria. Remove all filters or clear all filters to show results."},clearFilters:{id:"common.filtering.clear-filters",defaultMessage:"Clear all filters"},noProducts:{id:"common.filtering.no-products",defaultMessage:"No products yet"},noRecords:{id:"commonMessages.noRecords",defaultMessage:"No records"},filterByTitle:{id:"tableToolbar.filterByTitle",defaultMessage:"Filter by {title}"},noResultsFound:{id:"tableToolbar.noResultsFound",defaultMessage:"No results found"},noResult:{id:"tableToolbar.noResult",defaultMessage:"No {results}"},unknown:{id:"commonMessages.unknown",defaultMessage:"Unknown"}});r.a=o},639:function(e,r,t){var n=t(706);e.exports=function(e,r){for(var t=e.length;t--;)if(n(e[t][0],r))return t;return-1}},706:function(e,r){e.exports=function(e,r){return e===r||e!=e&&r!=r}},718:function(e,r,t){var n=t(719);e.exports=function(e,r){return n(e,r)}},719:function(e,r,t){var n=t(761),o=t(350);e.exports=function e(r,t,i,u,a){return r===t||(null==r||null==t||!o(r)&&!o(t)?r!=r&&t!=t:n(r,t,i,u,e,a))}},720:function(e,r,t){var n=t(762),o=t(763),i=t(764),u=t(765),a=t(766);function s(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=o,s.prototype.get=i,s.prototype.has=u,s.prototype.set=a,e.exports=s},721:function(e,r){e.exports=function(e,r){return function(t){return e(r(t))}}},722:function(e,r){e.exports=function(){return!1}},723:function(e,r){e.exports=function(){return!1}},761:function(e,r,t){var n=t(720),o=t(767),i=t(769),u=t(770),a=t(772),s=t(136),l=t(722),c=t(723),p="[object Object]",f=Object.prototype.hasOwnProperty;e.exports=function(e,r,t,d,h,g){var v=s(e),m=s(r),b=v?"[object Array]":a(e),y=m?"[object Array]":a(r),_=(b="[object Arguments]"==b?p:b)==p,O=(y="[object Arguments]"==y?p:y)==p,j=b==y;if(j&&l(e)){if(!l(r))return!1;v=!0,_=!1}if(j&&!_)return g||(g=new n),v||c(e)?o(e,r,t,d,h,g):i(e,r,b,t,d,h,g);if(!(1&t)){var w=_&&f.call(e,"__wrapped__"),S=O&&f.call(r,"__wrapped__");if(w||S){var x=w?e.value():e,P=S?r.value():r;return g||(g=new n),h(x,P,t,d,g)}}return!!j&&(g||(g=new n),u(e,r,t,d,h,g))}},762:function(e,r){e.exports=function(){this.__data__=[],this.size=0}},763:function(e,r,t){var n=t(639),o=Array.prototype.splice;e.exports=function(e){var r=this.__data__,t=n(r,e);return!(t<0)&&(t==r.length-1?r.pop():o.call(r,t,1),--this.size,!0)}},764:function(e,r,t){var n=t(639);e.exports=function(e){var r=this.__data__,t=n(r,e);return t<0?void 0:r[t][1]}},765:function(e,r,t){var n=t(639);e.exports=function(e){return n(this.__data__,e)>-1}},766:function(e,r,t){var n=t(639);e.exports=function(e,r){var t=this.__data__,o=n(t,e);return o<0?(++this.size,t.push([e,r])):t[o][1]=r,this}},767:function(e,r,t){var n=t(356),o=t(768),i=t(357);e.exports=function(e,r,t,u,a,s){var l=1&t,c=e.length,p=r.length;if(c!=p&&!(l&&p>c))return!1;var f=s.get(e);if(f&&s.get(r))return f==r;var d=-1,h=!0,g=2&t?new n:void 0;for(s.set(e,r),s.set(r,e);++d<c;){var v=e[d],m=r[d];if(u)var b=l?u(m,v,d,r,e,s):u(v,m,d,e,r,s);if(void 0!==b){if(b)continue;h=!1;break}if(g){if(!o(r,(function(e,r){if(!i(g,r)&&(v===e||a(v,e,t,u,s)))return g.push(r)}))){h=!1;break}}else if(v!==m&&!a(v,m,t,u,s)){h=!1;break}}return s.delete(e),s.delete(r),h}},768:function(e,r){e.exports=function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n;)if(r(e[t],t,e))return!0;return!1}},769:function(e,r){e.exports=function(e,r){return e===r||e!=e&&r!=r}},770:function(e,r,t){var n=t(771),o=Object.prototype.hasOwnProperty;e.exports=function(e,r,t,i,u,a){var s=1&t,l=n(e),c=l.length;if(c!=n(r).length&&!s)return!1;for(var p=c;p--;){var f=l[p];if(!(s?f in r:o.call(r,f)))return!1}var d=a.get(e);if(d&&a.get(r))return d==r;var h=!0;a.set(e,r),a.set(r,e);for(var g=s;++p<c;){var v=e[f=l[p]],m=r[f];if(i)var b=s?i(m,v,f,r,e,a):i(v,m,f,e,r,a);if(!(void 0===b?v===m||u(v,m,t,i,a):b)){h=!1;break}g||(g="constructor"==f)}if(h&&!g){var y=e.constructor,_=r.constructor;y==_||!("constructor"in e)||!("constructor"in r)||"function"==typeof y&&y instanceof y&&"function"==typeof _&&_ instanceof _||(h=!1)}return a.delete(e),a.delete(r),h}},771:function(e,r,t){var n=t(721)(Object.keys,Object);e.exports=n},772:function(e,r){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}}}]);
//# sourceMappingURL=../sourcemaps/share-portfolio~31ecd969.js.map