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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/hello */ \"./src/module/hello.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n// const hello: string = \"Hello World!\";\n// console.log(hello);\n(0,_module_hello__WEBPACK_IMPORTED_MODULE_0__.hello)(\"Hello World!!\");\n// Note: TypeScriptでは型を定義しない場合は「型推論」で型が勝手につく。変数をホバーすることで確認することができる。\n////////////////////////////////////////////\n// string,number,boolean\n////////////////////////////////////////////\nvar name = \"Taro\";\nvar age = 30;\nvar isWake = true;\n////////////////////////////////////////////\n// 配列\n////////////////////////////////////////////\nvar arrayNum = [1, 2, 3, 4, 5];\nvar arrayStr = [\"a\", \"b\", \"c\", \"d\", \"e\"];\nvar arrayUnion = [\"a\", \"b\", \"c\", 1];\n////////////////////////////////////////////\n// オブジェクト\n////////////////////////////////////////////\nvar person = {\n    name: \"John\",\n    age: 20,\n};\n// console.log(person.name);\n////////////////////////////////////////////\n// Tuple型\n////////////////////////////////////////////\n//Note: 配列に厳しい制限をかける型\nvar arrayTuple = [1500, \"Title\", false];\n////////////////////////////////////////////\n// Enum（列挙型）\n////////////////////////////////////////////\n//Note: 特定のまとまったグループのみを受け入れる型\n//Enumに関しては、グループ名はパスカルケース（頭大文字）、中身は全部大文字で定義するのが一般的\nvar CoffeeSize;\n(function (CoffeeSize) {\n    CoffeeSize[\"SMALL\"] = \"small\";\n    CoffeeSize[\"MEDIUM\"] = \"medium\";\n    CoffeeSize[\"LARGE\"] = \"large\";\n})(CoffeeSize || (CoffeeSize = {}));\nvar coffee = {\n    hot: true,\n    size: CoffeeSize.SMALL,\n};\n////////////////////////////////////////////\n// Union型\n////////////////////////////////////////////\nvar unionType = 1000;\nvar unionTypes = [1000, \"Hello\"];\n////////////////////////////////////////////\n// Literal型 (定義したものしか入れられない)\n////////////////////////////////////////////\nvar litetalFruits = \"Apple\";\nvar litetalNumber = 0;\nvar cloth = \"M\";\n////////////////////////////////////////////\n// any型 (型定義をしない)\n////////////////////////////////////////////\n//Note: なんでもOK\nvar anything = 1500;\n////////////////////////////////////////////\n// unknown型\n////////////////////////////////////////////\n//Note: any型よりも少し厳しい型。any同様なんでも入れられるが、その変数を使うときに確認が必要。\nvar unknownVal;\nunknownVal = \"hello\";\n// let text:string = unknownVal; //型エラー\n//↓↓ typeofを使って確認する必要がある\nif (typeof unknownVal === \"string\") {\n    console.log(unknownVal);\n}\n////////////////////////////////////////////\n// never型\n////////////////////////////////////////////\n//Note: 起こり得ない値の型を使うとき。決して何も返さない。\nfunction error(msg) {\n    throw new Error(msg);\n}\n// console.log(error(\"This is error!!\"));\n////////////////////////////////////////////\n// 関数に型を適用\n////////////////////////////////////////////\n//戻り値がある場合\nvar add = function (a, b) { return a + b; };\n//戻り値がない場合(void)\nvar cLog = function (word) { return console.log(word); };\n//関数の型注釈(arrowになるので注意)\nvar add2 = add;\n////////////////////////////////////////////\n// undefined型とnull型\n////////////////////////////////////////////\n//Note: undefined型は値が存在しないことを示す型。滅多に使わない。\nvar tmpUndefined = undefined; //undefinedしか入れれない\nvar tmpNull = null; //nullしか入れれない\n////////////////////////////////////////////\n// callback型\n////////////////////////////////////////////\n// Note: callback部分の型定義はarrowになるので注意\nfunction cbTest(num, callback) {\n    var tmp = callback(num * 2);\n    console.log(tmp);\n}\nvar cbTest2 = function (num) {\n    var tmp = num * 3;\n    return tmp;\n};\ncbTest(10, cbTest2);\n//////////////////////////////////////////////////////////////////////////\n////////////////////////////////////////////\n// Class\n////////////////////////////////////////////\nvar Person = /** @class */ (function () {\n    //初期化（Personというクラスを使う時の設計書の中身はconstructor内に書く）\n    function Person(initName, initAge) {\n        this.name = initName;\n        this.age = initAge;\n    }\n    //メソッド\n    Person.prototype.greeting = function () {\n        console.log(this.name);\n    };\n    return Person;\n}());\nvar player2 = new Person(\"Mary\", 22);\nvar player1 = new Person(\"John\", 20);\nconsole.log(player1);\nplayer1.greeting();\n//privateとpublic（とprotected）\n// Note: protectedは継承先でも参照できる。privateは継承先では参照できないため。\nvar Person2 = /** @class */ (function () {\n    function Person2(initName, initAge) {\n        this.name = initName;\n        this.age = initAge;\n    }\n    Person2.prototype.incrementAge = function () {\n        this.age++;\n    };\n    return Person2;\n}());\nvar player3 = new Person2(\"Taro\", 25);\n//初期化の省略記法\nvar Person3 = /** @class */ (function () {\n    function Person3(name, age) {\n        this.name = name;\n        this.age = age;\n    }\n    return Person3;\n}());\nvar player4 = new Person3(\"Jiro\", 23);\n//readonly\n//Note: readonlyで宣言した変数の値はクラス内でも変更できない。読むだけ。\nvar Person4 = /** @class */ (function () {\n    function Person4(name, age) {\n        this.name = name;\n        this.age = age;\n    }\n    return Person4;\n}());\nvar player5 = new Person4(\"Smith\", 35);\n//extends\n//Note: Personを継承してTeacherを作る。(subjectはTeacher固有)\nvar Teacher = /** @class */ (function (_super) {\n    __extends(Teacher, _super);\n    function Teacher(name, age, _subject) {\n        var _this = _super.call(this, name, age) || this;\n        _this._subject = _subject;\n        return _this;\n    }\n    Object.defineProperty(Teacher.prototype, \"subject\", {\n        //getもsetも関数のように扱える\n        get: function () {\n            if (!this._subject) {\n                throw new Error(\"There is no subject\");\n            }\n            return this._subject;\n        },\n        set: function (value) {\n            this._subject = value;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    //継承元と同じ関数を定義することで、上書きができる。\n    Teacher.prototype.greeting = function () {\n        console.log(this.subject);\n    };\n    return Teacher;\n}(Person));\nvar teacher = new Teacher(\"Baker\", 40, \"math\");\nconsole.log(teacher.subject);\nteacher.subject = \"Music\";\nconsole.log(teacher.subject);\n//static\nvar tool = /** @class */ (function () {\n    function tool() {\n    }\n    tool.val = \"This is static.\";\n    tool.method = function () {\n        console.log(tool.val + \"です\");\n    };\n    return tool;\n}());\nconsole.log(tool.val);\ntool.method();\n//Abstract\n//Note：継承にのみ使えるクラス。インスタンスを生成できない。\nvar Hoge = /** @class */ (function () {\n    function Hoge(name) {\n        this.name = name;\n    }\n    Hoge.prototype.greeting = function () {\n        console.log(this.name);\n    };\n    return Hoge;\n}());\nvar Fuga = /** @class */ (function (_super) {\n    __extends(Fuga, _super);\n    function Fuga(name) {\n        return _super.call(this, name) || this;\n    }\n    Fuga.prototype.extra = function () {\n        console.log(\"abstract\");\n    };\n    return Fuga;\n}(Hoge));\nvar human = {\n    name: \"John\",\n    age: 20,\n    greeting: function (msg) {\n        console.log(msg);\n    },\n};\nvar developer;\n//implements　interfaceをclassに適用させる\nvar Developer = /** @class */ (function () {\n    function Developer(name, age) {\n        this.name = name;\n        this.age = age;\n    }\n    Developer.prototype.greeting = function (msg) {\n        console.log(msg);\n    };\n    return Developer;\n}());\n\n\n//# sourceURL=webpack://handson/./src/main.ts?");

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