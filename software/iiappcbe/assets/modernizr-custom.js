/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-flexboxtweener-svg-svgasimg-setclasses !*/
!function(e,n,t){function r(e){var n=b.className,t=Modernizr._config.classPrefix||"";if(T&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),T?b.className.baseVal=n:b.className=n)}function o(e,n){return typeof e===n}function i(){var e,n,t,r,i,s,l;for(var a in C)if(C.hasOwnProperty(a)){if(e=[],n=C[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],l=s.split("."),1===l.length?Modernizr[l[0]]=r:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=r),_.push((r?"":"no-")+l.join("-"))}}function s(e,n){if("object"==typeof e)for(var t in e)x(e,t)&&s(t,e[t]);else{e=e.toLowerCase();var o=e.split("."),i=Modernizr[o[0]];if(2==o.length&&(i=i[o[1]]),"undefined"!=typeof i)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),r([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function l(e,n){return!!~(""+e).indexOf(n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):T?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function u(e,n){return function(){return e.apply(n,arguments)}}function c(e,n,t){var r;for(var i in e)if(e[i]in n)return t===!1?e[i]:(r=n[e[i]],o(r,"function")?u(r,t||n):r);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var s=i.error?"error":"log";i[s].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function m(){var e=n.body;return e||(e=a(T?"svg":"body"),e.fake=!0),e}function g(e,t,r,o){var i,s,l,f,u="modernizr",c=a("div"),d=m();if(parseInt(r,10))for(;r--;)l=a("div"),l.id=o?o[r]:u+(r+1),c.appendChild(l);return i=a("style"),i.type="text/css",i.id="s"+u,(d.fake?d:c).appendChild(i),d.appendChild(c),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),c.id=u,d.fake&&(d.style.background="",d.style.overflow="hidden",f=b.style.overflow,b.style.overflow="hidden",b.appendChild(d)),s=t(c,e),d.fake?(d.parentNode.removeChild(d),b.style.overflow=f,b.offsetHeight):c.parentNode.removeChild(c),!!s}function h(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+d(n[o])+":"+r+")");return i=i.join(" or "),g("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==p(e,null,"position")})}return t}function v(e,n,r,i){function s(){c&&(delete j.style,delete j.modElem)}if(i=o(i,"undefined")?!1:i,!o(r,"undefined")){var u=h(e,r);if(!o(u,"undefined"))return u}for(var c,d,p,m,g,v=["modernizr","tspan","samp"];!j.style&&v.length;)c=!0,j.modElem=a(v.shift()),j.style=j.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],g=j.style[m],l(m,"-")&&(m=f(m)),j.style[m]!==t){if(i||o(r,"undefined"))return s(),"pfx"==n?m:!0;try{j.style[m]=r}catch(y){}if(j.style[m]!=g)return s(),"pfx"==n?m:!0}return s(),!1}function y(e,n,t,r,i){var s=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+E.join(s+" ")+s).split(" ");return o(n,"string")||o(n,"undefined")?v(l,n,r,i):(l=(e+" "+N.join(s+" ")+s).split(" "),c(l,n,t))}function w(e,n,r){return y(e,t,t,n,r)}var _=[],C=[],S={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var x,b=n.documentElement,T="svg"===b.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;x=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),S._l={},S.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},S._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,r;for(e=0;e<t.length;e++)(r=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){S.addTest=s}),Modernizr.addTest("svgasimg",n.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var P="Moz O ms Webkit",E=S._config.usePrefixes?P.split(" "):[];S._cssomPrefixes=E;var N=S._config.usePrefixes?P.toLowerCase().split(" "):[];S._domPrefixes=N;var z={elem:a("modernizr")};Modernizr._q.push(function(){delete z.elem});var j={style:z.elem.style};Modernizr._q.unshift(function(){delete j.style}),S.testAllProps=y,S.testAllProps=w,Modernizr.addTest("flexboxtweener",w("flexAlign","end",!0)),Modernizr.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),i(),r(_),delete S.addTest,delete S.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);