import{K as q,o as J,u as U,b as G,n as Z,i as ee,g as Q,c as j,r as T,w as P,L as k,M as te,O as ne}from"./index-BCMHodeU.js";function F(e){return q()?(J(e),!0):!1}function b(e){return typeof e=="function"?e():U(e)}const oe=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const re=e=>e!=null,le=Object.prototype.toString,ie=e=>le.call(e)==="[object Object]",S=()=>{};function X(e,n){function t(...o){return new Promise((r,u)=>{Promise.resolve(e(()=>n.apply(this,o),{fn:n,thisArg:this,args:o})).then(r).catch(u)})}return t}function se(e,n={}){let t,o,r=S;const u=s=>{clearTimeout(s),r(),r=S};return s=>{const d=b(e),i=b(n.maxWait);return t&&u(t),d<=0||i!==void 0&&i<=0?(o&&(u(o),o=null),Promise.resolve(s())):new Promise((c,f)=>{r=n.rejectOnCancel?f:c,i&&!o&&(o=setTimeout(()=>{t&&u(t),o=null,c(s())},i)),t=setTimeout(()=>{o&&u(o),o=null,c(s())},d)})}}function ue(...e){let n=0,t,o=!0,r=S,u,a,s,d,i;!ee(e[0])&&typeof e[0]=="object"?{delay:a,trailing:s=!0,leading:d=!0,rejectOnCancel:i=!1}=e[0]:[a,s=!0,d=!0,i=!1]=e;const c=()=>{t&&(clearTimeout(t),t=void 0,r(),r=S)};return p=>{const m=b(a),v=Date.now()-n,L=()=>u=p();return c(),m<=0?(n=Date.now(),L()):(v>m&&(d||!o)?(n=Date.now(),L()):s&&(u=new Promise((y,h)=>{r=i?h:y,t=setTimeout(()=>{n=Date.now(),o=!0,y(L()),c()},Math.max(0,m-v))})),!d&&!t&&(t=setTimeout(()=>o=!0,m)),o=!1,u)}}function ce(e){return Q()}function ae(e,n=200,t={}){return X(se(n,t),e)}function fe(e,n=200,t=!1,o=!0,r=!1){return X(ue(n,t,o,r),e)}function B(e,n=!0,t){ce()?G(e,t):n?e():Z(e)}const x=oe?window:void 0;function D(e){var n;const t=b(e);return(n=t==null?void 0:t.$el)!=null?n:t}function H(...e){let n,t,o,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,o,r]=e,n=x):[n,t,o,r]=e,!n)return S;Array.isArray(t)||(t=[t]),Array.isArray(o)||(o=[o]);const u=[],a=()=>{u.forEach(c=>c()),u.length=0},s=(c,f,p,m)=>(c.addEventListener(f,p,m),()=>c.removeEventListener(f,p,m)),d=P(()=>[D(n),b(r)],([c,f])=>{if(a(),!c)return;const p=ie(f)?{...f}:f;u.push(...t.flatMap(m=>o.map(v=>s(c,m,v,p))))},{immediate:!0,flush:"post"}),i=()=>{d(),a()};return F(i),i}function de(){const e=T(!1),n=Q();return n&&G(()=>{e.value=!0},n),e}function K(e){const n=de();return j(()=>(n.value,!!e()))}function me(e,n={}){const{window:t=x}=n,o=K(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let r;const u=T(!1),a=i=>{u.value=i.matches},s=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",a):r.removeListener(a))},d=te(()=>{o.value&&(s(),r=t.matchMedia(b(e)),"addEventListener"in r?r.addEventListener("change",a):r.addListener(a),u.value=r.matches)});return F(()=>{d(),s(),r=void 0}),u}function pe(e,n,t={}){const{root:o,rootMargin:r="0px",threshold:u=0,window:a=x,immediate:s=!0}=t,d=K(()=>a&&"IntersectionObserver"in a),i=j(()=>{const v=b(e);return(Array.isArray(v)?v:[v]).map(D).filter(re)});let c=S;const f=T(s),p=d.value?P(()=>[i.value,D(o),f.value],([v,L])=>{if(c(),!f.value||!v.length)return;const y=new IntersectionObserver(n,{root:D(L),rootMargin:r,threshold:u});v.forEach(h=>h&&y.observe(h)),c=()=>{y.disconnect(),c=S}},{immediate:s,flush:"post"}):S,m=()=>{c(),p(),f.value=!1};return F(m),{isSupported:d,isActive:f,pause(){c(),f.value=!1},resume(){f.value=!0},stop:m}}const z=1;function he(e,n={}){const{throttle:t=0,idle:o=200,onStop:r=S,onScroll:u=S,offset:a={left:0,right:0,top:0,bottom:0},eventListenerOptions:s={capture:!1,passive:!0},behavior:d="auto",window:i=x,onError:c=l=>{console.error(l)}}=n,f=T(0),p=T(0),m=j({get(){return f.value},set(l){L(l,void 0)}}),v=j({get(){return p.value},set(l){L(void 0,l)}});function L(l,M){var w,I,O,A;if(!i)return;const g=b(e);if(!g)return;(O=g instanceof Document?i.document.body:g)==null||O.scrollTo({top:(w=b(M))!=null?w:v.value,left:(I=b(l))!=null?I:m.value,behavior:b(d)});const W=((A=g==null?void 0:g.document)==null?void 0:A.documentElement)||(g==null?void 0:g.documentElement)||g;m!=null&&(f.value=W.scrollLeft),v!=null&&(p.value=W.scrollTop)}const y=T(!1),h=k({left:!0,right:!1,top:!0,bottom:!1}),E=k({left:!1,right:!1,top:!1,bottom:!1}),N=l=>{y.value&&(y.value=!1,E.left=!1,E.right=!1,E.top=!1,E.bottom=!1,r(l))},$=ae(N,t+o),C=l=>{var M;if(!i)return;const w=((M=l==null?void 0:l.document)==null?void 0:M.documentElement)||(l==null?void 0:l.documentElement)||D(l),{display:I,flexDirection:O}=getComputedStyle(w),A=w.scrollLeft;E.left=A<f.value,E.right=A>f.value;const g=Math.abs(A)<=(a.left||0),W=Math.abs(A)+w.clientWidth>=w.scrollWidth-(a.right||0)-z;I==="flex"&&O==="row-reverse"?(h.left=W,h.right=g):(h.left=g,h.right=W),f.value=A;let _=w.scrollTop;l===i.document&&!_&&(_=i.document.body.scrollTop),E.top=_<p.value,E.bottom=_>p.value;const V=Math.abs(_)<=(a.top||0),Y=Math.abs(_)+w.clientHeight>=w.scrollHeight-(a.bottom||0)-z;I==="flex"&&O==="column-reverse"?(h.top=Y,h.bottom=V):(h.top=V,h.bottom=Y),p.value=_},R=l=>{var M;if(!i)return;const w=(M=l.target.documentElement)!=null?M:l.target;C(w),y.value=!0,$(l),u(l)};return H(e,"scroll",t?fe(R,t,!0,!1):R,s),B(()=>{try{const l=b(e);if(!l)return;C(l)}catch(l){c(l)}}),H(e,"scrollend",N,s),{x:m,y:v,isScrolling:y,arrivedState:h,directions:E,measure(){const l=b(e);i&&l&&C(l)}}}function be(e={}){const{window:n=x,initialWidth:t=Number.POSITIVE_INFINITY,initialHeight:o=Number.POSITIVE_INFINITY,listenOrientation:r=!0,includeScrollbar:u=!0,type:a="inner"}=e,s=T(t),d=T(o),i=()=>{n&&(a==="outer"?(s.value=n.outerWidth,d.value=n.outerHeight):u?(s.value=n.innerWidth,d.value=n.innerHeight):(s.value=n.document.documentElement.clientWidth,d.value=n.document.documentElement.clientHeight))};if(i(),B(i),H("resize",i,{passive:!0}),r){const c=me("(orientation: portrait)");P(c,()=>i())}return{width:s,height:d}}const we=ne("anchor",()=>{const e=T("home");return{pageAnchor:e,setAnchor:t=>{e.value=t}}});export{we as a,be as b,pe as c,he as u};
