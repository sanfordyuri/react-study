"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_React_react_study_Events_Test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_React_react_study_Events_Test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_React_react_study_Events_Test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction Home() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                    children: [\n                        \"CEP:\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"name\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\React\\\\react-study\\\\Events-Test\\\\pages\\\\index.js\",\n                            lineNumber: 9,\n                            columnNumber: 21\n                        }, this),\n                        \"Bairro:\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"bairro\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\React\\\\react-study\\\\Events-Test\\\\pages\\\\index.js\",\n                            lineNumber: 11,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\React\\\\react-study\\\\Events-Test\\\\pages\\\\index.js\",\n                    lineNumber: 7,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\React\\\\react-study\\\\Events-Test\\\\pages\\\\index.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: _asyncToGenerator(D_React_react_study_Events_Test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var url, endereco, enderecojson;\n                    return D_React_react_study_Events_Test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                url = \"https://viacep.com.br/ws/\".concat(cep, \"/json/\");\n                                _ctx.next = 3;\n                                return fetch(url);\n                            case 3:\n                                endereco = _ctx.sent;\n                                _ctx.next = 6;\n                                return endereco.json();\n                            case 6:\n                                enderecojson = _ctx.sent;\n                                document.getElementById('bairro').innerHTML = enderecojson.bairro;\n                            case 8:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                })),\n                children: \"Home\"\n            }, void 0, false, {\n                fileName: \"D:\\\\React\\\\react-study\\\\Events-Test\\\\pages\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\React\\\\react-study\\\\Events-Test\\\\pages\\\\index.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this));\n}\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFU0EsSUFBSSxHQUFHLENBQUM7SUFDYixNQUFNLDZFQUNEQyxDQUFHOzt3RkFDQ0MsQ0FBSTtzR0FDQUMsQ0FBSzs7d0JBQUMsQ0FFSDtvR0FBQ0MsQ0FBSzs0QkFBQ0MsSUFBSSxFQUFDLENBQU07NEJBQUNDLEVBQUUsRUFBQyxDQUFNOzs7Ozs7d0JBQVMsQ0FFckM7b0dBQUNGLENBQUs7NEJBQUNDLElBQUksRUFBQyxDQUFNOzRCQUFDQyxFQUFFLEVBQUMsQ0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBR3JDQyxDQUFNO2dCQUFDQyxPQUFPLCtKQUFFLFFBQVEsV0FBSSxDQUFDO3dCQUNwQkMsR0FBRyxFQUNIQyxRQUFRLEVBQ1JDLFlBQVk7Ozs7Z0NBRlpGLEdBQUcsR0FBSSxDQUF5QiwyQkFBTSxNQUFNLENBQVZHLEdBQUcsRUFBQyxDQUFNOzt1Q0FDM0JDLEtBQUssQ0FBQ0osR0FBRzs7Z0NBQTFCQyxRQUFROzt1Q0FDYUEsUUFBUSxDQUFDSSxJQUFJOztnQ0FBbENILFlBQVk7Z0NBQ2xCSSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxDQUFRLFNBQUVDLFNBQVMsR0FBR04sWUFBWSxDQUFDTyxNQUFNOzs7Ozs7Z0JBQ3JFLENBQUM7MEJBQUUsQ0FBSTs7Ozs7Ozs7Ozs7O0FBR25CLENBQUM7S0FuQlFsQixJQUFJO0FBcUJiLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIENFUDpcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIEJhaXJybzpcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImJhaXJyb1wiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vdmlhY2VwLmNvbS5ici93cy8ke2NlcH0vanNvbi9gO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW5kZXJlY28gPSBhd2FpdCBmZXRjaCh1cmwpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbmRlcmVjb2pzb24gPSBhd2FpdCBlbmRlcmVjby5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFpcnJvJykuaW5uZXJIVE1MID0gZW5kZXJlY29qc29uLmJhaXJyb1xyXG4gICAgICAgICAgICB9fT5Ib21lPC9idXR0b24+ICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJIb21lIiwiZGl2IiwiZm9ybSIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJidXR0b24iLCJvbkNsaWNrIiwidXJsIiwiZW5kZXJlY28iLCJlbmRlcmVjb2pzb24iLCJjZXAiLCJmZXRjaCIsImpzb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiYmFpcnJvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});