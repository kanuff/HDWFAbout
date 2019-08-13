/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/chart.js":
/*!**********************!*\
  !*** ./src/chart.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

// mimic react style

exports.default = function (props) {
    var dummyData = [];
    var dataLength = 10;
    var mag = 15;
    for (var x = 0; x < dataLength; x++) {
        var y = Math.floor(Math.random() * 2 * mag) - mag;
        var datum = [x, y];
        dummyData.push(datum);
    }
    var data = props.data || dummyData;

    var xdata = [];
    var ydata = [];

    data.forEach(function (datum) {
        xdata.push(datum[0]);
        ydata.push(datum[1]);
    });

    var margin = {
        top: 50,
        right: 25,
        bottom: 50,
        left: 40
    };
    var width = 600 - margin.left - margin.right;
    var height = 400 - margin.top - margin.bottom;

    //create the chart object
    var svg = d3.select('svg').attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom).style('background-color', 'lightblue').append("g").attr("transform", 'translate(' + margin.left + ', ' + margin.top + ')');

    var xscl = d3.scaleLinear().domain([0, dataLength]).range([0, width]);

    var yscl = d3.scaleLinear().domain([d3.max(ydata), d3.min(ydata)]).range([0, height]);

    var x_axis = d3.axisBottom().scale(xscl);
    var y_axis = d3.axisLeft().scale(yscl);

    svg.append("g").attr("transform", 'translate(0,' + height / 2 + ')').attr("class", 'xaxis').call(x_axis);

    // svg.select('.xaxis .tick:first-child').remove();//currently not working //remove the first tick to fix alignment

    svg.append("g").attr("class", 'yaxis').call(y_axis);

    // create line generator
    var line = d3.line().x(function (d, i) {
        return xscl(i);
    }).y(function (d, i) {
        return yscl(d);
    }).curve(d3.curveMonotoneX);

    // draw the line
    svg.append("path").attr("fill", "none").attr("stroke", "black").attr("stroke-width", "2px").datum(ydata).attr("class", "line").attr("d", line);
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./styles/development.css */ "./src/styles/development.css");

var _news = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './news'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _chart = __webpack_require__(/*! ./chart */ "./src/chart.js");

var _chart2 = _interopRequireDefault(_chart);

__webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (true) {
    console.log("Development Mode!");
}

document.addEventListener('DOMContentLoaded', function () {
    var root = document.getElementById("main");

    // Testing because I forgot how to vanilla js
    var newDiv = document.createElement('div');
    var newContent = document.createTextNode("I'm being created within the index.js file to test if changes show");
    newDiv.appendChild(newContent);
    // newDiv.addEventListener("click", fetchHeadlines); //this works, currently commented out to prevent unnessecarily using the api key
    // newDiv.addEventListener("click", fetchEverythingFor); //this works, currently commented out to prevent unnessecarily using the api key
    root.appendChild(newDiv);

    var props = {};
    (0, _chart2.default)(props);
});

/***/ }),

/***/ "./src/styles/development.css":
/*!************************************!*\
  !*** ./src/styles/development.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2RldmVsb3BtZW50LmNzcz9jYjc1Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/NWQzNiJdLCJuYW1lcyI6WyJwcm9wcyIsImR1bW15RGF0YSIsImRhdGFMZW5ndGgiLCJtYWciLCJ4IiwieSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImRhdHVtIiwicHVzaCIsImRhdGEiLCJ4ZGF0YSIsInlkYXRhIiwiZm9yRWFjaCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhdHRyIiwic3R5bGUiLCJhcHBlbmQiLCJ4c2NsIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJyYW5nZSIsInlzY2wiLCJtYXgiLCJtaW4iLCJ4X2F4aXMiLCJheGlzQm90dG9tIiwic2NhbGUiLCJ5X2F4aXMiLCJheGlzTGVmdCIsImNhbGwiLCJsaW5lIiwiZCIsImkiLCJjdXJ2ZSIsImN1cnZlTW9ub3RvbmVYIiwicHJvY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyb290IiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXdEaXYiLCJjcmVhdGVFbGVtZW50IiwibmV3Q29udGVudCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBD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QTtBQUNBO0FBQ0FKLFNBQUtNLFdBQUwsQ0FBaUJKLE1BQWpCOztBQUVBLFFBQU1yRCxRQUFRLEVBQWQ7QUFDQSx5QkFBTUEsS0FBTjtBQUVILENBZEQsRTs7Ozs7Ozs7Ozs7QUNkQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBtaW1pYyByZWFjdCBzdHlsZVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgICBjb25zdCBkdW1teURhdGEgPSBbXVxuICAgIGNvbnN0IGRhdGFMZW5ndGggPSAxMDtcbiAgICBjb25zdCBtYWcgPSAxNTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGRhdGFMZW5ndGg7IHgrKykge1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMiAqIG1hZykgLSBtYWc7XG4gICAgICAgIGNvbnN0IGRhdHVtID0gW3gsIHldO1xuICAgICAgICBkdW1teURhdGEucHVzaChkYXR1bSk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBwcm9wcy5kYXRhIHx8IGR1bW15RGF0YVxuXG4gICAgY29uc3QgeGRhdGEgPSBbXVxuICAgIGNvbnN0IHlkYXRhID0gW11cblxuICAgIGRhdGEuZm9yRWFjaChkYXR1bSA9PiB7XG4gICAgICAgIHhkYXRhLnB1c2goZGF0dW1bMF0pXG4gICAgICAgIHlkYXRhLnB1c2goZGF0dW1bMV0pXG4gICAgfSlcblxuICAgIGNvbnN0IG1hcmdpbiA9IHtcbiAgICAgICAgdG9wOiA1MCxcbiAgICAgICAgcmlnaHQ6IDI1LFxuICAgICAgICBib3R0b206IDUwLFxuICAgICAgICBsZWZ0OjQwLFxuICAgIH1cbiAgICBjb25zdCB3aWR0aCA9IDYwMCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGNvbnN0IGhlaWdodCA9IDQwMCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gIFxuXG4gICAgLy9jcmVhdGUgdGhlIGNoYXJ0IG9iamVjdFxuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdCgnc3ZnJylcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4gICAgICAgICAgICAuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InLCAnbGlnaHRibHVlJylcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sICR7bWFyZ2luLnRvcH0pYClcblxuICAgIGNvbnN0IHhzY2wgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5kb21haW4oWzAsIGRhdGFMZW5ndGhdKVxuICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSk7XG5cbiAgICBjb25zdCB5c2NsID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAuZG9tYWluKFtkMy5tYXgoeWRhdGEpLCBkMy5taW4oeWRhdGEpXSlcbiAgICAgICAgLnJhbmdlKFswLCBoZWlnaHRdKTtcblxuICAgIGNvbnN0IHhfYXhpcyA9IGQzLmF4aXNCb3R0b20oKVxuICAgICAgICAgICAgICAgICAgICAuc2NhbGUoeHNjbClcbiAgICBjb25zdCB5X2F4aXMgPSBkMy5heGlzTGVmdCgpXG4gICAgICAgICAgICAgICAgICAgIC5zY2FsZSh5c2NsKVxuXG4gICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCR7KGhlaWdodC8yKX0pYClcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBgeGF4aXNgKVxuICAgICAgICAuY2FsbCh4X2F4aXMpXG5cbiAgICAvLyBzdmcuc2VsZWN0KCcueGF4aXMgLnRpY2s6Zmlyc3QtY2hpbGQnKS5yZW1vdmUoKTsvL2N1cnJlbnRseSBub3Qgd29ya2luZyAvL3JlbW92ZSB0aGUgZmlyc3QgdGljayB0byBmaXggYWxpZ25tZW50XG5cbiAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGB5YXhpc2ApXG4gICAgICAgIC5jYWxsKHlfYXhpcyk7XG5cbiAgICAvLyBjcmVhdGUgbGluZSBnZW5lcmF0b3JcbiAgICBjb25zdCBsaW5lID0gZDMubGluZSgpXG4gICAgICAgIC54KChkLCBpKSA9PiAoeHNjbChpKSkpXG4gICAgICAgIC55KChkLGkpID0+ICh5c2NsKGQpKSlcbiAgICAgICAgLmN1cnZlKGQzLmN1cnZlTW9ub3RvbmVYKTtcblxuICAgIC8vIGRyYXcgdGhlIGxpbmVcbiAgICBzdmcuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiYmxhY2tcIilcbiAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgXCIycHhcIilcbiAgICAgICAgLmRhdHVtKHlkYXRhKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgICAgICAuYXR0cihcImRcIiwgbGluZSk7XG59IiwiaW1wb3J0ICcuL3N0eWxlcy9kZXZlbG9wbWVudC5jc3MnO1xuaW1wb3J0IHsgXG4gICAgZmV0Y2hIZWFkbGluZXMsXG4gICAgZmV0Y2hFdmVyeXRoaW5nRm9yXG4gfSBmcm9tICcuL25ld3MnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcyc7XG5cbiBcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGNvbnNvbGUubG9nKFwiRGV2ZWxvcG1lbnQgTW9kZSFcIik7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcblxuICAgIC8vIFRlc3RpbmcgYmVjYXVzZSBJIGZvcmdvdCBob3cgdG8gdmFuaWxsYSBqc1xuICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkknbSBiZWluZyBjcmVhdGVkIHdpdGhpbiB0aGUgaW5kZXguanMgZmlsZSB0byB0ZXN0IGlmIGNoYW5nZXMgc2hvd1wiKTtcbiAgICBuZXdEaXYuYXBwZW5kQ2hpbGQobmV3Q29udGVudCk7XG4gICAgLy8gbmV3RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmZXRjaEhlYWRsaW5lcyk7IC8vdGhpcyB3b3JrcywgY3VycmVudGx5IGNvbW1lbnRlZCBvdXQgdG8gcHJldmVudCB1bm5lc3NlY2FyaWx5IHVzaW5nIHRoZSBhcGkga2V5XG4gICAgLy8gbmV3RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmZXRjaEV2ZXJ5dGhpbmdGb3IpOyAvL3RoaXMgd29ya3MsIGN1cnJlbnRseSBjb21tZW50ZWQgb3V0IHRvIHByZXZlbnQgdW5uZXNzZWNhcmlseSB1c2luZyB0aGUgYXBpIGtleVxuICAgIHJvb3QuYXBwZW5kQ2hpbGQobmV3RGl2KTtcblxuICAgIGNvbnN0IHByb3BzID0ge31cbiAgICBDaGFydChwcm9wcyk7XG4gICAgXG59KVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==