(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{620:function(e,t,a){var r=a(728);e.exports=function(e,t){if(null==e)return{};var a,n,o=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}},728:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}},744:function(e,t,a){"use strict";var r,n,o=a(0),i=a.n(o),l=a(20),c=a(134),s=a(186),u=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},p=function(){return(p=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},d=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a},m=Object(l.b)(c.a)(r||(r=u(["\n  display: flex !important;\n  align-items: center;\n"],["\n  display: flex !important;\n  align-items: center;\n"]))),f=l.b.span(n||(n=u(["\n  margin-right: ",";\n"],["\n  margin-right: ",";\n"])),(function(e){return e.showSpinner?"8px":"0"})),b=Object(o.forwardRef)((function(e,t){var a=e.children,r=e.showSpinner,n=void 0!==r&&r,o=e.isDisabled,l=void 0!==o&&o,c=d(e,["children","showSpinner","isDisabled"]);return i.a.createElement(m,p({ref:t},c,{isDisabled:l}),i.a.createElement(f,{showSpinner:n},a),n&&i.a.createElement(s.Spinner,{size:"md"}))}));b.displayName="ButtonWithSpinner",t.a=b},820:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(18),i=a(108),l=a(23),c=a(4),s=a(24),u=function(){for(var e=0,t=0,a=arguments.length;t<a;t++)e+=arguments[t].length;var r=Array(e),n=0;for(t=0;t<a;t++)for(var o=arguments[t],i=0,l=o.length;i<l;i++,n++)r[n]=o[i];return r},p=function(e,t){void 0===e&&(e=""),void 0===t&&(t=[]);var a=t.map((function(e){return"filter[id][]="+e})).join("&");return Object(l.a)().get(c.b+"/workflows?filter[name][contains]="+e+"&"+(a||"")).then((function(e){return e.data.map((function(e){var t=e.id;return{label:e.name,value:t}}))}))},d=function(e,t,a){var r=e?e.map((function(e){return Object(l.j)().unlinkWorkflow(e,a)})):[],n=t?t.map((function(e){return Object(l.j)().linkWorkflow(e,a)})):[];return Promise.all(u(r,n))},m=function(e,t,a){void 0===t&&(t={limit:s.a.limit,offset:s.a.offset}),void 0===a&&(a="");var r="app_name="+e.appName+"&object_type="+e.objectType+"&object_id="+e.objectId,n="&limit="+t.limit+"&offset="+t.offset,o="&filter[name][contains]="+a;return Object(l.a)().get(c.b+"/workflows?"+r+o+n)},f=a(112),b=function(e){return e().i18nReducer.formatMessage},g=a(19),h=Object(g.b)({unlinkNotification:{id:"approval.notifications.unlink",defaultMessage:"{count, number} {count, plural, one {approval process was} other {approval processes were}} unlinked successfully."},linkNotification:{id:"approval.notifications.link",defaultMessage:"{count, number} {count, plural, one {approval process was} other {approval processes were}} linked successfully."},setWorkflow:{id:"approval.workflows.set",defaultMessage:"Select approval processes for <strong>{objectName}</strong>"},currentWorkflows:{id:"approval.workflows.current",defaultMessage:"Current approval processes"}}),v=a(84),y=a(580),E=a(17),O=a(207),j=a(205);t.default=function(e){var t=e.objectType,a=e.removeSearch,l=e.keepHash,s=void 0!==l&&l,u=e.querySelector,w=e.pushParam,_=e.objectName,k=void 0===_?function(){return t}:_,I=e.onClose,S=Object(E.a)(),x=Object(r.useRef)(S(Object(g.a)({id:"workflows.modal.title",defaultMessage:"Set approval process"}))).current,T=Object(o.useDispatch)(),R=Object(y.a)({removeSearch:a,keepHash:s}),P=Object(v.a)([u])[0],N=function(){I&&I(),R.push(w)};return n.a.createElement(O.a,{title:x,onClose:N,onSubmit:function(e,a){var r,n,o;N(),T((r=e,n=a,o={object_type:t,app_name:c.c[t],object_id:P[u]},function(e,t){var a=b(t);return e({type:i.a.UPDATE_WORKFLOWS,payload:d(n,r,o).then((function(){return e(Object(f.addNotification)({variant:"success",title:"Success updating approval process",dismissable:!0,description:(n.length>0?a&&a(h.unlinkNotification,{count:n.length}):"")+"\n          "+(r.length>0?a(h.linkNotification,{count:r.length}):"")}))}))})}))},getInitialTags:function(){return m({objectType:t,appName:c.c[t],objectId:P[u]}).then((function(e){return e.data}))},loadTags:p,subTitle:S(h.setWorkflow,{strong:j.a,objectName:k(P[u])}),existingTagsMessage:S(h.currentWorkflows)})}},822:function(e,t,a){"use strict";a.d(t,"a",(function(){return M})),a.d(t,"b",(function(){return F}));var r=a(98),n=a.n(r),o=a(0),i=a.n(o),l=a(13),c=a.n(l),s=a(83),u=a(67),p=a(304),d=a(310),m=a(48),f=a(49),b=a(137),g=a(939),h=a(287),v=a(298),y=a(288),E=a(54),O=a(744),j=a(574),w=a(113),_=a(44),k=a(17),I=a(36),S=a(8),x=function(e){var t=e.copyUrl,a=e.orderUrl,r=e.editUrl,n=e.workflowUrl,l=e.editSurveyUrl,c=e.isOpen,s=e.setOpen,u=e.isFetching,p=e.availability,m=e.userCapabilities,f=m.update,b=m.copy,g=m.set_approval,x=Object(k.a)(),T=[];if(f&&T.push(i.a.createElement(y.DropdownItem,{"aria-label":"Edit Portfolio",key:"edit-portfolio-item",id:"edit-portfolio-item",component:i.a.createElement(j.a,{pathname:r,preserveSearch:!0},x(w.a.edit)),role:"link"})),b&&T.push(i.a.createElement(y.DropdownItem,{"aria-label":"Copy Portfolio",key:"copy-portfolio-item",id:"copy-portfolio-item",component:i.a.createElement(j.a,{pathname:t,preserveSearch:!0},x(w.a.copy)),role:"link"})),g&&T.push(i.a.createElement(y.DropdownItem,{"aria-label":"Set approval",key:"set-approval_workflow",id:"set-approval_workflow",component:i.a.createElement(j.a,{pathname:n,preserveSearch:!0},x(w.a.setApproval)),role:"link"})),window.insights.chrome.isBeta()&&f){var R=x(I.a.setOrderProcess);T.push(i.a.createElement(y.DropdownItem,{"aria-label":R,key:"attach-order-processes",id:"attach-order-processes",component:i.a.createElement(j.a,{preserveSearch:!0,pathname:S.v},R),role:"link"}))}return f&&T.push(i.a.createElement(y.DropdownItem,{"aria-label":"Edit survey",key:"edit-survey",id:"edit-survey",component:i.a.createElement(j.a,{pathname:l,preserveSearch:!0},x(_.a.portfolioItemSurvey)),role:"link"})),i.a.createElement(o.Fragment,null,i.a.createElement(d.LevelItem,null,i.a.createElement(j.a,{isDisabled:u||"unavailable"===p,pathname:a,preserveSearch:!0},i.a.createElement(O.a,{isDisabled:u||"unavailable"===p,showSpinner:u,variant:"primary",id:"order-portfolio-item"},x(_.a.portfolioItemOrder)))),i.a.createElement(d.LevelItem,{style:{marginLeft:16}},T.length>0&&i.a.createElement(h.Dropdown,{isPlain:!0,onToggle:s,onSelect:function(){return s(!1)},position:E.DropdownPosition.right,toggle:i.a.createElement(v.KebabToggle,{id:"portfolio-item-actions-toggle",onToggle:function(e){return s(e)}}),isOpen:c,dropdownItems:T})))};x.propTypes={orderUrl:c.a.string.isRequired,editUrl:c.a.string.isRequired,copyUrl:c.a.string.isRequired,editSurveyUrl:c.a.string.isRequired,workflowUrl:c.a.string.isRequired,isOpen:c.a.bool,setOpen:c.a.func.isRequired,isFetching:c.a.bool,availability:c.a.oneOf(["available","unavailable"]).isRequired,userCapabilities:c.a.shape({update:c.a.bool,copy:c.a.bool,set_approval:c.a.bool}).isRequired},x.defaultProps={isFetching:!1};var T=x,R=a(4),P=a(621),N=a(665),D=a(91),q=a(742),C=function(e){var t=e.id,a=e.sourceId;return i.a.createElement(P.a,{src:"".concat(R.e,"/portfolio_items/").concat(t,"/icon"),sourceId:a,height:64})};C.propTypes={id:c.a.string.isRequired,sourceId:c.a.string.isRequired};var M=function(e){var t=e.url,a=e.isOpen,r=e.product,n=e.setOpen,o=e.isFetching,l=e.availability,c=e.userCapabilities,u=e.fromProducts,b=Object(k.a)(),g=Object(s.h)().pathname;return i.a.createElement(N.b,{paddingBottom:g!==S.x,breadcrumbs:!u},u&&i.a.createElement(q.a,null),i.a.createElement(p.Level,{className:"flex-no-wrap"},i.a.createElement(s.d,null,i.a.createElement(s.b,{path:S.x,exact:!0},i.a.createElement(N.a,{title:b(_.a.editProduct),noData:!0})),i.a.createElement(s.b,null,i.a.createElement(D.a,{grow:!0,alignStart:!0,className:"pf-l-flex"},c.update?i.a.createElement(C,{id:r.id,sourceId:r.service_offering_source_ref}):i.a.createElement(P.a,{src:"".concat(R.e,"/portfolio_items/").concat(r.id,"/icon"),sourceId:r.service_offering_source_ref,height:64}),i.a.createElement(f.TextContent,{className:"pf-u-ml-md"},i.a.createElement(m.Text,{component:m.TextVariants.h1},r.name))),i.a.createElement(d.LevelItem,{style:{minHeight:36},className:"flex-item-no-wrap"},i.a.createElement(p.Level,{className:"flex-no-wrap"},i.a.createElement(T,{isOpen:a,setOpen:function(e){return n(e)},orderUrl:"".concat(t,"/order"),editUrl:"".concat(t,"/edit"),copyUrl:"".concat(t,"/copy"),editSurveyUrl:"".concat(t,"/edit-survey"),workflowUrl:"".concat(t,"/edit-workflow"),isFetching:o,availability:l,userCapabilities:c})))))))};M.propTypes={url:c.a.string.isRequired,isOpen:c.a.bool,product:c.a.shape({distributor:c.a.string,name:c.a.string.isRequired,id:c.a.string.isRequired,service_offering_source_ref:c.a.string.isRequired}).isRequired,setOpen:c.a.func.isRequired,isFetching:c.a.bool,availability:c.a.oneOf(["available","unavailable"]).isRequired,userCapabilities:c.a.object,fromProducts:c.a.bool},M.defaultProps={isFetching:!1};var U=function(e){var t=e.handleResetSurvey,a=Object(k.a)(),r=Object(o.useState)(!1),l=n()(r,2),c=l[0],s=l[1];return i.a.createElement(h.Dropdown,{isOpen:c,isPlain:!0,onSelect:function(){return s(!1)},position:"right",toggle:i.a.createElement(v.KebabToggle,{onToggle:function(e){return s(e)}}),dropdownItems:[i.a.createElement(y.DropdownItem,{onClick:t,component:"button",key:"synchronize"},a(_.a.restoreSurvey))]})};U.propTypes={handleResetSurvey:c.a.func.isRequired};var F=function(e){var t=e.handleSaveSurvey,a=e.closeUrl,r=e.search,n=e.isFetching,o=e.isValid,l=e.modified,c=e.handleResetSurvey,s=Object(k.a)();return i.a.createElement(N.b,{breadcrumbs:!0},i.a.createElement(p.Level,null,i.a.createElement(D.a,{grow:!0,alignStart:!0,className:"pf-l-flex"},i.a.createElement(f.TextContent,null,i.a.createElement(m.Text,{component:m.TextVariants.h1},s(_.a.portfolioItemSurvey)))),i.a.createElement(d.LevelItem,null,i.a.createElement(g.Flex,{className:"align-items-center"},i.a.createElement(O.a,{variant:"primary",showSpinner:n,isDisabled:n||!o,onClick:t},s(w.a.save)),i.a.createElement(u.a,{to:{pathname:a,search:r}},i.a.createElement(b.Button,{variant:"link"},"Cancel")),l&&i.a.createElement(U,{handleResetSurvey:c})))))};F.propTypes={handleSaveSurvey:c.a.func.isRequired,closeUrl:c.a.string.isRequired,search:c.a.string.isRequired,isFetching:c.a.bool,isValid:c.a.bool,modified:c.a.bool,handleResetSurvey:c.a.func,fromProducts:c.a.bool}},936:function(e,t,a){"use strict";t.__esModule=!0,t.PencilAltIconConfig={name:"PencilAltIcon",height:512,width:512,svgPath:"M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z",yOffset:0,xOffset:0},t.PencilAltIcon=a(77).createIcon(t.PencilAltIconConfig),t.default=t.PencilAltIcon},937:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=a(1),n=r.__importStar(a(0)),o=r.__importDefault(a(93)),i=a(2);t.Stack=e=>{var{hasGutter:t=!1,className:a="",children:l=null,component:c="div"}=e,s=r.__rest(e,["hasGutter","className","children","component"]);const u=c;return n.createElement(u,Object.assign({},s,{className:i.css(o.default.stack,t&&o.default.modifiers.gutter,a)}),l)},t.Stack.displayName="Stack"},938:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=a(1),n=r.__importStar(a(0)),o=r.__importDefault(a(93)),i=a(2);t.StackItem=e=>{var{isFilled:t=!1,className:a="",children:l=null}=e,c=r.__rest(e,["isFilled","className","children"]);return n.createElement("div",Object.assign({},c,{className:i.css(o.default.stackItem,t&&o.default.modifiers.fill,a)}),l)},t.StackItem.displayName="StackItem"},939:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=a(1),n=r.__importStar(a(0)),o=a(2),i=r.__importDefault(a(743)),l=a(97);t.Flex=e=>{var{children:t=null,className:a="",spacer:c,spaceItems:s,grow:u,shrink:p,flex:d,direction:m,alignItems:f,alignContent:b,alignSelf:g,align:h,justifyContent:v,display:y,fullWidth:E,flexWrap:O}=e,j=r.__rest(e,["children","className","spacer","spaceItems","grow","shrink","flex","direction","alignItems","alignContent","alignSelf","align","justifyContent","display","fullWidth","flexWrap"]);return n.createElement("div",Object.assign({className:o.css(i.default.flex,l.formatBreakpointMods(c,i.default),l.formatBreakpointMods(s,i.default),l.formatBreakpointMods(u,i.default),l.formatBreakpointMods(p,i.default),l.formatBreakpointMods(d,i.default),l.formatBreakpointMods(m,i.default),l.formatBreakpointMods(f,i.default),l.formatBreakpointMods(b,i.default),l.formatBreakpointMods(g,i.default),l.formatBreakpointMods(h,i.default),l.formatBreakpointMods(v,i.default),l.formatBreakpointMods(y,i.default),l.formatBreakpointMods(E,i.default),l.formatBreakpointMods(O,i.default),a)},j),t)},t.Flex.displayName="Flex"},985:function(e,t,a){"use strict";a.r(t);var r=a(139),n=a.n(r),o=a(620),i=a.n(o),l=a(98),c=a.n(l),s=a(0),u=a.n(s),p=a(18),d=a(83),m=a(146),f=a(147),b=a(315),g=a(184),h=a(13),v=a.n(h),y=a(48),E=a(49),O=a(188),j=a(17),w={id:"portfolio.item.detail.info.platform",defaultMessage:"Platform"},_={id:"portfolio.item.detail.info.portfolio",defaultMessage:"Portfolio"},k={id:"portfolio.item.detail.info.vendor",defaultMessage:"Vendor"},I={id:"portfolio.item.detail.info.created",defaultMessage:"Created"},S=function(e){var t=e.product,a=e.source,r=e.portfolio,n=Object(j.a)();return u.a.createElement(E.TextContent,{className:"pf-u-mb-md"},u.a.createElement(y.Text,{className:"font-14"},n(w)),u.a.createElement(y.Text,{id:"source-name",className:"overflow-wrap",component:y.TextVariants.p},a.name),u.a.createElement(y.Text,{className:"font-14"},n(_)),u.a.createElement(y.Text,{id:"portfolio-name",className:"overflow-wrap",component:y.TextVariants.p},r.name),t.distributor&&u.a.createElement("span",{id:"distributor"},u.a.createElement(y.Text,{className:"font-14"},n(k)),u.a.createElement(y.Text,{className:"overflow-wrap",component:y.TextVariants.p},t.distributor)),u.a.createElement(y.Text,{className:"font-14"},n(I)),u.a.createElement(y.Text,{id:"created_at",component:y.TextVariants.p},u.a.createElement(O.DateFormat,{variant:"relative",date:t.created_at})))};S.propTypes={product:v.a.shape({distributor:v.a.string,updated_at:v.a.string,created_at:v.a.string.isRequired}).isRequired,source:v.a.shape({name:v.a.string}).isRequired,portfolio:v.a.shape({name:v.a.string}).isRequired};var x=S,T=a(187),R=a(35),P=a.n(R),N=a(25),D=a.n(N),q={fields:[{component:P.a.TEXT_FIELD,name:"name",label:"schemas.portfolio-item.name",isRequired:!0,validate:[{type:D.a.REQUIRED}]},{component:P.a.TEXT_FIELD,name:"description",label:"schemas.portfolio-item.description"},{component:P.a.TEXT_FIELD,name:"long_description",label:"schemas.portfolio-item.long_description"},{component:P.a.TEXT_FIELD,name:"distributor",label:"schemas.portfolio-item.vendor"},{component:P.a.TEXT_FIELD,name:"documentation_url",label:"schemas.portfolio-item.documentation_url",validate:[{type:D.a.URL}]},{component:P.a.TEXT_FIELD,name:"support_url",label:"schemas.portfolio-item.support_url",validate:[{type:D.a.URL}]}]},C=a(140),M=a(937),U=a(938),F=a(206),L=a.n(F),B=a(936),V=a.n(B),W=a(186),z=a(287),A=a(290),G=a(288),X=a(112),H=a(20),K=a(44),J=a(19),Q=Object(J.b)({changeIcon:{id:"icons.actions.change",defaultMessage:"Upload image"},resetIcon:{id:"icons.actions.reset",defaultMessage:"Reset image"}});function Y(){var e=L()(["\n  .pf-c-dropdown__menu {\n    top: 24px;\n    left: calc(100% - 24px);\n  }\n"]);return Y=function(){return e},e}function Z(){var e=L()(["\n  height: 64px;\n  max-width: 300px;\n  object-fit: cover;\n"]);return Z=function(){return e},e}function $(){var e=L()(["\n  position: relative;\n  display: inline-block;\n"]);return $=function(){return e},e}function ee(){var e=L()(["\n  border: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding-left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  &::after {\n    content: ' ';\n    position: absolute;\n    display: block;\n    top: -0.3em;\n    right: -0.3em;\n    width: 1.5em;\n    height: 1.5em;\n    border-radius: 50%;\n    background-color: rgba(255, 255, 255, 0.8);\n    z-index: 0;\n  }\n  svg,\n  .pf-c-spinner {\n    z-index: 1;\n    position: absolute;\n    top: 0;\n    right: 0;\n  }\n"]);return ee=function(){return e},e}var te=H.b.span(ee()),ae=H.b.div($()),re=H.b.img(Z()),ne=Object(H.b)(z.Dropdown)(Y()),oe=function(e){var t=e.uploadIcon,a=e.resetIcon,r=e.enableReset,n=e.children,o=Object(j.a)(),i=Object(s.useRef)(),l=Object(s.useState)(),d=c()(l,2),m=d[0],f=d[1],b=Object(s.useState)(!1),g=c()(b,2),h=g[0],v=g[1],y=Object(s.useState)(!1),E=c()(y,2),O=E[0],w=E[1],_=Object(p.useDispatch)(),k=[u.a.createElement(G.DropdownItem,{onClick:function(){return w(!1),i.current.click()},key:"change-icon"},o(Q.changeIcon)),u.a.createElement(G.DropdownItem,{isDisabled:!r,onClick:function(){return f(void 0),v(!0),a().then((function(){return v(!1)}))},key:"reset-icon"},o(Q.resetIcon))];return u.a.createElement(ae,null,u.a.createElement("input",{accept:".png,.svg,.jpeg",onChange:function(e){f(e.target.files[0]),v(!0),t(e.target.files[0]).then((function(){return v(!1)})).catch((function(e){_(Object(X.addNotification)({variant:"danger",title:o(K.a.portfolioItemIconTitle),description:e.data.errors[0].detail,dismissable:!0})),f(void 0),v(!1)}))},ref:i,type:"file",id:"icon-upload",hidden:!0}),u.a.createElement(ne,{onSelect:function(){return w(!1)},isOpen:O,isPlain:!0,disabled:h,dropdownItems:k,toggle:u.a.createElement(A.DropdownToggle,{disabled:h,toggleIndicator:null,onToggle:function(e,t){t.stopPropagation(),w(e)}},u.a.createElement(te,null,h?u.a.createElement(W.Spinner,{size:"md"}):u.a.createElement(V.a,{size:"sm"})),!m&&n,m&&u.a.createElement(re,{style:{height:64},src:URL.createObjectURL(m),id:m.name}))}))};oe.propTypes={uploadIcon:v.a.func.isRequired,children:v.a.oneOfType([v.a.node,v.a.arrayOf(v.a.node)]),resetIcon:v.a.func.isRequired,enableReset:v.a.bool};var ie=oe,le=a(4),ce=a(621);function se(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function ue(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?se(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):se(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var pe=function(e){var t=e.cancelUrl,a=e.uploadIcon,r=e.resetIcon,n=e.product,o=(n.owner,n.created_at,n.updated_at,i()(n,["owner","created_at","updated_at"])),l=e.userCapabilities,c=Object(p.useDispatch)(),s=Object(d.g)().push,m=Object(d.h)().search;return u.a.createElement(M.Stack,{hasGutter:!0},u.a.createElement(U.StackItem,{key:o.icon_id||"default"},u.a.createElement(ie,{uploadIcon:a,resetIcon:r,enableReset:!!o.icon_id},u.a.createElement(ce.a,{src:"".concat(le.e,"/portfolio_items/").concat(o.id,"/icon?cache_id=").concat(o.icon_id||"default"),sourceId:o.service_offering_source_ref,height:64}))),u.a.createElement(U.StackItem,null,u.a.createElement(T.c,{initialValues:ue({},o),onSubmit:function(e){return s({pathname:t,search:m}),c(Object(C.p)(ue(ue({},e),{},{metadata:{user_capabilities:l}})))},schema:q,templateProps:{disableSubmit:["pristine"]},onCancel:function(){return s({pathname:t,search:m})}})))};pe.propTypes={cancelUrl:v.a.string.isRequired,product:v.a.object.isRequired,userCapabilities:v.a.object.isRequired,uploadIcon:v.a.func.isRequired,resetIcon:v.a.func.isRequired};var de=pe,me=a(820),fe=a(42),be=a(235),ge=a(8),he=function(e){var t=e.userCapabilities,a=e.product,r=e.url,n=e.search,o=e.detailPaths,i=e.uploadIcon,l=e.resetIcon,c=Object(j.a)();return u.a.createElement(d.d,null,u.a.createElement(d.b,{path:"".concat(r,"/edit-workflow")},u.a.createElement(me.default,{pushParam:{pathname:r,search:n},objectType:le.h,objectId:a.id,objectName:function(){return a.name},querySelector:"portfolio-item"})),u.a.createElement(d.b,{path:ge.v},u.a.createElement(be.a,{querySelector:"portfolio-item",objectType:le.h,objectName:function(){return a.name},pushParam:{pathname:r,search:n}})),u.a.createElement(d.b,{exact:!0,path:o,render:function(){return u.a.createElement(E.TextContent,null,(a.description||a.long_description)&&u.a.createElement(y.Text,{component:y.TextVariants.h6},c(K.a.portfolioItemOverview)),a.description&&u.a.createElement(y.Text,{id:"description",component:y.TextVariants.p},a.description),a.long_description&&u.a.createElement(y.Text,{id:"long_description",component:y.TextVariants.p},a.long_description),a.support_url&&u.a.createElement(y.Text,{id:"support_url",component:y.TextVariants.p},u.a.createElement("a",{href:a.support_url,target:"_blank",rel:"noopener noreferrer"},c(K.a.portfolioItemSupport))),a.documentation_url&&u.a.createElement(s.Fragment,null,u.a.createElement(y.Text,{component:y.TextVariants.h6},c(K.a.portfolioItemDocumentation)),u.a.createElement(y.Text,{id:"documentation_url",component:y.TextVariants.p},u.a.createElement("a",{href:a.documentation_url,target:"_blank",rel:"noopener noreferrer"},c(K.a.portfolioItemDocLink)))))}}),u.a.createElement(fe.a,{exact:!0,path:"".concat(r,"/edit"),requiredCapabilities:"update",userCapabilities:t},u.a.createElement(de,{cancelUrl:r,product:a,userCapabilities:t,uploadIcon:i,resetIcon:l})))};he.propTypes={product:v.a.shape({name:v.a.string,long_description:v.a.string,support_url:v.a.string,documentation_url:v.a.string,description:v.a.string,id:v.a.string.isRequired}).isRequired,url:v.a.string.isRequired,search:v.a.string.isRequired,userCapabilities:v.a.object.isRequired,detailPaths:v.a.arrayOf(v.a.string),uploadIcon:v.a.func.isRequired,resetIcon:v.a.func.isRequired};var ve=he,ye=a(822),Ee=a(665),Oe=a(85),je=a(28),we=a(84),_e=a(742);function ke(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var Ie=Object(s.lazy)((function(){return Promise.all([a.e(66),a.e(65)]).then(a.bind(null,981))})),Se=["portfolio","source","portfolio-item","from-products"];t.default=function(){var e=Object(j.a)(),t=Object(s.useState)(!1),a=c()(t,2),r=a[0],o=a[1],l=Object(s.useState)(!0),h=c()(l,2),v=h[0],y=h[1],E=Object(p.useDispatch)(),O=Object(we.a)(Se),w=c()(O,2),_=w[0],k=w[1],I=Object(d.h)().pathname,S=Object(d.i)(ge.w).url,T=Object(p.useSelector)((function(e){return e.portfolioReducer.portfolioItem})),R=T.portfolioItem,P=R.metadata.user_capabilities,N=i()(R,["metadata"]),D=T.source,q=Object(p.useSelector)((function(e){return e.portfolioReducer.selectedPortfolio})),M="true"===_["from-products"],U=function(e){e||y(!0),E(Object(C.j)(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ke(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ke(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({portfolioItem:_["portfolio-item"]},_))).then((function(){return y(!1)})).catch((function(){return y(!1)}))};if(Object(s.useEffect)((function(){insights.chrome.appNavClick({id:M?"products":"portfolios",secondaryNav:!0}),U()}),[_["portfolio-item"]]),v||0===Object.keys(N).length)return u.a.createElement(g.Section,{className:"global-primary-background full-height"},u.a.createElement(Ee.b,{breadcrumbs:!M},M&&u.a.createElement(_e.a,null),u.a.createElement(Oe.h,null)));var F=D.availability_status||"unavailable",L=[D].filter((function(e){return e.notFound})).map((function(t){var a=t.object;return u.a.createElement(b.Alert,{className:"pf-u-mb-sm",key:a,variant:"warning",isInline:!0,title:e(K.a.objectUnavaiable,{object:a})})})),B=function(e){return Object(je.s)(N.id,e).then((function(){return U(!0)}))},V=[ge.w,"".concat(S,"/order"),"".concat(S,"/copy"),"".concat(S,"/edit-workflow"),ge.v];return u.a.createElement(s.Fragment,null,u.a.createElement(d.d,null,u.a.createElement(fe.a,{requiredCapabilities:"update",userCapabilities:P,path:"".concat(S,"/edit-survey")},u.a.createElement(s.Suspense,{fallback:u.a.createElement(Oe.a,null)},u.a.createElement(Ie,{closeUrl:S,search:k,uploadIcon:B,portfolioItem:N,portfolio:q}))),u.a.createElement(d.b,null,u.a.createElement(g.Section,{className:"full-height global-primary-background"},u.a.createElement(ye.a,{fromProducts:M,url:S,isOpen:r,product:N,setOpen:o,isFetching:v,availability:F,userCapabilities:P}),L.length>0&&u.a.createElement("div",{className:"pf-u-mr-lg pf-u-ml-lg"},L),"unavailable"===D.availability_status&&u.a.createElement(b.Alert,{className:"pf-u-ml-lg pf-u-mr-lg",id:"unavailable-alert-info",variant:"info",isInline:!0,title:e(K.a.sourceUnavaiable)}),u.a.createElement(m.Grid,{hasGutter:!0,className:"pf-u-p-lg"},u.a.createElement(d.b,{path:V,exact:!0},u.a.createElement(f.GridItem,{md:3,lg:2},u.a.createElement(x,{product:N,portfolio:q,source:D}))),u.a.createElement(f.GridItem,{md:I===ge.x?12:9,lg:I===ge.x?12:10},u.a.createElement(ve,{resetIcon:function(){return Object(je.n)(N.icon_id).then(U)},uploadIcon:B,product:N,userCapabilities:P,url:S,detailPaths:V,search:k})))))))}}}]);
//# sourceMappingURL=../sourcemaps/portfolio-item-detail~31ecd969.js.map