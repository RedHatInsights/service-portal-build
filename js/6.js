(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{588:function(e,n,t){"use strict";var a=t(1),r=t.n(a),o=t(0),i=t.n(o),l=(t(593),function(e){var n=e.children,t=e.paddingBottom;return r.a.createElement("div",{className:"pf-u-pt-xl pf-u-pr-xl pf-u-pl-xl ".concat(t?"pf-u-pb-xl":""," top-toolbar")},n)});l.propTypes={children:i.a.oneOfType([i.a.arrayOf(i.a.node),i.a.node]).isRequired,paddingBottom:i.a.bool},l.defaultProps={paddingBottom:!0},n.a=l},593:function(e,n,t){var a=t(594);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(151)(a,r);a.locals&&(e.exports=a.locals)},594:function(e,n,t){(e.exports=t(110)(!1)).push([e.i,".top-toolbar {\n  background-color: #FFFFFF; }\n  .top-toolbar .pf-c-breadcrumb__item .active {\n    color: var(--pf-c-breadcrumb__item--Color);\n    text-decoration: none;\n    pointer-events: none; }\n  .top-toolbar h2 {\n    margin-bottom: 0 !important; }\n",""])},610:function(e,n,t){"use strict";var a=t(6),r=t(34),o=t.n(r),i=t(10),l=t.n(i),c=t(72),d=t.n(c),s=t(60),p=t.n(s),u=t(187),m=t(67),f=new u.AdminsApi;function b(e){return f.fetchPlansWithPortfolioItemId(e)}function v(e){return g.apply(this,arguments)}function g(){return(g=p()(o.a.mark(function e(n){var t,a,r,i,c,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.service_parameters,a=t.providerControlParameters,r=d()(t,["providerControlParameters"]),i=d()(n,["service_parameters"]),e.next=3,f.newOrder();case 3:return c=e.sent,(s=new u.OrderItem).count=1,s=l()({},s,i,{service_parameters:r,provider_control_parameters:a}),e.next=9,f.addToOrder(c.id,s);case 9:return e.abrupt("return",f.submitOrder(c.id));case 10:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}u.ApiClient.instance.basePath=m.a,t.d(n,"b",function(){return h}),t.d(n,"a",function(){return x}),t.d(n,"c",function(){return E});var h=function(e){return{type:a.m,payload:b(e)}},x=function(){return{type:a.q,payload:f.listOrders().then(function(e){return e.data})}},E=function(e){return{type:a.t,payload:v(e)}}},618:function(e,n,t){var a=t(646);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(151)(a,r);a.locals&&(e.exports=a.locals)},646:function(e,n,t){(n=e.exports=t(110)(!1)).i(t(203),""),n.push([e.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.toolbar-padding {\n  padding: 24px 24px 0 24px; }\n\n.card-link, .card-link:hover, .card-link:active {\n  text-decoration: none !important;\n  cursor: pointer !important;\n  color: #282d33 !important;\n  font-weight: 400 !important; }\n\n.text-align-right {\n  text-align: right; }\n\n.w-100 {\n  width: 100%; }\n\n.align-items-base {\n  align-items: baseline; }\n\n.modal-form-right-align .pf-m-action:last-child .data-driven-forms__pf4-button-group:first-child {\n  margin-left: auto; }\n\n.line-clamp {\n  display: -webkit-box;\n  -webkit-line-clamp: 6;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  word-wrap: break-word; }\n\n.order-tabs {\n  background-color: #FFFFFF;\n  padding: 32px 32px 0 32px; }\n  .order-tabs li {\n    padding: initial; }\n\n.order-data-list .order-cell {\n  align-self: center; }\n",""])},650:function(e,n,t){"use strict";t.r(n);var a=t(10),r=t.n(a),o=t(111),i=t.n(o),l=t(112),c=t.n(l),d=t(113),s=t.n(d),p=t(114),u=t.n(p),m=t(115),f=t.n(m),b=t(26),v=t.n(b),g=t(8),h=t.n(g),x=t(1),E=t.n(x),y=t(52),w=t(282),k=t(284),L=t(283),O=t(307),F=t(186),T=t(285),_=t(304),C=t(295),I=t(311),A=t(610),P=t(0),D=t.n(P),K=t(276),N=t(312),S=t(302),q=t(301),B=t(300),j=t(277),R=t(278),J=t(588),M=(t(618),function(e){var n=e.match.path;return E.a.createElement(J.a,{paddingBottom:!1},E.a.createElement(S.a,{"aria-label":"order-toolbar-breadcrumbs"},E.a.createElement(q.a,null,E.a.createElement(B.a,null,E.a.createElement(j.a,null,E.a.createElement(R.a,{isActive:"/portfolios"===n},E.a.createElement(K.a,{exact:!0,to:"/portfolios"},"All Portfolios")),E.a.createElement(R.a,{isActive:"/orders"===n},E.a.createElement(K.a,{exact:!0,to:"/orders"},"Orders")))))),E.a.createElement(S.a,{"aria-label":"order-toolbar-heading"},E.a.createElement(q.a,null,E.a.createElement(B.a,null,E.a.createElement(O.a,null,E.a.createElement(F.b,{component:F.a.h1},"Orders"))))))});M.propTypes={match:D.a.shape({path:D.a.string.isRequired}).isRequired};var z=Object(N.a)(M),H=function(e){function n(){var e,t;i()(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return t=s()(this,(e=u()(n)).call.apply(e,[this].concat(o))),h()(v()(v()(t)),"state",{orders:[],activeTabKey:0,dataListExpanded:{}}),h()(v()(v()(t)),"handleTabClick",function(e,n){return t.setState({activeTabKey:n})}),h()(v()(v()(t)),"handleDataItemToggle",function(e){return t.setState(function(n){var t=n.dataListExpanded;return{dataListExpanded:r()({},t,h()({},e,!t[e]))}})}),h()(v()(v()(t)),"renderDataListItems",function(e){return e.map(function(n,a){return E.a.createElement(w.a,{key:n.id,"aria-labelledby":"".concat(n.id,"-expand"),isExpanded:t.state.dataListExpanded[n.id]},e.id,E.a.createElement(k.a,{id:n.id,"aria-label":"".concat(n.id,"-expand"),"aria-labelledby":"".concat(n.id,"-expand"),onClick:function(){return t.handleDataItemToggle(n.id)},isExpanded:t.state.dataListExpanded[n.id]}),E.a.createElement(L.a,null,E.a.createElement(O.a,null,E.a.createElement(F.b,{component:F.a.h4},"Order ",a),E.a.createElement(F.b,{style:{marginBottom:0},component:F.a.small},n.created_at.toString()))),E.a.createElement(L.a,{className:"order-cell",style:{alignSelf:"center"}},E.a.createElement(O.a,{className:"text-align-right"},E.a.createElement(F.b,{component:F.a.h5},n.state))),E.a.createElement(T.a,{"aria-label":"".concat(n.id,"-content"),isHidden:!t.state.dataListExpanded[n.id]},E.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))})}),t}return f()(n,e),c()(n,[{key:"componentDidMount",value:function(){var e=this;this.props.fetchOrders().then(function(){return e.setState({orders:e.props.orderList.items})})}},{key:"render",value:function(){if(this.props.isLoading.isLoading)return E.a.createElement("div",null,"Loading");var e=this.state,n=e.orders,t=e.activeTabKey;return E.a.createElement("div",null,E.a.createElement(z,null),E.a.createElement("div",null,E.a.createElement(_.a,{className:"order-tabs",activeKey:t,onSelect:this.handleTabClick},E.a.createElement(C.a,{eventKey:0,title:"My orders",className:"pf-u-p-lg"},E.a.createElement(I.a,{"aria-label":"all-orders"},this.renderDataListItems(n))),E.a.createElement(C.a,{eventKey:1,title:"All orders",className:"pf-u-p-lg"},E.a.createElement(I.a,{"aria-label":"all-orders"},this.renderDataListItems(n))))))}}]),n}(x.Component);H.propTypes={orderList:D.a.object,isLoading:D.a.bool,searchFilter:D.a.string,fetchOrders:D.a.func};n.default=Object(y.connect)(function(e){var n=e.orderReducer;return{orderList:{items:n.orders},isLoading:n.isLoading}},function(e){return{fetchOrders:function(){return e(Object(A.a)())}}})(H)}}]);
//# sourceMappingURL=../sourcemaps/6.js.map