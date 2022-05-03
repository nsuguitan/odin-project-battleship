/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("gsap.registerPlugin(Draggable);\n\n$(document).ready(function(){\n    $(\"#placeShipsModal\").modal('show');\n    let gridContainer = $(\"#container-grid\")[0];\n    console.log(\"Container info:\", gridContainer);\n    setTimeout(() => {\n    let gridHeight = gridContainer.offsetHeight;\n    let gridWidth = gridContainer.offsetWidth;\n    console.log(\"Height\",gridHeight);\n    console.log(\"Width\",gridWidth);\n    \n    let carrierDrag = Draggable.create(\"#carrier\",{\n        type: \"x,y\",\n        liveSnap:{\n            x: function(endValue) {\n              return Math.round(endValue / (gridWidth/10)) * (gridWidth/10);\n            },\n            y: function(endValue) {\n              return Math.round(endValue / (gridHeight/10)) * (gridHeight/10);\n            },\n          },\n          onDragEnd: function(){Draggable.get('#carrier').applyBounds(document.getElementById('container-grid'))},\n            \n          \n          })\n    }, 300);\n    // let battleshipDrag = Draggable.create(\"#carrier\");\n    // let cruiserDrag = Draggable.create(\"#carrier\");\n    // let submarineDrag = Draggable.create(\"#carrier\");\n    // let destroyerDrag = Draggable.create(\"#carrier\");\n    console.log('script complete')\n});\n\n\n//# sourceURL=webpack://odin-project-battleship/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;