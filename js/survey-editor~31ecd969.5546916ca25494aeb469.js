(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{424:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(3),a=n.__importStar(r(0)),o=r(4),i=n.__importDefault(r(110));t.CardHeader=e=>{var{children:t=null,className:r=""}=e,l=n.__rest(e,["children","className"]);return a.createElement("div",Object.assign({className:o.css(i.default.cardHeader,r)},l),t)},t.CardHeader.displayName="CardHeader"},467:function(e,t,r){"use strict";t.__esModule=!0,t.ExclamationCircleIconConfig={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0,transform:""},t.ExclamationCircleIcon=r(180).createIcon(t.ExclamationCircleIconConfig),t.default=t.ExclamationCircleIcon},788:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var a,o=r(600),i=r(0),l=n(i),c=n(r(11)),p=n(r(408)),s=r(789),d=r(58),f=r(76),u=r(77),m=r(424),h=r(87),b=r(47),E=r(400),y=r(548),v=r(547),g=n(r(790)),P=n(r(791)),_=n(r(792)),I=n(r(793)),T=n(r(467)),C=r(475),L=r(591),O=r(589),D=r(409),S=n(r(794)),x=n(r(795)),N=Object.freeze({__proto__:null,LABEL:{propertyName:"label",label:"Label",component:"input"},HELPER_TEXT:{propertyName:"helperText",label:"Helper text",component:"input"},PLACEHOLDER:{propertyName:"placeholder",label:"Placeholder",component:"input"},INPUT_TYPE:{label:"Input Type",propertyName:"type",options:["text","number","password"],component:"select"},IS_DISABLED:{propertyName:"isDisabled",label:"Disabled",component:"switch"},IS_READ_ONLY:{propertyName:"isReadOnly",label:"Read only",component:"switch"},OPTIONS:{propertyName:"options",label:"Options",component:"options"},IS_CLEARABLE:{propertyName:"isClearable",label:"Clearable",component:"switch"},CLOSE_ON_DAY_SELECT:{propertyName:"closeOnDaySelect",label:"Close on day select",component:"switch"},SHOW_TODAY_BUTTON:{propertyName:"showTodayButton",label:"Show today button",component:"switch"},TODAY_BUTTON_LABEL:{propertyName:"todayButtonLabel",label:"Today button label",component:"input"},MULTI_LINE_LABEL:{propertyName:"label",label:"Label",component:"textarea"},TITLE:{propertyName:"title",label:"Title",component:"input"},DESCRIPTION:{propertyName:"description",label:"Description",component:"input"},HIDE_FIELD:{propertyName:"hideField",label:"Hidden",component:"switch"}}),A=function(e,t){var r;return(r={},o._defineProperty(r,p.CHECKBOX,"Please, provide label"),o._defineProperty(r,p.PLAIN_TEXT,"Please provide a label to plain text component"),o._defineProperty(r,p.DUAL_LIST_SELECT,"Please pick label and options"),o._defineProperty(r,p.RADIO,"Please pick label and options"),r)[e]||(t?e:"")},R=function(e){var t=e.innerProps,r=t.hideField,n=t.snapshot,a=e.Component,i=(e.propertyName,e.fieldId,e.propertyValidation,e.hasPropertyError,o._objectWithoutProperties(e,["innerProps","Component","propertyName","fieldId","propertyValidation","hasPropertyError"]));return l.createElement("div",{className:s.clsx("pf4-component-wrapper",{hidden:r})},l.createElement("div",{className:"pf4-hidefield-overlay"},l.createElement(I,{size:"xl",className:"hide-indicator"}),l.createElement(a,o._extends({},i,{label:i.label||A(i.component,n.isDragging)},function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(t={},o._defineProperty(t,p.SELECT,{options:r.filter((function(e){return!e.deleted}))}),o._defineProperty(t,p.DUAL_LIST_SELECT,{options:r}),o._defineProperty(t,p.RADIO,{options:r}),t)[e]||{}}(i.component,i.options)))))},B=c.shape({isDragging:c.bool}).isRequired,w=c.oneOfType([c.node,c.arrayOf(c.node)]);R.propTypes={Component:c.elementType,component:c.string,innerProps:c.shape({snapshot:B,hideField:c.bool}).isRequired,label:c.string,preview:c.bool,id:c.string,initialized:c.bool,options:c.arrayOf(c.shape({value:c.any,label:c.string})),propertyName:c.string,fieldId:c.string,propertyValidation:c.any,hasPropertyError:c.bool};var j=function(e){var t=e.children,r=e.disableDrag,n=e.selected;return l.createElement("div",{style:{paddingBottom:8}},l.createElement("div",{className:s.clsx("pf4-field-layout",{"drag-disabled":r,selected:n})},t))};j.propTypes={children:w,disableDrag:c.bool,selected:c.bool};var H=function(e){var t=e.children,r=(e.isDraggingOver,o._objectWithoutProperties(e,["children","isDraggingOver"]));return l.createElement(f.Card,o._extends({},r,{className:"pf4-builder-column"}),l.createElement(u.CardBody,{className:"pf-c-form"},t))};H.propTypes={className:c.string,children:w,isDraggingOver:c.bool};var k=function(e){var t=e.propertiesChildren,r=e.validationChildren,n=e.addValidator,a=e.avaiableValidators,c=e.handleClose,p=e.handleDelete,s=e.hasPropertyError,m=i.useState(0),_=o._slicedToArray(m,2),I=_[0],L=_[1],O=C.InternalSelect;return l.createElement("div",{className:"pf4-properties-editor-container"},l.createElement(f.Card,{className:"pf4-properties-editor-header"},l.createElement(u.CardBody,null,l.createElement(E.Title,{headingLevel:"h2",size:"2xl",className:"pf4-properties-editor-title"},"Properties editor",p&&l.createElement(d.Button,{className:"editor-header-button",variant:"plain",onClick:p,isDisabled:!p,"aria-label":"delete field"},l.createElement(g,null)),l.createElement(d.Button,{className:"editor-header-button",variant:"plain","aria-label":"close properties editor",onClick:c},l.createElement(P,null))))),l.createElement(f.Card,null,l.createElement(u.CardBody,{className:"pf4-tabs-container"},l.createElement(v.Tabs,{className:"pf4-tabs",isFilled:!0,activeKey:I,onSelect:function(e,t){return L(t)}},l.createElement(y.Tab,{tabIndex:"-1",eventKey:0,title:l.createElement("span",null,"Properties ",s&&l.createElement(T,{className:"pf4-property-error-icon"}))}),l.createElement(y.Tab,{tabIndex:"-1",eventKey:1,title:"Validation"})))),l.createElement("div",{hidden:0!==I},l.createElement(f.Card,null,l.createElement(u.CardBody,null,l.createElement(h.Form,null,t)))),l.createElement("div",{hidden:1!==I},l.createElement(f.Card,{className:"pf4-validators-property-group"},l.createElement(u.CardBody,null,l.createElement(h.Form,null,l.createElement(b.FormGroup,{label:"Add validator",fieldId:"new-validator"},l.createElement(O,{id:"new-validator",placeholder:"Choose new validator",onChange:function(e){return n(e)},options:a}))))),r))};k.propTypes={propertiesChildren:w,validationChildren:w,avaiableValidators:c.arrayOf(c.shape({label:c.string,value:c.string})).isRequired,addValidator:c.func.isRequired,fieldName:c.string,handleClose:c.func.isRequired,handleDelete:c.func,hasPropertyError:c.array};var V=function(e){var t=e.className,r=e.children,n=e.title,a=e.handleDelete,i=o._objectWithoutProperties(e,["className","children","title","handleDelete"]);return l.createElement(f.Card,{className:"pf4-validators-property-group"},l.createElement(m.CardHeader,null,l.createElement(E.Title,{headingLevel:"h3",size:"1xl",className:"pf4-validators-validator-title"},n,a&&l.createElement(d.Button,{variant:"plain",onClick:a},l.createElement(g,null)))),l.createElement(u.CardBody,null,l.createElement(h.Form,o._extends({className:s.clsx(t,"pf4")},i),r)))};V.propTypes={className:c.string,children:w,title:c.string.isRequired,handleDelete:c.func};var M=function(e){var t=e.dragHandleProps,r=e.hasPropertyError,n=e.disableDrag;return n&&!r?null:l.createElement("div",o._extends({},t,{className:"pf4-drag-handle"}),r&&l.createElement(T,{className:"pf4-property-error-icon icon-spacer-bottom"}),!n&&l.createElement(_,{className:"pf4-drag-handle-icon"}))};M.propTypes={dragHandleProps:c.shape({"data-rbd-drag-handle-draggable-id":c.string,"data-rbd-drag-handle-context-id":c.string,"aria-labelledby":c.string,tabIndex:c.number,draggable:c.bool,onDragStart:c.func}),disableDrag:c.bool,hasPropertyError:c.bool};var q=function(e){var t=e.children,r=e.className;return l.createElement("div",{className:s.clsx(r,"pf-c-form","pf4-builder-form-container")},t)};q.propTypes={children:w,className:c.string};var F=(a={FieldLayout:j,PropertiesEditor:k,FormContainer:q},o._defineProperty(a,o.builderComponentTypes.BUILDER_FIELD,R),o._defineProperty(a,"BuilderColumn",H),o._defineProperty(a,"PropertyGroup",V),o._defineProperty(a,"DragHandle",M),o._defineProperty(a,"EmptyTarget",(function(){return l.createElement("h1",null,"Pick components from the component picker")})),a);var z;!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===r&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}('.pf4-picker-root {\n  width: 100%;\n  margin-bottom: 8px;\n}\n.pf4-picker-root>button {\n  width: 100%;\n  pointer-events: none;\n}\n.pf4-picker-root:hover > button {\n  background-color: var(--pf-c-button--m-primary--hover--BackgroundColor);\n}\n.pf4-builder-form-container {\n  flex-grow: 1;\n  width: 30%;\n  margin-top: 16px;\n  margin-left: 16px;\n  margin-right: 16px;\n}\n.pf4-component-wrapper {\n  flex-grow: 1;\n  position: relative;\n  padding: 8px;\n}\n\n.pf4-field-actions {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n}\n.pf4-danger-color:hover{\n  background-color: var(--pf-global--danger-color--100);\n}\nbutton:hover>svg.pf4-danger-color {\n  fill: var(--pf-global--danger-color--100);\n}\n.pf4-options-propery-editor-cell:not(:last-child) {\n  padding-right: 8px;\n}\n.pf4-properties-editor-title {\n  display: flex;\n}\n.pf4-properties-editor-title .editor-header-button:first-child {\n  margin-left: auto\n}\n.pf4-validators-validator-title {\n  font-weight: 600;\n  display: block;\n  justify-content: space-between;\n  align-items: center;\n}\n.pf4-validators-validator-title:first-letter {\n  text-transform: uppercase;\n}\n.pf4-tabs-container {\n  padding: 0 !important;\n}\n.pf4-field-layout.selected {\n  border-bottom: 3px solid var(--pf-global--primary-color--100);\n  transition: border-color .3s linear;\n}\n.pf4-validators-property-group:not(:last-child) {\n  border-bottom: 2px solid #ebebeb;\n}\n.pf4-field-layout {\n  cursor: pointer;\n  background-color: #fff;\n  flex-grow: 1;\n  box-shadow: var(--pf-global--BoxShadow--sm);\n  display: flex;\n}\n.pf4-field-layout.drag-disabled {\n  border-right: 1px solid lightgray;\n}\n.pf4-drag-handle {\n  position: relative;\n  padding: 4px;\n  padding-top: 8px;\n  border-left: none;\n  background-color: var(--pf-global--disabled-color--300);\n  display: flex;\n  flex-direction: column;\n  min-width: 25px;\n}\n.pf4-drag-handle .pf4-drag-handle-icon {\n  fill: #B9B9B9;\n  transition: fill .3s linear;\n}\n.pf4-field-layout.selected .pf4-drag-handle .pf4-drag-handle-icon, .pf4-field-layout:hover .pf4-drag-handle .pf4-drag-handle-icon {\n  fill: var(--pf-global--primary-color--100);\n}\n.pf4-properties-editor-container {\n  width: 33%;\n  min-width: 400px;\n  box-shadow: var(--pf-global--BoxShadow--md);\n  min-height: 100%;\n  background-color: #fff;\n}\n.pf4-properties-editor-container .pf-c-card {\n  box-shadow: none;\n}\n.pf4-options-property-editor-table tr:not(:last-child) td {\n  padding-bottom: 8px;\n}\nbutton:hover>svg.pf4-success-color{\n  fill: var(--pf-global--link--Color);\n}\n@keyframes overlay-transition {\n  from {\n    background-color: rgba(200,200,200,.0);\n  }\n  to {\n    background-color: rgba(200,200,200,.6);\n  }\n}\n\n.pf4-hidefield-overlay::before {\n  position: absolute;\n  content: "";\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  transition: background-color linear .3s;\n  background-color: transparent;\n  pointer-events: none;\n}\n.pf4-component-wrapper.hidden .pf4-hidefield-overlay::before {\n  background-color: rgba(200,200,200,.6);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: fill;\n}\n.pf4-component-wrapper svg.hide-indicator{\n  position: absolute;\n  left: calc(100% / 2);\n  top: calc(100% / 2 - 1.5em);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity linear .3s;\n}\n\n.pf4-component-wrapper.hidden svg.hide-indicator{\n  opacity: 1;\n}\n\n.pf4-property-error-icon {\n  fill: var(--pf-global--danger-color--100)\n}\n\n.icon-spacer-bottom {\n  margin-bottom: 8px;\n}\n\n.pf4-form-builder-layout-template {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.pf4-form-builder-components {\n  display: flex;\n  flex-grow: 1;\n}');var U=(z={},o._defineProperty(z,p.TEXT_FIELD,"Text field"),o._defineProperty(z,p.CHECKBOX,"Checkbox"),o._defineProperty(z,p.SELECT,"Select"),o._defineProperty(z,p.DATE_PICKER,"Date picker"),o._defineProperty(z,p.PLAIN_TEXT,"Plain text"),o._defineProperty(z,p.RADIO,"Radio"),o._defineProperty(z,p.SWITCH,"Switch"),o._defineProperty(z,p.TEXTAREA,"Textarea"),o._defineProperty(z,p.SUB_FORM,"Sub form"),o._defineProperty(z,p.DUAL_LIST_SELECT,"Dual list select"),o._defineProperty(z,p.SLIDER,"Slider"),z),X=function(e){var t=e.component;return l.createElement("div",{className:"pf4-picker-root"},l.createElement(d.Button,{tabIndex:-1,variant:"primary",color:"primary"},U[t]||t))};X.propTypes={component:c.string.isRequired};var W=o._defineProperty({},o.builderComponentTypes.PICKER_FIELD,X),Y=function(e){var t=e.propertyValidation.message,r=e.children,n=o._objectWithoutProperties(e,["propertyValidation","children"]);return l.createElement(b.FormGroup,o._extends({helperTextInvalid:t,validated:t?"error":"default"},n),r)};Y.propTypes={propertyValidation:c.shape({message:c.string}),children:c.oneOfType([c.node,c.arrayOf(c.node)])},Y.defaultProps={propertyValidation:{}};var K=function(e){var t=e.label,r=e.value,n=e.fieldId,a=e.innerProps.propertyValidation,c=o._objectWithoutProperties(e,["label","value","fieldId","innerProps"]);return l.createElement(i.Fragment,null,l.createElement(Y,{label:t,fieldId:n,propertyValidation:a},l.createElement(D.TextInput,o._extends({id:n,value:void 0===o._typeof(r)?"":r.toString()},c))))};K.propTypes={label:c.oneOfType([c.string]).isRequired,value:c.any,fieldId:c.string.isRequired,innerProps:c.shape({propertyValidation:c.shape({message:c.string})}).isRequired},K.defaultProps={onChange:function(){},value:""};var G=function(e){var t=e.value,r=e.fieldId,n=e.innerProps.propertyValidation,a=o._objectWithoutProperties(e,["value","fieldId","innerProps"]);return l.createElement(Y,{fieldId:r,propertyValidation:n},l.createElement(L.Switch,o._extends({isChecked:Boolean(t),id:r},a)))};G.propTypes={label:c.string.isRequired,value:c.any,fieldId:c.string.isRequired,innerProps:c.shape({propertyValidation:c.shape({message:c.string})}).isRequired},G.defaultProps={value:!1};var J=function(e){var t=e.label,r=e.options,n=e.fieldId,a=e.innerProps.propertyValidation,i=o._objectWithoutProperties(e,["label","options","fieldId","innerProps"]);return l.createElement(Y,{label:t,fieldId:n,propertyValidation:a},l.createElement(C.InternalSelect,o._extends({id:n,options:r.map((function(e){return{value:e,label:e}}))},i)))};J.propTypes={label:c.string.isRequired,options:c.arrayOf(c.string).isRequired,fieldId:c.string.isRequired,innerProps:c.shape({propertyValidation:c.shape({message:c.string})}).isRequired},J.defaultProps={onChange:function(){}};var Q=function(e){var t=e.value,r=void 0===t?[]:t,n=e.label,a=e.onChange,i=e.innerProps.restricted,c=function(e,t,n){return a(r.map((function(r,a){return t===a?o._objectSpread2({},r,o._defineProperty({},n,e)):r})))},p=function(e,t){var n;return n=t?r.map((function(t,r){return r===e?o._objectSpread2({},t,{deleted:!t.deleted}):t})):r.filter((function(t,r){return r!==e})),a(n.length>0?n:void 0)};return l.createElement("div",null,l.createElement("p",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"}},l.createElement("span",null,n),!i&&l.createElement(d.Button,{onClick:function(){return a([].concat(o._toConsumableArray(r),[{value:"",label:""}]))},variant:"plain","aria-label":"add option"},l.createElement(S,null))),l.createElement("table",{className:"pf4-options-property-editor-table"},l.createElement("tbody",null,r.map((function(e,t,r){var n=e.label,s=e.value,f=e.restoreable,u=e.deleted;return l.createElement("tr",{key:t},l.createElement("td",{className:"pf4-options-propery-editor-cell"},l.createElement(D.TextInput,{"aria-label":"option-label-".concat(t),isDisabled:u,placeholder:"Label",onChange:function(e){return c(e,t,"label")},value:n||"",type:"text"})),l.createElement("td",{className:"pf4-options-propery-editor-cell"},l.createElement(D.TextInput,{"aria-label":"option-value-".concat(t),onKeyPress:function(e){"Enter"===e.key&&t===r.length-1&&a([].concat(o._toConsumableArray(r),[{value:"",label:""}]))},placeholder:"Value",isDisabled:u||i,onChange:function(e){return c(e,t,"value")},value:s||"",type:"text"})),l.createElement("td",null,l.createElement(d.Button,{onClick:function(){return p(t,f)},variant:"plain","aria-label":"delete option"},u?l.createElement(x,{className:"pf4-success-color"}):l.createElement(g,{className:"pf4-danger-color"}))))})))))};Q.propTypes={value:c.array,label:c.string.isRequired,onChange:c.func.isRequired,innerProps:c.shape({restricted:c.bool}).isRequired};var Z=function(e){var t=e.value,r=e.fieldId,n=e.innerProps.propertyValidation,a=o._objectWithoutProperties(e,["value","fieldId","innerProps"]);return l.createElement(Y,{fieldId:r,propertyValidation:n},l.createElement(O.TextArea,o._extends({id:r,value:void 0===o._typeof(t)?"":t},a)))};Z.propTypes={value:c.string,fieldId:c.string.isRequired,innerProps:c.shape({propertyValidation:c.shape({message:c.string})}).isRequired},Z.defaultProps={onChange:function(){},value:""};var $={input:K,switch:G,select:J,options:Q,textarea:Z},ee=function(e){var t=e.ComponentPicker,r=e.PropertiesEditor,n=e.DropTarget,a=e.children;return l.createElement("div",{className:"pf4-form-builder-layout-template"},a,l.createElement("div",{className:"pf4-form-builder-components"},l.createElement(t,null),l.createElement(n,{key:"drop-target"}),l.createElement(r,null)))};ee.propTypes={ComponentPicker:c.func.isRequired,PropertiesEditor:c.func.isRequired,DropTarget:c.func.isRequired,children:c.oneOfType([c.element,c.arrayOf(c.element)])};var te=N;t.BuilderTemplate=ee,t.builderMapper=F,t.fieldProperties=te,t.pickerMapper=W,t.propertiesMapper=$},790:function(e,t,r){"use strict";t.__esModule=!0,t.TrashIconConfig={name:"TrashIcon",height:512,width:448,svgPath:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z",yOffset:0,xOffset:0,transform:""},t.TrashIcon=r(180).createIcon(t.TrashIconConfig),t.default=t.TrashIcon},791:function(e,t,r){"use strict";t.__esModule=!0,t.TimesIconConfig={name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0,transform:""},t.TimesIcon=r(180).createIcon(t.TimesIconConfig),t.default=t.TimesIcon},792:function(e,t,r){"use strict";t.__esModule=!0,t.GripVerticalIconConfig={name:"GripVerticalIcon",height:512,width:320,svgPath:"M96 32H32C14.33 32 0 46.33 0 64v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zM288 32h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0,transform:""},t.GripVerticalIcon=r(180).createIcon(t.GripVerticalIconConfig),t.default=t.GripVerticalIcon},793:function(e,t,r){"use strict";t.__esModule=!0,t.EyeSlashIconConfig={name:"EyeSlashIcon",height:512,width:640,svgPath:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z",yOffset:0,xOffset:0,transform:""},t.EyeSlashIcon=r(180).createIcon(t.EyeSlashIconConfig),t.default=t.EyeSlashIcon},794:function(e,t,r){"use strict";t.__esModule=!0,t.PlusIconConfig={name:"PlusIcon",height:512,width:448,svgPath:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0,transform:""},t.PlusIcon=r(180).createIcon(t.PlusIconConfig),t.default=t.PlusIcon},795:function(e,t,r){"use strict";t.__esModule=!0,t.TrashRestoreIconConfig={name:"TrashRestoreIcon",height:512,width:448,svgPath:"M53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32zm70.11-175.8l89.38-94.26a15.41 15.41 0 0 1 22.62 0l89.38 94.26c10.08 10.62 2.94 28.8-11.32 28.8H256v112a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V320h-57.37c-14.26 0-21.4-18.18-11.32-28.8zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z",yOffset:0,xOffset:0,transform:""},t.TrashRestoreIcon=r(180).createIcon(t.TrashRestoreIconConfig),t.default=t.TrashRestoreIcon},809:function(e,t,r){"use strict";r.r(t);var n,a=r(382),o=r.n(a),i=r(32),l=r.n(i),c=r(43),p=r.n(c),s=r(1),d=r.n(s),f=r(0),u=r.n(f),m=r(11),h=r.n(m),b=r(46),E=r(408),y=r.n(E),v=r(787),g=r.n(v),P=r(788),_=r(103),I=r(72),T=r(13),C=r(106),L=r(603),O=r(24),D=r(100),S=r(431),x=r(461),N=r.n(x);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){d()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var B=(n={},d()(n,y.a.TEXT_FIELD,{attributes:[P.fieldProperties.LABEL,P.fieldProperties.HELPER_TEXT,P.fieldProperties.PLACEHOLDER,P.fieldProperties.IS_DISABLED,P.fieldProperties.IS_READ_ONLY,P.fieldProperties.HIDE_FIELD]}),d()(n,y.a.CHECKBOX,{attributes:[P.fieldProperties.LABEL,P.fieldProperties.IS_DISABLED,P.fieldProperties.OPTIONS,P.fieldProperties.HIDE_FIELD]}),d()(n,y.a.SELECT,{attributes:[P.fieldProperties.OPTIONS,P.fieldProperties.LABEL,P.fieldProperties.IS_DISABLED,P.fieldProperties.PLACEHOLDER,P.fieldProperties.HELPER_TEXT,P.fieldProperties.HIDE_FIELD]}),d()(n,y.a.DATE_PICKER,{attributes:[P.fieldProperties.LABEL,P.fieldProperties.TODAY_BUTTON_LABEL,P.fieldProperties.IS_CLEARABLE,P.fieldProperties.CLOSE_ON_DAY_SELECT,P.fieldProperties.SHOW_TODAY_BUTTON,P.fieldProperties.HIDE_FIELD]}),d()(n,y.a.PLAIN_TEXT,{attributes:[P.fieldProperties.MULTI_LINE_LABEL]}),d()(n,y.a.RADIO,{attributes:[P.fieldProperties.LABEL,P.fieldProperties.IS_DISABLED,P.fieldProperties.OPTIONS,P.fieldProperties.HIDE_FIELD]}),d()(n,y.a.SWITCH,{attributes:[P.fieldProperties.LABEL,P.fieldProperties.IS_READ_ONLY,P.fieldProperties.IS_DISABLED,P.fieldProperties.HIDE_FIELD]}),d()(n,y.a.TEXTAREA,{attributes:[P.fieldProperties.LABEL,P.fieldProperties.HELPER_TEXT,P.fieldProperties.IS_READ_ONLY,P.fieldProperties.IS_DISABLED,P.fieldProperties.HIDE_FIELD]}),n);B["select-field"]=B[y.a.SELECT],B["textarea-field"]=B[y.a.TEXTAREA];var w={componentMapper:R({},S.a),builderMapper:R({},P.builderMapper),pickerMapper:R(R({},P.pickerMapper),{},{"select-field":P.pickerMapper[y.a.SELECT],"textarea-field":P.pickerMapper[y.a.TEXTAREA]}),propertiesMapper:P.propertiesMapper,componentProperties:B},j=function(e){var t=R({},e);return t.fields=t.fields.map((function(e){var t=e.validate,r=p()(e,["validate"]);return t?R(R({},r),{},{validate:t.map((function(e){var t=e.type;return R(R({},p()(e,["type"])),{},{type:S.b[t]||t})}))}):r})),t},H=function(e){return u.a.createElement(g.a,e)},k=function(e){var t=e.closeUrl,r=e.search,n=e.portfolioItem,a=e.uploadIcon,i=Object(f.useState)(),c=l()(i,2),s=c[0],d=c[1],m=Object(f.useState)(!1),h=l()(m,2),E=h[0],y=h[1],v=Object(f.useState)(),g=l()(v,2),S=g[0],x=g[1],A=Object(f.useState)(),B=l()(A,2),k=B[0],V=B[1],M=Object(f.useState)(0),q=l()(M,2),F=q[0],z=q[1],U=Object(O.useDispatch)(),X=Object(b.g)().push,W=function(){return Object(I.a)().get("".concat(T.c,"/portfolio_items/").concat(n.id,"/service_plans")).then((function(e){var t=l()(e,1)[0].create_json_schema.schema;return V(e[0]),e[0].imported?Object(I.a)().get("".concat(T.c,"/service_plans/").concat(e[0].id,"/base")).then((function(e){return x(j(e.create_json_schema.schema)),j(t)})):j(t)})).then((function(e){d(e),y(!1)}))};Object(f.useEffect)((function(){W()}),[]);var Y=function(e){return Object(I.h)().patchServicePlanModified("".concat(k.id),{modified:{schema:e}})},K=function(e){return Object(I.h)().createServicePlan({portfolio_item_id:n.id}).then((function(e){return l()(e,1)[0].id})).then((function(t){return Object(I.h)().patchServicePlanModified("".concat(t),{modified:{schema:e}})}))},G=function(e){return y(!0),(k.imported?Y:K)(function(e){var t=R({},e);return t.fields=t.fields.map((function(e){var t=e.validate,r=p()(e,["validate"]);return t?R(R({},r),{},{validate:t.map((function(e){var t=e.type;return R(R({},p()(e,["type"])),{},{type:t!==N.a.MAX_NUMBER_VALUE&&t!==N.a.MIN_NUMBER_VALUE?"".concat(t,"-validator"):t})}))}):r})),t}(e)).then((function(){return y(!1),U(Object(D.addNotification)({variant:"success",title:"Survey of ".concat(n.name," has been modified."),dismissable:!0})),X({pathname:t,search:r})})).catch((function(e){y(!1),U({type:"EDIT_SURVEY_REJECTED",payload:e})}))};return u.a.createElement(f.Fragment,null,s?[u.a.createElement(H,o()({},w,{key:F,schema:s,disableDrag:!0,disableAdd:!0,schemaTemplate:S,mode:"subset"}),(function(e){var o=e.getSchema,i=e.isValid,l=p()(e,["getSchema","isValid"]);return u.a.createElement(f.Fragment,null,u.a.createElement(L.b,{key:"survey-editor-toolbar",uploadIcon:a,product:n,handleSaveSurvey:function(){return G(o())},isValid:i,closeUrl:t,search:r,isFetching:E||!s,modified:null==k?void 0:k.modified,handleResetSurvey:function(){return e=k.id,d(void 0),void Object(I.h)().resetServicePlanModified(e).then(W).then((function(){return z((function(e){return e+1})),U(Object(D.addNotification)({variant:"success",title:"Survey of ".concat(n.name," has been restored."),dismissable:!0}))}));var e}}),u.a.createElement(P.BuilderTemplate,l),";")}))]:u.a.createElement(f.Fragment,null,u.a.createElement(L.b,{uploadIcon:a,product:n,handleSaveSurvey:G,closeUrl:t,search:r,isFetching:!s||E}),u.a.createElement(C.Bullseye,null,u.a.createElement(_.Spinner,null))))};k.propTypes={closeUrl:h.a.string.isRequired,search:h.a.string.isRequired,uploadIcon:h.a.func.isRequired,portfolioItem:h.a.shape({id:h.a.string.isRequired,name:h.a.string.isRequired}).isRequired,portfolio:h.a.object.isRequired},t.default=k}}]);
//# sourceMappingURL=../sourcemaps/survey-editor~31ecd969.js.map