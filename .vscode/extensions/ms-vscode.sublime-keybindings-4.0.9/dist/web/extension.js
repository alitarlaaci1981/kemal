(()=>{"use strict";var e={652:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{a(o.next(e))}catch(e){i(e)}}function u(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,u)}a((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.activate=void 0;const r=n(549);t.activate=function(e){return o(this,void 0,void 0,(function*(){e.subscriptions.push(r.commands.registerCommand("extension.importFromSublime",(()=>{r.window.showWarningMessage("Importing from local Sublime settings is currently only possible when running in the desktop.",{modal:!0})})))}))}},549:e=>{e.exports=require("vscode")}},t={},n=function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}(652),o=exports;for(var r in n)o[r]=n[r];n.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();
//# sourceMappingURL=extension.js.map