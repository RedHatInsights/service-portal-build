(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{442:function(t,e,n){"use strict";e.__esModule=!0,n(478),e.default={modifiers:{fill:"pf-m-fill",gutter:"pf-m-gutter"},stack:"pf-l-stack",stackItem:"pf-l-stack__item"}},446:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(3),o=r.__importStar(n(0)),a=r.__importDefault(n(442)),c=n(4);e.Stack=t=>{var{hasGutter:e=!1,className:n="",children:i=null,component:u="div"}=t,l=r.__rest(t,["hasGutter","className","children","component"]);const s=u;return o.createElement(s,Object.assign({},l,{className:c.css(a.default.stack,e&&a.default.modifiers.gutter,n)}),i)},e.Stack.displayName="Stack"},457:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(3),o=r.__importStar(n(0)),a=r.__importDefault(n(442)),c=n(4);e.StackItem=t=>{var{isFilled:e=!1,className:n="",children:i=null}=t,u=r.__rest(t,["isFilled","className","children"]);return o.createElement("div",Object.assign({},u,{className:c.css(a.default.stackItem,e&&a.default.modifiers.fill,n)}),i)},e.StackItem.displayName="StackItem"},478:function(t,e,n){var r=n(6),o=n(479);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);t.exports=o.locals||{}},479:function(t,e,n){(e=n(7)(!1)).push([t.i,".pf-l-stack {\n  --pf-l-stack--m-gutter--MarginBottom: var(--pf-global--gutter);\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\n.pf-l-stack__item.pf-m-fill {\n  flex-grow: 1; }\n\n.pf-l-stack.pf-m-gutter > *:not(:last-child) {\n  margin-bottom: var(--pf-l-stack--m-gutter--MarginBottom); }\n",""]),t.exports=e},506:function(t,e){t.exports=function(t,e,n){for(var r=n-1,o=t.length;++r<o;)if(t[r]===e)return r;return-1}},555:function(t,e,n){var r=n(129);t.exports=function(){if(!arguments.length)return[];var t=arguments[0];return r(t)?t:[t]}},556:function(t,e,n){var r=n(506);t.exports=function(t,e){return!!(null==t?0:t.length)&&r(t,e,0)>-1}},557:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},631:function(t,e,n){var r=n(632),o=n(637),a=n(644),c=n(649),i=a((function(t,e){return c(t)?r(t,o(e,1,c,!0)):[]}));t.exports=i},632:function(t,e,n){var r=n(555),o=n(633),a=n(634),c=n(635),i=n(636),u=n(556);t.exports=function(t,e,n,l){var s=-1,f=o,p=!0,m=t.length,d=[],b=e.length;if(!m)return d;n&&(e=c(e,i(n))),l?(f=a,p=!1):e.length>=200&&(f=u,p=!1,e=new r(e));t:for(;++s<m;){var v=t[s],g=null==n?v:n(v);if(v=l||0!==v?v:0,p&&g==g){for(var h=b;h--;)if(e[h]===g)continue t;d.push(v)}else f(e,g,l)||d.push(v)}return d}},633:function(t,e,n){var r=n(506);t.exports=function(t,e){return!!(null==t?0:t.length)&&r(t,e,0)>-1}},634:function(t,e){t.exports=function(t,e,n){for(var r=-1,o=null==t?0:t.length;++r<o;)if(n(e,t[r]))return!0;return!1}},635:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},636:function(t,e){t.exports=function(t){return function(e){return t(e)}}},637:function(t,e,n){var r=n(638),o=n(639);t.exports=function t(e,n,a,c,i){var u=-1,l=e.length;for(a||(a=o),i||(i=[]);++u<l;){var s=e[u];n>0&&a(s)?n>1?t(s,n-1,a,c,i):r(i,s):c||(i[i.length]=s)}return i}},638:function(t,e){t.exports=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}},639:function(t,e,n){var r=n(640),o=n(643),a=n(129),c=r?r.isConcatSpreadable:void 0;t.exports=function(t){return a(t)||o(t)||!!(c&&t&&t[c])}},640:function(t,e,n){var r=n(641).Symbol;t.exports=r},641:function(t,e,n){var r=n(642),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},642:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(52))},643:function(t,e){t.exports=function(){return!1}},644:function(t,e,n){var r=n(645),o=n(646),a=n(648);t.exports=function(t,e){return a(o(t,e,r),t+"")}},645:function(t,e){t.exports=function(t){return t}},646:function(t,e,n){var r=n(647),o=Math.max;t.exports=function(t,e,n){return e=o(void 0===e?t.length-1:e,0),function(){for(var a=arguments,c=-1,i=o(a.length-e,0),u=Array(i);++c<i;)u[c]=a[e+c];c=-1;for(var l=Array(e+1);++c<e;)l[c]=a[c];return l[e]=n(u),r(t,this,l)}}},647:function(t,e){t.exports=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}},648:function(t,e){t.exports=function(t){return t}},649:function(t,e,n){var r=n(650),o=n(557);t.exports=function(t){return o(t)&&r(t)}},650:function(t,e,n){var r=n(651),o=n(654);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},651:function(t,e,n){var r=n(652),o=n(653);t.exports=function(t){if(!o(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},652:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},653:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},654:function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},712:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n.n(r),a=n(1),c=n.n(a),i=n(0),u=n.n(i),l=n(631),s=n.n(l),f=n(12),p=n.n(f),m=n(16),d=n(487),b=n(71),v=n(50),g=n(446),h=n(457),j=n(488),O=n(459),y=n.n(O),w=n(431);function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(Object(n),!0).forEach((function(e){c()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var S=function(t,e,n){var r=n.getState().values["initial-workflows"];return{key:r.length,loadOptions:function(){return t.loadOptions.apply(t,arguments).then((function(t){return t.map((function(t){return x(x({},t),r.find((function(e){return e.id===t.value}))?{isDisabled:!0}:{})}))}))}}},_=function(t){return{fields:[{component:y.a.SELECT,name:"new-workflows",label:"",loadOptions:Object(w.a)(t),multi:!0,isSearchable:!0,isClearable:!0,resolveProps:S},{component:"initial-chips",name:"initial-workflows",label:"Current approval processes"}]}},P=n(17),E=n.n(P),N=n(69),M=n(53),D=n(8),F=n(23),R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=e.map((function(t){return"filter[id][]=".concat(t)})).join("&");return Object(M.a)().get("".concat(D.a,"/workflows?filter[name][contains]=").concat(t,"&").concat(n||"")).then((function(t){return t.data.map((function(t){var e=t.id;return{label:t.name,value:e}}))}))},C=function(t,e,n){var r=t?t.map((function(t){return Object(M.i)().unlinkWorkflow(t,n)})):[],o=e?e.map((function(t){return Object(M.i)().linkWorkflow(t,n)})):[];return Promise.all([].concat(E()(r),E()(o)))},T=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:F.a.limit,offset:F.a.offset},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r="app_name=".concat(t.appName,"&object_type=").concat(t.objectType,"&object_id=").concat(t.objectId),o="&limit=".concat(e.limit,"&offset=").concat(e.offset),a="&filter[name][contains]=".concat(n);return Object(M.a)().get("".concat(D.a,"/workflows?").concat(r).concat(a).concat(o))},I=n(125),W=function(t){return t().i18nReducer.formatMessage},q=(0,n(49).defineMessages)({unlinkNotification:{id:"approval.notifications.unlink",defaultMessage:"{count, number} {count, plural, one {approval process was} other {approval processes were}} unlinked successfully."},linkNotification:{id:"approval.notifications.link",defaultMessage:"{count, number} {count, plural, one {approval process was} other {approval processes were}} linked successfully."},setWorkflow:{id:"approval.workflows.set",defaultMessage:"Select approval processes for <strong>{objectName}</strong>"}}),L=n(74),A=n(73),G=n(449),H=n(86),B=n(49),J=n(126);function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function V(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?K(Object(n),!0).forEach((function(e){c()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var U={isFetching:!0},z=function(t,e){switch(e.type){case"setFetching":return V(V({},t),{},{isFetching:e.payload});default:return t}},Q=function(t){var e=t.objectType,n=t.removeSearch,r=t.keepHash,a=t.querySelector,c=t.pushParam,l=t.objectName,f=void 0===l?function(){return e}:l,p=t.onClose,O=Object(H.a)().formatMessage,y=Object(i.useRef)(O(Object(B.defineMessage)({id:"workflows.modal.title",defaultMessage:"Set approval process"}))).current,w=Object(i.useReducer)(z,U),k=o()(w,2),x=k[0].isFetching,S=k[1],P=Object(m.useSelector)((function(t){return t.approvalReducer.resolvedWorkflows})),E=P.data,M=P.meta,K=Object(m.useSelector)((function(t){return t.portfolioReducer.isLoading})),V=Object(m.useDispatch)(),Q=Object(G.a)({removeSearch:n,keepHash:r}),X=Object(A.a)([a]),Y=o()(X,1)[0];Object(i.useEffect)((function(){V(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:F.a.limit,offset:F.a.offset},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return{type:N.a.RESOLVE_WORKFLOWS,payload:T(t,e,n)}}({objectType:e,appName:D.b[e],objectId:Y[a]},M)).then((function(){return S({type:"setFetching",payload:!1})}))}),[]);var Z=function(){p&&p(),Q.push(c)},$=K||x;return u.a.createElement(d.Modal,{title:y,isOpen:!0,onClose:Z,variant:"small"},$&&u.a.createElement(L.j,null),!$&&u.a.createElement(g.Stack,{hasGutter:!0},u.a.createElement(h.StackItem,null,u.a.createElement(b.TextContent,null,u.a.createElement(v.Text,null,O(q.setWorkflow,{strong:function(t){return u.a.createElement("strong",null,t)},objectName:f(Y[a])})))),u.a.createElement(h.StackItem,null,u.a.createElement(j.c,{subscription:{values:!0},initialValues:{"initial-workflows":E},onSubmit:function(t){Z();var n,r,o,c=E.filter((function(e){var n=e.id;return!t["initial-workflows"].find((function(t){return n===t.id}))})).map((function(t){return t.id})),i=s()(t["new-workflows"],c),u=s()(c,t["new-workflows"]),l=i.filter((function(t){return!E.find((function(e){return e.id===t}))})),f=u.filter((function(t){return E.find((function(e){return e.id===t}))}));(f.length>0||l.length>0)&&V((n=f,r=l,o={object_type:e,app_name:D.b[e],object_id:Y[a]},function(t,e){var a=W(e);return t({type:N.a.UPDATE_WORKFLOWS,payload:C(n,r,o).then((function(){return t(Object(I.addNotification)({variant:"success",title:"Success updating approval process",dismissable:!0,description:"".concat(n.length>0?a(q.unlinkNotification,{count:n.length}):"","\n          ").concat(r.length>0?a(q.linkNotification,{count:r.length}):"")}))}))})}))},onCancel:Z,schema:_(R),formContainer:"modal",templateProps:{submitLabel:O(J.a.save)}}))))};Q.propTypes={pushParam:p.a.oneOfType([p.a.string,p.a.shape({pathname:p.a.string.isRequired,search:p.a.string})]).isRequired,objectType:p.a.string.isRequired,objectName:p.a.func,removeSearch:p.a.bool,querySelector:p.a.oneOf(["portfolio","platform","inventory","portfolio-item"]).isRequired,keepHash:p.a.bool,onClose:p.a.func},Q.defaultProps={keepHash:!1};e.default=Q}}]);
//# sourceMappingURL=../sourcemaps/lib~edit-approval-workflow~31ecd969.js.map