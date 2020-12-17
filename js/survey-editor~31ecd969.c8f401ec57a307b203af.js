(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{760:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardHeader=void 0;const i=a(1),r=i.__importStar(a(0)),n=a(2),s=i.__importDefault(a(47)),o=a(361),l=a(210),c=i.__importDefault(a(362));t.CardHeader=e=>{var{children:t=null,className:a="",id:d,onExpand:u,toggleButtonProps:f}=e,p=i.__rest(e,["children","className","id","onExpand","toggleButtonProps"]);return r.createElement(o.CardContext.Consumer,null,({cardId:e})=>r.createElement("div",Object.assign({className:n.css(s.default.cardHeader,a),id:d},p),u&&r.createElement("div",{className:n.css(s.default.cardHeaderToggle)},r.createElement(l.Button,Object.assign({variant:"plain",type:"button",onClick:t=>{u(t,e)}},f),r.createElement("span",{className:n.css(s.default.cardHeaderToggleIcon)},r.createElement(c.default,{"aria-hidden":"true"})))),t))},t.CardHeader.displayName="CardHeader"},878:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TabsContextConsumer=t.TabsContextProvider=void 0;const i=a(1).__importStar(a(0)).createContext({variant:"default"});t.TabsContextProvider=i.Provider,t.TabsContextConsumer=i.Consumer},917:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Tab=void 0,t.Tab=e=>null,t.Tab.displayName="Tab"},918:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Tabs=t.TabsComponent=void 0;const i=a(1),r=i.__importStar(a(0)),n=i.__importDefault(a(676)),s=i.__importDefault(a(28)),o=a(2),l=i.__importDefault(a(370)),c=i.__importDefault(a(362)),d=a(100),u=a(919),f=a(920),p=a(878),h=a(36);var m;!function(e){e.div="div",e.nav="nav"}(m=t.TabsComponent||(t.TabsComponent={}));const b={default:"",light300:n.default.modifiers.colorSchemeLight_300};class E extends r.Component{constructor(e){super(e),this.tabList=r.createRef(),this.handleScrollButtons=()=>{if(this.tabList.current&&!this.props.isVertical){const e=this.tabList.current,t=!d.isElementInView(e,e.firstChild,!1),a=!d.isElementInView(e,e.lastChild,!1),i=t||a,r=!t,n=!a;this.setState({showScrollButtons:i,disableLeftScrollButton:r,disableRightScrollButton:n})}},this.scrollLeft=()=>{if(this.tabList.current){const e=this.tabList.current,t=Array.from(e.children);let a,i,r;for(r=0;r<t.length&&!a;r++)d.isElementInView(e,t[r],!1)&&(a=t[r],i=t[r-1]);i&&(e.scrollLeft-=i.scrollWidth)}},this.scrollRight=()=>{if(this.tabList.current){const e=this.tabList.current,t=Array.from(e.children);let a,i;for(let r=t.length-1;r>=0&&!a;r--)d.isElementInView(e,t[r],!1)&&(a=t[r],i=t[r+1]);i&&(e.scrollLeft+=i.scrollWidth)}},this.state={showScrollButtons:!1,disableLeftScrollButton:!1,disableRightScrollButton:!1,shownKeys:[this.props.activeKey],ouiaStateId:h.getDefaultOUIAId(E.displayName)}}handleTabClick(e,t,a,i){const{shownKeys:n}=this.state;this.props.onSelect(e,t),a&&(r.Children.toArray(this.props.children).map(e=>e).filter(e=>e.props&&e.props.tabContentRef&&e.props.tabContentRef.current).forEach(e=>e.props.tabContentRef.current.hidden=!0),a.current&&(a.current.hidden=!1)),i&&this.setState({shownKeys:n.concat(t)})}componentDidMount(){this.props.isVertical||(window.addEventListener("resize",this.handleScrollButtons,!1),this.handleScrollButtons())}componentWillUnmount(){this.props.isVertical||window.removeEventListener("resize",this.handleScrollButtons,!1)}componentDidUpdate(e){const{activeKey:t,mountOnEnter:a}=this.props,{shownKeys:i}=this.state;e.activeKey!==t&&a&&i.indexOf(t)<0&&this.setState({shownKeys:i.concat(t)})}render(){const e=this.props,{className:t,children:a,activeKey:v,id:S,isFilled:_,isSecondary:I,isVertical:y,isBox:L,leftScrollAriaLabel:O,rightScrollAriaLabel:P,"aria-label":T,component:g,ouiaId:C,ouiaSafe:A,mountOnEnter:D,unmountOnExit:B,inset:R,variant:j}=e,N=i.__rest(e,["className","children","activeKey","id","isFilled","isSecondary","isVertical","isBox","leftScrollAriaLabel","rightScrollAriaLabel","aria-label","component","ouiaId","ouiaSafe","mountOnEnter","unmountOnExit","inset","variant"]),{showScrollButtons:w,disableLeftScrollButton:H,disableRightScrollButton:M,shownKeys:x}=this.state,K=r.Children.toArray(a).filter(Boolean).filter(e=>!e.props.isHidden),V=S||d.getUniqueId(),k=g===m.nav?"nav":"div";return r.createElement(p.TabsContextProvider,{value:{variant:j}},r.createElement(k,Object.assign({"aria-label":T,className:o.css(n.default.tabs,_&&n.default.modifiers.fill,I&&n.default.modifiers.secondary,y&&n.default.modifiers.vertical,L&&n.default.modifiers.box,w&&!y&&n.default.modifiers.scrollable,d.formatBreakpointMods(R,n.default),b[j],t)},h.getOUIAProps(E.displayName,void 0!==C?C:this.state.ouiaStateId,A),{id:S&&S},N),r.createElement("button",{className:o.css(n.default.tabsScrollButton,I&&s.default.modifiers.secondary),"aria-label":O,onClick:this.scrollLeft,disabled:H,"aria-hidden":H},r.createElement(l.default,null)),r.createElement("ul",{className:o.css(n.default.tabsList),ref:this.tabList,onScroll:this.handleScrollButtons},K.map((e,t)=>{const a=e.props,{title:s,eventKey:l,tabContentRef:c,id:d,tabContentId:f,className:p="",ouiaId:h,isHidden:m}=a,b=i.__rest(a,["title","eventKey","tabContentRef","id","tabContentId","className","ouiaId","isHidden"]);let E=f?""+f:`pf-tab-section-${l}-${d||V}`;return(D||B)&&l!==v&&(E=void 0),r.createElement("li",{key:t,className:o.css(n.default.tabsItem,l===v&&n.default.modifiers.current,p)},r.createElement(u.TabButton,Object.assign({className:o.css(n.default.tabsLink),onClick:e=>this.handleTabClick(e,l,c,D),id:`pf-tab-${l}-${d||V}`,"aria-controls":E,tabContentRef:c,ouiaId:h},b),s))})),r.createElement("button",{className:o.css(n.default.tabsScrollButton,I&&s.default.modifiers.secondary),"aria-label":P,onClick:this.scrollRight,disabled:M,"aria-hidden":M},r.createElement(c.default,null))),K.filter(e=>e.props.children&&!(B&&e.props.eventKey!==v)&&!(D&&-1===x.indexOf(e.props.eventKey))).map((e,t)=>r.createElement(f.TabContent,{key:t,activeKey:v,child:e,id:e.props.id||V,ouiaId:e.props.ouiaId})))}}t.Tabs=E,E.displayName="Tabs",E.defaultProps={activeKey:0,onSelect:()=>{},isFilled:!1,isSecondary:!1,isVertical:!1,isBox:!1,leftScrollAriaLabel:"Scroll left",rightScrollAriaLabel:"Scroll right",component:m.div,mountOnEnter:!1,unmountOnExit:!1,ouiaSafe:!0,variant:"default"}},919:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TabButton=void 0;const i=a(1),r=i.__importStar(a(0)),n=a(36);t.TabButton=e=>{var{children:a,tabContentRef:s,ouiaId:o,ouiaSafe:l}=e,c=i.__rest(e,["children","tabContentRef","ouiaId","ouiaSafe"]);const d=c.href?"a":"button";return r.createElement(d,Object.assign({},n.getOUIAProps(t.TabButton.displayName,o,l),c),a)},t.TabButton.displayName="TabButton"},920:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TabContent=void 0;const i=a(1),r=i.__importStar(a(0)),n=i.__importDefault(a(677)),s=a(2),o=a(36),l=a(878),c={default:"",light300:n.default.modifiers.light_300},d=e=>{var{id:t,activeKey:a,"aria-label":n,child:d,children:u,className:f,eventKey:p,innerRef:h,ouiaId:m,ouiaSafe:b}=e,E=i.__rest(e,["id","activeKey","aria-label","child","children","className","eventKey","innerRef","ouiaId","ouiaSafe"]);if(u||d){let e;return e=n?null:u?`pf-tab-${p}-${t}`:`pf-tab-${d.props.eventKey}-${t}`,r.createElement(l.TabsContextConsumer,null,({variant:i})=>r.createElement("section",Object.assign({ref:h,hidden:u?null:d.props.eventKey!==a,className:u?s.css("pf-c-tab-content",f,c[i]):s.css("pf-c-tab-content",d.props.className,c[i]),id:u?t:`pf-tab-section-${d.props.eventKey}-${t}`,"aria-label":n,"aria-labelledby":e,role:"tabpanel",tabIndex:0},o.getOUIAProps("TabContent",m,b),E),u||d.props.children))}return null};t.TabContent=r.forwardRef((e,t)=>r.createElement(d,Object.assign({},e,{innerRef:t})))},921:function(e,t,a){"use strict";t.__esModule=!0,t.GripVerticalIconConfig={name:"GripVerticalIcon",height:512,width:320,svgPath:"M96 32H32C14.33 32 0 46.33 0 64v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zM288 32h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0},t.GripVerticalIcon=a(26).createIcon(t.GripVerticalIconConfig),t.default=t.GripVerticalIcon},922:function(e,t,a){"use strict";t.__esModule=!0,t.EyeSlashIconConfig={name:"EyeSlashIcon",height:512,width:640,svgPath:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z",yOffset:0,xOffset:0},t.EyeSlashIcon=a(26).createIcon(t.EyeSlashIconConfig),t.default=t.EyeSlashIcon},923:function(e,t,a){"use strict";t.__esModule=!0,t.TrashRestoreIconConfig={name:"TrashRestoreIcon",height:512,width:448,svgPath:"M53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32zm70.11-175.8l89.38-94.26a15.41 15.41 0 0 1 22.62 0l89.38 94.26c10.08 10.62 2.94 28.8-11.32 28.8H256v112a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V320h-57.37c-14.26 0-21.4-18.18-11.32-28.8zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z",yOffset:0,xOffset:0},t.TrashRestoreIcon=a(26).createIcon(t.TrashRestoreIconConfig),t.default=t.TrashRestoreIcon},935:function(e,t,a){"use strict";a.r(t);var i,r=a(644),n=a.n(r),s=a(120),o=a.n(s),l=a(720),c=a.n(l),d=a(166),u=a.n(d),f=a(0),p=a.n(f),h=a(18),m=a.n(h),b=a(99),E=a(43),v=a.n(E),S=a(914),_=a.n(S),I=a(915),y=a(168),L=a(29),O=a(5),P=a(277),T=a(882),g=a(22),C=a(134),A=a(220),D=a(33),B=a.n(D);function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(Object(a),!0).forEach((function(t){u()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var N=j(j({},I.fieldProperties.IS_DISABLED),{},{propertyName:"isSubstitution",label:"Substitution"}),w=(i={},u()(i,v.a.TEXT_FIELD,{attributes:[I.fieldProperties.LABEL,I.fieldProperties.HELPER_TEXT,I.fieldProperties.PLACEHOLDER,I.fieldProperties.IS_DISABLED,I.fieldProperties.IS_READ_ONLY,I.fieldProperties.HIDE_FIELD,N]}),u()(i,v.a.CHECKBOX,{attributes:[I.fieldProperties.LABEL,I.fieldProperties.IS_DISABLED,I.fieldProperties.OPTIONS,I.fieldProperties.HIDE_FIELD]}),u()(i,v.a.SELECT,{attributes:[I.fieldProperties.OPTIONS,I.fieldProperties.LABEL,I.fieldProperties.IS_DISABLED,I.fieldProperties.PLACEHOLDER,I.fieldProperties.HELPER_TEXT,I.fieldProperties.HIDE_FIELD,N]}),u()(i,v.a.DATE_PICKER,{attributes:[I.fieldProperties.LABEL,I.fieldProperties.TODAY_BUTTON_LABEL,I.fieldProperties.IS_CLEARABLE,I.fieldProperties.CLOSE_ON_DAY_SELECT,I.fieldProperties.SHOW_TODAY_BUTTON,I.fieldProperties.HIDE_FIELD,N]}),u()(i,v.a.PLAIN_TEXT,{attributes:[I.fieldProperties.MULTI_LINE_LABEL,N]}),u()(i,v.a.RADIO,{attributes:[I.fieldProperties.LABEL,I.fieldProperties.IS_DISABLED,I.fieldProperties.OPTIONS,I.fieldProperties.HIDE_FIELD]}),u()(i,v.a.SWITCH,{attributes:[I.fieldProperties.LABEL,I.fieldProperties.IS_READ_ONLY,I.fieldProperties.IS_DISABLED,I.fieldProperties.HIDE_FIELD]}),u()(i,v.a.TEXTAREA,{attributes:[I.fieldProperties.LABEL,I.fieldProperties.HELPER_TEXT,I.fieldProperties.IS_READ_ONLY,I.fieldProperties.IS_DISABLED,I.fieldProperties.HIDE_FIELD,N]}),i);w["select-field"]=w[v.a.SELECT],w["textarea-field"]=w[v.a.TEXTAREA];var H={componentMapper:j({},A.a),builderMapper:j({},I.builderMapper),pickerMapper:j(j({},I.pickerMapper),{},{"select-field":I.pickerMapper[v.a.SELECT],"textarea-field":I.pickerMapper[v.a.TEXTAREA]}),propertiesMapper:I.propertiesMapper,componentProperties:w},M=function(e){var t=j({},e);return t.fields=t.fields.map((function(e){var t=e.validate,a=c()(e,["validate"]);return t?j(j({},a),{},{validate:t.map((function(e){var t=e.type;return j(j({},c()(e,["type"])),{},{type:A.b[t]||t})}))}):a})),t},x=function(e){return p.a.createElement(_.a,e)},K=function(e){var t=e.closeUrl,a=e.search,i=e.portfolioItem,r=Object(f.useState)(),s=o()(r,2),l=s[0],d=s[1],u=Object(f.useState)(!1),h=o()(u,2),m=h[0],E=h[1],v=Object(f.useState)(),S=o()(v,2),_=S[0],A=S[1],D=Object(f.useState)(),R=o()(D,2),N=R[0],w=R[1],K=Object(f.useState)(0),V=o()(K,2),k=V[0],U=V[1],F=Object(g.useDispatch)(),z=Object(b.g)().push,X=function(){return Object(L.a)().get("".concat(O.e,"/portfolio_items/").concat(i.id,"/service_plans")).then((function(e){var t=o()(e,1)[0].create_json_schema.schema;return w(e[0]),e[0].imported?Object(L.a)().get("".concat(O.e,"/service_plans/").concat(e[0].id,"/base")).then((function(e){return A(M(e.create_json_schema.schema)),M(t)})):M(t)})).then((function(e){d(e),E(!1)}))};Object(f.useEffect)((function(){X()}),[]);var $=function(e){return Object(L.i)().patchServicePlanModified("".concat(N.id),{modified:{schema:e}})},q=function(e){return Object(L.i)().createServicePlan({portfolio_item_id:i.id}).then((function(e){return o()(e,1)[0].id})).then((function(t){return Object(L.i)().patchServicePlanModified("".concat(t),{modified:{schema:e}})}))},Y=function(e){return E(!0),(N.imported?$:q)(function(e){var t=j({},e);return t.fields=t.fields.map((function(e){var t=e.validate,a=c()(e,["validate"]);return t?j(j({},a),{},{validate:t.map((function(e){var t=e.type;return j(j({},c()(e,["type"])),{},{type:t!==B.a.MAX_NUMBER_VALUE&&t!==B.a.MIN_NUMBER_VALUE?"".concat(t,"-validator"):t})}))}):a})),t}(function(e){var t=e.fields.map((function(e){var t=e;return t.isSubstitution&&(t.isDisabled=!0,t.placeholder=e.initialValue),t}));return j(j({},e),{},{fields:t})}(e))).then((function(){return E(!1),F(Object(C.addNotification)({variant:"success",title:"Survey of ".concat(i.name," has been modified."),dismissable:!0})),z({pathname:t,search:a})})).catch((function(e){E(!1),F({type:"EDIT_SURVEY_REJECTED",payload:e})}))};return p.a.createElement(f.Fragment,null,l?[p.a.createElement(x,n()({},H,{key:k,schema:l,disableDrag:!0,disableAdd:!0,schemaTemplate:_,mode:"subset",openEditor:!0}),(function(e){var r=e.getSchema,n=e.isValid,s=c()(e,["getSchema","isValid"]);return p.a.createElement(f.Fragment,null,p.a.createElement(T.b,{key:"survey-editor-toolbar",handleSaveSurvey:function(){return Y(r())},isValid:n,closeUrl:t,search:a,isFetching:m||!l,modified:null==N?void 0:N.modified,handleResetSurvey:function(){return e=N.id,d(void 0),void Object(L.i)().resetServicePlanModified(e).then(X).then((function(){return U((function(e){return e+1})),F(Object(C.addNotification)({variant:"success",title:"Survey of ".concat(i.name," has been restored."),dismissable:!0}))}));var e}}),p.a.createElement(I.BuilderTemplate,s),";")}))]:p.a.createElement(f.Fragment,null,p.a.createElement(T.b,{handleSaveSurvey:Y,closeUrl:t,search:a,isFetching:!l||m}),p.a.createElement(P.Bullseye,null,p.a.createElement(y.Spinner,null))))};K.propTypes={closeUrl:m.a.string.isRequired,search:m.a.string.isRequired,portfolioItem:m.a.shape({id:m.a.string.isRequired,name:m.a.string.isRequired}).isRequired,portfolio:m.a.object.isRequired},t.default=K}}]);
//# sourceMappingURL=../sourcemaps/survey-editor~31ecd969.js.map