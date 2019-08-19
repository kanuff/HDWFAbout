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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chart_utils = __webpack_require__(/*! ./chart_utils */ "./src/chart_utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sortDate = function sortDate(a, b) {
    var date1 = new Date(a.x);
    var date2 = new Date(b.x);
    if (date1 >= date2) {
        return 1;
    } else {
        return -1;
    }
};

Date.prototype.addDay = function () {
    this.setDate(this.getDate() + 1);
};

var generateDateRange = function generateDateRange(startDate, endDate) {
    var dates = [];
    var currentDate = startDate;
    while (currentDate < endDate) {
        var date = new Date(currentDate);
        var formattedDate = "" + date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)) + "-" + ("" + date.getDate());
        dates.push(_defineProperty({}, formattedDate, { x: formattedDate, y: null }));
        currentDate.addDay();
    }
    return dates;
};

var Chart = function () {
    function Chart(props) {
        _classCallCheck(this, Chart);

        this.data = props.data;
        this.margin = {
            top: 30,
            right: 20,
            bottom: 50,
            left: 20
        };
        this.cutoff = 3;
        this.good = this.cutoff;
        this.bad = this.cutoff * -1;
        this.width = 810 - this.margin.left - this.margin.right;
        this.height = 370 - this.margin.top - this.margin.bottom;
        this.svg = d3.select('svg').attr('width', this.width + this.margin.left + this.margin.right).attr('height', this.height + this.margin.top + this.margin.bottom).style('background-color', 'transparent').append("g").attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
        var today = new Date();
        this.startDate = new Date(today.setDate(today.getDate() - 31));
        this.endDate = new Date();
        this.dateRange = generateDateRange(this.startDate, this.endDate);
    }

    _createClass(Chart, [{
        key: "dummyData",
        value: function dummyData() {
            var dummyData = [];
            var dataLength = 31;
            var mag = 25;
            for (var x = 0; x < dataLength; x++) {
                var y = Math.floor(Math.random() * 2 * mag) - mag;
                var datum = { x: Object.keys(this.dateRange[x])[0], y: y };
                dummyData.push(datum);
            }
            console.log(dummyData);
            return dummyData;
        }
    }, {
        key: "build",
        value: function build(data) {
            var svg = this.svg,
                height = this.height,
                width = this.width,
                good = this.good,
                bad = this.bad;

            var xdata = [];
            var ydata = [];
            data.forEach(function (datum) {
                xdata.push(datum.x);
                ydata.push(datum.y);
            });
            var parseTime = d3.timeParse("%Y-%m-%d");
            var xFormat = "%b-%d";
            var xscl = d3.scaleTime().domain(d3.extent(data, function (d) {
                return parseTime(d.x);
            })).range([0, width]);

            var x_axis = d3.axisBottom().scale(xscl);

            var yscl = d3.scaleLinear().domain([d3.max(ydata), d3.min(ydata)]).range([0, height]);

            var y_axis = d3.axisLeft().scale(yscl);

            svg.append("g").attr("transform", "translate(0," + yscl(0) + ")").attr("class", "xaxis").call(x_axis);

            svg.select(".xaxis").attr("transform", "translate(0," + yscl(0) + ")").call(x_axis.tickFormat(d3.timeFormat(xFormat))).selectAll("text").attr("y", 0).attr("x", 9).attr("dy", ".35em").style("text-anchor", "start").style("opacity", 0);

            svg.append("g").attr("class", "yaxis").call(y_axis.tickSize(0).tickSizeOuter(5)).selectAll("text").remove();

            // svg.append("g")
            //     // .attr("transform", "translate(0," + height + ")")
            //     .call(d3.axisBottom(x).tickSizeOuter(0))


            // create line generator
            var line = d3.line().x(function (d) {
                return xscl(parseTime(d.x));
            }).y(function (d) {
                return yscl(d.y);
            }).curve(d3.curveBundle.beta(0.85));

            svg.append("text").attr("y", yscl(good) - 5).attr("x", 15).attr("class", "good-label").attr("text-anchor", "right").style("fill", "transparent")
            // .style("fill", "rgba(0, 128, 0, 0.6)")
            .text("+ sentiment");

            svg.append("text").attr("y", yscl(bad) + 15).attr("x", 15).attr("class", "bad-label").attr("text-anchor", "right").style("fill", "transparent")
            // .style("fill", "rgba(200, 0, 0, 0.6)")
            .text("- sentiment");

            svg.append("line").attr("x1", 0).attr("y1", yscl(good)).attr("x2", width).attr("y2", yscl(good)).attr("fill", "none").attr("stroke", "transparent").attr("stroke-width", "1px").attr("class", "good-line").style("stroke-dasharray", "3, 3");

            svg.append("line").attr("x1", 0).attr("y1", yscl(bad)).attr("x2", width).attr("y2", yscl(bad)).attr("fill", "none").attr("stroke", "transparent").attr("stroke-width", "1px").attr("class", "bad-line").style("stroke-dasharray", "3, 3");

            // draw the line
            svg.append('path').attr("fill", "none").attr("stroke", "transparent").attr("stroke-width", "3px").attr("stroke-linecap", "round").data([data]).attr("class", "line").attr("d", line);
        }
    }, {
        key: "render",
        value: function render(payload) {
            var scatterData = payload.scatterData,
                total = payload.total;
            var svg = this.svg,
                height = this.height,
                width = this.width,
                good = this.good,
                bad = this.bad;

            var ydata = [];
            var xdata = [];
            var singleArticleInfo = d3.select(".article-info-container");

            var prelineData = Object.assign([], this.dateRange, payload.lineData);

            var plineData = [];
            prelineData.forEach(function (outerDatum) {
                plineData.push(Object.values(outerDatum));
            });
            var lineData = plineData.flat().sort(sortDate);

            (0, _chart_utils.conditionalTitleColor)(total);

            scatterData.forEach(function (datum) {
                ydata.push(datum.y);
                xdata.push(datum.x);
            });

            var parseTime = d3.timeParse("%Y-%m-%d");
            var xFormat = "%b-%d";
            var xscl = d3.scaleTime().domain(d3.extent(lineData, function (d) {
                return parseTime(d.x);
            })).range([0, width]);

            var x_axis = d3.axisBottom().scale(xscl);

            var yscl = d3.scaleLinear().domain([d3.max(ydata), d3.min(ydata)]).range([0, height]);

            var y_axis = d3.axisLeft().scale(yscl);

            var labels = d3.selectAll(".label").transition().ease(d3.easeExp).duration(1700).style("color", "rgba(255,255,255, 0.7)");
            var readMore = d3.select(".read-more").transition().ease(d3.easeExp).duration(1700).style("color", "rgba(255,255,255, 0.7)");

            svg.select(".xaxis").transition().ease(d3.easeExp).duration(1700).attr("transform", "translate(0," + yscl(0) + ")").call(x_axis.tickFormat(d3.timeFormat(xFormat))).selectAll("text").attr("y", 0).attr("x", 9).attr("dy", ".35em").attr("transform", "rotate(90)").style("text-anchor", "start").style("fill", "white").style("opacity", 1);

            svg.select(".good-label").transition().ease(d3.easeExp).duration(1700).attr("y", yscl(good) - 5).attr("x", 15).attr("display", function () {
                return (0, _chart_utils.conditionalDisplay)(yscl(good), 0, false);
            }).style("fill", "rgba(0, 128, 0, 0.6)");

            svg.select(".bad-label").transition().ease(d3.easeExp).duration(1700).attr("y", yscl(bad) + 15).attr("x", 15).attr("display", function () {
                return (0, _chart_utils.conditionalDisplay)(yscl(bad), height, true);
            }).style("fill", "rgba(200, 0, 0, 0.6)");

            svg.select(".yaxis").transition().ease(d3.easeExp).duration(1700).call(y_axis.tickSize(0).tickSizeOuter(5)).selectAll("text").style("fill", "white");
            svg.select(".yaxis").selectAll("text").remove();

            var line = d3.line().x(function (d) {
                return xscl(parseTime(d.x));
            }).y(function (d) {
                return yscl(d.y);
            })
            // .defined(d => {
            //     debugger
            //     if (d.y) {
            //         return true
            //     } else {
            //         return false
            //     }
            // })
            .curve(d3.curveBundle.beta(0.85));

            var path = svg.selectAll('.line');
            path.data([lineData]).transition().ease(d3.easeExp).duration(1700).attr("class", "line").style("stroke", "rgba(0, 0, 139, 0.8)").attr("d", line);

            svg.select(".good-line").transition().ease(d3.easeExp).duration(1700).attr("x1", 0).attr("y1", yscl(good)).attr("x2", width).attr("y2", yscl(good)).attr("display", function () {
                return (0, _chart_utils.conditionalDisplay)(yscl(good), 0, false);
            }).style("stroke", "rgba(0, 128, 0, 0.6)").style("stroke-width", "2px");

            svg.select(".bad-line").transition().ease(d3.easeExp).duration(1700).attr("x1", 0).attr("y1", yscl(bad)).attr("x2", width).attr("y2", yscl(bad)).attr("display", function () {
                return (0, _chart_utils.conditionalDisplay)(yscl(bad), height, true);
            }).style("stroke", "rgba(200, 0, 0, 0.6)").style("stroke-width", "2px");

            var createDots = svg.selectAll(".dot").data(scatterData).enter().append("circle").attr("class", "dot");

            createDots.on("click", function (d) {
                window.open(d.url, "_blank");
            }).on("mouseover", function (d) {
                d3.selectAll(".dot").style("fill", function (d) {
                    return (0, _chart_utils.conditionalColor)(d, good, bad);
                }).style("opacity", function (d) {
                    return (0, _chart_utils.conditionalOpacity)(d, good, bad);
                });
                d3.select(this).style("opacity", 1).style("fill", "darkblue");
                (0, _chart_utils.fillArticleInfo)(singleArticleInfo, d);
            });

            createDots.transition().ease(d3.easeExp).duration(1700).attr("cx", function (d) {
                return xscl(parseTime(d.x));
            }).attr("cy", function (d) {
                return yscl(d.y);
            }).attr("r", function (d) {
                if (d.title === total.highScore.title) {
                    return 1;
                }
                return 8;
            }).attr("id", function (_, i) {
                return "dot_" + i;
            }).style("opacity", function (d) {
                return (0, _chart_utils.conditionalOpacity)(d, good, bad);
            }).style("fill", function (d) {
                return (0, _chart_utils.conditionalColor)(d, good, bad);
            });

            var articlesContainer = d3.select("#articles-list").selectAll("li").data(scatterData);
            articlesContainer.enter().append("li").attr("class", "article-list-item").attr("id", function (_, i) {
                return "article_" + i;
            }).style("background", function (d) {
                return (0, _chart_utils.conditionalColor)(d, good, bad, 0.3);
            }).text(function (d) {
                var date = new Date(d.x);
                var options = { month: 'short', day: 'numeric' };
                return date.toLocaleDateString("en-US", options) + ": " + d.title;
            }).on("click", function (d, i) {
                d3.selectAll(".dot").style("fill", function (d) {
                    return (0, _chart_utils.conditionalColor)(d, good, bad);
                }).style("opacity", function (d) {
                    return (0, _chart_utils.conditionalOpacity)(d, good, bad);
                });
                d3.select("#dot_" + i).attr("r", function (d, i) {
                    bigDot = d3.select(this);
                    (0, _chart_utils.handleDotUX)(d, bigDot, singleArticleInfo, 0.2);
                    return 20;
                });
            }).on("mouseover", function (d, i) {
                d3.selectAll(".dot").style("fill", function (d) {
                    return (0, _chart_utils.conditionalColor)(d, good, bad);
                }).style("opacity", function (d) {
                    return (0, _chart_utils.conditionalOpacity)(d, good, bad);
                });
                d3.select("#dot_" + i).style("opacity", 1).style("fill", "darkblue");

                d3.selectAll(".article-list-item").style("background", function (d) {
                    return (0, _chart_utils.conditionalColor)(d, good, bad, 0.3);
                });
                d3.selectAll(this)
                // .style("opacity", d => conditionalColor(d, good, bad, 0.3))
                .style("fill", "rgba(0, 0, 139, 0.5)");
            });

            articlesContainer.style("background", function (d) {
                return (0, _chart_utils.conditionalColor)(d, good, bad, 0.3);
            }).text(function (d) {
                var date = new Date(d.x);
                var options = { month: 'short', day: 'numeric' };
                return date.toLocaleDateString("en-US", options) + ": " + d.title;
            });

            articlesContainer.exit().remove();
            // .on("click", function (d, i) {
            //     d3.selectAll(".dot")
            //         .style("fill", d => conditionalColor(d, good, bad))
            //         .style("opacity", d => conditionalOpacity(d, good, bad));
            //     d3.select(`#dot_${i}`)
            //         .attr("r", function (d, i) {
            //             bigDot = d3.select(this)
            //             handleDotUX(d, bigDot, singleArticleInfo, 0.2);
            //             return 15
            //         });
            // })
            // .on("mouseover", function (d, i) {
            //     d3.selectAll(".dot")
            //         .style("fill", d => conditionalColor(d, good, bad))
            //         .style("opacity", d => conditionalOpacity(d, good, bad));
            //     d3.select(`#dot_${i}`)
            //         .style("opacity", 1)
            //         .style("fill", "lightblue");

            //     d3.selectAll(".article-list-item")
            //         .style("background", d => conditionalColor(d, good, bad, 0.1));
            //     d3.select(this)
            //         .style("opacity", d => conditionalColor(d, good, bad, 0.3));
            // })


            // .each( d => {

            // })

            var updateDots = svg.selectAll(".dot").data(scatterData);

            var bigDot = void 0;
            updateDots.transition().ease(d3.easeExp).duration(1700).attr("class", "dot").attr("cx", function (d) {
                return xscl(parseTime(d.x));
            }).attr("cy", function (d) {
                return yscl(d.y);
            }).attr("r", function (d, i) {
                var r = void 0;
                if (d.title === total.highScore.title) {
                    bigDot = d3.select(this);
                    (0, _chart_utils.handleDotUX)(d, bigDot, singleArticleInfo);
                    r = 20;
                } else {
                    r = 8;
                }
                return r;
            }).style("opacity", function (d) {
                return (0, _chart_utils.conditionalOpacity)(d, good, bad);
            }).style("fill", function (d) {
                return (0, _chart_utils.conditionalColor)(d, good, bad);
            });

            svg.selectAll(".dot").data(scatterData).exit().remove();
        }
    }]);

    return Chart;
}();

exports.default = Chart;

/***/ }),

/***/ "./src/chart_utils.js":
/*!****************************!*\
  !*** ./src/chart_utils.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var conditionalTitleColor = function conditionalTitleColor(total) {
    d3.select(".chart-title").data([total]).transition().ease(d3.easeExp).duration(2000).style("color", function (d) {
        if (d.average > 0.13) {
            return "rgba(" + 40 * Math.sqrt(d.average) + ", " + 128 * Math.sqrt(d.average) + ", " + 40 * Math.sqrt(d.average) + ", 0.97)";
        } else if (d.average < -0.13) {
            return "rgba(" + 128 * Math.sqrt(Math.abs(d.average)) + ", " + 40 * Math.sqrt(Math.abs(d.average)) + ", " + 40 * Math.sqrt(Math.abs(d.average)) + ", 0.97)";
        } else {
            return "rgba(" + 255 * Math.sqrt(Math.abs(d.average)) + ", " + 255 * Math.sqrt(Math.abs(d.average)) + ", " + 255 * Math.sqrt(Math.abs(d.average)) + ", 0.8)";
        }
    });
    d3.select("#second-title").data([total]).transition().ease(d3.easeExp).duration(2000).style("color", function (d) {
        if (d.average > 0.13) {
            return "rgba(" + 40 * Math.sqrt(d.average) + ", " + 128 * Math.sqrt(d.average) + ", " + 40 * Math.sqrt(d.average) + ", 0.97)";
        } else if (d.average < -0.13) {
            return "rgba(" + 128 * Math.sqrt(Math.abs(d.average)) + ", " + 40 * Math.sqrt(Math.abs(d.average)) + ", " + 40 * Math.sqrt(Math.abs(d.average)) + ", 0.97)";
        } else {
            return "rgba(" + 255 * Math.sqrt(Math.abs(d.average)) + ", " + 255 * Math.sqrt(Math.abs(d.average)) + ", " + 255 * Math.sqrt(Math.abs(d.average)) + ", 0.8)";
        }
    });
};

var conditionalDisplay = function conditionalDisplay(attr_value, cutoff) {
    var greaterThan = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    switch (greaterThan) {
        case true:
            if (attr_value > cutoff) {
                return "none";
            } else {
                return "inherit";
            }
        case false:
            if (attr_value < cutoff) {
                return "none";
            } else {
                return "inherit";
            }
        default:
            return "inherit";
    }
};

var conditionalOpacity = function conditionalOpacity(d, good, bad) {
    if (d.y >= good) {
        return "0.5";
    } else if (d.y <= bad) {
        return "0.5";
    } else {
        return "0.3";
    }
};

var conditionalColor = function conditionalColor(d, good, bad) {
    var opacity = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    if (d.y >= good) {
        return "rgba(0,128,0, " + opacity;
    } else if (d.y <= bad) {
        return "rgba(255,0,0, " + opacity;
    } else {
        return "rgba(255,255,255, " + opacity;
    }
};

var fillArticleInfo = function fillArticleInfo(singleArticleInfo, d) {
    singleArticleInfo.select(".article-title").text("" + d.title).transition().ease(d3.easeExp).duration(1700).style("color", "rgba(255,255,255, 0.5)");
    singleArticleInfo.select(".article-author").text("" + d.source).transition().ease(d3.easeExp).duration(1700).style("color", "rgba(255,255,255, 0.5)");
    // singleArticleInfo.select(".article-sentiment")
    //     .text(
    //         `${d.y}`
    //     );
    // singleArticleInfo.select(".article-relevance")
    //     .text(
    //         `${d.relevance}`
    //     );
    singleArticleInfo.select(".article-description").text("" + d.description).transition().ease(d3.easeExp).duration(1700).style("color", "rgba(255,255,255, 0.5)");

    singleArticleInfo.select(".article-image").attr("src", "" + d.image);
    singleArticleInfo.select(".read-more").attr("href", "" + d.url);
};

var handleDotUX = function handleDotUX(d, bigDot, singleArticleInfo) {
    var speed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    var delay = 1800;
    if (speed >= 1) {
        // setTimeout(() => {
        bigDot.transition().delay(delay).ease(d3.easeElastic).duration(2000).attr("r", 8).style("fill", "darkblue").style("opacity", 1);
        if (speed >= 1) {
            // setTimeout(() => {
            singleArticleInfo.transition().delay(delay + 1000).duration(800).style("background-color", "rgba(0, 0, 139, 0.5)");

            fillArticleInfo(singleArticleInfo, d);

            singleArticleInfo.transition().delay(delay + 1700).duration(800).style("background-color", "transparent");
            // }, 800*speed)
        }
        // }, delay*speed)
    } else {
        bigDot.style("fill", "darkblue").style("opacity", 1);
        bigDot.transition().ease(d3.easeLinear).duration(300).attr("r", 8);
        fillArticleInfo(singleArticleInfo, d);
    }
};

exports.conditionalTitleColor = conditionalTitleColor;
exports.conditionalDisplay = conditionalDisplay;
exports.conditionalOpacity = conditionalOpacity;
exports.conditionalColor = conditionalColor;
exports.fillArticleInfo = fillArticleInfo;
exports.handleDotUX = handleDotUX;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./styles/development.css */ "./src/styles/development.css");

var _chart = __webpack_require__(/*! ./chart */ "./src/chart.js");

var _chart2 = _interopRequireDefault(_chart);

var _query_field = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './query_field'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _query_field2 = _interopRequireDefault(_query_field);

__webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (true) {
    console.log("Development Mode!");
}

document.addEventListener('DOMContentLoaded', function () {
    var props = {};
    var main = document.getElementById("main");
    var secondTitle = document.getElementById("second-title");

    var chart = new _chart2.default(props);
    props.chart = chart;

    main.insertBefore((0, _query_field2.default)(props), secondTitle);

    var dummyData = chart.dummyData();
    chart.build(dummyData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFydF91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9kZXZlbG9wbWVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLmNzcz81ZDM2Il0sIm5hbWVzIjpbInNvcnREYXRlIiwiYSIsImIiLCJkYXRlMSIsIkRhdGUiLCJ4IiwiZGF0ZTIiLCJwcm90b3R5cGUiLCJhZGREYXkiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImdlbmVyYXRlRGF0ZVJhbmdlIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImRhdGVzIiwiY3VycmVudERhdGUiLCJkYXRlIiwiZm9ybWF0dGVkRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJwdXNoIiwieSIsIkNoYXJ0IiwicHJvcHMiLCJkYXRhIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiY3V0b2ZmIiwiZ29vZCIsImJhZCIsIndpZHRoIiwiaGVpZ2h0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhdHRyIiwic3R5bGUiLCJhcHBlbmQiLCJ0b2RheSIsImRhdGVSYW5nZSIsImR1bW15RGF0YSIsImRhdGFMZW5ndGgiLCJtYWciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJkYXR1bSIsIk9iamVjdCIsImtleXMiLCJjb25zb2xlIiwibG9nIiwieGRhdGEiLCJ5ZGF0YSIsImZvckVhY2giLCJwYXJzZVRpbWUiLCJ0aW1lUGFyc2UiLCJ4Rm9ybWF0IiwieHNjbCIsInNjYWxlVGltZSIsImRvbWFpbiIsImV4dGVudCIsImQiLCJyYW5nZSIsInhfYXhpcyIsImF4aXNCb3R0b20iLCJzY2FsZSIsInlzY2wiLCJzY2FsZUxpbmVhciIsIm1heCIsIm1pbiIsInlfYXhpcyIsImF4aXNMZWZ0IiwiY2FsbCIsInRpY2tGb3JtYXQiLCJ0aW1lRm9ybWF0Iiwic2VsZWN0QWxsIiwidGlja1NpemUiLCJ0aWNrU2l6ZU91dGVyIiwicmVtb3ZlIiwibGluZSIsImN1cnZlIiwiY3VydmVCdW5kbGUiLCJiZXRhIiwidGV4dCIsInBheWxvYWQiLCJzY2F0dGVyRGF0YSIsInRvdGFsIiwic2luZ2xlQXJ0aWNsZUluZm8iLCJwcmVsaW5lRGF0YSIsImFzc2lnbiIsImxpbmVEYXRhIiwicGxpbmVEYXRhIiwidmFsdWVzIiwib3V0ZXJEYXR1bSIsImZsYXQiLCJzb3J0IiwibGFiZWxzIiwidHJhbnNpdGlvbiIsImVhc2UiLCJlYXNlRXhwIiwiZHVyYXRpb24iLCJyZWFkTW9yZSIsInBhdGgiLCJjcmVhdGVEb3RzIiwiZW50ZXIiLCJvbiIsIndpbmRvdyIsIm9wZW4iLCJ1cmwiLCJ0aXRsZSIsImhpZ2hTY29yZSIsIl8iLCJpIiwiYXJ0aWNsZXNDb250YWluZXIiLCJvcHRpb25zIiwibW9udGgiLCJkYXkiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJiaWdEb3QiLCJleGl0IiwidXBkYXRlRG90cyIsInIiLCJjb25kaXRpb25hbFRpdGxlQ29sb3IiLCJhdmVyYWdlIiwic3FydCIsImFicyIsImNvbmRpdGlvbmFsRGlzcGxheSIsImF0dHJfdmFsdWUiLCJncmVhdGVyVGhhbiIsImNvbmRpdGlvbmFsT3BhY2l0eSIsImNvbmRpdGlvbmFsQ29sb3IiLCJvcGFjaXR5IiwiZmlsbEFydGljbGVJbmZvIiwic291cmNlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImhhbmRsZURvdFVYIiwic3BlZWQiLCJkZWxheSIsImVhc2VFbGFzdGljIiwiZWFzZUxpbmVhciIsInByb2Nlc3MiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWluIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWNvbmRUaXRsZSIsImNoYXJ0IiwiaW5zZXJ0QmVmb3JlIiwiYnVpbGQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7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Q0FBLFVBQU0rSCxLQUFOLEdBQWNBLEtBQWQ7O0FBRUFILFNBQUtJLFlBQUwsQ0FBa0IsMkJBQVdoSSxLQUFYLENBQWxCLEVBQXFDOEgsV0FBckM7O0FBSUEsUUFBTTFHLFlBQVkyRyxNQUFNM0csU0FBTixFQUFsQjtBQUNBMkcsVUFBTUUsS0FBTixDQUFZN0csU0FBWjtBQUlILENBakJELEU7Ozs7Ozs7Ozs7O0FDWEEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHtcbiAgICBjb25kaXRpb25hbENvbG9yLFxuICAgIGNvbmRpdGlvbmFsRGlzcGxheSxcbiAgICBjb25kaXRpb25hbE9wYWNpdHksXG4gICAgY29uZGl0aW9uYWxUaXRsZUNvbG9yLFxuICAgIGZpbGxBcnRpY2xlSW5mbyxcbiAgICBoYW5kbGVEb3RVWFxufSBmcm9tICcuL2NoYXJ0X3V0aWxzJ1xuXG5jb25zdCBzb3J0RGF0ZSA9IChhLCBiKSA9PiB7XG4gICAgY29uc3QgZGF0ZTEgPSBuZXcgRGF0ZShhLngpXG4gICAgY29uc3QgZGF0ZTIgPSBuZXcgRGF0ZShiLngpXG4gICAgaWYgKGRhdGUxID49IGRhdGUyKSB7XG4gICAgICAgIHJldHVybiAxXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgfVxufVxuXG5EYXRlLnByb3RvdHlwZS5hZGREYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXREYXRlKHRoaXMuZ2V0RGF0ZSgpICsgMSlcbn1cblxuY29uc3QgZ2VuZXJhdGVEYXRlUmFuZ2UgPSAoc3RhcnREYXRlLCBlbmREYXRlKSA9PiB7XG4gICAgY29uc3QgZGF0ZXMgPSBbXVxuICAgIGxldCBjdXJyZW50RGF0ZSA9IHN0YXJ0RGF0ZVxuICAgIHdoaWxlIChjdXJyZW50RGF0ZSA8IGVuZERhdGUpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKVxuICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfWAgKyBcIi1cIiArIGAwJHtkYXRlLmdldE1vbnRoKCkgKzF9YCArIFwiLVwiICsgYCR7ZGF0ZS5nZXREYXRlKCl9YFxuICAgICAgICBkYXRlcy5wdXNoKHtbZm9ybWF0dGVkRGF0ZV06IHt4OiBmb3JtYXR0ZWREYXRlLCB5OiBudWxsfX0pXG4gICAgICAgIGN1cnJlbnREYXRlLmFkZERheSgpXG4gICAgfVxuICAgIHJldHVybiBkYXRlc1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgdGhpcy5kYXRhID0gcHJvcHMuZGF0YVxuICAgICAgICB0aGlzLm1hcmdpbiA9IHtcbiAgICAgICAgICAgIHRvcDogMzAsXG4gICAgICAgICAgICByaWdodDogMjAsXG4gICAgICAgICAgICBib3R0b206IDUwLFxuICAgICAgICAgICAgbGVmdDogMjAsXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXRvZmYgPSAzXG4gICAgICAgIHRoaXMuZ29vZCA9IHRoaXMuY3V0b2ZmXG4gICAgICAgIHRoaXMuYmFkID0gdGhpcy5jdXRvZmYgKiAtMVxuICAgICAgICB0aGlzLndpZHRoID0gODEwIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuICAgICAgICB0aGlzLmhlaWdodCA9IDM3MCAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcbiAgICAgICAgdGhpcy5zdmcgPSBkMy5zZWxlY3QoJ3N2ZycpXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW4ubGVmdCArIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKVxuICAgICAgICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3RyYW5zcGFyZW50JylcbiAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7dGhpcy5tYXJnaW4ubGVmdH0sICR7dGhpcy5tYXJnaW4udG9wfSlgKVxuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBuZXcgRGF0ZSh0b2RheS5zZXREYXRlKHRvZGF5LmdldERhdGUoKSAtIDMxKSlcbiAgICAgICAgdGhpcy5lbmREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5kYXRlUmFuZ2UgPSBnZW5lcmF0ZURhdGVSYW5nZSh0aGlzLnN0YXJ0RGF0ZSwgdGhpcy5lbmREYXRlKVxuICAgIH1cblxuICAgIGR1bW15RGF0YSgpe1xuICAgICAgICBjb25zdCBkdW1teURhdGEgPSBbXVxuICAgICAgICBjb25zdCBkYXRhTGVuZ3RoID0gMzE7XG4gICAgICAgIGNvbnN0IG1hZyA9IDI1O1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGRhdGFMZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIgKiBtYWcpIC0gbWFnO1xuICAgICAgICAgICAgY29uc3QgZGF0dW0gPSB7eDpPYmplY3Qua2V5cyh0aGlzLmRhdGVSYW5nZVt4XSlbMF0sIHl9O1xuICAgICAgICAgICAgZHVtbXlEYXRhLnB1c2goZGF0dW0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGR1bW15RGF0YSlcbiAgICAgICAgcmV0dXJuIGR1bW15RGF0YVxuICAgIH1cblxuICAgIGJ1aWxkKGRhdGEpe1xuICAgICAgICBjb25zdCB7IHN2ZywgaGVpZ2h0LCB3aWR0aCwgZ29vZCwgYmFkIH0gPSB0aGlzXG4gICAgICAgIGNvbnN0IHhkYXRhID0gW11cbiAgICAgICAgY29uc3QgeWRhdGEgPSBbXVxuICAgICAgICBkYXRhLmZvckVhY2goZGF0dW0gPT4ge1xuICAgICAgICAgICAgeGRhdGEucHVzaChkYXR1bS54KVxuICAgICAgICAgICAgeWRhdGEucHVzaChkYXR1bS55KVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBwYXJzZVRpbWUgPSBkMy50aW1lUGFyc2UoXCIlWS0lbS0lZFwiKVxuICAgICAgICBjb25zdCB4Rm9ybWF0ID0gXCIlYi0lZFwiO1xuICAgICAgICBjb25zdCB4c2NsID0gZDMuc2NhbGVUaW1lKClcbiAgICAgICAgICAgIC5kb21haW4oZDMuZXh0ZW50KGRhdGEsIGQgPT4geyByZXR1cm4gcGFyc2VUaW1lKGQueCkgfSkpXG4gICAgICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSk7XG5cbiAgICAgICAgY29uc3QgeF9heGlzID0gZDMuYXhpc0JvdHRvbSgpXG4gICAgICAgICAgICAuc2NhbGUoeHNjbClcblxuICAgICAgICBjb25zdCB5c2NsID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLmRvbWFpbihbZDMubWF4KHlkYXRhKSwgZDMubWluKHlkYXRhKV0pXG4gICAgICAgICAgICAucmFuZ2UoWzAsIGhlaWdodF0pO1xuXG4gICAgICAgIGNvbnN0IHlfYXhpcyA9IGQzLmF4aXNMZWZ0KClcbiAgICAgICAgICAgIC5zY2FsZSh5c2NsKVxuXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsJHsoeXNjbCgwKSl9KWApXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIGB4YXhpc2ApXG4gICAgICAgICAgICAuY2FsbCh4X2F4aXMpXG5cblxuICAgICAgICBzdmcuc2VsZWN0KFwiLnhheGlzXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsJHt5c2NsKDApfSlgKVxuICAgICAgICAgICAgLmNhbGwoeF9heGlzLnRpY2tGb3JtYXQoZDMudGltZUZvcm1hdCh4Rm9ybWF0KSkpXG4gICAgICAgICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIDApXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgOSlcbiAgICAgICAgICAgIC5hdHRyKFwiZHlcIiwgXCIuMzVlbVwiKVxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJzdGFydFwiKVxuICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwKVxuXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIGB5YXhpc2ApXG4gICAgICAgICAgICAuY2FsbCh5X2F4aXMudGlja1NpemUoMCkudGlja1NpemVPdXRlcig1KSlcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpLnJlbW92ZSgpXG5cbiAgICAgICAgLy8gc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLy8gICAgIC8vIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcbiAgICAgICAgLy8gICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkudGlja1NpemVPdXRlcigwKSlcblxuXG5cbiAgICAgICAgLy8gY3JlYXRlIGxpbmUgZ2VuZXJhdG9yXG4gICAgICAgIGNvbnN0IGxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgICAgIC54KGQgPT4geyByZXR1cm4geHNjbChwYXJzZVRpbWUoZC54KSk7IH0pXG4gICAgICAgICAgICAueShkID0+IHsgcmV0dXJuIHlzY2woZC55KTsgfSlcbiAgICAgICAgICAgIC5jdXJ2ZShkMy5jdXJ2ZUJ1bmRsZS5iZXRhKDAuODUpKTtcblxuICAgICAgICBzdmcuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIHlzY2woZ29vZCkgLSA1IClcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCAxNSlcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJnb29kLWxhYmVsXCIpXG4gICAgICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwicmlnaHRcIilcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJ0cmFuc3BhcmVudFwiKVxuICAgICAgICAgICAgLy8gLnN0eWxlKFwiZmlsbFwiLCBcInJnYmEoMCwgMTI4LCAwLCAwLjYpXCIpXG4gICAgICAgICAgICAudGV4dChcIisgc2VudGltZW50XCIpXG5cbiAgICAgICAgc3ZnLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCB5c2NsKGJhZCkgKyAxNSApXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgMTUpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFkLWxhYmVsXCIpXG4gICAgICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwicmlnaHRcIilcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJ0cmFuc3BhcmVudFwiKVxuICAgICAgICAgICAgLy8gLnN0eWxlKFwiZmlsbFwiLCBcInJnYmEoMjAwLCAwLCAwLCAwLjYpXCIpXG4gICAgICAgICAgICAudGV4dChcIi0gc2VudGltZW50XCIpXG5cbiAgICAgICAgc3ZnLmFwcGVuZChcImxpbmVcIilcbiAgICAgICAgICAgIC5hdHRyKFwieDFcIiwgMClcbiAgICAgICAgICAgIC5hdHRyKFwieTFcIiwgeXNjbChnb29kKSlcbiAgICAgICAgICAgIC5hdHRyKFwieDJcIiwgd2lkdGgpXG4gICAgICAgICAgICAuYXR0cihcInkyXCIsIHlzY2woZ29vZCkpXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcInRyYW5zcGFyZW50XCIpXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCBcIjFweFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImdvb2QtbGluZVwiKVxuICAgICAgICAgICAgLnN0eWxlKFwic3Ryb2tlLWRhc2hhcnJheVwiLCAoXCIzLCAzXCIpKTtcblxuICAgICAgICBzdmcuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ4MVwiLCAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ5MVwiLCB5c2NsKGJhZCkpXG4gICAgICAgICAgICAuYXR0cihcIngyXCIsIHdpZHRoKVxuICAgICAgICAgICAgLmF0dHIoXCJ5MlwiLCB5c2NsKGJhZCkpXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcInRyYW5zcGFyZW50XCIpXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCBcIjFweFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhZC1saW5lXCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIChcIjMsIDNcIikpXG5cbiAgICAgICAgLy8gZHJhdyB0aGUgbGluZVxuICAgICAgICBzdmcuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwidHJhbnNwYXJlbnRcIilcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIFwiM3B4XCIpXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZS1saW5lY2FwXCIsIFwicm91bmRcIilcbiAgICAgICAgICAgIC5kYXRhKFtkYXRhXSlcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgbGluZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKHBheWxvYWQpe1xuICAgICAgICBjb25zdCB7IHNjYXR0ZXJEYXRhLCB0b3RhbCB9ID0gcGF5bG9hZFxuICAgICAgICBjb25zdCB7IHN2ZywgaGVpZ2h0LCB3aWR0aCwgZ29vZCwgYmFkIH0gPSB0aGlzXG4gICAgICAgIGNvbnN0IHlkYXRhID0gW11cbiAgICAgICAgY29uc3QgeGRhdGEgPSBbXVxuICAgICAgICBjb25zdCBzaW5nbGVBcnRpY2xlSW5mbyA9IGQzLnNlbGVjdChcIi5hcnRpY2xlLWluZm8tY29udGFpbmVyXCIpXG5cblxuICAgICAgICBjb25zdCBwcmVsaW5lRGF0YSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICBbXSxcbiAgICAgICAgICAgIHRoaXMuZGF0ZVJhbmdlLFxuICAgICAgICAgICAgcGF5bG9hZC5saW5lRGF0YVxuICAgICAgICApXG5cbiAgICAgICAgY29uc3QgcGxpbmVEYXRhID0gW11cbiAgICAgICAgcHJlbGluZURhdGEuZm9yRWFjaChvdXRlckRhdHVtID0+IHtcbiAgICAgICAgICAgIHBsaW5lRGF0YS5wdXNoKE9iamVjdC52YWx1ZXMob3V0ZXJEYXR1bSkpXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGxpbmVEYXRhID0gcGxpbmVEYXRhLmZsYXQoKS5zb3J0KHNvcnREYXRlKVxuXG5cbiAgICAgICAgY29uZGl0aW9uYWxUaXRsZUNvbG9yKHRvdGFsKTtcblxuICAgICAgICBzY2F0dGVyRGF0YS5mb3JFYWNoKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHlkYXRhLnB1c2goZGF0dW0ueSlcbiAgICAgICAgICAgIHhkYXRhLnB1c2goZGF0dW0ueClcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBwYXJzZVRpbWUgPSBkMy50aW1lUGFyc2UoXCIlWS0lbS0lZFwiKVxuICAgICAgICBjb25zdCB4Rm9ybWF0ID0gXCIlYi0lZFwiO1xuICAgICAgICBjb25zdCB4c2NsID0gZDMuc2NhbGVUaW1lKClcbiAgICAgICAgICAgIC5kb21haW4oZDMuZXh0ZW50KGxpbmVEYXRhLCBkID0+IHsgcmV0dXJuIHBhcnNlVGltZShkLngpIH0pKVxuICAgICAgICAgICAgLnJhbmdlKFswLCB3aWR0aF0pO1xuXG4gICAgICAgIGNvbnN0IHhfYXhpcyA9IGQzLmF4aXNCb3R0b20oKVxuICAgICAgICAgICAgLnNjYWxlKHhzY2wpXG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgeXNjbCA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgIC5kb21haW4oW2QzLm1heCh5ZGF0YSksIGQzLm1pbih5ZGF0YSldKVxuICAgICAgICAgICAgLnJhbmdlKFswLCBoZWlnaHRdKTtcblxuICAgICAgICBjb25zdCB5X2F4aXMgPSBkMy5heGlzTGVmdCgpXG4gICAgICAgICAgICAuc2NhbGUoeXNjbClcblxuICAgICAgICBjb25zdCBsYWJlbHMgPSBkMy5zZWxlY3RBbGwoXCIubGFiZWxcIilcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgICAgIC5zdHlsZShcImNvbG9yXCIsIFwicmdiYSgyNTUsMjU1LDI1NSwgMC43KVwiKTtcbiAgICAgICAgY29uc3QgcmVhZE1vcmUgPSBkMy5zZWxlY3QoXCIucmVhZC1tb3JlXCIpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDE3MDApXG4gICAgICAgICAgICAuc3R5bGUoXCJjb2xvclwiLCBcInJnYmEoMjU1LDI1NSwyNTUsIDAuNylcIik7XG5cbiAgICAgICAgc3ZnLnNlbGVjdChcIi54YXhpc1wiKVxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbigxNzAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCR7eXNjbCgwKX0pYClcbiAgICAgICAgICAgIC5jYWxsKHhfYXhpcy50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoeEZvcm1hdCkpKVxuICAgICAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIDApXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDkpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkeVwiLCBcIi4zNWVtXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoOTApXCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJzdGFydFwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSlcblxuICAgICAgICBzdmcuc2VsZWN0KFwiLmdvb2QtbGFiZWxcIilcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCB5c2NsKGdvb2QpIC0gNSlcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCAxNSlcbiAgICAgICAgICAgIC5hdHRyKFwiZGlzcGxheVwiLCAoKSA9PiBjb25kaXRpb25hbERpc3BsYXkoeXNjbChnb29kKSwgMCwgZmFsc2UpKVxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcInJnYmEoMCwgMTI4LCAwLCAwLjYpXCIpXG5cblxuICAgICAgICBzdmcuc2VsZWN0KFwiLmJhZC1sYWJlbFwiKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUV4cClcbiAgICAgICAgICAgIC5kdXJhdGlvbigxNzAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIHlzY2woYmFkKSArIDE1KVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDE1KVxuICAgICAgICAgICAgLmF0dHIoXCJkaXNwbGF5XCIsICgpID0+IGNvbmRpdGlvbmFsRGlzcGxheSh5c2NsKGJhZCksIGhlaWdodCwgdHJ1ZSkpXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwicmdiYSgyMDAsIDAsIDAsIDAuNilcIilcblxuXG4gICAgICAgIHN2Zy5zZWxlY3QoXCIueWF4aXNcIilcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgICAgIC5jYWxsKHlfYXhpcy50aWNrU2l6ZSgwKS50aWNrU2l6ZU91dGVyKDUpKVxuICAgICAgICAgICAgLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKTtcbiAgICAgICAgc3ZnLnNlbGVjdChcIi55YXhpc1wiKVxuICAgICAgICAgICAgLnNlbGVjdEFsbChcInRleHRcIikucmVtb3ZlKClcblxuXG4gICAgICAgIGNvbnN0IGxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgICAgIC54KGQgPT4geyByZXR1cm4geHNjbChwYXJzZVRpbWUoZC54KSk7IH0pXG4gICAgICAgICAgICAueShkID0+IHsgcmV0dXJuIHlzY2woZC55KTsgfSlcbiAgICAgICAgICAgIC8vIC5kZWZpbmVkKGQgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAvLyAgICAgaWYgKGQueSkge1xuICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAuY3VydmUoZDMuY3VydmVCdW5kbGUuYmV0YSgwLjg1KSk7XG5cbiAgICAgICAgY29uc3QgcGF0aCA9IHN2Zy5zZWxlY3RBbGwoJy5saW5lJyk7XG4gICAgICAgIHBhdGhcbiAgICAgICAgICAgIC5kYXRhKFtsaW5lRGF0YV0pXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDE3MDApXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgICAgICAgICAgLnN0eWxlKFwic3Ryb2tlXCIsIFwicmdiYSgwLCAwLCAxMzksIDAuOClcIilcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBsaW5lKVxuXG4gICAgICAgIHN2Zy5zZWxlY3QoXCIuZ29vZC1saW5lXCIpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDE3MDApXG4gICAgICAgICAgICAuYXR0cihcIngxXCIsIDApXG4gICAgICAgICAgICAuYXR0cihcInkxXCIsIHlzY2woZ29vZCkpXG4gICAgICAgICAgICAuYXR0cihcIngyXCIsIHdpZHRoKVxuICAgICAgICAgICAgLmF0dHIoXCJ5MlwiLCB5c2NsKGdvb2QpKVxuICAgICAgICAgICAgLmF0dHIoXCJkaXNwbGF5XCIsICgpID0+IGNvbmRpdGlvbmFsRGlzcGxheSh5c2NsKGdvb2QpLCAwLCBmYWxzZSkpXG4gICAgICAgICAgICAuc3R5bGUoXCJzdHJva2VcIiwgXCJyZ2JhKDAsIDEyOCwgMCwgMC42KVwiKVxuICAgICAgICAgICAgLnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIFwiMnB4XCIpXG5cblxuICAgICAgICBzdmcuc2VsZWN0KFwiLmJhZC1saW5lXCIpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDE3MDApXG4gICAgICAgICAgICAuYXR0cihcIngxXCIsIDApXG4gICAgICAgICAgICAuYXR0cihcInkxXCIsIHlzY2woYmFkKSApXG4gICAgICAgICAgICAuYXR0cihcIngyXCIsIHdpZHRoKVxuICAgICAgICAgICAgLmF0dHIoXCJ5MlwiLCB5c2NsKGJhZCkpXG4gICAgICAgICAgICAuYXR0cihcImRpc3BsYXlcIiwgKCkgPT4gY29uZGl0aW9uYWxEaXNwbGF5KHlzY2woYmFkKSwgaGVpZ2h0LCB0cnVlKSlcbiAgICAgICAgICAgIC5zdHlsZShcInN0cm9rZVwiLCBcInJnYmEoMjAwLCAwLCAwLCAwLjYpXCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgXCIycHhcIilcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBjcmVhdGVEb3RzID0gc3ZnLnNlbGVjdEFsbChcIi5kb3RcIilcbiAgICAgICAgICAgIC5kYXRhKHNjYXR0ZXJEYXRhKVxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZG90XCIpXG4gICAgICAgICAgICBcbiAgICAgICAgY3JlYXRlRG90c1xuICAgICAgICAgICAgLm9uKFwiY2xpY2tcIiwgZCA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oZC51cmwsIFwiX2JsYW5rXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIuZG90XCIpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgZCA9PiBjb25kaXRpb25hbENvbG9yKGQsIGdvb2QsIGJhZCkpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgZCA9PiBjb25kaXRpb25hbE9wYWNpdHkoZCwgZ29vZCwgYmFkKSlcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwiZGFya2JsdWVcIik7XG4gICAgICAgICAgICAgICAgZmlsbEFydGljbGVJbmZvKHNpbmdsZUFydGljbGVJbmZvLCBkKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICBjcmVhdGVEb3RzXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDE3MDApXG4gICAgICAgICAgICAuYXR0cihcImN4XCIsIGQgPT4geyByZXR1cm4geHNjbChwYXJzZVRpbWUoZC54KSkgfSlcbiAgICAgICAgICAgIC5hdHRyKFwiY3lcIiwgZCA9PiB7IHJldHVybiB5c2NsKGQueSkgfSlcbiAgICAgICAgICAgIC5hdHRyKFwiclwiLCBkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZC50aXRsZSA9PT0gdG90YWwuaGlnaFNjb3JlLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiA4XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCAoXyxpKSA9PiB7cmV0dXJuIFwiZG90X1wiICsgaX0pXG4gICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIGQgPT4gY29uZGl0aW9uYWxPcGFjaXR5KGQsIGdvb2QsIGJhZCkpXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGQgPT4gY29uZGl0aW9uYWxDb2xvcihkLCBnb29kLCBiYWQpKTtcblxuICAgICAgICBjb25zdCBhcnRpY2xlc0NvbnRhaW5lciA9IGQzLnNlbGVjdChcIiNhcnRpY2xlcy1saXN0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKFwibGlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKHNjYXR0ZXJEYXRhKVxuICAgICAgICBhcnRpY2xlc0NvbnRhaW5lclxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwibGlcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJhcnRpY2xlLWxpc3QtaXRlbVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCAoXyxpKSA9PiB7cmV0dXJuIFwiYXJ0aWNsZV9cIiArIGl9KVxuICAgICAgICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZFwiLCBkID0+IGNvbmRpdGlvbmFsQ29sb3IoZCwgZ29vZCwgYmFkLCAwLjMpKVxuICAgICAgICAgICAgLnRleHQoIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkLngpXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7ZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKX06ICR7ZC50aXRsZX1gXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZCxpKXtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIuZG90XCIpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgZCA9PiBjb25kaXRpb25hbENvbG9yKGQsIGdvb2QsIGJhZCkpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgZCA9PiBjb25kaXRpb25hbE9wYWNpdHkoZCwgZ29vZCwgYmFkKSk7XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KGAjZG90XyR7aX1gKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInJcIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdEb3QgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEb3RVWChkLCBiaWdEb3QsIHNpbmdsZUFydGljbGVJbmZvLCAwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAyMFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZCxpKXtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIuZG90XCIpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgZCA9PiBjb25kaXRpb25hbENvbG9yKGQsIGdvb2QsIGJhZCkpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgZCA9PiBjb25kaXRpb25hbE9wYWNpdHkoZCwgZ29vZCwgYmFkKSk7XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KGAjZG90XyR7aX1gKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJkYXJrYmx1ZVwiKTtcblxuICAgICAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5hcnRpY2xlLWxpc3QtaXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kXCIsIGQgPT4gY29uZGl0aW9uYWxDb2xvcihkLCBnb29kLCBiYWQsIDAuMykpO1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdEFsbCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAvLyAuc3R5bGUoXCJvcGFjaXR5XCIsIGQgPT4gY29uZGl0aW9uYWxDb2xvcihkLCBnb29kLCBiYWQsIDAuMykpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJyZ2JhKDAsIDAsIDEzOSwgMC41KVwiKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgIGFydGljbGVzQ29udGFpbmVyXG4gICAgICAgICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kXCIsIGQgPT4gY29uZGl0aW9uYWxDb2xvcihkLCBnb29kLCBiYWQsIDAuMykpXG4gICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkLngpXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7ZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKX06ICR7ZC50aXRsZX1gXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIGFydGljbGVzQ29udGFpbmVyXG4gICAgICAgICAgICAuZXhpdCgpLnJlbW92ZSgpXG4gICAgICAgICAgICAvLyAub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgLy8gICAgIGQzLnNlbGVjdEFsbChcIi5kb3RcIilcbiAgICAgICAgICAgIC8vICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBkID0+IGNvbmRpdGlvbmFsQ29sb3IoZCwgZ29vZCwgYmFkKSlcbiAgICAgICAgICAgIC8vICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBkID0+IGNvbmRpdGlvbmFsT3BhY2l0eShkLCBnb29kLCBiYWQpKTtcbiAgICAgICAgICAgIC8vICAgICBkMy5zZWxlY3QoYCNkb3RfJHtpfWApXG4gICAgICAgICAgICAvLyAgICAgICAgIC5hdHRyKFwiclwiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgYmlnRG90ID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBoYW5kbGVEb3RVWChkLCBiaWdEb3QsIHNpbmdsZUFydGljbGVJbmZvLCAwLjIpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIDE1XG4gICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIC8vIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgLy8gICAgIGQzLnNlbGVjdEFsbChcIi5kb3RcIilcbiAgICAgICAgICAgIC8vICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBkID0+IGNvbmRpdGlvbmFsQ29sb3IoZCwgZ29vZCwgYmFkKSlcbiAgICAgICAgICAgIC8vICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBkID0+IGNvbmRpdGlvbmFsT3BhY2l0eShkLCBnb29kLCBiYWQpKTtcbiAgICAgICAgICAgIC8vICAgICBkMy5zZWxlY3QoYCNkb3RfJHtpfWApXG4gICAgICAgICAgICAvLyAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSlcbiAgICAgICAgICAgIC8vICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcImxpZ2h0Ymx1ZVwiKTtcblxuICAgICAgICAgICAgLy8gICAgIGQzLnNlbGVjdEFsbChcIi5hcnRpY2xlLWxpc3QtaXRlbVwiKVxuICAgICAgICAgICAgLy8gICAgICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kXCIsIGQgPT4gY29uZGl0aW9uYWxDb2xvcihkLCBnb29kLCBiYWQsIDAuMSkpO1xuICAgICAgICAgICAgLy8gICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgLy8gICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIGQgPT4gY29uZGl0aW9uYWxDb2xvcihkLCBnb29kLCBiYWQsIDAuMykpO1xuICAgICAgICAgICAgLy8gfSlcblxuXG4gICAgICAgICAgICAvLyAuZWFjaCggZCA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyB9KVxuXG4gICAgICAgIGNvbnN0IHVwZGF0ZURvdHMgPSBzdmcuc2VsZWN0QWxsKFwiLmRvdFwiKVxuICAgICAgICAgICAgLmRhdGEoc2NhdHRlckRhdGEpXG5cbiAgICAgICAgbGV0IGJpZ0RvdDtcbiAgICAgICAgdXBkYXRlRG90c1xuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUV4cClcbiAgICAgICAgICAgIC5kdXJhdGlvbigxNzAwKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImRvdFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjeFwiLCBkID0+IHsgcmV0dXJuIHhzY2wocGFyc2VUaW1lKGQueCkpIH0pXG4gICAgICAgICAgICAuYXR0cihcImN5XCIsIGQgPT4geyByZXR1cm4geXNjbChkLnkpIH0pXG4gICAgICAgICAgICAuYXR0cihcInJcIiwgZnVuY3Rpb24oZCwgaSl7XG4gICAgICAgICAgICAgICAgbGV0IHI7XG4gICAgICAgICAgICAgICAgaWYgKGQudGl0bGUgPT09IHRvdGFsLmhpZ2hTY29yZS50aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICBiaWdEb3QgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlRG90VVgoZCwgYmlnRG90LCBzaW5nbGVBcnRpY2xlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgIHIgPSAyMFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHIgPSA4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBkID0+IGNvbmRpdGlvbmFsT3BhY2l0eShkLCBnb29kLCBiYWQpIClcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgZCA9PiBjb25kaXRpb25hbENvbG9yKGQsIGdvb2QsIGJhZCkpO1xuXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCIuZG90XCIpXG4gICAgICAgICAgICAuZGF0YShzY2F0dGVyRGF0YSlcbiAgICAgICAgICAgIC5leGl0KCkucmVtb3ZlKCk7XG4gICAgfVxufSIsImNvbnN0IGNvbmRpdGlvbmFsVGl0bGVDb2xvciA9ICh0b3RhbCkgPT4ge1xuICAgIGQzLnNlbGVjdChcIi5jaGFydC10aXRsZVwiKVxuICAgICAgICAuZGF0YShbdG90YWxdKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgIC5kdXJhdGlvbigyMDAwKVxuICAgICAgICAuc3R5bGUoXCJjb2xvclwiLCBkID0+IHtcbiAgICAgICAgICAgIGlmIChkLmF2ZXJhZ2UgPiAwLjEzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7NDAgKiBNYXRoLnNxcnQoZC5hdmVyYWdlKX0sICR7MTI4ICogTWF0aC5zcXJ0KGQuYXZlcmFnZSl9LCAkezQwICogTWF0aC5zcXJ0KGQuYXZlcmFnZSl9LCAwLjk3KWBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZC5hdmVyYWdlIDwgLTAuMTMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYHJnYmEoJHsxMjggKiBNYXRoLnNxcnQoTWF0aC5hYnMoZC5hdmVyYWdlKSl9LCAkezQwICogTWF0aC5zcXJ0KE1hdGguYWJzKGQuYXZlcmFnZSkpfSwgJHs0MCAqIE1hdGguc3FydChNYXRoLmFicyhkLmF2ZXJhZ2UpKX0sIDAuOTcpYFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYHJnYmEoJHsyNTUgKiBNYXRoLnNxcnQoTWF0aC5hYnMoZC5hdmVyYWdlKSl9LCAkezI1NSAqIE1hdGguc3FydChNYXRoLmFicyhkLmF2ZXJhZ2UpKX0sICR7MjU1ICogTWF0aC5zcXJ0KE1hdGguYWJzKGQuYXZlcmFnZSkpfSwgMC44KWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICBkMy5zZWxlY3QoXCIjc2Vjb25kLXRpdGxlXCIpXG4gICAgICAgIC5kYXRhKFt0b3RhbF0pXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmVhc2UoZDMuZWFzZUV4cClcbiAgICAgICAgLmR1cmF0aW9uKDIwMDApXG4gICAgICAgIC5zdHlsZShcImNvbG9yXCIsIGQgPT4ge1xuICAgICAgICAgICAgaWYgKGQuYXZlcmFnZSA+IDAuMTMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYHJnYmEoJHs0MCAqIE1hdGguc3FydChkLmF2ZXJhZ2UpfSwgJHsxMjggKiBNYXRoLnNxcnQoZC5hdmVyYWdlKX0sICR7NDAgKiBNYXRoLnNxcnQoZC5hdmVyYWdlKX0sIDAuOTcpYFxuICAgICAgICAgICAgfSBlbHNlIGlmIChkLmF2ZXJhZ2UgPCAtMC4xMykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgcmdiYSgkezEyOCAqIE1hdGguc3FydChNYXRoLmFicyhkLmF2ZXJhZ2UpKX0sICR7NDAgKiBNYXRoLnNxcnQoTWF0aC5hYnMoZC5hdmVyYWdlKSl9LCAkezQwICogTWF0aC5zcXJ0KE1hdGguYWJzKGQuYXZlcmFnZSkpfSwgMC45NylgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBgcmdiYSgkezI1NSAqIE1hdGguc3FydChNYXRoLmFicyhkLmF2ZXJhZ2UpKX0sICR7MjU1ICogTWF0aC5zcXJ0KE1hdGguYWJzKGQuYXZlcmFnZSkpfSwgJHsyNTUgKiBNYXRoLnNxcnQoTWF0aC5hYnMoZC5hdmVyYWdlKSl9LCAwLjgpYFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxufVxuXG5jb25zdCBjb25kaXRpb25hbERpc3BsYXkgPSAoYXR0cl92YWx1ZSwgY3V0b2ZmLCBncmVhdGVyVGhhbiA9IHRydWUpID0+IHtcbiAgICBzd2l0Y2ggKGdyZWF0ZXJUaGFuKSB7XG4gICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgIGlmIChhdHRyX3ZhbHVlID4gY3V0b2ZmKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibm9uZVwiXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImluaGVyaXRcIlxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgaWYgKGF0dHJfdmFsdWUgPCBjdXRvZmYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJub25lXCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaW5oZXJpdFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gXCJpbmhlcml0XCJcbiAgICB9XG59XG5cbmNvbnN0IGNvbmRpdGlvbmFsT3BhY2l0eSA9IChkLCBnb29kLCBiYWQpID0+IHtcbiAgICBpZiAoZC55ID49IGdvb2QpIHtcbiAgICAgICAgcmV0dXJuIFwiMC41XCJcbiAgICB9IGVsc2UgaWYgKGQueSA8PSBiYWQpIHtcbiAgICAgICAgcmV0dXJuIFwiMC41XCJcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCIwLjNcIlxuICAgIH1cbn1cblxuY29uc3QgY29uZGl0aW9uYWxDb2xvciA9IChkLCBnb29kLCBiYWQsIG9wYWNpdHk9MSkgPT4ge1xuICAgIGlmIChkLnkgPj0gZ29vZCkge1xuICAgICAgICByZXR1cm4gYHJnYmEoMCwxMjgsMCwgJHtvcGFjaXR5fWBcbiAgICB9IGVsc2UgaWYgKGQueSA8PSBiYWQpIHtcbiAgICAgICAgcmV0dXJuIGByZ2JhKDI1NSwwLDAsICR7b3BhY2l0eX1gXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGByZ2JhKDI1NSwyNTUsMjU1LCAke29wYWNpdHl9YFxuICAgIH1cbn1cblxuY29uc3QgZmlsbEFydGljbGVJbmZvID0gKHNpbmdsZUFydGljbGVJbmZvLCBkKSA9PiB7XG4gICAgc2luZ2xlQXJ0aWNsZUluZm8uc2VsZWN0KFwiLmFydGljbGUtdGl0bGVcIilcbiAgICAgICAgLnRleHQoXG4gICAgICAgICAgICBgJHtkLnRpdGxlfWBcbiAgICApLnRyYW5zaXRpb24oKVxuICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgLnN0eWxlKFwiY29sb3JcIiwgXCJyZ2JhKDI1NSwyNTUsMjU1LCAwLjUpXCIpO1xuICAgIHNpbmdsZUFydGljbGVJbmZvLnNlbGVjdChcIi5hcnRpY2xlLWF1dGhvclwiKVxuICAgICAgICAudGV4dChcbiAgICAgICAgICAgIGAke2Quc291cmNlfWBcbiAgICApLnRyYW5zaXRpb24oKVxuICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgLnN0eWxlKFwiY29sb3JcIiwgXCJyZ2JhKDI1NSwyNTUsMjU1LCAwLjUpXCIpO1xuICAgIC8vIHNpbmdsZUFydGljbGVJbmZvLnNlbGVjdChcIi5hcnRpY2xlLXNlbnRpbWVudFwiKVxuICAgIC8vICAgICAudGV4dChcbiAgICAvLyAgICAgICAgIGAke2QueX1gXG4gICAgLy8gICAgICk7XG4gICAgLy8gc2luZ2xlQXJ0aWNsZUluZm8uc2VsZWN0KFwiLmFydGljbGUtcmVsZXZhbmNlXCIpXG4gICAgLy8gICAgIC50ZXh0KFxuICAgIC8vICAgICAgICAgYCR7ZC5yZWxldmFuY2V9YFxuICAgIC8vICAgICApO1xuICAgIHNpbmdsZUFydGljbGVJbmZvLnNlbGVjdChcIi5hcnRpY2xlLWRlc2NyaXB0aW9uXCIpXG4gICAgICAgIC50ZXh0KFxuICAgICAgICAgICAgYCR7ZC5kZXNjcmlwdGlvbn1gXG4gICAgICAgIClcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgLnN0eWxlKFwiY29sb3JcIiwgXCJyZ2JhKDI1NSwyNTUsMjU1LCAwLjUpXCIpXG5cbiAgICBzaW5nbGVBcnRpY2xlSW5mby5zZWxlY3QoXCIuYXJ0aWNsZS1pbWFnZVwiKVxuICAgICAgICAuYXR0cihcInNyY1wiLCBgJHtkLmltYWdlfWApXG4gICAgc2luZ2xlQXJ0aWNsZUluZm8uc2VsZWN0KFwiLnJlYWQtbW9yZVwiKVxuICAgICAgICAuYXR0cihcImhyZWZcIiwgYCR7ZC51cmx9YClcbn1cblxuY29uc3QgaGFuZGxlRG90VVggPSAoZCwgYmlnRG90LCBzaW5nbGVBcnRpY2xlSW5mbywgc3BlZWQ9MSkgPT4ge1xuICAgIGNvbnN0IGRlbGF5ID0gMTgwMFxuICAgIGlmIChzcGVlZCA+PSAxKXtcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBiaWdEb3RcbiAgICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmRlbGF5KGRlbGF5KVxuICAgICAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFbGFzdGljKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbigyMDAwKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiclwiLCA4KVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJkYXJrYmx1ZVwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSk7XG4gICAgICAgICAgICBpZihzcGVlZCA+PSAxKXtcbiAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2luZ2xlQXJ0aWNsZUluZm9cbiAgICAgICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoZGVsYXkgKyAxMDAwKVxuICAgICAgICAgICAgICAgICAgICAuZHVyYXRpb24oODAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcInJnYmEoMCwgMCwgMTM5LCAwLjUpXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZpbGxBcnRpY2xlSW5mbyhzaW5nbGVBcnRpY2xlSW5mbywgZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2luZ2xlQXJ0aWNsZUluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheShkZWxheSArIDE3MDApXG4gICAgICAgICAgICAgICAgICAgICAgICAuZHVyYXRpb24oODAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcInRyYW5zcGFyZW50XCIpXG4gICAgICAgICAgICAgICAgLy8gfSwgODAwKnNwZWVkKVxuICAgICAgICAgICAgfVxuICAgICAgICAvLyB9LCBkZWxheSpzcGVlZClcbiAgICB9IGVsc2Uge1xuICAgICAgICBiaWdEb3RcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJkYXJrYmx1ZVwiKVxuICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcbiAgICAgICAgYmlnRG90XG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlTGluZWFyKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgICAgIC5hdHRyKFwiclwiLCA4KVxuICAgICAgICBmaWxsQXJ0aWNsZUluZm8oc2luZ2xlQXJ0aWNsZUluZm8sIGQpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBjb25kaXRpb25hbFRpdGxlQ29sb3IsXG4gICAgY29uZGl0aW9uYWxEaXNwbGF5LFxuICAgIGNvbmRpdGlvbmFsT3BhY2l0eSxcbiAgICBjb25kaXRpb25hbENvbG9yLFxuICAgIGZpbGxBcnRpY2xlSW5mbyxcbiAgICBoYW5kbGVEb3RVWFxufSIsImltcG9ydCAnLi9zdHlsZXMvZGV2ZWxvcG1lbnQuY3NzJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcbmltcG9ydCBxdWVyeUZpZWxkIGZyb20gJy4vcXVlcnlfZmllbGQnO1xuaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcyc7XG5cbiBcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGNvbnNvbGUubG9nKFwiRGV2ZWxvcG1lbnQgTW9kZSFcIik7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvcHMgPSB7fVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgY29uc3Qgc2Vjb25kVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlY29uZC10aXRsZVwiKVxuICAgIFxuICAgIGNvbnN0IGNoYXJ0ID0gbmV3IENoYXJ0KHByb3BzKVxuICAgIHByb3BzLmNoYXJ0ID0gY2hhcnRcblxuICAgIG1haW4uaW5zZXJ0QmVmb3JlKHF1ZXJ5RmllbGQocHJvcHMpLCBzZWNvbmRUaXRsZSk7XG5cblxuXG4gICAgY29uc3QgZHVtbXlEYXRhID0gY2hhcnQuZHVtbXlEYXRhKCk7XG4gICAgY2hhcnQuYnVpbGQoZHVtbXlEYXRhKTtcblxuICAgIFxuICAgIFxufSlcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=