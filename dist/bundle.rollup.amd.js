define(function(){"use strict";function n(n){return null!=n&&"object"==typeof n&&!0===n["@@functional/placeholder"]}function t(t){return function e(r){return 0===arguments.length||n(r)?e:t.apply(this,arguments)}}function e(e){return function r(o,u){switch(arguments.length){case 0:return r;case 1:return n(o)?r:t(function(n){return e(o,n)});default:return n(o)&&n(u)?r:n(o)?t(function(n){return e(n,u)}):n(u)?t(function(n){return e(o,n)}):e(o,u)}}}function r(n){return"[object String]"===Object.prototype.toString.call(n)}function o(n,t){return Object.prototype.hasOwnProperty.call(t,n)}function u(n){for(var t,e=[];!(t=n.next()).done;)e.push(t.value);return e}function a(n,t,e){for(var r=0,o=e.length;r<o;){if(n(t,e[r]))return!0;r+=1}return!1}function c(n){var t=String(n).match(/^function (\w*)/);return null==t?"":t[1]}function i(n,t,e,r){function o(n,t){return l(n,t,e.slice(),r.slice())}var c=u(n);return!a(function(n,t){return!a(o,t,n)},u(t),c)}function l(n,t,e,r){if(S(n,t))return!0;var u=A(n);if(u!==A(t))return!1;if(null==n||null==t)return!1;if("function"==typeof n["fantasy-land/equals"]||"function"==typeof t["fantasy-land/equals"])return"function"==typeof n["fantasy-land/equals"]&&n["fantasy-land/equals"](t)&&"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](n);if("function"==typeof n.equals||"function"==typeof t.equals)return"function"==typeof n.equals&&n.equals(t)&&"function"==typeof t.equals&&t.equals(n);switch(u){case"Arguments":case"Array":case"Object":if("function"==typeof n.constructor&&"Promise"===c(n.constructor))return n===t;break;case"Boolean":case"Number":case"String":if(typeof n!=typeof t||!S(n.valueOf(),t.valueOf()))return!1;break;case"Date":if(!S(n.valueOf(),t.valueOf()))return!1;break;case"Error":return n.name===t.name&&n.message===t.message;case"RegExp":if(n.source!==t.source||n.global!==t.global||n.ignoreCase!==t.ignoreCase||n.multiline!==t.multiline||n.sticky!==t.sticky||n.unicode!==t.unicode)return!1}for(var a=e.length-1;a>=0;){if(e[a]===n)return r[a]===t;a-=1}switch(u){case"Map":return n.size===t.size&&i(n.entries(),t.entries(),e.concat([n]),r.concat([t]));case"Set":return n.size===t.size&&i(n.values(),t.values(),e.concat([n]),r.concat([t]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var f=m(n);if(f.length!==m(t).length)return!1;var s=e.concat([n]),y=r.concat([t]);for(a=f.length-1;a>=0;){var g=f[a];if(!o(g,t)||!l(t[g],n[g],s,y))return!1;a-=1}return!0}function f(n){return n}function s(n){return"[object Number]"===Object.prototype.toString.call(n)}var y=Array.isArray||function(n){return null!=n&&n.length>=0&&"[object Array]"===Object.prototype.toString.call(n)},g=t(function(n){return!!y(n)||!!n&&("object"==typeof n&&(!r(n)&&(1===n.nodeType?!!n.length:0===n.length||n.length>0&&(n.hasOwnProperty(0)&&n.hasOwnProperty(n.length-1)))))}),p=("undefined"!=typeof Symbol&&Symbol.iterator,Object.prototype.toString),b=function(){return"[object Arguments]"===p.call(arguments)?function(n){return"[object Arguments]"===p.call(n)}:function(n){return o("callee",n)}},h=!{toString:null}.propertyIsEnumerable("toString"),v=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],O=function(){return arguments.propertyIsEnumerable("length")}(),j=function(n,t){for(var e=0;e<n.length;){if(n[e]===t)return!0;e+=1}return!1},m=t("function"!=typeof Object.keys||O?function(n){if(Object(n)!==n)return[];var t,e,r=[],u=O&&b(n);for(t in n)!o(t,n)||u&&"length"===t||(r[r.length]=t);if(h)for(e=v.length-1;e>=0;)o(t=v[e],n)&&!j(r,t)&&(r[r.length]=t),e-=1;return r}:function(n){return Object(n)!==n?[]:Object.keys(n)}),d=e(function(n,t){for(var e=t,r=0;r<n.length;){if(null==e)return;e=e[n[r]],r+=1}return e}),A=(Number.isInteger,t(function(n){return null===n?"Null":void 0===n?"Undefined":Object.prototype.toString.call(n).slice(8,-1)})),S=e(function(n,t){return n===t?0!==n||1/n==1/t:n!==n&&t!==t}),q=e(function(n,t){return l(n,t,[],[])}),w=function(n){return(n<10?"0":"")+n},E=(Date.prototype.toISOString,"function"==typeof Object.assign?Object.assign:function(n){if(null==n)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(n),e=1,r=arguments.length;e<r;){var u=arguments[e];if(null!=u)for(var a in u)o(a,u)&&(t[a]=u[a]);e+=1}return t}),k=e(function(n,t){var e={};return e[n]=t,e}),I=(Array,String,Object,"\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff");String.prototype.trim;console.log("===================================="),console.log("say No!"),console.log("===================================="),console.log("===isEqual==============================="),console.log("3 is qual to 4? ",q(3,4)),console.log("====================================")});
