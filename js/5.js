(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{644:function(n,e,a){"use strict";var t=a(1),o=a.n(t),r=(a(657),a(0)),i=a.n(r),l=a(134),s=a(68),c=a(124),p=a(102),d=a(250),f=function(){return o.a.createElement(p.a,null,o.a.createElement(d.b,{component:d.a.h1},"No items found"))},u=function(n){var e=n.isLoading,a=n.items;return o.a.createElement(t.Fragment,null,e?o.a.createElement(c.b,null):o.a.createElement(s.Section,{type:"content"},o.a.createElement(l.a,{gutter:"md"},a.length>0?a:o.a.createElement(f,null))))};u.propTypes={isLoading:i.a.bool,items:i.a.array},e.a=u},645:function(n,e,a){"use strict";var t=a(92),o=a.n(t),r=a(1),i=a.n(r),l=a(0),s=a.n(l),c=function(n){var e=n.value;return i.a.createElement("div",{className:"card_element"},e)};c.propTypes={value:s.a.oneOfType([s.a.string,s.a.number,s.a.arrayOf(s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]))]).isRequired};var p=function(n){var e=n.toDisplay,a=void 0===e?[]:e,t=o()(n,["toDisplay"]);return i.a.createElement("div",null,a.map(function(n){return i.a.createElement(c,{key:"card-prop-".concat(n),value:t[n]})}))};p.propTypes={toDisplay:s.a.arrayOf(s.a.string)},p.defaultProps={toDisplay:[]},e.a=p},654:function(n,e,a){"use strict";var t=a(66),o=a.n(t),r=a(92),i=a.n(r),l=a(1),s=a.n(l),c=a(0),p=function(n){var e=n.src,a=i()(n,["src"]);return s.a.createElement("img",o()({src:e},a))};p.propTypes={src:a.n(c).a.string.isRequired},e.a=p},656:function(n,e,a){"use strict";a.d(e,"a",function(){return t});var t=function(){return document.getElementById("root").scrollTo({behavior:"smooth",top:0,left:0})}},657:function(n,e,a){var t=a(658);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(215)(t,o);t.locals&&(n.exports=t.locals)},658:function(n,e,a){(e=n.exports=a(137)(!1)).i(a(272),""),e.push([n.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.toolbar-padding {\n  padding: 24px 24px 0 24px; }\n",""])},659:function(n,e,a){n.exports=a.p+"fonts/vendor-openshift.svg"},662:function(n,e,a){var t=a(667);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(215)(t,o);t.locals&&(n.exports=t.locals)},665:function(n,e,a){var t=a(688);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(215)(t,o);t.locals&&(n.exports=t.locals)},667:function(n,e,a){(e=n.exports=a(137)(!1)).i(a(272),""),e.push([n.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.toolbar-padding {\n  padding: 24px 24px 0 24px; }\n\n.pcard_header {\n  height: 60px; }\n\n.pcard_body {\n  height: 140px;\n  overflow: hidden;\n  font-size: small; }\n\n.pcard_element {\n  text-align: left;\n  font-size: small; }\n",""])},668:function(n,e,a){"use strict";var t=a(138),o=a.n(t),r=a(139),i=a.n(r),l=a(140),s=a.n(l),c=a(141),p=a.n(c),d=a(142),f=a.n(d),u=a(35),m=a.n(u),g=a(12),h=a.n(g),v=a(1),y=a.n(v),b=a(363),x=a(365),w=a(364),k=a(126),E=function(n){function e(){var n,a;o()(this,e);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return a=s()(this,(n=p()(e)).call.apply(n,[this].concat(r))),h()(m()(m()(a)),"state",{searchValue:""}),a}return f()(e,n),i()(e,[{key:"render",value:function(){return y.a.createElement(b.a,{style:{backgroundColor:"#FFFFFF"}},y.a.createElement(x.a,{className:"pf-u-ml-on-md"},y.a.createElement(w.a,{className:"pf-u-ml-sm pf-u-my-sm"},y.a.createElement("div",{className:"pf-c-input-group"},y.a.createElement("input",{className:"pf-c-form-control",input:"true",type:"text",id:"searchItem",name:"searchPlatformItems",placeholder:"Filter...","aria-label":"filter input with platform button"}),y.a.createElement(k.c,{variant:"tertiary",id:"filterPlatformButton"},y.a.createElement("i",{className:"fas fa-search","aria-hidden":"true"}))))))}}]),e}(v.Component);e.a=E},688:function(n,e,a){(e=n.exports=a(137)(!1)).i(a(272),""),e.push([n.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.toolbar-padding {\n  padding: 24px 24px 0 24px; }\n\n/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.toolbar-padding {\n  padding: 24px 24px 0 24px; }\n\n.searchToolbar {\n  background-color: white;\n  padding: 10px; }\n\n.space-between-toolbar-items > div {\n  margin-right: var(--pf-global--gutter);\n  align-self: flex-end; }\n\n.searchPlatforms {\n  min-width: 30%; }\n  .searchPlatforms > div {\n    width: 100%; }\n\n/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.toolbar-padding {\n  padding: 24px 24px 0 24px; }\n\n.pcard_header {\n  height: 60px; }\n\n.pcard_body {\n  height: 140px;\n  overflow: hidden;\n  font-size: small; }\n\n.pcard_element {\n  text-align: left;\n  font-size: small; }\n\n.admin-dashboard {\n  border: 0;\n  background-color: white;\n  box-shadow: 0px 0px 2px;\n  font-size: var(--pf-global--FontSize--md);\n  margin: var(--pf-global--spacer--xl);\n  display: block; }\n\n.side_bar {\n  background-color: white; }\n\n.action-toolbar {\n  margin-top: 35px;\n  margin-left: 25px;\n  margin-right: 25px; }\n",""])},694:function(n,e,a){"use strict";var t=a(66),o=a.n(t),r=a(138),i=a.n(r),l=a(139),s=a.n(l),c=a(140),p=a.n(c),d=a(141),f=a.n(d),u=a(142),m=a.n(u),g=a(35),h=a.n(g),v=a(12),y=a.n(v),b=a(1),x=a.n(b),w=(a(662),a(0)),k=a.n(w),E=a(659),I=a.n(E),C=a(654),P=a(111),D=a(263),T=a(355),z=a(264),O=a(354),F=a(645),N=function(n){var e=n.type,a=void 0===e?"checkbox":e,t=n.id,o=n.onChange,r=n.checked,i=void 0!==r&&r;return x.a.createElement("div",{style:{float:"right"}},x.a.createElement("input",{type:a,id:t,checked:i,onChange:o,"aria-label":"card checkbox"}))};N.propTypes={type:k.a.string,id:k.a.string.isRequired,checked:k.a.bool,onChange:k.a.func.isRequired};var _=N,j=["description"],L=function(n){function e(){var n,a;i()(this,e);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return a=p()(this,(n=f()(e)).call.apply(n,[this].concat(o))),y()(h()(h()(a)),"state",{isOpen:!0}),a}return m()(e,n),s()(e,[{key:"render",value:function(){return x.a.createElement(P.a,{key:this.props.id,sm:6,md:4,lg:4,xl:3},x.a.createElement(D.a,{key:this.props.id},x.a.createElement(T.a,{className:"pcard_header"},x.a.createElement(C.a,{src:this.props.imageUrl||I.a,width:"30",height:"20"}),this.props.editMode&&x.a.createElement(_,{id:this.props.id,checked:this.props.checked,onChange:this.props.onToggleItemSelect})),x.a.createElement(z.a,{className:"pcard_body"},x.a.createElement("h4",null,this.props.name),x.a.createElement(F.a,o()({},this.props,{toDisplay:j}))),x.a.createElement(O.a,null)))}}]),e}(x.a.Component);L.propTypes={imageUrl:k.a.string,id:k.a.string,name:k.a.string,editMode:k.a.bool,checked:k.a.bool,onToggleItemSelect:k.a.func};e.a=L},879:function(n,e,a){"use strict";a.r(e);var t=a(66),o=a.n(t),r=a(138),i=a.n(r),l=a(139),s=a.n(l),c=a(140),p=a.n(c),d=a(141),f=a.n(d),u=a(142),m=a.n(u),g=a(35),h=a.n(g),v=a(12),y=a.n(v),b=a(1),x=a.n(b),w=a(67),k=a(0),E=a.n(k),I=a(125),C=a(280),P=a(644),D=a(668),T=a(694),z=a(656),O=(a(665),function(n){function e(){var n,a;i()(this,e);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return a=p()(this,(n=f()(e)).call.apply(n,[this].concat(o))),y()(h()(h()(a)),"state",{platformId:"",filteredItems:[]}),a}return m()(e,n),s()(e,[{key:"fetchData",value:function(n){this.props.fetchSelectedPlatform(n),this.props.fetchPlatformItems(n)}},{key:"componentDidMount",value:function(){this.fetchData(this.props.match.params.id),Object(z.a)()}},{key:"componentDidUpdate",value:function(n){n.match.params.id!==this.props.match.params.id&&(this.fetchData(this.props.match.params.id),Object(z.a)())}},{key:"render",value:function(){var n={items:this.props.platformItems.map(function(n){return x.a.createElement(T.a,o()({key:n.id},n))}),isLoading:this.props.isPlatformDataLoading},e=this.props.platform?this.props.platform.name:"";return x.a.createElement(b.Fragment,null,x.a.createElement(D.a,null),x.a.createElement("div",{className:"toolbar-padding"},e&&x.a.createElement(I.b,{size:"2xl"}," ",e)),x.a.createElement(P.a,n))}}]),e}(b.Component));O.propTypes={filteredItems:E.a.object,isPlatformDataLoading:E.a.bool,match:E.a.object,fetchPlatformItems:E.a.func.isRequired,fetchSelectedPlatform:E.a.func,platform:E.a.shape({name:E.a.string}),platformItems:E.a.array},O.defaultProps={platformItems:[]},e.default=Object(w.connect)(function(n){var e=n.platformReducer,a=e.selectedPlatform,t=e.platformItems,o=e.isPlatformDataLoading;return{platform:a,platformItems:a&&t[a.id],isPlatformDataLoading:!a||o}},function(n){return{fetchSelectedPlatform:function(e){return n(Object(C.d)(e))},fetchPlatformItems:function(e){return n(Object(C.b)(e))}}})(O)}}]);
//# sourceMappingURL=../sourcemaps/5.js.map