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
var news_api_key = exports.news_api_key = "d3a931891c11479eaebaa8adb32af246";

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),

/***/ "./node_modules/sentiment/build/emoji.json":
/*!*************************************************!*\
  !*** ./node_modules/sentiment/build/emoji.json ***!
  \*************************************************/
/*! exports provided: 😂, ❤, ♥, 😍, 😭, 😘, 😊, 👌, 💕, 👏, 😁, ☺, ♡, 👍, 😩, 🙏, ✌, 😏, 😉, 🙌, 🙈, 💪, 😄, 😒, 💃, 💖, 😃, 😔, 🎉, 😜, 🌸, 💜, 💙, ✨, 💗, ★, █, ☀, 😡, 😎, 💋, 😋, 🙊, 😴, 🎶, 💞, 😌, 🔫, 💛, 💁, 💚, ♫, 😞, 😆, 😝, 😪, 😫, 👊, 💀, 😀, 😚, 😻, 💘, ☕, 👋, 🎊, 🍕, ❄, 😕, 💔, 😤, 😈, ✈, 🔝, 😰, ⚽, 😑, 👑, 👉, 🍃, 🎁, 😠, 🐧, ☆, 🍀, 🎈, 🎅, 😓, 😣, 😐, ✊, 😨, 😖, 💤, 💓, 👎, 💦, ✔, 😷, 🙋, 🎄, 💩, 🎵, 😛, 👯, 💎, 🌿, 🎂, 🌟, 🔮, 👫, 🏆, ✖, ☝, 😙, ⛄, 👅, ♪, 🍂, 💏, 🌴, 👈, 🌹, 🙆, 👻, 💰, 🍻, 🙅, 🌞, 🍁, ⭐, ▪, 🎀, 🐷, 🙉, 🌺, 💅, 🐶, 🌚, 👽, 🎤, 👭, 🎧, 👆, 🍸, 🍷, ®, 🍉, 😇, 🏃, 😿, │, 🍺, ▶, 😲, 🎸, 🍹, 💫, 📚, 😶, 🌷, 💝, 💨, 🏈, 💍, ☔, 👸, 🇪, ░, 🍩, 👾, ☁, 🌻, ↿, 🐯, 👼, 🍔, 😸, 👶, ↾, 💐, 🌊, 🍦, 🍓, 👇, 💆, 🍴, 😧, 🇸, 😮, 🚫, 😽, 🌈, 🙀, ⚠, 🎮, ╯, 🍆, 🍰, ✓, 👐, 🍟, 🍌, 💑, 👬, 🐣, 🎃, ▬, ￼, 🐾, 🎓, 🏊, 📷, 👄, 🌼, 🚶, 🐱, 🐸, 🇺, 👿, 🚬, ✿, 🐒, 🌍, ┊, 🐥, 🐼, 🎥, 💄, ⛔, 🏀, 💉, 💟, 🚗, 📝, ♦, 💭, 🌙, 🐟, 👣, ✂, 🗿, 👪, 🍭, 🌃, ❌, 🐰, 💊, 🚨, 😦, 🍪, 🍣, ✧, 🎆, 🎎, 🇩, ✅, 📱, 🙍, 🍑, 🎼, 🔊, 🌌, 🍎, 🐻, ╰, 💇, ♬, 🔴, 🍱, 🍊, 🍒, 🐭, 👟, 🌎, 🍍, 🐮, 📲, ☼, 🌅, 🇷, 👠, 🌽, 💧, 🍬, 😺, 🚀, ¦, 💢, 🎬, 🍧, 🍜, 🐏, 🏄, ➤, ⬆, 🍋, 🆗, ⚪, 📺, 🍅, ⛅, 🐢, 👙, 🏡, 🌾, ◉, ✏, 🐬, 🇹, ♣, 🐝, 🌝, 🇮, 🔋, 🐍, ♔, 🔵, 😾, 🌕, 🐨, 🔐, 💿, 🌳, 👰, ❀, ⚓, 🚴, ▀, 👗, ➕, 💬, ▒, 🔜, 🍨, 💲, 🍙, 🍥, ▸, ♛, 😼, 🐙, 👨, 🍚, ♨, 🎹, ♕, ▃, 🇬, 🇧, ☠, 🐠, 🚹, 💵, ✰, ╠, 👛, 🌱, 💻, 🌏, ▄, 👓, ◄, ⚾, 🌲, 👴, 🏠, 🍇, 🍘, 🐇, 🔞, 👵, ◀, 🔙, 🌵, 🍮, 🎇, 🐎, ➔, 🐤, ╩, 🌑, 🚲, 🐑, 🏁, 🎾, ╚, 🈹, 👮, ☹, 🐵, ✪, ◕, 🗼, ▐, ♠, ┳, 👺, 🐚, 👂, 🗽, 🍵, 🆒, 🐺, ⇨, 🌓, 🔒, ╬, 👳, 🌂, 🚌, ♩, 🍡, ❥, 🎡, 💌, 🐩, 🌜, ⌚, 🚿, 🔆, 🌛, 💂, 🐔, 🙎, 🏩, 🇫, 🔨, 📢, 🐦, 🐲, ♻, 🌘, 🌔, 👖, 😗, 🐄, ◟, 🍢, 🎨, ⬇, 🚼, 🇴, 🌗, 🌖, 🔅, 👜, 🐌, 💼, 🐹, 🌠, 🐈, 🌁, ⚫, ♧, 🏰, 🚵, 🎢, 🎷, 🎐, ┈, ╗, 🌇, ⏰, 🚂, ◠, 🎿, 🆔, 🌒, 🐪, ╔, ╝, 👔, 🆓, 🐋, ▽, 🐛, 👕, 💳, 🏧, 💡, ⬅, 🐫, 🇱, 📹, 👞, 👚, □, 🚣, 🏉, 🗻, ╦, ⛺, 🐕, 🏂, 👡, 📻, ✒, 🌰, 🏢, 🎒, ⌒, 🏫, 📴, 🚢, 🚚, 🐉, ❒, 🔔, ◢, 🏥, 🚖, ▌, ☛, 💒, 🚤, 🐐, ■, 🔚, 🎻, 🔷, 🎽, 📅, 🎺, 🍈, ✉, ◤, ○, 🍼, 🚛, 📓, ☉, 💴, ➰, 🔌, 📕, 📣, 🚓, 🐗, ⛳, ┻, ┛, ┃, 💺, 🏇, ☻, 📞, Ⓐ, 🌉, 🚩, ✎, 📃, 🏨, 📌, ♎, 💷, 🚄, ▲, ⛵, 🔸, 🚜, 🐆, 👒, ❕, 🔛, ♢, 🇲, ❅, 👝, ✞, ◡, 🎋, 👥, 🐡, ◆, 🔭, 🎪, 🐜, ♌, ☐, 👷, 🔈, 📄, 🚐, 🌋, 📡, 🚳, ✘, 🅰, 🇼, ┓, ┣, Ⓛ, Ⓔ, 👤, 🚁, 🎠, 🐁, 📗, ┐, ♂, 📯, 🔩, 👢, ◂, 📰, 📶, 🌄, 🗾, 🔶, 🏤, 🎩, Ⓜ, 🔧, 🐅, ♮, 🅾, 📦, 🚊, 🔲, △, 📆, ❛, 📉, ▵, 🔎, ☜, 🇯, 🇵, 📘, ⓔ, 🔑, ⭕, 🔘, 🚭, 🚉, 🚪, ➳, 🚃, ┯, 🆙, 🆖, ┗, Ⓞ, ❇, ✴, ☊, 🔕, ⬛, 🚞, 🍶, 🌐, ♀, 🚅, 🚒, ♋, ♍, 🕝, ⓐ, 📙, Ⓢ, 📋, 🎱, 🐞, 🔺, ⓡ, ♤, 🎯, 🔉, ↩, 🚾, 🎣, 🔣, ❎, ➥, 🎌, ◣, ⏬, ♭, ⓞ, 🔳, 🏭, 🎳, ☚, ➽, ➫, ➖, ꒰, ꒱, ◝, 📑, ⓧ, 🔟, 〓, ⓜ, ➠, 🚆, ℅, ☃, 🚽, ⓝ, ⇦, 👲, 🚡, 🔬, ➗, 📈, ⏪, ◎, ꒦, 📎, ⑅, ✭, ♓, ┏, ☇, ࿎, 👘, ↙, Ⓕ, Ⓦ, Ⓟ, 🕑, 🕛, ♈, ↬, ✍, 🏦, 🔻, ⓟ, ⓕ, ⓘ, ♿, ⇗, ⇘, ⓨ, ⓙ, ▫, 🔇, ⌃, 🔖, 📜, 🚝, ┘, ✝, ⍣, 📮, 🕕, 🔯, ➸, ꒵, 🕥, ✽, 📼, 🕐, 🀄, ✬, ✫, 🕔, ❣, 📫, 🉐, 🈂, 🎰, ҂, ╤, 📔, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"😂\":1,\"❤\":3,\"♥\":3,\"😍\":3,\"😭\":-1,\"😘\":3,\"😊\":3,\"👌\":2,\"💕\":3,\"👏\":2,\"😁\":2,\"☺\":3,\"♡\":3,\"👍\":2,\"😩\":-2,\"🙏\":2,\"✌\":2,\"😏\":1,\"😉\":2,\"🙌\":2,\"🙈\":2,\"💪\":2,\"😄\":2,\"😒\":-2,\"💃\":3,\"💖\":3,\"😃\":2,\"😔\":-1,\"🎉\":3,\"😜\":2,\"🌸\":3,\"💜\":3,\"💙\":3,\"✨\":1,\"💗\":3,\"★\":1,\"█\":-1,\"☀\":2,\"😡\":-1,\"😎\":2,\"💋\":3,\"😋\":3,\"🙊\":2,\"😴\":-1,\"🎶\":2,\"💞\":3,\"😌\":2,\"🔫\":-1,\"💛\":3,\"💁\":1,\"💚\":3,\"♫\":1,\"😞\":-1,\"😆\":2,\"😝\":2,\"😪\":-1,\"😫\":-1,\"👊\":1,\"💀\":-2,\"😀\":2,\"😚\":3,\"😻\":3,\"💘\":3,\"☕\":1,\"👋\":2,\"🎊\":3,\"🍕\":2,\"❄\":2,\"😕\":-2,\"💔\":-1,\"😤\":-2,\"😈\":1,\"✈\":2,\"🔝\":2,\"😰\":-1,\"⚽\":3,\"😑\":-2,\"👑\":3,\"👉\":1,\"🍃\":1,\"🎁\":3,\"😠\":-2,\"🐧\":2,\"☆\":2,\"🍀\":1,\"🎈\":3,\"🎅\":1,\"😓\":-1,\"😣\":-2,\"😐\":-2,\"✊\":2,\"😨\":-1,\"😖\":-1,\"💤\":1,\"💓\":3,\"👎\":-1,\"💦\":2,\"✔\":1,\"😷\":-1,\"🙋\":2,\"🎄\":2,\"💩\":-1,\"🎵\":2,\"😛\":3,\"👯\":2,\"💎\":2,\"🌿\":1,\"🎂\":3,\"🌟\":1,\"🔮\":1,\"👫\":1,\"🏆\":3,\"✖\":1,\"☝\":1,\"😙\":3,\"⛄\":2,\"👅\":2,\"♪\":2,\"🍂\":2,\"💏\":1,\"🌴\":2,\"👈\":2,\"🌹\":3,\"🙆\":2,\"👻\":1,\"💰\":1,\"🍻\":2,\"🙅\":-2,\"🌞\":2,\"🍁\":2,\"⭐\":2,\"▪\":1,\"🎀\":3,\"🐷\":1,\"🙉\":1,\"🌺\":2,\"💅\":1,\"🐶\":2,\"🌚\":2,\"👽\":1,\"🎤\":2,\"👭\":2,\"🎧\":2,\"👆\":1,\"🍸\":2,\"🍷\":2,\"®\":1,\"🍉\":3,\"😇\":3,\"🏃\":2,\"😿\":-2,\"│\":1,\"🍺\":2,\"▶\":1,\"😲\":-1,\"🎸\":2,\"🍹\":3,\"💫\":2,\"📚\":1,\"😶\":-1,\"🌷\":2,\"💝\":3,\"💨\":1,\"🏈\":2,\"💍\":2,\"☔\":1,\"👸\":3,\"🇪\":3,\"░\":-1,\"🍩\":1,\"👾\":1,\"☁\":1,\"🌻\":2,\"↿\":3,\"🐯\":2,\"👼\":1,\"🍔\":1,\"😸\":2,\"👶\":2,\"↾\":3,\"💐\":3,\"🌊\":2,\"🍦\":2,\"🍓\":3,\"👇\":1,\"💆\":1,\"🍴\":2,\"😧\":-1,\"🇸\":2,\"😮\":1,\"🚫\":-3,\"😽\":2,\"🌈\":2,\"🙀\":1,\"⚠\":-1,\"🎮\":2,\"╯\":-1,\"🍆\":2,\"🍰\":2,\"✓\":1,\"👐\":-1,\"🍟\":1,\"🍌\":2,\"💑\":3,\"👬\":-1,\"🐣\":2,\"🎃\":3,\"▬\":2,\"￼\":-3,\"🐾\":3,\"🎓\":2,\"🏊\":2,\"📷\":2,\"👄\":2,\"🌼\":4,\"🚶\":-1,\"🐱\":2,\"🐸\":-1,\"🇺\":2,\"👿\":-3,\"🚬\":2,\"✿\":1,\"🐒\":2,\"🌍\":3,\"┊\":5,\"🐥\":3,\"🐼\":1,\"🎥\":1,\"💄\":2,\"⛔\":2,\"🏀\":1,\"💉\":1,\"💟\":3,\"🚗\":1,\"📝\":1,\"♦\":2,\"💭\":1,\"🌙\":3,\"🐟\":3,\"👣\":1,\"✂\":-3,\"🗿\":2,\"👪\":-1,\"🍭\":1,\"🌃\":2,\"❌\":1,\"🐰\":3,\"💊\":2,\"🚨\":3,\"😦\":-2,\"🍪\":1,\"🍣\":-2,\"✧\":1,\"🎆\":3,\"🎎\":4,\"🇩\":3,\"✅\":2,\"📱\":1,\"🙍\":-2,\"🍑\":1,\"🎼\":1,\"🔊\":2,\"🌌\":2,\"🍎\":1,\"🐻\":2,\"╰\":-1,\"💇\":1,\"♬\":1,\"🔴\":2,\"🍱\":-2,\"🍊\":2,\"🍒\":1,\"🐭\":3,\"👟\":2,\"🌎\":1,\"🍍\":2,\"🐮\":3,\"📲\":1,\"☼\":1,\"🌅\":1,\"🇷\":3,\"👠\":1,\"🌽\":2,\"💧\":-1,\"🍬\":1,\"😺\":2,\"🚀\":2,\"¦\":3,\"💢\":1,\"🎬\":1,\"🍧\":1,\"🍜\":2,\"🐏\":3,\"🏄\":2,\"➤\":1,\"⬆\":1,\"🍋\":1,\"🆗\":2,\"⚪\":2,\"📺\":2,\"🍅\":1,\"⛅\":2,\"🐢\":1,\"👙\":2,\"🏡\":2,\"🌾\":2,\"◉\":1,\"✏\":1,\"🐬\":2,\"🇹\":3,\"♣\":1,\"🐝\":1,\"🌝\":1,\"🇮\":3,\"🔋\":-3,\"🐍\":1,\"♔\":2,\"🔵\":1,\"😾\":-2,\"🌕\":3,\"🐨\":2,\"🔐\":1,\"💿\":3,\"🌳\":2,\"👰\":2,\"❀\":2,\"⚓\":3,\"🚴\":3,\"▀\":-1,\"👗\":1,\"➕\":2,\"💬\":2,\"▒\":-1,\"🔜\":1,\"🍨\":1,\"💲\":1,\"🍙\":1,\"🍥\":-4,\"▸\":1,\"♛\":1,\"😼\":1,\"🐙\":2,\"👨\":2,\"🍚\":2,\"♨\":4,\"🎹\":1,\"♕\":2,\"▃\":5,\"🇬\":1,\"🇧\":1,\"☠\":-1,\"🐠\":2,\"🚹\":3,\"💵\":2,\"✰\":4,\"╠\":1,\"👛\":2,\"🌱\":3,\"💻\":1,\"🌏\":1,\"▄\":-1,\"👓\":1,\"◄\":1,\"⚾\":-1,\"🌲\":2,\"👴\":1,\"🏠\":2,\"🍇\":1,\"🍘\":2,\"🐇\":1,\"🔞\":-1,\"👵\":2,\"◀\":1,\"🔙\":1,\"🌵\":1,\"🍮\":-1,\"🎇\":3,\"🐎\":2,\"➔\":-1,\"🐤\":2,\"╩\":1,\"🌑\":2,\"🚲\":2,\"🐑\":-1,\"🏁\":2,\"🎾\":3,\"╚\":1,\"🈹\":1,\"👮\":-2,\"☹\":-3,\"🐵\":2,\"✪\":1,\"◕\":2,\"🗼\":3,\"▐\":-1,\"♠\":1,\"┳\":-2,\"👺\":-2,\"🐚\":1,\"👂\":-1,\"🗽\":1,\"🍵\":2,\"🆒\":2,\"🐺\":1,\"⇨\":2,\"🌓\":3,\"🔒\":1,\"╬\":-1,\"👳\":3,\"🌂\":1,\"🚌\":1,\"♩\":3,\"🍡\":-1,\"❥\":1,\"🎡\":1,\"💌\":2,\"🐩\":2,\"🌜\":2,\"⌚\":1,\"🚿\":3,\"🔆\":3,\"🌛\":3,\"💂\":-1,\"🐔\":1,\"🙎\":-1,\"🏩\":2,\"🇫\":2,\"🔨\":-1,\"📢\":2,\"🐦\":2,\"🐲\":-1,\"♻\":2,\"🌘\":3,\"🌔\":3,\"👖\":2,\"😗\":3,\"🐄\":1,\"◟\":-1,\"🍢\":-1,\"🎨\":1,\"⬇\":2,\"🚼\":3,\"🇴\":2,\"🌗\":3,\"🌖\":3,\"🔅\":5,\"👜\":1,\"🐌\":3,\"💼\":3,\"🐹\":1,\"🌠\":3,\"🐈\":1,\"🌁\":1,\"⚫\":1,\"♧\":2,\"🏰\":1,\"🚵\":2,\"🎢\":2,\"🎷\":3,\"🎐\":1,\"┈\":-4,\"╗\":2,\"🌇\":3,\"⏰\":2,\"🚂\":1,\"◠\":2,\"🎿\":2,\"🆔\":4,\"🌒\":3,\"🐪\":3,\"╔\":1,\"╝\":2,\"👔\":2,\"🆓\":1,\"🐋\":1,\"▽\":2,\"🐛\":1,\"👕\":2,\"💳\":2,\"🏧\":5,\"💡\":3,\"⬅\":2,\"🐫\":2,\"🇱\":2,\"📹\":2,\"👞\":2,\"👚\":3,\"□\":-2,\"🚣\":3,\"🏉\":3,\"🗻\":3,\"╦\":2,\"⛺\":3,\"🐕\":1,\"🏂\":2,\"👡\":2,\"📻\":2,\"✒\":1,\"🌰\":3,\"🏢\":1,\"🎒\":3,\"⌒\":3,\"🏫\":-2,\"📴\":4,\"🚢\":1,\"🚚\":-1,\"🐉\":1,\"❒\":1,\"🔔\":5,\"◢\":4,\"🏥\":1,\"🚖\":-1,\"▌\":-2,\"☛\":2,\"💒\":3,\"🚤\":2,\"🐐\":2,\"■\":-2,\"🔚\":2,\"🎻\":2,\"🔷\":1,\"🎽\":2,\"📅\":1,\"🎺\":3,\"🍈\":-3,\"✉\":1,\"◤\":5,\"○\":3,\"🍼\":3,\"🚛\":-2,\"📓\":1,\"☉\":1,\"💴\":-2,\"➰\":-1,\"🔌\":-1,\"📕\":1,\"📣\":2,\"🚓\":1,\"🐗\":3,\"⛳\":4,\"┻\":-3,\"┛\":3,\"┃\":2,\"💺\":1,\"🏇\":-1,\"☻\":1,\"📞\":2,\"Ⓐ\":-1,\"🌉\":3,\"🚩\":-2,\"✎\":3,\"📃\":2,\"🏨\":1,\"📌\":-3,\"♎\":-1,\"💷\":2,\"🚄\":3,\"▲\":3,\"⛵\":3,\"🔸\":1,\"🚜\":5,\"🐆\":2,\"👒\":1,\"❕\":1,\"🔛\":2,\"♢\":2,\"🇲\":2,\"❅\":4,\"👝\":2,\"✞\":2,\"◡\":1,\"🎋\":3,\"👥\":1,\"🐡\":1,\"◆\":4,\"🔭\":2,\"🎪\":1,\"🐜\":3,\"♌\":4,\"☐\":-5,\"👷\":1,\"🔈\":1,\"📄\":5,\"🚐\":4,\"🌋\":3,\"📡\":1,\"🚳\":5,\"✘\":4,\"🅰\":1,\"🇼\":2,\"┓\":3,\"┣\":3,\"Ⓛ\":2,\"Ⓔ\":2,\"👤\":4,\"🚁\":1,\"🎠\":3,\"🐁\":-2,\"📗\":1,\"┐\":-1,\"♂\":1,\"📯\":-1,\"🔩\":1,\"👢\":4,\"◂\":2,\"📰\":1,\"📶\":2,\"🌄\":1,\"🗾\":2,\"🔶\":2,\"🏤\":2,\"🎩\":2,\"Ⓜ\":1,\"🔧\":-4,\"🐅\":1,\"♮\":1,\"🅾\":-1,\"📦\":1,\"🚊\":1,\"🔲\":3,\"△\":1,\"📆\":5,\"❛\":2,\"📉\":2,\"▵\":2,\"🔎\":3,\"☜\":1,\"🇯\":2,\"🇵\":2,\"📘\":1,\"ⓔ\":3,\"🔑\":1,\"⭕\":2,\"🔘\":1,\"🚭\":5,\"🚉\":3,\"🚪\":3,\"➳\":2,\"🚃\":3,\"┯\":-3,\"🆙\":2,\"🆖\":1,\"┗\":5,\"Ⓞ\":2,\"❇\":3,\"✴\":3,\"☊\":5,\"🔕\":-2,\"⬛\":-2,\"🚞\":3,\"🍶\":3,\"🌐\":3,\"♀\":1,\"🚅\":3,\"🚒\":-2,\"♋\":1,\"♍\":3,\"🕝\":-2,\"ⓐ\":5,\"📙\":1,\"Ⓢ\":1,\"📋\":3,\"🎱\":1,\"🐞\":1,\"🔺\":1,\"ⓡ\":5,\"♤\":3,\"🎯\":3,\"🔉\":3,\"↩\":5,\"🚾\":1,\"🎣\":-4,\"🔣\":1,\"❎\":-5,\"➥\":1,\"🎌\":5,\"◣\":1,\"⏬\":5,\"♭\":1,\"ⓞ\":5,\"🔳\":2,\"🏭\":2,\"🎳\":-3,\"☚\":5,\"➽\":2,\"➫\":2,\"➖\":-5,\"꒰\":2,\"꒱\":2,\"◝\":-3,\"📑\":5,\"ⓧ\":5,\"🔟\":5,\"〓\":5,\"ⓜ\":2,\"➠\":5,\"🚆\":2,\"℅\":-5,\"☃\":2,\"🚽\":5,\"ⓝ\":5,\"⇦\":5,\"👲\":2,\"🚡\":-3,\"🔬\":5,\"➗\":-3,\"📈\":2,\"⏪\":2,\"◎\":5,\"꒦\":-5,\"📎\":5,\"⑅\":5,\"✭\":5,\"♓\":2,\"┏\":5,\"☇\":5,\"࿎\":-5,\"👘\":5,\"↙\":5,\"Ⓕ\":2,\"Ⓦ\":2,\"Ⓟ\":2,\"🕑\":2,\"🕛\":5,\"♈\":-5,\"↬\":5,\"✍\":5,\"🏦\":5,\"🔻\":5,\"ⓟ\":5,\"ⓕ\":5,\"ⓘ\":5,\"♿\":5,\"⇗\":5,\"⇘\":5,\"ⓨ\":5,\"ⓙ\":5,\"▫\":5,\"🔇\":5,\"⌃\":-5,\"🔖\":5,\"📜\":5,\"🚝\":5,\"┘\":-5,\"✝\":-5,\"⍣\":-5,\"📮\":-5,\"🕕\":-5,\"🔯\":5,\"➸\":5,\"꒵\":5,\"🕥\":-5,\"✽\":5,\"📼\":5,\"🕐\":-5,\"🀄\":5,\"✬\":5,\"✫\":5,\"🕔\":-5,\"❣\":5,\"📫\":5,\"🉐\":5,\"🈂\":-5,\"🎰\":-5,\"҂\":-5,\"╤\":-5,\"📔\":5}");

/***/ }),

/***/ "./node_modules/sentiment/languages sync recursive ^\\.\\/.*\\/index$":
/*!***************************************************************!*\
  !*** ./node_modules/sentiment/languages sync ^\.\/.*\/index$ ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en/index": "./node_modules/sentiment/languages/en/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/sentiment/languages sync recursive ^\\.\\/.*\\/index$";

/***/ }),

/***/ "./node_modules/sentiment/languages/en/index.js":
/*!******************************************************!*\
  !*** ./node_modules/sentiment/languages/en/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    labels: __webpack_require__(/*! ./labels.json */ "./node_modules/sentiment/languages/en/labels.json"),
    scoringStrategy: __webpack_require__(/*! ./scoring-strategy */ "./node_modules/sentiment/languages/en/scoring-strategy.js")
};

/***/ }),

/***/ "./node_modules/sentiment/languages/en/labels.json":
/*!*********************************************************!*\
  !*** ./node_modules/sentiment/languages/en/labels.json ***!
  \*********************************************************/
/*! exports provided: abandon, abandoned, abandons, abducted, abduction, abductions, abhor, abhorred, abhorrent, abhors, abilities, ability, aboard, aborted, aborts, absentee, absentees, absolve, absolved, absolves, absolving, absorbed, abuse, abused, abuses, abusing, abusive, accept, acceptable, acceptance, accepted, accepting, accepts, accessible, accident, accidental, accidentally, accidents, acclaim, acclaimed, accolade, accomplish, accomplished, accomplishes, accomplishment, accomplishments, accusation, accusations, accuse, accused, accuses, accusing, ache, achievable, aching, acquit, acquits, acquitted, acquitting, acrimonious, active, adequate, admire, admired, admires, admiring, admit, admits, admitted, admonish, admonished, adopt, adopts, adorable, adoration, adore, adored, adores, adoring, adoringly, advanced, advantage, advantageous, advantageously, advantages, adventure, adventures, adventurous, adversary, advisable, affected, affection, affectionate, affectionateness, afflicted, affordable, affronted, aficionados, afraid, aggravate, aggravated, aggravates, aggravating, aggression, aggressions, aggressive, aggressiveness, aghast, agog, agonise, agonised, agonises, agonising, agonize, agonized, agonizes, agonizing, agree, agreeable, agreed, agreement, agrees, alarm, alarmed, alarmist, alarmists, alas, alert, alienation, alive, allegation, allegations, allergic, allow, ally, alone, altruistic, amaze, amazed, amazes, amazing, ambitious, ambivalent, amicable, amuse, amused, amusement, amusements, anger, angered, angers, angry, anguish, anguished, animosity, annoy, annoyance, annoyed, annoying, annoys, antagonistic, anti, anticipation, anxiety, anxious, apathetic, apathy, apeshit, apocalyptic, apologise, apologised, apologises, apologising, apologize, apologized, apologizes, apologizing, apology, appalled, appalling, appealing, appease, appeased, appeases, appeasing, applaud, applauded, applauding, applauds, applause, appreciate, appreciated, appreciates, appreciating, appreciation, apprehensive, appropriate, appropriately, approval, approved, approves, ardent, arrest, arrested, arrests, arrogant, arsehole, ashame, ashamed, ass, assassination, assassinations, assault, assaults, asset, assets, assfucking, asshole, astonished, astound, astounded, astounding, astoundingly, astounds, atrocious, atrocity, attack, attacked, attacking, attacks, attract, attracted, attracting, attraction, attractions, attractive, attractively, attractiveness, attracts, audacious, aura, authority, avenge, avenged, avenger, avengers, avenges, avenging, avert, averted, averts, avid, avoid, avoided, avoids, await, awaited, awaits, award, awarded, awards, awesome, awful, awkward, axe, axed, backed, backing, backs, bad, bad luck, badass, badly, badness, bailout, balanced, bamboozle, bamboozled, bamboozles, ban, banish, bankrupt, bankruptcy, bankster, banned, barbarian, barbaric, barbarous, bargain, barrier, bastard, bastards, battle, battled, battles, battling, beaten, beatific, beating, beauties, beautiful, beautifully, beautify, beauty, befit, befitting, belittle, belittled, beloved, benefactor, benefactors, benefit, benefits, benefitted, benefitting, benevolent, bereave, bereaved, bereaves, bereaving, best, best damn, betray, betrayal, betrayed, betraying, betrays, better, bias, biased, big, bitch, bitches, bitter, bitterest, bitterly, bizarre, blackmail, blackmailed, blackmailing, blackmails, blah, blame, blamed, blames, blaming, bless, blesses, blessing, blessings, blind, bliss, blissful, blithe, bloated, block, blockade, blockbuster, blocked, blocking, blocks, bloody, blurry, boastful, bold, boldly, bomb, boost, boosted, boosting, boosts, bore, bored, boring, bother, bothered, bothers, bothersome, boycott, boycotted, boycotting, boycotts, brainwashing, brave, braveness, bravery, bravura, breach, breached, breaches, breaching, breakthrough, breathtaking, bribe, bribed, bribes, bribing, bright, brightest, brightness, brilliant, brilliance, brilliances, brisk, broke, broken, brooding, brutal, brutally, bullied, bullshit, bully, bullying, bummer, buoyant, burden, burdened, burdening, burdens, burglar, burglary, calm, calmed, calming, calms, can't stand, cancel, cancelled, cancelling, cancels, cancer, capabilities, capability, capable, captivated, care, carefree, careful, carefully, carefulness, careless, cares, caring, cashing in, casualty, catastrophe, catastrophic, cautious, celebrate, celebrated, celebrates, celebrating, celebration, celebrations, censor, censored, censors, certain, chagrin, chagrined, challenge, champion, championed, champions, chance, chances, chaos, chaotic, charged, charges, charisma, charitable, charm, charming, charmingly, charmless, chastise, chastised, chastises, chastising, cheat, cheated, cheater, cheaters, cheating, cheats, cheer, cheered, cheerful, cheerfully, cheering, cheerless, cheers, cheery, cherish, cherished, cherishes, cherishing, chic, chide, chided, chides, chiding, childish, chilling, choke, choked, chokes, choking, clarifies, clarity, clash, classy, clean, cleaner, clear, cleared, clearly, clears, clever, clouded, clueless, cock, cocksucker, cocksuckers, cocky, coerced, coercion, collapse, collapsed, collapses, collapsing, collide, collides, colliding, collision, collisions, colluding, combat, combats, comedy, comfort, comfortable, comfortably, comforting, comforts, comic, commend, commended, commit, commitment, commits, committed, committing, compassion, compassionate, compelled, competencies, competent, competitive, complacent, complain, complained, complaining, complains, complaint, complaints, complicating, compliment, complimented, compliments, comprehensive, concerned, conciliate, conciliated, conciliates, conciliating, condemn, condemnation, condemned, condemns, confidence, confident, confidently, conflict, conflicting, conflictive, conflicts, confuse, confused, confusing, congrats, congratulate, congratulation, congratulations, consent, consents, consolable, conspiracy, constipation, constrained, contagion, contagions, contagious, contaminant, contaminants, contaminate, contaminated, contaminates, contaminating, contamination, contaminations, contempt, contemptible, contemptuous, contemptuously, contend, contender, contending, contentious, contestable, controversial, controversially, controversies, controversy, convicted, convince, convinced, convinces, convivial, cool, cool stuff, cornered, corpse, corrupt, corrupted, corrupting, corruption, corrupts, costly, courage, courageous, courageously, courageousness, courteous, courtesy, cover-up, coward, cowardly, coziness, cramp, crap, crappy, crash, crazier, craziest, crazy, creative, crestfallen, cried, cries, crime, crimes, criminal, criminals, criminate, criminated, criminates, crisis, critic, criticise, criticised, criticises, criticising, criticism, criticize, criticized, criticizes, criticizing, critics, critique, crowding, crude, cruel, cruelty, crush, crushed, crushes, crushing, cry, crying, cunning, cunt, curious, curse, cut, cutback, cutbacks, cute, cuts, cutting, cynic, cynical, cynicism, damage, damaged, damages, damaging, damn, damn cute, damn good, damned, damnit, danger, dangerous, dangerously, daredevil, daring, darkest, darkness, dauntless, dazzling, dead, deadening, deadlock, deadly, deafening, dear, dearly, death, deaths, debonair, debt, deceit, deceitful, deceive, deceived, deceives, deceiving, deception, deceptive, decisive, dedicated, dedication, defeat, defeated, defect, defective, defects, defender, defenders, defenseless, defer, deferring, defiant, deficient, deficiency, deficiencies, deficit, deformed, deformities, deformity, defraud, defrauds, deft, defunct, degrade, degraded, degrades, dehumanize, dehumanized, dehumanizes, dehumanizing, deject, dejected, dejecting, dejects, delay, delayed, delectable, delicious, delight, delighted, delightful, delightfully, delighting, delights, demand, demanded, demanding, demands, demonstration, demoralize, demoralized, demoralizes, demoralizing, denial, denials, denied, denier, deniers, denies, denounce, denounces, dent, deny, denying, deplore, deplored, deplores, deploring, deport, deported, deporting, deports, deportation, deportations, depressed, depressing, deprivation, derail, derailed, derails, derelict, deride, derided, derides, deriding, derision, desirable, desire, desired, desirous, despair, despairing, despairs, desperate, desperately, despondent, destroy, destroyed, destroying, destroys, destruction, destructive, detached, detain, detained, detention, deteriorate, deteriorated, deteriorates, deteriorating, determined, deterrent, detract, detracted, detracts, devastate, devastated, devastating, devastation, devastations, devoted, devotion, devotional, diamond, dick, dickhead, die, died, difficult, diffident, dignity, dilemma, dilligence, dipshit, dire, direful, dirt, dirtier, dirtiest, dirty, disabilities, disability, disabling, disadvantage, disadvantaged, disagree, disagreeable, disagreement, disappear, disappeared, disappears, disappoint, disappointed, disappointing, disappointment, disappointments, disappoints, disapproval, disapprovals, disapprove, disapproved, disapproves, disapproving, disaster, disasters, disastrous, disbelieve, discard, discarded, discarding, discards, discernment, discomfort, disconsolate, disconsolation, discontented, discord, discounted, discouraged, discredited, discriminate, discriminated, discriminates, discriminating, discriminatory, disdain, disease, diseases, disgrace, disgraced, disguise, disguised, disguises, disguising, disgust, disgusted, disgustful, disgusting, disheartened, dishonest, disillusioned, disinclined, disjointed, dislike, disliked, dislikes, dismal, dismayed, dismissed, disorder, disorders, disorganized, disoriented, disparage, disparaged, disparages, disparaging, displeased, displeasure, disproportionate, dispute, disputed, disputes, disputing, disqualified, disquiet, disregard, disregarded, disregarding, disregards, disrespect, disrespected, disrupt, disrupted, disrupting, disruption, disruptions, disruptive, disrupts, dissatisfied, distasteful, distinguished, distort, distorted, distorting, distorts, distract, distracted, distraction, distracts, distress, distressed, distresses, distressing, distrust, distrustful, disturb, disturbed, disturbing, disturbs, dithering, diverting, dizzy, dodging, dodgy, does not work, dolorous, donate, donated, donates, donating, donation, dont like, doom, doomed, doubt, doubted, doubtful, doubting, doubts, douche, douchebag, dour, downcast, downer, downhearted, downside, drag, dragged, drags, drained, dread, dreaded, dreadful, dreading, dream, dreams, dreary, droopy, drop, dropped, drown, drowned, drowns, drudgery, drunk, dubious, dud, dull, dumb, dumbass, dump, dumped, dumps, dupe, duped, dupery, durable, dying, dysfunction, eager, earnest, ease, easy, ecstatic, eerie, eery, effective, effectively, effectiveness, effortlessly, elated, elation, elegant, elegantly, embarrass, embarrassed, embarrasses, embarrassing, embarrassment, embezzlement, embittered, embrace, emergency, empathetic, empower, empowerment, emptiness, empty, enchanted, encourage, encouraged, encouragement, encourages, encouraging, endorse, endorsed, endorsement, endorses, enemies, enemy, energetic, engage, engages, engrossed, engrossing, enjoy, enjoyable, enjoyed, enjoying, enjoys, enlighten, enlightened, enlightening, enlightens, ennui, enrage, enraged, enrages, enraging, enrapture, enslave, enslaved, enslaves, ensure, ensuring, enterprising, entertaining, enthral, enthusiastic, entitled, entrusted, envies, envious, environment-friendly, envy, envying, erroneous, error, errors, escape, escapes, escaping, esteem, esteemed, ethical, euphoria, euphoric, evacuate, evacuated, evacuates, evacuating, evacuation, evergreen, evergreens, evergreening, eviction, evil, exacerbate, exacerbated, exacerbates, exacerbating, exaggerate, exaggerated, exaggerates, exaggerating, exasparate, exasperated, exasperates, exasperating, excellence, excellent, excite, excited, excitement, exciting, exclude, excluded, exclusion, exclusive, excruciatingly, excuse, exempt, exhausted, exhilarated, exhilarates, exhilarating, exonerate, exonerated, exonerates, exonerating, expand, expands, expel, expelled, expelling, expels, expertly, exploit, exploited, exploiting, exploits, exploration, explorations, expose, exposed, exposes, exposing, exquisite, extend, extends, extremist, extremists, exuberant, exultant, exultantly, fabulous, fabulously, fad, fag, faggot, faggots, fail, failed, failing, fails, failure, failures, fainthearted, fair, fairness, faith, faithful, fake, faker, fakes, faking, fallen, falling, false, falsely, falsified, falsify, fame, famine, famous, fan, fantastic, farce, fascinate, fascinated, fascinates, fascinating, fascination, fascist, fascists, fatal, fatalities, fatality, fatigue, fatigued, fatigues, fatiguing, favor, favorable, favorably, favored, favorite, favorited, favorites, favors, favour, favourable, favourably, favoured, favourite, favourited, favourites, favours, fear, fearful, fearfully, fearing, fearless, fearlessness, fearsome, fed up, feeble, feeling, felonies, felony, fertile, fervent, fervid, festive, fever, fiasco, fidgety, fight, fighting, fine, fines, finest, fire, fired, firing, fit, fitness, filth, filthy, flagship, flaw, flawed, flawless, flawlessly, flaws, flees, flop, flops, flu, flustered, focused, fond, fondness, fool, foolish, fools, forbid, forbidden, forbidding, forced, foreclosure, foreclosures, forefront, forget, forgetful, forgettable, forgive, forgiving, forgot, forgotten, fortune, fortunate, fortunately, foul, frantic, fraud, frauds, fraudster, fraudsters, fraudulence, fraudulent, freak, free, freedom, freedoms, frenzy, fresh, friend, friendliness, friendly, friendship, fright, frightened, frightening, frikin, frisky, frowning, fruitless, frustrate, frustrated, frustrates, frustrating, frustration, ftw, fuck, fucked, fucker, fuckers, fuckface, fuckhead, fuckin, fucking, fucking amazing, fucking beautiful, fucking cute, fucking fantastic, fucking good, fucking great, fucking hot, fucking love, fucking loves, fucking perfect, fucktard, fud, fuked, fuking, fulfill, fulfilled, fulfillment, fulfills, fuming, fun, funeral, funerals, funky, funnier, funny, furious, futile, gag, gagged, gain, gained, gaining, gains, gallant, gallantly, gallantry, game-changing, garbage, gem, generous, generously, genial, ghastly, ghost, giddy, gift, glad, glamorous, glamourous, glee, gleeful, gloom, gloomy, glorious, glory, glum, god, goddamn, godsend, gold, good, goodlooking, goodmorning, goodness, goodwill, goofiness, goofy, grace, graceful, gracious, grand, grant, granted, granting, grants, grateful, gratification, grave, gray, grisly, gr8, great, greater, greatest, greed, greedy, green wash, green washing, greenwash, greenwasher, greenwashers, greenwashing, greet, greeted, greeting, greetings, greets, grey, grief, grieved, grim, gripping, groan, groaned, groaning, groans, gross, growing, growth, growths, gruesome, guarantee, guilt, guilty, gullibility, gullible, gun, ha, hacked, haha, hahaha, hahahah, hail, hailed, hallelujah, handpicked, handsome, hapless, haplessness, happiest, happiness, happy, harass, harassed, harasses, harassing, harassment, hard, hardier, hardship, hardy, harm, harmed, harmful, harming, harmony, harmonious, harmoniously, harms, harried, harsh, harsher, harshest, harshly, hate, hated, hater, haters, hates, hating, hatred, haunt, haunted, haunting, haunts, havoc, hazardous, headache, healthy, heartbreaking, heartbroken, heartfelt, heartless, heartwarming, heaven, heavenly, heavyhearted, hehe, hell, hellish, help, helpful, helping, helpless, helps, hero, heroes, heroic, hesitant, hesitate, hid, hide, hideous, hides, hiding, highlight, hilarious, hinder, hindrance, hoax, hollow, homeless, homesick, homicide, homicides, honest, honor, honored, honoring, honour, honoured, honouring, hooligan, hooliganism, hooligans, hope, hopeful, hopefully, hopeless, hopelessness, hopes, hoping, horrendous, horrid, horrible, horrific, horrified, hospitalized, hostile, huckster, hug, huge, hugs, humane, humble, humbug, humerous, humiliated, humiliation, humor, humorous, humour, humourous, hunger, hurrah, hurt, hurting, hurts, hypocritical, hysteria, hysterical, hysterics, icky, idiocy, idiot, idiotic, ignorance, ignorant, ignore, ignored, ignores, ill, ill-fated, illegal, illegally, illegitimate, illiteracy, illness, illnesses, illogical, imaginative, imbecile, immobilized, immortal, immune, impair, impaired, impairing, impairment, impairs, impatient, impeachment, impeachments, impede, impeded, impedes, impeding, impedingly, imperfect, importance, important, impose, imposed, imposes, imposing, imposter, impotent, impress, impressed, impresses, impressive, imprisoned, imprisonment, improper, improperly, improve, improved, improvement, improves, improving, inability, inaction, inadequate, inadvertently, inappropriate, incapable, incapacitated, incapacitates, incapacitating, incense, incensed, incenses, incensing, incoherent, incompetence, incompetent, incomplete, incomprehensible, inconsiderate, inconvenience, inconvenient, increase, increased, indecisive, indestructible, indicted, indifference, indifferent, indignant, indignation, indoctrinate, indoctrinated, indoctrinates, indoctrinating, inediable, inexorable, inexcusable, ineffective, ineffectively, ineffectual, inefficiency, inefficient, inefficiently, inept, ineptitude, infantile, infantilized, infatuated, infatuation, infect, infected, infecting, infection, infections, infectious, infects, inferior, infest, infested, infesting, infests, inflamed, inflict, inflicted, inflicting, inflicts, influential, infract, infracted, infracting, infracts, infringement, infuriate, infuriated, infuriates, infuriating, inhibit, inhuman, injured, injuries, injury, injustice, innovate, innovates, innovation, innovative, inoperative, inquisition, inquisitive, insane, insanity, insecure, insensitive, insensitivity, insignificant, insipid, insolvent, insomnia, inspiration, inspirational, inspire, inspired, inspires, inspiring, insufficiency, insufficient, insufficiently, insult, insulted, insulting, insults, intact, integrity, intelligent, intense, interest, interested, interesting, interests, interrogated, interrupt, interrupted, interrupting, interruption, interrupts, intimacy, intimidate, intimidated, intimidates, intimidating, intimidation, intransigence, intransigency, intricate, intrigues, invasion, invincible, invite, inviting, invulnerable, irate, ironic, irony, irrational, irreparable, irreproducible, irresistible, irresistibly, irresolute, irresponsible, irresponsibly, irreversible, irreversibly, irritate, irritated, irritates, irritating, isolated, itchy, jackass, jackasses, jailed, jaunty, jealous, jealousy, jeopardy, jerk, jesus, jewel, jewels, jocular, join, joke, jokes, jolly, jovial, joy, joyful, joyfully, joyless, joyous, jubilant, jumpy, justice, justifiably, justified, keen, kickback, kickbacks, kidnap, kidnapped, kidnapping, kidnappings, kidnaps, kill, killed, killing, kills, kind, kind of, kinder, kindness, kiss, kudos, lack, lackadaisical, lag, lagged, lagging, lags, lame, landmark, lapse, lapsed, laugh, laughed, laughing, laughs, laughting, launched, lawl, lawsuit, lawsuits, lazy, leadership, leading, leak, leaked, leave, legal, legally, lenient, lethal, lethality, lethargic, lethargy, liar, liars, libelous, lied, lifeless, lifesaver, lighthearted, likable, like, likeable, liked, likers, likes, liking, limitation, limited, limits, litigation, litigious, lively, livid, lmao, lmfao, loathe, loathed, loathes, loathing, loathsome, lobbied, lobby, lobbying, lobbyist, lobbyists, lol, lolol, lololol, lolololol, lonely, lonesome, longing, lool, loom, loomed, looming, looms, loool, looool, loose, looses, loser, losing, loss, losses, lost, lousy, lovable, love, loved, lovelies, lovely, loves, loving, loving-kindness, lowest, loyal, loyalty, luck, luckily, lucky, lucrative, ludicrous, lugubrious, lunatic, lunatics, lurk, lurking, lurks, luxury, macabre, mad, maddening, made-up, madly, madness, magnificent, maladaption, maldevelopment, maltreatment, mandatory, manipulated, manipulating, manipulation, manslaughter, marvel, marvelous, marvels, masterpiece, masterpieces, matter, matters, mature, meaningful, meaningless, medal, mediocrity, meditative, melancholy, memorable, memoriam, menace, menaced, menaces, mercy, merry, mesmerizing, mess, messed, messing up, methodical, methodically, mindless, miracle, mirth, mirthful, mirthfully, misbehave, misbehaved, misbehaves, misbehaving, misbranding, miscast, mischief, mischiefs, misclassified, misclassifies, misclassify, misconduct, misconducted, misconducting, misconducts, miserable, miserably, misery, misfire, misfortune, misgiving, misinformation, misinformed, misinterpreted, mislead, misleaded, misleading, misleads, misplace, misplaced, misplaces, misplacing, mispricing, misread, misreport, misreported, misreporting, misreports, misrepresent, misrepresentation, misrepresentations, misrepresented, misrepresenting, misrepresents, miss, missed, missing, mistake, mistaken, mistakes, mistaking, misunderstand, misunderstanding, misunderstands, misunderstood, misuse, misused, misuses, misusing, moan, moaned, moaning, moans, mock, mocked, mocking, mocks, modernize, modernized, modernizes, modernizing, mongering, monopolize, monopolized, monopolizes, monopolizing, monotone, moody, mope, moping, moron, motherfucker, motherfucking, motivate, motivated, motivating, motivation, mourn, mourned, mournful, mourning, mourns, muddy, mumpish, murder, murderer, murdering, murderous, murders, murky, myth, n00b, naive, narcissism, nasty, natural, naïve, needy, negative, negativity, neglect, neglected, neglecting, neglects, nerves, nervous, nervously, nice, nifty, niggas, nigger, no, no fun, noble, noblest, noisy, non-approved, nonsense, noob, nosey, not good, not working, notable, noticeable, notorious, novel, numb, nurturing, nuts, obliterate, obliterated, obnoxious, obscene, obscenity, obsessed, obsolete, obstacle, obstacles, obstinate, obstruct, obstructed, obstructing, obstruction, obstructs, odd, offence, offences, offend, offended, offender, offending, offends, offense, offenses, offensive, offensively, offline, oks, ominous, once-in-a-lifetime, oops, opportunities, opportunity, oppressed, oppression, oppressions, oppressive, optimism, optimistic, optionless, ostracize, ostracized, ostracizes, ouch, outage, outages, outbreak, outbreaks, outcry, outmaneuvered, outnumbered, outrage, outraged, outrageous, outreach, outstanding, overjoyed, overload, overlooked, overprotective, overran, overreact, overreacted, overreacting, overreaction, overreacts, oversell, overselling, oversells, oversight, oversimplification, oversimplified, oversimplifies, oversimplify, oversold, overstatement, overstatements, overweight, overwrought, oxymoron, pain, pained, painful, panic, panicked, panics, paradise, paradox, pardon, pardoned, pardoning, pardons, parley, passion, passionate, passive, passively, pathetic, pay, peace, peaceful, peacefully, penalize, penalized, penalizes, penalizing, penalty, pensive, perfect, perfected, perfection, perfectly, perfects, peril, perjury, perpetrated, perpetrator, perpetrators, perplexed, persecute, persecuted, persecutes, persecuting, perturbed, pervert, pesky, pessimism, pessimistic, petrified, philanthropy, phobic, picturesque, pileup, pillage, pique, piqued, piss, pissed, pissing, piteous, pitied, pity, plague, plagued, plagues, plaguing, playful, pleasant, please, pleased, pleasurable, pleasure, plodding, poignant, pointless, poised, poison, poisoned, poisons, polished, polite, politeness, pollutant, pollute, polluted, polluter, polluters, pollutes, pollution, poor, poorer, poorest, poorly, popular, popularity, positive, positively, possessive, post-traumatic, postpone, postponed, postpones, postponing, poverty, powerful, powerless, praise, praised, praises, praising, pray, praying, prays, prblm, prblms, predatory, prepared, pressure, pressured, pretend, pretending, pretends, pretty, prevent, prevented, preventing, prevents, prick, prison, prisoner, prisoners, privileged, proactive, problem, problems, profit, profitable, profiteer, profits, progress, prohibit, prohibits, prominent, promise, promised, promises, promote, promoted, promotes, promoting, promptly, propaganda, prosecute, prosecuted, prosecutes, prosecution, prospect, prospects, prosperity, prosperous, protect, protected, protects, protest, protesters, protesting, protests, proud, proudly, provoke, provoked, provokes, provoking, prudence, pseudoscience, psychopathic, punish, punished, punishes, punishing, punitive, pure, purest, purposeful, pushy, puzzled, quaking, qualities, quality, questionable, questioned, questioning, racism, racist, racists, rage, rageful, rainy, rant, ranter, ranters, rants, rape, raped, rapist, rapture, raptured, raptures, rapturous, rash, ratified, reach, reached, reaches, reaching, reassure, reassured, reassures, reassuring, rebel, rebellion, rebels, recession, reckless, recognition, recommend, recommended, recommends, redeemed, refine, refined, refines, refreshingly, refuse, refused, refuses, refusing, regret, regretful, regrets, regretted, regretting, reigning, reject, rejected, rejecting, rejection, rejects, rejoice, rejoiced, rejoices, rejoicing, relaxed, relentless, reliability, reliable, reliably, reliant, relieve, relieved, relieves, relieving, relishing, remarkable, remorse, repellent, repercussion, repercussions, reprimand, reprimanded, reprimanding, reprimands, repulse, repulsed, repulsive, rescue, rescued, rescues, resentful, resign, resigned, resigning, resigns, resolute, resolution, resolve, resolved, resolves, resolving, respect, respected, respects, responsibility, responsible, responsive, restful, restless, restore, restored, restores, restoring, restrict, restricted, restricting, restriction, restrictive, restricts, retained, retard, retarded, retreat, revenge, revengeful, revered, revive, revives, revolting, reward, rewarded, rewarding, rewards, rich, richly, ridiculous, rig, rigged, right direction, righteousness, rightful, rightfully, rigorous, rigorously, riot, riots, rise, rises, risk, risks, risky, riveting, rob, robber, robed, robing, robs, robust, rofl, roflcopter, roflmao, romance, romantical, romantically, rose, rotfl, rotflmfao, rotflol, rotten, rude, ruin, ruined, ruining, ruins, sabotage, sad, sadden, saddened, sadly, safe, safely, safer, safety, salient, salute, saluted, salutes, saluting, salvation, sappy, sarcastic, satisfied, savange, savanges, save, saved, savings, scam, scams, scandal, scandalous, scandals, scapegoat, scapegoats, scare, scared, scar, scars, scary, sceptical, scold, scoop, scorn, scornful, scream, screamed, screaming, screams, screwed, screwed up, scum, scumbag, seamless, seamlessly, secure, secured, secures, sedition, seditious, seduced, self-abuse, self-confident, self-contradictory, self-deluded, selfish, selfishness, sentence, sentenced, sentences, sentencing, serene, settlement, settlements, severe, severely, sexist, sexistic, sexy, shaky, shame, shamed, shameful, share, shared, shares, shattered, shit, shithead, shitty, shock, shocked, shocking, shocks, shoody, shoot, short-sighted, short-sightedness, shortage, shortages, shrew, shy, sick, sickness, side-effect, side-effects, sigh, significance, significant, silencing, silly, simplicity, sin, sincere, sincerely, sincerest, sincerity, sinful, singleminded, sinister, sins, skeptic, skeptical, skepticism, skeptics, slam, slash, slashed, slashes, slashing, slave, slavery, slaves, sleeplessness, slick, slicker, slickest, slip, sloppy, sluggish, slumping, slut, smart, smarter, smartest, smear, smile, smiled, smiles, smiling, smog, smuggle, smuggled, smuggling, smuggles, sneaky, sneeze, sneezed, sneezes, sneezing, snub, snubbed, snubbing, snubs, sobering, solemn, solid, solidarity, solidified, solidifies, solidify, solidifying, solution, solutions, solve, solved, solves, solving, somber, some kind, son-of-a-bitch, soothe, soothed, soothing, sophisticated, sore, sorrow, sorrowful, sorry, spacious, spam, spammer, spammers, spamming, spark, sparkle, sparkles, sparkling, spearhead, speculative, spirit, spirited, spiritless, spiteful, splendid, spoiled, spoilt, spotless, sprightly, squander, squandered, squandering, squanders, squelched, stab, stabbed, stable, stabs, stall, stalled, stalling, stamina, stampede, stank, startled, startling, starve, starved, starves, starving, steadfast, steal, stealing, steals, stereotype, stereotyped, stifled, stimulate, stimulated, stimulates, stimulating, stingy, stink, stinked, stinker, stinking, stinks, stinky, stole, stolen, stop, stopped, stopping, stops, stout, straight, strange, strangely, strangled, strength, strengthen, strengthened, strengthening, strengthens, strengths, stress, stressed, stressor, stressors, stricken, strike, strikers, strikes, strong, stronger, strongest, struck, struggle, struggled, struggles, struggling, stubborn, stuck, stunned, stunning, stupid, stupidity, stupidly, suave, subpoena, substantial, substantially, subversive, succeed, succeeded, succeeding, succeeds, success, successful, successfully, suck, sucks, sue, sued, sueing, sues, suffer, suffered, sufferer, sufferers, suffering, suffers, suicidal, suicide, suicides, suing, suitable, suited, sulking, sulky, sullen, sunshine, super, superb, superior, support, supported, supporter, supporters, supporting, supportive, supports, supreme, survived, surviving, survivor, suspect, suspected, suspecting, suspects, suspend, suspended, suspicious, sustainability, sustainable, sustainably, swear, swearing, swears, sweet, sweeter, sweetest, swift, swiftly, swindle, swindles, swindling, sympathetic, sympathy, taint, tainted, talent, tard, tarnish, tarnished, tarnishes, tears, tender, tenderness, tense, tension, terrible, terribly, terrific, terrifically, terrified, terror, terrorist, terrorists, terrorize, terrorized, terrorizes, thank, thankful, thanks, thorny, thoughtful, thoughtless, threat, threaten, threatened, threatening, threatens, threats, thrilled, thwart, thwarted, thwarting, thwarts, timid, timorous, tired, tits, tolerance, tolerant, toothless, top, tops, torn, torture, tortured, tortures, torturing, totalitarian, totalitarianism, tout, touted, touting, touts, toxic, tragedies, tragedy, tragic, tranquil, transgress, transgressed, transgresses, transgressing, trap, trapped, traps, trauma, traumatic, travesty, treason, treasonous, treasure, treasures, trembling, tremor, tremors, tremulous, tribulation, tribute, tricked, trickery, triumph, triumphant, troll, trouble, troubled, troubles, troubling, true, trust, trusted, trusts, tumor, twat, tyran, tyrannic, tyrannical, tyrannically, tyrans, ubiquitous, ugh, ugliness, ugly, unable, unacceptable, unappeasable, unappreciated, unapproved, unattractive, unavailable, unavailing, unaware, unbearable, unbelievable, unbelieving, unbiased, uncertain, unclear, uncomfortable, unconcerned, unconfirmed, unconvinced, uncredited, undecided, undercooked, underestimate, underestimated, underestimates, underestimating, undermine, undermined, undermines, undermining, underperform, underperformed, underperforming, underperforms, undeserving, undesirable, uneasy, unemployed, unemployment, unequal, unequaled, unethical, uneventful, unfair, unfavorable, unfit, unfitted, unfocused, unforgivable, unforgiving, unfulfilled, unfunny, ungenerous, ungrateful, unhappy, unhappiness, unhealthy, unhygienic, unified, unimaginative, unimpressed, uninspired, unintelligent, unintentional, uninvolving, united, unjust, unlikely, unlovable, unloved, unmatched, unmotivated, unoriginal, unparliamentary, unpleasant, unpleasantness, unprofessional, unravel, unreleting, unresearched, unsafe, unsatisfied, unscientific, unsecured, unselfish, unsettled, unsold, unsophisticated, unsound, unstable, unstoppable, unsuccessful, unsuccessfully, unsupported, unsure, untarnished, untrue, unwanted, unworthy, uplifting, uproar, upset, upsets, upsetting, uptight, urgent, useful, usefulness, useless, uselessness, vague, validate, validated, validates, validating, vapid, verdict, verdicts, vested, vexation, vexing, vibrant, vicious, victim, victimization, victimize, victimized, victimizes, victimizing, victims, victor, victors, victory, victories, vigilant, vigor, vile, vindicate, vindicated, vindicates, vindicating, violate, violated, violates, violating, violation, violations, violence, violence-related, violent, violently, virtuous, virulent, vision, visionary, visioning, visions, vitality, vitamin, vitriolic, vivacious, vividly, vociferous, vomit, vomited, vomiting, vomits, vulnerability, vulnerable, walkout, walkouts, wanker, want, war, warfare, warm, warmhearted, warmness, warmth, warn, warned, warning, warnings, warns, waste, wasted, wasting, wavering, weak, weakened, weakness, weaknesses, wealth, wealthier, wealthy, weary, weep, weeping, weird, welcome, welcomed, welcomes, well-being, well-championed, well-developed, well-established, well-focused, well-groomed, well-proportioned, whimsical, whitewash, whore, wicked, widowed, willingness, win, winner, winning, wins, winwin, wisdom, wish, wishes, wishing, withdrawal, wits, woebegone, woeful, won, wonderful, wonderfully, woo, woohoo, wooo, woow, worn, worried, worries, worry, worrying, worse, worsen, worsened, worsening, worsens, worshiped, worst, worth, worthless, worthy, wow, wowow, wowww, wrathful, wreck, wrenching, wrong, wrongdoing, wrongdoings, wronged, wrongful, wrongfully, wrongly, wtf, wtff, wtfff, xo, xoxo, xoxoxo, xoxoxoxo, yeah, yearning, yeees, yes, youthful, yucky, yummy, zealot, zealots, zealous, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"abandon\":-2,\"abandoned\":-2,\"abandons\":-2,\"abducted\":-2,\"abduction\":-2,\"abductions\":-2,\"abhor\":-3,\"abhorred\":-3,\"abhorrent\":-3,\"abhors\":-3,\"abilities\":2,\"ability\":2,\"aboard\":1,\"aborted\":-1,\"aborts\":-1,\"absentee\":-1,\"absentees\":-1,\"absolve\":2,\"absolved\":2,\"absolves\":2,\"absolving\":2,\"absorbed\":1,\"abuse\":-3,\"abused\":-3,\"abuses\":-3,\"abusing\":-3,\"abusive\":-3,\"accept\":1,\"acceptable\":1,\"acceptance\":1,\"accepted\":1,\"accepting\":1,\"accepts\":1,\"accessible\":1,\"accident\":-2,\"accidental\":-2,\"accidentally\":-2,\"accidents\":-2,\"acclaim\":2,\"acclaimed\":2,\"accolade\":2,\"accomplish\":2,\"accomplished\":2,\"accomplishes\":2,\"accomplishment\":2,\"accomplishments\":2,\"accusation\":-2,\"accusations\":-2,\"accuse\":-2,\"accused\":-2,\"accuses\":-2,\"accusing\":-2,\"ache\":-2,\"achievable\":1,\"aching\":-2,\"acquit\":2,\"acquits\":2,\"acquitted\":2,\"acquitting\":2,\"acrimonious\":-3,\"active\":1,\"adequate\":1,\"admire\":3,\"admired\":3,\"admires\":3,\"admiring\":3,\"admit\":-1,\"admits\":-1,\"admitted\":-1,\"admonish\":-2,\"admonished\":-2,\"adopt\":1,\"adopts\":1,\"adorable\":3,\"adoration\":3,\"adore\":3,\"adored\":3,\"adores\":3,\"adoring\":3,\"adoringly\":3,\"advanced\":1,\"advantage\":2,\"advantageous\":2,\"advantageously\":2,\"advantages\":2,\"adventure\":2,\"adventures\":2,\"adventurous\":2,\"adversary\":-1,\"advisable\":1,\"affected\":-1,\"affection\":3,\"affectionate\":3,\"affectionateness\":3,\"afflicted\":-1,\"affordable\":2,\"affronted\":-1,\"aficionados\":2,\"afraid\":-2,\"aggravate\":-2,\"aggravated\":-2,\"aggravates\":-2,\"aggravating\":-2,\"aggression\":-2,\"aggressions\":-2,\"aggressive\":-2,\"aggressiveness\":-2,\"aghast\":-2,\"agog\":2,\"agonise\":-3,\"agonised\":-3,\"agonises\":-3,\"agonising\":-3,\"agonize\":-3,\"agonized\":-3,\"agonizes\":-3,\"agonizing\":-3,\"agree\":1,\"agreeable\":2,\"agreed\":1,\"agreement\":1,\"agrees\":1,\"alarm\":-2,\"alarmed\":-2,\"alarmist\":-2,\"alarmists\":-2,\"alas\":-1,\"alert\":-1,\"alienation\":-2,\"alive\":1,\"allegation\":-2,\"allegations\":-2,\"allergic\":-2,\"allow\":1,\"ally\":2,\"alone\":-2,\"altruistic\":2,\"amaze\":2,\"amazed\":2,\"amazes\":2,\"amazing\":4,\"ambitious\":2,\"ambivalent\":-1,\"amicable\":2,\"amuse\":3,\"amused\":3,\"amusement\":3,\"amusements\":3,\"anger\":-3,\"angered\":-3,\"angers\":-3,\"angry\":-3,\"anguish\":-3,\"anguished\":-3,\"animosity\":-2,\"annoy\":-2,\"annoyance\":-2,\"annoyed\":-2,\"annoying\":-2,\"annoys\":-2,\"antagonistic\":-2,\"anti\":-1,\"anticipation\":1,\"anxiety\":-2,\"anxious\":-2,\"apathetic\":-3,\"apathy\":-3,\"apeshit\":-3,\"apocalyptic\":-2,\"apologise\":-1,\"apologised\":-1,\"apologises\":-1,\"apologising\":-1,\"apologize\":-1,\"apologized\":-1,\"apologizes\":-1,\"apologizing\":-1,\"apology\":-1,\"appalled\":-2,\"appalling\":-2,\"appealing\":2,\"appease\":2,\"appeased\":2,\"appeases\":2,\"appeasing\":2,\"applaud\":2,\"applauded\":2,\"applauding\":2,\"applauds\":2,\"applause\":2,\"appreciate\":2,\"appreciated\":2,\"appreciates\":2,\"appreciating\":2,\"appreciation\":2,\"apprehensive\":-2,\"appropriate\":2,\"appropriately\":2,\"approval\":2,\"approved\":2,\"approves\":2,\"ardent\":1,\"arrest\":-2,\"arrested\":-3,\"arrests\":-2,\"arrogant\":-2,\"arsehole\":-4,\"ashame\":-2,\"ashamed\":-2,\"ass\":-4,\"assassination\":-3,\"assassinations\":-3,\"assault\":-2,\"assaults\":-2,\"asset\":2,\"assets\":2,\"assfucking\":-4,\"asshole\":-4,\"astonished\":2,\"astound\":3,\"astounded\":3,\"astounding\":3,\"astoundingly\":3,\"astounds\":3,\"atrocious\":-3,\"atrocity\":-3,\"attack\":-1,\"attacked\":-1,\"attacking\":-1,\"attacks\":-1,\"attract\":1,\"attracted\":1,\"attracting\":2,\"attraction\":2,\"attractions\":2,\"attractive\":2,\"attractively\":2,\"attractiveness\":2,\"attracts\":1,\"audacious\":3,\"aura\":1,\"authority\":1,\"avenge\":-2,\"avenged\":-2,\"avenger\":-2,\"avengers\":-2,\"avenges\":-2,\"avenging\":-2,\"avert\":-1,\"averted\":-1,\"averts\":-1,\"avid\":2,\"avoid\":-1,\"avoided\":-1,\"avoids\":-1,\"await\":-1,\"awaited\":-1,\"awaits\":-1,\"award\":3,\"awarded\":3,\"awards\":3,\"awesome\":4,\"awful\":-3,\"awkward\":-2,\"axe\":-1,\"axed\":-1,\"backed\":1,\"backing\":2,\"backs\":1,\"bad\":-3,\"bad luck\":-2,\"badass\":-3,\"badly\":-3,\"badness\":-3,\"bailout\":-2,\"balanced\":1,\"bamboozle\":-2,\"bamboozled\":-2,\"bamboozles\":-2,\"ban\":-2,\"banish\":-1,\"bankrupt\":-3,\"bankruptcy\":-3,\"bankster\":-3,\"banned\":-2,\"barbarian\":-2,\"barbaric\":-2,\"barbarous\":-2,\"bargain\":2,\"barrier\":-2,\"bastard\":-5,\"bastards\":-5,\"battle\":-1,\"battled\":-1,\"battles\":-1,\"battling\":-2,\"beaten\":-2,\"beatific\":3,\"beating\":-1,\"beauties\":3,\"beautiful\":3,\"beautifully\":3,\"beautify\":3,\"beauty\":3,\"befit\":2,\"befitting\":2,\"belittle\":-2,\"belittled\":-2,\"beloved\":3,\"benefactor\":2,\"benefactors\":2,\"benefit\":2,\"benefits\":2,\"benefitted\":2,\"benefitting\":2,\"benevolent\":3,\"bereave\":-2,\"bereaved\":-2,\"bereaves\":-2,\"bereaving\":-2,\"best\":3,\"best damn\":4,\"betray\":-3,\"betrayal\":-3,\"betrayed\":-3,\"betraying\":-3,\"betrays\":-3,\"better\":2,\"bias\":-1,\"biased\":-2,\"big\":1,\"bitch\":-5,\"bitches\":-5,\"bitter\":-2,\"bitterest\":-2,\"bitterly\":-2,\"bizarre\":-2,\"blackmail\":-3,\"blackmailed\":-3,\"blackmailing\":-3,\"blackmails\":-3,\"blah\":-2,\"blame\":-2,\"blamed\":-2,\"blames\":-2,\"blaming\":-2,\"bless\":2,\"blesses\":2,\"blessing\":3,\"blessings\":3,\"blind\":-1,\"bliss\":3,\"blissful\":3,\"blithe\":2,\"bloated\":-1,\"block\":-1,\"blockade\":-2,\"blockbuster\":3,\"blocked\":-1,\"blocking\":-1,\"blocks\":-1,\"bloody\":-3,\"blurry\":-2,\"boastful\":-2,\"bold\":2,\"boldly\":2,\"bomb\":-1,\"boost\":1,\"boosted\":1,\"boosting\":1,\"boosts\":1,\"bore\":-2,\"bored\":-2,\"boring\":-3,\"bother\":-2,\"bothered\":-2,\"bothers\":-2,\"bothersome\":-2,\"boycott\":-2,\"boycotted\":-2,\"boycotting\":-2,\"boycotts\":-2,\"brainwashing\":-3,\"brave\":2,\"braveness\":2,\"bravery\":2,\"bravura\":3,\"breach\":-2,\"breached\":-2,\"breaches\":-2,\"breaching\":-2,\"breakthrough\":3,\"breathtaking\":5,\"bribe\":-3,\"bribed\":-3,\"bribes\":-3,\"bribing\":-3,\"bright\":1,\"brightest\":2,\"brightness\":1,\"brilliant\":4,\"brilliance\":3,\"brilliances\":3,\"brisk\":2,\"broke\":-1,\"broken\":-1,\"brooding\":-2,\"brutal\":-3,\"brutally\":-3,\"bullied\":-2,\"bullshit\":-4,\"bully\":-2,\"bullying\":-2,\"bummer\":-2,\"buoyant\":2,\"burden\":-2,\"burdened\":-2,\"burdening\":-2,\"burdens\":-2,\"burglar\":-2,\"burglary\":-2,\"calm\":2,\"calmed\":2,\"calming\":2,\"calms\":2,\"can't stand\":-3,\"cancel\":-1,\"cancelled\":-1,\"cancelling\":-1,\"cancels\":-1,\"cancer\":-1,\"capabilities\":1,\"capability\":1,\"capable\":1,\"captivated\":3,\"care\":2,\"carefree\":1,\"careful\":2,\"carefully\":2,\"carefulness\":2,\"careless\":-2,\"cares\":2,\"caring\":2,\"cashing in\":-2,\"casualty\":-2,\"catastrophe\":-3,\"catastrophic\":-4,\"cautious\":-1,\"celebrate\":3,\"celebrated\":3,\"celebrates\":3,\"celebrating\":3,\"celebration\":3,\"celebrations\":3,\"censor\":-2,\"censored\":-2,\"censors\":-2,\"certain\":1,\"chagrin\":-2,\"chagrined\":-2,\"challenge\":-1,\"champion\":2,\"championed\":2,\"champions\":2,\"chance\":2,\"chances\":2,\"chaos\":-2,\"chaotic\":-2,\"charged\":-3,\"charges\":-2,\"charisma\":2,\"charitable\":2,\"charm\":3,\"charming\":3,\"charmingly\":3,\"charmless\":-3,\"chastise\":-3,\"chastised\":-3,\"chastises\":-3,\"chastising\":-3,\"cheat\":-3,\"cheated\":-3,\"cheater\":-3,\"cheaters\":-3,\"cheating\":-3,\"cheats\":-3,\"cheer\":2,\"cheered\":2,\"cheerful\":2,\"cheerfully\":2,\"cheering\":2,\"cheerless\":-2,\"cheers\":2,\"cheery\":3,\"cherish\":2,\"cherished\":2,\"cherishes\":2,\"cherishing\":2,\"chic\":2,\"chide\":-3,\"chided\":-3,\"chides\":-3,\"chiding\":-3,\"childish\":-2,\"chilling\":-1,\"choke\":-2,\"choked\":-2,\"chokes\":-2,\"choking\":-2,\"clarifies\":2,\"clarity\":2,\"clash\":-2,\"classy\":3,\"clean\":2,\"cleaner\":2,\"clear\":1,\"cleared\":1,\"clearly\":1,\"clears\":1,\"clever\":2,\"clouded\":-1,\"clueless\":-2,\"cock\":-5,\"cocksucker\":-5,\"cocksuckers\":-5,\"cocky\":-2,\"coerced\":-2,\"coercion\":-2,\"collapse\":-2,\"collapsed\":-2,\"collapses\":-2,\"collapsing\":-2,\"collide\":-1,\"collides\":-1,\"colliding\":-1,\"collision\":-2,\"collisions\":-2,\"colluding\":-3,\"combat\":-1,\"combats\":-1,\"comedy\":1,\"comfort\":2,\"comfortable\":2,\"comfortably\":2,\"comforting\":2,\"comforts\":2,\"comic\":1,\"commend\":2,\"commended\":2,\"commit\":1,\"commitment\":2,\"commits\":1,\"committed\":1,\"committing\":1,\"compassion\":2,\"compassionate\":2,\"compelled\":1,\"competencies\":1,\"competent\":2,\"competitive\":2,\"complacent\":-2,\"complain\":-2,\"complained\":-2,\"complaining\":-2,\"complains\":-2,\"complaint\":-2,\"complaints\":-2,\"complicating\":-2,\"compliment\":2,\"complimented\":2,\"compliments\":2,\"comprehensive\":2,\"concerned\":-2,\"conciliate\":2,\"conciliated\":2,\"conciliates\":2,\"conciliating\":2,\"condemn\":-2,\"condemnation\":-2,\"condemned\":-2,\"condemns\":-2,\"confidence\":2,\"confident\":2,\"confidently\":2,\"conflict\":-2,\"conflicting\":-2,\"conflictive\":-2,\"conflicts\":-2,\"confuse\":-2,\"confused\":-2,\"confusing\":-2,\"congrats\":2,\"congratulate\":2,\"congratulation\":2,\"congratulations\":2,\"consent\":2,\"consents\":2,\"consolable\":2,\"conspiracy\":-3,\"constipation\":-2,\"constrained\":-2,\"contagion\":-2,\"contagions\":-2,\"contagious\":-1,\"contaminant\":-2,\"contaminants\":-2,\"contaminate\":-2,\"contaminated\":-2,\"contaminates\":-2,\"contaminating\":-2,\"contamination\":-2,\"contaminations\":-2,\"contempt\":-2,\"contemptible\":-2,\"contemptuous\":-2,\"contemptuously\":-2,\"contend\":-1,\"contender\":-1,\"contending\":-1,\"contentious\":-2,\"contestable\":-2,\"controversial\":-2,\"controversially\":-2,\"controversies\":-2,\"controversy\":-2,\"convicted\":-2,\"convince\":1,\"convinced\":1,\"convinces\":1,\"convivial\":2,\"cool\":1,\"cool stuff\":3,\"cornered\":-2,\"corpse\":-1,\"corrupt\":-3,\"corrupted\":-3,\"corrupting\":-3,\"corruption\":-3,\"corrupts\":-3,\"costly\":-2,\"courage\":2,\"courageous\":2,\"courageously\":2,\"courageousness\":2,\"courteous\":2,\"courtesy\":2,\"cover-up\":-3,\"coward\":-2,\"cowardly\":-2,\"coziness\":2,\"cramp\":-1,\"crap\":-3,\"crappy\":-3,\"crash\":-2,\"crazier\":-2,\"craziest\":-2,\"crazy\":-2,\"creative\":2,\"crestfallen\":-2,\"cried\":-2,\"cries\":-2,\"crime\":-3,\"crimes\":-3,\"criminal\":-3,\"criminals\":-3,\"criminate\":-3,\"criminated\":-3,\"criminates\":-3,\"crisis\":-3,\"critic\":-2,\"criticise\":-2,\"criticised\":-2,\"criticises\":-2,\"criticising\":-2,\"criticism\":-2,\"criticize\":-2,\"criticized\":-2,\"criticizes\":-2,\"criticizing\":-2,\"critics\":-2,\"critique\":-2,\"crowding\":-1,\"crude\":-1,\"cruel\":-3,\"cruelty\":-3,\"crush\":-1,\"crushed\":-2,\"crushes\":-1,\"crushing\":-1,\"cry\":-1,\"crying\":-2,\"cunning\":2,\"cunt\":-5,\"curious\":1,\"curse\":-1,\"cut\":-1,\"cutback\":-2,\"cutbacks\":-2,\"cute\":2,\"cuts\":-1,\"cutting\":-1,\"cynic\":-2,\"cynical\":-2,\"cynicism\":-2,\"damage\":-3,\"damaged\":-3,\"damages\":-3,\"damaging\":-3,\"damn\":-2,\"damn cute\":3,\"damn good\":4,\"damned\":-4,\"damnit\":-4,\"danger\":-2,\"dangerous\":-2,\"dangerously\":-2,\"daredevil\":2,\"daring\":2,\"darkest\":-2,\"darkness\":-1,\"dauntless\":2,\"dazzling\":3,\"dead\":-3,\"deadening\":-2,\"deadlock\":-2,\"deadly\":-3,\"deafening\":-1,\"dear\":2,\"dearly\":3,\"death\":-2,\"deaths\":-2,\"debonair\":2,\"debt\":-2,\"deceit\":-3,\"deceitful\":-3,\"deceive\":-3,\"deceived\":-3,\"deceives\":-3,\"deceiving\":-3,\"deception\":-3,\"deceptive\":-3,\"decisive\":1,\"dedicated\":2,\"dedication\":2,\"defeat\":-2,\"defeated\":-2,\"defect\":-3,\"defective\":-3,\"defects\":-3,\"defender\":2,\"defenders\":2,\"defenseless\":-2,\"defer\":-1,\"deferring\":-1,\"defiant\":-1,\"deficient\":-2,\"deficiency\":-2,\"deficiencies\":-2,\"deficit\":-2,\"deformed\":-2,\"deformities\":-2,\"deformity\":-2,\"defraud\":-3,\"defrauds\":-3,\"deft\":2,\"defunct\":-2,\"degrade\":-2,\"degraded\":-2,\"degrades\":-2,\"dehumanize\":-2,\"dehumanized\":-2,\"dehumanizes\":-2,\"dehumanizing\":-2,\"deject\":-2,\"dejected\":-2,\"dejecting\":-2,\"dejects\":-2,\"delay\":-1,\"delayed\":-1,\"delectable\":3,\"delicious\":3,\"delight\":3,\"delighted\":3,\"delightful\":3,\"delightfully\":3,\"delighting\":3,\"delights\":3,\"demand\":-1,\"demanded\":-1,\"demanding\":-1,\"demands\":-1,\"demonstration\":-1,\"demoralize\":-2,\"demoralized\":-2,\"demoralizes\":-2,\"demoralizing\":-2,\"denial\":-2,\"denials\":-2,\"denied\":-2,\"denier\":-2,\"deniers\":-2,\"denies\":-2,\"denounce\":-2,\"denounces\":-2,\"dent\":-2,\"deny\":-2,\"denying\":-2,\"deplore\":-3,\"deplored\":-3,\"deplores\":-3,\"deploring\":-3,\"deport\":-2,\"deported\":-2,\"deporting\":-2,\"deports\":-2,\"deportation\":-2,\"deportations\":-2,\"depressed\":-2,\"depressing\":-2,\"deprivation\":-3,\"derail\":-2,\"derailed\":-2,\"derails\":-2,\"derelict\":-2,\"deride\":-2,\"derided\":-2,\"derides\":-2,\"deriding\":-2,\"derision\":-2,\"desirable\":2,\"desire\":1,\"desired\":2,\"desirous\":2,\"despair\":-3,\"despairing\":-3,\"despairs\":-3,\"desperate\":-3,\"desperately\":-3,\"despondent\":-3,\"destroy\":-3,\"destroyed\":-3,\"destroying\":-3,\"destroys\":-3,\"destruction\":-3,\"destructive\":-3,\"detached\":-1,\"detain\":-2,\"detained\":-2,\"detention\":-2,\"deteriorate\":-2,\"deteriorated\":-2,\"deteriorates\":-2,\"deteriorating\":-2,\"determined\":2,\"deterrent\":-2,\"detract\":-1,\"detracted\":-1,\"detracts\":-1,\"devastate\":-2,\"devastated\":-2,\"devastating\":-2,\"devastation\":-2,\"devastations\":-2,\"devoted\":3,\"devotion\":2,\"devotional\":2,\"diamond\":1,\"dick\":-4,\"dickhead\":-4,\"die\":-3,\"died\":-3,\"difficult\":-1,\"diffident\":-2,\"dignity\":2,\"dilemma\":-1,\"dilligence\":2,\"dipshit\":-3,\"dire\":-3,\"direful\":-3,\"dirt\":-2,\"dirtier\":-2,\"dirtiest\":-2,\"dirty\":-2,\"disabilities\":-2,\"disability\":-2,\"disabling\":-1,\"disadvantage\":-2,\"disadvantaged\":-2,\"disagree\":-2,\"disagreeable\":-2,\"disagreement\":-2,\"disappear\":-1,\"disappeared\":-1,\"disappears\":-1,\"disappoint\":-2,\"disappointed\":-2,\"disappointing\":-2,\"disappointment\":-2,\"disappointments\":-2,\"disappoints\":-2,\"disapproval\":-2,\"disapprovals\":-2,\"disapprove\":-2,\"disapproved\":-2,\"disapproves\":-2,\"disapproving\":-2,\"disaster\":-2,\"disasters\":-2,\"disastrous\":-3,\"disbelieve\":-2,\"discard\":-1,\"discarded\":-1,\"discarding\":-1,\"discards\":-1,\"discernment\":2,\"discomfort\":-2,\"disconsolate\":-2,\"disconsolation\":-2,\"discontented\":-2,\"discord\":-2,\"discounted\":-1,\"discouraged\":-2,\"discredited\":-2,\"discriminate\":-2,\"discriminated\":-2,\"discriminates\":-2,\"discriminating\":-2,\"discriminatory\":-2,\"disdain\":-2,\"disease\":-1,\"diseases\":-1,\"disgrace\":-2,\"disgraced\":-2,\"disguise\":-1,\"disguised\":-1,\"disguises\":-1,\"disguising\":-1,\"disgust\":-3,\"disgusted\":-3,\"disgustful\":-3,\"disgusting\":-3,\"disheartened\":-2,\"dishonest\":-2,\"disillusioned\":-2,\"disinclined\":-2,\"disjointed\":-2,\"dislike\":-2,\"disliked\":-2,\"dislikes\":-2,\"dismal\":-2,\"dismayed\":-2,\"dismissed\":-2,\"disorder\":-2,\"disorders\":-2,\"disorganized\":-2,\"disoriented\":-2,\"disparage\":-2,\"disparaged\":-2,\"disparages\":-2,\"disparaging\":-2,\"displeased\":-2,\"displeasure\":-2,\"disproportionate\":-2,\"dispute\":-2,\"disputed\":-2,\"disputes\":-2,\"disputing\":-2,\"disqualified\":-2,\"disquiet\":-2,\"disregard\":-2,\"disregarded\":-2,\"disregarding\":-2,\"disregards\":-2,\"disrespect\":-2,\"disrespected\":-2,\"disrupt\":-2,\"disrupted\":-2,\"disrupting\":-2,\"disruption\":-2,\"disruptions\":-2,\"disruptive\":-2,\"disrupts\":-2,\"dissatisfied\":-2,\"distasteful\":-2,\"distinguished\":2,\"distort\":-2,\"distorted\":-2,\"distorting\":-2,\"distorts\":-2,\"distract\":-2,\"distracted\":-2,\"distraction\":-2,\"distracts\":-2,\"distress\":-2,\"distressed\":-2,\"distresses\":-2,\"distressing\":-2,\"distrust\":-3,\"distrustful\":-3,\"disturb\":-2,\"disturbed\":-2,\"disturbing\":-2,\"disturbs\":-2,\"dithering\":-2,\"diverting\":-1,\"dizzy\":-1,\"dodging\":-2,\"dodgy\":-2,\"does not work\":-3,\"dolorous\":-2,\"donate\":2,\"donated\":2,\"donates\":2,\"donating\":2,\"donation\":2,\"dont like\":-2,\"doom\":-2,\"doomed\":-2,\"doubt\":-1,\"doubted\":-1,\"doubtful\":-1,\"doubting\":-1,\"doubts\":-1,\"douche\":-3,\"douchebag\":-3,\"dour\":-2,\"downcast\":-2,\"downer\":-2,\"downhearted\":-2,\"downside\":-2,\"drag\":-1,\"dragged\":-1,\"drags\":-1,\"drained\":-2,\"dread\":-2,\"dreaded\":-2,\"dreadful\":-3,\"dreading\":-2,\"dream\":1,\"dreams\":1,\"dreary\":-2,\"droopy\":-2,\"drop\":-1,\"dropped\":-1,\"drown\":-2,\"drowned\":-2,\"drowns\":-2,\"drudgery\":-2,\"drunk\":-2,\"dubious\":-2,\"dud\":-2,\"dull\":-2,\"dumb\":-3,\"dumbass\":-3,\"dump\":-1,\"dumped\":-2,\"dumps\":-1,\"dupe\":-2,\"duped\":-2,\"dupery\":-2,\"durable\":2,\"dying\":-3,\"dysfunction\":-2,\"eager\":2,\"earnest\":2,\"ease\":2,\"easy\":1,\"ecstatic\":4,\"eerie\":-2,\"eery\":-2,\"effective\":2,\"effectively\":2,\"effectiveness\":2,\"effortlessly\":2,\"elated\":3,\"elation\":3,\"elegant\":2,\"elegantly\":2,\"embarrass\":-2,\"embarrassed\":-2,\"embarrasses\":-2,\"embarrassing\":-2,\"embarrassment\":-2,\"embezzlement\":-3,\"embittered\":-2,\"embrace\":1,\"emergency\":-2,\"empathetic\":2,\"empower\":2,\"empowerment\":2,\"emptiness\":-1,\"empty\":-1,\"enchanted\":2,\"encourage\":2,\"encouraged\":2,\"encouragement\":2,\"encourages\":2,\"encouraging\":2,\"endorse\":2,\"endorsed\":2,\"endorsement\":2,\"endorses\":2,\"enemies\":-2,\"enemy\":-2,\"energetic\":2,\"engage\":1,\"engages\":1,\"engrossed\":1,\"engrossing\":3,\"enjoy\":2,\"enjoyable\":2,\"enjoyed\":2,\"enjoying\":2,\"enjoys\":2,\"enlighten\":2,\"enlightened\":2,\"enlightening\":2,\"enlightens\":2,\"ennui\":-2,\"enrage\":-2,\"enraged\":-2,\"enrages\":-2,\"enraging\":-2,\"enrapture\":3,\"enslave\":-2,\"enslaved\":-2,\"enslaves\":-2,\"ensure\":1,\"ensuring\":1,\"enterprising\":1,\"entertaining\":2,\"enthral\":3,\"enthusiastic\":3,\"entitled\":1,\"entrusted\":2,\"envies\":-1,\"envious\":-2,\"environment-friendly\":2,\"envy\":-1,\"envying\":-1,\"erroneous\":-2,\"error\":-2,\"errors\":-2,\"escape\":-1,\"escapes\":-1,\"escaping\":-1,\"esteem\":2,\"esteemed\":2,\"ethical\":2,\"euphoria\":3,\"euphoric\":4,\"evacuate\":-1,\"evacuated\":-1,\"evacuates\":-1,\"evacuating\":-1,\"evacuation\":-1,\"evergreen\":2,\"evergreens\":2,\"evergreening\":-3,\"eviction\":-1,\"evil\":-3,\"exacerbate\":-2,\"exacerbated\":-2,\"exacerbates\":-2,\"exacerbating\":-2,\"exaggerate\":-2,\"exaggerated\":-2,\"exaggerates\":-2,\"exaggerating\":-2,\"exasparate\":-2,\"exasperated\":-2,\"exasperates\":-2,\"exasperating\":-2,\"excellence\":3,\"excellent\":3,\"excite\":3,\"excited\":3,\"excitement\":3,\"exciting\":3,\"exclude\":-1,\"excluded\":-2,\"exclusion\":-1,\"exclusive\":2,\"excruciatingly\":-1,\"excuse\":-1,\"exempt\":-1,\"exhausted\":-2,\"exhilarated\":3,\"exhilarates\":3,\"exhilarating\":3,\"exonerate\":2,\"exonerated\":2,\"exonerates\":2,\"exonerating\":2,\"expand\":1,\"expands\":1,\"expel\":-2,\"expelled\":-2,\"expelling\":-2,\"expels\":-2,\"expertly\":2,\"exploit\":-2,\"exploited\":-2,\"exploiting\":-2,\"exploits\":-2,\"exploration\":1,\"explorations\":1,\"expose\":-1,\"exposed\":-1,\"exposes\":-1,\"exposing\":-1,\"exquisite\":3,\"extend\":1,\"extends\":1,\"extremist\":-2,\"extremists\":-2,\"exuberant\":4,\"exultant\":3,\"exultantly\":3,\"fabulous\":4,\"fabulously\":4,\"fad\":-2,\"fag\":-3,\"faggot\":-3,\"faggots\":-3,\"fail\":-2,\"failed\":-2,\"failing\":-2,\"fails\":-2,\"failure\":-2,\"failures\":-2,\"fainthearted\":-2,\"fair\":2,\"fairness\":2,\"faith\":1,\"faithful\":3,\"fake\":-3,\"faker\":-3,\"fakes\":-3,\"faking\":-3,\"fallen\":-2,\"falling\":-1,\"false\":-1,\"falsely\":-2,\"falsified\":-3,\"falsify\":-3,\"fame\":1,\"famine\":-2,\"famous\":2,\"fan\":3,\"fantastic\":4,\"farce\":-1,\"fascinate\":3,\"fascinated\":3,\"fascinates\":3,\"fascinating\":3,\"fascination\":3,\"fascist\":-2,\"fascists\":-2,\"fatal\":-3,\"fatalities\":-3,\"fatality\":-3,\"fatigue\":-2,\"fatigued\":-2,\"fatigues\":-2,\"fatiguing\":-2,\"favor\":2,\"favorable\":2,\"favorably\":2,\"favored\":2,\"favorite\":2,\"favorited\":2,\"favorites\":2,\"favors\":2,\"favour\":2,\"favourable\":2,\"favourably\":2,\"favoured\":2,\"favourite\":2,\"favourited\":2,\"favourites\":2,\"favours\":2,\"fear\":-2,\"fearful\":-2,\"fearfully\":-2,\"fearing\":-2,\"fearless\":2,\"fearlessness\":2,\"fearsome\":-2,\"fed up\":-3,\"feeble\":-2,\"feeling\":1,\"felonies\":-3,\"felony\":-3,\"fertile\":2,\"fervent\":2,\"fervid\":2,\"festive\":2,\"fever\":-2,\"fiasco\":-3,\"fidgety\":-2,\"fight\":-1,\"fighting\":-2,\"fine\":2,\"fines\":-2,\"finest\":3,\"fire\":-2,\"fired\":-2,\"firing\":-2,\"fit\":1,\"fitness\":1,\"filth\":-2,\"filthy\":-2,\"flagship\":2,\"flaw\":-2,\"flawed\":-3,\"flawless\":2,\"flawlessly\":2,\"flaws\":-2,\"flees\":-1,\"flop\":-2,\"flops\":-2,\"flu\":-2,\"flustered\":-2,\"focused\":2,\"fond\":2,\"fondness\":2,\"fool\":-2,\"foolish\":-2,\"fools\":-2,\"forbid\":-1,\"forbidden\":-2,\"forbidding\":-2,\"forced\":-1,\"foreclosure\":-2,\"foreclosures\":-2,\"forefront\":1,\"forget\":-1,\"forgetful\":-2,\"forgettable\":-1,\"forgive\":1,\"forgiving\":1,\"forgot\":-1,\"forgotten\":-1,\"fortune\":2,\"fortunate\":2,\"fortunately\":2,\"foul\":-3,\"frantic\":-1,\"fraud\":-4,\"frauds\":-4,\"fraudster\":-4,\"fraudsters\":-4,\"fraudulence\":-4,\"fraudulent\":-4,\"freak\":-2,\"free\":1,\"freedom\":2,\"freedoms\":2,\"frenzy\":-3,\"fresh\":1,\"friend\":1,\"friendliness\":2,\"friendly\":2,\"friendship\":2,\"fright\":-2,\"frightened\":-2,\"frightening\":-3,\"frikin\":-2,\"frisky\":2,\"frowning\":-1,\"fruitless\":-2,\"frustrate\":-2,\"frustrated\":-2,\"frustrates\":-2,\"frustrating\":-2,\"frustration\":-2,\"ftw\":3,\"fuck\":-4,\"fucked\":-4,\"fucker\":-4,\"fuckers\":-4,\"fuckface\":-4,\"fuckhead\":-4,\"fuckin\":-4,\"fucking\":-4,\"fucking amazing\":4,\"fucking beautiful\":4,\"fucking cute\":4,\"fucking fantastic\":4,\"fucking good\":4,\"fucking great\":4,\"fucking hot\":2,\"fucking love\":4,\"fucking loves\":4,\"fucking perfect\":4,\"fucktard\":-4,\"fud\":-3,\"fuked\":-4,\"fuking\":-4,\"fulfill\":2,\"fulfilled\":2,\"fulfillment\":2,\"fulfills\":2,\"fuming\":-2,\"fun\":4,\"funeral\":-1,\"funerals\":-1,\"funky\":2,\"funnier\":4,\"funny\":4,\"furious\":-3,\"futile\":-2,\"gag\":-2,\"gagged\":-2,\"gain\":2,\"gained\":2,\"gaining\":2,\"gains\":2,\"gallant\":3,\"gallantly\":3,\"gallantry\":3,\"game-changing\":3,\"garbage\":-1,\"gem\":3,\"generous\":2,\"generously\":2,\"genial\":3,\"ghastly\":-2,\"ghost\":-1,\"giddy\":-2,\"gift\":2,\"glad\":3,\"glamorous\":3,\"glamourous\":3,\"glee\":3,\"gleeful\":3,\"gloom\":-1,\"gloomy\":-2,\"glorious\":2,\"glory\":2,\"glum\":-2,\"god\":1,\"goddamn\":-3,\"godsend\":4,\"gold\":2,\"good\":3,\"goodlooking\":3,\"goodmorning\":1,\"goodness\":3,\"goodwill\":3,\"goofiness\":-2,\"goofy\":-2,\"grace\":1,\"graceful\":2,\"gracious\":3,\"grand\":3,\"grant\":1,\"granted\":1,\"granting\":1,\"grants\":1,\"grateful\":3,\"gratification\":2,\"grave\":-2,\"gray\":-1,\"grisly\":-2,\"gr8\":3,\"great\":3,\"greater\":3,\"greatest\":3,\"greed\":-3,\"greedy\":-2,\"green wash\":-3,\"green washing\":-3,\"greenwash\":-3,\"greenwasher\":-3,\"greenwashers\":-3,\"greenwashing\":-3,\"greet\":1,\"greeted\":1,\"greeting\":1,\"greetings\":2,\"greets\":1,\"grey\":-1,\"grief\":-2,\"grieved\":-2,\"grim\":-2,\"gripping\":2,\"groan\":-2,\"groaned\":-2,\"groaning\":-2,\"groans\":-2,\"gross\":-2,\"growing\":1,\"growth\":2,\"growths\":2,\"gruesome\":-3,\"guarantee\":1,\"guilt\":-3,\"guilty\":-3,\"gullibility\":-2,\"gullible\":-2,\"gun\":-1,\"ha\":2,\"hacked\":-1,\"haha\":3,\"hahaha\":3,\"hahahah\":3,\"hail\":2,\"hailed\":2,\"hallelujah\":3,\"handpicked\":1,\"handsome\":3,\"hapless\":-2,\"haplessness\":-2,\"happiest\":3,\"happiness\":3,\"happy\":3,\"harass\":-3,\"harassed\":-3,\"harasses\":-3,\"harassing\":-3,\"harassment\":-3,\"hard\":-1,\"hardier\":2,\"hardship\":-2,\"hardy\":2,\"harm\":-2,\"harmed\":-2,\"harmful\":-2,\"harming\":-2,\"harmony\":2,\"harmonious\":2,\"harmoniously\":2,\"harms\":-2,\"harried\":-2,\"harsh\":-2,\"harsher\":-2,\"harshest\":-2,\"harshly\":-2,\"hate\":-3,\"hated\":-3,\"hater\":-3,\"haters\":-3,\"hates\":-3,\"hating\":-3,\"hatred\":-3,\"haunt\":-1,\"haunted\":-2,\"haunting\":1,\"haunts\":-1,\"havoc\":-2,\"hazardous\":-3,\"headache\":-2,\"healthy\":2,\"heartbreaking\":-3,\"heartbroken\":-3,\"heartfelt\":3,\"heartless\":-2,\"heartwarming\":3,\"heaven\":2,\"heavenly\":4,\"heavyhearted\":-2,\"hehe\":2,\"hell\":-4,\"hellish\":-2,\"help\":2,\"helpful\":2,\"helping\":2,\"helpless\":-2,\"helps\":2,\"hero\":2,\"heroes\":2,\"heroic\":3,\"hesitant\":-2,\"hesitate\":-2,\"hid\":-1,\"hide\":-1,\"hideous\":-3,\"hides\":-1,\"hiding\":-1,\"highlight\":2,\"hilarious\":2,\"hinder\":-2,\"hindrance\":-2,\"hoax\":-2,\"hollow\":-1,\"homeless\":-2,\"homesick\":-2,\"homicide\":-2,\"homicides\":-2,\"honest\":2,\"honor\":2,\"honored\":2,\"honoring\":2,\"honour\":2,\"honoured\":2,\"honouring\":2,\"hooligan\":-2,\"hooliganism\":-2,\"hooligans\":-2,\"hope\":2,\"hopeful\":2,\"hopefully\":2,\"hopeless\":-2,\"hopelessness\":-2,\"hopes\":2,\"hoping\":2,\"horrendous\":-3,\"horrid\":-3,\"horrible\":-3,\"horrific\":-3,\"horrified\":-3,\"hospitalized\":-2,\"hostile\":-2,\"huckster\":-2,\"hug\":2,\"huge\":1,\"hugs\":2,\"humane\":2,\"humble\":1,\"humbug\":-2,\"humerous\":3,\"humiliated\":-3,\"humiliation\":-3,\"humor\":2,\"humorous\":2,\"humour\":2,\"humourous\":2,\"hunger\":-2,\"hurrah\":5,\"hurt\":-2,\"hurting\":-2,\"hurts\":-2,\"hypocritical\":-2,\"hysteria\":-3,\"hysterical\":-3,\"hysterics\":-3,\"icky\":-3,\"idiocy\":-3,\"idiot\":-3,\"idiotic\":-3,\"ignorance\":-2,\"ignorant\":-2,\"ignore\":-1,\"ignored\":-2,\"ignores\":-1,\"ill\":-2,\"ill-fated\":-2,\"illegal\":-3,\"illegally\":-3,\"illegitimate\":-3,\"illiteracy\":-2,\"illness\":-2,\"illnesses\":-2,\"illogical\":-2,\"imaginative\":2,\"imbecile\":-3,\"immobilized\":-1,\"immortal\":2,\"immune\":1,\"impair\":-2,\"impaired\":-2,\"impairing\":-2,\"impairment\":-2,\"impairs\":-2,\"impatient\":-2,\"impeachment\":-3,\"impeachments\":-3,\"impede\":-2,\"impeded\":-2,\"impedes\":-2,\"impeding\":-2,\"impedingly\":-2,\"imperfect\":-2,\"importance\":2,\"important\":2,\"impose\":-1,\"imposed\":-1,\"imposes\":-1,\"imposing\":-1,\"imposter\":-2,\"impotent\":-2,\"impress\":3,\"impressed\":3,\"impresses\":3,\"impressive\":3,\"imprisoned\":-2,\"imprisonment\":-2,\"improper\":-2,\"improperly\":-2,\"improve\":2,\"improved\":2,\"improvement\":2,\"improves\":2,\"improving\":2,\"inability\":-2,\"inaction\":-2,\"inadequate\":-2,\"inadvertently\":-2,\"inappropriate\":-2,\"incapable\":-2,\"incapacitated\":-2,\"incapacitates\":-2,\"incapacitating\":-2,\"incense\":-2,\"incensed\":-2,\"incenses\":-2,\"incensing\":-2,\"incoherent\":-2,\"incompetence\":-2,\"incompetent\":-2,\"incomplete\":-1,\"incomprehensible\":-2,\"inconsiderate\":-2,\"inconvenience\":-2,\"inconvenient\":-2,\"increase\":1,\"increased\":1,\"indecisive\":-2,\"indestructible\":2,\"indicted\":-2,\"indifference\":-2,\"indifferent\":-2,\"indignant\":-2,\"indignation\":-2,\"indoctrinate\":-2,\"indoctrinated\":-2,\"indoctrinates\":-2,\"indoctrinating\":-2,\"inediable\":-2,\"inexorable\":-3,\"inexcusable\":-3,\"ineffective\":-2,\"ineffectively\":-2,\"ineffectual\":-2,\"inefficiency\":-2,\"inefficient\":-2,\"inefficiently\":-2,\"inept\":-2,\"ineptitude\":-2,\"infantile\":-2,\"infantilized\":-2,\"infatuated\":2,\"infatuation\":2,\"infect\":-2,\"infected\":-2,\"infecting\":-2,\"infection\":-2,\"infections\":-2,\"infectious\":-2,\"infects\":-2,\"inferior\":-2,\"infest\":-2,\"infested\":-2,\"infesting\":-2,\"infests\":-2,\"inflamed\":-2,\"inflict\":-2,\"inflicted\":-2,\"inflicting\":-2,\"inflicts\":-2,\"influential\":2,\"infract\":-2,\"infracted\":-2,\"infracting\":-2,\"infracts\":-2,\"infringement\":-2,\"infuriate\":-2,\"infuriated\":-2,\"infuriates\":-2,\"infuriating\":-2,\"inhibit\":-1,\"inhuman\":-2,\"injured\":-2,\"injuries\":-2,\"injury\":-2,\"injustice\":-2,\"innovate\":1,\"innovates\":1,\"innovation\":1,\"innovative\":2,\"inoperative\":-2,\"inquisition\":-2,\"inquisitive\":2,\"insane\":-2,\"insanity\":-2,\"insecure\":-2,\"insensitive\":-2,\"insensitivity\":-2,\"insignificant\":-2,\"insipid\":-2,\"insolvent\":-2,\"insomnia\":-2,\"inspiration\":2,\"inspirational\":2,\"inspire\":2,\"inspired\":2,\"inspires\":2,\"inspiring\":3,\"insufficiency\":-2,\"insufficient\":-2,\"insufficiently\":-2,\"insult\":-2,\"insulted\":-2,\"insulting\":-2,\"insults\":-2,\"intact\":2,\"integrity\":2,\"intelligent\":2,\"intense\":1,\"interest\":1,\"interested\":2,\"interesting\":2,\"interests\":1,\"interrogated\":-2,\"interrupt\":-2,\"interrupted\":-2,\"interrupting\":-2,\"interruption\":-2,\"interrupts\":-2,\"intimacy\":2,\"intimidate\":-2,\"intimidated\":-2,\"intimidates\":-2,\"intimidating\":-2,\"intimidation\":-2,\"intransigence\":-2,\"intransigency\":-2,\"intricate\":2,\"intrigues\":1,\"invasion\":-1,\"invincible\":2,\"invite\":1,\"inviting\":1,\"invulnerable\":2,\"irate\":-3,\"ironic\":-1,\"irony\":-1,\"irrational\":-1,\"irreparable\":-2,\"irreproducible\":-2,\"irresistible\":2,\"irresistibly\":2,\"irresolute\":-2,\"irresponsible\":-2,\"irresponsibly\":-2,\"irreversible\":-1,\"irreversibly\":-1,\"irritate\":-3,\"irritated\":-3,\"irritates\":-3,\"irritating\":-3,\"isolated\":-1,\"itchy\":-2,\"jackass\":-4,\"jackasses\":-4,\"jailed\":-2,\"jaunty\":2,\"jealous\":-2,\"jealousy\":-2,\"jeopardy\":-2,\"jerk\":-3,\"jesus\":1,\"jewel\":1,\"jewels\":1,\"jocular\":2,\"join\":1,\"joke\":2,\"jokes\":2,\"jolly\":2,\"jovial\":2,\"joy\":3,\"joyful\":3,\"joyfully\":3,\"joyless\":-2,\"joyous\":3,\"jubilant\":3,\"jumpy\":-1,\"justice\":2,\"justifiably\":2,\"justified\":2,\"keen\":1,\"kickback\":-3,\"kickbacks\":-3,\"kidnap\":-2,\"kidnapped\":-2,\"kidnapping\":-2,\"kidnappings\":-2,\"kidnaps\":-2,\"kill\":-3,\"killed\":-3,\"killing\":-3,\"kills\":-3,\"kind\":2,\"kind of\":0,\"kinder\":2,\"kindness\":2,\"kiss\":2,\"kudos\":3,\"lack\":-2,\"lackadaisical\":-2,\"lag\":-1,\"lagged\":-2,\"lagging\":-2,\"lags\":-2,\"lame\":-2,\"landmark\":2,\"lapse\":-1,\"lapsed\":-1,\"laugh\":1,\"laughed\":1,\"laughing\":1,\"laughs\":1,\"laughting\":1,\"launched\":1,\"lawl\":3,\"lawsuit\":-2,\"lawsuits\":-2,\"lazy\":-1,\"leadership\":1,\"leading\":2,\"leak\":-1,\"leaked\":-1,\"leave\":-1,\"legal\":1,\"legally\":1,\"lenient\":1,\"lethal\":-2,\"lethality\":-2,\"lethargic\":-2,\"lethargy\":-2,\"liar\":-3,\"liars\":-3,\"libelous\":-2,\"lied\":-2,\"lifeless\":-1,\"lifesaver\":4,\"lighthearted\":1,\"likable\":2,\"like\":2,\"likeable\":2,\"liked\":2,\"likers\":2,\"likes\":2,\"liking\":2,\"limitation\":-1,\"limited\":-1,\"limits\":-1,\"litigation\":-1,\"litigious\":-2,\"lively\":2,\"livid\":-2,\"lmao\":4,\"lmfao\":4,\"loathe\":-3,\"loathed\":-3,\"loathes\":-3,\"loathing\":-3,\"loathsome\":-3,\"lobbied\":-2,\"lobby\":-2,\"lobbying\":-2,\"lobbyist\":-2,\"lobbyists\":-2,\"lol\":3,\"lolol\":4,\"lololol\":4,\"lolololol\":4,\"lonely\":-2,\"lonesome\":-2,\"longing\":-1,\"lool\":3,\"loom\":-1,\"loomed\":-1,\"looming\":-1,\"looms\":-1,\"loool\":3,\"looool\":3,\"loose\":-3,\"looses\":-3,\"loser\":-3,\"losing\":-3,\"loss\":-3,\"losses\":-3,\"lost\":-3,\"lousy\":-2,\"lovable\":3,\"love\":3,\"loved\":3,\"lovelies\":3,\"lovely\":3,\"loves\":3,\"loving\":2,\"loving-kindness\":3,\"lowest\":-1,\"loyal\":3,\"loyalty\":3,\"luck\":3,\"luckily\":3,\"lucky\":3,\"lucrative\":3,\"ludicrous\":-3,\"lugubrious\":-2,\"lunatic\":-3,\"lunatics\":-3,\"lurk\":-1,\"lurking\":-1,\"lurks\":-1,\"luxury\":2,\"macabre\":-2,\"mad\":-3,\"maddening\":-3,\"made-up\":-1,\"madly\":-3,\"madness\":-3,\"magnificent\":3,\"maladaption\":-2,\"maldevelopment\":-2,\"maltreatment\":-2,\"mandatory\":-1,\"manipulated\":-1,\"manipulating\":-1,\"manipulation\":-1,\"manslaughter\":-3,\"marvel\":3,\"marvelous\":3,\"marvels\":3,\"masterpiece\":4,\"masterpieces\":4,\"matter\":1,\"matters\":1,\"mature\":2,\"meaningful\":2,\"meaningless\":-2,\"medal\":3,\"mediocrity\":-3,\"meditative\":1,\"melancholy\":-2,\"memorable\":1,\"memoriam\":-2,\"menace\":-2,\"menaced\":-2,\"menaces\":-2,\"mercy\":2,\"merry\":3,\"mesmerizing\":3,\"mess\":-2,\"messed\":-2,\"messing up\":-2,\"methodical\":2,\"methodically\":2,\"mindless\":-2,\"miracle\":4,\"mirth\":3,\"mirthful\":3,\"mirthfully\":3,\"misbehave\":-2,\"misbehaved\":-2,\"misbehaves\":-2,\"misbehaving\":-2,\"misbranding\":-3,\"miscast\":-2,\"mischief\":-1,\"mischiefs\":-1,\"misclassified\":-2,\"misclassifies\":-2,\"misclassify\":-2,\"misconduct\":-2,\"misconducted\":-2,\"misconducting\":-2,\"misconducts\":-2,\"miserable\":-3,\"miserably\":-3,\"misery\":-2,\"misfire\":-2,\"misfortune\":-2,\"misgiving\":-2,\"misinformation\":-2,\"misinformed\":-2,\"misinterpreted\":-2,\"mislead\":-3,\"misleaded\":-3,\"misleading\":-3,\"misleads\":-3,\"misplace\":-2,\"misplaced\":-2,\"misplaces\":-2,\"misplacing\":-2,\"mispricing\":-3,\"misread\":-1,\"misreport\":-2,\"misreported\":-2,\"misreporting\":-2,\"misreports\":-2,\"misrepresent\":-2,\"misrepresentation\":-2,\"misrepresentations\":-2,\"misrepresented\":-2,\"misrepresenting\":-2,\"misrepresents\":-2,\"miss\":-2,\"missed\":-2,\"missing\":-2,\"mistake\":-2,\"mistaken\":-2,\"mistakes\":-2,\"mistaking\":-2,\"misunderstand\":-2,\"misunderstanding\":-2,\"misunderstands\":-2,\"misunderstood\":-2,\"misuse\":-2,\"misused\":-2,\"misuses\":-2,\"misusing\":-2,\"moan\":-2,\"moaned\":-2,\"moaning\":-2,\"moans\":-2,\"mock\":-2,\"mocked\":-2,\"mocking\":-2,\"mocks\":-2,\"modernize\":2,\"modernized\":2,\"modernizes\":2,\"modernizing\":2,\"mongering\":-2,\"monopolize\":-2,\"monopolized\":-2,\"monopolizes\":-2,\"monopolizing\":-2,\"monotone\":-1,\"moody\":-1,\"mope\":-1,\"moping\":-1,\"moron\":-3,\"motherfucker\":-5,\"motherfucking\":-5,\"motivate\":1,\"motivated\":2,\"motivating\":2,\"motivation\":1,\"mourn\":-2,\"mourned\":-2,\"mournful\":-2,\"mourning\":-2,\"mourns\":-2,\"muddy\":-2,\"mumpish\":-2,\"murder\":-2,\"murderer\":-2,\"murdering\":-3,\"murderous\":-3,\"murders\":-2,\"murky\":-2,\"myth\":-1,\"n00b\":-2,\"naive\":-2,\"narcissism\":-2,\"nasty\":-3,\"natural\":1,\"naïve\":-2,\"needy\":-2,\"negative\":-2,\"negativity\":-2,\"neglect\":-2,\"neglected\":-2,\"neglecting\":-2,\"neglects\":-2,\"nerves\":-1,\"nervous\":-2,\"nervously\":-2,\"nice\":3,\"nifty\":2,\"niggas\":-5,\"nigger\":-5,\"no\":-1,\"no fun\":-3,\"noble\":2,\"noblest\":2,\"noisy\":-1,\"non-approved\":-2,\"nonsense\":-2,\"noob\":-2,\"nosey\":-2,\"not good\":-2,\"not working\":-3,\"notable\":2,\"noticeable\":2,\"notorious\":-2,\"novel\":2,\"numb\":-1,\"nurturing\":2,\"nuts\":-3,\"obliterate\":-2,\"obliterated\":-2,\"obnoxious\":-3,\"obscene\":-2,\"obscenity\":-2,\"obsessed\":2,\"obsolete\":-2,\"obstacle\":-2,\"obstacles\":-2,\"obstinate\":-2,\"obstruct\":-2,\"obstructed\":-2,\"obstructing\":-2,\"obstruction\":-2,\"obstructs\":-2,\"odd\":-2,\"offence\":-2,\"offences\":-2,\"offend\":-2,\"offended\":-2,\"offender\":-2,\"offending\":-2,\"offends\":-2,\"offense\":-2,\"offenses\":-2,\"offensive\":-2,\"offensively\":-2,\"offline\":-1,\"oks\":2,\"ominous\":3,\"once-in-a-lifetime\":3,\"oops\":-2,\"opportunities\":2,\"opportunity\":2,\"oppressed\":-2,\"oppression\":-2,\"oppressions\":-2,\"oppressive\":-2,\"optimism\":2,\"optimistic\":2,\"optionless\":-2,\"ostracize\":-2,\"ostracized\":-2,\"ostracizes\":-2,\"ouch\":-2,\"outage\":-2,\"outages\":-2,\"outbreak\":-2,\"outbreaks\":-2,\"outcry\":-2,\"outmaneuvered\":-2,\"outnumbered\":-2,\"outrage\":-3,\"outraged\":-3,\"outrageous\":-3,\"outreach\":2,\"outstanding\":5,\"overjoyed\":4,\"overload\":-1,\"overlooked\":-1,\"overprotective\":-2,\"overran\":-2,\"overreact\":-2,\"overreacted\":-2,\"overreacting\":-2,\"overreaction\":-2,\"overreacts\":-2,\"oversell\":-2,\"overselling\":-2,\"oversells\":-2,\"oversight\":-1,\"oversimplification\":-2,\"oversimplified\":-2,\"oversimplifies\":-2,\"oversimplify\":-2,\"oversold\":-2,\"overstatement\":-2,\"overstatements\":-2,\"overweight\":-1,\"overwrought\":-3,\"oxymoron\":-1,\"pain\":-2,\"pained\":-2,\"painful\":-2,\"panic\":-3,\"panicked\":-3,\"panics\":-3,\"paradise\":3,\"paradox\":-1,\"pardon\":2,\"pardoned\":2,\"pardoning\":2,\"pardons\":2,\"parley\":-1,\"passion\":1,\"passionate\":2,\"passive\":-1,\"passively\":-1,\"pathetic\":-2,\"pay\":-1,\"peace\":2,\"peaceful\":2,\"peacefully\":2,\"penalize\":-2,\"penalized\":-2,\"penalizes\":-2,\"penalizing\":-2,\"penalty\":-2,\"pensive\":-1,\"perfect\":3,\"perfected\":2,\"perfection\":3,\"perfectly\":3,\"perfects\":2,\"peril\":-2,\"perjury\":-3,\"perpetrated\":-2,\"perpetrator\":-2,\"perpetrators\":-2,\"perplexed\":-2,\"persecute\":-2,\"persecuted\":-2,\"persecutes\":-2,\"persecuting\":-2,\"perturbed\":-2,\"pervert\":-3,\"pesky\":-2,\"pessimism\":-2,\"pessimistic\":-2,\"petrified\":-2,\"philanthropy\":2,\"phobic\":-2,\"picturesque\":2,\"pileup\":-1,\"pillage\":-2,\"pique\":-2,\"piqued\":-2,\"piss\":-4,\"pissed\":-4,\"pissing\":-3,\"piteous\":-2,\"pitied\":-1,\"pity\":-2,\"plague\":-3,\"plagued\":-3,\"plagues\":-3,\"plaguing\":-3,\"playful\":2,\"pleasant\":3,\"please\":1,\"pleased\":3,\"pleasurable\":3,\"pleasure\":3,\"plodding\":-2,\"poignant\":2,\"pointless\":-2,\"poised\":-2,\"poison\":-2,\"poisoned\":-2,\"poisons\":-2,\"polished\":2,\"polite\":2,\"politeness\":2,\"pollutant\":-2,\"pollute\":-2,\"polluted\":-2,\"polluter\":-2,\"polluters\":-2,\"pollutes\":-2,\"pollution\":-2,\"poor\":-2,\"poorer\":-2,\"poorest\":-2,\"poorly\":-2,\"popular\":3,\"popularity\":3,\"positive\":2,\"positively\":2,\"possessive\":-2,\"post-traumatic\":-2,\"postpone\":-1,\"postponed\":-1,\"postpones\":-1,\"postponing\":-1,\"poverty\":-1,\"powerful\":2,\"powerless\":-2,\"praise\":3,\"praised\":3,\"praises\":3,\"praising\":3,\"pray\":1,\"praying\":1,\"prays\":1,\"prblm\":-2,\"prblms\":-2,\"predatory\":-2,\"prepared\":1,\"pressure\":-1,\"pressured\":-2,\"pretend\":-1,\"pretending\":-1,\"pretends\":-1,\"pretty\":1,\"prevent\":-1,\"prevented\":-1,\"preventing\":-1,\"prevents\":-1,\"prick\":-5,\"prison\":-2,\"prisoner\":-2,\"prisoners\":-2,\"privileged\":2,\"proactive\":2,\"problem\":-2,\"problems\":-2,\"profit\":2,\"profitable\":2,\"profiteer\":-2,\"profits\":2,\"progress\":2,\"prohibit\":-1,\"prohibits\":-1,\"prominent\":2,\"promise\":1,\"promised\":1,\"promises\":1,\"promote\":1,\"promoted\":1,\"promotes\":1,\"promoting\":1,\"promptly\":1,\"propaganda\":-2,\"prosecute\":-1,\"prosecuted\":-2,\"prosecutes\":-1,\"prosecution\":-1,\"prospect\":1,\"prospects\":1,\"prosperity\":3,\"prosperous\":3,\"protect\":1,\"protected\":1,\"protects\":1,\"protest\":-2,\"protesters\":-2,\"protesting\":-2,\"protests\":-2,\"proud\":2,\"proudly\":2,\"provoke\":-1,\"provoked\":-1,\"provokes\":-1,\"provoking\":-1,\"prudence\":2,\"pseudoscience\":-3,\"psychopathic\":-2,\"punish\":-2,\"punished\":-2,\"punishes\":-2,\"punishing\":-2,\"punitive\":-2,\"pure\":1,\"purest\":1,\"purposeful\":2,\"pushy\":-1,\"puzzled\":-2,\"quaking\":-2,\"qualities\":2,\"quality\":2,\"questionable\":-2,\"questioned\":-1,\"questioning\":-1,\"racism\":-3,\"racist\":-3,\"racists\":-3,\"rage\":-2,\"rageful\":-2,\"rainy\":-1,\"rant\":-3,\"ranter\":-3,\"ranters\":-3,\"rants\":-3,\"rape\":-4,\"raped\":-4,\"rapist\":-4,\"rapture\":2,\"raptured\":2,\"raptures\":2,\"rapturous\":4,\"rash\":-2,\"ratified\":2,\"reach\":1,\"reached\":1,\"reaches\":1,\"reaching\":1,\"reassure\":1,\"reassured\":1,\"reassures\":1,\"reassuring\":2,\"rebel\":-2,\"rebellion\":-2,\"rebels\":-2,\"recession\":-2,\"reckless\":-2,\"recognition\":2,\"recommend\":2,\"recommended\":2,\"recommends\":2,\"redeemed\":2,\"refine\":1,\"refined\":1,\"refines\":1,\"refreshingly\":2,\"refuse\":-2,\"refused\":-2,\"refuses\":-2,\"refusing\":-2,\"regret\":-2,\"regretful\":-2,\"regrets\":-2,\"regretted\":-2,\"regretting\":-2,\"reigning\":1,\"reject\":-1,\"rejected\":-1,\"rejecting\":-1,\"rejection\":-2,\"rejects\":-1,\"rejoice\":4,\"rejoiced\":4,\"rejoices\":4,\"rejoicing\":4,\"relaxed\":2,\"relentless\":-1,\"reliability\":2,\"reliable\":2,\"reliably\":2,\"reliant\":2,\"relieve\":1,\"relieved\":2,\"relieves\":1,\"relieving\":2,\"relishing\":2,\"remarkable\":2,\"remorse\":-2,\"repellent\":-2,\"repercussion\":-2,\"repercussions\":-2,\"reprimand\":-2,\"reprimanded\":-2,\"reprimanding\":-2,\"reprimands\":-2,\"repulse\":-1,\"repulsed\":-2,\"repulsive\":-2,\"rescue\":2,\"rescued\":2,\"rescues\":2,\"resentful\":-2,\"resign\":-1,\"resigned\":-1,\"resigning\":-1,\"resigns\":-1,\"resolute\":2,\"resolution\":2,\"resolve\":2,\"resolved\":2,\"resolves\":2,\"resolving\":2,\"respect\":2,\"respected\":2,\"respects\":2,\"responsibility\":1,\"responsible\":2,\"responsive\":2,\"restful\":2,\"restless\":-2,\"restore\":1,\"restored\":1,\"restores\":1,\"restoring\":1,\"restrict\":-2,\"restricted\":-2,\"restricting\":-2,\"restriction\":-2,\"restrictive\":-1,\"restricts\":-2,\"retained\":-1,\"retard\":-2,\"retarded\":-2,\"retreat\":-1,\"revenge\":-2,\"revengeful\":-2,\"revered\":2,\"revive\":2,\"revives\":2,\"revolting\":-2,\"reward\":2,\"rewarded\":2,\"rewarding\":2,\"rewards\":2,\"rich\":2,\"richly\":2,\"ridiculous\":-3,\"rig\":-1,\"rigged\":-1,\"right direction\":3,\"righteousness\":2,\"rightful\":2,\"rightfully\":2,\"rigorous\":3,\"rigorously\":3,\"riot\":-2,\"riots\":-2,\"rise\":1,\"rises\":1,\"risk\":-2,\"risks\":-2,\"risky\":-2,\"riveting\":3,\"rob\":-2,\"robber\":-2,\"robed\":-2,\"robing\":-2,\"robs\":-2,\"robust\":2,\"rofl\":4,\"roflcopter\":4,\"roflmao\":4,\"romance\":2,\"romantical\":2,\"romantically\":2,\"rose\":1,\"rotfl\":4,\"rotflmfao\":4,\"rotflol\":4,\"rotten\":-3,\"rude\":-2,\"ruin\":-2,\"ruined\":-2,\"ruining\":-2,\"ruins\":-2,\"sabotage\":-2,\"sad\":-2,\"sadden\":-2,\"saddened\":-2,\"sadly\":-2,\"safe\":1,\"safely\":1,\"safer\":2,\"safety\":1,\"salient\":1,\"salute\":2,\"saluted\":2,\"salutes\":2,\"saluting\":2,\"salvation\":2,\"sappy\":-1,\"sarcastic\":-2,\"satisfied\":2,\"savange\":-2,\"savanges\":-2,\"save\":2,\"saved\":2,\"savings\":1,\"scam\":-2,\"scams\":-2,\"scandal\":-3,\"scandalous\":-3,\"scandals\":-3,\"scapegoat\":-2,\"scapegoats\":-2,\"scare\":-2,\"scared\":-2,\"scar\":-2,\"scars\":-2,\"scary\":-2,\"sceptical\":-2,\"scold\":-2,\"scoop\":3,\"scorn\":-2,\"scornful\":-2,\"scream\":-2,\"screamed\":-2,\"screaming\":-2,\"screams\":-2,\"screwed\":-2,\"screwed up\":-3,\"scum\":-3,\"scumbag\":-4,\"seamless\":2,\"seamlessly\":2,\"secure\":2,\"secured\":2,\"secures\":2,\"sedition\":-2,\"seditious\":-2,\"seduced\":-1,\"self-abuse\":-2,\"self-confident\":2,\"self-contradictory\":-2,\"self-deluded\":-2,\"selfish\":-3,\"selfishness\":-3,\"sentence\":-2,\"sentenced\":-2,\"sentences\":-2,\"sentencing\":-2,\"serene\":2,\"settlement\":1,\"settlements\":1,\"severe\":-2,\"severely\":-2,\"sexist\":-2,\"sexistic\":-2,\"sexy\":3,\"shaky\":-2,\"shame\":-2,\"shamed\":-2,\"shameful\":-2,\"share\":1,\"shared\":1,\"shares\":1,\"shattered\":-2,\"shit\":-4,\"shithead\":-4,\"shitty\":-3,\"shock\":-2,\"shocked\":-2,\"shocking\":-2,\"shocks\":-2,\"shoody\":-2,\"shoot\":-1,\"short-sighted\":-2,\"short-sightedness\":-2,\"shortage\":-2,\"shortages\":-2,\"shrew\":-4,\"shy\":-1,\"sick\":-2,\"sickness\":-2,\"side-effect\":-2,\"side-effects\":-2,\"sigh\":-2,\"significance\":1,\"significant\":1,\"silencing\":-1,\"silly\":-1,\"simplicity\":1,\"sin\":-2,\"sincere\":2,\"sincerely\":2,\"sincerest\":2,\"sincerity\":2,\"sinful\":-3,\"singleminded\":-2,\"sinister\":-2,\"sins\":-2,\"skeptic\":-2,\"skeptical\":-2,\"skepticism\":-2,\"skeptics\":-2,\"slam\":-2,\"slash\":-2,\"slashed\":-2,\"slashes\":-2,\"slashing\":-2,\"slave\":-3,\"slavery\":-3,\"slaves\":-3,\"sleeplessness\":-2,\"slick\":2,\"slicker\":2,\"slickest\":2,\"slip\":-1,\"sloppy\":-2,\"sluggish\":-2,\"slumping\":-1,\"slut\":-5,\"smart\":1,\"smarter\":2,\"smartest\":2,\"smear\":-2,\"smile\":2,\"smiled\":2,\"smiles\":2,\"smiling\":2,\"smog\":-2,\"smuggle\":-2,\"smuggled\":-2,\"smuggling\":-2,\"smuggles\":-2,\"sneaky\":-1,\"sneeze\":-2,\"sneezed\":-2,\"sneezes\":-2,\"sneezing\":-2,\"snub\":-2,\"snubbed\":-2,\"snubbing\":-2,\"snubs\":-2,\"sobering\":1,\"solemn\":-1,\"solid\":2,\"solidarity\":2,\"solidified\":2,\"solidifies\":2,\"solidify\":2,\"solidifying\":2,\"solution\":1,\"solutions\":1,\"solve\":1,\"solved\":1,\"solves\":1,\"solving\":1,\"somber\":-2,\"some kind\":0,\"son-of-a-bitch\":-5,\"soothe\":3,\"soothed\":3,\"soothing\":3,\"sophisticated\":2,\"sore\":-1,\"sorrow\":-2,\"sorrowful\":-2,\"sorry\":-1,\"spacious\":1,\"spam\":-2,\"spammer\":-3,\"spammers\":-3,\"spamming\":-2,\"spark\":1,\"sparkle\":3,\"sparkles\":3,\"sparkling\":3,\"spearhead\":2,\"speculative\":-2,\"spirit\":1,\"spirited\":2,\"spiritless\":-2,\"spiteful\":-2,\"splendid\":3,\"spoiled\":-2,\"spoilt\":-2,\"spotless\":2,\"sprightly\":2,\"squander\":-2,\"squandered\":-2,\"squandering\":-2,\"squanders\":-2,\"squelched\":-1,\"stab\":-2,\"stabbed\":-2,\"stable\":2,\"stabs\":-2,\"stall\":-2,\"stalled\":-2,\"stalling\":-2,\"stamina\":2,\"stampede\":-2,\"stank\":-2,\"startled\":-2,\"startling\":3,\"starve\":-2,\"starved\":-2,\"starves\":-2,\"starving\":-2,\"steadfast\":2,\"steal\":-2,\"stealing\":-2,\"steals\":-2,\"stereotype\":-2,\"stereotyped\":-2,\"stifled\":-1,\"stimulate\":1,\"stimulated\":1,\"stimulates\":1,\"stimulating\":2,\"stingy\":-2,\"stink\":-2,\"stinked\":-2,\"stinker\":-2,\"stinking\":-2,\"stinks\":-2,\"stinky\":-2,\"stole\":-2,\"stolen\":-2,\"stop\":-1,\"stopped\":-1,\"stopping\":-1,\"stops\":-1,\"stout\":2,\"straight\":1,\"strange\":-1,\"strangely\":-1,\"strangled\":-2,\"strength\":2,\"strengthen\":2,\"strengthened\":2,\"strengthening\":2,\"strengthens\":2,\"strengths\":2,\"stress\":-1,\"stressed\":-2,\"stressor\":-2,\"stressors\":-2,\"stricken\":-2,\"strike\":-1,\"strikers\":-2,\"strikes\":-1,\"strong\":2,\"stronger\":2,\"strongest\":2,\"struck\":-1,\"struggle\":-2,\"struggled\":-2,\"struggles\":-2,\"struggling\":-2,\"stubborn\":-2,\"stuck\":-2,\"stunned\":-2,\"stunning\":4,\"stupid\":-2,\"stupidity\":-3,\"stupidly\":-2,\"suave\":2,\"subpoena\":-2,\"substantial\":1,\"substantially\":1,\"subversive\":-2,\"succeed\":3,\"succeeded\":3,\"succeeding\":3,\"succeeds\":3,\"success\":2,\"successful\":3,\"successfully\":3,\"suck\":-3,\"sucks\":-3,\"sue\":-2,\"sued\":-2,\"sueing\":-2,\"sues\":-2,\"suffer\":-2,\"suffered\":-2,\"sufferer\":-2,\"sufferers\":-2,\"suffering\":-2,\"suffers\":-2,\"suicidal\":-2,\"suicide\":-2,\"suicides\":-2,\"suing\":-2,\"suitable\":2,\"suited\":2,\"sulking\":-2,\"sulky\":-2,\"sullen\":-2,\"sunshine\":2,\"super\":3,\"superb\":5,\"superior\":2,\"support\":2,\"supported\":2,\"supporter\":1,\"supporters\":1,\"supporting\":1,\"supportive\":2,\"supports\":2,\"supreme\":4,\"survived\":2,\"surviving\":2,\"survivor\":2,\"suspect\":-1,\"suspected\":-1,\"suspecting\":-1,\"suspects\":-1,\"suspend\":-1,\"suspended\":-1,\"suspicious\":-2,\"sustainability\":1,\"sustainable\":2,\"sustainably\":2,\"swear\":-2,\"swearing\":-2,\"swears\":-2,\"sweet\":2,\"sweeter\":3,\"sweetest\":3,\"swift\":2,\"swiftly\":2,\"swindle\":-3,\"swindles\":-3,\"swindling\":-3,\"sympathetic\":2,\"sympathy\":2,\"taint\":-2,\"tainted\":-2,\"talent\":2,\"tard\":-2,\"tarnish\":-2,\"tarnished\":-2,\"tarnishes\":-2,\"tears\":-2,\"tender\":2,\"tenderness\":2,\"tense\":-2,\"tension\":-1,\"terrible\":-3,\"terribly\":-3,\"terrific\":4,\"terrifically\":4,\"terrified\":-3,\"terror\":-3,\"terrorist\":-2,\"terrorists\":-2,\"terrorize\":-3,\"terrorized\":-3,\"terrorizes\":-3,\"thank\":2,\"thankful\":2,\"thanks\":2,\"thorny\":-2,\"thoughtful\":2,\"thoughtless\":-2,\"threat\":-2,\"threaten\":-2,\"threatened\":-2,\"threatening\":-2,\"threatens\":-2,\"threats\":-2,\"thrilled\":5,\"thwart\":-2,\"thwarted\":-2,\"thwarting\":-2,\"thwarts\":-2,\"timid\":-2,\"timorous\":-2,\"tired\":-2,\"tits\":-2,\"tolerance\":2,\"tolerant\":2,\"toothless\":-2,\"top\":2,\"tops\":2,\"torn\":-2,\"torture\":-4,\"tortured\":-4,\"tortures\":-4,\"torturing\":-4,\"totalitarian\":-2,\"totalitarianism\":-2,\"tout\":-2,\"touted\":-2,\"touting\":-2,\"touts\":-2,\"toxic\":-3,\"tragedies\":-2,\"tragedy\":-2,\"tragic\":-2,\"tranquil\":2,\"transgress\":-2,\"transgressed\":-2,\"transgresses\":-2,\"transgressing\":-2,\"trap\":-1,\"trapped\":-2,\"traps\":-1,\"trauma\":-3,\"traumatic\":-3,\"travesty\":-2,\"treason\":-3,\"treasonous\":-3,\"treasure\":2,\"treasures\":2,\"trembling\":-2,\"tremor\":-2,\"tremors\":-2,\"tremulous\":-2,\"tribulation\":-2,\"tribute\":2,\"tricked\":-2,\"trickery\":-2,\"triumph\":4,\"triumphant\":4,\"troll\":-2,\"trouble\":-2,\"troubled\":-2,\"troubles\":-2,\"troubling\":-2,\"true\":2,\"trust\":1,\"trusted\":2,\"trusts\":1,\"tumor\":-2,\"twat\":-5,\"tyran\":-3,\"tyrannic\":-3,\"tyrannical\":-3,\"tyrannically\":-3,\"tyrans\":-3,\"ubiquitous\":2,\"ugh\":-2,\"ugliness\":-3,\"ugly\":-3,\"unable\":-2,\"unacceptable\":-2,\"unappeasable\":-2,\"unappreciated\":-2,\"unapproved\":-2,\"unattractive\":-2,\"unavailable\":-1,\"unavailing\":-2,\"unaware\":-2,\"unbearable\":-2,\"unbelievable\":-1,\"unbelieving\":-1,\"unbiased\":2,\"uncertain\":-1,\"unclear\":-1,\"uncomfortable\":-2,\"unconcerned\":-2,\"unconfirmed\":-1,\"unconvinced\":-1,\"uncredited\":-1,\"undecided\":-1,\"undercooked\":-2,\"underestimate\":-1,\"underestimated\":-1,\"underestimates\":-1,\"underestimating\":-1,\"undermine\":-2,\"undermined\":-2,\"undermines\":-2,\"undermining\":-2,\"underperform\":-2,\"underperformed\":-2,\"underperforming\":-2,\"underperforms\":-2,\"undeserving\":-2,\"undesirable\":-2,\"uneasy\":-2,\"unemployed\":-1,\"unemployment\":-2,\"unequal\":-1,\"unequaled\":2,\"unethical\":-2,\"uneventful\":-2,\"unfair\":-2,\"unfavorable\":-2,\"unfit\":-2,\"unfitted\":-2,\"unfocused\":-2,\"unforgivable\":-3,\"unforgiving\":-2,\"unfulfilled\":-2,\"unfunny\":-2,\"ungenerous\":-2,\"ungrateful\":-3,\"unhappy\":-2,\"unhappiness\":-2,\"unhealthy\":-2,\"unhygienic\":-2,\"unified\":1,\"unimaginative\":-2,\"unimpressed\":-2,\"uninspired\":-2,\"unintelligent\":-2,\"unintentional\":-2,\"uninvolving\":-2,\"united\":1,\"unjust\":-2,\"unlikely\":-1,\"unlovable\":-2,\"unloved\":-2,\"unmatched\":1,\"unmotivated\":-2,\"unoriginal\":-2,\"unparliamentary\":-2,\"unpleasant\":-2,\"unpleasantness\":-2,\"unprofessional\":-2,\"unravel\":1,\"unreleting\":-2,\"unresearched\":-2,\"unsafe\":-2,\"unsatisfied\":-2,\"unscientific\":-2,\"unsecured\":-2,\"unselfish\":2,\"unsettled\":-1,\"unsold\":-1,\"unsophisticated\":-2,\"unsound\":-2,\"unstable\":-2,\"unstoppable\":2,\"unsuccessful\":-2,\"unsuccessfully\":-2,\"unsupported\":-2,\"unsure\":-1,\"untarnished\":2,\"untrue\":-2,\"unwanted\":-2,\"unworthy\":-2,\"uplifting\":2,\"uproar\":-3,\"upset\":-2,\"upsets\":-2,\"upsetting\":-2,\"uptight\":-2,\"urgent\":-1,\"useful\":2,\"usefulness\":2,\"useless\":-2,\"uselessness\":-2,\"vague\":-2,\"validate\":1,\"validated\":1,\"validates\":1,\"validating\":1,\"vapid\":-2,\"verdict\":-1,\"verdicts\":-1,\"vested\":1,\"vexation\":-2,\"vexing\":-2,\"vibrant\":3,\"vicious\":-2,\"victim\":-3,\"victimization\":-3,\"victimize\":-3,\"victimized\":-3,\"victimizes\":-3,\"victimizing\":-3,\"victims\":-3,\"victor\":3,\"victors\":3,\"victory\":3,\"victories\":3,\"vigilant\":3,\"vigor\":3,\"vile\":-3,\"vindicate\":2,\"vindicated\":2,\"vindicates\":2,\"vindicating\":2,\"violate\":-2,\"violated\":-2,\"violates\":-2,\"violating\":-2,\"violation\":-2,\"violations\":-2,\"violence\":-3,\"violence-related\":-3,\"violent\":-3,\"violently\":-3,\"virtuous\":2,\"virulent\":-2,\"vision\":1,\"visionary\":3,\"visioning\":1,\"visions\":1,\"vitality\":3,\"vitamin\":1,\"vitriolic\":-3,\"vivacious\":3,\"vividly\":2,\"vociferous\":-1,\"vomit\":-3,\"vomited\":-3,\"vomiting\":-3,\"vomits\":-3,\"vulnerability\":-2,\"vulnerable\":-2,\"walkout\":-2,\"walkouts\":-2,\"wanker\":-3,\"want\":1,\"war\":-2,\"warfare\":-2,\"warm\":1,\"warmhearted\":2,\"warmness\":2,\"warmth\":2,\"warn\":-2,\"warned\":-2,\"warning\":-3,\"warnings\":-3,\"warns\":-2,\"waste\":-1,\"wasted\":-2,\"wasting\":-2,\"wavering\":-1,\"weak\":-2,\"weakened\":-2,\"weakness\":-2,\"weaknesses\":-2,\"wealth\":3,\"wealthier\":2,\"wealthy\":2,\"weary\":-2,\"weep\":-2,\"weeping\":-2,\"weird\":-2,\"welcome\":2,\"welcomed\":2,\"welcomes\":2,\"well-being\":2,\"well-championed\":3,\"well-developed\":2,\"well-established\":2,\"well-focused\":2,\"well-groomed\":2,\"well-proportioned\":2,\"whimsical\":1,\"whitewash\":-3,\"whore\":-4,\"wicked\":-2,\"widowed\":-1,\"willingness\":2,\"win\":4,\"winner\":4,\"winning\":4,\"wins\":4,\"winwin\":3,\"wisdom\":1,\"wish\":1,\"wishes\":1,\"wishing\":1,\"withdrawal\":-3,\"wits\":2,\"woebegone\":-2,\"woeful\":-3,\"won\":3,\"wonderful\":4,\"wonderfully\":4,\"woo\":3,\"woohoo\":3,\"wooo\":4,\"woow\":4,\"worn\":-1,\"worried\":-3,\"worries\":-3,\"worry\":-3,\"worrying\":-3,\"worse\":-3,\"worsen\":-3,\"worsened\":-3,\"worsening\":-3,\"worsens\":-3,\"worshiped\":3,\"worst\":-3,\"worth\":2,\"worthless\":-2,\"worthy\":2,\"wow\":4,\"wowow\":4,\"wowww\":4,\"wrathful\":-3,\"wreck\":-2,\"wrenching\":-2,\"wrong\":-2,\"wrongdoing\":-2,\"wrongdoings\":-2,\"wronged\":-2,\"wrongful\":-2,\"wrongfully\":-2,\"wrongly\":-2,\"wtf\":-4,\"wtff\":-4,\"wtfff\":-4,\"xo\":3,\"xoxo\":3,\"xoxoxo\":4,\"xoxoxoxo\":4,\"yeah\":1,\"yearning\":1,\"yeees\":2,\"yes\":1,\"youthful\":2,\"yucky\":-2,\"yummy\":3,\"zealot\":-2,\"zealots\":-2,\"zealous\":2}");

/***/ }),

/***/ "./node_modules/sentiment/languages/en/negators.json":
/*!***********************************************************!*\
  !*** ./node_modules/sentiment/languages/en/negators.json ***!
  \***********************************************************/
/*! exports provided: cant, can't, dont, don't, doesnt, doesn't, not, non, wont, won't, isnt, isn't, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"cant\":1,\"can't\":1,\"dont\":1,\"don't\":1,\"doesnt\":1,\"doesn't\":1,\"not\":1,\"non\":1,\"wont\":1,\"won't\":1,\"isnt\":1,\"isn't\":1}");

/***/ }),

/***/ "./node_modules/sentiment/languages/en/scoring-strategy.js":
/*!*****************************************************************!*\
  !*** ./node_modules/sentiment/languages/en/scoring-strategy.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var negators = __webpack_require__(/*! ./negators.json */ "./node_modules/sentiment/languages/en/negators.json");

module.exports = {
    apply: function apply(tokens, cursor, tokenScore) {
        if (cursor > 0) {
            var prevtoken = tokens[cursor - 1];
            if (negators[prevtoken]) {
                tokenScore = -tokenScore;
            }
        }
        return tokenScore;
    }
};

/***/ }),

/***/ "./node_modules/sentiment/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/sentiment/lib/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var tokenize = __webpack_require__(/*! ./tokenize */ "./node_modules/sentiment/lib/tokenize.js");
var languageProcessor = __webpack_require__(/*! ./language-processor */ "./node_modules/sentiment/lib/language-processor.js");

/**
 * Constructor
 * @param {Object} options - Instance options
 */
var Sentiment = function Sentiment(options) {
    this.options = options;
};

/**
 * Registers the specified language
 *
 * @param {String} languageCode
 *     - Two-digit code for the language to register
 * @param {Object} language
 *     - The language module to register
 */
Sentiment.prototype.registerLanguage = function (languageCode, language) {
    languageProcessor.addLanguage(languageCode, language);
};

/**
 * Performs sentiment analysis on the provided input 'phrase'.
 *
 * @param {String} phrase
 *     - Input phrase
 * @param {Object} opts
 *     - Options
 * @param {Object} opts.language
 *     - Input language code (2 digit code), defaults to 'en'
 * @param {Object} opts.extras
 *     - Optional sentiment additions to AFINN (hash k/v pairs)
 * @param {function} callback
 *     - Optional callback
 * @return {Object}
 */
Sentiment.prototype.analyze = function (phrase, opts, callback) {
    // Parse arguments
    if (typeof phrase === 'undefined') phrase = '';
    if (typeof opts === 'function') {
        callback = opts;
        opts = {};
    }
    opts = opts || {};

    var languageCode = opts.language || 'en';
    var labels = languageProcessor.getLabels(languageCode);

    // Merge extra labels
    if (_typeof(opts.extras) === 'object') {
        labels = Object.assign(labels, opts.extras);
    }

    // Storage objects
    var tokens = tokenize(phrase),
        score = 0,
        words = [],
        positive = [],
        negative = [];

    // Iterate over tokens
    var i = tokens.length;
    while (i--) {
        var obj = tokens[i];
        if (!labels.hasOwnProperty(obj)) continue;
        words.push(obj);

        // Apply scoring strategy
        var tokenScore = labels[obj];
        // eslint-disable-next-line max-len
        tokenScore = languageProcessor.applyScoringStrategy(languageCode, tokens, i, tokenScore);
        if (tokenScore > 0) positive.push(obj);
        if (tokenScore < 0) negative.push(obj);
        score += tokenScore;
    }

    var result = {
        score: score,
        comparative: tokens.length > 0 ? score / tokens.length : 0,
        tokens: tokens,
        words: words,
        positive: positive,
        negative: negative
    };

    // Handle optional async interface
    if (typeof callback === 'function') {
        process.nextTick(function () {
            callback(null, result);
        });
    } else {
        return result;
    }
};

module.exports = Sentiment;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/sentiment/lib/language-processor.js":
/*!**********************************************************!*\
  !*** ./node_modules/sentiment/lib/language-processor.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var emojis = __webpack_require__(/*! ../build/emoji.json */ "./node_modules/sentiment/build/emoji.json");

// English is loaded by default
var enLanguage = __webpack_require__(/*! ../languages/en/index */ "./node_modules/sentiment/languages/en/index.js");
// Add emojis
Object.assign(enLanguage.labels, emojis);

// Cache loaded languages
var languages = {
    en: enLanguage
};

module.exports = {

    /**
     * Registers the specified language
     *
     * @param {String} languageCode
     *     - Two-digit code for the language to register
     * @param {Object} language
     *     - The language module to register
     */
    addLanguage: function addLanguage(languageCode, language) {
        if (!language.labels) {
            throw new Error('language.labels must be defined!');
        }
        // Add emojis
        Object.assign(language.labels, emojis);
        languages[languageCode] = language;
    },

    /**
     * Retrieves a language object from the cache,
     * or tries to load it from the set of supported languages
     *
     * @param {String} languageCode - Two-digit code for the language to fetch
     */
    getLanguage: function getLanguage(languageCode) {
        if (!languageCode) {
            // Default to english if no language was specified
            return languages.en;
        }
        if (!languages[languageCode]) {
            // Try to load specified language
            try {
                // eslint-disable-next-line max-len
                var language = __webpack_require__("./node_modules/sentiment/languages sync recursive ^\\.\\/.*\\/index$")("./" + languageCode + "/index");
                // Add language to in-memory cache
                this.addLanguage(languageCode, language);
            } catch (err) {
                throw new Error('No language found: ' + languageCode);
            }
        }
        return languages[languageCode];
    },

    /**
     * Returns AFINN-165 weighted labels for the specified language
     *
     * @param {String} languageCode - Two-digit language code
     * @return {Object}
     */
    getLabels: function getLabels(languageCode) {
        var language = this.getLanguage(languageCode);
        return language.labels;
    },

    /**
     * Applies a scoring strategy for the current token
     *
     * @param {String} languageCode - Two-digit language code
     * @param {Array} tokens - Tokens of the phrase to analyze
     * @param {int} cursor - Cursor of the current token being analyzed
     * @param {int} tokenScore - The score of the current token being analyzed
     */
    applyScoringStrategy: function applyScoringStrategy(languageCode, tokens, cursor, tokenScore) {
        var language = this.getLanguage(languageCode);
        // Fallback to default strategy if none was specified
        // eslint-disable-next-line max-len
        var scoringStrategy = language.scoringStrategy || defaultScoringStrategy;
        return scoringStrategy.apply(tokens, cursor, tokenScore);
    }
};

var defaultScoringStrategy = {
    apply: function apply(tokens, cursor, tokenScore) {
        return tokenScore;
    }
};

/***/ }),

/***/ "./node_modules/sentiment/lib/tokenize.js":
/*!************************************************!*\
  !*** ./node_modules/sentiment/lib/tokenize.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*eslint no-useless-escape: "off"*/

/**
 * Remove special characters and return an array of tokens (words).
 * @param  {string} input Input string
 * @return {array}        Array of tokens
 */
module.exports = function (input) {
  return input.toLowerCase().replace(/\n/g, ' ').replace(/[.,\/#!$%\^&\*;:{}=_`\"~()]/g, '').split(' ');
};

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

            svg.select(".xaxis")
            // .transition()
            // .ease(d3.easeExp)
            // .duration(1700)
            .attr("transform", "translate(0," + yscl(0) + ")").call(x_axis.tickFormat(d3.timeFormat(xFormat))).selectAll("text").attr("y", 0).attr("x", 9).attr("dy", ".35em")
            // .attr("transform", "rotate(90)")
            .style("text-anchor", "start").style("opacity", 0);
            // .style("fill", "white")

            svg.append("g").attr("class", "yaxis").call(y_axis);

            // create line generator
            var line = d3.line().x(function (d) {
                return xscl(parseTime(d.x));
            }).y(function (d) {
                return yscl(d.y);
            }).curve(d3.curveBundle.beta(0.85));

            svg.append("text").attr("y", yscl(good) - 5).attr("x", 15).attr("class", "good-label").attr("text-anchor", "right").style("fill", "rgba(0, 128, 0, 0.6)").text("+ sentiment");

            svg.append("text").attr("y", yscl(bad) + 15).attr("x", 15).attr("class", "bad-label").attr("text-anchor", "right").style("fill", "rgba(200, 0, 0, 0.6)").text("- sentiment");

            svg.append("line").attr("x1", 0).attr("y1", yscl(good)).attr("x2", width).attr("y2", yscl(good)).attr("fill", "none").attr("stroke", "green").attr("stroke-width", "1px").attr("class", "good-line").style("stroke-dasharray", "3, 3");

            svg.append("line").attr("x1", 0).attr("y1", yscl(bad)).attr("x2", width).attr("y2", yscl(bad)).attr("fill", "none").attr("stroke", "red").attr("stroke-width", "1px").attr("class", "bad-line").style("stroke-dasharray", "3, 3");

            // draw the line
            svg.append('path').attr("fill", "none").attr("stroke", "lightgrey").attr("stroke-width", "3px").attr("stroke-linecap", "round").data([data]).attr("class", "line").attr("d", line);
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

            svg.select(".xaxis").transition().ease(d3.easeExp).duration(1700).attr("transform", "translate(0," + yscl(0) + ")").call(x_axis.tickFormat(d3.timeFormat(xFormat))).selectAll("text").attr("y", 0).attr("x", 9).attr("dy", ".35em").attr("transform", "rotate(90)").style("text-anchor", "start").style("fill", "white").style("opacity", 1);

            svg.select(".good-label").transition().ease(d3.easeExp).duration(1700).attr("y", yscl(good) - 5).attr("x", 15).attr("display", function () {
                return (0, _chart_utils.conditionalDisplay)(yscl(good), 0, false);
            });

            svg.select(".bad-label").transition().ease(d3.easeExp).duration(1700).attr("y", yscl(bad) + 15).attr("x", 15).attr("display", function () {
                return (0, _chart_utils.conditionalDisplay)(yscl(bad), height, true);
            });

            svg.select(".yaxis").transition().ease(d3.easeExp).duration(1700).call(y_axis).selectAll("text").style("fill", "white");

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
            path.data([lineData]).transition().ease(d3.easeExp).duration(1700).attr("class", "line").attr("d", line);

            svg.select(".good-line").transition().ease(d3.easeExp).duration(1700).attr("x1", 0).attr("y1", yscl(good)).attr("x2", width).attr("y2", yscl(good)).attr("display", function () {
                return (0, _chart_utils.conditionalDisplay)(yscl(good), 0, false);
            });

            svg.select(".bad-line").transition().ease(d3.easeExp).duration(1700).attr("x1", 0).attr("y1", yscl(bad)).attr("x2", width).attr("y2", yscl(bad)).attr("display", function () {
                return (0, _chart_utils.conditionalDisplay)(yscl(bad), height, true);
            });

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
                return (0, _chart_utils.conditionalColor)(d, good, bad, 0.1);
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
                    return (0, _chart_utils.conditionalColor)(d, good, bad, 0.1);
                });
                d3.select(this).style("opacity", function (d) {
                    return (0, _chart_utils.conditionalColor)(d, good, bad, 0.3);
                });
            });

            articlesContainer.style("background", function (d) {
                return (0, _chart_utils.conditionalColor)(d, good, bad, 0.1);
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
    singleArticleInfo.select(".article-title").html("" + d.title);
    singleArticleInfo.select(".article-author").html("" + d.author);
    singleArticleInfo.select(".article-sentiment").html("" + d.y);
    singleArticleInfo.select(".article-relevance").html("" + d.relevance);
    singleArticleInfo.select(".article-description").html("" + d.description);
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
            singleArticleInfo.transition().delay(delay + 1000).duration(100).style("background-color", "rgba(255,255,255,0.3)");

            fillArticleInfo(singleArticleInfo, d);

            singleArticleInfo.transition().delay(delay + 1700).duration(200).style("background-color", "transparent");
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

var _query_field = __webpack_require__(/*! ./query_field */ "./src/query_field.js");

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

    // Testing because I forgot how to vanilla js
    // const newDiv = document.createElement('div');
    // const newContent = document.createTextNode("I'm being created within the index.js file to test if changes show");
    // newDiv.appendChild(newContent);
    // main.appendChild(newDiv);
    // Testing because I forgot how to vanilla js

    var chart = new _chart2.default(props);
    props.chart = chart;

    main.insertBefore((0, _query_field2.default)(props), secondTitle);

    var dummyData = chart.dummyData();
    chart.build(dummyData);
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
var sortBy = function sortBy(option) {
    return 'sortBy=' + option + '&';
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

var fetchEverythingFor = exports.fetchEverythingFor = function fetchEverythingFor(query) {
    var url = everything + addQuery(query) + addLanguage('en') + addPagesize(100) + sortBy('relevancy') + apiKey;
    var req = new Request(url);
    console.log('Requesting top 20 articles about ' + query + '!');
    return fetch(req).then(function (response) {
        return response.json();
    });
};

/***/ }),

/***/ "./src/query_field.js":
/*!****************************!*\
  !*** ./src/query_field.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _news = __webpack_require__(/*! ./news */ "./src/news.js");

var _sentiment = __webpack_require__(/*! ./sentiment */ "./src/sentiment.js");

exports.default = function (props) {
    var form = document.createElement("form");

    var queryInput = document.createElement("input");
    queryInput.setAttribute("type", "text");
    queryInput.setAttribute("class", "query-field");

    form.appendChild(queryInput);
    form.addEventListener("input", function () {
        return debouncedTyping(event, props, queryInput);
    });
    // form.addEventListener("submit", () => { handleTyping(event, props, queryInput)})
    form.addEventListener("submit", function () {
        event.preventDefault();
    });

    return form;
};

var handleTyping = function handleTyping(event, props, queryInput) {
    event.preventDefault();
    var chart = props.chart;
    var value = queryInput.value;
    console.log('I WAS SUBMITTED WITH THE TEXT ' + value);
    (0, _news.fetchEverythingFor)(value).then(function (response) {
        var payload = {};
        payload.query = value;
        payload.articles = response.articles;
        return payload;
    }).then(function (payload) {
        return (0, _sentiment.processData)(payload);
    }).then(function (payload) {
        console.log("Rerendering");
        chart.render(payload);
    });
};

// Use for testing functionality, sourced from: https://codeburst.io/throttling-and-debouncing-in-javascript-646d076d0a44
var debounce = function debounce(delay, fn) {
    var timerId = void 0;
    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(function () {
            fn.apply(undefined, args);
            timerId = null;
        }, delay);
    };
};

var debouncedTyping = debounce(700, handleTyping);

/***/ }),

/***/ "./src/sentiment.js":
/*!**************************!*\
  !*** ./src/sentiment.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.processData = undefined;

var _sentiment = __webpack_require__(/*! sentiment */ "./node_modules/sentiment/lib/index.js");

var _sentiment2 = _interopRequireDefault(_sentiment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var processData = exports.processData = function processData(_ref) {
    var articles = _ref.articles,
        value = _ref.value;

    var payload = {};
    var sentiment = new _sentiment2.default();
    var processingData = [];
    var ratio = 0.6;
    debugger;
    articles.forEach(function (article) {
        var datum = {};
        datum.content = article.content || "";
        datum.title = article.title || "Unnamed";
        datum.author = article.author || datum.title;
        datum.source = article.source.name;
        datum.url = article.url;
        datum.image = article.urlToImage;
        datum.description = article.description || "Unavailable";

        var contentSentiment = sentiment.analyze(datum.content);
        var titleSentiment = sentiment.analyze(datum.title);

        var comparative = contentSentiment.comparative < 0.08 ? Math.abs(contentSentiment.comparative) / 0.75 : contentSentiment.comparative; //THIS IS ONLY A PLACEHOLDER, update to more meaningfully accurate metric after basics
        datum.relevance = Math.round(comparative * 1000) / 1000;
        datum.x = article.publishedAt.split("T")[0];
        var score = datum.relevance / 0.25 * (Math.round((contentSentiment.score * ratio + titleSentiment.score * (1 - ratio)) * 1000) / 1000);
        datum.y = Math.round(score * 1000) / 1000;
        processingData.push(datum);
    });
    payload.scatterData = processingData.sort(sortDateDesc);
    payload.lineData = averageDayScores(processingData);
    payload.total = calculateTotals(processingData);

    return payload;
};

var calculateTotals = function calculateTotals(data) {
    var total = {};
    total.highScore = data[0];
    data.forEach(function (datum) {
        total.score = total.score ? total.score + datum.y : datum.y;
        total.count = total.count ? total.count + 1 : 1;
        total.highScore = Math.abs(datum.y) > Math.abs(total.highScore.y) ? datum : total.highScore;
    });
    total.average = total.score / total.count;
    return total;
};

var averageDayScores = function averageDayScores(data) {
    var processedData = {};
    var count = {};
    data.forEach(function (datum) {
        processedData[datum.x] = processedData[datum.x] ? processedData[datum.x] + datum.y : datum.y;
        count[datum.x] = count[datum.x] ? count[datum.x] + 1 : 1;
    });

    var averagedData = [];
    Object.keys(processedData).forEach(function (date) {
        averagedData.push(_defineProperty({}, date, { x: date, y: Math.round(processedData[date] / count[date] * 1000) / 1000 }));
    });

    var sortedAveragedData = averagedData.sort(sortDate);
    return sortedAveragedData;
};

var sortDate = function sortDate(a, b) {
    var date1 = new Date(a.x);
    var date2 = new Date(b.x);
    if (date1 >= date2) {
        return 1;
    } else {
        return -1;
    }
};

var sortDateDesc = function sortDateDesc(b, a) {
    var date1 = new Date(a.x);
    var date2 = new Date(b.x);
    if (date1 >= date2) {
        return 1;
    } else {
        return -1;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xhbmd1YWdlcyBzeW5jIF5cXC5cXC8uKlxcL2luZGV4JCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xhbmd1YWdlcy9lbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xhbmd1YWdlcy9lbi9zY29yaW5nLXN0cmF0ZWd5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZW50aW1lbnQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZW50aW1lbnQvbGliL2xhbmd1YWdlLXByb2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xpYi90b2tlbml6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0X3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlcnlfZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbnRpbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2RldmVsb3BtZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uY3NzPzVkMzYiXSwibmFtZXMiOlsibmV3c19hcGlfa2V5IiwicHJvY2VzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsIkVycm9yIiwiZGVmYXVsdENsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJlIiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsImNhbGwiLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImxlbmd0aCIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwibGVuIiwicnVuIiwibmV4dFRpY2siLCJhcmdzIiwiQXJyYXkiLCJhcmd1bWVudHMiLCJpIiwicHVzaCIsIkl0ZW0iLCJhcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwidGl0bGUiLCJicm93c2VyIiwiZW52IiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJuYW1lIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siLCJsYWJlbHMiLCJyZXF1aXJlIiwic2NvcmluZ1N0cmF0ZWd5IiwibmVnYXRvcnMiLCJ0b2tlbnMiLCJjdXJzb3IiLCJ0b2tlblNjb3JlIiwicHJldnRva2VuIiwidG9rZW5pemUiLCJsYW5ndWFnZVByb2Nlc3NvciIsIlNlbnRpbWVudCIsIm9wdGlvbnMiLCJyZWdpc3Rlckxhbmd1YWdlIiwibGFuZ3VhZ2VDb2RlIiwibGFuZ3VhZ2UiLCJhZGRMYW5ndWFnZSIsImFuYWx5emUiLCJwaHJhc2UiLCJvcHRzIiwiY2FsbGJhY2siLCJnZXRMYWJlbHMiLCJleHRyYXMiLCJPYmplY3QiLCJhc3NpZ24iLCJzY29yZSIsIndvcmRzIiwicG9zaXRpdmUiLCJuZWdhdGl2ZSIsIm9iaiIsImhhc093blByb3BlcnR5IiwiYXBwbHlTY29yaW5nU3RyYXRlZ3kiLCJyZXN1bHQiLCJjb21wYXJhdGl2ZSIsImVtb2ppcyIsImVuTGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJlbiIsImdldExhbmd1YWdlIiwiZXJyIiwiZGVmYXVsdFNjb3JpbmdTdHJhdGVneSIsImlucHV0IiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwic3BsaXQiLCJzb3J0RGF0ZSIsImEiLCJiIiwiZGF0ZTEiLCJEYXRlIiwieCIsImRhdGUyIiwiYWRkRGF5Iiwic2V0RGF0ZSIsImdldERhdGUiLCJnZW5lcmF0ZURhdGVSYW5nZSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJkYXRlcyIsImN1cnJlbnREYXRlIiwiZGF0ZSIsImZvcm1hdHRlZERhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwieSIsIkNoYXJ0IiwicHJvcHMiLCJkYXRhIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiY3V0b2ZmIiwiZ29vZCIsImJhZCIsIndpZHRoIiwiaGVpZ2h0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhdHRyIiwic3R5bGUiLCJhcHBlbmQiLCJ0b2RheSIsImRhdGVSYW5nZSIsImR1bW15RGF0YSIsImRhdGFMZW5ndGgiLCJtYWciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJkYXR1bSIsImtleXMiLCJjb25zb2xlIiwibG9nIiwieGRhdGEiLCJ5ZGF0YSIsImZvckVhY2giLCJwYXJzZVRpbWUiLCJ0aW1lUGFyc2UiLCJ4Rm9ybWF0IiwieHNjbCIsInNjYWxlVGltZSIsImRvbWFpbiIsImV4dGVudCIsImQiLCJyYW5nZSIsInhfYXhpcyIsImF4aXNCb3R0b20iLCJzY2FsZSIsInlzY2wiLCJzY2FsZUxpbmVhciIsIm1heCIsIm1pbiIsInlfYXhpcyIsImF4aXNMZWZ0IiwidGlja0Zvcm1hdCIsInRpbWVGb3JtYXQiLCJzZWxlY3RBbGwiLCJsaW5lIiwiY3VydmUiLCJjdXJ2ZUJ1bmRsZSIsImJldGEiLCJ0ZXh0IiwicGF5bG9hZCIsInNjYXR0ZXJEYXRhIiwidG90YWwiLCJzaW5nbGVBcnRpY2xlSW5mbyIsInByZWxpbmVEYXRhIiwibGluZURhdGEiLCJwbGluZURhdGEiLCJ2YWx1ZXMiLCJvdXRlckRhdHVtIiwiZmxhdCIsInNvcnQiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsImVhc2VFeHAiLCJkdXJhdGlvbiIsInBhdGgiLCJjcmVhdGVEb3RzIiwiZW50ZXIiLCJ3aW5kb3ciLCJvcGVuIiwidXJsIiwiaGlnaFNjb3JlIiwiXyIsImFydGljbGVzQ29udGFpbmVyIiwibW9udGgiLCJkYXkiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJiaWdEb3QiLCJleGl0IiwicmVtb3ZlIiwidXBkYXRlRG90cyIsInIiLCJjb25kaXRpb25hbFRpdGxlQ29sb3IiLCJhdmVyYWdlIiwic3FydCIsImFicyIsImNvbmRpdGlvbmFsRGlzcGxheSIsImF0dHJfdmFsdWUiLCJncmVhdGVyVGhhbiIsImNvbmRpdGlvbmFsT3BhY2l0eSIsImNvbmRpdGlvbmFsQ29sb3IiLCJvcGFjaXR5IiwiZmlsbEFydGljbGVJbmZvIiwiaHRtbCIsImF1dGhvciIsInJlbGV2YW5jZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJoYW5kbGVEb3RVWCIsInNwZWVkIiwiZGVsYXkiLCJlYXNlRWxhc3RpYyIsImVhc2VMaW5lYXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWluIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWNvbmRUaXRsZSIsImNoYXJ0IiwiaW5zZXJ0QmVmb3JlIiwiYnVpbGQiLCJoZWFkbGluZXMiLCJldmVyeXRoaW5nIiwiYWRkQ291bnRyeSIsImNvdW50cnkiLCJhZGRTb3VyY2UiLCJzb3VyY2UiLCJhZGRRdWVyeSIsInF1ZXJ5IiwiYWRkRnJvbSIsInN0YXJ0Iiwic29ydEJ5Iiwib3B0aW9uIiwiYWRkVG8iLCJlbmQiLCJsbiIsImFkZFBhZ2VzaXplIiwiaW50IiwicGFnZSIsImFwaUtleSIsImZldGNoSGVhZGxpbmVzIiwicmVxIiwiUmVxdWVzdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImZldGNoRXZlcnl0aGluZ0ZvciIsImZvcm0iLCJjcmVhdGVFbGVtZW50IiwicXVlcnlJbnB1dCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwiZGVib3VuY2VkVHlwaW5nIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVR5cGluZyIsInZhbHVlIiwiYXJ0aWNsZXMiLCJyZW5kZXIiLCJkZWJvdW5jZSIsImZuIiwidGltZXJJZCIsInByb2Nlc3NEYXRhIiwic2VudGltZW50IiwicHJvY2Vzc2luZ0RhdGEiLCJyYXRpbyIsImNvbnRlbnQiLCJhcnRpY2xlIiwidXJsVG9JbWFnZSIsImNvbnRlbnRTZW50aW1lbnQiLCJ0aXRsZVNlbnRpbWVudCIsInJvdW5kIiwicHVibGlzaGVkQXQiLCJzb3J0RGF0ZURlc2MiLCJhdmVyYWdlRGF5U2NvcmVzIiwiY2FsY3VsYXRlVG90YWxzIiwiY291bnQiLCJwcm9jZXNzZWREYXRhIiwiYXZlcmFnZWREYXRhIiwic29ydGVkQXZlcmFnZWREYXRhIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7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RkQsTUFFTztBQUNILGVBQU8sQ0FBQyxDQUFSO0FBQ0g7QUFDSixDQVJELEM7Ozs7Ozs7Ozs7O0FDM0VBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCBuZXdzX2FwaV9rZXkgPSBcImQzYTkzMTg5MWMxMTQ3OWVhZWJhYThhZGIzMmFmMjQ2XCIiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2VuL2luZGV4XCI6IFwiLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xhbmd1YWdlcy9lbi9pbmRleC5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9zZW50aW1lbnQvbGFuZ3VhZ2VzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcL2luZGV4JFwiOyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGxhYmVsczogcmVxdWlyZSgnLi9sYWJlbHMuanNvbicpLFxuICAgIHNjb3JpbmdTdHJhdGVneTogcmVxdWlyZSgnLi9zY29yaW5nLXN0cmF0ZWd5Jylcbn07XG4iLCJ2YXIgbmVnYXRvcnMgPSByZXF1aXJlKCcuL25lZ2F0b3JzLmpzb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgYXBwbHk6IGZ1bmN0aW9uKHRva2VucywgY3Vyc29yLCB0b2tlblNjb3JlKSB7XG4gICAgICAgIGlmIChjdXJzb3IgPiAwKSB7XG4gICAgICAgICAgICB2YXIgcHJldnRva2VuID0gdG9rZW5zW2N1cnNvciAtIDFdO1xuICAgICAgICAgICAgaWYgKG5lZ2F0b3JzW3ByZXZ0b2tlbl0pIHtcbiAgICAgICAgICAgICAgICB0b2tlblNjb3JlID0gLXRva2VuU2NvcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRva2VuU2NvcmU7XG4gICAgfVxufTtcbiIsInZhciB0b2tlbml6ZSA9IHJlcXVpcmUoJy4vdG9rZW5pemUnKTtcbnZhciBsYW5ndWFnZVByb2Nlc3NvciA9IHJlcXVpcmUoJy4vbGFuZ3VhZ2UtcHJvY2Vzc29yJyk7XG5cbi8qKlxuICogQ29uc3RydWN0b3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gSW5zdGFuY2Ugb3B0aW9uc1xuICovXG52YXIgU2VudGltZW50ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlcnMgdGhlIHNwZWNpZmllZCBsYW5ndWFnZVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBsYW5ndWFnZUNvZGVcbiAqICAgICAtIFR3by1kaWdpdCBjb2RlIGZvciB0aGUgbGFuZ3VhZ2UgdG8gcmVnaXN0ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBsYW5ndWFnZVxuICogICAgIC0gVGhlIGxhbmd1YWdlIG1vZHVsZSB0byByZWdpc3RlclxuICovXG5TZW50aW1lbnQucHJvdG90eXBlLnJlZ2lzdGVyTGFuZ3VhZ2UgPSBmdW5jdGlvbiAobGFuZ3VhZ2VDb2RlLCBsYW5ndWFnZSkge1xuICAgIGxhbmd1YWdlUHJvY2Vzc29yLmFkZExhbmd1YWdlKGxhbmd1YWdlQ29kZSwgbGFuZ3VhZ2UpO1xufTtcblxuLyoqXG4gKiBQZXJmb3JtcyBzZW50aW1lbnQgYW5hbHlzaXMgb24gdGhlIHByb3ZpZGVkIGlucHV0ICdwaHJhc2UnLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwaHJhc2VcbiAqICAgICAtIElucHV0IHBocmFzZVxuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqICAgICAtIE9wdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmxhbmd1YWdlXG4gKiAgICAgLSBJbnB1dCBsYW5ndWFnZSBjb2RlICgyIGRpZ2l0IGNvZGUpLCBkZWZhdWx0cyB0byAnZW4nXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cy5leHRyYXNcbiAqICAgICAtIE9wdGlvbmFsIHNlbnRpbWVudCBhZGRpdGlvbnMgdG8gQUZJTk4gKGhhc2ggay92IHBhaXJzKVxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqICAgICAtIE9wdGlvbmFsIGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblNlbnRpbWVudC5wcm90b3R5cGUuYW5hbHl6ZSA9IGZ1bmN0aW9uIChwaHJhc2UsIG9wdHMsIGNhbGxiYWNrKSB7XG4gICAgLy8gUGFyc2UgYXJndW1lbnRzXG4gICAgaWYgKHR5cGVvZiBwaHJhc2UgPT09ICd1bmRlZmluZWQnKSBwaHJhc2UgPSAnJztcbiAgICBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBvcHRzO1xuICAgICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gICAgdmFyIGxhbmd1YWdlQ29kZSA9IG9wdHMubGFuZ3VhZ2UgfHwgJ2VuJztcbiAgICB2YXIgbGFiZWxzID0gbGFuZ3VhZ2VQcm9jZXNzb3IuZ2V0TGFiZWxzKGxhbmd1YWdlQ29kZSk7XG5cbiAgICAvLyBNZXJnZSBleHRyYSBsYWJlbHNcbiAgICBpZiAodHlwZW9mIG9wdHMuZXh0cmFzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBsYWJlbHMgPSBPYmplY3QuYXNzaWduKGxhYmVscywgb3B0cy5leHRyYXMpO1xuICAgIH1cblxuICAgIC8vIFN0b3JhZ2Ugb2JqZWN0c1xuICAgIHZhciB0b2tlbnMgICAgICA9IHRva2VuaXplKHBocmFzZSksXG4gICAgICAgIHNjb3JlICAgICAgID0gMCxcbiAgICAgICAgd29yZHMgICAgICAgPSBbXSxcbiAgICAgICAgcG9zaXRpdmUgICAgPSBbXSxcbiAgICAgICAgbmVnYXRpdmUgICAgPSBbXTtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciB0b2tlbnNcbiAgICB2YXIgaSA9IHRva2Vucy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICB2YXIgb2JqID0gdG9rZW5zW2ldO1xuICAgICAgICBpZiAoIWxhYmVscy5oYXNPd25Qcm9wZXJ0eShvYmopKSBjb250aW51ZTtcbiAgICAgICAgd29yZHMucHVzaChvYmopO1xuXG4gICAgICAgIC8vIEFwcGx5IHNjb3Jpbmcgc3RyYXRlZ3lcbiAgICAgICAgdmFyIHRva2VuU2NvcmUgPSBsYWJlbHNbb2JqXTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICAgICAgdG9rZW5TY29yZSA9IGxhbmd1YWdlUHJvY2Vzc29yLmFwcGx5U2NvcmluZ1N0cmF0ZWd5KGxhbmd1YWdlQ29kZSwgdG9rZW5zLCBpLCB0b2tlblNjb3JlKTtcbiAgICAgICAgaWYgKHRva2VuU2NvcmUgPiAwKSBwb3NpdGl2ZS5wdXNoKG9iaik7XG4gICAgICAgIGlmICh0b2tlblNjb3JlIDwgMCkgbmVnYXRpdmUucHVzaChvYmopO1xuICAgICAgICBzY29yZSArPSB0b2tlblNjb3JlO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgIHNjb3JlOiAgICAgICAgICBzY29yZSxcbiAgICAgICAgY29tcGFyYXRpdmU6ICAgIHRva2Vucy5sZW5ndGggPiAwID8gc2NvcmUgLyB0b2tlbnMubGVuZ3RoIDogMCxcbiAgICAgICAgdG9rZW5zOiAgICAgICAgIHRva2VucyxcbiAgICAgICAgd29yZHM6ICAgICAgICAgIHdvcmRzLFxuICAgICAgICBwb3NpdGl2ZTogICAgICAgcG9zaXRpdmUsXG4gICAgICAgIG5lZ2F0aXZlOiAgICAgICBuZWdhdGl2ZVxuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgb3B0aW9uYWwgYXN5bmMgaW50ZXJmYWNlXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZW50aW1lbnQ7XG4iLCJ2YXIgZW1vamlzID0gcmVxdWlyZSgnLi4vYnVpbGQvZW1vamkuanNvbicpO1xuXG4vLyBFbmdsaXNoIGlzIGxvYWRlZCBieSBkZWZhdWx0XG52YXIgZW5MYW5ndWFnZSA9IHJlcXVpcmUoJy4uL2xhbmd1YWdlcy9lbi9pbmRleCcpO1xuLy8gQWRkIGVtb2ppc1xuT2JqZWN0LmFzc2lnbihlbkxhbmd1YWdlLmxhYmVscywgZW1vamlzKTtcblxuLy8gQ2FjaGUgbG9hZGVkIGxhbmd1YWdlc1xudmFyIGxhbmd1YWdlcyA9IHtcbiAgICBlbjogZW5MYW5ndWFnZVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgdGhlIHNwZWNpZmllZCBsYW5ndWFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGxhbmd1YWdlQ29kZVxuICAgICAqICAgICAtIFR3by1kaWdpdCBjb2RlIGZvciB0aGUgbGFuZ3VhZ2UgdG8gcmVnaXN0ZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbGFuZ3VhZ2VcbiAgICAgKiAgICAgLSBUaGUgbGFuZ3VhZ2UgbW9kdWxlIHRvIHJlZ2lzdGVyXG4gICAgICovXG4gICAgYWRkTGFuZ3VhZ2U6IGZ1bmN0aW9uIChsYW5ndWFnZUNvZGUsIGxhbmd1YWdlKSB7XG4gICAgICAgIGlmICghbGFuZ3VhZ2UubGFiZWxzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2xhbmd1YWdlLmxhYmVscyBtdXN0IGJlIGRlZmluZWQhJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIGVtb2ppc1xuICAgICAgICBPYmplY3QuYXNzaWduKGxhbmd1YWdlLmxhYmVscywgZW1vamlzKTtcbiAgICAgICAgbGFuZ3VhZ2VzW2xhbmd1YWdlQ29kZV0gPSBsYW5ndWFnZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGEgbGFuZ3VhZ2Ugb2JqZWN0IGZyb20gdGhlIGNhY2hlLFxuICAgICAqIG9yIHRyaWVzIHRvIGxvYWQgaXQgZnJvbSB0aGUgc2V0IG9mIHN1cHBvcnRlZCBsYW5ndWFnZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBsYW5ndWFnZUNvZGUgLSBUd28tZGlnaXQgY29kZSBmb3IgdGhlIGxhbmd1YWdlIHRvIGZldGNoXG4gICAgICovXG4gICAgZ2V0TGFuZ3VhZ2U6IGZ1bmN0aW9uKGxhbmd1YWdlQ29kZSkge1xuICAgICAgICBpZiAoIWxhbmd1YWdlQ29kZSkge1xuICAgICAgICAgICAgLy8gRGVmYXVsdCB0byBlbmdsaXNoIGlmIG5vIGxhbmd1YWdlIHdhcyBzcGVjaWZpZWRcbiAgICAgICAgICAgIHJldHVybiBsYW5ndWFnZXMuZW47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFsYW5ndWFnZXNbbGFuZ3VhZ2VDb2RlXSkge1xuICAgICAgICAgICAgLy8gVHJ5IHRvIGxvYWQgc3BlY2lmaWVkIGxhbmd1YWdlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgICAgICAgICAgdmFyIGxhbmd1YWdlID0gcmVxdWlyZSgnLi4vbGFuZ3VhZ2VzLycgKyBsYW5ndWFnZUNvZGUgKyAnL2luZGV4Jyk7XG4gICAgICAgICAgICAgICAgLy8gQWRkIGxhbmd1YWdlIHRvIGluLW1lbW9yeSBjYWNoZVxuICAgICAgICAgICAgICAgIHRoaXMuYWRkTGFuZ3VhZ2UobGFuZ3VhZ2VDb2RlLCBsYW5ndWFnZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGxhbmd1YWdlIGZvdW5kOiAnICsgbGFuZ3VhZ2VDb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGFuZ3VhZ2VzW2xhbmd1YWdlQ29kZV07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgQUZJTk4tMTY1IHdlaWdodGVkIGxhYmVscyBmb3IgdGhlIHNwZWNpZmllZCBsYW5ndWFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGxhbmd1YWdlQ29kZSAtIFR3by1kaWdpdCBsYW5ndWFnZSBjb2RlXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldExhYmVsczogZnVuY3Rpb24obGFuZ3VhZ2VDb2RlKSB7XG4gICAgICAgIHZhciBsYW5ndWFnZSA9IHRoaXMuZ2V0TGFuZ3VhZ2UobGFuZ3VhZ2VDb2RlKTtcbiAgICAgICAgcmV0dXJuIGxhbmd1YWdlLmxhYmVscztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyBhIHNjb3Jpbmcgc3RyYXRlZ3kgZm9yIHRoZSBjdXJyZW50IHRva2VuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGFuZ3VhZ2VDb2RlIC0gVHdvLWRpZ2l0IGxhbmd1YWdlIGNvZGVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB0b2tlbnMgLSBUb2tlbnMgb2YgdGhlIHBocmFzZSB0byBhbmFseXplXG4gICAgICogQHBhcmFtIHtpbnR9IGN1cnNvciAtIEN1cnNvciBvZiB0aGUgY3VycmVudCB0b2tlbiBiZWluZyBhbmFseXplZFxuICAgICAqIEBwYXJhbSB7aW50fSB0b2tlblNjb3JlIC0gVGhlIHNjb3JlIG9mIHRoZSBjdXJyZW50IHRva2VuIGJlaW5nIGFuYWx5emVkXG4gICAgICovXG4gICAgYXBwbHlTY29yaW5nU3RyYXRlZ3k6IGZ1bmN0aW9uKGxhbmd1YWdlQ29kZSwgdG9rZW5zLCBjdXJzb3IsIHRva2VuU2NvcmUpIHtcbiAgICAgICAgdmFyIGxhbmd1YWdlID0gdGhpcy5nZXRMYW5ndWFnZShsYW5ndWFnZUNvZGUpO1xuICAgICAgICAvLyBGYWxsYmFjayB0byBkZWZhdWx0IHN0cmF0ZWd5IGlmIG5vbmUgd2FzIHNwZWNpZmllZFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICB2YXIgc2NvcmluZ1N0cmF0ZWd5ID0gbGFuZ3VhZ2Uuc2NvcmluZ1N0cmF0ZWd5IHx8IGRlZmF1bHRTY29yaW5nU3RyYXRlZ3k7XG4gICAgICAgIHJldHVybiBzY29yaW5nU3RyYXRlZ3kuYXBwbHkodG9rZW5zLCBjdXJzb3IsIHRva2VuU2NvcmUpO1xuICAgIH1cbn07XG5cbnZhciBkZWZhdWx0U2NvcmluZ1N0cmF0ZWd5ID0ge1xuICAgIGFwcGx5OiBmdW5jdGlvbih0b2tlbnMsIGN1cnNvciwgdG9rZW5TY29yZSkge1xuICAgICAgICByZXR1cm4gdG9rZW5TY29yZTtcbiAgICB9XG59O1xuIiwiLyplc2xpbnQgbm8tdXNlbGVzcy1lc2NhcGU6IFwib2ZmXCIqL1xuXG4vKipcbiAqIFJlbW92ZSBzcGVjaWFsIGNoYXJhY3RlcnMgYW5kIHJldHVybiBhbiBhcnJheSBvZiB0b2tlbnMgKHdvcmRzKS5cbiAqIEBwYXJhbSAge3N0cmluZ30gaW5wdXQgSW5wdXQgc3RyaW5nXG4gKiBAcmV0dXJuIHthcnJheX0gICAgICAgIEFycmF5IG9mIHRva2Vuc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0XG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC5yZXBsYWNlKC9cXG4vZywgJyAnKVxuICAgICAgICAucmVwbGFjZSgvWy4sXFwvIyEkJVxcXiZcXCo7Ont9PV9gXFxcIn4oKV0vZywgJycpXG4gICAgICAgIC5zcGxpdCgnICcpO1xufTtcbiIsImltcG9ydCB7XG4gICAgY29uZGl0aW9uYWxDb2xvcixcbiAgICBjb25kaXRpb25hbERpc3BsYXksXG4gICAgY29uZGl0aW9uYWxPcGFjaXR5LFxuICAgIGNvbmRpdGlvbmFsVGl0bGVDb2xvcixcbiAgICBmaWxsQXJ0aWNsZUluZm8sXG4gICAgaGFuZGxlRG90VVhcbn0gZnJvbSAnLi9jaGFydF91dGlscydcblxuY29uc3Qgc29ydERhdGUgPSAoYSwgYikgPT4ge1xuICAgIGNvbnN0IGRhdGUxID0gbmV3IERhdGUoYS54KVxuICAgIGNvbnN0IGRhdGUyID0gbmV3IERhdGUoYi54KVxuICAgIGlmIChkYXRlMSA+PSBkYXRlMikge1xuICAgICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgIH1cbn1cblxuRGF0ZS5wcm90b3R5cGUuYWRkRGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0RGF0ZSh0aGlzLmdldERhdGUoKSArIDEpXG59XG5cbmNvbnN0IGdlbmVyYXRlRGF0ZVJhbmdlID0gKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkgPT4ge1xuICAgIGNvbnN0IGRhdGVzID0gW11cbiAgICBsZXQgY3VycmVudERhdGUgPSBzdGFydERhdGVcbiAgICB3aGlsZSAoY3VycmVudERhdGUgPCBlbmREYXRlKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSlcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX1gICsgXCItXCIgKyBgMCR7ZGF0ZS5nZXRNb250aCgpICsxfWAgKyBcIi1cIiArIGAke2RhdGUuZ2V0RGF0ZSgpfWBcbiAgICAgICAgZGF0ZXMucHVzaCh7W2Zvcm1hdHRlZERhdGVdOiB7eDogZm9ybWF0dGVkRGF0ZSwgeTogbnVsbH19KVxuICAgICAgICBjdXJyZW50RGF0ZS5hZGREYXkoKVxuICAgIH1cbiAgICByZXR1cm4gZGF0ZXNcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHRoaXMuZGF0YSA9IHByb3BzLmRhdGFcbiAgICAgICAgdGhpcy5tYXJnaW4gPSB7XG4gICAgICAgICAgICB0b3A6IDMwLFxuICAgICAgICAgICAgcmlnaHQ6IDIwLFxuICAgICAgICAgICAgYm90dG9tOiA1MCxcbiAgICAgICAgICAgIGxlZnQ6IDIwLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3V0b2ZmID0gM1xuICAgICAgICB0aGlzLmdvb2QgPSB0aGlzLmN1dG9mZlxuICAgICAgICB0aGlzLmJhZCA9IHRoaXMuY3V0b2ZmICogLTFcbiAgICAgICAgdGhpcy53aWR0aCA9IDgxMCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAzNzAgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XG4gICAgICAgIHRoaXMuc3ZnID0gZDMuc2VsZWN0KCdzdmcnKVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLmxlZnQgKyB0aGlzLm1hcmdpbi5yaWdodClcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSlcbiAgICAgICAgICAgIC5zdHlsZSgnYmFja2dyb3VuZC1jb2xvcicsICd0cmFuc3BhcmVudCcpXG4gICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke3RoaXMubWFyZ2luLmxlZnR9LCAke3RoaXMubWFyZ2luLnRvcH0pYClcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gbmV3IERhdGUodG9kYXkuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgLSAzMSkpXG4gICAgICAgIHRoaXMuZW5kRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMuZGF0ZVJhbmdlID0gZ2VuZXJhdGVEYXRlUmFuZ2UodGhpcy5zdGFydERhdGUsIHRoaXMuZW5kRGF0ZSlcbiAgICB9XG5cbiAgICBkdW1teURhdGEoKXtcbiAgICAgICAgY29uc3QgZHVtbXlEYXRhID0gW11cbiAgICAgICAgY29uc3QgZGF0YUxlbmd0aCA9IDMxO1xuICAgICAgICBjb25zdCBtYWcgPSAyNTtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBkYXRhTGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyICogbWFnKSAtIG1hZztcbiAgICAgICAgICAgIGNvbnN0IGRhdHVtID0ge3g6T2JqZWN0LmtleXModGhpcy5kYXRlUmFuZ2VbeF0pWzBdLCB5fTtcbiAgICAgICAgICAgIGR1bW15RGF0YS5wdXNoKGRhdHVtKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhkdW1teURhdGEpXG4gICAgICAgIHJldHVybiBkdW1teURhdGFcbiAgICB9XG5cbiAgICBidWlsZChkYXRhKXtcbiAgICAgICAgY29uc3QgeyBzdmcsIGhlaWdodCwgd2lkdGgsIGdvb2QsIGJhZCB9ID0gdGhpc1xuICAgICAgICBjb25zdCB4ZGF0YSA9IFtdXG4gICAgICAgIGNvbnN0IHlkYXRhID0gW11cbiAgICAgICAgZGF0YS5mb3JFYWNoKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHhkYXRhLnB1c2goZGF0dW0ueClcbiAgICAgICAgICAgIHlkYXRhLnB1c2goZGF0dW0ueSlcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgcGFyc2VUaW1lID0gZDMudGltZVBhcnNlKFwiJVktJW0tJWRcIilcbiAgICAgICAgY29uc3QgeEZvcm1hdCA9IFwiJWItJWRcIjtcbiAgICAgICAgY29uc3QgeHNjbCA9IGQzLnNjYWxlVGltZSgpXG4gICAgICAgICAgICAuZG9tYWluKGQzLmV4dGVudChkYXRhLCBkID0+IHsgcmV0dXJuIHBhcnNlVGltZShkLngpIH0pKVxuICAgICAgICAgICAgLnJhbmdlKFswLCB3aWR0aF0pO1xuXG4gICAgICAgIGNvbnN0IHhfYXhpcyA9IGQzLmF4aXNCb3R0b20oKVxuICAgICAgICAgICAgLnNjYWxlKHhzY2wpXG5cbiAgICAgICAgY29uc3QgeXNjbCA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgIC5kb21haW4oW2QzLm1heCh5ZGF0YSksIGQzLm1pbih5ZGF0YSldKVxuICAgICAgICAgICAgLnJhbmdlKFswLCBoZWlnaHRdKTtcblxuICAgICAgICBjb25zdCB5X2F4aXMgPSBkMy5heGlzTGVmdCgpXG4gICAgICAgICAgICAuc2NhbGUoeXNjbClcblxuICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCR7KHlzY2woMCkpfSlgKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBgeGF4aXNgKVxuICAgICAgICAgICAgLmNhbGwoeF9heGlzKVxuXG5cbiAgICAgICAgc3ZnLnNlbGVjdChcIi54YXhpc1wiKVxuICAgICAgICAgICAgLy8gLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLy8gLmVhc2UoZDMuZWFzZUV4cClcbiAgICAgICAgICAgIC8vIC5kdXJhdGlvbigxNzAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCR7eXNjbCgwKX0pYClcbiAgICAgICAgICAgIC5jYWxsKHhfYXhpcy50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoeEZvcm1hdCkpKVxuICAgICAgICAgICAgLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDkpXG4gICAgICAgICAgICAuYXR0cihcImR5XCIsIFwiLjM1ZW1cIilcbiAgICAgICAgICAgIC8vIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKDkwKVwiKVxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJzdGFydFwiKVxuICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwKVxuICAgICAgICAgICAgLy8gLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpXG5cbiAgICAgICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgYHlheGlzYClcbiAgICAgICAgICAgIC5jYWxsKHlfYXhpcyk7XG5cbiAgICAgICAgLy8gY3JlYXRlIGxpbmUgZ2VuZXJhdG9yXG4gICAgICAgIGNvbnN0IGxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgICAgIC54KGQgPT4geyByZXR1cm4geHNjbChwYXJzZVRpbWUoZC54KSk7IH0pXG4gICAgICAgICAgICAueShkID0+IHsgcmV0dXJuIHlzY2woZC55KTsgfSlcbiAgICAgICAgICAgIC5jdXJ2ZShkMy5jdXJ2ZUJ1bmRsZS5iZXRhKDAuODUpKTtcblxuICAgICAgICBzdmcuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIHlzY2woZ29vZCkgLSA1IClcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCAxNSlcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJnb29kLWxhYmVsXCIpXG4gICAgICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwicmlnaHRcIilcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJyZ2JhKDAsIDEyOCwgMCwgMC42KVwiKVxuICAgICAgICAgICAgLnRleHQoXCIrIHNlbnRpbWVudFwiKVxuXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgeXNjbChiYWQpICsgMTUgKVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDE1KVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhZC1sYWJlbFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcInJpZ2h0XCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwicmdiYSgyMDAsIDAsIDAsIDAuNilcIilcbiAgICAgICAgICAgIC50ZXh0KFwiLSBzZW50aW1lbnRcIilcblxuICAgICAgICBzdmcuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ4MVwiLCAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ5MVwiLCB5c2NsKGdvb2QpKVxuICAgICAgICAgICAgLmF0dHIoXCJ4MlwiLCB3aWR0aClcbiAgICAgICAgICAgIC5hdHRyKFwieTJcIiwgeXNjbChnb29kKSlcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiZ3JlZW5cIilcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIFwiMXB4XCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZ29vZC1saW5lXCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIChcIjMsIDNcIikpO1xuXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJsaW5lXCIpXG4gICAgICAgICAgICAuYXR0cihcIngxXCIsIDApXG4gICAgICAgICAgICAuYXR0cihcInkxXCIsIHlzY2woYmFkKSlcbiAgICAgICAgICAgIC5hdHRyKFwieDJcIiwgd2lkdGgpXG4gICAgICAgICAgICAuYXR0cihcInkyXCIsIHlzY2woYmFkKSlcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwicmVkXCIpXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCBcIjFweFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhZC1saW5lXCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIChcIjMsIDNcIikpXG5cbiAgICAgICAgLy8gZHJhdyB0aGUgbGluZVxuICAgICAgICBzdmcuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwibGlnaHRncmV5XCIpXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCBcIjNweFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2UtbGluZWNhcFwiLCBcInJvdW5kXCIpXG4gICAgICAgICAgICAuZGF0YShbZGF0YV0pXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGxpbmUpO1xuICAgIH1cblxuICAgIHJlbmRlcihwYXlsb2FkKXtcbiAgICAgICAgY29uc3QgeyBzY2F0dGVyRGF0YSwgdG90YWwgfSA9IHBheWxvYWRcbiAgICAgICAgY29uc3QgeyBzdmcsIGhlaWdodCwgd2lkdGgsIGdvb2QsIGJhZCB9ID0gdGhpc1xuICAgICAgICBjb25zdCB5ZGF0YSA9IFtdXG4gICAgICAgIGNvbnN0IHhkYXRhID0gW11cbiAgICAgICAgY29uc3Qgc2luZ2xlQXJ0aWNsZUluZm8gPSBkMy5zZWxlY3QoXCIuYXJ0aWNsZS1pbmZvLWNvbnRhaW5lclwiKVxuXG5cbiAgICAgICAgY29uc3QgcHJlbGluZURhdGEgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgW10sXG4gICAgICAgICAgICB0aGlzLmRhdGVSYW5nZSxcbiAgICAgICAgICAgIHBheWxvYWQubGluZURhdGFcbiAgICAgICAgKVxuXG4gICAgICAgIGNvbnN0IHBsaW5lRGF0YSA9IFtdXG4gICAgICAgIHByZWxpbmVEYXRhLmZvckVhY2gob3V0ZXJEYXR1bSA9PiB7XG4gICAgICAgICAgICBwbGluZURhdGEucHVzaChPYmplY3QudmFsdWVzKG91dGVyRGF0dW0pKVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBsaW5lRGF0YSA9IHBsaW5lRGF0YS5mbGF0KCkuc29ydChzb3J0RGF0ZSlcblxuXG4gICAgICAgIGNvbmRpdGlvbmFsVGl0bGVDb2xvcih0b3RhbCk7XG5cbiAgICAgICAgc2NhdHRlckRhdGEuZm9yRWFjaChkYXR1bSA9PiB7XG4gICAgICAgICAgICB5ZGF0YS5wdXNoKGRhdHVtLnkpXG4gICAgICAgICAgICB4ZGF0YS5wdXNoKGRhdHVtLngpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgcGFyc2VUaW1lID0gZDMudGltZVBhcnNlKFwiJVktJW0tJWRcIilcbiAgICAgICAgY29uc3QgeEZvcm1hdCA9IFwiJWItJWRcIjtcbiAgICAgICAgY29uc3QgeHNjbCA9IGQzLnNjYWxlVGltZSgpXG4gICAgICAgICAgICAuZG9tYWluKGQzLmV4dGVudChsaW5lRGF0YSwgZCA9PiB7IHJldHVybiBwYXJzZVRpbWUoZC54KSB9KSlcbiAgICAgICAgICAgIC5yYW5nZShbMCwgd2lkdGhdKTtcblxuICAgICAgICBjb25zdCB4X2F4aXMgPSBkMy5heGlzQm90dG9tKClcbiAgICAgICAgICAgIC5zY2FsZSh4c2NsKVxuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IHlzY2wgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAuZG9tYWluKFtkMy5tYXgoeWRhdGEpLCBkMy5taW4oeWRhdGEpXSlcbiAgICAgICAgICAgIC5yYW5nZShbMCwgaGVpZ2h0XSk7XG5cbiAgICAgICAgY29uc3QgeV9heGlzID0gZDMuYXhpc0xlZnQoKVxuICAgICAgICAgICAgLnNjYWxlKHlzY2wpXG5cbiAgICAgICAgc3ZnLnNlbGVjdChcIi54YXhpc1wiKVxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbigxNzAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCR7eXNjbCgwKX0pYClcbiAgICAgICAgICAgIC5jYWxsKHhfYXhpcy50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoeEZvcm1hdCkpKVxuICAgICAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIDApXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDkpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkeVwiLCBcIi4zNWVtXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoOTApXCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJzdGFydFwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSlcblxuICAgICAgICBzdmcuc2VsZWN0KFwiLmdvb2QtbGFiZWxcIilcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCB5c2NsKGdvb2QpIC0gNSlcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCAxNSlcbiAgICAgICAgICAgIC5hdHRyKFwiZGlzcGxheVwiLCAoKSA9PiBjb25kaXRpb25hbERpc3BsYXkoeXNjbChnb29kKSwgMCwgZmFsc2UpKVxuXG4gICAgICAgIHN2Zy5zZWxlY3QoXCIuYmFkLWxhYmVsXCIpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDE3MDApXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgeXNjbChiYWQpICsgMTUpXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgMTUpXG4gICAgICAgICAgICAuYXR0cihcImRpc3BsYXlcIiwgKCkgPT4gY29uZGl0aW9uYWxEaXNwbGF5KHlzY2woYmFkKSwgaGVpZ2h0LCB0cnVlKSlcblxuICAgICAgICBzdmcuc2VsZWN0KFwiLnlheGlzXCIpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDE3MDApXG4gICAgICAgICAgICAuY2FsbCh5X2F4aXMpXG4gICAgICAgICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIndoaXRlXCIpXG5cbiAgICAgICAgY29uc3QgbGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAgICAgLngoZCA9PiB7IHJldHVybiB4c2NsKHBhcnNlVGltZShkLngpKTsgfSlcbiAgICAgICAgICAgIC55KGQgPT4geyByZXR1cm4geXNjbChkLnkpOyB9KVxuICAgICAgICAgICAgLy8gLmRlZmluZWQoZCA9PiB7XG4gICAgICAgICAgICAvLyAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIC8vICAgICBpZiAoZC55KSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIC5jdXJ2ZShkMy5jdXJ2ZUJ1bmRsZS5iZXRhKDAuODUpKTtcblxuICAgICAgICBjb25zdCBwYXRoID0gc3ZnLnNlbGVjdEFsbCgnLmxpbmUnKTtcbiAgICAgICAgcGF0aFxuICAgICAgICAgICAgLmRhdGEoW2xpbmVEYXRhXSlcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgbGluZSlcblxuICAgICAgICBzdmcuc2VsZWN0KFwiLmdvb2QtbGluZVwiKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUV4cClcbiAgICAgICAgICAgIC5kdXJhdGlvbigxNzAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ4MVwiLCAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ5MVwiLCB5c2NsKGdvb2QpKVxuICAgICAgICAgICAgLmF0dHIoXCJ4MlwiLCB3aWR0aClcbiAgICAgICAgICAgIC5hdHRyKFwieTJcIiwgeXNjbChnb29kKSlcbiAgICAgICAgICAgIC5hdHRyKFwiZGlzcGxheVwiLCAoKSA9PiBjb25kaXRpb25hbERpc3BsYXkoeXNjbChnb29kKSwgMCwgZmFsc2UpKVxuXG4gICAgICAgIHN2Zy5zZWxlY3QoXCIuYmFkLWxpbmVcIilcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgICAgIC5hdHRyKFwieDFcIiwgMClcbiAgICAgICAgICAgIC5hdHRyKFwieTFcIiwgeXNjbChiYWQpIClcbiAgICAgICAgICAgIC5hdHRyKFwieDJcIiwgd2lkdGgpXG4gICAgICAgICAgICAuYXR0cihcInkyXCIsIHlzY2woYmFkKSlcbiAgICAgICAgICAgIC5hdHRyKFwiZGlzcGxheVwiLCAoKSA9PiBjb25kaXRpb25hbERpc3BsYXkoeXNjbChiYWQpLCBoZWlnaHQsIHRydWUpKVxuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IGNyZWF0ZURvdHMgPSBzdmcuc2VsZWN0QWxsKFwiLmRvdFwiKVxuICAgICAgICAgICAgLmRhdGEoc2NhdHRlckRhdGEpXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJkb3RcIilcbiAgICAgICAgICAgIFxuICAgICAgICBjcmVhdGVEb3RzXG4gICAgICAgICAgICAub24oXCJjbGlja1wiLCBkID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihkLnVybCwgXCJfYmxhbmtcIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5kb3RcIilcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBkID0+IGNvbmRpdGlvbmFsQ29sb3IoZCwgZ29vZCwgYmFkKSlcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBkID0+IGNvbmRpdGlvbmFsT3BhY2l0eShkLCBnb29kLCBiYWQpKVxuICAgICAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJkYXJrYmx1ZVwiKTtcbiAgICAgICAgICAgICAgICBmaWxsQXJ0aWNsZUluZm8oc2luZ2xlQXJ0aWNsZUluZm8sIGQpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIGNyZWF0ZURvdHNcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgICAgIC5hdHRyKFwiY3hcIiwgZCA9PiB7IHJldHVybiB4c2NsKHBhcnNlVGltZShkLngpKSB9KVxuICAgICAgICAgICAgLmF0dHIoXCJjeVwiLCBkID0+IHsgcmV0dXJuIHlzY2woZC55KSB9KVxuICAgICAgICAgICAgLmF0dHIoXCJyXCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkLnRpdGxlID09PSB0b3RhbC5oaWdoU2NvcmUudGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIDhcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYXR0cihcImlkXCIsIChfLGkpID0+IHtyZXR1cm4gXCJkb3RfXCIgKyBpfSlcbiAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgZCA9PiBjb25kaXRpb25hbE9wYWNpdHkoZCwgZ29vZCwgYmFkKSlcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgZCA9PiBjb25kaXRpb25hbENvbG9yKGQsIGdvb2QsIGJhZCkpO1xuXG4gICAgICAgIGNvbnN0IGFydGljbGVzQ29udGFpbmVyID0gZDMuc2VsZWN0KFwiI2FydGljbGVzLWxpc3RcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJsaVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEoc2NhdHRlckRhdGEpXG4gICAgICAgIGFydGljbGVzQ29udGFpbmVyXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJsaVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImFydGljbGUtbGlzdC1pdGVtXCIpXG4gICAgICAgICAgICAuYXR0cihcImlkXCIsIChfLGkpID0+IHtyZXR1cm4gXCJhcnRpY2xlX1wiICsgaX0pXG4gICAgICAgICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kXCIsIGQgPT4gY29uZGl0aW9uYWxDb2xvcihkLCBnb29kLCBiYWQsIDAuMSkpXG4gICAgICAgICAgICAudGV4dCggZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGQueClcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0geyBtb250aDogJ3Nob3J0JywgZGF5OiAnbnVtZXJpYycgfVxuICAgICAgICAgICAgICAgIHJldHVybiBgJHtkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIG9wdGlvbnMpfTogJHtkLnRpdGxlfWBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJjbGlja1wiLCBmdW5jdGlvbihkLGkpe1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5kb3RcIilcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBkID0+IGNvbmRpdGlvbmFsQ29sb3IoZCwgZ29vZCwgYmFkKSlcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBkID0+IGNvbmRpdGlvbmFsT3BhY2l0eShkLCBnb29kLCBiYWQpKTtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3QoYCNkb3RfJHtpfWApXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiclwiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ0RvdCA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURvdFVYKGQsIGJpZ0RvdCwgc2luZ2xlQXJ0aWNsZUluZm8sIDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDIwXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihkLGkpe1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5kb3RcIilcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBkID0+IGNvbmRpdGlvbmFsQ29sb3IoZCwgZ29vZCwgYmFkKSlcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBkID0+IGNvbmRpdGlvbmFsT3BhY2l0eShkLCBnb29kLCBiYWQpKTtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3QoYCNkb3RfJHtpfWApXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSlcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcImRhcmtibHVlXCIpO1xuXG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLmFydGljbGUtbGlzdC1pdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcImJhY2tncm91bmRcIiwgZCA9PiBjb25kaXRpb25hbENvbG9yKGQsIGdvb2QsIGJhZCwgMC4xKSk7XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgZCA9PiBjb25kaXRpb25hbENvbG9yKGQsIGdvb2QsIGJhZCwgMC4zKSk7XG4gICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgYXJ0aWNsZXNDb250YWluZXJcbiAgICAgICAgICAgIC5zdHlsZShcImJhY2tncm91bmRcIiwgZCA9PiBjb25kaXRpb25hbENvbG9yKGQsIGdvb2QsIGJhZCwgMC4xKSlcbiAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGQueClcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0geyBtb250aDogJ3Nob3J0JywgZGF5OiAnbnVtZXJpYycgfVxuICAgICAgICAgICAgICAgIHJldHVybiBgJHtkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIG9wdGlvbnMpfTogJHtkLnRpdGxlfWBcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgYXJ0aWNsZXNDb250YWluZXJcbiAgICAgICAgICAgIC5leGl0KCkucmVtb3ZlKClcbiAgICAgICAgICAgIC8vIC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAvLyAgICAgZDMuc2VsZWN0QWxsKFwiLmRvdFwiKVxuICAgICAgICAgICAgLy8gICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGQgPT4gY29uZGl0aW9uYWxDb2xvcihkLCBnb29kLCBiYWQpKVxuICAgICAgICAgICAgLy8gICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIGQgPT4gY29uZGl0aW9uYWxPcGFjaXR5KGQsIGdvb2QsIGJhZCkpO1xuICAgICAgICAgICAgLy8gICAgIGQzLnNlbGVjdChgI2RvdF8ke2l9YClcbiAgICAgICAgICAgIC8vICAgICAgICAgLmF0dHIoXCJyXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBiaWdEb3QgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGhhbmRsZURvdFVYKGQsIGJpZ0RvdCwgc2luZ2xlQXJ0aWNsZUluZm8sIDAuMik7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4gMTVcbiAgICAgICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgLy8gLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAvLyAgICAgZDMuc2VsZWN0QWxsKFwiLmRvdFwiKVxuICAgICAgICAgICAgLy8gICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGQgPT4gY29uZGl0aW9uYWxDb2xvcihkLCBnb29kLCBiYWQpKVxuICAgICAgICAgICAgLy8gICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIGQgPT4gY29uZGl0aW9uYWxPcGFjaXR5KGQsIGdvb2QsIGJhZCkpO1xuICAgICAgICAgICAgLy8gICAgIGQzLnNlbGVjdChgI2RvdF8ke2l9YClcbiAgICAgICAgICAgIC8vICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKVxuICAgICAgICAgICAgLy8gICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwibGlnaHRibHVlXCIpO1xuXG4gICAgICAgICAgICAvLyAgICAgZDMuc2VsZWN0QWxsKFwiLmFydGljbGUtbGlzdC1pdGVtXCIpXG4gICAgICAgICAgICAvLyAgICAgICAgIC5zdHlsZShcImJhY2tncm91bmRcIiwgZCA9PiBjb25kaXRpb25hbENvbG9yKGQsIGdvb2QsIGJhZCwgMC4xKSk7XG4gICAgICAgICAgICAvLyAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAvLyAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgZCA9PiBjb25kaXRpb25hbENvbG9yKGQsIGdvb2QsIGJhZCwgMC4zKSk7XG4gICAgICAgICAgICAvLyB9KVxuXG5cbiAgICAgICAgICAgIC8vIC5lYWNoKCBkID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIH0pXG5cbiAgICAgICAgY29uc3QgdXBkYXRlRG90cyA9IHN2Zy5zZWxlY3RBbGwoXCIuZG90XCIpXG4gICAgICAgICAgICAuZGF0YShzY2F0dGVyRGF0YSlcblxuICAgICAgICBsZXQgYmlnRG90O1xuICAgICAgICB1cGRhdGVEb3RzXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDE3MDApXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZG90XCIpXG4gICAgICAgICAgICAuYXR0cihcImN4XCIsIGQgPT4geyByZXR1cm4geHNjbChwYXJzZVRpbWUoZC54KSkgfSlcbiAgICAgICAgICAgIC5hdHRyKFwiY3lcIiwgZCA9PiB7IHJldHVybiB5c2NsKGQueSkgfSlcbiAgICAgICAgICAgIC5hdHRyKFwiclwiLCBmdW5jdGlvbihkLCBpKXtcbiAgICAgICAgICAgICAgICBsZXQgcjtcbiAgICAgICAgICAgICAgICBpZiAoZC50aXRsZSA9PT0gdG90YWwuaGlnaFNjb3JlLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJpZ0RvdCA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVEb3RVWChkLCBiaWdEb3QsIHNpbmdsZUFydGljbGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgciA9IDIwXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgciA9IDhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIGQgPT4gY29uZGl0aW9uYWxPcGFjaXR5KGQsIGdvb2QsIGJhZCkgKVxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBkID0+IGNvbmRpdGlvbmFsQ29sb3IoZCwgZ29vZCwgYmFkKSk7XG5cbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcIi5kb3RcIilcbiAgICAgICAgICAgIC5kYXRhKHNjYXR0ZXJEYXRhKVxuICAgICAgICAgICAgLmV4aXQoKS5yZW1vdmUoKTtcbiAgICB9XG59IiwiY29uc3QgY29uZGl0aW9uYWxUaXRsZUNvbG9yID0gKHRvdGFsKSA9PiB7XG4gICAgZDMuc2VsZWN0KFwiLmNoYXJ0LXRpdGxlXCIpXG4gICAgICAgIC5kYXRhKFt0b3RhbF0pXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmVhc2UoZDMuZWFzZUV4cClcbiAgICAgICAgLmR1cmF0aW9uKDIwMDApXG4gICAgICAgIC5zdHlsZShcImNvbG9yXCIsIGQgPT4ge1xuICAgICAgICAgICAgaWYgKGQuYXZlcmFnZSA+IDAuMTMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYHJnYmEoJHs0MCAqIE1hdGguc3FydChkLmF2ZXJhZ2UpfSwgJHsxMjggKiBNYXRoLnNxcnQoZC5hdmVyYWdlKX0sICR7NDAgKiBNYXRoLnNxcnQoZC5hdmVyYWdlKX0sIDAuOTcpYFxuICAgICAgICAgICAgfSBlbHNlIGlmIChkLmF2ZXJhZ2UgPCAtMC4xMykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgcmdiYSgkezEyOCAqIE1hdGguc3FydChNYXRoLmFicyhkLmF2ZXJhZ2UpKX0sICR7NDAgKiBNYXRoLnNxcnQoTWF0aC5hYnMoZC5hdmVyYWdlKSl9LCAkezQwICogTWF0aC5zcXJ0KE1hdGguYWJzKGQuYXZlcmFnZSkpfSwgMC45NylgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBgcmdiYSgkezI1NSAqIE1hdGguc3FydChNYXRoLmFicyhkLmF2ZXJhZ2UpKX0sICR7MjU1ICogTWF0aC5zcXJ0KE1hdGguYWJzKGQuYXZlcmFnZSkpfSwgJHsyNTUgKiBNYXRoLnNxcnQoTWF0aC5hYnMoZC5hdmVyYWdlKSl9LCAwLjgpYFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIGQzLnNlbGVjdChcIiNzZWNvbmQtdGl0bGVcIilcbiAgICAgICAgLmRhdGEoW3RvdGFsXSlcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAuZHVyYXRpb24oMjAwMClcbiAgICAgICAgLnN0eWxlKFwiY29sb3JcIiwgZCA9PiB7XG4gICAgICAgICAgICBpZiAoZC5hdmVyYWdlID4gMC4xMykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgcmdiYSgkezQwICogTWF0aC5zcXJ0KGQuYXZlcmFnZSl9LCAkezEyOCAqIE1hdGguc3FydChkLmF2ZXJhZ2UpfSwgJHs0MCAqIE1hdGguc3FydChkLmF2ZXJhZ2UpfSwgMC45NylgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGQuYXZlcmFnZSA8IC0wLjEzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7MTI4ICogTWF0aC5zcXJ0KE1hdGguYWJzKGQuYXZlcmFnZSkpfSwgJHs0MCAqIE1hdGguc3FydChNYXRoLmFicyhkLmF2ZXJhZ2UpKX0sICR7NDAgKiBNYXRoLnNxcnQoTWF0aC5hYnMoZC5hdmVyYWdlKSl9LCAwLjk3KWBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7MjU1ICogTWF0aC5zcXJ0KE1hdGguYWJzKGQuYXZlcmFnZSkpfSwgJHsyNTUgKiBNYXRoLnNxcnQoTWF0aC5hYnMoZC5hdmVyYWdlKSl9LCAkezI1NSAqIE1hdGguc3FydChNYXRoLmFicyhkLmF2ZXJhZ2UpKX0sIDAuOClgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG59XG5cbmNvbnN0IGNvbmRpdGlvbmFsRGlzcGxheSA9IChhdHRyX3ZhbHVlLCBjdXRvZmYsIGdyZWF0ZXJUaGFuID0gdHJ1ZSkgPT4ge1xuICAgIHN3aXRjaCAoZ3JlYXRlclRoYW4pIHtcbiAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgaWYgKGF0dHJfdmFsdWUgPiBjdXRvZmYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJub25lXCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaW5oZXJpdFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgICAgICBpZiAoYXR0cl92YWx1ZSA8IGN1dG9mZikge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIm5vbmVcIlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJpbmhlcml0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBcImluaGVyaXRcIlxuICAgIH1cbn1cblxuY29uc3QgY29uZGl0aW9uYWxPcGFjaXR5ID0gKGQsIGdvb2QsIGJhZCkgPT4ge1xuICAgIGlmIChkLnkgPj0gZ29vZCkge1xuICAgICAgICByZXR1cm4gXCIwLjVcIlxuICAgIH0gZWxzZSBpZiAoZC55IDw9IGJhZCkge1xuICAgICAgICByZXR1cm4gXCIwLjVcIlxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIjAuM1wiXG4gICAgfVxufVxuXG5jb25zdCBjb25kaXRpb25hbENvbG9yID0gKGQsIGdvb2QsIGJhZCwgb3BhY2l0eT0xKSA9PiB7XG4gICAgaWYgKGQueSA+PSBnb29kKSB7XG4gICAgICAgIHJldHVybiBgcmdiYSgwLDEyOCwwLCAke29wYWNpdHl9YFxuICAgIH0gZWxzZSBpZiAoZC55IDw9IGJhZCkge1xuICAgICAgICByZXR1cm4gYHJnYmEoMjU1LDAsMCwgJHtvcGFjaXR5fWBcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYHJnYmEoMjU1LDI1NSwyNTUsICR7b3BhY2l0eX1gXG4gICAgfVxufVxuXG5jb25zdCBmaWxsQXJ0aWNsZUluZm8gPSAoc2luZ2xlQXJ0aWNsZUluZm8sIGQpID0+IHtcbiAgICBzaW5nbGVBcnRpY2xlSW5mby5zZWxlY3QoXCIuYXJ0aWNsZS10aXRsZVwiKVxuICAgICAgICAuaHRtbChcbiAgICAgICAgICAgIGAke2QudGl0bGV9YFxuICAgICAgICApO1xuICAgIHNpbmdsZUFydGljbGVJbmZvLnNlbGVjdChcIi5hcnRpY2xlLWF1dGhvclwiKVxuICAgICAgICAuaHRtbChcbiAgICAgICAgICAgIGAke2QuYXV0aG9yfWBcbiAgICAgICAgKTtcbiAgICBzaW5nbGVBcnRpY2xlSW5mby5zZWxlY3QoXCIuYXJ0aWNsZS1zZW50aW1lbnRcIilcbiAgICAgICAgLmh0bWwoXG4gICAgICAgICAgICBgJHtkLnl9YFxuICAgICAgICApO1xuICAgIHNpbmdsZUFydGljbGVJbmZvLnNlbGVjdChcIi5hcnRpY2xlLXJlbGV2YW5jZVwiKVxuICAgICAgICAuaHRtbChcbiAgICAgICAgICAgIGAke2QucmVsZXZhbmNlfWBcbiAgICAgICAgKTtcbiAgICBzaW5nbGVBcnRpY2xlSW5mby5zZWxlY3QoXCIuYXJ0aWNsZS1kZXNjcmlwdGlvblwiKVxuICAgICAgICAuaHRtbChcbiAgICAgICAgICAgIGAke2QuZGVzY3JpcHRpb259YFxuICAgICAgICApO1xuICAgIHNpbmdsZUFydGljbGVJbmZvLnNlbGVjdChcIi5hcnRpY2xlLWltYWdlXCIpXG4gICAgICAgIC5hdHRyKFwic3JjXCIsIGAke2QuaW1hZ2V9YClcbiAgICBzaW5nbGVBcnRpY2xlSW5mby5zZWxlY3QoXCIucmVhZC1tb3JlXCIpXG4gICAgICAgIC5hdHRyKFwiaHJlZlwiLCBgJHtkLnVybH1gKVxufVxuXG5jb25zdCBoYW5kbGVEb3RVWCA9IChkLCBiaWdEb3QsIHNpbmdsZUFydGljbGVJbmZvLCBzcGVlZD0xKSA9PiB7XG4gICAgY29uc3QgZGVsYXkgPSAxODAwXG4gICAgaWYgKHNwZWVkID49IDEpe1xuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGJpZ0RvdFxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZGVsYXkoZGVsYXkpXG4gICAgICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUVsYXN0aWMpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKDIwMDApXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJyXCIsIDgpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcImRhcmtibHVlXCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcbiAgICAgICAgICAgIGlmKHNwZWVkID49IDEpe1xuICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzaW5nbGVBcnRpY2xlSW5mb1xuICAgICAgICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheShkZWxheSArIDEwMDApXG4gICAgICAgICAgICAgICAgICAgIC5kdXJhdGlvbigxMDApXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIiwgXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMylcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgZmlsbEFydGljbGVJbmZvKHNpbmdsZUFydGljbGVJbmZvLCBkKTtcblxuICAgICAgICAgICAgICAgICAgICBzaW5nbGVBcnRpY2xlSW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRlbGF5KGRlbGF5ICsgMTcwMClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kdXJhdGlvbigyMDApXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwidHJhbnNwYXJlbnRcIilcbiAgICAgICAgICAgICAgICAvLyB9LCA4MDAqc3BlZWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIC8vIH0sIGRlbGF5KnNwZWVkKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGJpZ0RvdFxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcImRhcmtibHVlXCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpO1xuICAgICAgICBiaWdEb3RcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VMaW5lYXIpXG4gICAgICAgICAgICAuZHVyYXRpb24oMzAwKVxuICAgICAgICAgICAgLmF0dHIoXCJyXCIsIDgpXG4gICAgICAgIGZpbGxBcnRpY2xlSW5mbyhzaW5nbGVBcnRpY2xlSW5mbywgZCk7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIGNvbmRpdGlvbmFsVGl0bGVDb2xvcixcbiAgICBjb25kaXRpb25hbERpc3BsYXksXG4gICAgY29uZGl0aW9uYWxPcGFjaXR5LFxuICAgIGNvbmRpdGlvbmFsQ29sb3IsXG4gICAgZmlsbEFydGljbGVJbmZvLFxuICAgIGhhbmRsZURvdFVYXG59IiwiaW1wb3J0ICcuL3N0eWxlcy9kZXZlbG9wbWVudC5jc3MnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuaW1wb3J0IHF1ZXJ5RmllbGQgZnJvbSAnLi9xdWVyeV9maWVsZCc7XG5pbXBvcnQgJy4vc3R5bGVzL21haW4uY3NzJztcblxuIFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgY29uc29sZS5sb2coXCJEZXZlbG9wbWVudCBNb2RlIVwiKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBwcm9wcyA9IHt9XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBjb25zdCBzZWNvbmRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2Vjb25kLXRpdGxlXCIpXG5cbiAgICAvLyBUZXN0aW5nIGJlY2F1c2UgSSBmb3Jnb3QgaG93IHRvIHZhbmlsbGEganNcbiAgICAvLyBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBjb25zdCBuZXdDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJJJ20gYmVpbmcgY3JlYXRlZCB3aXRoaW4gdGhlIGluZGV4LmpzIGZpbGUgdG8gdGVzdCBpZiBjaGFuZ2VzIHNob3dcIik7XG4gICAgLy8gbmV3RGl2LmFwcGVuZENoaWxkKG5ld0NvbnRlbnQpO1xuICAgIC8vIG1haW4uYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgICAvLyBUZXN0aW5nIGJlY2F1c2UgSSBmb3Jnb3QgaG93IHRvIHZhbmlsbGEganNcbiAgICBcbiAgICBjb25zdCBjaGFydCA9IG5ldyBDaGFydChwcm9wcylcbiAgICBwcm9wcy5jaGFydCA9IGNoYXJ0XG5cbiAgICBtYWluLmluc2VydEJlZm9yZShxdWVyeUZpZWxkKHByb3BzKSwgc2Vjb25kVGl0bGUpO1xuXG5cblxuICAgIGNvbnN0IGR1bW15RGF0YSA9IGNoYXJ0LmR1bW15RGF0YSgpO1xuICAgIGNoYXJ0LmJ1aWxkKGR1bW15RGF0YSk7XG5cbiAgICBcbiAgICBcbn0pXG4iLCJpbXBvcnQgeyBuZXdzX2FwaV9rZXkgfSBmcm9tICcuLi9jb25maWcva2V5cyc7XG5cbmNvbnN0IGhlYWRsaW5lcyA9ICdodHRwczovL25ld3NhcGkub3JnL3YyL3RvcC1oZWFkbGluZXM/JztcbmNvbnN0IGV2ZXJ5dGhpbmcgPSBcImh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvZXZlcnl0aGluZz9cIjtcbmNvbnN0IGFkZENvdW50cnkgPSBjb3VudHJ5ID0+IChgY291bnRyeT0ke2NvdW50cnl9JmApO1xuY29uc3QgYWRkU291cmNlID0gc291cmNlID0+IChgc291cmNlcz0ke3NvdXJjZX0mYCk7XG5jb25zdCBhZGRRdWVyeSA9IHF1ZXJ5ID0+IChgcT0ke3F1ZXJ5fSZgKTsgLy9zZWFyY2hlcyBmb3IgcXVlcnkgaW4gYm90aCB0aXRsZSBhbmQgYm9keVxuY29uc3QgYWRkRnJvbSA9IHN0YXJ0ID0+IChgZnJvbT0ke3N0YXJ0fSZgKTtcbmNvbnN0IHNvcnRCeSA9IG9wdGlvbiA9PiAoYHNvcnRCeT0ke29wdGlvbn0mYCk7XG5jb25zdCBhZGRUbyA9IGVuZCA9PiAoYHRvPSR7ZW5kfSZgKTtcbmNvbnN0IGFkZExhbmd1YWdlID0gbG4gPT4gKGBsYW5ndWFnZT0ke2xufSZgKTtcbmNvbnN0IGFkZFBhZ2VzaXplID0gaW50ID0+IChgcGFnZVNpemU9JHtpbnR9JmApO1xuY29uc3QgcGFnZSA9IGludCA9PiAoYHBhZ2U9JHtpbnR9JmApO1xuXG5jb25zdCBhcGlLZXkgPSBgYXBpS2V5PSR7bmV3c19hcGlfa2V5fWBcblxuZXhwb3J0IGNvbnN0IGZldGNoSGVhZGxpbmVzID0gKCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IGhlYWRsaW5lcyArIGFkZENvdW50cnkoJ3VzJykgKyBhcGlLZXk7XG4gICAgY29uc3QgcmVxID0gbmV3IFJlcXVlc3QodXJsKTtcbiAgICBjb25zb2xlLmxvZyhcIlJlcXVlc3RpbmcgdG9wIDIwIGhlYWRsaW5lcyFcIilcbiAgICByZXR1cm4gZmV0Y2gocmVxKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpKSkgICAgXG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hFdmVyeXRoaW5nRm9yID0gKHF1ZXJ5KSA9PiB7XG4gICAgY29uc3QgdXJsID0gZXZlcnl0aGluZyArIGFkZFF1ZXJ5KHF1ZXJ5KSArIGFkZExhbmd1YWdlKCdlbicpICsgYWRkUGFnZXNpemUoMTAwKSArIHNvcnRCeSgncmVsZXZhbmN5JykgKyBhcGlLZXk7XG4gICAgY29uc3QgcmVxID0gbmV3IFJlcXVlc3QodXJsKTtcbiAgICBjb25zb2xlLmxvZyhgUmVxdWVzdGluZyB0b3AgMjAgYXJ0aWNsZXMgYWJvdXQgJHtxdWVyeX0hYClcbiAgICByZXR1cm4gZmV0Y2gocmVxKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG59XG5cblxuIiwiaW1wb3J0IHsgZmV0Y2hFdmVyeXRoaW5nRm9yIH0gZnJvbSAnLi9uZXdzJ1xuaW1wb3J0IHsgcHJvY2Vzc0RhdGEgfSBmcm9tICcuL3NlbnRpbWVudCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIFxuICAgIGNvbnN0IHF1ZXJ5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcXVlcnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBxdWVyeUlucHV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicXVlcnktZmllbGRcIik7XG4gICAgXG4gICAgXG4gICAgZm9ybS5hcHBlbmRDaGlsZChxdWVyeUlucHV0KVxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IGRlYm91bmNlZFR5cGluZyhldmVudCwgcHJvcHMsIHF1ZXJ5SW5wdXQpKVxuICAgIC8vIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoKSA9PiB7IGhhbmRsZVR5cGluZyhldmVudCwgcHJvcHMsIHF1ZXJ5SW5wdXQpfSlcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4geyBldmVudC5wcmV2ZW50RGVmYXVsdCgpfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICBmb3JtXG4gICAgKVxufVxuXG5cbmNvbnN0IGhhbmRsZVR5cGluZyA9IChldmVudCxwcm9wcywgcXVlcnlJbnB1dCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY2hhcnQgPSBwcm9wcy5jaGFydFxuICAgIGNvbnN0IHZhbHVlID0gcXVlcnlJbnB1dC52YWx1ZTtcbiAgICBjb25zb2xlLmxvZyhgSSBXQVMgU1VCTUlUVEVEIFdJVEggVEhFIFRFWFQgJHt2YWx1ZX1gKVxuICAgIGZldGNoRXZlcnl0aGluZ0Zvcih2YWx1ZSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHt9XG4gICAgICAgICAgICBwYXlsb2FkLnF1ZXJ5ID0gdmFsdWVcbiAgICAgICAgICAgIHBheWxvYWQuYXJ0aWNsZXMgPSByZXNwb25zZS5hcnRpY2xlc1xuICAgICAgICAgICAgcmV0dXJuIHBheWxvYWRcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocGF5bG9hZCA9PiBwcm9jZXNzRGF0YShwYXlsb2FkKSkgXG4gICAgICAgIC50aGVuKChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlcmVuZGVyaW5nXCIpO1xuICAgICAgICAgICAgY2hhcnQucmVuZGVyKHBheWxvYWQpXG4gICAgICAgIH0pXG59XG5cblxuLy8gVXNlIGZvciB0ZXN0aW5nIGZ1bmN0aW9uYWxpdHksIHNvdXJjZWQgZnJvbTogaHR0cHM6Ly9jb2RlYnVyc3QuaW8vdGhyb3R0bGluZy1hbmQtZGVib3VuY2luZy1pbi1qYXZhc2NyaXB0LTY0NmQwNzZkMGE0NFxuY29uc3QgZGVib3VuY2UgPSAoZGVsYXksIGZuKSA9PiB7XG4gICAgbGV0IHRpbWVySWQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIGlmICh0aW1lcklkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZm4oLi4uYXJncyk7XG4gICAgICAgICAgICB0aW1lcklkID0gbnVsbDtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgIH1cbn1cblxuY29uc3QgZGVib3VuY2VkVHlwaW5nID0gZGVib3VuY2UoNzAwLCBoYW5kbGVUeXBpbmcpO1xuXG4iLCJpbXBvcnQgU2VudGltZW50IGZyb20gJ3NlbnRpbWVudCdcblxuXG5leHBvcnQgY29uc3QgcHJvY2Vzc0RhdGEgPSAoe2FydGljbGVzLCB2YWx1ZX0pID0+IHtcbiAgICBjb25zdCBwYXlsb2FkID0ge31cbiAgICBjb25zdCBzZW50aW1lbnQgPSBuZXcgU2VudGltZW50KCk7XG4gICAgY29uc3QgcHJvY2Vzc2luZ0RhdGEgPSBbXTtcbiAgICBjb25zdCByYXRpbyA9IDAuNlxuICAgIGRlYnVnZ2VyXG4gICAgYXJ0aWNsZXMuZm9yRWFjaChhcnRpY2xlID0+IHtcbiAgICAgICAgY29uc3QgZGF0dW0gPSB7fVxuICAgICAgICBkYXR1bS5jb250ZW50ID0gYXJ0aWNsZS5jb250ZW50IHx8IFwiXCJcbiAgICAgICAgZGF0dW0udGl0bGUgPSBhcnRpY2xlLnRpdGxlIHx8IFwiVW5uYW1lZFwiXG4gICAgICAgIGRhdHVtLmF1dGhvciA9IGFydGljbGUuYXV0aG9yIHx8IGRhdHVtLnRpdGxlXG4gICAgICAgIGRhdHVtLnNvdXJjZSA9IGFydGljbGUuc291cmNlLm5hbWVcbiAgICAgICAgZGF0dW0udXJsID0gYXJ0aWNsZS51cmxcbiAgICAgICAgZGF0dW0uaW1hZ2UgPSBhcnRpY2xlLnVybFRvSW1hZ2VcbiAgICAgICAgZGF0dW0uZGVzY3JpcHRpb24gPSBhcnRpY2xlLmRlc2NyaXB0aW9uIHx8IFwiVW5hdmFpbGFibGVcIjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNvbnRlbnRTZW50aW1lbnQgPSBzZW50aW1lbnQuYW5hbHl6ZShkYXR1bS5jb250ZW50KVxuICAgICAgICBjb25zdCB0aXRsZVNlbnRpbWVudCA9IHNlbnRpbWVudC5hbmFseXplKGRhdHVtLnRpdGxlKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgY29tcGFyYXRpdmUgPSBjb250ZW50U2VudGltZW50LmNvbXBhcmF0aXZlIDwgMC4wOCA/IE1hdGguYWJzKGNvbnRlbnRTZW50aW1lbnQuY29tcGFyYXRpdmUpLzAuNzUgOiBjb250ZW50U2VudGltZW50LmNvbXBhcmF0aXZlIC8vVEhJUyBJUyBPTkxZIEEgUExBQ0VIT0xERVIsIHVwZGF0ZSB0byBtb3JlIG1lYW5pbmdmdWxseSBhY2N1cmF0ZSBtZXRyaWMgYWZ0ZXIgYmFzaWNzXG4gICAgICAgIGRhdHVtLnJlbGV2YW5jZSA9IE1hdGgucm91bmQoY29tcGFyYXRpdmUgKiAxMDAwKS8xMDAwXG4gICAgICAgIGRhdHVtLnggPSBhcnRpY2xlLnB1Ymxpc2hlZEF0LnNwbGl0KFwiVFwiKVswXVxuICAgICAgICBjb25zdCBzY29yZSA9IChkYXR1bS5yZWxldmFuY2UvMC4yNSkgKiAoTWF0aC5yb3VuZCgoKGNvbnRlbnRTZW50aW1lbnQuc2NvcmUgKiByYXRpbykgKyAodGl0bGVTZW50aW1lbnQuc2NvcmUgKiAoMS1yYXRpbykpKSAqIDEwMDApIC8xMDAwKTtcbiAgICAgICAgZGF0dW0ueSA9IE1hdGgucm91bmQoc2NvcmUgKiAxMDAwKS8xMDAwXG4gICAgICAgIHByb2Nlc3NpbmdEYXRhLnB1c2goZGF0dW0pXG4gICAgfSlcbiAgICBwYXlsb2FkLnNjYXR0ZXJEYXRhID0gcHJvY2Vzc2luZ0RhdGEuc29ydChzb3J0RGF0ZURlc2MpO1xuICAgIHBheWxvYWQubGluZURhdGEgPSBhdmVyYWdlRGF5U2NvcmVzKHByb2Nlc3NpbmdEYXRhKTtcbiAgICBwYXlsb2FkLnRvdGFsID0gY2FsY3VsYXRlVG90YWxzKHByb2Nlc3NpbmdEYXRhKTtcblxuICAgIHJldHVybiBwYXlsb2FkXG59XG5cbmNvbnN0IGNhbGN1bGF0ZVRvdGFscyA9IGRhdGEgPT4ge1xuICAgIGNvbnN0IHRvdGFsID0ge31cbiAgICB0b3RhbC5oaWdoU2NvcmUgPSBkYXRhWzBdO1xuICAgIGRhdGEuZm9yRWFjaChkYXR1bSA9PiB7XG4gICAgICAgIHRvdGFsLnNjb3JlID0gdG90YWwuc2NvcmUgPyB0b3RhbC5zY29yZSArIGRhdHVtLnkgOiBkYXR1bS55XG4gICAgICAgIHRvdGFsLmNvdW50ID0gdG90YWwuY291bnQgPyB0b3RhbC5jb3VudCArIDEgOiAxXG4gICAgICAgIHRvdGFsLmhpZ2hTY29yZSA9IE1hdGguYWJzKGRhdHVtLnkpID4gTWF0aC5hYnModG90YWwuaGlnaFNjb3JlLnkpID8gZGF0dW0gOiB0b3RhbC5oaWdoU2NvcmVcbiAgICB9KVxuICAgIHRvdGFsLmF2ZXJhZ2UgPSB0b3RhbC5zY29yZS90b3RhbC5jb3VudDtcbiAgICByZXR1cm4gdG90YWxcbn1cblxuY29uc3QgYXZlcmFnZURheVNjb3JlcyA9IGRhdGEgPT4ge1xuICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSB7fVxuICAgIGNvbnN0IGNvdW50ID0ge31cbiAgICBkYXRhLmZvckVhY2goZGF0dW0gPT4ge1xuICAgICAgICBwcm9jZXNzZWREYXRhW2RhdHVtLnhdID0gcHJvY2Vzc2VkRGF0YVtkYXR1bS54XSA/IHByb2Nlc3NlZERhdGFbZGF0dW0ueF0gKyBkYXR1bS55IDogZGF0dW0ueTtcbiAgICAgICAgY291bnRbZGF0dW0ueF0gPSBjb3VudFtkYXR1bS54XSA/IGNvdW50W2RhdHVtLnhdICsgMSA6IDFcbiAgICB9KVxuXG4gICAgY29uc3QgYXZlcmFnZWREYXRhID0gW11cbiAgICBPYmplY3Qua2V5cyhwcm9jZXNzZWREYXRhKS5mb3JFYWNoKGRhdGUgPT4ge1xuICAgICAgICBhdmVyYWdlZERhdGEucHVzaCh7W2RhdGVdOiB7eDogZGF0ZSwgeTogTWF0aC5yb3VuZCgocHJvY2Vzc2VkRGF0YVtkYXRlXSAvIGNvdW50W2RhdGVdKSAqIDEwMDApIC8gMTAwMH19KTtcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IHNvcnRlZEF2ZXJhZ2VkRGF0YSA9IGF2ZXJhZ2VkRGF0YS5zb3J0KHNvcnREYXRlKVxuICAgIHJldHVybiBzb3J0ZWRBdmVyYWdlZERhdGFcbn1cblxuY29uc3Qgc29ydERhdGUgPSAoYSwgYikgPT4ge1xuICAgIGNvbnN0IGRhdGUxID0gbmV3IERhdGUoYS54KVxuICAgIGNvbnN0IGRhdGUyID0gbmV3IERhdGUoYi54KVxuICAgIGlmIChkYXRlMSA+PSBkYXRlMil7IFxuICAgICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgIH1cbn07XG5cbmNvbnN0IHNvcnREYXRlRGVzYyA9IChiLCBhKSA9PiB7XG4gICAgY29uc3QgZGF0ZTEgPSBuZXcgRGF0ZShhLngpXG4gICAgY29uc3QgZGF0ZTIgPSBuZXcgRGF0ZShiLngpXG4gICAgaWYgKGRhdGUxID49IGRhdGUyKXsgXG4gICAgICAgIHJldHVybiAxXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgfVxufVxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9