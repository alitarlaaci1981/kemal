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
/******/ 	return __webpack_require__(__webpack_require__.s = 94);
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

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _profiles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
var _DEFAULT_SETTINGS, _DEFAULT_AFP_DATA;



var Settings = {
  DEBUG: "production" !== 'production',
  APP_VERSION: chrome.runtime.getManifest().version,
  DEFAULT_NOISE: {
    r: 0,
    g: 0,
    b: 0,
    a: 0
  },
  DEFAULT_SETTINGS: (_DEFAULT_SETTINGS = {}, _DEFAULT_SETTINGS[_app__WEBPACK_IMPORTED_MODULE_0__[/* StorageKeys */ "c"].AppSettings.DISABLED] = [], _DEFAULT_SETTINGS[_app__WEBPACK_IMPORTED_MODULE_0__[/* StorageKeys */ "c"].AppSettings.WHITELIST] = [], _DEFAULT_SETTINGS[_app__WEBPACK_IMPORTED_MODULE_0__[/* StorageKeys */ "c"].AppSettings.PROFILES] = [{
    domain: "web.whatsapp.com",
    profile: _profiles__WEBPACK_IMPORTED_MODULE_1__[/* ProfileType */ "a"].StrippedUserAgent
  }, {
    domain: "panopticlick.eff.org",
    profile: _profiles__WEBPACK_IMPORTED_MODULE_1__[/* ProfileType */ "a"].Paranoid
  }, {
    domain: "www.qwant.com",
    profile: _profiles__WEBPACK_IMPORTED_MODULE_1__[/* ProfileType */ "a"].StrippedUserAgent
  }], _DEFAULT_SETTINGS[_app__WEBPACK_IMPORTED_MODULE_0__[/* StorageKeys */ "c"].AppSettings.NOTIFICATIONS] = false, _DEFAULT_SETTINGS[_app__WEBPACK_IMPORTED_MODULE_0__[/* StorageKeys */ "c"].AppSettings.SOCIAL_MEDIA_DETECTION_PROTECTION] = false, _DEFAULT_SETTINGS),
  DEFAULT_AFP_DATA: (_DEFAULT_AFP_DATA = {}, _DEFAULT_AFP_DATA[_app__WEBPACK_IMPORTED_MODULE_0__[/* StorageKeys */ "c"].AFPData.FINGERPRINT_ATTEMPTS_DETECTED_COUNTER] = 0, _DEFAULT_AFP_DATA),
  MORE_INFO_LINK: _app__WEBPACK_IMPORTED_MODULE_0__[/* Resources */ "b"].Links.Info["CCleaner" || false],
  SHEPHERD_URL: 'http://shepherd.ff.avast.com/?p_pro=150'
};
/* harmony default export */ __webpack_exports__["a"] = (Settings);

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtensionStorage; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);





var ExtensionStorage = /*#__PURE__*/function () {
  function ExtensionStorage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ExtensionStorage);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ExtensionStorage, null, [{
    key: "setSync",
    value: function setSync(key, value) {
      _Browser__WEBPACK_IMPORTED_MODULE_2__[/* Browser */ "a"].setStorageSync(key, value);
      _Logger__WEBPACK_IMPORTED_MODULE_3__[/* Logger */ "a"].debug("".concat(JSON.stringify(value), " was saved to storage key ").concat(key));
    }
  }, {
    key: "getSync",
    value: function getSync(key) {
      return _Browser__WEBPACK_IMPORTED_MODULE_2__[/* Browser */ "a"].getStorageSync(key);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      _Browser__WEBPACK_IMPORTED_MODULE_2__[/* Browser */ "a"].setStorageLocal(key, value);
      _Logger__WEBPACK_IMPORTED_MODULE_3__[/* Logger */ "a"].debug("".concat(JSON.stringify(value), " was saved to storage key ").concat(key));
    }
  }, {
    key: "get",
    value: function get(key) {
      return _Browser__WEBPACK_IMPORTED_MODULE_2__[/* Browser */ "a"].getStorageLocal(key);
    }
  }]);

  return ExtensionStorage;
}();



/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Profiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileType; });
var _Profiles;

var ProfileType = {
  Default: 0,
  StrippedUserAgent: 1,
  Paranoid: 2
};
var Profiles = (_Profiles = {}, _Profiles[ProfileType.Default] = {
  Headers: {
    "User-Agent": navigator.userAgent
  }
}, _Profiles[ProfileType.StrippedUserAgent] = {
  Headers: {
    "User-Agent": navigator.userAgent.match(/(Mozilla.+Safari\/\d{3}\.\d{2})/)[1] || navigator.userAgent
  }
}, _Profiles[ProfileType.Paranoid] = {
  Headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; rv:60.0) Gecko/20100101 Firefox/60.0",
    "Accept": "text/html, */*; q=0.01",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.5"
  },
  OmitHeaders: ["DNT"],
  plugins: null,
  Fonts: ["Arial", "Courier", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "LUCIDA GRANDE", "Monaco", "Tahoma", "Times", "Times New Roman", "Verdana", "Wingdings 2", "Wingdings 3"],
  Screen: {
    height: 900,
    width: 1000
  },
  WebGL: null,
  // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAACA0lEQVR4nO3UMQ0AMAzAsPIn3VLYN0WyEeTKLEDE/A4AeGVYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBxbV+J5YXpHgwAAAAASUVORK5CYII=",
  Canvas: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB9AAAADICAYAAACwGnoBAAAH6ElEQVR4nO3ZMQEAAAiAMPuXxhh6bAn4mQAAAAAAAACA5joAAAAAAAAAAD4w0AEAAAAAAAAgAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAAKpaV/0C3qz3zKIAAAAASUVORK5CYII="
}, _Profiles);


/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./chrome/extension/fingerprint.attributes.js
var fingerprint_attributes = __webpack_require__(52);

// EXTERNAL MODULE: ./app/constants/settings.js
var settings = __webpack_require__(12);

// EXTERNAL MODULE: ./app/constants/app.js
var app = __webpack_require__(1);

// EXTERNAL MODULE: ./app/utils/Logger.js
var Logger = __webpack_require__(7);

// EXTERNAL MODULE: ./app/constants/profiles.js
var profiles = __webpack_require__(15);

// CONCATENATED MODULE: ./chrome/extension/hooks.js
var functionsHooks = function functionsHooks(_ref) {
  var _window$funcPrefix;

  var funcPrefix = _ref.funcPrefix,
      HookedFunctionsMap = _ref.HookedFunctionsMap,
      disabledFeatures = _ref.disabledFeatures,
      _ref$canvasFp = _ref.canvasFp,
      canvasFp = _ref$canvasFp === void 0 ? false : _ref$canvasFp,
      _ref$webglFp = _ref.webglFp,
      webglFp = _ref$webglFp === void 0 ? false : _ref$webglFp,
      _ref$plugins = _ref.plugins,
      plugins = _ref$plugins === void 0 ? false : _ref$plugins;
  window[funcPrefix] = (_window$funcPrefix = {}, _window$funcPrefix[HookedFunctionsMap.Canvas] = function (_ref2, originalArgs) {
    var weight = _ref2.weight,
        name = _ref2.name,
        old = _ref2.old,
        ctx = _ref2.ctx,
        notify = _ref2.notify;
    notify(name, weight);

    if (webglFp && (this.getContext('webgl') || this.getContext('experimental-webgl2') || this.getContext('webgl2') || this.getContext('experimental-webgl'))) {
      // Webgl hash faker. A hash is generated by websites from this returned value
      return webglFp;
    }

    if (canvasFp) {
      return canvasFp;
    }

    var width = this.width;
    var height = this.height;
    var context = this.getContext("2d");

    if (context && context.getImageData) {
      var imageData = context.getImageData(0, 0, width, height);

      for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
          var index = i * (width * 4) + j * 4;
          imageData.data[index] = imageData.data[index] + Math.ceil(Math.random() * 10);
          imageData.data[index + 1] = imageData.data[index + 1] + Math.ceil(Math.random() * 10);
          imageData.data[index + 2] = imageData.data[index + 2] + Math.ceil(Math.random() * 10);
          imageData.data[index + 3] = imageData.data[index + 3] + Math.ceil(Math.random() * 10);
        }
      }

      context.putImageData(imageData, 0, 0);
      return old.apply(this, arguments);
    }
  }, _window$funcPrefix[HookedFunctionsMap.WebGL] = function (_ref3, originalArgs, type) {
    var weight = _ref3.weight,
        name = _ref3.name,
        old = _ref3.old,
        ctx = _ref3.ctx,
        notify = _ref3.notify;
    var newArgs = [type];
    var unsupportedContexts = ["experimental-webgl", "webgl", "experimental-webgl2", "webgl2"]; // Blocks webgl completely, resulting in hash of zeroes

    if (webglFp === null && unsupportedContexts.includes(type)) {
      notify(name, weight);
      return null;
    }

    return old.apply(this, newArgs);
  }, _window$funcPrefix[HookedFunctionsMap.AudioBuffer] = function (_ref4) {
    var weight = _ref4.weight,
        name = _ref4.name,
        old = _ref4.old,
        notify = _ref4.notify;
    notify(name, weight);
    var results = old.apply(this, arguments);

    for (var i = 0; i < results.length; i += 100) {
      var index = Math.floor(Math.abs(Math.ceil(Math.random() * 10)) * i);
      results[index] += Math.abs(Math.ceil(Math.random() * 10)) * 0.0000001;
    }

    return results;
  }, _window$funcPrefix[HookedFunctionsMap.AudioContext] = function (_ref5, originalArgs, arr) {
    var weight = _ref5.weight,
        name = _ref5.name,
        old = _ref5.old,
        notify = _ref5.notify;
    notify(name, weight);
    var results = old.apply(this, [arr]);

    for (var i = 0; i < arr.length; i += 100) {
      var index = Math.floor(Math.abs(Math.ceil(Math.random() * 10)) * i);
      arr[index] = arr[index] + Math.abs(Math.ceil(Math.random() * 10)) * 0.1;
    }

    return results;
  }, _window$funcPrefix.timezone = function timezone(_ref6, originalArgs, arr) {
    var weight = _ref6.weight,
        name = _ref6.name,
        old = _ref6.old,
        notify = _ref6.notify;
  }, _window$funcPrefix[HookedFunctionsMap.Plugins] = function () {
    var allowedPlugins = ["internal-pdf-viewer", "mhjfbmdgcfjbbpaeojofohoefgiehjai", "internal-nacl-plugin", "PepperFlashPlayer.plugin", "pepflashplayer.dll"];
    var privacyPluginArray = {};
    var originalPluginsData = navigator.plugins;
    var pluginsCounter = 0;

    if (plugins !== null) {
      for (var i = 0; i < originalPluginsData.length; i++) {
        if (allowedPlugins.includes(originalPluginsData[i].filename)) {
          privacyPluginArray[pluginsCounter] = originalPluginsData[i];
          privacyPluginArray[originalPluginsData[i].name] = originalPluginsData[i];
          Object.defineProperty(privacyPluginArray, "".concat(pluginsCounter), {
            writable: false,
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(privacyPluginArray, "".concat(originalPluginsData[i].name), {
            writable: false,
            enumerable: false,
            configurable: true
          });
          pluginsCounter++;
        }
      }
    }

    privacyPluginArray.length = pluginsCounter;
    privacyPluginArray.__proto__ = PluginArray.prototype;

    privacyPluginArray.namedItem = function (i) {
      return privacyPluginArray[i];
    };

    return privacyPluginArray;
  }, _window$funcPrefix[HookedFunctionsMap.MediaDevices] = function (_ref7, originalArgs) {
    var weight = _ref7.weight,
        name = _ref7.name,
        old = _ref7.old,
        notify = _ref7.notify;
    notify(name, weight);
    return old.apply(this, originalArgs).then(function (origDevices) {
      var modifiedDevices = [];
      origDevices.forEach(function (d) {
        var newDevice = {
          deviceId: d.deviceId.toLowerCase() === 'default' ? d.deviceId : d.deviceId.replace(/.$/, Math.abs(Math.ceil(Math.random() * 10))),
          kind: d.kind,
          label: d.label,
          groupId: d.groupId.replace(/.$/, Math.abs(Math.ceil(Math.random() * 10))) + ""
        };
        newDevice.__proto__ = d.__proto__;
        modifiedDevices.push(newDevice);
      });
      return modifiedDevices;
    });
  }, _window$funcPrefix[HookedFunctionsMap.ReadPixels] = function (_ref8, originalArgs) {
    var weight = _ref8.weight,
        name = _ref8.name,
        old = _ref8.old,
        ctx = _ref8.ctx,
        notify = _ref8.notify;
    var BUFFER_IDX = 6;

    for (var _len = arguments.length, arr = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      arr[_key - 2] = arguments[_key];
    }

    old.call.apply(old, [this].concat(arr)); // Altering the first pixel value within the image pixels buffer

    arr[BUFFER_IDX][0] = Math.ceil(Math.random() * 10);
  }, _window$funcPrefix[HookedFunctionsMap.GetShaderPrecisionFormat] = function (_ref9, originalArgs) {
    var weight = _ref9.weight,
        name = _ref9.name,
        old = _ref9.old,
        ctx = _ref9.ctx,
        notify = _ref9.notify;

    for (var _len2 = arguments.length, arr = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      arr[_key2 - 2] = arguments[_key2];
    }

    var result = old.call.apply(old, [this].concat(arr));
    var modifiedResults = {
      rangeMin: Math.ceil(Math.random() * 127),
      rangeMax: Math.ceil(Math.random() * 127),
      precision: result.precision
    };
    modifiedResults.__proto__ = WebGLShaderPrecisionFormat.prototype;
    return modifiedResults;
  }, _window$funcPrefix[HookedFunctionsMap.ClientRects] = function (_ref10, originalArgs) {
    var weight = _ref10.weight,
        name = _ref10.name,
        old = _ref10.old,
        notify = _ref10.notify;
    notify(name, weight);
    var originalRects = old.apply(this, originalArgs);

    if (!originalRects.length) {
      return originalRects;
    }

    var rects = JSON.parse(JSON.stringify(originalRects[0]));
    var modifiedRects = new DOMRect();
    Object.keys(rects).forEach(function (key) {
      return modifiedRects[key] = rects[key] + Math.random();
    });
    var result = {
      0: modifiedRects,
      length: 1
    };
    result.__proto__ = DOMRectList.prototype;
    return result;
  }, _window$funcPrefix[HookedFunctionsMap.GetParameter] = function (_ref11, originalArgs, arr) {
    var weight = _ref11.weight,
        name = _ref11.name,
        old = _ref11.old,
        ctx = _ref11.ctx,
        notify = _ref11.notify;
    var UNMASKED_VENDOR = 37445;
    var UNMASKED_RENDERER = 37446;
    var GL_VERSION = 7938;
    var SHADING_LANGUAGE_VERSION = 35724;
    var valuesMap = {};
    valuesMap[UNMASKED_VENDOR] = '';
    valuesMap[UNMASKED_RENDERER] = '';
    valuesMap[GL_VERSION] = '';
    valuesMap[SHADING_LANGUAGE_VERSION] = '';

    if (arr in valuesMap) {
      return valuesMap[arr];
    }

    return old.call(this, arr);
  }, _window$funcPrefix);

  if (disabledFeatures.includes('*')) {
    delete window[funcPrefix];
  } else {
    disabledFeatures.map(function (feature) {
      return delete window[funcPrefix][feature];
    });
  }
};


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(2);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(3);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./app/utils/Injector.js




var Injector_Injector = /*#__PURE__*/function () {
  function Injector(debug) {
    classCallCheck_default()(this, Injector);

    this.debug = debug;
  }

  createClass_default()(Injector, [{
    key: "compile",
    value: function compile(func, args) {
      var argsStr = '';
      Object.keys(args).map(function (key) {
        argsStr += "".concat(key, ":").concat(args[key], ",");
      });
      this.compiledFunc = "\n        try{\n            (".concat(func, ")\n                ({\n                    ").concat(argsStr, "\n                })\n        }catch(e) { console.log(e); }");
      return this;
    }
  }, {
    key: "inject",
    value: function inject() {
      if (!this.compiledFunc) {
        throw Error('No compiled function to inject');
      }

      var script = document.createElement('script');
      script.type = "text/javascript"; // if (!this.debug) {
      //     Logger.debug("Obfuscating code");
      //     const JavaScriptObfuscator = require('javascript-obfuscator');
      //     this.compiledFunc = JavaScriptObfuscator.obfuscate(this.compiledFunc).obfuscatedCode;
      // }

      var newChild = document.createTextNode(this.compiledFunc);
      script.appendChild(newChild);
      var node = document.documentElement || document.head || document.body;
      node.insertBefore(script, node.firstChild);
      node.removeChild(script);
    }
  }]);

  return Injector;
}();


// EXTERNAL MODULE: ./app/utils/ExtensionStorage.js
var ExtensionStorage = __webpack_require__(14);

// CONCATENATED MODULE: ./chrome/extension/content.js









var t0 = performance.now();
ExtensionStorage["a" /* ExtensionStorage */].getSync(app["c" /* StorageKeys */].AppSettings.KEY).then(function (items) {
  var url = window.location.hostname;

  if (inIframe()) {
    url = new URL(document.location.ancestorOrigins[document.location.ancestorOrigins.length - 1]).host;
  }

  var isDisabled = items.disabled.includes(url);
  var debugMode = typeof items.debug !== 'undefined' ? items.debug : settings["a" /* default */].DEBUG;
  var domainProfile = items.profiles.find(function (p) {
    return p.domain === url;
  });
  var profileNumber = domainProfile ? domainProfile.profile : profiles["a" /* ProfileType */].Default;
  var currentProfile = profiles["b" /* Profiles */][profileNumber];
  var disabledDomainsFeatures = items.disabledDomainFeatures.find(function (p) {
    return url.match(p.domain);
  });
  var disabledFeatures = disabledDomainsFeatures ? disabledDomainsFeatures.features : [];
  Logger["a" /* Logger */].debug("Running AFP version ".concat(settings["a" /* default */].APP_VERSION));
  Logger["a" /* Logger */].debug("Using profile: ".concat(profileNumber));
  Logger["a" /* Logger */].debug("Disabled features for domain detected: ".concat(JSON.stringify(disabledFeatures)));
  var canvasFp = currentProfile.Canvas;
  var webglFP = currentProfile.WebGL;
  var pluginsFp = currentProfile.plugins;

  if (currentProfile.Fonts) {
    sendMessage("setFontFilter", currentProfile.Fonts);
  }

  if (!isDisabled) {
    var FUNC_PREFIX = '__AFP__.HOOKS'; //const noise = items[StorageKeys.NOISE] || Settings.DEFAULT_NOISE;

    var injector = new Injector_Injector(debugMode);
    injector.compile(functionsHooks, {
      funcPrefix: JSON.stringify(FUNC_PREFIX),
      //noise: JSON.stringify(noise),
      HookedFunctionsMap: JSON.stringify(app["a" /* HookedFunctionsMap */]),
      disabledFeatures: JSON.stringify(disabledFeatures),
      canvasFp: JSON.stringify(canvasFp),
      webglFp: JSON.stringify(webglFP),
      plugins: JSON.stringify(pluginsFp)
    }).inject();
    injector.compile(fingerprint_attributes["applyFingerprintAttributes"], {
      fpAttr: JSON.stringify(Object(fingerprint_attributes["FingerprintAttributes"])(currentProfile)),
      funcPrefix: JSON.stringify(FUNC_PREFIX),
      debug: debugMode,
      t0: t0
    }).inject();
  } else {
    Logger["a" /* Logger */].debug("Domain is disabled, not hooking");
  }
});
document.addEventListener("fingerprintAttemptDetected", function (data) {
  sendMessage("fingerprintAttemptDetected", {
    type: "basic",
    iconUrl: "img/icon-16.png",
    title: "Fingerprint attempt Detected",
    message: "The website ".concat(document.location.href.substring(0, 102), " has attempted to fingerprint your browser"),
    priority: 2
  });
});

function sendMessage(type, data) {
  if (chrome && chrome.runtime) {
    chrome.runtime.sendMessage({
      type: type,
      payload: data
    });
  } else {
    Logger["a" /* Logger */].debug("Chrome runtime is not available");
  }
}

function inIframe() {
  try {
    return parent !== window;
  } catch (e) {
    return true;
  }
}

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

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);




var MessageType = {
  INFO: "Info",
  WARNING: "Warning",
  ERROR: "Error",
  DEBUG: "Debug"
};
var SYMBOL = "AFP";
var SEPARATOR = '-';
var SEPARATOR_COUNT = 260;

var Logger = /*#__PURE__*/function () {
  function Logger() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Logger);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Logger, null, [{
    key: "log",
    value: function log(msg) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MessageType.INFO;
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(msg) === 'object') {
        msg = JSON.stringify(msg);
      }

      var date = new Date().toDateString();

      if (title.length > 0) {
        console.log("%c".concat(title, " START %c").concat(SEPARATOR.repeat(SEPARATOR_COUNT - title.length - 2)), 'background: #000; color: #fff', 'background: #000; color: #000');
      }

      console.log("".concat(SYMBOL, " :: ").concat(date, " :: %c").concat(type, "%c ::  ").concat(msg), Logger.getMessageColor(type), this.getMessageColor(null));

      if (title) {
        console.log("%c".concat(title, " END %c").concat(SEPARATOR.repeat(SEPARATOR_COUNT - title.length)), 'background: #000; color: #fff', 'background: #000; color: #000');
      }
    }
  }, {
    key: "debug",
    value: function debug(msg) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

      if (!_constants_settings__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].DEBUG) {
        return;
      }

      this.log(msg, MessageType.DEBUG, title);
    }
  }, {
    key: "info",
    value: function info(msg) {
      this.log(msg, MessageType.INFO);
    }
  }, {
    key: "warn",
    value: function warn(msg) {
      this.log(msg, MessageType.WARNING);
    }
  }, {
    key: "error",
    value: function error(msg) {
      this.log(msg, MessageType.ERROR);
    }
  }, {
    key: "getMessageColor",
    value: function getMessageColor(type) {
      switch (type) {
        case MessageType.INFO:
          return 'color: black';

        case MessageType.ERROR:
          return 'color: red';

        case MessageType.WARNING:
          return 'color: #ffad36';

        case MessageType.DEBUG:
          return 'color: green';

        default:
          return 'color: black';
      }
    }
  }]);

  return Logger;
}();

Logger.MessageType = MessageType;


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

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31);
module.exports = __webpack_require__(183);


/***/ })

/******/ });