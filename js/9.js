(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{601:function(e,n,t){"use strict";var a=t(6),r=t(34),o=t.n(r),i=t(60),l=t.n(i),c=t(186),s=t(187),d=new c.AdminsApi;function u(e){return d.fetchPlansWithPortfolioItemId(e).then(function(e){return e},function(e){return console.error(e)})}function p(){return(p=l()(o.a.mark(function e(n){var t,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.newOrder();case 2:return t=e.sent,(a=new c.OrderItem).count=1,a.provider_control_parameters={namespace:"default"},a.portfolio_item_id=n.portfolio_item_id,a.service_plan_ref=n.service_plan_ref,a.service_parameters=n.service_parameters,e.next=11,d.addToOrder(t.id,a);case 11:return e.abrupt("return",d.submitOrder(t.id).then(function(e){return e},function(e){return console.error(e)}));case 12:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}c.ApiClient.instance.basePath=s.a,t.d(n,"b",function(){return m}),t.d(n,"a",function(){return f}),t.d(n,"c",function(){return b});var m=function(e){return{type:a.m,payload:u(e)}},f=function(){return{type:a.r,payload:d.listOrders().then(function(e){return e},function(e){return console.error(e)})}},b=function(e){return{type:a.v,payload:new Promise(function(n){n(function(e){return p.apply(this,arguments)}(e))})}}},610:function(e,n,t){var a=t(643);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(149)(a,r);a.locals&&(e.exports=a.locals)},643:function(e,n,t){(n=e.exports=t(108)(!1)).i(t(203),""),n.push([e.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.toolbar-padding {\n  padding: 24px 24px 0 24px; }\n\n.card-link {\n  cursor: pointer; }\n  .card-link:hover {\n    text-decoration: none; }\n\n.text-align-right {\n  text-align: right; }\n\n.order-tabs {\n  background-color: #FFFFFF;\n  padding: 32px 32px 0 32px; }\n  .order-tabs li {\n    padding: initial; }\n\n.order-data-list .order-cell {\n  align-self: center; }\n\n.order-toolbar-breadcrumbs .pf-c-breadcrumb__item .active {\n  color: var(--pf-c-breadcrumb__item--Color);\n  text-decoration: none;\n  pointer-events: none; }\n",""])},648:function(e,n,t){"use strict";t.r(n);var a=t(10),r=t.n(a),o=t(109),i=t.n(o),l=t(110),c=t.n(l),s=t(111),d=t.n(s),u=t(112),p=t.n(u),m=t(113),f=t.n(m),b=t(26),v=t.n(b),h=t(7),g=t.n(h),E=t(1),x=t.n(E),y=t(51),w=t(282),L=t(284),_=t(283),k=t(305),O=t(184),F=t(285),T=t(301),C=t(293),I=t(306),A=t(601),D=t(0),K=t.n(D),N=t(276),S=t(302),P=t(296),j=t(299),q=t(298),R=t(297),J=t(277),M=t(278),z=(t(610),function(e){var n=e.match.path;return x.a.createElement(P.a,{className:"pf-u-pt-xl pf-u-pr-xl pf-u-pl-xl order-toolbar-breadcrumbs",style:{backgroundColor:"#FFFFFF"}},x.a.createElement(j.a,{"aria-label":"order-toolbar-breadcrumbs"},x.a.createElement(q.a,null,x.a.createElement(R.a,null,x.a.createElement(J.a,null,x.a.createElement(M.a,{isActive:"/portfolios"===n},x.a.createElement(N.a,{exact:!0,to:"/portfolios"},"All Portfolios")),x.a.createElement(M.a,{isActive:"/orders"===n},x.a.createElement(N.a,{exact:!0,to:"/orders"},"Orders")))))),x.a.createElement(j.a,{"aria-label":"order-toolbar-heading"},x.a.createElement(q.a,null,x.a.createElement(R.a,null,x.a.createElement(k.a,null,x.a.createElement(O.b,{component:O.a.h1},"Orders"))))))});z.propTypes={match:K.a.shape({path:K.a.string.isRequired}).isRequired};var B=Object(S.a)(z),H=function(e){function n(){var e,t;i()(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return t=d()(this,(e=p()(n)).call.apply(e,[this].concat(o))),g()(v()(v()(t)),"state",{orders:[],activeTabKey:0,dataListExpanded:{}}),g()(v()(v()(t)),"handleTabClick",function(e,n){return t.setState({activeTabKey:n})}),g()(v()(v()(t)),"handleDataItemToggle",function(e){return t.setState(function(n){var t=n.dataListExpanded;return{dataListExpanded:r()({},t,g()({},e,!t[e]))}})}),g()(v()(v()(t)),"renderDataListItems",function(e){return e.map(function(n,a){return x.a.createElement(w.a,{key:n.id,"aria-labelledby":"".concat(n.id,"-expand"),isExpanded:t.state.dataListExpanded[n.id]},e.id,x.a.createElement(L.a,{id:n.id,"aria-label":"".concat(n.id,"-expand"),"aria-labelledby":"".concat(n.id,"-expand"),onClick:function(){return t.handleDataItemToggle(n.id)},isExpanded:t.state.dataListExpanded[n.id]}),x.a.createElement(_.a,null,x.a.createElement(k.a,null,x.a.createElement(O.b,{component:O.a.h4},"Order ",a),x.a.createElement(O.b,{style:{marginBottom:0},component:O.a.small},n.created_at.toString()))),x.a.createElement(_.a,{className:"order-cell",style:{alignSelf:"center"}},x.a.createElement(k.a,{className:"text-align-right"},x.a.createElement(O.b,{component:O.a.h5},n.state))),x.a.createElement(F.a,{"aria-label":"".concat(n.id,"-content"),isHidden:!t.state.dataListExpanded[n.id]},x.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))})}),t}return f()(n,e),c()(n,[{key:"componentDidMount",value:function(){var e=this;this.props.fetchOrders().then(function(){return e.setState({orders:e.props.orderList.items})})}},{key:"render",value:function(){if(this.props.isLoading.isLoading)return x.a.createElement("div",null,"Loading");var e=this.state,n=e.orders,t=e.activeTabKey;return x.a.createElement("div",null,x.a.createElement(B,null),x.a.createElement("div",null,x.a.createElement(T.a,{className:"order-tabs",activeKey:t,onSelect:this.handleTabClick},x.a.createElement(C.a,{eventKey:0,title:"My orders",className:"pf-u-p-lg"},x.a.createElement(I.a,{"aria-label":"all-orders"},this.renderDataListItems(n))),x.a.createElement(C.a,{eventKey:1,title:"All orders",className:"pf-u-p-lg"},x.a.createElement(I.a,{"aria-label":"all-orders"},this.renderDataListItems(n))))))}}]),n}(E.Component);H.propTypes={orderList:K.a.object,isLoading:K.a.bool,searchFilter:K.a.string,fetchOrders:K.a.func};n.default=Object(y.connect)(function(e){var n=e.orderReducer;return{orderList:{items:n.orders},isLoading:n.isLoading}},function(e){return{fetchOrders:function(){return e(Object(A.a)())}}})(H)}}]);
//# sourceMappingURL=../sourcemaps/9.js.map