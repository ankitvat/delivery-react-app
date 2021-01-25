/*! For license information please see 9.0d6a132f.chunk.js.LICENSE.txt */
(this["webpackJsonpdelivery-crm"]=this["webpackJsonpdelivery-crm"]||[]).push([[9],{111:function(e,t,a){"use strict";var r=a(1),n=a(39),o=a(4),i=a(0),c=(a(9),a(31)),s=a(102),l=a(103),d=a(21),u=a(357),f=i.forwardRef((function(e,t){var a=e.autoFocus,d=e.checked,f=e.checkedIcon,m=e.classes,p=e.className,v=e.defaultChecked,b=e.disabled,h=e.icon,g=e.id,y=e.inputProps,O=e.inputRef,x=e.name,j=e.onBlur,k=e.onChange,w=e.onFocus,C=e.readOnly,S=e.required,E=e.tabIndex,M=e.type,L=e.value,N=Object(o.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),P=Object(s.a)({controlled:d,default:Boolean(v),name:"SwitchBase",state:"checked"}),R=Object(n.a)(P,2),I=R[0],U=R[1],A=Object(l.a)(),z=b;A&&"undefined"===typeof z&&(z=A.disabled);var D="checkbox"===M||"radio"===M;return i.createElement(u.a,Object(r.a)({component:"span",className:Object(c.a)(m.root,p,I&&m.checked,z&&m.disabled),disabled:z,tabIndex:null,role:void 0,onFocus:function(e){w&&w(e),A&&A.onFocus&&A.onFocus(e)},onBlur:function(e){j&&j(e),A&&A.onBlur&&A.onBlur(e)},ref:t},N),i.createElement("input",Object(r.a)({autoFocus:a,checked:d,defaultChecked:v,className:m.input,disabled:z,id:D&&g,name:x,onChange:function(e){var t=e.target.checked;U(t),k&&k(e,t)},readOnly:C,ref:O,required:S,tabIndex:E,type:M,value:L},y)),I?f:h)}));t.a=Object(d.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(f)},195:function(e,t,a){"use strict";var r=a(1),n=a(4),o=a(0),i=(a(9),a(31)),c=a(103),s=a(21),l=a(356),d=a(37),u=o.forwardRef((function(e,t){e.checked;var a=e.classes,s=e.className,u=e.control,f=e.disabled,m=(e.inputRef,e.label),p=e.labelPlacement,v=void 0===p?"end":p,b=(e.name,e.onChange,e.value,Object(n.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),h=Object(c.a)(),g=f;"undefined"===typeof g&&"undefined"!==typeof u.props.disabled&&(g=u.props.disabled),"undefined"===typeof g&&h&&(g=h.disabled);var y={disabled:g};return["checked","name","onChange","value","inputRef"].forEach((function(t){"undefined"===typeof u.props[t]&&"undefined"!==typeof e[t]&&(y[t]=e[t])})),o.createElement("label",Object(r.a)({className:Object(i.a)(a.root,s,"end"!==v&&a["labelPlacement".concat(Object(d.a)(v))],g&&a.disabled),ref:t},b),o.cloneElement(u,y),o.createElement(l.a,{component:"span",className:Object(i.a)(a.label,g&&a.disabled)},m))}));t.a=Object(s.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(u)},197:function(e,t,a){"use strict";var r=a(0),n=r.createContext();t.a=n},314:function(e,t,a){var r;r=function(e){return function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s="./src/react-webcam.tsx")}({"./src/react-webcam.tsx":function(e,t,a){"use strict";a.r(t);var r=a("react"),n=function(){var e=function(t,a){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(t,a)};return function(t,a){function r(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(r.prototype=a.prototype,new r)}}(),o=function(){return(o=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},i=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};function c(){return!(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)}"undefined"!==typeof window&&(void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var t=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return t?new Promise((function(a,r){t.call(navigator,e,a,r)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}));var s=function(e){function t(t){var a=e.call(this,t)||this;return a.canvas=null,a.ctx=null,a.unmounted=!1,a.state={hasUserMedia:!1},a}return n(t,e),t.prototype.componentDidMount=function(){var e=this.state,t=this.props;c()?e.hasUserMedia||this.requestUserMedia():t.onUserMediaError("getUserMedia not supported")},t.prototype.componentDidUpdate=function(e){var t=this.props;if(c()){var a=JSON.stringify(e.audioConstraints)!==JSON.stringify(t.audioConstraints),r=JSON.stringify(e.videoConstraints)!==JSON.stringify(t.videoConstraints),n=e.minScreenshotWidth!==t.minScreenshotWidth,o=e.minScreenshotHeight!==t.minScreenshotHeight;(r||n||o)&&(this.canvas=null,this.ctx=null),(a||r)&&(this.stopAndCleanup(),this.requestUserMedia())}else t.onUserMediaError("getUserMedia not supported")},t.prototype.componentWillUnmount=function(){this.unmounted=!0,this.stopAndCleanup()},t.stopMediaStream=function(e){e&&(e.getVideoTracks&&e.getAudioTracks?(e.getVideoTracks().map((function(e){return e.stop()})),e.getAudioTracks().map((function(e){return e.stop()}))):e.stop())},t.prototype.stopAndCleanup=function(){var e=this.state;e.hasUserMedia&&(t.stopMediaStream(this.stream),e.src&&window.URL.revokeObjectURL(e.src))},t.prototype.getScreenshot=function(e){var t=this.state,a=this.props;if(!t.hasUserMedia)return null;var r=this.getCanvas(e);return r&&r.toDataURL(a.screenshotFormat,a.screenshotQuality)},t.prototype.getCanvas=function(e){var t=this.state,a=this.props;if(!this.video)return null;if(!t.hasUserMedia||!this.video.videoHeight)return null;if(!this.ctx){var r=this.video.videoWidth,n=this.video.videoHeight;if(!this.props.forceScreenshotSourceSize){var o=r/n;n=(r=a.minScreenshotWidth||this.video.clientWidth)/o,a.minScreenshotHeight&&n<a.minScreenshotHeight&&(r=(n=a.minScreenshotHeight)*o)}this.canvas=document.createElement("canvas"),this.canvas.width=(null===e||void 0===e?void 0:e.width)||r,this.canvas.height=(null===e||void 0===e?void 0:e.height)||n,this.ctx=this.canvas.getContext("2d")}var i=this.ctx,c=this.canvas;return i&&c&&(a.mirrored&&(i.translate(c.width,0),i.scale(-1,1)),i.imageSmoothingEnabled=a.imageSmoothing,i.drawImage(this.video,0,0,(null===e||void 0===e?void 0:e.width)||c.width,(null===e||void 0===e?void 0:e.height)||c.height),a.mirrored&&(i.scale(-1,1),i.translate(-c.width,0))),c},t.prototype.requestUserMedia=function(){var e=this,a=this.props,r=function(r,n){var o={video:"undefined"===typeof n||n};a.audio&&(o.audio="undefined"===typeof r||r),navigator.mediaDevices.getUserMedia(o).then((function(a){e.unmounted?t.stopMediaStream(a):e.handleUserMedia(null,a)})).catch((function(t){e.handleUserMedia(t)}))};if("mediaDevices"in navigator)r(a.audioConstraints,a.videoConstraints);else{var n=function(e){return{optional:[{sourceId:e}]}},o=function(e){var t=e.deviceId;return"string"===typeof t?t:Array.isArray(t)&&t.length>0?t[0]:"object"===typeof t&&t.ideal?t.ideal:null};MediaStreamTrack.getSources((function(e){var t=null,i=null;e.forEach((function(e){"audio"===e.kind?t=e.id:"video"===e.kind&&(i=e.id)}));var c=o(a.audioConstraints);c&&(t=c);var s=o(a.videoConstraints);s&&(i=s),r(n(t),n(i))}))}},t.prototype.handleUserMedia=function(e,t){var a=this.props;if(e||!t)return this.setState({hasUserMedia:!1}),void a.onUserMediaError(e);this.stream=t;try{this.video&&(this.video.srcObject=t),this.setState({hasUserMedia:!0})}catch(r){this.setState({hasUserMedia:!0,src:window.URL.createObjectURL(t)})}a.onUserMedia(t)},t.prototype.render=function(){var e=this,t=this.state,a=this.props,n=a.audio,c=(a.forceScreenshotSourceSize,a.onUserMedia,a.onUserMediaError,a.screenshotFormat,a.screenshotQuality,a.minScreenshotWidth,a.minScreenshotHeight,a.audioConstraints,a.videoConstraints,a.imageSmoothing,a.mirrored),s=a.style,l=void 0===s?{}:s,d=i(a,["audio","forceScreenshotSourceSize","onUserMedia","onUserMediaError","screenshotFormat","screenshotQuality","minScreenshotWidth","minScreenshotHeight","audioConstraints","videoConstraints","imageSmoothing","mirrored","style"]),u=c?o(o({},l),{transform:(l.transform||"")+" scaleX(-1)"}):l;return r.createElement("video",o({autoPlay:!0,src:t.src,muted:n,playsInline:!0,ref:function(t){e.video=t},style:u},d))},t.defaultProps={audio:!0,forceScreenshotSourceSize:!1,imageSmoothing:!0,mirrored:!1,onUserMedia:function(){},onUserMediaError:function(){},screenshotFormat:"image/webp",screenshotQuality:.92},t}(r.Component);t.default=s},react:function(t,a){t.exports=e}}).default},e.exports=r(a(0))},315:function(e,t,a){"use strict";var r=a(94),n=a(95);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),i=(0,r(a(96)).default)(o.createElement("path",{d:"M9.4 10.5l4.77-8.26C13.47 2.09 12.75 2 12 2c-2.4 0-4.6.85-6.32 2.25l3.66 6.35.06-.1zM21.54 9c-.92-2.92-3.15-5.26-6-6.34L11.88 9h9.66zm.26 1h-7.49l.29.5 4.76 8.25C21 16.97 22 14.61 22 12c0-.69-.07-1.35-.2-2zM8.54 12l-3.9-6.75C3.01 7.03 2 9.39 2 12c0 .69.07 1.35.2 2h7.49l-1.15-2zm-6.08 3c.92 2.92 3.15 5.26 6 6.34L12.12 15H2.46zm11.27 0l-3.9 6.76c.7.15 1.42.24 2.17.24 2.4 0 4.6-.85 6.32-2.25l-3.66-6.35-.93 1.6z"}),"Camera");t.default=i},316:function(e,t,a){"use strict";var r=a(94),n=a(95);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),i=(0,r(a(96)).default)(o.createElement("path",{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}),"Replay");t.default=i},317:function(e,t,a){"use strict";var r=a(94),n=a(95);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),i=(0,r(a(96)).default)(o.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight");t.default=i},318:function(e,t,a){"use strict";var r=a(94),n=a(95);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),i=(0,r(a(96)).default)(o.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),"KeyboardArrowLeft");t.default=i},375:function(e,t,a){"use strict";var r=a(1),n=a(4),o=a(0),i=(a(9),a(31)),c=a(111),s=a(100),l=Object(s.a)(o.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),d=Object(s.a)(o.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),u=a(21);var f=Object(u.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,a=e.classes,r=e.fontSize;return o.createElement("div",{className:Object(i.a)(a.root,t&&a.checked)},o.createElement(l,{fontSize:r}),o.createElement(d,{fontSize:r,className:a.layer}))})),m=a(23),p=a(37),v=a(109),b=a(197);var h=o.createElement(f,{checked:!0}),g=o.createElement(f,null),y=o.forwardRef((function(e,t){var a=e.checked,s=e.classes,l=e.color,d=void 0===l?"secondary":l,u=e.name,f=e.onChange,m=e.size,y=void 0===m?"medium":m,O=Object(n.a)(e,["checked","classes","color","name","onChange","size"]),x=o.useContext(b.a),j=a,k=Object(v.a)(f,x&&x.onChange),w=u;return x&&("undefined"===typeof j&&(j=x.value===e.value),"undefined"===typeof w&&(w=x.name)),o.createElement(c.a,Object(r.a)({color:d,type:"radio",icon:o.cloneElement(g,{fontSize:"small"===y?"small":"default"}),checkedIcon:o.cloneElement(h,{fontSize:"small"===y?"small":"default"}),classes:{root:Object(i.a)(s.root,s["color".concat(Object(p.a)(d))]),checked:s.checked,disabled:s.disabled},name:w,checked:j,onChange:k,ref:t},O))}));t.a=Object(u.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(m.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(m.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(y)},389:function(e,t,a){"use strict";var r=a(1),n=a(39),o=a(4),i=a(0),c=(a(9),a(31)),s=a(21),l=i.forwardRef((function(e,t){var a=e.classes,n=e.className,s=e.row,l=void 0!==s&&s,d=Object(o.a)(e,["classes","className","row"]);return i.createElement("div",Object(r.a)({className:Object(c.a)(a.root,n,l&&a.row),ref:t},d))})),d=Object(s.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(l),u=a(90),f=a(102),m=a(197),p=a(136),v=i.forwardRef((function(e,t){var a=e.actions,c=e.children,s=e.name,l=e.value,v=e.onChange,b=Object(o.a)(e,["actions","children","name","value","onChange"]),h=i.useRef(null),g=Object(f.a)({controlled:l,default:e.defaultValue,name:"RadioGroup"}),y=Object(n.a)(g,2),O=y[0],x=y[1];i.useImperativeHandle(a,(function(){return{focus:function(){var e=h.current.querySelector("input:not(:disabled):checked");e||(e=h.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var j=Object(u.a)(t,h),k=Object(p.a)(s);return i.createElement(m.a.Provider,{value:{name:k,onChange:function(e){x(e.target.value),v&&v(e,e.target.value)},value:O}},i.createElement(d,Object(r.a)({role:"radiogroup",ref:j},b),c))}));t.a=v},390:function(e,t,a){"use strict";var r=a(25),n=a(39),o=a(4),i=a(1),c=a(0),s=(a(9),a(31)),l=a(21),d=a(105),u=a(23),f=a(126),m=a(97),p=a(107),v=a(90),b=a(37),h=a(102);var g=Object(l.a)((function(e){return{thumb:{"&$open":{"& $offset":{transform:"scale(1) translateY(-10px)"}}},open:{},offset:Object(i.a)({zIndex:1},e.typography.body2,{fontSize:e.typography.pxToRem(12),lineHeight:1.2,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),top:-34,transformOrigin:"bottom center",transform:"scale(0)",position:"absolute"}),circle:{display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32,borderRadius:"50% 50% 50% 0",backgroundColor:"currentColor",transform:"rotate(-45deg)"},label:{color:e.palette.primary.contrastText,transform:"rotate(45deg)"}}}),{name:"PrivateValueLabel"})((function(e){var t=e.children,a=e.classes,r=e.className,n=e.open,o=e.value,i=e.valueLabelDisplay;return"off"===i?t:c.cloneElement(t,{className:Object(s.a)(t.props.className,(n||"on"===i)&&a.open,a.thumb)},c.createElement("span",{className:Object(s.a)(a.offset,r)},c.createElement("span",{className:a.circle},c.createElement("span",{className:a.label},o))))}));function y(e,t){return e-t}function O(e,t,a){return Math.min(Math.max(t,e),a)}function x(e,t){return e.reduce((function(e,a,r){var n=Math.abs(t-a);return null===e||n<e.distance||n===e.distance?{distance:n,index:r}:e}),null).index}function j(e,t){if(void 0!==t.current&&e.changedTouches){for(var a=0;a<e.changedTouches.length;a+=1){var r=e.changedTouches[a];if(r.identifier===t.current)return{x:r.clientX,y:r.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function k(e,t,a){return 100*(e-t)/(a-t)}function w(e,t,a){var r=Math.round((e-a)/t)*t+a;return Number(r.toFixed(function(e){if(Math.abs(e)<1){var t=e.toExponential().split("e-"),a=t[0].split(".")[1];return(a?a.length:0)+parseInt(t[1],10)}var r=e.toString().split(".")[1];return r?r.length:0}(t)))}function C(e){var t=e.values,a=e.source,r=e.newValue,n=e.index;if(t[n]===r)return a;var o=t.slice();return o[n]=r,o}function S(e){var t=e.sliderRef,a=e.activeIndex,r=e.setActive;t.current.contains(document.activeElement)&&Number(document.activeElement.getAttribute("data-index"))===a||t.current.querySelector('[role="slider"][data-index="'.concat(a,'"]')).focus(),r&&r(a)}var E={horizontal:{offset:function(e){return{left:"".concat(e,"%")}},leap:function(e){return{width:"".concat(e,"%")}}},"horizontal-reverse":{offset:function(e){return{right:"".concat(e,"%")}},leap:function(e){return{width:"".concat(e,"%")}}},vertical:{offset:function(e){return{bottom:"".concat(e,"%")}},leap:function(e){return{height:"".concat(e,"%")}}}},M=function(e){return e},L=c.forwardRef((function(e,t){var a=e["aria-label"],l=e["aria-labelledby"],u=e["aria-valuetext"],L=e.classes,N=e.className,P=e.color,R=void 0===P?"primary":P,I=e.component,U=void 0===I?"span":I,A=e.defaultValue,z=e.disabled,D=void 0!==z&&z,$=e.getAriaLabel,B=e.getAriaValueText,T=e.marks,V=void 0!==T&&T,F=e.max,_=void 0===F?100:F,H=e.min,q=void 0===H?0:H,W=e.name,J=e.onChange,X=e.onChangeCommitted,G=e.onMouseDown,Q=e.orientation,Y=void 0===Q?"horizontal":Q,K=e.scale,Z=void 0===K?M:K,ee=e.step,te=void 0===ee?1:ee,ae=e.ThumbComponent,re=void 0===ae?"span":ae,ne=e.track,oe=void 0===ne?"normal":ne,ie=e.value,ce=e.ValueLabelComponent,se=void 0===ce?g:ce,le=e.valueLabelDisplay,de=void 0===le?"off":le,ue=e.valueLabelFormat,fe=void 0===ue?M:ue,me=Object(o.a)(e,["aria-label","aria-labelledby","aria-valuetext","classes","className","color","component","defaultValue","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","onMouseDown","orientation","scale","step","ThumbComponent","track","value","ValueLabelComponent","valueLabelDisplay","valueLabelFormat"]),pe=Object(d.a)(),ve=c.useRef(),be=c.useState(-1),he=be[0],ge=be[1],ye=c.useState(-1),Oe=ye[0],xe=ye[1],je=Object(h.a)({controlled:ie,default:A,name:"Slider"}),ke=Object(n.a)(je,2),we=ke[0],Ce=ke[1],Se=Array.isArray(we),Ee=Se?we.slice().sort(y):[we];Ee=Ee.map((function(e){return O(e,q,_)}));var Me=!0===V&&null!==te?Object(r.a)(Array(Math.floor((_-q)/te)+1)).map((function(e,t){return{value:q+te*t}})):V||[],Le=Object(f.a)(),Ne=Le.isFocusVisible,Pe=Le.onBlurVisible,Re=Le.ref,Ie=c.useState(-1),Ue=Ie[0],Ae=Ie[1],ze=c.useRef(),De=Object(v.a)(Re,ze),$e=Object(v.a)(t,De),Be=Object(p.a)((function(e){var t=Number(e.currentTarget.getAttribute("data-index"));Ne(e)&&Ae(t),xe(t)})),Te=Object(p.a)((function(){-1!==Ue&&(Ae(-1),Pe()),xe(-1)})),Ve=Object(p.a)((function(e){var t=Number(e.currentTarget.getAttribute("data-index"));xe(t)})),Fe=Object(p.a)((function(){xe(-1)})),_e="rtl"===pe.direction,He=Object(p.a)((function(e){var t,a=Number(e.currentTarget.getAttribute("data-index")),r=Ee[a],n=(_-q)/10,o=Me.map((function(e){return e.value})),i=o.indexOf(r),c=_e?"ArrowLeft":"ArrowRight",s=_e?"ArrowRight":"ArrowLeft";switch(e.key){case"Home":t=q;break;case"End":t=_;break;case"PageUp":te&&(t=r+n);break;case"PageDown":te&&(t=r-n);break;case c:case"ArrowUp":t=te?r+te:o[i+1]||o[o.length-1];break;case s:case"ArrowDown":t=te?r-te:o[i-1]||o[0];break;default:return}if(e.preventDefault(),te&&(t=w(t,te,q)),t=O(t,q,_),Se){var l=t;t=C({values:Ee,source:we,newValue:t,index:a}).sort(y),S({sliderRef:ze,activeIndex:t.indexOf(l)})}Ce(t),Ae(a),J&&J(e,t),X&&X(e,t)})),qe=c.useRef(),We=Y;_e&&"vertical"!==Y&&(We+="-reverse");var Je=function(e){var t,a,r=e.finger,n=e.move,o=void 0!==n&&n,i=e.values,c=e.source,s=ze.current.getBoundingClientRect(),l=s.width,d=s.height,u=s.bottom,f=s.left;if(t=0===We.indexOf("vertical")?(u-r.y)/d:(r.x-f)/l,-1!==We.indexOf("-reverse")&&(t=1-t),a=function(e,t,a){return(a-t)*e+t}(t,q,_),te)a=w(a,te,q);else{var m=Me.map((function(e){return e.value}));a=m[x(m,a)]}a=O(a,q,_);var p=0;if(Se){var v=a;p=(a=C({values:i,source:c,newValue:a,index:p=o?qe.current:x(i,a)}).sort(y)).indexOf(v),qe.current=p}return{newValue:a,activeIndex:p}},Xe=Object(p.a)((function(e){var t=j(e,ve);if(t){var a=Je({finger:t,move:!0,values:Ee,source:we}),r=a.newValue,n=a.activeIndex;S({sliderRef:ze,activeIndex:n,setActive:ge}),Ce(r),J&&J(e,r)}})),Ge=Object(p.a)((function(e){var t=j(e,ve);if(t){var a=Je({finger:t,values:Ee,source:we}).newValue;ge(-1),"touchend"===e.type&&xe(-1),X&&X(e,a),ve.current=void 0;var r=Object(m.a)(ze.current);r.removeEventListener("mousemove",Xe),r.removeEventListener("mouseup",Ge),r.removeEventListener("touchmove",Xe),r.removeEventListener("touchend",Ge)}})),Qe=Object(p.a)((function(e){e.preventDefault();var t=e.changedTouches[0];null!=t&&(ve.current=t.identifier);var a=j(e,ve),r=Je({finger:a,values:Ee,source:we}),n=r.newValue,o=r.activeIndex;S({sliderRef:ze,activeIndex:o,setActive:ge}),Ce(n),J&&J(e,n);var i=Object(m.a)(ze.current);i.addEventListener("touchmove",Xe),i.addEventListener("touchend",Ge)}));c.useEffect((function(){var e=ze.current;e.addEventListener("touchstart",Qe);var t=Object(m.a)(e);return function(){e.removeEventListener("touchstart",Qe),t.removeEventListener("mousemove",Xe),t.removeEventListener("mouseup",Ge),t.removeEventListener("touchmove",Xe),t.removeEventListener("touchend",Ge)}}),[Ge,Xe,Qe]);var Ye=Object(p.a)((function(e){G&&G(e),e.preventDefault();var t=j(e,ve),a=Je({finger:t,values:Ee,source:we}),r=a.newValue,n=a.activeIndex;S({sliderRef:ze,activeIndex:n,setActive:ge}),Ce(r),J&&J(e,r);var o=Object(m.a)(ze.current);o.addEventListener("mousemove",Xe),o.addEventListener("mouseup",Ge)})),Ke=k(Se?Ee[0]:q,q,_),Ze=k(Ee[Ee.length-1],q,_)-Ke,et=Object(i.a)({},E[We].offset(Ke),E[We].leap(Ze));return c.createElement(U,Object(i.a)({ref:$e,className:Object(s.a)(L.root,L["color".concat(Object(b.a)(R))],N,D&&L.disabled,Me.length>0&&Me.some((function(e){return e.label}))&&L.marked,!1===oe&&L.trackFalse,"vertical"===Y&&L.vertical,"inverted"===oe&&L.trackInverted),onMouseDown:Ye},me),c.createElement("span",{className:L.rail}),c.createElement("span",{className:L.track,style:et}),c.createElement("input",{value:Ee.join(","),name:W,type:"hidden"}),Me.map((function(e,t){var a,r=k(e.value,q,_),n=E[We].offset(r);return a=!1===oe?-1!==Ee.indexOf(e.value):"normal"===oe&&(Se?e.value>=Ee[0]&&e.value<=Ee[Ee.length-1]:e.value<=Ee[0])||"inverted"===oe&&(Se?e.value<=Ee[0]||e.value>=Ee[Ee.length-1]:e.value>=Ee[0]),c.createElement(c.Fragment,{key:e.value},c.createElement("span",{style:n,"data-index":t,className:Object(s.a)(L.mark,a&&L.markActive)}),null!=e.label?c.createElement("span",{"aria-hidden":!0,"data-index":t,style:n,className:Object(s.a)(L.markLabel,a&&L.markLabelActive)},e.label):null)})),Ee.map((function(e,t){var r=k(e,q,_),n=E[We].offset(r);return c.createElement(se,{key:t,valueLabelFormat:fe,valueLabelDisplay:de,className:L.valueLabel,value:"function"===typeof fe?fe(Z(e),t):fe,index:t,open:Oe===t||he===t||"on"===de,disabled:D},c.createElement(re,{className:Object(s.a)(L.thumb,L["thumbColor".concat(Object(b.a)(R))],he===t&&L.active,D&&L.disabled,Ue===t&&L.focusVisible),tabIndex:D?null:0,role:"slider",style:n,"data-index":t,"aria-label":$?$(t):a,"aria-labelledby":l,"aria-orientation":Y,"aria-valuemax":Z(_),"aria-valuemin":Z(q),"aria-valuenow":Z(e),"aria-valuetext":B?B(Z(e),t):u,onKeyDown:He,onFocus:Be,onBlur:Te,onMouseOver:Ve,onMouseLeave:Fe}))})))}));t.a=Object(l.a)((function(e){return{root:{height:2,width:"100%",boxSizing:"content-box",padding:"13px 0",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:e.palette.primary.main,WebkitTapHighlightColor:"transparent","&$disabled":{pointerEvents:"none",cursor:"default",color:e.palette.grey[400]},"&$vertical":{width:2,height:"100%",padding:"0 13px"},"@media (pointer: coarse)":{padding:"20px 0","&$vertical":{padding:"0 20px"}},"@media print":{colorAdjust:"exact"}},colorPrimary:{},colorSecondary:{color:e.palette.secondary.main},marked:{marginBottom:20,"&$vertical":{marginBottom:"auto",marginRight:20}},vertical:{},disabled:{},rail:{display:"block",position:"absolute",width:"100%",height:2,borderRadius:1,backgroundColor:"currentColor",opacity:.38,"$vertical &":{height:"100%",width:2}},track:{display:"block",position:"absolute",height:2,borderRadius:1,backgroundColor:"currentColor","$vertical &":{width:2}},trackFalse:{"& $track":{display:"none"}},trackInverted:{"& $track":{backgroundColor:"light"===e.palette.type?Object(u.e)(e.palette.primary.main,.62):Object(u.a)(e.palette.primary.main,.5)},"& $rail":{opacity:1}},thumb:{position:"absolute",width:12,height:12,marginLeft:-6,marginTop:-5,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow"],{duration:e.transitions.duration.shortest}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",left:-15,top:-15,right:-15,bottom:-15},"&$focusVisible,&:hover":{boxShadow:"0px 0px 0px 8px ".concat(Object(u.c)(e.palette.primary.main,.16)),"@media (hover: none)":{boxShadow:"none"}},"&$active":{boxShadow:"0px 0px 0px 14px ".concat(Object(u.c)(e.palette.primary.main,.16))},"&$disabled":{width:8,height:8,marginLeft:-4,marginTop:-3,"&:hover":{boxShadow:"none"}},"$vertical &":{marginLeft:-5,marginBottom:-6},"$vertical &$disabled":{marginLeft:-3,marginBottom:-4}},thumbColorPrimary:{},thumbColorSecondary:{"&$focusVisible,&:hover":{boxShadow:"0px 0px 0px 8px ".concat(Object(u.c)(e.palette.secondary.main,.16))},"&$active":{boxShadow:"0px 0px 0px 14px ".concat(Object(u.c)(e.palette.secondary.main,.16))}},active:{},focusVisible:{},valueLabel:{left:"calc(-50% - 4px)"},mark:{position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},markActive:{backgroundColor:e.palette.background.paper,opacity:.8},markLabel:Object(i.a)({},e.typography.body2,{color:e.palette.text.secondary,position:"absolute",top:26,transform:"translateX(-50%)",whiteSpace:"nowrap","$vertical &":{top:"auto",left:26,transform:"translateY(50%)"},"@media (pointer: coarse)":{top:40,"$vertical &":{left:31}}}),markLabelActive:{color:e.palette.text.primary}}}),{name:"MuiSlider"})(L)},391:function(e,t,a){"use strict";var r=a(1),n=a(25),o=a(4),i=a(0),c=(a(9),a(31)),s=a(21),l=a(354),d=a(37),u=a(23),f=a(105),m=i.forwardRef((function(e,t){var a=e.classes,n=e.className,s=e.color,l=void 0===s?"primary":s,u=e.value,m=e.valueBuffer,p=e.variant,v=void 0===p?"indeterminate":p,b=Object(o.a)(e,["classes","className","color","value","valueBuffer","variant"]),h=Object(f.a)(),g={},y={bar1:{},bar2:{}};if("determinate"===v||"buffer"===v)if(void 0!==u){g["aria-valuenow"]=Math.round(u),g["aria-valuemin"]=0,g["aria-valuemax"]=100;var O=u-100;"rtl"===h.direction&&(O=-O),y.bar1.transform="translateX(".concat(O,"%)")}else 0;if("buffer"===v)if(void 0!==m){var x=(m||0)-100;"rtl"===h.direction&&(x=-x),y.bar2.transform="translateX(".concat(x,"%)")}else 0;return i.createElement("div",Object(r.a)({className:Object(c.a)(a.root,a["color".concat(Object(d.a)(l))],n,{determinate:a.determinate,indeterminate:a.indeterminate,buffer:a.buffer,query:a.query}[v]),role:"progressbar"},g,{ref:t},b),"buffer"===v?i.createElement("div",{className:Object(c.a)(a.dashed,a["dashedColor".concat(Object(d.a)(l))])}):null,i.createElement("div",{className:Object(c.a)(a.bar,a["barColor".concat(Object(d.a)(l))],("indeterminate"===v||"query"===v)&&a.bar1Indeterminate,{determinate:a.bar1Determinate,buffer:a.bar1Buffer}[v]),style:y.bar1}),"determinate"===v?null:i.createElement("div",{className:Object(c.a)(a.bar,("indeterminate"===v||"query"===v)&&a.bar2Indeterminate,"buffer"===v?[a["color".concat(Object(d.a)(l))],a.bar2Buffer]:a["barColor".concat(Object(d.a)(l))]),style:y.bar2}))})),p=Object(s.a)((function(e){var t=function(t){return"light"===e.palette.type?Object(u.e)(t,.62):Object(u.a)(t,.5)},a=t(e.palette.primary.main),r=t(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4,"@media print":{colorAdjust:"exact"}},colorPrimary:{backgroundColor:a},colorSecondary:{backgroundColor:r},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(a," 0%, ").concat(a," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(r," 0%, ").concat(r," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(4,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(4,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(4,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0 -23px"},"50%":{opacity:0,backgroundPosition:"0 -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}}),{name:"MuiLinearProgress"})(m),v=i.forwardRef((function(e,t){var a=e.activeStep,s=void 0===a?0:a,u=e.backButton,f=e.classes,m=e.className,v=e.LinearProgressProps,b=e.nextButton,h=e.position,g=void 0===h?"bottom":h,y=e.steps,O=e.variant,x=void 0===O?"dots":O,j=Object(o.a)(e,["activeStep","backButton","classes","className","LinearProgressProps","nextButton","position","steps","variant"]);return i.createElement(l.a,Object(r.a)({square:!0,elevation:0,className:Object(c.a)(f.root,f["position".concat(Object(d.a)(g))],m),ref:t},j),u,"text"===x&&i.createElement(i.Fragment,null,s+1," / ",y),"dots"===x&&i.createElement("div",{className:f.dots},Object(n.a)(new Array(y)).map((function(e,t){return i.createElement("div",{key:t,className:Object(c.a)(f.dot,t===s&&f.dotActive)})}))),"progress"===x&&i.createElement(p,Object(r.a)({className:f.progress,variant:"determinate",value:Math.ceil(s/(y-1)*100)},v)),b)}));t.a=Object(s.a)((function(e){return{root:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",background:e.palette.background.default,padding:8},positionBottom:{position:"fixed",bottom:0,left:0,right:0,zIndex:e.zIndex.mobileStepper},positionTop:{position:"fixed",top:0,left:0,right:0,zIndex:e.zIndex.mobileStepper},positionStatic:{},dots:{display:"flex",flexDirection:"row"},dot:{backgroundColor:e.palette.action.disabled,borderRadius:"50%",width:8,height:8,margin:"0 2px"},dotActive:{backgroundColor:e.palette.primary.main},progress:{width:"50%"}}}),{name:"MuiMobileStepper"})(v)}}]);
//# sourceMappingURL=9.0d6a132f.chunk.js.map