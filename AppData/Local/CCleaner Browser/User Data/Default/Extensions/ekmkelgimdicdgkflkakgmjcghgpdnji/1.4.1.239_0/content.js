!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}({4:function(e,t){!function(){if(window.avast_engagement)return;window.avast_engagement=!0;let e=document.createElement("iframe");e.setAttribute("scrolling",!1),e.setAttribute("seamless",!0),Object.assign(e.style,{display:"block",width:"100%",height:"100%",margin:"0",padding:"0",position:"fixed",top:"0",right:"0",border:"0","z-index":"2147483647"}),chrome.runtime.onMessage.addListener((t,...n)=>{console.log("inject message",t,n),"close"==t.action?document.documentElement.removeChild(e):"open"==t.action?(e.src=t.url,Object.assign(e.style,{width:t.width+"px",height:t.height+"px"}),document.documentElement.appendChild(e)):"setStyle"==t.action&&Object.assign(e.style,t.style)})}()}});