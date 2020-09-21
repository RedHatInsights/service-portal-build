(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{568:function(e,t,r){"use strict";var a=r(19),o=Object(a.b)({noItems:{id:"common.filtering.noItems",defaultMessage:"No items found"},filterByProduct:{id:"common.filtering.filterByProduct",defaultMessage:"Filter by product"},noResults:{id:"common.filtering.noResults",defaultMessage:"No results found"},noResultsDescription:{id:"common.filtering.noResultsDescription",defaultMessage:"No results match the filter criteria. Remove all filters or clear all filters to show results."},clearFilters:{id:"common.filtering.clear-filters",defaultMessage:"Clear all filters"},noProducts:{id:"common.filtering.no-products",defaultMessage:"No products yet"},noRecords:{id:"commonMessages.noRecords",defaultMessage:"No records"},filterByTitle:{id:"tableToolbar.filterByTitle",defaultMessage:"Filter by {title}"},noResultsFound:{id:"tableToolbar.noResultsFound",defaultMessage:"No results found"},noResult:{id:"tableToolbar.noResult",defaultMessage:"No {results}"},unknown:{id:"commonMessages.unknown",defaultMessage:"Unknown"}});t.a=o},570:function(e,t,r){"use strict";var a=r(83),o=function(){return(o=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};t.a=function(e){var t=void 0===e?{}:e,r=t.removeSearch,n=t.keepHash,i=Object(a.g)();return o(o({},i),{push:function(e){var t=e;return n&&i.location.hash.length>0&&(t="object"==typeof t?o(o({},t),{hash:i.location.hash}):""+t+i.location.hash),r?i.push(function(e){return"string"==typeof e?e.split("?")[0]:"object"==typeof e?o(o({},e),{search:void 0}):e}(t)):i.push(t)}})}},573:function(e,t,r){var a=r(646);e.exports=function(e,t){if(null==e)return{};var r,o,n=a(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}},592:function(e,t,r){var a=r(608),o=r(609),n=r(297),i=r(610);e.exports=function(e){return a(e)||o(e)||n(e)||i()}},606:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(1),o=a.__importStar(r(0)),n=a.__importStar(r(14)),i=r(51),s=r(2),l=a.__importDefault(r(69)),u=r(616);!function(e){e.small="small",e.medium="medium",e.large="large",e.default="default"}(t.ModalVariant||(t.ModalVariant={}));class c extends o.Component{constructor(e){super(e),this.boxId="",this.labelId="",this.descriptorId="",this.handleEscKeyClick=e=>{const{onEscapePress:t}=this.props;e.keyCode===i.KEY_CODES.ESCAPE_KEY&&this.props.isOpen&&(t?t(e):this.props.onClose())},this.getElement=e=>"function"==typeof e?e():e||document.body,this.toggleSiblingsFromScreenReaders=e=>{const{appendTo:t}=this.props,r=this.getElement(t).children;for(const t of Array.from(r))t!==this.state.container&&(e?t.setAttribute("aria-hidden",""+e):t.removeAttribute("aria-hidden"))},this.isEmpty=e=>null==e||""===e;const t=c.currentId++,r=t+1,a=t+2;this.boxId=e.id||"pf-modal-part-"+t,this.labelId="pf-modal-part-"+r,this.descriptorId="pf-modal-part-"+a,this.state={container:void 0}}componentDidMount(){const{appendTo:e,title:t,"aria-label":r,"aria-labelledby":a,hasNoBodyWrapper:o,header:n}=this.props,i=this.getElement(e),u=document.createElement("div");this.setState({container:u}),i.appendChild(u),i.addEventListener("keydown",this.handleEscKeyClick,!1),this.props.isOpen?i.classList.add(s.css(l.default.backdropOpen)):i.classList.remove(s.css(l.default.backdropOpen)),this.isEmpty(t)&&this.isEmpty(r)&&this.isEmpty(a)&&console.error("Modal: Specify at least one of: title, aria-label, aria-labelledby."),this.isEmpty(r)&&this.isEmpty(a)&&(o||n)&&console.error("Modal: When using hasNoBodyWrapper or setting a custom header, ensure you assign an accessible name to the the modal container with aria-label or aria-labelledby.")}componentDidUpdate(){const{appendTo:e}=this.props,t=this.getElement(e);this.props.isOpen?(t.classList.add(s.css(l.default.backdropOpen)),this.toggleSiblingsFromScreenReaders(!0)):(t.classList.remove(s.css(l.default.backdropOpen)),this.toggleSiblingsFromScreenReaders(!1))}componentWillUnmount(){const{appendTo:e}=this.props,t=this.getElement(e);this.state.container&&t.removeChild(this.state.container),t.removeEventListener("keydown",this.handleEscKeyClick,!1),t.classList.remove(s.css(l.default.backdropOpen))}render(){const e=this.props,{appendTo:t,onEscapePress:r,"aria-labelledby":s,"aria-label":l,"aria-describedby":c,title:d,ouiaId:p,ouiaSafe:f}=e,m=a.__rest(e,["appendTo","onEscapePress","aria-labelledby","aria-label","aria-describedby","title","ouiaId","ouiaSafe"]),{container:h}=this.state;return i.canUseDOM&&h?n.createPortal(o.createElement(u.ModalContent,Object.assign({},m,{boxId:this.boxId,labelId:this.labelId,descriptorId:this.descriptorId,title:d,"aria-label":l,"aria-describedby":c,"aria-labelledby":s,ouiaId:p,ouiaSafe:f})),h):null}}t.Modal=c,c.displayName="Modal",c.currentId=0,c.defaultProps={className:"",isOpen:!1,title:"","aria-label":"",showClose:!0,"aria-describedby":"","aria-labelledby":"",id:void 0,actions:[],onClose:()=>{},variant:"default",hasNoBodyWrapper:!1,appendTo:()=>document.body,ouiaSafe:!0}},608:function(e,t,r){var a=r(298);e.exports=function(e){if(Array.isArray(e))return a(e)}},609:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},610:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},615:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(1),o=a.__importStar(r(0)),n=a.__importDefault(r(87)),i=r(2);t.Stack=e=>{var{hasGutter:t=!1,className:r="",children:s=null,component:l="div"}=e,u=a.__rest(e,["hasGutter","className","children","component"]);const c=l;return o.createElement(c,Object.assign({},u,{className:i.css(n.default.stack,t&&n.default.modifiers.gutter,r)}),s)},t.Stack.displayName="Stack"},616:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(1),o=a.__importStar(r(0)),n=r(51),i=a.__importDefault(r(24)),s=a.__importDefault(r(99)),l=r(2),u=r(51),c=r(617),d=r(618),p=r(619),f=r(620),m=r(621),h=r(622),b=r(623),v=r(624);t.ModalContent=e=>{var{children:r,className:g="",isOpen:_=!1,header:y=null,description:O=null,title:j="","aria-label":x="","aria-describedby":S,"aria-labelledby":M,showClose:N=!0,footer:E=null,actions:B=[],onClose:w=(()=>{}),variant:k="default",width:P=-1,boxId:I,labelId:C,descriptorId:D,disableFocusTrap:T=!1,hasNoBodyWrapper:F=!1,ouiaId:R,ouiaSafe:A=!0}=e,G=a.__rest(e,["children","className","isOpen","header","description","title","aria-label","aria-describedby","aria-labelledby","showClose","footer","actions","onClose","variant","width","boxId","labelId","descriptorId","disableFocusTrap","hasNoBodyWrapper","ouiaId","ouiaSafe"]);if(!_)return null;const L=y?o.createElement(b.ModalBoxHeader,null,y):j&&o.createElement(b.ModalBoxHeader,null,o.createElement(v.ModalBoxTitle,{title:j,id:C,className:l.css(i.default.modalBoxTitle)}),O&&o.createElement(h.ModalBoxDescription,{id:D},O)),U=E?o.createElement(m.ModalBoxFooter,null,E):B.length>0&&o.createElement(m.ModalBoxFooter,null,B),W=F?r:o.createElement(d.ModalBoxBody,Object.assign({},G,!O&&!S&&{id:D}),r),H=-1===P?{}:{width:P},K=o.createElement(f.ModalBox,Object.assign({id:I,style:H,className:g,variant:k,"aria-label":x,"aria-labelledby":(()=>{if(null===M)return null;const e=[];return""!==(x&&I)&&e.push(x&&I),M&&e.push(M),j&&e.push(C),e.join(" ")})(),"aria-describedby":S||(F?null:D)},u.getOUIAProps(t.ModalContent.displayName,R,A)),N&&o.createElement(p.ModalBoxCloseButton,{onClose:w}),L,W,U);return o.createElement(c.Backdrop,null,o.createElement(n.FocusTrap,{active:!T,focusTrapOptions:{clickOutsideDeactivates:!0},className:l.css(s.default.bullseye)},K))},t.ModalContent.displayName="ModalContent"},617:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(1),o=a.__importStar(r(0)),n=r(2),i=a.__importDefault(r(69));t.Backdrop=e=>{var{children:t=null,className:r=""}=e,s=a.__rest(e,["children","className"]);return o.createElement("div",Object.assign({},s,{className:n.css(i.default.backdrop,r)}),t)},t.Backdrop.displayName="Backdrop"},618:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(1),o=a.__importStar(r(0)),n=r(2),i=a.__importDefault(r(24));t.ModalBoxBody=e=>{var{children:t=null,className:r=""}=e,s=a.__rest(e,["children","className"]);return o.createElement("div",Object.assign({},s,{className:n.css(i.default.modalBoxBody,r)}),t)},t.ModalBoxBody.displayName="ModalBoxBody"},619:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(1),o=a.__importStar(r(0)),n=r(173),i=a.__importDefault(r(96));t.ModalBoxCloseButton=e=>{var{className:t="",onClose:r=(()=>{})}=e,s=a.__rest(e,["className","onClose"]);return o.createElement(n.Button,Object.assign({className:t,variant:"plain",onClick:r,"aria-label":"Close"},s),o.createElement(i.default,null))},t.ModalBoxCloseButton.displayName="ModalBoxCloseButton"},620:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(1),o=a.__importStar(r(0)),n=r(2),i=a.__importDefault(r(24));t.ModalBox=e=>{var{children:t,className:r="",variant:s="default","aria-labelledby":l,"aria-label":u="","aria-describedby":c}=e,d=a.__rest(e,["children","className","variant","aria-labelledby","aria-label","aria-describedby"]);return o.createElement("div",Object.assign({},d,{role:"dialog","aria-label":u||null,"aria-labelledby":l||null,"aria-describedby":c,"aria-modal":"true",className:n.css(i.default.modalBox,r,"large"===s&&i.default.modifiers.lg,"small"===s&&i.default.modifiers.sm,"medium"===s&&i.default.modifiers.md)}),t)},t.ModalBox.displayName="ModalBox"},621:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(1),o=a.__importStar(r(0)),n=r(2),i=a.__importDefault(r(24));t.ModalBoxFooter=e=>{var{children:t=null,className:r=""}=e,s=a.__rest(e,["children","className"]);return o.createElement("footer",Object.assign({},s,{className:n.css(i.default.modalBoxFooter,r)}),t)},t.ModalBoxFooter.displayName="ModalBoxFooter"},622:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(1),o=a.__importStar(r(0)),n=r(2),i=a.__importDefault(r(24));t.ModalBoxDescription=e=>{var{children:t=null,className:r="",id:s=""}=e,l=a.__rest(e,["children","className","id"]);return o.createElement("div",Object.assign({},l,{id:s,className:n.css(i.default.modalBoxDescription,r)}),t)},t.ModalBoxDescription.displayName="ModalBoxDescription"},623:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(1),o=a.__importStar(r(0)),n=r(2);t.ModalBoxHeader=e=>{var{children:t=null,className:r=""}=e,i=a.__rest(e,["children","className"]);return o.createElement("header",Object.assign({className:n.css("pf-c-modal-box__header",r)},i),t)},t.ModalBoxHeader.displayName="ModalBoxHeader"},624:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(1),o=a.__importStar(r(0)),n=a.__importDefault(r(24)),i=r(2),s=r(286);t.ModalBoxTitle=e=>{var{className:t="",id:r,title:l}=e,u=a.__rest(e,["className","id","title"]);const[c,d]=o.useState(!1),p=o.useRef();return o.useLayoutEffect(()=>{d(p.current&&p.current.offsetWidth<p.current.scrollWidth)},[]),c?o.createElement(s.Tooltip,{content:l},o.createElement("h1",Object.assign({id:r,ref:p,className:i.css(n.default.modalBoxTitle,t)},u),l)):o.createElement("h1",Object.assign({id:r,ref:p,className:i.css(n.default.modalBoxTitle,t)},u),l)},t.ModalBoxTitle.displayName="ModalBoxTitle"},625:function(e,t,r){var a=r(779);e.exports=function(e,t){for(var r=e.length;r--;)if(a(e[r][0],t))return r;return-1}},646:function(e,t){e.exports=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}},664:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=r(1),o=a.__importStar(r(0)),n=a.__importDefault(r(87)),i=r(2);t.StackItem=e=>{var{isFilled:t=!1,className:r="",children:s=null}=e,l=a.__rest(e,["isFilled","className","children"]);return o.createElement("div",Object.assign({},l,{className:i.css(n.default.stackItem,t&&n.default.modifiers.fill,r)}),s)},t.StackItem.displayName="StackItem"},773:function(e,t,r){var a=r(774);e.exports=function(e,t){return a(e,t)}},774:function(e,t,r){var a=r(775),o=r(310);e.exports=function e(t,r,n,i,s){return t===r||(null==t||null==r||!o(t)&&!o(r)?t!=t&&r!=r:a(t,r,n,i,e,s))}},775:function(e,t,r){var a=r(776),o=r(783),n=r(785),i=r(786),s=r(789),l=r(111),u=r(790),c=r(791),d="[object Object]",p=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,f,m,h){var b=l(e),v=l(t),g=b?"[object Array]":s(e),_=v?"[object Array]":s(t),y=(g="[object Arguments]"==g?d:g)==d,O=(_="[object Arguments]"==_?d:_)==d,j=g==_;if(j&&u(e)){if(!u(t))return!1;b=!0,y=!1}if(j&&!y)return h||(h=new a),b||c(e)?o(e,t,r,f,m,h):n(e,t,g,r,f,m,h);if(!(1&r)){var x=y&&p.call(e,"__wrapped__"),S=O&&p.call(t,"__wrapped__");if(x||S){var M=x?e.value():e,N=S?t.value():t;return h||(h=new a),m(M,N,r,f,h)}}return!!j&&(h||(h=new a),i(e,t,r,f,m,h))}},776:function(e,t,r){var a=r(777),o=r(778),n=r(780),i=r(781),s=r(782);function l(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}l.prototype.clear=a,l.prototype.delete=o,l.prototype.get=n,l.prototype.has=i,l.prototype.set=s,e.exports=l},777:function(e,t){e.exports=function(){this.__data__=[],this.size=0}},778:function(e,t,r){var a=r(625),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,r=a(t,e);return!(r<0)&&(r==t.length-1?t.pop():o.call(t,r,1),--this.size,!0)}},779:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},780:function(e,t,r){var a=r(625);e.exports=function(e){var t=this.__data__,r=a(t,e);return r<0?void 0:t[r][1]}},781:function(e,t,r){var a=r(625);e.exports=function(e){return a(this.__data__,e)>-1}},782:function(e,t,r){var a=r(625);e.exports=function(e,t){var r=this.__data__,o=a(r,e);return o<0?(++this.size,r.push([e,t])):r[o][1]=t,this}},783:function(e,t,r){var a=r(308),o=r(784),n=r(309);e.exports=function(e,t,r,i,s,l){var u=1&r,c=e.length,d=t.length;if(c!=d&&!(u&&d>c))return!1;var p=l.get(e);if(p&&l.get(t))return p==t;var f=-1,m=!0,h=2&r?new a:void 0;for(l.set(e,t),l.set(t,e);++f<c;){var b=e[f],v=t[f];if(i)var g=u?i(v,b,f,t,e,l):i(b,v,f,e,t,l);if(void 0!==g){if(g)continue;m=!1;break}if(h){if(!o(t,(function(e,t){if(!n(h,t)&&(b===e||s(b,e,r,i,l)))return h.push(t)}))){m=!1;break}}else if(b!==v&&!s(b,v,r,i,l)){m=!1;break}}return l.delete(e),l.delete(t),m}},784:function(e,t){e.exports=function(e,t){for(var r=-1,a=null==e?0:e.length;++r<a;)if(t(e[r],r,e))return!0;return!1}},785:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},786:function(e,t,r){var a=r(787),o=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,n,i,s){var l=1&r,u=a(e),c=u.length;if(c!=a(t).length&&!l)return!1;for(var d=c;d--;){var p=u[d];if(!(l?p in t:o.call(t,p)))return!1}var f=s.get(e);if(f&&s.get(t))return f==t;var m=!0;s.set(e,t),s.set(t,e);for(var h=l;++d<c;){var b=e[p=u[d]],v=t[p];if(n)var g=l?n(v,b,p,t,e,s):n(b,v,p,e,t,s);if(!(void 0===g?b===v||i(b,v,r,n,s):g)){m=!1;break}h||(h="constructor"==p)}if(m&&!h){var _=e.constructor,y=t.constructor;_==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof _&&_ instanceof _&&"function"==typeof y&&y instanceof y||(m=!1)}return s.delete(e),s.delete(t),m}},787:function(e,t,r){var a=r(788)(Object.keys,Object);e.exports=a},788:function(e,t){e.exports=function(e,t){return function(r){return e(t(r))}}},789:function(e,t){var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},790:function(e,t){e.exports=function(){return!1}},791:function(e,t){e.exports=function(){return!1}},963:function(e,t,r){"use strict";r.r(t);var a=r(592),o=r.n(a),n=r(132),i=r.n(n),s=r(573),l=r.n(s),u=r(47),c=r.n(u),d=r(0),p=r.n(d),f=r(10),m=r.n(f),h=r(178),b=r(18),v=r(773),g=r.n(v),_=r(606),y=r(48),O=r(46),j=r(615),x=r(664),S=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var a=Array(e),o=0;for(t=0;t<r;t++)for(var n=arguments[t],i=0,s=n.length;i<s;i++,o++)a[o]=n[i];return a},M=function(e,t){return[{component:"sub-form",description:"share.new.description",name:"new_share",key:"1",fields:[{name:"group-selection",component:"share-group-select",loadOptions:e,isSearchable:!0,permissions:t}]}]},N=function(e){return[{component:"sub-form",name:"current-groups-sub-form",fields:[{name:"shared-groups",permissionVerbs:e,component:"share-group-edit"}]}]},E=function(e,t,r,a){return{fields:S(r?M(e,t):[],a?N(t):[])}},B=r(134),w=r(21),k=r(4),P=Object(w.a)(),I=Object(w.f)(),C=function(e){return P.get(k.e+"/portfolios/"+e+"/share_info")},D=r(3),T=function(){return(T=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},F=function(e){return{type:D.ab,payload:(t=T({},e),r={permissions:t.permissions.split(","),group_uuids:[t.group_uuid]},I.sharePortfolio(t.id,r))};var t,r},R=function(e){return{type:D.db,payload:(t=T({},e),r={permissions:t.permissions,group_uuids:[t.group_uuid]},I.unsharePortfolio(t.id,r))};var t,r},A=r(85),G=(Object(w.h)(),r(84)),L=r(570),U=r(189),W=r(43),H=r(28),K=r(568),V=r(17),z=r(193),J=function(e,t){switch(e.length){case 1:return e[0];case 2:return t(W.a.shareSuccessTwoGroup,{group1:e[0],group2:e[1]});default:return t(W.a.shareSuccessMultipleGroups,{count:e.length})}},Y=function(e){var t,r=e.shareData,a=e.initialGroups,o=e.removedGroups,n=e.newGroups,i=e.formatMessage,s=e.portfolioName,l=i(W.a.shareSuccessTitle),u=r.filter((function(e){var t,r=e.permissions,o=e.group_uuid,n=a.find((function(e){return e.group_uuid===o}));return n&&(null==r?void 0:r.split(",").length)!==(null===(t=n.permissions)||void 0===t?void 0:t.split(",").length)})),c=o.filter((function(e){var t=e.group_uuid;return!u.find((function(e){return e.group_uuid===t}))})).length>0,d=n.filter((function(e){var t=e.group_uuid;return!a.find((function(e){return e.group_uuid===t}))})).length>0;return c&&!d&&0===u.length&&(l=i(W.a.shareSuccessTitleOnlyUnsharing),t=i(W.a.shareSuccessDescriptionOnlyUnsharing,{name:s(),group:J(o.map((function(e){return e.groupName})),i),b:z.a})),!c&&d&&0===u.length&&(l=i(W.a.shareSuccessTitleOnlySharing),t=i(W.a.shareSuccessDescriptionOnlySharing,{name:s(),group:J(n.map((function(e){return e.groupName})),i),b:z.a})),!c&&!d&&u.length>0&&(l=i(W.a.shareSuccessTitleOnlyChaningPermissions),t=i(W.a.shareSuccessDescriptionOnlyChaningPermissions,{group:J(u.map((function(e){return e.groupName})),i),b:z.a})),{title:l,description:t}};function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X=function(e){var t,r,a,n,i,s,u,f,m=e.closeUrl,v=e.removeSearch,S=e.viewState,M=e.portfolioName,N=void 0===M?function(){return""}:M,P=Object(V.a)(),I=Object(b.useDispatch)(),T=Object(L.a)({removeSearch:v,keepHash:!0}).push,z=Object(G.a)(["portfolio"]),J=c()(z,2),q=J[0].portfolio,X=J[1],Z=Object(d.useState)(!0),$=c()(Z,2),ee=$[0],te=$[1],re=Object(b.useSelector)((function(e){var t=e.portfolioReducer;return{selectedPortfolio:t.selectedPortfolio,isLoading:t.isLoading}})),ae=re.selectedPortfolio,oe=re.isLoading,ne=Object(b.useSelector)((function(e){return{shareInfo:e.shareReducer.shareInfo}})).shareInfo;Object(d.useEffect)((function(){var e;te(!0),I((e=q,{type:D.G,payload:C(e)})).then((function(){return te(!1)})).catch((function(){return te(!1)}))}),[]);var ie=function(){I(Object(B.m)()),T({pathname:m,search:X})};if(!1===(null==ae||null===(t=ae.metadata)||void 0===t||null===(r=t.user_capabilities)||void 0===r?void 0:r.share)&&!1===(null==ae||null===(a=ae.metadata)||void 0===a||null===(n=a.user_capabilities)||void 0===n?void 0:n.unshare))return p.a.createElement(U.a,null);var se=ee||oe;return p.a.createElement(_.Modal,{title:P(W.a.portfolioShareTitle),isOpen:!0,variant:"small",onClose:ie},se&&p.a.createElement(A.i,null),!se&&p.a.createElement(j.Stack,{hasGutter:!0},p.a.createElement(x.StackItem,null,p.a.createElement(y.TextContent,null,p.a.createElement(O.Text,null,P(W.a.portfolioShareDescription,{name:N(q),strong:function(e){return p.a.createElement("strong",{key:"strong"},e)}})))),p.a.createElement(x.StackItem,null,p.a.createElement(h.c,{schema:E((function(e){return void 0===(t=e)&&(t=""),Object(w.a)().get(k.j+"/groups/"+(t.length>0?"?name="+t:"")).then((function(e){return e.data.map((function(e){var t=e.uuid;return{label:e.name,value:t}}))}));var t}),k.m,!1!==(null==ae||null===(i=ae.metadata)||void 0===i||null===(s=i.user_capabilities)||void 0===s?void 0:s.share),!1!==(null==ae||null===(u=ae.metadata)||void 0===u||null===(f=u.user_capabilities)||void 0===f?void 0:f.unshare)),schemaType:"default",onSubmit:function(e,t){var r=e["shared-groups"],a=[],n=t.getState().initialValues["shared-groups"],i=n.filter((function(e){return!r.find((function(t){return t.group_uuid===e.group_uuid}))})).map((function(e){var t=e.permissions;return Q(Q({},l()(e,["permissions"])),{},{permissions:t.split(",")})}));r.forEach((function(e){var t=n.find((function(t){return t.group_uuid===e.group_uuid}));t&&!g()(t,e)&&(t.permissions.length>e.permissions.length?i.push({id:q,permissions:["update"],group_uuid:e.group_uuid}):a.push(e)),t||a.push(e)}));var s=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t?R:F;return I(r({id:q,permissions:e.permissions,group_uuid:e.group_uuid}))},u=[].concat(o()(a.map((function(e){return s(e)}))),o()(i.map((function(e){return s(e,!0)}))));ie();var c=Y({shareData:r,initialGroups:n,removedGroups:i,newGroups:a,formatMessage:P,portfolioName:N}),d=c.title,p=c.description;return Promise.all(u).then((function(){return I({type:H.ADD_NOTIFICATION,payload:{dismissable:!0,variant:"success",title:d,description:p}}),I(Object(B.g)(S))}))},onCancel:ie,validate:function(e){var t={};return e.group_uuid&&!e.permissions&&(t.permissions=P(W.a.portfolioSharePermissions)),e.permissions&&!e.group_uuid&&(t.group_uuid=P(W.a.portfolioShareGroups)),t},initialValues:Q(Q({},ae),{},{"shared-groups":ne.map((function(e){var t=e.permissions.filter((function(e){return k.n.indexOf(e)>-1})),r=e.group_name,a=k.m.find((function(e){return e.value===t.sort().join(",")}));return{groupName:r,group_uuid:e.group_uuid,permissions:a?a.value:P(K.a.unknown)}}))}),templateProps:{disableSubmit:["pristine","validating"],submitLabel:P(W.a.portfolioShareApply)}}))))};X.propTypes={closeUrl:m.a.string.isRequired,removeSearch:m.a.bool,portfolioName:m.a.func,viewState:m.a.shape({count:m.a.number,limit:m.a.number,offset:m.a.number,filter:m.a.string})};t.default=X}}]);
//# sourceMappingURL=../sourcemaps/share-portfolio~31ecd969.js.map