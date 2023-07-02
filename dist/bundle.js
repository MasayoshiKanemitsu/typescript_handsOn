/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/hello */ \"./src/module/hello.ts\");\n\n// const hello: string = \"Hello World!\";\n// console.log(hello);\n(0,_module_hello__WEBPACK_IMPORTED_MODULE_0__.hello)(\"Hello World!!\");\n// Note: TypeScriptでは型を定義しない場合は「型推論」で型が勝手につく。変数をホバーすることで確認することができる。\n////////////////////////////////////////////\n// string,number,boolean\n////////////////////////////////////////////\nvar name = \"Taro\";\nvar age = 30;\nvar isWake = true;\n////////////////////////////////////////////\n// 配列\n////////////////////////////////////////////\nvar arrayNum = [1, 2, 3, 4, 5];\nvar arrayStr = [\"a\", \"b\", \"c\", \"d\", \"e\"];\nvar arrayUnion = [\"a\", \"b\", \"c\", 1];\n////////////////////////////////////////////\n// オブジェクト\n////////////////////////////////////////////\nvar person = {\n    name: \"John\",\n    age: 20,\n};\n// console.log(person.name);\n////////////////////////////////////////////\n// Tuple型\n////////////////////////////////////////////\n//Note: 配列に厳しい制限をかける型\nvar arrayTuple = [1500, \"Title\", false];\n////////////////////////////////////////////\n// Enum（列挙型）\n////////////////////////////////////////////\n//Note: 特定のまとまったグループのみを受け入れる型\n//Enumに関しては、グループ名はパスカルケース（頭大文字）、中身は全部大文字で定義するのが一般的\nvar CoffeeSize;\n(function (CoffeeSize) {\n    CoffeeSize[\"SMALL\"] = \"small\";\n    CoffeeSize[\"MEDIUM\"] = \"medium\";\n    CoffeeSize[\"LARGE\"] = \"large\";\n})(CoffeeSize || (CoffeeSize = {}));\nvar coffee = {\n    hot: true,\n    size: CoffeeSize.SMALL,\n};\n////////////////////////////////////////////\n// Union型\n////////////////////////////////////////////\nvar unionType = 1000;\nvar unionTypes = [1000, \"Hello\"];\n////////////////////////////////////////////\n// Literal型 (定義したものしか入れられない)\n////////////////////////////////////////////\nvar litetalFruits = \"Apple\";\nvar litetalNumber = 0;\nvar cloth = \"M\";\n////////////////////////////////////////////\n// any型 (型定義をしない)\n////////////////////////////////////////////\n//Note: なんでもOK\nvar anything = 1500;\n////////////////////////////////////////////\n// unknown型\n////////////////////////////////////////////\n//Note: any型よりも少し厳しい型。any同様なんでも入れられるが、その変数を使うときに確認が必要。\nvar unknownVal;\nunknownVal = \"hello\";\n// let text:string = unknownVal; //型エラー\n//↓↓ typeofを使って確認する必要がある\nif (typeof unknownVal === \"string\") {\n    console.log(unknownVal);\n}\n////////////////////////////////////////////\n// never型\n////////////////////////////////////////////\n//Note: 起こり得ない値の型を使うとき。決して何も返さない。\nfunction error(msg) {\n    throw new Error(msg);\n}\n// console.log(error(\"This is error!!\"));\n////////////////////////////////////////////\n// 関数に型を適用\n////////////////////////////////////////////\n//戻り値がある場合\nvar add = function (a, b) { return a + b; };\n//戻り値がない場合(void)\nvar cLog = function (word) { return console.log(word); };\n//関数の型注釈(arrowになるので注意)\nvar add2 = add;\n////////////////////////////////////////////\n// undefined型とnull型\n////////////////////////////////////////////\n//Note: undefined型は値が存在しないことを示す型。滅多に使わない。\nvar tmpUndefined = undefined; //undefinedしか入れれない\nvar tmpNull = null; //nullしか入れれない\n////////////////////////////////////////////\n// callback型\n////////////////////////////////////////////\n// Note: callback部分の型定義はarrowになるので注意\nfunction cbTest(num, callback) {\n    var tmp = callback(num * 2);\n    console.log(tmp);\n}\nvar cbTest2 = function (num) {\n    var tmp = num * 3;\n    return tmp;\n};\ncbTest(10, cbTest2);\n\n\n//# sourceURL=webpack://handson/./src/main.ts?");

/***/ }),

/***/ "./src/module/hello.ts":
/*!*****************************!*\
  !*** ./src/module/hello.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hello: () => (/* binding */ hello)\n/* harmony export */ });\nfunction hello(value) {\n    console.log(value);\n}\n\n\n//# sourceURL=webpack://handson/./src/module/hello.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;