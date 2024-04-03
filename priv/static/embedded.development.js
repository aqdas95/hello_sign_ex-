(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HelloSign"] = factory();
	else
		root["HelloSign"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/common-tags/es/TemplateTag/TemplateTag.js":
/*!****************************************************************!*\
  !*** ./node_modules/common-tags/es/TemplateTag/TemplateTag.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
__webpack_require__(/*! core-js/modules/es6.object.freeze.js */ "./node_modules/core-js/modules/es6.object.freeze.js");
__webpack_require__(/*! core-js/modules/es6.array.map.js */ "./node_modules/core-js/modules/es6.array.map.js");
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);
function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/**
 * @class TemplateTag
 * @classdesc Consumes a pipeline of composable transformer plugins and produces a template tag.
 */
var TemplateTag = function () {
  /**
   * constructs a template tag
   * @constructs TemplateTag
   * @param  {...Object} [...transformers] - an array or arguments list of transformers
   * @return {Function}                    - a template tag
   */
  function TemplateTag() {
    var _this = this;
    for (var _len = arguments.length, transformers = Array(_len), _key = 0; _key < _len; _key++) {
      transformers[_key] = arguments[_key];
    }
    _classCallCheck(this, TemplateTag);
    this.tag = function (strings) {
      for (var _len2 = arguments.length, expressions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        expressions[_key2 - 1] = arguments[_key2];
      }
      if (typeof strings === 'function') {
        // if the first argument passed is a function, assume it is a template tag and return
        // an intermediary tag that processes the template using the aforementioned tag, passing the
        // result to our tag
        return _this.interimTag.bind(_this, strings);
      }
      if (typeof strings === 'string') {
        // if the first argument passed is a string, just transform it
        return _this.transformEndResult(strings);
      }

      // else, return a transformed end result of processing the template with our tag
      strings = strings.map(_this.transformString.bind(_this));
      return _this.transformEndResult(strings.reduce(_this.processSubstitutions.bind(_this, expressions)));
    };

    // if first argument is an array, extrude it as a list of transformers
    if (transformers.length > 0 && Array.isArray(transformers[0])) {
      transformers = transformers[0];
    }

    // if any transformers are functions, this means they are not initiated - automatically initiate them
    this.transformers = transformers.map(function (transformer) {
      return typeof transformer === 'function' ? transformer() : transformer;
    });

    // return an ES2015 template tag
    return this.tag;
  }

  /**
   * Applies all transformers to a template literal tagged with this method.
   * If a function is passed as the first argument, assumes the function is a template tag
   * and applies it to the template, returning a template tag.
   * @param  {(Function|String|Array<String>)} strings        - Either a template tag or an array containing template strings separated by identifier
   * @param  {...*}                            ...expressions - Optional list of substitution values.
   * @return {(String|Function)}                              - Either an intermediary tag function or the results of processing the template.
   */

  _createClass(TemplateTag, [{
    key: 'interimTag',
    /**
     * An intermediary template tag that receives a template tag and passes the result of calling the template with the received
     * template tag to our own template tag.
     * @param  {Function}        nextTag          - the received template tag
     * @param  {Array<String>}   template         - the template to process
     * @param  {...*}            ...substitutions - `substitutions` is an array of all substitutions in the template
     * @return {*}                                - the final processed value
     */
    value: function interimTag(previousTag, template) {
      for (var _len3 = arguments.length, substitutions = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        substitutions[_key3 - 2] = arguments[_key3];
      }
      return this.tag(_templateObject, previousTag.apply(undefined, [template].concat(substitutions)));
    }

    /**
     * Performs bulk processing on the tagged template, transforming each substitution and then
     * concatenating the resulting values into a string.
     * @param  {Array<*>} substitutions - an array of all remaining substitutions present in this template
     * @param  {String}   resultSoFar   - this iteration's result string so far
     * @param  {String}   remainingPart - the template chunk after the current substitution
     * @return {String}                 - the result of joining this iteration's processed substitution with the result
     */
  }, {
    key: 'processSubstitutions',
    value: function processSubstitutions(substitutions, resultSoFar, remainingPart) {
      var substitution = this.transformSubstitution(substitutions.shift(), resultSoFar);
      return ''.concat(resultSoFar, substitution, remainingPart);
    }

    /**
     * Iterate through each transformer, applying the transformer's `onString` method to the template
     * strings before all substitutions are processed.
     * @param {String}  str - The input string
     * @return {String}     - The final results of processing each transformer
     */
  }, {
    key: 'transformString',
    value: function transformString(str) {
      var cb = function cb(res, transform) {
        return transform.onString ? transform.onString(res) : res;
      };
      return this.transformers.reduce(cb, str);
    }

    /**
     * When a substitution is encountered, iterates through each transformer and applies the transformer's
     * `onSubstitution` method to the substitution.
     * @param  {*}      substitution - The current substitution
     * @param  {String} resultSoFar  - The result up to and excluding this substitution.
     * @return {*}                   - The final result of applying all substitution transformations.
     */
  }, {
    key: 'transformSubstitution',
    value: function transformSubstitution(substitution, resultSoFar) {
      var cb = function cb(res, transform) {
        return transform.onSubstitution ? transform.onSubstitution(res, resultSoFar) : res;
      };
      return this.transformers.reduce(cb, substitution);
    }

    /**
     * Iterates through each transformer, applying the transformer's `onEndResult` method to the
     * template literal after all substitutions have finished processing.
     * @param  {String} endResult - The processed template, just before it is returned from the tag
     * @return {String}           - The final results of processing each transformer
     */
  }, {
    key: 'transformEndResult',
    value: function transformEndResult(endResult) {
      var cb = function cb(res, transform) {
        return transform.onEndResult ? transform.onEndResult(res) : res;
      };
      return this.transformers.reduce(cb, endResult);
    }
  }]);
  return TemplateTag;
}();
var _default = exports.default = TemplateTag;

/***/ }),

/***/ "./node_modules/common-tags/es/TemplateTag/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/common-tags/es/TemplateTag/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _TemplateTag.default;
  }
});
var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ./TemplateTag */ "./node_modules/common-tags/es/TemplateTag/TemplateTag.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/codeBlock/index.js":
/*!********************************************************!*\
  !*** ./node_modules/common-tags/es/codeBlock/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _html.default;
  }
});
var _html = _interopRequireDefault(__webpack_require__(/*! ../html */ "./node_modules/common-tags/es/html/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/commaLists/commaLists.js":
/*!**************************************************************!*\
  !*** ./node_modules/common-tags/es/commaLists/commaLists.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));
var _stripIndentTransformer = _interopRequireDefault(__webpack_require__(/*! ../stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));
var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__(/*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));
var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var commaLists = new _TemplateTag.default((0, _inlineArrayTransformer.default)({
  separator: ','
}), _stripIndentTransformer.default, _trimResultTransformer.default);
var _default = exports.default = commaLists;

/***/ }),

/***/ "./node_modules/common-tags/es/commaLists/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/common-tags/es/commaLists/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _commaLists.default;
  }
});
var _commaLists = _interopRequireDefault(__webpack_require__(/*! ./commaLists */ "./node_modules/common-tags/es/commaLists/commaLists.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/commaListsAnd/commaListsAnd.js":
/*!********************************************************************!*\
  !*** ./node_modules/common-tags/es/commaListsAnd/commaListsAnd.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));
var _stripIndentTransformer = _interopRequireDefault(__webpack_require__(/*! ../stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));
var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__(/*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));
var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var commaListsAnd = new _TemplateTag.default((0, _inlineArrayTransformer.default)({
  separator: ',',
  conjunction: 'and'
}), _stripIndentTransformer.default, _trimResultTransformer.default);
var _default = exports.default = commaListsAnd;

/***/ }),

/***/ "./node_modules/common-tags/es/commaListsAnd/index.js":
/*!************************************************************!*\
  !*** ./node_modules/common-tags/es/commaListsAnd/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _commaListsAnd.default;
  }
});
var _commaListsAnd = _interopRequireDefault(__webpack_require__(/*! ./commaListsAnd */ "./node_modules/common-tags/es/commaListsAnd/commaListsAnd.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/commaListsOr/commaListsOr.js":
/*!******************************************************************!*\
  !*** ./node_modules/common-tags/es/commaListsOr/commaListsOr.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));
var _stripIndentTransformer = _interopRequireDefault(__webpack_require__(/*! ../stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));
var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__(/*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));
var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var commaListsOr = new _TemplateTag.default((0, _inlineArrayTransformer.default)({
  separator: ',',
  conjunction: 'or'
}), _stripIndentTransformer.default, _trimResultTransformer.default);
var _default = exports.default = commaListsOr;

/***/ }),

/***/ "./node_modules/common-tags/es/commaListsOr/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/common-tags/es/commaListsOr/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _commaListsOr.default;
  }
});
var _commaListsOr = _interopRequireDefault(__webpack_require__(/*! ./commaListsOr */ "./node_modules/common-tags/es/commaListsOr/commaListsOr.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/html/html.js":
/*!**************************************************!*\
  !*** ./node_modules/common-tags/es/html/html.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));
var _stripIndentTransformer = _interopRequireDefault(__webpack_require__(/*! ../stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));
var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__(/*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));
var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));
var _splitStringTransformer = _interopRequireDefault(__webpack_require__(/*! ../splitStringTransformer */ "./node_modules/common-tags/es/splitStringTransformer/index.js"));
var _removeNonPrintingValuesTransformer = _interopRequireDefault(__webpack_require__(/*! ../removeNonPrintingValuesTransformer */ "./node_modules/common-tags/es/removeNonPrintingValuesTransformer/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var html = new _TemplateTag.default((0, _splitStringTransformer.default)('\n'), _removeNonPrintingValuesTransformer.default, _inlineArrayTransformer.default, _stripIndentTransformer.default, _trimResultTransformer.default);
var _default = exports.default = html;

/***/ }),

/***/ "./node_modules/common-tags/es/html/index.js":
/*!***************************************************!*\
  !*** ./node_modules/common-tags/es/html/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _html.default;
  }
});
var _html = _interopRequireDefault(__webpack_require__(/*! ./html */ "./node_modules/common-tags/es/html/html.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/common-tags/es/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TemplateTag", {
  enumerable: true,
  get: function get() {
    return _TemplateTag2.default;
  }
});
Object.defineProperty(exports, "codeBlock", {
  enumerable: true,
  get: function get() {
    return _codeBlock2.default;
  }
});
Object.defineProperty(exports, "commaLists", {
  enumerable: true,
  get: function get() {
    return _commaLists2.default;
  }
});
Object.defineProperty(exports, "commaListsAnd", {
  enumerable: true,
  get: function get() {
    return _commaListsAnd2.default;
  }
});
Object.defineProperty(exports, "commaListsOr", {
  enumerable: true,
  get: function get() {
    return _commaListsOr2.default;
  }
});
Object.defineProperty(exports, "html", {
  enumerable: true,
  get: function get() {
    return _html2.default;
  }
});
Object.defineProperty(exports, "inlineArrayTransformer", {
  enumerable: true,
  get: function get() {
    return _inlineArrayTransformer2.default;
  }
});
Object.defineProperty(exports, "inlineLists", {
  enumerable: true,
  get: function get() {
    return _inlineLists2.default;
  }
});
Object.defineProperty(exports, "oneLine", {
  enumerable: true,
  get: function get() {
    return _oneLine2.default;
  }
});
Object.defineProperty(exports, "oneLineCommaLists", {
  enumerable: true,
  get: function get() {
    return _oneLineCommaLists2.default;
  }
});
Object.defineProperty(exports, "oneLineCommaListsAnd", {
  enumerable: true,
  get: function get() {
    return _oneLineCommaListsAnd2.default;
  }
});
Object.defineProperty(exports, "oneLineCommaListsOr", {
  enumerable: true,
  get: function get() {
    return _oneLineCommaListsOr2.default;
  }
});
Object.defineProperty(exports, "oneLineInlineLists", {
  enumerable: true,
  get: function get() {
    return _oneLineInlineLists2.default;
  }
});
Object.defineProperty(exports, "oneLineTrim", {
  enumerable: true,
  get: function get() {
    return _oneLineTrim2.default;
  }
});
Object.defineProperty(exports, "removeNonPrintingValuesTransformer", {
  enumerable: true,
  get: function get() {
    return _removeNonPrintingValuesTransformer2.default;
  }
});
Object.defineProperty(exports, "replaceResultTransformer", {
  enumerable: true,
  get: function get() {
    return _replaceResultTransformer2.default;
  }
});
Object.defineProperty(exports, "replaceStringTransformer", {
  enumerable: true,
  get: function get() {
    return _replaceStringTransformer2.default;
  }
});
Object.defineProperty(exports, "replaceSubstitutionTransformer", {
  enumerable: true,
  get: function get() {
    return _replaceSubstitutionTransformer2.default;
  }
});
Object.defineProperty(exports, "safeHtml", {
  enumerable: true,
  get: function get() {
    return _safeHtml2.default;
  }
});
Object.defineProperty(exports, "source", {
  enumerable: true,
  get: function get() {
    return _source2.default;
  }
});
Object.defineProperty(exports, "splitStringTransformer", {
  enumerable: true,
  get: function get() {
    return _splitStringTransformer2.default;
  }
});
Object.defineProperty(exports, "stripIndent", {
  enumerable: true,
  get: function get() {
    return _stripIndent2.default;
  }
});
Object.defineProperty(exports, "stripIndentTransformer", {
  enumerable: true,
  get: function get() {
    return _stripIndentTransformer2.default;
  }
});
Object.defineProperty(exports, "stripIndents", {
  enumerable: true,
  get: function get() {
    return _stripIndents2.default;
  }
});
Object.defineProperty(exports, "trimResultTransformer", {
  enumerable: true,
  get: function get() {
    return _trimResultTransformer2.default;
  }
});
var _TemplateTag2 = _interopRequireDefault(__webpack_require__(/*! ./TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));
var _trimResultTransformer2 = _interopRequireDefault(__webpack_require__(/*! ./trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));
var _stripIndentTransformer2 = _interopRequireDefault(__webpack_require__(/*! ./stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));
var _replaceResultTransformer2 = _interopRequireDefault(__webpack_require__(/*! ./replaceResultTransformer */ "./node_modules/common-tags/es/replaceResultTransformer/index.js"));
var _replaceSubstitutionTransformer2 = _interopRequireDefault(__webpack_require__(/*! ./replaceSubstitutionTransformer */ "./node_modules/common-tags/es/replaceSubstitutionTransformer/index.js"));
var _replaceStringTransformer2 = _interopRequireDefault(__webpack_require__(/*! ./replaceStringTransformer */ "./node_modules/common-tags/es/replaceStringTransformer/index.js"));
var _inlineArrayTransformer2 = _interopRequireDefault(__webpack_require__(/*! ./inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));
var _splitStringTransformer2 = _interopRequireDefault(__webpack_require__(/*! ./splitStringTransformer */ "./node_modules/common-tags/es/splitStringTransformer/index.js"));
var _removeNonPrintingValuesTransformer2 = _interopRequireDefault(__webpack_require__(/*! ./removeNonPrintingValuesTransformer */ "./node_modules/common-tags/es/removeNonPrintingValuesTransformer/index.js"));
var _commaLists2 = _interopRequireDefault(__webpack_require__(/*! ./commaLists */ "./node_modules/common-tags/es/commaLists/index.js"));
var _commaListsAnd2 = _interopRequireDefault(__webpack_require__(/*! ./commaListsAnd */ "./node_modules/common-tags/es/commaListsAnd/index.js"));
var _commaListsOr2 = _interopRequireDefault(__webpack_require__(/*! ./commaListsOr */ "./node_modules/common-tags/es/commaListsOr/index.js"));
var _html2 = _interopRequireDefault(__webpack_require__(/*! ./html */ "./node_modules/common-tags/es/html/index.js"));
var _codeBlock2 = _interopRequireDefault(__webpack_require__(/*! ./codeBlock */ "./node_modules/common-tags/es/codeBlock/index.js"));
var _source2 = _interopRequireDefault(__webpack_require__(/*! ./source */ "./node_modules/common-tags/es/source/index.js"));
var _safeHtml2 = _interopRequireDefault(__webpack_require__(/*! ./safeHtml */ "./node_modules/common-tags/es/safeHtml/index.js"));
var _oneLine2 = _interopRequireDefault(__webpack_require__(/*! ./oneLine */ "./node_modules/common-tags/es/oneLine/index.js"));
var _oneLineTrim2 = _interopRequireDefault(__webpack_require__(/*! ./oneLineTrim */ "./node_modules/common-tags/es/oneLineTrim/index.js"));
var _oneLineCommaLists2 = _interopRequireDefault(__webpack_require__(/*! ./oneLineCommaLists */ "./node_modules/common-tags/es/oneLineCommaLists/index.js"));
var _oneLineCommaListsOr2 = _interopRequireDefault(__webpack_require__(/*! ./oneLineCommaListsOr */ "./node_modules/common-tags/es/oneLineCommaListsOr/index.js"));
var _oneLineCommaListsAnd2 = _interopRequireDefault(__webpack_require__(/*! ./oneLineCommaListsAnd */ "./node_modules/common-tags/es/oneLineCommaListsAnd/index.js"));
var _inlineLists2 = _interopRequireDefault(__webpack_require__(/*! ./inlineLists */ "./node_modules/common-tags/es/inlineLists/index.js"));
var _oneLineInlineLists2 = _interopRequireDefault(__webpack_require__(/*! ./oneLineInlineLists */ "./node_modules/common-tags/es/oneLineInlineLists/index.js"));
var _stripIndent2 = _interopRequireDefault(__webpack_require__(/*! ./stripIndent */ "./node_modules/common-tags/es/stripIndent/index.js"));
var _stripIndents2 = _interopRequireDefault(__webpack_require__(/*! ./stripIndents */ "./node_modules/common-tags/es/stripIndents/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/inlineArrayTransformer/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/common-tags/es/inlineArrayTransformer/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _inlineArrayTransformer.default;
  }
});
var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__(/*! ./inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/inlineArrayTransformer.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/inlineArrayTransformer/inlineArrayTransformer.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/common-tags/es/inlineArrayTransformer/inlineArrayTransformer.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
__webpack_require__(/*! core-js/modules/es6.regexp.match.js */ "./node_modules/core-js/modules/es6.regexp.match.js");
__webpack_require__(/*! core-js/modules/es6.array.slice.js */ "./node_modules/core-js/modules/es6.array.slice.js");
var defaults = {
  separator: '',
  conjunction: '',
  serial: false
};

/**
 * Converts an array substitution to a string containing a list
 * @param  {String} [opts.separator = ''] - the character that separates each item
 * @param  {String} [opts.conjunction = '']  - replace the last separator with this
 * @param  {Boolean} [opts.serial = false] - include the separator before the conjunction? (Oxford comma use-case)
 *
 * @return {Object}                     - a TemplateTag transformer
 */
var inlineArrayTransformer = function inlineArrayTransformer() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaults;
  return {
    onSubstitution: function onSubstitution(substitution, resultSoFar) {
      // only operate on arrays
      if (Array.isArray(substitution)) {
        var arrayLength = substitution.length;
        var separator = opts.separator;
        var conjunction = opts.conjunction;
        var serial = opts.serial;
        // join each item in the array into a string where each item is separated by separator
        // be sure to maintain indentation
        var indent = resultSoFar.match(/(\n?[^\S\n]+)$/);
        if (indent) {
          substitution = substitution.join(separator + indent[1]);
        } else {
          substitution = substitution.join(separator + ' ');
        }
        // if conjunction is set, replace the last separator with conjunction, but only if there is more than one substitution
        if (conjunction && arrayLength > 1) {
          var separatorIndex = substitution.lastIndexOf(separator);
          substitution = substitution.slice(0, separatorIndex) + (serial ? separator : '') + ' ' + conjunction + substitution.slice(separatorIndex + 1);
        }
      }
      return substitution;
    }
  };
};
var _default = exports.default = inlineArrayTransformer;

/***/ }),

/***/ "./node_modules/common-tags/es/inlineLists/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/common-tags/es/inlineLists/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _inlineLists.default;
  }
});
var _inlineLists = _interopRequireDefault(__webpack_require__(/*! ./inlineLists */ "./node_modules/common-tags/es/inlineLists/inlineLists.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/inlineLists/inlineLists.js":
/*!****************************************************************!*\
  !*** ./node_modules/common-tags/es/inlineLists/inlineLists.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));
var _stripIndentTransformer = _interopRequireDefault(__webpack_require__(/*! ../stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));
var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__(/*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));
var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var inlineLists = new _TemplateTag.default(_inlineArrayTransformer.default, _stripIndentTransformer.default, _trimResultTransformer.default);
var _default = exports.default = inlineLists;

/***/ }),

/***/ "./node_modules/common-tags/es/oneLine/index.js":
/*!******************************************************!*\
  !*** ./node_modules/common-tags/es/oneLine/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _oneLine.default;
  }
});
var _oneLine = _interopRequireDefault(__webpack_require__(/*! ./oneLine */ "./node_modules/common-tags/es/oneLine/oneLine.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/oneLine/oneLine.js":
/*!********************************************************!*\
  !*** ./node_modules/common-tags/es/oneLine/oneLine.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));
var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));
var _replaceResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../replaceResultTransformer */ "./node_modules/common-tags/es/replaceResultTransformer/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var oneLine = new _TemplateTag.default((0, _replaceResultTransformer.default)(/(?:\n(?:\s*))+/g, ' '), _trimResultTransformer.default);
var _default = exports.default = oneLine;

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineCommaLists/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/common-tags/es/oneLineCommaLists/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _oneLineCommaLists.default;
  }
});
var _oneLineCommaLists = _interopRequireDefault(__webpack_require__(/*! ./oneLineCommaLists */ "./node_modules/common-tags/es/oneLineCommaLists/oneLineCommaLists.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineCommaLists/oneLineCommaLists.js":
/*!****************************************************************************!*\
  !*** ./node_modules/common-tags/es/oneLineCommaLists/oneLineCommaLists.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));
var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__(/*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));
var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));
var _replaceResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../replaceResultTransformer */ "./node_modules/common-tags/es/replaceResultTransformer/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var oneLineCommaLists = new _TemplateTag.default((0, _inlineArrayTransformer.default)({
  separator: ','
}), (0, _replaceResultTransformer.default)(/(?:\s+)/g, ' '), _trimResultTransformer.default);
var _default = exports.default = oneLineCommaLists;

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineCommaListsAnd/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/common-tags/es/oneLineCommaListsAnd/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _oneLineCommaListsAnd.default;
  }
});
var _oneLineCommaListsAnd = _interopRequireDefault(__webpack_require__(/*! ./oneLineCommaListsAnd */ "./node_modules/common-tags/es/oneLineCommaListsAnd/oneLineCommaListsAnd.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineCommaListsAnd/oneLineCommaListsAnd.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/common-tags/es/oneLineCommaListsAnd/oneLineCommaListsAnd.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));
var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__(/*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));
var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));
var _replaceResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../replaceResultTransformer */ "./node_modules/common-tags/es/replaceResultTransformer/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var oneLineCommaListsAnd = new _TemplateTag.default((0, _inlineArrayTransformer.default)({
  separator: ',',
  conjunction: 'and'
}), (0, _replaceResultTransformer.default)(/(?:\s+)/g, ' '), _trimResultTransformer.default);
var _default = exports.default = oneLineCommaListsAnd;

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineCommaListsOr/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/common-tags/es/oneLineCommaListsOr/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _oneLineCommaListsOr.default;
  }
});
var _oneLineCommaListsOr = _interopRequireDefault(__webpack_require__(/*! ./oneLineCommaListsOr */ "./node_modules/common-tags/es/oneLineCommaListsOr/oneLineCommaListsOr.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineCommaListsOr/oneLineCommaListsOr.js":
/*!********************************************************************************!*\
  !*** ./node_modules/common-tags/es/oneLineCommaListsOr/oneLineCommaListsOr.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));
var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__(/*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));
var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));
var _replaceResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../replaceResultTransformer */ "./node_modules/common-tags/es/replaceResultTransformer/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var oneLineCommaListsOr = new _TemplateTag.default((0, _inlineArrayTransformer.default)({
  separator: ',',
  conjunction: 'or'
}), (0, _replaceResultTransformer.default)(/(?:\s+)/g, ' '), _trimResultTransformer.default);
var _default = exports.default = oneLineCommaListsOr;

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineInlineLists/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/common-tags/es/oneLineInlineLists/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _oneLineInlineLists.default;
  }
});
var _oneLineInlineLists = _interopRequireDefault(__webpack_require__(/*! ./oneLineInlineLists */ "./node_modules/common-tags/es/oneLineInlineLists/oneLineInlineLists.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineInlineLists/oneLineInlineLists.js":
/*!******************************************************************************!*\
  !*** ./node_modules/common-tags/es/oneLineInlineLists/oneLineInlineLists.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));
var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__(/*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));
var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));
var _replaceResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../replaceResultTransformer */ "./node_modules/common-tags/es/replaceResultTransformer/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var oneLineInlineLists = new _TemplateTag.default(_inlineArrayTransformer.default, (0, _replaceResultTransformer.default)(/(?:\s+)/g, ' '), _trimResultTransformer.default);
var _default = exports.default = oneLineInlineLists;

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineTrim/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/common-tags/es/oneLineTrim/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _oneLineTrim.default;
  }
});
var _oneLineTrim = _interopRequireDefault(__webpack_require__(/*! ./oneLineTrim */ "./node_modules/common-tags/es/oneLineTrim/oneLineTrim.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/oneLineTrim/oneLineTrim.js":
/*!****************************************************************!*\
  !*** ./node_modules/common-tags/es/oneLineTrim/oneLineTrim.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));
var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));
var _replaceResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../replaceResultTransformer */ "./node_modules/common-tags/es/replaceResultTransformer/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var oneLineTrim = new _TemplateTag.default((0, _replaceResultTransformer.default)(/(?:\n\s*)/g, ''), _trimResultTransformer.default);
var _default = exports.default = oneLineTrim;

/***/ }),

/***/ "./node_modules/common-tags/es/removeNonPrintingValuesTransformer/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/common-tags/es/removeNonPrintingValuesTransformer/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _removeNonPrintingValuesTransformer.default;
  }
});
var _removeNonPrintingValuesTransformer = _interopRequireDefault(__webpack_require__(/*! ./removeNonPrintingValuesTransformer */ "./node_modules/common-tags/es/removeNonPrintingValuesTransformer/removeNonPrintingValuesTransformer.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/removeNonPrintingValuesTransformer/removeNonPrintingValuesTransformer.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/common-tags/es/removeNonPrintingValuesTransformer/removeNonPrintingValuesTransformer.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
__webpack_require__(/*! core-js/modules/es6.number.is-nan.js */ "./node_modules/core-js/modules/es6.number.is-nan.js");
__webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
__webpack_require__(/*! core-js/modules/es6.array.filter.js */ "./node_modules/core-js/modules/es6.array.filter.js");
var isValidValue = function isValidValue(x) {
  return x != null && !Number.isNaN(x) && typeof x !== 'boolean';
};
var removeNonPrintingValuesTransformer = function removeNonPrintingValuesTransformer() {
  return {
    onSubstitution: function onSubstitution(substitution) {
      if (Array.isArray(substitution)) {
        return substitution.filter(isValidValue);
      }
      if (isValidValue(substitution)) {
        return substitution;
      }
      return '';
    }
  };
};
var _default = exports.default = removeNonPrintingValuesTransformer;

/***/ }),

/***/ "./node_modules/common-tags/es/replaceResultTransformer/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/common-tags/es/replaceResultTransformer/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _replaceResultTransformer.default;
  }
});
var _replaceResultTransformer = _interopRequireDefault(__webpack_require__(/*! ./replaceResultTransformer */ "./node_modules/common-tags/es/replaceResultTransformer/replaceResultTransformer.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/replaceResultTransformer/replaceResultTransformer.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/common-tags/es/replaceResultTransformer/replaceResultTransformer.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
__webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/**
 * Replaces tabs, newlines and spaces with the chosen value when they occur in sequences
 * @param  {(String|RegExp)} replaceWhat - the value or pattern that should be replaced
 * @param  {*}               replaceWith - the replacement value
 * @return {Object}                      - a TemplateTag transformer
 */
var replaceResultTransformer = function replaceResultTransformer(replaceWhat, replaceWith) {
  return {
    onEndResult: function onEndResult(endResult) {
      if (replaceWhat == null || replaceWith == null) {
        throw new Error('replaceResultTransformer requires at least 2 arguments.');
      }
      return endResult.replace(replaceWhat, replaceWith);
    }
  };
};
var _default = exports.default = replaceResultTransformer;

/***/ }),

/***/ "./node_modules/common-tags/es/replaceStringTransformer/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/common-tags/es/replaceStringTransformer/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _replaceStringTransformer.default;
  }
});
var _replaceStringTransformer = _interopRequireDefault(__webpack_require__(/*! ./replaceStringTransformer */ "./node_modules/common-tags/es/replaceStringTransformer/replaceStringTransformer.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/replaceStringTransformer/replaceStringTransformer.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/common-tags/es/replaceStringTransformer/replaceStringTransformer.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
__webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
var replaceStringTransformer = function replaceStringTransformer(replaceWhat, replaceWith) {
  return {
    onString: function onString(str) {
      if (replaceWhat == null || replaceWith == null) {
        throw new Error('replaceStringTransformer requires at least 2 arguments.');
      }
      return str.replace(replaceWhat, replaceWith);
    }
  };
};
var _default = exports.default = replaceStringTransformer;

/***/ }),

/***/ "./node_modules/common-tags/es/replaceSubstitutionTransformer/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/common-tags/es/replaceSubstitutionTransformer/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _replaceSubstitutionTransformer.default;
  }
});
var _replaceSubstitutionTransformer = _interopRequireDefault(__webpack_require__(/*! ./replaceSubstitutionTransformer */ "./node_modules/common-tags/es/replaceSubstitutionTransformer/replaceSubstitutionTransformer.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/replaceSubstitutionTransformer/replaceSubstitutionTransformer.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/common-tags/es/replaceSubstitutionTransformer/replaceSubstitutionTransformer.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
__webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
__webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! core-js/modules/es6.date.to-string.js */ "./node_modules/core-js/modules/es6.date.to-string.js");
__webpack_require__(/*! core-js/modules/es6.regexp.to-string.js */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
var replaceSubstitutionTransformer = function replaceSubstitutionTransformer(replaceWhat, replaceWith) {
  return {
    onSubstitution: function onSubstitution(substitution, resultSoFar) {
      if (replaceWhat == null || replaceWith == null) {
        throw new Error('replaceSubstitutionTransformer requires at least 2 arguments.');
      }

      // Do not touch if null or undefined
      if (substitution == null) {
        return substitution;
      } else {
        return substitution.toString().replace(replaceWhat, replaceWith);
      }
    }
  };
};
var _default = exports.default = replaceSubstitutionTransformer;

/***/ }),

/***/ "./node_modules/common-tags/es/safeHtml/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/common-tags/es/safeHtml/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _safeHtml.default;
  }
});
var _safeHtml = _interopRequireDefault(__webpack_require__(/*! ./safeHtml */ "./node_modules/common-tags/es/safeHtml/safeHtml.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/safeHtml/safeHtml.js":
/*!**********************************************************!*\
  !*** ./node_modules/common-tags/es/safeHtml/safeHtml.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));
var _stripIndentTransformer = _interopRequireDefault(__webpack_require__(/*! ../stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));
var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__(/*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));
var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));
var _splitStringTransformer = _interopRequireDefault(__webpack_require__(/*! ../splitStringTransformer */ "./node_modules/common-tags/es/splitStringTransformer/index.js"));
var _replaceSubstitutionTransformer = _interopRequireDefault(__webpack_require__(/*! ../replaceSubstitutionTransformer */ "./node_modules/common-tags/es/replaceSubstitutionTransformer/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var safeHtml = new _TemplateTag.default((0, _splitStringTransformer.default)('\n'), _inlineArrayTransformer.default, _stripIndentTransformer.default, _trimResultTransformer.default, (0, _replaceSubstitutionTransformer.default)(/&/g, '&amp;'), (0, _replaceSubstitutionTransformer.default)(/</g, '&lt;'), (0, _replaceSubstitutionTransformer.default)(/>/g, '&gt;'), (0, _replaceSubstitutionTransformer.default)(/"/g, '&quot;'), (0, _replaceSubstitutionTransformer.default)(/'/g, '&#x27;'), (0, _replaceSubstitutionTransformer.default)(/`/g, '&#x60;'));
var _default = exports.default = safeHtml;

/***/ }),

/***/ "./node_modules/common-tags/es/source/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/common-tags/es/source/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _html.default;
  }
});
var _html = _interopRequireDefault(__webpack_require__(/*! ../html */ "./node_modules/common-tags/es/html/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/splitStringTransformer/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/common-tags/es/splitStringTransformer/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _splitStringTransformer.default;
  }
});
var _splitStringTransformer = _interopRequireDefault(__webpack_require__(/*! ./splitStringTransformer */ "./node_modules/common-tags/es/splitStringTransformer/splitStringTransformer.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/splitStringTransformer/splitStringTransformer.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/common-tags/es/splitStringTransformer/splitStringTransformer.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
__webpack_require__(/*! core-js/modules/es6.string.includes.js */ "./node_modules/core-js/modules/es6.string.includes.js");
__webpack_require__(/*! core-js/modules/es7.array.includes.js */ "./node_modules/core-js/modules/es7.array.includes.js");
__webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
var splitStringTransformer = function splitStringTransformer(splitBy) {
  return {
    onSubstitution: function onSubstitution(substitution, resultSoFar) {
      if (splitBy != null && typeof splitBy === 'string') {
        if (typeof substitution === 'string' && substitution.includes(splitBy)) {
          substitution = substitution.split(splitBy);
        }
      } else {
        throw new Error('You need to specify a string character to split by.');
      }
      return substitution;
    }
  };
};
var _default = exports.default = splitStringTransformer;

/***/ }),

/***/ "./node_modules/common-tags/es/stripIndent/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/common-tags/es/stripIndent/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _stripIndent.default;
  }
});
var _stripIndent = _interopRequireDefault(__webpack_require__(/*! ./stripIndent */ "./node_modules/common-tags/es/stripIndent/stripIndent.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/stripIndent/stripIndent.js":
/*!****************************************************************!*\
  !*** ./node_modules/common-tags/es/stripIndent/stripIndent.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));
var _stripIndentTransformer = _interopRequireDefault(__webpack_require__(/*! ../stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));
var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var stripIndent = new _TemplateTag.default(_stripIndentTransformer.default, _trimResultTransformer.default);
var _default = exports.default = stripIndent;

/***/ }),

/***/ "./node_modules/common-tags/es/stripIndentTransformer/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/common-tags/es/stripIndentTransformer/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _stripIndentTransformer.default;
  }
});
var _stripIndentTransformer = _interopRequireDefault(__webpack_require__(/*! ./stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/stripIndentTransformer.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/stripIndentTransformer/stripIndentTransformer.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/common-tags/es/stripIndentTransformer/stripIndentTransformer.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
__webpack_require__(/*! core-js/modules/es6.symbol.js */ "./node_modules/core-js/modules/es6.symbol.js");
__webpack_require__(/*! core-js/modules/es6.array.from.js */ "./node_modules/core-js/modules/es6.array.from.js");
__webpack_require__(/*! core-js/modules/es6.string.iterator.js */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "./node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "./node_modules/core-js/modules/web.dom.iterable.js");
__webpack_require__(/*! core-js/modules/es6.regexp.match.js */ "./node_modules/core-js/modules/es6.regexp.match.js");
__webpack_require__(/*! core-js/modules/es6.array.map.js */ "./node_modules/core-js/modules/es6.array.map.js");
__webpack_require__(/*! core-js/modules/es6.regexp.constructor.js */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
__webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}

/**
 * strips indentation from a template literal
 * @param  {String} type = 'initial' - whether to remove all indentation or just leading indentation. can be 'all' or 'initial'
 * @return {Object}                  - a TemplateTag transformer
 */
var stripIndentTransformer = function stripIndentTransformer() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'initial';
  return {
    onEndResult: function onEndResult(endResult) {
      if (type === 'initial') {
        // remove the shortest leading indentation from each line
        var match = endResult.match(/^[^\S\n]*(?=\S)/gm);
        var indent = match && Math.min.apply(Math, _toConsumableArray(match.map(function (el) {
          return el.length;
        })));
        if (indent) {
          var regexp = new RegExp('^.{' + indent + '}', 'gm');
          return endResult.replace(regexp, '');
        }
        return endResult;
      }
      if (type === 'all') {
        // remove all indentation from each line
        return endResult.replace(/^[^\S\n]+/gm, '');
      }
      throw new Error('Unknown type: ' + type);
    }
  };
};
var _default = exports.default = stripIndentTransformer;

/***/ }),

/***/ "./node_modules/common-tags/es/stripIndents/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/common-tags/es/stripIndents/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _stripIndents.default;
  }
});
var _stripIndents = _interopRequireDefault(__webpack_require__(/*! ./stripIndents */ "./node_modules/common-tags/es/stripIndents/stripIndents.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/stripIndents/stripIndents.js":
/*!******************************************************************!*\
  !*** ./node_modules/common-tags/es/stripIndents/stripIndents.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TemplateTag = _interopRequireDefault(__webpack_require__(/*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));
var _stripIndentTransformer = _interopRequireDefault(__webpack_require__(/*! ../stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));
var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var stripIndents = new _TemplateTag.default((0, _stripIndentTransformer.default)('all'), _trimResultTransformer.default);
var _default = exports.default = stripIndents;

/***/ }),

/***/ "./node_modules/common-tags/es/trimResultTransformer/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/common-tags/es/trimResultTransformer/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _trimResultTransformer.default;
  }
});
var _trimResultTransformer = _interopRequireDefault(__webpack_require__(/*! ./trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/trimResultTransformer.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/common-tags/es/trimResultTransformer/trimResultTransformer.js":
/*!************************************************************************************!*\
  !*** ./node_modules/common-tags/es/trimResultTransformer/trimResultTransformer.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
__webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/**
 * TemplateTag transformer that trims whitespace on the end result of a tagged template
 * @param  {String} side = '' - The side of the string to trim. Can be 'start' or 'end' (alternatively 'left' or 'right')
 * @return {Object}           - a TemplateTag transformer
 */
var trimResultTransformer = function trimResultTransformer() {
  var side = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return {
    onEndResult: function onEndResult(endResult) {
      if (side === '') {
        return endResult.trim();
      }
      side = side.toLowerCase();
      if (side === 'start' || side === 'left') {
        return endResult.replace(/^\s*/, '');
      }
      if (side === 'end' || side === 'right') {
        return endResult.replace(/\s*$/, '');
      }
      throw new Error('Side not supported: ' + side);
    }
  };
};
var _default = exports.default = trimResultTransformer;

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Reflect = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $filter = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(2);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $map = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(1);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, NUMBER, $Number);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyNames', function () {
  return __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js").f;
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js");
var rConstruct = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  re2[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
}

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('RegExp');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var sameValue = __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@search logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $includes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var ownKeys = __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/sass/embedded.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/sass/embedded.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".x-hellosign-embedded {\n  height: 100%; }\n  .x-hellosign-embedded--in-modal {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 9997; }\n\n.x-hellosign-embedded__modal-screen {\n  display: block;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n  @media only screen and (max-width: 767px), only screen and (max-width: 900px) and (min-aspect-ratio: 16 / 9) {\n    .x-hellosign-embedded__modal-screen {\n      display: none; } }\n\n.x-hellosign-embedded__modal-content {\n  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.25);\n  position: absolute;\n  top: 5vh;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 90vh;\n  min-height: 400px;\n  width: 80vw;\n  min-width: 512px;\n  max-width: 1024px; }\n  @media only screen and (max-width: 767px), only screen and (max-width: 900px) and (min-aspect-ratio: 16 / 9) {\n    .x-hellosign-embedded__modal-content {\n      overflow: hidden;\n      box-shadow: none;\n      height: 100%;\n      min-height: 0;\n      width: 100%;\n      min-width: 0;\n      transform: none;\n      left: 0;\n      top: 0; } }\n\n.x-hellosign-embedded__modal-close {\n  position: absolute;\n  top: 0;\n  right: -60px;\n  height: 40px;\n  width: 40px; }\n  @media only screen and (max-width: 767px), only screen and (max-width: 900px) and (min-aspect-ratio: 16 / 9) {\n    .x-hellosign-embedded__modal-close {\n      display: none; } }\n\n.x-hellosign-embedded__modal-close-button {\n  -webkit-appearance: none;\n  height: 100%;\n  width: 100%;\n  border: none;\n  background-color: #1A1A1A;\n  transition: background-color 0.35s ease;\n  will-change: background-color;\n  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n  padding: 20px; }\n  .x-hellosign-embedded__modal-close-button:hover {\n    background-color: #4E4E4E; }\n  .x-hellosign-embedded__modal-close-button::before, .x-hellosign-embedded__modal-close-button::after {\n    content: '';\n    position: absolute;\n    width: 1px;\n    background-color: white;\n    height: 20px;\n    top: 10px; }\n  .x-hellosign-embedded__modal-close-button::before {\n    transform: rotateZ(45deg); }\n  .x-hellosign-embedded__modal-close-button::after {\n    transform: rotateZ(-45deg); }\n\n.x-hellosign-embedded__iframe {\n  min-height: 400px;\n  background-color: #F7F8F9;\n  height: 100%;\n  border: none;\n  min-width: 100%;\n  width: 100px;\n  *width: 100%; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
__webpack_require__(/*! core-js/modules/es6.array.map.js */ "./node_modules/core-js/modules/es6.array.map.js");
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);
      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list

  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }
    var alreadyImportedModules = {};
    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];
      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }
    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }
        list.push(item);
      }
    }
  };
  return list;
};
function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }
  return [content].join('\n');
} // Adapted from convert-source-map (MIT)

function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

__webpack_require__(/*! core-js/modules/es6.regexp.match.js */ "./node_modules/core-js/modules/es6.regexp.match.js");
__webpack_require__(/*! core-js/modules/es6.regexp.constructor.js */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
__webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = function () {
  var warned = false;
  return function () {
    if (!warned) {
      warned = true;
      console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
  };
}();

/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // Is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
  // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
  // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
  // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
  if (!this.useColors) {
    return;
  }
  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit');

  // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if (match === '%%') {
      return;
    }
    index++;
    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || function () {};

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
  try {
    if (namespaces) {
      exports.storage.setItem('debug', namespaces);
    } else {
      exports.storage.removeItem('debug');
    }
  } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
  var r;
  try {
    r = exports.storage.getItem('debug');
  } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
  }

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }
  return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    // The Browser also has localStorage in the global context.
    return localStorage;
  } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
  }
}
module.exports = __webpack_require__(/*! ./common */ "./node_modules/debug/src/common.js")(exports);
var formatters = module.exports.formatters;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (error) {
    return '[UnexpectedJSONParseError]: ' + error.message;
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/debug/src/common.js":
/*!******************************************!*\
  !*** ./node_modules/debug/src/common.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.symbol.js */ "./node_modules/core-js/modules/es6.symbol.js");
__webpack_require__(/*! core-js/modules/es6.string.iterator.js */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "./node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "./node_modules/core-js/modules/web.dom.iterable.js");
__webpack_require__(/*! core-js/modules/es6.array.from.js */ "./node_modules/core-js/modules/es6.array.from.js");
__webpack_require__(/*! core-js/modules/es6.function.name.js */ "./node_modules/core-js/modules/es6.function.name.js");
__webpack_require__(/*! core-js/modules/es6.object.keys.js */ "./node_modules/core-js/modules/es6.object.keys.js");
__webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
__webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
__webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
__webpack_require__(/*! core-js/modules/es6.regexp.constructor.js */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
__webpack_require__(/*! core-js/modules/es6.array.slice.js */ "./node_modules/core-js/modules/es6.array.slice.js");
__webpack_require__(/*! core-js/modules/es6.array.map.js */ "./node_modules/core-js/modules/es6.array.map.js");
__webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! core-js/modules/es6.date.to-string.js */ "./node_modules/core-js/modules/es6.date.to-string.js");
__webpack_require__(/*! core-js/modules/es6.regexp.to-string.js */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");
  createDebug.destroy = destroy;
  Object.keys(env).forEach(function (key) {
    createDebug[key] = env[key];
  });

  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];

  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */
  createDebug.formatters = {};

  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */
  function selectColor(namespace) {
    var hash = 0;
    for (var i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }
    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }
  createDebug.selectColor = selectColor;

  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */
  function createDebug(namespace) {
    var prevTime;
    var enableOverride = null;
    var namespacesCache;
    var enabledCache;
    function debug() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      // Disabled?
      if (!debug.enabled) {
        return;
      }
      var self = debug;

      // Set `diff` timestamp
      var curr = Number(new Date());
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);
      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      }

      // Apply any `formatters` transformations
      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return '%';
        }
        index++;
        var formatter = createDebug.formatters[format];
        if (typeof formatter === 'function') {
          var val = args[index];
          match = formatter.call(self, val);

          // Now we need to remove `args[index]` since it's inlined in the `format`
          args.splice(index, 1);
          index--;
        }
        return match;
      });

      // Apply env-specific formatting (colors, etc.)
      createDebug.formatArgs.call(self, args);
      var logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }
    debug.namespace = namespace;
    debug.useColors = createDebug.useColors();
    debug.color = createDebug.selectColor(namespace);
    debug.extend = extend;
    debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

    Object.defineProperty(debug, 'enabled', {
      enumerable: true,
      configurable: false,
      get: function get() {
        if (enableOverride !== null) {
          return enableOverride;
        }
        if (namespacesCache !== createDebug.namespaces) {
          namespacesCache = createDebug.namespaces;
          enabledCache = createDebug.enabled(namespace);
        }
        return enabledCache;
      },
      set: function set(v) {
        enableOverride = v;
      }
    });

    // Env-specific initialization logic for debug instances
    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }
    return debug;
  }
  function extend(namespace, delimiter) {
    var newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
    newDebug.log = this.log;
    return newDebug;
  }

  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */
  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.namespaces = namespaces;
    createDebug.names = [];
    createDebug.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;
    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }
      namespaces = split[i].replace(/\*/g, '.*?');
      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }
  }

  /**
  * Disable debug output.
  *
  * @return {String} namespaces
  * @api public
  */
  function disable() {
    var namespaces = [].concat(_toConsumableArray(createDebug.names.map(toNamespace)), _toConsumableArray(createDebug.skips.map(toNamespace).map(function (namespace) {
      return '-' + namespace;
    }))).join(',');
    createDebug.enable('');
    return namespaces;
  }

  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */
  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }
    var i;
    var len;
    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }
    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }
    return false;
  }

  /**
  * Convert regexp to namespace
  *
  * @param {RegExp} regxep
  * @return {String} namespace
  * @api private
  */
  function toNamespace(regexp) {
    return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
  }

  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */
  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }
    return val;
  }

  /**
  * XXX DO NOT USE. This is a temporary stub function.
  * XXX It WILL be removed in the next major release.
  */
  function destroy() {
    console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
  }
  createDebug.enable(createDebug.load());
  return createDebug;
}
module.exports = setup;

/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.symbol.js */ "./node_modules/core-js/modules/es6.symbol.js");
__webpack_require__(/*! core-js/modules/es6.string.iterator.js */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "./node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "./node_modules/core-js/modules/web.dom.iterable.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = _typeof(val);
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}
(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }
  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  }
  // if setTimeout wasn't available but was latter defined
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  }
  // if clearTimeout wasn't available but was latter defined
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
};

// v8 likes predictible objects
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function (name) {
  return [];
};
process.binding = function (name) {
  throw new Error('process.binding is not supported');
};
process.cwd = function () {
  return '/';
};
process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};
process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;
  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

  // blank or null?
  if (!css || typeof css !== "string") {
    return css;
  }
  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

  // convert each url(...)
  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */
  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    });

    // already a full url? no change
    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    }

    // convert the url to a full url
    var newUrl;
    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    }

    // send back the fixed url(...)
    return "url(" + JSON.stringify(newUrl) + ")";
  });

  // send back the fixed css
  return fixedCss;
};

/***/ }),

/***/ "./node_modules/tiny-emitter/index.js":
/*!********************************************!*\
  !*** ./node_modules/tiny-emitter/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.array.slice.js */ "./node_modules/core-js/modules/es6.array.slice.js");
function E() {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}
E.prototype = {
  on: function on(name, callback, ctx) {
    var e = this.e || (this.e = {});
    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });
    return this;
  },
  once: function once(name, callback, ctx) {
    var self = this;
    function listener() {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    }
    ;
    listener._ = callback;
    return this.on(name, listener, ctx);
  },
  emit: function emit(name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;
    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }
    return this;
  },
  off: function off(name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];
    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    liveEvents.length ? e[name] = liveEvents : delete e[name];
    return this;
  }
};
module.exports = E;
module.exports.TinyEmitter = E;

/***/ }),

/***/ "./node_modules/url-polyfill/url-polyfill.js":
/*!***************************************************!*\
  !*** ./node_modules/url-polyfill/url-polyfill.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(/*! core-js/modules/es6.string.iterator.js */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "./node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "./node_modules/core-js/modules/web.dom.iterable.js");
__webpack_require__(/*! core-js/modules/es6.symbol.js */ "./node_modules/core-js/modules/es6.symbol.js");
__webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
__webpack_require__(/*! core-js/modules/es6.array.slice.js */ "./node_modules/core-js/modules/es6.array.slice.js");
__webpack_require__(/*! core-js/modules/es6.date.to-string.js */ "./node_modules/core-js/modules/es6.date.to-string.js");
__webpack_require__(/*! core-js/modules/es6.regexp.to-string.js */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
__webpack_require__(/*! core-js/modules/es6.regexp.search.js */ "./node_modules/core-js/modules/es6.regexp.search.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (global) {
  /**
   * Polyfill URLSearchParams
   *
   * Inspired from : https://github.com/WebReflection/url-search-params/blob/master/src/url-search-params.js
   */

  var checkIfIteratorIsSupported = function checkIfIteratorIsSupported() {
    try {
      return !!Symbol.iterator;
    } catch (error) {
      return false;
    }
  };
  var iteratorSupported = checkIfIteratorIsSupported();
  var createIterator = function createIterator(items) {
    var iterator = {
      next: function next() {
        var value = items.shift();
        return {
          done: value === void 0,
          value: value
        };
      }
    };
    if (iteratorSupported) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }
    return iterator;
  };

  /**
   * Search param name and values should be encoded according to https://url.spec.whatwg.org/#urlencoded-serializing
   * encodeURIComponent() produces the same result except encoding spaces as `%20` instead of `+`.
   */
  var serializeParam = function serializeParam(value) {
    return encodeURIComponent(value).replace(/%20/g, '+');
  };
  var deserializeParam = function deserializeParam(value) {
    return decodeURIComponent(String(value).replace(/\+/g, ' '));
  };
  var polyfillURLSearchParams = function polyfillURLSearchParams() {
    var URLSearchParams = function URLSearchParams(searchString) {
      Object.defineProperty(this, '_entries', {
        writable: true,
        value: {}
      });
      var typeofSearchString = _typeof(searchString);
      if (typeofSearchString === 'undefined') {
        // do nothing
      } else if (typeofSearchString === 'string') {
        if (searchString !== '') {
          this._fromString(searchString);
        }
      } else if (searchString instanceof URLSearchParams) {
        var _this = this;
        searchString.forEach(function (value, name) {
          _this.append(name, value);
        });
      } else if (searchString !== null && typeofSearchString === 'object') {
        if (Object.prototype.toString.call(searchString) === '[object Array]') {
          for (var i = 0; i < searchString.length; i++) {
            var entry = searchString[i];
            if (Object.prototype.toString.call(entry) === '[object Array]' || entry.length !== 2) {
              this.append(entry[0], entry[1]);
            } else {
              throw new TypeError('Expected [string, any] as entry at index ' + i + ' of URLSearchParams\'s input');
            }
          }
        } else {
          for (var key in searchString) {
            if (searchString.hasOwnProperty(key)) {
              this.append(key, searchString[key]);
            }
          }
        }
      } else {
        throw new TypeError('Unsupported input\'s type for URLSearchParams');
      }
    };
    var proto = URLSearchParams.prototype;
    proto.append = function (name, value) {
      if (name in this._entries) {
        this._entries[name].push(String(value));
      } else {
        this._entries[name] = [String(value)];
      }
    };
    proto.delete = function (name) {
      delete this._entries[name];
    };
    proto.get = function (name) {
      return name in this._entries ? this._entries[name][0] : null;
    };
    proto.getAll = function (name) {
      return name in this._entries ? this._entries[name].slice(0) : [];
    };
    proto.has = function (name) {
      return name in this._entries;
    };
    proto.set = function (name, value) {
      this._entries[name] = [String(value)];
    };
    proto.forEach = function (callback, thisArg) {
      var entries;
      for (var name in this._entries) {
        if (this._entries.hasOwnProperty(name)) {
          entries = this._entries[name];
          for (var i = 0; i < entries.length; i++) {
            callback.call(thisArg, entries[i], name, this);
          }
        }
      }
    };
    proto.keys = function () {
      var items = [];
      this.forEach(function (value, name) {
        items.push(name);
      });
      return createIterator(items);
    };
    proto.values = function () {
      var items = [];
      this.forEach(function (value) {
        items.push(value);
      });
      return createIterator(items);
    };
    proto.entries = function () {
      var items = [];
      this.forEach(function (value, name) {
        items.push([name, value]);
      });
      return createIterator(items);
    };
    if (iteratorSupported) {
      proto[Symbol.iterator] = proto.entries;
    }
    proto.toString = function () {
      var searchArray = [];
      this.forEach(function (value, name) {
        searchArray.push(serializeParam(name) + '=' + serializeParam(value));
      });
      return searchArray.join('&');
    };
    global.URLSearchParams = URLSearchParams;
  };
  var checkIfURLSearchParamsSupported = function checkIfURLSearchParamsSupported() {
    try {
      var URLSearchParams = global.URLSearchParams;
      return new URLSearchParams('?a=1').toString() === 'a=1' && typeof URLSearchParams.prototype.set === 'function' && typeof URLSearchParams.prototype.entries === 'function';
    } catch (e) {
      return false;
    }
  };
  if (!checkIfURLSearchParamsSupported()) {
    polyfillURLSearchParams();
  }
  var proto = global.URLSearchParams.prototype;
  if (typeof proto.sort !== 'function') {
    proto.sort = function () {
      var _this = this;
      var items = [];
      this.forEach(function (value, name) {
        items.push([name, value]);
        if (!_this._entries) {
          _this.delete(name);
        }
      });
      items.sort(function (a, b) {
        if (a[0] < b[0]) {
          return -1;
        } else if (a[0] > b[0]) {
          return +1;
        } else {
          return 0;
        }
      });
      if (_this._entries) {
        // force reset because IE keeps keys index
        _this._entries = {};
      }
      for (var i = 0; i < items.length; i++) {
        this.append(items[i][0], items[i][1]);
      }
    };
  }
  if (typeof proto._fromString !== 'function') {
    Object.defineProperty(proto, '_fromString', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: function value(searchString) {
        if (this._entries) {
          this._entries = {};
        } else {
          var keys = [];
          this.forEach(function (value, name) {
            keys.push(name);
          });
          for (var i = 0; i < keys.length; i++) {
            this.delete(keys[i]);
          }
        }
        searchString = searchString.replace(/^\?/, '');
        var attributes = searchString.split('&');
        var attribute;
        for (var i = 0; i < attributes.length; i++) {
          attribute = attributes[i].split('=');
          this.append(deserializeParam(attribute[0]), attribute.length > 1 ? deserializeParam(attribute[1]) : '');
        }
      }
    });
  }

  // HTMLAnchorElement
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : void 0);
(function (global) {
  /**
   * Polyfill URL
   *
   * Inspired from : https://github.com/arv/DOM-URL-Polyfill/blob/master/src/url.js
   */

  var checkIfURLIsSupported = function checkIfURLIsSupported() {
    try {
      var u = new global.URL('b', 'http://a');
      u.pathname = 'c d';
      return u.href === 'http://a/c%20d' && u.searchParams;
    } catch (e) {
      return false;
    }
  };
  var polyfillURL = function polyfillURL() {
    var _URL = global.URL;
    var URL = function URL(url, base) {
      if (typeof url !== 'string') url = String(url);
      if (base && typeof base !== 'string') base = String(base);

      // Only create another document if the base is different from current location.
      var doc = document,
        baseElement;
      if (base && (global.location === void 0 || base !== global.location.href)) {
        base = base.toLowerCase();
        doc = document.implementation.createHTMLDocument('');
        baseElement = doc.createElement('base');
        baseElement.href = base;
        doc.head.appendChild(baseElement);
        try {
          if (baseElement.href.indexOf(base) !== 0) throw new Error(baseElement.href);
        } catch (err) {
          throw new Error('URL unable to set base ' + base + ' due to ' + err);
        }
      }
      var anchorElement = doc.createElement('a');
      anchorElement.href = url;
      if (baseElement) {
        doc.body.appendChild(anchorElement);
        anchorElement.href = anchorElement.href; // force href to refresh
      }
      var inputElement = doc.createElement('input');
      inputElement.type = 'url';
      inputElement.value = url;
      if (anchorElement.protocol === ':' || !/:/.test(anchorElement.href) || !inputElement.checkValidity() && !base) {
        throw new TypeError('Invalid URL');
      }
      Object.defineProperty(this, '_anchorElement', {
        value: anchorElement
      });

      // create a linked searchParams which reflect its changes on URL
      var searchParams = new global.URLSearchParams(this.search);
      var enableSearchUpdate = true;
      var enableSearchParamsUpdate = true;
      var _this = this;
      ['append', 'delete', 'set'].forEach(function (methodName) {
        var method = searchParams[methodName];
        searchParams[methodName] = function () {
          method.apply(searchParams, arguments);
          if (enableSearchUpdate) {
            enableSearchParamsUpdate = false;
            _this.search = searchParams.toString();
            enableSearchParamsUpdate = true;
          }
        };
      });
      Object.defineProperty(this, 'searchParams', {
        value: searchParams,
        enumerable: true
      });
      var search = void 0;
      Object.defineProperty(this, '_updateSearchParams', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function value() {
          if (this.search !== search) {
            search = this.search;
            if (enableSearchParamsUpdate) {
              enableSearchUpdate = false;
              this.searchParams._fromString(this.search);
              enableSearchUpdate = true;
            }
          }
        }
      });
    };
    var proto = URL.prototype;
    var linkURLWithAnchorAttribute = function linkURLWithAnchorAttribute(attributeName) {
      Object.defineProperty(proto, attributeName, {
        get: function get() {
          return this._anchorElement[attributeName];
        },
        set: function set(value) {
          this._anchorElement[attributeName] = value;
        },
        enumerable: true
      });
    };
    ['hash', 'host', 'hostname', 'port', 'protocol'].forEach(function (attributeName) {
      linkURLWithAnchorAttribute(attributeName);
    });
    Object.defineProperty(proto, 'search', {
      get: function get() {
        return this._anchorElement['search'];
      },
      set: function set(value) {
        this._anchorElement['search'] = value;
        this._updateSearchParams();
      },
      enumerable: true
    });
    Object.defineProperties(proto, {
      'toString': {
        get: function get() {
          var _this = this;
          return function () {
            return _this.href;
          };
        }
      },
      'href': {
        get: function get() {
          return this._anchorElement.href.replace(/\?$/, '');
        },
        set: function set(value) {
          this._anchorElement.href = value;
          this._updateSearchParams();
        },
        enumerable: true
      },
      'pathname': {
        get: function get() {
          return this._anchorElement.pathname.replace(/(^\/?)/, '/');
        },
        set: function set(value) {
          this._anchorElement.pathname = value;
        },
        enumerable: true
      },
      'origin': {
        get: function get() {
          // get expected port from protocol
          var expectedPort = {
            'http:': 80,
            'https:': 443,
            'ftp:': 21
          }[this._anchorElement.protocol];
          // add port to origin if, expected port is different than actual port
          // and it is not empty f.e http://foo:8080
          // 8080 != 80 && 8080 != ''
          var addPortToOrigin = this._anchorElement.port != expectedPort && this._anchorElement.port !== '';
          return this._anchorElement.protocol + '//' + this._anchorElement.hostname + (addPortToOrigin ? ':' + this._anchorElement.port : '');
        },
        enumerable: true
      },
      'password': {
        // TODO
        get: function get() {
          return '';
        },
        set: function set(value) {},
        enumerable: true
      },
      'username': {
        // TODO
        get: function get() {
          return '';
        },
        set: function set(value) {},
        enumerable: true
      }
    });
    URL.createObjectURL = function (blob) {
      return _URL.createObjectURL.apply(_URL, arguments);
    };
    URL.revokeObjectURL = function (url) {
      return _URL.revokeObjectURL.apply(_URL, arguments);
    };
    global.URL = URL;
  };
  if (!checkIfURLIsSupported()) {
    polyfillURL();
  }
  if (global.location !== void 0 && !('origin' in global.location)) {
    var getOrigin = function getOrigin() {
      return global.location.protocol + '//' + global.location.hostname + (global.location.port ? ':' + global.location.port : '');
    };
    try {
      Object.defineProperty(global.location, 'origin', {
        get: getOrigin,
        enumerable: true
      });
    } catch (e) {
      setInterval(function () {
        global.location.origin = getOrigin();
      }, 100);
    }
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : void 0);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/url-search-params-polyfill/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/url-search-params-polyfill/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(/*! core-js/modules/es6.string.iterator.js */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! core-js/modules/es6.date.to-string.js */ "./node_modules/core-js/modules/es6.date.to-string.js");
__webpack_require__(/*! core-js/modules/es6.regexp.to-string.js */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es6.symbol.js */ "./node_modules/core-js/modules/es6.symbol.js");
__webpack_require__(/*! core-js/modules/es6.array.slice.js */ "./node_modules/core-js/modules/es6.array.slice.js");
__webpack_require__(/*! core-js/modules/es6.object.get-own-property-names.js */ "./node_modules/core-js/modules/es6.object.get-own-property-names.js");
__webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "./node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "./node_modules/core-js/modules/web.dom.iterable.js");
__webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
__webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 *
 *
 * @author Jerry Bendy <jerry@icewingcc.com>
 * @licence MIT
 *
 */

(function (self) {
  'use strict';

  var nativeURLSearchParams = self.URLSearchParams && self.URLSearchParams.prototype.get ? self.URLSearchParams : null,
    isSupportObjectConstructor = nativeURLSearchParams && new nativeURLSearchParams({
      a: 1
    }).toString() === 'a=1',
    // There is a bug in safari 10.1 (and earlier) that incorrectly decodes `%2B` as an empty space and not a plus.
    decodesPlusesCorrectly = nativeURLSearchParams && new nativeURLSearchParams('s=%2B').get('s') === '+',
    __URLSearchParams__ = "__URLSearchParams__",
    // Fix bug in Edge which cannot encode ' &' correctly
    encodesAmpersandsCorrectly = nativeURLSearchParams ? function () {
      var ampersandTest = new nativeURLSearchParams();
      ampersandTest.append('s', ' &');
      return ampersandTest.toString() === 's=+%26';
    }() : true,
    prototype = URLSearchParamsPolyfill.prototype,
    iterable = !!(self.Symbol && self.Symbol.iterator);
  if (nativeURLSearchParams && isSupportObjectConstructor && decodesPlusesCorrectly && encodesAmpersandsCorrectly) {
    return;
  }

  /**
   * Make a URLSearchParams instance
   *
   * @param {object|string|URLSearchParams} search
   * @constructor
   */
  function URLSearchParamsPolyfill(search) {
    search = search || "";

    // support construct object with another URLSearchParams instance
    if (search instanceof URLSearchParams || search instanceof URLSearchParamsPolyfill) {
      search = search.toString();
    }
    this[__URLSearchParams__] = parseToDict(search);
  }

  /**
   * Appends a specified key/value pair as a new search parameter.
   *
   * @param {string} name
   * @param {string} value
   */
  prototype.append = function (name, value) {
    appendTo(this[__URLSearchParams__], name, value);
  };

  /**
   * Deletes the given search parameter, and its associated value,
   * from the list of all search parameters.
   *
   * @param {string} name
   */
  prototype['delete'] = function (name) {
    delete this[__URLSearchParams__][name];
  };

  /**
   * Returns the first value associated to the given search parameter.
   *
   * @param {string} name
   * @returns {string|null}
   */
  prototype.get = function (name) {
    var dict = this[__URLSearchParams__];
    return name in dict ? dict[name][0] : null;
  };

  /**
   * Returns all the values association with a given search parameter.
   *
   * @param {string} name
   * @returns {Array}
   */
  prototype.getAll = function (name) {
    var dict = this[__URLSearchParams__];
    return name in dict ? dict[name].slice(0) : [];
  };

  /**
   * Returns a Boolean indicating if such a search parameter exists.
   *
   * @param {string} name
   * @returns {boolean}
   */
  prototype.has = function (name) {
    return name in this[__URLSearchParams__];
  };

  /**
   * Sets the value associated to a given search parameter to
   * the given value. If there were several values, delete the
   * others.
   *
   * @param {string} name
   * @param {string} value
   */
  prototype.set = function set(name, value) {
    this[__URLSearchParams__][name] = ['' + value];
  };

  /**
   * Returns a string containg a query string suitable for use in a URL.
   *
   * @returns {string}
   */
  prototype.toString = function () {
    var dict = this[__URLSearchParams__],
      query = [],
      i,
      key,
      name,
      value;
    for (key in dict) {
      name = encode(key);
      for (i = 0, value = dict[key]; i < value.length; i++) {
        query.push(name + '=' + encode(value[i]));
      }
    }
    return query.join('&');
  };

  // There is a bug in Safari 10.1 and `Proxy`ing it is not enough.
  var forSureUsePolyfill = !decodesPlusesCorrectly;
  var useProxy = !forSureUsePolyfill && nativeURLSearchParams && !isSupportObjectConstructor && self.Proxy;
  /*
   * Apply polifill to global object and append other prototype into it
   */
  Object.defineProperty(self, 'URLSearchParams', {
    value: useProxy ?
    // Safari 10.0 doesn't support Proxy, so it won't extend URLSearchParams on safari 10.0
    new Proxy(nativeURLSearchParams, {
      construct: function construct(target, args) {
        return new target(new URLSearchParamsPolyfill(args[0]).toString());
      }
    }) : URLSearchParamsPolyfill
  });
  var USPProto = self.URLSearchParams.prototype;
  USPProto.polyfill = true;

  /**
   *
   * @param {function} callback
   * @param {object} thisArg
   */
  USPProto.forEach = USPProto.forEach || function (callback, thisArg) {
    var dict = parseToDict(this.toString());
    Object.getOwnPropertyNames(dict).forEach(function (name) {
      dict[name].forEach(function (value) {
        callback.call(thisArg, value, name, this);
      }, this);
    }, this);
  };

  /**
   * Sort all name-value pairs
   */
  USPProto.sort = USPProto.sort || function () {
    var dict = parseToDict(this.toString()),
      keys = [],
      k,
      i,
      j;
    for (k in dict) {
      keys.push(k);
    }
    keys.sort();
    for (i = 0; i < keys.length; i++) {
      this['delete'](keys[i]);
    }
    for (i = 0; i < keys.length; i++) {
      var key = keys[i],
        values = dict[key];
      for (j = 0; j < values.length; j++) {
        this.append(key, values[j]);
      }
    }
  };

  /**
   * Returns an iterator allowing to go through all keys of
   * the key/value pairs contained in this object.
   *
   * @returns {function}
   */
  USPProto.keys = USPProto.keys || function () {
    var items = [];
    this.forEach(function (item, name) {
      items.push(name);
    });
    return makeIterator(items);
  };

  /**
   * Returns an iterator allowing to go through all values of
   * the key/value pairs contained in this object.
   *
   * @returns {function}
   */
  USPProto.values = USPProto.values || function () {
    var items = [];
    this.forEach(function (item) {
      items.push(item);
    });
    return makeIterator(items);
  };

  /**
   * Returns an iterator allowing to go through all key/value
   * pairs contained in this object.
   *
   * @returns {function}
   */
  USPProto.entries = USPProto.entries || function () {
    var items = [];
    this.forEach(function (item, name) {
      items.push([name, item]);
    });
    return makeIterator(items);
  };
  if (iterable) {
    USPProto[self.Symbol.iterator] = USPProto[self.Symbol.iterator] || USPProto.entries;
  }
  function encode(str) {
    var replace = {
      '!': '%21',
      "'": '%27',
      '(': '%28',
      ')': '%29',
      '~': '%7E',
      '%20': '+',
      '%00': '\x00'
    };
    return encodeURIComponent(str).replace(/[!'\(\)~]|%20|%00/g, function (match) {
      return replace[match];
    });
  }
  function decode(str) {
    return decodeURIComponent(str.replace(/\+/g, ' '));
  }
  function makeIterator(arr) {
    var iterator = {
      next: function next() {
        var value = arr.shift();
        return {
          done: value === undefined,
          value: value
        };
      }
    };
    if (iterable) {
      iterator[self.Symbol.iterator] = function () {
        return iterator;
      };
    }
    return iterator;
  }
  function parseToDict(search) {
    var dict = {};
    if (_typeof(search) === "object") {
      for (var key in search) {
        if (search.hasOwnProperty(key)) {
          appendTo(dict, key, search[key]);
        }
      }
    } else {
      // remove first '?'
      if (search.indexOf("?") === 0) {
        search = search.slice(1);
      }
      var pairs = search.split("&");
      for (var j = 0; j < pairs.length; j++) {
        var value = pairs[j],
          index = value.indexOf('=');
        if (-1 < index) {
          appendTo(dict, decode(value.slice(0, index)), decode(value.slice(index + 1)));
        } else {
          if (value) {
            appendTo(dict, decode(value), '');
          }
        }
      }
    }
    return dict;
  }
  function appendTo(dict, name, value) {
    var val = typeof value === 'string' ? value : value !== null && value !== undefined && typeof value.toString === 'function' ? value.toString() : JSON.stringify(value);
    if (name in dict) {
      dict[name].push(val);
    } else {
      dict[name] = [val];
    }
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : void 0);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.symbol.js */ "./node_modules/core-js/modules/es6.symbol.js");
__webpack_require__(/*! core-js/modules/es6.string.iterator.js */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "./node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "./node_modules/core-js/modules/web.dom.iterable.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var g;

// This works in non-strict mode
g = function () {
  return this;
}();
try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ "./src/defaults.js":
/*!*************************!*\
  !*** ./src/defaults.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  allowCancel: true,
  debug: false,
  skipDomainVerification: false,
  testMode: false,
  timeout: 30000,
  // 30 seconds
  allowViewportOverride: false
};

/***/ }),

/***/ "./src/embedded.js":
/*!*************************!*\
  !*** ./src/embedded.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
__webpack_require__(/*! core-js/modules/es6.object.get-prototype-of.js */ "./node_modules/core-js/modules/es6.object.get-prototype-of.js");
__webpack_require__(/*! core-js/modules/es6.reflect.get.js */ "./node_modules/core-js/modules/es6.reflect.get.js");
__webpack_require__(/*! core-js/modules/es6.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es6.reflect.construct.js */ "./node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__(/*! core-js/modules/es6.string.iterator.js */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "./node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "./node_modules/core-js/modules/web.dom.iterable.js");
__webpack_require__(/*! core-js/modules/es6.object.keys.js */ "./node_modules/core-js/modules/es6.object.keys.js");
__webpack_require__(/*! core-js/modules/es6.array.filter.js */ "./node_modules/core-js/modules/es6.array.filter.js");
__webpack_require__(/*! core-js/modules/es7.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
__webpack_require__(/*! core-js/modules/es6.array.slice.js */ "./node_modules/core-js/modules/es6.array.slice.js");
__webpack_require__(/*! core-js/modules/es6.object.freeze.js */ "./node_modules/core-js/modules/es6.object.freeze.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
__webpack_require__(/*! core-js/modules/es7.array.includes.js */ "./node_modules/core-js/modules/es7.array.includes.js");
__webpack_require__(/*! core-js/modules/es6.regexp.search.js */ "./node_modules/core-js/modules/es6.regexp.search.js");
__webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! core-js/modules/es6.date.to-string.js */ "./node_modules/core-js/modules/es6.date.to-string.js");
__webpack_require__(/*! core-js/modules/es6.regexp.to-string.js */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es6.string.includes.js */ "./node_modules/core-js/modules/es6.string.includes.js");
__webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
__webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
__webpack_require__(/*! core-js/modules/es6.symbol.js */ "./node_modules/core-js/modules/es6.symbol.js");
__webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
var _tinyEmitter = _interopRequireDefault(__webpack_require__(/*! tiny-emitter */ "./node_modules/tiny-emitter/index.js"));
var _commonTags = __webpack_require__(/*! common-tags */ "./node_modules/common-tags/es/index.js");
var _debug = _interopRequireDefault(__webpack_require__(/*! ./utils/debug */ "./src/utils/debug.js"));
var _defaults = _interopRequireDefault(__webpack_require__(/*! ./defaults */ "./src/defaults.js"));
var _settings = _interopRequireDefault(__webpack_require__(/*! ./settings */ "./src/settings.js"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var HelloSign = /*#__PURE__*/function (_Emitter) {
  /**
   * Creates a new HelloSign Embedded instance.
   *
   * @param {Object} [obj]
   * @constructor
   */
  function HelloSign() {
    var _this;
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, HelloSign);
    _this = _callSuper(this, HelloSign);
    /**
     * Internal reference to the backup viewport content. Used
     * if the "allowViewportOverride" config option is set to
     * true.
     *
     * @type {?string}
     * @private
     */
    _defineProperty(_this, "_backupViewportContent", null);
    /**
     * The base config object which "open" will extend.
     *
     * @type {?Object}
     * @private
     */
    _defineProperty(_this, "_baseConfig", null);
    /**
     * A reference to the base HelloSign Embedded container
     * element.
     *
     * @type {?HTMLElement}
     * @private
     */
    _defineProperty(_this, "_baseEl", null);
    /**
     * The final config object.
     *
     * @type {?Object}
     * @private
     */
    _defineProperty(_this, "_config", null);
    /**
     * The iFrame URL object.
     *
     * @type {?URL}
     * @private
     */
    _defineProperty(_this, "_iFrameURL", null);
    /**
     * A reference to the iFrame element.
     *
     * @type {?HTMLElement}
     * @private
     */
    _defineProperty(_this, "_iFrameEl", null);
    /**
     * The initialization timeout timer.
     *
     * @type {?number}
     * @private
     */
    _defineProperty(_this, "_initTimeout", null);
    /**
     * Whether the client is open or not.
     *
     * @type {boolean}
     * @private
     */
    _defineProperty(_this, "_isOpen", false);
    /**
     * Whether the app is ready or not.
     *
     * @type {boolean}
     * @private
     */
    _defineProperty(_this, "_isReady", false);
    /**
     * Whether the signature request has been sent or signed.
     *
     * @type {boolean}
     * @private
     */
    _defineProperty(_this, "_isSentOrSigned", false);
    /**
     * @type {Function}
     * @private
     */
    _defineProperty(_this, "_onEmbeddedClick", _this._onEmbeddedClick.bind(_this));
    /**
     * @type {Function}
     * @private
     */
    _defineProperty(_this, "_onInitTimeout", _this._onInitTimeout.bind(_this));
    /**
     * @type {Function}
     * @private
     */
    _defineProperty(_this, "_onBeforeUnload", _this._onBeforeUnload.bind(_this));
    /**
     * @type {Function}
     * @private
     */
    _defineProperty(_this, "_onMessage", _this._onMessage.bind(_this));
    _debug.default.info('created new HelloSign instance with options', obj);
    if (obj && _typeof(obj) === 'object') {
      _this._baseConfig = _objectSpread({}, obj);
    } else {
      throw new TypeError('Configuration must be an object');
    }
    return _this;
  }

  /**
   * Validates and appends the "client_id" parameter to the
   * iFrame params object.
   *
   * @throws {TypeError} if clientId is invalid
   * @param {URLSearchParams} params
   * @private
   */
  _inherits(HelloSign, _Emitter);
  return _createClass(HelloSign, [{
    key: "_applyClientId",
    value: function _applyClientId(params) {
      var val = this._config.clientId;
      if (!val) {
        throw new TypeError('"clientId" is required');
      }
      if (typeof val !== 'string') {
        throw new TypeError('"clientId" must be a string');
      }
      params.append('client_id', val);
    }

    /**
     * Validates and appends the "debug" parameter to the
     * iFrame params object.
     *
     * @throws {TypeError} if debug is invalid
     * @param {URLSearchParams} params
     * @private
     */
  }, {
    key: "_applyDebug",
    value: function _applyDebug(params) {
      var val = this._config.debug;
      if (typeof val !== 'boolean') {
        throw new TypeError('"debug" must be a boolean');
      }
      params.append('debug', val ? 1 : 0);
    }

    /**
     * Validates and appends the "final_button_text" parameter
     * to the iFrame params object.
     *
     * @throws {TypeError} if finalButtonText is invalid
     * @param {URLSearchParams} params
     * @private
     */
  }, {
    key: "_applyFinalButtonText",
    value: function _applyFinalButtonText(params) {
      if ('finalButtonText' in this._config) {
        var val = this._config.finalButtonText;
        if (typeof val !== 'string') {
          throw new TypeError('"finalButtonText" must be a string');
        }
        if (!['Save', 'Send', 'Continue'].includes(val)) {
          throw new TypeError('"finalButtonText" must be one of "Save", "Send", or "Continue"');
        }
        params.append('final_button_text', val);
      }
    }

    /**
     * Validates and appends the "hide_header" parameter to the
     * iFrame params object.
     *
     * @throws {TypeError} if hideHeader is invalid
     * @param {URLSearchParams} params
     * @private
     */
  }, {
    key: "_applyHideHeader",
    value: function _applyHideHeader(params) {
      if ('hideHeader' in this._config) {
        var val = this._config.hideHeader;
        if (typeof val !== 'boolean') {
          throw new TypeError('"hideHeader" must be a boolean');
        }
        params.append('hide_header', val);
      }
    }

    /**
     * Appends the "user_culture" parameter to the iFrame
     * params object if it is defined.
     *
     * @param {URLSearchParams} params
     * @private
     */
  }, {
    key: "_applyLocale",
    value: function _applyLocale(params) {
      var val = this._config.locale;
      if (val === 'es-MX') {
        console.warn('Locale "es-MX" is no longer supported. Use es-LA instead.');
      }

      // If "locale" is not defined, then the "user_culture"
      // param is not sent to the app. This tells the app to
      // try use the user's default browser language, if it
      // is supported by HelloSign. Otherwise, the app falls
      // back to English.
      if (val && val.length) {
        params.append('user_culture', val);
      }
    }

    /**
     * Appends the "parent_url" parameter to the iFrame params
     * object.
     *
     * @param {URLSearchParams} params
     * @private
     */
  }, {
    key: "_applyParentURL",
    value: function _applyParentURL(params) {
      params.append('parent_url', document.location.href);
    }

    /**
     * Validates and appends the "redirect_url" parameter to
     * the iFrame params object.
     *
     * @throws {TypeError} if redirectTo is invalid
     * @param {URLSearchParams} params
     * @private
     */
  }, {
    key: "_applyRedirectTo",
    value: function _applyRedirectTo(params) {
      if ('redirectTo' in this._config) {
        var val = this._config.redirectTo;
        if (typeof val !== 'string') {
          throw new TypeError('"redirectTo" must be a string');
        }
        params.append('redirect_url', val);
      }
    }

    /**
     * Validates and appends the "requester" parameter to the
     * iFrame params object.
     *
     * @throws {TypeError} if requestingEmail is invalid
     * @param {URLSearchParams} params
     * @private
     */
  }, {
    key: "_applyRequestingEmail",
    value: function _applyRequestingEmail(params) {
      if ('requestingEmail' in this._config) {
        var val = this._config.requestingEmail;
        if (typeof val !== 'string') {
          throw new TypeError('"requestingEmail" must be a string');
        }
        params.append('requester', val);
      }
    }

    /**
     * Validates and appends the "skip_domain_verification"
     * parameter to the iFrame params object.
     *
     * @throws {TypeError} if testMode is invalid
     * @param {URLSearchParams} params
     * @private
     */
  }, {
    key: "_applyTestMode",
    value: function _applyTestMode(params) {
      var val = this._config.skipDomainVerification || this._config.testMode;
      if (typeof val !== 'boolean') {
        throw new TypeError('"testMode" must be a boolean');
      }
      params.append('skip_domain_verification', val ? 1 : 0);
    }

    /**
     * Validates and appends the "white_labeling_options"
     * parameter to the iFrame params object.
     *
     * @throws {TypeError} if whiteLabeling is invalid
     * @param {URLSearchParams} params
     * @private
     */
  }, {
    key: "_applyWhiteLabeling",
    value: function _applyWhiteLabeling(params) {
      if ('whiteLabeling' in this._config) {
        var val = this._config.whiteLabeling;
        if (_typeof(val) !== 'object') {
          throw new TypeError('"whiteLabeling" must be an object');
        }
        params.append('white_labeling_options', JSON.stringify(val));
      }
    }

    /**
     * Appends the "ux_version" parameter to the iFrame
     * params object.
     *
     * @param {URLSearchParams} params
     * @private
     */
  }, {
    key: "_applyUxVersion",
    value: function _applyUxVersion(params) {
      params.append('ux_version', '2');
    }

    /**
     * Appends the "js_version" parameter to the iFrame params
     * object.
     *
     * @param {URLSearchParams} params
     * @private
     */
  }, {
    key: "_applyVersion",
    value: function _applyVersion(params) {
      params.append('js_version', "2.11.1");
    }

    /**
     * Validates and crates the iFrame params object.
     *
     * @param {URL} frameURL
     * @returns {URLSearchParams}
     * @private
     */
  }, {
    key: "_getFrameParams",
    value: function _getFrameParams(frameURL) {
      var params = new URLSearchParams(frameURL.search);
      this._applyClientId(params);
      this._applyDebug(params);
      this._applyFinalButtonText(params);
      this._applyHideHeader(params);
      this._applyLocale(params);
      this._applyParentURL(params);
      this._applyRedirectTo(params);
      this._applyRequestingEmail(params);
      this._applyTestMode(params);
      this._applyUxVersion(params);
      this._applyVersion(params);
      this._applyWhiteLabeling(params);
      return params;
    }

    /**
     * Calculates and sets the iFrame frame src.
     *
     * @param {string} url
     * @private
     */
  }, {
    key: "_updateFrameUrl",
    value: function _updateFrameUrl(url) {
      var frameURL = new URL(url);
      var frameParams = this._getFrameParams(frameURL);
      frameURL.search = frameParams.toString();
      this._iFrameURL = frameURL;
    }

    /**
     * Renders the HelloSign Embedded markup.
     *
     * We would like to have used HTML Content Templates or
     * Range.createContextualFragment() but we are concerned
     * about browser support.
     *
     * @returns {HTMLElement}
     * @private
     */
  }, {
    key: "_renderMarkup",
    value: function _renderMarkup() {
      var elem = document.createElement('div');
      if (this._config.container) {
        elem.innerHTML = (0, _commonTags.safeHtml)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        <div class=\"", "\">\n          <iframe class=\"", "\" name=\"", "\" src=\"", "\" scrolling=\"no\"></iframe>\n        </div>\n      "])), _settings.default.classNames.BASE, _settings.default.classNames.IFRAME, _settings.default.iframe.NAME, this._iFrameURL.href);
      } else {
        elem.innerHTML = (0, _commonTags.safeHtml)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        <div class=\"", " ", "\">\n          <div class=\"", "\"></div>\n          <div class=\"", "\">\n      "])), _settings.default.classNames.BASE, _settings.default.classNames.BASE_IN_MODAL, _settings.default.classNames.MODAL_SCREEN, _settings.default.classNames.MODAL_CONTENT) + (this._config.allowCancel ? (0, _commonTags.safeHtml)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n          <div class=", ">\n            <button class=", " role=\"button\" title=\"Close signature request\"></button>\n          </div>\n        "])), _settings.default.classNames.MODAL_CLOSE, _settings.default.classNames.MODAL_CLOSE_BTN) : '') + (0, _commonTags.safeHtml)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n            <iframe class=\"", "\" name=\"", "\" src=\"", "\" scrolling=\"no\"></iframe>\n          </div>\n        </div>\n      "])), _settings.default.classNames.IFRAME, _settings.default.iframe.NAME, this._iFrameURL.href);
      }
      return elem.firstChild;
    }

    /**
     * Renders the HelloSign Embedded markup into the DOM.
     *
     * @private
     */
  }, {
    key: "_appendMarkup",
    value: function _appendMarkup() {
      this._baseEl = this._renderMarkup();

      // Listen for click events within the HelloSign
      // Embedded DOM markup. These will be delegated
      // depending on the source element.
      this._baseEl.addEventListener('click', this._onEmbeddedClick);

      // Obtain element references.
      this._iFrameEl = this._baseEl.getElementsByClassName(_settings.default.classNames.IFRAME).item(0);

      // Insert HelloSign Embedded markup into the DOM.
      if (this._config.container) {
        this._config.container.appendChild(this._baseEl);
      } else {
        document.body.appendChild(this._baseEl);
      }
    }

    /**
     * Removes the HelloSign Embedded markup from the DOM.
     *
     *
     * @private
     */
  }, {
    key: "_clearMarkup",
    value: function _clearMarkup() {
      this._baseEl.parentElement.removeChild(this._baseEl);
    }

    /**
     * @typedef {Object} HelloSignMessage
     * @property {string} type
     * @property {Object} [payload]
     */

    /**
     * Posts a cross-origin window message to the HelloSign
     * Embedded iFrame content window.
     *
     * @param {HelloSignMessage} msg
     * @private
     */
  }, {
    key: "_sendMessage",
    value: function _sendMessage(msg) {
      _debug.default.info('posting message', msg);
      var targetOrigin = this._iFrameURL.href;
      var targetWindow = this._iFrameEl.contentWindow;
      targetWindow.postMessage(msg, targetOrigin);
    }

    /**
     * Sends a cancel request message to the app.
     *
     * @private
     */
  }, {
    key: "_sendCancelRequestMessage",
    value: function _sendCancelRequestMessage() {
      _debug.default.info('sending cancel request message');
      this._sendMessage({
        type: _settings.default.messages.USER_CANCEL_REQUEST
      });
    }

    /**
     * Sends the configuration message to the app.
     *
     * @private
     */
  }, {
    key: "_sendConfigurationMessage",
    value: function _sendConfigurationMessage() {
      _debug.default.info('sending app configuration message');
      this._sendMessage({
        type: _settings.default.messages.APP_CONFIGURE,
        payload: {
          allowCancel: this._config.allowCancel
        }
      });
    }

    /**
     * Sends the domain verification response.
     *
     * @param {string} token
     * @private
     */
  }, {
    key: "_sendDomainVerificationMessage",
    value: function _sendDomainVerificationMessage(token) {
      _debug.default.info('sending domain verification message', token);
      this._sendMessage({
        type: _settings.default.messages.APP_VERIFY_DOMAIN_RESPONSE,
        payload: {
          token: token
        }
      });
    }

    /**
     * Sends the initialization error message.
     *
     * @private
     */
  }, {
    key: "_sendInitializationErrorMessage",
    value: function _sendInitializationErrorMessage() {
      _debug.default.info('sending initialization error message');
      this._sendMessage({
        type: _settings.default.messages.APP_ERROR,
        payload: {
          message: 'App failed to initialize before timeout'
        }
      });
    }

    /**
     * Clears the initialization timeout timer.
     *
     * @private
     */
  }, {
    key: "_clearInitTimeout",
    value: function _clearInitTimeout() {
      if (this._initTimeout) {
        _debug.default.info('clearing initialization timeout');
        clearTimeout(this._initTimeout);
        this._initTimeout = null;
      }
    }

    /**
     * Starts the initialization timeout timer.
     *
     * @private
     */
  }, {
    key: "_startInitTimeout",
    value: function _startInitTimeout() {
      _debug.default.info('starting initialization timeout');
      this._clearInitTimeout();
      this._initTimeout = setTimeout(this._onInitTimeout, this._config.timeout);
    }

    /**
     * Starts the initialization timeout timer if the workflow
     * is embedded signing.
     *
     * @private
     */
  }, {
    key: "_maybeStartInitTimeout",
    value: function _maybeStartInitTimeout() {
      if (this._iFrameURL.href.includes('embeddedSign')) {
        // Start the initialization timeout because this is
        // embedded signing.
        this._startInitTimeout();
      }
    }

    /**
     * Overrides the viewport meta tag to use maximum-scale=1,
     * if it is not already present. This is needed to prevent
     * browsers from automatically zooming into text fields.
     * This will only be applied if there is an existing
     * viewport meta tag on the page.
     *
     * @private
     */
  }, {
    key: "_blockNativeZoom",
    value: function _blockNativeZoom() {
      var viewport = document.querySelector('meta[name=viewport]');
      if (viewport) {
        var content = viewport.getAttribute('content') || '';
        var newContentPairs = content.split(/,\s?/);

        // Prevent browsers from automatically zooming into
        // text fields.
        if (!content.includes('maximum-scale=1')) {
          newContentPairs.push('maximum-scale=1');
        }
        var newContent = newContentPairs.join(',');
        if (newContent !== viewport.getAttribute('content')) {
          viewport.setAttribute('content', newContent);
          this._backupViewportContent = content;
        }
      }
    }

    /**
     * Restores the viewport using the original value of the
     * initial viewport meta tag.
     *
     * @private
     */
  }, {
    key: "_restoreViewport",
    value: function _restoreViewport() {
      if (this._backupViewportContent) {
        var viewport = document.querySelector('meta[name=viewport]');
        viewport.setAttribute('content', this._backupViewportContent);
        this._backupViewportContent = null;
      }
    }

    /**
     * @event HelloSign#error
     * @type {Object}
     * @property {string} signatureId
     * @property {number} code
     */

    /**
     * Called when the app encountered an error.
     *
     * @emits HelloSign#error
     * @param {Object} payload
     * @private
     */
  }, {
    key: "_appDidError",
    value: function _appDidError(payload) {
      _debug.default.error('app encountered an error with code:', payload.code);
      this.emit(_settings.default.events.ERROR, payload);
    }

    /**
     * @event HelloSign#ready
     * @type {Object}
     * @property {string} signatureId
     */

    /**
     * Called when the app was initialized.
     *
     * @emits HelloSign#ready
     * @param {Object} payload
     * @private
     */
  }, {
    key: "_appDidInitialize",
    value: function _appDidInitialize(payload) {
      _debug.default.info('app was initialized');
      this._isReady = true;
      this._sendConfigurationMessage();
      this._clearInitTimeout();
      window.addEventListener('beforeunload', this._onBeforeUnload);
      this.emit(_settings.default.events.READY, payload);
    }

    /**
     * Called when the app requested domain verification.
     *
     * @param {Object} payload
     * @param {string} payload.token
     * @private
     */
  }, {
    key: "_appDidRequestDomainVerification",
    value: function _appDidRequestDomainVerification(_ref) {
      var token = _ref.token;
      _debug.default.info('app requested domain verification', token);
      this._sendDomainVerificationMessage(token);
    }

    /**
     * @event HelloSign#message
     * @type {Object}
     * @property {string} type
     * @property {?Object} payload
     */

    /**
     * Called when HelloSign Embedded receives a cross-origin
     * window message.
     *
     * @emits HelloSign#message
     * @param {MessageEvent} evt
     * @private
     */
  }, {
    key: "_appDidSendMessage",
    value: function _appDidSendMessage(_ref2) {
      var data = _ref2.data,
        origin = _ref2.origin;
      _debug.default.info('received message', data, origin);
      this.emit(_settings.default.events.MESSAGE, data);
      this._delegateMessage(data);
    }

    /**
     * @event HelloSign#cancel
     */

    /**
     * Called when the user canceled the request.
     *
     * @emits HelloSign#cancel
     * @private
     */
  }, {
    key: "_userDidCancelRequest",
    value: function _userDidCancelRequest() {
      _debug.default.info('user canceled the signature request');
      this.emit(_settings.default.events.CANCEL);
      this.close();
    }

    /**
     * @event HelloSign#createTemplate
     * @type {Object}
     * @property {string} title
     * @property {string} message
     * @property {string[]} signerRoles
     * @property {Object} signatureRequestInfo
     */

    /**
     * Called when the user created the template.
     *
     * @emits HelloSign#createTemplate
     * @param {Object} payload
     * @private
     */
  }, {
    key: "_userDidCreateTemplate",
    value: function _userDidCreateTemplate(payload) {
      _debug.default.info('user created the signature request template');
      this.emit(_settings.default.events.CREATE_TEMPLATE, payload);
    }

    /**
     * @event HelloSign#decline
     * @type {Object}
     * @property {string} signatureId
     * @property {string} reason
     */

    /**
     * Called when the user declined the request.
     *
     * @emits HelloSign#decline
     * @param {Object} payload
     * @private
     */
  }, {
    key: "_userDidDeclineRequest",
    value: function _userDidDeclineRequest(payload) {
      _debug.default.info('user declined the signature request');
      this.emit(_settings.default.events.DECLINE, payload);
    }

    /**
     * @event HelloSign#finish
     */

    /**
     * Called when the user finished the request.
     *
     * @emits HelloSign#finish
     * @private
     */
  }, {
    key: "_userDidFinishRequest",
    value: function _userDidFinishRequest() {
      _debug.default.info('user finished the signature request');
      this.emit(_settings.default.events.FINISH);
      this.close();
    }

    /**
     * @event HelloSign#reassign
     * @type {Object}
     * @property {string} signatureId
     * @property {string} name
     * @property {string} email
     * @property {string} reason
     */

    /**
     * Called when the user reassigned the request.
     *
     * @emits HelloSign#reassign
     * @param {Object} payload
     * @private
     */
  }, {
    key: "_userDidReassignRequest",
    value: function _userDidReassignRequest(payload) {
      _debug.default.info('user reassigned the signature request with reason:', payload.reason);
      this.emit(_settings.default.events.REASSIGN, payload);
    }

    /**
     * @event HelloSign#send
     * @type {Object}
     * @property {string} signatureRequestId
     * @property {string} signatureId
     */

    /**
     * Called when the user sent the request.
     *
     * @emits HelloSign#send
     * @param {Object} payload
     * @private
     */
  }, {
    key: "_userDidSendRequest",
    value: function _userDidSendRequest(payload) {
      _debug.default.info('user sent the signature request');
      this._isSentOrSigned = true;
      window.removeEventListener('beforeunload', this._onBeforeUnload);
      this.emit(_settings.default.events.SEND, payload);
    }

    /**
     * @event HelloSign#sign
     * @type {Object}
     * @property {string} signatureId
     */

    /**
     * Called when the user signed the request.
     *
     * @emits HelloSign#sign
     * @param {Object} payload
     * @private
     */
  }, {
    key: "_userDidSignRequest",
    value: function _userDidSignRequest(payload) {
      _debug.default.info('user signed the signature request');
      this._isSentOrSigned = true;
      window.removeEventListener('beforeunload', this._onBeforeUnload);
      this.emit(_settings.default.events.SIGN, payload);
    }

    /**
     * Called when the user clicks anything within the
     * HelloSign Embedded boundary.
     *
     * @param {Event} evt
     * @private
     */
  }, {
    key: "_onEmbeddedClick",
    value: function _onEmbeddedClick(evt) {
      var elem = evt.target;

      // Check if the element that was clicked is the close
      // button.
      if (elem.classList.contains(_settings.default.classNames.MODAL_CLOSE_BTN)) {
        evt.preventDefault();

        // If the app is ready but has not yet been sent or
        // signed, close via the app. Otherwise, we force
        // close without notifying the app. This is because
        // the close button can represent a "cancel" or a
        // "close" depdending on the state of the request,
        // but Embedded is not aware of this state. Therefore
        // we send the close request down to the app so that
        // the app can determine the proper close type.
        if (this._isReady && !this._isSentOrSigned) {
          this._sendCancelRequestMessage();
        } else {
          this.close();
        }
      }
    }

    /**
     * Called when the initialization timeout timer completes.
     * Sends an error message to the app and closes HelloSign
     * Embedded.
     *
     * @private
     */
  }, {
    key: "_onInitTimeout",
    value: function _onInitTimeout() {
      _debug.default.error('app failed to initialize before timeout');

      // Display error to the user instead of just closing the
      // signature request window.
      // eslint-disable-next-line no-alert
      alert('Something went wrong when preparing your signature request. Please try again.');
      this._sendInitializationErrorMessage();
      this._clearInitTimeout();
      this.close();
    }

    /**
     * Called when the user navigates away from the page in
     * some way. Although modern browsers will likely block
     * this message, the browser may still natively confirm
     * with the user if they want to leave or stay on the
     * page.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload
     * @param {BeforeUnloadEvent} evt
     * @private
     */
  }, {
    key: "_onBeforeUnload",
    value: function _onBeforeUnload(evt) {
      if (this._isReady) {
        /* eslint-disable-next-line no-restricted-globals, no-alert */
        if (!confirm('Are you sure you want to close this signature request? You will lose your changes.')) {
          evt.preventDefault();

          // Chrome requires returnValue to be set.
          evt.returnValue = '';
        }
      }
    }

    /**
     * Called when a message is received by the window.
     * Validates the message origin and delegates to the
     * appropriate method based on the message type.
     *
     * @param {MessageEvent} evt
     * @private
     */
  }, {
    key: "_onMessage",
    value: function _onMessage(message) {
      var strippedOrigin = message.origin.replace(/\/$/, '');
      if (strippedOrigin === this._iFrameURL.origin) {
        if (_typeof(message.data) === 'object') {
          this._appDidSendMessage(message);
        }
      }
    }

    /**
     * Called when a message is received by the window.
     * Validates the message origin and delegates to the
     * appropriate method based on the message type.
     *
     * @param {HelloSignMessage} msg
     * @private
     */
  }, {
    key: "_delegateMessage",
    value: function _delegateMessage(_ref3) {
      var type = _ref3.type,
        payload = _ref3.payload;
      switch (type) {
        case _settings.default.messages.APP_ERROR:
          this._appDidError(payload);
          break;
        case _settings.default.messages.APP_INITIALIZE:
          this._appDidInitialize(payload);
          break;
        case _settings.default.messages.APP_VERIFY_DOMAIN_REQUEST:
          this._appDidRequestDomainVerification(payload);
          break;
        case _settings.default.messages.USER_CANCEL_REQUEST:
          this._userDidCancelRequest();
          break;
        case _settings.default.messages.USER_CREATE_TEMPLATE:
          this._userDidCreateTemplate(payload);
          break;
        case _settings.default.messages.USER_DECLINE_REQUEST:
          this._userDidDeclineRequest(payload);
          break;
        case _settings.default.messages.USER_FINISH_REQUEST:
          this._userDidFinishRequest();
          break;
        case _settings.default.messages.USER_REASSIGN_REQUEST:
          this._userDidReassignRequest(payload);
          break;
        case _settings.default.messages.USER_SEND_REQUEST:
          this._userDidSendRequest(payload);
          break;
        case _settings.default.messages.USER_SIGN_REQUEST:
          this._userDidSignRequest(payload);
          break;
        default:
          // Unhandled message.
          _debug.default.warn('unhandled cross-origin window message', type);
      }
    }

    /**
     * @event HelloSign#open
     * @type {Object}
     * @property {string} url
     * @property {string} iFrameUrl
     */

    /**
     * @typedef {Object} HelloSignOptions
     * @property {boolean} [allowCancel=true]
     * @property {string} [clientId]
     * @property {HTMLElement} [container]
     * @property {boolean} [debug=false]
     * @property {boolean} [hideHeader=false]
     * @property {string} [locale="en_US"]
     * @property {string} [redirectTo]
     * @property {string} [requestingEmail]
     * @property {boolean} [skipDomainVerification=false]
     * @property {boolean} [testMode=false]
     * @property {number} [timeout=30000]
     * @property {Object} [whiteLabeling]
     */

    /**
     * Opens the url in HelloSign Embedded.
     *
     * @emits HelloSign#open
     * @param {string} url
     * @param {HelloSignOptions} [opts={}]
     * @public
     */
  }, {
    key: "open",
    value: function open(url) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _debug.default.info('open()', url, opts);

      // Close if embedded is already open.
      if (this._isOpen) {
        this.close();
      }
      this._config = _objectSpread(_objectSpread(_objectSpread({}, _defaults.default), this._baseConfig), opts);

      // Check if container is valid.
      if (this._config.container) {
        if (!(this._config.container instanceof HTMLElement)) {
          throw new TypeError('"container" must be an element');
        }
      }
      this._updateFrameUrl(url);
      this._appendMarkup();
      this._maybeStartInitTimeout();
      if (this._config.allowViewportOverride) {
        this._blockNativeZoom();
      }
      this._isOpen = true;
      window.addEventListener('message', this._onMessage);
      this.emit(_settings.default.events.OPEN, {
        url: this._iFrameURL.href
      });
    }

    /**
     * @event HelloSign#close
     */

    /**
     * Closes the HelloSign Embeded window.
     *
     * @emits HelloSign#close
     * @public
     */
  }, {
    key: "close",
    value: function close() {
      _debug.default.info('close()');

      // It's already closed!
      if (!this._isOpen) {
        return;
      }
      this._clearInitTimeout();
      this._clearMarkup();
      if (this._config.allowViewportOverride) {
        this._restoreViewport();
      }
      this._baseEl.removeEventListener('click', this._onEmbeddedClick);
      this._config = null;
      this._baseEl = null;
      this._iFrameEl = null;
      this._iFrameURL = null;
      this._isOpen = false;
      this._isReady = false;
      this._isSentOrSigned = false;
      window.removeEventListener('message', this._onMessage);
      window.removeEventListener('beforeunload', this._onBeforeUnload);
      this.emit(_settings.default.events.CLOSE);
    }

    /**
     * Overrides tiny-emitter's "emit" method.
     *
     * @see https://www.npmjs.com/package/tiny-emitter
     * @param {string} name
     * @param {any} [data]
     * @override
     */
  }, {
    key: "emit",
    value: function emit() {
      var _get2;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _debug.default.info.apply(_debug.default, ['emit()'].concat(args));
      (_get2 = _get(_getPrototypeOf(HelloSign.prototype), "emit", this)).call.apply(_get2, [this].concat(args));
    }

    /**
     * @returns {?HTMLElement}
     * @public
     */
  }, {
    key: "element",
    get: function get() {
      return this._baseEl;
    }

    /**
     * @returns {?HTMLElement}
     * @public
     */
  }, {
    key: "iFrame",
    get: function get() {
      return this._iFrameEl;
    }

    /**
     * @returns {boolean}
     * @public
     */
  }, {
    key: "isOpen",
    get: function get() {
      return this._isOpen;
    }

    /**
     * @returns {boolean}
     * @public
     */
  }, {
    key: "isReady",
    get: function get() {
      return this._isReady;
    }
  }]);
}(_tinyEmitter.default);
/**
 * HelloSign Embedded class names.
 *
 * @enum {string}
 * @static
 * @readonly
 */
_defineProperty(HelloSign, "classNames", _settings.default.classNames);
/**
 * HelloSign Embedded events.
 *
 * @enum {string}
 * @static
 * @readonly
 */
_defineProperty(HelloSign, "events", _settings.default.events);
/**
 * HelloSign Embedded supported locales.
 *
 * @enum {string}
 * @static
 * @readonly
 */
_defineProperty(HelloSign, "locales", _settings.default.locales);
/**
 * HelloSign Embedded cross-origin window messages.
 *
 * @enum {string}
 * @static
 * @readonly
 */
_defineProperty(HelloSign, "messages", _settings.default.messages);
/**
 * HelloSign Embedded version number.
 *
 * @enum {string}
 * @static
 * @readonly
 */
_defineProperty(HelloSign, "version", "2.11.1");
var _default = exports.default = HelloSign;

/***/ }),

/***/ "./src/sass/embedded.scss":
/*!********************************!*\
  !*** ./src/sass/embedded.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./embedded.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/sass/embedded.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * HelloSign Embedded class names.
 *
 * @enum {string}
 * @readonly
 */
var classNames = {
  BASE: 'x-hellosign-embedded',
  BASE_IN_MODAL: 'x-hellosign-embedded--in-modal',
  IFRAME: 'x-hellosign-embedded__iframe',
  MODAL_CLOSE: 'x-hellosign-embedded__modal-close',
  MODAL_CLOSE_BTN: 'x-hellosign-embedded__modal-close-button',
  MODAL_CONTENT: 'x-hellosign-embedded__modal-content',
  MODAL_SCREEN: 'x-hellosign-embedded__modal-screen'
};

/**
 * HelloSign Embedded events.
 *
 * @enum {string}
 * @readonly
 */
var events = {
  ERROR: 'error',
  SEND: 'send',
  CANCEL: 'cancel',
  CLOSE: 'close',
  CREATE_TEMPLATE: 'createTemplate',
  DECLINE: 'decline',
  FINISH: 'finish',
  MESSAGE: 'message',
  OPEN: 'open',
  READY: 'ready',
  REASSIGN: 'reassign',
  SIGN: 'sign'
};

/**
 * HelloSign Embedded iFrame properties.
 *
 * @enum {string}
 * @readonly
 */
var iframe = {
  NAME: 'x-hellosign-embedded'
};

/**
 * HelloSign Embedded supported locales.
 *
 * @enum {string}
 * @readonly
 */
var locales = {
  CS_CZ: 'cs-CZ',
  // Czech (Czech Republic)
  DA_DK: 'da-DK',
  // Danish (Denmark)
  DE_DE: 'de-DE',
  // German (Germany)
  EN_GB: 'en-GB',
  // English (Great Britain)
  EN_US: 'en-US',
  // English (United States)
  ES_LA: 'es-LA',
  // Spanish (Latin America)
  ES_ES: 'es-ES',
  // Spanish (Spain)
  FR_FR: 'fr-FR',
  // French (France)
  ID_ID: 'id-ID',
  // Indonesian (Indonesia)
  IT_IT: 'it-IT',
  // Italian (Italy)
  JA_JP: 'ja-JP',
  // Japanese (Japan)
  KO_KR: 'ko-KR',
  // Korean (Korea)
  MS_MY: 'ms-MY',
  // Malaysian (Malaysia)
  NB_NO: 'nb-NO',
  // Norwegian (Norway)
  NL_NL: 'nl-NL',
  // Dutch (Netherlands)
  PL_PL: 'pl-PL',
  // Polish (Poland)
  PT_BR: 'pt-BR',
  // Portuguese (Brazil)
  RU_RU: 'ru-RU',
  // Russian (Russia)
  SV_SE: 'sv-SE',
  // Swedish (Sweden)
  TH_TH: 'th-TH',
  // Thai (Thailand)
  UK_UA: 'uk-UA',
  // Ukrainian (Ukraine)
  ZH_CN: 'zh-CN',
  // Chinese (Simplified) (China)
  ZH_TW: 'zh-TW' // Chinese (Taiwan)

  // No longer supported, use es-LA instead.
  // ES_MX: 'es-MX', // Spanish (Mexico)
};

/**
 * HelloSign Embedded cross-origin window messages.
 *
 * @enum {string}
 * @readonly
 */
var messages = {
  APP_CONFIGURE: 'hellosign:configure',
  APP_ERROR: 'hellosign:error',
  APP_INITIALIZE: 'hellosign:initialize',
  APP_VERIFY_DOMAIN_REQUEST: 'hellosign:verifyDomainRequest',
  APP_VERIFY_DOMAIN_RESPONSE: 'hellosign:verifyDomainResponse',
  USER_CANCEL_REQUEST: 'hellosign:userCancelRequest',
  USER_CREATE_TEMPLATE: 'hellosign:userCreateTemplate',
  USER_DECLINE_REQUEST: 'hellosign:userDeclineRequest',
  USER_FINISH_REQUEST: 'hellosign:userFinishRequest',
  USER_REASSIGN_REQUEST: 'hellosign:userReassignRequest',
  USER_SEND_REQUEST: 'hellosign:userSendRequest',
  USER_SIGN_REQUEST: 'hellosign:userSignRequest'
};
var _default = exports.default = {
  classNames: classNames,
  events: events,
  iframe: iframe,
  locales: locales,
  messages: messages
};

/***/ }),

/***/ "./src/utils/debug.js":
/*!****************************!*\
  !*** ./src/utils/debug.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _debug = _interopRequireDefault(__webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * To enable debug messages, enter the following into your
 * developer tools console:
 *
 *   localStorage.debug = 'hellosign-embedded:*';
 *
 * This will surface all debug messages under the
 * "hellosign:" namespace.
 */

var info = (0, _debug.default)("".concat("hellosign-embedded", ":info"));
var warn = (0, _debug.default)("".concat("hellosign-embedded", ":warn"));
var error = (0, _debug.default)("".concat("hellosign-embedded", ":error"));
info.log = console.log.bind(console); // eslint-disable-line no-console
warn.log = console.warn.bind(console); // eslint-disable-line no-console
var _default = exports.default = {
  info: info,
  warn: warn,
  error: error
};

/***/ }),

/***/ 0:
/*!************************************************************************************************!*\
  !*** multi url-polyfill url-search-params-polyfill ./src/sass/embedded.scss ./src/embedded.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! url-polyfill */"./node_modules/url-polyfill/url-polyfill.js");
__webpack_require__(/*! url-search-params-polyfill */"./node_modules/url-search-params-polyfill/index.js");
__webpack_require__(/*! ./src/sass/embedded.scss */"./src/sass/embedded.scss");
module.exports = __webpack_require__(/*! ./src/embedded.js */"./src/embedded.js");


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IZWxsb1NpZ24vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0hlbGxvU2lnbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL1RlbXBsYXRlVGFnL1RlbXBsYXRlVGFnLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvY29tbWFMaXN0cy9jb21tYUxpc3RzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvY29tbWFMaXN0c0FuZC9jb21tYUxpc3RzQW5kLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvY29tbWFMaXN0c09yL2NvbW1hTGlzdHNPci5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL2h0bWwvaHRtbC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL2lubGluZUFycmF5VHJhbnNmb3JtZXIvaW5saW5lQXJyYXlUcmFuc2Zvcm1lci5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL2lubGluZUxpc3RzL2lubGluZUxpc3RzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvb25lTGluZS9vbmVMaW5lLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvb25lTGluZUNvbW1hTGlzdHMvb25lTGluZUNvbW1hTGlzdHMuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0c0FuZC9vbmVMaW5lQ29tbWFMaXN0c0FuZC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL29uZUxpbmVDb21tYUxpc3RzT3Ivb25lTGluZUNvbW1hTGlzdHNPci5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL29uZUxpbmVJbmxpbmVMaXN0cy9vbmVMaW5lSW5saW5lTGlzdHMuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9vbmVMaW5lVHJpbS9vbmVMaW5lVHJpbS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL3JlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIvcmVtb3ZlTm9uUHJpbnRpbmdWYWx1ZXNUcmFuc2Zvcm1lci5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL3JlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lci9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9yZXBsYWNlU3RyaW5nVHJhbnNmb3JtZXIvcmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyL3JlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lci5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL3NhZmVIdG1sL3NhZmVIdG1sLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvc3BsaXRTdHJpbmdUcmFuc2Zvcm1lci9zcGxpdFN0cmluZ1RyYW5zZm9ybWVyLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvc3RyaXBJbmRlbnQvc3RyaXBJbmRlbnQuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9zdHJpcEluZGVudFRyYW5zZm9ybWVyL3N0cmlwSW5kZW50VHJhbnNmb3JtZXIuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9zdHJpcEluZGVudHMvc3RyaXBJbmRlbnRzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvdHJpbVJlc3VsdFRyYW5zZm9ybWVyL3RyaW1SZXN1bHRUcmFuc2Zvcm1lci5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZHZhbmNlLXN0cmluZy1pbmRleC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2JpbmQuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmFpbHMtaXMtcmVnZXhwLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZpeC1yZS13a3MuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZnVuY3Rpb24tdG8tc3RyaW5nLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2luaGVyaXQtaWYtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtcmVnZXhwLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vd24ta2V5cy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZ2V4cC1leGVjLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaWN0LW1ldGhvZC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLXRyaW0uanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLXdzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc2xpY2UuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLW5hbi5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktbmFtZXMuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmNvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmV4ZWMuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAucmVwbGFjZS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc2VhcmNoLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LmFycmF5LmluY2x1ZGVzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9zcmMvc2Fzcy9lbWJlZGRlZC5zY3NzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvY29tbW9uLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy90aW55LWVtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL3VybC1wb2x5ZmlsbC91cmwtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL3VybC1zZWFyY2gtcGFyYW1zLXBvbHlmaWxsL2luZGV4LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vc3JjL2RlZmF1bHRzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL3NyYy9lbWJlZGRlZC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9zcmMvc2Fzcy9lbWJlZGRlZC5zY3NzPzk4ZDkiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vc3JjL3NldHRpbmdzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL3NyYy91dGlscy9kZWJ1Zy5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsIl90aGlzIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInRyYW5zZm9ybWVycyIsIkFycmF5IiwiX2tleSIsIl9jbGFzc0NhbGxDaGVjayIsInRhZyIsInN0cmluZ3MiLCJfbGVuMiIsImV4cHJlc3Npb25zIiwiX2tleTIiLCJpbnRlcmltVGFnIiwiYmluZCIsInRyYW5zZm9ybUVuZFJlc3VsdCIsIm1hcCIsInRyYW5zZm9ybVN0cmluZyIsInJlZHVjZSIsInByb2Nlc3NTdWJzdGl0dXRpb25zIiwiaXNBcnJheSIsInRyYW5zZm9ybWVyIiwicHJldmlvdXNUYWciLCJ0ZW1wbGF0ZSIsIl9sZW4zIiwic3Vic3RpdHV0aW9ucyIsIl9rZXkzIiwiX3RlbXBsYXRlT2JqZWN0IiwiYXBwbHkiLCJ1bmRlZmluZWQiLCJjb25jYXQiLCJyZXN1bHRTb0ZhciIsInJlbWFpbmluZ1BhcnQiLCJzdWJzdGl0dXRpb24iLCJ0cmFuc2Zvcm1TdWJzdGl0dXRpb24iLCJzaGlmdCIsInN0ciIsImNiIiwicmVzIiwidHJhbnNmb3JtIiwib25TdHJpbmciLCJvblN1YnN0aXR1dGlvbiIsImVuZFJlc3VsdCIsIm9uRW5kUmVzdWx0IiwiX1RlbXBsYXRlVGFnIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciIsIl9pbmxpbmVBcnJheVRyYW5zZm9ybWVyIiwiX3RyaW1SZXN1bHRUcmFuc2Zvcm1lciIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiY29tbWFMaXN0cyIsImlubGluZUFycmF5VHJhbnNmb3JtZXIiLCJzZXBhcmF0b3IiLCJzdHJpcEluZGVudFRyYW5zZm9ybWVyIiwidHJpbVJlc3VsdFRyYW5zZm9ybWVyIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwiY29tbWFMaXN0c0FuZCIsImNvbmp1bmN0aW9uIiwiY29tbWFMaXN0c09yIiwiX3NwbGl0U3RyaW5nVHJhbnNmb3JtZXIiLCJfcmVtb3ZlTm9uUHJpbnRpbmdWYWx1ZXNUcmFuc2Zvcm1lciIsImh0bWwiLCJzcGxpdFN0cmluZ1RyYW5zZm9ybWVyIiwicmVtb3ZlTm9uUHJpbnRpbmdWYWx1ZXNUcmFuc2Zvcm1lciIsImRlZmF1bHRzIiwic2VyaWFsIiwib3B0cyIsImFycmF5TGVuZ3RoIiwiaW5kZW50IiwibWF0Y2giLCJqb2luIiwic2VwYXJhdG9ySW5kZXgiLCJsYXN0SW5kZXhPZiIsInNsaWNlIiwiaW5saW5lTGlzdHMiLCJfcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyIiwib25lTGluZSIsInJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciIsIm9uZUxpbmVDb21tYUxpc3RzIiwib25lTGluZUNvbW1hTGlzdHNBbmQiLCJvbmVMaW5lQ29tbWFMaXN0c09yIiwib25lTGluZUlubGluZUxpc3RzIiwib25lTGluZVRyaW0iLCJpc1ZhbGlkVmFsdWUiLCJ4IiwiTnVtYmVyIiwiaXNOYU4iLCJmaWx0ZXIiLCJyZXBsYWNlV2hhdCIsInJlcGxhY2VXaXRoIiwiRXJyb3IiLCJyZXBsYWNlIiwicmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyIiwicmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyIiwidG9TdHJpbmciLCJfcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyIiwic2FmZUh0bWwiLCJzcGxpdEJ5IiwiaW5jbHVkZXMiLCJzcGxpdCIsInN0cmlwSW5kZW50IiwidHlwZSIsIk1hdGgiLCJtaW4iLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJlbCIsInJlZ2V4cCIsIlJlZ0V4cCIsInN0cmlwSW5kZW50cyIsInNpZGUiLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJtb2R1bGUiLCJ1c2VTb3VyY2VNYXAiLCJsaXN0IiwiaXRlbSIsImNvbnRlbnQiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwiaSIsIm1vZHVsZXMiLCJtZWRpYVF1ZXJ5IiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImlkIiwicHVzaCIsImNzc01hcHBpbmciLCJidG9hIiwic291cmNlTWFwcGluZyIsInRvQ29tbWVudCIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsInNvdXJjZU1hcCIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJmb3JtYXRBcmdzIiwic2F2ZSIsImxvYWQiLCJ1c2VDb2xvcnMiLCJzdG9yYWdlIiwibG9jYWxzdG9yYWdlIiwiZGVzdHJveSIsIndhcm5lZCIsImNvbnNvbGUiLCJ3YXJuIiwiY29sb3JzIiwid2luZG93IiwicHJvY2VzcyIsIl9fbndqcyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJXZWJraXRBcHBlYXJhbmNlIiwiZmlyZWJ1ZyIsImV4Y2VwdGlvbiIsInRhYmxlIiwicGFyc2VJbnQiLCIkMSIsImFyZ3MiLCJuYW1lc3BhY2UiLCJodW1hbml6ZSIsImRpZmYiLCJjIiwiY29sb3IiLCJzcGxpY2UiLCJpbmRleCIsImxhc3RDIiwibG9nIiwiZGVidWciLCJuYW1lc3BhY2VzIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJlcnJvciIsInIiLCJnZXRJdGVtIiwiZW52IiwiREVCVUciLCJsb2NhbFN0b3JhZ2UiLCJmb3JtYXR0ZXJzIiwiaiIsInYiLCJtZXNzYWdlIiwic2V0dXAiLCJjcmVhdGVEZWJ1ZyIsImNvZXJjZSIsImRpc2FibGUiLCJlbmFibGUiLCJlbmFibGVkIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJuYW1lcyIsInNraXBzIiwic2VsZWN0Q29sb3IiLCJoYXNoIiwiY2hhckNvZGVBdCIsImFicyIsInByZXZUaW1lIiwiZW5hYmxlT3ZlcnJpZGUiLCJuYW1lc3BhY2VzQ2FjaGUiLCJlbmFibGVkQ2FjaGUiLCJzZWxmIiwiY3VyciIsIkRhdGUiLCJtcyIsInByZXYiLCJ1bnNoaWZ0IiwiZm9ybWF0IiwiZm9ybWF0dGVyIiwidmFsIiwiY2FsbCIsImxvZ0ZuIiwiZXh0ZW5kIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZ2V0Iiwic2V0IiwiaW5pdCIsImRlbGltaXRlciIsIm5ld0RlYnVnIiwibGVuIiwidG9OYW1lc3BhY2UiLCJuYW1lIiwidGVzdCIsInN1YnN0cmluZyIsInN0YWNrIiwicyIsIm0iLCJoIiwiZCIsInciLCJ5Iiwib3B0aW9ucyIsIl90eXBlb2YiLCJwYXJzZSIsImlzRmluaXRlIiwibG9uZyIsImZtdExvbmciLCJmbXRTaG9ydCIsIlN0cmluZyIsImV4ZWMiLCJuIiwicGFyc2VGbG9hdCIsIm1zQWJzIiwicm91bmQiLCJwbHVyYWwiLCJpc1BsdXJhbCIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiZGVmYXVsdENsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJlIiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJydW4iLCJuZXh0VGljayIsIkl0ZW0iLCJhcnJheSIsInByb3RvdHlwZSIsInRpdGxlIiwiYnJvd3NlciIsImFyZ3YiLCJ2ZXJzaW9uIiwidmVyc2lvbnMiLCJub29wIiwib24iLCJhZGRMaXN0ZW5lciIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsImVtaXQiLCJwcmVwZW5kTGlzdGVuZXIiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwibGlzdGVuZXJzIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siLCJjc3MiLCJsb2NhdGlvbiIsImJhc2VVcmwiLCJwcm90b2NvbCIsImhvc3QiLCJjdXJyZW50RGlyIiwicGF0aG5hbWUiLCJmaXhlZENzcyIsImZ1bGxNYXRjaCIsIm9yaWdVcmwiLCJ1bnF1b3RlZE9yaWdVcmwiLCJvIiwibmV3VXJsIiwiaW5kZXhPZiIsIkUiLCJjYWxsYmFjayIsImN0eCIsImZuIiwibGlzdGVuZXIiLCJfIiwiZXZ0QXJyIiwiZXZ0cyIsImxpdmVFdmVudHMiLCJUaW55RW1pdHRlciIsImdsb2JhbCIsImNoZWNrSWZJdGVyYXRvcklzU3VwcG9ydGVkIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJpdGVyYXRvclN1cHBvcnRlZCIsImNyZWF0ZUl0ZXJhdG9yIiwiaXRlbXMiLCJuZXh0IiwidmFsdWUiLCJkb25lIiwic2VyaWFsaXplUGFyYW0iLCJkZXNlcmlhbGl6ZVBhcmFtIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicG9seWZpbGxVUkxTZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2hTdHJpbmciLCJ3cml0YWJsZSIsInR5cGVvZlNlYXJjaFN0cmluZyIsIl9mcm9tU3RyaW5nIiwiYXBwZW5kIiwiZW50cnkiLCJUeXBlRXJyb3IiLCJoYXNPd25Qcm9wZXJ0eSIsInByb3RvIiwiX2VudHJpZXMiLCJkZWxldGUiLCJnZXRBbGwiLCJoYXMiLCJ0aGlzQXJnIiwiZW50cmllcyIsInZhbHVlcyIsInNlYXJjaEFycmF5IiwiY2hlY2tJZlVSTFNlYXJjaFBhcmFtc1N1cHBvcnRlZCIsInNvcnQiLCJhIiwiYiIsImF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGUiLCJjaGVja0lmVVJMSXNTdXBwb3J0ZWQiLCJ1IiwiVVJMIiwiaHJlZiIsInNlYXJjaFBhcmFtcyIsInBvbHlmaWxsVVJMIiwiX1VSTCIsInVybCIsImJhc2UiLCJkb2MiLCJiYXNlRWxlbWVudCIsImltcGxlbWVudGF0aW9uIiwiY3JlYXRlSFRNTERvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImVyciIsImFuY2hvckVsZW1lbnQiLCJib2R5IiwiaW5wdXRFbGVtZW50IiwiY2hlY2tWYWxpZGl0eSIsInNlYXJjaCIsImVuYWJsZVNlYXJjaFVwZGF0ZSIsImVuYWJsZVNlYXJjaFBhcmFtc1VwZGF0ZSIsIm1ldGhvZE5hbWUiLCJtZXRob2QiLCJsaW5rVVJMV2l0aEFuY2hvckF0dHJpYnV0ZSIsImF0dHJpYnV0ZU5hbWUiLCJfYW5jaG9yRWxlbWVudCIsIl91cGRhdGVTZWFyY2hQYXJhbXMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZXhwZWN0ZWRQb3J0IiwiYWRkUG9ydFRvT3JpZ2luIiwicG9ydCIsImhvc3RuYW1lIiwiY3JlYXRlT2JqZWN0VVJMIiwiYmxvYiIsInJldm9rZU9iamVjdFVSTCIsImdldE9yaWdpbiIsInNldEludGVydmFsIiwib3JpZ2luIiwibmF0aXZlVVJMU2VhcmNoUGFyYW1zIiwiaXNTdXBwb3J0T2JqZWN0Q29uc3RydWN0b3IiLCJkZWNvZGVzUGx1c2VzQ29ycmVjdGx5IiwiX19VUkxTZWFyY2hQYXJhbXNfXyIsImVuY29kZXNBbXBlcnNhbmRzQ29ycmVjdGx5IiwiYW1wZXJzYW5kVGVzdCIsIlVSTFNlYXJjaFBhcmFtc1BvbHlmaWxsIiwiaXRlcmFibGUiLCJwYXJzZVRvRGljdCIsImFwcGVuZFRvIiwiZGljdCIsInF1ZXJ5IiwiZW5jb2RlIiwiZm9yU3VyZVVzZVBvbHlmaWxsIiwidXNlUHJveHkiLCJQcm94eSIsImNvbnN0cnVjdCIsInRhcmdldCIsIlVTUFByb3RvIiwicG9seWZpbGwiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiayIsIm1ha2VJdGVyYXRvciIsImRlY29kZSIsImFyciIsInBhaXJzIiwiZyIsIkZ1bmN0aW9uIiwiYWxsb3dDYW5jZWwiLCJza2lwRG9tYWluVmVyaWZpY2F0aW9uIiwidGVzdE1vZGUiLCJhbGxvd1ZpZXdwb3J0T3ZlcnJpZGUiLCJfdGlueUVtaXR0ZXIiLCJfY29tbW9uVGFncyIsIl9kZWJ1ZyIsIl9kZWZhdWx0cyIsIl9zZXR0aW5ncyIsIl90ZW1wbGF0ZU9iamVjdDIiLCJfdGVtcGxhdGVPYmplY3QzIiwiX3RlbXBsYXRlT2JqZWN0NCIsIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCJyYXciLCJmcmVlemUiLCJvd25LZXlzIiwidCIsImdldE93blByb3BlcnR5U3ltYm9scyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiY29uc3RydWN0b3IiLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJfdG9Qcm9wZXJ0eUtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwiQm9vbGVhbiIsInZhbHVlT2YiLCJfZ2V0IiwicHJvcGVydHkiLCJyZWNlaXZlciIsIl9zdXBlclByb3BCYXNlIiwiZGVzYyIsIm9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiZ2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJfaW5oZXJpdHMiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjcmVhdGUiLCJfc2V0UHJvdG90eXBlT2YiLCJwIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJIZWxsb1NpZ24iLCJfRW1pdHRlciIsIl9vbkVtYmVkZGVkQ2xpY2siLCJfb25Jbml0VGltZW91dCIsIl9vbkJlZm9yZVVubG9hZCIsIl9vbk1lc3NhZ2UiLCJpbmZvIiwiX2Jhc2VDb25maWciLCJfYXBwbHlDbGllbnRJZCIsInBhcmFtcyIsIl9jb25maWciLCJjbGllbnRJZCIsIl9hcHBseURlYnVnIiwiX2FwcGx5RmluYWxCdXR0b25UZXh0IiwiZmluYWxCdXR0b25UZXh0IiwiX2FwcGx5SGlkZUhlYWRlciIsImhpZGVIZWFkZXIiLCJfYXBwbHlMb2NhbGUiLCJsb2NhbGUiLCJfYXBwbHlQYXJlbnRVUkwiLCJfYXBwbHlSZWRpcmVjdFRvIiwicmVkaXJlY3RUbyIsIl9hcHBseVJlcXVlc3RpbmdFbWFpbCIsInJlcXVlc3RpbmdFbWFpbCIsIl9hcHBseVRlc3RNb2RlIiwiX2FwcGx5V2hpdGVMYWJlbGluZyIsIndoaXRlTGFiZWxpbmciLCJfYXBwbHlVeFZlcnNpb24iLCJfYXBwbHlWZXJzaW9uIiwiX19QS0dfVkVSU0lPTl9fIiwiX2dldEZyYW1lUGFyYW1zIiwiZnJhbWVVUkwiLCJfdXBkYXRlRnJhbWVVcmwiLCJmcmFtZVBhcmFtcyIsIl9pRnJhbWVVUkwiLCJfcmVuZGVyTWFya3VwIiwiZWxlbSIsImNvbnRhaW5lciIsImlubmVySFRNTCIsInNldHRpbmdzIiwiY2xhc3NOYW1lcyIsIkJBU0UiLCJJRlJBTUUiLCJpZnJhbWUiLCJOQU1FIiwiQkFTRV9JTl9NT0RBTCIsIk1PREFMX1NDUkVFTiIsIk1PREFMX0NPTlRFTlQiLCJNT0RBTF9DTE9TRSIsIk1PREFMX0NMT1NFX0JUTiIsImZpcnN0Q2hpbGQiLCJfYXBwZW5kTWFya3VwIiwiX2Jhc2VFbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaUZyYW1lRWwiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiX2NsZWFyTWFya3VwIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwiX3NlbmRNZXNzYWdlIiwibXNnIiwidGFyZ2V0T3JpZ2luIiwidGFyZ2V0V2luZG93IiwiY29udGVudFdpbmRvdyIsInBvc3RNZXNzYWdlIiwiX3NlbmRDYW5jZWxSZXF1ZXN0TWVzc2FnZSIsIm1lc3NhZ2VzIiwiVVNFUl9DQU5DRUxfUkVRVUVTVCIsIl9zZW5kQ29uZmlndXJhdGlvbk1lc3NhZ2UiLCJBUFBfQ09ORklHVVJFIiwicGF5bG9hZCIsIl9zZW5kRG9tYWluVmVyaWZpY2F0aW9uTWVzc2FnZSIsInRva2VuIiwiQVBQX1ZFUklGWV9ET01BSU5fUkVTUE9OU0UiLCJfc2VuZEluaXRpYWxpemF0aW9uRXJyb3JNZXNzYWdlIiwiQVBQX0VSUk9SIiwiX2NsZWFySW5pdFRpbWVvdXQiLCJfaW5pdFRpbWVvdXQiLCJfc3RhcnRJbml0VGltZW91dCIsIl9tYXliZVN0YXJ0SW5pdFRpbWVvdXQiLCJfYmxvY2tOYXRpdmVab29tIiwidmlld3BvcnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwibmV3Q29udGVudFBhaXJzIiwibmV3Q29udGVudCIsInNldEF0dHJpYnV0ZSIsIl9iYWNrdXBWaWV3cG9ydENvbnRlbnQiLCJfcmVzdG9yZVZpZXdwb3J0IiwiX2FwcERpZEVycm9yIiwiY29kZSIsImV2ZW50cyIsIkVSUk9SIiwiX2FwcERpZEluaXRpYWxpemUiLCJfaXNSZWFkeSIsIlJFQURZIiwiX2FwcERpZFJlcXVlc3REb21haW5WZXJpZmljYXRpb24iLCJfcmVmIiwiX2FwcERpZFNlbmRNZXNzYWdlIiwiX3JlZjIiLCJNRVNTQUdFIiwiX2RlbGVnYXRlTWVzc2FnZSIsIl91c2VyRGlkQ2FuY2VsUmVxdWVzdCIsIkNBTkNFTCIsImNsb3NlIiwiX3VzZXJEaWRDcmVhdGVUZW1wbGF0ZSIsIkNSRUFURV9URU1QTEFURSIsIl91c2VyRGlkRGVjbGluZVJlcXVlc3QiLCJERUNMSU5FIiwiX3VzZXJEaWRGaW5pc2hSZXF1ZXN0IiwiRklOSVNIIiwiX3VzZXJEaWRSZWFzc2lnblJlcXVlc3QiLCJyZWFzb24iLCJSRUFTU0lHTiIsIl91c2VyRGlkU2VuZFJlcXVlc3QiLCJfaXNTZW50T3JTaWduZWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiU0VORCIsIl91c2VyRGlkU2lnblJlcXVlc3QiLCJTSUdOIiwiZXZ0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwiY29uZmlybSIsInJldHVyblZhbHVlIiwic3RyaXBwZWRPcmlnaW4iLCJfcmVmMyIsIkFQUF9JTklUSUFMSVpFIiwiQVBQX1ZFUklGWV9ET01BSU5fUkVRVUVTVCIsIlVTRVJfQ1JFQVRFX1RFTVBMQVRFIiwiVVNFUl9ERUNMSU5FX1JFUVVFU1QiLCJVU0VSX0ZJTklTSF9SRVFVRVNUIiwiVVNFUl9SRUFTU0lHTl9SRVFVRVNUIiwiVVNFUl9TRU5EX1JFUVVFU1QiLCJVU0VSX1NJR05fUkVRVUVTVCIsIm9wZW4iLCJfaXNPcGVuIiwiSFRNTEVsZW1lbnQiLCJPUEVOIiwiQ0xPU0UiLCJfZ2V0MiIsIkVtaXR0ZXIiLCJsb2NhbGVzIiwiQ1NfQ1oiLCJEQV9ESyIsIkRFX0RFIiwiRU5fR0IiLCJFTl9VUyIsIkVTX0xBIiwiRVNfRVMiLCJGUl9GUiIsIklEX0lEIiwiSVRfSVQiLCJKQV9KUCIsIktPX0tSIiwiTVNfTVkiLCJOQl9OTyIsIk5MX05MIiwiUExfUEwiLCJQVF9CUiIsIlJVX1JVIiwiU1ZfU0UiLCJUSF9USCIsIlVLX1VBIiwiWkhfQ04iLCJaSF9UVyIsIl9fUEtHX05BTUVfXyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsQ0FDVDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVNQLFNBQVNBLENBQUEsRUFBRztFQUNwQjtFQUNBO0VBQ0E7RUFDQSxJQUFJLE9BQU9RLE1BQU0sS0FBSyxXQUFXLElBQUlBLE1BQU0sQ0FBQ0MsT0FBTyxLQUFLRCxNQUFNLENBQUNDLE9BQU8sQ0FBQ2xELElBQUksS0FBSyxVQUFV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QTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBMUwsTUFBTSxDQUFDekQsT0FBTyxHQUFHLFVBQVVvUCxHQUFHLEVBQUU7RUFDOUI7RUFDQSxJQUFJQyxRQUFRLEdBQUcsT0FBT3RKLE1BQU0sS0FBSyxXQUFXLElBQUlBLE1BQU0sQ0FBQ3NKLFFBQVE7RUFFL0QsSUFBSSxDQUFDQSxRQUFRLEVBQUU7SUFDYixNQUFNLElBQUlsTixLQUFLLENBQUMsa0NBQWtDLENBQUM7RUFDckQ7O0VBRUQ7RUFDQSxJQUFJLENBQUNpTixHQUFHLElBQUksT0FBT0EsR0FBRyxLQUFLLFFBQVEsRUFBRTtJQUNuQyxPQUFPQSxHQUFHO0VBQ1g7RUFFQSxJQUFJRSxPQUFPLEdBQUdELFFBQVEsQ0FBQ0UsUUFBUSxHQUFHLElBQUksR0FBR0YsUUFBUSxDQUFDRyxJQUFJO0VBQ3RELElBQUlDLFVBQVUsR0FBR0gsT0FBTyxHQUFHRCxRQUFRLENBQUNLLFFBQVEsQ0FBQ3ROLE9BQU8sQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDOztFQUV2RTtFQUNBO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFHQyxJQUFJdU4sUUFBUSxHQUFHUCxHQUFHLENBQUNoTixPQUFPLENBQUMscURBQXFELEVBQUUsVUFBU3dOLFNBQVMsRUFBRUMsT0FBTyxFQUFFO0lBQzlHO0lBQ0EsSUFBSUMsZUFBZSxHQUFHRCxPQUFPLENBQzNCdE0sSUFBSSxDQUFDLENBQUMsQ0FDTm5CLE9BQU8sQ0FBQyxVQUFVLEVBQUUsVUFBUzJOLENBQUMsRUFBRW5KLEVBQUUsRUFBQztNQUFFLE9BQU9BLEVBQUU7SUFBRSxDQUFDLENBQUMsQ0FDbER4RSxPQUFPLENBQUMsVUFBVSxFQUFFLFVBQVMyTixDQUFDLEVBQUVuSixFQUFFLEVBQUM7TUFBRSxPQUFPQSxFQUFFO0lBQUUsQ0FBQyxDQUFDOztJQUVwRDtJQUNBLElBQUksbURBQW1ELENBQUNvRSxJQUFJLENBQUM4RSxlQUFlLENBQUMsRUFBRTtNQUM3RSxPQUFPRixTQUFTO0lBQ2xCOztJQUVBO0lBQ0EsSUFBSUksTUFBTTtJQUVWLElBQUlGLGVBQWUsQ0FBQ0csT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtNQUN0QztNQUNGRCxNQUFNLEdBQUdGLGVBQWU7SUFDekIsQ0FBQyxNQUFNLElBQUlBLGVBQWUsQ0FBQ0csT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtNQUM5QztNQUNBRCxNQUFNLEdBQUdWLE9BQU8sR0FBR1EsZUFBZSxDQUFDLENBQUM7SUFDckMsQ0FBQyxNQUFNO01BQ047TUFDQUUsTUFBTSxHQUFHUCxVQUFVLEdBQUdLLGVBQWUsQ0FBQzFOLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3RDs7SUFFQTtJQUNBLE9BQU8sTUFBTSxHQUFHNkMsSUFBSSxDQUFDQyxTQUFTLENBQUM4SyxNQUFNLENBQUMsR0FBRyxHQUFHO0VBQzdDLENBQUMsQ0FBQzs7RUFFRjtFQUNBLE9BQU9MLFFBQVE7QUFDaEIsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7QUN4RkQsU0FBU08sQ0FBQ0EsQ0FBQSxFQUFJO0VBQ1o7RUFDQTtBQUFBO0FBR0ZBLENBQUMsQ0FBQ3BDLFNBQVMsR0FBRztFQUNaTyxFQUFFLEVBQUUsU0FBQUEsR0FBVXRELElBQUksRUFBRW9GLFFBQVEsRUFBRUMsR0FBRyxFQUFFO0lBQ2pDLElBQUl2RCxDQUFDLEdBQUcsSUFBSSxDQUFDQSxDQUFDLEtBQUssSUFBSSxDQUFDQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFL0IsQ0FBQ0EsQ0FBQyxDQUFDOUIsSUFBSSxDQUFDLEtBQUs4QixDQUFDLENBQUM5QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRTNHLElBQUksQ0FBQztNQUMvQmlNLEVBQUUsRUFBRUYsUUFBUTtNQUNaQyxHQUFHLEVBQUVBO0lBQ1AsQ0FBQyxDQUFDO0lBRUYsT0FBTyxJQUFJO0VBQ2IsQ0FBQztFQUVEN0IsSUFBSSxFQUFFLFNBQUFBLEtBQVV4RCxJQUFJLEVBQUVvRixRQUFRLEVBQUVDLEdBQUcsRUFBRTtJQUNuQyxJQUFJM0csSUFBSSxHQUFHLElBQUk7SUFDZixTQUFTNkcsUUFBUUEsQ0FBQSxFQUFJO01BQ25CN0csSUFBSSxDQUFDK0UsR0FBRyxDQUFDekQsSUFBSSxFQUFFdUYsUUFBUSxDQUFDO01BQ3hCSCxRQUFRLENBQUNsUyxLQUFLLENBQUNtUyxHQUFHLEVBQUU3VCxTQUFTLENBQUM7SUFDaEM7SUFBQztJQUVEK1QsUUFBUSxDQUFDQyxDQUFDLEdBQUdKLFFBQVE7SUFDckIsT0FBTyxJQUFJLENBQUM5QixFQUFFLENBQUN0RCxJQUFJLEVBQUV1RixRQUFRLEVBQUVGLEdBQUcsQ0FBQztFQUNyQyxDQUFDO0VBRUR6QixJQUFJLEVBQUUsU0FBQUEsS0FBVTVELElBQUksRUFBRTtJQUNwQixJQUFJNUYsSUFBSSxHQUFHLEVBQUUsQ0FBQ2pFLEtBQUssQ0FBQ2dKLElBQUksQ0FBQzNOLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDdEMsSUFBSWlVLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDM0QsQ0FBQyxLQUFLLElBQUksQ0FBQ0EsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU5QixJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUU3SixLQUFLLENBQUMsQ0FBQztJQUM1RCxJQUFJNkMsQ0FBQyxHQUFHLENBQUM7SUFDVCxJQUFJOEcsR0FBRyxHQUFHMkYsTUFBTSxDQUFDaFUsTUFBTTtJQUV2QixLQUFLdUgsQ0FBQyxFQUFFQSxDQUFDLEdBQUc4RyxHQUFHLEVBQUU5RyxDQUFDLEVBQUUsRUFBRTtNQUNwQnlNLE1BQU0sQ0FBQ3pNLENBQUMsQ0FBQyxDQUFDc00sRUFBRSxDQUFDcFMsS0FBSyxDQUFDdVMsTUFBTSxDQUFDek0sQ0FBQyxDQUFDLENBQUNxTSxHQUFHLEVBQUVqTCxJQUFJLENBQUM7SUFDekM7SUFFQSxPQUFPLElBQUk7RUFDYixDQUFDO0VBRURxSixHQUFHLEVBQUUsU0FBQUEsSUFBVXpELElBQUksRUFBRW9GLFFBQVEsRUFBRTtJQUM3QixJQUFJdEQsQ0FBQyxHQUFHLElBQUksQ0FBQ0EsQ0FBQyxLQUFLLElBQUksQ0FBQ0EsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9CLElBQUk0RCxJQUFJLEdBQUc1RCxDQUFDLENBQUM5QixJQUFJLENBQUM7SUFDbEIsSUFBSTJGLFVBQVUsR0FBRyxFQUFFO0lBRW5CLElBQUlELElBQUksSUFBSU4sUUFBUSxFQUFFO01BQ3BCLEtBQUssSUFBSXBNLENBQUMsR0FBRyxDQUFDLEVBQUU4RyxHQUFHLEdBQUc0RixJQUFJLENBQUNqVSxNQUFNLEVBQUV1SCxDQUFDLEdBQUc4RyxHQUFHLEVBQUU5RyxDQUFDLEVBQUUsRUFBRTtRQUMvQyxJQUFJME0sSUFBSSxDQUFDMU0sQ0FBQyxDQUFDLENBQUNzTSxFQUFFLEtBQUtGLFFBQVEsSUFBSU0sSUFBSSxDQUFDMU0sQ0FBQyxDQUFDLENBQUNzTSxFQUFFLENBQUNFLENBQUMsS0FBS0osUUFBUSxFQUN0RE8sVUFBVSxDQUFDdE0sSUFBSSxDQUFDcU0sSUFBSSxDQUFDMU0sQ0FBQyxDQUFDLENBQUM7TUFDNUI7SUFDRjs7SUFFQTtJQUNBO0lBQ0E7O0lBRUMyTSxVQUFVLENBQUNsVSxNQUFNLEdBQ2RxUSxDQUFDLENBQUM5QixJQUFJLENBQUMsR0FBRzJGLFVBQVUsR0FDcEIsT0FBTzdELENBQUMsQ0FBQzlCLElBQUksQ0FBQztJQUVsQixPQUFPLElBQUk7RUFDYjtBQUNGLENBQUM7QUFFRHRILE1BQU0sQ0FBQ3pELE9BQU8sR0FBR2tRLENBQUM7QUFDbEJ6TSxNQUFNLENBQUN6RCxPQUFPLENBQUMyUSxXQUFXLEdBQUdULENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRTlCLENBQUMsVUFBU1UsTUFBTSxFQUFFO0VBQ2hCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0VBRUUsSUFBSUMsMEJBQTBCLEdBQUcsU0FBN0JBLDBCQUEwQkEsQ0FBQSxFQUFjO0lBQzFDLElBQUk7TUFDRixPQUFPLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRO0lBQzFCLENBQUMsQ0FBQyxPQUFPcEosS0FBSyxFQUFFO01BQ2QsT0FBTyxLQUFLO0lBQ2Q7RUFDRixDQUFDO0VBR0QsSUFBSXFKLGlCQUFpQixHQUFHSCwwQkFBMEIsQ0FBQyxDQUFDO0VBRXBELElBQUlJLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBWUMsS0FBSyxFQUFFO0lBQ25DLElBQUlILFFBQVEsR0FBRztNQUNiSSxJQUFJLEVBQUUsU0FBQUEsS0FBQSxFQUFXO1FBQ2YsSUFBSUMsS0FBSyxHQUFHRixLQUFLLENBQUMxUyxLQUFLLENBQUMsQ0FBQztRQUN6QixPQUFPO1VBQUU2UyxJQUFJLEVBQUVELEtBQUssS0FBSyxLQUFLLENBQUM7VUFBRUEsS0FBSyxFQUFFQTtRQUFNLENBQUM7TUFDakQ7SUFDRixDQUFDO0lBRUQsSUFBSUosaUJBQWlCLEVBQUU7TUFDckJELFFBQVEsQ0FBQ0QsTUFBTSxDQUFDQyxRQUFRLENBQUMsR0FBRyxZQUFXO1FBQ3JDLE9BQU9BLFFBQVE7TUFDakIsQ0FBQztJQUNIO0lBRUEsT0FBT0EsUUFBUTtFQUNqQixDQUFDOztFQUVEO0FBQ0Y7QUFDQTtBQUNBO0VBQ0UsSUFBSU8sY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFZRixLQUFLLEVBQUU7SUFDbkMsT0FBT3BNLGtCQUFrQixDQUFDb00sS0FBSyxDQUFDLENBQUNoUCxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztFQUN2RCxDQUFDO0VBRUQsSUFBSW1QLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQVlILEtBQUssRUFBRTtJQUNyQyxPQUFPSSxrQkFBa0IsQ0FBQ3hGLE1BQU0sQ0FBQ29GLEtBQUssQ0FBQyxDQUFDaFAsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztFQUM5RCxDQUFDO0VBRUQsSUFBSXFQLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBdUJBLENBQUEsRUFBYztJQUV2QyxJQUFJQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQVlDLFlBQVksRUFBRTtNQUMzQ2hKLE1BQU0sQ0FBQzBCLGNBQWMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFO1FBQUV1SCxRQUFRLEVBQUUsSUFBSTtRQUFFUixLQUFLLEVBQUUsQ0FBQztNQUFFLENBQUMsQ0FBQztNQUN0RSxJQUFJUyxrQkFBa0IsR0FBQW5HLE9BQUEsQ0FBVWlHLFlBQVk7TUFFNUMsSUFBSUUsa0JBQWtCLEtBQUssV0FBVyxFQUFFO1FBQ3RDO01BQUEsQ0FDRCxNQUFNLElBQUlBLGtCQUFrQixLQUFLLFFBQVEsRUFBRTtRQUMxQyxJQUFJRixZQUFZLEtBQUssRUFBRSxFQUFFO1VBQ3ZCLElBQUksQ0FBQ0csV0FBVyxDQUFDSCxZQUFZLENBQUM7UUFDaEM7TUFDRixDQUFDLE1BQU0sSUFBSUEsWUFBWSxZQUFZRCxlQUFlLEVBQUU7UUFDbEQsSUFBSXJWLEtBQUssR0FBRyxJQUFJO1FBQ2hCc1YsWUFBWSxDQUFDOUksT0FBTyxDQUFDLFVBQVN1SSxLQUFLLEVBQUVyRyxJQUFJLEVBQUU7VUFDekMxTyxLQUFLLENBQUMwVixNQUFNLENBQUNoSCxJQUFJLEVBQUVxRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUFDO01BQ0osQ0FBQyxNQUFNLElBQUtPLFlBQVksS0FBSyxJQUFJLElBQU1FLGtCQUFrQixLQUFLLFFBQVMsRUFBRTtRQUN2RSxJQUFJbEosTUFBTSxDQUFDbUYsU0FBUyxDQUFDdkwsUUFBUSxDQUFDMkgsSUFBSSxDQUFDeUgsWUFBWSxDQUFDLEtBQUssZ0JBQWdCLEVBQUU7VUFDckUsS0FBSyxJQUFJNU4sQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHNE4sWUFBWSxDQUFDblYsTUFBTSxFQUFFdUgsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBSWlPLEtBQUssR0FBR0wsWUFBWSxDQUFDNU4sQ0FBQyxDQUFDO1lBQzNCLElBQUs0RSxNQUFNLENBQUNtRixTQUFTLENBQUN2TCxRQUFRLENBQUMySCxJQUFJLENBQUM4SCxLQUFLLENBQUMsS0FBSyxnQkFBZ0IsSUFBTUEsS0FBSyxDQUFDeFYsTUFBTSxLQUFLLENBQUUsRUFBRTtjQUN4RixJQUFJLENBQUN1VixNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLENBQUMsTUFBTTtjQUNMLE1BQU0sSUFBSUMsU0FBUyxDQUFDLDJDQUEyQyxHQUFHbE8sQ0FBQyxHQUFHLDhCQUE4QixDQUFDO1lBQ3ZHO1VBQ0Y7UUFDRixDQUFDLE1BQU07VUFDTCxLQUFLLElBQUkrRSxHQUFHLElBQUk2SSxZQUFZLEVBQUU7WUFDNUIsSUFBSUEsWUFBWSxDQUFDTyxjQUFjLENBQUNwSixHQUFHLENBQUMsRUFBRTtjQUNwQyxJQUFJLENBQUNpSixNQUFNLENBQUNqSixHQUFHLEVBQUU2SSxZQUFZLENBQUM3SSxHQUFHLENBQUMsQ0FBQztZQUNyQztVQUNGO1FBQ0Y7TUFDRixDQUFDLE1BQU07UUFDTCxNQUFNLElBQUltSixTQUFTLENBQUMsK0NBQStDLENBQUM7TUFDdEU7SUFDRixDQUFDO0lBRUQsSUFBSUUsS0FBSyxHQUFHVCxlQUFlLENBQUM1RCxTQUFTO0lBRXJDcUUsS0FBSyxDQUFDSixNQUFNLEdBQUcsVUFBU2hILElBQUksRUFBRXFHLEtBQUssRUFBRTtNQUNuQyxJQUFJckcsSUFBSSxJQUFJLElBQUksQ0FBQ3FILFFBQVEsRUFBRTtRQUN6QixJQUFJLENBQUNBLFFBQVEsQ0FBQ3JILElBQUksQ0FBQyxDQUFDM0csSUFBSSxDQUFDNEgsTUFBTSxDQUFDb0YsS0FBSyxDQUFDLENBQUM7TUFDekMsQ0FBQyxNQUFNO1FBQ0wsSUFBSSxDQUFDZ0IsUUFBUSxDQUFDckgsSUFBSSxDQUFDLEdBQUcsQ0FBQ2lCLE1BQU0sQ0FBQ29GLEtBQUssQ0FBQyxDQUFDO01BQ3ZDO0lBQ0YsQ0FBQztJQUVEZSxLQUFLLENBQUNFLE1BQU0sR0FBRyxVQUFTdEgsSUFBSSxFQUFFO01BQzVCLE9BQU8sSUFBSSxDQUFDcUgsUUFBUSxDQUFDckgsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRG9ILEtBQUssQ0FBQzNILEdBQUcsR0FBRyxVQUFTTyxJQUFJLEVBQUU7TUFDekIsT0FBUUEsSUFBSSxJQUFJLElBQUksQ0FBQ3FILFFBQVEsR0FBSSxJQUFJLENBQUNBLFFBQVEsQ0FBQ3JILElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUk7SUFDaEUsQ0FBQztJQUVEb0gsS0FBSyxDQUFDRyxNQUFNLEdBQUcsVUFBU3ZILElBQUksRUFBRTtNQUM1QixPQUFRQSxJQUFJLElBQUksSUFBSSxDQUFDcUgsUUFBUSxHQUFJLElBQUksQ0FBQ0EsUUFBUSxDQUFDckgsSUFBSSxDQUFDLENBQUM3SixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRTtJQUNwRSxDQUFDO0lBRURpUixLQUFLLENBQUNJLEdBQUcsR0FBRyxVQUFTeEgsSUFBSSxFQUFFO01BQ3pCLE9BQVFBLElBQUksSUFBSSxJQUFJLENBQUNxSCxRQUFRO0lBQy9CLENBQUM7SUFFREQsS0FBSyxDQUFDMUgsR0FBRyxHQUFHLFVBQVNNLElBQUksRUFBRXFHLEtBQUssRUFBRTtNQUNoQyxJQUFJLENBQUNnQixRQUFRLENBQUNySCxJQUFJLENBQUMsR0FBRyxDQUFDaUIsTUFBTSxDQUFDb0YsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVEZSxLQUFLLENBQUN0SixPQUFPLEdBQUcsVUFBU3NILFFBQVEsRUFBRXFDLE9BQU8sRUFBRTtNQUMxQyxJQUFJQyxPQUFPO01BQ1gsS0FBSyxJQUFJMUgsSUFBSSxJQUFJLElBQUksQ0FBQ3FILFFBQVEsRUFBRTtRQUM5QixJQUFJLElBQUksQ0FBQ0EsUUFBUSxDQUFDRixjQUFjLENBQUNuSCxJQUFJLENBQUMsRUFBRTtVQUN0QzBILE9BQU8sR0FBRyxJQUFJLENBQUNMLFFBQVEsQ0FBQ3JILElBQUksQ0FBQztVQUM3QixLQUFLLElBQUloSCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcwTyxPQUFPLENBQUNqVyxNQUFNLEVBQUV1SCxDQUFDLEVBQUUsRUFBRTtZQUN2Q29NLFFBQVEsQ0FBQ2pHLElBQUksQ0FBQ3NJLE9BQU8sRUFBRUMsT0FBTyxDQUFDMU8sQ0FBQyxDQUFDLEVBQUVnSCxJQUFJLEVBQUUsSUFBSSxDQUFDO1VBQ2hEO1FBQ0Y7TUFDRjtJQUNGLENBQUM7SUFFRG9ILEtBQUssQ0FBQ3ZKLElBQUksR0FBRyxZQUFXO01BQ3RCLElBQUlzSSxLQUFLLEdBQUcsRUFBRTtNQUNkLElBQUksQ0FBQ3JJLE9BQU8sQ0FBQyxVQUFTdUksS0FBSyxFQUFFckcsSUFBSSxFQUFFO1FBQ2pDbUcsS0FBSyxDQUFDOU0sSUFBSSxDQUFDMkcsSUFBSSxDQUFDO01BQ2xCLENBQUMsQ0FBQztNQUNGLE9BQU9rRyxjQUFjLENBQUNDLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRURpQixLQUFLLENBQUNPLE1BQU0sR0FBRyxZQUFXO01BQ3hCLElBQUl4QixLQUFLLEdBQUcsRUFBRTtNQUNkLElBQUksQ0FBQ3JJLE9BQU8sQ0FBQyxVQUFTdUksS0FBSyxFQUFFO1FBQzNCRixLQUFLLENBQUM5TSxJQUFJLENBQUNnTixLQUFLLENBQUM7TUFDbkIsQ0FBQyxDQUFDO01BQ0YsT0FBT0gsY0FBYyxDQUFDQyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUVEaUIsS0FBSyxDQUFDTSxPQUFPLEdBQUcsWUFBVztNQUN6QixJQUFJdkIsS0FBSyxHQUFHLEVBQUU7TUFDZCxJQUFJLENBQUNySSxPQUFPLENBQUMsVUFBU3VJLEtBQUssRUFBRXJHLElBQUksRUFBRTtRQUNqQ21HLEtBQUssQ0FBQzlNLElBQUksQ0FBQyxDQUFDMkcsSUFBSSxFQUFFcUcsS0FBSyxDQUFDLENBQUM7TUFDM0IsQ0FBQyxDQUFDO01BQ0YsT0FBT0gsY0FBYyxDQUFDQyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUlGLGlCQUFpQixFQUFFO01BQ3JCbUIsS0FBSyxDQUFDckIsTUFBTSxDQUFDQyxRQUFRLENBQUMsR0FBR29CLEtBQUssQ0FBQ00sT0FBTztJQUN4QztJQUVBTixLQUFLLENBQUM1UCxRQUFRLEdBQUcsWUFBVztNQUMxQixJQUFJb1EsV0FBVyxHQUFHLEVBQUU7TUFDcEIsSUFBSSxDQUFDOUosT0FBTyxDQUFDLFVBQVN1SSxLQUFLLEVBQUVyRyxJQUFJLEVBQUU7UUFDakM0SCxXQUFXLENBQUN2TyxJQUFJLENBQUNrTixjQUFjLENBQUN2RyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUd1RyxjQUFjLENBQUNGLEtBQUssQ0FBQyxDQUFDO01BQ3RFLENBQUMsQ0FBQztNQUNGLE9BQU91QixXQUFXLENBQUM1UixJQUFJLENBQUMsR0FBRyxDQUFDO0lBQzlCLENBQUM7SUFHRDZQLE1BQU0sQ0FBQ2MsZUFBZSxHQUFHQSxlQUFlO0VBQzFDLENBQUM7RUFFRCxJQUFJa0IsK0JBQStCLEdBQUcsU0FBbENBLCtCQUErQkEsQ0FBQSxFQUFjO0lBQy9DLElBQUk7TUFDRixJQUFJbEIsZUFBZSxHQUFHZCxNQUFNLENBQUNjLGVBQWU7TUFFNUMsT0FDRyxJQUFJQSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUNuUCxRQUFRLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFDaEQsT0FBT21QLGVBQWUsQ0FBQzVELFNBQVMsQ0FBQ3JELEdBQUcsS0FBSyxVQUFXLElBQ3BELE9BQU9pSCxlQUFlLENBQUM1RCxTQUFTLENBQUMyRSxPQUFPLEtBQUssVUFBVztJQUU3RCxDQUFDLENBQUMsT0FBTzVGLENBQUMsRUFBRTtNQUNWLE9BQU8sS0FBSztJQUNkO0VBQ0YsQ0FBQztFQUVELElBQUksQ0FBQytGLCtCQUErQixDQUFDLENBQUMsRUFBRTtJQUN0Q25CLHVCQUF1QixDQUFDLENBQUM7RUFDM0I7RUFFQSxJQUFJVSxLQUFLLEdBQUd2QixNQUFNLENBQUNjLGVBQWUsQ0FBQzVELFNBQVM7RUFFNUMsSUFBSSxPQUFPcUUsS0FBSyxDQUFDVSxJQUFJLEtBQUssVUFBVSxFQUFFO0lBQ3BDVixLQUFLLENBQUNVLElBQUksR0FBRyxZQUFXO01BQ3RCLElBQUl4VyxLQUFLLEdBQUcsSUFBSTtNQUNoQixJQUFJNlUsS0FBSyxHQUFHLEVBQUU7TUFDZCxJQUFJLENBQUNySSxPQUFPLENBQUMsVUFBU3VJLEtBQUssRUFBRXJHLElBQUksRUFBRTtRQUNqQ21HLEtBQUssQ0FBQzlNLElBQUksQ0FBQyxDQUFDMkcsSUFBSSxFQUFFcUcsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDL1UsS0FBSyxDQUFDK1YsUUFBUSxFQUFFO1VBQ25CL1YsS0FBSyxDQUFDZ1csTUFBTSxDQUFDdEgsSUFBSSxDQUFDO1FBQ3BCO01BQ0YsQ0FBQyxDQUFDO01BQ0ZtRyxLQUFLLENBQUMyQixJQUFJLENBQUMsVUFBU0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7UUFDeEIsSUFBSUQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7VUFDZixPQUFPLENBQUMsQ0FBQztRQUNYLENBQUMsTUFBTSxJQUFJRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtVQUN0QixPQUFPLENBQUMsQ0FBQztRQUNYLENBQUMsTUFBTTtVQUNMLE9BQU8sQ0FBQztRQUNWO01BQ0YsQ0FBQyxDQUFDO01BQ0YsSUFBSTFXLEtBQUssQ0FBQytWLFFBQVEsRUFBRTtRQUFFO1FBQ3BCL1YsS0FBSyxDQUFDK1YsUUFBUSxHQUFHLENBQUMsQ0FBQztNQUNyQjtNQUNBLEtBQUssSUFBSXJPLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR21OLEtBQUssQ0FBQzFVLE1BQU0sRUFBRXVILENBQUMsRUFBRSxFQUFFO1FBQ3JDLElBQUksQ0FBQ2dPLE1BQU0sQ0FBQ2IsS0FBSyxDQUFDbk4sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVtTixLQUFLLENBQUNuTixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN2QztJQUNGLENBQUM7RUFDSDtFQUVBLElBQUksT0FBT29PLEtBQUssQ0FBQ0wsV0FBVyxLQUFLLFVBQVUsRUFBRTtJQUMzQ25KLE1BQU0sQ0FBQzBCLGNBQWMsQ0FBQzhILEtBQUssRUFBRSxhQUFhLEVBQUU7TUFDMUM3SCxVQUFVLEVBQUUsS0FBSztNQUNqQkMsWUFBWSxFQUFFLEtBQUs7TUFDbkJxSCxRQUFRLEVBQUUsS0FBSztNQUNmUixLQUFLLEVBQUUsU0FBQUEsTUFBU08sWUFBWSxFQUFFO1FBQzVCLElBQUksSUFBSSxDQUFDUyxRQUFRLEVBQUU7VUFDakIsSUFBSSxDQUFDQSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsTUFBTTtVQUNMLElBQUl4SixJQUFJLEdBQUcsRUFBRTtVQUNiLElBQUksQ0FBQ0MsT0FBTyxDQUFDLFVBQVN1SSxLQUFLLEVBQUVyRyxJQUFJLEVBQUU7WUFDakNuQyxJQUFJLENBQUN4RSxJQUFJLENBQUMyRyxJQUFJLENBQUM7VUFDakIsQ0FBQyxDQUFDO1VBQ0YsS0FBSyxJQUFJaEgsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHNkUsSUFBSSxDQUFDcE0sTUFBTSxFQUFFdUgsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsSUFBSSxDQUFDc08sTUFBTSxDQUFDekosSUFBSSxDQUFDN0UsQ0FBQyxDQUFDLENBQUM7VUFDdEI7UUFDRjtRQUVBNE4sWUFBWSxHQUFHQSxZQUFZLENBQUN2UCxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUM5QyxJQUFJNFEsVUFBVSxHQUFHckIsWUFBWSxDQUFDL08sS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN4QyxJQUFJcVEsU0FBUztRQUNiLEtBQUssSUFBSWxQLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR2lQLFVBQVUsQ0FBQ3hXLE1BQU0sRUFBRXVILENBQUMsRUFBRSxFQUFFO1VBQzFDa1AsU0FBUyxHQUFHRCxVQUFVLENBQUNqUCxDQUFDLENBQUMsQ0FBQ25CLEtBQUssQ0FBQyxHQUFHLENBQUM7VUFDcEMsSUFBSSxDQUFDbVAsTUFBTSxDQUNUUixnQkFBZ0IsQ0FBQzBCLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUM3QkEsU0FBUyxDQUFDelcsTUFBTSxHQUFHLENBQUMsR0FBSStVLGdCQUFnQixDQUFDMEIsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFDNUQsQ0FBQztRQUNIO01BQ0Y7SUFDRixDQUFDLENBQUM7RUFDSjs7RUFFQTtBQUVGLENBQUMsRUFDRSxPQUFPckMsTUFBTSxLQUFLLFdBQVcsR0FBSUEsTUFBTSxHQUNsQyxPQUFPN0ssTUFBTSxLQUFLLFdBQVcsR0FBSUEsTUFBTSxHQUN2QyxPQUFPMEQsSUFBSSxLQUFLLFdBQVcsR0FBSUEsSUFBSSxTQUMzQyxDQUFDO0FBRUQsQ0FBQyxVQUFTbUgsTUFBTSxFQUFFO0VBQ2hCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0VBRUUsSUFBSXNDLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBcUJBLENBQUEsRUFBYztJQUNyQyxJQUFJO01BQ0YsSUFBSUMsQ0FBQyxHQUFHLElBQUl2QyxNQUFNLENBQUN3QyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQztNQUN2Q0QsQ0FBQyxDQUFDekQsUUFBUSxHQUFHLEtBQUs7TUFDbEIsT0FBUXlELENBQUMsQ0FBQ0UsSUFBSSxLQUFLLGdCQUFnQixJQUFLRixDQUFDLENBQUNHLFlBQVk7SUFDeEQsQ0FBQyxDQUFDLE9BQU96RyxDQUFDLEVBQUU7TUFDVixPQUFPLEtBQUs7SUFDZDtFQUNGLENBQUM7RUFHRCxJQUFJMEcsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBYztJQUMzQixJQUFJQyxJQUFJLEdBQUc1QyxNQUFNLENBQUN3QyxHQUFHO0lBRXJCLElBQUlBLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFZSyxHQUFHLEVBQUVDLElBQUksRUFBRTtNQUM1QixJQUFJLE9BQU9ELEdBQUcsS0FBSyxRQUFRLEVBQUVBLEdBQUcsR0FBR3pILE1BQU0sQ0FBQ3lILEdBQUcsQ0FBQztNQUM5QyxJQUFJQyxJQUFJLElBQUksT0FBT0EsSUFBSSxLQUFLLFFBQVEsRUFBRUEsSUFBSSxHQUFHMUgsTUFBTSxDQUFDMEgsSUFBSSxDQUFDOztNQUV6RDtNQUNBLElBQUlDLEdBQUcsR0FBR3ZOLFFBQVE7UUFBRXdOLFdBQVc7TUFDL0IsSUFBSUYsSUFBSSxLQUFLOUMsTUFBTSxDQUFDdkIsUUFBUSxLQUFLLEtBQUssQ0FBQyxJQUFJcUUsSUFBSSxLQUFLOUMsTUFBTSxDQUFDdkIsUUFBUSxDQUFDZ0UsSUFBSSxDQUFDLEVBQUU7UUFDekVLLElBQUksR0FBR0EsSUFBSSxDQUFDbFEsV0FBVyxDQUFDLENBQUM7UUFDekJtUSxHQUFHLEdBQUd2TixRQUFRLENBQUN5TixjQUFjLENBQUNDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwREYsV0FBVyxHQUFHRCxHQUFHLENBQUNJLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDdkNILFdBQVcsQ0FBQ1AsSUFBSSxHQUFHSyxJQUFJO1FBQ3ZCQyxHQUFHLENBQUNLLElBQUksQ0FBQ0MsV0FBVyxDQUFDTCxXQUFXLENBQUM7UUFDakMsSUFBSTtVQUNGLElBQUlBLFdBQVcsQ0FBQ1AsSUFBSSxDQUFDcEQsT0FBTyxDQUFDeUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sSUFBSXZSLEtBQUssQ0FBQ3lSLFdBQVcsQ0FBQ1AsSUFBSSxDQUFDO1FBQzdFLENBQUMsQ0FBQyxPQUFPYSxHQUFHLEVBQUU7VUFDWixNQUFNLElBQUkvUixLQUFLLENBQUMseUJBQXlCLEdBQUd1UixJQUFJLEdBQUcsVUFBVSxHQUFHUSxHQUFHLENBQUM7UUFDdEU7TUFDRjtNQUVBLElBQUlDLGFBQWEsR0FBR1IsR0FBRyxDQUFDSSxhQUFhLENBQUMsR0FBRyxDQUFDO01BQzFDSSxhQUFhLENBQUNkLElBQUksR0FBR0ksR0FBRztNQUN4QixJQUFJRyxXQUFXLEVBQUU7UUFDZkQsR0FBRyxDQUFDUyxJQUFJLENBQUNILFdBQVcsQ0FBQ0UsYUFBYSxDQUFDO1FBQ25DQSxhQUFhLENBQUNkLElBQUksR0FBR2MsYUFBYSxDQUFDZCxJQUFJLENBQUMsQ0FBQztNQUMzQztNQUVBLElBQUlnQixZQUFZLEdBQUdWLEdBQUcsQ0FBQ0ksYUFBYSxDQUFDLE9BQU8sQ0FBQztNQUM3Q00sWUFBWSxDQUFDdlIsSUFBSSxHQUFHLEtBQUs7TUFDekJ1UixZQUFZLENBQUNqRCxLQUFLLEdBQUdxQyxHQUFHO01BRXhCLElBQUlVLGFBQWEsQ0FBQzVFLFFBQVEsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUN2RSxJQUFJLENBQUNtSixhQUFhLENBQUNkLElBQUksQ0FBQyxJQUFLLENBQUNnQixZQUFZLENBQUNDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQ1osSUFBSyxFQUFFO1FBQy9HLE1BQU0sSUFBSXpCLFNBQVMsQ0FBQyxhQUFhLENBQUM7TUFDcEM7TUFFQXRKLE1BQU0sQ0FBQzBCLGNBQWMsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7UUFDNUMrRyxLQUFLLEVBQUUrQztNQUNULENBQUMsQ0FBQzs7TUFHRjtNQUNBLElBQUliLFlBQVksR0FBRyxJQUFJMUMsTUFBTSxDQUFDYyxlQUFlLENBQUMsSUFBSSxDQUFDNkMsTUFBTSxDQUFDO01BQzFELElBQUlDLGtCQUFrQixHQUFHLElBQUk7TUFDN0IsSUFBSUMsd0JBQXdCLEdBQUcsSUFBSTtNQUNuQyxJQUFJcFksS0FBSyxHQUFHLElBQUk7TUFDaEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDd00sT0FBTyxDQUFDLFVBQVM2TCxVQUFVLEVBQUU7UUFDdkQsSUFBSUMsTUFBTSxHQUFHckIsWUFBWSxDQUFDb0IsVUFBVSxDQUFDO1FBQ3JDcEIsWUFBWSxDQUFDb0IsVUFBVSxDQUFDLEdBQUcsWUFBVztVQUNwQ0MsTUFBTSxDQUFDMVcsS0FBSyxDQUFDcVYsWUFBWSxFQUFFL1csU0FBUyxDQUFDO1VBQ3JDLElBQUlpWSxrQkFBa0IsRUFBRTtZQUN0QkMsd0JBQXdCLEdBQUcsS0FBSztZQUNoQ3BZLEtBQUssQ0FBQ2tZLE1BQU0sR0FBR2pCLFlBQVksQ0FBQy9RLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDa1Msd0JBQXdCLEdBQUcsSUFBSTtVQUNqQztRQUNGLENBQUM7TUFDSCxDQUFDLENBQUM7TUFFRjlMLE1BQU0sQ0FBQzBCLGNBQWMsQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFO1FBQzFDK0csS0FBSyxFQUFFa0MsWUFBWTtRQUNuQmhKLFVBQVUsRUFBRTtNQUNkLENBQUMsQ0FBQztNQUVGLElBQUlpSyxNQUFNLEdBQUcsS0FBSyxDQUFDO01BQ25CNUwsTUFBTSxDQUFDMEIsY0FBYyxDQUFDLElBQUksRUFBRSxxQkFBcUIsRUFBRTtRQUNqREMsVUFBVSxFQUFFLEtBQUs7UUFDakJDLFlBQVksRUFBRSxLQUFLO1FBQ25CcUgsUUFBUSxFQUFFLEtBQUs7UUFDZlIsS0FBSyxFQUFFLFNBQUFBLE1BQUEsRUFBVztVQUNoQixJQUFJLElBQUksQ0FBQ21ELE1BQU0sS0FBS0EsTUFBTSxFQUFFO1lBQzFCQSxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNO1lBQ3BCLElBQUlFLHdCQUF3QixFQUFFO2NBQzVCRCxrQkFBa0IsR0FBRyxLQUFLO2NBQzFCLElBQUksQ0FBQ2xCLFlBQVksQ0FBQ3hCLFdBQVcsQ0FBQyxJQUFJLENBQUN5QyxNQUFNLENBQUM7Y0FDMUNDLGtCQUFrQixHQUFHLElBQUk7WUFDM0I7VUFDRjtRQUNGO01BQ0YsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUlyQyxLQUFLLEdBQUdpQixHQUFHLENBQUN0RixTQUFTO0lBRXpCLElBQUk4RywwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTBCQSxDQUFZQyxhQUFhLEVBQUU7TUFDdkRsTSxNQUFNLENBQUMwQixjQUFjLENBQUM4SCxLQUFLLEVBQUUwQyxhQUFhLEVBQUU7UUFDMUNySyxHQUFHLEVBQUUsU0FBQUEsSUFBQSxFQUFXO1VBQ2QsT0FBTyxJQUFJLENBQUNzSyxjQUFjLENBQUNELGFBQWEsQ0FBQztRQUMzQyxDQUFDO1FBQ0RwSyxHQUFHLEVBQUUsU0FBQUEsSUFBUzJHLEtBQUssRUFBRTtVQUNuQixJQUFJLENBQUMwRCxjQUFjLENBQUNELGFBQWEsQ0FBQyxHQUFHekQsS0FBSztRQUM1QyxDQUFDO1FBQ0Q5RyxVQUFVLEVBQUU7TUFDZCxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQzdDekIsT0FBTyxDQUFDLFVBQVNnTSxhQUFhLEVBQUU7TUFDL0JELDBCQUEwQixDQUFDQyxhQUFhLENBQUM7SUFDM0MsQ0FBQyxDQUFDO0lBRUpsTSxNQUFNLENBQUMwQixjQUFjLENBQUM4SCxLQUFLLEVBQUUsUUFBUSxFQUFFO01BQ3JDM0gsR0FBRyxFQUFFLFNBQUFBLElBQUEsRUFBVztRQUNkLE9BQU8sSUFBSSxDQUFDc0ssY0FBYyxDQUFDLFFBQVEsQ0FBQztNQUN0QyxDQUFDO01BQ0RySyxHQUFHLEVBQUUsU0FBQUEsSUFBUzJHLEtBQUssRUFBRTtRQUNuQixJQUFJLENBQUMwRCxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcxRCxLQUFLO1FBQ3JDLElBQUksQ0FBQzJELG1CQUFtQixDQUFDLENBQUM7TUFDNUIsQ0FBQztNQUNEekssVUFBVSxFQUFFO0lBQ2QsQ0FBQyxDQUFDO0lBRUYzQixNQUFNLENBQUNxTSxnQkFBZ0IsQ0FBQzdDLEtBQUssRUFBRTtNQUU3QixVQUFVLEVBQUU7UUFDVjNILEdBQUcsRUFBRSxTQUFBQSxJQUFBLEVBQVc7VUFDZCxJQUFJbk8sS0FBSyxHQUFHLElBQUk7VUFDaEIsT0FBTyxZQUFXO1lBQ2hCLE9BQU9BLEtBQUssQ0FBQ2dYLElBQUk7VUFDbkIsQ0FBQztRQUNIO01BQ0YsQ0FBQztNQUVELE1BQU0sRUFBRTtRQUNON0ksR0FBRyxFQUFFLFNBQUFBLElBQUEsRUFBVztVQUNkLE9BQU8sSUFBSSxDQUFDc0ssY0FBYyxDQUFDekIsSUFBSSxDQUFDalIsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7UUFDcEQsQ0FBQztRQUNEcUksR0FBRyxFQUFFLFNBQUFBLElBQVMyRyxLQUFLLEVBQUU7VUFDbkIsSUFBSSxDQUFDMEQsY0FBYyxDQUFDekIsSUFBSSxHQUFHakMsS0FBSztVQUNoQyxJQUFJLENBQUMyRCxtQkFBbUIsQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFDRHpLLFVBQVUsRUFBRTtNQUNkLENBQUM7TUFFRCxVQUFVLEVBQUU7UUFDVkUsR0FBRyxFQUFFLFNBQUFBLElBQUEsRUFBVztVQUNkLE9BQU8sSUFBSSxDQUFDc0ssY0FBYyxDQUFDcEYsUUFBUSxDQUFDdE4sT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7UUFDNUQsQ0FBQztRQUNEcUksR0FBRyxFQUFFLFNBQUFBLElBQVMyRyxLQUFLLEVBQUU7VUFDbkIsSUFBSSxDQUFDMEQsY0FBYyxDQUFDcEYsUUFBUSxHQUFHMEIsS0FBSztRQUN0QyxDQUFDO1FBQ0Q5RyxVQUFVLEVBQUU7TUFDZCxDQUFDO01BRUQsUUFBUSxFQUFFO1FBQ1JFLEdBQUcsRUFBRSxTQUFBQSxJQUFBLEVBQVc7VUFDZDtVQUNBLElBQUl5SyxZQUFZLEdBQUc7WUFBRSxPQUFPLEVBQUUsRUFBRTtZQUFFLFFBQVEsRUFBRSxHQUFHO1lBQUUsTUFBTSxFQUFFO1VBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQ0gsY0FBYyxDQUFDdkYsUUFBUSxDQUFDO1VBQzNGO1VBQ0E7VUFDQTtVQUNBLElBQUkyRixlQUFlLEdBQUcsSUFBSSxDQUFDSixjQUFjLENBQUNLLElBQUksSUFBSUYsWUFBWSxJQUM1RCxJQUFJLENBQUNILGNBQWMsQ0FBQ0ssSUFBSSxLQUFLLEVBQUU7VUFFakMsT0FBTyxJQUFJLENBQUNMLGNBQWMsQ0FBQ3ZGLFFBQVEsR0FDakMsSUFBSSxHQUNKLElBQUksQ0FBQ3VGLGNBQWMsQ0FBQ00sUUFBUSxJQUMzQkYsZUFBZSxHQUFJLEdBQUcsR0FBRyxJQUFJLENBQUNKLGNBQWMsQ0FBQ0ssSUFBSSxHQUFJLEVBQUUsQ0FBQztRQUM3RCxDQUFDO1FBQ0Q3SyxVQUFVLEVBQUU7TUFDZCxDQUFDO01BRUQsVUFBVSxFQUFFO1FBQUU7UUFDWkUsR0FBRyxFQUFFLFNBQUFBLElBQUEsRUFBVztVQUNkLE9BQU8sRUFBRTtRQUNYLENBQUM7UUFDREMsR0FBRyxFQUFFLFNBQUFBLElBQVMyRyxLQUFLLEVBQUUsQ0FDckIsQ0FBQztRQUNEOUcsVUFBVSxFQUFFO01BQ2QsQ0FBQztNQUVELFVBQVUsRUFBRTtRQUFFO1FBQ1pFLEdBQUcsRUFBRSxTQUFBQSxJQUFBLEVBQVc7VUFDZCxPQUFPLEVBQUU7UUFDWCxDQUFDO1FBQ0RDLEdBQUcsRUFBRSxTQUFBQSxJQUFTMkcsS0FBSyxFQUFFLENBQ3JCLENBQUM7UUFDRDlHLFVBQVUsRUFBRTtNQUNkO0lBQ0YsQ0FBQyxDQUFDO0lBRUY4SSxHQUFHLENBQUNpQyxlQUFlLEdBQUcsVUFBU0MsSUFBSSxFQUFFO01BQ25DLE9BQU85QixJQUFJLENBQUM2QixlQUFlLENBQUNwWCxLQUFLLENBQUN1VixJQUFJLEVBQUVqWCxTQUFTLENBQUM7SUFDcEQsQ0FBQztJQUVENlcsR0FBRyxDQUFDbUMsZUFBZSxHQUFHLFVBQVM5QixHQUFHLEVBQUU7TUFDbEMsT0FBT0QsSUFBSSxDQUFDK0IsZUFBZSxDQUFDdFgsS0FBSyxDQUFDdVYsSUFBSSxFQUFFalgsU0FBUyxDQUFDO0lBQ3BELENBQUM7SUFFRHFVLE1BQU0sQ0FBQ3dDLEdBQUcsR0FBR0EsR0FBRztFQUVsQixDQUFDO0VBRUQsSUFBSSxDQUFDRixxQkFBcUIsQ0FBQyxDQUFDLEVBQUU7SUFDNUJLLFdBQVcsQ0FBQyxDQUFDO0VBQ2Y7RUFFQSxJQUFLM0MsTUFBTSxDQUFDdkIsUUFBUSxLQUFLLEtBQUssQ0FBQyxJQUFLLEVBQUUsUUFBUSxJQUFJdUIsTUFBTSxDQUFDdkIsUUFBUSxDQUFDLEVBQUU7SUFDbEUsSUFBSW1HLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBLEVBQWM7TUFDekIsT0FBTzVFLE1BQU0sQ0FBQ3ZCLFFBQVEsQ0FBQ0UsUUFBUSxHQUFHLElBQUksR0FBR3FCLE1BQU0sQ0FBQ3ZCLFFBQVEsQ0FBQytGLFFBQVEsSUFBSXhFLE1BQU0sQ0FBQ3ZCLFFBQVEsQ0FBQzhGLElBQUksR0FBSSxHQUFHLEdBQUd2RSxNQUFNLENBQUN2QixRQUFRLENBQUM4RixJQUFJLEdBQUksRUFBRSxDQUFDO0lBQ2hJLENBQUM7SUFFRCxJQUFJO01BQ0Z4TSxNQUFNLENBQUMwQixjQUFjLENBQUN1RyxNQUFNLENBQUN2QixRQUFRLEVBQUUsUUFBUSxFQUFFO1FBQy9DN0UsR0FBRyxFQUFFZ0wsU0FBUztRQUNkbEwsVUFBVSxFQUFFO01BQ2QsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLE9BQU91QyxDQUFDLEVBQUU7TUFDVjRJLFdBQVcsQ0FBQyxZQUFXO1FBQ3JCN0UsTUFBTSxDQUFDdkIsUUFBUSxDQUFDcUcsTUFBTSxHQUFHRixTQUFTLENBQUMsQ0FBQztNQUN0QyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ1Q7RUFDRjtBQUVGLENBQUMsRUFDRSxPQUFPNUUsTUFBTSxLQUFLLFdBQVcsR0FBSUEsTUFBTSxHQUNsQyxPQUFPN0ssTUFBTSxLQUFLLFdBQVcsR0FBSUEsTUFBTSxHQUN2QyxPQUFPMEQsSUFBSSxLQUFLLFdBQVcsR0FBSUEsSUFBSSxTQUMzQyxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVlRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLFVBQVNBLElBQUksRUFBRTtFQUNaLFlBQVk7O0VBRVosSUFBSWtNLHFCQUFxQixHQUFJbE0sSUFBSSxDQUFDaUksZUFBZSxJQUFJakksSUFBSSxDQUFDaUksZUFBZSxDQUFDNUQsU0FBUyxDQUFDdEQsR0FBRyxHQUFJZixJQUFJLENBQUNpSSxlQUFlLEdBQUcsSUFBSTtJQUNsSGtFLDBCQUEwQixHQUFHRCxxQkFBcUIsSUFBSyxJQUFJQSxxQkFBcUIsQ0FBQztNQUFDN0MsQ0FBQyxFQUFFO0lBQUMsQ0FBQyxDQUFDLENBQUV2USxRQUFRLENBQUMsQ0FBQyxLQUFLLEtBQUs7SUFDOUc7SUFDQXNULHNCQUFzQixHQUFHRixxQkFBcUIsSUFBSyxJQUFJQSxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQ25MLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFJO0lBQ3ZHc0wsbUJBQW1CLEdBQUcscUJBQXFCO0lBQzNDO0lBQ0FDLDBCQUEwQixHQUFHSixxQkFBcUIsR0FBSSxZQUFXO01BQzdELElBQUlLLGFBQWEsR0FBRyxJQUFJTCxxQkFBcUIsQ0FBQyxDQUFDO01BQy9DSyxhQUFhLENBQUNqRSxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztNQUMvQixPQUFPaUUsYUFBYSxDQUFDelQsUUFBUSxDQUFDLENBQUMsS0FBSyxRQUFRO0lBQ2hELENBQUMsQ0FBRSxDQUFDLEdBQUcsSUFBSTtJQUNYdUwsU0FBUyxHQUFHbUksdUJBQXVCLENBQUNuSSxTQUFTO0lBQzdDb0ksUUFBUSxHQUFHLENBQUMsRUFBRXpNLElBQUksQ0FBQ3FILE1BQU0sSUFBSXJILElBQUksQ0FBQ3FILE1BQU0sQ0FBQ0MsUUFBUSxDQUFDO0VBRXRELElBQUk0RSxxQkFBcUIsSUFBSUMsMEJBQTBCLElBQUlDLHNCQUFzQixJQUFJRSwwQkFBMEIsRUFBRTtJQUM3RztFQUNKOztFQUdBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJLFNBQVNFLHVCQUF1QkEsQ0FBQzFCLE1BQU0sRUFBRTtJQUNyQ0EsTUFBTSxHQUFHQSxNQUFNLElBQUksRUFBRTs7SUFFckI7SUFDQSxJQUFJQSxNQUFNLFlBQVk3QyxlQUFlLElBQUk2QyxNQUFNLFlBQVkwQix1QkFBdUIsRUFBRTtNQUNoRjFCLE1BQU0sR0FBR0EsTUFBTSxDQUFDaFMsUUFBUSxDQUFDLENBQUM7SUFDOUI7SUFDQSxJQUFJLENBQUV1VCxtQkFBbUIsQ0FBQyxHQUFHSyxXQUFXLENBQUM1QixNQUFNLENBQUM7RUFDcEQ7O0VBR0E7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0l6RyxTQUFTLENBQUNpRSxNQUFNLEdBQUcsVUFBU2hILElBQUksRUFBRXFHLEtBQUssRUFBRTtJQUNyQ2dGLFFBQVEsQ0FBQyxJQUFJLENBQUVOLG1CQUFtQixDQUFDLEVBQUUvSyxJQUFJLEVBQUVxRyxLQUFLLENBQUM7RUFDckQsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSXRELFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxVQUFTL0MsSUFBSSxFQUFFO0lBQ2pDLE9BQU8sSUFBSSxDQUFFK0ssbUJBQW1CLENBQUMsQ0FBRS9LLElBQUksQ0FBQztFQUM1QyxDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJK0MsU0FBUyxDQUFDdEQsR0FBRyxHQUFHLFVBQVNPLElBQUksRUFBRTtJQUMzQixJQUFJc0wsSUFBSSxHQUFHLElBQUksQ0FBRVAsbUJBQW1CLENBQUM7SUFDckMsT0FBTy9LLElBQUksSUFBSXNMLElBQUksR0FBR0EsSUFBSSxDQUFDdEwsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSTtFQUM5QyxDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJK0MsU0FBUyxDQUFDd0UsTUFBTSxHQUFHLFVBQVN2SCxJQUFJLEVBQUU7SUFDOUIsSUFBSXNMLElBQUksR0FBRyxJQUFJLENBQUVQLG1CQUFtQixDQUFDO0lBQ3JDLE9BQU8vSyxJQUFJLElBQUlzTCxJQUFJLEdBQUdBLElBQUksQ0FBRXRMLElBQUksQ0FBQyxDQUFDN0osS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUU7RUFDbkQsQ0FBQzs7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSTRNLFNBQVMsQ0FBQ3lFLEdBQUcsR0FBRyxVQUFTeEgsSUFBSSxFQUFFO0lBQzNCLE9BQU9BLElBQUksSUFBSSxJQUFJLENBQUUrSyxtQkFBbUIsQ0FBQztFQUM3QyxDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSWhJLFNBQVMsQ0FBQ3JELEdBQUcsR0FBRyxTQUFTQSxHQUFHQSxDQUFDTSxJQUFJLEVBQUVxRyxLQUFLLEVBQUU7SUFDdEMsSUFBSSxDQUFFMEUsbUJBQW1CLENBQUMsQ0FBQy9LLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHcUcsS0FBSyxDQUFDO0VBQ25ELENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJdEQsU0FBUyxDQUFDdkwsUUFBUSxHQUFHLFlBQVc7SUFDNUIsSUFBSThULElBQUksR0FBRyxJQUFJLENBQUNQLG1CQUFtQixDQUFDO01BQUVRLEtBQUssR0FBRyxFQUFFO01BQUV2UyxDQUFDO01BQUUrRSxHQUFHO01BQUVpQyxJQUFJO01BQUVxRyxLQUFLO0lBQ3JFLEtBQUt0SSxHQUFHLElBQUl1TixJQUFJLEVBQUU7TUFDZHRMLElBQUksR0FBR3dMLE1BQU0sQ0FBQ3pOLEdBQUcsQ0FBQztNQUNsQixLQUFLL0UsQ0FBQyxHQUFHLENBQUMsRUFBRXFOLEtBQUssR0FBR2lGLElBQUksQ0FBQ3ZOLEdBQUcsQ0FBQyxFQUFFL0UsQ0FBQyxHQUFHcU4sS0FBSyxDQUFDNVUsTUFBTSxFQUFFdUgsQ0FBQyxFQUFFLEVBQUU7UUFDbER1UyxLQUFLLENBQUNsUyxJQUFJLENBQUMyRyxJQUFJLEdBQUcsR0FBRyxHQUFHd0wsTUFBTSxDQUFDbkYsS0FBSyxDQUFDck4sQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUM3QztJQUNKO0lBQ0EsT0FBT3VTLEtBQUssQ0FBQ3ZWLElBQUksQ0FBQyxHQUFHLENBQUM7RUFDMUIsQ0FBQzs7RUFFRDtFQUNBLElBQUl5VixrQkFBa0IsR0FBRyxDQUFDWCxzQkFBc0I7RUFDaEQsSUFBSVksUUFBUSxHQUFJLENBQUNELGtCQUFrQixJQUFJYixxQkFBcUIsSUFBSSxDQUFDQywwQkFBMEIsSUFBSW5NLElBQUksQ0FBQ2lOLEtBQU07RUFDMUc7QUFDSjtBQUNBO0VBQ0kvTixNQUFNLENBQUMwQixjQUFjLENBQUNaLElBQUksRUFBRSxpQkFBaUIsRUFBRTtJQUMzQzJILEtBQUssRUFBR3FGLFFBQVE7SUFDWjtJQUNBLElBQUlDLEtBQUssQ0FBQ2YscUJBQXFCLEVBQUU7TUFDN0JnQixTQUFTLEVBQUUsU0FBQUEsVUFBU0MsTUFBTSxFQUFFL1AsSUFBSSxFQUFFO1FBQzlCLE9BQU8sSUFBSStQLE1BQU0sQ0FBRSxJQUFJWCx1QkFBdUIsQ0FBQ3BQLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDdEUsUUFBUSxDQUFDLENBQUUsQ0FBQztNQUN4RTtJQUNKLENBQUMsQ0FBQyxHQUNGMFQ7RUFDUixDQUFDLENBQUM7RUFFRixJQUFJWSxRQUFRLEdBQUdwTixJQUFJLENBQUNpSSxlQUFlLENBQUM1RCxTQUFTO0VBRTdDK0ksUUFBUSxDQUFDQyxRQUFRLEdBQUcsSUFBSTs7RUFFeEI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJRCxRQUFRLENBQUNoTyxPQUFPLEdBQUdnTyxRQUFRLENBQUNoTyxPQUFPLElBQUksVUFBU3NILFFBQVEsRUFBRXFDLE9BQU8sRUFBRTtJQUMvRCxJQUFJNkQsSUFBSSxHQUFHRixXQUFXLENBQUMsSUFBSSxDQUFDNVQsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN2Q29HLE1BQU0sQ0FBQ29PLG1CQUFtQixDQUFDVixJQUFJLENBQUMsQ0FBQ3hOLE9BQU8sQ0FBQyxVQUFTa0MsSUFBSSxFQUFFO01BQ3BEc0wsSUFBSSxDQUFDdEwsSUFBSSxDQUFDLENBQUNsQyxPQUFPLENBQUMsVUFBU3VJLEtBQUssRUFBRTtRQUMvQmpCLFFBQVEsQ0FBQ2pHLElBQUksQ0FBQ3NJLE9BQU8sRUFBRXBCLEtBQUssRUFBRXJHLElBQUksRUFBRSxJQUFJLENBQUM7TUFDN0MsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUNaLENBQUMsRUFBRSxJQUFJLENBQUM7RUFDWixDQUFDOztFQUVEO0FBQ0o7QUFDQTtFQUNJOEwsUUFBUSxDQUFDaEUsSUFBSSxHQUFHZ0UsUUFBUSxDQUFDaEUsSUFBSSxJQUFJLFlBQVc7SUFDeEMsSUFBSXdELElBQUksR0FBR0YsV0FBVyxDQUFDLElBQUksQ0FBQzVULFFBQVEsQ0FBQyxDQUFDLENBQUM7TUFBRXFHLElBQUksR0FBRyxFQUFFO01BQUVvTyxDQUFDO01BQUVqVCxDQUFDO01BQUVtRSxDQUFDO0lBQzNELEtBQUs4TyxDQUFDLElBQUlYLElBQUksRUFBRTtNQUNaek4sSUFBSSxDQUFDeEUsSUFBSSxDQUFDNFMsQ0FBQyxDQUFDO0lBQ2hCO0lBQ0FwTyxJQUFJLENBQUNpSyxJQUFJLENBQUMsQ0FBQztJQUVYLEtBQUs5TyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUc2RSxJQUFJLENBQUNwTSxNQUFNLEVBQUV1SCxDQUFDLEVBQUUsRUFBRTtNQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM2RSxJQUFJLENBQUM3RSxDQUFDLENBQUMsQ0FBQztJQUMzQjtJQUNBLEtBQUtBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzZFLElBQUksQ0FBQ3BNLE1BQU0sRUFBRXVILENBQUMsRUFBRSxFQUFFO01BQzlCLElBQUkrRSxHQUFHLEdBQUdGLElBQUksQ0FBQzdFLENBQUMsQ0FBQztRQUFFMk8sTUFBTSxHQUFHMkQsSUFBSSxDQUFDdk4sR0FBRyxDQUFDO01BQ3JDLEtBQUtaLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3dLLE1BQU0sQ0FBQ2xXLE1BQU0sRUFBRTBMLENBQUMsRUFBRSxFQUFFO1FBQ2hDLElBQUksQ0FBQzZKLE1BQU0sQ0FBQ2pKLEdBQUcsRUFBRTRKLE1BQU0sQ0FBQ3hLLENBQUMsQ0FBQyxDQUFDO01BQy9CO0lBQ0o7RUFDSixDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJMk8sUUFBUSxDQUFDak8sSUFBSSxHQUFHaU8sUUFBUSxDQUFDak8sSUFBSSxJQUFJLFlBQVc7SUFDeEMsSUFBSXNJLEtBQUssR0FBRyxFQUFFO0lBQ2QsSUFBSSxDQUFDckksT0FBTyxDQUFDLFVBQVNqRixJQUFJLEVBQUVtSCxJQUFJLEVBQUU7TUFDOUJtRyxLQUFLLENBQUM5TSxJQUFJLENBQUMyRyxJQUFJLENBQUM7SUFDcEIsQ0FBQyxDQUFDO0lBQ0YsT0FBT2tNLFlBQVksQ0FBQy9GLEtBQUssQ0FBQztFQUM5QixDQUFDOztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJMkYsUUFBUSxDQUFDbkUsTUFBTSxHQUFHbUUsUUFBUSxDQUFDbkUsTUFBTSxJQUFJLFlBQVc7SUFDNUMsSUFBSXhCLEtBQUssR0FBRyxFQUFFO0lBQ2QsSUFBSSxDQUFDckksT0FBTyxDQUFDLFVBQVNqRixJQUFJLEVBQUU7TUFDeEJzTixLQUFLLENBQUM5TSxJQUFJLENBQUNSLElBQUksQ0FBQztJQUNwQixDQUFDLENBQUM7SUFDRixPQUFPcVQsWUFBWSxDQUFDL0YsS0FBSyxDQUFDO0VBQzlCLENBQUM7O0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0kyRixRQUFRLENBQUNwRSxPQUFPLEdBQUdvRSxRQUFRLENBQUNwRSxPQUFPLElBQUksWUFBVztJQUM5QyxJQUFJdkIsS0FBSyxHQUFHLEVBQUU7SUFDZCxJQUFJLENBQUNySSxPQUFPLENBQUMsVUFBU2pGLElBQUksRUFBRW1ILElBQUksRUFBRTtNQUM5Qm1HLEtBQUssQ0FBQzlNLElBQUksQ0FBQyxDQUFDMkcsSUFBSSxFQUFFbkgsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFDO0lBQ0YsT0FBT3FULFlBQVksQ0FBQy9GLEtBQUssQ0FBQztFQUM5QixDQUFDO0VBR0QsSUFBSWdGLFFBQVEsRUFBRTtJQUNWVyxRQUFRLENBQUNwTixJQUFJLENBQUNxSCxNQUFNLENBQUNDLFFBQVEsQ0FBQyxHQUFHOEYsUUFBUSxDQUFDcE4sSUFBSSxDQUFDcUgsTUFBTSxDQUFDQyxRQUFRLENBQUMsSUFBSThGLFFBQVEsQ0FBQ3BFLE9BQU87RUFDdkY7RUFHQSxTQUFTOEQsTUFBTUEsQ0FBQzlYLEdBQUcsRUFBRTtJQUNqQixJQUFJMkQsT0FBTyxHQUFHO01BQ1YsR0FBRyxFQUFFLEtBQUs7TUFDVixHQUFHLEVBQUUsS0FBSztNQUNWLEdBQUcsRUFBRSxLQUFLO01BQ1YsR0FBRyxFQUFFLEtBQUs7TUFDVixHQUFHLEVBQUUsS0FBSztNQUNWLEtBQUssRUFBRSxHQUFHO01BQ1YsS0FBSyxFQUFFO0lBQ1gsQ0FBQztJQUNELE9BQU80QyxrQkFBa0IsQ0FBQ3ZHLEdBQUcsQ0FBQyxDQUFDMkQsT0FBTyxDQUFDLG9CQUFvQixFQUFFLFVBQVN0QixLQUFLLEVBQUU7TUFDekUsT0FBT3NCLE9BQU8sQ0FBQ3RCLEtBQUssQ0FBQztJQUN6QixDQUFDLENBQUM7RUFDTjtFQUVBLFNBQVNvVyxNQUFNQSxDQUFDelksR0FBRyxFQUFFO0lBQ2pCLE9BQU8rUyxrQkFBa0IsQ0FBQy9TLEdBQUcsQ0FBQzJELE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7RUFDdEQ7RUFFQSxTQUFTNlUsWUFBWUEsQ0FBQ0UsR0FBRyxFQUFFO0lBQ3ZCLElBQUlwRyxRQUFRLEdBQUc7TUFDWEksSUFBSSxFQUFFLFNBQUFBLEtBQUEsRUFBVztRQUNiLElBQUlDLEtBQUssR0FBRytGLEdBQUcsQ0FBQzNZLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLE9BQU87VUFBQzZTLElBQUksRUFBRUQsS0FBSyxLQUFLbFQsU0FBUztVQUFFa1QsS0FBSyxFQUFFQTtRQUFLLENBQUM7TUFDcEQ7SUFDSixDQUFDO0lBRUQsSUFBSThFLFFBQVEsRUFBRTtNQUNWbkYsUUFBUSxDQUFDdEgsSUFBSSxDQUFDcUgsTUFBTSxDQUFDQyxRQUFRLENBQUMsR0FBRyxZQUFXO1FBQ3hDLE9BQU9BLFFBQVE7TUFDbkIsQ0FBQztJQUNMO0lBRUEsT0FBT0EsUUFBUTtFQUNuQjtFQUVBLFNBQVNvRixXQUFXQSxDQUFDNUIsTUFBTSxFQUFFO0lBQ3pCLElBQUk4QixJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBRWIsSUFBSTNLLE9BQUEsQ0FBTzZJLE1BQU0sTUFBSyxRQUFRLEVBQUU7TUFDNUIsS0FBSyxJQUFJekwsR0FBRyxJQUFJeUwsTUFBTSxFQUFFO1FBQ3BCLElBQUlBLE1BQU0sQ0FBQ3JDLGNBQWMsQ0FBQ3BKLEdBQUcsQ0FBQyxFQUFFO1VBQzVCc04sUUFBUSxDQUFDQyxJQUFJLEVBQUV2TixHQUFHLEVBQUV5TCxNQUFNLENBQUN6TCxHQUFHLENBQUMsQ0FBQztRQUNwQztNQUNKO0lBRUosQ0FBQyxNQUFNO01BQ0g7TUFDQSxJQUFJeUwsTUFBTSxDQUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUMzQnNFLE1BQU0sR0FBR0EsTUFBTSxDQUFDclQsS0FBSyxDQUFDLENBQUMsQ0FBQztNQUM1QjtNQUVBLElBQUlrVyxLQUFLLEdBQUc3QyxNQUFNLENBQUMzUixLQUFLLENBQUMsR0FBRyxDQUFDO01BQzdCLEtBQUssSUFBSXNGLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR2tQLEtBQUssQ0FBQzVhLE1BQU0sRUFBRTBMLENBQUMsRUFBRSxFQUFFO1FBQ25DLElBQUlrSixLQUFLLEdBQUdnRyxLQUFLLENBQUVsUCxDQUFDLENBQUM7VUFDakJkLEtBQUssR0FBR2dLLEtBQUssQ0FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFFOUIsSUFBSSxDQUFDLENBQUMsR0FBRzdJLEtBQUssRUFBRTtVQUNaZ1AsUUFBUSxDQUFDQyxJQUFJLEVBQUVhLE1BQU0sQ0FBQzlGLEtBQUssQ0FBQ2xRLEtBQUssQ0FBQyxDQUFDLEVBQUVrRyxLQUFLLENBQUMsQ0FBQyxFQUFFOFAsTUFBTSxDQUFDOUYsS0FBSyxDQUFDbFEsS0FBSyxDQUFDa0csS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFakYsQ0FBQyxNQUFNO1VBQ0gsSUFBSWdLLEtBQUssRUFBRTtZQUNQZ0YsUUFBUSxDQUFDQyxJQUFJLEVBQUVhLE1BQU0sQ0FBQzlGLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQztVQUNyQztRQUNKO01BQ0o7SUFDSjtJQUVBLE9BQU9pRixJQUFJO0VBQ2Y7RUFFQSxTQUFTRCxRQUFRQSxDQUFDQyxJQUFJLEVBQUV0TCxJQUFJLEVBQUVxRyxLQUFLLEVBQUU7SUFDakMsSUFBSW5ILEdBQUcsR0FBRyxPQUFPbUgsS0FBSyxLQUFLLFFBQVEsR0FBR0EsS0FBSyxHQUN2Q0EsS0FBSyxLQUFLLElBQUksSUFBSUEsS0FBSyxLQUFLbFQsU0FBUyxJQUFJLE9BQU9rVCxLQUFLLENBQUM3TyxRQUFRLEtBQUssVUFBVSxHQUFHNk8sS0FBSyxDQUFDN08sUUFBUSxDQUFDLENBQUMsR0FBRzBDLElBQUksQ0FBQ0MsU0FBUyxDQUFDa00sS0FBSyxDQUMxSDtJQUVELElBQUlyRyxJQUFJLElBQUlzTCxJQUFJLEVBQUU7TUFDZEEsSUFBSSxDQUFDdEwsSUFBSSxDQUFDLENBQUMzRyxJQUFJLENBQUM2RixHQUFHLENBQUM7SUFDeEIsQ0FBQyxNQUFNO01BQ0hvTSxJQUFJLENBQUN0TCxJQUFJLENBQUMsR0FBRyxDQUFDZCxHQUFHLENBQUM7SUFDdEI7RUFDSjtBQUVKLENBQUMsRUFBRSxPQUFPMkcsTUFBTSxLQUFLLFdBQVcsR0FBR0EsTUFBTSxHQUFJLE9BQU83SyxNQUFNLEtBQUssV0FBVyxHQUFHQSxNQUFNLFNBQVEsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxVDVGLElBQUlzUixDQUFDOztBQUVMO0FBQ0FBLENBQUMsR0FBSSxZQUFXO0VBQ2YsT0FBTyxJQUFJO0FBQ1osQ0FBQyxDQUFFLENBQUM7QUFFSixJQUFJO0VBQ0g7RUFDQUEsQ0FBQyxHQUFHQSxDQUFDLElBQUksSUFBSUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUFDLE9BQU96SyxDQUFDLEVBQUU7RUFDWDtFQUNBLElBQUksUUFBTzlHLE1BQU0saUNBQUEyRixPQUFBLENBQU4zRixNQUFNLE9BQUssUUFBUSxFQUFFc1IsQ0FBQyxHQUFHdFIsTUFBTTtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUF0QyxNQUFNLENBQUN6RCxPQUFPLEdBQUdxWCxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0NuQkg7RUFDYkUsV0FBVyxFQUFFLElBQUk7RUFDakJoUSxLQUFLLEVBQUUsS0FBSztFQUNaaVEsc0JBQXNCLEVBQUUsS0FBSztFQUM3QkMsUUFBUSxFQUFFLEtBQUs7RUFDZmhLLE9BQU8sRUFBRSxLQUFLO0VBQUU7RUFDaEJpSyxxQkFBcUIsRUFBRTtBQUN6QixDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEQsSUFBQUMsWUFBQSxHQUFBelksc0JBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBeVksV0FBQSxHQUFBelksbUJBQUE7QUFFQSxJQUFBMFksTUFBQSxHQUFBM1ksc0JBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBMlksU0FBQSxHQUFBNVksc0JBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBNFksU0FBQSxHQUFBN1ksc0JBQUEsQ0FBQUMsbUJBQUE7QUFBa0MsSUFBQW5CLGVBQUEsRUFBQWdhLGdCQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGdCQUFBO0FBQUEsU0FBQWhaLHVCQUFBSyxHQUFBLFdBQUFBLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLEdBQUFELEdBQUEsS0FBQUUsT0FBQSxFQUFBRixHQUFBO0FBQUEsU0FBQTRZLHVCQUFBcmIsT0FBQSxFQUFBc2IsR0FBQSxTQUFBQSxHQUFBLElBQUFBLEdBQUEsR0FBQXRiLE9BQUEsQ0FBQW9FLEtBQUEsY0FBQXlILE1BQUEsQ0FBQTBQLE1BQUEsQ0FBQTFQLE1BQUEsQ0FBQXFNLGdCQUFBLENBQUFsWSxPQUFBLElBQUFzYixHQUFBLElBQUFoSCxLQUFBLEVBQUF6SSxNQUFBLENBQUEwUCxNQUFBLENBQUFELEdBQUE7QUFBQSxTQUFBRSxRQUFBekwsQ0FBQSxFQUFBakYsQ0FBQSxRQUFBMlEsQ0FBQSxHQUFBNVAsTUFBQSxDQUFBQyxJQUFBLENBQUFpRSxDQUFBLE9BQUFsRSxNQUFBLENBQUE2UCxxQkFBQSxRQUFBekksQ0FBQSxHQUFBcEgsTUFBQSxDQUFBNlAscUJBQUEsQ0FBQTNMLENBQUEsR0FBQWpGLENBQUEsS0FBQW1JLENBQUEsR0FBQUEsQ0FBQSxDQUFBL04sTUFBQSxXQUFBNEYsQ0FBQSxXQUFBZSxNQUFBLENBQUE4UCx3QkFBQSxDQUFBNUwsQ0FBQSxFQUFBakYsQ0FBQSxFQUFBMEMsVUFBQSxPQUFBaU8sQ0FBQSxDQUFBblUsSUFBQSxDQUFBbkcsS0FBQSxDQUFBc2EsQ0FBQSxFQUFBeEksQ0FBQSxZQUFBd0ksQ0FBQTtBQUFBLFNBQUFHLGNBQUE3TCxDQUFBLGFBQUFqRixDQUFBLE1BQUFBLENBQUEsR0FBQXJMLFNBQUEsQ0FBQUMsTUFBQSxFQUFBb0wsQ0FBQSxVQUFBMlEsQ0FBQSxXQUFBaGMsU0FBQSxDQUFBcUwsQ0FBQSxJQUFBckwsU0FBQSxDQUFBcUwsQ0FBQSxRQUFBQSxDQUFBLE9BQUEwUSxPQUFBLENBQUEzUCxNQUFBLENBQUE0UCxDQUFBLE9BQUExUCxPQUFBLFdBQUFqQixDQUFBLElBQUErUSxlQUFBLENBQUE5TCxDQUFBLEVBQUFqRixDQUFBLEVBQUEyUSxDQUFBLENBQUEzUSxDQUFBLFNBQUFlLE1BQUEsQ0FBQWlRLHlCQUFBLEdBQUFqUSxNQUFBLENBQUFxTSxnQkFBQSxDQUFBbkksQ0FBQSxFQUFBbEUsTUFBQSxDQUFBaVEseUJBQUEsQ0FBQUwsQ0FBQSxLQUFBRCxPQUFBLENBQUEzUCxNQUFBLENBQUE0UCxDQUFBLEdBQUExUCxPQUFBLFdBQUFqQixDQUFBLElBQUFlLE1BQUEsQ0FBQTBCLGNBQUEsQ0FBQXdDLENBQUEsRUFBQWpGLENBQUEsRUFBQWUsTUFBQSxDQUFBOFAsd0JBQUEsQ0FBQUYsQ0FBQSxFQUFBM1EsQ0FBQSxpQkFBQWlGLENBQUE7QUFBQSxTQUFBbkIsUUFBQXFFLENBQUEsc0NBQUFyRSxPQUFBLHdCQUFBb0YsTUFBQSx1QkFBQUEsTUFBQSxDQUFBQyxRQUFBLGFBQUFoQixDQUFBLGtCQUFBQSxDQUFBLGdCQUFBQSxDQUFBLFdBQUFBLENBQUEseUJBQUFlLE1BQUEsSUFBQWYsQ0FBQSxDQUFBOEksV0FBQSxLQUFBL0gsTUFBQSxJQUFBZixDQUFBLEtBQUFlLE1BQUEsQ0FBQWhELFNBQUEscUJBQUFpQyxDQUFBLEtBQUFyRSxPQUFBLENBQUFxRSxDQUFBO0FBQUEsU0FBQW5ULGdCQUFBa2MsUUFBQSxFQUFBQyxXQUFBLFVBQUFELFFBQUEsWUFBQUMsV0FBQSxlQUFBOUcsU0FBQTtBQUFBLFNBQUErRyxrQkFBQXBDLE1BQUEsRUFBQXFDLEtBQUEsYUFBQWxWLENBQUEsTUFBQUEsQ0FBQSxHQUFBa1YsS0FBQSxDQUFBemMsTUFBQSxFQUFBdUgsQ0FBQSxVQUFBbVYsVUFBQSxHQUFBRCxLQUFBLENBQUFsVixDQUFBLEdBQUFtVixVQUFBLENBQUE1TyxVQUFBLEdBQUE0TyxVQUFBLENBQUE1TyxVQUFBLFdBQUE0TyxVQUFBLENBQUEzTyxZQUFBLHdCQUFBMk8sVUFBQSxFQUFBQSxVQUFBLENBQUF0SCxRQUFBLFNBQUFqSixNQUFBLENBQUEwQixjQUFBLENBQUF1TSxNQUFBLEVBQUF1QyxjQUFBLENBQUFELFVBQUEsQ0FBQXBRLEdBQUEsR0FBQW9RLFVBQUE7QUFBQSxTQUFBRSxhQUFBTCxXQUFBLEVBQUFNLFVBQUEsRUFBQUMsV0FBQSxRQUFBRCxVQUFBLEVBQUFMLGlCQUFBLENBQUFELFdBQUEsQ0FBQWpMLFNBQUEsRUFBQXVMLFVBQUEsT0FBQUMsV0FBQSxFQUFBTixpQkFBQSxDQUFBRCxXQUFBLEVBQUFPLFdBQUEsR0FBQTNRLE1BQUEsQ0FBQTBCLGNBQUEsQ0FBQTBPLFdBQUEsaUJBQUFuSCxRQUFBLG1CQUFBbUgsV0FBQTtBQUFBLFNBQUFRLFdBQUFoQixDQUFBLEVBQUF4SSxDQUFBLEVBQUFsRCxDQUFBLFdBQUFrRCxDQUFBLEdBQUF5SixlQUFBLENBQUF6SixDQUFBLEdBQUEwSiwwQkFBQSxDQUFBbEIsQ0FBQSxFQUFBbUIseUJBQUEsS0FBQUMsT0FBQSxDQUFBaEQsU0FBQSxDQUFBNUcsQ0FBQSxFQUFBbEQsQ0FBQSxRQUFBMk0sZUFBQSxDQUFBakIsQ0FBQSxFQUFBTSxXQUFBLElBQUE5SSxDQUFBLENBQUE5UixLQUFBLENBQUFzYSxDQUFBLEVBQUExTCxDQUFBO0FBQUEsU0FBQTRNLDJCQUFBaFEsSUFBQSxFQUFBUyxJQUFBLFFBQUFBLElBQUEsS0FBQXdCLE9BQUEsQ0FBQXhCLElBQUEseUJBQUFBLElBQUEsMkJBQUFBLElBQUEsYUFBQUEsSUFBQSx5QkFBQStILFNBQUEsdUVBQUEySCxzQkFBQSxDQUFBblEsSUFBQTtBQUFBLFNBQUFtUSx1QkFBQW5RLElBQUEsUUFBQUEsSUFBQSx5QkFBQW9RLGNBQUEsd0VBQUFwUSxJQUFBO0FBQUEsU0FBQWlRLDBCQUFBLGNBQUFuQixDQUFBLElBQUF1QixPQUFBLENBQUFoTSxTQUFBLENBQUFpTSxPQUFBLENBQUE3UCxJQUFBLENBQUF5UCxPQUFBLENBQUFoRCxTQUFBLENBQUFtRCxPQUFBLGlDQUFBdkIsQ0FBQSxhQUFBbUIseUJBQUEsWUFBQUEsMEJBQUEsYUFBQW5CLENBQUE7QUFBQSxTQUFBeUIsS0FBQSxlQUFBTCxPQUFBLG9CQUFBQSxPQUFBLENBQUFuUCxHQUFBLElBQUF3UCxJQUFBLEdBQUFMLE9BQUEsQ0FBQW5QLEdBQUEsQ0FBQXJOLElBQUEsYUFBQTZjLElBQUEsWUFBQUEsS0FBQXBELE1BQUEsRUFBQXFELFFBQUEsRUFBQUMsUUFBQSxRQUFBeEcsSUFBQSxHQUFBeUcsY0FBQSxDQUFBdkQsTUFBQSxFQUFBcUQsUUFBQSxRQUFBdkcsSUFBQSxjQUFBMEcsSUFBQSxHQUFBelIsTUFBQSxDQUFBOFAsd0JBQUEsQ0FBQS9FLElBQUEsRUFBQXVHLFFBQUEsT0FBQUcsSUFBQSxDQUFBNVAsR0FBQSxXQUFBNFAsSUFBQSxDQUFBNVAsR0FBQSxDQUFBTixJQUFBLENBQUEzTixTQUFBLENBQUFDLE1BQUEsT0FBQW9hLE1BQUEsR0FBQXNELFFBQUEsWUFBQUUsSUFBQSxDQUFBaEosS0FBQSxjQUFBNEksSUFBQSxDQUFBL2IsS0FBQSxPQUFBMUIsU0FBQTtBQUFBLFNBQUE0ZCxlQUFBRSxNQUFBLEVBQUFKLFFBQUEsWUFBQXRSLE1BQUEsQ0FBQW1GLFNBQUEsQ0FBQW9FLGNBQUEsQ0FBQWhJLElBQUEsQ0FBQW1RLE1BQUEsRUFBQUosUUFBQSxLQUFBSSxNQUFBLEdBQUFiLGVBQUEsQ0FBQWEsTUFBQSxPQUFBQSxNQUFBLDJCQUFBQSxNQUFBO0FBQUEsU0FBQWIsZ0JBQUF6SixDQUFBLElBQUF5SixlQUFBLEdBQUE3USxNQUFBLENBQUEyUixjQUFBLEdBQUEzUixNQUFBLENBQUE0UixjQUFBLENBQUFwZCxJQUFBLGNBQUFxYyxnQkFBQXpKLENBQUEsV0FBQUEsQ0FBQSxDQUFBeUssU0FBQSxJQUFBN1IsTUFBQSxDQUFBNFIsY0FBQSxDQUFBeEssQ0FBQSxhQUFBeUosZUFBQSxDQUFBekosQ0FBQTtBQUFBLFNBQUEwSyxVQUFBQyxRQUFBLEVBQUFDLFVBQUEsZUFBQUEsVUFBQSxtQkFBQUEsVUFBQSx1QkFBQTFJLFNBQUEsMERBQUF5SSxRQUFBLENBQUE1TSxTQUFBLEdBQUFuRixNQUFBLENBQUFpUyxNQUFBLENBQUFELFVBQUEsSUFBQUEsVUFBQSxDQUFBN00sU0FBQSxJQUFBK0ssV0FBQSxJQUFBekgsS0FBQSxFQUFBc0osUUFBQSxFQUFBOUksUUFBQSxRQUFBckgsWUFBQSxhQUFBNUIsTUFBQSxDQUFBMEIsY0FBQSxDQUFBcVEsUUFBQSxpQkFBQTlJLFFBQUEsZ0JBQUErSSxVQUFBLEVBQUFFLGVBQUEsQ0FBQUgsUUFBQSxFQUFBQyxVQUFBO0FBQUEsU0FBQUUsZ0JBQUE5SyxDQUFBLEVBQUErSyxDQUFBLElBQUFELGVBQUEsR0FBQWxTLE1BQUEsQ0FBQTJSLGNBQUEsR0FBQTNSLE1BQUEsQ0FBQTJSLGNBQUEsQ0FBQW5kLElBQUEsY0FBQTBkLGdCQUFBOUssQ0FBQSxFQUFBK0ssQ0FBQSxJQUFBL0ssQ0FBQSxDQUFBeUssU0FBQSxHQUFBTSxDQUFBLFNBQUEvSyxDQUFBLFlBQUE4SyxlQUFBLENBQUE5SyxDQUFBLEVBQUErSyxDQUFBO0FBQUEsU0FBQW5DLGdCQUFBcFosR0FBQSxFQUFBdUosR0FBQSxFQUFBc0ksS0FBQSxJQUFBdEksR0FBQSxHQUFBcVEsY0FBQSxDQUFBclEsR0FBQSxPQUFBQSxHQUFBLElBQUF2SixHQUFBLElBQUFvSixNQUFBLENBQUEwQixjQUFBLENBQUE5SyxHQUFBLEVBQUF1SixHQUFBLElBQUFzSSxLQUFBLEVBQUFBLEtBQUEsRUFBQTlHLFVBQUEsUUFBQUMsWUFBQSxRQUFBcUgsUUFBQSxvQkFBQXJTLEdBQUEsQ0FBQXVKLEdBQUEsSUFBQXNJLEtBQUEsV0FBQTdSLEdBQUE7QUFBQSxTQUFBNFosZUFBQVosQ0FBQSxRQUFBeFUsQ0FBQSxHQUFBZ1gsWUFBQSxDQUFBeEMsQ0FBQSxnQ0FBQTdNLE9BQUEsQ0FBQTNILENBQUEsSUFBQUEsQ0FBQSxHQUFBQSxDQUFBO0FBQUEsU0FBQWdYLGFBQUF4QyxDQUFBLEVBQUEzUSxDQUFBLG9CQUFBOEQsT0FBQSxDQUFBNk0sQ0FBQSxNQUFBQSxDQUFBLFNBQUFBLENBQUEsTUFBQTFMLENBQUEsR0FBQTBMLENBQUEsQ0FBQXpILE1BQUEsQ0FBQWtLLFdBQUEsa0JBQUFuTyxDQUFBLFFBQUE5SSxDQUFBLEdBQUE4SSxDQUFBLENBQUEzQyxJQUFBLENBQUFxTyxDQUFBLEVBQUEzUSxDQUFBLGdDQUFBOEQsT0FBQSxDQUFBM0gsQ0FBQSxVQUFBQSxDQUFBLFlBQUFrTyxTQUFBLHlFQUFBckssQ0FBQSxHQUFBb0UsTUFBQSxHQUFBbEssTUFBQSxFQUFBeVcsQ0FBQTtBQUFBLElBRTVCMEMsU0FBUywwQkFBQUMsUUFBQTtFQTBKYjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDRSxTQUFBRCxVQUFBLEVBQXNCO0lBQUEsSUFBQTVlLEtBQUE7SUFBQSxJQUFWa0QsR0FBRyxHQUFBaEQsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQTJCLFNBQUEsR0FBQTNCLFNBQUEsTUFBRyxDQUFDLENBQUM7SUFBQUssZUFBQSxPQUFBcWUsU0FBQTtJQUNsQjVlLEtBQUEsR0FBQWtkLFVBQUEsT0FBQTBCLFNBQUE7SUFsSEY7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQVBFdEMsZUFBQSxDQUFBdGMsS0FBQSw0QkFReUIsSUFBSTtJQUU3QjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFMRXNjLGVBQUEsQ0FBQXRjLEtBQUEsaUJBTWMsSUFBSTtJQUVsQjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQU5Fc2MsZUFBQSxDQUFBdGMsS0FBQSxhQU9VLElBQUk7SUFFZDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFMRXNjLGVBQUEsQ0FBQXRjLEtBQUEsYUFNVSxJQUFJO0lBRWQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBTEVzYyxlQUFBLENBQUF0YyxLQUFBLGdCQU1hLElBQUk7SUFFakI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBTEVzYyxlQUFBLENBQUF0YyxLQUFBLGVBTVksSUFBSTtJQUVoQjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFMRXNjLGVBQUEsQ0FBQXRjLEtBQUEsa0JBTWUsSUFBSTtJQUVuQjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFMRXNjLGVBQUEsQ0FBQXRjLEtBQUEsYUFNVSxLQUFLO0lBRWY7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBTEVzYyxlQUFBLENBQUF0YyxLQUFBLGNBTVcsS0FBSztJQUVoQjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFMRXNjLGVBQUEsQ0FBQXRjLEtBQUEscUJBTWtCLEtBQUs7SUFFdkI7QUFDRjtBQUNBO0FBQ0E7SUFIRXNjLGVBQUEsQ0FBQXRjLEtBQUEsc0JBSW1CQSxLQUFBLENBQUs4ZSxnQkFBZ0IsQ0FBQ2hlLElBQUksQ0FBQWQsS0FBSyxDQUFDO0lBRW5EO0FBQ0Y7QUFDQTtBQUNBO0lBSEVzYyxlQUFBLENBQUF0YyxLQUFBLG9CQUlpQkEsS0FBQSxDQUFLK2UsY0FBYyxDQUFDamUsSUFBSSxDQUFBZCxLQUFLLENBQUM7SUFFL0M7QUFDRjtBQUNBO0FBQ0E7SUFIRXNjLGVBQUEsQ0FBQXRjLEtBQUEscUJBSWtCQSxLQUFBLENBQUtnZixlQUFlLENBQUNsZSxJQUFJLENBQUFkLEtBQUssQ0FBQztJQUVqRDtBQUNGO0FBQ0E7QUFDQTtJQUhFc2MsZUFBQSxDQUFBdGMsS0FBQSxnQkFJYUEsS0FBQSxDQUFLaWYsVUFBVSxDQUFDbmUsSUFBSSxDQUFBZCxLQUFLLENBQUM7SUFXckNrTCxjQUFLLENBQUNnVSxJQUFJLENBQUMsNkNBQTZDLEVBQUVoYyxHQUFHLENBQUM7SUFFOUQsSUFBSUEsR0FBRyxJQUFJbU0sT0FBQSxDQUFPbk0sR0FBRyxNQUFLLFFBQVEsRUFBRTtNQUNsQ2xELEtBQUEsQ0FBS21mLFdBQVcsR0FBQTlDLGFBQUEsS0FBUW5aLEdBQUcsQ0FBRTtJQUMvQixDQUFDLE1BQU07TUFDTCxNQUFNLElBQUkwUyxTQUFTLENBQUMsaUNBQWlDLENBQUM7SUFDeEQ7SUFBQyxPQUFBNVYsS0FBQTtFQUNIOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFQRW9lLFNBQUEsQ0FBQVEsU0FBQSxFQUFBQyxRQUFBO0VBQUEsT0FBQTlCLFlBQUEsQ0FBQTZCLFNBQUE7SUFBQW5TLEdBQUE7SUFBQXNJLEtBQUEsRUFRQSxTQUFBcUssZUFBZUMsTUFBTSxFQUFFO01BQ3JCLElBQU16UixHQUFHLEdBQUcsSUFBSSxDQUFDMFIsT0FBTyxDQUFDQyxRQUFRO01BRWpDLElBQUksQ0FBQzNSLEdBQUcsRUFBRTtRQUNSLE1BQU0sSUFBSWdJLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQztNQUMvQztNQUVBLElBQUksT0FBT2hJLEdBQUcsS0FBSyxRQUFRLEVBQUU7UUFDM0IsTUFBTSxJQUFJZ0ksU0FBUyxDQUFDLDZCQUE2QixDQUFDO01BQ3BEO01BRUF5SixNQUFNLENBQUMzSixNQUFNLENBQUMsV0FBVyxFQUFFOUgsR0FBRyxDQUFDO0lBQ2pDOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFQRTtJQUFBbkIsR0FBQTtJQUFBc0ksS0FBQSxFQVFBLFNBQUF5SyxZQUFZSCxNQUFNLEVBQUU7TUFDbEIsSUFBTXpSLEdBQUcsR0FBRyxJQUFJLENBQUMwUixPQUFPLENBQUNwVSxLQUFLO01BRTlCLElBQUksT0FBTzBDLEdBQUcsS0FBSyxTQUFTLEVBQUU7UUFDNUIsTUFBTSxJQUFJZ0ksU0FBUyxDQUFDLDJCQUEyQixDQUFDO01BQ2xEO01BRUF5SixNQUFNLENBQUMzSixNQUFNLENBQUMsT0FBTyxFQUFFOUgsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckM7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQVBFO0lBQUFuQixHQUFBO0lBQUFzSSxLQUFBLEVBUUEsU0FBQTBLLHNCQUFzQkosTUFBTSxFQUFFO01BQzVCLElBQUksaUJBQWlCLElBQUksSUFBSSxDQUFDQyxPQUFPLEVBQUU7UUFDckMsSUFBTTFSLEdBQUcsR0FBRyxJQUFJLENBQUMwUixPQUFPLENBQUNJLGVBQWU7UUFFeEMsSUFBSSxPQUFPOVIsR0FBRyxLQUFLLFFBQVEsRUFBRTtVQUMzQixNQUFNLElBQUlnSSxTQUFTLENBQUMsb0NBQW9DLENBQUM7UUFDM0Q7UUFFQSxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDdFAsUUFBUSxDQUFDc0gsR0FBRyxDQUFDLEVBQUU7VUFDL0MsTUFBTSxJQUFJZ0ksU0FBUyxDQUFDLGdFQUFnRSxDQUFDO1FBQ3ZGO1FBRUF5SixNQUFNLENBQUMzSixNQUFNLENBQUMsbUJBQW1CLEVBQUU5SCxHQUFHLENBQUM7TUFDekM7SUFDRjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBUEU7SUFBQW5CLEdBQUE7SUFBQXNJLEtBQUEsRUFRQSxTQUFBNEssaUJBQWlCTixNQUFNLEVBQUU7TUFDdkIsSUFBSSxZQUFZLElBQUksSUFBSSxDQUFDQyxPQUFPLEVBQUU7UUFDaEMsSUFBTTFSLEdBQUcsR0FBRyxJQUFJLENBQUMwUixPQUFPLENBQUNNLFVBQVU7UUFFbkMsSUFBSSxPQUFPaFMsR0FBRyxLQUFLLFNBQVMsRUFBRTtVQUM1QixNQUFNLElBQUlnSSxTQUFTLENBQUMsZ0NBQWdDLENBQUM7UUFDdkQ7UUFFQXlKLE1BQU0sQ0FBQzNKLE1BQU0sQ0FBQyxhQUFhLEVBQUU5SCxHQUFHLENBQUM7TUFDbkM7SUFDRjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQU5FO0lBQUFuQixHQUFBO0lBQUFzSSxLQUFBLEVBT0EsU0FBQThLLGFBQWFSLE1BQU0sRUFBRTtNQUNuQixJQUFNelIsR0FBRyxHQUFHLElBQUksQ0FBQzBSLE9BQU8sQ0FBQ1EsTUFBTTtNQUUvQixJQUFJbFMsR0FBRyxLQUFLLE9BQU8sRUFBRTtRQUNuQnJFLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLDJEQUEyRCxDQUFDO01BQzNFOztNQUVBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQSxJQUFJb0UsR0FBRyxJQUFJQSxHQUFHLENBQUN6TixNQUFNLEVBQUU7UUFDckJrZixNQUFNLENBQUMzSixNQUFNLENBQUMsY0FBYyxFQUFFOUgsR0FBRyxDQUFDO01BQ3BDO0lBQ0Y7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFORTtJQUFBbkIsR0FBQTtJQUFBc0ksS0FBQSxFQU9BLFNBQUFnTCxnQkFBZ0JWLE1BQU0sRUFBRTtNQUN0QkEsTUFBTSxDQUFDM0osTUFBTSxDQUFDLFlBQVksRUFBRTNMLFFBQVEsQ0FBQ2lKLFFBQVEsQ0FBQ2dFLElBQUksQ0FBQztJQUNyRDs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBUEU7SUFBQXZLLEdBQUE7SUFBQXNJLEtBQUEsRUFRQSxTQUFBaUwsaUJBQWlCWCxNQUFNLEVBQUU7TUFDdkIsSUFBSSxZQUFZLElBQUksSUFBSSxDQUFDQyxPQUFPLEVBQUU7UUFDaEMsSUFBTTFSLEdBQUcsR0FBRyxJQUFJLENBQUMwUixPQUFPLENBQUNXLFVBQVU7UUFFbkMsSUFBSSxPQUFPclMsR0FBRyxLQUFLLFFBQVEsRUFBRTtVQUMzQixNQUFNLElBQUlnSSxTQUFTLENBQUMsK0JBQStCLENBQUM7UUFDdEQ7UUFFQXlKLE1BQU0sQ0FBQzNKLE1BQU0sQ0FBQyxjQUFjLEVBQUU5SCxHQUFHLENBQUM7TUFDcEM7SUFDRjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBUEU7SUFBQW5CLEdBQUE7SUFBQXNJLEtBQUEsRUFRQSxTQUFBbUwsc0JBQXNCYixNQUFNLEVBQUU7TUFDNUIsSUFBSSxpQkFBaUIsSUFBSSxJQUFJLENBQUNDLE9BQU8sRUFBRTtRQUNyQyxJQUFNMVIsR0FBRyxHQUFHLElBQUksQ0FBQzBSLE9BQU8sQ0FBQ2EsZUFBZTtRQUV4QyxJQUFJLE9BQU92UyxHQUFHLEtBQUssUUFBUSxFQUFFO1VBQzNCLE1BQU0sSUFBSWdJLFNBQVMsQ0FBQyxvQ0FBb0MsQ0FBQztRQUMzRDtRQUVBeUosTUFBTSxDQUFDM0osTUFBTSxDQUFDLFdBQVcsRUFBRTlILEdBQUcsQ0FBQztNQUNqQztJQUNGOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFQRTtJQUFBbkIsR0FBQTtJQUFBc0ksS0FBQSxFQVFBLFNBQUFxTCxlQUFlZixNQUFNLEVBQUU7TUFDckIsSUFBTXpSLEdBQUcsR0FBRyxJQUFJLENBQUMwUixPQUFPLENBQUNuRSxzQkFBc0IsSUFBSSxJQUFJLENBQUNtRSxPQUFPLENBQUNsRSxRQUFRO01BRXhFLElBQUksT0FBT3hOLEdBQUcsS0FBSyxTQUFTLEVBQUU7UUFDNUIsTUFBTSxJQUFJZ0ksU0FBUyxDQUFDLDhCQUE4QixDQUFDO01BQ3JEO01BRUF5SixNQUFNLENBQUMzSixNQUFNLENBQUMsMEJBQTBCLEVBQUU5SCxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4RDs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBUEU7SUFBQW5CLEdBQUE7SUFBQXNJLEtBQUEsRUFRQSxTQUFBc0wsb0JBQW9CaEIsTUFBTSxFQUFFO01BQzFCLElBQUksZUFBZSxJQUFJLElBQUksQ0FBQ0MsT0FBTyxFQUFFO1FBQ25DLElBQU0xUixHQUFHLEdBQUcsSUFBSSxDQUFDMFIsT0FBTyxDQUFDZ0IsYUFBYTtRQUV0QyxJQUFJalIsT0FBQSxDQUFPekIsR0FBRyxNQUFLLFFBQVEsRUFBRTtVQUMzQixNQUFNLElBQUlnSSxTQUFTLENBQUMsbUNBQW1DLENBQUM7UUFDMUQ7UUFFQXlKLE1BQU0sQ0FBQzNKLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRTlNLElBQUksQ0FBQ0MsU0FBUyxDQUFDK0UsR0FBRyxDQUFDLENBQUM7TUFDOUQ7SUFDRjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQU5FO0lBQUFuQixHQUFBO0lBQUFzSSxLQUFBLEVBT0EsU0FBQXdMLGdCQUFnQmxCLE1BQU0sRUFBRTtNQUN0QkEsTUFBTSxDQUFDM0osTUFBTSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUM7SUFDbEM7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFORTtJQUFBakosR0FBQTtJQUFBc0ksS0FBQSxFQU9BLFNBQUF5TCxjQUFjbkIsTUFBTSxFQUFFO01BQ3BCQSxNQUFNLENBQUMzSixNQUFNLENBQUMsWUFBWSxFQUFFK0ssUUFBZSxDQUFDO0lBQzlDOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTkU7SUFBQWhVLEdBQUE7SUFBQXNJLEtBQUEsRUFPQSxTQUFBMkwsZ0JBQWdCQyxRQUFRLEVBQUU7TUFDeEIsSUFBTXRCLE1BQU0sR0FBRyxJQUFJaEssZUFBZSxDQUFDc0wsUUFBUSxDQUFDekksTUFBTSxDQUFDO01BRW5ELElBQUksQ0FBQ2tILGNBQWMsQ0FBQ0MsTUFBTSxDQUFDO01BQzNCLElBQUksQ0FBQ0csV0FBVyxDQUFDSCxNQUFNLENBQUM7TUFDeEIsSUFBSSxDQUFDSSxxQkFBcUIsQ0FBQ0osTUFBTSxDQUFDO01BQ2xDLElBQUksQ0FBQ00sZ0JBQWdCLENBQUNOLE1BQU0sQ0FBQztNQUM3QixJQUFJLENBQUNRLFlBQVksQ0FBQ1IsTUFBTSxDQUFDO01BQ3pCLElBQUksQ0FBQ1UsZUFBZSxDQUFDVixNQUFNLENBQUM7TUFDNUIsSUFBSSxDQUFDVyxnQkFBZ0IsQ0FBQ1gsTUFBTSxDQUFDO01BQzdCLElBQUksQ0FBQ2EscUJBQXFCLENBQUNiLE1BQU0sQ0FBQztNQUNsQyxJQUFJLENBQUNlLGNBQWMsQ0FBQ2YsTUFBTSxDQUFDO01BQzNCLElBQUksQ0FBQ2tCLGVBQWUsQ0FBQ2xCLE1BQU0sQ0FBQztNQUM1QixJQUFJLENBQUNtQixhQUFhLENBQUNuQixNQUFNLENBQUM7TUFDMUIsSUFBSSxDQUFDZ0IsbUJBQW1CLENBQUNoQixNQUFNLENBQUM7TUFFaEMsT0FBT0EsTUFBTTtJQUNmOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxFO0lBQUE1UyxHQUFBO0lBQUFzSSxLQUFBLEVBTUEsU0FBQTZMLGdCQUFnQnhKLEdBQUcsRUFBRTtNQUNuQixJQUFNdUosUUFBUSxHQUFHLElBQUk1SixHQUFHLENBQUNLLEdBQUcsQ0FBQztNQUM3QixJQUFNeUosV0FBVyxHQUFHLElBQUksQ0FBQ0gsZUFBZSxDQUFDQyxRQUFRLENBQUM7TUFFbERBLFFBQVEsQ0FBQ3pJLE1BQU0sR0FBRzJJLFdBQVcsQ0FBQzNhLFFBQVEsQ0FBQyxDQUFDO01BRXhDLElBQUksQ0FBQzRhLFVBQVUsR0FBR0gsUUFBUTtJQUM1Qjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQVRFO0lBQUFsVSxHQUFBO0lBQUFzSSxLQUFBLEVBVUEsU0FBQWdNLGNBQUEsRUFBZ0I7TUFDZCxJQUFNQyxJQUFJLEdBQUdqWCxRQUFRLENBQUMyTixhQUFhLENBQUMsS0FBSyxDQUFDO01BRTFDLElBQUksSUFBSSxDQUFDNEgsT0FBTyxDQUFDMkIsU0FBUyxFQUFFO1FBQzFCRCxJQUFJLENBQUNFLFNBQVMsT0FBRzlhLG9CQUFRLEVBQUF6RSxlQUFBLEtBQUFBLGVBQUEsR0FBQW1hLHNCQUFBLHVKQUNUcUYsaUJBQVEsQ0FBQ0MsVUFBVSxDQUFDQyxJQUFJLEVBQ25CRixpQkFBUSxDQUFDQyxVQUFVLENBQUNFLE1BQU0sRUFBV0gsaUJBQVEsQ0FBQ0ksTUFBTSxDQUFDQyxJQUFJLEVBQVUsSUFBSSxDQUFDVixVQUFVLENBQUM5SixJQUFJLENBRTNHO01BQ0gsQ0FBQyxNQUFNO1FBQ0xnSyxJQUFJLENBQUNFLFNBQVMsR0FBRyxJQUFBOWEsb0JBQVEsRUFBQXVWLGdCQUFBLEtBQUFBLGdCQUFBLEdBQUFHLHNCQUFBLDBIQUNUcUYsaUJBQVEsQ0FBQ0MsVUFBVSxDQUFDQyxJQUFJLEVBQUlGLGlCQUFRLENBQUNDLFVBQVUsQ0FBQ0ssYUFBYSxFQUMzRE4saUJBQVEsQ0FBQ0MsVUFBVSxDQUFDTSxZQUFZLEVBQ2hDUCxpQkFBUSxDQUFDQyxVQUFVLENBQUNPLGFBQWEsS0FFakQsSUFBSSxDQUFDckMsT0FBTyxDQUFDcEUsV0FBVyxPQUFHOVUsb0JBQVEsRUFBQXdWLGdCQUFBLEtBQUFBLGdCQUFBLEdBQUFFLHNCQUFBLDZKQUNwQnFGLGlCQUFRLENBQUNDLFVBQVUsQ0FBQ1EsV0FBVyxFQUMxQlQsaUJBQVEsQ0FBQ0MsVUFBVSxDQUFDUyxlQUFlLElBRW5ELEVBQUUsQ0FDUCxPQUFHemIsb0JBQVEsRUFBQXlWLGdCQUFBLEtBQUFBLGdCQUFBLEdBQUFDLHNCQUFBLDZJQUNXcUYsaUJBQVEsQ0FBQ0MsVUFBVSxDQUFDRSxNQUFNLEVBQVdILGlCQUFRLENBQUNJLE1BQU0sQ0FBQ0MsSUFBSSxFQUFVLElBQUksQ0FBQ1YsVUFBVSxDQUFDOUosSUFBSSxDQUc3RztNQUNIO01BRUEsT0FBT2dLLElBQUksQ0FBQ2MsVUFBVTtJQUN4Qjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQXJWLEdBQUE7SUFBQXNJLEtBQUEsRUFLQSxTQUFBZ04sY0FBQSxFQUFnQjtNQUNkLElBQUksQ0FBQ0MsT0FBTyxHQUFHLElBQUksQ0FBQ2pCLGFBQWEsQ0FBQyxDQUFDOztNQUVuQztNQUNBO01BQ0E7TUFDQSxJQUFJLENBQUNpQixPQUFPLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNuRCxnQkFBZ0IsQ0FBQzs7TUFFN0Q7TUFDQSxJQUFJLENBQUNvRCxTQUFTLEdBQUcsSUFBSSxDQUFDRixPQUFPLENBQUNHLHNCQUFzQixDQUFDaEIsaUJBQVEsQ0FBQ0MsVUFBVSxDQUFDRSxNQUFNLENBQUMsQ0FBQy9aLElBQUksQ0FBQyxDQUFDLENBQUM7O01BRXhGO01BQ0EsSUFBSSxJQUFJLENBQUMrWCxPQUFPLENBQUMyQixTQUFTLEVBQUU7UUFDMUIsSUFBSSxDQUFDM0IsT0FBTyxDQUFDMkIsU0FBUyxDQUFDckosV0FBVyxDQUFDLElBQUksQ0FBQ29LLE9BQU8sQ0FBQztNQUNsRCxDQUFDLE1BQU07UUFDTGpZLFFBQVEsQ0FBQ2dPLElBQUksQ0FBQ0gsV0FBVyxDQUFDLElBQUksQ0FBQ29LLE9BQU8sQ0FBQztNQUN6QztJQUNGOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxFO0lBQUF2VixHQUFBO0lBQUFzSSxLQUFBLEVBTUEsU0FBQXFOLGFBQUEsRUFBZTtNQUNiLElBQUksQ0FBQ0osT0FBTyxDQUFDSyxhQUFhLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUNOLE9BQU8sQ0FBQztJQUN0RDs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztJQUVFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTkU7SUFBQXZWLEdBQUE7SUFBQXNJLEtBQUEsRUFPQSxTQUFBd04sYUFBYUMsR0FBRyxFQUFFO01BQ2hCdFgsY0FBSyxDQUFDZ1UsSUFBSSxDQUFDLGlCQUFpQixFQUFFc0QsR0FBRyxDQUFDO01BRWxDLElBQU1DLFlBQVksR0FBRyxJQUFJLENBQUMzQixVQUFVLENBQUM5SixJQUFJO01BQ3pDLElBQU0wTCxZQUFZLEdBQUcsSUFBSSxDQUFDUixTQUFTLENBQUNTLGFBQWE7TUFFakRELFlBQVksQ0FBQ0UsV0FBVyxDQUFDSixHQUFHLEVBQUVDLFlBQVksQ0FBQztJQUM3Qzs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQWhXLEdBQUE7SUFBQXNJLEtBQUEsRUFLQSxTQUFBOE4sMEJBQUEsRUFBNEI7TUFDMUIzWCxjQUFLLENBQUNnVSxJQUFJLENBQUMsZ0NBQWdDLENBQUM7TUFFNUMsSUFBSSxDQUFDcUQsWUFBWSxDQUFDO1FBQ2hCOWIsSUFBSSxFQUFFMGEsaUJBQVEsQ0FBQzJCLFFBQVEsQ0FBQ0M7TUFDMUIsQ0FBQyxDQUFDO0lBQ0o7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtFQUpFO0lBQUF0VyxHQUFBO0lBQUFzSSxLQUFBLEVBS0EsU0FBQWlPLDBCQUFBLEVBQTRCO01BQzFCOVgsY0FBSyxDQUFDZ1UsSUFBSSxDQUFDLG1DQUFtQyxDQUFDO01BRS9DLElBQUksQ0FBQ3FELFlBQVksQ0FBQztRQUNoQjliLElBQUksRUFBRTBhLGlCQUFRLENBQUMyQixRQUFRLENBQUNHLGFBQWE7UUFDckNDLE9BQU8sRUFBRTtVQUNQaEksV0FBVyxFQUFFLElBQUksQ0FBQ29FLE9BQU8sQ0FBQ3BFO1FBQzVCO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTEU7SUFBQXpPLEdBQUE7SUFBQXNJLEtBQUEsRUFNQSxTQUFBb08sK0JBQStCQyxLQUFLLEVBQUU7TUFDcENsWSxjQUFLLENBQUNnVSxJQUFJLENBQUMscUNBQXFDLEVBQUVrRSxLQUFLLENBQUM7TUFFeEQsSUFBSSxDQUFDYixZQUFZLENBQUM7UUFDaEI5YixJQUFJLEVBQUUwYSxpQkFBUSxDQUFDMkIsUUFBUSxDQUFDTywwQkFBMEI7UUFDbERILE9BQU8sRUFBRTtVQUNQRSxLQUFLLEVBQUxBO1FBQ0Y7TUFDRixDQUFDLENBQUM7SUFDSjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQTNXLEdBQUE7SUFBQXNJLEtBQUEsRUFLQSxTQUFBdU8sZ0NBQUEsRUFBa0M7TUFDaENwWSxjQUFLLENBQUNnVSxJQUFJLENBQUMsc0NBQXNDLENBQUM7TUFFbEQsSUFBSSxDQUFDcUQsWUFBWSxDQUFDO1FBQ2hCOWIsSUFBSSxFQUFFMGEsaUJBQVEsQ0FBQzJCLFFBQVEsQ0FBQ1MsU0FBUztRQUNqQ0wsT0FBTyxFQUFFO1VBQ1BuWCxPQUFPLEVBQUU7UUFDWDtNQUNGLENBQUMsQ0FBQztJQUNKOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFKRTtJQUFBVSxHQUFBO0lBQUFzSSxLQUFBLEVBS0EsU0FBQXlPLGtCQUFBLEVBQW9CO01BQ2xCLElBQUksSUFBSSxDQUFDQyxZQUFZLEVBQUU7UUFDckJ2WSxjQUFLLENBQUNnVSxJQUFJLENBQUMsaUNBQWlDLENBQUM7UUFFN0N6TyxZQUFZLENBQUMsSUFBSSxDQUFDZ1QsWUFBWSxDQUFDO1FBRS9CLElBQUksQ0FBQ0EsWUFBWSxHQUFHLElBQUk7TUFDMUI7SUFDRjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQWhYLEdBQUE7SUFBQXNJLEtBQUEsRUFLQSxTQUFBMk8sa0JBQUEsRUFBb0I7TUFDbEJ4WSxjQUFLLENBQUNnVSxJQUFJLENBQUMsaUNBQWlDLENBQUM7TUFFN0MsSUFBSSxDQUFDc0UsaUJBQWlCLENBQUMsQ0FBQztNQUV4QixJQUFJLENBQUNDLFlBQVksR0FBR2xULFVBQVUsQ0FBQyxJQUFJLENBQUN3TyxjQUFjLEVBQUUsSUFBSSxDQUFDTyxPQUFPLENBQUNsTyxPQUFPLENBQUM7SUFDM0U7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTEU7SUFBQTNFLEdBQUE7SUFBQXNJLEtBQUEsRUFNQSxTQUFBNE8sdUJBQUEsRUFBeUI7TUFDdkIsSUFBSSxJQUFJLENBQUM3QyxVQUFVLENBQUM5SixJQUFJLENBQUMxUSxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUU7UUFDakQ7UUFDQTtRQUNBLElBQUksQ0FBQ29kLGlCQUFpQixDQUFDLENBQUM7TUFDMUI7SUFDRjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFSRTtJQUFBalgsR0FBQTtJQUFBc0ksS0FBQSxFQVNBLFNBQUE2TyxpQkFBQSxFQUFtQjtNQUNqQixJQUFNQyxRQUFRLEdBQUc5WixRQUFRLENBQUMrWixhQUFhLENBQUMscUJBQXFCLENBQUM7TUFFOUQsSUFBSUQsUUFBUSxFQUFFO1FBQ1osSUFBTXJjLE9BQU8sR0FBR3FjLFFBQVEsQ0FBQ0UsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUU7UUFDdEQsSUFBTUMsZUFBZSxHQUFHeGMsT0FBTyxDQUFDakIsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7UUFFN0M7UUFDQTtRQUNBLElBQUksQ0FBQ2lCLE9BQU8sQ0FBQ2xCLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1VBQ3hDMGQsZUFBZSxDQUFDamMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ3pDO1FBRUEsSUFBTWtjLFVBQVUsR0FBR0QsZUFBZSxDQUFDdGYsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUM1QyxJQUFJdWYsVUFBVSxLQUFLSixRQUFRLENBQUNFLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBRTtVQUNuREYsUUFBUSxDQUFDSyxZQUFZLENBQUMsU0FBUyxFQUFFRCxVQUFVLENBQUM7VUFDNUMsSUFBSSxDQUFDRSxzQkFBc0IsR0FBRzNjLE9BQU87UUFDdkM7TUFDRjtJQUNGOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxFO0lBQUFpRixHQUFBO0lBQUFzSSxLQUFBLEVBTUEsU0FBQXFQLGlCQUFBLEVBQW1CO01BQ2pCLElBQUksSUFBSSxDQUFDRCxzQkFBc0IsRUFBRTtRQUMvQixJQUFNTixRQUFRLEdBQUc5WixRQUFRLENBQUMrWixhQUFhLENBQUMscUJBQXFCLENBQUM7UUFFOURELFFBQVEsQ0FBQ0ssWUFBWSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUNDLHNCQUFzQixDQUFDO1FBRTdELElBQUksQ0FBQ0Esc0JBQXNCLEdBQUcsSUFBSTtNQUNwQztJQUNGOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQU5FO0lBQUExWCxHQUFBO0lBQUFzSSxLQUFBLEVBT0EsU0FBQXNQLGFBQWFuQixPQUFPLEVBQUU7TUFDcEJoWSxjQUFLLENBQUNJLEtBQUssQ0FBQyxxQ0FBcUMsRUFBRTRYLE9BQU8sQ0FBQ29CLElBQUksQ0FBQztNQUVoRSxJQUFJLENBQUNoUyxJQUFJLENBQUM2TyxpQkFBUSxDQUFDb0QsTUFBTSxDQUFDQyxLQUFLLEVBQUV0QixPQUFPLENBQUM7SUFDM0M7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7SUFFRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQU5FO0lBQUF6VyxHQUFBO0lBQUFzSSxLQUFBLEVBT0EsU0FBQTBQLGtCQUFrQnZCLE9BQU8sRUFBRTtNQUN6QmhZLGNBQUssQ0FBQ2dVLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztNQUVqQyxJQUFJLENBQUN3RixRQUFRLEdBQUcsSUFBSTtNQUVwQixJQUFJLENBQUMxQix5QkFBeUIsQ0FBQyxDQUFDO01BQ2hDLElBQUksQ0FBQ1EsaUJBQWlCLENBQUMsQ0FBQztNQUV4QjlaLE1BQU0sQ0FBQ3VZLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUNqRCxlQUFlLENBQUM7TUFFN0QsSUFBSSxDQUFDMU0sSUFBSSxDQUFDNk8saUJBQVEsQ0FBQ29ELE1BQU0sQ0FBQ0ksS0FBSyxFQUFFekIsT0FBTyxDQUFDO0lBQzNDOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTkU7SUFBQXpXLEdBQUE7SUFBQXNJLEtBQUEsRUFPQSxTQUFBNlAsaUNBQUFDLElBQUEsRUFBNEM7TUFBQSxJQUFUekIsS0FBSyxHQUFBeUIsSUFBQSxDQUFMekIsS0FBSztNQUN0Q2xZLGNBQUssQ0FBQ2dVLElBQUksQ0FBQyxtQ0FBbUMsRUFBRWtFLEtBQUssQ0FBQztNQUV0RCxJQUFJLENBQUNELDhCQUE4QixDQUFDQyxLQUFLLENBQUM7SUFDNUM7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFQRTtJQUFBM1csR0FBQTtJQUFBc0ksS0FBQSxFQVFBLFNBQUErUCxtQkFBQUMsS0FBQSxFQUFxQztNQUFBLElBQWhCamMsSUFBSSxHQUFBaWMsS0FBQSxDQUFKamMsSUFBSTtRQUFFdVEsTUFBTSxHQUFBMEwsS0FBQSxDQUFOMUwsTUFBTTtNQUMvQm5PLGNBQUssQ0FBQ2dVLElBQUksQ0FBQyxrQkFBa0IsRUFBRXBXLElBQUksRUFBRXVRLE1BQU0sQ0FBQztNQUU1QyxJQUFJLENBQUMvRyxJQUFJLENBQUM2TyxpQkFBUSxDQUFDb0QsTUFBTSxDQUFDUyxPQUFPLEVBQUVsYyxJQUFJLENBQUM7TUFFeEMsSUFBSSxDQUFDbWMsZ0JBQWdCLENBQUNuYyxJQUFJLENBQUM7SUFDN0I7O0lBRUE7QUFDRjtBQUNBOztJQUVFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxFO0lBQUEyRCxHQUFBO0lBQUFzSSxLQUFBLEVBTUEsU0FBQW1RLHNCQUFBLEVBQXdCO01BQ3RCaGEsY0FBSyxDQUFDZ1UsSUFBSSxDQUFDLHFDQUFxQyxDQUFDO01BRWpELElBQUksQ0FBQzVNLElBQUksQ0FBQzZPLGlCQUFRLENBQUNvRCxNQUFNLENBQUNZLE1BQU0sQ0FBQztNQUVqQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDO0lBQ2Q7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQU5FO0lBQUEzWSxHQUFBO0lBQUFzSSxLQUFBLEVBT0EsU0FBQXNRLHVCQUF1Qm5DLE9BQU8sRUFBRTtNQUM5QmhZLGNBQUssQ0FBQ2dVLElBQUksQ0FBQyw2Q0FBNkMsQ0FBQztNQUV6RCxJQUFJLENBQUM1TSxJQUFJLENBQUM2TyxpQkFBUSxDQUFDb0QsTUFBTSxDQUFDZSxlQUFlLEVBQUVwQyxPQUFPLENBQUM7SUFDckQ7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTkU7SUFBQXpXLEdBQUE7SUFBQXNJLEtBQUEsRUFPQSxTQUFBd1EsdUJBQXVCckMsT0FBTyxFQUFFO01BQzlCaFksY0FBSyxDQUFDZ1UsSUFBSSxDQUFDLHFDQUFxQyxDQUFDO01BRWpELElBQUksQ0FBQzVNLElBQUksQ0FBQzZPLGlCQUFRLENBQUNvRCxNQUFNLENBQUNpQixPQUFPLEVBQUV0QyxPQUFPLENBQUM7SUFDN0M7O0lBRUE7QUFDRjtBQUNBOztJQUVFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxFO0lBQUF6VyxHQUFBO0lBQUFzSSxLQUFBLEVBTUEsU0FBQTBRLHNCQUFBLEVBQXdCO01BQ3RCdmEsY0FBSyxDQUFDZ1UsSUFBSSxDQUFDLHFDQUFxQyxDQUFDO01BRWpELElBQUksQ0FBQzVNLElBQUksQ0FBQzZPLGlCQUFRLENBQUNvRCxNQUFNLENBQUNtQixNQUFNLENBQUM7TUFFakMsSUFBSSxDQUFDTixLQUFLLENBQUMsQ0FBQztJQUNkOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFORTtJQUFBM1ksR0FBQTtJQUFBc0ksS0FBQSxFQU9BLFNBQUE0USx3QkFBd0J6QyxPQUFPLEVBQUU7TUFDL0JoWSxjQUFLLENBQUNnVSxJQUFJLENBQUMsb0RBQW9ELEVBQUVnRSxPQUFPLENBQUMwQyxNQUFNLENBQUM7TUFFaEYsSUFBSSxDQUFDdFQsSUFBSSxDQUFDNk8saUJBQVEsQ0FBQ29ELE1BQU0sQ0FBQ3NCLFFBQVEsRUFBRTNDLE9BQU8sQ0FBQztJQUM5Qzs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFORTtJQUFBelcsR0FBQTtJQUFBc0ksS0FBQSxFQU9BLFNBQUErUSxvQkFBb0I1QyxPQUFPLEVBQUU7TUFDM0JoWSxjQUFLLENBQUNnVSxJQUFJLENBQUMsaUNBQWlDLENBQUM7TUFFN0MsSUFBSSxDQUFDNkcsZUFBZSxHQUFHLElBQUk7TUFFM0JyYyxNQUFNLENBQUNzYyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDaEgsZUFBZSxDQUFDO01BRWhFLElBQUksQ0FBQzFNLElBQUksQ0FBQzZPLGlCQUFRLENBQUNvRCxNQUFNLENBQUMwQixJQUFJLEVBQUUvQyxPQUFPLENBQUM7SUFDMUM7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7SUFFRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQU5FO0lBQUF6VyxHQUFBO0lBQUFzSSxLQUFBLEVBT0EsU0FBQW1SLG9CQUFvQmhELE9BQU8sRUFBRTtNQUMzQmhZLGNBQUssQ0FBQ2dVLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQztNQUUvQyxJQUFJLENBQUM2RyxlQUFlLEdBQUcsSUFBSTtNQUUzQnJjLE1BQU0sQ0FBQ3NjLG1CQUFtQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUNoSCxlQUFlLENBQUM7TUFFaEUsSUFBSSxDQUFDMU0sSUFBSSxDQUFDNk8saUJBQVEsQ0FBQ29ELE1BQU0sQ0FBQzRCLElBQUksRUFBRWpELE9BQU8sQ0FBQztJQUMxQzs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQU5FO0lBQUF6VyxHQUFBO0lBQUFzSSxLQUFBLEVBT0EsU0FBQStKLGlCQUFpQnNILEdBQUcsRUFBRTtNQUNwQixJQUFNcEYsSUFBSSxHQUFHb0YsR0FBRyxDQUFDN0wsTUFBTTs7TUFFdkI7TUFDQTtNQUNBLElBQUl5RyxJQUFJLENBQUNxRixTQUFTLENBQUNDLFFBQVEsQ0FBQ25GLGlCQUFRLENBQUNDLFVBQVUsQ0FBQ1MsZUFBZSxDQUFDLEVBQUU7UUFDaEV1RSxHQUFHLENBQUNHLGNBQWMsQ0FBQyxDQUFDOztRQUVwQjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSSxJQUFJLENBQUM3QixRQUFRLElBQUksQ0FBQyxJQUFJLENBQUNxQixlQUFlLEVBQUU7VUFDMUMsSUFBSSxDQUFDbEQseUJBQXlCLENBQUMsQ0FBQztRQUNsQyxDQUFDLE1BQU07VUFDTCxJQUFJLENBQUN1QyxLQUFLLENBQUMsQ0FBQztRQUNkO01BQ0Y7SUFDRjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQU5FO0lBQUEzWSxHQUFBO0lBQUFzSSxLQUFBLEVBT0EsU0FBQWdLLGVBQUEsRUFBaUI7TUFDZjdULGNBQUssQ0FBQ0ksS0FBSyxDQUFDLHlDQUF5QyxDQUFDOztNQUV0RDtNQUNBO01BQ0E7TUFDQWtiLEtBQUssQ0FBQywrRUFBK0UsQ0FBQztNQUV0RixJQUFJLENBQUNsRCwrQkFBK0IsQ0FBQyxDQUFDO01BQ3RDLElBQUksQ0FBQ0UsaUJBQWlCLENBQUMsQ0FBQztNQUV4QixJQUFJLENBQUM0QixLQUFLLENBQUMsQ0FBQztJQUNkOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFWRTtJQUFBM1ksR0FBQTtJQUFBc0ksS0FBQSxFQVdBLFNBQUFpSyxnQkFBZ0JvSCxHQUFHLEVBQUU7TUFDbkIsSUFBSSxJQUFJLENBQUMxQixRQUFRLEVBQUU7UUFDakI7UUFDQSxJQUFJLENBQUMrQixPQUFPLENBQUMsb0ZBQW9GLENBQUMsRUFBRTtVQUNsR0wsR0FBRyxDQUFDRyxjQUFjLENBQUMsQ0FBQzs7VUFFcEI7VUFDQUgsR0FBRyxDQUFDTSxXQUFXLEdBQUcsRUFBRTtRQUN0QjtNQUNGO0lBQ0Y7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQVBFO0lBQUFqYSxHQUFBO0lBQUFzSSxLQUFBLEVBUUEsU0FBQWtLLFdBQVdsVCxPQUFPLEVBQUU7TUFDbEIsSUFBTTRhLGNBQWMsR0FBRzVhLE9BQU8sQ0FBQ3NOLE1BQU0sQ0FBQ3RULE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO01BRXhELElBQUk0Z0IsY0FBYyxLQUFLLElBQUksQ0FBQzdGLFVBQVUsQ0FBQ3pILE1BQU0sRUFBRTtRQUM3QyxJQUFJaEssT0FBQSxDQUFPdEQsT0FBTyxDQUFDakQsSUFBSSxNQUFLLFFBQVEsRUFBRTtVQUNwQyxJQUFJLENBQUNnYyxrQkFBa0IsQ0FBQy9ZLE9BQU8sQ0FBQztRQUNsQztNQUNGO0lBQ0Y7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQVBFO0lBQUFVLEdBQUE7SUFBQXNJLEtBQUEsRUFRQSxTQUFBa1EsaUJBQUEyQixLQUFBLEVBQW9DO01BQUEsSUFBakJuZ0IsSUFBSSxHQUFBbWdCLEtBQUEsQ0FBSm5nQixJQUFJO1FBQUV5YyxPQUFPLEdBQUEwRCxLQUFBLENBQVAxRCxPQUFPO01BQzlCLFFBQVF6YyxJQUFJO1FBQ1YsS0FBSzBhLGlCQUFRLENBQUMyQixRQUFRLENBQUNTLFNBQVM7VUFDOUIsSUFBSSxDQUFDYyxZQUFZLENBQUNuQixPQUFPLENBQUM7VUFDMUI7UUFDRixLQUFLL0IsaUJBQVEsQ0FBQzJCLFFBQVEsQ0FBQytELGNBQWM7VUFDbkMsSUFBSSxDQUFDcEMsaUJBQWlCLENBQUN2QixPQUFPLENBQUM7VUFDL0I7UUFDRixLQUFLL0IsaUJBQVEsQ0FBQzJCLFFBQVEsQ0FBQ2dFLHlCQUF5QjtVQUM5QyxJQUFJLENBQUNsQyxnQ0FBZ0MsQ0FBQzFCLE9BQU8sQ0FBQztVQUM5QztRQUNGLEtBQUsvQixpQkFBUSxDQUFDMkIsUUFBUSxDQUFDQyxtQkFBbUI7VUFDeEMsSUFBSSxDQUFDbUMscUJBQXFCLENBQUMsQ0FBQztVQUM1QjtRQUNGLEtBQUsvRCxpQkFBUSxDQUFDMkIsUUFBUSxDQUFDaUUsb0JBQW9CO1VBQ3pDLElBQUksQ0FBQzFCLHNCQUFzQixDQUFDbkMsT0FBTyxDQUFDO1VBQ3BDO1FBQ0YsS0FBSy9CLGlCQUFRLENBQUMyQixRQUFRLENBQUNrRSxvQkFBb0I7VUFDekMsSUFBSSxDQUFDekIsc0JBQXNCLENBQUNyQyxPQUFPLENBQUM7VUFDcEM7UUFDRixLQUFLL0IsaUJBQVEsQ0FBQzJCLFFBQVEsQ0FBQ21FLG1CQUFtQjtVQUN4QyxJQUFJLENBQUN4QixxQkFBcUIsQ0FBQyxDQUFDO1VBQzVCO1FBQ0YsS0FBS3RFLGlCQUFRLENBQUMyQixRQUFRLENBQUNvRSxxQkFBcUI7VUFDMUMsSUFBSSxDQUFDdkIsdUJBQXVCLENBQUN6QyxPQUFPLENBQUM7VUFDckM7UUFDRixLQUFLL0IsaUJBQVEsQ0FBQzJCLFFBQVEsQ0FBQ3FFLGlCQUFpQjtVQUN0QyxJQUFJLENBQUNyQixtQkFBbUIsQ0FBQzVDLE9BQU8sQ0FBQztVQUNqQztRQUNGLEtBQUsvQixpQkFBUSxDQUFDMkIsUUFBUSxDQUFDc0UsaUJBQWlCO1VBQ3RDLElBQUksQ0FBQ2xCLG1CQUFtQixDQUFDaEQsT0FBTyxDQUFDO1VBQ2pDO1FBQ0Y7VUFDRTtVQUNBaFksY0FBSyxDQUFDMUIsSUFBSSxDQUFDLHVDQUF1QyxFQUFFL0MsSUFBSSxDQUFDO01BQzdEO0lBQ0Y7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBUEU7SUFBQWdHLEdBQUE7SUFBQXNJLEtBQUEsRUFRQSxTQUFBc1MsS0FBS2pRLEdBQUcsRUFBYTtNQUFBLElBQVg5UyxJQUFJLEdBQUFwRSxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBMkIsU0FBQSxHQUFBM0IsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUNqQmdMLGNBQUssQ0FBQ2dVLElBQUksQ0FBQyxRQUFRLEVBQUU5SCxHQUFHLEVBQUU5UyxJQUFJLENBQUM7O01BRS9CO01BQ0EsSUFBSSxJQUFJLENBQUNnakIsT0FBTyxFQUFFO1FBQ2hCLElBQUksQ0FBQ2xDLEtBQUssQ0FBQyxDQUFDO01BQ2Q7TUFFQSxJQUFJLENBQUM5RixPQUFPLEdBQUFqRCxhQUFBLENBQUFBLGFBQUEsQ0FBQUEsYUFBQSxLQUNQalksaUJBQVEsR0FDUixJQUFJLENBQUMrYSxXQUFXLEdBQ2hCN2EsSUFBSSxDQUNSOztNQUVEO01BQ0EsSUFBSSxJQUFJLENBQUNnYixPQUFPLENBQUMyQixTQUFTLEVBQUU7UUFDMUIsSUFBSSxFQUFFLElBQUksQ0FBQzNCLE9BQU8sQ0FBQzJCLFNBQVMsWUFBWXNHLFdBQVcsQ0FBQyxFQUFFO1VBQ3BELE1BQU0sSUFBSTNSLFNBQVMsQ0FBQyxnQ0FBZ0MsQ0FBQztRQUN2RDtNQUNGO01BRUEsSUFBSSxDQUFDZ0wsZUFBZSxDQUFDeEosR0FBRyxDQUFDO01BQ3pCLElBQUksQ0FBQzJLLGFBQWEsQ0FBQyxDQUFDO01BQ3BCLElBQUksQ0FBQzRCLHNCQUFzQixDQUFDLENBQUM7TUFFN0IsSUFBSSxJQUFJLENBQUNyRSxPQUFPLENBQUNqRSxxQkFBcUIsRUFBRTtRQUN0QyxJQUFJLENBQUN1SSxnQkFBZ0IsQ0FBQyxDQUFDO01BQ3pCO01BRUEsSUFBSSxDQUFDMEQsT0FBTyxHQUFHLElBQUk7TUFFbkI1ZCxNQUFNLENBQUN1WSxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDaEQsVUFBVSxDQUFDO01BRW5ELElBQUksQ0FBQzNNLElBQUksQ0FBQzZPLGlCQUFRLENBQUNvRCxNQUFNLENBQUNpRCxJQUFJLEVBQUU7UUFDOUJwUSxHQUFHLEVBQUUsSUFBSSxDQUFDMEosVUFBVSxDQUFDOUo7TUFDdkIsQ0FBQyxDQUFDO0lBQ0o7O0lBRUE7QUFDRjtBQUNBOztJQUVFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxFO0lBQUF2SyxHQUFBO0lBQUFzSSxLQUFBLEVBTUEsU0FBQXFRLE1BQUEsRUFBUTtNQUNObGEsY0FBSyxDQUFDZ1UsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7TUFFckI7TUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDb0ksT0FBTyxFQUFFO1FBQ2pCO01BQ0Y7TUFFQSxJQUFJLENBQUM5RCxpQkFBaUIsQ0FBQyxDQUFDO01BQ3hCLElBQUksQ0FBQ3BCLFlBQVksQ0FBQyxDQUFDO01BRW5CLElBQUksSUFBSSxDQUFDOUMsT0FBTyxDQUFDakUscUJBQXFCLEVBQUU7UUFDdEMsSUFBSSxDQUFDK0ksZ0JBQWdCLENBQUMsQ0FBQztNQUN6QjtNQUVBLElBQUksQ0FBQ3BDLE9BQU8sQ0FBQ2dFLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNsSCxnQkFBZ0IsQ0FBQztNQUVoRSxJQUFJLENBQUNRLE9BQU8sR0FBRyxJQUFJO01BQ25CLElBQUksQ0FBQzBDLE9BQU8sR0FBRyxJQUFJO01BQ25CLElBQUksQ0FBQ0UsU0FBUyxHQUFHLElBQUk7TUFDckIsSUFBSSxDQUFDcEIsVUFBVSxHQUFHLElBQUk7TUFDdEIsSUFBSSxDQUFDd0csT0FBTyxHQUFHLEtBQUs7TUFDcEIsSUFBSSxDQUFDNUMsUUFBUSxHQUFHLEtBQUs7TUFDckIsSUFBSSxDQUFDcUIsZUFBZSxHQUFHLEtBQUs7TUFFNUJyYyxNQUFNLENBQUNzYyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDL0csVUFBVSxDQUFDO01BQ3REdlYsTUFBTSxDQUFDc2MsbUJBQW1CLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQ2hILGVBQWUsQ0FBQztNQUVoRSxJQUFJLENBQUMxTSxJQUFJLENBQUM2TyxpQkFBUSxDQUFDb0QsTUFBTSxDQUFDa0QsS0FBSyxDQUFDO0lBQ2xDOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFQRTtJQUFBaGIsR0FBQTtJQUFBc0ksS0FBQSxFQVFBLFNBQUF6QyxLQUFBLEVBQWM7TUFBQSxJQUFBb1YsS0FBQTtNQUFBLFNBQUF6bkIsSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBTnFLLElBQUksT0FBQW5LLEtBQUEsQ0FBQUosSUFBQSxHQUFBSyxJQUFBLE1BQUFBLElBQUEsR0FBQUwsSUFBQSxFQUFBSyxJQUFBO1FBQUprSyxJQUFJLENBQUFsSyxJQUFBLElBQUFKLFNBQUEsQ0FBQUksSUFBQTtNQUFBO01BQ1Y0SyxjQUFLLENBQUNnVSxJQUFJLENBQUF0ZCxLQUFBLENBQVZzSixjQUFLLEdBQU0sUUFBUSxFQUFBcEosTUFBQSxDQUFLMEksSUFBSSxFQUFDO01BRTdCLENBQUFrZCxLQUFBLEdBQUEvSixJQUFBLENBQUFSLGVBQUEsQ0FBQXlCLFNBQUEsQ0FBQW5OLFNBQUEsa0JBQUE1RCxJQUFBLENBQUFqTSxLQUFBLENBQUE4bEIsS0FBQSxTQUFBNWxCLE1BQUEsQ0FBYzBJLElBQUk7SUFDcEI7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7RUFIRTtJQUFBaUMsR0FBQTtJQUFBMEIsR0FBQSxFQUlBLFNBQUFBLElBQUEsRUFBYztNQUNaLE9BQU8sSUFBSSxDQUFDNlQsT0FBTztJQUNyQjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtFQUhFO0lBQUF2VixHQUFBO0lBQUEwQixHQUFBLEVBSUEsU0FBQUEsSUFBQSxFQUFhO01BQ1gsT0FBTyxJQUFJLENBQUMrVCxTQUFTO0lBQ3ZCOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0VBSEU7SUFBQXpWLEdBQUE7SUFBQTBCLEdBQUEsRUFJQSxTQUFBQSxJQUFBLEVBQWE7TUFDWCxPQUFPLElBQUksQ0FBQ21aLE9BQU87SUFDckI7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7RUFIRTtJQUFBN2EsR0FBQTtJQUFBMEIsR0FBQSxFQUlBLFNBQUFBLElBQUEsRUFBYztNQUNaLE9BQU8sSUFBSSxDQUFDdVcsUUFBUTtJQUN0QjtFQUFDO0FBQUEsRUFockNxQmlELG9CQUFPO0FBRTdCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkVyTCxlQUFBLENBRklzQyxTQUFTLGdCQVNPdUMsaUJBQVEsQ0FBQ0MsVUFBVTtBQUV2QztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5FOUUsZUFBQSxDQVhJc0MsU0FBUyxZQWtCR3VDLGlCQUFRLENBQUNvRCxNQUFNO0FBRS9CO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkVqSSxlQUFBLENBcEJJc0MsU0FBUyxhQTJCSXVDLGlCQUFRLENBQUN5RyxPQUFPO0FBRWpDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkV0TCxlQUFBLENBN0JJc0MsU0FBUyxjQW9DS3VDLGlCQUFRLENBQUMyQixRQUFRO0FBRW5DO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkV4RyxlQUFBLENBdENJc0MsU0FBUyxhQTZDSTZCLFFBQWU7QUFBQSxJQUFBL2MsUUFBQSxHQUFBQyxPQUFBLENBQUFQLE9BQUEsR0Fzb0NuQndiLFNBQVMsQzs7Ozs7Ozs7Ozs7O0FDenJDeEIsY0FBYyxtQkFBTyxDQUFDLHdOQUEwRzs7QUFFaEksNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNHQUFtRDs7QUFFeEU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU13QyxVQUFVLEdBQUc7RUFDakJDLElBQUksRUFBRSxzQkFBc0I7RUFDNUJJLGFBQWEsRUFBRSxnQ0FBZ0M7RUFDL0NILE1BQU0sRUFBRSw4QkFBOEI7RUFDdENNLFdBQVcsRUFBRSxtQ0FBbUM7RUFDaERDLGVBQWUsRUFBRSwwQ0FBMEM7RUFDM0RGLGFBQWEsRUFBRSxxQ0FBcUM7RUFDcERELFlBQVksRUFBRTtBQUNoQixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU02QyxNQUFNLEdBQUc7RUFDYkMsS0FBSyxFQUFFLE9BQU87RUFDZHlCLElBQUksRUFBRSxNQUFNO0VBQ1pkLE1BQU0sRUFBRSxRQUFRO0VBQ2hCc0MsS0FBSyxFQUFFLE9BQU87RUFDZG5DLGVBQWUsRUFBRSxnQkFBZ0I7RUFDakNFLE9BQU8sRUFBRSxTQUFTO0VBQ2xCRSxNQUFNLEVBQUUsUUFBUTtFQUNoQlYsT0FBTyxFQUFFLFNBQVM7RUFDbEJ3QyxJQUFJLEVBQUUsTUFBTTtFQUNaN0MsS0FBSyxFQUFFLE9BQU87RUFDZGtCLFFBQVEsRUFBRSxVQUFVO0VBQ3BCTSxJQUFJLEVBQUU7QUFDUixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU01RSxNQUFNLEdBQUc7RUFDYkMsSUFBSSxFQUFFO0FBQ1IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNb0csT0FBTyxHQUFHO0VBQ2RDLEtBQUssRUFBRSxPQUFPO0VBQUU7RUFDaEJDLEtBQUssRUFBRSxPQUFPO0VBQUU7RUFDaEJDLEtBQUssRUFBRSxPQUFPO0VBQUU7RUFDaEJDLEtBQUssRUFBRSxPQUFPO0VBQUU7RUFDaEJDLEtBQUssRUFBRSxPQUFPO0VBQUU7RUFDaEJDLEtBQUssRUFBRSxPQUFPO0VBQUU7RUFDaEJDLEtBQUssRUFBRSxPQUFPO0VBQUU7RUFDaEJDLEtBQUssRUFBRSxPQUFPO0VBQUU7RUFDaEJDLEtBQUssRUFBRSxPQUFPO0VBQUU7RUFDaEJDLEtBQUssRUFBRSxPQUFPO0VBQUU7RUFDaEJDLEtBQUssRUFBRSxPQUFPO0VBQUU7RUFDaEJDLEtBQUssRUFBRSxPQUFPO0VBQUU7RUFDaEJDLEtBQUssRUFBRSxPQUFPO0VBQUU7RUFDaEJDLEtBQUssRUFBRSxPQUFPO0VBQUU7RUFDaEJDLEtBQUssRUFBRSxPQUFPO0VBQUU7RUFDaEJDLEtBQUssRUFBRSxPQUFPO0VBQUU7RUFDaEJDLEtBQUssRUFBRSxPQUFPO0VBQUU7RUFDaEJDLEtBQUssRUFBRSxPQUFPO0VBQUU7RUFDaEJDLEtBQUssRUFBRSxPQUFPO0VBQUU7RUFDaEJDLEtBQUssRUFBRSxPQUFPO0VBQUU7RUFDaEJDLEtBQUssRUFBRSxPQUFPO0VBQUU7RUFDaEJDLEtBQUssRUFBRSxPQUFPO0VBQUU7RUFDaEJDLEtBQUssRUFBRSxPQUFPLENBQUU7O0VBRWhCO0VBQ0E7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1yRyxRQUFRLEdBQUc7RUFDZkcsYUFBYSxFQUFFLHFCQUFxQjtFQUNwQ00sU0FBUyxFQUFFLGlCQUFpQjtFQUM1QnNELGNBQWMsRUFBRSxzQkFBc0I7RUFDdENDLHlCQUF5QixFQUFFLCtCQUErQjtFQUMxRHpELDBCQUEwQixFQUFFLGdDQUFnQztFQUM1RE4sbUJBQW1CLEVBQUUsNkJBQTZCO0VBQ2xEZ0Usb0JBQW9CLEVBQUUsOEJBQThCO0VBQ3BEQyxvQkFBb0IsRUFBRSw4QkFBOEI7RUFDcERDLG1CQUFtQixFQUFFLDZCQUE2QjtFQUNsREMscUJBQXFCLEVBQUUsK0JBQStCO0VBQ3REQyxpQkFBaUIsRUFBRSwyQkFBMkI7RUFDOUNDLGlCQUFpQixFQUFFO0FBQ3JCLENBQUM7QUFBQyxJQUFBMWpCLFFBQUEsR0FBQUMsT0FBQSxDQUFBUCxPQUFBLEdBRWE7RUFDYmdlLFVBQVUsRUFBVkEsVUFBVTtFQUNWbUQsTUFBTSxFQUFOQSxNQUFNO0VBQ05oRCxNQUFNLEVBQU5BLE1BQU07RUFDTnFHLE9BQU8sRUFBUEEsT0FBTztFQUNQOUUsUUFBUSxFQUFSQTtBQUNGLENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkdELElBQUF0SCxNQUFBLEdBQUEzWSxzQkFBQSxDQUFBQyxtQkFBQTtBQUEwQixTQUFBRCx1QkFBQUssR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLEtBQUFFLE9BQUEsRUFBQUYsR0FBQTtBQVYxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTWdjLElBQUksR0FBRyxJQUFBaFUsY0FBSyxLQUFBcEosTUFBQSxDQUFJc25CLG9CQUFZLFVBQU8sQ0FBQztBQUMxQyxJQUFNNWYsSUFBSSxHQUFHLElBQUEwQixjQUFLLEtBQUFwSixNQUFBLENBQUlzbkIsb0JBQVksVUFBTyxDQUFDO0FBQzFDLElBQU05ZCxLQUFLLEdBQUcsSUFBQUosY0FBSyxLQUFBcEosTUFBQSxDQUFJc25CLG9CQUFZLFdBQVEsQ0FBQztBQUU1Q2xLLElBQUksQ0FBQ2pVLEdBQUcsR0FBRzFCLE9BQU8sQ0FBQzBCLEdBQUcsQ0FBQ25LLElBQUksQ0FBQ3lJLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDdENDLElBQUksQ0FBQ3lCLEdBQUcsR0FBRzFCLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDMUksSUFBSSxDQUFDeUksT0FBTyxDQUFDLENBQUMsQ0FBQztBQUFBLElBQUE3RixRQUFBLEdBQUFDLE9BQUEsQ0FBQVAsT0FBQSxHQUV4QjtFQUNiOGIsSUFBSSxFQUFKQSxJQUFJO0VBQ0oxVixJQUFJLEVBQUpBLElBQUk7RUFDSjhCLEtBQUssRUFBTEE7QUFDRixDQUFDLEMiLCJmaWxlIjoiZW1iZWRkZWQuZGV2ZWxvcG1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJIZWxsb1NpZ25cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSGVsbG9TaWduXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKlxuICogQGNsYXNzIFRlbXBsYXRlVGFnXG4gKiBAY2xhc3NkZXNjIENvbnN1bWVzIGEgcGlwZWxpbmUgb2YgY29tcG9zYWJsZSB0cmFuc2Zvcm1lciBwbHVnaW5zIGFuZCBwcm9kdWNlcyBhIHRlbXBsYXRlIHRhZy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVUYWcge1xuICAvKipcbiAgICogY29uc3RydWN0cyBhIHRlbXBsYXRlIHRhZ1xuICAgKiBAY29uc3RydWN0cyBUZW1wbGF0ZVRhZ1xuICAgKiBAcGFyYW0gIHsuLi5PYmplY3R9IFsuLi50cmFuc2Zvcm1lcnNdIC0gYW4gYXJyYXkgb3IgYXJndW1lbnRzIGxpc3Qgb2YgdHJhbnNmb3JtZXJzXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgICAgICAgICAgICAgICAgICAgLSBhIHRlbXBsYXRlIHRhZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoLi4udHJhbnNmb3JtZXJzKSB7XG4gICAgLy8gaWYgZmlyc3QgYXJndW1lbnQgaXMgYW4gYXJyYXksIGV4dHJ1ZGUgaXQgYXMgYSBsaXN0IG9mIHRyYW5zZm9ybWVyc1xuICAgIGlmICh0cmFuc2Zvcm1lcnMubGVuZ3RoID4gMCAmJiBBcnJheS5pc0FycmF5KHRyYW5zZm9ybWVyc1swXSkpIHtcbiAgICAgIHRyYW5zZm9ybWVycyA9IHRyYW5zZm9ybWVyc1swXTtcbiAgICB9XG5cbiAgICAvLyBpZiBhbnkgdHJhbnNmb3JtZXJzIGFyZSBmdW5jdGlvbnMsIHRoaXMgbWVhbnMgdGhleSBhcmUgbm90IGluaXRpYXRlZCAtIGF1dG9tYXRpY2FsbHkgaW5pdGlhdGUgdGhlbVxuICAgIHRoaXMudHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLm1hcCh0cmFuc2Zvcm1lciA9PiB7XG4gICAgICByZXR1cm4gdHlwZW9mIHRyYW5zZm9ybWVyID09PSAnZnVuY3Rpb24nID8gdHJhbnNmb3JtZXIoKSA6IHRyYW5zZm9ybWVyO1xuICAgIH0pO1xuXG4gICAgLy8gcmV0dXJuIGFuIEVTMjAxNSB0ZW1wbGF0ZSB0YWdcbiAgICByZXR1cm4gdGhpcy50YWc7XG4gIH1cblxuICAvKipcbiAgICogQXBwbGllcyBhbGwgdHJhbnNmb3JtZXJzIHRvIGEgdGVtcGxhdGUgbGl0ZXJhbCB0YWdnZWQgd2l0aCB0aGlzIG1ldGhvZC5cbiAgICogSWYgYSBmdW5jdGlvbiBpcyBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LCBhc3N1bWVzIHRoZSBmdW5jdGlvbiBpcyBhIHRlbXBsYXRlIHRhZ1xuICAgKiBhbmQgYXBwbGllcyBpdCB0byB0aGUgdGVtcGxhdGUsIHJldHVybmluZyBhIHRlbXBsYXRlIHRhZy5cbiAgICogQHBhcmFtICB7KEZ1bmN0aW9ufFN0cmluZ3xBcnJheTxTdHJpbmc+KX0gc3RyaW5ncyAgICAgICAgLSBFaXRoZXIgYSB0ZW1wbGF0ZSB0YWcgb3IgYW4gYXJyYXkgY29udGFpbmluZyB0ZW1wbGF0ZSBzdHJpbmdzIHNlcGFyYXRlZCBieSBpZGVudGlmaWVyXG4gICAqIEBwYXJhbSAgey4uLip9ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmV4cHJlc3Npb25zIC0gT3B0aW9uYWwgbGlzdCBvZiBzdWJzdGl0dXRpb24gdmFsdWVzLlxuICAgKiBAcmV0dXJuIHsoU3RyaW5nfEZ1bmN0aW9uKX0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIEVpdGhlciBhbiBpbnRlcm1lZGlhcnkgdGFnIGZ1bmN0aW9uIG9yIHRoZSByZXN1bHRzIG9mIHByb2Nlc3NpbmcgdGhlIHRlbXBsYXRlLlxuICAgKi9cbiAgdGFnID0gKHN0cmluZ3MsIC4uLmV4cHJlc3Npb25zKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzdHJpbmdzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBpZiB0aGUgZmlyc3QgYXJndW1lbnQgcGFzc2VkIGlzIGEgZnVuY3Rpb24sIGFzc3VtZSBpdCBpcyBhIHRlbXBsYXRlIHRhZyBhbmQgcmV0dXJuXG4gICAgICAvLyBhbiBpbnRlcm1lZGlhcnkgdGFnIHRoYXQgcHJvY2Vzc2VzIHRoZSB0ZW1wbGF0ZSB1c2luZyB0aGUgYWZvcmVtZW50aW9uZWQgdGFnLCBwYXNzaW5nIHRoZVxuICAgICAgLy8gcmVzdWx0IHRvIG91ciB0YWdcbiAgICAgIHJldHVybiB0aGlzLmludGVyaW1UYWcuYmluZCh0aGlzLCBzdHJpbmdzKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHN0cmluZ3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBpZiB0aGUgZmlyc3QgYXJndW1lbnQgcGFzc2VkIGlzIGEgc3RyaW5nLCBqdXN0IHRyYW5zZm9ybSBpdFxuICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtRW5kUmVzdWx0KHN0cmluZ3MpO1xuICAgIH1cblxuICAgIC8vIGVsc2UsIHJldHVybiBhIHRyYW5zZm9ybWVkIGVuZCByZXN1bHQgb2YgcHJvY2Vzc2luZyB0aGUgdGVtcGxhdGUgd2l0aCBvdXIgdGFnXG4gICAgc3RyaW5ncyA9IHN0cmluZ3MubWFwKHRoaXMudHJhbnNmb3JtU3RyaW5nLmJpbmQodGhpcykpO1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybUVuZFJlc3VsdChcbiAgICAgIHN0cmluZ3MucmVkdWNlKHRoaXMucHJvY2Vzc1N1YnN0aXR1dGlvbnMuYmluZCh0aGlzLCBleHByZXNzaW9ucykpLFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFuIGludGVybWVkaWFyeSB0ZW1wbGF0ZSB0YWcgdGhhdCByZWNlaXZlcyBhIHRlbXBsYXRlIHRhZyBhbmQgcGFzc2VzIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgdGVtcGxhdGUgd2l0aCB0aGUgcmVjZWl2ZWRcbiAgICogdGVtcGxhdGUgdGFnIHRvIG91ciBvd24gdGVtcGxhdGUgdGFnLlxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gICAgICAgIG5leHRUYWcgICAgICAgICAgLSB0aGUgcmVjZWl2ZWQgdGVtcGxhdGUgdGFnXG4gICAqIEBwYXJhbSAge0FycmF5PFN0cmluZz59ICAgdGVtcGxhdGUgICAgICAgICAtIHRoZSB0ZW1wbGF0ZSB0byBwcm9jZXNzXG4gICAqIEBwYXJhbSAgey4uLip9ICAgICAgICAgICAgLi4uc3Vic3RpdHV0aW9ucyAtIGBzdWJzdGl0dXRpb25zYCBpcyBhbiBhcnJheSBvZiBhbGwgc3Vic3RpdHV0aW9ucyBpbiB0aGUgdGVtcGxhdGVcbiAgICogQHJldHVybiB7Kn0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gdGhlIGZpbmFsIHByb2Nlc3NlZCB2YWx1ZVxuICAgKi9cbiAgaW50ZXJpbVRhZyhwcmV2aW91c1RhZywgdGVtcGxhdGUsIC4uLnN1YnN0aXR1dGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy50YWdgJHtwcmV2aW91c1RhZyh0ZW1wbGF0ZSwgLi4uc3Vic3RpdHV0aW9ucyl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBidWxrIHByb2Nlc3Npbmcgb24gdGhlIHRhZ2dlZCB0ZW1wbGF0ZSwgdHJhbnNmb3JtaW5nIGVhY2ggc3Vic3RpdHV0aW9uIGFuZCB0aGVuXG4gICAqIGNvbmNhdGVuYXRpbmcgdGhlIHJlc3VsdGluZyB2YWx1ZXMgaW50byBhIHN0cmluZy5cbiAgICogQHBhcmFtICB7QXJyYXk8Kj59IHN1YnN0aXR1dGlvbnMgLSBhbiBhcnJheSBvZiBhbGwgcmVtYWluaW5nIHN1YnN0aXR1dGlvbnMgcHJlc2VudCBpbiB0aGlzIHRlbXBsYXRlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gICByZXN1bHRTb0ZhciAgIC0gdGhpcyBpdGVyYXRpb24ncyByZXN1bHQgc3RyaW5nIHNvIGZhclxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgcmVtYWluaW5nUGFydCAtIHRoZSB0ZW1wbGF0ZSBjaHVuayBhZnRlciB0aGUgY3VycmVudCBzdWJzdGl0dXRpb25cbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgICAgICAgLSB0aGUgcmVzdWx0IG9mIGpvaW5pbmcgdGhpcyBpdGVyYXRpb24ncyBwcm9jZXNzZWQgc3Vic3RpdHV0aW9uIHdpdGggdGhlIHJlc3VsdFxuICAgKi9cbiAgcHJvY2Vzc1N1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgcmVzdWx0U29GYXIsIHJlbWFpbmluZ1BhcnQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLnRyYW5zZm9ybVN1YnN0aXR1dGlvbihcbiAgICAgIHN1YnN0aXR1dGlvbnMuc2hpZnQoKSxcbiAgICAgIHJlc3VsdFNvRmFyLFxuICAgICk7XG4gICAgcmV0dXJuICcnLmNvbmNhdChyZXN1bHRTb0Zhciwgc3Vic3RpdHV0aW9uLCByZW1haW5pbmdQYXJ0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlIHRocm91Z2ggZWFjaCB0cmFuc2Zvcm1lciwgYXBwbHlpbmcgdGhlIHRyYW5zZm9ybWVyJ3MgYG9uU3RyaW5nYCBtZXRob2QgdG8gdGhlIHRlbXBsYXRlXG4gICAqIHN0cmluZ3MgYmVmb3JlIGFsbCBzdWJzdGl0dXRpb25zIGFyZSBwcm9jZXNzZWQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSAgc3RyIC0gVGhlIGlucHV0IHN0cmluZ1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAtIFRoZSBmaW5hbCByZXN1bHRzIG9mIHByb2Nlc3NpbmcgZWFjaCB0cmFuc2Zvcm1lclxuICAgKi9cbiAgdHJhbnNmb3JtU3RyaW5nKHN0cikge1xuICAgIGNvbnN0IGNiID0gKHJlcywgdHJhbnNmb3JtKSA9PlxuICAgICAgdHJhbnNmb3JtLm9uU3RyaW5nID8gdHJhbnNmb3JtLm9uU3RyaW5nKHJlcykgOiByZXM7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtZXJzLnJlZHVjZShjYiwgc3RyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGEgc3Vic3RpdHV0aW9uIGlzIGVuY291bnRlcmVkLCBpdGVyYXRlcyB0aHJvdWdoIGVhY2ggdHJhbnNmb3JtZXIgYW5kIGFwcGxpZXMgdGhlIHRyYW5zZm9ybWVyJ3NcbiAgICogYG9uU3Vic3RpdHV0aW9uYCBtZXRob2QgdG8gdGhlIHN1YnN0aXR1dGlvbi5cbiAgICogQHBhcmFtICB7Kn0gICAgICBzdWJzdGl0dXRpb24gLSBUaGUgY3VycmVudCBzdWJzdGl0dXRpb25cbiAgICogQHBhcmFtICB7U3RyaW5nfSByZXN1bHRTb0ZhciAgLSBUaGUgcmVzdWx0IHVwIHRvIGFuZCBleGNsdWRpbmcgdGhpcyBzdWJzdGl0dXRpb24uXG4gICAqIEByZXR1cm4geyp9ICAgICAgICAgICAgICAgICAgIC0gVGhlIGZpbmFsIHJlc3VsdCBvZiBhcHBseWluZyBhbGwgc3Vic3RpdHV0aW9uIHRyYW5zZm9ybWF0aW9ucy5cbiAgICovXG4gIHRyYW5zZm9ybVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHJlc3VsdFNvRmFyKSB7XG4gICAgY29uc3QgY2IgPSAocmVzLCB0cmFuc2Zvcm0pID0+XG4gICAgICB0cmFuc2Zvcm0ub25TdWJzdGl0dXRpb25cbiAgICAgICAgPyB0cmFuc2Zvcm0ub25TdWJzdGl0dXRpb24ocmVzLCByZXN1bHRTb0ZhcilcbiAgICAgICAgOiByZXM7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtZXJzLnJlZHVjZShjYiwgc3Vic3RpdHV0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlcyB0aHJvdWdoIGVhY2ggdHJhbnNmb3JtZXIsIGFwcGx5aW5nIHRoZSB0cmFuc2Zvcm1lcidzIGBvbkVuZFJlc3VsdGAgbWV0aG9kIHRvIHRoZVxuICAgKiB0ZW1wbGF0ZSBsaXRlcmFsIGFmdGVyIGFsbCBzdWJzdGl0dXRpb25zIGhhdmUgZmluaXNoZWQgcHJvY2Vzc2luZy5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBlbmRSZXN1bHQgLSBUaGUgcHJvY2Vzc2VkIHRlbXBsYXRlLCBqdXN0IGJlZm9yZSBpdCBpcyByZXR1cm5lZCBmcm9tIHRoZSB0YWdcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgLSBUaGUgZmluYWwgcmVzdWx0cyBvZiBwcm9jZXNzaW5nIGVhY2ggdHJhbnNmb3JtZXJcbiAgICovXG4gIHRyYW5zZm9ybUVuZFJlc3VsdChlbmRSZXN1bHQpIHtcbiAgICBjb25zdCBjYiA9IChyZXMsIHRyYW5zZm9ybSkgPT5cbiAgICAgIHRyYW5zZm9ybS5vbkVuZFJlc3VsdCA/IHRyYW5zZm9ybS5vbkVuZFJlc3VsdChyZXMpIDogcmVzO1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybWVycy5yZWR1Y2UoY2IsIGVuZFJlc3VsdCk7XG4gIH1cbn1cbiIsImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciBmcm9tICcuLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBjb21tYUxpc3RzID0gbmV3IFRlbXBsYXRlVGFnKFxuICBpbmxpbmVBcnJheVRyYW5zZm9ybWVyKHsgc2VwYXJhdG9yOiAnLCcgfSksXG4gIHN0cmlwSW5kZW50VHJhbnNmb3JtZXIsXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1hTGlzdHM7XG4iLCJpbXBvcnQgVGVtcGxhdGVUYWcgZnJvbSAnLi4vVGVtcGxhdGVUYWcnO1xuaW1wb3J0IHN0cmlwSW5kZW50VHJhbnNmb3JtZXIgZnJvbSAnLi4vc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgaW5saW5lQXJyYXlUcmFuc2Zvcm1lciBmcm9tICcuLi9pbmxpbmVBcnJheVRyYW5zZm9ybWVyJztcbmltcG9ydCB0cmltUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcblxuY29uc3QgY29tbWFMaXN0c0FuZCA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcih7IHNlcGFyYXRvcjogJywnLCBjb25qdW5jdGlvbjogJ2FuZCcgfSksXG4gIHN0cmlwSW5kZW50VHJhbnNmb3JtZXIsXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1hTGlzdHNBbmQ7XG4iLCJpbXBvcnQgVGVtcGxhdGVUYWcgZnJvbSAnLi4vVGVtcGxhdGVUYWcnO1xuaW1wb3J0IHN0cmlwSW5kZW50VHJhbnNmb3JtZXIgZnJvbSAnLi4vc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgaW5saW5lQXJyYXlUcmFuc2Zvcm1lciBmcm9tICcuLi9pbmxpbmVBcnJheVRyYW5zZm9ybWVyJztcbmltcG9ydCB0cmltUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcblxuY29uc3QgY29tbWFMaXN0c09yID0gbmV3IFRlbXBsYXRlVGFnKFxuICBpbmxpbmVBcnJheVRyYW5zZm9ybWVyKHsgc2VwYXJhdG9yOiAnLCcsIGNvbmp1bmN0aW9uOiAnb3InIH0pLFxuICBzdHJpcEluZGVudFRyYW5zZm9ybWVyLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjb21tYUxpc3RzT3I7XG4iLCJpbXBvcnQgVGVtcGxhdGVUYWcgZnJvbSAnLi4vVGVtcGxhdGVUYWcnO1xuaW1wb3J0IHN0cmlwSW5kZW50VHJhbnNmb3JtZXIgZnJvbSAnLi4vc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgaW5saW5lQXJyYXlUcmFuc2Zvcm1lciBmcm9tICcuLi9pbmxpbmVBcnJheVRyYW5zZm9ybWVyJztcbmltcG9ydCB0cmltUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcbmltcG9ydCBzcGxpdFN0cmluZ1RyYW5zZm9ybWVyIGZyb20gJy4uL3NwbGl0U3RyaW5nVHJhbnNmb3JtZXInO1xuaW1wb3J0IHJlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIgZnJvbSAnLi4vcmVtb3ZlTm9uUHJpbnRpbmdWYWx1ZXNUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IGh0bWwgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIHNwbGl0U3RyaW5nVHJhbnNmb3JtZXIoJ1xcbicpLFxuICByZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyLFxuICBpbmxpbmVBcnJheVRyYW5zZm9ybWVyLFxuICBzdHJpcEluZGVudFRyYW5zZm9ybWVyLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBodG1sO1xuIiwiY29uc3QgZGVmYXVsdHMgPSB7XG4gIHNlcGFyYXRvcjogJycsXG4gIGNvbmp1bmN0aW9uOiAnJyxcbiAgc2VyaWFsOiBmYWxzZSxcbn07XG5cbi8qKlxuICogQ29udmVydHMgYW4gYXJyYXkgc3Vic3RpdHV0aW9uIHRvIGEgc3RyaW5nIGNvbnRhaW5pbmcgYSBsaXN0XG4gKiBAcGFyYW0gIHtTdHJpbmd9IFtvcHRzLnNlcGFyYXRvciA9ICcnXSAtIHRoZSBjaGFyYWN0ZXIgdGhhdCBzZXBhcmF0ZXMgZWFjaCBpdGVtXG4gKiBAcGFyYW0gIHtTdHJpbmd9IFtvcHRzLmNvbmp1bmN0aW9uID0gJyddICAtIHJlcGxhY2UgdGhlIGxhc3Qgc2VwYXJhdG9yIHdpdGggdGhpc1xuICogQHBhcmFtICB7Qm9vbGVhbn0gW29wdHMuc2VyaWFsID0gZmFsc2VdIC0gaW5jbHVkZSB0aGUgc2VwYXJhdG9yIGJlZm9yZSB0aGUgY29uanVuY3Rpb24/IChPeGZvcmQgY29tbWEgdXNlLWNhc2UpXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgICAgICAgICAgIC0gYSBUZW1wbGF0ZVRhZyB0cmFuc2Zvcm1lclxuICovXG5jb25zdCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyID0gKG9wdHMgPSBkZWZhdWx0cykgPT4gKHtcbiAgb25TdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCByZXN1bHRTb0Zhcikge1xuICAgIC8vIG9ubHkgb3BlcmF0ZSBvbiBhcnJheXNcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdWJzdGl0dXRpb24pKSB7XG4gICAgICBjb25zdCBhcnJheUxlbmd0aCA9IHN1YnN0aXR1dGlvbi5sZW5ndGg7XG4gICAgICBjb25zdCBzZXBhcmF0b3IgPSBvcHRzLnNlcGFyYXRvcjtcbiAgICAgIGNvbnN0IGNvbmp1bmN0aW9uID0gb3B0cy5jb25qdW5jdGlvbjtcbiAgICAgIGNvbnN0IHNlcmlhbCA9IG9wdHMuc2VyaWFsO1xuICAgICAgLy8gam9pbiBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5IGludG8gYSBzdHJpbmcgd2hlcmUgZWFjaCBpdGVtIGlzIHNlcGFyYXRlZCBieSBzZXBhcmF0b3JcbiAgICAgIC8vIGJlIHN1cmUgdG8gbWFpbnRhaW4gaW5kZW50YXRpb25cbiAgICAgIGNvbnN0IGluZGVudCA9IHJlc3VsdFNvRmFyLm1hdGNoKC8oXFxuP1teXFxTXFxuXSspJC8pO1xuICAgICAgaWYgKGluZGVudCkge1xuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24uam9pbihzZXBhcmF0b3IgKyBpbmRlbnRbMV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLmpvaW4oc2VwYXJhdG9yICsgJyAnKTtcbiAgICAgIH1cbiAgICAgIC8vIGlmIGNvbmp1bmN0aW9uIGlzIHNldCwgcmVwbGFjZSB0aGUgbGFzdCBzZXBhcmF0b3Igd2l0aCBjb25qdW5jdGlvbiwgYnV0IG9ubHkgaWYgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSBzdWJzdGl0dXRpb25cbiAgICAgIGlmIChjb25qdW5jdGlvbiAmJiBhcnJheUxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3Qgc2VwYXJhdG9ySW5kZXggPSBzdWJzdGl0dXRpb24ubGFzdEluZGV4T2Yoc2VwYXJhdG9yKTtcbiAgICAgICAgc3Vic3RpdHV0aW9uID1cbiAgICAgICAgICBzdWJzdGl0dXRpb24uc2xpY2UoMCwgc2VwYXJhdG9ySW5kZXgpICtcbiAgICAgICAgICAoc2VyaWFsID8gc2VwYXJhdG9yIDogJycpICtcbiAgICAgICAgICAnICcgK1xuICAgICAgICAgIGNvbmp1bmN0aW9uICtcbiAgICAgICAgICBzdWJzdGl0dXRpb24uc2xpY2Uoc2VwYXJhdG9ySW5kZXggKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyO1xuIiwiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4uL3N0cmlwSW5kZW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgZnJvbSAnLi4vaW5saW5lQXJyYXlUcmFuc2Zvcm1lcic7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IGlubGluZUxpc3RzID0gbmV3IFRlbXBsYXRlVGFnKFxuICBpbmxpbmVBcnJheVRyYW5zZm9ybWVyLFxuICBzdHJpcEluZGVudFRyYW5zZm9ybWVyLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBpbmxpbmVMaXN0cztcbiIsImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3JlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IG9uZUxpbmUgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcigvKD86XFxuKD86XFxzKikpKy9nLCAnICcpLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBvbmVMaW5lO1xuIiwiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuaW1wb3J0IHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBvbmVMaW5lQ29tbWFMaXN0cyA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcih7IHNlcGFyYXRvcjogJywnIH0pLFxuICByZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIoLyg/OlxccyspL2csICcgJyksXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IG9uZUxpbmVDb21tYUxpc3RzO1xuIiwiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuaW1wb3J0IHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBvbmVMaW5lQ29tbWFMaXN0c0FuZCA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcih7IHNlcGFyYXRvcjogJywnLCBjb25qdW5jdGlvbjogJ2FuZCcgfSksXG4gIHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcigvKD86XFxzKykvZywgJyAnKSxcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgb25lTGluZUNvbW1hTGlzdHNBbmQ7XG4iLCJpbXBvcnQgVGVtcGxhdGVUYWcgZnJvbSAnLi4vVGVtcGxhdGVUYWcnO1xuaW1wb3J0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgZnJvbSAnLi4vaW5saW5lQXJyYXlUcmFuc2Zvcm1lcic7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3JlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IG9uZUxpbmVDb21tYUxpc3RzT3IgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIGlubGluZUFycmF5VHJhbnNmb3JtZXIoeyBzZXBhcmF0b3I6ICcsJywgY29uanVuY3Rpb246ICdvcicgfSksXG4gIHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcigvKD86XFxzKykvZywgJyAnKSxcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgb25lTGluZUNvbW1hTGlzdHNPcjtcbiIsImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgaW5saW5lQXJyYXlUcmFuc2Zvcm1lciBmcm9tICcuLi9pbmxpbmVBcnJheVRyYW5zZm9ybWVyJztcbmltcG9ydCB0cmltUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcbmltcG9ydCByZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyJztcblxuY29uc3Qgb25lTGluZUlubGluZUxpc3RzID0gbmV3IFRlbXBsYXRlVGFnKFxuICBpbmxpbmVBcnJheVRyYW5zZm9ybWVyLFxuICByZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIoLyg/OlxccyspL2csICcgJyksXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IG9uZUxpbmVJbmxpbmVMaXN0cztcbiIsImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3JlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IG9uZUxpbmVUcmltID0gbmV3IFRlbXBsYXRlVGFnKFxuICByZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIoLyg/OlxcblxccyopL2csICcnKSxcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgb25lTGluZVRyaW07XG4iLCJjb25zdCBpc1ZhbGlkVmFsdWUgPSB4ID0+XG4gIHggIT0gbnVsbCAmJiAhTnVtYmVyLmlzTmFOKHgpICYmIHR5cGVvZiB4ICE9PSAnYm9vbGVhbic7XG5cbmNvbnN0IHJlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIgPSAoKSA9PiAoe1xuICBvblN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdWJzdGl0dXRpb24pKSB7XG4gICAgICByZXR1cm4gc3Vic3RpdHV0aW9uLmZpbHRlcihpc1ZhbGlkVmFsdWUpO1xuICAgIH1cbiAgICBpZiAoaXNWYWxpZFZhbHVlKHN1YnN0aXR1dGlvbikpIHtcbiAgICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyO1xuIiwiLyoqXG4gKiBSZXBsYWNlcyB0YWJzLCBuZXdsaW5lcyBhbmQgc3BhY2VzIHdpdGggdGhlIGNob3NlbiB2YWx1ZSB3aGVuIHRoZXkgb2NjdXIgaW4gc2VxdWVuY2VzXG4gKiBAcGFyYW0gIHsoU3RyaW5nfFJlZ0V4cCl9IHJlcGxhY2VXaGF0IC0gdGhlIHZhbHVlIG9yIHBhdHRlcm4gdGhhdCBzaG91bGQgYmUgcmVwbGFjZWRcbiAqIEBwYXJhbSAgeyp9ICAgICAgICAgICAgICAgcmVwbGFjZVdpdGggLSB0aGUgcmVwbGFjZW1lbnQgdmFsdWVcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICAgICAgICAgICAgLSBhIFRlbXBsYXRlVGFnIHRyYW5zZm9ybWVyXG4gKi9cbmNvbnN0IHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciA9IChyZXBsYWNlV2hhdCwgcmVwbGFjZVdpdGgpID0+ICh7XG4gIG9uRW5kUmVzdWx0KGVuZFJlc3VsdCkge1xuICAgIGlmIChyZXBsYWNlV2hhdCA9PSBudWxsIHx8IHJlcGxhY2VXaXRoID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ3JlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciByZXF1aXJlcyBhdCBsZWFzdCAyIGFyZ3VtZW50cy4nLFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGVuZFJlc3VsdC5yZXBsYWNlKHJlcGxhY2VXaGF0LCByZXBsYWNlV2l0aCk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyO1xuIiwiY29uc3QgcmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyID0gKHJlcGxhY2VXaGF0LCByZXBsYWNlV2l0aCkgPT4gKHtcbiAgb25TdHJpbmcoc3RyKSB7XG4gICAgaWYgKHJlcGxhY2VXaGF0ID09IG51bGwgfHwgcmVwbGFjZVdpdGggPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAncmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyIHJlcXVpcmVzIGF0IGxlYXN0IDIgYXJndW1lbnRzLicsXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBzdHIucmVwbGFjZShyZXBsYWNlV2hhdCwgcmVwbGFjZVdpdGgpO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlcGxhY2VTdHJpbmdUcmFuc2Zvcm1lcjtcbiIsImNvbnN0IHJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lciA9IChyZXBsYWNlV2hhdCwgcmVwbGFjZVdpdGgpID0+ICh7XG4gIG9uU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgcmVzdWx0U29GYXIpIHtcbiAgICBpZiAocmVwbGFjZVdoYXQgPT0gbnVsbCB8fCByZXBsYWNlV2l0aCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdyZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIgcmVxdWlyZXMgYXQgbGVhc3QgMiBhcmd1bWVudHMuJyxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gRG8gbm90IHRvdWNoIGlmIG51bGwgb3IgdW5kZWZpbmVkXG4gICAgaWYgKHN1YnN0aXR1dGlvbiA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3Vic3RpdHV0aW9uLnRvU3RyaW5nKCkucmVwbGFjZShyZXBsYWNlV2hhdCwgcmVwbGFjZVdpdGgpO1xuICAgIH1cbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXI7XG4iLCJpbXBvcnQgVGVtcGxhdGVUYWcgZnJvbSAnLi4vVGVtcGxhdGVUYWcnO1xuaW1wb3J0IHN0cmlwSW5kZW50VHJhbnNmb3JtZXIgZnJvbSAnLi4vc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgaW5saW5lQXJyYXlUcmFuc2Zvcm1lciBmcm9tICcuLi9pbmxpbmVBcnJheVRyYW5zZm9ybWVyJztcbmltcG9ydCB0cmltUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcbmltcG9ydCBzcGxpdFN0cmluZ1RyYW5zZm9ybWVyIGZyb20gJy4uL3NwbGl0U3RyaW5nVHJhbnNmb3JtZXInO1xuaW1wb3J0IHJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lciBmcm9tICcuLi9yZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXInO1xuXG5jb25zdCBzYWZlSHRtbCA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgc3BsaXRTdHJpbmdUcmFuc2Zvcm1lcignXFxuJyksXG4gIGlubGluZUFycmF5VHJhbnNmb3JtZXIsXG4gIHN0cmlwSW5kZW50VHJhbnNmb3JtZXIsXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbiAgcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyKC8mL2csICcmYW1wOycpLFxuICByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIoLzwvZywgJyZsdDsnKSxcbiAgcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyKC8+L2csICcmZ3Q7JyksXG4gIHJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcigvXCIvZywgJyZxdW90OycpLFxuICByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIoLycvZywgJyYjeDI3OycpLFxuICByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIoL2AvZywgJyYjeDYwOycpLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgc2FmZUh0bWw7XG4iLCJjb25zdCBzcGxpdFN0cmluZ1RyYW5zZm9ybWVyID0gc3BsaXRCeSA9PiAoe1xuICBvblN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHJlc3VsdFNvRmFyKSB7XG4gICAgaWYgKHNwbGl0QnkgIT0gbnVsbCAmJiB0eXBlb2Ygc3BsaXRCeSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0eXBlb2Ygc3Vic3RpdHV0aW9uID09PSAnc3RyaW5nJyAmJiBzdWJzdGl0dXRpb24uaW5jbHVkZXMoc3BsaXRCeSkpIHtcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLnNwbGl0KHNwbGl0QnkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBuZWVkIHRvIHNwZWNpZnkgYSBzdHJpbmcgY2hhcmFjdGVyIHRvIHNwbGl0IGJ5LicpO1xuICAgIH1cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNwbGl0U3RyaW5nVHJhbnNmb3JtZXI7XG4iLCJpbXBvcnQgVGVtcGxhdGVUYWcgZnJvbSAnLi4vVGVtcGxhdGVUYWcnO1xuaW1wb3J0IHN0cmlwSW5kZW50VHJhbnNmb3JtZXIgZnJvbSAnLi4vc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IHN0cmlwSW5kZW50ID0gbmV3IFRlbXBsYXRlVGFnKFxuICBzdHJpcEluZGVudFRyYW5zZm9ybWVyLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBzdHJpcEluZGVudDtcbiIsIi8qKlxuICogc3RyaXBzIGluZGVudGF0aW9uIGZyb20gYSB0ZW1wbGF0ZSBsaXRlcmFsXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGUgPSAnaW5pdGlhbCcgLSB3aGV0aGVyIHRvIHJlbW92ZSBhbGwgaW5kZW50YXRpb24gb3IganVzdCBsZWFkaW5nIGluZGVudGF0aW9uLiBjYW4gYmUgJ2FsbCcgb3IgJ2luaXRpYWwnXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgLSBhIFRlbXBsYXRlVGFnIHRyYW5zZm9ybWVyXG4gKi9cbmNvbnN0IHN0cmlwSW5kZW50VHJhbnNmb3JtZXIgPSAodHlwZSA9ICdpbml0aWFsJykgPT4gKHtcbiAgb25FbmRSZXN1bHQoZW5kUmVzdWx0KSB7XG4gICAgaWYgKHR5cGUgPT09ICdpbml0aWFsJykge1xuICAgICAgLy8gcmVtb3ZlIHRoZSBzaG9ydGVzdCBsZWFkaW5nIGluZGVudGF0aW9uIGZyb20gZWFjaCBsaW5lXG4gICAgICBjb25zdCBtYXRjaCA9IGVuZFJlc3VsdC5tYXRjaCgvXlteXFxTXFxuXSooPz1cXFMpL2dtKTtcbiAgICAgIGNvbnN0IGluZGVudCA9IG1hdGNoICYmIE1hdGgubWluKC4uLm1hdGNoLm1hcChlbCA9PiBlbC5sZW5ndGgpKTtcbiAgICAgIGlmIChpbmRlbnQpIHtcbiAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChgXi57JHtpbmRlbnR9fWAsICdnbScpO1xuICAgICAgICByZXR1cm4gZW5kUmVzdWx0LnJlcGxhY2UocmVnZXhwLCAnJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZW5kUmVzdWx0O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2FsbCcpIHtcbiAgICAgIC8vIHJlbW92ZSBhbGwgaW5kZW50YXRpb24gZnJvbSBlYWNoIGxpbmVcbiAgICAgIHJldHVybiBlbmRSZXN1bHQucmVwbGFjZSgvXlteXFxTXFxuXSsvZ20sICcnKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHR5cGU6ICR7dHlwZX1gKTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdHJpcEluZGVudFRyYW5zZm9ybWVyO1xuIiwiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4uL3N0cmlwSW5kZW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBzdHJpcEluZGVudHMgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIHN0cmlwSW5kZW50VHJhbnNmb3JtZXIoJ2FsbCcpLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBzdHJpcEluZGVudHM7XG4iLCIvKipcbiAqIFRlbXBsYXRlVGFnIHRyYW5zZm9ybWVyIHRoYXQgdHJpbXMgd2hpdGVzcGFjZSBvbiB0aGUgZW5kIHJlc3VsdCBvZiBhIHRhZ2dlZCB0ZW1wbGF0ZVxuICogQHBhcmFtICB7U3RyaW5nfSBzaWRlID0gJycgLSBUaGUgc2lkZSBvZiB0aGUgc3RyaW5nIHRvIHRyaW0uIENhbiBiZSAnc3RhcnQnIG9yICdlbmQnIChhbHRlcm5hdGl2ZWx5ICdsZWZ0JyBvciAncmlnaHQnKVxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgLSBhIFRlbXBsYXRlVGFnIHRyYW5zZm9ybWVyXG4gKi9cbmNvbnN0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciA9IChzaWRlID0gJycpID0+ICh7XG4gIG9uRW5kUmVzdWx0KGVuZFJlc3VsdCkge1xuICAgIGlmIChzaWRlID09PSAnJykge1xuICAgICAgcmV0dXJuIGVuZFJlc3VsdC50cmltKCk7XG4gICAgfVxuXG4gICAgc2lkZSA9IHNpZGUudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmIChzaWRlID09PSAnc3RhcnQnIHx8IHNpZGUgPT09ICdsZWZ0Jykge1xuICAgICAgcmV0dXJuIGVuZFJlc3VsdC5yZXBsYWNlKC9eXFxzKi8sICcnKTtcbiAgICB9XG5cbiAgICBpZiAoc2lkZSA9PT0gJ2VuZCcgfHwgc2lkZSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgcmV0dXJuIGVuZFJlc3VsdC5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNpZGUgbm90IHN1cHBvcnRlZDogJHtzaWRlfWApO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5pZiAoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSByZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuIC8vIGBBZHZhbmNlU3RyaW5nSW5kZXhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYWR2YW5jZXN0cmluZ2luZGV4XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTLCBpbmRleCwgdW5pY29kZSkge1xuICByZXR1cm4gaW5kZXggKyAodW5pY29kZSA/IGF0KFMsIGluZGV4KS5sZW5ndGggOiAxKTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBhc2MgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVFlQRSwgJGNyZWF0ZSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHZhciBjcmVhdGUgPSAkY3JlYXRlIHx8IGFzYztcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCkge1xuICAgIHZhciBPID0gdG9PYmplY3QoJHRoaXMpO1xuICAgIHZhciBzZWxmID0gSU9iamVjdChPKTtcbiAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG4gICAgdmFyIHZhbCwgcmVzO1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgaWYgKElTX01BUCkgcmVzdWx0W2luZGV4XSA9IHJlczsgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzKSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYgKElTX0VWRVJZKSByZXR1cm4gZmFsc2U7IC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsKSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbCkpIHtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgIGlmIChpc09iamVjdChDKSkge1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07XG4iLCIvLyA5LjQuMi4zIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpXG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbCwgbGVuZ3RoKSB7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGludm9rZSA9IHJlcXVpcmUoJy4vX2ludm9rZScpO1xudmFyIGFycmF5U2xpY2UgPSBbXS5zbGljZTtcbnZhciBmYWN0b3JpZXMgPSB7fTtcblxudmFyIGNvbnN0cnVjdCA9IGZ1bmN0aW9uIChGLCBsZW4sIGFyZ3MpIHtcbiAgaWYgKCEobGVuIGluIGZhY3RvcmllcykpIHtcbiAgICBmb3IgKHZhciBuID0gW10sIGkgPSAwOyBpIDwgbGVuOyBpKyspIG5baV0gPSAnYVsnICsgaSArICddJztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICBmYWN0b3JpZXNbbGVuXSA9IEZ1bmN0aW9uKCdGLGEnLCAncmV0dXJuIG5ldyBGKCcgKyBuLmpvaW4oJywnKSArICcpJyk7XG4gIH0gcmV0dXJuIGZhY3Rvcmllc1tsZW5dKEYsIGFyZ3MpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbi5iaW5kIHx8IGZ1bmN0aW9uIGJpbmQodGhhdCAvKiAsIC4uLmFyZ3MgKi8pIHtcbiAgdmFyIGZuID0gYUZ1bmN0aW9uKHRoaXMpO1xuICB2YXIgcGFydEFyZ3MgPSBhcnJheVNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgdmFyIGJvdW5kID0gZnVuY3Rpb24gKC8qIGFyZ3MuLi4gKi8pIHtcbiAgICB2YXIgYXJncyA9IHBhcnRBcmdzLmNvbmNhdChhcnJheVNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBib3VuZCA/IGNvbnN0cnVjdChmbiwgYXJncy5sZW5ndGgsIGFyZ3MpIDogaW52b2tlKGZuLCBhcmdzLCB0aGF0KTtcbiAgfTtcbiAgaWYgKGlzT2JqZWN0KGZuLnByb3RvdHlwZSkpIGJvdW5kLnByb3RvdHlwZSA9IGZuLnByb3RvdHlwZTtcbiAgcmV0dXJuIGJvdW5kO1xufTtcbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjYuMTInIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgaW5kZXgsIHZhbHVlKSB7XG4gIGlmIChpbmRleCBpbiBvYmplY3QpICRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcbiIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJ2YXIgTUFUQ0ggPSByZXF1aXJlKCcuL193a3MnKSgnbWF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgcmUgPSAvLi87XG4gIHRyeSB7XG4gICAgJy8uLydbS0VZXShyZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0cnkge1xuICAgICAgcmVbTUFUQ0hdID0gZmFsc2U7XG4gICAgICByZXR1cm4gIScvLi8nW0tFWV0ocmUpO1xuICAgIH0gY2F0Y2ggKGYpIHsgLyogZW1wdHkgKi8gfVxuICB9IHJldHVybiB0cnVlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJy4vZXM2LnJlZ2V4cC5leGVjJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjJyk7XG5cbnZhciBTUEVDSUVTID0gd2tzKCdzcGVjaWVzJyk7XG5cbnZhciBSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vICNyZXBsYWNlIG5lZWRzIGJ1aWx0LWluIHN1cHBvcnQgZm9yIG5hbWVkIGdyb3Vwcy5cbiAgLy8gI21hdGNoIHdvcmtzIGZpbmUgYmVjYXVzZSBpdCBqdXN0IHJldHVybiB0aGUgZXhlYyByZXN1bHRzLCBldmVuIGlmIGl0IGhhc1xuICAvLyBhIFwiZ3JvcHNcIiBwcm9wZXJ0eS5cbiAgdmFyIHJlID0gLy4vO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICByZXN1bHQuZ3JvdXBzID0geyBhOiAnNycgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICByZXR1cm4gJycucmVwbGFjZShyZSwgJyQ8YT4nKSAhPT0gJzcnO1xufSk7XG5cbnZhciBTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBDaHJvbWUgNTEgaGFzIGEgYnVnZ3kgXCJzcGxpdFwiIGltcGxlbWVudGF0aW9uIHdoZW4gUmVnRXhwI2V4ZWMgIT09IG5hdGl2ZUV4ZWNcbiAgdmFyIHJlID0gLyg/OikvO1xuICB2YXIgb3JpZ2luYWxFeGVjID0gcmUuZXhlYztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9yaWdpbmFsRXhlYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICB2YXIgcmVzdWx0ID0gJ2FiJy5zcGxpdChyZSk7XG4gIHJldHVybiByZXN1bHQubGVuZ3RoID09PSAyICYmIHJlc3VsdFswXSA9PT0gJ2EnICYmIHJlc3VsdFsxXSA9PT0gJ2InO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBsZW5ndGgsIGV4ZWMpIHtcbiAgdmFyIFNZTUJPTCA9IHdrcyhLRVkpO1xuXG4gIHZhciBERUxFR0FURVNfVE9fU1lNQk9MID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTdHJpbmcgbWV0aG9kcyBjYWxsIHN5bWJvbC1uYW1lZCBSZWdFcCBtZXRob2RzXG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pO1xuXG4gIHZhciBERUxFR0FURVNfVE9fRVhFQyA9IERFTEVHQVRFU19UT19TWU1CT0wgPyAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN5bWJvbC1uYW1lZCBSZWdFeHAgbWV0aG9kcyBjYWxsIC5leGVjXG4gICAgdmFyIGV4ZWNDYWxsZWQgPSBmYWxzZTtcbiAgICB2YXIgcmUgPSAvYS87XG4gICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgZXhlY0NhbGxlZCA9IHRydWU7IHJldHVybiBudWxsOyB9O1xuICAgIGlmIChLRVkgPT09ICdzcGxpdCcpIHtcbiAgICAgIC8vIFJlZ0V4cFtAQHNwbGl0XSBkb2Vzbid0IGNhbGwgdGhlIHJlZ2V4J3MgZXhlYyBtZXRob2QsIGJ1dCBmaXJzdCBjcmVhdGVzXG4gICAgICAvLyBhIG5ldyBvbmUuIFdlIG5lZWQgdG8gcmV0dXJuIHRoZSBwYXRjaGVkIHJlZ2V4IHdoZW4gY3JlYXRpbmcgdGhlIG5ldyBvbmUuXG4gICAgICByZS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgICAgcmUuY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZTsgfTtcbiAgICB9XG4gICAgcmVbU1lNQk9MXSgnJyk7XG4gICAgcmV0dXJuICFleGVjQ2FsbGVkO1xuICB9KSA6IHVuZGVmaW5lZDtcblxuICBpZiAoXG4gICAgIURFTEVHQVRFU19UT19TWU1CT0wgfHxcbiAgICAhREVMRUdBVEVTX1RPX0VYRUMgfHxcbiAgICAoS0VZID09PSAncmVwbGFjZScgJiYgIVJFUExBQ0VfU1VQUE9SVFNfTkFNRURfR1JPVVBTKSB8fFxuICAgIChLRVkgPT09ICdzcGxpdCcgJiYgIVNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQylcbiAgKSB7XG4gICAgdmFyIG5hdGl2ZVJlZ0V4cE1ldGhvZCA9IC8uL1tTWU1CT0xdO1xuICAgIHZhciBmbnMgPSBleGVjKFxuICAgICAgZGVmaW5lZCxcbiAgICAgIFNZTUJPTCxcbiAgICAgICcnW0tFWV0sXG4gICAgICBmdW5jdGlvbiBtYXliZUNhbGxOYXRpdmUobmF0aXZlTWV0aG9kLCByZWdleHAsIHN0ciwgYXJnMiwgZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgICAgaWYgKHJlZ2V4cC5leGVjID09PSByZWdleHBFeGVjKSB7XG4gICAgICAgICAgaWYgKERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgICAgICAvLyBUaGUgbmF0aXZlIFN0cmluZyBtZXRob2QgYWxyZWFkeSBkZWxlZ2F0ZXMgdG8gQEBtZXRob2QgKHRoaXNcbiAgICAgICAgICAgIC8vIHBvbHlmaWxsZWQgZnVuY3Rpb24pLCBsZWFzaW5nIHRvIGluZmluaXRlIHJlY3Vyc2lvbi5cbiAgICAgICAgICAgIC8vIFdlIGF2b2lkIGl0IGJ5IGRpcmVjdGx5IGNhbGxpbmcgdGhlIG5hdGl2ZSBAQG1ldGhvZCBtZXRob2QuXG4gICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlUmVnRXhwTWV0aG9kLmNhbGwocmVnZXhwLCBzdHIsIGFyZzIpIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVNZXRob2QuY2FsbChzdHIsIHJlZ2V4cCwgYXJnMikgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBkb25lOiBmYWxzZSB9O1xuICAgICAgfVxuICAgICk7XG4gICAgdmFyIHN0cmZuID0gZm5zWzBdO1xuICAgIHZhciByeGZuID0gZm5zWzFdO1xuXG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJmbik7XG4gICAgaGlkZShSZWdFeHAucHJvdG90eXBlLCBTWU1CT0wsIGxlbmd0aCA9PSAyXG4gICAgICAvLyAyMS4yLjUuOCBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV0oc3RyaW5nLCByZXBsYWNlVmFsdWUpXG4gICAgICAvLyAyMS4yLjUuMTEgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XShzdHJpbmcsIGxpbWl0KVxuICAgICAgPyBmdW5jdGlvbiAoc3RyaW5nLCBhcmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgOiBmdW5jdGlvbiAoc3RyaW5nKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFnc1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKHRoYXQudW5pY29kZSkgcmVzdWx0ICs9ICd1JztcbiAgaWYgKHRoYXQuc3RpY2t5KSByZXN1bHQgKz0gJ3knO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ25hdGl2ZS1mdW5jdGlvbi10by1zdHJpbmcnLCBGdW5jdGlvbi50b1N0cmluZyk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRoYXQsIHRhcmdldCwgQykge1xuICB2YXIgUyA9IHRhcmdldC5jb25zdHJ1Y3RvcjtcbiAgdmFyIFA7XG4gIGlmIChTICE9PSBDICYmIHR5cGVvZiBTID09ICdmdW5jdGlvbicgJiYgKFAgPSBTLnByb3RvdHlwZSkgIT09IEMucHJvdG90eXBlICYmIGlzT2JqZWN0KFApICYmIHNldFByb3RvdHlwZU9mKSB7XG4gICAgc2V0UHJvdG90eXBlT2YodGhhdCwgUCk7XG4gIH0gcmV0dXJuIHRoYXQ7XG59O1xuIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgYXJncywgdGhhdCkge1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIi8vIDcuMi44IElzUmVnRXhwKGFyZ3VtZW50KVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgTUFUQ0ggPSByZXF1aXJlKCcuL193a3MnKSgnbWF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpc1JlZ0V4cDtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiAoKGlzUmVnRXhwID0gaXRbTUFUQ0hdKSAhPT0gdW5kZWZpbmVkID8gISFpc1JlZ0V4cCA6IGNvZihpdCkgPT0gJ1JlZ0V4cCcpO1xufTtcbiIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmIHR5cGVvZiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG4iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgZXhlYykge1xuICB2YXIgZm4gPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV07XG4gIHZhciBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuIiwiLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgUmVmbGVjdCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlJlZmxlY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IFJlZmxlY3QgJiYgUmVmbGVjdC5vd25LZXlzIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnT1BOLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIHJldHVybiBnZXRTeW1ib2xzID8ga2V5cy5jb25jYXQoZ2V0U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyICR0b1N0cmluZyA9IHJlcXVpcmUoJy4vX2Z1bmN0aW9uLXRvLXN0cmluZycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgYnVpbHRpbkV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG5cbiAvLyBgUmVnRXhwRXhlY2AgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHBleGVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChSLCBTKSB7XG4gIHZhciBleGVjID0gUi5leGVjO1xuICBpZiAodHlwZW9mIGV4ZWMgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgcmVzdWx0ID0gZXhlYy5jYWxsKFIsIFMpO1xuICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVnRXhwIGV4ZWMgbWV0aG9kIHJldHVybmVkIHNvbWV0aGluZyBvdGhlciB0aGFuIGFuIE9iamVjdCBvciBudWxsJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKGNsYXNzb2YoUikgIT09ICdSZWdFeHAnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVnRXhwI2V4ZWMgY2FsbGVkIG9uIGluY29tcGF0aWJsZSByZWNlaXZlcicpO1xuICB9XG4gIHJldHVybiBidWlsdGluRXhlYy5jYWxsKFIsIFMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlZ2V4cEZsYWdzID0gcmVxdWlyZSgnLi9fZmxhZ3MnKTtcblxudmFyIG5hdGl2ZUV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG4vLyBUaGlzIGFsd2F5cyByZWZlcnMgdG8gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgYmVjYXVzZSB0aGVcbi8vIFN0cmluZyNyZXBsYWNlIHBvbHlmaWxsIHVzZXMgLi9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzLFxuLy8gd2hpY2ggbG9hZHMgdGhpcyBmaWxlIGJlZm9yZSBwYXRjaGluZyB0aGUgbWV0aG9kLlxudmFyIG5hdGl2ZVJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG5cbnZhciBwYXRjaGVkRXhlYyA9IG5hdGl2ZUV4ZWM7XG5cbnZhciBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG5cbnZhciBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUxID0gL2EvLFxuICAgICAgcmUyID0gL2IqL2c7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTEsICdhJyk7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTIsICdhJyk7XG4gIHJldHVybiByZTFbTEFTVF9JTkRFWF0gIT09IDAgfHwgcmUyW0xBU1RfSU5ERVhdICE9PSAwO1xufSkoKTtcblxuLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXAsIGNvcGllZCBmcm9tIGVzNS1zaGltJ3MgU3RyaW5nI3NwbGl0IHBhdGNoLlxudmFyIE5QQ0dfSU5DTFVERUQgPSAvKCk/Py8uZXhlYygnJylbMV0gIT09IHVuZGVmaW5lZDtcblxudmFyIFBBVENIID0gVVBEQVRFU19MQVNUX0lOREVYX1dST05HIHx8IE5QQ0dfSU5DTFVERUQ7XG5cbmlmIChQQVRDSCkge1xuICBwYXRjaGVkRXhlYyA9IGZ1bmN0aW9uIGV4ZWMoc3RyKSB7XG4gICAgdmFyIHJlID0gdGhpcztcbiAgICB2YXIgbGFzdEluZGV4LCByZUNvcHksIG1hdGNoLCBpO1xuXG4gICAgaWYgKE5QQ0dfSU5DTFVERUQpIHtcbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14nICsgcmUuc291cmNlICsgJyQoPyFcXFxccyknLCByZWdleHBGbGFncy5jYWxsKHJlKSk7XG4gICAgfVxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcpIGxhc3RJbmRleCA9IHJlW0xBU1RfSU5ERVhdO1xuXG4gICAgbWF0Y2ggPSBuYXRpdmVFeGVjLmNhbGwocmUsIHN0cik7XG5cbiAgICBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HICYmIG1hdGNoKSB7XG4gICAgICByZVtMQVNUX0lOREVYXSA9IHJlLmdsb2JhbCA/IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIDogbGFzdEluZGV4O1xuICAgIH1cbiAgICBpZiAoTlBDR19JTkNMVURFRCAmJiBtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAxKSB7XG4gICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYFxuICAgICAgLy8gZm9yIE5QQ0csIGxpa2UgSUU4LiBOT1RFOiBUaGlzIGRvZXNuJyB3b3JrIGZvciAvKC4/KT8vXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG4gICAgICBuYXRpdmVSZXBsYWNlLmNhbGwobWF0Y2hbMF0sIHJlQ29weSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCkgbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXRjaGVkRXhlYztcbiIsIi8vIDcuMi45IFNhbWVWYWx1ZSh4LCB5KVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xufTtcbiIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMjAgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1ldGhvZCwgYXJnKSB7XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbFxuICAgIGFyZyA/IG1ldGhvZC5jYWxsKG51bGwsIGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgMSkgOiBtZXRob2QuY2FsbChudWxsKTtcbiAgfSk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbiIsIi8vIGhlbHBlciBmb3IgU3RyaW5nI3tzdGFydHNXaXRoLCBlbmRzV2l0aCwgaW5jbHVkZXN9XG52YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuL19pcy1yZWdleHAnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0aGF0LCBzZWFyY2hTdHJpbmcsIE5BTUUpIHtcbiAgaWYgKGlzUmVnRXhwKHNlYXJjaFN0cmluZykpIHRocm93IFR5cGVFcnJvcignU3RyaW5nIycgKyBOQU1FICsgXCIgZG9lc24ndCBhY2NlcHQgcmVnZXghXCIpO1xuICByZXR1cm4gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xufTtcbiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc3BhY2VzID0gcmVxdWlyZSgnLi9fc3RyaW5nLXdzJyk7XG52YXIgc3BhY2UgPSAnWycgKyBzcGFjZXMgKyAnXSc7XG52YXIgbm9uID0gJ1xcdTIwMGJcXHUwMDg1JztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyBzcGFjZSArIHNwYWNlICsgJyonKTtcbnZhciBydHJpbSA9IFJlZ0V4cChzcGFjZSArIHNwYWNlICsgJyokJyk7XG5cbnZhciBleHBvcnRlciA9IGZ1bmN0aW9uIChLRVksIGV4ZWMsIEFMSUFTKSB7XG4gIHZhciBleHAgPSB7fTtcbiAgdmFyIEZPUkNFID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXNwYWNlc1tLRVldKCkgfHwgbm9uW0tFWV0oKSAhPSBub247XG4gIH0pO1xuICB2YXIgZm4gPSBleHBbS0VZXSA9IEZPUkNFID8gZXhlYyh0cmltKSA6IHNwYWNlc1tLRVldO1xuICBpZiAoQUxJQVMpIGV4cFtBTElBU10gPSBmbjtcbiAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBGT1JDRSwgJ1N0cmluZycsIGV4cCk7XG59O1xuXG4vLyAxIC0+IFN0cmluZyN0cmltTGVmdFxuLy8gMiAtPiBTdHJpbmcjdHJpbVJpZ2h0XG4vLyAzIC0+IFN0cmluZyN0cmltXG52YXIgdHJpbSA9IGV4cG9ydGVyLnRyaW0gPSBmdW5jdGlvbiAoc3RyaW5nLCBUWVBFKSB7XG4gIHN0cmluZyA9IFN0cmluZyhkZWZpbmVkKHN0cmluZykpO1xuICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gIGlmIChUWVBFICYgMikgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgcmV0dXJuIHN0cmluZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICdcXHgwOVxceDBBXFx4MEJcXHgwQ1xceDBEXFx4MjBcXHhBMFxcdTE2ODBcXHUxODBFXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwMycgK1xuICAnXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcbiIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRmaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoMik7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX3N0cmljdC1tZXRob2QnKShbXS5maWx0ZXIsIHRydWUpLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy43IC8gMTUuNC40LjIwIEFycmF5LnByb3RvdHlwZS5maWx0ZXIoY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJGZpbHRlcih0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdChhcnJheUxpa2UpO1xuICAgIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIG1hcGZuID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGl0ZXJGbiA9IGdldEl0ZXJGbihPKTtcbiAgICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmIChtYXBwaW5nKSBtYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmIChpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSkge1xuICAgICAgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQygpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IgKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDEpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19zdHJpY3QtbWV0aG9kJykoW10ubWFwLCB0cnVlKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMTUgLyAxNS40LjQuMTkgQXJyYXkucHJvdG90eXBlLm1hcChjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBhcnJheVNsaWNlID0gW10uc2xpY2U7XG5cbi8vIGZhbGxiYWNrIGZvciBub3QgYXJyYXktbGlrZSBFUzMgc3RyaW5ncyBhbmQgRE9NIG9iamVjdHNcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIGlmIChodG1sKSBhcnJheVNsaWNlLmNhbGwoaHRtbCk7XG59KSwgJ0FycmF5Jywge1xuICBzbGljZTogZnVuY3Rpb24gc2xpY2UoYmVnaW4sIGVuZCkge1xuICAgIHZhciBsZW4gPSB0b0xlbmd0aCh0aGlzLmxlbmd0aCk7XG4gICAgdmFyIGtsYXNzID0gY29mKHRoaXMpO1xuICAgIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogZW5kO1xuICAgIGlmIChrbGFzcyA9PSAnQXJyYXknKSByZXR1cm4gYXJyYXlTbGljZS5jYWxsKHRoaXMsIGJlZ2luLCBlbmQpO1xuICAgIHZhciBzdGFydCA9IHRvQWJzb2x1dGVJbmRleChiZWdpbiwgbGVuKTtcbiAgICB2YXIgdXBUbyA9IHRvQWJzb2x1dGVJbmRleChlbmQsIGxlbik7XG4gICAgdmFyIHNpemUgPSB0b0xlbmd0aCh1cFRvIC0gc3RhcnQpO1xuICAgIHZhciBjbG9uZWQgPSBuZXcgQXJyYXkoc2l6ZSk7XG4gICAgdmFyIGkgPSAwO1xuICAgIGZvciAoOyBpIDwgc2l6ZTsgaSsrKSBjbG9uZWRbaV0gPSBrbGFzcyA9PSAnU3RyaW5nJ1xuICAgICAgPyB0aGlzLmNoYXJBdChzdGFydCArIGkpXG4gICAgICA6IHRoaXNbc3RhcnQgKyBpXTtcbiAgICByZXR1cm4gY2xvbmVkO1xuICB9XG59KTtcbiIsInZhciBEYXRlUHJvdG8gPSBEYXRlLnByb3RvdHlwZTtcbnZhciBJTlZBTElEX0RBVEUgPSAnSW52YWxpZCBEYXRlJztcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IERhdGVQcm90b1tUT19TVFJJTkddO1xudmFyIGdldFRpbWUgPSBEYXRlUHJvdG8uZ2V0VGltZTtcbmlmIChuZXcgRGF0ZShOYU4pICsgJycgIT0gSU5WQUxJRF9EQVRFKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoRGF0ZVByb3RvLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciB2YWx1ZSA9IGdldFRpbWUuY2FsbCh0aGlzKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/ICR0b1N0cmluZy5jYWxsKHRoaXMpIDogSU5WQUxJRF9EQVRFO1xuICB9KTtcbn1cbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgRlByb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyAxOS4yLjQuMiBuYW1lXG5OQU1FIGluIEZQcm90byB8fCByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmIGRQKEZQcm90bywgTkFNRSwge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKCcnICsgdGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmUoJy4vX2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIGdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyICR0cmltID0gcmVxdWlyZSgnLi9fc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIE5VTUJFUiA9ICdOdW1iZXInO1xudmFyICROdW1iZXIgPSBnbG9iYWxbTlVNQkVSXTtcbnZhciBCYXNlID0gJE51bWJlcjtcbnZhciBwcm90byA9ICROdW1iZXIucHJvdG90eXBlO1xuLy8gT3BlcmEgfjEyIGhhcyBicm9rZW4gT2JqZWN0I3RvU3RyaW5nXG52YXIgQlJPS0VOX0NPRiA9IGNvZihyZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJykocHJvdG8pKSA9PSBOVU1CRVI7XG52YXIgVFJJTSA9ICd0cmltJyBpbiBTdHJpbmcucHJvdG90eXBlO1xuXG4vLyA3LjEuMyBUb051bWJlcihhcmd1bWVudClcbnZhciB0b051bWJlciA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgaXQgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgZmFsc2UpO1xuICBpZiAodHlwZW9mIGl0ID09ICdzdHJpbmcnICYmIGl0Lmxlbmd0aCA+IDIpIHtcbiAgICBpdCA9IFRSSU0gPyBpdC50cmltKCkgOiAkdHJpbShpdCwgMyk7XG4gICAgdmFyIGZpcnN0ID0gaXQuY2hhckNvZGVBdCgwKTtcbiAgICB2YXIgdGhpcmQsIHJhZGl4LCBtYXhDb2RlO1xuICAgIGlmIChmaXJzdCA9PT0gNDMgfHwgZmlyc3QgPT09IDQ1KSB7XG4gICAgICB0aGlyZCA9IGl0LmNoYXJDb2RlQXQoMik7XG4gICAgICBpZiAodGhpcmQgPT09IDg4IHx8IHRoaXJkID09PSAxMjApIHJldHVybiBOYU47IC8vIE51bWJlcignKzB4MScpIHNob3VsZCBiZSBOYU4sIG9sZCBWOCBmaXhcbiAgICB9IGVsc2UgaWYgKGZpcnN0ID09PSA0OCkge1xuICAgICAgc3dpdGNoIChpdC5jaGFyQ29kZUF0KDEpKSB7XG4gICAgICAgIGNhc2UgNjY6IGNhc2UgOTg6IHJhZGl4ID0gMjsgbWF4Q29kZSA9IDQ5OyBicmVhazsgLy8gZmFzdCBlcXVhbCAvXjBiWzAxXSskL2lcbiAgICAgICAgY2FzZSA3OTogY2FzZSAxMTE6IHJhZGl4ID0gODsgbWF4Q29kZSA9IDU1OyBicmVhazsgLy8gZmFzdCBlcXVhbCAvXjBvWzAtN10rJC9pXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiAraXQ7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBkaWdpdHMgPSBpdC5zbGljZSgyKSwgaSA9IDAsIGwgPSBkaWdpdHMubGVuZ3RoLCBjb2RlOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvZGUgPSBkaWdpdHMuY2hhckNvZGVBdChpKTtcbiAgICAgICAgLy8gcGFyc2VJbnQgcGFyc2VzIGEgc3RyaW5nIHRvIGEgZmlyc3QgdW5hdmFpbGFibGUgc3ltYm9sXG4gICAgICAgIC8vIGJ1dCBUb051bWJlciBzaG91bGQgcmV0dXJuIE5hTiBpZiBhIHN0cmluZyBjb250YWlucyB1bmF2YWlsYWJsZSBzeW1ib2xzXG4gICAgICAgIGlmIChjb2RlIDwgNDggfHwgY29kZSA+IG1heENvZGUpIHJldHVybiBOYU47XG4gICAgICB9IHJldHVybiBwYXJzZUludChkaWdpdHMsIHJhZGl4KTtcbiAgICB9XG4gIH0gcmV0dXJuICtpdDtcbn07XG5cbmlmICghJE51bWJlcignIDBvMScpIHx8ICEkTnVtYmVyKCcwYjEnKSB8fCAkTnVtYmVyKCcrMHgxJykpIHtcbiAgJE51bWJlciA9IGZ1bmN0aW9uIE51bWJlcih2YWx1ZSkge1xuICAgIHZhciBpdCA9IGFyZ3VtZW50cy5sZW5ndGggPCAxID8gMCA6IHZhbHVlO1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICByZXR1cm4gdGhhdCBpbnN0YW5jZW9mICROdW1iZXJcbiAgICAgIC8vIGNoZWNrIG9uIDEuLmNvbnN0cnVjdG9yKGZvbykgY2FzZVxuICAgICAgJiYgKEJST0tFTl9DT0YgPyBmYWlscyhmdW5jdGlvbiAoKSB7IHByb3RvLnZhbHVlT2YuY2FsbCh0aGF0KTsgfSkgOiBjb2YodGhhdCkgIT0gTlVNQkVSKVxuICAgICAgICA/IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBCYXNlKHRvTnVtYmVyKGl0KSksIHRoYXQsICROdW1iZXIpIDogdG9OdW1iZXIoaXQpO1xuICB9O1xuICBmb3IgKHZhciBrZXlzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUE4oQmFzZSkgOiAoXG4gICAgLy8gRVMzOlxuICAgICdNQVhfVkFMVUUsTUlOX1ZBTFVFLE5hTixORUdBVElWRV9JTkZJTklUWSxQT1NJVElWRV9JTkZJTklUWSwnICtcbiAgICAvLyBFUzYgKGluIGNhc2UsIGlmIG1vZHVsZXMgd2l0aCBFUzYgTnVtYmVyIHN0YXRpY3MgcmVxdWlyZWQgYmVmb3JlKTpcbiAgICAnRVBTSUxPTixpc0Zpbml0ZSxpc0ludGVnZXIsaXNOYU4saXNTYWZlSW50ZWdlcixNQVhfU0FGRV9JTlRFR0VSLCcgK1xuICAgICdNSU5fU0FGRV9JTlRFR0VSLHBhcnNlRmxvYXQscGFyc2VJbnQsaXNJbnRlZ2VyJ1xuICApLnNwbGl0KCcsJyksIGogPSAwLCBrZXk7IGtleXMubGVuZ3RoID4gajsgaisrKSB7XG4gICAgaWYgKGhhcyhCYXNlLCBrZXkgPSBrZXlzW2pdKSAmJiAhaGFzKCROdW1iZXIsIGtleSkpIHtcbiAgICAgIGRQKCROdW1iZXIsIGtleSwgZ09QRChCYXNlLCBrZXkpKTtcbiAgICB9XG4gIH1cbiAgJE51bWJlci5wcm90b3R5cGUgPSBwcm90bztcbiAgcHJvdG8uY29uc3RydWN0b3IgPSAkTnVtYmVyO1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKGdsb2JhbCwgTlVNQkVSLCAkTnVtYmVyKTtcbn1cbiIsIi8vIDIwLjEuMi40IE51bWJlci5pc05hTihudW1iZXIpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtcbiAgaXNOYU46IGZ1bmN0aW9uIGlzTmFOKG51bWJlcikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICByZXR1cm4gbnVtYmVyICE9IG51bWJlcjtcbiAgfVxufSk7XG4iLCIvLyAxOS4xLjIuNSBPYmplY3QuZnJlZXplKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBtZXRhID0gcmVxdWlyZSgnLi9fbWV0YScpLm9uRnJlZXplO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2ZyZWV6ZScsIGZ1bmN0aW9uICgkZnJlZXplKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmcmVlemUoaXQpIHtcbiAgICByZXR1cm4gJGZyZWV6ZSAmJiBpc09iamVjdChpdCkgPyAkZnJlZXplKG1ldGEoaXQpKSA6IGl0O1xuICB9O1xufSk7XG4iLCIvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0lPYmplY3QoaXQpLCBrZXkpO1xuICB9O1xufSk7XG4iLCIvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JykuZjtcbn0pO1xuIiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCkge1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgc2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldCB9KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgdGVzdCA9IHt9O1xudGVzdFtyZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKV0gPSAneic7XG5pZiAodGVzdCArICcnICE9ICdbb2JqZWN0IHpdJykge1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbiAgfSwgdHJ1ZSk7XG59XG4iLCIvLyAyNi4xLjIgUmVmbGVjdC5jb25zdHJ1Y3QodGFyZ2V0LCBhcmd1bWVudHNMaXN0IFssIG5ld1RhcmdldF0pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9fYmluZCcpO1xudmFyIHJDb25zdHJ1Y3QgPSAocmVxdWlyZSgnLi9fZ2xvYmFsJykuUmVmbGVjdCB8fCB7fSkuY29uc3RydWN0O1xuXG4vLyBNUyBFZGdlIHN1cHBvcnRzIG9ubHkgMiBhcmd1bWVudHMgYW5kIGFyZ3VtZW50c0xpc3QgYXJndW1lbnQgaXMgb3B0aW9uYWxcbi8vIEZGIE5pZ2h0bHkgc2V0cyB0aGlyZCBhcmd1bWVudCBhcyBgbmV3LnRhcmdldGAsIGJ1dCBkb2VzIG5vdCBjcmVhdGUgYHRoaXNgIGZyb20gaXRcbnZhciBORVdfVEFSR0VUX0JVRyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRigpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gIShyQ29uc3RydWN0KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgW10sIEYpIGluc3RhbmNlb2YgRik7XG59KTtcbnZhciBBUkdTX0JVRyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJDb25zdHJ1Y3QoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KTtcbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChORVdfVEFSR0VUX0JVRyB8fCBBUkdTX0JVRyksICdSZWZsZWN0Jywge1xuICBjb25zdHJ1Y3Q6IGZ1bmN0aW9uIGNvbnN0cnVjdChUYXJnZXQsIGFyZ3MgLyogLCBuZXdUYXJnZXQgKi8pIHtcbiAgICBhRnVuY3Rpb24oVGFyZ2V0KTtcbiAgICBhbk9iamVjdChhcmdzKTtcbiAgICB2YXIgbmV3VGFyZ2V0ID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyBUYXJnZXQgOiBhRnVuY3Rpb24oYXJndW1lbnRzWzJdKTtcbiAgICBpZiAoQVJHU19CVUcgJiYgIU5FV19UQVJHRVRfQlVHKSByZXR1cm4gckNvbnN0cnVjdChUYXJnZXQsIGFyZ3MsIG5ld1RhcmdldCk7XG4gICAgaWYgKFRhcmdldCA9PSBuZXdUYXJnZXQpIHtcbiAgICAgIC8vIHcvbyBhbHRlcmVkIG5ld1RhcmdldCwgb3B0aW1pemF0aW9uIGZvciAwLTQgYXJndW1lbnRzXG4gICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBUYXJnZXQoKTtcbiAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdKTtcbiAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgY2FzZSAzOiByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgY2FzZSA0OiByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgICAgIH1cbiAgICAgIC8vIHcvbyBhbHRlcmVkIG5ld1RhcmdldCwgbG90IG9mIGFyZ3VtZW50cyBjYXNlXG4gICAgICB2YXIgJGFyZ3MgPSBbbnVsbF07XG4gICAgICAkYXJncy5wdXNoLmFwcGx5KCRhcmdzLCBhcmdzKTtcbiAgICAgIHJldHVybiBuZXcgKGJpbmQuYXBwbHkoVGFyZ2V0LCAkYXJncykpKCk7XG4gICAgfVxuICAgIC8vIHdpdGggYWx0ZXJlZCBuZXdUYXJnZXQsIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGNvbnN0cnVjdG9yc1xuICAgIHZhciBwcm90byA9IG5ld1RhcmdldC5wcm90b3R5cGU7XG4gICAgdmFyIGluc3RhbmNlID0gY3JlYXRlKGlzT2JqZWN0KHByb3RvKSA/IHByb3RvIDogT2JqZWN0LnByb3RvdHlwZSk7XG4gICAgdmFyIHJlc3VsdCA9IEZ1bmN0aW9uLmFwcGx5LmNhbGwoVGFyZ2V0LCBpbnN0YW5jZSwgYXJncyk7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHJlc3VsdCkgPyByZXN1bHQgOiBpbnN0YW5jZTtcbiAgfVxufSk7XG4iLCIvLyAyNi4xLjYgUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSBbLCByZWNlaXZlcl0pXG52YXIgZ09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcblxuZnVuY3Rpb24gZ2V0KHRhcmdldCwgcHJvcGVydHlLZXkgLyogLCByZWNlaXZlciAqLykge1xuICB2YXIgcmVjZWl2ZXIgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IGFyZ3VtZW50c1syXTtcbiAgdmFyIGRlc2MsIHByb3RvO1xuICBpZiAoYW5PYmplY3QodGFyZ2V0KSA9PT0gcmVjZWl2ZXIpIHJldHVybiB0YXJnZXRbcHJvcGVydHlLZXldO1xuICBpZiAoZGVzYyA9IGdPUEQuZih0YXJnZXQsIHByb3BlcnR5S2V5KSkgcmV0dXJuIGhhcyhkZXNjLCAndmFsdWUnKVxuICAgID8gZGVzYy52YWx1ZVxuICAgIDogZGVzYy5nZXQgIT09IHVuZGVmaW5lZFxuICAgICAgPyBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gIGlmIChpc09iamVjdChwcm90byA9IGdldFByb3RvdHlwZU9mKHRhcmdldCkpKSByZXR1cm4gZ2V0KHByb3RvLCBwcm9wZXJ0eUtleSwgcmVjZWl2ZXIpO1xufVxuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7IGdldDogZ2V0IH0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi9faW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJyk7XG52YXIgJGZsYWdzID0gcmVxdWlyZSgnLi9fZmxhZ3MnKTtcbnZhciAkUmVnRXhwID0gZ2xvYmFsLlJlZ0V4cDtcbnZhciBCYXNlID0gJFJlZ0V4cDtcbnZhciBwcm90byA9ICRSZWdFeHAucHJvdG90eXBlO1xudmFyIHJlMSA9IC9hL2c7XG52YXIgcmUyID0gL2EvZztcbi8vIFwibmV3XCIgY3JlYXRlcyBhIG5ldyBvYmplY3QsIG9sZCB3ZWJraXQgYnVnZ3kgaGVyZVxudmFyIENPUlJFQ1RfTkVXID0gbmV3ICRSZWdFeHAocmUxKSAhPT0gcmUxO1xuXG5pZiAocmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAoIUNPUlJFQ1RfTkVXIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZTJbcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyldID0gZmFsc2U7XG4gIC8vIFJlZ0V4cCBjb25zdHJ1Y3RvciBjYW4gYWx0ZXIgZmxhZ3MgYW5kIElzUmVnRXhwIHdvcmtzIGNvcnJlY3Qgd2l0aCBAQG1hdGNoXG4gIHJldHVybiAkUmVnRXhwKHJlMSkgIT0gcmUxIHx8ICRSZWdFeHAocmUyKSA9PSByZTIgfHwgJFJlZ0V4cChyZTEsICdpJykgIT0gJy9hL2knO1xufSkpKSB7XG4gICRSZWdFeHAgPSBmdW5jdGlvbiBSZWdFeHAocCwgZikge1xuICAgIHZhciB0aVJFID0gdGhpcyBpbnN0YW5jZW9mICRSZWdFeHA7XG4gICAgdmFyIHBpUkUgPSBpc1JlZ0V4cChwKTtcbiAgICB2YXIgZmlVID0gZiA9PT0gdW5kZWZpbmVkO1xuICAgIHJldHVybiAhdGlSRSAmJiBwaVJFICYmIHAuY29uc3RydWN0b3IgPT09ICRSZWdFeHAgJiYgZmlVID8gcFxuICAgICAgOiBpbmhlcml0SWZSZXF1aXJlZChDT1JSRUNUX05FV1xuICAgICAgICA/IG5ldyBCYXNlKHBpUkUgJiYgIWZpVSA/IHAuc291cmNlIDogcCwgZilcbiAgICAgICAgOiBCYXNlKChwaVJFID0gcCBpbnN0YW5jZW9mICRSZWdFeHApID8gcC5zb3VyY2UgOiBwLCBwaVJFICYmIGZpVSA/ICRmbGFncy5jYWxsKHApIDogZilcbiAgICAgICwgdGlSRSA/IHRoaXMgOiBwcm90bywgJFJlZ0V4cCk7XG4gIH07XG4gIHZhciBwcm94eSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBrZXkgaW4gJFJlZ0V4cCB8fCBkUCgkUmVnRXhwLCBrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQmFzZVtrZXldOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAoaXQpIHsgQmFzZVtrZXldID0gaXQ7IH1cbiAgICB9KTtcbiAgfTtcbiAgZm9yICh2YXIga2V5cyA9IGdPUE4oQmFzZSksIGkgPSAwOyBrZXlzLmxlbmd0aCA+IGk7KSBwcm94eShrZXlzW2krK10pO1xuICBwcm90by5jb25zdHJ1Y3RvciA9ICRSZWdFeHA7XG4gICRSZWdFeHAucHJvdG90eXBlID0gcHJvdG87XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoZ2xvYmFsLCAnUmVnRXhwJywgJFJlZ0V4cCk7XG59XG5cbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoJ1JlZ0V4cCcpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYycpO1xucmVxdWlyZSgnLi9fZXhwb3J0Jykoe1xuICB0YXJnZXQ6ICdSZWdFeHAnLFxuICBwcm90bzogdHJ1ZSxcbiAgZm9yY2VkOiByZWdleHBFeGVjICE9PSAvLi8uZXhlY1xufSwge1xuICBleGVjOiByZWdleHBFeGVjXG59KTtcbiIsIi8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzKClcbmlmIChyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmIC8uL2cuZmxhZ3MgIT0gJ2cnKSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mKFJlZ0V4cC5wcm90b3R5cGUsICdmbGFncycsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IHJlcXVpcmUoJy4vX2ZsYWdzJylcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4vX2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAbWF0Y2ggbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgnbWF0Y2gnLCAxLCBmdW5jdGlvbiAoZGVmaW5lZCwgTUFUQ0gsICRtYXRjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUubWF0Y2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUubWF0Y2hcbiAgICBmdW5jdGlvbiBtYXRjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICAgIHZhciBmbiA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbTUFUQ0hdO1xuICAgICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbTUFUQ0hdKFN0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQG1hdGNoXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZSgkbWF0Y2gsIHJlZ2V4cCwgdGhpcyk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICBpZiAoIXJ4Lmdsb2JhbCkgcmV0dXJuIHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgQSA9IFtdO1xuICAgICAgdmFyIG4gPSAwO1xuICAgICAgdmFyIHJlc3VsdDtcbiAgICAgIHdoaWxlICgocmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUykpICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICBBW25dID0gbWF0Y2hTdHI7XG4gICAgICAgIGlmIChtYXRjaFN0ciA9PT0gJycpIHJ4Lmxhc3RJbmRleCA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCB0b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICAgIG4rKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBuID09PSAwID8gbnVsbCA6IEE7XG4gICAgfVxuICBdO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi9fYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFMgPSAvXFwkKFskJmAnXXxcXGRcXGQ/fDxbXj5dKj4pL2c7XG52YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQgPSAvXFwkKFskJmAnXXxcXGRcXGQ/KS9nO1xuXG52YXIgbWF5YmVUb1N0cmluZyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/IGl0IDogU3RyaW5nKGl0KTtcbn07XG5cbi8vIEBAcmVwbGFjZSBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdyZXBsYWNlJywgMiwgZnVuY3Rpb24gKGRlZmluZWQsIFJFUExBQ0UsICRyZXBsYWNlLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnJlcGxhY2VcbiAgICBmdW5jdGlvbiByZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICAgIHZhciBmbiA9IHNlYXJjaFZhbHVlID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlYXJjaFZhbHVlW1JFUExBQ0VdO1xuICAgICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBmbi5jYWxsKHNlYXJjaFZhbHVlLCBPLCByZXBsYWNlVmFsdWUpXG4gICAgICAgIDogJHJlcGxhY2UuY2FsbChTdHJpbmcoTyksIHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHJlcGxhY2VcbiAgICBmdW5jdGlvbiAocmVnZXhwLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUoJHJlcGxhY2UsIHJlZ2V4cCwgdGhpcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuICAgICAgdmFyIGZ1bmN0aW9uYWxSZXBsYWNlID0gdHlwZW9mIHJlcGxhY2VWYWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIGlmICghZnVuY3Rpb25hbFJlcGxhY2UpIHJlcGxhY2VWYWx1ZSA9IFN0cmluZyhyZXBsYWNlVmFsdWUpO1xuICAgICAgdmFyIGdsb2JhbCA9IHJ4Lmdsb2JhbDtcbiAgICAgIGlmIChnbG9iYWwpIHtcbiAgICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIH1cbiAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIGJyZWFrO1xuICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgaWYgKCFnbG9iYWwpIGJyZWFrO1xuICAgICAgICB2YXIgbWF0Y2hTdHIgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgaWYgKG1hdGNoU3RyID09PSAnJykgcngubGFzdEluZGV4ID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHRvTGVuZ3RoKHJ4Lmxhc3RJbmRleCksIGZ1bGxVbmljb2RlKTtcbiAgICAgIH1cbiAgICAgIHZhciBhY2N1bXVsYXRlZFJlc3VsdCA9ICcnO1xuICAgICAgdmFyIG5leHRTb3VyY2VQb3NpdGlvbiA9IDA7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0c1tpXTtcbiAgICAgICAgdmFyIG1hdGNoZWQgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gbWF4KG1pbih0b0ludGVnZXIocmVzdWx0LmluZGV4KSwgUy5sZW5ndGgpLCAwKTtcbiAgICAgICAgdmFyIGNhcHR1cmVzID0gW107XG4gICAgICAgIC8vIE5PVEU6IFRoaXMgaXMgZXF1aXZhbGVudCB0b1xuICAgICAgICAvLyAgIGNhcHR1cmVzID0gcmVzdWx0LnNsaWNlKDEpLm1hcChtYXliZVRvU3RyaW5nKVxuICAgICAgICAvLyBidXQgZm9yIHNvbWUgcmVhc29uIGBuYXRpdmVTbGljZS5jYWxsKHJlc3VsdCwgMSwgcmVzdWx0Lmxlbmd0aClgIChjYWxsZWQgaW5cbiAgICAgICAgLy8gdGhlIHNsaWNlIHBvbHlmaWxsIHdoZW4gc2xpY2luZyBuYXRpdmUgYXJyYXlzKSBcImRvZXNuJ3Qgd29ya1wiIGluIHNhZmFyaSA5IGFuZFxuICAgICAgICAvLyBjYXVzZXMgYSBjcmFzaCAoaHR0cHM6Ly9wYXN0ZWJpbi5jb20vTjIxUXplUUEpIHdoZW4gdHJ5aW5nIHRvIGRlYnVnIGl0LlxuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IHJlc3VsdC5sZW5ndGg7IGorKykgY2FwdHVyZXMucHVzaChtYXliZVRvU3RyaW5nKHJlc3VsdFtqXSkpO1xuICAgICAgICB2YXIgbmFtZWRDYXB0dXJlcyA9IHJlc3VsdC5ncm91cHM7XG4gICAgICAgIGlmIChmdW5jdGlvbmFsUmVwbGFjZSkge1xuICAgICAgICAgIHZhciByZXBsYWNlckFyZ3MgPSBbbWF0Y2hlZF0uY29uY2F0KGNhcHR1cmVzLCBwb3NpdGlvbiwgUyk7XG4gICAgICAgICAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkgcmVwbGFjZXJBcmdzLnB1c2gobmFtZWRDYXB0dXJlcyk7XG4gICAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gU3RyaW5nKHJlcGxhY2VWYWx1ZS5hcHBseSh1bmRlZmluZWQsIHJlcGxhY2VyQXJncykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcGxhY2VtZW50ID0gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIFMsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24gPj0gbmV4dFNvdXJjZVBvc2l0aW9uKSB7XG4gICAgICAgICAgYWNjdW11bGF0ZWRSZXN1bHQgKz0gUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24sIHBvc2l0aW9uKSArIHJlcGxhY2VtZW50O1xuICAgICAgICAgIG5leHRTb3VyY2VQb3NpdGlvbiA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2N1bXVsYXRlZFJlc3VsdCArIFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uKTtcbiAgICB9XG4gIF07XG5cbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1nZXRzdWJzdGl0dXRpb25cbiAgZnVuY3Rpb24gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIHN0ciwgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlbWVudCkge1xuICAgIHZhciB0YWlsUG9zID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICB2YXIgbSA9IGNhcHR1cmVzLmxlbmd0aDtcbiAgICB2YXIgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEO1xuICAgIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG5hbWVkQ2FwdHVyZXMgPSB0b09iamVjdChuYW1lZENhcHR1cmVzKTtcbiAgICAgIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MUztcbiAgICB9XG4gICAgcmV0dXJuICRyZXBsYWNlLmNhbGwocmVwbGFjZW1lbnQsIHN5bWJvbHMsIGZ1bmN0aW9uIChtYXRjaCwgY2gpIHtcbiAgICAgIHZhciBjYXB0dXJlO1xuICAgICAgc3dpdGNoIChjaC5jaGFyQXQoMCkpIHtcbiAgICAgICAgY2FzZSAnJCc6IHJldHVybiAnJCc7XG4gICAgICAgIGNhc2UgJyYnOiByZXR1cm4gbWF0Y2hlZDtcbiAgICAgICAgY2FzZSAnYCc6IHJldHVybiBzdHIuc2xpY2UoMCwgcG9zaXRpb24pO1xuICAgICAgICBjYXNlIFwiJ1wiOiByZXR1cm4gc3RyLnNsaWNlKHRhaWxQb3MpO1xuICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICBjYXB0dXJlID0gbmFtZWRDYXB0dXJlc1tjaC5zbGljZSgxLCAtMSldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiAvLyBcXGRcXGQ/XG4gICAgICAgICAgdmFyIG4gPSArY2g7XG4gICAgICAgICAgaWYgKG4gPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICBpZiAobiA+IG0pIHtcbiAgICAgICAgICAgIHZhciBmID0gZmxvb3IobiAvIDEwKTtcbiAgICAgICAgICAgIGlmIChmID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICBpZiAoZiA8PSBtKSByZXR1cm4gY2FwdHVyZXNbZiAtIDFdID09PSB1bmRlZmluZWQgPyBjaC5jaGFyQXQoMSkgOiBjYXB0dXJlc1tmIC0gMV0gKyBjaC5jaGFyQXQoMSk7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhcHR1cmUgPSBjYXB0dXJlc1tuIC0gMV07XG4gICAgICB9XG4gICAgICByZXR1cm4gY2FwdHVyZSA9PT0gdW5kZWZpbmVkID8gJycgOiBjYXB0dXJlO1xuICAgIH0pO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgc2FtZVZhbHVlID0gcmVxdWlyZSgnLi9fc2FtZS12YWx1ZScpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQHNlYXJjaCBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdzZWFyY2gnLCAxLCBmdW5jdGlvbiAoZGVmaW5lZCwgU0VBUkNILCAkc2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc2VhcmNoXG4gICAgZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgICAgdmFyIGZuID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtTRUFSQ0hdO1xuICAgICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXShTdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc2VhcmNoXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZSgkc2VhcmNoLCByZWdleHAsIHRoaXMpO1xuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuICAgICAgdmFyIHByZXZpb3VzTGFzdEluZGV4ID0gcngubGFzdEluZGV4O1xuICAgICAgaWYgKCFzYW1lVmFsdWUocHJldmlvdXNMYXN0SW5kZXgsIDApKSByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgaWYgKCFzYW1lVmFsdWUocngubGFzdEluZGV4LCBwcmV2aW91c0xhc3RJbmRleCkpIHJ4Lmxhc3RJbmRleCA9IHByZXZpb3VzTGFzdEluZGV4O1xuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IC0xIDogcmVzdWx0LmluZGV4O1xuICAgIH1cbiAgXTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuL19pcy1yZWdleHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuL19hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgY2FsbFJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciAkbWluID0gTWF0aC5taW47XG52YXIgJHB1c2ggPSBbXS5wdXNoO1xudmFyICRTUExJVCA9ICdzcGxpdCc7XG52YXIgTEVOR1RIID0gJ2xlbmd0aCc7XG52YXIgTEFTVF9JTkRFWCA9ICdsYXN0SW5kZXgnO1xudmFyIE1BWF9VSU5UMzIgPSAweGZmZmZmZmZmO1xuXG4vLyBiYWJlbC1taW5pZnkgdHJhbnNwaWxlcyBSZWdFeHAoJ3gnLCAneScpIC0+IC94L3kgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvclxudmFyIFNVUFBPUlRTX1kgPSAhZmFpbHMoZnVuY3Rpb24gKCkgeyBSZWdFeHAoTUFYX1VJTlQzMiwgJ3knKTsgfSk7XG5cbi8vIEBAc3BsaXQgbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgnc3BsaXQnLCAyLCBmdW5jdGlvbiAoZGVmaW5lZCwgU1BMSVQsICRzcGxpdCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHZhciBpbnRlcm5hbFNwbGl0O1xuICBpZiAoXG4gICAgJ2FiYmMnWyRTUExJVF0oLyhiKSovKVsxXSA9PSAnYycgfHxcbiAgICAndGVzdCdbJFNQTElUXSgvKD86KS8sIC0xKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnYWInWyRTUExJVF0oLyg/OmFiKSovKVtMRU5HVEhdICE9IDIgfHxcbiAgICAnLidbJFNQTElUXSgvKC4/KSguPykvKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnLidbJFNQTElUXSgvKCkoKS8pW0xFTkdUSF0gPiAxIHx8XG4gICAgJydbJFNQTElUXSgvLj8vKVtMRU5HVEhdXG4gICkge1xuICAgIC8vIGJhc2VkIG9uIGVzNS1zaGltIGltcGxlbWVudGF0aW9uLCBuZWVkIHRvIHJld29yayBpdFxuICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgdmFyIHN0cmluZyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIGlmIChzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgLy8gSWYgYHNlcGFyYXRvcmAgaXMgbm90IGEgcmVnZXgsIHVzZSBuYXRpdmUgc3BsaXRcbiAgICAgIGlmICghaXNSZWdFeHAoc2VwYXJhdG9yKSkgcmV0dXJuICRzcGxpdC5jYWxsKHN0cmluZywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICB2YXIgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3Iuc3RpY2t5ID8gJ3knIDogJycpO1xuICAgICAgdmFyIGxhc3RMYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHNwbGl0TGltaXQgPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xuICAgICAgLy8gTWFrZSBgZ2xvYmFsYCBhbmQgYXZvaWQgYGxhc3RJbmRleGAgaXNzdWVzIGJ5IHdvcmtpbmcgd2l0aCBhIGNvcHlcbiAgICAgIHZhciBzZXBhcmF0b3JDb3B5ID0gbmV3IFJlZ0V4cChzZXBhcmF0b3Iuc291cmNlLCBmbGFncyArICdnJyk7XG4gICAgICB2YXIgbWF0Y2gsIGxhc3RJbmRleCwgbGFzdExlbmd0aDtcbiAgICAgIHdoaWxlIChtYXRjaCA9IHJlZ2V4cEV4ZWMuY2FsbChzZXBhcmF0b3JDb3B5LCBzdHJpbmcpKSB7XG4gICAgICAgIGxhc3RJbmRleCA9IHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF07XG4gICAgICAgIGlmIChsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KSB7XG4gICAgICAgICAgb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgICAgICAgaWYgKG1hdGNoW0xFTkdUSF0gPiAxICYmIG1hdGNoLmluZGV4IDwgc3RyaW5nW0xFTkdUSF0pICRwdXNoLmFwcGx5KG91dHB1dCwgbWF0Y2guc2xpY2UoMSkpO1xuICAgICAgICAgIGxhc3RMZW5ndGggPSBtYXRjaFswXVtMRU5HVEhdO1xuICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgaWYgKG91dHB1dFtMRU5HVEhdID49IHNwbGl0TGltaXQpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdID09PSBtYXRjaC5pbmRleCkgc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICB9XG4gICAgICBpZiAobGFzdExhc3RJbmRleCA9PT0gc3RyaW5nW0xFTkdUSF0pIHtcbiAgICAgICAgaWYgKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvckNvcHkudGVzdCgnJykpIG91dHB1dC5wdXNoKCcnKTtcbiAgICAgIH0gZWxzZSBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCkpO1xuICAgICAgcmV0dXJuIG91dHB1dFtMRU5HVEhdID4gc3BsaXRMaW1pdCA/IG91dHB1dC5zbGljZSgwLCBzcGxpdExpbWl0KSA6IG91dHB1dDtcbiAgICB9O1xuICAvLyBDaGFrcmEsIFY4XG4gIH0gZWxzZSBpZiAoJzAnWyRTUExJVF0odW5kZWZpbmVkLCAwKVtMRU5HVEhdKSB7XG4gICAgaW50ZXJuYWxTcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICByZXR1cm4gc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDAgPyBbXSA6ICRzcGxpdC5jYWxsKHRoaXMsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgaW50ZXJuYWxTcGxpdCA9ICRzcGxpdDtcbiAgfVxuXG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc3BsaXRgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc3BsaXRcbiAgICBmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgICB2YXIgc3BsaXR0ZXIgPSBzZXBhcmF0b3IgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VwYXJhdG9yW1NQTElUXTtcbiAgICAgIHJldHVybiBzcGxpdHRlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gc3BsaXR0ZXIuY2FsbChzZXBhcmF0b3IsIE8sIGxpbWl0KVxuICAgICAgICA6IGludGVybmFsU3BsaXQuY2FsbChTdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzcGxpdFxuICAgIC8vXG4gICAgLy8gTk9URTogVGhpcyBjYW5ub3QgYmUgcHJvcGVybHkgcG9seWZpbGxlZCBpbiBlbmdpbmVzIHRoYXQgZG9uJ3Qgc3VwcG9ydFxuICAgIC8vIHRoZSAneScgZmxhZy5cbiAgICBmdW5jdGlvbiAocmVnZXhwLCBsaW1pdCkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShpbnRlcm5hbFNwbGl0LCByZWdleHAsIHRoaXMsIGxpbWl0LCBpbnRlcm5hbFNwbGl0ICE9PSAkc3BsaXQpO1xuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3RvcihyeCwgUmVnRXhwKTtcblxuICAgICAgdmFyIHVuaWNvZGVNYXRjaGluZyA9IHJ4LnVuaWNvZGU7XG4gICAgICB2YXIgZmxhZ3MgPSAocnguaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocngubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChyeC51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChTVVBQT1JUU19ZID8gJ3knIDogJ2cnKTtcblxuICAgICAgLy8gXig/ICsgcnggKyApIGlzIG5lZWRlZCwgaW4gY29tYmluYXRpb24gd2l0aCBzb21lIFMgc2xpY2luZywgdG9cbiAgICAgIC8vIHNpbXVsYXRlIHRoZSAneScgZmxhZy5cbiAgICAgIHZhciBzcGxpdHRlciA9IG5ldyBDKFNVUFBPUlRTX1kgPyByeCA6ICdeKD86JyArIHJ4LnNvdXJjZSArICcpJywgZmxhZ3MpO1xuICAgICAgdmFyIGxpbSA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyBNQVhfVUlOVDMyIDogbGltaXQgPj4+IDA7XG4gICAgICBpZiAobGltID09PSAwKSByZXR1cm4gW107XG4gICAgICBpZiAoUy5sZW5ndGggPT09IDApIHJldHVybiBjYWxsUmVnRXhwRXhlYyhzcGxpdHRlciwgUykgPT09IG51bGwgPyBbU10gOiBbXTtcbiAgICAgIHZhciBwID0gMDtcbiAgICAgIHZhciBxID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB3aGlsZSAocSA8IFMubGVuZ3RoKSB7XG4gICAgICAgIHNwbGl0dGVyLmxhc3RJbmRleCA9IFNVUFBPUlRTX1kgPyBxIDogMDtcbiAgICAgICAgdmFyIHogPSBjYWxsUmVnRXhwRXhlYyhzcGxpdHRlciwgU1VQUE9SVFNfWSA/IFMgOiBTLnNsaWNlKHEpKTtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB6ID09PSBudWxsIHx8XG4gICAgICAgICAgKGUgPSAkbWluKHRvTGVuZ3RoKHNwbGl0dGVyLmxhc3RJbmRleCArIChTVVBQT1JUU19ZID8gMCA6IHEpKSwgUy5sZW5ndGgpKSA9PT0gcFxuICAgICAgICApIHtcbiAgICAgICAgICBxID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHEsIHVuaWNvZGVNYXRjaGluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQS5wdXNoKFMuc2xpY2UocCwgcSkpO1xuICAgICAgICAgIGlmIChBLmxlbmd0aCA9PT0gbGltKSByZXR1cm4gQTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSB6Lmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgQS5wdXNoKHpbaV0pO1xuICAgICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgIH1cbiAgICAgICAgICBxID0gcCA9IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEEucHVzaChTLnNsaWNlKHApKTtcbiAgICAgIHJldHVybiBBO1xuICAgIH1cbiAgXTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xucmVxdWlyZSgnLi9lczYucmVnZXhwLmZsYWdzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciAkZmxhZ3MgPSByZXF1aXJlKCcuL19mbGFncycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IC8uL1tUT19TVFJJTkddO1xuXG52YXIgZGVmaW5lID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmbiwgdHJ1ZSk7XG59O1xuXG4vLyAyMS4yLjUuMTQgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZygpXG5pZiAocmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7IHJldHVybiAkdG9TdHJpbmcuY2FsbCh7IHNvdXJjZTogJ2EnLCBmbGFnczogJ2InIH0pICE9ICcvYS9iJzsgfSkpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgcmV0dXJuICcvJy5jb25jYXQoUi5zb3VyY2UsICcvJyxcbiAgICAgICdmbGFncycgaW4gUiA/IFIuZmxhZ3MgOiAhREVTQ1JJUFRPUlMgJiYgUiBpbnN0YW5jZW9mIFJlZ0V4cCA/ICRmbGFncy5jYWxsKFIpIDogdW5kZWZpbmVkKTtcbiAgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxufSBlbHNlIGlmICgkdG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkcpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgfSk7XG59XG4iLCIvLyAyMS4xLjMuNyBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzKHNlYXJjaFN0cmluZywgcG9zaXRpb24gPSAwKVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb250ZXh0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWNvbnRleHQnKTtcbnZhciBJTkNMVURFUyA9ICdpbmNsdWRlcyc7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi9fZmFpbHMtaXMtcmVnZXhwJykoSU5DTFVERVMpLCAnU3RyaW5nJywge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoU3RyaW5nIC8qICwgcG9zaXRpb24gPSAwICovKSB7XG4gICAgcmV0dXJuICEhfmNvbnRleHQodGhpcywgc2VhcmNoU3RyaW5nLCBJTkNMVURFUylcbiAgICAgIC5pbmRleE9mKHNlYXJjaFN0cmluZywgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkR09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJyAmJiAhISRHT1BTLmY7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gICRHT1BTLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIENocm9tZSAzOCBhbmQgMzkgYE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHNgIGZhaWxzIG9uIHByaW1pdGl2ZXNcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTM0NDNcbnZhciBGQUlMU19PTl9QUklNSVRJVkVTID0gJGZhaWxzKGZ1bmN0aW9uICgpIHsgJEdPUFMuZigxKTsgfSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogRkFJTFNfT05fUFJJTUlUSVZFUywgJ09iamVjdCcsIHtcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgICByZXR1cm4gJEdPUFMuZih0b09iamVjdChpdCkpO1xuICB9XG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9BcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKSh0cnVlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHtcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKGVsIC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHJldHVybiAkaW5jbHVkZXModGhpcywgZWwsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKCdpbmNsdWRlcycpO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvcnNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4vX293bi1rZXlzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iamVjdCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gICAgdmFyIGdldERlc2MgPSBnT1BELmY7XG4gICAgdmFyIGtleXMgPSBvd25LZXlzKE8pO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleSwgZGVzYztcbiAgICB3aGlsZSAoa2V5cy5sZW5ndGggPiBpKSB7XG4gICAgICBkZXNjID0gZ2V0RGVzYyhPLCBrZXkgPSBrZXlzW2krK10pO1xuICAgICAgaWYgKGRlc2MgIT09IHVuZGVmaW5lZCkgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBrZXksIGRlc2MpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsInZhciAkaXRlcmF0b3JzID0gcmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciBJVEVSQVRPUiA9IHdrcygnaXRlcmF0b3InKTtcbnZhciBUT19TVFJJTkdfVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpO1xudmFyIEFycmF5VmFsdWVzID0gSXRlcmF0b3JzLkFycmF5O1xuXG52YXIgRE9NSXRlcmFibGVzID0ge1xuICBDU1NSdWxlTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IGZhbHNlLFxuICBDU1NWYWx1ZUxpc3Q6IGZhbHNlLFxuICBDbGllbnRSZWN0TGlzdDogZmFsc2UsXG4gIERPTVJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NU3RyaW5nTGlzdDogZmFsc2UsXG4gIERPTVRva2VuTGlzdDogdHJ1ZSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IGZhbHNlLFxuICBGaWxlTGlzdDogZmFsc2UsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MRm9ybUVsZW1lbnQ6IGZhbHNlLFxuICBIVE1MU2VsZWN0RWxlbWVudDogZmFsc2UsXG4gIE1lZGlhTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIE1pbWVUeXBlQXJyYXk6IGZhbHNlLFxuICBOYW1lZE5vZGVNYXA6IGZhbHNlLFxuICBOb2RlTGlzdDogdHJ1ZSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogZmFsc2UsXG4gIFBsdWdpbjogZmFsc2UsXG4gIFBsdWdpbkFycmF5OiBmYWxzZSxcbiAgU1ZHTGVuZ3RoTGlzdDogZmFsc2UsXG4gIFNWR051bWJlckxpc3Q6IGZhbHNlLFxuICBTVkdQYXRoU2VnTGlzdDogZmFsc2UsXG4gIFNWR1BvaW50TGlzdDogZmFsc2UsXG4gIFNWR1N0cmluZ0xpc3Q6IGZhbHNlLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiBmYWxzZSxcbiAgU291cmNlQnVmZmVyTGlzdDogZmFsc2UsXG4gIFN0eWxlU2hlZXRMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgVGV4dFRyYWNrQ3VlTGlzdDogZmFsc2UsXG4gIFRleHRUcmFja0xpc3Q6IGZhbHNlLFxuICBUb3VjaExpc3Q6IGZhbHNlXG59O1xuXG5mb3IgKHZhciBjb2xsZWN0aW9ucyA9IGdldEtleXMoRE9NSXRlcmFibGVzKSwgaSA9IDA7IGkgPCBjb2xsZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IGNvbGxlY3Rpb25zW2ldO1xuICB2YXIgZXhwbGljaXQgPSBET01JdGVyYWJsZXNbTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICB2YXIga2V5O1xuICBpZiAocHJvdG8pIHtcbiAgICBpZiAoIXByb3RvW0lURVJBVE9SXSkgaGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZiAoIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBBcnJheVZhbHVlcztcbiAgICBpZiAoZXhwbGljaXQpIGZvciAoa2V5IGluICRpdGVyYXRvcnMpIGlmICghcHJvdG9ba2V5XSkgcmVkZWZpbmUocHJvdG8sIGtleSwgJGl0ZXJhdG9yc1trZXldLCB0cnVlKTtcbiAgfVxufVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIueC1oZWxsb3NpZ24tZW1iZWRkZWQge1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuICAueC1oZWxsb3NpZ24tZW1iZWRkZWQtLWluLW1vZGFsIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiA5OTk3OyB9XFxuXFxuLngtaGVsbG9zaWduLWVtYmVkZGVkX19tb2RhbC1zY3JlZW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpLCBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMTYgLyA5KSB7XFxuICAgIC54LWhlbGxvc2lnbi1lbWJlZGRlZF9fbW9kYWwtc2NyZWVuIHtcXG4gICAgICBkaXNwbGF5OiBub25lOyB9IH1cXG5cXG4ueC1oZWxsb3NpZ24tZW1iZWRkZWRfX21vZGFsLWNvbnRlbnQge1xcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNXZoO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgbWluLWhlaWdodDogNDAwcHg7XFxuICB3aWR0aDogODB2dztcXG4gIG1pbi13aWR0aDogNTEycHg7XFxuICBtYXgtd2lkdGg6IDEwMjRweDsgfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCksIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkgYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAxNiAvIDkpIHtcXG4gICAgLngtaGVsbG9zaWduLWVtYmVkZGVkX19tb2RhbC1jb250ZW50IHtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIG1pbi1oZWlnaHQ6IDA7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgbWluLXdpZHRoOiAwO1xcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHRvcDogMDsgfSB9XFxuXFxuLngtaGVsbG9zaWduLWVtYmVkZGVkX19tb2RhbC1jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogLTYwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDBweDsgfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCksIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkgYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAxNiAvIDkpIHtcXG4gICAgLngtaGVsbG9zaWduLWVtYmVkZGVkX19tb2RhbC1jbG9zZSB7XFxuICAgICAgZGlzcGxheTogbm9uZTsgfSB9XFxuXFxuLngtaGVsbG9zaWduLWVtYmVkZGVkX19tb2RhbC1jbG9zZS1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjM1cyBlYXNlO1xcbiAgd2lsbC1jaGFuZ2U6IGJhY2tncm91bmQtY29sb3I7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDlweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7IH1cXG4gIC54LWhlbGxvc2lnbi1lbWJlZGRlZF9fbW9kYWwtY2xvc2UtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRFNEU0RTsgfVxcbiAgLngtaGVsbG9zaWduLWVtYmVkZGVkX19tb2RhbC1jbG9zZS1idXR0b246OmJlZm9yZSwgLngtaGVsbG9zaWduLWVtYmVkZGVkX19tb2RhbC1jbG9zZS1idXR0b246OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgdG9wOiAxMHB4OyB9XFxuICAueC1oZWxsb3NpZ24tZW1iZWRkZWRfX21vZGFsLWNsb3NlLWJ1dHRvbjo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDQ1ZGVnKTsgfVxcbiAgLngtaGVsbG9zaWduLWVtYmVkZGVkX19tb2RhbC1jbG9zZS1idXR0b246OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKC00NWRlZyk7IH1cXG5cXG4ueC1oZWxsb3NpZ24tZW1iZWRkZWRfX2lmcmFtZSB7XFxuICBtaW4taGVpZ2h0OiA0MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGN0Y4Rjk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICB3aWR0aDogMTAwcHg7XFxuICAqd2lkdGg6IDEwMCU7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gbG9jYWxzdG9yYWdlKCk7XG5leHBvcnRzLmRlc3Ryb3kgPSAoKCkgPT4ge1xuXHRsZXQgd2FybmVkID0gZmFsc2U7XG5cblx0cmV0dXJuICgpID0+IHtcblx0XHRpZiAoIXdhcm5lZCkge1xuXHRcdFx0d2FybmVkID0gdHJ1ZTtcblx0XHRcdGNvbnNvbGUud2FybignSW5zdGFuY2UgbWV0aG9kIGBkZWJ1Zy5kZXN0cm95KClgIGlzIGRlcHJlY2F0ZWQgYW5kIG5vIGxvbmdlciBkb2VzIGFueXRoaW5nLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiBgZGVidWdgLicpO1xuXHRcdH1cblx0fTtcbn0pKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuXHQnIzAwMDBDQycsXG5cdCcjMDAwMEZGJyxcblx0JyMwMDMzQ0MnLFxuXHQnIzAwMzNGRicsXG5cdCcjMDA2NkNDJyxcblx0JyMwMDY2RkYnLFxuXHQnIzAwOTlDQycsXG5cdCcjMDA5OUZGJyxcblx0JyMwMENDMDAnLFxuXHQnIzAwQ0MzMycsXG5cdCcjMDBDQzY2Jyxcblx0JyMwMENDOTknLFxuXHQnIzAwQ0NDQycsXG5cdCcjMDBDQ0ZGJyxcblx0JyMzMzAwQ0MnLFxuXHQnIzMzMDBGRicsXG5cdCcjMzMzM0NDJyxcblx0JyMzMzMzRkYnLFxuXHQnIzMzNjZDQycsXG5cdCcjMzM2NkZGJyxcblx0JyMzMzk5Q0MnLFxuXHQnIzMzOTlGRicsXG5cdCcjMzNDQzAwJyxcblx0JyMzM0NDMzMnLFxuXHQnIzMzQ0M2NicsXG5cdCcjMzNDQzk5Jyxcblx0JyMzM0NDQ0MnLFxuXHQnIzMzQ0NGRicsXG5cdCcjNjYwMENDJyxcblx0JyM2NjAwRkYnLFxuXHQnIzY2MzNDQycsXG5cdCcjNjYzM0ZGJyxcblx0JyM2NkNDMDAnLFxuXHQnIzY2Q0MzMycsXG5cdCcjOTkwMENDJyxcblx0JyM5OTAwRkYnLFxuXHQnIzk5MzNDQycsXG5cdCcjOTkzM0ZGJyxcblx0JyM5OUNDMDAnLFxuXHQnIzk5Q0MzMycsXG5cdCcjQ0MwMDAwJyxcblx0JyNDQzAwMzMnLFxuXHQnI0NDMDA2NicsXG5cdCcjQ0MwMDk5Jyxcblx0JyNDQzAwQ0MnLFxuXHQnI0NDMDBGRicsXG5cdCcjQ0MzMzAwJyxcblx0JyNDQzMzMzMnLFxuXHQnI0NDMzM2NicsXG5cdCcjQ0MzMzk5Jyxcblx0JyNDQzMzQ0MnLFxuXHQnI0NDMzNGRicsXG5cdCcjQ0M2NjAwJyxcblx0JyNDQzY2MzMnLFxuXHQnI0NDOTkwMCcsXG5cdCcjQ0M5OTMzJyxcblx0JyNDQ0NDMDAnLFxuXHQnI0NDQ0MzMycsXG5cdCcjRkYwMDAwJyxcblx0JyNGRjAwMzMnLFxuXHQnI0ZGMDA2NicsXG5cdCcjRkYwMDk5Jyxcblx0JyNGRjAwQ0MnLFxuXHQnI0ZGMDBGRicsXG5cdCcjRkYzMzAwJyxcblx0JyNGRjMzMzMnLFxuXHQnI0ZGMzM2NicsXG5cdCcjRkYzMzk5Jyxcblx0JyNGRjMzQ0MnLFxuXHQnI0ZGMzNGRicsXG5cdCcjRkY2NjAwJyxcblx0JyNGRjY2MzMnLFxuXHQnI0ZGOTkwMCcsXG5cdCcjRkY5OTMzJyxcblx0JyNGRkNDMDAnLFxuXHQnI0ZGQ0MzMydcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcblx0Ly8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuXHQvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuXHQvLyBleHBsaWNpdGx5XG5cdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiAod2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJyB8fCB3aW5kb3cucHJvY2Vzcy5fX253anMpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSBkbyBub3Qgc3VwcG9ydCBjb2xvcnMuXG5cdGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGVkZ2V8dHJpZGVudClcXC8oXFxkKykvKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIElzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG5cdC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG5cdHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuXHRcdC8vIElzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcblx0XHQodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuXHRcdC8vIElzIGZpcmVmb3ggPj0gdjMxP1xuXHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuXHRcdC8vIERvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuXHRhcmdzWzBdID0gKHRoaXMudXNlQ29sb3JzID8gJyVjJyA6ICcnKSArXG5cdFx0dGhpcy5uYW1lc3BhY2UgK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKSArXG5cdFx0YXJnc1swXSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyVjICcgOiAnICcpICtcblx0XHQnKycgKyBtb2R1bGUuZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG5cdGlmICghdGhpcy51c2VDb2xvcnMpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcblx0YXJncy5zcGxpY2UoMSwgMCwgYywgJ2NvbG9yOiBpbmhlcml0Jyk7XG5cblx0Ly8gVGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcblx0Ly8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuXHQvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cblx0bGV0IGluZGV4ID0gMDtcblx0bGV0IGxhc3RDID0gMDtcblx0YXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIG1hdGNoID0+IHtcblx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aW5kZXgrKztcblx0XHRpZiAobWF0Y2ggPT09ICclYycpIHtcblx0XHRcdC8vIFdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuXHRcdFx0Ly8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcblx0XHRcdGxhc3RDID0gaW5kZXg7XG5cdFx0fVxuXHR9KTtcblxuXHRhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5kZWJ1ZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUuZGVidWdgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqIElmIGBjb25zb2xlLmRlYnVnYCBpcyBub3QgYXZhaWxhYmxlLCBmYWxscyBiYWNrXG4gKiB0byBgY29uc29sZS5sb2dgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cbmV4cG9ydHMubG9nID0gY29uc29sZS5kZWJ1ZyB8fCBjb25zb2xlLmxvZyB8fCAoKCkgPT4ge30pO1xuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG5cdHRyeSB7XG5cdFx0aWYgKG5hbWVzcGFjZXMpIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5zZXRJdGVtKCdkZWJ1ZycsIG5hbWVzcGFjZXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGxvYWQoKSB7XG5cdGxldCByO1xuXHR0cnkge1xuXHRcdHIgPSBleHBvcnRzLnN0b3JhZ2UuZ2V0SXRlbSgnZGVidWcnKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cblxuXHQvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG5cdGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuXHRcdHIgPSBwcm9jZXNzLmVudi5ERUJVRztcblx0fVxuXG5cdHJldHVybiByO1xufVxuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcblx0dHJ5IHtcblx0XHQvLyBUVk1MS2l0IChBcHBsZSBUViBKUyBSdW50aW1lKSBkb2VzIG5vdCBoYXZlIGEgd2luZG93IG9iamVjdCwganVzdCBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0XG5cdFx0Ly8gVGhlIEJyb3dzZXIgYWxzbyBoYXMgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dC5cblx0XHRyZXR1cm4gbG9jYWxTdG9yYWdlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tbW9uJykoZXhwb3J0cyk7XG5cbmNvbnN0IHtmb3JtYXR0ZXJzfSA9IG1vZHVsZS5leHBvcnRzO1xuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbiAodikge1xuXHR0cnkge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyb3IubWVzc2FnZTtcblx0fVxufTtcbiIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICovXG5cbmZ1bmN0aW9uIHNldHVwKGVudikge1xuXHRjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5kZWZhdWx0ID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmNvZXJjZSA9IGNvZXJjZTtcblx0Y3JlYXRlRGVidWcuZGlzYWJsZSA9IGRpc2FibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZSA9IGVuYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdGNyZWF0ZURlYnVnLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblx0Y3JlYXRlRGVidWcuZGVzdHJveSA9IGRlc3Ryb3k7XG5cblx0T2JqZWN0LmtleXMoZW52KS5mb3JFYWNoKGtleSA9PiB7XG5cdFx0Y3JlYXRlRGVidWdba2V5XSA9IGVudltrZXldO1xuXHR9KTtcblxuXHQvKipcblx0KiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cblx0Ki9cblxuXHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdC8qKlxuXHQqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cblx0KlxuXHQqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cblx0Ki9cblx0Y3JlYXRlRGVidWcuZm9ybWF0dGVycyA9IHt9O1xuXG5cdC8qKlxuXHQqIFNlbGVjdHMgYSBjb2xvciBmb3IgYSBkZWJ1ZyBuYW1lc3BhY2Vcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIFRoZSBuYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgZGVidWcgaW5zdGFuY2UgdG8gYmUgY29sb3JlZFxuXHQqIEByZXR1cm4ge051bWJlcnxTdHJpbmd9IEFuIEFOU0kgY29sb3IgY29kZSBmb3IgdGhlIGdpdmVuIG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcblx0XHRsZXQgaGFzaCA9IDA7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG5cdFx0XHRoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuXHRcdH1cblxuXHRcdHJldHVybiBjcmVhdGVEZWJ1Zy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBjcmVhdGVEZWJ1Zy5jb2xvcnMubGVuZ3RoXTtcblx0fVxuXHRjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvciA9IHNlbGVjdENvbG9yO1xuXG5cdC8qKlxuXHQqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEByZXR1cm4ge0Z1bmN0aW9ufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXHRcdGxldCBwcmV2VGltZTtcblx0XHRsZXQgZW5hYmxlT3ZlcnJpZGUgPSBudWxsO1xuXHRcdGxldCBuYW1lc3BhY2VzQ2FjaGU7XG5cdFx0bGV0IGVuYWJsZWRDYWNoZTtcblxuXHRcdGZ1bmN0aW9uIGRlYnVnKC4uLmFyZ3MpIHtcblx0XHRcdC8vIERpc2FibGVkP1xuXHRcdFx0aWYgKCFkZWJ1Zy5lbmFibGVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc2VsZiA9IGRlYnVnO1xuXG5cdFx0XHQvLyBTZXQgYGRpZmZgIHRpbWVzdGFtcFxuXHRcdFx0Y29uc3QgY3VyciA9IE51bWJlcihuZXcgRGF0ZSgpKTtcblx0XHRcdGNvbnN0IG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcblx0XHRcdHNlbGYuZGlmZiA9IG1zO1xuXHRcdFx0c2VsZi5wcmV2ID0gcHJldlRpbWU7XG5cdFx0XHRzZWxmLmN1cnIgPSBjdXJyO1xuXHRcdFx0cHJldlRpbWUgPSBjdXJyO1xuXG5cdFx0XHRhcmdzWzBdID0gY3JlYXRlRGVidWcuY29lcmNlKGFyZ3NbMF0pO1xuXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3NbMF0gIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdC8vIEFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG5cdFx0XHRcdGFyZ3MudW5zaGlmdCgnJU8nKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcblx0XHRcdGxldCBpbmRleCA9IDA7XG5cdFx0XHRhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgKG1hdGNoLCBmb3JtYXQpID0+IHtcblx0XHRcdFx0Ly8gSWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuXHRcdFx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdFx0XHRyZXR1cm4gJyUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdGNvbnN0IGZvcm1hdHRlciA9IGNyZWF0ZURlYnVnLmZvcm1hdHRlcnNbZm9ybWF0XTtcblx0XHRcdFx0aWYgKHR5cGVvZiBmb3JtYXR0ZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRjb25zdCB2YWwgPSBhcmdzW2luZGV4XTtcblx0XHRcdFx0XHRtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cblx0XHRcdFx0XHQvLyBOb3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG5cdFx0XHRcdFx0YXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcdGluZGV4LS07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG5cdFx0XHRjcmVhdGVEZWJ1Zy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG5cblx0XHRcdGNvbnN0IGxvZ0ZuID0gc2VsZi5sb2cgfHwgY3JlYXRlRGVidWcubG9nO1xuXHRcdFx0bG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cdFx0fVxuXG5cdFx0ZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuXHRcdGRlYnVnLnVzZUNvbG9ycyA9IGNyZWF0ZURlYnVnLnVzZUNvbG9ycygpO1xuXHRcdGRlYnVnLmNvbG9yID0gY3JlYXRlRGVidWcuc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcblx0XHRkZWJ1Zy5leHRlbmQgPSBleHRlbmQ7XG5cdFx0ZGVidWcuZGVzdHJveSA9IGNyZWF0ZURlYnVnLmRlc3Ryb3k7IC8vIFhYWCBUZW1wb3JhcnkuIFdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLlxuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGRlYnVnLCAnZW5hYmxlZCcsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuXHRcdFx0Z2V0OiAoKSA9PiB7XG5cdFx0XHRcdGlmIChlbmFibGVPdmVycmlkZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybiBlbmFibGVPdmVycmlkZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobmFtZXNwYWNlc0NhY2hlICE9PSBjcmVhdGVEZWJ1Zy5uYW1lc3BhY2VzKSB7XG5cdFx0XHRcdFx0bmFtZXNwYWNlc0NhY2hlID0gY3JlYXRlRGVidWcubmFtZXNwYWNlcztcblx0XHRcdFx0XHRlbmFibGVkQ2FjaGUgPSBjcmVhdGVEZWJ1Zy5lbmFibGVkKG5hbWVzcGFjZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZW5hYmxlZENhY2hlO1xuXHRcdFx0fSxcblx0XHRcdHNldDogdiA9PiB7XG5cdFx0XHRcdGVuYWJsZU92ZXJyaWRlID0gdjtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIEVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG5cdFx0aWYgKHR5cGVvZiBjcmVhdGVEZWJ1Zy5pbml0ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjcmVhdGVEZWJ1Zy5pbml0KGRlYnVnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVidWc7XG5cdH1cblxuXHRmdW5jdGlvbiBleHRlbmQobmFtZXNwYWNlLCBkZWxpbWl0ZXIpIHtcblx0XHRjb25zdCBuZXdEZWJ1ZyA9IGNyZWF0ZURlYnVnKHRoaXMubmFtZXNwYWNlICsgKHR5cGVvZiBkZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gJzonIDogZGVsaW1pdGVyKSArIG5hbWVzcGFjZSk7XG5cdFx0bmV3RGVidWcubG9nID0gdGhpcy5sb2c7XG5cdFx0cmV0dXJuIG5ld0RlYnVnO1xuXHR9XG5cblx0LyoqXG5cdCogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuXHQqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG5cdFx0Y3JlYXRlRGVidWcuc2F2ZShuYW1lc3BhY2VzKTtcblx0XHRjcmVhdGVEZWJ1Zy5uYW1lc3BhY2VzID0gbmFtZXNwYWNlcztcblxuXHRcdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdFx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHRcdGxldCBpO1xuXHRcdGNvbnN0IHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcblx0XHRjb25zdCBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmICghc3BsaXRbaV0pIHtcblx0XHRcdFx0Ly8gaWdub3JlIGVtcHR5IHN0cmluZ3Ncblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuXG5cdFx0XHRpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnNsaWNlKDEpICsgJyQnKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuXHQqXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZGlzYWJsZSgpIHtcblx0XHRjb25zdCBuYW1lc3BhY2VzID0gW1xuXHRcdFx0Li4uY3JlYXRlRGVidWcubmFtZXMubWFwKHRvTmFtZXNwYWNlKSxcblx0XHRcdC4uLmNyZWF0ZURlYnVnLnNraXBzLm1hcCh0b05hbWVzcGFjZSkubWFwKG5hbWVzcGFjZSA9PiAnLScgKyBuYW1lc3BhY2UpXG5cdFx0XS5qb2luKCcsJyk7XG5cdFx0Y3JlYXRlRGVidWcuZW5hYmxlKCcnKTtcblx0XHRyZXR1cm4gbmFtZXNwYWNlcztcblx0fVxuXG5cdC8qKlxuXHQqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG5cdCogQHJldHVybiB7Qm9vbGVhbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcblx0XHRpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGxldCBpO1xuXHRcdGxldCBsZW47XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcubmFtZXNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0KiBDb252ZXJ0IHJlZ2V4cCB0byBuYW1lc3BhY2Vcblx0KlxuXHQqIEBwYXJhbSB7UmVnRXhwfSByZWd4ZXBcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiB0b05hbWVzcGFjZShyZWdleHApIHtcblx0XHRyZXR1cm4gcmVnZXhwLnRvU3RyaW5nKClcblx0XHRcdC5zdWJzdHJpbmcoMiwgcmVnZXhwLnRvU3RyaW5nKCkubGVuZ3RoIC0gMilcblx0XHRcdC5yZXBsYWNlKC9cXC5cXCpcXD8kLywgJyonKTtcblx0fVxuXG5cdC8qKlxuXHQqIENvZXJjZSBgdmFsYC5cblx0KlxuXHQqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuXHQqIEByZXR1cm4ge01peGVkfVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBjb2VyY2UodmFsKSB7XG5cdFx0aWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRyZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsO1xuXHR9XG5cblx0LyoqXG5cdCogWFhYIERPIE5PVCBVU0UuIFRoaXMgaXMgYSB0ZW1wb3Jhcnkgc3R1YiBmdW5jdGlvbi5cblx0KiBYWFggSXQgV0lMTCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuXG5cdCovXG5cdGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdFx0Y29uc29sZS53YXJuKCdJbnN0YW5jZSBtZXRob2QgYGRlYnVnLmRlc3Ryb3koKWAgaXMgZGVwcmVjYXRlZCBhbmQgbm8gbG9uZ2VyIGRvZXMgYW55dGhpbmcuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIG9mIGBkZWJ1Z2AuJyk7XG5cdH1cblxuXHRjcmVhdGVEZWJ1Zy5lbmFibGUoY3JlYXRlRGVidWcubG9hZCgpKTtcblxuXHRyZXR1cm4gY3JlYXRlRGVidWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0dXA7XG4iLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHcgPSBkICogNztcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsKSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oLT8oPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHdlZWtzP3x3fHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICd3ZWVrcyc6XG4gICAgY2FzZSAnd2Vlayc6XG4gICAgY2FzZSAndyc6XG4gICAgICByZXR1cm4gbiAqIHc7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGQsICdkYXknKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBoLCAnaG91cicpO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIG0sICdtaW51dGUnKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBzLCAnc2Vjb25kJyk7XG4gIH1cbiAgcmV0dXJuIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBtc0FicywgbiwgbmFtZSkge1xuICB2YXIgaXNQbHVyYWwgPSBtc0FicyA+PSBuICogMS41O1xuICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG4pICsgJyAnICsgbmFtZSArIChpc1BsdXJhbCA/ICdzJyA6ICcnKTtcbn1cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJmdW5jdGlvbiBFICgpIHtcbiAgLy8gS2VlcCB0aGlzIGVtcHR5IHNvIGl0J3MgZWFzaWVyIHRvIGluaGVyaXQgZnJvbVxuICAvLyAodmlhIGh0dHBzOi8vZ2l0aHViLmNvbS9saXBzbWFjayBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvaXNzdWVzLzMpXG59XG5cbkUucHJvdG90eXBlID0ge1xuICBvbjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuXG4gICAgKGVbbmFtZV0gfHwgKGVbbmFtZV0gPSBbXSkpLnB1c2goe1xuICAgICAgZm46IGNhbGxiYWNrLFxuICAgICAgY3R4OiBjdHhcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9uY2U6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGZ1bmN0aW9uIGxpc3RlbmVyICgpIHtcbiAgICAgIHNlbGYub2ZmKG5hbWUsIGxpc3RlbmVyKTtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KGN0eCwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgbGlzdGVuZXIuXyA9IGNhbGxiYWNrXG4gICAgcmV0dXJuIHRoaXMub24obmFtZSwgbGlzdGVuZXIsIGN0eCk7XG4gIH0sXG5cbiAgZW1pdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZGF0YSA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgZXZ0QXJyID0gKCh0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KSlbbmFtZV0gfHwgW10pLnNsaWNlKCk7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW4gPSBldnRBcnIubGVuZ3RoO1xuXG4gICAgZm9yIChpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGV2dEFycltpXS5mbi5hcHBseShldnRBcnJbaV0uY3R4LCBkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvZmY6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG4gICAgdmFyIGV2dHMgPSBlW25hbWVdO1xuICAgIHZhciBsaXZlRXZlbnRzID0gW107XG5cbiAgICBpZiAoZXZ0cyAmJiBjYWxsYmFjaykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2dHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGV2dHNbaV0uZm4gIT09IGNhbGxiYWNrICYmIGV2dHNbaV0uZm4uXyAhPT0gY2FsbGJhY2spXG4gICAgICAgICAgbGl2ZUV2ZW50cy5wdXNoKGV2dHNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBldmVudCBmcm9tIHF1ZXVlIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICAvLyBTdWdnZXN0ZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2xhemRcbiAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvY29tbWl0L2M2ZWJmYWE5YmM5NzNiMzNkMTEwYTg0YTMwNzc0MmI3Y2Y5NGM5NTMjY29tbWl0Y29tbWVudC01MDI0OTEwXG5cbiAgICAobGl2ZUV2ZW50cy5sZW5ndGgpXG4gICAgICA/IGVbbmFtZV0gPSBsaXZlRXZlbnRzXG4gICAgICA6IGRlbGV0ZSBlW25hbWVdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRTtcbm1vZHVsZS5leHBvcnRzLlRpbnlFbWl0dGVyID0gRTtcbiIsIihmdW5jdGlvbihnbG9iYWwpIHtcclxuICAvKipcclxuICAgKiBQb2x5ZmlsbCBVUkxTZWFyY2hQYXJhbXNcclxuICAgKlxyXG4gICAqIEluc3BpcmVkIGZyb20gOiBodHRwczovL2dpdGh1Yi5jb20vV2ViUmVmbGVjdGlvbi91cmwtc2VhcmNoLXBhcmFtcy9ibG9iL21hc3Rlci9zcmMvdXJsLXNlYXJjaC1wYXJhbXMuanNcclxuICAgKi9cclxuXHJcbiAgdmFyIGNoZWNrSWZJdGVyYXRvcklzU3VwcG9ydGVkID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gISFTeW1ib2wuaXRlcmF0b3I7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gIHZhciBpdGVyYXRvclN1cHBvcnRlZCA9IGNoZWNrSWZJdGVyYXRvcklzU3VwcG9ydGVkKCk7XHJcblxyXG4gIHZhciBjcmVhdGVJdGVyYXRvciA9IGZ1bmN0aW9uKGl0ZW1zKSB7XHJcbiAgICB2YXIgaXRlcmF0b3IgPSB7XHJcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KCk7XHJcbiAgICAgICAgcmV0dXJuIHsgZG9uZTogdmFsdWUgPT09IHZvaWQgMCwgdmFsdWU6IHZhbHVlIH07XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKGl0ZXJhdG9yU3VwcG9ydGVkKSB7XHJcbiAgICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gaXRlcmF0b3I7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGl0ZXJhdG9yO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlYXJjaCBwYXJhbSBuYW1lIGFuZCB2YWx1ZXMgc2hvdWxkIGJlIGVuY29kZWQgYWNjb3JkaW5nIHRvIGh0dHBzOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsZW5jb2RlZC1zZXJpYWxpemluZ1xyXG4gICAqIGVuY29kZVVSSUNvbXBvbmVudCgpIHByb2R1Y2VzIHRoZSBzYW1lIHJlc3VsdCBleGNlcHQgZW5jb2Rpbmcgc3BhY2VzIGFzIGAlMjBgIGluc3RlYWQgb2YgYCtgLlxyXG4gICAqL1xyXG4gIHZhciBzZXJpYWxpemVQYXJhbSA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKS5yZXBsYWNlKC8lMjAvZywgJysnKTtcclxuICB9O1xyXG5cclxuICB2YXIgZGVzZXJpYWxpemVQYXJhbSA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KFN0cmluZyh2YWx1ZSkucmVwbGFjZSgvXFwrL2csICcgJykpO1xyXG4gIH07XHJcblxyXG4gIHZhciBwb2x5ZmlsbFVSTFNlYXJjaFBhcmFtcyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHZhciBVUkxTZWFyY2hQYXJhbXMgPSBmdW5jdGlvbihzZWFyY2hTdHJpbmcpIHtcclxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdfZW50cmllcycsIHsgd3JpdGFibGU6IHRydWUsIHZhbHVlOiB7fSB9KTtcclxuICAgICAgdmFyIHR5cGVvZlNlYXJjaFN0cmluZyA9IHR5cGVvZiBzZWFyY2hTdHJpbmc7XHJcblxyXG4gICAgICBpZiAodHlwZW9mU2VhcmNoU3RyaW5nID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8vIGRvIG5vdGhpbmdcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2ZTZWFyY2hTdHJpbmcgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgaWYgKHNlYXJjaFN0cmluZyAhPT0gJycpIHtcclxuICAgICAgICAgIHRoaXMuX2Zyb21TdHJpbmcoc2VhcmNoU3RyaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoc2VhcmNoU3RyaW5nIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBzZWFyY2hTdHJpbmcuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xyXG4gICAgICAgICAgX3RoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICgoc2VhcmNoU3RyaW5nICE9PSBudWxsKSAmJiAodHlwZW9mU2VhcmNoU3RyaW5nID09PSAnb2JqZWN0JykpIHtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHNlYXJjaFN0cmluZykgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcclxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VhcmNoU3RyaW5nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBlbnRyeSA9IHNlYXJjaFN0cmluZ1tpXTtcclxuICAgICAgICAgICAgaWYgKChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZW50cnkpID09PSAnW29iamVjdCBBcnJheV0nKSB8fCAoZW50cnkubGVuZ3RoICE9PSAyKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuYXBwZW5kKGVudHJ5WzBdLCBlbnRyeVsxXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgW3N0cmluZywgYW55XSBhcyBlbnRyeSBhdCBpbmRleCAnICsgaSArICcgb2YgVVJMU2VhcmNoUGFyYW1zXFwncyBpbnB1dCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZvciAodmFyIGtleSBpbiBzZWFyY2hTdHJpbmcpIHtcclxuICAgICAgICAgICAgaWYgKHNlYXJjaFN0cmluZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5hcHBlbmQoa2V5LCBzZWFyY2hTdHJpbmdba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5zdXBwb3J0ZWQgaW5wdXRcXCdzIHR5cGUgZm9yIFVSTFNlYXJjaFBhcmFtcycpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBwcm90byA9IFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGU7XHJcblxyXG4gICAgcHJvdG8uYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcclxuICAgICAgaWYgKG5hbWUgaW4gdGhpcy5fZW50cmllcykge1xyXG4gICAgICAgIHRoaXMuX2VudHJpZXNbbmFtZV0ucHVzaChTdHJpbmcodmFsdWUpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9lbnRyaWVzW25hbWVdID0gW1N0cmluZyh2YWx1ZSldO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RvLmRlbGV0ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgZGVsZXRlIHRoaXMuX2VudHJpZXNbbmFtZV07XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RvLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgcmV0dXJuIChuYW1lIGluIHRoaXMuX2VudHJpZXMpID8gdGhpcy5fZW50cmllc1tuYW1lXVswXSA6IG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RvLmdldEFsbCA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgcmV0dXJuIChuYW1lIGluIHRoaXMuX2VudHJpZXMpID8gdGhpcy5fZW50cmllc1tuYW1lXS5zbGljZSgwKSA6IFtdO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcm90by5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgIHJldHVybiAobmFtZSBpbiB0aGlzLl9lbnRyaWVzKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJvdG8uc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcclxuICAgICAgdGhpcy5fZW50cmllc1tuYW1lXSA9IFtTdHJpbmcodmFsdWUpXTtcclxuICAgIH07XHJcblxyXG4gICAgcHJvdG8uZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XHJcbiAgICAgIHZhciBlbnRyaWVzO1xyXG4gICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMuX2VudHJpZXMpIHtcclxuICAgICAgICBpZiAodGhpcy5fZW50cmllcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xyXG4gICAgICAgICAgZW50cmllcyA9IHRoaXMuX2VudHJpZXNbbmFtZV07XHJcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCBlbnRyaWVzW2ldLCBuYW1lLCB0aGlzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcHJvdG8ua2V5cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgaXRlbXMgPSBbXTtcclxuICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XHJcbiAgICAgICAgaXRlbXMucHVzaChuYW1lKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBjcmVhdGVJdGVyYXRvcihpdGVtcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RvLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgaXRlbXMgPSBbXTtcclxuICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgaXRlbXMucHVzaCh2YWx1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gY3JlYXRlSXRlcmF0b3IoaXRlbXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcm90by5lbnRyaWVzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBpdGVtcyA9IFtdO1xyXG4gICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcclxuICAgICAgICBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNyZWF0ZUl0ZXJhdG9yKGl0ZW1zKTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGl0ZXJhdG9yU3VwcG9ydGVkKSB7XHJcbiAgICAgIHByb3RvW1N5bWJvbC5pdGVyYXRvcl0gPSBwcm90by5lbnRyaWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBzZWFyY2hBcnJheSA9IFtdO1xyXG4gICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcclxuICAgICAgICBzZWFyY2hBcnJheS5wdXNoKHNlcmlhbGl6ZVBhcmFtKG5hbWUpICsgJz0nICsgc2VyaWFsaXplUGFyYW0odmFsdWUpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBzZWFyY2hBcnJheS5qb2luKCcmJyk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBnbG9iYWwuVVJMU2VhcmNoUGFyYW1zID0gVVJMU2VhcmNoUGFyYW1zO1xyXG4gIH07XHJcblxyXG4gIHZhciBjaGVja0lmVVJMU2VhcmNoUGFyYW1zU3VwcG9ydGVkID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB2YXIgVVJMU2VhcmNoUGFyYW1zID0gZ2xvYmFsLlVSTFNlYXJjaFBhcmFtcztcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgKG5ldyBVUkxTZWFyY2hQYXJhbXMoJz9hPTEnKS50b1N0cmluZygpID09PSAnYT0xJykgJiZcclxuICAgICAgICAodHlwZW9mIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuc2V0ID09PSAnZnVuY3Rpb24nKSAmJlxyXG4gICAgICAgICh0eXBlb2YgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5lbnRyaWVzID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICApO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKCFjaGVja0lmVVJMU2VhcmNoUGFyYW1zU3VwcG9ydGVkKCkpIHtcclxuICAgIHBvbHlmaWxsVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgfVxyXG5cclxuICB2YXIgcHJvdG8gPSBnbG9iYWwuVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZTtcclxuXHJcbiAgaWYgKHR5cGVvZiBwcm90by5zb3J0ICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBwcm90by5zb3J0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgIHZhciBpdGVtcyA9IFtdO1xyXG4gICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcclxuICAgICAgICBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pO1xyXG4gICAgICAgIGlmICghX3RoaXMuX2VudHJpZXMpIHtcclxuICAgICAgICAgIF90aGlzLmRlbGV0ZShuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpdGVtcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICBpZiAoYVswXSA8IGJbMF0pIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFbMF0gPiBiWzBdKSB7XHJcbiAgICAgICAgICByZXR1cm4gKzE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChfdGhpcy5fZW50cmllcykgeyAvLyBmb3JjZSByZXNldCBiZWNhdXNlIElFIGtlZXBzIGtleXMgaW5kZXhcclxuICAgICAgICBfdGhpcy5fZW50cmllcyA9IHt9O1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmFwcGVuZChpdGVtc1tpXVswXSwgaXRlbXNbaV1bMV0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBwcm90by5fZnJvbVN0cmluZyAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnX2Zyb21TdHJpbmcnLCB7XHJcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICB3cml0YWJsZTogZmFsc2UsXHJcbiAgICAgIHZhbHVlOiBmdW5jdGlvbihzZWFyY2hTdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5fZW50cmllcykge1xyXG4gICAgICAgICAgdGhpcy5fZW50cmllcyA9IHt9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2YXIga2V5cyA9IFtdO1xyXG4gICAgICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XHJcbiAgICAgICAgICAgIGtleXMucHVzaChuYW1lKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlKGtleXNbaV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VhcmNoU3RyaW5nID0gc2VhcmNoU3RyaW5nLnJlcGxhY2UoL15cXD8vLCAnJyk7XHJcbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBzZWFyY2hTdHJpbmcuc3BsaXQoJyYnKTtcclxuICAgICAgICB2YXIgYXR0cmlidXRlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgYXR0cmlidXRlID0gYXR0cmlidXRlc1tpXS5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgdGhpcy5hcHBlbmQoXHJcbiAgICAgICAgICAgIGRlc2VyaWFsaXplUGFyYW0oYXR0cmlidXRlWzBdKSxcclxuICAgICAgICAgICAgKGF0dHJpYnV0ZS5sZW5ndGggPiAxKSA/IGRlc2VyaWFsaXplUGFyYW0oYXR0cmlidXRlWzFdKSA6ICcnXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBIVE1MQW5jaG9yRWxlbWVudFxyXG5cclxufSkoXHJcbiAgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSA/IGdsb2JhbFxyXG4gICAgOiAoKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IHdpbmRvd1xyXG4gICAgOiAoKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykgPyBzZWxmIDogdGhpcykpXHJcbik7XHJcblxyXG4oZnVuY3Rpb24oZ2xvYmFsKSB7XHJcbiAgLyoqXHJcbiAgICogUG9seWZpbGwgVVJMXHJcbiAgICpcclxuICAgKiBJbnNwaXJlZCBmcm9tIDogaHR0cHM6Ly9naXRodWIuY29tL2Fydi9ET00tVVJMLVBvbHlmaWxsL2Jsb2IvbWFzdGVyL3NyYy91cmwuanNcclxuICAgKi9cclxuXHJcbiAgdmFyIGNoZWNrSWZVUkxJc1N1cHBvcnRlZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIHUgPSBuZXcgZ2xvYmFsLlVSTCgnYicsICdodHRwOi8vYScpO1xyXG4gICAgICB1LnBhdGhuYW1lID0gJ2MgZCc7XHJcbiAgICAgIHJldHVybiAodS5ocmVmID09PSAnaHR0cDovL2EvYyUyMGQnKSAmJiB1LnNlYXJjaFBhcmFtcztcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICB2YXIgcG9seWZpbGxVUkwgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBfVVJMID0gZ2xvYmFsLlVSTDtcclxuXHJcbiAgICB2YXIgVVJMID0gZnVuY3Rpb24odXJsLCBiYXNlKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykgdXJsID0gU3RyaW5nKHVybCk7XHJcbiAgICAgIGlmIChiYXNlICYmIHR5cGVvZiBiYXNlICE9PSAnc3RyaW5nJykgYmFzZSA9IFN0cmluZyhiYXNlKTtcclxuXHJcbiAgICAgIC8vIE9ubHkgY3JlYXRlIGFub3RoZXIgZG9jdW1lbnQgaWYgdGhlIGJhc2UgaXMgZGlmZmVyZW50IGZyb20gY3VycmVudCBsb2NhdGlvbi5cclxuICAgICAgdmFyIGRvYyA9IGRvY3VtZW50LCBiYXNlRWxlbWVudDtcclxuICAgICAgaWYgKGJhc2UgJiYgKGdsb2JhbC5sb2NhdGlvbiA9PT0gdm9pZCAwIHx8IGJhc2UgIT09IGdsb2JhbC5sb2NhdGlvbi5ocmVmKSkge1xyXG4gICAgICAgIGJhc2UgPSBiYXNlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgZG9jID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KCcnKTtcclxuICAgICAgICBiYXNlRWxlbWVudCA9IGRvYy5jcmVhdGVFbGVtZW50KCdiYXNlJyk7XHJcbiAgICAgICAgYmFzZUVsZW1lbnQuaHJlZiA9IGJhc2U7XHJcbiAgICAgICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQoYmFzZUVsZW1lbnQpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBpZiAoYmFzZUVsZW1lbnQuaHJlZi5pbmRleE9mKGJhc2UpICE9PSAwKSB0aHJvdyBuZXcgRXJyb3IoYmFzZUVsZW1lbnQuaHJlZik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VSTCB1bmFibGUgdG8gc2V0IGJhc2UgJyArIGJhc2UgKyAnIGR1ZSB0byAnICsgZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBhbmNob3JFbGVtZW50ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgYW5jaG9yRWxlbWVudC5ocmVmID0gdXJsO1xyXG4gICAgICBpZiAoYmFzZUVsZW1lbnQpIHtcclxuICAgICAgICBkb2MuYm9keS5hcHBlbmRDaGlsZChhbmNob3JFbGVtZW50KTtcclxuICAgICAgICBhbmNob3JFbGVtZW50LmhyZWYgPSBhbmNob3JFbGVtZW50LmhyZWY7IC8vIGZvcmNlIGhyZWYgdG8gcmVmcmVzaFxyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgaW5wdXRFbGVtZW50ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgIGlucHV0RWxlbWVudC50eXBlID0gJ3VybCc7XHJcbiAgICAgIGlucHV0RWxlbWVudC52YWx1ZSA9IHVybDtcclxuXHJcbiAgICAgIGlmIChhbmNob3JFbGVtZW50LnByb3RvY29sID09PSAnOicgfHwgIS86Ly50ZXN0KGFuY2hvckVsZW1lbnQuaHJlZikgfHwgKCFpbnB1dEVsZW1lbnQuY2hlY2tWYWxpZGl0eSgpICYmICFiYXNlKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgVVJMJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2FuY2hvckVsZW1lbnQnLCB7XHJcbiAgICAgICAgdmFsdWU6IGFuY2hvckVsZW1lbnRcclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgLy8gY3JlYXRlIGEgbGlua2VkIHNlYXJjaFBhcmFtcyB3aGljaCByZWZsZWN0IGl0cyBjaGFuZ2VzIG9uIFVSTFxyXG4gICAgICB2YXIgc2VhcmNoUGFyYW1zID0gbmV3IGdsb2JhbC5VUkxTZWFyY2hQYXJhbXModGhpcy5zZWFyY2gpO1xyXG4gICAgICB2YXIgZW5hYmxlU2VhcmNoVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgdmFyIGVuYWJsZVNlYXJjaFBhcmFtc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgIFsnYXBwZW5kJywgJ2RlbGV0ZScsICdzZXQnXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZE5hbWUpIHtcclxuICAgICAgICB2YXIgbWV0aG9kID0gc2VhcmNoUGFyYW1zW21ldGhvZE5hbWVdO1xyXG4gICAgICAgIHNlYXJjaFBhcmFtc1ttZXRob2ROYW1lXSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgbWV0aG9kLmFwcGx5KHNlYXJjaFBhcmFtcywgYXJndW1lbnRzKTtcclxuICAgICAgICAgIGlmIChlbmFibGVTZWFyY2hVcGRhdGUpIHtcclxuICAgICAgICAgICAgZW5hYmxlU2VhcmNoUGFyYW1zVXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF90aGlzLnNlYXJjaCA9IHNlYXJjaFBhcmFtcy50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBlbmFibGVTZWFyY2hQYXJhbXNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdzZWFyY2hQYXJhbXMnLCB7XHJcbiAgICAgICAgdmFsdWU6IHNlYXJjaFBhcmFtcyxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdmFyIHNlYXJjaCA9IHZvaWQgMDtcclxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdfdXBkYXRlU2VhcmNoUGFyYW1zJywge1xyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnNlYXJjaCAhPT0gc2VhcmNoKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaCA9IHRoaXMuc2VhcmNoO1xyXG4gICAgICAgICAgICBpZiAoZW5hYmxlU2VhcmNoUGFyYW1zVXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgZW5hYmxlU2VhcmNoVXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hQYXJhbXMuX2Zyb21TdHJpbmcodGhpcy5zZWFyY2gpO1xyXG4gICAgICAgICAgICAgIGVuYWJsZVNlYXJjaFVwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgcHJvdG8gPSBVUkwucHJvdG90eXBlO1xyXG5cclxuICAgIHZhciBsaW5rVVJMV2l0aEFuY2hvckF0dHJpYnV0ZSA9IGZ1bmN0aW9uKGF0dHJpYnV0ZU5hbWUpIHtcclxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCBhdHRyaWJ1dGVOYW1lLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9hbmNob3JFbGVtZW50W2F0dHJpYnV0ZU5hbWVdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy5fYW5jaG9yRWxlbWVudFthdHRyaWJ1dGVOYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgWydoYXNoJywgJ2hvc3QnLCAnaG9zdG5hbWUnLCAncG9ydCcsICdwcm90b2NvbCddXHJcbiAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGF0dHJpYnV0ZU5hbWUpIHtcclxuICAgICAgICBsaW5rVVJMV2l0aEFuY2hvckF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnc2VhcmNoJywge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbmNob3JFbGVtZW50WydzZWFyY2gnXTtcclxuICAgICAgfSxcclxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2FuY2hvckVsZW1lbnRbJ3NlYXJjaCddID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlU2VhcmNoUGFyYW1zKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVudW1lcmFibGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHByb3RvLCB7XHJcblxyXG4gICAgICAndG9TdHJpbmcnOiB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5ocmVmO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAnaHJlZic6IHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvckVsZW1lbnQuaHJlZi5yZXBsYWNlKC9cXD8kLywgJycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy5fYW5jaG9yRWxlbWVudC5ocmVmID0gdmFsdWU7XHJcbiAgICAgICAgICB0aGlzLl91cGRhdGVTZWFyY2hQYXJhbXMoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcclxuICAgICAgfSxcclxuXHJcbiAgICAgICdwYXRobmFtZSc6IHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvckVsZW1lbnQucGF0aG5hbWUucmVwbGFjZSgvKF5cXC8/KS8sICcvJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICB0aGlzLl9hbmNob3JFbGVtZW50LnBhdGhuYW1lID0gdmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAnb3JpZ2luJzoge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAvLyBnZXQgZXhwZWN0ZWQgcG9ydCBmcm9tIHByb3RvY29sXHJcbiAgICAgICAgICB2YXIgZXhwZWN0ZWRQb3J0ID0geyAnaHR0cDonOiA4MCwgJ2h0dHBzOic6IDQ0MywgJ2Z0cDonOiAyMSB9W3RoaXMuX2FuY2hvckVsZW1lbnQucHJvdG9jb2xdO1xyXG4gICAgICAgICAgLy8gYWRkIHBvcnQgdG8gb3JpZ2luIGlmLCBleHBlY3RlZCBwb3J0IGlzIGRpZmZlcmVudCB0aGFuIGFjdHVhbCBwb3J0XHJcbiAgICAgICAgICAvLyBhbmQgaXQgaXMgbm90IGVtcHR5IGYuZSBodHRwOi8vZm9vOjgwODBcclxuICAgICAgICAgIC8vIDgwODAgIT0gODAgJiYgODA4MCAhPSAnJ1xyXG4gICAgICAgICAgdmFyIGFkZFBvcnRUb09yaWdpbiA9IHRoaXMuX2FuY2hvckVsZW1lbnQucG9ydCAhPSBleHBlY3RlZFBvcnQgJiZcclxuICAgICAgICAgICAgdGhpcy5fYW5jaG9yRWxlbWVudC5wb3J0ICE9PSAnJztcclxuXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5fYW5jaG9yRWxlbWVudC5wcm90b2NvbCArXHJcbiAgICAgICAgICAgICcvLycgK1xyXG4gICAgICAgICAgICB0aGlzLl9hbmNob3JFbGVtZW50Lmhvc3RuYW1lICtcclxuICAgICAgICAgICAgKGFkZFBvcnRUb09yaWdpbiA/ICgnOicgKyB0aGlzLl9hbmNob3JFbGVtZW50LnBvcnQpIDogJycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgJ3Bhc3N3b3JkJzogeyAvLyBUT0RPXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcclxuICAgICAgfSxcclxuXHJcbiAgICAgICd1c2VybmFtZSc6IHsgLy8gVE9ET1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBVUkwuY3JlYXRlT2JqZWN0VVJMID0gZnVuY3Rpb24oYmxvYikge1xyXG4gICAgICByZXR1cm4gX1VSTC5jcmVhdGVPYmplY3RVUkwuYXBwbHkoX1VSTCwgYXJndW1lbnRzKTtcclxuICAgIH07XHJcblxyXG4gICAgVVJMLnJldm9rZU9iamVjdFVSTCA9IGZ1bmN0aW9uKHVybCkge1xyXG4gICAgICByZXR1cm4gX1VSTC5yZXZva2VPYmplY3RVUkwuYXBwbHkoX1VSTCwgYXJndW1lbnRzKTtcclxuICAgIH07XHJcblxyXG4gICAgZ2xvYmFsLlVSTCA9IFVSTDtcclxuXHJcbiAgfTtcclxuXHJcbiAgaWYgKCFjaGVja0lmVVJMSXNTdXBwb3J0ZWQoKSkge1xyXG4gICAgcG9seWZpbGxVUkwoKTtcclxuICB9XHJcblxyXG4gIGlmICgoZ2xvYmFsLmxvY2F0aW9uICE9PSB2b2lkIDApICYmICEoJ29yaWdpbicgaW4gZ2xvYmFsLmxvY2F0aW9uKSkge1xyXG4gICAgdmFyIGdldE9yaWdpbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gZ2xvYmFsLmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGdsb2JhbC5sb2NhdGlvbi5ob3N0bmFtZSArIChnbG9iYWwubG9jYXRpb24ucG9ydCA/ICgnOicgKyBnbG9iYWwubG9jYXRpb24ucG9ydCkgOiAnJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbG9iYWwubG9jYXRpb24sICdvcmlnaW4nLCB7XHJcbiAgICAgICAgZ2V0OiBnZXRPcmlnaW4sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZ2xvYmFsLmxvY2F0aW9uLm9yaWdpbiA9IGdldE9yaWdpbigpO1xyXG4gICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pKFxyXG4gICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykgPyBnbG9iYWxcclxuICAgIDogKCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3dcclxuICAgIDogKCh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpID8gc2VsZiA6IHRoaXMpKVxyXG4pO1xyXG4iLCIvKipcbiAqXG4gKlxuICogQGF1dGhvciBKZXJyeSBCZW5keSA8amVycnlAaWNld2luZ2NjLmNvbT5cbiAqIEBsaWNlbmNlIE1JVFxuICpcbiAqL1xuXG4oZnVuY3Rpb24oc2VsZikge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBuYXRpdmVVUkxTZWFyY2hQYXJhbXMgPSAoc2VsZi5VUkxTZWFyY2hQYXJhbXMgJiYgc2VsZi5VUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmdldCkgPyBzZWxmLlVSTFNlYXJjaFBhcmFtcyA6IG51bGwsXG4gICAgICAgIGlzU3VwcG9ydE9iamVjdENvbnN0cnVjdG9yID0gbmF0aXZlVVJMU2VhcmNoUGFyYW1zICYmIChuZXcgbmF0aXZlVVJMU2VhcmNoUGFyYW1zKHthOiAxfSkpLnRvU3RyaW5nKCkgPT09ICdhPTEnLFxuICAgICAgICAvLyBUaGVyZSBpcyBhIGJ1ZyBpbiBzYWZhcmkgMTAuMSAoYW5kIGVhcmxpZXIpIHRoYXQgaW5jb3JyZWN0bHkgZGVjb2RlcyBgJTJCYCBhcyBhbiBlbXB0eSBzcGFjZSBhbmQgbm90IGEgcGx1cy5cbiAgICAgICAgZGVjb2Rlc1BsdXNlc0NvcnJlY3RseSA9IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyAmJiAobmV3IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcygncz0lMkInKS5nZXQoJ3MnKSA9PT0gJysnKSxcbiAgICAgICAgX19VUkxTZWFyY2hQYXJhbXNfXyA9IFwiX19VUkxTZWFyY2hQYXJhbXNfX1wiLFxuICAgICAgICAvLyBGaXggYnVnIGluIEVkZ2Ugd2hpY2ggY2Fubm90IGVuY29kZSAnICYnIGNvcnJlY3RseVxuICAgICAgICBlbmNvZGVzQW1wZXJzYW5kc0NvcnJlY3RseSA9IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyA/IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBhbXBlcnNhbmRUZXN0ID0gbmV3IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICAgICAgYW1wZXJzYW5kVGVzdC5hcHBlbmQoJ3MnLCAnICYnKTtcbiAgICAgICAgICAgIHJldHVybiBhbXBlcnNhbmRUZXN0LnRvU3RyaW5nKCkgPT09ICdzPSslMjYnO1xuICAgICAgICB9KSgpIDogdHJ1ZSxcbiAgICAgICAgcHJvdG90eXBlID0gVVJMU2VhcmNoUGFyYW1zUG9seWZpbGwucHJvdG90eXBlLFxuICAgICAgICBpdGVyYWJsZSA9ICEhKHNlbGYuU3ltYm9sICYmIHNlbGYuU3ltYm9sLml0ZXJhdG9yKTtcblxuICAgIGlmIChuYXRpdmVVUkxTZWFyY2hQYXJhbXMgJiYgaXNTdXBwb3J0T2JqZWN0Q29uc3RydWN0b3IgJiYgZGVjb2Rlc1BsdXNlc0NvcnJlY3RseSAmJiBlbmNvZGVzQW1wZXJzYW5kc0NvcnJlY3RseSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBNYWtlIGEgVVJMU2VhcmNoUGFyYW1zIGluc3RhbmNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdHxzdHJpbmd8VVJMU2VhcmNoUGFyYW1zfSBzZWFyY2hcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBVUkxTZWFyY2hQYXJhbXNQb2x5ZmlsbChzZWFyY2gpIHtcbiAgICAgICAgc2VhcmNoID0gc2VhcmNoIHx8IFwiXCI7XG5cbiAgICAgICAgLy8gc3VwcG9ydCBjb25zdHJ1Y3Qgb2JqZWN0IHdpdGggYW5vdGhlciBVUkxTZWFyY2hQYXJhbXMgaW5zdGFuY2VcbiAgICAgICAgaWYgKHNlYXJjaCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcyB8fCBzZWFyY2ggaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXNQb2x5ZmlsbCkge1xuICAgICAgICAgICAgc2VhcmNoID0gc2VhcmNoLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX10gPSBwYXJzZVRvRGljdChzZWFyY2gpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kcyBhIHNwZWNpZmllZCBrZXkvdmFsdWUgcGFpciBhcyBhIG5ldyBzZWFyY2ggcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKi9cbiAgICBwcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgYXBwZW5kVG8odGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX10sIG5hbWUsIHZhbHVlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyB0aGUgZ2l2ZW4gc2VhcmNoIHBhcmFtZXRlciwgYW5kIGl0cyBhc3NvY2lhdGVkIHZhbHVlLFxuICAgICAqIGZyb20gdGhlIGxpc3Qgb2YgYWxsIHNlYXJjaCBwYXJhbWV0ZXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKi9cbiAgICBwcm90b3R5cGVbJ2RlbGV0ZSddID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBkZWxldGUgdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX10gW25hbWVdO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCB2YWx1ZSBhc3NvY2lhdGVkIHRvIHRoZSBnaXZlbiBzZWFyY2ggcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgcHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdmFyIGRpY3QgPSB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXTtcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gZGljdCA/IGRpY3RbbmFtZV1bMF0gOiBudWxsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCB0aGUgdmFsdWVzIGFzc29jaWF0aW9uIHdpdGggYSBnaXZlbiBzZWFyY2ggcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgcHJvdG90eXBlLmdldEFsbCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdmFyIGRpY3QgPSB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXTtcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gZGljdCA/IGRpY3QgW25hbWVdLnNsaWNlKDApIDogW107XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBCb29sZWFuIGluZGljYXRpbmcgaWYgc3VjaCBhIHNlYXJjaCBwYXJhbWV0ZXIgZXhpc3RzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gbmFtZSBpbiB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsdWUgYXNzb2NpYXRlZCB0byBhIGdpdmVuIHNlYXJjaCBwYXJhbWV0ZXIgdG9cbiAgICAgKiB0aGUgZ2l2ZW4gdmFsdWUuIElmIHRoZXJlIHdlcmUgc2V2ZXJhbCB2YWx1ZXMsIGRlbGV0ZSB0aGVcbiAgICAgKiBvdGhlcnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqL1xuICAgIHByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX11bbmFtZV0gPSBbJycgKyB2YWx1ZV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzdHJpbmcgY29udGFpbmcgYSBxdWVyeSBzdHJpbmcgc3VpdGFibGUgZm9yIHVzZSBpbiBhIFVSTC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgcHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkaWN0ID0gdGhpc1tfX1VSTFNlYXJjaFBhcmFtc19fXSwgcXVlcnkgPSBbXSwgaSwga2V5LCBuYW1lLCB2YWx1ZTtcbiAgICAgICAgZm9yIChrZXkgaW4gZGljdCkge1xuICAgICAgICAgICAgbmFtZSA9IGVuY29kZShrZXkpO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgdmFsdWUgPSBkaWN0W2tleV07IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHF1ZXJ5LnB1c2gobmFtZSArICc9JyArIGVuY29kZSh2YWx1ZVtpXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBxdWVyeS5qb2luKCcmJyk7XG4gICAgfTtcblxuICAgIC8vIFRoZXJlIGlzIGEgYnVnIGluIFNhZmFyaSAxMC4xIGFuZCBgUHJveHlgaW5nIGl0IGlzIG5vdCBlbm91Z2guXG4gICAgdmFyIGZvclN1cmVVc2VQb2x5ZmlsbCA9ICFkZWNvZGVzUGx1c2VzQ29ycmVjdGx5O1xuICAgIHZhciB1c2VQcm94eSA9ICghZm9yU3VyZVVzZVBvbHlmaWxsICYmIG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyAmJiAhaXNTdXBwb3J0T2JqZWN0Q29uc3RydWN0b3IgJiYgc2VsZi5Qcm94eSlcbiAgICAvKlxuICAgICAqIEFwcGx5IHBvbGlmaWxsIHRvIGdsb2JhbCBvYmplY3QgYW5kIGFwcGVuZCBvdGhlciBwcm90b3R5cGUgaW50byBpdFxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCAnVVJMU2VhcmNoUGFyYW1zJywge1xuICAgICAgICB2YWx1ZTogKHVzZVByb3h5ID9cbiAgICAgICAgICAgIC8vIFNhZmFyaSAxMC4wIGRvZXNuJ3Qgc3VwcG9ydCBQcm94eSwgc28gaXQgd29uJ3QgZXh0ZW5kIFVSTFNlYXJjaFBhcmFtcyBvbiBzYWZhcmkgMTAuMFxuICAgICAgICAgICAgbmV3IFByb3h5KG5hdGl2ZVVSTFNlYXJjaFBhcmFtcywge1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdDogZnVuY3Rpb24odGFyZ2V0LCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdGFyZ2V0KChuZXcgVVJMU2VhcmNoUGFyYW1zUG9seWZpbGwoYXJnc1swXSkudG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pIDpcbiAgICAgICAgICAgIFVSTFNlYXJjaFBhcmFtc1BvbHlmaWxsKVxuICAgIH0pO1xuXG4gICAgdmFyIFVTUFByb3RvID0gc2VsZi5VUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlO1xuXG4gICAgVVNQUHJvdG8ucG9seWZpbGwgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0aGlzQXJnXG4gICAgICovXG4gICAgVVNQUHJvdG8uZm9yRWFjaCA9IFVTUFByb3RvLmZvckVhY2ggfHwgZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIGRpY3QgPSBwYXJzZVRvRGljdCh0aGlzLnRvU3RyaW5nKCkpO1xuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkaWN0KS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIGRpY3RbbmFtZV0uZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsdWUsIG5hbWUsIHRoaXMpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTb3J0IGFsbCBuYW1lLXZhbHVlIHBhaXJzXG4gICAgICovXG4gICAgVVNQUHJvdG8uc29ydCA9IFVTUFByb3RvLnNvcnQgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkaWN0ID0gcGFyc2VUb0RpY3QodGhpcy50b1N0cmluZygpKSwga2V5cyA9IFtdLCBrLCBpLCBqO1xuICAgICAgICBmb3IgKGsgaW4gZGljdCkge1xuICAgICAgICAgICAga2V5cy5wdXNoKGspO1xuICAgICAgICB9XG4gICAgICAgIGtleXMuc29ydCgpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzWydkZWxldGUnXShrZXlzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV0sIHZhbHVlcyA9IGRpY3Rba2V5XTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB2YWx1ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZChrZXksIHZhbHVlc1tqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBpdGVyYXRvciBhbGxvd2luZyB0byBnbyB0aHJvdWdoIGFsbCBrZXlzIG9mXG4gICAgICogdGhlIGtleS92YWx1ZSBwYWlycyBjb250YWluZWQgaW4gdGhpcyBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgVVNQUHJvdG8ua2V5cyA9IFVTUFByb3RvLmtleXMgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgbmFtZSkge1xuICAgICAgICAgICAgaXRlbXMucHVzaChuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtYWtlSXRlcmF0b3IoaXRlbXMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGl0ZXJhdG9yIGFsbG93aW5nIHRvIGdvIHRocm91Z2ggYWxsIHZhbHVlcyBvZlxuICAgICAqIHRoZSBrZXkvdmFsdWUgcGFpcnMgY29udGFpbmVkIGluIHRoaXMgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIFVTUFByb3RvLnZhbHVlcyA9IFVTUFByb3RvLnZhbHVlcyB8fCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1ha2VJdGVyYXRvcihpdGVtcyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gaXRlcmF0b3IgYWxsb3dpbmcgdG8gZ28gdGhyb3VnaCBhbGwga2V5L3ZhbHVlXG4gICAgICogcGFpcnMgY29udGFpbmVkIGluIHRoaXMgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIFVTUFByb3RvLmVudHJpZXMgPSBVU1BQcm90by5lbnRyaWVzIHx8IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIG5hbWUpIHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goW25hbWUsIGl0ZW1dKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtYWtlSXRlcmF0b3IoaXRlbXMpO1xuICAgIH07XG5cblxuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgICBVU1BQcm90b1tzZWxmLlN5bWJvbC5pdGVyYXRvcl0gPSBVU1BQcm90b1tzZWxmLlN5bWJvbC5pdGVyYXRvcl0gfHwgVVNQUHJvdG8uZW50cmllcztcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGVuY29kZShzdHIpIHtcbiAgICAgICAgdmFyIHJlcGxhY2UgPSB7XG4gICAgICAgICAgICAnISc6ICclMjEnLFxuICAgICAgICAgICAgXCInXCI6ICclMjcnLFxuICAgICAgICAgICAgJygnOiAnJTI4JyxcbiAgICAgICAgICAgICcpJzogJyUyOScsXG4gICAgICAgICAgICAnfic6ICclN0UnLFxuICAgICAgICAgICAgJyUyMCc6ICcrJyxcbiAgICAgICAgICAgICclMDAnOiAnXFx4MDAnXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bISdcXChcXCl+XXwlMjB8JTAwL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVwbGFjZVttYXRjaF07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlY29kZShzdHIpIHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIucmVwbGFjZSgvXFwrL2csICcgJykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VJdGVyYXRvcihhcnIpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0ge1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gYXJyLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgICAgICAgaXRlcmF0b3Jbc2VsZi5TeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZVRvRGljdChzZWFyY2gpIHtcbiAgICAgICAgdmFyIGRpY3QgPSB7fTtcblxuICAgICAgICBpZiAodHlwZW9mIHNlYXJjaCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHNlYXJjaCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWFyY2guaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBhcHBlbmRUbyhkaWN0LCBrZXksIHNlYXJjaFtrZXldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIGZpcnN0ICc/J1xuICAgICAgICAgICAgaWYgKHNlYXJjaC5pbmRleE9mKFwiP1wiKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHNlYXJjaCA9IHNlYXJjaC5zbGljZSgxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHBhaXJzID0gc2VhcmNoLnNwbGl0KFwiJlwiKTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGFpcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBwYWlycyBbal0sXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gdmFsdWUuaW5kZXhPZignPScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKC0xIDwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kVG8oZGljdCwgZGVjb2RlKHZhbHVlLnNsaWNlKDAsIGluZGV4KSksIGRlY29kZSh2YWx1ZS5zbGljZShpbmRleCArIDEpKSk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZFRvKGRpY3QsIGRlY29kZSh2YWx1ZSksICcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkaWN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGVuZFRvKGRpY3QsIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHZhciB2YWwgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiAoXG4gICAgICAgICAgICB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnRvU3RyaW5nKCkgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChuYW1lIGluIGRpY3QpIHtcbiAgICAgICAgICAgIGRpY3RbbmFtZV0ucHVzaCh2YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGljdFtuYW1lXSA9IFt2YWxdO1xuICAgICAgICB9XG4gICAgfVxuXG59KSh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHRoaXMpKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYWxsb3dDYW5jZWw6IHRydWUsXG4gIGRlYnVnOiBmYWxzZSxcbiAgc2tpcERvbWFpblZlcmlmaWNhdGlvbjogZmFsc2UsXG4gIHRlc3RNb2RlOiBmYWxzZSxcbiAgdGltZW91dDogMzAwMDAsIC8vIDMwIHNlY29uZHNcbiAgYWxsb3dWaWV3cG9ydE92ZXJyaWRlOiBmYWxzZSxcbn07XG4iLCJpbXBvcnQgRW1pdHRlciBmcm9tICd0aW55LWVtaXR0ZXInO1xuaW1wb3J0IHsgc2FmZUh0bWwgfSBmcm9tICdjb21tb24tdGFncyc7XG5cbmltcG9ydCBkZWJ1ZyBmcm9tICcuL3V0aWxzL2RlYnVnJztcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuL2RlZmF1bHRzJztcbmltcG9ydCBzZXR0aW5ncyBmcm9tICcuL3NldHRpbmdzJztcblxuY2xhc3MgSGVsbG9TaWduIGV4dGVuZHMgRW1pdHRlciB7XG5cbiAgLyoqXG4gICAqIEhlbGxvU2lnbiBFbWJlZGRlZCBjbGFzcyBuYW1lcy5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHN0YXRpY1xuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIHN0YXRpYyBjbGFzc05hbWVzID0gc2V0dGluZ3MuY2xhc3NOYW1lcztcblxuICAvKipcbiAgICogSGVsbG9TaWduIEVtYmVkZGVkIGV2ZW50cy5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHN0YXRpY1xuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIHN0YXRpYyBldmVudHMgPSBzZXR0aW5ncy5ldmVudHM7XG5cbiAgLyoqXG4gICAqIEhlbGxvU2lnbiBFbWJlZGRlZCBzdXBwb3J0ZWQgbG9jYWxlcy5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHN0YXRpY1xuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIHN0YXRpYyBsb2NhbGVzID0gc2V0dGluZ3MubG9jYWxlcztcblxuICAvKipcbiAgICogSGVsbG9TaWduIEVtYmVkZGVkIGNyb3NzLW9yaWdpbiB3aW5kb3cgbWVzc2FnZXMuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBzdGF0aWNcbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBzdGF0aWMgbWVzc2FnZXMgPSBzZXR0aW5ncy5tZXNzYWdlcztcblxuICAvKipcbiAgICogSGVsbG9TaWduIEVtYmVkZGVkIHZlcnNpb24gbnVtYmVyLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAc3RhdGljXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgc3RhdGljIHZlcnNpb24gPSBfX1BLR19WRVJTSU9OX187XG5cbiAgLyoqXG4gICAqIEludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgYmFja3VwIHZpZXdwb3J0IGNvbnRlbnQuIFVzZWRcbiAgICogaWYgdGhlIFwiYWxsb3dWaWV3cG9ydE92ZXJyaWRlXCIgY29uZmlnIG9wdGlvbiBpcyBzZXQgdG9cbiAgICogdHJ1ZS5cbiAgICpcbiAgICogQHR5cGUgez9zdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYmFja3VwVmlld3BvcnRDb250ZW50ID0gbnVsbDtcblxuICAvKipcbiAgICogVGhlIGJhc2UgY29uZmlnIG9iamVjdCB3aGljaCBcIm9wZW5cIiB3aWxsIGV4dGVuZC5cbiAgICpcbiAgICogQHR5cGUgez9PYmplY3R9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYmFzZUNvbmZpZyA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBiYXNlIEhlbGxvU2lnbiBFbWJlZGRlZCBjb250YWluZXJcbiAgICogZWxlbWVudC5cbiAgICpcbiAgICogQHR5cGUgez9IVE1MRWxlbWVudH1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9iYXNlRWwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBUaGUgZmluYWwgY29uZmlnIG9iamVjdC5cbiAgICpcbiAgICogQHR5cGUgez9PYmplY3R9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY29uZmlnID0gbnVsbDtcblxuICAvKipcbiAgICogVGhlIGlGcmFtZSBVUkwgb2JqZWN0LlxuICAgKlxuICAgKiBAdHlwZSB7P1VSTH1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pRnJhbWVVUkwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgaUZyYW1lIGVsZW1lbnQuXG4gICAqXG4gICAqIEB0eXBlIHs/SFRNTEVsZW1lbnR9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaUZyYW1lRWwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBUaGUgaW5pdGlhbGl6YXRpb24gdGltZW91dCB0aW1lci5cbiAgICpcbiAgICogQHR5cGUgez9udW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaW5pdFRpbWVvdXQgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBjbGllbnQgaXMgb3BlbiBvciBub3QuXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2lzT3BlbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBhcHAgaXMgcmVhZHkgb3Igbm90LlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pc1JlYWR5ID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIHNpZ25hdHVyZSByZXF1ZXN0IGhhcyBiZWVuIHNlbnQgb3Igc2lnbmVkLlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pc1NlbnRPclNpZ25lZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25FbWJlZGRlZENsaWNrID0gdGhpcy5fb25FbWJlZGRlZENsaWNrLmJpbmQodGhpcyk7XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vbkluaXRUaW1lb3V0ID0gdGhpcy5fb25Jbml0VGltZW91dC5iaW5kKHRoaXMpO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25CZWZvcmVVbmxvYWQgPSB0aGlzLl9vbkJlZm9yZVVubG9hZC5iaW5kKHRoaXMpO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25NZXNzYWdlID0gdGhpcy5fb25NZXNzYWdlLmJpbmQodGhpcyk7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgSGVsbG9TaWduIEVtYmVkZGVkIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29ial1cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvYmogPSB7fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBkZWJ1Zy5pbmZvKCdjcmVhdGVkIG5ldyBIZWxsb1NpZ24gaW5zdGFuY2Ugd2l0aCBvcHRpb25zJywgb2JqKTtcblxuICAgIGlmIChvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMuX2Jhc2VDb25maWcgPSB7IC4uLm9iaiB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDb25maWd1cmF0aW9uIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhbmQgYXBwZW5kcyB0aGUgXCJjbGllbnRfaWRcIiBwYXJhbWV0ZXIgdG8gdGhlXG4gICAqIGlGcmFtZSBwYXJhbXMgb2JqZWN0LlxuICAgKlxuICAgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IGlmIGNsaWVudElkIGlzIGludmFsaWRcbiAgICogQHBhcmFtIHtVUkxTZWFyY2hQYXJhbXN9IHBhcmFtc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FwcGx5Q2xpZW50SWQocGFyYW1zKSB7XG4gICAgY29uc3QgdmFsID0gdGhpcy5fY29uZmlnLmNsaWVudElkO1xuXG4gICAgaWYgKCF2YWwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiY2xpZW50SWRcIiBpcyByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJjbGllbnRJZFwiIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICB9XG5cbiAgICBwYXJhbXMuYXBwZW5kKCdjbGllbnRfaWQnLCB2YWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhbmQgYXBwZW5kcyB0aGUgXCJkZWJ1Z1wiIHBhcmFtZXRlciB0byB0aGVcbiAgICogaUZyYW1lIHBhcmFtcyBvYmplY3QuXG4gICAqXG4gICAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gaWYgZGVidWcgaXMgaW52YWxpZFxuICAgKiBAcGFyYW0ge1VSTFNlYXJjaFBhcmFtc30gcGFyYW1zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwbHlEZWJ1ZyhwYXJhbXMpIHtcbiAgICBjb25zdCB2YWwgPSB0aGlzLl9jb25maWcuZGVidWc7XG5cbiAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImRlYnVnXCIgbXVzdCBiZSBhIGJvb2xlYW4nKTtcbiAgICB9XG5cbiAgICBwYXJhbXMuYXBwZW5kKCdkZWJ1ZycsIHZhbCA/IDEgOiAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYW5kIGFwcGVuZHMgdGhlIFwiZmluYWxfYnV0dG9uX3RleHRcIiBwYXJhbWV0ZXJcbiAgICogdG8gdGhlIGlGcmFtZSBwYXJhbXMgb2JqZWN0LlxuICAgKlxuICAgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IGlmIGZpbmFsQnV0dG9uVGV4dCBpcyBpbnZhbGlkXG4gICAqIEBwYXJhbSB7VVJMU2VhcmNoUGFyYW1zfSBwYXJhbXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9hcHBseUZpbmFsQnV0dG9uVGV4dChwYXJhbXMpIHtcbiAgICBpZiAoJ2ZpbmFsQnV0dG9uVGV4dCcgaW4gdGhpcy5fY29uZmlnKSB7XG4gICAgICBjb25zdCB2YWwgPSB0aGlzLl9jb25maWcuZmluYWxCdXR0b25UZXh0O1xuXG4gICAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJmaW5hbEJ1dHRvblRleHRcIiBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghWydTYXZlJywgJ1NlbmQnLCAnQ29udGludWUnXS5pbmNsdWRlcyh2YWwpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZmluYWxCdXR0b25UZXh0XCIgbXVzdCBiZSBvbmUgb2YgXCJTYXZlXCIsIFwiU2VuZFwiLCBvciBcIkNvbnRpbnVlXCInKTtcbiAgICAgIH1cblxuICAgICAgcGFyYW1zLmFwcGVuZCgnZmluYWxfYnV0dG9uX3RleHQnLCB2YWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYW5kIGFwcGVuZHMgdGhlIFwiaGlkZV9oZWFkZXJcIiBwYXJhbWV0ZXIgdG8gdGhlXG4gICAqIGlGcmFtZSBwYXJhbXMgb2JqZWN0LlxuICAgKlxuICAgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IGlmIGhpZGVIZWFkZXIgaXMgaW52YWxpZFxuICAgKiBAcGFyYW0ge1VSTFNlYXJjaFBhcmFtc30gcGFyYW1zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwbHlIaWRlSGVhZGVyKHBhcmFtcykge1xuICAgIGlmICgnaGlkZUhlYWRlcicgaW4gdGhpcy5fY29uZmlnKSB7XG4gICAgICBjb25zdCB2YWwgPSB0aGlzLl9jb25maWcuaGlkZUhlYWRlcjtcblxuICAgICAgaWYgKHR5cGVvZiB2YWwgIT09ICdib29sZWFuJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImhpZGVIZWFkZXJcIiBtdXN0IGJlIGEgYm9vbGVhbicpO1xuICAgICAgfVxuXG4gICAgICBwYXJhbXMuYXBwZW5kKCdoaWRlX2hlYWRlcicsIHZhbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgdGhlIFwidXNlcl9jdWx0dXJlXCIgcGFyYW1ldGVyIHRvIHRoZSBpRnJhbWVcbiAgICogcGFyYW1zIG9iamVjdCBpZiBpdCBpcyBkZWZpbmVkLlxuICAgKlxuICAgKiBAcGFyYW0ge1VSTFNlYXJjaFBhcmFtc30gcGFyYW1zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwbHlMb2NhbGUocGFyYW1zKSB7XG4gICAgY29uc3QgdmFsID0gdGhpcy5fY29uZmlnLmxvY2FsZTtcblxuICAgIGlmICh2YWwgPT09ICdlcy1NWCcpIHtcbiAgICAgIGNvbnNvbGUud2FybignTG9jYWxlIFwiZXMtTVhcIiBpcyBubyBsb25nZXIgc3VwcG9ydGVkLiBVc2UgZXMtTEEgaW5zdGVhZC4nKTtcbiAgICB9XG5cbiAgICAvLyBJZiBcImxvY2FsZVwiIGlzIG5vdCBkZWZpbmVkLCB0aGVuIHRoZSBcInVzZXJfY3VsdHVyZVwiXG4gICAgLy8gcGFyYW0gaXMgbm90IHNlbnQgdG8gdGhlIGFwcC4gVGhpcyB0ZWxscyB0aGUgYXBwIHRvXG4gICAgLy8gdHJ5IHVzZSB0aGUgdXNlcidzIGRlZmF1bHQgYnJvd3NlciBsYW5ndWFnZSwgaWYgaXRcbiAgICAvLyBpcyBzdXBwb3J0ZWQgYnkgSGVsbG9TaWduLiBPdGhlcndpc2UsIHRoZSBhcHAgZmFsbHNcbiAgICAvLyBiYWNrIHRvIEVuZ2xpc2guXG4gICAgaWYgKHZhbCAmJiB2YWwubGVuZ3RoKSB7XG4gICAgICBwYXJhbXMuYXBwZW5kKCd1c2VyX2N1bHR1cmUnLCB2YWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIHRoZSBcInBhcmVudF91cmxcIiBwYXJhbWV0ZXIgdG8gdGhlIGlGcmFtZSBwYXJhbXNcbiAgICogb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge1VSTFNlYXJjaFBhcmFtc30gcGFyYW1zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwbHlQYXJlbnRVUkwocGFyYW1zKSB7XG4gICAgcGFyYW1zLmFwcGVuZCgncGFyZW50X3VybCcsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhbmQgYXBwZW5kcyB0aGUgXCJyZWRpcmVjdF91cmxcIiBwYXJhbWV0ZXIgdG9cbiAgICogdGhlIGlGcmFtZSBwYXJhbXMgb2JqZWN0LlxuICAgKlxuICAgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IGlmIHJlZGlyZWN0VG8gaXMgaW52YWxpZFxuICAgKiBAcGFyYW0ge1VSTFNlYXJjaFBhcmFtc30gcGFyYW1zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwbHlSZWRpcmVjdFRvKHBhcmFtcykge1xuICAgIGlmICgncmVkaXJlY3RUbycgaW4gdGhpcy5fY29uZmlnKSB7XG4gICAgICBjb25zdCB2YWwgPSB0aGlzLl9jb25maWcucmVkaXJlY3RUbztcblxuICAgICAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wicmVkaXJlY3RUb1wiIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgIH1cblxuICAgICAgcGFyYW1zLmFwcGVuZCgncmVkaXJlY3RfdXJsJywgdmFsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGFuZCBhcHBlbmRzIHRoZSBcInJlcXVlc3RlclwiIHBhcmFtZXRlciB0byB0aGVcbiAgICogaUZyYW1lIHBhcmFtcyBvYmplY3QuXG4gICAqXG4gICAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gaWYgcmVxdWVzdGluZ0VtYWlsIGlzIGludmFsaWRcbiAgICogQHBhcmFtIHtVUkxTZWFyY2hQYXJhbXN9IHBhcmFtc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FwcGx5UmVxdWVzdGluZ0VtYWlsKHBhcmFtcykge1xuICAgIGlmICgncmVxdWVzdGluZ0VtYWlsJyBpbiB0aGlzLl9jb25maWcpIHtcbiAgICAgIGNvbnN0IHZhbCA9IHRoaXMuX2NvbmZpZy5yZXF1ZXN0aW5nRW1haWw7XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInJlcXVlc3RpbmdFbWFpbFwiIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgIH1cblxuICAgICAgcGFyYW1zLmFwcGVuZCgncmVxdWVzdGVyJywgdmFsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGFuZCBhcHBlbmRzIHRoZSBcInNraXBfZG9tYWluX3ZlcmlmaWNhdGlvblwiXG4gICAqIHBhcmFtZXRlciB0byB0aGUgaUZyYW1lIHBhcmFtcyBvYmplY3QuXG4gICAqXG4gICAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gaWYgdGVzdE1vZGUgaXMgaW52YWxpZFxuICAgKiBAcGFyYW0ge1VSTFNlYXJjaFBhcmFtc30gcGFyYW1zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwbHlUZXN0TW9kZShwYXJhbXMpIHtcbiAgICBjb25zdCB2YWwgPSB0aGlzLl9jb25maWcuc2tpcERvbWFpblZlcmlmaWNhdGlvbiB8fCB0aGlzLl9jb25maWcudGVzdE1vZGU7XG5cbiAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInRlc3RNb2RlXCIgbXVzdCBiZSBhIGJvb2xlYW4nKTtcbiAgICB9XG5cbiAgICBwYXJhbXMuYXBwZW5kKCdza2lwX2RvbWFpbl92ZXJpZmljYXRpb24nLCB2YWwgPyAxIDogMCk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGFuZCBhcHBlbmRzIHRoZSBcIndoaXRlX2xhYmVsaW5nX29wdGlvbnNcIlxuICAgKiBwYXJhbWV0ZXIgdG8gdGhlIGlGcmFtZSBwYXJhbXMgb2JqZWN0LlxuICAgKlxuICAgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IGlmIHdoaXRlTGFiZWxpbmcgaXMgaW52YWxpZFxuICAgKiBAcGFyYW0ge1VSTFNlYXJjaFBhcmFtc30gcGFyYW1zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwbHlXaGl0ZUxhYmVsaW5nKHBhcmFtcykge1xuICAgIGlmICgnd2hpdGVMYWJlbGluZycgaW4gdGhpcy5fY29uZmlnKSB7XG4gICAgICBjb25zdCB2YWwgPSB0aGlzLl9jb25maWcud2hpdGVMYWJlbGluZztcblxuICAgICAgaWYgKHR5cGVvZiB2YWwgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wid2hpdGVMYWJlbGluZ1wiIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gICAgICB9XG5cbiAgICAgIHBhcmFtcy5hcHBlbmQoJ3doaXRlX2xhYmVsaW5nX29wdGlvbnMnLCBKU09OLnN0cmluZ2lmeSh2YWwpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyB0aGUgXCJ1eF92ZXJzaW9uXCIgcGFyYW1ldGVyIHRvIHRoZSBpRnJhbWVcbiAgICogcGFyYW1zIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtVUkxTZWFyY2hQYXJhbXN9IHBhcmFtc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FwcGx5VXhWZXJzaW9uKHBhcmFtcykge1xuICAgIHBhcmFtcy5hcHBlbmQoJ3V4X3ZlcnNpb24nLCAnMicpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgdGhlIFwianNfdmVyc2lvblwiIHBhcmFtZXRlciB0byB0aGUgaUZyYW1lIHBhcmFtc1xuICAgKiBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7VVJMU2VhcmNoUGFyYW1zfSBwYXJhbXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9hcHBseVZlcnNpb24ocGFyYW1zKSB7XG4gICAgcGFyYW1zLmFwcGVuZCgnanNfdmVyc2lvbicsIF9fUEtHX1ZFUlNJT05fXyk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGFuZCBjcmF0ZXMgdGhlIGlGcmFtZSBwYXJhbXMgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge1VSTH0gZnJhbWVVUkxcbiAgICogQHJldHVybnMge1VSTFNlYXJjaFBhcmFtc31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9nZXRGcmFtZVBhcmFtcyhmcmFtZVVSTCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoZnJhbWVVUkwuc2VhcmNoKTtcblxuICAgIHRoaXMuX2FwcGx5Q2xpZW50SWQocGFyYW1zKTtcbiAgICB0aGlzLl9hcHBseURlYnVnKHBhcmFtcyk7XG4gICAgdGhpcy5fYXBwbHlGaW5hbEJ1dHRvblRleHQocGFyYW1zKTtcbiAgICB0aGlzLl9hcHBseUhpZGVIZWFkZXIocGFyYW1zKTtcbiAgICB0aGlzLl9hcHBseUxvY2FsZShwYXJhbXMpO1xuICAgIHRoaXMuX2FwcGx5UGFyZW50VVJMKHBhcmFtcyk7XG4gICAgdGhpcy5fYXBwbHlSZWRpcmVjdFRvKHBhcmFtcyk7XG4gICAgdGhpcy5fYXBwbHlSZXF1ZXN0aW5nRW1haWwocGFyYW1zKTtcbiAgICB0aGlzLl9hcHBseVRlc3RNb2RlKHBhcmFtcyk7XG4gICAgdGhpcy5fYXBwbHlVeFZlcnNpb24ocGFyYW1zKTtcbiAgICB0aGlzLl9hcHBseVZlcnNpb24ocGFyYW1zKTtcbiAgICB0aGlzLl9hcHBseVdoaXRlTGFiZWxpbmcocGFyYW1zKTtcblxuICAgIHJldHVybiBwYXJhbXM7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyBhbmQgc2V0cyB0aGUgaUZyYW1lIGZyYW1lIHNyYy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3VwZGF0ZUZyYW1lVXJsKHVybCkge1xuICAgIGNvbnN0IGZyYW1lVVJMID0gbmV3IFVSTCh1cmwpO1xuICAgIGNvbnN0IGZyYW1lUGFyYW1zID0gdGhpcy5fZ2V0RnJhbWVQYXJhbXMoZnJhbWVVUkwpO1xuXG4gICAgZnJhbWVVUkwuc2VhcmNoID0gZnJhbWVQYXJhbXMudG9TdHJpbmcoKTtcblxuICAgIHRoaXMuX2lGcmFtZVVSTCA9IGZyYW1lVVJMO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIEhlbGxvU2lnbiBFbWJlZGRlZCBtYXJrdXAuXG4gICAqXG4gICAqIFdlIHdvdWxkIGxpa2UgdG8gaGF2ZSB1c2VkIEhUTUwgQ29udGVudCBUZW1wbGF0ZXMgb3JcbiAgICogUmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KCkgYnV0IHdlIGFyZSBjb25jZXJuZWRcbiAgICogYWJvdXQgYnJvd3NlciBzdXBwb3J0LlxuICAgKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfcmVuZGVyTWFya3VwKCkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGlmICh0aGlzLl9jb25maWcuY29udGFpbmVyKSB7XG4gICAgICBlbGVtLmlubmVySFRNTCA9IHNhZmVIdG1sYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiJHtzZXR0aW5ncy5jbGFzc05hbWVzLkJBU0V9XCI+XG4gICAgICAgICAgPGlmcmFtZSBjbGFzcz1cIiR7c2V0dGluZ3MuY2xhc3NOYW1lcy5JRlJBTUV9XCIgbmFtZT1cIiR7c2V0dGluZ3MuaWZyYW1lLk5BTUV9XCIgc3JjPVwiJHt0aGlzLl9pRnJhbWVVUkwuaHJlZn1cIiBzY3JvbGxpbmc9XCJub1wiPjwvaWZyYW1lPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uaW5uZXJIVE1MID0gc2FmZUh0bWxgXG4gICAgICAgIDxkaXYgY2xhc3M9XCIke3NldHRpbmdzLmNsYXNzTmFtZXMuQkFTRX0gJHtzZXR0aW5ncy5jbGFzc05hbWVzLkJBU0VfSU5fTU9EQUx9XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIiR7c2V0dGluZ3MuY2xhc3NOYW1lcy5NT0RBTF9TQ1JFRU59XCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIiR7c2V0dGluZ3MuY2xhc3NOYW1lcy5NT0RBTF9DT05URU5UfVwiPlxuICAgICAgYCArIChcbiAgICAgICAgdGhpcy5fY29uZmlnLmFsbG93Q2FuY2VsID8gc2FmZUh0bWxgXG4gICAgICAgICAgPGRpdiBjbGFzcz0ke3NldHRpbmdzLmNsYXNzTmFtZXMuTU9EQUxfQ0xPU0V9PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0ke3NldHRpbmdzLmNsYXNzTmFtZXMuTU9EQUxfQ0xPU0VfQlROfSByb2xlPVwiYnV0dG9uXCIgdGl0bGU9XCJDbG9zZSBzaWduYXR1cmUgcmVxdWVzdFwiPjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgIDogJydcbiAgICAgICkgKyBzYWZlSHRtbGBcbiAgICAgICAgICAgIDxpZnJhbWUgY2xhc3M9XCIke3NldHRpbmdzLmNsYXNzTmFtZXMuSUZSQU1FfVwiIG5hbWU9XCIke3NldHRpbmdzLmlmcmFtZS5OQU1FfVwiIHNyYz1cIiR7dGhpcy5faUZyYW1lVVJMLmhyZWZ9XCIgc2Nyb2xsaW5nPVwibm9cIj48L2lmcmFtZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtLmZpcnN0Q2hpbGQ7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyB0aGUgSGVsbG9TaWduIEVtYmVkZGVkIG1hcmt1cCBpbnRvIHRoZSBET00uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwZW5kTWFya3VwKCkge1xuICAgIHRoaXMuX2Jhc2VFbCA9IHRoaXMuX3JlbmRlck1hcmt1cCgpO1xuXG4gICAgLy8gTGlzdGVuIGZvciBjbGljayBldmVudHMgd2l0aGluIHRoZSBIZWxsb1NpZ25cbiAgICAvLyBFbWJlZGRlZCBET00gbWFya3VwLiBUaGVzZSB3aWxsIGJlIGRlbGVnYXRlZFxuICAgIC8vIGRlcGVuZGluZyBvbiB0aGUgc291cmNlIGVsZW1lbnQuXG4gICAgdGhpcy5fYmFzZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fb25FbWJlZGRlZENsaWNrKTtcblxuICAgIC8vIE9idGFpbiBlbGVtZW50IHJlZmVyZW5jZXMuXG4gICAgdGhpcy5faUZyYW1lRWwgPSB0aGlzLl9iYXNlRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzZXR0aW5ncy5jbGFzc05hbWVzLklGUkFNRSkuaXRlbSgwKTtcblxuICAgIC8vIEluc2VydCBIZWxsb1NpZ24gRW1iZWRkZWQgbWFya3VwIGludG8gdGhlIERPTS5cbiAgICBpZiAodGhpcy5fY29uZmlnLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29uZmlnLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLl9iYXNlRWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2Jhc2VFbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIEhlbGxvU2lnbiBFbWJlZGRlZCBtYXJrdXAgZnJvbSB0aGUgRE9NLlxuICAgKlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NsZWFyTWFya3VwKCkge1xuICAgIHRoaXMuX2Jhc2VFbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuX2Jhc2VFbCk7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGVkZWYge09iamVjdH0gSGVsbG9TaWduTWVzc2FnZVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gdHlwZVxuICAgKiBAcHJvcGVydHkge09iamVjdH0gW3BheWxvYWRdXG4gICAqL1xuXG4gIC8qKlxuICAgKiBQb3N0cyBhIGNyb3NzLW9yaWdpbiB3aW5kb3cgbWVzc2FnZSB0byB0aGUgSGVsbG9TaWduXG4gICAqIEVtYmVkZGVkIGlGcmFtZSBjb250ZW50IHdpbmRvdy5cbiAgICpcbiAgICogQHBhcmFtIHtIZWxsb1NpZ25NZXNzYWdlfSBtc2dcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZW5kTWVzc2FnZShtc2cpIHtcbiAgICBkZWJ1Zy5pbmZvKCdwb3N0aW5nIG1lc3NhZ2UnLCBtc2cpO1xuXG4gICAgY29uc3QgdGFyZ2V0T3JpZ2luID0gdGhpcy5faUZyYW1lVVJMLmhyZWY7XG4gICAgY29uc3QgdGFyZ2V0V2luZG93ID0gdGhpcy5faUZyYW1lRWwuY29udGVudFdpbmRvdztcblxuICAgIHRhcmdldFdpbmRvdy5wb3N0TWVzc2FnZShtc2csIHRhcmdldE9yaWdpbik7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBjYW5jZWwgcmVxdWVzdCBtZXNzYWdlIHRvIHRoZSBhcHAuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2VuZENhbmNlbFJlcXVlc3RNZXNzYWdlKCkge1xuICAgIGRlYnVnLmluZm8oJ3NlbmRpbmcgY2FuY2VsIHJlcXVlc3QgbWVzc2FnZScpO1xuXG4gICAgdGhpcy5fc2VuZE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogc2V0dGluZ3MubWVzc2FnZXMuVVNFUl9DQU5DRUxfUkVRVUVTVCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyB0aGUgY29uZmlndXJhdGlvbiBtZXNzYWdlIHRvIHRoZSBhcHAuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2VuZENvbmZpZ3VyYXRpb25NZXNzYWdlKCkge1xuICAgIGRlYnVnLmluZm8oJ3NlbmRpbmcgYXBwIGNvbmZpZ3VyYXRpb24gbWVzc2FnZScpO1xuXG4gICAgdGhpcy5fc2VuZE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogc2V0dGluZ3MubWVzc2FnZXMuQVBQX0NPTkZJR1VSRSxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgYWxsb3dDYW5jZWw6IHRoaXMuX2NvbmZpZy5hbGxvd0NhbmNlbCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgdGhlIGRvbWFpbiB2ZXJpZmljYXRpb24gcmVzcG9uc2UuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0b2tlblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NlbmREb21haW5WZXJpZmljYXRpb25NZXNzYWdlKHRva2VuKSB7XG4gICAgZGVidWcuaW5mbygnc2VuZGluZyBkb21haW4gdmVyaWZpY2F0aW9uIG1lc3NhZ2UnLCB0b2tlbik7XG5cbiAgICB0aGlzLl9zZW5kTWVzc2FnZSh7XG4gICAgICB0eXBlOiBzZXR0aW5ncy5tZXNzYWdlcy5BUFBfVkVSSUZZX0RPTUFJTl9SRVNQT05TRSxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgdG9rZW4sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIHRoZSBpbml0aWFsaXphdGlvbiBlcnJvciBtZXNzYWdlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NlbmRJbml0aWFsaXphdGlvbkVycm9yTWVzc2FnZSgpIHtcbiAgICBkZWJ1Zy5pbmZvKCdzZW5kaW5nIGluaXRpYWxpemF0aW9uIGVycm9yIG1lc3NhZ2UnKTtcblxuICAgIHRoaXMuX3NlbmRNZXNzYWdlKHtcbiAgICAgIHR5cGU6IHNldHRpbmdzLm1lc3NhZ2VzLkFQUF9FUlJPUixcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgbWVzc2FnZTogJ0FwcCBmYWlsZWQgdG8gaW5pdGlhbGl6ZSBiZWZvcmUgdGltZW91dCcsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyB0aGUgaW5pdGlhbGl6YXRpb24gdGltZW91dCB0aW1lci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jbGVhckluaXRUaW1lb3V0KCkge1xuICAgIGlmICh0aGlzLl9pbml0VGltZW91dCkge1xuICAgICAgZGVidWcuaW5mbygnY2xlYXJpbmcgaW5pdGlhbGl6YXRpb24gdGltZW91dCcpO1xuXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5faW5pdFRpbWVvdXQpO1xuXG4gICAgICB0aGlzLl9pbml0VGltZW91dCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgaW5pdGlhbGl6YXRpb24gdGltZW91dCB0aW1lci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zdGFydEluaXRUaW1lb3V0KCkge1xuICAgIGRlYnVnLmluZm8oJ3N0YXJ0aW5nIGluaXRpYWxpemF0aW9uIHRpbWVvdXQnKTtcblxuICAgIHRoaXMuX2NsZWFySW5pdFRpbWVvdXQoKTtcblxuICAgIHRoaXMuX2luaXRUaW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLl9vbkluaXRUaW1lb3V0LCB0aGlzLl9jb25maWcudGltZW91dCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHRoZSBpbml0aWFsaXphdGlvbiB0aW1lb3V0IHRpbWVyIGlmIHRoZSB3b3JrZmxvd1xuICAgKiBpcyBlbWJlZGRlZCBzaWduaW5nLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX21heWJlU3RhcnRJbml0VGltZW91dCgpIHtcbiAgICBpZiAodGhpcy5faUZyYW1lVVJMLmhyZWYuaW5jbHVkZXMoJ2VtYmVkZGVkU2lnbicpKSB7XG4gICAgICAvLyBTdGFydCB0aGUgaW5pdGlhbGl6YXRpb24gdGltZW91dCBiZWNhdXNlIHRoaXMgaXNcbiAgICAgIC8vIGVtYmVkZGVkIHNpZ25pbmcuXG4gICAgICB0aGlzLl9zdGFydEluaXRUaW1lb3V0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlcyB0aGUgdmlld3BvcnQgbWV0YSB0YWcgdG8gdXNlIG1heGltdW0tc2NhbGU9MSxcbiAgICogaWYgaXQgaXMgbm90IGFscmVhZHkgcHJlc2VudC4gVGhpcyBpcyBuZWVkZWQgdG8gcHJldmVudFxuICAgKiBicm93c2VycyBmcm9tIGF1dG9tYXRpY2FsbHkgem9vbWluZyBpbnRvIHRleHQgZmllbGRzLlxuICAgKiBUaGlzIHdpbGwgb25seSBiZSBhcHBsaWVkIGlmIHRoZXJlIGlzIGFuIGV4aXN0aW5nXG4gICAqIHZpZXdwb3J0IG1ldGEgdGFnIG9uIHRoZSBwYWdlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2Jsb2NrTmF0aXZlWm9vbSgpIHtcbiAgICBjb25zdCB2aWV3cG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT12aWV3cG9ydF0nKTtcblxuICAgIGlmICh2aWV3cG9ydCkge1xuICAgICAgY29uc3QgY29udGVudCA9IHZpZXdwb3J0LmdldEF0dHJpYnV0ZSgnY29udGVudCcpIHx8ICcnO1xuICAgICAgY29uc3QgbmV3Q29udGVudFBhaXJzID0gY29udGVudC5zcGxpdCgvLFxccz8vKTtcblxuICAgICAgLy8gUHJldmVudCBicm93c2VycyBmcm9tIGF1dG9tYXRpY2FsbHkgem9vbWluZyBpbnRvXG4gICAgICAvLyB0ZXh0IGZpZWxkcy5cbiAgICAgIGlmICghY29udGVudC5pbmNsdWRlcygnbWF4aW11bS1zY2FsZT0xJykpIHtcbiAgICAgICAgbmV3Q29udGVudFBhaXJzLnB1c2goJ21heGltdW0tc2NhbGU9MScpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdDb250ZW50ID0gbmV3Q29udGVudFBhaXJzLmpvaW4oJywnKTtcbiAgICAgIGlmIChuZXdDb250ZW50ICE9PSB2aWV3cG9ydC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKSkge1xuICAgICAgICB2aWV3cG9ydC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCBuZXdDb250ZW50KTtcbiAgICAgICAgdGhpcy5fYmFja3VwVmlld3BvcnRDb250ZW50ID0gY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVzdG9yZXMgdGhlIHZpZXdwb3J0IHVzaW5nIHRoZSBvcmlnaW5hbCB2YWx1ZSBvZiB0aGVcbiAgICogaW5pdGlhbCB2aWV3cG9ydCBtZXRhIHRhZy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9yZXN0b3JlVmlld3BvcnQoKSB7XG4gICAgaWYgKHRoaXMuX2JhY2t1cFZpZXdwb3J0Q29udGVudCkge1xuICAgICAgY29uc3Qgdmlld3BvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9dmlld3BvcnRdJyk7XG5cbiAgICAgIHZpZXdwb3J0LnNldEF0dHJpYnV0ZSgnY29udGVudCcsIHRoaXMuX2JhY2t1cFZpZXdwb3J0Q29udGVudCk7XG5cbiAgICAgIHRoaXMuX2JhY2t1cFZpZXdwb3J0Q29udGVudCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBldmVudCBIZWxsb1NpZ24jZXJyb3JcbiAgICogQHR5cGUge09iamVjdH1cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHNpZ25hdHVyZUlkXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjb2RlXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgYXBwIGVuY291bnRlcmVkIGFuIGVycm9yLlxuICAgKlxuICAgKiBAZW1pdHMgSGVsbG9TaWduI2Vycm9yXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXlsb2FkXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwRGlkRXJyb3IocGF5bG9hZCkge1xuICAgIGRlYnVnLmVycm9yKCdhcHAgZW5jb3VudGVyZWQgYW4gZXJyb3Igd2l0aCBjb2RlOicsIHBheWxvYWQuY29kZSk7XG5cbiAgICB0aGlzLmVtaXQoc2V0dGluZ3MuZXZlbnRzLkVSUk9SLCBwYXlsb2FkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZXZlbnQgSGVsbG9TaWduI3JlYWR5XG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzaWduYXR1cmVJZFxuICAgKi9cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGFwcCB3YXMgaW5pdGlhbGl6ZWQuXG4gICAqXG4gICAqIEBlbWl0cyBIZWxsb1NpZ24jcmVhZHlcbiAgICogQHBhcmFtIHtPYmplY3R9IHBheWxvYWRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9hcHBEaWRJbml0aWFsaXplKHBheWxvYWQpIHtcbiAgICBkZWJ1Zy5pbmZvKCdhcHAgd2FzIGluaXRpYWxpemVkJyk7XG5cbiAgICB0aGlzLl9pc1JlYWR5ID0gdHJ1ZTtcblxuICAgIHRoaXMuX3NlbmRDb25maWd1cmF0aW9uTWVzc2FnZSgpO1xuICAgIHRoaXMuX2NsZWFySW5pdFRpbWVvdXQoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCB0aGlzLl9vbkJlZm9yZVVubG9hZCk7XG5cbiAgICB0aGlzLmVtaXQoc2V0dGluZ3MuZXZlbnRzLlJFQURZLCBwYXlsb2FkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgYXBwIHJlcXVlc3RlZCBkb21haW4gdmVyaWZpY2F0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGF5bG9hZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF5bG9hZC50b2tlblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FwcERpZFJlcXVlc3REb21haW5WZXJpZmljYXRpb24oeyB0b2tlbiB9KSB7XG4gICAgZGVidWcuaW5mbygnYXBwIHJlcXVlc3RlZCBkb21haW4gdmVyaWZpY2F0aW9uJywgdG9rZW4pO1xuXG4gICAgdGhpcy5fc2VuZERvbWFpblZlcmlmaWNhdGlvbk1lc3NhZ2UodG9rZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBldmVudCBIZWxsb1NpZ24jbWVzc2FnZVxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gdHlwZVxuICAgKiBAcHJvcGVydHkgez9PYmplY3R9IHBheWxvYWRcbiAgICovXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIEhlbGxvU2lnbiBFbWJlZGRlZCByZWNlaXZlcyBhIGNyb3NzLW9yaWdpblxuICAgKiB3aW5kb3cgbWVzc2FnZS5cbiAgICpcbiAgICogQGVtaXRzIEhlbGxvU2lnbiNtZXNzYWdlXG4gICAqIEBwYXJhbSB7TWVzc2FnZUV2ZW50fSBldnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9hcHBEaWRTZW5kTWVzc2FnZSh7IGRhdGEsIG9yaWdpbiB9KSB7XG4gICAgZGVidWcuaW5mbygncmVjZWl2ZWQgbWVzc2FnZScsIGRhdGEsIG9yaWdpbik7XG5cbiAgICB0aGlzLmVtaXQoc2V0dGluZ3MuZXZlbnRzLk1FU1NBR0UsIGRhdGEpO1xuXG4gICAgdGhpcy5fZGVsZWdhdGVNZXNzYWdlKGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBldmVudCBIZWxsb1NpZ24jY2FuY2VsXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdXNlciBjYW5jZWxlZCB0aGUgcmVxdWVzdC5cbiAgICpcbiAgICogQGVtaXRzIEhlbGxvU2lnbiNjYW5jZWxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91c2VyRGlkQ2FuY2VsUmVxdWVzdCgpIHtcbiAgICBkZWJ1Zy5pbmZvKCd1c2VyIGNhbmNlbGVkIHRoZSBzaWduYXR1cmUgcmVxdWVzdCcpO1xuXG4gICAgdGhpcy5lbWl0KHNldHRpbmdzLmV2ZW50cy5DQU5DRUwpO1xuXG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBldmVudCBIZWxsb1NpZ24jY3JlYXRlVGVtcGxhdGVcbiAgICogQHR5cGUge09iamVjdH1cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHRpdGxlXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXNzYWdlXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IHNpZ25lclJvbGVzXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBzaWduYXR1cmVSZXF1ZXN0SW5mb1xuICAgKi9cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHVzZXIgY3JlYXRlZCB0aGUgdGVtcGxhdGUuXG4gICAqXG4gICAqIEBlbWl0cyBIZWxsb1NpZ24jY3JlYXRlVGVtcGxhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IHBheWxvYWRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91c2VyRGlkQ3JlYXRlVGVtcGxhdGUocGF5bG9hZCkge1xuICAgIGRlYnVnLmluZm8oJ3VzZXIgY3JlYXRlZCB0aGUgc2lnbmF0dXJlIHJlcXVlc3QgdGVtcGxhdGUnKTtcblxuICAgIHRoaXMuZW1pdChzZXR0aW5ncy5ldmVudHMuQ1JFQVRFX1RFTVBMQVRFLCBwYXlsb2FkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZXZlbnQgSGVsbG9TaWduI2RlY2xpbmVcbiAgICogQHR5cGUge09iamVjdH1cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHNpZ25hdHVyZUlkXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSByZWFzb25cbiAgICovXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSB1c2VyIGRlY2xpbmVkIHRoZSByZXF1ZXN0LlxuICAgKlxuICAgKiBAZW1pdHMgSGVsbG9TaWduI2RlY2xpbmVcbiAgICogQHBhcmFtIHtPYmplY3R9IHBheWxvYWRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91c2VyRGlkRGVjbGluZVJlcXVlc3QocGF5bG9hZCkge1xuICAgIGRlYnVnLmluZm8oJ3VzZXIgZGVjbGluZWQgdGhlIHNpZ25hdHVyZSByZXF1ZXN0Jyk7XG5cbiAgICB0aGlzLmVtaXQoc2V0dGluZ3MuZXZlbnRzLkRFQ0xJTkUsIHBheWxvYWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBldmVudCBIZWxsb1NpZ24jZmluaXNoXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdXNlciBmaW5pc2hlZCB0aGUgcmVxdWVzdC5cbiAgICpcbiAgICogQGVtaXRzIEhlbGxvU2lnbiNmaW5pc2hcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91c2VyRGlkRmluaXNoUmVxdWVzdCgpIHtcbiAgICBkZWJ1Zy5pbmZvKCd1c2VyIGZpbmlzaGVkIHRoZSBzaWduYXR1cmUgcmVxdWVzdCcpO1xuXG4gICAgdGhpcy5lbWl0KHNldHRpbmdzLmV2ZW50cy5GSU5JU0gpO1xuXG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBldmVudCBIZWxsb1NpZ24jcmVhc3NpZ25cbiAgICogQHR5cGUge09iamVjdH1cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHNpZ25hdHVyZUlkXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbWFpbFxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gcmVhc29uXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdXNlciByZWFzc2lnbmVkIHRoZSByZXF1ZXN0LlxuICAgKlxuICAgKiBAZW1pdHMgSGVsbG9TaWduI3JlYXNzaWduXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXlsb2FkXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdXNlckRpZFJlYXNzaWduUmVxdWVzdChwYXlsb2FkKSB7XG4gICAgZGVidWcuaW5mbygndXNlciByZWFzc2lnbmVkIHRoZSBzaWduYXR1cmUgcmVxdWVzdCB3aXRoIHJlYXNvbjonLCBwYXlsb2FkLnJlYXNvbik7XG5cbiAgICB0aGlzLmVtaXQoc2V0dGluZ3MuZXZlbnRzLlJFQVNTSUdOLCBwYXlsb2FkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZXZlbnQgSGVsbG9TaWduI3NlbmRcbiAgICogQHR5cGUge09iamVjdH1cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHNpZ25hdHVyZVJlcXVlc3RJZFxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gc2lnbmF0dXJlSWRcbiAgICovXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSB1c2VyIHNlbnQgdGhlIHJlcXVlc3QuXG4gICAqXG4gICAqIEBlbWl0cyBIZWxsb1NpZ24jc2VuZFxuICAgKiBAcGFyYW0ge09iamVjdH0gcGF5bG9hZFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3VzZXJEaWRTZW5kUmVxdWVzdChwYXlsb2FkKSB7XG4gICAgZGVidWcuaW5mbygndXNlciBzZW50IHRoZSBzaWduYXR1cmUgcmVxdWVzdCcpO1xuXG4gICAgdGhpcy5faXNTZW50T3JTaWduZWQgPSB0cnVlO1xuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIHRoaXMuX29uQmVmb3JlVW5sb2FkKTtcblxuICAgIHRoaXMuZW1pdChzZXR0aW5ncy5ldmVudHMuU0VORCwgcGF5bG9hZCk7XG4gIH1cblxuICAvKipcbiAgICogQGV2ZW50IEhlbGxvU2lnbiNzaWduXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzaWduYXR1cmVJZFxuICAgKi9cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHVzZXIgc2lnbmVkIHRoZSByZXF1ZXN0LlxuICAgKlxuICAgKiBAZW1pdHMgSGVsbG9TaWduI3NpZ25cbiAgICogQHBhcmFtIHtPYmplY3R9IHBheWxvYWRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91c2VyRGlkU2lnblJlcXVlc3QocGF5bG9hZCkge1xuICAgIGRlYnVnLmluZm8oJ3VzZXIgc2lnbmVkIHRoZSBzaWduYXR1cmUgcmVxdWVzdCcpO1xuXG4gICAgdGhpcy5faXNTZW50T3JTaWduZWQgPSB0cnVlO1xuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIHRoaXMuX29uQmVmb3JlVW5sb2FkKTtcblxuICAgIHRoaXMuZW1pdChzZXR0aW5ncy5ldmVudHMuU0lHTiwgcGF5bG9hZCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIGFueXRoaW5nIHdpdGhpbiB0aGVcbiAgICogSGVsbG9TaWduIEVtYmVkZGVkIGJvdW5kYXJ5LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vbkVtYmVkZGVkQ2xpY2soZXZ0KSB7XG4gICAgY29uc3QgZWxlbSA9IGV2dC50YXJnZXQ7XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgZWxlbWVudCB0aGF0IHdhcyBjbGlja2VkIGlzIHRoZSBjbG9zZVxuICAgIC8vIGJ1dHRvbi5cbiAgICBpZiAoZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoc2V0dGluZ3MuY2xhc3NOYW1lcy5NT0RBTF9DTE9TRV9CVE4pKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgLy8gSWYgdGhlIGFwcCBpcyByZWFkeSBidXQgaGFzIG5vdCB5ZXQgYmVlbiBzZW50IG9yXG4gICAgICAvLyBzaWduZWQsIGNsb3NlIHZpYSB0aGUgYXBwLiBPdGhlcndpc2UsIHdlIGZvcmNlXG4gICAgICAvLyBjbG9zZSB3aXRob3V0IG5vdGlmeWluZyB0aGUgYXBwLiBUaGlzIGlzIGJlY2F1c2VcbiAgICAgIC8vIHRoZSBjbG9zZSBidXR0b24gY2FuIHJlcHJlc2VudCBhIFwiY2FuY2VsXCIgb3IgYVxuICAgICAgLy8gXCJjbG9zZVwiIGRlcGRlbmRpbmcgb24gdGhlIHN0YXRlIG9mIHRoZSByZXF1ZXN0LFxuICAgICAgLy8gYnV0IEVtYmVkZGVkIGlzIG5vdCBhd2FyZSBvZiB0aGlzIHN0YXRlLiBUaGVyZWZvcmVcbiAgICAgIC8vIHdlIHNlbmQgdGhlIGNsb3NlIHJlcXVlc3QgZG93biB0byB0aGUgYXBwIHNvIHRoYXRcbiAgICAgIC8vIHRoZSBhcHAgY2FuIGRldGVybWluZSB0aGUgcHJvcGVyIGNsb3NlIHR5cGUuXG4gICAgICBpZiAodGhpcy5faXNSZWFkeSAmJiAhdGhpcy5faXNTZW50T3JTaWduZWQpIHtcbiAgICAgICAgdGhpcy5fc2VuZENhbmNlbFJlcXVlc3RNZXNzYWdlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBpbml0aWFsaXphdGlvbiB0aW1lb3V0IHRpbWVyIGNvbXBsZXRlcy5cbiAgICogU2VuZHMgYW4gZXJyb3IgbWVzc2FnZSB0byB0aGUgYXBwIGFuZCBjbG9zZXMgSGVsbG9TaWduXG4gICAqIEVtYmVkZGVkLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX29uSW5pdFRpbWVvdXQoKSB7XG4gICAgZGVidWcuZXJyb3IoJ2FwcCBmYWlsZWQgdG8gaW5pdGlhbGl6ZSBiZWZvcmUgdGltZW91dCcpO1xuXG4gICAgLy8gRGlzcGxheSBlcnJvciB0byB0aGUgdXNlciBpbnN0ZWFkIG9mIGp1c3QgY2xvc2luZyB0aGVcbiAgICAvLyBzaWduYXR1cmUgcmVxdWVzdCB3aW5kb3cuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG4gICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nIHdoZW4gcHJlcGFyaW5nIHlvdXIgc2lnbmF0dXJlIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XG5cbiAgICB0aGlzLl9zZW5kSW5pdGlhbGl6YXRpb25FcnJvck1lc3NhZ2UoKTtcbiAgICB0aGlzLl9jbGVhckluaXRUaW1lb3V0KCk7XG5cbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHVzZXIgbmF2aWdhdGVzIGF3YXkgZnJvbSB0aGUgcGFnZSBpblxuICAgKiBzb21lIHdheS4gQWx0aG91Z2ggbW9kZXJuIGJyb3dzZXJzIHdpbGwgbGlrZWx5IGJsb2NrXG4gICAqIHRoaXMgbWVzc2FnZSwgdGhlIGJyb3dzZXIgbWF5IHN0aWxsIG5hdGl2ZWx5IGNvbmZpcm1cbiAgICogd2l0aCB0aGUgdXNlciBpZiB0aGV5IHdhbnQgdG8gbGVhdmUgb3Igc3RheSBvbiB0aGVcbiAgICogcGFnZS5cbiAgICpcbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvYmVmb3JldW5sb2FkXG4gICAqIEBwYXJhbSB7QmVmb3JlVW5sb2FkRXZlbnR9IGV2dFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX29uQmVmb3JlVW5sb2FkKGV2dCkge1xuICAgIGlmICh0aGlzLl9pc1JlYWR5KSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzLCBuby1hbGVydCAqL1xuICAgICAgaWYgKCFjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2xvc2UgdGhpcyBzaWduYXR1cmUgcmVxdWVzdD8gWW91IHdpbGwgbG9zZSB5b3VyIGNoYW5nZXMuJykpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gQ2hyb21lIHJlcXVpcmVzIHJldHVyblZhbHVlIHRvIGJlIHNldC5cbiAgICAgICAgZXZ0LnJldHVyblZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgbWVzc2FnZSBpcyByZWNlaXZlZCBieSB0aGUgd2luZG93LlxuICAgKiBWYWxpZGF0ZXMgdGhlIG1lc3NhZ2Ugb3JpZ2luIGFuZCBkZWxlZ2F0ZXMgdG8gdGhlXG4gICAqIGFwcHJvcHJpYXRlIG1ldGhvZCBiYXNlZCBvbiB0aGUgbWVzc2FnZSB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0ge01lc3NhZ2VFdmVudH0gZXZ0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25NZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBzdHJpcHBlZE9yaWdpbiA9IG1lc3NhZ2Uub3JpZ2luLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG5cbiAgICBpZiAoc3RyaXBwZWRPcmlnaW4gPT09IHRoaXMuX2lGcmFtZVVSTC5vcmlnaW4pIHtcbiAgICAgIGlmICh0eXBlb2YgbWVzc2FnZS5kYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICB0aGlzLl9hcHBEaWRTZW5kTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSBtZXNzYWdlIGlzIHJlY2VpdmVkIGJ5IHRoZSB3aW5kb3cuXG4gICAqIFZhbGlkYXRlcyB0aGUgbWVzc2FnZSBvcmlnaW4gYW5kIGRlbGVnYXRlcyB0byB0aGVcbiAgICogYXBwcm9wcmlhdGUgbWV0aG9kIGJhc2VkIG9uIHRoZSBtZXNzYWdlIHR5cGUuXG4gICAqXG4gICAqIEBwYXJhbSB7SGVsbG9TaWduTWVzc2FnZX0gbXNnXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZGVsZWdhdGVNZXNzYWdlKHsgdHlwZSwgcGF5bG9hZCB9KSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIHNldHRpbmdzLm1lc3NhZ2VzLkFQUF9FUlJPUjpcbiAgICAgICAgdGhpcy5fYXBwRGlkRXJyb3IocGF5bG9hZCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzZXR0aW5ncy5tZXNzYWdlcy5BUFBfSU5JVElBTElaRTpcbiAgICAgICAgdGhpcy5fYXBwRGlkSW5pdGlhbGl6ZShwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHNldHRpbmdzLm1lc3NhZ2VzLkFQUF9WRVJJRllfRE9NQUlOX1JFUVVFU1Q6XG4gICAgICAgIHRoaXMuX2FwcERpZFJlcXVlc3REb21haW5WZXJpZmljYXRpb24ocGF5bG9hZCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzZXR0aW5ncy5tZXNzYWdlcy5VU0VSX0NBTkNFTF9SRVFVRVNUOlxuICAgICAgICB0aGlzLl91c2VyRGlkQ2FuY2VsUmVxdWVzdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2V0dGluZ3MubWVzc2FnZXMuVVNFUl9DUkVBVEVfVEVNUExBVEU6XG4gICAgICAgIHRoaXMuX3VzZXJEaWRDcmVhdGVUZW1wbGF0ZShwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHNldHRpbmdzLm1lc3NhZ2VzLlVTRVJfREVDTElORV9SRVFVRVNUOlxuICAgICAgICB0aGlzLl91c2VyRGlkRGVjbGluZVJlcXVlc3QocGF5bG9hZCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzZXR0aW5ncy5tZXNzYWdlcy5VU0VSX0ZJTklTSF9SRVFVRVNUOlxuICAgICAgICB0aGlzLl91c2VyRGlkRmluaXNoUmVxdWVzdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2V0dGluZ3MubWVzc2FnZXMuVVNFUl9SRUFTU0lHTl9SRVFVRVNUOlxuICAgICAgICB0aGlzLl91c2VyRGlkUmVhc3NpZ25SZXF1ZXN0KHBheWxvYWQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2V0dGluZ3MubWVzc2FnZXMuVVNFUl9TRU5EX1JFUVVFU1Q6XG4gICAgICAgIHRoaXMuX3VzZXJEaWRTZW5kUmVxdWVzdChwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHNldHRpbmdzLm1lc3NhZ2VzLlVTRVJfU0lHTl9SRVFVRVNUOlxuICAgICAgICB0aGlzLl91c2VyRGlkU2lnblJlcXVlc3QocGF5bG9hZCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gVW5oYW5kbGVkIG1lc3NhZ2UuXG4gICAgICAgIGRlYnVnLndhcm4oJ3VuaGFuZGxlZCBjcm9zcy1vcmlnaW4gd2luZG93IG1lc3NhZ2UnLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGV2ZW50IEhlbGxvU2lnbiNvcGVuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB1cmxcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGlGcmFtZVVybFxuICAgKi9cblxuICAvKipcbiAgICogQHR5cGVkZWYge09iamVjdH0gSGVsbG9TaWduT3B0aW9uc1xuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IFthbGxvd0NhbmNlbD10cnVlXVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gW2NsaWVudElkXVxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBbY29udGFpbmVyXVxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IFtkZWJ1Zz1mYWxzZV1cbiAgICogQHByb3BlcnR5IHtib29sZWFufSBbaGlkZUhlYWRlcj1mYWxzZV1cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IFtsb2NhbGU9XCJlbl9VU1wiXVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gW3JlZGlyZWN0VG9dXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbcmVxdWVzdGluZ0VtYWlsXVxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IFtza2lwRG9tYWluVmVyaWZpY2F0aW9uPWZhbHNlXVxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IFt0ZXN0TW9kZT1mYWxzZV1cbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IFt0aW1lb3V0PTMwMDAwXVxuICAgKiBAcHJvcGVydHkge09iamVjdH0gW3doaXRlTGFiZWxpbmddXG4gICAqL1xuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgdXJsIGluIEhlbGxvU2lnbiBFbWJlZGRlZC5cbiAgICpcbiAgICogQGVtaXRzIEhlbGxvU2lnbiNvcGVuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtIZWxsb1NpZ25PcHRpb25zfSBbb3B0cz17fV1cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgb3Blbih1cmwsIG9wdHMgPSB7fSkge1xuICAgIGRlYnVnLmluZm8oJ29wZW4oKScsIHVybCwgb3B0cyk7XG5cbiAgICAvLyBDbG9zZSBpZiBlbWJlZGRlZCBpcyBhbHJlYWR5IG9wZW4uXG4gICAgaWYgKHRoaXMuX2lzT3Blbikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgIC4uLmRlZmF1bHRzLFxuICAgICAgLi4udGhpcy5fYmFzZUNvbmZpZyxcbiAgICAgIC4uLm9wdHMsXG4gICAgfTtcblxuICAgIC8vIENoZWNrIGlmIGNvbnRhaW5lciBpcyB2YWxpZC5cbiAgICBpZiAodGhpcy5fY29uZmlnLmNvbnRhaW5lcikge1xuICAgICAgaWYgKCEodGhpcy5fY29uZmlnLmNvbnRhaW5lciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImNvbnRhaW5lclwiIG11c3QgYmUgYW4gZWxlbWVudCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3VwZGF0ZUZyYW1lVXJsKHVybCk7XG4gICAgdGhpcy5fYXBwZW5kTWFya3VwKCk7XG4gICAgdGhpcy5fbWF5YmVTdGFydEluaXRUaW1lb3V0KCk7XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmFsbG93Vmlld3BvcnRPdmVycmlkZSkge1xuICAgICAgdGhpcy5fYmxvY2tOYXRpdmVab29tKCk7XG4gICAgfVxuXG4gICAgdGhpcy5faXNPcGVuID0gdHJ1ZTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5fb25NZXNzYWdlKTtcblxuICAgIHRoaXMuZW1pdChzZXR0aW5ncy5ldmVudHMuT1BFTiwge1xuICAgICAgdXJsOiB0aGlzLl9pRnJhbWVVUkwuaHJlZixcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZXZlbnQgSGVsbG9TaWduI2Nsb3NlXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIEhlbGxvU2lnbiBFbWJlZGVkIHdpbmRvdy5cbiAgICpcbiAgICogQGVtaXRzIEhlbGxvU2lnbiNjbG9zZVxuICAgKiBAcHVibGljXG4gICAqL1xuICBjbG9zZSgpIHtcbiAgICBkZWJ1Zy5pbmZvKCdjbG9zZSgpJyk7XG5cbiAgICAvLyBJdCdzIGFscmVhZHkgY2xvc2VkIVxuICAgIGlmICghdGhpcy5faXNPcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fY2xlYXJJbml0VGltZW91dCgpO1xuICAgIHRoaXMuX2NsZWFyTWFya3VwKCk7XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmFsbG93Vmlld3BvcnRPdmVycmlkZSkge1xuICAgICAgdGhpcy5fcmVzdG9yZVZpZXdwb3J0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5fYmFzZUVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fb25FbWJlZGRlZENsaWNrKTtcblxuICAgIHRoaXMuX2NvbmZpZyA9IG51bGw7XG4gICAgdGhpcy5fYmFzZUVsID0gbnVsbDtcbiAgICB0aGlzLl9pRnJhbWVFbCA9IG51bGw7XG4gICAgdGhpcy5faUZyYW1lVVJMID0gbnVsbDtcbiAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLl9pc1JlYWR5ID0gZmFsc2U7XG4gICAgdGhpcy5faXNTZW50T3JTaWduZWQgPSBmYWxzZTtcblxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5fb25NZXNzYWdlKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgdGhpcy5fb25CZWZvcmVVbmxvYWQpO1xuXG4gICAgdGhpcy5lbWl0KHNldHRpbmdzLmV2ZW50cy5DTE9TRSk7XG4gIH1cblxuICAvKipcbiAgICogT3ZlcnJpZGVzIHRpbnktZW1pdHRlcidzIFwiZW1pdFwiIG1ldGhvZC5cbiAgICpcbiAgICogQHNlZSBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS90aW55LWVtaXR0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHthbnl9IFtkYXRhXVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIGVtaXQoLi4uYXJncykge1xuICAgIGRlYnVnLmluZm8oJ2VtaXQoKScsIC4uLmFyZ3MpO1xuXG4gICAgc3VwZXIuZW1pdCguLi5hcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7P0hUTUxFbGVtZW50fVxuICAgKiBAcHVibGljXG4gICAqL1xuICBnZXQgZWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmFzZUVsO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHs/SFRNTEVsZW1lbnR9XG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGdldCBpRnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lGcmFtZUVsO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHVibGljXG4gICAqL1xuICBnZXQgaXNPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLl9pc09wZW47XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGdldCBpc1JlYWR5KCkge1xuICAgIHJldHVybiB0aGlzLl9pc1JlYWR5O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlbGxvU2lnbjtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2VtYmVkZGVkLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZW1iZWRkZWQuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZW1iZWRkZWQuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qKlxuICogSGVsbG9TaWduIEVtYmVkZGVkIGNsYXNzIG5hbWVzLlxuICpcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKiBAcmVhZG9ubHlcbiAqL1xuY29uc3QgY2xhc3NOYW1lcyA9IHtcbiAgQkFTRTogJ3gtaGVsbG9zaWduLWVtYmVkZGVkJyxcbiAgQkFTRV9JTl9NT0RBTDogJ3gtaGVsbG9zaWduLWVtYmVkZGVkLS1pbi1tb2RhbCcsXG4gIElGUkFNRTogJ3gtaGVsbG9zaWduLWVtYmVkZGVkX19pZnJhbWUnLFxuICBNT0RBTF9DTE9TRTogJ3gtaGVsbG9zaWduLWVtYmVkZGVkX19tb2RhbC1jbG9zZScsXG4gIE1PREFMX0NMT1NFX0JUTjogJ3gtaGVsbG9zaWduLWVtYmVkZGVkX19tb2RhbC1jbG9zZS1idXR0b24nLFxuICBNT0RBTF9DT05URU5UOiAneC1oZWxsb3NpZ24tZW1iZWRkZWRfX21vZGFsLWNvbnRlbnQnLFxuICBNT0RBTF9TQ1JFRU46ICd4LWhlbGxvc2lnbi1lbWJlZGRlZF9fbW9kYWwtc2NyZWVuJyxcbn07XG5cbi8qKlxuICogSGVsbG9TaWduIEVtYmVkZGVkIGV2ZW50cy5cbiAqXG4gKiBAZW51bSB7c3RyaW5nfVxuICogQHJlYWRvbmx5XG4gKi9cbmNvbnN0IGV2ZW50cyA9IHtcbiAgRVJST1I6ICdlcnJvcicsXG4gIFNFTkQ6ICdzZW5kJyxcbiAgQ0FOQ0VMOiAnY2FuY2VsJyxcbiAgQ0xPU0U6ICdjbG9zZScsXG4gIENSRUFURV9URU1QTEFURTogJ2NyZWF0ZVRlbXBsYXRlJyxcbiAgREVDTElORTogJ2RlY2xpbmUnLFxuICBGSU5JU0g6ICdmaW5pc2gnLFxuICBNRVNTQUdFOiAnbWVzc2FnZScsXG4gIE9QRU46ICdvcGVuJyxcbiAgUkVBRFk6ICdyZWFkeScsXG4gIFJFQVNTSUdOOiAncmVhc3NpZ24nLFxuICBTSUdOOiAnc2lnbicsXG59O1xuXG4vKipcbiAqIEhlbGxvU2lnbiBFbWJlZGRlZCBpRnJhbWUgcHJvcGVydGllcy5cbiAqXG4gKiBAZW51bSB7c3RyaW5nfVxuICogQHJlYWRvbmx5XG4gKi9cbmNvbnN0IGlmcmFtZSA9IHtcbiAgTkFNRTogJ3gtaGVsbG9zaWduLWVtYmVkZGVkJyxcbn07XG5cbi8qKlxuICogSGVsbG9TaWduIEVtYmVkZGVkIHN1cHBvcnRlZCBsb2NhbGVzLlxuICpcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKiBAcmVhZG9ubHlcbiAqL1xuY29uc3QgbG9jYWxlcyA9IHtcbiAgQ1NfQ1o6ICdjcy1DWicsIC8vIEN6ZWNoIChDemVjaCBSZXB1YmxpYylcbiAgREFfREs6ICdkYS1ESycsIC8vIERhbmlzaCAoRGVubWFyaylcbiAgREVfREU6ICdkZS1ERScsIC8vIEdlcm1hbiAoR2VybWFueSlcbiAgRU5fR0I6ICdlbi1HQicsIC8vIEVuZ2xpc2ggKEdyZWF0IEJyaXRhaW4pXG4gIEVOX1VTOiAnZW4tVVMnLCAvLyBFbmdsaXNoIChVbml0ZWQgU3RhdGVzKVxuICBFU19MQTogJ2VzLUxBJywgLy8gU3BhbmlzaCAoTGF0aW4gQW1lcmljYSlcbiAgRVNfRVM6ICdlcy1FUycsIC8vIFNwYW5pc2ggKFNwYWluKVxuICBGUl9GUjogJ2ZyLUZSJywgLy8gRnJlbmNoIChGcmFuY2UpXG4gIElEX0lEOiAnaWQtSUQnLCAvLyBJbmRvbmVzaWFuIChJbmRvbmVzaWEpXG4gIElUX0lUOiAnaXQtSVQnLCAvLyBJdGFsaWFuIChJdGFseSlcbiAgSkFfSlA6ICdqYS1KUCcsIC8vIEphcGFuZXNlIChKYXBhbilcbiAgS09fS1I6ICdrby1LUicsIC8vIEtvcmVhbiAoS29yZWEpXG4gIE1TX01ZOiAnbXMtTVknLCAvLyBNYWxheXNpYW4gKE1hbGF5c2lhKVxuICBOQl9OTzogJ25iLU5PJywgLy8gTm9yd2VnaWFuIChOb3J3YXkpXG4gIE5MX05MOiAnbmwtTkwnLCAvLyBEdXRjaCAoTmV0aGVybGFuZHMpXG4gIFBMX1BMOiAncGwtUEwnLCAvLyBQb2xpc2ggKFBvbGFuZClcbiAgUFRfQlI6ICdwdC1CUicsIC8vIFBvcnR1Z3Vlc2UgKEJyYXppbClcbiAgUlVfUlU6ICdydS1SVScsIC8vIFJ1c3NpYW4gKFJ1c3NpYSlcbiAgU1ZfU0U6ICdzdi1TRScsIC8vIFN3ZWRpc2ggKFN3ZWRlbilcbiAgVEhfVEg6ICd0aC1USCcsIC8vIFRoYWkgKFRoYWlsYW5kKVxuICBVS19VQTogJ3VrLVVBJywgLy8gVWtyYWluaWFuIChVa3JhaW5lKVxuICBaSF9DTjogJ3poLUNOJywgLy8gQ2hpbmVzZSAoU2ltcGxpZmllZCkgKENoaW5hKVxuICBaSF9UVzogJ3poLVRXJywgLy8gQ2hpbmVzZSAoVGFpd2FuKVxuXG4gIC8vIE5vIGxvbmdlciBzdXBwb3J0ZWQsIHVzZSBlcy1MQSBpbnN0ZWFkLlxuICAvLyBFU19NWDogJ2VzLU1YJywgLy8gU3BhbmlzaCAoTWV4aWNvKVxufTtcblxuLyoqXG4gKiBIZWxsb1NpZ24gRW1iZWRkZWQgY3Jvc3Mtb3JpZ2luIHdpbmRvdyBtZXNzYWdlcy5cbiAqXG4gKiBAZW51bSB7c3RyaW5nfVxuICogQHJlYWRvbmx5XG4gKi9cbmNvbnN0IG1lc3NhZ2VzID0ge1xuICBBUFBfQ09ORklHVVJFOiAnaGVsbG9zaWduOmNvbmZpZ3VyZScsXG4gIEFQUF9FUlJPUjogJ2hlbGxvc2lnbjplcnJvcicsXG4gIEFQUF9JTklUSUFMSVpFOiAnaGVsbG9zaWduOmluaXRpYWxpemUnLFxuICBBUFBfVkVSSUZZX0RPTUFJTl9SRVFVRVNUOiAnaGVsbG9zaWduOnZlcmlmeURvbWFpblJlcXVlc3QnLFxuICBBUFBfVkVSSUZZX0RPTUFJTl9SRVNQT05TRTogJ2hlbGxvc2lnbjp2ZXJpZnlEb21haW5SZXNwb25zZScsXG4gIFVTRVJfQ0FOQ0VMX1JFUVVFU1Q6ICdoZWxsb3NpZ246dXNlckNhbmNlbFJlcXVlc3QnLFxuICBVU0VSX0NSRUFURV9URU1QTEFURTogJ2hlbGxvc2lnbjp1c2VyQ3JlYXRlVGVtcGxhdGUnLFxuICBVU0VSX0RFQ0xJTkVfUkVRVUVTVDogJ2hlbGxvc2lnbjp1c2VyRGVjbGluZVJlcXVlc3QnLFxuICBVU0VSX0ZJTklTSF9SRVFVRVNUOiAnaGVsbG9zaWduOnVzZXJGaW5pc2hSZXF1ZXN0JyxcbiAgVVNFUl9SRUFTU0lHTl9SRVFVRVNUOiAnaGVsbG9zaWduOnVzZXJSZWFzc2lnblJlcXVlc3QnLFxuICBVU0VSX1NFTkRfUkVRVUVTVDogJ2hlbGxvc2lnbjp1c2VyU2VuZFJlcXVlc3QnLFxuICBVU0VSX1NJR05fUkVRVUVTVDogJ2hlbGxvc2lnbjp1c2VyU2lnblJlcXVlc3QnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjbGFzc05hbWVzLFxuICBldmVudHMsXG4gIGlmcmFtZSxcbiAgbG9jYWxlcyxcbiAgbWVzc2FnZXMsXG59O1xuIiwiLyoqXG4gKiBUbyBlbmFibGUgZGVidWcgbWVzc2FnZXMsIGVudGVyIHRoZSBmb2xsb3dpbmcgaW50byB5b3VyXG4gKiBkZXZlbG9wZXIgdG9vbHMgY29uc29sZTpcbiAqXG4gKiAgIGxvY2FsU3RvcmFnZS5kZWJ1ZyA9ICdoZWxsb3NpZ24tZW1iZWRkZWQ6Kic7XG4gKlxuICogVGhpcyB3aWxsIHN1cmZhY2UgYWxsIGRlYnVnIG1lc3NhZ2VzIHVuZGVyIHRoZVxuICogXCJoZWxsb3NpZ246XCIgbmFtZXNwYWNlLlxuICovXG5cbmltcG9ydCBkZWJ1ZyBmcm9tICdkZWJ1Zyc7XG5cbmNvbnN0IGluZm8gPSBkZWJ1ZyhgJHtfX1BLR19OQU1FX199OmluZm9gKTtcbmNvbnN0IHdhcm4gPSBkZWJ1ZyhgJHtfX1BLR19OQU1FX199Ondhcm5gKTtcbmNvbnN0IGVycm9yID0gZGVidWcoYCR7X19QS0dfTkFNRV9ffTplcnJvcmApO1xuXG5pbmZvLmxvZyA9IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxud2Fybi5sb2cgPSBjb25zb2xlLndhcm4uYmluZChjb25zb2xlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5mbyxcbiAgd2FybixcbiAgZXJyb3IsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==