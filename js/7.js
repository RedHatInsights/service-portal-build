(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{593:function(e,a,t){"use strict";var n=t(109),r=t.n(n),l=t(110),c=t.n(l),o=t(111),s=t.n(o),i=t(112),m=t.n(i),u=t(113),f=t.n(u),p=t(26),d=t.n(p),h=t(7),E=t.n(h),y=t(1),g=t.n(y),v=t(296),b=t(298),w=t(297),N=t(80),k=function(e){function a(){var e,t;r()(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return t=s()(this,(e=m()(a)).call.apply(e,[this].concat(l))),E()(d()(d()(t)),"state",{searchValue:""}),t}return f()(a,e),c()(a,[{key:"render",value:function(){return g.a.createElement(v.a,{style:{backgroundColor:"#FFFFFF"}},g.a.createElement(b.a,{className:"pf-u-ml-on-md"},g.a.createElement(w.a,{className:"pf-u-ml-sm pf-u-my-sm"},g.a.createElement("div",{className:"pf-c-input-group"},g.a.createElement("input",{className:"pf-c-form-control",input:"true",type:"text",id:"searchItem",name:"searchPlatformItems",placeholder:"Filter...","aria-label":"filter input with platform button"}),g.a.createElement(N.c,{variant:"tertiary",id:"filterPlatformButton"},g.a.createElement("i",{className:"fas fa-search","aria-hidden":"true"}))))))}}]),a}(y.Component);a.a=k},612:function(e,a,t){e.exports=t.p+"fonts/platform-default.svg"},613:function(e,a,t){e.exports=t.p+"fonts/platform-openshift.svg"},614:function(e,a,t){e.exports=t.p+"fonts/platform-amazon.png"},647:function(e,a,t){"use strict";t.r(a);var n=t(50),r=t.n(n),l=t(109),c=t.n(l),o=t(110),s=t.n(o),i=t(111),m=t.n(i),u=t(112),f=t.n(u),p=t(113),d=t.n(p),h=t(26),E=t.n(h),y=t(7),g=t.n(y),v=t(1),b=t.n(v),w=t(302),N=t(51),k=t(0),F=t.n(k),_=t(53),j=t(296),x=t(298),P=t(297),L=t(65),O=t(582),D=t(10),I=t.n(D),T=t(70),A=t.n(T),C=t(103),M=t(89),z=t(194),J=t(280),S=t(195),V=t(279),B=t(612),R=t.n(B),U=t(613),q=t.n(U),G=t(614),H=t.n(G),K=t(583),Q=t(584),W=(t(587),["description","modified"]),X=function(e){switch(e){case"1":return q.a;case"2":return H.a;default:return R.a}},Y=function(e){var a=e.name,t=e.id,n=A()(e,["name","id"]);return b.a.createElement(M.a,{sm:6,md:4,lg:4,xl:3},b.a.createElement(C.a,{to:"/platform/".concat(t),className:"card-link"},b.a.createElement(z.a,{key:t},b.a.createElement(J.a,{className:"pcard_header"},b.a.createElement(K.a,{src:X(n.source_type_id||"0"),defaultSrc:R.a,width:"80",height:"40"})),b.a.createElement(S.a,{className:"pcard_body"},b.a.createElement("h4",null,a),b.a.createElement(Q.a,r()({},I()({name:a},n),{toDisplay:W}))),b.a.createElement(V.a,null))))};Y.propTypes={history:F.a.object,imageUrl:F.a.string,name:F.a.string,source_type_id:F.a.string,id:F.a.string};var Z=Y,$=t(593),ee=t(206),ae=t(599),te=(t(588),t(586)),ne=function(e){function a(){var e,t;c()(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return t=m()(this,(e=f()(a)).call.apply(e,[this].concat(r))),g()(E()(E()(t)),"state",{filteredItems:[],isOpen:!1}),g()(E()(E()(t)),"fetchData",function(){t.props.fetchPlatforms()}),t}return d()(a,e),s()(a,[{key:"componentDidMount",value:function(){this.fetchData(),Object(te.a)()}},{key:"renderToolbar",value:function(){return b.a.createElement(j.a,{className:"toolbar-padding"},b.a.createElement(x.a,null,b.a.createElement(P.a,{className:"pf-u-ml-sm pf-u-my-sm"},b.a.createElement(L.b,{size:"2xl"},"  All Platforms  "))))}},{key:"render",value:function(){var e={items:this.props.platforms.map(function(e){return b.a.createElement(Z,r()({key:e.id},e))}),isLoading:this.props.isLoading};return b.a.createElement(_.Section,null,b.a.createElement($.a,null),b.a.createElement("div",{className:"action_toolbar"},this.renderToolbar()),b.a.createElement(O.a,e),b.a.createElement(ae.a,null))}}]),a}(v.Component);ne.propTypes={filteredItems:F.a.array,platforms:F.a.array,isLoading:F.a.bool,searchFilter:F.a.string,showModal:F.a.func,hideModal:F.a.func,history:F.a.object,fetchPlatforms:F.a.func};a.default=Object(w.a)(Object(N.connect)(function(e){var a=e.platformReducer;return{platforms:a.platforms,isLoading:a.isLoading,searchFilter:a.filterValue}},function(e){return{fetchPlatforms:function(a){return e(Object(ee.c)(a))}}})(ne))}}]);
//# sourceMappingURL=../sourcemaps/7.js.map