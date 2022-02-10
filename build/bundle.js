var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let s,a;function u(t,e){return s||(s=document.createElement("a")),s.href=e,t===s.href}function c(t,e){t.appendChild(e)}function f(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function h(){return t=" ",document.createTextNode(t);var t}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){t.value=null==e?"":e}function p(t){a=t}const m=[],w=[],y=[],E=[],v=Promise.resolve();let A=!1;function N(t){y.push(t)}const B=new Set;let b=0;function I(){const t=a;do{for(;b<m.length;){const t=m[b];b++,p(t),M(t.$$)}for(p(null),m.length=0,b=0;w.length;)w.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];B.has(e)||(B.add(e),e())}y.length=0}while(m.length);for(;E.length;)E.pop()();A=!1,B.clear(),p(t)}function M(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const C=new Set;function P(t,e){-1===t.$$.dirty[0]&&(m.push(t),A||(A=!0,v.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(i,s,u,c,l,h,d,g=[-1]){const m=a;p(i);const w=i.$$={fragment:null,ctx:null,props:h,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(m?m.$$.context:[])),callbacks:n(),dirty:g,skip_bound:!1,root:s.target||m.$$.root};d&&d(w.root);let y=!1;if(w.ctx=u?u(i,s.props||{},((t,e,...n)=>{const r=n.length?n[0]:e;return w.ctx&&l(w.ctx[t],w.ctx[t]=r)&&(!w.skip_bound&&w.bound[t]&&w.bound[t](r),y&&P(i,t)),e})):[],w.update(),y=!0,r(w.before_update),w.fragment=!!c&&c(w.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);w.fragment&&w.fragment.l(t),t.forEach(f)}else w.fragment&&w.fragment.c();s.intro&&((E=i.$$.fragment)&&E.i&&(C.delete(E),E.i(v))),function(t,n,i,s){const{fragment:a,on_mount:u,on_destroy:c,after_update:f}=t.$$;a&&a.m(n,i),s||N((()=>{const n=u.map(e).filter(o);c?c.push(...n):r(n),t.$$.on_mount=[]})),f.forEach(N)}(i,s.target,s.anchor,s.customElement),I()}var E,v;p(m)}var T=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then};let x;const L=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];var $=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},U=function(t){return L[t]},_=function(t){let e=0;for(;0!==t;)e++,t>>>=1;return e},k=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');x=t},F=function(){return void 0!==x},S=function(t){return x(t)};function z(t){var e={exports:{}};return t(e,e.exports),e.exports}var Y=z((function(t,e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,n){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(t){return n}}}));function D(){this.buffer=[],this.length=0}D.prototype={get:function(t){const e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let n=0;n<e;n++)this.putBit(1==(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var J=D;function H(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}H.prototype.set=function(t,e,n,r){const o=t*this.size+e;this.data[o]=n,r&&(this.reservedBit[o]=!0)},H.prototype.get=function(t,e){return this.data[t*this.size+e]},H.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n},H.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var K=H,O=z((function(t,e){const n=$;e.getRowColCoords=function(t){if(1===t)return[];const e=Math.floor(t/7)+2,r=n(t),o=145===r?26:2*Math.ceil((r-13)/(2*e-2)),i=[r-7];for(let t=1;t<e-1;t++)i[t]=i[t-1]-o;return i.push(6),i.reverse()},e.getPositions=function(t){const n=[],r=e.getRowColCoords(t),o=r.length;for(let t=0;t<o;t++)for(let e=0;e<o;e++)0===t&&0===e||0===t&&e===o-1||t===o-1&&0===e||n.push([r[t],r[e]]);return n}}));const q=$;var Q=function(t){const e=q(t);return[[0,0],[e-7,0],[0,e-7]]},j=z((function(t,e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const n=3,r=3,o=40,i=10;function s(t,n,r){switch(t){case e.Patterns.PATTERN000:return(n+r)%2==0;case e.Patterns.PATTERN001:return n%2==0;case e.Patterns.PATTERN010:return r%3==0;case e.Patterns.PATTERN011:return(n+r)%3==0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2==0;case e.Patterns.PATTERN101:return n*r%2+n*r%3==0;case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2==0;case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){const e=t.size;let r=0,o=0,i=0,s=null,a=null;for(let u=0;u<e;u++){o=i=0,s=a=null;for(let c=0;c<e;c++){let e=t.get(u,c);e===s?o++:(o>=5&&(r+=n+(o-5)),s=e,o=1),e=t.get(c,u),e===a?i++:(i>=5&&(r+=n+(i-5)),a=e,i=1)}o>=5&&(r+=n+(o-5)),i>=5&&(r+=n+(i-5))}return r},e.getPenaltyN2=function(t){const e=t.size;let n=0;for(let r=0;r<e-1;r++)for(let o=0;o<e-1;o++){const e=t.get(r,o)+t.get(r,o+1)+t.get(r+1,o)+t.get(r+1,o+1);4!==e&&0!==e||n++}return n*r},e.getPenaltyN3=function(t){const e=t.size;let n=0,r=0,i=0;for(let o=0;o<e;o++){r=i=0;for(let s=0;s<e;s++)r=r<<1&2047|t.get(o,s),s>=10&&(1488===r||93===r)&&n++,i=i<<1&2047|t.get(s,o),s>=10&&(1488===i||93===i)&&n++}return n*o},e.getPenaltyN4=function(t){let e=0;const n=t.data.length;for(let r=0;r<n;r++)e+=t.data[r];return Math.abs(Math.ceil(100*e/n/5)-10)*i},e.applyMask=function(t,e){const n=e.size;for(let r=0;r<n;r++)for(let o=0;o<n;o++)e.isReserved(o,r)||e.xor(o,r,s(t,o,r))},e.getBestMask=function(t,n){const r=Object.keys(e.Patterns).length;let o=0,i=1/0;for(let s=0;s<r;s++){n(s),e.applyMask(s,t);const r=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(s,t),r<i&&(i=r,o=s)}return o}}));const V=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Z=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];var X=function(t,e){switch(e){case Y.L:return V[4*(t-1)+0];case Y.M:return V[4*(t-1)+1];case Y.Q:return V[4*(t-1)+2];case Y.H:return V[4*(t-1)+3];default:return}},W=function(t,e){switch(e){case Y.L:return Z[4*(t-1)+0];case Y.M:return Z[4*(t-1)+1];case Y.Q:return Z[4*(t-1)+2];case Y.H:return Z[4*(t-1)+3];default:return}};const G=new Uint8Array(512),tt=new Uint8Array(256);!function(){let t=1;for(let e=0;e<255;e++)G[e]=t,tt[t]=e,t<<=1,256&t&&(t^=285);for(let t=255;t<512;t++)G[t]=G[t-255]}();var et=function(t){return G[t]},nt=function(t,e){return 0===t||0===e?0:G[tt[t]+tt[e]]},rt=z((function(t,e){e.mul=function(t,e){const n=new Uint8Array(t.length+e.length-1);for(let r=0;r<t.length;r++)for(let o=0;o<e.length;o++)n[r+o]^=nt(t[r],e[o]);return n},e.mod=function(t,e){let n=new Uint8Array(t);for(;n.length-e.length>=0;){const t=n[0];for(let r=0;r<e.length;r++)n[r]^=nt(e[r],t);let r=0;for(;r<n.length&&0===n[r];)r++;n=n.slice(r)}return n},e.generateECPolynomial=function(t){let n=new Uint8Array([1]);for(let r=0;r<t;r++)n=e.mul(n,new Uint8Array([1,et(r)]));return n}}));function ot(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}ot.prototype.initialize=function(t){this.degree=t,this.genPoly=rt.generateECPolynomial(this.degree)},ot.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const n=rt.mod(e,this.genPoly),r=this.degree-n.length;if(r>0){const t=new Uint8Array(this.degree);return t.set(n,r),t}return n};var it=ot,st=function(t){return!isNaN(t)&&t>=1&&t<=40};const at="[0-9]+";let ut="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";ut=ut.replace(/u/g,"\\u");const ct="(?:(?![A-Z0-9 $%*+\\-./:]|"+ut+")(?:.|[\r\n]))+";var ft=new RegExp(ut,"g"),lt=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),ht=new RegExp(ct,"g"),dt=new RegExp(at,"g"),gt=new RegExp("[A-Z $%*+\\-./:]+","g");const pt=new RegExp("^"+ut+"$"),mt=new RegExp("^[0-9]+$"),wt=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");var yt={KANJI:ft,BYTE_KANJI:lt,BYTE:ht,NUMERIC:dt,ALPHANUMERIC:gt,testKanji:function(t){return pt.test(t)},testNumeric:function(t){return mt.test(t)},testAlphanumeric:function(t){return wt.test(t)}},Et=z((function(t,e){e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!st(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return yt.testNumeric(t)?e.NUMERIC:yt.testAlphanumeric(t)?e.ALPHANUMERIC:yt.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,n){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}(t)}catch(t){return n}}})),vt=z((function(t,e){const n=_(7973);function r(t,e){return Et.getCharCountIndicator(t,e)+4}function o(t,e){let n=0;return t.forEach((function(t){const o=r(t.mode,e);n+=o+t.getBitsLength()})),n}e.from=function(t,e){return st(t)?parseInt(t,10):e},e.getCapacity=function(t,e,n){if(!st(t))throw new Error("Invalid QR Code version");void 0===n&&(n=Et.BYTE);const o=8*(U(t)-W(t,e));if(n===Et.MIXED)return o;const i=o-r(n,t);switch(n){case Et.NUMERIC:return Math.floor(i/10*3);case Et.ALPHANUMERIC:return Math.floor(i/11*2);case Et.KANJI:return Math.floor(i/13);case Et.BYTE:default:return Math.floor(i/8)}},e.getBestVersionForData=function(t,n){let r;const i=Y.from(n,Y.M);if(Array.isArray(t)){if(t.length>1)return function(t,n){for(let r=1;r<=40;r++)if(o(t,r)<=e.getCapacity(r,n,Et.MIXED))return r}(t,i);if(0===t.length)return 1;r=t[0]}else r=t;return function(t,n,r){for(let o=1;o<=40;o++)if(n<=e.getCapacity(o,r,t))return o}(r.mode,r.getLength(),i)},e.getEncodedBits=function(t){if(!st(t)||t<7)throw new Error("Invalid QR Code version");let e=t<<12;for(;_(e)-n>=0;)e^=7973<<_(e)-n;return t<<12|e}}));const At=_(1335);var Nt=function(t,e){const n=t.bit<<3|e;let r=n<<10;for(;_(r)-At>=0;)r^=1335<<_(r)-At;return 21522^(n<<10|r)};function Bt(t){this.mode=Et.NUMERIC,this.data=t.toString()}Bt.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},Bt.prototype.getLength=function(){return this.data.length},Bt.prototype.getBitsLength=function(){return Bt.getBitsLength(this.data.length)},Bt.prototype.write=function(t){let e,n,r;for(e=0;e+3<=this.data.length;e+=3)n=this.data.substr(e,3),r=parseInt(n,10),t.put(r,10);const o=this.data.length-e;o>0&&(n=this.data.substr(e),r=parseInt(n,10),t.put(r,3*o+1))};var bt=Bt;const It=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Mt(t){this.mode=Et.ALPHANUMERIC,this.data=t}Mt.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},Mt.prototype.getLength=function(){return this.data.length},Mt.prototype.getBitsLength=function(){return Mt.getBitsLength(this.data.length)},Mt.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let n=45*It.indexOf(this.data[e]);n+=It.indexOf(this.data[e+1]),t.put(n,11)}this.data.length%2&&t.put(It.indexOf(this.data[e]),6)};var Ct=Mt;function Pt(t){this.mode=Et.BYTE,this.data=new Uint8Array(function(t){for(var e=[],n=t.length,r=0;r<n;r++){var o=t.charCodeAt(r);if(o>=55296&&o<=56319&&n>r+1){var i=t.charCodeAt(r+1);i>=56320&&i<=57343&&(o=1024*(o-55296)+i-56320+65536,r+=1)}o<128?e.push(o):o<2048?(e.push(o>>6|192),e.push(63&o|128)):o<55296||o>=57344&&o<65536?(e.push(o>>12|224),e.push(o>>6&63|128),e.push(63&o|128)):o>=65536&&o<=1114111?(e.push(o>>18|240),e.push(o>>12&63|128),e.push(o>>6&63|128),e.push(63&o|128)):e.push(239,191,189)}return new Uint8Array(e).buffer}(t))}Pt.getBitsLength=function(t){return 8*t},Pt.prototype.getLength=function(){return this.data.length},Pt.prototype.getBitsLength=function(){return Pt.getBitsLength(this.data.length)},Pt.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var Rt=Pt;function Tt(t){this.mode=Et.KANJI,this.data=t}Tt.getBitsLength=function(t){return 13*t},Tt.prototype.getLength=function(){return this.data.length},Tt.prototype.getBitsLength=function(){return Tt.getBitsLength(this.data.length)},Tt.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=S(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else{if(!(n>=57408&&n<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13)}};var xt=Tt,Lt=z((function(t){var e={single_source_shortest_paths:function(t,n,r){var o={},i={};i[n]=0;var s,a,u,c,f,l,h,d=e.PriorityQueue.make();for(d.push(n,0);!d.empty();)for(u in a=(s=d.pop()).value,c=s.cost,f=t[a]||{})f.hasOwnProperty(u)&&(l=c+f[u],h=i[u],(void 0===i[u]||h>l)&&(i[u]=l,d.push(u,l),o[u]=a));if(void 0!==r&&void 0===i[r]){var g=["Could not find a path from ",n," to ",r,"."].join("");throw new Error(g)}return o},extract_shortest_path_from_predecessor_list:function(t,e){for(var n=[],r=e;r;)n.push(r),r=t[r];return n.reverse(),n},find_path:function(t,n,r){var o=e.single_source_shortest_paths(t,n,r);return e.extract_shortest_path_from_predecessor_list(o,r)},PriorityQueue:{make:function(t){var n,r=e.PriorityQueue,o={};for(n in t=t||{},r)r.hasOwnProperty(n)&&(o[n]=r[n]);return o.queue=[],o.sorter=t.sorter||r.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var n={value:t,cost:e};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e})),$t=z((function(t,e){function n(t){return unescape(encodeURIComponent(t)).length}function r(t,e,n){const r=[];let o;for(;null!==(o=t.exec(n));)r.push({data:o[0],index:o.index,mode:e,length:o[0].length});return r}function o(t){const e=r(yt.NUMERIC,Et.NUMERIC,t),n=r(yt.ALPHANUMERIC,Et.ALPHANUMERIC,t);let o,i;F()?(o=r(yt.BYTE,Et.BYTE,t),i=r(yt.KANJI,Et.KANJI,t)):(o=r(yt.BYTE_KANJI,Et.BYTE,t),i=[]);return e.concat(n,o,i).sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function i(t,e){switch(e){case Et.NUMERIC:return bt.getBitsLength(t);case Et.ALPHANUMERIC:return Ct.getBitsLength(t);case Et.KANJI:return xt.getBitsLength(t);case Et.BYTE:return Rt.getBitsLength(t)}}function s(t,e){let n;const r=Et.getBestModeForData(t);if(n=Et.from(e,r),n!==Et.BYTE&&n.bit<r.bit)throw new Error('"'+t+'" cannot be encoded with mode '+Et.toString(n)+".\n Suggested mode is: "+Et.toString(r));switch(n!==Et.KANJI||F()||(n=Et.BYTE),n){case Et.NUMERIC:return new bt(t);case Et.ALPHANUMERIC:return new Ct(t);case Et.KANJI:return new xt(t);case Et.BYTE:return new Rt(t)}}e.fromArray=function(t){return t.reduce((function(t,e){return"string"==typeof e?t.push(s(e,null)):e.data&&t.push(s(e.data,e.mode)),t}),[])},e.fromString=function(t,r){const s=function(t){const e=[];for(let r=0;r<t.length;r++){const o=t[r];switch(o.mode){case Et.NUMERIC:e.push([o,{data:o.data,mode:Et.ALPHANUMERIC,length:o.length},{data:o.data,mode:Et.BYTE,length:o.length}]);break;case Et.ALPHANUMERIC:e.push([o,{data:o.data,mode:Et.BYTE,length:o.length}]);break;case Et.KANJI:e.push([o,{data:o.data,mode:Et.BYTE,length:n(o.data)}]);break;case Et.BYTE:e.push([{data:o.data,mode:Et.BYTE,length:n(o.data)}])}}return e}(o(t)),a=function(t,e){const n={},r={start:{}};let o=["start"];for(let s=0;s<t.length;s++){const a=t[s],u=[];for(let t=0;t<a.length;t++){const c=a[t],f=""+s+t;u.push(f),n[f]={node:c,lastCount:0},r[f]={};for(let t=0;t<o.length;t++){const s=o[t];n[s]&&n[s].node.mode===c.mode?(r[s][f]=i(n[s].lastCount+c.length,c.mode)-i(n[s].lastCount,c.mode),n[s].lastCount+=c.length):(n[s]&&(n[s].lastCount=c.length),r[s][f]=i(c.length,c.mode)+4+Et.getCharCountIndicator(c.mode,e))}}o=u}for(let t=0;t<o.length;t++)r[o[t]].end=0;return{map:r,table:n}}(s,r),u=Lt.find_path(a.map,"start","end"),c=[];for(let t=1;t<u.length-1;t++)c.push(a.table[u[t]].node);return e.fromArray(function(t){return t.reduce((function(t,e){const n=t.length-1>=0?t[t.length-1]:null;return n&&n.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}(c))},e.rawSplit=function(t){return e.fromArray(o(t))}}));function Ut(t,e,n){const r=t.size,o=Nt(e,n);let i,s;for(i=0;i<15;i++)s=1==(o>>i&1),i<6?t.set(i,8,s,!0):i<8?t.set(i+1,8,s,!0):t.set(r-15+i,8,s,!0),i<8?t.set(8,r-i-1,s,!0):i<9?t.set(8,15-i-1+1,s,!0):t.set(8,15-i-1,s,!0);t.set(r-8,8,1,!0)}function _t(t,e,n){const r=new J;n.forEach((function(e){r.put(e.mode.bit,4),r.put(e.getLength(),Et.getCharCountIndicator(e.mode,t)),e.write(r)}));const o=8*(U(t)-W(t,e));for(r.getLengthInBits()+4<=o&&r.put(0,4);r.getLengthInBits()%8!=0;)r.putBit(0);const i=(o-r.getLengthInBits())/8;for(let t=0;t<i;t++)r.put(t%2?17:236,8);return function(t,e,n){const r=U(e),o=W(e,n),i=r-o,s=X(e,n),a=s-r%s,u=Math.floor(r/s),c=Math.floor(i/s),f=c+1,l=u-c,h=new it(l);let d=0;const g=new Array(s),p=new Array(s);let m=0;const w=new Uint8Array(t.buffer);for(let t=0;t<s;t++){const e=t<a?c:f;g[t]=w.slice(d,d+e),p[t]=h.encode(g[t]),d+=e,m=Math.max(m,e)}const y=new Uint8Array(r);let E,v,A=0;for(E=0;E<m;E++)for(v=0;v<s;v++)E<g[v].length&&(y[A++]=g[v][E]);for(E=0;E<l;E++)for(v=0;v<s;v++)y[A++]=p[v][E];return y}(r,t,e)}function kt(t,e,n,r){let o;if(Array.isArray(t))o=$t.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");{let r=e;if(!r){const e=$t.rawSplit(t);r=vt.getBestVersionForData(e,n)}o=$t.fromString(t,r||40)}}const i=vt.getBestVersionForData(o,n);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<i)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+i+".\n")}else e=i;const s=_t(e,n,o),a=$(e),u=new K(a);return function(t,e){const n=t.size,r=Q(e);for(let e=0;e<r.length;e++){const o=r[e][0],i=r[e][1];for(let e=-1;e<=7;e++)if(!(o+e<=-1||n<=o+e))for(let r=-1;r<=7;r++)i+r<=-1||n<=i+r||(e>=0&&e<=6&&(0===r||6===r)||r>=0&&r<=6&&(0===e||6===e)||e>=2&&e<=4&&r>=2&&r<=4?t.set(o+e,i+r,!0,!0):t.set(o+e,i+r,!1,!0))}}(u,e),function(t){const e=t.size;for(let n=8;n<e-8;n++){const e=n%2==0;t.set(n,6,e,!0),t.set(6,n,e,!0)}}(u),function(t,e){const n=O.getPositions(e);for(let e=0;e<n.length;e++){const r=n[e][0],o=n[e][1];for(let e=-2;e<=2;e++)for(let n=-2;n<=2;n++)-2===e||2===e||-2===n||2===n||0===e&&0===n?t.set(r+e,o+n,!0,!0):t.set(r+e,o+n,!1,!0)}}(u,e),Ut(u,n,0),e>=7&&function(t,e){const n=t.size,r=vt.getEncodedBits(e);let o,i,s;for(let e=0;e<18;e++)o=Math.floor(e/3),i=e%3+n-8-3,s=1==(r>>e&1),t.set(o,i,s,!0),t.set(i,o,s,!0)}(u,e),function(t,e){const n=t.size;let r=-1,o=n-1,i=7,s=0;for(let a=n-1;a>0;a-=2)for(6===a&&a--;;){for(let n=0;n<2;n++)if(!t.isReserved(o,a-n)){let r=!1;s<e.length&&(r=1==(e[s]>>>i&1)),t.set(o,a-n,r),i--,-1===i&&(s++,i=7)}if(o+=r,o<0||n<=o){o-=r,r=-r;break}}}(u,s),isNaN(r)&&(r=j.getBestMask(u,Ut.bind(null,u,n))),j.applyMask(r,u),Ut(u,n,r),{modules:u,version:e,errorCorrectionLevel:n,maskPattern:r,segments:o}}var Ft=function(t,e){if(void 0===t||""===t)throw new Error("No input text");let n,r,o=Y.M;return void 0!==e&&(o=Y.from(e.errorCorrectionLevel,Y.M),n=vt.from(e.version),r=j.from(e.maskPattern),e.toSJISFunc&&k(e.toSJISFunc)),kt(t,n,o,r)},St=z((function(t,e){function n(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");const n=parseInt(e.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={});const e=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,r=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:r,scale:r?4:o,margin:e,color:{dark:n(t.color.dark||"#000000ff"),light:n(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,n){const r=e.getScale(t,n);return Math.floor((t+2*n.margin)*r)},e.qrToImageData=function(t,n,r){const o=n.modules.size,i=n.modules.data,s=e.getScale(o,r),a=Math.floor((o+2*r.margin)*s),u=r.margin*s,c=[r.color.light,r.color.dark];for(let e=0;e<a;e++)for(let n=0;n<a;n++){let f=4*(e*a+n),l=r.color.light;if(e>=u&&n>=u&&e<a-u&&n<a-u){l=c[i[Math.floor((e-u)/s)*o+Math.floor((n-u)/s)]?1:0]}t[f++]=l.r,t[f++]=l.g,t[f++]=l.b,t[f]=l.a}}})),zt=z((function(t,e){e.render=function(t,e,n){let r=n,o=e;void 0!==r||e&&e.getContext||(r=e,e=void 0),e||(o=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),r=St.getOptions(r);const i=St.getImageWidth(t.modules.size,r),s=o.getContext("2d"),a=s.createImageData(i,i);return St.qrToImageData(a.data,t,r),function(t,e,n){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=n,e.width=n,e.style.height=n+"px",e.style.width=n+"px"}(s,o,i),s.putImageData(a,0,0),o},e.renderToDataURL=function(t,n,r){let o=r;void 0!==o||n&&n.getContext||(o=n,n=void 0),o||(o={});const i=e.render(t,n,o),s=o.type||"image/png",a=o.rendererOpts||{};return i.toDataURL(s,a.quality)}}));function Yt(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function Dt(t,e,n){let r=t+e;return void 0!==n&&(r+=" "+n),r}var Jt=function(t,e,n){const r=St.getOptions(e),o=t.modules.size,i=t.modules.data,s=o+2*r.margin,a=r.color.light.a?"<path "+Yt(r.color.light,"fill")+' d="M0 0h'+s+"v"+s+'H0z"/>':"",u="<path "+Yt(r.color.dark,"stroke")+' d="'+function(t,e,n){let r="",o=0,i=!1,s=0;for(let a=0;a<t.length;a++){const u=Math.floor(a%e),c=Math.floor(a/e);u||i||(i=!0),t[a]?(s++,a>0&&u>0&&t[a-1]||(r+=i?Dt("M",u+n,.5+c+n):Dt("m",o,0),o=0,i=!1),u+1<e&&t[a+1]||(r+=Dt("h",s),s=0)):o++}return r}(i,o,r.margin)+'"/>',c='viewBox="0 0 '+s+" "+s+'"',f='<svg xmlns="http://www.w3.org/2000/svg" '+(r.width?'width="'+r.width+'" height="'+r.width+'" ':"")+c+' shape-rendering="crispEdges">'+a+u+"</svg>\n";return"function"==typeof n&&n(null,f),f};function Ht(t,e,n,r,o){const i=[].slice.call(arguments,1),s=i.length,a="function"==typeof i[s-1];if(!a&&!T())throw new Error("Callback required as last argument");if(!a){if(s<1)throw new Error("Too few arguments provided");return 1===s?(n=e,e=r=void 0):2!==s||e.getContext||(r=n,n=e,e=void 0),new Promise((function(o,i){try{const i=Ft(n,r);o(t(i,e,r))}catch(t){i(t)}}))}if(s<2)throw new Error("Too few arguments provided");2===s?(o=n,n=e,e=r=void 0):3===s&&(e.getContext&&void 0===o?(o=r,r=void 0):(o=r,r=n,n=e,e=void 0));try{const i=Ft(n,r);o(null,t(i,e,r))}catch(t){o(t)}}var Kt={create:Ft,toCanvas:Ht.bind(null,zt.render),toDataURL:Ht.bind(null,zt.renderToDataURL),toString:Ht.bind(null,(function(t,e,n){return Jt(t,n)}))};function Ot(e){let n,r,o,i,s,a,p,m,w;return{c(){n=l("main"),r=l("input"),o=h(),i=l("hr"),s=h(),a=l("img"),d(r,"type","text"),u(a.src,p=e[1])||d(a,"src",p),d(a,"alt",e[0]),d(a,"height",qt),d(a,"width",Qt),d(n,"class","svelte-11has9b")},m(t,u){var f,l,h,d;!function(t,e,n){t.insertBefore(e,n||null)}(t,n,u),c(n,r),g(r,e[0]),c(n,o),c(n,i),c(n,s),c(n,a),m||(f=r,l="input",h=e[2],f.addEventListener(l,h,d),w=()=>f.removeEventListener(l,h,d),m=!0)},p(t,[e]){1&e&&r.value!==t[0]&&g(r,t[0]),2&e&&!u(a.src,p=t[1])&&d(a,"src",p),1&e&&d(a,"alt",t[0])},i:t,o:t,d(t){t&&f(n),m=!1,w()}}}let qt=240,Qt=240;function jt(t,e,n){let r="https://github.com/zasdaym",o="";return t.$$.update=()=>{1&t.$$.dirty&&Kt.toDataURL(r,{width:240}).then((t=>n(1,o=t)))},[r,o,function(){r=this.value,n(0,r)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),R(this,t,jt,Ot,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
