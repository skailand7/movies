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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_User_Develop_movies_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_User_Develop_movies_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_User_Develop_movies_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Cover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Cover */ \"./components/Cover.js\");\n/* harmony import */ var _components_Item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Item */ \"./components/Item.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_app.js */ \"./pages/_app.js\");\n/* harmony import */ var _components_NavList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/NavList */ \"./components/NavList.js\");\n/* harmony import */ var _components_ItemList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ItemList */ \"./components/ItemList.js\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SearchBar */ \"./components/SearchBar.js\");\n/* harmony import */ var _components_SkeletonCover_SkeletonCover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SkeletonCover/SkeletonCover */ \"./components/SkeletonCover/SkeletonCover.js\");\n/* harmony import */ var _components_SkeletonSearch_SkeletonSearch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SkeletonSearch/SkeletonSearch */ \"./components/SkeletonSearch/SkeletonSearch.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Index = function() {\n    var _this1 = _this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState([]), 2), movie = ref[0], setMovie = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"red\"), 2), search = ref1[0], setSearch = ref1[1];\n    var ref2 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"MostPopularMovies\"), 2), selection = ref2[0], setSelection = ref2[1];\n    var title = \"\";\n    var changeTitle = function(newTitle) {\n        title = newTitle;\n    };\n    var arrMovie = _toConsumableArray(movie);\n    arrMovie.length = 10;\n    var rnd = Math.floor(Math.random() * 5);\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function() {\n        function fetchData() {\n            return _fetchData.apply(this, arguments);\n        }\n        function _fetchData() {\n            _fetchData = _asyncToGenerator(C_Users_User_Develop_movies_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response, data, item;\n                return C_Users_User_Develop_movies_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(//`https://imdb-api.com/en/API/${selection}/k_8ervbnor`\n                            \"https://imdb-api.com/en/API/\".concat(selection, \"/k_duhu3l50\"));\n                        case 2:\n                            response = _ctx.sent;\n                            _ctx.next = 5;\n                            return response.json();\n                        case 5:\n                            data = _ctx.sent;\n                            item = data.items;\n                            //const item = data.results;\n                            setMovie(item);\n                        case 8:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _fetchData.apply(this, arguments);\n        }\n        fetchData();\n    }, [\n        selection\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"bg-gray-900\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                setSearch: setSearch,\n                search: search,\n                changeTitle: changeTitle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\pages\\\\index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            movie.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Cover__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                array: arrMovie[rnd]\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\pages\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 27\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_SkeletonCover_SkeletonCover__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\pages\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 61\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_NavList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                setSelection: setSelection\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\pages\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ItemList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                children: movie.length > 0 ? arrMovie.map(function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Item__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        item: item\n                    }, item.id, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\pages\\\\index.js\",\n                        lineNumber: 56,\n                        columnNumber: 20\n                    }, _this1);\n                }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_SkeletonSearch_SkeletonSearch__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\pages\\\\index.js\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\pages\\\\index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Develop\\\\movies\\\\pages\\\\index.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, _this);\n};\n_s(Index, \"BZ+/9DLQ8sqvA3pIogvEbbSM81s=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDYztBQUNGO0FBQ1I7QUFDYztBQUNFO0FBQ0U7QUFDc0I7QUFDRzs7QUFFeEUsR0FBSyxDQUFDUyxLQUFLLEdBQUcsUUFBUSxHQUFGLENBQUM7OztJQUNuQixHQUFLLENBQXFCVCxHQUFrQixrQkFBbEJBLHFEQUFjLENBQUMsQ0FBQyxDQUFDLE9BQXBDVyxLQUFLLEdBQWNYLEdBQWtCLEtBQTlCWSxRQUFRLEdBQUlaLEdBQWtCO0lBQzVDLEdBQUssQ0FBdUJBLElBQXFCLGtCQUFyQkEscURBQWMsQ0FBQyxDQUFLLFdBQXpDYSxNQUFNLEdBQWViLElBQXFCLEtBQWxDYyxTQUFTLEdBQUlkLElBQXFCO0lBQ2pELEdBQUssQ0FBNkJBLElBQW1DLGtCQUFuQ0EscURBQWMsQ0FBQyxDQUFtQix5QkFBN0RlLFNBQVMsR0FBa0JmLElBQW1DLEtBQW5EZ0IsWUFBWSxHQUFJaEIsSUFBbUM7SUFDckUsR0FBRyxDQUFDaUIsS0FBSyxHQUFHLENBQUU7SUFFZCxHQUFLLENBQUNDLFdBQVcsR0FBRyxRQUFRLENBQVBDLFFBQVEsRUFBSyxDQUFDO1FBQ2pDRixLQUFLLEdBQUdFLFFBQVEsQ0FBQztJQUNuQixDQUFDO0lBRUQsR0FBSyxDQUFDQyxRQUFRLHNCQUFPVCxLQUFLO0lBQzFCUyxRQUFRLENBQUNDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDckIsR0FBSyxDQUFDQyxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sS0FBSyxDQUFDO0lBRXhDekIsc0RBQWUsQ0FBQyxRQUFRLEdBQUYsQ0FBQztpQkFDTjJCLFNBQVM7bUJBQVRBLFVBQVM7O2lCQUFUQSxVQUFTO1lBQVRBLFVBQVMsNEpBQXhCLFFBQVEsV0FBbUIsQ0FBQztvQkFDcEJDLFFBQVEsRUFNUkMsSUFBSSxFQUNKQyxJQUFJOzs7OzttQ0FQYUMsS0FBSyxDQUMxQixFQUF1RDs0QkFDdEQsQ0FBNEIsOEJBQVksTUFBVyxDQUFyQmhCLFNBQVMsRUFBQyxDQUFXOzs0QkFGaERhLFFBQVEsWUExQnBCLENBK0JPOzttQ0FDa0JBLFFBQVEsQ0FBQ0ksSUFBSTs7NEJBQTFCSCxJQUFJLFlBaENoQixDQWdDd0M7NEJBQzVCQyxJQUFJLEdBQUdELElBQUksQ0FBQ0ksS0FBSyxDQUFDOzRCQUN4QixFQUE0Qjs0QkFFNUJyQixRQUFRLENBQUNrQixJQUFJLENBQUMsQ0FBQzs7Ozs7O1lBQ2pCLENBQUM7bUJBWmNILFVBQVM7O1FBYXhCQSxTQUFTLEVBQUUsQ0FBQztJQUNkLENBQUMsRUFBRSxDQUFDWjtRQUFBQSxTQUFTO0lBQUEsQ0FBQyxDQUFDLENBQUM7SUFFaEIsTUFBTSw2RUFDSG1CLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQWE7O3dGQUN6QjdCLDZEQUFTO2dCQUNSUSxTQUFTLEVBQUVBLFNBQVM7Z0JBQ3BCRCxNQUFNLEVBQUVBLE1BQU07Z0JBQ2RLLFdBQVcsRUFBRUEsV0FBVzs7Ozs7O1lBRXpCUCxLQUFLLENBQUNVLE1BQU0sR0FBRyxDQUFDLCtFQUFJcEIseURBQUs7Z0JBQUNtQyxLQUFLLEVBQUVoQixRQUFRLENBQUNFLEdBQUc7Ozs7O29HQUFTZiwrRUFBYTs7Ozs7d0ZBRW5FSCwyREFBTztnQkFBQ1ksWUFBWSxFQUFFQSxZQUFZOzs7Ozs7d0ZBRWxDWCw0REFBUTswQkFDTk0sS0FBSyxDQUFDVSxNQUFNLEdBQUcsQ0FBQyxHQUNmRCxRQUFRLENBQUNpQixHQUFHLENBQUMsUUFBUSxDQUFQUCxJQUFJLEVBQUssQ0FBQztvQkFDdEIsTUFBTSw2RUFBRTVCLHdEQUFJO3dCQUFDNEIsSUFBSSxFQUFFQSxJQUFJO3VCQUFPQSxJQUFJLENBQUNRLEVBQUU7Ozs7O2dCQUN2QyxDQUFDLGdGQUVBOUIsa0ZBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekIsQ0FBQztHQXJES0MsS0FBSztLQUFMQSxLQUFLO0FBdURYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb3ZlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3ZlclwiO1xyXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9JdGVtXCI7XHJcbmltcG9ydCBNeUFwcCBmcm9tIFwiLi9fYXBwLmpzXCI7XHJcbmltcG9ydCBOYXZMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL05hdkxpc3RcIjtcclxuaW1wb3J0IEl0ZW1MaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0l0ZW1MaXN0XCI7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoQmFyXCI7XHJcbmltcG9ydCBTa2VsZXRvbkNvdmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1NrZWxldG9uQ292ZXIvU2tlbGV0b25Db3ZlclwiO1xyXG5pbXBvcnQgU2tlbGV0b25TZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvU2tlbGV0b25TZWFyY2gvU2tlbGV0b25TZWFyY2hcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttb3ZpZSwgc2V0TW92aWVdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSBSZWFjdC51c2VTdGF0ZShcInJlZFwiKTtcclxuICBjb25zdCBbc2VsZWN0aW9uLCBzZXRTZWxlY3Rpb25dID0gUmVhY3QudXNlU3RhdGUoXCJNb3N0UG9wdWxhck1vdmllc1wiKTtcclxuICBsZXQgdGl0bGUgPSBcIlwiO1xyXG5cclxuICBjb25zdCBjaGFuZ2VUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xyXG4gICAgdGl0bGUgPSBuZXdUaXRsZTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhcnJNb3ZpZSA9IFsuLi5tb3ZpZV07XHJcbiAgYXJyTW92aWUubGVuZ3RoID0gMTA7XHJcbiAgY29uc3Qgcm5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgLy9gaHR0cHM6Ly9pbWRiLWFwaS5jb20vZW4vQVBJLyR7c2VsZWN0aW9ufS9rXzhlcnZibm9yYFxyXG4gICAgICAgIGBodHRwczovL2ltZGItYXBpLmNvbS9lbi9BUEkvJHtzZWxlY3Rpb259L2tfZHVodTNsNTBgXHJcbiAgICAgICAgLy9gaHR0cHM6Ly9pbWRiLWFwaS5jb20vZW4vQVBJL1NlYXJjaE1vdmllL2tfZHVodTNsNTAvJHtzZWFyY2h9YFxyXG4gICAgICAgIC8vXCJ3d3cuZ29vZ2xlLmNvbVwiXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBkYXRhLml0ZW1zO1xyXG4gICAgICAvL2NvbnN0IGl0ZW0gPSBkYXRhLnJlc3VsdHM7XHJcblxyXG4gICAgICBzZXRNb3ZpZShpdGVtKTtcclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtzZWxlY3Rpb25dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS05MDBcIj5cclxuICAgICAgPFNlYXJjaEJhclxyXG4gICAgICAgIHNldFNlYXJjaD17c2V0U2VhcmNofVxyXG4gICAgICAgIHNlYXJjaD17c2VhcmNofVxyXG4gICAgICAgIGNoYW5nZVRpdGxlPXtjaGFuZ2VUaXRsZX1cclxuICAgICAgLz5cclxuICAgICAge21vdmllLmxlbmd0aCA+IDAgPyA8Q292ZXIgYXJyYXk9e2Fyck1vdmllW3JuZF19IC8+IDogPFNrZWxldG9uQ292ZXIgLz59XHJcblxyXG4gICAgICA8TmF2TGlzdCBzZXRTZWxlY3Rpb249e3NldFNlbGVjdGlvbn0gLz5cclxuXHJcbiAgICAgIDxJdGVtTGlzdD5cclxuICAgICAgICB7bW92aWUubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgIGFyck1vdmllLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPEl0ZW0gaXRlbT17aXRlbX0ga2V5PXtpdGVtLmlkfSAvPjtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxTa2VsZXRvblNlYXJjaCAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvSXRlbUxpc3Q+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvdmVyIiwiSXRlbSIsIk15QXBwIiwiTmF2TGlzdCIsIkl0ZW1MaXN0IiwiU2VhcmNoQmFyIiwiU2tlbGV0b25Db3ZlciIsIlNrZWxldG9uU2VhcmNoIiwiSW5kZXgiLCJ1c2VTdGF0ZSIsIm1vdmllIiwic2V0TW92aWUiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJzZWxlY3Rpb24iLCJzZXRTZWxlY3Rpb24iLCJ0aXRsZSIsImNoYW5nZVRpdGxlIiwibmV3VGl0bGUiLCJhcnJNb3ZpZSIsImxlbmd0aCIsInJuZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZGF0YSIsIml0ZW0iLCJmZXRjaCIsImpzb24iLCJpdGVtcyIsImRpdiIsImNsYXNzTmFtZSIsImFycmF5IiwibWFwIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});