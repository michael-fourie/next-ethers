"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/globals.css":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/globals.css ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n  font-family: 'Fira Sans Condensed', sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\nbody {\\n  margin: 0;\\n  background-color: #1a181f;\\n  background-color: #000;\\n  color: #fff;\\n  max-height: 100vh;\\n  overflow: hidden;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: #739CFB;\\n}\\n\\n.container {\\n  justify-content: center;\\n  text-align: center;\\n  height: 95vh;\\n}\\n\\n.d-flex {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.fren-nav {\\n  padding: 20px 30px;\\n  background: url('/stars.png');\\n\\n}\\n\\n.btn {\\n  border: none;\\n  outline: none;\\n  background-color: #ccc;\\n  font-weight: bold;\\n  cursor: pointer;\\n}\\n\\n.btn:hover {\\n  box-shadow: 0 0 3px inset #ffffff7c;\\n  outline: 1px solid #fff;\\n}\\n\\n.connect-btn {\\n  color: #000;\\n  font-size: 14px;\\n  background: #FEDA5E;\\n  border-radius: 15px;\\n  padding: 15px 20px;\\n}\\n\\n.tw-btn {\\n  color: #fff;\\n  font-size: 14px;\\n  background: #739CFB;\\n  border-radius: 15px;\\n  padding: 15px 20px;\\n  margin-left: 1.5vw;\\n\\n}\\n\\n.main-title {\\n  font-size: 90px;\\n  font-weight: 900;\\n  font-style: italic;\\n  font-family: 'Montserrat', serif;\\n}\\n\\n.main-desc {\\n  font-size: 20px;\\n  text-align: center;\\n  color: #F2F2F2;\\n  padding: 10px;\\n  line-height: 30px;\\n}\\n\\n.sign-btn {\\n  margin-top: 20px;\\n  font-size: 18px;\\n  border-radius: 15px;\\n  padding: 15px 20px;\\n  background: #745EDA;\\n  color: #F2F2F2;\\n  border: 1px solid #FFFFFF;\\n}\\n\\n/* media query for mobile devices */\\n@media only screen and (max-width: 600px) {\\n  .fren-nav {\\n    padding: 20px;\\n  }\\n\\n  .main-title {\\n    font-size: 35px;\\n  }\\n\\n  .main-desc,\\n  p {\\n    font-size: 17px;\\n    line-height: 20px;\\n  }\\n\\n  .sign-btn {\\n    font-size: 15px;\\n    width: 200px;\\n  }\\n}\\n\\n/* YourComponent.css */\\nbody {\\n  margin: 0;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  height: 100vh;\\n}\\n\\n.grid-container {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr 1fr;\\n  grid-gap: 210px;\\n  gap: 210px; /* Adjust the gap between grid items as needed */\\n  max-width: 600px; /* Set your desired maximum width */\\n  margin: auto; /* Center the grid horizontally */\\n}\\n\\n.grid-item {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  background-color: #000000; /* Blue background, you can change it to your desired color */\\n  color: #fff; /* White text color */\\n  padding: 20px;\\n}\\n\\n.bold-text {\\n  font-size: 26px;\\n  font-weight: bold;\\n}\\n\\n.green-text {\\n  font-size: 22px;\\n  color: #00ff00; /* Green text color */\\n}\\n\\n.courier-font {\\n  font-family: 'Courier New', monospace;\\n}\\n\\n.dark-grey-text {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n  padding: 10px;\\n  color: #7a7a7a; /* Dark grey color */\\n  font-size: 20px;\\n  font-family: 'Courier New', monospace;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,8CAA8C;EAC9C,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE,SAAS;EACT,yBAAyB;EACzB,sBAAsB;EACtB,WAAW;EACX,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,6BAA6B;;AAE/B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,mCAAmC;EACnC,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;;AAEpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,gCAAgC;AAClC;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,cAAc;EACd,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;EACd,yBAAyB;AAC3B;;AAEA,mCAAmC;AACnC;EACE;IACE,aAAa;EACf;;EAEA;IACE,eAAe;EACjB;;EAEA;;IAEE,eAAe;IACf,iBAAiB;EACnB;;EAEA;IACE,eAAe;IACf,YAAY;EACd;AACF;;AAEA,sBAAsB;AACtB;EACE,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;EAC3B,eAAU;EAAV,UAAU,EAAE,gDAAgD;EAC5D,gBAAgB,EAAE,mCAAmC;EACrD,YAAY,EAAE,iCAAiC;AACjD;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB,EAAE,6DAA6D;EACxF,WAAW,EAAE,qBAAqB;EAClC,aAAa;AACf;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,cAAc,EAAE,qBAAqB;AACvC;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,eAAe;EACf,SAAS;EACT,OAAO;EACP,aAAa;EACb,cAAc,EAAE,oBAAoB;EACpC,eAAe;EACf,qCAAqC;AACvC\",\"sourcesContent\":[\"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n  font-family: 'Fira Sans Condensed', sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\nbody {\\n  margin: 0;\\n  background-color: #1a181f;\\n  background-color: #000;\\n  color: #fff;\\n  max-height: 100vh;\\n  overflow: hidden;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: #739CFB;\\n}\\n\\n.container {\\n  justify-content: center;\\n  text-align: center;\\n  height: 95vh;\\n}\\n\\n.d-flex {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.fren-nav {\\n  padding: 20px 30px;\\n  background: url('/stars.png');\\n\\n}\\n\\n.btn {\\n  border: none;\\n  outline: none;\\n  background-color: #ccc;\\n  font-weight: bold;\\n  cursor: pointer;\\n}\\n\\n.btn:hover {\\n  box-shadow: 0 0 3px inset #ffffff7c;\\n  outline: 1px solid #fff;\\n}\\n\\n.connect-btn {\\n  color: #000;\\n  font-size: 14px;\\n  background: #FEDA5E;\\n  border-radius: 15px;\\n  padding: 15px 20px;\\n}\\n\\n.tw-btn {\\n  color: #fff;\\n  font-size: 14px;\\n  background: #739CFB;\\n  border-radius: 15px;\\n  padding: 15px 20px;\\n  margin-left: 1.5vw;\\n\\n}\\n\\n.main-title {\\n  font-size: 90px;\\n  font-weight: 900;\\n  font-style: italic;\\n  font-family: 'Montserrat', serif;\\n}\\n\\n.main-desc {\\n  font-size: 20px;\\n  text-align: center;\\n  color: #F2F2F2;\\n  padding: 10px;\\n  line-height: 30px;\\n}\\n\\n.sign-btn {\\n  margin-top: 20px;\\n  font-size: 18px;\\n  border-radius: 15px;\\n  padding: 15px 20px;\\n  background: #745EDA;\\n  color: #F2F2F2;\\n  border: 1px solid #FFFFFF;\\n}\\n\\n/* media query for mobile devices */\\n@media only screen and (max-width: 600px) {\\n  .fren-nav {\\n    padding: 20px;\\n  }\\n\\n  .main-title {\\n    font-size: 35px;\\n  }\\n\\n  .main-desc,\\n  p {\\n    font-size: 17px;\\n    line-height: 20px;\\n  }\\n\\n  .sign-btn {\\n    font-size: 15px;\\n    width: 200px;\\n  }\\n}\\n\\n/* YourComponent.css */\\nbody {\\n  margin: 0;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  height: 100vh;\\n}\\n\\n.grid-container {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr 1fr;\\n  gap: 210px; /* Adjust the gap between grid items as needed */\\n  max-width: 600px; /* Set your desired maximum width */\\n  margin: auto; /* Center the grid horizontally */\\n}\\n\\n.grid-item {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  background-color: #000000; /* Blue background, you can change it to your desired color */\\n  color: #fff; /* White text color */\\n  padding: 20px;\\n}\\n\\n.bold-text {\\n  font-size: 26px;\\n  font-weight: bold;\\n}\\n\\n.green-text {\\n  font-size: 22px;\\n  color: #00ff00; /* Green text color */\\n}\\n\\n.courier-font {\\n  font-family: 'Courier New', monospace;\\n}\\n\\n.dark-grey-text {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n  padding: 10px;\\n  color: #7a7a7a; /* Dark grey color */\\n  font-size: 20px;\\n  font-family: 'Courier New', monospace;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ3dIO0FBQ3hILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSw2Q0FBNkMsZUFBZSxjQUFjLDJCQUEyQixtREFBbUQsd0NBQXdDLHVDQUF1QyxHQUFHLFVBQVUsY0FBYyw4QkFBOEIsMkJBQTJCLGdCQUFnQixzQkFBc0IscUJBQXFCLEdBQUcsT0FBTywwQkFBMEIsbUJBQW1CLEdBQUcsZ0JBQWdCLDRCQUE0Qix1QkFBdUIsaUJBQWlCLEdBQUcsYUFBYSxrQkFBa0Isd0JBQXdCLEdBQUcsZUFBZSx1QkFBdUIsa0NBQWtDLEtBQUssVUFBVSxpQkFBaUIsa0JBQWtCLDJCQUEyQixzQkFBc0Isb0JBQW9CLEdBQUcsZ0JBQWdCLHdDQUF3Qyw0QkFBNEIsR0FBRyxrQkFBa0IsZ0JBQWdCLG9CQUFvQix3QkFBd0Isd0JBQXdCLHVCQUF1QixHQUFHLGFBQWEsZ0JBQWdCLG9CQUFvQix3QkFBd0Isd0JBQXdCLHVCQUF1Qix1QkFBdUIsS0FBSyxpQkFBaUIsb0JBQW9CLHFCQUFxQix1QkFBdUIscUNBQXFDLEdBQUcsZ0JBQWdCLG9CQUFvQix1QkFBdUIsbUJBQW1CLGtCQUFrQixzQkFBc0IsR0FBRyxlQUFlLHFCQUFxQixvQkFBb0Isd0JBQXdCLHVCQUF1Qix3QkFBd0IsbUJBQW1CLDhCQUE4QixHQUFHLHFGQUFxRixlQUFlLG9CQUFvQixLQUFLLG1CQUFtQixzQkFBc0IsS0FBSyx3QkFBd0Isc0JBQXNC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a0Isd0JBQXdCLDRCQUE0QiwrQkFBK0IsK0VBQStFLHdDQUF3QyxHQUFHLGdCQUFnQixvQkFBb0Isc0JBQXNCLEdBQUcsaUJBQWlCLG9CQUFvQixvQkFBb0IseUJBQXlCLG1CQUFtQiwwQ0FBMEMsR0FBRyxxQkFBcUIsb0JBQW9CLGNBQWMsWUFBWSxrQkFBa0Isb0JBQW9CLHlDQUF5QywwQ0FBMEMsR0FBRyxtQkFBbUI7QUFDM3VPO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzP2JjMzgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ0ZpcmEgU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTE4MWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICM3MzlDRkI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDk1dmg7XFxufVxcblxcbi5kLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mcmVuLW5hdiB7XFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy9zdGFycy5wbmcnKTtcXG5cXG59XFxuXFxuLmJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggaW5zZXQgI2ZmZmZmZjdjO1xcbiAgb3V0bGluZTogMXB4IHNvbGlkICNmZmY7XFxufVxcblxcbi5jb25uZWN0LWJ0biB7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJhY2tncm91bmQ6ICNGRURBNUU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogMTVweCAyMHB4O1xcbn1cXG5cXG4udHctYnRuIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYmFja2dyb3VuZDogIzczOUNGQjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XFxuICBtYXJnaW4tbGVmdDogMS41dnc7XFxuXFxufVxcblxcbi5tYWluLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogOTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzZXJpZjtcXG59XFxuXFxuLm1haW4tZGVzYyB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI0YyRjJGMjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG59XFxuXFxuLnNpZ24tYnRuIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogMTVweCAyMHB4O1xcbiAgYmFja2dyb3VuZDogIzc0NUVEQTtcXG4gIGNvbG9yOiAjRjJGMkYyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcXG59XFxuXFxuLyogbWVkaWEgcXVlcnkgZm9yIG1vYmlsZSBkZXZpY2VzICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmZyZW4tbmF2IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gIH1cXG5cXG4gIC5tYWluLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgfVxcblxcbiAgLm1haW4tZGVzYyxcXG4gIHAge1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgfVxcblxcbiAgLnNpZ24tYnRuIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICB9XFxufVxcblxcbi8qIFlvdXJDb21wb25lbnQuY3NzICovXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBncmlkLWdhcDogMjEwcHg7XFxuICBnYXA6IDIxMHB4OyAvKiBBZGp1c3QgdGhlIGdhcCBiZXR3ZWVuIGdyaWQgaXRlbXMgYXMgbmVlZGVkICovXFxuICBtYXgtd2lkdGg6IDYwMHB4OyAvKiBTZXQgeW91ciBkZXNpcmVkIG1heGltdW0gd2lkdGggKi9cXG4gIG1hcmdpbjogYXV0bzsgLyogQ2VudGVyIHRoZSBncmlkIGhvcml6b250YWxseSAqL1xcbn1cXG5cXG4uZ3JpZC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOyAvKiBCbHVlIGJhY2tncm91bmQsIHlvdSBjYW4gY2hhbmdlIGl0IHRvIHlvdXIgZGVzaXJlZCBjb2xvciAqL1xcbiAgY29sb3I6ICNmZmY7IC8qIFdoaXRlIHRleHQgY29sb3IgKi9cXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5ib2xkLXRleHQge1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5ncmVlbi10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGNvbG9yOiAjMDBmZjAwOyAvKiBHcmVlbiB0ZXh0IGNvbG9yICovXFxufVxcblxcbi5jb3VyaWVyLWZvbnQge1xcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcXG59XFxuXFxuLmRhcmstZ3JleS10ZXh0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6ICM3YTdhN2E7IC8qIERhcmsgZ3JleSBjb2xvciAqL1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLDhDQUE4QztFQUM5QyxtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsU0FBUztFQUNULHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw2QkFBNkI7O0FBRS9COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUEsbUNBQW1DO0FBQ25DO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBOztJQUVFLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsWUFBWTtFQUNkO0FBQ0Y7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLGVBQVU7RUFBVixVQUFVLEVBQUUsZ0RBQWdEO0VBQzVELGdCQUFnQixFQUFFLG1DQUFtQztFQUNyRCxZQUFZLEVBQUUsaUNBQWlDO0FBQ2pEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQXlCLEVBQUUsNkRBQTZEO0VBQ3hGLFdBQVcsRUFBRSxxQkFBcUI7RUFDbEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUUscUJBQXFCO0FBQ3ZDOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsYUFBYTtFQUNiLGNBQWMsRUFBRSxvQkFBb0I7RUFDcEMsZUFBZTtFQUNmLHFDQUFxQztBQUN2Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExODFmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjNzM5Q0ZCO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiA5NXZoO1xcbn1cXG5cXG4uZC1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZnJlbi1uYXYge1xcbiAgcGFkZGluZzogMjBweCAzMHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKCcvc3RhcnMucG5nJyk7XFxuXFxufVxcblxcbi5idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDAgM3B4IGluc2V0ICNmZmZmZmY3YztcXG4gIG91dGxpbmU6IDFweCBzb2xpZCAjZmZmO1xcbn1cXG5cXG4uY29ubmVjdC1idG4ge1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBiYWNrZ3JvdW5kOiAjRkVEQTVFO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmc6IDE1cHggMjBweDtcXG59XFxuXFxuLnR3LWJ0biB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJhY2tncm91bmQ6ICM3MzlDRkI7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogMTVweCAyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEuNXZ3O1xcblxcbn1cXG5cXG4ubWFpbi10aXRsZSB7XFxuICBmb250LXNpemU6IDkwcHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2VyaWY7XFxufVxcblxcbi5tYWluLWRlc2Mge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNGMkYyRjI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5zaWduLWJ0biB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmc6IDE1cHggMjBweDtcXG4gIGJhY2tncm91bmQ6ICM3NDVFREE7XFxuICBjb2xvcjogI0YyRjJGMjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRkZGRkY7XFxufVxcblxcbi8qIG1lZGlhIHF1ZXJ5IGZvciBtb2JpbGUgZGV2aWNlcyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5mcmVuLW5hdiB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICB9XFxuXFxuICAubWFpbi10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gIH1cXG5cXG4gIC5tYWluLWRlc2MsXFxuICBwIHtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gIH1cXG5cXG4gIC5zaWduLWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgfVxcbn1cXG5cXG4vKiBZb3VyQ29tcG9uZW50LmNzcyAqL1xcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ2FwOiAyMTBweDsgLyogQWRqdXN0IHRoZSBnYXAgYmV0d2VlbiBncmlkIGl0ZW1zIGFzIG5lZWRlZCAqL1xcbiAgbWF4LXdpZHRoOiA2MDBweDsgLyogU2V0IHlvdXIgZGVzaXJlZCBtYXhpbXVtIHdpZHRoICovXFxuICBtYXJnaW46IGF1dG87IC8qIENlbnRlciB0aGUgZ3JpZCBob3Jpem9udGFsbHkgKi9cXG59XFxuXFxuLmdyaWQtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDsgLyogQmx1ZSBiYWNrZ3JvdW5kLCB5b3UgY2FuIGNoYW5nZSBpdCB0byB5b3VyIGRlc2lyZWQgY29sb3IgKi9cXG4gIGNvbG9yOiAjZmZmOyAvKiBXaGl0ZSB0ZXh0IGNvbG9yICovXFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uYm9sZC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZ3JlZW4tdGV4dCB7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBjb2xvcjogIzAwZmYwMDsgLyogR3JlZW4gdGV4dCBjb2xvciAqL1xcbn1cXG5cXG4uY291cmllci1mb250IHtcXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XFxufVxcblxcbi5kYXJrLWdyZXktdGV4dCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiAjN2E3YTdhOyAvKiBEYXJrIGdyZXkgY29sb3IgKi9cXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/globals.css\n");

/***/ })

});