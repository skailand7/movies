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

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_User_Develop_movies_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_User_Develop_movies_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_User_Develop_movies_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Cover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Cover */ \"./components/Cover.js\");\n/* harmony import */ var _components_Item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Item */ \"./components/Item.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_app.js */ \"./pages/_app.js\");\n/* harmony import */ var _components_NavList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NavList */ \"./components/NavList.js\");\n/* harmony import */ var _components_ItemList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ItemList */ \"./components/ItemList.js\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SearchBar */ \"./components/SearchBar.js\");\n/* harmony import */ var _components_SkeletonCover_SkeletonCover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SkeletonCover/SkeletonCover */ \"./components/SkeletonCover/SkeletonCover.js\");\n/* harmony import */ var _components_SkeletonSearch_SkeletonSearch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/SkeletonSearch/SkeletonSearch */ \"./components/SkeletonSearch/SkeletonSearch.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Index = function() {\n    var _this1 = _this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState([]), 2), movie = ref[0], setMovie = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"MostPopularMovies\"), 2), selection = ref1[0], setSelection = ref1[1];\n    var arrMovie = _toConsumableArray(movie);\n    arrMovie.length = 10;\n    var rnd = Math.floor(Math.random() * 5);\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function() {\n        function fetchData() {\n            return _fetchData.apply(this, arguments);\n        }\n        function _fetchData() {\n            _fetchData = _asyncToGenerator(C_Users_User_Develop_movies_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response, data, item;\n                return C_Users_User_Develop_movies_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(//`https://imdb-api.com/en/API/${selection}/k_8ervbnor`\n                            \"https://imdb-api.com/en/API/\".concat(selection, \"/k_duhu3l50\"));\n                        case 2:\n                            response = _ctx.sent;\n                            _ctx.next = 5;\n                            return response.json();\n                        case 5:\n                            data = _ctx.sent;\n                            item = data.items;\n                            setMovie(item);\n                        case 8:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _fetchData.apply(this, arguments);\n        }\n        fetchData();\n    }, [\n        selection\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"MikMovies\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossorigin: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;600;700&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\pages\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\pages\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-col bg-gray-900 justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"w-full md:w-3/4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\pages\\\\index.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, _this),\n                        movie.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Cover__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            array: arrMovie[rnd]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\pages\\\\index.js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_SkeletonCover_SkeletonCover__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\pages\\\\index.js\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_NavList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            setSelection: setSelection\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\pages\\\\index.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ItemList__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            children: movie.length > 0 ? arrMovie.map(function(item) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Item__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    item: item\n                                }, item.id, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\pages\\\\index.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 24\n                                }, _this1);\n                            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_SkeletonSearch_SkeletonSearch__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\pages\\\\index.js\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\pages\\\\index.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"w-full p-2 text-gray-500 font-semibold text-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: \"Made with tons of 💙 by Mikcode | 2022\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\pages\\\\index.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\pages\\\\index.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\pages\\\\index.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\pages\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Index, \"ttgydAKIF1Z5YrWYQIem3qdTmuk=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDZ0IsRUFBRTs7Ozs7NEJBQ3ZDLENBQUMsZ0ZBRUFqQyxrRkFBYzs7Ozs7Ozs7OztvR0FHbEI2QixDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBb0Q7a0hBQ2hFSSxDQUFDOzBDQUFDLENBQXFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEQsQ0FBQztHQS9ES2pDLEtBQUs7S0FBTEEsS0FBSztBQWlFWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBDb3ZlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3ZlclwiO1xyXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9JdGVtXCI7XHJcbmltcG9ydCBNeUFwcCBmcm9tIFwiLi9fYXBwLmpzXCI7XHJcbmltcG9ydCBOYXZMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL05hdkxpc3RcIjtcclxuaW1wb3J0IEl0ZW1MaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0l0ZW1MaXN0XCI7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoQmFyXCI7XHJcbmltcG9ydCBTa2VsZXRvbkNvdmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1NrZWxldG9uQ292ZXIvU2tlbGV0b25Db3ZlclwiO1xyXG5pbXBvcnQgU2tlbGV0b25TZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvU2tlbGV0b25TZWFyY2gvU2tlbGV0b25TZWFyY2hcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttb3ZpZSwgc2V0TW92aWVdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWxlY3Rpb24sIHNldFNlbGVjdGlvbl0gPSBSZWFjdC51c2VTdGF0ZShcIk1vc3RQb3B1bGFyTW92aWVzXCIpO1xyXG5cclxuICBjb25zdCBhcnJNb3ZpZSA9IFsuLi5tb3ZpZV07XHJcbiAgYXJyTW92aWUubGVuZ3RoID0gMTA7XHJcbiAgY29uc3Qgcm5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgLy9gaHR0cHM6Ly9pbWRiLWFwaS5jb20vZW4vQVBJLyR7c2VsZWN0aW9ufS9rXzhlcnZibm9yYFxyXG4gICAgICAgIGBodHRwczovL2ltZGItYXBpLmNvbS9lbi9BUEkvJHtzZWxlY3Rpb259L2tfZHVodTNsNTBgXHJcbiAgICAgICAgLy9gaHR0cHM6Ly9pbWRiLWFwaS5jb20vZW4vQVBJL1NlYXJjaE1vdmllL2tfZHVodTNsNTAvJHtzZWFyY2h9YFxyXG4gICAgICAgIC8vXCJ3d3cuZ29vZ2xlLmNvbVwiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBkYXRhLml0ZW1zO1xyXG5cclxuICAgICAgc2V0TW92aWUoaXRlbSk7XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbc2VsZWN0aW9uXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TWlrTW92aWVzPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiBjcm9zc29yaWdpbiAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMTAwOzQwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBiZy1ncmF5LTkwMCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTMvNFwiPlxyXG4gICAgICAgICAgPFNlYXJjaEJhciAvPlxyXG4gICAgICAgICAge21vdmllLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgIDxDb3ZlciBhcnJheT17YXJyTW92aWVbcm5kXX0gLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxTa2VsZXRvbkNvdmVyIC8+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIDxOYXZMaXN0IHNldFNlbGVjdGlvbj17c2V0U2VsZWN0aW9ufSAvPlxyXG5cclxuICAgICAgICAgIDxJdGVtTGlzdD5cclxuICAgICAgICAgICAge21vdmllLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgYXJyTW92aWUubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPEl0ZW0gaXRlbT17aXRlbX0ga2V5PXtpdGVtLmlkfSAvPjtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxTa2VsZXRvblNlYXJjaCAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9JdGVtTGlzdD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiB0ZXh0LWdyYXktNTAwIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPHA+TWFkZSB3aXRoIHRvbnMgb2Yg8J+SmSBieSBNaWtjb2RlIHwgMjAyMjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsIkNvdmVyIiwiSXRlbSIsIk15QXBwIiwiTmF2TGlzdCIsIkl0ZW1MaXN0IiwiU2VhcmNoQmFyIiwiU2tlbGV0b25Db3ZlciIsIlNrZWxldG9uU2VhcmNoIiwiSW5kZXgiLCJ1c2VTdGF0ZSIsIm1vdmllIiwic2V0TW92aWUiLCJzZWxlY3Rpb24iLCJzZXRTZWxlY3Rpb24iLCJhcnJNb3ZpZSIsImxlbmd0aCIsInJuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZGF0YSIsIml0ZW0iLCJmZXRjaCIsImpzb24iLCJpdGVtcyIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJjcm9zc29yaWdpbiIsImRpdiIsImNsYXNzTmFtZSIsImFycmF5IiwibWFwIiwiaWQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n");

/***/ })

});