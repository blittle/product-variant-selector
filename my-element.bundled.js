/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,s=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),e=new WeakMap;class r{constructor(t,s,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const i=this.t;if(s&&void 0===t){const s=void 0!==i&&1===i.length;s&&(t=e.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&e.set(i,t))}return t}toString(){return this.cssText}}const h=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(s)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:o,defineProperty:n,getOwnPropertyDescriptor:c,getOwnPropertyNames:a,getOwnPropertySymbols:l,getPrototypeOf:d}=Object,u=globalThis,p=u.trustedTypes,f=p?p.emptyScript:"",v=u.reactiveElementPolyfillSupport,g=(t,s)=>t,y={toAttribute(t,s){switch(s){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,s)=>!o(t,s),w={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=w){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),e=this.getPropertyDescriptor(t,i,s);void 0!==e&&n(this.prototype,t,e)}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=c(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t}};return{get(){return e?.call(this)},set(s){const h=e?.call(this);r.call(this,s),this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=d(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,s=[...a(t),...l(t)];for(const i of s)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)s.unshift(h(t))}else void 0!==t&&s.push(h(t));return s}static _$Eu(t,s){const i=s.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,e)=>{if(s)i.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of e){const e=document.createElement("style"),r=t.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=s.cssText,i.appendChild(e)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??b)(this[t],s))return;this.P(t,s,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[g("elementProperties")]=new Map,$[g("finalized")]=new Map,v?.({ReactiveElement:$}),(u.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const m=globalThis,S=m.trustedTypes,x=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+_,k=`<${A}>`,C=document,U=()=>C.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,T="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,N=/>/g,z=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,I=/"/g,L=/^(?:script|style|textarea|title)$/i,B=(t=>(s,...i)=>({_$litType$:t,strings:s,values:i}))(1),V=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),D=new WeakMap,H=C.createTreeWalker(C,129);function q(t,s){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(s):s}const J=(t,s)=>{const i=t.length-1,e=[];let r,h=2===s?"<svg>":"",o=O;for(let s=0;s<i;s++){const i=t[s];let n,c,a=-1,l=0;for(;l<i.length&&(o.lastIndex=l,c=o.exec(i),null!==c);)l=o.lastIndex,o===O?"!--"===c[1]?o=j:void 0!==c[1]?o=N:void 0!==c[2]?(L.test(c[2])&&(r=RegExp("</"+c[2],"g")),o=z):void 0!==c[3]&&(o=z):o===z?">"===c[0]?(o=r??O,a=-1):void 0===c[1]?a=-2:(a=o.lastIndex-c[2].length,n=c[1],o=void 0===c[3]?z:'"'===c[3]?I:R):o===I||o===R?o=z:o===j||o===N?o=O:(o=z,r=void 0);const d=o===z&&t[s+1].startsWith("/>")?" ":"";h+=o===O?i+k:a>=0?(e.push(n),i.slice(0,a)+E+i.slice(a)+_+d):i+_+(-2===a?s:d)}return[q(t,h+(t[i]||"<?>")+(2===s?"</svg>":"")),e]};class Z{constructor({strings:t,_$litType$:s},i){let e;this.parts=[];let r=0,h=0;const o=t.length-1,n=this.parts,[c,a]=J(t,s);if(this.el=Z.createElement(c,i),H.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(e=H.nextNode())&&n.length<o;){if(1===e.nodeType){if(e.hasAttributes())for(const t of e.getAttributeNames())if(t.endsWith(E)){const s=a[h++],i=e.getAttribute(t).split(_),o=/([.?@])?(.*)/.exec(s);n.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?X:"?"===o[1]?Y:"@"===o[1]?tt:Q}),e.removeAttribute(t)}else t.startsWith(_)&&(n.push({type:6,index:r}),e.removeAttribute(t));if(L.test(e.tagName)){const t=e.textContent.split(_),s=t.length-1;if(s>0){e.textContent=S?S.emptyScript:"";for(let i=0;i<s;i++)e.append(t[i],U()),H.nextNode(),n.push({type:2,index:++r});e.append(t[s],U())}}}else if(8===e.nodeType)if(e.data===A)n.push({type:2,index:r});else{let t=-1;for(;-1!==(t=e.data.indexOf(_,t+1));)n.push({type:7,index:r}),t+=_.length-1}r++}}static createElement(t,s){const i=C.createElement("template");return i.innerHTML=t,i}}function K(t,s,i=t,e){if(s===V)return s;let r=void 0!==e?i._$Co?.[e]:i._$Cl;const h=P(s)?void 0:s._$litDirective$;return r?.constructor!==h&&(r?._$AO?.(!1),void 0===h?r=void 0:(r=new h(t),r._$AT(t,i,e)),void 0!==e?(i._$Co??=[])[e]=r:i._$Cl=r),void 0!==r&&(s=K(t,r._$AS(t,s.values),r,e)),s}class F{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:i}=this._$AD,e=(t?.creationScope??C).importNode(s,!0);H.currentNode=e;let r=H.nextNode(),h=0,o=0,n=i[0];for(;void 0!==n;){if(h===n.index){let s;2===n.type?s=new G(r,r.nextSibling,this,t):1===n.type?s=new n.ctor(r,n.name,n.strings,this,t):6===n.type&&(s=new st(r,this,t)),this._$AV.push(s),n=i[++o]}h!==n?.index&&(r=H.nextNode(),h++)}return H.currentNode=C,e}p(t){let s=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,i,e){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return void 0!==s&&11===t?.nodeType&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=K(this,t,s),P(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==W&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){const{values:s,_$litType$:i}=t,e="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===e)this._$AH.p(s);else{const t=new F(e,this),i=t.u(this.options);t.p(s),this.T(i),this._$AH=t}}_$AC(t){let s=D.get(t.strings);return void 0===s&&D.set(t.strings,s=new Z(t)),s}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,e=0;for(const r of t)e===s.length?s.push(i=new G(this.S(U()),this.S(U()),this,this.options)):i=s[e],i._$AI(r),e++;e<s.length&&(this._$AR(i&&i._$AB.nextSibling,e),s.length=e)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,i,e,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=s,this._$AM=e,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,s=this,i,e){const r=this.strings;let h=!1;if(void 0===r)t=K(this,t,s,0),h=!P(t)||t!==this._$AH&&t!==V,h&&(this._$AH=t);else{const e=t;let o,n;for(t=r[0],o=0;o<r.length-1;o++)n=K(this,e[i+o],s,o),n===V&&(n=this._$AH[o]),h||=!P(n)||n!==this._$AH[o],n===W?t=W:t!==W&&(t+=(n??"")+r[o+1]),this._$AH[o]=n}h&&!e&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class Y extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class tt extends Q{constructor(t,s,i,e,r){super(t,s,i,e,r),this.type=5}_$AI(t,s=this){if((t=K(this,t,s,0)??W)===V)return;const i=this._$AH,e=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==W&&(i===W||e);e&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const it=m.litHtmlPolyfillSupport;it?.(Z,G),(m.litHtmlVersions??=[]).push("3.1.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class et extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,s,i)=>{const e=i?.renderBefore??s;let r=e._$litPart$;if(void 0===r){const t=i?.renderBefore??null;e._$litPart$=r=new G(s.insertBefore(U(),t),t,void 0,i??{})}return r._$AI(t),r})(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}et._$litElement$=!0,et.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:et});const rt=globalThis.litElementPolyfillSupport;rt?.({LitElement:et}),(globalThis.litElementVersions??=[]).push("4.0.5");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht=Symbol.for(""),ot=t=>{if(t?.r===ht)return t?._$litStatic$},nt=new Map,ct=(t=>(s,...i)=>{const e=i.length;let r,h;const o=[],n=[];let c,a=0,l=!1;for(;a<e;){for(c=s[a];a<e&&void 0!==(h=i[a],r=ot(h));)c+=r+s[++a],l=!0;a!==e&&n.push(h),o.push(c),a++}if(a===e&&o.push(s[e]),l){const t=o.join("$$lit$$");void 0===(s=nt.get(t))&&(o.raw=o,nt.set(t,s=o)),i=n}return t(s,...i)})(B),at=Symbol();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class lt{get taskComplete(){return this.t||(1===this.status?this.t=new Promise(((t,s)=>{this.i=t,this.o=s})):3===this.status?this.t=Promise.reject(this.h):this.t=Promise.resolve(this.l)),this.t}constructor(t,s,i){this.u=0,this.status=0,(this.p=t).addController(this);const e="object"==typeof s?s:{task:s,args:i};this._=e.task,this.v=e.args,this.j=e.argsEqual??dt,this.m=e.onComplete,this.g=e.onError,this.autoRun=e.autoRun??!0,"initialValue"in e&&(this.l=e.initialValue,this.status=2,this.k=this.A?.())}hostUpdate(){!0===this.autoRun&&this.O()}hostUpdated(){"afterUpdate"===this.autoRun&&this.O()}A(){if(void 0===this.v)return;const t=this.v();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async O(){const t=this.A(),s=this.k;this.k=t,t===s||void 0===t||void 0!==s&&this.j(s,t)||await this.run(t)}async run(t){let s,i;t??=this.A(),this.k=t,1===this.status?this.T?.abort():(this.t=void 0,this.i=void 0,this.o=void 0),this.status=1,"afterUpdate"===this.autoRun?queueMicrotask((()=>this.p.requestUpdate())):this.p.requestUpdate();const e=++this.u;this.T=new AbortController;let r=!1;try{s=await this._(t,{signal:this.T.signal})}catch(t){r=!0,i=t}if(this.u===e){if(s===at)this.status=0;else{if(!1===r){try{this.m?.(s)}catch{}this.status=2,this.i?.(s)}else{try{this.g?.(i)}catch{}this.status=3,this.o?.(i)}this.l=s,this.h=i}this.p.requestUpdate()}}abort(t){1===this.status&&this.T?.abort(t)}get value(){return this.l}get error(){return this.h}render(t){switch(this.status){case 0:return t.initial?.();case 1:return t.pending?.();case 2:return t.complete?.(this.value);case 3:return t.error?.(this.error);default:throw Error("Unexpected status: "+this.status)}}}const dt=(t,s)=>t===s||t.length===s.length&&t.every(((t,i)=>!b(t,s[i])))
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ut={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},pt=(t=ut,s,i)=>{const{kind:e,metadata:r}=i;let h=globalThis.litPropertyMetadata.get(r);if(void 0===h&&globalThis.litPropertyMetadata.set(r,h=new Map),h.set(i.name,t),"accessor"===e){const{name:e}=i;return{set(i){const r=s.get.call(this);s.set.call(this,i),this.requestUpdate(e,r,t)},init(s){return void 0!==s&&this.P(e,void 0,t),s}}}if("setter"===e){const{name:e}=i;return function(i){const r=this[e];s.call(this,i),this.requestUpdate(e,r,t)}}throw Error("Unsupported decorator location: "+e)};function ft(t){return(s,i)=>"object"==typeof i?pt(t,s,i):((t,s,i)=>{const e=s.hasOwnProperty(i);return s.constructor.createProperty(i,e?{...t,wrapped:!0}:t),e?Object.getOwnPropertyDescriptor(s,i):void 0})(t,s,i)}var vt=function(t,s,i,e){for(var r,h=arguments.length,o=h<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e,n=t.length-1;n>=0;n--)(r=t[n])&&(o=(h<3?r(o):h>3?r(s,i,o):r(s,i))||o);return h>3&&o&&Object.defineProperty(s,i,o),o};let gt=class extends et{constructor(){super(...arguments),this.imageHeight=250,this.imageWidth=200,this._productTask=new lt(this,{task:async([t],{signal:s})=>{if(!t)throw new Error("productUrl is not set");const i=await fetch(t,{signal:s});if(!i.ok)throw new Error("Error fetching product data: "+i.status);return(await i.json()).product},args:()=>[this.productUrl]})}render(){return this.productUrl&&(this.shopPayUrl=`${new URL(this.productUrl).origin}/cart/`),this._productTask.render({pending:()=>B`<p>Loading product...</p>`,complete:t=>B`
        <div class="wrapper">
          ${this.renderImage(t)}
          <div>
            <h1>${t.title}</h1>
            ${ct`<p class="description">${(t=>({_$litStatic$:t,r:ht}))(t.body_html)}</p>`}
            <p>${this.renderProductOptions(t)}</p>
            <p>${this.renderBuyNow(t)}</p>
          </div>
        </div>
      `,error:t=>(console.error(`Error fetching product "${this.productUrl}"\n${t}`),B`<span class="error">${t}</span>`)})}renderImage(t){return B`<img
      width="${this.imageWidth}"
      height="${this.imageHeight}"
      src="${t.image.src}&width=${this.imageWidth}&height=${this.imageHeight}&crop=center"
      alt="${t.image.alt}"
    />`}renderBuyNow(t){const s=t.variants;return 1===s.length?B`<a href="${this.shopPayUrl}${s[0].id}:1?payment=shop_pay">Buy now</button>`:this.selectedVariantId?B`<a href="${this.shopPayUrl}${this.selectedVariantId}:1?payment=shop_pay">Buy now</button>`:null}renderProductOptions(t){const s=t.variants;return s.length>=1?B`<select @change="${this._setSelectedVariant}">
        <option value="">Select a variant</option>
        ${s.map((t=>B`<option value="${t.id}">${t.title}</option>`))}
      </select>`:null}_setSelectedVariant(t){this.selectedVariantId=parseInt(t.target.value,10)}};gt.styles=((t,...s)=>{const e=1===t.length?t[0]:s.reduce(((s,i,e)=>s+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[e+1]),t[0]);return new r(e,t,i)})`
    :host {
      display: block;
      border: solid 1px #777;
      border-radius: 8px;
      padding: 16px;
      font-family: Sans-serif;
      height: 280px;
      width: 460px;
    }

    h1 {
      font-size: 18px;
    }

    .wrapper {
      display: flex;
      gap: 24px;
    }

    a:link,
    a:visited {
      background-color: #5a31f4;
      color: white;
      padding: 14px 25px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      border-radius: 4px;
    }

    a:hover,
    a:active {
      background-color: #3c0def;
      cursor: pointer;
    }

    select {
      font-size: 18px;
      width: 100%;
    }

    a {
      width: 100%;
      box-sizing: border-box;
    }

    .description {
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
    }
  `,vt([ft()],gt.prototype,"imageHeight",void 0),vt([ft()],gt.prototype,"imageWidth",void 0),vt([ft()],gt.prototype,"productUrl",void 0),vt([ft({type:Number})],gt.prototype,"selectedVariantId",void 0),gt=vt([(t=>(s,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,s)})):customElements.define(t,s)})
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */("product-variant-selector")],gt);export{gt as ProductVariantSelector};
