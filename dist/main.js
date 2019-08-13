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

/***/ "./config/keys.js":
/*!************************!*\
  !*** ./config/keys.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var news_api_key = exports.news_api_key = '0ebb563e2a6248caba5e4f5cecd3631c';

/***/ }),

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
var createChart = exports.createChart = function createChart() {
    var dummyData = [];
    var dummyXData = [];
    var dummyYData = [];
    var dataLength = 10;
    var margin = {
        top: 50,
        right: 25,
        bottom: 50,
        left: 40
    };
    var width = 600 - margin.left - margin.right;
    var height = 400 - margin.top - margin.bottom;

    var mag = 15;
    for (var x = 0; x < dataLength; x++) {
        var y = Math.floor(Math.random() * 2 * mag) - mag;
        var datum = [x, y];
        dummyData.push(datum);
        dummyXData.push(x);
        dummyYData.push(y);
    }
    // console.log(dummyData)


    //create the chart object
    var svg = d3.select('svg').attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom).style('background-color', 'lightblue').append("g").attr("transform", 'translate(' + margin.left + ', ' + margin.top + ')');

    var xscl = d3.scaleLinear().domain([0, dataLength]).range([0, width]);

    var yscl = d3.scaleLinear().domain([d3.max(dummyYData), d3.min(dummyYData)]).range([0, height]);

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
    svg.append("path").attr("fill", "none").attr("stroke", "black").attr("stroke-width", "2px").datum(dummyYData).attr("class", "line").attr("d", line);

    var render = function render() {
        var root = document.getElementById("main");
        root.appendChild(svg);
        return root;
    };

    return render();
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

var _news = __webpack_require__(/*! ./news */ "./src/news.js");

var _chart = __webpack_require__(/*! ./chart */ "./src/chart.js");

__webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");

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

    // const svg = document.createElement('svg')
    console.log(_chart.Chart);
    root.appendChild(_chart.Chart);
    // Testing because I forgot how to vanilla js

});

/***/ }),

/***/ "./src/news.js":
/*!*********************!*\
  !*** ./src/news.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchEverythingFor = exports.fetchHeadlines = undefined;

var _keys = __webpack_require__(/*! ../config/keys */ "./config/keys.js");

var headlines = 'https://newsapi.org/v2/top-headlines?';
var everything = "https://newsapi.org/v2/everything?";
var addCountry = function addCountry(country) {
    return 'country=' + country + '&';
};
var addSource = function addSource(source) {
    return 'sources=' + source + '&';
};
var addQuery = function addQuery(query) {
    return 'q=' + query + '&';
}; //searches for query in both title and body
var addFrom = function addFrom(start) {
    return 'from=' + start + '&';
};
var addTo = function addTo(end) {
    return 'to=' + end + '&';
};
var addLanguage = function addLanguage(ln) {
    return 'language=' + ln + '&';
};
var addPagesize = function addPagesize(int) {
    return 'pageSize=' + int + '&';
};
var page = function page(int) {
    return 'page=' + int + '&';
};

var apiKey = 'apiKey=' + _keys.news_api_key;

var fetchHeadlines = exports.fetchHeadlines = function fetchHeadlines() {
    var url = headlines + addCountry('us') + apiKey;
    var req = new Request(url);
    console.log("Requesting top 20 headlines!");
    return fetch(req).then(function (response) {
        return console.log(response.json());
    });
};

var fetchEverythingFor = exports.fetchEverythingFor = function fetchEverythingFor() {
    var query = 'bees';
    var url = everything + addQuery(query) + apiKey;
    var req = new Request(url);
    console.log('Requesting top 20 articles about ' + query + '!');
    return fetch(req).then(function (response) {
        var result = Promise.resolve(response);
        if (result.status === "ok") {
            console.log(result.articles);
        } else {
            console.log(response.json());
            console.log(response);
            console.log(result);
        }
    });
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2RldmVsb3BtZW50LmNzcz9jYjc1Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/NWQzNiJdLCJuYW1lcyI6WyJuZXdzX2FwaV9rZXkiLCJjcmVhdGVDaGFydCIsImR1bW15RGF0YSIsImR1bW15WERhdGEiLCJkdW1teVlEYXRhIiwiZGF0YUxlbmd0aCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwibWFnIiwieCIsInkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJkYXR1bSIsInB1c2giLCJzdmciLCJkMyIsInNlbGVjdCIsImF0dHIiLCJzdHlsZSIsImFwcGVuZCIsInhzY2wiLCJzY2FsZUxpbmVhciIsImRvbWFpbiIsInJhbmdlIiwieXNjbCIsIm1heCIsIm1pbiIsInhfYXhpcyIsImF4aXNCb3R0b20iLCJzY2FsZSIsInlfYXhpcyIsImF4aXNMZWZ0IiwiY2FsbCIsImxpbmUiLCJkIiwiaSIsImN1cnZlIiwiY3VydmVNb25vdG9uZVgiLCJyZW5kZXIiLCJyb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwicHJvY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwibmV3RGl2IiwiY3JlYXRlRWxlbWVudCIsIm5ld0NvbnRlbnQiLCJjcmVhdGVUZXh0Tm9kZSIsIkNoYXJ0IiwiaGVhZGxpbmVzIiwiZXZlcnl0aGluZyIsImFkZENvdW50cnkiLCJjb3VudHJ5IiwiYWRkU291cmNlIiwic291cmNlIiwiYWRkUXVlcnkiLCJxdWVyeSIsImFkZEZyb20iLCJzdGFydCIsImFkZFRvIiwiZW5kIiwiYWRkTGFuZ3VhZ2UiLCJsbiIsImFkZFBhZ2VzaXplIiwiaW50IiwicGFnZSIsImFwaUtleSIsImZldGNoSGVhZGxpbmVzIiwidXJsIiwicmVxIiwiUmVxdWVzdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImZldGNoRXZlcnl0aGluZ0ZvciIsInJlc3VsdCIsIlByb21pc2UiLCJyZXNvbHZlIiwic3RhdHVzIiwiYXJ0aWNsZXMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGTyxJQUFNQSxzQ0FBZSxrQ0FBckIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNFQSxJQUFNQyxvQ0FBYyxTQUFkQSxXQUFjLEdBQU07QUFDN0IsUUFBTUMsWUFBWSxFQUFsQjtBQUNBLFFBQU1DLGFBQWEsRUFBbkI7QUFDQSxRQUFNQyxhQUFhLEVBQW5CO0FBQ0EsUUFBTUMsYUFB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MkI7QUFDdkJ0QyxvQkFBUUMsR0FBUixDQUFZa0MsT0FBT0ksUUFBbkI7QUFDSCxTQUZELE1BRU87QUFDSHZDLG9CQUFRQyxHQUFSLENBQVkrQixTQUFTQyxJQUFULEVBQVo7QUFDQWpDLG9CQUFRQyxHQUFSLENBQVkrQixRQUFaO0FBQ0FoQyxvQkFBUUMsR0FBUixDQUFZa0MsTUFBWjtBQUNIO0FBQ0osS0FWRSxDQUFQO0FBVU8sQ0FmSixDOzs7Ozs7Ozs7OztBQzNCUCx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY29uc3QgbmV3c19hcGlfa2V5ID0gJzBlYmI1NjNlMmE2MjQ4Y2FiYTVlNGY1Y2VjZDM2MzFjJzsiLCJcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNoYXJ0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGR1bW15RGF0YSA9IFtdXG4gICAgY29uc3QgZHVtbXlYRGF0YSA9IFtdXG4gICAgY29uc3QgZHVtbXlZRGF0YSA9IFtdXG4gICAgY29uc3QgZGF0YUxlbmd0aCA9IDEwO1xuICAgIGNvbnN0IG1hcmdpbiA9IHtcbiAgICAgICAgdG9wOiA1MCxcbiAgICAgICAgcmlnaHQ6IDI1LFxuICAgICAgICBib3R0b206IDUwLFxuICAgICAgICBsZWZ0OjQwLFxuICAgIH1cbiAgICBjb25zdCB3aWR0aCA9IDYwMCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGNvbnN0IGhlaWdodCA9IDQwMCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgY29uc3QgbWFnID0gMTU7XG4gICAgZm9yKGxldCB4ID0gMDsgeCA8IGRhdGFMZW5ndGg7IHgrKyl7XG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMiptYWcpIC0gbWFnO1xuICAgICAgICBjb25zdCBkYXR1bSA9IFt4LCB5XTtcbiAgICAgICAgZHVtbXlEYXRhLnB1c2goZGF0dW0pO1xuICAgICAgICBkdW1teVhEYXRhLnB1c2goeCk7XG4gICAgICAgIGR1bW15WURhdGEucHVzaCh5KTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coZHVtbXlEYXRhKVxuXG5cbiAgICAvL2NyZWF0ZSB0aGUgY2hhcnQgb2JqZWN0XG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCdzdmcnKVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSlcbiAgICAgICAgICAgIC5zdHlsZSgnYmFja2dyb3VuZC1jb2xvcicsICdsaWdodGJsdWUnKVxuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHttYXJnaW4udG9wfSlgKVxuXG4gICAgY29uc3QgeHNjbCA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgLmRvbWFpbihbMCwgZGF0YUxlbmd0aF0pXG4gICAgICAgIC5yYW5nZShbMCwgd2lkdGhdKTtcblxuICAgIGNvbnN0IHlzY2wgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5kb21haW4oW2QzLm1heChkdW1teVlEYXRhKSwgZDMubWluKGR1bW15WURhdGEpXSlcbiAgICAgICAgLnJhbmdlKFswLCBoZWlnaHRdKTtcblxuICAgIGNvbnN0IHhfYXhpcyA9IGQzLmF4aXNCb3R0b20oKVxuICAgICAgICAgICAgICAgICAgICAuc2NhbGUoeHNjbClcbiAgICBjb25zdCB5X2F4aXMgPSBkMy5heGlzTGVmdCgpXG4gICAgICAgICAgICAgICAgICAgIC5zY2FsZSh5c2NsKVxuXG4gICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCR7KGhlaWdodC8yKX0pYClcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBgeGF4aXNgKVxuICAgICAgICAuY2FsbCh4X2F4aXMpXG5cbiAgICAvLyBzdmcuc2VsZWN0KCcueGF4aXMgLnRpY2s6Zmlyc3QtY2hpbGQnKS5yZW1vdmUoKTsvL2N1cnJlbnRseSBub3Qgd29ya2luZyAvL3JlbW92ZSB0aGUgZmlyc3QgdGljayB0byBmaXggYWxpZ25tZW50XG5cbiAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGB5YXhpc2ApXG4gICAgICAgIC5jYWxsKHlfYXhpcyk7XG5cbiAgICAvLyBjcmVhdGUgbGluZSBnZW5lcmF0b3JcbiAgICBjb25zdCBsaW5lID0gZDMubGluZSgpXG4gICAgICAgIC54KChkLCBpKSA9PiAoeHNjbChpKSkpXG4gICAgICAgIC55KChkLGkpID0+ICh5c2NsKGQpKSlcbiAgICAgICAgLmN1cnZlKGQzLmN1cnZlTW9ub3RvbmVYKTtcblxuICAgIC8vIGRyYXcgdGhlIGxpbmVcbiAgICBzdmcuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiYmxhY2tcIilcbiAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgXCIycHhcIilcbiAgICAgICAgLmRhdHVtKGR1bW15WURhdGEpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgICAgIC5hdHRyKFwiZFwiLCBsaW5lKTtcblxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChzdmcpXG4gICAgICAgIHJldHVybiByb290XG4gICAgfVxuIFxuICAgIHJldHVybiByZW5kZXIoKVxufSIsImltcG9ydCAnLi9zdHlsZXMvZGV2ZWxvcG1lbnQuY3NzJztcbmltcG9ydCB7IFxuICAgIGZldGNoSGVhZGxpbmVzLFxuICAgIGZldGNoRXZlcnl0aGluZ0ZvclxuIH0gZnJvbSAnLi9uZXdzJztcbmltcG9ydCB7IENoYXJ0IH0gZnJvbSAnLi9jaGFydCc7XG5pbXBvcnQgJy4vc3R5bGVzL21haW4uY3NzJztcblxuIFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgY29uc29sZS5sb2coXCJEZXZlbG9wbWVudCBNb2RlIVwiKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuXG4gICAgLy8gVGVzdGluZyBiZWNhdXNlIEkgZm9yZ290IGhvdyB0byB2YW5pbGxhIGpzXG4gICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmV3Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSSdtIGJlaW5nIGNyZWF0ZWQgd2l0aGluIHRoZSBpbmRleC5qcyBmaWxlIHRvIHRlc3QgaWYgY2hhbmdlcyBzaG93XCIpO1xuICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChuZXdDb250ZW50KTtcbiAgICAvLyBuZXdEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZldGNoSGVhZGxpbmVzKTsgLy90aGlzIHdvcmtzLCBjdXJyZW50bHkgY29tbWVudGVkIG91dCB0byBwcmV2ZW50IHVubmVzc2VjYXJpbHkgdXNpbmcgdGhlIGFwaSBrZXlcbiAgICAvLyBuZXdEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZldGNoRXZlcnl0aGluZ0Zvcik7IC8vdGhpcyB3b3JrcywgY3VycmVudGx5IGNvbW1lbnRlZCBvdXQgdG8gcHJldmVudCB1bm5lc3NlY2FyaWx5IHVzaW5nIHRoZSBhcGkga2V5XG4gICAgcm9vdC5hcHBlbmRDaGlsZChuZXdEaXYpO1xuXG4gICAgLy8gY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJylcbiAgICBjb25zb2xlLmxvZyhDaGFydClcbiAgICByb290LmFwcGVuZENoaWxkKENoYXJ0KVxuICAgIC8vIFRlc3RpbmcgYmVjYXVzZSBJIGZvcmdvdCBob3cgdG8gdmFuaWxsYSBqc1xuXG5cbiAgICBcbn0pXG4iLCJpbXBvcnQgeyBuZXdzX2FwaV9rZXkgfSBmcm9tICcuLi9jb25maWcva2V5cyc7XG5cbmNvbnN0IGhlYWRsaW5lcyA9ICdodHRwczovL25ld3NhcGkub3JnL3YyL3RvcC1oZWFkbGluZXM/JztcbmNvbnN0IGV2ZXJ5dGhpbmcgPSBcImh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvZXZlcnl0aGluZz9cIjtcbmNvbnN0IGFkZENvdW50cnkgPSBjb3VudHJ5ID0+IChgY291bnRyeT0ke2NvdW50cnl9JmApO1xuY29uc3QgYWRkU291cmNlID0gc291cmNlID0+IChgc291cmNlcz0ke3NvdXJjZX0mYCk7XG5jb25zdCBhZGRRdWVyeSA9IHF1ZXJ5ID0+IChgcT0ke3F1ZXJ5fSZgKTsgLy9zZWFyY2hlcyBmb3IgcXVlcnkgaW4gYm90aCB0aXRsZSBhbmQgYm9keVxuY29uc3QgYWRkRnJvbSA9IHN0YXJ0ID0+IChgZnJvbT0ke3N0YXJ0fSZgKTtcbmNvbnN0IGFkZFRvID0gZW5kID0+IChgdG89JHtlbmR9JmApO1xuY29uc3QgYWRkTGFuZ3VhZ2UgPSBsbiA9PiAoYGxhbmd1YWdlPSR7bG59JmApO1xuY29uc3QgYWRkUGFnZXNpemUgPSBpbnQgPT4gKGBwYWdlU2l6ZT0ke2ludH0mYCk7XG5jb25zdCBwYWdlID0gaW50ID0+IChgcGFnZT0ke2ludH0mYCk7XG5cbmNvbnN0IGFwaUtleSA9IGBhcGlLZXk9JHtuZXdzX2FwaV9rZXl9YFxuXG5cblxuXG5cbmV4cG9ydCBjb25zdCBmZXRjaEhlYWRsaW5lcyA9ICgpID0+IHtcbiAgICBjb25zdCB1cmwgPSBoZWFkbGluZXMgKyBhZGRDb3VudHJ5KCd1cycpICsgYXBpS2V5O1xuICAgIGNvbnN0IHJlcSA9IG5ldyBSZXF1ZXN0KHVybCk7XG4gICAgY29uc29sZS5sb2coXCJSZXF1ZXN0aW5nIHRvcCAyMCBoZWFkbGluZXMhXCIpXG4gICAgcmV0dXJuIGZldGNoKHJlcSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlLmpzb24oKSkpICAgIFxufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRXZlcnl0aGluZ0ZvciA9ICgpID0+IHtcbiAgICBjb25zdCBxdWVyeSA9ICdiZWVzJztcbiAgICBjb25zdCB1cmwgPSBldmVyeXRoaW5nICsgYWRkUXVlcnkocXVlcnkpICsgYXBpS2V5O1xuICAgIGNvbnN0IHJlcSA9IG5ldyBSZXF1ZXN0KHVybCk7XG4gICAgY29uc29sZS5sb2coYFJlcXVlc3RpbmcgdG9wIDIwIGFydGljbGVzIGFib3V0ICR7cXVlcnl9IWApXG4gICAgcmV0dXJuIGZldGNoKHJlcSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKVxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwib2tcIil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmFydGljbGVzKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5qc29uKCkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pfSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=