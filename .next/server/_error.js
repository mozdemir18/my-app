"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "/_error";
exports.ids = ["/_error"];
exports.modules = {

/***/ "./node_modules/@swc/helpers/lib/_interop_require_default.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_interop_require_default.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = _interopRequireDefault;\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb2dpbi8uL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvbGliL19pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5qcz85YjdjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/lib/_interop_require_default.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _interop_require_default = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\n\nvar _react = _interop_require_default(__webpack_require__(/*! react */ \"react\"));\n\nvar _head = _interop_require_default(__webpack_require__(/*! ../shared/lib/head */ \"../shared/lib/head\"));\n\nconst statusCodes = {\n  400: 'Bad Request',\n  404: 'This page could not be found',\n  405: 'Method Not Allowed',\n  500: 'Internal Server Error'\n};\n\nfunction _getInitialProps(_ref) {\n  let {\n    res,\n    err\n  } = _ref;\n  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;\n  return {\n    statusCode\n  };\n}\n\nconst styles = {\n  error: {\n    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", \"Fira Sans\", Avenir, \"Helvetica Neue\", \"Lucida Grande\", sans-serif',\n    height: '100vh',\n    textAlign: 'center',\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center',\n    justifyContent: 'center'\n  },\n  desc: {\n    display: 'inline-block',\n    textAlign: 'left',\n    lineHeight: '49px',\n    height: '49px',\n    verticalAlign: 'middle'\n  },\n  h1: {\n    display: 'inline-block',\n    margin: 0,\n    marginRight: '20px',\n    padding: '0 23px 0 0',\n    fontSize: '24px',\n    fontWeight: 500,\n    verticalAlign: 'top',\n    lineHeight: '49px'\n  },\n  h2: {\n    fontSize: '14px',\n    fontWeight: 'normal',\n    lineHeight: '49px',\n    margin: 0,\n    padding: 0\n  }\n};\n\nvar _Component;\n\nclass Error extends (_Component = _react.default.Component) {\n  render() {\n    const {\n      statusCode,\n      withDarkMode = true\n    } = this.props;\n    const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';\n    return /*#__PURE__*/_react.default.createElement(\"div\", {\n      style: styles.error\n    }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement(\"title\", null, statusCode ? `${statusCode}: ${title}` : 'Application error: a client-side exception has occurred')), /*#__PURE__*/_react.default.createElement(\"div\", null, /*#__PURE__*/_react.default.createElement(\"style\", {\n      dangerouslySetInnerHTML: {\n        __html: `\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n\n                ${withDarkMode ? `@media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }` : ''}`\n      }\n    }), statusCode ? /*#__PURE__*/_react.default.createElement(\"h1\", {\n      className: \"next-error-h1\",\n      style: styles.h1\n    }, statusCode) : null, /*#__PURE__*/_react.default.createElement(\"div\", {\n      style: styles.desc\n    }, /*#__PURE__*/_react.default.createElement(\"h2\", {\n      style: styles.h2\n    }, this.props.title || statusCode ? title : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, \"Application error: a client-side exception has occurred (see the browser console for more information)\"), \".\"))));\n  }\n\n}\n\nError.displayName = 'ErrorPage';\nError.getInitialProps = _getInitialProps;\nError.origGetInitialProps = _getInitialProps;\nexports[\"default\"] = Error;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFDYkEsOENBQTZDO0VBQ3pDRyxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUQsa0JBQUEsR0FBa0IsS0FBSyxDQUF2Qjs7QUFDQSxJQUFJRyx3QkFBd0IsR0FBR0MsbUpBQS9COztBQUNBLElBQUlDLE1BQU0sR0FBR0Ysd0JBQXdCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFyQzs7QUFDQSxJQUFJRSxLQUFLLEdBQUdILHdCQUF3QixDQUFDQyxtQkFBTyxDQUFDLDhDQUFELENBQVIsQ0FBcEM7O0FBQ0EsTUFBTUcsV0FBVyxHQUFHO0VBQ2hCLEtBQUssYUFEVztFQUVoQixLQUFLLDhCQUZXO0VBR2hCLEtBQUssb0JBSFc7RUFJaEIsS0FBSztBQUpXLENBQXBCOztBQU1BLFNBQVNDLGdCQUFULE9BQTBDO0VBQUEsSUFBaEI7SUFBRUMsR0FBRjtJQUFRQztFQUFSLENBQWdCO0VBQ3RDLE1BQU1DLFVBQVUsR0FBR0YsR0FBRyxJQUFJQSxHQUFHLENBQUNFLFVBQVgsR0FBd0JGLEdBQUcsQ0FBQ0UsVUFBNUIsR0FBeUNELEdBQUcsR0FBR0EsR0FBRyxDQUFDQyxVQUFQLEdBQW9CLEdBQW5GO0VBQ0EsT0FBTztJQUNIQTtFQURHLENBQVA7QUFHSDs7QUFDRCxNQUFNQyxNQUFNLEdBQUc7RUFDWEMsS0FBSyxFQUFFO0lBQ0hDLFVBQVUsRUFBRSwySEFEVDtJQUVIQyxNQUFNLEVBQUUsT0FGTDtJQUdIQyxTQUFTLEVBQUUsUUFIUjtJQUlIQyxPQUFPLEVBQUUsTUFKTjtJQUtIQyxhQUFhLEVBQUUsUUFMWjtJQU1IQyxVQUFVLEVBQUUsUUFOVDtJQU9IQyxjQUFjLEVBQUU7RUFQYixDQURJO0VBVVhDLElBQUksRUFBRTtJQUNGSixPQUFPLEVBQUUsY0FEUDtJQUVGRCxTQUFTLEVBQUUsTUFGVDtJQUdGTSxVQUFVLEVBQUUsTUFIVjtJQUlGUCxN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RFgsS0FBSyxDQUFDWSxXQUFOLEdBQW9CLFdBQXBCO0FBQ0FaLEtBQUssQ0FBQ2EsZUFBTixHQUF3QnJDLGdCQUF4QjtBQUNBd0IsS0FBSyxDQUFDYyxtQkFBTixHQUE0QnRDLGdCQUE1QjtBQUNBUixrQkFBQSxHQUFrQmdDLEtBQWxCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9naW4vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcz8xOGYyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdCA9IHJlcXVpcmUoXCJAc3djL2hlbHBlcnMvbGliL19pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5qc1wiKS5kZWZhdWx0O1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9oZWFkID0gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xuY29uc3Qgc3RhdHVzQ29kZXMgPSB7XG4gICAgNDAwOiAnQmFkIFJlcXVlc3QnLFxuICAgIDQwNDogJ1RoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQnLFxuICAgIDQwNTogJ01ldGhvZCBOb3QgQWxsb3dlZCcsXG4gICAgNTAwOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJ1xufTtcbmZ1bmN0aW9uIF9nZXRJbml0aWFsUHJvcHMoeyByZXMgLCBlcnIgIH0pIHtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzICYmIHJlcy5zdGF0dXNDb2RlID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IDQwNDtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXNDb2RlXG4gICAgfTtcbn1cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBlcnJvcjoge1xuICAgICAgICBmb250RmFtaWx5OiAnLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIFwiU2Vnb2UgVUlcIiwgXCJGaXJhIFNhbnNcIiwgQXZlbmlyLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gICAgfSxcbiAgICBkZXNjOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgICAgbGluZUhlaWdodDogJzQ5cHgnLFxuICAgICAgICBoZWlnaHQ6ICc0OXB4JyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZSdcbiAgICB9LFxuICAgIGgxOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMjBweCcsXG4gICAgICAgIHBhZGRpbmc6ICcwIDIzcHggMCAwJyxcbiAgICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICAgICAgbGluZUhlaWdodDogJzQ5cHgnXG4gICAgfSxcbiAgICBoMjoge1xuICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgICAgbGluZUhlaWdodDogJzQ5cHgnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIHBhZGRpbmc6IDBcbiAgICB9XG59O1xudmFyIF9Db21wb25lbnQ7XG5jbGFzcyBFcnJvciBleHRlbmRzIChfQ29tcG9uZW50ID0gX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50KSB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1c0NvZGUgLCB3aXRoRGFya01vZGUgPXRydWUgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMucHJvcHMudGl0bGUgfHwgc3RhdHVzQ29kZXNbc3RhdHVzQ29kZV0gfHwgJ0FuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkJztcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmVycm9yXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ0aXRsZVwiLCBudWxsLCBzdGF0dXNDb2RlID8gYCR7c3RhdHVzQ29kZX06ICR7dGl0bGV9YCA6ICdBcHBsaWNhdGlvbiBlcnJvcjogYSBjbGllbnQtc2lkZSBleGNlcHRpb24gaGFzIG9jY3VycmVkJykpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwge1xuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGBcbiAgICAgICAgICAgICAgICBib2R5IHsgbWFyZ2luOiAwOyBjb2xvcjogIzAwMDsgYmFja2dyb3VuZDogI2ZmZjsgfVxuICAgICAgICAgICAgICAgIC5uZXh0LWVycm9yLWgxIHtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICR7d2l0aERhcmtNb2RlID8gYEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAgICAgICAgICAgICAgIGJvZHkgeyBjb2xvcjogI2ZmZjsgYmFja2dyb3VuZDogIzAwMDsgfVxuICAgICAgICAgICAgICAgICAgLm5leHQtZXJyb3ItaDEge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9YCA6ICcnfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksIHN0YXR1c0NvZGUgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwibmV4dC1lcnJvci1oMVwiLFxuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5oMVxuICAgICAgICB9LCBzdGF0dXNDb2RlKSA6IG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmRlc2NcbiAgICAgICAgfSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwge1xuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5oMlxuICAgICAgICB9LCB0aGlzLnByb3BzLnRpdGxlIHx8IHN0YXR1c0NvZGUgPyB0aXRsZSA6IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgXCJBcHBsaWNhdGlvbiBlcnJvcjogYSBjbGllbnQtc2lkZSBleGNlcHRpb24gaGFzIG9jY3VycmVkIChzZWUgdGhlIGJyb3dzZXIgY29uc29sZSBmb3IgbW9yZSBpbmZvcm1hdGlvbilcIiksIFwiLlwiKSkpKTtcbiAgICB9XG59XG5FcnJvci5kaXNwbGF5TmFtZSA9ICdFcnJvclBhZ2UnO1xuRXJyb3IuZ2V0SW5pdGlhbFByb3BzID0gX2dldEluaXRpYWxQcm9wcztcbkVycm9yLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzO1xuZXhwb3J0cy5kZWZhdWx0ID0gRXJyb3I7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9lcnJvci5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0IiwicmVxdWlyZSIsIl9yZWFjdCIsIl9oZWFkIiwic3RhdHVzQ29kZXMiLCJfZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZXJyIiwic3RhdHVzQ29kZSIsInN0eWxlcyIsImVycm9yIiwiZm9udEZhbWlseSIsImhlaWdodCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZGVzYyIsImxpbmVIZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwiaDEiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJoMiIsIl9Db21wb25lbnQiLCJFcnJvciIsIkNvbXBvbmVudCIsInJlbmRlciIsIndpdGhEYXJrTW9kZSIsInByb3BzIiwidGl0bGUiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNsYXNzTmFtZSIsIkZyYWdtZW50IiwiZGlzcGxheU5hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_error.js\n");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/pages/_error.js"));
module.exports = __webpack_exports__;

})();