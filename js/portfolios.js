(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{367:function(e,t,r){"use strict";var n=r(1),a=r.n(n),o=r(26);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(o.h)(),r=t.search,n=new URLSearchParams(r);return[e.reduce((function(e,t){return c({},e,a()({},t,n.get(t)))}),{}),r,n]}},384:function(e,t,r){"use strict";var n=r(1),a=r.n(n),o=r(23),i=r.n(o),c=r(27),l=r.n(c),s=r(0),u=r.n(s),p=r(2),f=r.n(p),m=r(89),d=r(382),b=r.n(d),O=r(378),g=r(19),y=r.n(g),h=r(40),v=r(44),j=r(22),w=function(e,t,r){if(t&&r)return e;var n=y()(e);return n.find((function(e){return void 0===e.value}))?y()(n):[{label:r?"Please choose":"None"}].concat(y()(n))},P=function(e){var t=e.input,r=e.options,n=e.isReadOnly,a=e.isDisabled,o=(e.FieldProvider,e.isRequired),c=e.formOptions.change,s=e.multi,p=l()(e,["input","options","isReadOnly","isDisabled","FieldProvider","isRequired","formOptions","multi"]);return u.a.createElement(O.rawComponents.Select,i()({hideSelectedOptions:!1,menuIsPortal:!0},t,p,{onChange:function(e){if(p.onChange)p.onChange(e),c(t.name,e);else{for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];t.onChange.apply(t,[e].concat(n))}},isMulti:s,options:w(r,t.value,o),isDisabled:a||n,closeMenuOnSelect:!s}))};P.propTypes={input:f.a.object.isRequired,options:f.a.arrayOf(f.a.shape({value:f.a.any,label:f.a.string.isRequired})),isReadOnly:f.a.bool,isDisabled:f.a.bool,isRequired:f.a.bool,isSearchable:f.a.bool,FieldProvider:f.a.any,formOptions:f.a.shape({change:f.a.func}),multi:f.a.bool},P.defaultProps={formOptions:{},isSearchable:!1,multi:!1,options:[]};var E=function(e){e.componentType;var t=e.label,r=e.isRequired,n=e.helperText,a=e.meta,o=e.description,c=e.hideLabel,s=e.formOptions,p=(e.dataType,e.initialKey,e.id),f=(e.initialValue,l()(e,["componentType","label","isRequired","helperText","meta","description","hideLabel","formOptions","dataType","initialKey","id","initialValue"])),m=a.error,d=a.touched&&m,b=f.input.name;return u.a.createElement(h.FormGroup,{isRequired:r,label:!c&&t,fieldId:p||b,isValid:!d,helperText:n,helperTextInvalid:a.error},o&&u.a.createElement(v.TextContent,null,u.a.createElement(j.Text,{component:j.TextVariants.small},o)),u.a.createElement(P,i()({formOptions:s,id:p||b,label:t,isValid:!d,isRequired:r},f)))};E.propTypes={componentType:f.a.string,id:f.a.string,label:f.a.string,isRequired:f.a.bool,helperText:f.a.string,meta:f.a.object,description:f.a.string,hideLabel:f.a.bool,formOptions:f.a.object,dataType:f.a.string,initialKey:f.a.any,initialValue:f.a.any};var T=E,S=r(46),D=r(37),k=r(368),_=function(e){var t=e.FieldProvider,r=e.inputName,n=e.selectName,a=e.loadOptions,o=e.permissions;return u.a.createElement(S.Grid,{gutter:"md",className:"share-column"},u.a.createElement(D.GridItem,{span:7},u.a.createElement(t,{name:r,loadOptions:Object(k.a)(a),render:function(e){var t=e.input,r=l()(e,["input"]);return u.a.createElement(O.rawComponents.Select,i()({isSearchable:!0,isClearable:!0,menuIsPortal:!0,loadOptions:Object(k.a)(a),placeholder:"Select group"},t,r))}})),u.a.createElement(D.GridItem,{span:5},u.a.createElement(t,{name:n,options:o,menuIsPortal:!0,render:function(e){var t=e.input,r=l()(e,["input"]);return u.a.createElement(O.rawComponents.Select,i()({placeholder:"Select permission"},t,r))}})))};_.propTypes={FieldProvider:f.a.oneOfType([f.a.node,f.a.func]).isRequired,inputName:f.a.string.isRequired,selectName:f.a.string.isRequired,loadOptions:f.a.func.isRequired,permissions:f.a.any};var C=_,R=function(e){var t=e.FieldProvider,r=e.label,n=l()(e,["FieldProvider","label"]);return u.a.createElement(S.Grid,{gutter:"md",className:"share-column"},u.a.createElement(D.GridItem,{span:7},u.a.createElement(v.TextContent,null,u.a.createElement(j.Text,{component:j.TextVariants.h4},r))),u.a.createElement(D.GridItem,{span:5},u.a.createElement(t,i()({},n,{menuIsPortal:!0,render:function(e){var t=e.input,r=l()(e,["input"]);return u.a.createElement(O.rawComponents.Select,i()({},t,r))}}))))};R.propTypes={FieldProvider:f.a.oneOfType([f.a.node,f.a.func]).isRequired,label:f.a.string.isRequired};var x=R;function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=Object(s.createContext)({}),N=function(e){var t=e.label,r=e.variant,n=l()(e,["label","variant"]),a=Object(s.useContext)(I).formContainer;return u.a.createElement(m.Button,i()({},n,{variant:"modal"===a&&void 0===r?"link":r}),t)};N.propTypes={label:f.a.string.isRequired,variant:f.a.string};var q=function(e){var t,r=e.componentMapper,n=e.formContainer,o=l()(e,["componentMapper","formContainer"]);return u.a.createElement("div",null,u.a.createElement(I.Provider,{value:{formContainer:n}},u.a.createElement(b.a,i()({formFieldsMapper:M({},O.formFieldsMapper,{},r,(t={},a()(t,d.componentTypes.SELECT,T),a()(t,"share-group-select",C),a()(t,"share-group-edit",x),t)),layoutMapper:M({},O.layoutMapper,a()({},d.layoutComponents.BUTTON,N))},o))))};q.propTypes={componentMapper:f.a.object,formContainer:f.a.oneOf(["default","modal"])},q.defaultProps={componentMapper:{},formContainer:"default"};t.a=q},401:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Split=void 0;var n=s(r(2)),a=function(e){if(e&&e.__esModule)return e;var t=l();if(t&&t.has(e))return t.get(e);var r={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}}r.default=e,t&&t.set(e,r);return r}(r(0)),o=s(r(428)),i=r(175),c=r(4);function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var f=function(e){var t=e.gutter,r=void 0===t?null:t,n=e.className,l=void 0===n?"":n,s=e.children,f=void 0===s?null:s,m=e.component,d=void 0===m?"div":m,b=p(e,["gutter","className","children","component"]),O=d;return a.createElement(O,u({},b,{className:(0,c.css)(o.default.split,r&&(0,i.getGutterModifier)(o.default,r,o.default.modifiers.gutter),l)}),f)};t.Split=f,f.propTypes={gutter:n.default.oneOf(["sm","md","lg"]),children:n.default.node,className:n.default.string,component:n.default.node}},402:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SplitItem=void 0;var n=l(r(2)),a=function(e){if(e&&e.__esModule)return e;var t=c();if(t&&t.has(e))return t.get(e);var r={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}}r.default=e,t&&t.set(e,r);return r}(r(0)),o=l(r(428)),i=r(4);function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=function(e){var t=e.isFilled,r=void 0!==t&&t,n=e.className,c=void 0===n?"":n,l=e.children,p=void 0===l?null:l,f=u(e,["isFilled","className","children"]);return a.createElement("div",s({},f,{className:(0,i.css)(o.default.splitItem,r&&o.default.modifiers.fill,c)}),p)};t.SplitItem=p,p.propTypes={isFilled:n.default.bool,children:n.default.node,className:n.default.string}},415:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(2),i=r.n(o),c=function(e){var t=e.children;return a.a.createElement("div",{className:"pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto"},t)};c.propTypes={children:i.a.oneOfType([i.a.node,i.a.arrayOf(i.a.node)])},t.a=c},419:function(e,t,r){"use strict";var n=r(41),a=r.n(n),o=r(1),i=r.n(o),c=r(0),l=r.n(c),s=r(2),u=r.n(s),p=r(36),f=r(383),m=r(384),d=r(382),b=r(368),O=function(e){return{fields:[{component:d.componentTypes.SELECT,name:"selectedWorkflows",label:"Select approval process",loadOptions:Object(b.a)(e),multi:!0,isSearchable:!0,isClearable:!0}]}},g=r(19),y=r.n(g),h=r(510),v=r(50),j=r(63),w=r(12),P=r(52),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(j.a)().get("".concat(w.a,"/workflows").concat(e.length>0?"/?filter[name][contains]=".concat(e):"")).then((function(e){return e.data.map((function(e){var t=e.id;return{label:e.name,value:t}}))}))},T=function(e,t,r){var n=e?e.map((function(e){return Object(j.j)().unlinkWorkflow(e,r)})):[],a=t?t.map((function(e){return Object(j.j)().linkWorkflow(e,r)})):[];return Promise.all([].concat(y()(n),y()(a)))},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:P.a.limit,offset:P.a.offset},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n="app_name=".concat(e.appName,"&object_type=").concat(e.objectType,"&object_id=").concat(e.objectId),a="&limit=".concat(t.limit,"&offset=").concat(t.offset),o="&filter[name][contains]=".concat(r);return Object(j.a)().get("".concat(w.a,"/workflows/?").concat(n).concat(o).concat(a))},D=r(45),k=r(53),_=r(367),C=r(371);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var x={isFetching:!0},F=function(e,t){switch(t.type){case"setFetching":return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{isFetching:t.payload});default:return e}},M=function(e){var t=e.objectType,r=e.removeQuery,n=e.querySelector,o=e.pushParam,i=e.objectName,s=void 0===i?function(){return t}:i,u=Object(c.useReducer)(F,x),d=a()(u,2),b=d[0].isFetching,g=d[1],y=Object(p.useSelector)((function(e){return e.approvalReducer.resolvedWorkflows})),j=y.data,R=y.meta,M=Object(p.useDispatch)(),I=Object(C.a)(r),N=Object(_.a)([n]),q=a()(N,1)[0];Object(c.useEffect)((function(){M(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:P.a.limit,offset:P.a.offset},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return{type:v.a.RESOLVE_WORKFLOWS,payload:S(e,t,r)}}({objectType:t,appName:w.b[t],objectId:q[n]},R)).then((function(){return g({type:"setFetching",payload:!1})}))}),[]);return l.a.createElement(f.Modal,{title:"Set approval process for ".concat(s(q[n])),isOpen:!0,onClose:function(){return I.push(o)},isSmall:!0},b?l.a.createElement(k.i,null):l.a.createElement(m.a,{initialValues:{selectedWorkflows:j?j.map((function(e){return e.id})):void 0},onSubmit:function(e,r){var a=r.getState().initialValues.selectedWorkflows||[],i=e.selectedWorkflows||[];I.push(o);var s,u,p,f=a.filter((function(e){return i.findIndex((function(t){return t===e}))<0})),m=i.filter((function(e){return a.findIndex((function(t){return t===e}))<0}));(f.length>0||m.length>0)&&M((s=f,u=m,p={object_type:t,app_name:w.b[t],object_id:q[n]},function(e){return e({type:v.a.UPDATE_WORKFLOWS,payload:T(s,u,p).then((function(){return e(Object(D.addNotification)({variant:"success",title:"Success updating workflows",dismissable:!0,description:l.a.createElement(c.Fragment,null,s.length>0?l.a.createElement(h.a,{id:"workflows.update_workflows",defaultMessage:"{count, number} {count, plural, one {workflow was}\n                    other {workflows were}} unlinked succesfully. ",values:{count:s.length}}):"",u.length>0?l.a.createElement(h.a,{id:"workflows.update_workflows",defaultMessage:"{count, number} {count, plural, one {workflow was}\n                    other {workflows were}} linked succesfully.",values:{count:u.length}}):"")}))}))})}))},onCancel:function(){return I.push(o)},schema:O(E),formContainer:"modal",buttonsLabels:{submitLabel:"Save"}}))};M.propTypes={pushParam:u.a.oneOfType([u.a.string,u.a.shape({pathname:u.a.string.isRequired,search:u.a.string})]).isRequired,objectType:u.a.string.isRequired,objectName:u.a.func,removeQuery:u.a.bool,querySelector:u.a.oneOf(["portfolio","platform","inventory"]).isRequired};t.a=M},426:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.WrenchIconConfig=void 0;var n,a=(n=r(9))&&n.__esModule?n:{default:n};var o={name:"WrenchIcon",height:512,width:512,svgPath:"M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z",yOffset:"",xOffset:"",transform:""};t.WrenchIconConfig=o;var i=(0,a.default)(o);t.default=i},428:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(467),t.default={split:"pf-l-split",splitItem:"pf-l-split__item",modifiers:{fill:"pf-m-fill",gutter:"pf-m-gutter"}}},437:function(e,t,r){"use strict";var n=r(42),a=r.n(n),o=r(43),i=r(56);function c(){var e=a()(["\n  overflow: hidden;\n"]);return c=function(){return e},e}var l=Object(o.b)(i.Bullseye)(c());t.a=l},466:function(e,t,r){"use strict";var n=r(41),a=r.n(n),o=r(0),i=r.n(o),c=r(26),l=r(36),s=r(469),u=r.n(s),p=r(383),f=r(89),m=r(22),d=r(44),b=r(401),O=r(402),g=r(373),y=r(367),h=r(385),v=r(54);t.a=function(){var e=Object(y.a)(["portfolio"]),t=a()(e,1)[0].portfolio,r=Object(l.useDispatch)(),n=Object(l.useSelector)((function(e){var r=e.portfolioReducer;return Object(h.g)(r,t)})),o=Object(c.g)(),s=o.push,j=o.goBack;return n?i.a.createElement(p.Modal,{title:"Delete Portfolio?",isOpen:!0,isSmall:!0,onClose:j,isFooterLeftAligned:!0,actions:[i.a.createElement(f.Button,{key:"submit",variant:"danger",type:"button",onClick:function(){return s(v.s),r(Object(g.j)(t))}},"Confirm"),i.a.createElement(f.Button,{key:"cancel",variant:"link",type:"button",onClick:j},"Cancel")]},i.a.createElement(b.Split,{gutter:"md"},i.a.createElement(O.SplitItem,null,i.a.createElement(u.a,{size:"xl",fill:"#f0ab00"})),i.a.createElement(O.SplitItem,null,i.a.createElement(d.TextContent,null,i.a.createElement(m.Text,{component:m.TextVariants.p},"This action will permanently delete portfolio ",n.name," and its data."))))):null}},467:function(e,t,r){var n=r(6),a=r(468);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=(n(a,o),a.locals?a.locals:{});e.exports=i},468:function(e,t,r){(e.exports=r(7)(!1)).push([e.i,".pf-l-split {\n  --pf-l-split--m-gutter--MarginRight: var(--pf-global--gutter);\n  --pf-l-split--m-gutter--md--MarginRight: var(--pf-global--gutter--md);\n  display: flex;\n  flex-wrap: nowrap;\n  padding: 0;\n  margin: 0; }\n  @media screen and (max-width: 768px) {\n    .pf-l-split {\n      --pf-l-split--m-gutter--MarginRight: var(--pf-l-split--m-gutter--md--MarginRight); } }\n\n.pf-l-split__item.pf-m-fill {\n  flex-grow: 1; }\n\n.pf-l-split.pf-m-gutter > *:not(:last-child) {\n  margin-right: var(--pf-l-split--m-gutter--MarginRight); }\n",""])},469:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.WarningTriangleIconConfig=void 0;var n,a=(n=r(9))&&n.__esModule?n:{default:n};var o={name:"WarningTriangleIcon",height:1024,width:1024,svgPath:"M511.488 949.321c6.656 0 13.093-0.878 19.456-2.487s12.142-4.169 17.481-7.461c5.998-3.365 11.118-7.314 15.506-11.995s8.119-10.021 11.483-15.945l437.979-842.24c6.656-11.995 9.801-23.918 9.509-35.913s-3.877-23.918-10.459-35.913c-3.365-5.998-7.168-11.118-11.483-15.506s-9.509-8.192-15.506-11.483c-5.339-2.706-10.971-4.827-16.969-6.51s-12.288-2.487-18.944-2.487h-876.032c-6.656 0-12.946 0.805-18.944 2.487s-11.63 3.803-16.969 6.51c-5.998 3.291-11.118 7.095-15.506 11.483s-8.192 9.509-11.483 15.506c-6.656 11.995-10.094 23.918-10.459 35.913s2.779 23.918 9.509 35.913l437.979 842.24c3.291 5.998 7.095 11.264 11.483 15.945s9.509 8.631 15.506 11.995c5.339 3.291 11.118 5.778 17.481 7.461s12.8 2.487 19.456 2.487zM132.974 73.289h759.296l-380.782 741.595-378.514-741.595zM583.387 156.526c-2.121-5.632-7.534-9.509-13.97-9.509-14.263 0-28.526 0-42.715 0-21.138 0-42.277 0-63.415 0-11.045 0-24.576 0.585-24.576 14.994 0 0 0 44.325 0 44.544 0 8.558 6.437 14.994 14.994 14.994 0 0 115.712 0 115.785 0 8.485 0 14.994-6.437 14.994-14.994 0 0 0-44.544 0-44.544 0-1.975-0.366-3.803-1.024-5.486zM583.826 301.934c-2.121-5.632-7.534-9.509-13.97-9.509-14.263 0-28.526 0-42.715 0-21.138 0-42.277 0-63.415 0-11.045 0-24.576 0.585-24.576 14.994 0 0 0 224.914 0 225.134 0 8.558 6.437 14.994 14.994 14.994 0 0 115.712 0 115.785 0 8.485 0 14.994-6.437 14.994-14.994 0 0 0-225.134 0-225.134 0-1.975-0.366-3.803-1.024-5.486z",yOffset:"64",xOffset:"",transform:"rotate(180 0 512) scale(-1 1)"};t.WarningTriangleIconConfig=o;var i=(0,a.default)(o);t.default=i},481:function(e,t,r){"use strict";var n=r(1),a=r.n(n),o=r(41),i=r.n(o),c=r(0),l=r.n(c),s=r(2),u=r.n(s),p=r(384),f=r(36),m=r(383),d=r(19),b=r.n(d);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var g=function(e,t,r){var n,o=function(e,t){return{fields:[{component:"sub-form",description:"Invite group",name:"new_share",key:"1",fields:[{name:"group-selection",component:"share-group-select",inputName:"group_uuid",selectName:"permissions",loadOptions:e,isSearchable:!0,permissions:t}]}]}}(t,r),i=e.map((function(e){return function(e,t){return{component:"sub-form",name:"".concat(e.group_name),key:"".concat(e.group_name),fields:[{name:"".concat(e.group_name),label:"".concat(e.group_name),component:"share-group-edit",options:t,isClearable:!0}]}}(e,r)})),c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},(n=b()(i),{fields:[{component:"sub-form",description:"Groups with access",name:"share_list",key:"share_list",fields:b()(n)}]}));return{fields:[].concat(b()(o.fields),b()(c.fields))}},y=r(373),h=r(47),v=r.n(h),j=r(63),w=r(12),P=Object(j.a)(),E=Object(j.e)();function T(e){return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.awrap(P.get("".concat(w.c,"/portfolios/").concat(e,"/share_info")));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))}var S=r(3);function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=function(e){return{type:S.S,payload:(t=k({},e),v.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return r={permissions:t.permissions.split(","),group_uuids:[t.group_uuid]},e.next=3,v.a.awrap(E.sharePortfolio(t.id,r));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}))),meta:{notifications:{fulfilled:{variant:"success",title:"Success sharing portfolio",description:"The portfolio was shared successfully."}}}};var t,r},C=function(e){return{type:S.U,payload:(t=k({},e),v.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return r={permissions:t.permissions,group_uuids:[t.group_uuid]},e.next=3,v.a.awrap(E.unsharePortfolio(t.id,r));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}))),meta:{notifications:{fulfilled:{variant:"success",title:"Success unsharing portfolio",description:"The portfolio was unshared successfully."}}}};var t,r},R=r(53);Object(j.g)();var x=r(367),F=r(371);function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=function(e){var t=e.closeUrl,r=e.removeQuery,n=Object(f.useDispatch)(),o=Object(F.a)(r).push,s=Object(x.a)(["portfolio"]),u=i()(s,2),d=u[0].portfolio,b=u[1],O=Object(c.useState)(!0),h=i()(O,2),v=h[0],P=h[1],E=Object(f.useSelector)((function(e){return e.portfolioReducer.portfolios.data.find((function(e){return e.id===d}))})),D=Object(f.useSelector)((function(e){return{shareInfo:e.shareReducer.shareInfo}})).shareInfo;Object(c.useEffect)((function(){var e;P(!0),n((e=d,{type:S.C,payload:T(e)})).then((function(){return P(!1)})).catch((function(){return P(!1)}))}),[]);var k=function(){return o({pathname:t,search:b})};return l.a.createElement(m.Modal,{title:"Share portfolio",isOpen:!0,isSmall:!0,onClose:k},v&&l.a.createElement(R.g,null),!v&&l.a.createElement(p.a,{schema:g(D,(function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(j.a)().get("".concat(w.g,"/groups/").concat(e.length>0?"?name=".concat(e):"")).then((function(e){return e.data.map((function(e){var t=e.uuid;return{label:e.name,value:t}}))}))}(e)}),w.j),schemaType:"default",onSubmit:function(e){var r=[];return e.group_uuid&&e.permissions&&r.push(n(_(e))),D.forEach((function(t){var a=t.permissions.sort().join(",");if(e[t.group_name]!==a)if(e[t.group_name])t.permissions.length>e[t.group_name].split(",").length?r.push(n(C({id:d,permissions:["update"],group_uuid:t.group_uuid}))):r.push(n(_({id:d,permissions:e[t.group_name],group_uuid:t.group_uuid})));else{var o=t.permissions.filter((function(e){return w.k.indexOf(e)>-1}));r.push(n(C({id:d,permissions:o,group_uuid:t.group_uuid})))}})),o({pathname:t,search:b}),Promise.all(r).then((function(){return n(Object(y.g)())}))},onCancel:k,initialValues:I({},E,{},D.map((function(e){var t=e.permissions.filter((function(e){return w.k.indexOf(e)>-1})),r=e.group_name,n=w.j.find((function(e){return e.value===t.sort().join(",")}));return a()({},r,n?n.value:"Unknown")})).reduce((function(e,t){return I({},e,{},t)}),{})),formContainer:"modal",buttonsLabels:{submitLabel:"Send"}}))};N.propTypes={closeUrl:u.a.string.isRequired,removeQuery:u.a.bool};t.a=N},482:function(e,t,r){"use strict";var n=r(1),a=r.n(n),o=r(41),i=r.n(o),c=r(0),l=r.n(c),s=r(2),u=r.n(s),p=r(36),f=r(383),m=r(92),d=r(384),b=r(382),O=r(368),g=r(385),y=Object(O.a)((function(e,t){return Object(g.e)(e).then((function(r){var n=r.data;return e&&0!==e.trim().length?n.find((function(r){return r.name===e&&r.id!==t}))?"Name has already been taken":void 0:"Required"})).catch((function(e){return e.data}))})),h=function(e,t){return{fields:[{label:"Name",name:"name",component:b.componentTypes.TEXT_FIELD,isRequired:!0,validate:[function(e){return y(e,t)}]},{label:"Description",component:b.componentTypes.TEXTAREA,name:"description"}]}},v=r(373),j=r(367),w=r(371),P=r(437);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S=function(e){var t=e.removeQuery,r=e.closeTarget,n=Object(p.useDispatch)(),a=Object(j.a)(["portfolio"]),o=i()(a,1)[0].portfolio,c=Object(w.a)(t).push,s=Object(p.useSelector)((function(e){var t=e.portfolioReducer;return Object(g.g)(t,o)})),u=o&&s&&Object.keys(s).length>0;return l.a.createElement(f.Modal,{title:o?"Edit portfolio":"Create portfolio",isOpen:!0,onClose:function(){return c(r)},isSmall:!0},!o||u?l.a.createElement(d.a,{schema:h(0,o),schemaType:"default",onSubmit:function(e){return c(r),n(s?Object(v.m)(e):Object(v.a)(e))},onCancel:function(){return c(r)},initialValues:T({},s),formContainer:"modal",buttonsLabels:{submitLabel:o?"Save":"Create"}}):l.a.createElement(P.a,{className:"pf-u-m-md"},l.a.createElement(m.Spinner,null)))};S.propTypes={removeQuery:u.a.bool,closeTarget:u.a.oneOfType([u.a.string,u.a.shape({pathname:u.a.string.isRequired,search:u.a.string})]).isRequired};t.a=S},633:function(e,t,r){"use strict";r.r(t);var n=r(23),a=r.n(n),o=r(41),i=r.n(o),c=r(1),l=r.n(c),s=r(0),u=r.n(s),p=r(36),f=r(26),m=r(376),d=r.n(m),b=r(426),O=r.n(b),g=r(89),y=r(482),h=r(481),v=r(466),j=r(419),w=r(91),P=r(381),E=r(393),T=r(52),S=r(373),D=r(27),k=r.n(D),_=r(2),C=r.n(_),R=r(397),x=r(399),F=r(400),M=r(171),I=r(172),N=r(20),q=r(173),L=r(22),V=r(44),W=r(95),A=r(42),U=r.n(A),B=r(24),G=r(165),Q=r(166),z=r(388),K=r(43);function J(){var e=U()(["\n  max-width: calc(100% - 44px);\n"]);return J=function(){return e},e}var X=Object(K.b)(Q.LevelItem)(J()),H=function(e){var t=e.to,r=e.portfolioName,n=e.headerActions;return u.a.createElement(G.Level,null,u.a.createElement(X,{className:"pf-m-grow"},u.a.createElement(B.b,{to:t},u.a.createElement(V.TextContent,null,u.a.createElement(L.Text,{title:r,className:"pf-u-mb-0",component:L.TextVariants.h3},u.a.createElement(z.a,null,r))))),u.a.createElement(Q.LevelItem,{onClick:function(e){return e.preventDefault()}},n))};H.propTypes={portfolioName:C.a.string.isRequired,headerActions:C.a.arrayOf(C.a.node),to:C.a.shape({pathname:C.a.string.isRequired,search:C.a.string.isRequired}).isRequired},H.defaultProps={headerActions:[]};var Y=H,Z=r(90),$=r(54),ee=r(392),te=r(398);function re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var ne=["description"],ae=function(e,t,r){return[u.a.createElement(M.Dropdown,{key:"portfolio-dropdown",isOpen:t,isPlain:!0,onSelect:function(){return r(!1)},position:N.DropdownPosition.right,toggle:u.a.createElement(q.KebabToggle,{onToggle:function(e){return r(e)}}),dropdownItems:[u.a.createElement(I.DropdownItem,{key:"share-portfolio-action",component:u.a.createElement(Z.a,{searchParams:{portfolio:e},pathname:$.w},"Share")}),u.a.createElement(I.DropdownItem,{key:"workflow-portfolio-action",component:u.a.createElement(Z.a,{searchParams:{portfolio:e},pathname:$.d},"Set approval")}),u.a.createElement(I.DropdownItem,{key:"edit-portfolio-action",component:u.a.createElement(Z.a,{searchParams:{portfolio:e},pathname:$.c},"Edit")}),u.a.createElement(I.DropdownItem,{key:"remove-portfolio-action",component:u.a.createElement(Z.a,{searchParams:{portfolio:e},pathname:$.v},"Delete")})]})]},oe=function(e){var t=e.imageUrl,r=e.isDisabled,n=e.name,o=e.id,c=k()(e,["imageUrl","isDisabled","name","id"]),p=Object(s.useState)(!1),f=i()(p,2),m=f[0],d=f[1],b={pathname:$.u,search:"?portfolio=".concat(o)};return u.a.createElement(ee.b,{isDisabled:r},u.a.createElement(ee.a,null,u.a.createElement(x.CardHeader,null,u.a.createElement(Y,{to:b,portfolioName:n,headerActions:ae(o,m,d)})),u.a.createElement(te.a,null,u.a.createElement(V.TextContent,{className:"pf-u-mb-md"},u.a.createElement(L.Text,{component:L.TextVariants.small,className:"pf-i-mb-sm"},"Last updated ",u.a.createElement(W.DateFormat,{date:c.updated_at||c.created_at,type:"relative"})),u.a.createElement(L.Text,{component:L.TextVariants.small},c.owner)),u.a.createElement(R.a,a()({},function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?re(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):re(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({name:n,imageUrl:t},c),{toDisplay:ne}))),u.a.createElement(F.CardFooter,null)))};oe.propTypes={history:C.a.object,imageUrl:C.a.string,name:C.a.string,id:C.a.string.isRequired,updated_at:C.a.string,created_at:C.a.string.isRequired,owner:C.a.string,isDisabled:C.a.bool};var ie=oe,ce=r(370),le=r(424),se=r(372);function ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var fe=function(e){var t=e.meta,r=e.fetchPortfolios,n=e.userPermissions,a=e.filterProps,o=a.searchValue,i=a.onFilterChange,c=a.placeholder;return{fields:[{component:ce.b.TOP_TOOLBAR,key:"portfolios-top-toolbar",fields:[{component:ce.b.TOP_TOOLBAR_TITLE,key:"portfolios-toolbar-title",title:"Portfolios",noData:t.noData},{component:ce.b.LEVEL,key:"portfolios-actions",fields:t.noData?[]:[{component:ce.b.TOOLBAR,key:"main-portfolio-toolbar",fields:[Object(le.b)({groupName:"filter-group",component:ce.b.FILTER_TOOLBAR_ITEM,key:"filter-input",searchValue:o,onFilterChange:i,placeholder:c,isClearable:!0}),Object(le.b)(pe({hidden:0===t.count||!Object(w.b)(n,["catalog:portfolios:create"]),groupName:"portfolio-button-group",key:"create-portfolio"},Object(le.a)({pathname:"/portfolios/add-portfolio",variant:"primary",key:"create-portfolio-button","aria-label":"Create portfolio",title:"Create"})))]},{component:ce.b.LEVEL_ITEM,key:"pagination-item",fields:t.count>0?[{component:se.a,isCompact:!0,key:"portfolios-pagination",meta:t,apiRequest:r}]:[]}]}]}]}},me=r(390),de=r(368),be=r(12),Oe=r(415),ge=r(59);function ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function he(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ye(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ve=Object(de.a)((function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:T.a;r(!0),t(Object(S.g)(he({},n,{filter:e}))).then((function(){return r(!1)}))}),1e3),je={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},we=function(e,t){switch(t.type){case"setFetching":return he({},e,{isFetching:t.payload});case"setFilterValue":return he({},e,{filterValue:t.payload});case"setFilteringFlag":return he({},e,{isFiltering:t.payload})}return e};t.default=function(){var e=Object(s.useReducer)(we,je),t=i()(e,2),r=t[0],n=r.filterValue,o=r.isFetching,c=r.isFiltering,l=t[1],m=Object(p.useSelector)((function(e){return e.portfolioReducer.portfolios})),b=m.data,D=m.meta,k=Object(f.i)($.s),_=Object(p.useDispatch)(),C=Object(s.useContext)(ge.a).permissions;Object(s.useEffect)((function(){_(Object(S.g)(he({},T.a,{filter:n}))).then((function(){return l({type:"setFetching",payload:!1})})),Object(w.d)(),insights.chrome.appNavClick({id:"portfolios",secondaryNav:!0})}),[]);var R=function(e){return b?b.find((function(t){return t.id===e})).name:"portfolio"},x=function(e){l({type:"setFilterValue",payload:e}),ve(e,_,(function(e){return l({type:"setFilteringFlag",payload:e})}),he({},D,{offset:0}))},F={PrimaryAction:D.noData?function(){return u.a.createElement(me.a,{url:$.a,label:"Create portfolio",hasPermission:Object(w.b)(C,["catalog:portfolios:create"])})}:function(){return u.a.createElement(g.Button,{variant:"link",onClick:function(){return x("")}},"Clear all filters")},title:D.noData?"No portfolios":"No results found",description:D.noData?"No portfolios match your filter criteria.":"No results match the filter criteria. Remove all filters or clear all filters to show results.",Icon:D.noData?O.a:d.a},M=b.map((function(e){return u.a.createElement(ie,a()({key:e.id},e))}));return u.a.createElement(s.Fragment,null,u.a.createElement(P.a,{schema:fe({meta:D,userPermissions:C,fetchPortfolios:function(e,t){return _(Object(S.g)(he({filter:n},t)))},filterProps:{searchValue:n,onFilterChange:x,placeholder:"Filter by portfolio..."}})}),u.a.createElement(f.b,{exact:!0,path:[$.a,$.c]},u.a.createElement(y.a,{removeQuery:!0,closeTarget:$.s})),u.a.createElement(f.b,{exact:!0,path:$.v,component:v.a}),u.a.createElement(f.b,{exact:!0,path:$.w},u.a.createElement(h.a,{closeUrl:k.url,removeQuery:!0})),u.a.createElement(f.b,{exact:!0,path:$.x,render:function(){return u.a.createElement(j.a,{pushParam:{pathname:k.url},objectType:be.f,objectName:R,querySelector:"portfolio"})}}),u.a.createElement(E.a,{items:M,isLoading:o||c,renderEmptyState:function(){return u.a.createElement(me.b,F)}}),D.count>0&&u.a.createElement(Oe.a,null,u.a.createElement(se.a,{meta:D,apiRequest:function(e,t){return _(Object(S.g)(he({filter:n},t)))},dropDirection:"up"})))}}}]);
//# sourceMappingURL=../sourcemaps/portfolios.js.map