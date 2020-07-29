(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{431:function(e,t,n){"use strict";var o=n(432);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(o.a)(e,t,n)}},432:function(e,t,n){"use strict";var o=n(452),i=n.n(o);function r(e){var t=null,n=null,o=new Promise((function(e,o){t=e,n=o}));return e&&e.then((function(e){t&&t(e)}),(function(e){n&&n(e)})),{promise:o,resolve:function(e){t&&t(e)},reject:function(e){n&&n(e)},cancel:function(){t=null,n=null}}}
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
var a=function(){return(a=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},u={key:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return null},onlyResolvesLast:!0},s=function(){function e(e){this.config=e,this.debounceSingleton=null,this.debounceCache={}}return e.prototype._createDebouncedFunction=function(){var e,t,n=i()(this.config.func,this.config.wait,this.config.options);return this.config.options.onlyResolvesLast&&(e=n,t=null,n=function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];t&&t();var i=e.apply(void 0,n),a=r(i),u=a.promise,s=a.cancel;return t=s,u}),{func:n}},e.prototype.getDebouncedFunction=function(e){var t,n=(t=this.config.options).key.apply(t,e);return null==n?(this.debounceSingleton||(this.debounceSingleton=this._createDebouncedFunction()),this.debounceSingleton):(this.debounceCache[n]||(this.debounceCache[n]=this._createDebouncedFunction()),this.debounceCache[n])},e}();t.a=function(e,t,n){var o=a({},u,n),i=new s({func:e,wait:t,options:o});return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=i.getDebouncedFunction(e).func;return n.apply(void 0,e)}}},444:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(3),i=o.__importStar(n(0)),r=o.__importDefault(n(213)),a=n(4),u=n(54);var s;!function(e){e.text="text",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url"}(s=t.TextInputTypes||(t.TextInputTypes={}));class l extends i.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange&&this.props.onChange(e.currentTarget.value,e)},e.id||e["aria-label"]||e["aria-labelledby"]||console.error("Text input:","Text input requires either an id or aria-label to be specified")}render(){const e=this.props,{innerRef:t,className:n,type:s,value:l,onChange:c,validated:f,isReadOnly:p,isRequired:d,isDisabled:m}=e,h=o.__rest(e,["innerRef","className","type","value","onChange","validated","isReadOnly","isRequired","isDisabled"]);return i.createElement("input",Object.assign({},h,{className:a.css(r.default.formControl,f===u.ValidatedOptions.success&&r.default.modifiers.success,f===u.ValidatedOptions.warning&&r.default.modifiers.warning,n),onChange:this.handleChange,type:s,value:l,"aria-invalid":f===u.ValidatedOptions.error,required:d,disabled:m,readOnly:p,ref:t}))}}t.TextInputBase=l,l.displayName="TextInputBase",l.defaultProps={"aria-label":null,className:"",isRequired:!1,validated:"default",isDisabled:!1,isReadOnly:!1,type:s.text,onChange:()=>{}},t.TextInput=i.forwardRef((e,t)=>i.createElement(l,Object.assign({},e,{innerRef:t})))},445:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},452:function(e,t,n){"use strict";function o(e){return"function"==typeof e?e():e}function i(){var e={};return e.promise=new Promise((function(t,n){e.resolve=t,e.reject=n})),e}e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=void 0,a=void 0,u=void 0,s=[];return function(){var c=o(t),f=(new Date).getTime(),p=!r||f-r>c;r=f;for(var d=arguments.length,m=Array(d),h=0;h<d;h++)m[h]=arguments[h];if(p&&n.leading)return n.accumulate?Promise.resolve(e.call(this,[m])).then((function(e){return e[0]})):Promise.resolve(e.call.apply(e,[this].concat(m)));if(a?clearTimeout(u):a=i(),s.push(m),u=setTimeout(l.bind(this),c),n.accumulate){var b=s.length-1;return a.promise.then((function(e){return e[b]}))}return a.promise};function l(){var t=a;clearTimeout(u),Promise.resolve(n.accumulate?e.call(this,s):e.apply(this,s[s.length-1])).then(t.resolve,t.reject),s=[],a=null}}},848:function(e,t,n){"use strict";n.r(t);var o=n(14),i=n.n(o),r=n(26),a=n.n(r),u=n(0),s=n.n(u),l=n(12),c=n.n(l),f=n(16),p=n(59),d=n(488),m=n(489),h=n(52),b=n(93),v=n(431),g=n(18),y=n(11),O=n(86),_=n(127),w=n(438),x=n(92),j=function(e){return Object(g.k)(e,{limit:100,offset:0}).then((function(e){return e.data.filter((function(e){return e.metadata.user_capabilities.update})).map((function(e){var t=e.name;return{value:e.id,label:t}}))}))},R=function(e,t,n){return{fields:[{component:"copy-name-display",name:"portfolio_item_name",label:t(w.a.name),getName:e,fieldSpy:"portfolio_id"},{component:"initial-select",name:"portfolio_id",label:t(w.a.portfolio),isRequired:!0,loadOptions:Object(v.a)(j),isSearchable:!0,options:n,menuIsPortal:!0}]}},C=function(e){var t=e.portfolioId,n=e.portfolioItemId,o=e.closeUrl,r=e.search,u=e.portfolioName,l=Object(O.a)().formatMessage,c=Object(f.useDispatch)(),v=Object(p.g)().push,g=function(){var e=a()(i.a.mark((function e(o){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(Object(b.i)(o.portfolio_id));case 2:return r=e.sent,a=r.value,e.abrupt("return",c(Object(b.d)(n,o,a)).then((function(e){var t=e.id,n=e.service_offering_source_ref;return v({pathname:y.t,search:"?portfolio=".concat(o.portfolio_id,"&portfolio-item=").concat(t,"&source=").concat(n)})})).then((function(){return o.portfolio_id===t&&c(Object(b.f)(t))})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.a.createElement(d.Modal,{isOpen:!0,title:l(x.a.copyItemTitle),onClose:function(){return v({pathname:o,search:r})},variant:"small"},s.a.createElement(m.c,{initialValues:{portfolio_id:t},schema:R((function(e){return Object(h.f)().getPortfolioItemNextName(n,e).then((function(e){return e.next_name}))}),l,[{value:t,label:u}]),onSubmit:g,onCancel:function(){return v({pathname:o,search:r})},formContainer:"modal",templateProps:{submitLabel:l(_.a.save),disableSubmit:["validating","submitting"]}}))};C.propTypes={closeUrl:c.a.string.isRequired,portfolioId:c.a.string,portfolioItemId:c.a.string.isRequired,search:c.a.string.isRequired,portfolioName:c.a.string.isRequired},t.default=C}}]);
//# sourceMappingURL=../sourcemaps/copy-portfolio-item-modal~31ecd969.js.map