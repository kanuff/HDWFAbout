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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// mimic react style

var Chart = function () {
    function Chart(props) {
        _classCallCheck(this, Chart);

        this.data = props.data;
        this.margin = {
            top: 50,
            right: 25,
            bottom: 70,
            left: 40
        };
        this.width = 900 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
        this.svg = d3.select('svg').attr('width', this.width + this.margin.left + this.margin.right).attr('height', this.height + this.margin.top + this.margin.bottom).style('background-color', 'whitesmoke').append("g").attr("transform", 'translate(' + this.margin.left + ', ' + this.margin.top + ')');
    }

    _createClass(Chart, [{
        key: 'dummyData',
        value: function dummyData() {
            var dummyData = [];
            var dataLength = 15;
            var mag = 25;
            for (var x = 0; x < dataLength; x++) {
                var y = Math.floor(Math.random() * 2 * mag) - mag;
                var datum = { x: x, y: y };
                dummyData.push(datum);
            }
            return dummyData;
        }
    }, {
        key: 'build',
        value: function build(data) {
            // d3.select(".info-container").append("div")
            //     .attr("class", "article-info")
            // .attr("background-color", "blue")
            // .attr("width", "200px")
            // .style("opacity", 0);

            var xdata = [];
            var ydata = [];
            data.forEach(function (datum) {
                xdata.push(datum.x);
                ydata.push(datum.y);
            });
            var width = this.width;
            var height = this.height;
            var margin = this.margin;

            //create the chart object
            var svg = this.svg;

            var xscl = d3.scaleLinear().domain([0, d3.max(xdata)]).range([0, width]);
            this.xscl = xscl;

            var yscl = d3.scaleLinear().domain([d3.max(ydata), d3.min(ydata)]).range([0, height]);
            this.yscl = yscl;

            var x_axis = d3.axisBottom().scale(xscl);

            var y_axis = d3.axisLeft().scale(yscl);

            svg.append("g").attr("transform", 'translate(0,' + height + ')').attr("class", 'xaxis').call(x_axis);

            svg.append("g").attr("class", 'yaxis').call(y_axis);

            // create line generator

            var line = d3.line().x(function (d) {
                return xscl(d.x);
            }).y(function (d) {
                return yscl(d.y);
            }).curve(d3.curveMonotoneX);

            // draw the line
            svg.append('path').attr("fill", "none").attr("stroke", "red").attr("stroke-width", "2px").data([data]).attr("class", "line").attr("d", line);

            svg.append("line").attr("x1", 0).attr("y1", yscl(-5)).attr("x2", width).attr("y2", yscl(-5)).attr("fill", "none").attr("stroke", "red").attr("stroke-width", "1px").attr("class", "bad-line").style("stroke-dasharray", "3, 3");

            svg.append("line").attr("x1", 0).attr("y1", yscl(5)).attr("x2", width).attr("y2", yscl(5)).attr("fill", "none").attr("stroke", "green").attr("stroke-width", "1px").attr("class", "good-line").style("stroke-dasharray", "3, 3");
        }
    }, {
        key: 'render',
        value: function render(payload) {
            var div = d3.select(".article-info");
            var data = payload.lineData;
            var scatterData = payload.scatterData;
            var svg = this.svg;
            var ydata = [];
            var xdata = [];
            var height = this.height;
            var width = this.width;

            scatterData.forEach(function (datum) {
                ydata.push(datum.y);
                xdata.push(datum.x);
            });

            var parseTime = d3.timeParse("%Y-%m-%d");
            var xFormat = "%Y-%m-%d";
            var xscl = d3.scaleTime().domain(d3.extent(data, function (d) {
                return parseTime(d.x);
            })).range([0, width]);

            var x_axis = d3.axisBottom().scale(xscl);

            var yscl = d3.scaleLinear().domain([d3.max(ydata), d3.min(ydata)]).range([0, height]);

            var y_axis = d3.axisLeft().scale(yscl);

            svg.select(".xaxis").transition().ease(d3.easeExp).duration(2000).attr("transform", 'translate(0,' + yscl(0) + ')').call(x_axis.tickFormat(d3.timeFormat(xFormat))).selectAll("text").attr("y", 0).attr("x", 9).attr("dy", ".35em").attr("transform", "rotate(90)").style("text-anchor", "start");

            svg.select(".yaxis").transition().ease(d3.easeExp).duration(2000).call(y_axis);

            var line = d3.line().x(function (d) {
                return xscl(parseTime(d.x));
            }).y(function (d) {
                return yscl(d.y);
            }).curve(d3.curveMonotoneX);

            svg.selectAll('.line').attr("fill", "none").attr("stroke", "black").attr("stroke-width", "2px").data([data]).attr("class", "line").transition().ease(d3.easeExp).duration(2000).attr("d", line);

            svg.select(".good-line").transition().ease(d3.easeExp).duration(2000).attr("x1", 0).attr("y1", yscl(5)).attr("x2", width).attr("y2", yscl(5)).attr("display", function (d) {
                if (yscl(5) < 0) {
                    return "none";
                } else {
                    return "inherit";
                }
            });

            svg.select(".bad-line").transition().ease(d3.easeExp).duration(2000).attr("x1", 0).attr("y1", yscl(-5)).attr("x2", width).attr("y2", yscl(-5)).attr("display", function (d) {
                if (yscl(-5) > height) {
                    return "none";
                } else {
                    return "inherit";
                }
            });

            // d3.selectAll("article-info")
            //     .attr("position", "absolute")
            //     .attr("text-align", "center")
            //     .attr("width", "fit-content")
            //     .attr("height", "fit-content")
            //     .attr("background", "grey")
            //     // .attr("z-index", "10")


            var createDots = svg.selectAll(".dot").data(scatterData).enter().append("circle").on("click", function (d) {
                window.open(d.url, "_blank");
            }).on("mouseover", function (d) {
                div.transition().duration(200).style("opacity", 0.9);
                div.html(d.title + ' ' + "<br />" + ('by: ' + d.author) + "<br />" + ('Sentiment Score: ' + d.y) + "<br />" + ('Relevance: ' + d.relevance) + "<br />" + ('Description: ' + d.description)).style("left", d3.event.pageX + "px").style("top", d3.event.pageY - 28 + "px");
            }).on("mouseout", function (d) {
                div.transition().duration(500);
                // .style("opacity", 0);
            });

            var updateDots = svg.selectAll(".dot").data(scatterData).on("click", function (d) {
                window.open(d.url, "_blank");
            }).on("mouseover", function (d) {
                div.transition().duration(200).style("opacity", 0.9);
                div.html(d.title + ' ' + "<br />" + ('by: ' + d.author) + "<br />" + ('Sentiment Score: ' + d.y) + "<br />" + ('Relevance: ' + d.relevance) + "<br />" + ('Description: ' + d.description)).style("left", d3.event.pageX + "px").style("top", d3.event.pageY - 28 + "px");
            }).on("mouseout", function (d) {
                div.transition().duration(500);
                // .style("opacity", 0);
            });

            createDots.transition().ease(d3.easeExp).duration(2000).attr("class", "dot").attr("cx", function (d) {
                return xscl(parseTime(d.x));
            }).attr("cy", function (d) {
                return yscl(d.y);
            }).attr("r", function (d) {
                return 40 * d.relevance;
            }).style("opacity", function (d) {
                if (d.y >= 5) {
                    return "0.7";
                } else if (d.y <= -5) {
                    return "0.7";
                } else {
                    return "0.2";
                }
            }).style("fill", function (d) {
                if (d.y >= 5) {
                    return "green";
                } else if (d.y <= -5) {
                    return "red";
                } else {
                    return "black";
                }
            });

            updateDots.transition().ease(d3.easeExp).duration(2000).attr("class", "dot").attr("cx", function (d) {
                return xscl(parseTime(d.x));
            }).attr("cy", function (d) {
                return yscl(d.y);
            }).attr("r", function (d) {
                return 40 * d.relevance;
            }).style("opacity", function (d) {
                if (d.y >= 5) {
                    return "0.7";
                } else if (d.y <= -5) {
                    return "0.7";
                } else {
                    return "0.2";
                }
            }).style("fill", function (d) {
                if (d.y >= 5) {
                    return "green";
                } else if (d.y <= -5) {
                    return "red";
                } else {
                    return "black";
                }
            });

            svg.selectAll(".dot").data(scatterData).exit().remove();
        }
    }]);

    return Chart;
}();

exports.default = Chart;

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
    var root = document.getElementById("main");

    // Testing because I forgot how to vanilla js
    // const newDiv = document.createElement('div');
    // const newContent = document.createTextNode("I'm being created within the index.js file to test if changes show");
    // newDiv.appendChild(newContent);
    // root.appendChild(newDiv);
    // Testing because I forgot how to vanilla js

    var chart = new _chart2.default(props);
    props.chart = chart;

    root.appendChild((0, _query_field2.default)(props));

    var dummyData = chart.dummyData();
    chart.build(dummyData);

    var svg = d3.select('svg');

    // setInterval(() => {
    //     console.log("Rerendering");
    //     const newData = chart.dummyData()
    //     chart.render(newData)}, 5000)

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
    var url = everything + addQuery(query) + addPagesize(100) + sortBy('relevancy') + apiKey;
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
    form.addEventListener("submit", function () {
        event.preventDefault();
        // const chart = props.chart

        // const value = queryInput.value;
        // console.log(`I WAS SUBMITTED WITH THE TEXT ${value}`)
        // fetchEverythingFor(value)
        //     .then(response => {
        //        const payload = {}
        //        payload.query = value
        //        payload.articles = response.articles
        //        return payload
        //     })
        //     .then( payload => processData(payload) ) // should return array of objects, x is datetime, y is sentiment score
        //     .then( (payload) => {
        //         console.log("Rerendering");
        //         chart.render(payload)
        //     })
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
    }) // should return array of objects, x is datetime, y is sentiment score
    .then(function (payload) {
        console.log("Rerendering");
        chart.render(payload);
    });
};

// Use for testing, pulled sourced from: https://codeburst.io/throttling-and-debouncing-in-javascript-646d076d0a44
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

var debouncedTyping = debounce(1000, handleTyping);

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
        datum.description = article.description || "Unavailable";

        var contentSentiment = sentiment.analyze(datum.content);
        var titleSentiment = sentiment.analyze(datum.title);

        datum.x = article.publishedAt.split("T")[0];
        datum.y = Math.round((contentSentiment.score * ratio + titleSentiment.score * (1 - ratio)) * 1000) / 1000;
        var comparative = contentSentiment.comparative < 0.08 ? Math.abs(contentSentiment.comparative) / 0.75 : contentSentiment.comparative; //THIS IS ONLY A PLACEHOLDER, update to more rigorous value later
        datum.relevance = Math.round(comparative * 1000) / 1000;
        processingData.push(datum);
    });
    payload.scatterData = processingData;
    var processedData = averageDayScores(processingData);
    payload.lineData = processedData;

    return payload;
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
        averagedData.push({ x: date, y: processedData[date] / count[date] });
    });

    var sortedAveragedData = averagedData.sort(sortDate);

    // console.log(sortedAveragedData)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xhbmd1YWdlcyBzeW5jIF5cXC5cXC8uKlxcL2luZGV4JCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xhbmd1YWdlcy9lbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xhbmd1YWdlcy9lbi9zY29yaW5nLXN0cmF0ZWd5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZW50aW1lbnQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZW50aW1lbnQvbGliL2xhbmd1YWdlLXByb2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xpYi90b2tlbml6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9uZXdzLmpzIiwid2VicGFjazovLy8uL3NyYy9xdWVyeV9maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VudGltZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZGV2ZWxvcG1lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/NWQzNiJdLCJuYW1lcyI6WyJuZXdzX2FwaV9rZXkiLCJwcm9jZXNzIiwibW9kdWxlIiwiZXhwb3J0cyIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiRXJyb3IiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImUiLCJjbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwiY2FsbCIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwibGVuZ3RoIiwiY29uY2F0IiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJsZW4iLCJydW4iLCJuZXh0VGljayIsImFyZ3MiLCJBcnJheSIsImFyZ3VtZW50cyIsImkiLCJwdXNoIiwiSXRlbSIsImFycmF5IiwicHJvdG90eXBlIiwiYXBwbHkiLCJ0aXRsZSIsImJyb3dzZXIiLCJlbnYiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsIm5hbWUiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsImxhYmVscyIsInJlcXVpcmUiLCJzY29yaW5nU3RyYXRlZ3kiLCJuZWdhdG9ycyIsInRva2VucyIsImN1cnNvciIsInRva2VuU2NvcmUiLCJwcmV2dG9rZW4iLCJ0b2tlbml6ZSIsImxhbmd1YWdlUHJvY2Vzc29yIiwiU2VudGltZW50Iiwib3B0aW9ucyIsInJlZ2lzdGVyTGFuZ3VhZ2UiLCJsYW5ndWFnZUNvZGUiLCJsYW5ndWFnZSIsImFkZExhbmd1YWdlIiwiYW5hbHl6ZSIsInBocmFzZSIsIm9wdHMiLCJjYWxsYmFjayIsImdldExhYmVscyIsImV4dHJhcyIsIk9iamVjdCIsImFzc2lnbiIsInNjb3JlIiwid29yZHMiLCJwb3NpdGl2ZSIsIm5lZ2F0aXZlIiwib2JqIiwiaGFzT3duUHJvcGVydHkiLCJhcHBseVNjb3JpbmdTdHJhdGVneSIsInJlc3VsdCIsImNvbXBhcmF0aXZlIiwiZW1vamlzIiwiZW5MYW5ndWFnZSIsImxhbmd1YWdlcyIsImVuIiwiZ2V0TGFuZ3VhZ2UiLCJlcnIiLCJkZWZhdWx0U2NvcmluZ1N0cmF0ZWd5IiwiaW5wdXQiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJzcGxpdCIsIkNoYXJ0IiwicHJvcHMiLCJkYXRhIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJzdmciLCJkMyIsInNlbGVjdCIsImF0dHIiLCJzdHlsZSIsImFwcGVuZCIsImR1bW15RGF0YSIsImRhdGFMZW5ndGgiLCJtYWciLCJ4IiwieSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImRhdHVtIiwieGRhdGEiLCJ5ZGF0YSIsImZvckVhY2giLCJ4c2NsIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJtYXgiLCJyYW5nZSIsInlzY2wiLCJtaW4iLCJ4X2F4aXMiLCJheGlzQm90dG9tIiwic2NhbGUiLCJ5X2F4aXMiLCJheGlzTGVmdCIsImxpbmUiLCJkIiwiY3VydmUiLCJjdXJ2ZU1vbm90b25lWCIsInBheWxvYWQiLCJkaXYiLCJsaW5lRGF0YSIsInNjYXR0ZXJEYXRhIiwicGFyc2VUaW1lIiwidGltZVBhcnNlIiwieEZvcm1hdCIsInNjYWxlVGltZSIsImV4dGVudCIsInRyYW5zaXRpb24iLCJlYXNlIiwiZWFzZUV4cCIsImR1cmF0aW9uIiwidGlja0Zvcm1hdCIsInRpbWVGb3JtYXQiLCJzZWxlY3RBbGwiLCJjcmVhdGVEb3RzIiwiZW50ZXIiLCJ3aW5kb3ciLCJvcGVuIiwidXJsIiwiaHRtbCIsImF1dGhvciIsInJlbGV2YW5jZSIsImRlc2NyaXB0aW9uIiwiZXZlbnQiLCJwYWdlWCIsInBhZ2VZIiwidXBkYXRlRG90cyIsImV4aXQiLCJyZW1vdmUiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicm9vdCIsImdldEVsZW1lbnRCeUlkIiwiY2hhcnQiLCJhcHBlbmRDaGlsZCIsImJ1aWxkIiwiaGVhZGxpbmVzIiwiZXZlcnl0aGluZyIsImFkZENvdW50cnkiLCJjb3VudHJ5IiwiYWRkU291cmNlIiwic291cmNlIiwiYWRkUXVlcnkiLCJxdWVyeSIsImFkZEZyb20iLCJzdGFydCIsInNvcnRCeSIsIm9wdGlvbiIsImFkZFRvIiwiZW5kIiwibG4iLCJhZGRQYWdlc2l6ZSIsImludCIsInBhZ2UiLCJhcGlLZXkiLCJmZXRjaEhlYWRsaW5lcyIsInJlcSIsIlJlcXVlc3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJmZXRjaEV2ZXJ5dGhpbmdGb3IiLCJmb3JtIiwiY3JlYXRlRWxlbWVudCIsInF1ZXJ5SW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJkZWJvdW5jZWRUeXBpbmciLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVR5cGluZyIsInZhbHVlIiwiYXJ0aWNsZXMiLCJyZW5kZXIiLCJkZWJvdW5jZSIsImRlbGF5IiwiZm4iLCJ0aW1lcklkIiwicHJvY2Vzc0RhdGEiLCJzZW50aW1lbnQiLCJwcm9jZXNzaW5nRGF0YSIsInJhdGlvIiwiY29udGVudCIsImFydGljbGUiLCJjb250ZW50U2VudGltZW50IiwidGl0bGVTZW50aW1lbnQiLCJwdWJsaXNoZWRBdCIsInJvdW5kIiwiYWJzIiwicHJvY2Vzc2VkRGF0YSIsImF2ZXJhZ2VEYXlTY29yZXMiLCJjb3VudCIsImF2ZXJhZ2VkRGF0YSIsImtleXMiLCJkYXRlIiwic29ydGVkQXZlcmFnZWREYXRhIiwic29ydCIsInNvcnREYXRlIiwiYSIsImIiLCJkYXRlMSIsIkRhdGUiLCJkYXRlMiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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U0FBU0UsS0FBYixFQUFtQjtBQUNmLGVBQU8sQ0FBUDtBQUNILEtBRkQsTUFFTztBQUNILGVBQU8sQ0FBQyxDQUFSO0FBQ0g7QUFDSixDQVJELEM7Ozs7Ozs7Ozs7O0FDdkRBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCBuZXdzX2FwaV9rZXkgPSAnMGViYjU2M2UyYTYyNDhjYWJhNWU0ZjVjZWNkMzYzMWMnOyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vZW4vaW5kZXhcIjogXCIuL25vZGVfbW9kdWxlcy9zZW50aW1lbnQvbGFuZ3VhZ2VzL2VuL2luZGV4LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL3NlbnRpbWVudC9sYW5ndWFnZXMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwvaW5kZXgkXCI7IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbGFiZWxzOiByZXF1aXJlKCcuL2xhYmVscy5qc29uJyksXG4gICAgc2NvcmluZ1N0cmF0ZWd5OiByZXF1aXJlKCcuL3Njb3Jpbmctc3RyYXRlZ3knKVxufTtcbiIsInZhciBuZWdhdG9ycyA9IHJlcXVpcmUoJy4vbmVnYXRvcnMuanNvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBhcHBseTogZnVuY3Rpb24odG9rZW5zLCBjdXJzb3IsIHRva2VuU2NvcmUpIHtcbiAgICAgICAgaWYgKGN1cnNvciA+IDApIHtcbiAgICAgICAgICAgIHZhciBwcmV2dG9rZW4gPSB0b2tlbnNbY3Vyc29yIC0gMV07XG4gICAgICAgICAgICBpZiAobmVnYXRvcnNbcHJldnRva2VuXSkge1xuICAgICAgICAgICAgICAgIHRva2VuU2NvcmUgPSAtdG9rZW5TY29yZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW5TY29yZTtcbiAgICB9XG59O1xuIiwidmFyIHRva2VuaXplID0gcmVxdWlyZSgnLi90b2tlbml6ZScpO1xudmFyIGxhbmd1YWdlUHJvY2Vzc29yID0gcmVxdWlyZSgnLi9sYW5ndWFnZS1wcm9jZXNzb3InKTtcblxuLyoqXG4gKiBDb25zdHJ1Y3RvclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBJbnN0YW5jZSBvcHRpb25zXG4gKi9cbnZhciBTZW50aW1lbnQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVycyB0aGUgc3BlY2lmaWVkIGxhbmd1YWdlXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGxhbmd1YWdlQ29kZVxuICogICAgIC0gVHdvLWRpZ2l0IGNvZGUgZm9yIHRoZSBsYW5ndWFnZSB0byByZWdpc3RlclxuICogQHBhcmFtIHtPYmplY3R9IGxhbmd1YWdlXG4gKiAgICAgLSBUaGUgbGFuZ3VhZ2UgbW9kdWxlIHRvIHJlZ2lzdGVyXG4gKi9cblNlbnRpbWVudC5wcm90b3R5cGUucmVnaXN0ZXJMYW5ndWFnZSA9IGZ1bmN0aW9uIChsYW5ndWFnZUNvZGUsIGxhbmd1YWdlKSB7XG4gICAgbGFuZ3VhZ2VQcm9jZXNzb3IuYWRkTGFuZ3VhZ2UobGFuZ3VhZ2VDb2RlLCBsYW5ndWFnZSk7XG59O1xuXG4vKipcbiAqIFBlcmZvcm1zIHNlbnRpbWVudCBhbmFseXNpcyBvbiB0aGUgcHJvdmlkZWQgaW5wdXQgJ3BocmFzZScuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHBocmFzZVxuICogICAgIC0gSW5wdXQgcGhyYXNlXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICogICAgIC0gT3B0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IG9wdHMubGFuZ3VhZ2VcbiAqICAgICAtIElucHV0IGxhbmd1YWdlIGNvZGUgKDIgZGlnaXQgY29kZSksIGRlZmF1bHRzIHRvICdlbidcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmV4dHJhc1xuICogICAgIC0gT3B0aW9uYWwgc2VudGltZW50IGFkZGl0aW9ucyB0byBBRklOTiAoaGFzaCBrL3YgcGFpcnMpXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogICAgIC0gT3B0aW9uYWwgY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuU2VudGltZW50LnByb3RvdHlwZS5hbmFseXplID0gZnVuY3Rpb24gKHBocmFzZSwgb3B0cywgY2FsbGJhY2spIHtcbiAgICAvLyBQYXJzZSBhcmd1bWVudHNcbiAgICBpZiAodHlwZW9mIHBocmFzZSA9PT0gJ3VuZGVmaW5lZCcpIHBocmFzZSA9ICcnO1xuICAgIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjayA9IG9wdHM7XG4gICAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgICB2YXIgbGFuZ3VhZ2VDb2RlID0gb3B0cy5sYW5ndWFnZSB8fCAnZW4nO1xuICAgIHZhciBsYWJlbHMgPSBsYW5ndWFnZVByb2Nlc3Nvci5nZXRMYWJlbHMobGFuZ3VhZ2VDb2RlKTtcblxuICAgIC8vIE1lcmdlIGV4dHJhIGxhYmVsc1xuICAgIGlmICh0eXBlb2Ygb3B0cy5leHRyYXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxhYmVscyA9IE9iamVjdC5hc3NpZ24obGFiZWxzLCBvcHRzLmV4dHJhcyk7XG4gICAgfVxuXG4gICAgLy8gU3RvcmFnZSBvYmplY3RzXG4gICAgdmFyIHRva2VucyAgICAgID0gdG9rZW5pemUocGhyYXNlKSxcbiAgICAgICAgc2NvcmUgICAgICAgPSAwLFxuICAgICAgICB3b3JkcyAgICAgICA9IFtdLFxuICAgICAgICBwb3NpdGl2ZSAgICA9IFtdLFxuICAgICAgICBuZWdhdGl2ZSAgICA9IFtdO1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRva2Vuc1xuICAgIHZhciBpID0gdG9rZW5zLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHZhciBvYmogPSB0b2tlbnNbaV07XG4gICAgICAgIGlmICghbGFiZWxzLmhhc093blByb3BlcnR5KG9iaikpIGNvbnRpbnVlO1xuICAgICAgICB3b3Jkcy5wdXNoKG9iaik7XG5cbiAgICAgICAgLy8gQXBwbHkgc2NvcmluZyBzdHJhdGVneVxuICAgICAgICB2YXIgdG9rZW5TY29yZSA9IGxhYmVsc1tvYmpdO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICB0b2tlblNjb3JlID0gbGFuZ3VhZ2VQcm9jZXNzb3IuYXBwbHlTY29yaW5nU3RyYXRlZ3kobGFuZ3VhZ2VDb2RlLCB0b2tlbnMsIGksIHRva2VuU2NvcmUpO1xuICAgICAgICBpZiAodG9rZW5TY29yZSA+IDApIHBvc2l0aXZlLnB1c2gob2JqKTtcbiAgICAgICAgaWYgKHRva2VuU2NvcmUgPCAwKSBuZWdhdGl2ZS5wdXNoKG9iaik7XG4gICAgICAgIHNjb3JlICs9IHRva2VuU2NvcmU7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgc2NvcmU6ICAgICAgICAgIHNjb3JlLFxuICAgICAgICBjb21wYXJhdGl2ZTogICAgdG9rZW5zLmxlbmd0aCA+IDAgPyBzY29yZSAvIHRva2Vucy5sZW5ndGggOiAwLFxuICAgICAgICB0b2tlbnM6ICAgICAgICAgdG9rZW5zLFxuICAgICAgICB3b3JkczogICAgICAgICAgd29yZHMsXG4gICAgICAgIHBvc2l0aXZlOiAgICAgICBwb3NpdGl2ZSxcbiAgICAgICAgbmVnYXRpdmU6ICAgICAgIG5lZ2F0aXZlXG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBvcHRpb25hbCBhc3luYyBpbnRlcmZhY2VcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbnRpbWVudDtcbiIsInZhciBlbW9qaXMgPSByZXF1aXJlKCcuLi9idWlsZC9lbW9qaS5qc29uJyk7XG5cbi8vIEVuZ2xpc2ggaXMgbG9hZGVkIGJ5IGRlZmF1bHRcbnZhciBlbkxhbmd1YWdlID0gcmVxdWlyZSgnLi4vbGFuZ3VhZ2VzL2VuL2luZGV4Jyk7XG4vLyBBZGQgZW1vamlzXG5PYmplY3QuYXNzaWduKGVuTGFuZ3VhZ2UubGFiZWxzLCBlbW9qaXMpO1xuXG4vLyBDYWNoZSBsb2FkZWQgbGFuZ3VhZ2VzXG52YXIgbGFuZ3VhZ2VzID0ge1xuICAgIGVuOiBlbkxhbmd1YWdlXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyB0aGUgc3BlY2lmaWVkIGxhbmd1YWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGFuZ3VhZ2VDb2RlXG4gICAgICogICAgIC0gVHdvLWRpZ2l0IGNvZGUgZm9yIHRoZSBsYW5ndWFnZSB0byByZWdpc3RlclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBsYW5ndWFnZVxuICAgICAqICAgICAtIFRoZSBsYW5ndWFnZSBtb2R1bGUgdG8gcmVnaXN0ZXJcbiAgICAgKi9cbiAgICBhZGRMYW5ndWFnZTogZnVuY3Rpb24gKGxhbmd1YWdlQ29kZSwgbGFuZ3VhZ2UpIHtcbiAgICAgICAgaWYgKCFsYW5ndWFnZS5sYWJlbHMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbGFuZ3VhZ2UubGFiZWxzIG11c3QgYmUgZGVmaW5lZCEnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgZW1vamlzXG4gICAgICAgIE9iamVjdC5hc3NpZ24obGFuZ3VhZ2UubGFiZWxzLCBlbW9qaXMpO1xuICAgICAgICBsYW5ndWFnZXNbbGFuZ3VhZ2VDb2RlXSA9IGxhbmd1YWdlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYSBsYW5ndWFnZSBvYmplY3QgZnJvbSB0aGUgY2FjaGUsXG4gICAgICogb3IgdHJpZXMgdG8gbG9hZCBpdCBmcm9tIHRoZSBzZXQgb2Ygc3VwcG9ydGVkIGxhbmd1YWdlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGxhbmd1YWdlQ29kZSAtIFR3by1kaWdpdCBjb2RlIGZvciB0aGUgbGFuZ3VhZ2UgdG8gZmV0Y2hcbiAgICAgKi9cbiAgICBnZXRMYW5ndWFnZTogZnVuY3Rpb24obGFuZ3VhZ2VDb2RlKSB7XG4gICAgICAgIGlmICghbGFuZ3VhZ2VDb2RlKSB7XG4gICAgICAgICAgICAvLyBEZWZhdWx0IHRvIGVuZ2xpc2ggaWYgbm8gbGFuZ3VhZ2Ugd2FzIHNwZWNpZmllZFxuICAgICAgICAgICAgcmV0dXJuIGxhbmd1YWdlcy5lbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWxhbmd1YWdlc1tsYW5ndWFnZUNvZGVdKSB7XG4gICAgICAgICAgICAvLyBUcnkgdG8gbG9hZCBzcGVjaWZpZWQgbGFuZ3VhZ2VcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICAgICAgICAgICAgICB2YXIgbGFuZ3VhZ2UgPSByZXF1aXJlKCcuLi9sYW5ndWFnZXMvJyArIGxhbmd1YWdlQ29kZSArICcvaW5kZXgnKTtcbiAgICAgICAgICAgICAgICAvLyBBZGQgbGFuZ3VhZ2UgdG8gaW4tbWVtb3J5IGNhY2hlXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRMYW5ndWFnZShsYW5ndWFnZUNvZGUsIGxhbmd1YWdlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gbGFuZ3VhZ2UgZm91bmQ6ICcgKyBsYW5ndWFnZUNvZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsYW5ndWFnZXNbbGFuZ3VhZ2VDb2RlXTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBBRklOTi0xNjUgd2VpZ2h0ZWQgbGFiZWxzIGZvciB0aGUgc3BlY2lmaWVkIGxhbmd1YWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGFuZ3VhZ2VDb2RlIC0gVHdvLWRpZ2l0IGxhbmd1YWdlIGNvZGVcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0TGFiZWxzOiBmdW5jdGlvbihsYW5ndWFnZUNvZGUpIHtcbiAgICAgICAgdmFyIGxhbmd1YWdlID0gdGhpcy5nZXRMYW5ndWFnZShsYW5ndWFnZUNvZGUpO1xuICAgICAgICByZXR1cm4gbGFuZ3VhZ2UubGFiZWxzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIGEgc2NvcmluZyBzdHJhdGVneSBmb3IgdGhlIGN1cnJlbnQgdG9rZW5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBsYW5ndWFnZUNvZGUgLSBUd28tZGlnaXQgbGFuZ3VhZ2UgY29kZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHRva2VucyAtIFRva2VucyBvZiB0aGUgcGhyYXNlIHRvIGFuYWx5emVcbiAgICAgKiBAcGFyYW0ge2ludH0gY3Vyc29yIC0gQ3Vyc29yIG9mIHRoZSBjdXJyZW50IHRva2VuIGJlaW5nIGFuYWx5emVkXG4gICAgICogQHBhcmFtIHtpbnR9IHRva2VuU2NvcmUgLSBUaGUgc2NvcmUgb2YgdGhlIGN1cnJlbnQgdG9rZW4gYmVpbmcgYW5hbHl6ZWRcbiAgICAgKi9cbiAgICBhcHBseVNjb3JpbmdTdHJhdGVneTogZnVuY3Rpb24obGFuZ3VhZ2VDb2RlLCB0b2tlbnMsIGN1cnNvciwgdG9rZW5TY29yZSkge1xuICAgICAgICB2YXIgbGFuZ3VhZ2UgPSB0aGlzLmdldExhbmd1YWdlKGxhbmd1YWdlQ29kZSk7XG4gICAgICAgIC8vIEZhbGxiYWNrIHRvIGRlZmF1bHQgc3RyYXRlZ3kgaWYgbm9uZSB3YXMgc3BlY2lmaWVkXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgIHZhciBzY29yaW5nU3RyYXRlZ3kgPSBsYW5ndWFnZS5zY29yaW5nU3RyYXRlZ3kgfHwgZGVmYXVsdFNjb3JpbmdTdHJhdGVneTtcbiAgICAgICAgcmV0dXJuIHNjb3JpbmdTdHJhdGVneS5hcHBseSh0b2tlbnMsIGN1cnNvciwgdG9rZW5TY29yZSk7XG4gICAgfVxufTtcblxudmFyIGRlZmF1bHRTY29yaW5nU3RyYXRlZ3kgPSB7XG4gICAgYXBwbHk6IGZ1bmN0aW9uKHRva2VucywgY3Vyc29yLCB0b2tlblNjb3JlKSB7XG4gICAgICAgIHJldHVybiB0b2tlblNjb3JlO1xuICAgIH1cbn07XG4iLCIvKmVzbGludCBuby11c2VsZXNzLWVzY2FwZTogXCJvZmZcIiovXG5cbi8qKlxuICogUmVtb3ZlIHNwZWNpYWwgY2hhcmFjdGVycyBhbmQgcmV0dXJuIGFuIGFycmF5IG9mIHRva2VucyAod29yZHMpLlxuICogQHBhcmFtICB7c3RyaW5nfSBpbnB1dCBJbnB1dCBzdHJpbmdcbiAqIEByZXR1cm4ge2FycmF5fSAgICAgICAgQXJyYXkgb2YgdG9rZW5zXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXRcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgLnJlcGxhY2UoL1xcbi9nLCAnICcpXG4gICAgICAgIC5yZXBsYWNlKC9bLixcXC8jISQlXFxeJlxcKjs6e309X2BcXFwifigpXS9nLCAnJylcbiAgICAgICAgLnNwbGl0KCcgJyk7XG59O1xuIiwiLy8gbWltaWMgcmVhY3Qgc3R5bGVcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICB0aGlzLmRhdGEgPSBwcm9wcy5kYXRhXG4gICAgICAgIHRoaXMubWFyZ2luID0ge1xuICAgICAgICAgICAgdG9wOiA1MCxcbiAgICAgICAgICAgIHJpZ2h0OiAyNSxcbiAgICAgICAgICAgIGJvdHRvbTogNzAsXG4gICAgICAgICAgICBsZWZ0OiA0MCxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndpZHRoID0gOTAwIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuICAgICAgICB0aGlzLmhlaWdodCA9IDUwMCAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcbiAgICAgICAgdGhpcy5zdmcgPSBkMy5zZWxlY3QoJ3N2ZycpXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW4ubGVmdCArIHRoaXMubWFyZ2luLnJpZ2h0KVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKVxuICAgICAgICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3doaXRlc21va2UnKVxuICAgICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHt0aGlzLm1hcmdpbi5sZWZ0fSwgJHt0aGlzLm1hcmdpbi50b3B9KWApXG4gICAgfVxuXG4gICAgZHVtbXlEYXRhKCl7XG4gICAgICAgIGNvbnN0IGR1bW15RGF0YSA9IFtdXG4gICAgICAgIGNvbnN0IGRhdGFMZW5ndGggPSAxNTtcbiAgICAgICAgY29uc3QgbWFnID0gMjU7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgZGF0YUxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMiAqIG1hZykgLSBtYWc7XG4gICAgICAgICAgICBjb25zdCBkYXR1bSA9IHt4LCB5fTtcbiAgICAgICAgICAgIGR1bW15RGF0YS5wdXNoKGRhdHVtKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZHVtbXlEYXRhXG4gICAgfVxuXG4gICAgYnVpbGQoZGF0YSl7XG4gICAgICAgIC8vIGQzLnNlbGVjdChcIi5pbmZvLWNvbnRhaW5lclwiKS5hcHBlbmQoXCJkaXZcIilcbiAgICAgICAgLy8gICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJhcnRpY2xlLWluZm9cIilcbiAgICAgICAgICAgIC8vIC5hdHRyKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcImJsdWVcIilcbiAgICAgICAgICAgIC8vIC5hdHRyKFwid2lkdGhcIiwgXCIyMDBweFwiKVxuICAgICAgICAgICAgLy8gLnN0eWxlKFwib3BhY2l0eVwiLCAwKTtcbiAgICBcbiAgICAgICAgY29uc3QgeGRhdGEgPSBbXVxuICAgICAgICBjb25zdCB5ZGF0YSA9IFtdXG4gICAgICAgIGRhdGEuZm9yRWFjaChkYXR1bSA9PiB7XG4gICAgICAgICAgICB4ZGF0YS5wdXNoKGRhdHVtLngpXG4gICAgICAgICAgICB5ZGF0YS5wdXNoKGRhdHVtLnkpXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy53aWR0aFxuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmhlaWdodFxuICAgICAgICBjb25zdCBtYXJnaW4gPSB0aGlzLm1hcmdpblxuXG4gICAgICAgIC8vY3JlYXRlIHRoZSBjaGFydCBvYmplY3RcbiAgICAgICAgY29uc3Qgc3ZnID0gdGhpcy5zdmdcblxuICAgICAgICBjb25zdCB4c2NsID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLmRvbWFpbihbMCwgZDMubWF4KHhkYXRhKV0pXG4gICAgICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSk7XG4gICAgICAgIHRoaXMueHNjbCA9IHhzY2xcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHlzY2wgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5kb21haW4oW2QzLm1heCh5ZGF0YSksIGQzLm1pbih5ZGF0YSldKVxuICAgICAgICAucmFuZ2UoWzAsIGhlaWdodF0pO1xuICAgICAgICB0aGlzLnlzY2wgPSB5c2NsXG5cbiAgICAgICAgY29uc3QgeF9heGlzID0gZDMuYXhpc0JvdHRvbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2NhbGUoeHNjbClcblxuICAgICAgICBjb25zdCB5X2F4aXMgPSBkMy5heGlzTGVmdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2NhbGUoeXNjbClcblxuICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCR7KGhlaWdodCl9KWApXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIGB4YXhpc2ApXG4gICAgICAgICAgICAuY2FsbCh4X2F4aXMpXG5cbiAgICAgICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgYHlheGlzYClcbiAgICAgICAgICAgIC5jYWxsKHlfYXhpcyk7XG5cbiAgICAgICAgLy8gY3JlYXRlIGxpbmUgZ2VuZXJhdG9yXG5cbiAgICAgICAgY29uc3QgbGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAgICAgLngoIGQgPT4geyByZXR1cm4geHNjbChkLngpIH0gKVxuICAgICAgICAgICAgLnkoIGQgPT4geyByZXR1cm4geXNjbChkLnkpIH0gKVxuICAgICAgICAgICAgLmN1cnZlKGQzLmN1cnZlTW9ub3RvbmVYKTtcblxuICAgICAgICAvLyBkcmF3IHRoZSBsaW5lXG4gICAgICAgIHN2Zy5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcInJlZFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIFwiMnB4XCIpXG4gICAgICAgICAgICAuZGF0YShbZGF0YV0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImRcIiwgbGluZSk7XG5cbiAgICAgICAgc3ZnLmFwcGVuZChcImxpbmVcIilcbiAgICAgICAgICAgIC5hdHRyKFwieDFcIiwgMClcbiAgICAgICAgICAgIC5hdHRyKFwieTFcIiwgeXNjbCgtNSkpXG4gICAgICAgICAgICAuYXR0cihcIngyXCIsIHdpZHRoKVxuICAgICAgICAgICAgLmF0dHIoXCJ5MlwiLCB5c2NsKC01KSlcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwicmVkXCIpXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCBcIjFweFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhZC1saW5lXCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIChcIjMsIDNcIikpXG5cbiAgICAgICAgc3ZnLmFwcGVuZChcImxpbmVcIilcbiAgICAgICAgICAgIC5hdHRyKFwieDFcIiwgMClcbiAgICAgICAgICAgIC5hdHRyKFwieTFcIiwgeXNjbCg1KSlcbiAgICAgICAgICAgIC5hdHRyKFwieDJcIiwgd2lkdGgpXG4gICAgICAgICAgICAuYXR0cihcInkyXCIsIHlzY2woNSkpXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcImdyZWVuXCIpXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCBcIjFweFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImdvb2QtbGluZVwiKVxuICAgICAgICAgICAgLnN0eWxlKFwic3Ryb2tlLWRhc2hhcnJheVwiLCAoXCIzLCAzXCIpKVxuICAgIH1cblxuICAgIHJlbmRlcihwYXlsb2FkKXtcbiAgICAgICAgY29uc3QgZGl2ID0gZDMuc2VsZWN0KFwiLmFydGljbGUtaW5mb1wiKVxuICAgICAgICBjb25zdCBkYXRhID0gcGF5bG9hZC5saW5lRGF0YTtcbiAgICAgICAgY29uc3Qgc2NhdHRlckRhdGEgPSBwYXlsb2FkLnNjYXR0ZXJEYXRhO1xuICAgICAgICBjb25zdCBzdmcgPSB0aGlzLnN2ZztcbiAgICAgICAgY29uc3QgeWRhdGEgPSBbXVxuICAgICAgICBjb25zdCB4ZGF0YSA9IFtdXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaGVpZ2h0XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy53aWR0aFxuXG4gICAgICAgIHNjYXR0ZXJEYXRhLmZvckVhY2goZGF0dW0gPT4ge1xuICAgICAgICAgICAgeWRhdGEucHVzaChkYXR1bS55KVxuICAgICAgICAgICAgeGRhdGEucHVzaChkYXR1bS54KVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHBhcnNlVGltZSA9IGQzLnRpbWVQYXJzZShcIiVZLSVtLSVkXCIpXG4gICAgICAgIGNvbnN0IHhGb3JtYXQgPSBcIiVZLSVtLSVkXCI7XG4gICAgICAgIGNvbnN0IHhzY2wgPSBkMy5zY2FsZVRpbWUoKVxuICAgICAgICAgICAgLmRvbWFpbihkMy5leHRlbnQoZGF0YSwgZCA9PiB7IHJldHVybiBwYXJzZVRpbWUoZC54KSB9KSlcbiAgICAgICAgICAgIC5yYW5nZShbMCwgd2lkdGhdKTtcblxuICAgICAgICBjb25zdCB4X2F4aXMgPSBkMy5heGlzQm90dG9tKClcbiAgICAgICAgICAgIC5zY2FsZSh4c2NsKVxuXG4gICAgICAgIGNvbnN0IHlzY2wgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAuZG9tYWluKFtkMy5tYXgoeWRhdGEpLCBkMy5taW4oeWRhdGEpXSlcbiAgICAgICAgICAgIC5yYW5nZShbMCwgaGVpZ2h0XSk7XG5cbiAgICAgICAgY29uc3QgeV9heGlzID0gZDMuYXhpc0xlZnQoKVxuICAgICAgICAgICAgLnNjYWxlKHlzY2wpXG5cbiAgICAgICAgc3ZnLnNlbGVjdChcIi54YXhpc1wiKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUV4cClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyMDAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCR7eXNjbCgwKX0pYClcbiAgICAgICAgICAgIC5jYWxsKHhfYXhpcy50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoeEZvcm1hdCkpKVxuICAgICAgICAgICAgLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDkpXG4gICAgICAgICAgICAuYXR0cihcImR5XCIsIFwiLjM1ZW1cIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKDkwKVwiKVxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJzdGFydFwiKTtcblxuICAgICAgICBzdmcuc2VsZWN0KFwiLnlheGlzXCIpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDIwMDApXG4gICAgICAgICAgICAuY2FsbCh5X2F4aXMpO1xuXG5cbiAgICAgICAgY29uc3QgbGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAgICAgLngoZCA9PiB7IHJldHVybiB4c2NsKHBhcnNlVGltZShkLngpKTsgfSlcbiAgICAgICAgICAgIC55KGQgPT4geyByZXR1cm4geXNjbChkLnkpOyB9KVxuICAgICAgICAgICAgLmN1cnZlKGQzLmN1cnZlTW9ub3RvbmVYKTtcblxuICAgICAgICBzdmcuc2VsZWN0QWxsKCcubGluZScpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiYmxhY2tcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCBcIjJweFwiKVxuICAgICAgICAgICAgLmRhdGEoW2RhdGFdKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKDIwMDApXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGxpbmUpO1xuXG4gICAgICAgIHN2Zy5zZWxlY3QoXCIuZ29vZC1saW5lXCIpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDIwMDApXG4gICAgICAgICAgICAuYXR0cihcIngxXCIsIDApXG4gICAgICAgICAgICAuYXR0cihcInkxXCIsIHlzY2woNSkpXG4gICAgICAgICAgICAuYXR0cihcIngyXCIsIHdpZHRoKVxuICAgICAgICAgICAgLmF0dHIoXCJ5MlwiLCB5c2NsKDUpKVxuICAgICAgICAgICAgLmF0dHIoXCJkaXNwbGF5XCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh5c2NsKDUpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJub25lXCJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIHN2Zy5zZWxlY3QoXCIuYmFkLWxpbmVcIilcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgICAgICAuZHVyYXRpb24oMjAwMClcbiAgICAgICAgICAgIC5hdHRyKFwieDFcIiwgMClcbiAgICAgICAgICAgIC5hdHRyKFwieTFcIiwgeXNjbCgtNSkgKVxuICAgICAgICAgICAgLmF0dHIoXCJ4MlwiLCB3aWR0aClcbiAgICAgICAgICAgIC5hdHRyKFwieTJcIiwgeXNjbCgtNSkpXG4gICAgICAgICAgICAuYXR0cihcImRpc3BsYXlcIiwgZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHlzY2woLTUpID4gaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImluaGVyaXRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gKVxuXG4gICAgICAgIC8vIGQzLnNlbGVjdEFsbChcImFydGljbGUtaW5mb1wiKVxuICAgICAgICAvLyAgICAgLmF0dHIoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpXG4gICAgICAgIC8vICAgICAuYXR0cihcInRleHQtYWxpZ25cIiwgXCJjZW50ZXJcIilcbiAgICAgICAgLy8gICAgIC5hdHRyKFwid2lkdGhcIiwgXCJmaXQtY29udGVudFwiKVxuICAgICAgICAvLyAgICAgLmF0dHIoXCJoZWlnaHRcIiwgXCJmaXQtY29udGVudFwiKVxuICAgICAgICAvLyAgICAgLmF0dHIoXCJiYWNrZ3JvdW5kXCIsIFwiZ3JleVwiKVxuICAgICAgICAvLyAgICAgLy8gLmF0dHIoXCJ6LWluZGV4XCIsIFwiMTBcIilcblxuXG5cbiAgICAgICAgY29uc3QgY3JlYXRlRG90cyA9IHN2Zy5zZWxlY3RBbGwoXCIuZG90XCIpXG4gICAgICAgICAgICAuZGF0YShzY2F0dGVyRGF0YSlcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgICAgICAgLm9uKFwiY2xpY2tcIiwgZCA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oZC51cmwsIFwiX2JsYW5rXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgIGRpdi50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgLmR1cmF0aW9uKDIwMClcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwLjkpO1xuICAgICAgICAgICAgICAgIGRpdi5odG1sKFxuICAgICAgICAgICAgICAgICAgICBgJHtkLnRpdGxlfSBgICsgXCI8YnIgLz5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBgYnk6ICR7ZC5hdXRob3J9YCArIFwiPGJyIC8+XCIgK1xuICAgICAgICAgICAgICAgICAgICBgU2VudGltZW50IFNjb3JlOiAke2QueX1gICsgXCI8YnIgLz5cIiArXG4gICAgICAgICAgICAgICAgICAgIGBSZWxldmFuY2U6ICR7ZC5yZWxldmFuY2V9YCArIFwiPGJyIC8+XCIgK1xuICAgICAgICAgICAgICAgICAgICBgRGVzY3JpcHRpb246ICR7ZC5kZXNjcmlwdGlvbn1gXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwibGVmdFwiLCAoZDMuZXZlbnQucGFnZVgpICsgXCJweFwiKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgKGQzLmV2ZW50LnBhZ2VZIC0gMjgpICsgXCJweFwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIGRpdi50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgLmR1cmF0aW9uKDUwMClcbiAgICAgICAgICAgICAgICAgICAgLy8gLnN0eWxlKFwib3BhY2l0eVwiLCAwKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgdXBkYXRlRG90cyA9IHN2Zy5zZWxlY3RBbGwoXCIuZG90XCIpXG4gICAgICAgICAgICAuZGF0YShzY2F0dGVyRGF0YSlcbiAgICAgICAgICAgIC5vbihcImNsaWNrXCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKGQudXJsLCBcIl9ibGFua1wiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBkID0+IHtcbiAgICAgICAgICAgICAgICBkaXYudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKDIwMClcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDAuOSk7XG4gICAgICAgICAgICAgICAgZGl2Lmh0bWwoXG4gICAgICAgICAgICAgICAgICAgIGAke2QudGl0bGV9IGAgKyBcIjxiciAvPlwiICtcbiAgICAgICAgICAgICAgICAgICAgYGJ5OiAke2QuYXV0aG9yfWAgKyBcIjxiciAvPlwiICtcbiAgICAgICAgICAgICAgICAgICAgYFNlbnRpbWVudCBTY29yZTogJHtkLnl9YCArIFwiPGJyIC8+XCIgK1xuICAgICAgICAgICAgICAgICAgICBgUmVsZXZhbmNlOiAke2QucmVsZXZhbmNlfWAgKyBcIjxiciAvPlwiICtcbiAgICAgICAgICAgICAgICAgICAgYERlc2NyaXB0aW9uOiAke2QuZGVzY3JpcHRpb259YFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwibGVmdFwiLCAoZDMuZXZlbnQucGFnZVgpICsgXCJweFwiKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgKGQzLmV2ZW50LnBhZ2VZIC0gMjgpICsgXCJweFwiKTtcdFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgZGl2LnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAuZHVyYXRpb24oNTAwKVxuICAgICAgICAgICAgICAgICAgICAvLyAuc3R5bGUoXCJvcGFjaXR5XCIsIDApO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICBjcmVhdGVEb3RzXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDIwMDApXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZG90XCIpXG4gICAgICAgICAgICAuYXR0cihcImN4XCIsIGQgPT4geyByZXR1cm4geHNjbChwYXJzZVRpbWUoZC54KSkgfSlcbiAgICAgICAgICAgIC5hdHRyKFwiY3lcIiwgZCA9PiB7IHJldHVybiB5c2NsKGQueSkgfSlcbiAgICAgICAgICAgIC5hdHRyKFwiclwiLCBkID0+IHtyZXR1cm4gNDAgKiBkLnJlbGV2YW5jZX0pXG4gICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkLnkgPj0gNSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIwLjdcIlxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZC55IDw9IC01KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjAuN1wiXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiMC4yXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZC55ID49IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZ3JlZW5cIlxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZC55IDw9IC01KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJlZFwiXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiYmxhY2tcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHVwZGF0ZURvdHNcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgICAgICAuZHVyYXRpb24oMjAwMClcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJkb3RcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY3hcIiwgZCA9PiB7IHJldHVybiB4c2NsKHBhcnNlVGltZShkLngpKSB9KVxuICAgICAgICAgICAgLmF0dHIoXCJjeVwiLCBkID0+IHsgcmV0dXJuIHlzY2woZC55KSB9KVxuICAgICAgICAgICAgLmF0dHIoXCJyXCIsIGQgPT4geyByZXR1cm4gNDAgKiBkLnJlbGV2YW5jZSB9KVxuICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCBkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZC55ID49IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiMC43XCJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGQueSA8PSAtNSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIwLjdcIlxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjAuMlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGQueSA+PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImdyZWVuXCJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGQueSA8PSAtNSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyZWRcIlxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImJsYWNrXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwiLmRvdFwiKVxuICAgICAgICAgICAgLmRhdGEoc2NhdHRlckRhdGEpXG4gICAgICAgICAgICAuZXhpdCgpLnJlbW92ZSgpO1xuICAgIH1cbn0iLCJpbXBvcnQgJy4vc3R5bGVzL2RldmVsb3BtZW50LmNzcyc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5pbXBvcnQgcXVlcnlGaWVsZCBmcm9tICcuL3F1ZXJ5X2ZpZWxkJztcbmltcG9ydCAnLi9zdHlsZXMvbWFpbi5jc3MnO1xuXG4gXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBjb25zb2xlLmxvZyhcIkRldmVsb3BtZW50IE1vZGUhXCIpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IHByb3BzID0ge31cbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuXG4gICAgLy8gVGVzdGluZyBiZWNhdXNlIEkgZm9yZ290IGhvdyB0byB2YW5pbGxhIGpzXG4gICAgLy8gY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gY29uc3QgbmV3Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSSdtIGJlaW5nIGNyZWF0ZWQgd2l0aGluIHRoZSBpbmRleC5qcyBmaWxlIHRvIHRlc3QgaWYgY2hhbmdlcyBzaG93XCIpO1xuICAgIC8vIG5ld0Rpdi5hcHBlbmRDaGlsZChuZXdDb250ZW50KTtcbiAgICAvLyByb290LmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgLy8gVGVzdGluZyBiZWNhdXNlIEkgZm9yZ290IGhvdyB0byB2YW5pbGxhIGpzXG4gICAgXG4gICAgY29uc3QgY2hhcnQgPSBuZXcgQ2hhcnQocHJvcHMpXG4gICAgcHJvcHMuY2hhcnQgPSBjaGFydFxuXG4gICAgcm9vdC5hcHBlbmRDaGlsZChxdWVyeUZpZWxkKHByb3BzKSk7XG5cblxuICAgIGNvbnN0IGR1bW15RGF0YSA9IGNoYXJ0LmR1bW15RGF0YSgpO1xuICAgIGNoYXJ0LmJ1aWxkKGR1bW15RGF0YSk7XG5cbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoJ3N2ZycpXG5cbiAgICBcbiAgICBcbiAgICAvLyBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiUmVyZW5kZXJpbmdcIik7XG4gICAgLy8gICAgIGNvbnN0IG5ld0RhdGEgPSBjaGFydC5kdW1teURhdGEoKVxuICAgIC8vICAgICBjaGFydC5yZW5kZXIobmV3RGF0YSl9LCA1MDAwKVxuICAgICAgICBcbiAgICBcbiAgICBcbn0pXG4iLCJpbXBvcnQgeyBuZXdzX2FwaV9rZXkgfSBmcm9tICcuLi9jb25maWcva2V5cyc7XG5cbmNvbnN0IGhlYWRsaW5lcyA9ICdodHRwczovL25ld3NhcGkub3JnL3YyL3RvcC1oZWFkbGluZXM/JztcbmNvbnN0IGV2ZXJ5dGhpbmcgPSBcImh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvZXZlcnl0aGluZz9cIjtcbmNvbnN0IGFkZENvdW50cnkgPSBjb3VudHJ5ID0+IChgY291bnRyeT0ke2NvdW50cnl9JmApO1xuY29uc3QgYWRkU291cmNlID0gc291cmNlID0+IChgc291cmNlcz0ke3NvdXJjZX0mYCk7XG5jb25zdCBhZGRRdWVyeSA9IHF1ZXJ5ID0+IChgcT0ke3F1ZXJ5fSZgKTsgLy9zZWFyY2hlcyBmb3IgcXVlcnkgaW4gYm90aCB0aXRsZSBhbmQgYm9keVxuY29uc3QgYWRkRnJvbSA9IHN0YXJ0ID0+IChgZnJvbT0ke3N0YXJ0fSZgKTtcbmNvbnN0IHNvcnRCeSA9IG9wdGlvbiA9PiAoYHNvcnRCeT0ke29wdGlvbn0mYCk7XG5jb25zdCBhZGRUbyA9IGVuZCA9PiAoYHRvPSR7ZW5kfSZgKTtcbmNvbnN0IGFkZExhbmd1YWdlID0gbG4gPT4gKGBsYW5ndWFnZT0ke2xufSZgKTtcbmNvbnN0IGFkZFBhZ2VzaXplID0gaW50ID0+IChgcGFnZVNpemU9JHtpbnR9JmApO1xuY29uc3QgcGFnZSA9IGludCA9PiAoYHBhZ2U9JHtpbnR9JmApO1xuXG5jb25zdCBhcGlLZXkgPSBgYXBpS2V5PSR7bmV3c19hcGlfa2V5fWBcblxuZXhwb3J0IGNvbnN0IGZldGNoSGVhZGxpbmVzID0gKCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IGhlYWRsaW5lcyArIGFkZENvdW50cnkoJ3VzJykgKyBhcGlLZXk7XG4gICAgY29uc3QgcmVxID0gbmV3IFJlcXVlc3QodXJsKTtcbiAgICBjb25zb2xlLmxvZyhcIlJlcXVlc3RpbmcgdG9wIDIwIGhlYWRsaW5lcyFcIilcbiAgICByZXR1cm4gZmV0Y2gocmVxKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpKSkgICAgXG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hFdmVyeXRoaW5nRm9yID0gKHF1ZXJ5KSA9PiB7XG4gICAgY29uc3QgdXJsID0gZXZlcnl0aGluZyArIGFkZFF1ZXJ5KHF1ZXJ5KSArIGFkZFBhZ2VzaXplKDEwMCkgKyBzb3J0QnkoJ3JlbGV2YW5jeScpICsgYXBpS2V5O1xuICAgIGNvbnN0IHJlcSA9IG5ldyBSZXF1ZXN0KHVybCk7XG4gICAgY29uc29sZS5sb2coYFJlcXVlc3RpbmcgdG9wIDIwIGFydGljbGVzIGFib3V0ICR7cXVlcnl9IWApXG4gICAgcmV0dXJuIGZldGNoKHJlcSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxufVxuXG5cbiIsImltcG9ydCB7IGZldGNoRXZlcnl0aGluZ0ZvciB9IGZyb20gJy4vbmV3cydcbmltcG9ydCB7IHByb2Nlc3NEYXRhIH0gZnJvbSAnLi9zZW50aW1lbnQnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBcbiAgICBjb25zdCBxdWVyeUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHF1ZXJ5SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgcXVlcnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInF1ZXJ5LWZpZWxkXCIpO1xuICAgIFxuICAgIFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocXVlcnlJbnB1dClcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiBkZWJvdW5jZWRUeXBpbmcoZXZlbnQsIHByb3BzLCBxdWVyeUlucHV0KSlcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBjb25zdCBjaGFydCA9IHByb3BzLmNoYXJ0XG4gICAgICAgIFxuICAgICAgICAvLyBjb25zdCB2YWx1ZSA9IHF1ZXJ5SW5wdXQudmFsdWU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBJIFdBUyBTVUJNSVRURUQgV0lUSCBUSEUgVEVYVCAke3ZhbHVlfWApXG4gICAgICAgIC8vIGZldGNoRXZlcnl0aGluZ0Zvcih2YWx1ZSlcbiAgICAgICAgLy8gICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgLy8gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7fVxuICAgICAgICAvLyAgICAgICAgcGF5bG9hZC5xdWVyeSA9IHZhbHVlXG4gICAgICAgIC8vICAgICAgICBwYXlsb2FkLmFydGljbGVzID0gcmVzcG9uc2UuYXJ0aWNsZXNcbiAgICAgICAgLy8gICAgICAgIHJldHVybiBwYXlsb2FkXG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyAgICAgLnRoZW4oIHBheWxvYWQgPT4gcHJvY2Vzc0RhdGEocGF5bG9hZCkgKSAvLyBzaG91bGQgcmV0dXJuIGFycmF5IG9mIG9iamVjdHMsIHggaXMgZGF0ZXRpbWUsIHkgaXMgc2VudGltZW50IHNjb3JlXG4gICAgICAgIC8vICAgICAudGhlbiggKHBheWxvYWQpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIlJlcmVuZGVyaW5nXCIpO1xuICAgICAgICAvLyAgICAgICAgIGNoYXJ0LnJlbmRlcihwYXlsb2FkKVxuICAgICAgICAvLyAgICAgfSlcbiAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgZm9ybVxuICAgIClcbn1cblxuXG5jb25zdCBoYW5kbGVUeXBpbmcgPSAoZXZlbnQscHJvcHMsIHF1ZXJ5SW5wdXQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGNoYXJ0ID0gcHJvcHMuY2hhcnRcbiAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5SW5wdXQudmFsdWU7XG4gICAgY29uc29sZS5sb2coYEkgV0FTIFNVQk1JVFRFRCBXSVRIIFRIRSBURVhUICR7dmFsdWV9YClcbiAgICBmZXRjaEV2ZXJ5dGhpbmdGb3IodmFsdWUpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSB7fVxuICAgICAgICAgICAgcGF5bG9hZC5xdWVyeSA9IHZhbHVlXG4gICAgICAgICAgICBwYXlsb2FkLmFydGljbGVzID0gcmVzcG9uc2UuYXJ0aWNsZXNcbiAgICAgICAgICAgIHJldHVybiBwYXlsb2FkXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHBheWxvYWQgPT4gcHJvY2Vzc0RhdGEocGF5bG9hZCkpIC8vIHNob3VsZCByZXR1cm4gYXJyYXkgb2Ygb2JqZWN0cywgeCBpcyBkYXRldGltZSwgeSBpcyBzZW50aW1lbnQgc2NvcmVcbiAgICAgICAgLnRoZW4oKHBheWxvYWQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVyZW5kZXJpbmdcIik7XG4gICAgICAgICAgICBjaGFydC5yZW5kZXIocGF5bG9hZClcbiAgICAgICAgfSlcbn1cblxuXG4vLyBVc2UgZm9yIHRlc3RpbmcsIHB1bGxlZCBzb3VyY2VkIGZyb206IGh0dHBzOi8vY29kZWJ1cnN0LmlvL3Rocm90dGxpbmctYW5kLWRlYm91bmNpbmctaW4tamF2YXNjcmlwdC02NDZkMDc2ZDBhNDRcbmNvbnN0IGRlYm91bmNlID0gKGRlbGF5LCBmbikgPT4ge1xuICAgIGxldCB0aW1lcklkO1xuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBpZiAodGltZXJJZCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgICB9XG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGZuKC4uLmFyZ3MpO1xuICAgICAgICAgICAgdGltZXJJZCA9IG51bGw7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG59XG5cbmNvbnN0IGRlYm91bmNlZFR5cGluZyA9IGRlYm91bmNlKDEwMDAsIGhhbmRsZVR5cGluZyk7XG5cbiIsIlxuaW1wb3J0IFNlbnRpbWVudCBmcm9tICdzZW50aW1lbnQnXG5cblxuZXhwb3J0IGNvbnN0IHByb2Nlc3NEYXRhID0gKHthcnRpY2xlcywgdmFsdWV9KSA9PiB7XG4gICAgY29uc3QgcGF5bG9hZCA9IHt9XG4gICAgY29uc3Qgc2VudGltZW50ID0gbmV3IFNlbnRpbWVudCgpO1xuICAgIGNvbnN0IHByb2Nlc3NpbmdEYXRhID0gW107XG4gICAgY29uc3QgcmF0aW8gPSAwLjZcbiAgICBhcnRpY2xlcy5mb3JFYWNoKGFydGljbGUgPT4ge1xuICAgICAgICBjb25zdCBkYXR1bSA9IHt9XG4gICAgICAgIGRhdHVtLmNvbnRlbnQgPSBhcnRpY2xlLmNvbnRlbnQgfHwgXCJcIlxuICAgICAgICBkYXR1bS50aXRsZSA9IGFydGljbGUudGl0bGUgfHwgXCJVbm5hbWVkXCJcbiAgICAgICAgZGF0dW0uYXV0aG9yID0gYXJ0aWNsZS5hdXRob3IgfHwgZGF0dW0udGl0bGVcbiAgICAgICAgZGF0dW0uc291cmNlID0gYXJ0aWNsZS5zb3VyY2UubmFtZVxuICAgICAgICBkYXR1bS51cmwgPSBhcnRpY2xlLnVybFxuICAgICAgICBkYXR1bS5kZXNjcmlwdGlvbiA9IGFydGljbGUuZGVzY3JpcHRpb24gfHwgXCJVbmF2YWlsYWJsZVwiO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY29udGVudFNlbnRpbWVudCA9IHNlbnRpbWVudC5hbmFseXplKGRhdHVtLmNvbnRlbnQpXG4gICAgICAgIGNvbnN0IHRpdGxlU2VudGltZW50ID0gc2VudGltZW50LmFuYWx5emUoZGF0dW0udGl0bGUpXG4gICAgICAgIFxuICAgICAgICBkYXR1bS54ID0gYXJ0aWNsZS5wdWJsaXNoZWRBdC5zcGxpdChcIlRcIilbMF1cbiAgICAgICAgZGF0dW0ueSA9IE1hdGgucm91bmQoKChjb250ZW50U2VudGltZW50LnNjb3JlICogcmF0aW8pICsgKHRpdGxlU2VudGltZW50LnNjb3JlICogKDEtcmF0aW8pKSkgKiAxMDAwKSAvMTAwMDtcbiAgICAgICAgY29uc3QgY29tcGFyYXRpdmUgPSBjb250ZW50U2VudGltZW50LmNvbXBhcmF0aXZlIDwgMC4wOCA/IE1hdGguYWJzKGNvbnRlbnRTZW50aW1lbnQuY29tcGFyYXRpdmUpLzAuNzUgOiBjb250ZW50U2VudGltZW50LmNvbXBhcmF0aXZlIC8vVEhJUyBJUyBPTkxZIEEgUExBQ0VIT0xERVIsIHVwZGF0ZSB0byBtb3JlIHJpZ29yb3VzIHZhbHVlIGxhdGVyXG4gICAgICAgIGRhdHVtLnJlbGV2YW5jZSA9IE1hdGgucm91bmQoY29tcGFyYXRpdmUgKiAxMDAwKS8xMDAwXG4gICAgICAgIHByb2Nlc3NpbmdEYXRhLnB1c2goZGF0dW0pXG4gICAgfSlcbiAgICBwYXlsb2FkLnNjYXR0ZXJEYXRhID0gcHJvY2Vzc2luZ0RhdGE7XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IGF2ZXJhZ2VEYXlTY29yZXMocHJvY2Vzc2luZ0RhdGEpO1xuICAgIHBheWxvYWQubGluZURhdGEgPSBwcm9jZXNzZWREYXRhXG5cbiAgICByZXR1cm4gcGF5bG9hZFxufVxuXG5jb25zdCBhdmVyYWdlRGF5U2NvcmVzID0gZGF0YSA9PiB7XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IHt9XG4gICAgY29uc3QgY291bnQgPSB7fVxuICAgIGRhdGEuZm9yRWFjaChkYXR1bSA9PiB7XG4gICAgICAgIHByb2Nlc3NlZERhdGFbZGF0dW0ueF0gPSBwcm9jZXNzZWREYXRhW2RhdHVtLnhdID8gcHJvY2Vzc2VkRGF0YVtkYXR1bS54XSArIGRhdHVtLnkgOiBkYXR1bS55O1xuICAgICAgICBjb3VudFtkYXR1bS54XSA9IGNvdW50W2RhdHVtLnhdID8gY291bnRbZGF0dW0ueF0gKyAxIDogMVxuICAgIH0pXG5cbiAgICBjb25zdCBhdmVyYWdlZERhdGEgPSBbXVxuICAgIE9iamVjdC5rZXlzKHByb2Nlc3NlZERhdGEpLmZvckVhY2goZGF0ZSA9PiB7XG4gICAgICAgIGF2ZXJhZ2VkRGF0YS5wdXNoKHsgeDogZGF0ZSwgeTogcHJvY2Vzc2VkRGF0YVtkYXRlXSAvIGNvdW50W2RhdGVdfSk7XG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBzb3J0ZWRBdmVyYWdlZERhdGEgPSBhdmVyYWdlZERhdGEuc29ydChzb3J0RGF0ZSlcbiAgICBcbiAgICAvLyBjb25zb2xlLmxvZyhzb3J0ZWRBdmVyYWdlZERhdGEpXG5cbiAgICByZXR1cm4gc29ydGVkQXZlcmFnZWREYXRhXG59XG5cblxuY29uc3Qgc29ydERhdGUgPSAoYSwgYikgPT4ge1xuICAgIGNvbnN0IGRhdGUxID0gbmV3IERhdGUoYS54KVxuICAgIGNvbnN0IGRhdGUyID0gbmV3IERhdGUoYi54KVxuICAgIGlmIChkYXRlMSA+PSBkYXRlMil7IFxuICAgICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgIH1cbn1cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==