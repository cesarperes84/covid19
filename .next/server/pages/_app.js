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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/CovidStatsContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/CovidStatsContext.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CovidStatsContext\": () => (/* binding */ CovidStatsContext),\n/* harmony export */   \"CovidStatsProvider\": () => (/* binding */ CovidStatsProvider),\n/* harmony export */   \"useCovidStatsContext\": () => (/* binding */ useCovidStatsContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_contentServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/contentServices */ \"./src/services/contentServices.js\");\n/* harmony import */ var _initialStateCovidStats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initialStateCovidStats */ \"./src/contexts/initialStateCovidStats.tsx\");\n/* harmony import */ var _reducers_reducersCovidStats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/reducersCovidStats */ \"./src/reducers/reducersCovidStats.ts\");\n\n\n\n\n\nconst CovidStatsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    ..._initialStateCovidStats__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    dispatchCovidStats: ({})=>{},\n    loadData: ()=>{},\n    loadTotalData: ()=>{}\n});\nconst CovidStatsProvider = ({ children  })=>{\n    const { 0: state , 1: dispatchCovidStats  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducers_reducersCovidStats__WEBPACK_IMPORTED_MODULE_4__.reducer, _initialStateCovidStats__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    const loadData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        dispatchCovidStats({\n            type: _reducers_reducersCovidStats__WEBPACK_IMPORTED_MODULE_4__.Types.SetStatusResult,\n            payload: \"loading\"\n        });\n        (0,_services_contentServices__WEBPACK_IMPORTED_MODULE_2__.getStats)().then((response)=>{\n            dispatchCovidStats({\n                type: _reducers_reducersCovidStats__WEBPACK_IMPORTED_MODULE_4__.Types.SetResults,\n                payload: response.data\n            });\n        }).catch(()=>{\n            dispatchCovidStats({\n                type: _reducers_reducersCovidStats__WEBPACK_IMPORTED_MODULE_4__.Types.SetStatusResult,\n                payload: \"error\"\n            });\n        });\n    }, []);\n    const loadTotalData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        dispatchCovidStats({\n            type: _reducers_reducersCovidStats__WEBPACK_IMPORTED_MODULE_4__.Types.SetStatusTotalResults,\n            payload: \"loading\"\n        });\n        (0,_services_contentServices__WEBPACK_IMPORTED_MODULE_2__.getDailyStats)().then((response)=>{\n            dispatchCovidStats({\n                type: _reducers_reducersCovidStats__WEBPACK_IMPORTED_MODULE_4__.Types.SetTotalResults,\n                payload: response.data\n            });\n        }).catch(()=>{\n            dispatchCovidStats({\n                type: _reducers_reducersCovidStats__WEBPACK_IMPORTED_MODULE_4__.Types.SetStatusTotalResults,\n                payload: \"error\"\n            });\n        });\n    }, []);\n    const providerValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            ...state,\n            dispatchCovidStats,\n            loadData,\n            loadTotalData\n        })\n    , [\n        loadTotalData,\n        state\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CovidStatsContext.Provider, {\n        value: providerValue,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/cesar.peres/Desktop/Projetos/covid19/src/contexts/CovidStatsContext.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\nconst useCovidStatsContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CovidStatsContext)\n;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQ292aWRTdGF0c0NvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErRjtBQUsxRDtBQUVlO0FBQ21DO0FBVXZGLE1BQU1VLGlCQUFpQixpQkFBR1Ysb0RBQWEsQ0FBd0I7SUFDM0QsR0FBR08sK0RBQVk7SUFDZkksa0JBQWtCLEVBQUUsQ0FBQyxFQUFHLEdBQUssRUFBRztJQUNoQ0MsUUFBUSxFQUFFLElBQU0sRUFBRztJQUNuQkMsYUFBYSxFQUFFLElBQU0sRUFBRztDQUN6QixDQUFxQztBQUV4QyxNQUFNQyxrQkFBa0IsR0FBRyxDQUFDLEVBQUNDLFFBQVEsR0FBUSxHQUFrQjtJQUM3RCxNQUFNLEVBMUJSLEdBMEJTQyxLQUFLLEdBMUJkLEdBMEJnQkwsa0JBQWtCLE1BQUlSLGlEQUFVLENBQUNLLGlFQUFPLEVBQUVELCtEQUFZLENBQUM7SUFFckUsTUFBTUssUUFBUSxHQUFHUixrREFBVyxDQUFDLElBQU07UUFDbENPLGtCQUFrQixDQUFDO1lBQUVNLElBQUksRUFBRVIsK0VBQXFCO1lBQUVVLE9BQU8sRUFBRSxTQUFTO1NBQUUsQ0FBQyxDQUFDO1FBQ3ZFZCxtRUFBUSxFQUFFLENBQ1BlLElBQUksQ0FBQyxDQUFDQyxRQUF3QixHQUFLO1lBQ2xDVixrQkFBa0IsQ0FBQztnQkFBRU0sSUFBSSxFQUFFUiwwRUFBZ0I7Z0JBQUVVLE9BQU8sRUFBRUUsUUFBUSxDQUFDRSxJQUFJO2FBQUcsQ0FBQyxDQUFDO1NBQ3pFLENBQUMsQ0FDREMsS0FBSyxDQUFDLElBQU07WUFDWGIsa0JBQWtCLENBQUM7Z0JBQUVNLElBQUksRUFBRVIsK0VBQXFCO2dCQUFFVSxPQUFPLEVBQUUsT0FBTzthQUFFLENBQUMsQ0FBQztTQUN2RSxDQUFDLENBQUM7S0FDTixFQUFFLEVBQUUsQ0FBQztJQUVOLE1BQU1OLGFBQWEsR0FBR1Qsa0RBQVcsQ0FBQyxJQUFNO1FBQ3RDTyxrQkFBa0IsQ0FBQztZQUFFTSxJQUFJLEVBQUVSLHFGQUEyQjtZQUFFVSxPQUFPLEVBQUUsU0FBUztTQUFFLENBQUMsQ0FBQztRQUM5RWIsd0VBQWEsRUFBRSxDQUNaYyxJQUFJLENBQUMsQ0FBQ0MsUUFBd0IsR0FBSztZQUNsQ1Ysa0JBQWtCLENBQUM7Z0JBQUVNLElBQUksRUFBRVIsK0VBQXFCO2dCQUFFVSxPQUFPLEVBQUVFLFFBQVEsQ0FBQ0UsSUFBSTthQUFHLENBQUMsQ0FBQztTQUM5RSxDQUFDLENBQ0RDLEtBQUssQ0FBQyxJQUFNO1lBQ1hiLGtCQUFrQixDQUFDO2dCQUFFTSxJQUFJLEVBQUVSLHFGQUEyQjtnQkFBRVUsT0FBTyxFQUFFLE9BQU87YUFBRSxDQUFDLENBQUM7U0FDN0UsQ0FBQyxDQUFDO0tBQ04sRUFBRSxFQUFFLENBQUM7SUFHTixNQUFNUSxhQUFhLEdBQUd6Qiw4Q0FBTyxDQUFDLElBQU0sQ0FBQztZQUNuQyxHQUFHYyxLQUFLO1lBQ1JMLGtCQUFrQjtZQUNsQkMsUUFBUTtZQUNSQyxhQUFhO1NBQ2QsQ0FBQztJQUFBLEVBQUU7UUFBQ0EsYUFBYTtRQUFFRyxLQUFLO0tBQUMsQ0FBQztJQUUzQixxQkFDRSw4REFBQ04saUJBQWlCLENBQUNrQixRQUFRO1FBQ3pCQyxLQUFLLEVBQUVGLGFBQWE7a0JBRW5CWixRQUFROzs7OztpQkFDa0IsQ0FDN0I7Q0FDSDtBQUVNLE1BQU1lLG9CQUFvQixHQUFHLElBQTZCN0IsaURBQVUsQ0FBQ1MsaUJBQWlCLENBQUM7QUFBQSxDQUFDO0FBRTlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL0NvdmlkU3RhdHNDb250ZXh0LnRzeD82MDZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZU1lbW8sIHVzZVJlZHVjZXIsIERpc3BhdGNoLCB1c2VDYWxsYmFjaywgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gIGdldFN0YXRzLFxuICBnZXREYWlseVN0YXRzLFxufSBmcm9tICcuLi9zZXJ2aWNlcy9jb250ZW50U2VydmljZXMnO1xuXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlQ292aWRTdGF0cyc7XG5pbXBvcnQgeyBBY3Rpb25UeXBlLCByZWR1Y2VyLCBTdGF0ZVR5cGUsIFR5cGVzIH0gZnJvbSAnLi4vcmVkdWNlcnMvcmVkdWNlcnNDb3ZpZFN0YXRzJztcbmludGVyZmFjZSBDb3ZpZFN0YXRzQ29udGV4dERhdGEgZXh0ZW5kcyBTdGF0ZVR5cGUge1xuICBkaXNwYXRjaENvdmlkU3RhdHM6IERpc3BhdGNoPEFjdGlvblR5cGU+LFxuICBsb2FkRGF0YTogYW55LFxuICBsb2FkVG90YWxEYXRhOiBhbnksXG59O1xuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuY29uc3QgQ292aWRTdGF0c0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PENvdmlkU3RhdHNDb250ZXh0RGF0YT4oe1xuICAgIC4uLmluaXRpYWxTdGF0ZSxcbiAgICBkaXNwYXRjaENvdmlkU3RhdHM6ICh7IH0pID0+IHsgfSxcbiAgICBsb2FkRGF0YTogKCkgPT4geyB9LFxuICAgIGxvYWRUb3RhbERhdGE6ICgpID0+IHsgfSxcbiAgfSBhcyB1bmtub3duIGFzIENvdmlkU3RhdHNDb250ZXh0RGF0YSk7XG5cbmNvbnN0IENvdmlkU3RhdHNQcm92aWRlciA9ICh7Y2hpbGRyZW59OiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaENvdmlkU3RhdHNdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuXG4gIGNvbnN0IGxvYWREYXRhID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgZGlzcGF0Y2hDb3ZpZFN0YXRzKHsgdHlwZTogVHlwZXMuU2V0U3RhdHVzUmVzdWx0LCBwYXlsb2FkOiAnbG9hZGluZycgfSk7XG4gICAgZ2V0U3RhdHMoKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlOiB7IGRhdGE6IGFueTsgfSkgPT4ge1xuICAgICAgICBkaXNwYXRjaENvdmlkU3RhdHMoeyB0eXBlOiBUeXBlcy5TZXRSZXN1bHRzLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaENvdmlkU3RhdHMoeyB0eXBlOiBUeXBlcy5TZXRTdGF0dXNSZXN1bHQsIHBheWxvYWQ6ICdlcnJvcicgfSk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGxvYWRUb3RhbERhdGEgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2hDb3ZpZFN0YXRzKHsgdHlwZTogVHlwZXMuU2V0U3RhdHVzVG90YWxSZXN1bHRzLCBwYXlsb2FkOiAnbG9hZGluZycgfSk7XG4gICAgZ2V0RGFpbHlTdGF0cygpXG4gICAgICAudGhlbigocmVzcG9uc2U6IHsgZGF0YTogYW55OyB9KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoQ292aWRTdGF0cyh7IHR5cGU6IFR5cGVzLlNldFRvdGFsUmVzdWx0cywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YSAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2hDb3ZpZFN0YXRzKHsgdHlwZTogVHlwZXMuU2V0U3RhdHVzVG90YWxSZXN1bHRzLCBwYXlsb2FkOiAnZXJyb3InIH0pO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuXG4gIGNvbnN0IHByb3ZpZGVyVmFsdWUgPSB1c2VNZW1vKCgpID0+ICh7XG4gICAgLi4uc3RhdGUsXG4gICAgZGlzcGF0Y2hDb3ZpZFN0YXRzLFxuICAgIGxvYWREYXRhLFxuICAgIGxvYWRUb3RhbERhdGEsXG4gIH0pLCBbbG9hZFRvdGFsRGF0YSwgc3RhdGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxDb3ZpZFN0YXRzQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3Byb3ZpZGVyVmFsdWV9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ292aWRTdGF0c0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCB1c2VDb3ZpZFN0YXRzQ29udGV4dCA9ICgpOiBDb3ZpZFN0YXRzQ29udGV4dERhdGEgPT4gdXNlQ29udGV4dChDb3ZpZFN0YXRzQ29udGV4dCk7XG5cbmV4cG9ydCB7IENvdmlkU3RhdHNQcm92aWRlciwgQ292aWRTdGF0c0NvbnRleHQgfTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZU1lbW8iLCJ1c2VSZWR1Y2VyIiwidXNlQ2FsbGJhY2siLCJnZXRTdGF0cyIsImdldERhaWx5U3RhdHMiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VyIiwiVHlwZXMiLCJDb3ZpZFN0YXRzQ29udGV4dCIsImRpc3BhdGNoQ292aWRTdGF0cyIsImxvYWREYXRhIiwibG9hZFRvdGFsRGF0YSIsIkNvdmlkU3RhdHNQcm92aWRlciIsImNoaWxkcmVuIiwic3RhdGUiLCJ0eXBlIiwiU2V0U3RhdHVzUmVzdWx0IiwicGF5bG9hZCIsInRoZW4iLCJyZXNwb25zZSIsIlNldFJlc3VsdHMiLCJkYXRhIiwiY2F0Y2giLCJTZXRTdGF0dXNUb3RhbFJlc3VsdHMiLCJTZXRUb3RhbFJlc3VsdHMiLCJwcm92aWRlclZhbHVlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUNvdmlkU3RhdHNDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/CovidStatsContext.tsx\n");

/***/ }),

/***/ "./src/contexts/initialStateCovidStats.tsx":
/*!*************************************************!*\
  !*** ./src/contexts/initialStateCovidStats.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initialState = {\n    total: [],\n    results: [],\n    statusTotal: \"unloaded\",\n    statusResult: \"unloaded\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialState);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvaW5pdGlhbFN0YXRlQ292aWRTdGF0cy50c3guanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFlBQVksR0FBRztJQUNuQkMsS0FBSyxFQUFFLEVBQUU7SUFDVEMsT0FBTyxFQUFFLEVBQUU7SUFDWEMsV0FBVyxFQUFFLFVBQVU7SUFDdkJDLFlBQVksRUFBRSxVQUFVO0NBQ3pCO0FBRUMsaUVBQWVKLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9pbml0aWFsU3RhdGVDb3ZpZFN0YXRzLnRzeD9lZDhiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdG90YWw6IFtdLFxuICByZXN1bHRzOiBbXSxcbiAgc3RhdHVzVG90YWw6ICd1bmxvYWRlZCcsXG4gIHN0YXR1c1Jlc3VsdDogJ3VubG9hZGVkJyxcbn07XG5cbiAgZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFN0YXRlO1xuIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInRvdGFsIiwicmVzdWx0cyIsInN0YXR1c1RvdGFsIiwic3RhdHVzUmVzdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/initialStateCovidStats.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_CovidStatsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/CovidStatsContext */ \"./src/contexts/CovidStatsContext.tsx\");\n/* harmony import */ var _fontsource_roboto_300_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fontsource/roboto/300.css */ \"./node_modules/@fontsource/roboto/300.css\");\n/* harmony import */ var _fontsource_roboto_300_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto_300_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fontsource_roboto_400_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fontsource/roboto/400.css */ \"./node_modules/@fontsource/roboto/400.css\");\n/* harmony import */ var _fontsource_roboto_400_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto_400_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _fontsource_roboto_500_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fontsource/roboto/500.css */ \"./node_modules/@fontsource/roboto/500.css\");\n/* harmony import */ var _fontsource_roboto_500_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto_500_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _fontsource_roboto_700_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fontsource/roboto/700.css */ \"./node_modules/@fontsource/roboto/700.css\");\n/* harmony import */ var _fontsource_roboto_700_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto_700_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _utility_createEmotionCache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utility/createEmotionCache */ \"./src/utility/createEmotionCache.ts\");\n/* harmony import */ var _styles_theme_darkThemeOptions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/theme/darkThemeOptions */ \"./src/styles/theme/darkThemeOptions.ts\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\nconst clientSideEmotionCache = (0,_utility_createEmotionCache__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\nconst darkTheme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.createTheme)(_styles_theme_darkThemeOptions__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\nconst MyApp = (props)=>{\n    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.CacheProvider, {\n        value: emotionCache,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n            theme: darkTheme,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CssBaseline, {}, void 0, false, {\n                    fileName: \"/Users/cesar.peres/Desktop/Projetos/covid19/src/pages/_app.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_CovidStatsContext__WEBPACK_IMPORTED_MODULE_4__.CovidStatsProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/cesar.peres/Desktop/Projetos/covid19/src/pages/_app.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/cesar.peres/Desktop/Projetos/covid19/src/pages/_app.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/cesar.peres/Desktop/Projetos/covid19/src/pages/_app.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/cesar.peres/Desktop/Projetos/covid19/src/pages/_app.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBRThCO0FBQ1c7QUFDTDtBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUUyQjtBQUNDO0FBQ2pDO0FBSy9CLE1BQU1RLHNCQUFzQixHQUFHRix1RUFBa0IsRUFBRTtBQUVuRCxNQUFNRyxTQUFTLEdBQUdMLDBEQUFXLENBQUNHLHVFQUFnQixDQUFDO0FBRS9DLE1BQU1HLEtBQUssR0FBd0MsQ0FBQ0MsS0FBSyxHQUFLO0lBQzVELE1BQU0sRUFBRUMsU0FBUyxHQUFFQyxZQUFZLEVBQUdMLHNCQUFzQixHQUFFTSxTQUFTLEdBQUUsR0FBR0gsS0FBSztJQUU3RSxxQkFDRSw4REFBQ1YseURBQWE7UUFBQ2MsS0FBSyxFQUFFRixZQUFZO2tCQUNoQyw0RUFBQ1gsd0RBQWE7WUFBQ2MsS0FBSyxFQUFFUCxTQUFTOzs4QkFDN0IsOERBQUNOLHNEQUFXOzs7OzZCQUFHOzhCQUNmLDhEQUFDRSwyRUFBa0I7OEJBQ2pCLDRFQUFDTyxTQUFTO3dCQUFFLEdBQUdFLFNBQVM7Ozs7O2lDQUFJOzs7Ozs2QkFDVDs7Ozs7O3FCQUNQOzs7OztpQkFDRixDQUNoQjtDQUNIO0FBRUQsaUVBQWVKLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBDYWNoZVByb3ZpZGVyLCBFbW90aW9uQ2FjaGUgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBDc3NCYXNlbGluZSwgY3JlYXRlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCB7IENvdmlkU3RhdHNQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHRzL0NvdmlkU3RhdHNDb250ZXh0JztcblxuaW1wb3J0ICdAZm9udHNvdXJjZS9yb2JvdG8vMzAwLmNzcyc7XG5pbXBvcnQgJ0Bmb250c291cmNlL3JvYm90by80MDAuY3NzJztcbmltcG9ydCAnQGZvbnRzb3VyY2Uvcm9ib3RvLzUwMC5jc3MnO1xuaW1wb3J0ICdAZm9udHNvdXJjZS9yb2JvdG8vNzAwLmNzcyc7XG5cbmltcG9ydCBjcmVhdGVFbW90aW9uQ2FjaGUgZnJvbSAnLi4vdXRpbGl0eS9jcmVhdGVFbW90aW9uQ2FjaGUnO1xuaW1wb3J0IGRhcmtUaGVtZU9wdGlvbnMgZnJvbSAnLi4vc3R5bGVzL3RoZW1lL2RhcmtUaGVtZU9wdGlvbnMnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW50ZXJmYWNlIE15QXBwUHJvcHMgZXh0ZW5kcyBBcHBQcm9wcyB7XG4gIGVtb3Rpb25DYWNoZT86IEVtb3Rpb25DYWNoZTtcbn1cblxuY29uc3QgY2xpZW50U2lkZUVtb3Rpb25DYWNoZSA9IGNyZWF0ZUVtb3Rpb25DYWNoZSgpO1xuXG5jb25zdCBkYXJrVGhlbWUgPSBjcmVhdGVUaGVtZShkYXJrVGhlbWVPcHRpb25zKTtcblxuY29uc3QgTXlBcHA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PE15QXBwUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgQ29tcG9uZW50LCBlbW90aW9uQ2FjaGUgPSBjbGllbnRTaWRlRW1vdGlvbkNhY2hlLCBwYWdlUHJvcHMgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPENhY2hlUHJvdmlkZXIgdmFsdWU9e2Vtb3Rpb25DYWNoZX0+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17ZGFya1RoZW1lfT5cbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgIDxDb3ZpZFN0YXRzUHJvdmlkZXI+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0NvdmlkU3RhdHNQcm92aWRlcj5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L0NhY2hlUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhY2hlUHJvdmlkZXIiLCJUaGVtZVByb3ZpZGVyIiwiQ3NzQmFzZWxpbmUiLCJjcmVhdGVUaGVtZSIsIkNvdmlkU3RhdHNQcm92aWRlciIsImNyZWF0ZUVtb3Rpb25DYWNoZSIsImRhcmtUaGVtZU9wdGlvbnMiLCJjbGllbnRTaWRlRW1vdGlvbkNhY2hlIiwiZGFya1RoZW1lIiwiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsImVtb3Rpb25DYWNoZSIsInBhZ2VQcm9wcyIsInZhbHVlIiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/reducers/reducersCovidStats.ts":
/*!********************************************!*\
  !*** ./src/reducers/reducersCovidStats.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Types\": () => (/* binding */ Types),\n/* harmony export */   \"reducer\": () => (/* binding */ reducer)\n/* harmony export */ });\nvar Types;\n(function(Types) {\n    Types[\"SetTotalResults\"] = \"setTotalResults\";\n    Types[\"SetStatusTotalResults\"] = \"setStatusTotalResults\";\n    Types[\"SetStatusResult\"] = \"setStatusResult\";\n    Types[\"SetResults\"] = \"SetResults\";\n})(Types || (Types = {}));\nfunction reducer(state, action) {\n    switch(action.type){\n        case Types.SetResults:\n            return {\n                ...state,\n                results: action.payload,\n                statusResult: \"loaded\"\n            };\n        case Types.SetTotalResults:\n            return {\n                ...state,\n                total: action.payload,\n                statusTotal: \"loaded\"\n            };\n        case Types.SetStatusTotalResults:\n            return {\n                ...state,\n                statusTotal: action.payload\n            };\n        case Types.SetStatusResult:\n            return {\n                ...state,\n                statusResult: action.payload\n            };\n        default:\n            throw new Error(`Unhandled  action type ${action.type}`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvcmVkdWNlcnNDb3ZpZFN0YXRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sU0FLTjtVQUxXQSxLQUFLO0lBQUxBLEtBQUssQ0FDZkMsaUJBQWUsSUFBRyxpQkFBaUI7SUFEekJELEtBQUssQ0FFZkUsdUJBQXFCLElBQUcsdUJBQXVCO0lBRnJDRixLQUFLLENBR2ZHLGlCQUFlLElBQUcsaUJBQWlCO0lBSHpCSCxLQUFLLENBSWZJLFlBQVUsSUFBVkEsWUFBVTtHQUpBSixLQUFLLEtBQUxBLEtBQUs7QUFvQ1YsU0FBU0ssT0FBTyxDQUFDQyxLQUFnQixFQUFFQyxNQUFrQixFQUFFO0lBQzFELE9BQVFBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNqQixLQUFLUixLQUFLLENBQUNJLFVBQVU7WUFDbkIsT0FBTztnQkFDTCxHQUFHRSxLQUFLO2dCQUNSRyxPQUFPLEVBQUVGLE1BQU0sQ0FBQ0csT0FBTztnQkFDdkJDLFlBQVksRUFBRSxRQUFRO2FBQ3ZCLENBQUM7UUFDSixLQUFLWCxLQUFLLENBQUNDLGVBQWU7WUFDeEIsT0FBTztnQkFDTCxHQUFHSyxLQUFLO2dCQUNSTSxLQUFLLEVBQUVMLE1BQU0sQ0FBQ0csT0FBTztnQkFDckJHLFdBQVcsRUFBRSxRQUFRO2FBQ3JCLENBQUM7UUFDTCxLQUFLYixLQUFLLENBQUNFLHFCQUFxQjtZQUM5QixPQUFPO2dCQUNMLEdBQUdJLEtBQUs7Z0JBQ1JPLFdBQVcsRUFBRU4sTUFBTSxDQUFDRyxPQUFPO2FBQzNCLENBQUM7UUFDTCxLQUFLVixLQUFLLENBQUNHLGVBQWU7WUFDeEIsT0FBTztnQkFDTCxHQUFHRyxLQUFLO2dCQUNSSyxZQUFZLEVBQUVKLE1BQU0sQ0FBQ0csT0FBTzthQUM1QixDQUFDO1FBQ0w7WUFDRSxNQUFNLElBQUlJLEtBQUssQ0FBQyxDQUFDLHVCQUF1QixFQUFFUCxNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDM0Q7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9yZWR1Y2Vyc0NvdmlkU3RhdHMudHM/MzYyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBUeXBlcyB7XG4gIFNldFRvdGFsUmVzdWx0cyA9IFwic2V0VG90YWxSZXN1bHRzXCIsXG4gIFNldFN0YXR1c1RvdGFsUmVzdWx0cyA9IFwic2V0U3RhdHVzVG90YWxSZXN1bHRzXCIsXG4gIFNldFN0YXR1c1Jlc3VsdCA9IFwic2V0U3RhdHVzUmVzdWx0XCIsXG4gIFNldFJlc3VsdHMgPSBcIlNldFJlc3VsdHNcIixcbn1cblxuZXhwb3J0IHR5cGUgUmVzdWx0VHlwZSA9IHtcbiAgc3RhdGU6IHN0cmluZztcbiAgbmV3Q2FzZXM6IHN0cmluZztcbiAgdG90YWxDYXNlczogc3RyaW5nO1xuICBuZXdEZWF0aHM6IHN0cmluZztcbiAgZGVhdGhzOiBzdHJpbmc7XG4gIHZhY2NpbmF0ZWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgVG90YWxUeXBlID0ge1xuICBuZXdDYXNlczogc3RyaW5nO1xuICB0b3RhbENhc2VzOiBzdHJpbmc7XG4gIG5ld0RlYXRoczogc3RyaW5nO1xuICBkZWF0aHM6IHN0cmluZztcbiAgdmFjY2luYXRlZDogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBTdGF0ZVR5cGUgPSB7XG4gIHRvdGFsOiBUb3RhbFR5cGVbXTtcbiAgcmVzdWx0czogUmVzdWx0VHlwZVtdO1xuICBzdGF0dXNUb3RhbDogc3RyaW5nO1xuICBzdGF0dXNSZXN1bHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgQWN0aW9uVHlwZSA9IHtcbiAgdHlwZTogVHlwZXMsXG4gIHBheWxvYWQ/OiBhbnksXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlOiBTdGF0ZVR5cGUsIGFjdGlvbjogQWN0aW9uVHlwZSkge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgVHlwZXMuU2V0UmVzdWx0czpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICByZXN1bHRzOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICBzdGF0dXNSZXN1bHQ6ICdsb2FkZWQnLFxuICAgICAgICB9O1xuICAgICAgY2FzZSBUeXBlcy5TZXRUb3RhbFJlc3VsdHM6XG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIHRvdGFsOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICBzdGF0dXNUb3RhbDogJ2xvYWRlZCcsXG4gICAgICAgICB9O1xuICAgICAgY2FzZSBUeXBlcy5TZXRTdGF0dXNUb3RhbFJlc3VsdHM6XG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIHN0YXR1c1RvdGFsOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgIH07XG4gICAgICBjYXNlIFR5cGVzLlNldFN0YXR1c1Jlc3VsdDpcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgc3RhdHVzUmVzdWx0OiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkICBhY3Rpb24gdHlwZSAke2FjdGlvbi50eXBlfWApXG4gICAgfVxuICB9O1xuIl0sIm5hbWVzIjpbIlR5cGVzIiwiU2V0VG90YWxSZXN1bHRzIiwiU2V0U3RhdHVzVG90YWxSZXN1bHRzIiwiU2V0U3RhdHVzUmVzdWx0IiwiU2V0UmVzdWx0cyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJyZXN1bHRzIiwicGF5bG9hZCIsInN0YXR1c1Jlc3VsdCIsInRvdGFsIiwic3RhdHVzVG90YWwiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/reducers/reducersCovidStats.ts\n");

/***/ }),

/***/ "./src/services/contentServices.js":
/*!*****************************************!*\
  !*** ./src/services/contentServices.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDailyStats\": () => (/* binding */ getDailyStats),\n/* harmony export */   \"getStats\": () => (/* binding */ getStats)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getStats = ()=>axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${\"https://private-web-api.vercel.app/api\"}/stats`)\n;\nconst getDailyStats = ()=>axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${\"https://private-web-api.vercel.app/api\"}/daily-stats`)\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvY29udGVudFNlcnZpY2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEI7QUFFbkIsTUFBTUMsUUFBUSxHQUFJLElBQ3RCRCxnREFBUyxDQUFDLENBQUMsRUFBRUcsd0NBQStCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFBQSxDQUFDO0FBRWxELE1BQU1HLGFBQWEsR0FBRyxJQUMzQk4sZ0RBQVMsQ0FBQyxDQUFDLEVBQUVHLHdDQUErQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQUEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9jb250ZW50U2VydmljZXMuanM/NjFhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdHMgPSAgKCkgPT4gLy8gcmVzcG9uc2VMb2FkRGF0YTtcbiAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9zdGF0c2ApO1xuXG5leHBvcnQgY29uc3QgZ2V0RGFpbHlTdGF0cyA9ICgpID0+IC8vIHJlc3BvbnNlTG9hZFRvdGFsRGF0YTtcbiAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2RhaWx5LXN0YXRzYCk7XG4gICJdLCJuYW1lcyI6WyJheGlvcyIsImdldFN0YXRzIiwiZ2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJnZXREYWlseVN0YXRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/contentServices.js\n");

/***/ }),

/***/ "./src/styles/theme/darkThemeOptions.ts":
/*!**********************************************!*\
  !*** ./src/styles/theme/darkThemeOptions.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst lightThemeOptions = {\n    palette: {\n        mode: \"dark\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lightThemeOptions);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lL2RhcmtUaGVtZU9wdGlvbnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU1BLGlCQUFpQixHQUFpQjtJQUN0Q0MsT0FBTyxFQUFFO1FBQ1BDLElBQUksRUFBRSxNQUFNO0tBQ2I7Q0FDRjtBQUVELGlFQUFlRixpQkFBaUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvdGhlbWUvZGFya1RoZW1lT3B0aW9ucy50cz8yY2I4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lT3B0aW9ucyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcblxuY29uc3QgbGlnaHRUaGVtZU9wdGlvbnM6IFRoZW1lT3B0aW9ucyA9IHtcbiAgcGFsZXR0ZToge1xuICAgIG1vZGU6ICdkYXJrJyxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxpZ2h0VGhlbWVPcHRpb25zO1xuIl0sIm5hbWVzIjpbImxpZ2h0VGhlbWVPcHRpb25zIiwicGFsZXR0ZSIsIm1vZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/theme/darkThemeOptions.ts\n");

/***/ }),

/***/ "./src/utility/createEmotionCache.ts":
/*!*******************************************!*\
  !*** ./src/utility/createEmotionCache.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);\n\nconst createEmotionCache = ()=>{\n    return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({\n        key: \"css\"\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEmotionCache);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbGl0eS9jcmVhdGVFbW90aW9uQ2FjaGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlDO0FBRXpDLE1BQU1DLGtCQUFrQixHQUFHLElBQU07SUFDL0IsT0FBT0QscURBQVcsQ0FBQztRQUFFRSxHQUFHLEVBQUUsS0FBSztLQUFFLENBQUMsQ0FBQztDQUNwQztBQUVELGlFQUFlRCxrQkFBa0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91dGlsaXR5L2NyZWF0ZUVtb3Rpb25DYWNoZS50cz85NDE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSc7XG5cbmNvbnN0IGNyZWF0ZUVtb3Rpb25DYWNoZSA9ICgpID0+IHtcbiAgcmV0dXJuIGNyZWF0ZUNhY2hlKHsga2V5OiAnY3NzJyB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVtb3Rpb25DYWNoZTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDYWNoZSIsImNyZWF0ZUVtb3Rpb25DYWNoZSIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utility/createEmotionCache.ts\n");

/***/ }),

/***/ "./node_modules/@fontsource/roboto/300.css":
/*!*************************************************!*\
  !*** ./node_modules/@fontsource/roboto/300.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/roboto/400.css":
/*!*************************************************!*\
  !*** ./node_modules/@fontsource/roboto/400.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/roboto/500.css":
/*!*************************************************!*\
  !*** ./node_modules/@fontsource/roboto/500.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/roboto/700.css":
/*!*************************************************!*\
  !*** ./node_modules/@fontsource/roboto/700.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/cache");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();