(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1029:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a(600),s=a(878),o=a(849),i=a(160),u=a(853),m=a(333),f=a(331),d=a(598),p=a(599),b=a(808),g=a(664),E=a(680),O=a(728),h=a(727),v=a(840),j=a.n(v),I=a(709),y=a(638),w=a(20),x=a(705),M=a(810),C=a(217),_=a(594),N=a(595),P=a(614),S=a(615),z=a(811),k=a.n(z),W=function(e){var t=e.orderItem,a=e.progressMessages,n=e.formatMessage;return r.a.createElement(_.a,{hasGutter:!0},r.a.createElement(N.a,{md:12,lg:6,xl:4},r.a.createElement(P.a,{hasGutter:!0},r.a.createElement(S.a,null,r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(m.a,null,r.a.createElement(i.a,{className:"pf-u-mb-md",component:i.b.h2},n(y.a.orderItemParameters))),(null==t?void 0:t.service_parameters)&&r.a.createElement(k.a,{src:t.service_parameters})))))),r.a.createElement(N.a,{md:12,lg:6,xl:8},r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(m.a,null,r.a.createElement(i.a,{className:"pf-u-mb-md",component:i.b.h2},n(y.a.orderProgressMessages))),r.a.createElement(k.a,{src:a})))))},A=a(135),D=a(119),F=function(){return(F=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},L=function(){for(var e=0,t=0,a=arguments.length;t<a;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<a;t++)for(var l=arguments[t],c=0,s=l.length;c<s;c++,r++)n[r]=l[c];return n};t.default=function(){var e=Object(w.a)(),t=Object(n.useState)(!0),a=t[0],v=t[1],_=Object(l.useDispatch)(),N=Object(l.useSelector)((function(e){return e.orderReducer.orderDetail})).order,P=Object(l.useSelector)((function(e){return e.orderReducer.orderProvision})),S=Object(n.useContext)(A.a).permissions,z=Object(D.b)(S,["catalog:order_processes:link"]);if(!a&&function(e){return!e||!e.orderItems||0===e.orderItems.length}(P))return r.a.createElement(c.a,{id:"no-order-provision"},r.a.createElement(s.a,{direction:{default:"column"},grow:{default:"grow"}},r.a.createElement(c.a,null,r.a.createElement(j.a,{size:"xl"})),r.a.createElement(c.a,null,r.a.createElement(o.a,{headingLevel:"h1",size:"2xl"},e(y.a.noOrderProvision)))));var k=[{title:"Updated",cellFormatters:z?[b.b]:[]},{title:"Type"},{title:"Activity"},{title:"State"}],V=function(e,t){var a,n=Object(x.b)(e.state);return{id:e.id,isOpen:!1,cells:[{title:r.a.createElement(i.a,{className:"pf-u-mb-0",component:i.b.small},r.a.createElement(C.DateFormat,{date:e.updated_at,type:"exact"}))},{title:r.a.createElement(i.a,{className:"pf-u-mb-0",component:i.b.small},r.a.createElement(g.a,null,(a=e.process_scope||t(y.a.defaultOrderItemType),(null==a?void 0:a.charAt(0).toUpperCase())+(null==a?void 0:a.slice(1)))))},{title:r.a.createElement(i.a,{className:"pf-u-mb-0",component:i.b.small},r.a.createElement(g.a,null,e.name))},{title:r.a.createElement(g.a,null,r.a.createElement(u.a,F({},M.a[e.state],{variant:"outline"}),t(x.a[n])))}]}},G=function(e,t,a){var n=[V(e,t)];return z&&P.progressMessages&&Object.values(P.progressMessages).length>0&&n.push(function(e,t,a,n){return{parent:2*n,cells:[{title:r.a.createElement(W,{orderItem:e,progressMessages:t,formatMessage:a})}]}}(e,Object.values(P.progressMessages).filter((function(t){return t.order_item_id===e.id})),t,a)),n},H=function(){return P.orderItems.reduce((function(t,a,n){var r=G(a,e,n);return L(t,r)}),[])},J=Object(n.useState)(H()),R=J[0],T=J[1];Object(n.useEffect)((function(){v(!0),Promise.all([_(Object(I.d)(N.id))]).then((function(){return v(!1)}))}),[]),Object(n.useEffect)((function(){T(H())}),[null==P?void 0:P.orderItems]);return r.a.createElement(m.a,null,a?r.a.createElement(c.a,null,r.a.createElement(s.a,{direction:{default:"column"},grow:{default:"grow"}},r.a.createElement(c.a,{id:"fetching-order-provision"},r.a.createElement(o.a,{headingLevel:"h1",size:"xl"},e(y.a.fetchingOrderProvision))),r.a.createElement(c.a,null,r.a.createElement(f.a,{size:"xl"})))):r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(i.a,{className:"pf-u-mb-md",component:i.b.h2},e(y.a.activity)),r.a.createElement(E.a,{"aria-label":"Order provisioning activity",cells:k,rows:R,onCollapse:z?function(e,t,a,n){var r,l,c=(r=R,l=n.id,r.map((function(e){return e.id===l?F(F({},e),{isOpen:!e.isOpen}):F({},e)})));T(c)}:void 0},r.a.createElement(O.a,null),r.a.createElement(h.a,null)))))}},673:function(e,t,a){"use strict";var n=a(129);const r=Object(n.a)({name:"CheckIcon",height:512,width:512,svgPath:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",yOffset:0,xOffset:0});t.a=r},840:function(e,t,a){"use strict";t.__esModule=!0,t.InfoIconConfig={name:"InfoIcon",height:512,width:192,svgPath:"M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z",yOffset:0,xOffset:0},t.InfoIcon=a(26).createIcon(t.InfoIconConfig),t.default=t.InfoIcon},878:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(1),r=a(0),l=a(2),c=a(793),s=a.n(c),o=a(27);const i=e=>{var{children:t=null,className:a="",spacer:c,spaceItems:i,grow:u,shrink:m,flex:f,direction:d,alignItems:p,alignContent:b,alignSelf:g,align:E,justifyContent:O,display:h,fullWidth:v,flexWrap:j}=e,I=Object(n.__rest)(e,["children","className","spacer","spaceItems","grow","shrink","flex","direction","alignItems","alignContent","alignSelf","align","justifyContent","display","fullWidth","flexWrap"]);return r.createElement("div",Object.assign({className:Object(l.css)(s.a.flex,Object(o.e)(c,s.a),Object(o.e)(i,s.a),Object(o.e)(u,s.a),Object(o.e)(m,s.a),Object(o.e)(f,s.a),Object(o.e)(d,s.a),Object(o.e)(p,s.a),Object(o.e)(b,s.a),Object(o.e)(g,s.a),Object(o.e)(E,s.a),Object(o.e)(O,s.a),Object(o.e)(h,s.a),Object(o.e)(v,s.a),Object(o.e)(j,s.a),a)},I),t)};i.displayName="Flex"}}]);
//# sourceMappingURL=../sourcemaps/order-provision~31ecd969.js.map