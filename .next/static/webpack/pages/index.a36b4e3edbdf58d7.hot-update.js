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

/***/ "./components/Cover.js":
/*!*****************************!*\
  !*** ./components/Cover.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Cover = function(param) {\n    var array = param.array;\n    var kFormatter = function kFormatter(num) {\n        return Math.abs(num) > 999 ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(0) + \"K\" : Math.sign(num) * Math.abs(num);\n    };\n    var newImage = array.image.replace(\"UX128_CR0,3,128,176_AL_.jpg\", \"Ratio0.6751_AL_.jpg\");\n    newImage = newImage.replace(\"UX128_CR0,4,128,176_AL_.jpg\", \"Ratio0.6751_AL_.jpg\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full h-[450px] lg:h-[550px] relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hidden md:block absolute right-16 bottom-0 z-30\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        width: \"200px\",\n                        height: \"300px\",\n                        alt: \"img\",\n                        src: newImage,\n                        className: \"rounded-xl\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\components\\\\Cover.js\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\components\\\\Cover.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-[#2496DD] origin-bottom -rotate-12 px-4 py-2 hidden md:block absolute right-[200px] bottom-[280px] z-30\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: \"Featured\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\components\\\\Cover.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\components\\\\Cover.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-full object-cover\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"\".concat(newImage),\n                        alt: \"img\",\n                        layout: \"fill\",\n                        className: \"w-full h-full object-fit md:object-cover brightness-[.35]\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\components\\\\Cover.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\components\\\\Cover.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute p-4 w-full bottom-0 bg-black/50 space-y-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-white font-bold text-3xl\",\n                                    children: [\n                                        array.title,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-gray-300 font-normal text-lg\",\n                                            children: [\n                                                \"(\",\n                                                array.year,\n                                                \")\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\components\\\\Cover.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\components\\\\Cover.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            className: \"h-5 w-5 text-yellow-500\",\n                                            viewBox: \"0 0 20 20\",\n                                            fill: \"currentColor\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                d: \"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\components\\\\Cover.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 17\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\components\\\\Cover.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-white\",\n                                            children: [\n                                                array.imDbRating,\n                                                \" \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"text-gray-500\",\n                                                    children: [\n                                                        \"(\",\n                                                        kFormatter(array.imDbRatingCount),\n                                                        \")\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\components\\\\Cover.js\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\components\\\\Cover.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\components\\\\Cover.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\components\\\\Cover.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-white text-xl font-bold\",\n                                    children: \"Cast:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\components\\\\Cover.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-white\",\n                                    children: array.crew\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\components\\\\Cover.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\components\\\\Cover.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\components\\\\Cover.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\components\\\\Cover.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\components\\\\Cover.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_c = Cover;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cover);\nvar _c;\n$RefreshReg$(_c, \"Cover\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNakQsQ0FBQztLQXRFSy9CLEtBQUs7QUF3RVgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvdmVyLmpzP2QzNzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmNvbnN0IENvdmVyID0gKHsgYXJyYXkgfSkgPT4ge1xyXG4gIGNvbnN0IG5ld0ltYWdlID0gYXJyYXkuaW1hZ2UucmVwbGFjZShcclxuICAgIFwiVVgxMjhfQ1IwLDMsMTI4LDE3Nl9BTF8uanBnXCIsXHJcbiAgICBcIlJhdGlvMC42NzUxX0FMXy5qcGdcIlxyXG4gICk7XHJcbiAgbmV3SW1hZ2UgPSBuZXdJbWFnZS5yZXBsYWNlKFxyXG4gICAgXCJVWDEyOF9DUjAsNCwxMjgsMTc2X0FMXy5qcGdcIixcclxuICAgIFwiUmF0aW8wLjY3NTFfQUxfLmpwZ1wiXHJcbiAgKTtcclxuICBmdW5jdGlvbiBrRm9ybWF0dGVyKG51bSkge1xyXG4gICAgcmV0dXJuIE1hdGguYWJzKG51bSkgPiA5OTlcclxuICAgICAgPyBNYXRoLnNpZ24obnVtKSAqIChNYXRoLmFicyhudW0pIC8gMTAwMCkudG9GaXhlZCgwKSArIFwiS1wiXHJcbiAgICAgIDogTWF0aC5zaWduKG51bSkgKiBNYXRoLmFicyhudW0pO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzQ1MHB4XSBsZzpoLVs1NTBweF0gcmVsYXRpdmVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9jayBhYnNvbHV0ZSByaWdodC0xNiBib3R0b20tMCB6LTMwXCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgd2lkdGg9XCIyMDBweFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjMwMHB4XCJcclxuICAgICAgICAgICAgYWx0PVwiaW1nXCJcclxuICAgICAgICAgICAgc3JjPXtuZXdJbWFnZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC14bFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMyNDk2RERdIG9yaWdpbi1ib3R0b20gLXJvdGF0ZS0xMiBweC00IHB5LTIgaGlkZGVuIG1kOmJsb2NrIGFic29sdXRlIHJpZ2h0LVsyMDBweF0gYm90dG9tLVsyODBweF0gei0zMFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5GZWF0dXJlZDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPXtgJHtuZXdJbWFnZX1gfVxyXG4gICAgICAgICAgICBhbHQ9XCJpbWdcIlxyXG4gICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtZml0IG1kOm9iamVjdC1jb3ZlciBicmlnaHRuZXNzLVsuMzVdXCJcclxuICAgICAgICAgID48L0ltYWdlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcC00IHctZnVsbCBib3R0b20tMCBiZy1ibGFjay81MCBzcGFjZS15LThcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtM3hsXCI+XHJcbiAgICAgICAgICAgICAge2FycmF5LnRpdGxlfVxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgZm9udC1ub3JtYWwgdGV4dC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgKHthcnJheS55ZWFyfSlcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LXllbGxvdy01MDBcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTkuMDQ5IDIuOTI3Yy4zLS45MjEgMS42MDMtLjkyMSAxLjkwMiAwbDEuMDcgMy4yOTJhMSAxIDAgMDAuOTUuNjloMy40NjJjLjk2OSAwIDEuMzcxIDEuMjQuNTg4IDEuODFsLTIuOCAyLjAzNGExIDEgMCAwMC0uMzY0IDEuMTE4bDEuMDcgMy4yOTJjLjMuOTIxLS43NTUgMS42ODgtMS41NCAxLjExOGwtMi44LTIuMDM0YTEgMSAwIDAwLTEuMTc1IDBsLTIuOCAyLjAzNGMtLjc4NC41Ny0xLjgzOC0uMTk3LTEuNTM5LTEuMTE4bDEuMDctMy4yOTJhMSAxIDAgMDAtLjM2NC0xLjExOEwyLjk4IDguNzJjLS43ODMtLjU3LS4zOC0xLjgxLjU4OC0xLjgxaDMuNDYxYTEgMSAwIDAwLjk1MS0uNjlsMS4wNy0zLjI5MnpcIiAvPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgIHthcnJheS5pbURiUmF0aW5nfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgKHtrRm9ybWF0dGVyKGFycmF5LmltRGJSYXRpbmdDb3VudCl9KVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14bCBmb250LWJvbGRcIj5DYXN0OjwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPnthcnJheS5jcmV3fTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ292ZXI7XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkNvdmVyIiwiYXJyYXkiLCJrRm9ybWF0dGVyIiwibnVtIiwiTWF0aCIsImFicyIsInNpZ24iLCJ0b0ZpeGVkIiwibmV3SW1hZ2UiLCJpbWFnZSIsInJlcGxhY2UiLCJzZWN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJzcmMiLCJwIiwibGF5b3V0IiwidGl0bGUiLCJzcGFuIiwieWVhciIsInN2ZyIsInhtbG5zIiwidmlld0JveCIsImZpbGwiLCJwYXRoIiwiZCIsImltRGJSYXRpbmciLCJpbURiUmF0aW5nQ291bnQiLCJjcmV3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Cover.js\n");

/***/ })

});