(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{644:function(e,a,n){"use strict";var t=n(1),o=n.n(t),r=(n(657),n(0)),i=n.n(r),l=n(134),c=n(68),s=n(124),p=n(102),u=n(250),f=function(){return o.a.createElement(p.a,null,o.a.createElement(u.b,{component:u.a.h1},"No items found"))},d=function(e){var a=e.isLoading,n=e.items;return o.a.createElement(t.Fragment,null,a?o.a.createElement(s.b,null):o.a.createElement(c.Section,{type:"content"},o.a.createElement(l.a,{gutter:"md"},n.length>0?n:o.a.createElement(f,null))))};d.propTypes={isLoading:i.a.bool,items:i.a.array},a.a=d},645:function(e,a,n){"use strict";var t=n(92),o=n.n(t),r=n(1),i=n.n(r),l=n(0),c=n.n(l),s=function(e){var a=e.value;return i.a.createElement("div",{className:"card_element"},a)};s.propTypes={value:c.a.oneOfType([c.a.string,c.a.number,c.a.arrayOf(c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]))]).isRequired};var p=function(e){var a=e.toDisplay,n=void 0===a?[]:a,t=o()(e,["toDisplay"]);return i.a.createElement("div",null,n.map(function(e){return i.a.createElement(s,{key:"card-prop-".concat(e),value:t[e]})}))};p.propTypes={toDisplay:c.a.arrayOf(c.a.string)},p.defaultProps={toDisplay:[]},a.a=p},656:function(e,a,n){"use strict";n.d(a,"a",function(){return t});var t=function(){return document.getElementById("root").scrollTo({behavior:"smooth",top:0,left:0})}},657:function(e,a,n){var t=n(658);"string"==typeof t&&(t=[[e.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(215)(t,o);t.locals&&(e.exports=t.locals)},658:function(e,a,n){(a=e.exports=n(137)(!1)).i(n(272),""),a.push([e.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n",""])},719:function(e,a,n){var t=n(862);"string"==typeof t&&(t=[[e.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(215)(t,o);t.locals&&(e.exports=t.locals)},862:function(e,a,n){(a=e.exports=n(137)(!1)).i(n(272),""),a.push([e.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.card-image-header {\n  padding: 0 !important; }\n\n.portfolio-card-header {\n  min-height: 100px;\n  max-height: 200px;\n  background-size: stretch;\n  color: white;\n  padding: 8px 24px; }\n",""])},863:function(e,a,n){e.exports=n.p+"fonts/default-portfolio.jpg"},881:function(e,a,n){"use strict";n.r(a);var t=n(66),o=n.n(t),r=n(138),i=n.n(r),l=n(139),c=n.n(l),s=n(140),p=n.n(s),u=n(141),f=n.n(u),d=n(142),m=n.n(d),g=n(35),v=n.n(g),h=n(12),y=n.n(h),E=n(1),b=n.n(E),x=n(67),w=n(0),k=n.n(w),C=n(128),O=n(186),T=n(363),F=n(365),N=n(364),P=n(125),j=n(126),L=n(13),V=n(662),D=n.n(V),A=n(690),I=n.n(A),M=n(644),R=n(19),S=n.n(R),q=n(92),z=n.n(q),U=(n(719),n(645)),B=n(111),J=n(263),X=n(355),_=n(264),G=n(354),H=n(299),K=n(298),Q=n(250),W=n(863),Y=n.n(W),Z=function(e){var a=e.backgroundSrc,n=e.portfolioName,t=e.headerActions;return b.a.createElement("div",{className:"portfolio-card-header",style:{backgroundImage:"url(".concat(a,")")}},b.a.createElement(T.a,null,b.a.createElement(F.a,{style:{marginLeft:"auto",paddingBottom:16}},t)),b.a.createElement(Q.b,{className:"elipsis-text-overflow",component:Q.a.h4},n))};Z.propTypes={backgroundSrc:k.a.string,portfolioName:k.a.string.isRequired,headerActions:k.a.arrayOf(k.a.node)},Z.defaultProps={backgroundSrc:Y.a,headerActions:[]};var $=Z,ee=["description","modified"],ae=function(e){var a,n,t=e.imageUrl,r=e.name,i=e.id,l=z()(e,["imageUrl","name","id"]);return b.a.createElement(B.a,{sm:6,md:4,lg:4,xl:3},b.a.createElement(C.a,{style:{textDecoration:"none"},to:"/portfolio/".concat(i)},b.a.createElement(J.a,null,b.a.createElement(X.a,{className:"card-image-header"},b.a.createElement($,{portfolioName:r,headerActions:(a=r,n=i,[b.a.createElement(C.a,{key:"edit-portfolio-action",to:"/portfolios/edit/".concat(n)},b.a.createElement(j.c,{variant:"plain","aria-label":"edit-portfolio-".concat(a),onClick:function(){return console.log("Edit portfolio api helper not available.")}},b.a.createElement(H.a,{fill:"white"}))),b.a.createElement(C.a,{key:"remove-portfolio-action",to:"/portfolios/remove/".concat(n)},b.a.createElement(j.c,{key:"remove-portfolio-action",variant:"plain","aria-label":"remove-portfolio-".concat(a),onClick:function(){return console.log("Remove portfolio api helper not available.")}},b.a.createElement(K.a,{fill:"white"})))])})),b.a.createElement(_.a,null,b.a.createElement(U.a,o()({},S()({name:r,imageUrl:t},l),{toDisplay:ee}))),b.a.createElement(G.a,null))))};ae.propTypes={history:k.a.object,imageUrl:k.a.string,name:k.a.string,id:k.a.string};var ne=ae,te=n(691),oe=n(692),re=(n(693),function(e){var a=e.onFilterChange,n=e.filterValue,t=z()(e,["onFilterChange","filterValue"]);return b.a.createElement(T.a,{className:"searchToolbar"},b.a.createElement(oe.a,o()({},t,{searchValue:n,onFilterChange:a,placeholder:"Find a Portfolio"})),b.a.createElement(te.a,t))});re.propTypes={onFilterChange:k.a.func.isRequired,filterValue:k.a.string};var ie=re,le=n(274),ce=n(667),se=n(722),pe=n(720),ue=(n(643),n(656)),fe=function(e){function a(){var e,n;i()(this,a);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return n=p()(this,(e=f()(a)).call.apply(e,[this].concat(o))),y()(v()(v()(n)),"state",{filteredItems:[],isOpen:!1,filterValue:""}),y()(v()(v()(n)),"fetchData",function(){n.props.fetchPortfolios()}),y()(v()(v()(n)),"onFilterChange",function(e){return n.setState({filterValue:e})}),n}return m()(a,e),c()(a,[{key:"componentDidMount",value:function(){this.fetchData(),Object(ue.a)()}},{key:"renderToolbar",value:function(){return b.a.createElement(T.a,{className:Object(L.b)(I.a.justifyContentSpaceBetween,D.a.mxXl,D.a.myMd)},b.a.createElement(F.a,null,b.a.createElement(N.a,{className:Object(L.b)(D.a.mrXl)},b.a.createElement(P.b,{size:"2xl"}," All Portfolios"))),b.a.createElement(F.a,{className:"pf-u-ml-auto-on-xl"},b.a.createElement(N.a,null,b.a.createElement(C.a,{to:"/portfolios/add-portfolio"},b.a.createElement(j.c,{variant:"primary","aria-label":"Create Portfolio"},"Create Portfolio")))))}},{key:"render",value:function(){var e=this,a={items:this.props.portfolios.filter(function(a){return a.name.toLowerCase().includes(e.state.filterValue.trim().toLowerCase())}).map(function(e){return b.a.createElement(ne,o()({key:e.id},e))}),isLoading:this.props.isLoading&&0===this.props.portfolios.length};return b.a.createElement(E.Fragment,null,b.a.createElement(ie,{onFilterChange:this.onFilterChange,filterValue:this.state.filterValue}),b.a.createElement(O.a,{exact:!0,path:"/portfolios/add-portfolio",component:se.a}),b.a.createElement(O.a,{exact:!0,path:"/portfolios/edit/:id",component:se.a}),b.a.createElement(O.a,{exact:!0,path:"/portfolios/remove/:id",component:pe.a}),this.renderToolbar(),b.a.createElement(M.a,a))}}]),a}(E.Component);fe.propTypes={filteredItems:k.a.array,portfolios:k.a.array,platforms:k.a.array,isLoading:k.a.bool,searchFilter:k.a.string,showModal:k.a.func,hideModal:k.a.func,fetchPortfolios:k.a.func.isRequired},fe.defaultProps={portfolios:[]};a.default=Object(x.connect)(function(e){var a=e.portfolioReducer;return{portfolios:a.portfolios,isLoading:a.isLoading,searchFilter:a.filterValue}},function(e){return{fetchPortfolios:function(a){return e(Object(le.d)(a))},hideModal:function(){return e(Object(ce.a)())},showModal:function(a,n){e(Object(ce.b)({modalProps:a,modalType:n}))}}})(fe)}}]);
//# sourceMappingURL=../sourcemaps/6.js.map