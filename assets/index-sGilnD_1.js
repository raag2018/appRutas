function CT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function AT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Jv={exports:{}},Pc={},Zv={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ba=Symbol.for("react.element"),PT=Symbol.for("react.portal"),kT=Symbol.for("react.fragment"),xT=Symbol.for("react.strict_mode"),bT=Symbol.for("react.profiler"),NT=Symbol.for("react.provider"),OT=Symbol.for("react.context"),DT=Symbol.for("react.forward_ref"),LT=Symbol.for("react.suspense"),VT=Symbol.for("react.memo"),MT=Symbol.for("react.lazy"),eg=Symbol.iterator;function FT(t){return t===null||typeof t!="object"?null:(t=eg&&t[eg]||t["@@iterator"],typeof t=="function"?t:null)}var e_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},t_=Object.assign,n_={};function Js(t,e,n){this.props=t,this.context=e,this.refs=n_,this.updater=n||e_}Js.prototype.isReactComponent={};Js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function r_(){}r_.prototype=Js.prototype;function jf(t,e,n){this.props=t,this.context=e,this.refs=n_,this.updater=n||e_}var zf=jf.prototype=new r_;zf.constructor=jf;t_(zf,Js.prototype);zf.isPureReactComponent=!0;var tg=Array.isArray,i_=Object.prototype.hasOwnProperty,Bf={current:null},s_={key:!0,ref:!0,__self:!0,__source:!0};function o_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)i_.call(e,r)&&!s_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ba,type:t,key:s,ref:o,props:i,_owner:Bf.current}}function $T(t,e){return{$$typeof:Ba,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ba}function UT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ng=/\/+/g;function Sh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?UT(""+t.key):e.toString(36)}function ou(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ba:case PT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Sh(o,0):r,tg(i)?(n="",t!=null&&(n=t.replace(ng,"$&/")+"/"),ou(i,e,n,"",function(h){return h})):i!=null&&(Hf(i)&&(i=$T(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ng,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",tg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Sh(s,l);o+=ou(s,e,n,u,i)}else if(u=FT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Sh(s,l++),o+=ou(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ol(t,e,n){if(t==null)return t;var r=[],i=0;return ou(t,r,"","",function(s){return e.call(n,s,i++)}),r}function jT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Dt={current:null},au={transition:null},zT={ReactCurrentDispatcher:Dt,ReactCurrentBatchConfig:au,ReactCurrentOwner:Bf};function a_(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:Ol,forEach:function(t,e,n){Ol(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ol(t,function(){e++}),e},toArray:function(t){return Ol(t,function(e){return e})||[]},only:function(t){if(!Hf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=Js;oe.Fragment=kT;oe.Profiler=bT;oe.PureComponent=jf;oe.StrictMode=xT;oe.Suspense=LT;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zT;oe.act=a_;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=t_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Bf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)i_.call(e,u)&&!s_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Ba,type:t.type,key:i,ref:s,props:r,_owner:o}};oe.createContext=function(t){return t={$$typeof:OT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:NT,_context:t},t.Consumer=t};oe.createElement=o_;oe.createFactory=function(t){var e=o_.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:DT,render:t}};oe.isValidElement=Hf;oe.lazy=function(t){return{$$typeof:MT,_payload:{_status:-1,_result:t},_init:jT}};oe.memo=function(t,e){return{$$typeof:VT,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=au.transition;au.transition={};try{t()}finally{au.transition=e}};oe.unstable_act=a_;oe.useCallback=function(t,e){return Dt.current.useCallback(t,e)};oe.useContext=function(t){return Dt.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return Dt.current.useDeferredValue(t)};oe.useEffect=function(t,e){return Dt.current.useEffect(t,e)};oe.useId=function(){return Dt.current.useId()};oe.useImperativeHandle=function(t,e,n){return Dt.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return Dt.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return Dt.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return Dt.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return Dt.current.useReducer(t,e,n)};oe.useRef=function(t){return Dt.current.useRef(t)};oe.useState=function(t){return Dt.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return Dt.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return Dt.current.useTransition()};oe.version="18.3.1";Zv.exports=oe;var A=Zv.exports;const re=AT(A),BT=CT({__proto__:null,default:re},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HT=A,WT=Symbol.for("react.element"),qT=Symbol.for("react.fragment"),GT=Object.prototype.hasOwnProperty,KT=HT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,QT={key:!0,ref:!0,__self:!0,__source:!0};function l_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)GT.call(e,r)&&!QT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:WT,type:t,key:s,ref:o,props:i,_owner:KT.current}}Pc.Fragment=qT;Pc.jsx=l_;Pc.jsxs=l_;Jv.exports=Pc;var Q=Jv.exports,pd={},u_={exports:{}},Jt={},c_={exports:{}},h_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,W){var K=z.length;z.push(W);e:for(;0<K;){var ce=K-1>>>1,J=z[ce];if(0<i(J,W))z[ce]=W,z[K]=J,K=ce;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var W=z[0],K=z.pop();if(K!==W){z[0]=K;e:for(var ce=0,J=z.length,ge=J>>>1;ce<ge;){var Ae=2*(ce+1)-1,qe=z[Ae],Pe=Ae+1,Ze=z[Pe];if(0>i(qe,K))Pe<J&&0>i(Ze,qe)?(z[ce]=Ze,z[Pe]=K,ce=Pe):(z[ce]=qe,z[Ae]=K,ce=Ae);else if(Pe<J&&0>i(Ze,K))z[ce]=Ze,z[Pe]=K,ce=Pe;else break e}}return W}function i(z,W){var K=z.sortIndex-W.sortIndex;return K!==0?K:z.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,m=3,S=!1,C=!1,P=!1,x=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(z){for(var W=n(h);W!==null;){if(W.callback===null)r(h);else if(W.startTime<=z)r(h),W.sortIndex=W.expirationTime,e(u,W);else break;W=n(h)}}function N(z){if(P=!1,E(z),!C)if(n(u)!==null)C=!0,Vt(V);else{var W=n(h);W!==null&&$e(N,W.startTime-z)}}function V(z,W){C=!1,P&&(P=!1,w(y),y=-1),S=!0;var K=m;try{for(E(W),p=n(u);p!==null&&(!(p.expirationTime>W)||z&&!k());){var ce=p.callback;if(typeof ce=="function"){p.callback=null,m=p.priorityLevel;var J=ce(p.expirationTime<=W);W=t.unstable_now(),typeof J=="function"?p.callback=J:p===n(u)&&r(u),E(W)}else r(u);p=n(u)}if(p!==null)var ge=!0;else{var Ae=n(h);Ae!==null&&$e(N,Ae.startTime-W),ge=!1}return ge}finally{p=null,m=K,S=!1}}var L=!1,v=null,y=-1,T=5,R=-1;function k(){return!(t.unstable_now()-R<T)}function b(){if(v!==null){var z=t.unstable_now();R=z;var W=!0;try{W=v(!0,z)}finally{W?I():(L=!1,v=null)}}else L=!1}var I;if(typeof _=="function")I=function(){_(b)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,bt=Le.port2;Le.port1.onmessage=b,I=function(){bt.postMessage(null)}}else I=function(){x(b,0)};function Vt(z){v=z,L||(L=!0,I())}function $e(z,W){y=x(function(){z(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){C||S||(C=!0,Vt(V))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var W=3;break;default:W=m}var K=m;m=W;try{return z()}finally{m=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,W){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var K=m;m=z;try{return W()}finally{m=K}},t.unstable_scheduleCallback=function(z,W,K){var ce=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ce+K:ce):K=ce,z){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=K+J,z={id:f++,callback:W,priorityLevel:z,startTime:K,expirationTime:J,sortIndex:-1},K>ce?(z.sortIndex=K,e(h,z),n(u)===null&&z===n(h)&&(P?(w(y),y=-1):P=!0,$e(N,K-ce))):(z.sortIndex=J,e(u,z),C||S||(C=!0,Vt(V))),z},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(z){var W=m;return function(){var K=m;m=W;try{return z.apply(this,arguments)}finally{m=K}}}})(h_);c_.exports=h_;var YT=c_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XT=A,Xt=YT;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d_=new Set,pa={};function $i(t,e){xs(t,e),xs(t+"Capture",e)}function xs(t,e){for(pa[t]=e,t=0;t<e.length;t++)d_.add(e[t])}var tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),md=Object.prototype.hasOwnProperty,JT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rg={},ig={};function ZT(t){return md.call(ig,t)?!0:md.call(rg,t)?!1:JT.test(t)?ig[t]=!0:(rg[t]=!0,!1)}function eI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function tI(t,e,n,r){if(e===null||typeof e>"u"||eI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){yt[t]=new Lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];yt[e]=new Lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){yt[t]=new Lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){yt[t]=new Lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){yt[t]=new Lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){yt[t]=new Lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){yt[t]=new Lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){yt[t]=new Lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){yt[t]=new Lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wf=/[\-:]([a-z])/g;function qf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wf,qf);yt[e]=new Lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wf,qf);yt[e]=new Lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wf,qf);yt[e]=new Lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){yt[t]=new Lt(t,1,!1,t.toLowerCase(),null,!1,!1)});yt.xlinkHref=new Lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){yt[t]=new Lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gf(t,e,n,r){var i=yt.hasOwnProperty(e)?yt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tI(e,n,i,r)&&(n=null),r||i===null?ZT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var lr=XT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Dl=Symbol.for("react.element"),os=Symbol.for("react.portal"),as=Symbol.for("react.fragment"),Kf=Symbol.for("react.strict_mode"),gd=Symbol.for("react.profiler"),f_=Symbol.for("react.provider"),p_=Symbol.for("react.context"),Qf=Symbol.for("react.forward_ref"),yd=Symbol.for("react.suspense"),vd=Symbol.for("react.suspense_list"),Yf=Symbol.for("react.memo"),Sr=Symbol.for("react.lazy"),m_=Symbol.for("react.offscreen"),sg=Symbol.iterator;function Do(t){return t===null||typeof t!="object"?null:(t=sg&&t[sg]||t["@@iterator"],typeof t=="function"?t:null)}var be=Object.assign,Rh;function Bo(t){if(Rh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Rh=e&&e[1]||""}return`
`+Rh+t}var Ch=!1;function Ah(t,e){if(!t||Ch)return"";Ch=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Ch=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bo(t):""}function nI(t){switch(t.tag){case 5:return Bo(t.type);case 16:return Bo("Lazy");case 13:return Bo("Suspense");case 19:return Bo("SuspenseList");case 0:case 2:case 15:return t=Ah(t.type,!1),t;case 11:return t=Ah(t.type.render,!1),t;case 1:return t=Ah(t.type,!0),t;default:return""}}function _d(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case as:return"Fragment";case os:return"Portal";case gd:return"Profiler";case Kf:return"StrictMode";case yd:return"Suspense";case vd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case p_:return(t.displayName||"Context")+".Consumer";case f_:return(t._context.displayName||"Context")+".Provider";case Qf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yf:return e=t.displayName||null,e!==null?e:_d(t.type)||"Memo";case Sr:e=t._payload,t=t._init;try{return _d(t(e))}catch{}}return null}function rI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _d(e);case 8:return e===Kf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function g_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function iI(t){var e=g_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ll(t){t._valueTracker||(t._valueTracker=iI(t))}function y_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=g_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ou(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wd(t,e){var n=e.checked;return be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function og(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function v_(t,e){e=e.checked,e!=null&&Gf(t,"checked",e,!1)}function Ed(t,e){v_(t,e);var n=Xr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Td(t,e.type,n):e.hasOwnProperty("defaultValue")&&Td(t,e.type,Xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ag(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Td(t,e,n){(e!=="number"||Ou(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ho=Array.isArray;function ws(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Xr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Id(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(Ho(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xr(n)}}function __(t,e){var n=Xr(e.value),r=Xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ug(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function w_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?w_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vl,E_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vl=Vl||document.createElement("div"),Vl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sI=["Webkit","ms","Moz","O"];Object.keys(Xo).forEach(function(t){sI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xo[e]=Xo[t]})});function T_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xo.hasOwnProperty(t)&&Xo[t]?(""+e).trim():e+"px"}function I_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=T_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var oI=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rd(t,e){if(e){if(oI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function Cd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ad=null;function Xf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pd=null,Es=null,Ts=null;function cg(t){if(t=qa(t)){if(typeof Pd!="function")throw Error($(280));var e=t.stateNode;e&&(e=Oc(e),Pd(t.stateNode,t.type,e))}}function S_(t){Es?Ts?Ts.push(t):Ts=[t]:Es=t}function R_(){if(Es){var t=Es,e=Ts;if(Ts=Es=null,cg(t),e)for(t=0;t<e.length;t++)cg(e[t])}}function C_(t,e){return t(e)}function A_(){}var Ph=!1;function P_(t,e,n){if(Ph)return t(e,n);Ph=!0;try{return C_(t,e,n)}finally{Ph=!1,(Es!==null||Ts!==null)&&(A_(),R_())}}function ga(t,e){var n=t.stateNode;if(n===null)return null;var r=Oc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var kd=!1;if(tr)try{var Lo={};Object.defineProperty(Lo,"passive",{get:function(){kd=!0}}),window.addEventListener("test",Lo,Lo),window.removeEventListener("test",Lo,Lo)}catch{kd=!1}function aI(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Jo=!1,Du=null,Lu=!1,xd=null,lI={onError:function(t){Jo=!0,Du=t}};function uI(t,e,n,r,i,s,o,l,u){Jo=!1,Du=null,aI.apply(lI,arguments)}function cI(t,e,n,r,i,s,o,l,u){if(uI.apply(this,arguments),Jo){if(Jo){var h=Du;Jo=!1,Du=null}else throw Error($(198));Lu||(Lu=!0,xd=h)}}function Ui(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function k_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hg(t){if(Ui(t)!==t)throw Error($(188))}function hI(t){var e=t.alternate;if(!e){if(e=Ui(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return hg(i),t;if(s===r)return hg(i),e;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function x_(t){return t=hI(t),t!==null?b_(t):null}function b_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=b_(t);if(e!==null)return e;t=t.sibling}return null}var N_=Xt.unstable_scheduleCallback,dg=Xt.unstable_cancelCallback,dI=Xt.unstable_shouldYield,fI=Xt.unstable_requestPaint,Fe=Xt.unstable_now,pI=Xt.unstable_getCurrentPriorityLevel,Jf=Xt.unstable_ImmediatePriority,O_=Xt.unstable_UserBlockingPriority,Vu=Xt.unstable_NormalPriority,mI=Xt.unstable_LowPriority,D_=Xt.unstable_IdlePriority,kc=null,kn=null;function gI(t){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(kc,t,void 0,(t.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:_I,yI=Math.log,vI=Math.LN2;function _I(t){return t>>>=0,t===0?32:31-(yI(t)/vI|0)|0}var Ml=64,Fl=4194304;function Wo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Mu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Wo(l):(s&=o,s!==0&&(r=Wo(s)))}else o=n&~i,o!==0?r=Wo(o):s!==0&&(r=Wo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yn(e),i=1<<n,r|=t[n],e&=~i;return r}function wI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function EI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-yn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=wI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function bd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function L_(){var t=Ml;return Ml<<=1,!(Ml&4194240)&&(Ml=64),t}function kh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ha(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yn(e),t[e]=n}function TI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-yn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Zf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ye=0;function V_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var M_,ep,F_,$_,U_,Nd=!1,$l=[],Lr=null,Vr=null,Mr=null,ya=new Map,va=new Map,Cr=[],II="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fg(t,e){switch(t){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":ya.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":va.delete(e.pointerId)}}function Vo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=qa(e),e!==null&&ep(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function SI(t,e,n,r,i){switch(e){case"focusin":return Lr=Vo(Lr,t,e,n,r,i),!0;case"dragenter":return Vr=Vo(Vr,t,e,n,r,i),!0;case"mouseover":return Mr=Vo(Mr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ya.set(s,Vo(ya.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,va.set(s,Vo(va.get(s)||null,t,e,n,r,i)),!0}return!1}function j_(t){var e=gi(t.target);if(e!==null){var n=Ui(e);if(n!==null){if(e=n.tag,e===13){if(e=k_(n),e!==null){t.blockedOn=e,U_(t.priority,function(){F_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Od(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ad=r,n.target.dispatchEvent(r),Ad=null}else return e=qa(n),e!==null&&ep(e),t.blockedOn=n,!1;e.shift()}return!0}function pg(t,e,n){lu(t)&&n.delete(e)}function RI(){Nd=!1,Lr!==null&&lu(Lr)&&(Lr=null),Vr!==null&&lu(Vr)&&(Vr=null),Mr!==null&&lu(Mr)&&(Mr=null),ya.forEach(pg),va.forEach(pg)}function Mo(t,e){t.blockedOn===e&&(t.blockedOn=null,Nd||(Nd=!0,Xt.unstable_scheduleCallback(Xt.unstable_NormalPriority,RI)))}function _a(t){function e(i){return Mo(i,t)}if(0<$l.length){Mo($l[0],t);for(var n=1;n<$l.length;n++){var r=$l[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Lr!==null&&Mo(Lr,t),Vr!==null&&Mo(Vr,t),Mr!==null&&Mo(Mr,t),ya.forEach(e),va.forEach(e),n=0;n<Cr.length;n++)r=Cr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Cr.length&&(n=Cr[0],n.blockedOn===null);)j_(n),n.blockedOn===null&&Cr.shift()}var Is=lr.ReactCurrentBatchConfig,Fu=!0;function CI(t,e,n,r){var i=ye,s=Is.transition;Is.transition=null;try{ye=1,tp(t,e,n,r)}finally{ye=i,Is.transition=s}}function AI(t,e,n,r){var i=ye,s=Is.transition;Is.transition=null;try{ye=4,tp(t,e,n,r)}finally{ye=i,Is.transition=s}}function tp(t,e,n,r){if(Fu){var i=Od(t,e,n,r);if(i===null)$h(t,e,r,$u,n),fg(t,r);else if(SI(i,t,e,n,r))r.stopPropagation();else if(fg(t,r),e&4&&-1<II.indexOf(t)){for(;i!==null;){var s=qa(i);if(s!==null&&M_(s),s=Od(t,e,n,r),s===null&&$h(t,e,r,$u,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $h(t,e,r,null,n)}}var $u=null;function Od(t,e,n,r){if($u=null,t=Xf(r),t=gi(t),t!==null)if(e=Ui(t),e===null)t=null;else if(n=e.tag,n===13){if(t=k_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $u=t,null}function z_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pI()){case Jf:return 1;case O_:return 4;case Vu:case mI:return 16;case D_:return 536870912;default:return 16}default:return 16}}var br=null,np=null,uu=null;function B_(){if(uu)return uu;var t,e=np,n=e.length,r,i="value"in br?br.value:br.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return uu=i.slice(t,1<r?1-r:void 0)}function cu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ul(){return!0}function mg(){return!1}function Zt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ul:mg,this.isPropagationStopped=mg,this}return be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),e}var Zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rp=Zt(Zs),Wa=be({},Zs,{view:0,detail:0}),PI=Zt(Wa),xh,bh,Fo,xc=be({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ip,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fo&&(Fo&&t.type==="mousemove"?(xh=t.screenX-Fo.screenX,bh=t.screenY-Fo.screenY):bh=xh=0,Fo=t),xh)},movementY:function(t){return"movementY"in t?t.movementY:bh}}),gg=Zt(xc),kI=be({},xc,{dataTransfer:0}),xI=Zt(kI),bI=be({},Wa,{relatedTarget:0}),Nh=Zt(bI),NI=be({},Zs,{animationName:0,elapsedTime:0,pseudoElement:0}),OI=Zt(NI),DI=be({},Zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),LI=Zt(DI),VI=be({},Zs,{data:0}),yg=Zt(VI),MI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$I={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function UI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$I[t])?!!e[t]:!1}function ip(){return UI}var jI=be({},Wa,{key:function(t){if(t.key){var e=MI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?FI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ip,charCode:function(t){return t.type==="keypress"?cu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zI=Zt(jI),BI=be({},xc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vg=Zt(BI),HI=be({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ip}),WI=Zt(HI),qI=be({},Zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),GI=Zt(qI),KI=be({},xc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),QI=Zt(KI),YI=[9,13,27,32],sp=tr&&"CompositionEvent"in window,Zo=null;tr&&"documentMode"in document&&(Zo=document.documentMode);var XI=tr&&"TextEvent"in window&&!Zo,H_=tr&&(!sp||Zo&&8<Zo&&11>=Zo),_g=" ",wg=!1;function W_(t,e){switch(t){case"keyup":return YI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function q_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ls=!1;function JI(t,e){switch(t){case"compositionend":return q_(e);case"keypress":return e.which!==32?null:(wg=!0,_g);case"textInput":return t=e.data,t===_g&&wg?null:t;default:return null}}function ZI(t,e){if(ls)return t==="compositionend"||!sp&&W_(t,e)?(t=B_(),uu=np=br=null,ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return H_&&e.locale!=="ko"?null:e.data;default:return null}}var eS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!eS[t.type]:e==="textarea"}function G_(t,e,n,r){S_(r),e=Uu(e,"onChange"),0<e.length&&(n=new rp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ea=null,wa=null;function tS(t){i0(t,0)}function bc(t){var e=hs(t);if(y_(e))return t}function nS(t,e){if(t==="change")return e}var K_=!1;if(tr){var Oh;if(tr){var Dh="oninput"in document;if(!Dh){var Tg=document.createElement("div");Tg.setAttribute("oninput","return;"),Dh=typeof Tg.oninput=="function"}Oh=Dh}else Oh=!1;K_=Oh&&(!document.documentMode||9<document.documentMode)}function Ig(){ea&&(ea.detachEvent("onpropertychange",Q_),wa=ea=null)}function Q_(t){if(t.propertyName==="value"&&bc(wa)){var e=[];G_(e,wa,t,Xf(t)),P_(tS,e)}}function rS(t,e,n){t==="focusin"?(Ig(),ea=e,wa=n,ea.attachEvent("onpropertychange",Q_)):t==="focusout"&&Ig()}function iS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bc(wa)}function sS(t,e){if(t==="click")return bc(e)}function oS(t,e){if(t==="input"||t==="change")return bc(e)}function aS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var En=typeof Object.is=="function"?Object.is:aS;function Ea(t,e){if(En(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!md.call(e,i)||!En(t[i],e[i]))return!1}return!0}function Sg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rg(t,e){var n=Sg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sg(n)}}function Y_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Y_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function X_(){for(var t=window,e=Ou();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ou(t.document)}return e}function op(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function lS(t){var e=X_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Y_(n.ownerDocument.documentElement,n)){if(r!==null&&op(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Rg(n,s);var o=Rg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var uS=tr&&"documentMode"in document&&11>=document.documentMode,us=null,Dd=null,ta=null,Ld=!1;function Cg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ld||us==null||us!==Ou(r)||(r=us,"selectionStart"in r&&op(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ta&&Ea(ta,r)||(ta=r,r=Uu(Dd,"onSelect"),0<r.length&&(e=new rp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=us)))}function jl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var cs={animationend:jl("Animation","AnimationEnd"),animationiteration:jl("Animation","AnimationIteration"),animationstart:jl("Animation","AnimationStart"),transitionend:jl("Transition","TransitionEnd")},Lh={},J_={};tr&&(J_=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function Nc(t){if(Lh[t])return Lh[t];if(!cs[t])return t;var e=cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in J_)return Lh[t]=e[n];return t}var Z_=Nc("animationend"),e0=Nc("animationiteration"),t0=Nc("animationstart"),n0=Nc("transitionend"),r0=new Map,Ag="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ni(t,e){r0.set(t,e),$i(e,[t])}for(var Vh=0;Vh<Ag.length;Vh++){var Mh=Ag[Vh],cS=Mh.toLowerCase(),hS=Mh[0].toUpperCase()+Mh.slice(1);ni(cS,"on"+hS)}ni(Z_,"onAnimationEnd");ni(e0,"onAnimationIteration");ni(t0,"onAnimationStart");ni("dblclick","onDoubleClick");ni("focusin","onFocus");ni("focusout","onBlur");ni(n0,"onTransitionEnd");xs("onMouseEnter",["mouseout","mouseover"]);xs("onMouseLeave",["mouseout","mouseover"]);xs("onPointerEnter",["pointerout","pointerover"]);xs("onPointerLeave",["pointerout","pointerover"]);$i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$i("onBeforeInput",["compositionend","keypress","textInput","paste"]);$i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dS=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function Pg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,cI(r,e,void 0,t),t.currentTarget=null}function i0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Pg(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Pg(i,l,h),s=u}}}if(Lu)throw t=xd,Lu=!1,xd=null,t}function Te(t,e){var n=e[Ud];n===void 0&&(n=e[Ud]=new Set);var r=t+"__bubble";n.has(r)||(s0(e,t,2,!1),n.add(r))}function Fh(t,e,n){var r=0;e&&(r|=4),s0(n,t,r,e)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Ta(t){if(!t[zl]){t[zl]=!0,d_.forEach(function(n){n!=="selectionchange"&&(dS.has(n)||Fh(n,!1,t),Fh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zl]||(e[zl]=!0,Fh("selectionchange",!1,e))}}function s0(t,e,n,r){switch(z_(e)){case 1:var i=CI;break;case 4:i=AI;break;default:i=tp}n=i.bind(null,e,n,t),i=void 0,!kd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $h(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=gi(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}P_(function(){var h=s,f=Xf(n),p=[];e:{var m=r0.get(t);if(m!==void 0){var S=rp,C=t;switch(t){case"keypress":if(cu(n)===0)break e;case"keydown":case"keyup":S=zI;break;case"focusin":C="focus",S=Nh;break;case"focusout":C="blur",S=Nh;break;case"beforeblur":case"afterblur":S=Nh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=gg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=xI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=WI;break;case Z_:case e0:case t0:S=OI;break;case n0:S=GI;break;case"scroll":S=PI;break;case"wheel":S=QI;break;case"copy":case"cut":case"paste":S=LI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=vg}var P=(e&4)!==0,x=!P&&t==="scroll",w=P?m!==null?m+"Capture":null:m;P=[];for(var _=h,E;_!==null;){E=_;var N=E.stateNode;if(E.tag===5&&N!==null&&(E=N,w!==null&&(N=ga(_,w),N!=null&&P.push(Ia(_,N,E)))),x)break;_=_.return}0<P.length&&(m=new S(m,C,null,n,f),p.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",m&&n!==Ad&&(C=n.relatedTarget||n.fromElement)&&(gi(C)||C[nr]))break e;if((S||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,S?(C=n.relatedTarget||n.toElement,S=h,C=C?gi(C):null,C!==null&&(x=Ui(C),C!==x||C.tag!==5&&C.tag!==6)&&(C=null)):(S=null,C=h),S!==C)){if(P=gg,N="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(P=vg,N="onPointerLeave",w="onPointerEnter",_="pointer"),x=S==null?m:hs(S),E=C==null?m:hs(C),m=new P(N,_+"leave",S,n,f),m.target=x,m.relatedTarget=E,N=null,gi(f)===h&&(P=new P(w,_+"enter",C,n,f),P.target=E,P.relatedTarget=x,N=P),x=N,S&&C)t:{for(P=S,w=C,_=0,E=P;E;E=ts(E))_++;for(E=0,N=w;N;N=ts(N))E++;for(;0<_-E;)P=ts(P),_--;for(;0<E-_;)w=ts(w),E--;for(;_--;){if(P===w||w!==null&&P===w.alternate)break t;P=ts(P),w=ts(w)}P=null}else P=null;S!==null&&kg(p,m,S,P,!1),C!==null&&x!==null&&kg(p,x,C,P,!0)}}e:{if(m=h?hs(h):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var V=nS;else if(Eg(m))if(K_)V=oS;else{V=iS;var L=rS}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(V=sS);if(V&&(V=V(t,h))){G_(p,V,n,f);break e}L&&L(t,m,h),t==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&Td(m,"number",m.value)}switch(L=h?hs(h):window,t){case"focusin":(Eg(L)||L.contentEditable==="true")&&(us=L,Dd=h,ta=null);break;case"focusout":ta=Dd=us=null;break;case"mousedown":Ld=!0;break;case"contextmenu":case"mouseup":case"dragend":Ld=!1,Cg(p,n,f);break;case"selectionchange":if(uS)break;case"keydown":case"keyup":Cg(p,n,f)}var v;if(sp)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ls?W_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(H_&&n.locale!=="ko"&&(ls||y!=="onCompositionStart"?y==="onCompositionEnd"&&ls&&(v=B_()):(br=f,np="value"in br?br.value:br.textContent,ls=!0)),L=Uu(h,y),0<L.length&&(y=new yg(y,t,null,n,f),p.push({event:y,listeners:L}),v?y.data=v:(v=q_(n),v!==null&&(y.data=v)))),(v=XI?JI(t,n):ZI(t,n))&&(h=Uu(h,"onBeforeInput"),0<h.length&&(f=new yg("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=v))}i0(p,e)})}function Ia(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Uu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ga(t,n),s!=null&&r.unshift(Ia(t,s,i)),s=ga(t,e),s!=null&&r.push(Ia(t,s,i))),t=t.return}return r}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=ga(n,s),u!=null&&o.unshift(Ia(n,u,l))):i||(u=ga(n,s),u!=null&&o.push(Ia(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var fS=/\r\n?/g,pS=/\u0000|\uFFFD/g;function xg(t){return(typeof t=="string"?t:""+t).replace(fS,`
`).replace(pS,"")}function Bl(t,e,n){if(e=xg(e),xg(t)!==e&&n)throw Error($(425))}function ju(){}var Vd=null,Md=null;function Fd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $d=typeof setTimeout=="function"?setTimeout:void 0,mS=typeof clearTimeout=="function"?clearTimeout:void 0,bg=typeof Promise=="function"?Promise:void 0,gS=typeof queueMicrotask=="function"?queueMicrotask:typeof bg<"u"?function(t){return bg.resolve(null).then(t).catch(yS)}:$d;function yS(t){setTimeout(function(){throw t})}function Uh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),_a(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_a(e)}function Fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ng(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var eo=Math.random().toString(36).slice(2),Pn="__reactFiber$"+eo,Sa="__reactProps$"+eo,nr="__reactContainer$"+eo,Ud="__reactEvents$"+eo,vS="__reactListeners$"+eo,_S="__reactHandles$"+eo;function gi(t){var e=t[Pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[nr]||n[Pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ng(t);t!==null;){if(n=t[Pn])return n;t=Ng(t)}return e}t=n,n=t.parentNode}return null}function qa(t){return t=t[Pn]||t[nr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function Oc(t){return t[Sa]||null}var jd=[],ds=-1;function ri(t){return{current:t}}function Se(t){0>ds||(t.current=jd[ds],jd[ds]=null,ds--)}function we(t,e){ds++,jd[ds]=t.current,t.current=e}var Jr={},xt=ri(Jr),zt=ri(!1),Ci=Jr;function bs(t,e){var n=t.type.contextTypes;if(!n)return Jr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Bt(t){return t=t.childContextTypes,t!=null}function zu(){Se(zt),Se(xt)}function Og(t,e,n){if(xt.current!==Jr)throw Error($(168));we(xt,e),we(zt,n)}function o0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,rI(t)||"Unknown",i));return be({},n,r)}function Bu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jr,Ci=xt.current,we(xt,t),we(zt,zt.current),!0}function Dg(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=o0(t,e,Ci),r.__reactInternalMemoizedMergedChildContext=t,Se(zt),Se(xt),we(xt,t)):Se(zt),we(zt,n)}var Wn=null,Dc=!1,jh=!1;function a0(t){Wn===null?Wn=[t]:Wn.push(t)}function wS(t){Dc=!0,a0(t)}function ii(){if(!jh&&Wn!==null){jh=!0;var t=0,e=ye;try{var n=Wn;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Wn=null,Dc=!1}catch(i){throw Wn!==null&&(Wn=Wn.slice(t+1)),N_(Jf,ii),i}finally{ye=e,jh=!1}}return null}var fs=[],ps=0,Hu=null,Wu=0,tn=[],nn=0,Ai=null,Gn=1,Kn="";function di(t,e){fs[ps++]=Wu,fs[ps++]=Hu,Hu=t,Wu=e}function l0(t,e,n){tn[nn++]=Gn,tn[nn++]=Kn,tn[nn++]=Ai,Ai=t;var r=Gn;t=Kn;var i=32-yn(r)-1;r&=~(1<<i),n+=1;var s=32-yn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Gn=1<<32-yn(e)+i|n<<i|r,Kn=s+t}else Gn=1<<s|n<<i|r,Kn=t}function ap(t){t.return!==null&&(di(t,1),l0(t,1,0))}function lp(t){for(;t===Hu;)Hu=fs[--ps],fs[ps]=null,Wu=fs[--ps],fs[ps]=null;for(;t===Ai;)Ai=tn[--nn],tn[nn]=null,Kn=tn[--nn],tn[nn]=null,Gn=tn[--nn],tn[nn]=null}var Yt=null,Qt=null,Re=!1,mn=null;function u0(t,e){var n=sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Yt=t,Qt=Fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Yt=t,Qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ai!==null?{id:Gn,overflow:Kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Yt=t,Qt=null,!0):!1;default:return!1}}function zd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bd(t){if(Re){var e=Qt;if(e){var n=e;if(!Lg(t,e)){if(zd(t))throw Error($(418));e=Fr(n.nextSibling);var r=Yt;e&&Lg(t,e)?u0(r,n):(t.flags=t.flags&-4097|2,Re=!1,Yt=t)}}else{if(zd(t))throw Error($(418));t.flags=t.flags&-4097|2,Re=!1,Yt=t}}}function Vg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Yt=t}function Hl(t){if(t!==Yt)return!1;if(!Re)return Vg(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fd(t.type,t.memoizedProps)),e&&(e=Qt)){if(zd(t))throw c0(),Error($(418));for(;e;)u0(t,e),e=Fr(e.nextSibling)}if(Vg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qt=Fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qt=null}}else Qt=Yt?Fr(t.stateNode.nextSibling):null;return!0}function c0(){for(var t=Qt;t;)t=Fr(t.nextSibling)}function Ns(){Qt=Yt=null,Re=!1}function up(t){mn===null?mn=[t]:mn.push(t)}var ES=lr.ReactCurrentBatchConfig;function $o(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function Wl(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Mg(t){var e=t._init;return e(t._payload)}function h0(t){function e(w,_){if(t){var E=w.deletions;E===null?(w.deletions=[_],w.flags|=16):E.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function i(w,_){return w=zr(w,_),w.index=0,w.sibling=null,w}function s(w,_,E){return w.index=E,t?(E=w.alternate,E!==null?(E=E.index,E<_?(w.flags|=2,_):E):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,_,E,N){return _===null||_.tag!==6?(_=Kh(E,w.mode,N),_.return=w,_):(_=i(_,E),_.return=w,_)}function u(w,_,E,N){var V=E.type;return V===as?f(w,_,E.props.children,N,E.key):_!==null&&(_.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Sr&&Mg(V)===_.type)?(N=i(_,E.props),N.ref=$o(w,_,E),N.return=w,N):(N=yu(E.type,E.key,E.props,null,w.mode,N),N.ref=$o(w,_,E),N.return=w,N)}function h(w,_,E,N){return _===null||_.tag!==4||_.stateNode.containerInfo!==E.containerInfo||_.stateNode.implementation!==E.implementation?(_=Qh(E,w.mode,N),_.return=w,_):(_=i(_,E.children||[]),_.return=w,_)}function f(w,_,E,N,V){return _===null||_.tag!==7?(_=Ti(E,w.mode,N,V),_.return=w,_):(_=i(_,E),_.return=w,_)}function p(w,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Kh(""+_,w.mode,E),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Dl:return E=yu(_.type,_.key,_.props,null,w.mode,E),E.ref=$o(w,null,_),E.return=w,E;case os:return _=Qh(_,w.mode,E),_.return=w,_;case Sr:var N=_._init;return p(w,N(_._payload),E)}if(Ho(_)||Do(_))return _=Ti(_,w.mode,E,null),_.return=w,_;Wl(w,_)}return null}function m(w,_,E,N){var V=_!==null?_.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return V!==null?null:l(w,_,""+E,N);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Dl:return E.key===V?u(w,_,E,N):null;case os:return E.key===V?h(w,_,E,N):null;case Sr:return V=E._init,m(w,_,V(E._payload),N)}if(Ho(E)||Do(E))return V!==null?null:f(w,_,E,N,null);Wl(w,E)}return null}function S(w,_,E,N,V){if(typeof N=="string"&&N!==""||typeof N=="number")return w=w.get(E)||null,l(_,w,""+N,V);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Dl:return w=w.get(N.key===null?E:N.key)||null,u(_,w,N,V);case os:return w=w.get(N.key===null?E:N.key)||null,h(_,w,N,V);case Sr:var L=N._init;return S(w,_,E,L(N._payload),V)}if(Ho(N)||Do(N))return w=w.get(E)||null,f(_,w,N,V,null);Wl(_,N)}return null}function C(w,_,E,N){for(var V=null,L=null,v=_,y=_=0,T=null;v!==null&&y<E.length;y++){v.index>y?(T=v,v=null):T=v.sibling;var R=m(w,v,E[y],N);if(R===null){v===null&&(v=T);break}t&&v&&R.alternate===null&&e(w,v),_=s(R,_,y),L===null?V=R:L.sibling=R,L=R,v=T}if(y===E.length)return n(w,v),Re&&di(w,y),V;if(v===null){for(;y<E.length;y++)v=p(w,E[y],N),v!==null&&(_=s(v,_,y),L===null?V=v:L.sibling=v,L=v);return Re&&di(w,y),V}for(v=r(w,v);y<E.length;y++)T=S(v,w,y,E[y],N),T!==null&&(t&&T.alternate!==null&&v.delete(T.key===null?y:T.key),_=s(T,_,y),L===null?V=T:L.sibling=T,L=T);return t&&v.forEach(function(k){return e(w,k)}),Re&&di(w,y),V}function P(w,_,E,N){var V=Do(E);if(typeof V!="function")throw Error($(150));if(E=V.call(E),E==null)throw Error($(151));for(var L=V=null,v=_,y=_=0,T=null,R=E.next();v!==null&&!R.done;y++,R=E.next()){v.index>y?(T=v,v=null):T=v.sibling;var k=m(w,v,R.value,N);if(k===null){v===null&&(v=T);break}t&&v&&k.alternate===null&&e(w,v),_=s(k,_,y),L===null?V=k:L.sibling=k,L=k,v=T}if(R.done)return n(w,v),Re&&di(w,y),V;if(v===null){for(;!R.done;y++,R=E.next())R=p(w,R.value,N),R!==null&&(_=s(R,_,y),L===null?V=R:L.sibling=R,L=R);return Re&&di(w,y),V}for(v=r(w,v);!R.done;y++,R=E.next())R=S(v,w,y,R.value,N),R!==null&&(t&&R.alternate!==null&&v.delete(R.key===null?y:R.key),_=s(R,_,y),L===null?V=R:L.sibling=R,L=R);return t&&v.forEach(function(b){return e(w,b)}),Re&&di(w,y),V}function x(w,_,E,N){if(typeof E=="object"&&E!==null&&E.type===as&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Dl:e:{for(var V=E.key,L=_;L!==null;){if(L.key===V){if(V=E.type,V===as){if(L.tag===7){n(w,L.sibling),_=i(L,E.props.children),_.return=w,w=_;break e}}else if(L.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Sr&&Mg(V)===L.type){n(w,L.sibling),_=i(L,E.props),_.ref=$o(w,L,E),_.return=w,w=_;break e}n(w,L);break}else e(w,L);L=L.sibling}E.type===as?(_=Ti(E.props.children,w.mode,N,E.key),_.return=w,w=_):(N=yu(E.type,E.key,E.props,null,w.mode,N),N.ref=$o(w,_,E),N.return=w,w=N)}return o(w);case os:e:{for(L=E.key;_!==null;){if(_.key===L)if(_.tag===4&&_.stateNode.containerInfo===E.containerInfo&&_.stateNode.implementation===E.implementation){n(w,_.sibling),_=i(_,E.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=Qh(E,w.mode,N),_.return=w,w=_}return o(w);case Sr:return L=E._init,x(w,_,L(E._payload),N)}if(Ho(E))return C(w,_,E,N);if(Do(E))return P(w,_,E,N);Wl(w,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,_!==null&&_.tag===6?(n(w,_.sibling),_=i(_,E),_.return=w,w=_):(n(w,_),_=Kh(E,w.mode,N),_.return=w,w=_),o(w)):n(w,_)}return x}var Os=h0(!0),d0=h0(!1),qu=ri(null),Gu=null,ms=null,cp=null;function hp(){cp=ms=Gu=null}function dp(t){var e=qu.current;Se(qu),t._currentValue=e}function Hd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ss(t,e){Gu=t,cp=ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(jt=!0),t.firstContext=null)}function an(t){var e=t._currentValue;if(cp!==t)if(t={context:t,memoizedValue:e,next:null},ms===null){if(Gu===null)throw Error($(308));ms=t,Gu.dependencies={lanes:0,firstContext:t}}else ms=ms.next=t;return e}var yi=null;function fp(t){yi===null?yi=[t]:yi.push(t)}function f0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,fp(e)):(n.next=i.next,i.next=n),e.interleaved=n,rr(t,r)}function rr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Rr=!1;function pp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function p0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function $r(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,rr(t,n)}return i=r.interleaved,i===null?(e.next=e,fp(r)):(e.next=i.next,i.next=e),r.interleaved=e,rr(t,n)}function hu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zf(t,n)}}function Fg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ku(t,e,n,r){var i=t.updateQueue;Rr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var m=l.lane,S=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,P=l;switch(m=e,S=n,P.tag){case 1:if(C=P.payload,typeof C=="function"){p=C.call(S,p,m);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=P.payload,m=typeof C=="function"?C.call(S,p,m):C,m==null)break e;p=be({},p,m);break e;case 2:Rr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else S={eventTime:S,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=S,u=p):f=f.next=S,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ki|=o,t.lanes=o,t.memoizedState=p}}function $g(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var Ga={},xn=ri(Ga),Ra=ri(Ga),Ca=ri(Ga);function vi(t){if(t===Ga)throw Error($(174));return t}function mp(t,e){switch(we(Ca,e),we(Ra,t),we(xn,Ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sd(e,t)}Se(xn),we(xn,e)}function Ds(){Se(xn),Se(Ra),Se(Ca)}function m0(t){vi(Ca.current);var e=vi(xn.current),n=Sd(e,t.type);e!==n&&(we(Ra,t),we(xn,n))}function gp(t){Ra.current===t&&(Se(xn),Se(Ra))}var ke=ri(0);function Qu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zh=[];function yp(){for(var t=0;t<zh.length;t++)zh[t]._workInProgressVersionPrimary=null;zh.length=0}var du=lr.ReactCurrentDispatcher,Bh=lr.ReactCurrentBatchConfig,Pi=0,xe=null,Ke=null,at=null,Yu=!1,na=!1,Aa=0,TS=0;function It(){throw Error($(321))}function vp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!En(t[n],e[n]))return!1;return!0}function _p(t,e,n,r,i,s){if(Pi=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,du.current=t===null||t.memoizedState===null?CS:AS,t=n(r,i),na){s=0;do{if(na=!1,Aa=0,25<=s)throw Error($(301));s+=1,at=Ke=null,e.updateQueue=null,du.current=PS,t=n(r,i)}while(na)}if(du.current=Xu,e=Ke!==null&&Ke.next!==null,Pi=0,at=Ke=xe=null,Yu=!1,e)throw Error($(300));return t}function wp(){var t=Aa!==0;return Aa=0,t}function Cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?xe.memoizedState=at=t:at=at.next=t,at}function ln(){if(Ke===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var e=at===null?xe.memoizedState:at.next;if(e!==null)at=e,Ke=t;else{if(t===null)throw Error($(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},at===null?xe.memoizedState=at=t:at=at.next=t}return at}function Pa(t,e){return typeof e=="function"?e(t):e}function Hh(t){var e=ln(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=Ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Pi&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,xe.lanes|=f,ki|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,En(r,e.memoizedState)||(jt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,ki|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wh(t){var e=ln(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);En(s,e.memoizedState)||(jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function g0(){}function y0(t,e){var n=xe,r=ln(),i=e(),s=!En(r.memoizedState,i);if(s&&(r.memoizedState=i,jt=!0),r=r.queue,Ep(w0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||at!==null&&at.memoizedState.tag&1){if(n.flags|=2048,ka(9,_0.bind(null,n,r,i,e),void 0,null),ut===null)throw Error($(349));Pi&30||v0(n,e,i)}return i}function v0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function _0(t,e,n,r){e.value=n,e.getSnapshot=r,E0(e)&&T0(t)}function w0(t,e,n){return n(function(){E0(e)&&T0(t)})}function E0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!En(t,n)}catch{return!0}}function T0(t){var e=rr(t,1);e!==null&&vn(e,t,1,-1)}function Ug(t){var e=Cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:t},e.queue=t,t=t.dispatch=RS.bind(null,xe,t),[e.memoizedState,t]}function ka(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function I0(){return ln().memoizedState}function fu(t,e,n,r){var i=Cn();xe.flags|=t,i.memoizedState=ka(1|e,n,void 0,r===void 0?null:r)}function Lc(t,e,n,r){var i=ln();r=r===void 0?null:r;var s=void 0;if(Ke!==null){var o=Ke.memoizedState;if(s=o.destroy,r!==null&&vp(r,o.deps)){i.memoizedState=ka(e,n,s,r);return}}xe.flags|=t,i.memoizedState=ka(1|e,n,s,r)}function jg(t,e){return fu(8390656,8,t,e)}function Ep(t,e){return Lc(2048,8,t,e)}function S0(t,e){return Lc(4,2,t,e)}function R0(t,e){return Lc(4,4,t,e)}function C0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function A0(t,e,n){return n=n!=null?n.concat([t]):null,Lc(4,4,C0.bind(null,e,t),n)}function Tp(){}function P0(t,e){var n=ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function k0(t,e){var n=ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function x0(t,e,n){return Pi&21?(En(n,e)||(n=L_(),xe.lanes|=n,ki|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,jt=!0),t.memoizedState=n)}function IS(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=Bh.transition;Bh.transition={};try{t(!1),e()}finally{ye=n,Bh.transition=r}}function b0(){return ln().memoizedState}function SS(t,e,n){var r=jr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},N0(t))O0(e,n);else if(n=f0(t,e,n,r),n!==null){var i=Ot();vn(n,t,r,i),D0(n,e,r)}}function RS(t,e,n){var r=jr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(N0(t))O0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,En(l,o)){var u=e.interleaved;u===null?(i.next=i,fp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=f0(t,e,i,r),n!==null&&(i=Ot(),vn(n,t,r,i),D0(n,e,r))}}function N0(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function O0(t,e){na=Yu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function D0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zf(t,n)}}var Xu={readContext:an,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},CS={readContext:an,useCallback:function(t,e){return Cn().memoizedState=[t,e===void 0?null:e],t},useContext:an,useEffect:jg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fu(4194308,4,C0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fu(4194308,4,t,e)},useInsertionEffect:function(t,e){return fu(4,2,t,e)},useMemo:function(t,e){var n=Cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=SS.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=Cn();return t={current:t},e.memoizedState=t},useState:Ug,useDebugValue:Tp,useDeferredValue:function(t){return Cn().memoizedState=t},useTransition:function(){var t=Ug(!1),e=t[0];return t=IS.bind(null,t[1]),Cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=Cn();if(Re){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),ut===null)throw Error($(349));Pi&30||v0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,jg(w0.bind(null,r,s,t),[t]),r.flags|=2048,ka(9,_0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Cn(),e=ut.identifierPrefix;if(Re){var n=Kn,r=Gn;n=(r&~(1<<32-yn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Aa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=TS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},AS={readContext:an,useCallback:P0,useContext:an,useEffect:Ep,useImperativeHandle:A0,useInsertionEffect:S0,useLayoutEffect:R0,useMemo:k0,useReducer:Hh,useRef:I0,useState:function(){return Hh(Pa)},useDebugValue:Tp,useDeferredValue:function(t){var e=ln();return x0(e,Ke.memoizedState,t)},useTransition:function(){var t=Hh(Pa)[0],e=ln().memoizedState;return[t,e]},useMutableSource:g0,useSyncExternalStore:y0,useId:b0,unstable_isNewReconciler:!1},PS={readContext:an,useCallback:P0,useContext:an,useEffect:Ep,useImperativeHandle:A0,useInsertionEffect:S0,useLayoutEffect:R0,useMemo:k0,useReducer:Wh,useRef:I0,useState:function(){return Wh(Pa)},useDebugValue:Tp,useDeferredValue:function(t){var e=ln();return Ke===null?e.memoizedState=t:x0(e,Ke.memoizedState,t)},useTransition:function(){var t=Wh(Pa)[0],e=ln().memoizedState;return[t,e]},useMutableSource:g0,useSyncExternalStore:y0,useId:b0,unstable_isNewReconciler:!1};function fn(t,e){if(t&&t.defaultProps){e=be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vc={isMounted:function(t){return(t=t._reactInternals)?Ui(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ot(),i=jr(t),s=Zn(r,i);s.payload=e,n!=null&&(s.callback=n),e=$r(t,s,i),e!==null&&(vn(e,t,i,r),hu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ot(),i=jr(t),s=Zn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=$r(t,s,i),e!==null&&(vn(e,t,i,r),hu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ot(),r=jr(t),i=Zn(n,r);i.tag=2,e!=null&&(i.callback=e),e=$r(t,i,r),e!==null&&(vn(e,t,r,n),hu(e,t,r))}};function zg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ea(n,r)||!Ea(i,s):!0}function L0(t,e,n){var r=!1,i=Jr,s=e.contextType;return typeof s=="object"&&s!==null?s=an(s):(i=Bt(e)?Ci:xt.current,r=e.contextTypes,s=(r=r!=null)?bs(t,i):Jr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Bg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Vc.enqueueReplaceState(e,e.state,null)}function qd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},pp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=an(s):(s=Bt(e)?Ci:xt.current,i.context=bs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Vc.enqueueReplaceState(i,i.state,null),Ku(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ls(t,e){try{var n="",r=e;do n+=nI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function qh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kS=typeof WeakMap=="function"?WeakMap:Map;function V0(t,e,n){n=Zn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Zu||(Zu=!0,rf=r),Gd(t,e)},n}function M0(t,e,n){n=Zn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Gd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gd(t,e),typeof r!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new kS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=BS.bind(null,t,e,n),e.then(t,t))}function Wg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Zn(-1,1),e.tag=2,$r(n,e,1))),n.lanes|=1),t)}var xS=lr.ReactCurrentOwner,jt=!1;function Nt(t,e,n,r){e.child=t===null?d0(e,null,n,r):Os(e,t.child,n,r)}function Gg(t,e,n,r,i){n=n.render;var s=e.ref;return Ss(e,i),r=_p(t,e,n,r,s,i),n=wp(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ir(t,e,i)):(Re&&n&&ap(e),e.flags|=1,Nt(t,e,r,i),e.child)}function Kg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!xp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,F0(t,e,s,r,i)):(t=yu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ea,n(o,r)&&t.ref===e.ref)return ir(t,e,i)}return e.flags|=1,t=zr(s,r),t.ref=e.ref,t.return=e,e.child=t}function F0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ea(s,r)&&t.ref===e.ref)if(jt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(jt=!0);else return e.lanes=t.lanes,ir(t,e,i)}return Kd(t,e,n,r,i)}function $0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(ys,Kt),Kt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(ys,Kt),Kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(ys,Kt),Kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(ys,Kt),Kt|=r;return Nt(t,e,i,n),e.child}function U0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Kd(t,e,n,r,i){var s=Bt(n)?Ci:xt.current;return s=bs(e,s),Ss(e,i),n=_p(t,e,n,r,s,i),r=wp(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ir(t,e,i)):(Re&&r&&ap(e),e.flags|=1,Nt(t,e,n,i),e.child)}function Qg(t,e,n,r,i){if(Bt(n)){var s=!0;Bu(e)}else s=!1;if(Ss(e,i),e.stateNode===null)pu(t,e),L0(e,n,r),qd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=an(h):(h=Bt(n)?Ci:xt.current,h=bs(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Bg(e,o,r,h),Rr=!1;var m=e.memoizedState;o.state=m,Ku(e,r,o,i),u=e.memoizedState,l!==r||m!==u||zt.current||Rr?(typeof f=="function"&&(Wd(e,n,f,r),u=e.memoizedState),(l=Rr||zg(e,n,l,r,m,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,p0(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:fn(e.type,l),o.props=h,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=an(u):(u=Bt(n)?Ci:xt.current,u=bs(e,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Bg(e,o,r,u),Rr=!1,m=e.memoizedState,o.state=m,Ku(e,r,o,i);var C=e.memoizedState;l!==p||m!==C||zt.current||Rr?(typeof S=="function"&&(Wd(e,n,S,r),C=e.memoizedState),(h=Rr||zg(e,n,h,r,m,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Qd(t,e,n,r,s,i)}function Qd(t,e,n,r,i,s){U0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Dg(e,n,!1),ir(t,e,s);r=e.stateNode,xS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Os(e,t.child,null,s),e.child=Os(e,null,l,s)):Nt(t,e,l,s),e.memoizedState=r.state,i&&Dg(e,n,!0),e.child}function j0(t){var e=t.stateNode;e.pendingContext?Og(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Og(t,e.context,!1),mp(t,e.containerInfo)}function Yg(t,e,n,r,i){return Ns(),up(i),e.flags|=256,Nt(t,e,n,r),e.child}var Yd={dehydrated:null,treeContext:null,retryLane:0};function Xd(t){return{baseLanes:t,cachePool:null,transitions:null}}function z0(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(ke,i&1),t===null)return Bd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$c(o,r,0,null),t=Ti(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Xd(n),e.memoizedState=Yd,t):Ip(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return bS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=zr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=zr(l,s):(s=Ti(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Xd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yd,r}return s=t.child,t=s.sibling,r=zr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ip(t,e){return e=$c({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ql(t,e,n,r){return r!==null&&up(r),Os(e,t.child,null,n),t=Ip(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=qh(Error($(422))),ql(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=$c({mode:"visible",children:r.children},i,0,null),s=Ti(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Os(e,t.child,null,o),e.child.memoizedState=Xd(o),e.memoizedState=Yd,s);if(!(e.mode&1))return ql(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error($(419)),r=qh(s,r,void 0),ql(t,e,o,r)}if(l=(o&t.childLanes)!==0,jt||l){if(r=ut,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,rr(t,i),vn(r,t,i,-1))}return kp(),r=qh(Error($(421))),ql(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=HS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Qt=Fr(i.nextSibling),Yt=e,Re=!0,mn=null,t!==null&&(tn[nn++]=Gn,tn[nn++]=Kn,tn[nn++]=Ai,Gn=t.id,Kn=t.overflow,Ai=e),e=Ip(e,r.children),e.flags|=4096,e)}function Xg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Hd(t.return,e,n)}function Gh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function B0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Nt(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xg(t,n,e);else if(t.tag===19)Xg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Qu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Gh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Qu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Gh(e,!0,n,null,s);break;case"together":Gh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ir(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ki|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=zr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function NS(t,e,n){switch(e.tag){case 3:j0(e),Ns();break;case 5:m0(e);break;case 1:Bt(e.type)&&Bu(e);break;case 4:mp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(qu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?z0(t,e,n):(we(ke,ke.current&1),t=ir(t,e,n),t!==null?t.sibling:null);we(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return B0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,$0(t,e,n)}return ir(t,e,n)}var H0,Jd,W0,q0;H0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jd=function(){};W0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,vi(xn.current);var s=null;switch(n){case"input":i=wd(t,i),r=wd(t,r),s=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),s=[];break;case"textarea":i=Id(t,i),r=Id(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ju)}Rd(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(pa.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(pa.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&Te("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};q0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Uo(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function St(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function OS(t,e,n){var r=e.pendingProps;switch(lp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(e),null;case 1:return Bt(e.type)&&zu(),St(e),null;case 3:return r=e.stateNode,Ds(),Se(zt),Se(xt),yp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Hl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,mn!==null&&(af(mn),mn=null))),Jd(t,e),St(e),null;case 5:gp(e);var i=vi(Ca.current);if(n=e.type,t!==null&&e.stateNode!=null)W0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return St(e),null}if(t=vi(xn.current),Hl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Pn]=e,r[Sa]=s,t=(e.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(i=0;i<qo.length;i++)Te(qo[i],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":og(r,s),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Te("invalid",r);break;case"textarea":lg(r,s),Te("invalid",r)}Rd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Bl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Bl(r.textContent,l,t),i=["children",""+l]):pa.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Te("scroll",r)}switch(n){case"input":Ll(r),ag(r,s,!0);break;case"textarea":Ll(r),ug(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ju)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=w_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Pn]=e,t[Sa]=r,H0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Cd(n,r),n){case"dialog":Te("cancel",t),Te("close",t),i=r;break;case"iframe":case"object":case"embed":Te("load",t),i=r;break;case"video":case"audio":for(i=0;i<qo.length;i++)Te(qo[i],t);i=r;break;case"source":Te("error",t),i=r;break;case"img":case"image":case"link":Te("error",t),Te("load",t),i=r;break;case"details":Te("toggle",t),i=r;break;case"input":og(t,r),i=wd(t,r),Te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),Te("invalid",t);break;case"textarea":lg(t,r),i=Id(t,r),Te("invalid",t);break;default:i=r}Rd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?I_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&E_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ma(t,u):typeof u=="number"&&ma(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(pa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Te("scroll",t):u!=null&&Gf(t,s,u,o))}switch(n){case"input":Ll(t),ag(t,r,!1);break;case"textarea":Ll(t),ug(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Xr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ws(t,!!r.multiple,s,!1):r.defaultValue!=null&&ws(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ju)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return St(e),null;case 6:if(t&&e.stateNode!=null)q0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=vi(Ca.current),vi(xn.current),Hl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Pn]=e,(s=r.nodeValue!==n)&&(t=Yt,t!==null))switch(t.tag){case 3:Bl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Bl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pn]=e,e.stateNode=r}return St(e),null;case 13:if(Se(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&Qt!==null&&e.mode&1&&!(e.flags&128))c0(),Ns(),e.flags|=98560,s=!1;else if(s=Hl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[Pn]=e}else Ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;St(e),s=!1}else mn!==null&&(af(mn),mn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?Ye===0&&(Ye=3):kp())),e.updateQueue!==null&&(e.flags|=4),St(e),null);case 4:return Ds(),Jd(t,e),t===null&&Ta(e.stateNode.containerInfo),St(e),null;case 10:return dp(e.type._context),St(e),null;case 17:return Bt(e.type)&&zu(),St(e),null;case 19:if(Se(ke),s=e.memoizedState,s===null)return St(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Uo(s,!1);else{if(Ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Qu(t),o!==null){for(e.flags|=128,Uo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&Fe()>Vs&&(e.flags|=128,r=!0,Uo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Qu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Re)return St(e),null}else 2*Fe()-s.renderingStartTime>Vs&&n!==1073741824&&(e.flags|=128,r=!0,Uo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Fe(),e.sibling=null,n=ke.current,we(ke,r?n&1|2:n&1),e):(St(e),null);case 22:case 23:return Pp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Kt&1073741824&&(St(e),e.subtreeFlags&6&&(e.flags|=8192)):St(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function DS(t,e){switch(lp(e),e.tag){case 1:return Bt(e.type)&&zu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ds(),Se(zt),Se(xt),yp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gp(e),null;case 13:if(Se(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));Ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Se(ke),null;case 4:return Ds(),null;case 10:return dp(e.type._context),null;case 22:case 23:return Pp(),null;case 24:return null;default:return null}}var Gl=!1,At=!1,LS=typeof WeakSet=="function"?WeakSet:Set,B=null;function gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function Zd(t,e,n){try{n()}catch(r){De(t,e,r)}}var Jg=!1;function VS(t,e){if(Vd=Fu,t=X_(),op(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,m=null;t:for(;;){for(var S;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(S=p.firstChild)!==null;)m=p,p=S;for(;;){if(p===t)break t;if(m===n&&++h===i&&(l=o),m===s&&++f===r&&(u=o),(S=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Md={focusedElem:t,selectionRange:n},Fu=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var P=C.memoizedProps,x=C.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?P:fn(e.type,P),x);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(N){De(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return C=Jg,Jg=!1,C}function ra(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Zd(e,n,s)}i=i.next}while(i!==r)}}function Mc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ef(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function G0(t){var e=t.alternate;e!==null&&(t.alternate=null,G0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Pn],delete e[Sa],delete e[Ud],delete e[vS],delete e[_S])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function K0(t){return t.tag===5||t.tag===3||t.tag===4}function Zg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||K0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ju));else if(r!==4&&(t=t.child,t!==null))for(tf(t,e,n),t=t.sibling;t!==null;)tf(t,e,n),t=t.sibling}function nf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(nf(t,e,n),t=t.sibling;t!==null;)nf(t,e,n),t=t.sibling}var dt=null,pn=!1;function Er(t,e,n){for(n=n.child;n!==null;)Q0(t,e,n),n=n.sibling}function Q0(t,e,n){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(kc,n)}catch{}switch(n.tag){case 5:At||gs(n,e);case 6:var r=dt,i=pn;dt=null,Er(t,e,n),dt=r,pn=i,dt!==null&&(pn?(t=dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):dt.removeChild(n.stateNode));break;case 18:dt!==null&&(pn?(t=dt,n=n.stateNode,t.nodeType===8?Uh(t.parentNode,n):t.nodeType===1&&Uh(t,n),_a(t)):Uh(dt,n.stateNode));break;case 4:r=dt,i=pn,dt=n.stateNode.containerInfo,pn=!0,Er(t,e,n),dt=r,pn=i;break;case 0:case 11:case 14:case 15:if(!At&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zd(n,e,o),i=i.next}while(i!==r)}Er(t,e,n);break;case 1:if(!At&&(gs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,e,l)}Er(t,e,n);break;case 21:Er(t,e,n);break;case 22:n.mode&1?(At=(r=At)||n.memoizedState!==null,Er(t,e,n),At=r):Er(t,e,n);break;default:Er(t,e,n)}}function ey(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LS),e.forEach(function(r){var i=WS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:dt=l.stateNode,pn=!1;break e;case 3:dt=l.stateNode.containerInfo,pn=!0;break e;case 4:dt=l.stateNode.containerInfo,pn=!0;break e}l=l.return}if(dt===null)throw Error($(160));Q0(s,o,i),dt=null,pn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){De(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Y0(e,t),e=e.sibling}function Y0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(dn(e,t),Rn(t),r&4){try{ra(3,t,t.return),Mc(3,t)}catch(P){De(t,t.return,P)}try{ra(5,t,t.return)}catch(P){De(t,t.return,P)}}break;case 1:dn(e,t),Rn(t),r&512&&n!==null&&gs(n,n.return);break;case 5:if(dn(e,t),Rn(t),r&512&&n!==null&&gs(n,n.return),t.flags&32){var i=t.stateNode;try{ma(i,"")}catch(P){De(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&v_(i,s),Cd(l,o);var h=Cd(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?I_(i,p):f==="dangerouslySetInnerHTML"?E_(i,p):f==="children"?ma(i,p):Gf(i,f,p,h)}switch(l){case"input":Ed(i,s);break;case"textarea":__(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?ws(i,!!s.multiple,S,!1):m!==!!s.multiple&&(s.defaultValue!=null?ws(i,!!s.multiple,s.defaultValue,!0):ws(i,!!s.multiple,s.multiple?[]:"",!1))}i[Sa]=s}catch(P){De(t,t.return,P)}}break;case 6:if(dn(e,t),Rn(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){De(t,t.return,P)}}break;case 3:if(dn(e,t),Rn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_a(e.containerInfo)}catch(P){De(t,t.return,P)}break;case 4:dn(e,t),Rn(t);break;case 13:dn(e,t),Rn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Cp=Fe())),r&4&&ey(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(At=(h=At)||f,dn(e,t),At=h):dn(e,t),Rn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(B=t,f=t.child;f!==null;){for(p=B=f;B!==null;){switch(m=B,S=m.child,m.tag){case 0:case 11:case 14:case 15:ra(4,m,m.return);break;case 1:gs(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(P){De(r,n,P)}}break;case 5:gs(m,m.return);break;case 22:if(m.memoizedState!==null){ny(p);continue}}S!==null?(S.return=m,B=S):ny(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=T_("display",o))}catch(P){De(t,t.return,P)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(P){De(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:dn(e,t),Rn(t),r&4&&ey(t);break;case 21:break;default:dn(e,t),Rn(t)}}function Rn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(K0(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ma(i,""),r.flags&=-33);var s=Zg(t);nf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Zg(t);tf(t,l,o);break;default:throw Error($(161))}}catch(u){De(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function MS(t,e,n){B=t,X0(t)}function X0(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Gl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||At;l=Gl;var h=At;if(Gl=o,(At=u)&&!h)for(B=i;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?ry(i):u!==null?(u.return=o,B=u):ry(i);for(;s!==null;)B=s,X0(s),s=s.sibling;B=i,Gl=l,At=h}ty(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):ty(t)}}function ty(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:At||Mc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!At)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:fn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$g(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$g(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&_a(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}At||e.flags&512&&ef(e)}catch(m){De(e,e.return,m)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function ny(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function ry(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Mc(4,e)}catch(u){De(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){De(e,i,u)}}var s=e.return;try{ef(e)}catch(u){De(e,s,u)}break;case 5:var o=e.return;try{ef(e)}catch(u){De(e,o,u)}}}catch(u){De(e,e.return,u)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var FS=Math.ceil,Ju=lr.ReactCurrentDispatcher,Sp=lr.ReactCurrentOwner,on=lr.ReactCurrentBatchConfig,de=0,ut=null,He=null,mt=0,Kt=0,ys=ri(0),Ye=0,xa=null,ki=0,Fc=0,Rp=0,ia=null,Ut=null,Cp=0,Vs=1/0,Bn=null,Zu=!1,rf=null,Ur=null,Kl=!1,Nr=null,ec=0,sa=0,sf=null,mu=-1,gu=0;function Ot(){return de&6?Fe():mu!==-1?mu:mu=Fe()}function jr(t){return t.mode&1?de&2&&mt!==0?mt&-mt:ES.transition!==null?(gu===0&&(gu=L_()),gu):(t=ye,t!==0||(t=window.event,t=t===void 0?16:z_(t.type)),t):1}function vn(t,e,n,r){if(50<sa)throw sa=0,sf=null,Error($(185));Ha(t,n,r),(!(de&2)||t!==ut)&&(t===ut&&(!(de&2)&&(Fc|=n),Ye===4&&Ar(t,mt)),Ht(t,r),n===1&&de===0&&!(e.mode&1)&&(Vs=Fe()+500,Dc&&ii()))}function Ht(t,e){var n=t.callbackNode;EI(t,e);var r=Mu(t,t===ut?mt:0);if(r===0)n!==null&&dg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&dg(n),e===1)t.tag===0?wS(iy.bind(null,t)):a0(iy.bind(null,t)),gS(function(){!(de&6)&&ii()}),n=null;else{switch(V_(r)){case 1:n=Jf;break;case 4:n=O_;break;case 16:n=Vu;break;case 536870912:n=D_;break;default:n=Vu}n=sw(n,J0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function J0(t,e){if(mu=-1,gu=0,de&6)throw Error($(327));var n=t.callbackNode;if(Rs()&&t.callbackNode!==n)return null;var r=Mu(t,t===ut?mt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=tc(t,r);else{e=r;var i=de;de|=2;var s=ew();(ut!==t||mt!==e)&&(Bn=null,Vs=Fe()+500,Ei(t,e));do try{jS();break}catch(l){Z0(t,l)}while(!0);hp(),Ju.current=s,de=i,He!==null?e=0:(ut=null,mt=0,e=Ye)}if(e!==0){if(e===2&&(i=bd(t),i!==0&&(r=i,e=of(t,i))),e===1)throw n=xa,Ei(t,0),Ar(t,r),Ht(t,Fe()),n;if(e===6)Ar(t,r);else{if(i=t.current.alternate,!(r&30)&&!$S(i)&&(e=tc(t,r),e===2&&(s=bd(t),s!==0&&(r=s,e=of(t,s))),e===1))throw n=xa,Ei(t,0),Ar(t,r),Ht(t,Fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:fi(t,Ut,Bn);break;case 3:if(Ar(t,r),(r&130023424)===r&&(e=Cp+500-Fe(),10<e)){if(Mu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$d(fi.bind(null,t,Ut,Bn),e);break}fi(t,Ut,Bn);break;case 4:if(Ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-yn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*FS(r/1960))-r,10<r){t.timeoutHandle=$d(fi.bind(null,t,Ut,Bn),r);break}fi(t,Ut,Bn);break;case 5:fi(t,Ut,Bn);break;default:throw Error($(329))}}}return Ht(t,Fe()),t.callbackNode===n?J0.bind(null,t):null}function of(t,e){var n=ia;return t.current.memoizedState.isDehydrated&&(Ei(t,e).flags|=256),t=tc(t,e),t!==2&&(e=Ut,Ut=n,e!==null&&af(e)),t}function af(t){Ut===null?Ut=t:Ut.push.apply(Ut,t)}function $S(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!En(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ar(t,e){for(e&=~Rp,e&=~Fc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yn(e),r=1<<n;t[n]=-1,e&=~r}}function iy(t){if(de&6)throw Error($(327));Rs();var e=Mu(t,0);if(!(e&1))return Ht(t,Fe()),null;var n=tc(t,e);if(t.tag!==0&&n===2){var r=bd(t);r!==0&&(e=r,n=of(t,r))}if(n===1)throw n=xa,Ei(t,0),Ar(t,e),Ht(t,Fe()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fi(t,Ut,Bn),Ht(t,Fe()),null}function Ap(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(Vs=Fe()+500,Dc&&ii())}}function xi(t){Nr!==null&&Nr.tag===0&&!(de&6)&&Rs();var e=de;de|=1;var n=on.transition,r=ye;try{if(on.transition=null,ye=1,t)return t()}finally{ye=r,on.transition=n,de=e,!(de&6)&&ii()}}function Pp(){Kt=ys.current,Se(ys)}function Ei(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mS(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(lp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zu();break;case 3:Ds(),Se(zt),Se(xt),yp();break;case 5:gp(r);break;case 4:Ds();break;case 13:Se(ke);break;case 19:Se(ke);break;case 10:dp(r.type._context);break;case 22:case 23:Pp()}n=n.return}if(ut=t,He=t=zr(t.current,null),mt=Kt=e,Ye=0,xa=null,Rp=Fc=ki=0,Ut=ia=null,yi!==null){for(e=0;e<yi.length;e++)if(n=yi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}yi=null}return t}function Z0(t,e){do{var n=He;try{if(hp(),du.current=Xu,Yu){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yu=!1}if(Pi=0,at=Ke=xe=null,na=!1,Aa=0,Sp.current=null,n===null||n.return===null){Ye=1,xa=e,He=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=mt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=Wg(o);if(S!==null){S.flags&=-257,qg(S,o,l,s,e),S.mode&1&&Hg(s,h,e),e=S,u=h;var C=e.updateQueue;if(C===null){var P=new Set;P.add(u),e.updateQueue=P}else C.add(u);break e}else{if(!(e&1)){Hg(s,h,e),kp();break e}u=Error($(426))}}else if(Re&&l.mode&1){var x=Wg(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),qg(x,o,l,s,e),up(Ls(u,l));break e}}s=u=Ls(u,l),Ye!==4&&(Ye=2),ia===null?ia=[s]:ia.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=V0(s,u,e);Fg(s,w);break e;case 1:l=u;var _=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Ur===null||!Ur.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=M0(s,l,e);Fg(s,N);break e}}s=s.return}while(s!==null)}nw(n)}catch(V){e=V,He===n&&n!==null&&(He=n=n.return);continue}break}while(!0)}function ew(){var t=Ju.current;return Ju.current=Xu,t===null?Xu:t}function kp(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),ut===null||!(ki&268435455)&&!(Fc&268435455)||Ar(ut,mt)}function tc(t,e){var n=de;de|=2;var r=ew();(ut!==t||mt!==e)&&(Bn=null,Ei(t,e));do try{US();break}catch(i){Z0(t,i)}while(!0);if(hp(),de=n,Ju.current=r,He!==null)throw Error($(261));return ut=null,mt=0,Ye}function US(){for(;He!==null;)tw(He)}function jS(){for(;He!==null&&!dI();)tw(He)}function tw(t){var e=iw(t.alternate,t,Kt);t.memoizedProps=t.pendingProps,e===null?nw(t):He=e,Sp.current=null}function nw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=DS(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,He=null;return}}else if(n=OS(n,e,Kt),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Ye===0&&(Ye=5)}function fi(t,e,n){var r=ye,i=on.transition;try{on.transition=null,ye=1,zS(t,e,n,r)}finally{on.transition=i,ye=r}return null}function zS(t,e,n,r){do Rs();while(Nr!==null);if(de&6)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(TI(t,s),t===ut&&(He=ut=null,mt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Kl||(Kl=!0,sw(Vu,function(){return Rs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=on.transition,on.transition=null;var o=ye;ye=1;var l=de;de|=4,Sp.current=null,VS(t,n),Y0(n,t),lS(Md),Fu=!!Vd,Md=Vd=null,t.current=n,MS(n),fI(),de=l,ye=o,on.transition=s}else t.current=n;if(Kl&&(Kl=!1,Nr=t,ec=i),s=t.pendingLanes,s===0&&(Ur=null),gI(n.stateNode),Ht(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Zu)throw Zu=!1,t=rf,rf=null,t;return ec&1&&t.tag!==0&&Rs(),s=t.pendingLanes,s&1?t===sf?sa++:(sa=0,sf=t):sa=0,ii(),null}function Rs(){if(Nr!==null){var t=V_(ec),e=on.transition,n=ye;try{if(on.transition=null,ye=16>t?16:t,Nr===null)var r=!1;else{if(t=Nr,Nr=null,ec=0,de&6)throw Error($(331));var i=de;for(de|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(B=h;B!==null;){var f=B;switch(f.tag){case 0:case 11:case 15:ra(8,f,s)}var p=f.child;if(p!==null)p.return=f,B=p;else for(;B!==null;){f=B;var m=f.sibling,S=f.return;if(G0(f),f===h){B=null;break}if(m!==null){m.return=S,B=m;break}B=S}}}var C=s.alternate;if(C!==null){var P=C.child;if(P!==null){C.child=null;do{var x=P.sibling;P.sibling=null,P=x}while(P!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ra(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,B=w;break e}B=s.return}}var _=t.current;for(B=_;B!==null;){o=B;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,B=E;else e:for(o=_;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Mc(9,l)}}catch(V){De(l,l.return,V)}if(l===o){B=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,B=N;break e}B=l.return}}if(de=i,ii(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(kc,t)}catch{}r=!0}return r}finally{ye=n,on.transition=e}}return!1}function sy(t,e,n){e=Ls(n,e),e=V0(t,e,1),t=$r(t,e,1),e=Ot(),t!==null&&(Ha(t,1,e),Ht(t,e))}function De(t,e,n){if(t.tag===3)sy(t,t,n);else for(;e!==null;){if(e.tag===3){sy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ur===null||!Ur.has(r))){t=Ls(n,t),t=M0(e,t,1),e=$r(e,t,1),t=Ot(),e!==null&&(Ha(e,1,t),Ht(e,t));break}}e=e.return}}function BS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ot(),t.pingedLanes|=t.suspendedLanes&n,ut===t&&(mt&n)===n&&(Ye===4||Ye===3&&(mt&130023424)===mt&&500>Fe()-Cp?Ei(t,0):Rp|=n),Ht(t,e)}function rw(t,e){e===0&&(t.mode&1?(e=Fl,Fl<<=1,!(Fl&130023424)&&(Fl=4194304)):e=1);var n=Ot();t=rr(t,e),t!==null&&(Ha(t,e,n),Ht(t,n))}function HS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),rw(t,n)}function WS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),rw(t,n)}var iw;iw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||zt.current)jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return jt=!1,NS(t,e,n);jt=!!(t.flags&131072)}else jt=!1,Re&&e.flags&1048576&&l0(e,Wu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;pu(t,e),t=e.pendingProps;var i=bs(e,xt.current);Ss(e,n),i=_p(null,e,r,t,i,n);var s=wp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Bt(r)?(s=!0,Bu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pp(e),i.updater=Vc,e.stateNode=i,i._reactInternals=e,qd(e,r,t,n),e=Qd(null,e,r,!0,s,n)):(e.tag=0,Re&&s&&ap(e),Nt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(pu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=GS(r),t=fn(r,t),i){case 0:e=Kd(null,e,r,t,n);break e;case 1:e=Qg(null,e,r,t,n);break e;case 11:e=Gg(null,e,r,t,n);break e;case 14:e=Kg(null,e,r,fn(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Kd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Qg(t,e,r,i,n);case 3:e:{if(j0(e),t===null)throw Error($(387));r=e.pendingProps,s=e.memoizedState,i=s.element,p0(t,e),Ku(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ls(Error($(423)),e),e=Yg(t,e,r,n,i);break e}else if(r!==i){i=Ls(Error($(424)),e),e=Yg(t,e,r,n,i);break e}else for(Qt=Fr(e.stateNode.containerInfo.firstChild),Yt=e,Re=!0,mn=null,n=d0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ns(),r===i){e=ir(t,e,n);break e}Nt(t,e,r,n)}e=e.child}return e;case 5:return m0(e),t===null&&Bd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Fd(r,i)?o=null:s!==null&&Fd(r,s)&&(e.flags|=32),U0(t,e),Nt(t,e,o,n),e.child;case 6:return t===null&&Bd(e),null;case 13:return z0(t,e,n);case 4:return mp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Os(e,null,r,n):Nt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Gg(t,e,r,i,n);case 7:return Nt(t,e,e.pendingProps,n),e.child;case 8:return Nt(t,e,e.pendingProps.children,n),e.child;case 12:return Nt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(qu,r._currentValue),r._currentValue=o,s!==null)if(En(s.value,o)){if(s.children===i.children&&!zt.current){e=ir(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Zn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Hd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Hd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Nt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ss(e,n),i=an(i),r=r(i),e.flags|=1,Nt(t,e,r,n),e.child;case 14:return r=e.type,i=fn(r,e.pendingProps),i=fn(r.type,i),Kg(t,e,r,i,n);case 15:return F0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),pu(t,e),e.tag=1,Bt(r)?(t=!0,Bu(e)):t=!1,Ss(e,n),L0(e,r,i),qd(e,r,i,n),Qd(null,e,r,!0,t,n);case 19:return B0(t,e,n);case 22:return $0(t,e,n)}throw Error($(156,e.tag))};function sw(t,e){return N_(t,e)}function qS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sn(t,e,n,r){return new qS(t,e,n,r)}function xp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function GS(t){if(typeof t=="function")return xp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qf)return 11;if(t===Yf)return 14}return 2}function zr(t,e){var n=t.alternate;return n===null?(n=sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")xp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case as:return Ti(n.children,i,s,e);case Kf:o=8,i|=8;break;case gd:return t=sn(12,n,e,i|2),t.elementType=gd,t.lanes=s,t;case yd:return t=sn(13,n,e,i),t.elementType=yd,t.lanes=s,t;case vd:return t=sn(19,n,e,i),t.elementType=vd,t.lanes=s,t;case m_:return $c(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case f_:o=10;break e;case p_:o=9;break e;case Qf:o=11;break e;case Yf:o=14;break e;case Sr:o=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=sn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ti(t,e,n,r){return t=sn(7,t,r,e),t.lanes=n,t}function $c(t,e,n,r){return t=sn(22,t,r,e),t.elementType=m_,t.lanes=n,t.stateNode={isHidden:!1},t}function Kh(t,e,n){return t=sn(6,t,null,e),t.lanes=n,t}function Qh(t,e,n){return e=sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function KS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kh(0),this.expirationTimes=kh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bp(t,e,n,r,i,s,o,l,u){return t=new KS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pp(s),t}function QS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:os,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ow(t){if(!t)return Jr;t=t._reactInternals;e:{if(Ui(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(Bt(n))return o0(t,n,e)}return e}function aw(t,e,n,r,i,s,o,l,u){return t=bp(n,r,!0,t,i,s,o,l,u),t.context=ow(null),n=t.current,r=Ot(),i=jr(n),s=Zn(r,i),s.callback=e??null,$r(n,s,i),t.current.lanes=i,Ha(t,i,r),Ht(t,r),t}function Uc(t,e,n,r){var i=e.current,s=Ot(),o=jr(i);return n=ow(n),e.context===null?e.context=n:e.pendingContext=n,e=Zn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=$r(i,e,o),t!==null&&(vn(t,i,o,s),hu(t,i,o)),o}function nc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function oy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Np(t,e){oy(t,e),(t=t.alternate)&&oy(t,e)}function YS(){return null}var lw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Op(t){this._internalRoot=t}jc.prototype.render=Op.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));Uc(t,e,null,null)};jc.prototype.unmount=Op.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xi(function(){Uc(null,t,null,null)}),e[nr]=null}};function jc(t){this._internalRoot=t}jc.prototype.unstable_scheduleHydration=function(t){if(t){var e=$_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Cr.length&&e!==0&&e<Cr[n].priority;n++);Cr.splice(n,0,t),n===0&&j_(t)}};function Dp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ay(){}function XS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=nc(o);s.call(h)}}var o=aw(e,r,t,0,null,!1,!1,"",ay);return t._reactRootContainer=o,t[nr]=o.current,Ta(t.nodeType===8?t.parentNode:t),xi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=nc(u);l.call(h)}}var u=bp(t,0,!1,null,null,!1,!1,"",ay);return t._reactRootContainer=u,t[nr]=u.current,Ta(t.nodeType===8?t.parentNode:t),xi(function(){Uc(e,u,n,r)}),u}function Bc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=nc(o);l.call(u)}}Uc(e,o,t,i)}else o=XS(n,e,t,i,r);return nc(o)}M_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Wo(e.pendingLanes);n!==0&&(Zf(e,n|1),Ht(e,Fe()),!(de&6)&&(Vs=Fe()+500,ii()))}break;case 13:xi(function(){var r=rr(t,1);if(r!==null){var i=Ot();vn(r,t,1,i)}}),Np(t,1)}};ep=function(t){if(t.tag===13){var e=rr(t,134217728);if(e!==null){var n=Ot();vn(e,t,134217728,n)}Np(t,134217728)}};F_=function(t){if(t.tag===13){var e=jr(t),n=rr(t,e);if(n!==null){var r=Ot();vn(n,t,e,r)}Np(t,e)}};$_=function(){return ye};U_=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};Pd=function(t,e,n){switch(e){case"input":if(Ed(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Oc(r);if(!i)throw Error($(90));y_(r),Ed(r,i)}}}break;case"textarea":__(t,n);break;case"select":e=n.value,e!=null&&ws(t,!!n.multiple,e,!1)}};C_=Ap;A_=xi;var JS={usingClientEntryPoint:!1,Events:[qa,hs,Oc,S_,R_,Ap]},jo={findFiberByHostInstance:gi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ZS={bundleType:jo.bundleType,version:jo.version,rendererPackageName:jo.rendererPackageName,rendererConfig:jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=x_(t),t===null?null:t.stateNode},findFiberByHostInstance:jo.findFiberByHostInstance||YS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{kc=Ql.inject(ZS),kn=Ql}catch{}}Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JS;Jt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dp(e))throw Error($(200));return QS(t,e,null,n)};Jt.createRoot=function(t,e){if(!Dp(t))throw Error($(299));var n=!1,r="",i=lw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=bp(t,1,!1,null,null,n,!1,r,i),t[nr]=e.current,Ta(t.nodeType===8?t.parentNode:t),new Op(e)};Jt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=x_(e),t=t===null?null:t.stateNode,t};Jt.flushSync=function(t){return xi(t)};Jt.hydrate=function(t,e,n){if(!zc(e))throw Error($(200));return Bc(null,t,e,!0,n)};Jt.hydrateRoot=function(t,e,n){if(!Dp(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=lw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=aw(e,null,t,1,n??null,i,!1,s,o),t[nr]=e.current,Ta(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new jc(e)};Jt.render=function(t,e,n){if(!zc(e))throw Error($(200));return Bc(null,t,e,!1,n)};Jt.unmountComponentAtNode=function(t){if(!zc(t))throw Error($(40));return t._reactRootContainer?(xi(function(){Bc(null,null,t,!1,function(){t._reactRootContainer=null,t[nr]=null})}),!0):!1};Jt.unstable_batchedUpdates=Ap;Jt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!zc(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return Bc(t,e,n,!1,r)};Jt.version="18.3.1-next-f1338f8080-20240426";function uw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uw)}catch(t){console.error(t)}}uw(),u_.exports=Jt;var eR=u_.exports,ly=eR;pd.createRoot=ly.createRoot,pd.hydrateRoot=ly.hydrateRoot;/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ba(){return ba=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ba.apply(this,arguments)}var Or;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Or||(Or={}));const uy="popstate";function tR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return lf("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:rc(i)}return rR(e,n,null,t)}function We(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function cw(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function nR(){return Math.random().toString(36).substr(2,8)}function cy(t,e){return{usr:t.state,key:t.key,idx:e}}function lf(t,e,n,r){return n===void 0&&(n=null),ba({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?to(e):e,{state:n,key:e&&e.key||r||nR()})}function rc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function to(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function rR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Or.Pop,u=null,h=f();h==null&&(h=0,o.replaceState(ba({},o.state,{idx:h}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=Or.Pop;let x=f(),w=x==null?null:x-h;h=x,u&&u({action:l,location:P.location,delta:w})}function m(x,w){l=Or.Push;let _=lf(P.location,x,w);h=f()+1;let E=cy(_,h),N=P.createHref(_);try{o.pushState(E,"",N)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;i.location.assign(N)}s&&u&&u({action:l,location:P.location,delta:1})}function S(x,w){l=Or.Replace;let _=lf(P.location,x,w);h=f();let E=cy(_,h),N=P.createHref(_);o.replaceState(E,"",N),s&&u&&u({action:l,location:P.location,delta:0})}function C(x){let w=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof x=="string"?x:rc(x);return _=_.replace(/ $/,"%20"),We(w,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,w)}let P={get action(){return l},get location(){return t(i,o)},listen(x){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(uy,p),u=x,()=>{i.removeEventListener(uy,p),u=null}},createHref(x){return e(i,x)},createURL:C,encodeLocation(x){let w=C(x);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:S,go(x){return o.go(x)}};return P}var hy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(hy||(hy={}));function iR(t,e,n){return n===void 0&&(n="/"),sR(t,e,n,!1)}function sR(t,e,n,r){let i=typeof e=="string"?to(e):e,s=Lp(i.pathname||"/",n);if(s==null)return null;let o=hw(t);oR(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let h=yR(s);l=mR(o[u],h,r)}return l}function hw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(We(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=Br([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(We(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),hw(s.children,e,f,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:fR(h,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of dw(s.path))i(s,o,u)}),e}function dw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=dw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function oR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:pR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const aR=/^:[\w-]+$/,lR=3,uR=2,cR=1,hR=10,dR=-2,dy=t=>t==="*";function fR(t,e){let n=t.split("/"),r=n.length;return n.some(dy)&&(r+=dR),e&&(r+=uR),n.filter(i=>!dy(i)).reduce((i,s)=>i+(aR.test(s)?lR:s===""?cR:hR),r)}function pR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function mR(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],h=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=fy({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},f),m=u.route;if(!p&&h&&n&&!r[r.length-1].route.index&&(p=fy({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Br([s,p.pathname]),pathnameBase:ER(Br([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=Br([s,p.pathnameBase]))}return o}function fy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=gR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((h,f,p)=>{let{paramName:m,isOptional:S}=f;if(m==="*"){let P=l[p]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const C=l[p];return S&&!C?h[m]=void 0:h[m]=(C||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:o,pattern:t}}function gR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),cw(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function yR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return cw(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Lp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function vR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?to(t):t;return{pathname:n?n.startsWith("/")?n:_R(n,e):e,search:TR(r),hash:IR(i)}}function _R(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Yh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function wR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function fw(t,e){let n=wR(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function pw(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=to(t):(i=ba({},t),We(!i.pathname||!i.pathname.includes("?"),Yh("?","pathname","search",i)),We(!i.pathname||!i.pathname.includes("#"),Yh("#","pathname","hash",i)),We(!i.search||!i.search.includes("#"),Yh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=vR(i,l),h=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||f)&&(u.pathname+="/"),u}const Br=t=>t.join("/").replace(/\/\/+/g,"/"),ER=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),TR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,IR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function SR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const mw=["post","put","patch","delete"];new Set(mw);const RR=["get",...mw];new Set(RR);/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Na(){return Na=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Na.apply(this,arguments)}const Vp=A.createContext(null),CR=A.createContext(null),ji=A.createContext(null),Hc=A.createContext(null),zi=A.createContext({outlet:null,matches:[],isDataRoute:!1}),gw=A.createContext(null);function AR(t,e){let{relative:n}=e===void 0?{}:e;Ka()||We(!1);let{basename:r,navigator:i}=A.useContext(ji),{hash:s,pathname:o,search:l}=vw(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Br([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Ka(){return A.useContext(Hc)!=null}function Wc(){return Ka()||We(!1),A.useContext(Hc).location}function yw(t){A.useContext(ji).static||A.useLayoutEffect(t)}function PR(){let{isDataRoute:t}=A.useContext(zi);return t?jR():kR()}function kR(){Ka()||We(!1);let t=A.useContext(Vp),{basename:e,future:n,navigator:r}=A.useContext(ji),{matches:i}=A.useContext(zi),{pathname:s}=Wc(),o=JSON.stringify(fw(i,n.v7_relativeSplatPath)),l=A.useRef(!1);return yw(()=>{l.current=!0}),A.useCallback(function(h,f){if(f===void 0&&(f={}),!l.current)return;if(typeof h=="number"){r.go(h);return}let p=pw(h,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Br([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,s,t])}function vw(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=A.useContext(ji),{matches:i}=A.useContext(zi),{pathname:s}=Wc(),o=JSON.stringify(fw(i,r.v7_relativeSplatPath));return A.useMemo(()=>pw(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function xR(t,e){return bR(t,e)}function bR(t,e,n,r){Ka()||We(!1);let{navigator:i}=A.useContext(ji),{matches:s}=A.useContext(zi),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let h=Wc(),f;if(e){var p;let x=typeof e=="string"?to(e):e;u==="/"||(p=x.pathname)!=null&&p.startsWith(u)||We(!1),f=x}else f=h;let m=f.pathname||"/",S=m;if(u!=="/"){let x=u.replace(/^\//,"").split("/");S="/"+m.replace(/^\//,"").split("/").slice(x.length).join("/")}let C=iR(t,{pathname:S}),P=VR(C&&C.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:Br([u,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?u:Br([u,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),s,n,r);return e&&P?A.createElement(Hc.Provider,{value:{location:Na({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Or.Pop}},P):P}function NR(){let t=UR(),e=SR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},e),n?A.createElement("pre",{style:i},n):null,null)}const OR=A.createElement(NR,null);class DR extends A.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?A.createElement(zi.Provider,{value:this.props.routeContext},A.createElement(gw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function LR(t){let{routeContext:e,match:n,children:r}=t,i=A.useContext(Vp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),A.createElement(zi.Provider,{value:e},r)}function VR(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||We(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=f),p.route.id){let{loaderData:m,errors:S}=n,C=p.route.loader&&m[p.route.id]===void 0&&(!S||S[p.route.id]===void 0);if(p.route.lazy||C){u=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((f,p,m)=>{let S,C=!1,P=null,x=null;n&&(S=l&&p.route.id?l[p.route.id]:void 0,P=p.route.errorElement||OR,u&&(h<0&&m===0?(C=!0,x=null):h===m&&(C=!0,x=p.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,m+1)),_=()=>{let E;return S?E=P:C?E=x:p.route.Component?E=A.createElement(p.route.Component,null):p.route.element?E=p.route.element:E=f,A.createElement(LR,{match:p,routeContext:{outlet:f,matches:w,isDataRoute:n!=null},children:E})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?A.createElement(DR,{location:n.location,revalidation:n.revalidation,component:P,error:S,children:_(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):_()},null)}var _w=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(_w||{}),ic=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ic||{});function MR(t){let e=A.useContext(Vp);return e||We(!1),e}function FR(t){let e=A.useContext(CR);return e||We(!1),e}function $R(t){let e=A.useContext(zi);return e||We(!1),e}function ww(t){let e=$R(),n=e.matches[e.matches.length-1];return n.route.id||We(!1),n.route.id}function UR(){var t;let e=A.useContext(gw),n=FR(ic.UseRouteError),r=ww(ic.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function jR(){let{router:t}=MR(_w.UseNavigateStable),e=ww(ic.UseNavigateStable),n=A.useRef(!1);return yw(()=>{n.current=!0}),A.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Na({fromRouteId:e},s)))},[t,e])}function uf(t){We(!1)}function zR(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Or.Pop,navigator:s,static:o=!1,future:l}=t;Ka()&&We(!1);let u=e.replace(/^\/*/,"/"),h=A.useMemo(()=>({basename:u,navigator:s,static:o,future:Na({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=to(r));let{pathname:f="/",search:p="",hash:m="",state:S=null,key:C="default"}=r,P=A.useMemo(()=>{let x=Lp(f,u);return x==null?null:{location:{pathname:x,search:p,hash:m,state:S,key:C},navigationType:i}},[u,f,p,m,S,C,i]);return P==null?null:A.createElement(ji.Provider,{value:h},A.createElement(Hc.Provider,{children:n,value:P}))}function BR(t){let{children:e,location:n}=t;return xR(cf(e),n)}new Promise(()=>{});function cf(t,e){e===void 0&&(e=[]);let n=[];return A.Children.forEach(t,(r,i)=>{if(!A.isValidElement(r))return;let s=[...e,i];if(r.type===A.Fragment){n.push.apply(n,cf(r.props.children,s));return}r.type!==uf&&We(!1),!r.props.index||!r.props.children||We(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=cf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hf(){return hf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hf.apply(this,arguments)}function HR(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function WR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function qR(t,e){return t.button===0&&(!e||e==="_self")&&!WR(t)}const GR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],KR="6";try{window.__reactRouterVersion=KR}catch{}const QR="startTransition",py=BT[QR];function YR(t){let{basename:e,children:n,future:r,window:i}=t,s=A.useRef();s.current==null&&(s.current=tR({window:i,v5Compat:!0}));let o=s.current,[l,u]=A.useState({action:o.action,location:o.location}),{v7_startTransition:h}=r||{},f=A.useCallback(p=>{h&&py?py(()=>u(p)):u(p)},[u,h]);return A.useLayoutEffect(()=>o.listen(f),[o,f]),A.createElement(zR,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const XR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",JR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,my=A.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:h,preventScrollReset:f,unstable_viewTransition:p}=e,m=HR(e,GR),{basename:S}=A.useContext(ji),C,P=!1;if(typeof h=="string"&&JR.test(h)&&(C=h,XR))try{let E=new URL(window.location.href),N=h.startsWith("//")?new URL(E.protocol+h):new URL(h),V=Lp(N.pathname,S);N.origin===E.origin&&V!=null?h=V+N.search+N.hash:P=!0}catch{}let x=AR(h,{relative:i}),w=ZR(h,{replace:o,state:l,target:u,preventScrollReset:f,relative:i,unstable_viewTransition:p});function _(E){r&&r(E),E.defaultPrevented||w(E)}return A.createElement("a",hf({},m,{href:C||x,onClick:P||s?r:_,ref:n,target:u}))});var gy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(gy||(gy={}));var yy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(yy||(yy={}));function ZR(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=PR(),h=Wc(),f=vw(t,{relative:o});return A.useCallback(p=>{if(qR(p,n)){p.preventDefault();let m=r!==void 0?r:rc(h)===rc(f);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[h,u,f,r,i,n,t,s,o,l])}var vy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},eC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Tw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|h>>6,S=h&63;u||(S=64,o||(m=64)),r.push(n[f],n[p],n[m],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ew(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new tC;const m=s<<2|l>>4;if(r.push(m),h!==64){const S=l<<4&240|h>>2;if(r.push(S),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nC=function(t){const e=Ew(t);return Tw.encodeByteArray(e,!0)},sc=function(t){return nC(t).replace(/\./g,"")},Iw=function(t){try{return Tw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=()=>rC().__FIREBASE_DEFAULTS__,sC=()=>{if(typeof process>"u"||typeof vy>"u")return;const t=vy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Iw(t[1]);return e&&JSON.parse(e)},qc=()=>{try{return iC()||sC()||oC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sw=t=>{var e,n;return(n=(e=qc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},aC=t=>{const e=Sw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Rw=()=>{var t;return(t=qc())===null||t===void 0?void 0:t.config},Cw=t=>{var e;return(e=qc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[sc(JSON.stringify(n)),sc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function hC(){var t;const e=(t=qc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pC(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mC(){return!hC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gC(){try{return typeof indexedDB=="object"}catch{return!1}}function yC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC="FirebaseError";class ur extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vC,Object.setPrototypeOf(this,ur.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qa.prototype.create)}}class Qa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?_C(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ur(i,l,r)}}function _C(t,e){return t.replace(wC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wC=/\{\$([^}]+)}/g;function EC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function oc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(_y(s)&&_y(o)){if(!oc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _y(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function TC(t,e){const n=new IC(t,e);return n.subscribe.bind(n)}class IC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");SC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Xh),i.error===void 0&&(i.error=Xh),i.complete===void 0&&(i.complete=Xh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t){return t&&t._delegate?t._delegate:t}class bi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AC(e))try{this.getOrInitializeService({instanceIdentifier:pi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=pi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pi){return this.instances.has(e)}getOptions(e=pi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pi){return this.component?this.component.multipleInstances?e:pi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CC(t){return t===pi?void 0:t}function AC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new RC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const kC={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},xC=le.INFO,bC={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},NC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=bC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mp{constructor(e){this.name=e,this._logLevel=xC,this._logHandler=NC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const OC=(t,e)=>e.some(n=>t instanceof n);let wy,Ey;function DC(){return wy||(wy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LC(){return Ey||(Ey=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Aw=new WeakMap,df=new WeakMap,Pw=new WeakMap,Jh=new WeakMap,Fp=new WeakMap;function VC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Aw.set(n,t)}).catch(()=>{}),Fp.set(e,t),e}function MC(t){if(df.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});df.set(t,e)}let ff={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return df.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function FC(t){ff=t(ff)}function $C(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zh(this),e,...n);return Pw.set(r,e.sort?e.sort():[e]),Hr(r)}:LC().includes(t)?function(...e){return t.apply(Zh(this),e),Hr(Aw.get(this))}:function(...e){return Hr(t.apply(Zh(this),e))}}function UC(t){return typeof t=="function"?$C(t):(t instanceof IDBTransaction&&MC(t),OC(t,DC())?new Proxy(t,ff):t)}function Hr(t){if(t instanceof IDBRequest)return VC(t);if(Jh.has(t))return Jh.get(t);const e=UC(t);return e!==t&&(Jh.set(t,e),Fp.set(e,t)),e}const Zh=t=>Fp.get(t);function jC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Hr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Hr(o.result),u.oldVersion,u.newVersion,Hr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const zC=["get","getKey","getAll","getAllKeys","count"],BC=["put","add","delete","clear"],ed=new Map;function Ty(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ed.get(e))return ed.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=BC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||zC.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return ed.set(e,s),s}FC(t=>({...t,get:(e,n,r)=>Ty(e,n)||t.get(e,n,r),has:(e,n)=>!!Ty(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function WC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pf="@firebase/app",Iy="0.10.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=new Mp("@firebase/app"),qC="@firebase/app-compat",GC="@firebase/analytics-compat",KC="@firebase/analytics",QC="@firebase/app-check-compat",YC="@firebase/app-check",XC="@firebase/auth",JC="@firebase/auth-compat",ZC="@firebase/database",eA="@firebase/database-compat",tA="@firebase/functions",nA="@firebase/functions-compat",rA="@firebase/installations",iA="@firebase/installations-compat",sA="@firebase/messaging",oA="@firebase/messaging-compat",aA="@firebase/performance",lA="@firebase/performance-compat",uA="@firebase/remote-config",cA="@firebase/remote-config-compat",hA="@firebase/storage",dA="@firebase/storage-compat",fA="@firebase/firestore",pA="@firebase/vertexai-preview",mA="@firebase/firestore-compat",gA="firebase",yA="10.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="[DEFAULT]",vA={[pf]:"fire-core",[qC]:"fire-core-compat",[KC]:"fire-analytics",[GC]:"fire-analytics-compat",[YC]:"fire-app-check",[QC]:"fire-app-check-compat",[XC]:"fire-auth",[JC]:"fire-auth-compat",[ZC]:"fire-rtdb",[eA]:"fire-rtdb-compat",[tA]:"fire-fn",[nA]:"fire-fn-compat",[rA]:"fire-iid",[iA]:"fire-iid-compat",[sA]:"fire-fcm",[oA]:"fire-fcm-compat",[aA]:"fire-perf",[lA]:"fire-perf-compat",[uA]:"fire-rc",[cA]:"fire-rc-compat",[hA]:"fire-gcs",[dA]:"fire-gcs-compat",[fA]:"fire-fst",[mA]:"fire-fst-compat",[pA]:"fire-vertex","fire-js":"fire-js",[gA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=new Map,_A=new Map,gf=new Map;function Sy(t,e){try{t.container.addComponent(e)}catch(n){Ni.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ms(t){const e=t.name;if(gf.has(e))return Ni.debug(`There were multiple attempts to register component ${e}.`),!1;gf.set(e,t);for(const n of ac.values())Sy(n,t);for(const n of _A.values())Sy(n,t);return!0}function $p(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wr=new Qa("app","Firebase",wA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=yA;function kw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Wr.create("bad-app-name",{appName:String(i)});if(n||(n=Rw()),!n)throw Wr.create("no-options");const s=ac.get(i);if(s){if(oc(n,s.options)&&oc(r,s.config))return s;throw Wr.create("duplicate-app",{appName:i})}const o=new PC(i);for(const u of gf.values())o.addComponent(u);const l=new EA(n,r,o);return ac.set(i,l),l}function xw(t=mf){const e=ac.get(t);if(!e&&t===mf&&Rw())return kw();if(!e)throw Wr.create("no-app",{appName:t});return e}function qr(t,e,n){var r;let i=(r=vA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ni.warn(l.join(" "));return}Ms(new bi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA="firebase-heartbeat-database",IA=1,Oa="firebase-heartbeat-store";let td=null;function bw(){return td||(td=jC(TA,IA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Oa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Wr.create("idb-open",{originalErrorMessage:t.message})})),td}async function SA(t){try{const n=(await bw()).transaction(Oa),r=await n.objectStore(Oa).get(Nw(t));return await n.done,r}catch(e){if(e instanceof ur)Ni.warn(e.message);else{const n=Wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ni.warn(n.message)}}}async function Ry(t,e){try{const r=(await bw()).transaction(Oa,"readwrite");await r.objectStore(Oa).put(e,Nw(t)),await r.done}catch(n){if(n instanceof ur)Ni.warn(n.message);else{const r=Wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ni.warn(r.message)}}}function Nw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=1024,CA=30*24*60*60*1e3;class AA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Cy();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=CA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Cy(),{heartbeatsToSend:r,unsentEntries:i}=PA(this._heartbeatsCache.heartbeats),s=sc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Cy(){return new Date().toISOString().substring(0,10)}function PA(t,e=RA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ay(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ay(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gC()?yC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await SA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ry(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ry(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ay(t){return sc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(t){Ms(new bi("platform-logger",e=>new HC(e),"PRIVATE")),Ms(new bi("heartbeat",e=>new AA(e),"PRIVATE")),qr(pf,Iy,t),qr(pf,Iy,"esm2017"),qr("fire-js","")}xA("");var bA="firebase",NA="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qr(bA,NA,"app");function Up(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Ow(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OA=Ow,Dw=new Qa("auth","Firebase",Ow());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new Mp("@firebase/auth");function DA(t,...e){lc.logLevel<=le.WARN&&lc.warn(`Auth (${no}): ${t}`,...e)}function vu(t,...e){lc.logLevel<=le.ERROR&&lc.error(`Auth (${no}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,...e){throw zp(t,...e)}function bn(t,...e){return zp(t,...e)}function jp(t,e,n){const r=Object.assign(Object.assign({},OA()),{[e]:n});return new Qa("auth","Firebase",r).create(e,{appName:t.name})}function Gr(t){return jp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function LA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ln(t,"argument-error"),jp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Dw.create(t,...e)}function Z(t,e,...n){if(!t)throw zp(e,...n)}function Yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vu(e),new Error(e)}function sr(t,e){t||Yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function VA(){return Py()==="http:"||Py()==="https:"}function Py(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VA()||dC()||"connection"in navigator)?navigator.onLine:!0}function FA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n){this.shortDelay=e,this.longDelay=n,sr(n>e,"Short delay should be less than long delay!"),this.isMobile=cC()||fC()}get(){return MA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(t,e){sr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=new Xa(3e4,6e4);function Hp(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ro(t,e,n,r,i={}){return Vw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ya(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),Lw.fetch()(Mw(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function Vw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$A),e);try{const i=new zA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Yl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Yl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Yl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw jp(t,f,h);Ln(t,f)}}catch(i){if(i instanceof ur)throw i;Ln(t,"network-request-failed",{message:String(i)})}}async function jA(t,e,n,r,i={}){const s=await ro(t,e,n,r,i);return"mfaPendingCredential"in s&&Ln(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Mw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Bp(t.config,i):`${t.config.apiScheme}://${i}`}class zA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bn(this.auth,"network-request-failed")),UA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=bn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BA(t,e){return ro(t,"POST","/v1/accounts:delete",e)}async function Fw(t,e){return ro(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HA(t,e=!1){const n=Tn(t),r=await n.getIdToken(e),i=Wp(r);Z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:oa(nd(i.auth_time)),issuedAtTime:oa(nd(i.iat)),expirationTime:oa(nd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function nd(t){return Number(t)*1e3}function Wp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Iw(n);return i?JSON.parse(i):(vu("Failed to decode base64 JWT payload"),null)}catch(i){return vu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ky(t){const e=Wp(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Da(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ur&&WA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function WA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=oa(this.lastLoginAt),this.creationTime=oa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Da(t,Fw(n,{idToken:r}));Z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?$w(s.providerUserInfo):[],l=KA(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new vf(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function GA(t){const e=Tn(t);await uc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $w(t){return t.map(e=>{var{providerId:n}=e,r=Up(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QA(t,e){const n=await Vw(t,{},async()=>{const r=Ya({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Mw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Lw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function YA(t,e){return ro(t,"POST","/v2/accounts:revokeToken",Hp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ky(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=ky(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await QA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Cs;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cs,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Up(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Da(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return HA(this,e)}reload(){return GA(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qn(this.auth.app))return Promise.reject(Gr(this.auth));const e=await this.getIdToken();return await Da(this,BA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,S=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,x=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(h=n.createdAt)!==null&&h!==void 0?h:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:E,emailVerified:N,isAnonymous:V,providerData:L,stsTokenManager:v}=n;Z(E&&v,e,"internal-error");const y=Cs.fromJSON(this.name,v);Z(typeof E=="string",e,"internal-error"),Tr(p,e.name),Tr(m,e.name),Z(typeof N=="boolean",e,"internal-error"),Z(typeof V=="boolean",e,"internal-error"),Tr(S,e.name),Tr(C,e.name),Tr(P,e.name),Tr(x,e.name),Tr(w,e.name),Tr(_,e.name);const T=new Xn({uid:E,auth:e,email:m,emailVerified:N,displayName:p,isAnonymous:V,photoURL:C,phoneNumber:S,tenantId:P,stsTokenManager:y,createdAt:w,lastLoginAt:_});return L&&Array.isArray(L)&&(T.providerData=L.map(R=>Object.assign({},R))),x&&(T._redirectEventId=x),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new Cs;i.updateFromServerResponse(n);const s=new Xn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await uc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?$w(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Cs;l.updateFromIdToken(r);const u=new Xn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new vf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=new Map;function Jn(t){sr(t instanceof Function,"Expected a class definition");let e=xy.get(t);return e?(sr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Uw.type="NONE";const by=Uw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(t,e,n){return`firebase:${t}:${e}:${n}`}class As{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=_u(this.userKey,i.apiKey,s),this.fullPersistenceKey=_u("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new As(Jn(by),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Jn(by);const o=_u(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const p=Xn._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new As(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new As(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ww(e))return"Blackberry";if(qw(e))return"Webos";if(qp(e))return"Safari";if((e.includes("chrome/")||zw(e))&&!e.includes("edge/"))return"Chrome";if(Hw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jw(t=vt()){return/firefox\//i.test(t)}function qp(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zw(t=vt()){return/crios\//i.test(t)}function Bw(t=vt()){return/iemobile/i.test(t)}function Hw(t=vt()){return/android/i.test(t)}function Ww(t=vt()){return/blackberry/i.test(t)}function qw(t=vt()){return/webos/i.test(t)}function Gc(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XA(t=vt()){var e;return Gc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JA(){return pC()&&document.documentMode===10}function Gw(t=vt()){return Gc(t)||Hw(t)||qw(t)||Ww(t)||/windows phone/i.test(t)||Bw(t)}function ZA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(t,e=[]){let n;switch(t){case"Browser":n=Ny(vt());break;case"Worker":n=`${Ny(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${no}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tP(t,e={}){return ro(t,"GET","/v2/passwordPolicy",Hp(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP=6;class rP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:nP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Oy(this),this.idTokenSubscription=new Oy(this),this.beforeStateQueue=new eP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await As.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Fw(this,{idToken:e}),r=await Xn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Qn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await uc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qn(this.app))return Promise.reject(Gr(this));const n=e?Tn(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qn(this.app)?Promise.reject(Gr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qn(this.app)?Promise.reject(Gr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tP(this),n=new rP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await YA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jn(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await As.create(this,[Jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ja(t){return Tn(t)}class Oy{constructor(e){this.auth=e,this.observer=null,this.addObserver=TC(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sP(t){Gp=t}function oP(t){return Gp.loadJS(t)}function aP(){return Gp.gapiScript}function lP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uP(t,e){const n=$p(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(oc(s,e??{}))return i;Ln(i,"already-initialized")}return n.initialize({options:e})}function cP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hP(t,e,n){const r=Ja(t);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Qw(e),{host:o,port:l}=dP(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),fP()}function Qw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dP(t){const e=Qw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Dy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Dy(o)}}}function Dy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,n){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(t,e){return jA(t,"POST","/v1/accounts:signInWithIdp",Hp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP="http://localhost";class Oi extends Yw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Oi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Up(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Oi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ps(e,n)}buildRequest(){const e={requestUri:pP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ya(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za extends Kp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Za{constructor(){super("facebook.com")}static credential(e){return Oi._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Za{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Oi._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends Za{constructor(){super("github.com")}static credential(e){return Oi._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.GITHUB_SIGN_IN_METHOD="github.com";kr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends Za{constructor(){super("twitter.com")}static credential(e,n){return Oi._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xr.credential(n,r)}catch{return null}}}xr.TWITTER_SIGN_IN_METHOD="twitter.com";xr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Xn._fromIdTokenResponse(e,r,i),o=Ly(r);return new Fs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ly(r);return new Fs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ly(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends ur{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,cc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new cc(e,n,r,i)}}function Xw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?cc._fromErrorAndOperation(t,s,e,r):s})}async function mP(t,e,n=!1){const r=await Da(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gP(t,e,n=!1){const{auth:r}=t;if(Qn(r.app))return Promise.reject(Gr(r));const i="reauthenticate";try{const s=await Da(t,Xw(r,i,e,t),n);Z(s.idToken,r,"internal-error");const o=Wp(s.idToken);Z(o,r,"internal-error");const{sub:l}=o;return Z(t.uid===l,r,"user-mismatch"),Fs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ln(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yP(t,e,n=!1){if(Qn(t.app))return Promise.reject(Gr(t));const r="signIn",i=await Xw(t,r,e),s=await Fs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function vP(t,e,n,r){return Tn(t).onIdTokenChanged(e,n,r)}function _P(t,e,n){return Tn(t).beforeAuthStateChanged(e,n)}const hc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hc,"1"),this.storage.removeItem(hc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(){const t=vt();return qp(t)||Gc(t)}const EP=1e3,TP=10;class Zw extends Jw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wP()&&ZA(),this.fallbackToPolling=Gw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);JA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,TP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},EP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zw.type="LOCAL";const IP=Zw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE extends Jw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}eE.type="SESSION";const tE=eE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Kc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await SP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Qp("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(){return window}function CP(t){Nn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function AP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kP(){return nE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE="firebaseLocalStorageDb",xP=1,dc="firebaseLocalStorage",iE="fbase_key";class el{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qc(t,e){return t.transaction([dc],e?"readwrite":"readonly").objectStore(dc)}function bP(){const t=indexedDB.deleteDatabase(rE);return new el(t).toPromise()}function _f(){const t=indexedDB.open(rE,xP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(dc,{keyPath:iE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(dc)?e(r):(r.close(),await bP(),e(await _f()))})})}async function Vy(t,e,n){const r=Qc(t,!0).put({[iE]:e,value:n});return new el(r).toPromise()}async function NP(t,e){const n=Qc(t,!1).get(e),r=await new el(n).toPromise();return r===void 0?null:r.value}function My(t,e){const n=Qc(t,!0).delete(e);return new el(n).toPromise()}const OP=800,DP=3;class sE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _f(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>DP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kc._getInstance(kP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await AP(),!this.activeServiceWorker)return;this.sender=new RP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _f();return await Vy(e,hc,"1"),await My(e,hc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>NP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>My(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Qc(i,!1).getAll();return new el(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sE.type="LOCAL";const LP=sE;new Xa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(t,e){return e?Jn(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp extends Yw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function VP(t){return yP(t.auth,new Yp(t),t.bypassAuthState)}function MP(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),gP(n,new Yp(t),t.bypassAuthState)}async function FP(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),mP(n,new Yp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VP;case"linkViaPopup":case"linkViaRedirect":return FP;case"reauthViaPopup":case"reauthViaRedirect":return MP;default:Ln(this.auth,"internal-error")}}resolve(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P=new Xa(2e3,1e4);class vs extends aE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,vs.currentPopupAction&&vs.currentPopupAction.cancel(),vs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){sr(this.filter.length===1,"Popup operations only handle one event");const e=Qp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$P.get())};e()}}vs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP="pendingRedirect",wu=new Map;class jP extends aE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wu.get(this.auth._key());if(!e){try{const r=await zP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wu.set(this.auth._key(),e)}return this.bypassAuthState||wu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zP(t,e){const n=uE(e),r=lE(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function BP(t,e){return lE(t)._set(uE(e),"true")}function HP(t,e){wu.set(t._key(),e)}function lE(t){return Jn(t._redirectPersistence)}function uE(t){return _u(UP,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(t,e,n){return qP(t,e,n)}async function qP(t,e,n){if(Qn(t.app))return Promise.reject(Gr(t));const r=Ja(t);LA(t,e,Kp),await r._initializationPromise;const i=oE(r,n);return await BP(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function GP(t,e){return await Ja(t)._initializationPromise,cE(t,e,!1)}async function cE(t,e,n=!1){if(Qn(t.app))return Promise.reject(Gr(t));const r=Ja(t),i=oE(r,e),o=await new jP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP=10*60*1e3;class QP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!hE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=KP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fy(e))}saveEventToCache(e){this.cachedEventUids.add(Fy(e)),this.lastProcessedEventTime=Date.now()}}function Fy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XP(t,e={}){return ro(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZP=/^https?/;async function ek(t){if(t.config.emulator)return;const{authorizedDomains:e}=await XP(t);for(const n of e)try{if(tk(n))return}catch{}Ln(t,"unauthorized-domain")}function tk(t){const e=yf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ZP.test(n))return!1;if(JP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=new Xa(3e4,6e4);function $y(){const t=Nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rk(t){return new Promise((e,n)=>{var r,i,s;function o(){$y(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$y(),n(bn(t,"network-request-failed"))},timeout:nk.get()})}if(!((i=(r=Nn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Nn().gapi)===null||s===void 0)&&s.load)o();else{const l=lP("iframefcb");return Nn()[l]=()=>{gapi.load?o():n(bn(t,"network-request-failed"))},oP(`${aP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Eu=null,e})}let Eu=null;function ik(t){return Eu=Eu||rk(t),Eu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=new Xa(5e3,15e3),ok="__/auth/iframe",ak="emulator/auth/iframe",lk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ck(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bp(e,ak):`https://${t.config.authDomain}/${ok}`,r={apiKey:e.apiKey,appName:t.name,v:no},i=uk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ya(r).slice(1)}`}async function hk(t){const e=await ik(t),n=Nn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:ck(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=bn(t,"network-request-failed"),l=Nn().setTimeout(()=>{s(o)},sk.get());function u(){Nn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fk=500,pk=600,mk="_blank",gk="http://localhost";class Uy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yk(t,e,n,r=fk,i=pk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},dk),{width:r.toString(),height:i.toString(),top:s,left:o}),h=vt().toLowerCase();n&&(l=zw(h)?mk:n),jw(h)&&(e=e||gk,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[S,C])=>`${m}${S}=${C},`,"");if(XA(h)&&l!=="_self")return vk(e||"",l),new Uy(null);const p=window.open(e||"",l,f);Z(p,t,"popup-blocked");try{p.focus()}catch{}return new Uy(p)}function vk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k="__/auth/handler",wk="emulator/auth/handler",Ek=encodeURIComponent("fac");async function jy(t,e,n,r,i,s){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:no,eventId:i};if(e instanceof Kp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",EC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Za){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${Ek}=${encodeURIComponent(u)}`:"";return`${Tk(t)}?${Ya(l).slice(1)}${h}`}function Tk({config:t}){return t.emulator?Bp(t,wk):`https://${t.authDomain}/${_k}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="webStorageSupport";class Ik{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tE,this._completeRedirectFn=cE,this._overrideRedirectResult=HP}async _openPopup(e,n,r,i){var s;sr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await jy(e,n,r,yf(),i);return yk(e,o,Qp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await jy(e,n,r,yf(),i);return CP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(sr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await hk(e),r=new QP(e);return n.register("authEvent",i=>(Z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rd,{type:rd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[rd];o!==void 0&&n(!!o),Ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ek(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gw()||qp()||Gc()}}const Sk=Ik;var zy="@firebase/auth",By="1.7.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ak(t){Ms(new bi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kw(t)},h=new iP(r,i,s,u);return cP(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ms(new bi("auth-internal",e=>{const n=Ja(e.getProvider("auth").getImmediate());return(r=>new Rk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qr(zy,By,Ck(t)),qr(zy,By,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=5*60,kk=Cw("authIdTokenMaxAge")||Pk;let Hy=null;const xk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kk)return;const i=n==null?void 0:n.token;Hy!==i&&(Hy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function bk(t=xw()){const e=$p(t,"auth");if(e.isInitialized())return e.getImmediate();const n=uP(t,{popupRedirectResolver:Sk,persistence:[LP,IP,tE]}),r=Cw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=xk(s.toString());_P(n,o,()=>o(n.currentUser)),vP(n,l=>o(l))}}const i=Sw("auth");return i&&hP(n,`http://${i}`),n}function Nk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}sP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=bn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Nk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ak("Browser");var Wy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ii,dE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function T(){}T.prototype=y.prototype,v.D=y.prototype,v.prototype=new T,v.prototype.constructor=v,v.C=function(R,k,b){for(var I=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)I[Le-2]=arguments[Le];return y.prototype[k].apply(R,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,y,T){T||(T=0);var R=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)R[k]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(k=0;16>k;++k)R[k]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=v.g[0],T=v.g[1],k=v.g[2];var b=v.g[3],I=y+(b^T&(k^b))+R[0]+3614090360&4294967295;y=T+(I<<7&4294967295|I>>>25),I=b+(k^y&(T^k))+R[1]+3905402710&4294967295,b=y+(I<<12&4294967295|I>>>20),I=k+(T^b&(y^T))+R[2]+606105819&4294967295,k=b+(I<<17&4294967295|I>>>15),I=T+(y^k&(b^y))+R[3]+3250441966&4294967295,T=k+(I<<22&4294967295|I>>>10),I=y+(b^T&(k^b))+R[4]+4118548399&4294967295,y=T+(I<<7&4294967295|I>>>25),I=b+(k^y&(T^k))+R[5]+1200080426&4294967295,b=y+(I<<12&4294967295|I>>>20),I=k+(T^b&(y^T))+R[6]+2821735955&4294967295,k=b+(I<<17&4294967295|I>>>15),I=T+(y^k&(b^y))+R[7]+4249261313&4294967295,T=k+(I<<22&4294967295|I>>>10),I=y+(b^T&(k^b))+R[8]+1770035416&4294967295,y=T+(I<<7&4294967295|I>>>25),I=b+(k^y&(T^k))+R[9]+2336552879&4294967295,b=y+(I<<12&4294967295|I>>>20),I=k+(T^b&(y^T))+R[10]+4294925233&4294967295,k=b+(I<<17&4294967295|I>>>15),I=T+(y^k&(b^y))+R[11]+2304563134&4294967295,T=k+(I<<22&4294967295|I>>>10),I=y+(b^T&(k^b))+R[12]+1804603682&4294967295,y=T+(I<<7&4294967295|I>>>25),I=b+(k^y&(T^k))+R[13]+4254626195&4294967295,b=y+(I<<12&4294967295|I>>>20),I=k+(T^b&(y^T))+R[14]+2792965006&4294967295,k=b+(I<<17&4294967295|I>>>15),I=T+(y^k&(b^y))+R[15]+1236535329&4294967295,T=k+(I<<22&4294967295|I>>>10),I=y+(k^b&(T^k))+R[1]+4129170786&4294967295,y=T+(I<<5&4294967295|I>>>27),I=b+(T^k&(y^T))+R[6]+3225465664&4294967295,b=y+(I<<9&4294967295|I>>>23),I=k+(y^T&(b^y))+R[11]+643717713&4294967295,k=b+(I<<14&4294967295|I>>>18),I=T+(b^y&(k^b))+R[0]+3921069994&4294967295,T=k+(I<<20&4294967295|I>>>12),I=y+(k^b&(T^k))+R[5]+3593408605&4294967295,y=T+(I<<5&4294967295|I>>>27),I=b+(T^k&(y^T))+R[10]+38016083&4294967295,b=y+(I<<9&4294967295|I>>>23),I=k+(y^T&(b^y))+R[15]+3634488961&4294967295,k=b+(I<<14&4294967295|I>>>18),I=T+(b^y&(k^b))+R[4]+3889429448&4294967295,T=k+(I<<20&4294967295|I>>>12),I=y+(k^b&(T^k))+R[9]+568446438&4294967295,y=T+(I<<5&4294967295|I>>>27),I=b+(T^k&(y^T))+R[14]+3275163606&4294967295,b=y+(I<<9&4294967295|I>>>23),I=k+(y^T&(b^y))+R[3]+4107603335&4294967295,k=b+(I<<14&4294967295|I>>>18),I=T+(b^y&(k^b))+R[8]+1163531501&4294967295,T=k+(I<<20&4294967295|I>>>12),I=y+(k^b&(T^k))+R[13]+2850285829&4294967295,y=T+(I<<5&4294967295|I>>>27),I=b+(T^k&(y^T))+R[2]+4243563512&4294967295,b=y+(I<<9&4294967295|I>>>23),I=k+(y^T&(b^y))+R[7]+1735328473&4294967295,k=b+(I<<14&4294967295|I>>>18),I=T+(b^y&(k^b))+R[12]+2368359562&4294967295,T=k+(I<<20&4294967295|I>>>12),I=y+(T^k^b)+R[5]+4294588738&4294967295,y=T+(I<<4&4294967295|I>>>28),I=b+(y^T^k)+R[8]+2272392833&4294967295,b=y+(I<<11&4294967295|I>>>21),I=k+(b^y^T)+R[11]+1839030562&4294967295,k=b+(I<<16&4294967295|I>>>16),I=T+(k^b^y)+R[14]+4259657740&4294967295,T=k+(I<<23&4294967295|I>>>9),I=y+(T^k^b)+R[1]+2763975236&4294967295,y=T+(I<<4&4294967295|I>>>28),I=b+(y^T^k)+R[4]+1272893353&4294967295,b=y+(I<<11&4294967295|I>>>21),I=k+(b^y^T)+R[7]+4139469664&4294967295,k=b+(I<<16&4294967295|I>>>16),I=T+(k^b^y)+R[10]+3200236656&4294967295,T=k+(I<<23&4294967295|I>>>9),I=y+(T^k^b)+R[13]+681279174&4294967295,y=T+(I<<4&4294967295|I>>>28),I=b+(y^T^k)+R[0]+3936430074&4294967295,b=y+(I<<11&4294967295|I>>>21),I=k+(b^y^T)+R[3]+3572445317&4294967295,k=b+(I<<16&4294967295|I>>>16),I=T+(k^b^y)+R[6]+76029189&4294967295,T=k+(I<<23&4294967295|I>>>9),I=y+(T^k^b)+R[9]+3654602809&4294967295,y=T+(I<<4&4294967295|I>>>28),I=b+(y^T^k)+R[12]+3873151461&4294967295,b=y+(I<<11&4294967295|I>>>21),I=k+(b^y^T)+R[15]+530742520&4294967295,k=b+(I<<16&4294967295|I>>>16),I=T+(k^b^y)+R[2]+3299628645&4294967295,T=k+(I<<23&4294967295|I>>>9),I=y+(k^(T|~b))+R[0]+4096336452&4294967295,y=T+(I<<6&4294967295|I>>>26),I=b+(T^(y|~k))+R[7]+1126891415&4294967295,b=y+(I<<10&4294967295|I>>>22),I=k+(y^(b|~T))+R[14]+2878612391&4294967295,k=b+(I<<15&4294967295|I>>>17),I=T+(b^(k|~y))+R[5]+4237533241&4294967295,T=k+(I<<21&4294967295|I>>>11),I=y+(k^(T|~b))+R[12]+1700485571&4294967295,y=T+(I<<6&4294967295|I>>>26),I=b+(T^(y|~k))+R[3]+2399980690&4294967295,b=y+(I<<10&4294967295|I>>>22),I=k+(y^(b|~T))+R[10]+4293915773&4294967295,k=b+(I<<15&4294967295|I>>>17),I=T+(b^(k|~y))+R[1]+2240044497&4294967295,T=k+(I<<21&4294967295|I>>>11),I=y+(k^(T|~b))+R[8]+1873313359&4294967295,y=T+(I<<6&4294967295|I>>>26),I=b+(T^(y|~k))+R[15]+4264355552&4294967295,b=y+(I<<10&4294967295|I>>>22),I=k+(y^(b|~T))+R[6]+2734768916&4294967295,k=b+(I<<15&4294967295|I>>>17),I=T+(b^(k|~y))+R[13]+1309151649&4294967295,T=k+(I<<21&4294967295|I>>>11),I=y+(k^(T|~b))+R[4]+4149444226&4294967295,y=T+(I<<6&4294967295|I>>>26),I=b+(T^(y|~k))+R[11]+3174756917&4294967295,b=y+(I<<10&4294967295|I>>>22),I=k+(y^(b|~T))+R[2]+718787259&4294967295,k=b+(I<<15&4294967295|I>>>17),I=T+(b^(k|~y))+R[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(k+(I<<21&4294967295|I>>>11))&4294967295,v.g[2]=v.g[2]+k&4294967295,v.g[3]=v.g[3]+b&4294967295}r.prototype.u=function(v,y){y===void 0&&(y=v.length);for(var T=y-this.blockSize,R=this.B,k=this.h,b=0;b<y;){if(k==0)for(;b<=T;)i(this,v,b),b+=this.blockSize;if(typeof v=="string"){for(;b<y;)if(R[k++]=v.charCodeAt(b++),k==this.blockSize){i(this,R),k=0;break}}else for(;b<y;)if(R[k++]=v[b++],k==this.blockSize){i(this,R),k=0;break}}this.h=k,this.o+=y},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;var T=8*this.o;for(y=v.length-8;y<v.length;++y)v[y]=T&255,T/=256;for(this.u(v),v=Array(16),y=T=0;4>y;++y)for(var R=0;32>R;R+=8)v[T++]=this.g[y]>>>R&255;return v};function s(v,y){var T=l;return Object.prototype.hasOwnProperty.call(T,v)?T[v]:T[v]=y(v)}function o(v,y){this.h=y;for(var T=[],R=!0,k=v.length-1;0<=k;k--){var b=v[k]|0;R&&b==y||(T[k]=b,R=!1)}this.g=T}var l={};function u(v){return-128<=v&&128>v?s(v,function(y){return new o([y|0],0>y?-1:0)}):new o([v|0],0>v?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return x(h(-v));for(var y=[],T=1,R=0;v>=T;R++)y[R]=v/T|0,T*=4294967296;return new o(y,0)}function f(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return x(f(v.substring(1),y));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(y,8)),R=p,k=0;k<v.length;k+=8){var b=Math.min(8,v.length-k),I=parseInt(v.substring(k,k+b),y);8>b?(b=h(Math.pow(y,b)),R=R.j(b).add(h(I))):(R=R.j(T),R=R.add(h(I)))}return R}var p=u(0),m=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-x(this).m();for(var v=0,y=1,T=0;T<this.g.length;T++){var R=this.i(T);v+=(0<=R?R:4294967296+R)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(C(this))return"0";if(P(this))return"-"+x(this).toString(v);for(var y=h(Math.pow(v,6)),T=this,R="";;){var k=N(T,y).g;T=w(T,k.j(y));var b=((0<T.g.length?T.g[0]:T.h)>>>0).toString(v);if(T=k,C(T))return b+R;for(;6>b.length;)b="0"+b;R=b+R}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function C(v){if(v.h!=0)return!1;for(var y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function P(v){return v.h==-1}t.l=function(v){return v=w(this,v),P(v)?-1:C(v)?0:1};function x(v){for(var y=v.g.length,T=[],R=0;R<y;R++)T[R]=~v.g[R];return new o(T,~v.h).add(m)}t.abs=function(){return P(this)?x(this):this},t.add=function(v){for(var y=Math.max(this.g.length,v.g.length),T=[],R=0,k=0;k<=y;k++){var b=R+(this.i(k)&65535)+(v.i(k)&65535),I=(b>>>16)+(this.i(k)>>>16)+(v.i(k)>>>16);R=I>>>16,b&=65535,I&=65535,T[k]=I<<16|b}return new o(T,T[T.length-1]&-2147483648?-1:0)};function w(v,y){return v.add(x(y))}t.j=function(v){if(C(this)||C(v))return p;if(P(this))return P(v)?x(this).j(x(v)):x(x(this).j(v));if(P(v))return x(this.j(x(v)));if(0>this.l(S)&&0>v.l(S))return h(this.m()*v.m());for(var y=this.g.length+v.g.length,T=[],R=0;R<2*y;R++)T[R]=0;for(R=0;R<this.g.length;R++)for(var k=0;k<v.g.length;k++){var b=this.i(R)>>>16,I=this.i(R)&65535,Le=v.i(k)>>>16,bt=v.i(k)&65535;T[2*R+2*k]+=I*bt,_(T,2*R+2*k),T[2*R+2*k+1]+=b*bt,_(T,2*R+2*k+1),T[2*R+2*k+1]+=I*Le,_(T,2*R+2*k+1),T[2*R+2*k+2]+=b*Le,_(T,2*R+2*k+2)}for(R=0;R<y;R++)T[R]=T[2*R+1]<<16|T[2*R];for(R=y;R<2*y;R++)T[R]=0;return new o(T,0)};function _(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function E(v,y){this.g=v,this.h=y}function N(v,y){if(C(y))throw Error("division by zero");if(C(v))return new E(p,p);if(P(v))return y=N(x(v),y),new E(x(y.g),x(y.h));if(P(y))return y=N(v,x(y)),new E(x(y.g),y.h);if(30<v.g.length){if(P(v)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,R=y;0>=R.l(v);)T=V(T),R=V(R);var k=L(T,1),b=L(R,1);for(R=L(R,2),T=L(T,2);!C(R);){var I=b.add(R);0>=I.l(v)&&(k=k.add(T),b=I),R=L(R,1),T=L(T,1)}return y=w(v,k.j(y)),new E(k,y)}for(k=p;0<=v.l(y);){for(T=Math.max(1,Math.floor(v.m()/y.m())),R=Math.ceil(Math.log(T)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),b=h(T),I=b.j(y);P(I)||0<I.l(v);)T-=R,b=h(T),I=b.j(y);C(b)&&(b=m),k=k.add(b),v=w(v,I)}return new E(k,v)}t.A=function(v){return N(this,v).h},t.and=function(v){for(var y=Math.max(this.g.length,v.g.length),T=[],R=0;R<y;R++)T[R]=this.i(R)&v.i(R);return new o(T,this.h&v.h)},t.or=function(v){for(var y=Math.max(this.g.length,v.g.length),T=[],R=0;R<y;R++)T[R]=this.i(R)|v.i(R);return new o(T,this.h|v.h)},t.xor=function(v){for(var y=Math.max(this.g.length,v.g.length),T=[],R=0;R<y;R++)T[R]=this.i(R)^v.i(R);return new o(T,this.h^v.h)};function V(v){for(var y=v.g.length+1,T=[],R=0;R<y;R++)T[R]=v.i(R)<<1|v.i(R-1)>>>31;return new o(T,v.h)}function L(v,y){var T=y>>5;y%=32;for(var R=v.g.length-T,k=[],b=0;b<R;b++)k[b]=0<y?v.i(b+T)>>>y|v.i(b+T+1)<<32-y:v.i(b+T);return new o(k,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,dE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Ii=o}).apply(typeof Wy<"u"?Wy:typeof self<"u"?self:typeof window<"u"?window:{});var Xl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fE,pE,Go,mE,Tu,wf,gE,yE,vE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xl=="object"&&Xl];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var O=a[g];if(!(O in d))break e;d=d[O]}a=a[a.length-1],g=d[a],c=c(g),c!=g&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,g=!1,O={next:function(){if(!g&&d<a.length){var D=d++;return{value:c(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function p(a,c,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,g),a.apply(c,O)}}return function(){return a.apply(c,arguments)}}function m(a,c,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function S(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,O,D){for(var j=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)j[ve-2]=arguments[ve];return c.prototype[O].apply(g,j)}}function P(a){const c=a.length;if(0<c){const d=Array(c);for(let g=0;g<c;g++)d[g]=a[g];return d}return[]}function x(a,c){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const O=a.length||0,D=g.length||0;a.length=O+D;for(let j=0;j<D;j++)a[O+j]=g[j]}else a.push(g)}}class w{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(a){return/^[\s\xa0]*$/.test(a)}function E(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function N(a){return N[" "](a),a}N[" "]=function(){};var V=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function L(a,c,d){for(const g in a)c.call(d,a[g],g,a)}function v(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function y(a){const c={};for(const d in a)c[d]=a[d];return c}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(a,c){let d,g;for(let O=1;O<arguments.length;O++){g=arguments[O];for(d in g)a[d]=g[d];for(let D=0;D<T.length;D++)d=T[D],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function k(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function b(a){l.setTimeout(()=>{throw a},0)}function I(){var a=W;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Le{constructor(){this.h=this.g=null}add(c,d){const g=bt.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var bt=new w(()=>new Vt,a=>a.reset());class Vt{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let $e,z=!1,W=new Le,K=()=>{const a=l.Promise.resolve(void 0);$e=()=>{a.then(ce)}};var ce=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(d){b(d)}var c=bt;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}z=!1};function J(){this.s=this.s,this.C=this.C}J.prototype.s=!1,J.prototype.ma=function(){this.s||(this.s=!0,this.N())},J.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var Ae=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function qe(a,c){if(ge.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(V){e:{try{N(c.nodeName);var O=!0;break e}catch{}O=!1}O||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Pe[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&qe.aa.h.call(this)}}C(qe,ge);var Pe={2:"touch",3:"pen",4:"mouse"};qe.prototype.h=function(){qe.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ze="closure_listenable_"+(1e6*Math.random()|0),cn=0;function Mt(a,c,d,g,O){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=O,this.key=++cn,this.da=this.fa=!1}function en(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function et(a){this.src=a,this.g={},this.h=0}et.prototype.add=function(a,c,d,g,O){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var j=cr(a,c,g,O);return-1<j?(c=a[j],d||(c.fa=!1)):(c=new Mt(c,this.src,D,!!g,O),c.fa=d,a.push(c)),c};function Ue(a,c){var d=c.type;if(d in a.g){var g=a.g[d],O=Array.prototype.indexOf.call(g,c,void 0),D;(D=0<=O)&&Array.prototype.splice.call(g,O,1),D&&(en(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function cr(a,c,d,g){for(var O=0;O<a.length;++O){var D=a[O];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==g)return O}return-1}var hr="closure_lm_"+(1e6*Math.random()|0),si={};function Wi(a,c,d,g,O){if(Array.isArray(c)){for(var D=0;D<c.length;D++)Wi(a,c[D],d,g,O);return null}return d=ul(d),a&&a[Ze]?a.K(c,d,h(g)?!!g.capture:!!g,O):co(a,c,d,!1,g,O)}function co(a,c,d,g,O,D){if(!c)throw Error("Invalid event type");var j=h(O)?!!O.capture:!!O,ve=qi(a);if(ve||(a[hr]=ve=new et(a)),d=ve.add(c,d,g,j,D),d.proxy)return d;if(g=Ve(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)Ae||(O=j),O===void 0&&(O=!1),a.addEventListener(c.toString(),g,O);else if(a.attachEvent)a.attachEvent(ho(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ve(){function a(d){return c.call(a.src,a.listener,d)}const c=ll;return a}function al(a,c,d,g,O){if(Array.isArray(c))for(var D=0;D<c.length;D++)al(a,c[D],d,g,O);else g=h(g)?!!g.capture:!!g,d=ul(d),a&&a[Ze]?(a=a.i,c=String(c).toString(),c in a.g&&(D=a.g[c],d=cr(D,d,g,O),-1<d&&(en(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[c],a.h--)))):a&&(a=qi(a))&&(c=a.g[c.toString()],a=-1,c&&(a=cr(c,d,g,O)),(d=-1<a?c[a]:null)&&dr(d))}function dr(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Ze])Ue(c.i,a);else{var d=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(d,g,a.capture):c.detachEvent?c.detachEvent(ho(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=qi(c))?(Ue(d,a),d.h==0&&(d.src=null,c[hr]=null)):en(a)}}}function ho(a){return a in si?si[a]:si[a]="on"+a}function ll(a,c){if(a.da)a=!0;else{c=new qe(c,this);var d=a.listener,g=a.ha||a.src;a.fa&&dr(a),a=d.call(g,c)}return a}function qi(a){return a=a[hr],a instanceof et?a:null}var Gi="__closure_events_fn_"+(1e9*Math.random()>>>0);function ul(a){return typeof a=="function"?a:(a[Gi]||(a[Gi]=function(c){return a.handleEvent(c)}),a[Gi])}function tt(){J.call(this),this.i=new et(this),this.M=this,this.F=null}C(tt,J),tt.prototype[Ze]=!0,tt.prototype.removeEventListener=function(a,c,d,g){al(this,a,c,d,g)};function nt(a,c){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new ge(c,a);else if(c instanceof ge)c.target=c.target||a;else{var O=c;c=new ge(g,a),R(c,O)}if(O=!0,d)for(var D=d.length-1;0<=D;D--){var j=c.g=d[D];O=fr(j,g,!0,c)&&O}if(j=c.g=a,O=fr(j,g,!0,c)&&O,O=fr(j,g,!1,c)&&O,d)for(D=0;D<d.length;D++)j=c.g=d[D],O=fr(j,g,!1,c)&&O}tt.prototype.N=function(){if(tt.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],g=0;g<d.length;g++)en(d[g]);delete a.g[c],a.h--}}this.F=null},tt.prototype.K=function(a,c,d,g){return this.i.add(String(a),c,!1,d,g)},tt.prototype.L=function(a,c,d,g){return this.i.add(String(a),c,!0,d,g)};function fr(a,c,d,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var O=!0,D=0;D<c.length;++D){var j=c[D];if(j&&!j.da&&j.capture==d){var ve=j.listener,ht=j.ha||j.src;j.fa&&Ue(a.i,j),O=ve.call(ht,g)!==!1&&O}}return O&&!g.defaultPrevented}function cl(a,c,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function hl(a){a.g=cl(()=>{a.g=null,a.i&&(a.i=!1,hl(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class dl extends J{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:hl(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pr(a){J.call(this),this.h=a,this.g={}}C(pr,J);var fl=[];function pl(a){L(a.g,function(c,d){this.g.hasOwnProperty(d)&&dr(c)},a),a.g={}}pr.prototype.N=function(){pr.aa.N.call(this),pl(this)},pr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ki=l.JSON.stringify,ph=l.JSON.parse,mh=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function fo(){}fo.prototype.h=null;function po(a){return a.h||(a.h=a.i())}function ml(){}var mr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qi(){ge.call(this,"d")}C(Qi,ge);function Fn(){ge.call(this,"c")}C(Fn,ge);var $n={},gl=null;function oi(){return gl=gl||new tt}$n.La="serverreachability";function mo(a){ge.call(this,$n.La,a)}C(mo,ge);function gr(a){const c=oi();nt(c,new mo(c))}$n.STAT_EVENT="statevent";function go(a,c){ge.call(this,$n.STAT_EVENT,a),this.stat=c}C(go,ge);function rt(a){const c=oi();nt(c,new go(c,a))}$n.Ma="timingevent";function yo(a,c){ge.call(this,$n.Ma,a),this.size=c}C(yo,ge);function yr(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function ai(){this.g=!0}ai.prototype.xa=function(){this.g=!1};function gh(a,c,d,g,O,D){a.info(function(){if(a.g)if(D)for(var j="",ve=D.split("&"),ht=0;ht<ve.length;ht++){var fe=ve[ht].split("=");if(1<fe.length){var Et=fe[0];fe=fe[1];var Tt=Et.split("_");j=2<=Tt.length&&Tt[1]=="type"?j+(Et+"="+fe+"&"):j+(Et+"=redacted&")}}else j=null;else j=D;return"XMLHTTP REQ ("+g+") [attempt "+O+"]: "+c+`
`+d+`
`+j})}function In(a,c,d,g,O,D,j){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+O+"]: "+c+`
`+d+`
`+D+" "+j})}function it(a,c,d,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+yl(a,d)+(g?" "+g:"")})}function vo(a,c){a.info(function(){return"TIMEOUT: "+c})}ai.prototype.info=function(){};function yl(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var O=g[1];if(Array.isArray(O)&&!(1>O.length)){var D=O[0];if(D!="noop"&&D!="stop"&&D!="close")for(var j=1;j<O.length;j++)O[j]=""}}}}return Ki(d)}catch{return c}}var li={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sn;function Yi(){}C(Yi,fo),Yi.prototype.g=function(){return new XMLHttpRequest},Yi.prototype.i=function(){return{}},Sn=new Yi;function wt(a,c,d,g){this.j=a,this.i=c,this.l=d,this.R=g||1,this.U=new pr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _o}function _o(){this.i=null,this.g="",this.h=!1}var ui={},Xi={};function wo(a,c,d){a.L=1,a.v=Rl(st(c)),a.m=d,a.P=!0,vl(a,null)}function vl(a,c){a.F=Date.now(),Me(a),a.A=st(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Nm(d.i,"t",g),a.C=0,d=a.j.J,a.h=new _o,a.g=Ym(a.j,d?c:null,!a.m),0<a.O&&(a.M=new dl(m(a.Y,a,a.g),a.O)),c=a.U,d=a.g,g=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(fl[0]=O.toString()),O=fl);for(var D=0;D<O.length;D++){var j=Wi(d,O[D],g||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),gr(),gh(a.i,a.u,a.A,a.l,a.R,a.m)}wt.prototype.ca=function(a){a=a.target;const c=this.M;c&&zn(a)==3?c.j():this.Y(a)},wt.prototype.Y=function(a){try{if(a==this.g)e:{const Tt=zn(this.g);var c=this.g.Ba();const es=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||$m(this.g)))){this.J||Tt!=4||c==7||(c==8||0>=es?gr(3):gr(2)),Eo(this);var d=this.g.Z();this.X=d;t:if(_l(this)){var g=$m(this.g);a="";var O=g.length,D=zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Un(this),ci(this);var j="";break t}this.h.i=new l.TextDecoder}for(c=0;c<O;c++)this.h.h=!0,a+=this.h.i.decode(g[c],{stream:!(D&&c==O-1)});g.length=0,this.h.g+=a,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,In(this.i,this.u,this.A,this.l,this.R,Tt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,ht=this.g;if((ve=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ve)){var fe=ve;break t}}fe=null}if(d=fe)it(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,To(this,d);else{this.o=!1,this.s=3,rt(12),Un(this),ci(this);break e}}if(this.P){d=!0;let hn;for(;!this.J&&this.C<j.length;)if(hn=yh(this,j),hn==Xi){Tt==4&&(this.s=4,rt(14),d=!1),it(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==ui){this.s=4,rt(15),it(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else it(this.i,this.l,hn,null),To(this,hn);if(_l(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||j.length!=0||this.h.h||(this.s=1,rt(16),d=!1),this.o=this.o&&d,!d)it(this.i,this.l,j,"[Invalid Chunked Response]"),Un(this),ci(this);else if(0<j.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Th(Et),Et.M=!0,rt(11))}}else it(this.i,this.l,j,null),To(this,j);Tt==4&&Un(this),this.o&&!this.J&&(Tt==4?qm(this.j,this):(this.o=!1,Me(this)))}else ST(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),Un(this),ci(this)}}}catch{}finally{}};function _l(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function yh(a,c){var d=a.C,g=c.indexOf(`
`,d);return g==-1?Xi:(d=Number(c.substring(d,g)),isNaN(d)?ui:(g+=1,g+d>c.length?Xi:(c=c.slice(g,g+d),a.C=g+d,c)))}wt.prototype.cancel=function(){this.J=!0,Un(this)};function Me(a){a.S=Date.now()+a.I,vr(a,a.I)}function vr(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=yr(m(a.ba,a),c)}function Eo(a){a.B&&(l.clearTimeout(a.B),a.B=null)}wt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(vo(this.i,this.A),this.L!=2&&(gr(),rt(17)),Un(this),this.s=2,ci(this)):vr(this,this.S-a)};function ci(a){a.j.G==0||a.J||qm(a.j,a)}function Un(a){Eo(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,pl(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function To(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Io(d.h,a))){if(!a.K&&Io(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var O=g;if(O[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)xl(d),Pl(d);else break e;Eh(d),rt(18)}}else d.za=O[1],0<d.za-d.T&&37500>O[2]&&d.F&&d.v==0&&!d.C&&(d.C=yr(m(d.Za,d),6e3));if(1>=jn(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else hi(d,11)}else if((a.K||d.g==a)&&xl(d),!_(c))for(O=d.Da.g.parse(c),c=0;c<O.length;c++){let fe=O[c];if(d.T=fe[0],fe=fe[1],d.G==2)if(fe[0]=="c"){d.K=fe[1],d.ia=fe[2];const Et=fe[3];Et!=null&&(d.la=Et,d.j.info("VER="+d.la));const Tt=fe[4];Tt!=null&&(d.Aa=Tt,d.j.info("SVER="+d.Aa));const es=fe[5];es!=null&&typeof es=="number"&&0<es&&(g=1.5*es,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const hn=a.g;if(hn){const Nl=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Nl){var D=g.h;D.g||Nl.indexOf("spdy")==-1&&Nl.indexOf("quic")==-1&&Nl.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(So(D,D.h),D.h=null))}if(g.D){const Ih=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ih&&(g.ya=Ih,Ee(g.I,g.D,Ih))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var j=a;if(g.qa=Qm(g,g.J?g.ia:null,g.W),j.K){Tl(g.h,j);var ve=j,ht=g.L;ht&&(ve.I=ht),ve.B&&(Eo(ve),Me(ve)),g.g=j}else Hm(g);0<d.i.length&&kl(d)}else fe[0]!="stop"&&fe[0]!="close"||hi(d,7);else d.G==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?hi(d,7):wh(d):fe[0]!="noop"&&d.l&&d.l.ta(fe),d.v=0)}}gr(4)}catch{}}var vh=class{constructor(a,c){this.g=a,this.map=c}};function wl(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function El(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function jn(a){return a.h?1:a.g?a.g.size:0}function Io(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function So(a,c){a.g?a.g.add(c):a.h=c}function Tl(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}wl.prototype.cancel=function(){if(this.i=Y(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Y(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return P(a.i)}function he(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,g=0;g<d;g++)c.push(a[g]);return c}c=[],d=0;for(g in a)c[d++]=a[g];return c}function ct(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const g in a)c[d++]=g;return c}}}function Ft(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=ct(a),g=he(a),O=g.length,D=0;D<O;D++)c.call(void 0,g[D],d&&d[D],a)}var X=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ro(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),O=null;if(0<=g){var D=a[d].substring(0,g);O=a[d].substring(g+1)}else D=a[d];c(D,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function $t(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof $t){this.h=a.h,Il(this,a.j),this.o=a.o,this.g=a.g,Sl(this,a.s),this.l=a.l;var c=a.i,d=new Po;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Pm(this,d),this.m=a.m}else a&&(c=String(a).match(X))?(this.h=!1,Il(this,c[1]||"",!0),this.o=Co(c[2]||""),this.g=Co(c[3]||"",!0),Sl(this,c[4]),this.l=Co(c[5]||"",!0),Pm(this,c[6]||"",!0),this.m=Co(c[7]||"")):(this.h=!1,this.i=new Po(null,this.h))}$t.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Ao(c,km,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Ao(c,km,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ao(d,d.charAt(0)=="/"?pT:fT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ao(d,gT)),a.join("")};function st(a){return new $t(a)}function Il(a,c,d){a.j=d?Co(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Sl(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Pm(a,c,d){c instanceof Po?(a.i=c,yT(a.i,a.h)):(d||(c=Ao(c,mT)),a.i=new Po(c,a.h))}function Ee(a,c,d){a.i.set(c,d)}function Rl(a){return Ee(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Co(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ao(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,dT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function dT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var km=/[#\/\?@]/g,fT=/[#\?:]/g,pT=/[#\?]/g,mT=/[#\?@]/g,gT=/#/g;function Po(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function _r(a){a.g||(a.g=new Map,a.h=0,a.i&&Ro(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Po.prototype,t.add=function(a,c){_r(this),this.i=null,a=Ji(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function xm(a,c){_r(a),c=Ji(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function bm(a,c){return _r(a),c=Ji(a,c),a.g.has(c)}t.forEach=function(a,c){_r(this),this.g.forEach(function(d,g){d.forEach(function(O){a.call(c,O,g,this)},this)},this)},t.na=function(){_r(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let g=0;g<c.length;g++){const O=a[g];for(let D=0;D<O.length;D++)d.push(c[g])}return d},t.V=function(a){_r(this);let c=[];if(typeof a=="string")bm(this,a)&&(c=c.concat(this.g.get(Ji(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return _r(this),this.i=null,a=Ji(this,a),bm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Nm(a,c,d){xm(a,c),0<d.length&&(a.i=null,a.g.set(Ji(a,c),P(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var g=c[d];const D=encodeURIComponent(String(g)),j=this.V(g);for(g=0;g<j.length;g++){var O=D;j[g]!==""&&(O+="="+encodeURIComponent(String(j[g]))),a.push(O)}}return this.i=a.join("&")};function Ji(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function yT(a,c){c&&!a.j&&(_r(a),a.i=null,a.g.forEach(function(d,g){var O=g.toLowerCase();g!=O&&(xm(this,g),Nm(this,O,d))},a)),a.j=c}function vT(a,c){const d=new ai;if(l.Image){const g=new Image;g.onload=S(wr,d,"TestLoadImage: loaded",!0,c,g),g.onerror=S(wr,d,"TestLoadImage: error",!1,c,g),g.onabort=S(wr,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=S(wr,d,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function _T(a,c){const d=new ai,g=new AbortController,O=setTimeout(()=>{g.abort(),wr(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(O),D.ok?wr(d,"TestPingServer: ok",!0,c):wr(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(O),wr(d,"TestPingServer: error",!1,c)})}function wr(a,c,d,g,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),g(d)}catch{}}function wT(){this.g=new mh}function ET(a,c,d){const g=d||"";try{Ft(a,function(O,D){let j=O;h(O)&&(j=Ki(O)),c.push(g+D+"="+encodeURIComponent(j))})}catch(O){throw c.push(g+"type="+encodeURIComponent("_badmap")),O}}function ko(a){this.l=a.Ub||null,this.j=a.eb||!1}C(ko,fo),ko.prototype.g=function(){return new Cl(this.l,this.j)},ko.prototype.i=function(a){return function(){return a}}({});function Cl(a,c){tt.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Cl,tt),t=Cl.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,bo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xo(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,bo(this)),this.g&&(this.readyState=3,bo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Om(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Om(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?xo(this):bo(this),this.readyState==3&&Om(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,xo(this))},t.Qa=function(a){this.g&&(this.response=a,xo(this))},t.ga=function(){this.g&&xo(this)};function xo(a){a.readyState=4,a.l=null,a.j=null,a.v=null,bo(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function bo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Cl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Dm(a){let c="";return L(a,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function _h(a,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Dm(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Ee(a,c,d))}function Oe(a){tt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Oe,tt);var TT=/^https?$/i,IT=["POST","PUT"];t=Oe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sn.g(),this.v=this.o?po(this.o):po(Sn),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){Lm(this,D);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var O in g)d.set(O,g[O]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())d.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),O=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(IT,c,void 0))||g||O||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,j]of d)this.g.setRequestHeader(D,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fm(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Lm(this,D)}};function Lm(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Vm(a),Al(a)}function Vm(a){a.A||(a.A=!0,nt(a,"complete"),nt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,nt(this,"complete"),nt(this,"abort"),Al(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Al(this,!0)),Oe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Mm(this):this.bb())},t.bb=function(){Mm(this)};function Mm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||zn(a)!=4||a.Z()!=2)){if(a.u&&zn(a)==4)cl(a.Ea,0,a);else if(nt(a,"readystatechange"),zn(a)==4){a.h=!1;try{const j=a.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=j===0){var O=String(a.D).match(X)[1]||null;!O&&l.self&&l.self.location&&(O=l.self.location.protocol.slice(0,-1)),g=!TT.test(O?O.toLowerCase():"")}d=g}if(d)nt(a,"complete"),nt(a,"success");else{a.m=6;try{var D=2<zn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Vm(a)}}finally{Al(a)}}}}function Al(a,c){if(a.g){Fm(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||nt(a,"ready");try{d.onreadystatechange=g}catch{}}}function Fm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function zn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<zn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),ph(c)}};function $m(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ST(a){const c={};a=(a.g&&2<=zn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var d=k(a[g]);const O=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[O]||[];c[O]=D,D.push(d)}v(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function No(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Um(a){this.Aa=0,this.i=[],this.j=new ai,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=No("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=No("baseRetryDelayMs",5e3,a),this.cb=No("retryDelaySeedMs",1e4,a),this.Wa=No("forwardChannelMaxRetries",2,a),this.wa=No("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new wl(a&&a.concurrentRequestLimit),this.Da=new wT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Um.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,g){rt(0),this.W=a,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Qm(this,null,this.W),kl(this)};function wh(a){if(jm(a),a.G==3){var c=a.U++,d=st(a.I);if(Ee(d,"SID",a.K),Ee(d,"RID",c),Ee(d,"TYPE","terminate"),Oo(a,d),c=new wt(a,a.j,c),c.L=2,c.v=Rl(st(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Ym(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Me(c)}Km(a)}function Pl(a){a.g&&(Th(a),a.g.cancel(),a.g=null)}function jm(a){Pl(a),a.u&&(l.clearTimeout(a.u),a.u=null),xl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function kl(a){if(!El(a.h)&&!a.s){a.s=!0;var c=a.Ga;$e||K(),z||($e(),z=!0),W.add(c,a),a.B=0}}function RT(a,c){return jn(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=yr(m(a.Ga,a,c),Gm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new wt(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),R(D,this.S)):D=this.S),this.m!==null||this.O||(O.H=D,D=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Bm(this,O,c),d=st(this.I),Ee(d,"RID",a),Ee(d,"CVER",22),this.D&&Ee(d,"X-HTTP-Session-Id",this.D),Oo(this,d),D&&(this.O?c="headers="+encodeURIComponent(String(Dm(D)))+"&"+c:this.m&&_h(d,this.m,D)),So(this.h,O),this.Ua&&Ee(d,"TYPE","init"),this.P?(Ee(d,"$req",c),Ee(d,"SID","null"),O.T=!0,wo(O,d,null)):wo(O,d,c),this.G=2}}else this.G==3&&(a?zm(this,a):this.i.length==0||El(this.h)||zm(this))};function zm(a,c){var d;c?d=c.l:d=a.U++;const g=st(a.I);Ee(g,"SID",a.K),Ee(g,"RID",d),Ee(g,"AID",a.T),Oo(a,g),a.m&&a.o&&_h(g,a.m,a.o),d=new wt(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Bm(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),So(a.h,d),wo(d,g,c)}function Oo(a,c){a.H&&L(a.H,function(d,g){Ee(c,g,d)}),a.l&&Ft({},function(d,g){Ee(c,g,d)})}function Bm(a,c,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var O=a.i;let D=-1;for(;;){const j=["count="+d];D==-1?0<d?(D=O[0].g,j.push("ofs="+D)):D=0:j.push("ofs="+D);let ve=!0;for(let ht=0;ht<d;ht++){let fe=O[ht].g;const Et=O[ht].map;if(fe-=D,0>fe)D=Math.max(0,O[ht].g-100),ve=!1;else try{ET(Et,j,"req"+fe+"_")}catch{g&&g(Et)}}if(ve){g=j.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,g}function Hm(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;$e||K(),z||($e(),z=!0),W.add(c,a),a.v=0}}function Eh(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=yr(m(a.Fa,a),Gm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Wm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=yr(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),Pl(this),Wm(this))};function Th(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Wm(a){a.g=new wt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=st(a.qa);Ee(c,"RID","rpc"),Ee(c,"SID",a.K),Ee(c,"AID",a.T),Ee(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ee(c,"TO",a.ja),Ee(c,"TYPE","xmlhttp"),Oo(a,c),a.m&&a.o&&_h(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Rl(st(c)),d.m=null,d.P=!0,vl(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Pl(this),Eh(this),rt(19))};function xl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function qm(a,c){var d=null;if(a.g==c){xl(a),Th(a),a.g=null;var g=2}else if(Io(a.h,c))d=c.D,Tl(a.h,c),g=1;else return;if(a.G!=0){if(c.o)if(g==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var O=a.B;g=oi(),nt(g,new yo(g,d)),kl(a)}else Hm(a);else if(O=c.s,O==3||O==0&&0<c.X||!(g==1&&RT(a,c)||g==2&&Eh(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),O){case 1:hi(a,5);break;case 4:hi(a,10);break;case 3:hi(a,6);break;default:hi(a,2)}}}function Gm(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function hi(a,c){if(a.j.info("Error code "+c),c==2){var d=m(a.fb,a),g=a.Xa;const O=!g;g=new $t(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Il(g,"https"),Rl(g),O?vT(g.toString(),d):_T(g.toString(),d)}else rt(2);a.G=0,a.l&&a.l.sa(c),Km(a),jm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Km(a){if(a.G=0,a.ka=[],a.l){const c=Y(a.h);(c.length!=0||a.i.length!=0)&&(x(a.ka,c),x(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Qm(a,c,d){var g=d instanceof $t?st(d):new $t(d);if(g.g!="")c&&(g.g=c+"."+g.g),Sl(g,g.s);else{var O=l.location;g=O.protocol,c=c?c+"."+O.hostname:O.hostname,O=+O.port;var D=new $t(null);g&&Il(D,g),c&&(D.g=c),O&&Sl(D,O),d&&(D.l=d),g=D}return d=a.D,c=a.ya,d&&c&&Ee(g,d,c),Ee(g,"VER",a.la),Oo(a,g),g}function Ym(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Oe(new ko({eb:d})):new Oe(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xm(){}t=Xm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function bl(){}bl.prototype.g=function(a,c){return new qt(a,c)};function qt(a,c){tt.call(this),this.g=new Um(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!_(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Zi(this)}C(qt,tt),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){wh(this.g)},qt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Ki(a),a=d);c.i.push(new vh(c.Ya++,a)),c.G==3&&kl(c)},qt.prototype.N=function(){this.g.l=null,delete this.j,wh(this.g),delete this.g,qt.aa.N.call(this)};function Jm(a){Qi.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}C(Jm,Qi);function Zm(){Fn.call(this),this.status=1}C(Zm,Fn);function Zi(a){this.g=a}C(Zi,Xm),Zi.prototype.ua=function(){nt(this.g,"a")},Zi.prototype.ta=function(a){nt(this.g,new Jm(a))},Zi.prototype.sa=function(a){nt(this.g,new Zm)},Zi.prototype.ra=function(){nt(this.g,"b")},bl.prototype.createWebChannel=bl.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,vE=function(){return new bl},yE=function(){return oi()},gE=$n,wf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},li.NO_ERROR=0,li.TIMEOUT=8,li.HTTP_ERROR=6,Tu=li,Wt.COMPLETE="complete",mE=Wt,ml.EventType=mr,mr.OPEN="a",mr.CLOSE="b",mr.ERROR="c",mr.MESSAGE="d",tt.prototype.listen=tt.prototype.K,Go=ml,pE=ko,Oe.prototype.listenOnce=Oe.prototype.L,Oe.prototype.getLastError=Oe.prototype.Ka,Oe.prototype.getLastErrorCode=Oe.prototype.Ba,Oe.prototype.getStatus=Oe.prototype.Z,Oe.prototype.getResponseJson=Oe.prototype.Oa,Oe.prototype.getResponseText=Oe.prototype.oa,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Ha,fE=Oe}).apply(typeof Xl<"u"?Xl:typeof self<"u"?self:typeof window<"u"?window:{});const qy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ct.UNAUTHENTICATED=new Ct(null),Ct.GOOGLE_CREDENTIALS=new Ct("google-credentials-uid"),Ct.FIRST_PARTY=new Ct("first-party-uid"),Ct.MOCK_USER=new Ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io="10.12.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=new Mp("@firebase/firestore");function zo(){return Di.logLevel}function H(t,...e){if(Di.logLevel<=le.DEBUG){const n=e.map(Xp);Di.debug(`Firestore (${io}): ${t}`,...n)}}function or(t,...e){if(Di.logLevel<=le.ERROR){const n=e.map(Xp);Di.error(`Firestore (${io}): ${t}`,...n)}}function $s(t,...e){if(Di.logLevel<=le.WARN){const n=e.map(Xp);Di.warn(`Firestore (${io}): ${t}`,...n)}}function Xp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${io}) INTERNAL ASSERTION FAILED: `+t;throw or(e),new Error(e)}function _e(t,e){t||ee()}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends ur{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ok{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ct.UNAUTHENTICATED))}shutdown(){}}class Dk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Lk{constructor(e){this.t=e,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Kr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Kr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Kr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_e(typeof r.accessToken=="string"),new _E(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string"),new Ct(e)}}class Vk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Mk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Vk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Fk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $k{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_e(typeof n.token=="string"),this.R=n.token,new Fk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Uk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function Us(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Xe(0,0))}static max(){return new te(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return La.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof La?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ce extends La{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const jk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends La{construct(e,n,r){return new pt(e,n,r)}static isValidIdentifier(e){return jk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(n)}static emptyPath(){return new pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Ce.fromString(e))}static fromName(e){return new G(Ce.fromString(e).popFirst(5))}static empty(){return new G(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Ce(e.slice()))}}function zk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new Xe(n+1,0):new Xe(n,r));return new Zr(i,G.empty(),e)}function Bk(t){return new Zr(t.readTime,t.key,-1)}class Zr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Zr(te.min(),G.empty(),-1)}static max(){return new Zr(te.max(),G.empty(),-1)}}function Hk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tl(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==Wk)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Gk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function nl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Jp.oe=-1;function Yc(t){return t==null}function fc(t){return t===0&&1/t==-1/0}function Kk(t){return typeof t=="number"&&Number.isInteger(t)&&!fc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function so(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function EE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||ft.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jl(this.root,e,this.comparator,!0)}}class Jl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ft{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ft.RED,this.left=i??ft.EMPTY,this.right=s??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ft(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ft.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ft(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ky(this.data.getIterator())}getIteratorFrom(e){return new Ky(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new gt(this.comparator);return n.data=e,n}}class Ky{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new gn([])}unionWith(e){let n=new gt(pt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new gn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Us(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new TE("Invalid base64 string: "+s):s}}(e);return new _t(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const Qk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ei(t){if(_e(!!t),typeof t=="string"){let e=0;const n=Qk.exec(t);if(_e(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Li(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function em(t){const e=t.mapValue.fields.__previous_value__;return Zp(e)?em(e):e}function Va(t){const e=ei(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Ma{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ma("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ma&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Vi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Zp(t)?4:Xk(t)?9007199254740991:10:ee()}function Vn(t,e){if(t===e)return!0;const n=Vi(t);if(n!==Vi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Va(t).isEqual(Va(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ei(i.timestampValue),l=ei(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Li(i.bytesValue).isEqual(Li(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ze(i.geoPointValue.latitude)===ze(s.geoPointValue.latitude)&&ze(i.geoPointValue.longitude)===ze(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ze(i.integerValue)===ze(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ze(i.doubleValue),l=ze(s.doubleValue);return o===l?fc(o)===fc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Us(t.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Gy(o)!==Gy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Vn(o[u],l[u])))return!1;return!0}(t,e);default:return ee()}}function Fa(t,e){return(t.values||[]).find(n=>Vn(n,e))!==void 0}function js(t,e){if(t===e)return 0;const n=Vi(t),r=Vi(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=ze(s.integerValue||s.doubleValue),u=ze(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Qy(t.timestampValue,e.timestampValue);case 4:return Qy(Va(t),Va(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Li(s),u=Li(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=pe(l[h],u[h]);if(f!==0)return f}return pe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=pe(ze(s.latitude),ze(o.latitude));return l!==0?l:pe(ze(s.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const l=s.values||[],u=o.values||[];for(let h=0;h<l.length&&h<u.length;++h){const f=js(l[h],u[h]);if(f)return f}return pe(l.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Zl.mapValue&&o===Zl.mapValue)return 0;if(s===Zl.mapValue)return 1;if(o===Zl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=pe(u[p],f[p]);if(m!==0)return m;const S=js(l[u[p]],h[f[p]]);if(S!==0)return S}return pe(u.length,f.length)}(t.mapValue,e.mapValue);default:throw ee()}}function Qy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=ei(t),r=ei(e),i=pe(n.seconds,r.seconds);return i!==0?i:pe(n.nanos,r.nanos)}function zs(t){return Ef(t)}function Ef(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ei(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Li(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ef(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ef(n.fields[o])}`;return i+"}"}(t.mapValue):ee()}function Tf(t){return!!t&&"integerValue"in t}function tm(t){return!!t&&"arrayValue"in t}function Yy(t){return!!t&&"nullValue"in t}function Xy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Iu(t){return!!t&&"mapValue"in t}function aa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return so(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=aa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=aa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Xk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.value=e}static empty(){return new rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Iu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=aa(n)}setAll(e){let n=pt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=aa(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Iu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Iu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){so(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new rn(aa(this.value))}}function IE(t){const e=[];return so(t.fields,(n,r)=>{const i=new pt([n]);if(Iu(r)){const s=IE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new gn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Pt(e,0,te.min(),te.min(),te.min(),rn.empty(),0)}static newFoundDocument(e,n,r,i){return new Pt(e,1,n,te.min(),r,i,0)}static newNoDocument(e,n){return new Pt(e,2,n,te.min(),te.min(),rn.empty(),0)}static newUnknownDocument(e,n){return new Pt(e,3,n,te.min(),te.min(),rn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n){this.position=e,this.inclusive=n}}function Jy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=js(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Zy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n="asc"){this.field=e,this.dir=n}}function Jk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{}class Qe extends SE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ex(e,n,r):n==="array-contains"?new rx(e,r):n==="in"?new ix(e,r):n==="not-in"?new sx(e,r):n==="array-contains-any"?new ox(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new tx(e,r):new nx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(js(n,this.value)):n!==null&&Vi(this.value)===Vi(n)&&this.matchesComparison(js(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mn extends SE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Mn(e,n)}matches(e){return RE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function RE(t){return t.op==="and"}function CE(t){return Zk(t)&&RE(t)}function Zk(t){for(const e of t.filters)if(e instanceof Mn)return!1;return!0}function If(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+zs(t.value);if(CE(t))return t.filters.map(e=>If(e)).join(",");{const e=t.filters.map(n=>If(n)).join(",");return`${t.op}(${e})`}}function AE(t,e){return t instanceof Qe?function(r,i){return i instanceof Qe&&r.op===i.op&&r.field.isEqual(i.field)&&Vn(r.value,i.value)}(t,e):t instanceof Mn?function(r,i){return i instanceof Mn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&AE(o,i.filters[l]),!0):!1}(t,e):void ee()}function PE(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${zs(n.value)}`}(t):t instanceof Mn?function(n){return n.op.toString()+" {"+n.getFilters().map(PE).join(" ,")+"}"}(t):"Filter"}class ex extends Qe{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class tx extends Qe{constructor(e,n){super(e,"in",n),this.keys=kE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class nx extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=kE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class rx extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tm(n)&&Fa(n.arrayValue,this.value)}}class ix extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Fa(this.value.arrayValue,n)}}class sx extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Fa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Fa(this.value.arrayValue,n)}}class ox extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Fa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function ev(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ax(t,e,n,r,i,s,o)}function nm(t){const e=ne(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>If(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Yc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>zs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>zs(r)).join(",")),e.ue=n}return e.ue}function rm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Jk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!AE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Zy(t.startAt,e.startAt)&&Zy(t.endAt,e.endAt)}function Sf(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function lx(t,e,n,r,i,s,o,l){return new Xc(t,e,n,r,i,s,o,l)}function xE(t){return new Xc(t)}function tv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ux(t){return t.collectionGroup!==null}function la(t){const e=ne(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new gt(pt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new mc(s,r))}),n.has(pt.keyField().canonicalString())||e.ce.push(new mc(pt.keyField(),r))}return e.ce}function On(t){const e=ne(t);return e.le||(e.le=cx(e,la(t))),e.le}function cx(t,e){if(t.limitType==="F")return ev(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new mc(i.field,s)});const n=t.endAt?new pc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new pc(t.startAt.position,t.startAt.inclusive):null;return ev(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Rf(t,e,n){return new Xc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Jc(t,e){return rm(On(t),On(e))&&t.limitType===e.limitType}function bE(t){return`${nm(On(t))}|lt:${t.limitType}`}function rs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>PE(i)).join(", ")}]`),Yc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>zs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>zs(i)).join(",")),`Target(${r})`}(On(t))}; limitType=${t.limitType})`}function Zc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of la(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Jy(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,la(r),i)||r.endAt&&!function(o,l,u){const h=Jy(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,la(r),i))}(t,e)}function hx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function NE(t){return(e,n)=>{let r=!1;for(const i of la(t)){const s=dx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function dx(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?js(u,h):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){so(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return EE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=new Ne(G.comparator);function ar(){return fx}const OE=new Ne(G.comparator);function Ko(...t){let e=OE;for(const n of t)e=e.insert(n.key,n);return e}function DE(t){let e=OE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function _i(){return ua()}function LE(){return ua()}function ua(){return new oo(t=>t.toString(),(t,e)=>t.isEqual(e))}const px=new Ne(G.comparator),mx=new gt(G.comparator);function ae(...t){let e=mx;for(const n of t)e=e.add(n);return e}const gx=new gt(pe);function yx(){return gx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fc(e)?"-0":e}}function ME(t){return{integerValue:""+t}}function vx(t,e){return Kk(e)?ME(e):VE(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(){this._=void 0}}function _x(t,e,n){return t instanceof gc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Zp(s)&&(s=em(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof $a?$E(t,e):t instanceof Ua?UE(t,e):function(i,s){const o=FE(i,s),l=nv(o)+nv(i.Pe);return Tf(o)&&Tf(i.Pe)?ME(l):VE(i.serializer,l)}(t,e)}function wx(t,e,n){return t instanceof $a?$E(t,e):t instanceof Ua?UE(t,e):n}function FE(t,e){return t instanceof yc?function(r){return Tf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class gc extends eh{}class $a extends eh{constructor(e){super(),this.elements=e}}function $E(t,e){const n=jE(e);for(const r of t.elements)n.some(i=>Vn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ua extends eh{constructor(e){super(),this.elements=e}}function UE(t,e){let n=jE(e);for(const r of t.elements)n=n.filter(i=>!Vn(i,r));return{arrayValue:{values:n}}}class yc extends eh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function nv(t){return ze(t.integerValue||t.doubleValue)}function jE(t){return tm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Ex(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof $a&&i instanceof $a||r instanceof Ua&&i instanceof Ua?Us(r.elements,i.elements,Vn):r instanceof yc&&i instanceof yc?Vn(r.Pe,i.Pe):r instanceof gc&&i instanceof gc}(t.transform,e.transform)}class Tx{constructor(e,n){this.version=e,this.transformResults=n}}class er{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new er}static exists(e){return new er(void 0,e)}static updateTime(e){return new er(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Su(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class th{}function zE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new HE(t.key,er.none()):new rl(t.key,t.data,er.none());{const n=t.data,r=rn.empty();let i=new gt(pt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Bi(t.key,r,new gn(i.toArray()),er.none())}}function Ix(t,e,n){t instanceof rl?function(i,s,o){const l=i.value.clone(),u=iv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Bi?function(i,s,o){if(!Su(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=iv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(BE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ca(t,e,n,r){return t instanceof rl?function(s,o,l,u){if(!Su(s.precondition,o))return l;const h=s.value.clone(),f=sv(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Bi?function(s,o,l,u){if(!Su(s.precondition,o))return l;const h=sv(s.fieldTransforms,u,o),f=o.data;return f.setAll(BE(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Su(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Sx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=FE(r.transform,i||null);s!=null&&(n===null&&(n=rn.empty()),n.set(r.field,s))}return n||null}function rv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Us(r,i,(s,o)=>Ex(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class rl extends th{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Bi extends th{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function BE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function iv(t,e,n){const r=new Map;_e(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,wx(o,l,n[i]))}return r}function sv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,_x(s,o,e))}return r}class HE extends th{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Rx extends th{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Ix(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ca(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ca(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=LE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=zE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&Us(this.mutations,e.mutations,(n,r)=>rv(n,r))&&Us(this.baseMutations,e.baseMutations,(n,r)=>rv(n,r))}}class im{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){_e(e.mutations.length===r.length);let i=function(){return px}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new im(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,ue;function kx(t){switch(t){default:return ee();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function WE(t){if(t===void 0)return or("GRPC error has no .code"),F.UNKNOWN;switch(t){case je.OK:return F.OK;case je.CANCELLED:return F.CANCELLED;case je.UNKNOWN:return F.UNKNOWN;case je.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case je.INTERNAL:return F.INTERNAL;case je.UNAVAILABLE:return F.UNAVAILABLE;case je.UNAUTHENTICATED:return F.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case je.NOT_FOUND:return F.NOT_FOUND;case je.ALREADY_EXISTS:return F.ALREADY_EXISTS;case je.PERMISSION_DENIED:return F.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case je.ABORTED:return F.ABORTED;case je.OUT_OF_RANGE:return F.OUT_OF_RANGE;case je.UNIMPLEMENTED:return F.UNIMPLEMENTED;case je.DATA_LOSS:return F.DATA_LOSS;default:return ee()}}(ue=je||(je={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xx(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx=new Ii([4294967295,4294967295],0);function ov(t){const e=xx().encode(t),n=new dE;return n.update(e),new Uint8Array(n.digest())}function av(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ii([n,r],0),new Ii([i,s],0)]}class sm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Qo(`Invalid padding: ${n}`);if(r<0)throw new Qo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Qo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Qo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ii.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Ii.fromNumber(r)));return i.compare(bx)===1&&(i=new Ii([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=ov(e),[r,i]=av(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new sm(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=ov(e),[r,i]=av(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Qo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,il.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new nh(te.min(),i,new Ne(pe),ar(),ae())}}class il{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new il(r,n,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class qE{constructor(e,n){this.targetId=e,this.me=n}}class GE{constructor(e,n,r=_t.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class lv{constructor(){this.fe=0,this.ge=cv(),this.pe=_t.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ae(),n=ae(),r=ae();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee()}}),new il(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=cv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,_e(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Nx{constructor(e){this.Le=e,this.Be=new Map,this.ke=ar(),this.qe=uv(),this.Qe=new Ne(pe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Sf(s))if(r===0){const o=new G(s.path);this.Ue(n,o,Pt.newNoDocument(o,te.min()))}else _e(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Li(r).toUint8Array()}catch(u){if(u instanceof TE)return $s("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new sm(o,i,s)}catch(u){return $s(u instanceof Qo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Sf(l.target)){const u=new G(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Pt.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=ae();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new nh(e,n,this.Qe,this.ke,r);return this.ke=ar(),this.qe=uv(),this.Qe=new Ne(pe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new lv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new gt(pe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new lv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function uv(){return new Ne(G.comparator)}function cv(){return new Ne(G.comparator)}const Ox={asc:"ASCENDING",desc:"DESCENDING"},Dx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Lx={and:"AND",or:"OR"};class Vx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Cf(t,e){return t.useProto3Json||Yc(e)?e:{value:e}}function vc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function KE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Mx(t,e){return vc(t,e.toTimestamp())}function Dn(t){return _e(!!t),te.fromTimestamp(function(n){const r=ei(n);return new Xe(r.seconds,r.nanos)}(t))}function om(t,e){return Af(t,e).canonicalString()}function Af(t,e){const n=function(i){return new Ce(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function QE(t){const e=Ce.fromString(t);return _e(e1(e)),e}function Pf(t,e){return om(t.databaseId,e.path)}function id(t,e){const n=QE(e);if(n.get(1)!==t.databaseId.projectId)throw new q(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(XE(n))}function YE(t,e){return om(t.databaseId,e)}function Fx(t){const e=QE(t);return e.length===4?Ce.emptyPath():XE(e)}function kf(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function XE(t){return _e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function hv(t,e,n){return{name:Pf(t,e),fields:n.value.mapValue.fields}}function $x(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(_e(f===void 0||typeof f=="string"),_t.fromBase64String(f||"")):(_e(f===void 0||f instanceof Buffer||f instanceof Uint8Array),_t.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?F.UNKNOWN:WE(h.code);return new q(f,h.message||"")}(o);n=new GE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=id(t,r.document.name),s=Dn(r.document.updateTime),o=r.document.createTime?Dn(r.document.createTime):te.min(),l=new rn({mapValue:{fields:r.document.fields}}),u=Pt.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ru(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=id(t,r.document),s=r.readTime?Dn(r.readTime):te.min(),o=Pt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ru([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=id(t,r.document),s=r.removedTargetIds||[];n=new Ru([],s,i,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Px(i,s),l=r.targetId;n=new qE(l,o)}}return n}function Ux(t,e){let n;if(e instanceof rl)n={update:hv(t,e.key,e.value)};else if(e instanceof HE)n={delete:Pf(t,e.key)};else if(e instanceof Bi)n={update:hv(t,e.key,e.data),updateMask:Qx(e.fieldMask)};else{if(!(e instanceof Rx))return ee();n={verify:Pf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof gc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof $a)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ua)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof yc)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Mx(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee()}(t,e.precondition)),n}function jx(t,e){return t&&t.length>0?(_e(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Dn(i.updateTime):Dn(s);return o.isEqual(te.min())&&(o=Dn(s)),new Tx(o,i.transformResults||[])}(n,e))):[]}function zx(t,e){return{documents:[YE(t,e.path)]}}function Bx(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=YE(t,i);const s=function(h){if(h.length!==0)return ZE(Mn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:is(m.field),direction:qx(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Cf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function Hx(t){let e=Fx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){_e(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=JE(p);return m instanceof Mn&&CE(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new mc(ss(C.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Yc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,S=p.values||[];return new pc(S,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,S=p.values||[];return new pc(S,m)}(n.endAt)),lx(e,i,o,s,l,"F",u,h)}function Wx(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function JE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ss(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ss(n.unaryFilter.field);return Qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ss(n.unaryFilter.field);return Qe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ss(n.unaryFilter.field);return Qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(ss(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Mn.create(n.compositeFilter.filters.map(r=>JE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function qx(t){return Ox[t]}function Gx(t){return Dx[t]}function Kx(t){return Lx[t]}function is(t){return{fieldPath:t.canonicalString()}}function ss(t){return pt.fromServerFormat(t.fieldPath)}function ZE(t){return t instanceof Qe?function(n){if(n.op==="=="){if(Xy(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NAN"}};if(Yy(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Xy(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NOT_NAN"}};if(Yy(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:is(n.field),op:Gx(n.op),value:n.value}}}(t):t instanceof Mn?function(n){const r=n.getFilters().map(i=>ZE(i));return r.length===1?r[0]:{compositeFilter:{op:Kx(n.op),filters:r}}}(t):ee()}function Qx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function e1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n,r,i,s=te.min(),o=te.min(),l=_t.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(e){this.ct=e}}function Xx(t){const e=Hx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Rf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(){this.an=new Zx}addToCollectionParentIndex(e,n){return this.an.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Zr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Zr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class Zx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new gt(Ce.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new gt(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Ln(){return new Bs(0)}static Bn(){return new Bs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(){this.changes=new oo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ca(r.mutation,i,gn.empty(),Xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ae()){const i=_i();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ko();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=_i();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ae()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=ar();const o=ua(),l=function(){return ua()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Bi)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ca(f.mutation,h,f.mutation.getFieldMask(),Xe.now())):o.set(h.key,gn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new tb(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ua();let i=new Ne((o,l)=>o-l),s=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||gn.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||ae()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=LE();f.forEach(m=>{if(!s.has(m)){const S=zE(n.get(m),r.get(m));S!==null&&p.set(m,S),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ux(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(_i());let l=-1,u=s;return o.next(h=>M.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ae())).next(f=>({batchId:l,changes:DE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=Ko();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ko();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const h=function(p,m){return new Xc(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Pt.newInvalidDocument(f)))});let l=Ko();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&ca(f.mutation,h,gn.empty(),Xe.now()),Zc(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return M.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Dn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:Xx(i.bundledQuery),readTime:Dn(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(){this.overlays=new Ne(G.comparator),this.Pr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=_i();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=_i(),s=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ne((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=_i(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=_i(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return M.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ax(n,r));let s=this.Pr.get(n);s===void 0&&(s=ae(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this.Ir=new gt(ot.Tr),this.Er=new gt(ot.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new ot(e,n);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new ot(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new G(new Ce([])),r=new ot(n,e),i=new ot(n,e+1),s=[];return this.Er.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){const n=new G(new Ce([])),r=new ot(n,e),i=new ot(n,e+1);let s=ae();return this.Er.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ot(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.yr=n}static Tr(e,n){return G.comparator(e.key,n.key)||pe(e.yr,n.yr)}static dr(e,n){return pe(e.yr,n.yr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new gt(ot.Tr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Cx(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Sr=this.Sr.add(new ot(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),i=new ot(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const l=this.br(o.yr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new gt(pe);return n.forEach(i=>{const s=new ot(i,0),o=new ot(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],l=>{r=r.add(l.yr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new ot(new G(s),0);let l=new gt(pe);return this.Sr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.yr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){_e(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return M.forEach(n.mutations,i=>{const s=new ot(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new ot(n,0),i=this.Sr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e){this.Fr=e,this.docs=function(){return new Ne(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Pt.newInvalidDocument(n))}getEntries(e,n){let r=ar();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Pt.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ar();const o=n.path,l=new G(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Hk(Bk(f),r)<=0||(i.has(f.key)||Zc(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ee()}Mr(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new lb(this)}getSize(e){return M.resolve(this.size)}}class lb extends eb{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e){this.persistence=e,this.Or=new oo(n=>nm(n),rm),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new am,this.targetCount=0,this.Br=Bs.Ln()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),M.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new Bs(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Qn(n),M.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Lr.mr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Lr.Ar(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Lr.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Lr.mr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Lr.pr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Lr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e,n){this.kr={},this.overlays={},this.qr=new Jp(0),this.Qr=!1,this.Qr=!0,this.Kr=new sb,this.referenceDelegate=e(this),this.$r=new ub(this),this.indexManager=new Jx,this.remoteDocumentCache=function(i){return new ab(i)}(r=>this.referenceDelegate.Ur(r)),this.serializer=new Yx(n),this.Wr=new rb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ib,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new ob(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new hb(this.qr.next());return this.referenceDelegate.Gr(),r(i).next(s=>this.referenceDelegate.zr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}jr(e,n){return M.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class hb extends qk{constructor(e){super(),this.currentSequenceNumber=e}}class lm{constructor(e){this.persistence=e,this.Hr=new am,this.Jr=null}static Yr(e){return new lm(e)}get Zr(){if(this.Jr)return this.Jr;throw ee()}addReference(e,n,r){return this.Hr.addReference(r,n),this.Zr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Hr.removeReference(r,n),this.Zr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Zr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Hr.mr(n.targetId).forEach(i=>this.Zr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Zr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Gr(){this.Jr=new Set}zr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Zr,r=>{const i=G.fromPath(r);return this.Xr(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.Jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Xr(e,n).next(r=>{r?this.Zr.delete(n.toString()):this.Zr.add(n.toString())})}Ur(e){return 0}Xr(e,n){return M.or([()=>M.resolve(this.Hr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.jr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ki=r,this.$i=i}static Ui(e,n){let r=ae(),i=ae();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new um(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return mC()?8:Gk(vt())>0?6:4}()}initialize(e,n){this.Hi=e,this.indexManager=n,this.Wi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Yi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new db;return this.Zi(e,n,o).next(l=>{if(s.result=l,this.Gi)return this.Xi(e,n,o,l.size)})}).next(()=>s.result)}Xi(e,n,r,i){return r.documentReadCount<this.zi?(zo()<=le.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",rs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),M.resolve()):(zo()<=le.DEBUG&&H("QueryEngine","Query:",rs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ji*i?(zo()<=le.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",rs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,On(n))):M.resolve())}Ji(e,n){if(tv(n))return M.resolve(null);let r=On(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Rf(n,null,"F"),r=On(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ae(...s);return this.Hi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.es(n,l);return this.ts(n,h,o,u.readTime)?this.Ji(e,Rf(n,null,"F")):this.ns(e,h,n,u)}))})))}Yi(e,n,r,i){return tv(n)||i.isEqual(te.min())?M.resolve(null):this.Hi.getDocuments(e,r).next(s=>{const o=this.es(n,s);return this.ts(n,o,r,i)?M.resolve(null):(zo()<=le.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),rs(n)),this.ns(e,o,n,zk(i,-1)).next(l=>l))})}es(e,n){let r=new gt(NE(e));return n.forEach((i,s)=>{Zc(e,s)&&(r=r.add(s))}),r}ts(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Zi(e,n,r){return zo()<=le.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",rs(n)),this.Hi.getDocumentsMatchingQuery(e,n,Zr.min(),r)}ns(e,n,r,i){return this.Hi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,n,r,i){this.persistence=e,this.rs=n,this.serializer=i,this.ss=new Ne(pe),this.os=new oo(s=>nm(s),rm),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(r)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nb(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ss))}}function mb(t,e,n,r){return new pb(t,e,n,r)}async function t1(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.cs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ae();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({ls:h,removedBatchIds:o,addedBatchIds:l}))})})}function gb(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.us.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,m=p.keys();let S=M.resolve();return m.forEach(C=>{S=S.next(()=>f.getEntry(u,C)).next(P=>{const x=h.docVersions.get(C);_e(x!==null),P.version.compareTo(x)<0&&(p.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),f.addEntry(P)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ae();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function n1(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.$r.getLastRemoteSnapshotVersion(n))}function yb(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.us.newChangeBuffer({trackRemovals:!0});i=n.ss;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.$r.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.$r.addMatchingKeys(s,f.addedDocuments,p)));let S=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(_t.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),i=i.insert(p,S),function(P,x,w){return P.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,S,f)&&l.push(n.$r.updateTargetData(s,S))});let u=ar(),h=ae();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(vb(s,o,e.documentUpdates).next(f=>{u=f.hs,h=f.Ps})),!r.isEqual(te.min())){const f=n.$r.getLastRemoteSnapshotVersion(s).next(p=>n.$r.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.ss=i,s))}function vb(t,e,n){let r=ae(),i=ae();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ar();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{hs:o,Ps:i}})}function _b(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function wb(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.$r.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.$r.allocateTargetId(r).next(o=>(i=new Dr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.$r.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ss.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ss=n.ss.insert(r.targetId,r),n.os.set(e,r.targetId)),r})}async function xf(t,e,n){const r=ne(t),i=r.ss.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!nl(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ss=r.ss.remove(e),r.os.delete(i.target)}function dv(t,e,n){const r=ne(t);let i=te.min(),s=ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=ne(u),m=p.os.get(f);return m!==void 0?M.resolve(p.ss.get(m)):p.$r.getTargetData(h,f)}(r,o,On(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.rs.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:ae())).next(l=>(Eb(r,hx(e),l),{documents:l,Is:s})))}function Eb(t,e,n){let r=t._s.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t._s.set(e,r)}class fv{constructor(){this.activeTargetIds=yx()}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Tb{constructor(){this.io=new fv,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,n,r){this.so[e]=n}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new fv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.lo)e(0)}co(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.lo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu=null;function sd(){return eu===null?eu=function(){return 268435456+Math.round(2147483648*Math.random())}():eu++,"0x"+eu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="WebChannelConnection";class Cb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.bo=r+"://"+n.host,this.Do=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get vo(){return!1}Fo(n,r,i,s,o){const l=sd(),u=this.Mo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(h,s,o),this.Oo(n,u,h,i).then(f=>(H("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw $s("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}No(n,r,i,s,o,l){return this.Fo(n,r,i,s,o)}xo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+io}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Mo(n,r){const i=Sb[n];return`${this.bo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,n,r,i){const s=sd();return new Promise((o,l)=>{const u=new fE;u.setWithCredentials(!0),u.listenOnce(mE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Tu.NO_ERROR:const f=u.getResponseJson();H(Rt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Tu.TIMEOUT:H(Rt,`RPC '${e}' ${s} timed out`),l(new q(F.DEADLINE_EXCEEDED,"Request time out"));break;case Tu.HTTP_ERROR:const p=u.getStatus();if(H(Rt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const S=m==null?void 0:m.error;if(S&&S.status&&S.message){const C=function(x){const w=x.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(w)>=0?w:F.UNKNOWN}(S.status);l(new q(C,S.message))}else l(new q(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(F.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{H(Rt,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);H(Rt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Lo(e,n,r){const i=sd(),s=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vE(),l=yE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.xmlHttpFactory=new pE({})),this.xo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");H(Rt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let m=!1,S=!1;const C=new Rb({Po:x=>{S?H(Rt,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(m||(H(Rt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(Rt,`RPC '${e}' stream ${i} sending:`,x),p.send(x))},Io:()=>p.close()}),P=(x,w,_)=>{x.listen(w,E=>{try{_(E)}catch(N){setTimeout(()=>{throw N},0)}})};return P(p,Go.EventType.OPEN,()=>{S||(H(Rt,`RPC '${e}' stream ${i} transport opened.`),C.po())}),P(p,Go.EventType.CLOSE,()=>{S||(S=!0,H(Rt,`RPC '${e}' stream ${i} transport closed`),C.wo())}),P(p,Go.EventType.ERROR,x=>{S||(S=!0,$s(Rt,`RPC '${e}' stream ${i} transport errored:`,x),C.wo(new q(F.UNAVAILABLE,"The operation could not be completed")))}),P(p,Go.EventType.MESSAGE,x=>{var w;if(!S){const _=x.data[0];_e(!!_);const E=_,N=E.error||((w=E[0])===null||w===void 0?void 0:w.error);if(N){H(Rt,`RPC '${e}' stream ${i} received error:`,N);const V=N.status;let L=function(T){const R=je[T];if(R!==void 0)return WE(R)}(V),v=N.message;L===void 0&&(L=F.INTERNAL,v="Unknown error status: "+V+" with message "+N.message),S=!0,C.wo(new q(L,v)),p.close()}else H(Rt,`RPC '${e}' stream ${i} received:`,_),C.So(_)}}),P(l,gE.STAT_EVENT,x=>{x.stat===wf.PROXY?H(Rt,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===wf.NOPROXY&&H(Rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.yo()},0),C}}function od(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(t){return new Vx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ai=e,this.timerId=n,this.Bo=r,this.ko=i,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();const n=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,i,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,n,r,i,s,o,l,u){this.ai=e,this.jo=r,this.Ho=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new r1(e,n)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,n){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,e!==4?this.e_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(or(n.toString()),or("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(n)}c_(){}auth(){this.state=1;const e=this.l_(this.Jo),n=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Jo===n&&this.h_(r,i)},r=>{e(()=>{const i=new q(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.P_(i)})})}h_(e,n){const r=this.l_(this.Jo);this.stream=this.I_(e,n),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(i=>{r(()=>this.P_(i))}),this.stream.onMessage(i=>{r(()=>++this.Xo==1?this.T_(i):this.onNext(i))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return n=>{this.ai.enqueueAndForget(()=>this.Jo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ab extends i1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}I_(e,n){return this.connection.Lo("Listen",e,n)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();const n=$x(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?Dn(o.readTime):te.min()}(e);return this.listener.E_(n,r)}d_(e){const n={};n.database=kf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Sf(u)?{documents:zx(s,u)}:{query:Bx(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=KE(s,o.resumeToken);const h=Cf(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(te.min())>0){l.readTime=vc(s,o.snapshotVersion.toTimestamp());const h=Cf(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=Wx(this.serializer,e);r&&(n.labels=r),this.__(n)}A_(e){const n={};n.database=kf(this.serializer),n.removeTarget=e,this.__(n)}}class Pb extends i1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(e,n){return this.connection.Lo("Write",e,n)}T_(e){return _e(!!e.streamToken),this.lastStreamToken=e.streamToken,_e(!e.writeResults||e.writeResults.length===0),this.listener.m_()}onNext(e){_e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.e_.reset();const n=jx(e.writeResults,e.commitTime),r=Dn(e.commitTime);return this.listener.f_(r,n)}g_(){const e={};e.database=kf(this.serializer),this.__(e)}V_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ux(this.serializer,r))};this.__(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.p_=!1}y_(){if(this.p_)throw new q(F.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,n,r,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,Af(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(F.UNKNOWN,s.toString())})}No(e,n,r,i,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.No(e,Af(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(F.UNKNOWN,o.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class xb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,e==="Online"&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(or(n),this.b_=!1):H("OnlineStateTracker",n)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=s,this.B_.oo(o=>{r.enqueueAndForget(async()=>{Hi(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=ne(u);h.N_.add(4),await sl(h),h.k_.set("Unknown"),h.N_.delete(4),await ih(h)}(this))})}),this.k_=new xb(r,i)}}async function ih(t){if(Hi(t))for(const e of t.L_)await e(!0)}async function sl(t){for(const e of t.L_)await e(!1)}function s1(t,e){const n=ne(t);n.O_.has(e.targetId)||(n.O_.set(e.targetId,e),fm(n)?dm(n):ao(n).n_()&&hm(n,e))}function cm(t,e){const n=ne(t),r=ao(n);n.O_.delete(e),r.n_()&&o1(n,e),n.O_.size===0&&(r.n_()?r.s_():Hi(n)&&n.k_.set("Unknown"))}function hm(t,e){if(t.q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ao(t).d_(e)}function o1(t,e){t.q_.xe(e),ao(t).A_(e)}function dm(t){t.q_=new Nx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.O_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ao(t).start(),t.k_.D_()}function fm(t){return Hi(t)&&!ao(t).t_()&&t.O_.size>0}function Hi(t){return ne(t).N_.size===0}function a1(t){t.q_=void 0}async function Nb(t){t.k_.set("Online")}async function Ob(t){t.O_.forEach((e,n)=>{hm(t,e)})}async function Db(t,e){a1(t),fm(t)?(t.k_.F_(e),dm(t)):t.k_.set("Unknown")}async function Lb(t,e,n){if(t.k_.set("Online"),e instanceof GE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.O_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.O_.delete(l),i.q_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _c(t,r)}else if(e instanceof Ru?t.q_.Ke(e):e instanceof qE?t.q_.He(e):t.q_.We(e),!n.isEqual(te.min()))try{const r=await n1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.O_.get(h);f&&s.O_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.O_.get(u);if(!f)return;s.O_.set(u,f.withResumeToken(_t.EMPTY_BYTE_STRING,f.snapshotVersion)),o1(s,u);const p=new Dr(f.target,u,h,f.sequenceNumber);hm(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await _c(t,r)}}async function _c(t,e,n){if(!nl(e))throw e;t.N_.add(1),await sl(t),t.k_.set("Offline"),n||(n=()=>n1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.N_.delete(1),await ih(t)})}function l1(t,e){return e().catch(n=>_c(t,n,e))}async function sh(t){const e=ne(t),n=ti(e);let r=e.x_.length>0?e.x_[e.x_.length-1].batchId:-1;for(;Vb(e);)try{const i=await _b(e.localStore,r);if(i===null){e.x_.length===0&&n.s_();break}r=i.batchId,Mb(e,i)}catch(i){await _c(e,i)}u1(e)&&c1(e)}function Vb(t){return Hi(t)&&t.x_.length<10}function Mb(t,e){t.x_.push(e);const n=ti(t);n.n_()&&n.R_&&n.V_(e.mutations)}function u1(t){return Hi(t)&&!ti(t).t_()&&t.x_.length>0}function c1(t){ti(t).start()}async function Fb(t){ti(t).g_()}async function $b(t){const e=ti(t);for(const n of t.x_)e.V_(n.mutations)}async function Ub(t,e,n){const r=t.x_.shift(),i=im.from(r,e,n);await l1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await sh(t)}async function jb(t,e){e&&ti(t).R_&&await async function(r,i){if(function(o){return kx(o)&&o!==F.ABORTED}(i.code)){const s=r.x_.shift();ti(r).i_(),await l1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await sh(r)}}(t,e),u1(t)&&c1(t)}async function mv(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Hi(n);n.N_.add(3),await sl(n),r&&n.k_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.N_.delete(3),await ih(n)}async function zb(t,e){const n=ne(t);e?(n.N_.delete(2),await ih(n)):e||(n.N_.add(2),await sl(n),n.k_.set("Unknown"))}function ao(t){return t.Q_||(t.Q_=function(n,r,i){const s=ne(n);return s.y_(),new Ab(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{To:Nb.bind(null,t),Ao:Ob.bind(null,t),Vo:Db.bind(null,t),E_:Lb.bind(null,t)}),t.L_.push(async e=>{e?(t.Q_.i_(),fm(t)?dm(t):t.k_.set("Unknown")):(await t.Q_.stop(),a1(t))})),t.Q_}function ti(t){return t.K_||(t.K_=function(n,r,i){const s=ne(n);return s.y_(),new Pb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{To:()=>Promise.resolve(),Ao:Fb.bind(null,t),Vo:jb.bind(null,t),m_:$b.bind(null,t),f_:Ub.bind(null,t)}),t.L_.push(async e=>{e?(t.K_.i_(),await sh(t)):(await t.K_.stop(),t.x_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.x_.length} pending writes`),t.x_=[]))})),t.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new pm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mm(t,e){if(or("AsyncQueue",`${e}: ${t}`),nl(t))return new q(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=Ko(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new ks(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ks)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ks;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(){this.U_=new Ne(G.comparator)}track(e){const n=e.doc.key,r=this.U_.get(n);r?e.type!==0&&r.type===3?this.U_=this.U_.insert(n,e):e.type===3&&r.type!==1?this.U_=this.U_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.U_=this.U_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.U_=this.U_.remove(n):e.type===1&&r.type===2?this.U_=this.U_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):ee():this.U_=this.U_.insert(n,e)}W_(){const e=[];return this.U_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Hs{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Hs(e,n,ks.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class Hb{constructor(){this.queries=yv(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(n,r){const i=ne(n),s=i.queries;i.queries=yv(),s.forEach((o,l)=>{for(const u of l.z_)u.onError(r)})})(this,new q(F.ABORTED,"Firestore shutting down"))}}function yv(){return new oo(t=>bE(t),Jc)}async function Wb(t,e){const n=ne(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.j_()&&e.H_()&&(r=2):(s=new Bb,r=e.H_()?0:1);try{switch(r){case 0:s.G_=await n.onListen(i,!0);break;case 1:s.G_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=mm(o,`Initialization of query '${rs(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.z_.push(e),e.Y_(n.onlineState),s.G_&&e.Z_(s.G_)&&gm(n)}async function qb(t,e){const n=ne(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.z_.indexOf(e);o>=0&&(s.z_.splice(o,1),s.z_.length===0?i=e.H_()?0:1:!s.j_()&&e.H_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Gb(t,e){const n=ne(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.z_)l.Z_(i)&&(r=!0);o.G_=i}}r&&gm(n)}function Kb(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const s of i.z_)s.onError(n);r.queries.delete(e)}function gm(t){t.J_.forEach(e=>{e.next()})}var bf,vv;(vv=bf||(bf={})).X_="default",vv.Cache="cache";class Qb{constructor(e,n,r){this.query=e,this.ea=n,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ta?this.ra(e)&&(this.ea.next(e),n=!0):this.ia(e,this.onlineState)&&(this.sa(e),n=!0),this.na=e,n}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let n=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),n=!0),n}ia(e,n){if(!e.fromCache||!this.H_())return!0;const r=n!=="Offline";return(!this.options.oa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ra(e){if(e.docChanges.length>0)return!0;const n=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}sa(e){e=Hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==bf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e){this.key=e}}class d1{constructor(e){this.key=e}}class Yb{constructor(e,n){this.query=e,this.Ia=n,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=ae(),this.mutatedKeys=ae(),this.da=NE(e),this.Aa=new ks(this.da)}get Ra(){return this.Ia}Va(e,n){const r=n?n.ma:new gv,i=n?n.Aa:this.Aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),S=Zc(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),P=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let x=!1;m&&S?m.data.isEqual(S.data)?C!==P&&(r.track({type:3,doc:S}),x=!0):this.fa(m,S)||(r.track({type:2,doc:S}),x=!0,(u&&this.da(S,u)>0||h&&this.da(S,h)<0)&&(l=!0)):!m&&S?(r.track({type:0,doc:S}),x=!0):m&&!S&&(r.track({type:1,doc:m}),x=!0,(u||h)&&(l=!0)),x&&(S?(o=o.add(S),s=P?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Aa:o,ma:r,ts:l,mutatedKeys:s}}fa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;const o=e.ma.W_();o.sort((f,p)=>function(S,C){const P=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return P(S)-P(C)}(f.type,p.type)||this.da(f.doc,p.doc)),this.ga(r),i=i!=null&&i;const l=n&&!i?this.pa():[],u=this.Ea.size===0&&this.current&&!i?1:0,h=u!==this.Ta;return this.Ta=u,o.length!==0||h?{snapshot:new Hs(this.query,e.Aa,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:l}:{ya:l}}Y_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new gv,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(n=>this.Ia=this.Ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ia=this.Ia.delete(n)),this.current=e.current)}pa(){if(!this.current)return[];const e=this.Ea;this.Ea=ae(),this.Aa.forEach(r=>{this.wa(r.key)&&(this.Ea=this.Ea.add(r.key))});const n=[];return e.forEach(r=>{this.Ea.has(r)||n.push(new d1(r))}),this.Ea.forEach(r=>{e.has(r)||n.push(new h1(r))}),n}Sa(e){this.Ia=e.Is,this.Ea=ae();const n=this.Va(e.documents);return this.applyChanges(n,!0)}ba(){return Hs.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class Xb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Jb{constructor(e){this.key=e,this.Da=!1}}class Zb{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.va=new oo(l=>bE(l),Jc),this.Fa=new Map,this.Ma=new Set,this.xa=new Ne(G.comparator),this.Oa=new Map,this.Na=new am,this.La={},this.Ba=new Map,this.ka=Bs.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function eN(t,e,n=!0){const r=v1(t);let i;const s=r.va.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ba()):i=await f1(r,e,n,!0),i}async function tN(t,e){const n=v1(t);await f1(n,e,!0,!1)}async function f1(t,e,n,r){const i=await wb(t.localStore,On(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await nN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&s1(t.remoteStore,i),l}async function nN(t,e,n,r,i){t.Qa=(p,m,S)=>async function(P,x,w,_){let E=x.view.Va(w);E.ts&&(E=await dv(P.localStore,x.query,!1).then(({documents:v})=>x.view.Va(v,E)));const N=_&&_.targetChanges.get(x.targetId),V=_&&_.targetMismatches.get(x.targetId)!=null,L=x.view.applyChanges(E,P.isPrimaryClient,N,V);return wv(P,x.targetId,L.ya),L.snapshot}(t,p,m,S);const s=await dv(t.localStore,e,!0),o=new Yb(e,s.Is),l=o.Va(s.documents),u=il.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);wv(t,n,h.ya);const f=new Xb(e,n,o);return t.va.set(e,f),t.Fa.has(n)?t.Fa.get(n).push(e):t.Fa.set(n,[e]),h.snapshot}async function rN(t,e,n){const r=ne(t),i=r.va.get(e),s=r.Fa.get(i.targetId);if(s.length>1)return r.Fa.set(i.targetId,s.filter(o=>!Jc(o,e))),void r.va.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await xf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&cm(r.remoteStore,i.targetId),Nf(r,i.targetId)}).catch(tl)):(Nf(r,i.targetId),await xf(r.localStore,i.targetId,!0))}async function iN(t,e){const n=ne(t),r=n.va.get(e),i=n.Fa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),cm(n.remoteStore,r.targetId))}async function sN(t,e,n){const r=dN(t);try{const i=await function(o,l){const u=ne(o),h=Xe.now(),f=l.reduce((S,C)=>S.add(C.key),ae());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let C=ar(),P=ae();return u.us.getEntries(S,f).next(x=>{C=x,C.forEach((w,_)=>{_.isValidDocument()||(P=P.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,C)).next(x=>{p=x;const w=[];for(const _ of l){const E=Sx(_,p.get(_.key).overlayedDocument);E!=null&&w.push(new Bi(_.key,E,IE(E.value.mapValue),er.exists(!0)))}return u.mutationQueue.addMutationBatch(S,h,w,l)}).next(x=>{m=x;const w=x.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(S,x.batchId,w)})}).then(()=>({batchId:m.batchId,changes:DE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.La[o.currentUser.toKey()];h||(h=new Ne(pe)),h=h.insert(l,u),o.La[o.currentUser.toKey()]=h}(r,i.batchId,n),await ol(r,i.changes),await sh(r.remoteStore)}catch(i){const s=mm(i,"Failed to persist write");n.reject(s)}}async function p1(t,e){const n=ne(t);try{const r=await yb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Oa.get(s);o&&(_e(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Da=!0:i.modifiedDocuments.size>0?_e(o.Da):i.removedDocuments.size>0&&(_e(o.Da),o.Da=!1))}),await ol(n,r,e)}catch(r){await tl(r)}}function _v(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.va.forEach((s,o)=>{const l=o.view.Y_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ne(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const m of p.z_)m.Y_(l)&&(h=!0)}),h&&gm(u)}(r.eventManager,e),i.length&&r.Ca.E_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function oN(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Oa.get(e),s=i&&i.key;if(s){let o=new Ne(G.comparator);o=o.insert(s,Pt.newNoDocument(s,te.min()));const l=ae().add(s),u=new nh(te.min(),new Map,new Ne(pe),o,l);await p1(r,u),r.xa=r.xa.remove(s),r.Oa.delete(e),ym(r)}else await xf(r.localStore,e,!1).then(()=>Nf(r,e,n)).catch(tl)}async function aN(t,e){const n=ne(t),r=e.batch.batchId;try{const i=await gb(n.localStore,e);g1(n,r,null),m1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ol(n,i)}catch(i){await tl(i)}}async function lN(t,e,n){const r=ne(t);try{const i=await function(o,l){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(_e(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);g1(r,e,n),m1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ol(r,i)}catch(i){await tl(i)}}function m1(t,e){(t.Ba.get(e)||[]).forEach(n=>{n.resolve()}),t.Ba.delete(e)}function g1(t,e,n){const r=ne(t);let i=r.La[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.La[r.currentUser.toKey()]=i}}function Nf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fa.get(e))t.va.delete(r),n&&t.Ca.Ka(r,n);t.Fa.delete(e),t.isPrimaryClient&&t.Na.mr(e).forEach(r=>{t.Na.containsKey(r)||y1(t,r)})}function y1(t,e){t.Ma.delete(e.path.canonicalString());const n=t.xa.get(e);n!==null&&(cm(t.remoteStore,n),t.xa=t.xa.remove(e),t.Oa.delete(n),ym(t))}function wv(t,e,n){for(const r of n)r instanceof h1?(t.Na.addReference(r.key,e),uN(t,r)):r instanceof d1?(H("SyncEngine","Document no longer in limbo: "+r.key),t.Na.removeReference(r.key,e),t.Na.containsKey(r.key)||y1(t,r.key)):ee()}function uN(t,e){const n=e.key,r=n.path.canonicalString();t.xa.get(n)||t.Ma.has(r)||(H("SyncEngine","New document in limbo: "+n),t.Ma.add(r),ym(t))}function ym(t){for(;t.Ma.size>0&&t.xa.size<t.maxConcurrentLimboResolutions;){const e=t.Ma.values().next().value;t.Ma.delete(e);const n=new G(Ce.fromString(e)),r=t.ka.next();t.Oa.set(r,new Jb(n)),t.xa=t.xa.insert(n,r),s1(t.remoteStore,new Dr(On(xE(n.path)),r,"TargetPurposeLimboResolution",Jp.oe))}}async function ol(t,e,n){const r=ne(t),i=[],s=[],o=[];r.va.isEmpty()||(r.va.forEach((l,u)=>{o.push(r.Qa(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=um.Ui(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Ca.E_(i),await async function(u,h){const f=ne(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,m=>M.forEach(m.Ki,S=>f.persistence.referenceDelegate.addReference(p,m.targetId,S)).next(()=>M.forEach(m.$i,S=>f.persistence.referenceDelegate.removeReference(p,m.targetId,S)))))}catch(p){if(!nl(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const S=f.ss.get(m),C=S.snapshotVersion,P=S.withLastLimboFreeSnapshotVersion(C);f.ss=f.ss.insert(m,P)}}}(r.localStore,s))}async function cN(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await t1(n.localStore,e);n.currentUser=e,function(s,o){s.Ba.forEach(l=>{l.forEach(u=>{u.reject(new q(F.CANCELLED,o))})}),s.Ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ol(n,r.ls)}}function hN(t,e){const n=ne(t),r=n.Oa.get(e);if(r&&r.Da)return ae().add(r.key);{let i=ae();const s=n.Fa.get(e);if(!s)return i;for(const o of s){const l=n.va.get(o);i=i.unionWith(l.view.Ra)}return i}}function v1(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=p1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oN.bind(null,e),e.Ca.E_=Gb.bind(null,e.eventManager),e.Ca.Ka=Kb.bind(null,e.eventManager),e}function dN(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=aN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lN.bind(null,e),e}class Ev{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=rh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return mb(this.persistence,new fb,e.initialUser,this.serializer)}createPersistence(e){return new cb(lm.Yr,this.serializer)}createSharedClientState(e){return new Tb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class fN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_v(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=cN.bind(null,this.syncEngine),await zb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Hb}()}createDatastore(e){const n=rh(e.databaseInfo.databaseId),r=function(s){return new Cb(s)}(e.databaseInfo);return function(s,o,l,u){return new kb(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new bb(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>_v(this.syncEngine,n,0),function(){return pv.D()?new pv:new Ib}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new Zb(i,s,o,l,u,h);return f&&(p.qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ne(i);H("RemoteStore","RemoteStore shutting down."),s.N_.add(5),await sl(s),s.B_.shutdown(),s.k_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):or("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ct.UNAUTHENTICATED,this.clientId=wE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(F.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=mm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ad(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await t1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Tv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yN(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>mv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>mv(e.remoteStore,i)),t._onlineComponents=e}function gN(t){return t.name==="FirebaseError"?t.code===F.FAILED_PRECONDITION||t.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function yN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await ad(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!gN(n))throw n;$s("Error using user provided cache. Falling back to memory cache: "+n),await ad(t,new Ev)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await ad(t,new Ev);return t._offlineComponents}async function _1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Tv(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Tv(t,new fN))),t._onlineComponents}function vN(t){return _1(t).then(e=>e.syncEngine)}async function _N(t){const e=await _1(t),n=e.eventManager;return n.onListen=eN.bind(null,e.syncEngine),n.onUnlisten=rN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=tN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=iN.bind(null,e.syncEngine),n}function wN(t,e,n={}){const r=new Kr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new pN({next:m=>{o.enqueueAndForget(()=>qb(s,p)),m.fromCache&&u.source==="server"?h.reject(new q(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new Qb(l,f,{includeMetadataChanges:!0,oa:!0});return Wb(s,p)}(await _N(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(t,e,n){if(!n)throw new q(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function EN(t,e,n,r){if(e===!0&&r===!0)throw new q(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Sv(t){if(!G.isDocumentKey(t))throw new q(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Rv(t){if(G.isDocumentKey(t))throw new q(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function wc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vm(t);throw new q(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}EN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=w1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ok;switch(r.type){case"firstParty":return new Mk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Iv.get(n);r&&(H("ComponentProvider","Removing Datastore"),Iv.delete(n),r.terminate())}(this),Promise.resolve()}}function TN(t,e,n,r={}){var i;const s=(t=wc(t,oh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&$s("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ct.MOCK_USER;else{l=uC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new q(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ct(h)}t._authCredentials=new Dk(new _E(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ah(this.firestore,e,this._query)}}class _n{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _n(this.firestore,e,this._key)}}class Qr extends ah{constructor(e,n,r){super(e,n,xE(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _n(this.firestore,null,new G(e))}withConverter(e){return new Qr(this.firestore,e,this._path)}}function T1(t,e,...n){if(t=Tn(t),E1("collection","path",e),t instanceof oh){const r=Ce.fromString(e,...n);return Rv(r),new Qr(t,null,r)}{if(!(t instanceof _n||t instanceof Qr))throw new q(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Rv(r),new Qr(t.firestore,null,r)}}function IN(t,e,...n){if(t=Tn(t),arguments.length===1&&(e=wE.newId()),E1("doc","path",e),t instanceof oh){const r=Ce.fromString(e,...n);return Sv(r),new _n(t,null,new G(r))}{if(!(t instanceof _n||t instanceof Qr))throw new q(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Sv(r),new _n(t.firestore,t instanceof Qr?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new r1(this,"async_queue_retry"),this.Tu=()=>{const n=od();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.e_.zo()};const e=od();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;const n=od();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});const n=new Kr;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!nl(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){const n=this._u.then(()=>(this.hu=!0,e().catch(r=>{this.lu=r,this.hu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw or("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.hu=!1,r))));return this._u=n,n}enqueueAfterDelay(e,n,r){this.Eu(),this.Iu.indexOf(e)>-1&&(n=0);const i=pm.createAndSchedule(this,e,n,r,s=>this.Ru(s));return this.cu.push(i),i}Eu(){this.lu&&ee()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(const n of this.cu)if(n.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{this.cu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.cu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){const n=this.cu.indexOf(e);this.cu.splice(n,1)}}class _m extends oh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new SN}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||S1(this),this._firestoreClient.terminate()}}function RN(t,e){const n=typeof t=="object"?t:xw(),r=typeof t=="string"?t:"(default)",i=$p(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=aC("firestore");s&&TN(i,...s)}return i}function I1(t){return t._firestoreClient||S1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function S1(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new Yk(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,w1(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new mN(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ws(_t.fromBase64String(e))}catch(n){throw new q(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ws(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN=/^__.*__$/;class AN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Bi(e,this.data,this.fieldMask,n,this.fieldTransforms):new rl(e,this.data,n,this.fieldTransforms)}}function C1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class Tm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(e){return new Tm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.wu({path:r,bu:!1});return i.Du(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.wu({path:r,bu:!1});return i.pu(),i}vu(e){return this.wu({path:void 0,bu:!0})}Fu(e){return Ec(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Du(this.path.get(e))}Du(e){if(e.length===0)throw this.Fu("Document fields must not be empty");if(C1(this.yu)&&CN.test(e))throw this.Fu('Document fields cannot begin and end with "__"')}}class PN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||rh(e)}Ou(e,n,r,i=!1){return new Tm({yu:e,methodName:n,xu:r,path:pt.emptyPath(),bu:!1,Mu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kN(t){const e=t._freezeSettings(),n=rh(t._databaseId);return new PN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xN(t,e,n,r,i,s={}){const o=t.Ou(s.merge||s.mergeFields?2:0,e,n,i);x1("Data must be an object, but it was:",o,r);const l=P1(r,o);let u,h;if(s.merge)u=new gn(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=bN(e,p,n);if(!o.contains(m))throw new q(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);ON(f,m)||f.push(m)}u=new gn(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new AN(new rn(l),u,h)}function A1(t,e){if(k1(t=Tn(t)))return x1("Unsupported field value:",e,t),P1(t,e);if(t instanceof R1)return function(r,i){if(!C1(i.yu))throw i.Fu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Fu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.bu&&e.yu!==4)throw e.Fu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=A1(l,i.vu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Tn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return vx(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Xe.fromDate(r);return{timestampValue:vc(i.serializer,s)}}if(r instanceof Xe){const s=new Xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vc(i.serializer,s)}}if(r instanceof Em)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ws)return{bytesValue:KE(i.serializer,r._byteString)};if(r instanceof _n){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:om(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Fu(`Unsupported field value: ${vm(r)}`)}(t,e)}function P1(t,e){const n={};return EE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):so(t,(r,i)=>{const s=A1(i,e.Su(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function k1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof Em||t instanceof Ws||t instanceof _n||t instanceof R1)}function x1(t,e,n){if(!k1(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=vm(n);throw r==="an object"?e.Fu(t+" a custom object"):e.Fu(t+" "+r)}}function bN(t,e,n){if((e=Tn(e))instanceof wm)return e._internalPath;if(typeof e=="string")return b1(t,e);throw Ec("Field path arguments must be of type string or ",t,!1,void 0,n)}const NN=new RegExp("[~\\*/\\[\\]]");function b1(t,e,n){if(e.search(NN)>=0)throw Ec(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wm(...e.split("."))._internalPath}catch{throw Ec(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ec(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(F.INVALID_ARGUMENT,l+t+u)}function ON(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new _n(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(O1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class DN extends N1{data(){return super.data()}}function O1(t,e){return typeof e=="string"?b1(t,e):e instanceof wm?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class VN{convertValue(e,n="none"){switch(Vi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Li(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return so(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Em(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=em(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Va(e));default:return null}}convertTimestamp(e){const n=ei(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);_e(e1(r));const i=new Ma(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||or(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class FN extends N1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Cu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(O1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Cu extends FN{data(e={}){return super.data(e)}}class $N{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new tu(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Cu(this._firestore,this._userDataWriter,r.key,r,new tu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Cu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new tu(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Cu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new tu(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:UN(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function UN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}class jN extends VN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ws(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _n(this.firestore,null,n)}}function zN(t){t=wc(t,ah);const e=wc(t.firestore,_m),n=I1(e),r=new jN(e);return LN(t._query),wN(n,t._query).then(i=>new $N(e,r,t,i))}function BN(t,e){const n=wc(t.firestore,_m),r=IN(t),i=MN(t.converter,e);return HN(n,[xN(kN(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,er.exists(!1))]).then(()=>r)}function HN(t,e){return function(r,i){const s=new Kr;return r.asyncQueue.enqueueAndForget(async()=>sN(await vN(r),i,s)),s.promise}(I1(t),e)}(function(e,n=!0){(function(i){io=i})(no),Ms(new bi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new _m(new Lk(r.getProvider("auth-internal")),new $k(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new q(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ma(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),qr(qy,"4.6.5",e),qr(qy,"4.6.5","esm2017")})();const WN={apiKey:"AIzaSyBLt3QT4tQ6vzon_Q46X7U9Gdwrl9LRN3w",authDomain:"apprutas-3af1f.firebaseapp.com",projectId:"apprutas-3af1f",storageBucket:"apprutas-3af1f.appspot.com",messagingSenderId:"881015801811",appId:"1:881015801811:web:849cddeaf1795104ef9126"},D1=kw(WN),Av=bk(D1),qN=new qn,L1=RN(D1),GN=({onLoginSuccess:t})=>{const e=async()=>{try{await WP(Av,qN)}catch(n){console.error("Error during sign-in:",n)}};return re.useEffect(()=>{(async()=>{try{const r=await GP(Av);r!=null&&r.user&&(console.log("User signed in:",r.user),t())}catch(r){console.error("Error handling redirect result:",r)}})()},[t]),console.log(t),Q.jsxs("div",{className:"container mt-5",children:[Q.jsx("h2",{className:"text-center mb-4",children:"Iniciar Sesión"}),Q.jsx("button",{onClick:e,className:"btn btn-primary w-100",children:"Iniciar sesión con Google"})]})},KN=()=>{const[t,e]=A.useState(""),[n,r]=A.useState(""),[i,s]=A.useState(""),[o,l]=A.useState(""),[u,h]=A.useState(""),[f,p]=A.useState(""),[m,S]=A.useState(""),C=async P=>{P.preventDefault();try{await BN(T1(L1,"rutas"),{name:t,longitude:n,latitude:i,municipality:o,department:u}),S("Route saved successfully!"),e(""),r(""),s(""),l(""),h("")}catch(x){p("Error saving route: "+x.message)}};return Q.jsxs("div",{className:"container mt-5",children:[Q.jsx("h2",{className:"text-center mb-4",children:"Registrar Ruta"}),m&&Q.jsx("div",{className:"alert alert-success",children:m}),f&&Q.jsx("div",{className:"alert alert-danger",children:f}),Q.jsxs("form",{onSubmit:C,children:[Q.jsxs("div",{className:"mb-3",children:[Q.jsx("label",{htmlFor:"name",className:"form-label",children:"Nombre"}),Q.jsx("input",{type:"text",className:"form-control",id:"name",value:t,onChange:P=>e(P.target.value),required:!0})]}),Q.jsxs("div",{className:"mb-3",children:[Q.jsx("label",{htmlFor:"longitude",className:"form-label",children:"Longitud"}),Q.jsx("input",{type:"text",className:"form-control",id:"longitude",value:n,onChange:P=>r(P.target.value),required:!0})]}),Q.jsxs("div",{className:"mb-3",children:[Q.jsx("label",{htmlFor:"latitude",className:"form-label",children:"Latitud"}),Q.jsx("input",{type:"text",className:"form-control",id:"latitude",value:i,onChange:P=>s(P.target.value),required:!0})]}),Q.jsxs("div",{className:"mb-3",children:[Q.jsx("label",{htmlFor:"municipality",className:"form-label",children:"Municipio"}),Q.jsx("input",{type:"text",className:"form-control",id:"municipality",value:o,onChange:P=>l(P.target.value),required:!0})]}),Q.jsxs("div",{className:"mb-3",children:[Q.jsx("label",{htmlFor:"department",className:"form-label",children:"Departamento"}),Q.jsx("input",{type:"text",className:"form-control",id:"department",value:u,onChange:P=>h(P.target.value),required:!0})]}),Q.jsx("button",{type:"submit",className:"btn btn-primary w-100",children:"Guardar Ruta"})]})]})};var kt=function(){return kt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},kt.apply(this,arguments)};function Tc(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var Ie="-ms-",ha="-moz-",me="-webkit-",V1="comm",lh="rule",Im="decl",QN="@import",M1="@keyframes",YN="@layer",F1=Math.abs,Sm=String.fromCharCode,Of=Object.assign;function XN(t,e){return lt(t,0)^45?(((e<<2^lt(t,0))<<2^lt(t,1))<<2^lt(t,2))<<2^lt(t,3):0}function $1(t){return t.trim()}function Hn(t,e){return(t=e.exec(t))?t[0]:t}function ie(t,e,n){return t.replace(e,n)}function Au(t,e,n){return t.indexOf(e,n)}function lt(t,e){return t.charCodeAt(e)|0}function qs(t,e,n){return t.slice(e,n)}function An(t){return t.length}function U1(t){return t.length}function Yo(t,e){return e.push(t),t}function JN(t,e){return t.map(e).join("")}function Pv(t,e){return t.filter(function(n){return!Hn(n,e)})}var uh=1,Gs=1,j1=0,un=0,Be=0,lo="";function ch(t,e,n,r,i,s,o,l){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:uh,column:Gs,length:o,return:"",siblings:l}}function Ir(t,e){return Of(ch("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function ns(t){for(;t.root;)t=Ir(t.root,{children:[t]});Yo(t,t.siblings)}function ZN(){return Be}function eO(){return Be=un>0?lt(lo,--un):0,Gs--,Be===10&&(Gs=1,uh--),Be}function wn(){return Be=un<j1?lt(lo,un++):0,Gs++,Be===10&&(Gs=1,uh++),Be}function Si(){return lt(lo,un)}function Pu(){return un}function hh(t,e){return qs(lo,t,e)}function Df(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function tO(t){return uh=Gs=1,j1=An(lo=t),un=0,[]}function nO(t){return lo="",t}function ld(t){return $1(hh(un-1,Lf(t===91?t+2:t===40?t+1:t)))}function rO(t){for(;(Be=Si())&&Be<33;)wn();return Df(t)>2||Df(Be)>3?"":" "}function iO(t,e){for(;--e&&wn()&&!(Be<48||Be>102||Be>57&&Be<65||Be>70&&Be<97););return hh(t,Pu()+(e<6&&Si()==32&&wn()==32))}function Lf(t){for(;wn();)switch(Be){case t:return un;case 34:case 39:t!==34&&t!==39&&Lf(Be);break;case 40:t===41&&Lf(t);break;case 92:wn();break}return un}function sO(t,e){for(;wn()&&t+Be!==57;)if(t+Be===84&&Si()===47)break;return"/*"+hh(e,un-1)+"*"+Sm(t===47?t:wn())}function oO(t){for(;!Df(Si());)wn();return hh(t,un)}function aO(t){return nO(ku("",null,null,null,[""],t=tO(t),0,[0],t))}function ku(t,e,n,r,i,s,o,l,u){for(var h=0,f=0,p=o,m=0,S=0,C=0,P=1,x=1,w=1,_=0,E="",N=i,V=s,L=r,v=E;x;)switch(C=_,_=wn()){case 40:if(C!=108&&lt(v,p-1)==58){Au(v+=ie(ld(_),"&","&\f"),"&\f",F1(h?l[h-1]:0))!=-1&&(w=-1);break}case 34:case 39:case 91:v+=ld(_);break;case 9:case 10:case 13:case 32:v+=rO(C);break;case 92:v+=iO(Pu()-1,7);continue;case 47:switch(Si()){case 42:case 47:Yo(lO(sO(wn(),Pu()),e,n,u),u);break;default:v+="/"}break;case 123*P:l[h++]=An(v)*w;case 125*P:case 59:case 0:switch(_){case 0:case 125:x=0;case 59+f:w==-1&&(v=ie(v,/\f/g,"")),S>0&&An(v)-p&&Yo(S>32?xv(v+";",r,n,p-1,u):xv(ie(v," ","")+";",r,n,p-2,u),u);break;case 59:v+=";";default:if(Yo(L=kv(v,e,n,h,f,i,l,E,N=[],V=[],p,s),s),_===123)if(f===0)ku(v,e,L,L,N,s,p,l,V);else switch(m===99&&lt(v,3)===110?100:m){case 100:case 108:case 109:case 115:ku(t,L,L,r&&Yo(kv(t,L,L,0,0,i,l,E,i,N=[],p,V),V),i,V,p,l,r?N:V);break;default:ku(v,L,L,L,[""],V,0,l,V)}}h=f=S=0,P=w=1,E=v="",p=o;break;case 58:p=1+An(v),S=C;default:if(P<1){if(_==123)--P;else if(_==125&&P++==0&&eO()==125)continue}switch(v+=Sm(_),_*P){case 38:w=f>0?1:(v+="\f",-1);break;case 44:l[h++]=(An(v)-1)*w,w=1;break;case 64:Si()===45&&(v+=ld(wn())),m=Si(),f=p=An(E=v+=oO(Pu())),_++;break;case 45:C===45&&An(v)==2&&(P=0)}}return s}function kv(t,e,n,r,i,s,o,l,u,h,f,p){for(var m=i-1,S=i===0?s:[""],C=U1(S),P=0,x=0,w=0;P<r;++P)for(var _=0,E=qs(t,m+1,m=F1(x=o[P])),N=t;_<C;++_)(N=$1(x>0?S[_]+" "+E:ie(E,/&\f/g,S[_])))&&(u[w++]=N);return ch(t,e,n,i===0?lh:l,u,h,f,p)}function lO(t,e,n,r){return ch(t,e,n,V1,Sm(ZN()),qs(t,2,-2),0,r)}function xv(t,e,n,r,i){return ch(t,e,n,Im,qs(t,0,r),qs(t,r+1,-1),r,i)}function z1(t,e,n){switch(XN(t,e)){case 5103:return me+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return me+t+t;case 4789:return ha+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return me+t+ha+t+Ie+t+t;case 5936:switch(lt(t,e+11)){case 114:return me+t+Ie+ie(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return me+t+Ie+ie(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return me+t+Ie+ie(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return me+t+Ie+t+t;case 6165:return me+t+Ie+"flex-"+t+t;case 5187:return me+t+ie(t,/(\w+).+(:[^]+)/,me+"box-$1$2"+Ie+"flex-$1$2")+t;case 5443:return me+t+Ie+"flex-item-"+ie(t,/flex-|-self/g,"")+(Hn(t,/flex-|baseline/)?"":Ie+"grid-row-"+ie(t,/flex-|-self/g,""))+t;case 4675:return me+t+Ie+"flex-line-pack"+ie(t,/align-content|flex-|-self/g,"")+t;case 5548:return me+t+Ie+ie(t,"shrink","negative")+t;case 5292:return me+t+Ie+ie(t,"basis","preferred-size")+t;case 6060:return me+"box-"+ie(t,"-grow","")+me+t+Ie+ie(t,"grow","positive")+t;case 4554:return me+ie(t,/([^-])(transform)/g,"$1"+me+"$2")+t;case 6187:return ie(ie(ie(t,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),t,"")+t;case 5495:case 3959:return ie(t,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return ie(ie(t,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+Ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+me+t+t;case 4200:if(!Hn(t,/flex-|baseline/))return Ie+"grid-column-align"+qs(t,e)+t;break;case 2592:case 3360:return Ie+ie(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Hn(r.props,/grid-\w+-end/)})?~Au(t+(n=n[e].value),"span",0)?t:Ie+ie(t,"-start","")+t+Ie+"grid-row-span:"+(~Au(n,"span",0)?Hn(n,/\d+/):+Hn(n,/\d+/)-+Hn(t,/\d+/))+";":Ie+ie(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Hn(r.props,/grid-\w+-start/)})?t:Ie+ie(ie(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ie(t,/(.+)-inline(.+)/,me+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(An(t)-1-e>6)switch(lt(t,e+1)){case 109:if(lt(t,e+4)!==45)break;case 102:return ie(t,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+ha+(lt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Au(t,"stretch",0)?z1(ie(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ie(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,l,u,h){return Ie+i+":"+s+h+(o?Ie+i+"-span:"+(l?u:+u-+s)+h:"")+t});case 4949:if(lt(t,e+6)===121)return ie(t,":",":"+me)+t;break;case 6444:switch(lt(t,lt(t,14)===45?18:11)){case 120:return ie(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+me+(lt(t,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+Ie+"$2box$3")+t;case 100:return ie(t,":",":"+Ie)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ie(t,"scroll-","scroll-snap-")+t}return t}function Ic(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function uO(t,e,n,r){switch(t.type){case YN:if(t.children.length)break;case QN:case Im:return t.return=t.return||t.value;case V1:return"";case M1:return t.return=t.value+"{"+Ic(t.children,r)+"}";case lh:if(!An(t.value=t.props.join(",")))return""}return An(n=Ic(t.children,r))?t.return=t.value+"{"+n+"}":""}function cO(t){var e=U1(t);return function(n,r,i,s){for(var o="",l=0;l<e;l++)o+=t[l](n,r,i,s)||"";return o}}function hO(t){return function(e){e.root||(e=e.return)&&t(e)}}function dO(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Im:t.return=z1(t.value,t.length,n);return;case M1:return Ic([Ir(t,{value:ie(t.value,"@","@"+me)})],r);case lh:if(t.length)return JN(n=t.props,function(i){switch(Hn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ns(Ir(t,{props:[ie(i,/:(read-\w+)/,":"+ha+"$1")]})),ns(Ir(t,{props:[i]})),Of(t,{props:Pv(n,r)});break;case"::placeholder":ns(Ir(t,{props:[ie(i,/:(plac\w+)/,":"+me+"input-$1")]})),ns(Ir(t,{props:[ie(i,/:(plac\w+)/,":"+ha+"$1")]})),ns(Ir(t,{props:[ie(i,/:(plac\w+)/,Ie+"input-$1")]})),ns(Ir(t,{props:[i]})),Of(t,{props:Pv(n,r)});break}return""})}}var fO={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gt={},Ks=typeof process<"u"&&Gt!==void 0&&(Gt.REACT_APP_SC_ATTR||Gt.SC_ATTR)||"data-styled",B1="active",H1="data-styled-version",dh="6.1.12",Rm=`/*!sc*/
`,Sc=typeof window<"u"&&"HTMLElement"in window,pO=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Gt!==void 0&&Gt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Gt.REACT_APP_SC_DISABLE_SPEEDY!==""?Gt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Gt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Gt!==void 0&&Gt.SC_DISABLE_SPEEDY!==void 0&&Gt.SC_DISABLE_SPEEDY!==""&&Gt.SC_DISABLE_SPEEDY!=="false"&&Gt.SC_DISABLE_SPEEDY),fh=Object.freeze([]),Qs=Object.freeze({});function mO(t,e,n){return n===void 0&&(n=Qs),t.theme!==n.theme&&t.theme||e||n.theme}var W1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),gO=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yO=/(^-|-$)/g;function bv(t){return t.replace(gO,"-").replace(yO,"")}var vO=/(a)(d)/gi,nu=52,Nv=function(t){return String.fromCharCode(t+(t>25?39:97))};function Vf(t){var e,n="";for(e=Math.abs(t);e>nu;e=e/nu|0)n=Nv(e%nu)+n;return(Nv(e%nu)+n).replace(vO,"$1-$2")}var ud,q1=5381,_s=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},G1=function(t){return _s(q1,t)};function _O(t){return Vf(G1(t)>>>0)}function wO(t){return t.displayName||t.name||"Component"}function cd(t){return typeof t=="string"&&!0}var K1=typeof Symbol=="function"&&Symbol.for,Q1=K1?Symbol.for("react.memo"):60115,EO=K1?Symbol.for("react.forward_ref"):60112,TO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},IO={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Y1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},SO=((ud={})[EO]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ud[Q1]=Y1,ud);function Ov(t){return("type"in(e=t)&&e.type.$$typeof)===Q1?Y1:"$$typeof"in t?SO[t.$$typeof]:TO;var e}var RO=Object.defineProperty,CO=Object.getOwnPropertyNames,Dv=Object.getOwnPropertySymbols,AO=Object.getOwnPropertyDescriptor,PO=Object.getPrototypeOf,Lv=Object.prototype;function X1(t,e,n){if(typeof e!="string"){if(Lv){var r=PO(e);r&&r!==Lv&&X1(t,r,n)}var i=CO(e);Dv&&(i=i.concat(Dv(e)));for(var s=Ov(t),o=Ov(e),l=0;l<i.length;++l){var u=i[l];if(!(u in IO||n&&n[u]||o&&u in o||s&&u in s)){var h=AO(e,u);try{RO(t,u,h)}catch{}}}}return t}function Mi(t){return typeof t=="function"}function Cm(t){return typeof t=="object"&&"styledComponentId"in t}function wi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Vv(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function ja(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Mf(t,e,n){if(n===void 0&&(n=!1),!n&&!ja(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Mf(t[r],e[r]);else if(ja(e))for(var r in e)t[r]=Mf(t[r],e[r]);return t}function Am(t,e){Object.defineProperty(t,"toString",{value:e})}function Fi(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var kO=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Fi(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(e+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Rm);return n},t}(),xu=new Map,Rc=new Map,bu=1,ru=function(t){if(xu.has(t))return xu.get(t);for(;Rc.has(bu);)bu++;var e=bu++;return xu.set(t,e),Rc.set(e,t),e},xO=function(t,e){bu=e+1,xu.set(t,e),Rc.set(e,t)},bO="style[".concat(Ks,"][").concat(H1,'="').concat(dh,'"]'),NO=new RegExp("^".concat(Ks,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),OO=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},DO=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Rm),i=[],s=0,o=r.length;s<o;s++){var l=r[s].trim();if(l){var u=l.match(NO);if(u){var h=0|parseInt(u[1],10),f=u[2];h!==0&&(xO(f,h),OO(t,f,u[3]),t.getTag().insertRules(h,i)),i.length=0}else i.push(l)}}},Mv=function(t){for(var e=document.querySelectorAll(bO),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Ks)!==B1&&(DO(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function LO(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var J1=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(l){var u=Array.from(l.querySelectorAll("style[".concat(Ks,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ks,B1),r.setAttribute(H1,dh);var o=LO();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},VO=function(){function t(e){this.element=J1(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Fi(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),MO=function(){function t(e){this.element=J1(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),FO=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Fv=Sc,$O={isServer:!Sc,useCSSOMInjection:!pO},Z1=function(){function t(e,n,r){e===void 0&&(e=Qs),n===void 0&&(n={});var i=this;this.options=kt(kt({},$O),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Sc&&Fv&&(Fv=!1,Mv(this)),Am(this,function(){return function(s){for(var o=s.getTag(),l=o.length,u="",h=function(p){var m=function(w){return Rc.get(w)}(p);if(m===void 0)return"continue";var S=s.names.get(m),C=o.getGroup(p);if(S===void 0||!S.size||C.length===0)return"continue";var P="".concat(Ks,".g").concat(p,'[id="').concat(m,'"]'),x="";S!==void 0&&S.forEach(function(w){w.length>0&&(x+="".concat(w,","))}),u+="".concat(C).concat(P,'{content:"').concat(x,'"}').concat(Rm)},f=0;f<l;f++)h(f);return u}(i)})}return t.registerId=function(e){return ru(e)},t.prototype.rehydrate=function(){!this.server&&Sc&&Mv(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(kt(kt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new FO(i):r?new VO(i):new MO(i)}(this.options),new kO(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(ru(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(ru(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(ru(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),UO=/&/g,jO=/^\s*\/\/.*$/gm;function eT(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=eT(n.children,e)),n})}function zO(t){var e,n,r,i=Qs,s=i.options,o=s===void 0?Qs:s,l=i.plugins,u=l===void 0?fh:l,h=function(m,S,C){return C.startsWith(n)&&C.endsWith(n)&&C.replaceAll(n,"").length>0?".".concat(e):m},f=u.slice();f.push(function(m){m.type===lh&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(UO,n).replace(r,h))}),o.prefix&&f.push(dO),f.push(uO);var p=function(m,S,C,P){S===void 0&&(S=""),C===void 0&&(C=""),P===void 0&&(P="&"),e=P,n=S,r=new RegExp("\\".concat(n,"\\b"),"g");var x=m.replace(jO,""),w=aO(C||S?"".concat(C," ").concat(S," { ").concat(x," }"):x);o.namespace&&(w=eT(w,o.namespace));var _=[];return Ic(w,cO(f.concat(hO(function(E){return _.push(E)})))),_};return p.hash=u.length?u.reduce(function(m,S){return S.name||Fi(15),_s(m,S.name)},q1).toString():"",p}var BO=new Z1,Ff=zO(),tT=re.createContext({shouldForwardProp:void 0,styleSheet:BO,stylis:Ff});tT.Consumer;re.createContext(void 0);function $v(){return A.useContext(tT)}var HO=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Ff);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Am(this,function(){throw Fi(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Ff),this.name+e.hash},t}(),WO=function(t){return t>="A"&&t<="Z"};function Uv(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;WO(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var nT=function(t){return t==null||t===!1||t===""},rT=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!nT(s)&&(Array.isArray(s)&&s.isCss||Mi(s)?r.push("".concat(Uv(i),":"),s,";"):ja(s)?r.push.apply(r,Tc(Tc(["".concat(i," {")],rT(s),!1),["}"],!1)):r.push("".concat(Uv(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in fO||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ri(t,e,n,r){if(nT(t))return[];if(Cm(t))return[".".concat(t.styledComponentId)];if(Mi(t)){if(!Mi(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Ri(i,e,n,r)}var s;return t instanceof HO?n?(t.inject(n,r),[t.getName(r)]):[t]:ja(t)?rT(t):Array.isArray(t)?Array.prototype.concat.apply(fh,t.map(function(o){return Ri(o,e,n,r)})):[t.toString()]}function qO(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Mi(n)&&!Cm(n))return!1}return!0}var GO=G1(dh),KO=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&qO(e),this.componentId=n,this.baseHash=_s(GO,n),this.baseStyle=r,Z1.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=wi(i,this.staticRulesId);else{var s=Vv(Ri(this.rules,e,n,r)),o=Vf(_s(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=wi(i,o),this.staticRulesId=o}else{for(var u=_s(this.baseHash,r.hash),h="",f=0;f<this.rules.length;f++){var p=this.rules[f];if(typeof p=="string")h+=p;else if(p){var m=Vv(Ri(p,e,n,r));u=_s(u,m+f),h+=m}}if(h){var S=Vf(u>>>0);n.hasNameForId(this.componentId,S)||n.insertRules(this.componentId,S,r(h,".".concat(S),void 0,this.componentId)),i=wi(i,S)}}return i},t}(),Cc=re.createContext(void 0);Cc.Consumer;function QO(t){var e=re.useContext(Cc),n=A.useMemo(function(){return function(r,i){if(!r)throw Fi(14);if(Mi(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw Fi(8);return i?kt(kt({},i),r):r}(t.theme,e)},[t.theme,e]);return t.children?re.createElement(Cc.Provider,{value:n},t.children):null}var hd={};function YO(t,e,n){var r=Cm(t),i=t,s=!cd(t),o=e.attrs,l=o===void 0?fh:o,u=e.componentId,h=u===void 0?function(N,V){var L=typeof N!="string"?"sc":bv(N);hd[L]=(hd[L]||0)+1;var v="".concat(L,"-").concat(_O(dh+L+hd[L]));return V?"".concat(V,"-").concat(v):v}(e.displayName,e.parentComponentId):u,f=e.displayName,p=f===void 0?function(N){return cd(N)?"styled.".concat(N):"Styled(".concat(wO(N),")")}(t):f,m=e.displayName&&e.componentId?"".concat(bv(e.displayName),"-").concat(e.componentId):e.componentId||h,S=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,C=e.shouldForwardProp;if(r&&i.shouldForwardProp){var P=i.shouldForwardProp;if(e.shouldForwardProp){var x=e.shouldForwardProp;C=function(N,V){return P(N,V)&&x(N,V)}}else C=P}var w=new KO(n,m,r?i.componentStyle:void 0);function _(N,V){return function(L,v,y){var T=L.attrs,R=L.componentStyle,k=L.defaultProps,b=L.foldedComponentIds,I=L.styledComponentId,Le=L.target,bt=re.useContext(Cc),Vt=$v(),$e=L.shouldForwardProp||Vt.shouldForwardProp,z=mO(v,bt,k)||Qs,W=function(qe,Pe,Ze){for(var cn,Mt=kt(kt({},Pe),{className:void 0,theme:Ze}),en=0;en<qe.length;en+=1){var et=Mi(cn=qe[en])?cn(Mt):cn;for(var Ue in et)Mt[Ue]=Ue==="className"?wi(Mt[Ue],et[Ue]):Ue==="style"?kt(kt({},Mt[Ue]),et[Ue]):et[Ue]}return Pe.className&&(Mt.className=wi(Mt.className,Pe.className)),Mt}(T,v,z),K=W.as||Le,ce={};for(var J in W)W[J]===void 0||J[0]==="$"||J==="as"||J==="theme"&&W.theme===z||(J==="forwardedAs"?ce.as=W.forwardedAs:$e&&!$e(J,K)||(ce[J]=W[J]));var ge=function(qe,Pe){var Ze=$v(),cn=qe.generateAndInjectStyles(Pe,Ze.styleSheet,Ze.stylis);return cn}(R,W),Ae=wi(b,I);return ge&&(Ae+=" "+ge),W.className&&(Ae+=" "+W.className),ce[cd(K)&&!W1.has(K)?"class":"className"]=Ae,ce.ref=y,A.createElement(K,ce)}(E,N,V)}_.displayName=p;var E=re.forwardRef(_);return E.attrs=S,E.componentStyle=w,E.displayName=p,E.shouldForwardProp=C,E.foldedComponentIds=r?wi(i.foldedComponentIds,i.styledComponentId):"",E.styledComponentId=m,E.target=r?i.target:t,Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(N){this._foldedDefaultProps=r?function(V){for(var L=[],v=1;v<arguments.length;v++)L[v-1]=arguments[v];for(var y=0,T=L;y<T.length;y++)Mf(V,T[y],!0);return V}({},i.defaultProps,N):N}}),Am(E,function(){return".".concat(E.styledComponentId)}),s&&X1(E,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),E}function jv(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var zv=function(t){return Object.assign(t,{isCss:!0})};function Je(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Mi(t)||ja(t))return zv(Ri(jv(fh,Tc([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Ri(r):zv(Ri(jv(r,e)))}function $f(t,e,n){if(n===void 0&&(n=Qs),!e)throw Fi(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,Je.apply(void 0,Tc([i],s,!1)))};return r.attrs=function(i){return $f(t,e,kt(kt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return $f(t,e,kt(kt({},n),i))},r}var iT=function(t){return $f(YO,t)},se=iT;W1.forEach(function(t){se[t]=iT(t)});var Yr;function Ys(t,e){return t[e]}function XO(t=[],e,n=0){return[...t.slice(0,n),e,...t.slice(n)]}function JO(t=[],e,n="id"){const r=t.slice(),i=Ys(e,n);return i?r.splice(r.findIndex(s=>Ys(s,n)===i),1):r.splice(r.findIndex(s=>s===e),1),r}function Bv(t){return t.map((e,n)=>{const r=Object.assign(Object.assign({},e),{sortable:e.sortable||!!e.sortFunction||void 0});return e.id||(r.id=n+1),r})}function da(t,e){return Math.ceil(t/e)}function dd(t,e){return Math.min(t,e)}(function(t){t.ASC="asc",t.DESC="desc"})(Yr||(Yr={}));const Ge=()=>null;function sT(t,e=[],n=[]){let r={},i=[...n];return e.length&&e.forEach(s=>{if(!s.when||typeof s.when!="function")throw new Error('"when" must be defined in the conditional style object and must be function');s.when(t)&&(r=s.style||{},s.classNames&&(i=[...i,...s.classNames]),typeof s.style=="function"&&(r=s.style(t)||{}))}),{conditionalStyle:r,classNames:i.join(" ")}}function Nu(t,e=[],n="id"){const r=Ys(t,n);return r?e.some(i=>Ys(i,n)===r):e.some(i=>i===t)}function iu(t,e){return e?t.findIndex(n=>fa(n.id,e)):-1}function fa(t,e){return t==e}function ZO(t,e){const n=!t.toggleOnSelectedRowsChange;switch(e.type){case"SELECT_ALL_ROWS":{const{keyField:r,rows:i,rowCount:s,mergeSelections:o}=e,l=!t.allSelected,u=!t.toggleOnSelectedRowsChange;if(o){const h=l?[...t.selectedRows,...i.filter(f=>!Nu(f,t.selectedRows,r))]:t.selectedRows.filter(f=>!Nu(f,i,r));return Object.assign(Object.assign({},t),{allSelected:l,selectedCount:h.length,selectedRows:h,toggleOnSelectedRowsChange:u})}return Object.assign(Object.assign({},t),{allSelected:l,selectedCount:l?s:0,selectedRows:l?i:[],toggleOnSelectedRowsChange:u})}case"SELECT_SINGLE_ROW":{const{keyField:r,row:i,isSelected:s,rowCount:o,singleSelect:l}=e;return l?s?Object.assign(Object.assign({},t),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},t),{selectedCount:1,allSelected:!1,selectedRows:[i],toggleOnSelectedRowsChange:n}):s?Object.assign(Object.assign({},t),{selectedCount:t.selectedRows.length>0?t.selectedRows.length-1:0,allSelected:!1,selectedRows:JO(t.selectedRows,i,r),toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},t),{selectedCount:t.selectedRows.length+1,allSelected:t.selectedRows.length+1===o,selectedRows:XO(t.selectedRows,i),toggleOnSelectedRowsChange:n})}case"SELECT_MULTIPLE_ROWS":{const{keyField:r,selectedRows:i,totalRows:s,mergeSelections:o}=e;if(o){const l=[...t.selectedRows,...i.filter(u=>!Nu(u,t.selectedRows,r))];return Object.assign(Object.assign({},t),{selectedCount:l.length,allSelected:!1,selectedRows:l,toggleOnSelectedRowsChange:n})}return Object.assign(Object.assign({},t),{selectedCount:i.length,allSelected:i.length===s,selectedRows:i,toggleOnSelectedRowsChange:n})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:r}=e;return Object.assign(Object.assign({},t),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:r})}case"SORT_CHANGE":{const{sortDirection:r,selectedColumn:i,clearSelectedOnSort:s}=e;return Object.assign(Object.assign(Object.assign({},t),{selectedColumn:i,sortDirection:r,currentPage:1}),s&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_PAGE":{const{page:r,paginationServer:i,visibleOnly:s,persistSelectedOnPageChange:o}=e,l=i&&o,u=i&&!o||s;return Object.assign(Object.assign(Object.assign(Object.assign({},t),{currentPage:r}),l&&{allSelected:!1}),u&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:r,page:i}=e;return Object.assign(Object.assign({},t),{currentPage:i,rowsPerPage:r})}}}const eD=Je`
	pointer-events: none;
	opacity: 0.4;
`,tD=se.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:t})=>t&&eD};
	${({theme:t})=>t.table.style};
`,nD=Je`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,rD=se.div`
	display: flex;
	width: 100%;
	${({$fixedHeader:t})=>t&&nD};
	${({theme:t})=>t.head.style};
`,iD=se.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:t})=>t.headRow.style};
	${({$dense:t,theme:e})=>t&&e.headRow.denseStyle};
`,oT=(t,...e)=>Je`
		@media screen and (max-width: ${599}px) {
			${Je(t,...e)}
		}
	`,sD=(t,...e)=>Je`
		@media screen and (max-width: ${959}px) {
			${Je(t,...e)}
		}
	`,oD=(t,...e)=>Je`
		@media screen and (max-width: ${1280}px) {
			${Je(t,...e)}
		}
	`,aD=t=>(e,...n)=>Je`
			@media screen and (max-width: ${t}px) {
				${Je(e,...n)}
			}
		`,uo=se.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:t,$headCell:e})=>t[e?"headCells":"cells"].style};
	${({$noPadding:t})=>t&&"padding: 0"};
`,aT=se(uo)`
	flex-grow: ${({button:t,grow:e})=>e===0||t?0:e||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:t})=>t||"100%"};
	min-width: ${({minWidth:t})=>t||"100px"};
	${({width:t})=>t&&Je`
			min-width: ${t};
			max-width: ${t};
		`};
	${({right:t})=>t&&"justify-content: flex-end"};
	${({button:t,center:e})=>(e||t)&&"justify-content: center"};
	${({compact:t,button:e})=>(t||e)&&"padding: 0"};

	/* handle hiding cells */
	${({hide:t})=>t&&t==="sm"&&oT`
    display: none;
  `};
	${({hide:t})=>t&&t==="md"&&sD`
    display: none;
  `};
	${({hide:t})=>t&&t==="lg"&&oD`
    display: none;
  `};
	${({hide:t})=>t&&Number.isInteger(t)&&aD(t)`
    display: none;
  `};
`,lD=Je`
	div:first-child {
		white-space: ${({$wrapCell:t})=>t?"normal":"nowrap"};
		overflow: ${({$allowOverflow:t})=>t?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,uD=se(aT).attrs(t=>({style:t.style}))`
	${({$renderAsCell:t})=>!t&&lD};
	${({theme:t,$isDragging:e})=>e&&t.cells.draggingStyle};
	${({$cellStyle:t})=>t};
`;var cD=A.memo(function({id:t,column:e,row:n,rowIndex:r,dataTag:i,isDragging:s,onDragStart:o,onDragOver:l,onDragEnd:u,onDragEnter:h,onDragLeave:f}){const{conditionalStyle:p,classNames:m}=sT(n,e.conditionalCellStyles,["rdt_TableCell"]);return A.createElement(uD,{id:t,"data-column-id":e.id,role:"cell",className:m,"data-tag":i,$cellStyle:e.style,$renderAsCell:!!e.cell,$allowOverflow:e.allowOverflow,button:e.button,center:e.center,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,width:e.width,$wrapCell:e.wrap,style:p,$isDragging:s,onDragStart:o,onDragOver:l,onDragEnd:u,onDragEnter:h,onDragLeave:f},!e.cell&&A.createElement("div",{"data-tag":i},function(S,C,P,x){return C?P&&typeof P=="function"?P(S,x):C(S,x):null}(n,e.selector,e.format,r)),e.cell&&e.cell(n,r,e,t))});const Hv="input";var lT=A.memo(function({name:t,component:e=Hv,componentOptions:n={style:{}},indeterminate:r=!1,checked:i=!1,disabled:s=!1,onClick:o=Ge}){const l=e,u=l!==Hv?n.style:(f=>Object.assign(Object.assign({fontSize:"18px"},!f&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(s),h=A.useMemo(()=>function(f,...p){let m;return Object.keys(f).map(S=>f[S]).forEach((S,C)=>{typeof S=="function"&&(m=Object.assign(Object.assign({},f),{[Object.keys(f)[C]]:S(...p)}))}),m||f}(n,r),[n,r]);return A.createElement(l,Object.assign({type:"checkbox",ref:f=>{f&&(f.indeterminate=r)},style:u,onClick:s?Ge:o,name:t,"aria-label":t,checked:i,disabled:s},h,{onChange:Ge}))});const hD=se(uo)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function dD({name:t,keyField:e,row:n,rowCount:r,selected:i,selectableRowsComponent:s,selectableRowsComponentProps:o,selectableRowsSingle:l,selectableRowDisabled:u,onSelectedRow:h}){const f=!(!u||!u(n));return A.createElement(hD,{onClick:p=>p.stopPropagation(),className:"rdt_TableCell",$noPadding:!0},A.createElement(lT,{name:t,component:s,componentOptions:o,checked:i,"aria-checked":i,onClick:()=>{h({type:"SELECT_SINGLE_ROW",row:n,isSelected:i,keyField:e,rowCount:r,singleSelect:l})},disabled:f}))}const fD=se.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:t})=>t.expanderButton.style};
`;function pD({disabled:t=!1,expanded:e=!1,expandableIcon:n,id:r,row:i,onToggled:s}){const o=e?n.expanded:n.collapsed;return A.createElement(fD,{"aria-disabled":t,onClick:()=>s&&s(i),"data-testid":`expander-button-${r}`,disabled:t,"aria-label":e?"Collapse Row":"Expand Row",role:"button",type:"button"},o)}const mD=se(uo)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:t})=>t.expanderCell.style};
`;function gD({row:t,expanded:e=!1,expandableIcon:n,id:r,onToggled:i,disabled:s=!1}){return A.createElement(mD,{onClick:o=>o.stopPropagation(),$noPadding:!0},A.createElement(pD,{id:r,row:t,expanded:e,expandableIcon:n,disabled:s,onToggled:i}))}const yD=se.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:t})=>t.expanderRow.style};
	${({$extendedRowStyle:t})=>t};
`;var vD=A.memo(function({data:t,ExpanderComponent:e,expanderComponentProps:n,extendedRowStyle:r,extendedClassNames:i}){const s=["rdt_ExpanderRow",...i.split(" ").filter(o=>o!=="rdt_TableRow")].join(" ");return A.createElement(yD,{className:s,$extendedRowStyle:r},A.createElement(e,Object.assign({data:t},n)))});const fd="allowRowEvents";var Ac,Uf,Wv;(function(t){t.LTR="ltr",t.RTL="rtl",t.AUTO="auto"})(Ac||(Ac={})),function(t){t.LEFT="left",t.RIGHT="right",t.CENTER="center"}(Uf||(Uf={})),function(t){t.SM="sm",t.MD="md",t.LG="lg"}(Wv||(Wv={}));const _D=Je`
	&:hover {
		${({$highlightOnHover:t,theme:e})=>t&&e.rows.highlightOnHoverStyle};
	}
`,wD=Je`
	&:hover {
		cursor: pointer;
	}
`,ED=se.div.attrs(t=>({style:t.style}))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:t})=>t.rows.style};
	${({$dense:t,theme:e})=>t&&e.rows.denseStyle};
	${({$striped:t,theme:e})=>t&&e.rows.stripedStyle};
	${({$highlightOnHover:t})=>t&&_D};
	${({$pointerOnHover:t})=>t&&wD};
	${({$selected:t,theme:e})=>t&&e.rows.selectedHighlightStyle};
	${({$conditionalStyle:t})=>t};
`;function TD({columns:t=[],conditionalRowStyles:e=[],defaultExpanded:n=!1,defaultExpanderDisabled:r=!1,dense:i=!1,expandableIcon:s,expandableRows:o=!1,expandableRowsComponent:l,expandableRowsComponentProps:u,expandableRowsHideExpander:h,expandOnRowClicked:f=!1,expandOnRowDoubleClicked:p=!1,highlightOnHover:m=!1,id:S,expandableInheritConditionalStyles:C,keyField:P,onRowClicked:x=Ge,onRowDoubleClicked:w=Ge,onRowMouseEnter:_=Ge,onRowMouseLeave:E=Ge,onRowExpandToggled:N=Ge,onSelectedRow:V=Ge,pointerOnHover:L=!1,row:v,rowCount:y,rowIndex:T,selectableRowDisabled:R=null,selectableRows:k=!1,selectableRowsComponent:b,selectableRowsComponentProps:I,selectableRowsHighlight:Le=!1,selectableRowsSingle:bt=!1,selected:Vt,striped:$e=!1,draggingColumnId:z,onDragStart:W,onDragOver:K,onDragEnd:ce,onDragEnter:J,onDragLeave:ge}){const[Ae,qe]=A.useState(n);A.useEffect(()=>{qe(n)},[n]);const Pe=A.useCallback(()=>{qe(!Ae),N(!Ae,v)},[Ae,N,v]),Ze=L||o&&(f||p),cn=A.useCallback(Ve=>{Ve.target.getAttribute("data-tag")===fd&&(x(v,Ve),!r&&o&&f&&Pe())},[r,f,o,Pe,x,v]),Mt=A.useCallback(Ve=>{Ve.target.getAttribute("data-tag")===fd&&(w(v,Ve),!r&&o&&p&&Pe())},[r,p,o,Pe,w,v]),en=A.useCallback(Ve=>{_(v,Ve)},[_,v]),et=A.useCallback(Ve=>{E(v,Ve)},[E,v]),Ue=Ys(v,P),{conditionalStyle:cr,classNames:hr}=sT(v,e,["rdt_TableRow"]),si=Le&&Vt,Wi=C?cr:{},co=$e&&T%2==0;return A.createElement(A.Fragment,null,A.createElement(ED,{id:`row-${S}`,role:"row",$striped:co,$highlightOnHover:m,$pointerOnHover:!r&&Ze,$dense:i,onClick:cn,onDoubleClick:Mt,onMouseEnter:en,onMouseLeave:et,className:hr,$selected:si,$conditionalStyle:cr},k&&A.createElement(dD,{name:`select-row-${Ue}`,keyField:P,row:v,rowCount:y,selected:Vt,selectableRowsComponent:b,selectableRowsComponentProps:I,selectableRowDisabled:R,selectableRowsSingle:bt,onSelectedRow:V}),o&&!h&&A.createElement(gD,{id:Ue,expandableIcon:s,expanded:Ae,row:v,onToggled:Pe,disabled:r}),t.map(Ve=>Ve.omit?null:A.createElement(cD,{id:`cell-${Ve.id}-${Ue}`,key:`cell-${Ve.id}-${Ue}`,dataTag:Ve.ignoreRowClick||Ve.button?null:fd,column:Ve,row:v,rowIndex:T,isDragging:fa(z,Ve.id),onDragStart:W,onDragOver:K,onDragEnd:ce,onDragEnter:J,onDragLeave:ge}))),o&&Ae&&A.createElement(vD,{key:`expander-${Ue}`,data:v,extendedRowStyle:Wi,extendedClassNames:hr,ExpanderComponent:l,expanderComponentProps:u}))}const ID=se.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({$sortActive:t})=>t?"opacity: 1":"opacity: 0"};
	${({$sortDirection:t})=>t==="desc"&&"transform: rotate(180deg)"};
`,SD=({sortActive:t,sortDirection:e})=>re.createElement(ID,{$sortActive:t,$sortDirection:e},"▲"),RD=se(aT)`
	${({button:t})=>t&&"text-align: center"};
	${({theme:t,$isDragging:e})=>e&&t.headCells.draggingStyle};
`,CD=Je`
	cursor: pointer;
	span.__rdt_custom_sort_icon__ {
		i,
		svg {
			transform: 'translate3d(0, 0, 0)';
			${({$sortActive:t})=>t?"opacity: 1":"opacity: 0"};
			color: inherit;
			font-size: 18px;
			height: 18px;
			width: 18px;
			backface-visibility: hidden;
			transform-style: preserve-3d;
			transition-duration: 95ms;
			transition-property: transform;
		}

		&.asc i,
		&.asc svg {
			transform: rotate(180deg);
		}
	}

	${({$sortActive:t})=>!t&&Je`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,AD=se.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:t})=>!t&&CD};
`,PD=se.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var kD=A.memo(function({column:t,disabled:e,draggingColumnId:n,selectedColumn:r={},sortDirection:i,sortIcon:s,sortServer:o,pagination:l,paginationServer:u,persistSelectedOnSort:h,selectableRowsVisibleOnly:f,onSort:p,onDragStart:m,onDragOver:S,onDragEnd:C,onDragEnter:P,onDragLeave:x}){A.useEffect(()=>{typeof t.selector=="string"&&console.error(`Warning: ${t.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)},[]);const[w,_]=A.useState(!1),E=A.useRef(null);if(A.useEffect(()=>{E.current&&_(E.current.scrollWidth>E.current.clientWidth)},[w]),t.omit)return null;const N=()=>{if(!t.sortable&&!t.selector)return;let I=i;fa(r.id,t.id)&&(I=i===Yr.ASC?Yr.DESC:Yr.ASC),p({type:"SORT_CHANGE",sortDirection:I,selectedColumn:t,clearSelectedOnSort:l&&u&&!h||o||f})},V=I=>A.createElement(SD,{sortActive:I,sortDirection:i}),L=()=>A.createElement("span",{className:[i,"__rdt_custom_sort_icon__"].join(" ")},s),v=!(!t.sortable||!fa(r.id,t.id)),y=!t.sortable||e,T=t.sortable&&!s&&!t.right,R=t.sortable&&!s&&t.right,k=t.sortable&&s&&!t.right,b=t.sortable&&s&&t.right;return A.createElement(RD,{"data-column-id":t.id,className:"rdt_TableCol",$headCell:!0,allowOverflow:t.allowOverflow,button:t.button,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,center:t.center,width:t.width,draggable:t.reorder,$isDragging:fa(t.id,n),onDragStart:m,onDragOver:S,onDragEnd:C,onDragEnter:P,onDragLeave:x},t.name&&A.createElement(AD,{"data-column-id":t.id,"data-sort-id":t.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:y?void 0:N,onKeyPress:y?void 0:I=>{I.key==="Enter"&&N()},$sortActive:!y&&v,disabled:y},!y&&b&&L(),!y&&R&&V(v),typeof t.name=="string"?A.createElement(PD,{title:w?t.name:void 0,ref:E,"data-column-id":t.id},t.name):t.name,!y&&k&&L(),!y&&T&&V(v)))});const xD=se(uo)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function bD({headCell:t=!0,rowData:e,keyField:n,allSelected:r,mergeSelections:i,selectedRows:s,selectableRowsComponent:o,selectableRowsComponentProps:l,selectableRowDisabled:u,onSelectAllRows:h}){const f=s.length>0&&!r,p=u?e.filter(C=>!u(C)):e,m=p.length===0,S=Math.min(e.length,p.length);return A.createElement(xD,{className:"rdt_TableCol",$headCell:t,$noPadding:!0},A.createElement(lT,{name:"select-all-rows",component:o,componentOptions:l,onClick:()=>{h({type:"SELECT_ALL_ROWS",rows:p,rowCount:S,mergeSelections:i,keyField:n})},checked:r,indeterminate:f,disabled:m}))}function uT(t=Ac.AUTO){const e=typeof window=="object",[n,r]=A.useState(!1);return A.useEffect(()=>{if(e)if(t!=="auto")r(t==="rtl");else{const i=!(!window.document||!window.document.createElement),s=document.getElementsByTagName("BODY")[0],o=document.getElementsByTagName("HTML")[0],l=s.dir==="rtl"||o.dir==="rtl";r(i&&l)}},[t,e]),n}const ND=se.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:t})=>t.contextMenu.fontColor};
	font-size: ${({theme:t})=>t.contextMenu.fontSize};
	font-weight: 400;
`,OD=se.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,qv=se.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
	z-index: 1;
	align-items: center;
	justify-content: space-between;
	display: flex;
	${({$rtl:t})=>t&&"direction: rtl"};
	${({theme:t})=>t.contextMenu.style};
	${({theme:t,$visible:e})=>e&&t.contextMenu.activeStyle};
`;function DD({contextMessage:t,contextActions:e,contextComponent:n,selectedCount:r,direction:i}){const s=uT(i),o=r>0;return n?A.createElement(qv,{$visible:o},A.cloneElement(n,{selectedCount:r})):A.createElement(qv,{$visible:o,$rtl:s},A.createElement(ND,null,((l,u,h)=>{if(u===0)return null;const f=u===1?l.singular:l.plural;return h?`${u} ${l.message||""} ${f}`:`${u} ${f} ${l.message||""}`})(t,r,s)),A.createElement(OD,null,e))}const LD=se.div`
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	${({theme:t})=>t.header.style}
`,VD=se.div`
	flex: 1 0 auto;
	color: ${({theme:t})=>t.header.fontColor};
	font-size: ${({theme:t})=>t.header.fontSize};
	font-weight: 400;
`,MD=se.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,FD=({title:t,actions:e=null,contextMessage:n,contextActions:r,contextComponent:i,selectedCount:s,direction:o,showMenu:l=!0})=>A.createElement(LD,{className:"rdt_TableHeader",role:"heading","aria-level":1},A.createElement(VD,null,t),e&&A.createElement(MD,null,e),l&&A.createElement(DD,{contextMessage:n,contextActions:r,contextComponent:i,direction:o,selectedCount:s}));function cT(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}const $D={left:"flex-start",right:"flex-end",center:"center"},UD=se.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:t})=>$D[t]};
	flex-wrap: ${({$wrapContent:t})=>t?"wrap":"nowrap"};
	${({theme:t})=>t.subHeader.style}
`,jD=t=>{var{align:e="right",wrapContent:n=!0}=t,r=cT(t,["align","wrapContent"]);return A.createElement(UD,Object.assign({align:e,$wrapContent:n},r))},zD=se.div`
	display: flex;
	flex-direction: column;
`,BD=se.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({$responsive:t,$fixedHeader:e})=>t&&Je`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${e?"auto":"hidden"};
			min-height: 0;
		`};

	${({$fixedHeader:t=!1,$fixedHeaderScrollHeight:e="100vh"})=>t&&Je`
			max-height: ${e};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:t})=>t.responsiveWrapper.style};
`,Gv=se.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${t=>t.theme.progress.style};
`,HD=se.div`
	position: relative;
	width: 100%;
	${({theme:t})=>t.tableWrapper.style};
`,WD=se(uo)`
	white-space: nowrap;
	${({theme:t})=>t.expanderCell.style};
`,qD=se.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:t})=>t.noData.style};
`,GD=()=>re.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},re.createElement("path",{d:"M7 10l5 5 5-5z"}),re.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),KD=se.select`
	cursor: pointer;
	height: 24px;
	max-width: 100%;
	user-select: none;
	padding-left: 8px;
	padding-right: 24px;
	box-sizing: content-box;
	font-size: inherit;
	color: inherit;
	border: none;
	background-color: transparent;
	appearance: none;
	direction: ltr;
	flex-shrink: 0;

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`,QD=se.div`
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;

	svg {
		top: 0;
		right: 0;
		color: inherit;
		position: absolute;
		fill: currentColor;
		width: 24px;
		height: 24px;
		display: inline-block;
		user-select: none;
		pointer-events: none;
	}
`,YD=t=>{var{defaultValue:e,onChange:n}=t,r=cT(t,["defaultValue","onChange"]);return A.createElement(QD,null,A.createElement(KD,Object.assign({onChange:n,defaultValue:e},r)),A.createElement(GD,null))},U={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return re.createElement("div",null,"To add an expander pass in a component instance via ",re.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:re.createElement(()=>re.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},re.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),re.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"})),null),expanded:re.createElement(()=>re.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},re.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),re.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"})),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:re.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:re.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:Uf.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:re.createElement(()=>re.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},re.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),re.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"})),null),paginationIconLastPage:re.createElement(()=>re.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},re.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),re.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),null),paginationIconNext:re.createElement(()=>re.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},re.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),re.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),paginationIconPrevious:re.createElement(()=>re.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},re.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),re.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:Ac.AUTO,onChangePage:Ge,onChangeRowsPerPage:Ge,onRowClicked:Ge,onRowDoubleClicked:Ge,onRowMouseEnter:Ge,onRowMouseLeave:Ge,onRowExpandToggled:Ge,onSelectedRowsChange:Ge,onSort:Ge,onColumnOrderChange:Ge},XD={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},JD=se.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:t})=>t.pagination.style};
`,su=se.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:t})=>t.pagination.pageButtonsStyle};
	${({$isRTL:t})=>t&&"transform: scale(-1, -1)"};
`,ZD=se.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${oT`
    width: 100%;
    justify-content: space-around;
  `};
`,hT=se.span`
	flex-shrink: 1;
	user-select: none;
`,e2=se(hT)`
	margin: 0 24px;
`,t2=se(hT)`
	margin: 0 4px;
`;var n2=A.memo(function({rowsPerPage:t,rowCount:e,currentPage:n,direction:r=U.direction,paginationRowsPerPageOptions:i=U.paginationRowsPerPageOptions,paginationIconLastPage:s=U.paginationIconLastPage,paginationIconFirstPage:o=U.paginationIconFirstPage,paginationIconNext:l=U.paginationIconNext,paginationIconPrevious:u=U.paginationIconPrevious,paginationComponentOptions:h=U.paginationComponentOptions,onChangeRowsPerPage:f=U.onChangeRowsPerPage,onChangePage:p=U.onChangePage}){const m=(()=>{const I=typeof window=="object";function Le(){return{width:I?window.innerWidth:void 0,height:I?window.innerHeight:void 0}}const[bt,Vt]=A.useState(Le);return A.useEffect(()=>{if(!I)return()=>null;function $e(){Vt(Le())}return window.addEventListener("resize",$e),()=>window.removeEventListener("resize",$e)},[]),bt})(),S=uT(r),C=m.width&&m.width>599,P=da(e,t),x=n*t,w=x-t+1,_=n===1,E=n===P,N=Object.assign(Object.assign({},XD),h),V=n===P?`${w}-${e} ${N.rangeSeparatorText} ${e}`:`${w}-${x} ${N.rangeSeparatorText} ${e}`,L=A.useCallback(()=>p(n-1),[n,p]),v=A.useCallback(()=>p(n+1),[n,p]),y=A.useCallback(()=>p(1),[p]),T=A.useCallback(()=>p(da(e,t)),[p,e,t]),R=A.useCallback(I=>f(Number(I.target.value),n),[n,f]),k=i.map(I=>A.createElement("option",{key:I,value:I},I));N.selectAllRowsItem&&k.push(A.createElement("option",{key:-1,value:e},N.selectAllRowsItemText));const b=A.createElement(YD,{onChange:R,defaultValue:t,"aria-label":N.rowsPerPageText},k);return A.createElement(JD,{className:"rdt_Pagination"},!N.noRowsPerPage&&C&&A.createElement(A.Fragment,null,A.createElement(t2,null,N.rowsPerPageText),b),C&&A.createElement(e2,null,V),A.createElement(ZD,null,A.createElement(su,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":_,onClick:y,disabled:_,$isRTL:S},o),A.createElement(su,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":_,onClick:L,disabled:_,$isRTL:S},u),!N.noRowsPerPage&&!C&&b,A.createElement(su,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":E,onClick:v,disabled:E,$isRTL:S},l),A.createElement(su,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":E,onClick:T,disabled:E,$isRTL:S},s)))});const mi=(t,e)=>{const n=A.useRef(!0);A.useEffect(()=>{n.current?n.current=!1:t()},e)};function r2(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var i2=function(t){return function(e){return!!e&&typeof e=="object"}(t)&&!function(e){var n=Object.prototype.toString.call(e);return n==="[object RegExp]"||n==="[object Date]"||function(r){return r.$$typeof===s2}(e)}(t)},s2=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function za(t,e){return e.clone!==!1&&e.isMergeableObject(t)?Xs((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function o2(t,e,n){return t.concat(e).map(function(r){return za(r,n)})}function Kv(t){return Object.keys(t).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(n){return Object.propertyIsEnumerable.call(e,n)}):[]}(t))}function Qv(t,e){try{return e in t}catch{return!1}}function a2(t,e,n){var r={};return n.isMergeableObject(t)&&Kv(t).forEach(function(i){r[i]=za(t[i],n)}),Kv(e).forEach(function(i){(function(s,o){return Qv(s,o)&&!(Object.hasOwnProperty.call(s,o)&&Object.propertyIsEnumerable.call(s,o))})(t,i)||(Qv(t,i)&&n.isMergeableObject(e[i])?r[i]=function(s,o){if(!o.customMerge)return Xs;var l=o.customMerge(s);return typeof l=="function"?l:Xs}(i,n)(t[i],e[i],n):r[i]=za(e[i],n))}),r}function Xs(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||o2,n.isMergeableObject=n.isMergeableObject||i2,n.cloneUnlessOtherwiseSpecified=za;var r=Array.isArray(e);return r===Array.isArray(t)?r?n.arrayMerge(t,e,n):a2(t,e,n):za(e,n)}Xs.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,r){return Xs(n,r,e)},{})};var l2=r2(Xs);const Yv={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},Xv={default:Yv,light:Yv,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function u2(t,e,n,r){const[i,s]=A.useState(()=>Bv(t)),[o,l]=A.useState(""),u=A.useRef("");mi(()=>{s(Bv(t))},[t]);const h=A.useCallback(x=>{var w,_,E;const{attributes:N}=x.target,V=(w=N.getNamedItem("data-column-id"))===null||w===void 0?void 0:w.value;V&&(u.current=((E=(_=i[iu(i,V)])===null||_===void 0?void 0:_.id)===null||E===void 0?void 0:E.toString())||"",l(u.current))},[i]),f=A.useCallback(x=>{var w;const{attributes:_}=x.target,E=(w=_.getNamedItem("data-column-id"))===null||w===void 0?void 0:w.value;if(E&&u.current&&E!==u.current){const N=iu(i,u.current),V=iu(i,E),L=[...i];L[N]=i[V],L[V]=i[N],s(L),e(L)}},[e,i]),p=A.useCallback(x=>{x.preventDefault()},[]),m=A.useCallback(x=>{x.preventDefault()},[]),S=A.useCallback(x=>{x.preventDefault(),u.current="",l("")},[]),C=function(x=!1){return x?Yr.ASC:Yr.DESC}(r),P=A.useMemo(()=>i[iu(i,n==null?void 0:n.toString())]||{},[n,i]);return{tableColumns:i,draggingColumnId:o,handleDragStart:h,handleDragEnter:f,handleDragOver:p,handleDragLeave:m,handleDragEnd:S,defaultSortDirection:C,defaultSortColumn:P}}var c2=A.memo(function(t){const{data:e=U.data,columns:n=U.columns,title:r=U.title,actions:i=U.actions,keyField:s=U.keyField,striped:o=U.striped,highlightOnHover:l=U.highlightOnHover,pointerOnHover:u=U.pointerOnHover,dense:h=U.dense,selectableRows:f=U.selectableRows,selectableRowsSingle:p=U.selectableRowsSingle,selectableRowsHighlight:m=U.selectableRowsHighlight,selectableRowsNoSelectAll:S=U.selectableRowsNoSelectAll,selectableRowsVisibleOnly:C=U.selectableRowsVisibleOnly,selectableRowSelected:P=U.selectableRowSelected,selectableRowDisabled:x=U.selectableRowDisabled,selectableRowsComponent:w=U.selectableRowsComponent,selectableRowsComponentProps:_=U.selectableRowsComponentProps,onRowExpandToggled:E=U.onRowExpandToggled,onSelectedRowsChange:N=U.onSelectedRowsChange,expandableIcon:V=U.expandableIcon,onChangeRowsPerPage:L=U.onChangeRowsPerPage,onChangePage:v=U.onChangePage,paginationServer:y=U.paginationServer,paginationServerOptions:T=U.paginationServerOptions,paginationTotalRows:R=U.paginationTotalRows,paginationDefaultPage:k=U.paginationDefaultPage,paginationResetDefaultPage:b=U.paginationResetDefaultPage,paginationPerPage:I=U.paginationPerPage,paginationRowsPerPageOptions:Le=U.paginationRowsPerPageOptions,paginationIconLastPage:bt=U.paginationIconLastPage,paginationIconFirstPage:Vt=U.paginationIconFirstPage,paginationIconNext:$e=U.paginationIconNext,paginationIconPrevious:z=U.paginationIconPrevious,paginationComponent:W=U.paginationComponent,paginationComponentOptions:K=U.paginationComponentOptions,responsive:ce=U.responsive,progressPending:J=U.progressPending,progressComponent:ge=U.progressComponent,persistTableHead:Ae=U.persistTableHead,noDataComponent:qe=U.noDataComponent,disabled:Pe=U.disabled,noTableHead:Ze=U.noTableHead,noHeader:cn=U.noHeader,fixedHeader:Mt=U.fixedHeader,fixedHeaderScrollHeight:en=U.fixedHeaderScrollHeight,pagination:et=U.pagination,subHeader:Ue=U.subHeader,subHeaderAlign:cr=U.subHeaderAlign,subHeaderWrap:hr=U.subHeaderWrap,subHeaderComponent:si=U.subHeaderComponent,noContextMenu:Wi=U.noContextMenu,contextMessage:co=U.contextMessage,contextActions:Ve=U.contextActions,contextComponent:al=U.contextComponent,expandableRows:dr=U.expandableRows,onRowClicked:ho=U.onRowClicked,onRowDoubleClicked:ll=U.onRowDoubleClicked,onRowMouseEnter:qi=U.onRowMouseEnter,onRowMouseLeave:Gi=U.onRowMouseLeave,sortIcon:ul=U.sortIcon,onSort:tt=U.onSort,sortFunction:nt=U.sortFunction,sortServer:fr=U.sortServer,expandableRowsComponent:cl=U.expandableRowsComponent,expandableRowsComponentProps:hl=U.expandableRowsComponentProps,expandableRowDisabled:dl=U.expandableRowDisabled,expandableRowsHideExpander:pr=U.expandableRowsHideExpander,expandOnRowClicked:fl=U.expandOnRowClicked,expandOnRowDoubleClicked:pl=U.expandOnRowDoubleClicked,expandableRowExpanded:Ki=U.expandableRowExpanded,expandableInheritConditionalStyles:ph=U.expandableInheritConditionalStyles,defaultSortFieldId:mh=U.defaultSortFieldId,defaultSortAsc:fo=U.defaultSortAsc,clearSelectedRows:po=U.clearSelectedRows,conditionalRowStyles:ml=U.conditionalRowStyles,theme:mr=U.theme,customStyles:Qi=U.customStyles,direction:Fn=U.direction,onColumnOrderChange:$n=U.onColumnOrderChange,className:gl}=t,{tableColumns:oi,draggingColumnId:mo,handleDragStart:gr,handleDragEnter:go,handleDragOver:rt,handleDragLeave:yo,handleDragEnd:yr,defaultSortDirection:ai,defaultSortColumn:gh}=u2(n,$n,mh,fo),[{rowsPerPage:In,currentPage:it,selectedRows:vo,allSelected:yl,selectedCount:li,selectedColumn:Wt,sortDirection:Sn,toggleOnSelectedRowsChange:Yi},wt]=A.useReducer(ZO,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:gh,toggleOnSelectedRowsChange:!1,sortDirection:ai,currentPage:k,rowsPerPage:I,selectedRowsFlag:!1,contextMessage:U.contextMessage}),{persistSelectedOnSort:_o=!1,persistSelectedOnPageChange:ui=!1}=T,Xi=!(!y||!ui&&!_o),wo=et&&!J&&e.length>0,vl=W||n2,_l=A.useMemo(()=>((Y={},he="default",ct="default")=>{const Ft=Xv[he]?he:ct;return l2({table:{style:{color:(X=Xv[Ft]).text.primary,backgroundColor:X.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:X.text.primary,backgroundColor:X.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:X.background.default,minHeight:"52px"}},head:{style:{color:X.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:X.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:X.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:X.context.background,fontSize:"18px",fontWeight:400,color:X.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:X.text.primary,backgroundColor:X.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:X.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:X.selected.text,backgroundColor:X.selected.default,borderBottomColor:X.background.default}},highlightOnHoverStyle:{color:X.highlightOnHover.text,backgroundColor:X.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:X.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:X.background.default},stripedStyle:{color:X.striped.text,backgroundColor:X.striped.default}},expanderRow:{style:{color:X.text.primary,backgroundColor:X.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:X.button.default,fill:X.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:X.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:X.button.hover},"&:focus":{outline:"none",backgroundColor:X.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:X.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:X.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:X.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:X.button.default,fill:X.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:X.button.disabled,fill:X.button.disabled},"&:hover:not(:disabled)":{backgroundColor:X.button.hover},"&:focus":{outline:"none",backgroundColor:X.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:X.text.primary,backgroundColor:X.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:X.text.primary,backgroundColor:X.background.default}}},Y);var X})(Qi,mr),[Qi,mr]),yh=A.useMemo(()=>Object.assign({},Fn!=="auto"&&{dir:Fn}),[Fn]),Me=A.useMemo(()=>{if(fr)return e;if(Wt!=null&&Wt.sortFunction&&typeof Wt.sortFunction=="function"){const Y=Wt.sortFunction,he=Sn===Yr.ASC?Y:(ct,Ft)=>-1*Y(ct,Ft);return[...e].sort(he)}return function(Y,he,ct,Ft){return he?Ft&&typeof Ft=="function"?Ft(Y.slice(0),he,ct):Y.slice(0).sort((X,Ro)=>{const $t=he(X),st=he(Ro);if(ct==="asc"){if($t<st)return-1;if($t>st)return 1}if(ct==="desc"){if($t>st)return-1;if($t<st)return 1}return 0}):Y}(e,Wt==null?void 0:Wt.selector,Sn,nt)},[fr,Wt,Sn,e,nt]),vr=A.useMemo(()=>{if(et&&!y){const Y=it*In,he=Y-In;return Me.slice(he,Y)}return Me},[it,et,y,In,Me]),Eo=A.useCallback(Y=>{wt(Y)},[]),ci=A.useCallback(Y=>{wt(Y)},[]),Un=A.useCallback(Y=>{wt(Y)},[]),To=A.useCallback((Y,he)=>ho(Y,he),[ho]),vh=A.useCallback((Y,he)=>ll(Y,he),[ll]),wl=A.useCallback((Y,he)=>qi(Y,he),[qi]),El=A.useCallback((Y,he)=>Gi(Y,he),[Gi]),jn=A.useCallback(Y=>wt({type:"CHANGE_PAGE",page:Y,paginationServer:y,visibleOnly:C,persistSelectedOnPageChange:ui}),[y,ui,C]),Io=A.useCallback(Y=>{const he=da(R||vr.length,Y),ct=dd(it,he);y||jn(ct),wt({type:"CHANGE_ROWS_PER_PAGE",page:ct,rowsPerPage:Y})},[it,jn,y,R,vr.length]);if(et&&!y&&Me.length>0&&vr.length===0){const Y=da(Me.length,In),he=dd(it,Y);jn(he)}mi(()=>{N({allSelected:yl,selectedCount:li,selectedRows:vo.slice(0)})},[Yi]),mi(()=>{tt(Wt,Sn,Me.slice(0))},[Wt,Sn]),mi(()=>{v(it,R||Me.length)},[it]),mi(()=>{L(In,it)},[In]),mi(()=>{jn(k)},[k,b]),mi(()=>{if(et&&y&&R>0){const Y=da(R,In),he=dd(it,Y);it!==he&&jn(he)}},[R]),A.useEffect(()=>{wt({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:po})},[p,po]),A.useEffect(()=>{if(!P)return;const Y=Me.filter(ct=>P(ct)),he=p?Y.slice(0,1):Y;wt({type:"SELECT_MULTIPLE_ROWS",keyField:s,selectedRows:he,totalRows:Me.length,mergeSelections:Xi})},[e,P]);const So=C?vr:Me,Tl=ui||p||S;return A.createElement(QO,{theme:_l},!cn&&(!!r||!!i)&&A.createElement(FD,{title:r,actions:i,showMenu:!Wi,selectedCount:li,direction:Fn,contextActions:Ve,contextComponent:al,contextMessage:co}),Ue&&A.createElement(jD,{align:cr,wrapContent:hr},si),A.createElement(BD,Object.assign({$responsive:ce,$fixedHeader:Mt,$fixedHeaderScrollHeight:en,className:gl},yh),A.createElement(HD,null,J&&!Ae&&A.createElement(Gv,null,ge),A.createElement(tD,{disabled:Pe,className:"rdt_Table",role:"table"},!Ze&&(!!Ae||Me.length>0&&!J)&&A.createElement(rD,{className:"rdt_TableHead",role:"rowgroup",$fixedHeader:Mt},A.createElement(iD,{className:"rdt_TableHeadRow",role:"row",$dense:h},f&&(Tl?A.createElement(uo,{style:{flex:"0 0 48px"}}):A.createElement(bD,{allSelected:yl,selectedRows:vo,selectableRowsComponent:w,selectableRowsComponentProps:_,selectableRowDisabled:x,rowData:So,keyField:s,mergeSelections:Xi,onSelectAllRows:ci})),dr&&!pr&&A.createElement(WD,null),oi.map(Y=>A.createElement(kD,{key:Y.id,column:Y,selectedColumn:Wt,disabled:J||Me.length===0,pagination:et,paginationServer:y,persistSelectedOnSort:_o,selectableRowsVisibleOnly:C,sortDirection:Sn,sortIcon:ul,sortServer:fr,onSort:Eo,onDragStart:gr,onDragOver:rt,onDragEnd:yr,onDragEnter:go,onDragLeave:yo,draggingColumnId:mo})))),!Me.length&&!J&&A.createElement(qD,null,qe),J&&Ae&&A.createElement(Gv,null,ge),!J&&Me.length>0&&A.createElement(zD,{className:"rdt_TableBody",role:"rowgroup"},vr.map((Y,he)=>{const ct=Ys(Y,s),Ft=function(st=""){return typeof st!="number"&&(!st||st.length===0)}(ct)?he:ct,X=Nu(Y,vo,s),Ro=!!(dr&&Ki&&Ki(Y)),$t=!!(dr&&dl&&dl(Y));return A.createElement(TD,{id:Ft,key:Ft,keyField:s,"data-row-id":Ft,columns:oi,row:Y,rowCount:Me.length,rowIndex:he,selectableRows:f,expandableRows:dr,expandableIcon:V,highlightOnHover:l,pointerOnHover:u,dense:h,expandOnRowClicked:fl,expandOnRowDoubleClicked:pl,expandableRowsComponent:cl,expandableRowsComponentProps:hl,expandableRowsHideExpander:pr,defaultExpanderDisabled:$t,defaultExpanded:Ro,expandableInheritConditionalStyles:ph,conditionalRowStyles:ml,selected:X,selectableRowsHighlight:m,selectableRowsComponent:w,selectableRowsComponentProps:_,selectableRowDisabled:x,selectableRowsSingle:p,striped:o,onRowExpandToggled:E,onRowClicked:To,onRowDoubleClicked:vh,onRowMouseEnter:wl,onRowMouseLeave:El,onSelectedRow:Un,draggingColumnId:mo,onDragStart:gr,onDragOver:rt,onDragEnd:yr,onDragEnter:go,onDragLeave:yo})}))))),wo&&A.createElement("div",null,A.createElement(vl,{onChangePage:jn,onChangeRowsPerPage:Io,rowCount:R||Me.length,currentPage:it,rowsPerPage:In,direction:Fn,paginationRowsPerPageOptions:Le,paginationIconLastPage:bt,paginationIconFirstPage:Vt,paginationIconNext:$e,paginationIconPrevious:z,paginationComponentOptions:K})))});const h2=()=>{const[t,e]=A.useState([]),[n,r]=A.useState(!0),[i,s]=A.useState("");A.useEffect(()=>{(async()=>{try{const u=T1(L1,"rutas"),f=(await zN(u)).docs.map(p=>({id:p.id,...p.data()}));e(f)}catch(u){s("Error fetching routes: "+u.message)}finally{r(!1)}})()},[]);const o=[{name:"ID",selector:l=>l.id,sortable:!0},{name:"Nombre",selector:l=>l.name,sortable:!0},{name:"Longitud",selector:l=>l.longitude,sortable:!0},{name:"Latitud",selector:l=>l.latitude,sortable:!0},{name:"Municipio",selector:l=>l.municipality,sortable:!0},{name:"Departamento",selector:l=>l.department,sortable:!0}];return Q.jsxs("div",{className:"container mt-5",children:[Q.jsx("h2",{className:"text-center mb-4",children:"Lista de Rutas"}),n?Q.jsx("div",{className:"text-center",children:"Cargando..."}):i?Q.jsx("div",{className:"alert alert-danger",role:"alert",children:i}):Q.jsx(c2,{columns:o,data:t,pagination:!0,highlightOnHover:!0,responsive:!0})]})};function d2(){const[t,e]=A.useState(!1);console.log(t);const n=()=>{console.log("Login successful, updating state"),e(!0)};return Q.jsx(YR,{children:Q.jsx("div",{className:"App",children:Q.jsx("header",{className:"App-header",children:t?Q.jsx(GN,{onLoginSuccess:n}):Q.jsxs(Q.Fragment,{children:[Q.jsx("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Q.jsx("div",{className:"container",children:Q.jsx("div",{className:"collapse navbar-collapse",children:Q.jsxs("ul",{className:"navbar-nav",children:[Q.jsx("li",{className:"nav-item",children:Q.jsx(my,{className:"nav-link",to:"/form",children:"Formulario de Registro"})}),Q.jsx("li",{className:"nav-item",children:Q.jsx(my,{className:"nav-link",to:"/list",children:"Lista de Rutas"})})]})})})}),Q.jsxs(BR,{children:[Q.jsx(uf,{path:"/form",element:Q.jsx(KN,{})}),Q.jsx(uf,{path:"/list",element:Q.jsx(h2,{})})]})]})})})})}const f2=pd.createRoot(document.getElementById("root"));f2.render(Q.jsx(re.StrictMode,{children:Q.jsx(d2,{})}));
