(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{628:function(e,t,n){"use strict";var o=n(99),r=function(){return(r=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};t.a=function(e){var t=void 0===e?{}:e,n=t.removeSearch,a=t.keepHash,i=Object(o.g)();return r(r({},i),{push:function(e){var t=e;return a&&i.location.hash.length>0&&(t="object"==typeof t?r(r({},t),{hash:i.location.hash}):""+t+i.location.hash),n?i.push(function(e){return"string"==typeof e?e.split("?")[0]:"object"==typeof e?r(r({},e),{search:void 0}):e}(t)):i.push(t)}})}},948:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(22),i=n(220),c=n(43),u=n.n(c),l=n(5),s=n(132),f=n(35),p=Object(s.a)((function(e,t){return Object(f.e)(e).then((function(n){var o=n.data;if(!e||0===e.trim().length)throw"Required";if(o.find((function(n){return n.name===e&&n.id!==t})))throw"Name has already been taken"}))})),h=function(e,t){var n,o,r,a,i;return{fields:[{label:"schemas.portfolio.name",name:"name",component:u.a.TEXT_FIELD,isRequired:!0,maxLength:(null===(i=null===(a=null===(r=null===(o=null===(n=null==e?void 0:e.components)||void 0===n?void 0:n.schemas)||void 0===o?void 0:o.Portfolio)||void 0===r?void 0:r.properties)||void 0===a?void 0:a.name)||void 0===i?void 0:i.maxLength)||l.f,validate:[function(e){return p(e,t)}]},{label:"schemas.portfolio.description",component:u.a.TEXTAREA,name:"description"}]}},d=n(167),v=n(101),b=n(628),m=n(226),y=n(10),w=n(137),O=n(135),j=n(54),g=n(119),S=n(20),k=function(){return(k=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},E=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{u(o.next(e))}catch(e){a(e)}}function c(e){try{u(o.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((o=o.apply(e,t||[])).next())}))},T=function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};t.default=function(e){var t,n,c=e.removeQuery,u=e.closeTarget,l=e.viewState,s=Object(S.a)(),p=Object(a.useDispatch)(),x=Object(o.useState)(!0),P=x[0],C=x[1],L=Object(o.useContext)(w.a).openApiSchema,R=Object(v.a)(["portfolio"])[0].portfolio,A=Object(b.a)({removeSearch:c,keepHash:!0}).push,D=Object(a.useSelector)((function(e){var t=e.portfolioReducer;return Object(f.g)(t,R)}));return!1===(null===(n=null===(t=null==D?void 0:D.metadata)||void 0===t?void 0:t.user_capabilities)||void 0===n?void 0:n.update)?r.a.createElement(m.a,null):r.a.createElement(i.c,{schema:h(L,R),onSubmit:function(e){return D?(C(!1),p(Object(d.o)(e,l)).then((function(){return A(u)}))):function(e){return E(void 0,void 0,void 0,(function(){var t,n;return T(this,(function(o){switch(o.label){case 0:return t={variant:"success",title:s(j.a.addSuccessTitle),description:s(j.a.addSuccessDescription,{name:e.name,b:function(e){return r.a.createElement("b",{key:"strong"},e)}})},[4,p(Object(d.a)(e,t))];case 1:return[2,(n=o.sent())&&n.value&&n.value.id?A({pathname:y.y,search:"?portfolio="+n.value.id}):A(u)]}}))}))}(e)},onCancel:function(){return A(u)},initialValues:k({},D),isModal:!0,modalProps:{title:s(R?j.a.modalEditTitle:j.a.modalCreateTitle),isOpen:P,onClose:function(){return A(u)},variant:"small"},templateProps:{submitLabel:s(R?O.a.save:g.a.create)}})}}}]);
//# sourceMappingURL=../sourcemaps/add-portfolio~5a4d8549.js.map