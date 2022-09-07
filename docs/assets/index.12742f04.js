(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const n of d)if(n.type==="childList")for(const t of n.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&s(t)}).observe(document,{childList:!0,subtree:!0});function c(d){const n={};return d.integrity&&(n.integrity=d.integrity),d.referrerpolicy&&(n.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?n.credentials="include":d.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(d){if(d.ep)return;d.ep=!0;const n=c(d);fetch(d.href,n)}})();var Ne={exports:{}};(function(f){(function(l,c){var s=c(l,l.document,Date);l.lazySizes=s,f.exports&&(f.exports=s)})(typeof window<"u"?window:{},function(c,s,d){var n,t;if(function(){var a,r={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};t=c.lazySizesConfig||c.lazysizesConfig||{};for(a in r)a in t||(t[a]=r[a])}(),!s||!s.getElementsByClassName)return{init:function(){},cfg:t,noSupport:!0};var T=s.documentElement,K=c.HTMLPictureElement,N="addEventListener",E="getAttribute",k=c[N].bind(c),S=c.setTimeout,ae=c.requestAnimationFrame||S,X=c.requestIdleCallback,se=/^picture$/i,pe=["load","error","lazyincluded","_lazyloaded"],Y={},ye=Array.prototype.forEach,j=function(a,r){return Y[r]||(Y[r]=new RegExp("(\\s|^)"+r+"(\\s|$)")),Y[r].test(a[E]("class")||"")&&Y[r]},H=function(a,r){j(a,r)||a.setAttribute("class",(a[E]("class")||"").trim()+" "+r)},Z=function(a,r){var o;(o=j(a,r))&&a.setAttribute("class",(a[E]("class")||"").replace(o," "))},ee=function(a,r,o){var h=o?N:"removeEventListener";o&&ee(a,r),pe.forEach(function(y){a[h](y,r)})},D=function(a,r,o,h,y){var u=s.createEvent("Event");return o||(o={}),o.instance=n,u.initEvent(r,!h,!y),u.detail=o,a.dispatchEvent(u),u},te=function(a,r){var o;!K&&(o=c.picturefill||t.pf)?(r&&r.src&&!a[E]("srcset")&&a.setAttribute("srcset",r.src),o({reevaluate:!0,elements:[a]})):r&&r.src&&(a.src=r.src)},w=function(a,r){return(getComputedStyle(a,null)||{})[r]},ie=function(a,r,o){for(o=o||a.offsetWidth;o<t.minSize&&r&&!a._lazysizesWidth;)o=r.offsetWidth,r=r.parentNode;return o},$=function(){var a,r,o=[],h=[],y=o,u=function(){var v=y;for(y=o.length?h:o,a=!0,r=!1;v.length;)v.shift()();a=!1},m=function(v,p){a&&!p?v.apply(this,arguments):(y.push(v),r||(r=!0,(s.hidden?S:ae)(u)))};return m._lsFlush=u,m}(),G=function(a,r){return r?function(){$(a)}:function(){var o=this,h=arguments;$(function(){a.apply(o,h)})}},he=function(a){var r,o=0,h=t.throttleDelay,y=t.ricTimeout,u=function(){r=!1,o=d.now(),a()},m=X&&y>49?function(){X(u,{timeout:y}),y!==t.ricTimeout&&(y=t.ricTimeout)}:G(function(){S(u)},!0);return function(v){var p;(v=v===!0)&&(y=33),!r&&(r=!0,p=h-(d.now()-o),p<0&&(p=0),v||p<9?m():S(m,p))}},ne=function(a){var r,o,h=99,y=function(){r=null,a()},u=function(){var m=d.now()-o;m<h?S(u,h-m):(X||y)(y)};return function(){o=d.now(),r||(r=S(u,h))}},oe=function(){var a,r,o,h,y,u,m,v,p,A,M,O,me=/^img$/i,ze=/^iframe$/i,Ee="onscroll"in c&&!/(gle|ing)bot/.test(navigator.userAgent),Ce=0,U=0,x=0,P=-1,le=function(e){x--,(!e||x<0||!e.target)&&(x=0)},ce=function(e){return O==null&&(O=w(s.body,"visibility")=="hidden"),O||!(w(e.parentNode,"visibility")=="hidden"&&w(e,"visibility")=="hidden")},be=function(e,i){var g,z=e,C=ce(e);for(v-=i,M+=i,p-=i,A+=i;C&&(z=z.offsetParent)&&z!=s.body&&z!=T;)C=(w(z,"opacity")||1)>0,C&&w(z,"overflow")!="visible"&&(g=z.getBoundingClientRect(),C=A>g.left&&p<g.right&&M>g.top-1&&v<g.bottom+1);return C},ue=function(){var e,i,g,z,C,b,I,B,q,F,W,R,_=n.elements;if((h=t.loadMode)&&x<8&&(e=_.length)){for(i=0,P++;i<e;i++)if(!(!_[i]||_[i]._lazyRace)){if(!Ee||n.prematureUnveil&&n.prematureUnveil(_[i])){V(_[i]);continue}if((!(B=_[i][E]("data-expand"))||!(b=B*1))&&(b=U),F||(F=!t.expand||t.expand<1?T.clientHeight>500&&T.clientWidth>500?500:370:t.expand,n._defEx=F,W=F*t.expFactor,R=t.hFac,O=null,U<W&&x<1&&P>2&&h>2&&!s.hidden?(U=W,P=0):h>1&&P>1&&x<6?U=F:U=Ce),q!==b&&(u=innerWidth+b*R,m=innerHeight+b,I=b*-1,q=b),g=_[i].getBoundingClientRect(),(M=g.bottom)>=I&&(v=g.top)<=m&&(A=g.right)>=I*R&&(p=g.left)<=u&&(M||A||p||v)&&(t.loadHidden||ce(_[i]))&&(r&&x<3&&!B&&(h<3||P<4)||be(_[i],b))){if(V(_[i]),C=!0,x>9)break}else!C&&r&&!z&&x<4&&P<4&&h>2&&(a[0]||t.preloadAfterLoad)&&(a[0]||!B&&(M||A||p||v||_[i][E](t.sizesAttr)!="auto"))&&(z=a[0]||_[i])}z&&!C&&V(z)}},L=he(ue),de=function(e){var i=e.target;if(i._lazyCache){delete i._lazyCache;return}le(e),H(i,t.loadedClass),Z(i,t.loadingClass),ee(i,fe),D(i,"lazyloaded")},Ae=G(de),fe=function(e){Ae({target:e.target})},Le=function(e,i){var g=e.getAttribute("data-load-mode")||t.iframeLoadMode;g==0?e.contentWindow.location.replace(i):g==1&&(e.src=i)},_e=function(e){var i,g=e[E](t.srcsetAttr);(i=t.customMedia[e[E]("data-media")||e[E]("media")])&&e.setAttribute("media",i),g&&e.setAttribute("srcset",g)},Se=G(function(e,i,g,z,C){var b,I,B,q,F,W;(F=D(e,"lazybeforeunveil",i)).defaultPrevented||(z&&(g?H(e,t.autosizesClass):e.setAttribute("sizes",z)),I=e[E](t.srcsetAttr),b=e[E](t.srcAttr),C&&(B=e.parentNode,q=B&&se.test(B.nodeName||"")),W=i.firesLoad||"src"in e&&(I||b||q),F={target:e},H(e,t.loadingClass),W&&(clearTimeout(o),o=S(le,2500),ee(e,fe,!0)),q&&ye.call(B.getElementsByTagName("source"),_e),I?e.setAttribute("srcset",I):b&&!q&&(ze.test(e.nodeName)?Le(e,b):e.src=b),C&&(I||q)&&te(e,{src:b})),e._lazyRace&&delete e._lazyRace,Z(e,t.lazyClass),$(function(){var R=e.complete&&e.naturalWidth>1;(!W||R)&&(R&&H(e,t.fastLoadedClass),de(F),e._lazyCache=!0,S(function(){"_lazyCache"in e&&delete e._lazyCache},9)),e.loading=="lazy"&&x--},!0)}),V=function(e){if(!e._lazyRace){var i,g=me.test(e.nodeName),z=g&&(e[E](t.sizesAttr)||e[E]("sizes")),C=z=="auto";(C||!r)&&g&&(e[E]("src")||e.srcset)&&!e.complete&&!j(e,t.errorClass)&&j(e,t.lazyClass)||(i=D(e,"lazyunveilread").detail,C&&re.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,x++,Se(e,i,C,z,g))}},xe=ne(function(){t.loadMode=3,L()}),ve=function(){t.loadMode==3&&(t.loadMode=2),xe()},Q=function(){if(!r){if(d.now()-y<999){S(Q,999);return}r=!0,t.loadMode=3,L(),k("scroll",ve,!0)}};return{_:function(){y=d.now(),n.elements=s.getElementsByClassName(t.lazyClass),a=s.getElementsByClassName(t.lazyClass+" "+t.preloadClass),k("scroll",L,!0),k("resize",L,!0),k("pageshow",function(e){if(e.persisted){var i=s.querySelectorAll("."+t.loadingClass);i.length&&i.forEach&&ae(function(){i.forEach(function(g){g.complete&&V(g)})})}}),c.MutationObserver?new MutationObserver(L).observe(T,{childList:!0,subtree:!0,attributes:!0}):(T[N]("DOMNodeInserted",L,!0),T[N]("DOMAttrModified",L,!0),setInterval(L,999)),k("hashchange",L,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){s[N](e,L,!0)}),/d$|^c/.test(s.readyState)?Q():(k("load",Q),s[N]("DOMContentLoaded",L),S(Q,2e4)),n.elements.length?(ue(),$._lsFlush()):L()},checkElems:L,unveil:V,_aLSL:ve}}(),re=function(){var a,r=G(function(u,m,v,p){var A,M,O;if(u._lazysizesWidth=p,p+="px",u.setAttribute("sizes",p),se.test(m.nodeName||""))for(A=m.getElementsByTagName("source"),M=0,O=A.length;M<O;M++)A[M].setAttribute("sizes",p);v.detail.dataAttr||te(u,v.detail)}),o=function(u,m,v){var p,A=u.parentNode;A&&(v=ie(u,A,v),p=D(u,"lazybeforesizes",{width:v,dataAttr:!!m}),p.defaultPrevented||(v=p.detail.width,v&&v!==u._lazysizesWidth&&r(u,A,p,v)))},h=function(){var u,m=a.length;if(m)for(u=0;u<m;u++)o(a[u])},y=ne(h);return{_:function(){a=s.getElementsByClassName(t.autosizesClass),k("resize",y)},checkElems:y,updateElem:o}}(),J=function(){!J.i&&s.getElementsByClassName&&(J.i=!0,re._(),oe._())};return S(function(){t.init&&J()}),n={cfg:t,autoSizer:re,loader:oe,init:J,uP:te,aC:H,rC:Z,hC:j,fire:D,gW:ie,rAF:$},n})})(Ne);const Me=(f,l)=>{const c=()=>{f.setAttribute("aria-expanded","true"),f.setAttribute("area-label","\u30E1\u30CB\u30E5\u30FC\u3092\u9589\u3058\u308B"),l.setAttribute("aria-hidden","false")},s=()=>{f.setAttribute("aria-expanded","false"),f.setAttribute("area-label","\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F"),l.setAttribute("aria-hidden","true")};f.addEventListener("click",()=>{f.getAttribute("aria-expanded")==="false"?c():s()}),document.addEventListener("click",n=>{n.target instanceof HTMLElement&&!n.target.closest(".js_drawerNav")&&s()}),Array.from(l.querySelectorAll('a[href^="#"]')).forEach(n=>n.addEventListener("click",t=>{t.preventDefault(),s()}))},Te=()=>{Array.from(document.querySelectorAll('a[href^="#"]')).forEach(l=>{l.addEventListener("click",c=>{c.preventDefault();const s=l.hash,d=document.querySelector(s),n=window.pageYOffset+d.getBoundingClientRect().top,t=document.querySelector("header").clientHeight;window.scrollTo({top:n-t,behavior:"smooth"})})})},Ie=f=>{const l=document.getElementById("js_header"),c={root:null,rootMargin:"0px",threshold:0},s=n=>{n.forEach(t=>{t.isIntersecting?l==null||l.classList.remove("is_display"):l==null||l.classList.add("is_display")})};new IntersectionObserver(s,c).observe(f)},Be=()=>{const f=document.querySelector("button.js_drawerNav_btn"),l=document.querySelector("div.js_drawerNav");f!=null&&l!=null&&Me(f,l);const c=document.getElementById("js_mv");Ie(c),Te()},Fe=()=>{const f=document.getElementById("js_mv");f==null||f.classList.add("is_display")},ke=()=>{const f=Array.from(document.querySelectorAll("span.js_mv_text"));let l;f.map((s,d)=>{const n=s.textContent,t=n==null?void 0:n.split("");let T="";t==null||t.forEach((N,E)=>{T+=`<span class="is_display" style="animation-delay:${E/10}s;">${N}</span>`});const K=s;return K.textContent="",l=new Promise(N=>{setTimeout(()=>{N(K.insertAdjacentHTML("beforeend",T))},1e3*(d+1))}),l});async function c(){await l,setTimeout(()=>{const s=document.querySelector(".js_mv_textLine");s==null||s.classList.add("is_display")},2e3)}return c()},qe=()=>{Fe(),ke()},ge={root:null,rootMargin:"0px",threshold:[.1]},Oe=Array.from(document.querySelectorAll(".js_anime")),We=()=>{const f=c=>{c.forEach(s=>{s.isIntersecting?s.target.classList.add("is_display"):s.target.classList.remove("is_display")})},l=new IntersectionObserver(f,ge);Oe.forEach(c=>l.observe(c))},Pe=Array.from(document.querySelectorAll(".js_anime__list")),Re=Pe.map(f=>Array.from(f.children)),je=()=>{const f=c=>{c.forEach((s,d)=>{if(s.isIntersecting){const n=d*400;setTimeout(()=>{s.target.classList.add("is_display")},n)}else s.target.classList.remove("is_display")})},l=new IntersectionObserver(f,ge);Re.forEach(c=>c.forEach(s=>l.observe(s)))},He=()=>{We(),je()};window.onload=()=>{Be(),qe(),He()};
