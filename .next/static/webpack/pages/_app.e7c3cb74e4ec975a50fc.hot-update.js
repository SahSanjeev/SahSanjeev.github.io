webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/next-server/lib/dynamic.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/dynamic.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.noSSR = noSSR;
exports["default"] = dynamic;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "./node_modules/next/dist/next-server/lib/loadable.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var isServerSide = false;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  var Loading = loadableOptions.loading; // This will only be rendered on the server side

  return function () {
    return /*#__PURE__*/_react["default"].createElement(Loading, {
      error: null,
      isLoading: true,
      pastDelay: false,
      timedOut: false
    });
  };
} // function dynamic<P = {}, O extends DynamicOptions>(options: O):


function dynamic(dynamicOptions, options) {
  var loadableFn = _loadable["default"];
  var loadableOptions = {
    // A loading component is not required, so we default it
    loading: function loading(_ref) {
      var error = _ref.error,
          isLoading = _ref.isLoading,
          pastDelay = _ref.pastDelay;
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return /*#__PURE__*/_react["default"].createElement("p", null, error.message, /*#__PURE__*/_react["default"].createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = function () {
      return dynamicOptions;
    }; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options);

  if (typeof dynamicOptions === 'object' && !(dynamicOptions instanceof Promise)) {
    // show deprecation warning for `modules` key in development
    if (true) {
      if (dynamicOptions.modules) {
        console.warn('The modules option for next/dynamic has been deprecated. See here for more info https://err.sh/vercel/next.js/next-dynamic-modules');
      }
    } // Support for `render` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


    if (dynamicOptions.render) {
      loadableOptions.render = function (loaded, props) {
        return dynamicOptions.render(props, loaded);
      };
    } // Support for `modules` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


    if (dynamicOptions.modules) {
      loadableFn = _loadable["default"].Map;
      var loadModules = {};
      var modules = dynamicOptions.modules();
      Object.keys(modules).forEach(function (key) {
        var value = modules[key];

        if (typeof value.then === 'function') {
          loadModules[key] = function () {
            return value.then(function (mod) {
              return mod["default"] || mod;
            });
          };

          return;
        }

        loadModules[key] = value;
      });
      loadableOptions.loader = loadModules;
    }
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/loadable-context.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable-context.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.LoadableContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var LoadableContext = /*#__PURE__*/_react["default"].createContext(null);

exports.LoadableContext = LoadableContext;

if (true) {
  LoadableContext.displayName = 'LoadableContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/loadable.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _useSubscription = __webpack_require__(/*! use-subscription */ "./node_modules/use-subscription/index.js");

var _loadableContext = __webpack_require__(/*! ./loadable-context */ "./node_modules/next/dist/next-server/lib/loadable-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
MIT License
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/
// https://github.com/jamiebuilds/react-loadable/blob/v5.5.0/src/index.js
// Modified to be compatible with webpack 4 / Next.js


var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];
var initialized = false;

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  })["catch"](function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };
  var promises = [];

  try {
    Object.keys(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);
      result.promise.then(function (res) {
        state.loaded[key] = res;
      })["catch"](function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = Promise.all(promises).then(function (res) {
    state.loading = false;
    return res;
  })["catch"](function (err) {
    state.loading = false;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj["default"] : obj;
}

function render(loaded, props) {
  return /*#__PURE__*/_react["default"].createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _s = $RefreshSig$();

  var opts = Object.assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);
  var subscription = null;

  function init() {
    if (!subscription) {
      var sub = new LoadableSubscription(loadFn, opts);
      subscription = {
        getCurrentValue: sub.getCurrentValue.bind(sub),
        subscribe: sub.subscribe.bind(sub),
        retry: sub.retry.bind(sub),
        promise: sub.promise.bind(sub)
      };
    }

    return subscription.promise();
  } // Server only


  if (false) {} // Client only


  if (!initialized && true && typeof opts.webpack === 'function') {
    var moduleIds = opts.webpack();
    READY_INITIALIZERS.push(function (ids) {
      var _iterator = _createForOfIteratorHelper(moduleIds),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var moduleId = _step.value;

          if (ids.indexOf(moduleId) !== -1) {
            return init();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }

  var LoadableComponent = function LoadableComponent(props, ref) {
    _s();

    init();

    var context = _react["default"].useContext(_loadableContext.LoadableContext);

    var state = (0, _useSubscription.useSubscription)(subscription);

    _react["default"].useImperativeHandle(ref, function () {
      return {
        retry: subscription.retry
      };
    }, []);

    if (context && Array.isArray(opts.modules)) {
      opts.modules.forEach(function (moduleName) {
        context(moduleName);
      });
    }

    return _react["default"].useMemo(function () {
      if (state.loading || state.error) {
        return /*#__PURE__*/_react["default"].createElement(opts.loading, {
          isLoading: state.loading,
          pastDelay: state.pastDelay,
          timedOut: state.timedOut,
          error: state.error,
          retry: subscription.retry
        });
      } else if (state.loaded) {
        return opts.render(state.loaded, props);
      } else {
        return null;
      }
    }, [props, state]);
  };

  _s(LoadableComponent, "Bp87+qHhaUk8bOFGKxqLWPW1xR0=", true);

  LoadableComponent.preload = function () {
    return init();
  };

  LoadableComponent.displayName = 'LoadableComponent';
  return /*#__PURE__*/_react["default"].forwardRef(LoadableComponent);
}

var LoadableSubscription = /*#__PURE__*/function () {
  function LoadableSubscription(loadFn, opts) {
    _classCallCheck(this, LoadableSubscription);

    this._loadFn = loadFn;
    this._opts = opts;
    this._callbacks = new Set();
    this._delay = null;
    this._timeout = null;
    this.retry();
  }

  _createClass(LoadableSubscription, [{
    key: "promise",
    value: function promise() {
      return this._res.promise;
    }
  }, {
    key: "retry",
    value: function retry() {
      var _this = this;

      this._clearTimeouts();

      this._res = this._loadFn(this._opts.loader);
      this._state = {
        pastDelay: false,
        timedOut: false
      };
      var res = this._res,
          opts = this._opts;

      if (res.loading) {
        if (typeof opts.delay === 'number') {
          if (opts.delay === 0) {
            this._state.pastDelay = true;
          } else {
            this._delay = setTimeout(function () {
              _this._update({
                pastDelay: true
              });
            }, opts.delay);
          }
        }

        if (typeof opts.timeout === 'number') {
          this._timeout = setTimeout(function () {
            _this._update({
              timedOut: true
            });
          }, opts.timeout);
        }
      }

      this._res.promise.then(function () {
        _this._update({});

        _this._clearTimeouts();
      })["catch"](function (_err) {
        _this._update({});

        _this._clearTimeouts();
      });

      this._update({});
    }
  }, {
    key: "_update",
    value: function _update(partial) {
      this._state = _objectSpread(_objectSpread({}, this._state), {}, {
        error: this._res.error,
        loaded: this._res.loaded,
        loading: this._res.loading
      }, partial);

      this._callbacks.forEach(function (callback) {
        return callback();
      });
    }
  }, {
    key: "_clearTimeouts",
    value: function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    }
  }, {
    key: "getCurrentValue",
    value: function getCurrentValue() {
      return this._state;
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback) {
      var _this2 = this;

      this._callbacks.add(callback);

      return function () {
        _this2._callbacks["delete"](callback);
      };
    }
  }]);

  return LoadableSubscription;
}();

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

_c = Loadable;

function LoadableMap(opts) {
  if (typeof opts.render !== 'function') {
    throw new Error('LoadableMap requires a `render(loaded, props)` function');
  }

  return createLoadableComponent(loadMap, opts);
}

_c2 = LoadableMap;
Loadable.Map = LoadableMap;

function flushInitializers(initializers, ids) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init(ids));
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers, ids);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolveInitializers, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolveInitializers, reject);
  });
};

Loadable.preloadReady = function () {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new Promise(function (resolvePreload) {
    var res = function res() {
      initialized = true;
      return resolvePreload();
    }; // We always will resolve, errors should be handled within loading UIs.


    flushInitializers(READY_INITIALIZERS, ids).then(res, res);
  });
};

if (true) {
  window.__NEXT_PRELOADREADY = Loadable.preloadReady;
}

var _default = Loadable;
exports["default"] = _default;

var _c, _c2;

$RefreshReg$(_c, "Loadable");
$RefreshReg$(_c2, "LoadableMap");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js")


/***/ }),

/***/ "./node_modules/use-subscription/cjs/use-subscription.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/use-subscription/cjs/use-subscription.development.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React vundefined
 * use-subscription.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

//
// In order to avoid removing and re-adding subscriptions each time this hook is called,
// the parameters passed to this hook should be memoized in some way–
// either by wrapping the entire params object with useMemo()
// or by wrapping the individual callbacks with useCallback().

function useSubscription(_ref) {
  var getCurrentValue = _ref.getCurrentValue,
      subscribe = _ref.subscribe;

  // Read the current value from our subscription.
  // When this value changes, we'll schedule an update with React.
  // It's important to also store the hook params so that we can check for staleness.
  // (See the comment in checkForUpdates() below for more info.)
  var _useState = react.useState(function () {
    return {
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: getCurrentValue()
    };
  }),
      state = _useState[0],
      setState = _useState[1];

  var valueToReturn = state.value; // If parameters have changed since our last render, schedule an update with its current value.

  if (state.getCurrentValue !== getCurrentValue || state.subscribe !== subscribe) {
    // If the subscription has been updated, we'll schedule another update with React.
    // React will process this update immediately, so the old subscription value won't be committed.
    // It is still nice to avoid returning a mismatched value though, so let's override the return value.
    valueToReturn = getCurrentValue();
    setState({
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: valueToReturn
    });
  } // Display the current value for this hook in React DevTools.


  react.useDebugValue(valueToReturn); // It is important not to subscribe while rendering because this can lead to memory leaks.
  // (Learn more at reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)
  // Instead, we wait until the commit phase to attach our handler.
  //
  // We intentionally use a passive effect (useEffect) rather than a synchronous one (useLayoutEffect)
  // so that we don't stretch the commit phase.
  // This also has an added benefit when multiple components are subscribed to the same source:
  // It allows each of the event handlers to safely schedule work without potentially removing an another handler.
  // (Learn more at https://codesandbox.io/s/k0yvr5970o)

  react.useEffect(function () {
    var didUnsubscribe = false;

    var checkForUpdates = function () {
      // It's possible that this callback will be invoked even after being unsubscribed,
      // if it's removed as a result of a subscription event/update.
      // In this case, React will log a DEV warning about an update from an unmounted component.
      // We can avoid triggering that warning with this check.
      if (didUnsubscribe) {
        return;
      } // We use a state updater function to avoid scheduling work for a stale source.
      // However it's important to eagerly read the currently value,
      // so that all scheduled work shares the same value (in the event of multiple subscriptions).
      // This avoids visual "tearing" when a mutation happens during a (concurrent) render.


      var value = getCurrentValue();
      setState(function (prevState) {
        // Ignore values from stale sources!
        // Since we subscribe an unsubscribe in a passive effect,
        // it's possible that this callback will be invoked for a stale (previous) subscription.
        // This check avoids scheduling an update for that stale subscription.
        if (prevState.getCurrentValue !== getCurrentValue || prevState.subscribe !== subscribe) {
          return prevState;
        } // Some subscriptions will auto-invoke the handler, even if the value hasn't changed.
        // If the value hasn't changed, no update is needed.
        // Return state as-is so React can bail out and avoid an unnecessary render.


        if (prevState.value === value) {
          return prevState;
        }

        return _assign({}, prevState, {
          value: value
        });
      });
    };

    var unsubscribe = subscribe(checkForUpdates); // Because we're subscribing in a passive effect,
    // it's possible that an update has occurred between render and our effect handler.
    // Check for this and schedule an update if work has occurred.

    checkForUpdates();
    return function () {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [getCurrentValue, subscribe]); // Return the current value for our caller to use while rendering.

  return valueToReturn;
}

exports.useSubscription = useSubscription;
  })();
}


/***/ }),

/***/ "./node_modules/use-subscription/index.js":
/*!************************************************!*\
  !*** ./node_modules/use-subscription/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/use-subscription.development.js */ "./node_modules/use-subscription/cjs/use-subscription.development.js");
}


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress/nprogress.css */ "./node_modules/nprogress/nprogress.css");
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\react_demo\\Portfolio-main\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var TopProgressBar = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/TopProgressBar */ "./components/TopProgressBar.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/TopProgressBar */ "./components/TopProgressBar.js")];
    },
    modules: ["../components/TopProgressBar"]
  }
});
_c2 = TopProgressBar;
function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(TopProgressBar, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  })));
}
_c3 = MyApp;

var _c, _c2, _c3;

$RefreshReg$(_c, "TopProgressBar$dynamic");
$RefreshReg$(_c2, "TopProgressBar");
$RefreshReg$(_c3, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9keW5hbWljLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9sb2FkYWJsZS1jb250ZXh0LnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2xvYWRhYmxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdXNlLXN1YnNjcmlwdGlvbi9janMvdXNlLXN1YnNjcmlwdGlvbi5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VzZS1zdWJzY3JpcHRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOlsiaXNTZXJ2ZXJTaWRlIiwibG9hZGFibGVPcHRpb25zIiwiTG9hZGFibGVJbml0aWFsaXplciIsIkxvYWRpbmciLCJsb2FkYWJsZUZuIiwiTG9hZGFibGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJkeW5hbWljT3B0aW9ucyIsImNvbnNvbGUiLCJsb2FkTW9kdWxlcyIsIm1vZHVsZXMiLCJPYmplY3QiLCJrZXkiLCJ2YWx1ZSIsIm1vZCIsIm5vU1NSIiwiTG9hZGFibGVDb250ZXh0IiwiUmVhY3QiLCJBTExfSU5JVElBTElaRVJTIiwiUkVBRFlfSU5JVElBTElaRVJTIiwiaW5pdGlhbGl6ZWQiLCJwcm9taXNlIiwibG9hZGVyIiwic3RhdGUiLCJsb2FkZWQiLCJlcnIiLCJwcm9taXNlcyIsInJlc3VsdCIsImxvYWQiLCJvYmoiLCJyZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9wdHMiLCJkZWxheSIsInRpbWVvdXQiLCJyZW5kZXIiLCJ3ZWJwYWNrIiwic3Vic2NyaXB0aW9uIiwic3ViIiwiZ2V0Q3VycmVudFZhbHVlIiwic3Vic2NyaWJlIiwicmV0cnkiLCJtb2R1bGVJZHMiLCJpZHMiLCJpbml0IiwiTG9hZGFibGVDb21wb25lbnQiLCJjb250ZXh0IiwiQXJyYXkiLCJtb2R1bGVOYW1lIiwiaXNMb2FkaW5nIiwicGFzdERlbGF5IiwidGltZWRPdXQiLCJMb2FkYWJsZVN1YnNjcmlwdGlvbiIsImNvbnN0cnVjdG9yIiwiX3JlcyIsIl9vcHRzIiwic2V0VGltZW91dCIsIl9lcnIiLCJfdXBkYXRlIiwiY2FsbGJhY2siLCJfY2xlYXJUaW1lb3V0cyIsImNsZWFyVGltZW91dCIsImNyZWF0ZUxvYWRhYmxlQ29tcG9uZW50IiwiaW5pdGlhbGl6ZXJzIiwiZmx1c2hJbml0aWFsaXplcnMiLCJyZXNvbHZlUHJlbG9hZCIsIndpbmRvdyIsIlRvcFByb2dyZXNzQmFyIiwiZHluYW1pYyIsInNzciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUVBOztBQUFBLElBQU1BLFlBQU47O0FBaURPLHFEQUdtQjtBQUN4QjtBQUNBLFNBQU9DLGVBQWUsQ0FBdEI7QUFDQSxTQUFPQSxlQUFlLENBQXRCLFFBSHdCLENBS3hCOztBQUNBLE1BQUksQ0FBSixjQUFtQjtBQUNqQixXQUFPQyxtQkFBbUIsQ0FBMUIsZUFBMEIsQ0FBMUI7QUFHRjs7QUFBQSxNQUFNQyxPQUFPLEdBQUdGLGVBQWUsQ0FBL0IsUUFWd0IsQ0FXeEI7O0FBQ0EsU0FBTztBQUFBLHdCQUNMO0FBQVMsV0FBSyxFQUFkO0FBQXNCLGVBQVMsRUFBL0I7QUFBZ0MsZUFBUyxFQUF6QztBQUFrRCxjQUFRLEVBRDVEO0FBQ0UsTUFESztBQUFBLEdBQVA7QUFLRixDLENBQUE7OztBQUVlLDBDQUdXO0FBQ3hCLE1BQUlHLFVBQXlCLEdBQUdDLFNBQWhDO0FBQ0EsTUFBSUosZUFBbUMsR0FBRztBQUN4QztBQUNBSyxXQUFPLEVBQUUsdUJBQXFDO0FBQUEsVUFBcEMsS0FBb0MsUUFBcEMsS0FBb0M7QUFB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QixFQUk1QjtBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FGZ0Isb0VBRWhCO0FBQUE7QUFBQSxjQUZnQiw4QkFFaEI7QUFBQTtBQUFBLENBSjRCLENBQTlCO01BQU1GLGM7QUFPUyxTQUFTRyxLQUFULE9BQXlDO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUN0RCxTQUFPLG1FQUNMLE1BQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREssRUFFTCxNQUFDLFNBQUQseUZBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUZLLENBQVA7QUFJRDtNQUx1QkYsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmU3YzNjYjc0ZTRlYzk3NWE1MGZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTG9hZGFibGUgZnJvbSAnLi9sb2FkYWJsZSdcblxuY29uc3QgaXNTZXJ2ZXJTaWRlID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IHR5cGUgTG9hZGVyQ29tcG9uZW50PFAgPSB7fT4gPSBQcm9taXNlPFxuICBSZWFjdC5Db21wb25lbnRUeXBlPFA+IHwgeyBkZWZhdWx0OiBSZWFjdC5Db21wb25lbnRUeXBlPFA+IH1cbj5cblxuZXhwb3J0IHR5cGUgTG9hZGVyPFAgPSB7fT4gPSAoKCkgPT4gTG9hZGVyQ29tcG9uZW50PFA+KSB8IExvYWRlckNvbXBvbmVudDxQPlxuXG5leHBvcnQgdHlwZSBMb2FkZXJNYXAgPSB7IFttZHVsZTogc3RyaW5nXTogKCkgPT4gTG9hZGVyPGFueT4gfVxuXG5leHBvcnQgdHlwZSBMb2FkYWJsZUdlbmVyYXRlZE9wdGlvbnMgPSB7XG4gIHdlYnBhY2s/KCk6IGFueVxuICBtb2R1bGVzPygpOiBMb2FkZXJNYXBcbn1cblxuZXhwb3J0IHR5cGUgTG9hZGFibGVCYXNlT3B0aW9uczxQID0ge30+ID0gTG9hZGFibGVHZW5lcmF0ZWRPcHRpb25zICYge1xuICBsb2FkaW5nPzogKHtcbiAgICBlcnJvcixcbiAgICBpc0xvYWRpbmcsXG4gICAgcGFzdERlbGF5LFxuICB9OiB7XG4gICAgZXJyb3I/OiBFcnJvciB8IG51bGxcbiAgICBpc0xvYWRpbmc/OiBib29sZWFuXG4gICAgcGFzdERlbGF5PzogYm9vbGVhblxuICAgIHJldHJ5PzogKCkgPT4gdm9pZFxuICAgIHRpbWVkT3V0PzogYm9vbGVhblxuICB9KSA9PiBKU1guRWxlbWVudCB8IG51bGxcbiAgbG9hZGVyPzogTG9hZGVyPFA+IHwgTG9hZGVyTWFwXG4gIGxvYWRhYmxlR2VuZXJhdGVkPzogTG9hZGFibGVHZW5lcmF0ZWRPcHRpb25zXG4gIHNzcj86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTG9hZGFibGVPcHRpb25zPFAgPSB7fT4gPSBMb2FkYWJsZUJhc2VPcHRpb25zPFA+ICYge1xuICByZW5kZXI/KGxvYWRlcjogYW55LCBwcm9wczogYW55KTogSlNYLkVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgRHluYW1pY09wdGlvbnM8UCA9IHt9PiA9IExvYWRhYmxlQmFzZU9wdGlvbnM8UD4gJiB7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB0aGUgbW9kdWxlcyBvcHRpb24gaGFzIGJlZW4gcGxhbm5lZCBmb3IgcmVtb3ZhbFxuICAgKi9cbiAgcmVuZGVyPyhwcm9wczogUCwgbG9hZGVkOiBhbnkpOiBKU1guRWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBMb2FkYWJsZUZuPFAgPSB7fT4gPSAoXG4gIG9wdHM6IExvYWRhYmxlT3B0aW9uczxQPlxuKSA9PiBSZWFjdC5Db21wb25lbnRUeXBlPFA+XG5cbmV4cG9ydCB0eXBlIExvYWRhYmxlQ29tcG9uZW50PFAgPSB7fT4gPSBSZWFjdC5Db21wb25lbnRUeXBlPFA+XG5cbmV4cG9ydCBmdW5jdGlvbiBub1NTUjxQID0ge30+KFxuICBMb2FkYWJsZUluaXRpYWxpemVyOiBMb2FkYWJsZUZuPFA+LFxuICBsb2FkYWJsZU9wdGlvbnM6IExvYWRhYmxlT3B0aW9uczxQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxQPiB7XG4gIC8vIFJlbW92aW5nIHdlYnBhY2sgYW5kIG1vZHVsZXMgbWVhbnMgcmVhY3QtbG9hZGFibGUgd29uJ3QgdHJ5IHByZWxvYWRpbmdcbiAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy53ZWJwYWNrXG4gIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMubW9kdWxlc1xuXG4gIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIHByZXZlbnQgcmVhY3QtbG9hZGFibGUgZnJvbSBpbml0aWFsaXppbmcgb24gdGhlIHNlcnZlclxuICBpZiAoIWlzU2VydmVyU2lkZSkge1xuICAgIHJldHVybiBMb2FkYWJsZUluaXRpYWxpemVyKGxvYWRhYmxlT3B0aW9ucylcbiAgfVxuXG4gIGNvbnN0IExvYWRpbmcgPSBsb2FkYWJsZU9wdGlvbnMubG9hZGluZyFcbiAgLy8gVGhpcyB3aWxsIG9ubHkgYmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlciBzaWRlXG4gIHJldHVybiAoKSA9PiAoXG4gICAgPExvYWRpbmcgZXJyb3I9e251bGx9IGlzTG9hZGluZyBwYXN0RGVsYXk9e2ZhbHNlfSB0aW1lZE91dD17ZmFsc2V9IC8+XG4gIClcbn1cblxuLy8gZnVuY3Rpb24gZHluYW1pYzxQID0ge30sIE8gZXh0ZW5kcyBEeW5hbWljT3B0aW9ucz4ob3B0aW9uczogTyk6XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGR5bmFtaWM8UCA9IHt9PihcbiAgZHluYW1pY09wdGlvbnM6IER5bmFtaWNPcHRpb25zPFA+IHwgTG9hZGVyPFA+LFxuICBvcHRpb25zPzogRHluYW1pY09wdGlvbnM8UD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8UD4ge1xuICBsZXQgbG9hZGFibGVGbjogTG9hZGFibGVGbjxQPiA9IExvYWRhYmxlXG4gIGxldCBsb2FkYWJsZU9wdGlvbnM6IExvYWRhYmxlT3B0aW9uczxQPiA9IHtcbiAgICAvLyBBIGxvYWRpbmcgY29tcG9uZW50IGlzIG5vdCByZXF1aXJlZCwgc28gd2UgZGVmYXVsdCBpdFxuICAgIGxvYWRpbmc6ICh7IGVycm9yLCBpc0xvYWRpbmcsIHBhc3REZWxheSB9KSA9PiB7XG4gICAgICBpZiAoIXBhc3REZWxheSkgcmV0dXJuIG51bGxcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHtlcnJvci5tZXNzYWdlfVxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAge2Vycm9yLnN0YWNrfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0sXG4gIH1cblxuICAvLyBTdXBwb3J0IGZvciBkaXJlY3QgaW1wb3J0KCksIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgLy8gTm90ZSB0aGF0IHRoaXMgaXMgb25seSBrZXB0IGZvciB0aGUgZWRnZSBjYXNlIHdoZXJlIHNvbWVvbmUgaXMgcGFzc2luZyBpbiBhIHByb21pc2UgYXMgZmlyc3QgYXJndW1lbnRcbiAgLy8gVGhlIHJlYWN0LWxvYWRhYmxlIGJhYmVsIHBsdWdpbiB3aWxsIHR1cm4gZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpIGludG8gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gIC8vIFRvIG1ha2Ugc3VyZSB3ZSBkb24ndCBleGVjdXRlIHRoZSBpbXBvcnQgd2l0aG91dCByZW5kZXJpbmcgZmlyc3RcbiAgaWYgKGR5bmFtaWNPcHRpb25zIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSAoKSA9PiBkeW5hbWljT3B0aW9uc1xuICAgIC8vIFN1cHBvcnQgZm9yIGhhdmluZyBpbXBvcnQgYXMgYSBmdW5jdGlvbiwgZWc6IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSBkeW5hbWljT3B0aW9uc1xuICAgIC8vIFN1cHBvcnQgZm9yIGhhdmluZyBmaXJzdCBhcmd1bWVudCBiZWluZyBvcHRpb25zLCBlZzogZHluYW1pYyh7bG9hZGVyOiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyl9KVxuICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICBsb2FkYWJsZU9wdGlvbnMgPSB7IC4uLmxvYWRhYmxlT3B0aW9ucywgLi4uZHluYW1pY09wdGlvbnMgfVxuICB9XG5cbiAgLy8gU3VwcG9ydCBmb3IgcGFzc2luZyBvcHRpb25zLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtsb2FkaW5nOiAoKSA9PiA8cD5Mb2FkaW5nIHNvbWV0aGluZzwvcD59KVxuICBsb2FkYWJsZU9wdGlvbnMgPSB7IC4uLmxvYWRhYmxlT3B0aW9ucywgLi4ub3B0aW9ucyB9XG5cbiAgaWYgKFxuICAgIHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ29iamVjdCcgJiZcbiAgICAhKGR5bmFtaWNPcHRpb25zIGluc3RhbmNlb2YgUHJvbWlzZSlcbiAgKSB7XG4gICAgLy8gc2hvdyBkZXByZWNhdGlvbiB3YXJuaW5nIGZvciBgbW9kdWxlc2Aga2V5IGluIGRldmVsb3BtZW50XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChkeW5hbWljT3B0aW9ucy5tb2R1bGVzKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnVGhlIG1vZHVsZXMgb3B0aW9uIGZvciBuZXh0L2R5bmFtaWMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gU2VlIGhlcmUgZm9yIG1vcmUgaW5mbyBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9uZXh0LWR5bmFtaWMtbW9kdWxlcydcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBTdXBwb3J0IGZvciBgcmVuZGVyYCB3aGVuIHVzaW5nIGEgbWFwcGluZywgZWc6IGBkeW5hbWljKHsgbW9kdWxlczogKCkgPT4ge3JldHVybiB7SGVsbG9Xb3JsZDogaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpfSwgcmVuZGVyKHByb3BzLCBsb2FkZWQpIHt9IH0gfSlcbiAgICBpZiAoZHluYW1pY09wdGlvbnMucmVuZGVyKSB7XG4gICAgICBsb2FkYWJsZU9wdGlvbnMucmVuZGVyID0gKGxvYWRlZCwgcHJvcHMpID0+XG4gICAgICAgIGR5bmFtaWNPcHRpb25zLnJlbmRlciEocHJvcHMsIGxvYWRlZClcbiAgICB9XG4gICAgLy8gU3VwcG9ydCBmb3IgYG1vZHVsZXNgIHdoZW4gdXNpbmcgYSBtYXBwaW5nLCBlZzogYGR5bmFtaWMoeyBtb2R1bGVzOiAoKSA9PiB7cmV0dXJuIHtIZWxsb1dvcmxkOiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyl9LCByZW5kZXIocHJvcHMsIGxvYWRlZCkge30gfSB9KVxuICAgIGlmIChkeW5hbWljT3B0aW9ucy5tb2R1bGVzKSB7XG4gICAgICBsb2FkYWJsZUZuID0gTG9hZGFibGUuTWFwXG4gICAgICBjb25zdCBsb2FkTW9kdWxlczogTG9hZGVyTWFwID0ge31cbiAgICAgIGNvbnN0IG1vZHVsZXMgPSBkeW5hbWljT3B0aW9ucy5tb2R1bGVzKClcbiAgICAgIE9iamVjdC5rZXlzKG1vZHVsZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZTogYW55ID0gbW9kdWxlc1trZXldXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGxvYWRNb2R1bGVzW2tleV0gPSAoKSA9PiB2YWx1ZS50aGVuKChtb2Q6IGFueSkgPT4gbW9kLmRlZmF1bHQgfHwgbW9kKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGxvYWRNb2R1bGVzW2tleV0gPSB2YWx1ZVxuICAgICAgfSlcbiAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSBsb2FkTW9kdWxlc1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvbWluZyBmcm9tIGJ1aWxkL2JhYmVsL3BsdWdpbnMvcmVhY3QtbG9hZGFibGUtcGx1Z2luLmpzXG4gIGlmIChsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQpIHtcbiAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAuLi5sb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQsXG4gICAgfVxuICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWRcbiAgfVxuXG4gIC8vIHN1cHBvcnQgZm9yIGRpc2FibGluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge3NzcjogZmFsc2V9KVxuICBpZiAodHlwZW9mIGxvYWRhYmxlT3B0aW9ucy5zc3IgPT09ICdib29sZWFuJykge1xuICAgIGlmICghbG9hZGFibGVPcHRpb25zLnNzcikge1xuICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3JcbiAgICAgIHJldHVybiBub1NTUihsb2FkYWJsZUZuLCBsb2FkYWJsZU9wdGlvbnMpXG4gICAgfVxuICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMuc3NyXG4gIH1cblxuICByZXR1cm4gbG9hZGFibGVGbihsb2FkYWJsZU9wdGlvbnMpXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbnR5cGUgQ2FwdHVyZUZuID0gKG1vZHVsZU5hbWU6IHN0cmluZykgPT4gdm9pZFxuXG5leHBvcnQgY29uc3QgTG9hZGFibGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxDYXB0dXJlRm4gfCBudWxsPihudWxsKVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBMb2FkYWJsZUNvbnRleHQuZGlzcGxheU5hbWUgPSAnTG9hZGFibGVDb250ZXh0J1xufVxuIiwiLyoqXG5AY29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQgSmFtZXMgS3lsZSA8bWVAdGhlamFtZXNreWxlLmNvbT5cbiBNSVQgTGljZW5zZVxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZ1xuYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG5cIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbndpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbmRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0b1xucGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvXG50aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbmluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG5FWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbk1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG5OT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFXG5MSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OXG5PRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT05cbldJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFXG4qL1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2phbWllYnVpbGRzL3JlYWN0LWxvYWRhYmxlL2Jsb2IvdjUuNS4wL3NyYy9pbmRleC5qc1xuLy8gTW9kaWZpZWQgdG8gYmUgY29tcGF0aWJsZSB3aXRoIHdlYnBhY2sgNCAvIE5leHQuanNcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3Vic2NyaXB0aW9uIH0gZnJvbSAndXNlLXN1YnNjcmlwdGlvbidcbmltcG9ydCB7IExvYWRhYmxlQ29udGV4dCB9IGZyb20gJy4vbG9hZGFibGUtY29udGV4dCdcblxuY29uc3QgQUxMX0lOSVRJQUxJWkVSUyA9IFtdXG5jb25zdCBSRUFEWV9JTklUSUFMSVpFUlMgPSBbXVxubGV0IGluaXRpYWxpemVkID0gZmFsc2VcblxuZnVuY3Rpb24gbG9hZChsb2FkZXIpIHtcbiAgbGV0IHByb21pc2UgPSBsb2FkZXIoKVxuXG4gIGxldCBzdGF0ZSA9IHtcbiAgICBsb2FkaW5nOiB0cnVlLFxuICAgIGxvYWRlZDogbnVsbCxcbiAgICBlcnJvcjogbnVsbCxcbiAgfVxuXG4gIHN0YXRlLnByb21pc2UgPSBwcm9taXNlXG4gICAgLnRoZW4oKGxvYWRlZCkgPT4ge1xuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlXG4gICAgICBzdGF0ZS5sb2FkZWQgPSBsb2FkZWRcbiAgICAgIHJldHVybiBsb2FkZWRcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcbiAgICAgIHN0YXRlLmVycm9yID0gZXJyXG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxuXG4gIHJldHVybiBzdGF0ZVxufVxuXG5mdW5jdGlvbiBsb2FkTWFwKG9iaikge1xuICBsZXQgc3RhdGUgPSB7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgbG9hZGVkOiB7fSxcbiAgICBlcnJvcjogbnVsbCxcbiAgfVxuXG4gIGxldCBwcm9taXNlcyA9IFtdXG5cbiAgdHJ5IHtcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgbGV0IHJlc3VsdCA9IGxvYWQob2JqW2tleV0pXG5cbiAgICAgIGlmICghcmVzdWx0LmxvYWRpbmcpIHtcbiAgICAgICAgc3RhdGUubG9hZGVkW2tleV0gPSByZXN1bHQubG9hZGVkXG4gICAgICAgIHN0YXRlLmVycm9yID0gcmVzdWx0LmVycm9yXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBwcm9taXNlcy5wdXNoKHJlc3VsdC5wcm9taXNlKVxuXG4gICAgICByZXN1bHQucHJvbWlzZVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgc3RhdGUubG9hZGVkW2tleV0gPSByZXNcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBzdGF0ZS5lcnJvciA9IGVyclxuICAgICAgICB9KVxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHN0YXRlLmVycm9yID0gZXJyXG4gIH1cblxuICBzdGF0ZS5wcm9taXNlID0gUHJvbWlzZS5hbGwocHJvbWlzZXMpXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlXG4gICAgICByZXR1cm4gcmVzXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlXG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxuXG4gIHJldHVybiBzdGF0ZVxufVxuXG5mdW5jdGlvbiByZXNvbHZlKG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqLmRlZmF1bHQgOiBvYmpcbn1cblxuZnVuY3Rpb24gcmVuZGVyKGxvYWRlZCwgcHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQocmVzb2x2ZShsb2FkZWQpLCBwcm9wcylcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9hZGFibGVDb21wb25lbnQobG9hZEZuLCBvcHRpb25zKSB7XG4gIGxldCBvcHRzID0gT2JqZWN0LmFzc2lnbihcbiAgICB7XG4gICAgICBsb2FkZXI6IG51bGwsXG4gICAgICBsb2FkaW5nOiBudWxsLFxuICAgICAgZGVsYXk6IDIwMCxcbiAgICAgIHRpbWVvdXQ6IG51bGwsXG4gICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgIHdlYnBhY2s6IG51bGwsXG4gICAgICBtb2R1bGVzOiBudWxsLFxuICAgIH0sXG4gICAgb3B0aW9uc1xuICApXG5cbiAgbGV0IHN1YnNjcmlwdGlvbiA9IG51bGxcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGlmICghc3Vic2NyaXB0aW9uKSB7XG4gICAgICBjb25zdCBzdWIgPSBuZXcgTG9hZGFibGVTdWJzY3JpcHRpb24obG9hZEZuLCBvcHRzKVxuICAgICAgc3Vic2NyaXB0aW9uID0ge1xuICAgICAgICBnZXRDdXJyZW50VmFsdWU6IHN1Yi5nZXRDdXJyZW50VmFsdWUuYmluZChzdWIpLFxuICAgICAgICBzdWJzY3JpYmU6IHN1Yi5zdWJzY3JpYmUuYmluZChzdWIpLFxuICAgICAgICByZXRyeTogc3ViLnJldHJ5LmJpbmQoc3ViKSxcbiAgICAgICAgcHJvbWlzZTogc3ViLnByb21pc2UuYmluZChzdWIpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3Vic2NyaXB0aW9uLnByb21pc2UoKVxuICB9XG5cbiAgLy8gU2VydmVyIG9ubHlcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgQUxMX0lOSVRJQUxJWkVSUy5wdXNoKGluaXQpXG4gIH1cblxuICAvLyBDbGllbnQgb25seVxuICBpZiAoXG4gICAgIWluaXRpYWxpemVkICYmXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2Ygb3B0cy53ZWJwYWNrID09PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIGNvbnN0IG1vZHVsZUlkcyA9IG9wdHMud2VicGFjaygpXG4gICAgUkVBRFlfSU5JVElBTElaRVJTLnB1c2goKGlkcykgPT4ge1xuICAgICAgZm9yIChjb25zdCBtb2R1bGVJZCBvZiBtb2R1bGVJZHMpIHtcbiAgICAgICAgaWYgKGlkcy5pbmRleE9mKG1vZHVsZUlkKSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gaW5pdCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY29uc3QgTG9hZGFibGVDb21wb25lbnQgPSAocHJvcHMsIHJlZikgPT4ge1xuICAgIGluaXQoKVxuXG4gICAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoTG9hZGFibGVDb250ZXh0KVxuICAgIGNvbnN0IHN0YXRlID0gdXNlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbilcblxuICAgIFJlYWN0LnVzZUltcGVyYXRpdmVIYW5kbGUoXG4gICAgICByZWYsXG4gICAgICAoKSA9PiAoe1xuICAgICAgICByZXRyeTogc3Vic2NyaXB0aW9uLnJldHJ5LFxuICAgICAgfSksXG4gICAgICBbXVxuICAgIClcblxuICAgIGlmIChjb250ZXh0ICYmIEFycmF5LmlzQXJyYXkob3B0cy5tb2R1bGVzKSkge1xuICAgICAgb3B0cy5tb2R1bGVzLmZvckVhY2goKG1vZHVsZU5hbWUpID0+IHtcbiAgICAgICAgY29udGV4dChtb2R1bGVOYW1lKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICBpZiAoc3RhdGUubG9hZGluZyB8fCBzdGF0ZS5lcnJvcikge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChvcHRzLmxvYWRpbmcsIHtcbiAgICAgICAgICBpc0xvYWRpbmc6IHN0YXRlLmxvYWRpbmcsXG4gICAgICAgICAgcGFzdERlbGF5OiBzdGF0ZS5wYXN0RGVsYXksXG4gICAgICAgICAgdGltZWRPdXQ6IHN0YXRlLnRpbWVkT3V0LFxuICAgICAgICAgIGVycm9yOiBzdGF0ZS5lcnJvcixcbiAgICAgICAgICByZXRyeTogc3Vic2NyaXB0aW9uLnJldHJ5LFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5sb2FkZWQpIHtcbiAgICAgICAgcmV0dXJuIG9wdHMucmVuZGVyKHN0YXRlLmxvYWRlZCwgcHJvcHMpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgIH0sIFtwcm9wcywgc3RhdGVdKVxuICB9XG5cbiAgTG9hZGFibGVDb21wb25lbnQucHJlbG9hZCA9ICgpID0+IGluaXQoKVxuICBMb2FkYWJsZUNvbXBvbmVudC5kaXNwbGF5TmFtZSA9ICdMb2FkYWJsZUNvbXBvbmVudCdcblxuICByZXR1cm4gUmVhY3QuZm9yd2FyZFJlZihMb2FkYWJsZUNvbXBvbmVudClcbn1cblxuY2xhc3MgTG9hZGFibGVTdWJzY3JpcHRpb24ge1xuICBjb25zdHJ1Y3Rvcihsb2FkRm4sIG9wdHMpIHtcbiAgICB0aGlzLl9sb2FkRm4gPSBsb2FkRm5cbiAgICB0aGlzLl9vcHRzID0gb3B0c1xuICAgIHRoaXMuX2NhbGxiYWNrcyA9IG5ldyBTZXQoKVxuICAgIHRoaXMuX2RlbGF5ID0gbnVsbFxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG5cbiAgICB0aGlzLnJldHJ5KClcbiAgfVxuXG4gIHByb21pc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlcy5wcm9taXNlXG4gIH1cblxuICByZXRyeSgpIHtcbiAgICB0aGlzLl9jbGVhclRpbWVvdXRzKClcbiAgICB0aGlzLl9yZXMgPSB0aGlzLl9sb2FkRm4odGhpcy5fb3B0cy5sb2FkZXIpXG5cbiAgICB0aGlzLl9zdGF0ZSA9IHtcbiAgICAgIHBhc3REZWxheTogZmFsc2UsXG4gICAgICB0aW1lZE91dDogZmFsc2UsXG4gICAgfVxuXG4gICAgY29uc3QgeyBfcmVzOiByZXMsIF9vcHRzOiBvcHRzIH0gPSB0aGlzXG5cbiAgICBpZiAocmVzLmxvYWRpbmcpIHtcbiAgICAgIGlmICh0eXBlb2Ygb3B0cy5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKG9wdHMuZGVsYXkgPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9zdGF0ZS5wYXN0RGVsYXkgPSB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fZGVsYXkgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZSh7XG4gICAgICAgICAgICAgIHBhc3REZWxheTogdHJ1ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSwgb3B0cy5kZWxheSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9wdHMudGltZW91dCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZSh7IHRpbWVkT3V0OiB0cnVlIH0pXG4gICAgICAgIH0sIG9wdHMudGltZW91dClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9yZXMucHJvbWlzZVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGUoe30pXG4gICAgICAgIHRoaXMuX2NsZWFyVGltZW91dHMoKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoX2VycikgPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGUoe30pXG4gICAgICAgIHRoaXMuX2NsZWFyVGltZW91dHMoKVxuICAgICAgfSlcbiAgICB0aGlzLl91cGRhdGUoe30pXG4gIH1cblxuICBfdXBkYXRlKHBhcnRpYWwpIHtcbiAgICB0aGlzLl9zdGF0ZSA9IHtcbiAgICAgIC4uLnRoaXMuX3N0YXRlLFxuICAgICAgZXJyb3I6IHRoaXMuX3Jlcy5lcnJvcixcbiAgICAgIGxvYWRlZDogdGhpcy5fcmVzLmxvYWRlZCxcbiAgICAgIGxvYWRpbmc6IHRoaXMuX3Jlcy5sb2FkaW5nLFxuICAgICAgLi4ucGFydGlhbCxcbiAgICB9XG4gICAgdGhpcy5fY2FsbGJhY2tzLmZvckVhY2goKGNhbGxiYWNrKSA9PiBjYWxsYmFjaygpKVxuICB9XG5cbiAgX2NsZWFyVGltZW91dHMoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX2RlbGF5KVxuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuICB9XG5cbiAgZ2V0Q3VycmVudFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZVxuICB9XG5cbiAgc3Vic2NyaWJlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fY2FsbGJhY2tzLmFkZChjYWxsYmFjaylcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdGhpcy5fY2FsbGJhY2tzLmRlbGV0ZShjYWxsYmFjaylcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gTG9hZGFibGUob3B0cykge1xuICByZXR1cm4gY3JlYXRlTG9hZGFibGVDb21wb25lbnQobG9hZCwgb3B0cylcbn1cblxuZnVuY3Rpb24gTG9hZGFibGVNYXAob3B0cykge1xuICBpZiAodHlwZW9mIG9wdHMucmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMb2FkYWJsZU1hcCByZXF1aXJlcyBhIGByZW5kZXIobG9hZGVkLCBwcm9wcylgIGZ1bmN0aW9uJylcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVMb2FkYWJsZUNvbXBvbmVudChsb2FkTWFwLCBvcHRzKVxufVxuXG5Mb2FkYWJsZS5NYXAgPSBMb2FkYWJsZU1hcFxuXG5mdW5jdGlvbiBmbHVzaEluaXRpYWxpemVycyhpbml0aWFsaXplcnMsIGlkcykge1xuICBsZXQgcHJvbWlzZXMgPSBbXVxuXG4gIHdoaWxlIChpbml0aWFsaXplcnMubGVuZ3RoKSB7XG4gICAgbGV0IGluaXQgPSBpbml0aWFsaXplcnMucG9wKClcbiAgICBwcm9taXNlcy5wdXNoKGluaXQoaWRzKSlcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgaWYgKGluaXRpYWxpemVycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmbHVzaEluaXRpYWxpemVycyhpbml0aWFsaXplcnMsIGlkcylcbiAgICB9XG4gIH0pXG59XG5cbkxvYWRhYmxlLnByZWxvYWRBbGwgPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZUluaXRpYWxpemVycywgcmVqZWN0KSA9PiB7XG4gICAgZmx1c2hJbml0aWFsaXplcnMoQUxMX0lOSVRJQUxJWkVSUykudGhlbihyZXNvbHZlSW5pdGlhbGl6ZXJzLCByZWplY3QpXG4gIH0pXG59XG5cbkxvYWRhYmxlLnByZWxvYWRSZWFkeSA9IChpZHMgPSBbXSkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmVQcmVsb2FkKSA9PiB7XG4gICAgY29uc3QgcmVzID0gKCkgPT4ge1xuICAgICAgaW5pdGlhbGl6ZWQgPSB0cnVlXG4gICAgICByZXR1cm4gcmVzb2x2ZVByZWxvYWQoKVxuICAgIH1cbiAgICAvLyBXZSBhbHdheXMgd2lsbCByZXNvbHZlLCBlcnJvcnMgc2hvdWxkIGJlIGhhbmRsZWQgd2l0aGluIGxvYWRpbmcgVUlzLlxuICAgIGZsdXNoSW5pdGlhbGl6ZXJzKFJFQURZX0lOSVRJQUxJWkVSUywgaWRzKS50aGVuKHJlcywgcmVzKVxuICB9KVxufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luZG93Ll9fTkVYVF9QUkVMT0FEUkVBRFkgPSBMb2FkYWJsZS5wcmVsb2FkUmVhZHlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGFibGVcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L25leHQtc2VydmVyL2xpYi9keW5hbWljJylcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2dW5kZWZpbmVkXG4gKiB1c2Utc3Vic2NyaXB0aW9uLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vL1xuLy8gSW4gb3JkZXIgdG8gYXZvaWQgcmVtb3ZpbmcgYW5kIHJlLWFkZGluZyBzdWJzY3JpcHRpb25zIGVhY2ggdGltZSB0aGlzIGhvb2sgaXMgY2FsbGVkLFxuLy8gdGhlIHBhcmFtZXRlcnMgcGFzc2VkIHRvIHRoaXMgaG9vayBzaG91bGQgYmUgbWVtb2l6ZWQgaW4gc29tZSB3YXnigJNcbi8vIGVpdGhlciBieSB3cmFwcGluZyB0aGUgZW50aXJlIHBhcmFtcyBvYmplY3Qgd2l0aCB1c2VNZW1vKClcbi8vIG9yIGJ5IHdyYXBwaW5nIHRoZSBpbmRpdmlkdWFsIGNhbGxiYWNrcyB3aXRoIHVzZUNhbGxiYWNrKCkuXG5cbmZ1bmN0aW9uIHVzZVN1YnNjcmlwdGlvbihfcmVmKSB7XG4gIHZhciBnZXRDdXJyZW50VmFsdWUgPSBfcmVmLmdldEN1cnJlbnRWYWx1ZSxcbiAgICAgIHN1YnNjcmliZSA9IF9yZWYuc3Vic2NyaWJlO1xuXG4gIC8vIFJlYWQgdGhlIGN1cnJlbnQgdmFsdWUgZnJvbSBvdXIgc3Vic2NyaXB0aW9uLlxuICAvLyBXaGVuIHRoaXMgdmFsdWUgY2hhbmdlcywgd2UnbGwgc2NoZWR1bGUgYW4gdXBkYXRlIHdpdGggUmVhY3QuXG4gIC8vIEl0J3MgaW1wb3J0YW50IHRvIGFsc28gc3RvcmUgdGhlIGhvb2sgcGFyYW1zIHNvIHRoYXQgd2UgY2FuIGNoZWNrIGZvciBzdGFsZW5lc3MuXG4gIC8vIChTZWUgdGhlIGNvbW1lbnQgaW4gY2hlY2tGb3JVcGRhdGVzKCkgYmVsb3cgZm9yIG1vcmUgaW5mby4pXG4gIHZhciBfdXNlU3RhdGUgPSByZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldEN1cnJlbnRWYWx1ZTogZ2V0Q3VycmVudFZhbHVlLFxuICAgICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgICB2YWx1ZTogZ2V0Q3VycmVudFZhbHVlKClcbiAgICB9O1xuICB9KSxcbiAgICAgIHN0YXRlID0gX3VzZVN0YXRlWzBdLFxuICAgICAgc2V0U3RhdGUgPSBfdXNlU3RhdGVbMV07XG5cbiAgdmFyIHZhbHVlVG9SZXR1cm4gPSBzdGF0ZS52YWx1ZTsgLy8gSWYgcGFyYW1ldGVycyBoYXZlIGNoYW5nZWQgc2luY2Ugb3VyIGxhc3QgcmVuZGVyLCBzY2hlZHVsZSBhbiB1cGRhdGUgd2l0aCBpdHMgY3VycmVudCB2YWx1ZS5cblxuICBpZiAoc3RhdGUuZ2V0Q3VycmVudFZhbHVlICE9PSBnZXRDdXJyZW50VmFsdWUgfHwgc3RhdGUuc3Vic2NyaWJlICE9PSBzdWJzY3JpYmUpIHtcbiAgICAvLyBJZiB0aGUgc3Vic2NyaXB0aW9uIGhhcyBiZWVuIHVwZGF0ZWQsIHdlJ2xsIHNjaGVkdWxlIGFub3RoZXIgdXBkYXRlIHdpdGggUmVhY3QuXG4gICAgLy8gUmVhY3Qgd2lsbCBwcm9jZXNzIHRoaXMgdXBkYXRlIGltbWVkaWF0ZWx5LCBzbyB0aGUgb2xkIHN1YnNjcmlwdGlvbiB2YWx1ZSB3b24ndCBiZSBjb21taXR0ZWQuXG4gICAgLy8gSXQgaXMgc3RpbGwgbmljZSB0byBhdm9pZCByZXR1cm5pbmcgYSBtaXNtYXRjaGVkIHZhbHVlIHRob3VnaCwgc28gbGV0J3Mgb3ZlcnJpZGUgdGhlIHJldHVybiB2YWx1ZS5cbiAgICB2YWx1ZVRvUmV0dXJuID0gZ2V0Q3VycmVudFZhbHVlKCk7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgZ2V0Q3VycmVudFZhbHVlOiBnZXRDdXJyZW50VmFsdWUsXG4gICAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVRvUmV0dXJuXG4gICAgfSk7XG4gIH0gLy8gRGlzcGxheSB0aGUgY3VycmVudCB2YWx1ZSBmb3IgdGhpcyBob29rIGluIFJlYWN0IERldlRvb2xzLlxuXG5cbiAgcmVhY3QudXNlRGVidWdWYWx1ZSh2YWx1ZVRvUmV0dXJuKTsgLy8gSXQgaXMgaW1wb3J0YW50IG5vdCB0byBzdWJzY3JpYmUgd2hpbGUgcmVuZGVyaW5nIGJlY2F1c2UgdGhpcyBjYW4gbGVhZCB0byBtZW1vcnkgbGVha3MuXG4gIC8vIChMZWFybiBtb3JlIGF0IHJlYWN0anMub3JnL2RvY3Mvc3RyaWN0LW1vZGUuaHRtbCNkZXRlY3RpbmctdW5leHBlY3RlZC1zaWRlLWVmZmVjdHMpXG4gIC8vIEluc3RlYWQsIHdlIHdhaXQgdW50aWwgdGhlIGNvbW1pdCBwaGFzZSB0byBhdHRhY2ggb3VyIGhhbmRsZXIuXG4gIC8vXG4gIC8vIFdlIGludGVudGlvbmFsbHkgdXNlIGEgcGFzc2l2ZSBlZmZlY3QgKHVzZUVmZmVjdCkgcmF0aGVyIHRoYW4gYSBzeW5jaHJvbm91cyBvbmUgKHVzZUxheW91dEVmZmVjdClcbiAgLy8gc28gdGhhdCB3ZSBkb24ndCBzdHJldGNoIHRoZSBjb21taXQgcGhhc2UuXG4gIC8vIFRoaXMgYWxzbyBoYXMgYW4gYWRkZWQgYmVuZWZpdCB3aGVuIG11bHRpcGxlIGNvbXBvbmVudHMgYXJlIHN1YnNjcmliZWQgdG8gdGhlIHNhbWUgc291cmNlOlxuICAvLyBJdCBhbGxvd3MgZWFjaCBvZiB0aGUgZXZlbnQgaGFuZGxlcnMgdG8gc2FmZWx5IHNjaGVkdWxlIHdvcmsgd2l0aG91dCBwb3RlbnRpYWxseSByZW1vdmluZyBhbiBhbm90aGVyIGhhbmRsZXIuXG4gIC8vIChMZWFybiBtb3JlIGF0IGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9rMHl2cjU5NzBvKVxuXG4gIHJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRpZFVuc3Vic2NyaWJlID0gZmFsc2U7XG5cbiAgICB2YXIgY2hlY2tGb3JVcGRhdGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gSXQncyBwb3NzaWJsZSB0aGF0IHRoaXMgY2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIGV2ZW4gYWZ0ZXIgYmVpbmcgdW5zdWJzY3JpYmVkLFxuICAgICAgLy8gaWYgaXQncyByZW1vdmVkIGFzIGEgcmVzdWx0IG9mIGEgc3Vic2NyaXB0aW9uIGV2ZW50L3VwZGF0ZS5cbiAgICAgIC8vIEluIHRoaXMgY2FzZSwgUmVhY3Qgd2lsbCBsb2cgYSBERVYgd2FybmluZyBhYm91dCBhbiB1cGRhdGUgZnJvbSBhbiB1bm1vdW50ZWQgY29tcG9uZW50LlxuICAgICAgLy8gV2UgY2FuIGF2b2lkIHRyaWdnZXJpbmcgdGhhdCB3YXJuaW5nIHdpdGggdGhpcyBjaGVjay5cbiAgICAgIGlmIChkaWRVbnN1YnNjcmliZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIFdlIHVzZSBhIHN0YXRlIHVwZGF0ZXIgZnVuY3Rpb24gdG8gYXZvaWQgc2NoZWR1bGluZyB3b3JrIGZvciBhIHN0YWxlIHNvdXJjZS5cbiAgICAgIC8vIEhvd2V2ZXIgaXQncyBpbXBvcnRhbnQgdG8gZWFnZXJseSByZWFkIHRoZSBjdXJyZW50bHkgdmFsdWUsXG4gICAgICAvLyBzbyB0aGF0IGFsbCBzY2hlZHVsZWQgd29yayBzaGFyZXMgdGhlIHNhbWUgdmFsdWUgKGluIHRoZSBldmVudCBvZiBtdWx0aXBsZSBzdWJzY3JpcHRpb25zKS5cbiAgICAgIC8vIFRoaXMgYXZvaWRzIHZpc3VhbCBcInRlYXJpbmdcIiB3aGVuIGEgbXV0YXRpb24gaGFwcGVucyBkdXJpbmcgYSAoY29uY3VycmVudCkgcmVuZGVyLlxuXG5cbiAgICAgIHZhciB2YWx1ZSA9IGdldEN1cnJlbnRWYWx1ZSgpO1xuICAgICAgc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICAvLyBJZ25vcmUgdmFsdWVzIGZyb20gc3RhbGUgc291cmNlcyFcbiAgICAgICAgLy8gU2luY2Ugd2Ugc3Vic2NyaWJlIGFuIHVuc3Vic2NyaWJlIGluIGEgcGFzc2l2ZSBlZmZlY3QsXG4gICAgICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCB0aGlzIGNhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCBmb3IgYSBzdGFsZSAocHJldmlvdXMpIHN1YnNjcmlwdGlvbi5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBhdm9pZHMgc2NoZWR1bGluZyBhbiB1cGRhdGUgZm9yIHRoYXQgc3RhbGUgc3Vic2NyaXB0aW9uLlxuICAgICAgICBpZiAocHJldlN0YXRlLmdldEN1cnJlbnRWYWx1ZSAhPT0gZ2V0Q3VycmVudFZhbHVlIHx8IHByZXZTdGF0ZS5zdWJzY3JpYmUgIT09IHN1YnNjcmliZSkge1xuICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgICAgIH0gLy8gU29tZSBzdWJzY3JpcHRpb25zIHdpbGwgYXV0by1pbnZva2UgdGhlIGhhbmRsZXIsIGV2ZW4gaWYgdGhlIHZhbHVlIGhhc24ndCBjaGFuZ2VkLlxuICAgICAgICAvLyBJZiB0aGUgdmFsdWUgaGFzbid0IGNoYW5nZWQsIG5vIHVwZGF0ZSBpcyBuZWVkZWQuXG4gICAgICAgIC8vIFJldHVybiBzdGF0ZSBhcy1pcyBzbyBSZWFjdCBjYW4gYmFpbCBvdXQgYW5kIGF2b2lkIGFuIHVubmVjZXNzYXJ5IHJlbmRlci5cblxuXG4gICAgICAgIGlmIChwcmV2U3RhdGUudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfYXNzaWduKHt9LCBwcmV2U3RhdGUsIHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIHVuc3Vic2NyaWJlID0gc3Vic2NyaWJlKGNoZWNrRm9yVXBkYXRlcyk7IC8vIEJlY2F1c2Ugd2UncmUgc3Vic2NyaWJpbmcgaW4gYSBwYXNzaXZlIGVmZmVjdCxcbiAgICAvLyBpdCdzIHBvc3NpYmxlIHRoYXQgYW4gdXBkYXRlIGhhcyBvY2N1cnJlZCBiZXR3ZWVuIHJlbmRlciBhbmQgb3VyIGVmZmVjdCBoYW5kbGVyLlxuICAgIC8vIENoZWNrIGZvciB0aGlzIGFuZCBzY2hlZHVsZSBhbiB1cGRhdGUgaWYgd29yayBoYXMgb2NjdXJyZWQuXG5cbiAgICBjaGVja0ZvclVwZGF0ZXMoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZGlkVW5zdWJzY3JpYmUgPSB0cnVlO1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbZ2V0Q3VycmVudFZhbHVlLCBzdWJzY3JpYmVdKTsgLy8gUmV0dXJuIHRoZSBjdXJyZW50IHZhbHVlIGZvciBvdXIgY2FsbGVyIHRvIHVzZSB3aGlsZSByZW5kZXJpbmcuXG5cbiAgcmV0dXJuIHZhbHVlVG9SZXR1cm47XG59XG5cbmV4cG9ydHMudXNlU3Vic2NyaXB0aW9uID0gdXNlU3Vic2NyaXB0aW9uO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3VzZS1zdWJzY3JpcHRpb24ucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN1YnNjcmlwdGlvbi5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiaW1wb3J0IFwibnByb2dyZXNzL25wcm9ncmVzcy5jc3NcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuY29uc3QgVG9wUHJvZ3Jlc3NCYXIgPSBkeW5hbWljKFxyXG4gICgpID0+IHtcclxuICAgIHJldHVybiBpbXBvcnQoXCIuLi9jb21wb25lbnRzL1RvcFByb2dyZXNzQmFyXCIpO1xyXG4gIH0sXHJcbiAgeyBzc3I6IGZhbHNlIH0sXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gPD5cclxuICAgIDxUb3BQcm9ncmVzc0JhciAvPlxyXG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gIDwvPlxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==