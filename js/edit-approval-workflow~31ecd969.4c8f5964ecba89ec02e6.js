(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{425:function(e,t){function o(){return e.exports=o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},o.apply(this,arguments)}e.exports=o},427:function(e,t,o){"use strict";var r=o(448),a=o.n(r);function i(e){var t=null,o=null,r=new Promise((function(e,r){t=e,o=r}));return e&&e.then((function(e){t&&t(e)}),(function(e){o&&o(e)})),{promise:r,resolve:function(e){t&&t(e)},reject:function(e){o&&o(e)},cancel:function(){t=null,o=null}}}
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
var n=function(){return(n=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var a in t=arguments[o])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s={key:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return null},onlyResolvesLast:!0},l=function(){function e(e){this.config=e,this.debounceSingleton=null,this.debounceCache={}}return e.prototype._createDebouncedFunction=function(){var e,t,o=a()(this.config.func,this.config.wait,this.config.options);return this.config.options.onlyResolvesLast&&(e=o,t=null,o=function(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];t&&t();var a=e.apply(void 0,o),n=i(a),s=n.promise,l=n.cancel;return t=l,s}),{func:o}},e.prototype.getDebouncedFunction=function(e){var t,o=(t=this.config.options).key.apply(t,e);return null==o?(this.debounceSingleton||(this.debounceSingleton=this._createDebouncedFunction()),this.debounceSingleton):(this.debounceCache[o]||(this.debounceCache[o]=this._createDebouncedFunction()),this.debounceCache[o])},e}();t.a=function(e,t,o){var r=n({},s,o),a=new l({func:e,wait:t,options:r});return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var o=a.getDebouncedFunction(e).func;return o.apply(void 0,e)}}},428:function(e,t,o){"use strict";var r=o(427);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(r.a)(e,t,o)}},431:function(e,t,o){"use strict";var r=(0,o(52).defineMessages)({removeItemsNotification:{id:"portfolio.notifications.remove.portfolio-items",defaultMessage:"You have removed {count, number} {count, plural, one {product} other {products} } from the {portfolioName} portfolio. <a>Undo</a> if this was a mistake."},removePortfolioNotification:{id:"portfolio.notifications.remove.portfolio",defaultMessage:"The portfolio was removed successfully. You can <a>Undo</a> this action if this was a mistake."},modalCreateTitle:{id:"portfolio.modal.add.title",defaultMessage:"Create portfolio"},modalCreateSubmit:{id:"portfolio.modal.add.create",defaultMessage:"Create"},modalEditTitle:{id:"portfolio.modal.edit.title",defaultMessage:"Edit portfolio"},addProducts:{id:"portfolio.empty.add.products",defaultMessage:"Add products"},emptyNoProducts:{id:"portfolio.empty.no-products",defaultMessage:"No products in your portfolio"},portfoliosPlaceholder:{id:"portfolios.filters.placeholder",defaultMessage:"Filter by portfolio"},portfoliosNoData:{id:"portfolios.empty.noData.title",defaultMessage:"No portfolios"},portfoliosNoDataDescription:{id:"portfolios.empty.noData.description",defaultMessage:"No portfolios match your filter criteria."},portfolioRemoveDescription:{id:"portfolio.remove.modal.description",defaultMessage:"This action will permanently delete portfolio {name} and its data."},portfolioRemoveTitle:{id:"portfolio.remove.modal.title",defaultMessage:"Delete Portfolio?"},portfolioRemoveConfirm:{id:"portfolio.remove.modal.confirm",defaultMessage:"Confirm"},portfolioRemoveCancel:{id:"portfolio.remove.modal.cancel",defaultMessage:"Cancel"},portfolioShareUnknown:{id:"portfolio.share.modal.option.unknown",defaultMessage:"Unknown"},portfolioSharePermissions:{id:"portfolio.share.modal.permissions",defaultMessage:"Select the share permissions"},portfolioShareGroups:{id:"portfolio.share.modal.groups",defaultMessage:"Select a group"},portfolioShareTitle:{id:"portfolio.share.modal.title",defaultMessage:"Share portfolio"},portfolioShareApply:{id:"portfolio.share.modal.apply",defaultMessage:"Apply"},portfolioShareDescription:{id:"portfolio.share.modal.description",defaultMessage:"Share <strong>{name}</strong> portfolio"},addProducstPlatformTitle:{id:"portfolio.add.platform.title.empty",defaultMessage:"Please choose platform"},addProducstPlatformDescription:{id:"portfolio.add.platform.description.empty",defaultMessage:"In order to select products for your portfolio you must choose platform first"},addProducstFilterTitle:{id:"portfolio.add.platform.filter.empty",defaultMessage:"No products match filter parameters"},copyItemTitle:{id:"portfolio.item.copy",defaultMessage:"Copy product"},portfolioItemSurvey:{id:"portfolio.item.detail.actions.survey",defaultMessage:"Edit survey"},portfolioItemOrder:{id:"portfolio.item.detail.actions.order",defaultMessage:"Order"},portfolioItemIconTitle:{id:"portfolio.item.icon.upload.notification",defaultMessage:"Icon upload error"},portfolioItemOverview:{id:"portfolio.item.detail.overview",defaultMessage:"Overview"},portfolioItemSupport:{id:"portfolio.item.detail.support",defaultMessage:"Learn more"},portfolioItemDocumentation:{id:"portfolio.item.detail.documentation",defaultMessage:"Documentation"},portfolioItemDocLink:{id:"portfolio.item.detail.doclink",defaultMessage:"Doc link"},restoreSurvey:{id:"portfolio.item.survey.restore",defaultMessage:"Restore to Ansible Tower version"},surveyTitle:{id:"portfolio.item.survey.edit",defaultMessage:"Editing survey: {name}"},sourceUnavaiable:{id:"portfolio.detail.alert.source.unavailable",defaultMessage:"The platform for this product is unavailable"},objectUnavaiable:{id:"portfolio.detail.alert.unavailable",defaultMessage:"The {object} for this product is no longer available"},backToProducts:{id:"portfolio.detail.back-to-products",defaultMessage:"Back to products"},editProduct:{id:"portfolio.item.edit.title",defaultMessage:"Edit product"},shareTooltip:{id:"portfolio.share.add.tooltip",defaultMessage:"Share portfolio with selected group and permissions."},shareErrorMissingGroup:{id:"portfolio.share.add.missing-group",defaultMessage:"Select group to share portfolio."},shareErrorMissingPermission:{id:"portfolio.share.add.missing-permission",defaultMessage:"Assign permissions to selected group."},shareErrorMissingData:{id:"portfolio.share.add.missing-data",defaultMessage:"Choose group and permissions."},shareDuplicate:{id:"portfolio.share.add.duplicate",defaultMessage:"Portfolio is already shared with this group."},noShares:{id:"portfolio.share.add.no-shares",defaultMessage:"To share portfolio select a group and permissions"},shareGroupsAccess:{id:"share.groups.access",defaultMessage:"Groups with access"},shareSuccessTitle:{id:"share.notification.success.title",defaultMessage:"Portfolio sharing settings were updated"}});t.a=r},437:function(e,t,o){"use strict";t.__esModule=!0,o(464),t.default={modifiers:{fill:"pf-m-fill",gutter:"pf-m-gutter"},stack:"pf-l-stack",stackItem:"pf-l-stack__item"}},439:function(e,t){function o(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=o=function(e){return typeof e}:e.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(t)}e.exports=o},441:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o(2),a=r.__importStar(o(0)),i=r.__importDefault(o(437)),n=o(4);t.Stack=e=>{var{hasGutter:t=!1,className:o="",children:s=null,component:l="div"}=e,c=r.__rest(e,["hasGutter","className","children","component"]);const u=l;return a.createElement(u,Object.assign({},c,{className:n.css(i.default.stack,t&&i.default.modifiers.gutter,o)}),s)},t.Stack.displayName="Stack"},447:function(e,t,o){"use strict";var r=o(1),a=o.n(r),i=o(439),n=o.n(i),s=o(53);function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var u=function(e){return"string"==typeof e?e.split("?")[0]:"object"===n()(e)?c(c({},e),{},{search:void 0}):e};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.removeSearch,o=e.keepHash,r=Object(s.g)();return c(c({},r),{},{push:function(e){var a=e;return o&&r.location.hash.length>0&&(a="object"===n()(a)?c(c({},a),{},{hash:r.location.hash}):"".concat(a).concat(r.location.hash)),t?r.push(u(a)):r.push(a)}})}},448:function(e,t,o){"use strict";function r(e){return"function"==typeof e?e():e}function a(){var e={};return e.promise=new Promise((function(t,o){e.resolve=t,e.reject=o})),e}e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=void 0,n=void 0,s=void 0,l=[];return function(){var u=r(t),f=(new Date).getTime(),p=!i||f-i>u;i=f;for(var d=arguments.length,m=Array(d),h=0;h<d;h++)m[h]=arguments[h];if(p&&o.leading)return o.accumulate?Promise.resolve(e.call(this,[m])).then((function(e){return e[0]})):Promise.resolve(e.call.apply(e,[this].concat(m)));if(n?clearTimeout(s):n=a(),l.push(m),s=setTimeout(c.bind(this),u),o.accumulate){var g=l.length-1;return n.promise.then((function(e){return e[g]}))}return n.promise};function c(){var t=n;clearTimeout(s),Promise.resolve(o.accumulate?e.call(this,l):e.apply(this,l[l.length-1])).then(t.resolve,t.reject),l=[],n=null}}},452:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o(2),a=r.__importStar(o(0)),i=r.__importDefault(o(207)),n=o(4),s=o(45);var l;!function(e){e.text="text",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url"}(l=t.TextInputTypes||(t.TextInputTypes={}));class c extends a.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange&&this.props.onChange(e.currentTarget.value,e)},e.id||e["aria-label"]||e["aria-labelledby"]||console.error("Text input:","Text input requires either an id or aria-label to be specified")}render(){const e=this.props,{innerRef:t,className:o,type:l,value:c,onChange:u,validated:f,isReadOnly:p,isRequired:d,isDisabled:m}=e,h=r.__rest(e,["innerRef","className","type","value","onChange","validated","isReadOnly","isRequired","isDisabled"]);return a.createElement("input",Object.assign({},h,{className:n.css(i.default.formControl,f===s.ValidatedOptions.success&&i.default.modifiers.success,f===s.ValidatedOptions.warning&&i.default.modifiers.warning,o),onChange:this.handleChange,type:l,value:c,"aria-invalid":f===s.ValidatedOptions.error,required:d,disabled:m,readOnly:p,ref:t}))}}t.TextInputBase=c,c.displayName="TextInputBase",c.defaultProps={"aria-label":null,className:"",isRequired:!1,validated:"default",isDisabled:!1,isReadOnly:!1,type:l.text,onChange:()=>{}},t.TextInput=a.forwardRef((e,t)=>a.createElement(c,Object.assign({},e,{innerRef:t})))},458:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o(2),a=r.__importStar(o(0)),i=r.__importDefault(o(437)),n=o(4);t.StackItem=e=>{var{isFilled:t=!1,className:o="",children:s=null}=e,l=r.__rest(e,["isFilled","className","children"]);return a.createElement("div",Object.assign({},l,{className:n.css(i.default.stackItem,t&&i.default.modifiers.fill,o)}),s)},t.StackItem.displayName="StackItem"},464:function(e,t,o){var r=o(6),a=o(465);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},465:function(e,t,o){(t=o(7)(!1)).push([e.i,".pf-l-stack {\n  --pf-l-stack--m-gutter--MarginBottom: var(--pf-global--gutter);\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\n.pf-l-stack__item.pf-m-fill {\n  flex-grow: 1; }\n\n.pf-l-stack.pf-m-gutter > *:not(:last-child) {\n  margin-bottom: var(--pf-l-stack--m-gutter--MarginBottom); }\n",""]),e.exports=t},673:function(e,t,o){"use strict";o.r(t);var r=o(33),a=o.n(r),i=o(1),n=o.n(i),s=o(0),l=o.n(s),c=o(11),u=o.n(c),f=o(26),p=o(474),d=o(65),m=o(43),h=o(441),g=o(458),v=o(475),b=o(451),y=o.n(b),O=o(428),j=function(e){return{fields:[{component:y.a.SELECT,name:"selectedWorkflows",label:"",loadOptions:Object(O.a)(e),multi:!0,isSearchable:!0,isClearable:!0}]}},w=o(17),k=o.n(w),M=o(63),S=o(84),P=o(13),_=o(66),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=t.map((function(e){return"filter[id][]=".concat(e)})).join("&");return Object(S.a)().get("".concat(P.a,"/workflows?filter[name][contains]=").concat(e,"&").concat(o||"")).then((function(e){return e.data.map((function(e){var t=e.id;return{label:e.name,value:t}}))}))},D=function(e,t,o){var r=e?e.map((function(e){return Object(S.i)().unlinkWorkflow(e,o)})):[],a=t?t.map((function(e){return Object(S.i)().linkWorkflow(e,o)})):[];return Promise.all([].concat(k()(r),k()(a)))},N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:_.a.limit,offset:_.a.offset},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r="app_name=".concat(e.appName,"&object_type=").concat(e.objectType,"&object_id=").concat(e.objectId),a="&limit=".concat(t.limit,"&offset=").concat(t.offset),i="&filter[name][contains]=".concat(o);return Object(S.a)().get("".concat(P.a,"/workflows?").concat(r).concat(i).concat(a))},E=o(118),C=function(e){return e().i18nReducer.formatMessage},R=(0,o(52).defineMessages)({unlinkNotification:{id:"approval.notifications.unlink",defaultMessage:"{count, number} {count, plural, one {approval process was} other {approval processes were}} unlinked successfully."},linkNotification:{id:"approval.notifications.link",defaultMessage:"{count, number} {count, plural, one {approval process was} other {approval processes were}} linked successfully."},setWorkflow:{id:"approval.workflows.set",defaultMessage:"Select approval processes for <strong>{objectName}</strong>"}}),I=o(69),x=o(68),F=o(447),W=o(82),q=o(52),L=o(122);function A(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function G(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?A(Object(o),!0).forEach((function(t){n()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):A(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var U={isFetching:!0},V=function(e,t){switch(t.type){case"setFetching":return G(G({},e),{},{isFetching:t.payload});default:return e}},B=function(e){var t=e.objectType,o=e.removeQuery,r=e.keepHash,i=e.querySelector,n=e.pushParam,c=e.objectName,u=void 0===c?function(){return t}:c,b=Object(W.a)().formatMessage,y=Object(s.useRef)(b(Object(q.defineMessage)({id:"workflows.modal.title",defaultMessage:"Set approval process"}))).current,O=Object(s.useReducer)(V,U),w=a()(O,2),k=w[0].isFetching,S=w[1],A=Object(f.useSelector)((function(e){return e.approvalReducer.resolvedWorkflows})),G=A.data,B=A.meta,H=Object(f.useDispatch)(),Q=Object(F.a)({removeQuery:o,keepHash:r}),J=Object(x.a)([i]),K=a()(J,1)[0];Object(s.useEffect)((function(){H(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:_.a.limit,offset:_.a.offset},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return{type:M.a.RESOLVE_WORKFLOWS,payload:N(e,t,o)}}({objectType:t,appName:P.b[t],objectId:K[i]},B)).then((function(){return S({type:"setFetching",payload:!1})}))}),[]);return l.a.createElement(p.Modal,{title:y,isOpen:!0,onClose:function(){return Q.push(n)},variant:"small"},k&&l.a.createElement(I.j,null),!k&&l.a.createElement(h.Stack,{hasGutter:!0},l.a.createElement(g.StackItem,null,l.a.createElement(d.TextContent,null,l.a.createElement(m.Text,null,b(R.setWorkflow,{strong:function(e){return l.a.createElement("strong",null,e)},objectName:u(K[i])})))),l.a.createElement(g.StackItem,null,l.a.createElement(v.c,{initialValues:{selectedWorkflows:G?G.map((function(e){return e.id})):void 0},onSubmit:function(e,o){var r=o.getState().initialValues.selectedWorkflows||[],a=e.selectedWorkflows||[];Q.push(n);var s,l,c,u=r.filter((function(e){return a.findIndex((function(t){return t===e}))<0})),f=a.filter((function(e){return r.findIndex((function(t){return t===e}))<0}));(u.length>0||f.length>0)&&H((s=u,l=f,c={object_type:t,app_name:P.b[t],object_id:K[i]},function(e,t){var o=C(t);return e({type:M.a.UPDATE_WORKFLOWS,payload:D(s,l,c).then((function(){return e(Object(E.addNotification)({variant:"success",title:"Success updating approval process",dismissable:!0,description:"".concat(s.length>0?o(R.unlinkNotification,{count:s.length}):"","\n          ").concat(l.length>0?o(R.linkNotification,{count:l.length}):"")}))}))})}))},onCancel:function(){return Q.push(n)},schema:j(T),formContainer:"modal",templateProps:{submitLabel:b(L.a.save)}}))))};B.propTypes={pushParam:u.a.oneOfType([u.a.string,u.a.shape({pathname:u.a.string.isRequired,search:u.a.string})]).isRequired,objectType:u.a.string.isRequired,objectName:u.a.func,removeQuery:u.a.bool,querySelector:u.a.oneOf(["portfolio","platform","inventory","portfolio-item"]).isRequired,keepHash:u.a.bool},B.defaultProps={keepHash:!1};t.default=B}}]);
//# sourceMappingURL=../sourcemaps/edit-approval-workflow~31ecd969.js.map