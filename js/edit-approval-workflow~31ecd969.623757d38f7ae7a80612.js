(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{581:function(e,t,o){var n=o(589),r=o(590),a=o(290),i=o(591);e.exports=function(e){return n(e)||r(e)||a(e)||i()}},582:function(e,t,o){"use strict";var n=o(85),r=function(){return(r=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};t.a=function(e){var t=void 0===e?{}:e,o=t.removeSearch,a=t.keepHash,i=Object(n.g)();return r(r({},i),{push:function(e){var t=e;return a&&i.location.hash.length>0&&(t="object"==typeof t?r(r({},t),{hash:i.location.hash}):""+t+i.location.hash),o?i.push(function(e){return"string"==typeof e?e.split("?")[0]:"object"==typeof e?r(r({},e),{search:void 0}):e}(t)):i.push(t)}})}},589:function(e,t,o){var n=o(291);e.exports=function(e){if(Array.isArray(e))return n(e)}},590:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},591:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},818:function(e,t,o){"use strict";o.r(t);var n=o(26),r=o.n(n),a=o(0),i=o.n(a),s=o(4),c=o.n(s),u=o(19),l=(o(581),o(103)),p=o(22),f=o(5),b=o(23),d=function(){for(var e=0,t=0,o=arguments.length;t<o;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<o;t++)for(var a=arguments[t],i=0,s=a.length;i<s;i++,r++)n[r]=a[i];return n},h=function(e,t){void 0===e&&(e=""),void 0===t&&(t=[]);var o=t.map((function(e){return"filter[id][]="+e})).join("&");return Object(p.a)().get(f.b+"/workflows?filter[name][contains]="+e+"&"+(o||"")).then((function(e){return e.data.map((function(e){var t=e.id;return{label:e.name,value:t}}))}))},v=function(e,t,o){var n=e?e.map((function(e){return Object(p.j)().unlinkWorkflow(e,o)})):[],r=t?t.map((function(e){return Object(p.j)().linkWorkflow(e,o)})):[];return Promise.all(d(n,r))},m=function(e,t,o){void 0===t&&(t={limit:b.a.limit,offset:b.a.offset}),void 0===o&&(o="");var n="app_name="+e.appName+"&object_type="+e.objectType+"&object_id="+e.objectId,r="&limit="+t.limit+"&offset="+t.offset,a="&filter[name][contains]="+o;return Object(p.a)().get(f.b+"/workflows?"+n+a+r)},j=o(107),g=function(e){return e().i18nReducer.formatMessage},y=o(21),w=Object(y.b)({unlinkNotification:{id:"approval.notifications.unlink",defaultMessage:"{count, number} {count, plural, one {approval process was} other {approval processes were}} unlinked successfully."},linkNotification:{id:"approval.notifications.link",defaultMessage:"{count, number} {count, plural, one {approval process was} other {approval processes were}} linked successfully."},setWorkflow:{id:"approval.workflows.set",defaultMessage:"Select approval processes for <strong>{objectName}</strong>"},currentWorkflows:{id:"approval.workflows.current",defaultMessage:"Current approval processes"}}),k=o(86),O=o(582),S=o(18),T=o(196),N=o(195),W=function(e){var t=e.objectType,o=e.removeSearch,n=e.keepHash,s=e.querySelector,c=e.pushParam,p=e.objectName,b=void 0===p?function(){return t}:p,d=e.onClose,W=Object(S.a)(),M=Object(a.useRef)(W(Object(y.a)({id:"workflows.modal.title",defaultMessage:"Set approval process"}))).current,R=Object(u.useDispatch)(),_=Object(O.a)({removeSearch:o,keepHash:n}),q=Object(k.a)([s]),P=r()(q,1)[0],x=function(){d&&d(),_.push(c)};return i.a.createElement(T.a,{title:M,onClose:x,onSubmit:function(e,o){var n,r,a;x(),R((n=e,r=o,a={object_type:t,app_name:f.c[t],object_id:P[s]},function(e,t){var o=g(t);return e({type:l.a.UPDATE_WORKFLOWS,payload:v(r,n,a).then((function(){return e(Object(j.addNotification)({variant:"success",title:"Success updating approval process",dismissable:!0,description:"".concat(r.length>0?o(w.unlinkNotification,{count:r.length}):"","\n          ").concat(n.length>0?o(w.linkNotification,{count:n.length}):"")}))}))})}))},getInitialTags:function(){return m({objectType:t,appName:f.c[t],objectId:P[s]}).then((function(e){return e.data}))},loadTags:h,subTitle:W(w.setWorkflow,{strong:N.a,objectName:b(P[s])}),existingTagsMessage:W(w.currentWorkflows)})};W.propTypes={pushParam:c.a.oneOfType([c.a.string,c.a.shape({pathname:c.a.string.isRequired,search:c.a.string})]).isRequired,objectType:c.a.string.isRequired,objectName:c.a.func,removeSearch:c.a.bool,querySelector:c.a.oneOf(["portfolio","platform","inventory","portfolio-item"]).isRequired,keepHash:c.a.bool,onClose:c.a.func},W.defaultProps={keepHash:!1};t.default=W}}]);
//# sourceMappingURL=../sourcemaps/edit-approval-workflow~31ecd969.js.map