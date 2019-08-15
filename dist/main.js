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
            right: 50,
            bottom: 70,
            left: 20
        };
        this.width = 900 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
        this.svg = d3.select('svg').attr('width', this.width + this.margin.left + this.margin.right).attr('height', this.height + this.margin.top + this.margin.bottom).style('background-color', 'rgba(255,255,255, 0.1)').append("g").attr("transform", 'translate(' + this.margin.left + ', ' + this.margin.top + ')');
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

            svg.append("g").attr("transform", 'translate(0,' + yscl(0) + ')').attr("class", 'xaxis').call(x_axis);

            svg.append("g").attr("class", 'yaxis').call(y_axis);

            // create line generator

            var line = d3.line().x(function (d) {
                return xscl(d.x);
            }).y(function (d) {
                return yscl(d.y);
            }).curve(d3.curveMonotoneX);

            // draw the line
            svg.append('path').attr("fill", "none").attr("stroke", "whitesmoke").attr("stroke-width", "2px").data([data]).attr("class", "line").attr("d", line);

            svg.append("line").attr("x1", 0).attr("y1", yscl(-5)).attr("x2", width).attr("y2", yscl(-5)).attr("fill", "none").attr("stroke", "red").attr("stroke-width", "1px").attr("class", "bad-line").style("stroke-dasharray", "3, 3");

            svg.append("line").attr("x1", 0).attr("y1", yscl(5)).attr("x2", width).attr("y2", yscl(5)).attr("fill", "none").attr("stroke", "green").attr("stroke-width", "1px").attr("class", "good-line").style("stroke-dasharray", "3, 3");
        }
    }, {
        key: 'render',
        value: function render(payload) {
            var data = payload.lineData;
            var scatterData = payload.scatterData;
            var total = payload.total;
            var svg = this.svg;
            var ydata = [];
            var xdata = [];
            var height = this.height;
            var width = this.width;
            console.log(d3.select(".chart-title"));
            console.log(total);
            d3.select(".chart-title").data([total]).transition().ease(d3.easeExp).duration(2000).style("color", function (d) {
                console.log(d3.select("Inside the function"));
                if (d.average > 0.13) {
                    return 'rgba(' + 40 * Math.sqrt(d.average) + ', ' + 128 * Math.sqrt(d.average) + ', ' + 40 * Math.sqrt(d.average) + ', 0.97)';
                } else if (d.average < -0.13) {
                    return 'rgba(' + 128 * Math.sqrt(Math.abs(d.average)) + ', ' + 40 * Math.sqrt(Math.abs(d.average)) + ', ' + 40 * Math.sqrt(Math.abs(d.average)) + ', 0.97)';
                } else {
                    return 'rgba(' + 255 * Math.sqrt(Math.abs(d.average)) + ', ' + 255 * Math.sqrt(Math.abs(d.average)) + ', ' + 255 * Math.sqrt(Math.abs(d.average)) + ', 0.8)';
                }
            });

            var singleArticleInfo = d3.select(".article-info-container");

            scatterData.forEach(function (datum) {
                ydata.push(datum.y);
                xdata.push(datum.x);
            });

            var parseTime = d3.timeParse("%Y-%m-%d");
            var xFormat = "%b-%d";
            var xscl = d3.scaleTime().domain(d3.extent(data, function (d) {
                return parseTime(d.x);
            })).range([0, width]);

            var x_axis = d3.axisBottom().scale(xscl);

            var yscl = d3.scaleLinear().domain([d3.max(ydata), d3.min(ydata)]).range([0, height]);

            var y_axis = d3.axisLeft().scale(yscl);

            svg.select(".xaxis").transition().ease(d3.easeExp).duration(2000).attr("transform", 'translate(0,' + yscl(0) + ')').call(x_axis.tickFormat(d3.timeFormat(xFormat))).selectAll("text").attr("y", 0).attr("x", 9).attr("dy", ".35em").attr("transform", "rotate(90)").style("text-anchor", "start").style("fill", "white");

            svg.select(".yaxis").transition().ease(d3.easeExp).duration(2000).call(y_axis).selectAll("text").style("fill", "white");

            var line = d3.line().x(function (d) {
                return xscl(parseTime(d.x));
            }).y(function (d) {
                return yscl(d.y);
            }).curve(d3.curveMonotoneX);

            svg.selectAll('.line').data([data]).transition().ease(d3.easeExp).duration(2000).attr("class", "line").attr("d", line);

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

            // const main = d3.select("#main")
            // let startDate = parseTime(d3.min(xdata))
            // let endDate = parseTime(d3.max(xdata))


            // main.append("div")
            //     .html(
            //     // `${startDate.getDay()}` + "-" +
            //         "...Between " +
            //         `${startDate.toLocaleString('default', { month: 'short' })}` + " And " +
            //         `${endDate.toLocaleString('default', { month: 'short' })}`
            //     )
            //     .attr("class","date")

            var createDots = svg.selectAll(".dot").data(scatterData).enter().append("circle").attr("class", "dot");

            createDots.on("click", function (d) {
                window.open(d.url, "_blank");
            }).on("mouseover", function (d) {
                d3.selectAll(".dot").style("fill", function (d) {
                    if (d.y >= 5) {
                        return "green";
                    } else if (d.y <= -5) {
                        return "red";
                    } else {
                        return "white";
                    }
                }).style("opacity", function (d) {
                    if (d.y >= 5) {
                        return "0.5";
                    } else if (d.y <= -5) {
                        return "0.5";
                    } else {
                        return "0.3";
                    }
                });
                d3.select(this).style("opacity", 1).style("fill", "lightblue");
                singleArticleInfo.transition().duration(200).style("opacity", 1);
                singleArticleInfo.select(".article-title").html('' + d.title);
                singleArticleInfo.select(".article-author").html('' + d.author);
                singleArticleInfo.select(".article-sentiment").html('' + d.y);
                singleArticleInfo.select(".article-relevance").html('' + d.relevance);
                singleArticleInfo.select(".article-description").html('' + d.description);
            });

            createDots.transition().ease(d3.easeExp).duration(2000).attr("cx", function (d) {
                return xscl(parseTime(d.x));
            }).attr("cy", function (d) {
                return yscl(d.y);
            }).attr("r", function (d) {
                return 40 * d.relevance;
            }).attr("id", function (d, i) {
                return "dot_" + i;
            }).style("opacity", function (d) {
                if (d.y >= 5) {
                    return "0.5";
                } else if (d.y <= -5) {
                    return "0.5";
                } else {
                    return "0.3";
                }
            }).style("fill", function (d) {
                if (d.y >= 5) {
                    return "green";
                } else if (d.y <= -5) {
                    return "red";
                } else {
                    return "white";
                }
            });

            var updateDots = svg.selectAll(".dot").data(scatterData);

            updateDots.transition().ease(d3.easeExp).duration(2000).attr("class", "dot").attr("cx", function (d) {
                return xscl(parseTime(d.x));
            }).attr("cy", function (d) {
                return yscl(d.y);
            }).attr("r", function (d) {
                return 40 * d.relevance;
            }).style("opacity", function (d) {
                if (d.y >= 5) {
                    return "0.5";
                } else if (d.y <= -5) {
                    return "0.5";
                } else {
                    return "0.3";
                }
            }).style("fill", function (d) {
                if (d.y >= 5) {
                    return "green";
                } else if (d.y <= -5) {
                    return "red";
                } else {
                    return "white";
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
    var main = document.getElementById("main");

    // Testing because I forgot how to vanilla js
    // const newDiv = document.createElement('div');
    // const newContent = document.createTextNode("I'm being created within the index.js file to test if changes show");
    // newDiv.appendChild(newContent);
    // main.appendChild(newDiv);
    // Testing because I forgot how to vanilla js

    var chart = new _chart2.default(props);
    props.chart = chart;

    main.appendChild((0, _query_field2.default)(props));

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

        var comparative = contentSentiment.comparative < 0.08 ? Math.abs(contentSentiment.comparative) / 0.75 : contentSentiment.comparative; //THIS IS ONLY A PLACEHOLDER, update to more rigorous value later
        datum.relevance = Math.round(comparative * 1000) / 1000;
        datum.x = article.publishedAt.split("T")[0];
        datum.y = datum.relevance / 0.25 * (Math.round((contentSentiment.score * ratio + titleSentiment.score * (1 - ratio)) * 1000) / 1000);
        processingData.push(datum);
    });
    payload.scatterData = processingData;
    payload.lineData = averageDayScores(processingData);
    payload.total = calculateTotals(processingData);

    return payload;
};

var calculateTotals = function calculateTotals(data) {
    var total = {};
    data.forEach(function (datum) {
        total.score = total.score ? total.score + datum.y : datum.y;
        total.count = total.count ? total.count + 1 : 1;
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
        averagedData.push({ x: date, y: processedData[date] / count[date] });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xhbmd1YWdlcyBzeW5jIF5cXC5cXC8uKlxcL2luZGV4JCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xhbmd1YWdlcy9lbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xhbmd1YWdlcy9lbi9zY29yaW5nLXN0cmF0ZWd5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZW50aW1lbnQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZW50aW1lbnQvbGliL2xhbmd1YWdlLXByb2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xpYi90b2tlbml6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9uZXdzLmpzIiwid2VicGFjazovLy8uL3NyYy9xdWVyeV9maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VudGltZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZGV2ZWxvcG1lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/NWQzNiJdLCJuYW1lcyI6WyJuZXdzX2FwaV9rZXkiLCJwcm9jZXNzIiwibW9kdWxlIiwiZXhwb3J0cyIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiRXJyb3IiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImUiLCJjbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwiY2FsbCIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwibGVuZ3RoIiwiY29uY2F0IiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJsZW4iLCJydW4iLCJuZXh0VGljayIsImFyZ3MiLCJBcnJheSIsImFyZ3VtZW50cyIsImkiLCJwdXNoIiwiSXRlbSIsImFycmF5IiwicHJvdG90eXBlIiwiYXBwbHkiLCJ0aXRsZSIsImJyb3dzZXIiLCJlbnYiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsIm5hbWUiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsImxhYmVscyIsInJlcXVpcmUiLCJzY29yaW5nU3RyYXRlZ3kiLCJuZWdhdG9ycyIsInRva2VucyIsImN1cnNvciIsInRva2VuU2NvcmUiLCJwcmV2dG9rZW4iLCJ0b2tlbml6ZSIsImxhbmd1YWdlUHJvY2Vzc29yIiwiU2VudGltZW50Iiwib3B0aW9ucyIsInJlZ2lzdGVyTGFuZ3VhZ2UiLCJsYW5ndWFnZUNvZGUiLCJsYW5ndWFnZSIsImFkZExhbmd1YWdlIiwiYW5hbHl6ZSIsInBocmFzZSIsIm9wdHMiLCJjYWxsYmFjayIsImdldExhYmVscyIsImV4dHJhcyIsIk9iamVjdCIsImFzc2lnbiIsInNjb3JlIiwid29yZHMiLCJwb3NpdGl2ZSIsIm5lZ2F0aXZlIiwib2JqIiwiaGFzT3duUHJvcGVydHkiLCJhcHBseVNjb3JpbmdTdHJhdGVneSIsInJlc3VsdCIsImNvbXBhcmF0aXZlIiwiZW1vamlzIiwiZW5MYW5ndWFnZSIsImxhbmd1YWdlcyIsImVuIiwiZ2V0TGFuZ3VhZ2UiLCJlcnIiLCJkZWZhdWx0U2NvcmluZ1N0cmF0ZWd5IiwiaW5wdXQiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJzcGxpdCIsIkNoYXJ0IiwicHJvcHMiLCJkYXRhIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJzdmciLCJkMyIsInNlbGVjdCIsImF0dHIiLCJzdHlsZSIsImFwcGVuZCIsImR1bW15RGF0YSIsImRhdGFMZW5ndGgiLCJtYWciLCJ4IiwieSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImRhdHVtIiwieGRhdGEiLCJ5ZGF0YSIsImZvckVhY2giLCJ4c2NsIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJtYXgiLCJyYW5nZSIsInlzY2wiLCJtaW4iLCJ4X2F4aXMiLCJheGlzQm90dG9tIiwic2NhbGUiLCJ5X2F4aXMiLCJheGlzTGVmdCIsImxpbmUiLCJkIiwiY3VydmUiLCJjdXJ2ZU1vbm90b25lWCIsInBheWxvYWQiLCJsaW5lRGF0YSIsInNjYXR0ZXJEYXRhIiwidG90YWwiLCJjb25zb2xlIiwibG9nIiwidHJhbnNpdGlvbiIsImVhc2UiLCJlYXNlRXhwIiwiZHVyYXRpb24iLCJhdmVyYWdlIiwic3FydCIsImFicyIsInNpbmdsZUFydGljbGVJbmZvIiwicGFyc2VUaW1lIiwidGltZVBhcnNlIiwieEZvcm1hdCIsInNjYWxlVGltZSIsImV4dGVudCIsInRpY2tGb3JtYXQiLCJ0aW1lRm9ybWF0Iiwic2VsZWN0QWxsIiwiY3JlYXRlRG90cyIsImVudGVyIiwid2luZG93Iiwib3BlbiIsInVybCIsImh0bWwiLCJhdXRob3IiLCJyZWxldmFuY2UiLCJkZXNjcmlwdGlvbiIsInVwZGF0ZURvdHMiLCJleGl0IiwicmVtb3ZlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFpbiIsImdldEVsZW1lbnRCeUlkIiwiY2hhcnQiLCJhcHBlbmRDaGlsZCIsImJ1aWxkIiwiaGVhZGxpbmVzIiwiZXZlcnl0aGluZyIsImFkZENvdW50cnkiLCJjb3VudHJ5IiwiYWRkU291cmNlIiwic291cmNlIiwiYWRkUXVlcnkiLCJxdWVyeSIsImFkZEZyb20iLCJzdGFydCIsInNvcnRCeSIsIm9wdGlvbiIsImFkZFRvIiwiZW5kIiwibG4iLCJhZGRQYWdlc2l6ZSIsImludCIsInBhZ2UiLCJhcGlLZXkiLCJmZXRjaEhlYWRsaW5lcyIsInJlcSIsIlJlcXVlc3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJmZXRjaEV2ZXJ5dGhpbmdGb3IiLCJmb3JtIiwiY3JlYXRlRWxlbWVudCIsInF1ZXJ5SW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJkZWJvdW5jZWRUeXBpbmciLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlVHlwaW5nIiwidmFsdWUiLCJhcnRpY2xlcyIsInJlbmRlciIsImRlYm91bmNlIiwiZGVsYXkiLCJmbiIsInRpbWVySWQiLCJwcm9jZXNzRGF0YSIsInNlbnRpbWVudCIsInByb2Nlc3NpbmdEYXRhIiwicmF0aW8iLCJjb250ZW50IiwiYXJ0aWNsZSIsImNvbnRlbnRTZW50aW1lbnQiLCJ0aXRsZVNlbnRpbWVudCIsInJvdW5kIiwicHVibGlzaGVkQXQiLCJhdmVyYWdlRGF5U2NvcmVzIiwiY2FsY3VsYXRlVG90YWxzIiwiY291bnQiLCJwcm9jZXNzZWREYXRhIiwiYXZlcmFnZWREYXRhIiwia2V5cyIsImRhdGUiLCJzb3J0ZWRBdmVyYWdlZERhdGEiLCJzb3J0Iiwic29ydERhdGUiLCJhIiwiYiIsImRhdGUxIiwiRGF0ZSIsImRhdGUyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSww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SUFBeUJLLE1BQU1KLENBQXhELEdBQTRESSxNQUFNSixDQUEzRjtBQUNBdUgsY0FBTW5ILE1BQU1MLENBQVosSUFBaUJ3SCxNQUFNbkgsTUFBTUwsQ0FBWixJQUFpQndILE1BQU1uSCxNQUFNTCxDQUFaLElBQWlCLENBQWxDLEdBQXNDLENBQXZEO0FBQ0gsS0FIRDs7QUFLQSxRQUFNMEgsZUFBZSxFQUFyQjtBQUNBbkssV0FBT29LLElBQVAsQ0FBWUYsYUFBWixFQUEyQmpILE9BQTNCLENBQW1DLGdCQUFRO0FBQ3ZDa0gscUJBQWFyTixJQUFiLENBQWtCLEVBQUUyRixHQUFHNEgsSUFBTCxFQUFXM0gsR0FBR3dILGNBQWNHLElBQWQsSUFBc0JKLE1BQU1JLElBQU4sQ0FBcEMsRUFBbEI7QUFDSCxLQUZEOztBQUlBLFFBQU1DLHFCQUFxQkgsYUFBYUksSUFBYixDQUFrQkMsUUFBbEIsQ0FBM0I7QUFDQSxXQUFPRixrQkFBUDtBQUNILENBZkQ7O0FBa0JBLElBQU1FLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUN2QixRQUFNQyxRQUFRLElBQUlDLElBQUosQ0FBU0gsRUFBRWhJLENBQVgsQ0FBZDtBQUNBLFFBQU1vSSxRQUFRLElBQUlELElBQUosQ0FBU0YsRUFBRWpJLENBQVgsQ0FBZDtBQUNBLFFBQUlrSSxTQUFTRSxLQUFiLEVBQW1CO0FBQ2YsZUFBTyxDQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsZUFBTyxDQUFDLENBQVI7QUFDSDtBQUNKLENBUkQsQzs7Ozs7Ozs7Ozs7QUM3REEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGNvbnN0IG5ld3NfYXBpX2tleSA9ICcwZWJiNTYzZTJhNjI0OGNhYmE1ZTRmNWNlY2QzNjMxYyc7IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9lbi9pbmRleFwiOiBcIi4vbm9kZV9tb2R1bGVzL3NlbnRpbWVudC9sYW5ndWFnZXMvZW4vaW5kZXguanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvc2VudGltZW50L2xhbmd1YWdlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC9pbmRleCRcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBsYWJlbHM6IHJlcXVpcmUoJy4vbGFiZWxzLmpzb24nKSxcbiAgICBzY29yaW5nU3RyYXRlZ3k6IHJlcXVpcmUoJy4vc2NvcmluZy1zdHJhdGVneScpXG59O1xuIiwidmFyIG5lZ2F0b3JzID0gcmVxdWlyZSgnLi9uZWdhdG9ycy5qc29uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGFwcGx5OiBmdW5jdGlvbih0b2tlbnMsIGN1cnNvciwgdG9rZW5TY29yZSkge1xuICAgICAgICBpZiAoY3Vyc29yID4gMCkge1xuICAgICAgICAgICAgdmFyIHByZXZ0b2tlbiA9IHRva2Vuc1tjdXJzb3IgLSAxXTtcbiAgICAgICAgICAgIGlmIChuZWdhdG9yc1twcmV2dG9rZW5dKSB7XG4gICAgICAgICAgICAgICAgdG9rZW5TY29yZSA9IC10b2tlblNjb3JlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2tlblNjb3JlO1xuICAgIH1cbn07XG4iLCJ2YXIgdG9rZW5pemUgPSByZXF1aXJlKCcuL3Rva2VuaXplJyk7XG52YXIgbGFuZ3VhZ2VQcm9jZXNzb3IgPSByZXF1aXJlKCcuL2xhbmd1YWdlLXByb2Nlc3NvcicpO1xuXG4vKipcbiAqIENvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIEluc3RhbmNlIG9wdGlvbnNcbiAqL1xudmFyIFNlbnRpbWVudCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbn07XG5cbi8qKlxuICogUmVnaXN0ZXJzIHRoZSBzcGVjaWZpZWQgbGFuZ3VhZ2VcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbGFuZ3VhZ2VDb2RlXG4gKiAgICAgLSBUd28tZGlnaXQgY29kZSBmb3IgdGhlIGxhbmd1YWdlIHRvIHJlZ2lzdGVyXG4gKiBAcGFyYW0ge09iamVjdH0gbGFuZ3VhZ2VcbiAqICAgICAtIFRoZSBsYW5ndWFnZSBtb2R1bGUgdG8gcmVnaXN0ZXJcbiAqL1xuU2VudGltZW50LnByb3RvdHlwZS5yZWdpc3Rlckxhbmd1YWdlID0gZnVuY3Rpb24gKGxhbmd1YWdlQ29kZSwgbGFuZ3VhZ2UpIHtcbiAgICBsYW5ndWFnZVByb2Nlc3Nvci5hZGRMYW5ndWFnZShsYW5ndWFnZUNvZGUsIGxhbmd1YWdlKTtcbn07XG5cbi8qKlxuICogUGVyZm9ybXMgc2VudGltZW50IGFuYWx5c2lzIG9uIHRoZSBwcm92aWRlZCBpbnB1dCAncGhyYXNlJy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGhyYXNlXG4gKiAgICAgLSBJbnB1dCBwaHJhc2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKiAgICAgLSBPcHRpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cy5sYW5ndWFnZVxuICogICAgIC0gSW5wdXQgbGFuZ3VhZ2UgY29kZSAoMiBkaWdpdCBjb2RlKSwgZGVmYXVsdHMgdG8gJ2VuJ1xuICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZXh0cmFzXG4gKiAgICAgLSBPcHRpb25hbCBzZW50aW1lbnQgYWRkaXRpb25zIHRvIEFGSU5OIChoYXNoIGsvdiBwYWlycylcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiAgICAgLSBPcHRpb25hbCBjYWxsYmFja1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5TZW50aW1lbnQucHJvdG90eXBlLmFuYWx5emUgPSBmdW5jdGlvbiAocGhyYXNlLCBvcHRzLCBjYWxsYmFjaykge1xuICAgIC8vIFBhcnNlIGFyZ3VtZW50c1xuICAgIGlmICh0eXBlb2YgcGhyYXNlID09PSAndW5kZWZpbmVkJykgcGhyYXNlID0gJyc7XG4gICAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxiYWNrID0gb3B0cztcbiAgICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgIHZhciBsYW5ndWFnZUNvZGUgPSBvcHRzLmxhbmd1YWdlIHx8ICdlbic7XG4gICAgdmFyIGxhYmVscyA9IGxhbmd1YWdlUHJvY2Vzc29yLmdldExhYmVscyhsYW5ndWFnZUNvZGUpO1xuXG4gICAgLy8gTWVyZ2UgZXh0cmEgbGFiZWxzXG4gICAgaWYgKHR5cGVvZiBvcHRzLmV4dHJhcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbGFiZWxzID0gT2JqZWN0LmFzc2lnbihsYWJlbHMsIG9wdHMuZXh0cmFzKTtcbiAgICB9XG5cbiAgICAvLyBTdG9yYWdlIG9iamVjdHNcbiAgICB2YXIgdG9rZW5zICAgICAgPSB0b2tlbml6ZShwaHJhc2UpLFxuICAgICAgICBzY29yZSAgICAgICA9IDAsXG4gICAgICAgIHdvcmRzICAgICAgID0gW10sXG4gICAgICAgIHBvc2l0aXZlICAgID0gW10sXG4gICAgICAgIG5lZ2F0aXZlICAgID0gW107XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgdG9rZW5zXG4gICAgdmFyIGkgPSB0b2tlbnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdmFyIG9iaiA9IHRva2Vuc1tpXTtcbiAgICAgICAgaWYgKCFsYWJlbHMuaGFzT3duUHJvcGVydHkob2JqKSkgY29udGludWU7XG4gICAgICAgIHdvcmRzLnB1c2gob2JqKTtcblxuICAgICAgICAvLyBBcHBseSBzY29yaW5nIHN0cmF0ZWd5XG4gICAgICAgIHZhciB0b2tlblNjb3JlID0gbGFiZWxzW29ial07XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgIHRva2VuU2NvcmUgPSBsYW5ndWFnZVByb2Nlc3Nvci5hcHBseVNjb3JpbmdTdHJhdGVneShsYW5ndWFnZUNvZGUsIHRva2VucywgaSwgdG9rZW5TY29yZSk7XG4gICAgICAgIGlmICh0b2tlblNjb3JlID4gMCkgcG9zaXRpdmUucHVzaChvYmopO1xuICAgICAgICBpZiAodG9rZW5TY29yZSA8IDApIG5lZ2F0aXZlLnB1c2gob2JqKTtcbiAgICAgICAgc2NvcmUgKz0gdG9rZW5TY29yZTtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICBzY29yZTogICAgICAgICAgc2NvcmUsXG4gICAgICAgIGNvbXBhcmF0aXZlOiAgICB0b2tlbnMubGVuZ3RoID4gMCA/IHNjb3JlIC8gdG9rZW5zLmxlbmd0aCA6IDAsXG4gICAgICAgIHRva2VuczogICAgICAgICB0b2tlbnMsXG4gICAgICAgIHdvcmRzOiAgICAgICAgICB3b3JkcyxcbiAgICAgICAgcG9zaXRpdmU6ICAgICAgIHBvc2l0aXZlLFxuICAgICAgICBuZWdhdGl2ZTogICAgICAgbmVnYXRpdmVcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIG9wdGlvbmFsIGFzeW5jIGludGVyZmFjZVxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2VudGltZW50O1xuIiwidmFyIGVtb2ppcyA9IHJlcXVpcmUoJy4uL2J1aWxkL2Vtb2ppLmpzb24nKTtcblxuLy8gRW5nbGlzaCBpcyBsb2FkZWQgYnkgZGVmYXVsdFxudmFyIGVuTGFuZ3VhZ2UgPSByZXF1aXJlKCcuLi9sYW5ndWFnZXMvZW4vaW5kZXgnKTtcbi8vIEFkZCBlbW9qaXNcbk9iamVjdC5hc3NpZ24oZW5MYW5ndWFnZS5sYWJlbHMsIGVtb2ppcyk7XG5cbi8vIENhY2hlIGxvYWRlZCBsYW5ndWFnZXNcbnZhciBsYW5ndWFnZXMgPSB7XG4gICAgZW46IGVuTGFuZ3VhZ2Vcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIHRoZSBzcGVjaWZpZWQgbGFuZ3VhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBsYW5ndWFnZUNvZGVcbiAgICAgKiAgICAgLSBUd28tZGlnaXQgY29kZSBmb3IgdGhlIGxhbmd1YWdlIHRvIHJlZ2lzdGVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGxhbmd1YWdlXG4gICAgICogICAgIC0gVGhlIGxhbmd1YWdlIG1vZHVsZSB0byByZWdpc3RlclxuICAgICAqL1xuICAgIGFkZExhbmd1YWdlOiBmdW5jdGlvbiAobGFuZ3VhZ2VDb2RlLCBsYW5ndWFnZSkge1xuICAgICAgICBpZiAoIWxhbmd1YWdlLmxhYmVscykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdsYW5ndWFnZS5sYWJlbHMgbXVzdCBiZSBkZWZpbmVkIScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBlbW9qaXNcbiAgICAgICAgT2JqZWN0LmFzc2lnbihsYW5ndWFnZS5sYWJlbHMsIGVtb2ppcyk7XG4gICAgICAgIGxhbmd1YWdlc1tsYW5ndWFnZUNvZGVdID0gbGFuZ3VhZ2U7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhIGxhbmd1YWdlIG9iamVjdCBmcm9tIHRoZSBjYWNoZSxcbiAgICAgKiBvciB0cmllcyB0byBsb2FkIGl0IGZyb20gdGhlIHNldCBvZiBzdXBwb3J0ZWQgbGFuZ3VhZ2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGFuZ3VhZ2VDb2RlIC0gVHdvLWRpZ2l0IGNvZGUgZm9yIHRoZSBsYW5ndWFnZSB0byBmZXRjaFxuICAgICAqL1xuICAgIGdldExhbmd1YWdlOiBmdW5jdGlvbihsYW5ndWFnZUNvZGUpIHtcbiAgICAgICAgaWYgKCFsYW5ndWFnZUNvZGUpIHtcbiAgICAgICAgICAgIC8vIERlZmF1bHQgdG8gZW5nbGlzaCBpZiBubyBsYW5ndWFnZSB3YXMgc3BlY2lmaWVkXG4gICAgICAgICAgICByZXR1cm4gbGFuZ3VhZ2VzLmVuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbGFuZ3VhZ2VzW2xhbmd1YWdlQ29kZV0pIHtcbiAgICAgICAgICAgIC8vIFRyeSB0byBsb2FkIHNwZWNpZmllZCBsYW5ndWFnZVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICAgICAgICAgIHZhciBsYW5ndWFnZSA9IHJlcXVpcmUoJy4uL2xhbmd1YWdlcy8nICsgbGFuZ3VhZ2VDb2RlICsgJy9pbmRleCcpO1xuICAgICAgICAgICAgICAgIC8vIEFkZCBsYW5ndWFnZSB0byBpbi1tZW1vcnkgY2FjaGVcbiAgICAgICAgICAgICAgICB0aGlzLmFkZExhbmd1YWdlKGxhbmd1YWdlQ29kZSwgbGFuZ3VhZ2UpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBsYW5ndWFnZSBmb3VuZDogJyArIGxhbmd1YWdlQ29kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxhbmd1YWdlc1tsYW5ndWFnZUNvZGVdO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIEFGSU5OLTE2NSB3ZWlnaHRlZCBsYWJlbHMgZm9yIHRoZSBzcGVjaWZpZWQgbGFuZ3VhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBsYW5ndWFnZUNvZGUgLSBUd28tZGlnaXQgbGFuZ3VhZ2UgY29kZVxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRMYWJlbHM6IGZ1bmN0aW9uKGxhbmd1YWdlQ29kZSkge1xuICAgICAgICB2YXIgbGFuZ3VhZ2UgPSB0aGlzLmdldExhbmd1YWdlKGxhbmd1YWdlQ29kZSk7XG4gICAgICAgIHJldHVybiBsYW5ndWFnZS5sYWJlbHM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgYSBzY29yaW5nIHN0cmF0ZWd5IGZvciB0aGUgY3VycmVudCB0b2tlblxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGxhbmd1YWdlQ29kZSAtIFR3by1kaWdpdCBsYW5ndWFnZSBjb2RlXG4gICAgICogQHBhcmFtIHtBcnJheX0gdG9rZW5zIC0gVG9rZW5zIG9mIHRoZSBwaHJhc2UgdG8gYW5hbHl6ZVxuICAgICAqIEBwYXJhbSB7aW50fSBjdXJzb3IgLSBDdXJzb3Igb2YgdGhlIGN1cnJlbnQgdG9rZW4gYmVpbmcgYW5hbHl6ZWRcbiAgICAgKiBAcGFyYW0ge2ludH0gdG9rZW5TY29yZSAtIFRoZSBzY29yZSBvZiB0aGUgY3VycmVudCB0b2tlbiBiZWluZyBhbmFseXplZFxuICAgICAqL1xuICAgIGFwcGx5U2NvcmluZ1N0cmF0ZWd5OiBmdW5jdGlvbihsYW5ndWFnZUNvZGUsIHRva2VucywgY3Vyc29yLCB0b2tlblNjb3JlKSB7XG4gICAgICAgIHZhciBsYW5ndWFnZSA9IHRoaXMuZ2V0TGFuZ3VhZ2UobGFuZ3VhZ2VDb2RlKTtcbiAgICAgICAgLy8gRmFsbGJhY2sgdG8gZGVmYXVsdCBzdHJhdGVneSBpZiBub25lIHdhcyBzcGVjaWZpZWRcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICAgICAgdmFyIHNjb3JpbmdTdHJhdGVneSA9IGxhbmd1YWdlLnNjb3JpbmdTdHJhdGVneSB8fCBkZWZhdWx0U2NvcmluZ1N0cmF0ZWd5O1xuICAgICAgICByZXR1cm4gc2NvcmluZ1N0cmF0ZWd5LmFwcGx5KHRva2VucywgY3Vyc29yLCB0b2tlblNjb3JlKTtcbiAgICB9XG59O1xuXG52YXIgZGVmYXVsdFNjb3JpbmdTdHJhdGVneSA9IHtcbiAgICBhcHBseTogZnVuY3Rpb24odG9rZW5zLCBjdXJzb3IsIHRva2VuU2NvcmUpIHtcbiAgICAgICAgcmV0dXJuIHRva2VuU2NvcmU7XG4gICAgfVxufTtcbiIsIi8qZXNsaW50IG5vLXVzZWxlc3MtZXNjYXBlOiBcIm9mZlwiKi9cblxuLyoqXG4gKiBSZW1vdmUgc3BlY2lhbCBjaGFyYWN0ZXJzIGFuZCByZXR1cm4gYW4gYXJyYXkgb2YgdG9rZW5zICh3b3JkcykuXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlucHV0IElucHV0IHN0cmluZ1xuICogQHJldHVybiB7YXJyYXl9ICAgICAgICBBcnJheSBvZiB0b2tlbnNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dFxuICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvXFxuL2csICcgJylcbiAgICAgICAgLnJlcGxhY2UoL1suLFxcLyMhJCVcXF4mXFwqOzp7fT1fYFxcXCJ+KCldL2csICcnKVxuICAgICAgICAuc3BsaXQoJyAnKTtcbn07XG4iLCIvLyBtaW1pYyByZWFjdCBzdHlsZVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHRoaXMuZGF0YSA9IHByb3BzLmRhdGFcbiAgICAgICAgdGhpcy5tYXJnaW4gPSB7XG4gICAgICAgICAgICB0b3A6IDUwLFxuICAgICAgICAgICAgcmlnaHQ6IDUwLFxuICAgICAgICAgICAgYm90dG9tOiA3MCxcbiAgICAgICAgICAgIGxlZnQ6IDIwLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMud2lkdGggPSA5MDAgLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNTAwIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuICAgICAgICB0aGlzLnN2ZyA9IGQzLnNlbGVjdCgnc3ZnJylcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMud2lkdGggKyB0aGlzLm1hcmdpbi5sZWZ0ICsgdGhpcy5tYXJnaW4ucmlnaHQpXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pXG4gICAgICAgICAgICAuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InLCAncmdiYSgyNTUsMjU1LDI1NSwgMC4xKScpXG4gICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke3RoaXMubWFyZ2luLmxlZnR9LCAke3RoaXMubWFyZ2luLnRvcH0pYClcbiAgICB9XG5cbiAgICBkdW1teURhdGEoKXtcbiAgICAgICAgY29uc3QgZHVtbXlEYXRhID0gW11cbiAgICAgICAgY29uc3QgZGF0YUxlbmd0aCA9IDE1O1xuICAgICAgICBjb25zdCBtYWcgPSAyNTtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBkYXRhTGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyICogbWFnKSAtIG1hZztcbiAgICAgICAgICAgIGNvbnN0IGRhdHVtID0ge3gsIHl9O1xuICAgICAgICAgICAgZHVtbXlEYXRhLnB1c2goZGF0dW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkdW1teURhdGFcbiAgICB9XG5cbiAgICBidWlsZChkYXRhKXtcbiAgICAgICAgY29uc3QgeGRhdGEgPSBbXVxuICAgICAgICBjb25zdCB5ZGF0YSA9IFtdXG4gICAgICAgIGRhdGEuZm9yRWFjaChkYXR1bSA9PiB7XG4gICAgICAgICAgICB4ZGF0YS5wdXNoKGRhdHVtLngpXG4gICAgICAgICAgICB5ZGF0YS5wdXNoKGRhdHVtLnkpXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy53aWR0aFxuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmhlaWdodFxuICAgICAgICBjb25zdCBtYXJnaW4gPSB0aGlzLm1hcmdpblxuXG4gICAgICAgIC8vY3JlYXRlIHRoZSBjaGFydCBvYmplY3RcbiAgICAgICAgY29uc3Qgc3ZnID0gdGhpcy5zdmdcblxuICAgICAgICBjb25zdCB4c2NsID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLmRvbWFpbihbMCwgZDMubWF4KHhkYXRhKV0pXG4gICAgICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSk7XG4gICAgICAgIHRoaXMueHNjbCA9IHhzY2xcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHlzY2wgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5kb21haW4oW2QzLm1heCh5ZGF0YSksIGQzLm1pbih5ZGF0YSldKVxuICAgICAgICAucmFuZ2UoWzAsIGhlaWdodF0pO1xuICAgICAgICB0aGlzLnlzY2wgPSB5c2NsXG5cbiAgICAgICAgY29uc3QgeF9heGlzID0gZDMuYXhpc0JvdHRvbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2NhbGUoeHNjbClcblxuICAgICAgICBjb25zdCB5X2F4aXMgPSBkMy5heGlzTGVmdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2NhbGUoeXNjbClcblxuICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCR7KHlzY2woMCkpfSlgKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBgeGF4aXNgKVxuICAgICAgICAgICAgLmNhbGwoeF9heGlzKVxuXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIGB5YXhpc2ApXG4gICAgICAgICAgICAuY2FsbCh5X2F4aXMpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBsaW5lIGdlbmVyYXRvclxuXG4gICAgICAgIGNvbnN0IGxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgICAgIC54KCBkID0+IHsgcmV0dXJuIHhzY2woZC54KSB9IClcbiAgICAgICAgICAgIC55KCBkID0+IHsgcmV0dXJuIHlzY2woZC55KSB9IClcbiAgICAgICAgICAgIC5jdXJ2ZShkMy5jdXJ2ZU1vbm90b25lWCk7XG5cbiAgICAgICAgLy8gZHJhdyB0aGUgbGluZVxuICAgICAgICBzdmcuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCJ3aGl0ZXNtb2tlXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgXCIycHhcIilcbiAgICAgICAgICAgIC5kYXRhKFtkYXRhXSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBsaW5lKTtcblxuICAgICAgICBzdmcuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ4MVwiLCAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ5MVwiLCB5c2NsKC01KSlcbiAgICAgICAgICAgIC5hdHRyKFwieDJcIiwgd2lkdGgpXG4gICAgICAgICAgICAuYXR0cihcInkyXCIsIHlzY2woLTUpKVxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCJyZWRcIilcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIFwiMXB4XCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFkLWxpbmVcIilcbiAgICAgICAgICAgIC5zdHlsZShcInN0cm9rZS1kYXNoYXJyYXlcIiwgKFwiMywgM1wiKSlcblxuICAgICAgICBzdmcuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ4MVwiLCAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ5MVwiLCB5c2NsKDUpKVxuICAgICAgICAgICAgLmF0dHIoXCJ4MlwiLCB3aWR0aClcbiAgICAgICAgICAgIC5hdHRyKFwieTJcIiwgeXNjbCg1KSlcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiZ3JlZW5cIilcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIFwiMXB4XCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZ29vZC1saW5lXCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIChcIjMsIDNcIikpXG4gICAgfVxuXG5cblxuICAgIHJlbmRlcihwYXlsb2FkKXtcbiAgICAgICAgY29uc3QgZGF0YSA9IHBheWxvYWQubGluZURhdGE7XG4gICAgICAgIGNvbnN0IHNjYXR0ZXJEYXRhID0gcGF5bG9hZC5zY2F0dGVyRGF0YTtcbiAgICAgICAgY29uc3QgdG90YWwgPSBwYXlsb2FkLnRvdGFsXG4gICAgICAgIGxldCBzdmcgPSB0aGlzLnN2ZztcbiAgICAgICAgY29uc3QgeWRhdGEgPSBbXVxuICAgICAgICBjb25zdCB4ZGF0YSA9IFtdXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaGVpZ2h0XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy53aWR0aFxuICAgICAgICBjb25zb2xlLmxvZyhkMy5zZWxlY3QoXCIuY2hhcnQtdGl0bGVcIikpXG4gICAgICAgIGNvbnNvbGUubG9nKHRvdGFsKVxuICAgICAgICBkMy5zZWxlY3QoXCIuY2hhcnQtdGl0bGVcIilcbiAgICAgICAgICAgIC5kYXRhKFt0b3RhbF0pXG4gICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKDIwMDApXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwiY29sb3JcIiwgZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGQzLnNlbGVjdChcIkluc2lkZSB0aGUgZnVuY3Rpb25cIikpXG4gICAgICAgICAgICAgICAgICAgIGlmIChkLmF2ZXJhZ2UgPiAwLjEzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYHJnYmEoJHs0MCAqIE1hdGguc3FydChkLmF2ZXJhZ2UpfSwgJHsxMjggKiBNYXRoLnNxcnQoZC5hdmVyYWdlKX0sICR7NDAgKiBNYXRoLnNxcnQoZC5hdmVyYWdlKX0sIDAuOTcpYFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGQuYXZlcmFnZSA8IC0wLjEzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYHJnYmEoJHsxMjggKiBNYXRoLnNxcnQoTWF0aC5hYnMoZC5hdmVyYWdlKSl9LCAkezQwICogTWF0aC5zcXJ0KE1hdGguYWJzKGQuYXZlcmFnZSkpfSwgJHs0MCAqIE1hdGguc3FydChNYXRoLmFicyhkLmF2ZXJhZ2UpKX0sIDAuOTcpYFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7MjU1ICogTWF0aC5zcXJ0KE1hdGguYWJzKGQuYXZlcmFnZSkpfSwgJHsyNTUgKiBNYXRoLnNxcnQoTWF0aC5hYnMoZC5hdmVyYWdlKSl9LCAkezI1NSAqIE1hdGguc3FydChNYXRoLmFicyhkLmF2ZXJhZ2UpKX0sIDAuOClgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHNpbmdsZUFydGljbGVJbmZvID0gZDMuc2VsZWN0KFwiLmFydGljbGUtaW5mby1jb250YWluZXJcIilcblxuICAgICAgICBzY2F0dGVyRGF0YS5mb3JFYWNoKGRhdHVtID0+IHtcbiAgICAgICAgICAgIHlkYXRhLnB1c2goZGF0dW0ueSlcbiAgICAgICAgICAgIHhkYXRhLnB1c2goZGF0dW0ueClcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBwYXJzZVRpbWUgPSBkMy50aW1lUGFyc2UoXCIlWS0lbS0lZFwiKVxuICAgICAgICBjb25zdCB4Rm9ybWF0ID0gXCIlYi0lZFwiO1xuICAgICAgICBjb25zdCB4c2NsID0gZDMuc2NhbGVUaW1lKClcbiAgICAgICAgICAgIC5kb21haW4oZDMuZXh0ZW50KGRhdGEsIGQgPT4geyByZXR1cm4gcGFyc2VUaW1lKGQueCkgfSkpXG4gICAgICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSk7XG5cbiAgICAgICAgY29uc3QgeF9heGlzID0gZDMuYXhpc0JvdHRvbSgpXG4gICAgICAgICAgICAuc2NhbGUoeHNjbClcbiAgICAgICAgICAgIFxuXG4gICAgICAgIGNvbnN0IHlzY2wgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAuZG9tYWluKFtkMy5tYXgoeWRhdGEpLCBkMy5taW4oeWRhdGEpXSlcbiAgICAgICAgICAgIC5yYW5nZShbMCwgaGVpZ2h0XSk7XG5cbiAgICAgICAgY29uc3QgeV9heGlzID0gZDMuYXhpc0xlZnQoKVxuICAgICAgICAgICAgLnNjYWxlKHlzY2wpXG5cbiAgICAgICAgc3ZnLnNlbGVjdChcIi54YXhpc1wiKVxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbigyMDAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCR7eXNjbCgwKX0pYClcbiAgICAgICAgICAgIC5jYWxsKHhfYXhpcy50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoeEZvcm1hdCkpKVxuICAgICAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIDApXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDkpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkeVwiLCBcIi4zNWVtXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoOTApXCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJzdGFydFwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKVxuXG4gICAgICAgIHN2Zy5zZWxlY3QoXCIueWF4aXNcIilcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFeHApXG4gICAgICAgICAgICAuZHVyYXRpb24oMjAwMClcbiAgICAgICAgICAgIC5jYWxsKHlfYXhpcylcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIilcblxuICAgICAgICBjb25zdCBsaW5lID0gZDMubGluZSgpXG4gICAgICAgICAgICAueChkID0+IHsgcmV0dXJuIHhzY2wocGFyc2VUaW1lKGQueCkpOyB9KVxuICAgICAgICAgICAgLnkoZCA9PiB7IHJldHVybiB5c2NsKGQueSk7IH0pXG4gICAgICAgICAgICAuY3VydmUoZDMuY3VydmVNb25vdG9uZVgpO1xuXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoJy5saW5lJylcbiAgICAgICAgICAgIC5kYXRhKFtkYXRhXSlcbiAgICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUV4cClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oMjAwMClcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBsaW5lKTtcblxuICAgICAgICBzdmcuc2VsZWN0KFwiLmdvb2QtbGluZVwiKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUV4cClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyMDAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ4MVwiLCAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ5MVwiLCB5c2NsKDUpKVxuICAgICAgICAgICAgLmF0dHIoXCJ4MlwiLCB3aWR0aClcbiAgICAgICAgICAgIC5hdHRyKFwieTJcIiwgeXNjbCg1KSlcbiAgICAgICAgICAgIC5hdHRyKFwiZGlzcGxheVwiLCBkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoeXNjbCg1KSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibm9uZVwiXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiaW5oZXJpdFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICBzdmcuc2VsZWN0KFwiLmJhZC1saW5lXCIpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDIwMDApXG4gICAgICAgICAgICAuYXR0cihcIngxXCIsIDApXG4gICAgICAgICAgICAuYXR0cihcInkxXCIsIHlzY2woLTUpIClcbiAgICAgICAgICAgIC5hdHRyKFwieDJcIiwgd2lkdGgpXG4gICAgICAgICAgICAuYXR0cihcInkyXCIsIHlzY2woLTUpKVxuICAgICAgICAgICAgLmF0dHIoXCJkaXNwbGF5XCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh5c2NsKC01KSA+IGhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJub25lXCJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IClcblxuICAgICAgICAvLyBjb25zdCBtYWluID0gZDMuc2VsZWN0KFwiI21haW5cIilcbiAgICAgICAgLy8gbGV0IHN0YXJ0RGF0ZSA9IHBhcnNlVGltZShkMy5taW4oeGRhdGEpKVxuICAgICAgICAvLyBsZXQgZW5kRGF0ZSA9IHBhcnNlVGltZShkMy5tYXgoeGRhdGEpKVxuXG5cbiAgICAgICAgLy8gbWFpbi5hcHBlbmQoXCJkaXZcIilcbiAgICAgICAgLy8gICAgIC5odG1sKFxuICAgICAgICAvLyAgICAgLy8gYCR7c3RhcnREYXRlLmdldERheSgpfWAgKyBcIi1cIiArXG4gICAgICAgIC8vICAgICAgICAgXCIuLi5CZXR3ZWVuIFwiICtcbiAgICAgICAgLy8gICAgICAgICBgJHtzdGFydERhdGUudG9Mb2NhbGVTdHJpbmcoJ2RlZmF1bHQnLCB7IG1vbnRoOiAnc2hvcnQnIH0pfWAgKyBcIiBBbmQgXCIgK1xuICAgICAgICAvLyAgICAgICAgIGAke2VuZERhdGUudG9Mb2NhbGVTdHJpbmcoJ2RlZmF1bHQnLCB7IG1vbnRoOiAnc2hvcnQnIH0pfWBcbiAgICAgICAgLy8gICAgIClcbiAgICAgICAgLy8gICAgIC5hdHRyKFwiY2xhc3NcIixcImRhdGVcIilcblxuICAgICAgICBjb25zdCBjcmVhdGVEb3RzID0gc3ZnLnNlbGVjdEFsbChcIi5kb3RcIilcbiAgICAgICAgICAgIC5kYXRhKHNjYXR0ZXJEYXRhKVxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZG90XCIpO1xuICAgICAgICAgICAgXG4gICAgICAgIGNyZWF0ZURvdHNcbiAgICAgICAgICAgIC5vbihcImNsaWNrXCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKGQudXJsLCBcIl9ibGFua1wiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLmRvdFwiKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQueSA+PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkLnkgPD0gLTUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC55ID49IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIwLjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkLnkgPD0gLTUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIwLjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIwLjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJsaWdodGJsdWVcIik7XG4gICAgICAgICAgICAgICAgc2luZ2xlQXJ0aWNsZUluZm8udHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgICAgIC5kdXJhdGlvbigyMDApXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSk7XG4gICAgICAgICAgICAgICAgc2luZ2xlQXJ0aWNsZUluZm8uc2VsZWN0KFwiLmFydGljbGUtdGl0bGVcIilcbiAgICAgICAgICAgICAgICAgICAgLmh0bWwoXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtkLnRpdGxlfWBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBzaW5nbGVBcnRpY2xlSW5mby5zZWxlY3QoXCIuYXJ0aWNsZS1hdXRob3JcIilcbiAgICAgICAgICAgICAgICAgICAgLmh0bWwoXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtkLmF1dGhvcn1gXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgc2luZ2xlQXJ0aWNsZUluZm8uc2VsZWN0KFwiLmFydGljbGUtc2VudGltZW50XCIpXG4gICAgICAgICAgICAgICAgICAgIC5odG1sKFxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZC55fWBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBzaW5nbGVBcnRpY2xlSW5mby5zZWxlY3QoXCIuYXJ0aWNsZS1yZWxldmFuY2VcIilcbiAgICAgICAgICAgICAgICAgICAgLmh0bWwoXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtkLnJlbGV2YW5jZX1gXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgc2luZ2xlQXJ0aWNsZUluZm8uc2VsZWN0KFwiLmFydGljbGUtZGVzY3JpcHRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgLmh0bWwoXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtkLmRlc2NyaXB0aW9ufWBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgY3JlYXRlRG90c1xuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUV4cClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyMDAwKVxuICAgICAgICAgICAgLmF0dHIoXCJjeFwiLCBkID0+IHsgcmV0dXJuIHhzY2wocGFyc2VUaW1lKGQueCkpIH0pXG4gICAgICAgICAgICAuYXR0cihcImN5XCIsIGQgPT4geyByZXR1cm4geXNjbChkLnkpIH0pXG4gICAgICAgICAgICAuYXR0cihcInJcIiwgZCA9PiB7cmV0dXJuIDQwICogZC5yZWxldmFuY2V9KVxuICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCAoZCxpKSA9PiB7cmV0dXJuIFwiZG90X1wiICsgaX0pXG4gICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkLnkgPj0gNSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIwLjVcIlxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZC55IDw9IC01KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjAuNVwiXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiMC4zXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZC55ID49IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZ3JlZW5cIlxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZC55IDw9IC01KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJlZFwiXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwid2hpdGVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgY29uc3QgdXBkYXRlRG90cyA9IHN2Zy5zZWxlY3RBbGwoXCIuZG90XCIpXG4gICAgICAgICAgICAuZGF0YShzY2F0dGVyRGF0YSlcblxuICAgICAgICB1cGRhdGVEb3RzXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlRXhwKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDIwMDApXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZG90XCIpXG4gICAgICAgICAgICAuYXR0cihcImN4XCIsIGQgPT4geyByZXR1cm4geHNjbChwYXJzZVRpbWUoZC54KSkgfSlcbiAgICAgICAgICAgIC5hdHRyKFwiY3lcIiwgZCA9PiB7IHJldHVybiB5c2NsKGQueSkgfSlcbiAgICAgICAgICAgIC5hdHRyKFwiclwiLCBkID0+IHsgcmV0dXJuIDQwICogZC5yZWxldmFuY2UgfSlcbiAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGQueSA+PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjAuNVwiXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkLnkgPD0gLTUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiMC41XCJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIwLjNcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkLnkgPj0gNSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJncmVlblwiXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkLnkgPD0gLTUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicmVkXCJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcIi5kb3RcIilcbiAgICAgICAgICAgIC5kYXRhKHNjYXR0ZXJEYXRhKVxuICAgICAgICAgICAgLmV4aXQoKS5yZW1vdmUoKTtcbiAgICB9XG59IiwiaW1wb3J0ICcuL3N0eWxlcy9kZXZlbG9wbWVudC5jc3MnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuaW1wb3J0IHF1ZXJ5RmllbGQgZnJvbSAnLi9xdWVyeV9maWVsZCc7XG5pbXBvcnQgJy4vc3R5bGVzL21haW4uY3NzJztcblxuIFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgY29uc29sZS5sb2coXCJEZXZlbG9wbWVudCBNb2RlIVwiKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBwcm9wcyA9IHt9XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcblxuICAgIC8vIFRlc3RpbmcgYmVjYXVzZSBJIGZvcmdvdCBob3cgdG8gdmFuaWxsYSBqc1xuICAgIC8vIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIGNvbnN0IG5ld0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkknbSBiZWluZyBjcmVhdGVkIHdpdGhpbiB0aGUgaW5kZXguanMgZmlsZSB0byB0ZXN0IGlmIGNoYW5nZXMgc2hvd1wiKTtcbiAgICAvLyBuZXdEaXYuYXBwZW5kQ2hpbGQobmV3Q29udGVudCk7XG4gICAgLy8gbWFpbi5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgIC8vIFRlc3RpbmcgYmVjYXVzZSBJIGZvcmdvdCBob3cgdG8gdmFuaWxsYSBqc1xuICAgIFxuICAgIGNvbnN0IGNoYXJ0ID0gbmV3IENoYXJ0KHByb3BzKVxuICAgIHByb3BzLmNoYXJ0ID0gY2hhcnRcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQocXVlcnlGaWVsZChwcm9wcykpO1xuXG5cbiAgICBjb25zdCBkdW1teURhdGEgPSBjaGFydC5kdW1teURhdGEoKTtcbiAgICBjaGFydC5idWlsZChkdW1teURhdGEpO1xuXG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCdzdmcnKVxuXG4gICAgXG4gICAgXG4gICAgLy8gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlJlcmVuZGVyaW5nXCIpO1xuICAgIC8vICAgICBjb25zdCBuZXdEYXRhID0gY2hhcnQuZHVtbXlEYXRhKClcbiAgICAvLyAgICAgY2hhcnQucmVuZGVyKG5ld0RhdGEpfSwgNTAwMClcbiAgICAgICAgXG4gICAgXG4gICAgXG59KVxuIiwiaW1wb3J0IHsgbmV3c19hcGlfa2V5IH0gZnJvbSAnLi4vY29uZmlnL2tleXMnO1xuXG5jb25zdCBoZWFkbGluZXMgPSAnaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi90b3AtaGVhZGxpbmVzPyc7XG5jb25zdCBldmVyeXRoaW5nID0gXCJodHRwczovL25ld3NhcGkub3JnL3YyL2V2ZXJ5dGhpbmc/XCI7XG5jb25zdCBhZGRDb3VudHJ5ID0gY291bnRyeSA9PiAoYGNvdW50cnk9JHtjb3VudHJ5fSZgKTtcbmNvbnN0IGFkZFNvdXJjZSA9IHNvdXJjZSA9PiAoYHNvdXJjZXM9JHtzb3VyY2V9JmApO1xuY29uc3QgYWRkUXVlcnkgPSBxdWVyeSA9PiAoYHE9JHtxdWVyeX0mYCk7IC8vc2VhcmNoZXMgZm9yIHF1ZXJ5IGluIGJvdGggdGl0bGUgYW5kIGJvZHlcbmNvbnN0IGFkZEZyb20gPSBzdGFydCA9PiAoYGZyb209JHtzdGFydH0mYCk7XG5jb25zdCBzb3J0QnkgPSBvcHRpb24gPT4gKGBzb3J0Qnk9JHtvcHRpb259JmApO1xuY29uc3QgYWRkVG8gPSBlbmQgPT4gKGB0bz0ke2VuZH0mYCk7XG5jb25zdCBhZGRMYW5ndWFnZSA9IGxuID0+IChgbGFuZ3VhZ2U9JHtsbn0mYCk7XG5jb25zdCBhZGRQYWdlc2l6ZSA9IGludCA9PiAoYHBhZ2VTaXplPSR7aW50fSZgKTtcbmNvbnN0IHBhZ2UgPSBpbnQgPT4gKGBwYWdlPSR7aW50fSZgKTtcblxuY29uc3QgYXBpS2V5ID0gYGFwaUtleT0ke25ld3NfYXBpX2tleX1gXG5cbmV4cG9ydCBjb25zdCBmZXRjaEhlYWRsaW5lcyA9ICgpID0+IHtcbiAgICBjb25zdCB1cmwgPSBoZWFkbGluZXMgKyBhZGRDb3VudHJ5KCd1cycpICsgYXBpS2V5O1xuICAgIGNvbnN0IHJlcSA9IG5ldyBSZXF1ZXN0KHVybCk7XG4gICAgY29uc29sZS5sb2coXCJSZXF1ZXN0aW5nIHRvcCAyMCBoZWFkbGluZXMhXCIpXG4gICAgcmV0dXJuIGZldGNoKHJlcSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlLmpzb24oKSkpICAgIFxufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRXZlcnl0aGluZ0ZvciA9IChxdWVyeSkgPT4ge1xuICAgIGNvbnN0IHVybCA9IGV2ZXJ5dGhpbmcgKyBhZGRRdWVyeShxdWVyeSkgKyBhZGRMYW5ndWFnZSgnZW4nKSArIGFkZFBhZ2VzaXplKDEwMCkgKyBzb3J0QnkoJ3JlbGV2YW5jeScpICsgYXBpS2V5O1xuICAgIGNvbnN0IHJlcSA9IG5ldyBSZXF1ZXN0KHVybCk7XG4gICAgY29uc29sZS5sb2coYFJlcXVlc3RpbmcgdG9wIDIwIGFydGljbGVzIGFib3V0ICR7cXVlcnl9IWApXG4gICAgcmV0dXJuIGZldGNoKHJlcSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxufVxuXG5cbiIsImltcG9ydCB7IGZldGNoRXZlcnl0aGluZ0ZvciB9IGZyb20gJy4vbmV3cydcbmltcG9ydCB7IHByb2Nlc3NEYXRhIH0gZnJvbSAnLi9zZW50aW1lbnQnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBcbiAgICBjb25zdCBxdWVyeUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHF1ZXJ5SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgcXVlcnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInF1ZXJ5LWZpZWxkXCIpO1xuICAgIFxuICAgIFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocXVlcnlJbnB1dClcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiBkZWJvdW5jZWRUeXBpbmcoZXZlbnQsIHByb3BzLCBxdWVyeUlucHV0KSlcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBjb25zdCBjaGFydCA9IHByb3BzLmNoYXJ0XG4gICAgICAgIFxuICAgICAgICAvLyBjb25zdCB2YWx1ZSA9IHF1ZXJ5SW5wdXQudmFsdWU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBJIFdBUyBTVUJNSVRURUQgV0lUSCBUSEUgVEVYVCAke3ZhbHVlfWApXG4gICAgICAgIC8vIGZldGNoRXZlcnl0aGluZ0Zvcih2YWx1ZSlcbiAgICAgICAgLy8gICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgLy8gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7fVxuICAgICAgICAvLyAgICAgICAgcGF5bG9hZC5xdWVyeSA9IHZhbHVlXG4gICAgICAgIC8vICAgICAgICBwYXlsb2FkLmFydGljbGVzID0gcmVzcG9uc2UuYXJ0aWNsZXNcbiAgICAgICAgLy8gICAgICAgIHJldHVybiBwYXlsb2FkXG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyAgICAgLnRoZW4oIHBheWxvYWQgPT4gcHJvY2Vzc0RhdGEocGF5bG9hZCkgKSAvLyBzaG91bGQgcmV0dXJuIGFycmF5IG9mIG9iamVjdHMsIHggaXMgZGF0ZXRpbWUsIHkgaXMgc2VudGltZW50IHNjb3JlXG4gICAgICAgIC8vICAgICAudGhlbiggKHBheWxvYWQpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIlJlcmVuZGVyaW5nXCIpO1xuICAgICAgICAvLyAgICAgICAgIGNoYXJ0LnJlbmRlcihwYXlsb2FkKVxuICAgICAgICAvLyAgICAgfSlcbiAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgZm9ybVxuICAgIClcbn1cblxuXG5jb25zdCBoYW5kbGVUeXBpbmcgPSAoZXZlbnQscHJvcHMsIHF1ZXJ5SW5wdXQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGNoYXJ0ID0gcHJvcHMuY2hhcnRcbiAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5SW5wdXQudmFsdWU7XG4gICAgY29uc29sZS5sb2coYEkgV0FTIFNVQk1JVFRFRCBXSVRIIFRIRSBURVhUICR7dmFsdWV9YClcbiAgICBmZXRjaEV2ZXJ5dGhpbmdGb3IodmFsdWUpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSB7fVxuICAgICAgICAgICAgcGF5bG9hZC5xdWVyeSA9IHZhbHVlXG4gICAgICAgICAgICBwYXlsb2FkLmFydGljbGVzID0gcmVzcG9uc2UuYXJ0aWNsZXNcbiAgICAgICAgICAgIHJldHVybiBwYXlsb2FkXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHBheWxvYWQgPT4gcHJvY2Vzc0RhdGEocGF5bG9hZCkpIFxuICAgICAgICAudGhlbigocGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXJlbmRlcmluZ1wiKTtcbiAgICAgICAgICAgIGNoYXJ0LnJlbmRlcihwYXlsb2FkKVxuICAgICAgICB9KVxufVxuXG5cbi8vIFVzZSBmb3IgdGVzdGluZyBmdW5jdGlvbmFsaXR5LCBzb3VyY2VkIGZyb206IGh0dHBzOi8vY29kZWJ1cnN0LmlvL3Rocm90dGxpbmctYW5kLWRlYm91bmNpbmctaW4tamF2YXNjcmlwdC02NDZkMDc2ZDBhNDRcbmNvbnN0IGRlYm91bmNlID0gKGRlbGF5LCBmbikgPT4ge1xuICAgIGxldCB0aW1lcklkO1xuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBpZiAodGltZXJJZCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgICB9XG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGZuKC4uLmFyZ3MpO1xuICAgICAgICAgICAgdGltZXJJZCA9IG51bGw7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG59XG5cbmNvbnN0IGRlYm91bmNlZFR5cGluZyA9IGRlYm91bmNlKDEwMDAsIGhhbmRsZVR5cGluZyk7XG5cbiIsImltcG9ydCBTZW50aW1lbnQgZnJvbSAnc2VudGltZW50J1xuXG5cbmV4cG9ydCBjb25zdCBwcm9jZXNzRGF0YSA9ICh7YXJ0aWNsZXMsIHZhbHVlfSkgPT4ge1xuICAgIGNvbnN0IHBheWxvYWQgPSB7fVxuICAgIGNvbnN0IHNlbnRpbWVudCA9IG5ldyBTZW50aW1lbnQoKTtcbiAgICBjb25zdCBwcm9jZXNzaW5nRGF0YSA9IFtdO1xuICAgIGNvbnN0IHJhdGlvID0gMC42XG4gICAgYXJ0aWNsZXMuZm9yRWFjaChhcnRpY2xlID0+IHtcbiAgICAgICAgY29uc3QgZGF0dW0gPSB7fVxuICAgICAgICBkYXR1bS5jb250ZW50ID0gYXJ0aWNsZS5jb250ZW50IHx8IFwiXCJcbiAgICAgICAgZGF0dW0udGl0bGUgPSBhcnRpY2xlLnRpdGxlIHx8IFwiVW5uYW1lZFwiXG4gICAgICAgIGRhdHVtLmF1dGhvciA9IGFydGljbGUuYXV0aG9yIHx8IGRhdHVtLnRpdGxlXG4gICAgICAgIGRhdHVtLnNvdXJjZSA9IGFydGljbGUuc291cmNlLm5hbWVcbiAgICAgICAgZGF0dW0udXJsID0gYXJ0aWNsZS51cmxcbiAgICAgICAgZGF0dW0uZGVzY3JpcHRpb24gPSBhcnRpY2xlLmRlc2NyaXB0aW9uIHx8IFwiVW5hdmFpbGFibGVcIjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNvbnRlbnRTZW50aW1lbnQgPSBzZW50aW1lbnQuYW5hbHl6ZShkYXR1bS5jb250ZW50KVxuICAgICAgICBjb25zdCB0aXRsZVNlbnRpbWVudCA9IHNlbnRpbWVudC5hbmFseXplKGRhdHVtLnRpdGxlKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgY29tcGFyYXRpdmUgPSBjb250ZW50U2VudGltZW50LmNvbXBhcmF0aXZlIDwgMC4wOCA/IE1hdGguYWJzKGNvbnRlbnRTZW50aW1lbnQuY29tcGFyYXRpdmUpLzAuNzUgOiBjb250ZW50U2VudGltZW50LmNvbXBhcmF0aXZlIC8vVEhJUyBJUyBPTkxZIEEgUExBQ0VIT0xERVIsIHVwZGF0ZSB0byBtb3JlIHJpZ29yb3VzIHZhbHVlIGxhdGVyXG4gICAgICAgIGRhdHVtLnJlbGV2YW5jZSA9IE1hdGgucm91bmQoY29tcGFyYXRpdmUgKiAxMDAwKS8xMDAwXG4gICAgICAgIGRhdHVtLnggPSBhcnRpY2xlLnB1Ymxpc2hlZEF0LnNwbGl0KFwiVFwiKVswXVxuICAgICAgICBkYXR1bS55ID0gKGRhdHVtLnJlbGV2YW5jZS8wLjI1KSAqIChNYXRoLnJvdW5kKCgoY29udGVudFNlbnRpbWVudC5zY29yZSAqIHJhdGlvKSArICh0aXRsZVNlbnRpbWVudC5zY29yZSAqICgxLXJhdGlvKSkpICogMTAwMCkgLzEwMDApO1xuICAgICAgICBwcm9jZXNzaW5nRGF0YS5wdXNoKGRhdHVtKVxuICAgIH0pXG4gICAgcGF5bG9hZC5zY2F0dGVyRGF0YSA9IHByb2Nlc3NpbmdEYXRhO1xuICAgIHBheWxvYWQubGluZURhdGEgPSBhdmVyYWdlRGF5U2NvcmVzKHByb2Nlc3NpbmdEYXRhKTtcbiAgICBwYXlsb2FkLnRvdGFsID0gY2FsY3VsYXRlVG90YWxzKHByb2Nlc3NpbmdEYXRhKTtcblxuICAgIHJldHVybiBwYXlsb2FkXG59XG5cbmNvbnN0IGNhbGN1bGF0ZVRvdGFscyA9IGRhdGEgPT4ge1xuICAgIGNvbnN0IHRvdGFsID0ge31cbiAgICBkYXRhLmZvckVhY2goZGF0dW0gPT4ge1xuICAgICAgICB0b3RhbC5zY29yZSA9IHRvdGFsLnNjb3JlID8gdG90YWwuc2NvcmUgKyBkYXR1bS55IDogZGF0dW0ueVxuICAgICAgICB0b3RhbC5jb3VudCA9IHRvdGFsLmNvdW50ID8gdG90YWwuY291bnQgKyAxIDogMVxuICAgIH0pXG4gICAgdG90YWwuYXZlcmFnZSA9IHRvdGFsLnNjb3JlL3RvdGFsLmNvdW50O1xuICAgIHJldHVybiB0b3RhbFxufVxuXG5jb25zdCBhdmVyYWdlRGF5U2NvcmVzID0gZGF0YSA9PiB7XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IHt9XG4gICAgY29uc3QgY291bnQgPSB7fVxuICAgIGRhdGEuZm9yRWFjaChkYXR1bSA9PiB7XG4gICAgICAgIHByb2Nlc3NlZERhdGFbZGF0dW0ueF0gPSBwcm9jZXNzZWREYXRhW2RhdHVtLnhdID8gcHJvY2Vzc2VkRGF0YVtkYXR1bS54XSArIGRhdHVtLnkgOiBkYXR1bS55O1xuICAgICAgICBjb3VudFtkYXR1bS54XSA9IGNvdW50W2RhdHVtLnhdID8gY291bnRbZGF0dW0ueF0gKyAxIDogMVxuICAgIH0pXG5cbiAgICBjb25zdCBhdmVyYWdlZERhdGEgPSBbXVxuICAgIE9iamVjdC5rZXlzKHByb2Nlc3NlZERhdGEpLmZvckVhY2goZGF0ZSA9PiB7XG4gICAgICAgIGF2ZXJhZ2VkRGF0YS5wdXNoKHsgeDogZGF0ZSwgeTogcHJvY2Vzc2VkRGF0YVtkYXRlXSAvIGNvdW50W2RhdGVdfSk7XG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBzb3J0ZWRBdmVyYWdlZERhdGEgPSBhdmVyYWdlZERhdGEuc29ydChzb3J0RGF0ZSlcbiAgICByZXR1cm4gc29ydGVkQXZlcmFnZWREYXRhXG59XG5cblxuY29uc3Qgc29ydERhdGUgPSAoYSwgYikgPT4ge1xuICAgIGNvbnN0IGRhdGUxID0gbmV3IERhdGUoYS54KVxuICAgIGNvbnN0IGRhdGUyID0gbmV3IERhdGUoYi54KVxuICAgIGlmIChkYXRlMSA+PSBkYXRlMil7IFxuICAgICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgIH1cbn1cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==