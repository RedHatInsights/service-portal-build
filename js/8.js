(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{693:function(e,n,r){"use strict";var t=r(12),a=r(65),o=r.n(a),i=r(127),c=r.n(i),u=r(250),s=r(251),l=new u.AdminsApi;function d(e){return l.fetchPlansWithPortfolioItemId(e).then(function(e){return e},function(e){return console.error(e)})}function p(){return(p=c()(o.a.mark(function e(n){var r,t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.newOrder();case 2:return r=e.sent,(t=new u.OrderItem).count=1,t.provider_control_parameters={namespace:"default"},t.portfolio_item_id=n.portfolio_item_id,t.service_plan_ref=n.service_plan_ref,t.service_parameters=n.service_parameters,e.next=11,l.addToOrder(r.id,t);case 11:return e.abrupt("return",l.submitOrder(r.id).then(function(e){return e},function(e){return console.error(e)}));case 12:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}u.ApiClient.instance.basePath=s.a,r.d(n,"b",function(){return f}),r.d(n,"a",function(){return m}),r.d(n,"c",function(){return h});var f=function(e){return{type:t.m,payload:d(e)}},m=function(){return{type:t.r,payload:l.listOrders().then(function(e){return e},function(e){return console.error(e)})}},h=function(e){return{type:t.v,payload:new Promise(function(n){n(function(e){return p.apply(this,arguments)}(e))})}}},879:function(e,n,r){"use strict";r.r(n);var t=r(19),a=r.n(t),o=r(137),i=r.n(o),c=r(138),u=r.n(c),s=r(139),l=r.n(s),d=r(140),p=r.n(d),f=r(141),m=r.n(f),h=r(1),v=r.n(h),y=r(67),b=r(693),g=r(0),_=r.n(g),w=r(61),O=r(100),E=function(e){var n=e.isLoading,r=e.items;return n||r&&r.length>0?(r&&r.length>0&&r.sort(function(e,n){var r=new Date(e.created_at);return new Date(n.created_at)-r}),v.a.createElement(v.a.Fragment,null,v.a.createElement("br",null),v.a.createElement(O.a,null,v.a.createElement("div",null,n&&v.a.createElement("span",{color:"#00b9e4"}," Loading..."))),v.a.createElement(w.Section,{type:"content"},r&&r.length>0&&v.a.createElement(w.Table,{header:Object.keys(r[0]),rows:r.map(function(e){var n={};return n.cells=Object.values(e).map(function(e){return void 0===e?"":e.toString()}),n})})))):v.a.createElement(w.PageHeader,null,v.a.createElement(w.PageHeaderTitle,{title:"No Orders"}))};E.propTypes={isLoading:_.a.bool,items:_.a.array};var L=E,k=function(e){function n(){return i()(this,n),l()(this,p()(n).apply(this,arguments))}return m()(n,e),u()(n,[{key:"componentDidMount",value:function(){this.props.fetchOrders()}},{key:"render",value:function(){var e=a()({},this.props.orderList,{isLoading:this.props.isLoading});return v.a.createElement("div",{className:"pf-l-stack__item pf-m-secondary "},v.a.createElement(L,e))}}]),n}(h.Component);k.propTypes={orderList:_.a.object,isLoading:_.a.bool,searchFilter:_.a.string,fetchOrders:_.a.func};n.default=Object(y.connect)(function(e){var n=e.orderReducer;return{orderList:{items:n.orders},isLoading:n.isLoading}},function(e){return{fetchOrders:function(){return e(Object(b.a)())}}})(k)}}]);
//# sourceMappingURL=../sourcemaps/8.js.map