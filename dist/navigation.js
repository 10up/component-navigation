!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=70)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(71))},function(t,e,n){var r=n(0),o=n(29),i=n(3),u=n(30),c=n(34),a=n(50),s=o("wks"),f=r.Symbol,l=a?f:f&&f.withoutSetter||u;t.exports=function(t){return i(s,t)||(c&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(6),o=n(7),i=n(13);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(9);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(2);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,n){var r=n(6),o=n(43),i=n(5),u=n(17),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=u(e,!0),i(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(0),o=n(25).f,i=n(4),u=n(11),c=n(28),a=n(47),s=n(76);t.exports=function(t,e){var n,f,l,p,v,h=t.target,g=t.global,y=t.stat;if(n=g?r:y?r[h]||c(h,{}):(r[h]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(v=o(n,f))&&v.value:n[f],!s(g?f:h+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(n,f,p,t)}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(27),o=n(16);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(0),o=n(4),i=n(3),u=n(28),c=n(45),a=n(18),s=a.get,f=a.enforce,l=String(String).split("String");(t.exports=function(t,e,n,c){var a=!!c&&!!c.unsafe,s=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),f(n).source=l.join("string"==typeof e?e:"")),t!==r?(a?!p&&t[e]&&(s=!0):delete t[e],s?t[e]=n:o(t,e,n)):s?t[e]=n:u(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||c(this)}))},function(t,e,n){var r=n(16);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports={}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(9);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r,o,i,u=n(72),c=n(0),a=n(9),s=n(4),f=n(3),l=n(19),p=n(21),v=c.WeakMap;if(u){var h=new v,g=h.get,y=h.has,d=h.set;r=function(t,e){return d.call(h,t,e),e},o=function(t){return g.call(h,t)||{}},i=function(t){return y.call(h,t)}}else{var b=l("state");p[b]=!0,r=function(t,e){return s(t,b,e),e},o=function(t){return f(t,b)?t[b]:{}},i=function(t){return f(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(29),o=n(30),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){t.exports=!1},function(t,e){t.exports={}},function(t,e,n){var r=n(48),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){var r=n(24),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(6),o=n(26),i=n(13),u=n(10),c=n(17),a=n(3),s=n(43),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=u(t),e=c(e,!0),s)try{return f(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(2),o=n(15),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(0),o=n(4);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(20),o=n(46);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(49),o=n(32).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(2);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r,o=n(5),i=n(77),u=n(32),c=n(21),a=n(78),s=n(44),f=n(19),l=f("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},h=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;h=r?function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=s("iframe")).style.display="none",a.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var n=u.length;n--;)delete h.prototype[u[n]];return h()};c[l]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[l]=t):n=h(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(49),o=n(32);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(7).f,o=n(3),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(54),o=n(27),i=n(12),u=n(23),c=n(81),a=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,f=4==t,l=6==t,p=5==t||l;return function(v,h,g,y){for(var d,b,m=i(v),S=o(m),x=r(h,g,3),A=u(S.length),O=0,E=y||c,w=e?E(v,A):n?E(v,0):void 0;A>O;O++)if((p||O in S)&&(b=x(d=S[O],O,m),t))if(e)w[O]=b;else if(b)switch(t){case 3:return!0;case 5:return d;case 6:return O;case 2:a.call(w,d)}else if(f)return!1;return l?-1:s||f?f:w}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,e,n){"use strict";var r=n(10),o=n(82),i=n(14),u=n(18),c=n(57),a=u.set,s=u.getterFor("Array Iterator");t.exports=c(Array,"Array",(function(t,e){a(this,{type:"Array Iterator",target:r(t),index:0,kind:e})}),(function(){var t=s(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e,n){var r={};r[n(1)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,e,n){"use strict";var r,o,i=n(69),u=n(103),c=RegExp.prototype.exec,a=String.prototype.replace,s=c,f=(r=/a/,o=/b*/g,c.call(r,"a"),c.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),l=u.UNSUPPORTED_Y||u.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(f||p||l)&&(s=function(t){var e,n,r,o,u=this,s=l&&u.sticky,v=i.call(u),h=u.source,g=0,y=t;return s&&(-1===(v=v.replace("y","")).indexOf("g")&&(v+="g"),y=String(t).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==t[u.lastIndex-1])&&(h="(?: "+h+")",y=" "+y,g++),n=new RegExp("^(?:"+h+")",v)),p&&(n=new RegExp("^"+h+"$(?!\\s)",v)),f&&(e=u.lastIndex),r=c.call(s?n:u,y),s?r?(r.input=r.input.slice(g),r[0]=r[0].slice(g),r.index=u.lastIndex,u.lastIndex+=r[0].length):u.lastIndex=0:f&&r&&(u.lastIndex=u.global?r.index+r[0].length:e),p&&r&&r.length>1&&a.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=s},function(t,e,n){"use strict";var r=n(8),o=n(0),i=n(22),u=n(20),c=n(6),a=n(34),s=n(50),f=n(2),l=n(3),p=n(51),v=n(9),h=n(5),g=n(12),y=n(10),d=n(17),b=n(13),m=n(35),S=n(36),x=n(31),A=n(79),O=n(33),E=n(25),w=n(7),j=n(26),T=n(4),P=n(11),k=n(29),_=n(19),C=n(21),$=n(30),I=n(1),L=n(52),M=n(53),R=n(37),N=n(18),D=n(38).forEach,q=_("hidden"),F=I("toPrimitive"),U=N.set,G=N.getterFor("Symbol"),Q=Object.prototype,B=o.Symbol,V=i("JSON","stringify"),K=E.f,z=w.f,W=A.f,Y=j.f,H=k("symbols"),X=k("op-symbols"),J=k("string-to-symbol-registry"),Z=k("symbol-to-string-registry"),tt=k("wks"),et=o.QObject,nt=!et||!et.prototype||!et.prototype.findChild,rt=c&&f((function(){return 7!=m(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=K(Q,e);r&&delete Q[e],z(t,e,n),r&&t!==Q&&z(Q,e,r)}:z,ot=function(t,e){var n=H[t]=m(B.prototype);return U(n,{type:"Symbol",tag:t,description:e}),c||(n.description=e),n},it=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof B},ut=function(t,e,n){t===Q&&ut(X,e,n),h(t);var r=d(e,!0);return h(n),l(H,r)?(n.enumerable?(l(t,q)&&t[q][r]&&(t[q][r]=!1),n=m(n,{enumerable:b(0,!1)})):(l(t,q)||z(t,q,b(1,{})),t[q][r]=!0),rt(t,r,n)):z(t,r,n)},ct=function(t,e){h(t);var n=y(e),r=S(n).concat(lt(n));return D(r,(function(e){c&&!at.call(n,e)||ut(t,e,n[e])})),t},at=function(t){var e=d(t,!0),n=Y.call(this,e);return!(this===Q&&l(H,e)&&!l(X,e))&&(!(n||!l(this,e)||!l(H,e)||l(this,q)&&this[q][e])||n)},st=function(t,e){var n=y(t),r=d(e,!0);if(n!==Q||!l(H,r)||l(X,r)){var o=K(n,r);return!o||!l(H,r)||l(n,q)&&n[q][r]||(o.enumerable=!0),o}},ft=function(t){var e=W(y(t)),n=[];return D(e,(function(t){l(H,t)||l(C,t)||n.push(t)})),n},lt=function(t){var e=t===Q,n=W(e?X:y(t)),r=[];return D(n,(function(t){!l(H,t)||e&&!l(Q,t)||r.push(H[t])})),r};(a||(P((B=function(){if(this instanceof B)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=$(t),n=function(t){this===Q&&n.call(X,t),l(this,q)&&l(this[q],e)&&(this[q][e]=!1),rt(this,e,b(1,t))};return c&&nt&&rt(Q,e,{configurable:!0,set:n}),ot(e,t)}).prototype,"toString",(function(){return G(this).tag})),P(B,"withoutSetter",(function(t){return ot($(t),t)})),j.f=at,w.f=ut,E.f=st,x.f=A.f=ft,O.f=lt,L.f=function(t){return ot(I(t),t)},c&&(z(B.prototype,"description",{configurable:!0,get:function(){return G(this).description}}),u||P(Q,"propertyIsEnumerable",at,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:B}),D(S(tt),(function(t){M(t)})),r({target:"Symbol",stat:!0,forced:!a},{for:function(t){var e=String(t);if(l(J,e))return J[e];var n=B(e);return J[e]=n,Z[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(l(Z,t))return Z[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!a,sham:!c},{create:function(t,e){return void 0===e?m(t):ct(m(t),e)},defineProperty:ut,defineProperties:ct,getOwnPropertyDescriptor:st}),r({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:ft,getOwnPropertySymbols:lt}),r({target:"Object",stat:!0,forced:f((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(g(t))}}),V)&&r({target:"JSON",stat:!0,forced:!a||f((function(){var t=B();return"[null]"!=V([t])||"{}"!=V({a:t})||"{}"!=V(Object(t))}))},{stringify:function(t,e,n){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=e,(v(e)||void 0!==t)&&!it(t))return p(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),o[1]=e,V.apply(null,o)}});B.prototype[F]||T(B.prototype,F,B.prototype.valueOf),R(B,"Symbol"),C[q]=!0},function(t,e,n){var r=n(6),o=n(2),i=n(44);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(0),o=n(9),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,e,n){var r=n(46),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(0),o=n(28),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(3),o=n(73),i=n(25),u=n(7);t.exports=function(t,e){for(var n=o(e),c=u.f,a=i.f,s=0;s<n.length;s++){var f=n[s];r(t,f)||c(t,f,a(e,f))}}},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){var r=n(3),o=n(10),i=n(74).indexOf,u=n(21);t.exports=function(t,e){var n,c=o(t),a=0,s=[];for(n in c)!r(u,n)&&r(c,n)&&s.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){var r=n(34);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r=n(15);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(1);e.f=r},function(t,e,n){var r=n(48),o=n(3),i=n(52),u=n(7).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||u(e,t,{value:i.f(t)})}},function(t,e,n){var r=n(80);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){"use strict";var r=n(8),o=n(6),i=n(0),u=n(3),c=n(9),a=n(7).f,s=n(47),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};s(p,f);var v=p.prototype=f.prototype;v.constructor=p;var h=v.toString,g="Symbol(test)"==String(f("test")),y=/^Symbol\((.*)\)[^)]+$/;a(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=h.call(t);if(u(l,t))return"";var n=g?e.slice(7,-1):e.replace(y,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},function(t,e,n){n(53)("iterator")},function(t,e,n){"use strict";var r=n(8),o=n(83),i=n(59),u=n(85),c=n(37),a=n(4),s=n(11),f=n(1),l=n(20),p=n(14),v=n(58),h=v.IteratorPrototype,g=v.BUGGY_SAFARI_ITERATORS,y=f("iterator"),d=function(){return this};t.exports=function(t,e,n,f,v,b,m){o(n,e,f);var S,x,A,O=function(t){if(t===v&&P)return P;if(!g&&t in j)return j[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},E=e+" Iterator",w=!1,j=t.prototype,T=j[y]||j["@@iterator"]||v&&j[v],P=!g&&T||O(v),k="Array"==e&&j.entries||T;if(k&&(S=i(k.call(new t)),h!==Object.prototype&&S.next&&(l||i(S)===h||(u?u(S,h):"function"!=typeof S[y]&&a(S,y,d)),c(S,E,!0,!0),l&&(p[E]=d))),"values"==v&&T&&"values"!==T.name&&(w=!0,P=function(){return T.call(this)}),l&&!m||j[y]===P||a(j,y,P),p[e]=P,v)if(x={values:O("values"),keys:b?P:O("keys"),entries:O("entries")},m)for(A in x)!g&&!w&&A in j||s(j,A,x[A]);else r({target:e,proto:!0,forced:g||w},x);return x}},function(t,e,n){"use strict";var r,o,i,u=n(59),c=n(4),a=n(3),s=n(1),f=n(20),l=s("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(r=o):p=!0),null==r&&(r={}),f||a(r,l)||c(r,l,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},function(t,e,n){var r=n(3),o=n(12),i=n(19),u=n(84),c=i("IE_PROTO"),a=Object.prototype;t.exports=u?Object.getPrototypeOf:function(t){return t=o(t),r(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){var r=n(40),o=n(11),i=n(87);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,e,n){var r=n(40),o=n(15),i=n(1)("toStringTag"),u="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:u?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},function(t,e,n){"use strict";var r=n(63).charAt,o=n(18),i=n(57),u=o.set,c=o.getterFor("String Iterator");i(String,"String",(function(t){u(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,e=c(this),n=e.string,o=e.index;return o>=n.length?{value:void 0,done:!0}:(t=r(n,o),e.index+=t.length,{value:t,done:!1})}))},function(t,e,n){var r=n(24),o=n(16),i=function(t){return function(e,n){var i,u,c=String(o(e)),a=r(n),s=c.length;return a<0||a>=s?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===s||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,e,n){var r=n(0),o=n(65),i=n(39),u=n(4),c=n(1),a=c("iterator"),s=c("toStringTag"),f=i.values;for(var l in o){var p=r[l],v=p&&p.prototype;if(v){if(v[a]!==f)try{u(v,a,f)}catch(t){v[a]=f}if(v[s]||u(v,s,l),o[l])for(var h in i)if(v[h]!==i[h])try{u(v,h,i[h])}catch(t){v[h]=i[h]}}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){var r=n(6),o=n(2),i=n(3),u=Object.defineProperty,c={},a=function(t){throw t};t.exports=function(t,e){if(i(c,t))return c[t];e||(e={});var n=[][t],s=!!i(e,"ACCESSORS")&&e.ACCESSORS,f=i(e,0)?e[0]:a,l=i(e,1)?e[1]:void 0;return c[t]=!!n&&!o((function(){if(s&&!r)return!0;var t={length:-1};s?u(t,1,{enumerable:!0,get:a}):t[1]=1,n.call(t,f,l)}))}},function(t,e,n){"use strict";var r=n(38).forEach,o=n(93),i=n(66),u=o("forEach"),c=i("forEach");t.exports=u&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e,n){"use strict";var r=n(8),o=n(41);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,e,n){"use strict";var r=n(5);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){n(111),t.exports=n(110)},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(0),o=n(45),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){var r=n(22),o=n(31),i=n(33),u=n(5);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(u(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(10),o=n(23),i=n(75),u=function(t){return function(e,n,u){var c,a=r(e),s=o(a.length),f=i(u,s);if(t&&n!=n){for(;s>f;)if((c=a[f++])!=c)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,e,n){var r=n(24),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e,n){var r=n(2),o=/#|\.prototype\./,i=function(t,e){var n=c[u(t)];return n==s||n!=a&&("function"==typeof e?r(e):!!e)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,e,n){var r=n(6),o=n(7),i=n(5),u=n(36);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=u(e),c=r.length,a=0;c>a;)o.f(t,n=r[a++],e[n]);return t}},function(t,e,n){var r=n(22);t.exports=r("document","documentElement")},function(t,e,n){var r=n(10),o=n(31).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(9),o=n(51),i=n(1)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(1),o=n(35),i=n(7),u=r("unscopables"),c=Array.prototype;null==c[u]&&i.f(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},function(t,e,n){"use strict";var r=n(58).IteratorPrototype,o=n(35),i=n(13),u=n(37),c=n(14),a=function(){return this};t.exports=function(t,e,n){var s=e+" Iterator";return t.prototype=o(r,{next:i(1,n)}),u(t,s,!1,!0),c[s]=a,t}},function(t,e,n){var r=n(2);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,n){var r=n(5),o=n(86);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},function(t,e,n){var r=n(9);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,n){"use strict";var r=n(40),o=n(61);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,e,n){"use strict";var r=n(8),o=n(38).filter,i=n(89),u=n(66),c=i("filter"),a=u("filter");r({target:"Array",proto:!0,forced:!c||!a},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var r=n(2),o=n(1),i=n(90),u=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[];return(e.constructor={})[u]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){var r,o,i=n(0),u=n(91),c=i.process,a=c&&c.versions,s=a&&a.v8;s?o=(r=s.split("."))[0]+r[1]:u&&(!(r=u.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=u.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){var r=n(22);t.exports=r("navigator","userAgent")||""},function(t,e,n){"use strict";var r=n(8),o=n(67);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){var r=n(8),o=n(95);r({target:"Array",stat:!0,forced:!n(100)((function(t){Array.from(t)}))},{from:o})},function(t,e,n){"use strict";var r=n(54),o=n(12),i=n(96),u=n(97),c=n(23),a=n(98),s=n(99);t.exports=function(t){var e,n,f,l,p,v,h=o(t),g="function"==typeof this?this:Array,y=arguments.length,d=y>1?arguments[1]:void 0,b=void 0!==d,m=s(h),S=0;if(b&&(d=r(d,y>2?arguments[2]:void 0,2)),null==m||g==Array&&u(m))for(n=new g(e=c(h.length));e>S;S++)v=b?d(h[S],S):h[S],a(n,S,v);else for(p=(l=m.call(h)).next,n=new g;!(f=p.call(l)).done;S++)v=b?i(l,d,[f.value,S],!0):f.value,a(n,S,v);return n.length=S,n}},function(t,e,n){var r=n(5);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(1),o=n(14),i=r("iterator"),u=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||u[i]===t)}},function(t,e,n){"use strict";var r=n(17),o=n(7),i=n(13);t.exports=function(t,e,n){var u=r(e);u in t?o.f(t,u,i(0,n)):t[u]=n}},function(t,e,n){var r=n(61),o=n(14),i=n(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=0,u={next:function(){return{done:!!i++}},return:function(){o=!0}};u[r]=function(){return this},Array.from(u,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},function(t,e,n){var r=n(8),o=n(102);r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},function(t,e,n){"use strict";var r=n(6),o=n(2),i=n(36),u=n(33),c=n(26),a=n(12),s=n(27),f=Object.assign,l=Object.defineProperty;t.exports=!f||o((function(){if(r&&1!==f({b:1},f(l({},"a",{enumerable:!0,get:function(){l(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol();return t[n]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){e[t]=t})),7!=f({},t)[n]||"abcdefghijklmnopqrst"!=i(f({},e)).join("")}))?function(t,e){for(var n=a(t),o=arguments.length,f=1,l=u.f,p=c.f;o>f;)for(var v,h=s(arguments[f++]),g=l?i(h).concat(l(h)):i(h),y=g.length,d=0;y>d;)v=g[d++],r&&!p.call(h,v)||(n[v]=h[v]);return n}:f},function(t,e,n){"use strict";var r=n(2);function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,e,n){"use strict";var r=n(11),o=n(5),i=n(2),u=n(69),c=RegExp.prototype,a=c.toString,s=i((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),f="toString"!=a.name;(s||f)&&r(RegExp.prototype,"toString",(function(){var t=o(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in c)?u.call(t):n)}),{unsafe:!0})},function(t,e,n){"use strict";var r=n(106),o=n(5),i=n(12),u=n(23),c=n(24),a=n(16),s=n(107),f=n(108),l=Math.max,p=Math.min,v=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(t,e,n,r){var y=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,d=r.REPLACE_KEEPS_$0,b=y?"$":"$0";return[function(n,r){var o=a(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,r):e.call(String(o),n,r)},function(t,r){if(!y&&d||"string"==typeof r&&-1===r.indexOf(b)){var i=n(e,t,this,r);if(i.done)return i.value}var a=o(t),v=String(this),h="function"==typeof r;h||(r=String(r));var g=a.global;if(g){var S=a.unicode;a.lastIndex=0}for(var x=[];;){var A=f(a,v);if(null===A)break;if(x.push(A),!g)break;""===String(A[0])&&(a.lastIndex=s(v,u(a.lastIndex),S))}for(var O,E="",w=0,j=0;j<x.length;j++){A=x[j];for(var T=String(A[0]),P=l(p(c(A.index),v.length),0),k=[],_=1;_<A.length;_++)k.push(void 0===(O=A[_])?O:String(O));var C=A.groups;if(h){var $=[T].concat(k,P,v);void 0!==C&&$.push(C);var I=String(r.apply(void 0,$))}else I=m(T,v,P,k,C,r);P>=w&&(E+=v.slice(w,P)+I,w=P+T.length)}return E+v.slice(w)}];function m(t,n,r,o,u,c){var a=r+t.length,s=o.length,f=g;return void 0!==u&&(u=i(u),f=h),e.call(c,f,(function(e,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(a);case"<":c=u[i.slice(1,-1)];break;default:var f=+i;if(0===f)return e;if(f>s){var l=v(f/10);return 0===l?e:l<=s?void 0===o[l-1]?i.charAt(1):o[l-1]+i.charAt(1):e}c=o[f-1]}return void 0===c?"":c}))}}))},function(t,e,n){"use strict";n(68);var r=n(11),o=n(2),i=n(1),u=n(41),c=n(4),a=i("species"),s=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f="$0"==="a".replace(/./,"$0"),l=i("replace"),p=!!/./[l]&&""===/./[l]("a","$0"),v=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,l){var h=i(t),g=!o((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),y=g&&!o((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[a]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!g||!y||"replace"===t&&(!s||!f||p)||"split"===t&&!v){var d=/./[h],b=n(h,""[t],(function(t,e,n,r,o){return e.exec===u?g&&!o?{done:!0,value:d.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),m=b[0],S=b[1];r(String.prototype,t,m),r(RegExp.prototype,h,2==e?function(t,e){return S.call(t,this,e)}:function(t){return S.call(t,this)})}l&&c(RegExp.prototype[h],"sham",!0)}},function(t,e,n){"use strict";var r=n(63).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){var r=n(15),o=n(41);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},function(t,e,n){var r=n(0),o=n(65),i=n(67),u=n(4);for(var c in o){var a=r[c],s=a&&a.prototype;if(s&&s.forEach!==i)try{u(s,"forEach",i)}catch(t){s.forEach=i}}},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(42),n(55),n(56),n(39),n(60),n(62),n(64),n(88),n(92),n(94),n(101),n(68),n(104),n(105),n(109);function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);e&&"string"==typeof e?(this.settings=Object.assign({},{action:"hover",breakpoint:"(min-width: 48em)",onCreate:null,onOpen:null,onClose:null,onSubmenuOpen:null,onSubmenuClose:null},n),this.mq=window.matchMedia(this.settings.breakpoint),this.$menu=document.querySelector(e),this.$menu?(this.$menuToggle=document.querySelector('[aria-controls="'.concat(this.$menu.getAttribute("id"),'"]')),this.$menuToggle?(this.$submenus=this.$menu.querySelectorAll("ul"),this.$menuItems=this.$menu.querySelectorAll("li"),document.querySelector("html").classList.remove("no-js"),document.querySelector("html").classList.add("js"),this.setupMenu(),this.setupSubMenus(),this.setupListeners(),this.settings.onCreate&&"function"==typeof this.settings.onCreate&&this.settings.onCreate.call()):console.error("10up Navigation: No menu toggle found. A valid menu toggle must be used.")):console.error("10up Navigation: Target not found. A valid target (menu) must be used.")):console.error("10up Navigation: No target supplied. A valid target (menu) must be used.")}var e,n,i;return e=t,(n=[{key:"setupMenu",value:function(){var t=this.$menu.getAttribute("id"),e=this.$menuToggle.getAttribute("href").replace("#","");this.$menu.dataset.action=this.settings.action,t&&""!==t?(e!==t&&console.warn("10up Navigation: The menu toggle href and menu ID are not equal."),this.$menuToggle.setAttribute("aria-controls",e),this.setMQMenuA11y()):console.error("10up Navigation: Target (menu) must have a valid ID attribute.")}},{key:"setupSubMenus",value:function(){var t=this;this.$submenus.forEach((function(e,n){var r=e.previousElementSibling,o="tenUp-submenu-".concat(n);e.setAttribute("id",o),e.setAttribute("aria-label","Submenu"),r.setAttribute("aria-controls",o),r.setAttribute("aria-haspopup",!0),t.setMQSubbmenuA11y()}))}},{key:"setupListeners",value:function(){var t=this,e=this;this.mq.addListener(this.setMQ.bind(e)),this.$menuToggle.addEventListener("click",this.listenerMenuToggleClick.bind(e)),this.$submenus.forEach((function(n){var r=n.previousElementSibling;"hover"===t.settings.action&&r.addEventListener("focus",t.listenerSubmenuAnchorFocus.bind(e)),r.addEventListener("click",t.listenerSubmenuAnchorClick.bind(e))})),document.addEventListener("click",this.listenerDocumentClick.bind(e)),document.addEventListener("keyup",this.listenerDocumentKeyup.bind(e))}},{key:"setMQ",value:function(){this.setMQMenuA11y(),this.setMQSubbmenuA11y()}},{key:"setMQMenuA11y",value:function(){this.mq.matches?(this.$menu.setAttribute("aria-hidden",!1),this.$menuToggle.setAttribute("aria-expanded",!0),this.$menuToggle.setAttribute("aria-hidden",!0)):(this.$menu.setAttribute("aria-hidden",!0),this.$menuToggle.setAttribute("aria-expanded",!1),this.$menuToggle.setAttribute("aria-hidden",!1))}},{key:"setMQSubbmenuA11y",value:function(){this.$submenus.forEach((function(t){t.setAttribute("aria-hidden",!0)}))}},{key:"openSubmenu",value:function(t){t.setAttribute("aria-hidden",!1),this.settings.onSubmenuOpen&&"function"==typeof this.settings.onSubmenuOpen&&this.settings.onSubmenuOpen.call()}},{key:"closeSubmenu",value:function(t){var e=t.previousElementSibling,n=t.querySelectorAll('li > .sub-menu[aria-hidden="false"]');t.setAttribute("aria-hidden",!0),n&&this.closeSubmenus(n),this.mq.matches||e.focus(),this.settings.onSubmenuClose&&"function"==typeof this.settings.onSubmenuClose&&this.settings.onSubmenuClose.call()}},{key:"closeSubmenus",value:function(t){var e=this;t.forEach((function(t){e.closeSubmenu(t)}))}},{key:"listenerMenuToggleClick",value:function(t){var e="true"===this.$menuToggle.getAttribute("aria-expanded");t.preventDefault(),t.stopPropagation(),e?(this.$menu.setAttribute("aria-hidden",!0),this.$menuToggle.setAttribute("aria-expanded",!1),this.settings.onClose&&"function"==typeof this.settings.onClose&&this.settings.onClose.call()):(this.$menu.setAttribute("aria-hidden",!1),this.$menuToggle.setAttribute("aria-expanded",!0),this.$menu.querySelectorAll("a")[0].focus(),this.settings.onOpen&&"function"==typeof this.settings.onOpen&&this.settings.onOpen.call())}},{key:"listenerDocumentClick",value:function(){var t=this.$menu.querySelectorAll('.sub-menu[aria-hidden="false"]');0!==t.length&&this.closeSubmenus(t)}},{key:"listenerDocumentKeyup",value:function(t){var e=this.$menu.querySelectorAll('.sub-menu[aria-hidden="false"]');0!==e.length&&27===t.keyCode&&(this.closeSubmenus(e),"click"===this.settings.action&&e[0].previousElementSibling.focus())}},{key:"listenerSubmenuAnchorClick",value:function(t){var e=t.target,n=e.nextElementSibling,o="true"===n.getAttribute("aria-hidden"),i=this.$menu.querySelectorAll('.sub-menu[aria-hidden="false"]');i=r(i).filter((function(t){return!t.contains(e)})),this.closeSubmenus(i),"hover"===this.settings.action&&this.mq.matches||(t.preventDefault(),t.stopPropagation(),o?this.openSubmenu(n):this.closeSubmenu(n))}},{key:"listenerSubmenuAnchorFocus",value:function(t){var e=t.target,n=e.parentNode,r=e.nextElementSibling,o=n.parentNode.querySelectorAll(".sub-menu");r&&this.mq.matches&&(this.closeSubmenus(o),this.openSubmenu(r))}}])&&o(e.prototype,n),i&&o(e,i),t}();function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}"object"!==u(window.TenUp)&&(window.TenUp={}),window.TenUp.navigation=i}]);
//# sourceMappingURL=navigation.js.map