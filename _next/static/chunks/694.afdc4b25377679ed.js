(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[694],{5858:function(e,r,t){"use strict";t.d(r,{s:function(){return u}});var n=t(7294);function u(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],r=(0,n.useRef)(0),t=(0,n.useRef)(0),u=(0,n.useRef)(0),i=(0,n.useRef)([]),o=(0,n.useRef)(!1);(0,n.useEffect)((function(){t.current=performance.now(),u.current=0,i.current=[]}),[e]);var a=(0,n.useCallback)((function(){var e=performance.now();u.current=u.current+1,e>=t.current+100&&(r.current=100*u.current/(e-t.current)*10,i.current.push(r.current),t.current=e,u.current=0),i.current.length<=9||(i.current=i.current.slice(-9),i.current.every((function(e){return e<60}))&&(o.current=!0),i.current.every((function(e){return e>70}))&&(o.current=!1))}),[]);return{measureFps:a,fps:r,isLowFps:o}}},4905:function(e,r,t){"use strict";t.r(r),t.d(r,{Armor:function(){return N}});var n=t(4051),u=t.n(n),i=t(5893),o="./_next/static/media/volkihar-cube-nx.6150c9af.jpg",a="./_next/static/media/volkihar-cube-ny.f2c25620.jpg",c="./_next/static/media/volkihar-cube-nz.094dd0b3.jpg",s="./_next/static/media/volkihar-cube-px.cb007f0e.jpg",f="./_next/static/media/volkihar-cube-py.46d12f37.jpg",l="./_next/static/media/volkihar-cube-pz.e7c6feeb.jpg",v=t.p+"static/media/volkihar-knight.d62f417b.glb",d=t(7686),p=t(7e3),m=t(2579),y=t(6240),h=t(7378),b=t(4992),w=t(5858),g=t(7294),x=t(9477);const j=[];for(let F=0;F<256;F++)j[F]=(F<16?"0":"")+F.toString(16);const O=Math.PI/180;Math.PI;var S=t(7142),P=t(4764),_=t(103),k=t.n(_);function C(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function E(e,r,t,n,u,i,o){try{var a=e[i](o),c=a.value}catch(s){return void t(s)}a.done?r(c):Promise.resolve(c).then(n,u)}function R(e){return function(){var r=this,t=arguments;return new Promise((function(n,u){var i=e.apply(r,t);function o(e){E(i,n,u,o,a,"next",e)}function a(e){E(i,n,u,o,a,"throw",e)}o(void 0)}))}}function A(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function z(e,r){if(null==e)return{};var t,n,u=function(e,r){if(null==e)return{};var t,n,u={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(u[t]=e[t]);return u}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}function L(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,u,i=[],o=!0,a=!1;try{for(t=t.call(e);!(o=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);o=!0);}catch(c){a=!0,u=c}finally{try{o||null==t.return||t.return()}finally{if(a)throw u}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return C(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return C(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var M={stiffness:40,damping:20,mass:1.5},N=function(e){var r=e.showDelay,t=void 0===r?0:r,n=e.cameraPosition,j=void 0===n?{x:0,y:0,z:6}:n,_=e.className,C=e.alt,E=z(e,["showDelay","cameraPosition","className","alt"]),N=(0,g.useState)(!1),F=N[0],I=N[1],T=(0,g.useState)(!1),D=T[0],q=T[1],J=(0,g.useState)(!1),H=J[0],U=J[1],W=(0,g.useRef)(),Z=(0,g.useRef)(),B=(0,g.useRef)(),Y=(0,g.useRef)(),G=(0,g.useRef)(),K=(0,g.useRef)(),V=(0,g.useRef)(),X=(0,b.NM)(W,!1,{threshold:.4}),$=(0,y.J)(),Q=(0,h.q)(0,M),ee=(0,h.q)(0,M),re=(0,w.s)(X),te=re.measureFps,ne=re.isLowFps;(0,g.useEffect)((function(){var e=W.current,r=e.clientWidth,t=e.clientHeight;K.current=new x.CP7({canvas:Z.current,alpha:!0,antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),K.current.setPixelRatio(2),K.current.setSize(r,t),K.current.outputEncoding=x.knz,K.current.physicallyCorrectLights=!0,K.current.toneMapping=x.LY2,B.current=new x.cPb(36,r/t,.1,100),B.current.position.set(j.x,j.y,j.z),G.current=new x.xsS;var n=new x.cBK;Y.current=new x.ZAu,G.current.add(Y.current);var i=new x.anP(K.current);i.compileCubemapShader();var d=new x.Ox3(16777215,3.2),p=new x.Ox3(16777215,1),m=new x.Ox3(16777215,1);d.position.set(1,.1,2),p.position.set(-1,.1,8),m.position.set(-2,2,-3),V.current=[m,d,p],V.current.forEach((function(e){return G.current.add(e)}));var y=function(){var e=R(u().mark((function e(){var r,t,d,p,m,y;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=P.Zf.loadAsync(v),t=n.loadAsync([o,a,c,s,f,l]),e.t0=L,e.next=5,Promise.all([r,t]);case 5:return e.t1=e.sent,d=(0,e.t0)(e.t1,2),p=d[0],m=d[1],Y.current.add(p.scene),p.scene.rotation.y=180*O,p.scene.position.y=-1.6,y=i.fromCubemap(m).texture,G.current.environment=y,i.dispose(),e.next=17,K.current.initTexture(G.current.environment);case 17:Y.current.traverse(function(){var e=R(u().mark((function e(r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.material){e.next=3;break}return e.next=3,K.current.initTexture(r.material);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),I(!0),ue();case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,g.startTransition)((function(){y(),setTimeout((function(){U(!0)}),1e3)}));var h=Q.onChange((function(e){Y.current.rotation.x=e,ue()})),b=ee.onChange((function(e){Y.current.rotation.y=e,ue()}));return function(){(0,P.Ji)(V.current),(0,P.in)(G.current),(0,P.e8)(K.current),h(),b()}}),[]);var ue=(0,g.useCallback)((function(){K.current.render(G.current,B.current),te(),ne.current?K.current.setPixelRatio(1):K.current.setPixelRatio(2)}),[te,ne]);return(0,g.useEffect)((function(){var e=function(e){var r=window.innerWidth,t=window.innerHeight,n=(e.clientX-r/2)/r,u=(e.clientY-t/2)/t;Q.set(u/2),ee.set(n/2)};return X&&q(!0),X&&!$&&window.addEventListener("mousemove",e),function(){window.removeEventListener("mousemove",e)}}),[X,$,Q,ee]),(0,g.useEffect)((function(){var e=function(){if(W.current){var e=W.current,r=e.clientWidth,t=e.clientHeight;K.current.setSize(r,t),B.current.aspect=r/t,B.current.updateProjectionMatrix(),ue()}};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[ue]),(0,i.jsxs)("div",function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){A(e,r,t[r])}))}return e}({className:(0,S.Sh)(k().armor,_),ref:W,role:"img","aria-label":C},E,{children:[(0,i.jsx)(m.u,{unmount:!0,in:!F&&H,timeout:(0,S.zG)(p.T.base.durationL),children:function(e){return(0,i.jsx)(d.a,{className:k().loader,"data-visible":e})}}),(0,i.jsx)("canvas",{className:k().canvas,ref:Z,"data-loaded":F&&D,style:(0,S.Fh)({delay:(0,S.aU)(t)})})]}))}},4764:function(e,r,t){"use strict";t.d(r,{Et:function(){return s},Ji:function(){return d},Zf:function(){return c},e8:function(){return v},in:function(){return f},x2:function(){return p}});var n=t(9477),u=t(4976),i=t(7607);n.CtF.enabled=!0;var o=new u._,a=new i.E;o.setDecoderPath("/draco/"),a.setDRACOLoader(o);var c=a,s=new n.dpR,f=function(e){null===e||void 0===e||e.traverse((function(e){if(e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)l(e.material);else{var r=!0,t=!1,n=void 0;try{for(var u,i=e.material[Symbol.iterator]();!(r=(u=i.next()).done);r=!0){var o=u.value;l(o)}}catch(a){t=!0,n=a}finally{try{r||null==i.return||i.return()}finally{if(t)throw n}}}}))},l=function(e){e.dispose();var r=!0,t=!1,n=void 0;try{for(var u,i=Object.keys(e)[Symbol.iterator]();!(r=(u=i.next()).done);r=!0){var o,a,c,s=e[u.value];if(s&&"object"===typeof s&&"minFilter"in s)s.dispose(),null===(o=s.source)||void 0===o||null===(a=o.data)||void 0===a||null===(c=a.close)||void 0===c||c.call(a)}}catch(f){t=!0,n=f}finally{try{r||null==i.return||i.return()}finally{if(t)throw n}}},v=function(e){e.dispose(),e=null},d=function(e){var r=!0,t=!1,n=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done);r=!0){var o=u.value;o.parent.remove(o)}}catch(a){t=!0,n=a}finally{try{r||null==i.return||i.return()}finally{if(t)throw n}}},p=function(e,r){var t;return r.traverse((function(r){r.name===e&&(t=r)})),t}},103:function(e){e.exports={armor:"Armor_armor__npq42",loader:"Armor_loader___wk2y",canvas:"Armor_canvas__Oe927"}},7378:function(e,r,t){"use strict";t.d(r,{q:function(){return f}});var n=t(655),u=t(7294),i=t(754),o=t(406),a=t(3234),c=t(6014),s=t(6681);function f(e,r){void 0===r&&(r={});var t=(0,u.useContext)(c._).isStatic,f=(0,u.useRef)(null),l=function(e){var r=(0,s.h)((function(){return(0,a.B)(e)}));if((0,u.useContext)(c._).isStatic){var t=(0,n.CR)((0,u.useState)(e),2)[1];(0,u.useEffect)((function(){return r.onChange(t)}),[])}return r}((0,o.i)(e)?e.get():e);return(0,u.useMemo)((function(){return l.attach((function(e,u){return t?u(e):(f.current&&f.current.stop(),f.current=(0,i.j)((0,n.pi)((0,n.pi)({from:l.get(),to:e,velocity:l.getVelocity()},r),{onUpdate:u})),l.get())}))}),[JSON.stringify(r)]),function(e,r){(0,u.useEffect)((function(){if((0,o.i)(e))return e.onChange(r)}),[r])}(e,(function(e){return l.set(parseFloat(e))})),l}}}]);