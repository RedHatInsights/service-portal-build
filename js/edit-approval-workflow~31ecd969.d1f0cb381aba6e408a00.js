(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{431:function(e,t,n){"use strict";var o=n(432);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(o.a)(e,t,n)}},432:function(e,t,n){"use strict";var o=n(452),r=n.n(o);function a(e){var t=null,n=null,o=new Promise((function(e,o){t=e,n=o}));return e&&e.then((function(e){t&&t(e)}),(function(e){n&&n(e)})),{promise:o,resolve:function(e){t&&t(e)},reject:function(e){n&&n(e)},cancel:function(){t=null,n=null}}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var i=function(){return(i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},c={key:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return null},onlyResolvesLast:!0},s=function(){function e(e){this.config=e,this.debounceSingleton=null,this.debounceCache={}}return e.prototype._createDebouncedFunction=function(){var e,t,n=r()(this.config.func,this.config.wait,this.config.options);return this.config.options.onlyResolvesLast&&(e=n,t=null,n=function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];t&&t();var r=e.apply(void 0,n),i=a(r),c=i.promise,s=i.cancel;return t=s,c}),{func:n}},e.prototype.getDebouncedFunction=function(e){var t,n=(t=this.config.options).key.apply(t,e);return null==n?(this.debounceSingleton||(this.debounceSingleton=this._createDebouncedFunction()),this.debounceSingleton):(this.debounceCache[n]||(this.debounceCache[n]=this._createDebouncedFunction()),this.debounceCache[n])},e}();t.a=function(e,t,n){var o=i({},c,n),r=new s({func:e,wait:t,options:o});return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=r.getDebouncedFunction(e).func;return n.apply(void 0,e)}}},443:function(e,t,n){"use strict";t.__esModule=!0,n(479),t.default={modifiers:{fill:"pf-m-fill",gutter:"pf-m-gutter"},stack:"pf-l-stack",stackItem:"pf-l-stack__item"}},444:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(3),r=o.__importStar(n(0)),a=o.__importDefault(n(213)),i=n(4),c=n(54);var s;!function(e){e.text="text",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url"}(s=t.TextInputTypes||(t.TextInputTypes={}));class l extends r.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange&&this.props.onChange(e.currentTarget.value,e)},e.id||e["aria-label"]||e["aria-labelledby"]||console.error("Text input:","Text input requires either an id or aria-label to be specified")}render(){const e=this.props,{innerRef:t,className:n,type:s,value:l,onChange:u,validated:f,isReadOnly:p,isRequired:d,isDisabled:m}=e,h=o.__rest(e,["innerRef","className","type","value","onChange","validated","isReadOnly","isRequired","isDisabled"]);return r.createElement("input",Object.assign({},h,{className:i.css(a.default.formControl,f===c.ValidatedOptions.success&&a.default.modifiers.success,f===c.ValidatedOptions.warning&&a.default.modifiers.warning,n),onChange:this.handleChange,type:s,value:l,"aria-invalid":f===c.ValidatedOptions.error,required:d,disabled:m,readOnly:p,ref:t}))}}t.TextInputBase=l,l.displayName="TextInputBase",l.defaultProps={"aria-label":null,className:"",isRequired:!1,validated:"default",isDisabled:!1,isReadOnly:!1,type:s.text,onChange:()=>{}},t.TextInput=r.forwardRef((e,t)=>r.createElement(l,Object.assign({},e,{innerRef:t})))},445:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},447:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(3),r=o.__importStar(n(0)),a=o.__importDefault(n(443)),i=n(4);t.Stack=e=>{var{hasGutter:t=!1,className:n="",children:c=null,component:s="div"}=e,l=o.__rest(e,["hasGutter","className","children","component"]);const u=s;return r.createElement(u,Object.assign({},l,{className:i.css(a.default.stack,t&&a.default.modifiers.gutter,n)}),c)},t.Stack.displayName="Stack"},451:function(e,t,n){"use strict";var o=n(1),r=n.n(o),a=n(445),i=n.n(a),c=n(59);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=function(e){return"string"==typeof e?e.split("?")[0]:"object"===i()(e)?l(l({},e),{},{search:void 0}):e};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.removeSearch,n=e.keepHash,o=Object(c.g)();return l(l({},o),{},{push:function(e){var r=e;return n&&o.location.hash.length>0&&(r="object"===i()(r)?l(l({},r),{},{hash:o.location.hash}):"".concat(r).concat(o.location.hash)),t?o.push(u(r)):o.push(r)}})}},452:function(e,t,n){"use strict";function o(e){return"function"==typeof e?e():e}function r(){var e={};return e.promise=new Promise((function(t,n){e.resolve=t,e.reject=n})),e}e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=void 0,i=void 0,c=void 0,s=[];return function(){var u=o(t),f=(new Date).getTime(),p=!a||f-a>u;a=f;for(var d=arguments.length,m=Array(d),h=0;h<d;h++)m[h]=arguments[h];if(p&&n.leading)return n.accumulate?Promise.resolve(e.call(this,[m])).then((function(e){return e[0]})):Promise.resolve(e.call.apply(e,[this].concat(m)));if(i?clearTimeout(c):i=r(),s.push(m),c=setTimeout(l.bind(this),u),n.accumulate){var b=s.length-1;return i.promise.then((function(e){return e[b]}))}return i.promise};function l(){var t=i;clearTimeout(c),Promise.resolve(n.accumulate?e.call(this,s):e.apply(this,s[s.length-1])).then(t.resolve,t.reject),s=[],i=null}}},459:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(3),r=o.__importStar(n(0)),a=o.__importDefault(n(443)),i=n(4);t.StackItem=e=>{var{isFilled:t=!1,className:n="",children:c=null}=e,s=o.__rest(e,["isFilled","className","children"]);return r.createElement("div",Object.assign({},s,{className:i.css(a.default.stackItem,t&&a.default.modifiers.fill,n)}),c)},t.StackItem.displayName="StackItem"},479:function(e,t,n){var o=n(6),r=n(480);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};o(r,a);e.exports=r.locals||{}},480:function(e,t,n){(t=n(7)(!1)).push([e.i,".pf-l-stack {\n  --pf-l-stack--m-gutter--MarginBottom: var(--pf-global--gutter);\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\n.pf-l-stack__item.pf-m-fill {\n  flex-grow: 1; }\n\n.pf-l-stack.pf-m-gutter > *:not(:last-child) {\n  margin-bottom: var(--pf-l-stack--m-gutter--MarginBottom); }\n",""]),e.exports=t},683:function(e,t,n){"use strict";n.r(t);var o=n(29),r=n.n(o),a=n(1),i=n.n(a),c=n(0),s=n.n(c),l=n(12),u=n.n(l),f=n(16),p=n(488),d=n(71),m=n(50),h=n(447),b=n(459),v=n(489),g=n(461),y=n.n(g),O=n(431),j=function(e){return{fields:[{component:y.a.SELECT,name:"selectedWorkflows",label:"",loadOptions:Object(O.a)(e),multi:!0,isSearchable:!0,isClearable:!0}]}},k=n(17),w=n.n(k),S=n(69),_=n(52),P=n(8),R=n(22),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=t.map((function(e){return"filter[id][]=".concat(e)})).join("&");return Object(_.a)().get("".concat(P.a,"/workflows?filter[name][contains]=").concat(e,"&").concat(n||"")).then((function(e){return e.data.map((function(e){var t=e.id;return{label:e.name,value:t}}))}))},N=function(e,t,n){var o=e?e.map((function(e){return Object(_.i)().unlinkWorkflow(e,n)})):[],r=t?t.map((function(e){return Object(_.i)().linkWorkflow(e,n)})):[];return Promise.all([].concat(w()(o),w()(r)))},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:R.a.limit,offset:R.a.offset},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o="app_name=".concat(e.appName,"&object_type=").concat(e.objectType,"&object_id=").concat(e.objectId),r="&limit=".concat(t.limit,"&offset=").concat(t.offset),a="&filter[name][contains]=".concat(n);return Object(_.a)().get("".concat(P.a,"/workflows?").concat(o).concat(a).concat(r))},E=n(126),C=function(e){return e().i18nReducer.formatMessage},D=(0,n(49).defineMessages)({unlinkNotification:{id:"approval.notifications.unlink",defaultMessage:"{count, number} {count, plural, one {approval process was} other {approval processes were}} unlinked successfully."},linkNotification:{id:"approval.notifications.link",defaultMessage:"{count, number} {count, plural, one {approval process was} other {approval processes were}} linked successfully."},setWorkflow:{id:"approval.workflows.set",defaultMessage:"Select approval processes for <strong>{objectName}</strong>"}}),I=n(74),M=n(73),F=n(451),W=n(86),q=n(49),L=n(127);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B={isFetching:!0},G=function(e,t){switch(t.type){case"setFetching":return H(H({},e),{},{isFetching:t.payload});default:return e}},A=function(e){var t=e.objectType,n=e.removeSearch,o=e.keepHash,a=e.querySelector,i=e.pushParam,l=e.objectName,u=void 0===l?function(){return t}:l,g=e.onClose,y=Object(W.a)().formatMessage,O=Object(c.useRef)(y(Object(q.defineMessage)({id:"workflows.modal.title",defaultMessage:"Set approval process"}))).current,k=Object(c.useReducer)(G,B),w=r()(k,2),_=w[0].isFetching,V=w[1],H=Object(f.useSelector)((function(e){return e.approvalReducer.resolvedWorkflows})),A=H.data,J=H.meta,K=Object(f.useSelector)((function(e){return e.portfolioReducer.isLoading})),U=Object(f.useDispatch)(),z=Object(F.a)({removeSearch:n,keepHash:o}),Q=Object(M.a)([a]),X=r()(Q,1)[0];Object(c.useEffect)((function(){U(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:R.a.limit,offset:R.a.offset},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return{type:S.a.RESOLVE_WORKFLOWS,payload:T(e,t,n)}}({objectType:t,appName:P.b[t],objectId:X[a]},J)).then((function(){return V({type:"setFetching",payload:!1})}))}),[]);var Y=function(){g&&g(),z.push(i)},Z=K||_;return s.a.createElement(p.Modal,{title:O,isOpen:!0,onClose:Y,variant:"small"},Z&&s.a.createElement(I.j,null),!Z&&s.a.createElement(h.Stack,{hasGutter:!0},s.a.createElement(b.StackItem,null,s.a.createElement(d.TextContent,null,s.a.createElement(m.Text,null,y(D.setWorkflow,{strong:function(e){return s.a.createElement("strong",null,e)},objectName:u(X[a])})))),s.a.createElement(b.StackItem,null,s.a.createElement(v.c,{initialValues:{selectedWorkflows:A?A.map((function(e){return e.id})):void 0},onSubmit:function(e,n){var o=n.getState().initialValues.selectedWorkflows||[],r=e.selectedWorkflows||[];Y();var i,c,s,l=o.filter((function(e){return r.findIndex((function(t){return t===e}))<0})),u=r.filter((function(e){return o.findIndex((function(t){return t===e}))<0}));(l.length>0||u.length>0)&&U((i=l,c=u,s={object_type:t,app_name:P.b[t],object_id:X[a]},function(e,t){var n=C(t);return e({type:S.a.UPDATE_WORKFLOWS,payload:N(i,c,s).then((function(){return e(Object(E.addNotification)({variant:"success",title:"Success updating approval process",dismissable:!0,description:"".concat(i.length>0?n(D.unlinkNotification,{count:i.length}):"","\n          ").concat(c.length>0?n(D.linkNotification,{count:c.length}):"")}))}))})}))},onCancel:Y,schema:j(x),formContainer:"modal",templateProps:{submitLabel:y(L.a.save)}}))))};A.propTypes={pushParam:u.a.oneOfType([u.a.string,u.a.shape({pathname:u.a.string.isRequired,search:u.a.string})]).isRequired,objectType:u.a.string.isRequired,objectName:u.a.func,removeSearch:u.a.bool,querySelector:u.a.oneOf(["portfolio","platform","inventory","portfolio-item"]).isRequired,keepHash:u.a.bool,onClose:u.a.func},A.defaultProps={keepHash:!1};t.default=A}}]);
//# sourceMappingURL=../sourcemaps/edit-approval-workflow~31ecd969.js.map