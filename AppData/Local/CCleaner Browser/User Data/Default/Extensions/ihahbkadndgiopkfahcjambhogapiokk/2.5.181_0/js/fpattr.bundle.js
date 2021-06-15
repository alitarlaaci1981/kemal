/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 180);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Resources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return StorageKeys; });
/* unused harmony export Brand */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HookedFunctionsMap; });
var Resources = {
  Strings: {},
  Icons: {},
  Animations: {},
  Links: {
    Info: {
      Avast: "https://extension.avastbrowser.com/afp/about/",
      AVG: "https://extension.avgbrowser.com/afp/about/",
      CCleaner: "https://extension.ccleanerbrowser.com/afp/about/"
    }
  }
};
var StorageKeys = {
  AppSettings: {
    KEY: "settings",
    DISABLED: "disabled",
    WHITELIST: "whitelist",
    NOTIFICATIONS: "notifications",
    SOCIAL_MEDIA_DETECTION_PROTECTION: "socialMediaProtection",
    PROFILES: "profiles"
  },
  NOISE: "noise",
  AFPData: {
    KEY: "AFPData",
    FINGERPRINT_ATTEMPTS_DETECTED_COUNTER: "A1"
  }
};
var Brand = {
  AVAST: "Avast",
  AVG: "AVG"
};
var Strings = {
  APP_NAME: chrome.i18n.getMessage("appName"),
  APP_DESCRIPTION: chrome.i18n.getMessage("appDescription"),
  SETTINGS_SOCIAL_MEDIA_LOGIN_DETECTION_PREVENTION: chrome.i18n.getMessage('settingsSocialMediaLoginDetectionPrevention'),
  SETTINGS_ADVANCED: chrome.i18n.getMessage("settingsAdvanced"),
  POPUP_FINGERPRINT_ATTEMPTS_DETECTED: chrome.i18n.getMessage("popupTotalFingerprintsAttemptsDetected"),
  POPUP_STATUS_ENABLED: chrome.i18n.getMessage("popupStatusEnabled"),
  POPUP_STATUS_DISABLED: chrome.i18n.getMessage("popupStatusDisabled")
};
var HookedFunctionsMap = {
  Canvas: 1,
  WebGL: 2,
  AudioBuffer: 3,
  AudioContext: 4,
  Plugins: 5,
  MediaDevices: 6,
  ReadPixels: 7,
  GetShaderPrecisionFormat: 8,
  ClientRects: 9,
  GetParameter: 10
};


/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Browser; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);




var Browser = /*#__PURE__*/function () {
  function Browser() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Browser);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Browser, null, [{
    key: "getResource",
    value: function getResource(file) {
      return chrome.extension.getURL(file);
    }
  }, {
    key: "getStorageSync",
    value: function getStorageSync(key) {
      return new Promise(function (resolve, reject) {
        chrome.storage.sync.get(key, function (result) {
          if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(result) === "object" && result[key]) {
            resolve(result[key]);
          } else {
            resolve(null);
          }
        });
      });
    }
  }, {
    key: "setStorageSync",
    value: function setStorageSync(key, data) {
      var _object;

      var object = (_object = {}, _object[key] = data, _object);
      chrome.storage.sync.set(object);
    }
  }, {
    key: "getStorageLocal",
    value: function getStorageLocal(key) {
      return new Promise(function (resolve, reject) {
        chrome.storage.local.get(key, function (result) {
          if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(result) === "object" && result[key]) {
            resolve(result[key]);
          } else {
            resolve(null);
          }
        });
      });
    }
  }, {
    key: "setStorageLocal",
    value: function setStorageLocal(key, data) {
      var _object2;

      var object = (_object2 = {}, _object2[key] = data, _object2);
      chrome.storage.local.set(object);
    }
  }]);

  return Browser;
}();



/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31);
module.exports = __webpack_require__(52);


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(2);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(3);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./app/utils/Browser.js
var Browser = __webpack_require__(11);

// CONCATENATED MODULE: ./app/utils/Resource.js




var Resource_Resource = /*#__PURE__*/function () {
  function Resource() {
    classCallCheck_default()(this, Resource);
  }

  createClass_default()(Resource, null, [{
    key: "get",
    value: function get(file) {
      return Browser["a" /* Browser */].getResource(file);
    }
  }, {
    key: "image",
    value: function image(img) {
      return Resource.get("img/".concat(img));
    }
  }]);

  return Resource;
}();


// CONCATENATED MODULE: ./webpack/customPublicPath.js
/* global __webpack_public_path__ __HOST__ __PORT__ */

/* eslint no-global-assign: 0 camelcase: 0 */

__webpack_require__.p = Resource_Resource.get('/js/');

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FingerprintAttributes", function() { return FingerprintAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyFingerprintAttributes", function() { return applyFingerprintAttributes; });
/* harmony import */ var _app_constants_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


var FingerprintAttributes = function FingerprintAttributes(profile) {
  return [{
    object: "navigator",
    property: "userAgent",
    value: profile.Headers["User-Agent"] || navigator.userAgent
  }, {
    object: "navigator",
    property: "plugins",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__[/* HookedFunctionsMap */ "a"].Plugins,
    weight: 0.3
  }, {
    object: "screen",
    property: "width",
    value: profile.Screen ? profile.Screen.width : screen.width,
    weight: 0
  }, {
    object: "screen",
    property: "height",
    value: profile.Screen ? profile.Screen.height : screen.height,
    weight: 0
  }, {
    object: "navigator",
    property: "appVersion",
    value: "5.0 (Windows)"
  }, {
    object: "navigator",
    property: "appCodeName",
    value: "Mozilla"
  }, {
    object: "navigator",
    property: "vendor",
    value: "Google Inc."
  }, {
    object: "navigator",
    property: "productSub",
    value: "20100101"
  }, {
    object: "HTMLCanvasElement",
    property: "prototype",
    method: "toDataURL",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__[/* HookedFunctionsMap */ "a"].Canvas,
    weight: 0.5
  }, {
    object: "HTMLCanvasElement",
    property: "prototype",
    method: "getImageData",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__[/* HookedFunctionsMap */ "a"].Canvas,
    weight: 0.5
  }, {
    object: "HTMLCanvasElement",
    property: "prototype",
    method: "getContext",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__[/* HookedFunctionsMap */ "a"].WebGL,
    weight: 0.2
  }, {
    object: "AudioBuffer",
    property: "prototype",
    method: "getChannelData",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__[/* HookedFunctionsMap */ "a"].AudioBuffer,
    weight: 0.2
  }, {
    object: "AnalyserNode",
    property: "prototype",
    method: "getFloatFrequencyData",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__[/* HookedFunctionsMap */ "a"].AudioContext,
    weight: 0.2
  }, {
    object: "MediaDevices",
    property: "prototype",
    method: "enumerateDevices",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__[/* HookedFunctionsMap */ "a"].MediaDevices,
    weight: 0.2
  }, {
    object: "WebGL2RenderingContext",
    property: "prototype",
    method: "readPixels",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__[/* HookedFunctionsMap */ "a"].ReadPixels,
    weight: 0.1
  }, {
    object: "WebGL2RenderingContext",
    property: "prototype",
    method: "getShaderPrecisionFormat",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__[/* HookedFunctionsMap */ "a"].GetShaderPrecisionFormat,
    weight: 0.1
  }, {
    object: "WebGLRenderingContext",
    property: "prototype",
    method: "getParameter",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__[/* HookedFunctionsMap */ "a"].GetParameter,
    weight: 0.1
  }, {
    object: "WebGL2RenderingContext",
    property: "prototype",
    method: "getParameter",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__[/* HookedFunctionsMap */ "a"].GetParameter,
    weight: 0.1
  }, {
    object: "Element",
    property: "prototype",
    method: "getClientRects",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__[/* HookedFunctionsMap */ "a"].ClientRects,
    weight: 0
  }];
};

var applyFingerprintAttributes = function applyFingerprintAttributes(_ref) {
  var fpAttr = _ref.fpAttr,
      funcPrefix = _ref.funcPrefix,
      debug = _ref.debug,
      t0 = _ref.t0;
  var FINGERPRINT_DETECTION_THRESHOLD = 0.6;
  var alreadyCalculated = [];
  var fingerprintWeight = 0;
  var alreadyDetected = false;

  var notifyFingerprintAttempt = function notifyFingerprintAttempt() {
    if (alreadyDetected) return;
    var event = new CustomEvent("fingerprintAttemptDetected", {
      detail: {
        score: fingerprintWeight
      }
    });
    document.dispatchEvent(event);
    alreadyDetected = true;
  };

  var updateFingerprintWeight = function updateFingerprintWeight(prop, weight) {
    if (!alreadyCalculated.includes(prop)) {
      logFunc("[".concat(window.location.hostname, "] Increasing fingerprint weight by ").concat(weight, ", due to ").concat(prop));
      fingerprintWeight += weight;
      alreadyCalculated.push(prop);
      logFunc("[".concat(window.location.hostname, "] Current fingerprint weight is ").concat(fingerprintWeight));
    }

    if (fingerprintWeight >= FINGERPRINT_DETECTION_THRESHOLD) {
      notifyFingerprintAttempt();
    }
  };

  var logFunc = function logFunc() {};

  if (debug) {
    logFunc = console.log;
  }

  var overrideProp = function overrideProp(obj, prop, value) {
    var weight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.1;
    if (!obj || !obj[prop]) return;
    var name = "unknown";

    if (obj && obj.constructor) {
      name = obj.constructor.name;
    }

    logFunc("Hooking ".concat(name, ".").concat(prop, " with value"), value);

    try {
      Object.defineProperty(obj, "".concat(prop), {
        get: function get() {
          updateFingerprintWeight("".concat(name, ".").concat(prop), weight);
          logFunc("".concat(name, ".").concat(prop, " was called, returning value"), value);
          return value;
        }
      });
    } catch (e) {
      logFunc(e);
    }
  };

  var overrideMethod = function overrideMethod(obj, method, value) {
    var weight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.1;
    var func = window[funcPrefix][value];
    if (!func) return;
    if (!obj || !obj[method]) return;
    var old = obj[method];
    var name = "unknown";

    if (obj && obj.constructor) {
      name = obj.constructor.name;
    }

    logFunc("Hooking ".concat(name, ".").concat(method, " with function ").concat(value));

    try {
      Object.defineProperty(obj, "".concat(method), {
        get: function get() {
          return func.bind(this, {
            weight: weight,
            name: "".concat(name, ".").concat(method),
            old: old,
            ctx: this,
            notify: updateFingerprintWeight
          }, arguments);
        }
      });
    } catch (e) {
      logFunc(e);
    }
  };

  fpAttr.forEach(function (i) {
    if (window[i.object] && window[i.object][i.property]) {
      if (i.method) {
        overrideMethod(window[i.object][i.property], i.method, i.valueFn, i.weight);
      } else {
        if (i.value || window[funcPrefix] && window[funcPrefix][i.valueFn]) {
          overrideProp(window[i.object], [i.property], i.value || window[funcPrefix][i.valueFn](), i.weight);
        }
      }
    }
  }); //Removing traces

  delete window[funcPrefix];

  if (debug) {
    var t1 = performance.now();
    var timeTook = parseFloat(t1 - t0).toFixed(2);
    logFunc("Anti fingerprint module loaded [".concat(timeTook, " milliseconds]"));
  }
};



/***/ }),

/***/ 8:
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ })

/******/ });