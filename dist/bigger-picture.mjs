var t,e;function n(){}const i=t=>t;function o(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function s(){return Object.create(null)}function l(t){t.forEach(r)}function c(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function d(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function f(t,e){return t!=t?e==e:t!==e}function p(t,e,i){t.$$.on_destroy.push(((t,...e)=>{if(null==t)return n;const i=t.subscribe(...e);return i.unsubscribe?()=>i.unsubscribe():i})(e,i))}function m(t,e,n){return t.set(n),e}function h(t){return t&&c(t.destroy)?t.destroy:n}const g="undefined"!=typeof window;let $=g?()=>window.performance.now():()=>Date.now(),y=g?t=>requestAnimationFrame(t):n;const b=new Set;function v(t){b.forEach((e=>{e.c(t)||(b.delete(e),e.f())})),0!==b.size&&y(v)}function x(t){let e;return 0===b.size&&y(v),{promise:new Promise((n=>{b.add(e={c:t,f:n})})),abort(){b.delete(e)}}}function w(t,e){t.appendChild(e)}function _(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function k(t){const e=E("style");return((t,e)=>{w(t.head||t,e)})(_(t),e),e.sheet}function I(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode.removeChild(t)}function E(t){return document.createElement(t)}function D(t){return document.createTextNode(t)}function H(){return D(" ")}function S(){return D("")}function A(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function z(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function N(t,e){t.wholeText!==(e=""+e)&&(t.data=e)}function M(t,e,n,i){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function T(t,e,n){t.classList[n?"add":"remove"](e)}class R{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.e=E(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;this.n.length>e;e+=1)I(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(C)}}const L=new Map;let O,W=0;function Y(t,e,n,i,o,r,s,l=0){const c=16.666/i;let u="{\n";for(let t=0;1>=t;t+=c){const i=e+(n-e)*r(t);u+=100*t+`%{${s(i,1-i)}}\n`}const a=u+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${(t=>{let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0})(a)}_${l}`,f=_(t),{stylesheet:p,rules:m}=L.get(f)||((t,e)=>{const n={stylesheet:k(e),rules:{}};return L.set(t,n),n})(f,t);m[d]||(m[d]=1,p.insertRule(`@keyframes ${d} ${a}`,p.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?h+", ":""}${d} ${i}ms linear ${o}ms 1 both`,W+=1,d}function P(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?t=>0>t.indexOf(e):t=>-1===t.indexOf("__svelte")),o=n.length-i.length;o&&(t.style.animation=i.join(", "),W-=o,W||y((()=>{W||(L.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),L.clear())})))}function j(t){O=t}const q=[],X=[],B=[],U=[],F=Promise.resolve();let J=0;function K(t){B.push(t)}const G=new Set;let Q,V=0;function Z(){const t=O;do{for(;q.length>V;){const t=q[V];V++,j(t),tt(t.$$)}for(j(null),q.length=0,V=0;X.length;)X.pop()();for(let t=0;B.length>t;t+=1){const e=B[t];G.has(e)||(G.add(e),e())}B.length=0}while(q.length);for(;U.length;)U.pop()();J=0,G.clear(),j(t)}function tt(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}function et(){return Q||(Q=Promise.resolve(),Q.then((()=>{Q=null}))),Q}function nt(t,e,n){t.dispatchEvent(((t,e,n=0)=>{const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,0,e),i})(`${e?"intro":"outro"}${n}`))}const it=new Set;let ot;function rt(){ot={r:0,c:[],p:ot}}function st(){ot.r||l(ot.c),ot=ot.p}function lt(t,e){t&&t.i&&(it.delete(t),t.i(e))}function ct(t,e,n,i){if(t&&t.o){if(it.has(t))return;it.add(t),ot.c.push((()=>{it.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}}const ut={duration:0};function at(t,e,o){let r,s,l=e(t,o),u=0,a=0;function d(){r&&P(t,r)}function f(){const{delay:e=0,duration:o=300,easing:c=i,tick:f=n,css:p}=l||ut;p&&(r=Y(t,0,1,o,e,c,p,a++)),f(0,1);const m=$()+e,h=m+o;s&&s.abort(),u=1,K((()=>nt(t,1,"start"))),s=x((e=>{if(u){if(e>=h)return f(1,0),nt(t,1,"end"),d(),u=0;if(e>=m){const t=c((e-m)/o);f(t,1-t)}}return u}))}let p=0;return{start(){p||(p=1,P(t),c(l)?(l=l(),et().then(f)):f())},invalidate(){p=0},end(){u&&(d(),u=0)}}}function dt(t,e,o){let r,s=e(t,o),u=1;const a=ot;function d(){const{delay:e=0,duration:o=300,easing:c=i,tick:d=n,css:f}=s||ut;f&&(r=Y(t,1,0,o,e,c,f));const p=$()+e,m=p+o;K((()=>nt(t,0,"start"))),x((e=>{if(u){if(e>=m)return d(0,1),nt(t,0,"end"),--a.r||l(a.c),0;if(e>=p){const t=c((e-p)/o);d(1-t,t)}}return u}))}return a.r+=1,c(s)?et().then((()=>{s=s(),d()})):d(),{end(e){e&&s.tick&&s.tick(1,0),u&&(r&&P(t,r),u=0)}}}function ft(t,e,o,r){let s=e(t,o),u=r?0:1,a=null,d=null,f=null;function p(){f&&P(t,f)}function m(t,e){const n=t.b-u;return{a:u,b:t.b,d:n,duration:e*=Math.abs(n),start:t.start,end:t.start+e,group:t.group}}function h(e){const{delay:o=0,duration:r=300,easing:c=i,tick:h=n,css:g}=s||ut,y={start:$()+o,b:e};e||(y.group=ot,ot.r+=1),a||d?d=y:(g&&(p(),f=Y(t,u,e,r,o,c,g)),e&&h(0,1),a=m(y,r),K((()=>nt(t,e,"start"))),x((e=>(d&&e>d.start&&(a=m(d,r),d=null,nt(t,a.b,"start"),g&&(p(),f=Y(t,u,a.b,a.duration,0,c,s.css))),a&&(a.end>e?a.start>e||(u=a.a+a.d*c((e-a.start)/a.duration),h(u,1-u)):(h(u=a.b,1-u),nt(t,a.b,"end"),d||(a.b?p():--a.group.r||l(a.group.c)),a=null)),!(!a&&!d)))))}return{run(t){c(s)?et().then((()=>{s=s(),h(t)})):h(t)},end(){p(),a=d=null}}}const pt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function mt(t){t&&t.c()}function ht(t,e,n,i){const{fragment:o,on_mount:s,on_destroy:u,after_update:a}=t.$$;o&&o.m(e,n),i||K((()=>{const e=s.map(r).filter(c);u?u.push(...e):l(e),t.$$.on_mount=[]})),a.forEach(K)}function gt(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $t(t,e,i,o,r,c,u,a=[-1]){const d=O;j(t);const f=t.$$={fragment:null,ctx:null,props:c,update:n,not_equal:r,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:s(),dirty:a,skip_bound:0,root:e.target||d.$$.root};u&&u(f.root);let p=0;f.ctx=i?i(t,e.props||{},((e,n,...i)=>{const o=i.length?i[0]:n;return f.ctx&&r(f.ctx[e],f.ctx[e]=o)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](o),p&&function(t,e){-1===t.$$.dirty[0]&&(q.push(t),J||(J=1,F.then(Z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],f.update(),p=1,l(f.before_update),f.fragment=o?o(f.ctx):0,e.target&&(f.fragment&&f.fragment.c(),e.intro&&lt(t.$$.fragment),ht(t,e.target,e.anchor,e.customElement),Z()),j(d)}class yt{$destroy(){gt(this,1),this.$destroy=n}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&0!==Object.keys(t).length&&(this.$$.skip_bound=1,this.$$set(t),this.$$.skip_bound=0)}}function bt(t){const e=t-1;return e*e*e+1}function vt(t,{delay:e=0,duration:n=400,easing:o=i}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:o,css:t=>"opacity: "+t*r}}function xt(t,{delay:e=0,duration:n=400,easing:i=bt,x:o=0,y:r=0,opacity:s=0}={}){const l=getComputedStyle(t),c=+l.opacity,u="none"===l.transform?"":l.transform,a=c*(1-s);return{delay:e,duration:n,easing:i,css:(t,e)=>`\n\t\t\ttransform: ${u} translate(${(1-t)*o}px, ${(1-t)*r}px);\n\t\t\topacity: ${c-a*e}`}}const wt=[];function _t(t,e=n){let i;const o=new Set;function r(e){if(u(t,e)&&(t=e,i)){const e=!wt.length;for(const e of o)e[1](),wt.push(e,t);if(e){for(let t=0;wt.length>t;t+=2)wt[t][0](wt[t+1]);wt.length=0}}}return{set:r,update(e){r(e(t))},subscribe(s,l=n){const c=[s,l];return o.add(c),1===o.size&&(i=e(r)||n),s(t),()=>{o.delete(c),0===o.size&&(i(),i=null)}}}}function kt(t,e){if(t===e||t!=t)return()=>t;const n=typeof t;if(Array.isArray(t)){const n=e.map(((e,n)=>kt(t[n],e)));return t=>n.map((e=>e(t)))}if("number"===n){const n=e-t;return e=>t+e*n}}function It(t,e={}){const n=_t(t);let r,s=t;function l(l,c){if(null==t)return n.set(t=l),Promise.resolve();s=l;let u=r,a=0,{delay:d=0,duration:f=400,easing:p=i,interpolate:m=kt}=o(o({},e),c);if(0===f)return u&&(u.abort(),u=null),n.set(t=s),Promise.resolve();const h=$()+d;let g;return r=x((e=>{if(h>e)return 1;a||(g=m(t,l),"function"==typeof f&&(f=f(t,l)),a=1),u&&(u.abort(),u=null);const i=e-h;return i>f?(n.set(t=l),0):(n.set(t=g(p(i/f))),1)})),r.promise}return{set:l,update:(e,n)=>l(e(s,t),n),subscribe:n.subscribe}}const Ct=_t(0),Et=_t(0);function Dt(t){let e,n,i,o,r=!t[2]&&Ht();return{c(){e=E("div"),r&&r.c(),z(e,"class","bp-load"),M(e,"background-image","url("+t[0]+")")},m(t,n){I(t,e,n),r&&r.m(e,null),o=1},p(n,i){(t=n)[2]?r&&(r.d(1),r=null):r||(r=Ht(),r.c(),r.m(e,null)),(!o||1&i)&&M(e,"background-image","url("+t[0]+")")},i(r){o||(K((()=>{i&&i.end(1),n=at(e,vt,{duration:t[2]?300:0}),n.start()})),o=1)},o(t){n&&n.invalidate(),t&&(i=dt(e,vt,{duration:200})),o=0},d(t){t&&C(e),r&&r.d(),t&&i&&i.end()}}}function Ht(t){let e,n,i;return{c(){e=E("span"),n=H(),i=E("span"),z(e,"class","bp-bar"),z(i,"class","bp-o")},m(t,o){I(t,e,o),I(t,n,o),I(t,i,o)},d(t){t&&C(e),t&&C(n),t&&C(i)}}}function St(t){let e,n=(!t[1]||t[2])&&Dt(t);return{c(){n&&n.c(),e=S()},m(t,i){n&&n.m(t,i),I(t,e,i)},p(t,[i]){!t[1]||t[2]?n?(n.p(t,i),6&i&&lt(n,1)):(n=Dt(t),n.c(),lt(n,1),n.m(e.parentNode,e)):n&&(rt(),ct(n,1,1,(()=>{n=null})),st())},i(t){lt(n)},o(t){ct(n)},d(t){n&&n.d(t),t&&C(e)}}}function At(t,e,n){let i;p(t,Ct,(t=>n(2,i=t)));let{thumb:o}=e,{loaded:r}=e;return t.$$set=t=>{"thumb"in t&&n(0,o=t.thumb),"loaded"in t&&n(1,r=t.loaded)},[o,r,i]}class zt extends yt{constructor(t){super(),$t(this,t,At,St,u,{thumb:0,loaded:1})}}function Nt(t){let e,i,o,r;return{c(){e=E("img"),d(e.src,i=t[5])||z(e,"src",i),z(e,"alt",t[7])},m(t,n){I(t,e,n),r=1},p:n,i(t){r||(o&&o.end(1),r=1)},o(t){o=dt(e,vt,{}),r=0},d(t){t&&C(e),t&&o&&o.end()}}}function Mt(t){let e,n,i,o,r,s,c,u;o=new zt({props:{thumb:t[6],loaded:t[2]}});let a=t[2]&&Nt(t);return{c(){e=E("div"),n=E("div"),i=E("div"),mt(o.$$.fragment),r=H(),a&&a.c(),M(i,"background-image","url("+t[6]+")"),M(i,"transform","translate3d("+t[4][0]+"px, "+t[4][1]+"px, 0px)"),z(n,"class","bp-item bp-img"),M(n,"width",t[0][0]+"px"),M(n,"height",t[0][1]+"px"),z(e,"class","bp-img-wrap"),T(e,"dragging",t[3])},m(l,d){I(l,e,d),w(e,n),w(n,i),ht(o,i,null),w(i,r),a&&a.m(i,null),t[23](e),s=1,c||(u=[A(window,"resize",t[22]),h(t[15].call(null,n)),A(e,"wheel",t[10]),A(e,"pointerdown",t[11]),A(e,"pointermove",t[12]),A(e,"pointerup",t[13]),A(e,"pointercancel",t[13])],c=1)},p(t,r){const l={};4&r[0]&&(l.loaded=t[2]),o.$set(l),t[2]?a?(a.p(t,r),4&r[0]&&lt(a,1)):(a=Nt(t),a.c(),lt(a,1),a.m(i,null)):a&&(rt(),ct(a,1,1,(()=>{a=null})),st()),(!s||16&r[0])&&M(i,"transform","translate3d("+t[4][0]+"px, "+t[4][1]+"px, 0px)"),(!s||1&r[0])&&M(n,"width",t[0][0]+"px"),(!s||1&r[0])&&M(n,"height",t[0][1]+"px"),8&r[0]&&T(e,"dragging",t[3])},i(t){s||(lt(o.$$.fragment,t),lt(a),s=1)},o(t){ct(o.$$.fragment,t),ct(a),s=0},d(n){n&&C(e),gt(o),a&&a.d(),t[23](null),c=0,l(u)}}}function Tt(t,e,n){let i,o,r,s;p(t,Et,(t=>n(35,r=t))),p(t,Ct,(t=>n(21,s=t)));let l,c,u,a,d,f,h,g,$,y,b,{stuff:v}=e,{containerWidth:x}=e,{containerHeight:w}=e,{smallScreen:_}=e,{activeItem:k,calculateDimensions:I,loadImage:C,preloadNext:E,opts:D,prev:H,next:S,close:A,toggleControls:z}=v,{img:N,thumb:M,alt:T,width:R,height:L}=k,{inline:O}=D,W=+R,Y=+L,P=I(W,Y),j=[],q=[],B=0;const U=It(P,{easing:bt});p(t,U,(t=>n(0,o=t)));const F=It([0,0],{easing:bt});p(t,F,(t=>n(4,i=t)));const J=([t,e])=>{let n=(o[0]-x)/2,i=(o[1]-w)/2;return 0>n?t=0:t>n?_?(t=d?n+(t-n)/10:n)>n+20&&(a=1,H()):t=n:-1*n>t&&(_?-1*n-20>(t=d?-1*n-(-1*n-t)/10:-1*n)&&(a=1,S()):t=-1*n),0>i?e=0:e>i?e=i:-1*i>e&&(e=-1*i),[t,e]},K=(t,e=5)=>{let n=o[0]+o[0]*e,r=o[1]+o[1]*e;if(e>0&&n>W)n=W,r=Y;else if(0>e){let t=I(W,Y);if(t[0]>n)return m(U,o=t,o),void m(F,i=[0,0],i)}if(m(U,o=[n,r],o),1>e)return void m(F,i=J(i),i);let{x:s,y:l,width:c,height:u}=t.target.getBoundingClientRect(),a=t.clientX-s-c/2,d=t.clientY-l-u/2;s=-1*a*(n/c)+a,l=-1*d*(r/u)+d,m(F,i=J([s,l]),i)},G=t=>[t.clientX,t.clientY],Q=()=>{n(20,P=I(W,Y)),_||(m(U,o=P,o),m(F,i=[0,0],i))};return t.$$set=t=>{"stuff"in t&&n(16,v=t.stuff),"containerWidth"in t&&n(17,x=t.containerWidth),"containerHeight"in t&&n(18,w=t.containerHeight),"smallScreen"in t&&n(19,_=t.smallScreen)},t.$$.update=()=>{1048577&t.$$.dirty[0]&&m(Et,r=o[0]>P[0],r),2097152&t.$$.dirty[0]&&s&&!D.intro&&m(F,i=[0,0],i)},[o,l,c,d,i,N,M,T,U,F,t=>{O&&!r||(t.preventDefault(),K(t,0>t.deltaY?.2:-.2))},t=>{if(2!==t.button){t.preventDefault(),n(3,d=1),j.push(t);let[e,o]=G(t);h=e,g=o,$=i[0],y=i[1]}},t=>{if(j.length>1)return u=1,n(3,d=0),(t=>{j=j.map((e=>e.pointerId==t.pointerId?t:e));let[e,n]=j,i=Math.hypot(e.clientX-n.clientX,e.clientY-n.clientY);B||(B=i),K(t,-.02*(B-i)),B=i})(t);if(a||!d)return;let[e,i]=G(t);q.push({x:e,y:i}),e-=h,i-=g,r||(e>40&&(H(),a=1),-40>e&&(S(),a=1),-90>i&&!O&&(A(),a=1)),f=Math.hypot(e,i)>10,r&&f&&F.set(J([$+e,y+i]),{duration:0})},t=>{if(j=j.filter((e=>e.pointerId!=t.pointerId)),u)return u=j.length?1:0,void(B=0);if(!a&&d){if(t.target===l&&!O)return A();if(n(3,d=0),_?f||(b?(clearTimeout(b),K(t,r?-5:5),b=0):b=setTimeout((()=>{z(),b=0}),250)):r?f||K(t,-5):3>q.length&&!r&&K(t),f){let t;q=q.slice(-3);let e=q[1].x-q[2].x,n=q[1].y-q[2].y;Math.hypot(e,n)>5?(e=q[0].x-q[2].x,n=q[0].y-q[2].y,t=[i[0]-5*e,i[1]-5*n]):t=i,m(F,i=J(t),i)}f=0,q=[]}},Q,()=>{C(k).then((()=>{n(2,c=1),E()}))},v,x,w,_,P,s,()=>setTimeout(Q,0),t=>{X[t?"unshift":"push"]((()=>{l=t,n(1,l)}))}]}class Rt extends yt{constructor(t){super(),$t(this,t,Tt,Mt,u,{stuff:16,containerWidth:17,containerHeight:18,smallScreen:19},null,[-1,-1])}}function Lt(t){let e,n,i,o,r,s,c,u;return r=new zt({props:{thumb:t[3],loaded:t[0]}}),{c(){e=E("div"),n=E("iframe"),o=H(),mt(r.$$.fragment),z(n,"allow","autoplay; fullscreen"),d(n.src,i=t[2])||z(n,"src",i),z(n,"title",t[4]),z(e,"class","bp-item bp-if"),M(e,"width",t[1][0]+"px"),M(e,"height",t[1][1]+"px")},m(i,l){I(i,e,l),w(e,n),w(e,o),ht(r,e,null),s=1,c||(u=[A(window,"resize",t[5]),A(n,"load",t[8])],c=1)},p(t,[n]){const i={};1&n&&(i.loaded=t[0]),r.$set(i),(!s||2&n)&&M(e,"width",t[1][0]+"px"),(!s||2&n)&&M(e,"height",t[1][1]+"px")},i(t){s||(lt(r.$$.fragment,t),s=1)},o(t){ct(r.$$.fragment,t),s=0},d(t){t&&C(e),gt(r),c=0,l(u)}}}function Ot(t,e,n){let i,o,{activeItem:r}=e,{calculateDimensions:s}=e,{iframe:l,thumb:c,title:u}=r;const a=()=>{n(1,o=s(r.width,r.height))};return a(),t.$$set=t=>{"activeItem"in t&&n(6,r=t.activeItem),"calculateDimensions"in t&&n(7,s=t.calculateDimensions)},[i,o,l,c,u,a,r,s,()=>n(0,i=1)]}class Wt extends yt{constructor(t){super(),$t(this,t,Ot,Lt,u,{activeItem:6,calculateDimensions:7})}}function Yt(t){let e,n,i,o,r,s,c,u=t[2]+t[3]+"";return o=new zt({props:{thumb:t[5],loaded:t[1]}}),{c(){e=E("div"),n=E("video"),i=H(),mt(o.$$.fragment),n.playsInline=1,n.controls=1,n.autoplay=1,M(n,"width",t[4][0]+"px"),M(n,"height",t[4][1]+"px"),z(e,"class","bp-item bp-vid")},m(l,a){I(l,e,a),w(e,n),n.innerHTML=u,w(e,i),ht(o,e,null),r=1,s||(c=[A(window,"resize",t[9]),A(n,"canplay",t[10])],s=1)},p(t,[e]){(!r||12&e)&&u!==(u=t[2]+t[3]+"")&&(n.innerHTML=u),(!r||16&e)&&M(n,"width",t[4][0]+"px"),(!r||16&e)&&M(n,"height",t[4][1]+"px");const i={};2&e&&(i.loaded=t[1]),o.$set(i)},i(t){r||(lt(o.$$.fragment,t),r=1)},o(t){ct(o.$$.fragment,t),r=0},d(t){t&&C(e),gt(o),s=0,l(c)}}}function Pt(t,e,n){let i,{activeItem:o}=e,{calculateDimensions:r}=e,{video:s,thumb:l,tracks:c=[],width:u,height:a}=o;s=Array.isArray(s)?s:s.split(", "),c=Array.isArray(c)?c:JSON.parse(c),s=s.map((t=>`<source src="${t}" type="video/${t.match(/.(\w+)$/)[1]}">`)),c=c.map((t=>`<track${Object.keys(t).reduce(((e,n)=>e+` ${n}="${t[n]}"`),"")}>`));let d=r(u,a);return t.$$set=t=>{"activeItem"in t&&n(8,o=t.activeItem),"calculateDimensions"in t&&n(0,r=t.calculateDimensions)},[r,i,s,c,d,l,u,a,o,()=>n(4,d=r(u,a)),()=>n(1,i=1)]}class jt extends yt{constructor(t){super(),$t(this,t,Pt,Yt,u,{activeItem:8,calculateDimensions:0})}}let qt,Xt,{documentElement:Bt,body:Ut}=document;const{window:Ft}=pt;function Jt(e){let i,o,r,s,c,u,a,d,p,m,g=e[7].i,$=te(e),y=(!e[11]||!e[10])&&ee(e);return{c(){i=E("div"),o=E("div"),s=H(),$.c(),c=H(),y&&y.c(),z(i,"class","bp-wrap"),T(i,"zoomed",e[14]),T(i,"bp-inline",e[12])},m(n,r){var l;I(n,i,r),w(i,o),w(i,s),$.m(i,null),w(i,c),y&&y.m(i,null),e[29](i),d=1,p||(m=[h((l=i,t||(t=new ResizeObserver((t=>{for(const e of t)e.target.dispatchEvent(new CustomEvent("fd:resize"))}))),t.observe(l),u={destroy(){t.unobserve(l)}})),A(i,"fd:resize",e[28]),h(a=e[22].call(null,i))],p=1)},p(t,o){e=t,128&o[0]&&f(g,g=e[7].i)?(rt(),ct($,1,1,n),st(),$=te(e),$.c(),lt($),$.m(i,c)):$.p(e,o),e[11]&&e[10]?y&&(rt(),ct(y,1,1,(()=>{y=null})),st()):y?(y.p(e,o),3072&o[0]&&lt(y,1)):(y=ee(e),y.c(),lt(y,1),y.m(i,null)),16384&o[0]&&T(i,"zoomed",e[14]),4096&o[0]&&T(i,"bp-inline",e[12])},i(t){d||(K((()=>{r||(r=ft(o,vt,{easing:bt,duration:480},1)),r.run(1)})),lt($),lt(y),d=1)},o(t){r||(r=ft(o,vt,{easing:bt,duration:480},0)),r.run(0),ct($),ct(y),d=0},d(t){t&&C(i),t&&r&&r.end(),$.d(t),y&&y.d(),e[29](null),p=0,l(m)}}}function Kt(t){let e,i,o=t[7].html+"";return{c(){e=new R,i=S(),e.a=i},m(t,n){e.m(o,t,n),I(t,i,n)},p(t,n){128&n[0]&&o!==(o=t[7].html+"")&&e.p(o)},i:n,o:n,d(t){t&&C(i),t&&e.d()}}}function Gt(t){let e,n;return e=new Wt({props:{activeItem:t[7],calculateDimensions:t[16]}}),{c(){mt(e.$$.fragment)},m(t,i){ht(e,t,i),n=1},p(t,n){const i={};128&n[0]&&(i.activeItem=t[7]),e.$set(i)},i(t){n||(lt(e.$$.fragment,t),n=1)},o(t){ct(e.$$.fragment,t),n=0},d(t){gt(e,t)}}}function Qt(t){let e,n;return e=new jt({props:{activeItem:t[7],calculateDimensions:t[16]}}),{c(){mt(e.$$.fragment)},m(t,i){ht(e,t,i),n=1},p(t,n){const i={};128&n[0]&&(i.activeItem=t[7]),e.$set(i)},i(t){n||(lt(e.$$.fragment,t),n=1)},o(t){ct(e.$$.fragment,t),n=0},d(t){gt(e,t)}}}function Vt(t){let e,n;return e=new Rt({props:{stuff:{activeItem:t[7],calculateDimensions:t[16],toggleControls:t[21],loadImage:t[18],preloadNext:t[17],next:t[4],prev:t[3],close:t[2],opts:t[5]},containerWidth:t[8],containerHeight:t[9],smallScreen:t[11]}}),{c(){mt(e.$$.fragment)},m(t,i){ht(e,t,i),n=1},p(t,n){const i={};160&n[0]&&(i.stuff={activeItem:t[7],calculateDimensions:t[16],toggleControls:t[21],loadImage:t[18],preloadNext:t[17],next:t[4],prev:t[3],close:t[2],opts:t[5]}),256&n[0]&&(i.containerWidth=t[8]),512&n[0]&&(i.containerHeight=t[9]),2048&n[0]&&(i.smallScreen=t[11]),e.$set(i)},i(t){n||(lt(e.$$.fragment,t),n=1)},o(t){ct(e.$$.fragment,t),n=0},d(t){gt(e,t)}}}function Zt(t){let e,n,i,o=t[7].caption+"";return{c(){e=E("div"),z(e,"class","bp-cap")},m(t,n){I(t,e,n),e.innerHTML=o,i=1},p(t,n){(!i||128&n[0])&&o!==(o=t[7].caption+"")&&(e.innerHTML=o)},i(t){i||(K((()=>{n||(n=ft(e,vt,{duration:200},1)),n.run(1)})),i=1)},o(t){n||(n=ft(e,vt,{duration:200},0)),n.run(0),i=0},d(t){t&&C(e),t&&n&&n.end()}}}function te(t){let e,n,i,o,r,s,c,u,a,d;const f=[Vt,Qt,Gt,Kt],p=[];function m(t,e){return t[7].img?0:t[7].video?1:t[7].iframe?2:3}n=m(t),i=p[n]=f[n](t);let h=t[7].caption&&Zt(t);return{c(){e=E("div"),i.c(),s=H(),h&&h.c(),c=S(),z(e,"class","bp-inner")},m(i,o){var r;I(i,e,o),p[n].m(e,null),I(i,s,o),h&&h.m(i,o),I(i,c,o),u=1,a||(d=[A(e,"pointerdown",t[26]),A(e,"pointerup",(r=t[27],function(t){t.target===this&&r.call(this,t)}))],a=1)},p(t,o){let r=n;n=m(t),n===r?p[n].p(t,o):(rt(),ct(p[r],1,1,(()=>{p[r]=null})),st(),i=p[n],i?i.p(t,o):(i=p[n]=f[n](t),i.c()),lt(i,1),i.m(e,null)),t[7].caption?h?(h.p(t,o),128&o[0]&&lt(h,1)):(h=Zt(t),h.c(),lt(h,1),h.m(c.parentNode,c)):h&&(rt(),ct(h,1,1,(()=>{h=null})),st())},i(n){u||(lt(i),K((()=>{r&&r.end(1),o=at(e,t[19],{}),o.start()})),lt(h),u=1)},o(n){ct(i),o&&o.invalidate(),r=dt(e,t[20],{}),ct(h),u=0},d(t){t&&C(e),p[n].d(),t&&r&&r.end(),t&&C(s),h&&h.d(t),t&&C(c),a=0,l(d)}}}function ee(t){let e,n,i,o,r=!t[5].noClose&&ne(t),s=t[0].length>1&&ie(t);return{c(){e=E("div"),r&&r.c(),n=H(),s&&s.c()},m(t,i){I(t,e,i),r&&r.m(e,null),w(e,n),s&&s.m(e,null),o=1},p(t,i){t[5].noClose?r&&(r.d(1),r=null):r?r.p(t,i):(r=ne(t),r.c(),r.m(e,n)),t[0].length>1?s?s.p(t,i):(s=ie(t),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i(t){o||(K((()=>{i||(i=ft(e,vt,{duration:300},1)),i.run(1)})),o=1)},o(t){i||(i=ft(e,vt,{duration:300},0)),i.run(0),o=0},d(t){t&&C(e),r&&r.d(),s&&s.d(),t&&i&&i.end()}}}function ne(t){let e,i,o;return{c(){e=E("button"),z(e,"class","bp-x"),z(e,"title","Close")},m(n,r){I(n,e,r),i||(o=A(e,"click",t[2]),i=1)},p:n,d(t){t&&C(e),i=0,o()}}}function ie(t){let e,n,i,o,r,s,c,u,a,d,f=t[1]+1+"",p=t[0].length+"";return{c(){e=E("div"),n=D(f),i=D(" / "),o=D(p),r=H(),s=E("button"),c=H(),u=E("button"),z(e,"class","bp-count"),z(s,"class","bp-next"),z(s,"title","Next"),z(u,"class","bp-prev"),z(u,"title","Previous")},m(l,f){I(l,e,f),w(e,n),w(e,i),w(e,o),I(l,r,f),I(l,s,f),I(l,c,f),I(l,u,f),a||(d=[A(s,"click",t[4]),A(u,"click",t[3])],a=1)},p(t,e){2&e[0]&&f!==(f=t[1]+1+"")&&N(n,f),1&e[0]&&p!==(p=t[0].length+"")&&N(o,p)},d(t){t&&C(e),t&&C(r),t&&C(s),t&&C(c),t&&C(u),a=0,l(d)}}}function oe(t){let e,n,i,o,r=t[0]&&Jt(t);return{c(){r&&r.c(),e=S()},m(s,l){r&&r.m(s,l),I(s,e,l),n=1,i||(o=A(Ft,"keydown",t[15]),i=1)},p(t,n){t[0]?r?(r.p(t,n),1&n[0]&&lt(r,1)):(r=Jt(t),r.c(),lt(r,1),r.m(e.parentNode,e)):r&&(rt(),ct(r,1,1,(()=>{r=null})),st())},i(t){n||(lt(r),n=1)},o(t){ct(r),n=0},d(t){r&&r.d(t),t&&C(e),i=0,o()}}}function re(t,e,n){let i,o;p(t,Ct,(t=>n(33,i=t))),p(t,Et,(t=>n(14,o=t)));let r,s,l,c,u,a,d,f,h,g,$,y,{items:b}=e,{position:v}=e,{target:x}=e;const w=()=>{r.noClose||(r.onClose&&r.onClose(),m(Ct,i=1,i),n(0,b=0),l&&l.focus({preventScroll:1}))},_=()=>I(v-1),k=()=>I(v+1),I=t=>{g=t-v,n(1,v=C(t))},C=t=>(t===b.length?t=0:0>t&&(t=b.length-1),t),E=t=>{const e=new Image;return e.src=t.img,t.preload=e,e.decode()},D=t=>{let{element:e}=y,n=t.querySelector(".bp-item"),{clientWidth:i,clientHeight:o}=n,{top:r,left:s,width:l,height:c}=e.getBoundingClientRect(),d=s-(u-l)/2,f=r-(a-c)/2,p=e.clientWidth/i,m=e.clientHeight/o;return{duration:480,easing:bt,css(t){let e=1-t;return`transform:translate3d(${d*e}px, ${f*e}px, 0px) scale3d(${p+t*(1-p)}, ${m+t*(1-m)}, 1)`}}},H=()=>{n(11,f=769>u),r.onResize&&r.onResize(y)};return t.$$set=t=>{"items"in t&&n(0,b=t.items),"position"in t&&n(1,v=t.position),"target"in t&&n(23,x=t.target)},t.$$.update=()=>{227&t.$$.dirty[0]&&b&&(n(7,y=b[v]),c&&r.onUpdate&&r.onUpdate(c,y))},[b,v,w,_,k,r,c,y,u,a,d,f,h,$,o,t=>{if(!s||h)return;let{key:e}=t;if("Escape"===e)w();else if("ArrowRight"===e)k();else if("ArrowLeft"===e)_();else if("Tab"===e){t.preventDefault();let e=[...(r.focusWrap||c).querySelectorAll("*")].filter((t=>t.tabIndex>=0)),n=e.indexOf(document.activeElement);n+=e.length+(t.shiftKey?-1:1),n%=e.length,e[n].focus()}},(t,e,n)=>{let i,o;n=r.scale||.99;const s=(e=e||1080)/(t=t||1920);return s>a/u?(o=Math.min(e,a*n),i=o/s):(i=Math.min(t,u*n),o=i*s),[i,o]},()=>{let t=b[C(v+1)],e=b[C(v-1)];t.img&&!t.preload&&E(t),e.img&&!e.preload&&E(e)},E,t=>s?xt(t,{x:g>0?20:-20,easing:bt,duration:300}):(s=1,r.onOpen&&r.onOpen(c),r.intro?xt(t,{y:10,easing:bt}):D(t)),t=>b?xt(t,{x:g>0?-20:20,easing:bt,duration:300}):r.intro?xt(t,{y:-10,easing:bt}):D(t),()=>n(10,d=!d),()=>(window.addEventListener("resize",H),{destroy(){window.removeEventListener("resize",H),m(Ct,i=s=0,i),Bt.style.overflowY=qt,Ut.style.overflowY=qt,r.onClosed&&r.onClosed()}}),x,t=>{let e=t.items;l=document.activeElement,n(5,r=t),n(12,h=r.inline),h||Bt.scrollHeight>Bt.clientHeight&&(qt=qt||getComputedStyle(Bt).overflowY,Xt=Xt||getComputedStyle(Ut).overflowY,Bt.style.overflowY="hidden",Ut.style.overflowY="scroll"),n(8,u=x.offsetWidth),n(9,a=x===document.body?window.innerHeight:x.clientHeight),n(11,f=769>u),n(1,v=r.position||0),n(0,b=Array.isArray(e)?e.map(((t,e)=>({...t,i:e}))):[...e.length?e:[e]].map(((t,e)=>{let i={element:t,i:e};return t===r.el&&n(1,v=e),{...i,...t.dataset}})))},I,({target:t})=>n(13,$=t),({target:t})=>{t===$&&w()},t=>{n(9,a=t.target.clientHeight),n(8,u=t.target.clientWidth)},t=>{X[t?"unshift":"push"]((()=>{c=t,n(6,c)}))}]}class se extends yt{constructor(t){super(),$t(this,t,re,oe,f,{items:0,position:1,target:23,open:24,close:2,prev:3,next:4,setPosition:25},null,[-1,-1])}get items(){return this.$$.ctx[0]}set items(t){this.$$set({items:t}),Z()}get position(){return this.$$.ctx[1]}set position(t){this.$$set({position:t}),Z()}get target(){return this.$$.ctx[23]}set target(t){this.$$set({target:t}),Z()}get open(){return this.$$.ctx[24]}get close(){return this.$$.ctx[2]}get prev(){return this.$$.ctx[3]}get next(){return this.$$.ctx[4]}get setPosition(){return this.$$.ctx[25]}}e=t=>new se({...t,intro:1,props:t});export{e as default};
