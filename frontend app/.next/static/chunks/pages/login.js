/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/login"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5C14-spotify-sangha%5Cpages%5Clogin.js&page=%2Flogin!":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5C14-spotify-sangha%5Cpages%5Clogin.js&page=%2Flogin! ***!
  \**************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/login\",\n      function () {\n        return __webpack_require__(/*! ./pages/login.js */ \"./pages/login.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/login\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1EJTNBJTVDMTQtc3BvdGlmeS1zYW5naGElNUNwYWdlcyU1Q2xvZ2luLmpzJnBhZ2U9JTJGbG9naW4hLmpzIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsMENBQWtCO0FBQ3pDO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz82NTFjIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvbG9naW5cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL2xvZ2luLmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9sb2dpblwiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5C14-spotify-sangha%5Cpages%5Clogin.js&page=%2Flogin!\n"));

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Login(param) {\n    let { providers  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center bg-black min-h-screen w-full justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-52 mb-5\",\n                src: \"https://raw.githubusercontent.com/hugoferquiroz/djspotify/main/reports/figures/logos/i3.jpg\",\n                alt: \"Spotify logo\"\n            }, void 0, false, {\n                fileName: \"D:\\\\14-spotify-sangha\\\\pages\\\\login.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"names-section\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                                children: \" Developers \"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\14-spotify-sangha\\\\pages\\\\login.js\",\n                                lineNumber: 10,\n                                columnNumber: 10\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\14-spotify-sangha\\\\pages\\\\login.js\",\n                        lineNumber: 10,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Cesar Quezada\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\14-spotify-sangha\\\\pages\\\\login.js\",\n                                lineNumber: 12,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Hugo Fernandez\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\14-spotify-sangha\\\\pages\\\\login.js\",\n                                lineNumber: 13,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Jack Cruz\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\14-spotify-sangha\\\\pages\\\\login.js\",\n                                lineNumber: 14,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Walter Pe\\xf1a\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\14-spotify-sangha\\\\pages\\\\login.js\",\n                                lineNumber: 15,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\14-spotify-sangha\\\\pages\\\\login.js\",\n                        lineNumber: 11,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\14-spotify-sangha\\\\pages\\\\login.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"This virtual DJ creates playlists based on your preferences as well as those of your friends. It utilizes artificial intelligence and the Spotify API to curate personalized playlists.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\14-spotify-sangha\\\\pages\\\\login.js\",\n                lineNumber: 19,\n                columnNumber: 5\n            }, this),\n            Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-[#18D860] text-white p-5 rounded-full\",\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(provider.id, {\n                                callbackUrl: \"/\"\n                            }),\n                        children: [\n                            \"Login with \",\n                            provider.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\14-spotify-sangha\\\\pages\\\\login.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this)\n                }, provider.name, false, {\n                    fileName: \"D:\\\\14-spotify-sangha\\\\pages\\\\login.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\14-spotify-sangha\\\\pages\\\\login.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = Login;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QjtBQUM2QjtBQUV0RCxTQUFTRSxNQUFNLEtBQWEsRUFBRTtRQUFmLEVBQUVDLFVBQVMsRUFBRSxHQUFiO0lBQ2IscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBSUQsV0FBVTtnQkFBWUUsS0FBSTtnQkFBOEZDLEtBQUk7Ozs7OzswQkFFakksOERBQUNDO2dCQUFRQyxJQUFHOztrQ0FDZCw4REFBQ0M7OzRCQUFHOzBDQUFDLDhEQUFDQzswQ0FBTzs7Ozs7Ozs7Ozs7O2tDQUNiLDhEQUFDQzs7MENBQ0MsOERBQUNDOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSU4sOERBQUNDOzBCQUFFOzs7Ozs7WUFFQUMsT0FBT0MsTUFBTSxDQUFDZCxXQUFXZSxHQUFHLENBQUMsQ0FBQ0MseUJBQzdCLDhEQUFDZjs4QkFDQyw0RUFBQ2dCO3dCQUFPZixXQUFVO3dCQUNoQmdCLFNBQVMsSUFBTXBCLHVEQUFNQSxDQUFDa0IsU0FBU1QsRUFBRSxFQUFFO2dDQUFFWSxhQUFZOzRCQUFHOzs0QkFBSTs0QkFDNUNILFNBQVNJLElBQUk7Ozs7Ozs7bUJBSG5CSixTQUFTSSxJQUFJOzs7Ozs7Ozs7OztBQVMvQjtLQTNCU3JCOztBQTZCVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dpbi5qcz84MWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgZ2V0UHJvdmlkZXJzLCBzaWduSW4gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXHJcblxyXG5mdW5jdGlvbiBMb2dpbih7IHByb3ZpZGVycyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctYmxhY2sgbWluLWgtc2NyZWVuIHctZnVsbCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICA8aW1nIGNsYXNzTmFtZT1cInctNTIgbWItNVwiIHNyYz1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9odWdvZmVycXVpcm96L2Rqc3BvdGlmeS9tYWluL3JlcG9ydHMvZmlndXJlcy9sb2dvcy9pMy5qcGdcIiBhbHQ9XCJTcG90aWZ5IGxvZ29cIiAvPlxyXG4gICAgICBcclxuICAgICAgPHNlY3Rpb24gaWQ9XCJuYW1lcy1zZWN0aW9uXCI+XHJcbiAgICA8aDI+IDxjZW50ZXI+IERldmVsb3BlcnMgPC9jZW50ZXI+PC9oMj5cclxuICAgIDx1bD5cclxuICAgICAgPGxpPkNlc2FyIFF1ZXphZGE8L2xpPlxyXG4gICAgICA8bGk+SHVnbyBGZXJuYW5kZXo8L2xpPlxyXG4gICAgICA8bGk+SmFjayBDcnV6PC9saT5cclxuICAgICAgPGxpPldhbHRlciBQZcOxYTwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvc2VjdGlvbj5cclxuXHJcbiAgICA8cD5UaGlzIHZpcnR1YWwgREogY3JlYXRlcyBwbGF5bGlzdHMgYmFzZWQgb24geW91ciBwcmVmZXJlbmNlcyBhcyB3ZWxsIGFzIHRob3NlIG9mIHlvdXIgZnJpZW5kcy4gSXQgdXRpbGl6ZXMgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UgYW5kIHRoZSBTcG90aWZ5IEFQSSB0byBjdXJhdGUgcGVyc29uYWxpemVkIHBsYXlsaXN0cy48L3A+XHJcblxyXG4gICAgICB7T2JqZWN0LnZhbHVlcyhwcm92aWRlcnMpLm1hcCgocHJvdmlkZXIpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17cHJvdmlkZXIubmFtZX0+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLVsjMThEODYwXSB0ZXh0LXdoaXRlIHAtNSByb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWduSW4ocHJvdmlkZXIuaWQsIHsgY2FsbGJhY2tVcmw6XCIvXCJ9KX0+XHJcbiAgICAgICAgICAgIExvZ2luIHdpdGgge3Byb3ZpZGVyLm5hbWV9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgcHJvdmlkZXJzID0gYXdhaXQgZ2V0UHJvdmlkZXJzKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwcm92aWRlcnNcclxuICAgIH1cclxuICB9XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJzaWduSW4iLCJMb2dpbiIsInByb3ZpZGVycyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsInNlY3Rpb24iLCJpZCIsImgyIiwiY2VudGVyIiwidWwiLCJsaSIsInAiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJwcm92aWRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjYWxsYmFja1VybCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5C14-spotify-sangha%5Cpages%5Clogin.js&page=%2Flogin!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);