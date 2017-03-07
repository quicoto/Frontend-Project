/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	module.exports = __webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var XXX = XXX || {};

	XXX.components = $.extend(XXX.components, {

	    'component1': function () {
	        var $that = this;

	        this._init = function ($scope) {
	            // Do something
	            if (false) {
	                console.info('[Component1] init...');
	            }
	            $that._otherFunction();
	        }; // init

	        this._otherFunction = function () {
	            // Do something else
	        }; // _otherFunction

	        return {
	            init: $that._init,
	            otherFunction: $that._otherFunction
	        };
	    }()

	}); // END of components

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	/*jshint -W079 */
	var DEBUG = true; // only for debug!!!

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	var XXX = XXX || {};

	$(function () {
	    /* Init components */
	    XXX.components.component1.init();
	});

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map