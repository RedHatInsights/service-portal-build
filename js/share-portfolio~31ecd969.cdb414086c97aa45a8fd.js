(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{561:function(e,t,r){"use strict";var n=(0,r(33).defineMessages)({noItems:{id:"common.filtering.noItems",defaultMessage:"No items found"},filterByProduct:{id:"common.filtering.filterByProduct",defaultMessage:"Filter by product"},noResults:{id:"common.filtering.noResults",defaultMessage:"No results found"},noResultsDescription:{id:"common.filtering.noResultsDescription",defaultMessage:"No results match the filter criteria. Remove all filters or clear all filters to show results."},clearFilters:{id:"common.filtering.clear-filters",defaultMessage:"Clear all filters"},noProducts:{id:"common.filtering.no-products",defaultMessage:"No products yet"},noRecords:{id:"commonMessages.noRecords",defaultMessage:"No records"},filterByTitle:{id:"tableToolbar.filterByTitle",defaultMessage:"Filter by {title}"},noResultsFound:{id:"tableToolbar.noResultsFound",defaultMessage:"No results found"},noResult:{id:"tableToolbar.noResult",defaultMessage:"No {results}"},unknown:{id:"commonMessages.unknown",defaultMessage:"Unknown"}});t.a=n},564:function(e,t,r){"use strict";var n=r(1),o=r.n(n),i=r(180),u=r.n(i),a=r(78);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=function(e){return"string"==typeof e?e.split("?")[0]:"object"===u()(e)?c(c({},e),{},{search:void 0}):e};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.removeSearch,r=e.keepHash,n=Object(a.g)();return c(c({},n),{},{push:function(e){var o=e;return r&&n.location.hash.length>0&&(o="object"===u()(o)?c(c({},o),{},{hash:n.location.hash}):"".concat(o).concat(n.location.hash)),t?n.push(l(o)):n.push(o)}})}},588:function(e,t,r){var n=r(702);e.exports=function(e,t){for(var r=e.length;r--;)if(n(e[r][0],t))return r;return-1}},696:function(e,t,r){var n=r(697);e.exports=function(e,t){return n(e,t)}},697:function(e,t,r){var n=r(698),o=r(306);e.exports=function e(t,r,i,u,a){return t===r||(null==t||null==r||!o(t)&&!o(r)?t!=t&&r!=r:n(t,r,i,u,e,a))}},698:function(e,t,r){var n=r(699),o=r(706),i=r(708),u=r(709),a=r(712),s=r(107),c=r(713),l=r(714),p="[object Object]",f=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,d,g,h){var m=s(e),v=s(t),b=m?"[object Array]":a(e),O=v?"[object Array]":a(t),y=(b="[object Arguments]"==b?p:b)==p,j=(O="[object Arguments]"==O?p:O)==p,_=b==O;if(_&&c(e)){if(!c(t))return!1;m=!0,y=!1}if(_&&!y)return h||(h=new n),m||l(e)?o(e,t,r,d,g,h):i(e,t,b,r,d,g,h);if(!(1&r)){var w=y&&f.call(e,"__wrapped__"),P=j&&f.call(t,"__wrapped__");if(w||P){var S=w?e.value():e,x=P?t.value():t;return h||(h=new n),g(S,x,r,d,h)}}return!!_&&(h||(h=new n),u(e,t,r,d,g,h))}},699:function(e,t,r){var n=r(700),o=r(701),i=r(703),u=r(704),a=r(705);function s(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=o,s.prototype.get=i,s.prototype.has=u,s.prototype.set=a,e.exports=s},700:function(e,t){e.exports=function(){this.__data__=[],this.size=0}},701:function(e,t,r){var n=r(588),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,r=n(t,e);return!(r<0)&&(r==t.length-1?t.pop():o.call(t,r,1),--this.size,!0)}},702:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},703:function(e,t,r){var n=r(588);e.exports=function(e){var t=this.__data__,r=n(t,e);return r<0?void 0:t[r][1]}},704:function(e,t,r){var n=r(588);e.exports=function(e){return n(this.__data__,e)>-1}},705:function(e,t,r){var n=r(588);e.exports=function(e,t){var r=this.__data__,o=n(r,e);return o<0?(++this.size,r.push([e,t])):r[o][1]=t,this}},706:function(e,t,r){var n=r(304),o=r(707),i=r(305);e.exports=function(e,t,r,u,a,s){var c=1&r,l=e.length,p=t.length;if(l!=p&&!(c&&p>l))return!1;var f=s.get(e);if(f&&s.get(t))return f==t;var d=-1,g=!0,h=2&r?new n:void 0;for(s.set(e,t),s.set(t,e);++d<l;){var m=e[d],v=t[d];if(u)var b=c?u(v,m,d,t,e,s):u(m,v,d,e,t,s);if(void 0!==b){if(b)continue;g=!1;break}if(h){if(!o(t,(function(e,t){if(!i(h,t)&&(m===e||a(m,e,r,u,s)))return h.push(t)}))){g=!1;break}}else if(m!==v&&!a(m,v,r,u,s)){g=!1;break}}return s.delete(e),s.delete(t),g}},707:function(e,t){e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}},708:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},709:function(e,t,r){var n=r(710),o=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,i,u,a){var s=1&r,c=n(e),l=c.length;if(l!=n(t).length&&!s)return!1;for(var p=l;p--;){var f=c[p];if(!(s?f in t:o.call(t,f)))return!1}var d=a.get(e);if(d&&a.get(t))return d==t;var g=!0;a.set(e,t),a.set(t,e);for(var h=s;++p<l;){var m=e[f=c[p]],v=t[f];if(i)var b=s?i(v,m,f,t,e,a):i(m,v,f,e,t,a);if(!(void 0===b?m===v||u(m,v,r,i,a):b)){g=!1;break}h||(h="constructor"==f)}if(g&&!h){var O=e.constructor,y=t.constructor;O==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof O&&O instanceof O&&"function"==typeof y&&y instanceof y||(g=!1)}return a.delete(e),a.delete(t),g}},710:function(e,t,r){var n=r(711)(Object.keys,Object);e.exports=n},711:function(e,t){e.exports=function(e,t){return function(r){return e(t(r))}}},712:function(e,t){var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},713:function(e,t){e.exports=function(){return!1}},714:function(e,t){e.exports=function(){return!1}},854:function(e,t,r){"use strict";r.r(t);var n=r(16),o=r.n(n),i=r(1),u=r.n(i),a=r(19),s=r.n(a),c=r(15),l=r.n(c),p=r(0),f=r.n(p),d=r(4),g=r.n(d),h=r(172),m=r(20),v=r(696),b=r.n(v),O=r(170),y=r(17),j=r(10),_=r(176),w=r(135),P=function(e,t){return[{component:"sub-form",description:"share.new.description",name:"new_share",key:"1",fields:[{name:"group-selection",component:"share-group-select",loadOptions:e,isSearchable:!0,permissions:t}]}]},S=function(e){return[{component:"sub-form",name:"current-groups-sub-form",fields:[{name:"shared-groups",permissionVerbs:e,component:"share-group-edit"}]}]},x=function(e,t,r,n,i){return{fields:[].concat(o()(r?P(e,t):[]),o()(n?S(t):[]))}},k=r(126),D=r(14),E=r.n(D),M=r(26),N=r.n(M),T=r(36),R=r(6),G=Object(T.a)(),I=Object(T.f)();function A(e){return C.apply(this,arguments)}function C(){return(C=N()(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.get("".concat(R.c,"/portfolios/").concat(t,"/share_info"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=r(2);function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=function(e){return{type:F.ab,payload:(t=B({},e),r={permissions:t.permissions.split(","),group_uuids:[t.group_uuid]},I.sharePortfolio(t.id,r))};var t,r},z=function(e){return{type:F.db,payload:(t=B({},e),r={permissions:t.permissions,group_uuids:[t.group_uuid]},I.unsharePortfolio(t.id,r))};var t,r},V=r(80);Object(T.h)();var H=r(79),J=r(564),q=r(183),K=r(44),Q=r(32),W=r(561),X=r(23),Y=r(187),Z=function(e,t){switch(e.length){case 1:return e[0];case 2:return t(K.a.shareSuccessTwoGroup,{group1:e[0],group2:e[1]});default:return t(K.a.shareSuccessMultipleGroups,{count:e.length})}},$=function(e){var t,r=e.shareData,n=e.initialGroups,o=e.removedGroups,i=e.newGroups,u=e.formatMessage,a=e.portfolioName,s=u(K.a.shareSuccessTitle),c=r.filter((function(e){var t,r=e.permissions,o=e.group_uuid,i=n.find((function(e){return e.group_uuid===o}));return i&&(null==r?void 0:r.split(",").length)!==(null===(t=i.permissions)||void 0===t?void 0:t.split(",").length)})),l=o.filter((function(e){var t=e.group_uuid;return!c.find((function(e){return e.group_uuid===t}))})).length>0,p=i.filter((function(e){var t=e.group_uuid;return!n.find((function(e){return e.group_uuid===t}))})).length>0;return l&&!p&&0===c.length&&(s=u(K.a.shareSuccessTitleOnlyUnsharing),t=u(K.a.shareSuccessDescriptionOnlyUnsharing,{name:a(),group:Z(o.map((function(e){return e.groupName})),u),b:Y.a})),!l&&p&&0===c.length&&(s=u(K.a.shareSuccessTitleOnlySharing),t=u(K.a.shareSuccessDescriptionOnlySharing,{name:a(),group:Z(i.map((function(e){return e.groupName})),u),b:Y.a})),!l&&!p&&c.length>0&&(s=u(K.a.shareSuccessTitleOnlyChaningPermissions),t=u(K.a.shareSuccessDescriptionOnlyChaningPermissions,{group:Z(c.map((function(e){return e.groupName})),u),b:Y.a})),{title:s,description:t}};function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var re=function(e){var t,r,n,i,u,a,c,d,g=e.closeUrl,v=e.removeSearch,P=e.viewState,S=e.portfolioName,D=void 0===S?function(){return""}:S,E=Object(X.a)(),M=Object(m.useDispatch)(),N=Object(J.a)({removeSearch:v,keepHash:!0}).push,G=Object(H.a)(["portfolio"]),I=l()(G,2),C=I[0].portfolio,U=I[1],B=Object(p.useState)(!0),Y=l()(B,2),Z=Y[0],ee=Y[1],re=Object(m.useSelector)((function(e){var t=e.portfolioReducer;return{selectedPortfolio:t.selectedPortfolio,isLoading:t.isLoading}})),ne=re.selectedPortfolio,oe=re.isLoading,ie=Object(m.useSelector)((function(e){return{shareInfo:e.shareReducer.shareInfo}})).shareInfo;Object(p.useEffect)((function(){var e;ee(!0),M((e=C,{type:F.G,payload:A(e)})).then((function(){return ee(!1)})).catch((function(){return ee(!1)}))}),[]);var ue=function(){M(Object(k.m)()),N({pathname:g,search:U})};if(!1===(null==ne||null===(t=ne.metadata)||void 0===t||null===(r=t.user_capabilities)||void 0===r?void 0:r.share)&&!1===(null==ne||null===(n=ne.metadata)||void 0===n||null===(i=n.user_capabilities)||void 0===i?void 0:i.unshare))return f.a.createElement(q.a,null);var ae=Z||oe;return f.a.createElement(O.Modal,{title:E(K.a.portfolioShareTitle),isOpen:!0,variant:"small",onClose:ue},ae&&f.a.createElement(V.i,null),!ae&&f.a.createElement(_.Stack,{hasGutter:!0},f.a.createElement(w.StackItem,null,f.a.createElement(y.TextContent,null,f.a.createElement(j.Text,null,E(K.a.portfolioShareDescription,{name:D(C),strong:function(e){return f.a.createElement("strong",{key:"strong"},e)}})))),f.a.createElement(w.StackItem,null,f.a.createElement(h.c,{schema:x((function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(T.a)().get("".concat(R.h,"/groups/").concat(e.length>0?"?name=".concat(e):"")).then((function(e){return e.data.map((function(e){var t=e.uuid;return{label:e.name,value:t}}))}))}(e)}),R.k,!1!==(null==ne||null===(u=ne.metadata)||void 0===u||null===(a=u.user_capabilities)||void 0===a?void 0:a.share),!1!==(null==ne||null===(c=ne.metadata)||void 0===c||null===(d=c.user_capabilities)||void 0===d?void 0:d.unshare)),schemaType:"default",onSubmit:function(e,t){var r=e["shared-groups"],n=[],i=t.getState().initialValues["shared-groups"],u=i.filter((function(e){return!r.find((function(t){return t.group_uuid===e.group_uuid}))})).map((function(e){var t=e.permissions;return te(te({},s()(e,["permissions"])),{},{permissions:t.split(",")})}));r.forEach((function(e){var t=i.find((function(t){return t.group_uuid===e.group_uuid}));t&&!b()(t,e)&&(t.permissions.length>e.permissions.length?u.push({id:C,permissions:["update"],group_uuid:e.group_uuid}):n.push(e)),t||n.push(e)}));var a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t?z:L;return M(r({id:C,permissions:e.permissions,group_uuid:e.group_uuid}))},c=[].concat(o()(n.map((function(e){return a(e)}))),o()(u.map((function(e){return a(e,!0)}))));ue();var l=$({shareData:r,initialGroups:i,removedGroups:u,newGroups:n,formatMessage:E,portfolioName:D}),p=l.title,f=l.description;return Promise.all(c).then((function(){return M({type:Q.ADD_NOTIFICATION,payload:{dismissable:!0,variant:"success",title:p,description:f}}),M(Object(k.g)(P))}))},onCancel:ue,validate:function(e){var t={};return e.group_uuid&&!e.permissions&&(t.permissions=E(K.a.portfolioSharePermissions)),e.permissions&&!e.group_uuid&&(t.group_uuid=E(K.a.portfolioShareGroups)),t},initialValues:te(te({},ne),{},{"shared-groups":ie.map((function(e){var t=e.permissions.filter((function(e){return R.l.indexOf(e)>-1})),r=e.group_name,n=R.k.find((function(e){return e.value===t.sort().join(",")}));return{groupName:r,group_uuid:e.group_uuid,permissions:n?n.value:E(W.a.unknown)}}))}),formContainer:"modal",templateProps:{disableSubmit:["pristine","validating"],submitLabel:E(K.a.portfolioShareApply)}}))))};re.propTypes={closeUrl:g.a.string.isRequired,removeSearch:g.a.bool,portfolioName:g.a.func,viewState:g.a.shape({count:g.a.number,limit:g.a.number,offset:g.a.number,filter:g.a.string})};t.default=re}}]);
//# sourceMappingURL=../sourcemaps/share-portfolio~31ecd969.js.map