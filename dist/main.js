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
        this.svg = d3.select('svg').attr('width', this.width + this.margin.left + this.margin.right).attr('height', this.height + this.margin.top + this.margin.bottom).style('background-color', 'transparent').append("g").attr("transform", 'translate(' + this.margin.left + ', ' + this.margin.top + ')');
        var today = new Date();
        this.startDate = new Date(today.setDate(today.getDate() - 31));
        this.endDate = new Date();
        this.dateRange = (0, _chart_utils.generateDateRange)(this.startDate, this.endDate);
        this.xFormat = "%b-%d";
        this.initialize = true;
    }

    _createClass(Chart, [{
        key: 'dummyData',
        value: function dummyData() {
            var dummyData = [];
            var dataLength = 31;
            var mag = 25;
            for (var x = 0; x < dataLength; x++) {
                var y = Math.floor(Math.random() * 2 * mag) - mag;
                var datum = { x: Object.keys(this.dateRange[x])[0], y: y };
                dummyData.push(datum);
            }
            return dummyData;
        }
    }, {
        key: 'build',
        value: function build(data) {
            var svg = this.svg,
                height = this.height,
                width = this.width,
                good = this.good,
                bad = this.bad,
                xFormat = this.xFormat,
                margin = this.margin;

            var xdata = [];
            var ydata = [];
            data.forEach(function (datum) {
                xdata.push(datum.x);
                ydata.push(datum.y);
            });
            var parseTime = d3.timeParse("%Y-%m-%d");
            var xscl = d3.scaleTime().domain(d3.extent(data, function (d) {
                return parseTime(d.x);
            })).range([0, width]);

            var x_axis = d3.axisBottom().scale(xscl);

            var yscl = d3.scaleLinear().domain([d3.max(ydata), d3.min(ydata)]).range([0, height]);

            var y_axis = d3.axisLeft().scale(yscl);

            svg.append("g").attr("transform", 'translate(0,' + yscl(0) + ')').attr("class", 'xaxis').call(x_axis);

            // svg.select(".xaxis > path")
            //     .style("opacity", 0);

            // svg.selectAll(".xaxis > .tick > line")
            //     .style("opacity", 0);


            svg.select(".xaxis").attr("transform", 'translate(0,' + yscl(0) + ')').call(x_axis.tickFormat(d3.timeFormat(xFormat))).selectAll("text").attr("y", 0).attr("x", 9).attr("dy", ".35em").style("text-anchor", "start").style("opacity", 0);

            svg.append("g").attr("class", 'yaxis').call(y_axis.tickSize(0).tickSizeOuter(5)).style("opacity", "0").selectAll("text").remove();

            // create line generator
            var line = d3.line().x(function (d) {
                return xscl(parseTime(d.x));
            }).y(function (d) {
                return yscl(d.y);
            }).curve(d3.curveBundle.beta(0.85));

            //good-label
            svg.append("text").attr("y", yscl(good) - 5).attr("x", 15).attr("class", "good-label").attr("text-anchor", "right").style("fill", "transparent")
            // .style("fill", "rgba(0, 128, 0, 0.6)")
            .text("+ sentiment");

            //bad-label
            svg.append("text").attr("y", yscl(bad) + 15).attr("x", 15).attr("class", "bad-label").attr("text-anchor", "right").style("fill", "transparent")
            // .style("fill", "rgba(200, 0, 0, 0.6)")
            .text("- sentiment");

            //build good-line
            svg.append("line").attr("x1", 0).attr("y1", yscl(good)).attr("x2", width).attr("y2", yscl(good)).attr("fill", "none").attr("stroke", "transparent").attr("stroke-width", "1px").attr("class", "good-line").style("stroke-dasharray", "3, 3");

            // build bad-line
            svg.append("line").attr("x1", 0).attr("y1", yscl(bad)).attr("x2", width).attr("y2", yscl(bad)).attr("fill", "none").attr("stroke", "transparent").attr("stroke-width", "1px").attr("class", "bad-line").style("stroke-dasharray", "3, 3");

            // draw the line
            svg.append('path').attr("fill", "none").attr("stroke", "transparent").attr("stroke-width", "3px").attr("stroke-linecap", "round").data([data]).attr("class", "line").attr("d", line);

            d3.select("#chart").style("box-shadow", "1px 1px 5px 0px black");
            d3.select("#articles-list").style("box-shadow", "1px 1px 5px 0px black");
            d3.select(".article-info").style("box-shadow", "1px 1px 5px 0px black");

            // d3.select("#chart")
            //     .style("box-shadow", "0px 0px 0px 0px black")

            // d3.select("#articles-list")
            //     .style("box-shadow", "0px 0px 0px 0px black")
            // d3.select(".article-info")
            //     .style("box-shadow", "0px 0px 0px 0px black")
        }
    }, {
        key: 'render',
        value: function render(payload) {
            var scatterData = payload.scatterData,
                total = payload.total;
            var svg = this.svg,
                height = this.height,
                width = this.width,
                good = this.good,
                bad = this.bad,
                xFormat = this.xFormat;

            var ydata = [];
            var xdata = [];
            var singleArticleInfo = d3.select(".article-info-container");
            var lineData = (0, _chart_utils.mergeLineData)(this.dateRange, payload.lineData);
            var initialize_duration = void 0;
            if (this.initialize) {
                initialize_duration = 1500;
            } else {
                initialize_duration = 0;
            }
            console.log(this.initialize);
            console.log(initialize_duration);
            this.initialize = (0, _chart_utils.initialRender)(svg, initialize_duration);

            scatterData.forEach(function (datum) {
                ydata.push(datum.y);
                xdata.push(datum.x);
            });

            var parseTime = d3.timeParse("%Y-%m-%d");

            var xscl = d3.scaleTime().domain(d3.extent(lineData, function (d) {
                return parseTime(d.x);
            })).range([0, width]);

            var x_axis = d3.axisBottom().scale(xscl);

            var yscl = d3.scaleLinear().domain([d3.max(ydata), d3.min(ydata)]).range([0, height]);

            var y_axis = d3.axisLeft().scale(yscl);

            var labels = d3.selectAll(".label").transition().delay(initialize_duration).ease(d3.easeExp).duration(1700).style("color", "rgba(255,255,255, 0.7)");
            var readMore = d3.select(".read-more").transition().delay(initialize_duration).ease(d3.easeExp).duration(1700).style("color", "rgba(255,255,255, 0.7)");

            svg.select(".xaxis").transition().delay(initialize_duration).ease(d3.easeExp).duration(1700).attr("transform", 'translate(0,' + yscl(0) + ')').call(x_axis.tickFormat(d3.timeFormat(xFormat))).selectAll("text").attr("y", 0).attr("x", 9).attr("dy", ".35em").attr("transform", "rotate(90)").style("text-anchor", "start").style("fill", "white").style("opacity", 1);

            svg.select(".good-label").transition().delay(initialize_duration).ease(d3.easeExp).duration(1700).attr("y", yscl(good) - 5).attr("x", 15).attr("display", function () {
                return (0, _chart_utils.conditionalDisplay)(yscl(good), 0, false);
            }).style("fill", "rgba(0, 128, 0, 0.6)");

            svg.select(".bad-label").transition().delay(initialize_duration).ease(d3.easeExp).duration(1700).attr("y", yscl(bad) + 15).attr("x", 15).attr("display", function () {
                return (0, _chart_utils.conditionalDisplay)(yscl(bad), height, true);
            }).style("fill", "rgba(200, 0, 0, 0.6)");

            svg.select(".yaxis").transition().delay(initialize_duration).ease(d3.easeExp).duration(1700).call(y_axis.tickSize(0).tickSizeOuter(5)).selectAll("text").style("fill", "white");
            svg.select(".yaxis").selectAll("text").remove();

            var line = d3.line().x(function (d) {
                return xscl(parseTime(d.x));
            }).y(function (d) {
                return yscl(d.y);
            }).curve(d3.curveBundle.beta(0.85));

            var path = svg.selectAll('.line');
            path.data([lineData]).transition().delay(initialize_duration).ease(d3.easeExp).duration(1700).attr("class", "line").style("stroke", "rgba(0, 0, 139, 0.8)").attr("d", line);

            svg.select(".good-line").transition().delay(initialize_duration).ease(d3.easeExp).duration(1700).attr("x1", 0).attr("y1", yscl(good)).attr("x2", width).attr("y2", yscl(good)).attr("display", function () {
                return (0, _chart_utils.conditionalDisplay)(yscl(good), 0, false);
            }).style("stroke", "rgba(0, 128, 0, 0.6)").style("stroke-width", "2px");

            svg.select(".bad-line").transition().delay(initialize_duration).ease(d3.easeExp).duration(1700).attr("x1", 0).attr("y1", yscl(bad)).attr("x2", width).attr("y2", yscl(bad)).attr("display", function () {
                return (0, _chart_utils.conditionalDisplay)(yscl(bad), height, true);
            }).style("stroke", "rgba(200, 0, 0, 0.6)").style("stroke-width", "2px");

            var createDots = svg.selectAll(".dot").data(scatterData).enter().append("circle").attr("class", "dot");

            createDots.on("click", function (d) {
                window.open(d.url, "_blank");
            }).on("mouseover", function (d, i) {
                d3.selectAll(".dot").style("fill", function (d) {
                    return (0, _chart_utils.conditionalColor)(d, good, bad);
                }).style("opacity", function (d) {
                    return (0, _chart_utils.conditionalOpacity)(d, good, bad);
                });
                var dot = d3.select(this).style("opacity", 1).style("fill", "darkblue");

                dot.transition().ease(d3.easeElastic).duration(500).attr("r", 20);

                d3.selectAll(".article-list-item").style("background", function (d) {
                    return (0, _chart_utils.conditionalColor)(d, good, bad, 0.3);
                });
                d3.select('#article_' + i).style("background", "rgba(0, 0, 139, 0.5)");

                (0, _chart_utils.fillArticleInfo)(singleArticleInfo, d);
            }).on("mouseout", function (d) {
                d3.select(this).transition().ease(d3.easeElastic).duration(500).attr("r", 8);
            });

            createDots.transition().delay(initialize_duration).ease(d3.easeExp).duration(1700).attr("cx", function (d) {
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
                return date.toLocaleDateString("en-US", options) + ': ' + d.title;
            }).on("click", function (d, i) {
                d3.selectAll(".dot").style("fill", function (d) {
                    return (0, _chart_utils.conditionalColor)(d, good, bad);
                }).style("opacity", function (d) {
                    return (0, _chart_utils.conditionalOpacity)(d, good, bad);
                });
                d3.select('#dot_' + i).attr("r", function (d, i) {
                    bigDot = d3.select(this);
                    (0, _chart_utils.handleDotUX)(d, bigDot, singleArticleInfo, 0.2);
                    return 20;
                });
            }).on("mouseover", function (d, i) {
                d3.selectAll(".article-list-item").style("background", function (d) {
                    return (0, _chart_utils.conditionalColor)(d, good, bad, 0.3);
                });
                d3.select(this).style("background", "rgba(0, 0, 139, 0.5)");

                d3.selectAll(".dot").style("fill", function (d) {
                    return (0, _chart_utils.conditionalColor)(d, good, bad);
                }).style("opacity", function (d) {
                    return (0, _chart_utils.conditionalOpacity)(d, good, bad);
                });
                d3.select('#dot_' + i).style("opacity", 1).style("fill", "darkblue");
            });

            d3.selectAll(".article-list-item").transition("appear-articles").ease(d3.easeCubic).duration(1500).style("opacity", 1);

            articlesContainer.style("background", function (d) {
                return (0, _chart_utils.conditionalColor)(d, good, bad, 0.3);
            }).text(function (d) {
                var date = new Date(d.x);
                var options = { month: 'short', day: 'numeric' };
                return date.toLocaleDateString("en-US", options) + ': ' + d.title;
            });

            articlesContainer.exit().remove();

            var updateDots = svg.selectAll(".dot").data(scatterData);

            var bigDot = void 0;
            updateDots.transition().delay(initialize_duration).ease(d3.easeExp).duration(1700).attr("class", "dot").attr("cx", function (d) {
                return xscl(parseTime(d.x));
            }).attr("cy", function (d) {
                return yscl(d.y);
            }).attr("r", function (d, i) {
                var r = void 0;
                if (d.title === total.highScore.title) {
                    bigDot = d3.select(this);
                    (0, _chart_utils.handleDotUX)(d, bigDot, singleArticleInfo, 1, initialize_duration);
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    var intialize_duration = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    var delay = 2000 + intialize_duration;
    console.log(delay);
    if (speed >= 1) {
        // setTimeout(() => {
        bigDot.transition().delay(delay).ease(d3.easeElastic).duration(2500).attr("r", 8).style("fill", "darkblue").style("opacity", 1);
        if (speed >= 1) {
            // setTimeout(() => {
            singleArticleInfo.transition().delay(delay + 500).duration(800).style("background-color", "rgba(0, 0, 139, 0.5)");

            fillArticleInfo(singleArticleInfo, d);

            singleArticleInfo.transition().delay(delay + 1350).duration(800).style("background-color", "transparent");
            // }, 800*speed)
        }
        // }, delay*speed)
    } else {
        bigDot.style("fill", "darkblue").style("opacity", 1);
        bigDot.transition().ease(d3.easeLinear).duration(300).attr("r", 8);
        fillArticleInfo(singleArticleInfo, d);
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

var sortDate = function sortDate(a, b) {
    var date1 = new Date(a.x);
    var date2 = new Date(b.x);
    if (date1 >= date2) {
        return 1;
    } else {
        return -1;
    }
};

var mergeLineData = function mergeLineData(dateRange, lineData) {
    var mergedData = Object.assign([], dateRange, lineData);
    var unkeyedData = [];
    mergedData.forEach(function (outerDatum) {
        unkeyedData.push(Object.values(outerDatum));
    });
    return unkeyedData.flat().sort(sortDate);
};

var initialRender = function initialRender(svg, intialize_duration, total) {
    // d3.select("#chart")
    //     .transition()
    //     .ease(d3.easeCubic)
    //     .duration(intialize_duration)
    //     .style("box-shadow", "1px 1px 5px 0px black")
    // d3.select("#articles-list")
    //     .transition()
    //     .ease(d3.easeCubic)
    //     .duration(intialize_duration)
    //     .style("box-shadow", "1px 1px 5px 0px black")
    // d3.select(".article-info")
    //     .transition()
    //     .ease(d3.easeCubic)
    //     .duration(intialize_duration)
    //     .style("box-shadow", "1px 1px 5px 0px black")

    // svg.select(".xaxis > path")
    //     .transition("appear")
    //     .ease(d3.easeCubic)
    //     .duration(intialize_duration)
    //     .style("opacity", 1)

    // svg.selectAll(".xaxis > .tick > line")
    //     .transition("appear")
    //     .ease(d3.easeCubic)
    //     .duration(intialize_duration)
    //     .style("opacity", 1)

    // svg.select(".yaxis")
    //     .transition("appear")
    //     .ease(d3.easeCubic)
    //     .duration(intialize_duration)
    //     .style("opacity", 1)

    d3.select("#main").transition("appear").ease(d3.easeCubic).duration(intialize_duration * 0.8).style("top", "0px");
    // .style("background", "rgba(0,0,0,0.05)")

    d3.select(".article-image").transition("appear").delay(500).ease(d3.easeCubic).duration(intialize_duration + 300).style("opacity", 1);

    d3.select(".info-container").transition("appear").delay(500).ease(d3.easeCubic).duration(intialize_duration + 300).style("opacity", 1);

    return false;
};

exports.conditionalTitleColor = conditionalTitleColor;
exports.conditionalDisplay = conditionalDisplay;
exports.conditionalOpacity = conditionalOpacity;
exports.conditionalColor = conditionalColor;
exports.fillArticleInfo = fillArticleInfo;
exports.handleDotUX = handleDotUX;
exports.generateDateRange = generateDateRange;
exports.sortDate = sortDate;
exports.mergeLineData = mergeLineData;
exports.initialRender = initialRender;

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
    queryInput.setAttribute("z-index", "100");

    setTimeout(function () {
        typingWord(queryInput);
    }, 1000);

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

var typingWord = function typingWord(queryInput) {
    var options = ["Hong Kong", "bees", "bears", "beets", "Congress", "paper sales", "cheese", "the news", "penguins", "the senate", "the democratic debate", "the 2020 election", "SpaceX", "artificial intelligence", "healthcare", "virtual reality", "dogs"];
    var str = options[Math.floor(Math.random() * options.length)];
    var i = 0;

    var cycle = setInterval(function () {
        var rand = Math.random();
        if (rand > 0.3) {
            i++;
            queryInput.setAttribute("placeholder", str.slice(0, i));
        }
        if (i >= str.length) {
            clearInterval(cycle);
            queryInput.removeEventListener("focus", clearInput(queryInput, cycle));
            setTimeout(function () {
                queryInput.setAttribute("placeholder", "");
                typingWord(queryInput);
            }, 1500);
        }
    }, 200);
    queryInput.addEventListener("focus", clearInput(queryInput, cycle));
};

var clearInput = function clearInput(queryInput, cycle) {
    return function () {
        clearInterval(cycle);
        queryInput.setAttribute("placeholder", "");
    };
};

var handleTyping = function handleTyping(event, props, queryInput) {
    event.preventDefault();
    var chart = props.chart;
    var value = queryInput.value;

    (0, _news.fetchEverythingFor)(value).then(function (response) {
        var payload = {};
        payload.query = value;
        payload.articles = response.articles;
        return payload;
    }).then(function (payload) {
        return (0, _sentiment.processData)(payload);
    }).then(function (payload) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xhbmd1YWdlcyBzeW5jIF5cXC5cXC8uKlxcL2luZGV4JCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xhbmd1YWdlcy9lbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xhbmd1YWdlcy9lbi9zY29yaW5nLXN0cmF0ZWd5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZW50aW1lbnQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZW50aW1lbnQvbGliL2xhbmd1YWdlLXByb2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xpYi90b2tlbml6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0X3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlcnlfZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbnRpbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2RldmVsb3BtZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uY3NzIl0sIm5hbWVzIjpbIm5ld3NfYXBpX2tleSIsInByb2Nlc3MiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJFcnJvciIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZSIsImNsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJjYWxsIiwicnVuQ2xlYXJUaW1lb3V0IiwibWFya2VyIiwicXVldWUiLCJkcmFpbmluZyIsImN1cnJlbnRRdWV1ZSIsInF1ZXVlSW5kZXgiLCJjbGVhblVwTmV4dFRpY2siLCJsZW5ndGgiLCJjb25jYXQiLCJkcmFpblF1ZXVlIiwidGltZW91dCIsImxlbiIsInJ1biIsIm5leHRUaWNrIiwiYXJncyIsIkFycmF5IiwiYXJndW1lbnRzIiwiaSIsInB1c2giLCJJdGVtIiwiYXJyYXkiLCJwcm90b3R5cGUiLCJhcHBseSIsInRpdGxlIiwiYnJvd3NlciIsImVudiIsImFyZ3YiLCJ2ZXJzaW9uIiwidmVyc2lvbnMiLCJub29wIiwib24iLCJhZGRMaXN0ZW5lciIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsImVtaXQiLCJwcmVwZW5kTGlzdGVuZXIiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwibGlzdGVuZXJzIiwibmFtZSIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwibGFiZWxzIiwicmVxdWlyZSIsInNjb3JpbmdTdHJhdGVneSIsIm5lZ2F0b3JzIiwidG9rZW5zIiwiY3Vyc29yIiwidG9rZW5TY29yZSIsInByZXZ0b2tlbiIsInRva2VuaXplIiwibGFuZ3VhZ2VQcm9jZXNzb3IiLCJTZW50aW1lbnQiLCJvcHRpb25zIiwicmVnaXN0ZXJMYW5ndWFnZSIsImxhbmd1YWdlQ29kZSIsImxhbmd1YWdlIiwiYWRkTGFuZ3VhZ2UiLCJhbmFseXplIiwicGhyYXNlIiwib3B0cyIsImNhbGxiYWNrIiwiZ2V0TGFiZWxzIiwiZXh0cmFzIiwiT2JqZWN0IiwiYXNzaWduIiwic2NvcmUiLCJ3b3JkcyIsInBvc2l0aXZlIiwibmVnYXRpdmUiLCJvYmoiLCJoYXNPd25Qcm9wZXJ0eSIsImFwcGx5U2NvcmluZ1N0cmF0ZWd5IiwicmVzdWx0IiwiY29tcGFyYXRpdmUiLCJlbW9qaXMiLCJlbkxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiZW4iLCJnZXRMYW5ndWFnZSIsImVyciIsImRlZmF1bHRTY29yaW5nU3RyYXRlZ3kiLCJpbnB1dCIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInNwbGl0IiwiQ2hhcnQiLCJwcm9wcyIsImRhdGEiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJjdXRvZmYiLCJnb29kIiwiYmFkIiwid2lkdGgiLCJoZWlnaHQiLCJzdmciLCJkMyIsInNlbGVjdCIsImF0dHIiLCJzdHlsZSIsImFwcGVuZCIsInRvZGF5IiwiRGF0ZSIsInN0YXJ0RGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwiZW5kRGF0ZSIsImRhdGVSYW5nZSIsInhGb3JtYXQiLCJpbml0aWFsaXplIiwiZHVtbXlEYXRhIiwiZGF0YUxlbmd0aCIsIm1hZyIsIngiLCJ5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZGF0dW0iLCJrZXlzIiwieGRhdGEiLCJ5ZGF0YSIsImZvckVhY2giLCJwYXJzZVRpbWUiLCJ0aW1lUGFyc2UiLCJ4c2NsIiwic2NhbGVUaW1lIiwiZG9tYWluIiwiZXh0ZW50IiwiZCIsInJhbmdlIiwieF9heGlzIiwiYXhpc0JvdHRvbSIsInNjYWxlIiwieXNjbCIsInNjYWxlTGluZWFyIiwibWF4IiwibWluIiwieV9heGlzIiwiYXhpc0xlZnQiLCJ0aWNrRm9ybWF0IiwidGltZUZvcm1hdCIsInNlbGVjdEFsbCIsInRpY2tTaXplIiwidGlja1NpemVPdXRlciIsInJlbW92ZSIsImxpbmUiLCJjdXJ2ZSIsImN1cnZlQnVuZGxlIiwiYmV0YSIsInRleHQiLCJwYXlsb2FkIiwic2NhdHRlckRhdGEiLCJ0b3RhbCIsInNpbmdsZUFydGljbGVJbmZvIiwibGluZURhdGEiLCJpbml0aWFsaXplX2R1cmF0aW9uIiwiY29uc29sZSIsImxvZyIsInRyYW5zaXRpb24iLCJkZWxheSIsImVhc2UiLCJlYXNlRXhwIiwiZHVyYXRpb24iLCJyZWFkTW9yZSIsInBhdGgiLCJjcmVhdGVEb3RzIiwiZW50ZXIiLCJ3aW5kb3ciLCJvcGVuIiwidXJsIiwiZG90IiwiZWFzZUVsYXN0aWMiLCJoaWdoU2NvcmUiLCJfIiwiYXJ0aWNsZXNDb250YWluZXIiLCJkYXRlIiwibW9udGgiLCJkYXkiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJiaWdEb3QiLCJlYXNlQ3ViaWMiLCJleGl0IiwidXBkYXRlRG90cyIsInIiLCJjb25kaXRpb25hbFRpdGxlQ29sb3IiLCJhdmVyYWdlIiwic3FydCIsImFicyIsImNvbmRpdGlvbmFsRGlzcGxheSIsImF0dHJfdmFsdWUiLCJncmVhdGVyVGhhbiIsImNvbmRpdGlvbmFsT3BhY2l0eSIsImNvbmRpdGlvbmFsQ29sb3IiLCJvcGFjaXR5IiwiZmlsbEFydGljbGVJbmZvIiwic291cmNlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImhhbmRsZURvdFVYIiwic3BlZWQiLCJpbnRpYWxpemVfZHVyYXRpb24iLCJlYXNlTGluZWFyIiwiYWRkRGF5IiwiZ2VuZXJhdGVEYXRlUmFuZ2UiLCJkYXRlcyIsImN1cnJlbnREYXRlIiwiZm9ybWF0dGVkRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJzb3J0RGF0ZSIsImEiLCJiIiwiZGF0ZTEiLCJkYXRlMiIsIm1lcmdlTGluZURhdGEiLCJtZXJnZWREYXRhIiwidW5rZXllZERhdGEiLCJ2YWx1ZXMiLCJvdXRlckRhdHVtIiwiZmxhdCIsInNvcnQiLCJpbml0aWFsUmVuZGVyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFpbiIsImdldEVsZW1lbnRCeUlkIiwic2Vjb25kVGl0bGUiLCJjaGFydCIsImluc2VydEJlZm9yZSIsImJ1aWxkIiwiaGVhZGxpbmVzIiwiZXZlcnl0aGluZyIsImFkZENvdW50cnkiLCJjb3VudHJ5IiwiYWRkU291cmNlIiwiYWRkUXVlcnkiLCJxdWVyeSIsImFkZEZyb20iLCJzdGFydCIsInNvcnRCeSIsIm9wdGlvbiIsImFkZFRvIiwiZW5kIiwibG4iLCJhZGRQYWdlc2l6ZSIsImludCIsInBhZ2UiLCJhcGlLZXkiLCJmZXRjaEhlYWRsaW5lcyIsInJlcSIsIlJlcXVlc3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJmZXRjaEV2ZXJ5dGhpbmdGb3IiLCJmb3JtIiwiY3JlYXRlRWxlbWVudCIsInF1ZXJ5SW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJ0eXBpbmdXb3JkIiwiYXBwZW5kQ2hpbGQiLCJkZWJvdW5jZWRUeXBpbmciLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RyIiwiY3ljbGUiLCJzZXRJbnRlcnZhbCIsInJhbmQiLCJzbGljZSIsImNsZWFySW50ZXJ2YWwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xlYXJJbnB1dCIsImhhbmRsZVR5cGluZyIsInZhbHVlIiwiYXJ0aWNsZXMiLCJyZW5kZXIiLCJkZWJvdW5jZSIsImZuIiwidGltZXJJZCIsInByb2Nlc3NEYXRhIiwic2VudGltZW50IiwicHJvY2Vzc2luZ0RhdGEiLCJyYXRpbyIsImNvbnRlbnQiLCJhcnRpY2xlIiwiYXV0aG9yIiwidXJsVG9JbWFnZSIsImNvbnRlbnRTZW50aW1lbnQiLCJ0aXRsZVNlbnRpbWVudCIsInJlbGV2YW5jZSIsInJvdW5kIiwicHVibGlzaGVkQXQiLCJzb3J0RGF0ZURlc2MiLCJhdmVyYWdlRGF5U2NvcmVzIiwiY2FsY3VsYXRlVG90YWxzIiwiY291bnQiLCJwcm9jZXNzZWREYXRhIiwiYXZlcmFnZWREYXRhIiwic29ydGVkQXZlcmFnZWREYXRhIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNB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QVI7QUFDSDtBQUNKLENBUkQsQzs7Ozs7Ozs7Ozs7QUMzRUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGNvbnN0IG5ld3NfYXBpX2tleSA9IFwiZDNhOTMxODkxYzExNDc5ZWFlYmFhOGFkYjMyYWYyNDZcIiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vZW4vaW5kZXhcIjogXCIuL25vZGVfbW9kdWxlcy9zZW50aW1lbnQvbGFuZ3VhZ2VzL2VuL2luZGV4LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL3NlbnRpbWVudC9sYW5ndWFnZXMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwvaW5kZXgkXCI7IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbGFiZWxzOiByZXF1aXJlKCcuL2xhYmVscy5qc29uJyksXG4gICAgc2NvcmluZ1N0cmF0ZWd5OiByZXF1aXJlKCcuL3Njb3Jpbmctc3RyYXRlZ3knKVxufTtcbiIsInZhciBuZWdhdG9ycyA9IHJlcXVpcmUoJy4vbmVnYXRvcnMuanNvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBhcHBseTogZnVuY3Rpb24odG9rZW5zLCBjdXJzb3IsIHRva2VuU2NvcmUpIHtcbiAgICAgICAgaWYgKGN1cnNvciA+IDApIHtcbiAgICAgICAgICAgIHZhciBwcmV2dG9rZW4gPSB0b2tlbnNbY3Vyc29yIC0gMV07XG4gICAgICAgICAgICBpZiAobmVnYXRvcnNbcHJldnRva2VuXSkge1xuICAgICAgICAgICAgICAgIHRva2VuU2NvcmUgPSAtdG9rZW5TY29yZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW5TY29yZTtcbiAgICB9XG59O1xuIiwidmFyIHRva2VuaXplID0gcmVxdWlyZSgnLi90b2tlbml6ZScpO1xudmFyIGxhbmd1YWdlUHJvY2Vzc29yID0gcmVxdWlyZSgnLi9sYW5ndWFnZS1wcm9jZXNzb3InKTtcblxuLyoqXG4gKiBDb25zdHJ1Y3RvclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBJbnN0YW5jZSBvcHRpb25zXG4gKi9cbnZhciBTZW50aW1lbnQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVycyB0aGUgc3BlY2lmaWVkIGxhbmd1YWdlXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGxhbmd1YWdlQ29kZVxuICogICAgIC0gVHdvLWRpZ2l0IGNvZGUgZm9yIHRoZSBsYW5ndWFnZSB0byByZWdpc3RlclxuICogQHBhcmFtIHtPYmplY3R9IGxhbmd1YWdlXG4gKiAgICAgLSBUaGUgbGFuZ3VhZ2UgbW9kdWxlIHRvIHJlZ2lzdGVyXG4gKi9cblNlbnRpbWVudC5wcm90b3R5cGUucmVnaXN0ZXJMYW5ndWFnZSA9IGZ1bmN0aW9uIChsYW5ndWFnZUNvZGUsIGxhbmd1YWdlKSB7XG4gICAgbGFuZ3VhZ2VQcm9jZXNzb3IuYWRkTGFuZ3VhZ2UobGFuZ3VhZ2VDb2RlLCBsYW5ndWFnZSk7XG59O1xuXG4vKipcbiAqIFBlcmZvcm1zIHNlbnRpbWVudCBhbmFseXNpcyBvbiB0aGUgcHJvdmlkZWQgaW5wdXQgJ3BocmFzZScuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHBocmFzZVxuICogICAgIC0gSW5wdXQgcGhyYXNlXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICogICAgIC0gT3B0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IG9wdHMubGFuZ3VhZ2VcbiAqICAgICAtIElucHV0IGxhbmd1YWdlIGNvZGUgKDIgZGlnaXQgY29kZSksIGRlZmF1bHRzIHRvICdlbidcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmV4dHJhc1xuICogICAgIC0gT3B0aW9uYWwgc2VudGltZW50IGFkZGl0aW9ucyB0byBBRklOTiAoaGFzaCBrL3YgcGFpcnMpXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogICAgIC0gT3B0aW9uYWwgY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuU2VudGltZW50LnByb3RvdHlwZS5hbmFseXplID0gZnVuY3Rpb24gKHBocmFzZSwgb3B0cywgY2FsbGJhY2spIHtcbiAgICAvLyBQYXJzZSBhcmd1bWVudHNcbiAgICBpZiAodHlwZW9mIHBocmFzZSA9PT0gJ3VuZGVmaW5lZCcpIHBocmFzZSA9ICcnO1xuICAgIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjayA9IG9wdHM7XG4gICAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgICB2YXIgbGFuZ3VhZ2VDb2RlID0gb3B0cy5sYW5ndWFnZSB8fCAnZW4nO1xuICAgIHZhciBsYWJlbHMgPSBsYW5ndWFnZVByb2Nlc3Nvci5nZXRMYWJlbHMobGFuZ3VhZ2VDb2RlKTtcblxuICAgIC8vIE1lcmdlIGV4dHJhIGxhYmVsc1xuICAgIGlmICh0eXBlb2Ygb3B0cy5leHRyYXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxhYmVscyA9IE9iamVjdC5hc3NpZ24obGFiZWxzLCBvcHRzLmV4dHJhcyk7XG4gICAgfVxuXG4gICAgLy8gU3RvcmFnZSBvYmplY3RzXG4gICAgdmFyIHRva2VucyAgICAgID0gdG9rZW5pemUocGhyYXNlKSxcbiAgICAgICAgc2NvcmUgICAgICAgPSAwLFxuICAgICAgICB3b3JkcyAgICAgICA9IFtdLFxuICAgICAgICBwb3NpdGl2ZSAgICA9IFtdLFxuICAgICAgICBuZWdhdGl2ZSAgICA9IFtdO1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRva2Vuc1xuICAgIHZhciBpID0gdG9rZW5zLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHZhciBvYmogPSB0b2tlbnNbaV07XG4gICAgICAgIGlmICghbGFiZWxzLmhhc093blByb3BlcnR5KG9iaikpIGNvbnRpbnVlO1xuICAgICAgICB3b3Jkcy5wdXNoKG9iaik7XG5cbiAgICAgICAgLy8gQXBwbHkgc2NvcmluZyBzdHJhdGVneVxuICAgICAgICB2YXIgdG9rZW5TY29yZSA9IGxhYmVsc1tvYmpdO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICB0b2tlblNjb3JlID0gbGFuZ3VhZ2VQcm9jZXNzb3IuYXBwbHlTY29yaW5nU3RyYXRlZ3kobGFuZ3VhZ2VDb2RlLCB0b2tlbnMsIGksIHRva2VuU2NvcmUpO1xuICAgICAgICBpZiAodG9rZW5TY29yZSA+IDApIHBvc2l0aXZlLnB1c2gob2JqKTtcbiAgICAgICAgaWYgKHRva2VuU2NvcmUgPCAwKSBuZWdhdGl2ZS5wdXNoKG9iaik7XG4gICAgICAgIHNjb3JlICs9IHRva2VuU2NvcmU7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgc2NvcmU6ICAgICAgICAgIHNjb3JlLFxuICAgICAgICBjb21wYXJhdGl2ZTogICAgdG9rZW5zLmxlbmd0aCA+IDAgPyBzY29yZSAvIHRva2Vucy5sZW5ndGggOiAwLFxuICAgICAgICB0b2tlbnM6ICAgICAgICAgdG9rZW5zLFxuICAgICAgICB3b3JkczogICAgICAgICAgd29yZHMsXG4gICAgICAgIHBvc2l0aXZlOiAgICAgICBwb3NpdGl2ZSxcbiAgICAgICAgbmVnYXRpdmU6ICAgICAgIG5lZ2F0aXZlXG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBvcHRpb25hbCBhc3luYyBpbnRlcmZhY2VcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbnRpbWVudDtcbiIsInZhciBlbW9qaXMgPSByZXF1aXJlKCcuLi9idWlsZC9lbW9qaS5qc29uJyk7XG5cbi8vIEVuZ2xpc2ggaXMgbG9hZGVkIGJ5IGRlZmF1bHRcbnZhciBlbkxhbmd1YWdlID0gcmVxdWlyZSgnLi4vbGFuZ3VhZ2VzL2VuL2luZGV4Jyk7XG4vLyBBZGQgZW1vamlzXG5PYmplY3QuYXNzaWduKGVuTGFuZ3VhZ2UubGFiZWxzLCBlbW9qaXMpO1xuXG4vLyBDYWNoZSBsb2FkZWQgbGFuZ3VhZ2VzXG52YXIgbGFuZ3VhZ2VzID0ge1xuICAgIGVuOiBlbkxhbmd1YWdlXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyB0aGUgc3BlY2lmaWVkIGxhbmd1YWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGFuZ3VhZ2VDb2RlXG4gICAgICogICAgIC0gVHdvLWRpZ2l0IGNvZGUgZm9yIHRoZSBsYW5ndWFnZSB0byByZWdpc3RlclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBsYW5ndWFnZVxuICAgICAqICAgICAtIFRoZSBsYW5ndWFnZSBtb2R1bGUgdG8gcmVnaXN0ZXJcbiAgICAgKi9cbiAgICBhZGRMYW5ndWFnZTogZnVuY3Rpb24gKGxhbmd1YWdlQ29kZSwgbGFuZ3VhZ2UpIHtcbiAgICAgICAgaWYgKCFsYW5ndWFnZS5sYWJlbHMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbGFuZ3VhZ2UubGFiZWxzIG11c3QgYmUgZGVmaW5lZCEnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgZW1vamlzXG4gICAgICAgIE9iamVjdC5hc3NpZ24obGFuZ3VhZ2UubGFiZWxzLCBlbW9qaXMpO1xuICAgICAgICBsYW5ndWFnZXNbbGFuZ3VhZ2VDb2RlXSA9IGxhbmd1YWdlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYSBsYW5ndWFnZSBvYmplY3QgZnJvbSB0aGUgY2FjaGUsXG4gICAgICogb3IgdHJpZXMgdG8gbG9hZCBpdCBmcm9tIHRoZSBzZXQgb2Ygc3VwcG9ydGVkIGxhbmd1YWdlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGxhbmd1YWdlQ29kZSAtIFR3by1kaWdpdCBjb2RlIGZvciB0aGUgbGFuZ3VhZ2UgdG8gZmV0Y2hcbiAgICAgKi9cbiAgICBnZXRMYW5ndWFnZTogZnVuY3Rpb24obGFuZ3VhZ2VDb2RlKSB7XG4gICAgICAgIGlmICghbGFuZ3VhZ2VDb2RlKSB7XG4gICAgICAgICAgICAvLyBEZWZhdWx0IHRvIGVuZ2xpc2ggaWYgbm8gbGFuZ3VhZ2Ugd2FzIHNwZWNpZmllZFxuICAgICAgICAgICAgcmV0dXJuIGxhbmd1YWdlcy5lbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWxhbmd1YWdlc1tsYW5ndWFnZUNvZGVdKSB7XG4gICAgICAgICAgICAvLyBUcnkgdG8gbG9hZCBzcGVjaWZpZWQgbGFuZ3VhZ2VcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICAgICAgICAgICAgICB2YXIgbGFuZ3VhZ2UgPSByZXF1aXJlKCcuLi9sYW5ndWFnZXMvJyArIGxhbmd1YWdlQ29kZSArICcvaW5kZXgnKTtcbiAgICAgICAgICAgICAgICAvLyBBZGQgbGFuZ3VhZ2UgdG8gaW4tbWVtb3J5IGNhY2hlXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRMYW5ndWFnZShsYW5ndWFnZUNvZGUsIGxhbmd1YWdlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gbGFuZ3VhZ2UgZm91bmQ6ICcgKyBsYW5ndWFnZUNvZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsYW5ndWFnZXNbbGFuZ3VhZ2VDb2RlXTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBBRklOTi0xNjUgd2VpZ2h0ZWQgbGFiZWxzIGZvciB0aGUgc3BlY2lmaWVkIGxhbmd1YWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGFuZ3VhZ2VDb2RlIC0gVHdvLWRpZ2l0IGxhbmd1YWdlIGNvZGVcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0TGFiZWxzOiBmdW5jdGlvbihsYW5ndWFnZUNvZGUpIHtcbiAgICAgICAgdmFyIGxhbmd1YWdlID0gdGhpcy5nZXRMYW5ndWFnZShsYW5ndWFnZUNvZGUpO1xuICAgICAgICByZXR1cm4gbGFuZ3VhZ2UubGFiZWxzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIGEgc2NvcmluZyBzdHJhdGVneSBmb3IgdGhlIGN1cnJlbnQgdG9rZW5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBsYW5ndWFnZUNvZGUgLSBUd28tZGlnaXQgbGFuZ3VhZ2UgY29kZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHRva2VucyAtIFRva2VucyBvZiB0aGUgcGhyYXNlIHRvIGFuYWx5emVcbiAgICAgKiBAcGFyYW0ge2ludH0gY3Vyc29yIC0gQ3Vyc29yIG9mIHRoZSBjdXJyZW50IHRva2VuIGJlaW5nIGFuYWx5emVkXG4gICAgICogQHBhcmFtIHtpbnR9IHRva2VuU2NvcmUgLSBUaGUgc2NvcmUgb2YgdGhlIGN1cnJlbnQgdG9rZW4gYmVpbmcgYW5hbHl6ZWRcbiAgICAgKi9cbiAgICBhcHBseVNjb3JpbmdTdHJhdGVneTogZnVuY3Rpb24obGFuZ3VhZ2VDb2RlLCB0b2tlbnMsIGN1cnNvciwgdG9rZW5TY29yZSkge1xuICAgICAgICB2YXIgbGFuZ3VhZ2UgPSB0aGlzLmdldExhbmd1YWdlKGxhbmd1YWdlQ29kZSk7XG4gICAgICAgIC8vIEZhbGxiYWNrIHRvIGRlZmF1bHQgc3RyYXRlZ3kgaWYgbm9uZSB3YXMgc3BlY2lmaWVkXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgIHZhciBzY29yaW5nU3RyYXRlZ3kgPSBsYW5ndWFnZS5zY29yaW5nU3RyYXRlZ3kgfHwgZGVmYXVsdFNjb3JpbmdTdHJhdGVneTtcbiAgICAgICAgcmV0dXJuIHNjb3JpbmdTdHJhdGVneS5hcHBseSh0b2tlbnMsIGN1cnNvciwgdG9rZW5TY29yZSk7XG4gICAgfVxufTtcblxudmFyIGRlZmF1bHRTY29yaW5nU3RyYXRlZ3kgPSB7XG4gICAgYXBwbHk6IGZ1bmN0aW9uKHRva2VucywgY3Vyc29yLCB0b2tlblNjb3JlKSB7XG4gICAgICAgIHJldHVybiB0b2tlblNjb3JlO1xuICAgIH1cbn07XG4iLCIvKmVzbGludCBuby11c2VsZXNzLWVzY2FwZTogXCJvZmZcIiovXG5cbi8qKlxuICogUmVtb3ZlIHNwZWNpYWwgY2hhcmFjdGVycyBhbmQgcmV0dXJuIGFuIGFycmF5IG9mIHRva2VucyAod29yZHMpLlxuICogQHBhcmFtICB7c3RyaW5nfSBpbnB1dCBJbnB1dCBzdHJpbmdcbiAqIEByZXR1cm4ge2FycmF5fSAgICAgICAgQXJyYXkgb2YgdG9rZW5zXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXRcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgLnJlcGxhY2UoL1xcbi9nLCAnICcpXG4gICAgICAgIC5yZXBsYWNlKC9bLixcXC8jISQlXFxeJlxcKjs6e309X2BcXFwifigpXS9nLCAnJylcbiAgICAgICAgLnNwbGl0KCcgJyk7XG59O1xuIiwiaW1wb3J0IHtcbiAgICBjb25kaXRpb25hbENvbG9yLFxuICAgIGNvbmRpdGlvbmFsRGlzcGxheSxcbiAgICBjb25kaXRpb25hbE9wYWNpdHksXG4gICAgY29uZGl0aW9uYWxUaXRsZUNvbG9yLFxuICAgIGZpbGxBcnRpY2xlSW5mbyxcbiAgICBoYW5kbGVEb3RVWCxcbiAgICBnZW5lcmF0ZURhdGVSYW5nZSxcbiAgICBzb3J0RGF0ZSxcbiAgICBtZXJnZUxpbmVEYXRhLFxuICAgIGluaXRpYWxSZW5kZXJcbn0gZnJvbSAnLi9jaGFydF91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICB0aGlzLmRhdGEgPSBwcm9wcy5kYXRhXG4gICAgICAgIHRoaXMubWFyZ2luID0ge1xuICAgICAgICAgICAgdG9wOiAzMCxcbiAgICAgICAgICAgIHJpZ2h0OiAyMCxcbiAgICAgICAgICAgIGJvdHRvbTogNTAsXG4gICAgICAgICAgICBsZWZ0OiAyMCxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1dG9mZiA9IDNcbiAgICAgICAgdGhpcy5nb29kID0gdGhpcy5jdXRvZmZcbiAgICAgICAgdGhpcy5iYWQgPSB0aGlzLmN1dG9mZiAqIC0xXG4gICAgICAgIHRoaXMud2lkdGggPSA4MTAgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMzcwIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuICAgICAgICB0aGlzLnN2ZyA9IGQzLnNlbGVjdCgnc3ZnJylcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMud2lkdGggKyB0aGlzLm1hcmdpbi5sZWZ0ICsgdGhpcy5tYXJnaW4ucmlnaHQpXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pXG4gICAgICAgICAgICAuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InLCAndHJhbnNwYXJlbnQnKVxuICAgICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHt0aGlzLm1hcmdpbi5sZWZ0fSwgJHt0aGlzLm1hcmdpbi50b3B9KWApXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRvZGF5LnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpIC0gMzEpKVxuICAgICAgICB0aGlzLmVuZERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLmRhdGVSYW5nZSA9IGdlbmVyYXRlRGF0ZVJhbmdlKHRoaXMuc3RhcnREYXRlLCB0aGlzLmVuZERhdGUpXG4gICAgICAgIHRoaXMueEZvcm1hdCA9IFwiJWItJWRcIjtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBkdW1teURhdGEoKXtcbiAgICAgICAgY29uc3QgZHVtbXlEYXRhID0gW11cbiAgICAgICAgY29uc3QgZGF0YUxlbmd0aCA9IDMxO1xuICAgICAgICBjb25zdCBtYWcgPSAyNTtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBkYXRhTGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyICogbWFnKSAtIG1hZztcbiAgICAgICAgICAgIGNvbnN0IGRhdHVtID0ge3g6T2JqZWN0LmtleXModGhpcy5kYXRlUmFuZ2VbeF0pWzBdLCB5fTtcbiAgICAgICAgICAgIGR1bW15RGF0YS5wdXNoKGRhdHVtKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZHVtbXlEYXRhXG4gICAgfVxuXG4gICAgYnVpbGQoZGF0YSl7XG4gICAgICAgIGNvbnN0IHsgc3ZnLCBoZWlnaHQsIHdpZHRoLCBnb29kLCBiYWQsIHhGb3JtYXQsIG1hcmdpbiB9ID0gdGhpc1xuICAgICAgICBjb25zdCB4ZGF0YSA9IFtdXG4gICAgICAgIGNvbnN0IHlkYXRhID0gW11cbiAgICAgICAgZGF0YS5mb3JFYWNoKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHhkYXRhLnB1c2goZGF0dW0ueClcbiAgICAgICAgICAgIHlkYXRhLnB1c2goZGF0dW0ueSlcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgcGFyc2VUaW1lID0gZDMudGltZVBhcnNlKFwiJVktJW0tJWRcIilcbiAgICAgICAgY29uc3QgeHNjbCA9IGQzLnNjYWxlVGltZSgpXG4gICAgICAgICAgICAuZG9tYWluKGQzLmV4dGVudChkYXRhLCBkID0+IHsgcmV0dXJuIHBhcnNlVGltZShkLngpIH0pKVxuICAgICAgICAgICAgLnJhbmdlKFswLCB3aWR0aF0pO1xuXG4gICAgICAgIGNvbnN0IHhfYXhpcyA9IGQzLmF4aXNCb3R0b20oKVxuICAgICAgICAgICAgLnNjYWxlKHhzY2wpXG5cbiAgICAgICAgY29uc3QgeXNjbCA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgIC5kb21haW4oW2QzLm1heCh5ZGF0YSksIGQzLm1pbih5ZGF0YSldKVxuICAgICAgICAgICAgLnJhbmdlKFswLCBoZWlnaHRdKTtcblxuICAgICAgICBjb25zdCB5X2F4aXMgPSBkMy5heGlzTGVmdCgpXG4gICAgICAgICAgICAuc2NhbGUoeXNjbClcblxuICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCR7KHlzY2woMCkpfSlgKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBgeGF4aXNgKVxuICAgICAgICAgICAgLmNhbGwoeF9heGlzKVxuXG4gICAgICAgICAgICBcblxuICAgICAgICAvLyBzdmcuc2VsZWN0KFwiLnhheGlzID4gcGF0aFwiKVxuICAgICAgICAvLyAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwKTtcblxuICAgICAgICAvLyBzdmcuc2VsZWN0QWxsKFwiLnhheGlzID4gLnRpY2sgPiBsaW5lXCIpXG4gICAgICAgIC8vICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApO1xuXG5cbiAgICAgICAgc3ZnLnNlbGVjdChcIi54YXhpc1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCR7eXNjbCgwKX0pYClcbiAgICAgICAgICAgIC5jYWxsKHhfYXhpcy50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoeEZvcm1hdCkpKVxuICAgICAgICAgICAgLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDkpXG4gICAgICAgICAgICAuYXR0cihcImR5XCIsIFwiLjM1ZW1cIilcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwic3RhcnRcIilcbiAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMClcblxuXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIGB5YXhpc2ApXG4gICAgICAgICAgICAuY2FsbCh5X2F4aXMudGlja1NpemUoMCkudGlja1NpemVPdXRlcig1KSlcbiAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgXCIwXCIpXG4gICAgICAgICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKS5yZW1vdmUoKVxuXG4gICAgICAgIC8vIGNyZWF0ZSBsaW5lIGdlbmVyYXRvclxuICAgICAgICBjb25zdCBsaW5lID0gZDMubGluZSgpXG4gICAgICAgICAgICAueChkID0+IHsgcmV0dXJuIHhzY2wocGFyc2VUaW1lKGQueCkpOyB9KVxuICAgICAgICAgICAgLnkoZCA9PiB7IHJldHVybiB5c2NsKGQueSk7IH0pXG4gICAgICAgICAgICAuY3VydmUoZDMuY3VydmVCdW5kbGUuYmV0YSgwLjg1KSk7XG5cbiAgICAgICAgLy9nb29kLWxhYmVsXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgeXNjbChnb29kKSAtIDUgKVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDE1KVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImdvb2QtbGFiZWxcIilcbiAgICAgICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJyaWdodFwiKVxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcInRyYW5zcGFyZW50XCIpXG4gICAgICAgICAgICAvLyAuc3R5bGUoXCJmaWxsXCIsIFwicmdiYSgwLCAxMjgsIDAsIDAuNilcIilcbiAgICAgICAgICAgIC50ZXh0KFwiKyBzZW50aW1lbnRcIilcblxuICAgICAgICAvL2JhZC1sYWJlbFxuICAgICAgICBzdmcuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIHlzY2woYmFkKSArIDE1IClcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCAxNSlcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYWQtbGFiZWxcIilcbiAgICAgICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJyaWdodFwiKVxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcInRyYW5zcGFyZW50XCIpXG4gICAgICAgICAgICAvLyAuc3R5bGUoXCJmaWxsXCIsIFwicmdiYSgyMDAsIDAsIDAsIDAuNilcIilcbiAgICAgICAgICAgIC50ZXh0KFwiLSBzZW50aW1lbnRcIilcblxuICAgICAgICAvL2J1aWxkIGdvb2QtbGluZVxuICAgICAgICBzdmcuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ4MVwiLCAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ5MVwiLCB5c2NsKGdvb2QpKVxuICAgICAgICAgICAgLmF0dHIoXCJ4MlwiLCB3aWR0aClcbiAgICAgICAgICAgIC5hdHRyKFwieTJcIiwgeXNjbChnb29kKSlcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwidHJhbnNwYXJlbnRcIilcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIFwiMXB4XCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZ29vZC1saW5lXCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIChcIjMsIDNcIikpO1xuXG4gICAgICAgIC8vIGJ1aWxkIGJhZC1saW5lXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJsaW5lXCIpXG4gICAgICAgICAgICAuYXR0cihcIngxXCIsIDApXG4gICAgICAgICAgICAuYXR0cihcInkxXCIsIHlzY2woYmFkKSlcbiAgICAgICAgICAgIC5hdHRyKFwieDJcIiwgd2lkdGgpXG4gICAgICAgICAgICAuYXR0cihcInkyXCIsIHlzY2woYmFkKSlcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwidHJhbnNwYXJlbnRcIilcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIFwiMXB4XCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFkLWxpbmVcIilcbiAgICAgICAgICAgIC5zdHlsZShcInN0cm9rZS1kYXNoYXJyYXlcIiwgKFwiMywgM1wiKSlcblxuICAgICAgICAvLyBkcmF3IHRoZSBsaW5lXG4gICAgICAgIHN2Zy5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCJ0cmFuc3BhcmVudFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgXCIzcHhcIilcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJyb3VuZFwiKVxuICAgICAgICAgICAgLmRhdGEoW2RhdGFdKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBsaW5lKTtcblxuXG4gICAgICAgIGQzLnNlbGVjdChcIiNjaGFydFwiKVxuICAgICAgICAgICAgLnN0eWxlKFwiYm94LXNoYWRvd1wiLCBcIjFweCAxcHggNXB4IDBweCBibGFja1wiKVxuICAgICAgICBkMy5zZWxlY3QoXCIjYXJ0aWNsZXMtbGlzdFwiKVxuICAgICAgICAgICAgLnN0eWxlKFwiYm94LXNoYWRvd1wiLCBcIjFweCAxcHggNXB4IDBweCBibGFja1wiKVxuICAgICAgICBkMy5zZWxlY3QoXCIuYXJ0aWNsZS1pbmZvXCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJib3gtc2hhZG93XCIsIFwiMXB4IDFweCA1cHggMHB4IGJsYWNrXCIpXG5cbiAgICAgICAgLy8gZDMuc2VsZWN0KFwiI2NoYXJ0XCIpXG4gICAgICAgIC8vICAgICAuc3R5bGUoXCJib3gtc2hhZG93XCIsIFwiMHB4IDBweCAwcHggMHB4IGJsYWNrXCIpXG5cbiAgICAgICAgLy8gZDMuc2VsZWN0KFwiI2FydGljbGVzLWxpc3RcIilcbiAgICAgICAgLy8gICAgIC5zdHlsZShcImJveC1zaGFkb3dcIiwgXCIwcHggMHB4IDBweCAwcHggYmxhY2tcIilcbiAgICAgICAgLy8gZDMuc2VsZWN0KFwiLmFydGljbGUtaW5mb1wiKVxuICAgICAgICAvLyAgICAgLnN0eWxlKFwiYm94LXNoYWRvd1wiLCBcIjBweCAwcHggMHB4IDBweCBibGFja1wiKVxuICAgIH1cblxuICAgIHJlbmRlcihwYXlsb2FkKXtcbiAgICAgICAgY29uc3QgeyBzY2F0dGVyRGF0YSwgdG90YWwgfSA9IHBheWxvYWRcbiAgICAgICAgY29uc3QgeyBzdmcsIGhlaWdodCwgd2lkdGgsIGdvb2QsIGJhZCwgeEZvcm1hdCB9ID0gdGhpc1xuICAgICAgICBjb25zdCB5ZGF0YSA9IFtdXG4gICAgICAgIGNvbnN0IHhkYXRhID0gW11cbiAgICAgICAgY29uc3Qgc2luZ2xlQXJ0aWNsZUluZm8gPSBkMy5zZWxlY3QoXCIuYXJ0aWNsZS1pbmZvLWNvbnRhaW5lclwiKVxuICAgICAgICBjb25zdCBsaW5lRGF0YSA9IG1lcmdlTGluZURhdGEodGhpcy5kYXRlUmFuZ2UsIHBheWxvYWQubGluZURhdGEpXG4gICAgICAgIGxldCBpbml0aWFsaXplX2R1cmF0aW9uXG4gICAgICAgIGlmICh0aGlzLmluaXRpYWxpemUpe1xuICAgICAgICAgICAgaW5pdGlhbGl6ZV9kdXJhdGlvbiA9IDE1MDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluaXRpYWxpemVfZHVyYXRpb24gPSAwXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pbml0aWFsaXplKVxuICAgICAgICBjb25zb2xlLmxvZyhpbml0aWFsaXplX2R1cmF0aW9uKVxuICAgICAgICB0aGlzLmluaXRpYWxpemUgPSBpbml0aWFsUmVuZGVyKHN2ZywgaW5pdGlhbGl6ZV9kdXJhdGlvbilcblxuICAgICAgICBzY2F0dGVyRGF0YS5mb3JFYWNoKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHlkYXRhLnB1c2goZGF0dW0ueSlcbiAgICAgICAgICAgIHhkYXRhLnB1c2goZGF0dW0ueClcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBwYXJzZVRpbWUgPSBkMy50aW1lUGFyc2UoXCIlWS0lbS0lZFwiKVxuICAgICAgIFxuICAgICAgICBjb25zdCB4c2NsID0gZDMuc2NhbGVUaW1lKClcbiAgICAgICAgICAgIC5kb21haW4oZDMuZXh0ZW50KGxpbmVEYXRhLCBkID0+IHsgcmV0dXJuIHBhcnNlVGltZShkLngpIH0pKVxuICAgICAgICAgICAgLnJhbmdlKFswLCB3aWR0aF0pO1xuXG4gICAgICAgIGNvbnN0IHhfYXhpcyA9IGQzLmF4aXNCb3R0b20oKVxuICAgICAgICAgICAgLnNjYWxlKHhzY2wpXG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgeXNjbCA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgIC5kb21haW4oW2QzLm1heCh5ZGF0YSksIGQzLm1pbih5ZGF0YSldKVxuICAgICAgICAgICAgLnJhbmdlKFswLCBoZWlnaHRdKTtcblxuICAgICAgICBjb25zdCB5X2F4aXMgPSBkMy5heGlzTGVmdCgpXG4gICAgICAgICAgICAuc2NhbGUoeXNjbClcblxuICAgICAgICBjb25zdCBsYWJlbHMgPSBkMy5zZWxlY3RBbGwoXCIubGFiZWxcIilcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kZWxheShpbml0aWFsaXplX2R1cmF0aW9uKVxuICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUV4cClcbiAgICAgICAgICAgIC5kdXJhdGlvbigxNzAwKVxuICAgICAgICAgICAgLnN0eWxlKFwiY29sb3JcIiwgXCJyZ2JhKDI1NSwyNTUsMjU1LCAwLjcpXCIpO1xuICAgICAgICBjb25zdCByZWFkTW9yZSA9IGQzLnNlbGVjdChcIi5yZWFkLW1vcmVcIilcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kZWxheShpbml0aWFsaXplX2R1cmF0aW9uKVxuICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUV4cClcbiAgICAgICAgICAgIC5kdXJhdGlvbigxNzAwKVxuICAgICAgICAgICAgLnN0eWxlKFwiY29sb3JcIiwgXCJyZ2JhKDI1NSwyNTUsMjU1LCAwLjcpXCIpO1xuXG4gICAgICAgIHN2Zy5zZWxlY3QoXCIueGF4aXNcIilcbiAgICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZGVsYXkoaW5pdGlhbGl6ZV9kdXJhdGlvbilcbiAgICAgICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbigxNzAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCR7eXNjbCgwKX0pYClcbiAgICAgICAgICAgIC5jYWxsKHhfYXhpcy50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoeEZvcm1hdCkpKVxuICAgICAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIDApXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDkpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkeVwiLCBcIi4zNWVtXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoOTApXCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJzdGFydFwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSlcblxuICAgICAgICBzdmcuc2VsZWN0KFwiLmdvb2QtbGFiZWxcIilcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kZWxheShpbml0aWFsaXplX2R1cmF0aW9uKVxuICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUV4cClcbiAgICAgICAgICAgIC5kdXJhdGlvbigxNzAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIHlzY2woZ29vZCkgLSA1KVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDE1KVxuICAgICAgICAgICAgLmF0dHIoXCJkaXNwbGF5XCIsICgpID0+IGNvbmRpdGlvbmFsRGlzcGxheSh5c2NsKGdvb2QpLCAwLCBmYWxzZSkpXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwicmdiYSgwLCAxMjgsIDAsIDAuNilcIilcblxuXG4gICAgICAgIHN2Zy5zZWxlY3QoXCIuYmFkLWxhYmVsXCIpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZGVsYXkoaW5pdGlhbGl6ZV9kdXJhdGlvbilcbiAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCB5c2NsKGJhZCkgKyAxNSlcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCAxNSlcbiAgICAgICAgICAgIC5hdHRyKFwiZGlzcGxheVwiLCAoKSA9PiBjb25kaXRpb25hbERpc3BsYXkoeXNjbChiYWQpLCBoZWlnaHQsIHRydWUpKVxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcInJnYmEoMjAwLCAwLCAwLCAwLjYpXCIpXG5cblxuICAgICAgICBzdmcuc2VsZWN0KFwiLnlheGlzXCIpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZGVsYXkoaW5pdGlhbGl6ZV9kdXJhdGlvbilcbiAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgICAgIC5jYWxsKHlfYXhpcy50aWNrU2l6ZSgwKS50aWNrU2l6ZU91dGVyKDUpKVxuICAgICAgICAgICAgLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKTtcbiAgICAgICAgc3ZnLnNlbGVjdChcIi55YXhpc1wiKVxuICAgICAgICAgICAgLnNlbGVjdEFsbChcInRleHRcIikucmVtb3ZlKClcblxuXG5cbiAgICAgICAgY29uc3QgbGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAgICAgLngoZCA9PiB7IHJldHVybiB4c2NsKHBhcnNlVGltZShkLngpKTsgfSlcbiAgICAgICAgICAgIC55KGQgPT4geyByZXR1cm4geXNjbChkLnkpOyB9KVxuICAgICAgICAgICAgLmN1cnZlKGQzLmN1cnZlQnVuZGxlLmJldGEoMC44NSkpO1xuXG4gICAgICAgIGNvbnN0IHBhdGggPSBzdmcuc2VsZWN0QWxsKCcubGluZScpO1xuICAgICAgICBwYXRoXG4gICAgICAgICAgICAuZGF0YShbbGluZURhdGFdKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmRlbGF5KGluaXRpYWxpemVfZHVyYXRpb24pXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDE3MDApXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgICAgICAgICAgLnN0eWxlKFwic3Ryb2tlXCIsIFwicmdiYSgwLCAwLCAxMzksIDAuOClcIilcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBsaW5lKVxuXG4gICAgICAgIHN2Zy5zZWxlY3QoXCIuZ29vZC1saW5lXCIpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZGVsYXkoaW5pdGlhbGl6ZV9kdXJhdGlvbilcbiAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgICAgIC5hdHRyKFwieDFcIiwgMClcbiAgICAgICAgICAgIC5hdHRyKFwieTFcIiwgeXNjbChnb29kKSlcbiAgICAgICAgICAgIC5hdHRyKFwieDJcIiwgd2lkdGgpXG4gICAgICAgICAgICAuYXR0cihcInkyXCIsIHlzY2woZ29vZCkpXG4gICAgICAgICAgICAuYXR0cihcImRpc3BsYXlcIiwgKCkgPT4gY29uZGl0aW9uYWxEaXNwbGF5KHlzY2woZ29vZCksIDAsIGZhbHNlKSlcbiAgICAgICAgICAgIC5zdHlsZShcInN0cm9rZVwiLCBcInJnYmEoMCwgMTI4LCAwLCAwLjYpXCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgXCIycHhcIilcblxuXG4gICAgICAgIHN2Zy5zZWxlY3QoXCIuYmFkLWxpbmVcIilcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kZWxheShpbml0aWFsaXplX2R1cmF0aW9uKVxuICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUV4cClcbiAgICAgICAgICAgIC5kdXJhdGlvbigxNzAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ4MVwiLCAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ5MVwiLCB5c2NsKGJhZCkgKVxuICAgICAgICAgICAgLmF0dHIoXCJ4MlwiLCB3aWR0aClcbiAgICAgICAgICAgIC5hdHRyKFwieTJcIiwgeXNjbChiYWQpKVxuICAgICAgICAgICAgLmF0dHIoXCJkaXNwbGF5XCIsICgpID0+IGNvbmRpdGlvbmFsRGlzcGxheSh5c2NsKGJhZCksIGhlaWdodCwgdHJ1ZSkpXG4gICAgICAgICAgICAuc3R5bGUoXCJzdHJva2VcIiwgXCJyZ2JhKDIwMCwgMCwgMCwgMC42KVwiKVxuICAgICAgICAgICAgLnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIFwiMnB4XCIpXG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgY3JlYXRlRG90cyA9IHN2Zy5zZWxlY3RBbGwoXCIuZG90XCIpXG4gICAgICAgICAgICAuZGF0YShzY2F0dGVyRGF0YSlcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImRvdFwiKVxuICAgICAgICAgICAgXG4gICAgICAgIGNyZWF0ZURvdHNcbiAgICAgICAgICAgIC5vbihcImNsaWNrXCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKGQudXJsLCBcIl9ibGFua1wiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihkLGkpIHtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIuZG90XCIpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgZCA9PiBjb25kaXRpb25hbENvbG9yKGQsIGdvb2QsIGJhZCkpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgZCA9PiBjb25kaXRpb25hbE9wYWNpdHkoZCwgZ29vZCwgYmFkKSlcbiAgICAgICAgICAgICAgICBjb25zdCBkb3QgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwiZGFya2JsdWVcIik7XG5cbiAgICAgICAgICAgICAgICBkb3RcbiAgICAgICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAuZWFzZShkMy5lYXNlRWxhc3RpYylcbiAgICAgICAgICAgICAgICAgICAgLmR1cmF0aW9uKDUwMClcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJyXCIsIDIwKVxuXG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLmFydGljbGUtbGlzdC1pdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcImJhY2tncm91bmRcIiwgZCA9PiBjb25kaXRpb25hbENvbG9yKGQsIGdvb2QsIGJhZCwgMC4zKSk7XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KGAjYXJ0aWNsZV8ke2l9YClcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZFwiLCBcInJnYmEoMCwgMCwgMTM5LCAwLjUpXCIpO1xuXG4gICAgICAgICAgICAgICAgZmlsbEFydGljbGVJbmZvKHNpbmdsZUFydGljbGVJbmZvLCBkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFbGFzdGljKVxuICAgICAgICAgICAgICAgICAgICAuZHVyYXRpb24oNTAwKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInJcIiwgOClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgY3JlYXRlRG90c1xuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmRlbGF5KGluaXRpYWxpemVfZHVyYXRpb24pXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDE3MDApXG4gICAgICAgICAgICAuYXR0cihcImN4XCIsIGQgPT4geyByZXR1cm4geHNjbChwYXJzZVRpbWUoZC54KSkgfSlcbiAgICAgICAgICAgIC5hdHRyKFwiY3lcIiwgZCA9PiB7IHJldHVybiB5c2NsKGQueSkgfSlcbiAgICAgICAgICAgIC5hdHRyKFwiclwiLCBkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZC50aXRsZSA9PT0gdG90YWwuaGlnaFNjb3JlLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiA4XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCAoXyxpKSA9PiB7cmV0dXJuIFwiZG90X1wiICsgaX0pXG4gICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIGQgPT4gY29uZGl0aW9uYWxPcGFjaXR5KGQsIGdvb2QsIGJhZCkpXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGQgPT4gY29uZGl0aW9uYWxDb2xvcihkLCBnb29kLCBiYWQpKTtcblxuICAgICAgICBjb25zdCBhcnRpY2xlc0NvbnRhaW5lciA9IGQzLnNlbGVjdChcIiNhcnRpY2xlcy1saXN0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKFwibGlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKHNjYXR0ZXJEYXRhKVxuICAgICAgICBhcnRpY2xlc0NvbnRhaW5lclxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwibGlcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJhcnRpY2xlLWxpc3QtaXRlbVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCAoXyxpKSA9PiB7cmV0dXJuIFwiYXJ0aWNsZV9cIiArIGl9KVxuICAgICAgICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZFwiLCBkID0+IGNvbmRpdGlvbmFsQ29sb3IoZCwgZ29vZCwgYmFkLCAwLjMpKVxuICAgICAgICAgICAgLnRleHQoIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkLngpXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7ZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKX06ICR7ZC50aXRsZX1gXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZCxpKXtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIuZG90XCIpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgZCA9PiBjb25kaXRpb25hbENvbG9yKGQsIGdvb2QsIGJhZCkpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgZCA9PiBjb25kaXRpb25hbE9wYWNpdHkoZCwgZ29vZCwgYmFkKSk7XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KGAjZG90XyR7aX1gKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInJcIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdEb3QgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEb3RVWChkLCBiaWdEb3QsIHNpbmdsZUFydGljbGVJbmZvLCAwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAyMFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZCxpKXtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIuYXJ0aWNsZS1saXN0LWl0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZFwiLCBkID0+IGNvbmRpdGlvbmFsQ29sb3IoZCwgZ29vZCwgYmFkLCAwLjMpKTtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZFwiLCBcInJnYmEoMCwgMCwgMTM5LCAwLjUpXCIpO1xuXG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLmRvdFwiKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGQgPT4gY29uZGl0aW9uYWxDb2xvcihkLCBnb29kLCBiYWQpKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIGQgPT4gY29uZGl0aW9uYWxPcGFjaXR5KGQsIGdvb2QsIGJhZCkpO1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdChgI2RvdF8ke2l9YClcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwiZGFya2JsdWVcIik7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcblxuICAgICAgICBkMy5zZWxlY3RBbGwoXCIuYXJ0aWNsZS1saXN0LWl0ZW1cIilcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKFwiYXBwZWFyLWFydGljbGVzXCIpXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlQ3ViaWMpXG4gICAgICAgICAgICAuZHVyYXRpb24oMTUwMClcbiAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSlcblxuICAgICAgICBhcnRpY2xlc0NvbnRhaW5lclxuICAgICAgICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZFwiLCBkID0+IGNvbmRpdGlvbmFsQ29sb3IoZCwgZ29vZCwgYmFkLCAwLjMpKVxuICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZC54KVxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7IG1vbnRoOiAnc2hvcnQnLCBkYXk6ICdudW1lcmljJyB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2RhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucyl9OiAke2QudGl0bGV9YFxuICAgICAgICAgICAgfSlcblxuICAgICAgICBhcnRpY2xlc0NvbnRhaW5lclxuICAgICAgICAgICAgLmV4aXQoKS5yZW1vdmUoKVxuXG4gICAgICAgIGNvbnN0IHVwZGF0ZURvdHMgPSBzdmcuc2VsZWN0QWxsKFwiLmRvdFwiKVxuICAgICAgICAgICAgLmRhdGEoc2NhdHRlckRhdGEpXG5cbiAgICAgICAgbGV0IGJpZ0RvdDtcbiAgICAgICAgdXBkYXRlRG90c1xuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmRlbGF5KGluaXRpYWxpemVfZHVyYXRpb24pXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDE3MDApXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZG90XCIpXG4gICAgICAgICAgICAuYXR0cihcImN4XCIsIGQgPT4geyByZXR1cm4geHNjbChwYXJzZVRpbWUoZC54KSkgfSlcbiAgICAgICAgICAgIC5hdHRyKFwiY3lcIiwgZCA9PiB7IHJldHVybiB5c2NsKGQueSkgfSlcbiAgICAgICAgICAgIC5hdHRyKFwiclwiLCBmdW5jdGlvbiAoZCwgaSl7XG4gICAgICAgICAgICAgICAgbGV0IHI7XG4gICAgICAgICAgICAgICAgaWYgKGQudGl0bGUgPT09IHRvdGFsLmhpZ2hTY29yZS50aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICBiaWdEb3QgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlRG90VVgoZCwgYmlnRG90LCBzaW5nbGVBcnRpY2xlSW5mbywgMSwgaW5pdGlhbGl6ZV9kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHIgPSAyMFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHIgPSA4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBkID0+IGNvbmRpdGlvbmFsT3BhY2l0eShkLCBnb29kLCBiYWQpIClcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgZCA9PiBjb25kaXRpb25hbENvbG9yKGQsIGdvb2QsIGJhZCkpO1xuXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCIuZG90XCIpXG4gICAgICAgICAgICAuZGF0YShzY2F0dGVyRGF0YSlcbiAgICAgICAgICAgIC5leGl0KCkucmVtb3ZlKCk7XG4gICAgfVxufSIsImNvbnN0IGNvbmRpdGlvbmFsVGl0bGVDb2xvciA9ICh0b3RhbCkgPT4ge1xuICAgIGQzLnNlbGVjdChcIi5jaGFydC10aXRsZVwiKVxuICAgICAgICAuZGF0YShbdG90YWxdKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgIC5kdXJhdGlvbigyMDAwKVxuICAgICAgICAuc3R5bGUoXCJjb2xvclwiLCBkID0+IHtcbiAgICAgICAgICAgIGlmIChkLmF2ZXJhZ2UgPiAwLjEzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7NDAgKiBNYXRoLnNxcnQoZC5hdmVyYWdlKX0sICR7MTI4ICogTWF0aC5zcXJ0KGQuYXZlcmFnZSl9LCAkezQwICogTWF0aC5zcXJ0KGQuYXZlcmFnZSl9LCAwLjk3KWBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZC5hdmVyYWdlIDwgLTAuMTMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYHJnYmEoJHsxMjggKiBNYXRoLnNxcnQoTWF0aC5hYnMoZC5hdmVyYWdlKSl9LCAkezQwICogTWF0aC5zcXJ0KE1hdGguYWJzKGQuYXZlcmFnZSkpfSwgJHs0MCAqIE1hdGguc3FydChNYXRoLmFicyhkLmF2ZXJhZ2UpKX0sIDAuOTcpYFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYHJnYmEoJHsyNTUgKiBNYXRoLnNxcnQoTWF0aC5hYnMoZC5hdmVyYWdlKSl9LCAkezI1NSAqIE1hdGguc3FydChNYXRoLmFicyhkLmF2ZXJhZ2UpKX0sICR7MjU1ICogTWF0aC5zcXJ0KE1hdGguYWJzKGQuYXZlcmFnZSkpfSwgMC44KWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICBkMy5zZWxlY3QoXCIjc2Vjb25kLXRpdGxlXCIpXG4gICAgICAgIC5kYXRhKFt0b3RhbF0pXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmVhc2UoZDMuZWFzZUV4cClcbiAgICAgICAgLmR1cmF0aW9uKDIwMDApXG4gICAgICAgIC5zdHlsZShcImNvbG9yXCIsIGQgPT4ge1xuICAgICAgICAgICAgaWYgKGQuYXZlcmFnZSA+IDAuMTMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYHJnYmEoJHs0MCAqIE1hdGguc3FydChkLmF2ZXJhZ2UpfSwgJHsxMjggKiBNYXRoLnNxcnQoZC5hdmVyYWdlKX0sICR7NDAgKiBNYXRoLnNxcnQoZC5hdmVyYWdlKX0sIDAuOTcpYFxuICAgICAgICAgICAgfSBlbHNlIGlmIChkLmF2ZXJhZ2UgPCAtMC4xMykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgcmdiYSgkezEyOCAqIE1hdGguc3FydChNYXRoLmFicyhkLmF2ZXJhZ2UpKX0sICR7NDAgKiBNYXRoLnNxcnQoTWF0aC5hYnMoZC5hdmVyYWdlKSl9LCAkezQwICogTWF0aC5zcXJ0KE1hdGguYWJzKGQuYXZlcmFnZSkpfSwgMC45NylgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBgcmdiYSgkezI1NSAqIE1hdGguc3FydChNYXRoLmFicyhkLmF2ZXJhZ2UpKX0sICR7MjU1ICogTWF0aC5zcXJ0KE1hdGguYWJzKGQuYXZlcmFnZSkpfSwgJHsyNTUgKiBNYXRoLnNxcnQoTWF0aC5hYnMoZC5hdmVyYWdlKSl9LCAwLjgpYFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxufVxuXG5jb25zdCBjb25kaXRpb25hbERpc3BsYXkgPSAoYXR0cl92YWx1ZSwgY3V0b2ZmLCBncmVhdGVyVGhhbiA9IHRydWUpID0+IHtcbiAgICBzd2l0Y2ggKGdyZWF0ZXJUaGFuKSB7XG4gICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgIGlmIChhdHRyX3ZhbHVlID4gY3V0b2ZmKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibm9uZVwiXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImluaGVyaXRcIlxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgaWYgKGF0dHJfdmFsdWUgPCBjdXRvZmYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJub25lXCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaW5oZXJpdFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gXCJpbmhlcml0XCJcbiAgICB9XG59XG5cbmNvbnN0IGNvbmRpdGlvbmFsT3BhY2l0eSA9IChkLCBnb29kLCBiYWQpID0+IHtcbiAgICBpZiAoZC55ID49IGdvb2QpIHtcbiAgICAgICAgcmV0dXJuIFwiMC41XCJcbiAgICB9IGVsc2UgaWYgKGQueSA8PSBiYWQpIHtcbiAgICAgICAgcmV0dXJuIFwiMC41XCJcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCIwLjNcIlxuICAgIH1cbn1cblxuY29uc3QgY29uZGl0aW9uYWxDb2xvciA9IChkLCBnb29kLCBiYWQsIG9wYWNpdHk9MSkgPT4ge1xuICAgIGlmIChkLnkgPj0gZ29vZCkge1xuICAgICAgICByZXR1cm4gYHJnYmEoMCwxMjgsMCwgJHtvcGFjaXR5fWBcbiAgICB9IGVsc2UgaWYgKGQueSA8PSBiYWQpIHtcbiAgICAgICAgcmV0dXJuIGByZ2JhKDI1NSwwLDAsICR7b3BhY2l0eX1gXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGByZ2JhKDI1NSwyNTUsMjU1LCAke29wYWNpdHl9YFxuICAgIH1cbn1cblxuY29uc3QgZmlsbEFydGljbGVJbmZvID0gKHNpbmdsZUFydGljbGVJbmZvLCBkKSA9PiB7XG4gICAgc2luZ2xlQXJ0aWNsZUluZm8uc2VsZWN0KFwiLmFydGljbGUtdGl0bGVcIilcbiAgICAgICAgLnRleHQoXG4gICAgICAgICAgICBgJHtkLnRpdGxlfWBcbiAgICApLnRyYW5zaXRpb24oKVxuICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgLnN0eWxlKFwiY29sb3JcIiwgXCJyZ2JhKDI1NSwyNTUsMjU1LCAwLjUpXCIpO1xuICAgIHNpbmdsZUFydGljbGVJbmZvLnNlbGVjdChcIi5hcnRpY2xlLWF1dGhvclwiKVxuICAgICAgICAudGV4dChcbiAgICAgICAgICAgIGAke2Quc291cmNlfWBcbiAgICApLnRyYW5zaXRpb24oKVxuICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgLnN0eWxlKFwiY29sb3JcIiwgXCJyZ2JhKDI1NSwyNTUsMjU1LCAwLjUpXCIpO1xuICAgIC8vIHNpbmdsZUFydGljbGVJbmZvLnNlbGVjdChcIi5hcnRpY2xlLXNlbnRpbWVudFwiKVxuICAgIC8vICAgICAudGV4dChcbiAgICAvLyAgICAgICAgIGAke2QueX1gXG4gICAgLy8gICAgICk7XG4gICAgLy8gc2luZ2xlQXJ0aWNsZUluZm8uc2VsZWN0KFwiLmFydGljbGUtcmVsZXZhbmNlXCIpXG4gICAgLy8gICAgIC50ZXh0KFxuICAgIC8vICAgICAgICAgYCR7ZC5yZWxldmFuY2V9YFxuICAgIC8vICAgICApO1xuICAgIHNpbmdsZUFydGljbGVJbmZvLnNlbGVjdChcIi5hcnRpY2xlLWRlc2NyaXB0aW9uXCIpXG4gICAgICAgIC50ZXh0KFxuICAgICAgICAgICAgYCR7ZC5kZXNjcmlwdGlvbn1gXG4gICAgICAgIClcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgLnN0eWxlKFwiY29sb3JcIiwgXCJyZ2JhKDI1NSwyNTUsMjU1LCAwLjUpXCIpXG5cbiAgICBzaW5nbGVBcnRpY2xlSW5mby5zZWxlY3QoXCIuYXJ0aWNsZS1pbWFnZVwiKVxuICAgICAgICAuYXR0cihcInNyY1wiLCBgJHtkLmltYWdlfWApXG4gICAgc2luZ2xlQXJ0aWNsZUluZm8uc2VsZWN0KFwiLnJlYWQtbW9yZVwiKVxuICAgICAgICAuYXR0cihcImhyZWZcIiwgYCR7ZC51cmx9YClcbn1cblxuY29uc3QgaGFuZGxlRG90VVggPSAoZCwgYmlnRG90LCBzaW5nbGVBcnRpY2xlSW5mbywgc3BlZWQgPSAxLCBpbnRpYWxpemVfZHVyYXRpb24gPSAwKSA9PiB7XG4gICAgY29uc3QgZGVsYXkgPSAyMDAwICsgaW50aWFsaXplX2R1cmF0aW9uXG4gICAgY29uc29sZS5sb2coZGVsYXkpXG4gICAgaWYgKHNwZWVkID49IDEpe1xuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGJpZ0RvdFxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZGVsYXkoZGVsYXkpXG4gICAgICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUVsYXN0aWMpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKDI1MDApXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJyXCIsIDgpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcImRhcmtibHVlXCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcbiAgICAgICAgICAgIGlmKHNwZWVkID49IDEpe1xuICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzaW5nbGVBcnRpY2xlSW5mb1xuICAgICAgICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheShkZWxheSArIDUwMClcbiAgICAgICAgICAgICAgICAgICAgLmR1cmF0aW9uKDgwMClcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcInJnYmEoMCwgMCwgMTM5LCAwLjUpXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZpbGxBcnRpY2xlSW5mbyhzaW5nbGVBcnRpY2xlSW5mbywgZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2luZ2xlQXJ0aWNsZUluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheShkZWxheSArIDEzNTApXG4gICAgICAgICAgICAgICAgICAgICAgICAuZHVyYXRpb24oODAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcInRyYW5zcGFyZW50XCIpXG4gICAgICAgICAgICAgICAgLy8gfSwgODAwKnNwZWVkKVxuICAgICAgICAgICAgfVxuICAgICAgICAvLyB9LCBkZWxheSpzcGVlZClcbiAgICB9IGVsc2Uge1xuICAgICAgICBiaWdEb3RcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJkYXJrYmx1ZVwiKVxuICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcbiAgICAgICAgYmlnRG90XG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlTGluZWFyKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgICAgIC5hdHRyKFwiclwiLCA4KVxuICAgICAgICBmaWxsQXJ0aWNsZUluZm8oc2luZ2xlQXJ0aWNsZUluZm8sIGQpO1xuICAgIH1cbn1cblxuRGF0ZS5wcm90b3R5cGUuYWRkRGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0RGF0ZSh0aGlzLmdldERhdGUoKSArIDEpXG59XG5cbmNvbnN0IGdlbmVyYXRlRGF0ZVJhbmdlID0gKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkgPT4ge1xuICAgIGNvbnN0IGRhdGVzID0gW11cbiAgICBsZXQgY3VycmVudERhdGUgPSBzdGFydERhdGVcbiAgICB3aGlsZSAoY3VycmVudERhdGUgPCBlbmREYXRlKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSlcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX1gICsgXCItXCIgKyBgMCR7ZGF0ZS5nZXRNb250aCgpICsgMX1gICsgXCItXCIgKyBgJHtkYXRlLmdldERhdGUoKX1gXG4gICAgICAgIGRhdGVzLnB1c2goeyBbZm9ybWF0dGVkRGF0ZV06IHsgeDogZm9ybWF0dGVkRGF0ZSwgeTogbnVsbCB9IH0pXG4gICAgICAgIGN1cnJlbnREYXRlLmFkZERheSgpXG4gICAgfVxuICAgIHJldHVybiBkYXRlc1xufVxuXG5jb25zdCBzb3J0RGF0ZSA9IChhLCBiKSA9PiB7XG4gICAgY29uc3QgZGF0ZTEgPSBuZXcgRGF0ZShhLngpXG4gICAgY29uc3QgZGF0ZTIgPSBuZXcgRGF0ZShiLngpXG4gICAgaWYgKGRhdGUxID49IGRhdGUyKSB7XG4gICAgICAgIHJldHVybiAxXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgfVxufVxuXG5jb25zdCBtZXJnZUxpbmVEYXRhID0gKGRhdGVSYW5nZSwgbGluZURhdGEpID0+IHtcbiAgICBjb25zdCBtZXJnZWREYXRhID0gT2JqZWN0LmFzc2lnbihbXSwgZGF0ZVJhbmdlLCBsaW5lRGF0YSlcbiAgICBjb25zdCB1bmtleWVkRGF0YSA9IFtdXG4gICAgbWVyZ2VkRGF0YS5mb3JFYWNoKG91dGVyRGF0dW0gPT4ge1xuICAgICAgICB1bmtleWVkRGF0YS5wdXNoKE9iamVjdC52YWx1ZXMob3V0ZXJEYXR1bSkpXG4gICAgfSlcbiAgICByZXR1cm4gdW5rZXllZERhdGEuZmxhdCgpLnNvcnQoc29ydERhdGUpXG59XG5cblxuXG5jb25zdCBpbml0aWFsUmVuZGVyID0gKHN2ZywgaW50aWFsaXplX2R1cmF0aW9uLCB0b3RhbCkgPT4ge1xuICAgIC8vIGQzLnNlbGVjdChcIiNjaGFydFwiKVxuICAgIC8vICAgICAudHJhbnNpdGlvbigpXG4gICAgLy8gICAgIC5lYXNlKGQzLmVhc2VDdWJpYylcbiAgICAvLyAgICAgLmR1cmF0aW9uKGludGlhbGl6ZV9kdXJhdGlvbilcbiAgICAvLyAgICAgLnN0eWxlKFwiYm94LXNoYWRvd1wiLCBcIjFweCAxcHggNXB4IDBweCBibGFja1wiKVxuICAgIC8vIGQzLnNlbGVjdChcIiNhcnRpY2xlcy1saXN0XCIpXG4gICAgLy8gICAgIC50cmFuc2l0aW9uKClcbiAgICAvLyAgICAgLmVhc2UoZDMuZWFzZUN1YmljKVxuICAgIC8vICAgICAuZHVyYXRpb24oaW50aWFsaXplX2R1cmF0aW9uKVxuICAgIC8vICAgICAuc3R5bGUoXCJib3gtc2hhZG93XCIsIFwiMXB4IDFweCA1cHggMHB4IGJsYWNrXCIpXG4gICAgLy8gZDMuc2VsZWN0KFwiLmFydGljbGUtaW5mb1wiKVxuICAgIC8vICAgICAudHJhbnNpdGlvbigpXG4gICAgLy8gICAgIC5lYXNlKGQzLmVhc2VDdWJpYylcbiAgICAvLyAgICAgLmR1cmF0aW9uKGludGlhbGl6ZV9kdXJhdGlvbilcbiAgICAvLyAgICAgLnN0eWxlKFwiYm94LXNoYWRvd1wiLCBcIjFweCAxcHggNXB4IDBweCBibGFja1wiKVxuXG4gICAgLy8gc3ZnLnNlbGVjdChcIi54YXhpcyA+IHBhdGhcIilcbiAgICAvLyAgICAgLnRyYW5zaXRpb24oXCJhcHBlYXJcIilcbiAgICAvLyAgICAgLmVhc2UoZDMuZWFzZUN1YmljKVxuICAgIC8vICAgICAuZHVyYXRpb24oaW50aWFsaXplX2R1cmF0aW9uKVxuICAgIC8vICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG5cbiAgICAvLyBzdmcuc2VsZWN0QWxsKFwiLnhheGlzID4gLnRpY2sgPiBsaW5lXCIpXG4gICAgLy8gICAgIC50cmFuc2l0aW9uKFwiYXBwZWFyXCIpXG4gICAgLy8gICAgIC5lYXNlKGQzLmVhc2VDdWJpYylcbiAgICAvLyAgICAgLmR1cmF0aW9uKGludGlhbGl6ZV9kdXJhdGlvbilcbiAgICAvLyAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKVxuICAgIFxuICAgIC8vIHN2Zy5zZWxlY3QoXCIueWF4aXNcIilcbiAgICAvLyAgICAgLnRyYW5zaXRpb24oXCJhcHBlYXJcIilcbiAgICAvLyAgICAgLmVhc2UoZDMuZWFzZUN1YmljKVxuICAgIC8vICAgICAuZHVyYXRpb24oaW50aWFsaXplX2R1cmF0aW9uKVxuICAgIC8vICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG5cbiAgICBkMy5zZWxlY3QoXCIjbWFpblwiKVxuICAgICAgICAudHJhbnNpdGlvbihcImFwcGVhclwiKVxuICAgICAgICAuZWFzZShkMy5lYXNlQ3ViaWMpXG4gICAgICAgIC5kdXJhdGlvbihpbnRpYWxpemVfZHVyYXRpb24qMC44KVxuICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgXCIwcHhcIilcbiAgICAgICAgLy8gLnN0eWxlKFwiYmFja2dyb3VuZFwiLCBcInJnYmEoMCwwLDAsMC4wNSlcIilcblxuICAgIGQzLnNlbGVjdChcIi5hcnRpY2xlLWltYWdlXCIpXG4gICAgICAgIC50cmFuc2l0aW9uKFwiYXBwZWFyXCIpXG4gICAgICAgIC5kZWxheSg1MDApXG4gICAgICAgIC5lYXNlKGQzLmVhc2VDdWJpYylcbiAgICAgICAgLmR1cmF0aW9uKGludGlhbGl6ZV9kdXJhdGlvbiArIDMwMClcbiAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKVxuICAgIFxuXG4gICAgZDMuc2VsZWN0KFwiLmluZm8tY29udGFpbmVyXCIpXG4gICAgICAgIC50cmFuc2l0aW9uKFwiYXBwZWFyXCIpXG4gICAgICAgIC5kZWxheSg1MDApXG4gICAgICAgIC5lYXNlKGQzLmVhc2VDdWJpYylcbiAgICAgICAgLmR1cmF0aW9uKGludGlhbGl6ZV9kdXJhdGlvbiszMDApXG4gICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSlcblxuICAgIHJldHVybiBmYWxzZVxuXG5cbn1cblxuXG5leHBvcnQge1xuICAgIGNvbmRpdGlvbmFsVGl0bGVDb2xvcixcbiAgICBjb25kaXRpb25hbERpc3BsYXksXG4gICAgY29uZGl0aW9uYWxPcGFjaXR5LFxuICAgIGNvbmRpdGlvbmFsQ29sb3IsXG4gICAgZmlsbEFydGljbGVJbmZvLFxuICAgIGhhbmRsZURvdFVYLFxuICAgIGdlbmVyYXRlRGF0ZVJhbmdlLFxuICAgIHNvcnREYXRlLFxuICAgIG1lcmdlTGluZURhdGEsXG4gICAgaW5pdGlhbFJlbmRlclxufSIsImltcG9ydCAnLi9zdHlsZXMvZGV2ZWxvcG1lbnQuY3NzJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcbmltcG9ydCBxdWVyeUZpZWxkIGZyb20gJy4vcXVlcnlfZmllbGQnO1xuaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcyc7XG5cbiBcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGNvbnNvbGUubG9nKFwiRGV2ZWxvcG1lbnQgTW9kZSFcIik7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvcHMgPSB7fVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgY29uc3Qgc2Vjb25kVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlY29uZC10aXRsZVwiKVxuICAgIFxuICAgIGNvbnN0IGNoYXJ0ID0gbmV3IENoYXJ0KHByb3BzKVxuICAgIHByb3BzLmNoYXJ0ID0gY2hhcnRcblxuICAgIG1haW4uaW5zZXJ0QmVmb3JlKHF1ZXJ5RmllbGQocHJvcHMpLCBzZWNvbmRUaXRsZSk7XG5cblxuICAgIGNvbnN0IGR1bW15RGF0YSA9IGNoYXJ0LmR1bW15RGF0YSgpO1xuICAgIGNoYXJ0LmJ1aWxkKGR1bW15RGF0YSk7XG5cbn0pXG4iLCJpbXBvcnQgeyBuZXdzX2FwaV9rZXkgfSBmcm9tICcuLi9jb25maWcva2V5cyc7XG5cbmNvbnN0IGhlYWRsaW5lcyA9ICdodHRwczovL25ld3NhcGkub3JnL3YyL3RvcC1oZWFkbGluZXM/JztcbmNvbnN0IGV2ZXJ5dGhpbmcgPSBcImh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvZXZlcnl0aGluZz9cIjtcbmNvbnN0IGFkZENvdW50cnkgPSBjb3VudHJ5ID0+IChgY291bnRyeT0ke2NvdW50cnl9JmApO1xuY29uc3QgYWRkU291cmNlID0gc291cmNlID0+IChgc291cmNlcz0ke3NvdXJjZX0mYCk7XG5jb25zdCBhZGRRdWVyeSA9IHF1ZXJ5ID0+IChgcT0ke3F1ZXJ5fSZgKTsgLy9zZWFyY2hlcyBmb3IgcXVlcnkgaW4gYm90aCB0aXRsZSBhbmQgYm9keVxuY29uc3QgYWRkRnJvbSA9IHN0YXJ0ID0+IChgZnJvbT0ke3N0YXJ0fSZgKTtcbmNvbnN0IHNvcnRCeSA9IG9wdGlvbiA9PiAoYHNvcnRCeT0ke29wdGlvbn0mYCk7XG5jb25zdCBhZGRUbyA9IGVuZCA9PiAoYHRvPSR7ZW5kfSZgKTtcbmNvbnN0IGFkZExhbmd1YWdlID0gbG4gPT4gKGBsYW5ndWFnZT0ke2xufSZgKTtcbmNvbnN0IGFkZFBhZ2VzaXplID0gaW50ID0+IChgcGFnZVNpemU9JHtpbnR9JmApO1xuY29uc3QgcGFnZSA9IGludCA9PiAoYHBhZ2U9JHtpbnR9JmApO1xuXG5jb25zdCBhcGlLZXkgPSBgYXBpS2V5PSR7bmV3c19hcGlfa2V5fWBcblxuZXhwb3J0IGNvbnN0IGZldGNoSGVhZGxpbmVzID0gKCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IGhlYWRsaW5lcyArIGFkZENvdW50cnkoJ3VzJykgKyBhcGlLZXk7XG4gICAgY29uc3QgcmVxID0gbmV3IFJlcXVlc3QodXJsKTtcbiAgICBjb25zb2xlLmxvZyhcIlJlcXVlc3RpbmcgdG9wIDIwIGhlYWRsaW5lcyFcIilcbiAgICByZXR1cm4gZmV0Y2gocmVxKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpKSkgICAgXG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hFdmVyeXRoaW5nRm9yID0gKHF1ZXJ5KSA9PiB7XG4gICAgY29uc3QgdXJsID0gZXZlcnl0aGluZyArIGFkZFF1ZXJ5KHF1ZXJ5KSArIGFkZExhbmd1YWdlKCdlbicpICsgYWRkUGFnZXNpemUoMTAwKSArIHNvcnRCeSgncmVsZXZhbmN5JykgKyBhcGlLZXk7XG4gICAgY29uc3QgcmVxID0gbmV3IFJlcXVlc3QodXJsKTtcbiAgICBjb25zb2xlLmxvZyhgUmVxdWVzdGluZyB0b3AgMjAgYXJ0aWNsZXMgYWJvdXQgJHtxdWVyeX0hYClcbiAgICByZXR1cm4gZmV0Y2gocmVxKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG59XG5cblxuIiwiaW1wb3J0IHsgZmV0Y2hFdmVyeXRoaW5nRm9yIH0gZnJvbSAnLi9uZXdzJ1xuaW1wb3J0IHsgcHJvY2Vzc0RhdGEgfSBmcm9tICcuL3NlbnRpbWVudCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIFxuICAgIGNvbnN0IHF1ZXJ5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcXVlcnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBxdWVyeUlucHV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicXVlcnktZmllbGRcIik7XG4gICAgcXVlcnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ6LWluZGV4XCIsIFwiMTAwXCIpO1xuXG5cbiAgICBzZXRUaW1lb3V0KCAoKSA9PntcbiAgICAgICAgdHlwaW5nV29yZChxdWVyeUlucHV0KTtcbiAgICB9LCAxMDAwKVxuICAgIFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocXVlcnlJbnB1dClcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiBkZWJvdW5jZWRUeXBpbmcoZXZlbnQsIHByb3BzLCBxdWVyeUlucHV0KSlcbiAgICAvLyBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4geyBoYW5kbGVUeXBpbmcoZXZlbnQsIHByb3BzLCBxdWVyeUlucHV0KX0pXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+IHsgZXZlbnQucHJldmVudERlZmF1bHQoKX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgZm9ybVxuICAgIClcbn1cblxuY29uc3QgdHlwaW5nV29yZCA9IChxdWVyeUlucHV0KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IFtcbiAgICAgICAgXCJIb25nIEtvbmdcIixcbiAgICAgICAgXCJiZWVzXCIsXG4gICAgICAgIFwiYmVhcnNcIixcbiAgICAgICAgXCJiZWV0c1wiLFxuICAgICAgICBcIkNvbmdyZXNzXCIsXG4gICAgICAgIFwicGFwZXIgc2FsZXNcIixcbiAgICAgICAgXCJjaGVlc2VcIixcbiAgICAgICAgXCJ0aGUgbmV3c1wiLFxuICAgICAgICBcInBlbmd1aW5zXCIsXG4gICAgICAgIFwidGhlIHNlbmF0ZVwiLFxuICAgICAgICBcInRoZSBkZW1vY3JhdGljIGRlYmF0ZVwiLFxuICAgICAgICBcInRoZSAyMDIwIGVsZWN0aW9uXCIsXG4gICAgICAgIFwiU3BhY2VYXCIsXG4gICAgICAgIFwiYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2VcIixcbiAgICAgICAgXCJoZWFsdGhjYXJlXCIsXG4gICAgICAgIFwidmlydHVhbCByZWFsaXR5XCIsXG4gICAgICAgIFwiZG9nc1wiXG4gICAgXVxuICAgIGNvbnN0IHN0ciA9IG9wdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogb3B0aW9ucy5sZW5ndGgpXVxuICAgIGxldCBpID0gMDtcblxuICAgIGNvbnN0IGN5Y2xlID0gc2V0SW50ZXJ2YWwoIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLnJhbmRvbSgpXG4gICAgICAgIGlmIChyYW5kID4gMC4zKSB7XG4gICAgICAgICAgICBpKytcbiAgICAgICAgICAgIHF1ZXJ5SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgc3RyLnNsaWNlKDAsIGkpKVxuICAgICAgICB9XG4gICAgICAgIGlmIChpID49IHN0ci5sZW5ndGgpe1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChjeWNsZSlcbiAgICAgICAgICAgIHF1ZXJ5SW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGNsZWFySW5wdXQocXVlcnlJbnB1dCwgY3ljbGUpKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgIHF1ZXJ5SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJcIilcbiAgICAgICAgICAgICAgICB0eXBpbmdXb3JkKHF1ZXJ5SW5wdXQpXG4gICAgICAgICAgICB9LCAxNTAwKVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9LCAyMDApXG4gICAgcXVlcnlJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgY2xlYXJJbnB1dChxdWVyeUlucHV0LCBjeWNsZSkpXG59XG5cbmNvbnN0IGNsZWFySW5wdXQgPSAocXVlcnlJbnB1dCwgY3ljbGUpID0+ICgpID0+IHtcbiAgICBjbGVhckludGVydmFsKGN5Y2xlKVxuICAgIHF1ZXJ5SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJcIilcbn1cblxuY29uc3QgaGFuZGxlVHlwaW5nID0gKGV2ZW50LHByb3BzLCBxdWVyeUlucHV0KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjaGFydCA9IHByb3BzLmNoYXJ0XG4gICAgY29uc3QgdmFsdWUgPSBxdWVyeUlucHV0LnZhbHVlO1xuXG4gICAgZmV0Y2hFdmVyeXRoaW5nRm9yKHZhbHVlKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0ge31cbiAgICAgICAgICAgIHBheWxvYWQucXVlcnkgPSB2YWx1ZVxuICAgICAgICAgICAgcGF5bG9hZC5hcnRpY2xlcyA9IHJlc3BvbnNlLmFydGljbGVzXG4gICAgICAgICAgICByZXR1cm4gcGF5bG9hZFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihwYXlsb2FkID0+IHByb2Nlc3NEYXRhKHBheWxvYWQpKSBcbiAgICAgICAgLnRoZW4oKHBheWxvYWQpID0+IHtcbiAgICAgICAgICAgIGNoYXJ0LnJlbmRlcihwYXlsb2FkKVxuICAgICAgICB9KVxufVxuXG5cbi8vIFVzZSBmb3IgdGVzdGluZyBmdW5jdGlvbmFsaXR5LCBzb3VyY2VkIGZyb206IGh0dHBzOi8vY29kZWJ1cnN0LmlvL3Rocm90dGxpbmctYW5kLWRlYm91bmNpbmctaW4tamF2YXNjcmlwdC02NDZkMDc2ZDBhNDRcbmNvbnN0IGRlYm91bmNlID0gKGRlbGF5LCBmbikgPT4ge1xuICAgIGxldCB0aW1lcklkO1xuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBpZiAodGltZXJJZCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgICB9XG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGZuKC4uLmFyZ3MpO1xuICAgICAgICAgICAgdGltZXJJZCA9IG51bGw7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG59XG5cbmNvbnN0IGRlYm91bmNlZFR5cGluZyA9IGRlYm91bmNlKDcwMCwgaGFuZGxlVHlwaW5nKTtcblxuIiwiaW1wb3J0IFNlbnRpbWVudCBmcm9tICdzZW50aW1lbnQnXG5cblxuZXhwb3J0IGNvbnN0IHByb2Nlc3NEYXRhID0gKHthcnRpY2xlcywgdmFsdWV9KSA9PiB7XG4gICAgY29uc3QgcGF5bG9hZCA9IHt9XG4gICAgY29uc3Qgc2VudGltZW50ID0gbmV3IFNlbnRpbWVudCgpO1xuICAgIGNvbnN0IHByb2Nlc3NpbmdEYXRhID0gW107XG4gICAgY29uc3QgcmF0aW8gPSAwLjZcblxuICAgIGFydGljbGVzLmZvckVhY2goYXJ0aWNsZSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdHVtID0ge31cbiAgICAgICAgZGF0dW0uY29udGVudCA9IGFydGljbGUuY29udGVudCB8fCBcIlwiXG4gICAgICAgIGRhdHVtLnRpdGxlID0gYXJ0aWNsZS50aXRsZSB8fCBcIlVubmFtZWRcIlxuICAgICAgICBkYXR1bS5hdXRob3IgPSBhcnRpY2xlLmF1dGhvciB8fCBkYXR1bS50aXRsZVxuICAgICAgICBkYXR1bS5zb3VyY2UgPSBhcnRpY2xlLnNvdXJjZS5uYW1lXG4gICAgICAgIGRhdHVtLnVybCA9IGFydGljbGUudXJsXG4gICAgICAgIGRhdHVtLmltYWdlID0gYXJ0aWNsZS51cmxUb0ltYWdlXG4gICAgICAgIGRhdHVtLmRlc2NyaXB0aW9uID0gYXJ0aWNsZS5kZXNjcmlwdGlvbiB8fCBcIlVuYXZhaWxhYmxlXCI7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjb250ZW50U2VudGltZW50ID0gc2VudGltZW50LmFuYWx5emUoZGF0dW0uY29udGVudClcbiAgICAgICAgY29uc3QgdGl0bGVTZW50aW1lbnQgPSBzZW50aW1lbnQuYW5hbHl6ZShkYXR1bS50aXRsZSlcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNvbXBhcmF0aXZlID0gY29udGVudFNlbnRpbWVudC5jb21wYXJhdGl2ZSA8IDAuMDggPyBNYXRoLmFicyhjb250ZW50U2VudGltZW50LmNvbXBhcmF0aXZlKS8wLjc1IDogY29udGVudFNlbnRpbWVudC5jb21wYXJhdGl2ZSAvL1RISVMgSVMgT05MWSBBIFBMQUNFSE9MREVSLCB1cGRhdGUgdG8gbW9yZSBtZWFuaW5nZnVsbHkgYWNjdXJhdGUgbWV0cmljIGFmdGVyIGJhc2ljc1xuICAgICAgICBkYXR1bS5yZWxldmFuY2UgPSBNYXRoLnJvdW5kKGNvbXBhcmF0aXZlICogMTAwMCkvMTAwMFxuICAgICAgICBkYXR1bS54ID0gYXJ0aWNsZS5wdWJsaXNoZWRBdC5zcGxpdChcIlRcIilbMF1cbiAgICAgICAgY29uc3Qgc2NvcmUgPSAoZGF0dW0ucmVsZXZhbmNlLzAuMjUpICogKE1hdGgucm91bmQoKChjb250ZW50U2VudGltZW50LnNjb3JlICogcmF0aW8pICsgKHRpdGxlU2VudGltZW50LnNjb3JlICogKDEtcmF0aW8pKSkgKiAxMDAwKSAvMTAwMCk7XG4gICAgICAgIGRhdHVtLnkgPSBNYXRoLnJvdW5kKHNjb3JlICogMTAwMCkvMTAwMFxuICAgICAgICBwcm9jZXNzaW5nRGF0YS5wdXNoKGRhdHVtKVxuICAgIH0pXG4gICAgcGF5bG9hZC5zY2F0dGVyRGF0YSA9IHByb2Nlc3NpbmdEYXRhLnNvcnQoc29ydERhdGVEZXNjKTtcbiAgICBwYXlsb2FkLmxpbmVEYXRhID0gYXZlcmFnZURheVNjb3Jlcyhwcm9jZXNzaW5nRGF0YSk7XG4gICAgcGF5bG9hZC50b3RhbCA9IGNhbGN1bGF0ZVRvdGFscyhwcm9jZXNzaW5nRGF0YSk7XG5cbiAgICByZXR1cm4gcGF5bG9hZFxufVxuXG5jb25zdCBjYWxjdWxhdGVUb3RhbHMgPSBkYXRhID0+IHtcbiAgICBjb25zdCB0b3RhbCA9IHt9XG4gICAgdG90YWwuaGlnaFNjb3JlID0gZGF0YVswXTtcbiAgICBkYXRhLmZvckVhY2goZGF0dW0gPT4ge1xuICAgICAgICB0b3RhbC5zY29yZSA9IHRvdGFsLnNjb3JlID8gdG90YWwuc2NvcmUgKyBkYXR1bS55IDogZGF0dW0ueVxuICAgICAgICB0b3RhbC5jb3VudCA9IHRvdGFsLmNvdW50ID8gdG90YWwuY291bnQgKyAxIDogMVxuICAgICAgICB0b3RhbC5oaWdoU2NvcmUgPSBNYXRoLmFicyhkYXR1bS55KSA+IE1hdGguYWJzKHRvdGFsLmhpZ2hTY29yZS55KSA/IGRhdHVtIDogdG90YWwuaGlnaFNjb3JlXG4gICAgfSlcbiAgICB0b3RhbC5hdmVyYWdlID0gdG90YWwuc2NvcmUvdG90YWwuY291bnQ7XG4gICAgcmV0dXJuIHRvdGFsXG59XG5cbmNvbnN0IGF2ZXJhZ2VEYXlTY29yZXMgPSBkYXRhID0+IHtcbiAgICBjb25zdCBwcm9jZXNzZWREYXRhID0ge31cbiAgICBjb25zdCBjb3VudCA9IHt9XG4gICAgZGF0YS5mb3JFYWNoKGRhdHVtID0+IHtcbiAgICAgICAgcHJvY2Vzc2VkRGF0YVtkYXR1bS54XSA9IHByb2Nlc3NlZERhdGFbZGF0dW0ueF0gPyBwcm9jZXNzZWREYXRhW2RhdHVtLnhdICsgZGF0dW0ueSA6IGRhdHVtLnk7XG4gICAgICAgIGNvdW50W2RhdHVtLnhdID0gY291bnRbZGF0dW0ueF0gPyBjb3VudFtkYXR1bS54XSArIDEgOiAxXG4gICAgfSlcblxuICAgIGNvbnN0IGF2ZXJhZ2VkRGF0YSA9IFtdXG4gICAgT2JqZWN0LmtleXMocHJvY2Vzc2VkRGF0YSkuZm9yRWFjaChkYXRlID0+IHtcbiAgICAgICAgYXZlcmFnZWREYXRhLnB1c2goe1tkYXRlXToge3g6IGRhdGUsIHk6IE1hdGgucm91bmQoKHByb2Nlc3NlZERhdGFbZGF0ZV0gLyBjb3VudFtkYXRlXSkgKiAxMDAwKSAvIDEwMDB9fSk7XG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBzb3J0ZWRBdmVyYWdlZERhdGEgPSBhdmVyYWdlZERhdGEuc29ydChzb3J0RGF0ZSlcbiAgICByZXR1cm4gc29ydGVkQXZlcmFnZWREYXRhXG59XG5cbmNvbnN0IHNvcnREYXRlID0gKGEsIGIpID0+IHtcbiAgICBjb25zdCBkYXRlMSA9IG5ldyBEYXRlKGEueClcbiAgICBjb25zdCBkYXRlMiA9IG5ldyBEYXRlKGIueClcbiAgICBpZiAoZGF0ZTEgPj0gZGF0ZTIpeyBcbiAgICAgICAgcmV0dXJuIDFcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gLTFcbiAgICB9XG59O1xuXG5jb25zdCBzb3J0RGF0ZURlc2MgPSAoYiwgYSkgPT4ge1xuICAgIGNvbnN0IGRhdGUxID0gbmV3IERhdGUoYS54KVxuICAgIGNvbnN0IGRhdGUyID0gbmV3IERhdGUoYi54KVxuICAgIGlmIChkYXRlMSA+PSBkYXRlMil7IFxuICAgICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgIH1cbn1cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==