(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1017:function(e,t,i){"use strict";i.r(t);var r,a=i(652),n=i.n(a),s=i(117),o=i.n(s),l=i(685),c=i.n(l),d=i(164),u=i.n(d),f=i(0),p=i.n(f),h=i(16),b=i.n(h),m=i(97),E=i(43),v=i.n(E),S=i(987),_=i.n(S),I=i(988),y=i(167),L=i(28),O=i(5),P=i(276),T=i(879),C=i(21),g=i(131),A=i(218),D=i(34),B=i.n(D);function R(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function j(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?R(Object(i),!0).forEach((function(t){u()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):R(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var N=j(j({},I.fieldProperties.IS_DISABLED),{},{propertyName:"isSubstitution",label:"Substitution"}),w=(r={},u()(r,v.a.TEXT_FIELD,{attributes:[I.fieldProperties.LABEL,I.fieldProperties.HELPER_TEXT,I.fieldProperties.PLACEHOLDER,I.fieldProperties.IS_DISABLED,I.fieldProperties.IS_READ_ONLY,I.fieldProperties.HIDE_FIELD,N]}),u()(r,v.a.CHECKBOX,{attributes:[I.fieldProperties.LABEL,I.fieldProperties.IS_DISABLED,I.fieldProperties.OPTIONS,I.fieldProperties.HIDE_FIELD]}),u()(r,v.a.SELECT,{attributes:[I.fieldProperties.OPTIONS,I.fieldProperties.LABEL,I.fieldProperties.IS_DISABLED,I.fieldProperties.PLACEHOLDER,I.fieldProperties.HELPER_TEXT,I.fieldProperties.HIDE_FIELD,N]}),u()(r,v.a.DATE_PICKER,{attributes:[I.fieldProperties.LABEL,I.fieldProperties.TODAY_BUTTON_LABEL,I.fieldProperties.IS_CLEARABLE,I.fieldProperties.CLOSE_ON_DAY_SELECT,I.fieldProperties.SHOW_TODAY_BUTTON,I.fieldProperties.HIDE_FIELD,N]}),u()(r,v.a.PLAIN_TEXT,{attributes:[I.fieldProperties.MULTI_LINE_LABEL,N]}),u()(r,v.a.RADIO,{attributes:[I.fieldProperties.LABEL,I.fieldProperties.IS_DISABLED,I.fieldProperties.OPTIONS,I.fieldProperties.HIDE_FIELD]}),u()(r,v.a.SWITCH,{attributes:[I.fieldProperties.LABEL,I.fieldProperties.IS_READ_ONLY,I.fieldProperties.IS_DISABLED,I.fieldProperties.HIDE_FIELD]}),u()(r,v.a.TEXTAREA,{attributes:[I.fieldProperties.LABEL,I.fieldProperties.HELPER_TEXT,I.fieldProperties.IS_READ_ONLY,I.fieldProperties.IS_DISABLED,I.fieldProperties.HIDE_FIELD,N]}),r);w["select-field"]=w[v.a.SELECT],w["textarea-field"]=w[v.a.TEXTAREA];var M={componentMapper:j({},A.a),builderMapper:j({},I.builderMapper),pickerMapper:j(j({},I.pickerMapper),{},{"select-field":I.pickerMapper[v.a.SELECT],"textarea-field":I.pickerMapper[v.a.TEXTAREA]}),propertiesMapper:I.propertiesMapper,componentProperties:w},H=function(e){var t=j({},e);return t.fields=t.fields.map((function(e){var t=e.validate,i=c()(e,["validate"]);return t?j(j({},i),{},{validate:t.map((function(e){var t=e.type;return j(j({},c()(e,["type"])),{},{type:A.b[t]||t})}))}):i})),t},K=function(e){return p.a.createElement(_.a,e)},V=function(e){var t=e.closeUrl,i=e.search,r=e.portfolioItem,a=Object(f.useState)(),s=o()(a,2),l=s[0],d=s[1],u=Object(f.useState)(!1),h=o()(u,2),b=h[0],E=h[1],v=Object(f.useState)(),S=o()(v,2),_=S[0],A=S[1],D=Object(f.useState)(),R=o()(D,2),N=R[0],w=R[1],V=Object(f.useState)(0),x=o()(V,2),U=x[0],k=x[1],F=Object(C.useDispatch)(),z=Object(m.g)().push,X=function(){return Object(L.a)().get("".concat(O.e,"/portfolio_items/").concat(r.id,"/service_plans")).then((function(e){var t=o()(e,1)[0].create_json_schema.schema;return w(e[0]),e[0].imported?Object(L.a)().get("".concat(O.e,"/service_plans/").concat(e[0].id,"/base")).then((function(e){return A(H(e.create_json_schema.schema)),H(t)})):H(t)})).then((function(e){d(e),E(!1)}))};Object(f.useEffect)((function(){X()}),[]);var $=function(e){return Object(L.i)().patchServicePlanModified("".concat(N.id),{modified:{schema:e}})},q=function(e){return Object(L.i)().createServicePlan({portfolio_item_id:r.id}).then((function(e){return o()(e,1)[0].id})).then((function(t){return Object(L.i)().patchServicePlanModified("".concat(t),{modified:{schema:e}})}))},Y=function(e){return E(!0),(N.imported?$:q)(function(e){var t=j({},e);return t.fields=t.fields.map((function(e){var t=e.validate,i=c()(e,["validate"]);return t?j(j({},i),{},{validate:t.map((function(e){var t=e.type;return j(j({},c()(e,["type"])),{},{type:t!==B.a.MAX_NUMBER_VALUE&&t!==B.a.MIN_NUMBER_VALUE?"".concat(t,"-validator"):t})}))}):i})),t}(function(e){var t=e.fields.map((function(e){var t=e;return t.isSubstitution&&(t.isDisabled=!0,t.placeholder=e.initialValue),t}));return j(j({},e),{},{fields:t})}(e))).then((function(){return E(!1),F(Object(g.addNotification)({variant:"success",title:"Survey of ".concat(r.name," has been modified."),dismissable:!0})),z({pathname:t,search:i})})).catch((function(e){E(!1),F({type:"EDIT_SURVEY_REJECTED",payload:e})}))};return p.a.createElement(f.Fragment,null,l?[p.a.createElement(K,n()({},M,{key:U,schema:l,disableDrag:!0,disableAdd:!0,schemaTemplate:_,mode:"subset",openEditor:!0}),(function(e){var a=e.getSchema,n=e.isValid,s=c()(e,["getSchema","isValid"]);return p.a.createElement(f.Fragment,null,p.a.createElement(T.b,{key:"survey-editor-toolbar",handleSaveSurvey:function(){return Y(a())},isValid:n,closeUrl:t,search:i,isFetching:b||!l,modified:null==N?void 0:N.modified,handleResetSurvey:function(){return e=N.id,d(void 0),void Object(L.i)().resetServicePlanModified(e).then(X).then((function(){return k((function(e){return e+1})),F(Object(g.addNotification)({variant:"success",title:"Survey of ".concat(r.name," has been restored."),dismissable:!0}))}));var e}}),p.a.createElement(I.BuilderTemplate,s),";")}))]:p.a.createElement(f.Fragment,null,p.a.createElement(T.b,{handleSaveSurvey:Y,closeUrl:t,search:i,isFetching:!l||b}),p.a.createElement(P.Bullseye,null,p.a.createElement(y.Spinner,null))))};V.propTypes={closeUrl:b.a.string.isRequired,search:b.a.string.isRequired,portfolioItem:b.a.shape({id:b.a.string.isRequired,name:b.a.string.isRequired}).isRequired,portfolio:b.a.object.isRequired},t.default=V},731:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardHeader=void 0;const r=i(1),a=r.__importStar(i(0)),n=i(2),s=r.__importDefault(i(53));t.CardHeader=e=>{var{children:t=null,className:i=""}=e,o=r.__rest(e,["children","className"]);return a.createElement("div",Object.assign({className:n.css(s.default.cardHeader,i)},o),t)},t.CardHeader.displayName="CardHeader"},876:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Tabs=t.TabsContextConsumer=t.TabsContextProvider=t.TabsComponent=void 0;const r=i(1),a=r.__importStar(i(0)),n=r.__importDefault(i(671)),s=r.__importDefault(i(29)),o=i(2),l=r.__importDefault(i(355)),c=r.__importDefault(i(370)),d=i(116),u=i(991),f=i(992),p=i(36);var h;!function(e){e.div="div",e.nav="nav"}(h=t.TabsComponent||(t.TabsComponent={}));const b=a.createContext({variant:"default"});t.TabsContextProvider=b.Provider,t.TabsContextConsumer=b.Consumer;const m={default:"",light300:n.default.modifiers.colorSchemeLight_300};class E extends a.Component{constructor(e){super(e),this.tabList=a.createRef(),this.handleScrollButtons=()=>{if(this.tabList.current&&!this.props.isVertical){const e=this.tabList.current,t=!d.isElementInView(e,e.firstChild,!1),i=!d.isElementInView(e,e.lastChild,!1),r=t||i,a=!t,n=!i;this.setState({showScrollButtons:r,disableLeftScrollButton:a,disableRightScrollButton:n})}},this.scrollLeft=()=>{if(this.tabList.current){const e=this.tabList.current,t=Array.from(e.children);let i,r,a;for(a=0;a<t.length&&!i;a++)d.isElementInView(e,t[a],!1)&&(i=t[a],r=t[a-1]);r&&(e.scrollLeft-=r.scrollWidth)}},this.scrollRight=()=>{if(this.tabList.current){const e=this.tabList.current,t=Array.from(e.children);let i,r;for(let a=t.length-1;a>=0&&!i;a--)d.isElementInView(e,t[a],!1)&&(i=t[a],r=t[a+1]);r&&(e.scrollLeft+=r.scrollWidth)}},this.state={showScrollButtons:!1,disableLeftScrollButton:!1,disableRightScrollButton:!1,shownKeys:[this.props.activeKey],ouiaStateId:p.getDefaultOUIAId(E.displayName)}}handleTabClick(e,t,i,r){const{shownKeys:n}=this.state;this.props.onSelect(e,t),i&&(a.Children.toArray(this.props.children).map(e=>e).filter(e=>e.props&&e.props.tabContentRef&&e.props.tabContentRef.current).forEach(e=>e.props.tabContentRef.current.hidden=!0),i.current&&(i.current.hidden=!1)),r&&this.setState({shownKeys:n.concat(t)})}componentDidMount(){this.props.isVertical||(window.addEventListener("resize",this.handleScrollButtons,!1),this.handleScrollButtons())}componentWillUnmount(){this.props.isVertical||window.removeEventListener("resize",this.handleScrollButtons,!1)}componentDidUpdate(e){const{activeKey:t,mountOnEnter:i}=this.props,{shownKeys:r}=this.state;e.activeKey!==t&&i&&r.indexOf(t)<0&&this.setState({shownKeys:r.concat(t)})}render(){const e=this.props,{className:i,children:b,activeKey:v,id:S,isFilled:_,isSecondary:I,isVertical:y,isBox:L,leftScrollAriaLabel:O,rightScrollAriaLabel:P,"aria-label":T,component:C,ouiaId:g,ouiaSafe:A,mountOnEnter:D,unmountOnExit:B,inset:R,variant:j}=e,N=r.__rest(e,["className","children","activeKey","id","isFilled","isSecondary","isVertical","isBox","leftScrollAriaLabel","rightScrollAriaLabel","aria-label","component","ouiaId","ouiaSafe","mountOnEnter","unmountOnExit","inset","variant"]),{showScrollButtons:w,disableLeftScrollButton:M,disableRightScrollButton:H,shownKeys:K}=this.state,V=a.Children.toArray(b).filter(Boolean).filter(e=>!e.props.isHidden),x=S||d.getUniqueId(),U=C===h.nav?"nav":"div";return a.createElement(t.TabsContextProvider,{value:{variant:j}},a.createElement(U,Object.assign({"aria-label":T,className:o.css(n.default.tabs,_&&n.default.modifiers.fill,I&&n.default.modifiers.secondary,y&&n.default.modifiers.vertical,L&&n.default.modifiers.box,w&&!y&&n.default.modifiers.scrollable,d.formatBreakpointMods(R,n.default),m[j],i)},p.getOUIAProps(E.displayName,void 0!==g?g:this.state.ouiaStateId,A),{id:S&&S},N),a.createElement("button",{className:o.css(n.default.tabsScrollButton,I&&s.default.modifiers.secondary),"aria-label":O,onClick:this.scrollLeft,disabled:M,"aria-hidden":M},a.createElement(l.default,null)),a.createElement("ul",{className:o.css(n.default.tabsList),ref:this.tabList,onScroll:this.handleScrollButtons},V.map((e,t)=>{const i=e.props,{title:s,eventKey:l,tabContentRef:c,id:d,tabContentId:f,isHidden:p,className:h="",ouiaId:b}=i,m=r.__rest(i,["title","eventKey","tabContentRef","id","tabContentId","isHidden","className","ouiaId"]);let E=f?""+f:`pf-tab-section-${l}-${d||x}`;return(D||B)&&l!==v&&(E=void 0),a.createElement("li",{key:t,className:o.css(n.default.tabsItem,l===v&&n.default.modifiers.current,h)},a.createElement(u.TabButton,Object.assign({className:o.css(n.default.tabsLink),onClick:e=>this.handleTabClick(e,l,c,D),id:`pf-tab-${l}-${d||x}`,"aria-controls":E,tabContentRef:c,ouiaId:b},m),s))})),a.createElement("button",{className:o.css(n.default.tabsScrollButton,I&&s.default.modifiers.secondary),"aria-label":P,onClick:this.scrollRight,disabled:H,"aria-hidden":H},a.createElement(c.default,null))),V.filter(e=>e.props.children&&!(B&&e.props.eventKey!==v)&&!(D&&-1===K.indexOf(e.props.eventKey))).map((e,t)=>a.createElement(f.TabContent,{key:t,activeKey:v,child:e,id:e.props.id||x,ouiaId:e.props.ouiaId})))}}t.Tabs=E,E.displayName="Tabs",E.defaultProps={activeKey:0,onSelect:()=>{},isFilled:!1,isSecondary:!1,isVertical:!1,isBox:!1,leftScrollAriaLabel:"Scroll left",rightScrollAriaLabel:"Scroll right",component:h.div,mountOnEnter:!1,unmountOnExit:!1,ouiaSafe:!0,variant:"default"}},990:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Tab=void 0,t.Tab=()=>null,t.Tab.displayName="Tab"},991:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TabButton=void 0;const r=i(1),a=r.__importStar(i(0)),n=i(36);t.TabButton=e=>{var{children:i,tabContentRef:s,ouiaId:o,ouiaSafe:l}=e,c=r.__rest(e,["children","tabContentRef","ouiaId","ouiaSafe"]);const d=c.href?"a":"button";return a.createElement(d,Object.assign({},n.getOUIAProps(t.TabButton.displayName,o,l),c),i)},t.TabButton.displayName="TabButton"},992:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TabContent=void 0;const r=i(1),a=r.__importStar(i(0)),n=r.__importDefault(i(673)),s=i(2),o=i(36),l=i(876),c={default:"",light300:n.default.modifiers.light_300},d=e=>{var{id:t,activeKey:i,"aria-label":n,child:d,children:u,className:f,eventKey:p,innerRef:h,ouiaId:b,ouiaSafe:m}=e,E=r.__rest(e,["id","activeKey","aria-label","child","children","className","eventKey","innerRef","ouiaId","ouiaSafe"]);if(u||d){let e;return e=n?null:u?`pf-tab-${p}-${t}`:`pf-tab-${d.props.eventKey}-${t}`,a.createElement(l.TabsContextConsumer,null,({variant:r})=>a.createElement("section",Object.assign({ref:h,hidden:u?null:d.props.eventKey!==i,className:u?s.css("pf-c-tab-content",f,c[r]):s.css("pf-c-tab-content",d.props.className,c[r]),id:u?t:`pf-tab-section-${d.props.eventKey}-${t}`,"aria-label":n,"aria-labelledby":e,role:"tabpanel",tabIndex:0},o.getOUIAProps("TabContent",b,m),E),u||d.props.children))}return null};t.TabContent=a.forwardRef((e,t)=>a.createElement(d,Object.assign({},e,{innerRef:t})))},993:function(e,t,i){"use strict";t.__esModule=!0,t.GripVerticalIconConfig={name:"GripVerticalIcon",height:512,width:320,svgPath:"M96 32H32C14.33 32 0 46.33 0 64v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zM288 32h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0},t.GripVerticalIcon=i(26).createIcon(t.GripVerticalIconConfig),t.default=t.GripVerticalIcon},994:function(e,t,i){"use strict";t.__esModule=!0,t.EyeSlashIconConfig={name:"EyeSlashIcon",height:512,width:640,svgPath:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z",yOffset:0,xOffset:0},t.EyeSlashIcon=i(26).createIcon(t.EyeSlashIconConfig),t.default=t.EyeSlashIcon},995:function(e,t,i){"use strict";t.__esModule=!0,t.TrashRestoreIconConfig={name:"TrashRestoreIcon",height:512,width:448,svgPath:"M53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32zm70.11-175.8l89.38-94.26a15.41 15.41 0 0 1 22.62 0l89.38 94.26c10.08 10.62 2.94 28.8-11.32 28.8H256v112a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V320h-57.37c-14.26 0-21.4-18.18-11.32-28.8zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z",yOffset:0,xOffset:0},t.TrashRestoreIcon=i(26).createIcon(t.TrashRestoreIconConfig),t.default=t.TrashRestoreIcon}}]);
//# sourceMappingURL=../sourcemaps/survey-editor~31ecd969.js.map