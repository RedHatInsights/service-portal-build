(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{425:function(t,e){function o(){return t.exports=o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},o.apply(this,arguments)}t.exports=o},435:function(t,e,o){"use strict";var r=(0,o(52).defineMessages)({removeItemsNotification:{id:"portfolio.notifications.remove.portfolio-items",defaultMessage:"You have removed {count, number} {count, plural, one {product} other {products} } from the {portfolioName} portfolio. <a>Undo</a> if this was a mistake."},removePortfolioNotification:{id:"portfolio.notifications.remove.portfolio",defaultMessage:"The portfolio was removed successfully. You can <a>Undo</a> this action if this was a mistake."},modalCreateTitle:{id:"portfolio.modal.add.title",defaultMessage:"Create portfolio"},modalCreateSubmit:{id:"portfolio.modal.add.create",defaultMessage:"Create"},modalEditTitle:{id:"portfolio.modal.edit.title",defaultMessage:"Edit portfolio"},addProducts:{id:"portfolio.empty.add.products",defaultMessage:"Add products"},emptyNoProducts:{id:"portfolio.empty.no-products",defaultMessage:"No products in your portfolio"},portfoliosPlaceholder:{id:"portfolios.filters.placeholder",defaultMessage:"Filter by portfolio"},portfoliosNoData:{id:"portfolios.empty.noData.title",defaultMessage:"No portfolios"},portfoliosNoDataDescription:{id:"portfolios.empty.noData.description",defaultMessage:"No portfolios match your filter criteria."},portfolioRemoveDescription:{id:"portfolio.remove.modal.description",defaultMessage:"This action will permanently delete portfolio {name} and its data."},portfolioRemoveTitle:{id:"portfolio.remove.modal.title",defaultMessage:"Delete Portfolio?"},portfolioRemoveConfirm:{id:"portfolio.remove.modal.confirm",defaultMessage:"Confirm"},portfolioRemoveCancel:{id:"portfolio.remove.modal.cancel",defaultMessage:"Cancel"},portfolioShareUnknown:{id:"portfolio.share.modal.option.unknown",defaultMessage:"Unknown"},portfolioSharePermissions:{id:"portfolio.share.modal.permissions",defaultMessage:"Select the share permissions"},portfolioShareGroups:{id:"portfolio.share.modal.groups",defaultMessage:"Select a group"},portfolioShareTitle:{id:"portfolio.share.modal.title",defaultMessage:"Share portfolio"},portfolioShareApply:{id:"portfolio.share.modal.apply",defaultMessage:"Apply"},portfolioShareDescription:{id:"portfolio.share.modal.description",defaultMessage:"Share <strong>{name}</strong> portfolio"},addProducstPlatformTitle:{id:"portfolio.add.platform.title.empty",defaultMessage:"Please choose platform"},addProducstPlatformDescription:{id:"portfolio.add.platform.description.empty",defaultMessage:"In order to select products for your portfolio you must choose platform first"},addProducstFilterTitle:{id:"portfolio.add.platform.filter.empty",defaultMessage:"No products match filter parameters"},copyItemTitle:{id:"portfolio.item.copy",defaultMessage:"Copy product"},portfolioItemSurvey:{id:"portfolio.item.detail.actions.survey",defaultMessage:"Edit survey"},portfolioItemOrder:{id:"portfolio.item.detail.actions.order",defaultMessage:"Order"},portfolioItemIconTitle:{id:"portfolio.item.icon.upload.notification",defaultMessage:"Icon upload error"},portfolioItemOverview:{id:"portfolio.item.detail.overview",defaultMessage:"Overview"},portfolioItemSupport:{id:"portfolio.item.detail.support",defaultMessage:"Learn more"},portfolioItemDocumentation:{id:"portfolio.item.detail.documentation",defaultMessage:"Documentation"},portfolioItemDocLink:{id:"portfolio.item.detail.doclink",defaultMessage:"Doc link"},restoreSurvey:{id:"portfolio.item.survey.restore",defaultMessage:"Restore to Ansible Tower version"},surveyTitle:{id:"portfolio.item.survey.edit",defaultMessage:"Editing survey: {name}"},sourceUnavaiable:{id:"portfolio.detail.alert.source.unavailable",defaultMessage:"The platform for this product is unavailable"},objectUnavaiable:{id:"portfolio.detail.alert.unavailable",defaultMessage:"The {object} for this product is no longer available"},backToProducts:{id:"portfolio.detail.back-to-products",defaultMessage:"Back to products"},editProduct:{id:"portfolio.item.edit.title",defaultMessage:"Edit product"}});e.a=r},445:function(t,e,o){"use strict";o.d(e,"g",(function(){return P})),o.d(e,"h",(function(){return w})),o.d(e,"e",(function(){return D})),o.d(e,"f",(function(){return _})),o.d(e,"i",(function(){return T})),o.d(e,"a",(function(){return E})),o.d(e,"b",(function(){return N})),o.d(e,"n",(function(){return M})),o.d(e,"k",(function(){return C})),o.d(e,"l",(function(){return k})),o.d(e,"c",(function(){return F})),o.d(e,"d",(function(){return S})),o.d(e,"m",(function(){return A})),o.d(e,"o",(function(){return R})),o.d(e,"j",(function(){return L}));var r=o(33),n=o.n(r),i=o(425),a=o.n(i),c=o(1),u=o.n(c),f=o(49),s=o.n(f),l=o(0),p=o.n(l),d=o(74),m=o(3),y=o(487),h=o(66),v=o(435),g=o(164);function b(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function O(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?b(Object(o),!0).forEach((function(e){u()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):b(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h.a,e=t.filter,o=s()(t,["filter"]);return{type:m.p,meta:O(O({},h.a),{},{filter:e},o),payload:y.k(e,o)}},P=function(t){return function(e){return e(I(t))}},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h.a;return function(e){return e(I(O(O({},t),{},{storeState:!0,stateKey:"portfolio"})))}},D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h.a;return{type:m.r,meta:{filter:t,storeState:!0,stateKey:"products"},payload:y.j(e.limit,e.offset,t)}},_=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h.a;return{type:m.s,payload:y.i(t,e),meta:O(O({},e),{},{storeState:!0,stateKey:"portfolioItems"})}},T=function(t){return{type:m.o,payload:y.f(t)}},E=function(t){return{type:m.a,payload:y.a(t),meta:{notifications:{fulfilled:{variant:"success",title:"Success adding portfolio",description:"Portfolio ".concat(t.name," was added successfully.")}}}}},N=function(t,e){return{type:m.c,payload:y.b(t,e),meta:{notifications:{fulfilled:{variant:"success",title:"Success adding products",description:"Products were successfully added to portfolio."}}}}},M=function(t,e){return function(o,r){return o({type:m.Z,payload:t}),y.p(t,{getState:r}).then((function(){return o(I(e))})).then((function(){return o({type:d.ADD_NOTIFICATION,payload:{dismissable:!0,variant:"success",title:"Success updating portfolio",description:"The portfolio was updated successfully."}})})).catch((function(t){throw o({type:m.J}),t})).catch((function(t){return o({type:"".concat(m.Z,"_REJECTED"),payload:t})}))}},j=function(t,e,o){return function(r){return r({type:d.CLEAR_NOTIFICATIONS}),y.o(t,e).then((function(t){return r({type:d.ADD_NOTIFICATION,payload:{variant:"success",dismissable:!0,title:"Portfolio ".concat(t.name," has been restored")}}),r(P(o))}))}},C=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(o,r){return o({type:m.e,payload:t}),o({type:m.E,payload:y.l(t).then((function(n){var i=n.restore_key;o({type:d.ADD_NOTIFICATION,payload:{variant:"success",title:"Success removing portfolio",dismissable:!0,description:p.a.createElement(g.a,a()({},v.a.removePortfolioNotification,{values:{a:function(r){return p.a.createElement("a",{href:"#",id:"undo-delete-portfolio-".concat(t),onClick:function(r){r.preventDefault(),o(j(t,i,e))}},r)}}}))}});var c=r().portfolioReducer.portfolios,u=c.meta,f=c.data;return o(P(O(O(O({},e),u),{},{offset:0===f.length?0:u.offset})))})).catch((function(t){throw o({type:m.J}),t}))})}},k=function(t,e){return function(o,r){o({type:"".concat(m.F,"_PENDING")});var n=r().portfolioReducer,i=n.portfolioItems.meta,c=n.selectedPortfolio.id;return y.m(t).then((function(t){return o(_(c,{offset:0,limit:i.limit,filter:""})).then((function(){return t}))})).then((function(r){return o({type:d.ADD_NOTIFICATION,payload:{variant:"success",title:"Products removed",dismissable:!0,description:p.a.createElement(g.a,a()({},v.a.removeItemsNotification,{values:{count:t.length,portfolioName:e,a:function(t){return p.a.createElement("a",{href:"#",id:"restore-portfolio-item-".concat(c),onClick:function(t){t.preventDefault(),o(function(t,e){return function(o){return o({type:"".concat(m.H,"_PENDING")}),y.n(t).then((function(){return o({type:"".concat(m.H,"_FULFILLED")})})).then((function(){return o({type:d.CLEAR_NOTIFICATIONS})})).then((function(){return o(_(e))})).then((function(){return o({type:d.ADD_NOTIFICATION,payload:{variant:"success",dismissable:!0,title:"Products have been restored"}})})).catch((function(t){return o({type:"".concat(m.H,"_REJECTED"),payload:t})}))}}(r,c))}},t)}}}))}})})).then((function(){return o({type:"".concat(m.F,"_FULFILLED")})})).catch((function(t){return o({type:"".concat(m.F,"_REJECTED"),payload:t})}))}},F=function(t){return function(e){return e({type:"COPY_PORTFOLIO_PENDING"}),y.c(t).then((function(t){return e({type:"COPY_PORTFOLIO_FULFILLED"}),e({type:d.ADD_NOTIFICATION,payload:{variant:"success",title:"You have successfully copied a portfolio",description:"".concat(t.name," has been copied."),dismissable:!0}}),t})).catch((function(t){return e({type:"COPY_PORTFOLIO_REJECTED",payload:t})}))}},S=function(t,e,o){return function(r){return y.d(t,e).then((function(t){return r({type:d.ADD_NOTIFICATION,payload:{variant:"success",title:"You have successfully copied a product",description:"".concat(t.name," has been copied into ").concat(o.name),dismissable:!0}}),t})).catch((function(t){return r({type:"COPY_PORTFOLIO_ITEM_REJECTED",payload:t})}))}},A=function(){return{type:m.G}},R=function(t){return function(e,o){return e({type:m.ab,payload:t}),y.q(t,{getState:o}).then((function(t){return e({type:m.X,payload:t}),t})).then((function(t){return e({type:d.ADD_NOTIFICATION,payload:{variant:"success",title:'Product "'.concat(t.name,'" was successfully updated'),dismissable:!0}})})).catch((function(t){throw e({type:m.I}),t})).catch((function(t){return e({type:"".concat(m.ab,"_REJECTED"),payload:t})}))}},L=function(t){return function(e){return e({type:"".concat(m.K,"_PENDING")}),y.h(t).then((function(t){var o=n()(t,2),r=o[0],i=o[1];return e({type:"".concat(m.K,"_FULFILLED"),payload:{portfolioItem:r,source:i}})}))}}},487:function(t,e,o){"use strict";o.d(e,"k",(function(){return P})),o.d(e,"j",(function(){return w})),o.d(e,"f",(function(){return D})),o.d(e,"i",(function(){return _})),o.d(e,"a",(function(){return T})),o.d(e,"b",(function(){return N})),o.d(e,"p",(function(){return j})),o.d(e,"l",(function(){return k})),o.d(e,"m",(function(){return R})),o.d(e,"q",(function(){return x})),o.d(e,"e",(function(){return U})),o.d(e,"n",(function(){return Y})),o.d(e,"c",(function(){return K})),o.d(e,"d",(function(){return G})),o.d(e,"r",(function(){return H})),o.d(e,"h",(function(){return q})),o.d(e,"g",(function(){return Z})),o.d(e,"o",(function(){return B}));var r=o(56),n=o.n(r),i=o(49),a=o.n(i),c=o(87),u=o.n(c),f=o(17),s=o.n(f),l=o(1),p=o.n(l),d=o(84),m=o(13),y=o(119),h=o(66);function v(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function g(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?v(Object(o),!0).forEach((function(e){p()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var b=Object(d.a)(),O=Object(d.e)(),I=Object(d.f)();function P(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h.a,o=e.limit,r=e.offset;return b.get("".concat(m.c,"/portfolios?filter[name][contains_i]=").concat(t,"&limit=").concat(o,"&offset=").concat(r))}function w(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return b.get("".concat(m.c,"/portfolio_items?filter[name][contains_i]=").concat(o,"&limit=").concat(t,"&offset=").concat(e)).then((function(t){var e=t.data.reduce((function(t,e,o){return e.portfolio_id?g(g({},t),{},p()({},e.portfolio_id,t[e.portfolio_id]?[].concat(s()(t[e.portfolio_id]),[o]):[o])):t}),{});return b.get("".concat(m.c,"/portfolios?").concat(Object.keys(e).map((function(t){return"filter[id][]=".concat(t)})).join("&"))).then((function(o){var r=o.data;return{portfolioItems:t,portfolioReference:e,portfolios:r}}))})).then((function(t){var e=t.portfolioItems,o=t.portfolioReference;return t.portfolios.forEach((function(t){var r=t.id,n=t.name;return o[r]&&o[r].forEach((function(t){e.data[t].portfolioName=n}))})),e}))}function D(t){return O.showPortfolio(t)}function _(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h.a,o=e.limit,r=e.offset,n=e.filter,i=void 0===n?"":n;return b.get("".concat(m.c,"/portfolios/").concat(t,"/portfolio_items?filter[name][contains_i]=").concat(i,"&limit=").concat(o,"&offset=").concat(r))}function T(t,e){return E.apply(this,arguments)}function E(){return(E=u()(n.a.mark((function t(e,o){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.createPortfolio(e);case 2:if(!((r=t.sent)&&o&&o.length>0)){t.next=5;break}return t.abrupt("return",N(r,o));case 5:return t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(t,e){return M.apply(this,arguments)}function M(){return(M=u()(n.a.mark((function t(e,o){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.all(o.map((function(t){return I.createPortfolioItem({portfolio_id:e,service_offering_ref:t})}))));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(t,e){return C.apply(this,arguments)}function C(){return(C=u()(n.a.mark((function t(e,o){var r,i;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.id,i=a()(e,["id"]),t.next=3,O.updatePortfolio(r,Object(y.b)(i,"Portfolio",o));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t){return F.apply(this,arguments)}function F(){return(F=u()(n.a.mark((function t(e){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",O.destroyPortfolio(e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(t){return A.apply(this,arguments)}function A(){return(A=u()(n.a.mark((function t(e){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",I.destroyPortfolioItem(e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(t){return L.apply(this,arguments)}function L(){return(L=u()(n.a.mark((function t(e){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.all(e.map(function(){var t=u()(n.a.mark((function t(e){var o,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e);case 2:return o=t.sent,r=o.restore_key,t.abrupt("return",{portfolioItemId:e,restoreKey:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t,e){return J.apply(this,arguments)}function J(){return(J=u()(n.a.mark((function t(e,o){var r,i;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.id,i=a()(e,["id"]),t.next=3,I.updatePortfolioItem(r,Object(y.b)(i,"PortfolioItem",o));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function U(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return b.get("".concat(m.c,"/portfolios"),{params:{filter:{name:t}}})}var Y=function(t){return Promise.all(t.map((function(t){var e=t.portfolioItemId,o=t.restoreKey;return I.unDeletePortfolioItem(e,{restore_key:o})})))},K=function(t){return O.postCopyPortfolio(t)},G=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return I.postCopyPortfolioItem(t,e)},H=function(t,e,o){var r=new FormData;return r.append("content",e,e.name),o?b.patch("".concat(m.c,"/icons/").concat(o),r):(r.append("portfolio_item_id",t),b.post("".concat(m.c,"/icons"),r,{headers:{accept:"application/json","Content-Type":"multipart/form-data; boundary=".concat(r._boundary)}}))},q=function(t){return Promise.all([b.get("".concat(m.c,"/portfolio_items/").concat(t.portfolioItem)),b.get("".concat(m.i,"/sources/").concat(t.source)).catch((function(t){if(404===t.status)return{object:"platform",notFound:!0};throw t}))])},Z=function(t,e){return t.selectedPortfolio&&t.selectedPortfolio.id===e?t.selectedPortfolio:t.portfolios.data.find((function(t){return t.id===e}))},B=function(t,e){return b.post("".concat(m.c,"/portfolios/").concat(t,"/undelete"),{restore_key:e})}}}]);
//# sourceMappingURL=../sourcemaps/lib~add-portfolio~copy-portfolio-item-modal~portfolio~portfolios~products~remove-portfolio~share-por~a2fe5007.js.map