/*! For license information please see main.867de8bc2a481f5ac97d.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./src/calc.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sum = function sum(a, b) {\n  return a + b;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sum);\n\n//# sourceURL=webpack://webpack-udemy/./src/calc.js?')},"./src/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc */ \"./src/calc.js\");\n// import Title from './components/title.js';\n// import Image from './components/image.js';\n// import Button from './components/button.js';\n// import Warning from './templates/warning.html';\n// import './styles/warning.css';\n// import fraseTxt from './files/frase.txt';\n// import description from './files/description.json';\n// const title = new Title();\n// const image = new Image();\n// const button = new Button();\n// title.create('Primeira página');\n// image.insertCatImage();\n// button.create();\n// // Babel spread\n// const obj = {\n//   a: 1,\n//   b: 2,\n//   c: 3,\n//   d: 4,\n// };\n// let { ...test } = obj;\n// console.log(test);\n// // Import de HTML\n// const body = document.querySelector('body');\n// body.innerHTML += Warning;\n// // Import arquivo de texto\n// const frase = fraseTxt;\n// console.log(frase.toLowerCase());\n// // Import JSON\n// const eu = description;\n// console.log(eu);\n// import Heading from './components/heading/heading';\n// const heading = new Heading();\n// heading.create(process.env.API_KEY);\n// console.log(PORT);\n\nvar x = (0,_calc__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, 2);\nvar y = (0,_calc__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5, x);\nconsole.log(x);\nconsole.log(y);\n\n//# sourceURL=webpack://webpack-udemy/./src/index.js?")}},__webpack_module_cache__={};function __webpack_require__(e){var _=__webpack_module_cache__[e];if(void 0!==_)return _.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(e,_)=>{for(var n in _)__webpack_require__.o(_,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:_[n]})},__webpack_require__.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/index.js")})();