(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{637:function(n,e){function a(){return n.exports=a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},a.apply(this,arguments)}n.exports=a},639:function(n,e,a){"use strict";var t=a(1),o=a.n(t),r=(a(648),a(0)),i=a.n(r),l=a(61),s=a(336),c=function(n){var e=n.isLoading,a=n.items;return e||(a&&a.length)>0?o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("div",null,e&&o.a.createElement("span",null," Loading...")),o.a.createElement(l.Section,{type:"content"},o.a.createElement(s.a,{gutter:"md"},a))):e?void 0:o.a.createElement(l.Section,{type:"content"},o.a.createElement("div",null))};c.propTypes={isLoading:i.a.bool,items:i.a.array},e.a=c},640:function(n,e,a){"use strict";var t=a(253),o=a.n(t),r=a(1),i=a.n(r),l=a(0),s=a.n(l),c=function(n){var e=n.value;return i.a.createElement("div",{className:"card_element"},e)};c.propTypes={value:s.a.oneOfType([s.a.string,s.a.number,s.a.arrayOf(s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]))]).isRequired};var p=function(n){var e=n.toDisplay,a=void 0===e?[]:e,t=o()(n,["toDisplay"]);return i.a.createElement("div",null,a.map(function(n){return i.a.createElement(c,{key:"card-prop-".concat(n),value:t[n]})}))};p.propTypes={toDisplay:s.a.arrayOf(s.a.string)},p.defaultProps={toDisplay:[]},e.a=p},643:function(n,e,a){"use strict";var t=a(637),o=a.n(t),r=a(253),i=a.n(r),l=a(1),s=a.n(l),c=a(0),p=function(n){var e=n.src,a=i()(n,["src"]);return s.a.createElement("img",o()({src:e},a))};p.propTypes={src:a.n(c).a.string.isRequired},e.a=p},648:function(n,e,a){var t=a(649);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(204)(t,o);t.locals&&(n.exports=t.locals)},649:function(n,e,a){(e=n.exports=a(140)(!1)).i(a(252),""),e.push([n.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n",""])},650:function(n,e,a){n.exports=a.p+"fonts/vendor-openshift.svg"},654:function(n,e,a){var t=a(657);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(204)(t,o);t.locals&&(n.exports=t.locals)},655:function(n,e,a){var t=a(668);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(204)(t,o);t.locals&&(n.exports=t.locals)},657:function(n,e,a){(e=n.exports=a(140)(!1)).i(a(252),""),e.push([n.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.pcard_header {\n  height: 60px; }\n\n.pcard_body {\n  height: 140px;\n  overflow: hidden;\n  font-size: small; }\n\n.pcard_element {\n  text-align: left;\n  font-size: small; }\n",""])},658:function(n,e,a){"use strict";var t=a(11),o=a.n(t),r=a(12),i=a.n(r),l=a(92),s=a.n(l),c=a(93),p=a.n(c),d=a(94),f=a.n(d),u=a(49),m=a.n(u),v=a(3),g=a.n(v),h=a(1),y=a.n(h),b=a(338),x=a(340),w=a(339),k=a(129),E=function(n){function e(){var n,a;o()(this,e);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return a=s()(this,(n=p()(e)).call.apply(n,[this].concat(r))),g()(m()(m()(a)),"state",{searchValue:""}),a}return f()(e,n),i()(e,[{key:"render",value:function(){return y.a.createElement(b.a,{style:{backgroundColor:"#FFFFFF"}},y.a.createElement(x.a,{className:"pf-u-ml-on-md"},y.a.createElement(w.a,{className:"pf-u-ml-sm pf-u-my-sm"},y.a.createElement("div",{className:"pf-c-input-group"},y.a.createElement("input",{className:"pf-c-form-control",input:"true",type:"text",id:"searchItem",name:"searchPlatformItems",placeholder:"Filter...","aria-label":"filter input with platform button"}),y.a.createElement(k.c,{variant:"tertiary",id:"filterPlatformButton"},y.a.createElement("i",{className:"fas fa-search","aria-hidden":"true"}))))))}}]),e}(h.Component);e.a=E},668:function(n,e,a){(e=n.exports=a(140)(!1)).i(a(252),""),e.push([n.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.searchToolbar {\n  background-color: white;\n  padding: 10px; }\n\n.space-between-toolbar-items > div {\n  margin-right: var(--pf-global--gutter);\n  align-self: flex-end; }\n\n.searchPlatforms {\n  min-width: 30%; }\n  .searchPlatforms > div {\n    width: 100%; }\n\n/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.pcard_header {\n  height: 60px; }\n\n.pcard_body {\n  height: 140px;\n  overflow: hidden;\n  font-size: small; }\n\n.pcard_element {\n  text-align: left;\n  font-size: small; }\n\n.admin-dashboard {\n  border: 0;\n  background-color: white;\n  box-shadow: 0px 0px 2px;\n  font-size: var(--pf-global--FontSize--md);\n  margin: var(--pf-global--spacer--xl);\n  display: block; }\n\n.side_bar {\n  background-color: white; }\n\n.action-toolbar {\n  margin-top: 35px;\n  margin-left: 25px;\n  margin-right: 25px; }\n",""])},676:function(n,e,a){"use strict";var t=a(637),o=a.n(t),r=a(11),i=a.n(r),l=a(12),s=a.n(l),c=a(92),p=a.n(c),d=a(93),f=a.n(d),u=a(94),m=a.n(u),v=a(49),g=a.n(v),h=a(3),y=a.n(h),b=a(1),x=a.n(b),w=(a(654),a(0)),k=a.n(w),E=a(650),I=a.n(E),C=a(643),P=a(337),D=a(325),T=a(328),z=a(326),O=a(327),L=a(640),_=function(n){var e=n.type,a=void 0===e?"checkbox":e,t=n.id,o=n.onChange,r=n.checked,i=void 0!==r&&r;return x.a.createElement("div",{style:{float:"right"}},x.a.createElement("input",{type:a,id:t,checked:i,onChange:o,"aria-label":"card checkbox"}))};_.propTypes={type:k.a.string,id:k.a.string.isRequired,checked:k.a.bool,onChange:k.a.func.isRequired};var F=_,N=["description"],S=function(n){function e(){var n,a;i()(this,e);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return a=p()(this,(n=f()(e)).call.apply(n,[this].concat(o))),y()(g()(g()(a)),"state",{isOpen:!0}),a}return m()(e,n),s()(e,[{key:"render",value:function(){return x.a.createElement(P.a,{key:this.props.id,sm:6,md:4,lg:4,xl:3},x.a.createElement(D.a,{key:this.props.id},x.a.createElement(T.a,{className:"pcard_header"},x.a.createElement(C.a,{src:this.props.imageUrl||I.a,width:"30",height:"20"}),this.props.editMode&&x.a.createElement(F,{id:this.props.id,checked:this.props.checkedItems.includes(this.props.id),onChange:this.props.onToggleItemSelect})),x.a.createElement(z.a,{className:"pcard_body"},x.a.createElement("h4",null,this.props.name),x.a.createElement(L.a,o()({},this.props,{toDisplay:N}))),x.a.createElement(O.a,null)))}}]),e}(x.a.Component);S.propTypes={imageUrl:k.a.string,id:k.a.string,name:k.a.string,editMode:k.a.bool,checkedItems:k.a.array,onToggleItemSelect:k.a.func};e.a=S},844:function(n,e,a){"use strict";a.r(e);var t=a(637),o=a.n(t),r=a(11),i=a.n(r),l=a(12),s=a.n(l),c=a(92),p=a.n(c),d=a(93),f=a.n(d),u=a(94),m=a.n(u),v=a(49),g=a.n(v),h=a(3),y=a.n(h),b=a(1),x=a.n(b),w=a(64),k=a(0),E=a.n(k),I=a(128),C=a(61),P=a(260),D=a(639),T=a(658),z=a(676),O=(a(655),function(n){function e(){var n,a;i()(this,e);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return a=p()(this,(n=f()(e)).call.apply(n,[this].concat(o))),y()(g()(g()(a)),"state",{platformId:"",filteredItems:[]}),a}return m()(e,n),s()(e,[{key:"fetchData",value:function(n){this.props.fetchSelectedPlatform(n),this.props.fetchPlatformItems(n)}},{key:"componentDidMount",value:function(){this.fetchData(this.props.match.params.id)}},{key:"componentDidUpdate",value:function(n){n.match.params.id!==this.props.match.params.id&&this.fetchData(this.props.match.params.id)}},{key:"render",value:function(){var n={items:this.props.platformItems.map(function(n){return x.a.createElement(z.a,o()({key:n.id},n))}),isLoading:this.props.isPlatformDataLoading},e=this.props.platform?this.props.platform.name:"";return x.a.createElement(C.Main,{style:{marginLeft:0,paddingLeft:0,paddingTop:0}},x.a.createElement(T.a,null),x.a.createElement("div",{style:{marginLeft:25,paddingTop:40}},e&&x.a.createElement(I.b,{size:"2xl"}," ",e)),x.a.createElement(D.a,n))}}]),e}(b.Component));O.propTypes={filteredItems:E.a.object,isPlatformDataLoading:E.a.bool,match:E.a.object,fetchPlatformItems:E.a.func.isRequired,fetchSelectedPlatform:E.a.func,platform:E.a.shape({name:E.a.string}),platformItems:E.a.array},z.a.defaultProps={platformItems:[]},e.default=Object(w.connect)(function(n){var e=n.platformReducer,a=e.selectedPlatform,t=e.platformItems,o=e.isPlatformDataLoading;return{platform:a,platformItems:t,isPlatformDataLoading:!a||o}},function(n){return{fetchSelectedPlatform:function(e){return n(Object(P.c)(e))},fetchPlatformItems:function(e){return n(Object(P.a)(e))}}})(O)}}]);
//# sourceMappingURL=../sourcemaps/5.js.map