(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,i){t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i;return e}},8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(7217)}])},8045:function(e,t,i){"use strict";var n=i(9361).Z,r=i(4941).Z,o=i(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,i=e.sizes,a=e.unoptimized,f=void 0!==a&&a,h=e.priority,p=void 0!==h&&h,x=e.loading,A=e.lazyRoot,O=void 0===A?null:A,E=e.lazyBoundary,I=e.className,N=e.quality,C=e.width,R=e.height,P=e.style,M=e.objectFit,L=e.objectPosition,q=e.onLoadingComplete,W=e.placeholder,D=void 0===W?"empty":W,B=e.blurDataURL,H=m(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),U=l.useContext(d.ImageConfigContext),F=l.useMemo((function(){var e=b||U||c.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),i=e.deviceSizes.sort((function(e,t){return e-t}));return g({},e,{allSizes:t,deviceSizes:i})}),[U]),T=H,V=i?"responsive":"intrinsic";"layout"in T&&(T.layout&&(V=T.layout),delete T.layout);var Z=_;if("loader"in T){if(T.loader){var G=T.loader;Z=function(e){e.config;var t=m(e,["config"]);return G(t)}}delete T.loader}var J="";if(function(e){return"object"===typeof e&&(j(e)||function(e){return void 0!==e.src}(e))}(t)){var X=j(t)?t.default:t;if(!X.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(B=B||X.blurDataURL,J=X.src,(!V||"fill"!==V)&&(R=R||X.height,C=C||X.width,!X.height||!X.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)))}t="string"===typeof t?t:J;var Q=S(C),K=S(R),Y=S(N),$=!p&&("lazy"===x||"undefined"===typeof x);(t.startsWith("data:")||t.startsWith("blob:"))&&(f=!0,$=!1);y.has(t)&&($=!1);v&&(f=!0);var ee,te=r(l.useState(!1),2),ie=te[0],ne=te[1],re=r(u.useIntersection({rootRef:O,rootMargin:E||"200px",disabled:!$}),3),oe=re[0],ae=re[1],le=re[2],se=!$||ae,ce={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de=!1,fe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:L};0;var ge=Object.assign({},P,fe),he="blur"!==D||ie?{}:{backgroundSize:M||"cover",backgroundPosition:L||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(B,'")')};if("fill"===V)ce.display="block",ce.position="absolute",ce.top=0,ce.left=0,ce.bottom=0,ce.right=0;else if("undefined"!==typeof Q&&"undefined"!==typeof K){var me=K/Q,pe=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===V?(ce.display="block",ce.position="relative",de=!0,ue.paddingTop=pe):"intrinsic"===V?(ce.display="inline-block",ce.position="relative",ce.maxWidth="100%",de=!0,ue.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Q,"%27%20height=%27").concat(K,"%27/%3e")):"fixed"===V&&(ce.display="inline-block",ce.position="relative",ce.width=Q,ce.height=K)}else 0;var ve={src:w,srcSet:void 0,sizes:void 0};se&&(ve=z({config:F,src:t,unoptimized:f,layout:V,width:Q,quality:Y,sizes:i,loader:Z}));var be=t;0;var ye;0;var we=(n(ye={},"imagesrcset",ve.srcSet),n(ye,"imagesizes",ve.sizes),ye),xe=l.default.useLayoutEffect,je=l.useRef(q),ze=l.useRef(t);l.useEffect((function(){je.current=q}),[q]),xe((function(){ze.current!==t&&(le(),ze.current=t)}),[le,t]);var Se=g({isLazy:$,imgAttributes:ve,heightInt:K,widthInt:Q,qualityInt:Y,layout:V,className:I,imgStyle:ge,blurStyle:he,loading:x,config:F,unoptimized:f,placeholder:D,loader:Z,srcString:be,onLoadingCompleteRef:je,setBlurComplete:ne,setIntersection:oe,isVisible:se,noscriptSizes:i},T);return l.default.createElement(l.default.Fragment,null,l.default.createElement("span",{style:ce},de?l.default.createElement("span",{style:ue},ee?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,l.default.createElement(k,Object.assign({},Se))),p?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ve.src+ve.srcSet+ve.sizes,rel:"preload",as:"image",href:ve.srcSet?void 0:ve.src},we))):null)};var a,l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=h();if(t&&t.has(e))return t.get(e);var i={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=n?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(i,r,o):i[r]=e[r]}i.default=e,t&&t.set(e,i);return i}(i(7294)),s=(a=i(5443))&&a.__esModule?a:{default:a},c=i(9309),u=i(7190),d=i(9977),f=(i(3794),i(2392));function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},g.apply(this,arguments)}function h(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return h=function(){return e},e}function m(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}var p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://github.com/HypeDriven/Chargr/",loader:"akamai"}||{},v=p.experimentalUnoptimized,b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://github.com/HypeDriven/Chargr/",loader:"akamai"},y=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var x=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality;0;if(i.endsWith(".svg")&&!t.dangerouslyAllowSVG)return i;return"".concat(f.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality,o=new URL("".concat(t.path).concat(O(i))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality,o=["f_auto","c_limit","w_"+n,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(O(i))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(O(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function j(e){return void 0!==e.default}function z(e){var t=e.config,i=e.src,n=e.unoptimized,r=e.layout,a=e.width,l=e.quality,s=e.sizes,c=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var u=function(e,t,i,n){var r=e.deviceSizes,a=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var l,s=/(^|\s)(1?\d?\d)vw/g,c=[];l=s.exec(n);l)c.push(parseInt(l[2]));if(c.length){var u,d=.01*(u=Math).min.apply(u,o(c));return{widths:a.filter((function(e){return e>=r[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===i||"responsive"===i?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,r,s),d=u.widths,f=u.kind,g=d.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:d.map((function(e,n){return"".concat(c({config:t,src:i,quality:l,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:c({config:t,src:i,quality:l,width:d[g]})}}function S(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function _(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=x.get(i);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(c.VALID_LOADERS.join(", "),". Received: ").concat(i))}function A(e,t,i,n,r,o){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(y.add(t),"blur"===n&&o(!0),null==r?void 0:r.current)){var i=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:i,naturalHeight:a})}})))}var k=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,r=e.layout,o=e.className,a=e.imgStyle,s=e.blurStyle,c=e.isLazy,u=e.placeholder,d=e.loading,f=e.srcString,h=e.config,p=e.unoptimized,v=e.loader,b=e.onLoadingCompleteRef,y=e.setBlurComplete,w=e.setIntersection,x=e.onLoad,j=e.onError,S=(e.isVisible,e.noscriptSizes),_=m(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return d=c?"lazy":d,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},_,t,{decoding:"async","data-nimg":r,className:o,style:g({},a,s),ref:l.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&A(e,f,0,u,b,y)}),[w,f,r,u,b,y]),onLoad:function(e){A(e.currentTarget,f,0,u,b,y),x&&x(e)},onError:function(e){"blur"===u&&y(!0),j&&j(e)}})),(c||"blur"===u)&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},_,z({config:h,src:f,unoptimized:p,layout:r,width:i,quality:n,sizes:S,loader:v}),{decoding:"async","data-nimg":r,style:a,className:o,loading:d}))))};function O(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,i){"use strict";var n=i(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,i=e.rootMargin,c=e.disabled||!a,u=r.useRef(),d=n(r.useState(!1),2),f=d[0],g=d[1],h=n(r.useState(null),2),m=h[0],p=h[1];r.useEffect((function(){if(a){if(u.current&&(u.current(),u.current=void 0),c||f)return;return m&&m.tagName&&(u.current=function(e,t,i){var n=function(e){var t,i={root:e.root||null,margin:e.rootMargin||""},n=s.find((function(e){return e.root===i.root&&e.margin===i.margin}));if(n&&(t=l.get(n)))return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)}))}),e);return t={id:i,observer:o,elements:r},s.push(i),l.set(i,t),t}(i),r=n.id,o=n.observer,a=n.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(r);var t=s.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&s.splice(t,1)}}}(m,(function(e){return e&&g(e)}),{root:null==t?void 0:t.current,rootMargin:i})),function(){null==u.current||u.current(),u.current=void 0}}if(!f){var e=o.requestIdleCallback((function(){return g(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[m,c,i,t,f]);var v=r.useCallback((function(){g(!1)}),[]);return[p,f,v]};var r=i(7294),o=i(9311),a="function"===typeof IntersectionObserver;var l=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7217:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return d}});var n=i(5893),r=i(5675),o=i.n(r),a={src:"/Chargr/_next/static/media/charging-station.93c0290c.svg",height:107,width:91},l={src:"/Chargr/_next/static/media/logo.c2df6200.svg",height:456,width:534},s={src:"/Chargr/_next/static/media/mail.617a3efc.svg",height:25,width:25},c=function(){return(0,n.jsx)(o(),{src:a,width:"50",height:"50"})},u=function(){return(0,n.jsxs)("div",{className:"business-card",children:[(0,n.jsx)("div",{className:"absolute -left-5 top-10 lg:top-1/4 lg:left-1/4 blur-sm",children:(0,n.jsx)(c,{})}),(0,n.jsx)("div",{className:"absolute -right-5 top-5 lg:top-1/3 lg:right-1/4 blur-sm",children:(0,n.jsx)(c,{})}),(0,n.jsx)("div",{className:"absolute -left-5 bottom-5 lg:bottom-1/4 lg:left-1/4",children:(0,n.jsx)(c,{})}),(0,n.jsx)("div",{className:"absolute -right-5 bottom-12 lg:bottom-1/3 lg:right-1/4",children:(0,n.jsx)(c,{})}),(0,n.jsx)("div",{className:"flex w-full h-full",children:(0,n.jsx)("div",{className:"px-6 mx-auto self-center z-10",children:(0,n.jsxs)("div",{className:"w-full sm:w-3/4 md:w-auto mx-auto flex gap-14 flex-col justify-center text-center max-w-3xl",children:[(0,n.jsx)(o(),{src:l}),(0,n.jsx)("div",{className:"font-bold text-3xl sm:text-4xl md:text-6xl",children:"... you only need one charge app in the world"}),(0,n.jsxs)("div",{className:"flex gap-2 justify-center",children:[(0,n.jsx)("div",{className:"flex self-center",children:(0,n.jsx)(o(),{src:s,height:"24",width:"24"})}),(0,n.jsx)("span",{className:"text-2xl leading-5",children:"biz2@chargr.one"})]})]})})})]})},d=function(){return(0,n.jsx)(u,{})}},5675:function(e,t,i){e.exports=i(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);