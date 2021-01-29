exports.ids = [0];
exports.modules = {

/***/ "./components/TopProgressBar.js":
/*!**************************************!*\
  !*** ./components/TopProgressBar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);


let timer;
let state;
let activeRequests = 0;
const delay = 250;

function load() {
  if (state === "loading") {
    return;
  }

  state = "loading";
  timer = setTimeout(function () {
    nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
  }, delay); // only show progress bar if it takes longer than the delay
}

function stop() {
  if (activeRequests > 0) {
    return;
  }

  state = "stop";
  clearTimeout(timer);
  nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
}

next_router__WEBPACK_IMPORTED_MODULE_0___default.a.events.on("routeChangeStart", load);
next_router__WEBPACK_IMPORTED_MODULE_0___default.a.events.on("routeChangeComplete", stop);
next_router__WEBPACK_IMPORTED_MODULE_0___default.a.events.on("routeChangeError", stop);
const originalFetch = window.fetch;

window.fetch = async function (...args) {
  if (activeRequests === 0) {
    load();
  }

  activeRequests++;

  try {
    const response = await originalFetch(...args);
    return response;
  } catch (error) {
    return Promise.reject(error);
  } finally {
    activeRequests -= 1;

    if (activeRequests === 0) {
      stop();
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return null;
});

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvcFByb2dyZXNzQmFyLmpzIl0sIm5hbWVzIjpbInRpbWVyIiwic3RhdGUiLCJhY3RpdmVSZXF1ZXN0cyIsImRlbGF5IiwibG9hZCIsInNldFRpbWVvdXQiLCJOUHJvZ3Jlc3MiLCJzdGFydCIsInN0b3AiLCJjbGVhclRpbWVvdXQiLCJkb25lIiwiUm91dGVyIiwiZXZlbnRzIiwib24iLCJvcmlnaW5hbEZldGNoIiwid2luZG93IiwiZmV0Y2giLCJhcmdzIiwicmVzcG9uc2UiLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFJQSxLQUFKO0FBQ0EsSUFBSUMsS0FBSjtBQUNBLElBQUlDLGNBQWMsR0FBRyxDQUFyQjtBQUNBLE1BQU1DLEtBQUssR0FBRyxHQUFkOztBQUVBLFNBQVNDLElBQVQsR0FBZ0I7QUFDZCxNQUFJSCxLQUFLLEtBQUssU0FBZCxFQUF5QjtBQUN2QjtBQUNEOztBQUVEQSxPQUFLLEdBQUcsU0FBUjtBQUVBRCxPQUFLLEdBQUdLLFVBQVUsQ0FBQyxZQUFZO0FBQzdCQyxvREFBUyxDQUFDQyxLQUFWO0FBQ0QsR0FGaUIsRUFFZkosS0FGZSxDQUFsQixDQVBjLENBU0g7QUFDWjs7QUFFRCxTQUFTSyxJQUFULEdBQWdCO0FBQ2QsTUFBSU4sY0FBYyxHQUFHLENBQXJCLEVBQXdCO0FBQ3RCO0FBQ0Q7O0FBRURELE9BQUssR0FBRyxNQUFSO0FBRUFRLGNBQVksQ0FBQ1QsS0FBRCxDQUFaO0FBQ0FNLGtEQUFTLENBQUNJLElBQVY7QUFDRDs7QUFFREMsa0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQ1QsSUFBckM7QUFDQU8sa0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3Q0wsSUFBeEM7QUFDQUcsa0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQ0wsSUFBckM7QUFFQSxNQUFNTSxhQUFhLEdBQUdDLE1BQU0sQ0FBQ0MsS0FBN0I7O0FBQ0FELE1BQU0sQ0FBQ0MsS0FBUCxHQUFlLGdCQUFnQixHQUFHQyxJQUFuQixFQUF5QjtBQUN0QyxNQUFJZixjQUFjLEtBQUssQ0FBdkIsRUFBMEI7QUFDeEJFLFFBQUk7QUFDTDs7QUFFREYsZ0JBQWM7O0FBRWQsTUFBSTtBQUNGLFVBQU1nQixRQUFRLEdBQUcsTUFBTUosYUFBYSxDQUFDLEdBQUdHLElBQUosQ0FBcEM7QUFDQSxXQUFPQyxRQUFQO0FBQ0QsR0FIRCxDQUdFLE9BQU9DLEtBQVAsRUFBYztBQUNkLFdBQU9DLE9BQU8sQ0FBQ0MsTUFBUixDQUFlRixLQUFmLENBQVA7QUFDRCxHQUxELFNBS1U7QUFDUmpCLGtCQUFjLElBQUksQ0FBbEI7O0FBQ0EsUUFBSUEsY0FBYyxLQUFLLENBQXZCLEVBQTBCO0FBQ3hCTSxVQUFJO0FBQ0w7QUFDRjtBQUNGLENBbEJEOztBQW9CZSwyRUFBWTtBQUN6QixTQUFPLElBQVA7QUFDRCxDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcclxuXHJcbmxldCB0aW1lcjtcclxubGV0IHN0YXRlO1xyXG5sZXQgYWN0aXZlUmVxdWVzdHMgPSAwO1xyXG5jb25zdCBkZWxheSA9IDI1MDtcclxuXHJcbmZ1bmN0aW9uIGxvYWQoKSB7XHJcbiAgaWYgKHN0YXRlID09PSBcImxvYWRpbmdcIikge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgc3RhdGUgPSBcImxvYWRpbmdcIjtcclxuXHJcbiAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xyXG4gIH0sIGRlbGF5KTsgLy8gb25seSBzaG93IHByb2dyZXNzIGJhciBpZiBpdCB0YWtlcyBsb25nZXIgdGhhbiB0aGUgZGVsYXlcclxufVxyXG5cclxuZnVuY3Rpb24gc3RvcCgpIHtcclxuICBpZiAoYWN0aXZlUmVxdWVzdHMgPiAwKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBzdGF0ZSA9IFwic3RvcFwiO1xyXG5cclxuICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gIE5Qcm9ncmVzcy5kb25lKCk7XHJcbn1cclxuXHJcblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIGxvYWQpO1xyXG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBzdG9wKTtcclxuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlRXJyb3JcIiwgc3RvcCk7XHJcblxyXG5jb25zdCBvcmlnaW5hbEZldGNoID0gd2luZG93LmZldGNoO1xyXG53aW5kb3cuZmV0Y2ggPSBhc3luYyBmdW5jdGlvbiAoLi4uYXJncykge1xyXG4gIGlmIChhY3RpdmVSZXF1ZXN0cyA9PT0gMCkge1xyXG4gICAgbG9hZCgpO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZlUmVxdWVzdHMrKztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgb3JpZ2luYWxGZXRjaCguLi5hcmdzKTtcclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICB9IGZpbmFsbHkge1xyXG4gICAgYWN0aXZlUmVxdWVzdHMgLT0gMTtcclxuICAgIGlmIChhY3RpdmVSZXF1ZXN0cyA9PT0gMCkge1xyXG4gICAgICBzdG9wKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBudWxsO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=