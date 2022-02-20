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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Home() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: [\n                        \"CEP:\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"cep\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\React\\\\react-study\\\\Events-Test\\\\pages\\\\index.js\",\n                            lineNumber: 9,\n                            columnNumber: 21\n                        }, this),\n                        \"Bairro:\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"bairro\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\React\\\\react-study\\\\Events-Test\\\\pages\\\\index.js\",\n                            lineNumber: 11,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\React\\\\react-study\\\\Events-Test\\\\pages\\\\index.js\",\n                    lineNumber: 7,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\React\\\\react-study\\\\Events-Test\\\\pages\\\\index.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: async ()=>{\n                    const cep = document.getElementById('cep');\n                    console.log(cep.innerText);\n                    const url = `https://viacep.com.br/ws/60713030/json/`;\n                    const endereco = await fetch(url);\n                    const enderecojson = await endereco.json();\n                    document.getElementById('bairro').innerHTML = enderecojson.bairro;\n                },\n                children: \"Buscar\"\n            }, void 0, false, {\n                fileName: \"D:\\\\React\\\\react-study\\\\Events-Test\\\\pages\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\React\\\\react-study\\\\Events-Test\\\\pages\\\\index.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O1NBRVNBLElBQUksR0FBRyxDQUFDO0lBQ2IsTUFBTSw2RUFDREMsQ0FBRzs7d0ZBQ0NDLENBQUk7c0dBQ0FDLENBQUs7O3dCQUFDLENBRUg7b0dBQUNDLENBQUs7NEJBQUNDLElBQUksRUFBQyxDQUFNOzRCQUFDQyxFQUFFLEVBQUMsQ0FBSzs7Ozs7O3dCQUFTLENBRXBDO29HQUFDRixDQUFLOzRCQUFDQyxJQUFJLEVBQUMsQ0FBTTs0QkFBQ0MsRUFBRSxFQUFDLENBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUdyQ0MsQ0FBTTtnQkFBQ0MsT0FBTyxZQUFjLENBQUM7b0JBQzFCLEtBQUssQ0FBQ0MsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxDQUFLO29CQUN6Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNKLEdBQUcsQ0FBQ0ssU0FBUztvQkFDekIsS0FBSyxDQUFDQyxHQUFHLElBQUksdUNBQXVDO29CQUNwRCxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQ0YsR0FBRztvQkFDaEMsS0FBSyxDQUFDRyxZQUFZLEdBQUcsS0FBSyxDQUFDRixRQUFRLENBQUNHLElBQUk7b0JBQ3hDVCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxDQUFRLFNBQUVTLFNBQVMsR0FBR0YsWUFBWSxDQUFDRyxNQUFNO2dCQUNyRSxDQUFDOzBCQUFFLENBQU07Ozs7Ozs7Ozs7OztBQUdyQixDQUFDO0FBRUQsaUVBQWVyQixJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldmVudHMtdGVzdC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICBDRVA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjZXBcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIEJhaXJybzpcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImJhaXJyb1wiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2VwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NlcCcpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjZXAuaW5uZXJUZXh0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL3ZpYWNlcC5jb20uYnIvd3MvNjA3MTMwMzAvanNvbi9gO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW5kZXJlY28gPSBhd2FpdCBmZXRjaCh1cmwpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbmRlcmVjb2pzb24gPSBhd2FpdCBlbmRlcmVjby5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFpcnJvJykuaW5uZXJIVE1MID0gZW5kZXJlY29qc29uLmJhaXJyb1xyXG4gICAgICAgICAgICB9fT5CdXNjYXI8L2J1dHRvbj4gICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbIkhvbWUiLCJkaXYiLCJmb3JtIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJpZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjZXAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsImlubmVyVGV4dCIsInVybCIsImVuZGVyZWNvIiwiZmV0Y2giLCJlbmRlcmVjb2pzb24iLCJqc29uIiwiaW5uZXJIVE1MIiwiYmFpcnJvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();