(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{667:function(e,a,t){"use strict";var n=t(137),r=t.n(n),l=t(138),c=t.n(l),o=t(139),s=t.n(o),i=t(140),m=t.n(i),u=t(141),f=t.n(u),p=t(35),d=t.n(p),h=t(11),y=t.n(h),E=t(1),g=t.n(E),v=t(361),b=t(363),w=t(362),N=t(124),k=function(e){function a(){var e,t;r()(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return t=s()(this,(e=m()(a)).call.apply(e,[this].concat(l))),y()(d()(d()(t)),"state",{searchValue:""}),t}return f()(a,e),c()(a,[{key:"render",value:function(){return g.a.createElement(v.a,{style:{backgroundColor:"#FFFFFF"}},g.a.createElement(b.a,{className:"pf-u-ml-on-md"},g.a.createElement(w.a,{className:"pf-u-ml-sm pf-u-my-sm"},g.a.createElement("div",{className:"pf-c-input-group"},g.a.createElement("input",{className:"pf-c-form-control",input:"true",type:"text",id:"searchItem",name:"searchPlatformItems",placeholder:"Filter...","aria-label":"filter input with platform button"}),g.a.createElement(N.c,{variant:"tertiary",id:"filterPlatformButton"},g.a.createElement("i",{className:"fas fa-search","aria-hidden":"true"}))))))}}]),a}(E.Component);a.a=k},722:function(e,a,t){e.exports=t.p+"fonts/platform-default.svg"},723:function(e,a,t){e.exports=t.p+"fonts/platform-openshift.svg"},724:function(e,a,t){e.exports=t.p+"fonts/platform-amazon.png"},878:function(e,a,t){"use strict";t.r(a);var n=t(66),r=t.n(n),l=t(137),c=t.n(l),o=t(138),s=t.n(o),i=t(139),m=t.n(i),u=t(140),f=t.n(u),p=t(141),d=t.n(p),h=t(35),y=t.n(h),E=t(11),g=t.n(E),v=t(1),b=t.n(v),w=t(366),N=t(67),k=t(0),F=t.n(k),_=t(61),j=t(361),x=t(363),P=t(362),L=t(123),O=t(642),D=t(19),I=t.n(D),T=t(90),A=t.n(T),C=(t(661),t(722)),M=t.n(C),z=t(723),J=t.n(z),S=t(724),V=t.n(S),B=t(652),R=t(643),U=t(109),q=t(261),G=t(354),H=t(262),K=t(353),Q=["description","modified"],W=function(e){switch(e){case"1":return J.a;case"2":return V.a;default:return M.a}},X=function(e){var a=e.name,t=e.id,n=A()(e,["name","id"]);return b.a.createElement(U.a,{sm:6,md:4,lg:4,xl:3},b.a.createElement(q.a,{className:"card_style",key:t},b.a.createElement(G.a,{className:"pcard_header"},b.a.createElement(B.a,{src:W(n.source_type_id||"0"),defaultSrc:M.a,width:"80",height:"40"})),b.a.createElement(H.a,{className:"pcard_body"},b.a.createElement("h4",null,a),b.a.createElement(R.a,r()({},I()({name:a},n),{toDisplay:Q}))),b.a.createElement(K.a,null)))};X.propTypes={history:F.a.object,imageUrl:F.a.string,name:F.a.string,source_type_id:F.a.string,id:F.a.string};var Y=X,Z=t(667),$=t(279),ee=t(692),ae=(t(664),t(654)),te=function(e){function a(){var e,t;c()(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return t=m()(this,(e=f()(a)).call.apply(e,[this].concat(r))),g()(y()(y()(t)),"state",{filteredItems:[],isOpen:!1}),g()(y()(y()(t)),"fetchData",function(){t.props.fetchPlatforms()}),t}return d()(a,e),s()(a,[{key:"componentDidMount",value:function(){this.fetchData(),Object(ae.a)()}},{key:"renderToolbar",value:function(){return b.a.createElement(j.a,null,b.a.createElement(x.a,null,b.a.createElement(P.a,{className:"pf-u-ml-sm pf-u-my-sm"},b.a.createElement(L.b,{size:"2xl"},"  All Platforms  "))))}},{key:"render",value:function(){var e={items:this.props.platforms.map(function(e){return b.a.createElement(Y,r()({key:e.id},e))}),isLoading:this.props.isLoading};return b.a.createElement(_.Section,null,b.a.createElement(Z.a,null),b.a.createElement("div",{className:"action_toolbar"},this.renderToolbar()),b.a.createElement(O.a,e),b.a.createElement(ee.a,null))}}]),a}(v.Component);te.propTypes={filteredItems:F.a.array,platforms:F.a.array,isLoading:F.a.bool,searchFilter:F.a.string,showModal:F.a.func,hideModal:F.a.func,history:F.a.object,fetchPlatforms:F.a.func};a.default=Object(w.a)(Object(N.connect)(function(e){var a=e.platformReducer;return{platforms:a.platforms,isLoading:a.isLoading,searchFilter:a.filterValue}},function(e){return{fetchPlatforms:function(a){return e(Object($.c)(a))}}})(te))}}]);
//# sourceMappingURL=../sourcemaps/7.js.map