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

            svg.append("g").attr("class", 'yaxis').call(y_axis.tickSize(0).tickSizeOuter(5)).selectAll("text").remove();

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
            this.initialize = (0, _chart_utils.initialRender)(svg, initialize_duration);
            (0, _chart_utils.conditionalTitleColor)(total);
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
            }).style("fill", "rgb(32, 196, 168)");

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
            path.data([lineData]).transition().delay(initialize_duration).ease(d3.easeExp).duration(1700).attr("class", "line").style("stroke", "rgba(0, 0, 139)").attr("d", line);

            svg.select(".good-line").transition().delay(initialize_duration).ease(d3.easeExp).duration(1700).attr("x1", 0).attr("y1", yscl(good)).attr("x2", width).attr("y2", yscl(good)).attr("display", function () {
                return (0, _chart_utils.conditionalDisplay)(yscl(good), 0, false);
            }).style("stroke", "rgb(32, 196, 168)").style("stroke-width", "2px");
            // rgb(32, 196, 168)

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

                dot.transition().ease(d3.easeElastic).duration(500).attr("r", 10);

                d3.selectAll(".article-list-item").style("background", function (d) {
                    return (0, _chart_utils.conditionalColor)(d, good, bad, 0.3);
                });
                (0, _chart_utils.handleArticleScroll)(i);

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
                (0, _chart_utils.handleArticleScroll)(i);
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
                    (0, _chart_utils.handleArticleScroll)(i);
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
            return "rgba(" + 32 * Math.sqrt(d.average) + ", " + 196 * Math.sqrt(d.average) + ", " + 168 * Math.sqrt(d.average) + ", 0.97)";
        } else if (d.average < -0.13) {
            return "rgba(" + 128 * Math.sqrt(Math.abs(d.average)) + ", " + 40 * Math.sqrt(Math.abs(d.average)) + ", " + 40 * Math.sqrt(Math.abs(d.average)) + ", 0.97)";
        } else {
            return "rgba(255,255,255,0.8)";
        }
    });
    d3.select("#second-title").data([total]).transition().ease(d3.easeExp).duration(2000).style("color", function (d) {
        if (d.average > 0.13) {
            return "rgba(" + 32 * Math.sqrt(d.average) + ", " + 196 * Math.sqrt(d.average) + ", " + 168 * Math.sqrt(d.average) + ", 0.97)";
        } else if (d.average < -0.13) {
            return "rgba(" + 128 * Math.sqrt(Math.abs(d.average)) + ", " + 40 * Math.sqrt(Math.abs(d.average)) + ", " + 40 * Math.sqrt(Math.abs(d.average)) + ", 0.97)";
        } else {
            return "rgba(255,255,255,0.8)";
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
        return "0.8";
    } else if (d.y <= bad) {
        return "0.6";
    } else {
        return "0.3";
    }
};

var conditionalColor = function conditionalColor(d, good, bad) {
    var opacity = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    if (d.y >= good) {
        return "rgba(32,196,168, " + opacity;
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

    d3.select(".article-image").transition("appear").delay(800).ease(d3.easeCubic).duration(intialize_duration + 300).style("opacity", 1);

    d3.select(".info-container").transition("appear").delay(800).ease(d3.easeCubic).duration(intialize_duration + 300).style("opacity", 1);

    return false;
};

var handleArticleScroll = function handleArticleScroll(i) {
    document.getElementById("article_" + i).scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
    d3.select("#article_" + i).style("background", "rgba(0, 0, 139, 0.5)");
    //     .style("transform", "rotateX(0deg)");

    // if ( i > 3 ){
    //     d3.select(`#article_${i-1}`)
    //         .style("opacity", "0.4")
    //         .style("transform", "rotateX(10deg)");
    //     d3.select(`#article_${i-2}`)
    //         .style("opacity", "0.3")
    //         .style("transform", "rotateX(15deg)");
    //     d3.select(`#article_${i+1}`)
    //         .style("opacity", "0.4")
    //         .style("transform", "rotateX(-10deg)");
    //     d3.select(`#article_${i+2}`)
    //         .style("opacity", "0.3")
    //         .style("transform", "rotateX(-15deg)");
    // }
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
exports.handleArticleScroll = handleArticleScroll;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xhbmd1YWdlcyBzeW5jIF5cXC5cXC8uKlxcL2luZGV4JCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xhbmd1YWdlcy9lbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xhbmd1YWdlcy9lbi9zY29yaW5nLXN0cmF0ZWd5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZW50aW1lbnQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZW50aW1lbnQvbGliL2xhbmd1YWdlLXByb2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xpYi90b2tlbml6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0X3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlcnlfZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbnRpbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2RldmVsb3BtZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uY3NzPzVkMzYiXSwibmFtZXMiOlsibmV3c19hcGlfa2V5IiwicHJvY2VzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsIkVycm9yIiwiZGVmYXVsdENsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJlIiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsImNhbGwiLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImxlbmd0aCIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwibGVuIiwicnVuIiwibmV4dFRpY2siLCJhcmdzIiwiQXJyYXkiLCJhcmd1bWVudHMiLCJpIiwicHVzaCIsIkl0ZW0iLCJhcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwidGl0bGUiLCJicm93c2VyIiwiZW52IiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJuYW1lIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siLCJsYWJlbHMiLCJyZXF1aXJlIiwic2NvcmluZ1N0cmF0ZWd5IiwibmVnYXRvcnMiLCJ0b2tlbnMiLCJjdXJzb3IiLCJ0b2tlblNjb3JlIiwicHJldnRva2VuIiwidG9rZW5pemUiLCJsYW5ndWFnZVByb2Nlc3NvciIsIlNlbnRpbWVudCIsIm9wdGlvbnMiLCJyZWdpc3Rlckxhbmd1YWdlIiwibGFuZ3VhZ2VDb2RlIiwibGFuZ3VhZ2UiLCJhZGRMYW5ndWFnZSIsImFuYWx5emUiLCJwaHJhc2UiLCJvcHRzIiwiY2FsbGJhY2siLCJnZXRMYWJlbHMiLCJleHRyYXMiLCJPYmplY3QiLCJhc3NpZ24iLCJzY29yZSIsIndvcmRzIiwicG9zaXRpdmUiLCJuZWdhdGl2ZSIsIm9iaiIsImhhc093blByb3BlcnR5IiwiYXBwbHlTY29yaW5nU3RyYXRlZ3kiLCJyZXN1bHQiLCJjb21wYXJhdGl2ZSIsImVtb2ppcyIsImVuTGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJlbiIsImdldExhbmd1YWdlIiwiZXJyIiwiZGVmYXVsdFNjb3JpbmdTdHJhdGVneSIsImlucHV0IiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwic3BsaXQiLCJDaGFydCIsInByb3BzIiwiZGF0YSIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsImN1dG9mZiIsImdvb2QiLCJiYWQiLCJ3aWR0aCIsImhlaWdodCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXR0ciIsInN0eWxlIiwiYXBwZW5kIiwidG9kYXkiLCJEYXRlIiwic3RhcnREYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJlbmREYXRlIiwiZGF0ZVJhbmdlIiwieEZvcm1hdCIsImluaXRpYWxpemUiLCJkdW1teURhdGEiLCJkYXRhTGVuZ3RoIiwibWFnIiwieCIsInkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJkYXR1bSIsImtleXMiLCJ4ZGF0YSIsInlkYXRhIiwiZm9yRWFjaCIsInBhcnNlVGltZSIsInRpbWVQYXJzZSIsInhzY2wiLCJzY2FsZVRpbWUiLCJkb21haW4iLCJleHRlbnQiLCJkIiwicmFuZ2UiLCJ4X2F4aXMiLCJheGlzQm90dG9tIiwic2NhbGUiLCJ5c2NsIiwic2NhbGVMaW5lYXIiLCJtYXgiLCJtaW4iLCJ5X2F4aXMiLCJheGlzTGVmdCIsInRpY2tGb3JtYXQiLCJ0aW1lRm9ybWF0Iiwic2VsZWN0QWxsIiwidGlja1NpemUiLCJ0aWNrU2l6ZU91dGVyIiwicmVtb3ZlIiwibGluZSIsImN1cnZlIiwiY3VydmVCdW5kbGUiLCJiZXRhIiwidGV4dCIsInBheWxvYWQiLCJzY2F0dGVyRGF0YSIsInRvdGFsIiwic2luZ2xlQXJ0aWNsZUluZm8iLCJsaW5lRGF0YSIsImluaXRpYWxpemVfZHVyYXRpb24iLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJlYXNlIiwiZWFzZUV4cCIsImR1cmF0aW9uIiwicmVhZE1vcmUiLCJwYXRoIiwiY3JlYXRlRG90cyIsImVudGVyIiwid2luZG93Iiwib3BlbiIsInVybCIsImRvdCIsImVhc2VFbGFzdGljIiwiaGlnaFNjb3JlIiwiXyIsImFydGljbGVzQ29udGFpbmVyIiwiZGF0ZSIsIm1vbnRoIiwiZGF5IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiYmlnRG90IiwiZWFzZUN1YmljIiwiZXhpdCIsInVwZGF0ZURvdHMiLCJyIiwiY29uZGl0aW9uYWxUaXRsZUNvbG9yIiwiYXZlcmFnZSIsInNxcnQiLCJhYnMiLCJjb25kaXRpb25hbERpc3BsYXkiLCJhdHRyX3ZhbHVlIiwiZ3JlYXRlclRoYW4iLCJjb25kaXRpb25hbE9wYWNpdHkiLCJjb25kaXRpb25hbENvbG9yIiwib3BhY2l0eSIsImZpbGxBcnRpY2xlSW5mbyIsInNvdXJjZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJoYW5kbGVEb3RVWCIsInNwZWVkIiwiaW50aWFsaXplX2R1cmF0aW9uIiwiZWFzZUxpbmVhciIsImFkZERheSIsImdlbmVyYXRlRGF0ZVJhbmdlIiwiZGF0ZXMiLCJjdXJyZW50RGF0ZSIsImZvcm1hdHRlZERhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwic29ydERhdGUiLCJhIiwiYiIsImRhdGUxIiwiZGF0ZTIiLCJtZXJnZUxpbmVEYXRhIiwibWVyZ2VkRGF0YSIsInVua2V5ZWREYXRhIiwidmFsdWVzIiwib3V0ZXJEYXR1bSIsImZsYXQiLCJzb3J0IiwiaW5pdGlhbFJlbmRlciIsImhhbmRsZUFydGljbGVTY3JvbGwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWluIiwic2Vjb25kVGl0bGUiLCJjaGFydCIsImluc2VydEJlZm9yZSIsImJ1aWxkIiwiaGVhZGxpbmVzIiwiZXZlcnl0aGluZyIsImFkZENvdW50cnkiLCJjb3VudHJ5IiwiYWRkU291cmNlIiwiYWRkUXVlcnkiLCJxdWVyeSIsImFkZEZyb20iLCJzdGFydCIsInNvcnRCeSIsIm9wdGlvbiIsImFkZFRvIiwiZW5kIiwibG4iLCJhZGRQYWdlc2l6ZSIsImludCIsInBhZ2UiLCJhcGlLZXkiLCJmZXRjaEhlYWRsaW5lcyIsInJlcSIsIlJlcXVlc3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJmZXRjaEV2ZXJ5dGhpbmdGb3IiLCJmb3JtIiwiY3JlYXRlRWxlbWVudCIsInF1ZXJ5SW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJ0eXBpbmdXb3JkIiwiYXBwZW5kQ2hpbGQiLCJkZWJvdW5jZWRUeXBpbmciLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RyIiwiY3ljbGUiLCJzZXRJbnRlcnZhbCIsInJhbmQiLCJzbGljZSIsImNsZWFySW50ZXJ2YWwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xlYXJJbnB1dCIsImhhbmRsZVR5cGluZyIsInZhbHVlIiwiYXJ0aWNsZXMiLCJyZW5kZXIiLCJkZWJvdW5jZSIsImZuIiwidGltZXJJZCIsInByb2Nlc3NEYXRhIiwic2VudGltZW50IiwicHJvY2Vzc2luZ0RhdGEiLCJyYXRpbyIsImNvbnRlbnQiLCJhcnRpY2xlIiwiYXV0aG9yIiwidXJsVG9JbWFnZSIsImNvbnRlbnRTZW50aW1lbnQiLCJ0aXRsZVNlbnRpbWVudCIsInJlbGV2YW5jZSIsInJvdW5kIiwicHVibGlzaGVkQXQiLCJzb3J0RGF0ZURlc2MiLCJhdmVyYWdlRGF5U2NvcmVzIiwiY2FsY3VsYXRlVG90YWxzIiwiY291bnQiLCJwcm9jZXNzZWREYXRhIiwiYXZlcmFnZWREYXRhIiwic29ydGVkQXZlcmFnZWREYXRhIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFD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QzdELEdBQUc2RCxJQUFKLEVBQVU1RCxHQUFHQyxLQUFLcUwsS0FBTCxDQUFZTSxjQUFjaEksSUFBZCxJQUFzQitILE1BQU0vSCxJQUFOLENBQXZCLEdBQXNDLElBQWpELElBQXlELElBQXRFLEVBQTNCO0FBQ0gsS0FGRDs7QUFJQSxRQUFNa0kscUJBQXFCRCxhQUFhcEYsSUFBYixDQUFrQlgsUUFBbEIsQ0FBM0I7QUFDQSxXQUFPZ0csa0JBQVA7QUFDSCxDQWZEOztBQWlCQSxJQUFNaEcsV0FBVyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3ZCLFFBQU1DLFFBQVEsSUFBSTdHLElBQUosQ0FBUzJHLEVBQUVoRyxDQUFYLENBQWQ7QUFDQSxRQUFNbUcsUUFBUSxJQUFJOUcsSUFBSixDQUFTNEcsRUFBRWpHLENBQVgsQ0FBZDtBQUNBLFFBQUlrRyxTQUFTQyxLQUFiLEVBQW1CO0FBQ2YsZUFBTyxDQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsZUFBTyxDQUFDLENBQVI7QUFDSDtBQUNKLENBUkQ7O0FBVUEsSUFBTXNGLGVBQWUsU0FBZkEsWUFBZSxDQUFDeEYsQ0FBRCxFQUFJRCxDQUFKLEVBQVU7QUFDM0IsUUFBTUUsUUFBUSxJQUFJN0csSUFBSixDQUFTMkcsRUFBRWhHLENBQVgsQ0FBZDtBQUNBLFFBQU1tRyxRQUFRLElBQUk5RyxJQUFKLENBQVM0RyxFQUFFakcsQ0FBWCxDQUFkO0FBQ0EsUUFBSWtHLFNBQVNDLEtBQWIsRUFBbUI7QUFDZixlQUFPLENBQVA7QUFDSCxLQUZELE1BRU87QUFDSCxlQUFPLENBQUMsQ0FBUjtBQUNIO0FBQ0osQ0FSRCxDOzs7Ozs7Ozs7OztBQzNFQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY29uc3QgbmV3c19hcGlfa2V5ID0gXCJkM2E5MzE4OTFjMTE0NzllYWViYWE4YWRiMzJhZjI0NlwiIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9lbi9pbmRleFwiOiBcIi4vbm9kZV9tb2R1bGVzL3NlbnRpbWVudC9sYW5ndWFnZXMvZW4vaW5kZXguanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xhbmd1YWdlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC9pbmRleCRcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBsYWJlbHM6IHJlcXVpcmUoJy4vbGFiZWxzLmpzb24nKSxcbiAgICBzY29yaW5nU3RyYXRlZ3k6IHJlcXVpcmUoJy4vc2NvcmluZy1zdHJhdGVneScpXG59O1xuIiwidmFyIG5lZ2F0b3JzID0gcmVxdWlyZSgnLi9uZWdhdG9ycy5qc29uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGFwcGx5OiBmdW5jdGlvbih0b2tlbnMsIGN1cnNvciwgdG9rZW5TY29yZSkge1xuICAgICAgICBpZiAoY3Vyc29yID4gMCkge1xuICAgICAgICAgICAgdmFyIHByZXZ0b2tlbiA9IHRva2Vuc1tjdXJzb3IgLSAxXTtcbiAgICAgICAgICAgIGlmIChuZWdhdG9yc1twcmV2dG9rZW5dKSB7XG4gICAgICAgICAgICAgICAgdG9rZW5TY29yZSA9IC10b2tlblNjb3JlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2tlblNjb3JlO1xuICAgIH1cbn07XG4iLCJ2YXIgdG9rZW5pemUgPSByZXF1aXJlKCcuL3Rva2VuaXplJyk7XG52YXIgbGFuZ3VhZ2VQcm9jZXNzb3IgPSByZXF1aXJlKCcuL2xhbmd1YWdlLXByb2Nlc3NvcicpO1xuXG4vKipcbiAqIENvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIEluc3RhbmNlIG9wdGlvbnNcbiAqL1xudmFyIFNlbnRpbWVudCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbn07XG5cbi8qKlxuICogUmVnaXN0ZXJzIHRoZSBzcGVjaWZpZWQgbGFuZ3VhZ2VcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbGFuZ3VhZ2VDb2RlXG4gKiAgICAgLSBUd28tZGlnaXQgY29kZSBmb3IgdGhlIGxhbmd1YWdlIHRvIHJlZ2lzdGVyXG4gKiBAcGFyYW0ge09iamVjdH0gbGFuZ3VhZ2VcbiAqICAgICAtIFRoZSBsYW5ndWFnZSBtb2R1bGUgdG8gcmVnaXN0ZXJcbiAqL1xuU2VudGltZW50LnByb3RvdHlwZS5yZWdpc3Rlckxhbmd1YWdlID0gZnVuY3Rpb24gKGxhbmd1YWdlQ29kZSwgbGFuZ3VhZ2UpIHtcbiAgICBsYW5ndWFnZVByb2Nlc3Nvci5hZGRMYW5ndWFnZShsYW5ndWFnZUNvZGUsIGxhbmd1YWdlKTtcbn07XG5cbi8qKlxuICogUGVyZm9ybXMgc2VudGltZW50IGFuYWx5c2lzIG9uIHRoZSBwcm92aWRlZCBpbnB1dCAncGhyYXNlJy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGhyYXNlXG4gKiAgICAgLSBJbnB1dCBwaHJhc2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKiAgICAgLSBPcHRpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cy5sYW5ndWFnZVxuICogICAgIC0gSW5wdXQgbGFuZ3VhZ2UgY29kZSAoMiBkaWdpdCBjb2RlKSwgZGVmYXVsdHMgdG8gJ2VuJ1xuICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZXh0cmFzXG4gKiAgICAgLSBPcHRpb25hbCBzZW50aW1lbnQgYWRkaXRpb25zIHRvIEFGSU5OIChoYXNoIGsvdiBwYWlycylcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiAgICAgLSBPcHRpb25hbCBjYWxsYmFja1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5TZW50aW1lbnQucHJvdG90eXBlLmFuYWx5emUgPSBmdW5jdGlvbiAocGhyYXNlLCBvcHRzLCBjYWxsYmFjaykge1xuICAgIC8vIFBhcnNlIGFyZ3VtZW50c1xuICAgIGlmICh0eXBlb2YgcGhyYXNlID09PSAndW5kZWZpbmVkJykgcGhyYXNlID0gJyc7XG4gICAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxiYWNrID0gb3B0cztcbiAgICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgIHZhciBsYW5ndWFnZUNvZGUgPSBvcHRzLmxhbmd1YWdlIHx8ICdlbic7XG4gICAgdmFyIGxhYmVscyA9IGxhbmd1YWdlUHJvY2Vzc29yLmdldExhYmVscyhsYW5ndWFnZUNvZGUpO1xuXG4gICAgLy8gTWVyZ2UgZXh0cmEgbGFiZWxzXG4gICAgaWYgKHR5cGVvZiBvcHRzLmV4dHJhcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbGFiZWxzID0gT2JqZWN0LmFzc2lnbihsYWJlbHMsIG9wdHMuZXh0cmFzKTtcbiAgICB9XG5cbiAgICAvLyBTdG9yYWdlIG9iamVjdHNcbiAgICB2YXIgdG9rZW5zICAgICAgPSB0b2tlbml6ZShwaHJhc2UpLFxuICAgICAgICBzY29yZSAgICAgICA9IDAsXG4gICAgICAgIHdvcmRzICAgICAgID0gW10sXG4gICAgICAgIHBvc2l0aXZlICAgID0gW10sXG4gICAgICAgIG5lZ2F0aXZlICAgID0gW107XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgdG9rZW5zXG4gICAgdmFyIGkgPSB0b2tlbnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdmFyIG9iaiA9IHRva2Vuc1tpXTtcbiAgICAgICAgaWYgKCFsYWJlbHMuaGFzT3duUHJvcGVydHkob2JqKSkgY29udGludWU7XG4gICAgICAgIHdvcmRzLnB1c2gob2JqKTtcblxuICAgICAgICAvLyBBcHBseSBzY29yaW5nIHN0cmF0ZWd5XG4gICAgICAgIHZhciB0b2tlblNjb3JlID0gbGFiZWxzW29ial07XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgIHRva2VuU2NvcmUgPSBsYW5ndWFnZVByb2Nlc3Nvci5hcHBseVNjb3JpbmdTdHJhdGVneShsYW5ndWFnZUNvZGUsIHRva2VucywgaSwgdG9rZW5TY29yZSk7XG4gICAgICAgIGlmICh0b2tlblNjb3JlID4gMCkgcG9zaXRpdmUucHVzaChvYmopO1xuICAgICAgICBpZiAodG9rZW5TY29yZSA8IDApIG5lZ2F0aXZlLnB1c2gob2JqKTtcbiAgICAgICAgc2NvcmUgKz0gdG9rZW5TY29yZTtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICBzY29yZTogICAgICAgICAgc2NvcmUsXG4gICAgICAgIGNvbXBhcmF0aXZlOiAgICB0b2tlbnMubGVuZ3RoID4gMCA/IHNjb3JlIC8gdG9rZW5zLmxlbmd0aCA6IDAsXG4gICAgICAgIHRva2VuczogICAgICAgICB0b2tlbnMsXG4gICAgICAgIHdvcmRzOiAgICAgICAgICB3b3JkcyxcbiAgICAgICAgcG9zaXRpdmU6ICAgICAgIHBvc2l0aXZlLFxuICAgICAgICBuZWdhdGl2ZTogICAgICAgbmVnYXRpdmVcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIG9wdGlvbmFsIGFzeW5jIGludGVyZmFjZVxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2VudGltZW50O1xuIiwidmFyIGVtb2ppcyA9IHJlcXVpcmUoJy4uL2J1aWxkL2Vtb2ppLmpzb24nKTtcblxuLy8gRW5nbGlzaCBpcyBsb2FkZWQgYnkgZGVmYXVsdFxudmFyIGVuTGFuZ3VhZ2UgPSByZXF1aXJlKCcuLi9sYW5ndWFnZXMvZW4vaW5kZXgnKTtcbi8vIEFkZCBlbW9qaXNcbk9iamVjdC5hc3NpZ24oZW5MYW5ndWFnZS5sYWJlbHMsIGVtb2ppcyk7XG5cbi8vIENhY2hlIGxvYWRlZCBsYW5ndWFnZXNcbnZhciBsYW5ndWFnZXMgPSB7XG4gICAgZW46IGVuTGFuZ3VhZ2Vcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIHRoZSBzcGVjaWZpZWQgbGFuZ3VhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBsYW5ndWFnZUNvZGVcbiAgICAgKiAgICAgLSBUd28tZGlnaXQgY29kZSBmb3IgdGhlIGxhbmd1YWdlIHRvIHJlZ2lzdGVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGxhbmd1YWdlXG4gICAgICogICAgIC0gVGhlIGxhbmd1YWdlIG1vZHVsZSB0byByZWdpc3RlclxuICAgICAqL1xuICAgIGFkZExhbmd1YWdlOiBmdW5jdGlvbiAobGFuZ3VhZ2VDb2RlLCBsYW5ndWFnZSkge1xuICAgICAgICBpZiAoIWxhbmd1YWdlLmxhYmVscykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdsYW5ndWFnZS5sYWJlbHMgbXVzdCBiZSBkZWZpbmVkIScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBlbW9qaXNcbiAgICAgICAgT2JqZWN0LmFzc2lnbihsYW5ndWFnZS5sYWJlbHMsIGVtb2ppcyk7XG4gICAgICAgIGxhbmd1YWdlc1tsYW5ndWFnZUNvZGVdID0gbGFuZ3VhZ2U7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhIGxhbmd1YWdlIG9iamVjdCBmcm9tIHRoZSBjYWNoZSxcbiAgICAgKiBvciB0cmllcyB0byBsb2FkIGl0IGZyb20gdGhlIHNldCBvZiBzdXBwb3J0ZWQgbGFuZ3VhZ2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGFuZ3VhZ2VDb2RlIC0gVHdvLWRpZ2l0IGNvZGUgZm9yIHRoZSBsYW5ndWFnZSB0byBmZXRjaFxuICAgICAqL1xuICAgIGdldExhbmd1YWdlOiBmdW5jdGlvbihsYW5ndWFnZUNvZGUpIHtcbiAgICAgICAgaWYgKCFsYW5ndWFnZUNvZGUpIHtcbiAgICAgICAgICAgIC8vIERlZmF1bHQgdG8gZW5nbGlzaCBpZiBubyBsYW5ndWFnZSB3YXMgc3BlY2lmaWVkXG4gICAgICAgICAgICByZXR1cm4gbGFuZ3VhZ2VzLmVuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbGFuZ3VhZ2VzW2xhbmd1YWdlQ29kZV0pIHtcbiAgICAgICAgICAgIC8vIFRyeSB0byBsb2FkIHNwZWNpZmllZCBsYW5ndWFnZVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICAgICAgICAgIHZhciBsYW5ndWFnZSA9IHJlcXVpcmUoJy4uL2xhbmd1YWdlcy8nICsgbGFuZ3VhZ2VDb2RlICsgJy9pbmRleCcpO1xuICAgICAgICAgICAgICAgIC8vIEFkZCBsYW5ndWFnZSB0byBpbi1tZW1vcnkgY2FjaGVcbiAgICAgICAgICAgICAgICB0aGlzLmFkZExhbmd1YWdlKGxhbmd1YWdlQ29kZSwgbGFuZ3VhZ2UpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBsYW5ndWFnZSBmb3VuZDogJyArIGxhbmd1YWdlQ29kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxhbmd1YWdlc1tsYW5ndWFnZUNvZGVdO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIEFGSU5OLTE2NSB3ZWlnaHRlZCBsYWJlbHMgZm9yIHRoZSBzcGVjaWZpZWQgbGFuZ3VhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBsYW5ndWFnZUNvZGUgLSBUd28tZGlnaXQgbGFuZ3VhZ2UgY29kZVxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRMYWJlbHM6IGZ1bmN0aW9uKGxhbmd1YWdlQ29kZSkge1xuICAgICAgICB2YXIgbGFuZ3VhZ2UgPSB0aGlzLmdldExhbmd1YWdlKGxhbmd1YWdlQ29kZSk7XG4gICAgICAgIHJldHVybiBsYW5ndWFnZS5sYWJlbHM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgYSBzY29yaW5nIHN0cmF0ZWd5IGZvciB0aGUgY3VycmVudCB0b2tlblxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGxhbmd1YWdlQ29kZSAtIFR3by1kaWdpdCBsYW5ndWFnZSBjb2RlXG4gICAgICogQHBhcmFtIHtBcnJheX0gdG9rZW5zIC0gVG9rZW5zIG9mIHRoZSBwaHJhc2UgdG8gYW5hbHl6ZVxuICAgICAqIEBwYXJhbSB7aW50fSBjdXJzb3IgLSBDdXJzb3Igb2YgdGhlIGN1cnJlbnQgdG9rZW4gYmVpbmcgYW5hbHl6ZWRcbiAgICAgKiBAcGFyYW0ge2ludH0gdG9rZW5TY29yZSAtIFRoZSBzY29yZSBvZiB0aGUgY3VycmVudCB0b2tlbiBiZWluZyBhbmFseXplZFxuICAgICAqL1xuICAgIGFwcGx5U2NvcmluZ1N0cmF0ZWd5OiBmdW5jdGlvbihsYW5ndWFnZUNvZGUsIHRva2VucywgY3Vyc29yLCB0b2tlblNjb3JlKSB7XG4gICAgICAgIHZhciBsYW5ndWFnZSA9IHRoaXMuZ2V0TGFuZ3VhZ2UobGFuZ3VhZ2VDb2RlKTtcbiAgICAgICAgLy8gRmFsbGJhY2sgdG8gZGVmYXVsdCBzdHJhdGVneSBpZiBub25lIHdhcyBzcGVjaWZpZWRcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICAgICAgdmFyIHNjb3JpbmdTdHJhdGVneSA9IGxhbmd1YWdlLnNjb3JpbmdTdHJhdGVneSB8fCBkZWZhdWx0U2NvcmluZ1N0cmF0ZWd5O1xuICAgICAgICByZXR1cm4gc2NvcmluZ1N0cmF0ZWd5LmFwcGx5KHRva2VucywgY3Vyc29yLCB0b2tlblNjb3JlKTtcbiAgICB9XG59O1xuXG52YXIgZGVmYXVsdFNjb3JpbmdTdHJhdGVneSA9IHtcbiAgICBhcHBseTogZnVuY3Rpb24odG9rZW5zLCBjdXJzb3IsIHRva2VuU2NvcmUpIHtcbiAgICAgICAgcmV0dXJuIHRva2VuU2NvcmU7XG4gICAgfVxufTtcbiIsIi8qZXNsaW50IG5vLXVzZWxlc3MtZXNjYXBlOiBcIm9mZlwiKi9cblxuLyoqXG4gKiBSZW1vdmUgc3BlY2lhbCBjaGFyYWN0ZXJzIGFuZCByZXR1cm4gYW4gYXJyYXkgb2YgdG9rZW5zICh3b3JkcykuXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlucHV0IElucHV0IHN0cmluZ1xuICogQHJldHVybiB7YXJyYXl9ICAgICAgICBBcnJheSBvZiB0b2tlbnNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dFxuICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvXFxuL2csICcgJylcbiAgICAgICAgLnJlcGxhY2UoL1suLFxcLyMhJCVcXF4mXFwqOzp7fT1fYFxcXCJ+KCldL2csICcnKVxuICAgICAgICAuc3BsaXQoJyAnKTtcbn07XG4iLCJpbXBvcnQge1xuICAgIGNvbmRpdGlvbmFsQ29sb3IsXG4gICAgY29uZGl0aW9uYWxEaXNwbGF5LFxuICAgIGNvbmRpdGlvbmFsT3BhY2l0eSxcbiAgICBjb25kaXRpb25hbFRpdGxlQ29sb3IsXG4gICAgZmlsbEFydGljbGVJbmZvLFxuICAgIGhhbmRsZURvdFVYLFxuICAgIGdlbmVyYXRlRGF0ZVJhbmdlLFxuICAgIHNvcnREYXRlLFxuICAgIG1lcmdlTGluZURhdGEsXG4gICAgaW5pdGlhbFJlbmRlcixcbiAgICBoYW5kbGVBcnRpY2xlU2Nyb2xsXG59IGZyb20gJy4vY2hhcnRfdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgdGhpcy5kYXRhID0gcHJvcHMuZGF0YVxuICAgICAgICB0aGlzLm1hcmdpbiA9IHtcbiAgICAgICAgICAgIHRvcDogMzAsXG4gICAgICAgICAgICByaWdodDogMjAsXG4gICAgICAgICAgICBib3R0b206IDUwLFxuICAgICAgICAgICAgbGVmdDogMjAsXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXRvZmYgPSAzXG4gICAgICAgIHRoaXMuZ29vZCA9IHRoaXMuY3V0b2ZmXG4gICAgICAgIHRoaXMuYmFkID0gdGhpcy5jdXRvZmYgKiAtMVxuICAgICAgICB0aGlzLndpZHRoID0gODEwIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuICAgICAgICB0aGlzLmhlaWdodCA9IDM3MCAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcbiAgICAgICAgdGhpcy5zdmcgPSBkMy5zZWxlY3QoJ3N2ZycpXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW4ubGVmdCArIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKVxuICAgICAgICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3RyYW5zcGFyZW50JylcbiAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7dGhpcy5tYXJnaW4ubGVmdH0sICR7dGhpcy5tYXJnaW4udG9wfSlgKVxuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBuZXcgRGF0ZSh0b2RheS5zZXREYXRlKHRvZGF5LmdldERhdGUoKSAtIDMxKSlcbiAgICAgICAgdGhpcy5lbmREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5kYXRlUmFuZ2UgPSBnZW5lcmF0ZURhdGVSYW5nZSh0aGlzLnN0YXJ0RGF0ZSwgdGhpcy5lbmREYXRlKVxuICAgICAgICB0aGlzLnhGb3JtYXQgPSBcIiViLSVkXCI7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgZHVtbXlEYXRhKCl7XG4gICAgICAgIGNvbnN0IGR1bW15RGF0YSA9IFtdXG4gICAgICAgIGNvbnN0IGRhdGFMZW5ndGggPSAzMTtcbiAgICAgICAgY29uc3QgbWFnID0gMjU7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgZGF0YUxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMiAqIG1hZykgLSBtYWc7XG4gICAgICAgICAgICBjb25zdCBkYXR1bSA9IHt4Ok9iamVjdC5rZXlzKHRoaXMuZGF0ZVJhbmdlW3hdKVswXSwgeX07XG4gICAgICAgICAgICBkdW1teURhdGEucHVzaChkYXR1bSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGR1bW15RGF0YVxuICAgIH1cblxuICAgIGJ1aWxkKGRhdGEpe1xuICAgICAgICBjb25zdCB7IHN2ZywgaGVpZ2h0LCB3aWR0aCwgZ29vZCwgYmFkLCB4Rm9ybWF0LCBtYXJnaW4gfSA9IHRoaXNcbiAgICAgICAgY29uc3QgeGRhdGEgPSBbXVxuICAgICAgICBjb25zdCB5ZGF0YSA9IFtdXG4gICAgICAgIGRhdGEuZm9yRWFjaChkYXR1bSA9PiB7XG4gICAgICAgICAgICB4ZGF0YS5wdXNoKGRhdHVtLngpXG4gICAgICAgICAgICB5ZGF0YS5wdXNoKGRhdHVtLnkpXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHBhcnNlVGltZSA9IGQzLnRpbWVQYXJzZShcIiVZLSVtLSVkXCIpXG4gICAgICAgIGNvbnN0IHhzY2wgPSBkMy5zY2FsZVRpbWUoKVxuICAgICAgICAgICAgLmRvbWFpbihkMy5leHRlbnQoZGF0YSwgZCA9PiB7IHJldHVybiBwYXJzZVRpbWUoZC54KSB9KSlcbiAgICAgICAgICAgIC5yYW5nZShbMCwgd2lkdGhdKTtcblxuICAgICAgICBjb25zdCB4X2F4aXMgPSBkMy5heGlzQm90dG9tKClcbiAgICAgICAgICAgIC5zY2FsZSh4c2NsKVxuXG4gICAgICAgIGNvbnN0IHlzY2wgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAuZG9tYWluKFtkMy5tYXgoeWRhdGEpLCBkMy5taW4oeWRhdGEpXSlcbiAgICAgICAgICAgIC5yYW5nZShbMCwgaGVpZ2h0XSk7XG5cbiAgICAgICAgY29uc3QgeV9heGlzID0gZDMuYXhpc0xlZnQoKVxuICAgICAgICAgICAgLnNjYWxlKHlzY2wpXG5cbiAgICAgICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwkeyh5c2NsKDApKX0pYClcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgYHhheGlzYClcbiAgICAgICAgICAgIC5jYWxsKHhfYXhpcylcblxuICAgICAgICAgICAgXG5cbiAgICAgICAgLy8gc3ZnLnNlbGVjdChcIi54YXhpcyA+IHBhdGhcIilcbiAgICAgICAgLy8gICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMCk7XG5cbiAgICAgICAgLy8gc3ZnLnNlbGVjdEFsbChcIi54YXhpcyA+IC50aWNrID4gbGluZVwiKVxuICAgICAgICAvLyAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwKTtcblxuXG4gICAgICAgIHN2Zy5zZWxlY3QoXCIueGF4aXNcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwke3lzY2woMCl9KWApXG4gICAgICAgICAgICAuY2FsbCh4X2F4aXMudGlja0Zvcm1hdChkMy50aW1lRm9ybWF0KHhGb3JtYXQpKSlcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgMClcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCA5KVxuICAgICAgICAgICAgLmF0dHIoXCJkeVwiLCBcIi4zNWVtXCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcInN0YXJ0XCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApXG5cblxuICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBgeWF4aXNgKVxuICAgICAgICAgICAgLmNhbGwoeV9heGlzLnRpY2tTaXplKDApLnRpY2tTaXplT3V0ZXIoNSkpXG4gICAgICAgICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKS5yZW1vdmUoKVxuXG4gICAgICAgIC8vIGNyZWF0ZSBsaW5lIGdlbmVyYXRvclxuICAgICAgICBjb25zdCBsaW5lID0gZDMubGluZSgpXG4gICAgICAgICAgICAueChkID0+IHsgcmV0dXJuIHhzY2wocGFyc2VUaW1lKGQueCkpOyB9KVxuICAgICAgICAgICAgLnkoZCA9PiB7IHJldHVybiB5c2NsKGQueSk7IH0pXG4gICAgICAgICAgICAuY3VydmUoZDMuY3VydmVCdW5kbGUuYmV0YSgwLjg1KSk7XG5cbiAgICAgICAgLy9nb29kLWxhYmVsXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgeXNjbChnb29kKSAtIDUgKVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDE1KVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImdvb2QtbGFiZWxcIilcbiAgICAgICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJyaWdodFwiKVxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcInRyYW5zcGFyZW50XCIpXG4gICAgICAgICAgICAvLyAuc3R5bGUoXCJmaWxsXCIsIFwicmdiYSgwLCAxMjgsIDAsIDAuNilcIilcbiAgICAgICAgICAgIC50ZXh0KFwiKyBzZW50aW1lbnRcIilcblxuICAgICAgICAvL2JhZC1sYWJlbFxuICAgICAgICBzdmcuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIHlzY2woYmFkKSArIDE1IClcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCAxNSlcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYWQtbGFiZWxcIilcbiAgICAgICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJyaWdodFwiKVxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcInRyYW5zcGFyZW50XCIpXG4gICAgICAgICAgICAvLyAuc3R5bGUoXCJmaWxsXCIsIFwicmdiYSgyMDAsIDAsIDAsIDAuNilcIilcbiAgICAgICAgICAgIC50ZXh0KFwiLSBzZW50aW1lbnRcIilcblxuICAgICAgICAvL2J1aWxkIGdvb2QtbGluZVxuICAgICAgICBzdmcuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ4MVwiLCAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ5MVwiLCB5c2NsKGdvb2QpKVxuICAgICAgICAgICAgLmF0dHIoXCJ4MlwiLCB3aWR0aClcbiAgICAgICAgICAgIC5hdHRyKFwieTJcIiwgeXNjbChnb29kKSlcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwidHJhbnNwYXJlbnRcIilcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIFwiMXB4XCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZ29vZC1saW5lXCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIChcIjMsIDNcIikpO1xuXG4gICAgICAgIC8vIGJ1aWxkIGJhZC1saW5lXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJsaW5lXCIpXG4gICAgICAgICAgICAuYXR0cihcIngxXCIsIDApXG4gICAgICAgICAgICAuYXR0cihcInkxXCIsIHlzY2woYmFkKSlcbiAgICAgICAgICAgIC5hdHRyKFwieDJcIiwgd2lkdGgpXG4gICAgICAgICAgICAuYXR0cihcInkyXCIsIHlzY2woYmFkKSlcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwidHJhbnNwYXJlbnRcIilcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIFwiMXB4XCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFkLWxpbmVcIilcbiAgICAgICAgICAgIC5zdHlsZShcInN0cm9rZS1kYXNoYXJyYXlcIiwgKFwiMywgM1wiKSlcblxuICAgICAgICAvLyBkcmF3IHRoZSBsaW5lXG4gICAgICAgIHN2Zy5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCJ0cmFuc3BhcmVudFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgXCIzcHhcIilcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJyb3VuZFwiKVxuICAgICAgICAgICAgLmRhdGEoW2RhdGFdKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBsaW5lKTtcblxuXG4gICAgICAgIGQzLnNlbGVjdChcIiNjaGFydFwiKVxuICAgICAgICAgICAgLnN0eWxlKFwiYm94LXNoYWRvd1wiLCBcIjFweCAxcHggNXB4IDBweCBibGFja1wiKVxuICAgICAgICBkMy5zZWxlY3QoXCIjYXJ0aWNsZXMtbGlzdFwiKVxuICAgICAgICAgICAgLnN0eWxlKFwiYm94LXNoYWRvd1wiLCBcIjFweCAxcHggNXB4IDBweCBibGFja1wiKVxuICAgICAgICBkMy5zZWxlY3QoXCIuYXJ0aWNsZS1pbmZvXCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJib3gtc2hhZG93XCIsIFwiMXB4IDFweCA1cHggMHB4IGJsYWNrXCIpXG5cbiAgICAgICAgLy8gZDMuc2VsZWN0KFwiI2NoYXJ0XCIpXG4gICAgICAgIC8vICAgICAuc3R5bGUoXCJib3gtc2hhZG93XCIsIFwiMHB4IDBweCAwcHggMHB4IGJsYWNrXCIpXG5cbiAgICAgICAgLy8gZDMuc2VsZWN0KFwiI2FydGljbGVzLWxpc3RcIilcbiAgICAgICAgLy8gICAgIC5zdHlsZShcImJveC1zaGFkb3dcIiwgXCIwcHggMHB4IDBweCAwcHggYmxhY2tcIilcbiAgICAgICAgLy8gZDMuc2VsZWN0KFwiLmFydGljbGUtaW5mb1wiKVxuICAgICAgICAvLyAgICAgLnN0eWxlKFwiYm94LXNoYWRvd1wiLCBcIjBweCAwcHggMHB4IDBweCBibGFja1wiKVxuICAgIH1cblxuICAgIHJlbmRlcihwYXlsb2FkKXtcbiAgICAgICAgY29uc3QgeyBzY2F0dGVyRGF0YSwgdG90YWwgfSA9IHBheWxvYWRcbiAgICAgICAgY29uc3QgeyBzdmcsIGhlaWdodCwgd2lkdGgsIGdvb2QsIGJhZCwgeEZvcm1hdCB9ID0gdGhpc1xuICAgICAgICBjb25zdCB5ZGF0YSA9IFtdXG4gICAgICAgIGNvbnN0IHhkYXRhID0gW11cbiAgICAgICAgY29uc3Qgc2luZ2xlQXJ0aWNsZUluZm8gPSBkMy5zZWxlY3QoXCIuYXJ0aWNsZS1pbmZvLWNvbnRhaW5lclwiKVxuICAgICAgICBjb25zdCBsaW5lRGF0YSA9IG1lcmdlTGluZURhdGEodGhpcy5kYXRlUmFuZ2UsIHBheWxvYWQubGluZURhdGEpXG4gICAgICAgIGxldCBpbml0aWFsaXplX2R1cmF0aW9uXG4gICAgICAgIGlmICh0aGlzLmluaXRpYWxpemUpe1xuICAgICAgICAgICAgaW5pdGlhbGl6ZV9kdXJhdGlvbiA9IDE1MDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluaXRpYWxpemVfZHVyYXRpb24gPSAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0aWFsaXplID0gaW5pdGlhbFJlbmRlcihzdmcsIGluaXRpYWxpemVfZHVyYXRpb24pXG4gICAgICAgIGNvbmRpdGlvbmFsVGl0bGVDb2xvcih0b3RhbClcbiAgICAgICAgc2NhdHRlckRhdGEuZm9yRWFjaChkYXR1bSA9PiB7XG4gICAgICAgICAgICB5ZGF0YS5wdXNoKGRhdHVtLnkpXG4gICAgICAgICAgICB4ZGF0YS5wdXNoKGRhdHVtLngpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgcGFyc2VUaW1lID0gZDMudGltZVBhcnNlKFwiJVktJW0tJWRcIilcbiAgICAgICBcbiAgICAgICAgY29uc3QgeHNjbCA9IGQzLnNjYWxlVGltZSgpXG4gICAgICAgICAgICAuZG9tYWluKGQzLmV4dGVudChsaW5lRGF0YSwgZCA9PiB7IHJldHVybiBwYXJzZVRpbWUoZC54KSB9KSlcbiAgICAgICAgICAgIC5yYW5nZShbMCwgd2lkdGhdKTtcblxuICAgICAgICBjb25zdCB4X2F4aXMgPSBkMy5heGlzQm90dG9tKClcbiAgICAgICAgICAgIC5zY2FsZSh4c2NsKVxuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IHlzY2wgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAuZG9tYWluKFtkMy5tYXgoeWRhdGEpLCBkMy5taW4oeWRhdGEpXSlcbiAgICAgICAgICAgIC5yYW5nZShbMCwgaGVpZ2h0XSk7XG5cbiAgICAgICAgY29uc3QgeV9heGlzID0gZDMuYXhpc0xlZnQoKVxuICAgICAgICAgICAgLnNjYWxlKHlzY2wpXG5cbiAgICAgICAgY29uc3QgbGFiZWxzID0gZDMuc2VsZWN0QWxsKFwiLmxhYmVsXCIpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZGVsYXkoaW5pdGlhbGl6ZV9kdXJhdGlvbilcbiAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgICAgIC5zdHlsZShcImNvbG9yXCIsIFwicmdiYSgyNTUsMjU1LDI1NSwgMC43KVwiKTtcbiAgICAgICAgY29uc3QgcmVhZE1vcmUgPSBkMy5zZWxlY3QoXCIucmVhZC1tb3JlXCIpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZGVsYXkoaW5pdGlhbGl6ZV9kdXJhdGlvbilcbiAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgICAgIC5zdHlsZShcImNvbG9yXCIsIFwicmdiYSgyNTUsMjU1LDI1NSwgMC43KVwiKTtcblxuICAgICAgICBzdmcuc2VsZWN0KFwiLnhheGlzXCIpXG4gICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmRlbGF5KGluaXRpYWxpemVfZHVyYXRpb24pXG4gICAgICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUV4cClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwke3lzY2woMCl9KWApXG4gICAgICAgICAgICAuY2FsbCh4X2F4aXMudGlja0Zvcm1hdChkMy50aW1lRm9ybWF0KHhGb3JtYXQpKSlcbiAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCAwKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCA5KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZHlcIiwgXCIuMzVlbVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKDkwKVwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwic3RhcnRcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG5cbiAgICAgICAgc3ZnLnNlbGVjdChcIi5nb29kLWxhYmVsXCIpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZGVsYXkoaW5pdGlhbGl6ZV9kdXJhdGlvbilcbiAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCB5c2NsKGdvb2QpIC0gNSlcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCAxNSlcbiAgICAgICAgICAgIC5hdHRyKFwiZGlzcGxheVwiLCAoKSA9PiBjb25kaXRpb25hbERpc3BsYXkoeXNjbChnb29kKSwgMCwgZmFsc2UpKVxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcInJnYigzMiwgMTk2LCAxNjgpXCIpXG5cblxuICAgICAgICBzdmcuc2VsZWN0KFwiLmJhZC1sYWJlbFwiKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmRlbGF5KGluaXRpYWxpemVfZHVyYXRpb24pXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDE3MDApXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgeXNjbChiYWQpICsgMTUpXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgMTUpXG4gICAgICAgICAgICAuYXR0cihcImRpc3BsYXlcIiwgKCkgPT4gY29uZGl0aW9uYWxEaXNwbGF5KHlzY2woYmFkKSwgaGVpZ2h0LCB0cnVlKSlcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJyZ2JhKDIwMCwgMCwgMCwgMC42KVwiKVxuXG5cbiAgICAgICAgc3ZnLnNlbGVjdChcIi55YXhpc1wiKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmRlbGF5KGluaXRpYWxpemVfZHVyYXRpb24pXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDE3MDApXG4gICAgICAgICAgICAuY2FsbCh5X2F4aXMudGlja1NpemUoMCkudGlja1NpemVPdXRlcig1KSlcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIik7XG4gICAgICAgIHN2Zy5zZWxlY3QoXCIueWF4aXNcIilcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpLnJlbW92ZSgpXG5cblxuXG4gICAgICAgIGNvbnN0IGxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgICAgIC54KGQgPT4geyByZXR1cm4geHNjbChwYXJzZVRpbWUoZC54KSk7IH0pXG4gICAgICAgICAgICAueShkID0+IHsgcmV0dXJuIHlzY2woZC55KTsgfSlcbiAgICAgICAgICAgIC5jdXJ2ZShkMy5jdXJ2ZUJ1bmRsZS5iZXRhKDAuODUpKTtcblxuICAgICAgICBjb25zdCBwYXRoID0gc3ZnLnNlbGVjdEFsbCgnLmxpbmUnKTtcbiAgICAgICAgcGF0aFxuICAgICAgICAgICAgLmRhdGEoW2xpbmVEYXRhXSlcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kZWxheShpbml0aWFsaXplX2R1cmF0aW9uKVxuICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUV4cClcbiAgICAgICAgICAgIC5kdXJhdGlvbigxNzAwKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAgICAgICAgIC5zdHlsZShcInN0cm9rZVwiLCBcInJnYmEoMCwgMCwgMTM5KVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGxpbmUpXG5cbiAgICAgICAgc3ZnLnNlbGVjdChcIi5nb29kLWxpbmVcIilcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kZWxheShpbml0aWFsaXplX2R1cmF0aW9uKVxuICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUV4cClcbiAgICAgICAgICAgIC5kdXJhdGlvbigxNzAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ4MVwiLCAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ5MVwiLCB5c2NsKGdvb2QpKVxuICAgICAgICAgICAgLmF0dHIoXCJ4MlwiLCB3aWR0aClcbiAgICAgICAgICAgIC5hdHRyKFwieTJcIiwgeXNjbChnb29kKSlcbiAgICAgICAgICAgIC5hdHRyKFwiZGlzcGxheVwiLCAoKSA9PiBjb25kaXRpb25hbERpc3BsYXkoeXNjbChnb29kKSwgMCwgZmFsc2UpKVxuICAgICAgICAgICAgLnN0eWxlKFwic3Ryb2tlXCIsIFwicmdiKDMyLCAxOTYsIDE2OClcIilcbiAgICAgICAgICAgIC5zdHlsZShcInN0cm9rZS13aWR0aFwiLCBcIjJweFwiKVxuLy8gcmdiKDMyLCAxOTYsIDE2OClcblxuICAgICAgICBzdmcuc2VsZWN0KFwiLmJhZC1saW5lXCIpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZGVsYXkoaW5pdGlhbGl6ZV9kdXJhdGlvbilcbiAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgICAgIC5hdHRyKFwieDFcIiwgMClcbiAgICAgICAgICAgIC5hdHRyKFwieTFcIiwgeXNjbChiYWQpIClcbiAgICAgICAgICAgIC5hdHRyKFwieDJcIiwgd2lkdGgpXG4gICAgICAgICAgICAuYXR0cihcInkyXCIsIHlzY2woYmFkKSlcbiAgICAgICAgICAgIC5hdHRyKFwiZGlzcGxheVwiLCAoKSA9PiBjb25kaXRpb25hbERpc3BsYXkoeXNjbChiYWQpLCBoZWlnaHQsIHRydWUpKVxuICAgICAgICAgICAgLnN0eWxlKFwic3Ryb2tlXCIsIFwicmdiYSgyMDAsIDAsIDAsIDAuNilcIilcbiAgICAgICAgICAgIC5zdHlsZShcInN0cm9rZS13aWR0aFwiLCBcIjJweFwiKVxuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IGNyZWF0ZURvdHMgPSBzdmcuc2VsZWN0QWxsKFwiLmRvdFwiKVxuICAgICAgICAgICAgLmRhdGEoc2NhdHRlckRhdGEpXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJkb3RcIilcbiAgICAgICAgICAgIFxuICAgICAgICBjcmVhdGVEb3RzXG4gICAgICAgICAgICAub24oXCJjbGlja1wiLCBkID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihkLnVybCwgXCJfYmxhbmtcIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZCxpKSB7XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLmRvdFwiKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGQgPT4gY29uZGl0aW9uYWxDb2xvcihkLCBnb29kLCBiYWQpKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIGQgPT4gY29uZGl0aW9uYWxPcGFjaXR5KGQsIGdvb2QsIGJhZCkpXG4gICAgICAgICAgICAgICAgY29uc3QgZG90ID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSlcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcImRhcmtibHVlXCIpO1xuXG4gICAgICAgICAgICAgICAgZG90XG4gICAgICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUVsYXN0aWMpXG4gICAgICAgICAgICAgICAgICAgIC5kdXJhdGlvbig1MDApXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiclwiLCAxMClcblxuICAgICAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5hcnRpY2xlLWxpc3QtaXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kXCIsIGQgPT4gY29uZGl0aW9uYWxDb2xvcihkLCBnb29kLCBiYWQsIDAuMykpO1xuICAgICAgICAgICAgICAgIGhhbmRsZUFydGljbGVTY3JvbGwoaSlcblxuICAgICAgICAgICAgICAgIGZpbGxBcnRpY2xlSW5mbyhzaW5nbGVBcnRpY2xlSW5mbywgZClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbihkKXtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAuZWFzZShkMy5lYXNlRWxhc3RpYylcbiAgICAgICAgICAgICAgICAgICAgLmR1cmF0aW9uKDUwMClcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJyXCIsIDgpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIGNyZWF0ZURvdHNcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kZWxheShpbml0aWFsaXplX2R1cmF0aW9uKVxuICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUV4cClcbiAgICAgICAgICAgIC5kdXJhdGlvbigxNzAwKVxuICAgICAgICAgICAgLmF0dHIoXCJjeFwiLCBkID0+IHsgcmV0dXJuIHhzY2wocGFyc2VUaW1lKGQueCkpIH0pXG4gICAgICAgICAgICAuYXR0cihcImN5XCIsIGQgPT4geyByZXR1cm4geXNjbChkLnkpIH0pXG4gICAgICAgICAgICAuYXR0cihcInJcIiwgZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGQudGl0bGUgPT09IHRvdGFsLmhpZ2hTY29yZS50aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gOFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgKF8saSkgPT4ge3JldHVybiBcImRvdF9cIiArIGl9KVxuICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBkID0+IGNvbmRpdGlvbmFsT3BhY2l0eShkLCBnb29kLCBiYWQpKVxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBkID0+IGNvbmRpdGlvbmFsQ29sb3IoZCwgZ29vZCwgYmFkKSk7XG5cbiAgICAgICAgY29uc3QgYXJ0aWNsZXNDb250YWluZXIgPSBkMy5zZWxlY3QoXCIjYXJ0aWNsZXMtbGlzdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlbGVjdEFsbChcImxpXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGF0YShzY2F0dGVyRGF0YSlcbiAgICAgICAgYXJ0aWNsZXNDb250YWluZXJcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcImxpXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXJ0aWNsZS1saXN0LWl0ZW1cIilcbiAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgKF8saSkgPT4ge3JldHVybiBcImFydGljbGVfXCIgKyBpfSlcbiAgICAgICAgICAgIC5zdHlsZShcImJhY2tncm91bmRcIiwgZCA9PiBjb25kaXRpb25hbENvbG9yKGQsIGdvb2QsIGJhZCwgMC4zKSlcbiAgICAgICAgICAgIC50ZXh0KCBmdW5jdGlvbihkKXtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZC54KVxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7IG1vbnRoOiAnc2hvcnQnLCBkYXk6ICdudW1lcmljJyB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2RhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucyl9OiAke2QudGl0bGV9YFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGQsaSl7XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLmRvdFwiKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGQgPT4gY29uZGl0aW9uYWxDb2xvcihkLCBnb29kLCBiYWQpKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIGQgPT4gY29uZGl0aW9uYWxPcGFjaXR5KGQsIGdvb2QsIGJhZCkpO1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdChgI2RvdF8ke2l9YClcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJyXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiaWdEb3QgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURvdFVYKGQsIGJpZ0RvdCwgc2luZ2xlQXJ0aWNsZUluZm8sIDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMjBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaGFuZGxlQXJ0aWNsZVNjcm9sbChpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihkLGkpe1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5hcnRpY2xlLWxpc3QtaXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kXCIsIGQgPT4gY29uZGl0aW9uYWxDb2xvcihkLCBnb29kLCBiYWQsIDAuMykpO1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kXCIsIFwicmdiYSgwLCAwLCAxMzksIDAuNSlcIik7XG5cbiAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIuZG90XCIpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgZCA9PiBjb25kaXRpb25hbENvbG9yKGQsIGdvb2QsIGJhZCkpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgZCA9PiBjb25kaXRpb25hbE9wYWNpdHkoZCwgZ29vZCwgYmFkKSk7XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KGAjZG90XyR7aX1gKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJkYXJrYmx1ZVwiKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIGQzLnNlbGVjdEFsbChcIi5hcnRpY2xlLWxpc3QtaXRlbVwiKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oXCJhcHBlYXItYXJ0aWNsZXNcIilcbiAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VDdWJpYylcbiAgICAgICAgICAgIC5kdXJhdGlvbigxNTAwKVxuICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKVxuXG4gICAgICAgIGFydGljbGVzQ29udGFpbmVyXG4gICAgICAgICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kXCIsIGQgPT4gY29uZGl0aW9uYWxDb2xvcihkLCBnb29kLCBiYWQsIDAuMykpXG4gICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkLngpXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7ZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKX06ICR7ZC50aXRsZX1gXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIGFydGljbGVzQ29udGFpbmVyXG4gICAgICAgICAgICAuZXhpdCgpLnJlbW92ZSgpXG5cbiAgICAgICAgY29uc3QgdXBkYXRlRG90cyA9IHN2Zy5zZWxlY3RBbGwoXCIuZG90XCIpXG4gICAgICAgICAgICAuZGF0YShzY2F0dGVyRGF0YSlcblxuICAgICAgICBsZXQgYmlnRG90O1xuICAgICAgICB1cGRhdGVEb3RzXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZGVsYXkoaW5pdGlhbGl6ZV9kdXJhdGlvbilcbiAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJkb3RcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY3hcIiwgZCA9PiB7IHJldHVybiB4c2NsKHBhcnNlVGltZShkLngpKSB9KVxuICAgICAgICAgICAgLmF0dHIoXCJjeVwiLCBkID0+IHsgcmV0dXJuIHlzY2woZC55KSB9KVxuICAgICAgICAgICAgLmF0dHIoXCJyXCIsIGZ1bmN0aW9uIChkLCBpKXtcbiAgICAgICAgICAgICAgICBsZXQgcjtcbiAgICAgICAgICAgICAgICBpZiAoZC50aXRsZSA9PT0gdG90YWwuaGlnaFNjb3JlLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJpZ0RvdCA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVEb3RVWChkLCBiaWdEb3QsIHNpbmdsZUFydGljbGVJbmZvLCAxLCBpbml0aWFsaXplX2R1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQXJ0aWNsZVNjcm9sbChpKVxuICAgICAgICAgICAgICAgICAgICByID0gMjBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByID0gOFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gclxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgZCA9PiBjb25kaXRpb25hbE9wYWNpdHkoZCwgZ29vZCwgYmFkKSApXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGQgPT4gY29uZGl0aW9uYWxDb2xvcihkLCBnb29kLCBiYWQpKTtcblxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwiLmRvdFwiKVxuICAgICAgICAgICAgLmRhdGEoc2NhdHRlckRhdGEpXG4gICAgICAgICAgICAuZXhpdCgpLnJlbW92ZSgpO1xuICAgIH1cbn0iLCJjb25zdCBjb25kaXRpb25hbFRpdGxlQ29sb3IgPSAodG90YWwpID0+IHtcbiAgICBkMy5zZWxlY3QoXCIuY2hhcnQtdGl0bGVcIilcbiAgICAgICAgLmRhdGEoW3RvdGFsXSlcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAuZHVyYXRpb24oMjAwMClcbiAgICAgICAgLnN0eWxlKFwiY29sb3JcIiwgZCA9PiB7XG4gICAgICAgICAgICBpZiAoZC5hdmVyYWdlID4gMC4xMykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgcmdiYSgkezMyICogTWF0aC5zcXJ0KGQuYXZlcmFnZSl9LCAkezE5NiAqIE1hdGguc3FydChkLmF2ZXJhZ2UpfSwgJHsxNjggKiBNYXRoLnNxcnQoZC5hdmVyYWdlKX0sIDAuOTcpYFxuICAgICAgICAgICAgfSBlbHNlIGlmIChkLmF2ZXJhZ2UgPCAtMC4xMykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgcmdiYSgkezEyOCAqIE1hdGguc3FydChNYXRoLmFicyhkLmF2ZXJhZ2UpKX0sICR7NDAgKiBNYXRoLnNxcnQoTWF0aC5hYnMoZC5hdmVyYWdlKSl9LCAkezQwICogTWF0aC5zcXJ0KE1hdGguYWJzKGQuYXZlcmFnZSkpfSwgMC45NylgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBgcmdiYSgyNTUsMjU1LDI1NSwwLjgpYFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIGQzLnNlbGVjdChcIiNzZWNvbmQtdGl0bGVcIilcbiAgICAgICAgLmRhdGEoW3RvdGFsXSlcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAuZHVyYXRpb24oMjAwMClcbiAgICAgICAgLnN0eWxlKFwiY29sb3JcIiwgZCA9PiB7XG4gICAgICAgICAgICBpZiAoZC5hdmVyYWdlID4gMC4xMykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgcmdiYSgkezMyICogTWF0aC5zcXJ0KGQuYXZlcmFnZSl9LCAkezE5NiAqIE1hdGguc3FydChkLmF2ZXJhZ2UpfSwgJHsxNjggKiBNYXRoLnNxcnQoZC5hdmVyYWdlKX0sIDAuOTcpYFxuICAgICAgICAgICAgfSBlbHNlIGlmIChkLmF2ZXJhZ2UgPCAtMC4xMykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgcmdiYSgkezEyOCAqIE1hdGguc3FydChNYXRoLmFicyhkLmF2ZXJhZ2UpKX0sICR7NDAgKiBNYXRoLnNxcnQoTWF0aC5hYnMoZC5hdmVyYWdlKSl9LCAkezQwICogTWF0aC5zcXJ0KE1hdGguYWJzKGQuYXZlcmFnZSkpfSwgMC45NylgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBgcmdiYSgyNTUsMjU1LDI1NSwwLjgpYFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxufVxuXG5jb25zdCBjb25kaXRpb25hbERpc3BsYXkgPSAoYXR0cl92YWx1ZSwgY3V0b2ZmLCBncmVhdGVyVGhhbiA9IHRydWUpID0+IHtcbiAgICBzd2l0Y2ggKGdyZWF0ZXJUaGFuKSB7XG4gICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgIGlmIChhdHRyX3ZhbHVlID4gY3V0b2ZmKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibm9uZVwiXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImluaGVyaXRcIlxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgaWYgKGF0dHJfdmFsdWUgPCBjdXRvZmYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJub25lXCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaW5oZXJpdFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gXCJpbmhlcml0XCJcbiAgICB9XG59XG5cbmNvbnN0IGNvbmRpdGlvbmFsT3BhY2l0eSA9IChkLCBnb29kLCBiYWQpID0+IHtcbiAgICBpZiAoZC55ID49IGdvb2QpIHtcbiAgICAgICAgcmV0dXJuIFwiMC44XCJcbiAgICB9IGVsc2UgaWYgKGQueSA8PSBiYWQpIHtcbiAgICAgICAgcmV0dXJuIFwiMC42XCJcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCIwLjNcIlxuICAgIH1cbn1cblxuY29uc3QgY29uZGl0aW9uYWxDb2xvciA9IChkLCBnb29kLCBiYWQsIG9wYWNpdHk9MSkgPT4ge1xuICAgIGlmIChkLnkgPj0gZ29vZCkge1xuICAgICAgICByZXR1cm4gYHJnYmEoMzIsMTk2LDE2OCwgJHtvcGFjaXR5fWBcbiAgICB9IGVsc2UgaWYgKGQueSA8PSBiYWQpIHtcbiAgICAgICAgcmV0dXJuIGByZ2JhKDI1NSwwLDAsICR7b3BhY2l0eX1gXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGByZ2JhKDI1NSwyNTUsMjU1LCAke29wYWNpdHl9YFxuICAgIH1cbn1cblxuY29uc3QgZmlsbEFydGljbGVJbmZvID0gKHNpbmdsZUFydGljbGVJbmZvLCBkKSA9PiB7XG4gICAgc2luZ2xlQXJ0aWNsZUluZm8uc2VsZWN0KFwiLmFydGljbGUtdGl0bGVcIilcbiAgICAgICAgLnRleHQoXG4gICAgICAgICAgICBgJHtkLnRpdGxlfWBcbiAgICApLnRyYW5zaXRpb24oKVxuICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgLnN0eWxlKFwiY29sb3JcIiwgXCJyZ2JhKDI1NSwyNTUsMjU1LCAwLjUpXCIpO1xuICAgIHNpbmdsZUFydGljbGVJbmZvLnNlbGVjdChcIi5hcnRpY2xlLWF1dGhvclwiKVxuICAgICAgICAudGV4dChcbiAgICAgICAgICAgIGAke2Quc291cmNlfWBcbiAgICApLnRyYW5zaXRpb24oKVxuICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgLnN0eWxlKFwiY29sb3JcIiwgXCJyZ2JhKDI1NSwyNTUsMjU1LCAwLjUpXCIpO1xuICAgIC8vIHNpbmdsZUFydGljbGVJbmZvLnNlbGVjdChcIi5hcnRpY2xlLXNlbnRpbWVudFwiKVxuICAgIC8vICAgICAudGV4dChcbiAgICAvLyAgICAgICAgIGAke2QueX1gXG4gICAgLy8gICAgICk7XG4gICAgLy8gc2luZ2xlQXJ0aWNsZUluZm8uc2VsZWN0KFwiLmFydGljbGUtcmVsZXZhbmNlXCIpXG4gICAgLy8gICAgIC50ZXh0KFxuICAgIC8vICAgICAgICAgYCR7ZC5yZWxldmFuY2V9YFxuICAgIC8vICAgICApO1xuICAgIHNpbmdsZUFydGljbGVJbmZvLnNlbGVjdChcIi5hcnRpY2xlLWRlc2NyaXB0aW9uXCIpXG4gICAgICAgIC50ZXh0KFxuICAgICAgICAgICAgYCR7ZC5kZXNjcmlwdGlvbn1gXG4gICAgICAgIClcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAuZHVyYXRpb24oMTcwMClcbiAgICAgICAgLnN0eWxlKFwiY29sb3JcIiwgXCJyZ2JhKDI1NSwyNTUsMjU1LCAwLjUpXCIpXG5cbiAgICBzaW5nbGVBcnRpY2xlSW5mby5zZWxlY3QoXCIuYXJ0aWNsZS1pbWFnZVwiKVxuICAgICAgICAuYXR0cihcInNyY1wiLCBgJHtkLmltYWdlfWApXG4gICAgc2luZ2xlQXJ0aWNsZUluZm8uc2VsZWN0KFwiLnJlYWQtbW9yZVwiKVxuICAgICAgICAuYXR0cihcImhyZWZcIiwgYCR7ZC51cmx9YClcbn1cblxuY29uc3QgaGFuZGxlRG90VVggPSAoZCwgYmlnRG90LCBzaW5nbGVBcnRpY2xlSW5mbywgc3BlZWQgPSAxLCBpbnRpYWxpemVfZHVyYXRpb24gPSAwKSA9PiB7XG4gICAgY29uc3QgZGVsYXkgPSAyMDAwICsgaW50aWFsaXplX2R1cmF0aW9uXG4gICAgaWYgKHNwZWVkID49IDEpe1xuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGJpZ0RvdFxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZGVsYXkoZGVsYXkpXG4gICAgICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUVsYXN0aWMpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKDI1MDApXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJyXCIsIDgpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcImRhcmtibHVlXCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcbiAgICAgICAgICAgIGlmKHNwZWVkID49IDEpe1xuICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzaW5nbGVBcnRpY2xlSW5mb1xuICAgICAgICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheShkZWxheSArIDUwMClcbiAgICAgICAgICAgICAgICAgICAgLmR1cmF0aW9uKDgwMClcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcInJnYmEoMCwgMCwgMTM5LCAwLjUpXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZpbGxBcnRpY2xlSW5mbyhzaW5nbGVBcnRpY2xlSW5mbywgZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2luZ2xlQXJ0aWNsZUluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheShkZWxheSArIDEzNTApXG4gICAgICAgICAgICAgICAgICAgICAgICAuZHVyYXRpb24oODAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcInRyYW5zcGFyZW50XCIpXG4gICAgICAgICAgICAgICAgLy8gfSwgODAwKnNwZWVkKVxuICAgICAgICAgICAgfVxuICAgICAgICAvLyB9LCBkZWxheSpzcGVlZClcbiAgICB9IGVsc2Uge1xuICAgICAgICBiaWdEb3RcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJkYXJrYmx1ZVwiKVxuICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcbiAgICAgICAgYmlnRG90XG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlTGluZWFyKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgICAgIC5hdHRyKFwiclwiLCA4KVxuICAgICAgICBmaWxsQXJ0aWNsZUluZm8oc2luZ2xlQXJ0aWNsZUluZm8sIGQpO1xuICAgIH1cbn1cblxuRGF0ZS5wcm90b3R5cGUuYWRkRGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0RGF0ZSh0aGlzLmdldERhdGUoKSArIDEpXG59XG5cbmNvbnN0IGdlbmVyYXRlRGF0ZVJhbmdlID0gKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkgPT4ge1xuICAgIGNvbnN0IGRhdGVzID0gW11cbiAgICBsZXQgY3VycmVudERhdGUgPSBzdGFydERhdGVcbiAgICB3aGlsZSAoY3VycmVudERhdGUgPCBlbmREYXRlKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSlcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX1gICsgXCItXCIgKyBgMCR7ZGF0ZS5nZXRNb250aCgpICsgMX1gICsgXCItXCIgKyBgJHtkYXRlLmdldERhdGUoKX1gXG4gICAgICAgIGRhdGVzLnB1c2goeyBbZm9ybWF0dGVkRGF0ZV06IHsgeDogZm9ybWF0dGVkRGF0ZSwgeTogbnVsbCB9IH0pXG4gICAgICAgIGN1cnJlbnREYXRlLmFkZERheSgpXG4gICAgfVxuICAgIHJldHVybiBkYXRlc1xufVxuXG5jb25zdCBzb3J0RGF0ZSA9IChhLCBiKSA9PiB7XG4gICAgY29uc3QgZGF0ZTEgPSBuZXcgRGF0ZShhLngpXG4gICAgY29uc3QgZGF0ZTIgPSBuZXcgRGF0ZShiLngpXG4gICAgaWYgKGRhdGUxID49IGRhdGUyKSB7XG4gICAgICAgIHJldHVybiAxXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgfVxufVxuXG5jb25zdCBtZXJnZUxpbmVEYXRhID0gKGRhdGVSYW5nZSwgbGluZURhdGEpID0+IHtcbiAgICBjb25zdCBtZXJnZWREYXRhID0gT2JqZWN0LmFzc2lnbihbXSwgZGF0ZVJhbmdlLCBsaW5lRGF0YSlcbiAgICBjb25zdCB1bmtleWVkRGF0YSA9IFtdXG4gICAgbWVyZ2VkRGF0YS5mb3JFYWNoKG91dGVyRGF0dW0gPT4ge1xuICAgICAgICB1bmtleWVkRGF0YS5wdXNoKE9iamVjdC52YWx1ZXMob3V0ZXJEYXR1bSkpXG4gICAgfSlcbiAgICByZXR1cm4gdW5rZXllZERhdGEuZmxhdCgpLnNvcnQoc29ydERhdGUpXG59XG5cblxuXG5jb25zdCBpbml0aWFsUmVuZGVyID0gKHN2ZywgaW50aWFsaXplX2R1cmF0aW9uLCB0b3RhbCkgPT4ge1xuICAgIC8vIGQzLnNlbGVjdChcIiNjaGFydFwiKVxuICAgIC8vICAgICAudHJhbnNpdGlvbigpXG4gICAgLy8gICAgIC5lYXNlKGQzLmVhc2VDdWJpYylcbiAgICAvLyAgICAgLmR1cmF0aW9uKGludGlhbGl6ZV9kdXJhdGlvbilcbiAgICAvLyAgICAgLnN0eWxlKFwiYm94LXNoYWRvd1wiLCBcIjFweCAxcHggNXB4IDBweCBibGFja1wiKVxuICAgIC8vIGQzLnNlbGVjdChcIiNhcnRpY2xlcy1saXN0XCIpXG4gICAgLy8gICAgIC50cmFuc2l0aW9uKClcbiAgICAvLyAgICAgLmVhc2UoZDMuZWFzZUN1YmljKVxuICAgIC8vICAgICAuZHVyYXRpb24oaW50aWFsaXplX2R1cmF0aW9uKVxuICAgIC8vICAgICAuc3R5bGUoXCJib3gtc2hhZG93XCIsIFwiMXB4IDFweCA1cHggMHB4IGJsYWNrXCIpXG4gICAgLy8gZDMuc2VsZWN0KFwiLmFydGljbGUtaW5mb1wiKVxuICAgIC8vICAgICAudHJhbnNpdGlvbigpXG4gICAgLy8gICAgIC5lYXNlKGQzLmVhc2VDdWJpYylcbiAgICAvLyAgICAgLmR1cmF0aW9uKGludGlhbGl6ZV9kdXJhdGlvbilcbiAgICAvLyAgICAgLnN0eWxlKFwiYm94LXNoYWRvd1wiLCBcIjFweCAxcHggNXB4IDBweCBibGFja1wiKVxuXG4gICAgLy8gc3ZnLnNlbGVjdChcIi54YXhpcyA+IHBhdGhcIilcbiAgICAvLyAgICAgLnRyYW5zaXRpb24oXCJhcHBlYXJcIilcbiAgICAvLyAgICAgLmVhc2UoZDMuZWFzZUN1YmljKVxuICAgIC8vICAgICAuZHVyYXRpb24oaW50aWFsaXplX2R1cmF0aW9uKVxuICAgIC8vICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG5cbiAgICAvLyBzdmcuc2VsZWN0QWxsKFwiLnhheGlzID4gLnRpY2sgPiBsaW5lXCIpXG4gICAgLy8gICAgIC50cmFuc2l0aW9uKFwiYXBwZWFyXCIpXG4gICAgLy8gICAgIC5lYXNlKGQzLmVhc2VDdWJpYylcbiAgICAvLyAgICAgLmR1cmF0aW9uKGludGlhbGl6ZV9kdXJhdGlvbilcbiAgICAvLyAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKVxuICAgIFxuICAgIC8vIHN2Zy5zZWxlY3QoXCIueWF4aXNcIilcbiAgICAvLyAgICAgLnRyYW5zaXRpb24oXCJhcHBlYXJcIilcbiAgICAvLyAgICAgLmVhc2UoZDMuZWFzZUN1YmljKVxuICAgIC8vICAgICAuZHVyYXRpb24oaW50aWFsaXplX2R1cmF0aW9uKVxuICAgIC8vICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG5cbiAgICBkMy5zZWxlY3QoXCIjbWFpblwiKVxuICAgICAgICAudHJhbnNpdGlvbihcImFwcGVhclwiKVxuICAgICAgICAuZWFzZShkMy5lYXNlQ3ViaWMpXG4gICAgICAgIC5kdXJhdGlvbihpbnRpYWxpemVfZHVyYXRpb24qMC44KVxuICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgXCIwcHhcIilcblxuICAgIGQzLnNlbGVjdChcIi5hcnRpY2xlLWltYWdlXCIpXG4gICAgICAgIC50cmFuc2l0aW9uKFwiYXBwZWFyXCIpXG4gICAgICAgIC5kZWxheSg4MDApXG4gICAgICAgIC5lYXNlKGQzLmVhc2VDdWJpYylcbiAgICAgICAgLmR1cmF0aW9uKGludGlhbGl6ZV9kdXJhdGlvbiArIDMwMClcbiAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKVxuICAgIFxuICAgIGQzLnNlbGVjdChcIi5pbmZvLWNvbnRhaW5lclwiKVxuICAgICAgICAudHJhbnNpdGlvbihcImFwcGVhclwiKVxuICAgICAgICAuZGVsYXkoODAwKVxuICAgICAgICAuZWFzZShkMy5lYXNlQ3ViaWMpXG4gICAgICAgIC5kdXJhdGlvbihpbnRpYWxpemVfZHVyYXRpb24rMzAwKVxuICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG5cbiAgICByZXR1cm4gZmFsc2VcblxuXG59XG5cbmNvbnN0IGhhbmRsZUFydGljbGVTY3JvbGwgPSBpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYXJ0aWNsZV8ke2l9YCkuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgYmxvY2s6IFwiY2VudGVyXCJcbiAgICB9KVxuICAgIGQzLnNlbGVjdChgI2FydGljbGVfJHtpfWApXG4gICAgICAgIC5zdHlsZShcImJhY2tncm91bmRcIiwgXCJyZ2JhKDAsIDAsIDEzOSwgMC41KVwiKVxuICAgIC8vICAgICAuc3R5bGUoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGVYKDBkZWcpXCIpO1xuXG4gICAgLy8gaWYgKCBpID4gMyApe1xuICAgIC8vICAgICBkMy5zZWxlY3QoYCNhcnRpY2xlXyR7aS0xfWApXG4gICAgLy8gICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIFwiMC40XCIpXG4gICAgLy8gICAgICAgICAuc3R5bGUoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGVYKDEwZGVnKVwiKTtcbiAgICAvLyAgICAgZDMuc2VsZWN0KGAjYXJ0aWNsZV8ke2ktMn1gKVxuICAgIC8vICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBcIjAuM1wiKVxuICAgIC8vICAgICAgICAgLnN0eWxlKFwidHJhbnNmb3JtXCIsIFwicm90YXRlWCgxNWRlZylcIik7XG4gICAgLy8gICAgIGQzLnNlbGVjdChgI2FydGljbGVfJHtpKzF9YClcbiAgICAvLyAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgXCIwLjRcIilcbiAgICAvLyAgICAgICAgIC5zdHlsZShcInRyYW5zZm9ybVwiLCBcInJvdGF0ZVgoLTEwZGVnKVwiKTtcbiAgICAvLyAgICAgZDMuc2VsZWN0KGAjYXJ0aWNsZV8ke2krMn1gKVxuICAgIC8vICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBcIjAuM1wiKVxuICAgIC8vICAgICAgICAgLnN0eWxlKFwidHJhbnNmb3JtXCIsIFwicm90YXRlWCgtMTVkZWcpXCIpO1xuICAgIC8vIH1cblxufVxuXG5leHBvcnQge1xuICAgIGNvbmRpdGlvbmFsVGl0bGVDb2xvcixcbiAgICBjb25kaXRpb25hbERpc3BsYXksXG4gICAgY29uZGl0aW9uYWxPcGFjaXR5LFxuICAgIGNvbmRpdGlvbmFsQ29sb3IsXG4gICAgZmlsbEFydGljbGVJbmZvLFxuICAgIGhhbmRsZURvdFVYLFxuICAgIGdlbmVyYXRlRGF0ZVJhbmdlLFxuICAgIHNvcnREYXRlLFxuICAgIG1lcmdlTGluZURhdGEsXG4gICAgaW5pdGlhbFJlbmRlcixcbiAgICBoYW5kbGVBcnRpY2xlU2Nyb2xsXG59IiwiaW1wb3J0ICcuL3N0eWxlcy9kZXZlbG9wbWVudC5jc3MnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuaW1wb3J0IHF1ZXJ5RmllbGQgZnJvbSAnLi9xdWVyeV9maWVsZCc7XG5pbXBvcnQgJy4vc3R5bGVzL21haW4uY3NzJztcblxuIFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgY29uc29sZS5sb2coXCJEZXZlbG9wbWVudCBNb2RlIVwiKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBwcm9wcyA9IHt9XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBjb25zdCBzZWNvbmRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2Vjb25kLXRpdGxlXCIpXG4gICAgXG4gICAgY29uc3QgY2hhcnQgPSBuZXcgQ2hhcnQocHJvcHMpXG4gICAgcHJvcHMuY2hhcnQgPSBjaGFydFxuXG4gICAgbWFpbi5pbnNlcnRCZWZvcmUocXVlcnlGaWVsZChwcm9wcyksIHNlY29uZFRpdGxlKTtcblxuXG4gICAgY29uc3QgZHVtbXlEYXRhID0gY2hhcnQuZHVtbXlEYXRhKCk7XG4gICAgY2hhcnQuYnVpbGQoZHVtbXlEYXRhKTtcblxufSlcbiIsImltcG9ydCB7IG5ld3NfYXBpX2tleSB9IGZyb20gJy4uL2NvbmZpZy9rZXlzJztcblxuY29uc3QgaGVhZGxpbmVzID0gJ2h0dHBzOi8vbmV3c2FwaS5vcmcvdjIvdG9wLWhlYWRsaW5lcz8nO1xuY29uc3QgZXZlcnl0aGluZyA9IFwiaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi9ldmVyeXRoaW5nP1wiO1xuY29uc3QgYWRkQ291bnRyeSA9IGNvdW50cnkgPT4gKGBjb3VudHJ5PSR7Y291bnRyeX0mYCk7XG5jb25zdCBhZGRTb3VyY2UgPSBzb3VyY2UgPT4gKGBzb3VyY2VzPSR7c291cmNlfSZgKTtcbmNvbnN0IGFkZFF1ZXJ5ID0gcXVlcnkgPT4gKGBxPSR7cXVlcnl9JmApOyAvL3NlYXJjaGVzIGZvciBxdWVyeSBpbiBib3RoIHRpdGxlIGFuZCBib2R5XG5jb25zdCBhZGRGcm9tID0gc3RhcnQgPT4gKGBmcm9tPSR7c3RhcnR9JmApO1xuY29uc3Qgc29ydEJ5ID0gb3B0aW9uID0+IChgc29ydEJ5PSR7b3B0aW9ufSZgKTtcbmNvbnN0IGFkZFRvID0gZW5kID0+IChgdG89JHtlbmR9JmApO1xuY29uc3QgYWRkTGFuZ3VhZ2UgPSBsbiA9PiAoYGxhbmd1YWdlPSR7bG59JmApO1xuY29uc3QgYWRkUGFnZXNpemUgPSBpbnQgPT4gKGBwYWdlU2l6ZT0ke2ludH0mYCk7XG5jb25zdCBwYWdlID0gaW50ID0+IChgcGFnZT0ke2ludH0mYCk7XG5cbmNvbnN0IGFwaUtleSA9IGBhcGlLZXk9JHtuZXdzX2FwaV9rZXl9YFxuXG5leHBvcnQgY29uc3QgZmV0Y2hIZWFkbGluZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgdXJsID0gaGVhZGxpbmVzICsgYWRkQ291bnRyeSgndXMnKSArIGFwaUtleTtcbiAgICBjb25zdCByZXEgPSBuZXcgUmVxdWVzdCh1cmwpO1xuICAgIGNvbnNvbGUubG9nKFwiUmVxdWVzdGluZyB0b3AgMjAgaGVhZGxpbmVzIVwiKVxuICAgIHJldHVybiBmZXRjaChyZXEpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZS5qc29uKCkpKSAgICBcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaEV2ZXJ5dGhpbmdGb3IgPSAocXVlcnkpID0+IHtcbiAgICBjb25zdCB1cmwgPSBldmVyeXRoaW5nICsgYWRkUXVlcnkocXVlcnkpICsgYWRkTGFuZ3VhZ2UoJ2VuJykgKyBhZGRQYWdlc2l6ZSgxMDApICsgc29ydEJ5KCdyZWxldmFuY3knKSArIGFwaUtleTtcbiAgICBjb25zdCByZXEgPSBuZXcgUmVxdWVzdCh1cmwpO1xuICAgIGNvbnNvbGUubG9nKGBSZXF1ZXN0aW5nIHRvcCAyMCBhcnRpY2xlcyBhYm91dCAke3F1ZXJ5fSFgKVxuICAgIHJldHVybiBmZXRjaChyZXEpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbn1cblxuXG4iLCJpbXBvcnQgeyBmZXRjaEV2ZXJ5dGhpbmdGb3IgfSBmcm9tICcuL25ld3MnXG5pbXBvcnQgeyBwcm9jZXNzRGF0YSB9IGZyb20gJy4vc2VudGltZW50JztcblxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgXG4gICAgY29uc3QgcXVlcnlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBxdWVyeUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHF1ZXJ5SW5wdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJxdWVyeS1maWVsZFwiKTtcbiAgICBxdWVyeUlucHV0LnNldEF0dHJpYnV0ZShcInotaW5kZXhcIiwgXCIxMDBcIik7XG5cblxuICAgIHNldFRpbWVvdXQoICgpID0+e1xuICAgICAgICB0eXBpbmdXb3JkKHF1ZXJ5SW5wdXQpO1xuICAgIH0sIDEwMDApXG4gICAgXG4gICAgZm9ybS5hcHBlbmRDaGlsZChxdWVyeUlucHV0KVxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IGRlYm91bmNlZFR5cGluZyhldmVudCwgcHJvcHMsIHF1ZXJ5SW5wdXQpKVxuICAgIC8vIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoKSA9PiB7IGhhbmRsZVR5cGluZyhldmVudCwgcHJvcHMsIHF1ZXJ5SW5wdXQpfSlcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4geyBldmVudC5wcmV2ZW50RGVmYXVsdCgpfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICBmb3JtXG4gICAgKVxufVxuXG5jb25zdCB0eXBpbmdXb3JkID0gKHF1ZXJ5SW5wdXQpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gW1xuICAgICAgICBcIkhvbmcgS29uZ1wiLFxuICAgICAgICBcImJlZXNcIixcbiAgICAgICAgXCJiZWFyc1wiLFxuICAgICAgICBcImJlZXRzXCIsXG4gICAgICAgIFwiQ29uZ3Jlc3NcIixcbiAgICAgICAgXCJwYXBlciBzYWxlc1wiLFxuICAgICAgICBcImNoZWVzZVwiLFxuICAgICAgICBcInRoZSBuZXdzXCIsXG4gICAgICAgIFwicGVuZ3VpbnNcIixcbiAgICAgICAgXCJ0aGUgc2VuYXRlXCIsXG4gICAgICAgIFwidGhlIGRlbW9jcmF0aWMgZGViYXRlXCIsXG4gICAgICAgIFwidGhlIDIwMjAgZWxlY3Rpb25cIixcbiAgICAgICAgXCJTcGFjZVhcIixcbiAgICAgICAgXCJhcnRpZmljaWFsIGludGVsbGlnZW5jZVwiLFxuICAgICAgICBcImhlYWx0aGNhcmVcIixcbiAgICAgICAgXCJ2aXJ0dWFsIHJlYWxpdHlcIixcbiAgICAgICAgXCJkb2dzXCJcbiAgICBdXG4gICAgY29uc3Qgc3RyID0gb3B0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvcHRpb25zLmxlbmd0aCldXG4gICAgbGV0IGkgPSAwO1xuXG4gICAgY29uc3QgY3ljbGUgPSBzZXRJbnRlcnZhbCggZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGgucmFuZG9tKClcbiAgICAgICAgaWYgKHJhbmQgPiAwLjMpIHtcbiAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgcXVlcnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBzdHIuc2xpY2UoMCwgaSkpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPj0gc3RyLmxlbmd0aCl7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGN5Y2xlKVxuICAgICAgICAgICAgcXVlcnlJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgY2xlYXJJbnB1dChxdWVyeUlucHV0LCBjeWNsZSkpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgcXVlcnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlwiKVxuICAgICAgICAgICAgICAgIHR5cGluZ1dvcmQocXVlcnlJbnB1dClcbiAgICAgICAgICAgIH0sIDE1MDApXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH0sIDIwMClcbiAgICBxdWVyeUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBjbGVhcklucHV0KHF1ZXJ5SW5wdXQsIGN5Y2xlKSlcbn1cblxuY29uc3QgY2xlYXJJbnB1dCA9IChxdWVyeUlucHV0LCBjeWNsZSkgPT4gKCkgPT4ge1xuICAgIGNsZWFySW50ZXJ2YWwoY3ljbGUpXG4gICAgcXVlcnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlwiKVxufVxuXG5jb25zdCBoYW5kbGVUeXBpbmcgPSAoZXZlbnQscHJvcHMsIHF1ZXJ5SW5wdXQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGNoYXJ0ID0gcHJvcHMuY2hhcnRcbiAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5SW5wdXQudmFsdWU7XG5cbiAgICBmZXRjaEV2ZXJ5dGhpbmdGb3IodmFsdWUpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSB7fVxuICAgICAgICAgICAgcGF5bG9hZC5xdWVyeSA9IHZhbHVlXG4gICAgICAgICAgICBwYXlsb2FkLmFydGljbGVzID0gcmVzcG9uc2UuYXJ0aWNsZXNcbiAgICAgICAgICAgIHJldHVybiBwYXlsb2FkXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHBheWxvYWQgPT4gcHJvY2Vzc0RhdGEocGF5bG9hZCkpIFxuICAgICAgICAudGhlbigocGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgY2hhcnQucmVuZGVyKHBheWxvYWQpXG4gICAgICAgIH0pXG59XG5cblxuLy8gVXNlIGZvciB0ZXN0aW5nIGZ1bmN0aW9uYWxpdHksIHNvdXJjZWQgZnJvbTogaHR0cHM6Ly9jb2RlYnVyc3QuaW8vdGhyb3R0bGluZy1hbmQtZGVib3VuY2luZy1pbi1qYXZhc2NyaXB0LTY0NmQwNzZkMGE0NFxuY29uc3QgZGVib3VuY2UgPSAoZGVsYXksIGZuKSA9PiB7XG4gICAgbGV0IHRpbWVySWQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIGlmICh0aW1lcklkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZm4oLi4uYXJncyk7XG4gICAgICAgICAgICB0aW1lcklkID0gbnVsbDtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgIH1cbn1cblxuY29uc3QgZGVib3VuY2VkVHlwaW5nID0gZGVib3VuY2UoNzAwLCBoYW5kbGVUeXBpbmcpO1xuXG4iLCJpbXBvcnQgU2VudGltZW50IGZyb20gJ3NlbnRpbWVudCdcblxuXG5leHBvcnQgY29uc3QgcHJvY2Vzc0RhdGEgPSAoe2FydGljbGVzLCB2YWx1ZX0pID0+IHtcbiAgICBjb25zdCBwYXlsb2FkID0ge31cbiAgICBjb25zdCBzZW50aW1lbnQgPSBuZXcgU2VudGltZW50KCk7XG4gICAgY29uc3QgcHJvY2Vzc2luZ0RhdGEgPSBbXTtcbiAgICBjb25zdCByYXRpbyA9IDAuNlxuXG4gICAgYXJ0aWNsZXMuZm9yRWFjaChhcnRpY2xlID0+IHtcbiAgICAgICAgY29uc3QgZGF0dW0gPSB7fVxuICAgICAgICBkYXR1bS5jb250ZW50ID0gYXJ0aWNsZS5jb250ZW50IHx8IFwiXCJcbiAgICAgICAgZGF0dW0udGl0bGUgPSBhcnRpY2xlLnRpdGxlIHx8IFwiVW5uYW1lZFwiXG4gICAgICAgIGRhdHVtLmF1dGhvciA9IGFydGljbGUuYXV0aG9yIHx8IGRhdHVtLnRpdGxlXG4gICAgICAgIGRhdHVtLnNvdXJjZSA9IGFydGljbGUuc291cmNlLm5hbWVcbiAgICAgICAgZGF0dW0udXJsID0gYXJ0aWNsZS51cmxcbiAgICAgICAgZGF0dW0uaW1hZ2UgPSBhcnRpY2xlLnVybFRvSW1hZ2VcbiAgICAgICAgZGF0dW0uZGVzY3JpcHRpb24gPSBhcnRpY2xlLmRlc2NyaXB0aW9uIHx8IFwiVW5hdmFpbGFibGVcIjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNvbnRlbnRTZW50aW1lbnQgPSBzZW50aW1lbnQuYW5hbHl6ZShkYXR1bS5jb250ZW50KVxuICAgICAgICBjb25zdCB0aXRsZVNlbnRpbWVudCA9IHNlbnRpbWVudC5hbmFseXplKGRhdHVtLnRpdGxlKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgY29tcGFyYXRpdmUgPSBjb250ZW50U2VudGltZW50LmNvbXBhcmF0aXZlIDwgMC4wOCA/IE1hdGguYWJzKGNvbnRlbnRTZW50aW1lbnQuY29tcGFyYXRpdmUpLzAuNzUgOiBjb250ZW50U2VudGltZW50LmNvbXBhcmF0aXZlIC8vVEhJUyBJUyBPTkxZIEEgUExBQ0VIT0xERVIsIHVwZGF0ZSB0byBtb3JlIG1lYW5pbmdmdWxseSBhY2N1cmF0ZSBtZXRyaWMgYWZ0ZXIgYmFzaWNzXG4gICAgICAgIGRhdHVtLnJlbGV2YW5jZSA9IE1hdGgucm91bmQoY29tcGFyYXRpdmUgKiAxMDAwKS8xMDAwXG4gICAgICAgIGRhdHVtLnggPSBhcnRpY2xlLnB1Ymxpc2hlZEF0LnNwbGl0KFwiVFwiKVswXVxuICAgICAgICBjb25zdCBzY29yZSA9IChkYXR1bS5yZWxldmFuY2UvMC4yNSkgKiAoTWF0aC5yb3VuZCgoKGNvbnRlbnRTZW50aW1lbnQuc2NvcmUgKiByYXRpbykgKyAodGl0bGVTZW50aW1lbnQuc2NvcmUgKiAoMS1yYXRpbykpKSAqIDEwMDApIC8xMDAwKTtcbiAgICAgICAgZGF0dW0ueSA9IE1hdGgucm91bmQoc2NvcmUgKiAxMDAwKS8xMDAwXG4gICAgICAgIHByb2Nlc3NpbmdEYXRhLnB1c2goZGF0dW0pXG4gICAgfSlcbiAgICBwYXlsb2FkLnNjYXR0ZXJEYXRhID0gcHJvY2Vzc2luZ0RhdGEuc29ydChzb3J0RGF0ZURlc2MpO1xuICAgIHBheWxvYWQubGluZURhdGEgPSBhdmVyYWdlRGF5U2NvcmVzKHByb2Nlc3NpbmdEYXRhKTtcbiAgICBwYXlsb2FkLnRvdGFsID0gY2FsY3VsYXRlVG90YWxzKHByb2Nlc3NpbmdEYXRhKTtcblxuICAgIHJldHVybiBwYXlsb2FkXG59XG5cbmNvbnN0IGNhbGN1bGF0ZVRvdGFscyA9IGRhdGEgPT4ge1xuICAgIGNvbnN0IHRvdGFsID0ge31cbiAgICB0b3RhbC5oaWdoU2NvcmUgPSBkYXRhWzBdO1xuICAgIGRhdGEuZm9yRWFjaChkYXR1bSA9PiB7XG4gICAgICAgIHRvdGFsLnNjb3JlID0gdG90YWwuc2NvcmUgPyB0b3RhbC5zY29yZSArIGRhdHVtLnkgOiBkYXR1bS55XG4gICAgICAgIHRvdGFsLmNvdW50ID0gdG90YWwuY291bnQgPyB0b3RhbC5jb3VudCArIDEgOiAxXG4gICAgICAgIHRvdGFsLmhpZ2hTY29yZSA9IE1hdGguYWJzKGRhdHVtLnkpID4gTWF0aC5hYnModG90YWwuaGlnaFNjb3JlLnkpID8gZGF0dW0gOiB0b3RhbC5oaWdoU2NvcmVcbiAgICB9KVxuICAgIHRvdGFsLmF2ZXJhZ2UgPSB0b3RhbC5zY29yZS90b3RhbC5jb3VudDtcbiAgICByZXR1cm4gdG90YWxcbn1cblxuY29uc3QgYXZlcmFnZURheVNjb3JlcyA9IGRhdGEgPT4ge1xuICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSB7fVxuICAgIGNvbnN0IGNvdW50ID0ge31cbiAgICBkYXRhLmZvckVhY2goZGF0dW0gPT4ge1xuICAgICAgICBwcm9jZXNzZWREYXRhW2RhdHVtLnhdID0gcHJvY2Vzc2VkRGF0YVtkYXR1bS54XSA/IHByb2Nlc3NlZERhdGFbZGF0dW0ueF0gKyBkYXR1bS55IDogZGF0dW0ueTtcbiAgICAgICAgY291bnRbZGF0dW0ueF0gPSBjb3VudFtkYXR1bS54XSA/IGNvdW50W2RhdHVtLnhdICsgMSA6IDFcbiAgICB9KVxuXG4gICAgY29uc3QgYXZlcmFnZWREYXRhID0gW11cbiAgICBPYmplY3Qua2V5cyhwcm9jZXNzZWREYXRhKS5mb3JFYWNoKGRhdGUgPT4ge1xuICAgICAgICBhdmVyYWdlZERhdGEucHVzaCh7W2RhdGVdOiB7eDogZGF0ZSwgeTogTWF0aC5yb3VuZCgocHJvY2Vzc2VkRGF0YVtkYXRlXSAvIGNvdW50W2RhdGVdKSAqIDEwMDApIC8gMTAwMH19KTtcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IHNvcnRlZEF2ZXJhZ2VkRGF0YSA9IGF2ZXJhZ2VkRGF0YS5zb3J0KHNvcnREYXRlKVxuICAgIHJldHVybiBzb3J0ZWRBdmVyYWdlZERhdGFcbn1cblxuY29uc3Qgc29ydERhdGUgPSAoYSwgYikgPT4ge1xuICAgIGNvbnN0IGRhdGUxID0gbmV3IERhdGUoYS54KVxuICAgIGNvbnN0IGRhdGUyID0gbmV3IERhdGUoYi54KVxuICAgIGlmIChkYXRlMSA+PSBkYXRlMil7IFxuICAgICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgIH1cbn07XG5cbmNvbnN0IHNvcnREYXRlRGVzYyA9IChiLCBhKSA9PiB7XG4gICAgY29uc3QgZGF0ZTEgPSBuZXcgRGF0ZShhLngpXG4gICAgY29uc3QgZGF0ZTIgPSBuZXcgRGF0ZShiLngpXG4gICAgaWYgKGRhdGUxID49IGRhdGUyKXsgXG4gICAgICAgIHJldHVybiAxXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgfVxufVxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9