(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{581:function(e,t,n){"use strict";var r=n(85),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};t.a=function(e){var t=void 0===e?{}:e,n=t.removeSearch,o=t.keepHash,i=Object(r.g)();return a(a({},i),{push:function(e){var t=e;return o&&i.location.hash.length>0&&(t="object"==typeof t?a(a({},t),{hash:i.location.hash}):""+t+i.location.hash),n?i.push(function(e){return"string"==typeof e?e.split("?")[0]:"object"==typeof e?a(a({},e),{search:void 0}):e}(t)):i.push(t)}})}},953:function(e,t,n){"use strict";n.r(t);var r=n(13),a=n.n(r),o=n(762),i=n.n(o),c=n(763),u=n.n(c),s=n(26),l=n.n(s),p=n(0),f=n.n(p),d=n(4),b=n.n(d),h=n(19),v=n(178),m=n(33),O=n.n(m),j=n(5),y=n(106),g=n(25),w=Object(y.a)((function(e,t){return Object(g.e)(e).then((function(n){var r=n.data;if(!e||0===e.trim().length)throw"Required";if(r.find((function(n){return n.name===e&&n.id!==t})))throw"Name has already been taken"}))})),P=function(e,t){var n,r,a,o,i;return{fields:[{label:"schemas.portfolio.name",name:"name",component:O.a.TEXT_FIELD,isRequired:!0,maxLength:(null===(i=null===(o=null===(a=null===(r=null===(n=null==e?void 0:e.components)||void 0===n?void 0:n.schemas)||void 0===r?void 0:r.Portfolio)||void 0===a?void 0:a.properties)||void 0===o?void 0:o.name)||void 0===i?void 0:i.maxLength)||j.f,validate:[function(e){return w(e,t)}]},{label:"schemas.portfolio.description",component:O.a.TEXTAREA,name:"description"}]}},S=n(135),T=n(86),E=n(581),k=n(188),D=n(9),R=n(109),x=n(108),q=n(48),C=n(96),L=n(18);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H=function(e){var t,n,r=e.removeQuery,a=e.closeTarget,o=e.viewState,c=Object(L.a)(),s=Object(h.useDispatch)(),d=Object(p.useState)(!0),b=l()(d,2),m=b[0],O=b[1],j=Object(p.useContext)(R.a).openApiSchema,y=Object(T.a)(["portfolio"]),w=l()(y,1)[0].portfolio,A=Object(E.a)({removeQuery:r,keepHash:!0}).push,H=Object(h.useSelector)((function(e){var t=e.portfolioReducer;return Object(g.g)(t,w)})),J=function(){var e=u()(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={variant:"success",title:c(q.a.addSuccessTitle),description:c(q.a.addSuccessDescription,{name:t.name,b:function(e){return f.a.createElement("b",{key:"strong"},e)}})},e.next=3,s(Object(S.a)(t,n));case 3:return r=e.sent,e.abrupt("return",r&&r.value&&r.value.id?A({pathname:D.y,search:"?portfolio=".concat(r.value.id)}):A(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=w&&H&&Object.keys(H).length>0;return!1===(null==H||null===(t=H.metadata)||void 0===t||null===(n=t.user_capabilities)||void 0===n?void 0:n.update)?f.a.createElement(k.a,null):f.a.createElement(v.c,{schema:P(j,w),onSubmit:function(e){return H?(O(!1),s(Object(S.o)(e,o)).then((function(){return A(a)}))):J(e,o)},onCancel:function(){return A(a)},initialValues:Q({},H),isModal:!0,modalProps:{title:c(w?q.a.modalEditTitle:q.a.modalCreateTitle),isOpen:m,onClose:function(){return A(a)},variant:"small",loading:!w||X},templateProps:{submitLabel:c(w?x.a.save:C.a.create)}})};H.propTypes={removeQuery:b.a.bool,closeTarget:b.a.oneOfType([b.a.string,b.a.shape({pathname:b.a.string.isRequired,search:b.a.string})]).isRequired,viewState:b.a.shape({count:b.a.number,limit:b.a.number,offset:b.a.number,filter:b.a.string})};t.default=H}}]);
//# sourceMappingURL=../sourcemaps/add-portfolio~5a4d8549.js.map