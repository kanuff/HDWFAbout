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
    queryInput.setAttribute("placeholder", "Hong Kong");
    queryInput.setAttribute("class", "query-field");

    form.appendChild(queryInput);
    form.addEventListener("input", function () {
        return debouncedTyping(event, props, queryInput);
    });
    // form.addEventListener("submit", () => { handleTyping(event, props, queryInput)})
    form.addEventListener("submit", function () {
        event.preventDefault();
    });
    // form.addEventListener("focus", () => {
    //     cycleInputs(false)
    // })
    // cycleInputs();

    return form;
};

var cycleInputs = function cycleInputs() {
    var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    var queryInput = d3.select(".query-field");
    var value = "testing";
    var prevValue = "";
    while (active) {
        if (value !== prevValue) {
            queryInput.html(value);
            prevValue = value;
        }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xhbmd1YWdlcyBzeW5jIF5cXC5cXC8uKlxcL2luZGV4JCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xhbmd1YWdlcy9lbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xhbmd1YWdlcy9lbi9zY29yaW5nLXN0cmF0ZWd5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZW50aW1lbnQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZW50aW1lbnQvbGliL2xhbmd1YWdlLXByb2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xpYi90b2tlbml6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0X3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlcnlfZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbnRpbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2RldmVsb3BtZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uY3NzPzVkMzYiXSwibmFtZXMiOlsibmV3c19hcGlfa2V5IiwicHJvY2VzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsIkVycm9yIiwiZGVmYXVsdENsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJlIiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsImNhbGwiLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImxlbmd0aCIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwibGVuIiwicnVuIiwibmV4dFRpY2siLCJhcmdzIiwiQXJyYXkiLCJhcmd1bWVudHMiLCJpIiwicHVzaCIsIkl0ZW0iLCJhcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwidGl0bGUiLCJicm93c2VyIiwiZW52IiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJuYW1lIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siLCJsYWJlbHMiLCJyZXF1aXJlIiwic2NvcmluZ1N0cmF0ZWd5IiwibmVnYXRvcnMiLCJ0b2tlbnMiLCJjdXJzb3IiLCJ0b2tlblNjb3JlIiwicHJldnRva2VuIiwidG9rZW5pemUiLCJsYW5ndWFnZVByb2Nlc3NvciIsIlNlbnRpbWVudCIsIm9wdGlvbnMiLCJyZWdpc3Rlckxhbmd1YWdlIiwibGFuZ3VhZ2VDb2RlIiwibGFuZ3VhZ2UiLCJhZGRMYW5ndWFnZSIsImFuYWx5emUiLCJwaHJhc2UiLCJvcHRzIiwiY2FsbGJhY2siLCJnZXRMYWJlbHMiLCJleHRyYXMiLCJPYmplY3QiLCJhc3NpZ24iLCJzY29yZSIsIndvcmRzIiwicG9zaXRpdmUiLCJuZWdhdGl2ZSIsIm9iaiIsImhhc093blByb3BlcnR5IiwiYXBwbHlTY29yaW5nU3RyYXRlZ3kiLCJyZXN1bHQiLCJjb21wYXJhdGl2ZSIsImVtb2ppcyIsImVuTGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJlbiIsImdldExhbmd1YWdlIiwiZXJyIiwiZGVmYXVsdFNjb3JpbmdTdHJhdGVneSIsImlucHV0IiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwic3BsaXQiLCJzb3J0RGF0ZSIsImEiLCJiIiwiZGF0ZTEiLCJEYXRlIiwieCIsImRhdGUyIiwiYWRkRGF5Iiwic2V0RGF0ZSIsImdldERhdGUiLCJnZW5lcmF0ZURhdGVSYW5nZSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJkYXRlcyIsImN1cnJlbnREYXRlIiwiZGF0ZSIsImZvcm1hdHRlZERhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwieSIsIkNoYXJ0IiwicHJvcHMiLCJkYXRhIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiY3V0b2ZmIiwiZ29vZCIsImJhZCIsIndpZHRoIiwiaGVpZ2h0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhdHRyIiwic3R5bGUiLCJhcHBlbmQiLCJ0b2RheSIsImRhdGVSYW5nZSIsImR1bW15RGF0YSIsImRhdGFMZW5ndGgiLCJtYWciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJkYXR1bSIsImtleXMiLCJjb25zb2xlIiwibG9nIiwieGRhdGEiLCJ5ZGF0YSIsImZvckVhY2giLCJwYXJzZVRpbWUiLCJ0aW1lUGFyc2UiLCJ4Rm9ybWF0IiwieHNjbCIsInNjYWxlVGltZSIsImRvbWFpbiIsImV4dGVudCIsImQiLCJyYW5nZSIsInhfYXhpcyIsImF4aXNCb3R0b20iLCJzY2FsZSIsInlzY2wiLCJzY2FsZUxpbmVhciIsIm1heCIsIm1pbiIsInlfYXhpcyIsImF4aXNMZWZ0IiwidGlja0Zvcm1hdCIsInRpbWVGb3JtYXQiLCJzZWxlY3RBbGwiLCJsaW5lIiwiY3VydmUiLCJjdXJ2ZUJ1bmRsZSIsImJldGEiLCJ0ZXh0IiwicGF5bG9hZCIsInNjYXR0ZXJEYXRhIiwidG90YWwiLCJzaW5nbGVBcnRpY2xlSW5mbyIsInByZWxpbmVEYXRhIiwibGluZURhdGEiLCJwbGluZURhdGEiLCJ2YWx1ZXMiLCJvdXRlckRhdHVtIiwiZmxhdCIsInNvcnQiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsImVhc2VFeHAiLCJkdXJhdGlvbiIsInBhdGgiLCJjcmVhdGVEb3RzIiwiZW50ZXIiLCJ3aW5kb3ciLCJvcGVuIiwidXJsIiwiaGlnaFNjb3JlIiwiXyIsImFydGljbGVzQ29udGFpbmVyIiwibW9udGgiLCJkYXkiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJiaWdEb3QiLCJleGl0IiwicmVtb3ZlIiwidXBkYXRlRG90cyIsInIiLCJjb25kaXRpb25hbFRpdGxlQ29sb3IiLCJhdmVyYWdlIiwic3FydCIsImFicyIsImNvbmRpdGlvbmFsRGlzcGxheSIsImF0dHJfdmFsdWUiLCJncmVhdGVyVGhhbiIsImNvbmRpdGlvbmFsT3BhY2l0eSIsImNvbmRpdGlvbmFsQ29sb3IiLCJvcGFjaXR5IiwiZmlsbEFydGljbGVJbmZvIiwiaHRtbCIsImF1dGhvciIsInJlbGV2YW5jZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJoYW5kbGVEb3RVWCIsInNwZWVkIiwiZGVsYXkiLCJlYXNlRWxhc3RpYyIsImVhc2VMaW5lYXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWluIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWNvbmRUaXRsZSIsImNoYXJ0IiwiaW5zZXJ0QmVmb3JlIiwiYnVpbGQiLCJoZWFkbGluZXMiLCJldmVyeXRoaW5nIiwiYWRkQ291bnRyeSIsImNvdW50cnkiLCJhZGRTb3VyY2UiLCJzb3VyY2UiLCJhZGRRdWVyeSIsInF1ZXJ5IiwiYWRkRnJvbSIsInN0YXJ0Iiwic29ydEJ5Iiwib3B0aW9uIiwiYWRkVG8iLCJlbmQiLCJsbiIsImFkZFBhZ2VzaXplIiwiaW50IiwicGFnZSIsImFwaUtleSIsImZldGNoSGVhZGxpbmVzIiwicmVxIiwiUmVxdWVzdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImZldGNoRXZlcnl0aGluZ0ZvciIsImZvcm0iLCJjcmVhdGVFbGVtZW50IiwicXVlcnlJbnB1dCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwiZGVib3VuY2VkVHlwaW5nIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImN5Y2xlSW5wdXRzIiwiYWN0aXZlIiwidmFsdWUiLCJwcmV2VmFsdWUiLCJoYW5kbGVUeXBpbmciLCJhcnRpY2xlcyIsInJlbmRlciIsImRlYm91bmNlIiwiZm4iLCJ0aW1lcklkIiwicHJvY2Vzc0RhdGEiLCJzZW50aW1lbnQiLCJwcm9jZXNzaW5nRGF0YSIsInJhdGlvIiwiY29udGVudCIsImFydGljbGUiLCJ1cmxUb0ltYWdlIiwiY29udGVudFNlbnRpbWVudCIsInRpdGxlU2VudGltZW50Iiwicm91bmQiLCJwdWJsaXNoZWRBdCIsInNvcnREYXRlRGVzYyIsImF2ZXJhZ2VEYXlTY29yZXMiLCJjYWxjdWxhdGVUb3RhbHMiLCJjb3VudCIsInByb2Nlc3NlZERhdGEiLCJhdmVyYWdlZERhdGEiLCJzb3J0ZWRBdmVyYWdlZERhdGEiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZE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TUMsUUFBUSxJQUFJRixJQUFKLENBQVNGLEVBQUVHLENBQVgsQ0FBZDtBQUNBLFFBQUlGLFNBQVNHLEtBQWIsRUFBbUI7QUFDZixlQUFPLENBQVA7QUFDSCxLQUZELE1BRU87QUFDSCxlQUFPLENBQUMsQ0FBUjtBQUNIO0FBQ0osQ0FSRDs7QUFVQSxJQUFNK0wsZUFBZSxTQUFmQSxZQUFlLENBQUNuTSxDQUFELEVBQUlELENBQUosRUFBVTtBQUMzQixRQUFNRSxRQUFRLElBQUlDLElBQUosQ0FBU0gsRUFBRUksQ0FBWCxDQUFkO0FBQ0EsUUFBTUMsUUFBUSxJQUFJRixJQUFKLENBQVNGLEVBQUVHLENBQVgsQ0FBZDtBQUNBLFFBQUlGLFNBQVNHLEtBQWIsRUFBbUI7QUFDZixlQUFPLENBQVA7QUFDSCxLQUZELE1BRU87QUFDSCxlQUFPLENBQUMsQ0FBUjtBQUNIO0FBQ0osQ0FSRCxDOzs7Ozs7Ozs7OztBQzNFQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY29uc3QgbmV3c19hcGlfa2V5ID0gXCJkM2E5MzE4OTFjMTE0NzllYWViYWE4YWRiMzJhZjI0NlwiIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9lbi9pbmRleFwiOiBcIi4vbm9kZV9tb2R1bGVzL3NlbnRpbWVudC9sYW5ndWFnZXMvZW4vaW5kZXguanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xhbmd1YWdlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC9pbmRleCRcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBsYWJlbHM6IHJlcXVpcmUoJy4vbGFiZWxzLmpzb24nKSxcbiAgICBzY29yaW5nU3RyYXRlZ3k6IHJlcXVpcmUoJy4vc2NvcmluZy1zdHJhdGVneScpXG59O1xuIiwidmFyIG5lZ2F0b3JzID0gcmVxdWlyZSgnLi9uZWdhdG9ycy5qc29uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGFwcGx5OiBmdW5jdGlvbih0b2tlbnMsIGN1cnNvciwgdG9rZW5TY29yZSkge1xuICAgICAgICBpZiAoY3Vyc29yID4gMCkge1xuICAgICAgICAgICAgdmFyIHByZXZ0b2tlbiA9IHRva2Vuc1tjdXJzb3IgLSAxXTtcbiAgICAgICAgICAgIGlmIChuZWdhdG9yc1twcmV2dG9rZW5dKSB7XG4gICAgICAgICAgICAgICAgdG9rZW5TY29yZSA9IC10b2tlblNjb3JlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2tlblNjb3JlO1xuICAgIH1cbn07XG4iLCJ2YXIgdG9rZW5pemUgPSByZXF1aXJlKCcuL3Rva2VuaXplJyk7XG52YXIgbGFuZ3VhZ2VQcm9jZXNzb3IgPSByZXF1aXJlKCcuL2xhbmd1YWdlLXByb2Nlc3NvcicpO1xuXG4vKipcbiAqIENvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIEluc3RhbmNlIG9wdGlvbnNcbiAqL1xudmFyIFNlbnRpbWVudCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbn07XG5cbi8qKlxuICogUmVnaXN0ZXJzIHRoZSBzcGVjaWZpZWQgbGFuZ3VhZ2VcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbGFuZ3VhZ2VDb2RlXG4gKiAgICAgLSBUd28tZGlnaXQgY29kZSBmb3IgdGhlIGxhbmd1YWdlIHRvIHJlZ2lzdGVyXG4gKiBAcGFyYW0ge09iamVjdH0gbGFuZ3VhZ2VcbiAqICAgICAtIFRoZSBsYW5ndWFnZSBtb2R1bGUgdG8gcmVnaXN0ZXJcbiAqL1xuU2VudGltZW50LnByb3RvdHlwZS5yZWdpc3Rlckxhbmd1YWdlID0gZnVuY3Rpb24gKGxhbmd1YWdlQ29kZSwgbGFuZ3VhZ2UpIHtcbiAgICBsYW5ndWFnZVByb2Nlc3Nvci5hZGRMYW5ndWFnZShsYW5ndWFnZUNvZGUsIGxhbmd1YWdlKTtcbn07XG5cbi8qKlxuICogUGVyZm9ybXMgc2VudGltZW50IGFuYWx5c2lzIG9uIHRoZSBwcm92aWRlZCBpbnB1dCAncGhyYXNlJy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGhyYXNlXG4gKiAgICAgLSBJbnB1dCBwaHJhc2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKiAgICAgLSBPcHRpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cy5sYW5ndWFnZVxuICogICAgIC0gSW5wdXQgbGFuZ3VhZ2UgY29kZSAoMiBkaWdpdCBjb2RlKSwgZGVmYXVsdHMgdG8gJ2VuJ1xuICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZXh0cmFzXG4gKiAgICAgLSBPcHRpb25hbCBzZW50aW1lbnQgYWRkaXRpb25zIHRvIEFGSU5OIChoYXNoIGsvdiBwYWlycylcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiAgICAgLSBPcHRpb25hbCBjYWxsYmFja1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5TZW50aW1lbnQucHJvdG90eXBlLmFuYWx5emUgPSBmdW5jdGlvbiAocGhyYXNlLCBvcHRzLCBjYWxsYmFjaykge1xuICAgIC8vIFBhcnNlIGFyZ3VtZW50c1xuICAgIGlmICh0eXBlb2YgcGhyYXNlID09PSAndW5kZWZpbmVkJykgcGhyYXNlID0gJyc7XG4gICAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxiYWNrID0gb3B0cztcbiAgICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgIHZhciBsYW5ndWFnZUNvZGUgPSBvcHRzLmxhbmd1YWdlIHx8ICdlbic7XG4gICAgdmFyIGxhYmVscyA9IGxhbmd1YWdlUHJvY2Vzc29yLmdldExhYmVscyhsYW5ndWFnZUNvZGUpO1xuXG4gICAgLy8gTWVyZ2UgZXh0cmEgbGFiZWxzXG4gICAgaWYgKHR5cGVvZiBvcHRzLmV4dHJhcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbGFiZWxzID0gT2JqZWN0LmFzc2lnbihsYWJlbHMsIG9wdHMuZXh0cmFzKTtcbiAgICB9XG5cbiAgICAvLyBTdG9yYWdlIG9iamVjdHNcbiAgICB2YXIgdG9rZW5zICAgICAgPSB0b2tlbml6ZShwaHJhc2UpLFxuICAgICAgICBzY29yZSAgICAgICA9IDAsXG4gICAgICAgIHdvcmRzICAgICAgID0gW10sXG4gICAgICAgIHBvc2l0aXZlICAgID0gW10sXG4gICAgICAgIG5lZ2F0aXZlICAgID0gW107XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgdG9rZW5zXG4gICAgdmFyIGkgPSB0b2tlbnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdmFyIG9iaiA9IHRva2Vuc1tpXTtcbiAgICAgICAgaWYgKCFsYWJlbHMuaGFzT3duUHJvcGVydHkob2JqKSkgY29udGludWU7XG4gICAgICAgIHdvcmRzLnB1c2gob2JqKTtcblxuICAgICAgICAvLyBBcHBseSBzY29yaW5nIHN0cmF0ZWd5XG4gICAgICAgIHZhciB0b2tlblNjb3JlID0gbGFiZWxzW29ial07XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgIHRva2VuU2NvcmUgPSBsYW5ndWFnZVByb2Nlc3Nvci5hcHBseVNjb3JpbmdTdHJhdGVneShsYW5ndWFnZUNvZGUsIHRva2VucywgaSwgdG9rZW5TY29yZSk7XG4gICAgICAgIGlmICh0b2tlblNjb3JlID4gMCkgcG9zaXRpdmUucHVzaChvYmopO1xuICAgICAgICBpZiAodG9rZW5TY29yZSA8IDApIG5lZ2F0aXZlLnB1c2gob2JqKTtcbiAgICAgICAgc2NvcmUgKz0gdG9rZW5TY29yZTtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICBzY29yZTogICAgICAgICAgc2NvcmUsXG4gICAgICAgIGNvbXBhcmF0aXZlOiAgICB0b2tlbnMubGVuZ3RoID4gMCA/IHNjb3JlIC8gdG9rZW5zLmxlbmd0aCA6IDAsXG4gICAgICAgIHRva2VuczogICAgICAgICB0b2tlbnMsXG4gICAgICAgIHdvcmRzOiAgICAgICAgICB3b3JkcyxcbiAgICAgICAgcG9zaXRpdmU6ICAgICAgIHBvc2l0aXZlLFxuICAgICAgICBuZWdhdGl2ZTogICAgICAgbmVnYXRpdmVcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIG9wdGlvbmFsIGFzeW5jIGludGVyZmFjZVxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2VudGltZW50O1xuIiwidmFyIGVtb2ppcyA9IHJlcXVpcmUoJy4uL2J1aWxkL2Vtb2ppLmpzb24nKTtcblxuLy8gRW5nbGlzaCBpcyBsb2FkZWQgYnkgZGVmYXVsdFxudmFyIGVuTGFuZ3VhZ2UgPSByZXF1aXJlKCcuLi9sYW5ndWFnZXMvZW4vaW5kZXgnKTtcbi8vIEFkZCBlbW9qaXNcbk9iamVjdC5hc3NpZ24oZW5MYW5ndWFnZS5sYWJlbHMsIGVtb2ppcyk7XG5cbi8vIENhY2hlIGxvYWRlZCBsYW5ndWFnZXNcbnZhciBsYW5ndWFnZXMgPSB7XG4gICAgZW46IGVuTGFuZ3VhZ2Vcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIHRoZSBzcGVjaWZpZWQgbGFuZ3VhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBsYW5ndWFnZUNvZGVcbiAgICAgKiAgICAgLSBUd28tZGlnaXQgY29kZSBmb3IgdGhlIGxhbmd1YWdlIHRvIHJlZ2lzdGVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGxhbmd1YWdlXG4gICAgICogICAgIC0gVGhlIGxhbmd1YWdlIG1vZHVsZSB0byByZWdpc3RlclxuICAgICAqL1xuICAgIGFkZExhbmd1YWdlOiBmdW5jdGlvbiAobGFuZ3VhZ2VDb2RlLCBsYW5ndWFnZSkge1xuICAgICAgICBpZiAoIWxhbmd1YWdlLmxhYmVscykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdsYW5ndWFnZS5sYWJlbHMgbXVzdCBiZSBkZWZpbmVkIScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBlbW9qaXNcbiAgICAgICAgT2JqZWN0LmFzc2lnbihsYW5ndWFnZS5sYWJlbHMsIGVtb2ppcyk7XG4gICAgICAgIGxhbmd1YWdlc1tsYW5ndWFnZUNvZGVdID0gbGFuZ3VhZ2U7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhIGxhbmd1YWdlIG9iamVjdCBmcm9tIHRoZSBjYWNoZSxcbiAgICAgKiBvciB0cmllcyB0byBsb2FkIGl0IGZyb20gdGhlIHNldCBvZiBzdXBwb3J0ZWQgbGFuZ3VhZ2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGFuZ3VhZ2VDb2RlIC0gVHdvLWRpZ2l0IGNvZGUgZm9yIHRoZSBsYW5ndWFnZSB0byBmZXRjaFxuICAgICAqL1xuICAgIGdldExhbmd1YWdlOiBmdW5jdGlvbihsYW5ndWFnZUNvZGUpIHtcbiAgICAgICAgaWYgKCFsYW5ndWFnZUNvZGUpIHtcbiAgICAgICAgICAgIC8vIERlZmF1bHQgdG8gZW5nbGlzaCBpZiBubyBsYW5ndWFnZSB3YXMgc3BlY2lmaWVkXG4gICAgICAgICAgICByZXR1cm4gbGFuZ3VhZ2VzLmVuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbGFuZ3VhZ2VzW2xhbmd1YWdlQ29kZV0pIHtcbiAgICAgICAgICAgIC8vIFRyeSB0byBsb2FkIHNwZWNpZmllZCBsYW5ndWFnZVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICAgICAgICAgIHZhciBsYW5ndWFnZSA9IHJlcXVpcmUoJy4uL2xhbmd1YWdlcy8nICsgbGFuZ3VhZ2VDb2RlICsgJy9pbmRleCcpO1xuICAgICAgICAgICAgICAgIC8vIEFkZCBsYW5ndWFnZSB0byBpbi1tZW1vcnkgY2FjaGVcbiAgICAgICAgICAgICAgICB0aGlzLmFkZExhbmd1YWdlKGxhbmd1YWdlQ29kZSwgbGFuZ3VhZ2UpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBsYW5ndWFnZSBmb3VuZDogJyArIGxhbmd1YWdlQ29kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxhbmd1YWdlc1tsYW5ndWFnZUNvZGVdO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIEFGSU5OLTE2NSB3ZWlnaHRlZCBsYWJlbHMgZm9yIHRoZSBzcGVjaWZpZWQgbGFuZ3VhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBsYW5ndWFnZUNvZGUgLSBUd28tZGlnaXQgbGFuZ3VhZ2UgY29kZVxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRMYWJlbHM6IGZ1bmN0aW9uKGxhbmd1YWdlQ29kZSkge1xuICAgICAgICB2YXIgbGFuZ3VhZ2UgPSB0aGlzLmdldExhbmd1YWdlKGxhbmd1YWdlQ29kZSk7XG4gICAgICAgIHJldHVybiBsYW5ndWFnZS5sYWJlbHM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgYSBzY29yaW5nIHN0cmF0ZWd5IGZvciB0aGUgY3VycmVudCB0b2tlblxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGxhbmd1YWdlQ29kZSAtIFR3by1kaWdpdCBsYW5ndWFnZSBjb2RlXG4gICAgICogQHBhcmFtIHtBcnJheX0gdG9rZW5zIC0gVG9rZW5zIG9mIHRoZSBwaHJhc2UgdG8gYW5hbHl6ZVxuICAgICAqIEBwYXJhbSB7aW50fSBjdXJzb3IgLSBDdXJzb3Igb2YgdGhlIGN1cnJlbnQgdG9rZW4gYmVpbmcgYW5hbHl6ZWRcbiAgICAgKiBAcGFyYW0ge2ludH0gdG9rZW5TY29yZSAtIFRoZSBzY29yZSBvZiB0aGUgY3VycmVudCB0b2tlbiBiZWluZyBhbmFseXplZFxuICAgICAqL1xuICAgIGFwcGx5U2NvcmluZ1N0cmF0ZWd5OiBmdW5jdGlvbihsYW5ndWFnZUNvZGUsIHRva2VucywgY3Vyc29yLCB0b2tlblNjb3JlKSB7XG4gICAgICAgIHZhciBsYW5ndWFnZSA9IHRoaXMuZ2V0TGFuZ3VhZ2UobGFuZ3VhZ2VDb2RlKTtcbiAgICAgICAgLy8gRmFsbGJhY2sgdG8gZGVmYXVsdCBzdHJhdGVneSBpZiBub25lIHdhcyBzcGVjaWZpZWRcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICAgICAgdmFyIHNjb3JpbmdTdHJhdGVneSA9IGxhbmd1YWdlLnNjb3JpbmdTdHJhdGVneSB8fCBkZWZhdWx0U2NvcmluZ1N0cmF0ZWd5O1xuICAgICAgICByZXR1cm4gc2NvcmluZ1N0cmF0ZWd5LmFwcGx5KHRva2VucywgY3Vyc29yLCB0b2tlblNjb3JlKTtcbiAgICB9XG59O1xuXG52YXIgZGVmYXVsdFNjb3JpbmdTdHJhdGVneSA9IHtcbiAgICBhcHBseTogZnVuY3Rpb24odG9rZW5zLCBjdXJzb3IsIHRva2VuU2NvcmUpIHtcbiAgICAgICAgcmV0dXJuIHRva2VuU2NvcmU7XG4gICAgfVxufTtcbiIsIi8qZXNsaW50IG5vLXVzZWxlc3MtZXNjYXBlOiBcIm9mZlwiKi9cblxuLyoqXG4gKiBSZW1vdmUgc3BlY2lhbCBjaGFyYWN0ZXJzIGFuZCByZXR1cm4gYW4gYXJyYXkgb2YgdG9rZW5zICh3b3JkcykuXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlucHV0IElucHV0IHN0cmluZ1xuICogQHJldHVybiB7YXJyYXl9ICAgICAgICBBcnJheSBvZiB0b2tlbnNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dFxuICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvXFxuL2csICcgJylcbiAgICAgICAgLnJlcGxhY2UoL1suLFxcLyMhJCVcXF4mXFwqOzp7fT1fYFxcXCJ+KCldL2csICcnKVxuICAgICAgICAuc3BsaXQoJyAnKTtcbn07XG4iLCJpbXBvcnQge1xuICAgIGNvbmRpdGlvbmFsQ29sb3IsXG4gICAgY29uZGl0aW9uYWxEaXNwbGF5LFxuICAgIGNvbmRpdGlvbmFsT3BhY2l0eSxcbiAgICBjb25kaXRpb25hbFRpdGxlQ29sb3IsXG4gICAgZmlsbEFydGljbGVJbmZvLFxuICAgIGhhbmRsZURvdFVYXG59IGZyb20gJy4vY2hhcnRfdXRpbHMnXG5cbmNvbnN0IHNvcnREYXRlID0gKGEsIGIpID0+IHtcbiAgICBjb25zdCBkYXRlMSA9IG5ldyBEYXRlKGEueClcbiAgICBjb25zdCBkYXRlMiA9IG5ldyBEYXRlKGIueClcbiAgICBpZiAoZGF0ZTEgPj0gZGF0ZTIpIHtcbiAgICAgICAgcmV0dXJuIDFcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gLTFcbiAgICB9XG59XG5cbkRhdGUucHJvdG90eXBlLmFkZERheSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldERhdGUodGhpcy5nZXREYXRlKCkgKyAxKVxufVxuXG5jb25zdCBnZW5lcmF0ZURhdGVSYW5nZSA9IChzdGFydERhdGUsIGVuZERhdGUpID0+IHtcbiAgICBjb25zdCBkYXRlcyA9IFtdXG4gICAgbGV0IGN1cnJlbnREYXRlID0gc3RhcnREYXRlXG4gICAgd2hpbGUgKGN1cnJlbnREYXRlIDwgZW5kRGF0ZSkge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoY3VycmVudERhdGUpXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9YCArIFwiLVwiICsgYDAke2RhdGUuZ2V0TW9udGgoKSArMX1gICsgXCItXCIgKyBgJHtkYXRlLmdldERhdGUoKX1gXG4gICAgICAgIGRhdGVzLnB1c2goe1tmb3JtYXR0ZWREYXRlXToge3g6IGZvcm1hdHRlZERhdGUsIHk6IG51bGx9fSlcbiAgICAgICAgY3VycmVudERhdGUuYWRkRGF5KClcbiAgICB9XG4gICAgcmV0dXJuIGRhdGVzXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICB0aGlzLmRhdGEgPSBwcm9wcy5kYXRhXG4gICAgICAgIHRoaXMubWFyZ2luID0ge1xuICAgICAgICAgICAgdG9wOiAzMCxcbiAgICAgICAgICAgIHJpZ2h0OiAyMCxcbiAgICAgICAgICAgIGJvdHRvbTogNTAsXG4gICAgICAgICAgICBsZWZ0OiAyMCxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1dG9mZiA9IDNcbiAgICAgICAgdGhpcy5nb29kID0gdGhpcy5jdXRvZmZcbiAgICAgICAgdGhpcy5iYWQgPSB0aGlzLmN1dG9mZiAqIC0xXG4gICAgICAgIHRoaXMud2lkdGggPSA4MTAgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMzcwIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuICAgICAgICB0aGlzLnN2ZyA9IGQzLnNlbGVjdCgnc3ZnJylcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMud2lkdGggKyB0aGlzLm1hcmdpbi5sZWZ0ICsgdGhpcy5tYXJnaW4ucmlnaHQpXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pXG4gICAgICAgICAgICAuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InLCAndHJhbnNwYXJlbnQnKVxuICAgICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHt0aGlzLm1hcmdpbi5sZWZ0fSwgJHt0aGlzLm1hcmdpbi50b3B9KWApXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRvZGF5LnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpIC0gMzEpKVxuICAgICAgICB0aGlzLmVuZERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLmRhdGVSYW5nZSA9IGdlbmVyYXRlRGF0ZVJhbmdlKHRoaXMuc3RhcnREYXRlLCB0aGlzLmVuZERhdGUpXG4gICAgfVxuXG4gICAgZHVtbXlEYXRhKCl7XG4gICAgICAgIGNvbnN0IGR1bW15RGF0YSA9IFtdXG4gICAgICAgIGNvbnN0IGRhdGFMZW5ndGggPSAzMTtcbiAgICAgICAgY29uc3QgbWFnID0gMjU7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgZGF0YUxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMiAqIG1hZykgLSBtYWc7XG4gICAgICAgICAgICBjb25zdCBkYXR1bSA9IHt4Ok9iamVjdC5rZXlzKHRoaXMuZGF0ZVJhbmdlW3hdKVswXSwgeX07XG4gICAgICAgICAgICBkdW1teURhdGEucHVzaChkYXR1bSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coZHVtbXlEYXRhKVxuICAgICAgICByZXR1cm4gZHVtbXlEYXRhXG4gICAgfVxuXG4gICAgYnVpbGQoZGF0YSl7XG4gICAgICAgIGNvbnN0IHsgc3ZnLCBoZWlnaHQsIHdpZHRoLCBnb29kLCBiYWQgfSA9IHRoaXNcbiAgICAgICAgY29uc3QgeGRhdGEgPSBbXVxuICAgICAgICBjb25zdCB5ZGF0YSA9IFtdXG4gICAgICAgIGRhdGEuZm9yRWFjaChkYXR1bSA9PiB7XG4gICAgICAgICAgICB4ZGF0YS5wdXNoKGRhdHVtLngpXG4gICAgICAgICAgICB5ZGF0YS5wdXNoKGRhdHVtLnkpXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHBhcnNlVGltZSA9IGQzLnRpbWVQYXJzZShcIiVZLSVtLSVkXCIpXG4gICAgICAgIGNvbnN0IHhGb3JtYXQgPSBcIiViLSVkXCI7XG4gICAgICAgIGNvbnN0IHhzY2wgPSBkMy5zY2FsZVRpbWUoKVxuICAgICAgICAgICAgLmRvbWFpbihkMy5leHRlbnQoZGF0YSwgZCA9PiB7IHJldHVybiBwYXJzZVRpbWUoZC54KSB9KSlcbiAgICAgICAgICAgIC5yYW5nZShbMCwgd2lkdGhdKTtcblxuICAgICAgICBjb25zdCB4X2F4aXMgPSBkMy5heGlzQm90dG9tKClcbiAgICAgICAgICAgIC5zY2FsZSh4c2NsKVxuXG4gICAgICAgIGNvbnN0IHlzY2wgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAuZG9tYWluKFtkMy5tYXgoeWRhdGEpLCBkMy5taW4oeWRhdGEpXSlcbiAgICAgICAgICAgIC5yYW5nZShbMCwgaGVpZ2h0XSk7XG5cbiAgICAgICAgY29uc3QgeV9heGlzID0gZDMuYXhpc0xlZnQoKVxuICAgICAgICAgICAgLnNjYWxlKHlzY2wpXG5cbiAgICAgICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwkeyh5c2NsKDApKX0pYClcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgYHhheGlzYClcbiAgICAgICAgICAgIC5jYWxsKHhfYXhpcylcblxuXG4gICAgICAgIHN2Zy5zZWxlY3QoXCIueGF4aXNcIilcbiAgICAgICAgICAgIC8vIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC8vIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgICAgICAvLyAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwke3lzY2woMCl9KWApXG4gICAgICAgICAgICAuY2FsbCh4X2F4aXMudGlja0Zvcm1hdChkMy50aW1lRm9ybWF0KHhGb3JtYXQpKSlcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgMClcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCA5KVxuICAgICAgICAgICAgLmF0dHIoXCJkeVwiLCBcIi4zNWVtXCIpXG4gICAgICAgICAgICAvLyAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSg5MClcIilcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwic3RhcnRcIilcbiAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMClcbiAgICAgICAgICAgIC8vIC5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKVxuXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIGB5YXhpc2ApXG4gICAgICAgICAgICAuY2FsbCh5X2F4aXMpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBsaW5lIGdlbmVyYXRvclxuICAgICAgICBjb25zdCBsaW5lID0gZDMubGluZSgpXG4gICAgICAgICAgICAueChkID0+IHsgcmV0dXJuIHhzY2wocGFyc2VUaW1lKGQueCkpOyB9KVxuICAgICAgICAgICAgLnkoZCA9PiB7IHJldHVybiB5c2NsKGQueSk7IH0pXG4gICAgICAgICAgICAuY3VydmUoZDMuY3VydmVCdW5kbGUuYmV0YSgwLjg1KSk7XG5cbiAgICAgICAgc3ZnLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCB5c2NsKGdvb2QpIC0gNSApXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgMTUpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZ29vZC1sYWJlbFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcInJpZ2h0XCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwicmdiYSgwLCAxMjgsIDAsIDAuNilcIilcbiAgICAgICAgICAgIC50ZXh0KFwiKyBzZW50aW1lbnRcIilcblxuICAgICAgICBzdmcuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIHlzY2woYmFkKSArIDE1IClcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCAxNSlcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYWQtbGFiZWxcIilcbiAgICAgICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJyaWdodFwiKVxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcInJnYmEoMjAwLCAwLCAwLCAwLjYpXCIpXG4gICAgICAgICAgICAudGV4dChcIi0gc2VudGltZW50XCIpXG5cbiAgICAgICAgc3ZnLmFwcGVuZChcImxpbmVcIilcbiAgICAgICAgICAgIC5hdHRyKFwieDFcIiwgMClcbiAgICAgICAgICAgIC5hdHRyKFwieTFcIiwgeXNjbChnb29kKSlcbiAgICAgICAgICAgIC5hdHRyKFwieDJcIiwgd2lkdGgpXG4gICAgICAgICAgICAuYXR0cihcInkyXCIsIHlzY2woZ29vZCkpXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcImdyZWVuXCIpXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCBcIjFweFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImdvb2QtbGluZVwiKVxuICAgICAgICAgICAgLnN0eWxlKFwic3Ryb2tlLWRhc2hhcnJheVwiLCAoXCIzLCAzXCIpKTtcblxuICAgICAgICBzdmcuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ4MVwiLCAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ5MVwiLCB5c2NsKGJhZCkpXG4gICAgICAgICAgICAuYXR0cihcIngyXCIsIHdpZHRoKVxuICAgICAgICAgICAgLmF0dHIoXCJ5MlwiLCB5c2NsKGJhZCkpXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcInJlZFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgXCIxcHhcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYWQtbGluZVwiKVxuICAgICAgICAgICAgLnN0eWxlKFwic3Ryb2tlLWRhc2hhcnJheVwiLCAoXCIzLCAzXCIpKVxuXG4gICAgICAgIC8vIGRyYXcgdGhlIGxpbmVcbiAgICAgICAgc3ZnLmFwcGVuZCgncGF0aCcpXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcImxpZ2h0Z3JleVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgXCIzcHhcIilcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJyb3VuZFwiKVxuICAgICAgICAgICAgLmRhdGEoW2RhdGFdKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBsaW5lKTtcbiAgICB9XG5cbiAgICByZW5kZXIocGF5bG9hZCl7XG4gICAgICAgIGNvbnN0IHsgc2NhdHRlckRhdGEsIHRvdGFsIH0gPSBwYXlsb2FkXG4gICAgICAgIGNvbnN0IHsgc3ZnLCBoZWlnaHQsIHdpZHRoLCBnb29kLCBiYWQgfSA9IHRoaXNcbiAgICAgICAgY29uc3QgeWRhdGEgPSBbXVxuICAgICAgICBjb25zdCB4ZGF0YSA9IFtdXG4gICAgICAgIGNvbnN0IHNpbmdsZUFydGljbGVJbmZvID0gZDMuc2VsZWN0KFwiLmFydGljbGUtaW5mby1jb250YWluZXJcIilcblxuXG4gICAgICAgIGNvbnN0IHByZWxpbmVEYXRhID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAgdGhpcy5kYXRlUmFuZ2UsXG4gICAgICAgICAgICBwYXlsb2FkLmxpbmVEYXRhXG4gICAgICAgIClcblxuICAgICAgICBjb25zdCBwbGluZURhdGEgPSBbXVxuICAgICAgICBwcmVsaW5lRGF0YS5mb3JFYWNoKG91dGVyRGF0dW0gPT4ge1xuICAgICAgICAgICAgcGxpbmVEYXRhLnB1c2goT2JqZWN0LnZhbHVlcyhvdXRlckRhdHVtKSlcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgbGluZURhdGEgPSBwbGluZURhdGEuZmxhdCgpLnNvcnQoc29ydERhdGUpXG5cblxuICAgICAgICBjb25kaXRpb25hbFRpdGxlQ29sb3IodG90YWwpO1xuXG4gICAgICAgIHNjYXR0ZXJEYXRhLmZvckVhY2goZGF0dW0gPT4ge1xuICAgICAgICAgICAgeWRhdGEucHVzaChkYXR1bS55KVxuICAgICAgICAgICAgeGRhdGEucHVzaChkYXR1bS54KVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHBhcnNlVGltZSA9IGQzLnRpbWVQYXJzZShcIiVZLSVtLSVkXCIpXG4gICAgICAgIGNvbnN0IHhGb3JtYXQgPSBcIiViLSVkXCI7XG4gICAgICAgIGNvbnN0IHhzY2wgPSBkMy5zY2FsZVRpbWUoKVxuICAgICAgICAgICAgLmRvbWFpbihkMy5leHRlbnQobGluZURhdGEsIGQgPT4geyByZXR1cm4gcGFyc2VUaW1lKGQueCkgfSkpXG4gICAgICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSk7XG5cbiAgICAgICAgY29uc3QgeF9heGlzID0gZDMuYXhpc0JvdHRvbSgpXG4gICAgICAgICAgICAuc2NhbGUoeHNjbClcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCB5c2NsID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLmRvbWFpbihbZDMubWF4KHlkYXRhKSwgZDMubWluKHlkYXRhKV0pXG4gICAgICAgICAgICAucmFuZ2UoWzAsIGhlaWdodF0pO1xuXG4gICAgICAgIGNvbnN0IHlfYXhpcyA9IGQzLmF4aXNMZWZ0KClcbiAgICAgICAgICAgIC5zY2FsZSh5c2NsKVxuXG4gICAgICAgIHN2Zy5zZWxlY3QoXCIueGF4aXNcIilcbiAgICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUV4cClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwke3lzY2woMCl9KWApXG4gICAgICAgICAgICAuY2FsbCh4X2F4aXMudGlja0Zvcm1hdChkMy50aW1lRm9ybWF0KHhGb3JtYXQpKSlcbiAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCAwKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCA5KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZHlcIiwgXCIuMzVlbVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKDkwKVwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwic3RhcnRcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG5cbiAgICAgICAgc3ZnLnNlbGVjdChcIi5nb29kLWxhYmVsXCIpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDE3MDApXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgeXNjbChnb29kKSAtIDUpXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgMTUpXG4gICAgICAgICAgICAuYXR0cihcImRpc3BsYXlcIiwgKCkgPT4gY29uZGl0aW9uYWxEaXNwbGF5KHlzY2woZ29vZCksIDAsIGZhbHNlKSlcblxuICAgICAgICBzdmcuc2VsZWN0KFwiLmJhZC1sYWJlbFwiKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUV4cClcbiAgICAgICAgICAgIC5kdXJhdGlvbigxNzAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIHlzY2woYmFkKSArIDE1KVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDE1KVxuICAgICAgICAgICAgLmF0dHIoXCJkaXNwbGF5XCIsICgpID0+IGNvbmRpdGlvbmFsRGlzcGxheSh5c2NsKGJhZCksIGhlaWdodCwgdHJ1ZSkpXG5cbiAgICAgICAgc3ZnLnNlbGVjdChcIi55YXhpc1wiKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUV4cClcbiAgICAgICAgICAgIC5kdXJhdGlvbigxNzAwKVxuICAgICAgICAgICAgLmNhbGwoeV9heGlzKVxuICAgICAgICAgICAgLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKVxuXG4gICAgICAgIGNvbnN0IGxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgICAgIC54KGQgPT4geyByZXR1cm4geHNjbChwYXJzZVRpbWUoZC54KSk7IH0pXG4gICAgICAgICAgICAueShkID0+IHsgcmV0dXJuIHlzY2woZC55KTsgfSlcbiAgICAgICAgICAgIC8vIC5kZWZpbmVkKGQgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAvLyAgICAgaWYgKGQueSkge1xuICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAuY3VydmUoZDMuY3VydmVCdW5kbGUuYmV0YSgwLjg1KSk7XG5cbiAgICAgICAgY29uc3QgcGF0aCA9IHN2Zy5zZWxlY3RBbGwoJy5saW5lJyk7XG4gICAgICAgIHBhdGhcbiAgICAgICAgICAgIC5kYXRhKFtsaW5lRGF0YV0pXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDE3MDApXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGxpbmUpXG5cbiAgICAgICAgc3ZnLnNlbGVjdChcIi5nb29kLWxpbmVcIilcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgICAgIC5hdHRyKFwieDFcIiwgMClcbiAgICAgICAgICAgIC5hdHRyKFwieTFcIiwgeXNjbChnb29kKSlcbiAgICAgICAgICAgIC5hdHRyKFwieDJcIiwgd2lkdGgpXG4gICAgICAgICAgICAuYXR0cihcInkyXCIsIHlzY2woZ29vZCkpXG4gICAgICAgICAgICAuYXR0cihcImRpc3BsYXlcIiwgKCkgPT4gY29uZGl0aW9uYWxEaXNwbGF5KHlzY2woZ29vZCksIDAsIGZhbHNlKSlcblxuICAgICAgICBzdmcuc2VsZWN0KFwiLmJhZC1saW5lXCIpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDE3MDApXG4gICAgICAgICAgICAuYXR0cihcIngxXCIsIDApXG4gICAgICAgICAgICAuYXR0cihcInkxXCIsIHlzY2woYmFkKSApXG4gICAgICAgICAgICAuYXR0cihcIngyXCIsIHdpZHRoKVxuICAgICAgICAgICAgLmF0dHIoXCJ5MlwiLCB5c2NsKGJhZCkpXG4gICAgICAgICAgICAuYXR0cihcImRpc3BsYXlcIiwgKCkgPT4gY29uZGl0aW9uYWxEaXNwbGF5KHlzY2woYmFkKSwgaGVpZ2h0LCB0cnVlKSlcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBjcmVhdGVEb3RzID0gc3ZnLnNlbGVjdEFsbChcIi5kb3RcIilcbiAgICAgICAgICAgIC5kYXRhKHNjYXR0ZXJEYXRhKVxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZG90XCIpXG4gICAgICAgICAgICBcbiAgICAgICAgY3JlYXRlRG90c1xuICAgICAgICAgICAgLm9uKFwiY2xpY2tcIiwgZCA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oZC51cmwsIFwiX2JsYW5rXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIuZG90XCIpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgZCA9PiBjb25kaXRpb25hbENvbG9yKGQsIGdvb2QsIGJhZCkpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgZCA9PiBjb25kaXRpb25hbE9wYWNpdHkoZCwgZ29vZCwgYmFkKSlcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwiZGFya2JsdWVcIik7XG4gICAgICAgICAgICAgICAgZmlsbEFydGljbGVJbmZvKHNpbmdsZUFydGljbGVJbmZvLCBkKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICBjcmVhdGVEb3RzXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDE3MDApXG4gICAgICAgICAgICAuYXR0cihcImN4XCIsIGQgPT4geyByZXR1cm4geHNjbChwYXJzZVRpbWUoZC54KSkgfSlcbiAgICAgICAgICAgIC5hdHRyKFwiY3lcIiwgZCA9PiB7IHJldHVybiB5c2NsKGQueSkgfSlcbiAgICAgICAgICAgIC5hdHRyKFwiclwiLCBkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZC50aXRsZSA9PT0gdG90YWwuaGlnaFNjb3JlLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiA4XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCAoXyxpKSA9PiB7cmV0dXJuIFwiZG90X1wiICsgaX0pXG4gICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIGQgPT4gY29uZGl0aW9uYWxPcGFjaXR5KGQsIGdvb2QsIGJhZCkpXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGQgPT4gY29uZGl0aW9uYWxDb2xvcihkLCBnb29kLCBiYWQpKTtcblxuICAgICAgICBjb25zdCBhcnRpY2xlc0NvbnRhaW5lciA9IGQzLnNlbGVjdChcIiNhcnRpY2xlcy1saXN0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKFwibGlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKHNjYXR0ZXJEYXRhKVxuICAgICAgICBhcnRpY2xlc0NvbnRhaW5lclxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwibGlcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJhcnRpY2xlLWxpc3QtaXRlbVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCAoXyxpKSA9PiB7cmV0dXJuIFwiYXJ0aWNsZV9cIiArIGl9KVxuICAgICAgICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZFwiLCBkID0+IGNvbmRpdGlvbmFsQ29sb3IoZCwgZ29vZCwgYmFkLCAwLjEpKVxuICAgICAgICAgICAgLnRleHQoIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkLngpXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7ZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKX06ICR7ZC50aXRsZX1gXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZCxpKXtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIuZG90XCIpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgZCA9PiBjb25kaXRpb25hbENvbG9yKGQsIGdvb2QsIGJhZCkpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgZCA9PiBjb25kaXRpb25hbE9wYWNpdHkoZCwgZ29vZCwgYmFkKSk7XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KGAjZG90XyR7aX1gKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInJcIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdEb3QgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEb3RVWChkLCBiaWdEb3QsIHNpbmdsZUFydGljbGVJbmZvLCAwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAyMFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZCxpKXtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIuZG90XCIpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgZCA9PiBjb25kaXRpb25hbENvbG9yKGQsIGdvb2QsIGJhZCkpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgZCA9PiBjb25kaXRpb25hbE9wYWNpdHkoZCwgZ29vZCwgYmFkKSk7XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KGAjZG90XyR7aX1gKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJkYXJrYmx1ZVwiKTtcblxuICAgICAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5hcnRpY2xlLWxpc3QtaXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kXCIsIGQgPT4gY29uZGl0aW9uYWxDb2xvcihkLCBnb29kLCBiYWQsIDAuMSkpO1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIGQgPT4gY29uZGl0aW9uYWxDb2xvcihkLCBnb29kLCBiYWQsIDAuMykpO1xuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgIGFydGljbGVzQ29udGFpbmVyXG4gICAgICAgICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kXCIsIGQgPT4gY29uZGl0aW9uYWxDb2xvcihkLCBnb29kLCBiYWQsIDAuMSkpXG4gICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkLngpXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7ZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKX06ICR7ZC50aXRsZX1gXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIGFydGljbGVzQ29udGFpbmVyXG4gICAgICAgICAgICAuZXhpdCgpLnJlbW92ZSgpXG4gICAgICAgICAgICAvLyAub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgLy8gICAgIGQzLnNlbGVjdEFsbChcIi5kb3RcIilcbiAgICAgICAgICAgIC8vICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBkID0+IGNvbmRpdGlvbmFsQ29sb3IoZCwgZ29vZCwgYmFkKSlcbiAgICAgICAgICAgIC8vICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBkID0+IGNvbmRpdGlvbmFsT3BhY2l0eShkLCBnb29kLCBiYWQpKTtcbiAgICAgICAgICAgIC8vICAgICBkMy5zZWxlY3QoYCNkb3RfJHtpfWApXG4gICAgICAgICAgICAvLyAgICAgICAgIC5hdHRyKFwiclwiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgYmlnRG90ID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBoYW5kbGVEb3RVWChkLCBiaWdEb3QsIHNpbmdsZUFydGljbGVJbmZvLCAwLjIpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIDE1XG4gICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIC8vIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgLy8gICAgIGQzLnNlbGVjdEFsbChcIi5kb3RcIilcbiAgICAgICAgICAgIC8vICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBkID0+IGNvbmRpdGlvbmFsQ29sb3IoZCwgZ29vZCwgYmFkKSlcbiAgICAgICAgICAgIC8vICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBkID0+IGNvbmRpdGlvbmFsT3BhY2l0eShkLCBnb29kLCBiYWQpKTtcbiAgICAgICAgICAgIC8vICAgICBkMy5zZWxlY3QoYCNkb3RfJHtpfWApXG4gICAgICAgICAgICAvLyAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSlcbiAgICAgICAgICAgIC8vICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcImxpZ2h0Ymx1ZVwiKTtcblxuICAgICAgICAgICAgLy8gICAgIGQzLnNlbGVjdEFsbChcIi5hcnRpY2xlLWxpc3QtaXRlbVwiKVxuICAgICAgICAgICAgLy8gICAgICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kXCIsIGQgPT4gY29uZGl0aW9uYWxDb2xvcihkLCBnb29kLCBiYWQsIDAuMSkpO1xuICAgICAgICAgICAgLy8gICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgLy8gICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIGQgPT4gY29uZGl0aW9uYWxDb2xvcihkLCBnb29kLCBiYWQsIDAuMykpO1xuICAgICAgICAgICAgLy8gfSlcblxuXG4gICAgICAgICAgICAvLyAuZWFjaCggZCA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyB9KVxuXG4gICAgICAgIGNvbnN0IHVwZGF0ZURvdHMgPSBzdmcuc2VsZWN0QWxsKFwiLmRvdFwiKVxuICAgICAgICAgICAgLmRhdGEoc2NhdHRlckRhdGEpXG5cbiAgICAgICAgbGV0IGJpZ0RvdDtcbiAgICAgICAgdXBkYXRlRG90c1xuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUV4cClcbiAgICAgICAgICAgIC5kdXJhdGlvbigxNzAwKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImRvdFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjeFwiLCBkID0+IHsgcmV0dXJuIHhzY2wocGFyc2VUaW1lKGQueCkpIH0pXG4gICAgICAgICAgICAuYXR0cihcImN5XCIsIGQgPT4geyByZXR1cm4geXNjbChkLnkpIH0pXG4gICAgICAgICAgICAuYXR0cihcInJcIiwgZnVuY3Rpb24oZCwgaSl7XG4gICAgICAgICAgICAgICAgbGV0IHI7XG4gICAgICAgICAgICAgICAgaWYgKGQudGl0bGUgPT09IHRvdGFsLmhpZ2hTY29yZS50aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICBiaWdEb3QgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlRG90VVgoZCwgYmlnRG90LCBzaW5nbGVBcnRpY2xlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgIHIgPSAyMFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHIgPSA4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBkID0+IGNvbmRpdGlvbmFsT3BhY2l0eShkLCBnb29kLCBiYWQpIClcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgZCA9PiBjb25kaXRpb25hbENvbG9yKGQsIGdvb2QsIGJhZCkpO1xuXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCIuZG90XCIpXG4gICAgICAgICAgICAuZGF0YShzY2F0dGVyRGF0YSlcbiAgICAgICAgICAgIC5leGl0KCkucmVtb3ZlKCk7XG4gICAgfVxufSIsImNvbnN0IGNvbmRpdGlvbmFsVGl0bGVDb2xvciA9ICh0b3RhbCkgPT4ge1xuICAgIGQzLnNlbGVjdChcIi5jaGFydC10aXRsZVwiKVxuICAgICAgICAuZGF0YShbdG90YWxdKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgIC5kdXJhdGlvbigyMDAwKVxuICAgICAgICAuc3R5bGUoXCJjb2xvclwiLCBkID0+IHtcbiAgICAgICAgICAgIGlmIChkLmF2ZXJhZ2UgPiAwLjEzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7NDAgKiBNYXRoLnNxcnQoZC5hdmVyYWdlKX0sICR7MTI4ICogTWF0aC5zcXJ0KGQuYXZlcmFnZSl9LCAkezQwICogTWF0aC5zcXJ0KGQuYXZlcmFnZSl9LCAwLjk3KWBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZC5hdmVyYWdlIDwgLTAuMTMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYHJnYmEoJHsxMjggKiBNYXRoLnNxcnQoTWF0aC5hYnMoZC5hdmVyYWdlKSl9LCAkezQwICogTWF0aC5zcXJ0KE1hdGguYWJzKGQuYXZlcmFnZSkpfSwgJHs0MCAqIE1hdGguc3FydChNYXRoLmFicyhkLmF2ZXJhZ2UpKX0sIDAuOTcpYFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYHJnYmEoJHsyNTUgKiBNYXRoLnNxcnQoTWF0aC5hYnMoZC5hdmVyYWdlKSl9LCAkezI1NSAqIE1hdGguc3FydChNYXRoLmFicyhkLmF2ZXJhZ2UpKX0sICR7MjU1ICogTWF0aC5zcXJ0KE1hdGguYWJzKGQuYXZlcmFnZSkpfSwgMC44KWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICBkMy5zZWxlY3QoXCIjc2Vjb25kLXRpdGxlXCIpXG4gICAgICAgIC5kYXRhKFt0b3RhbF0pXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmVhc2UoZDMuZWFzZUV4cClcbiAgICAgICAgLmR1cmF0aW9uKDIwMDApXG4gICAgICAgIC5zdHlsZShcImNvbG9yXCIsIGQgPT4ge1xuICAgICAgICAgICAgaWYgKGQuYXZlcmFnZSA+IDAuMTMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYHJnYmEoJHs0MCAqIE1hdGguc3FydChkLmF2ZXJhZ2UpfSwgJHsxMjggKiBNYXRoLnNxcnQoZC5hdmVyYWdlKX0sICR7NDAgKiBNYXRoLnNxcnQoZC5hdmVyYWdlKX0sIDAuOTcpYFxuICAgICAgICAgICAgfSBlbHNlIGlmIChkLmF2ZXJhZ2UgPCAtMC4xMykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgcmdiYSgkezEyOCAqIE1hdGguc3FydChNYXRoLmFicyhkLmF2ZXJhZ2UpKX0sICR7NDAgKiBNYXRoLnNxcnQoTWF0aC5hYnMoZC5hdmVyYWdlKSl9LCAkezQwICogTWF0aC5zcXJ0KE1hdGguYWJzKGQuYXZlcmFnZSkpfSwgMC45NylgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBgcmdiYSgkezI1NSAqIE1hdGguc3FydChNYXRoLmFicyhkLmF2ZXJhZ2UpKX0sICR7MjU1ICogTWF0aC5zcXJ0KE1hdGguYWJzKGQuYXZlcmFnZSkpfSwgJHsyNTUgKiBNYXRoLnNxcnQoTWF0aC5hYnMoZC5hdmVyYWdlKSl9LCAwLjgpYFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxufVxuXG5jb25zdCBjb25kaXRpb25hbERpc3BsYXkgPSAoYXR0cl92YWx1ZSwgY3V0b2ZmLCBncmVhdGVyVGhhbiA9IHRydWUpID0+IHtcbiAgICBzd2l0Y2ggKGdyZWF0ZXJUaGFuKSB7XG4gICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgIGlmIChhdHRyX3ZhbHVlID4gY3V0b2ZmKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibm9uZVwiXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImluaGVyaXRcIlxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgaWYgKGF0dHJfdmFsdWUgPCBjdXRvZmYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJub25lXCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaW5oZXJpdFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gXCJpbmhlcml0XCJcbiAgICB9XG59XG5cbmNvbnN0IGNvbmRpdGlvbmFsT3BhY2l0eSA9IChkLCBnb29kLCBiYWQpID0+IHtcbiAgICBpZiAoZC55ID49IGdvb2QpIHtcbiAgICAgICAgcmV0dXJuIFwiMC41XCJcbiAgICB9IGVsc2UgaWYgKGQueSA8PSBiYWQpIHtcbiAgICAgICAgcmV0dXJuIFwiMC41XCJcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCIwLjNcIlxuICAgIH1cbn1cblxuY29uc3QgY29uZGl0aW9uYWxDb2xvciA9IChkLCBnb29kLCBiYWQsIG9wYWNpdHk9MSkgPT4ge1xuICAgIGlmIChkLnkgPj0gZ29vZCkge1xuICAgICAgICByZXR1cm4gYHJnYmEoMCwxMjgsMCwgJHtvcGFjaXR5fWBcbiAgICB9IGVsc2UgaWYgKGQueSA8PSBiYWQpIHtcbiAgICAgICAgcmV0dXJuIGByZ2JhKDI1NSwwLDAsICR7b3BhY2l0eX1gXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGByZ2JhKDI1NSwyNTUsMjU1LCAke29wYWNpdHl9YFxuICAgIH1cbn1cblxuY29uc3QgZmlsbEFydGljbGVJbmZvID0gKHNpbmdsZUFydGljbGVJbmZvLCBkKSA9PiB7XG4gICAgc2luZ2xlQXJ0aWNsZUluZm8uc2VsZWN0KFwiLmFydGljbGUtdGl0bGVcIilcbiAgICAgICAgLmh0bWwoXG4gICAgICAgICAgICBgJHtkLnRpdGxlfWBcbiAgICAgICAgKTtcbiAgICBzaW5nbGVBcnRpY2xlSW5mby5zZWxlY3QoXCIuYXJ0aWNsZS1hdXRob3JcIilcbiAgICAgICAgLmh0bWwoXG4gICAgICAgICAgICBgJHtkLmF1dGhvcn1gXG4gICAgICAgICk7XG4gICAgc2luZ2xlQXJ0aWNsZUluZm8uc2VsZWN0KFwiLmFydGljbGUtc2VudGltZW50XCIpXG4gICAgICAgIC5odG1sKFxuICAgICAgICAgICAgYCR7ZC55fWBcbiAgICAgICAgKTtcbiAgICBzaW5nbGVBcnRpY2xlSW5mby5zZWxlY3QoXCIuYXJ0aWNsZS1yZWxldmFuY2VcIilcbiAgICAgICAgLmh0bWwoXG4gICAgICAgICAgICBgJHtkLnJlbGV2YW5jZX1gXG4gICAgICAgICk7XG4gICAgc2luZ2xlQXJ0aWNsZUluZm8uc2VsZWN0KFwiLmFydGljbGUtZGVzY3JpcHRpb25cIilcbiAgICAgICAgLmh0bWwoXG4gICAgICAgICAgICBgJHtkLmRlc2NyaXB0aW9ufWBcbiAgICAgICAgKTtcbiAgICBzaW5nbGVBcnRpY2xlSW5mby5zZWxlY3QoXCIuYXJ0aWNsZS1pbWFnZVwiKVxuICAgICAgICAuYXR0cihcInNyY1wiLCBgJHtkLmltYWdlfWApXG4gICAgc2luZ2xlQXJ0aWNsZUluZm8uc2VsZWN0KFwiLnJlYWQtbW9yZVwiKVxuICAgICAgICAuYXR0cihcImhyZWZcIiwgYCR7ZC51cmx9YClcbn1cblxuY29uc3QgaGFuZGxlRG90VVggPSAoZCwgYmlnRG90LCBzaW5nbGVBcnRpY2xlSW5mbywgc3BlZWQ9MSkgPT4ge1xuICAgIGNvbnN0IGRlbGF5ID0gMTgwMFxuICAgIGlmIChzcGVlZCA+PSAxKXtcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBiaWdEb3RcbiAgICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmRlbGF5KGRlbGF5KVxuICAgICAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFbGFzdGljKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbigyMDAwKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiclwiLCA4KVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJkYXJrYmx1ZVwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSk7XG4gICAgICAgICAgICBpZihzcGVlZCA+PSAxKXtcbiAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2luZ2xlQXJ0aWNsZUluZm9cbiAgICAgICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoZGVsYXkgKyAxMDAwKVxuICAgICAgICAgICAgICAgICAgICAuZHVyYXRpb24oMTAwKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwicmdiYSgyNTUsMjU1LDI1NSwwLjMpXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZpbGxBcnRpY2xlSW5mbyhzaW5nbGVBcnRpY2xlSW5mbywgZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2luZ2xlQXJ0aWNsZUluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheShkZWxheSArIDE3MDApXG4gICAgICAgICAgICAgICAgICAgICAgICAuZHVyYXRpb24oMjAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcInRyYW5zcGFyZW50XCIpXG4gICAgICAgICAgICAgICAgLy8gfSwgODAwKnNwZWVkKVxuICAgICAgICAgICAgfVxuICAgICAgICAvLyB9LCBkZWxheSpzcGVlZClcbiAgICB9IGVsc2Uge1xuICAgICAgICBiaWdEb3RcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJkYXJrYmx1ZVwiKVxuICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcbiAgICAgICAgYmlnRG90XG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlTGluZWFyKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgICAgIC5hdHRyKFwiclwiLCA4KVxuICAgICAgICBmaWxsQXJ0aWNsZUluZm8oc2luZ2xlQXJ0aWNsZUluZm8sIGQpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBjb25kaXRpb25hbFRpdGxlQ29sb3IsXG4gICAgY29uZGl0aW9uYWxEaXNwbGF5LFxuICAgIGNvbmRpdGlvbmFsT3BhY2l0eSxcbiAgICBjb25kaXRpb25hbENvbG9yLFxuICAgIGZpbGxBcnRpY2xlSW5mbyxcbiAgICBoYW5kbGVEb3RVWFxufSIsImltcG9ydCAnLi9zdHlsZXMvZGV2ZWxvcG1lbnQuY3NzJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcbmltcG9ydCBxdWVyeUZpZWxkIGZyb20gJy4vcXVlcnlfZmllbGQnO1xuaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcyc7XG5cbiBcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGNvbnNvbGUubG9nKFwiRGV2ZWxvcG1lbnQgTW9kZSFcIik7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvcHMgPSB7fVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgY29uc3Qgc2Vjb25kVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlY29uZC10aXRsZVwiKVxuICAgIFxuICAgIGNvbnN0IGNoYXJ0ID0gbmV3IENoYXJ0KHByb3BzKVxuICAgIHByb3BzLmNoYXJ0ID0gY2hhcnRcblxuICAgIG1haW4uaW5zZXJ0QmVmb3JlKHF1ZXJ5RmllbGQocHJvcHMpLCBzZWNvbmRUaXRsZSk7XG5cblxuXG4gICAgY29uc3QgZHVtbXlEYXRhID0gY2hhcnQuZHVtbXlEYXRhKCk7XG4gICAgY2hhcnQuYnVpbGQoZHVtbXlEYXRhKTtcblxuICAgIFxuICAgIFxufSlcbiIsImltcG9ydCB7IG5ld3NfYXBpX2tleSB9IGZyb20gJy4uL2NvbmZpZy9rZXlzJztcblxuY29uc3QgaGVhZGxpbmVzID0gJ2h0dHBzOi8vbmV3c2FwaS5vcmcvdjIvdG9wLWhlYWRsaW5lcz8nO1xuY29uc3QgZXZlcnl0aGluZyA9IFwiaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi9ldmVyeXRoaW5nP1wiO1xuY29uc3QgYWRkQ291bnRyeSA9IGNvdW50cnkgPT4gKGBjb3VudHJ5PSR7Y291bnRyeX0mYCk7XG5jb25zdCBhZGRTb3VyY2UgPSBzb3VyY2UgPT4gKGBzb3VyY2VzPSR7c291cmNlfSZgKTtcbmNvbnN0IGFkZFF1ZXJ5ID0gcXVlcnkgPT4gKGBxPSR7cXVlcnl9JmApOyAvL3NlYXJjaGVzIGZvciBxdWVyeSBpbiBib3RoIHRpdGxlIGFuZCBib2R5XG5jb25zdCBhZGRGcm9tID0gc3RhcnQgPT4gKGBmcm9tPSR7c3RhcnR9JmApO1xuY29uc3Qgc29ydEJ5ID0gb3B0aW9uID0+IChgc29ydEJ5PSR7b3B0aW9ufSZgKTtcbmNvbnN0IGFkZFRvID0gZW5kID0+IChgdG89JHtlbmR9JmApO1xuY29uc3QgYWRkTGFuZ3VhZ2UgPSBsbiA9PiAoYGxhbmd1YWdlPSR7bG59JmApO1xuY29uc3QgYWRkUGFnZXNpemUgPSBpbnQgPT4gKGBwYWdlU2l6ZT0ke2ludH0mYCk7XG5jb25zdCBwYWdlID0gaW50ID0+IChgcGFnZT0ke2ludH0mYCk7XG5cbmNvbnN0IGFwaUtleSA9IGBhcGlLZXk9JHtuZXdzX2FwaV9rZXl9YFxuXG5leHBvcnQgY29uc3QgZmV0Y2hIZWFkbGluZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgdXJsID0gaGVhZGxpbmVzICsgYWRkQ291bnRyeSgndXMnKSArIGFwaUtleTtcbiAgICBjb25zdCByZXEgPSBuZXcgUmVxdWVzdCh1cmwpO1xuICAgIGNvbnNvbGUubG9nKFwiUmVxdWVzdGluZyB0b3AgMjAgaGVhZGxpbmVzIVwiKVxuICAgIHJldHVybiBmZXRjaChyZXEpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZS5qc29uKCkpKSAgICBcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaEV2ZXJ5dGhpbmdGb3IgPSAocXVlcnkpID0+IHtcbiAgICBjb25zdCB1cmwgPSBldmVyeXRoaW5nICsgYWRkUXVlcnkocXVlcnkpICsgYWRkTGFuZ3VhZ2UoJ2VuJykgKyBhZGRQYWdlc2l6ZSgxMDApICsgc29ydEJ5KCdyZWxldmFuY3knKSArIGFwaUtleTtcbiAgICBjb25zdCByZXEgPSBuZXcgUmVxdWVzdCh1cmwpO1xuICAgIGNvbnNvbGUubG9nKGBSZXF1ZXN0aW5nIHRvcCAyMCBhcnRpY2xlcyBhYm91dCAke3F1ZXJ5fSFgKVxuICAgIHJldHVybiBmZXRjaChyZXEpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbn1cblxuXG4iLCJpbXBvcnQgeyBmZXRjaEV2ZXJ5dGhpbmdGb3IgfSBmcm9tICcuL25ld3MnXG5pbXBvcnQgeyBwcm9jZXNzRGF0YSB9IGZyb20gJy4vc2VudGltZW50JztcblxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgXG4gICAgY29uc3QgcXVlcnlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBxdWVyeUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHF1ZXJ5SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJIb25nIEtvbmdcIik7XG4gICAgcXVlcnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInF1ZXJ5LWZpZWxkXCIpO1xuICAgIFxuICAgIFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocXVlcnlJbnB1dClcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiBkZWJvdW5jZWRUeXBpbmcoZXZlbnQsIHByb3BzLCBxdWVyeUlucHV0KSlcbiAgICAvLyBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4geyBoYW5kbGVUeXBpbmcoZXZlbnQsIHByb3BzLCBxdWVyeUlucHV0KX0pXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+IHsgZXZlbnQucHJldmVudERlZmF1bHQoKX0pXG4gICAgLy8gZm9ybS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xuICAgIC8vICAgICBjeWNsZUlucHV0cyhmYWxzZSlcbiAgICAvLyB9KVxuICAgIC8vIGN5Y2xlSW5wdXRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgZm9ybVxuICAgIClcbn1cblxuY29uc3QgY3ljbGVJbnB1dHMgPSAoYWN0aXZlPXRydWUpID0+IHtcbiAgICBjb25zdCBxdWVyeUlucHV0ID0gZDMuc2VsZWN0KFwiLnF1ZXJ5LWZpZWxkXCIpXG4gICAgY29uc3QgdmFsdWUgPVwidGVzdGluZ1wiXG4gICAgbGV0IHByZXZWYWx1ZSA9IFwiXCJcbiAgICB3aGlsZShhY3RpdmUpe1xuICAgICAgICBpZih2YWx1ZSAhPT0gcHJldlZhbHVlKXtcbiAgICAgICAgICAgIHF1ZXJ5SW5wdXRcbiAgICAgICAgICAgICAgICAuaHRtbCh2YWx1ZSlcbiAgICAgICAgICAgIHByZXZWYWx1ZSA9IHZhbHVlXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuY29uc3QgaGFuZGxlVHlwaW5nID0gKGV2ZW50LHByb3BzLCBxdWVyeUlucHV0KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjaGFydCA9IHByb3BzLmNoYXJ0XG4gICAgY29uc3QgdmFsdWUgPSBxdWVyeUlucHV0LnZhbHVlO1xuICAgIGNvbnNvbGUubG9nKGBJIFdBUyBTVUJNSVRURUQgV0lUSCBUSEUgVEVYVCAke3ZhbHVlfWApXG4gICAgZmV0Y2hFdmVyeXRoaW5nRm9yKHZhbHVlKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0ge31cbiAgICAgICAgICAgIHBheWxvYWQucXVlcnkgPSB2YWx1ZVxuICAgICAgICAgICAgcGF5bG9hZC5hcnRpY2xlcyA9IHJlc3BvbnNlLmFydGljbGVzXG4gICAgICAgICAgICByZXR1cm4gcGF5bG9hZFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihwYXlsb2FkID0+IHByb2Nlc3NEYXRhKHBheWxvYWQpKSBcbiAgICAgICAgLnRoZW4oKHBheWxvYWQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVyZW5kZXJpbmdcIik7XG4gICAgICAgICAgICBjaGFydC5yZW5kZXIocGF5bG9hZClcbiAgICAgICAgfSlcbn1cblxuXG4vLyBVc2UgZm9yIHRlc3RpbmcgZnVuY3Rpb25hbGl0eSwgc291cmNlZCBmcm9tOiBodHRwczovL2NvZGVidXJzdC5pby90aHJvdHRsaW5nLWFuZC1kZWJvdW5jaW5nLWluLWphdmFzY3JpcHQtNjQ2ZDA3NmQwYTQ0XG5jb25zdCBkZWJvdW5jZSA9IChkZWxheSwgZm4pID0+IHtcbiAgICBsZXQgdGltZXJJZDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHRpbWVySWQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAgICAgfVxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBmbiguLi5hcmdzKTtcbiAgICAgICAgICAgIHRpbWVySWQgPSBudWxsO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfVxufVxuXG5jb25zdCBkZWJvdW5jZWRUeXBpbmcgPSBkZWJvdW5jZSg3MDAsIGhhbmRsZVR5cGluZyk7XG5cbiIsImltcG9ydCBTZW50aW1lbnQgZnJvbSAnc2VudGltZW50J1xuXG5cbmV4cG9ydCBjb25zdCBwcm9jZXNzRGF0YSA9ICh7YXJ0aWNsZXMsIHZhbHVlfSkgPT4ge1xuICAgIGNvbnN0IHBheWxvYWQgPSB7fVxuICAgIGNvbnN0IHNlbnRpbWVudCA9IG5ldyBTZW50aW1lbnQoKTtcbiAgICBjb25zdCBwcm9jZXNzaW5nRGF0YSA9IFtdO1xuICAgIGNvbnN0IHJhdGlvID0gMC42XG4gICAgZGVidWdnZXJcbiAgICBhcnRpY2xlcy5mb3JFYWNoKGFydGljbGUgPT4ge1xuICAgICAgICBjb25zdCBkYXR1bSA9IHt9XG4gICAgICAgIGRhdHVtLmNvbnRlbnQgPSBhcnRpY2xlLmNvbnRlbnQgfHwgXCJcIlxuICAgICAgICBkYXR1bS50aXRsZSA9IGFydGljbGUudGl0bGUgfHwgXCJVbm5hbWVkXCJcbiAgICAgICAgZGF0dW0uYXV0aG9yID0gYXJ0aWNsZS5hdXRob3IgfHwgZGF0dW0udGl0bGVcbiAgICAgICAgZGF0dW0uc291cmNlID0gYXJ0aWNsZS5zb3VyY2UubmFtZVxuICAgICAgICBkYXR1bS51cmwgPSBhcnRpY2xlLnVybFxuICAgICAgICBkYXR1bS5pbWFnZSA9IGFydGljbGUudXJsVG9JbWFnZVxuICAgICAgICBkYXR1bS5kZXNjcmlwdGlvbiA9IGFydGljbGUuZGVzY3JpcHRpb24gfHwgXCJVbmF2YWlsYWJsZVwiO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY29udGVudFNlbnRpbWVudCA9IHNlbnRpbWVudC5hbmFseXplKGRhdHVtLmNvbnRlbnQpXG4gICAgICAgIGNvbnN0IHRpdGxlU2VudGltZW50ID0gc2VudGltZW50LmFuYWx5emUoZGF0dW0udGl0bGUpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBjb21wYXJhdGl2ZSA9IGNvbnRlbnRTZW50aW1lbnQuY29tcGFyYXRpdmUgPCAwLjA4ID8gTWF0aC5hYnMoY29udGVudFNlbnRpbWVudC5jb21wYXJhdGl2ZSkvMC43NSA6IGNvbnRlbnRTZW50aW1lbnQuY29tcGFyYXRpdmUgLy9USElTIElTIE9OTFkgQSBQTEFDRUhPTERFUiwgdXBkYXRlIHRvIG1vcmUgbWVhbmluZ2Z1bGx5IGFjY3VyYXRlIG1ldHJpYyBhZnRlciBiYXNpY3NcbiAgICAgICAgZGF0dW0ucmVsZXZhbmNlID0gTWF0aC5yb3VuZChjb21wYXJhdGl2ZSAqIDEwMDApLzEwMDBcbiAgICAgICAgZGF0dW0ueCA9IGFydGljbGUucHVibGlzaGVkQXQuc3BsaXQoXCJUXCIpWzBdXG4gICAgICAgIGNvbnN0IHNjb3JlID0gKGRhdHVtLnJlbGV2YW5jZS8wLjI1KSAqIChNYXRoLnJvdW5kKCgoY29udGVudFNlbnRpbWVudC5zY29yZSAqIHJhdGlvKSArICh0aXRsZVNlbnRpbWVudC5zY29yZSAqICgxLXJhdGlvKSkpICogMTAwMCkgLzEwMDApO1xuICAgICAgICBkYXR1bS55ID0gTWF0aC5yb3VuZChzY29yZSAqIDEwMDApLzEwMDBcbiAgICAgICAgcHJvY2Vzc2luZ0RhdGEucHVzaChkYXR1bSlcbiAgICB9KVxuICAgIHBheWxvYWQuc2NhdHRlckRhdGEgPSBwcm9jZXNzaW5nRGF0YS5zb3J0KHNvcnREYXRlRGVzYyk7XG4gICAgcGF5bG9hZC5saW5lRGF0YSA9IGF2ZXJhZ2VEYXlTY29yZXMocHJvY2Vzc2luZ0RhdGEpO1xuICAgIHBheWxvYWQudG90YWwgPSBjYWxjdWxhdGVUb3RhbHMocHJvY2Vzc2luZ0RhdGEpO1xuXG4gICAgcmV0dXJuIHBheWxvYWRcbn1cblxuY29uc3QgY2FsY3VsYXRlVG90YWxzID0gZGF0YSA9PiB7XG4gICAgY29uc3QgdG90YWwgPSB7fVxuICAgIHRvdGFsLmhpZ2hTY29yZSA9IGRhdGFbMF07XG4gICAgZGF0YS5mb3JFYWNoKGRhdHVtID0+IHtcbiAgICAgICAgdG90YWwuc2NvcmUgPSB0b3RhbC5zY29yZSA/IHRvdGFsLnNjb3JlICsgZGF0dW0ueSA6IGRhdHVtLnlcbiAgICAgICAgdG90YWwuY291bnQgPSB0b3RhbC5jb3VudCA/IHRvdGFsLmNvdW50ICsgMSA6IDFcbiAgICAgICAgdG90YWwuaGlnaFNjb3JlID0gTWF0aC5hYnMoZGF0dW0ueSkgPiBNYXRoLmFicyh0b3RhbC5oaWdoU2NvcmUueSkgPyBkYXR1bSA6IHRvdGFsLmhpZ2hTY29yZVxuICAgIH0pXG4gICAgdG90YWwuYXZlcmFnZSA9IHRvdGFsLnNjb3JlL3RvdGFsLmNvdW50O1xuICAgIHJldHVybiB0b3RhbFxufVxuXG5jb25zdCBhdmVyYWdlRGF5U2NvcmVzID0gZGF0YSA9PiB7XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IHt9XG4gICAgY29uc3QgY291bnQgPSB7fVxuICAgIGRhdGEuZm9yRWFjaChkYXR1bSA9PiB7XG4gICAgICAgIHByb2Nlc3NlZERhdGFbZGF0dW0ueF0gPSBwcm9jZXNzZWREYXRhW2RhdHVtLnhdID8gcHJvY2Vzc2VkRGF0YVtkYXR1bS54XSArIGRhdHVtLnkgOiBkYXR1bS55O1xuICAgICAgICBjb3VudFtkYXR1bS54XSA9IGNvdW50W2RhdHVtLnhdID8gY291bnRbZGF0dW0ueF0gKyAxIDogMVxuICAgIH0pXG5cbiAgICBjb25zdCBhdmVyYWdlZERhdGEgPSBbXVxuICAgIE9iamVjdC5rZXlzKHByb2Nlc3NlZERhdGEpLmZvckVhY2goZGF0ZSA9PiB7XG4gICAgICAgIGF2ZXJhZ2VkRGF0YS5wdXNoKHtbZGF0ZV06IHt4OiBkYXRlLCB5OiBNYXRoLnJvdW5kKChwcm9jZXNzZWREYXRhW2RhdGVdIC8gY291bnRbZGF0ZV0pICogMTAwMCkgLyAxMDAwfX0pO1xuICAgIH0pXG4gICAgXG4gICAgY29uc3Qgc29ydGVkQXZlcmFnZWREYXRhID0gYXZlcmFnZWREYXRhLnNvcnQoc29ydERhdGUpXG4gICAgcmV0dXJuIHNvcnRlZEF2ZXJhZ2VkRGF0YVxufVxuXG5jb25zdCBzb3J0RGF0ZSA9IChhLCBiKSA9PiB7XG4gICAgY29uc3QgZGF0ZTEgPSBuZXcgRGF0ZShhLngpXG4gICAgY29uc3QgZGF0ZTIgPSBuZXcgRGF0ZShiLngpXG4gICAgaWYgKGRhdGUxID49IGRhdGUyKXsgXG4gICAgICAgIHJldHVybiAxXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgfVxufTtcblxuY29uc3Qgc29ydERhdGVEZXNjID0gKGIsIGEpID0+IHtcbiAgICBjb25zdCBkYXRlMSA9IG5ldyBEYXRlKGEueClcbiAgICBjb25zdCBkYXRlMiA9IG5ldyBEYXRlKGIueClcbiAgICBpZiAoZGF0ZTEgPj0gZGF0ZTIpeyBcbiAgICAgICAgcmV0dXJuIDFcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gLTFcbiAgICB9XG59XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=