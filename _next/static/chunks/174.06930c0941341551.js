(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[174],{9174:function(e,n,r){"use strict";r.r(n),r.d(n,{Carousel:function(){return A}});var t,a=r(4051),i=r.n(a),o=r(5893),u=r(7294);function c(){return c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},c.apply(this,arguments)}var s,l=e=>u.createElement("svg",c({fill:"currentColor",width:18,height:42,viewBox:"0 0 18 42"},e),t||(t=u.createElement("path",{d:"M18.03 1.375L16.47.125-.031 20.75l16.5 20.625 1.562-1.25L2.53 20.75z"})));function f(){return f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},f.apply(this,arguments)}var v=e=>u.createElement("svg",f({fill:"currentColor",width:18,height:42,viewBox:"0 0 18 42"},e),s||(s=u.createElement("path",{d:"M-.03 1.375L1.53.125l16.5 20.625-16.5 20.625-1.562-1.25 15.5-19.375z"}))),d=r(6240),p=r(2064),m=r(4992),g=r(9477),y=r(2128),h=r(7142),b=r(4764),x=r(3218),w=r.n(x);function _(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function C(e,n,r,t,a,i,o){try{var u=e[i](o),c=u.value}catch(s){return void r(s)}u.done?n(c):Promise.resolve(c).then(t,a)}function j(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var i=e.apply(n,r);function o(e){C(i,t,a,o,u,"next",e)}function u(e){C(i,t,a,o,u,"throw",e)}o(void 0)}))}}function I(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function F(e,n,r){return F=I()?Reflect.construct:function(e,n,r){var t=[null];t.push.apply(t,n);var a=new(Function.bind.apply(e,t));return r&&S(a,r.prototype),a},F.apply(null,arguments)}function k(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function E(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){k(e,n,r[n])}))}return e}function O(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function S(e,n){return S=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},S(e,n)}function P(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return _(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,n,r,t){if(null!==n)return n;var a=r.length;return t>0?(e+1)%a:(e-1+a)%a}var A=function(e){var n=e.width,r=e.height,t=e.images,a=e.placeholder,c=O(e,["width","height","images","placeholder"]),s=(0,u.useState)(!1),f=s[0],x=s[1],_=(0,u.useState)(0),C=_[0],I=_[1],k=(0,u.useState)(!1),S=k[0],A=k[1],M=(0,u.useState)(!0),D=M[0],L=M[1],N=(0,u.useState)(),q=N[0],B=N[1],z=(0,u.useState)(),U=z[0],T=z[1],K=(0,u.useRef)(),W=(0,u.useRef)(),J=(0,u.useRef)(),G=(0,u.useRef)(),V=(0,u.useRef)(),X=(0,u.useRef)(),H=(0,u.useRef)(),Q=(0,u.useRef)(!1),Y=(0,u.useRef)(),Z=(0,u.useRef)(),$=(0,u.useRef)(),ee=(0,d.J)(),ne=(0,m.NM)(K,!0),re=(0,u.useRef)(),te=(0,u.useRef)(),ae="Slide ".concat(C+1," of ").concat(t.length,". ").concat(t[C].alt);(0,u.useEffect)((function(){return f&&(document.body.style.cursor="grabbing"),function(){document.body.style.cursor=""}}),[f]),(0,u.useEffect)((function(){var e=[n/-2,n/2,r/2,r/-2,1,1e3];return H.current=new g.CP7({canvas:K.current,antialias:!1,alpha:!0,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),X.current=F(g.iKG,P(e)),V.current=new g.xsS,H.current.setPixelRatio(2),H.current.setClearColor(1118481,1),H.current.setSize(n,r),H.current.domElement.style.width="100%",H.current.domElement.style.height="auto",V.current.background=new g.Ilk(1118481),X.current.position.z=1,function(){Q.current=!1,(0,b.in)(V.current),(0,b.e8)(H.current)}}),[r,n]),(0,u.useEffect)((function(){var e=!0,a=function(){var a=j(i().mark((function a(){var o,u,c;return i().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=H.current.capabilities.getMaxAnisotropy(),u=t.map(function(){var e=j(i().mark((function e(n){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.srcSet){e.next=6;break}return e.next=3,(0,y.Ro)(n);case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=n.src.src;case 7:return r=e.t0,e.next=10,b.Et.loadAsync(r);case 10:return t=e.sent,e.next=13,H.current.initTexture(t);case 13:return t.encoding=g.knz,t.minFilter=g.wem,t.magFilter=g.wem,t.anisotropy=o,t.generateMipmaps=!1,e.abrupt("return",t);case 19:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),a.next=4,Promise.all(u);case 4:if(c=a.sent,e){a.next=7;break}return a.abrupt("return");case 7:G.current=new g.jyz({uniforms:{dispFactor:{type:"f",value:0},direction:{type:"f",value:1},currentImage:{type:"t",value:c[0]},nextImage:{type:"t",value:c[1]},reduceMotion:{type:"b",value:ee}},vertexShader:"varying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n",fragmentShader:"varying vec2 vUv;\nuniform sampler2D currentImage;\nuniform sampler2D nextImage;\nuniform float dispFactor;\nuniform float direction;\nuniform bool reduceMotion;\n\nvoid main() {\n  if (reduceMotion) {\n    // Simple crossfade\n    vec4 _currentImage = texture2D(currentImage, vUv);\n    vec4 _nextImage = texture2D(nextImage, vUv);\n    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);\n    gl_FragColor = finalTexture;\n  } else {\n    // Liquid distortion effect\n    vec2 uv = vUv;\n    vec4 _currentImage;\n    vec4 _nextImage;\n    float intensity = 0.6;\n\n    vec4 orig1 = texture2D(currentImage, uv);\n    vec4 orig2 = texture2D(nextImage, uv);\n\n    vec2 distortedPosition = vec2(\n      uv.x + direction * (dispFactor * (orig2.r * intensity)),\n      uv.y + direction * (dispFactor * (orig2 * intensity))\n    );\n\n    vec2 distortedPosition2 = vec2(\n      uv.x - direction * ((1.0 - dispFactor) * (orig1.r * intensity)),\n      uv.y - direction * ((1.0 - dispFactor) * (orig1 * intensity))\n    );\n\n    _currentImage = texture2D(currentImage, distortedPosition);\n    _nextImage = texture2D(nextImage, distortedPosition2);\n\n    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);\n    gl_FragColor = finalTexture;\n  }\n}\n",transparent:!1,opacity:1}),J.current=new g.BKK(n,r,1),W.current=new g.Kj0(J.current,G.current),W.current.position.set(0,0,0),V.current.add(W.current),A(!0),B(c),requestAnimationFrame((function(){H.current.render(V.current,X.current)}));case 15:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return ne&&!S&&a(),function(){e=!1}}),[r,t,ne,S,ee,n]);var ie=(0,u.useCallback)((function(e){var n=e.index,r=e.direction,t=void 0===r?1:r;if(q){I(n);var a=G.current.uniforms;a.nextImage.value=q[n],a.direction.value=t;1!==a.dispFactor.value&&(Q.current=!0,(0,p.j)(a.dispFactor.value,1,{type:"spring",stiffness:100,damping:20,restSpeed:.001,restDelta:.001,onUpdate:function(e){a.dispFactor.value=e},onComplete:function(){a.currentImage.value=q[n],a.dispFactor.value=0,Q.current=!1}}))}}),[q]),oe=(0,u.useCallback)((function(e){var n=e.direction,r=e.index,t=void 0===r?null:r,a=O(e,["direction","index"]);if(S){if(Q.current)return cancelAnimationFrame($.current),void($.current=requestAnimationFrame((function(){return oe(E({direction:n,index:t},a))})));var i=R(C,t,q,n);ie(E({index:i,direction:n},a))}}),[ie,C,S,q]),ue=(0,u.useCallback)((function(e){e!==C&&oe({direction:e>C?1:-1,index:e})}),[C,oe]);(0,u.useEffect)((function(){var e=function(){var e=K.current.getBoundingClientRect();T(e)};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]),(0,u.useEffect)((function(){var e,n=function(){e=requestAnimationFrame(n),Q.current&&H.current.render(V.current,X.current)};return e=requestAnimationFrame(n),function(){cancelAnimationFrame(e)}}),[]),(0,u.useEffect)((function(){if(a){var e=function(){L(!1)},n=re.current;return n.addEventListener("transitionend",e),function(){n&&n.removeEventListener("transitionend",e)}}}),[a]);var ce=(0,u.useCallback)((function(e){if(!Q.current&&G.current&&q){Z.current=e;var n=Math.abs(e),r=U.width;Y.current=e>0?-1:1;var a=1-(n-r)/r*-1,i=R(C,null,t,Y.current),o=G.current.uniforms,u=Math.min(Math.max(a,0),1);o.currentImage.value=q[C],o.nextImage.value=q[i],o.direction.value=Y.current,o.dispFactor.value=u,requestAnimationFrame((function(){H.current.render(V.current,X.current)}))}}),[U,C,t,q]),se=(0,u.useCallback)((function(){if(G.current){var e=G.current.uniforms,n=1e3*(1-e.dispFactor.value),r=Math.abs(Z.current),t=.2*U.width;Z.current=0,Q.current||0!==r&&r&&(r>t?oe({duration:n,direction:Y.current}):(e.currentImage.value=e.nextImage.value,e.nextImage.value=e.currentImage.value,e.dispFactor.value=1-e.dispFactor.value,oe({direction:-1*Y.current,index:C})))}}),[U,C,oe]),le=(0,u.useCallback)((function(e){ce(e.clientX-te.current)}),[ce]),fe=(0,u.useCallback)((function(){x(!1),se(),document.removeEventListener("pointerup",fe),document.removeEventListener("pointermove",le)}),[le,se]),ve=(0,u.useCallback)((function(e){te.current=e.clientX,x(!0),document.addEventListener("pointermove",le),document.addEventListener("pointerup",fe)}),[le,fe]);return(0,o.jsxs)("div",E({className:w().carousel,onKeyDown:function(e){switch(e.key){case"ArrowRight":oe({direction:1});break;case"ArrowLeft":oe({direction:-1})}}},c,{children:[(0,o.jsxs)("div",{className:w().content,children:[(0,o.jsxs)("div",{className:w().imageWrapper,"data-dragging":f,onPointerDown:ve,style:(0,h.Fh)({aspectRatio:"".concat(n," / ").concat(r)}),children:[(0,o.jsx)("div",{"aria-atomic":!0,className:w().canvasWrapper,"aria-live":"polite","aria-label":ae,role:"img",children:(0,o.jsx)("canvas",{"aria-hidden":!0,className:w().canvas,ref:K})}),D&&a&&(0,o.jsx)("img",{"aria-hidden":!0,className:w().placeholder,"data-loaded":S&&!!q,src:a.src,ref:re,alt:"",role:"presentation"})]}),(0,o.jsx)("button",{className:w().button,"data-prev":!0,"aria-label":"Previous slide",onClick:function(){return oe({direction:-1})},children:(0,o.jsx)(l,{})}),(0,o.jsx)("button",{className:w().button,"data-next":!0,"aria-label":"Next slide",onClick:function(){return oe({direction:1})},children:(0,o.jsx)(v,{})})]}),(0,o.jsx)("div",{className:w().nav,children:t.map((function(e,n){return(0,o.jsx)("button",{className:w().navButton,onClick:function(){return ue(n)},"aria-label":"Jump to slide ".concat(n+1),"aria-pressed":n===C},e.alt)}))})]}))}},4764:function(e,n,r){"use strict";r.d(n,{Et:function(){return s},Ji:function(){return d},Zf:function(){return c},e8:function(){return v},in:function(){return l},x2:function(){return p}});var t=r(9477),a=r(4976),i=r(7607);t.CtF.enabled=!0;var o=new a._,u=new i.E;o.setDecoderPath("/draco/"),u.setDRACOLoader(o);var c=u,s=new t.dpR,l=function(e){null===e||void 0===e||e.traverse((function(e){if(e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)f(e.material);else{var n=!0,r=!1,t=void 0;try{for(var a,i=e.material[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var o=a.value;f(o)}}catch(u){r=!0,t=u}finally{try{n||null==i.return||i.return()}finally{if(r)throw t}}}}))},f=function(e){e.dispose();var n=!0,r=!1,t=void 0;try{for(var a,i=Object.keys(e)[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var o,u,c,s=e[a.value];if(s&&"object"===typeof s&&"minFilter"in s)s.dispose(),null===(o=s.source)||void 0===o||null===(u=o.data)||void 0===u||null===(c=u.close)||void 0===c||c.call(u)}}catch(l){r=!0,t=l}finally{try{n||null==i.return||i.return()}finally{if(r)throw t}}},v=function(e){e.dispose(),e=null},d=function(e){var n=!0,r=!1,t=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var o=a.value;o.parent.remove(o)}}catch(u){r=!0,t=u}finally{try{n||null==i.return||i.return()}finally{if(r)throw t}}},p=function(e,n){var r;return n.traverse((function(n){n.name===e&&(r=n)})),r}},3218:function(e){e.exports={carousel:"Carousel_carousel__Sspl_",content:"Carousel_content__gQHGr",imageWrapper:"Carousel_imageWrapper__qTCVg",canvasWrapper:"Carousel_canvasWrapper__fJ9wa",canvas:"Carousel_canvas__M9q1k",placeholder:"Carousel_placeholder__9B_u0",button:"Carousel_button___Co_K",nav:"Carousel_nav__aYsww",navButton:"Carousel_navButton__Fq3pI"}},2064:function(e,n,r){"use strict";r.d(n,{j:function(){return o}});var t=r(3234),a=r(406),i=r(8899);function o(e,n,r){void 0===r&&(r={});var o=(0,a.i)(e)?e:(0,t.B)(e);return(0,i.b8)("",o,n,r),{stop:function(){return o.stop()},isAnimating:function(){return o.isAnimating()}}}}}]);