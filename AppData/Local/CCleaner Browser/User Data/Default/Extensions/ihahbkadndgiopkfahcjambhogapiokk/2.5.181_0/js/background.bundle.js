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
/******/ 	return __webpack_require__(__webpack_require__.s = 95);
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

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(45);


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

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return notifyFingerprintAttempt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateFingerprintAttemptsCounter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return incrementFingerprintAttempts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return toggleFingerprintProtection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return toggleSocialMediaProtection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return updateFingerprintProtectionStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return updateSocialMediaProtectionStatus; });
/* harmony import */ var _constants_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

var notifyFingerprintAttempt = function notifyFingerprintAttempt() {
  return {
    type: _constants_actions__WEBPACK_IMPORTED_MODULE_0__[/* FINGERPRINT_ATTEMPT_DETECTED */ "a"]
  };
};
var updateFingerprintAttemptsCounter = function updateFingerprintAttemptsCounter(data) {
  return {
    type: _constants_actions__WEBPACK_IMPORTED_MODULE_0__[/* UPDATE_FINGERPRINT_ATTEMPT_COUNTER */ "e"],
    data: data
  };
};
var incrementFingerprintAttempts = function incrementFingerprintAttempts() {
  return {
    type: _constants_actions__WEBPACK_IMPORTED_MODULE_0__[/* INCREMENT_FINGERPRINT_ATTEMPTS_DETECTED */ "b"]
  };
};
var toggleFingerprintProtection = function toggleFingerprintProtection(_ref) {
  var data = _ref.data,
      url = _ref.url;
  return {
    type: _constants_actions__WEBPACK_IMPORTED_MODULE_0__[/* TOGGLE_FINGERPRINT_PROTECTION */ "c"],
    data: data,
    url: url
  };
};
var toggleSocialMediaProtection = function toggleSocialMediaProtection(_ref2) {
  var data = _ref2.data;
  return {
    type: _constants_actions__WEBPACK_IMPORTED_MODULE_0__[/* TOGGLE_SOCIAL_MEDIA_PROTECTION */ "d"],
    data: data
  };
};
var updateFingerprintProtectionStatus = function updateFingerprintProtectionStatus(data) {
  return {
    type: _constants_actions__WEBPACK_IMPORTED_MODULE_0__[/* UPDATE_FINGERPRINT_PROTECTION_STATUS */ "f"],
    data: data
  };
};
var updateSocialMediaProtectionStatus = function updateSocialMediaProtectionStatus(data) {
  return {
    type: _constants_actions__WEBPACK_IMPORTED_MODULE_0__[/* UPDATE_SOCIAL_MEDIA_PROTECTION_STATUS */ "g"],
    data: data
  };
};

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

/***/ 17:
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(18);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./app/constants/actions.js
var actions = __webpack_require__(4);

// CONCATENATED MODULE: ./app/reducers/anti.fingerprint.reducer.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  detectionAttempts: 0,
  isActive: true
};
/* harmony default export */ var anti_fingerprint_reducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions["b" /* INCREMENT_FINGERPRINT_ATTEMPTS_DETECTED */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        detectionAttempts: state.detectionAttempts + 1
      });

    case actions["e" /* UPDATE_FINGERPRINT_ATTEMPT_COUNTER */]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          detectionAttempts: action.data
        });
      }

    case actions["f" /* UPDATE_FINGERPRINT_PROTECTION_STATUS */]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isActive: action.data
        });
      }

    default:
      return state;
  }
});
// EXTERNAL MODULE: ./app/constants/settings.js
var settings = __webpack_require__(12);

// EXTERNAL MODULE: ./app/constants/app.js
var app = __webpack_require__(1);

// CONCATENATED MODULE: ./app/reducers/options.reducer.js


function options_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function options_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { options_reducer_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { options_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var options_reducer_initialState = {
  socialMediaProtection: settings["a" /* default */].DEFAULT_SETTINGS[app["c" /* StorageKeys */].AppSettings.SOCIAL_MEDIA_DETECTION_PROTECTION]
};
/* harmony default export */ var options_reducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : options_reducer_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions["g" /* UPDATE_SOCIAL_MEDIA_PROTECTION_STATUS */]:
      return options_reducer_objectSpread(options_reducer_objectSpread({}, state), {}, {
        socialMediaProtection: action.data
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./app/reducers/index.js



/* harmony default export */ var reducers = (Object(redux["c" /* combineReducers */])({
  antiFingerprint: anti_fingerprint_reducer,
  options: options_reducer
}));
// EXTERNAL MODULE: ./app/utils/Logger.js
var Logger = __webpack_require__(7);

// CONCATENATED MODULE: ./app/middlwares/burger.js


var burger_burgerMiddleware = function burgerMiddleware(store) {
  return function (next) {
    return function (action) {
      var burgerEntitledEvents = [];

      if (burgerEntitledEvents.includes(action.type)) {
        Logger["a" /* Logger */].debug("Logging burger event ".concat(action.type), Logger["a" /* Logger */].MessageType.INFO); //Burger.append(...)
      }

      next(action);
    };
  };
};


// CONCATENATED MODULE: ./node_modules/redux-saga/es/internal/utils.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var sym = function sym(id) {
  return '@@redux-saga/' + id;
};

var TASK = /*#__PURE__*/sym('TASK');
var HELPER = /*#__PURE__*/sym('HELPER');
var MATCH = /*#__PURE__*/sym('MATCH');
var CANCEL = /*#__PURE__*/sym('CANCEL_PROMISE');
var SAGA_ACTION = /*#__PURE__*/sym('SAGA_ACTION');
var SELF_CANCELLATION = /*#__PURE__*/sym('SELF_CANCELLATION');
var konst = function konst(v) {
  return function () {
    return v;
  };
};
var kTrue = /*#__PURE__*/konst(true);
var kFalse = /*#__PURE__*/konst(false);
var noop = function noop() {};
var ident = function ident(v) {
  return v;
};

function check(value, predicate, error) {
  if (!predicate(value)) {
    utils_log('error', 'uncaught at check', error);
    throw new Error(error);
  }
}

var utils_hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(object, property) {
  return is.notUndef(object) && utils_hasOwnProperty.call(object, property);
}

var is = {
  undef: function undef(v) {
    return v === null || v === undefined;
  },
  notUndef: function notUndef(v) {
    return v !== null && v !== undefined;
  },
  func: function func(f) {
    return typeof f === 'function';
  },
  number: function number(n) {
    return typeof n === 'number';
  },
  string: function string(s) {
    return typeof s === 'string';
  },
  array: Array.isArray,
  object: function object(obj) {
    return obj && !is.array(obj) && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  },
  promise: function promise(p) {
    return p && is.func(p.then);
  },
  iterator: function iterator(it) {
    return it && is.func(it.next) && is.func(it.throw);
  },
  iterable: function iterable(it) {
    return it && is.func(Symbol) ? is.func(it[Symbol.iterator]) : is.array(it);
  },
  task: function task(t) {
    return t && t[TASK];
  },
  observable: function observable(ob) {
    return ob && is.func(ob.subscribe);
  },
  buffer: function buffer(buf) {
    return buf && is.func(buf.isEmpty) && is.func(buf.take) && is.func(buf.put);
  },
  pattern: function pattern(pat) {
    return pat && (is.string(pat) || (typeof pat === 'undefined' ? 'undefined' : _typeof(pat)) === 'symbol' || is.func(pat) || is.array(pat));
  },
  channel: function channel(ch) {
    return ch && is.func(ch.take) && is.func(ch.close);
  },
  helper: function helper(it) {
    return it && it[HELPER];
  },
  stringableFunc: function stringableFunc(f) {
    return is.func(f) && hasOwn(f, 'toString');
  }
};

var object = {
  assign: function assign(target, source) {
    for (var i in source) {
      if (hasOwn(source, i)) {
        target[i] = source[i];
      }
    }
  }
};

function remove(array, item) {
  var index = array.indexOf(item);
  if (index >= 0) {
    array.splice(index, 1);
  }
}

var array = {
  from: function from(obj) {
    var arr = Array(obj.length);
    for (var i in obj) {
      if (hasOwn(obj, i)) {
        arr[i] = obj[i];
      }
    }
    return arr;
  }
};

function deferred() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var def = _extends({}, props);
  var promise = new Promise(function (resolve, reject) {
    def.resolve = resolve;
    def.reject = reject;
  });
  def.promise = promise;
  return def;
}

function arrayOfDeffered(length) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr.push(deferred());
  }
  return arr;
}

function delay(ms) {
  var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var timeoutId = void 0;
  var promise = new Promise(function (resolve) {
    timeoutId = setTimeout(function () {
      return resolve(val);
    }, ms);
  });

  promise[CANCEL] = function () {
    return clearTimeout(timeoutId);
  };

  return promise;
}

function createMockTask() {
  var _ref;

  var running = true;
  var _result = void 0,
      _error = void 0;

  return _ref = {}, _ref[TASK] = true, _ref.isRunning = function isRunning() {
    return running;
  }, _ref.result = function result() {
    return _result;
  }, _ref.error = function error() {
    return _error;
  }, _ref.setRunning = function setRunning(b) {
    return running = b;
  }, _ref.setResult = function setResult(r) {
    return _result = r;
  }, _ref.setError = function setError(e) {
    return _error = e;
  }, _ref;
}

function autoInc() {
  var seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return function () {
    return ++seed;
  };
}

var uid = /*#__PURE__*/autoInc();

var kThrow = function kThrow(err) {
  throw err;
};
var kReturn = function kReturn(value) {
  return { value: value, done: true };
};
function makeIterator(next) {
  var thro = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : kThrow;
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var isHelper = arguments[3];

  var iterator = { name: name, next: next, throw: thro, return: kReturn };

  if (isHelper) {
    iterator[HELPER] = true;
  }
  if (typeof Symbol !== 'undefined') {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }
  return iterator;
}

/**
  Print error in a useful way whether in a browser environment
  (with expandable error stack traces), or in a node.js environment
  (text-only log output)
 **/
function utils_log(level, message) {
  var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  /*eslint-disable no-console*/
  if (typeof window === 'undefined') {
    console.log('redux-saga ' + level + ': ' + message + '\n' + (error && error.stack || error));
  } else {
    console[level](message, error);
  }
}

function deprecate(fn, deprecationWarning) {
  return function () {
    if (false) {}
    return fn.apply(undefined, arguments);
  };
}

var updateIncentive = function updateIncentive(deprecated, preferred) {
  return deprecated + ' has been deprecated in favor of ' + preferred + ', please update your code';
};

var internalErr = function internalErr(err) {
  return new Error('\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project\'s github repo.\n  Error: ' + err + '\n');
};

var createSetContextWarning = function createSetContextWarning(ctx, props) {
  return (ctx ? ctx + '.' : '') + 'setContext(props): argument ' + props + ' is not a plain object';
};

var wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
  return function (action) {
    return dispatch(Object.defineProperty(action, SAGA_ACTION, { value: true }));
  };
};

var cloneableGenerator = function cloneableGenerator(generatorFunc) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var history = [];
    var gen = generatorFunc.apply(undefined, args);
    return {
      next: function next(arg) {
        history.push(arg);
        return gen.next(arg);
      },
      clone: function clone() {
        var clonedGen = cloneableGenerator(generatorFunc).apply(undefined, args);
        history.forEach(function (arg) {
          return clonedGen.next(arg);
        });
        return clonedGen;
      },
      return: function _return(value) {
        return gen.return(value);
      },
      throw: function _throw(exception) {
        return gen.throw(exception);
      }
    };
  };
};
// CONCATENATED MODULE: ./node_modules/redux-saga/es/internal/buffers.js


var BUFFER_OVERFLOW = "Channel's Buffer overflow!";

var ON_OVERFLOW_THROW = 1;
var ON_OVERFLOW_DROP = 2;
var ON_OVERFLOW_SLIDE = 3;
var ON_OVERFLOW_EXPAND = 4;

var zeroBuffer = { isEmpty: kTrue, put: noop, take: noop };

function ringBuffer() {
  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var overflowAction = arguments[1];

  var arr = new Array(limit);
  var length = 0;
  var pushIndex = 0;
  var popIndex = 0;

  var push = function push(it) {
    arr[pushIndex] = it;
    pushIndex = (pushIndex + 1) % limit;
    length++;
  };

  var take = function take() {
    if (length != 0) {
      var it = arr[popIndex];
      arr[popIndex] = null;
      length--;
      popIndex = (popIndex + 1) % limit;
      return it;
    }
  };

  var flush = function flush() {
    var items = [];
    while (length) {
      items.push(take());
    }
    return items;
  };

  return {
    isEmpty: function isEmpty() {
      return length == 0;
    },
    put: function put(it) {
      if (length < limit) {
        push(it);
      } else {
        var doubledLimit = void 0;
        switch (overflowAction) {
          case ON_OVERFLOW_THROW:
            throw new Error(BUFFER_OVERFLOW);
          case ON_OVERFLOW_SLIDE:
            arr[pushIndex] = it;
            pushIndex = (pushIndex + 1) % limit;
            popIndex = pushIndex;
            break;
          case ON_OVERFLOW_EXPAND:
            doubledLimit = 2 * limit;

            arr = flush();

            length = arr.length;
            pushIndex = arr.length;
            popIndex = 0;

            arr.length = doubledLimit;
            limit = doubledLimit;

            push(it);
            break;
          default:
          // DROP
        }
      }
    },
    take: take,
    flush: flush
  };
}

var buffers = {
  none: function none() {
    return zeroBuffer;
  },
  fixed: function fixed(limit) {
    return ringBuffer(limit, ON_OVERFLOW_THROW);
  },
  dropping: function dropping(limit) {
    return ringBuffer(limit, ON_OVERFLOW_DROP);
  },
  sliding: function sliding(limit) {
    return ringBuffer(limit, ON_OVERFLOW_SLIDE);
  },
  expanding: function expanding(initialSize) {
    return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
  }
};
// CONCATENATED MODULE: ./node_modules/redux-saga/es/internal/scheduler.js
var queue = [];
/**
  Variable to hold a counting semaphore
  - Incrementing adds a lock and puts the scheduler in a `suspended` state (if it's not
    already suspended)
  - Decrementing releases a lock. Zero locks puts the scheduler in a `released` state. This
    triggers flushing the queued tasks.
**/
var semaphore = 0;

/**
  Executes a task 'atomically'. Tasks scheduled during this execution will be queued
  and flushed after this task has finished (assuming the scheduler endup in a released
  state).
**/
function exec(task) {
  try {
    suspend();
    task();
  } finally {
    release();
  }
}

/**
  Executes or queues a task depending on the state of the scheduler (`suspended` or `released`)
**/
function asap(task) {
  queue.push(task);

  if (!semaphore) {
    suspend();
    scheduler_flush();
  }
}

/**
  Puts the scheduler in a `suspended` state. Scheduled tasks will be queued until the
  scheduler is released.
**/
function suspend() {
  semaphore++;
}

/**
  Puts the scheduler in a `released` state.
**/
function release() {
  semaphore--;
}

/**
  Releases the current lock. Executes all queued tasks if the scheduler is in the released state.
**/
function scheduler_flush() {
  release();

  var task = void 0;
  while (!semaphore && (task = queue.shift()) !== undefined) {
    exec(task);
  }
}
// CONCATENATED MODULE: ./node_modules/redux-saga/es/internal/channel.js
var channel_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var CHANNEL_END_TYPE = '@@redux-saga/CHANNEL_END';
var END = { type: CHANNEL_END_TYPE };
var isEnd = function isEnd(a) {
  return a && a.type === CHANNEL_END_TYPE;
};

function emitter() {
  var subscribers = [];

  function subscribe(sub) {
    subscribers.push(sub);
    return function () {
      return remove(subscribers, sub);
    };
  }

  function emit(item) {
    var arr = subscribers.slice();
    for (var i = 0, len = arr.length; i < len; i++) {
      arr[i](item);
    }
  }

  return {
    subscribe: subscribe,
    emit: emit
  };
}

var INVALID_BUFFER = 'invalid buffer passed to channel factory function';
var UNDEFINED_INPUT_ERROR = 'Saga was provided with an undefined action';

if (false) {}

function channel_channel() {
  var buffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : buffers.fixed();

  var closed = false;
  var takers = [];

  check(buffer, is.buffer, INVALID_BUFFER);

  function checkForbiddenStates() {
    if (closed && takers.length) {
      throw internalErr('Cannot have a closed channel with pending takers');
    }
    if (takers.length && !buffer.isEmpty()) {
      throw internalErr('Cannot have pending takers with non empty buffer');
    }
  }

  function put(input) {
    checkForbiddenStates();
    check(input, is.notUndef, UNDEFINED_INPUT_ERROR);
    if (closed) {
      return;
    }
    if (!takers.length) {
      return buffer.put(input);
    }
    for (var i = 0; i < takers.length; i++) {
      var cb = takers[i];
      if (!cb[MATCH] || cb[MATCH](input)) {
        takers.splice(i, 1);
        return cb(input);
      }
    }
  }

  function take(cb) {
    checkForbiddenStates();
    check(cb, is.func, "channel.take's callback must be a function");

    if (closed && buffer.isEmpty()) {
      cb(END);
    } else if (!buffer.isEmpty()) {
      cb(buffer.take());
    } else {
      takers.push(cb);
      cb.cancel = function () {
        return remove(takers, cb);
      };
    }
  }

  function flush(cb) {
    checkForbiddenStates(); // TODO: check if some new state should be forbidden now
    check(cb, is.func, "channel.flush' callback must be a function");
    if (closed && buffer.isEmpty()) {
      cb(END);
      return;
    }
    cb(buffer.flush());
  }

  function close() {
    checkForbiddenStates();
    if (!closed) {
      closed = true;
      if (takers.length) {
        var arr = takers;
        takers = [];
        for (var i = 0, len = arr.length; i < len; i++) {
          arr[i](END);
        }
      }
    }
  }

  return {
    take: take,
    put: put,
    flush: flush,
    close: close,
    get __takers__() {
      return takers;
    },
    get __closed__() {
      return closed;
    }
  };
}

function eventChannel(subscribe) {
  var buffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : buffers.none();
  var matcher = arguments[2];

  /**
    should be if(typeof matcher !== undefined) instead?
    see PR #273 for a background discussion
  **/
  if (arguments.length > 2) {
    check(matcher, is.func, 'Invalid match function passed to eventChannel');
  }

  var chan = channel_channel(buffer);
  var close = function close() {
    if (!chan.__closed__) {
      if (unsubscribe) {
        unsubscribe();
      }
      chan.close();
    }
  };
  var unsubscribe = subscribe(function (input) {
    if (isEnd(input)) {
      close();
      return;
    }
    if (matcher && !matcher(input)) {
      return;
    }
    chan.put(input);
  });
  if (chan.__closed__) {
    unsubscribe();
  }

  if (!is.func(unsubscribe)) {
    throw new Error('in eventChannel: subscribe should return a function to unsubscribe');
  }

  return {
    take: chan.take,
    flush: chan.flush,
    close: close
  };
}

function channel_stdChannel(subscribe) {
  var chan = eventChannel(function (cb) {
    return subscribe(function (input) {
      if (input[SAGA_ACTION]) {
        cb(input);
        return;
      }
      asap(function () {
        return cb(input);
      });
    });
  });

  return channel_extends({}, chan, {
    take: function take(cb, matcher) {
      if (arguments.length > 1) {
        check(matcher, is.func, "channel.take's matcher argument must be a function");
        cb[MATCH] = matcher;
      }
      chan.take(cb);
    }
  });
}
// CONCATENATED MODULE: ./node_modules/redux-saga/es/internal/io.js


var IO = /*#__PURE__*/sym('IO');
var TAKE = 'TAKE';
var PUT = 'PUT';
var ALL = 'ALL';
var RACE = 'RACE';
var CALL = 'CALL';
var CPS = 'CPS';
var FORK = 'FORK';
var JOIN = 'JOIN';
var io_CANCEL = 'CANCEL';
var SELECT = 'SELECT';
var ACTION_CHANNEL = 'ACTION_CHANNEL';
var CANCELLED = 'CANCELLED';
var FLUSH = 'FLUSH';
var GET_CONTEXT = 'GET_CONTEXT';
var SET_CONTEXT = 'SET_CONTEXT';

var TEST_HINT = '\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)';

var io_effect = function effect(type, payload) {
  var _ref;

  return _ref = {}, _ref[IO] = true, _ref[type] = payload, _ref;
};

var io_detach = function detach(eff) {
  check(asEffect.fork(eff), is.object, 'detach(eff): argument must be a fork effect');
  eff[FORK].detached = true;
  return eff;
};

function io_take() {
  var patternOrChannel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

  if (arguments.length) {
    check(arguments[0], is.notUndef, 'take(patternOrChannel): patternOrChannel is undefined');
  }
  if (is.pattern(patternOrChannel)) {
    return io_effect(TAKE, { pattern: patternOrChannel });
  }
  if (is.channel(patternOrChannel)) {
    return io_effect(TAKE, { channel: patternOrChannel });
  }
  throw new Error('take(patternOrChannel): argument ' + String(patternOrChannel) + ' is not valid channel or a valid pattern');
}

io_take.maybe = function () {
  var eff = io_take.apply(undefined, arguments);
  eff[TAKE].maybe = true;
  return eff;
};

var takem = /*#__PURE__*/deprecate(io_take.maybe, /*#__PURE__*/updateIncentive('takem', 'take.maybe'));

function io_put(channel, action) {
  if (arguments.length > 1) {
    check(channel, is.notUndef, 'put(channel, action): argument channel is undefined');
    check(channel, is.channel, 'put(channel, action): argument ' + channel + ' is not a valid channel');
    check(action, is.notUndef, 'put(channel, action): argument action is undefined');
  } else {
    check(channel, is.notUndef, 'put(action): argument action is undefined');
    action = channel;
    channel = null;
  }
  return io_effect(PUT, { channel: channel, action: action });
}

io_put.resolve = function () {
  var eff = io_put.apply(undefined, arguments);
  eff[PUT].resolve = true;
  return eff;
};

io_put.sync = /*#__PURE__*/deprecate(io_put.resolve, /*#__PURE__*/updateIncentive('put.sync', 'put.resolve'));

function io_all(effects) {
  return io_effect(ALL, effects);
}

function race(effects) {
  return io_effect(RACE, effects);
}

function getFnCallDesc(meth, fn, args) {
  check(fn, is.notUndef, meth + ': argument fn is undefined');

  var context = null;
  if (is.array(fn)) {
    var _fn = fn;
    context = _fn[0];
    fn = _fn[1];
  } else if (fn.fn) {
    var _fn2 = fn;
    context = _fn2.context;
    fn = _fn2.fn;
  }
  if (context && is.string(fn) && is.func(context[fn])) {
    fn = context[fn];
  }
  check(fn, is.func, meth + ': argument ' + fn + ' is not a function');

  return { context: context, fn: fn, args: args };
}

function call(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return io_effect(CALL, getFnCallDesc('call', fn, args));
}

function apply(context, fn) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  return io_effect(CALL, getFnCallDesc('apply', { context: context, fn: fn }, args));
}

function cps(fn) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return io_effect(CPS, getFnCallDesc('cps', fn, args));
}

function fork(fn) {
  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return io_effect(FORK, getFnCallDesc('fork', fn, args));
}

function spawn(fn) {
  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  return io_detach(fork.apply(undefined, [fn].concat(args)));
}

function join() {
  for (var _len5 = arguments.length, tasks = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    tasks[_key5] = arguments[_key5];
  }

  if (tasks.length > 1) {
    return io_all(tasks.map(function (t) {
      return join(t);
    }));
  }
  var task = tasks[0];
  check(task, is.notUndef, 'join(task): argument task is undefined');
  check(task, is.task, 'join(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
  return io_effect(JOIN, task);
}

function io_cancel() {
  for (var _len6 = arguments.length, tasks = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    tasks[_key6] = arguments[_key6];
  }

  if (tasks.length > 1) {
    return io_all(tasks.map(function (t) {
      return io_cancel(t);
    }));
  }
  var task = tasks[0];
  if (tasks.length === 1) {
    check(task, is.notUndef, 'cancel(task): argument task is undefined');
    check(task, is.task, 'cancel(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
  }
  return io_effect(io_CANCEL, task || SELF_CANCELLATION);
}

function io_select(selector) {
  for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    args[_key7 - 1] = arguments[_key7];
  }

  if (arguments.length === 0) {
    selector = ident;
  } else {
    check(selector, is.notUndef, 'select(selector,[...]): argument selector is undefined');
    check(selector, is.func, 'select(selector,[...]): argument ' + selector + ' is not a function');
  }
  return io_effect(SELECT, { selector: selector, args: args });
}

/**
  channel(pattern, [buffer])    => creates an event channel for store actions
**/
function actionChannel(pattern, buffer) {
  check(pattern, is.notUndef, 'actionChannel(pattern,...): argument pattern is undefined');
  if (arguments.length > 1) {
    check(buffer, is.notUndef, 'actionChannel(pattern, buffer): argument buffer is undefined');
    check(buffer, is.buffer, 'actionChannel(pattern, buffer): argument ' + buffer + ' is not a valid buffer');
  }
  return io_effect(ACTION_CHANNEL, { pattern: pattern, buffer: buffer });
}

function cancelled() {
  return io_effect(CANCELLED, {});
}

function io_flush(channel) {
  check(channel, is.channel, 'flush(channel): argument ' + channel + ' is not valid channel');
  return io_effect(FLUSH, channel);
}

function getContext(prop) {
  check(prop, is.string, 'getContext(prop): argument ' + prop + ' is not a string');
  return io_effect(GET_CONTEXT, prop);
}

function io_setContext(props) {
  check(props, is.object, createSetContextWarning(null, props));
  return io_effect(SET_CONTEXT, props);
}

var createAsEffectType = function createAsEffectType(type) {
  return function (effect) {
    return effect && effect[IO] && effect[type];
  };
};

var asEffect = {
  take: /*#__PURE__*/createAsEffectType(TAKE),
  put: /*#__PURE__*/createAsEffectType(PUT),
  all: /*#__PURE__*/createAsEffectType(ALL),
  race: /*#__PURE__*/createAsEffectType(RACE),
  call: /*#__PURE__*/createAsEffectType(CALL),
  cps: /*#__PURE__*/createAsEffectType(CPS),
  fork: /*#__PURE__*/createAsEffectType(FORK),
  join: /*#__PURE__*/createAsEffectType(JOIN),
  cancel: /*#__PURE__*/createAsEffectType(io_CANCEL),
  select: /*#__PURE__*/createAsEffectType(SELECT),
  actionChannel: /*#__PURE__*/createAsEffectType(ACTION_CHANNEL),
  cancelled: /*#__PURE__*/createAsEffectType(CANCELLED),
  flush: /*#__PURE__*/createAsEffectType(FLUSH),
  getContext: /*#__PURE__*/createAsEffectType(GET_CONTEXT),
  setContext: /*#__PURE__*/createAsEffectType(SET_CONTEXT)
};
// CONCATENATED MODULE: ./node_modules/redux-saga/es/internal/proc.js
var proc_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var proc_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } return obj; }







var NOT_ITERATOR_ERROR = 'proc first argument (Saga function result) must be an iterator';

var CHANNEL_END = {
  toString: function toString() {
    return '@@redux-saga/CHANNEL_END';
  }
};
var TASK_CANCEL = {
  toString: function toString() {
    return '@@redux-saga/TASK_CANCEL';
  }
};

var matchers = {
  wildcard: function wildcard() {
    return kTrue;
  },
  default: function _default(pattern) {
    return (typeof pattern === 'undefined' ? 'undefined' : proc_typeof(pattern)) === 'symbol' ? function (input) {
      return input.type === pattern;
    } : function (input) {
      return input.type === String(pattern);
    };
  },
  array: function array(patterns) {
    return function (input) {
      return patterns.some(function (p) {
        return proc_matcher(p)(input);
      });
    };
  },
  predicate: function predicate(_predicate) {
    return function (input) {
      return _predicate(input);
    };
  }
};

function proc_matcher(pattern) {
  // prettier-ignore
  return (pattern === '*' ? matchers.wildcard : is.array(pattern) ? matchers.array : is.stringableFunc(pattern) ? matchers.default : is.func(pattern) ? matchers.predicate : matchers.default)(pattern);
}

/**
  Used to track a parent task and its forks
  In the new fork model, forked tasks are attached by default to their parent
  We model this using the concept of Parent task && main Task
  main task is the main flow of the current Generator, the parent tasks is the
  aggregation of the main tasks + all its forked tasks.
  Thus the whole model represents an execution tree with multiple branches (vs the
  linear execution tree in sequential (non parallel) programming)

  A parent tasks has the following semantics
  - It completes if all its forks either complete or all cancelled
  - If it's cancelled, all forks are cancelled as well
  - It aborts if any uncaught error bubbles up from forks
  - If it completes, the return value is the one returned by the main task
**/
function forkQueue(name, mainTask, cb) {
  var tasks = [],
      result = void 0,
      completed = false;
  addTask(mainTask);

  function abort(err) {
    cancelAll();
    cb(err, true);
  }

  function addTask(task) {
    tasks.push(task);
    task.cont = function (res, isErr) {
      if (completed) {
        return;
      }

      remove(tasks, task);
      task.cont = noop;
      if (isErr) {
        abort(res);
      } else {
        if (task === mainTask) {
          result = res;
        }
        if (!tasks.length) {
          completed = true;
          cb(result);
        }
      }
    };
    // task.cont.cancel = task.cancel
  }

  function cancelAll() {
    if (completed) {
      return;
    }
    completed = true;
    tasks.forEach(function (t) {
      t.cont = noop;
      t.cancel();
    });
    tasks = [];
  }

  return {
    addTask: addTask,
    cancelAll: cancelAll,
    abort: abort,
    getTasks: function getTasks() {
      return tasks;
    },
    taskNames: function taskNames() {
      return tasks.map(function (t) {
        return t.name;
      });
    }
  };
}

function createTaskIterator(_ref) {
  var context = _ref.context,
      fn = _ref.fn,
      args = _ref.args;

  if (is.iterator(fn)) {
    return fn;
  }

  // catch synchronous failures; see #152 and #441
  var result = void 0,
      error = void 0;
  try {
    result = fn.apply(context, args);
  } catch (err) {
    error = err;
  }

  // i.e. a generator function returns an iterator
  if (is.iterator(result)) {
    return result;
  }

  // do not bubble up synchronous failures for detached forks
  // instead create a failed task. See #152 and #441
  return error ? makeIterator(function () {
    throw error;
  }) : makeIterator(function () {
    var pc = void 0;
    var eff = { done: false, value: result };
    var ret = function ret(value) {
      return { done: true, value: value };
    };
    return function (arg) {
      if (!pc) {
        pc = true;
        return eff;
      } else {
        return ret(arg);
      }
    };
  }());
}

var wrapHelper = function wrapHelper(helper) {
  return { fn: helper };
};

function proc(iterator) {
  var subscribe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return noop;
  };
  var dispatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noop;
  var getState = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
  var parentContext = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var parentEffectId = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var name = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 'anonymous';
  var cont = arguments[8];

  check(iterator, is.iterator, NOT_ITERATOR_ERROR);

  var effectsString = '[...effects]';
  var runParallelEffect = deprecate(runAllEffect, updateIncentive(effectsString, 'all(' + effectsString + ')'));

  var sagaMonitor = options.sagaMonitor,
      logger = options.logger,
      onError = options.onError;

  var log = logger || utils_log;
  var logError = function logError(err) {
    var message = err.sagaStack;

    if (!message && err.stack) {
      message = err.stack.split('\n')[0].indexOf(err.message) !== -1 ? err.stack : 'Error: ' + err.message + '\n' + err.stack;
    }

    log('error', 'uncaught at ' + name, message || err.message || err);
  };
  var stdChannel = channel_stdChannel(subscribe);
  var taskContext = Object.create(parentContext);
  /**
    Tracks the current effect cancellation
    Each time the generator progresses. calling runEffect will set a new value
    on it. It allows propagating cancellation to child effects
  **/
  next.cancel = noop;

  /**
    Creates a new task descriptor for this generator, We'll also create a main task
    to track the main flow (besides other forked tasks)
  **/
  var task = newTask(parentEffectId, name, iterator, cont);
  var mainTask = { name: name, cancel: cancelMain, isRunning: true };
  var taskQueue = forkQueue(name, mainTask, end);

  /**
    cancellation of the main task. We'll simply resume the Generator with a Cancel
  **/
  function cancelMain() {
    if (mainTask.isRunning && !mainTask.isCancelled) {
      mainTask.isCancelled = true;
      next(TASK_CANCEL);
    }
  }

  /**
    This may be called by a parent generator to trigger/propagate cancellation
    cancel all pending tasks (including the main task), then end the current task.
     Cancellation propagates down to the whole execution tree holded by this Parent task
    It's also propagated to all joiners of this task and their execution tree/joiners
     Cancellation is noop for terminated/Cancelled tasks tasks
  **/
  function cancel() {
    /**
      We need to check both Running and Cancelled status
      Tasks can be Cancelled but still Running
    **/
    if (iterator._isRunning && !iterator._isCancelled) {
      iterator._isCancelled = true;
      taskQueue.cancelAll();
      /**
        Ending with a Never result will propagate the Cancellation to all joiners
      **/
      end(TASK_CANCEL);
    }
  }
  /**
    attaches cancellation logic to this task's continuation
    this will permit cancellation to propagate down the call chain
  **/
  cont && (cont.cancel = cancel);

  // tracks the running status
  iterator._isRunning = true;

  // kicks up the generator
  next();

  // then return the task descriptor to the caller
  return task;

  /**
    This is the generator driver
    It's a recursive async/continuation function which calls itself
    until the generator terminates or throws
  **/
  function next(arg, isErr) {
    // Preventive measure. If we end up here, then there is really something wrong
    if (!mainTask.isRunning) {
      throw new Error('Trying to resume an already finished generator');
    }

    try {
      var result = void 0;
      if (isErr) {
        result = iterator.throw(arg);
      } else if (arg === TASK_CANCEL) {
        /**
          getting TASK_CANCEL automatically cancels the main task
          We can get this value here
           - By cancelling the parent task manually
          - By joining a Cancelled task
        **/
        mainTask.isCancelled = true;
        /**
          Cancels the current effect; this will propagate the cancellation down to any called tasks
        **/
        next.cancel();
        /**
          If this Generator has a `return` method then invokes it
          This will jump to the finally block
        **/
        result = is.func(iterator.return) ? iterator.return(TASK_CANCEL) : { done: true, value: TASK_CANCEL };
      } else if (arg === CHANNEL_END) {
        // We get CHANNEL_END by taking from a channel that ended using `take` (and not `takem` used to trap End of channels)
        result = is.func(iterator.return) ? iterator.return() : { done: true };
      } else {
        result = iterator.next(arg);
      }

      if (!result.done) {
        runEffect(result.value, parentEffectId, '', next);
      } else {
        /**
          This Generator has ended, terminate the main task and notify the fork queue
        **/
        mainTask.isMainRunning = false;
        mainTask.cont && mainTask.cont(result.value);
      }
    } catch (error) {
      if (mainTask.isCancelled) {
        logError(error);
      }
      mainTask.isMainRunning = false;
      mainTask.cont(error, true);
    }
  }

  function end(result, isErr) {
    iterator._isRunning = false;
    stdChannel.close();
    if (!isErr) {
      iterator._result = result;
      iterator._deferredEnd && iterator._deferredEnd.resolve(result);
    } else {
      if (result instanceof Error) {
        Object.defineProperty(result, 'sagaStack', {
          value: 'at ' + name + ' \n ' + (result.sagaStack || result.stack),
          configurable: true
        });
      }
      if (!task.cont) {
        if (result instanceof Error && onError) {
          onError(result);
        } else {
          logError(result);
        }
      }
      iterator._error = result;
      iterator._isAborted = true;
      iterator._deferredEnd && iterator._deferredEnd.reject(result);
    }
    task.cont && task.cont(result, isErr);
    task.joiners.forEach(function (j) {
      return j.cb(result, isErr);
    });
    task.joiners = null;
  }

  function runEffect(effect, parentEffectId) {
    var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var cb = arguments[3];

    var effectId = uid();
    sagaMonitor && sagaMonitor.effectTriggered({ effectId: effectId, parentEffectId: parentEffectId, label: label, effect: effect });

    /**
      completion callback and cancel callback are mutually exclusive
      We can't cancel an already completed effect
      And We can't complete an already cancelled effectId
    **/
    var effectSettled = void 0;

    // Completion callback passed to the appropriate effect runner
    function currCb(res, isErr) {
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      cb.cancel = noop; // defensive measure
      if (sagaMonitor) {
        isErr ? sagaMonitor.effectRejected(effectId, res) : sagaMonitor.effectResolved(effectId, res);
      }
      cb(res, isErr);
    }
    // tracks down the current cancel
    currCb.cancel = noop;

    // setup cancellation logic on the parent cb
    cb.cancel = function () {
      // prevents cancelling an already completed effect
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      /**
        propagates cancel downward
        catch uncaught cancellations errors; since we can no longer call the completion
        callback, log errors raised during cancellations into the console
      **/
      try {
        currCb.cancel();
      } catch (err) {
        logError(err);
      }
      currCb.cancel = noop; // defensive measure

      sagaMonitor && sagaMonitor.effectCancelled(effectId);
    };

    /**
      each effect runner must attach its own logic of cancellation to the provided callback
      it allows this generator to propagate cancellation downward.
       ATTENTION! effect runners must setup the cancel logic by setting cb.cancel = [cancelMethod]
      And the setup must occur before calling the callback
       This is a sort of inversion of control: called async functions are responsible
      for completing the flow by calling the provided continuation; while caller functions
      are responsible for aborting the current flow by calling the attached cancel function
       Library users can attach their own cancellation logic to promises by defining a
      promise[CANCEL] method in their returned promises
      ATTENTION! calling cancel must have no effect on an already completed or cancelled effect
    **/
    var data = void 0;
    // prettier-ignore
    return (
      // Non declarative effect
      is.promise(effect) ? resolvePromise(effect, currCb) : is.helper(effect) ? runForkEffect(wrapHelper(effect), effectId, currCb) : is.iterator(effect) ? resolveIterator(effect, effectId, name, currCb)

      // declarative effects
      : is.array(effect) ? runParallelEffect(effect, effectId, currCb) : (data = asEffect.take(effect)) ? runTakeEffect(data, currCb) : (data = asEffect.put(effect)) ? runPutEffect(data, currCb) : (data = asEffect.all(effect)) ? runAllEffect(data, effectId, currCb) : (data = asEffect.race(effect)) ? runRaceEffect(data, effectId, currCb) : (data = asEffect.call(effect)) ? runCallEffect(data, effectId, currCb) : (data = asEffect.cps(effect)) ? runCPSEffect(data, currCb) : (data = asEffect.fork(effect)) ? runForkEffect(data, effectId, currCb) : (data = asEffect.join(effect)) ? runJoinEffect(data, currCb) : (data = asEffect.cancel(effect)) ? runCancelEffect(data, currCb) : (data = asEffect.select(effect)) ? runSelectEffect(data, currCb) : (data = asEffect.actionChannel(effect)) ? runChannelEffect(data, currCb) : (data = asEffect.flush(effect)) ? runFlushEffect(data, currCb) : (data = asEffect.cancelled(effect)) ? runCancelledEffect(data, currCb) : (data = asEffect.getContext(effect)) ? runGetContextEffect(data, currCb) : (data = asEffect.setContext(effect)) ? runSetContextEffect(data, currCb) : /* anything else returned as is */currCb(effect)
    );
  }

  function resolvePromise(promise, cb) {
    var cancelPromise = promise[CANCEL];
    if (is.func(cancelPromise)) {
      cb.cancel = cancelPromise;
    } else if (is.func(promise.abort)) {
      cb.cancel = function () {
        return promise.abort();
      };
      // TODO: add support for the fetch API, whenever they get around to
      // adding cancel support
    }
    promise.then(cb, function (error) {
      return cb(error, true);
    });
  }

  function resolveIterator(iterator, effectId, name, cb) {
    proc(iterator, subscribe, dispatch, getState, taskContext, options, effectId, name, cb);
  }

  function runTakeEffect(_ref2, cb) {
    var channel = _ref2.channel,
        pattern = _ref2.pattern,
        maybe = _ref2.maybe;

    channel = channel || stdChannel;
    var takeCb = function takeCb(inp) {
      return inp instanceof Error ? cb(inp, true) : isEnd(inp) && !maybe ? cb(CHANNEL_END) : cb(inp);
    };
    try {
      channel.take(takeCb, proc_matcher(pattern));
    } catch (err) {
      return cb(err, true);
    }
    cb.cancel = takeCb.cancel;
  }

  function runPutEffect(_ref3, cb) {
    var channel = _ref3.channel,
        action = _ref3.action,
        resolve = _ref3.resolve;

    /**
      Schedule the put in case another saga is holding a lock.
      The put will be executed atomically. ie nested puts will execute after
      this put has terminated.
    **/
    asap(function () {
      var result = void 0;
      try {
        result = (channel ? channel.put : dispatch)(action);
      } catch (error) {
        // If we have a channel or `put.resolve` was used then bubble up the error.
        if (channel || resolve) return cb(error, true);
        logError(error);
      }

      if (resolve && is.promise(result)) {
        resolvePromise(result, cb);
      } else {
        return cb(result);
      }
    });
    // Put effects are non cancellables
  }

  function runCallEffect(_ref4, effectId, cb) {
    var context = _ref4.context,
        fn = _ref4.fn,
        args = _ref4.args;

    var result = void 0;
    // catch synchronous failures; see #152
    try {
      result = fn.apply(context, args);
    } catch (error) {
      return cb(error, true);
    }
    return is.promise(result) ? resolvePromise(result, cb) : is.iterator(result) ? resolveIterator(result, effectId, fn.name, cb) : cb(result);
  }

  function runCPSEffect(_ref5, cb) {
    var context = _ref5.context,
        fn = _ref5.fn,
        args = _ref5.args;

    // CPS (ie node style functions) can define their own cancellation logic
    // by setting cancel field on the cb

    // catch synchronous failures; see #152
    try {
      var cpsCb = function cpsCb(err, res) {
        return is.undef(err) ? cb(res) : cb(err, true);
      };
      fn.apply(context, args.concat(cpsCb));
      if (cpsCb.cancel) {
        cb.cancel = function () {
          return cpsCb.cancel();
        };
      }
    } catch (error) {
      return cb(error, true);
    }
  }

  function runForkEffect(_ref6, effectId, cb) {
    var context = _ref6.context,
        fn = _ref6.fn,
        args = _ref6.args,
        detached = _ref6.detached;

    var taskIterator = createTaskIterator({ context: context, fn: fn, args: args });

    try {
      suspend();
      var _task = proc(taskIterator, subscribe, dispatch, getState, taskContext, options, effectId, fn.name, detached ? null : noop);

      if (detached) {
        cb(_task);
      } else {
        if (taskIterator._isRunning) {
          taskQueue.addTask(_task);
          cb(_task);
        } else if (taskIterator._error) {
          taskQueue.abort(taskIterator._error);
        } else {
          cb(_task);
        }
      }
    } finally {
      scheduler_flush();
    }
    // Fork effects are non cancellables
  }

  function runJoinEffect(t, cb) {
    if (t.isRunning()) {
      var joiner = { task: task, cb: cb };
      cb.cancel = function () {
        return remove(t.joiners, joiner);
      };
      t.joiners.push(joiner);
    } else {
      t.isAborted() ? cb(t.error(), true) : cb(t.result());
    }
  }

  function runCancelEffect(taskToCancel, cb) {
    if (taskToCancel === SELF_CANCELLATION) {
      taskToCancel = task;
    }
    if (taskToCancel.isRunning()) {
      taskToCancel.cancel();
    }
    cb();
    // cancel effects are non cancellables
  }

  function runAllEffect(effects, effectId, cb) {
    var keys = Object.keys(effects);

    if (!keys.length) {
      return cb(is.array(effects) ? [] : {});
    }

    var completedCount = 0;
    var completed = void 0;
    var results = {};
    var childCbs = {};

    function checkEffectEnd() {
      if (completedCount === keys.length) {
        completed = true;
        cb(is.array(effects) ? array.from(proc_extends({}, results, { length: keys.length })) : results);
      }
    }

    keys.forEach(function (key) {
      var chCbAtKey = function chCbAtKey(res, isErr) {
        if (completed) {
          return;
        }
        if (isErr || isEnd(res) || res === CHANNEL_END || res === TASK_CANCEL) {
          cb.cancel();
          cb(res, isErr);
        } else {
          results[key] = res;
          completedCount++;
          checkEffectEnd();
        }
      };
      chCbAtKey.cancel = noop;
      childCbs[key] = chCbAtKey;
    });

    cb.cancel = function () {
      if (!completed) {
        completed = true;
        keys.forEach(function (key) {
          return childCbs[key].cancel();
        });
      }
    };

    keys.forEach(function (key) {
      return runEffect(effects[key], effectId, key, childCbs[key]);
    });
  }

  function runRaceEffect(effects, effectId, cb) {
    var completed = void 0;
    var keys = Object.keys(effects);
    var childCbs = {};

    keys.forEach(function (key) {
      var chCbAtKey = function chCbAtKey(res, isErr) {
        if (completed) {
          return;
        }

        if (isErr) {
          // Race Auto cancellation
          cb.cancel();
          cb(res, true);
        } else if (!isEnd(res) && res !== CHANNEL_END && res !== TASK_CANCEL) {
          var _response;

          cb.cancel();
          completed = true;
          var response = (_response = {}, _response[key] = res, _response);
          cb(is.array(effects) ? [].slice.call(proc_extends({}, response, { length: keys.length })) : response);
        }
      };
      chCbAtKey.cancel = noop;
      childCbs[key] = chCbAtKey;
    });

    cb.cancel = function () {
      // prevents unnecessary cancellation
      if (!completed) {
        completed = true;
        keys.forEach(function (key) {
          return childCbs[key].cancel();
        });
      }
    };
    keys.forEach(function (key) {
      if (completed) {
        return;
      }
      runEffect(effects[key], effectId, key, childCbs[key]);
    });
  }

  function runSelectEffect(_ref7, cb) {
    var selector = _ref7.selector,
        args = _ref7.args;

    try {
      var state = selector.apply(undefined, [getState()].concat(args));
      cb(state);
    } catch (error) {
      cb(error, true);
    }
  }

  function runChannelEffect(_ref8, cb) {
    var pattern = _ref8.pattern,
        buffer = _ref8.buffer;

    var match = proc_matcher(pattern);
    match.pattern = pattern;
    cb(eventChannel(subscribe, buffer || buffers.fixed(), match));
  }

  function runCancelledEffect(data, cb) {
    cb(!!mainTask.isCancelled);
  }

  function runFlushEffect(channel, cb) {
    channel.flush(cb);
  }

  function runGetContextEffect(prop, cb) {
    cb(taskContext[prop]);
  }

  function runSetContextEffect(props, cb) {
    object.assign(taskContext, props);
    cb();
  }

  function newTask(id, name, iterator, cont) {
    var _done, _ref9, _mutatorMap;

    iterator._deferredEnd = null;
    return _ref9 = {}, _ref9[TASK] = true, _ref9.id = id, _ref9.name = name, _done = 'done', _mutatorMap = {}, _mutatorMap[_done] = _mutatorMap[_done] || {}, _mutatorMap[_done].get = function () {
      if (iterator._deferredEnd) {
        return iterator._deferredEnd.promise;
      } else {
        var def = deferred();
        iterator._deferredEnd = def;
        if (!iterator._isRunning) {
          iterator._error ? def.reject(iterator._error) : def.resolve(iterator._result);
        }
        return def.promise;
      }
    }, _ref9.cont = cont, _ref9.joiners = [], _ref9.cancel = cancel, _ref9.isRunning = function isRunning() {
      return iterator._isRunning;
    }, _ref9.isCancelled = function isCancelled() {
      return iterator._isCancelled;
    }, _ref9.isAborted = function isAborted() {
      return iterator._isAborted;
    }, _ref9.result = function result() {
      return iterator._result;
    }, _ref9.error = function error() {
      return iterator._error;
    }, _ref9.setContext = function setContext(props) {
      check(props, is.object, createSetContextWarning('task', props));
      object.assign(taskContext, props);
    }, _defineEnumerableProperties(_ref9, _mutatorMap), _ref9;
  }
}
// CONCATENATED MODULE: ./node_modules/redux-saga/es/internal/runSaga.js



var RUN_SAGA_SIGNATURE = 'runSaga(storeInterface, saga, ...args)';
var NON_GENERATOR_ERR = RUN_SAGA_SIGNATURE + ': saga argument must be a Generator function!';

function runSaga(storeInterface, saga) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var iterator = void 0;

  if (is.iterator(storeInterface)) {
    if (false) {}
    iterator = storeInterface;
    storeInterface = saga;
  } else {
    check(saga, is.func, NON_GENERATOR_ERR);
    iterator = saga.apply(undefined, args);
    check(iterator, is.iterator, NON_GENERATOR_ERR);
  }

  var _storeInterface = storeInterface,
      subscribe = _storeInterface.subscribe,
      dispatch = _storeInterface.dispatch,
      getState = _storeInterface.getState,
      context = _storeInterface.context,
      sagaMonitor = _storeInterface.sagaMonitor,
      logger = _storeInterface.logger,
      onError = _storeInterface.onError;


  var effectId = uid();

  if (sagaMonitor) {
    // monitors are expected to have a certain interface, let's fill-in any missing ones
    sagaMonitor.effectTriggered = sagaMonitor.effectTriggered || noop;
    sagaMonitor.effectResolved = sagaMonitor.effectResolved || noop;
    sagaMonitor.effectRejected = sagaMonitor.effectRejected || noop;
    sagaMonitor.effectCancelled = sagaMonitor.effectCancelled || noop;
    sagaMonitor.actionDispatched = sagaMonitor.actionDispatched || noop;

    sagaMonitor.effectTriggered({ effectId: effectId, root: true, parentEffectId: 0, effect: { root: true, saga: saga, args: args } });
  }

  var task = proc(iterator, subscribe, wrapSagaDispatch(dispatch), getState, context, { sagaMonitor: sagaMonitor, logger: logger, onError: onError }, effectId, saga.name);

  if (sagaMonitor) {
    sagaMonitor.effectResolved(effectId, task);
  }

  return task;
}
// CONCATENATED MODULE: ./node_modules/redux-saga/es/internal/middleware.js
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






function sagaMiddlewareFactory() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref$context = _ref.context,
      context = _ref$context === undefined ? {} : _ref$context,
      options = _objectWithoutProperties(_ref, ['context']);

  var sagaMonitor = options.sagaMonitor,
      logger = options.logger,
      onError = options.onError;


  if (is.func(options)) {
    if (true) {
      throw new Error('Saga middleware no longer accept Generator functions. Use sagaMiddleware.run instead');
    } else {}
  }

  if (logger && !is.func(logger)) {
    throw new Error('`options.logger` passed to the Saga middleware is not a function!');
  }

  if (false) {}

  if (onError && !is.func(onError)) {
    throw new Error('`options.onError` passed to the Saga middleware is not a function!');
  }

  if (options.emitter && !is.func(options.emitter)) {
    throw new Error('`options.emitter` passed to the Saga middleware is not a function!');
  }

  function sagaMiddleware(_ref2) {
    var getState = _ref2.getState,
        dispatch = _ref2.dispatch;

    var sagaEmitter = emitter();
    sagaEmitter.emit = (options.emitter || ident)(sagaEmitter.emit);

    sagaMiddleware.run = runSaga.bind(null, {
      context: context,
      subscribe: sagaEmitter.subscribe,
      dispatch: dispatch,
      getState: getState,
      sagaMonitor: sagaMonitor,
      logger: logger,
      onError: onError
    });

    return function (next) {
      return function (action) {
        if (sagaMonitor && sagaMonitor.actionDispatched) {
          sagaMonitor.actionDispatched(action);
        }
        var result = next(action); // hit reducers
        sagaEmitter.emit(action);
        return result;
      };
    };
  }

  sagaMiddleware.run = function () {
    throw new Error('Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware');
  };

  sagaMiddleware.setContext = function (props) {
    check(props, is.object, createSetContextWarning('sagaMiddleware', props));
    object.assign(context, props);
  };

  return sagaMiddleware;
}
// CONCATENATED MODULE: ./node_modules/redux-saga/es/internal/sagaHelpers/fsmIterator.js


var done = { done: true, value: undefined };
var qEnd = {};

function safeName(patternOrChannel) {
  if (is.channel(patternOrChannel)) {
    return 'channel';
  } else if (Array.isArray(patternOrChannel)) {
    return String(patternOrChannel.map(function (entry) {
      return String(entry);
    }));
  } else {
    return String(patternOrChannel);
  }
}

function fsmIterator(fsm, q0) {
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'iterator';

  var updateState = void 0,
      qNext = q0;

  function next(arg, error) {
    if (qNext === qEnd) {
      return done;
    }

    if (error) {
      qNext = qEnd;
      throw error;
    } else {
      updateState && updateState(arg);

      var _fsm$qNext = fsm[qNext](),
          q = _fsm$qNext[0],
          output = _fsm$qNext[1],
          _updateState = _fsm$qNext[2];

      qNext = q;
      updateState = _updateState;
      return qNext === qEnd ? done : output;
    }
  }

  return makeIterator(next, function (error) {
    return next(null, error);
  }, name, true);
}
// CONCATENATED MODULE: ./node_modules/redux-saga/es/internal/sagaHelpers/takeEvery.js




function takeEvery(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = { done: false, value: io_take(patternOrChannel) };
  var yFork = function yFork(ac) {
    return { done: false, value: fork.apply(undefined, [worker].concat(args, [ac])) };
  };

  var action = void 0,
      setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === END ? [qEnd] : ['q1', yFork(action)];
    }
  }, 'q1', 'takeEvery(' + safeName(patternOrChannel) + ', ' + worker.name + ')');
}
// CONCATENATED MODULE: ./node_modules/redux-saga/es/internal/sagaHelpers/takeLatest.js




function takeLatest(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = { done: false, value: io_take(patternOrChannel) };
  var yFork = function yFork(ac) {
    return { done: false, value: fork.apply(undefined, [worker].concat(args, [ac])) };
  };
  var yCancel = function yCancel(task) {
    return { done: false, value: io_cancel(task) };
  };

  var task = void 0,
      action = void 0;
  var setTask = function setTask(t) {
    return task = t;
  };
  var setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === END ? [qEnd] : task ? ['q3', yCancel(task)] : ['q1', yFork(action), setTask];
    },
    q3: function q3() {
      return ['q1', yFork(action), setTask];
    }
  }, 'q1', 'takeLatest(' + safeName(patternOrChannel) + ', ' + worker.name + ')');
}
// CONCATENATED MODULE: ./node_modules/redux-saga/es/internal/sagaHelpers/throttle.js






function throttle(delayLength, pattern, worker) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action = void 0,
      channel = void 0;

  var yActionChannel = { done: false, value: actionChannel(pattern, buffers.sliding(1)) };
  var yTake = function yTake() {
    return { done: false, value: io_take(channel) };
  };
  var yFork = function yFork(ac) {
    return { done: false, value: fork.apply(undefined, [worker].concat(args, [ac])) };
  };
  var yDelay = { done: false, value: call(delay, delayLength) };

  var setAction = function setAction(ac) {
    return action = ac;
  };
  var setChannel = function setChannel(ch) {
    return channel = ch;
  };

  return fsmIterator({
    q1: function q1() {
      return ['q2', yActionChannel, setChannel];
    },
    q2: function q2() {
      return ['q3', yTake(), setAction];
    },
    q3: function q3() {
      return action === END ? [qEnd] : ['q4', yFork(action)];
    },
    q4: function q4() {
      return ['q2', yDelay];
    }
  }, 'q1', 'throttle(' + safeName(pattern) + ', ' + worker.name + ')');
}
// CONCATENATED MODULE: ./node_modules/redux-saga/es/internal/sagaHelpers/index.js






var deprecationWarning = function deprecationWarning(helperName) {
  return 'import { ' + helperName + ' } from \'redux-saga\' has been deprecated in favor of import { ' + helperName + ' } from \'redux-saga/effects\'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield ' + helperName + ' will return task descriptor to your saga and execute next lines of code.';
};

var sagaHelpers_takeEvery = /*#__PURE__*/deprecate(takeEvery, /*#__PURE__*/deprecationWarning('takeEvery'));
var sagaHelpers_takeLatest = /*#__PURE__*/deprecate(takeLatest, /*#__PURE__*/deprecationWarning('takeLatest'));
var sagaHelpers_throttle = /*#__PURE__*/deprecate(throttle, /*#__PURE__*/deprecationWarning('throttle'));


// CONCATENATED MODULE: ./node_modules/redux-saga/es/internal/io-helpers.js



function io_helpers_takeEvery(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return fork.apply(undefined, [takeEvery, patternOrChannel, worker].concat(args));
}

function io_helpers_takeLatest(patternOrChannel, worker) {
  for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  return fork.apply(undefined, [takeLatest, patternOrChannel, worker].concat(args));
}

function io_helpers_throttle(ms, pattern, worker) {
  for (var _len3 = arguments.length, args = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
    args[_key3 - 3] = arguments[_key3];
  }

  return fork.apply(undefined, [throttle, ms, pattern, worker].concat(args));
}
// CONCATENATED MODULE: ./node_modules/redux-saga/es/effects.js



// CONCATENATED MODULE: ./node_modules/redux-saga/es/utils.js



// CONCATENATED MODULE: ./node_modules/redux-saga/es/index.js

/* harmony default export */ var es = (sagaMiddlewareFactory);












// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(10);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./app/actions/actions.js
var actions_actions = __webpack_require__(13);

// EXTERNAL MODULE: ./app/utils/ExtensionStorage.js
var ExtensionStorage = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(24);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(2);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(3);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(19);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(20);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(17);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// CONCATENATED MODULE: ./app/utils/boostrap/BootstrapModule.js



var BootstrapModule_BootstrapModule = /*#__PURE__*/function () {
  function BootstrapModule() {
    classCallCheck_default()(this, BootstrapModule);
  }

  createClass_default()(BootstrapModule, null, [{
    key: "init",
    value: function init() {
      throw new Error('You have to implement the method init()!');
    }
  }]);

  return BootstrapModule;
}();


// CONCATENATED MODULE: ./app/utils/boostrap/Configuration.js








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var _appSettings = {};
var _afpData = {};

var Configuration_Configuration = /*#__PURE__*/function (_BootstrapModule) {
  inherits_default()(Configuration, _BootstrapModule);

  var _super = _createSuper(Configuration);

  function Configuration() {
    classCallCheck_default()(this, Configuration);

    return _super.apply(this, arguments);
  }

  createClass_default()(Configuration, null, [{
    key: "init",
    value: function init() {
      return new Promise( /*#__PURE__*/function () {
        var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(resolve) {
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return ExtensionStorage["a" /* ExtensionStorage */].getSync(app["c" /* StorageKeys */].AppSettings.KEY);

                case 2:
                  _context.t0 = _context.sent;

                  if (_context.t0) {
                    _context.next = 5;
                    break;
                  }

                  _context.t0 = {};

                case 5:
                  _appSettings = _context.t0;
                  _context.next = 8;
                  return ExtensionStorage["a" /* ExtensionStorage */].get(app["c" /* StorageKeys */].AFPData.KEY);

                case 8:
                  _context.t1 = _context.sent;

                  if (_context.t1) {
                    _context.next = 11;
                    break;
                  }

                  _context.t1 = {};

                case 11:
                  _afpData = _context.t1;

                  if (Object.keys(_appSettings).length === 0) {
                    _appSettings = settings["a" /* default */].DEFAULT_SETTINGS;
                    ExtensionStorage["a" /* ExtensionStorage */].setSync(app["c" /* StorageKeys */].AppSettings.KEY, _appSettings);
                    Logger["a" /* Logger */].info("Initialized settings to default");
                  }

                  if (Object.keys(_afpData).length === 0) {
                    _afpData = settings["a" /* default */].DEFAULT_AFP_DATA;
                    ExtensionStorage["a" /* ExtensionStorage */].set(app["c" /* StorageKeys */].AFPData.KEY, settings["a" /* default */].DEFAULT_AFP_DATA);
                    Logger["a" /* Logger */].info("Initialized fingerprint detection counter to 0");
                  }

                  Logger["a" /* Logger */].info("App Configuration initialized");
                  resolve();

                case 16:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "appSettings",
    get: function get() {
      return _appSettings;
    }
  }, {
    key: "stats",
    get: function get() {
      return _afpData;
    }
  }]);

  return Configuration;
}(BootstrapModule_BootstrapModule);


// CONCATENATED MODULE: ./app/sagas/toggle-fingerprint-protection.js


var _marked = /*#__PURE__*/regenerator_default.a.mark(toggleFingerprintProtectionSaga);







function updateStorageDisabledUrls(fullUrl, status) {
  ExtensionStorage["a" /* ExtensionStorage */].getSync(app["c" /* StorageKeys */].AppSettings.KEY).then(function (result) {
    var url = new URL(fullUrl);

    if (status) {
      result.disabled = result.disabled.filter(function (u) {
        return u !== url.hostname;
      });
    } else {
      if (!result.disabled.includes(url.hostname)) {
        result.disabled.push(url.hostname);
      }
    }

    ExtensionStorage["a" /* ExtensionStorage */].setSync(app["c" /* StorageKeys */].AppSettings.KEY, result);
    Configuration_Configuration.init();
  });
}

function toggleFingerprintProtectionSaga(action) {
  return regenerator_default.a.wrap(function toggleFingerprintProtectionSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          updateStorageDisabledUrls(action.url, action.data);
          _context.next = 3;
          return io_put(Object(actions_actions["f" /* updateFingerprintProtectionStatus */])(action.data));

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}


// CONCATENATED MODULE: ./app/sagas/toggle-social-media-protection.js


var toggle_social_media_protection_marked = /*#__PURE__*/regenerator_default.a.mark(toggleSocialMediaProtectionSaga);







function updateStorageSocialMediaProtection(status) {
  ExtensionStorage["a" /* ExtensionStorage */].getSync(app["c" /* StorageKeys */].AppSettings.KEY).then(function (result) {
    result.socialMediaProtection = status;
    ExtensionStorage["a" /* ExtensionStorage */].setSync(app["c" /* StorageKeys */].AppSettings.KEY, result);
    Configuration_Configuration.init();
  });
}

function toggleSocialMediaProtectionSaga(action) {
  return regenerator_default.a.wrap(function toggleSocialMediaProtectionSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          updateStorageSocialMediaProtection(action.data);
          _context.next = 3;
          return io_put(Object(actions_actions["g" /* updateSocialMediaProtectionStatus */])(action.data));

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, toggle_social_media_protection_marked);
}


// CONCATENATED MODULE: ./app/sagas/fingerprint-detected.js


var fingerprint_detected_marked = /*#__PURE__*/regenerator_default.a.mark(fingerprintAttemptDetectedSaga);







function fingerprintAttemptDetectedSaga() {
  var _updatedStorage;

  var state, newCounter, updatedStorage;
  return regenerator_default.a.wrap(function fingerprintAttemptDetectedSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return io_select();

        case 2:
          state = _context.sent;
          newCounter = state.antiFingerprint.detectionAttempts + 1;
          updatedStorage = (_updatedStorage = {}, _updatedStorage[app["c" /* StorageKeys */].AFPData.FINGERPRINT_ATTEMPTS_DETECTED_COUNTER] = newCounter, _updatedStorage);
          ExtensionStorage["a" /* ExtensionStorage */].set(app["c" /* StorageKeys */].AFPData.KEY, updatedStorage);
          _context.next = 8;
          return io_put(Object(actions_actions["a" /* incrementFingerprintAttempts */])());

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, fingerprint_detected_marked);
}


// CONCATENATED MODULE: ./app/sagas/index.js


var sagas_marked = /*#__PURE__*/regenerator_default.a.mark(rootSaga);







function rootSaga() {
  return regenerator_default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return io_helpers_takeEvery(actions["c" /* TOGGLE_FINGERPRINT_PROTECTION */], toggleFingerprintProtectionSaga);

        case 2:
          _context.next = 4;
          return io_helpers_takeEvery(actions["d" /* TOGGLE_SOCIAL_MEDIA_PROTECTION */], toggleSocialMediaProtectionSaga);

        case 4:
          _context.next = 6;
          return io_helpers_takeEvery(actions["a" /* FINGERPRINT_ATTEMPT_DETECTED */], fingerprintAttemptDetectedSaga);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, sagas_marked);
}

/* harmony default export */ var sagas = (rootSaga);
// CONCATENATED MODULE: ./app/store/configureStore.js





var configureStore_sagaMiddleware = es();
var middleware = [configureStore_sagaMiddleware, burger_burgerMiddleware]; //const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });

var configureStore_store = Object(redux["d" /* createStore */])(reducers, redux["a" /* applyMiddleware */].apply(void 0, middleware));
configureStore_sagaMiddleware.run(sagas);
/* harmony default export */ var configureStore = (configureStore_store);
// EXTERNAL MODULE: ./node_modules/redux-webext/lib/index.js
var lib = __webpack_require__(38);

// EXTERNAL MODULE: ./app/utils/Utils.js
var Utils = __webpack_require__(39);

// CONCATENATED MODULE: ./app/utils/boostrap/Noise.js








function Noise_createSuper(Derived) { var hasNativeReflectConstruct = Noise_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Noise_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Noise_Noise = /*#__PURE__*/function (_BootstrapModule) {
  inherits_default()(Noise, _BootstrapModule);

  var _super = Noise_createSuper(Noise);

  function Noise() {
    classCallCheck_default()(this, Noise);

    return _super.apply(this, arguments);
  }

  createClass_default()(Noise, null, [{
    key: "init",
    value: function init() {
      return new Promise( /*#__PURE__*/function () {
        var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(resolve) {
          var CanvasNoise;
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  CanvasNoise = {
                    r: Utils["a" /* Utils */].randomInt(-10, 20),
                    g: Utils["a" /* Utils */].randomInt(-10, 20),
                    b: Utils["a" /* Utils */].randomInt(-10, 20),
                    a: Utils["a" /* Utils */].randomInt(-10, 20)
                  };
                  ExtensionStorage["a" /* ExtensionStorage */].setSync(app["c" /* StorageKeys */].NOISE, CanvasNoise);
                  Logger["a" /* Logger */].info("New noise has been generated");
                  resolve();

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }]);

  return Noise;
}(BootstrapModule_BootstrapModule);


// CONCATENATED MODULE: ./app/utils/boostrap/Shepherd.js








function Shepherd_createSuper(Derived) { var hasNativeReflectConstruct = Shepherd_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Shepherd_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Shepherd_Shepherd = /*#__PURE__*/function (_BootstrapModule) {
  inherits_default()(Shepherd, _BootstrapModule);

  var _super = Shepherd_createSuper(Shepherd);

  function Shepherd() {
    classCallCheck_default()(this, Shepherd);

    return _super.apply(this, arguments);
  }

  createClass_default()(Shepherd, null, [{
    key: "init",
    value: function init() {
      return new Promise( /*#__PURE__*/function () {
        var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(resolve) {
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  fetch(settings["a" /* default */].SHEPHERD_URL).then(function (response) {
                    return response.json();
                  }).then(function (json) {
                    var _json$config = json.config,
                        profiles = _json$config.profiles,
                        disabledDomainFeatures = _json$config.disabledDomainFeatures;
                    var newSettings = Configuration_Configuration.appSettings;
                    newSettings.profiles = profiles;
                    newSettings.disabledDomainFeatures = disabledDomainFeatures;
                    ExtensionStorage["a" /* ExtensionStorage */].setSync(app["c" /* StorageKeys */].AppSettings.KEY, newSettings);
                    resolve();
                  });

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }]);

  return Shepherd;
}(BootstrapModule_BootstrapModule);


// CONCATENATED MODULE: ./app/utils/AppBootstrap.js





var appModules = [Noise_Noise, Configuration_Configuration, Shepherd_Shepherd];

var AppBootstrap_AppBootstrap = /*#__PURE__*/function () {
  function AppBootstrap() {
    classCallCheck_default()(this, AppBootstrap);
  }

  createClass_default()(AppBootstrap, null, [{
    key: "init",
    value: function init() {
      var loadedModules = [];
      return new Promise(function (resolve, reject) {
        for (var i = 0; i < appModules.length; i++) {
          loadedModules.push(appModules[i].init());
        }

        Promise.all(loadedModules).then(function () {
          resolve(true);
        });
      });
    }
  }]);

  return AppBootstrap;
}();


// CONCATENATED MODULE: ./app/constants/social-resources.js
var SocialResources = {
  "facebook.com": ["https://www.facebook.com/favicon.ico\\?_rdr=p"],
  "google.com": ["https://accounts.google.com/ServiceLogin\\?passive=true&continue=https%3A%2F%2Fwww.google.com%2Ffavicon.ico(.+)"],
  "blizzard.com": ["https://eu.blizzard.com/static/_images/favicon.ico", "https://us.battle.net/forums/static/images/icons/bnet-favicon.ico"],
  "youtube.com": ["https://accounts.google.com/ServiceLogin\\?passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Ffavicon.ico(.+)"],
  "github.com": ["https://github.com/favicon.ico\\?id=1"],
  "airbnb.com": ["https://www.airbnb.com/login\\?redirect_params\\[action\\]=favicon.ico&redirect_params\\[controller\\]=home"],
  "spotify": ["https://www.spotify.com/[a-zA-Z]{2,3}/login/\\?forward_url=https%3A%2F%2Fwww.spotify.com%2Ffavicon.ico"],
  "slack.com": ["https://slack.com/checkcookie\\?redir=https%3A%2F%2Fslack.com%2Ffavicon.ico%23"],
  "steam.com": ["https://store.steampowered.com/login/\\?redir=favicon.ico"],
  "pinterest.com": ["https://www.pinterest.com/login/\\?next=https%3A%2F%2Fwww.pinterest.com%2Ffavicon.ico"],
  "dropbox.com": ["https://www.dropbox.com/login\\?cont=https%3A%2F%2Fwww.dropbox.com%2Fstatic%2Fimages%2Fabout%2Fdropbox_logo_glyph_2015.svg"],
  "twitter": ["https://twitter.com/login\\?redirect_after_login=https%3a%2f%2ftwitter.com%2ffavicon.ico"],
  "medium.com": ["https://medium.com/m/signin\\?redirect=https%3A%2F%2Fmedium.com%2Ffavicon.ico&loginType=default"],
  "ycombinator.com": ["https://news.ycombinator.com/login\\?goto=y18.gif%23"],
  "imdb.com": ["https://www.imdb.com/ap/signin\\?_encoding=UTF8&openid.assoc_handle=imdb_us&openid.claimed_id=http%3a%2f%2fspecs.openid.net%2fauth%2f2.0%2fidentifier_select&openid.identity=http%3a%2f%2fspecs.openid.net%2fauth%2f2.0%2fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3a%2f%2fspecs.openid.net%2fauth%2f2.0&openid.pape.max_auth_age=10000000&openid.return_to=https%3a%2f%2fwww.imdb.com%2ffavicon.ico"],
  "craigslist.org": ["https://accounts.craigslist.org/login\\?rt=L&rp=%2ffavicon.ico&step=confirmation"],
  "vk.com": ["https://vk.com/login\\?u=2&to=ZmF2aWNvbi5pY28-"],
  "tumblr.com": ["https://www.tumblr.com/(login|signin)/?\\??(.+)favicon.ico"],
  "flickr.com": ["https://www.flickr.com/(login|signin)/?\\??(.+)favicon.ico"],
  "blogger.com": ["https://www.blogger.com/favicon.ico"],
  "amazon.com": ["https://www.amazon.com/favicon.ico"],
  "disqus.com": ["https://disqus.com/favicon.ico"],
  "meetup.com": ["https://secure.meetup.com/login/\\?returnUri=https%3A%2F%2Fwww.meetup.com%2Fimg%2Fajax_loader_trans.gif"],
  "khanacademy.org": ["https://www.khanacademy.org/login\\?continue=https%3A//www.khanacademy.org/favicon.ico"],
  "500px.com": ["https://500px.com/login\\?r=%2Ffavicon.ico"]
};
// EXTERNAL MODULE: ./app/constants/profiles.js
var constants_profiles = __webpack_require__(15);

// CONCATENATED MODULE: ./chrome/extension/background.js
var _storeActions;













var storeActions = (_storeActions = {}, _storeActions[actions["c" /* TOGGLE_FINGERPRINT_PROTECTION */]] = actions_actions["c" /* toggleFingerprintProtection */], _storeActions[actions["d" /* TOGGLE_SOCIAL_MEDIA_PROTECTION */]] = actions_actions["d" /* toggleSocialMediaProtection */], _storeActions);
Object(lib["createBackgroundStore"])({
  store: configureStore,
  actions: storeActions
});
AppBootstrap_AppBootstrap.init().then(function () {
  configureStore.dispatch(Object(actions_actions["g" /* updateSocialMediaProtectionStatus */])(Configuration_Configuration.appSettings.socialMediaProtection));
  configureStore.dispatch(Object(actions_actions["e" /* updateFingerprintAttemptsCounter */])(Configuration_Configuration.stats[app["c" /* StorageKeys */].AFPData.FINGERPRINT_ATTEMPTS_DETECTED_COUNTER]));
  chrome.webRequest.onBeforeSendHeaders.addListener(function (details) {
    var url;

    try {
      url = new URL(details.url);
    } catch (e) {
      Logger["a" /* Logger */].error(e.message);
    }

    var hostname = url.hostname;
    var modifiedHeaders = [];

    if (!Configuration_Configuration.appSettings.disabled.includes(hostname)) {
      var domainProfile = Configuration_Configuration.appSettings.profiles.find(function (p) {
        return p.domain === hostname;
      });
      var profileNumber = domainProfile ? domainProfile.profile : constants_profiles["a" /* ProfileType */].Default;
      var currentProfile = constants_profiles["b" /* Profiles */][profileNumber];
      var initiator = details.initiator || "";
      var headers = details.requestHeaders;

      if (Configuration_Configuration.appSettings.socialMediaProtection) {
        for (var resourceHost in SocialResources) {
          if (SocialResources.hasOwnProperty(resourceHost)) {
            // Allow requests to resource only from the same host
            if (!initiator.includes(resourceHost) && SocialResources[resourceHost].some(function (u) {
              return details.url.match(u);
            })) {
              Logger["a" /* Logger */].log("Blocking social resource for ".concat(resourceHost));
              return {
                cancel: true
              };
            }
          }
        }
      }

      headers.forEach(function (h) {
        // If the header should not be omitted
        if (!currentProfile.OmitHeaders || !currentProfile.OmitHeaders.includes(h.name)) {
          // If the header should not be overriden
          if (!currentProfile.Headers[h.name]) {
            modifiedHeaders.push(h);
          }
        } else {//Logger.log(`Omitting header ${h.name}`);
        }
      });
      var counter = Object.keys(modifiedHeaders).length;

      for (var header in currentProfile.Headers) {
        if (currentProfile.Headers.hasOwnProperty(header)) {
          modifiedHeaders[counter] = {
            name: header,
            value: currentProfile.Headers[header]
          };
          counter++;
        }
      }
    } else {
      modifiedHeaders = details.requestHeaders; // keep original request headers if site is disabled
    }

    return {
      requestHeaders: modifiedHeaders
    };
  }, {
    urls: ["<all_urls>"]
  }, ['requestHeaders', 'extraHeaders', 'blocking']);
});
chrome.runtime.onMessage.addListener(function (request) {
  if (request.type === 'fingerprintAttemptDetected') {
    Logger["a" /* Logger */].info("Fingerprint attempt dispatched");
    configureStore.dispatch(actions_actions["b" /* notifyFingerprintAttempt */]());

    if (Configuration_Configuration.appSettings.notifications) {
      chrome.notifications.create('fingerprint-attempt', request.payload, function () {});
    }
  } else if (request.type === 'setFontFilter') {
    if (chrome.fontSettings && chrome.fontSettings.setFontsFilter) {
      Logger["a" /* Logger */].info("Setting font filter");
      chrome.fontSettings.setFontsFilterEnabled(true);
      chrome.fontSettings.setFontsFilter(request.payload);
    } else {
      Logger["a" /* Logger */].info("Font filter is not supported in this browser");
    }
  }
});

function updateStatus() {
  chrome.tabs.query({
    'active': true
  }, function (tabs) {
    if (tabs[0].url) {
      var url = new URL(tabs[0].url);

      if (Configuration_Configuration.appSettings.disabled.includes(url.hostname)) {
        configureStore.dispatch(Object(actions_actions["f" /* updateFingerprintProtectionStatus */])(false));
      } else {
        configureStore.dispatch(Object(actions_actions["f" /* updateFingerprintProtectionStatus */])(true));
      }
    }
  });
}

chrome.tabs.onActivated.addListener(updateStatus);
chrome.tabs.onUpdated.addListener(updateStatus);

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(57);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

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

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(8);

var assertThisInitialized = __webpack_require__(46);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(30), __webpack_require__(44)(module)))

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __DO_NOT_USE__ActionTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return combineReducers; });
/* unused harmony export compose */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createStore; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {}




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

/***/ 30:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


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

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CONNECTION_NAME = exports.CONNECTION_NAME = 'redux-webext';
var DISPATCH = exports.DISPATCH = '@@STORE_DISPATCH';
var UPDATE_STATE = exports.UPDATE_STATE = '@@STORE_UPDATE_STATE';

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backgroundStore = __webpack_require__(47);

Object.defineProperty(exports, 'createBackgroundStore', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_backgroundStore).default;
  }
});

var _uiStore = __webpack_require__(48);

Object.defineProperty(exports, 'createUIStore', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_uiStore).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var Utils = /*#__PURE__*/function () {
  function Utils() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Utils);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Utils, null, [{
    key: "getDomain",
    value: function getDomain(url) {
      var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);

      if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
        return match[2];
      } else {
        return null;
      }
    }
  }, {
    key: "hash",
    value: function hash(str) {
      var stringHash = __webpack_require__(34);

      return stringHash(str) + "";
    }
  }, {
    key: "randomInt",
    value: function randomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }, {
    key: "randomArrValue",
    value: function randomArrValue(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
  }, {
    key: "kFormatter",
    value: function kFormatter(num) {
      return num > 999 ? (num / 1000).toFixed(1) + 'k' : num;
    }
  }]);

  return Utils;
}();

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FINGERPRINT_ATTEMPT_DETECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UPDATE_FINGERPRINT_ATTEMPT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return INCREMENT_FINGERPRINT_ATTEMPTS_DETECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TOGGLE_FINGERPRINT_PROTECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TOGGLE_SOCIAL_MEDIA_PROTECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return UPDATE_FINGERPRINT_PROTECTION_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return UPDATE_SOCIAL_MEDIA_PROTECTION_STATUS; });
var FINGERPRINT_ATTEMPT_DETECTED = "app::fingerprint_attempt_detected";
var UPDATE_FINGERPRINT_ATTEMPT_COUNTER = "app::update_fingerprint_attempt_counter";
var INCREMENT_FINGERPRINT_ATTEMPTS_DETECTED = "app::increment_fingerprint_attempt_detected";
var TOGGLE_FINGERPRINT_PROTECTION = "app::toggle_fingerprint_protection";
var TOGGLE_SOCIAL_MEDIA_PROTECTION = "app::toggle_social_media_protection_status";
var UPDATE_FINGERPRINT_PROTECTION_STATUS = "app::update_fingerprint_protection_status";
var UPDATE_SOCIAL_MEDIA_PROTECTION_STATUS = "app::update_social_media_protection_status";

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ 46:
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = createBackgroundStore;

var _constants = __webpack_require__(33);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var store = void 0,
    actions = void 0,
    onDisconnect = void 0;

// eslint-disable-next-line consistent-return
function handleMessage(msg, sender, cb) {
    if (msg.type === _constants.DISPATCH) {
        var _msg$action = msg.action,
            type = _msg$action.type,
            actionData = _objectWithoutProperties(_msg$action, ['type']);

        var action = actions[type];

        if (action) {
            // if action doesn't have any data we should pass "undefined"
            store.dispatch(action(Object.keys(actionData).length ? actionData : undefined));
        } else {
            console.error('Provided in background store "actions" object doesn\'t contain "' + type + '" key.');
        }
    } else if (msg.type === _constants.UPDATE_STATE) {
        cb(store.getState());

        // keep channel open, https://developer.chrome.com/extensions/runtime#event-onMessage
        return true;
    }
}

// allow other parts of the app to reuse the store, e.g. popup
function handleConnection(connection) {
    if (connection.name !== _constants.CONNECTION_NAME) {
        return;
    }

    // send updated state to other parts of the app on every change
    var unsubscribe = store.subscribe(function () {
        connection.postMessage({
            type: _constants.UPDATE_STATE,
            data: store.getState()
        });
    });

    // unsubscribe on disconnect
    connection.onDisconnect.addListener(function () {
        unsubscribe();

        if (onDisconnect) {
            onDisconnect();
        }
    });
}

function createBackgroundStore(options) {
    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object' || _typeof(options.store) !== 'object') {
        throw new Error('Expected the "store" to be an object.');
    }

    if (options.hasOwnProperty('actions') && _typeof(options.actions) !== 'object') {
        throw new Error('Expected the "actions" to be an object.');
    }

    if (options.hasOwnProperty('onDisconnect') && typeof options.onDisconnect !== 'function') {
        throw new Error('Expected the "onDisconnect" to be a function.');
    }

    store = options.store;
    actions = options.actions || {};
    onDisconnect = options.onDisconnect;

    chrome.runtime.onConnect.addListener(handleConnection);
    chrome.runtime.onMessage.addListener(handleMessage);

    return store;
}

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    // connect to "background" store
    var connection = chrome.runtime.connect({ name: _constants.CONNECTION_NAME });

    // listen for changes in the "background" store
    connection.onMessage.addListener(handleMessage);

    // return promise to allow getting current state of "background" store
    return new Promise(function (resolve) {
        chrome.runtime.sendMessage({ type: _constants.UPDATE_STATE }, function (res) {
            state = res;

            // return an object with equivalent to Redux store interface
            resolve({
                subscribe: subscribe,
                dispatch: dispatch,
                getState: getState
            });
        });
    });
};

var _constants = __webpack_require__(33);

var listeners = [];

var state = void 0;

function handleMessage(msg) {
    if (msg.type === _constants.UPDATE_STATE) {
        state = msg.data;

        listeners.forEach(function (l) {
            return l();
        });
    }
}

function subscribe(listener) {
    listeners.push(listener);

    // return unsubscribe function
    return function () {
        listeners = listeners.filter(function (l) {
            return l !== listener;
        });
    };
}

function dispatch(action) {
    // perform an action to change state of "background" store
    chrome.runtime.sendMessage({
        type: _constants.DISPATCH,
        action: action
    });
}

function getState() {
    return state;
}

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

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

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31);
module.exports = __webpack_require__(181);


/***/ })

/******/ });