(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Xv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Wg={exports:{}},Rc={},Xg={exports:{}},nt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pa=Symbol.for("react.element"),jv=Symbol.for("react.portal"),$v=Symbol.for("react.fragment"),Yv=Symbol.for("react.strict_mode"),Kv=Symbol.for("react.profiler"),qv=Symbol.for("react.provider"),Zv=Symbol.for("react.context"),Qv=Symbol.for("react.forward_ref"),Jv=Symbol.for("react.suspense"),ey=Symbol.for("react.memo"),ty=Symbol.for("react.lazy"),up=Symbol.iterator;function ny(n){return n===null||typeof n!="object"?null:(n=up&&n[up]||n["@@iterator"],typeof n=="function"?n:null)}var jg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$g=Object.assign,Yg={};function go(n,e,t){this.props=n,this.context=e,this.refs=Yg,this.updater=t||jg}go.prototype.isReactComponent={};go.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};go.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Kg(){}Kg.prototype=go.prototype;function Yf(n,e,t){this.props=n,this.context=e,this.refs=Yg,this.updater=t||jg}var Kf=Yf.prototype=new Kg;Kf.constructor=Yf;$g(Kf,go.prototype);Kf.isPureReactComponent=!0;var dp=Array.isArray,qg=Object.prototype.hasOwnProperty,qf={current:null},Zg={key:!0,ref:!0,__self:!0,__source:!0};function Qg(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qg.call(e,i)&&!Zg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Pa,type:n,key:s,ref:o,props:r,_owner:qf.current}}function iy(n,e){return{$$typeof:Pa,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Zf(n){return typeof n=="object"&&n!==null&&n.$$typeof===Pa}function ry(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var fp=/\/+/g;function Kc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?ry(""+n.key):e.toString(36)}function Nl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Pa:case jv:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Kc(o,0):i,dp(r)?(t="",n!=null&&(t=n.replace(fp,"$&/")+"/"),Nl(r,e,t,"",function(c){return c})):r!=null&&(Zf(r)&&(r=iy(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(fp,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",dp(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Kc(s,a);o+=Nl(s,e,t,l,r)}else if(l=ny(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Kc(s,a++),o+=Nl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function za(n,e,t){if(n==null)return n;var i=[],r=0;return Nl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function sy(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var vn={current:null},Dl={transition:null},oy={ReactCurrentDispatcher:vn,ReactCurrentBatchConfig:Dl,ReactCurrentOwner:qf};function Jg(){throw Error("act(...) is not supported in production builds of React.")}nt.Children={map:za,forEach:function(n,e,t){za(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return za(n,function(){e++}),e},toArray:function(n){return za(n,function(e){return e})||[]},only:function(n){if(!Zf(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};nt.Component=go;nt.Fragment=$v;nt.Profiler=Kv;nt.PureComponent=Yf;nt.StrictMode=Yv;nt.Suspense=Jv;nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oy;nt.act=Jg;nt.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=$g({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qf.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)qg.call(e,l)&&!Zg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Pa,type:n.type,key:r,ref:s,props:i,_owner:o}};nt.createContext=function(n){return n={$$typeof:Zv,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:qv,_context:n},n.Consumer=n};nt.createElement=Qg;nt.createFactory=function(n){var e=Qg.bind(null,n);return e.type=n,e};nt.createRef=function(){return{current:null}};nt.forwardRef=function(n){return{$$typeof:Qv,render:n}};nt.isValidElement=Zf;nt.lazy=function(n){return{$$typeof:ty,_payload:{_status:-1,_result:n},_init:sy}};nt.memo=function(n,e){return{$$typeof:ey,type:n,compare:e===void 0?null:e}};nt.startTransition=function(n){var e=Dl.transition;Dl.transition={};try{n()}finally{Dl.transition=e}};nt.unstable_act=Jg;nt.useCallback=function(n,e){return vn.current.useCallback(n,e)};nt.useContext=function(n){return vn.current.useContext(n)};nt.useDebugValue=function(){};nt.useDeferredValue=function(n){return vn.current.useDeferredValue(n)};nt.useEffect=function(n,e){return vn.current.useEffect(n,e)};nt.useId=function(){return vn.current.useId()};nt.useImperativeHandle=function(n,e,t){return vn.current.useImperativeHandle(n,e,t)};nt.useInsertionEffect=function(n,e){return vn.current.useInsertionEffect(n,e)};nt.useLayoutEffect=function(n,e){return vn.current.useLayoutEffect(n,e)};nt.useMemo=function(n,e){return vn.current.useMemo(n,e)};nt.useReducer=function(n,e,t){return vn.current.useReducer(n,e,t)};nt.useRef=function(n){return vn.current.useRef(n)};nt.useState=function(n){return vn.current.useState(n)};nt.useSyncExternalStore=function(n,e,t){return vn.current.useSyncExternalStore(n,e,t)};nt.useTransition=function(){return vn.current.useTransition()};nt.version="18.3.1";Xg.exports=nt;var St=Xg.exports;const ay=Xv(St);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly=St,cy=Symbol.for("react.element"),uy=Symbol.for("react.fragment"),dy=Object.prototype.hasOwnProperty,fy=ly.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hy={key:!0,ref:!0,__self:!0,__source:!0};function e0(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)dy.call(e,i)&&!hy.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:cy,type:n,key:s,ref:o,props:r,_owner:fy.current}}Rc.Fragment=uy;Rc.jsx=e0;Rc.jsxs=e0;Wg.exports=Rc;var ve=Wg.exports,od={},t0={exports:{}},Fn={},n0={exports:{}},i0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,j){var q=N.length;N.push(j);e:for(;0<q;){var ce=q-1>>>1,Ae=N[ce];if(0<r(Ae,j))N[ce]=j,N[q]=Ae,q=ce;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var j=N[0],q=N.pop();if(q!==j){N[0]=q;e:for(var ce=0,Ae=N.length,rt=Ae>>>1;ce<rt;){var H=2*(ce+1)-1,ie=N[H],ye=H+1,ae=N[ye];if(0>r(ie,q))ye<Ae&&0>r(ae,ie)?(N[ce]=ae,N[ye]=q,ce=ye):(N[ce]=ie,N[H]=q,ce=H);else if(ye<Ae&&0>r(ae,q))N[ce]=ae,N[ye]=q,ce=ye;else break e}}return j}function r(N,j){var q=N.sortIndex-j.sortIndex;return q!==0?q:N.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,p=!1,m=!1,_=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var j=t(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=N)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=t(c)}}function x(N){if(_=!1,y(N),!m)if(t(l)!==null)m=!0,X(C);else{var j=t(c);j!==null&&Q(x,j.startTime-N)}}function C(N,j){m=!1,_&&(_=!1,f(R),R=-1),p=!0;var q=h;try{for(y(j),d=t(l);d!==null&&(!(d.expirationTime>j)||N&&!L());){var ce=d.callback;if(typeof ce=="function"){d.callback=null,h=d.priorityLevel;var Ae=ce(d.expirationTime<=j);j=n.unstable_now(),typeof Ae=="function"?d.callback=Ae:d===t(l)&&i(l),y(j)}else i(l);d=t(l)}if(d!==null)var rt=!0;else{var H=t(c);H!==null&&Q(x,H.startTime-j),rt=!1}return rt}finally{d=null,h=q,p=!1}}var b=!1,w=null,R=-1,T=5,E=-1;function L(){return!(n.unstable_now()-E<T)}function G(){if(w!==null){var N=n.unstable_now();E=N;var j=!0;try{j=w(!0,N)}finally{j?z():(b=!1,w=null)}}else b=!1}var z;if(typeof v=="function")z=function(){v(G)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,Z=K.port2;K.port1.onmessage=G,z=function(){Z.postMessage(null)}}else z=function(){g(G,0)};function X(N){w=N,b||(b=!0,z())}function Q(N,j){R=g(function(){N(n.unstable_now())},j)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){m||p||(m=!0,X(C))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var q=h;h=j;try{return N()}finally{h=q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,j){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var q=h;h=N;try{return j()}finally{h=q}},n.unstable_scheduleCallback=function(N,j,q){var ce=n.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ce+q:ce):q=ce,N){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=q+Ae,N={id:u++,callback:j,priorityLevel:N,startTime:q,expirationTime:Ae,sortIndex:-1},q>ce?(N.sortIndex=q,e(c,N),t(l)===null&&N===t(c)&&(_?(f(R),R=-1):_=!0,Q(x,q-ce))):(N.sortIndex=Ae,e(l,N),m||p||(m=!0,X(C))),N},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(N){var j=h;return function(){var q=h;h=j;try{return N.apply(this,arguments)}finally{h=q}}}})(i0);n0.exports=i0;var py=n0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var my=St,Un=py;function te(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r0=new Set,la={};function ss(n,e){Zs(n,e),Zs(n+"Capture",e)}function Zs(n,e){for(la[n]=e,n=0;n<e.length;n++)r0.add(e[n])}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ad=Object.prototype.hasOwnProperty,gy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hp={},pp={};function _y(n){return ad.call(pp,n)?!0:ad.call(hp,n)?!1:gy.test(n)?pp[n]=!0:(hp[n]=!0,!1)}function vy(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function yy(n,e,t,i){if(e===null||typeof e>"u"||vy(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Qt[n]=new yn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Qt[e]=new yn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Qt[n]=new yn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Qt[n]=new yn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Qt[n]=new yn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Qt[n]=new yn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Qt[n]=new yn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Qt[n]=new yn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Qt[n]=new yn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Qf=/[\-:]([a-z])/g;function Jf(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Qf,Jf);Qt[e]=new yn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Qf,Jf);Qt[e]=new yn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Qf,Jf);Qt[e]=new yn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Qt[n]=new yn(n,1,!1,n.toLowerCase(),null,!1,!1)});Qt.xlinkHref=new yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Qt[n]=new yn(n,1,!1,n.toLowerCase(),null,!0,!0)});function eh(n,e,t,i){var r=Qt.hasOwnProperty(e)?Qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(yy(e,t,r,i)&&(t=null),i||r===null?_y(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Zi=my.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Va=Symbol.for("react.element"),ws=Symbol.for("react.portal"),As=Symbol.for("react.fragment"),th=Symbol.for("react.strict_mode"),ld=Symbol.for("react.profiler"),s0=Symbol.for("react.provider"),o0=Symbol.for("react.context"),nh=Symbol.for("react.forward_ref"),cd=Symbol.for("react.suspense"),ud=Symbol.for("react.suspense_list"),ih=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),a0=Symbol.for("react.offscreen"),mp=Symbol.iterator;function bo(n){return n===null||typeof n!="object"?null:(n=mp&&n[mp]||n["@@iterator"],typeof n=="function"?n:null)}var Rt=Object.assign,qc;function Wo(n){if(qc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);qc=e&&e[1]||""}return`
`+qc+n}var Zc=!1;function Qc(n,e){if(!n||Zc)return"";Zc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Zc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Wo(n):""}function xy(n){switch(n.tag){case 5:return Wo(n.type);case 16:return Wo("Lazy");case 13:return Wo("Suspense");case 19:return Wo("SuspenseList");case 0:case 2:case 15:return n=Qc(n.type,!1),n;case 11:return n=Qc(n.type.render,!1),n;case 1:return n=Qc(n.type,!0),n;default:return""}}function dd(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case As:return"Fragment";case ws:return"Portal";case ld:return"Profiler";case th:return"StrictMode";case cd:return"Suspense";case ud:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case o0:return(n.displayName||"Context")+".Consumer";case s0:return(n._context.displayName||"Context")+".Provider";case nh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ih:return e=n.displayName||null,e!==null?e:dd(n.type)||"Memo";case or:e=n._payload,n=n._init;try{return dd(n(e))}catch{}}return null}function Sy(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dd(e);case 8:return e===th?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function l0(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function My(n){var e=l0(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ha(n){n._valueTracker||(n._valueTracker=My(n))}function c0(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=l0(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Ql(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function fd(n,e){var t=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function gp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ar(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function u0(n,e){e=e.checked,e!=null&&eh(n,"checked",e,!1)}function hd(n,e){u0(n,e);var t=Ar(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?pd(n,e.type,t):e.hasOwnProperty("defaultValue")&&pd(n,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function _p(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function pd(n,e,t){(e!=="number"||Ql(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Xo=Array.isArray;function Bs(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ar(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function md(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function vp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(te(92));if(Xo(t)){if(1<t.length)throw Error(te(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ar(t)}}function d0(n,e){var t=Ar(e.value),i=Ar(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function yp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function f0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gd(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?f0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ga,h0=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ga=Ga||document.createElement("div"),Ga.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ga.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ca(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ey=["Webkit","ms","Moz","O"];Object.keys(Zo).forEach(function(n){Ey.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Zo[e]=Zo[n]})});function p0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Zo.hasOwnProperty(n)&&Zo[n]?(""+e).trim():e+"px"}function m0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=p0(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Ty=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _d(n,e){if(e){if(Ty[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function vd(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yd=null;function rh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var xd=null,zs=null,Vs=null;function xp(n){if(n=Na(n)){if(typeof xd!="function")throw Error(te(280));var e=n.stateNode;e&&(e=Nc(e),xd(n.stateNode,n.type,e))}}function g0(n){zs?Vs?Vs.push(n):Vs=[n]:zs=n}function _0(){if(zs){var n=zs,e=Vs;if(Vs=zs=null,xp(n),e)for(n=0;n<e.length;n++)xp(e[n])}}function v0(n,e){return n(e)}function y0(){}var Jc=!1;function x0(n,e,t){if(Jc)return n(e,t);Jc=!0;try{return v0(n,e,t)}finally{Jc=!1,(zs!==null||Vs!==null)&&(y0(),_0())}}function ua(n,e){var t=n.stateNode;if(t===null)return null;var i=Nc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(te(231,e,typeof t));return t}var Sd=!1;if(Xi)try{var Ro={};Object.defineProperty(Ro,"passive",{get:function(){Sd=!0}}),window.addEventListener("test",Ro,Ro),window.removeEventListener("test",Ro,Ro)}catch{Sd=!1}function wy(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Qo=!1,Jl=null,ec=!1,Md=null,Ay={onError:function(n){Qo=!0,Jl=n}};function by(n,e,t,i,r,s,o,a,l){Qo=!1,Jl=null,wy.apply(Ay,arguments)}function Ry(n,e,t,i,r,s,o,a,l){if(by.apply(this,arguments),Qo){if(Qo){var c=Jl;Qo=!1,Jl=null}else throw Error(te(198));ec||(ec=!0,Md=c)}}function os(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function S0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Sp(n){if(os(n)!==n)throw Error(te(188))}function Cy(n){var e=n.alternate;if(!e){if(e=os(n),e===null)throw Error(te(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Sp(r),n;if(s===i)return Sp(r),e;s=s.sibling}throw Error(te(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(t.alternate!==i)throw Error(te(190))}if(t.tag!==3)throw Error(te(188));return t.stateNode.current===t?n:e}function M0(n){return n=Cy(n),n!==null?E0(n):null}function E0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=E0(n);if(e!==null)return e;n=n.sibling}return null}var T0=Un.unstable_scheduleCallback,Mp=Un.unstable_cancelCallback,Py=Un.unstable_shouldYield,Ly=Un.unstable_requestPaint,It=Un.unstable_now,Iy=Un.unstable_getCurrentPriorityLevel,sh=Un.unstable_ImmediatePriority,w0=Un.unstable_UserBlockingPriority,tc=Un.unstable_NormalPriority,Ny=Un.unstable_LowPriority,A0=Un.unstable_IdlePriority,Cc=null,xi=null;function Dy(n){if(xi&&typeof xi.onCommitFiberRoot=="function")try{xi.onCommitFiberRoot(Cc,n,void 0,(n.current.flags&128)===128)}catch{}}var ci=Math.clz32?Math.clz32:ky,Uy=Math.log,Fy=Math.LN2;function ky(n){return n>>>=0,n===0?32:31-(Uy(n)/Fy|0)|0}var Wa=64,Xa=4194304;function jo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function nc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=jo(a):(s&=o,s!==0&&(i=jo(s)))}else o=t&~r,o!==0?i=jo(o):s!==0&&(i=jo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ci(e),r=1<<t,i|=n[t],e&=~r;return i}function Oy(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function By(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-ci(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=Oy(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Ed(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function b0(){var n=Wa;return Wa<<=1,!(Wa&4194240)&&(Wa=64),n}function eu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function La(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ci(e),n[e]=t}function zy(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ci(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function oh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ci(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var pt=0;function R0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var C0,ah,P0,L0,I0,Td=!1,ja=[],gr=null,_r=null,vr=null,da=new Map,fa=new Map,cr=[],Vy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ep(n,e){switch(n){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(e.pointerId)}}function Co(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Na(e),e!==null&&ah(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Hy(n,e,t,i,r){switch(e){case"focusin":return gr=Co(gr,n,e,t,i,r),!0;case"dragenter":return _r=Co(_r,n,e,t,i,r),!0;case"mouseover":return vr=Co(vr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return da.set(s,Co(da.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,fa.set(s,Co(fa.get(s)||null,n,e,t,i,r)),!0}return!1}function N0(n){var e=$r(n.target);if(e!==null){var t=os(e);if(t!==null){if(e=t.tag,e===13){if(e=S0(t),e!==null){n.blockedOn=e,I0(n.priority,function(){P0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ul(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=wd(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);yd=i,t.target.dispatchEvent(i),yd=null}else return e=Na(t),e!==null&&ah(e),n.blockedOn=t,!1;e.shift()}return!0}function Tp(n,e,t){Ul(n)&&t.delete(e)}function Gy(){Td=!1,gr!==null&&Ul(gr)&&(gr=null),_r!==null&&Ul(_r)&&(_r=null),vr!==null&&Ul(vr)&&(vr=null),da.forEach(Tp),fa.forEach(Tp)}function Po(n,e){n.blockedOn===e&&(n.blockedOn=null,Td||(Td=!0,Un.unstable_scheduleCallback(Un.unstable_NormalPriority,Gy)))}function ha(n){function e(r){return Po(r,n)}if(0<ja.length){Po(ja[0],n);for(var t=1;t<ja.length;t++){var i=ja[t];i.blockedOn===n&&(i.blockedOn=null)}}for(gr!==null&&Po(gr,n),_r!==null&&Po(_r,n),vr!==null&&Po(vr,n),da.forEach(e),fa.forEach(e),t=0;t<cr.length;t++)i=cr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<cr.length&&(t=cr[0],t.blockedOn===null);)N0(t),t.blockedOn===null&&cr.shift()}var Hs=Zi.ReactCurrentBatchConfig,ic=!0;function Wy(n,e,t,i){var r=pt,s=Hs.transition;Hs.transition=null;try{pt=1,lh(n,e,t,i)}finally{pt=r,Hs.transition=s}}function Xy(n,e,t,i){var r=pt,s=Hs.transition;Hs.transition=null;try{pt=4,lh(n,e,t,i)}finally{pt=r,Hs.transition=s}}function lh(n,e,t,i){if(ic){var r=wd(n,e,t,i);if(r===null)uu(n,e,i,rc,t),Ep(n,i);else if(Hy(r,n,e,t,i))i.stopPropagation();else if(Ep(n,i),e&4&&-1<Vy.indexOf(n)){for(;r!==null;){var s=Na(r);if(s!==null&&C0(s),s=wd(n,e,t,i),s===null&&uu(n,e,i,rc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else uu(n,e,i,null,t)}}var rc=null;function wd(n,e,t,i){if(rc=null,n=rh(i),n=$r(n),n!==null)if(e=os(n),e===null)n=null;else if(t=e.tag,t===13){if(n=S0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return rc=n,null}function D0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Iy()){case sh:return 1;case w0:return 4;case tc:case Ny:return 16;case A0:return 536870912;default:return 16}default:return 16}}var fr=null,ch=null,Fl=null;function U0(){if(Fl)return Fl;var n,e=ch,t=e.length,i,r="value"in fr?fr.value:fr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Fl=r.slice(n,1<i?1-i:void 0)}function kl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function $a(){return!0}function wp(){return!1}function kn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$a:wp,this.isPropagationStopped=wp,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=$a)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=$a)},persist:function(){},isPersistent:$a}),e}var _o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uh=kn(_o),Ia=Rt({},_o,{view:0,detail:0}),jy=kn(Ia),tu,nu,Lo,Pc=Rt({},Ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Lo&&(Lo&&n.type==="mousemove"?(tu=n.screenX-Lo.screenX,nu=n.screenY-Lo.screenY):nu=tu=0,Lo=n),tu)},movementY:function(n){return"movementY"in n?n.movementY:nu}}),Ap=kn(Pc),$y=Rt({},Pc,{dataTransfer:0}),Yy=kn($y),Ky=Rt({},Ia,{relatedTarget:0}),iu=kn(Ky),qy=Rt({},_o,{animationName:0,elapsedTime:0,pseudoElement:0}),Zy=kn(qy),Qy=Rt({},_o,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Jy=kn(Qy),ex=Rt({},_o,{data:0}),bp=kn(ex),tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ix={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rx(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=ix[n])?!!e[n]:!1}function dh(){return rx}var sx=Rt({},Ia,{key:function(n){if(n.key){var e=tx[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=kl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?nx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dh,charCode:function(n){return n.type==="keypress"?kl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?kl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ox=kn(sx),ax=Rt({},Pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rp=kn(ax),lx=Rt({},Ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dh}),cx=kn(lx),ux=Rt({},_o,{propertyName:0,elapsedTime:0,pseudoElement:0}),dx=kn(ux),fx=Rt({},Pc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),hx=kn(fx),px=[9,13,27,32],fh=Xi&&"CompositionEvent"in window,Jo=null;Xi&&"documentMode"in document&&(Jo=document.documentMode);var mx=Xi&&"TextEvent"in window&&!Jo,F0=Xi&&(!fh||Jo&&8<Jo&&11>=Jo),Cp=" ",Pp=!1;function k0(n,e){switch(n){case"keyup":return px.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function O0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var bs=!1;function gx(n,e){switch(n){case"compositionend":return O0(e);case"keypress":return e.which!==32?null:(Pp=!0,Cp);case"textInput":return n=e.data,n===Cp&&Pp?null:n;default:return null}}function _x(n,e){if(bs)return n==="compositionend"||!fh&&k0(n,e)?(n=U0(),Fl=ch=fr=null,bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return F0&&e.locale!=="ko"?null:e.data;default:return null}}var vx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!vx[n.type]:e==="textarea"}function B0(n,e,t,i){g0(i),e=sc(e,"onChange"),0<e.length&&(t=new uh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var ea=null,pa=null;function yx(n){q0(n,0)}function Lc(n){var e=Ps(n);if(c0(e))return n}function xx(n,e){if(n==="change")return e}var z0=!1;if(Xi){var ru;if(Xi){var su="oninput"in document;if(!su){var Ip=document.createElement("div");Ip.setAttribute("oninput","return;"),su=typeof Ip.oninput=="function"}ru=su}else ru=!1;z0=ru&&(!document.documentMode||9<document.documentMode)}function Np(){ea&&(ea.detachEvent("onpropertychange",V0),pa=ea=null)}function V0(n){if(n.propertyName==="value"&&Lc(pa)){var e=[];B0(e,pa,n,rh(n)),x0(yx,e)}}function Sx(n,e,t){n==="focusin"?(Np(),ea=e,pa=t,ea.attachEvent("onpropertychange",V0)):n==="focusout"&&Np()}function Mx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Lc(pa)}function Ex(n,e){if(n==="click")return Lc(e)}function Tx(n,e){if(n==="input"||n==="change")return Lc(e)}function wx(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var hi=typeof Object.is=="function"?Object.is:wx;function ma(n,e){if(hi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!ad.call(e,r)||!hi(n[r],e[r]))return!1}return!0}function Dp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Up(n,e){var t=Dp(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Dp(t)}}function H0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?H0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function G0(){for(var n=window,e=Ql();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ql(n.document)}return e}function hh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Ax(n){var e=G0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&H0(t.ownerDocument.documentElement,t)){if(i!==null&&hh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Up(t,s);var o=Up(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var bx=Xi&&"documentMode"in document&&11>=document.documentMode,Rs=null,Ad=null,ta=null,bd=!1;function Fp(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;bd||Rs==null||Rs!==Ql(i)||(i=Rs,"selectionStart"in i&&hh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ta&&ma(ta,i)||(ta=i,i=sc(Ad,"onSelect"),0<i.length&&(e=new uh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Rs)))}function Ya(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Cs={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},ou={},W0={};Xi&&(W0=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function Ic(n){if(ou[n])return ou[n];if(!Cs[n])return n;var e=Cs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in W0)return ou[n]=e[t];return n}var X0=Ic("animationend"),j0=Ic("animationiteration"),$0=Ic("animationstart"),Y0=Ic("transitionend"),K0=new Map,kp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(n,e){K0.set(n,e),ss(e,[n])}for(var au=0;au<kp.length;au++){var lu=kp[au],Rx=lu.toLowerCase(),Cx=lu[0].toUpperCase()+lu.slice(1);Cr(Rx,"on"+Cx)}Cr(X0,"onAnimationEnd");Cr(j0,"onAnimationIteration");Cr($0,"onAnimationStart");Cr("dblclick","onDoubleClick");Cr("focusin","onFocus");Cr("focusout","onBlur");Cr(Y0,"onTransitionEnd");Zs("onMouseEnter",["mouseout","mouseover"]);Zs("onMouseLeave",["mouseout","mouseover"]);Zs("onPointerEnter",["pointerout","pointerover"]);Zs("onPointerLeave",["pointerout","pointerover"]);ss("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ss("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ss("onBeforeInput",["compositionend","keypress","textInput","paste"]);ss("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ss("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ss("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Px=new Set("cancel close invalid load scroll toggle".split(" ").concat($o));function Op(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Ry(i,e,void 0,n),n.currentTarget=null}function q0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Op(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Op(r,a,c),s=l}}}if(ec)throw n=Md,ec=!1,Md=null,n}function xt(n,e){var t=e[Id];t===void 0&&(t=e[Id]=new Set);var i=n+"__bubble";t.has(i)||(Z0(e,n,2,!1),t.add(i))}function cu(n,e,t){var i=0;e&&(i|=4),Z0(t,n,i,e)}var Ka="_reactListening"+Math.random().toString(36).slice(2);function ga(n){if(!n[Ka]){n[Ka]=!0,r0.forEach(function(t){t!=="selectionchange"&&(Px.has(t)||cu(t,!1,n),cu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ka]||(e[Ka]=!0,cu("selectionchange",!1,e))}}function Z0(n,e,t,i){switch(D0(e)){case 1:var r=Wy;break;case 4:r=Xy;break;default:r=lh}t=r.bind(null,e,t,n),r=void 0,!Sd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function uu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=$r(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}x0(function(){var c=s,u=rh(t),d=[];e:{var h=K0.get(n);if(h!==void 0){var p=uh,m=n;switch(n){case"keypress":if(kl(t)===0)break e;case"keydown":case"keyup":p=ox;break;case"focusin":m="focus",p=iu;break;case"focusout":m="blur",p=iu;break;case"beforeblur":case"afterblur":p=iu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Yy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=cx;break;case X0:case j0:case $0:p=Zy;break;case Y0:p=dx;break;case"scroll":p=jy;break;case"wheel":p=hx;break;case"copy":case"cut":case"paste":p=Jy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Rp}var _=(e&4)!==0,g=!_&&n==="scroll",f=_?h!==null?h+"Capture":null:h;_=[];for(var v=c,y;v!==null;){y=v;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,f!==null&&(x=ua(v,f),x!=null&&_.push(_a(v,x,y)))),g)break;v=v.return}0<_.length&&(h=new p(h,m,null,t,u),d.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==yd&&(m=t.relatedTarget||t.fromElement)&&($r(m)||m[ji]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(m=t.relatedTarget||t.toElement,p=c,m=m?$r(m):null,m!==null&&(g=os(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(_=Ap,x="onMouseLeave",f="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=Rp,x="onPointerLeave",f="onPointerEnter",v="pointer"),g=p==null?h:Ps(p),y=m==null?h:Ps(m),h=new _(x,v+"leave",p,t,u),h.target=g,h.relatedTarget=y,x=null,$r(u)===c&&(_=new _(f,v+"enter",m,t,u),_.target=y,_.relatedTarget=g,x=_),g=x,p&&m)t:{for(_=p,f=m,v=0,y=_;y;y=ls(y))v++;for(y=0,x=f;x;x=ls(x))y++;for(;0<v-y;)_=ls(_),v--;for(;0<y-v;)f=ls(f),y--;for(;v--;){if(_===f||f!==null&&_===f.alternate)break t;_=ls(_),f=ls(f)}_=null}else _=null;p!==null&&Bp(d,h,p,_,!1),m!==null&&g!==null&&Bp(d,g,m,_,!0)}}e:{if(h=c?Ps(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=xx;else if(Lp(h))if(z0)C=Tx;else{C=Mx;var b=Sx}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Ex);if(C&&(C=C(n,c))){B0(d,C,t,u);break e}b&&b(n,h,c),n==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&pd(h,"number",h.value)}switch(b=c?Ps(c):window,n){case"focusin":(Lp(b)||b.contentEditable==="true")&&(Rs=b,Ad=c,ta=null);break;case"focusout":ta=Ad=Rs=null;break;case"mousedown":bd=!0;break;case"contextmenu":case"mouseup":case"dragend":bd=!1,Fp(d,t,u);break;case"selectionchange":if(bx)break;case"keydown":case"keyup":Fp(d,t,u)}var w;if(fh)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else bs?k0(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(F0&&t.locale!=="ko"&&(bs||R!=="onCompositionStart"?R==="onCompositionEnd"&&bs&&(w=U0()):(fr=u,ch="value"in fr?fr.value:fr.textContent,bs=!0)),b=sc(c,R),0<b.length&&(R=new bp(R,n,null,t,u),d.push({event:R,listeners:b}),w?R.data=w:(w=O0(t),w!==null&&(R.data=w)))),(w=mx?gx(n,t):_x(n,t))&&(c=sc(c,"onBeforeInput"),0<c.length&&(u=new bp("onBeforeInput","beforeinput",null,t,u),d.push({event:u,listeners:c}),u.data=w))}q0(d,e)})}function _a(n,e,t){return{instance:n,listener:e,currentTarget:t}}function sc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ua(n,t),s!=null&&i.unshift(_a(n,s,r)),s=ua(n,e),s!=null&&i.push(_a(n,s,r))),n=n.return}return i}function ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Bp(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ua(t,s),l!=null&&o.unshift(_a(t,l,a))):r||(l=ua(t,s),l!=null&&o.push(_a(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Lx=/\r\n?/g,Ix=/\u0000|\uFFFD/g;function zp(n){return(typeof n=="string"?n:""+n).replace(Lx,`
`).replace(Ix,"")}function qa(n,e,t){if(e=zp(e),zp(n)!==e&&t)throw Error(te(425))}function oc(){}var Rd=null,Cd=null;function Pd(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ld=typeof setTimeout=="function"?setTimeout:void 0,Nx=typeof clearTimeout=="function"?clearTimeout:void 0,Vp=typeof Promise=="function"?Promise:void 0,Dx=typeof queueMicrotask=="function"?queueMicrotask:typeof Vp<"u"?function(n){return Vp.resolve(null).then(n).catch(Ux)}:Ld;function Ux(n){setTimeout(function(){throw n})}function du(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),ha(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);ha(e)}function yr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Hp(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var vo=Math.random().toString(36).slice(2),yi="__reactFiber$"+vo,va="__reactProps$"+vo,ji="__reactContainer$"+vo,Id="__reactEvents$"+vo,Fx="__reactListeners$"+vo,kx="__reactHandles$"+vo;function $r(n){var e=n[yi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ji]||t[yi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Hp(n);n!==null;){if(t=n[yi])return t;n=Hp(n)}return e}n=t,t=n.parentNode}return null}function Na(n){return n=n[yi]||n[ji],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ps(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(te(33))}function Nc(n){return n[va]||null}var Nd=[],Ls=-1;function Pr(n){return{current:n}}function Mt(n){0>Ls||(n.current=Nd[Ls],Nd[Ls]=null,Ls--)}function vt(n,e){Ls++,Nd[Ls]=n.current,n.current=e}var br={},ln=Pr(br),Tn=Pr(!1),Qr=br;function Qs(n,e){var t=n.type.contextTypes;if(!t)return br;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function wn(n){return n=n.childContextTypes,n!=null}function ac(){Mt(Tn),Mt(ln)}function Gp(n,e,t){if(ln.current!==br)throw Error(te(168));vt(ln,e),vt(Tn,t)}function Q0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,Sy(n)||"Unknown",r));return Rt({},t,i)}function lc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||br,Qr=ln.current,vt(ln,n),vt(Tn,Tn.current),!0}function Wp(n,e,t){var i=n.stateNode;if(!i)throw Error(te(169));t?(n=Q0(n,e,Qr),i.__reactInternalMemoizedMergedChildContext=n,Mt(Tn),Mt(ln),vt(ln,n)):Mt(Tn),vt(Tn,t)}var ki=null,Dc=!1,fu=!1;function J0(n){ki===null?ki=[n]:ki.push(n)}function Ox(n){Dc=!0,J0(n)}function Lr(){if(!fu&&ki!==null){fu=!0;var n=0,e=pt;try{var t=ki;for(pt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}ki=null,Dc=!1}catch(r){throw ki!==null&&(ki=ki.slice(n+1)),T0(sh,Lr),r}finally{pt=e,fu=!1}}return null}var Is=[],Ns=0,cc=null,uc=0,Gn=[],Wn=0,Jr=null,Oi=1,Bi="";function Vr(n,e){Is[Ns++]=uc,Is[Ns++]=cc,cc=n,uc=e}function e_(n,e,t){Gn[Wn++]=Oi,Gn[Wn++]=Bi,Gn[Wn++]=Jr,Jr=n;var i=Oi;n=Bi;var r=32-ci(i)-1;i&=~(1<<r),t+=1;var s=32-ci(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Oi=1<<32-ci(e)+r|t<<r|i,Bi=s+n}else Oi=1<<s|t<<r|i,Bi=n}function ph(n){n.return!==null&&(Vr(n,1),e_(n,1,0))}function mh(n){for(;n===cc;)cc=Is[--Ns],Is[Ns]=null,uc=Is[--Ns],Is[Ns]=null;for(;n===Jr;)Jr=Gn[--Wn],Gn[Wn]=null,Bi=Gn[--Wn],Gn[Wn]=null,Oi=Gn[--Wn],Gn[Wn]=null}var Dn=null,In=null,Et=!1,oi=null;function t_(n,e){var t=$n(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Xp(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Dn=n,In=yr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Dn=n,In=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Jr!==null?{id:Oi,overflow:Bi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=$n(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Dn=n,In=null,!0):!1;default:return!1}}function Dd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ud(n){if(Et){var e=In;if(e){var t=e;if(!Xp(n,e)){if(Dd(n))throw Error(te(418));e=yr(t.nextSibling);var i=Dn;e&&Xp(n,e)?t_(i,t):(n.flags=n.flags&-4097|2,Et=!1,Dn=n)}}else{if(Dd(n))throw Error(te(418));n.flags=n.flags&-4097|2,Et=!1,Dn=n}}}function jp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Dn=n}function Za(n){if(n!==Dn)return!1;if(!Et)return jp(n),Et=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Pd(n.type,n.memoizedProps)),e&&(e=In)){if(Dd(n))throw n_(),Error(te(418));for(;e;)t_(n,e),e=yr(e.nextSibling)}if(jp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(te(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){In=yr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}In=null}}else In=Dn?yr(n.stateNode.nextSibling):null;return!0}function n_(){for(var n=In;n;)n=yr(n.nextSibling)}function Js(){In=Dn=null,Et=!1}function gh(n){oi===null?oi=[n]:oi.push(n)}var Bx=Zi.ReactCurrentBatchConfig;function Io(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(te(309));var i=t.stateNode}if(!i)throw Error(te(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(te(284));if(!t._owner)throw Error(te(290,n))}return n}function Qa(n,e){throw n=Object.prototype.toString.call(e),Error(te(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function $p(n){var e=n._init;return e(n._payload)}function i_(n){function e(f,v){if(n){var y=f.deletions;y===null?(f.deletions=[v],f.flags|=16):y.push(v)}}function t(f,v){if(!n)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=Er(f,v),f.index=0,f.sibling=null,f}function s(f,v,y){return f.index=y,n?(y=f.alternate,y!==null?(y=y.index,y<v?(f.flags|=2,v):y):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,v,y,x){return v===null||v.tag!==6?(v=yu(y,f.mode,x),v.return=f,v):(v=r(v,y),v.return=f,v)}function l(f,v,y,x){var C=y.type;return C===As?u(f,v,y.props.children,x,y.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===or&&$p(C)===v.type)?(x=r(v,y.props),x.ref=Io(f,v,y),x.return=f,x):(x=Wl(y.type,y.key,y.props,null,f.mode,x),x.ref=Io(f,v,y),x.return=f,x)}function c(f,v,y,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=xu(y,f.mode,x),v.return=f,v):(v=r(v,y.children||[]),v.return=f,v)}function u(f,v,y,x,C){return v===null||v.tag!==7?(v=Zr(y,f.mode,x,C),v.return=f,v):(v=r(v,y),v.return=f,v)}function d(f,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=yu(""+v,f.mode,y),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Va:return y=Wl(v.type,v.key,v.props,null,f.mode,y),y.ref=Io(f,null,v),y.return=f,y;case ws:return v=xu(v,f.mode,y),v.return=f,v;case or:var x=v._init;return d(f,x(v._payload),y)}if(Xo(v)||bo(v))return v=Zr(v,f.mode,y,null),v.return=f,v;Qa(f,v)}return null}function h(f,v,y,x){var C=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:a(f,v,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Va:return y.key===C?l(f,v,y,x):null;case ws:return y.key===C?c(f,v,y,x):null;case or:return C=y._init,h(f,v,C(y._payload),x)}if(Xo(y)||bo(y))return C!==null?null:u(f,v,y,x,null);Qa(f,y)}return null}function p(f,v,y,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(y)||null,a(v,f,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Va:return f=f.get(x.key===null?y:x.key)||null,l(v,f,x,C);case ws:return f=f.get(x.key===null?y:x.key)||null,c(v,f,x,C);case or:var b=x._init;return p(f,v,y,b(x._payload),C)}if(Xo(x)||bo(x))return f=f.get(y)||null,u(v,f,x,C,null);Qa(v,x)}return null}function m(f,v,y,x){for(var C=null,b=null,w=v,R=v=0,T=null;w!==null&&R<y.length;R++){w.index>R?(T=w,w=null):T=w.sibling;var E=h(f,w,y[R],x);if(E===null){w===null&&(w=T);break}n&&w&&E.alternate===null&&e(f,w),v=s(E,v,R),b===null?C=E:b.sibling=E,b=E,w=T}if(R===y.length)return t(f,w),Et&&Vr(f,R),C;if(w===null){for(;R<y.length;R++)w=d(f,y[R],x),w!==null&&(v=s(w,v,R),b===null?C=w:b.sibling=w,b=w);return Et&&Vr(f,R),C}for(w=i(f,w);R<y.length;R++)T=p(w,f,R,y[R],x),T!==null&&(n&&T.alternate!==null&&w.delete(T.key===null?R:T.key),v=s(T,v,R),b===null?C=T:b.sibling=T,b=T);return n&&w.forEach(function(L){return e(f,L)}),Et&&Vr(f,R),C}function _(f,v,y,x){var C=bo(y);if(typeof C!="function")throw Error(te(150));if(y=C.call(y),y==null)throw Error(te(151));for(var b=C=null,w=v,R=v=0,T=null,E=y.next();w!==null&&!E.done;R++,E=y.next()){w.index>R?(T=w,w=null):T=w.sibling;var L=h(f,w,E.value,x);if(L===null){w===null&&(w=T);break}n&&w&&L.alternate===null&&e(f,w),v=s(L,v,R),b===null?C=L:b.sibling=L,b=L,w=T}if(E.done)return t(f,w),Et&&Vr(f,R),C;if(w===null){for(;!E.done;R++,E=y.next())E=d(f,E.value,x),E!==null&&(v=s(E,v,R),b===null?C=E:b.sibling=E,b=E);return Et&&Vr(f,R),C}for(w=i(f,w);!E.done;R++,E=y.next())E=p(w,f,R,E.value,x),E!==null&&(n&&E.alternate!==null&&w.delete(E.key===null?R:E.key),v=s(E,v,R),b===null?C=E:b.sibling=E,b=E);return n&&w.forEach(function(G){return e(f,G)}),Et&&Vr(f,R),C}function g(f,v,y,x){if(typeof y=="object"&&y!==null&&y.type===As&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Va:e:{for(var C=y.key,b=v;b!==null;){if(b.key===C){if(C=y.type,C===As){if(b.tag===7){t(f,b.sibling),v=r(b,y.props.children),v.return=f,f=v;break e}}else if(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===or&&$p(C)===b.type){t(f,b.sibling),v=r(b,y.props),v.ref=Io(f,b,y),v.return=f,f=v;break e}t(f,b);break}else e(f,b);b=b.sibling}y.type===As?(v=Zr(y.props.children,f.mode,x,y.key),v.return=f,f=v):(x=Wl(y.type,y.key,y.props,null,f.mode,x),x.ref=Io(f,v,y),x.return=f,f=x)}return o(f);case ws:e:{for(b=y.key;v!==null;){if(v.key===b)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){t(f,v.sibling),v=r(v,y.children||[]),v.return=f,f=v;break e}else{t(f,v);break}else e(f,v);v=v.sibling}v=xu(y,f.mode,x),v.return=f,f=v}return o(f);case or:return b=y._init,g(f,v,b(y._payload),x)}if(Xo(y))return m(f,v,y,x);if(bo(y))return _(f,v,y,x);Qa(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(t(f,v.sibling),v=r(v,y),v.return=f,f=v):(t(f,v),v=yu(y,f.mode,x),v.return=f,f=v),o(f)):t(f,v)}return g}var eo=i_(!0),r_=i_(!1),dc=Pr(null),fc=null,Ds=null,_h=null;function vh(){_h=Ds=fc=null}function yh(n){var e=dc.current;Mt(dc),n._currentValue=e}function Fd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Gs(n,e){fc=n,_h=Ds=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(En=!0),n.firstContext=null)}function Zn(n){var e=n._currentValue;if(_h!==n)if(n={context:n,memoizedValue:e,next:null},Ds===null){if(fc===null)throw Error(te(308));Ds=n,fc.dependencies={lanes:0,firstContext:n}}else Ds=Ds.next=n;return e}var Yr=null;function xh(n){Yr===null?Yr=[n]:Yr.push(n)}function s_(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,xh(e)):(t.next=r.next,r.next=t),e.interleaved=t,$i(n,i)}function $i(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ar=!1;function Sh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function o_(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Hi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,at&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,$i(n,t)}return r=i.interleaved,r===null?(e.next=e,xh(i)):(e.next=r.next,r.next=e),i.interleaved=e,$i(n,t)}function Ol(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,oh(n,t)}}function Yp(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function hc(n,e,t,i){var r=n.updateQueue;ar=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=n,_=a;switch(h=e,p=t,_.tag){case 1:if(m=_.payload,typeof m=="function"){d=m.call(p,d,h);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=_.payload,h=typeof m=="function"?m.call(p,d,h):m,h==null)break e;d=Rt({},d,h);break e;case 2:ar=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ts|=o,n.lanes=o,n.memoizedState=d}}function Kp(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Da={},Si=Pr(Da),ya=Pr(Da),xa=Pr(Da);function Kr(n){if(n===Da)throw Error(te(174));return n}function Mh(n,e){switch(vt(xa,e),vt(ya,n),vt(Si,Da),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gd(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=gd(e,n)}Mt(Si),vt(Si,e)}function to(){Mt(Si),Mt(ya),Mt(xa)}function a_(n){Kr(xa.current);var e=Kr(Si.current),t=gd(e,n.type);e!==t&&(vt(ya,n),vt(Si,t))}function Eh(n){ya.current===n&&(Mt(Si),Mt(ya))}var wt=Pr(0);function pc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hu=[];function Th(){for(var n=0;n<hu.length;n++)hu[n]._workInProgressVersionPrimary=null;hu.length=0}var Bl=Zi.ReactCurrentDispatcher,pu=Zi.ReactCurrentBatchConfig,es=0,At=null,Ft=null,Wt=null,mc=!1,na=!1,Sa=0,zx=0;function tn(){throw Error(te(321))}function wh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!hi(n[t],e[t]))return!1;return!0}function Ah(n,e,t,i,r,s){if(es=s,At=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bl.current=n===null||n.memoizedState===null?Wx:Xx,n=t(i,r),na){s=0;do{if(na=!1,Sa=0,25<=s)throw Error(te(301));s+=1,Wt=Ft=null,e.updateQueue=null,Bl.current=jx,n=t(i,r)}while(na)}if(Bl.current=gc,e=Ft!==null&&Ft.next!==null,es=0,Wt=Ft=At=null,mc=!1,e)throw Error(te(300));return n}function bh(){var n=Sa!==0;return Sa=0,n}function _i(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?At.memoizedState=Wt=n:Wt=Wt.next=n,Wt}function Qn(){if(Ft===null){var n=At.alternate;n=n!==null?n.memoizedState:null}else n=Ft.next;var e=Wt===null?At.memoizedState:Wt.next;if(e!==null)Wt=e,Ft=n;else{if(n===null)throw Error(te(310));Ft=n,n={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},Wt===null?At.memoizedState=Wt=n:Wt=Wt.next=n}return Wt}function Ma(n,e){return typeof e=="function"?e(n):e}function mu(n){var e=Qn(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=Ft,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((es&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,At.lanes|=u,ts|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,hi(i,e.memoizedState)||(En=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,At.lanes|=s,ts|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function gu(n){var e=Qn(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);hi(s,e.memoizedState)||(En=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function l_(){}function c_(n,e){var t=At,i=Qn(),r=e(),s=!hi(i.memoizedState,r);if(s&&(i.memoizedState=r,En=!0),i=i.queue,Rh(f_.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(t.flags|=2048,Ea(9,d_.bind(null,t,i,r,e),void 0,null),jt===null)throw Error(te(349));es&30||u_(t,e,r)}return r}function u_(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function d_(n,e,t,i){e.value=t,e.getSnapshot=i,h_(e)&&p_(n)}function f_(n,e,t){return t(function(){h_(e)&&p_(n)})}function h_(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!hi(n,t)}catch{return!0}}function p_(n){var e=$i(n,1);e!==null&&ui(e,n,1,-1)}function qp(n){var e=_i();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:n},e.queue=n,n=n.dispatch=Gx.bind(null,At,n),[e.memoizedState,n]}function Ea(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function m_(){return Qn().memoizedState}function zl(n,e,t,i){var r=_i();At.flags|=n,r.memoizedState=Ea(1|e,t,void 0,i===void 0?null:i)}function Uc(n,e,t,i){var r=Qn();i=i===void 0?null:i;var s=void 0;if(Ft!==null){var o=Ft.memoizedState;if(s=o.destroy,i!==null&&wh(i,o.deps)){r.memoizedState=Ea(e,t,s,i);return}}At.flags|=n,r.memoizedState=Ea(1|e,t,s,i)}function Zp(n,e){return zl(8390656,8,n,e)}function Rh(n,e){return Uc(2048,8,n,e)}function g_(n,e){return Uc(4,2,n,e)}function __(n,e){return Uc(4,4,n,e)}function v_(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function y_(n,e,t){return t=t!=null?t.concat([n]):null,Uc(4,4,v_.bind(null,e,n),t)}function Ch(){}function x_(n,e){var t=Qn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&wh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function S_(n,e){var t=Qn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&wh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function M_(n,e,t){return es&21?(hi(t,e)||(t=b0(),At.lanes|=t,ts|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,En=!0),n.memoizedState=t)}function Vx(n,e){var t=pt;pt=t!==0&&4>t?t:4,n(!0);var i=pu.transition;pu.transition={};try{n(!1),e()}finally{pt=t,pu.transition=i}}function E_(){return Qn().memoizedState}function Hx(n,e,t){var i=Mr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},T_(n))w_(e,t);else if(t=s_(n,e,t,i),t!==null){var r=pn();ui(t,n,i,r),A_(t,e,i)}}function Gx(n,e,t){var i=Mr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(T_(n))w_(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,hi(a,o)){var l=e.interleaved;l===null?(r.next=r,xh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=s_(n,e,r,i),t!==null&&(r=pn(),ui(t,n,i,r),A_(t,e,i))}}function T_(n){var e=n.alternate;return n===At||e!==null&&e===At}function w_(n,e){na=mc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function A_(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,oh(n,t)}}var gc={readContext:Zn,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useInsertionEffect:tn,useLayoutEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useMutableSource:tn,useSyncExternalStore:tn,useId:tn,unstable_isNewReconciler:!1},Wx={readContext:Zn,useCallback:function(n,e){return _i().memoizedState=[n,e===void 0?null:e],n},useContext:Zn,useEffect:Zp,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,zl(4194308,4,v_.bind(null,e,n),t)},useLayoutEffect:function(n,e){return zl(4194308,4,n,e)},useInsertionEffect:function(n,e){return zl(4,2,n,e)},useMemo:function(n,e){var t=_i();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=_i();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Hx.bind(null,At,n),[i.memoizedState,n]},useRef:function(n){var e=_i();return n={current:n},e.memoizedState=n},useState:qp,useDebugValue:Ch,useDeferredValue:function(n){return _i().memoizedState=n},useTransition:function(){var n=qp(!1),e=n[0];return n=Vx.bind(null,n[1]),_i().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=At,r=_i();if(Et){if(t===void 0)throw Error(te(407));t=t()}else{if(t=e(),jt===null)throw Error(te(349));es&30||u_(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Zp(f_.bind(null,i,s,n),[n]),i.flags|=2048,Ea(9,d_.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=_i(),e=jt.identifierPrefix;if(Et){var t=Bi,i=Oi;t=(i&~(1<<32-ci(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Sa++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=zx++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Xx={readContext:Zn,useCallback:x_,useContext:Zn,useEffect:Rh,useImperativeHandle:y_,useInsertionEffect:g_,useLayoutEffect:__,useMemo:S_,useReducer:mu,useRef:m_,useState:function(){return mu(Ma)},useDebugValue:Ch,useDeferredValue:function(n){var e=Qn();return M_(e,Ft.memoizedState,n)},useTransition:function(){var n=mu(Ma)[0],e=Qn().memoizedState;return[n,e]},useMutableSource:l_,useSyncExternalStore:c_,useId:E_,unstable_isNewReconciler:!1},jx={readContext:Zn,useCallback:x_,useContext:Zn,useEffect:Rh,useImperativeHandle:y_,useInsertionEffect:g_,useLayoutEffect:__,useMemo:S_,useReducer:gu,useRef:m_,useState:function(){return gu(Ma)},useDebugValue:Ch,useDeferredValue:function(n){var e=Qn();return Ft===null?e.memoizedState=n:M_(e,Ft.memoizedState,n)},useTransition:function(){var n=gu(Ma)[0],e=Qn().memoizedState;return[n,e]},useMutableSource:l_,useSyncExternalStore:c_,useId:E_,unstable_isNewReconciler:!1};function ri(n,e){if(n&&n.defaultProps){e=Rt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function kd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Rt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Fc={isMounted:function(n){return(n=n._reactInternals)?os(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=pn(),r=Mr(n),s=Hi(i,r);s.payload=e,t!=null&&(s.callback=t),e=xr(n,s,r),e!==null&&(ui(e,n,r,i),Ol(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=pn(),r=Mr(n),s=Hi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=xr(n,s,r),e!==null&&(ui(e,n,r,i),Ol(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=pn(),i=Mr(n),r=Hi(t,i);r.tag=2,e!=null&&(r.callback=e),e=xr(n,r,i),e!==null&&(ui(e,n,i,t),Ol(e,n,i))}};function Qp(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ma(t,i)||!ma(r,s):!0}function b_(n,e,t){var i=!1,r=br,s=e.contextType;return typeof s=="object"&&s!==null?s=Zn(s):(r=wn(e)?Qr:ln.current,i=e.contextTypes,s=(i=i!=null)?Qs(n,r):br),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Jp(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Fc.enqueueReplaceState(e,e.state,null)}function Od(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Sh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Zn(s):(s=wn(e)?Qr:ln.current,r.context=Qs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(kd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Fc.enqueueReplaceState(r,r.state,null),hc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function no(n,e){try{var t="",i=e;do t+=xy(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function _u(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Bd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var $x=typeof WeakMap=="function"?WeakMap:Map;function R_(n,e,t){t=Hi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){vc||(vc=!0,Kd=i),Bd(n,e)},t}function C_(n,e,t){t=Hi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Bd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Bd(n,e),typeof i!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function em(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new $x;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=aS.bind(null,n,e,t),e.then(n,n))}function tm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function nm(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Hi(-1,1),e.tag=2,xr(t,e,1))),t.lanes|=1),n)}var Yx=Zi.ReactCurrentOwner,En=!1;function fn(n,e,t,i){e.child=n===null?r_(e,null,t,i):eo(e,n.child,t,i)}function im(n,e,t,i,r){t=t.render;var s=e.ref;return Gs(e,r),i=Ah(n,e,t,i,s,r),t=bh(),n!==null&&!En?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Yi(n,e,r)):(Et&&t&&ph(e),e.flags|=1,fn(n,e,i,r),e.child)}function rm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!kh(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,P_(n,e,s,i,r)):(n=Wl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:ma,t(o,i)&&n.ref===e.ref)return Yi(n,e,r)}return e.flags|=1,n=Er(s,i),n.ref=e.ref,n.return=e,e.child=n}function P_(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(ma(s,i)&&n.ref===e.ref)if(En=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(En=!0);else return e.lanes=n.lanes,Yi(n,e,r)}return zd(n,e,t,i,r)}function L_(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},vt(Fs,Pn),Pn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,vt(Fs,Pn),Pn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,vt(Fs,Pn),Pn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,vt(Fs,Pn),Pn|=i;return fn(n,e,r,t),e.child}function I_(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function zd(n,e,t,i,r){var s=wn(t)?Qr:ln.current;return s=Qs(e,s),Gs(e,r),t=Ah(n,e,t,i,s,r),i=bh(),n!==null&&!En?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Yi(n,e,r)):(Et&&i&&ph(e),e.flags|=1,fn(n,e,t,r),e.child)}function sm(n,e,t,i,r){if(wn(t)){var s=!0;lc(e)}else s=!1;if(Gs(e,r),e.stateNode===null)Vl(n,e),b_(e,t,i),Od(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Zn(c):(c=wn(t)?Qr:ln.current,c=Qs(e,c));var u=t.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Jp(e,o,i,c),ar=!1;var h=e.memoizedState;o.state=h,hc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Tn.current||ar?(typeof u=="function"&&(kd(e,t,u,i),l=e.memoizedState),(a=ar||Qp(e,t,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,o_(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:ri(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Zn(l):(l=wn(t)?Qr:ln.current,l=Qs(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Jp(e,o,i,l),ar=!1,h=e.memoizedState,o.state=h,hc(e,i,o,r);var m=e.memoizedState;a!==d||h!==m||Tn.current||ar?(typeof p=="function"&&(kd(e,t,p,i),m=e.memoizedState),(c=ar||Qp(e,t,c,i,h,m,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Vd(n,e,t,i,s,r)}function Vd(n,e,t,i,r,s){I_(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Wp(e,t,!1),Yi(n,e,s);i=e.stateNode,Yx.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=eo(e,n.child,null,s),e.child=eo(e,null,a,s)):fn(n,e,a,s),e.memoizedState=i.state,r&&Wp(e,t,!0),e.child}function N_(n){var e=n.stateNode;e.pendingContext?Gp(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Gp(n,e.context,!1),Mh(n,e.containerInfo)}function om(n,e,t,i,r){return Js(),gh(r),e.flags|=256,fn(n,e,t,i),e.child}var Hd={dehydrated:null,treeContext:null,retryLane:0};function Gd(n){return{baseLanes:n,cachePool:null,transitions:null}}function D_(n,e,t){var i=e.pendingProps,r=wt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),vt(wt,r&1),n===null)return Ud(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Bc(o,i,0,null),n=Zr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Gd(t),e.memoizedState=Hd,n):Ph(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Kx(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Er(a,s):(s=Zr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Gd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Hd,i}return s=n.child,n=s.sibling,i=Er(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Ph(n,e){return e=Bc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Ja(n,e,t,i){return i!==null&&gh(i),eo(e,n.child,null,t),n=Ph(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Kx(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=_u(Error(te(422))),Ja(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Bc({mode:"visible",children:i.children},r,0,null),s=Zr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&eo(e,n.child,null,o),e.child.memoizedState=Gd(o),e.memoizedState=Hd,s);if(!(e.mode&1))return Ja(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=_u(s,i,void 0),Ja(n,e,o,i)}if(a=(o&n.childLanes)!==0,En||a){if(i=jt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,$i(n,r),ui(i,n,r,-1))}return Fh(),i=_u(Error(te(421))),Ja(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=lS.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,In=yr(r.nextSibling),Dn=e,Et=!0,oi=null,n!==null&&(Gn[Wn++]=Oi,Gn[Wn++]=Bi,Gn[Wn++]=Jr,Oi=n.id,Bi=n.overflow,Jr=e),e=Ph(e,i.children),e.flags|=4096,e)}function am(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Fd(n.return,e,t)}function vu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function U_(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(fn(n,e,i.children,t),i=wt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&am(n,t,e);else if(n.tag===19)am(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(vt(wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&pc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),vu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&pc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}vu(e,!0,t,null,s);break;case"together":vu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Vl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Yi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ts|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(te(153));if(e.child!==null){for(n=e.child,t=Er(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Er(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function qx(n,e,t){switch(e.tag){case 3:N_(e),Js();break;case 5:a_(e);break;case 1:wn(e.type)&&lc(e);break;case 4:Mh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;vt(dc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(vt(wt,wt.current&1),e.flags|=128,null):t&e.child.childLanes?D_(n,e,t):(vt(wt,wt.current&1),n=Yi(n,e,t),n!==null?n.sibling:null);vt(wt,wt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return U_(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),vt(wt,wt.current),i)break;return null;case 22:case 23:return e.lanes=0,L_(n,e,t)}return Yi(n,e,t)}var F_,Wd,k_,O_;F_=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Wd=function(){};k_=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Kr(Si.current);var s=null;switch(t){case"input":r=fd(n,r),i=fd(n,i),s=[];break;case"select":r=Rt({},r,{value:void 0}),i=Rt({},i,{value:void 0}),s=[];break;case"textarea":r=md(n,r),i=md(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=oc)}_d(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(la.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(la.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&xt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};O_=function(n,e,t,i){t!==i&&(e.flags|=4)};function No(n,e){if(!Et)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function nn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Zx(n,e,t){var i=e.pendingProps;switch(mh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(e),null;case 1:return wn(e.type)&&ac(),nn(e),null;case 3:return i=e.stateNode,to(),Mt(Tn),Mt(ln),Th(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Za(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,oi!==null&&(Qd(oi),oi=null))),Wd(n,e),nn(e),null;case 5:Eh(e);var r=Kr(xa.current);if(t=e.type,n!==null&&e.stateNode!=null)k_(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return nn(e),null}if(n=Kr(Si.current),Za(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[yi]=e,i[va]=s,n=(e.mode&1)!==0,t){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(r=0;r<$o.length;r++)xt($o[r],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":gp(i,s),xt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},xt("invalid",i);break;case"textarea":vp(i,s),xt("invalid",i)}_d(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&qa(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&qa(i.textContent,a,n),r=["children",""+a]):la.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&xt("scroll",i)}switch(t){case"input":Ha(i),_p(i,s,!0);break;case"textarea":Ha(i),yp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=oc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=f0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[yi]=e,n[va]=i,F_(n,e,!1,!1),e.stateNode=n;e:{switch(o=vd(t,i),t){case"dialog":xt("cancel",n),xt("close",n),r=i;break;case"iframe":case"object":case"embed":xt("load",n),r=i;break;case"video":case"audio":for(r=0;r<$o.length;r++)xt($o[r],n);r=i;break;case"source":xt("error",n),r=i;break;case"img":case"image":case"link":xt("error",n),xt("load",n),r=i;break;case"details":xt("toggle",n),r=i;break;case"input":gp(n,i),r=fd(n,i),xt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Rt({},i,{value:void 0}),xt("invalid",n);break;case"textarea":vp(n,i),r=md(n,i),xt("invalid",n);break;default:r=i}_d(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?m0(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&h0(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ca(n,l):typeof l=="number"&&ca(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(la.hasOwnProperty(s)?l!=null&&s==="onScroll"&&xt("scroll",n):l!=null&&eh(n,s,l,o))}switch(t){case"input":Ha(n),_p(n,i,!1);break;case"textarea":Ha(n),yp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ar(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Bs(n,!!i.multiple,s,!1):i.defaultValue!=null&&Bs(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=oc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nn(e),null;case 6:if(n&&e.stateNode!=null)O_(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(t=Kr(xa.current),Kr(Si.current),Za(e)){if(i=e.stateNode,t=e.memoizedProps,i[yi]=e,(s=i.nodeValue!==t)&&(n=Dn,n!==null))switch(n.tag){case 3:qa(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&qa(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[yi]=e,e.stateNode=i}return nn(e),null;case 13:if(Mt(wt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Et&&In!==null&&e.mode&1&&!(e.flags&128))n_(),Js(),e.flags|=98560,s=!1;else if(s=Za(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[yi]=e}else Js(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nn(e),s=!1}else oi!==null&&(Qd(oi),oi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||wt.current&1?kt===0&&(kt=3):Fh())),e.updateQueue!==null&&(e.flags|=4),nn(e),null);case 4:return to(),Wd(n,e),n===null&&ga(e.stateNode.containerInfo),nn(e),null;case 10:return yh(e.type._context),nn(e),null;case 17:return wn(e.type)&&ac(),nn(e),null;case 19:if(Mt(wt),s=e.memoizedState,s===null)return nn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)No(s,!1);else{if(kt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=pc(n),o!==null){for(e.flags|=128,No(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return vt(wt,wt.current&1|2),e.child}n=n.sibling}s.tail!==null&&It()>io&&(e.flags|=128,i=!0,No(s,!1),e.lanes=4194304)}else{if(!i)if(n=pc(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),No(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Et)return nn(e),null}else 2*It()-s.renderingStartTime>io&&t!==1073741824&&(e.flags|=128,i=!0,No(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=It(),e.sibling=null,t=wt.current,vt(wt,i?t&1|2:t&1),e):(nn(e),null);case 22:case 23:return Uh(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Pn&1073741824&&(nn(e),e.subtreeFlags&6&&(e.flags|=8192)):nn(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function Qx(n,e){switch(mh(e),e.tag){case 1:return wn(e.type)&&ac(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return to(),Mt(Tn),Mt(ln),Th(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Eh(e),null;case 13:if(Mt(wt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Js()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Mt(wt),null;case 4:return to(),null;case 10:return yh(e.type._context),null;case 22:case 23:return Uh(),null;case 24:return null;default:return null}}var el=!1,on=!1,Jx=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Us(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Lt(n,e,i)}else t.current=null}function Xd(n,e,t){try{t()}catch(i){Lt(n,e,i)}}var lm=!1;function eS(n,e){if(Rd=ic,n=G0(),hh(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=n,h=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===n)break t;if(h===t&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Cd={focusedElem:n,selectionRange:t},ic=!1,Me=e;Me!==null;)if(e=Me,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Me=n;else for(;Me!==null;){e=Me;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var _=m.memoizedProps,g=m.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?_:ri(e.type,_),g);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(x){Lt(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}return m=lm,lm=!1,m}function ia(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Xd(e,t,s)}r=r.next}while(r!==i)}}function kc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function jd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function B_(n){var e=n.alternate;e!==null&&(n.alternate=null,B_(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[yi],delete e[va],delete e[Id],delete e[Fx],delete e[kx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function z_(n){return n.tag===5||n.tag===3||n.tag===4}function cm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||z_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function $d(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=oc));else if(i!==4&&(n=n.child,n!==null))for($d(n,e,t),n=n.sibling;n!==null;)$d(n,e,t),n=n.sibling}function Yd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Yd(n,e,t),n=n.sibling;n!==null;)Yd(n,e,t),n=n.sibling}var Kt=null,si=!1;function Qi(n,e,t){for(t=t.child;t!==null;)V_(n,e,t),t=t.sibling}function V_(n,e,t){if(xi&&typeof xi.onCommitFiberUnmount=="function")try{xi.onCommitFiberUnmount(Cc,t)}catch{}switch(t.tag){case 5:on||Us(t,e);case 6:var i=Kt,r=si;Kt=null,Qi(n,e,t),Kt=i,si=r,Kt!==null&&(si?(n=Kt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Kt.removeChild(t.stateNode));break;case 18:Kt!==null&&(si?(n=Kt,t=t.stateNode,n.nodeType===8?du(n.parentNode,t):n.nodeType===1&&du(n,t),ha(n)):du(Kt,t.stateNode));break;case 4:i=Kt,r=si,Kt=t.stateNode.containerInfo,si=!0,Qi(n,e,t),Kt=i,si=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Xd(t,e,o),r=r.next}while(r!==i)}Qi(n,e,t);break;case 1:if(!on&&(Us(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Lt(t,e,a)}Qi(n,e,t);break;case 21:Qi(n,e,t);break;case 22:t.mode&1?(on=(i=on)||t.memoizedState!==null,Qi(n,e,t),on=i):Qi(n,e,t);break;default:Qi(n,e,t)}}function um(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Jx),e.forEach(function(i){var r=cS.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ei(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Kt=a.stateNode,si=!1;break e;case 3:Kt=a.stateNode.containerInfo,si=!0;break e;case 4:Kt=a.stateNode.containerInfo,si=!0;break e}a=a.return}if(Kt===null)throw Error(te(160));V_(s,o,r),Kt=null,si=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Lt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)H_(e,n),e=e.sibling}function H_(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ei(e,n),gi(n),i&4){try{ia(3,n,n.return),kc(3,n)}catch(_){Lt(n,n.return,_)}try{ia(5,n,n.return)}catch(_){Lt(n,n.return,_)}}break;case 1:ei(e,n),gi(n),i&512&&t!==null&&Us(t,t.return);break;case 5:if(ei(e,n),gi(n),i&512&&t!==null&&Us(t,t.return),n.flags&32){var r=n.stateNode;try{ca(r,"")}catch(_){Lt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&u0(r,s),vd(a,o);var c=vd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?m0(r,d):u==="dangerouslySetInnerHTML"?h0(r,d):u==="children"?ca(r,d):eh(r,u,d,c)}switch(a){case"input":hd(r,s);break;case"textarea":d0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Bs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Bs(r,!!s.multiple,s.defaultValue,!0):Bs(r,!!s.multiple,s.multiple?[]:"",!1))}r[va]=s}catch(_){Lt(n,n.return,_)}}break;case 6:if(ei(e,n),gi(n),i&4){if(n.stateNode===null)throw Error(te(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Lt(n,n.return,_)}}break;case 3:if(ei(e,n),gi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{ha(e.containerInfo)}catch(_){Lt(n,n.return,_)}break;case 4:ei(e,n),gi(n);break;case 13:ei(e,n),gi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Nh=It())),i&4&&um(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(on=(c=on)||u,ei(e,n),on=c):ei(e,n),gi(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(Me=n,u=n.child;u!==null;){for(d=Me=u;Me!==null;){switch(h=Me,p=h.child,h.tag){case 0:case 11:case 14:case 15:ia(4,h,h.return);break;case 1:Us(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(_){Lt(i,t,_)}}break;case 5:Us(h,h.return);break;case 22:if(h.memoizedState!==null){fm(d);continue}}p!==null?(p.return=h,Me=p):fm(d)}u=u.sibling}e:for(u=null,d=n;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=p0("display",o))}catch(_){Lt(n,n.return,_)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){Lt(n,n.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ei(e,n),gi(n),i&4&&um(n);break;case 21:break;default:ei(e,n),gi(n)}}function gi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(z_(t)){var i=t;break e}t=t.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ca(r,""),i.flags&=-33);var s=cm(n);Yd(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=cm(n);$d(n,a,o);break;default:throw Error(te(161))}}catch(l){Lt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function tS(n,e,t){Me=n,G_(n)}function G_(n,e,t){for(var i=(n.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||el;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||on;a=el;var c=on;if(el=o,(on=l)&&!c)for(Me=r;Me!==null;)o=Me,l=o.child,o.tag===22&&o.memoizedState!==null?hm(r):l!==null?(l.return=o,Me=l):hm(r);for(;s!==null;)Me=s,G_(s),s=s.sibling;Me=r,el=a,on=c}dm(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Me=s):dm(n)}}function dm(n){for(;Me!==null;){var e=Me;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||kc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:ri(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Kp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Kp(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&ha(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}on||e.flags&512&&jd(e)}catch(h){Lt(e,e.return,h)}}if(e===n){Me=null;break}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}}function fm(n){for(;Me!==null;){var e=Me;if(e===n){Me=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Me=t;break}Me=e.return}}function hm(n){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{kc(4,e)}catch(l){Lt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Lt(e,r,l)}}var s=e.return;try{jd(e)}catch(l){Lt(e,s,l)}break;case 5:var o=e.return;try{jd(e)}catch(l){Lt(e,o,l)}}}catch(l){Lt(e,e.return,l)}if(e===n){Me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Me=a;break}Me=e.return}}var nS=Math.ceil,_c=Zi.ReactCurrentDispatcher,Lh=Zi.ReactCurrentOwner,Kn=Zi.ReactCurrentBatchConfig,at=0,jt=null,Dt=null,qt=0,Pn=0,Fs=Pr(0),kt=0,Ta=null,ts=0,Oc=0,Ih=0,ra=null,Sn=null,Nh=0,io=1/0,Ui=null,vc=!1,Kd=null,Sr=null,tl=!1,hr=null,yc=0,sa=0,qd=null,Hl=-1,Gl=0;function pn(){return at&6?It():Hl!==-1?Hl:Hl=It()}function Mr(n){return n.mode&1?at&2&&qt!==0?qt&-qt:Bx.transition!==null?(Gl===0&&(Gl=b0()),Gl):(n=pt,n!==0||(n=window.event,n=n===void 0?16:D0(n.type)),n):1}function ui(n,e,t,i){if(50<sa)throw sa=0,qd=null,Error(te(185));La(n,t,i),(!(at&2)||n!==jt)&&(n===jt&&(!(at&2)&&(Oc|=t),kt===4&&ur(n,qt)),An(n,i),t===1&&at===0&&!(e.mode&1)&&(io=It()+500,Dc&&Lr()))}function An(n,e){var t=n.callbackNode;By(n,e);var i=nc(n,n===jt?qt:0);if(i===0)t!==null&&Mp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Mp(t),e===1)n.tag===0?Ox(pm.bind(null,n)):J0(pm.bind(null,n)),Dx(function(){!(at&6)&&Lr()}),t=null;else{switch(R0(i)){case 1:t=sh;break;case 4:t=w0;break;case 16:t=tc;break;case 536870912:t=A0;break;default:t=tc}t=Z_(t,W_.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function W_(n,e){if(Hl=-1,Gl=0,at&6)throw Error(te(327));var t=n.callbackNode;if(Ws()&&n.callbackNode!==t)return null;var i=nc(n,n===jt?qt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=xc(n,i);else{e=i;var r=at;at|=2;var s=j_();(jt!==n||qt!==e)&&(Ui=null,io=It()+500,qr(n,e));do try{sS();break}catch(a){X_(n,a)}while(!0);vh(),_c.current=s,at=r,Dt!==null?e=0:(jt=null,qt=0,e=kt)}if(e!==0){if(e===2&&(r=Ed(n),r!==0&&(i=r,e=Zd(n,r))),e===1)throw t=Ta,qr(n,0),ur(n,i),An(n,It()),t;if(e===6)ur(n,i);else{if(r=n.current.alternate,!(i&30)&&!iS(r)&&(e=xc(n,i),e===2&&(s=Ed(n),s!==0&&(i=s,e=Zd(n,s))),e===1))throw t=Ta,qr(n,0),ur(n,i),An(n,It()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:Hr(n,Sn,Ui);break;case 3:if(ur(n,i),(i&130023424)===i&&(e=Nh+500-It(),10<e)){if(nc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){pn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Ld(Hr.bind(null,n,Sn,Ui),e);break}Hr(n,Sn,Ui);break;case 4:if(ur(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-ci(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=It()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*nS(i/1960))-i,10<i){n.timeoutHandle=Ld(Hr.bind(null,n,Sn,Ui),i);break}Hr(n,Sn,Ui);break;case 5:Hr(n,Sn,Ui);break;default:throw Error(te(329))}}}return An(n,It()),n.callbackNode===t?W_.bind(null,n):null}function Zd(n,e){var t=ra;return n.current.memoizedState.isDehydrated&&(qr(n,e).flags|=256),n=xc(n,e),n!==2&&(e=Sn,Sn=t,e!==null&&Qd(e)),n}function Qd(n){Sn===null?Sn=n:Sn.push.apply(Sn,n)}function iS(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!hi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(n,e){for(e&=~Ih,e&=~Oc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ci(e),i=1<<t;n[t]=-1,e&=~i}}function pm(n){if(at&6)throw Error(te(327));Ws();var e=nc(n,0);if(!(e&1))return An(n,It()),null;var t=xc(n,e);if(n.tag!==0&&t===2){var i=Ed(n);i!==0&&(e=i,t=Zd(n,i))}if(t===1)throw t=Ta,qr(n,0),ur(n,e),An(n,It()),t;if(t===6)throw Error(te(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Hr(n,Sn,Ui),An(n,It()),null}function Dh(n,e){var t=at;at|=1;try{return n(e)}finally{at=t,at===0&&(io=It()+500,Dc&&Lr())}}function ns(n){hr!==null&&hr.tag===0&&!(at&6)&&Ws();var e=at;at|=1;var t=Kn.transition,i=pt;try{if(Kn.transition=null,pt=1,n)return n()}finally{pt=i,Kn.transition=t,at=e,!(at&6)&&Lr()}}function Uh(){Pn=Fs.current,Mt(Fs)}function qr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Nx(t)),Dt!==null)for(t=Dt.return;t!==null;){var i=t;switch(mh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ac();break;case 3:to(),Mt(Tn),Mt(ln),Th();break;case 5:Eh(i);break;case 4:to();break;case 13:Mt(wt);break;case 19:Mt(wt);break;case 10:yh(i.type._context);break;case 22:case 23:Uh()}t=t.return}if(jt=n,Dt=n=Er(n.current,null),qt=Pn=e,kt=0,Ta=null,Ih=Oc=ts=0,Sn=ra=null,Yr!==null){for(e=0;e<Yr.length;e++)if(t=Yr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Yr=null}return n}function X_(n,e){do{var t=Dt;try{if(vh(),Bl.current=gc,mc){for(var i=At.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}mc=!1}if(es=0,Wt=Ft=At=null,na=!1,Sa=0,Lh.current=null,t===null||t.return===null){kt=1,Ta=e,Dt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=qt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=tm(o);if(p!==null){p.flags&=-257,nm(p,o,a,s,e),p.mode&1&&em(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var _=new Set;_.add(l),e.updateQueue=_}else m.add(l);break e}else{if(!(e&1)){em(s,c,e),Fh();break e}l=Error(te(426))}}else if(Et&&a.mode&1){var g=tm(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),nm(g,o,a,s,e),gh(no(l,a));break e}}s=l=no(l,a),kt!==4&&(kt=2),ra===null?ra=[s]:ra.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=R_(s,l,e);Yp(s,f);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Sr===null||!Sr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=C_(s,a,e);Yp(s,x);break e}}s=s.return}while(s!==null)}Y_(t)}catch(C){e=C,Dt===t&&t!==null&&(Dt=t=t.return);continue}break}while(!0)}function j_(){var n=_c.current;return _c.current=gc,n===null?gc:n}function Fh(){(kt===0||kt===3||kt===2)&&(kt=4),jt===null||!(ts&268435455)&&!(Oc&268435455)||ur(jt,qt)}function xc(n,e){var t=at;at|=2;var i=j_();(jt!==n||qt!==e)&&(Ui=null,qr(n,e));do try{rS();break}catch(r){X_(n,r)}while(!0);if(vh(),at=t,_c.current=i,Dt!==null)throw Error(te(261));return jt=null,qt=0,kt}function rS(){for(;Dt!==null;)$_(Dt)}function sS(){for(;Dt!==null&&!Py();)$_(Dt)}function $_(n){var e=q_(n.alternate,n,Pn);n.memoizedProps=n.pendingProps,e===null?Y_(n):Dt=e,Lh.current=null}function Y_(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Qx(t,e),t!==null){t.flags&=32767,Dt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{kt=6,Dt=null;return}}else if(t=Zx(t,e,Pn),t!==null){Dt=t;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=n}while(e!==null);kt===0&&(kt=5)}function Hr(n,e,t){var i=pt,r=Kn.transition;try{Kn.transition=null,pt=1,oS(n,e,t,i)}finally{Kn.transition=r,pt=i}return null}function oS(n,e,t,i){do Ws();while(hr!==null);if(at&6)throw Error(te(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(te(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(zy(n,s),n===jt&&(Dt=jt=null,qt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||tl||(tl=!0,Z_(tc,function(){return Ws(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Kn.transition,Kn.transition=null;var o=pt;pt=1;var a=at;at|=4,Lh.current=null,eS(n,t),H_(t,n),Ax(Cd),ic=!!Rd,Cd=Rd=null,n.current=t,tS(t),Ly(),at=a,pt=o,Kn.transition=s}else n.current=t;if(tl&&(tl=!1,hr=n,yc=r),s=n.pendingLanes,s===0&&(Sr=null),Dy(t.stateNode),An(n,It()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(vc)throw vc=!1,n=Kd,Kd=null,n;return yc&1&&n.tag!==0&&Ws(),s=n.pendingLanes,s&1?n===qd?sa++:(sa=0,qd=n):sa=0,Lr(),null}function Ws(){if(hr!==null){var n=R0(yc),e=Kn.transition,t=pt;try{if(Kn.transition=null,pt=16>n?16:n,hr===null)var i=!1;else{if(n=hr,hr=null,yc=0,at&6)throw Error(te(331));var r=at;for(at|=4,Me=n.current;Me!==null;){var s=Me,o=s.child;if(Me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Me=c;Me!==null;){var u=Me;switch(u.tag){case 0:case 11:case 15:ia(8,u,s)}var d=u.child;if(d!==null)d.return=u,Me=d;else for(;Me!==null;){u=Me;var h=u.sibling,p=u.return;if(B_(u),u===c){Me=null;break}if(h!==null){h.return=p,Me=h;break}Me=p}}}var m=s.alternate;if(m!==null){var _=m.child;if(_!==null){m.child=null;do{var g=_.sibling;_.sibling=null,_=g}while(_!==null)}}Me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Me=o;else e:for(;Me!==null;){if(s=Me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ia(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Me=f;break e}Me=s.return}}var v=n.current;for(Me=v;Me!==null;){o=Me;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Me=y;else e:for(o=v;Me!==null;){if(a=Me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:kc(9,a)}}catch(C){Lt(a,a.return,C)}if(a===o){Me=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Me=x;break e}Me=a.return}}if(at=r,Lr(),xi&&typeof xi.onPostCommitFiberRoot=="function")try{xi.onPostCommitFiberRoot(Cc,n)}catch{}i=!0}return i}finally{pt=t,Kn.transition=e}}return!1}function mm(n,e,t){e=no(t,e),e=R_(n,e,1),n=xr(n,e,1),e=pn(),n!==null&&(La(n,1,e),An(n,e))}function Lt(n,e,t){if(n.tag===3)mm(n,n,t);else for(;e!==null;){if(e.tag===3){mm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Sr===null||!Sr.has(i))){n=no(t,n),n=C_(e,n,1),e=xr(e,n,1),n=pn(),e!==null&&(La(e,1,n),An(e,n));break}}e=e.return}}function aS(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=pn(),n.pingedLanes|=n.suspendedLanes&t,jt===n&&(qt&t)===t&&(kt===4||kt===3&&(qt&130023424)===qt&&500>It()-Nh?qr(n,0):Ih|=t),An(n,e)}function K_(n,e){e===0&&(n.mode&1?(e=Xa,Xa<<=1,!(Xa&130023424)&&(Xa=4194304)):e=1);var t=pn();n=$i(n,e),n!==null&&(La(n,e,t),An(n,t))}function lS(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),K_(n,t)}function cS(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),K_(n,t)}var q_;q_=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Tn.current)En=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return En=!1,qx(n,e,t);En=!!(n.flags&131072)}else En=!1,Et&&e.flags&1048576&&e_(e,uc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Vl(n,e),n=e.pendingProps;var r=Qs(e,ln.current);Gs(e,t),r=Ah(null,e,i,n,r,t);var s=bh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wn(i)?(s=!0,lc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Sh(e),r.updater=Fc,e.stateNode=r,r._reactInternals=e,Od(e,i,n,t),e=Vd(null,e,i,!0,s,t)):(e.tag=0,Et&&s&&ph(e),fn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Vl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=dS(i),n=ri(i,n),r){case 0:e=zd(null,e,i,n,t);break e;case 1:e=sm(null,e,i,n,t);break e;case 11:e=im(null,e,i,n,t);break e;case 14:e=rm(null,e,i,ri(i.type,n),t);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),zd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),sm(n,e,i,r,t);case 3:e:{if(N_(e),n===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,o_(n,e),hc(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=no(Error(te(423)),e),e=om(n,e,i,t,r);break e}else if(i!==r){r=no(Error(te(424)),e),e=om(n,e,i,t,r);break e}else for(In=yr(e.stateNode.containerInfo.firstChild),Dn=e,Et=!0,oi=null,t=r_(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Js(),i===r){e=Yi(n,e,t);break e}fn(n,e,i,t)}e=e.child}return e;case 5:return a_(e),n===null&&Ud(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Pd(i,r)?o=null:s!==null&&Pd(i,s)&&(e.flags|=32),I_(n,e),fn(n,e,o,t),e.child;case 6:return n===null&&Ud(e),null;case 13:return D_(n,e,t);case 4:return Mh(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=eo(e,null,i,t):fn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),im(n,e,i,r,t);case 7:return fn(n,e,e.pendingProps,t),e.child;case 8:return fn(n,e,e.pendingProps.children,t),e.child;case 12:return fn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,vt(dc,i._currentValue),i._currentValue=o,s!==null)if(hi(s.value,o)){if(s.children===r.children&&!Tn.current){e=Yi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Hi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Fd(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Fd(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}fn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Gs(e,t),r=Zn(r),i=i(r),e.flags|=1,fn(n,e,i,t),e.child;case 14:return i=e.type,r=ri(i,e.pendingProps),r=ri(i.type,r),rm(n,e,i,r,t);case 15:return P_(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),Vl(n,e),e.tag=1,wn(i)?(n=!0,lc(e)):n=!1,Gs(e,t),b_(e,i,r),Od(e,i,r,t),Vd(null,e,i,!0,n,t);case 19:return U_(n,e,t);case 22:return L_(n,e,t)}throw Error(te(156,e.tag))};function Z_(n,e){return T0(n,e)}function uS(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(n,e,t,i){return new uS(n,e,t,i)}function kh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function dS(n){if(typeof n=="function")return kh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===nh)return 11;if(n===ih)return 14}return 2}function Er(n,e){var t=n.alternate;return t===null?(t=$n(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Wl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")kh(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case As:return Zr(t.children,r,s,e);case th:o=8,r|=8;break;case ld:return n=$n(12,t,e,r|2),n.elementType=ld,n.lanes=s,n;case cd:return n=$n(13,t,e,r),n.elementType=cd,n.lanes=s,n;case ud:return n=$n(19,t,e,r),n.elementType=ud,n.lanes=s,n;case a0:return Bc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case s0:o=10;break e;case o0:o=9;break e;case nh:o=11;break e;case ih:o=14;break e;case or:o=16,i=null;break e}throw Error(te(130,n==null?n:typeof n,""))}return e=$n(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Zr(n,e,t,i){return n=$n(7,n,i,e),n.lanes=t,n}function Bc(n,e,t,i){return n=$n(22,n,i,e),n.elementType=a0,n.lanes=t,n.stateNode={isHidden:!1},n}function yu(n,e,t){return n=$n(6,n,null,e),n.lanes=t,n}function xu(n,e,t){return e=$n(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function fS(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eu(0),this.expirationTimes=eu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Oh(n,e,t,i,r,s,o,a,l){return n=new fS(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$n(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sh(s),n}function hS(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ws,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Q_(n){if(!n)return br;n=n._reactInternals;e:{if(os(n)!==n||n.tag!==1)throw Error(te(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(n.tag===1){var t=n.type;if(wn(t))return Q0(n,t,e)}return e}function J_(n,e,t,i,r,s,o,a,l){return n=Oh(t,i,!0,n,r,s,o,a,l),n.context=Q_(null),t=n.current,i=pn(),r=Mr(t),s=Hi(i,r),s.callback=e??null,xr(t,s,r),n.current.lanes=r,La(n,r,i),An(n,i),n}function zc(n,e,t,i){var r=e.current,s=pn(),o=Mr(r);return t=Q_(t),e.context===null?e.context=t:e.pendingContext=t,e=Hi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=xr(r,e,o),n!==null&&(ui(n,r,o,s),Ol(n,r,o)),o}function Sc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function gm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Bh(n,e){gm(n,e),(n=n.alternate)&&gm(n,e)}function pS(){return null}var ev=typeof reportError=="function"?reportError:function(n){console.error(n)};function zh(n){this._internalRoot=n}Vc.prototype.render=zh.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(te(409));zc(n,e,null,null)};Vc.prototype.unmount=zh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ns(function(){zc(null,n,null,null)}),e[ji]=null}};function Vc(n){this._internalRoot=n}Vc.prototype.unstable_scheduleHydration=function(n){if(n){var e=L0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<cr.length&&e!==0&&e<cr[t].priority;t++);cr.splice(t,0,n),t===0&&N0(n)}};function Vh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Hc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function _m(){}function mS(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Sc(o);s.call(c)}}var o=J_(e,i,n,0,null,!1,!1,"",_m);return n._reactRootContainer=o,n[ji]=o.current,ga(n.nodeType===8?n.parentNode:n),ns(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Sc(l);a.call(c)}}var l=Oh(n,0,!1,null,null,!1,!1,"",_m);return n._reactRootContainer=l,n[ji]=l.current,ga(n.nodeType===8?n.parentNode:n),ns(function(){zc(e,l,t,i)}),l}function Gc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Sc(o);a.call(l)}}zc(e,o,n,r)}else o=mS(t,e,n,r,i);return Sc(o)}C0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=jo(e.pendingLanes);t!==0&&(oh(e,t|1),An(e,It()),!(at&6)&&(io=It()+500,Lr()))}break;case 13:ns(function(){var i=$i(n,1);if(i!==null){var r=pn();ui(i,n,1,r)}}),Bh(n,1)}};ah=function(n){if(n.tag===13){var e=$i(n,134217728);if(e!==null){var t=pn();ui(e,n,134217728,t)}Bh(n,134217728)}};P0=function(n){if(n.tag===13){var e=Mr(n),t=$i(n,e);if(t!==null){var i=pn();ui(t,n,e,i)}Bh(n,e)}};L0=function(){return pt};I0=function(n,e){var t=pt;try{return pt=n,e()}finally{pt=t}};xd=function(n,e,t){switch(e){case"input":if(hd(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Nc(i);if(!r)throw Error(te(90));c0(i),hd(i,r)}}}break;case"textarea":d0(n,t);break;case"select":e=t.value,e!=null&&Bs(n,!!t.multiple,e,!1)}};v0=Dh;y0=ns;var gS={usingClientEntryPoint:!1,Events:[Na,Ps,Nc,g0,_0,Dh]},Do={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_S={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=M0(n),n===null?null:n.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance||pS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Cc=nl.inject(_S),xi=nl}catch{}}Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gS;Fn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vh(e))throw Error(te(200));return hS(n,e,null,t)};Fn.createRoot=function(n,e){if(!Vh(n))throw Error(te(299));var t=!1,i="",r=ev;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Oh(n,1,!1,null,null,t,!1,i,r),n[ji]=e.current,ga(n.nodeType===8?n.parentNode:n),new zh(e)};Fn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(te(188)):(n=Object.keys(n).join(","),Error(te(268,n)));return n=M0(e),n=n===null?null:n.stateNode,n};Fn.flushSync=function(n){return ns(n)};Fn.hydrate=function(n,e,t){if(!Hc(e))throw Error(te(200));return Gc(null,n,e,!0,t)};Fn.hydrateRoot=function(n,e,t){if(!Vh(n))throw Error(te(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=ev;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=J_(e,null,n,1,t??null,r,!1,s,o),n[ji]=e.current,ga(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Vc(e)};Fn.render=function(n,e,t){if(!Hc(e))throw Error(te(200));return Gc(null,n,e,!1,t)};Fn.unmountComponentAtNode=function(n){if(!Hc(n))throw Error(te(40));return n._reactRootContainer?(ns(function(){Gc(null,null,n,!1,function(){n._reactRootContainer=null,n[ji]=null})}),!0):!1};Fn.unstable_batchedUpdates=Dh;Fn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Hc(t))throw Error(te(200));if(n==null||n._reactInternals===void 0)throw Error(te(38));return Gc(n,e,t,!1,i)};Fn.version="18.3.1-next-f1338f8080-20240426";function tv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tv)}catch(n){console.error(n)}}tv(),t0.exports=Fn;var vS=t0.exports,vm=vS;od.createRoot=vm.createRoot,od.hydrateRoot=vm.hydrateRoot;const Su={tiktok:"https://www.tiktok.com/@tdka207",youtube:"https://www.youtube.com/@kayflower2070",facebook:"https://www.facebook.com/DanzKhoaa/"},yS=({profile:n,phase:e,assembledCount:t,onSelectSubsystem:i,onSelectPartIndex:r})=>{const s=St.useMemo(()=>{let h=1;const p=(m,_,g,f,v)=>({lineNo:h++,kind:m,rawText:_,minPart:g,maxPart:f,subsystem:v});return[p("section","#include <iostream>",1,6,"connect"),p("section","#include <string>",1,6,"connect"),p("section","#include <vector>",1,6,"connect"),p("command","using namespace std;",1,6,"connect"),p("comment","",1,6,"connect"),p("comment","// ===== PERSONAL PROFILE =====",1,10,"display"),p("command","int main() {",1,10,"connect"),p("prop",'    string full_name     = "Tran Dang Khoa";',43,56,"display"),p("prop",`    string date_of_birth = "${n.birthDate}";`,43,56,"display"),p("comment","",1,10,"connect"),p("comment","    // Hobbies: Cycling, Work out, Playing Game",11,26,"telemetry"),p("prop",'    vector<string> hobbies  = { "Cycling", "Work out", "Playing Game" };',11,26,"telemetry"),p("comment","",11,26,"telemetry"),p("comment","    // Passions: Technology, Robotics, Engineering",27,42,"workstation"),p("prop",'    vector<string> passions = { "Technology", "Robotics", "Engineering" };',27,42,"workstation"),p("comment","",27,42,"workstation"),p("command",'    cout << "Full Name     : " << full_name << endl;',43,56,"display"),p("command",'    cout << "Date of Birth : " << date_of_birth << endl;',43,56,"display"),p("command",'    cout << "Hobbies       : Cycling, Work out, Playing Game" << endl;',11,26,"telemetry"),p("command",'    cout << "Passions      : Technology, Robotics, Engineering" << endl;',27,42,"workstation"),p("command",'    cout << "Socials       : TikTok | YouTube | Facebook" << endl;',1,10,"connect"),p("comment","",57,72,"keyboard"),p("comment","    // Initialize 3D RX-0 Unicorn Gundam on the right viewport",57,72,"keyboard"),p("status",'    render_3d_gundam("RX-0 UNICORN", /*parts=*/72);',57,72,"keyboard"),p("command","    return 0;",70,72,"connect"),p("command","}",70,72,"connect")]},[n]),o=St.useMemo(()=>s.reduce((h,p)=>h+Math.max(1,p.rawText.length),0),[s]),[a,l]=St.useState(0);St.useEffect(()=>{l(0);const h=window.setInterval(()=>{l(p=>p>=o?(window.clearInterval(h),o):Math.min(o,p+3))},22);return()=>window.clearInterval(h)},[o]);const{visibleLines:c,typingLineNo:u}=St.useMemo(()=>{var _;let h=a;const p=[];let m=((_=s[s.length-1])==null?void 0:_.lineNo)??1;for(const g of s){const f=Math.max(1,g.rawText.length);if(h<=0)break;if(h>=f){const v=g.lineNo===24?`    render_3d_gundam("RX-0 UNICORN", /*parts=*/${t}/72);`:g.rawText;p.push({...g,text:v,isTypingThisLine:!1}),h-=f}else{const v=g.rawText.slice(0,h);p.push({...g,text:v,isTypingThisLine:!0}),m=g.lineNo,h=0;break}}return p.length>0&&!p.some(g=>g.isTypingThisLine)&&(p[p.length-1].isTypingThisLine=!0,m=p[p.length-1].lineNo),{visibleLines:p,typingLineNo:m}},[s,a,t]),d=St.useMemo(()=>a<o?u:e!=="ASSEMBLING"?24:t<=10?8:t<=26?12:t<=42?15:t<=56?9:24,[a,o,u,e,t]);return ve.jsxs("aside",{className:"forge-terminal-panel","aria-label":"C++ Profile Tran Dang Khoa",children:[ve.jsxs("header",{className:"terminal-titlebar",children:[ve.jsxs("div",{className:"terminal-dots","aria-hidden":"true",children:[ve.jsx("span",{className:"dot dot-red"}),ve.jsx("span",{className:"dot dot-amber"}),ve.jsx("span",{className:"dot dot-green"})]}),ve.jsx("div",{className:"terminal-window-title",children:"~/profile :: tran_dang_khoa.cpp"}),ve.jsx("div",{className:"terminal-top-actions",children:ve.jsxs("div",{className:"terminal-live-badge",children:[ve.jsx("span",{className:"live-pulse-dot"}),ve.jsx("span",{children:"C++"})]})})]}),ve.jsxs("section",{className:"profile-quick-card","aria-label":"Personal Profile Tran Dang Khoa",children:[ve.jsx("div",{className:"profile-quick-top",children:ve.jsxs("div",{children:[ve.jsx("h1",{className:"profile-hero-name",children:"Tran Dang Khoa"}),ve.jsx("div",{className:"profile-dob-row",children:ve.jsx("span",{className:"profile-dob-pill",children:"DOB: 20/07/2009"})})]})}),ve.jsxs("div",{className:"profile-attributes-grid",children:[ve.jsxs("div",{className:"profile-attr-row",children:[ve.jsx("span",{className:"profile-attr-label",children:"Hobbies:"}),ve.jsxs("div",{className:"profile-attr-tags",children:[ve.jsx("span",{className:"attr-tag tag-hobby",children:"Cycling"}),ve.jsx("span",{className:"attr-tag tag-hobby",children:"Work out"}),ve.jsx("span",{className:"attr-tag tag-hobby",children:"Playing Game"})]})]}),ve.jsxs("div",{className:"profile-attr-row",children:[ve.jsx("span",{className:"profile-attr-label",children:"Passions:"}),ve.jsxs("div",{className:"profile-attr-tags",children:[ve.jsx("span",{className:"attr-tag tag-passion",children:"Technology"}),ve.jsx("span",{className:"attr-tag tag-passion",children:"Robotics"}),ve.jsx("span",{className:"attr-tag tag-passion",children:"Engineering"})]})]}),ve.jsxs("div",{className:"profile-attr-row",children:[ve.jsx("span",{className:"profile-attr-label",children:"Socials:"}),ve.jsxs("div",{className:"profile-attr-tags",children:[ve.jsxs("a",{href:Su.tiktok,target:"_blank",rel:"noopener noreferrer",className:"attr-tag tag-social social-tiktok",children:[ve.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor","aria-hidden":"true",children:ve.jsx("path",{d:"M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"})}),ve.jsx("span",{children:"TikTok"})]}),ve.jsxs("a",{href:Su.youtube,target:"_blank",rel:"noopener noreferrer",className:"attr-tag tag-social social-youtube",children:[ve.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor","aria-hidden":"true",children:ve.jsx("path",{d:"M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14c.5-1.88.5-5.81.5-5.81s0-3.93-.5-5.81zM9.54 15.57V8.43L15.82 12l-6.28 3.57z"})}),ve.jsx("span",{children:"YouTube"})]}),ve.jsxs("a",{href:Su.facebook,target:"_blank",rel:"noopener noreferrer",className:"attr-tag tag-social social-facebook",children:[ve.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor","aria-hidden":"true",children:ve.jsx("path",{d:"M22.68 0H1.32C.59 0 0 .59 0 1.32v21.36C0 23.41.59 24 1.32 24h11.5v-9.29H9.69v-3.62h3.13V8.41c0-3.1 1.89-4.79 4.66-4.79 1.32 0 2.46.1 2.79.14v3.24h-1.92c-1.5 0-1.8.72-1.8 1.77v2.32h3.59l-.47 3.62h-3.12V24h6.12c.73 0 1.32-.59 1.32-1.32V1.32C24 .59 23.41 0 22.68 0z"})}),ve.jsx("span",{children:"Facebook"})]})]})]})]})]}),ve.jsx("div",{className:"terminal-code-scroll",children:c.map(h=>{const p=h.lineNo===d;return ve.jsxs("div",{className:`code-line code-kind-${h.kind} ${p?"code-line-active":""}`,onClick:()=>{i(h.subsystem),r(h.minPart)},children:[ve.jsx("span",{className:"code-lineno",children:String(h.lineNo).padStart(2,"0")}),ve.jsxs("span",{className:"code-content",children:[h.text||" ",h.isTypingThisLine&&ve.jsx("span",{className:"typing-cursor","aria-hidden":"true",children:"▊"})]}),p&&e==="ASSEMBLING"&&ve.jsx("span",{className:"code-laser-emitter","aria-hidden":"true"})]},h.lineNo)})})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hh="170",xS=0,ym=1,SS=2,nv=1,iv=2,Di=3,Ki=0,mn=1,Mn=2,Tr=0,Xs=1,lr=2,xm=3,Sm=4,MS=5,Xr=100,ES=101,TS=102,wS=103,AS=104,bS=200,RS=201,CS=202,PS=203,Jd=204,ef=205,LS=206,IS=207,NS=208,DS=209,US=210,FS=211,kS=212,OS=213,BS=214,tf=0,nf=1,rf=2,ro=3,sf=4,of=5,af=6,lf=7,rv=0,zS=1,VS=2,wr=0,HS=1,GS=2,WS=3,sv=4,XS=5,jS=6,$S=7,Mm="attached",YS="detached",ov=300,so=301,oo=302,cf=303,uf=304,Wc=306,ao=1e3,pr=1001,Mc=1002,gn=1003,av=1004,Yo=1005,Nn=1006,Xl=1007,zi=1008,qi=1009,lv=1010,cv=1011,wa=1012,Gh=1013,is=1014,li=1015,Ua=1016,Wh=1017,Xh=1018,lo=1020,uv=35902,dv=1021,fv=1022,Yn=1023,hv=1024,pv=1025,js=1026,co=1027,jh=1028,$h=1029,mv=1030,Yh=1031,Kh=1033,jl=33776,$l=33777,Yl=33778,Kl=33779,df=35840,ff=35841,hf=35842,pf=35843,mf=36196,gf=37492,_f=37496,vf=37808,yf=37809,xf=37810,Sf=37811,Mf=37812,Ef=37813,Tf=37814,wf=37815,Af=37816,bf=37817,Rf=37818,Cf=37819,Pf=37820,Lf=37821,ql=36492,If=36494,Nf=36495,gv=36283,Df=36284,Uf=36285,Ff=36286,Aa=2300,ba=2301,Mu=2302,Em=2400,Tm=2401,wm=2402,KS=2500,qS=0,_v=1,kf=2,ZS=3200,QS=3201,vv=0,JS=1,dr="",Xt="srgb",_n="srgb-linear",Xc="linear",gt="srgb",cs=7680,Am=519,eM=512,tM=513,nM=514,yv=515,iM=516,rM=517,sM=518,oM=519,Of=35044,bm="300 es",Vi=2e3,Ec=2001;class yo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rm=1234567;const $s=Math.PI/180,uo=180/Math.PI;function di(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function an(n,e,t){return Math.max(e,Math.min(t,n))}function qh(n,e){return(n%e+e)%e}function aM(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function lM(n,e,t){return n!==e?(t-n)/(e-n):0}function oa(n,e,t){return(1-t)*n+t*e}function cM(n,e,t,i){return oa(n,e,1-Math.exp(-t*i))}function uM(n,e=1){return e-Math.abs(qh(n,e*2)-e)}function dM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function fM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function hM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function pM(n,e){return n+Math.random()*(e-n)}function mM(n){return n*(.5-Math.random())}function gM(n){n!==void 0&&(Rm=n);let e=Rm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _M(n){return n*$s}function vM(n){return n*uo}function yM(n){return(n&n-1)===0&&n!==0}function xM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function SM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function MM(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*m,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*m,a*c);break;case"ZYZ":n.set(l*m,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ai(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Bf={DEG2RAD:$s,RAD2DEG:uo,generateUUID:di,clamp:an,euclideanModulo:qh,mapLinear:aM,inverseLerp:lM,lerp:oa,damp:cM,pingpong:uM,smoothstep:dM,smootherstep:fM,randInt:hM,randFloat:pM,randFloatSpread:mM,seededRandom:gM,degToRad:_M,radToDeg:vM,isPowerOfTwo:yM,ceilPowerOfTwo:xM,floorPowerOfTwo:SM,setQuaternionFromProperEuler:MM,normalize:ft,denormalize:ai};class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],m=i[8],_=r[0],g=r[3],f=r[6],v=r[1],y=r[4],x=r[7],C=r[2],b=r[5],w=r[8];return s[0]=o*_+a*v+l*C,s[3]=o*g+a*y+l*b,s[6]=o*f+a*x+l*w,s[1]=c*_+u*v+d*C,s[4]=c*g+u*y+d*b,s[7]=c*f+u*x+d*w,s[2]=h*_+p*v+m*C,s[5]=h*g+p*y+m*b,s[8]=h*f+p*x+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,m=t*d+i*h+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Eu.makeScale(e,t)),this}rotate(e){return this.premultiply(Eu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Eu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Eu=new je;function xv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ra(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function EM(){const n=Ra("canvas");return n.style.display="block",n}const Cm={};function Ko(n){n in Cm||(Cm[n]=!0,console.warn(n))}function TM(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function wM(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function AM(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const st={enabled:!0,workingColorSpace:_n,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===gt&&(n.r=Gi(n.r),n.g=Gi(n.g),n.b=Gi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===gt&&(n.r=Ys(n.r),n.g=Ys(n.g),n.b=Ys(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===dr?Xc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ys(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Pm=[.64,.33,.3,.6,.15,.06],Lm=[.2126,.7152,.0722],Im=[.3127,.329],Nm=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dm=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);st.define({[_n]:{primaries:Pm,whitePoint:Im,transfer:Xc,toXYZ:Nm,fromXYZ:Dm,luminanceCoefficients:Lm,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:Pm,whitePoint:Im,transfer:gt,toXYZ:Nm,fromXYZ:Dm,luminanceCoefficients:Lm,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}});let us;class bM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{us===void 0&&(us=Ra("canvas")),us.width=e.width,us.height=e.height;const i=us.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ra("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Gi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gi(t[i]/255)*255):t[i]=Gi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let RM=0;class Sv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=di(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Tu(r[o].image)):s.push(Tu(r[o]))}else s=Tu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Tu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let CM=0;class Ot extends yo{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=pr,r=pr,s=Nn,o=zi,a=Yn,l=qi,c=Ot.DEFAULT_ANISOTROPY,u=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=di(),this.name="",this.source=new Sv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ov)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ao:e.x=e.x-Math.floor(e.x);break;case pr:e.x=e.x<0?0:1;break;case Mc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ao:e.y=e.y-Math.floor(e.y);break;case pr:e.y=e.y<0?0:1;break;case Mc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=ov;Ot.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],m=l[9],_=l[2],g=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(p+1)/2,C=(f+1)/2,b=(u+h)/4,w=(d+_)/4,R=(m+g)/4;return y>x&&y>C?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=b/i,s=w/i):x>C?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=b/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=w/s,r=R/s),this.set(i,r,s,t),this}let v=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PM extends yo{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ot(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Sv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rs extends PM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Mv extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class LM extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ir{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],m=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=m,e[t+3]=_;return}if(d!==_||l!==h||c!==p||u!==m){let g=1-a;const f=l*h+c*p+u*m+d*_,v=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const C=Math.sqrt(y),b=Math.atan2(C,f*v);g=Math.sin(g*b)/C,a=Math.sin(a*b)/C}const x=a*v;if(l=l*g+h*x,c=c*g+p*x,u=u*g+m*x,d=d*g+_*x,g===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],m=s[o+3];return e[t]=a*m+u*d+l*p-c*h,e[t+1]=l*m+u*h+c*d-a*p,e[t+2]=c*m+u*p+a*h-l*d,e[t+3]=u*m-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*m,this._y=c*p*d-h*u*m,this._z=c*u*m+h*p*d,this._w=c*u*d-h*p*m;break;case"YXZ":this._x=h*u*d+c*p*m,this._y=c*p*d-h*u*m,this._z=c*u*m-h*p*d,this._w=c*u*d+h*p*m;break;case"ZXY":this._x=h*u*d-c*p*m,this._y=c*p*d+h*u*m,this._z=c*u*m+h*p*d,this._w=c*u*d-h*p*m;break;case"ZYX":this._x=h*u*d-c*p*m,this._y=c*p*d+h*u*m,this._z=c*u*m-h*p*d,this._w=c*u*d+h*p*m;break;case"YZX":this._x=h*u*d+c*p*m,this._y=c*p*d+h*u*m,this._z=c*u*m-h*p*d,this._w=c*u*d-h*p*m;break;case"XZY":this._x=h*u*d-c*p*m,this._y=c*p*d-h*u*m,this._z=c*u*m+h*p*d,this._w=c*u*d+h*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Um.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Um.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wu.copy(this).projectOnVector(e),this.sub(wu)}reflect(e){return this.sub(wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wu=new I,Um=new Ir;class qn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ti):ti.fromBufferAttribute(s,o),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),il.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),il.copy(i.boundingBox)),il.applyMatrix4(e.matrixWorld),this.union(il)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),rl.subVectors(this.max,Uo),ds.subVectors(e.a,Uo),fs.subVectors(e.b,Uo),hs.subVectors(e.c,Uo),Ji.subVectors(fs,ds),er.subVectors(hs,fs),Dr.subVectors(ds,hs);let t=[0,-Ji.z,Ji.y,0,-er.z,er.y,0,-Dr.z,Dr.y,Ji.z,0,-Ji.x,er.z,0,-er.x,Dr.z,0,-Dr.x,-Ji.y,Ji.x,0,-er.y,er.x,0,-Dr.y,Dr.x,0];return!Au(t,ds,fs,hs,rl)||(t=[1,0,0,0,1,0,0,0,1],!Au(t,ds,fs,hs,rl))?!1:(sl.crossVectors(Ji,er),t=[sl.x,sl.y,sl.z],Au(t,ds,fs,hs,rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new I,new I,new I,new I,new I,new I,new I,new I],ti=new I,il=new qn,ds=new I,fs=new I,hs=new I,Ji=new I,er=new I,Dr=new I,Uo=new I,rl=new I,sl=new I,Ur=new I;function Au(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ur.fromArray(n,s);const a=r.x*Math.abs(Ur.x)+r.y*Math.abs(Ur.y)+r.z*Math.abs(Ur.z),l=e.dot(Ur),c=t.dot(Ur),u=i.dot(Ur);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const IM=new qn,Fo=new I,bu=new I;class Ei{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):IM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const t=Fo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Fo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(bu)),this.expandByPoint(Fo.copy(e.center).sub(bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new I,Ru=new I,ol=new I,tr=new I,Cu=new I,al=new I,Pu=new I;class Fa{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ru.copy(e).add(t).multiplyScalar(.5),ol.copy(t).sub(e).normalize(),tr.copy(this.origin).sub(Ru);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ol),a=tr.dot(this.direction),l=-tr.dot(ol),c=tr.lengthSq(),u=Math.abs(1-o*o);let d,h,p,m;if(u>0)if(d=o*l-a,h=o*a-l,m=s*u,d>=0)if(h>=-m)if(h<=m){const _=1/u;d*=_,h*=_,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-m?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=m?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ru).addScaledVector(ol,h),p}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,i,r,s){Cu.subVectors(t,e),al.subVectors(i,e),Pu.crossVectors(Cu,al);let o=this.direction.dot(Pu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;tr.subVectors(this.origin,e);const l=a*this.direction.dot(al.crossVectors(tr,al));if(l<0)return null;const c=a*this.direction.dot(Cu.cross(tr));if(c<0||l+c>o)return null;const u=-a*tr.dot(Pu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,i,r,s,o,a,l,c,u,d,h,p,m,_,g){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,h,p,m,_,g)}set(e,t,i,r,s,o,a,l,c,u,d,h,p,m,_,g){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=m,f[11]=_,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ps.setFromMatrixColumn(e,0).length(),s=1/ps.setFromMatrixColumn(e,1).length(),o=1/ps.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,m=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+m*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=m+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,m=c*u,_=c*d;t[0]=h+_*a,t[4]=m*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-m,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,m=c*u,_=c*d;t[0]=h-_*a,t[4]=-o*d,t[8]=m+p*a,t[1]=p+m*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,m=a*u,_=a*d;t[0]=l*u,t[4]=m*c-p,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=p*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=_-h*d,t[8]=m*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+m,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,p=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=o*u,t[9]=p*d-m,t[2]=m*d-p,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NM,e,DM)}lookAt(e,t,i){const r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),nr.crossVectors(i,Rn),nr.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),nr.crossVectors(i,Rn)),nr.normalize(),ll.crossVectors(Rn,nr),r[0]=nr.x,r[4]=ll.x,r[8]=Rn.x,r[1]=nr.y,r[5]=ll.y,r[9]=Rn.y,r[2]=nr.z,r[6]=ll.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],m=i[2],_=i[6],g=i[10],f=i[14],v=i[3],y=i[7],x=i[11],C=i[15],b=r[0],w=r[4],R=r[8],T=r[12],E=r[1],L=r[5],G=r[9],z=r[13],K=r[2],Z=r[6],X=r[10],Q=r[14],N=r[3],j=r[7],q=r[11],ce=r[15];return s[0]=o*b+a*E+l*K+c*N,s[4]=o*w+a*L+l*Z+c*j,s[8]=o*R+a*G+l*X+c*q,s[12]=o*T+a*z+l*Q+c*ce,s[1]=u*b+d*E+h*K+p*N,s[5]=u*w+d*L+h*Z+p*j,s[9]=u*R+d*G+h*X+p*q,s[13]=u*T+d*z+h*Q+p*ce,s[2]=m*b+_*E+g*K+f*N,s[6]=m*w+_*L+g*Z+f*j,s[10]=m*R+_*G+g*X+f*q,s[14]=m*T+_*z+g*Q+f*ce,s[3]=v*b+y*E+x*K+C*N,s[7]=v*w+y*L+x*Z+C*j,s[11]=v*R+y*G+x*X+C*q,s[15]=v*T+y*z+x*Q+C*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],m=e[3],_=e[7],g=e[11],f=e[15];return m*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+_*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+g*(+t*c*d-t*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-t*l*d+t*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],m=e[12],_=e[13],g=e[14],f=e[15],v=d*g*c-_*h*c+_*l*p-a*g*p-d*l*f+a*h*f,y=m*h*c-u*g*c-m*l*p+o*g*p+u*l*f-o*h*f,x=u*_*c-m*d*c+m*a*p-o*_*p-u*a*f+o*d*f,C=m*d*l-u*_*l-m*a*h+o*_*h+u*a*g-o*d*g,b=t*v+i*y+r*x+s*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=v*w,e[1]=(_*h*s-d*g*s-_*r*p+i*g*p+d*r*f-i*h*f)*w,e[2]=(a*g*s-_*l*s+_*r*c-i*g*c-a*r*f+i*l*f)*w,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*w,e[4]=y*w,e[5]=(u*g*s-m*h*s+m*r*p-t*g*p-u*r*f+t*h*f)*w,e[6]=(m*l*s-o*g*s-m*r*c+t*g*c+o*r*f-t*l*f)*w,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*w,e[8]=x*w,e[9]=(m*d*s-u*_*s-m*i*p+t*_*p+u*i*f-t*d*f)*w,e[10]=(o*_*s-m*a*s+m*i*c-t*_*c-o*i*f+t*a*f)*w,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*p-t*a*p)*w,e[12]=C*w,e[13]=(u*_*r-m*d*r+m*i*h-t*_*h-u*i*g+t*d*g)*w,e[14]=(m*a*r-o*_*r-m*i*l+t*_*l+o*i*g-t*a*g)*w,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*h+t*a*h)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,m=s*d,_=o*u,g=o*d,f=a*d,v=l*c,y=l*u,x=l*d,C=i.x,b=i.y,w=i.z;return r[0]=(1-(_+f))*C,r[1]=(p+x)*C,r[2]=(m-y)*C,r[3]=0,r[4]=(p-x)*b,r[5]=(1-(h+f))*b,r[6]=(g+v)*b,r[7]=0,r[8]=(m+y)*w,r[9]=(g-v)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ps.set(r[0],r[1],r[2]).length();const o=ps.set(r[4],r[5],r[6]).length(),a=ps.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ni.copy(this);const c=1/s,u=1/o,d=1/a;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=u,ni.elements[5]*=u,ni.elements[6]*=u,ni.elements[8]*=d,ni.elements[9]*=d,ni.elements[10]*=d,t.setFromRotationMatrix(ni),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Vi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let p,m;if(a===Vi)p=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===Ec)p=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Vi){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*c,p=(i+r)*u;let m,_;if(a===Vi)m=(o+s)*d,_=-2*d;else if(a===Ec)m=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ps=new I,ni=new Xe,NM=new I(0,0,0),DM=new I(1,1,1),nr=new I,ll=new I,Rn=new I,Fm=new Xe,km=new Ir;class Mi{constructor(e=0,t=0,i=0,r=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-an(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return km.setFromEuler(this),this.setFromQuaternion(km,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class Zh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let UM=0;const Om=new I,ms=new Ir,Pi=new Xe,cl=new I,ko=new I,FM=new I,kM=new Ir,Bm=new I(1,0,0),zm=new I(0,1,0),Vm=new I(0,0,1),Hm={type:"added"},OM={type:"removed"},gs={type:"childadded",child:null},Lu={type:"childremoved",child:null};class bt extends yo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new I,t=new Mi,i=new Ir,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Xe},normalMatrix:{value:new je}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(Bm,e)}rotateY(e){return this.rotateOnAxis(zm,e)}rotateZ(e){return this.rotateOnAxis(Vm,e)}translateOnAxis(e,t){return Om.copy(e).applyQuaternion(this.quaternion),this.position.add(Om.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bm,e)}translateY(e){return this.translateOnAxis(zm,e)}translateZ(e){return this.translateOnAxis(Vm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?cl.copy(e):cl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(ko,cl,this.up):Pi.lookAt(cl,ko,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),ms.setFromRotationMatrix(Pi),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hm),gs.child=e,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(OM),Lu.child=e,this.dispatchEvent(Lu),Lu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hm),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,e,FM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,kM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bt.DEFAULT_UP=new I(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new I,Li=new I,Iu=new I,Ii=new I,_s=new I,vs=new I,Gm=new I,Nu=new I,Du=new I,Uu=new I,Fu=new ut,ku=new ut,Ou=new ut;class Xn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ii.subVectors(e,t),r.cross(ii);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ii.subVectors(r,t),Li.subVectors(i,t),Iu.subVectors(e,t);const o=ii.dot(ii),a=ii.dot(Li),l=ii.dot(Iu),c=Li.dot(Li),u=Li.dot(Iu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,m=(o*u-a*l)*h;return s.set(1-p-m,m,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Fu.setScalar(0),ku.setScalar(0),Ou.setScalar(0),Fu.fromBufferAttribute(e,t),ku.fromBufferAttribute(e,i),Ou.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Fu,s.x),o.addScaledVector(ku,s.y),o.addScaledVector(Ou,s.z),o}static isFrontFacing(e,t,i,r){return ii.subVectors(i,t),Li.subVectors(e,t),ii.cross(Li).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ii.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Xn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;_s.subVectors(r,i),vs.subVectors(s,i),Nu.subVectors(e,i);const l=_s.dot(Nu),c=vs.dot(Nu);if(l<=0&&c<=0)return t.copy(i);Du.subVectors(e,r);const u=_s.dot(Du),d=vs.dot(Du);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(_s,o);Uu.subVectors(e,s);const p=_s.dot(Uu),m=vs.dot(Uu);if(m>=0&&p<=m)return t.copy(s);const _=p*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(vs,a);const g=u*m-p*d;if(g<=0&&d-u>=0&&p-m>=0)return Gm.subVectors(s,r),a=(d-u)/(d-u+(p-m)),t.copy(r).addScaledVector(Gm,a);const f=1/(g+_+h);return o=_*f,a=h*f,t.copy(i).addScaledVector(_s,o).addScaledVector(vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ev={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},ul={h:0,s:0,l:0};function Bu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class De{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=st.workingColorSpace){if(e=qh(e,1),t=an(t,0,1),i=an(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Bu(o,s,e+1/3),this.g=Bu(o,s,e),this.b=Bu(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,t=Xt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const i=Ev[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return st.fromWorkingColorSpace(sn.copy(this),e),Math.round(an(sn.r*255,0,255))*65536+Math.round(an(sn.g*255,0,255))*256+Math.round(an(sn.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(sn.copy(this),t);const i=sn.r,r=sn.g,s=sn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Xt){st.fromWorkingColorSpace(sn.copy(this),e);const t=sn.r,i=sn.g,r=sn.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+t,ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ir),e.getHSL(ul);const i=oa(ir.h,ul.h,t),r=oa(ir.s,ul.s,t),s=oa(ir.l,ul.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new De;De.NAMES=Ev;let BM=0;class fi extends yo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=di(),this.name="",this.blending=Xs,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jd,this.blendDst=ef,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jd&&(i.blendSrc=this.blendSrc),this.blendDst!==ef&&(i.blendDst=this.blendDst),this.blendEquation!==Xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Am&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ln extends fi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=rv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new I,dl=new it;class Zt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Of,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)dl.fromBufferAttribute(this,t),dl.applyMatrix3(e),this.setXY(t,dl.x,dl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ai(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Of&&(e.usage=this.usage),e}}class Tv extends Zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class wv extends Zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class $t extends Zt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let zM=0;const Vn=new Xe,zu=new bt,ys=new I,Cn=new qn,Oo=new qn,Gt=new I;class cn extends yo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xv(e)?wv:Tv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,i){return Vn.makeTranslation(e,t,i),this.applyMatrix4(Vn),this}scale(e,t,i){return Vn.makeScale(e,t,i),this.applyMatrix4(Vn),this}lookAt(e){return zu.lookAt(e),zu.updateMatrix(),this.applyMatrix4(zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Oo.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(Cn.min,Oo.min),Cn.expandByPoint(Gt),Gt.addVectors(Cn.max,Oo.max),Cn.expandByPoint(Gt)):(Cn.expandByPoint(Oo.min),Cn.expandByPoint(Oo.max))}Cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gt.fromBufferAttribute(a,c),l&&(ys.fromBufferAttribute(e,c),Gt.add(ys)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new I,l[R]=new I;const c=new I,u=new I,d=new I,h=new it,p=new it,m=new it,_=new I,g=new I;function f(R,T,E){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,E),h.fromBufferAttribute(s,R),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,E),u.sub(c),d.sub(c),p.sub(h),m.sub(h);const L=1/(p.x*m.y-m.x*p.y);isFinite(L)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(L),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(L),a[R].add(_),a[T].add(_),a[E].add(_),l[R].add(g),l[T].add(g),l[E].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,T=v.length;R<T;++R){const E=v[R],L=E.start,G=E.count;for(let z=L,K=L+G;z<K;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new I,x=new I,C=new I,b=new I;function w(R){C.fromBufferAttribute(r,R),b.copy(C);const T=a[R];y.copy(T),y.sub(C.multiplyScalar(C.dot(T))).normalize(),x.crossVectors(b,T);const L=x.dot(l[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,L)}for(let R=0,T=v.length;R<T;++R){const E=v[R],L=E.start,G=E.count;for(let z=L,K=L+G;z<K;z+=3)w(e.getX(z+0)),w(e.getX(z+1)),w(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let h=0,p=e.count;h<p;h+=3){const m=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let f=0;f<u;f++)h[m++]=c[p++]}return new Zt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wm=new Xe,Fr=new Fa,fl=new Ei,Xm=new I,hl=new I,pl=new I,ml=new I,Vu=new I,gl=new I,jm=new I,_l=new I;class ct extends bt{constructor(e=new cn,t=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){gl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Vu.fromBufferAttribute(d,e),o?gl.addScaledVector(Vu,u):gl.addScaledVector(Vu.sub(t),u))}t.add(gl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(s),Fr.copy(e.ray).recast(e.near),!(fl.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(fl,Xm)===null||Fr.origin.distanceToSquared(Xm)>(e.far-e.near)**2))&&(Wm.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(Wm),!(i.boundingBox!==null&&Fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Fr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const g=h[m],f=o[g.materialIndex],v=Math.max(g.start,p.start),y=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let x=v,C=y;x<C;x+=3){const b=a.getX(x),w=a.getX(x+1),R=a.getX(x+2);r=vl(this,f,e,i,c,u,d,b,w,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let g=m,f=_;g<f;g+=3){const v=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);r=vl(this,o,e,i,c,u,d,v,y,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const g=h[m],f=o[g.materialIndex],v=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=v,C=y;x<C;x+=3){const b=x,w=x+1,R=x+2;r=vl(this,f,e,i,c,u,d,b,w,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=m,f=_;g<f;g+=3){const v=g,y=g+1,x=g+2;r=vl(this,o,e,i,c,u,d,v,y,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function VM(n,e,t,i,r,s,o,a){let l;if(e.side===mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ki,a),l===null)return null;_l.copy(a),_l.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(_l);return c<t.near||c>t.far?null:{distance:c,point:_l.clone(),object:n}}function vl(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,hl),n.getVertexPosition(l,pl),n.getVertexPosition(c,ml);const u=VM(n,e,t,i,hl,pl,ml,jm);if(u){const d=new I;Xn.getBarycoord(jm,hl,pl,ml,d),r&&(u.uv=Xn.getInterpolatedAttribute(r,a,l,c,d,new it)),s&&(u.uv1=Xn.getInterpolatedAttribute(s,a,l,c,d,new it)),o&&(u.normal=Xn.getInterpolatedAttribute(o,a,l,c,d,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};Xn.getNormal(hl,pl,ml,h.normal),u.face=h,u.barycoord=d}return u}class Wi extends cn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(d,2));function m(_,g,f,v,y,x,C,b,w,R,T){const E=x/w,L=C/R,G=x/2,z=C/2,K=b/2,Z=w+1,X=R+1;let Q=0,N=0;const j=new I;for(let q=0;q<X;q++){const ce=q*L-z;for(let Ae=0;Ae<Z;Ae++){const rt=Ae*E-G;j[_]=rt*v,j[g]=ce*y,j[f]=K,c.push(j.x,j.y,j.z),j[_]=0,j[g]=0,j[f]=b>0?1:-1,u.push(j.x,j.y,j.z),d.push(Ae/w),d.push(1-q/R),Q+=1}}for(let q=0;q<R;q++)for(let ce=0;ce<w;ce++){const Ae=h+ce+Z*q,rt=h+ce+Z*(q+1),H=h+(ce+1)+Z*(q+1),ie=h+(ce+1)+Z*q;l.push(Ae,rt,ie),l.push(rt,H,ie),N+=6}a.addGroup(p,N,T),p+=N,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function dn(n){const e={};for(let t=0;t<n.length;t++){const i=fo(n[t]);for(const r in i)e[r]=i[r]}return e}function HM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Av(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const GM={clone:fo,merge:dn};var WM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rr extends fi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WM,this.fragmentShader=XM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=HM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class bv extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rr=new I,$m=new it,Ym=new it;class hn extends bv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uo*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,t){return this.getViewBounds(e,$m,Ym),t.subVectors(Ym,$m)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($s*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xs=-90,Ss=1;class jM extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hn(xs,Ss,e,t);r.layers=this.layers,this.add(r);const s=new hn(xs,Ss,e,t);s.layers=this.layers,this.add(s);const o=new hn(xs,Ss,e,t);o.layers=this.layers,this.add(o);const a=new hn(xs,Ss,e,t);a.layers=this.layers,this.add(a);const l=new hn(xs,Ss,e,t);l.layers=this.layers,this.add(l);const c=new hn(xs,Ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ec)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Rv extends Ot{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:so,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $M extends rs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Rv(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Wi(5,5,5),s=new Rr({name:"CubemapFromEquirect",uniforms:fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:Tr});s.uniforms.tEquirect.value=t;const o=new ct(r,s),a=t.minFilter;return t.minFilter===zi&&(t.minFilter=Nn),new jM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Hu=new I,YM=new I,KM=new je;class Gr{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Hu.subVectors(i,t).cross(YM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Hu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||KM.getNormalMatrix(e),r=this.coplanarPoint(Hu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new Ei,yl=new I;class Qh{constructor(e=new Gr,t=new Gr,i=new Gr,r=new Gr,s=new Gr,o=new Gr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],m=r[9],_=r[10],g=r[11],f=r[12],v=r[13],y=r[14],x=r[15];if(i[0].setComponents(l-s,h-c,g-p,x-f).normalize(),i[1].setComponents(l+s,h+c,g+p,x+f).normalize(),i[2].setComponents(l+o,h+u,g+m,x+v).normalize(),i[3].setComponents(l-o,h-u,g-m,x-v).normalize(),i[4].setComponents(l-a,h-d,g-_,x-y).normalize(),t===Vi)i[5].setComponents(l+a,h+d,g+_,x+y).normalize();else if(t===Ec)i[5].setComponents(a,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){return kr.center.set(0,0,0),kr.radius=.7071067811865476,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(yl.x=r.normal.x>0?e.max.x:e.min.x,yl.y=r.normal.y>0?e.max.y:e.min.y,yl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function qM(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,m)=>p.start-m.start);let h=0;for(let p=1;p<d.length;p++){const m=d[h],_=d[p];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,d[h]=_)}d.length=h+1;for(let p=0,m=d.length;p<m;p++){const _=d[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class ka extends cn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=t/l,p=[],m=[],_=[],g=[];for(let f=0;f<u;f++){const v=f*h-o;for(let y=0;y<c;y++){const x=y*d-s;m.push(x,-v,0),_.push(0,0,1),g.push(y/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const y=v+c*f,x=v+c*(f+1),C=v+1+c*(f+1),b=v+1+c*f;p.push(y,x,b),p.push(x,C,b)}this.setIndex(p),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.widthSegments,e.heightSegments)}}var ZM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,JM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,oE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_E=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,SE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ME=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,EE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bE="gl_FragColor = linearToOutputTexel( gl_FragColor );",RE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,PE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,LE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,IE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,DE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,BE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,GE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,WE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$E=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,KE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,QE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ST=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ET=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,AT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,NT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,UT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,FT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,OT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,WT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,KT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,i1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,r1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,s1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,d1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,m1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,S1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,w1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,R1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:ZM,alphahash_pars_fragment:QM,alphamap_fragment:JM,alphamap_pars_fragment:eE,alphatest_fragment:tE,alphatest_pars_fragment:nE,aomap_fragment:iE,aomap_pars_fragment:rE,batching_pars_vertex:sE,batching_vertex:oE,begin_vertex:aE,beginnormal_vertex:lE,bsdfs:cE,iridescence_fragment:uE,bumpmap_pars_fragment:dE,clipping_planes_fragment:fE,clipping_planes_pars_fragment:hE,clipping_planes_pars_vertex:pE,clipping_planes_vertex:mE,color_fragment:gE,color_pars_fragment:_E,color_pars_vertex:vE,color_vertex:yE,common:xE,cube_uv_reflection_fragment:SE,defaultnormal_vertex:ME,displacementmap_pars_vertex:EE,displacementmap_vertex:TE,emissivemap_fragment:wE,emissivemap_pars_fragment:AE,colorspace_fragment:bE,colorspace_pars_fragment:RE,envmap_fragment:CE,envmap_common_pars_fragment:PE,envmap_pars_fragment:LE,envmap_pars_vertex:IE,envmap_physical_pars_fragment:GE,envmap_vertex:NE,fog_vertex:DE,fog_pars_vertex:UE,fog_fragment:FE,fog_pars_fragment:kE,gradientmap_pars_fragment:OE,lightmap_pars_fragment:BE,lights_lambert_fragment:zE,lights_lambert_pars_fragment:VE,lights_pars_begin:HE,lights_toon_fragment:WE,lights_toon_pars_fragment:XE,lights_phong_fragment:jE,lights_phong_pars_fragment:$E,lights_physical_fragment:YE,lights_physical_pars_fragment:KE,lights_fragment_begin:qE,lights_fragment_maps:ZE,lights_fragment_end:QE,logdepthbuf_fragment:JE,logdepthbuf_pars_fragment:eT,logdepthbuf_pars_vertex:tT,logdepthbuf_vertex:nT,map_fragment:iT,map_pars_fragment:rT,map_particle_fragment:sT,map_particle_pars_fragment:oT,metalnessmap_fragment:aT,metalnessmap_pars_fragment:lT,morphinstance_vertex:cT,morphcolor_vertex:uT,morphnormal_vertex:dT,morphtarget_pars_vertex:fT,morphtarget_vertex:hT,normal_fragment_begin:pT,normal_fragment_maps:mT,normal_pars_fragment:gT,normal_pars_vertex:_T,normal_vertex:vT,normalmap_pars_fragment:yT,clearcoat_normal_fragment_begin:xT,clearcoat_normal_fragment_maps:ST,clearcoat_pars_fragment:MT,iridescence_pars_fragment:ET,opaque_fragment:TT,packing:wT,premultiplied_alpha_fragment:AT,project_vertex:bT,dithering_fragment:RT,dithering_pars_fragment:CT,roughnessmap_fragment:PT,roughnessmap_pars_fragment:LT,shadowmap_pars_fragment:IT,shadowmap_pars_vertex:NT,shadowmap_vertex:DT,shadowmask_pars_fragment:UT,skinbase_vertex:FT,skinning_pars_vertex:kT,skinning_vertex:OT,skinnormal_vertex:BT,specularmap_fragment:zT,specularmap_pars_fragment:VT,tonemapping_fragment:HT,tonemapping_pars_fragment:GT,transmission_fragment:WT,transmission_pars_fragment:XT,uv_pars_fragment:jT,uv_pars_vertex:$T,uv_vertex:YT,worldpos_vertex:KT,background_vert:qT,background_frag:ZT,backgroundCube_vert:QT,backgroundCube_frag:JT,cube_vert:e1,cube_frag:t1,depth_vert:n1,depth_frag:i1,distanceRGBA_vert:r1,distanceRGBA_frag:s1,equirect_vert:o1,equirect_frag:a1,linedashed_vert:l1,linedashed_frag:c1,meshbasic_vert:u1,meshbasic_frag:d1,meshlambert_vert:f1,meshlambert_frag:h1,meshmatcap_vert:p1,meshmatcap_frag:m1,meshnormal_vert:g1,meshnormal_frag:_1,meshphong_vert:v1,meshphong_frag:y1,meshphysical_vert:x1,meshphysical_frag:S1,meshtoon_vert:M1,meshtoon_frag:E1,points_vert:T1,points_frag:w1,shadow_vert:A1,shadow_frag:b1,sprite_vert:R1,sprite_frag:C1},pe={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},vi={basic:{uniforms:dn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:dn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new De(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:dn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:dn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:dn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new De(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:dn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:dn([pe.points,pe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:dn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:dn([pe.common,pe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:dn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:dn([pe.sprite,pe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:dn([pe.common,pe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:dn([pe.lights,pe.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};vi.physical={uniforms:dn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const xl={r:0,b:0,g:0},Or=new Mi,P1=new Xe;function L1(n,e,t,i,r,s,o){const a=new De(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function m(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function _(v){let y=!1;const x=m(v);x===null?f(a,l):x&&x.isColor&&(f(x,1),y=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(v,y){const x=m(y);x&&(x.isCubeTexture||x.mapping===Wc)?(u===void 0&&(u=new ct(new Wi(1,1,1),new Rr({name:"BackgroundCubeMaterial",uniforms:fo(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Or.copy(y.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(P1.makeRotationFromEuler(Or)),u.material.toneMapped=st.getTransfer(x.colorSpace)!==gt,(d!==x||h!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,p=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ct(new ka(2,2),new Rr({name:"BackgroundMaterial",uniforms:fo(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=st.getTransfer(x.colorSpace)!==gt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,y){v.getRGB(xl,Av(n)),i.buffers.color.setClear(xl.r,xl.g,xl.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(a,l)},render:_,addToRenderList:g}}function I1(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(E,L,G,z,K){let Z=!1;const X=d(z,G,L);s!==X&&(s=X,c(s.object)),Z=p(E,z,G,K),Z&&m(E,z,G,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(E,L,G,z),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function d(E,L,G){const z=G.wireframe===!0;let K=i[E.id];K===void 0&&(K={},i[E.id]=K);let Z=K[L.id];Z===void 0&&(Z={},K[L.id]=Z);let X=Z[z];return X===void 0&&(X=h(l()),Z[z]=X),X}function h(E){const L=[],G=[],z=[];for(let K=0;K<t;K++)L[K]=0,G[K]=0,z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:z,object:E,attributes:{},index:null}}function p(E,L,G,z){const K=s.attributes,Z=L.attributes;let X=0;const Q=G.getAttributes();for(const N in Q)if(Q[N].location>=0){const q=K[N];let ce=Z[N];if(ce===void 0&&(N==="instanceMatrix"&&E.instanceMatrix&&(ce=E.instanceMatrix),N==="instanceColor"&&E.instanceColor&&(ce=E.instanceColor)),q===void 0||q.attribute!==ce||ce&&q.data!==ce.data)return!0;X++}return s.attributesNum!==X||s.index!==z}function m(E,L,G,z){const K={},Z=L.attributes;let X=0;const Q=G.getAttributes();for(const N in Q)if(Q[N].location>=0){let q=Z[N];q===void 0&&(N==="instanceMatrix"&&E.instanceMatrix&&(q=E.instanceMatrix),N==="instanceColor"&&E.instanceColor&&(q=E.instanceColor));const ce={};ce.attribute=q,q&&q.data&&(ce.data=q.data),K[N]=ce,X++}s.attributes=K,s.attributesNum=X,s.index=z}function _(){const E=s.newAttributes;for(let L=0,G=E.length;L<G;L++)E[L]=0}function g(E){f(E,0)}function f(E,L){const G=s.newAttributes,z=s.enabledAttributes,K=s.attributeDivisors;G[E]=1,z[E]===0&&(n.enableVertexAttribArray(E),z[E]=1),K[E]!==L&&(n.vertexAttribDivisor(E,L),K[E]=L)}function v(){const E=s.newAttributes,L=s.enabledAttributes;for(let G=0,z=L.length;G<z;G++)L[G]!==E[G]&&(n.disableVertexAttribArray(G),L[G]=0)}function y(E,L,G,z,K,Z,X){X===!0?n.vertexAttribIPointer(E,L,G,K,Z):n.vertexAttribPointer(E,L,G,z,K,Z)}function x(E,L,G,z){_();const K=z.attributes,Z=G.getAttributes(),X=L.defaultAttributeValues;for(const Q in Z){const N=Z[Q];if(N.location>=0){let j=K[Q];if(j===void 0&&(Q==="instanceMatrix"&&E.instanceMatrix&&(j=E.instanceMatrix),Q==="instanceColor"&&E.instanceColor&&(j=E.instanceColor)),j!==void 0){const q=j.normalized,ce=j.itemSize,Ae=e.get(j);if(Ae===void 0)continue;const rt=Ae.buffer,H=Ae.type,ie=Ae.bytesPerElement,ye=H===n.INT||H===n.UNSIGNED_INT||j.gpuType===Gh;if(j.isInterleavedBufferAttribute){const ae=j.data,Ue=ae.stride,Fe=j.offset;if(ae.isInstancedInterleavedBuffer){for(let ze=0;ze<N.locationSize;ze++)f(N.location+ze,ae.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ze=0;ze<N.locationSize;ze++)g(N.location+ze);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let ze=0;ze<N.locationSize;ze++)y(N.location+ze,ce/N.locationSize,H,q,Ue*ie,(Fe+ce/N.locationSize*ze)*ie,ye)}else{if(j.isInstancedBufferAttribute){for(let ae=0;ae<N.locationSize;ae++)f(N.location+ae,j.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ae=0;ae<N.locationSize;ae++)g(N.location+ae);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let ae=0;ae<N.locationSize;ae++)y(N.location+ae,ce/N.locationSize,H,q,ce*ie,ce/N.locationSize*ae*ie,ye)}}else if(X!==void 0){const q=X[Q];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(N.location,q);break;case 3:n.vertexAttrib3fv(N.location,q);break;case 4:n.vertexAttrib4fv(N.location,q);break;default:n.vertexAttrib1fv(N.location,q)}}}}v()}function C(){R();for(const E in i){const L=i[E];for(const G in L){const z=L[G];for(const K in z)u(z[K].object),delete z[K];delete L[G]}delete i[E]}}function b(E){if(i[E.id]===void 0)return;const L=i[E.id];for(const G in L){const z=L[G];for(const K in z)u(z[K].object),delete z[K];delete L[G]}delete i[E.id]}function w(E){for(const L in i){const G=i[L];if(G[E.id]===void 0)continue;const z=G[E.id];for(const K in z)u(z[K].object),delete z[K];delete G[E.id]}}function R(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function N1(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let m=0;m<d;m++)p+=u[m];t.update(p,i,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)o(c[m],u[m],h[m]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let m=0;for(let _=0;_<d;_++)m+=u[_]*h[_];t.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function D1(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Yn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const R=w===Ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==qi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==li&&!R)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:C,maxSamples:b}}function U1(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Gr,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,f=n.get(d);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{const v=s?0:i,y=v*4;let x=f.clippingState||null;l.value=x,x=u(m,h,y,p);for(let C=0;C!==y;++C)x[C]=t[C];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,m){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const f=p+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<f)&&(g=new Float32Array(f));for(let y=0,x=p;y!==_;++y,x+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function F1(n){let e=new WeakMap;function t(o,a){return a===cf?o.mapping=so:a===uf&&(o.mapping=oo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===cf||a===uf)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new $M(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Jh extends bv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ks=4,Km=[.125,.215,.35,.446,.526,.582],jr=20,Gu=new Jh,qm=new De;let Wu=null,Xu=0,ju=0,$u=!1;const Wr=(1+Math.sqrt(5))/2,Ms=1/Wr,Zm=[new I(-Wr,Ms,0),new I(Wr,Ms,0),new I(-Ms,0,Wr),new I(Ms,0,Wr),new I(0,Wr,-Ms),new I(0,Wr,Ms),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class zf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Wu=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel(),$u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wu,Xu,ju),this._renderer.xr.enabled=$u,e.scissorTest=!1,Sl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===so||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wu=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel(),$u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Ua,format:Yn,colorSpace:_n,depthBuffer:!1},r=Qm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qm(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k1(s)),this._blurMaterial=O1(s,e,t)}return r}_compileMaterial(e){const t=new ct(this._lodPlanes[0],e);this._renderer.compile(t,Gu)}_sceneToCubeUV(e,t,i,r){const a=new hn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(qm),u.toneMapping=wr,u.autoClear=!1;const p=new Ln({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),m=new ct(new Wi,p);let _=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,_=!0):(p.color.copy(qm),_=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const y=this._cubeSize;Sl(r,v*y,f>2?y:0,y,y),u.setRenderTarget(r),_&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===so||e.mapping===oo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=eg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ct(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Sl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Gu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Zm[(r-s-1)%Zm.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ct(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*jr-1),_=s/m,g=isFinite(s)?1+Math.floor(u*_):jr;g>jr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${jr}`);const f=[];let v=0;for(let w=0;w<jr;++w){const R=w/_,T=Math.exp(-R*R/2);f.push(T),w===0?v+=T:w<g&&(v+=2*T)}for(let w=0;w<f.length;w++)f[w]=f[w]/v;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=m,h.mipInt.value=y-i;const x=this._sizeLods[r],C=3*x*(r>y-ks?r-y+ks:0),b=4*(this._cubeSize-x);Sl(t,C,b,3*x,2*x),l.setRenderTarget(t),l.render(d,Gu)}}function k1(n){const e=[],t=[],i=[];let r=n;const s=n-ks+1+Km.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ks?l=Km[o-n+ks-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,m=6,_=3,g=2,f=1,v=new Float32Array(_*m*p),y=new Float32Array(g*m*p),x=new Float32Array(f*m*p);for(let b=0;b<p;b++){const w=b%3*2/3-1,R=b>2?0:-1,T=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];v.set(T,_*m*b),y.set(h,g*m*b);const E=[b,b,b,b,b,b];x.set(E,f*m*b)}const C=new cn;C.setAttribute("position",new Zt(v,_)),C.setAttribute("uv",new Zt(y,g)),C.setAttribute("faceIndex",new Zt(x,f)),e.push(C),r>ks&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Qm(n,e,t){const i=new rs(n,e,t);return i.texture.mapping=Wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function O1(n,e,t){const i=new Float32Array(jr),r=new I(0,1,0);return new Rr({name:"SphericalGaussianBlur",defines:{n:jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ep(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Jm(){return new Rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ep(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function eg(){return new Rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ep(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function ep(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function B1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===cf||l===uf,u=l===so||l===oo;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new zf(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new zf(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function z1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ko("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function V1(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);for(const m in h.morphAttributes){const _=h.morphAttributes[m];for(let g=0,f=_.length;g<f;g++)e.remove(_[g])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const m in h)e.update(h[m],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const m in p){const _=p[m];for(let g=0,f=_.length;g<f;g++)e.update(_[g],n.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,m=d.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let y=0,x=v.length;y<x;y+=3){const C=v[y+0],b=v[y+1],w=v[y+2];h.push(C,b,b,w,w,C)}}else if(m!==void 0){const v=m.array;_=m.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const C=y+0,b=y+1,w=y+2;h.push(C,b,b,w,w,C)}}else return;const g=new(xv(h)?wv:Tv)(h,1);g.version=_;const f=s.get(d);f&&e.remove(f),s.set(d,g)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function H1(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function c(h,p,m){m!==0&&(n.drawElementsInstanced(i,p,s,h*o,m),t.update(p,i,m))}function u(h,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];t.update(g,i,1)}function d(h,p,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],_[f]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,_,0,m);let f=0;for(let v=0;v<m;v++)f+=p[v]*_[v];t.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function G1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function W1(n,e,t){const i=new WeakMap,r=new ut;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let E=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var p=E;h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let C=a.attributes.position.count*x,b=1;C>e.maxTextureSize&&(b=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*b*4*d),R=new Mv(w,C,b,d);R.type=li,R.needsUpdate=!0;const T=x*4;for(let L=0;L<d;L++){const G=f[L],z=v[L],K=y[L],Z=C*b*4*L;for(let X=0;X<G.count;X++){const Q=X*T;m===!0&&(r.fromBufferAttribute(G,X),w[Z+Q+0]=r.x,w[Z+Q+1]=r.y,w[Z+Q+2]=r.z,w[Z+Q+3]=0),_===!0&&(r.fromBufferAttribute(z,X),w[Z+Q+4]=r.x,w[Z+Q+5]=r.y,w[Z+Q+6]=r.z,w[Z+Q+7]=0),g===!0&&(r.fromBufferAttribute(K,X),w[Z+Q+8]=r.x,w[Z+Q+9]=r.y,w[Z+Q+10]=r.z,w[Z+Q+11]=K.itemSize===4?r.w:1)}}h={count:d,texture:R,size:new it(C,b)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function X1(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Pv extends Ot{constructor(e,t,i,r,s,o,a,l,c,u=js){if(u!==js&&u!==co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===js&&(i=is),i===void 0&&u===co&&(i=lo),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Lv=new Ot,tg=new Pv(1,1),Iv=new Mv,Nv=new LM,Dv=new Rv,ng=[],ig=[],rg=new Float32Array(16),sg=new Float32Array(9),og=new Float32Array(4);function xo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ng[r];if(s===void 0&&(s=new Float32Array(r),ng[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function jc(n,e){let t=ig[e];t===void 0&&(t=new Int32Array(e),ig[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function j1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function Y1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function K1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function q1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;og.set(i),n.uniformMatrix2fv(this.addr,!1,og),zt(t,i)}}function Z1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;sg.set(i),n.uniformMatrix3fv(this.addr,!1,sg),zt(t,i)}}function Q1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;rg.set(i),n.uniformMatrix4fv(this.addr,!1,rg),zt(t,i)}}function J1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ew(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function tw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function nw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function iw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function rw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function sw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function ow(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function aw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(tg.compareFunction=yv,s=tg):s=Lv,t.setTexture2D(e||s,r)}function lw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Nv,r)}function cw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Dv,r)}function uw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Iv,r)}function dw(n){switch(n){case 5126:return j1;case 35664:return $1;case 35665:return Y1;case 35666:return K1;case 35674:return q1;case 35675:return Z1;case 35676:return Q1;case 5124:case 35670:return J1;case 35667:case 35671:return ew;case 35668:case 35672:return tw;case 35669:case 35673:return nw;case 5125:return iw;case 36294:return rw;case 36295:return sw;case 36296:return ow;case 35678:case 36198:case 36298:case 36306:case 35682:return aw;case 35679:case 36299:case 36307:return lw;case 35680:case 36300:case 36308:case 36293:return cw;case 36289:case 36303:case 36311:case 36292:return uw}}function fw(n,e){n.uniform1fv(this.addr,e)}function hw(n,e){const t=xo(e,this.size,2);n.uniform2fv(this.addr,t)}function pw(n,e){const t=xo(e,this.size,3);n.uniform3fv(this.addr,t)}function mw(n,e){const t=xo(e,this.size,4);n.uniform4fv(this.addr,t)}function gw(n,e){const t=xo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function _w(n,e){const t=xo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function vw(n,e){const t=xo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function yw(n,e){n.uniform1iv(this.addr,e)}function xw(n,e){n.uniform2iv(this.addr,e)}function Sw(n,e){n.uniform3iv(this.addr,e)}function Mw(n,e){n.uniform4iv(this.addr,e)}function Ew(n,e){n.uniform1uiv(this.addr,e)}function Tw(n,e){n.uniform2uiv(this.addr,e)}function ww(n,e){n.uniform3uiv(this.addr,e)}function Aw(n,e){n.uniform4uiv(this.addr,e)}function bw(n,e,t){const i=this.cache,r=e.length,s=jc(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Lv,s[o])}function Rw(n,e,t){const i=this.cache,r=e.length,s=jc(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Nv,s[o])}function Cw(n,e,t){const i=this.cache,r=e.length,s=jc(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Dv,s[o])}function Pw(n,e,t){const i=this.cache,r=e.length,s=jc(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Iv,s[o])}function Lw(n){switch(n){case 5126:return fw;case 35664:return hw;case 35665:return pw;case 35666:return mw;case 35674:return gw;case 35675:return _w;case 35676:return vw;case 5124:case 35670:return yw;case 35667:case 35671:return xw;case 35668:case 35672:return Sw;case 35669:case 35673:return Mw;case 5125:return Ew;case 36294:return Tw;case 36295:return ww;case 36296:return Aw;case 35678:case 36198:case 36298:case 36306:case 35682:return bw;case 35679:case 36299:case 36307:return Rw;case 35680:case 36300:case 36308:case 36293:return Cw;case 36289:case 36303:case 36311:case 36292:return Pw}}class Iw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=dw(t.type)}}class Nw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lw(t.type)}}class Dw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Yu=/(\w+)(\])?(\[|\.)?/g;function ag(n,e){n.seq.push(e),n.map[e.id]=e}function Uw(n,e,t){const i=n.name,r=i.length;for(Yu.lastIndex=0;;){const s=Yu.exec(i),o=Yu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ag(t,c===void 0?new Iw(a,n,e):new Nw(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Dw(a),ag(t,d)),t=d}}}class Zl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Uw(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function lg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Fw=37297;let kw=0;function Ow(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const cg=new je;function Bw(n){st._getMatrix(cg,st.workingColorSpace,n);const e=`mat3( ${cg.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case Xc:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ug(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Ow(n.getShaderSource(e),o)}else return r}function zw(n,e){const t=Bw(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Vw(n,e){let t;switch(e){case HS:t="Linear";break;case GS:t="Reinhard";break;case WS:t="Cineon";break;case sv:t="ACESFilmic";break;case jS:t="AgX";break;case $S:t="Neutral";break;case XS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ml=new I;function Hw(){st.getLuminanceCoefficients(Ml);const n=Ml.x.toFixed(4),e=Ml.y.toFixed(4),t=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function Ww(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Xw(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function qo(n){return n!==""}function dg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vf(n){return n.replace(jw,Yw)}const $w=new Map;function Yw(n,e){let t=Ye[e];if(t===void 0){const i=$w.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Vf(t)}const Kw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hg(n){return n.replace(Kw,qw)}function qw(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===iv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function Qw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case so:case oo:e="ENVMAP_TYPE_CUBE";break;case Wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case oo:e="ENVMAP_MODE_REFRACTION";break}return e}function eA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case rv:e="ENVMAP_BLENDING_MULTIPLY";break;case zS:e="ENVMAP_BLENDING_MIX";break;case VS:e="ENVMAP_BLENDING_ADD";break}return e}function tA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function nA(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Zw(t),c=Qw(t),u=Jw(t),d=eA(t),h=tA(t),p=Gw(t),m=Ww(s),_=r.createProgram();let g,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(qo).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(qo).join(`
`),f.length>0&&(f+=`
`)):(g=[pg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),f=[pg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wr?"#define TONE_MAPPING":"",t.toneMapping!==wr?Ye.tonemapping_pars_fragment:"",t.toneMapping!==wr?Vw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,zw("linearToOutputTexel",t.outputColorSpace),Hw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qo).join(`
`)),o=Vf(o),o=dg(o,t),o=fg(o,t),a=Vf(a),a=dg(a,t),a=fg(a,t),o=hg(o),a=hg(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===bm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=v+g+o,x=v+f+a,C=lg(r,r.VERTEX_SHADER,y),b=lg(r,r.FRAGMENT_SHADER,x);r.attachShader(_,C),r.attachShader(_,b),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(L){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(C).trim(),K=r.getShaderInfoLog(b).trim();let Z=!0,X=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,b);else{const Q=ug(r,C,"vertex"),N=ug(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+Q+`
`+N)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||K==="")&&(X=!1);X&&(L.diagnostics={runnable:Z,programLog:G,vertexShader:{log:z,prefix:g},fragmentShader:{log:K,prefix:f}})}r.deleteShader(C),r.deleteShader(b),R=new Zl(r,_),T=Xw(r,_)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(_,Fw)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kw++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=b,this}let iA=0;class rA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new sA(e),t.set(e,i)),i}}class sA{constructor(e){this.id=iA++,this.code=e,this.usedTimes=0}}function oA(n,e,t,i,r,s,o){const a=new Zh,l=new rA,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,E,L,G,z){const K=G.fog,Z=z.geometry,X=T.isMeshStandardMaterial?G.environment:null,Q=(T.isMeshStandardMaterial?t:e).get(T.envMap||X),N=Q&&Q.mapping===Wc?Q.image.height:null,j=m[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const q=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ce=q!==void 0?q.length:0;let Ae=0;Z.morphAttributes.position!==void 0&&(Ae=1),Z.morphAttributes.normal!==void 0&&(Ae=2),Z.morphAttributes.color!==void 0&&(Ae=3);let rt,H,ie,ye;if(j){const lt=vi[j];rt=lt.vertexShader,H=lt.fragmentShader}else rt=T.vertexShader,H=T.fragmentShader,l.update(T),ie=l.getVertexShaderID(T),ye=l.getFragmentShaderID(T);const ae=n.getRenderTarget(),Ue=n.state.buffers.depth.getReversed(),Fe=z.isInstancedMesh===!0,ze=z.isBatchedMesh===!0,mt=!!T.map,Ve=!!T.matcap,Tt=!!Q,F=!!T.aoMap,xn=!!T.lightMap,Ke=!!T.bumpMap,Je=!!T.normalMap,Ne=!!T.displacementMap,_t=!!T.emissiveMap,Ie=!!T.metalnessMap,A=!!T.roughnessMap,S=T.anisotropy>0,O=T.clearcoat>0,$=T.dispersion>0,J=T.iridescence>0,W=T.sheen>0,we=T.transmission>0,de=S&&!!T.anisotropyMap,xe=O&&!!T.clearcoatMap,et=O&&!!T.clearcoatNormalMap,se=O&&!!T.clearcoatRoughnessMap,Ee=J&&!!T.iridescenceMap,Re=J&&!!T.iridescenceThicknessMap,Pe=W&&!!T.sheenColorMap,Se=W&&!!T.sheenRoughnessMap,qe=!!T.specularMap,He=!!T.specularColorMap,Le=!!T.specularIntensityMap,D=we&&!!T.transmissionMap,ue=we&&!!T.thicknessMap,V=!!T.gradientMap,Y=!!T.alphaMap,_e=T.alphaTest>0,me=!!T.alphaHash,Oe=!!T.extensions;let yt=wr;T.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(yt=n.toneMapping);const Ut={shaderID:j,shaderType:T.type,shaderName:T.name,vertexShader:rt,fragmentShader:H,defines:T.defines,customVertexShaderID:ie,customFragmentShaderID:ye,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:ze,batchingColor:ze&&z._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&z.instanceColor!==null,instancingMorph:Fe&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:_n,alphaToCoverage:!!T.alphaToCoverage,map:mt,matcap:Ve,envMap:Tt,envMapMode:Tt&&Q.mapping,envMapCubeUVHeight:N,aoMap:F,lightMap:xn,bumpMap:Ke,normalMap:Je,displacementMap:h&&Ne,emissiveMap:_t,normalMapObjectSpace:Je&&T.normalMapType===JS,normalMapTangentSpace:Je&&T.normalMapType===vv,metalnessMap:Ie,roughnessMap:A,anisotropy:S,anisotropyMap:de,clearcoat:O,clearcoatMap:xe,clearcoatNormalMap:et,clearcoatRoughnessMap:se,dispersion:$,iridescence:J,iridescenceMap:Ee,iridescenceThicknessMap:Re,sheen:W,sheenColorMap:Pe,sheenRoughnessMap:Se,specularMap:qe,specularColorMap:He,specularIntensityMap:Le,transmission:we,transmissionMap:D,thicknessMap:ue,gradientMap:V,opaque:T.transparent===!1&&T.blending===Xs&&T.alphaToCoverage===!1,alphaMap:Y,alphaTest:_e,alphaHash:me,combine:T.combine,mapUv:mt&&_(T.map.channel),aoMapUv:F&&_(T.aoMap.channel),lightMapUv:xn&&_(T.lightMap.channel),bumpMapUv:Ke&&_(T.bumpMap.channel),normalMapUv:Je&&_(T.normalMap.channel),displacementMapUv:Ne&&_(T.displacementMap.channel),emissiveMapUv:_t&&_(T.emissiveMap.channel),metalnessMapUv:Ie&&_(T.metalnessMap.channel),roughnessMapUv:A&&_(T.roughnessMap.channel),anisotropyMapUv:de&&_(T.anisotropyMap.channel),clearcoatMapUv:xe&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:et&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(T.sheenRoughnessMap.channel),specularMapUv:qe&&_(T.specularMap.channel),specularColorMapUv:He&&_(T.specularColorMap.channel),specularIntensityMapUv:Le&&_(T.specularIntensityMap.channel),transmissionMapUv:D&&_(T.transmissionMap.channel),thicknessMapUv:ue&&_(T.thicknessMap.channel),alphaMapUv:Y&&_(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Je||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(mt||Y),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ue,skinning:z.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ae,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:yt,decodeVideoTexture:mt&&T.map.isVideoTexture===!0&&st.getTransfer(T.map.colorSpace)===gt,decodeVideoTextureEmissive:_t&&T.emissiveMap.isVideoTexture===!0&&st.getTransfer(T.emissiveMap.colorSpace)===gt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Mn,flipSided:T.side===mn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Oe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&T.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut}function f(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)E.push(L),E.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(v(E,T),y(E,T),E.push(n.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function v(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function y(T,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const E=m[T.type];let L;if(E){const G=vi[E];L=GM.clone(G.uniforms)}else L=T.uniforms;return L}function C(T,E){let L;for(let G=0,z=u.length;G<z;G++){const K=u[G];if(K.cacheKey===E){L=K,++L.usedTimes;break}}return L===void 0&&(L=new nA(n,E,T,s),u.push(L)),L}function b(T){if(--T.usedTimes===0){const E=u.indexOf(T);u[E]=u[u.length-1],u.pop(),T.destroy()}}function w(T){l.remove(T)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:x,acquireProgram:C,releaseProgram:b,releaseShaderCache:w,programs:u,dispose:R}}function aA(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function lA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function mg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,p,m,_,g){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:m,renderOrder:d.renderOrder,z:_,group:g},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=m,f.renderOrder=d.renderOrder,f.z=_,f.group=g),e++,f}function a(d,h,p,m,_,g){const f=o(d,h,p,m,_,g);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,m,_,g){const f=o(d,h,p,m,_,g);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||lA),i.length>1&&i.sort(h||mg),r.length>1&&r.sort(h||mg)}function u(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function cA(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new gg,n.set(i,[o])):r>=s.length?(o=new gg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function uA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new De};break;case"SpotLight":t={position:new I,direction:new I,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function dA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let fA=0;function hA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function pA(n){const e=new uA,t=dA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new Xe,o=new Xe;function a(c){let u=0,d=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,m=0,_=0,g=0,f=0,v=0,y=0,x=0,C=0,b=0,w=0;c.sort(hA);for(let T=0,E=c.length;T<E;T++){const L=c[T],G=L.color,z=L.intensity,K=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=G.r*z,d+=G.g*z,h+=G.b*z;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],z);w++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,N=t.get(L);N.shadowIntensity=Q.intensity,N.shadowBias=Q.bias,N.shadowNormalBias=Q.normalBias,N.shadowRadius=Q.radius,N.shadowMapSize=Q.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=L.shadow.matrix,v++}i.directional[p]=X,p++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(G).multiplyScalar(z),X.distance=K,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[_]=X;const Q=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,Q.updateMatrices(L),L.castShadow&&b++),i.spotLightMatrix[_]=Q.matrix,L.castShadow){const N=t.get(L);N.shadowIntensity=Q.intensity,N.shadowBias=Q.bias,N.shadowNormalBias=Q.normalBias,N.shadowRadius=Q.radius,N.shadowMapSize=Q.mapSize,i.spotShadow[_]=N,i.spotShadowMap[_]=Z,x++}_++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(G).multiplyScalar(z),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=X,g++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const Q=L.shadow,N=t.get(L);N.shadowIntensity=Q.intensity,N.shadowBias=Q.bias,N.shadowNormalBias=Q.normalBias,N.shadowRadius=Q.radius,N.shadowMapSize=Q.mapSize,N.shadowCameraNear=Q.camera.near,N.shadowCameraFar=Q.camera.far,i.pointShadow[m]=N,i.pointShadowMap[m]=Z,i.pointShadowMatrix[m]=L.shadow.matrix,y++}i.point[m]=X,m++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(z),X.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[f]=X,f++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const R=i.hash;(R.directionalLength!==p||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==f||R.numDirectionalShadows!==v||R.numPointShadows!==y||R.numSpotShadows!==x||R.numSpotMaps!==C||R.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=w,R.directionalLength=p,R.pointLength=m,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=f,R.numDirectionalShadows=v,R.numPointShadows=y,R.numSpotShadows=x,R.numSpotMaps=C,R.numLightProbes=w,i.version=fA++)}function l(c,u){let d=0,h=0,p=0,m=0,_=0;const g=u.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const y=c[f];if(y.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),d++}else if(y.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const x=i.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function _g(n){const e=new pA(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function mA(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new _g(n),e.set(r,[a])):s>=o.length?(a=new _g(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class gA extends fi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ZS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _A extends fi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xA(n,e,t){let i=new Qh;const r=new it,s=new it,o=new ut,a=new gA({depthPacking:QS}),l=new _A,c={},u=t.maxTextureSize,d={[Ki]:mn,[mn]:Ki,[Mn]:Mn},h=new Rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:vA,fragmentShader:yA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const m=new cn;m.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ct(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nv;let f=this.type;this.render=function(b,w,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const T=n.getRenderTarget(),E=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Tr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=f!==Di&&this.type===Di,K=f===Di&&this.type!==Di;for(let Z=0,X=b.length;Z<X;Z++){const Q=b[Z],N=Q.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const j=N.getFrameExtents();if(r.multiply(j),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,N.mapSize.y=s.y)),N.map===null||z===!0||K===!0){const ce=this.type!==Di?{minFilter:gn,magFilter:gn}:{};N.map!==null&&N.map.dispose(),N.map=new rs(r.x,r.y,ce),N.map.texture.name=Q.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const q=N.getViewportCount();for(let ce=0;ce<q;ce++){const Ae=N.getViewport(ce);o.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),G.viewport(o),N.updateMatrices(Q,ce),i=N.getFrustum(),x(w,R,N.camera,Q,this.type)}N.isPointLightShadow!==!0&&this.type===Di&&v(N,R),N.needsUpdate=!1}f=this.type,g.needsUpdate=!1,n.setRenderTarget(T,E,L)};function v(b,w){const R=e.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new rs(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(w,null,R,h,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(w,null,R,p,_,null)}function y(b,w,R,T){let E=null;const L=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)E=L;else if(E=R.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=E.uuid,z=w.uuid;let K=c[G];K===void 0&&(K={},c[G]=K);let Z=K[z];Z===void 0&&(Z=E.clone(),K[z]=Z,w.addEventListener("dispose",C)),E=Z}if(E.visible=w.visible,E.wireframe=w.wireframe,T===Di?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:d[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,R.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const G=n.properties.get(E);G.light=R}return E}function x(b,w,R,T,E){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===Di)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const z=e.update(b),K=b.material;if(Array.isArray(K)){const Z=z.groups;for(let X=0,Q=Z.length;X<Q;X++){const N=Z[X],j=K[N.materialIndex];if(j&&j.visible){const q=y(b,j,T,E);b.onBeforeShadow(n,b,w,R,z,q,N),n.renderBufferDirect(R,null,z,q,b,N),b.onAfterShadow(n,b,w,R,z,q,N)}}}else if(K.visible){const Z=y(b,K,T,E);b.onBeforeShadow(n,b,w,R,z,Z,null),n.renderBufferDirect(R,null,z,Z,b,null),b.onAfterShadow(n,b,w,R,z,Z,null)}}const G=b.children;for(let z=0,K=G.length;z<K;z++)x(G[z],w,R,T,E)}function C(b){b.target.removeEventListener("dispose",C);for(const R in c){const T=c[R],E=b.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const SA={[tf]:nf,[rf]:af,[sf]:lf,[ro]:of,[nf]:tf,[af]:rf,[lf]:sf,[of]:ro};function MA(n,e){function t(){let D=!1;const ue=new ut;let V=null;const Y=new ut(0,0,0,0);return{setMask:function(_e){V!==_e&&!D&&(n.colorMask(_e,_e,_e,_e),V=_e)},setLocked:function(_e){D=_e},setClear:function(_e,me,Oe,yt,Ut){Ut===!0&&(_e*=yt,me*=yt,Oe*=yt),ue.set(_e,me,Oe,yt),Y.equals(ue)===!1&&(n.clearColor(_e,me,Oe,yt),Y.copy(ue))},reset:function(){D=!1,V=null,Y.set(-1,0,0,0)}}}function i(){let D=!1,ue=!1,V=null,Y=null,_e=null;return{setReversed:function(me){if(ue!==me){const Oe=e.get("EXT_clip_control");ue?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const yt=_e;_e=null,this.setClear(yt)}ue=me},getReversed:function(){return ue},setTest:function(me){me?ae(n.DEPTH_TEST):Ue(n.DEPTH_TEST)},setMask:function(me){V!==me&&!D&&(n.depthMask(me),V=me)},setFunc:function(me){if(ue&&(me=SA[me]),Y!==me){switch(me){case tf:n.depthFunc(n.NEVER);break;case nf:n.depthFunc(n.ALWAYS);break;case rf:n.depthFunc(n.LESS);break;case ro:n.depthFunc(n.LEQUAL);break;case sf:n.depthFunc(n.EQUAL);break;case of:n.depthFunc(n.GEQUAL);break;case af:n.depthFunc(n.GREATER);break;case lf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Y=me}},setLocked:function(me){D=me},setClear:function(me){_e!==me&&(ue&&(me=1-me),n.clearDepth(me),_e=me)},reset:function(){D=!1,V=null,Y=null,_e=null,ue=!1}}}function r(){let D=!1,ue=null,V=null,Y=null,_e=null,me=null,Oe=null,yt=null,Ut=null;return{setTest:function(lt){D||(lt?ae(n.STENCIL_TEST):Ue(n.STENCIL_TEST))},setMask:function(lt){ue!==lt&&!D&&(n.stencilMask(lt),ue=lt)},setFunc:function(lt,Jt,On){(V!==lt||Y!==Jt||_e!==On)&&(n.stencilFunc(lt,Jt,On),V=lt,Y=Jt,_e=On)},setOp:function(lt,Jt,On){(me!==lt||Oe!==Jt||yt!==On)&&(n.stencilOp(lt,Jt,On),me=lt,Oe=Jt,yt=On)},setLocked:function(lt){D=lt},setClear:function(lt){Ut!==lt&&(n.clearStencil(lt),Ut=lt)},reset:function(){D=!1,ue=null,V=null,Y=null,_e=null,me=null,Oe=null,yt=null,Ut=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,p=[],m=null,_=!1,g=null,f=null,v=null,y=null,x=null,C=null,b=null,w=new De(0,0,0),R=0,T=!1,E=null,L=null,G=null,z=null,K=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Q=0;const N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(N)[1]),X=Q>=1):N.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),X=Q>=2);let j=null,q={};const ce=n.getParameter(n.SCISSOR_BOX),Ae=n.getParameter(n.VIEWPORT),rt=new ut().fromArray(ce),H=new ut().fromArray(Ae);function ie(D,ue,V,Y){const _e=new Uint8Array(4),me=n.createTexture();n.bindTexture(D,me),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<V;Oe++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,Y,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(ue+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return me}const ye={};ye[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(n.DEPTH_TEST),o.setFunc(ro),Ke(!1),Je(ym),ae(n.CULL_FACE),F(Tr);function ae(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function Ue(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Fe(D,ue){return d[D]!==ue?(n.bindFramebuffer(D,ue),d[D]=ue,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ue),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function ze(D,ue){let V=p,Y=!1;if(D){V=h.get(ue),V===void 0&&(V=[],h.set(ue,V));const _e=D.textures;if(V.length!==_e.length||V[0]!==n.COLOR_ATTACHMENT0){for(let me=0,Oe=_e.length;me<Oe;me++)V[me]=n.COLOR_ATTACHMENT0+me;V.length=_e.length,Y=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,Y=!0);Y&&n.drawBuffers(V)}function mt(D){return m!==D?(n.useProgram(D),m=D,!0):!1}const Ve={[Xr]:n.FUNC_ADD,[ES]:n.FUNC_SUBTRACT,[TS]:n.FUNC_REVERSE_SUBTRACT};Ve[wS]=n.MIN,Ve[AS]=n.MAX;const Tt={[bS]:n.ZERO,[RS]:n.ONE,[CS]:n.SRC_COLOR,[Jd]:n.SRC_ALPHA,[US]:n.SRC_ALPHA_SATURATE,[NS]:n.DST_COLOR,[LS]:n.DST_ALPHA,[PS]:n.ONE_MINUS_SRC_COLOR,[ef]:n.ONE_MINUS_SRC_ALPHA,[DS]:n.ONE_MINUS_DST_COLOR,[IS]:n.ONE_MINUS_DST_ALPHA,[FS]:n.CONSTANT_COLOR,[kS]:n.ONE_MINUS_CONSTANT_COLOR,[OS]:n.CONSTANT_ALPHA,[BS]:n.ONE_MINUS_CONSTANT_ALPHA};function F(D,ue,V,Y,_e,me,Oe,yt,Ut,lt){if(D===Tr){_===!0&&(Ue(n.BLEND),_=!1);return}if(_===!1&&(ae(n.BLEND),_=!0),D!==MS){if(D!==g||lt!==T){if((f!==Xr||x!==Xr)&&(n.blendEquation(n.FUNC_ADD),f=Xr,x=Xr),lt)switch(D){case Xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lr:n.blendFunc(n.ONE,n.ONE);break;case xm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,y=null,C=null,b=null,w.set(0,0,0),R=0,g=D,T=lt}return}_e=_e||ue,me=me||V,Oe=Oe||Y,(ue!==f||_e!==x)&&(n.blendEquationSeparate(Ve[ue],Ve[_e]),f=ue,x=_e),(V!==v||Y!==y||me!==C||Oe!==b)&&(n.blendFuncSeparate(Tt[V],Tt[Y],Tt[me],Tt[Oe]),v=V,y=Y,C=me,b=Oe),(yt.equals(w)===!1||Ut!==R)&&(n.blendColor(yt.r,yt.g,yt.b,Ut),w.copy(yt),R=Ut),g=D,T=!1}function xn(D,ue){D.side===Mn?Ue(n.CULL_FACE):ae(n.CULL_FACE);let V=D.side===mn;ue&&(V=!V),Ke(V),D.blending===Xs&&D.transparent===!1?F(Tr):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const Y=D.stencilWrite;a.setTest(Y),Y&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),_t(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):Ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(D){E!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),E=D)}function Je(D){D!==xS?(ae(n.CULL_FACE),D!==L&&(D===ym?n.cullFace(n.BACK):D===SS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ue(n.CULL_FACE),L=D}function Ne(D){D!==G&&(X&&n.lineWidth(D),G=D)}function _t(D,ue,V){D?(ae(n.POLYGON_OFFSET_FILL),(z!==ue||K!==V)&&(n.polygonOffset(ue,V),z=ue,K=V)):Ue(n.POLYGON_OFFSET_FILL)}function Ie(D){D?ae(n.SCISSOR_TEST):Ue(n.SCISSOR_TEST)}function A(D){D===void 0&&(D=n.TEXTURE0+Z-1),j!==D&&(n.activeTexture(D),j=D)}function S(D,ue,V){V===void 0&&(j===null?V=n.TEXTURE0+Z-1:V=j);let Y=q[V];Y===void 0&&(Y={type:void 0,texture:void 0},q[V]=Y),(Y.type!==D||Y.texture!==ue)&&(j!==V&&(n.activeTexture(V),j=V),n.bindTexture(D,ue||ye[D]),Y.type=D,Y.texture=ue)}function O(){const D=q[j];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(D){rt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),rt.copy(D))}function Se(D){H.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),H.copy(D))}function qe(D,ue){let V=c.get(ue);V===void 0&&(V=new WeakMap,c.set(ue,V));let Y=V.get(D);Y===void 0&&(Y=n.getUniformBlockIndex(ue,D.name),V.set(D,Y))}function He(D,ue){const Y=c.get(ue).get(D);l.get(ue)!==Y&&(n.uniformBlockBinding(ue,Y,D.__bindingPointIndex),l.set(ue,Y))}function Le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},j=null,q={},d={},h=new WeakMap,p=[],m=null,_=!1,g=null,f=null,v=null,y=null,x=null,C=null,b=null,w=new De(0,0,0),R=0,T=!1,E=null,L=null,G=null,z=null,K=null,rt.set(0,0,n.canvas.width,n.canvas.height),H.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:Ue,bindFramebuffer:Fe,drawBuffers:ze,useProgram:mt,setBlending:F,setMaterial:xn,setFlipSided:Ke,setCullFace:Je,setLineWidth:Ne,setPolygonOffset:_t,setScissorTest:Ie,activeTexture:A,bindTexture:S,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:J,texImage2D:Ee,texImage3D:Re,updateUBOMapping:qe,uniformBlockBinding:He,texStorage2D:et,texStorage3D:se,texSubImage2D:W,texSubImage3D:we,compressedTexSubImage2D:de,compressedTexSubImage3D:xe,scissor:Pe,viewport:Se,reset:Le}}function vg(n,e,t,i){const r=EA(i);switch(t){case dv:return n*e;case hv:return n*e;case pv:return n*e*2;case jh:return n*e/r.components*r.byteLength;case $h:return n*e/r.components*r.byteLength;case mv:return n*e*2/r.components*r.byteLength;case Yh:return n*e*2/r.components*r.byteLength;case fv:return n*e*3/r.components*r.byteLength;case Yn:return n*e*4/r.components*r.byteLength;case Kh:return n*e*4/r.components*r.byteLength;case jl:case $l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yl:case Kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ff:case pf:return Math.max(n,16)*Math.max(e,8)/4;case df:case hf:return Math.max(n,8)*Math.max(e,8)/2;case mf:case gf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _f:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yf:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case xf:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Sf:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ef:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wf:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Af:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case bf:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Cf:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Pf:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Lf:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ql:case If:case Nf:return Math.ceil(n/4)*Math.ceil(e/4)*16;case gv:case Df:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Uf:case Ff:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function EA(n){switch(n){case qi:case lv:return{byteLength:1,components:1};case wa:case cv:case Ua:return{byteLength:2,components:1};case Wh:case Xh:return{byteLength:2,components:4};case is:case Gh:case li:return{byteLength:4,components:1};case uv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function TA(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,S){return p?new OffscreenCanvas(A,S):Ra("canvas")}function _(A,S,O){let $=1;const J=Ie(A);if((J.width>O||J.height>O)&&($=O/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const W=Math.floor($*J.width),we=Math.floor($*J.height);d===void 0&&(d=m(W,we));const de=S?m(W,we):d;return de.width=W,de.height=we,de.getContext("2d").drawImage(A,0,0,W,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+W+"x"+we+")."),de}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function g(A){return A.generateMipmaps}function f(A){n.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(A,S,O,$,J=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let W=S;if(S===n.RED&&(O===n.FLOAT&&(W=n.R32F),O===n.HALF_FLOAT&&(W=n.R16F),O===n.UNSIGNED_BYTE&&(W=n.R8)),S===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.R8UI),O===n.UNSIGNED_SHORT&&(W=n.R16UI),O===n.UNSIGNED_INT&&(W=n.R32UI),O===n.BYTE&&(W=n.R8I),O===n.SHORT&&(W=n.R16I),O===n.INT&&(W=n.R32I)),S===n.RG&&(O===n.FLOAT&&(W=n.RG32F),O===n.HALF_FLOAT&&(W=n.RG16F),O===n.UNSIGNED_BYTE&&(W=n.RG8)),S===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RG8UI),O===n.UNSIGNED_SHORT&&(W=n.RG16UI),O===n.UNSIGNED_INT&&(W=n.RG32UI),O===n.BYTE&&(W=n.RG8I),O===n.SHORT&&(W=n.RG16I),O===n.INT&&(W=n.RG32I)),S===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGB8UI),O===n.UNSIGNED_SHORT&&(W=n.RGB16UI),O===n.UNSIGNED_INT&&(W=n.RGB32UI),O===n.BYTE&&(W=n.RGB8I),O===n.SHORT&&(W=n.RGB16I),O===n.INT&&(W=n.RGB32I)),S===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),O===n.UNSIGNED_INT&&(W=n.RGBA32UI),O===n.BYTE&&(W=n.RGBA8I),O===n.SHORT&&(W=n.RGBA16I),O===n.INT&&(W=n.RGBA32I)),S===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),S===n.RGBA){const we=J?Xc:st.getTransfer($);O===n.FLOAT&&(W=n.RGBA32F),O===n.HALF_FLOAT&&(W=n.RGBA16F),O===n.UNSIGNED_BYTE&&(W=we===gt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function x(A,S){let O;return A?S===null||S===is||S===lo?O=n.DEPTH24_STENCIL8:S===li?O=n.DEPTH32F_STENCIL8:S===wa&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===is||S===lo?O=n.DEPTH_COMPONENT24:S===li?O=n.DEPTH_COMPONENT32F:S===wa&&(O=n.DEPTH_COMPONENT16),O}function C(A,S){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==gn&&A.minFilter!==Nn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function b(A){const S=A.target;S.removeEventListener("dispose",b),R(S),S.isVideoTexture&&u.delete(S)}function w(A){const S=A.target;S.removeEventListener("dispose",w),E(S)}function R(A){const S=i.get(A);if(S.__webglInit===void 0)return;const O=A.source,$=h.get(O);if($){const J=$[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&T(A),Object.keys($).length===0&&h.delete(O)}i.remove(A)}function T(A){const S=i.get(A);n.deleteTexture(S.__webglTexture);const O=A.source,$=h.get(O);delete $[S.__cacheKey],o.memory.textures--}function E(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let J=0;J<S.__webglFramebuffer[$].length;J++)n.deleteFramebuffer(S.__webglFramebuffer[$][J]);else n.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)n.deleteFramebuffer(S.__webglFramebuffer[$]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=A.textures;for(let $=0,J=O.length;$<J;$++){const W=i.get(O[$]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(O[$])}i.remove(A)}let L=0;function G(){L=0}function z(){const A=L;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),L+=1,A}function K(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function Z(A,S){const O=i.get(A);if(A.isVideoTexture&&Ne(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(O,A,S);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+S)}function X(A,S){const O=i.get(A);if(A.version>0&&O.__version!==A.version){H(O,A,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+S)}function Q(A,S){const O=i.get(A);if(A.version>0&&O.__version!==A.version){H(O,A,S);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+S)}function N(A,S){const O=i.get(A);if(A.version>0&&O.__version!==A.version){ie(O,A,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+S)}const j={[ao]:n.REPEAT,[pr]:n.CLAMP_TO_EDGE,[Mc]:n.MIRRORED_REPEAT},q={[gn]:n.NEAREST,[av]:n.NEAREST_MIPMAP_NEAREST,[Yo]:n.NEAREST_MIPMAP_LINEAR,[Nn]:n.LINEAR,[Xl]:n.LINEAR_MIPMAP_NEAREST,[zi]:n.LINEAR_MIPMAP_LINEAR},ce={[eM]:n.NEVER,[oM]:n.ALWAYS,[tM]:n.LESS,[yv]:n.LEQUAL,[nM]:n.EQUAL,[sM]:n.GEQUAL,[iM]:n.GREATER,[rM]:n.NOTEQUAL};function Ae(A,S){if(S.type===li&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Nn||S.magFilter===Xl||S.magFilter===Yo||S.magFilter===zi||S.minFilter===Nn||S.minFilter===Xl||S.minFilter===Yo||S.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,j[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,j[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,j[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,q[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,q[S.minFilter]),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ce[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===gn||S.minFilter!==Yo&&S.minFilter!==zi||S.type===li&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function rt(A,S){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",b));const $=S.source;let J=h.get($);J===void 0&&(J={},h.set($,J));const W=K(S);if(W!==A.__cacheKey){J[W]===void 0&&(J[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),J[W].usedTimes++;const we=J[A.__cacheKey];we!==void 0&&(J[A.__cacheKey].usedTimes--,we.usedTimes===0&&T(S)),A.__cacheKey=W,A.__webglTexture=J[W].texture}return O}function H(A,S,O){let $=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=n.TEXTURE_3D);const J=rt(A,S),W=S.source;t.bindTexture($,A.__webglTexture,n.TEXTURE0+O);const we=i.get(W);if(W.version!==we.__version||J===!0){t.activeTexture(n.TEXTURE0+O);const de=st.getPrimaries(st.workingColorSpace),xe=S.colorSpace===dr?null:st.getPrimaries(S.colorSpace),et=S.colorSpace===dr||de===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let se=_(S.image,!1,r.maxTextureSize);se=_t(S,se);const Ee=s.convert(S.format,S.colorSpace),Re=s.convert(S.type);let Pe=y(S.internalFormat,Ee,Re,S.colorSpace,S.isVideoTexture);Ae($,S);let Se;const qe=S.mipmaps,He=S.isVideoTexture!==!0,Le=we.__version===void 0||J===!0,D=W.dataReady,ue=C(S,se);if(S.isDepthTexture)Pe=x(S.format===co,S.type),Le&&(He?t.texStorage2D(n.TEXTURE_2D,1,Pe,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Pe,se.width,se.height,0,Ee,Re,null));else if(S.isDataTexture)if(qe.length>0){He&&Le&&t.texStorage2D(n.TEXTURE_2D,ue,Pe,qe[0].width,qe[0].height);for(let V=0,Y=qe.length;V<Y;V++)Se=qe[V],He?D&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,Se.width,Se.height,Ee,Re,Se.data):t.texImage2D(n.TEXTURE_2D,V,Pe,Se.width,Se.height,0,Ee,Re,Se.data);S.generateMipmaps=!1}else He?(Le&&t.texStorage2D(n.TEXTURE_2D,ue,Pe,se.width,se.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,Ee,Re,se.data)):t.texImage2D(n.TEXTURE_2D,0,Pe,se.width,se.height,0,Ee,Re,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){He&&Le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Pe,qe[0].width,qe[0].height,se.depth);for(let V=0,Y=qe.length;V<Y;V++)if(Se=qe[V],S.format!==Yn)if(Ee!==null)if(He){if(D)if(S.layerUpdates.size>0){const _e=vg(Se.width,Se.height,S.format,S.type);for(const me of S.layerUpdates){const Oe=Se.data.subarray(me*_e/Se.data.BYTES_PER_ELEMENT,(me+1)*_e/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,me,Se.width,Se.height,1,Ee,Oe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,Se.width,Se.height,se.depth,Ee,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,Pe,Se.width,Se.height,se.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,Se.width,Se.height,se.depth,Ee,Re,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,V,Pe,Se.width,Se.height,se.depth,0,Ee,Re,Se.data)}else{He&&Le&&t.texStorage2D(n.TEXTURE_2D,ue,Pe,qe[0].width,qe[0].height);for(let V=0,Y=qe.length;V<Y;V++)Se=qe[V],S.format!==Yn?Ee!==null?He?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,Se.width,Se.height,Ee,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,V,Pe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?D&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,Se.width,Se.height,Ee,Re,Se.data):t.texImage2D(n.TEXTURE_2D,V,Pe,Se.width,Se.height,0,Ee,Re,Se.data)}else if(S.isDataArrayTexture)if(He){if(Le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Pe,se.width,se.height,se.depth),D)if(S.layerUpdates.size>0){const V=vg(se.width,se.height,S.format,S.type);for(const Y of S.layerUpdates){const _e=se.data.subarray(Y*V/se.data.BYTES_PER_ELEMENT,(Y+1)*V/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Y,se.width,se.height,1,Ee,Re,_e)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Ee,Re,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,se.width,se.height,se.depth,0,Ee,Re,se.data);else if(S.isData3DTexture)He?(Le&&t.texStorage3D(n.TEXTURE_3D,ue,Pe,se.width,se.height,se.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Ee,Re,se.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,se.width,se.height,se.depth,0,Ee,Re,se.data);else if(S.isFramebufferTexture){if(Le)if(He)t.texStorage2D(n.TEXTURE_2D,ue,Pe,se.width,se.height);else{let V=se.width,Y=se.height;for(let _e=0;_e<ue;_e++)t.texImage2D(n.TEXTURE_2D,_e,Pe,V,Y,0,Ee,Re,null),V>>=1,Y>>=1}}else if(qe.length>0){if(He&&Le){const V=Ie(qe[0]);t.texStorage2D(n.TEXTURE_2D,ue,Pe,V.width,V.height)}for(let V=0,Y=qe.length;V<Y;V++)Se=qe[V],He?D&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,Ee,Re,Se):t.texImage2D(n.TEXTURE_2D,V,Pe,Ee,Re,Se);S.generateMipmaps=!1}else if(He){if(Le){const V=Ie(se);t.texStorage2D(n.TEXTURE_2D,ue,Pe,V.width,V.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,Re,se)}else t.texImage2D(n.TEXTURE_2D,0,Pe,Ee,Re,se);g(S)&&f($),we.__version=W.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ie(A,S,O){if(S.image.length!==6)return;const $=rt(A,S),J=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+O);const W=i.get(J);if(J.version!==W.__version||$===!0){t.activeTexture(n.TEXTURE0+O);const we=st.getPrimaries(st.workingColorSpace),de=S.colorSpace===dr?null:st.getPrimaries(S.colorSpace),xe=S.colorSpace===dr||we===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const et=S.isCompressedTexture||S.image[0].isCompressedTexture,se=S.image[0]&&S.image[0].isDataTexture,Ee=[];for(let Y=0;Y<6;Y++)!et&&!se?Ee[Y]=_(S.image[Y],!0,r.maxCubemapSize):Ee[Y]=se?S.image[Y].image:S.image[Y],Ee[Y]=_t(S,Ee[Y]);const Re=Ee[0],Pe=s.convert(S.format,S.colorSpace),Se=s.convert(S.type),qe=y(S.internalFormat,Pe,Se,S.colorSpace),He=S.isVideoTexture!==!0,Le=W.__version===void 0||$===!0,D=J.dataReady;let ue=C(S,Re);Ae(n.TEXTURE_CUBE_MAP,S);let V;if(et){He&&Le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,qe,Re.width,Re.height);for(let Y=0;Y<6;Y++){V=Ee[Y].mipmaps;for(let _e=0;_e<V.length;_e++){const me=V[_e];S.format!==Yn?Pe!==null?He?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e,0,0,me.width,me.height,Pe,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e,qe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e,0,0,me.width,me.height,Pe,Se,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e,qe,me.width,me.height,0,Pe,Se,me.data)}}}else{if(V=S.mipmaps,He&&Le){V.length>0&&ue++;const Y=Ie(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,qe,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(se){He?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ee[Y].width,Ee[Y].height,Pe,Se,Ee[Y].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,qe,Ee[Y].width,Ee[Y].height,0,Pe,Se,Ee[Y].data);for(let _e=0;_e<V.length;_e++){const Oe=V[_e].image[Y].image;He?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e+1,0,0,Oe.width,Oe.height,Pe,Se,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e+1,qe,Oe.width,Oe.height,0,Pe,Se,Oe.data)}}else{He?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Pe,Se,Ee[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,qe,Pe,Se,Ee[Y]);for(let _e=0;_e<V.length;_e++){const me=V[_e];He?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e+1,0,0,Pe,Se,me.image[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e+1,qe,Pe,Se,me.image[Y])}}}g(S)&&f(n.TEXTURE_CUBE_MAP),W.__version=J.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ye(A,S,O,$,J,W){const we=s.convert(O.format,O.colorSpace),de=s.convert(O.type),xe=y(O.internalFormat,we,de,O.colorSpace),et=i.get(S),se=i.get(O);if(se.__renderTarget=S,!et.__hasExternalTextures){const Ee=Math.max(1,S.width>>W),Re=Math.max(1,S.height>>W);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,W,xe,Ee,Re,S.depth,0,we,de,null):t.texImage2D(J,W,xe,Ee,Re,0,we,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Je(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,J,se.__webglTexture,0,Ke(S)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,J,se.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(A,S,O){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer){const $=S.depthTexture,J=$&&$.isDepthTexture?$.type:null,W=x(S.stencilBuffer,J),we=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=Ke(S);Je(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,W,S.width,S.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,W,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,W,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,A)}else{const $=S.textures;for(let J=0;J<$.length;J++){const W=$[J],we=s.convert(W.format,W.colorSpace),de=s.convert(W.type),xe=y(W.internalFormat,we,de,W.colorSpace),et=Ke(S);O&&Je(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,et,xe,S.width,S.height):Je(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,xe,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,xe,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const J=$.__webglTexture,W=Ke(S);if(S.depthTexture.format===js)Je(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(S.depthTexture.format===co)Je(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Fe(A){const S=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=$}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ue(S.__webglFramebuffer,A)}else if(O){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=n.createRenderbuffer(),ae(S.__webglDepthbuffer[$],A,!1);else{const J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,W)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),ae(S.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,J)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(A,S,O){const $=i.get(A);S!==void 0&&ye($.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Fe(A)}function mt(A){const S=A.texture,O=i.get(A),$=i.get(S);A.addEventListener("dispose",w);const J=A.textures,W=A.isWebGLCubeRenderTarget===!0,we=J.length>1;if(we||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=S.version,o.memory.textures++),W){O.__webglFramebuffer=[];for(let de=0;de<6;de++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[de]=[];for(let xe=0;xe<S.mipmaps.length;xe++)O.__webglFramebuffer[de][xe]=n.createFramebuffer()}else O.__webglFramebuffer[de]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let de=0;de<S.mipmaps.length;de++)O.__webglFramebuffer[de]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(we)for(let de=0,xe=J.length;de<xe;de++){const et=i.get(J[de]);et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&Je(A)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let de=0;de<J.length;de++){const xe=J[de];O.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[de]);const et=s.convert(xe.format,xe.colorSpace),se=s.convert(xe.type),Ee=y(xe.internalFormat,et,se,xe.colorSpace,A.isXRRenderTarget===!0),Re=Ke(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,Ee,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,O.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,S);for(let de=0;de<6;de++)if(S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)ye(O.__webglFramebuffer[de][xe],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe);else ye(O.__webglFramebuffer[de],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(S)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let de=0,xe=J.length;de<xe;de++){const et=J[de],se=i.get(et);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),Ae(n.TEXTURE_2D,et),ye(O.__webglFramebuffer,A,et,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),g(et)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,$.__webglTexture),Ae(de,S),S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)ye(O.__webglFramebuffer[xe],A,S,n.COLOR_ATTACHMENT0,de,xe);else ye(O.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,de,0);g(S)&&f(de),t.unbindTexture()}A.depthBuffer&&Fe(A)}function Ve(A){const S=A.textures;for(let O=0,$=S.length;O<$;O++){const J=S[O];if(g(J)){const W=v(A),we=i.get(J).__webglTexture;t.bindTexture(W,we),f(W),t.unbindTexture()}}}const Tt=[],F=[];function xn(A){if(A.samples>0){if(Je(A)===!1){const S=A.textures,O=A.width,$=A.height;let J=n.COLOR_BUFFER_BIT;const W=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(A),de=S.length>1;if(de)for(let xe=0;xe<S.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[xe]);const et=i.get(S[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,et,0)}n.blitFramebuffer(0,0,O,$,0,0,O,$,J,n.NEAREST),l===!0&&(Tt.length=0,F.length=0,Tt.push(n.COLOR_ATTACHMENT0+xe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Tt.push(W),F.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,F)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let xe=0;xe<S.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,we.__webglColorRenderbuffer[xe]);const et=i.get(S[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,et,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Ke(A){return Math.min(r.maxSamples,A.samples)}function Je(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ne(A){const S=o.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function _t(A,S){const O=A.colorSpace,$=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==_n&&O!==dr&&(st.getTransfer(O)===gt?($!==Yn||J!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function Ie(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=N,this.rebindTextures=ze,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=xn,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Je}function wA(n,e){function t(i,r=dr){let s;const o=st.getTransfer(r);if(i===qi)return n.UNSIGNED_BYTE;if(i===Wh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===uv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===lv)return n.BYTE;if(i===cv)return n.SHORT;if(i===wa)return n.UNSIGNED_SHORT;if(i===Gh)return n.INT;if(i===is)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===Ua)return n.HALF_FLOAT;if(i===dv)return n.ALPHA;if(i===fv)return n.RGB;if(i===Yn)return n.RGBA;if(i===hv)return n.LUMINANCE;if(i===pv)return n.LUMINANCE_ALPHA;if(i===js)return n.DEPTH_COMPONENT;if(i===co)return n.DEPTH_STENCIL;if(i===jh)return n.RED;if(i===$h)return n.RED_INTEGER;if(i===mv)return n.RG;if(i===Yh)return n.RG_INTEGER;if(i===Kh)return n.RGBA_INTEGER;if(i===jl||i===$l||i===Yl||i===Kl)if(o===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===jl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===jl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$l)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Kl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===df||i===ff||i===hf||i===pf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===df)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ff)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mf||i===gf||i===_f)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===mf||i===gf)return o===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===_f)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vf||i===yf||i===xf||i===Sf||i===Mf||i===Ef||i===Tf||i===wf||i===Af||i===bf||i===Rf||i===Cf||i===Pf||i===Lf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===vf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ef)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Af)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lf)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ql||i===If||i===Nf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ql)return o===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===If)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gv||i===Df||i===Uf||i===Ff)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ql)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Df)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Uf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ff)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class AA extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jn extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bA={type:"move"};class Ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),f=this._getHandJoint(c,_);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&h>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new jn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const RA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class PA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ot,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Rr({vertexShader:RA,fragmentShader:CA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new ka(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LA extends yo{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,m=null;const _=new PA,g=t.getContextAttributes();let f=null,v=null;const y=[],x=[],C=new it;let b=null;const w=new hn;w.viewport=new ut;const R=new hn;R.viewport=new ut;const T=[w,R],E=new AA;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ie=y[H];return ie===void 0&&(ie=new Ku,y[H]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(H){let ie=y[H];return ie===void 0&&(ie=new Ku,y[H]=ie),ie.getGripSpace()},this.getHand=function(H){let ie=y[H];return ie===void 0&&(ie=new Ku,y[H]=ie),ie.getHandSpace()};function z(H){const ie=x.indexOf(H.inputSource);if(ie===-1)return;const ye=y[ie];ye!==void 0&&(ye.update(H.inputSource,H.frame,c||o),ye.dispatchEvent({type:H.type,data:H.inputSource}))}function K(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",Z);for(let H=0;H<y.length;H++){const ie=x[H];ie!==null&&(x[H]=null,y[H].disconnect(ie))}L=null,G=null,_.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,v=null,rt.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",K),r.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ie={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new rs(p.framebufferWidth,p.framebufferHeight,{format:Yn,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ie=null,ye=null,ae=null;g.depth&&(ae=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=g.stencil?co:js,ye=g.stencil?lo:is);const Ue={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Ue),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new rs(h.textureWidth,h.textureHeight,{format:Yn,type:qi,depthTexture:new Pv(h.textureWidth,h.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),rt.setContext(r),rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(H){for(let ie=0;ie<H.removed.length;ie++){const ye=H.removed[ie],ae=x.indexOf(ye);ae>=0&&(x[ae]=null,y[ae].disconnect(ye))}for(let ie=0;ie<H.added.length;ie++){const ye=H.added[ie];let ae=x.indexOf(ye);if(ae===-1){for(let Fe=0;Fe<y.length;Fe++)if(Fe>=x.length){x.push(ye),ae=Fe;break}else if(x[Fe]===null){x[Fe]=ye,ae=Fe;break}if(ae===-1)break}const Ue=y[ae];Ue&&Ue.connect(ye)}}const X=new I,Q=new I;function N(H,ie,ye){X.setFromMatrixPosition(ie.matrixWorld),Q.setFromMatrixPosition(ye.matrixWorld);const ae=X.distanceTo(Q),Ue=ie.projectionMatrix.elements,Fe=ye.projectionMatrix.elements,ze=Ue[14]/(Ue[10]-1),mt=Ue[14]/(Ue[10]+1),Ve=(Ue[9]+1)/Ue[5],Tt=(Ue[9]-1)/Ue[5],F=(Ue[8]-1)/Ue[0],xn=(Fe[8]+1)/Fe[0],Ke=ze*F,Je=ze*xn,Ne=ae/(-F+xn),_t=Ne*-F;if(ie.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(_t),H.translateZ(Ne),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Ue[10]===-1)H.projectionMatrix.copy(ie.projectionMatrix),H.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ie=ze+Ne,A=mt+Ne,S=Ke-_t,O=Je+(ae-_t),$=Ve*mt/A*Ie,J=Tt*mt/A*Ie;H.projectionMatrix.makePerspective(S,O,$,J,Ie,A),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function j(H,ie){ie===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ie.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let ie=H.near,ye=H.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(ye=_.depthFar)),E.near=R.near=w.near=ie,E.far=R.far=w.far=ye,(L!==E.near||G!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,G=E.far),w.layers.mask=H.layers.mask|2,R.layers.mask=H.layers.mask|4,E.layers.mask=w.layers.mask|R.layers.mask;const ae=H.parent,Ue=E.cameras;j(E,ae);for(let Fe=0;Fe<Ue.length;Fe++)j(Ue[Fe],ae);Ue.length===2?N(E,w,R):E.projectionMatrix.copy(w.projectionMatrix),q(H,E,ae)};function q(H,ie,ye){ye===null?H.matrix.copy(ie.matrixWorld):(H.matrix.copy(ye.matrixWorld),H.matrix.invert(),H.matrix.multiply(ie.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ie.projectionMatrix),H.projectionMatrixInverse.copy(ie.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=uo*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let ce=null;function Ae(H,ie){if(u=ie.getViewerPose(c||o),m=ie,u!==null){const ye=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ae=!1;ye.length!==E.cameras.length&&(E.cameras.length=0,ae=!0);for(let Fe=0;Fe<ye.length;Fe++){const ze=ye[Fe];let mt=null;if(p!==null)mt=p.getViewport(ze);else{const Tt=d.getViewSubImage(h,ze);mt=Tt.viewport,Fe===0&&(e.setRenderTargetTextures(v,Tt.colorTexture,h.ignoreDepthValues?void 0:Tt.depthStencilTexture),e.setRenderTarget(v))}let Ve=T[Fe];Ve===void 0&&(Ve=new hn,Ve.layers.enable(Fe),Ve.viewport=new ut,T[Fe]=Ve),Ve.matrix.fromArray(ze.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(ze.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(mt.x,mt.y,mt.width,mt.height),Fe===0&&(E.matrix.copy(Ve.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ae===!0&&E.cameras.push(Ve)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const Fe=d.getDepthInformation(ye[0]);Fe&&Fe.isValid&&Fe.texture&&_.init(e,Fe,r.renderState)}}for(let ye=0;ye<y.length;ye++){const ae=x[ye],Ue=y[ye];ae!==null&&Ue!==void 0&&Ue.update(ae,ie,c||o)}ce&&ce(H,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),m=null}const rt=new Cv;rt.setAnimationLoop(Ae),this.setAnimationLoop=function(H){ce=H},this.dispose=function(){}}}const Br=new Mi,IA=new Xe;function NA(n,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Av(n)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,v,y,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(g,f):f.isMeshToonMaterial?(s(g,f),d(g,f)):f.isMeshPhongMaterial?(s(g,f),u(g,f)):f.isMeshStandardMaterial?(s(g,f),h(g,f),f.isMeshPhysicalMaterial&&p(g,f,x)):f.isMeshMatcapMaterial?(s(g,f),m(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),_(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,v,y):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===mn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===mn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const v=e.get(f),y=v.envMap,x=v.envMapRotation;y&&(g.envMap.value=y,Br.copy(x),Br.x*=-1,Br.y*=-1,Br.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),g.envMapRotation.value.setFromMatrix4(IA.makeRotationFromEuler(Br)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,v,y){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*v,g.scale.value=y*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function h(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,v){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===mn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function _(g,f){const v=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function DA(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const x=y.program;i.uniformBlockBinding(v,x)}function c(v,y){let x=r[v.id];x===void 0&&(m(v),x=u(v),r[v.id]=x,v.addEventListener("dispose",g));const C=y.program;i.updateUBOMapping(v,C);const b=e.render.frame;s[v.id]!==b&&(h(v),s[v.id]=b)}function u(v){const y=d();v.__bindingPointIndex=y;const x=n.createBuffer(),C=v.__size,b=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,C,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=r[v.id],x=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let b=0,w=x.length;b<w;b++){const R=Array.isArray(x[b])?x[b]:[x[b]];for(let T=0,E=R.length;T<E;T++){const L=R[T];if(p(L,b,T,C)===!0){const G=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let K=0;for(let Z=0;Z<z.length;Z++){const X=z[Z],Q=_(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,G+K,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,K),K+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,y,x,C){const b=v.value,w=y+"_"+x;if(C[w]===void 0)return typeof b=="number"||typeof b=="boolean"?C[w]=b:C[w]=b.clone(),!0;{const R=C[w];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return C[w]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function m(v){const y=v.uniforms;let x=0;const C=16;for(let w=0,R=y.length;w<R;w++){const T=Array.isArray(y[w])?y[w]:[y[w]];for(let E=0,L=T.length;E<L;E++){const G=T[E],z=Array.isArray(G.value)?G.value:[G.value];for(let K=0,Z=z.length;K<Z;K++){const X=z[K],Q=_(X),N=x%C,j=N%Q.boundary,q=N+j;x+=j,q!==0&&C-q<Q.storage&&(x+=C-q),G.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=Q.storage}}}const b=x%C;return b>0&&(x+=C-b),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){const y=v.target;y.removeEventListener("dispose",g);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class UA{constructor(e={}){const{canvas:t=EM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,f=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this.toneMapping=wr,this.toneMappingExposure=1;const x=this;let C=!1,b=0,w=0,R=null,T=-1,E=null;const L=new ut,G=new ut;let z=null;const K=new De(0);let Z=0,X=t.width,Q=t.height,N=1,j=null,q=null;const ce=new ut(0,0,X,Q),Ae=new ut(0,0,X,Q);let rt=!1;const H=new Qh;let ie=!1,ye=!1;const ae=new Xe,Ue=new Xe,Fe=new I,ze=new ut,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Tt(){return R===null?N:1}let F=i;function xn(M,P){return t.getContext(M,P)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hh}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",me,!1),F===null){const P="webgl2";if(F=xn(P,M),F===null)throw xn(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ke,Je,Ne,_t,Ie,A,S,O,$,J,W,we,de,xe,et,se,Ee,Re,Pe,Se,qe,He,Le,D;function ue(){Ke=new z1(F),Ke.init(),He=new wA(F,Ke),Je=new D1(F,Ke,e,He),Ne=new MA(F,Ke),Je.reverseDepthBuffer&&h&&Ne.buffers.depth.setReversed(!0),_t=new G1(F),Ie=new aA,A=new TA(F,Ke,Ne,Ie,Je,He,_t),S=new F1(x),O=new B1(x),$=new qM(F),Le=new I1(F,$),J=new V1(F,$,_t,Le),W=new X1(F,J,$,_t),Pe=new W1(F,Je,A),se=new U1(Ie),we=new oA(x,S,O,Ke,Je,Le,se),de=new NA(x,Ie),xe=new cA,et=new mA(Ke),Re=new L1(x,S,O,Ne,W,p,l),Ee=new xA(x,W,Je),D=new DA(F,_t,Je,Ne),Se=new N1(F,Ke,_t),qe=new H1(F,Ke,_t),_t.programs=we.programs,x.capabilities=Je,x.extensions=Ke,x.properties=Ie,x.renderLists=xe,x.shadowMap=Ee,x.state=Ne,x.info=_t}ue();const V=new LA(x,F);this.xr=V,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const M=Ke.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ke.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(M){M!==void 0&&(N=M,this.setSize(X,Q,!1))},this.getSize=function(M){return M.set(X,Q)},this.setSize=function(M,P,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,Q=P,t.width=Math.floor(M*N),t.height=Math.floor(P*N),k===!0&&(t.style.width=M+"px",t.style.height=P+"px"),this.setViewport(0,0,M,P)},this.getDrawingBufferSize=function(M){return M.set(X*N,Q*N).floor()},this.setDrawingBufferSize=function(M,P,k){X=M,Q=P,N=k,t.width=Math.floor(M*k),t.height=Math.floor(P*k),this.setViewport(0,0,M,P)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(ce)},this.setViewport=function(M,P,k,B){M.isVector4?ce.set(M.x,M.y,M.z,M.w):ce.set(M,P,k,B),Ne.viewport(L.copy(ce).multiplyScalar(N).round())},this.getScissor=function(M){return M.copy(Ae)},this.setScissor=function(M,P,k,B){M.isVector4?Ae.set(M.x,M.y,M.z,M.w):Ae.set(M,P,k,B),Ne.scissor(G.copy(Ae).multiplyScalar(N).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(M){Ne.setScissorTest(rt=M)},this.setOpaqueSort=function(M){j=M},this.setTransparentSort=function(M){q=M},this.getClearColor=function(M){return M.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(M=!0,P=!0,k=!0){let B=0;if(M){let U=!1;if(R!==null){const ne=R.texture.format;U=ne===Kh||ne===Yh||ne===$h}if(U){const ne=R.texture.type,fe=ne===qi||ne===is||ne===wa||ne===lo||ne===Wh||ne===Xh,he=Re.getClearColor(),le=Re.getClearAlpha(),be=he.r,Ce=he.g,oe=he.b;fe?(m[0]=be,m[1]=Ce,m[2]=oe,m[3]=le,F.clearBufferuiv(F.COLOR,0,m)):(_[0]=be,_[1]=Ce,_[2]=oe,_[3]=le,F.clearBufferiv(F.COLOR,0,_))}else B|=F.COLOR_BUFFER_BIT}P&&(B|=F.DEPTH_BUFFER_BIT),k&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",me,!1),xe.dispose(),et.dispose(),Ie.dispose(),S.dispose(),O.dispose(),W.dispose(),Le.dispose(),D.dispose(),we.dispose(),V.dispose(),V.removeEventListener("sessionstart",as),V.removeEventListener("sessionend",To),Jn.stop()};function Y(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const M=_t.autoReset,P=Ee.enabled,k=Ee.autoUpdate,B=Ee.needsUpdate,U=Ee.type;ue(),_t.autoReset=M,Ee.enabled=P,Ee.autoUpdate=k,Ee.needsUpdate=B,Ee.type=U}function me(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Oe(M){const P=M.target;P.removeEventListener("dispose",Oe),yt(P)}function yt(M){Ut(M),Ie.remove(M)}function Ut(M){const P=Ie.get(M).programs;P!==void 0&&(P.forEach(function(k){we.releaseProgram(k)}),M.isShaderMaterial&&we.releaseShaderCache(M))}this.renderBufferDirect=function(M,P,k,B,U,ne){P===null&&(P=mt);const fe=U.isMesh&&U.matrixWorld.determinant()<0,he=ot(M,P,k,B,U);Ne.setMaterial(B,fe);let le=k.index,be=1;if(B.wireframe===!0){if(le=J.getWireframeAttribute(k),le===void 0)return;be=2}const Ce=k.drawRange,oe=k.attributes.position;let Be=Ce.start*be,re=(Ce.start+Ce.count)*be;ne!==null&&(Be=Math.max(Be,ne.start*be),re=Math.min(re,(ne.start+ne.count)*be)),le!==null?(Be=Math.max(Be,0),re=Math.min(re,le.count)):oe!=null&&(Be=Math.max(Be,0),re=Math.min(re,oe.count));const Te=re-Be;if(Te<0||Te===1/0)return;Le.setup(U,B,he,k,le);let Ge,ke=Se;if(le!==null&&(Ge=$.get(le),ke=qe,ke.setIndex(Ge)),U.isMesh)B.wireframe===!0?(Ne.setLineWidth(B.wireframeLinewidth*Tt()),ke.setMode(F.LINES)):ke.setMode(F.TRIANGLES);else if(U.isLine){let ge=B.linewidth;ge===void 0&&(ge=1),Ne.setLineWidth(ge*Tt()),U.isLineSegments?ke.setMode(F.LINES):U.isLineLoop?ke.setMode(F.LINE_LOOP):ke.setMode(F.LINE_STRIP)}else U.isPoints?ke.setMode(F.POINTS):U.isSprite&&ke.setMode(F.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ke.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))ke.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const ge=U._multiDrawStarts,We=U._multiDrawCounts,$e=U._multiDrawCount,Pt=le?$.get(le).bytesPerElement:1,bn=Ie.get(B).currentProgram.getUniforms();for(let Ht=0;Ht<$e;Ht++)bn.setValue(F,"_gl_DrawID",Ht),ke.render(ge[Ht]/Pt,We[Ht])}else if(U.isInstancedMesh)ke.renderInstances(Be,Te,U.count);else if(k.isInstancedBufferGeometry){const ge=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,We=Math.min(k.instanceCount,ge);ke.renderInstances(Be,Te,We)}else ke.render(Be,Te)};function lt(M,P,k){M.transparent===!0&&M.side===Mn&&M.forceSinglePass===!1?(M.side=mn,M.needsUpdate=!0,ee(M,P,k),M.side=Ki,M.needsUpdate=!0,ee(M,P,k),M.side=Mn):ee(M,P,k)}this.compile=function(M,P,k=null){k===null&&(k=M),f=et.get(k),f.init(P),y.push(f),k.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),M!==k&&M.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const B=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ne=U.material;if(ne)if(Array.isArray(ne))for(let fe=0;fe<ne.length;fe++){const he=ne[fe];lt(he,k,U),B.add(he)}else lt(ne,k,U),B.add(ne)}),y.pop(),f=null,B},this.compileAsync=function(M,P,k=null){const B=this.compile(M,P,k);return new Promise(U=>{function ne(){if(B.forEach(function(fe){Ie.get(fe).currentProgram.isReady()&&B.delete(fe)}),B.size===0){U(M);return}setTimeout(ne,10)}Ke.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Jt=null;function On(M){Jt&&Jt(M)}function as(){Jn.stop()}function To(){Jn.start()}const Jn=new Cv;Jn.setAnimationLoop(On),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(M){Jt=M,V.setAnimationLoop(M),M===null?Jn.stop():Jn.start()},V.addEventListener("sessionstart",as),V.addEventListener("sessionend",To),this.render=function(M,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(P),P=V.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,P,R),f=et.get(M,y.length),f.init(P),y.push(f),Ue.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),H.setFromProjectionMatrix(Ue),ye=this.localClippingEnabled,ie=se.init(this.clippingPlanes,ye),g=xe.get(M,v.length),g.init(),v.push(g),V.enabled===!0&&V.isPresenting===!0){const ne=x.xr.getDepthSensingMesh();ne!==null&&Bn(ne,P,-1/0,x.sortObjects)}Bn(M,P,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(j,q),Ve=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Ve&&Re.addToRenderList(g,M),this.info.render.frame++,ie===!0&&se.beginShadows();const k=f.state.shadowsArray;Ee.render(k,M,P),ie===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=g.opaque,U=g.transmissive;if(f.setupLights(),P.isArrayCamera){const ne=P.cameras;if(U.length>0)for(let fe=0,he=ne.length;fe<he;fe++){const le=ne[fe];Nr(B,U,M,le)}Ve&&Re.render(M);for(let fe=0,he=ne.length;fe<he;fe++){const le=ne[fe];wo(g,M,le,le.viewport)}}else U.length>0&&Nr(B,U,M,P),Ve&&Re.render(M),wo(g,M,P);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(x,M,P),Le.resetDefaultState(),T=-1,E=null,y.pop(),y.length>0?(f=y[y.length-1],ie===!0&&se.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Bn(M,P,k,B){if(M.visible===!1)return;if(M.layers.test(P.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(P);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||H.intersectsSprite(M)){B&&ze.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ue);const fe=W.update(M),he=M.material;he.visible&&g.push(M,fe,he,k,ze.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||H.intersectsObject(M))){const fe=W.update(M),he=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ze.copy(M.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),ze.copy(fe.boundingSphere.center)),ze.applyMatrix4(M.matrixWorld).applyMatrix4(Ue)),Array.isArray(he)){const le=fe.groups;for(let be=0,Ce=le.length;be<Ce;be++){const oe=le[be],Be=he[oe.materialIndex];Be&&Be.visible&&g.push(M,fe,Be,k,ze.z,oe)}}else he.visible&&g.push(M,fe,he,k,ze.z,null)}}const ne=M.children;for(let fe=0,he=ne.length;fe<he;fe++)Bn(ne[fe],P,k,B)}function wo(M,P,k,B){const U=M.opaque,ne=M.transmissive,fe=M.transparent;f.setupLightsView(k),ie===!0&&se.setGlobalState(x.clippingPlanes,k),B&&Ne.viewport(L.copy(B)),U.length>0&&Ai(U,P,k),ne.length>0&&Ai(ne,P,k),fe.length>0&&Ai(fe,P,k),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Nr(M,P,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new rs(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?Ua:qi,minFilter:zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const ne=f.state.transmissionRenderTarget[B.id],fe=B.viewport||L;ne.setSize(fe.z,fe.w);const he=x.getRenderTarget();x.setRenderTarget(ne),x.getClearColor(K),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),Ve&&Re.render(k);const le=x.toneMapping;x.toneMapping=wr;const be=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),ie===!0&&se.setGlobalState(x.clippingPlanes,B),Ai(M,k,B),A.updateMultisampleRenderTarget(ne),A.updateRenderTargetMipmap(ne),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let oe=0,Be=P.length;oe<Be;oe++){const re=P[oe],Te=re.object,Ge=re.geometry,ke=re.material,ge=re.group;if(ke.side===Mn&&Te.layers.test(B.layers)){const We=ke.side;ke.side=mn,ke.needsUpdate=!0,Ao(Te,k,B,Ge,ke,ge),ke.side=We,ke.needsUpdate=!0,Ce=!0}}Ce===!0&&(A.updateMultisampleRenderTarget(ne),A.updateRenderTargetMipmap(ne))}x.setRenderTarget(he),x.setClearColor(K,Z),be!==void 0&&(B.viewport=be),x.toneMapping=le}function Ai(M,P,k){const B=P.isScene===!0?P.overrideMaterial:null;for(let U=0,ne=M.length;U<ne;U++){const fe=M[U],he=fe.object,le=fe.geometry,be=B===null?fe.material:B,Ce=fe.group;he.layers.test(k.layers)&&Ao(he,P,k,le,be,Ce)}}function Ao(M,P,k,B,U,ne){M.onBeforeRender(x,P,k,B,U,ne),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(x,P,k,B,M,ne),U.transparent===!0&&U.side===Mn&&U.forceSinglePass===!1?(U.side=mn,U.needsUpdate=!0,x.renderBufferDirect(k,P,B,U,M,ne),U.side=Ki,U.needsUpdate=!0,x.renderBufferDirect(k,P,B,U,M,ne),U.side=Mn):x.renderBufferDirect(k,P,B,U,M,ne),M.onAfterRender(x,P,k,B,U,ne)}function ee(M,P,k){P.isScene!==!0&&(P=mt);const B=Ie.get(M),U=f.state.lights,ne=f.state.shadowsArray,fe=U.state.version,he=we.getParameters(M,U.state,ne,P,k),le=we.getProgramCacheKey(he);let be=B.programs;B.environment=M.isMeshStandardMaterial?P.environment:null,B.fog=P.fog,B.envMap=(M.isMeshStandardMaterial?O:S).get(M.envMap||B.environment),B.envMapRotation=B.environment!==null&&M.envMap===null?P.environmentRotation:M.envMapRotation,be===void 0&&(M.addEventListener("dispose",Oe),be=new Map,B.programs=be);let Ce=be.get(le);if(Ce!==void 0){if(B.currentProgram===Ce&&B.lightsStateVersion===fe)return Qe(M,he),Ce}else he.uniforms=we.getUniforms(M),M.onBeforeCompile(he,x),Ce=we.acquireProgram(he,le),be.set(le,Ce),B.uniforms=he.uniforms;const oe=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(oe.clippingPlanes=se.uniform),Qe(M,he),B.needsLights=Ct(M),B.lightsStateVersion=fe,B.needsLights&&(oe.ambientLightColor.value=U.state.ambient,oe.lightProbe.value=U.state.probe,oe.directionalLights.value=U.state.directional,oe.directionalLightShadows.value=U.state.directionalShadow,oe.spotLights.value=U.state.spot,oe.spotLightShadows.value=U.state.spotShadow,oe.rectAreaLights.value=U.state.rectArea,oe.ltc_1.value=U.state.rectAreaLTC1,oe.ltc_2.value=U.state.rectAreaLTC2,oe.pointLights.value=U.state.point,oe.pointLightShadows.value=U.state.pointShadow,oe.hemisphereLights.value=U.state.hemi,oe.directionalShadowMap.value=U.state.directionalShadowMap,oe.directionalShadowMatrix.value=U.state.directionalShadowMatrix,oe.spotShadowMap.value=U.state.spotShadowMap,oe.spotLightMatrix.value=U.state.spotLightMatrix,oe.spotLightMap.value=U.state.spotLightMap,oe.pointShadowMap.value=U.state.pointShadowMap,oe.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Ce,B.uniformsList=null,Ce}function Ze(M){if(M.uniformsList===null){const P=M.currentProgram.getUniforms();M.uniformsList=Zl.seqWithValue(P.seq,M.uniforms)}return M.uniformsList}function Qe(M,P){const k=Ie.get(M);k.outputColorSpace=P.outputColorSpace,k.batching=P.batching,k.batchingColor=P.batchingColor,k.instancing=P.instancing,k.instancingColor=P.instancingColor,k.instancingMorph=P.instancingMorph,k.skinning=P.skinning,k.morphTargets=P.morphTargets,k.morphNormals=P.morphNormals,k.morphColors=P.morphColors,k.morphTargetsCount=P.morphTargetsCount,k.numClippingPlanes=P.numClippingPlanes,k.numIntersection=P.numClipIntersection,k.vertexAlphas=P.vertexAlphas,k.vertexTangents=P.vertexTangents,k.toneMapping=P.toneMapping}function ot(M,P,k,B,U){P.isScene!==!0&&(P=mt),A.resetTextureUnits();const ne=P.fog,fe=B.isMeshStandardMaterial?P.environment:null,he=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:_n,le=(B.isMeshStandardMaterial?O:S).get(B.envMap||fe),be=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ce=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),oe=!!k.morphAttributes.position,Be=!!k.morphAttributes.normal,re=!!k.morphAttributes.color;let Te=wr;B.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Te=x.toneMapping);const Ge=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ke=Ge!==void 0?Ge.length:0,ge=Ie.get(B),We=f.state.lights;if(ie===!0&&(ye===!0||M!==E)){const en=M===E&&B.id===T;se.setState(B,M,en)}let $e=!1;B.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==We.state.version||ge.outputColorSpace!==he||U.isBatchedMesh&&ge.batching===!1||!U.isBatchedMesh&&ge.batching===!0||U.isBatchedMesh&&ge.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ge.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ge.instancing===!1||!U.isInstancedMesh&&ge.instancing===!0||U.isSkinnedMesh&&ge.skinning===!1||!U.isSkinnedMesh&&ge.skinning===!0||U.isInstancedMesh&&ge.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ge.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ge.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ge.instancingMorph===!1&&U.morphTexture!==null||ge.envMap!==le||B.fog===!0&&ge.fog!==ne||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==se.numPlanes||ge.numIntersection!==se.numIntersection)||ge.vertexAlphas!==be||ge.vertexTangents!==Ce||ge.morphTargets!==oe||ge.morphNormals!==Be||ge.morphColors!==re||ge.toneMapping!==Te||ge.morphTargetsCount!==ke)&&($e=!0):($e=!0,ge.__version=B.version);let Pt=ge.currentProgram;$e===!0&&(Pt=ee(B,P,U));let bn=!1,Ht=!1,pi=!1;const dt=Pt.getUniforms(),Yt=ge.uniforms;if(Ne.useProgram(Pt.program)&&(bn=!0,Ht=!0,pi=!0),B.id!==T&&(T=B.id,Ht=!0),bn||E!==M){Ne.buffers.depth.getReversed()?(ae.copy(M.projectionMatrix),wM(ae),AM(ae),dt.setValue(F,"projectionMatrix",ae)):dt.setValue(F,"projectionMatrix",M.projectionMatrix),dt.setValue(F,"viewMatrix",M.matrixWorldInverse);const zn=dt.map.cameraPosition;zn!==void 0&&zn.setValue(F,Fe.setFromMatrixPosition(M.matrixWorld)),Je.logarithmicDepthBuffer&&dt.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&dt.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,Ht=!0,pi=!0)}if(U.isSkinnedMesh){dt.setOptional(F,U,"bindMatrix"),dt.setOptional(F,U,"bindMatrixInverse");const en=U.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),dt.setValue(F,"boneTexture",en.boneTexture,A))}U.isBatchedMesh&&(dt.setOptional(F,U,"batchingTexture"),dt.setValue(F,"batchingTexture",U._matricesTexture,A),dt.setOptional(F,U,"batchingIdTexture"),dt.setValue(F,"batchingIdTexture",U._indirectTexture,A),dt.setOptional(F,U,"batchingColorTexture"),U._colorsTexture!==null&&dt.setValue(F,"batchingColorTexture",U._colorsTexture,A));const bi=k.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&Pe.update(U,k,Pt),(Ht||ge.receiveShadow!==U.receiveShadow)&&(ge.receiveShadow=U.receiveShadow,dt.setValue(F,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Yt.envMap.value=le,Yt.flipEnvMap.value=le.isCubeTexture&&le.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&P.environment!==null&&(Yt.envMapIntensity.value=P.environmentIntensity),Ht&&(dt.setValue(F,"toneMappingExposure",x.toneMappingExposure),ge.needsLights&&Vt(Yt,pi),ne&&B.fog===!0&&de.refreshFogUniforms(Yt,ne),de.refreshMaterialUniforms(Yt,B,N,Q,f.state.transmissionRenderTarget[M.id]),Zl.upload(F,Ze(ge),Yt,A)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Zl.upload(F,Ze(ge),Yt,A),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&dt.setValue(F,"center",U.center),dt.setValue(F,"modelViewMatrix",U.modelViewMatrix),dt.setValue(F,"normalMatrix",U.normalMatrix),dt.setValue(F,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const en=B.uniformsGroups;for(let zn=0,mi=en.length;zn<mi;zn++){const Ba=en[zn];D.update(Ba,Pt),D.bind(Ba,Pt)}}return Pt}function Vt(M,P){M.ambientLightColor.needsUpdate=P,M.lightProbe.needsUpdate=P,M.directionalLights.needsUpdate=P,M.directionalLightShadows.needsUpdate=P,M.pointLights.needsUpdate=P,M.pointLightShadows.needsUpdate=P,M.spotLights.needsUpdate=P,M.spotLightShadows.needsUpdate=P,M.rectAreaLights.needsUpdate=P,M.hemisphereLights.needsUpdate=P}function Ct(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,P,k){Ie.get(M.texture).__webglTexture=P,Ie.get(M.depthTexture).__webglTexture=k;const B=Ie.get(M);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,P){const k=Ie.get(M);k.__webglFramebuffer=P,k.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(M,P=0,k=0){R=M,b=P,w=k;let B=!0,U=null,ne=!1,fe=!1;if(M){const le=Ie.get(M);if(le.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(F.FRAMEBUFFER,null),B=!1;else if(le.__webglFramebuffer===void 0)A.setupRenderTarget(M);else if(le.__hasExternalTextures)A.rebindTextures(M,Ie.get(M.texture).__webglTexture,Ie.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const oe=M.depthTexture;if(le.__boundDepthTexture!==oe){if(oe!==null&&Ie.has(oe)&&(M.width!==oe.image.width||M.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(M)}}const be=M.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(fe=!0);const Ce=Ie.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ce[P])?U=Ce[P][k]:U=Ce[P],ne=!0):M.samples>0&&A.useMultisampledRTT(M)===!1?U=Ie.get(M).__webglMultisampledFramebuffer:Array.isArray(Ce)?U=Ce[k]:U=Ce,L.copy(M.viewport),G.copy(M.scissor),z=M.scissorTest}else L.copy(ce).multiplyScalar(N).floor(),G.copy(Ae).multiplyScalar(N).floor(),z=rt;if(Ne.bindFramebuffer(F.FRAMEBUFFER,U)&&B&&Ne.drawBuffers(M,U),Ne.viewport(L),Ne.scissor(G),Ne.setScissorTest(z),ne){const le=Ie.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+P,le.__webglTexture,k)}else if(fe){const le=Ie.get(M.texture),be=P||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,le.__webglTexture,k||0,be)}T=-1},this.readRenderTargetPixels=function(M,P,k,B,U,ne,fe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=Ie.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(he=he[fe]),he){Ne.bindFramebuffer(F.FRAMEBUFFER,he);try{const le=M.texture,be=le.format,Ce=le.type;if(!Je.textureFormatReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=M.width-B&&k>=0&&k<=M.height-U&&F.readPixels(P,k,B,U,He.convert(be),He.convert(Ce),ne)}finally{const le=R!==null?Ie.get(R).__webglFramebuffer:null;Ne.bindFramebuffer(F.FRAMEBUFFER,le)}}},this.readRenderTargetPixelsAsync=async function(M,P,k,B,U,ne,fe){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=Ie.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(he=he[fe]),he){const le=M.texture,be=le.format,Ce=le.type;if(!Je.textureFormatReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=M.width-B&&k>=0&&k<=M.height-U){Ne.bindFramebuffer(F.FRAMEBUFFER,he);const oe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,oe),F.bufferData(F.PIXEL_PACK_BUFFER,ne.byteLength,F.STREAM_READ),F.readPixels(P,k,B,U,He.convert(be),He.convert(Ce),0);const Be=R!==null?Ie.get(R).__webglFramebuffer:null;Ne.bindFramebuffer(F.FRAMEBUFFER,Be);const re=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await TM(F,re,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,oe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ne),F.deleteBuffer(oe),F.deleteSync(re),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,P=null,k=0){M.isTexture!==!0&&(Ko("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,M=arguments[1]);const B=Math.pow(2,-k),U=Math.floor(M.image.width*B),ne=Math.floor(M.image.height*B),fe=P!==null?P.x:0,he=P!==null?P.y:0;A.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,k,0,0,fe,he,U,ne),Ne.unbindTexture()},this.copyTextureToTexture=function(M,P,k=null,B=null,U=0){M.isTexture!==!0&&(Ko("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,M=arguments[1],P=arguments[2],U=arguments[3]||0,k=null);let ne,fe,he,le,be,Ce,oe,Be,re;const Te=M.isCompressedTexture?M.mipmaps[U]:M.image;k!==null?(ne=k.max.x-k.min.x,fe=k.max.y-k.min.y,he=k.isBox3?k.max.z-k.min.z:1,le=k.min.x,be=k.min.y,Ce=k.isBox3?k.min.z:0):(ne=Te.width,fe=Te.height,he=Te.depth||1,le=0,be=0,Ce=0),B!==null?(oe=B.x,Be=B.y,re=B.z):(oe=0,Be=0,re=0);const Ge=He.convert(P.format),ke=He.convert(P.type);let ge;P.isData3DTexture?(A.setTexture3D(P,0),ge=F.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(A.setTexture2DArray(P,0),ge=F.TEXTURE_2D_ARRAY):(A.setTexture2D(P,0),ge=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,P.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,P.unpackAlignment);const We=F.getParameter(F.UNPACK_ROW_LENGTH),$e=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Pt=F.getParameter(F.UNPACK_SKIP_PIXELS),bn=F.getParameter(F.UNPACK_SKIP_ROWS),Ht=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Te.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Te.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,le),F.pixelStorei(F.UNPACK_SKIP_ROWS,be),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ce);const pi=M.isDataArrayTexture||M.isData3DTexture,dt=P.isDataArrayTexture||P.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const Yt=Ie.get(M),bi=Ie.get(P),en=Ie.get(Yt.__renderTarget),zn=Ie.get(bi.__renderTarget);Ne.bindFramebuffer(F.READ_FRAMEBUFFER,en.__webglFramebuffer),Ne.bindFramebuffer(F.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let mi=0;mi<he;mi++)pi&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ie.get(M).__webglTexture,U,Ce+mi),M.isDepthTexture?(dt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ie.get(P).__webglTexture,U,re+mi),F.blitFramebuffer(le,be,ne,fe,oe,Be,ne,fe,F.DEPTH_BUFFER_BIT,F.NEAREST)):dt?F.copyTexSubImage3D(ge,U,oe,Be,re+mi,le,be,ne,fe):F.copyTexSubImage2D(ge,U,oe,Be,re+mi,le,be,ne,fe);Ne.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else dt?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(ge,U,oe,Be,re,ne,fe,he,Ge,ke,Te.data):P.isCompressedArrayTexture?F.compressedTexSubImage3D(ge,U,oe,Be,re,ne,fe,he,Ge,Te.data):F.texSubImage3D(ge,U,oe,Be,re,ne,fe,he,Ge,ke,Te):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,U,oe,Be,ne,fe,Ge,ke,Te.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,U,oe,Be,Te.width,Te.height,Ge,Te.data):F.texSubImage2D(F.TEXTURE_2D,U,oe,Be,ne,fe,Ge,ke,Te);F.pixelStorei(F.UNPACK_ROW_LENGTH,We),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,$e),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Pt),F.pixelStorei(F.UNPACK_SKIP_ROWS,bn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ht),U===0&&P.generateMipmaps&&F.generateMipmap(ge),Ne.unbindTexture()},this.copyTextureToTexture3D=function(M,P,k=null,B=null,U=0){return M.isTexture!==!0&&(Ko("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,B=arguments[1]||null,M=arguments[2],P=arguments[3],U=arguments[4]||0),Ko('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,P,k,B,U)},this.initRenderTarget=function(M){Ie.get(M).__webglFramebuffer===void 0&&A.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?A.setTextureCube(M,0):M.isData3DTexture?A.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?A.setTexture2DArray(M,0):A.setTexture2D(M,0),Ne.unbindTexture()},this.resetState=function(){b=0,w=0,R=null,Ne.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}class Uv extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class FA{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Of,this.updateRanges=[],this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new I;class tp{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ai(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ft(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ai(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new tp(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const yg=new I,xg=new ut,Sg=new ut,kA=new I,Mg=new Xe,El=new I,qu=new Ei,Eg=new Xe,Zu=new Fa;class OA extends ct{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Mm,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,El),this.boundingBox.expandByPoint(El)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ei),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,El),this.boundingSphere.expandByPoint(El)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qu.copy(this.boundingSphere),qu.applyMatrix4(r),e.ray.intersectsSphere(qu)!==!1&&(Eg.copy(r).invert(),Zu.copy(e.ray).applyMatrix4(Eg),!(this.boundingBox!==null&&Zu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ut,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Mm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===YS?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;xg.fromBufferAttribute(r.attributes.skinIndex,e),Sg.fromBufferAttribute(r.attributes.skinWeight,e),yg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Sg.getComponent(s);if(o!==0){const a=xg.getComponent(s);Mg.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(kA.copy(yg).applyMatrix4(Mg),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Fv extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class kv extends Ot{constructor(e=null,t=1,i=1,r,s,o,a,l,c=gn,u=gn,d,h){super(null,o,a,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tg=new Xe,BA=new Xe;class np{constructor(e=[],t=[]){this.uuid=di(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Xe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:BA;Tg.multiplyMatrices(a,t[s]),Tg.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new np(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new kv(t,e,e,Yn,li);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Fv),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Hf extends Zt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Es=new Xe,wg=new Xe,Tl=[],Ag=new qn,zA=new Xe,Bo=new ct,zo=new Ei;class VA extends ct{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,zA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Es),Ag.copy(e.boundingBox).applyMatrix4(Es),this.boundingBox.union(Ag)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Es),zo.copy(e.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(zo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Bo.geometry=this.geometry,Bo.material=this.material,Bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zo.copy(this.boundingSphere),zo.applyMatrix4(i),e.ray.intersectsSphere(zo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Es),wg.multiplyMatrices(i,Es),Bo.matrixWorld=wg,Bo.raycast(e,Tl);for(let o=0,a=Tl.length;o<a;o++){const l=Tl[o];l.instanceId=s,l.object=this,t.push(l)}Tl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Hf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new kv(new Float32Array(r*this.count),r,this.count,jh,li));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ks extends fi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tc=new I,wc=new I,bg=new Xe,Vo=new Fa,wl=new Ei,Qu=new I,Rg=new I;class $c extends bt{constructor(e=new cn,t=new Ks){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Tc.fromBufferAttribute(t,r-1),wc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Tc.distanceTo(wc);e.setAttribute("lineDistance",new $t(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(r),wl.radius+=s,e.ray.intersectsSphere(wl)===!1)return;bg.copy(r).invert(),Vo.copy(e.ray).applyMatrix4(bg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=p,g=m-1;_<g;_+=c){const f=u.getX(_),v=u.getX(_+1),y=Al(this,e,Vo,l,f,v);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(p),f=Al(this,e,Vo,l,_,g);f&&t.push(f)}}else{const p=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=p,g=m-1;_<g;_+=c){const f=Al(this,e,Vo,l,_,_+1);f&&t.push(f)}if(this.isLineLoop){const _=Al(this,e,Vo,l,m-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Al(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(Tc.fromBufferAttribute(o,r),wc.fromBufferAttribute(o,s),t.distanceSqToSegment(Tc,wc,Qu,Rg)>i)return;Qu.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Qu);if(!(l<e.near||l>e.far))return{distance:l,point:Rg.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const Cg=new I,Pg=new I;class Ac extends $c{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Cg.fromBufferAttribute(t,r),Pg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Cg.distanceTo(Pg);e.setAttribute("lineDistance",new $t(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class HA extends $c{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ip extends fi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lg=new Xe,Gf=new Fa,bl=new Ei,Rl=new I;class Ov extends bt{constructor(e=new cn,t=new ip){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bl.copy(i.boundingSphere),bl.applyMatrix4(r),bl.radius+=s,e.ray.intersectsSphere(bl)===!1)return;Lg.copy(r).invert(),Gf.copy(e.ray).applyMatrix4(Lg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let m=h,_=p;m<_;m++){const g=c.getX(m);Rl.fromBufferAttribute(d,g),Ig(Rl,g,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let m=h,_=p;m<_;m++)Rl.fromBufferAttribute(d,m),Ig(Rl,m,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ig(n,e,t,i,r,s,o){const a=Gf.distanceSqToPoint(n);if(a<t){const l=new I;Gf.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class GA extends Ot{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Cl=new I,Pl=new I,Ju=new I,Ll=new Xn;class ed extends cn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos($s*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},p=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:_,b:g,c:f}=Ll;if(_.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),Ll.getNormal(Ju),d[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,d[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,d[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const y=(v+1)%3,x=d[v],C=d[y],b=Ll[u[v]],w=Ll[u[y]],R=`${x}_${C}`,T=`${C}_${x}`;T in h&&h[T]?(Ju.dot(h[T].normal)<=s&&(p.push(b.x,b.y,b.z),p.push(w.x,w.y,w.z)),h[T]=null):R in h||(h[R]={index0:c[v],index1:c[y],normal:Ju.clone()})}}for(const m in h)if(h[m]){const{index0:_,index1:g}=h[m];Cl.fromBufferAttribute(a,_),Pl.fromBufferAttribute(a,g),p.push(Cl.x,Cl.y,Cl.z),p.push(Pl.x,Pl.y,Pl.z)}this.setAttribute("position",new $t(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Os extends cn{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let d=e;const h=(t-e)/r,p=new I,m=new it;for(let _=0;_<=r;_++){for(let g=0;g<=i;g++){const f=s+g/i*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,u.push(m.x,m.y)}d+=h}for(let _=0;_<r;_++){const g=_*(i+1);for(let f=0;f<i;f++){const v=f+g,y=v,x=v+i+1,C=v+i+2,b=v+1;a.push(y,x,b),a.push(x,C,b)}}this.setIndex(a),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class rp extends cn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new I,d=new I,h=new I;for(let p=0;p<=i;p++)for(let m=0;m<=r;m++){const _=m/r*s,g=p/i*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(_),d.y=(e+t*Math.cos(g))*Math.sin(_),d.z=t*Math.sin(g),a.push(d.x,d.y,d.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(m/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let m=1;m<=r;m++){const _=(r+1)*p+m-1,g=(r+1)*(p-1)+m-1,f=(r+1)*(p-1)+m,v=(r+1)*p+m;o.push(_,g,v),o.push(g,f,v)}this.setIndex(o),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class WA extends fi{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new De(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Ca extends fi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vv,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ti extends Ca{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return an(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Il(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function XA(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function jA(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Ng(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function Bv(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class Oa{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class $A extends Oa{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Em,endingEnd:Em}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Tm:s=e,a=2*t-i;break;case wm:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Tm:o=e,l=2*i-t;break;case wm:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,m=(i-t)/(r-t),_=m*m,g=_*m,f=-h*g+2*h*_-h*m,v=(1+h)*g+(-1.5-2*h)*_+(-.5+h)*m+1,y=(-1-p)*g+(1.5+p)*_+.5*m,x=p*g-p*_;for(let C=0;C!==a;++C)s[C]=f*o[u+C]+v*o[c+C]+y*o[l+C]+x*o[d+C];return s}}class YA extends Oa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*d+o[l+h]*u;return s}}class KA extends Oa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class wi{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Il(t,this.TimeBufferType),this.values=Il(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Il(e.times,Array),values:Il(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new KA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new YA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $A(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Aa:t=this.InterpolantFactoryMethodDiscrete;break;case ba:t=this.InterpolantFactoryMethodLinear;break;case Mu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Aa;case this.InterpolantFactoryMethodLinear:return ba;case this.InterpolantFactoryMethodSmooth:return Mu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&XA(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Mu,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const d=a*i,h=d-i,p=d+i;for(let m=0;m!==i;++m){const _=t[d+m];if(_!==t[h+m]||_!==t[p+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*i,h=o*i;for(let p=0;p!==i;++p)t[h+p]=t[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}wi.prototype.TimeBufferType=Float32Array;wi.prototype.ValueBufferType=Float32Array;wi.prototype.DefaultInterpolation=ba;class So extends wi{constructor(e,t,i){super(e,t,i)}}So.prototype.ValueTypeName="bool";So.prototype.ValueBufferType=Array;So.prototype.DefaultInterpolation=Aa;So.prototype.InterpolantFactoryMethodLinear=void 0;So.prototype.InterpolantFactoryMethodSmooth=void 0;class zv extends wi{}zv.prototype.ValueTypeName="color";class ho extends wi{}ho.prototype.ValueTypeName="number";class qA extends Oa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Ir.slerpFlat(s,0,o,c-a,o,c,l);return s}}class po extends wi{InterpolantFactoryMethodLinear(e){return new qA(this.times,this.values,this.getValueSize(),e)}}po.prototype.ValueTypeName="quaternion";po.prototype.InterpolantFactoryMethodSmooth=void 0;class Mo extends wi{constructor(e,t,i){super(e,t,i)}}Mo.prototype.ValueTypeName="string";Mo.prototype.ValueBufferType=Array;Mo.prototype.DefaultInterpolation=Aa;Mo.prototype.InterpolantFactoryMethodLinear=void 0;Mo.prototype.InterpolantFactoryMethodSmooth=void 0;class mo extends wi{}mo.prototype.ValueTypeName="vector";class ZA{constructor(e="",t=-1,i=[],r=KS){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=di(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(JA(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(wi.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=jA(l);l=Ng(l,1,u),c=Ng(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ho(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let h=r[d];h||(r[d]=h=[]),h.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,h,p,m,_){if(p.length!==0){const g=[],f=[];Bv(p,g,f,m),g.length!==0&&_.push(new d(h,g,f))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let m;for(m=0;m<h.length;m++)if(h[m].morphTargets)for(let _=0;_<h[m].morphTargets.length;_++)p[h[m].morphTargets[_]]=-1;for(const _ in p){const g=[],f=[];for(let v=0;v!==h[m].morphTargets.length;++v){const y=h[m];g.push(y.time),f.push(y.morphTarget===_?1:0)}r.push(new ho(".morphTargetInfluence["+_+"]",g,f))}l=p.length*o}else{const p=".bones["+t[d].name+"]";i(mo,p+".position",h,"pos",r),i(po,p+".quaternion",h,"rot",r),i(mo,p+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function QA(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ho;case"vector":case"vector2":case"vector3":case"vector4":return mo;case"color":return zv;case"quaternion":return po;case"bool":case"boolean":return So;case"string":return Mo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function JA(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=QA(n.type);if(n.times===void 0){const t=[],i=[];Bv(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const mr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class eb{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],m=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null}}}const tb=new eb;class Eo{constructor(e){this.manager=e!==void 0?e:tb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Eo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ni={};class nb extends Error{constructor(e,t){super(e),this.response=t}}class Vv extends Eo{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=mr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ni[e]!==void 0){Ni[e].push({onLoad:t,onProgress:i,onError:r});return}Ni[e]=[],Ni[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ni[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,m=p!==0;let _=0;const g=new ReadableStream({start(f){v();function v(){d.read().then(({done:y,value:x})=>{if(y)f.close();else{_+=x.byteLength;const C=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:p});for(let b=0,w=u.length;b<w;b++){const R=u[b];R.onProgress&&R.onProgress(C)}f.enqueue(x),v()}},y=>{f.error(y)})}}});return new Response(g)}else throw new nb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(m=>p.decode(m))}}}).then(c=>{mr.add(e,c);const u=Ni[e];delete Ni[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Ni[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ni[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ib extends Eo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=mr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ra("img");function l(){u(),mr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class rb extends Eo{constructor(e){super(e)}load(e,t,i,r){const s=new Ot,o=new ib(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Yc extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const td=new Xe,Dg=new I,Ug=new I;class sp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qh,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Dg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dg),Ug.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ug),t.updateMatrixWorld(),td.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(td),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(td)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sb extends sp{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=uo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ob extends Yc{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new sb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Fg=new Xe,Ho=new I,nd=new I;class ab extends sp{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ho.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ho),nd.copy(i.position),nd.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(nd),i.updateMatrixWorld(),r.makeTranslation(-Ho.x,-Ho.y,-Ho.z),Fg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fg)}}class bc extends Yc{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new ab}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class lb extends sp{constructor(){super(new Jh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wf extends Yc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new lb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cb extends Yc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class aa{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ub extends Eo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=mr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return mr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),mr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});mr.add(e,l),s.manager.itemStart(e)}}const op="\\[\\]\\.:\\/",db=new RegExp("["+op+"]","g"),ap="[^"+op+"]",fb="[^"+op.replace("\\.","")+"]",hb=/((?:WC+[\/:])*)/.source.replace("WC",ap),pb=/(WCOD+)?/.source.replace("WCOD",fb),mb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ap),gb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ap),_b=new RegExp("^"+hb+pb+mb+gb+"$"),vb=["material","materials","bones","map"];class yb{constructor(e,t,i){const r=i||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ht{constructor(e,t,i){this.path=t,this.parsedPath=i||ht.parseTrackName(t),this.node=ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ht.Composite(e,t,i):new ht(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(db,"")}static parseTrackName(e){const t=_b.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);vb.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ht.Composite=yb;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const kg=new Xe;class xb{constructor(e,t,i=0,r=1/0){this.ray=new Fa(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Zh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return kg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kg),this}intersectObject(e,t=!0,i=[]){return Xf(e,this,i,t),i.sort(Og),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Xf(e[r],this,i,t);return i.sort(Og),i}}function Og(n,e){return n.distance-e.distance}function Xf(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Xf(s[o],e,t,!0)}}class Sb extends Ac{constructor(e=10,t=10,i=4473924,r=8947848){i=new De(i),r=new De(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,p=0,m=-a;h<=t;h++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const _=h===s?i:r;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const u=new cn;u.setAttribute("position",new $t(l,3)),u.setAttribute("color",new $t(c,3));const d=new Ks({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hh);class Mb extends Uv{constructor(){super();const e=new Wi;e.deleteAttribute("uv");const t=new Ca({side:mn}),i=new Ca,r=new bc(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new ct(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new ct(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new ct(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new ct(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new ct(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new ct(e,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const d=new ct(e,i);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const h=new ct(e,Ts(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const p=new ct(e,Ts(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const m=new ct(e,Ts(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const _=new ct(e,Ts(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const g=new ct(e,Ts(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const f=new ct(e,Ts(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ts(n){const e=new Ln;return e.color.setScalar(n),e}function Bg(n,e){if(e===qS)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===kf||e===_v){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===kf)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class Eb extends Eo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Rb(t)}),this.register(function(t){return new Cb(t)}),this.register(function(t){return new Ob(t)}),this.register(function(t){return new Bb(t)}),this.register(function(t){return new zb(t)}),this.register(function(t){return new Lb(t)}),this.register(function(t){return new Ib(t)}),this.register(function(t){return new Nb(t)}),this.register(function(t){return new Db(t)}),this.register(function(t){return new bb(t)}),this.register(function(t){return new Ub(t)}),this.register(function(t){return new Pb(t)}),this.register(function(t){return new kb(t)}),this.register(function(t){return new Fb(t)}),this.register(function(t){return new wb(t)}),this.register(function(t){return new Vb(t)}),this.register(function(t){return new Hb(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=aa.extractUrlBase(e);o=aa.resolveURL(c,this.path)}else o=aa.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Vv(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Hv){try{o[tt.KHR_BINARY_GLTF]=new Gb(e)}catch(d){r&&r(d);return}s=JSON.parse(o[tt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new n2(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(d){case tt.KHR_MATERIALS_UNLIT:o[d]=new Ab;break;case tt.KHR_DRACO_MESH_COMPRESSION:o[d]=new Wb(s,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:o[d]=new Xb;break;case tt.KHR_MESH_QUANTIZATION:o[d]=new jb;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function Tb(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class wb{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new De(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],_n);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Wf(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new bc(u),c.distance=d;break;case"spot":c=new ob(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Fi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class Ab{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ln}extendParams(e,t,i){const r=[];e.color=new De(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],_n),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Xt))}return Promise.all(r)}}class bb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Rb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new it(a,a)}return Promise.all(s)}}class Cb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Pb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class Lb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],_n)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Xt)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Ib{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class Nb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(a[0],a[1],a[2],_n),Promise.all(s)}}class Db{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Ub{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(a[0],a[1],a[2],_n),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Xt)),Promise.all(s)}}class Fb{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class kb{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Ob{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Bb{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class zb{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Vb{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,d=r.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,h,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(p),u,d,h,r.mode,r.filter),p})})}else return null}}class Hb{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Hn.TRIANGLES&&c.mode!==Hn.TRIANGLE_STRIP&&c.mode!==Hn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,p=[];for(const m of d){const _=new Xe,g=new I,f=new Ir,v=new I(1,1,1),y=new VA(m.geometry,m.material,h);for(let x=0;x<h;x++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,x),l.SCALE&&v.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,_.compose(g,f,v));for(const x in l)if(x==="_COLOR_0"){const C=l[x];y.instanceColor=new Hf(C.array,C.itemSize,C.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,l[x]);bt.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),p.push(y)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Hv="glTF",Go=12,zg={JSON:1313821514,BIN:5130562};class Gb{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Go),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Go,s=new DataView(e,Go);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===zg.JSON){const c=new Uint8Array(e,Go+o,a);this.content=i.decode(c)}else if(l===zg.BIN){const c=Go+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Wb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=jf[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=jf[u]||u.toLowerCase();if(o[u]!==void 0){const h=i.accessors[e.attributes[u]],p=qs[h.componentType];c[d]=p.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,h){r.decodeDracoFile(u,function(p){for(const m in p.attributes){const _=p.attributes[m],g=l[m];g!==void 0&&(_.normalized=g)}d(p)},a,c,_n,h)})})}}class Xb{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class jb{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}}class Gv extends Oa{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,d=(i-t)/u,h=d*d,p=h*d,m=e*c,_=m-c,g=-2*p+3*h,f=p-h,v=1-g,y=f-h+d;for(let x=0;x!==a;x++){const C=o[_+x+a],b=o[_+x+l]*u,w=o[m+x+a],R=o[m+x]*u;s[x]=v*C+y*b+g*w+f*R}return s}}const $b=new Ir;class Yb extends Gv{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return $b.fromArray(s).normalize().toArray(s),s}}const Hn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vg={9728:gn,9729:Nn,9984:av,9985:Xl,9986:Yo,9987:zi},Hg={33071:pr,33648:Mc,10497:ao},id={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},jf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},sr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Kb={CUBICSPLINE:void 0,LINEAR:ba,STEP:Aa},rd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function qb(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ca({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ki})),n.DefaultMaterial}function zr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Fi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Zb(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(i){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(h)}if(r){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(h)}if(s){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=d),s&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function Qb(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Jb(n){let e;const t=n.extensions&&n.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+sd(t.attributes):e=n.indices+":"+sd(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+sd(n.targets[i]);return e}function sd(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function $f(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function e2(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const t2=new Xe;class n2{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Tb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new rb(this.options.manager):this.textureLoader=new ub(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return zr(s,a,r),Fi(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(aa.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=id[r.type],a=qs[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new Zt(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=id[r.type],c=qs[r.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0;let _,g;if(p&&p!==d){const f=Math.floor(h/p),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+f+":"+r.count;let y=t.cache.get(v);y||(_=new c(a,f*p,r.count*p/u),y=new FA(_,p/u),t.cache.add(v,y)),g=new tp(y,l,h%p/u,m)}else a===null?_=new c(r.count*l):_=new c(a,h,r.count*l),g=new Zt(_,l,m);if(r.sparse!==void 0){const f=id.SCALAR,v=qs[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,C=new v(o[1],y,r.sparse.count*f),b=new c(o[2],x,r.sparse.count*l);a!==null&&(g=new Zt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let w=0,R=C.length;w<R;w++){const T=C[w];if(g.setX(T,b[w*l]),l>=2&&g.setY(T,b[w*l+1]),l>=3&&g.setZ(T,b[w*l+2]),l>=4&&g.setW(T,b[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=Vg[h.magFilter]||Nn,u.minFilter=Vg[h.minFilter]||zi,u.wrapS=Hg[h.wrapS]||ao,u.wrapT=Hg[h.wrapT]||ao,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==gn&&u.minFilter!==Nn,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const h=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(h,p){let m=h;t.isImageBitmapLoader===!0&&(m=function(_){const g=new Ot(_);g.needsUpdate=!0,h(g)}),t.load(aa.resolveURL(d,s.path),m,void 0,p)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),Fi(d,o),d.userData.mimeType=o.mimeType||e2(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[tt.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new ip,fi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Ks,fi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Ca}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){const d=r[tt.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new De(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],_n),a.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,Xt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Mn);const u=s.alphaMode||rd.OPAQUE;if(u===rd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===rd.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ln&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new it(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==Ln&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ln){const d=s.emissiveFactor;a.emissive=new De().setRGB(d[0],d[1],d[2],_n)}return s.emissiveTexture!==void 0&&o!==Ln&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Xt)),Promise.all(c).then(function(){const d=new o(a);return s.name&&(d.name=s.name),Fi(d,s),t.associations.set(d,{materials:e}),s.extensions&&zr(r,d,s),d})}createUniqueName(e){const t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Gg(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Jb(c),d=r[u];if(d)o.push(d.promise);else{let h;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=Gg(new cn,c,t),r[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?qb(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let p=0,m=u.length;p<m;p++){const _=u[p],g=o[p];let f;const v=c[p];if(g.mode===Hn.TRIANGLES||g.mode===Hn.TRIANGLE_STRIP||g.mode===Hn.TRIANGLE_FAN||g.mode===void 0)f=s.isSkinnedMesh===!0?new OA(_,v):new ct(_,v),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),g.mode===Hn.TRIANGLE_STRIP?f.geometry=Bg(f.geometry,_v):g.mode===Hn.TRIANGLE_FAN&&(f.geometry=Bg(f.geometry,kf));else if(g.mode===Hn.LINES)f=new Ac(_,v);else if(g.mode===Hn.LINE_STRIP)f=new $c(_,v);else if(g.mode===Hn.LINE_LOOP)f=new HA(_,v);else if(g.mode===Hn.POINTS)f=new Ov(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(f.geometry.morphAttributes).length>0&&Qb(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),Fi(f,s),g.extensions&&zr(r,f,g),t.assignFinalMaterial(f),d.push(f)}for(let p=0,m=d.length;p<m;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return s.extensions&&zr(r,d[0],s),d[0];const h=new jn;s.extensions&&zr(r,h,s),t.associations.set(h,{meshes:e});for(let p=0,m=d.length;p<m;p++)h.add(d[p]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new hn(Bf.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Jh(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Fi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const h=new Xe;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new np(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,h=r.channels.length;d<h;d++){const p=r.channels[d],m=r.samplers[p.sampler],_=p.target,g=_.node,f=r.parameters!==void 0?r.parameters[m.input]:m.input,v=r.parameters!==void 0?r.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",v)),c.push(m),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const h=d[0],p=d[1],m=d[2],_=d[3],g=d[4],f=[];for(let v=0,y=h.length;v<y;v++){const x=h[v],C=p[v],b=m[v],w=_[v],R=g[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const T=i._createAnimationTracks(x,C,b,w,R);if(T)for(let E=0;E<T.length;E++)f.push(T[E])}return new ZA(s,void 0,f)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(h,t2)});for(let p=0,m=d.length;p<m;p++)u.add(d[p]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Fv:c.length>1?u=new jn:c.length===1?u=c[0]:u=new bt,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(s.name&&(u.userData.name=s.name,u.name=o),Fi(u,s),s.extensions&&zr(i,u,s),s.matrix!==void 0){const d=new Xe;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new jn;i.name&&(s.name=r.createUniqueName(i.name)),Fi(s,i),i.extensions&&zr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)s.add(l[u]);const c=u=>{const d=new Map;for(const[h,p]of r.associations)(h instanceof fi||h instanceof Ot)&&d.set(h,p);return u.traverse(h=>{const p=r.associations.get(h);p!=null&&d.set(h,p)}),d};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];sr[s.path]===sr.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(sr[s.path]){case sr.weights:c=ho;break;case sr.rotation:c=po;break;case sr.position:case sr.scale:c=mo;break;default:switch(i.itemSize){case 1:c=ho;break;case 2:case 3:default:c=mo;break}break}const u=r.interpolation!==void 0?Kb[r.interpolation]:ba,d=this._getArrayFromAccessor(i);for(let h=0,p=l.length;h<p;h++){const m=new c(l[h]+"."+sr[s.path],t.array,d,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=$f(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof po?Yb:Gv;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function i2(n,e,t){const i=e.attributes,r=new qn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){const u=$f(qs[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new I,l=new I;for(let c=0,u=s.length;c<u;c++){const d=s[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],p=h.min,m=h.max;if(p!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(m[2]))),h.normalized){const _=$f(qs[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new Ei;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function Gg(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=jf[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return st.workingColorSpace!==_n&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),Fi(n,e),i2(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Zb(n,e.targets,t):n})}const r2=[{id:"display",cppNamespace:"khoa::Gundam::HeadAndVFin",title:"HEAD UNIT & GOLD V-FIN // TRẦN ĐĂNG KHOA",caption:"twin-eye emerald optics · gold v-fin crest · born 20/07/2009 (17 tuổi)",cameraPos:[0,4.35,3.35],lookAt:[0,3.35,0],anchor3D:[0,3.85,0],profileTabLabel:"01 :: Đầu Gundam & V-Fin (Identity)"},{id:"workstation",cppNamespace:"khoa::Gundam::TorsoAndGnDrive",title:"CHEST COCKPIT & AERO WING REACTOR",caption:"đam mê: công nghệ · robot · kỹ thuật · gn-drive fusion core",cameraPos:[2.4,3.2,3.5],lookAt:[0,2.35,0],anchor3D:[0,2.45,.35],profileTabLabel:"02 :: Buồng lái & Lò phản ứng (Đam mê)"},{id:"keyboard",cppNamespace:"khoa::Gundam::ArmsAndBeamWeapons",title:"PSYCHO-FRAME ARMS, BEAM RIFLE & SABER",caption:"cánh tay psycho-frame · súng beam rifle · kiếm laser năng lượng",cameraPos:[-3,3,3.6],lookAt:[0,2.2,.1],anchor3D:[-1.15,2.25,.25],profileTabLabel:"03 :: Cánh tay & Vũ khí (Kỹ năng)"},{id:"telemetry",cppNamespace:"khoa::Gundam::LegsAndMobilityThrusters",title:"DUAL LEGS & KNEE VERNIER THRUSTERS",caption:"sở thích: cycling · work out · playing game · cơ khớp thủy lực",cameraPos:[2.6,1.8,3.8],lookAt:[0,1,0],anchor3D:[.65,1.15,.25],profileTabLabel:"04 :: Động cơ & Cơ khớp (Sở thích)"},{id:"connect",cppNamespace:"khoa::Gundam::HangarLaunchpad",title:"HANGAR DECK // RX-09 KHOA GUNDAM",caption:"72 bộ phận giáp & khung xương · tổng kết thông số trần đăng khoa",cameraPos:[0,3.6,6.4],lookAt:[0,1.9,0],anchor3D:[0,.25,1.15],profileTabLabel:"05 :: Toàn cảnh Gundam (Tổng quan)"}],lp={handle:"tran_dang_khoa.cpp",fullName:"TRẦN ĐĂNG KHOA",birthDate:"20/07/2009",age:17,roleTitle:"Gundam & Robotics Builder · Tech & Engineering Explorer",tagline:"Đam mê Công nghệ, Robot & Kỹ thuật // Năng động với Cycling, Work out & Playing Game.",location:"Việt Nam",availability:"Pilot RX-09 · Born 20/07/2009 (17 Tuổi)",yearsExp:"20/07/2009 · 17 Tuổi",bio:"Xin chào! Mình là Trần Đăng Khoa (sinh ngày 20/07/2009 - 17 tuổi). Mình đam mê Công nghệ, Robot (đặc biệt là cơ khí Mecha / Gundam) và Kỹ thuật chế tạo. Sở thích hàng ngày của mình là đạp xe (Cycling), tập thể hình (Work out) và chơi Game (Playing Game).",hobbies:["Cycling (Đạp xe)","Work out (Tập thể hình)","Playing Game (Chơi Game)"],passions:["Công nghệ (Technology)","Robot (Robotics / Gundam)","Kỹ thuật (Engineering)"],terminalHeader:{engineName:"FORGE",poweredBy:"compiled with g++ -std=c++23 -O3 · RX-09 KHOA GUNDAM 3D Engine",subline:"procedurally-generated C++ Gundam Mecha · 72 armor & frame parts"},contact:{email:"trandangkhoa.20072009@forge.vn",github:"github.com/trandangkhoa-2009",linkedin:"Trần Đăng Khoa · 20/07/2009",website:"https://trandangkhoa-gundam3d.dev",phone:"20/07/2009 · 17 Tuổi"},telemetryBays:[{bay:"BAY 01 · PILOT DOB",code:"20.07",value:"born 2009 · 17 tuổi",unit:"PASS",status:"PASS"},{bay:"BAY 02 · ĐAM MÊ",code:"03",value:"công nghệ · robot · kỹ thuật",unit:"PASS",status:"PASS"},{bay:"BAY 03 · SỞ THÍCH",code:"03",value:"cycling · work out · game",unit:"PASS",status:"PASS"},{bay:"BAY 04 · GUNDAM",code:"72/72",value:"rx-09 parts · 0 errors",unit:"PASS",status:"PASS"}],skills:[{name:"Robot & Cơ khí Mecha Gundam (Robotics)",category:"Robot & Kỹ Thuật",level:98,years:"Đam mê số 1",keycapLabel:"GUNDAM",switchType:"RX-09 Frame Joint"},{name:"Công nghệ & Lập trình C++ (Technology)",category:"Công Nghệ & Code",level:95,years:"Đam mê cốt lõi",keycapLabel:"C++23",switchType:"GN-Drive Core"},{name:"Kỹ thuật Chế tạo & Lắp ráp (Engineering)",category:"Robot & Kỹ Thuật",level:94,years:"Đam mê cốt lõi",keycapLabel:"ENG",switchType:"Titanium Servo"},{name:"Cycling :: Đạp xe đường trường & Khí động học",category:"Sở Thích & Thể Chất",level:96,years:"Sở thích",keycapLabel:"CYCLE",switchType:"Leg Thruster Boost"},{name:"Work out :: Rèn luyện Sức mạnh & Kỷ luật thép",category:"Sở Thích & Thể Chất",level:95,years:"Sở thích",keycapLabel:"GYM",switchType:"Hydraulic Power"},{name:"Playing Game :: Phản xạ & Tư duy Chiến thuật",category:"Sở Thích & Thể Chất",level:98,years:"Sở thích",keycapLabel:"GAME",switchType:"Twin-Eye Target Lock"},{name:"Thiết kế Hệ thống & Điều khiển Tự động",category:"Robot & Kỹ Thuật",level:91,years:"Kỹ thuật",keycapLabel:"SERVO",switchType:"6-DOF Actuator"},{name:"Tư duy Sáng tạo & Giải quyết Vấn đề",category:"Công Nghệ & Code",level:96,years:"Bản lĩnh 17T",keycapLabel:"KHOA",switchType:"Gold V-Fin Crest"}],projects:[{id:"proj-gundam-rx09",title:'ĐAM MÊ 01 :: ROBOT GUNDAM RX-09 "KHOA CUSTOM"',role:"Robotics & Mecha Engineering",period:"20/07/2009 · 17 Tuổi",summary:"Mô hình Robot Gundam 3D gồm 72 chi tiết cơ khí (Giáp ngực, Đầu V-Fin vàng, Lò phản ứng GN-Drive, Cánh phản lực Aero Wing, Súng Beam Rifle, Kiếm Laser và Khiên Aegis) được biên dịch trực tiếp từ mã nguồn C++.",metrics:"72 Linh kiện 3D · Đam mê: Công nghệ · Robot · Kỹ thuật",stack:["C++23","Robotics","Gundam Mecha","3D Kinematics","Engineering"],link:"#gundam",repo:"tran-dang-khoa/rx09-khoa-gundam"},{id:"proj-hobby-cycling",title:"SỞ THÍCH 01 :: CYCLING (ĐẠP XE TỐC ĐỘ)",role:"Endurance & Aero Dynamics",period:"Rèn luyện hàng ngày",summary:"Đạp xe chinh phục các cung đường dài, rèn luyện sức bền dẻo dai và cảm nhận cơ học chuyển động giống như hệ thống động cơ đẩy trên đôi chân Gundam.",metrics:"Tốc độ · Sức bền · Khí động học",stack:["Cycling","Road Bike","Endurance","Speed"],link:"#cycling",repo:"tran-dang-khoa/cycling"},{id:"proj-hobby-workout",title:"SỞ THÍCH 02 :: WORK OUT (TẬP LUYỆN THỂ HÌNH)",role:"Strength & Iron Discipline",period:"Kỷ luật cá nhân",summary:"Tập luyện Work out đều đặn để xây dựng nền tảng thể lực sung mãn, cơ bắp khỏe khoắn và ý chí bền bỉ như khung xương Titan của Robot.",metrics:"Sức mạnh · Kỷ luật · Năng lượng 100%",stack:["Work out","Strength","Calisthenics","Fitness"],link:"#workout",repo:"tran-dang-khoa/workout"},{id:"proj-hobby-gaming",title:"SỞ THÍCH 03 :: PLAYING GAME (CHIẾN THUẬT & PHẢN XẠ)",role:"Mecha & Action Gamer",period:"Giải trí & Phản xạ",summary:"Trải nghiệm các tựa game hành động, chiến thuật và điều khiển cơ khí với phản xạ nhanh nhạy và khả năng phối hợp tay-mắt chuẩn xác.",metrics:"Phản xạ nhạy bén · Tư duy chiến thuật",stack:["Playing Game","High FPS","Strategy","Custom Gear"],link:"#gaming",repo:"tran-dang-khoa/gaming"}],experiences:[{id:"exp-robot",company:"ĐAM MÊ ROBOT & GUNDAM (ROBOTICS)",role:"Cơ khí Chuyển động, Khung xương Mecha & Tự động hóa",period:"20/07/2009 - Nay (17 Tuổi)",location:"Việt Nam",chipCode:"RX-09 :: GUNDAM-CORE",highlights:["Đam mê cấu tạo khớp nối đa bậc tự do (DOF), giáp cơ khí Gundarium và cơ chế biến hình/tách lớp (Exploded View) của Gundam.","Tìm hiểu cách lập trình C++ để điều khiển chuyển động, ánh sáng cảm biến Twin-Eye và hệ thống cân bằng."]},{id:"exp-tech",company:"ĐAM MÊ CÔNG NGHỆ (TECHNOLOGY)",role:"Khám phá Phần mềm, C++ & Đồ họa 3D Thời gian thực",period:"Học tập & Sáng tạo",location:"Tech Lab",chipCode:"GN-DRIVE :: TECH-01",highlights:["Yêu thích công nghệ hiện đại, từ lập trình máy tính, thiết bị phần cứng đến mô phỏng 3D trực tiếp trên trình duyệt."]},{id:"exp-eng",company:"ĐAM MÊ KỸ THUẬT & LỐI SỐNG NĂNG ĐỘNG",role:"Kỹ thuật (Engineering) × Cycling · Work out · Playing Game",period:"Phát triển Toàn diện",location:"Việt Nam",chipCode:"V-FIN :: ENG-2009",highlights:["Kết hợp tư duy kỹ thuật tỉ mỉ với thể chất mạnh mẽ từ Cycling (Đạp xe), Work out (Tập thể hình) và sự nhạy bén từ Playing Game."]}],achievements:["Họ và tên Pilot: Trần Đăng Khoa — Sinh ngày 20/07/2009 (17 Tuổi)","Đam mê cốt lõi: Công nghệ (Technology) · Robot (Gundam / Robotics) · Kỹ thuật (Engineering)","Sở thích cá nhân: Cycling (Đạp xe) · Work out (Thể hình) · Playing Game (Chơi Game)","Chủ nhân Robot 3D RX-09 KHOA GUNDAM (72 linh kiện giáp & vũ khí biên dịch từ C++23)"]};function cp(n=lp){const e=[];let t=1;const i=m=>{e.push({...m,index:t++})},r="#f5f4f0",s="#2c2e33",o="#183b7a",a="#d4192c",l="#f5b942",c="#10f59c",u="#ff2a85";i({id:"hangar-deck-base",name:"hangar launchpad deck (rx-09)",subsystem:"connect",categoryLabel:"struct HangarDeck",dims:"3200.0x3200.0x180.0 mm",mass:"1.45 t",tris:240,cppComment:`// [01/72] Khởi tạo Bệ phóng Hangar cho Pilot ${n.fullName} (${n.birthDate})`,cppStatement:`gundam.init_hangar_deck("${n.fullName}", "${n.birthDate}", /*age=*/${n.age});`,holoLabel:`Pilot :: ${n.fullName} (${n.birthDate} · ${n.age}T)`,laserColor:"#f5b942",shape:"cylinder",position:[0,-.22,0],size:[4.2,.22,4.2],color:"#23252a",metalness:.75,roughness:.3,explodeVector:[0,-1.2,0]}),i({id:"hangar-inner-ring",name:"catapult magnetic ring",subsystem:"connect",categoryLabel:"forge::MagneticRing",dims:"2600.0x2600.0x60.0 mm",mass:"0.48 t",tris:180,cppComment:"// [02/72] Vòng đệm từ trường định vị bàn chân Gundam",cppStatement:"gundam.lock_magnetic_ring(0xd4192c, /*power_mw=*/450);",laserColor:"#ff3b5c",shape:"cylinder",position:[0,-.09,0],size:[3.2,.08,3.2],color:a,metalness:.55,roughness:.35,explodeVector:[0,-.75,0]}),[[-1.45,-1.45],[1.45,-1.45],[-1.45,1.45],[1.45,1.45]].forEach(([m,_],g)=>{i({id:`hangar-clamp-${g+1}`,name:`launchpad anchor clamp #0${g+1}`,subsystem:"connect",categoryLabel:"forge::AnchorClamp",dims:"240.0x240.0x180.0 mm",mass:"85.0 kg",tris:96,cppComment:`// [0${g+3}/72] Khóa neo bệ phóng #0${g+1}`,cppStatement:`gundam.lock_deck_clamp(${g+1}, {${m}f, ${_}f});`,laserColor:"#f5b942",shape:"screw",position:[m,.02,_],size:[.24,.18,.24],color:l,metalness:.85,roughness:.25,explodeVector:[m*.6,-.5,_*.6]})}),i({id:"waist-pelvis-core",name:"gundam pelvis central block",subsystem:"connect",categoryLabel:"struct WaistCore",dims:"920.0x680.0x540.0 mm",mass:"1.12 t",tris:310,cppComment:"// [07/72] Lắp khối xương chậu trung tâm (Waist Core Frame)",cppStatement:'gundam.mount_pelvis_core("RX09_WAIST_FRAME", Alloy::Gundarium);',laserColor:"#2ce59b",shape:"box",position:[0,1.68,0],size:[1.05,.42,.65],color:r,metalness:.35,roughness:.3,explodeVector:[0,0,.6]}),i({id:"waist-v-emblem",name:"crimson crotch v-emblem block",subsystem:"connect",categoryLabel:"forge::WaistEmblem",dims:"320.0x480.0x260.0 mm",mass:"0.28 t",tris:160,cppComment:"// [08/72] Giáp trung tâm chữ V màu đỏ đặc trưng của Gundam",cppStatement:"gundam.attach_waist_v_emblem(0xd4192c, /*gold_crest=*/true);",laserColor:"#ff3b5c",shape:"chip",position:[0,1.65,.28],size:[.34,.46,.26],color:a,metalness:.45,roughness:.3,explodeVector:[0,-.1,1.4]}),i({id:"front-skirt-l",name:"front armor skirt plate [left]",subsystem:"connect",categoryLabel:"forge::SkirtArmor",dims:"420.0x520.0x120.0 mm",mass:"0.19 t",tris:140,cppComment:"// [09/72] Tấm giáp hông trước bên Trái",cppStatement:`gundam.mount_front_skirt(Side::Left, "${n.hobbies[0]||"Cycling"}");`,laserColor:"#f5b942",shape:"box",position:[-.36,1.56,.36],size:[.38,.48,.12],rotation:[-.15,0,.08],color:r,explodeVector:[-.9,-.2,1.5]}),i({id:"front-skirt-r",name:"front armor skirt plate [right]",subsystem:"connect",categoryLabel:"forge::SkirtArmor",dims:"420.0x520.0x120.0 mm",mass:"0.19 t",tris:140,cppComment:"// [10/72] Tấm giáp hông trước bên Phải",cppStatement:`gundam.mount_front_skirt(Side::Right, "${n.hobbies[1]||"Work out"}");`,laserColor:"#f5b942",shape:"box",position:[.36,1.56,.36],size:[.38,.48,.12],rotation:[-.15,0,-.08],color:r,explodeVector:[.9,-.2,1.5]});const h=[{side:"L",sign:-1,label:"left"},{side:"R",sign:1,label:"right"}];return h.forEach(({side:m,sign:_,label:g},f)=>{const v=_*.52;i({id:`foot-sole-${m}`,name:`crimson armored boot sole [${g}]`,subsystem:"telemetry",categoryLabel:"class MechaFoot",dims:"540.0x240.0x880.0 mm",mass:"0.62 t",tris:220,cppComment:`// [${11+f*8}/72] Bàn chân giáp đỏ Gundam [${g.toUpperCase()}] :: Nền tảng Cycling & Work out`,cppStatement:`gundam.mount_foot_sole(Side::${m==="L"?"Left":"Right"}, 0xd4192c);`,laserColor:"#ff3b5c",shape:"box",position:[v,.12,.12],size:[.52,.22,.86],color:a,metalness:.45,roughness:.35,explodeVector:[_*1.1,-.6,.8]}),i({id:`foot-instep-${m}`,name:`white instep armor guard [${g}]`,subsystem:"telemetry",categoryLabel:"forge::InstepGuard",dims:"460.0x260.0x520.0 mm",mass:"0.31 t",tris:160,cppComment:`// [${12+f*8}/72] Giáp mu bàn chân & khớp cổ chân [${g.toUpperCase()}]`,cppStatement:`gundam.lock_ankle_guard(Side::${m==="L"?"Left":"Right"}, /*shock_absorber=*/true);`,laserColor:"#2ce59b",shape:"box",position:[v,.32,.05],size:[.46,.24,.54],color:r,explodeVector:[_*1.3,-.3,1.1]}),i({id:`leg-shin-${m}`,name:`lower leg tibia armor [${g}]`,subsystem:"telemetry",categoryLabel:"class ShinArmor",dims:"480.0x920.0x540.0 mm",mass:"0.84 t",tris:280,cppComment:`// [${13+f*8}/72] Giáp ống quyển [${g.toUpperCase()}] :: Sức bền Cycling`,cppStatement:`gundam.assemble_tibia_armor(Side::${m==="L"?"Left":"Right"}, Hobby::Cycling);`,laserColor:"#2ce59b",shape:"box",position:[v,.78,-.02],size:[.46,.76,.48],color:r,explodeVector:[_*1.5,0,.4]}),i({id:`knee-spike-${m}`,name:`knee vernier thruster fin [${g}]`,subsystem:"telemetry",categoryLabel:"forge::KneeThruster",dims:"280.0x420.0x260.0 mm",mass:"0.24 t",tris:170,cppComment:`// [${14+f*8}/72] Giáp đầu gối & Họng đẩy Vernier [${g.toUpperCase()}]`,cppStatement:`gundam.mount_knee_vernier(Side::${m==="L"?"Left":"Right"}, 0xf5b942);`,laserColor:"#f5b942",shape:"keycap",position:[v,.96,.28],size:[.28,.38,.22],rotation:[.25,0,0],color:o,explodeVector:[_*1.4,.3,1.5]}),i({id:`calf-thruster-${m}`,name:`calf rocket booster nozzle [${g}]`,subsystem:"telemetry",categoryLabel:"forge::CalfBooster",dims:"240.0x380.0x240.0 mm",mass:"0.22 t",tris:180,cppComment:`// [${15+f*8}/72] Động cơ đẩy bắp chân [${g.toUpperCase()}] :: Bứt tốc`,cppStatement:`gundam.ignite_calf_booster(Side::${m==="L"?"Left":"Right"}, /*thrust_kn=*/180);`,laserColor:"#ff3b5c",shape:"capacitor",position:[v,.72,-.32],size:[.24,.36,.24],rotation:[-.35,0,0],color:s,emissive:"#ff3b5c",explodeVector:[_*1.6,-.1,-1.3]}),i({id:`thigh-frame-${m}`,name:`titanium femur inner frame [${g}]`,subsystem:"telemetry",categoryLabel:"forge::FemurFrame",dims:"380.0x620.0x380.0 mm",mass:"0.58 t",tris:210,cppComment:`// [${16+f*8}/72] Khung đùi chịu lực [${g.toUpperCase()}] :: Sức mạnh Work out`,cppStatement:`gundam.seat_femur_actuator(Side::${m==="L"?"Left":"Right"}, Hobby::WorkOut);`,laserColor:"#f5b942",shape:"box",position:[v,1.32,0],size:[.38,.52,.38],color:r,explodeVector:[_*1.25,.25,.2]}),i({id:`hip-railgun-${m}`,name:`waist side railgun pod [${g}]`,subsystem:"telemetry",categoryLabel:"forge::HipRailgun",dims:"180.0x560.0x320.0 mm",mass:"0.29 t",tris:160,cppComment:`// [${17+f*8}/72] Pháo điện từ gắn hông [${g.toUpperCase()}]`,cppStatement:`gundam.dock_hip_railgun(Side::${m==="L"?"Left":"Right"}, "XIPHIA_RAIL_CANNON");`,laserColor:"#2ce59b",shape:"box",position:[_*.68,1.58,0],size:[.16,.52,.34],color:o,explodeVector:[_*1.95,.4,0]}),i({id:`ankle-piston-${m}`,name:`hydraulic ankle cylinder [${g}]`,subsystem:"telemetry",categoryLabel:"forge::HydraulicPiston",dims:"120.0x340.0x120.0 mm",mass:"0.11 t",tris:120,cppComment:`// [${18+f*8}/72] Xi-lanh thủy lực cổ chân [${g.toUpperCase()}]`,cppStatement:`gundam.pressurize_piston(Side::${m==="L"?"Left":"Right"}, 320_bar);`,laserColor:"#f5b942",shape:"cylinder",position:[v+_*.18,.45,-.18],size:[.12,.34,.12],color:l,metalness:.9,roughness:.2,explodeVector:[_*1.8,-.2,-.8]})}),i({id:"abdomen-core-red",name:"crimson abdomen cockpit block",subsystem:"workstation",categoryLabel:"class CockpitCore",dims:"680.0x520.0x520.0 mm",mass:"0.92 t",tris:260,cppComment:`// [27/72] Khoang buồng lái trung tâm (Pilot: ${n.fullName})`,cppStatement:`gundam.seal_pilot_cockpit("${n.fullName}", "${n.birthDate}");`,holoLabel:`Đam mê :: ${n.passions.join(" · ")}`,laserColor:"#ff3b5c",shape:"box",position:[0,2.08,0],size:[.76,.46,.54],color:a,metalness:.45,roughness:.3,explodeVector:[0,.3,.9]}),i({id:"chest-armor-blue",name:"cobalt blue gundam chest armor",subsystem:"workstation",categoryLabel:"class ChestArmor",dims:"1180.0x620.0x680.0 mm",mass:"1.48 t",tris:380,cppComment:"// [28/72] Giáp ngực Cobalt Blue biểu tượng của Gundam",cppStatement:'gundam.mount_chest_armor("RX09_COBALT_CHEST", 0x183b7a);',laserColor:"#2ce59b",shape:"box",position:[0,2.58,.04],size:[1.22,.58,.68],color:o,metalness:.5,roughness:.3,explodeVector:[0,.65,1.1]}),i({id:"cockpit-emerald-hatch",name:"emerald cockpit sensor hatch",subsystem:"workstation",categoryLabel:"forge::CockpitHatch",dims:"320.0x380.0x140.0 mm",mass:"0.21 t",tris:160,cppComment:"// [29/72] Cửa sập buồng lái phát sáng xanh ngọc (GN Sensor)",cppStatement:'gundam.activate_cockpit_hud("TRẦN ĐĂNG KHOA // 17 TUỔI");',laserColor:"#2ce59b",shape:"screen",position:[0,2.52,.39],size:[.32,.38,.08],color:c,emissive:"#059669",explodeVector:[0,.7,1.95]}),i({id:"chest-vent-l",name:"gold chest intake louver [left]",subsystem:"workstation",categoryLabel:"forge::IntakeVent",dims:"320.0x240.0x120.0 mm",mass:"0.14 t",tris:140,cppComment:"// [30/72] Khe tản nhiệt ngực Vàng [TRÁI]",cppStatement:"gundam.mount_chest_vent(Side::Left, 0xf5b942);",laserColor:"#f5b942",shape:"chip",position:[-.38,2.56,.38],size:[.32,.24,.08],rotation:[.15,-.12,0],color:l,metalness:.85,roughness:.2,explodeVector:[-.8,.75,1.85]}),i({id:"chest-vent-r",name:"gold chest intake louver [right]",subsystem:"workstation",categoryLabel:"forge::IntakeVent",dims:"320.0x240.0x120.0 mm",mass:"0.14 t",tris:140,cppComment:"// [31/72] Khe tản nhiệt ngực Vàng [PHẢI]",cppStatement:"gundam.mount_chest_vent(Side::Right, 0xf5b942);",laserColor:"#f5b942",shape:"chip",position:[.38,2.56,.38],size:[.32,.24,.08],rotation:[.15,.12,0],color:l,metalness:.85,roughness:.2,explodeVector:[.8,.75,1.85]}),i({id:"collar-neck-guard",name:"white collar & neck actuator",subsystem:"workstation",categoryLabel:"forge::CollarGuard",dims:"580.0x180.0x420.0 mm",mass:"0.24 t",tris:150,cppComment:"// [32/72] Giáp cổ & khớp xoay đầu Gundam 360 độ",cppStatement:"gundam.seat_neck_gimbal(/*yaw_deg=*/360, /*pitch_deg=*/45);",laserColor:"#f5b942",shape:"box",position:[0,2.94,.02],size:[.58,.16,.42],color:r,explodeVector:[0,1.15,.4]}),i({id:"backpack-thruster-pack",name:"dorsal flight backpack unit",subsystem:"workstation",categoryLabel:"class FlightBackpack",dims:"860.0x680.0x440.0 mm",mass:"0.96 t",tris:320,cppComment:"// [33/72] Ba-lô phản lực sau lưng (Dorsal Flight Pack)",cppStatement:'gundam.dock_flight_backpack("AERO_STRIKE_PACK");',laserColor:"#ff3b5c",shape:"box",position:[0,2.58,-.48],size:[.88,.62,.42],color:s,metalness:.7,roughness:.3,explodeVector:[0,.85,-1.6]}),i({id:"gn-solar-reactor",name:"gn-drive solar fusion cone",subsystem:"workstation",categoryLabel:"class GnDriveCore",dims:"480.0x480.0x560.0 mm",mass:"0.64 t",tris:260,cppComment:"// [34/72] Lò phản ứng hạt nhân GN-Drive phát sáng xanh ngọc",cppStatement:'gundam.ignite_gn_drive("TRANS_AM_READY", /*output_gw=*/12.8);',laserColor:"#2ce59b",shape:"capacitor",position:[0,2.56,-.78],size:[.46,.52,.46],rotation:[Math.PI/2,0,0],color:r,emissive:"#10b981",explodeVector:[0,1,-2.5]}),[{id:"wing-upper-l",name:"aero wing binder [upper-left]",pos:[-1.25,3.15,-.68],rot:[.15,-.22,-.58],color:o,exp:[-2.2,1.8,-1.8]},{id:"wing-upper-r",name:"aero wing binder [upper-right]",pos:[1.25,3.15,-.68],rot:[.15,.22,.58],color:o,exp:[2.2,1.8,-1.8]},{id:"wing-lower-l",name:"plasma wing feather [lower-left]",pos:[-1.35,2.48,-.72],rot:[-.1,-.25,-.82],color:a,exp:[-2.5,.9,-2]},{id:"wing-lower-r",name:"plasma wing feather [lower-right]",pos:[1.35,2.48,-.72],rot:[-.1,.25,.82],color:a,exp:[2.5,.9,-2]}].forEach((m,_)=>{i({id:m.id,name:m.name,subsystem:"workstation",categoryLabel:"forge::AeroWingBinder",dims:"1850.0x320.0x80.0 mm",mass:"0.38 t",tris:210,cppComment:`// [${35+_}/72] Cánh phản lực khí động học #${_+1}: ${m.name}`,cppStatement:`gundam.deploy_wing_binder(${_+1}, "${m.id.toUpperCase()}");`,laserColor:_<2?"#2ce59b":"#ff3b5c",shape:"box",position:m.pos,size:[.32,1.78,.1],rotation:m.rot,color:m.color,metalness:.55,roughness:.28,explodeVector:m.exp})}),i({id:"saber-rack-l",name:"docked beam saber hilt [left]",subsystem:"workstation",categoryLabel:"forge::SaberRack",dims:"110.0x520.0x110.0 mm",mass:"0.09 t",tris:120,cppComment:"// [39/72] Chuôi kiếm ánh sáng Beam Saber [TRÁI] gắn vai",cppStatement:"gundam.dock_beam_saber(Side::Left, /*charge_pct=*/100);",laserColor:"#f5b942",shape:"cylinder",position:[-.36,3.12,-.52],size:[.11,.55,.11],rotation:[-.25,0,.28],color:r,explodeVector:[-.9,2.2,-1.7]}),i({id:"saber-rack-r",name:"docked beam saber hilt [right]",subsystem:"workstation",categoryLabel:"forge::SaberRack",dims:"110.0x520.0x110.0 mm",mass:"0.09 t",tris:120,cppComment:"// [40/72] Chuôi kiếm ánh sáng Beam Saber [PHẢI] gắn vai",cppStatement:"gundam.dock_beam_saber(Side::Right, /*charge_pct=*/100);",laserColor:"#f5b942",shape:"cylinder",position:[.36,3.12,-.52],size:[.11,.55,.11],rotation:[-.25,0,-.28],color:r,explodeVector:[.9,2.2,-1.7]}),i({id:"dorsal-nozzle-l",name:"main rocket vernier nozzle [left]",subsystem:"workstation",categoryLabel:"forge::RocketNozzle",dims:"220.0x280.0x220.0 mm",mass:"0.18 t",tris:150,cppComment:"// [41/72] Họng tên lửa đẩy chính [TRÁI]",cppStatement:"gundam.calibrate_nozzle(0, /*isp_sec=*/4200);",laserColor:"#ff3b5c",shape:"knob",position:[-.28,2.22,-.68],size:[.22,.24,.22],rotation:[-.45,0,0],color:l,explodeVector:[-.7,.4,-2.1]}),i({id:"dorsal-nozzle-r",name:"main rocket vernier nozzle [right]",subsystem:"workstation",categoryLabel:"forge::RocketNozzle",dims:"220.0x280.0x220.0 mm",mass:"0.18 t",tris:150,cppComment:"// [42/72] Họng tên lửa đẩy chính [PHẢI]",cppStatement:"gundam.calibrate_nozzle(1, /*isp_sec=*/4200);",laserColor:"#ff3b5c",shape:"knob",position:[.28,2.22,-.68],size:[.22,.24,.22],rotation:[-.45,0,0],color:l,explodeVector:[.7,.4,-2.1]}),i({id:"head-main-helmet",name:"rx-09 white gundam head dome",subsystem:"display",categoryLabel:"class GundamHead",dims:"520.0x520.0x580.0 mm",mass:"0.42 t",tris:340,cppComment:`// [43/72] Cụm đầu Robot Gundam RX-09 (${n.fullName})`,cppStatement:'auto head = gundam.forge_head_unit("RX09_HEAD_DOME");',holoLabel:"RX-09 KHOA GUNDAM :: Twin-Eye & Gold V-Fin",laserColor:"#2ce59b",shape:"box",position:[0,3.28,.02],size:[.52,.5,.56],color:r,explodeVector:[0,1.9,.2]}),i({id:"head-twin-eyes",name:"emerald twin-eye dual optics",subsystem:"display",categoryLabel:"forge::TwinEyeSensor",dims:"380.0x110.0x80.0 mm",mass:"28.0 kg",tris:140,cppComment:"// [44/72] Đôi mắt kép phát sáng Xanh Ngọc (Twin-Eye Sensor)",cppStatement:"head.activate_twin_eyes(0x10f59c, /*target_lock=*/true);",laserColor:"#2ce59b",shape:"screen",position:[0,3.28,.31],size:[.38,.11,.06],color:c,emissive:"#10f59c",explodeVector:[0,2.05,1.45]}),i({id:"head-faceplate",name:"slotted white face mask plate",subsystem:"display",categoryLabel:"forge::FaceMask",dims:"320.0x220.0x120.0 mm",mass:"42.0 kg",tris:120,cppComment:"// [45/72] Mặt nạ bảo vệ cằm & khe tản nhiệt mặt Gundam",cppStatement:"head.lock_faceplate(Style::SlottedMask);",laserColor:"#f5b942",shape:"box",position:[0,3.16,.31],size:[.32,.18,.08],color:r,explodeVector:[0,1.8,1.55]}),i({id:"head-chin-red",name:"crimson chin guard tip",subsystem:"display",categoryLabel:"forge::ChinGuard",dims:"160.0x110.0x120.0 mm",mass:"18.0 kg",tris:96,cppComment:"// [46/72] Chóp cằm đỏ đặc trưng của Gundam",cppStatement:"head.mount_crimson_chin(0xd4192c);",laserColor:"#ff3b5c",shape:"box",position:[0,3.04,.32],size:[.16,.1,.1],color:a,explodeVector:[0,1.65,1.7]}),i({id:"v-fin-center-jewel",name:"forehead red sensor crest (2009)",subsystem:"display",categoryLabel:"forge::ForeheadCrest",dims:"160.0x220.0x140.0 mm",mass:"22.0 kg",tris:130,cppComment:"// [47/72] Ngọc cảm biến trán giữ cặp sừng V-Fin",cppStatement:'head.set_forehead_jewel("KHOA_20_07_2009", 0xd4192c);',laserColor:"#ff3b5c",shape:"chip",position:[0,3.48,.32],size:[.16,.2,.12],color:a,emissive:"#ef4444",explodeVector:[0,2.6,1.6]}),i({id:"v-fin-gold-left",name:"gold v-fin antenna blade [left]",subsystem:"display",categoryLabel:"class VFinCrest",dims:"720.0x120.0x60.0 mm",mass:"35.0 kg",tris:180,cppComment:"// [48/72] Sừng V-Fin Vàng bên TRÁI (Biểu tượng chỉ huy Gundam)",cppStatement:"head.forge_gold_v_fin(Side::Left, /*angle_deg=*/38.0f);",laserColor:"#f5b942",shape:"box",position:[-.42,3.68,.32],size:[.78,.1,.06],rotation:[0,0,-.46],color:l,metalness:.9,roughness:.15,explodeVector:[-1.4,2.95,1.5]}),i({id:"v-fin-gold-right",name:"gold v-fin antenna blade [right]",subsystem:"display",categoryLabel:"class VFinCrest",dims:"720.0x120.0x60.0 mm",mass:"35.0 kg",tris:180,cppComment:"// [49/72] Sừng V-Fin Vàng bên PHẢI (Biểu tượng chỉ huy Gundam)",cppStatement:"head.forge_gold_v_fin(Side::Right, /*angle_deg=*/-38.0f);",laserColor:"#f5b942",shape:"box",position:[.42,3.68,.32],size:[.78,.1,.06],rotation:[0,0,.46],color:l,metalness:.9,roughness:.15,explodeVector:[1.4,2.95,1.5]}),i({id:"v-fin-white-left",name:"secondary white v-fin blade [left]",subsystem:"display",categoryLabel:"forge::SubVFin",dims:"540.0x90.0x50.0 mm",mass:"24.0 kg",tris:140,cppComment:"// [50/72] Sừng V-Fin phụ màu trắng [TRÁI]",cppStatement:"head.attach_sub_v_fin(Side::Left);",laserColor:"#2ce59b",shape:"box",position:[-.34,3.78,.28],size:[.56,.08,.05],rotation:[0,0,-.68],color:r,explodeVector:[-1.2,3.25,1.3]}),i({id:"v-fin-white-right",name:"secondary white v-fin blade [right]",subsystem:"display",categoryLabel:"forge::SubVFin",dims:"540.0x90.0x50.0 mm",mass:"24.0 kg",tris:140,cppComment:"// [51/72] Sừng V-Fin phụ màu trắng [PHẢI]",cppStatement:"head.attach_sub_v_fin(Side::Right);",laserColor:"#2ce59b",shape:"box",position:[.34,3.78,.28],size:[.56,.08,.05],rotation:[0,0,.68],color:r,explodeVector:[1.2,3.25,1.3]}),i({id:"head-crest-camera",name:"central mohawk telemetry camera",subsystem:"display",categoryLabel:"forge::MainCamera",dims:"140.0x180.0x620.0 mm",mass:"48.0 kg",tris:160,cppComment:"// [52/72] Cụm Camera đỉnh đầu tầm xa",cppStatement:'head.calibrate_main_camera("LONG_RANGE_TELEMETRY");',laserColor:"#2ce59b",shape:"box",position:[0,3.58,0],size:[.14,.16,.6],color:r,explodeVector:[0,2.8,.1]}),i({id:"vulcan-pod-l",name:"60mm head vulcan gun pod [left]",subsystem:"display",categoryLabel:"forge::VulcanPod",dims:"110.0x140.0x180.0 mm",mass:"32.0 kg",tris:110,cppComment:"// [53/72] Pháo Vulcan 60mm gắn thái dương [TRÁI]",cppStatement:"head.load_vulcan_pod(Side::Left, /*rpm=*/1600);",laserColor:"#f5b942",shape:"cylinder",position:[-.28,3.38,.12],size:[.1,.14,.1],rotation:[Math.PI/2,0,0],color:l,explodeVector:[-1.1,2.1,.5]}),i({id:"vulcan-pod-r",name:"60mm head vulcan gun pod [right]",subsystem:"display",categoryLabel:"forge::VulcanPod",dims:"110.0x140.0x180.0 mm",mass:"32.0 kg",tris:110,cppComment:"// [54/72] Pháo Vulcan 60mm gắn thái dương [PHẢI]",cppStatement:"head.load_vulcan_pod(Side::Right, /*rpm=*/1600);",laserColor:"#f5b942",shape:"cylinder",position:[.28,3.38,.12],size:[.1,.14,.1],rotation:[Math.PI/2,0,0],color:l,explodeVector:[1.1,2.1,.5]}),i({id:"cheek-guard-l",name:"cheek vent armor plate [left]",subsystem:"display",categoryLabel:"forge::CheekArmor",dims:"120.0x240.0x320.0 mm",mass:"26.0 kg",tris:100,cppComment:"// [55/72] Giáp má & khe thông khí [TRÁI]",cppStatement:"head.fasten_cheek_guard(Side::Left);",laserColor:"#ff3b5c",shape:"box",position:[-.29,3.18,.08],size:[.08,.24,.32],color:s,explodeVector:[-1.2,1.85,.4]}),i({id:"cheek-guard-r",name:"cheek vent armor plate [right]",subsystem:"display",categoryLabel:"forge::CheekArmor",dims:"120.0x240.0x320.0 mm",mass:"26.0 kg",tris:100,cppComment:"// [56/72] Giáp má & khe thông khí [PHẢI]",cppStatement:"head.fasten_cheek_guard(Side::Right);",laserColor:"#ff3b5c",shape:"box",position:[.29,3.18,.08],size:[.08,.24,.32],color:s,explodeVector:[1.2,1.85,.4]}),h.forEach(({side:m,sign:_,label:g},f)=>{const v=_*.94;i({id:`shoulder-armor-${m}`,name:`heavy shoulder pauldron [${g}]`,subsystem:"keyboard",categoryLabel:"class ShoulderArmor",dims:"640.0x520.0x680.0 mm",mass:"0.58 t",tris:260,cppComment:`// [${57+f*6}/72] Giáp vai cỡ lớn [${g.toUpperCase()}]`,cppStatement:`gundam.mount_shoulder_pauldron(Side::${m==="L"?"Left":"Right"}, "HEAVY_GUNDARIUM");`,laserColor:"#ff3b5c",shape:"box",position:[v,2.78,.02],size:[.58,.44,.64],rotation:[0,0,_*-.14],color:r,explodeVector:[_*1.9,1.2,.2]}),i({id:`shoulder-trim-${m}`,name:`shoulder crimson thruster trim [${g}]`,subsystem:"keyboard",categoryLabel:"forge::ShoulderTrim",dims:"280.0x220.0x720.0 mm",mass:"0.18 t",tris:150,cppComment:`// [${58+f*6}/72] Viền giáp vai đỏ & cánh hướng dòng [${g.toUpperCase()}]`,cppStatement:`gundam.attach_shoulder_vernier(Side::${m==="L"?"Left":"Right"}, 0xd4192c);`,laserColor:"#f5b942",shape:"keycap",position:[v+_*.24,2.86,.02],size:[.24,.18,.68],rotation:[0,0,_*-.25],color:a,explodeVector:[_*2.4,1.45,.2]}),i({id:`upper-arm-${m}`,name:`upper arm bicep servo [${g}]`,subsystem:"keyboard",categoryLabel:"forge::ArmServo",dims:"340.0x480.0x340.0 mm",mass:"0.32 t",tris:160,cppComment:`// [${59+f*6}/72] Bắp tay cơ khí [${g.toUpperCase()}]`,cppStatement:`gundam.seat_bicep_servo(Side::${m==="L"?"Left":"Right"}, /*torque_nm=*/4800);`,laserColor:"#2ce59b",shape:"box",position:[v,2.32,.02],size:[.32,.44,.32],color:r,explodeVector:[_*1.65,.6,.2]}),i({id:`elbow-joint-${m}`,name:`double-jointed titanium elbow [${g}]`,subsystem:"keyboard",categoryLabel:"forge::ElbowJoint",dims:"280.0x240.0x320.0 mm",mass:"0.21 t",tris:140,cppComment:`// [${60+f*6}/72] Khớp khuỷu tay kép [${g.toUpperCase()}]`,cppStatement:`gundam.link_elbow_joint(Side::${m==="L"?"Left":"Right"});`,laserColor:"#f5b942",shape:"cylinder",position:[v,2.02,.04],size:[.26,.2,.26],rotation:[0,0,Math.PI/2],color:s,explodeVector:[_*1.75,.35,.4]}),i({id:`forearm-gauntlet-${m}`,name:`cobalt forearm gauntlet [${g}]`,subsystem:"keyboard",categoryLabel:"class ForearmGauntlet",dims:"360.0x540.0x380.0 mm",mass:"0.41 t",tris:210,cppComment:`// [${61+f*6}/72] Giáp cẳng tay [${g.toUpperCase()}]`,cppStatement:`gundam.mount_forearm_gauntlet(Side::${m==="L"?"Left":"Right"}, 0x183b7a);`,laserColor:"#2ce59b",shape:"box",position:[v,1.66,.18],size:[.34,.5,.36],rotation:[-.35,0,0],color:o,explodeVector:[_*1.85,.1,.75]}),i({id:`mecha-hand-${m}`,name:`articulated manipulator hand [${g}]`,subsystem:"keyboard",categoryLabel:"forge::Manipulator",dims:"240.0x260.0x240.0 mm",mass:"0.14 t",tris:180,cppComment:`// [${62+f*6}/72] Bàn tay máy 5 ngón độc lập [${g.toUpperCase()}]`,cppStatement:`gundam.calibrate_manipulator_hand(Side::${m==="L"?"Left":"Right"});`,laserColor:"#f5b942",shape:"chip",position:[v,1.36,.32],size:[.24,.24,.24],color:s,explodeVector:[_*1.95,-.15,1.1]})}),i({id:"ntd-psycho-gauntlet-l",name:"nt-d psycho-frame forearm emitter [left]",subsystem:"keyboard",categoryLabel:"class PsychoGauntlet",dims:"340.0x520.0x340.0 mm",mass:"0.38 t",tris:240,cppComment:`// [69/72] Bộ phát xung NT-D Psycho-Frame cánh tay trái của ${n.fullName}`,cppStatement:`gundam.activate_ntd_gauntlet("${n.fullName}", "${n.birthDate}", khoa.passions);`,holoLabel:`NT-D :: ${n.fullName} · ${n.birthDate}`,laserColor:"#ff3b5c",shape:"box",position:[-1.12,1.72,.22],size:[.28,.44,.28],rotation:[-.2,0,.08],color:a,emissive:"#ff2a4b",explodeVector:[-1.95,.25,.95]}),i({id:"hyper-beam-rifle",name:"lupo high-energy beam rifle",subsystem:"keyboard",categoryLabel:"class BeamRifle",dims:"220.0x480.0x1560.0 mm",mass:"0.68 t",tris:340,cppComment:"// [70/72] Súng trường năng lượng Hyper Beam Rifle (Tay Phải)",cppStatement:'gundam.equip_beam_rifle("MA_M20_LUPO_RIFLE", /*output_mw=*/8.4);',laserColor:"#2ce59b",shape:"box",position:[.98,1.38,.88],size:[.18,.34,1.48],rotation:[.12,-.08,0],color:s,metalness:.78,roughness:.25,explodeVector:[2.2,.1,1.8]}),i({id:"plasma-beam-blade",name:"ignited plasma beam saber blade",subsystem:"keyboard",categoryLabel:"class PlasmaSaber",dims:"90.0x1650.0x90.0 mm",mass:"0.05 t",tris:180,cppComment:"// [71/72] Lưỡi kiếm ánh sáng Plasma phát quang Hồng/Ngọc",cppStatement:'gundam.ignite_plasma_blade("LACERTA_BEAM_SABER", 0xff2a85);',laserColor:"#ff3b5c",shape:"cylinder",position:[1.02,1.38,1.92],size:[.08,1.15,.08],rotation:[Math.PI/2+.12,0,.08],color:u,emissive:"#ff2a85",explodeVector:[2.5,.25,2.8]}),i({id:"final-gn-chest-core-lock",name:"rx-09 core activation key #72",subsystem:"keyboard",categoryLabel:"static_assert<72>",dims:"160.0x160.0x80.0 mm",mass:"12.0 kg",tris:96,cppComment:`// [72/72] Kích hoạt hoàn tất Robot Gundam RX-09 cho ${n.fullName}!`,cppStatement:'static_assert(gundam.parts() == 72 && khoa.age == 17, "GUNDAM_RX09_LAUNCH_READY");',laserColor:"#2ce59b",shape:"screw",position:[0,2.82,.38],size:[.18,.18,.12],rotation:[Math.PI/2,0,0],color:l,emissive:"#f5b942",explodeVector:[0,1.6,2.2]}),e}cp(lp);const s2=({profile:n,phase:e,assembledCount:t,activeMacroSubsystem:i,explodeFactor:r,selectedPartIndex:s,onSelectPart:o,onSelectSubsystem:a})=>{const l=St.useRef(null),[c,u]=St.useState([]),d=St.useMemo(()=>cp(n),[n]),h=St.useRef(null),p=St.useRef({profile:n,dynamicParts:d,phase:e,assembledCount:t,activeMacroSubsystem:i,explodeFactor:r,selectedPartIndex:s});return St.useEffect(()=>{p.current={profile:n,dynamicParts:d,phase:e,assembledCount:t,activeMacroSubsystem:i,explodeFactor:r,selectedPartIndex:s}},[n,d,e,t,i,r,s]),St.useEffect(()=>{const m=l.current;if(!m)return;const _=m.clientWidth||800,g=m.clientHeight||520,f=new Uv;f.background=null;const v=new hn(34,_/g,.1,100);v.position.set(4.2,3.4,5.8);const y=new UA({antialias:!0,alpha:!0,powerPreference:"high-performance"});y.setSize(_,g),y.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.outputColorSpace=Xt,y.shadowMap.enabled=!0,y.shadowMap.type=iv,y.toneMapping=sv,y.toneMappingExposure=1.08,m.innerHTML="",m.appendChild(y.domElement);const x=new zf(y);x.compileEquirectangularShader();const C=new Mb,b=x.fromScene(C,.04).texture;f.environment=b,C.traverse(ee=>{const Ze=ee;Ze.geometry&&Ze.geometry.dispose()}),x.dispose();const w=new cb("#fffaf2",1.45);f.add(w);const R=new Wf("#fff8eb",2.2);R.position.set(6,11,7.5),R.castShadow=!0,R.shadow.mapSize.width=2048,R.shadow.mapSize.height=2048,R.shadow.camera.near=1,R.shadow.camera.far=28;const T=5.5;R.shadow.camera.left=-T,R.shadow.camera.right=T,R.shadow.camera.top=T,R.shadow.camera.bottom=-T,R.shadow.bias=-5e-4,f.add(R);const E=new Wf("#38bdf8",1.65);E.position.set(-7,5.5,-6),f.add(E);const L=new bc("#ff2a4b",2.4,7.5,1.8);L.position.set(0,2.5,1.3),f.add(L);const G=new bc("#2ce59b",2,5.5,2);G.position.set(0,1.5,1.6),f.add(G);const z=new jn;z.position.y=.012,f.add(z);const K=new Os(1.15,1.24,64);K.rotateX(-Math.PI/2);const Z=new Ln({color:16722507,side:Mn,transparent:!0,opacity:.72,blending:lr}),X=new ct(K,Z);z.add(X);const Q=new Os(1.62,1.68,64);Q.rotateX(-Math.PI/2);const N=new Ln({color:2942363,side:Mn,transparent:!0,opacity:.52,blending:lr}),j=new ct(Q,N);z.add(j);const q=new jn,ce=24;for(let ee=0;ee<ce;ee++){if(ee%2===1)continue;const Ze=ee/ce*Math.PI*2,Qe=new Os(1.38,1.46,8,1,Ze,Math.PI*2/(ce*1.4));Qe.rotateX(-Math.PI/2);const ot=new Ln({color:16765286,side:Mn,transparent:!0,opacity:.55,blending:lr});q.add(new ct(Qe,ot))}z.add(q);const Ae=new rp(1.32,.018,12,72);Ae.rotateX(Math.PI/2);const rt=new Ln({color:2942363,transparent:!0,opacity:.68,blending:lr}),H=new ct(Ae,rt);H.position.y=2,f.add(H);const ie=new Os(.4,.52,48);ie.rotateX(-Math.PI/2);const ye=new Ln({color:16722507,side:Mn,transparent:!0,opacity:0,blending:lr}),ae=new ct(ie,ye);ae.position.y=.03,f.add(ae);const Ue=()=>{const ee=document.createElement("canvas");ee.width=64,ee.height=64;const Ze=ee.getContext("2d");if(Ze){const Qe=Ze.createRadialGradient(32,32,0,32,32,32);Qe.addColorStop(0,"rgba(255, 255, 255, 1)"),Qe.addColorStop(.35,"rgba(255, 95, 125, 0.85)"),Qe.addColorStop(.75,"rgba(255, 42, 75, 0.25)"),Qe.addColorStop(1,"rgba(0, 0, 0, 0)"),Ze.fillStyle=Qe,Ze.fillRect(0,0,64,64)}return new GA(ee)},Fe=220,ze=new Float32Array(Fe*3),mt=new Float32Array(Fe*3),Ve=new Float32Array(Fe*4),Tt=new De("#ff2a4b"),F=new De("#2ce59b"),xn=new De("#ffd166");for(let ee=0;ee<Fe;ee++){const Ze=Math.random()*Math.PI*2,Qe=.45+Math.random()*1.45,ot=Math.random()*4.4,Vt=.008+Math.random()*.016;ze[ee*3]=Math.cos(Ze)*Qe,ze[ee*3+1]=ot,ze[ee*3+2]=Math.sin(Ze)*Qe;const Ct=ee%3===0?F:ee%4===0?xn:Tt;mt[ee*3]=Ct.r,mt[ee*3+1]=Ct.g,mt[ee*3+2]=Ct.b,Ve[ee*4]=Ze,Ve[ee*4+1]=Qe,Ve[ee*4+2]=Vt,Ve[ee*4+3]=Math.random()*Math.PI*2}const Ke=new cn;Ke.setAttribute("position",new Zt(ze,3)),Ke.setAttribute("color",new Zt(mt,3));const Je=Ue(),Ne=new ip({size:.14,map:Je,vertexColors:!0,transparent:!0,opacity:.88,depthWrite:!1,blending:lr}),_t=new Ov(Ke,Ne);f.add(_t);const Ie=new ka(24,24),A=new WA({opacity:.45}),S=new ct(Ie,A);S.rotation.x=-Math.PI/2,S.position.y=-.02,S.receiveShadow=!0,f.add(S);const O=new Sb(18,36,7215928,2361107);O.position.y=-.01,f.add(O);const $=new Map,J=new Map,W=new Map,we=new Map,de=new Map,xe=new Map,et=[],se=new ed(new Wi(1,1,1)),Ee=new Ks({color:16726876,transparent:!0,opacity:.9}),Re=new Ac(se,Ee);Re.visible=!1,f.add(Re);const Pe=new jn;f.add(Pe);let Se=!1;p.current.dynamicParts.forEach(ee=>{const Ze=new jn;Ze.userData={partIndex:ee.index,subsystem:ee.subsystem};const Qe=new I(ee.position[0],ee.position[1],ee.position[2]),ot=new I(ee.explodeVector[0],ee.explodeVector[1],ee.explodeVector[2]),Vt=new I(ee.size[0],ee.size[1],ee.size[2]);Ze.position.copy(Qe),Pe.add(Ze),$.set(ee.index,Ze),J.set(ee.index,Qe),W.set(ee.index,ot),we.set(ee.index,Vt);const Ct=new ed(new Wi(.25,.25,.25)),M=new Ks({color:2942363,transparent:!0,opacity:.2}),P=new Ac(Ct,M);P.position.copy(Qe),P.visible=!1,Pe.add(P),de.set(ee.index,P);const k=new cn().setFromPoints([Qe.clone(),Qe.clone()]),B=new Ks({color:13180984,transparent:!0,opacity:0}),U=new $c(k,B);U.visible=!1,f.add(U),xe.set(ee.index,U)});let qe=!1;const He=window.setTimeout(()=>{if(qe)return;new Eb().load("/models/gundam_unicorn.glb",Ze=>{if(qe)return;const Qe=Ze.scene;Qe.updateMatrixWorld(!0);const ot=new qn().setFromObject(Qe),Vt=ot.getSize(new I),Ct=ot.getCenter(new I),M=4.25,P=M/Math.max(1e-4,Vt.y);Pe.position.set(0,0,0),Pe.rotation.set(0,0,0),Pe.updateMatrixWorld(!0);const k=new jn;k.add(Qe),k.scale.setScalar(P),k.position.set(-Ct.x*P,-ot.min.y*P,-Ct.z*P),f.add(k),k.updateMatrixWorld(!0);const B=[];Qe.traverse(he=>{const le=he;if(!le.isMesh)return;le.castShadow=!0,le.receiveShadow=!0,(Array.isArray(le.material)?le.material:[le.material]).forEach(ge=>{const We=ge;We&&(We.envMapIntensity=1.15,typeof We.roughness=="number"&&(We.roughness=Bf.clamp(We.roughness,.22,.48)),typeof We.metalness=="number"&&(We.metalness=Bf.clamp(We.metalness,.25,.82)),We.emissive&&We.emissive.r>.4&&We.emissive.g<.25&&(We.emissiveIntensity=1.85,et.includes(We)||et.push(We)),We.needsUpdate=!0)});const Ce=new qn().setFromObject(le),oe=Ce.getCenter(new I),Be=Ce.getSize(new I),re=Math.abs(oe.x),Te=M;let Ge=3,ke=oe.y;oe.y>.855*Te?(Ge=4,ke=oe.y+oe.z*.2):re>.13*Te&&oe.y>.465*Te?(Ge=5,ke=(oe.x<0?0:10)+(Te-oe.y)):oe.y<.51*Te&&re>.045*Te?(Ge=2,ke=(oe.x<0?0:10)+oe.y):oe.y>=.46*Te&&oe.y<=.65*Te&&re<=.16*Te?(Ge=1,ke=oe.y):(Ge=3,ke=oe.y-oe.z*.3),B.push({mesh:le,box:Ce.clone(),center:oe,size:Be,bucketOrder:Ge,sortKey:ke})}),B.sort((he,le)=>he.bucketOrder!==le.bucketOrder?he.bucketOrder-le.bucketOrder:he.sortKey-le.sortKey);const U=72,ne=Array.from({length:U},()=>[]);B.forEach((he,le)=>{const be=Math.min(U-1,Math.floor(le/Math.max(1,B.length)*U));ne[be].push(he)});const fe=new I(0,M*.54,0);for(let he=0;he<U;he++){const le=1+he,be=ne[he],Ce=$.get(le),oe=de.get(le);if(!Ce||be.length===0)continue;for(;Ce.children.length>0;)Ce.remove(Ce.children[0]);Ce.rotation.set(0,0,0);const Be=new qn;be.forEach(ge=>{Be.union(ge.box)});const re=Be.getCenter(new I),Te=Be.getSize(new I);Ce.position.copy(re),Ce.updateMatrixWorld(!0),be.forEach(ge=>{Ce.attach(ge.mesh)}),J.set(le,re.clone()),we.set(le,new I(Math.max(.18,Te.x),Math.max(.18,Te.y),Math.max(.18,Te.z)));const Ge=re.clone().sub(fe),ke=new I(Ge.x*1.45+(Math.abs(Ge.x)<.15?0:Math.sign(Ge.x)*.35),Ge.y*.65+(re.y>M*.82?.85:.1),Ge.z*1.65+(Ge.z>=0?.45:-.55));W.set(le,ke),oe&&(oe.geometry.dispose(),oe.geometry=new ed(new Wi(Math.max(.18,Te.x),Math.max(.18,Te.y),Math.max(.18,Te.z))),oe.position.copy(re),oe.rotation.set(0,0,0))}f.remove(k),Se=!0},void 0,Ze=>{console.error("Failed to load gundam_unicorn.glb:",Ze)})},350),Le={scene:f,camera:v,renderer:y,partGroups:$,partHomePositions:J,partExplodeVectors:W,partBoundingSizes:we,ghostMeshes:de,explodeLines:xe,highlightBox:Re,psychoMaterials:et,targetCamPos:new I(3.4,3.1,5.8),targetLookAt:new I(.48,2.05,0),currentLookAt:new I(.48,2.05,0),userOrbitAngles:{theta:.52,phi:1.12,radius:6.8,isDragging:!1,manualOverrideUntil:0}};h.current=Le;const D=new xb,ue=new it;let V=0,Y=0,_e=0,me=0;const Oe=ee=>{Le.userOrbitAngles.isDragging=!0,V=ee.clientX,Y=ee.clientY,_e=ee.clientX,me=ee.clientY},yt=ee=>{var Vt,Ct;const Ze=y.domElement.getBoundingClientRect();if(ue.x=(ee.clientX-Ze.left)/Ze.width*2-1,ue.y=-((ee.clientY-Ze.top)/Ze.height)*2+1,Le.userOrbitAngles.isDragging){const M=ee.clientX-V,P=ee.clientY-Y;V=ee.clientX,Y=ee.clientY,Le.userOrbitAngles.theta-=M*.0075,Le.userOrbitAngles.phi=Math.max(.25,Math.min(1.48,Le.userOrbitAngles.phi-P*.0065)),Le.userOrbitAngles.manualOverrideUntil=performance.now()+5500;return}const Qe=[];$.forEach(M=>{M.visible&&M.children.length>0&&Qe.push(M)}),D.setFromCamera(ue,v);const ot=D.intersectObjects(Qe,!0);if(ot.length>0){let M=ot[0].object;for(;M&&!((Vt=M.userData)!=null&&Vt.partIndex);)M=M.parent;if((Ct=M==null?void 0:M.userData)!=null&&Ct.partIndex){y.domElement.style.cursor="pointer";return}}y.domElement.style.cursor="grab"},Ut=ee=>{var Qe,ot;if(Le.userOrbitAngles.isDragging=!1,Math.hypot(ee.clientX-_e,ee.clientY-me)<6){const Vt=y.domElement.getBoundingClientRect();ue.x=(ee.clientX-Vt.left)/Vt.width*2-1,ue.y=-((ee.clientY-Vt.top)/Vt.height)*2+1;const Ct=[];$.forEach(P=>{P.visible&&P.children.length>0&&Ct.push(P)}),D.setFromCamera(ue,v);const M=D.intersectObjects(Ct,!0);if(M.length>0){let P=M[0].object;for(;P&&!((Qe=P.userData)!=null&&Qe.partIndex);)P=P.parent;if((ot=P==null?void 0:P.userData)!=null&&ot.partIndex){const k=p.current.dynamicParts.find(B=>B.index===P.userData.partIndex);k&&(o(k),a(k.subsystem))}}}},lt=ee=>{ee.preventDefault(),Le.userOrbitAngles.radius=Math.max(3.2,Math.min(13.5,Le.userOrbitAngles.radius+ee.deltaY*.004)),Le.userOrbitAngles.manualOverrideUntil=performance.now()+4500},Jt=y.domElement;Jt.addEventListener("pointerdown",Oe),window.addEventListener("pointermove",yt),window.addEventListener("pointerup",Ut),Jt.addEventListener("wheel",lt,{passive:!1});const On=()=>{if(!m)return;const ee=m.clientWidth||800,Ze=m.clientHeight||520;v.aspect=ee/Ze,v.updateProjectionMatrix(),y.setSize(ee,Ze)};window.addEventListener("resize",On);let as=0,To=0,Jn=0,Bn=1;const wo=new Map,Nr=new De("#ff1e42"),Ai=new De("#00f59b"),Ao=ee=>{as=requestAnimationFrame(Ao);const{dynamicParts:Ze,phase:Qe,assembledCount:ot,activeMacroSubsystem:Vt,explodeFactor:Ct,selectedPartIndex:M}=p.current;if(ot!==Jn){for(let re=Jn+1;re<=ot;re++)wo.set(re,ee);Jn=ot,Bn=0}else ot>=72&&Bn>=1&&Math.sin(ee*.002)>.98&&(Bn=0);const P=ot>=72?Math.pow(Math.max(0,Math.sin(ee*.0011)),2)*.85:0,k=1.85+Math.sin(ee*.0042)*.55;Le.psychoMaterials.forEach(re=>{re.emissive.copy(Nr).lerp(Ai,P),re.emissiveIntensity=k+Ct*.9}),L.color.copy(Nr).lerp(Ai,P),L.intensity=1.8+Math.sin(ee*.0042)*.5,X.rotation.z=ee*.0012,j.rotation.z=-ee*8e-4,q.rotation.y=-ee*95e-5;const B=1+Math.sin(ee*.003)*.035;X.scale.setScalar(B),Z.color.copy(Nr).lerp(Ai,P);const U=(Math.sin(ee*.0022)+1)*.5,ne=.12+U*4.1;H.position.y=ne;const fe=.72+Math.sin(U*Math.PI)*.45;if(H.scale.set(fe,fe,1),H.visible=Qe==="ASSEMBLING"&&ot<72,rt.opacity=.68,G.position.set(Math.sin(ee*.003)*1.4,ne,Math.cos(ee*.003)*1.4),Bn<1){Bn=Math.min(1,Bn+.028);const re=.5+Bn*4.2;ae.scale.setScalar(re),ye.opacity=(1-Bn)*.75,ye.color.copy(Nr).lerp(Ai,P),ae.visible=!0}else ae.visible=!1;const he=Ke.attributes.position;for(let re=0;re<Fe;re++){const Te=Ve[re*4],Ge=Ve[re*4+1],ke=Ve[re*4+2],ge=Ve[re*4+3];let We=he.getY(re)+ke;We>4.45&&(We=.05);const $e=Te+ee*9e-4+We*.55,Pt=Ge+Math.sin(ee*.0025+ge)*.16+Ct*.6;he.setXYZ(re,Math.cos($e)*Pt,We,Math.sin($e)*Pt)}if(he.needsUpdate=!0,ee<Le.userOrbitAngles.manualOverrideUntil){const{theta:re,phi:Te,radius:Ge}=Le.userOrbitAngles;Le.targetCamPos.set(Ge*Math.sin(Te)*Math.sin(re)+.48,Ge*Math.cos(Te)+1.5,Ge*Math.sin(Te)*Math.cos(re)),Le.targetLookAt.set(.48,2.05,0)}else if(Qe==="MACRO_TOUR"&&Vt){const re=r2.find(Te=>Te.id===Vt);re&&(Le.targetCamPos.set(re.cameraPos[0],re.cameraPos[1],re.cameraPos[2]),Le.targetLookAt.set(re.lookAt[0],re.lookAt[1],re.lookAt[2]))}else if(Qe==="TAKEN_APART"||Ct>.15){const re=ee*38e-5;Le.targetCamPos.set(Math.sin(re)*6.5+2.6,4.15,Math.cos(re)*6.5+2.6),Le.targetLookAt.set(.48,2.05,0)}else{const re=Math.sin(ee*45e-5)*.72;Le.targetCamPos.set(3.2+re,3.1,5.8),Le.targetLookAt.set(.48,2.05,.05)}if(v.position.lerp(Le.targetCamPos,.065),Le.currentLookAt.lerp(Le.targetLookAt,.075),v.lookAt(Le.currentLookAt),Se){const re=ee*.001,Te=Math.max(.25,1-Ct*.85);Pe.position.y=(Math.sin(re*2)*.055+.04)*Te,Pe.rotation.set(Math.sin(re*1.4)*.025*Te,Math.sin(re*.65)*.34*Te,Math.cos(re*1.4)*.02*Te)}Ze.forEach(re=>{const Te=$.get(re.index),Ge=de.get(re.index),ke=xe.get(re.index),ge=J.get(re.index),We=W.get(re.index);if(!Te||!Ge||!ke||!ge||!We)return;const $e=Te.children.length>0,Pt=$e&&re.index<=ot;if(Te.visible=Pt,Ge.visible=$e&&!Pt&&re.index<=ot+6,Pt){const bn=wo.get(re.index)??0,Ht=Math.max(0,ee-bn),pi=Math.min(1,Ht/420),dt=Math.pow(1-pi,3)*.85,Yt=Math.max(Ct,dt),bi=We.x*Yt,en=We.y*Yt,zn=We.z*Yt,mi=ge.x+bi,Ba=ge.y+en,Wv=ge.z+zn;Te.position.lerp(new I(mi,Ba,Wv),.24),ke.visible=!1}}),Pe.updateMatrixWorld(!0);const be=Qe==="ASSEMBLING"&&ot>0&&ot<72?ot:M,Ce=be?Ze.find(re=>re.index===be):null,oe=be?$.get(be):null,Be=be?we.get(be):null;if(Ce&&oe&&oe.visible&&oe.children.length>0&&Be?(Re.visible=!0,oe.getWorldPosition(Re.position),Re.scale.set(Be.x+.1,Be.y+.1,Be.z+.1),Re.material.color.set(Ce.laserColor)):Re.visible=!1,y.render(f,v),ee-To>36&&m){To=ee;const re=m.clientWidth,Te=m.clientHeight;if(Qe==="ASSEMBLING"&&ot>0&&ot<72){const Ge=[ot,Math.max(1,ot-1),Math.max(1,ot-2)],ke=[];Ge.forEach((ge,We)=>{const $e=Ze.find(zn=>zn.index===ge),Pt=$.get(ge);if(!$e||!Pt||Pt.children.length===0)return;const bn=new I;Pt.getWorldPosition(bn),bn.project(v);const Ht=(bn.x*.5+.5)*re,pi=(-(bn.y*.5)+.5)*Te,dt=We===0?4:re*(.18+We*.26),Yt=We===0?Te*.68:Te-6,bi=(dt+Ht)*.5+(We===0?80:0),en=Math.min(Yt,pi)-(95+We*35);ke.push({id:`laser-${ge}-${We}`,startX:dt,startY:Yt,ctrlX:bi,ctrlY:en,endX:Ht,endY:pi,color:$e.laserColor,cppCode:$e.cppStatement})}),u(ke)}else u(Ge=>Ge.length>0?[]:Ge)}};return as=requestAnimationFrame(Ao),()=>{qe=!0,window.clearTimeout(He),cancelAnimationFrame(as),Jt.removeEventListener("pointerdown",Oe),window.removeEventListener("pointermove",yt),window.removeEventListener("pointerup",Ut),Jt.removeEventListener("wheel",lt),window.removeEventListener("resize",On),Je.dispose(),b.dispose(),y.dispose()}},[n]),ve.jsxs("div",{className:"forge-viewport-stage",children:[ve.jsx("div",{ref:l,className:"forge-webgl-canvas"}),c.length>0&&ve.jsxs("svg",{className:"forge-laser-svg","aria-hidden":"true",children:[ve.jsx("defs",{children:ve.jsxs("filter",{id:"laserGlow",x:"-30%",y:"-30%",width:"160%",height:"160%",children:[ve.jsx("feGaussianBlur",{stdDeviation:"4",result:"blur"}),ve.jsxs("feMerge",{children:[ve.jsx("feMergeNode",{in:"blur"}),ve.jsx("feMergeNode",{in:"SourceGraphic"})]})]})}),c.map((m,_)=>{const g=`M ${m.startX} ${m.startY} Q ${m.ctrlX} ${m.ctrlY} ${m.endX} ${m.endY}`;return ve.jsxs("g",{filter:"url(#laserGlow)",children:[ve.jsx("path",{d:g,fill:"none",stroke:m.color,strokeWidth:_===0?6:3.5,strokeOpacity:_===0?.32:.18,strokeLinecap:"round"}),ve.jsx("path",{d:g,fill:"none",stroke:m.color,strokeWidth:_===0?2.4:1.5,strokeDasharray:"10 5",className:"laser-dash-anim"}),ve.jsx("circle",{cx:m.startX,cy:m.startY,r:_===0?6:4,fill:m.color}),ve.jsx("circle",{cx:m.endX,cy:m.endY,r:_===0?11:6,fill:"none",stroke:m.color,strokeWidth:"2"}),ve.jsx("circle",{cx:m.endX,cy:m.endY,r:_===0?4.5:2.5,fill:"#ffffff"})]},m.id)})]})]})},o2=()=>{const[n]=St.useState(lp),e=St.useMemo(()=>cp(n),[n]),[t,i]=St.useState("ASSEMBLING"),[r,s]=St.useState(1),[o,a]=St.useState("connect"),[l]=St.useState(0),[c,u]=St.useState(!0),[d,h]=St.useState(null);return St.useEffect(()=>{if(!c)return;const p=window.setInterval(()=>{s(m=>m<72?m+1:(i("COMPLETE"),u(!1),h(null),72))},105);return()=>window.clearInterval(p)},[c]),ve.jsxs("div",{className:"forge-desktop-frame",children:[ve.jsx("div",{className:"forge-3d-background","aria-label":"3D RX-0 Unicorn Gundam Background",children:ve.jsx(s2,{profile:n,phase:t,assembledCount:r,activeMacroSubsystem:o,explodeFactor:l,selectedPartIndex:(d==null?void 0:d.index)??null,onSelectPart:p=>{h(p)},onSelectSubsystem:p=>{a(p)}})}),ve.jsx(yS,{profile:n,phase:t,assembledCount:r,onSelectSubsystem:p=>{u(!1),i("MACRO_TOUR"),s(72),a(p)},onSelectPartIndex:p=>{const m=e.find(_=>_.index===p);m&&(h(m),a(m.subsystem))}})]})};od.createRoot(document.getElementById("root")).render(ve.jsx(ay.StrictMode,{children:ve.jsx(o2,{})}));
