(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{897:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(21),a=n(97),l=n(620),u=n(219),c=n(29),f=n(167),s=n(132),p=n(35),b=n(9),m=n(135),d=n(118),h=n(54),v=n(20),w=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function l(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}u((o=o.apply(e,t||[])).next())}))},y=function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},_=function(e){return Object(p.k)({name:e},{limit:100,offset:0}).then((function(e){return e.data.filter((function(e){return e.metadata.user_capabilities.update})).map((function(e){var t=e.name;return{value:e.id,label:t}}))}))},O=function(e,t,n){return{fields:[{component:"copy-name-display",name:"portfolio_item_name",label:t(d.a.name),getName:e,fieldSpy:"portfolio_id"},{component:"initial-select",name:"portfolio_id",label:t(d.a.portfolio),isRequired:!0,loadOptions:Object(s.a)(_),isSearchable:!0,options:n,menuIsPortal:!0}]}};t.default=function(e){var t=e.portfolioId,n=e.portfolioItemId,o=e.closeUrl,s=e.search,p=e.portfolioName,d=Object(v.a)(),_=Object(i.useDispatch)(),g=Object(a.g)().push;return r.a.createElement(l.a,{isOpen:!0,title:d(h.a.copyItemTitle),onClose:function(){return g({pathname:o,search:s})},variant:"small"},r.a.createElement(u.c,{initialValues:{portfolio_id:t},schema:O((function(e){return Object(c.g)().getPortfolioItemNextName(n,e).then((function(e){return e.next_name}))}),d,[{value:t,label:p}]),onSubmit:function(e){return w(void 0,void 0,void 0,(function(){var o;return y(this,(function(r){switch(r.label){case 0:return[4,_(Object(f.i)(e.portfolio_id))];case 1:return o=r.sent().value,[2,_(Object(f.d)(n,e,o)).then((function(t){var n=t.id,o=t.service_offering_source_ref;return g({pathname:b.w,search:"?portfolio="+e.portfolio_id+"&portfolio-item="+n+"&source="+o})})).then((function(){return e.portfolio_id===t&&_(Object(f.f)(t))}))]}}))}))},onCancel:function(){return g({pathname:o,search:s})},templateProps:{submitLabel:d(m.a.save),disableSubmit:["validating","submitting"]}}))}}}]);
//# sourceMappingURL=../sourcemaps/copy-portfolio-item-modal~6f498858.js.map